#!/usr/bin/env node
/**
 * validate.js — Data integrity checks for NACSA Act 854 compliance database
 *
 * Checks:
 *   1. All JSON files parse correctly
 *   2. All controlSlugs in artifact entries resolve to controls in controls/library.json
 *   3. All artifactSlugs in evidence entries resolve to artifacts in artifacts/inventory.json
 *   4. All section keys in evidence/index.json and requirements/index.json exist in provisions/index.json
 *   5. Risk register math: inherentRisk = likelihood * impact, residualRisk = residualLikelihood * residualImpact
 *   6. No duplicate control slugs
 *   7. All relatedDirectives in controls resolve to directives in supplements/directives/index.json
 *
 * Usage: node validate.js
 */

const fs = require('fs');
const path = require('path');

let pass = 0;
let fail = 0;
let warn = 0;

function ok(msg) { pass++; console.log(`  PASS  ${msg}`); }
function bad(msg) { fail++; console.log(`  FAIL  ${msg}`); }
function warning(msg) { warn++; console.log(`  WARN  ${msg}`); }

// ── 1. JSON parse check ─────────────────────────────────────────────

console.log('\n=== 1. JSON Parse Check ===');

function findJsonFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...findJsonFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      results.push(full);
    }
  }
  return results;
}

const jsonFiles = findJsonFiles('.');
const parsed = {};
let parseErrors = 0;

for (const file of jsonFiles) {
  try {
    parsed[file] = JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    bad(`${file}: ${e.message}`);
    parseErrors++;
  }
}

if (parseErrors === 0) {
  ok(`All ${jsonFiles.length} JSON files parse correctly`);
} else {
  bad(`${parseErrors}/${jsonFiles.length} JSON files failed to parse`);
}

// ── Load data ────────────────────────────────────────────────────────

const controlsLib = JSON.parse(fs.readFileSync('./controls/library.json', 'utf8'));
const allControls = Object.values(controlsLib).flat();
const controlSlugSet = new Set(allControls.map(c => c.slug));

const artifactsInv = JSON.parse(fs.readFileSync('./artifacts/inventory.json', 'utf8'));
const allArtifacts = Object.values(artifactsInv).flat();
const artifactSlugSet = new Set(allArtifacts.map(a => a.slug));

const provisions = JSON.parse(fs.readFileSync('./provisions/index.json', 'utf8'));
const provisionIdSet = new Set(provisions.map(p => p.id));

const evidence = JSON.parse(fs.readFileSync('./evidence/index.json', 'utf8'));
const requirements = JSON.parse(fs.readFileSync('./requirements/index.json', 'utf8'));
const riskRegister = JSON.parse(fs.readFileSync('./risk-management/risk-register.json', 'utf8'));
const directivesIdx = JSON.parse(fs.readFileSync('./supplements/directives/index.json', 'utf8'));
const directiveIdSet = new Set(directivesIdx.directives.map(d => d.id));

// ── 2. controlSlugs resolution (artifacts → controls) ────────────────

console.log('\n=== 2. controlSlugs Resolution (Artifacts) ===');

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
} else {
  bad(`${controlSlugErrors}/${controlSlugTotal} controlSlug references are broken`);
}

// ── 3. artifactSlugs resolution (evidence → artifacts) ───────────────

console.log('\n=== 3. artifactSlugs Resolution (Evidence) ===');

let artifactSlugErrors = 0;
let artifactSlugTotal = 0;

for (const sectionId of Object.keys(evidence)) {
  const entry = evidence[sectionId];
  if (!entry.evidenceItems) continue;
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

if (artifactSlugErrors === 0) {
  ok(`All ${artifactSlugTotal} artifactSlug references in evidence resolve correctly`);
} else {
  bad(`${artifactSlugErrors}/${artifactSlugTotal} artifactSlug references are broken`);
}

// ── 4. Provision key consistency ─────────────────────────────────────

console.log('\n=== 4. Provision Key Consistency ===');

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

let requirementKeyErrors = 0;
for (const key of Object.keys(requirements)) {
  if (!provisionIdSet.has(key)) {
    bad(`Requirement key "${key}" not found in provisions/index.json`);
    requirementKeyErrors++;
  }
}
if (requirementKeyErrors === 0) {
  ok(`All ${Object.keys(requirements).length} requirement keys match provision IDs`);
}

// ── 5. Risk register math ────────────────────────────────────────────

console.log('\n=== 5. Risk Register Math ===');

let mathErrors = 0;
for (const risk of riskRegister.risks) {
  const expectedInherent = risk.likelihood * risk.impact;
  if (risk.inherentRisk !== expectedInherent) {
    bad(`${risk.id}: inherentRisk ${risk.inherentRisk} != likelihood(${risk.likelihood}) x impact(${risk.impact}) = ${expectedInherent}`);
    mathErrors++;
  }
  const expectedResidual = risk.residualLikelihood * risk.residualImpact;
  if (risk.residualRisk !== expectedResidual) {
    bad(`${risk.id}: residualRisk ${risk.residualRisk} != residualLikelihood(${risk.residualLikelihood}) x residualImpact(${risk.residualImpact}) = ${expectedResidual}`);
    mathErrors++;
  }
}

if (mathErrors === 0) {
  ok(`All ${riskRegister.risks.length} risk register entries have correct math`);
}

// ── 6. No duplicate control slugs ────────────────────────────────────

console.log('\n=== 6. Duplicate Control Slugs ===');

const slugCounts = {};
for (const ctrl of allControls) {
  slugCounts[ctrl.slug] = (slugCounts[ctrl.slug] || 0) + 1;
}

const duplicates = Object.entries(slugCounts).filter(([, count]) => count > 1);
if (duplicates.length === 0) {
  ok(`No duplicate control slugs (${allControls.length} unique)`);
} else {
  for (const [slug, count] of duplicates) {
    bad(`Duplicate control slug "${slug}" appears ${count} times`);
  }
}

// ── 7. relatedDirectives resolution (controls → directives) ──────────

console.log('\n=== 7. relatedDirectives Resolution (Controls) ===');

let directiveErrors = 0;
let directiveTotal = 0;

for (const ctrl of allControls) {
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
  ok(`All ${directiveTotal} relatedDirective references in controls resolve correctly`);
} else {
  bad(`${directiveErrors}/${directiveTotal} relatedDirective references are broken`);
}

// ── Summary ──────────────────────────────────────────────────────────

console.log('\n=== Summary ===');
console.log(`  Pass: ${pass}`);
console.log(`  Fail: ${fail}`);
console.log(`  Warn: ${warn}`);
console.log(`  Total checks: ${pass + fail + warn}`);
process.exit(fail > 0 ? 1 : 0);
