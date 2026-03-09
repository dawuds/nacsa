# TODO — NACSA Act 854 Compliance Database

## Completed

- [x] Extract Act 854 provisions (64 sections across 9 parts)
- [x] Build 11 NCII sector definitions with obligations
- [x] Build requirements layer (46 sections with legal/technical/governance breakdowns)
- [x] Build evidence layer (116 evidence items across 56 sections)
- [x] Build artifacts layer (120 artifacts across 6 categories)
- [x] Build controls layer (53 controls across 15 domains)
- [x] Build penalties layer (20 penalty provisions)
- [x] Build cross-references (NIST CSF 2.0, ISO 27001, BNM RMiT, PDPA, CIS Controls)
- [x] Build supplements (4 regulations, 10 directives, 11 codes of practice)
- [x] Add risk management section (20 risks, methodology, 5x5 matrix, 18-item checklist, treatment options)
- [x] Add 120 document templates across 6 categories
- [x] Add dark mode support (automatic via `prefers-color-scheme`)
- [x] Add favicon
- [x] Implement Audit Package UI on control detail views
- [x] Add `controlSlugs[]` to all 120 artifacts
- [x] Add `artifactSlugs[]` to all evidence items
- [x] Remove fabricated "Education" sector (11th sector)
- [x] Fix gazette numbers (P.U.(A) 291-294 corrected to 219-222)
- [x] Fix systematic s23-to-s26 section offset (28 occurrences)
- [x] Fix false status labels on directives and CoPs
- [x] Clean broken directive references from controls (100 removed, 5 valid kept)
- [x] Expand evidence coverage from 9 to 28 sections
- [x] Populate `relatedDirectives` arrays for 48 controls
- [x] Deploy via GitHub Actions (GitHub Pages)
- [x] Add `validate.js` for data integrity checks (JSON parsing, cross-reference resolution, risk math, directive resolution, duplicate detection)
- [x] Add LICENSE file (CC-BY-4.0)

## Pending

### High Priority
- [ ] **Factual Accuracy Check** — Conduct a thorough mapping and verification of the JSON data against official source documents to ensure zero hallucinated clauses/sections.
- [ ] Export functionality — PDF and CSV export for provisions, controls, evidence, and audit packages
- [ ] Compliance gap tracker with localStorage — track implementation status per provision/control
- [ ] ARIA accessibility audit — ensure all interactive elements are keyboard-navigable and screen-reader friendly

### Medium Priority
- [ ] Compliance chain visualization — graph view showing provision-to-control-to-artifact-to-evidence relationships
- [x] Expand evidence coverage from 28/64 to 56/64 sections (remaining 8 are Part I/IX definitional/administrative sections with no compliance obligations)
- [x] Expand requirements coverage from 17 to 46 sections (remaining sections are Part I/IX definitional/administrative with no compliance obligations)

### Low Priority
- [ ] Verify remaining `verificationStatus` fields in penalty data against gazette
- [ ] Add print-friendly stylesheet for audit package output
- [ ] Refine constructed-indicative directive/CoP content based on official NACSA publications
