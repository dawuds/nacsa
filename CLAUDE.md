# NACSA Act 854 Explorer

## What This Is
Structured compliance database for Malaysia's Cyber Security Act 2024 (Act 854). SPA explorer with JSON data layers.

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
- `Tech-Audit/NACSA/` — Fieldwork-ready audit program (30 files, CoP-aligned)
- `audit-work-program/` — General audit methodology
- `grc/` — Portfolio hub
- `cybercompliance/reference/nacsa/` — Source PDFs (CoP Template, NCSB v1.4, CE Directives)
- `pdpa-my/` — PDPA controls (49) mapped to NACSA in cross-references
