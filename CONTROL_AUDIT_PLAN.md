# NACSA Control Integrity & COP Alignment Plan

**Objective:** Systematic verification of NACSA controls against the 11 Sector-Specific Codes of Practice (COP) mandated by Act 854.

> **Alignment note**: The control library (`library.json` v3.1) now contains **67 controls mapped to 160 AWP requirements** across the **CoP Template (18 domains, 4.0-21.0)**. The fieldwork-ready audit program is at [Tech-Audit/NACSA/](../Tech-Audit/NACSA/) — Excel AWP workbook (28 sheets, automated scoring) + Word report template. For methodology, see [Rating-and-Conclusion-Methodology.md](../Tech-Audit/NACSA/Work-Program/Rating-and-Conclusion-Methodology.md). Sector CoPs are **unverified** — do not rely on sector data without obtaining official CoPs from NACSA.

## Audit Tracker (11 NCII Sectors)

| Sector | COP Data | Lead Agency | Status |
| :--- | :--- | :--- | :--- |
| **Government** | [x] Verified | MKN/NACSA | [ ] Pending Audit |
| **Banking & Finance** | [x] Verified | Bank Negara Malaysia | [ ] Pending Audit |
| **Healthcare** | [x] Verified | Ministry of Health | [ ] Pending Audit |
| **ICT** | [x] Verified | MCMC | [ ] Pending Audit |
| **Energy** | [x] Verified | Energy Commission | [ ] Pending Audit |
| **Transport** | [x] Verified | MOT / CAAM | [ ] Pending Audit |
| **Water** | [x] Verified | SPAN | [ ] Pending Audit |
| **Defence** | [x] Verified | MINDEF | [ ] Pending Audit |
| **Agriculture** | [x] Verified | KPKM | [ ] Pending Audit |
| **Trade & Industry** | [x] Verified | MITI | [ ] Pending Audit |
| **Science & Tech** | [x] Verified | MOSTI | [ ] Pending Audit |

## Execution Steps
1. **COP Integration:** Verify that controls in `library.json` correctly pull requirements from the 11 `supplements/codes-of-practice/*.json` files.
2. **NCII Duty Sync:** Align Part IV duties (s20-s31) with specific COP control requirements.
3. **Evidence Audit:** Match `evidence/index.json` items to COP-specific documentation (e.g., NC4 reporting logs).
4. **Fieldwork Execution:** Use the [NACSA Audit Work Program](../Tech-Audit/NACSA/Work-Program/NACSA-Audit-Program.md) as the fieldwork execution layer for detailed audit procedures, expected evidence, and compliance assessment across all 18 CoP domains and 33 NCSB elements.
