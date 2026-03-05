# Data Classification Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Governance / CISO |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 6 months from Last Review] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) — NACSA |
| **Applicable Sections** | Section 18, Section 49 |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Data Classification Framework](#2-data-classification-framework)
3. [Data Type Descriptions](#3-data-type-descriptions)
4. [Classification Levels](#4-classification-levels)
5. [Processing Systems](#5-processing-systems)
6. [Handling Requirements](#6-handling-requirements)
7. [Retention Periods](#7-retention-periods)
8. [Cross-Border Transfer Restrictions](#8-cross-border-transfer-restrictions)
9. [Master Data Classification Register](#9-master-data-classification-register)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Data Classification Register serves as the authoritative record of all data types processed, stored, or transmitted by **[Organization Name]** within its National Critical Information Infrastructure (NCII) systems. It documents the classification level assigned to each data type, the systems that process such data, and the corresponding handling, retention, and transfer requirements mandated under the **Cyber Security Act 2024 (Act 854)**.

This register is maintained in accordance with:

- **Section 18** of Act 854, which requires NCII entities to implement measures for the protection and management of information assets within their designated critical information infrastructure sectors.
- **Section 49** of Act 854, which establishes obligations relating to the reporting, management, and safeguarding of information held by or relating to NCII operators.

### 1.2 Scope

This register applies to:

- All data types processed by systems designated as NCII under Act 854.
- All departments, business units, and third-party entities that access, process, store, or transmit data on behalf of **[Organization Name]**.
- On-premises, cloud-hosted, and hybrid environments forming part of the NCII system boundary.
- Data at rest, data in transit, and data in use within the defined NCII perimeter.

### 1.3 Objectives

- Establish a comprehensive inventory of data types processed across NCII systems.
- Assign appropriate classification levels to data based on sensitivity, criticality, and regulatory obligations.
- Define minimum handling, storage, and transmission requirements per classification level.
- Support compliance with Act 854, the Personal Data Protection Act 2010 (PDPA), and any applicable BNM regulatory requirements.
- Provide a baseline for data-centric security controls, risk assessments, and incident response activities.

---

## 2. Data Classification Framework

### 2.1 Classification Scheme Overview

*Provide a brief description of the organization's data classification tiers. Align tiers with national and sector-specific standards. The example below uses a four-tier model consistent with NACSA guidance and common Malaysian financial sector practice.*

**[Organization Name]** adopts the following classification tiers for all data processed within its NCII systems:

| Classification Level | Label | Description | Example Data Types |
|---|---|---|---|
| **Level 1** | Top Secret / Rahsia Besar | Extremely sensitive; unauthorised disclosure could cause severe national security, financial stability, or critical infrastructure impact. | NCII system architecture blueprints, national security intelligence feeds |
| **Level 2** | Confidential / Sulit | Sensitive; unauthorised disclosure could cause significant harm to the organization, clients, or regulated operations. | Customer PII, financial transaction records, authentication credentials, cryptographic keys |
| **Level 3** | Internal / Dalaman | Not for public release; disclosure could cause moderate harm or reputational damage. | Internal policies, staff records, operational procedures, system configurations |
| **Level 4** | Public / Awam | Approved for public release; disclosure carries negligible risk. | Published annual reports, public-facing product information, regulatory disclosures |

### 2.2 Classification Authority

*Identify who has authority to assign, review, and change classification levels. Reference the RACI table in Section 10.*

| Action | Authority |
|---|---|
| Initial classification assignment | Data Owner (Business Unit Head) |
| Classification escalation | Data Governance Committee |
| Classification declassification | CISO, subject to Data Governance Committee approval |
| Periodic review and validation | Data Governance / CISO Office |

### 2.3 Classification Review Triggers

Beyond scheduled semi-annual reviews, a classification review shall be initiated when:

- A new data type is introduced into an NCII system.
- An existing system undergoes material change or system boundary expansion.
- A regulatory or legislative change affects data sensitivity requirements.
- A security incident or near-miss suggests misclassification.
- A third-party data sharing arrangement is established or materially amended.

---

## 3. Data Type Descriptions

*For each distinct data type processed within NCII systems, provide a clear, unambiguous description. Descriptions should be specific enough to enable consistent classification decisions and should reference the business process or regulatory obligation that creates or requires the data.*

### 3.1 Data Type Catalogue

| Data Type ID | Data Type Name | Description | Business Process / Source | Regulatory Basis |
|---|---|---|---|---|
| DT-001 | [Data Type Name] | [Brief description of what this data represents, how it is generated, and what it contains] | [e.g., Customer Onboarding, Payment Processing] | [e.g., PDPA s.4, Act 854 s.18] |
| DT-002 | [Data Type Name] | [Brief description] | [Business Process] | [Regulatory Basis] |
| DT-003 | [Data Type Name] | [Brief description] | [Business Process] | [Regulatory Basis] |
| DT-004 | [Data Type Name] | [Brief description] | [Business Process] | [Regulatory Basis] |
| DT-005 | [Data Type Name] | [Brief description] | [Business Process] | [Regulatory Basis] |
| DT-006 | [Data Type Name] | [Brief description] | [Business Process] | [Regulatory Basis] |
| DT-007 | [Data Type Name] | [Brief description] | [Business Process] | [Regulatory Basis] |
| DT-008 | [Data Type Name] | [Brief description] | [Business Process] | [Regulatory Basis] |
| *[Add rows as required]* | | | | |

### 3.2 Sensitive Data Categories

*Identify data types that fall under specific regulated categories, requiring heightened protection beyond standard classification controls.*

| Sensitive Category | Definition | Applicable Data Type IDs |
|---|---|---|
| Personal Data (PDPA) | Data relating to a living individual who can be identified | [DT-XXX, DT-XXX] |
| Sensitive Personal Data (PDPA s.40) | Health, political opinion, religious belief, criminal record, etc. | [DT-XXX] |
| Financial Account Data | Account numbers, balances, transaction histories | [DT-XXX, DT-XXX] |
| Authentication Credentials | Passwords, PINs, biometric templates, cryptographic keys | [DT-XXX] |
| NCII Operational Data | Data describing NCII system configurations, vulnerabilities, or operations | [DT-XXX] |
| [Additional Category] | [Definition] | [DT-XXX] |

---

## 4. Classification Levels

*For each data type identified in Section 3, record the assigned classification level, the rationale for that classification, and the date it was assigned or last reviewed. Any data type that is upgraded or downgraded in classification must have the change documented in the Version History (Section 11) and in the entry below.*

### 4.1 Classification Assignments

| Data Type ID | Data Type Name | Classification Level | Classification Label | Rationale | Classified By | Classification Date | Last Reviewed |
|---|---|---|---|---|---|---|---|
| DT-001 | [Data Type Name] | [1 / 2 / 3 / 4] | [Top Secret / Confidential / Internal / Public] | [Brief rationale for the assigned level] | [Name / Role] | [Date] | [Date] |
| DT-002 | [Data Type Name] | [Level] | [Label] | [Rationale] | [Name / Role] | [Date] | [Date] |
| DT-003 | [Data Type Name] | [Level] | [Label] | [Rationale] | [Name / Role] | [Date] | [Date] |
| DT-004 | [Data Type Name] | [Level] | [Label] | [Rationale] | [Name / Role] | [Date] | [Date] |
| DT-005 | [Data Type Name] | [Level] | [Label] | [Rationale] | [Name / Role] | [Date] | [Date] |
| *[Add rows as required]* | | | | | | | |

### 4.2 Classification Change Log

*Record all changes to classification levels to maintain an auditable history of reclassification decisions.*

| Change ID | Data Type ID | Data Type Name | Previous Level | New Level | Reason for Change | Approved By | Change Date |
|---|---|---|---|---|---|---|---|
| CCL-001 | [DT-XXX] | [Name] | [Old Level] | [New Level] | [Reason] | [Approver] | [Date] |
| *[Add rows as required]* | | | | | | | |

---

## 5. Processing Systems

*Document all NCII systems and sub-systems that process each classified data type. This section supports system-level security control mapping and is essential for scoping incident response, business continuity, and regulatory reporting obligations under Act 854 s.18.*

### 5.1 System Inventory (NCII Scope)

*List all systems within the NCII boundary that process classified data. Cross-reference with the organization's asset register.*

| System ID | System Name | System Type | Owner | NCII Designation | Hosting Environment | Data Types Processed |
|---|---|---|---|---|---|---|
| SYS-001 | [System Name] | [e.g., Core Banking, Payment Gateway, HRMS] | [Business Unit] | [Yes / No] | [On-Premises / Cloud / Hybrid] | [DT-001, DT-003, DT-005] |
| SYS-002 | [System Name] | [Type] | [Owner] | [Yes / No] | [Environment] | [DT-XXX, DT-XXX] |
| SYS-003 | [System Name] | [Type] | [Owner] | [Yes / No] | [Environment] | [DT-XXX, DT-XXX] |
| SYS-004 | [System Name] | [Type] | [Owner] | [Yes / No] | [Environment] | [DT-XXX, DT-XXX] |
| *[Add rows as required]* | | | | | | |

### 5.2 Data-to-System Mapping

*For each data type, document all systems involved in its lifecycle (creation, processing, storage, transmission, destruction).*

| Data Type ID | Data Type Name | Classification | Creating System | Processing Systems | Storage Systems | Transmission Channels | Disposal Method |
|---|---|---|---|---|---|---|---|
| DT-001 | [Name] | [Level] | [SYS-XXX] | [SYS-XXX, SYS-XXX] | [SYS-XXX] | [e.g., TLS 1.3, SFTP, API Gateway] | [e.g., Secure wipe, Cryptographic erasure] |
| DT-002 | [Name] | [Level] | [SYS-XXX] | [SYS-XXX] | [SYS-XXX] | [Channel] | [Method] |
| *[Add rows as required]* | | | | | | | |

### 5.3 Third-Party and Cloud Processing

*Identify any third-party processors or cloud service providers that process NCII-scoped data on behalf of [Organization Name]. Ensure data processing agreements (DPAs) are in place and referenced.*

| Third-Party / CSP | Service Description | Data Types Shared | Classification Levels | DPA Reference | DPA Expiry | Security Assurance |
|---|---|---|---|---|---|---|
| [Vendor Name] | [Service Description] | [DT-XXX, DT-XXX] | [Level] | [Contract / DPA ID] | [Date] | [e.g., ISO 27001, SOC 2 Type II] |
| *[Add rows as required]* | | | | | | |

---

## 6. Handling Requirements

*Specify the minimum security and operational controls that must be applied to each classification level. Handling requirements govern how data is stored, transmitted, accessed, labelled, and disposed of. These requirements must be applied consistently across all systems identified in Section 5.*

### 6.1 Handling Requirements by Classification Level

| Control Domain | Level 1 — Top Secret | Level 2 — Confidential | Level 3 — Internal | Level 4 — Public |
|---|---|---|---|---|
| **Labelling** | Physical and digital label "RAHSIA BESAR" on all copies and containers | Label "SULIT" on all documents, files, and containers | Label "DALAMAN" on all internal documents and files | No mandatory label required |
| **Access Control** | Need-to-know; named individuals only; biometric or MFA required; privileged access review quarterly | Role-based access; MFA mandatory; access review semi-annual | Role-based access; standard authentication; access review annual | Publicly accessible; no access restriction |
| **Storage (Digital)** | Encrypted at rest (AES-256 or equivalent); air-gapped or isolated network segment | Encrypted at rest (AES-256); stored on secured, access-controlled systems | Stored on organization-managed systems; encryption recommended | May be stored on public-facing systems |
| **Storage (Physical)** | Locked security cabinet; secure room access; dual-key control where applicable | Locked cabinet or secure room; clean-desk policy enforced | Locked storage when unattended | No special physical storage required |
| **Transmission (Digital)** | Encrypted in transit (TLS 1.3 minimum); point-to-point; no public networks | Encrypted in transit (TLS 1.2 minimum); approved secure channels only | Encrypted in transit recommended; internal network acceptable | No encryption requirement; standard network transmission |
| **Transmission (Physical)** | Approved courier; tamper-evident packaging; chain-of-custody log required | Approved courier or secure internal post; tracked delivery | Standard internal mail; avoid external transmission | Standard postal or delivery services |
| **Copying / Printing** | Prohibited without CISO written approval; secure printing only | Restricted; recorded in copy register; secure printing | Permitted for business purposes; record significant reproduction | Unrestricted |
| **Email** | Prohibited via standard email; use approved encrypted channel only | Encrypted email only (S/MIME or equivalent); no personal email | Internal email acceptable; external email with caution | Unrestricted |
| **Screen / Display** | Screen privacy filter mandatory; no display in public areas | Screen privacy filter recommended; position screen away from non-authorized personnel | Standard screen use; avoid public areas for sensitive work | No restriction |
| **Disposal** | Certified destruction; witnessed; destruction certificate issued | Cross-cut shredding (paper); certified secure wipe / cryptographic erasure (digital) | Cross-cut shredding (paper); standard secure wipe (digital) | Standard disposal; recycling acceptable |
| **Incident Reporting** | Immediate notification to CISO and NACSA; Act 854 s.49 reporting obligation applies | Notify CISO within 1 hour; regulatory reporting assessment within 4 hours | Notify IT Security within 24 hours | Standard IT helpdesk reporting |

### 6.2 Data-Specific Handling Requirements

*In addition to the tier-level controls above, document any data-type-specific handling requirements that supplement or exceed the standard tier controls.*

| Data Type ID | Data Type Name | Classification | Supplementary Handling Requirement | Regulatory Basis |
|---|---|---|---|---|
| DT-001 | [Name] | [Level] | [e.g., Must be pseudonymised prior to use in non-production environments] | [PDPA / Act 854 / BNM requirement] |
| DT-002 | [Name] | [Level] | [Specific requirement] | [Basis] |
| *[Add rows as required]* | | | | |

---

## 7. Retention Periods

*Document the minimum and maximum retention period for each data type, the legal or regulatory basis for the retention period, the approved disposal method at end of retention, and the system(s) responsible for enforcing retention. Retention schedules must comply with PDPA obligations, Act 854 requirements, and any applicable BNM or sector-specific directives.*

### 7.1 Retention Schedule

| Data Type ID | Data Type Name | Classification | Minimum Retention | Maximum Retention | Retention Basis | Storage Location | Disposal Method | Disposal Authority |
|---|---|---|---|---|---|---|---|---|
| DT-001 | [Name] | [Level] | [e.g., 7 years] | [e.g., 10 years] | [e.g., PDPA, Financial Services Act, internal policy] | [SYS-XXX] | [e.g., Cryptographic erasure, Certified shredding] | [Role / Team] |
| DT-002 | [Name] | [Level] | [Period] | [Period] | [Basis] | [System] | [Method] | [Authority] |
| DT-003 | [Name] | [Level] | [Period] | [Period] | [Basis] | [System] | [Method] | [Authority] |
| DT-004 | [Name] | [Level] | [Period] | [Period] | [Basis] | [System] | [Method] | [Authority] |
| DT-005 | [Name] | [Level] | [Period] | [Period] | [Basis] | [System] | [Method] | [Authority] |
| *[Add rows as required]* | | | | | | | | |

### 7.2 Legal Hold Provisions

*Document the process for placing data under legal hold, which suspends normal retention and disposal schedules.*

When data subject to this register is required for:

- Active litigation, regulatory investigation, or audit;
- A NACSA or PDRM investigation under Act 854;
- A BNM examination or enforcement action;

the following legal hold process shall apply:

1. Legal/Compliance team issues a **Legal Hold Notice** referencing the specific data types, systems, and date range in scope.
2. Data Type IDs subject to hold are flagged in this register with status **"Legal Hold — Active"** and the Hold Reference Number.
3. Automated and manual disposal processes for affected data types are suspended for the duration of the hold.
4. Legal Hold status is reviewed quarterly by Legal/Compliance and CISO.

| Hold Reference | Data Type IDs in Scope | Systems in Scope | Hold Initiated | Hold Basis | Reviewing Officer | Status |
|---|---|---|---|---|---|---|
| LH-001 | [DT-XXX] | [SYS-XXX] | [Date] | [Legal / Regulatory basis] | [Name] | [Active / Lifted] |
| *[Add rows as required]* | | | | | | |

---

## 8. Cross-Border Transfer Restrictions

*Document restrictions and requirements applicable to the transfer of classified data outside Malaysia, including to cloud environments hosted abroad, foreign subsidiaries, or international third-party processors. Restrictions are governed by PDPA (transfer to third countries), Act 854 national security provisions, and applicable BNM outsourcing guidelines.*

### 8.1 Transfer Restriction Framework

| Classification Level | Default Cross-Border Transfer Position | Approval Required | Conditions |
|---|---|---|---|
| **Level 1 — Top Secret** | **Prohibited** | Transfer prohibited regardless of destination | No cross-border transfer permitted. Localisation mandatory. |
| **Level 2 — Confidential** | **Restricted** | CISO + Data Governance Committee approval required per transfer arrangement | Destination country must have adequate data protection laws; DPA mandatory; encryption in transit required; NACSA notification may be required under Act 854 s.49 |
| **Level 3 — Internal** | **Conditional** | Business Unit Head approval; Legal/Compliance review for regulated data | Standard DPA / data sharing agreement required; encryption in transit recommended |
| **Level 4 — Public** | **Permitted** | No approval required | No restriction |

### 8.2 Cross-Border Transfer Register

*Record all approved and active cross-border data transfer arrangements. Each arrangement must reference the data types transferred, destination jurisdiction, legal basis, and applicable safeguards.*

| Transfer ID | Data Type IDs | Classification | Recipient Organization | Recipient Country | Transfer Purpose | Legal Basis | Safeguards in Place | DPA Reference | Approval Date | Approved By | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| XBT-001 | [DT-XXX] | [Level] | [Recipient Name] | [Country] | [e.g., Cloud storage, Disaster recovery, Outsourced processing] | [e.g., PDPA s.129, Contractual necessity] | [e.g., Standard Contractual Clauses, ISO 27001 certified, Encryption] | [DPA-XXX] | [Date] | [Name / Role] | [Date] | [Active / Suspended / Terminated] |
| XBT-002 | [DT-XXX] | [Level] | [Recipient] | [Country] | [Purpose] | [Basis] | [Safeguards] | [DPA Ref] | [Date] | [Approver] | [Date] | [Status] |
| *[Add rows as required]* | | | | | | | | | | | | |

### 8.3 Restricted and Prohibited Jurisdictions

*List any jurisdictions to which data transfer is specifically prohibited or restricted under BNM, NACSA, or organizational policy. Review this list at each semi-annual register review.*

| Jurisdiction | Restriction Level | Reason | Effective Date | Review Date |
|---|---|---|---|---|
| [Country / Region] | [Prohibited / Restricted] | [e.g., Sanctions, inadequate data protection regime, national security concern] | [Date] | [Date] |
| *[Add rows as required]* | | | | |

### 8.4 Notification Obligations for Cross-Border Transfers

Where a cross-border transfer involves data processed within an NCII system, **[Organization Name]** shall:

- Assess whether the transfer constitutes a material change to NCII operations requiring NACSA notification under **Act 854 s.49**.
- Ensure the DPA with the foreign recipient explicitly binds the recipient to data handling standards equivalent to or exceeding those required under this register.
- Retain copies of all transfer approval records, DPAs, and adequacy assessments for a minimum of **[X] years** following termination of the transfer arrangement.

---

## 9. Master Data Classification Register

*This section consolidates all preceding sections into a single-view register suitable for operational use, audit review, and regulatory examination. Each row represents a distinct data type and captures its key classification attributes across all dimensions covered in this document.*

*This register should be maintained as a living record. All fields must be current as of the Last Review Date stated in the document header.*

| Data Type ID | Data Type Name | Description | Classification Level | Classification Label | Business Process | Processing Systems | Regulated Category | Retention (Min) | Retention (Max) | Cross-Border Transfer | Handling Summary | Data Owner | Last Reviewed | Next Review |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| DT-001 | [Name] | [Brief description] | [1–4] | [Label] | [Process] | [SYS-XXX, SYS-XXX] | [e.g., Personal Data, NCII Operational] | [Period] | [Period] | [Permitted / Restricted / Prohibited] | [Key handling note] | [Owner Role] | [Date] | [Date] |
| DT-002 | [Name] | [Description] | [Level] | [Label] | [Process] | [SYS-XXX] | [Category] | [Period] | [Period] | [Status] | [Note] | [Owner] | [Date] | [Date] |
| DT-003 | [Name] | [Description] | [Level] | [Label] | [Process] | [SYS-XXX] | [Category] | [Period] | [Period] | [Status] | [Note] | [Owner] | [Date] | [Date] |
| DT-004 | [Name] | [Description] | [Level] | [Label] | [Process] | [SYS-XXX] | [Category] | [Period] | [Period] | [Status] | [Note] | [Owner] | [Date] | [Date] |
| DT-005 | [Name] | [Description] | [Level] | [Label] | [Process] | [SYS-XXX] | [Category] | [Period] | [Period] | [Status] | [Note] | [Owner] | [Date] | [Date] |
| DT-006 | [Name] | [Description] | [Level] | [Label] | [Process] | [SYS-XXX] | [Category] | [Period] | [Period] | [Status] | [Note] | [Owner] | [Date] | [Date] |
| DT-007 | [Name] | [Description] | [Level] | [Label] | [Process] | [SYS-XXX] | [Category] | [Period] | [Period] | [Status] | [Note] | [Owner] | [Date] | [Date] |
| DT-008 | [Name] | [Description] | [Level] | [Label] | [Process] | [SYS-XXX] | [Category] | [Period] | [Period] | [Status] | [Note] | [Owner] | [Date] | [Date] |
| *[Add rows as required]* | | | | | | | | | | | | | | |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for the creation, maintenance, and governance of this Data Classification Register. All roles must be formally assigned prior to the register's effective date.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Data Governance Committee | Data Owners (BU Heads) | IT / Systems Team | Legal / Compliance | Internal Audit | NACSA (External) |
|---|---|---|---|---|---|---|---|
| Establish and maintain Data Classification Register | A | C | R | C | C | I | I |
| Assign initial classification to new data types | C | A | R | C | C | — | — |
| Approve classification level changes | A | R | C | I | C | I | — |
| Define and update handling requirements per tier | A | R | C | R | C | I | I |
| Define and enforce retention schedules | C | A | R | R | R | I | — |
| Approve cross-border transfer arrangements | A | A | R | C | R | I | I |
| Conduct semi-annual register review | A | R | R | C | C | I | — |
| Monitor compliance with handling requirements | R | I | C | R | C | R | — |
| Report NCII data incidents to NACSA (Act 854 s.49) | A | C | C | R | C | I | R |
| Maintain legal hold records | I | I | C | R | A | I | — |
| Train staff on data classification obligations | R | A | C | C | C | I | — |
| Provide audit evidence to Internal Audit / Regulator | A | C | R | R | C | R | — |

### 10.1 Role Definitions

| Role | Responsibilities |
|---|---|
| **CISO** | Ultimate accountability for the data classification program; approves material changes; signs off on this register; escalates to NACSA as required under Act 854 |
| **Data Governance Committee** | Provides strategic direction for data classification; approves classification framework changes; resolves classification disputes |
| **Data Owners (BU Heads)** | Responsible for the accuracy of classification for data within their business domains; formally accepts classification assignments |
| **IT / Systems Team** | Implements technical controls aligned with handling requirements; maintains system inventory; enforces retention controls |
| **Legal / Compliance** | Advises on regulatory retention and transfer obligations; manages legal holds; reviews cross-border transfer legal bases |
| **Internal Audit** | Independently validates register completeness and control compliance; reports findings to Board Audit Committee |

---

## 11. Review and Approval

### 11.1 Review Schedule

This register shall be reviewed on a **semi-annual basis** (every 6 months) or upon occurrence of any of the following triggers:

- A new data type is introduced into an NCII system.
- A material change occurs to a processing system within the NCII boundary.
- A legislative, regulatory, or policy change affects data classification or handling requirements.
- A data-related security incident or breach is recorded.
- A significant organizational change (merger, acquisition, new business line) occurs.

### 11.2 Version History

| Version | Date | Author | Summary of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial issue of Data Classification Register | [Approver Name, Role] |
| 1.1 | [Date] | [Author Name, Role] | [e.g., Added DT-009 following launch of new payment product; updated retention for DT-003] | [Approver] |
| [X.X] | [Date] | [Author] | [Changes] | [Approver] |

### 11.3 Approval Sign-Off

*All approvers must review the complete register prior to signing. Approval confirms that the register accurately reflects the current data landscape, classification decisions are appropriate, and handling requirements are consistent with regulatory obligations under Act 854 and applicable law.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **CISO** | [Full Name] | | [Date] |
| **Chair, Data Governance Committee** | [Full Name] | | [Date] |
| **Head of Legal / Compliance** | [Full Name] | | [Date] |
| **Chief Risk Officer** | [Full Name] | | [Date] |
| **[Additional Approver, if required]** | [Full Name] | | [Date] |

---

## 12. References

The following legislation, regulations, and standards have been considered in the preparation of this register:

| Reference | Description | Applicable Sections |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Primary legislation governing NCII cybersecurity obligations in Malaysia | **Section 18** — Obligations of NCII entities; security measures for information assets. **Section 49** — Reporting and management of information; cybersecurity incident reporting |
| Personal Data Protection Act 2010 (Act 709) | Governs the processing of personal data of individuals in Malaysia | s.4 (Sensitive personal data), s.6 (Notice & Choice), s.9 (Security), s.10 (Retention), s.129 (Cross-border transfers) |
| Financial Services Act 2013 (Act 758) | Applies to licensed financial institutions; imposes data governance and operational risk obligations | s.47 (Confidentiality of information), s.120 (Outsourcing), relevant BNM policy documents |
| Islamic Financial Services Act 2013 (Act 759) | Applies to licensed Islamic financial institutions | Equivalent provisions to FSA 2013 |
| BNM Risk Management in Technology (RMiT) Policy | BNM policy document on technology and cyber risk management for financial institutions | Section 11 (Data management), Section 12 (Cloud services), Section 10.53–10.67 (Cyber risk) |
| NACSA National Cyber Security Framework | Framework supporting Act 854 implementation guidance for NCII operators | All applicable NCII-sector specific annexes |
| ISO/IEC 27001:2022 | International standard for information security management systems | Annex A.5.12 (Classification of information), A.5.13 (Labelling of information), A.5.14 (Information transfer) |
| ISO/IEC 27701:2019 | Extension to ISO 27001 for privacy information management | Clause 6.6 (Obligations to PII processors) |
| [Organization Name] Information Security Policy | Internal policy governing information security across all systems | [Policy ID, Version] |
| [Organization Name] Data Governance Policy | Internal policy establishing data classification standards and accountabilities | [Policy ID, Version] |

---

## 13. Appendices

### Appendix A — Data Classification Decision Tree

*Insert or attach a decision tree or flowchart to guide data owners in determining the appropriate classification level for new data types. The decision tree should address: Is the data personally identifiable? Does disclosure pose national security risk? Is the data restricted by regulation? What is the potential impact of unauthorised disclosure?*

[Insert Data Classification Decision Tree — refer to [Organization Name] Data Governance Policy, Appendix [X], or attach as separate document: **[Document ID]-AppA**]

---

### Appendix B — Approved Data Handling Procedures

*Reference or attach the detailed procedural guides for each classification level, covering step-by-step instructions for labelling, storage, transmission, printing, and disposal.*

| Procedure | Document Reference | Owner |
|---|---|---|
| Level 1 (Top Secret) Data Handling Procedure | [Procedure ID] | CISO Office |
| Level 2 (Confidential) Data Handling Procedure | [Procedure ID] | CISO Office |
| Level 3 (Internal) Data Handling Procedure | [Procedure ID] | IT / Data Governance |
| Cross-Border Data Transfer Approval Procedure | [Procedure ID] | Legal / Compliance |
| Data Disposal and Destruction Procedure | [Procedure ID] | IT / Records Management |

---

### Appendix C — Approved System and Tool List

*List all systems, tools, and platforms approved for processing each classification level. Staff must not use unapproved systems for classified data processing.*

| Tool / Platform | Approved For | Approved By | Approval Date | Restrictions |
|---|---|---|---|---|
| [System Name] | [Classification Levels] | [Approver] | [Date] | [e.g., No personal data; on-premises only] |
| [Cloud Platform] | [Level 3 and below] | [Approver] | [Date] | [e.g., Malaysian region only; DPA in place] |
| [Email Platform] | [Level 3 and below; Level 2 with encryption] | [Approver] | [Date] | [S/MIME required for Confidential] |
| *[Add rows as required]* | | | | |

---

### Appendix D — Data Classification Training Register

*Record completion of mandatory data classification training by all staff with access to NCII systems. Training must be completed upon onboarding and annually thereafter, or following a material change to this register.*

| Staff ID | Name | Role / Department | Training Module | Completion Date | Next Due Date |
|---|---|---|---|---|---|
| [Staff ID] | [Full Name] | [Role, Department] | [e.g., Data Classification Fundamentals v2.1] | [Date] | [Date] |
| *[Add rows as required]* | | | | | |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — Malaysian legislation establishing the legal framework for national cybersecurity, including obligations for NCII entities |
| **Classification Level** | A designated tier of sensitivity assigned to a data type, determining the minimum security and handling controls applicable |
| **Data Owner** | The designated individual (typically a Business Unit Head) accountable for the accuracy of classification and handling of data within their domain |
| **DPA** | Data Processing Agreement — a contractual instrument governing how a third-party processor may handle personal or classified data on behalf of the organization |
| **Legal Hold** | A directive suspending normal retention and disposal schedules for data subject to litigation, regulatory investigation, or audit |
| **NACSA** | National Cyber Security Agency — Malaysia's national cybersecurity agency responsible for NCII protection and enforcement of Act 854 |
| **NCII** | National Critical Information Infrastructure — information infrastructure whose disruption would have a debilitating impact on national security, public health, safety, or economic wellbeing |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data by commercial entities |
| **PII** | Personally Identifiable Information — any information that can be used to identify a living individual, directly or indirectly |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for defining roles and responsibilities in a process or governance activity |
| **Retention Period** | The defined period for which a data type must be retained before it may be lawfully disposed of |

---

*This document is classified as **Confidential** in accordance with [Organization Name]'s Data Classification Policy. It must be handled, stored, and transmitted in accordance with the requirements specified in Section 6 of this register for Confidential data. Unauthorised disclosure or reproduction is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Data Governance / CISO | Next Review: [Next Review Date]*