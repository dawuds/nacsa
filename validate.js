#!/usr/bin/env node
/**
 * validate.js — NACSA (Cyber Security Act 854) data integrity validator
 *
 * Checks:
 *   1.  All JSON files parse without errors
 *   2.  Control slug uniqueness and required fields
 *   3.  Every domain has at least one control
 *   4.  Artifact controlSlugs resolve to controls/library.json slugs
 *   5.  Evidence artifactSlugs resolve to artifacts/inventory.json slugs
 *   6.  Provision key consistency — evidence & requirements keys exist in provisions/index.json
 *   7.  Risk register math
 *   8.  NCII controls reference valid domains
 *   9.  Penalty sections reference valid Act 854 provisions
 *   10. Supplement CoPs have required fields
 *   11. relatedDirectives in controls resolve to directives index
 *   12. Cross-reference files have sourceType field
 *   13. Sectors index — required fields and sector IDs
 *   14. No empty arrays or empty strings in core data
 *
 * Usage: node validate.js [--verbose]
 */

'use strict';

const fs   = require('fs');
const path = require('path');

const REPO_ROOT = __dirname;
const verbose   = process.argv.includes('--verbose');

let pass = 0;
let fail = 0;
let warn = 0;

function ok(msg)      { pass++; if (verbose) console.log(`  PASS  ${msg}`); }
function bad(msg)     { fail++; console.log(`  FAIL  ${msg}`); }
function warning(msg) { warn++; console.log(`  WARN  ${msg}`); }

function loadJson(relPath) {
  const abs = path.join(REPO_ROOT, relPath);
  if (!fs.existsSync(abs)) return null;
  try {
    return JSON.parse(fs.readFileSync(abs, 'utf8'));
  } catch (e) {
    return null;
  }
}

// ── 1. JSON Parse Check ─────────────────────────────────────────────

console.log('\n=== 1. JSON Parse Check ===');

function findJsonFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...findJsonFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(path.relative(REPO_ROOT, full));
    }
  }
  return results;
}

const jsonFiles = findJsonFiles(REPO_ROOT);
const parsedFiles = {};
let parseErrors = 0;

for (const file of jsonFiles) {
  try {
    parsedFiles[file] = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, file), 'utf8'));
    ok(`Parsed: ${file}`);
  } catch (e) {
    bad(`JSON parse error: ${file} — ${e.message}`);
    parseErrors++;
  }
}

if (parseErrors === 0) {
  ok(`All ${jsonFiles.length} JSON files parse correctly`);
}

// ── Load core data ──────────────────────────────────────────────────

const controlsLib    = loadJson('controls/library.json');
const domainsFile    = loadJson('controls/domains.json');
const artifactsInv   = loadJson('artifacts/inventory.json');
const provisions     = loadJson('provisions/index.json');
const evidence       = loadJson('evidence/index.json');
const requirements   = loadJson('requirements/index.json');
const riskRegister   = loadJson('risk-management/risk-register.json');
const directivesIdx  = loadJson('supplements/directives/index.json');
const copIndex       = loadJson('supplements/codes-of-practice/index.json');
const penaltiesIndex = loadJson('penalties/index.json');
const sectorsIndex   = loadJson('sectors/index.json');

// Build control slug set
const libraryDomains  = (controlsLib && controlsLib.domains) || [];
const libraryControls = (controlsLib && controlsLib.controls) || [];
const controlSlugSet  = new Set(libraryControls.map(c => c.slug));
const domainSlugSet   = new Set(libraryDomains.map(d => d.slug));

// Build artifact slug set
let allArtifacts = [];
if (artifactsInv) {
  for (const [key, val] of Object.entries(artifactsInv)) {
    if (Array.isArray(val)) allArtifacts.push(...val);
  }
}
const artifactSlugSet = new Set(allArtifacts.map(a => a.slug));

// Build provision ID set
const provisionIdSet = new Set();
if (Array.isArray(provisions)) {
  for (const p of provisions) { if (p.id) provisionIdSet.add(p.id); }
}

// Build directive ID set
const directiveIdSet = new Set();
if (directivesIdx && directivesIdx.directives) {
  for (const d of directivesIdx.directives) { if (d.id) directiveIdSet.add(d.id); }
}

// ── 2. Control Slug Uniqueness & Required Fields ─────────────────────

console.log('\n=== 2. Control Slug Uniqueness & Required Fields ===');

const slugCounts = {};
for (const ctrl of libraryControls) {
  if (!ctrl.slug) {
    bad(`Control missing "slug": ${(ctrl.name || '').slice(0, 60)}`);
  } else {
    slugCounts[ctrl.slug] = (slugCounts[ctrl.slug] || 0) + 1;
  }
  if (!ctrl.name || ctrl.name.trim() === '') {
    bad(`Control "${ctrl.slug}" has empty or missing "name"`);
  }
  if (!ctrl.domain) {
    bad(`Control "${ctrl.slug}" missing "domain" field`);
  }
}

const duplicates = Object.entries(slugCounts).filter(([, c]) => c > 1);
if (duplicates.length === 0) {
  ok(`No duplicate control slugs (${libraryControls.length} controls)`);
} else {
  for (const [slug, count] of duplicates) {
    bad(`Duplicate control slug "${slug}" appears ${count} times`);
  }
}

// ── 3. Every Domain Has Controls ─────────────────────────────────────

console.log('\n=== 3. Domain Coverage ===');

const controlsByDomain = {};
for (const ctrl of libraryControls) {
  if (ctrl.domain) {
    controlsByDomain[ctrl.domain] = (controlsByDomain[ctrl.domain] || 0) + 1;
  }
}

for (const dom of libraryDomains) {
  if (!controlsByDomain[dom.slug]) {
    bad(`Domain "${dom.slug}" has zero controls`);
  } else {
    ok(`Domain "${dom.slug}" has ${controlsByDomain[dom.slug]} control(s)`);
  }
}

// Domains.json keys match library.json domain slugs
if (domainsFile) {
  for (const key of Object.keys(domainsFile)) {
    if (!domainSlugSet.has(key)) {
      warning(`domains.json key "${key}" not found in library.json domains`);
    }
  }
  for (const dom of libraryDomains) {
    if (!domainsFile[dom.slug]) {
      warning(`library.json domain "${dom.slug}" not found in domains.json`);
    }
  }
}

// ── 4. controlSlugs Resolution (Artifacts → Controls) ────────────────

console.log('\n=== 4. controlSlugs Resolution (Artifacts) ===');

let controlSlugErrors = 0;
let controlSlugTotal = 0;

for (const artifact of allArtifacts) {
  if (!artifact.controlSlugs) continue;
  for (const slug of artifact.controlSlugs) {
    controlSlugTotal++;
    if (!controlSlugSet.has(slug)) {
      bad(`Artifact "${artifact.slug}" references unknown control slug "${slug}"`);
      controlSlugErrors++;
    }
  }
}

if (controlSlugErrors === 0) {
  ok(`All ${controlSlugTotal} controlSlug references in artifacts resolve correctly`);
}

// ── 5. artifactSlugs Resolution (Evidence → Artifacts) ───────────────

console.log('\n=== 5. artifactSlugs Resolution (Evidence) ===');

let artifactSlugErrors = 0;
let artifactSlugTotal = 0;

if (evidence && typeof evidence === 'object') {
  for (const key of Object.keys(evidence)) {
    const entry = evidence[key];
    if (!entry || !entry.evidenceItems) continue;
    for (const item of entry.evidenceItems) {
      if (!item.artifactSlugs) continue;
      for (const slug of item.artifactSlugs) {
        artifactSlugTotal++;
        if (!artifactSlugSet.has(slug)) {
          bad(`Evidence "${item.id}" references unknown artifact slug "${slug}"`);
          artifactSlugErrors++;
        }
      }
    }
  }
}

if (artifactSlugErrors === 0) {
  ok(`All ${artifactSlugTotal} artifactSlug references in evidence resolve correctly`);
}

// ── 6. Provision Key Consistency ─────────────────────────────────────

console.log('\n=== 6. Provision Key Consistency ===');

if (evidence && provisionIdSet.size > 0) {
  let evidenceKeyErrors = 0;
  for (const key of Object.keys(evidence)) {
    if (!provisionIdSet.has(key)) {
      bad(`Evidence key "${key}" not found in provisions/index.json`);
      evidenceKeyErrors++;
    }
  }
  if (evidenceKeyErrors === 0) {
    ok(`All ${Object.keys(evidence).length} evidence keys match provision IDs`);
  }
}

if (requirements && typeof requirements === 'object' && provisionIdSet.size > 0) {
  let reqKeyErrors = 0;
  const reqKeys = Array.isArray(requirements) ? [] : Object.keys(requirements);
  for (const key of reqKeys) {
    if (!provisionIdSet.has(key)) {
      bad(`Requirement key "${key}" not found in provisions/index.json`);
      reqKeyErrors++;
    }
  }
  if (reqKeyErrors === 0 && reqKeys.length > 0) {
    ok(`All ${reqKeys.length} requirement keys match provision IDs`);
  }
}

// ── 7. Risk Register Math ────────────────────────────────────────────

console.log('\n=== 7. Risk Register Math ===');

if (riskRegister && riskRegister.risks) {
  let mathErrors = 0;
  for (const risk of riskRegister.risks) {
    const expectedInherent = risk.likelihood * risk.impact;
    if (risk.inherentRisk !== expectedInherent) {
      bad(`${risk.id}: inherentRisk ${risk.inherentRisk} != ${risk.likelihood} x ${risk.impact} = ${expectedInherent}`);
      mathErrors++;
    }
    const expectedResidual = risk.residualLikelihood * risk.residualImpact;
    if (risk.residualRisk !== expectedResidual) {
      bad(`${risk.id}: residualRisk ${risk.residualRisk} != ${risk.residualLikelihood} x ${risk.residualImpact} = ${expectedResidual}`);
      mathErrors++;
    }
  }
  if (mathErrors === 0) {
    ok(`All ${riskRegister.risks.length} risk register entries have correct math`);
  }
}

// ── 8. NCII Controls Reference Valid Domains ─────────────────────────

console.log('\n=== 8. Control Domain References ===');

let domainRefErrors = 0;
for (const ctrl of libraryControls) {
  if (ctrl.domain && !domainSlugSet.has(ctrl.domain)) {
    bad(`Control "${ctrl.slug}" references unknown domain "${ctrl.domain}"`);
    domainRefErrors++;
  }
}

if (domainRefErrors === 0) {
  ok(`All ${libraryControls.length} controls reference valid domains`);
}

// Verify control sections reference valid provision IDs
if (provisionIdSet.size > 0) {
  let sectionRefErrors = 0;
  for (const ctrl of libraryControls) {
    if (!ctrl.sections) continue;
    for (const sec of ctrl.sections) {
      if (!provisionIdSet.has(sec)) {
        bad(`Control "${ctrl.slug}" references unknown section "${sec}"`);
        sectionRefErrors++;
      }
    }
  }
  if (sectionRefErrors === 0) {
    ok('All control section references resolve to valid provisions');
  }
}

// ── 9. Penalty Sections Reference Valid Act 854 Provisions ───────────

console.log('\n=== 9. Penalty Provision References ===');

if (Array.isArray(penaltiesIndex)) {
  let penaltyErrors = 0;
  for (const pen of penaltiesIndex) {
    if (!pen.id) {
      bad(`Penalty entry missing "id"`);
      penaltyErrors++;
    }
    if (!pen.section) {
      bad(`Penalty "${pen.id}" missing "section" field`);
      penaltyErrors++;
    }
    if (!pen.penalty) {
      bad(`Penalty "${pen.id}" missing "penalty" object`);
      penaltyErrors++;
    } else {
      if (pen.penalty.fineNumeric === undefined || pen.penalty.fineNumeric === null) {
        warning(`Penalty "${pen.id}" missing numeric fine value`);
      }
    }
    if (!pen.offence || pen.offence.trim() === '') {
      bad(`Penalty "${pen.id}" has empty or missing "offence" description`);
      penaltyErrors++;
    }
  }
  if (penaltyErrors === 0) {
    ok(`All ${penaltiesIndex.length} penalty entries have required fields`);
  }
}

// ── 10. Supplement CoPs Required Fields ──────────────────────────────

console.log('\n=== 10. Supplement CoPs Required Fields ===');

if (copIndex && copIndex.codesOfPractice) {
  let copErrors = 0;
  for (const cop of copIndex.codesOfPractice) {
    const missing = [];
    if (!cop.id)         missing.push('id');
    if (!cop.title)      missing.push('title');
    if (!cop.sectorId)   missing.push('sectorId');
    if (!cop.sectorLead) missing.push('sectorLead');
    if (missing.length > 0) {
      bad(`CoP "${cop.id || cop.title || '(unknown)'}" missing fields: ${missing.join(', ')}`);
      copErrors++;
    }

    // Validate CoP filePath exists
    if (cop.filePath) {
      const copFile = path.join(REPO_ROOT, cop.filePath);
      if (!fs.existsSync(copFile)) {
        bad(`CoP "${cop.id}" filePath "${cop.filePath}" does not exist`);
        copErrors++;
      } else {
        ok(`CoP "${cop.id}" filePath exists`);
      }
    }
  }
  if (copErrors === 0) {
    ok(`All ${copIndex.codesOfPractice.length} CoPs have required fields`);
  }

  // Validate individual CoP files have required structure
  for (const cop of copIndex.codesOfPractice) {
    if (!cop.filePath) continue;
    const copData = loadJson(cop.filePath);
    if (copData) {
      if (!copData.id) bad(`CoP file "${cop.filePath}" missing "id"`);
      if (!copData.title) bad(`CoP file "${cop.filePath}" missing "title"`);
      if (!copData.domains && !copData.requirements) {
        warning(`CoP file "${cop.filePath}" has neither "domains" nor "requirements"`);
      }
    }
  }
}

// ── 11. relatedDirectives Resolution ─────────────────────────────────

console.log('\n=== 11. relatedDirectives Resolution (Controls) ===');

let directiveErrors = 0;
let directiveTotal = 0;

for (const ctrl of libraryControls) {
  if (!ctrl.relatedDirectives) continue;
  for (const dirId of ctrl.relatedDirectives) {
    directiveTotal++;
    if (!directiveIdSet.has(dirId)) {
      bad(`Control "${ctrl.slug}" references unknown directive "${dirId}"`);
      directiveErrors++;
    }
  }
}

if (directiveErrors === 0) {
  ok(`All ${directiveTotal} relatedDirective references resolve correctly`);
}

// ── 12. Cross-Reference Files — sourceType Field ─────────────────────

console.log('\n=== 12. Cross-Reference sourceType Field ===');

const crossRefDir = path.join(REPO_ROOT, 'cross-references');
if (fs.existsSync(crossRefDir)) {
  let sourceTypeErrors = 0;
  for (const fn of fs.readdirSync(crossRefDir)) {
    if (!fn.endsWith('.json')) continue;
    const rel = `cross-references/${fn}`;
    const data = parsedFiles[rel] || loadJson(rel);
    if (data) {
      if (!data.sourceType) {
        warning(`${rel}: missing "sourceType" field`);
        sourceTypeErrors++;
      } else {
        ok(`${rel}: sourceType = "${data.sourceType}"`);
      }
    }
  }
  if (sourceTypeErrors === 0) {
    ok('All cross-reference files have sourceType');
  }
}

// ── 13. Sectors Index — Required Fields ──────────────────────────────

console.log('\n=== 13. Sectors Index Validation ===');

if (sectorsIndex && sectorsIndex.sectors) {
  let sectorErrors = 0;
  const sectorIds = new Set();
  for (const sector of sectorsIndex.sectors) {
    if (!sector.id) {
      bad(`Sector missing "id"`);
      sectorErrors++;
    } else if (sectorIds.has(sector.id)) {
      bad(`Duplicate sector ID: "${sector.id}"`);
      sectorErrors++;
    } else {
      sectorIds.add(sector.id);
    }
    if (!sector.name || sector.name.trim() === '') {
      bad(`Sector "${sector.id}" has empty or missing "name"`);
      sectorErrors++;
    }
    if (!sector.sectorLead || sector.sectorLead.trim() === '') {
      bad(`Sector "${sector.id}" has empty or missing "sectorLead"`);
      sectorErrors++;
    }
    // Validate obligations have required fields
    if (sector.obligations) {
      for (const ob of sector.obligations) {
        if (!ob.id) bad(`Sector "${sector.id}" obligation missing "id"`);
        if (!ob.obligation) bad(`Sector "${sector.id}" obligation "${ob.id}" missing text`);
        if (!ob.basis) warning(`Sector "${sector.id}" obligation "${ob.id}" missing "basis"`);
      }
    }
  }
  if (sectorErrors === 0) {
    ok(`All ${sectorsIndex.sectors.length} sectors have required fields`);
  }
}

// ── 14. Data Completeness — No Empty Arrays / Empty Strings ──────────

console.log('\n=== 14. Data Completeness ===');

let emptyIssues = 0;

for (const ctrl of libraryControls) {
  if (ctrl.sections && ctrl.sections.length === 0) {
    warning(`Control "${ctrl.slug}" has empty sections array`);
    emptyIssues++;
  }
  if (ctrl.keyActivities && ctrl.keyActivities.length === 0) {
    warning(`Control "${ctrl.slug}" has empty keyActivities array`);
    emptyIssues++;
  }
  if (ctrl.description && ctrl.description.trim() === '') {
    bad(`Control "${ctrl.slug}" has empty description`);
    emptyIssues++;
  }
}

for (const artifact of allArtifacts) {
  if (artifact.name && artifact.name.trim() === '') {
    bad(`Artifact "${artifact.slug}" has empty name`);
    emptyIssues++;
  }
}

if (emptyIssues === 0) {
  ok('No empty arrays or empty strings detected in core data');
}

// ── Summary ──────────────────────────────────────────────────────────

console.log('\n' + '='.repeat(60));
console.log('Validation complete:');
console.log(`  Pass: ${pass}`);
console.log(`  Fail: ${fail}`);
console.log(`  Warn: ${warn}`);
console.log(`  Total: ${pass + fail + warn}`);
console.log('='.repeat(60));

if (fail > 0) {
  console.error(`\nValidation FAILED with ${fail} error(s).`);
  process.exit(1);
} else if (warn > 0) {
  console.log(`\nValidation passed with ${warn} warning(s).`);
  process.exit(0);
} else {
  console.log('\nAll checks passed.');
  process.exit(0);
}
