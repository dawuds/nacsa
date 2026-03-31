# NACSA Act 854 Explorer

**Last updated:** 2026-03-31

## What This Is
Structured compliance database for Malaysia's Cyber Security Act 2024 (Act 854). SPA explorer with JSON data layers. **Tier 1 Focus Area** in the GRC portfolio.

## Portfolio Role
One of 5 Tier 1 focus areas receiving full investment toward audit-readiness. Primary cybersecurity compliance framework for Malaysian NCII entities. Cross-references PDPA-MY, IESP, AI-Governance, and SC-GTRM.

## Quick Start
Open `index.html` in a browser. Run `node validate.js` to check data integrity.

## Architecture
- **SPA**: `index.html` + `app.js` + `style.css` (vanilla JS, no build step)
- **Data**: 185 JSON files across 11 layers (provisions, sectors, requirements, evidence, controls, artifacts, penalties, cross-references, risk-management, supplements, templates)
- **Schema**: GRC Portfolio v2.0 Standardized Schema

## Key Data Files
- `controls/library.json` — 67 controls (v3.1) with awpRequirements, controlObjective, whatGoodLooksLike, keyRiskIfAbsent, riskTier (27 critical / 37 standard / 3 conditional), samplingGuidance
- `controls/domains.json` — 18 domains aligned to CoP Template (v3.0)
- `evidence/index.json` — 116 evidence items keyed by Act section
- `cross-references/framework-mappings.json` — NIST CSF, ISO 27001, RMiT, PDPA, CIS Controls
- `audit-integration.json` — Maps 67 controls to Tech-Audit/NACSA audit procedures

## Control Library Design (v3.1)
- **67 controls** grouped at a meaningful level of accountability (not 1:1 with requirements)
- Each control maps to 1-4 AWP requirements via `awpRequirements` field (160 total, 0 gaps)
- Average ratio: 2.4 requirements per control
- Risk tiers drive sampling depth: Critical (high-risk samples), Standard (standard samples), Conditional (if applicable)
- Context fields: controlObjective (why), whatGoodLooksLike (expected state), keyRiskIfAbsent (stakes), samplingGuidance

## AWP Design Principles
- **CoP-driven** — audit criteria from Code of Practice, not NCSB sub-requirements
- **Compliance assessment** — Patuh / Separa Patuh / Tidak Patuh / Tidak Berkenaan (no maturity scoring)
- **Two-scope model** — org-level controls tested once; system-level tested per NCII system
- **Legal overlay integrated** — statutory obligations, s52 director liability, penalty exposure as core sheets
- **Weakest-link aggregation** — domain compliance as profile, not blended score
- **Automated scoring** — COUNTIF formulas in aggregation sheet reference domain worksheets
- **Control context rows** — WHY / WHAT GOOD LOOKS LIKE / KEY RISK IF ABSENT before each control's requirements
- **Sampling methodology** — population-based tables, time-based coverage, risk tier classification

## Conventions
- Kebab-case slugs for all IDs (e.g., `ncii-entity-registration`)
- Bidirectional mappings: Section <-> Control <-> Evidence <-> Artifact
- Controls have `copSection`, `ncsbElement`, `ncsbSubRequirements`, `auditApproaches`, `awpRequirements`, `riskTier`, `controlObjective`, `whatGoodLooksLike`, `keyRiskIfAbsent`, `samplingGuidance` fields
- Supplements: `sourceType: "constructed-indicative"` means NOT verified against gazette

## Important
- **Never modify** provisions in `provisions/` — these are gazette-sourced verbatim text
- **Penalty amounts** must be verified against gazette before citing
- Sector CoPs in `supplements/codes-of-practice/` are **constructed-indicative** — they must NOT be used for engagements without first obtaining and verifying official CoPs from NACSA or the relevant sector lead
- AWP artifacts (Excel workbook, generators, report template) are in Tech-Audit/NACSA/ (private repo). This repo contains compliance data only.

## Validation
```bash
node validate.js
```

## Related Repos
- [Tech-Audit/NACSA](https://github.com/dawuds/Tech-Audit) — Fieldwork-ready audit program (AWP workbook, report template, methodology, evidence management, 7 approach supplements, 4 appendices, 11 sector guides)
- [Tech-Audit/00-Methodology](https://github.com/dawuds/Tech-Audit) — General audit methodology (absorbed from audit-work-program)
- [pdpa-my](https://github.com/dawuds/pdpa-my) — PDPA controls (49) mapped to NACSA in cross-references (Tier 1)
- [iesp](https://github.com/dawuds/IESP) — BNM IESP assessment toolkit, overlaps with NACSA for BNM-regulated entities (Tier 1)
- [AI-Governance](https://github.com/dawuds/AI-Governance) — AI governance frameworks; NCII designation may apply to AI systems (Tier 1)
- [sc-gtrm](https://github.com/dawuds/sc-gtrm) — SC capital markets tech risk; NCII may apply to capital market systems (Tier 1)
- [grc](https://github.com/dawuds/grc) — Portfolio hub
