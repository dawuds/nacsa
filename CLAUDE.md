# NACSA Act 854 Explorer

**Last updated:** 2026-03-25

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
- `controls/library.json` — 53 controls (v2.2, CoP-aligned with auditApproaches flags)
- `controls/domains.json` — 18 domains aligned to CoP Template (v3.0)
- `evidence/index.json` — 116 evidence items keyed by Act section
- `cross-references/framework-mappings.json` — NIST CSF, ISO 27001, RMiT, PDPA, CIS Controls

## Conventions
- Kebab-case slugs for all IDs (e.g., `ncii-entity-registration`)
- Bidirectional mappings: Section <-> Control <-> Evidence <-> Artifact
- Controls have `copSection`, `ncsbElement`, `ncsbSubRequirements`, and `auditApproaches` fields
- Supplements: `sourceType: "constructed-indicative"` means NOT verified against gazette

## Important
- **Never modify** provisions in `provisions/` — these are gazette-sourced verbatim text
- **Penalty amounts** must be verified against gazette before citing
- Sector CoPs in `supplements/codes-of-practice/` are constructed-indicative
- The audit work program is at `Tech-Audit/NACSA/` (separate repo), not here

## Validation
```bash
node validate.js
```

## Related Repos
- [Tech-Audit/NACSA](https://github.com/dawuds/Tech-Audit) — Fieldwork-ready audit program (30 files, CoP-aligned)
- [Tech-Audit/00-Methodology](https://github.com/dawuds/Tech-Audit) — General audit methodology (absorbed from audit-work-program)
- [pdpa-my](https://github.com/dawuds/pdpa-my) — PDPA controls (49) mapped to NACSA in cross-references (Tier 1)
- [iesp](https://github.com/dawuds/IESP) — BNM IESP assessment toolkit, overlaps with NACSA for BNM-regulated entities (Tier 1)
- [AI-Governance](https://github.com/dawuds/AI-Governance) — AI governance frameworks; NCII designation may apply to AI systems (Tier 1)
- [sc-gtrm](https://github.com/dawuds/sc-gtrm) — SC capital markets tech risk; NCII may apply to capital market systems (Tier 1)
- [grc](https://github.com/dawuds/grc) — Portfolio hub
