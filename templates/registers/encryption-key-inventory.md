# Encryption Key Inventory

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

*This section defines the intent of this register and the regulatory context under which it is maintained.*

This Encryption Key Inventory is maintained by **[Organization Name]** in accordance with **Section 18 of the Cyber Security Act 2024 (Act 854)**, which imposes obligations on National Critical Information Infrastructure (NCII) entities to implement and maintain appropriate technical controls to protect designated NCII systems and data.

This register provides a comprehensive, auditable record of all cryptographic keys used to protect NCII data assets across the organization. It supports the lifecycle governance of encryption keys, from creation through to revocation and destruction, ensuring accountability and traceability at all times.

**Scope of this inventory includes:**

- All cryptographic keys used to encrypt, sign, or authenticate data classified as NCII or higher
- Keys used in systems, applications, databases, and communication channels that process, store, or transmit NCII data
- Both symmetric and asymmetric keys, including certificates, key pairs, and shared secrets
- Keys managed on-premises, in cloud environments, or via Hardware Security Modules (HSMs)

**Out of scope:**

- Keys used exclusively for non-NCII, non-sensitive internal systems (unless cross-boundary access exists)
- Ephemeral session keys not subject to persistent storage or lifecycle management

---

## 2. Regulatory Obligations

*This section maps the inventory to its governing regulatory requirements. Reference specific sections where key management obligations are imposed.*

| Regulation | Section / Clause | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities must implement security measures to protect designated systems, which includes cryptographic controls |
| Cyber Security Act 2024 (Act 854) | Section 18(2) | Compliance with codes of practice and standards prescribed by NACSA |
| NACSA NCII Sector Security Plan (SSP) | Relevant Controls | Cryptographic key management as part of technical security controls |
| Personal Data Protection Act 2010 (PDPA) | Section 9 | Security principle requiring appropriate technical measures for personal data |
| BNM Risk Management in Technology (RMiT) | 10.55–10.57 | Cryptographic key management requirements for licensed financial institutions |

---

## 3. Key Inventory Register

*This is the primary register. Each row represents a single cryptographic key or key pair in active use or recently retired. All fields must be completed at the time of key creation and updated promptly upon any lifecycle event. Maintain one row per key identifier.*

### 3.1 Active Key Inventory

| Key ID | Key Name / Label | Algorithm | Key Length (bits) | Key Type | Purpose & Scope | System / Application | Environment | Creation Date | Expiry / Rotation Date | Status | Custodian | Backup Custodian | HSM / Key Store | Compliance Classification |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [KEY-001] | [e.g., DB Encryption Master Key] | [e.g., AES] | [e.g., 256] | [Symmetric / Asymmetric / Certificate] | [e.g., Encrypts NCII customer records in core banking DB] | [e.g., Core Banking System] | [Prod / UAT / DR] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Active / Pending Rotation / Expired / Revoked] | [Name / Role] | [Name / Role] | [e.g., AWS KMS / On-prem HSM / Azure Key Vault] | [NCII / Confidential / Restricted] |
| [KEY-002] | | | | | | | | | | | | | | |
| [KEY-003] | | | | | | | | | | | | | | |

---

### 3.2 Retired / Revoked Key Archive

*Keys must not be deleted from this register upon retirement. Retired or revoked keys are moved to this archive table for audit trail purposes. Retain archived entries for a minimum of [7] years or as directed by applicable law.*

| Key ID | Key Name / Label | Algorithm | Key Length (bits) | Original Purpose | System / Application | Date Created | Date Retired / Revoked | Reason for Retirement | Destruction Method | Destruction Date | Verified By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [KEY-XXX] | | | | | | [YYYY-MM-DD] | [YYYY-MM-DD] | [e.g., Scheduled rotation / Compromise / System decommission] | [e.g., HSM zeroisation / Secure deletion] | [YYYY-MM-DD] | [Name / Role] |

---

## 4. Key Identifier

*This section defines the key identification schema used throughout this register. A consistent naming convention ensures traceability and prevents duplication.*

### 4.1 Key ID Naming Convention

All cryptographic keys must be assigned a unique Key ID at the time of creation. The format is:

**`[ORG]-KEY-[CATEGORY]-[SEQUENCE NUMBER]`**

| Component | Description | Example |
|---|---|---|
| `[ORG]` | Organization code or BU abbreviation | `ORGABC` |
| `KEY` | Fixed literal | `KEY` |
| `[CATEGORY]` | Key category code (see table below) | `DB`, `TLS`, `API`, `SIG`, `VPN` |
| `[SEQUENCE NUMBER]` | Zero-padded 4-digit sequence | `0001`, `0042` |

**Category Codes:**

| Code | Description |
|---|---|
| `DB` | Database encryption key |
| `TLS` | TLS/SSL certificate and key pair |
| `API` | API authentication key |
| `SIG` | Code signing / document signing key |
| `VPN` | VPN tunnel or site-to-site key |
| `HSM` | Hardware Security Module master / wrapping key |
| `BKP` | Backup encryption key |
| `SSH` | SSH host or service key |
| `EML` | Email encryption (S/MIME / PGP) |
| `OTH` | Other — specify in purpose field |

---

## 5. Algorithm and Key Length

*This section defines the approved cryptographic algorithms and minimum key lengths permitted for use within the organization. No key using a deprecated algorithm or insufficient key length may be registered as active.*

### 5.1 Approved Cryptographic Algorithms and Standards

*Keys registered in this inventory must conform to the following approved algorithm baseline. Deviations require documented risk acceptance from the CISO.*

| Use Case | Approved Algorithm(s) | Minimum Key Length | Notes |
|---|---|---|---|
| Symmetric encryption (data at rest) | AES-GCM, AES-CBC | 256-bit | AES-128 requires documented justification |
| Asymmetric encryption / Key exchange | RSA, ECDH | RSA: 3072-bit; EC: P-256 | RSA-2048 permitted until [Sunset Date] |
| Digital signatures | RSA-PSS, ECDSA, EdDSA | RSA: 3072-bit; EC: P-256 | |
| Hashing (integrity) | SHA-256, SHA-384, SHA-512 | N/A | MD5 and SHA-1 are prohibited |
| TLS (transport encryption) | TLS 1.2, TLS 1.3 | As per cipher suite | TLS 1.0 and 1.1 are prohibited |
| Key wrapping | AES-KW | 256-bit | |
| Password hashing | bcrypt, PBKDF2, Argon2 | As per algorithm parameterisation | |

**Deprecated / Prohibited Algorithms:**

- DES, 3DES
- RC4
- MD5 (except legacy systems under approved exception)
- SHA-1 (except legacy systems under approved exception)
- RSA < 2048-bit
- TLS 1.0, TLS 1.1, SSL

---

## 6. Purpose and Scope of Each Key

*For each key registered in Section 3, the purpose and scope must be explicitly documented. Vague descriptions such as "general use" are not acceptable. The scope defines which systems, data, and users the key governs.*

### 6.1 Key Purpose Documentation Guidance

Each key entry in the inventory must include:

- **Primary Purpose:** The specific cryptographic function (encryption at rest, TLS termination, signing, key wrapping, authentication)
- **Data Scope:** The categories of data protected by this key (e.g., NCII customer records, payment card data, audit logs)
- **System Scope:** The specific systems, applications, or services that use this key
- **User / Service Scope:** Whether the key is used by human users, service accounts, or automated processes
- **Cross-boundary Usage:** Whether the key is shared across system boundaries or organizational units

### 6.2 Key Purpose Reference Table

| Key ID | Primary Purpose | Protected Data Category | Systems Using This Key | Human or Machine Use |
|---|---|---|---|---|
| [KEY-001] | [e.g., Encrypt NCII customer records at rest] | [e.g., NCII — Customer PII, financial data] | [e.g., Core Banking DB, reporting system] | [Machine — service account] |
| [KEY-002] | | | | |

---

## 7. Creation Date and Key Provenance

*This section ensures that the origin of every key can be verified and that keys are created through approved, auditable processes.*

### 7.1 Key Generation Requirements

- All cryptographic keys must be generated using a cryptographically secure pseudo-random number generator (CSPRNG)
- Keys must be generated within an approved HSM or key management system where possible
- Key generation events must be logged in the organization's SIEM with timestamp, operator identity, and system context
- Dual-control procedures must be applied for master keys and key-encrypting keys (KEKs)

### 7.2 Key Creation Log

| Key ID | Generated By | Generation Method | Generation System | Date Created | Witnessed By | Approved By | Change Reference |
|---|---|---|---|---|---|---|---|
| [KEY-001] | [Name / Role] | [e.g., HSM internal RNG / OpenSSL / AWS KMS] | [System / Platform] | [YYYY-MM-DD] | [Name / Role] | [Name / Role] | [Change Ticket ID] |

---

## 8. Rotation Schedule

*This section defines and tracks the rotation schedule for each key. Regular rotation limits the exposure window of any compromised key. Rotation schedules must align with the risk classification of the data protected by the key.*

### 8.1 Rotation Schedule Policy Baseline

| Key Classification | Maximum Rotation Period | Trigger for Immediate Rotation |
|---|---|---|
| NCII — Critical (e.g., master keys, KEKs) | 12 months | Suspected or confirmed compromise; custodian departure; HSM breach |
| NCII — High (e.g., database encryption keys) | 12 months | System compromise; vendor advisory; custodian change |
| NCII — Medium (e.g., TLS certificates) | 12 months (or per CA validity) | Certificate revocation; domain change |
| API / Service keys | 90 days | Service account compromise; personnel change |
| SSH host keys | 24 months | Host compromise; infrastructure rebuild |
| Backup encryption keys | 12 months | Backup media compromise |

### 8.2 Key Rotation Tracker

| Key ID | Key Name | Current Version | Last Rotated | Rotation Due Date | Rotation Assigned To | Rotation Status | Next Review |
|---|---|---|---|---|---|---|---|
| [KEY-001] | [Label] | [v3] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Name / Role] | [On Schedule / Overdue / Rotation In Progress] | [YYYY-MM-DD] |

### 8.3 Rotation Event Log

*Each rotation event must be recorded here. Do not delete prior rotation records — maintain full history per key.*

| Key ID | Rotation Event Date | Rotated By | Reason for Rotation | Previous Key Version | New Key Version | Verification Method | Verified By |
|---|---|---|---|---|---|---|---|
| [KEY-001] | [YYYY-MM-DD] | [Name / Role] | [Scheduled / Triggered — specify trigger] | [vN] | [vN+1] | [e.g., Test decryption of known ciphertext] | [Name / Role] |

---

## 9. Custodian and Backup Custodian

*This section records the named individuals responsible for the safekeeping, access control, and lifecycle management of each cryptographic key. Custodians must be employees of [Organization Name] and must have completed key management training.*

### 9.1 Custodian Responsibilities

**Primary Custodian:**
- Maintains authoritative access to the key within the approved key management system
- Initiates and oversees key rotation, renewal, and revocation activities
- Reports key compromise events to the CISO and Security Operations immediately
- Participates in dual-control procedures where required

**Backup Custodian:**
- Assumes all Primary Custodian responsibilities in the event of the Primary Custodian's unavailability
- Holds split knowledge or backup access credentials in accordance with the Key Recovery Procedure ([reference internal procedure])
- Must be a different individual from the Primary Custodian and must not be a direct subordinate

### 9.2 Custodian Assignment Register

| Key ID | Key Name | Primary Custodian Name | Primary Custodian Role | Primary Custodian Contact | Backup Custodian Name | Backup Custodian Role | Backup Custodian Contact | Last Custodian Review | Next Custodian Review |
|---|---|---|---|---|---|---|---|---|---|
| [KEY-001] | [Label] | [Full Name] | [e.g., Senior Security Engineer] | [Email / Ext.] | [Full Name] | [e.g., Security Operations Manager] | [Email / Ext.] | [YYYY-MM-DD] | [YYYY-MM-DD] |

### 9.3 Custodian Change Log

*Any change to a key custodian must be recorded here and must trigger a review of key access permissions.*

| Key ID | Change Date | Outgoing Custodian | Incoming Custodian | Reason for Change | Approved By | Access Revocation Confirmed | Change Reference |
|---|---|---|---|---|---|---|---|
| [KEY-001] | [YYYY-MM-DD] | [Name] | [Name] | [e.g., Resignation / Role change / Transfer] | [Name / Role] | [Yes / No] | [Change Ticket ID] |

---

## 10. Roles and Responsibilities

*This section defines the accountabilities for maintaining and acting on this register. The RACI model is used: **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

| Activity | CISO | Security Operations | IT / Infrastructure | System Owners | Internal Audit | NACSA (Regulator) |
|---|---|---|---|---|---|---|
| Approve and own this register | A | R | I | I | I | I |
| Generate and register new keys | C | R | R | C | I | — |
| Assign key custodians | A | R | C | I | I | — |
| Perform scheduled key rotation | A | R | R | C | I | — |
| Trigger emergency key rotation | A | R | R | C | I | I |
| Conduct quarterly register review | A | R | C | C | C | — |
| Report key compromise to NACSA (s18) | A | R | I | I | I | I |
| Review and approve algorithm exceptions | A | R | C | C | C | — |
| Archive retired keys | C | R | R | I | I | — |
| Conduct annual key management audit | I | C | C | C | R | I |

---

## 11. Key Compromise Response

*This section outlines the response actions required in the event of an actual or suspected cryptographic key compromise. This is a mandatory process under Act 854 s18 obligations for NCII entities.*

### 11.1 Indicators of Key Compromise

- Unauthorized access to key management systems or HSMs
- Detection of key material in unauthorized locations (e.g., logs, code repositories, emails)
- Personnel departure under adverse circumstances where key access existed
- Security incident involving systems protected by a registered key
- Vendor advisory indicating algorithm or implementation weakness

### 11.2 Compromise Response Steps

| Step | Action | Responsible | Timeline |
|---|---|---|---|
| 1 | Identify and confirm the suspected compromise | Primary Custodian / SOC | Immediate |
| 2 | Notify CISO and Security Operations | Primary Custodian | Within 1 hour |
| 3 | Initiate emergency key rotation or revocation | Security Operations | Within 4 hours |
| 4 | Assess data exposure and affected systems | Security Operations / IT | Within 24 hours |
| 5 | Notify NACSA per s18 reporting obligations if NCII data is affected | CISO | Per regulatory timeframe |
| 6 | Update this register with compromise event and new key details | Security Operations | Within 24 hours |
| 7 | Conduct post-incident review | CISO / Security Operations | Within 5 business days |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial version |
| | | | |

### 12.2 Scheduled Review

This register must be reviewed in full on a **quarterly** basis. The review must include:

- Verification that all active keys are still required and appropriately scoped
- Confirmation that rotation due dates have been met or are on schedule
- Validation that all custodian assignments are current and contacts are reachable
- Assessment of whether any deprecated algorithms or insufficient key lengths are present
- Reconciliation against HSM / key store exports to confirm no unregistered keys exist

| Review Period | Review Date | Reviewed By | Findings Summary | Approved By |
|---|---|---|---|---|
| Q[X] [YYYY] | [YYYY-MM-DD] | [Name / Role] | [e.g., No exceptions / [N] findings raised — see attached] | [Name / Role] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | | [YYYY-MM-DD] |
| Head of Security Operations | [Name] | | [YYYY-MM-DD] |
| Chief Information Officer | [Name] | | [YYYY-MM-DD] |
| Data Protection Officer | [Name] | | [YYYY-MM-DD] |

---

## 13. References

| Reference | Document / Clause | Relevance |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entity obligations to implement cybersecurity measures, including cryptographic controls |
| NACSA National Cyber Security Policy | Key Management Controls | Baseline key management requirements for NCII sectors |
| NACSA NCII Sector Security Plan | Technical Controls | Sector-specific implementation requirements |
| BNM Risk Management in Technology (RMiT) | 10.55–10.57 | Key management and cryptographic controls for financial institutions |
| Personal Data Protection Act 2010 (PDPA) | Section 9 (Security Principle) | Technical measures for protecting personal data |
| NIST Special Publication 800-57 | Key Management Recommendations | Industry best practice for key lifecycle management |
| ISO/IEC 27001:2022 | Annex A Control 8.24 | Use of cryptography |
| [Organization Name] — Information Security Policy | [Section Reference] | Parent policy governing cryptographic controls |
| [Organization Name] — Key Management Procedure | [Document ID] | Operational procedures for key lifecycle events |
| [Organization Name] — Incident Response Plan | [Document ID] | Procedure for key compromise response |

---

## Appendices

### Appendix A — Key Store and HSM Inventory

*List all hardware and software key stores in use. This appendix supports reconciliation between registered keys and actual key material held in each store.*

| Key Store ID | Platform / Product | Type | Location | Administrator | Keys Managed | Last Audit Date |
|---|---|---|---|---|---|---|
| [KS-001] | [e.g., AWS KMS / Thales Luna HSM / Azure Key Vault / HashiCorp Vault] | [HSM / Cloud KMS / Software] | [Region / Data Centre] | [Name / Role] | [KEY-001, KEY-002, …] | [YYYY-MM-DD] |

---

### Appendix B — Algorithm Exception Register

*Any use of non-approved algorithms or key lengths requires a documented risk acceptance. Record all active exceptions here.*

| Exception ID | Key ID | Algorithm in Use | Reason for Exception | Risk Owner | Risk Acceptance Date | Compensating Controls | Review / Sunset Date |
|---|---|---|---|---|---|---|---|
| [EXC-001] | [KEY-XXX] | [e.g., RSA-2048] | [e.g., Legacy vendor system — upgrade in progress] | [Name / Role] | [YYYY-MM-DD] | [e.g., Restricted network access, enhanced monitoring] | [YYYY-MM-DD] |

---

### Appendix C — Key Recovery Procedure Reference

*This appendix references the Key Recovery Procedure document. Full recovery procedures must not be reproduced here to avoid concentrating sensitive information.*

- Key Recovery Procedure Document: **[Document ID]**
- Location: **[Secure Document Repository Path]**
- Authorized Access: CISO, Head of Security Operations, Backup Custodians (per key)
- Last Tested: **[YYYY-MM-DD]**
- Test Result: **[Pass / Fail — reference test report]**

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| NCII | National Critical Information Infrastructure — systems designated under the Cyber Security Act 2024 whose disruption would have a significant impact on national security, public safety, or economic stability |
| NACSA | National Cyber Security Agency of Malaysia |
| HSM | Hardware Security Module — a physical computing device that safeguards and manages cryptographic keys |
| KEK | Key Encrypting Key — a key used to encrypt other keys |
| CSPRNG | Cryptographically Secure Pseudo-Random Number Generator |
| Key Rotation | The process of replacing a cryptographic key with a newly generated key |
| Key Revocation | The process of permanently invalidating a key prior to its scheduled expiry |
| Dual Control | A process requiring the involvement of at least two authorized individuals to perform a sensitive operation |
| Split Knowledge | A key management practice where no single individual has access to a complete key value |
| Act 854 | Cyber Security Act 2024 — the primary legislation governing cybersecurity obligations for NCII entities in Malaysia |

---

*This document is classified **Confidential**. Unauthorized disclosure is prohibited. Handle in accordance with [Organization Name]'s Information Classification Policy.*

*Template Version: 1.0 | Owner: Security Operations | Next Review: [Next Review Date]*