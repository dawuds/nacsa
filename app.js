/* ===== NACSA Act 854 Explorer — Single-Page Application ===== */

const state = {
  parts: null,
  provisions: null,
  sectors: null,
  requirements: null,
  evidence: null,
  controls: null,
  artifacts: null,
  penalties: null,
  crossRefs: null,
  supplements: null,
  riskManagement: null,
  route: { view: 'overview' },
};

const cache = new Map();
async function fetchJSON(path) {
  if (cache.has(path)) return cache.get(path);
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    cache.set(path, data);
    return data;
  } catch (e) {
    console.warn(`Failed to load ${path}:`, e);
    return null;
  }
}

function renderFetchError(container, path, message) {
  const msg = message || `Failed to load data from ${path}.`;
  container.innerHTML = `<div class="error-state"><h2>Data Load Error</h2><p>${msg}</p><p>Please check your connection and try refreshing the page.</p></div>`;
}

async function fetchJSONOrError(path, container) {
  const data = await fetchJSON(path);
  if (data === null && container) {
    renderFetchError(container, path);
  }
  return data;
}

/* ===== ROUTING ===== */
function parseRoute() {
  const hash = location.hash.slice(1) || '';
  if (!hash || hash === 'overview') return { view: 'overview' };
  if (hash.startsWith('search/')) return { view: 'search', query: decodeURIComponent(hash.slice(7)) };
  if (hash === 'framework') return { view: 'framework' };
  if (hash.startsWith('framework/')) return { view: 'framework-detail', id: hash.slice(10) };
  if (hash === 'controls') return { view: 'controls' };
  if (hash.startsWith('control/')) return { view: 'control-detail', slug: hash.slice(8) };
  if (hash === 'risk') return { view: 'risk' };
  if (hash.startsWith('risk/')) return { view: 'risk', sub: hash.slice(5) };
  if (hash === 'sectors') return { view: 'sectors' };
  if (hash.startsWith('sector/')) return { view: 'sector', id: hash.slice(7) };
  if (hash === 'penalties') return { view: 'penalties' };
  if (hash === 'supplements') return { view: 'supplements' };
  if (hash.startsWith('supplement/')) return { view: 'supplement-detail', id: hash.slice(11) };
  if (hash === 'reference') return { view: 'reference' };
  if (hash.startsWith('reference/')) return { view: 'reference', sub: hash.slice(10) };
  // Legacy routes — redirect gracefully
  if (hash.startsWith('part/')) return { view: 'framework-detail', id: hash.slice(5) };
  if (hash.startsWith('section/')) return { view: 'framework-detail', id: hash.slice(8) };
  if (hash === 'artifacts') return { view: 'controls' };
  if (hash === 'cross-references') return { view: 'reference' };
  if (hash === 'risk-management') return { view: 'risk' };
  return { view: 'overview' };
}

/* ===== INIT ===== */
async function init() {
  try {
    const [parts, provisionsArr, sectorsData] = await Promise.all([
      fetchJSON('provisions/parts.json'),
      fetchJSON('provisions/index.json'),
      fetchJSON('sectors/index.json'),
    ]);
    state.parts = parts || [];
    state.provisions = {};
    if (provisionsArr) {
      for (const s of provisionsArr) state.provisions[s.id] = s;
    }
    state.sectors = (sectorsData && sectorsData.sectors) || (Array.isArray(sectorsData) ? sectorsData : []);
    window.addEventListener('hashchange', render);
    document.addEventListener('click', handleClick);
    document.addEventListener('change', handleChange);
    document.getElementById('search-input').addEventListener('input', debounce(handleSearch, 300));
    render();
  } catch (err) {
    console.error('Init failed:', err);
    document.getElementById('app').innerHTML = '<div class="error-state"><h2>Failed to load data</h2><p>Please try refreshing the page.</p></div>';
  }
}

function debounce(fn, ms) {
  let t;
  return function(...args) { clearTimeout(t); t = setTimeout(() => fn.apply(this, args), ms); };
}

/* ===== RENDER DISPATCHER ===== */
function render() {
  state.route = parseRoute();
  const app = document.getElementById('app');
  updateNav();
  switch (state.route.view) {
    case 'overview': renderOverview(app); break;
    case 'framework': renderFramework(app); break;
    case 'framework-detail': renderFrameworkDetail(app, state.route.id); break;
    case 'controls': renderControls(app); break;
    case 'control-detail': renderControlDetail(app, state.route.slug); break;
    case 'risk': renderRiskManagement(app); break;
    case 'sectors': renderSectors(app); break;
    case 'sector': renderSector(app, state.route.id); break;
    case 'penalties': renderPenalties(app); break;
    case 'supplements': renderSupplements(app); break;
    case 'supplement-detail': renderSupplementDetail(app, state.route.id); break;
    case 'reference': renderReference(app); break;
    case 'search': renderSearch(app, state.route.query); break;
    default: renderOverview(app);
  }
  window.scrollTo(0, 0);
}

function updateNav() {
  document.querySelectorAll('.nav-link').forEach(el => {
    const view = el.dataset.view;
    el.classList.toggle('active', view === state.route.view ||
      (view === 'overview' && state.route.view === 'overview') ||
      (view === 'framework' && state.route.view === 'framework-detail') ||
      (view === 'controls' && state.route.view === 'control-detail') ||
      (view === 'sectors' && state.route.view === 'sector') ||
      (view === 'supplements' && state.route.view === 'supplement-detail')
    );
  });
}

/* ===== HELPERS ===== */
function esc(s) { const el = document.createElement('span'); el.textContent = s || ''; return el.innerHTML; }

function badgeFor(type) {
  const map = {
    mandatory: 'badge-mandatory',
    administrative: 'badge-administrative',
    procedural: 'badge-procedural',
    enabling: 'badge-enabling',
    definitional: 'badge-definitional',
    prohibitive: 'badge-prohibitive',
    penalty: 'badge-penalty',
  };
  return `<span class="badge ${map[type] || 'badge-administrative'}">${esc(type)}</span>`;
}

function renderNotFound(el) {
  el.innerHTML = '<div class="empty-state"><div class="empty-state-text">Page not found.</div><a href="#" style="color:var(--accent);">Return to overview</a></div>';
}

/* Normalize controls library: convert flat {controls:[...]} to domain-keyed {domainSlug: [ctrl,...]} */
function normalizeLibrary(raw) {
  if (!raw) return {};
  // If already domain-keyed (no "controls" array), return as-is
  if (!Array.isArray(raw.controls)) return raw;
  const grouped = {};
  for (const c of raw.controls) {
    const d = c.domain || 'uncategorized';
    if (!grouped[d]) grouped[d] = [];
    grouped[d].push(c);
  }
  return grouped;
}

/* ===== OVERVIEW ===== */
function renderOverview(el) {
  const totalSections = Object.keys(state.provisions).length;
  el.innerHTML = `
    <div class="disclaimer">
      This database is for educational and indicative purposes only. It does not constitute legal advice. The content represents an interpretation of the Cyber Security Act 2024 (Act 854) and its subsidiary instruments. Always consult the official Gazette text and qualified legal counsel for compliance decisions.
    </div>
    <div class="stats-banner">
      <div class="stat-card"><div class="stat-number">${totalSections}</div><div class="stat-label">Sections</div></div>
      <div class="stat-card"><div class="stat-number">${state.parts.length}</div><div class="stat-label">Parts</div></div>
      <div class="stat-card"><div class="stat-number">${state.sectors ? state.sectors.length : '—'}</div><div class="stat-label">NCII Sectors</div></div>
      <div class="stat-card"><div class="stat-number">6h</div><div class="stat-label">Incident Notification</div></div>
    </div>
    <h2 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem;">Browse by Part</h2>
    <div class="control-grid">
      ${state.parts.map(p => {
        const sections = Object.values(state.provisions).filter(s => s.part === p.id);
        return `<div class="control-card" onclick="location.hash='#framework/part-${p.id}'" data-part="${p.id}" style="border-left: 4px solid var(--accent); cursor:pointer;">
          <div class="control-id">Part ${p.id}</div>
          <h3 class="control-card-title">${esc(p.name)}</h3>
          <p class="control-card-desc">${sections.length} sections &middot; ${p.sections}</p>
        </div>`;
      }).join('')}
    </div>
  `;
}

/* ===== FRAMEWORK DETAIL (Part or Section) ===== */
function renderFrameworkDetail(el, id) {
  // Try as part first (e.g., #framework/part-IV)
  if (id.startsWith('part-')) {
    const partId = id.slice(5);
    return renderPartDetail(el, partId);
  }
  // Try as section (e.g., #framework/s17)
  const s = state.provisions[id];
  if (s) return renderSectionDetail(el, s);
  // Try matching by part ID directly
  const part = state.parts.find(p => p.id === id);
  if (part) return renderPartDetail(el, id);
  return renderNotFound(el);
}

function renderPartDetail(el, partId) {
  const part = state.parts.find(p => p.id === partId);
  if (!part) return renderNotFound(el);
  const sections = Object.values(state.provisions)
    .filter(s => s.part === partId)
    .sort((a, b) => a.sectionNumber - b.sectionNumber);

  const divisions = {};
  for (const s of sections) {
    const key = s.division ? `Division ${s.division}` : 'General';
    if (!divisions[key]) divisions[key] = [];
    divisions[key].push(s);
  }

  el.innerHTML = `
    <nav class="breadcrumbs">
      <a href="#framework">Framework</a><span class="sep">/</span>
      <span class="current">Part ${partId}</span>
    </nav>
    <div class="page-title">Part ${partId}: ${esc(part.name)}</div>
    <div class="page-subtitle">${esc(part.description)} &middot; ${sections.length} sections</div>
    <div class="accordion">
      ${Object.entries(divisions).map(([div, secs]) => `
        <div class="accordion-item open">
          <button class="accordion-trigger" data-accordion>
            <span>${esc(div)} (${secs.length} sections)</span>
            <span class="chevron">&#9654;</span>
          </button>
          <div class="accordion-content">
            ${secs.map(s => `
              <a href="#framework/${s.id}" class="section-link">
                <span class="section-link-id">${s.id}</span>
                <span class="section-link-title">${esc(s.title)}</span>
                <span class="section-link-badges">
                  ${badgeFor(s.obligationType)}
                </span>
              </a>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSectionDetail(el, s) {
  const part = state.parts.find(p => p.id === s.part);

  el.innerHTML = `
    <nav class="breadcrumbs">
      <a href="#framework">Framework</a><span class="sep">/</span>
      <a href="#framework/part-${s.part}">Part ${s.part}${part ? ': ' + esc(part.name) : ''}</a><span class="sep">/</span>
      <span class="current">${s.id}</span>
    </nav>
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.25rem;">
      <span style="font-family:var(--font-mono);font-size:1rem;color:var(--accent);font-weight:600;">${s.id}</span>
      ${badgeFor(s.obligationType)}
      ${s.relatedSector ? `<span class="badge badge-sector">NCII: ${esc(Array.isArray(s.relatedSector) ? s.relatedSector.join(', ') : s.relatedSector)}</span>` : ''}
    </div>
    <div class="page-title">${esc(s.title)}</div>
    <div class="page-subtitle">Part ${s.part}${s.division ? ', Division ' + s.division : ''} &middot; Effective: ${s.effectiveDate || 'N/A'}</div>

    <div class="tabs">
      <button class="tab-btn active" data-tab="overview">Overview</button>
      <button class="tab-btn" data-tab="requirements">Requirements</button>
      <button class="tab-btn" data-tab="evidence">Evidence</button>
      <button class="tab-btn" data-tab="controls">Controls</button>
      <button class="tab-btn" data-tab="artifacts">Artifacts</button>
    </div>

    <div class="tab-panel active" id="tab-overview">
      <div class="block-label">Verbatim Text</div>
      <div class="verbatim-block">${esc(s.verbatim)}</div>
      <div class="block-label">Plain-Language Translation <span class="badge badge-ai" title="AI-generated interpretation — verify against official gazette text and qualified legal counsel">AI Generated</span></div>
      <div class="translation-block">${esc(s.translation)}</div>
      ${s.keywords && s.keywords.length ? `
        <div style="margin-top:1rem;">
          <div class="block-label">Keywords</div>
          <div style="display:flex;gap:0.375rem;flex-wrap:wrap;">
            ${s.keywords.map(k => `<span class="badge badge-category">${esc(k)}</span>`).join('')}
          </div>
        </div>
      ` : ''}
    </div>
    <div class="tab-panel" id="tab-requirements"><div class="loading"><div class="spinner"></div><span>Loading requirements…</span></div></div>
    <div class="tab-panel" id="tab-evidence"><div class="loading"><div class="spinner"></div><span>Loading evidence…</span></div></div>
    <div class="tab-panel" id="tab-controls"><div class="loading"><div class="spinner"></div><span>Loading controls…</span></div></div>
    <div class="tab-panel" id="tab-artifacts"><div class="loading"><div class="spinner"></div><span>Loading artifacts…</span></div></div>
  `;
}

/* ===== TAB ACTIVATION ===== */
async function activateTab(tabName, sectionId) {
  const panel = document.getElementById(`tab-${tabName}`);
  if (!panel || panel.dataset.loaded) return;

  if (tabName === 'requirements') {
    if (!state.requirements) state.requirements = await fetchJSON('requirements/index.json') || {};
    const req = state.requirements[sectionId];
    if (!req) { panel.innerHTML = '<div class="empty-state"><div class="empty-state-text">No requirements data for this section.</div></div>'; }
    else { panel.innerHTML = renderRequirementsPanel(req); }
  } else if (tabName === 'evidence') {
    if (!state.evidence) state.evidence = await fetchJSON('evidence/index.json') || {};
    const ev = state.evidence[sectionId];
    if (!ev) { panel.innerHTML = '<div class="empty-state"><div class="empty-state-text">No evidence data for this section.</div></div>'; }
    else { panel.innerHTML = renderEvidencePanel(ev); }
  } else if (tabName === 'controls') {
    if (!state.controls) {
      const [domains, library, sectionMap] = await Promise.all([
        fetchJSON('controls/domains.json'),
        fetchJSON('controls/library.json'),
        fetchJSON('controls/section-map.json'),
      ]);
      state.controls = { domains: domains || {}, library: normalizeLibrary(library), sectionMap: sectionMap || { sectionToControls: {}, controlToSections: {} } };
    }
    const slugs = state.controls.sectionMap.sectionToControls?.[sectionId] || [];
    if (!slugs.length) { panel.innerHTML = '<div class="empty-state"><div class="empty-state-text">No controls mapped to this section.</div></div>'; }
    else {
      const controls = [];
      for (const [, ctrls] of Object.entries(state.controls.library)) {
        for (const c of ctrls) { if (slugs.includes(c.slug)) controls.push(c); }
      }
      panel.innerHTML = controls.map(c => renderControlCard(c)).join('');
    }
  } else if (tabName === 'artifacts') {
    if (!state.artifacts) {
      const [inventory, sectionMap] = await Promise.all([
        fetchJSON('artifacts/inventory.json'),
        fetchJSON('artifacts/section-map.json'),
      ]);
      state.artifacts = { inventory: inventory || {}, sectionMap: sectionMap || { sectionToArtifacts: {}, artifactToSections: {} } };
    }
    const slugs = state.artifacts.sectionMap.sectionToArtifacts?.[sectionId] || [];
    if (!slugs.length) { panel.innerHTML = '<div class="empty-state"><div class="empty-state-text">No artifacts mapped to this section.</div></div>'; }
    else {
      const arts = [];
      for (const [, items] of Object.entries(state.artifacts.inventory)) {
        for (const a of items) { if (slugs.includes(a.slug)) arts.push(a); }
      }
      panel.innerHTML = arts.map(a => renderArtifactCard(a)).join('');
    }
  }
  panel.dataset.loaded = 'true';
}

/* ===== REQUIREMENTS PANEL ===== */
function sourceBadge(sourceType) {
  const map = { act: 'badge-source-act', regulation: 'badge-source-regulation', directive: 'badge-source-directive', 'code-of-practice': 'badge-source-code-of-practice' };
  const labels = { act: 'Act', regulation: 'Regulation', directive: 'Directive', 'code-of-practice': 'CoP' };
  return `<span class="badge ${map[sourceType] || 'badge-source-act'}">${esc(labels[sourceType] || sourceType || 'Act')}</span>`;
}

function renderRequirementsPanel(req) {
  const cols = ['legal', 'technical', 'governance'];
  const colLabels = { legal: 'Legal / Compliance', technical: 'Technical / Operational', governance: 'Governance' };
  return `
    <div class="req-columns">
      ${cols.map(col => {
        const data = req[col];
        if (!data) return `<div class="req-column"><div class="req-column-header ${col}">${colLabels[col]}</div><div class="req-column-body"><em style="color:var(--text-muted);font-size:0.8125rem;">No data</em></div></div>`;
        return `
          <div class="req-column">
            <div class="req-column-header ${col}">${colLabels[col]}</div>
            <div class="req-column-body">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(data.summary)}<span class="badge badge-ai" title="AI-generated interpretation — verify against official gazette text and qualified legal counsel">AI Generated</span></p>
              ${(data.requirements || []).map(r => `
                <div class="req-item">
                  <div style="display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap;">
                    <span class="req-item-id">${esc(r.id)}</span>
                    ${sourceBadge(r.sourceType)}
                    ${r.tightens ? `<span class="badge badge-category">tightens ${esc(r.tightens)}</span>` : ''}
                  </div>
                  <div class="req-item-text">${esc(r.requirement)}</div>
                  <div class="req-item-meta">
                    <span class="req-item-priority priority-${(r.priority || '').toLowerCase()}">${esc(r.priority || '')}</span>
                    <span>${esc(r.owner || '')}</span>
                    <span>${esc(r.frequency || '')}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ===== EVIDENCE PANEL ===== */
function renderEvidencePanel(ev) {
  return `
    ${ev.auditorFocus ? `
      <div class="auditor-focus">
        <div class="block-label">NACSA Assessor Focus <span class="badge badge-ai" title="AI-generated interpretation — verify against official gazette text and qualified legal counsel">AI Generated</span></div>
        ${esc(ev.auditorFocus)}
      </div>
    ` : ''}
    ${(ev.evidenceItems || []).map(item => `
      <div class="card evidence-card">
        <div class="card-title">${esc(item.name)}</div>
        <div class="card-meta">
          <span>${esc(item.format || '')}</span>
          <span>Retain: ${esc(item.retentionPeriod || 'N/A')}</span>
        </div>
        <div class="card-body">${esc(item.description || '')}</div>
        ${item.whatGoodLooksLike && item.whatGoodLooksLike.length ? `
          <div class="block-label" style="margin-top:0.75rem;">What Good Looks Like <span class="badge badge-example" title="AI-generated illustrative examples — not exhaustive or prescriptive">Example</span></div>
          <ul class="good-list">${item.whatGoodLooksLike.map(g => `<li><span>${esc(g)}</span></li>`).join('')}</ul>
        ` : ''}
        ${item.commonGaps && item.commonGaps.length ? `
          <div class="block-label" style="margin-top:0.5rem;">Common Gaps <span class="badge badge-example" title="AI-generated illustrative examples — not exhaustive or prescriptive">Example</span></div>
          <ul class="gap-list">${item.commonGaps.map(g => `<li><span>${esc(g)}</span></li>`).join('')}</ul>
        ` : ''}
        ${item.suggestedSources && item.suggestedSources.length ? `
          <div class="block-label" style="margin-top:0.5rem;">Suggested Sources</div>
          <div style="font-size:0.8125rem;color:var(--text-secondary);">${item.suggestedSources.map(s => esc(s)).join(' &middot; ')}</div>
        ` : ''}
      </div>
    `).join('')}
    ${ev.auditTips && ev.auditTips.length ? `
      <div class="card">
        <div class="card-title">Audit Preparation Tips <span class="badge badge-ai" title="AI-generated interpretation — verify against official gazette text and qualified legal counsel">AI Generated</span></div>
        <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
          ${ev.auditTips.map(t => `<li style="margin-bottom:0.25rem;">${esc(t)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;
}

/* ===== CONTROL CARD ===== */
function renderControlCard(c) {
  return `
    <div class="control-card">
      <div class="control-card-header">
        <div><div class="control-card-name"><a href="#control/${c.slug}" style="color:inherit;text-decoration:none;">${esc(c.name)}</a></div></div>
        <div style="display:flex;gap:0.375rem;">
          <span class="badge badge-type">${esc(c.type || '')}</span>
          <span class="badge badge-layer">${esc(c.layer || '')}</span>
        </div>
      </div>
      <div class="control-card-desc">${esc(c.description)}</div>
      ${c.keyActivities && c.keyActivities.length ? `
        <ul class="control-activities">${c.keyActivities.map(a => `<li>${esc(a)}</li>`).join('')}</ul>
      ` : ''}
      ${c.maturity ? `
        <div class="maturity-grid">
          <div class="maturity-card maturity-basic"><div class="maturity-label">Basic</div><p>${esc(c.maturity.basic || '')}</p></div>
          <div class="maturity-card maturity-mature"><div class="maturity-label">Mature</div><p>${esc(c.maturity.mature || '')}</p></div>
          <div class="maturity-card maturity-advanced"><div class="maturity-label">Advanced</div><p>${esc(c.maturity.advanced || '')}</p></div>
        </div>
      ` : ''}
      <div class="control-frameworks">
        ${(c.nistCsf || []).map(r => `<span class="badge badge-domain">NIST ${esc(r)}</span>`).join('')}
        ${(c.iso27001 || []).map(r => `<span class="badge badge-type">ISO ${esc(r)}</span>`).join('')}
        ${(c.rmit || []).map(r => `<span class="badge badge-layer">RMiT ${esc(r)}</span>`).join('')}
        ${(c.cisControls || []).map(r => `<span class="badge badge-category">CIS ${esc(r)}</span>`).join('')}
      </div>
    </div>
  `;
}

/* ===== ARTIFACT CARD ===== */
function renderArtifactCard(a) {
  return `
    <div class="artifact-card">
      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.25rem;">
        <span class="artifact-card-name">${esc(a.name)}</span>
        ${a.mandatory ? '<span class="badge badge-mandatory-doc">Mandatory</span>' : ''}
        <span class="badge badge-category">${esc(a.category)}</span>
      </div>
      <div class="artifact-card-desc">${esc(a.description)}</div>
      <div class="card-meta">
        <span>Owner: ${esc(a.owner || 'N/A')}</span>
        <span>Review: ${esc(a.reviewFrequency || 'N/A')}</span>
        <span>Format: ${esc(a.format || 'N/A')}</span>
      </div>
      ${a.keyContents && a.keyContents.length ? `
        <ul class="artifact-contents">${a.keyContents.map(k => `<li>${esc(k)}</li>`).join('')}</ul>
      ` : ''}
    </div>
  `;
}

/* ===== SECTORS LIST ===== */
async function renderSectors(el) {
  if (!state.sectors) {
    const data = await fetchJSON('sectors/index.json');
    state.sectors = (data && data.sectors) || (Array.isArray(data) ? data : []);
  }
  el.innerHTML = `
    <div class="page-title">${state.sectors.filter(s => s.sectorNumber).length} NCII Sectors</div>
    <div class="page-subtitle">Schedule to the Cyber Security Act 2024 — National Critical Information Infrastructure sectors</div>
    <div class="control-grid">
      ${state.sectors.map(s => `
        <a href="#sector/${s.id}" class="sector-card">
          <div class="sector-card-name">${esc(s.name)}</div>
          <div class="sector-card-lead">Sector Lead: ${esc(s.sectorLead)}</div>
          <div class="sector-card-meta">
            ${(s.obligations || []).length} obligations &middot; CoP: ${esc(s.copStatus || 'pending')}
          </div>
        </a>
      `).join('')}
    </div>
  `;
}

/* ===== SECTOR DETAIL ===== */
async function renderSector(el, id) {
  if (!state.sectors) {
    const data = await fetchJSON('sectors/index.json');
    state.sectors = (data && data.sectors) || (Array.isArray(data) ? data : []);
  }
  const s = state.sectors.find(sec => sec.id === id);
  if (!s) return renderNotFound(el);

  el.innerHTML = `
    <div class="breadcrumbs"><a href="#">Overview</a><span class="sep">/</span><a href="#sectors">Sectors</a><span class="sep">/</span>${esc(s.name)}</div>
    <div class="page-title">${esc(s.name)}</div>
    <div class="page-subtitle">Sector Lead: ${esc(s.sectorLead)} &middot; CoP Status: ${esc(s.copStatus || 'pending')}</div>

    <div class="card">
      <div class="card-body">${esc(s.description)}</div>
    </div>

    ${s.nciiExamples && s.nciiExamples.length ? `
      <div class="card">
        <div class="card-title">NCII Examples</div>
        <ul style="padding-left:1.25rem;font-size:0.8125rem;color:var(--text-secondary);">
          ${s.nciiExamples.map(e => `<li style="margin-bottom:0.25rem;">${esc(e)}</li>`).join('')}
        </ul>
      </div>
    ` : ''}

    ${s.obligations && s.obligations.length ? `
      <div class="card">
        <div class="card-title">Obligations</div>
        ${s.obligations.map(o => `
          <div class="req-item">
            <div class="req-item-id">${esc(o.id)}</div>
            <div class="req-item-text">${esc(o.obligation)}</div>
            <div class="req-item-meta">
              <span>Basis: ${esc(o.basis)}</span>
              <span class="badge badge-mandatory">${esc(o.type)}</span>
            </div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${s.regulatoryOverlaps && s.regulatoryOverlaps.length ? `
      <div style="display:flex;gap:0.375rem;flex-wrap:wrap;margin-top:1rem;">
        ${s.regulatoryOverlaps.map(r => `<span class="badge badge-domain">${esc(r)}</span>`).join('')}
      </div>
    ` : ''}
  `;
}

/* ===== PENALTIES ===== */
async function renderPenalties(el) {
  if (!state.penalties) state.penalties = await fetchJSON('penalties/index.json') || [];
  const categories = {};
  for (const p of state.penalties) {
    const cat = p.category || 'general';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(p);
  }
  const maxFine = Math.max(...state.penalties.map(p => (p.penalty && p.penalty.fineNumeric) || 0));
  const maxImprisonment = state.penalties.reduce((max, p) => {
    const yrs = parseInt(p.penalty && p.penalty.imprisonment) || 0;
    return yrs > max ? yrs : max;
  }, 0);

  el.innerHTML = `
    <div class="page-title">Penalties & Enforcement</div>
    <div class="page-subtitle">Offences under Act 854 and consequential amendments to the Computer Crimes Act 1997</div>
    <div class="stats-banner">
      <div class="stat-card"><div class="stat-number">${state.penalties.length}</div><div class="stat-label">Offences</div></div>
      <div class="stat-card"><div class="stat-number">RM${(maxFine/1000000).toFixed(0)}M</div><div class="stat-label">Max Fine</div></div>
      <div class="stat-card"><div class="stat-number">${maxImprisonment} yrs</div><div class="stat-label">Max Imprisonment</div></div>
      <div class="stat-card"><div class="stat-number">10x</div><div class="stat-label">Corporate Multiplier</div></div>
    </div>
    <div class="filter-bar">
      <span class="filter-chip active" data-filter="all">All</span>
      ${Object.keys(categories).map(cat => `<span class="filter-chip" data-filter="${esc(cat)}">${esc(cat)}</span>`).join('')}
    </div>
    <div id="penalty-list">
      ${state.penalties.map(p => renderPenaltyCard(p)).join('')}
    </div>
  `;
}

function renderPenaltyCard(p) {
  const isSevere = (p.penalty && p.penalty.fineNumeric >= 500000);
  return `
    <div class="penalty-card ${isSevere ? 'severe' : ''}" data-category="${esc(p.category || 'general')}">
      <div class="penalty-section">${esc(p.section)}</div>
      <div class="penalty-offence">${esc(p.offence)}</div>
      <div style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(p.description)}</div>
      <div class="penalty-amounts">
        ${p.penalty ? `
          <div class="penalty-amount">
            Fine ${esc(p.penalty.fine || 'N/A')}
            ${p.penalty.imprisonment ? ' / ' + esc(p.penalty.imprisonment) + ' imprisonment' : ''}
            ${p.penalty.or_both ? ' (or both)' : ''}
          </div>
        ` : ''}
        ${p.bodyCorporate ? `
          <div class="penalty-corporate">
            Body corporate: ${esc(p.bodyCorporate.fine || 'N/A')}
            ${p.bodyCorporate.directorLiability ? ' + director liability' : ''}
          </div>
        ` : ''}
      </div>
      ${p.continuingOffence ? `<div style="font-size:0.75rem;color:var(--red);margin-top:0.5rem;">Continuing offence: ${esc(p.continuingOffence.daily || '')}/day</div>` : ''}
      ${p.compoundable ? `<div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">Compoundable: up to 50% of maximum fine</div>` : ''}
    </div>
  `;
}

/* ===== CONTROLS BROWSER ===== */
async function renderControls(el) {
  if (!state.controls) {
    const [domains, library, sectionMap] = await Promise.all([
      fetchJSON('controls/domains.json'),
      fetchJSON('controls/library.json'),
      fetchJSON('controls/section-map.json'),
    ]);
    state.controls = { domains: domains || {}, library: normalizeLibrary(library), sectionMap: sectionMap || {} };
  }
  const totalControls = Object.values(state.controls.library).reduce((sum, arr) => sum + arr.length, 0);
  const domainEntries = Object.entries(state.controls.domains);

  el.innerHTML = `
    <div class="page-title">Controls Library</div>
    <div class="page-subtitle">${totalControls} controls across ${domainEntries.length} domains</div>
    <div class="accordion">
      ${domainEntries.map(([key, domain]) => {
        const controls = state.controls.library[key] || [];
        return `
          <div class="accordion-item">
            <button class="accordion-trigger" data-accordion>
              <span>${esc(domain.name)} (${controls.length})</span>
              <span class="chevron">&#9654;</span>
            </button>
            <div class="accordion-content">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(domain.description)}</p>
              ${controls.map(c => `
                <a href="#control/${c.slug}" class="section-link">
                  <span class="section-link-title">${esc(c.name)}</span>
                  <span class="section-link-badges">
                    <span class="badge badge-type">${esc(c.type)}</span>
                    <span class="badge badge-layer">${esc(c.layer || '')}</span>
                  </span>
                </a>
              `).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* ===== CONTROL DETAIL ===== */
async function renderControlDetail(el, slug) {
  if (!state.controls) {
    const [domains, library, sectionMap] = await Promise.all([
      fetchJSON('controls/domains.json'), fetchJSON('controls/library.json'), fetchJSON('controls/section-map.json'),
    ]);
    state.controls = { domains: domains || {}, library: normalizeLibrary(library), sectionMap: sectionMap || {} };
  }
  let control = null;
  for (const [, ctrls] of Object.entries(state.controls.library)) {
    control = ctrls.find(c => c.slug === slug);
    if (control) break;
  }
  if (!control) return renderNotFound(el);
  const domain = state.controls.domains[control.domain] || {};

  /* --- Audit Package: ensure artifacts & evidence are loaded --- */
  if (!state.artifacts) {
    const [inventory, sectionMap] = await Promise.all([
      fetchJSON('artifacts/inventory.json'),
      fetchJSON('artifacts/section-map.json'),
    ]);
    state.artifacts = { inventory: inventory || {}, sectionMap: sectionMap || {} };
  }
  if (!state.evidence) {
    state.evidence = await fetchJSON('evidence/index.json') || {};
  }

  /* --- Audit Package: build artifact index & filter --- */
  const controlSlug = control.slug;
  const sections = control.sections || [];
  const artifactIndex = {};
  Object.values(state.artifacts.inventory).forEach(arr => {
    if (Array.isArray(arr)) arr.forEach(a => { artifactIndex[a.slug] = a; });
  });
  const linkedArtifacts = Object.values(artifactIndex)
    .filter(a => Array.isArray(a.controlSlugs) && a.controlSlugs.includes(controlSlug))
    .sort((a, b) => (b.mandatory ? 1 : 0) - (a.mandatory ? 1 : 0));

  /* --- Audit Package: filter evidence by artifact overlap --- */
  const linkedArtifactSlugs = new Set(linkedArtifacts.map(a => a.slug));
  const linkedEvidence = [];
  sections.forEach(s => {
    const ev = state.evidence[s];
    if (ev && ev.evidenceItems) {
      ev.evidenceItems.forEach(item => {
        if (linkedEvidence.find(e => e.id === item.id)) return;
        const itemArtifacts = item.artifactSlugs || [];
        if (!itemArtifacts.length || itemArtifacts.some(sl => linkedArtifactSlugs.has(sl))) {
          linkedEvidence.push(item);
        }
      });
    }
  });

  /* --- Build requirements from sections --- */
  let requirementsHTML = '';
  if (!state.requirements) state.requirements = await fetchJSON('requirements/index.json') || {};
  const legalReqs = [], technicalReqs = [], governanceReqs = [];
  sections.forEach(sid => {
    const req = state.requirements[sid];
    if (!req) return;
    if (req.legal && req.legal.requirements) req.legal.requirements.forEach(r => legalReqs.push(r));
    if (req.technical && req.technical.requirements) req.technical.requirements.forEach(r => technicalReqs.push(r));
    if (req.governance && req.governance.requirements) req.governance.requirements.forEach(r => governanceReqs.push(r));
  });
  if (legalReqs.length || technicalReqs.length || governanceReqs.length) {
    requirementsHTML = `
      <section class="detail-section">
        <h2 class="detail-section-title">Requirements</h2>
        <div class="requirements-grid">
          <div class="requirement-block requirement-legal">
            <div class="requirement-block-label">Legal / Regulatory</div>
            ${legalReqs.length ? `<ul>${legalReqs.map(r => `<li>${esc(r.requirement)}</li>`).join('')}</ul>` : '<p style="font-size:var(--font-size-sm);color:var(--text-muted);">No legal requirements.</p>'}
          </div>
          <div class="requirement-block requirement-technical">
            <div class="requirement-block-label">Technical</div>
            ${technicalReqs.length ? `<ul>${technicalReqs.map(r => `<li>${esc(r.requirement)}</li>`).join('')}</ul>` : '<p style="font-size:var(--font-size-sm);color:var(--text-muted);">No technical requirements.</p>'}
          </div>
          <div class="requirement-block requirement-governance">
            <div class="requirement-block-label">Governance</div>
            ${governanceReqs.length ? `<ul>${governanceReqs.map(r => `<li>${esc(r.requirement)}</li>`).join('')}</ul>` : '<p style="font-size:var(--font-size-sm);color:var(--text-muted);">No governance requirements.</p>'}
          </div>
        </div>
      </section>
    `;
  }

  /* --- Key Activities --- */
  const activitiesHTML = control.keyActivities && control.keyActivities.length ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Key Activities</h2>
      <ul class="activity-list">${control.keyActivities.map(a => `<li>${esc(a)}</li>`).join('')}</ul>
    </section>
  ` : '';

  /* --- Maturity Levels --- */
  const maturityHTML = control.maturity ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Maturity Levels</h2>
      <div class="maturity-grid">
        <div class="maturity-card maturity-basic"><div class="maturity-label">Basic</div><p>${esc(control.maturity.basic || '')}</p></div>
        <div class="maturity-card maturity-mature"><div class="maturity-label">Mature</div><p>${esc(control.maturity.mature || '')}</p></div>
        <div class="maturity-card maturity-advanced"><div class="maturity-label">Advanced</div><p>${esc(control.maturity.advanced || '')}</p></div>
      </div>
    </section>
  ` : '';

  /* --- Audit Package (Evidence Checklist first, then Artifacts) --- */
  let auditPackageHTML = '';
  if (linkedEvidence.length || linkedArtifacts.length) {
    const evidenceAccordion = linkedEvidence.length ? `
      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-trigger" aria-expanded="true">
            <span>Evidence Checklist (${linkedEvidence.length})</span>
            <span class="accordion-icon">&#9660;</span>
          </button>
          <div class="accordion-content" role="region">
            ${linkedEvidence.map(item => `
              <div class="evidence-item">
                <div class="evidence-item-header">
                  ${item.id ? '<span class="evidence-id">' + esc(item.id) + '</span>' : ''}
                  <span class="evidence-item-name">${esc(item.name)}</span>
                </div>
                ${item.description ? '<p class="evidence-item-desc">' + esc(item.description) + '</p>' : ''}
                ${(item.whatGoodLooksLike && item.whatGoodLooksLike.length) || (item.commonGaps && item.commonGaps.length) ? `
                  <div class="evidence-detail-grid">
                    ${item.whatGoodLooksLike && item.whatGoodLooksLike.length ? `
                      <div class="evidence-block evidence-good">
                        <div class="evidence-block-label">What Good Looks Like</div>
                        <ul>${item.whatGoodLooksLike.map(g => '<li>' + esc(g) + '</li>').join('')}</ul>
                      </div>
                    ` : ''}
                    ${item.commonGaps && item.commonGaps.length ? `
                      <div class="evidence-block evidence-gap">
                        <div class="evidence-block-label">Common Gaps</div>
                        <ul>${item.commonGaps.map(g => '<li>' + esc(g) + '</li>').join('')}</ul>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
                <div class="evidence-item-meta">
                  ${item.format ? '<span class="meta-item"><strong>Format:</strong> ' + esc(item.format) + '</span>' : ''}
                  ${item.retentionPeriod ? '<span class="meta-item"><strong>Retention:</strong> ' + esc(item.retentionPeriod) + '</span>' : ''}
                  ${item.suggestedSources && item.suggestedSources.length ? '<span class="meta-item"><strong>Source:</strong> ' + item.suggestedSources.map(s => esc(s)).join(', ') + '</span>' : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    ` : '';

    const artifactsAccordion = linkedArtifacts.length ? `
      <div class="accordion">
        <div class="accordion-item">
          <button class="accordion-trigger" aria-expanded="true">
            <span>Required Artifacts (${linkedArtifacts.length})</span>
            <span class="accordion-icon">&#9660;</span>
          </button>
          <div class="accordion-content" role="region">
            ${linkedArtifacts.map(a => `
              <div class="artifact-card">
                <div class="artifact-card-header">
                  <span class="artifact-card-name">${esc(a.name)}</span>
                  <div class="artifact-card-badges">
                    ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : '<span class="badge badge-optional">Optional</span>'}
                    ${a.category ? '<span class="badge badge-category">' + esc(a.category) + '</span>' : ''}
                  </div>
                </div>
                ${a.description ? '<p class="artifact-card-desc">' + esc(a.description) + '</p>' : ''}
                <div class="artifact-card-meta">
                  ${a.owner ? '<span class="meta-item"><strong>Owner:</strong> ' + esc(a.owner) + '</span>' : ''}
                  ${a.reviewFrequency ? '<span class="meta-item"><strong>Review:</strong> ' + esc(a.reviewFrequency) + '</span>' : ''}
                  ${a.format ? '<span class="meta-item"><strong>Format:</strong> ' + esc(a.format) + '</span>' : ''}
                </div>
                ${a.keyContents && a.keyContents.length ? `
                  <div class="artifact-card-contents">
                    <strong>Key Contents:</strong>
                    <ul>${a.keyContents.map(k => '<li>' + esc(k) + '</li>').join('')}</ul>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    ` : '';

    auditPackageHTML = `
      <section class="audit-package">
        <h2 class="audit-package-title">
          Audit Package
          <span class="audit-package-counts">
            <span class="badge badge-evidence">${linkedEvidence.length} evidence item${linkedEvidence.length !== 1 ? 's' : ''}</span>
            <span class="badge badge-artifacts">${linkedArtifacts.length} artifact${linkedArtifacts.length !== 1 ? 's' : ''}</span>
          </span>
        </h2>
        ${evidenceAccordion}
        ${artifactsAccordion}
      </section>
    `;
  }

  /* --- Framework Mappings --- */
  const hasMappings = (control.nistCsf && control.nistCsf.length) || (control.iso27001 && control.iso27001.length) || (control.rmit && control.rmit.length);
  const mappingsHTML = hasMappings ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Framework Mappings</h2>
      <div class="fw-mappings">
        ${(control.nistCsf && control.nistCsf.length) ? `<div class="fw-mapping-row"><span class="fw-label">NIST CSF 2.0</span><span class="fw-codes">${control.nistCsf.map(r => esc(r)).join(', ')}</span></div>` : ''}
        ${(control.iso27001 && control.iso27001.length) ? `<div class="fw-mapping-row"><span class="fw-label">ISO 27001</span><span class="fw-codes">${control.iso27001.map(r => esc(r)).join(', ')}</span></div>` : ''}
        ${(control.rmit && control.rmit.length) ? `<div class="fw-mapping-row"><span class="fw-label">BNM RMiT</span><span class="fw-codes">${control.rmit.map(r => esc(r)).join(', ')}</span></div>` : ''}
        ${(control.cisControls && control.cisControls.length) ? `<div class="fw-mapping-row"><span class="fw-label">CIS Controls</span><span class="fw-codes">${control.cisControls.map(r => esc(r)).join(', ')}</span></div>` : ''}
      </div>
    </section>
  ` : '';

  /* --- Source Provisions (back-links to Act 854 sections) --- */
  const provisionsHTML = sections.length ? `
    <section class="detail-section">
      <h2 class="detail-section-title">Source Provisions</h2>
      <div class="provision-links">
        ${sections.map(sid => {
          const prov = state.provisions[sid];
          return `<a href="#framework/${sid}" class="provision-link">
            <span class="provision-id">${esc(sid)}</span>
            <span class="provision-title">${prov ? esc(prov.title) : esc(sid)}</span>
          </a>`;
        }).join('')}
      </div>
    </section>
  ` : '';

  el.innerHTML = `
    <article class="control-detail">
      <nav class="breadcrumbs">
        <a href="#controls">Controls</a>
        <span class="sep">/</span>
        <span class="current">${esc(control.name)}</span>
      </nav>

      ${renderComplianceToggle(slug)}

      <header class="control-detail-header">
        <div class="control-detail-id-row">
          <span class="badge badge-domain">${esc(domain.name || control.domain)}</span>
          <span class="badge badge-type-${(control.type || '').toLowerCase() === 'preventive' ? 'preventive' : (control.type || '').toLowerCase() === 'detective' ? 'detective' : 'corrective'}">${esc(control.type)}</span>
          ${control.layer ? `<span class="badge badge-category">${esc(control.layer)}</span>` : ''}
        </div>
        <h1 class="control-detail-title">${esc(control.name)}</h1>
        <p class="control-detail-desc">${esc(control.description)}</p>
      </header>

      ${requirementsHTML}
      ${activitiesHTML}
      ${maturityHTML}
      ${auditPackageHTML}
      ${mappingsHTML}
      ${provisionsHTML}
    </article>
  `;
}

/* ===== ARTIFACTS BROWSER ===== */
async function renderArtifacts(el) {
  if (!state.artifacts) {
    const [inventory, sectionMap] = await Promise.all([
      fetchJSON('artifacts/inventory.json'), fetchJSON('artifacts/section-map.json'),
    ]);
    state.artifacts = { inventory: inventory || {}, sectionMap: sectionMap || {} };
  }
  const cats = Object.entries(state.artifacts.inventory);
  const total = cats.reduce((sum, [, arr]) => sum + arr.length, 0);

  el.innerHTML = `
    <div class="page-title">Compliance Artifacts</div>
    <div class="page-subtitle">${total} artifacts across ${cats.length} categories</div>
    <div class="filter-bar">
      <span class="filter-chip active" data-filter="all">All (${total})</span>
      ${cats.map(([cat, arr]) => `<span class="filter-chip" data-filter="${esc(cat)}">${esc(cat)} (${arr.length})</span>`).join('')}
    </div>
    <div id="artifact-list">
      ${cats.map(([cat, items]) => items.map(a => `
        <div class="artifact-item" data-category="${esc(cat)}">
          ${renderArtifactCard(a)}
        </div>
      `).join('')).join('')}
    </div>
  `;
}

/* ===== SUPPLEMENTS ===== */
async function renderSupplements(el) {
  if (!state.supplements) {
    const [regs, directives, codes] = await Promise.all([
      fetchJSON('supplements/regulations/index.json'),
      fetchJSON('supplements/directives/index.json'),
      fetchJSON('supplements/codes-of-practice/index.json'),
    ]);
    state.supplements = {
      regulations: (regs && regs.regulations) || [],
      directives: (directives && directives.directives) || [],
      codesOfPractice: (codes && codes.codesOfPractice) || [],
    };
  }

  const groups = [
    { key: 'regulations', label: 'Regulations', color: '#0E7490' },
    { key: 'directives', label: 'Chief Executive Directives', color: '#D97706' },
    { key: 'codesOfPractice', label: 'Codes of Practice', color: '#7C3AED' },
  ];

  el.innerHTML = `
    <div class="page-title">Subsidiary Instruments</div>
    <div class="page-subtitle">Regulations, CE directives, and codes of practice under Act 854</div>
    ${groups.map(g => {
      const items = state.supplements[g.key] || [];
      if (!items.length) return '';
      return `
        <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;color:${g.color};">${g.label}</h3>
        <div class="control-grid">
          ${items.map(item => `
            <div class="supplement-card" onclick="location.hash='#supplement/${item.id}'">
              <div class="supplement-type" style="color:${g.color};">${esc(item.type || g.key)}</div>
              <div class="supplement-title">${esc(item.title)}</div>
              <div class="supplement-meta">
                ${item.effectiveDate ? 'Effective: ' + esc(item.effectiveDate) : ''}
                ${item.status ? ' &middot; ' + esc(item.status) : ''}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }).join('')}
  `;
}

/* ===== SUPPLEMENT DETAIL ===== */
async function renderSupplementDetail(el, id) {
  if (state.supplements) {
    const allItems = [
      ...state.supplements.regulations,
      ...state.supplements.directives,
      ...state.supplements.codesOfPractice,
    ];
    const item = allItems.find(i => i.id === id);
    if (item && item.filePath) {
      const data = await fetchJSON(item.filePath);
      if (data) return renderSupplementContent(el, data, id);
    }
  }
  const paths = [
    `supplements/regulations/${id}.json`,
    `supplements/directives/${id}.json`,
    `supplements/codes-of-practice/${id}.json`,
  ];
  let data = null;
  for (const path of paths) { data = await fetchJSON(path); if (data) break; }
  if (!data) return renderNotFound(el);
  renderSupplementContent(el, data, id);
}

function renderSupplementContent(el, data, id) {
  el.innerHTML = `
    <div class="breadcrumbs"><a href="#">Overview</a><span class="sep">/</span><a href="#supplements">Supplements</a><span class="sep">/</span>${esc(data.title || id)}</div>
    <div style="display:flex;gap:0.375rem;margin-bottom:0.25rem;">
      <span class="badge badge-domain">${esc(data.type || 'supplement')}</span>
      ${data.status ? `<span class="badge badge-category">${esc(data.status)}</span>` : ''}
    </div>
    <div class="page-title">${esc(data.title || id)}</div>
    <div class="page-subtitle">
      ${data.issuedBy ? 'Issued by: ' + esc(data.issuedBy) + ' &middot; ' : ''}
      ${data.sectorLead ? 'Sector Lead: ' + esc(data.sectorLead) + ' &middot; ' : ''}
      ${data.effectiveDate ? 'Effective: ' + esc(data.effectiveDate) : ''}
    </div>

    ${data.provisions && data.provisions.length ? `
      <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Provisions</h3>
      <div class="accordion">
        ${data.provisions.map(p => `
          <div class="accordion-item">
            <button class="accordion-trigger" data-accordion>
              <span><span style="font-family:var(--mono);color:var(--accent);margin-right:0.5rem;">${esc(p.id)}</span>${esc(p.title)}</span>
              <span class="chevron">&#9654;</span>
            </button>
            <div class="accordion-content">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.5rem;">${esc(p.requirement || p.content || '')}</p>
              ${p.explanation ? `<p style="font-size:0.8125rem;color:var(--text-muted);font-style:italic;">${esc(p.explanation)}</p>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${data.domains && data.domains.length ? `
      <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Domains</h3>
      <div class="accordion">
        ${data.domains.map(d => `
          <div class="accordion-item">
            <button class="accordion-trigger" data-accordion>
              <span>${esc(d.name)} (${(d.requirements || []).length} requirements)</span>
              <span class="chevron">&#9654;</span>
            </button>
            <div class="accordion-content">
              <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.5rem;">${esc(d.description || '')}</p>
              ${(d.requirements || []).map(r => `
                <div class="req-item">
                  <div class="req-item-id">${esc(r.id)}</div>
                  <div class="req-item-text">${esc(r.requirement)}</div>
                  <div class="req-item-meta">
                    ${r.relatedActSection ? `<span>Act: ${esc(r.relatedActSection)}</span>` : ''}
                    ${r.relatedFramework ? `<span>${esc(r.relatedFramework)}</span>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
}

/* ===== REFERENCE (Cross-References) ===== */
async function renderReference(el) {
  if (!state.crossRefs) {
    const [actToRegs, actToDirectives, frameworkMappings, nciiSectorMappings] = await Promise.all([
      fetchJSON('cross-references/act-to-regulations.json'),
      fetchJSON('cross-references/act-to-directives.json'),
      fetchJSON('cross-references/framework-mappings.json'),
      fetchJSON('cross-references/ncii-sector-mappings.json'),
    ]);
    state.crossRefs = { actToRegs, actToDirectives, frameworkMappings, nciiSectorMappings };
  }

  el.innerHTML = `
    <div class="page-title">Cross-References</div>
    <div class="page-subtitle">Mappings between Act 854 sections, subsidiary instruments, and international frameworks</div>
    <div class="tabs">
      <button class="tab-btn active" data-tab="xref-regulations">Regulations</button>
      <button class="tab-btn" data-tab="xref-directives">Directives</button>
      <button class="tab-btn" data-tab="xref-frameworks">International Frameworks</button>
      <button class="tab-btn" data-tab="xref-sectors">Sector Overlaps</button>
    </div>
    <div class="tab-panel active" id="tab-xref-regulations">
      ${renderActXrefs(state.crossRefs.actToRegs)}
    </div>
    <div class="tab-panel" id="tab-xref-directives">
      ${renderActXrefs(state.crossRefs.actToDirectives)}
    </div>
    <div class="tab-panel" id="tab-xref-frameworks">
      ${renderFrameworkXrefs(state.crossRefs.frameworkMappings)}
    </div>
    <div class="tab-panel" id="tab-xref-sectors">
      ${renderSectorXrefs(state.crossRefs.nciiSectorMappings)}
    </div>
  `;
}

function renderActXrefs(data) {
  if (!data || !data.mappings || !data.mappings.length) return '<div class="empty-state"><div class="empty-state-text">No mappings available.</div></div>';
  return data.mappings.map(m => `
    <div class="xref-row">
      <span class="xref-section" onclick="location.hash='#framework/${m.section}'">${esc(m.section)}</span>
      <div class="xref-targets">
        <div style="font-size:0.8125rem;font-weight:500;margin-bottom:0.25rem;">${esc(m.sectionTitle || '')}</div>
        <div style="font-size:0.8125rem;color:var(--text-secondary);">${esc(m.details || '')}</div>
        ${m.regulationId ? `<span class="xref-tag" onclick="location.hash='#supplement/${m.regulationId}'">${esc(m.regulation || m.directive || '')}</span>` : ''}
        ${m.directiveId ? `<span class="xref-tag" onclick="location.hash='#supplement/${m.directiveId}'">${esc(m.directive || '')}</span>` : ''}
      </div>
    </div>
  `).join('');
}

function renderFrameworkXrefs(data) {
  if (!data) return '<div class="empty-state"><div class="empty-state-text">No framework mappings available.</div></div>';
  const frameworks = ['nistCsf', 'iso27001', 'rmit', 'pdpa', 'cisControls'];
  return frameworks.map(fw => {
    const fwData = data[fw];
    if (!fwData || !fwData.mappings || !fwData.mappings.length) return '';
    return `
      <h3 style="font-size:1rem;font-weight:600;margin:1rem 0 0.75rem;">${esc(fwData.frameworkName)}</h3>
      <div class="framework-grid">
        ${fwData.mappings.map(item => `
          <div class="framework-card">
            <div class="framework-card-nacsa">${esc(item.nacsaSection || '')} — ${esc(item.nacsaName || '')}</div>
            <div class="framework-card-foreign">${esc(item.nistSubcategory || item.isoClause || item.rmitClause || item.pdpaSection || item.cisControl || '')}: ${esc(item.nistName || item.isoName || item.rmitName || item.pdpaName || item.cisName || '')}</div>
            <span class="similarity-badge similarity-${(item.similarity || 'medium').toLowerCase()}">${esc(item.similarity || 'medium')}</span>
            <div class="framework-card-notes">${esc(item.notes || '')}</div>
          </div>
        `).join('')}
      </div>
    `;
  }).join('');
}

function renderSectorXrefs(data) {
  if (!data || !data.sectors) return '<div class="empty-state"><div class="empty-state-text">No sector mappings available.</div></div>';
  return Object.entries(data.sectors).map(([key, sector]) => `
    <div class="card">
      <div class="card-title">${esc(sector.sectorName)} (${esc(sector.sectorLead)})</div>
      ${(sector.regulatoryOverlaps || []).map(o => `
        <div class="xref-row">
          <span class="xref-section">${esc(o.framework)}</span>
          <div class="xref-targets">
            <div style="font-size:0.8125rem;font-weight:500;">${esc(o.fullName)}</div>
            <div style="font-size:0.8125rem;color:var(--text-secondary);">${esc(o.notes || '')}</div>
            <span class="similarity-badge similarity-${(o.relevance || 'medium').toLowerCase()}">${esc(o.relevance || 'medium')}</span>
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/* ===== FRAMEWORK VIEW — Act 854 Parts listing ===== */
function renderFramework(el) {
  const totalSections = Object.keys(state.provisions).length;

  el.innerHTML = `
    <div class="page-title">Act 854 Framework</div>
    <div class="page-subtitle">Cyber Security Act 2024 — ${state.parts.length} parts, ${totalSections} sections</div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Source Hierarchy</h3>
    <div class="card">
      <div style="display:grid;grid-template-columns:auto 1fr;gap:0.5rem 1rem;font-size:0.8125rem;">
        <span style="font-weight:600;color:var(--accent);">Tier 1</span><span>Cyber Security Act 2024 (Act 854) — Primary legislation</span>
        <span style="font-weight:600;color:var(--warning);">Tier 2</span><span>Subsidiary Regulations — Risk assessment, audit, licensing, compounding</span>
        <span style="font-weight:600;color:var(--warning);">Tier 3</span><span>Chief Executive Directives — Binding operational instructions</span>
        <span style="font-weight:600;color:var(--type-preventive);">Tier 4</span><span>Codes of Practice — Sector-specific standards and best practices</span>
        <span style="font-weight:600;color:var(--success);">Tier 5</span><span>Standards — CE-determined cyber security technical standards</span>
      </div>
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Parts</h3>
    <div class="control-grid">
      ${state.parts.map(p => {
        const secs = Object.values(state.provisions).filter(s => s.part === p.id);
        return `<div class="control-card" onclick="location.hash='#framework/part-${p.id}'" data-part="${p.id}" style="border-left: 4px solid var(--accent); cursor:pointer;">
          <div class="control-id">Part ${p.id}</div>
          <h3 class="control-card-title">${esc(p.name)}</h3>
          <p class="control-card-desc">${esc(p.description || '')}</p>
          <div class="control-card-meta">
            <span class="badge badge-category">${secs.length} sections</span>
          </div>
        </div>`;
      }).join('')}
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">NCII Compliance Lifecycle</h3>
    <div class="card">
      <div class="card-body">
        <ol style="padding-left:1.25rem;">
          <li style="margin-bottom:0.5rem;"><strong>Designation</strong> (s17) — CE designates entity as NCII entity by written notice</li>
          <li style="margin-bottom:0.5rem;"><strong>Compliance Program</strong> (s18) — Entity establishes compliance program covering all Part IV duties</li>
          <li style="margin-bottom:0.5rem;"><strong>Risk Assessment</strong> (s21) — Periodic assessment by CE-approved assessor, results submitted to CE and sector lead</li>
          <li style="margin-bottom:0.5rem;"><strong>Audit</strong> (s23) — Periodic audit by CE-approved auditor, compliance with Act + regulations + directives + CoPs</li>
          <li style="margin-bottom:0.5rem;"><strong>Standards & CoP</strong> (s22, s24) — Ongoing compliance with CE-determined standards and sector CoPs</li>
          <li style="margin-bottom:0.5rem;"><strong>Incident Response</strong> (s26) — 6-hour notification to CE for significant incidents, ongoing threat sharing (s25)</li>
          <li style="margin-bottom:0.5rem;"><strong>Board Oversight</strong> (s52) — Directors exercise due diligence, board reporting, resource allocation</li>
        </ol>
      </div>
    </div>
  `;
}

/* ===== RISK MANAGEMENT ===== */
async function renderRiskManagement(el) {
  if (!state.riskManagement) {
    const [methodology, riskMatrix, riskRegister, checklist, treatmentOptions] = await Promise.all([
      fetchJSON('risk-management/methodology.json'),
      fetchJSON('risk-management/risk-matrix.json'),
      fetchJSON('risk-management/risk-register.json'),
      fetchJSON('risk-management/checklist.json'),
      fetchJSON('risk-management/treatment-options.json'),
    ]);
    state.riskManagement = { methodology, riskMatrix, riskRegister, checklist, treatmentOptions };
  }
  const rm = state.riskManagement;
  const risks = (rm.riskRegister && rm.riskRegister.risks) || [];
  const bands = (rm.riskMatrix && rm.riskMatrix.bands) || [];
  const phases = (rm.checklist && rm.checklist.phases) || [];
  const strategies = (rm.treatmentOptions && rm.treatmentOptions.strategies) || [];

  el.innerHTML = `
    <div class="disclaimer">
      This risk management section is constructed-indicative. Risk ratings, controls, and treatment plans are illustrative examples for NCII operators and must be tailored to each entity's specific context. Always consult CE-approved assessors and qualified legal counsel.
    </div>
    <div class="page-title">Risk Management</div>
    <div class="page-subtitle">NCII Cyber Security Risk Assessment under Act 854 &mdash; methodology, risk register, assessment checklist, and treatment options</div>

    <div class="stats-banner">
      <div class="stat-card"><div class="stat-number">${risks.length}</div><div class="stat-label">Risks Identified</div></div>
      <div class="stat-card"><div class="stat-number">${risks.filter(r => r.inherentRisk >= 16).length}</div><div class="stat-label">Critical (Inherent)</div></div>
      <div class="stat-card"><div class="stat-number">${risks.filter(r => r.residualRisk >= 10).length}</div><div class="stat-label">High+ (Residual)</div></div>
      <div class="stat-card"><div class="stat-number">5&times;5</div><div class="stat-label">Risk Matrix</div></div>
    </div>

    <div class="tabs">
      <button class="tab-btn active" data-tab="rm-methodology">Methodology</button>
      <button class="tab-btn" data-tab="rm-register">Risk Register</button>
      <button class="tab-btn" data-tab="rm-checklist">Checklist</button>
      <button class="tab-btn" data-tab="rm-treatment">Treatment Options</button>
    </div>

    <div class="tab-panel active" id="tab-rm-methodology">
      ${renderRiskMethodology(rm)}
    </div>
    <div class="tab-panel" id="tab-rm-register">
      ${renderRiskRegister(rm)}
    </div>
    <div class="tab-panel" id="tab-rm-checklist">
      ${renderRiskChecklist(rm)}
    </div>
    <div class="tab-panel" id="tab-rm-treatment">
      ${renderRiskTreatment(rm)}
    </div>
  `;
}

function riskBandColor(score) {
  if (score >= 16) return { band: 'Critical', cls: 'risk-critical', color: '#DC2626', bg: '#FEE2E2' };
  if (score >= 10) return { band: 'High', cls: 'risk-high', color: '#EA580C', bg: '#FFF7ED' };
  if (score >= 5) return { band: 'Medium', cls: 'risk-medium', color: '#D97706', bg: '#FEF3C7' };
  return { band: 'Low', cls: 'risk-low', color: '#16A34A', bg: '#DCFCE7' };
}

function riskBadge(score) {
  const b = riskBandColor(score);
  return `<span class="badge ${b.cls}" style="font-weight:600;">${b.band} (${score})</span>`;
}

function renderRiskMethodology(rm) {
  const meth = rm.methodology;
  const matrix = rm.riskMatrix;
  if (!meth || !matrix) return '<div class="empty-state"><div class="empty-state-text">Methodology data not available.</div></div>';

  const likelihoods = matrix.likelihoodAxis.levels;
  const impacts = matrix.impactAxis.levels;
  const matrixData = matrix.matrix;
  const bands = matrix.bands;

  /* Build 5x5 grid: rows = likelihood (5 at top, 1 at bottom), cols = impact (1 at left, 5 at right) */
  let matrixHTML = '<div class="risk-matrix-container"><table class="risk-matrix-table"><thead><tr><th class="risk-matrix-corner"></th>';
  for (const imp of impacts) {
    matrixHTML += `<th class="risk-matrix-col-header">${esc(imp.label)}<br><span class="risk-matrix-level">${imp.level}</span></th>`;
  }
  matrixHTML += '</tr></thead><tbody>';
  for (let l = 5; l >= 1; l--) {
    const lLabel = likelihoods.find(x => x.level === l);
    matrixHTML += `<tr><th class="risk-matrix-row-header">${esc(lLabel ? lLabel.label : '')} <span class="risk-matrix-level">${l}</span></th>`;
    for (let i = 1; i <= 5; i++) {
      const cell = matrixData.find(m => m.likelihood === l && m.impact === i);
      const b = cell ? riskBandColor(cell.score) : { band: '?', color: '#94A3B8', bg: '#F1F5F9' };
      matrixHTML += `<td class="risk-matrix-cell ${b.cls}"><div class="risk-matrix-score">${cell ? cell.score : ''}</div><div class="risk-matrix-band">${b.band}</div></td>`;
    }
    matrixHTML += '</tr>';
  }
  matrixHTML += '</tbody></table>';
  matrixHTML += `<div class="risk-matrix-legend">${bands.map(b => `<span class="risk-matrix-legend-item"><span class="risk-matrix-legend-swatch" style="background:${b.color};"></span>${esc(b.band)} (${esc(b.scoreRange)})</span>`).join('')}</div>`;
  matrixHTML += '</div>';

  return `
    <h3 style="font-size:1rem;font-weight:600;margin:0 0 0.75rem;">${esc(meth.title)}</h3>
    <div class="card">
      <div class="card-body" style="font-size:0.8125rem;color:var(--text-secondary);">${esc(meth.description)}</div>
      <div class="card-meta" style="margin-top:0.75rem;">
        <span>Review: ${esc(meth.reviewCycle.frequency)}</span>
        <span>Approval: ${esc(meth.approvalAuthority)}</span>
      </div>
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">5&times;5 Risk Matrix</h3>
    ${matrixHTML}

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Risk Bands &amp; Required Actions</h3>
    ${bands.map(b => `
      <div class="card" style="border-left:4px solid ${b.color};margin-bottom:0.75rem;">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
          <span class="badge" style="background:${b.colorLight};color:${b.color};font-weight:600;">${esc(b.band)}</span>
          <span style="font-size:0.8125rem;color:var(--text-muted);">Score ${esc(b.scoreRange)}</span>
        </div>
        <div style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.25rem;">${esc(b.actionRequired)}</div>
        <div style="font-size:0.75rem;color:var(--text-muted);"><strong>NACSA:</strong> ${esc(b.nacsaObligation)}</div>
        <div style="font-size:0.75rem;color:var(--text-muted);"><strong>Timeframe:</strong> ${esc(b.responseTimeframe)}</div>
      </div>
    `).join('')}

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Likelihood Scale</h3>
    <div class="accordion">
      ${meth.likelihoodScale.levels.map(l => `
        <div class="accordion-item">
          <button class="accordion-trigger" data-accordion>
            <span><strong>${l.level} — ${esc(l.label)}</strong> &middot; ${esc(l.frequency)}</span>
            <span class="chevron">&#9654;</span>
          </button>
          <div class="accordion-content">
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.25rem;">${esc(l.description)}</p>
            <p style="font-size:0.75rem;color:var(--text-muted);"><strong>Criteria:</strong> ${esc(l.criteria)}</p>
          </div>
        </div>
      `).join('')}
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Impact Scale (NCII-Specific)</h3>
    <div class="accordion">
      ${meth.impactScale.levels.map(l => `
        <div class="accordion-item">
          <button class="accordion-trigger" data-accordion>
            <span><strong>${l.level} — ${esc(l.label)}</strong></span>
            <span class="chevron">&#9654;</span>
          </button>
          <div class="accordion-content">
            <p style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.5rem;">${esc(l.description)}</p>
            <div style="display:grid;grid-template-columns:auto 1fr;gap:0.25rem 0.75rem;font-size:0.75rem;color:var(--text-muted);">
              <strong>National Security:</strong><span>${esc(l.nationalSecurity)}</span>
              <strong>Service Disruption:</strong><span>${esc(l.serviceDisruption)}</span>
              <strong>Data Compromise:</strong><span>${esc(l.dataCompromise)}</span>
              <strong>Regulatory:</strong><span>${esc(l.regulatoryConsequence)}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Assessment Process</h3>
    <div class="card">
      <div class="card-body">
        <ol style="padding-left:1.25rem;">
          ${meth.assessmentProcess.phases.map(p => `
            <li style="margin-bottom:0.5rem;"><strong>Phase ${p.phase}: ${esc(p.name)}</strong> — ${esc(p.description)} <span style="font-size:0.75rem;color:var(--text-muted);">(${esc(p.actReference)})</span></li>
          `).join('')}
        </ol>
      </div>
    </div>
  `;
}

function renderRiskRegister(rm) {
  const reg = rm.riskRegister;
  if (!reg || !reg.risks || !reg.risks.length) return '<div class="empty-state"><div class="empty-state-text">Risk register data not available.</div></div>';

  const risks = reg.risks;
  const categories = reg.categories || [];

  return `
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
      <div>
        <span style="font-size:0.8125rem;color:var(--text-muted);">Last updated: ${esc(reg.lastUpdated)} &middot; Next review: ${esc(reg.nextReview)} &middot; Approved by: ${esc(reg.approvedBy)}</span>
      </div>
      <div class="filter-bar" style="margin-bottom:0;">
        <span class="filter-chip active" data-filter="all">All (${risks.length})</span>
        ${categories.map(cat => {
          const count = risks.filter(r => r.category === cat).length;
          return `<span class="filter-chip" data-filter="${esc(cat)}">${esc(cat)} (${count})</span>`;
        }).join('')}
      </div>
    </div>

    <div class="risk-register-sort" style="display:flex;gap:0.5rem;margin-bottom:0.75rem;font-size:0.75rem;">
      <span style="color:var(--text-muted);">Sort by:</span>
      <button class="risk-sort-btn active" data-sort="id">ID</button>
      <button class="risk-sort-btn" data-sort="inherent-desc">Inherent Risk &#9660;</button>
      <button class="risk-sort-btn" data-sort="residual-desc">Residual Risk &#9660;</button>
    </div>

    <div id="risk-register-list">
      ${risks.map(r => renderRiskCard(r)).join('')}
    </div>
  `;
}

function renderRiskCard(r) {
  const inherent = riskBandColor(r.inherentRisk);
  const residual = riskBandColor(r.residualRisk);
  const treatMap = { mitigate: 'Mitigate', transfer: 'Transfer', accept: 'Accept', avoid: 'Avoid' };
  return `
    <div class="risk-card" data-category="${esc(r.category)}" data-inherent="${r.inherentRisk}" data-residual="${r.residualRisk}" data-id="${esc(r.id)}">
      <div class="risk-card-header">
        <div>
          <span style="font-family:var(--mono);font-size:0.875rem;color:var(--accent);font-weight:600;">${esc(r.id)}</span>
          <span class="badge badge-category">${esc(r.category)}</span>
        </div>
        <div style="display:flex;gap:0.375rem;">
          ${riskBadge(r.inherentRisk)}
          <span style="font-size:0.75rem;color:var(--text-muted);align-self:center;">&#8594;</span>
          ${riskBadge(r.residualRisk)}
        </div>
      </div>
      <div class="risk-card-title">${esc(r.title)}</div>
      <div class="risk-card-desc">${esc(r.description)}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.75rem;">
        <div>
          <div class="block-label" style="margin-bottom:0.25rem;">Existing Controls</div>
          <ul style="padding-left:1.125rem;font-size:0.75rem;color:var(--text-secondary);">
            ${r.existingControls.map(c => `<li style="margin-bottom:0.125rem;">${esc(c)}</li>`).join('')}
          </ul>
        </div>
        <div>
          <div class="block-label" style="margin-bottom:0.25rem;">Treatment Plan (${esc(treatMap[r.treatment] || r.treatment)})</div>
          <div style="font-size:0.75rem;color:var(--text-secondary);">${esc(r.treatmentPlan)}</div>
        </div>
      </div>
      <div class="card-meta" style="margin-top:0.75rem;">
        <span>Act: ${esc(r.actReference)}</span>
        <span>Owner: ${esc(r.owner)}</span>
        <span>Review: ${esc(r.reviewDate)}</span>
        <span>L:${r.likelihood}&times;I:${r.impact}=${r.inherentRisk} &#8594; L:${r.residualLikelihood}&times;I:${r.residualImpact}=${r.residualRisk}</span>
      </div>
    </div>
  `;
}

function renderRiskChecklist(rm) {
  const cl = rm.checklist;
  if (!cl || !cl.phases || !cl.phases.length) return '<div class="empty-state"><div class="empty-state-text">Checklist data not available.</div></div>';

  const totalItems = cl.phases.reduce((sum, p) => sum + p.items.length, 0);

  return `
    <div style="margin-bottom:1rem;">
      <span style="font-size:0.8125rem;color:var(--text-muted);">${totalItems} items across ${cl.phases.length} phases &middot; Check items as you complete them (state is not persisted)</span>
    </div>
    <div id="risk-checklist-progress" style="margin-bottom:1rem;">
      <div style="display:flex;align-items:center;gap:0.5rem;">
        <div style="flex:1;height:8px;background:var(--border);border-radius:4px;overflow:hidden;">
          <div class="risk-checklist-bar" style="width:0%;height:100%;background:var(--accent);border-radius:4px;transition:width 0.3s;"></div>
        </div>
        <span class="risk-checklist-count" style="font-size:0.75rem;color:var(--text-muted);min-width:3rem;">0/${totalItems}</span>
      </div>
    </div>
    ${cl.phases.map(phase => `
      <div class="accordion-item open" style="margin-bottom:0.5rem;background:var(--card);border:1px solid var(--border);border-radius:var(--radius);">
        <button class="accordion-trigger" data-accordion style="padding:0.75rem 1rem;">
          <span style="font-weight:600;">${esc(phase.phase)} (${phase.items.length} items)</span>
          <span class="chevron">&#9654;</span>
        </button>
        <div class="accordion-content" style="padding:0 1rem 0.75rem;">
          ${phase.items.map(item => `
            <label class="risk-checklist-item" style="display:flex;gap:0.75rem;padding:0.5rem 0;border-bottom:1px solid var(--border-light);cursor:pointer;align-items:flex-start;">
              <input type="checkbox" class="risk-check" style="margin-top:0.25rem;flex-shrink:0;">
              <div style="flex:1;">
                <div style="display:flex;align-items:center;gap:0.375rem;flex-wrap:wrap;">
                  <span style="font-family:var(--mono);font-size:0.8125rem;color:var(--accent);font-weight:500;">${esc(item.id)}</span>
                  <span class="req-item-priority priority-${(item.priority || '').toLowerCase()}">${esc(item.priority)}</span>
                  <span style="font-size:0.75rem;color:var(--text-muted);">${esc(item.actReference)}</span>
                </div>
                <div style="font-size:0.8125rem;color:var(--text-primary);margin-top:0.25rem;">${esc(item.item)}</div>
                <div style="font-size:0.75rem;color:var(--text-muted);margin-top:0.25rem;">${esc(item.guidance)}</div>
              </div>
            </label>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

function renderRiskTreatment(rm) {
  const opts = rm.treatmentOptions;
  if (!opts || !opts.strategies || !opts.strategies.length) return '<div class="empty-state"><div class="empty-state-text">Treatment options data not available.</div></div>';

  return `
    <div style="margin-bottom:1rem;">
      <span style="font-size:0.8125rem;color:var(--text-secondary);">Four treatment strategies for NCII risks under Act 854. Note that some NCII risks cannot be accepted without NACSA approval.</span>
    </div>
    <div class="treatment-grid">
      ${opts.strategies.map(s => `
        <div class="treatment-card" style="border-top:4px solid ${s.color};">
          <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;">
            <span class="badge" style="background:${s.color};color:#fff;font-weight:600;font-size:0.8125rem;">${esc(s.strategy)}</span>
            <span style="font-size:0.875rem;font-weight:600;color:var(--text-primary);">${esc(s.label)}</span>
          </div>
          <div style="font-size:0.8125rem;color:var(--text-secondary);margin-bottom:0.75rem;">${esc(s.description)}</div>

          <div class="block-label" style="margin-bottom:0.25rem;">When to Use</div>
          <ul style="padding-left:1.125rem;font-size:0.75rem;color:var(--text-secondary);margin-bottom:0.75rem;">
            ${s.whenToUse.map(w => `<li style="margin-bottom:0.125rem;">${esc(w)}</li>`).join('')}
          </ul>

          <div class="block-label" style="margin-bottom:0.25rem;">NCII Examples</div>
          ${s.nciiExamples.map(ex => `
            <div style="background:var(--bg);border-radius:var(--radius);padding:0.5rem 0.75rem;margin-bottom:0.5rem;">
              <div style="font-size:0.75rem;font-weight:600;color:var(--text-primary);margin-bottom:0.25rem;">${esc(ex.risk)}</div>
              <div style="font-size:0.75rem;color:var(--text-secondary);">${esc(ex.treatment)}</div>
            </div>
          `).join('')}

          <div style="background:var(--amber-light);border-radius:var(--radius);padding:0.5rem 0.75rem;margin-top:0.75rem;font-size:0.75rem;color:var(--amber);">
            <strong>Regulatory Note:</strong> ${esc(s.regulatoryNote)}
          </div>

          ${s.limitations ? `
            <div style="margin-top:0.5rem;">
              <div class="block-label" style="margin-bottom:0.25rem;">Limitations</div>
              <ul style="padding-left:1.125rem;font-size:0.75rem;color:var(--text-muted);">
                ${s.limitations.map(l => `<li style="margin-bottom:0.125rem;">${esc(l)}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${s.approvalRequirements ? `
            <div style="margin-top:0.75rem;">
              <div class="block-label" style="margin-bottom:0.25rem;">Approval Requirements</div>
              <div style="font-size:0.75rem;">
                ${s.approvalRequirements.map(a => `
                  <div style="display:grid;grid-template-columns:auto 1fr;gap:0.125rem 0.5rem;padding:0.25rem 0;border-bottom:1px solid var(--border-light);">
                    <span style="font-weight:500;color:var(--text-primary);">${esc(a.riskBand)}</span>
                    <span style="color:var(--text-secondary);">${esc(a.approvalAuthority)}</span>
                    <span></span>
                    <span style="color:var(--text-muted);font-size:0.6875rem;">${esc(a.nacsaNotification)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

/* ===== SEARCH ===== */
function renderSearch(el, query) {
  if (!query) return renderOverview(el);
  const q = query.toLowerCase();
  const results = Object.values(state.provisions).filter(s =>
    s.title.toLowerCase().includes(q) ||
    s.verbatim.toLowerCase().includes(q) ||
    s.translation.toLowerCase().includes(q) ||
    (s.keywords || []).some(k => k.toLowerCase().includes(q))
  );

  el.innerHTML = `
    <div class="page-title">Search: "${esc(query)}"</div>
    <div class="page-subtitle">${results.length} result${results.length !== 1 ? 's' : ''} found</div>
    ${results.length === 0 ? '<div class="empty-state"><div class="empty-state-text">No matching provisions found.</div></div>' :
      results.map(s => `
        <a href="#framework/${s.id}" class="search-result">
          <div class="search-result-id">${s.id} &middot; Part ${s.part}</div>
          <div class="search-result-title">${esc(s.title)}</div>
          <div class="search-result-snippet">${esc(s.translation.substring(0, 200))}${s.translation.length > 200 ? '…' : ''}</div>
        </a>
      `).join('')
    }
  `;
}

/* ===== EVENT HANDLERS ===== */
function handleClick(e) {
  // Check data-accordion first (legacy toggle using .open class)
  const dataAcc = e.target.closest('[data-accordion]');
  if (dataAcc) {
    const item = dataAcc.closest('.accordion-item');
    if (item) item.classList.toggle('open');
    return;
  }

  // Then aria-expanded triggers (audit package)
  const ariaTrigger = e.target.closest('.accordion-trigger[aria-expanded]');
  if (ariaTrigger) {
    const expanded = ariaTrigger.getAttribute('aria-expanded') === 'true';
    ariaTrigger.setAttribute('aria-expanded', !expanded);
    const content = ariaTrigger.nextElementSibling;
    if (content) content.hidden = expanded;
    return;
  }

  // Tab switching
  const tabBtn = e.target.closest('.tab-btn');
  if (tabBtn) {
    const tabName = tabBtn.dataset.tab;
    const parent = tabBtn.closest('.tabs')?.parentElement || document;
    parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    tabBtn.classList.add('active');
    const panel = parent.querySelector(`#tab-${tabName}`);
    if (panel) {
      panel.classList.add('active');
      // Lazy-load section tabs (framework-detail sections)
      const sectionId = state.route.id;
      if (sectionId && state.provisions[sectionId] && ['requirements', 'evidence', 'controls', 'artifacts'].includes(tabName)) {
        activateTab(tabName, sectionId);
      }
    }
    return;
  }

  // Filter chips
  const filterChip = e.target.closest('.filter-chip');
  if (filterChip) {
    const filter = filterChip.dataset.filter || filterChip.dataset.sourceFilter;
    if (!filter) return;
    filterChip.closest('.filter-bar').querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
    filterChip.classList.add('active');

    // Penalty filtering
    const penaltyList = document.getElementById('penalty-list');
    if (penaltyList) {
      penaltyList.querySelectorAll('.penalty-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    }

    // Artifact filtering
    const artifactList = document.getElementById('artifact-list');
    if (artifactList) {
      artifactList.querySelectorAll('.artifact-item').forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.category === filter) ? '' : 'none';
      });
    }

    // Risk register filtering
    const riskList = document.getElementById('risk-register-list');
    if (riskList) {
      riskList.querySelectorAll('.risk-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    }
    return;
  }

  // Risk register sort buttons
  const sortBtn = e.target.closest('.risk-sort-btn');
  if (sortBtn) {
    sortBtn.closest('.risk-register-sort').querySelectorAll('.risk-sort-btn').forEach(b => b.classList.remove('active'));
    sortBtn.classList.add('active');
    const sortKey = sortBtn.dataset.sort;
    const list = document.getElementById('risk-register-list');
    if (list) {
      const cards = Array.from(list.querySelectorAll('.risk-card'));
      cards.sort((a, b) => {
        if (sortKey === 'inherent-desc') return parseInt(b.dataset.inherent) - parseInt(a.dataset.inherent);
        if (sortKey === 'residual-desc') return parseInt(b.dataset.residual) - parseInt(a.dataset.residual);
        return a.dataset.id.localeCompare(b.dataset.id);
      });
      cards.forEach(c => list.appendChild(c));
    }
    return;
  }
}

function handleChange(e) {
  // Risk checklist checkbox
  if (e.target.classList.contains('risk-check')) {
    const allChecks = document.querySelectorAll('.risk-check');
    const checked = document.querySelectorAll('.risk-check:checked').length;
    const total = allChecks.length;
    const bar = document.querySelector('.risk-checklist-bar');
    const count = document.querySelector('.risk-checklist-count');
    if (bar) bar.style.width = total ? ((checked / total) * 100) + '%' : '0%';
    if (count) count.textContent = checked + '/' + total;
    // Style checked items
    const label = e.target.closest('.risk-checklist-item');
    if (label) {
      label.style.opacity = e.target.checked ? '0.5' : '1';
      label.style.textDecoration = e.target.checked ? 'line-through' : 'none';
    }
  }
}

function handleSearch(e) {
  const query = e.target.value.trim();
  if (query.length >= 2) {
    location.hash = `#search/${encodeURIComponent(query)}`;
  } else if (!query) {
    location.hash = '#';
  }
}

/* ===== START ===== */
init();

// === Export Functions ===

function exportToPDF() {
  document.body.classList.add('printing');
  window.print();
  document.body.classList.remove('printing');
}

function exportToCSV() {
  const view = state.route.view;
  let data = [];
  let filename = `export-${view}-${new Date().toISOString().slice(0,10)}.csv`;

  if (view === 'controls') {
    const lib = state.controls ? state.controls.library : {};
    const list = Object.values(lib).flat();
    data = list.map(c => ({
      ID: c.id || c.slug || '',
      Name: c.name,
      Domain: c.domain,
      Description: (c.description || '').replace(/\n/g, ' ')
    }));
  } else if (view === 'risk') {
    const list = (state.riskManagement && state.riskManagement.riskRegister && state.riskManagement.riskRegister.risks) || [];
    data = list.map(r => ({
      ID: r.id,
      Risk: r.title || '',
      Impact: r.impact,
      Likelihood: r.likelihood,
      InherentRisk: r.inherentRisk,
      ResidualRisk: r.residualRisk,
      Treatment: r.treatment || ''
    }));
  } else {
    alert('CSV export only supported for Controls and Risk Register views.');
    return;
  }

  if (data.length === 0) {
    alert('No data found to export.');
    return;
  }

  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(','),
    ...data.map(row => headers.map(h => `"${(row[h] || '').toString().replace(/"/g, '""')}"`).join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// === Compliance Gap Tracker Logic ===

function getComplianceStatus(slug) {
  const data = JSON.parse(localStorage.getItem('nacsa_compliance_status') || '{}');
  return data[slug] || 'pending';
}

function setComplianceStatus(slug, status) {
  const data = JSON.parse(localStorage.getItem('nacsa_compliance_status') || '{}');
  data[slug] = status;
  localStorage.setItem('nacsa_compliance_status', JSON.stringify(data));
  render(); // Refresh UI
}

function renderComplianceToggle(slug) {
  const status = getComplianceStatus(slug);
  const options = [
    { id: 'pending', label: 'Pending', color: '#64748b' },
    { id: 'compliant', label: 'Compliant', color: '#22c55e' },
    { id: 'gap', label: 'Gap (Non-Compliant)', color: '#ef4444' },
    { id: 'na', label: 'Not Applicable', color: '#94a3b8' }
  ];

  const current = options.find(o => o.id === status);

  return `
    <div class="compliance-tracker-box" style="background:var(--bg-card); border:1px solid var(--border); border-radius:12px; padding:1.25rem; margin-bottom:1.5rem; display:flex; align-items:center; gap:1.5rem; flex-wrap:wrap">
      <div>
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--text-dim); margin-bottom:0.35rem">Compliance Status</div>
        <div style="font-size:1.1rem; font-weight:700; color:${current.color}">
          ${current.label}
        </div>
      </div>
      <div style="margin-left:auto; display:flex; gap:0.5rem; flex-wrap:wrap">
        ${options.map(o => `
          <button 
            onclick="setComplianceStatus('${slug}', '${o.id}')"
            style="cursor:pointer; border:1px solid ${status === o.id ? o.color : 'var(--border)'}; background:${status === o.id ? o.color + '15' : 'var(--bg-card)'}; color:${status === o.id ? o.color : 'var(--text-secondary)'}; padding:0.4rem 0.75rem; border-radius:6px; font-size:0.75rem; font-weight:600; transition:all 0.2s"
          >${o.label}</button>
        `).join('')}
      </div>
    </div>
  `;
}
