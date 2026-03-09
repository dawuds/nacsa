# NACSA Control Integrity & COP Alignment Plan

**Objective:** Systematic verification of all 53 NACSA controls against the 11 Sector-Specific Codes of Practice (COP) mandated by Act 854.

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
