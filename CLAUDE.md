# NACSA Act 854 Explorer

**Last updated:** 2026-04-01

## What This Is
Structured compliance database for Malaysia's Cyber Security Act 2024 (Act 854). SPA explorer with JSON data layers, plus a complete audit work program (AWP) for NCII entity compliance assessments. **Tier 1 Focus Area** in the GRC portfolio.

## Portfolio Role
One of 5 Tier 1 focus areas receiving full investment toward audit-readiness. Primary cybersecurity compliance framework for Malaysian NCII entities. Cross-references PDPA-MY, IESP, AI-Governance, and SC-GTRM.

## Quick Start
Open `index.html` in a browser. Run `node validate.js` to check data integrity. Run `python3 workprogram/generate-awp.py` to regenerate the AWP workbook.

## Architecture
- **SPA**: `index.html` + `app.js` + `style.css` (vanilla JS, no build step)
- **Data**: JSON files across multiple layers (provisions, sectors, requirements, evidence, controls, artifacts, penalties, cross-references, risk-management, supplements, templates)
- **AWP**: Excel workbook + Word report template generated from Python scripts
- **Schema**: GRC Portfolio v2.0 Standardized Schema

## Key Data Files
- `controls/library.json` — 126 controls (v4.0) built from verbatim CoP Template v1.6 clauses. Each control = one CoP sub-subsection. 210 Tier 1 (SHALL) + 18 Tier 2 (SHOULD/MAY) = 228 testable requirements.
- `controls/domains.json` — 18 domains aligned to CoP Template (v3.0)
- `evidence/index.json` — 116 evidence items keyed by Act section
- `cross-references/framework-mappings.json` — NIST CSF, ISO 27001, RMiT, PDPA, CIS Controls

## Control Library Design (v4.0) / AWP v5.0
- **126 controls** — each is a CoP sub-subsection (e.g., 5.1.1, 14.3.2, 18.1.3)
- **210 Tier 1 requirements** — verbatim "shall" clauses from CoP, compliance-rated P/SP/TP/TB
- **18 Tier 2 requirements** — "should"/"may" clauses, produce improvement opportunities not findings
- **42 directive-only requirements** — from CE Directives 01-10 (not in library.json, in AWP directive compliance sheet)
- Every requirement traceable to a specific CoP clause number or CE Directive paragraph
- Source type: `official-verbatim` — no interpretation or elaboration
- AWP v5.0 follows the **IESP 14-column pattern** — canonical GRC portfolio AWP format

## AWP Design Principles
- **14-column IESP pattern** — canonical GRC portfolio AWP format with pre-populated assessment procedures and expected evidence
- **Two row types** — domain rows (compliance-rated) and sub-item rows (detailed testing); context rows provide professional guidance
- **CoP-driven** — audit criteria are verbatim CoP clauses, not constructed requirements
- **Two-tier requirements** — Tier 1 (SHALL = compliance finding) vs Tier 2 (SHOULD/MAY = improvement opportunity)
- **Compliance assessment** — Patuh / Separa Patuh / Tidak Patuh / Tidak Berkenaan (no maturity scoring)
- **Two-scope model** — org-level controls tested once; system-level tested per NCII system
- **Legal overlay integrated** — statutory obligations, s52 director liability, penalty exposure as core sheets
- **Directive compliance sheet** — 42 requirements from CE Directives 01-10 tested separately from CoP domains
- **Scoring dashboard** — auto-calculated compliance counts, finding severity totals, domain profile
- **Weakest-link aggregation** — domain compliance as profile, not blended score
- **Assessment procedures pre-populated** — Columns F-H provide methodology guidance; auditor fills Columns I-N
- **Prescribed vs constructed clearly labeled** — methodology framework distinguishes NACSA requirements from professional constructs

## Audit Work Program (`workprogram/`)
- `NACSA-CoP-Core-WorkProgram.xlsx` — Primary fieldwork artifact (25 sheets, 14-column layout, 126 controls, 228 CoP requirements + 42 directive requirements, scoring dashboard)
- `NACSA-Audit-Report-Template.docx` — Word report template (CE Directive 08 aligned)
- `NACSA-Sample-Audit-Report.docx` — Worked example report with sample findings and conclusions
- `generate-awp.py` — AWP generator (reads from library.json v4.0, produces v5.0 IESP-pattern workbook)
- `generate-report-template.py` — Report template generator

## Conventions
- Control slugs follow `cop-X-Y-Z-description` pattern (e.g., `cop-5-1-1-policy-establishment`)
- Every Tier 1 requirement has a CoP clause number (e.g., `5.1.1.1`)
- Supplements: `sourceType: "constructed-indicative"` means NOT verified against gazette
- Library: `sourceType: "official-verbatim"` means extracted from gazetted CoP Template

## Important
- **Never modify** provisions in `provisions/` — these are gazette-sourced verbatim text
- **Penalty amounts** must be verified against gazette before citing
- Sector CoPs in `supplements/codes-of-practice/` are **constructed-indicative** — they must NOT be used for engagements without first obtaining and verifying official CoPs from NACSA or the relevant sector lead
- AWP requirements are verbatim from CoP v1.6 — do not add constructed requirements to Tier 1

## Validation
```bash
node validate.js
```

## Related Repos
- [Tech-Audit/NACSA](https://github.com/dawuds/Tech-Audit) — Fieldwork-ready audit program (AWP workbook, report template, methodology, evidence management, approach supplements, appendices, sector guides, research)
- [pdpa-my](https://github.com/dawuds/pdpa-my) — PDPA controls mapped to NACSA in cross-references (Tier 1)
- [iesp](https://github.com/dawuds/IESP) — BNM IESP assessment toolkit (Tier 1)
- [AI-Governance](https://github.com/dawuds/AI-Governance) — AI governance frameworks (Tier 1)
- [sc-gtrm](https://github.com/dawuds/sc-gtrm) — SC capital markets tech risk (Tier 1)
- [grc](https://github.com/dawuds/grc) — Portfolio hub
