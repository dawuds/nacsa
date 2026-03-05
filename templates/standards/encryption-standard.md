# Encryption Standard

---

**[Organization Name]**
**Information Security & Compliance Division**

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Document Title** | Encryption Standard |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Category** | Standard |
| **Owner** | Security Architecture |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By — Title, Name] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) — NACSA |
| **Applicable Sections** | Section 18, Section 24 |
| **Status** | [Draft / Under Review / Approved] |

---

> **Document Control Notice:** This document is classified **Confidential** and intended solely for authorised personnel within [Organization Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. This standard is mandatory for all systems processing, storing, or transmitting National Critical Information Infrastructure (NCII) data.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Approved Cryptographic Algorithms](#5-approved-cryptographic-algorithms)
6. [Minimum Key Length Requirements by Use Case](#6-minimum-key-length-requirements-by-use-case)
7. [TLS Version Requirements](#7-tls-version-requirements)
8. [Data-at-Rest Encryption](#8-data-at-rest-encryption)
9. [Data-in-Transit Encryption](#9-data-in-transit-encryption)
10. [Certificate Requirements and Management](#10-certificate-requirements-and-management)
11. [Cryptographic Key Management Lifecycle](#11-cryptographic-key-management-lifecycle)
12. [Compliance and Non-Conformance](#12-compliance-and-non-conformance)
13. [Roles and Responsibilities](#13-roles-and-responsibilities)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*State the primary purpose of this standard — what it establishes and why it exists. Reference the regulatory obligation driving this document.*

This Encryption Standard establishes the mandatory cryptographic controls, approved algorithms, minimum key lengths, and implementation requirements that [Organization Name] must apply to protect National Critical Information Infrastructure (NCII) data. The standard ensures the confidentiality, integrity, and authenticity of information assets in alignment with obligations imposed under the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 24, as well as complementary requirements under the **Personal Data Protection Act 2010 (PDPA)** and **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document**.

This standard:

- Defines the minimum acceptable cryptographic algorithms and configurations for all [Organization Name] systems and services;
- Establishes controls to prevent the use of deprecated, weak, or prohibited cryptographic mechanisms;
- Provides implementation guidance for data protection across the information lifecycle (at rest, in transit, and in processing); and
- Supports [Organization Name]'s obligations as a NCII entity subject to NACSA oversight and reporting requirements.

---

## 2. Scope

*Define the boundaries of this standard — which systems, data types, entities, and personnel it applies to. Be explicit about what is and is not in scope.*

### 2.1 In Scope

This standard applies to:

- **All information systems**, applications, platforms, and infrastructure owned, operated, or managed by [Organization Name] that process, store, or transmit NCII data or personal data;
- **All employees, contractors, third-party service providers, and vendors** who design, build, operate, or maintain such systems;
- **All data classifications** at or above **[Confidential / Restricted / Internal]** as defined in the [Organization Name] Data Classification Policy;
- **All environments**, including production, pre-production, disaster recovery, and cloud-hosted environments;
- **All communication channels**, whether internal network, public internet, or interconnections with external parties, regulators, and financial market infrastructure; and
- **All cryptographic key material** generated, stored, exchanged, or destroyed in connection with the above systems.

### 2.2 Out of Scope

- Publicly available, non-sensitive information systems where no personal data or NCII data is processed;
- Legacy systems subject to a formally approved **Exception and Compensating Controls** process (refer to Section 12.2); and
- Research and development environments that do not connect to production networks and handle no live personal or NCII data.

### 2.3 Geographic and Jurisdictional Applicability

*Specify if this standard applies to overseas subsidiaries, branches, or outsourcing arrangements.*

This standard applies to all operations of [Organization Name] within Malaysia and, where data processed relates to Malaysian residents or NCII assets, to any overseas operations or third-party processors engaged by [Organization Name].

---

## 3. Regulatory and Policy Context

*Summarise the regulatory drivers, mapping each control in this standard to specific legislative or policy obligations. This section establishes the "why" behind the requirements.*

### 3.1 Legislative Framework

| Legislation / Policy | Relevant Provisions | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities must implement and maintain adequate cybersecurity measures, including cryptographic controls, to protect NCII |
| Cyber Security Act 2024 (Act 854) | Section 24 | Mandatory reporting and compliance obligations for NCII entities; cryptographic adequacy is a measurable compliance indicator |
| Personal Data Protection Act 2010 (Act 709) | Section 9 (Security Principle) | Personal data must be protected against loss, misuse, modification, unauthorised access, or disclosure |
| BNM RMiT Policy Document | 10.57, 10.58, 10.59 | Financial institutions must apply strong encryption for data protection; specific algorithm and key length guidance applies |
| ISO/IEC 27001:2022 | Annex A Control 8.24 | Use of cryptography must be governed by a cryptographic policy |
| NACSA Cybersecurity Baseline Controls | [Control Reference] | [Applicable baseline control description] |

### 3.2 Internal Policy Hierarchy

This standard operates within the following internal governance hierarchy:

```
Information Security Policy (Tier 1 — Policy)
    └── Encryption Standard (Tier 2 — Standard)  ← This Document
            └── Cryptographic Key Management Procedure (Tier 3 — Procedure)
            └── TLS Configuration Guideline (Tier 3 — Guideline)
            └── Certificate Lifecycle Management Procedure (Tier 3 — Procedure)
```

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation across all readers.*

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 |
| **AES** | Advanced Encryption Standard — a symmetric block cipher approved by NIST |
| **Algorithm** | A defined, finite sequence of operations for performing encryption, decryption, hashing, or key exchange |
| **CA** | Certificate Authority — an entity that issues digital certificates |
| **Certificate** | A digital document that binds a public key to an identity, signed by a trusted CA |
| **ECDH / ECDHE** | Elliptic Curve Diffie-Hellman (Ephemeral) — a key agreement protocol |
| **ECDSA** | Elliptic Curve Digital Signature Algorithm |
| **HSM** | Hardware Security Module — a physical device for secure key storage and cryptographic operations |
| **Key Rotation** | The process of replacing a cryptographic key with a new key on a scheduled or triggered basis |
| **KMS** | Key Management System / Service |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **NCII** | National Critical Information Infrastructure |
| **NIST** | National Institute of Standards and Technology (USA) — cryptographic standards body |
| **PKI** | Public Key Infrastructure |
| **PFS / FS** | Perfect Forward Secrecy / Forward Secrecy — ensures session keys cannot be compromised by future key disclosure |
| **RSA** | Rivest–Shamir–Adleman — an asymmetric cryptographic algorithm |
| **SHA** | Secure Hash Algorithm |
| **TLS** | Transport Layer Security — a cryptographic protocol for securing communications |
| **[Additional Term]** | [Definition] |

---

## 5. Approved Cryptographic Algorithms

*List all cryptographic algorithms explicitly approved for use within [Organization Name]. For each algorithm type (symmetric, asymmetric, hashing, key exchange), specify approved algorithms, prohibited algorithms, and any conditions of use. This section forms the core control list for audit purposes.*

### 5.1 Approved Algorithm Overview

[Organization Name] restricts the use of cryptographic algorithms to those listed in the tables below. Any algorithm not listed as **Approved** is considered **Prohibited** unless a formal exception has been granted under Section 12.2.

The approved algorithm set aligns with **NIST SP 800-131A Rev. 2**, **NACSA Cybersecurity Baseline Controls**, and **BNM RMiT** requirements.

---

### 5.2 Symmetric Encryption Algorithms

| Algorithm | Key Length | Mode | Status | Use Case |
|---|---|---|---|---|
| AES | 256-bit | GCM (preferred), CBC with HMAC | **Approved** | Data-at-rest, data-in-transit, file encryption |
| AES | 192-bit | GCM, CBC with HMAC | **Approved** | Permitted where 256-bit is technically infeasible; requires documented justification |
| AES | 128-bit | GCM, CBC with HMAC | **Conditionally Approved** | Legacy integration only; requires approved exception |
| 3DES (Triple DES) | 112-bit effective | Any | **Prohibited** | Deprecated — sweet32 vulnerability |
| DES | 56-bit | Any | **Prohibited** | Cryptographically broken |
| RC4 | Any | Any | **Prohibited** | Cryptographically broken |
| Blowfish | Any | Any | **Prohibited** | Deprecated |
| [Algorithm] | [Key Length] | [Mode] | [Status] | [Use Case] |

> **Note:** AES-GCM (Galois/Counter Mode) is the **preferred** mode for all new implementations as it provides authenticated encryption (AEAD), combining confidentiality and integrity in a single operation.

---

### 5.3 Asymmetric Encryption and Digital Signature Algorithms

| Algorithm | Minimum Key Length | Status | Use Case |
|---|---|---|---|
| RSA | 2048-bit (minimum); 4096-bit preferred | **Approved** | Key exchange, digital signatures, certificate signing |
| RSA | < 2048-bit | **Prohibited** | Insufficient security margin |
| ECDSA | P-256 (minimum); P-384 preferred | **Approved** | Digital signatures, TLS certificates |
| ECDH / ECDHE | P-256 (minimum); P-384 preferred | **Approved** | Key agreement, TLS key exchange |
| Ed25519 | 256-bit | **Approved** | Signatures in SSH, code signing |
| DSA | Any | **Prohibited** | Deprecated by NIST |
| [Algorithm] | [Key Length] | [Status] | [Use Case] |

---

### 5.4 Hash / Message Digest Algorithms

| Algorithm | Output Size | Status | Use Case |
|---|---|---|---|
| SHA-256 | 256-bit | **Approved** | General hashing, digital signatures, integrity verification |
| SHA-384 | 384-bit | **Approved** | Higher-assurance environments |
| SHA-512 | 512-bit | **Approved** | High-security hashing |
| SHA-3 (256, 384, 512) | Variable | **Approved** | Alternative to SHA-2 where required |
| HMAC-SHA-256 | 256-bit | **Approved** | Message authentication codes |
| SHA-1 | 160-bit | **Prohibited** | Cryptographically broken — collision attacks demonstrated |
| MD5 | 128-bit | **Prohibited** | Cryptographically broken |
| MD4 | 128-bit | **Prohibited** | Cryptographically broken |

> **Password Hashing:** For storing user passwords and credentials, use **bcrypt** (cost factor ≥ 12), **scrypt**, or **Argon2id**. SHA-based algorithms **must not** be used for password storage without a salt and appropriate key derivation function.

---

### 5.5 Key Derivation Functions (KDF)

| KDF | Status | Use Case |
|---|---|---|
| PBKDF2-HMAC-SHA-256 (≥ 310,000 iterations) | **Approved** | Password-based key derivation |
| bcrypt (cost ≥ 12) | **Approved** | Password hashing |
| Argon2id | **Approved** | Password hashing, key derivation |
| scrypt | **Approved** | Password hashing |
| HKDF (HMAC-SHA-256 / SHA-384) | **Approved** | Key derivation from existing key material |
| [KDF] | [Status] | [Use Case] |

---

### 5.6 Prohibited Algorithms and Configurations

The following are **absolutely prohibited** across all [Organization Name] systems and environments:

- **DES, 3DES, RC2, RC4, Blowfish** — deprecated symmetric ciphers
- **MD4, MD5, SHA-1** — as used for digital signatures or integrity verification
- **RSA < 2048-bit** — insufficient key length
- **Elliptic curves NIST P-192** or any non-standard / potentially backdoored curves
- **Export-grade cipher suites** (FREAK, LOGJAM)
- **NULL cipher suites** — providing no encryption
- **Anonymous cipher suites** — providing no authentication
- **Diffie-Hellman with modulus < 2048-bit** (DHE groups smaller than 2048-bit)
- Any algorithm marked as **deprecated** in NIST SP 800-131A Rev. 2 or subsequent revisions

---

## 6. Minimum Key Length Requirements by Use Case

*Consolidate minimum key length requirements per use case into a single reference table. This prevents ambiguity when implementers are selecting parameters for specific systems.*

*The table below is the authoritative reference for all [Organization Name] systems. Use cases not listed must be approved by the Security Architecture team prior to implementation.*

| Use Case | Algorithm | Minimum Key Length | Preferred Key Length | Notes |
|---|---|---|---|---|
| Data-at-rest encryption (databases) | AES | 256-bit | 256-bit | All production databases containing NCII or personal data |
| Data-at-rest encryption (file system / storage) | AES | 256-bit | 256-bit | Applies to full-disk and volume encryption |
| Data-in-transit (TLS) | AES (cipher suite) | 128-bit (AES-128-GCM) | AES-256-GCM | TLS 1.2 minimum; TLS 1.3 preferred |
| TLS certificate (server) | RSA | 2048-bit | 4096-bit | SHA-256 or better signature hash |
| TLS certificate (server, EC) | ECDSA | P-256 | P-384 | |
| Code signing | RSA | 3072-bit | 4096-bit | |
| Code signing (EC) | ECDSA | P-256 | P-384 | |
| SSH host keys | RSA | 3072-bit | 4096-bit | |
| SSH host keys (EC) | Ed25519 | 256-bit | 256-bit | Preferred for SSH |
| API authentication / JWT signing | RSA | 2048-bit | 4096-bit | Or ECDSA P-256 minimum |
| Document / file signing | RSA | 2048-bit | 4096-bit | |
| Email encryption (S/MIME) | RSA | 2048-bit | 4096-bit | |
| Password hashing | Argon2id / bcrypt | N/A (cost-based) | Argon2id preferred | bcrypt cost ≥ 12 |
| Token / session encryption | AES | 256-bit | 256-bit | |
| Database Transparent Data Encryption (TDE) | AES | 256-bit | 256-bit | |
| Backup encryption | AES | 256-bit | 256-bit | Applies to all encrypted backup media |
| Key Encryption Key (KEK) | AES or RSA | AES-256 / RSA-4096 | AES-256 | Used to wrap data encryption keys |
| [Use Case] | [Algorithm] | [Minimum] | [Preferred] | [Notes] |

> **Guidance:** Where a use case permits multiple algorithms, teams should select the **Preferred** option for all new implementations. The **Minimum** is acceptable only for existing systems pending upgrade or where technical constraints are documented and approved.

---

## 7. TLS Version Requirements

*Specify the required and permitted TLS protocol versions, cipher suites, and configuration parameters for all internal and external communications. This section is critical for audit evidence under Act 854 s18 and BNM RMiT.*

### 7.1 Protocol Version Requirements

| TLS Version | Status | Notes |
|---|---|---|
| TLS 1.3 | **Approved — Preferred** | Mandatory for all new implementations from [Effective Date] |
| TLS 1.2 | **Approved — Permitted** | Permitted for existing systems; must be configured with strong cipher suites only |
| TLS 1.1 | **Prohibited** | Deprecated — must be disabled on all systems |
| TLS 1.0 | **Prohibited** | Deprecated — must be disabled on all systems |
| SSL 3.0 | **Prohibited** | Cryptographically broken (POODLE) |
| SSL 2.0 | **Prohibited** | Cryptographically broken |

> **Requirement:** All internet-facing and internal services must disable TLS 1.0 and TLS 1.1 at the protocol level. Configuration must be validated via automated scanning tools on at least a **quarterly** basis.

---

### 7.2 Approved TLS 1.3 Cipher Suites

The following cipher suites are approved for TLS 1.3 (all provide AEAD and forward secrecy by design):

| Cipher Suite | Status |
|---|---|
| `TLS_AES_256_GCM_SHA384` | **Approved — Preferred** |
| `TLS_CHACHA20_POLY1305_SHA256` | **Approved** |
| `TLS_AES_128_GCM_SHA256` | **Approved** |

---

### 7.3 Approved TLS 1.2 Cipher Suites

*Only the following cipher suites are permitted for TLS 1.2. All non-listed cipher suites must be disabled. Cipher suites must provide Perfect Forward Secrecy (PFS).*

| Cipher Suite | Status |
|---|---|
| `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384` | **Approved — Preferred** |
| `TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384` | **Approved — Preferred** |
| `TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256` | **Approved** |
| `TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256` | **Approved** |
| `TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256` | **Approved** |
| `TLS_DHE_RSA_WITH_AES_256_GCM_SHA384` | **Approved** (DH group ≥ 2048-bit) |
| Any cipher suite using RC4, DES, 3DES, NULL, EXPORT, or ANON | **Prohibited** |
| Any cipher suite without Forward Secrecy (non-ECDHE, non-DHE) | **Prohibited** |

---

### 7.4 TLS Configuration Parameters

| Parameter | Required Configuration |
|---|---|
| **Minimum TLS Version** | TLS 1.2 |
| **Preferred TLS Version** | TLS 1.3 |
| **Forward Secrecy** | Mandatory (ECDHE or DHE key exchange) |
| **HSTS (HTTP Strict Transport Security)** | Mandatory for all HTTPS services; `max-age` ≥ 31536000 seconds |
| **HSTS Preloading** | Required for all external-facing domains |
| **Certificate Pinning** | Required for critical mobile and API clients |
| **Renegotiation** | Insecure renegotiation must be disabled |
| **Session Resumption (Tickets)** | Permitted with key rotation ≤ 24 hours |
| **DH Group Size** | ≥ 2048-bit (for DHE); prefer RFC 7919 named groups |
| **OCSP Stapling** | Must be enabled on all TLS-terminating endpoints |

---

### 7.5 Scope of TLS Requirements

TLS requirements apply to, but are not limited to:

- All web applications and APIs accessible internally or externally
- All administrative interfaces (web UIs, management consoles)
- All inter-service communication within [Organization Name] infrastructure
- All connections to external parties, including NACSA, BNM, and third-party service providers
- All email transmission (STARTTLS or SMTPS with minimum TLS 1.2)
- All database connections carrying NCII or personal data over a network

---

## 8. Data-at-Rest Encryption

*Specify requirements for encrypting data when stored on any medium — disk, database, backup, or cloud storage. Define scope, algorithms, key management linkage, and verification requirements.*

### 8.1 Scope

*Identify all storage categories in scope for encryption-at-rest requirements.*

Data-at-rest encryption requirements apply to all stored NCII data and personal data, regardless of storage medium, including:

- **Relational and non-relational databases** containing personal data, financial data, or NCII information
- **File systems and object storage** (on-premises and cloud)
- **Backup and archival media** (tapes, disk-based backup, cloud backup)
- **Portable and removable media** (USB drives, external drives, laptops)
- **Virtual machine disk images** and container volumes
- **Log repositories** containing personally identifiable information (PII)
- **Cloud storage buckets and blobs** managed by [Organization Name] or on its behalf

### 8.2 Encryption Requirements

| Storage Type | Required Encryption | Algorithm | Key Length | Notes |
|---|---|---|---|---|
| Production databases (relational) | Transparent Data Encryption (TDE) or application-layer | AES | 256-bit | e.g., SQL Server TDE, PostgreSQL pgcrypto, Oracle TDE |
| Production databases (non-relational) | Encryption-at-rest enabled | AES | 256-bit | e.g., MongoDB encrypted storage engine |
| Object storage (cloud) | Server-side encryption (SSE) with customer-managed keys | AES | 256-bit | Use CMK via KMS; avoid SSE with provider-managed keys for NCII data |
| File system / volume | Full-disk or volume encryption | AES | 256-bit | e.g., LUKS, BitLocker, dm-crypt |
| Laptop / endpoint | Full-disk encryption | AES | 256-bit | Mandatory on all laptops carrying personal or NCII data |
| Backup media (disk) | Encrypted at backup software level or volume level | AES | 256-bit | |
| Backup media (tape) | Encrypted at hardware or software level | AES | 256-bit | Encryption must precede write to tape |
| Portable / removable media | Hardware-encrypted or software-encrypted | AES | 256-bit | Plain USB storage prohibited for NCII data |
| Structured data fields (sensitive) | Column-level or field-level encryption | AES | 256-bit | For PII fields: IC/passport numbers, financial data |
| Log files | Encrypted volume or log encryption | AES | 256-bit | Where logs contain PII |

### 8.3 Key Management for Data-at-Rest

- All encryption keys for data-at-rest must be managed in accordance with Section 11 (Cryptographic Key Management Lifecycle).
- **Keys must not be stored alongside the data they protect.** Key material must reside in a designated Key Management System (KMS) or Hardware Security Module (HSM).
- **Key separation:** Separate Data Encryption Keys (DEKs) and Key Encryption Keys (KEKs) must be used. DEKs encrypt data; KEKs wrap DEKs.

### 8.4 Verification and Assurance

- Encryption-at-rest status must be verified and documented at least **annually** as part of the IT compliance review cycle.
- Database encryption must be validated using [specify tool, e.g., database engine encryption status queries, SIEM checks].
- Evidence of encryption must be retained for audit purposes for a minimum of **[X] years** in accordance with [Organization Name] records retention policy.

---

## 9. Data-in-Transit Encryption

*Specify requirements for protecting data as it moves between systems, networks, or parties. Define all applicable communication channels and required controls.*

### 9.1 Scope

Data-in-transit encryption requirements apply to all transmission of NCII data or personal data across any network, including:

- Internal network communications between application tiers, microservices, or databases
- Communications traversing the internet or any untrusted network
- API calls (REST, SOAP, GraphQL, gRPC) between internal and external systems
- File transfer operations (SFTP, FTPS, AS2)
- Email containing personal data or sensitive information
- Remote access connections (VPN, SSH, RDP)
- Connections to cloud platforms and SaaS providers
- Inter-datacenter and disaster recovery replication links

### 9.2 Encryption Requirements by Channel

| Communication Channel | Required Protocol | Minimum Version | Notes |
|---|---|---|---|
| HTTPS (web / API) | TLS | 1.2 (prefer 1.3) | Refer to Section 7 for full TLS requirements |
| Internal microservice communication | mTLS | 1.2 (prefer 1.3) | Mutual authentication required for internal service mesh |
| SFTP (file transfer) | SFTP over SSH | SSH-2 | Ed25519 or RSA ≥ 3072-bit host keys |
| FTPS (file transfer) | FTPS (explicit TLS) | TLS 1.2+ | FTPS preferred over FTP+STARTTLS |
| Email (external) | STARTTLS / SMTPS | TLS 1.2+ | MX-to-MX and client-to-server |
| Email (sensitive content) | S/MIME or PGP | — | For emails containing NCII/personal data |
| Remote access (admin) | SSH | SSH-2 | Password auth must be disabled; key-based only |
| VPN (remote user) | IPsec IKEv2 or SSL/TLS VPN | TLS 1.2+ | AES-256 encryption; strong PFS |
| Database connections (networked) | TLS | 1.2 (prefer 1.3) | Must not connect over plaintext |
| Message queues / streaming | TLS | 1.2 (prefer 1.3) | e.g., Kafka, RabbitMQ with TLS enabled |
| Replication / DR links | TLS or IPsec | — | AES-256 |
| API gateway to backend | mTLS | 1.2 (prefer 1.3) | |
| [Channel] | [Protocol] | [Version] | [Notes] |

### 9.3 Plaintext Prohibition

- **Plaintext transmission of NCII data or personal data is strictly prohibited** over any network, including internal networks.
- HTTP (non-TLS) is prohibited for any service handling personal data or NCII information. All HTTP traffic must be redirected to HTTPS.
- FTP (unencrypted) is prohibited. Use SFTP or FTPS exclusively.
- Telnet is prohibited. Use SSH exclusively for remote administration.

### 9.4 Mutual TLS (mTLS)

Mutual TLS authentication is **required** for:

- All internal microservice-to-microservice communication within the [Organization Name] service mesh;
- All API integrations with external financial market infrastructure (e.g., PayNet, RENTAS, BNM connections); and
- All connections from third-party vendors or outsourced service providers accessing [Organization Name] internal APIs.

### 9.5 Monitoring and Detection

- All TLS termination points must be logged, and certificate validity must be monitored continuously.
- Alerts must be configured for:
  - Expired or near-expiry certificates (alert at ≤ 30 days remaining)
  - Attempted connections using prohibited protocol versions or cipher suites
  - Certificate mismatch or validation failure events

---

## 10. Certificate Requirements and Management

*Define the requirements for digital certificates used across [Organization Name] infrastructure, including issuance, validation, lifecycle management, and revocation.*

### 10.1 Trusted Certificate Authorities

| CA Type | Approved Sources | Use Case |
|---|---|---|
| **External CA (Public)** | [List approved CAs, e.g., DigiCert, Sectigo, GlobalSign] | Internet-facing TLS certificates, code signing |
| **Internal CA (Private PKI)** | [Organization Name] Internal CA (operated by [Team]) | Internal service certificates, mTLS, device certificates |
| **Government / National CA** | MSC Trustgate or equivalent Malaysian CA | Where regulatory or governmental requirements specify |

> **Prohibited:** Self-signed certificates are **not permitted** in production environments for services handling NCII data or personal data. Self-signed certificates may only be used in isolated development or testing environments with no connection to production data.

### 10.2 Certificate Types and Requirements

| Certificate Type | Minimum Key Size | Signature Algorithm | Validity Period | Notes |
|---|---|---|---|---|
| Server (DV) TLS | RSA 2048-bit / EC P-256 | SHA-256 | ≤ 398 days | Standard web server certificate |
| Server (OV) TLS | RSA 2048-bit / EC P-256 | SHA-256 | ≤ 398 days | Preferred for B2B APIs and financial services |
| Server (EV) TLS | RSA 2048-bit / EC P-256 | SHA-256 | ≤ 398 days | Required for customer-facing financial portals |
| Wildcard TLS | RSA 2048-bit / EC P-256 | SHA-256 | ≤ 398 days | Use with caution; document all systems using wildcard |
| Code Signing | RSA 3072-bit / EC P-256 | SHA-256 | ≤ 3 years | |
| S/MIME (Email) | RSA 2048-bit | SHA-256 | ≤ 3 years | |
| Client (mTLS) | RSA 2048-bit / EC P-256 | SHA-256 | ≤ 2 years | |
| Root CA | RSA 4096-bit / EC P-384 | SHA-384 | ≤ 20 years | Offline; hardware-protected |
| Intermediate CA | RSA 4096-bit / EC P-384 | SHA-384 | ≤ 10 years | |

### 10.3 Certificate Lifecycle Management

*Describe the end-to-end lifecycle management process for certificates, from request through to revocation.*

- **Inventory:** A complete, current inventory of all certificates (internal and external) must be maintained in the [Certificate Management Tool / CMDB]. The inventory must include: common name, SANs, issuing CA, serial number, key size, expiry date, responsible owner, and associated system.
- **Issuance:** All certificate requests must follow the [Certificate Issuance Procedure — Reference Document ID]. Private keys must be generated on the target system or HSM; keys must never be exported or emailed.
- **Renewal:** Certificates must be renewed at least **30 days before expiry**. Automated renewal (e.g., ACME protocol, ACME with Let's Encrypt where approved) is preferred.
- **Revocation:** Compromised or decommissioned certificates must be revoked within **[X] hours** of the event. Revocation must be performed through the issuing CA and reflected in CRL/OCSP.
- **OCSP Stapling:** Must be enabled on all TLS-terminating services.
- **Certificate Pinning:** Must be implemented for high-value mobile applications and critical API clients.

### 10.4 Certificate Storage

- Private keys associated with certificates must be stored in:
  - Hardware Security Modules (HSM) — mandatory for CA keys and code signing keys
  - Encrypted secrets management systems (e.g., [Vault / AWS Secrets Manager / Azure Key Vault]) — for server certificates
- Private keys must never be stored in source code repositories, configuration files committed to version control, email, or unprotected file shares.

### 10.5 Wildcard Certificate Controls

*Wildcard certificates present a risk of broad compromise if the private key is exposed. Additional controls apply.*

- Wildcard certificates must be documented in the certificate inventory with a full list of systems on which they are deployed.
- Wildcard certificates must **not** span security zones (e.g., a single wildcard must not be used in both DMZ and internal zones).
- Wildcard private keys must be stored in HSM or a centralised encrypted secrets store.

---

## 11. Cryptographic Key Management Lifecycle

*Describe the full lifecycle of cryptographic keys: generation, distribution, storage, rotation, archival, and destruction. This section provides the policy-level requirements; detailed procedures are in the Cryptographic Key Management Procedure [Document ID].*

### 11.1 Key Management Principles

- **Separation of duties:** Key custodians must be distinct from system operators using those keys.
- **Least privilege:** Access to key material must be restricted to the minimum necessary for operational function.
- **Auditability:** All key management operations (generation, access, rotation, destruction) must be logged in a tamper-evident audit log.
- **Hardware protection:** Keys protecting NCII data must be stored in FIPS 140-2 Level 2 (minimum) or Level 3 HSMs.

### 11.2 Key Lifecycle Requirements

| Lifecycle Phase | Requirement |
|---|---|
| **Generation** | Keys must be generated using a cryptographically secure random number generator (CSPRNG). Key generation must occur on the target HSM or secure system where possible. |
| **Distribution** | Keys must be distributed only through encrypted, authenticated channels. Keys must never be transmitted in plaintext. Key splitting (e.g., Shamir's Secret Sharing) required for highly sensitive key material. |
| **Storage** | Keys must be stored in HSM or approved KMS. Plaintext keys must not reside in application code, config files, or databases. |
| **Rotation** | Keys must be rotated on the schedule defined in 11.3. Re-encryption of data under new keys must follow rotation. |
| **Suspension / Compromise** | Compromised keys must be immediately revoked and rotated. All data encrypted under compromised keys must be re-encrypted. |
| **Archival** | Keys required for decryption of archived data must be retained in escrow per the records retention policy. Escrow keys must be stored under dual control. |
| **Destruction** | Keys no longer required must be securely destroyed using methods that prevent recovery (e.g., zeroisation, HSM key deletion). Destruction events must be logged. |

### 11.3 Key Rotation Schedule

| Key Type | Maximum Rotation Period | Notes |
|---|---|---|
| Data Encryption Keys (DEK) — databases | 12 months | More frequent if data volume or sensitivity warrants |
| Data Encryption Keys (DEK) — file/storage | 12 months | |
| Key Encryption Keys (KEK) | 24 months | Rotation triggers re-wrapping of all DEKs |
| TLS session keys | Per-session (via PFS) | Handled automatically by TLS with ECDHE |
| TLS certificates | Per validity period (≤ 398 days) | See Section 10 |
| SSH host keys | 24 months | |
| API signing keys (JWT) | 12 months | |
| [Key Type] | [Period] | [Notes] |

---

## 12. Compliance and Non-Conformance

*Define how compliance with this standard is measured, what constitutes non-conformance, and how exceptions are handled. This section is important for demonstrating regulatory compliance under Act 854 s24.*

### 12.1 Compliance Verification

- **Annual review:** This standard must be reviewed at least annually by the Security Architecture team, with input from the CISO and relevant technical stakeholders.
- **Technical scanning:** Automated scanning for TLS protocol versions and cipher suite compliance must be conducted **quarterly** using approved scanning tools (e.g., [Tool Name — Qualys SSL Labs equivalent, internal scanner]).
- **Penetration testing:** Cryptographic controls must be included in the scope of annual penetration tests and red team exercises.
- **Audit evidence:** Results of scans, reviews, and remediation activities must be retained and made available to internal audit and NACSA upon request.

### 12.2 Exception Management

*Some legacy systems may be unable to meet requirements in this standard without significant technical effort. Exceptions must be formally managed — they do not constitute permanent approval.*

1. **Exception request:** The system owner must submit a formal **Cryptographic Control Exception Request** to the Security Architecture team, documenting the non-compliant control, the technical reason for non-compliance, the risk assessment, and proposed compensating controls.
2. **Approval authority:** Exceptions must be approved by the **CISO** (or delegated authority).
3. **Duration:** No exception shall be granted for longer than **12 months** without re-review.
4. **Compensating controls:** Every approved exception must have documented compensating controls in effect for the duration of the exception.
5. **Exception register:** All approved exceptions must be recorded in the [Cryptographic Control Exception Register — Document ID / System Reference].

### 12.3 Non-Conformance Consequences

Failure to comply with this standard where no approved exception exists constitutes a policy violation and may result in:

- Mandatory remediation within [X] business days as directed by Security Architecture;
- Escalation to the Risk Committee;
- Suspension or restriction of the non-compliant system's connection to NCII or production networks; and
- Reporting obligations under Act 854 Section 24 if the non-conformance constitutes a cybersecurity incident or material control failure.

---

## 13. Roles and Responsibilities

*Assign accountability for the controls in this standard using a RACI framework. Ensure all roles are defined in the [Organization Name] Information Security Organisational Structure.*

### 13.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | CISO | Security Architecture | IT Operations | Application Development | Risk & Compliance | Internal Audit | System / Data Owners |
|---|---|---|---|---|---|---|---|
| Maintain and update this standard | C | R | C | C | C | I | I |
| Approve this standard | A | — | — | — | C | I | I |
| Select and approve cryptographic algorithms | A | R | C | C | C | I | I |
| Implement encryption-at-rest controls | I | C | R | C | I | I | A |
| Implement encryption-in-transit controls | I | C | R | R | I | I | A |
| Configure and manage TLS on servers | I | C | R | C | I | I | A |
| Manage cryptographic key lifecycle | A | C | R | C | I | I | I |
| Operate KMS / HSM infrastructure | I | C | R | I | I | I | I |
| Manage PKI and certificate lifecycle | I | R | R | C | I | I | I |
| Monitor certificate expiry | I | C | R | C | I | I | I |
| Conduct annual TLS compliance scans | I | R | C | I | C | I | I |
| Grant cryptographic control exceptions | A | R | C | C | C | I | C |
| Maintain exception register | C | R | C | C | R | I | I |
| Report NCII control status to NACSA | A | C | C | I | R | I | I |
| Conduct annual standard review | A | R | C | C | C | C | I |
| Provide evidence for audit | I | C | R | C | C | A | C |

### 13.2 Role Definitions

| Role | Responsibility in the Context of This Standard |
|---|---|
| **CISO** | Ultimate accountability for cryptographic control policy; approves exceptions; escalates material non-conformance |
| **Security Architecture** | Maintains this standard; approves algorithms and configurations; advises implementation teams; conducts compliance assessments |
| **IT Operations** | Implements infrastructure-level encryption (TDE, disk encryption, network TLS); manages KMS and HSM; rotates keys per schedule |
| **Application Development** | Implements application-layer encryption; selects approved libraries and cipher suites; follows secure coding standards for cryptography |
| **Risk & Compliance** | Maintains exception register; reports control compliance to regulators; tracks remediation of non-conformances |
| **Internal Audit** | Independently verifies compliance with this standard; reviews exception register; includes cryptographic controls in audit plans |
| **System / Data Owners** | Accountable for encryption controls on systems and data under their ownership; approve exceptions for their systems |

---

## 14. Review and Approval

### 14.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial version — document created |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] |

### 14.2 Review Schedule

This standard must be reviewed:

- **Annually**, at minimum, by the Security Architecture team;
- **Upon material changes** to the regulatory environment (e.g., NACSA guidance updates, NIST algorithm deprecations, new Act 854 subsidiary legislation);
- **Following a significant cryptographic incident** (key compromise, breach involving encrypted data, algorithm break); and
- **Upon material changes** to [Organization Name]'s technology stack or adoption of new platforms.

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Head of Security Architecture | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) | [Name] | [Signature] | [Date] |
| Chief Information Officer (CIO) | [Name] | [Signature] | [Date] |
| [Additional Approver Role] | [Name] | [Signature] | [Date] |

---

## 15. References

*List all external regulations, standards, and internal documents referenced in or relevant to this standard.*

### 15.1 Regulatory and Legislative References

| Reference | Title | Relevant Sections |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | Section 18 (Cybersecurity measures for NCII); Section 24 (NCII entity obligations and compliance) |
| Personal Data Protection Act 2010 (Act 709) | Personal Data Protection Act 2010 | Section 9 (Security Principle) |
| BNM RMiT | Risk Management in Technology Policy Document (BNM/RH/PD 028-2) | Para 10.57–10.59 (Cryptographic controls) |
| NACSA | National Cybersecurity Policy and NCII Sector Guidelines | [Applicable sections] |
| [Additional Reference] | [Title] | [Sections] |

### 15.2 Standards and Frameworks

| Reference | Title | Relevant Sections |
|---|---|---|
| NIST SP 800-131A Rev. 2 | Transitioning the Use of Cryptographic Algorithms and Key Lengths | All |
| NIST SP 800-57 Part 1 Rev. 5 | Recommendation for Key Management | All |
| NIST SP 800-52 Rev. 2 | Guidelines for the Selection, Configuration, and Use of TLS | All |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A Control 8.24 (Use of cryptography) |
| ISO/IEC 27002:2022 | Information Security Controls | 8.24 |
| OWASP Cryptographic Storage Cheat Sheet | OWASP Cryptographic Storage Cheat Sheet | All |
| OWASP Transport Layer Security Cheat Sheet | OWASP Transport Layer Security Cheat Sheet | All |

### 15.3 Internal Documents

| Document ID | Title | Relationship |
|---|---|---|
| [DOC-IS-001] | Information Security Policy | Parent policy |
| [DOC-IS-002] | Data Classification Policy | Defines data classifications referenced in this standard |
| [DOC-IS-010] | Cryptographic Key Management Procedure | Implements Section 11 of this standard |
| [DOC-IS-011] | TLS Configuration Guideline | Implements Section 7 of this standard |
| [DOC-IS-012] | Certificate Lifecycle Management Procedure | Implements Section 10 of this standard |
| [DOC-IS-013] | Cryptographic Control Exception Register | Referenced in Section 12.2 |
| [DOC-IS-014] | Acceptable Use Policy | [Relationship] |
| [DOC-IS-015] | Incident Response Plan | Referenced for key compromise response |

---

## 16. Appendices

### Appendix A — Algorithm Status Quick Reference Card

*This appendix provides a condensed, printable reference card for teams implementing cryptographic controls. It summarises the approved/prohibited status of common algorithms.*

| Algorithm | Type | Status |
|---|---|---|
| AES-256-GCM | Symmetric | **APPROVED — PREFERRED** |
| AES-128-GCM | Symmetric | **APPROVED** |
| 3DES | Symmetric | **PROHIBITED** |
| DES | Symmetric | **PROHIBITED** |
| RC4 | Symmetric | **PROHIBITED** |
| RSA-4096 | Asymmetric | **APPROVED — PREFERRED** |
| RSA-2048 | Asymmetric | **APPROVED** |
| RSA < 2048 | Asymmetric | **PROHIBITED** |
| ECDSA P-384 | Asymmetric | **APPROVED — PREFERRED** |
| ECDSA P-256 | Asymmetric | **APPROVED** |
| SHA-256 | Hash | **APPROVED** |
| SHA-384 | Hash | **APPROVED** |
| SHA-512 | Hash | **APPROVED** |
| SHA-1 | Hash | **PROHIBITED** |
| MD5 | Hash | **PROHIBITED** |
| TLS 1.3 | Protocol | **APPROVED — PREFERRED** |
| TLS 1.2 | Protocol | **APPROVED** |
| TLS 1.1 | Protocol | **PROHIBITED** |
| TLS 1.0 | Protocol | **PROHIBITED** |
| SSL 3.0 / 2.0 | Protocol | **PROHIBITED** |

---

### Appendix B — Cryptographic Control Exception Request Form

*Use this template when requesting an exception to any requirement in this standard. Submit completed forms to Security Architecture via [designated submission channel].*

**Exception Request Reference:** [Auto-generated / Sequential ID]

| Field | Details |
|---|---|
| **Date of Request** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Role / Title** | [Role] |
| **System / Application Name** | [System Name] |
| **System Owner** | [Name, Role] |
| **Standard Reference** | [Section number(s) of this standard from which exception is sought] |
| **Non-Compliant Control** | [Describe the specific control requirement that cannot be met] |
| **Current State** | [Describe the current non-compliant configuration] |
| **Reason for Exception** | [Technical / business justification] |
| **Risk Assessment Summary** | [High / Medium / Low — with brief rationale] |
| **Compensating Controls** | [Describe controls that mitigate the risk in lieu of full compliance] |
| **Proposed Exception Duration** | [Start Date] to [End Date — maximum 12 months] |
| **Remediation Plan** | [Describe the plan and timeline to achieve full compliance] |
| **Approver (CISO)** | [Name, Signature, Date] |

---

### Appendix C — TLS Configuration Verification Checklist

*Use this checklist during system commissioning and quarterly compliance reviews to verify TLS configuration correctness.*

| Check | Expected Result | Pass / Fail | Notes |
|---|---|---|---|
| TLS 1.0 disabled | Not negotiated | [ ] | |
| TLS 1.1 disabled | Not negotiated | [ ] | |
| TLS 1.2 enabled | Negotiated with approved cipher suites only | [ ] | |
| TLS 1.3 enabled | Negotiated and preferred | [ ] | |
| RC4 cipher suites disabled | Not offered | [ ] | |
| NULL cipher suites disabled | Not offered | [ ] | |
| EXPORT cipher suites disabled | Not offered | [ ] | |
| ANON cipher suites disabled | Not offered | [ ] | |
| 3DES cipher suites disabled | Not offered | [ ] | |
| Forward secrecy enforced | ECDHE or DHE key exchange | [ ] | |
| Certificate key size | RSA ≥ 2048-bit or EC ≥ P-256 | [ ] | |
| Certificate signature algorithm | SHA-256 or better | [ ] | |
| Certificate validity | ≤ 398 days, not expired | [ ] | |
| HSTS header present | max-age ≥ 31536000 | [ ] | |
| OCSP stapling enabled | Stapled response present | [ ] | |
| Insecure renegotiation disabled | Client-initiated renegotiation rejected | [ ] | |
| HTTP redirect to HTTPS | HTTP returns 301/302 to HTTPS | [ ] | |
| **Scan Tool Used** | [Tool Name and Version] | | |
| **Scan Date** | [Date] | | |
| **Scanned By** | [Name] | | |

---

### Appendix D — Glossary of Cryptographic Terms

*Extended glossary for non-technical stakeholders and auditors reviewing this document.*

| Term | Definition |
|---|---|
| **Authenticated Encryption (AEAD)** | Encryption that simultaneously provides confidentiality, integrity, and authenticity — e.g., AES-GCM |
| **Cipher Suite** | A combination of algorithms used in a TLS connection: key exchange, authentication, bulk encryption, and MAC |
| **CRL (Certificate Revocation List)** | A list of certificates that have been revoked before their expiry date |
| **DEK (Data Encryption Key)** | A key used directly to encrypt data |
| **Forward Secrecy (PFS)** | A property ensuring that compromise of long-term keys does not compromise past session keys |
| **HSM (Hardware Security Module)** | A tamper-resistant physical device for secure key storage and cryptographic operations |
| **KEK (Key Encryption Key)** | A key used to encrypt other keys (key wrapping) |
| **Key Escrow** | A mechanism for storing a copy of a key with a trusted third party for recovery purposes |
| **OCSP (Online Certificate Status Protocol)** | A protocol for checking the real-time revocation status of a certificate |
| **PKI (Public Key Infrastructure)** | The framework of policies, processes, and technology for managing public key certificates |
| **Salt** | Random data added to a password before hashing to prevent rainbow table attacks |
| **Zeroisation** | The process of overwriting sensitive key material in memory or storage with zeros to prevent recovery |
| **[Term]** | [Definition] |

---

### Appendix E — Regulatory Mapping Summary

*This appendix maps each section of this standard to its corresponding regulatory obligation, supporting audit and regulatory examination.*

| Standard Section | Section Title | Act 854 Provision | BNM RMiT | ISO 27001:2022 | PDPA |
|---|---|---|---|---|---|
| Section 5 | Approved Cryptographic Algorithms | s18 | 10.57 | A.8.24 | s9 |
| Section 6 | Key Length Requirements | s18 | 10.57 | A.8.24 | s9 |
| Section 7 | TLS Version Requirements | s18 | 10.58 | A.8.24 | s9 |
| Section 8 | Data-at-Rest Encryption | s18, s24 | 10.57, 10.59 | A.8.24 | s9 |
| Section 9 | Data-in-Transit Encryption | s18, s24 | 10.58 | A.8.24 | s9 |
| Section 10 | Certificate Requirements | s18 | 10.58 | A.8.24 | — |
| Section 11 | Key Management Lifecycle | s18, s24 | 10.57 | A.8.24 | s9 |
| Section 12 | Compliance and Non-Conformance | s24 | — | 9.1, 10.1 | — |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] — Information Security & Compliance Division**
**© [Year] [Organization Name]. All rights reserved. Unauthorised reproduction or distribution prohibited.**