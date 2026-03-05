# Encryption and Cryptography Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 12 months from Last Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Department** | Information Security / Cybersecurity |

---

> **Regulatory Basis:** This policy is mandated under the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 24, applicable to entities designated as National Critical Information Infrastructure (NCII) owners and operators in the financial services sector. This document is classified **Confidential** and is intended for internal distribution to authorised personnel only.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Approved Cryptographic Algorithms](#5-approved-cryptographic-algorithms)
6. [Key Management Responsibilities](#6-key-management-responsibilities)
7. [Certificate Management Requirements](#7-certificate-management-requirements)
8. [TLS/SSL Standards](#8-tlsssl-standards)
9. [Data-at-Rest Encryption Requirements](#9-data-at-rest-encryption-requirements)
10. [Cryptographic Key Lifecycle](#10-cryptographic-key-lifecycle)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Compliance, Monitoring, and Enforcement](#12-compliance-monitoring-and-enforcement)
13. [Exceptions and Waivers](#13-exceptions-and-waivers)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe why this policy exists, the risk it mitigates, and its overarching objective in protecting NCII assets.*

This policy establishes the minimum cryptographic standards and controls required by **[Organization Name]** to protect the confidentiality, integrity, and authenticity of National Critical Information Infrastructure (NCII) data. It defines the approved cryptographic algorithms, key management practices, certificate lifecycle procedures, and encryption requirements applicable to data at rest, data in transit, and data in processing.

The policy ensures that cryptographic controls deployed across [Organization Name]'s information systems are fit-for-purpose, consistently applied, and aligned with current best practices recognized by the National Cyber Security Agency (NACSA) and relevant international standards bodies, including NIST, ISO/IEC, and the Internet Engineering Task Force (IETF).

Failure to implement adequate cryptographic controls exposes [Organization Name] and the broader NCII ecosystem to risks including unauthorized data disclosure, man-in-the-middle attacks, data tampering, and regulatory sanctions under Act 854.

---

## 2. Scope

*Define the systems, data, entities, and personnel to whom this policy applies. Be explicit about inclusions and exclusions.*

### 2.1 In Scope

This policy applies to:

- All information systems, applications, infrastructure, and network components owned, operated, or managed by **[Organization Name]** that process, store, or transmit NCII data or other sensitive organizational data.
- All cryptographic controls implemented within **[Organization Name]**'s on-premises data centres, private cloud, hybrid cloud, and third-party hosted environments where [Organization Name] retains data ownership or custodianship.
- All employees, contractors, vendors, managed service providers, and third parties who design, implement, administer, or audit cryptographic systems on behalf of [Organization Name].
- All digital certificates, encryption keys, cryptographic tokens, and secrets managed under [Organization Name]'s Certificate Management System (CMS) or Hardware Security Module (HSM) infrastructure.
- All data classified as **Restricted**, **Confidential**, or **Sensitive** under [Organization Name]'s Data Classification Policy \[Reference: [Document ID of Data Classification Policy]\].

### 2.2 Out of Scope

- Cryptographic controls embedded in commercially off-the-shelf (COTS) products where [Organization Name] has no administrative control over algorithm selection, provided such products are assessed and approved through the Technology Risk Assessment process.
- End-user personal devices not enrolled in the Mobile Device Management (MDM) programme, unless such devices are used to access NCII systems.

---

## 3. Regulatory and Policy Framework

*List all regulatory instruments, standards, and internal policies that this document must align with. Reference specific sections where known.*

### 3.1 Regulatory Requirements

| Instrument | Relevant Provisions | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 — Cybersecurity measures for NCII | Mandatory implementation of technical controls including cryptography |
| Cyber Security Act 2024 (Act 854) | Section 24 — Compliance and audit | Obligation to demonstrate control effectiveness to NACSA |
| Bank Negara Malaysia (BNM) RMiT Policy Document | §10 (Cybersecurity), §11 (Technology Risk) | Encryption of customer and financial data |
| Personal Data Protection Act 2010 (Act 709) | Section 9 — Security Principle | Encryption of personal data in storage and transit |
| NACSA National Cybersecurity Policy | Pillar 3 — Secure Cyberspace | Adoption of approved security standards |
| Payment Card Industry DSS (PCI-DSS v4.0) | Requirements 3, 4 | Encryption of cardholder data |

### 3.2 Supporting Standards

- **NIST SP 800-57** — Recommendation for Key Management
- **NIST SP 800-131A** — Transitioning the Use of Cryptographic Algorithms and Key Lengths
- **NIST FIPS 140-3** — Security Requirements for Cryptographic Modules
- **ISO/IEC 27001:2022** — Annex A, Control 8.24 (Use of Cryptography)
- **ISO/IEC 27002:2022** — Section 8.24 guidance
- **IETF RFC 8446** — TLS 1.3
- **IETF RFC 5280** — Internet X.509 Public Key Infrastructure

### 3.3 Related Internal Policies

| Policy | Document ID |
|---|---|
| Information Security Policy | [Document ID] |
| Data Classification and Handling Policy | [Document ID] |
| Access Control Policy | [Document ID] |
| Incident Response Policy | [Document ID] |
| Vendor and Third-Party Risk Management Policy | [Document ID] |
| Change Management Policy | [Document ID] |

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation.*

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary cybersecurity legislation of Malaysia |
| **Asymmetric Encryption** | A cryptographic system using a mathematically linked key pair: a public key for encryption and a private key for decryption |
| **Certificate Authority (CA)** | An entity that issues and manages digital certificates, validating the identity of certificate holders |
| **Cipher Suite** | A combination of cryptographic algorithms used to negotiate security parameters for a TLS/SSL session |
| **CMS** | Certificate Management System |
| **Cryptographic Module** | Hardware or software implementing approved cryptographic algorithms and key management functions |
| **Data at Rest** | Data stored persistently on physical or virtual storage media, including databases, file systems, backups, and removable media |
| **Data in Processing** | Data actively being manipulated, computed, or transformed within memory or CPU registers |
| **Data in Transit** | Data actively moving across a network, including internal networks, the internet, and inter-system API calls |
| **Digital Certificate** | An electronic credential binding a public key to an entity's identity, issued by a Certificate Authority |
| **Ephemeral Key** | A cryptographic key generated for a single session or transaction and discarded immediately after use |
| **FIPS 140-3** | Federal Information Processing Standard for cryptographic module validation |
| **HSM** | Hardware Security Module — a tamper-resistant device for generating, storing, and managing cryptographic keys |
| **Key Custodian** | An individual formally assigned responsibility for the safeguarding and management of cryptographic keys |
| **Key Escrow** | A secure arrangement where copies of cryptographic keys are held by authorised third parties for recovery purposes |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **NCII** | National Critical Information Infrastructure, as defined under Act 854 |
| **PKI** | Public Key Infrastructure — the framework of policies, hardware, software, and procedures for managing digital certificates |
| **Quantum-Safe / Post-Quantum Cryptography (PQC)** | Cryptographic algorithms designed to resist attacks by quantum computers |
| **Symmetric Encryption** | Encryption using the same key for both encryption and decryption |
| **TLS** | Transport Layer Security — a cryptographic protocol for securing communications over a network |
| **X.509** | The standard format for public key certificates used in PKI |

---

## 5. Approved Cryptographic Algorithms

*Specify the authorised algorithms for each cryptographic use case. Explicitly prohibit deprecated or weak algorithms. This section is critical for audit purposes — tables should be complete and version-controlled.*

### 5.1 Policy Statement

[Organization Name] shall only implement cryptographic algorithms that have been formally evaluated and approved by NACSA, NIST, or equivalent recognized standards bodies. The use of proprietary, unreviewed, or deprecated cryptographic algorithms is strictly prohibited.

### 5.2 Approved Algorithm Register

#### 5.2.1 Symmetric Encryption

| Algorithm | Key Length | Approved Use Case | Notes |
|---|---|---|---|
| AES (Advanced Encryption Standard) | 256-bit (preferred) | Data at rest, data in transit, file encryption | FIPS 197 approved; AES-128 permissible for low-sensitivity use cases only |
| AES-GCM | 256-bit | Authenticated encryption, database field encryption | Provides both confidentiality and integrity; preferred mode |
| AES-CBC | 256-bit | Legacy system integration only | Must use random IV; not for new implementations |
| ChaCha20-Poly1305 | 256-bit | Mobile applications, embedded systems | Approved where AES hardware acceleration is unavailable |

#### 5.2.2 Asymmetric Encryption and Key Exchange

| Algorithm | Key Length / Curve | Approved Use Case | Notes |
|---|---|---|---|
| RSA | 3072-bit minimum (4096-bit preferred) | Digital signatures, key encapsulation | RSA-2048 permissible until [Sunset Date]; not for new implementations |
| ECDSA | P-256, P-384, P-521 | Digital signatures, certificates | NIST-approved curves only |
| ECDH | P-256, P-384 | Key agreement, TLS key exchange | |
| Ed25519 | 256-bit | SSH keys, code signing | High-performance signature scheme |
| DH (Diffie-Hellman) | 3072-bit minimum | Legacy key exchange only | Must use safe primes; ephemeral mode only |

#### 5.2.3 Hashing and Message Authentication

| Algorithm | Output Length | Approved Use Case | Notes |
|---|---|---|---|
| SHA-256 | 256-bit | General hashing, certificate fingerprints | Minimum approved standard |
| SHA-384 | 384-bit | High-assurance signing, TLS 1.3 | Preferred for NCII system certificates |
| SHA-512 | 512-bit | Data integrity verification, HSM operations | |
| HMAC-SHA-256 | 256-bit | API authentication, message authentication | |
| HMAC-SHA-512 | 512-bit | High-assurance MAC operations | |
| Argon2id | — | Password hashing, key derivation | Mandatory for all new password hashing implementations |
| PBKDF2-HMAC-SHA-256 | — | Legacy password-based key derivation | Minimum 600,000 iterations per NIST SP 800-132 |
| HKDF | — | Key derivation from shared secrets | |

#### 5.2.4 Post-Quantum Cryptography (PQC) Readiness

*This section should be updated as NACSA and NIST finalize PQC standards. Organizations must begin PQC transition planning now.*

| Algorithm | Status | Target Use Case | Timeline |
|---|---|---|---|
| CRYSTALS-Kyber (ML-KEM) | Approved — FIPS 203 | Key encapsulation | Pilot by [Target Date] |
| CRYSTALS-Dilithium (ML-DSA) | Approved — FIPS 204 | Digital signatures | Pilot by [Target Date] |
| SPHINCS+ (SLH-DSA) | Approved — FIPS 205 | Stateless hash-based signatures | Evaluate by [Target Date] |

[Organization Name] shall maintain a **Cryptographic Inventory** (Appendix A) and conduct an annual PQC readiness assessment to track migration progress.

### 5.3 Prohibited Algorithms

The following algorithms are explicitly prohibited and must not be used in any new or existing [Organization Name] system:

| Prohibited Algorithm / Protocol | Reason for Prohibition |
|---|---|
| DES / 3DES | Insufficient key length; NIST deprecated 2023 |
| RC4 | Known cryptographic weaknesses |
| MD5 | Collision attacks demonstrated; not collision resistant |
| SHA-1 | Deprecated; collision attacks demonstrated |
| RSA < 2048-bit | Insufficient key length |
| SSL 2.0 / SSL 3.0 | Critically vulnerable (POODLE, DROWN) |
| TLS 1.0 / TLS 1.1 | Deprecated per RFC 8996 |
| Blowfish | Block size vulnerability (SWEET32) |
| ECB mode (any cipher) | Does not provide semantic security |
| Dual EC DRBG | Backdoored pseudorandom number generator |
| Custom / proprietary algorithms | Unreviewed; no assurance of security |

---

## 6. Key Management Responsibilities

*Define who is accountable for each aspect of cryptographic key management. This section must clearly delineate roles to satisfy audit requirements under Act 854 s18 and s24.*

### 6.1 Policy Statement

All cryptographic keys used within [Organization Name] systems shall be generated, stored, distributed, used, and destroyed in accordance with NIST SP 800-57 and this policy. Keys protecting NCII data must be stored in FIPS 140-3 Level 2 (minimum) validated Hardware Security Modules (HSMs) or equivalent approved key stores.

### 6.2 Key Management Principles

- **Separation of Duties:** Key generation, distribution, and authorisation shall be performed by different individuals. No single person shall have sole control over the lifecycle of any cryptographic key protecting NCII data.
- **Dual Control:** All operations on Master Keys or Key Encryption Keys (KEKs) shall require the simultaneous participation of at least two authorised Key Custodians.
- **Least Privilege:** Access to cryptographic keys shall be restricted to the minimum number of personnel required for operational necessity.
- **Auditability:** All key management operations (generation, import, export, rotation, destruction) shall be logged in an immutable audit trail.
- **No Key Disclosure:** Plaintext cryptographic keys shall never be transmitted electronically, stored in source code, configuration files, or version control systems.

### 6.3 Key Custodian Responsibilities

| Responsibility | Description |
|---|---|
| Key Generation | Generate keys using approved algorithms and entropy sources within HSM or approved key management system |
| Key Registration | Record key metadata (type, algorithm, length, creation date, expiry, custodian) in the Cryptographic Key Register |
| Key Storage | Ensure keys are stored only in approved HSMs or encrypted key vaults; never in plaintext |
| Key Distribution | Distribute keys using approved key-wrapping techniques or secure out-of-band channels |
| Key Activation | Activate keys in accordance with the approved key schedule and change management process |
| Key Rotation | Rotate keys in accordance with the schedules defined in Section 10 |
| Key Revocation | Revoke compromised or expired keys and trigger incident response procedures |
| Key Destruction | Securely destroy retired keys and obtain destruction certificates |
| Incident Reporting | Report any suspected or actual key compromise to the CISO immediately |

### 6.4 Master Key and KEK Management

- **Master Keys** shall be generated within an HSM and shall never exist in plaintext outside the HSM boundary.
- **Key Encryption Keys (KEKs)** shall be used to wrap Data Encryption Keys (DEKs) for storage. KEKs shall be protected by Master Keys within the HSM.
- **Key Splitting / Secret Sharing:** Where HSM is not available for Master Key storage, key splitting using Shamir's Secret Sharing (minimum 3-of-5 shares) shall be employed with shares held by geographically separated Key Custodians.
- **Key Custodian Register:** [Organization Name] shall maintain a current register of all appointed Key Custodians. The register shall be reviewed semi-annually by the CISO.

### 6.5 Key Storage Requirements

| Key Type | Minimum Storage Standard | Approved Storage Locations |
|---|---|---|
| Master Keys / Root KEKs | FIPS 140-3 Level 3 HSM | [List approved HSM locations] |
| Key Encryption Keys (KEKs) | FIPS 140-3 Level 2 HSM | [List approved HSM locations] |
| Data Encryption Keys (DEKs) | Encrypted by KEK; stored in approved key management system | [List approved KMS systems] |
| TLS Private Keys | FIPS 140-3 Level 2 HSM or software token (confidential systems) | [List approved locations] |
| SSH Private Keys | Encrypted key file with passphrase; HSM preferred | [List approved locations] |
| API Keys / Secrets | Approved secrets management system (e.g., HashiCorp Vault, AWS Secrets Manager) | [List approved systems] |
| Backup Keys | Encrypted; physically secured; dual-control access | [List approved secure storage] |

---

## 7. Certificate Management Requirements

*Define the full lifecycle management requirements for digital certificates, including issuance, monitoring, renewal, and revocation. Certificate expiry failures are a common audit finding.*

### 7.1 Policy Statement

[Organization Name] shall maintain a formal Certificate Management System (CMS) to track, monitor, and manage all digital certificates used within its information systems. Unmanaged or expired certificates represent a critical control failure and may result in service disruption and regulatory non-compliance.

### 7.2 Certificate Authority (CA) Hierarchy

*Document the organization's PKI hierarchy. Adapt tiers based on actual implementation.*

| CA Tier | CA Name / Description | Purpose | Trust Anchor |
|---|---|---|---|
| Root CA | [Root CA Name] | Offline root; issues Intermediate CA certificates only | [Internal / External / NACSA-recognized] |
| Intermediate CA — External | [Trusted Public CA, e.g., DigiCert, Sectigo] | Public-facing TLS certificates | Publicly trusted |
| Intermediate CA — Internal | [Internal Issuing CA Name] | Internal systems, code signing, S/MIME | [Organization Name] Root CA |
| Issuing CA | [Issuing CA Name(s)] | Leaf certificate issuance | Subordinate to Intermediate CA |

### 7.3 Certificate Standards

| Attribute | Requirement |
|---|---|
| **Minimum Key Length (RSA)** | 3072-bit (4096-bit for Root and Intermediate CAs) |
| **Minimum Key Length (ECDSA)** | P-256 minimum; P-384 preferred for high-assurance |
| **Signature Algorithm** | SHA-256 minimum; SHA-384 preferred |
| **Maximum Validity Period — Public TLS** | 398 days (per CA/Browser Forum Baseline Requirements) |
| **Maximum Validity Period — Internal** | [Define, e.g., 2 years for servers, 3 years for internal CAs] |
| **Maximum Validity Period — Root CA** | [Define, e.g., 10 years] |
| **Certificate Type — Public Facing** | DV (minimum), OV (preferred), EV (for high-trust services) |
| **Subject Alternative Names (SAN)** | Mandatory; Common Name alone is deprecated |
| **Certificate Transparency (CT) Logging** | Mandatory for all publicly trusted certificates |

### 7.4 Certificate Inventory and Monitoring

- [Organization Name] shall maintain a **Certificate Inventory Register** (Appendix B) containing all certificates in use, including expiry dates, responsible owners, and renewal status.
- The [Designated Team / Tool Name] shall perform automated monitoring of all certificate expiry dates and shall generate alerts at **60 days, 30 days, 14 days**, and **7 days** prior to expiry.
- Certificates shall be renewed no later than **30 days** before expiry for public-facing systems and **14 days** for internal systems.
- Discovery scans for unmanaged certificates shall be conducted [monthly / quarterly].

### 7.5 Certificate Issuance and Approval

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Certificate Signing Request (CSR) generated with approved key parameters | System/Application Owner |
| 2 | CSR reviewed for compliance with this policy | Security Operations / PKI Team |
| 3 | Business justification and approval obtained | [Approver Role] |
| 4 | Certificate requested from approved CA | PKI Administrator |
| 5 | Certificate installed and validated | System/Application Owner |
| 6 | Certificate recorded in Certificate Inventory Register | PKI Administrator |

### 7.6 Certificate Revocation

- Certificates shall be revoked immediately upon confirmation of: private key compromise, CA compromise, change in system ownership, decommissioning of the associated system, or material change in the certificate subject.
- Revocation requests shall be submitted to the issuing CA within **[X hours]** of discovery.
- Certificate Revocation Lists (CRLs) and Online Certificate Status Protocol (OCSP) shall be configured and operational for all PKI-issued certificates.
- OCSP stapling shall be enabled on all TLS-terminated services.
- A **Certificate Revocation Incident** shall be raised in the Incident Management System for all revocations of certificates protecting NCII systems.

### 7.7 Code Signing Certificates

- All software, scripts, and packages deployed to NCII production systems shall be digitally signed using [Organization Name]-approved code signing certificates.
- Code signing private keys shall be stored exclusively in HSM or approved secure enclaves.
- Code signing certificates shall have a maximum validity of **[Define, e.g., 3 years]** and shall use timestamp countersignatures to ensure signature validity beyond certificate expiry.

---

## 8. TLS/SSL Standards

*Define the minimum acceptable TLS configuration for all services. Weak cipher suites and deprecated protocol versions are among the most common vulnerabilities in financial sector environments.*

### 8.1 Policy Statement

All network communications involving NCII data or authentication credentials shall be protected using Transport Layer Security (TLS). The use of unencrypted protocols (HTTP, FTP, Telnet, SMTP without STARTTLS) for transmitting sensitive data is strictly prohibited.

### 8.2 Approved TLS Protocol Versions

| Protocol Version | Status | Notes |
|---|---|---|
| TLS 1.3 | **Required for all new implementations** | Mandatory for external-facing services from [Target Date] |
| TLS 1.2 | Permitted (with restricted cipher suites) | Permissible for legacy system compatibility; must be reviewed annually |
| TLS 1.1 | **Prohibited** | Deprecated per RFC 8996; must be disabled |
| TLS 1.0 | **Prohibited** | Deprecated per RFC 8996; must be disabled |
| SSL 3.0 and earlier | **Prohibited** | Critically vulnerable; must be disabled |

### 8.3 Approved TLS 1.3 Cipher Suites

| Cipher Suite | Notes |
|---|---|
| `TLS_AES_256_GCM_SHA384` | Preferred |
| `TLS_CHACHA20_POLY1305_SHA256` | Approved |
| `TLS_AES_128_GCM_SHA256` | Permitted for compatibility |

### 8.4 Approved TLS 1.2 Cipher Suites (Legacy Compatibility Only)

*Only the following cipher suites are permitted when TLS 1.2 is unavoidable. All others must be disabled.*

| Cipher Suite | Key Exchange | Encryption | MAC | Notes |
|---|---|---|---|---|
| `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384` | ECDHE | AES-256-GCM | SHA-384 | Preferred |
| `TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384` | ECDHE | AES-256-GCM | SHA-384 | Preferred |
| `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256` | ECDHE | AES-128-GCM | SHA-256 | Permitted |
| `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256` | ECDHE | AES-128-GCM | SHA-256 | Permitted |
| `TLS_DHE_RSA_WITH_AES_256_GCM_SHA384` | DHE (≥3072-bit) | AES-256-GCM | SHA-384 | Permitted |

### 8.5 Prohibited TLS Configurations

| Configuration | Reason |
|---|---|
| NULL cipher suites | No encryption |
| EXPORT-grade cipher suites | Intentionally weakened (FREAK attack) |
| RC4-based cipher suites | Stream cipher vulnerability |
| DES / 3DES cipher suites | SWEET32 attack |
| CBC mode cipher suites without Encrypt-then-MAC | BEAST, Lucky-13 attacks |
| Anonymous Diffie-Hellman (ADH) | No server authentication |
| RSA key exchange (non-ephemeral) | No forward secrecy |
| DH parameters < 3072-bit | Logjam attack |
| Compression (CRIME/BREACH) | Side-channel leakage |

### 8.6 Additional TLS Hardening Requirements

| Control | Requirement |
|---|---|
| **Perfect Forward Secrecy (PFS)** | Mandatory for all TLS connections using ephemeral key exchange (ECDHE / DHE) |
| **Certificate Verification** | Full chain validation mandatory; self-signed certificates prohibited on external or inter-system connections |
| **HSTS (HTTP Strict Transport Security)** | Mandatory on all public-facing HTTPS services; minimum `max-age=31536000`; `includeSubDomains` where applicable |
| **OCSP Stapling** | Enabled on all TLS-terminated services |
| **Session Resumption** | TLS session tickets permitted for TLS 1.3; session IDs must respect key rotation schedules |
| **Mutual TLS (mTLS)** | Required for all machine-to-machine API communications involving NCII data |
| **Certificate Pinning** | Required for high-risk mobile and embedded NCII applications; evaluated case-by-case |
| **TLS Inspection (MITM Proxies)** | Permitted only with formal policy exception, explicit user notification where legally required, and equivalent cipher strength at inspection points |

### 8.7 TLS Configuration Review

All public-facing and NCII-connected TLS endpoints shall be scanned quarterly using an approved TLS assessment tool (e.g., SSL Labs, Qualys, Nessus TLS scan). A minimum rating of **[A / A+]** on SSL Labs (or equivalent benchmark) is required. Findings rated below this threshold shall be remediated within **[Define SLA, e.g., 30 days for High, 90 days for Medium]**.

---

## 9. Data-at-Rest Encryption Requirements

*Define encryption requirements by data classification and system type. This section must be specific enough to guide implementation teams and demonstrate control to auditors.*

### 9.1 Policy Statement

All data classified as Restricted, Confidential, or Sensitive (as defined in [Organization Name]'s Data Classification Policy) shall be encrypted at rest using approved algorithms and key lengths defined in Section 5. Encryption shall be applied at the appropriate layer to ensure that data remains protected from unauthorized access even in the event of physical storage media theft or unauthorized system access.

### 9.2 Encryption Requirements by Data Classification

| Data Classification | Encryption at Rest Required | Minimum Algorithm | Notes |
|---|---|---|---|
| **Restricted** | **Mandatory** | AES-256 | NCII data; personal data; financial records; credentials |
| **Confidential** | **Mandatory** | AES-256 | Internal business-sensitive data |
| **Sensitive / Internal** | **Mandatory** | AES-128 minimum; AES-256 preferred | Internal operational data |
| **Public** | Not required | — | Publicly available data with no confidentiality requirement |

### 9.3 Encryption Requirements by System Type

| System / Component | Encryption Requirement | Approved Method | Notes |
|---|---|---|---|
| **Production Databases (NCII)** | AES-256 column/tablespace encryption | Transparent Data Encryption (TDE) or application-level | Key must be stored in HSM |
| **Database Backups** | AES-256 | Backup tool encryption + encrypted transport | Separate encryption key from production DEK |
| **Object / Blob Storage** | AES-256 SSE | Server-Side Encryption with customer-managed keys | Keys in approved KMS |
| **File Servers / NAS** | AES-256 | Full volume encryption or per-file encryption | |
| **Laptops / Endpoints** | AES-256 full disk | BitLocker, FileVault, or MDM-enforced equivalent | Recovery key escrowed to [Approved System] |
| **Removable Media / USB** | AES-256 | Hardware or software encryption enforced by endpoint DLP | Unencrypted USB prohibited for NCII data |
| **Backup Tapes / Offline Media** | AES-256 | Encrypted before removal from secure facility | Key stored separately from media |
| **Virtual Machine Disk Images** | AES-256 | Hypervisor-level encryption or guest OS encryption | |
| **Container Persistent Volumes** | AES-256 | Encrypted storage class; secrets in approved vault | Secrets never in container images |
| **Log Archives** | AES-256 | Encrypted at ingestion to SIEM / log store | Integrity-protected (HMAC or digital signature) |
| **Cryptographic Key Backups** | AES-256 (key-wrapping) | HSM export in encrypted format; dual-control | |

### 9.4 Sensitive Data Field Encryption

For databases containing NCII or personally identifiable information (PII), the following field-level encryption requirements apply in addition to tablespace or volume encryption:

| Data Field Type | Field-Level Encryption Required | Notes |
|---|---|---|
| National identity numbers (MyKAD, Passport) | **Mandatory** | AES-256 GCM with field-specific key |
| Payment card numbers (PAN) | **Mandatory** | Per PCI-DSS Requirement 3; tokenization preferred |
| Bank account numbers | **Mandatory** | AES-256 GCM |
| Authentication credentials (passwords, PINs) | **Mandatory** | Argon2id hashing; never encrypted-reversibly |
| Biometric data | **Mandatory** | AES-256 GCM; separate key from other PII |
| Cryptographic keys stored in database | **Mandatory** | AES-256 key-wrapping (KEK) |
| Health / medical records | **Mandatory** | AES-256 GCM |

### 9.5 Encryption Key Separation

Encryption keys protecting data at rest shall be stored separately from the encrypted data they protect. Co-location of data and its decryption key on the same unprotected storage medium is prohibited.

---

## 10. Cryptographic Key Lifecycle

*Document the end-to-end lifecycle of cryptographic keys from generation to destruction. Key lifecycle management gaps are a frequent finding in NACSA and BNM audits.*

### 10.1 Key Lifecycle Stages

The lifecycle of every cryptographic key managed by [Organization Name] shall progress through the following formally controlled stages:

```
Generation → Registration → Distribution → Activation → Use → 
Rotation/Suspension → Deactivation → Destruction → Archival
```

### 10.2 Key Generation

- All cryptographic keys shall be generated using a FIPS 140-3 validated cryptographic module or HSM.
- Key generation shall use an approved Cryptographically Secure Pseudo-Random Number Generator (CSPRNG).
- Key generation events shall be logged with timestamp, key type, algorithm, key length, generating system, and authorising personnel.
- For Master Keys and KEKs, key generation ceremonies shall be conducted with at least **[Number, e.g., 3]** authorised Key Custodians present, with the ceremony formally documented and signed.

### 10.3 Key Registration

Upon generation, all cryptographic keys shall be registered in the **Cryptographic Key Register** (Appendix A) with the following minimum metadata:

| Field | Description |
|---|---|
| Key ID | Unique identifier |
| Key Type | Master Key / KEK / DEK / Session Key / Signing Key / etc. |
| Algorithm | e.g., AES-256, RSA-4096, ECDSA-P384 |
| Purpose | Data encryption, signing, key wrapping, etc. |
| Associated System / Application | |
| Key Custodian(s) | |
| Creation Date | |
| Activation Date | |
| Scheduled Rotation Date | |
| Expiry / Deactivation Date | |
| Status | Active / Suspended / Deactivated / Destroyed |
| Storage Location | HSM slot / KMS reference |
| Classification | Restricted |

### 10.4 Key Rotation Schedule

*Key rotation frequency shall be proportional to the sensitivity of the data protected and the volume of data encrypted. The following are minimum requirements.*

| Key Type | Maximum Key Age (Rotation Frequency) | Trigger for Immediate Rotation |
|---|---|---|
| Master Keys / Root KEKs | 2 years | Suspected compromise; HSM hardware failure; key custodian departure |
| Key Encryption Keys (KEKs) | 1 year | Suspected compromise; system re-platforming |
| Data Encryption Keys (DEKs) — Database | 1 year | Suspected compromise; data breach; staff with access departs |
| Data Encryption Keys (DEKs) — Backup | 1 year | Aligned with database DEK rotation |
| TLS Private Keys | Per certificate validity; maximum 1 year for NCII systems | Suspected compromise; certificate mis-issuance |
| API Keys | 90 days | Suspected compromise; staff departure; third-party access termination |
| SSH Keys | 1 year | Staff departure; suspected compromise |
| Session Keys | Per-session (ephemeral) | N/A |
| Code Signing Keys | 3 years | Suspected compromise; CA compromise |

### 10.5 Key Suspension and Revocation

- Keys shall be **suspended** when there is a reasonable suspicion of compromise pending investigation.
- Suspended keys may be reinstated if the investigation confirms no compromise.
- Keys shall be **revoked** when compromise is confirmed, when the associated system is decommissioned, or when the key reaches end-of-life.
- Revocation of a DEK shall trigger re-encryption of all data it protected using a new DEK.
- Revocation of a KEK shall trigger immediate unwrapping and re-wrapping of all DEKs protected by that KEK.

### 10.6 Key Deactivation and Destruction

- Keys shall be **deactivated** at the end of their operational period. Deactivated keys may be retained for decryption of legacy data but shall not be used for new encryption operations.
- Keys shall be **destroyed** when they are no longer required for any operational or archival purpose, as determined by the Data Retention Policy \[[Document ID]\].
- Key destruction shall be performed within the HSM using the HSM's secure deletion function. For software key stores, destruction shall use cryptographic erasure.
- **Destruction certificates** shall be obtained and filed for all destroyed Master Keys and KEKs.
- Destruction events shall be logged and witnessed by at least two authorised Key Custodians.

### 10.7 Key Archival

- Deactivated keys that are required for decryption of archived, legally-held, or regulatory-retained data shall be archived in the [Designated Secure Archive System].
- Archived keys shall be stored encrypted under a dedicated Archival KEK.
- Access to archived keys shall require dual-control authorisation from the CISO and [Role].
- Archived key access events shall be logged.

---

## 11. Roles and Responsibilities

*Assign accountability for cryptography governance clearly. This RACI table should be reviewed whenever there are organisational changes.*

### 11.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | CISO | Security Architecture | PKI / Crypto Team | Security Operations | IT Operations | System / App Owners | Internal Audit | Compliance |
|---|---|---|---|---|---|---|---|---|
| Cryptographic policy ownership and approval | **A** | C | C | I | I | I | C | C |
| Selection and approval of cryptographic algorithms | A | **R** | R | C | I | C | I | C |
| HSM procurement and management | A | C | **R** | C | R | I | I | I |
| Key generation and registration | A | C | **R** | C | I | I | I | I |
| Key custodian appointment | **A** | C | R | I | I | I | I | I |
| Key rotation execution | A | C | **R** | C | R | C | I | I |
| Certificate issuance | A | C | **R** | C | R | C | I | I |
| Certificate inventory maintenance | A | C | **R** | R | I | C | I | I |
| Certificate renewal monitoring | A | I | **R** | R | I | C | I | I |
| TLS configuration on systems | A | C | C | C | **R** | R | I | I |
| TLS security scanning and assessment | A | C | C | **R** | I | I | I | C |
| Cryptographic incident response | **A** | C | R | R | R | C | I | C |
| Annual cryptographic review | **A** | R | R | C | C | C | C | R |
| Cryptographic compliance reporting to NACSA | **A** | C | C | C | I | I | C | R |
| Prohibition enforcement on deprecated algorithms | **A** | R | R | C | R | R | I | C |
| PQC readiness assessment | **A** | R | R | C | I | C | C | C |
| Staff awareness and training | A | C | C | I | I | **R** | I | C |

### 11.2 Role Descriptions

| Role | Cryptography-Specific Responsibilities |
|---|---|
| **Chief Information Security Officer (CISO)** | Ultimate accountability for this policy; approves exceptions; escalates non-compliance; reports to Board/NACSA |
| **Security Architecture Team** | Design of cryptographic controls for systems; algorithm selection; cryptographic standards review |
| **PKI / Cryptography Operations Team** | Day-to-day HSM management; key lifecycle operations; certificate issuance and renewal; key custodian duties |
| **Security Operations Centre (SOC)** | Monitoring for cryptographic anomalies; TLS scanning; incident detection involving crypto failures |
| **IT Operations** | TLS configuration on servers and load balancers; OS-level encryption (BitLocker, LUKS); backup encryption |
| **System / Application Owners** | Ensuring applications implement approved algorithms; responsible for their system's certificate renewal |
| **Internal Audit** | Independent assurance that cryptographic controls are implemented per this policy |
| **Compliance Team** | Regulatory reporting; policy alignment with NACSA, BNM RMiT, PDPA requirements |

---

## 12. Compliance, Monitoring, and Enforcement

### 12.1 Compliance Measurement

Compliance with this policy shall be assessed through the following mechanisms:

| Assessment Method | Frequency | Owner | Output |
|---|---|---|---|
| Automated TLS / cipher suite scanning | Quarterly | Security Operations | Vulnerability report; remediation tracking |
| Cryptographic algorithm audit (system inventory review) | Annual | Security Architecture | Cryptographic compliance report |
| Certificate expiry monitoring | Continuous (automated) | PKI / Crypto Team | Alerts and renewal tickets |
| Key management procedure review | Annual | CISO / PKI Team | Key management audit report |
| HSM health and integrity check | Monthly | PKI / Crypto Team | HSM status report |
| Third-party / vendor cryptographic compliance assessment | Annual | Compliance Team | Vendor risk report |
| Penetration testing (cryptographic focus) | Annual | Security Architecture (commissioned) | Penetration test report |

### 12.2 Key Performance Indicators (KPIs)

| KPI | Target | Measurement Method |
|---|---|---|
| Percentage of NCII systems using TLS 1.2+ | 100% | Automated TLS scanner |
| Percentage of NCII systems using TLS 1.3 | ≥ [Target, e.g., 90%] by [Date] | Automated TLS scanner |
| Percentage of certificates renewed before expiry | 100% | Certificate inventory report |
| Certificate expiry incidents (unplanned) | 0 per year | Incident register |
| Key rotation completed on schedule | 100% | Key register review |
| Number of prohibited algorithm findings remediated within SLA | 100% within [30/90] days | Vulnerability tracker |
| Cryptographic incidents | 0 critical per year | Incident register |

### 12.3 Non-Compliance and Enforcement

Non-compliance with this policy shall be handled in accordance with [Organization Name]'s Information Security Disciplinary Procedure \[[Document ID]\]:

- **Inadvertent non-compliance** discovered through self-reporting or audit: Remediation plan required within [e.g., 5 business days]; CISO notified.
- **Wilful or negligent non-compliance:** Escalation to HR and Legal; potential disciplinary action.
- **Non-compliance by third parties / vendors:** Remediation mandated per contractual SLA; escalation to Vendor Risk Management; potential contract termination.
- **Non-compliance constituting a reportable incident under Act 854:** NACSA notification in accordance with the Incident Response Policy.

---

## 13. Exceptions and Waivers

### 13.1 Exception Process

*Exceptions to this policy must never be granted as a matter of convenience. All exceptions require documented risk acceptance.*

Exceptions to the requirements of this policy may only be granted under the following conditions:

1. A formal **Exception Request** is submitted by the System/Application Owner to the CISO, using the template at Appendix C.
2. The Exception Request documents: the specific policy requirement that cannot be met; the technical or business justification; the compensating controls in place; the duration of the exception; and the risk acceptance sign-off.
3. The CISO (or delegate) reviews and approves or rejects the request.
4. Approved exceptions are recorded in the **Policy Exception Register** (Appendix C).
5. All approved exceptions are reviewed at **[Define, e.g., quarterly]** intervals and renewed only if justification remains valid.
6. No exception shall be granted for the use of algorithms listed as **Prohibited** in Section 5.3 unless approved at [Executive / Board] level with documented NACSA engagement.

### 13.2 Exception Register Summary

*The full exception register is maintained separately. A summary shall be included in annual policy review reports.*

| Exception ID | System / Scope | Policy Requirement Excepted | Compensating Control | Approved By | Expiry Date | Review Date |
|---|---|---|---|---|---|---|
| [EXC-001] | [System Name] | [e.g., TLS 1.2 required due to legacy dependency] | [Describe compensating control] | [CISO Name] | [Date] | [Date] |

---

## 14. Review and Approval

### 14.1 Policy Review Schedule

This policy shall be reviewed:

- **Annually** from the effective date, as a minimum.
- Upon significant changes to the regulatory landscape (e.g., new NACSA directives, BNM circulars, amendments to Act 854).
- Following a major cryptographic incident or key compromise.
- When new cryptographic vulnerabilities are disclosed that impact algorithms or protocols in use.
- Upon significant changes to [Organization Name]'s technology architecture.

### 14.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version — approved for release |
| [x.x] | [Date] | [Author Name], [Title] | [Description of changes] |

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by | [Name], [Title] | | [Date] |
| Reviewed by | [Name], Security Architecture Lead | | [Date] |
| Reviewed by | [Name], Head of Compliance | | [Date] |
| Reviewed by | [Name], Internal Audit | | [Date] |
| Approved by | [Name], Chief Information Security Officer | | [Date] |
| Endorsed by | [Name], [CTO / CRO / CEO as applicable] | | [Date] |

---

## 15. References

### 15.1 Primary Legislation

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Cybersecurity measures for NCII entities — mandates implementation of technical and organisational controls commensurate with cybersecurity risks, including cryptographic controls for protection of NCII data |
| **Cyber Security Act 2024 (Act 854), Section 24** | Compliance and audit obligations — NCII entities must be able to demonstrate to NACSA that controls including cryptography are implemented effectively and maintained |
| **Personal Data Protection Act 2010 (Act 709), Section 9** | Security Principle — personal data must be protected against loss, misuse, modification, or unauthorised access through appropriate technical safeguards including encryption |
| **Bank Negara Malaysia RMiT Policy Document (2023)** | Paragraphs 10.18–10.30 (Cryptography); mandates encryption for customer and financial data and approved algorithm usage |
| **Payment Card Industry Data Security Standard v4.0** | Requirements 3 (Protect Stored Account Data) and 4 (Protect Cardholder Data with Strong Cryptography During Transmission Over Open Networks) |

### 15.2 Standards and Guidelines

| Reference | Description |
|---|---|
| NIST SP 800-57 Parts 1–3 | Recommendations for Cryptographic Key Management |
| NIST SP 800-131A Rev. 2 | Transitioning the Use of Cryptographic Algorithms and Key Lengths |
| NIST FIPS 140-3 | Security Requirements for Cryptographic Modules |
| NIST FIPS 197 | Advanced Encryption Standard (AES) |
| NIST SP 800-132 | Recommendation for Password-Based Key Derivation |
| NIST FIPS 203, 204, 205 | Post-Quantum Cryptography Standards (ML-KEM, ML-DSA, SLH-DSA) |
| ISO/IEC 27001:2022 | Annex A, Control 8.24 — Use of Cryptography |
| ISO/IEC 27002:2022 | Section 8.24 — Implementation Guidance for Use of Cryptography |
| IETF RFC 8446 | The Transport Layer Security (TLS) Protocol Version 1.3 |
| IETF RFC 8996 | Deprecating TLS 1.0 and TLS 1.1 |
| IETF RFC 5280 | Internet X.509 Public Key Infrastructure Certificate and CRL Profile |
| CA/Browser Forum Baseline Requirements | Requirements for publicly trusted TLS certificates |
| OWASP Cryptographic Storage Cheat Sheet | Practical guidance for cryptographic implementation |
| NACSA National Cybersecurity Policy | Pillar 3 — Secure Cyberspace directives |

---

## 16. Appendices

### Appendix A — Cryptographic Key Register

*The Cryptographic Key Register is a live document maintained by the PKI / Cryptography Operations Team. The register is classified Restricted and is stored in [Location / System]. This appendix provides the register schema.*

| Field | Description | Example |
|---|---|---|
| Key ID | Unique key identifier | KEY-2024-0001 |
| Key Label / Name | Human-readable descriptor | PROD-DB-DEK-001 |
| Key Type | Classification of key | DEK |
| Algorithm | Cryptographic algorithm | AES-256-GCM |
| Key Length (bits) | | 256 |
| Purpose | Operational use | Database encryption — production customer records |
| Associated System | System or application using the key | [System Name] |
| Storage Location | Where the key is stored | HSM Slot [X] / KMS Key ARN |
| Key Custodian (Primary) | | [Name], [Title] |
| Key Custodian (Secondary) | | [Name], [Title] |
| Creation Date | | YYYY-MM-DD |
| Activation Date | | YYYY-MM-DD |
| Scheduled Rotation Date | | YYYY-MM-DD |
| Last Rotated | | YYYY-MM-DD |
| Expiry / Deactivation Date | | YYYY-MM-DD |
| Status | Current state | Active |
| Classification | | Restricted |
| Notes | | |

---

### Appendix B — Certificate Inventory Register

*The Certificate Inventory Register is maintained by the PKI / Cryptography Operations Team and updated continuously via automated discovery and manual registration. This appendix provides the register schema.*

| Field | Description |
|---|---|
| Certificate ID | Unique internal identifier |
| Common Name (CN) / Subject | Certificate subject |
| Subject Alternative Names (SANs) | All hostnames covered |
| Certificate Type | TLS / Code Signing / S/MIME / CA |
| Issuing CA | |
| Serial Number | |
| Thumbprint (SHA-256) | |
| Key Algorithm | RSA-4096 / ECDSA-P384 / etc. |
| Valid From | YYYY-MM-DD |
| Valid To (Expiry) | YYYY-MM-DD |
| Days Until Expiry | Calculated field |
| Renewal Status | Current / Renewal in Progress / Expired |
| Associated System / Service | |
| Certificate Owner | Business unit responsible for renewal |
| Storage Location | HSM / Certificate Store / PEM file location |
| Auto-Renewal Configured | Yes / No |
| Notes | |

---

### Appendix C — Policy Exception Request Form

*Complete this form and submit to the CISO for all requests to deviate from this policy. Exceptions must not be acted upon until written approval is received.*

**Exception Request Reference:** EXC-[YYYY]-[NNN]

| Field | Details |
|---|---|
| **Date of Request** | [Date] |
| **Requested By** | [Name, Title, Department] |
| **System / Application Scope** | [Identify the specific system or scope affected] |
| **Policy Section(s) Affected** | [Reference specific section, e.g., Section 8.2 — TLS 1.3 requirement] |
| **Description of Non-Compliance** | [Describe exactly how the system deviates from policy] |
| **Business / Technical Justification** | [Explain why the policy requirement cannot be met] |
| **Risk Assessment Summary** | [Summarise the risk introduced by this exception; reference formal risk assessment if available] |
| **Compensating Controls** | [Describe mitigating controls that reduce the risk of the exception] |
| **Requested Duration** | [Start Date] to [End Date] — maximum 12 months |
| **Remediation Plan** | [Describe steps and timeline to achieve policy compliance] |
| **Requestor Signature** | [Signature] [Date] |
| **CISO Decision** | ☐ Approved ☐ Rejected ☐ Approved with Conditions |
| **Conditions (if applicable)** | [Any conditions attached to approval] |
| **CISO Signature** | [Signature] [Date] |
| **Next Review Date** | [Date] |

---

### Appendix D — Cryptographic Incident Response Checklist

*To be used when a cryptographic key compromise, certificate compromise, or cryptographic control failure is suspected. Refer to the Incident Response Policy \[[Document ID]\] for full procedures.*

- [ ] Identify and isolate affected system(s)
- [ ] Raise a P1 Security Incident in the Incident Management System
- [ ] Notify CISO and Security Operations within [X hours]
- [ ] Identify all data encrypted under the compromised key
- [ ] Suspend the compromised key immediately in the KMS / HSM
- [ ] Initiate emergency key rotation for the compromised key and all keys derived from it
- [ ] Re-encrypt all data previously encrypted under the compromised key with a new key
- [ ] Revoke any digital certificates whose private key may have been compromised
- [ ] Notify affected Certificate Authority of revocation requirement
- [ ] Assess whether NACSA notification is required under Act 854
- [ ] Assess whether BNM notification is required under RMiT
- [ ] Assess whether PDPC notification is required under PDPA (if personal data involved)
- [ ] Preserve forensic evidence in accordance with Evidence Handling Procedures
- [ ] Conduct post-incident review within [X days] of resolution
- [ ] Update Cryptographic Key Register with incident details
- [ ] Document lessons learned and update this policy if required

---

### Appendix E — Approved Cryptographic Tools and Products Register

*This register lists the HSMs, KMS platforms, TLS libraries, and cryptographic tools approved for use within [Organization Name]. This list is reviewed annually by the Security Architecture Team.*

| Tool / Product | Category | Version | Approval Status | FIPS 140-3 Level | Approved Use Case | Notes |
|---|---|---|---|---|---|---|
| [HSM Vendor / Model] | Hardware Security Module | [Version] | Approved | Level [2/3] | Master Key / KEK storage | |
| [KMS Platform, e.g., HashiCorp Vault] | Key Management System | [Version] | Approved | — | DEK management, secrets | |
| [CA Platform, e.g., EJBCA, ADCS] | Certificate Authority | [Version] | Approved | — | Internal PKI | |
| [TLS Library, e.g., OpenSSL 3.x] | TLS Library | [Version] | Approved | — | Application TLS | Ensure version is actively maintained |
| [Public CA, e.g., DigiCert, Sectigo] | External CA | — | Approved | — | Public-facing TLS certificates | |
| [ACME Client, e.g., Certbot] | Certificate Automation | [Version] | Approved | — | Automated certificate renewal | |
| [Secrets Manager, e.g., AWS Secrets Manager] | Secrets Management | — | Approved | — | API keys, credentials, tokens | |

---

*End of Document*

---

*This document is the property of **[Organization Name]**. It is classified **Confidential** and must be handled in accordance with the Data Classification and Handling Policy. Unauthorised disclosure, reproduction, or distribution is prohibited. For queries regarding this policy, contact the CISO at [CISO Contact Details].*