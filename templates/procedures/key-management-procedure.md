# Encryption Key Management Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Security Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Handling Notice:** This document is classified **Confidential**. It must not be reproduced, distributed, or disclosed to unauthorized parties. Physical copies must be stored in a secured location. Electronic copies must be access-controlled and encrypted at rest. Disposal must follow the organization's secure destruction procedures.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and Obligations](#3-regulatory-framework-and-obligations)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Key Generation Standards](#5-key-generation-standards)
6. [Key Distribution Methods](#6-key-distribution-methods)
7. [Key Storage and HSM Requirements](#7-key-storage-and-hsm-requirements)
8. [Key Rotation Schedule](#8-key-rotation-schedule)
9. [Key Revocation and Destruction](#9-key-revocation-and-destruction)
10. [Key Recovery Procedures](#10-key-recovery-procedures)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Exceptions and Deviations](#12-exceptions-and-deviations)
13. [Audit and Compliance Monitoring](#13-audit-and-compliance-monitoring)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*State the primary objective of this procedure. Explain why cryptographic key management is critical to the organization's security posture and regulatory standing.*

This procedure establishes the minimum requirements and operational steps for the lifecycle management of cryptographic keys used within [Organization Name]'s National Critical Information Infrastructure (NCII) systems and associated environments. It ensures that cryptographic keys are generated, distributed, stored, rotated, revoked, and recovered in a manner that preserves confidentiality, integrity, and availability of protected information assets.

This procedure is issued in compliance with the **Cyber Security Act 2024 (Act 854)**, specifically **Section 18**, which mandates that NCII entities implement and maintain adequate cyber security measures commensurate with the nature and sensitivity of the systems and data under their stewardship.

The effective management of cryptographic keys is a foundational control that underpins:

- Protection of data in transit and at rest across NCII systems.
- Non-repudiation and authenticity of digital communications.
- Compliance with Malaysian regulatory obligations including those issued by the National Cyber Security Agency (NACSA) and Bank Negara Malaysia (BNM) where applicable.
- Reduction of risk associated with unauthorized decryption, data exfiltration, and impersonation attacks.

---

## 2. Scope

*Define the boundaries of this procedure — which systems, data types, teams, and key types are in scope. Be explicit about any exclusions.*

### 2.1 In Scope

This procedure applies to:

- All cryptographic keys used to protect data processed, stored, or transmitted by [Organization Name]'s NCII-designated systems.
- All symmetric, asymmetric, and hashing keys used in production, staging, and disaster recovery environments.
- Keys used for the following purposes:

| Key Use Case | Example Systems / Applications |
|---|---|
| Data encryption at rest | Databases, file systems, backup media |
| Data encryption in transit | TLS/SSL certificates, VPN tunnels, API communications |
| Authentication and identity | PKI certificates, SSH keys, code signing keys |
| Digital signatures | Document signing, audit log signing |
| Key encryption keys (KEK) | Hardware Security Module master keys |
| Secrets and API tokens | Application credentials, service accounts |

- All personnel within Security Operations, IT Infrastructure, Application Development, and third parties with delegated key management responsibilities.
- Cloud-hosted key management services used in conjunction with NCII systems (e.g., [Cloud KMS Provider]).

### 2.2 Out of Scope

- Personal device encryption keys managed by end users under a separate endpoint security policy.
- Keys used exclusively within isolated development or test environments that do not process production or personal data.
- Vendor-managed keys where [Organization Name] has no contractual or operational control, provided that vendor key management practices are verified through third-party assurance reviews.

---

## 3. Regulatory Framework and Obligations

*Map this procedure explicitly to the applicable regulatory instruments. This section is critical for audit evidence.*

This procedure is designed to satisfy the obligations of [Organization Name] as an NCII entity under the following regulatory instruments:

| Instrument | Issuing Body | Relevant Provision | Obligation Summary |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | Parliament of Malaysia | Section 18 | NCII entities must establish and implement cyber security measures adequate to protect NCII systems |
| NACSA NCII Sector Cyber Security Framework | NACSA | [Applicable Control Reference] | Cryptographic controls must be implemented and maintained for NCII systems |
| Risk Management in Technology (RMiT) Policy | Bank Negara Malaysia | Para 10.35 – 10.41 | Cryptographic key management standards for financial institutions |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Section 9 (Security Principle) | Personal data must be protected by appropriate security measures including encryption |
| ISO/IEC 27001:2022 | ISO | Annex A – 8.24 | Use of cryptography controls |
| NIST Special Publication 800-57 | NIST | All Parts | Key management recommendations (adopted as technical baseline) |

> **Note to Author:** *Insert any additional sector-specific directives or NACSA advisory circulars applicable to [Organization Name]'s NCII sector designation (e.g., Finance, Energy, Water, Transport). Reference the specific NACSA Sector Lead guidance where available.*

---

## 4. Definitions and Abbreviations

*Provide a consistent glossary so that all stakeholders interpret key terms uniformly. Expand this list as needed.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Cryptographic Key** | A value used in conjunction with a cryptographic algorithm to transform plaintext to ciphertext or vice versa, or to generate or verify a digital signature. |
| **Key Lifecycle** | The complete set of stages through which a cryptographic key passes, from generation through to destruction. |
| **Key Encryption Key (KEK)** | A key used solely to encrypt or decrypt other cryptographic keys. |
| **Data Encryption Key (DEK)** | A key used to encrypt data directly. |
| **Hardware Security Module (HSM)** | A physical computing device that safeguards and manages cryptographic keys, performing encryption, decryption, and authentication functions within a tamper-evident hardware boundary. |
| **Certificate Authority (CA)** | An entity that issues digital certificates and manages the PKI trust hierarchy. |
| **Key Ceremony** | A formalized, witnessed, and audited procedure for generating or replacing high-assurance cryptographic keys. |
| **Key Custodian** | An authorized individual responsible for the physical or logical custody of a cryptographic key or key component. |
| **Key Compromise** | A situation in which a cryptographic key is, or is suspected to be, known to an unauthorized entity. |
| **Key Rotation** | The replacement of an existing cryptographic key with a new key, with the old key being retired or destroyed. |
| **Split Knowledge** | A process by which a cryptographic key is divided into multiple components, each held by a different custodian, such that no single custodian has access to the complete key. |
| **Dual Control** | A procedure that uses two or more separate entities operating in concert to protect sensitive functions or information, such that no single entity can access or use the protected material alone. |
| **NCII** | National Critical Information Infrastructure as defined under the Cyber Security Act 2024. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| AES | Advanced Encryption Standard |
| CA | Certificate Authority |
| CSA | Cyber Security Act |
| DEK | Data Encryption Key |
| ECC | Elliptic Curve Cryptography |
| FIPS | Federal Information Processing Standard |
| HSM | Hardware Security Module |
| KEK | Key Encryption Key |
| KMS | Key Management System / Service |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PKI | Public Key Infrastructure |
| RSA | Rivest–Shamir–Adleman (asymmetric algorithm) |
| SHA | Secure Hash Algorithm |
| SOC | Security Operations Centre |
| TLS | Transport Layer Security |

---

## 5. Key Generation Standards

*Describe the technical and procedural standards governing how cryptographic keys are created. Ensure alignment with NIST SP 800-57 and FIPS 140-2/140-3 requirements.*

### 5.1 Guiding Principles

Key generation is the first and most critical phase of the key lifecycle. Keys must be generated using approved algorithms and sufficient entropy to resist brute-force and cryptanalytic attacks. No key shall be generated using deprecated or prohibited algorithms.

### 5.2 Approved Algorithms and Minimum Key Lengths

*The following table defines the minimum cryptographic standards. Review and update upon each annual review cycle or upon issuance of relevant NACSA or NIST guidance.*

| Key Type | Algorithm | Minimum Key Length | Approved Use Cases |
|---|---|---|---|
| Symmetric Encryption | AES | 256-bit | Data at rest, DEK encryption, VPN |
| Asymmetric Encryption | RSA | 3072-bit (preferred: 4096-bit) | Key exchange, TLS, digital signatures |
| Asymmetric Encryption | ECC (ECDSA / ECDH) | P-256 minimum (preferred: P-384) | TLS, code signing, authentication |
| Hashing | SHA-2 family | SHA-256 minimum (preferred: SHA-384 / SHA-512) | Integrity verification, digital signatures |
| Key Derivation | PBKDF2 / HKDF / bcrypt | [Per current NIST SP 800-132 guidance] | Password hashing, derived keys |

> **Prohibited Algorithms:** DES, 3DES (Triple-DES), RC4, MD5, SHA-1, RSA keys below 2048-bit. Use of these algorithms requires a documented exception approved by the Chief Information Security Officer (CISO).

### 5.3 Random Number Generation

- All keys must be generated using a **cryptographically secure random number generator (CSPRNG)**.
- Where keys are generated on an HSM, the HSM's internal CSPRNG must be used, compliant with **FIPS 140-2 Level 2** or higher (preferred: FIPS 140-2 Level 3 or FIPS 140-3).
- Software-based key generation (for lower-assurance use cases only) must use OS-level entropy sources (e.g., `/dev/urandom` on Linux, `CryptGenRandom` / `BCryptGenRandom` on Windows).

### 5.4 Key Generation Environments

| Key Tier | Generation Environment | Witness Requirement | Documentation |
|---|---|---|---|
| Tier 1 – Master / KEK | HSM via formal Key Ceremony | Minimum 2 authorized custodians + 1 witness | Key ceremony minutes, custodian acknowledgement forms |
| Tier 2 – Infrastructure Keys (TLS, VPN, SSH) | HSM or dedicated secure workstation | Minimum 1 authorized key officer | Generation log entry in KMS |
| Tier 3 – Application DEKs | KMS API / automated pipeline | System-automated, logged | Automated KMS audit log |

### 5.5 Key Ceremony Procedure

For Tier 1 keys, the following key ceremony steps must be observed:

1. Notify all required custodians and witnesses at least **5 business days** in advance.
2. Conduct the ceremony in a physically secured area with access restricted to authorized participants.
3. Record the ceremony on video or via written minutes signed by all participants.
4. Generate key components using split knowledge — distribute components to separate custodians immediately.
5. Verify the integrity of the generated key against its intended cryptographic purpose.
6. Archive the signed key ceremony record in the [Document Repository / Physical Vault location].

---

## 6. Key Distribution Methods

*Describe the approved methods for transmitting keys from the point of generation to the point of use, ensuring keys are never exposed in plaintext outside of a controlled boundary.*

### 6.1 Guiding Principles

Cryptographic keys must never be transmitted in plaintext. All key distribution methods must ensure:

- **Confidentiality:** The key is protected from unauthorized disclosure during transmission.
- **Integrity:** The key arrives unmodified.
- **Authentication:** The receiving party is verified as the intended and authorized recipient.

### 6.2 Approved Distribution Methods

| Distribution Method | Applicable Key Types | Conditions |
|---|---|---|
| HSM-to-HSM encrypted key injection | Tier 1 KEK, Master Keys | Preferred method for highest-assurance key material |
| Encrypted key wrapping via KMS API (TLS 1.2+) | Tier 2 and Tier 3 Keys | Automated pipeline; API authentication required |
| Key components via separate secure channels (split knowledge) | Tier 1 Keys (manual distribution) | Each component distributed via different channel / custodian |
| Encrypted email with S/MIME or PGP | Tier 2 Infrastructure Keys (exceptional cases only) | Requires CISO approval; key must be wrapped with recipient's public key |
| Out-of-band physical delivery (sealed tamper-evident envelope) | Master key components | Custodian must sign chain-of-custody log upon receipt |

### 6.3 Prohibited Distribution Methods

The following methods are **strictly prohibited** for the distribution of cryptographic keys:

- Plaintext email or messaging applications.
- Unencrypted file transfer (FTP, HTTP, unencrypted USB).
- Inclusion of keys in source code repositories, configuration files, or documentation.
- Verbal communication of key values (applies to full keys; partial components under split knowledge may be communicated verbally with dual control).

### 6.4 Key Distribution Logging

Every key distribution event must be recorded in the KMS audit log or a physical chain-of-custody record, capturing:

| Field | Description |
|---|---|
| Key Identifier | Unique identifier of the distributed key |
| Key Type / Tier | Classification of the key |
| Distribution Date / Time | UTC timestamp |
| Sender Identity | Authenticated identity of the distributing party |
| Recipient Identity | Authenticated identity of the receiving party / system |
| Distribution Method | Method used |
| Authorization Reference | Approval ticket or change reference number |

---

## 7. Key Storage and HSM Requirements

*Define where and how keys may be stored, with specific HSM controls for high-assurance key material. This section must address both physical and logical security controls.*

### 7.1 Key Storage Tiers

| Storage Tier | Key Types | Permitted Storage Mechanism | Minimum Security Standard |
|---|---|---|---|
| Tier 1 – Highest Assurance | Master keys, KEKs | Dedicated on-premises or cloud HSM | FIPS 140-2 Level 3 or FIPS 140-3 Level 2 |
| Tier 2 – High Assurance | Infrastructure keys, TLS private keys | HSM or KMS with HSM-backed key storage | FIPS 140-2 Level 2 |
| Tier 3 – Standard Assurance | Application DEKs, API secrets | Cloud KMS (HSM-backed), secrets management vault | AES-256 encrypted at rest; access-controlled |

### 7.2 HSM Requirements

All HSMs deployed for Tier 1 and Tier 2 key storage must meet the following baseline requirements:

**Physical and Environmental Controls:**
- Housed in a Tier [2/3] data centre or equivalent physical security environment.
- Located within a locked rack or cage with access restricted to authorized HSM administrators.
- Tamper-evident and tamper-responsive design: HSM must zeroize keys upon physical tamper detection.
- Environmental monitoring (temperature, humidity) and intrusion detection in place.

**Logical and Access Controls:**
- Role-based access enforced on the HSM: separate roles for HSM Administrator, Key Custodian, and Auditor.
- Multi-factor authentication required for all HSM management operations.
- Dual control enforced for all key generation, import, export, and deletion operations on Tier 1 keys.
- All HSM operations logged to a tamper-evident audit log, exported to the centralized SIEM.

**Operational Requirements:**
- HSM firmware must be maintained at a supported version; patch updates to follow the organization's vulnerability management procedure.
- HSM backup and replication configuration: [Describe HA setup, e.g., Active-Passive cluster with encrypted key backup to secondary HSM].
- Annual HSM health check and FIPS compliance validation to be performed by [authorized HSM administrator / vendor].

### 7.3 Software-Based Key Storage (Tier 3)

Where HSM-backed storage is not available for Tier 3 keys:

- Keys must be stored in an approved **secrets management vault** (e.g., [HashiCorp Vault / AWS Secrets Manager / Azure Key Vault]).
- The vault must encrypt all stored secrets using AES-256.
- Access to the vault must be controlled via service-account credentials with least-privilege permissions.
- Vault access logs must be forwarded to the centralized SIEM.
- Master keys / unseal keys for the vault itself must be stored in an HSM or distributed using Shamir's Secret Sharing with a minimum threshold of [N of M] key shares.

### 7.4 Key Storage Prohibitions

The following storage locations are **prohibited** for any cryptographic key material:

- Plaintext in source code, configuration files, or CI/CD pipeline variables (unencrypted).
- Spreadsheets, word processing documents, or email folders.
- Personal end-user devices or personal cloud storage accounts.
- Log files or audit trails.
- Shared network drives without encryption and access control.

---

## 8. Key Rotation Schedule

*Establish mandatory rotation frequencies by key type. Key rotation limits the exposure window if a key is compromised without detection.*

### 8.1 Guiding Principles

Key rotation must occur on a schedule commensurate with the sensitivity of the protected data, the volume of data encrypted under the key, and the risk environment. Rotation events must be planned, documented, and executed without causing unplanned downtime to NCII systems.

### 8.2 Mandatory Rotation Schedule

| Key Type | Rotation Frequency | Trigger for Immediate Rotation | Notes |
|---|---|---|---|
| Master Keys / KEKs | Every 2 years (via formal Key Ceremony) | Suspected or confirmed compromise; custodian departure | Rotation requires full Key Ceremony as per Section 5.5 |
| TLS / SSL Certificates | Annually (or upon expiry if shorter) | Certificate revocation; private key exposure | Track via certificate inventory; automate renewal where possible |
| Database Encryption Keys (DEK) | Annually | Data breach event; key exposure | Re-encrypt affected data upon rotation |
| VPN / IPSec Keys | Every 6 months | Peer compromise; staff change on VPN team | |
| SSH Private Keys (Admin) | Every 12 months | Staff departure; suspected compromise | Revoke and reissue via PKI or SSH CA |
| API Keys / Service Account Secrets | Every 90 days | Developer/staff departure; suspected compromise | Automate via secrets management vault |
| Code Signing Keys | Every 2 years | Compromise; CA revocation | Maintain chain of custody documentation |
| Backup Encryption Keys | Every 12 months | Upon restore test failure indicating key issue | Verify backup recoverability before retiring old key |

### 8.3 Key Rotation Procedure

For each planned rotation:

1. **Plan:** Raise a change request in [Change Management System] at least [X] business days in advance. Document the key identifier, affected systems, rollback plan, and testing steps.
2. **Generate:** Generate the replacement key in accordance with Section 5.
3. **Distribute:** Distribute the new key to all authorized systems in accordance with Section 6.
4. **Transition:** Configure systems to use the new key for all new operations. Retain the old key in read-only mode for decryption of existing data during the transition period.
5. **Verify:** Confirm all systems are operating correctly with the new key.
6. **Retire:** After the transition period (maximum [30/60] days), revoke the old key per Section 9.
7. **Document:** Update the Key Inventory Register (Appendix A) and log the rotation event in the KMS audit log.

### 8.4 Automated Rotation

Where technically feasible, key rotation should be automated via the organization's KMS or secrets management platform. Automated rotation pipelines must:

- Be tested in a non-production environment prior to production deployment.
- Generate alerts on rotation failure to the Security Operations team.
- Log each rotation event with full metadata to the centralized SIEM.

---

## 9. Key Revocation and Destruction

*Define the conditions under which keys must be revoked and the approved methods for their irreversible destruction.*

### 9.1 Revocation Triggers

A cryptographic key must be immediately revoked upon the occurrence of any of the following:

| Trigger | Required Action | Responsible Party |
|---|---|---|
| Confirmed key compromise or exposure | Emergency revocation; incident raised immediately | Security Operations / CISO |
| Suspected key compromise (unconfirmed) | Precautionary revocation pending investigation | Security Operations |
| Departure of key custodian | Revocation and reissuance of associated keys | Key Custodian Manager / HR |
| System decommissioning | Revocation of all keys associated with decommissioned system | IT Infrastructure / Security Operations |
| Expiry of key validity period | Scheduled revocation as part of rotation | Security Operations |
| Certificate Authority compromise | Revoke all certificates issued by the compromised CA | PKI Administrator |
| Change in authorized use of key | Revoke and reissue with updated attributes | Key Owner |

### 9.2 Key Revocation Procedure

1. **Initiate Revocation:** The Key Owner or Security Operations team initiates revocation by logging a request in [ITSM System / KMS]. In emergency situations, revocation must occur within **[2 hours]** of the trigger event being identified.
2. **Notify Affected Systems:** Identify all systems relying on the key and notify system owners. Where possible, push revocation information (e.g., updated CRL or OCSP response) to dependent systems automatically.
3. **Update Key Inventory:** Mark the key as **REVOKED** in the Key Inventory Register with the revocation date, reason, and authorizing officer.
4. **Data Re-encryption:** Assess whether data encrypted under the revoked key must be re-encrypted with a replacement key. Assign ownership and timeline for re-encryption tasks.
5. **Incident Notification:** If revocation is due to a confirmed or suspected compromise, initiate the organization's Incident Response Procedure and notify NACSA and relevant stakeholders per Act 854 reporting obligations.

### 9.3 Key Destruction

Key destruction is the irreversible elimination of key material such that it cannot be recovered. Destruction must occur:

- At the end of the key's useful lifecycle.
- Following a confirmed compromise where recovery is not required.
- Upon decommissioning of the storage medium.

**Approved Destruction Methods:**

| Key Storage Medium | Approved Destruction Method |
|---|---|
| HSM-stored keys | Cryptographic erasure (zeroization) via HSM management interface; confirmed by HSM log |
| Software KMS / Vault | API-based key deletion; confirmed via deletion audit log; key material purged from all backup snapshots |
| Physical key components (printed / written) | Cross-cut shredding to DIN 66399 Level P-4 or above; incineration |
| Encrypted backup media | Cryptographic erasure of KEK rendering backup data irrecoverable; physical destruction of media if decommissioning |

**Destruction Verification:** All destruction events must be documented on a **Key Destruction Certificate** (see Appendix C), signed by the Key Custodian and a witness, and retained for a minimum of **[5 years]** for audit purposes.

---

## 10. Key Recovery Procedures

*Define the controlled circumstances under which key recovery is permitted and the procedural safeguards that must apply.*

### 10.1 Guiding Principles

Key recovery must only occur in authorized, documented circumstances. Unauthorized key recovery represents a significant security risk and may constitute a data protection violation under the PDPA 2010. All recovery operations must be subject to dual control and formal approval.

### 10.2 Approved Recovery Scenarios

| Scenario | Authorized Requestor | Required Approvals |
|---|---|---|
| Recovery of encrypted business data following system failure | Business System Owner | CISO + System Owner |
| Recovery following accidental key deletion (within retention period) | IT Infrastructure Lead | CISO + IT Manager |
| Legal / regulatory discovery requirement (e-discovery) | Legal / Compliance | CISO + General Counsel + Board Representative |
| Law enforcement / regulatory compulsion order | Legal / Compliance | [Designated Authorized Signatory per Act 854 / PDPA] |
| Disaster Recovery invocation | DR Coordinator | CISO + CTO / CIO |

### 10.3 Key Recovery Procedure

1. **Request Submission:** The authorized requestor submits a formal Key Recovery Request to the CISO, detailing the justification, scope, legal basis (if applicable), and intended use of the recovered key.
2. **Approval:** The CISO and any required co-approvers review and approve or deny the request in writing. All approvals are documented in [ITSM System].
3. **Recovery Execution:** Recovery is performed by at least **two authorized Key Custodians** operating under dual control. The recovery session is logged and witnessed.
4. **Access Control:** The recovered key is provided only to the authorized requestor and is subject to the same access controls as newly generated keys.
5. **Audit Trail:** The complete recovery event — request, approvals, execution, and subsequent use — must be logged in the KMS audit trail and reported to the CISO.
6. **Post-Recovery Review:** The CISO must review all key recovery events quarterly and report patterns or anomalies to the Risk Committee.

### 10.4 Key Escrow and Backup

- Tier 1 master keys must have encrypted key components escrowed with authorized custodians using split knowledge (minimum [2-of-3] Shamir shares or equivalent).
- Escrow copies of key material must be stored in a physically separate, equally secured location from the primary HSM (e.g., off-site vault or secondary data centre).
- The integrity and recoverability of escrowed key components must be tested during the annual DR exercise.
- A register of all escrowed key components and their custodians must be maintained and reviewed semi-annually by the CISO.

---

## 11. Roles and Responsibilities

*Assign clear ownership for each key management function. Use the RACI model: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 11.1 Role Definitions

| Role | Description |
|---|---|
| **Chief Information Security Officer (CISO)** | Ultimate accountability for the cryptographic key management program. |
| **Key Management Officer (KMO)** | Day-to-day operational responsibility for key lifecycle management; typically within Security Operations. |
| **Key Custodian** | An individual designated to hold one or more key components or act as a witness/participant in key ceremonies. |
| **HSM Administrator** | Technical administrator responsible for HSM configuration, maintenance, and firmware management. |
| **System / Application Owner** | Accountable for the systems that consume cryptographic keys; responsible for ensuring timely rotation. |
| **PKI Administrator** | Manages the organization's certificate authority infrastructure and certificate lifecycle. |
| **Internal Audit** | Independent assurance review of key management controls. |
| **Legal / Compliance** | Provides guidance on regulatory obligations and manages lawful key disclosure requests. |

### 11.2 RACI Matrix

| Activity | CISO | KMO | Key Custodian | HSM Admin | System Owner | PKI Admin | Internal Audit | Legal |
|---|---|---|---|---|---|---|---|---|
| Approve key management policy / procedure | A | C | I | I | I | I | C | C |
| Key generation (Tier 1) | A | R | R | R | I | — | I | — |
| Key generation (Tier 2 / 3) | I | A | — | R | C | R | — | — |
| Key ceremony facilitation | A | R | R | R | — | — | I | — |
| Key distribution | I | A | R | R | C | C | — | — |
| HSM administration | I | A | — | R | — | — | I | — |
| Certificate lifecycle management | I | C | — | — | C | R/A | I | — |
| Key rotation (planned) | I | A | — | R | R | R | — | — |
| Key revocation (emergency) | A | R | C | R | R | C | I | I |
| Key destruction | A | R | R | R | I | — | I | — |
| Key recovery approval | A | C | — | — | C | — | I | C |
| Key recovery execution | A | R | R | R | — | — | I | — |
| KMS audit log review | A | R | — | — | — | — | C | — |
| Annual procedure review | A | R | C | C | C | C | C | C |
| Regulatory reporting (NACSA) | A | C | — | — | — | — | — | R |

---

## 12. Exceptions and Deviations

*Provide a mechanism for managing situations where strict compliance with this procedure is not technically or operationally feasible.*

### 12.1 Exception Process

Any deviation from the requirements of this procedure must be formally documented and approved prior to implementation. Retrospective exceptions will only be considered in genuine emergency situations.

**Exception Request Requirements:**

| Field | Description |
|---|---|
| Exception ID | [Auto-assigned by ITSM] |
| Requested By | Name and role of requestor |
| Date of Request | [Date] |
| Affected Requirement | Specific section and requirement of this procedure |
| Nature of Deviation | Description of what cannot be complied with |
| Business / Technical Justification | Why the deviation is necessary |
| Risk Assessment | Risks introduced by the deviation |
| Compensating Controls | Alternative controls proposed to mitigate the risk |
| Proposed Duration | Duration of the exception (maximum 12 months) |
| Approver | CISO (mandatory); Board Risk Committee (for exceptions exceeding 6 months) |

### 12.2 Exception Register

All approved exceptions must be recorded in the organization's exception register and reviewed at each quarterly security review. Open exceptions must be reported to the Risk Committee.

---

## 13. Audit and Compliance Monitoring

*Define how compliance with this procedure is verified and how evidence is retained for regulatory inspection.*

### 13.1 Ongoing Monitoring

| Control | Monitoring Method | Frequency | Responsible Party |
|---|---|---|---|
| HSM audit log review | SIEM correlation rule; manual log review | Weekly | KMO / SOC |
| KMS access log review | Automated alerting on anomalous access patterns | Continuous | SOC |
| Key inventory review | Reconciliation of KMS inventory against Key Register | Monthly | KMO |
| Certificate expiry monitoring | Automated scanning via certificate management tool | Daily | PKI Administrator |
| Key rotation compliance | KMS report: keys overdue for rotation | Monthly | KMO |
| Custodian access review | Review of HSM and KMS user accounts against HR records | Quarterly | KMO / IT Security |

### 13.2 Internal Audit

Internal Audit must perform an independent review of key management practices at least annually. The review must cover:

- Completeness and accuracy of the Key Inventory Register.
- Evidence of key ceremonies, rotation events, and destruction certificates.
- HSM configuration and physical security controls.
- Adequacy of dual control and split knowledge implementation.
- Compliance of key generation algorithms with Section 5.

Audit findings must be reported to the Risk Committee and CISO. Management responses and remediation timelines must be documented.

### 13.3 Evidence Retention

| Evidence Type | Retention Period | Storage Location |
|---|---|---|
| Key ceremony minutes and custodian acknowledgements | 7 years after key destruction | [Secure Document Repository] |
| Key generation and distribution logs (KMS audit) | 7 years | [SIEM / Secure Log Archive] |
| Key rotation records | 7 years | KMS audit log + Key Register |
| Key destruction certificates | 7 years after destruction | [Secure Document Repository] |
| Key recovery request and approval records | 7 years | [ITSM System + Secure Document Repository] |
| Exception register | 7 years | [GRC Platform / Document Repository] |

> **Note:** Retention periods align with Malaysian Companies Act 2016 requirements and PDPA enforcement practice. Adjust if sector-specific NACSA or BNM retention requirements exceed these periods.

---

## 14. Review and Approval

### 14.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| | | | |
| | | | |

### 14.2 Approval Sign-Off

*All listed approvers must sign prior to this procedure becoming effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | | [Date] |
| Head of Security Operations | [Name] | | [Date] |
| Chief Technology Officer / CIO | [Name] | | [Date] |
| Legal / Compliance Officer | [Name] | | [Date] |
| Internal Audit Representative | [Name] | | [Date] |

### 14.3 Next Review

This procedure must be reviewed:

- **Annually**, no later than **[Next Review Date]**.
- Upon any **material change** to the regulatory framework (including NACSA directives, BNM guidance, or Act 854 subsidiary legislation).
- Following any **key compromise incident** that reveals gaps in this procedure.
- Upon **significant changes** to the organization's cryptographic infrastructure (e.g., HSM replacement, migration to new KMS platform).

---

## 15. References

| Reference | Document / Standard | Issuing Body |
|---|---|---|
| [1] | Cyber Security Act 2024 (Act 854), Section 18 — Cyber security measures for NCII | Parliament of Malaysia |
| [2] | National Cyber Security Agency (NACSA) — NCII Sector Cyber Security Framework | NACSA |
| [3] | Risk Management in Technology (RMiT) Policy, Paragraphs 10.35–10.41 | Bank Negara Malaysia |
| [4] | Personal Data Protection Act 2010 (Act 709), Section 9 — Security Principle | Ministry of Digital, Malaysia |
| [5] | ISO/IEC 27001:2022 — Information Security Management Systems, Annex A Control 8.24 (Use of Cryptography) | International Organization for Standardization |
| [6] | NIST Special Publication 800-57 Part 1 Rev. 5 — Recommendation for Key Management | NIST |
| [7] | NIST Special Publication 800-57 Part 2 Rev. 1 — Best Practices for Key Management Organizations | NIST |
| [8] | NIST Special Publication 800-57 Part 3 Rev. 1 — Application-Specific Key Management Guidance | NIST |
| [9] | NIST Special Publication 800-131A Rev. 2 — Transitioning the Use of Cryptographic Algorithms and Key Lengths | NIST |
| [10] | FIPS 140-3 — Security Requirements for Cryptographic Modules | NIST |
| [11] | [Organization Name] Information Security Policy | [Organization Name] |
| [12] | [Organization Name] Incident Response Procedure | [Organization Name] |
| [13] | [Organization Name] Acceptable Use Policy | [Organization Name] |
| [14] | [Organization Name] Third Party Risk Management Procedure | [Organization Name] |

---

## 16. Appendices

### Appendix A — Key Inventory Register (Template)

*Maintain a current record of all active cryptographic keys. This register must be updated upon every key lifecycle event. Access to this register is restricted to the CISO, KMO, and Internal Audit.*

| Key ID | Key Name / Description | Algorithm | Key Length | Key Type | Key Tier | System / Application | Creation Date | Expiry / Next Rotation | Status | Custodian(s) | Storage Location | Last Reviewed |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [KEY-001] | [Description] | [AES-256] | [256-bit] | [DEK / KEK / etc.] | [1 / 2 / 3] | [System Name] | [Date] | [Date] | [Active / Revoked / Expired] | [Name(s)] | [HSM / KMS / Vault] | [Date] |
| | | | | | | | | | | | | |

---

### Appendix B — Key Ceremony Checklist

*Use this checklist for every Tier 1 key generation ceremony. Complete, sign, and archive with the ceremony minutes.*

**Key Ceremony Reference:** [Ceremony ID]
**Date:** [Date]
**Location:** [Physical Location]
**Purpose:** [Key Type and Use Case]

| # | Step | Completed (Y/N) | Initials |
|---|---|---|---|
| 1 | Confirm all required custodians and witnesses are present and their identities verified | | |
| 2 | Confirm the ceremony room is physically secured and recording is in place | | |
| 3 | Confirm HSM is in a known-good state and tamper seals are intact | | |
| 4 | Confirm HSM firmware version and FIPS compliance status | | |
| 5 | Generate key using HSM CSPRNG per Section 5 requirements | | |
| 6 | Verify key attributes (algorithm, length, usage) | | |
| 7 | Distribute key components to designated custodians under split knowledge | | |
| 8 | Confirm each custodian has received and securely stored their component | | |
| 9 | Update Key Inventory Register (Appendix A) | | |
| 10 | Archive ceremony minutes and this checklist | | |

**Custodian Acknowledgements:**

| Name | Role | Component Received | Signature | Date |
|---|---|---|---|---|
| [Name] | [Role] | Component [1/N] | | [Date] |
| [Name] | [Role] | Component [2/N] | | [Date] |

**Witness:**

| Name | Role | Signature | Date |
|---|---|---|---|
| [Name] | [Witness Role] | | [Date] |

---

### Appendix C — Key Destruction Certificate (Template)

*Complete this certificate for every key destruction event. File in the secure document repository.*

**Destruction Certificate Reference:** [DEST-YYYY-NNN]

| Field | Details |
|---|---|
| Key ID | [Key ID from Appendix A] |
| Key Description | [Brief description of key] |
| Key Type / Tier | [Type] / Tier [1 / 2 / 3] |
| Reason for Destruction | [Scheduled rotation / Compromise / Decommission / Other] |
| Date of Destruction | [Date] |
| Destruction Method | [Zeroization / API deletion / Physical shredding / Other] |
| Verification of Destruction | [Describe how destruction was verified — HSM log reference, deletion audit log ID, etc.] |
| Data Re-encryption Required | [Yes / No] — if Yes, reference ticket: [Ticket ID] |

**Custodian Declaration:**

I confirm that the key identified above has been irreversibly destroyed in accordance with the Encryption Key Management Procedure, and that no copy of the key material remains accessible.

| Name | Role | Signature | Date |
|---|---|---|---|
| [Name] | Key Custodian | | [Date] |
| [Name] | Witness | | [Date] |

**CISO Approval:**

| Name | Signature | Date |
|---|---|---|
| [CISO Name] | | [Date] |

---

### Appendix D — Key Recovery Request Form (Template)

*Submit this form to the CISO for all key recovery requests. Approvals must be obtained prior to recovery execution.*

**Recovery Request Reference:** [REC-YYYY-NNN]

| Field | Details |
|---|---|
| Requestor Name | [Name] |
| Requestor Role | [Role] |
| Date of Request | [Date] |
| Key ID(s) Requested | [Key IDs] |
| Justification | [Detailed justification] |
| Legal Basis (if applicable) | [Cite specific legal obligation or order reference] |
| Scope of Recovery | [Specify exactly what key material is needed and for what purpose] |
| Intended Use | [How the recovered key will be used] |
| Data to be Decrypted (if applicable) | [Description and volume] |
| Proposed Duration of Access | [Duration] |

**Approvals Required:**

| Approver Role | Name | Decision (Approved / Denied) | Signature | Date |
|---|---|---|---|---|
| CISO | [Name] | | | [Date] |
| [Additional Approver if required] | [Name] | | | [Date] |

---

### Appendix E — Approved Cryptographic Algorithms Reference Card

*Quick-reference card for system architects, developers, and administrators. Updated upon each annual review.*

**Symmetric Encryption**

| Algorithm | Key Size | Status | Approved Use |
|---|---|---|---|
| AES-256 | 256-bit | **Approved — Preferred** | All encryption use cases |
| AES-128 | 128-bit | Approved | Lower-risk, performance-constrained use cases |
| 3DES | 112-bit | **PROHIBITED** | — |
| DES | 56-bit | **PROHIBITED** | — |

**Asymmetric Encryption / Digital Signatures**

| Algorithm | Key Size | Status | Approved Use |
|---|---|---|---|
| RSA | 4096-bit | **Approved — Preferred** | Key exchange, signatures |
| RSA | 3072-bit | Approved | Key exchange, signatures |
| RSA | 2048-bit | Conditionally approved — plan migration | Legacy systems only; must be migrated by [Date] |
| RSA | < 2048-bit | **PROHIBITED** | — |
| ECDSA / ECDH | P-384 (secp384r1) | **Approved — Preferred** | TLS, code signing, key exchange |
| ECDSA / ECDH | P-256 (secp256r1) | Approved | General use |

**Hashing**

| Algorithm | Output Size | Status | Approved Use |
|---|---|---|---|
| SHA-512 | 512-bit | **Approved — Preferred** | Integrity, signatures |
| SHA-384 | 384-bit | Approved | Integrity, signatures |
| SHA-256 | 256-bit | Approved | Integrity, signatures |
| SHA-1 | 160-bit | **PROHIBITED** | — |
| MD5 | 128-bit | **PROHIBITED** | — |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | Security Operations**
**Document ID: [Document ID] | Version 1.0**
**© [Year] [Organization Name]. All rights reserved. Internal use only.**