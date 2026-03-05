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

/* ===== ROUTING ===== */
function parseRoute() {
  const hash = location.hash.slice(1) || '';
  if (!hash) return { view: 'overview' };
  if (hash.startsWith('search/')) return { view: 'search', query: decodeURIComponent(hash.slice(7)) };
  if (hash.startsWith('part/')) return { view: 'part', id: hash.slice(5) };
  if (hash.startsWith('section/')) return { view: 'section', id: hash.slice(8) };
  if (hash.startsWith('sector/')) return { view: 'sector', id: hash.slice(7) };
  if (hash === 'sectors') return { view: 'sectors' };
  if (hash === 'penalties') return { view: 'penalties' };
  if (hash === 'controls') return { view: 'controls' };
  if (hash.startsWith('control/')) return { view: 'control-detail', slug: hash.slice(8) };
  if (hash === 'artifacts') return { view: 'artifacts' };
  if (hash === 'supplements') return { view: 'supplements' };
  if (hash.startsWith('supplement/')) return { view: 'supplement-detail', id: hash.slice(11) };
  if (hash === 'cross-references') return { view: 'cross-references' };
  if (hash === 'framework') return { view: 'framework' };
  return { view: 'overview' };
}

/* ===== INIT ===== */
async function init() {
  const [parts, provisionsArr] = await Promise.all([
    fetchJSON('provisions/parts.json'),
    fetchJSON('provisions/index.json'),
  ]);
  state.parts = parts || [];
  state.provisions = {};
  if (provisionsArr) {
    for (const s of provisionsArr) state.provisions[s.id] = s;
  }
  window.addEventListener('hashchange', render);
  document.addEventListener('click', handleClick);
  document.getElementById('search-input').addEventListener('input', debounce(handleSearch, 300));
  render();
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
    case 'part': renderPart(app, state.route.id); break;
    case 'section': renderSection(app, state.route.id); break;
    case 'sectors': renderSectors(app); break;
    case 'sector': renderSector(app, state.route.id); break;
    case 'penalties': renderPenalties(app); break;
    case 'controls': renderControls(app); break;
    case 'control-detail': renderControlDetail(app, state.route.slug); break;
    case 'artifacts': renderArtifacts(app); break;
    case 'supplements': renderSupplements(app); break;
    case 'supplement-detail': renderSupplementDetail(app, state.route.id); break;
    case 'cross-references': renderCrossReferences(app); break;
    case 'framework': renderFramework(app); break;
    case 'search': renderSearch(app, state.route.query); break;
    default: renderOverview(app);
  }
  window.scrollTo(0, 0);
}

function updateNav() {
  document.querySelectorAll('.nav-link').forEach(el => {
    const view = el.dataset.view;
    el.classList.toggle('active', view === state.route.view ||
      (view === 'overview' && state.route.view === 'part') ||
      (view === 'overview' && state.route.view === 'section') ||
      (view === 'sectors' && state.route.view === 'sector') ||
      (view === 'controls' && state.route.view === 'control-detail') ||
      (view === 'supplements' && state.route.view === 'supplement-detail') ||
      (view === 'framework' && state.route.view === 'framework')
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

/* ===== OVERVIEW ===== */
function renderOverview(el) {
  const totalSections = Object.keys(state.provisions).length;
  el.innerHTML = `
    <div class="disclaimer">
      This database is for educational and indicative purposes only. It does not constitute legal advice. The content represents an interpretation of the Cyber Security Act 2024 (Act 854) and its subsidiary instruments. Always consult the official Gazette text and qualified legal counsel for compliance decisions.
    </div>
    <div class="stats-banner">
      <div class="stat-card"><div class="stat-number">${totalSections}</div><div class="stat-label">Sections</div></div>
      <div class="stat-card"><div class="stat-number">9</div><div class="stat-label">Parts</div></div>
      <div class="stat-card"><div class="stat-number">11</div><div class="stat-label">NCII Sectors</div></div>
      <div class="stat-card"><div class="stat-number">6h</div><div class="stat-label">Incident Notification</div></div>
    </div>
    <h2 style="font-size:1.125rem;font-weight:600;margin-bottom:1rem;">Browse by Part</h2>
    <div class="part-grid">
      ${state.parts.map(p => {
        const sections = Object.values(state.provisions).filter(s => s.part === p.id);
        return `<a href="#part/${p.id}" class="part-card" data-part="${p.id}">
          <div class="part-card-id">Part ${p.id}</div>
          <div class="part-card-name">${esc(p.name)}</div>
          <div class="part-card-meta">${sections.length} sections &middot; ${p.sections}</div>
        </a>`;
      }).join('')}
    </div>
  `;
}

/* ===== PART VIEW ===== */
function renderPart(el, partId) {
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
    <div class="breadcrumbs"><a href="#">Overview</a><span class="sep">/</span>Part ${partId}</div>
    <div class="page-title">Part ${partId}: ${esc(part.name)}</div>
    <div class="page-subtitle">${esc(part.description)} &middot; ${sections.length} sections</div>
    <div class="accordion">
      ${Object.entries(divisions).map(([div, secs]) => `
        <div class="accordion-item open">
          <div class="accordion-header" data-accordion>
            <span>${esc(div)} (${secs.length} sections)</span>
            <span class="accordion-arrow">&#9654;</span>
          </div>
          <div class="accordion-body">
            ${secs.map(s => `
              <a href="#section/${s.id}" class="section-link">
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

/* ===== SECTION DETAIL ===== */
function renderSection(el, sectionId) {
  const s = state.provisions[sectionId];
  if (!s) return renderNotFound(el);
  const part = state.parts.find(p => p.id === s.part);

  el.innerHTML = `
    <div class="breadcrumbs">
      <a href="#">Overview</a><span class="sep">/</span>
      <a href="#part/${s.part}">Part ${s.part}${part ? ': ' + esc(part.name) : ''}</a><span class="sep">/</span>
      ${s.id}
    </div>
    <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.25rem;">
      <span style="font-family:var(--mono);font-size:1rem;color:var(--accent);font-weight:600;">${s.id}</span>
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
      state.controls = { domains: domains || {}, library: library || {}, sectionMap: sectionMap || { sectionToControls: {}, controlToSections: {} } };
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
          <div class="maturity-level basic"><div class="maturity-label">Basic</div>${esc(c.maturity.basic || '')}</div>
          <div class="maturity-level mature"><div class="maturity-label">Mature</div>${esc(c.maturity.mature || '')}</div>
          <div class="maturity-level advanced"><div class="maturity-label">Advanced</div>${esc(c.maturity.advanced || '')}</div>
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
    <div class="part-grid" style="grid-template-columns:repeat(2,1fr);">
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
    state.controls = { domains: domains || {}, library: library || {}, sectionMap: sectionMap || {} };
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
            <div class="accordion-header" data-accordion>
              <span>${esc(domain.name)} (${controls.length})</span>
              <span class="accordion-arrow">&#9654;</span>
            </div>
            <div class="accordion-body">
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
    state.controls = { domains: domains || {}, library: library || {}, sectionMap: sectionMap || {} };
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

  /* --- Audit Package: build HTML --- */
  let auditPackageHTML = '';
  if (linkedArtifacts.length || linkedEvidence.length) {
    const artifactsAccordion = linkedArtifacts.length ? `
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" data-accordion>
            <span>Required Artifacts (${linkedArtifacts.length})</span>
            <span class="accordion-arrow">&#9654;</span>
          </div>
          <div class="accordion-body">
            ${linkedArtifacts.map(a => `
              <div class="artifact-link-card">
                <div class="artifact-link-card-header">
                  <span class="artifact-link-card-name">${esc(a.name)}</span>
                  ${a.mandatory ? '<span class="badge badge-mandatory">Mandatory</span>' : ''}
                  ${a.category ? '<span class="badge badge-domain">' + esc(a.category) + '</span>' : ''}
                </div>
                <div class="artifact-link-card-meta">
                  ${a.owner ? '<span>Owner: ' + esc(a.owner) + '</span>' : ''}
                  ${a.reviewFrequency ? '<span>Review: ' + esc(a.reviewFrequency) + '</span>' : ''}
                </div>
                ${a.keyContents && a.keyContents.length ? `
                  <ul class="artifact-link-card-checklist">
                    ${a.keyContents.map(k => '<li>' + esc(k) + '</li>').join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    ` : '';

    const evidenceAccordion = linkedEvidence.length ? `
      <div class="accordion">
        <div class="accordion-item">
          <div class="accordion-header" data-accordion>
            <span>Evidence Checklist (${linkedEvidence.length})</span>
            <span class="accordion-arrow">&#9654;</span>
          </div>
          <div class="accordion-body">
            ${linkedEvidence.map(item => `
              <div class="evidence-checklist-item">
                <div class="evidence-checklist-item-header">
                  <span class="evidence-checklist-item-name">${esc(item.name)}</span>
                  ${item.format ? '<span class="badge badge-administrative">' + esc(item.format) + '</span>' : ''}
                  ${item.retentionPeriod ? '<span class="badge badge-domain">' + esc(item.retentionPeriod) + '</span>' : ''}
                </div>
                ${item.description ? '<div class="evidence-checklist-item-desc">' + esc(item.description) + '</div>' : ''}
                ${item.suggestedSources && item.suggestedSources.length ? `
                  <div class="evidence-checklist-item-sources">
                    <strong>Sources:</strong> ${item.suggestedSources.map(s => esc(s)).join(', ')}
                  </div>
                ` : ''}
                ${item.whatGoodLooksLike && item.whatGoodLooksLike.length ? `
                  <div class="accordion">
                    <div class="accordion-item">
                      <div class="accordion-header" data-accordion>
                        <span>What Good Looks Like</span>
                        <span class="accordion-arrow">&#9654;</span>
                      </div>
                      <div class="accordion-body">
                        <ul class="evidence-good">
                          ${item.whatGoodLooksLike.map(g => '<li><span>' + esc(g) + '</span></li>').join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                ` : ''}
                ${item.commonGaps && item.commonGaps.length ? `
                  <div class="accordion">
                    <div class="accordion-item">
                      <div class="accordion-header" data-accordion>
                        <span>Common Gaps</span>
                        <span class="accordion-arrow">&#9654;</span>
                      </div>
                      <div class="accordion-body">
                        <ul class="evidence-gap">
                          ${item.commonGaps.map(g => '<li><span>' + esc(g) + '</span></li>').join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    ` : '';

    auditPackageHTML = `
      <div class="audit-package">
        <div class="audit-package-title">Audit Package</div>
        <div class="audit-package-summary">${linkedArtifacts.length} artifact${linkedArtifacts.length !== 1 ? 's' : ''} &middot; ${linkedEvidence.length} evidence item${linkedEvidence.length !== 1 ? 's' : ''}</div>
        ${artifactsAccordion}
        ${evidenceAccordion}
      </div>
    `;
  }

  el.innerHTML = `
    <div class="breadcrumbs"><a href="#">Overview</a><span class="sep">/</span><a href="#controls">Controls</a><span class="sep">/</span>${esc(control.name)}</div>
    <div style="display:flex;gap:0.375rem;margin-bottom:0.25rem;">
      <span class="badge badge-domain">${esc(domain.name || control.domain)}</span>
      <span class="badge badge-type">${esc(control.type)}</span>
      <span class="badge badge-layer">${esc(control.layer || '')}</span>
    </div>
    <div class="page-title">${esc(control.name)}</div>
    <div class="page-subtitle">${esc(control.description)}</div>
    ${renderControlCard(control)}
    ${control.sections && control.sections.length ? `
      <div class="card">
        <div class="card-title">Mapped Sections</div>
        <div style="display:flex;gap:0.375rem;flex-wrap:wrap;">
          ${control.sections.map(s => `<a href="#section/${s}" class="badge badge-domain">${esc(s)}</a>`).join('')}
        </div>
      </div>
    ` : ''}
    ${auditPackageHTML}
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
        <div class="part-grid" style="grid-template-columns:repeat(2,1fr);">
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
            <div class="accordion-header" data-accordion>
              <span><span style="font-family:var(--mono);color:var(--accent);margin-right:0.5rem;">${esc(p.id)}</span>${esc(p.title)}</span>
              <span class="accordion-arrow">&#9654;</span>
            </div>
            <div class="accordion-body">
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
            <div class="accordion-header" data-accordion>
              <span>${esc(d.name)} (${(d.requirements || []).length} requirements)</span>
              <span class="accordion-arrow">&#9654;</span>
            </div>
            <div class="accordion-body">
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

/* ===== CROSS-REFERENCES ===== */
async function renderCrossReferences(el) {
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
      <span class="xref-section" onclick="location.hash='#section/${m.section}'">${esc(m.section)}</span>
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

/* ===== FRAMEWORK VIEW ===== */
async function renderFramework(el) {
  if (!state.requirements) state.requirements = await fetchJSON('requirements/index.json') || {};
  if (!state.controls) {
    const [domains, library, sectionMap] = await Promise.all([
      fetchJSON('controls/domains.json'), fetchJSON('controls/library.json'), fetchJSON('controls/section-map.json'),
    ]);
    state.controls = { domains: domains || {}, library: library || {}, sectionMap: sectionMap || {} };
  }

  let totalReqs = 0;
  for (const sec of Object.values(state.requirements)) {
    for (const p of ['legal', 'technical', 'governance']) {
      totalReqs += (sec[p]?.requirements || []).length;
    }
  }
  const totalControls = Object.values(state.controls.library).reduce((sum, arr) => sum + arr.length, 0);

  el.innerHTML = `
    <div class="page-title">Compliance Framework Architecture</div>
    <div class="page-subtitle">How the Act 854 ecosystem connects: from provisions through requirements to controls, evidence, and artifacts</div>

    <div class="framework-flow">
      <div class="framework-step"><div class="framework-step-label">Provisions</div><div class="framework-step-count">${Object.keys(state.provisions).length} sections</div></div>
      <div class="framework-step"><div class="framework-step-label">Requirements</div><div class="framework-step-count">${totalReqs} obligations</div></div>
      <div class="framework-step" onclick="location.hash='#controls'"><div class="framework-step-label">Controls</div><div class="framework-step-count">${totalControls} controls</div></div>
      <div class="framework-step"><div class="framework-step-label">Evidence</div><div class="framework-step-count">${Object.keys(state.evidence || {}).length || '~30'} items</div></div>
      <div class="framework-step" onclick="location.hash='#artifacts'"><div class="framework-step-label">Artifacts</div><div class="framework-step-count">~120 documents</div></div>
    </div>

    <h3 style="font-size:1rem;font-weight:600;margin:1.5rem 0 0.75rem;">Source Hierarchy</h3>
    <div class="card">
      <div style="display:grid;grid-template-columns:auto 1fr;gap:0.5rem 1rem;font-size:0.8125rem;">
        <span style="font-weight:600;color:var(--accent);">Tier 1</span><span>Cyber Security Act 2024 (Act 854) — Primary legislation</span>
        <span style="font-weight:600;color:var(--amber);">Tier 2</span><span>Subsidiary Regulations — Risk assessment, audit, licensing, compounding</span>
        <span style="font-weight:600;color:#D97706;">Tier 3</span><span>Chief Executive Directives — Binding operational instructions</span>
        <span style="font-weight:600;color:var(--purple);">Tier 4</span><span>Codes of Practice — Sector-specific standards and best practices</span>
        <span style="font-weight:600;color:var(--green);">Tier 5</span><span>Standards — CE-determined cyber security technical standards</span>
      </div>
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
        <a href="#section/${s.id}" class="search-result">
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
  // Accordion toggle
  const accHeader = e.target.closest('[data-accordion]');
  if (accHeader) {
    accHeader.closest('.accordion-item').classList.toggle('open');
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
      // Lazy-load section tabs
      const sectionId = state.route.id;
      if (sectionId && ['requirements', 'evidence', 'controls', 'artifacts'].includes(tabName)) {
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
    return;
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
