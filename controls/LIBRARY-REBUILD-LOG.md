# Control Library Rebuild Log: v3.1 to v4.0

**Date:** 2026-04-01
**Author:** Rebuild from verified CoP clause extraction

## Summary

The control library (`controls/library.json`) has been rebuilt from the ground up. The v3.1 library (67 constructed controls, 160 paraphrased requirements) is replaced by v4.0, which is derived entirely from the verified CoP Template v1.6 clause extraction.

## What Changed

### Structural changes

| Aspect | v3.1 | v4.0 |
| --- | --- | --- |
| Control count | 67 | 126 |
| Requirement count | 160 (constructed) | 228 (verbatim) |
| Tier 1 (SHALL) | Not separated | 210 |
| Tier 2 (SHOULD/MAY) | Not separated | 18 |
| Control granularity | Grouped by accountability | 1 control = 1 CoP sub-subsection |
| Requirement text | Paraphrased | Verbatim from CoP Template |
| Source type | `official-paraphrase` | `official-verbatim` |
| Slug pattern | `ncii-*` | `cop-X-Y-Z-short-desc` |
| Domain source | Embedded `domains` array | References `domains.json` |

### Removed fields (v3.1 constructs)

These fields existed in v3.1 but were our own constructs, not from the CoP. They are removed in v4.0 to keep the library CoP-verbatim only:

- `controlObjective` -- constructed "why" statement
- `whatGoodLooksLike` -- constructed expected-state description
- `keyRiskIfAbsent` -- constructed risk statement
- `riskTier` (critical/standard/conditional) -- our risk classification
- `samplingGuidance` -- our audit sampling notes
- `ncsbElement`, `ncsbSubRequirements` -- NCSB cross-references
- `auditApproaches` -- constructed audit methodology
- `awpRequirements` -- replaced by `requirements` array with verbatim clauses
- `copSection` domain-level mapping -- replaced by per-control `copSubsection`

### Added fields (v4.0)

- `copSubsection` -- exact sub-subsection number (e.g., "5.1.1")
- `parentSection` -- parent section (e.g., "5.1 Cyber Security Policy")
- `requirements[].clauseNumber` -- original CoP clause number (e.g., "5.1.1.1")
- `requirements[].obligationLevel` -- SHALL / SHOULD / MAY
- `requirements[].tier` -- 1 (SHALL) or 2 (SHOULD/MAY)
- `tier1Count`, `tier2Count` -- counts per control

### What is NOT in this file

- **42 directive-only requirements** from CE Directives 01-10 -- these belong in separate directive compliance sheets, not the CoP-based control library
- **10 DESCRIPTIVE clauses** (Tier 3) -- informational text, not testable
- **Sections 21.0-23.0** -- administrative/reference sections with no SHALL clauses
- **Sector lead guidance boxes** -- grey italic text, not entity requirements

## Domain Breakdown

| Domain | CoP Section | Controls | T1 Reqs | T2 Reqs | Total |
| --- | --- | --- | --- | --- | --- |
| Governance and Leadership | 4.0 | 1 | 1 | 0 | 1 |
| Cyber Security Policy and Objectives | 5.0 | 8 | 11 | 4 | 15 |
| Organisational Development | 6.0 | 10 | 19 | 2 | 21 |
| Cyber Security Assurance | 7.0 | 11 | 24 | 2 | 26 |
| Resource Allocation and Optimisation | 8.0 | 8 | 19 | 0 | 19 |
| Risk Management | 9.0 | 9 | 19 | 2 | 21 |
| Operational Efficiency | 10.0 | 4 | 9 | 0 | 9 |
| Data Security | 11.0 | 15 | 23 | 0 | 23 |
| Contractual Management | 12.0 | 3 | 6 | 0 | 6 |
| Physical Security | 13.0 | 8 | 15 | 1 | 16 |
| System and Network Security | 14.0 | 16 | 24 | 0 | 24 |
| Access Control | 15.0 | 11 | 13 | 3 | 16 |
| Technical Vulnerability | 16.0 | 9 | 10 | 1 | 11 |
| Cyber Security Event Management | 17.0 | 3 | 3 | 0 | 3 |
| Cyber Security Incident Management | 18.0 | 3 | 6 | 0 | 6 |
| Business Continuity Management | 19.0 | 5 | 6 | 3 | 9 |
| Sector-Specific Requirements | 20.0 | 2 | 2 | 0 | 2 |
| **TOTAL** | | **126** | **210** | **18** | **228** |

## Scope Distribution

- **Org-level controls:** 92 (tested once per entity)
- **Sys-level controls:** 34 (tested per NCII system)

## Verification

- Tier 1 count (210) matches CoP clause extraction SHALL count (210)
- Tier 2 count (18) matches SHOULD (9) + MAY (9) from CoP clause extraction
- DESCRIPTIVE clauses (10) correctly excluded
- Directive-only requirements (42) correctly excluded
- No duplicate slugs
- All controls map to valid domain slugs from `domains.json`

## Downstream Impact

The following files reference old v3.1 control slugs and will need updating:

- `audit-integration.json` -- maps controls to audit procedures
- `evidence/index.json` -- maps evidence items to controls
- `artifacts/index.json` -- maps artifacts to control slugs
- `cross-references/framework-mappings.json` -- framework cross-references
- Tech-Audit/NACSA AWP workbook -- references control slugs
