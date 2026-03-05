# Certificate Management Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | PKI/Security Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |

**Organisation:** [Organisation Name]
**Department:** [Department Name]
**Document Type:** Standard
**Regulatory Framework:** Cyber Security Act 2024 (Act 854) — NACSA, Section 18

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory Context](#3-regulatory-context)
4. [Approved Certificate Authorities](#4-approved-certificate-authorities)
5. [Certificate Lifecycle Management](#5-certificate-lifecycle-management)
6. [Key Length and Algorithm Requirements](#6-key-length-and-algorithm-requirements)
7. [Renewal and Expiry Monitoring](#7-renewal-and-expiry-monitoring)
8. [Revocation Procedures](#8-revocation-procedures)
9. [Certificate Inventory Maintenance](#9-certificate-inventory-maintenance)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Non-Compliance and Exceptions](#11-non-compliance-and-exceptions)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Certificate Management Standard ("Standard") establishes the requirements, controls, and procedures that [Organisation Name] must follow when managing digital certificates used across its National Critical Information Infrastructure (NCII) systems and associated digital assets. The Standard ensures that certificates are issued, maintained, monitored, renewed, and revoked in a manner consistent with applicable regulatory obligations and information security best practices.

This Standard is issued in accordance with **Section 18 of the Cyber Security Act 2024 (Act 854)** and supports [Organisation Name]'s obligations as a designated NCII entity to maintain a robust cybersecurity posture and protect its critical infrastructure.

### 1.2 Scope

This Standard applies to:

- All digital certificates — including TLS/SSL, code signing, email (S/MIME), client authentication, and device certificates — used within systems designated as NCII assets by [Organisation Name]
- All Public Key Infrastructure (PKI) components operated by or on behalf of [Organisation Name], including internally operated Certificate Authorities (CAs) and externally procured CA services
- All personnel, contractors, and third-party service providers involved in the request, issuance, management, or revocation of digital certificates on behalf of [Organisation Name]
- All environments, including production, pre-production, development, and disaster recovery, where certificates are deployed on NCII systems

**Exclusions:** [List any explicit exclusions, e.g., certificates used solely within isolated test environments with no connectivity to NCII systems, subject to approval by the Chief Information Security Officer (CISO).]

### 1.3 Guiding Principles

[Organisation Name] adopts the following principles in managing its certificate infrastructure:

- **Least Privilege:** Certificate issuance is restricted to authorised personnel with a demonstrated business need.
- **Auditability:** All certificate lifecycle events are logged and retained for audit purposes.
- **Resilience:** Certificate management processes are designed to prevent unplanned service outages caused by certificate expiry or compromise.
- **Compliance by Design:** Certificate configurations conform to current regulatory and industry standards at the point of issuance.

---

## 2. Definitions and Abbreviations

*This section defines key terms used throughout this Standard to ensure consistent interpretation across all teams.*

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary cybersecurity legislation in Malaysia |
| **CA** | Certificate Authority — an entity that issues digital certificates |
| **CRL** | Certificate Revocation List — a list of certificates that have been revoked before their scheduled expiry |
| **CSR** | Certificate Signing Request — a message sent from an applicant to a CA to apply for a digital certificate |
| **EKU** | Extended Key Usage — an X.509 extension that defines the purposes for which the certificate's public key may be used |
| **HSM** | Hardware Security Module — a physical device that safeguards and manages cryptographic keys |
| **NACSA** | National Cyber Security Agency — the lead agency for national cybersecurity in Malaysia |
| **NCII** | National Critical Information Infrastructure — as defined under Act 854 |
| **OCSP** | Online Certificate Status Protocol — a protocol used to obtain the revocation status of a certificate in real time |
| **PKI** | Public Key Infrastructure — the framework of policies, procedures, hardware, and software that manages digital certificates |
| **Private CA** | An internally operated Certificate Authority managed by [Organisation Name] |
| **Public CA** | A commercially operated, publicly trusted Certificate Authority |
| **SANs** | Subject Alternative Names — an X.509 extension that allows a certificate to specify additional hostnames or IP addresses |
| **TLS/SSL** | Transport Layer Security / Secure Sockets Layer — cryptographic protocols for securing network communications |
| **CISO** | Chief Information Security Officer |
| **PKI Admin** | Personnel designated with administrative responsibilities for the PKI environment |
| **[Organisation Abbreviation]** | [Organisation Name] |

---

## 3. Regulatory Context

### 3.1 Cyber Security Act 2024 (Act 854) — Section 18

*This section articulates the specific regulatory obligations under Act 854 that this Standard is designed to address. Authors should cross-reference NACSA guidance notes and any sector-specific directives issued by BNM where applicable.*

**Section 18 of Act 854** imposes obligations on NCII entities to implement and maintain cybersecurity measures that protect the integrity, confidentiality, and availability of critical information infrastructure. Certificate management is identified as a foundational control within these obligations, as digital certificates underpin authentication, encryption, and the integrity of communications across NCII systems.

Key obligations addressed by this Standard include:

- Maintaining an accurate inventory of all certificates used on NCII systems
- Ensuring certificates are issued by approved and trustworthy Certificate Authorities
- Implementing controls to detect and respond to certificate expiry and compromise
- Establishing revocation capabilities consistent with the sensitivity of the systems involved
- Subjecting certificate management practices to regular review and audit

### 3.2 Related Regulatory and Standards Frameworks

| Framework | Relevant Clause / Section | Relationship to This Standard |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Primary legislative obligation |
| NACSA NCII Cybersecurity Framework | [Insert relevant control domain] | Operational guidance |
| Bank Negara Malaysia — RMIT | [Insert relevant clause] | Sector-specific overlay for financial institutions |
| Personal Data Protection Act 2010 (Act 709) | [Insert relevant clause] | Data protection considerations for certificate subject data |
| ISO/IEC 27001:2022 | A.8.24 (Use of Cryptography) | International best practice reference |
| NIST SP 800-57 | Key Management Recommendations | Algorithm and key length guidance |
| CA/Browser Forum Baseline Requirements | Applicable sections | Public CA compliance reference |

---

## 4. Approved Certificate Authorities

### 4.1 Policy on Certificate Authority Selection

*List all Certificate Authorities approved for use by [Organisation Name]. Distinguish between public CAs used for external-facing systems and private CAs used for internal systems. Include the rationale for each CA's approval and any conditions of use.*

[Organisation Name] shall only procure or issue digital certificates from Certificate Authorities that have been formally evaluated and approved by the PKI/Security Operations team and ratified by the [CISO / Risk Committee]. Use of unapproved CAs is prohibited on NCII systems.

### 4.2 Approved Public Certificate Authorities

*Insert the list of approved public CAs. Review this list at least annually or whenever a CA's trust status changes. Remove any CA that has been distrusted by major browser programmes or NACSA guidance.*

| CA Name | Use Case | Trust Basis | Approval Date | Approved By | Review Date |
|---|---|---|---|---|---|
| [CA Name, e.g., DigiCert Global Root CA] | External TLS/SSL, Code Signing | WebTrust / CA/Browser Forum | [Date] | [Name / Role] | [Date] |
| [CA Name] | [Use Case] | [Trust Basis] | [Date] | [Name / Role] | [Date] |
| [CA Name] | [Use Case] | [Trust Basis] | [Date] | [Name / Role] | [Date] |

### 4.3 Internal / Private Certificate Authority

*Document the organisation's internal CA hierarchy, including root CA, intermediate CA, and issuing CA tiers. Include details of the HSM or key storage arrangements for each tier.*

[Organisation Name] operates a [two-tier / three-tier] PKI hierarchy for internal certificate issuance:

| CA Tier | CA Name | Purpose | Key Storage | Location |
|---|---|---|---|---|
| Root CA | [Root CA Name] | Trust anchor for internal PKI | HSM — offline | [Physical Location] |
| Intermediate CA | [Intermediate CA Name] | Policy CA | HSM | [Location] |
| Issuing CA | [Issuing CA Name] | Issues end-entity certificates | [Storage Method] | [Location] |

**Root CA Protection Requirements:**
- The Root CA private key shall be stored in an approved HSM with a minimum rating of [FIPS 140-2 Level 3 / equivalent].
- The Root CA shall be maintained offline and brought online only for intermediate CA certificate issuance or renewal.
- Root CA activation shall require [N]-of-[M] key ceremony participants and shall be documented in a formal Key Ceremony Record.

### 4.4 CA Approval and De-listing Process

*Define the process by which new CAs are evaluated and approved, and the process by which a CA is removed from the approved list in the event of compromise or loss of trust.*

1. **Evaluation:** The PKI/Security Operations team shall evaluate proposed CAs against the criteria defined in **Appendix A**.
2. **Risk Assessment:** A risk assessment shall be completed and submitted to the CISO for review.
3. **Approval:** Formal approval shall be documented in the CA Approval Register ([Document Reference]).
4. **De-listing:** In the event that a CA is distrusted, compromised, or otherwise no longer meets approval criteria, the PKI/Security Operations team shall initiate immediate certificate replacement on all affected NCII systems within the timeframes specified in Section 8.

---

## 5. Certificate Lifecycle Management

### 5.1 Overview

*Describe the end-to-end lifecycle of a certificate, from initial request through to expiry or revocation. Use the process steps below as a guide and expand each step with organisation-specific procedures, approval gates, and system references.*

The certificate lifecycle within [Organisation Name] comprises the following stages:

```
Request → Validation → Issuance → Deployment → Monitoring → Renewal/Replacement → Revocation/Expiry
```

### 5.2 Certificate Request

*Define who may request a certificate, what information must be provided, and how the request is submitted and tracked.*

- All certificate requests shall be raised through [ITSM System / PKI Portal / Ticketing System] using the approved Certificate Request Form (**Appendix B**).
- Requestors must be authorised personnel as defined in Section 10.
- Certificate requests must include:
  - **Subject Distinguished Name (DN):** including Common Name (CN), Organisation (O), and Organisational Unit (OU)
  - **Subject Alternative Names (SANs):** all hostnames, IP addresses, or email addresses the certificate must cover
  - **Key Usage / Extended Key Usage:** the intended purpose of the certificate
  - **Certificate Type:** TLS/SSL, code signing, client authentication, email, device, etc.
  - **Requested Validity Period:** not to exceed the maximum periods specified in Section 5.3
  - **Business Justification:** a brief description of the system or service requiring the certificate
  - **System Owner / Asset Owner:** name and contact details
  - **Environment:** production, pre-production, development, or DR

### 5.3 Certificate Validity Periods

*Specify maximum permitted validity periods by certificate type, aligned with CA/Browser Forum requirements and NACSA guidance.*

| Certificate Type | Maximum Validity Period | Notes |
|---|---|---|
| Public TLS/SSL | 397 days (13 months) | CA/Browser Forum Baseline Requirements |
| Internal TLS/SSL | [Up to 3 years] | As per internal policy |
| Code Signing | [Up to 3 years] | Review against industry guidance |
| Email (S/MIME) | [Up to 3 years] | |
| Client Authentication | [Up to 2 years] | |
| Device / Machine Identity | [Up to 2 years] | Review at renewal |
| Root CA | [Up to 20 years] | Offline; strictly controlled |
| Intermediate CA | [Up to 10 years] | HSM-protected |

### 5.4 Certificate Validation and Issuance

*Describe the validation steps performed before a certificate is issued, including domain/identity validation, approval workflows, and any required dual-authorisation controls.*

- **Domain Validation (DV):** For public TLS certificates, domain control validation shall be performed using an approved method (DNS CNAME, HTTP file, or email to a registered domain contact).
- **Organisation Validation (OV) / Extended Validation (EV):** [Organisation Name] shall use [OV/EV] certificates for [specify use cases, e.g., public-facing customer portals] to provide enhanced assurance.
- **Dual Authorisation:** All certificate issuance requests for NCII systems shall be subject to a four-eyes check by a PKI Admin who was not the original requestor.
- **Internal CA Issuance:** Certificate issuance from the internal CA shall require approval from the system/asset owner and a PKI Admin.

### 5.5 Certificate Deployment

*Define requirements for the secure deployment of certificates, including private key protection, binding to the correct service, and post-deployment verification.*

- Private keys generated during the certificate request process shall not be transmitted over unencrypted channels.
- Where possible, private keys shall be generated on the target system (or in an HSM) and the CSR submitted without transmitting the private key.
- Post-deployment verification shall confirm:
  - Certificate chain validity
  - Correct SANs
  - Correct key usage flags
  - Expiry date within expected range
  - No mixed content or chain errors (for web-facing deployments)
- Deployment records shall be updated in the Certificate Inventory (Section 9).

---

## 6. Key Length and Algorithm Requirements

### 6.1 Approved Cryptographic Algorithms

*This section specifies the minimum cryptographic standards for certificates and key pairs used on NCII systems. These requirements shall be reviewed annually against NIST, NACSA, and CA/Browser Forum guidance to account for advances in cryptanalysis.*

All certificates issued for or deployed on NCII systems shall conform to the following minimum cryptographic requirements:

#### 6.1.1 Asymmetric Key Algorithms

| Algorithm | Minimum Key Length | Status | Notes |
|---|---|---|---|
| RSA | 2048-bit | **Approved** (minimum) | 3072-bit or 4096-bit preferred for new issuance |
| RSA | 4096-bit | **Preferred** | Recommended for CA certificates and long-validity use cases |
| ECDSA | P-256 (256-bit) | **Approved** | Preferred for performance-sensitive environments |
| ECDSA | P-384 (384-bit) | **Preferred** | Recommended for high-assurance use cases |
| DSA | Any | **Prohibited** | Not to be used on NCII systems |
| RSA < 2048-bit | Any | **Prohibited** | Must be replaced immediately upon detection |

#### 6.1.2 Hash / Signature Algorithms

| Algorithm | Status | Notes |
|---|---|---|
| SHA-256 | **Approved** (minimum) | |
| SHA-384 | **Approved** | Preferred for CA certificates |
| SHA-512 | **Approved** | |
| SHA-1 | **Prohibited** | Must be replaced immediately upon detection |
| MD5 | **Prohibited** | Must be replaced immediately upon detection |

#### 6.1.3 Symmetric Algorithms (for key wrapping and certificate storage)

| Algorithm | Minimum Key Length | Status |
|---|---|---|
| AES | 128-bit | **Approved** (minimum) |
| AES | 256-bit | **Preferred** |
| 3DES | 112-bit effective | **Deprecated** — migrate to AES |
| DES | Any | **Prohibited** |

### 6.2 Post-Quantum Considerations

*[Organisation Name] shall monitor NACSA and NIST guidance on post-quantum cryptography (PQC) standards and develop a migration roadmap in accordance with timelines communicated by the relevant authorities. The PKI/Security Operations team shall maintain a register of cryptographic assets that will require migration when PQC standards are mandated.]*

[Insert current posture, e.g., "PQC migration assessment scheduled for [Year]. Refer to the Cryptographic Agility Roadmap [Document Reference]."]

### 6.3 Certificate Profile Requirements

*Define mandatory and prohibited X.509 certificate extension settings for each certificate type used on NCII systems.*

| Extension | TLS/SSL | Code Signing | Email | Client Auth | Device |
|---|---|---|---|---|---|
| Basic Constraints (CA:FALSE) | Required | Required | Required | Required | Required |
| Key Usage: Digital Signature | Required | Required | Required | Required | Optional |
| Key Usage: Key Encipherment | Required | Prohibited | Optional | Prohibited | Optional |
| Extended Key Usage: Server Auth | Required | Prohibited | Prohibited | Prohibited | Optional |
| Extended Key Usage: Code Signing | Prohibited | Required | Prohibited | Prohibited | Prohibited |
| Subject Alternative Name | Required | Optional | Required | Optional | Optional |
| CRL Distribution Points | Required | Required | Required | Required | Required |
| Authority Information Access (OCSP) | Required | Required | Optional | Required | Optional |

---

## 7. Renewal and Expiry Monitoring

### 7.1 Expiry Monitoring Requirements

*Define the monitoring controls in place to detect certificates approaching expiry, including tooling, notification thresholds, and escalation paths. Certificate expiry is a common cause of service outage and must be proactively managed.*

[Organisation Name] shall implement automated monitoring of all certificates deployed on NCII systems to provide advance warning of impending expiry. Manual monitoring alone is not sufficient and shall not be relied upon as the primary control.

**Monitoring Thresholds and Notification Schedule:**

| Days to Expiry | Action | Notified Party |
|---|---|---|
| 90 days | Initial notification issued | System Owner, PKI Admin |
| 60 days | Renewal reminder | System Owner, PKI Admin |
| 30 days | Escalation notification | System Owner, PKI Admin, IT Manager |
| 14 days | Urgent escalation | CISO, System Owner, PKI Admin |
| 7 days | Critical alert — emergency renewal initiated | CISO, CTO, System Owner, PKI Admin |
| Expired | Incident raised — P1 severity | CISO, Incident Response Team |

### 7.2 Monitoring Tooling

*Specify the tools and systems used for certificate expiry monitoring. Include coverage requirements (all NCII systems must be enrolled) and responsible parties for tool operation.*

| Tool / System | Purpose | Coverage | Responsible Party |
|---|---|---|---|
| [Monitoring Tool, e.g., Venafi / Sectigo CM / Custom] | Automated expiry scanning and alerting | All NCII certificates | PKI/Security Operations |
| [SIEM / SOAR Platform] | Alert correlation and incident ticket creation | All monitoring alerts | SOC |
| [ITSM System] | Renewal ticket management and tracking | All renewal tasks | PKI Admin / System Owner |

### 7.3 Renewal Process

*Define the process for renewing certificates before they expire. Specify lead times, the use of new key pairs at renewal, and the approval workflow for renewals.*

1. **Initiation:** The PKI Admin or System Owner shall initiate the renewal process no later than **60 days before expiry** for public certificates and **30 days before expiry** for internal certificates.
2. **New Key Pair:** A new key pair shall be generated for each renewal unless a documented exception is approved by the CISO. Reuse of existing private keys at renewal is discouraged.
3. **CSR Generation:** A new CSR shall be generated on the target system and submitted through the approved request process (Section 5.2).
4. **Validation:** The renewed certificate shall undergo the same validation steps as a new certificate (Section 5.4).
5. **Deployment:** The renewed certificate shall be deployed and verified before the existing certificate expires.
6. **Old Certificate:** Upon successful deployment of the renewed certificate, the superseded certificate shall be revoked (Section 8) and the inventory updated (Section 9).

### 7.4 Emergency Renewal

*Define the procedure for emergency certificate renewal in cases where standard lead times cannot be met, including escalation contacts and acceptance of temporary risk.*

Where a certificate expiry is imminent (fewer than 7 days) and cannot be addressed through the standard renewal process, the PKI Admin shall:

1. Raise a P1 incident in [ITSM System] referencing the affected system and certificate.
2. Notify the CISO and System Owner immediately.
3. Initiate an emergency renewal through the approved CA using the expedited process defined in **Appendix C**.
4. Document the circumstances leading to the emergency renewal and submit a root cause analysis within 5 business days.
5. Record the incident in the certificate management log for audit purposes.

---

## 8. Revocation Procedures

### 8.1 Grounds for Revocation

*List the circumstances that shall trigger immediate or scheduled certificate revocation. Revocation is a critical security control; delays in revocation following key compromise can expose NCII systems to man-in-the-middle and impersonation attacks.*

A certificate shall be revoked immediately upon discovery of any of the following conditions:

| Revocation Trigger | Severity | Maximum Time to Revoke |
|---|---|---|
| Private key confirmed or suspected compromised | Critical | Within 24 hours |
| Certificate issued with incorrect information (e.g., wrong CN, SAN) | High | Within 24 hours |
| The CA that issued the certificate has been compromised or distrusted | Critical | Within 24 hours |
| System or service decommissioned | Medium | Within 5 business days |
| Certificate issued in violation of this Standard | High | Within 24 hours |
| Employee / contractor departure (client auth / email certificates) | Medium | Within 1 business day |
| Certificate no longer required (planned decommission) | Low | Prior to or at decommission date |
| CA/Browser Forum-mandated revocation | Variable | Per CA/BF timeline |

### 8.2 Revocation Process

*Define the step-by-step process for revoking a certificate, including who may authorise revocation, how it is executed, and how it is communicated.*

1. **Identification:** The PKI Admin or System Owner identifies a certificate requiring revocation.
2. **Assessment:** The PKI Admin assesses the urgency and grounds for revocation and categorises it per the table in Section 8.1.
3. **Authorisation:**
   - For certificates on NCII systems, revocation shall be authorised by the System Owner and a PKI Admin.
   - For emergency revocations due to key compromise, the CISO may directly authorise revocation without waiting for System Owner sign-off.
4. **Execution:**
   - **Public CA certificates:** Submit a revocation request to the issuing CA via the CA's management portal or API.
   - **Internal CA certificates:** Execute revocation through the internal CA management interface ([System Name]).
5. **CRL/OCSP Update:** Confirm that the revocation is reflected in the CA's CRL and/or OCSP responder within the expected timeframe.
6. **Replacement:** Where the revoked certificate supported an active service, initiate immediate certificate replacement (emergency renewal — Section 7.4).
7. **Communication:** Notify affected System Owners, the SOC, and, where applicable, the CISO of the revocation event.
8. **Inventory Update:** Update the Certificate Inventory (Section 9) to record the revocation.
9. **Post-Incident Review:** For revocations triggered by compromise, a formal incident review shall be conducted within [5/10] business days.

### 8.3 Verification of Revocation

*Revocation must be verifiable. Define how [Organisation Name] confirms that revoked certificates are no longer being served by affected systems.*

- The PKI Admin shall verify that the revoked certificate is no longer presented by the affected system or service within [1 hour / 4 hours] of revocation.
- Verification shall be performed using an appropriate inspection tool (e.g., [Tool Name], `openssl s_client`, browser certificate inspection).
- Verification results shall be documented in the revocation record.

---

## 9. Certificate Inventory Maintenance

### 9.1 Inventory Requirements

*A complete and accurate certificate inventory is foundational to effective certificate lifecycle management and regulatory compliance under Act 854, Section 18. This section defines the minimum data elements that must be recorded for every certificate deployed on an NCII system.*

[Organisation Name] shall maintain a Certificate Inventory ("Inventory") that provides a single source of truth for all digital certificates deployed on NCII systems. The Inventory shall be maintained in [CMDB / Certificate Management Platform / Dedicated Inventory System — Name and Reference].

### 9.2 Inventory Data Elements

*The following minimum data elements shall be captured for each certificate in the Inventory. Additional fields may be added at the discretion of the PKI/Security Operations team.*

| Field | Description | Mandatory |
|---|---|---|
| Certificate ID | Unique internal identifier | Yes |
| Common Name (CN) | Primary identifier from the certificate subject | Yes |
| Subject Alternative Names (SANs) | All hostnames, IPs, or emails covered | Yes |
| Serial Number | Certificate serial number as issued by the CA | Yes |
| Issuing CA | Name of the Certificate Authority | Yes |
| Certificate Type | TLS/SSL, Code Signing, Email, Client Auth, Device | Yes |
| Key Algorithm | RSA / ECDSA | Yes |
| Key Length | In bits | Yes |
| Signature Algorithm | SHA-256, SHA-384, etc. | Yes |
| Issue Date | Date certificate was issued | Yes |
| Expiry Date | Date certificate expires | Yes |
| Renewal Date (Target) | Planned renewal initiation date | Yes |
| Deployment Location | Hostname, IP address, or system name where deployed | Yes |
| Environment | Production / Pre-Production / Development / DR | Yes |
| System / Application Name | The system or application the certificate supports | Yes |
| System Owner | Name and contact details of the responsible owner | Yes |
| PKI Admin (Responsible) | PKI Admin responsible for this certificate | Yes |
| NCII Classification | Whether the system is designated NCII | Yes |
| Status | Active / Expiring / Expired / Revoked / Replaced | Yes |
| Last Updated | Date the inventory record was last updated | Yes |
| Notes | Any additional notes, exceptions, or deviations | Optional |

### 9.3 Inventory Accuracy and Reconciliation

*Define the controls in place to ensure the Inventory remains accurate and complete, including automated discovery, periodic reconciliation, and exception handling.*

- **Automated Discovery:** [Organisation Name] shall deploy certificate discovery tooling ([Tool Name]) to scan NCII network segments and identify certificates not recorded in the Inventory. Scans shall be performed at a minimum of [weekly / monthly].
- **Reconciliation:** A full reconciliation between discovered certificates and Inventory records shall be performed [quarterly]. Discrepancies shall be investigated and resolved within [10] business days.
- **New Deployments:** The Certificate Inventory shall be updated within [2] business days of any certificate being deployed to an NCII system.
- **Decommissioned Systems:** System Owners are responsible for notifying PKI/Security Operations when systems hosting certificates are decommissioned, to enable timely revocation and inventory removal.
- **Accuracy Assurance:** The PKI/Security Operations team shall perform an annual audit of the Certificate Inventory to confirm data accuracy and completeness. Audit findings shall be reported to the CISO.

### 9.4 Reporting

*Define the reports produced from the Certificate Inventory and their distribution.*

| Report | Frequency | Recipient | Purpose |
|---|---|---|---|
| Expiry Summary Report | Weekly | PKI Admin, System Owners | Identifies certificates expiring within 90 days |
| Overdue Renewal Report | Weekly | CISO, IT Manager | Certificates past renewal target date |
| Expired Certificate Report | Daily | CISO, SOC, PKI Admin | Certificates that have expired |
| Inventory Reconciliation Report | Quarterly | CISO | Reconciliation results and outstanding exceptions |
| Annual Audit Report | Annual | Board / Audit Committee | Full inventory audit results |

---

## 10. Roles and Responsibilities

*This section defines the roles involved in certificate management and their responsibilities. The RACI matrix below assigns Responsible, Accountable, Consulted, and Informed designations for key activities.*

### 10.1 Role Definitions

| Role | Description |
|---|---|
| **CISO** | Chief Information Security Officer — accountable for overall PKI governance and compliance |
| **PKI Administrator** | Designated technical staff responsible for day-to-day PKI and certificate operations |
| **System Owner** | The individual or team accountable for a specific NCII system |
| **Security Operations Centre (SOC)** | Monitors security alerts including certificate-related incidents |
| **IT Manager / Infrastructure Lead** | Responsible for infrastructure hosting NCII systems |
| **Risk and Compliance Team** | Responsible for regulatory compliance monitoring and audit coordination |
| **Internal Audit** | Provides independent assurance over certificate management controls |
| **Third-Party Vendors** | External parties with certificate management responsibilities under contract |

### 10.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | CISO | PKI Admin | System Owner | SOC | IT Manager | Risk & Compliance | Internal Audit |
|---|---|---|---|---|---|---|---|
| Define and maintain this Standard | A | R | C | I | C | C | I |
| Approve CA additions/removals | A | R | I | — | I | C | I |
| Process certificate requests | I | R | C | — | C | — | — |
| Approve certificate requests | C | A | R | — | — | — | — |
| Deploy certificates | I | C | R | I | R | — | — |
| Monitor certificate expiry | I | R | R | R | I | — | — |
| Initiate certificate renewal | I | R | R | — | — | — | — |
| Authorise certificate revocation | A | R | R | I | I | — | — |
| Execute certificate revocation | I | R | I | I | — | — | — |
| Maintain certificate inventory | I | R | C | — | — | — | — |
| Conduct inventory reconciliation | C | R | I | — | — | I | — |
| Report expired/compromised certs | I | R | R | R | I | I | — |
| Conduct annual audit of inventory | A | C | I | — | — | C | R |
| Escalate P1 certificate incidents | A | R | R | R | I | I | — |
| Review and approve policy exceptions | A | C | C | — | — | R | — |

---

## 11. Non-Compliance and Exceptions

### 11.1 Non-Compliance

*Define how instances of non-compliance with this Standard are handled, including detection, escalation, and remediation.*

Any deviation from this Standard on NCII systems shall be treated as a security control failure and handled as follows:

1. **Detection:** Non-compliance may be identified through automated monitoring, audit activities, or self-reporting.
2. **Logging:** The non-compliant condition shall be recorded in [ITSM System / Security Risk Register].
3. **Assessment:** The PKI/Security Operations team shall assess the risk associated with the non-compliant condition.
4. **Escalation:** Material non-compliance shall be escalated to the CISO within [1 business day].
5. **Remediation:** A remediation plan with defined timelines shall be agreed with the System Owner and tracked to closure.
6. **Reporting:** Persistent or repeated non-compliance shall be reported to the Risk and Compliance team and may be escalated to the Audit Committee.

### 11.2 Exception Management

*Define the process for obtaining a formal exception to this Standard, including who may approve exceptions and the maximum duration of any exception.*

Exceptions to this Standard may be granted where there is a documented business or technical justification. Exceptions shall not be granted where doing so would expose NCII systems to unacceptable risk.

| Step | Action | Responsible |
|---|---|---|
| 1 | Submit a completed Exception Request Form (**Appendix D**) to PKI/Security Operations | Requestor |
| 2 | PKI/Security Operations assess the risk and document compensating controls | PKI Admin |
| 3 | Exception reviewed and approved / rejected by CISO | CISO |
| 4 | Approved exceptions recorded in the Exception Register | Risk and Compliance |
| 5 | Exception reviewed at each renewal date (maximum 12-month term) | PKI Admin / Risk |
| 6 | Exception closure confirmed and documented upon remediation | PKI Admin |

---

## 12. Review and Approval

### 12.1 Document Review

This Standard shall be reviewed at least **annually** or upon any of the following triggers:

- Material changes to Act 854, NACSA guidance, or related regulations
- Significant changes to [Organisation Name]'s PKI infrastructure or NCII system landscape
- Discovery of a significant vulnerability or compromise affecting certificate management
- Recommendations arising from internal or external audit
- Changes to CA/Browser Forum Baseline Requirements affecting certificate validity or algorithm requirements

### 12.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| PKI/Security Operations Lead | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Technology Officer (CTO) | [Name] | [Signature] | [Date] |
| Risk and Compliance Manager | [Name] | [Signature] | [Date] |
| [Additional Approver, if required] | [Name] | [Signature] | [Date] |

---

## 13. References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), Section 18 | Primary legislative obligation governing cybersecurity measures for NCII entities |
| NACSA NCII Cybersecurity Framework | Operational framework implementing Act 854 obligations |
| Bank Negara Malaysia — Risk Management in Technology (RMIT) Policy | Sector-specific requirements for financial institutions |
| Personal Data Protection Act 2010 (Act 709) | Data protection obligations relevant to certificate subject information |
| ISO/IEC 27001:2022, Control A.8.24 — Use of Cryptography | International standard for cryptographic controls |
| NIST Special Publication 800-57 (Parts 1–3) | Key management recommendations and algorithm guidance |
| NIST Special Publication 800-131A | Transitioning the Use of Cryptographic Algorithms and Key Lengths |
| CA/Browser Forum Baseline Requirements for the Issuance and Management of Publicly-Trusted Certificates | Industry baseline for public CA certificate management |
| RFC 5280 — Internet X.509 PKI Certificate and CRL Profile | Technical specification for X.509 certificates |
| RFC 6960 — Online Certificate Status Protocol (OCSP) | Technical specification for OCSP |
| [Organisation Name] — Information Security Policy | [Document Reference] |
| [Organisation Name] — Cryptographic Controls Policy | [Document Reference] |
| [Organisation Name] — Incident Response Policy | [Document Reference] |
| [Organisation Name] — Risk Management Framework | [Document Reference] |

---

## 14. Appendices

### Appendix A — Certificate Authority Evaluation Criteria

*This appendix defines the minimum evaluation criteria that must be met for a Certificate Authority to be approved for use on [Organisation Name]'s NCII systems.*

| Evaluation Criterion | Requirement |
|---|---|
| Trust Programme Membership | Must be a member of a recognised trust programme (WebTrust, ETSI, or equivalent) |
| CA/Browser Forum Membership | Public CAs must be members of the CA/Browser Forum |
| Audit Status | Must have a current, unqualified audit report (WebTrust or equivalent) |
| Revocation Infrastructure | Must operate both CRL and OCSP services with defined availability SLAs |
| Incident History | No unresolved misissuance incidents within the past [24] months |
| Geographic and Legal Jurisdiction | [Organisation Name] must be comfortable with the legal jurisdiction of the CA's operations |
| Algorithm Support | Must support approved algorithms as specified in Section 6 |
| Certificate Transparency | For public CAs, must log all issued certificates to a CT log |
| Support and SLAs | Must provide documented SLAs for issuance, revocation, and emergency support |

---

### Appendix B — Certificate Request Form Template

*This appendix provides the standard Certificate Request Form to be used when submitting a certificate request for an NCII system.*

**Certificate Request Form**

| Field | Value |
|---|---|
| **Request Date** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Department** | [Department] |
| **Requestor Contact** | [Email / Phone] |
| **System / Application Name** | [Name] |
| **System Owner** | [Name] |
| **Environment** | Production / Pre-Production / Development / DR |
| **NCII Designated System** | Yes / No |
| **Certificate Type** | TLS/SSL / Code Signing / Email / Client Auth / Device |
| **Common Name (CN)** | [e.g., app.example.com.my] |
| **Subject Alternative Names** | [List all SANs] |
| **Key Algorithm / Length** | [e.g., RSA 4096 / ECDSA P-256] |
| **Validity Period Requested** | [e.g., 12 months] |
| **Issuing CA Requested** | [CA Name — from Approved CA List] |
| **Key Usage / EKU** | [e.g., Digital Signature, Key Encipherment, Server Authentication] |
| **Business Justification** | [Brief description] |
| **Ticket / Change Reference** | [ITSM Reference Number] |
| **Requestor Signature** | [Signature] |
| **System Owner Approval** | [Signature / Date] |
| **PKI Admin Approval** | [Signature / Date] |

---

### Appendix C — Emergency Renewal Procedure

*This appendix defines the accelerated process for emergency certificate renewal where standard lead times cannot be met.*

**Trigger Conditions:** Certificate expiry within 7 days, or immediate replacement required following compromise or revocation.

**Steps:**

1. PKI Admin raises a P1 incident in [ITSM System] and notifies the CISO.
2. CISO authorises emergency renewal verbally or by email (formal documentation to follow within 24 hours).
3. PKI Admin contacts the issuing CA's emergency support channel: [CA Emergency Contact Details].
4. A new CSR is generated on the target system.
5. The CA issues the replacement certificate under expedited processing.
6. The replacement certificate is deployed and verified.
7. The old/expired certificate is revoked where possible.
8. The Certificate Inventory is updated.
9. A root cause analysis is completed within 5 business days and submitted to the CISO and Risk and Compliance team.

---

### Appendix D — Exception Request Form Template

*This appendix provides the standard form for requesting an exception to this Standard.*

**Certificate Management Standard — Exception Request Form**

| Field | Value |
|---|---|
| **Exception Request ID** | [Auto-generated / Manual Reference] |
| **Date Submitted** | [Date] |
| **Requestor Name** | [Name] |
| **Department** | [Department] |
| **System / Application Name** | [Name] |
| **Standard Section(s) Affected** | [e.g., Section 6.1.1 — Key Length] |
| **Description of Non-Compliance** | [Describe the deviation from this Standard] |
| **Business / Technical Justification** | [Explain why compliance cannot be achieved] |
| **Risk Assessment** | [Describe the risks associated with this exception] |
| **Proposed Compensating Controls** | [Describe controls that mitigate the risk in lieu of compliance] |
| **Proposed Exception Duration** | [Maximum 12 months] |
| **Remediation Plan** | [Describe how full compliance will be achieved and by when] |
| **Requestor Signature** | [Signature / Date] |
| **PKI Admin Review** | [Signature / Date / Recommendation] |
| **CISO Decision** | Approved / Rejected — [Signature / Date] |
| **Exception Register Reference** | [Reference Number] |

---

### Appendix E — Certificate Inventory Template

*This appendix provides a sample spreadsheet structure for the Certificate Inventory. The live Inventory is maintained in [System Name / Location].*

| Cert ID | Common Name | SANs | Serial Number | Issuing CA | Type | Algorithm | Key Length | Sig Algorithm | Issue Date | Expiry Date | Renewal Target | Deployment Location | Environment | System Name | System Owner | PKI Admin | NCII | Status | Last Updated | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [ID] | [CN] | [SANs] | [Serial] | [CA] | [Type] | [RSA/ECDSA] | [bits] | [SHA-256] | [Date] | [Date] | [Date] | [Host/IP] | [Env] | [System] | [Owner] | [Admin] | [Y/N] | [Status] | [Date] | [Notes] |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It is intended solely for authorised personnel of [Organisation Name]. Unauthorised disclosure, reproduction, or distribution is prohibited. Queries regarding this document should be directed to [PKI/Security Operations contact email].