# Data Protection Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Protection Officer (DPO) / Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organisation** | [Organisation Name] |

---

> **Document Control Notice:** This document is classified **Confidential**. It must not be reproduced, distributed, or disclosed to unauthorised parties without the express written approval of the Data Protection Officer. All printed copies are uncontrolled. The master version is maintained in [Document Management System].

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Legal Framework](#3-regulatory-and-legal-framework)
4. [Definitions](#4-definitions)
5. [Data Processing Principles](#5-data-processing-principles)
6. [Lawful Basis for Processing](#6-lawful-basis-for-processing)
7. [Data Subject Rights](#7-data-subject-rights)
8. [Cross-Border Data Transfer Controls](#8-cross-border-data-transfer-controls)
9. [Breach Notification Obligations](#9-breach-notification-obligations)
10. [Data Retention and Disposal](#10-data-retention-and-disposal)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Training and Awareness](#12-training-and-awareness)
13. [Monitoring, Audit, and Compliance](#13-monitoring-audit-and-compliance)
14. [Policy Violations and Consequences](#14-policy-violations-and-consequences)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*This section should articulate the overarching intent of the policy and the regulatory obligations it is designed to fulfil. Reference the specific Acts and the organisation's strategic position as an operator of National Critical Information Infrastructure (NCII).*

This Data Protection Policy ("Policy") establishes the principles, obligations, and control framework governing the collection, processing, storage, transfer, and disposal of personal data and sensitive personal data within [Organisation Name] ("the Organisation").

[Organisation Name] operates as a [designated NCII sector entity / licensed financial institution / licensed digital service provider] and is subject to dual regulatory obligations under:

- The **Personal Data Protection Act 2010 (PDPA)**, which governs the commercial processing of personal data;
- The **Cyber Security Act 2024 (Act 854)**, which imposes cybersecurity obligations on National Critical Information Infrastructure (NCII) entities, including obligations under **Section 18** (duties of NCII entities) and **Section 49** (incident reporting), both of which intersect with personal data breach scenarios.

This Policy ensures that all personal data processed in the course of the Organisation's operations is handled lawfully, transparently, and securely, in a manner that respects the rights of data subjects and meets the expectations of the **National Cyber Security Agency (NACSA)**, the **Personal Data Protection Commissioner (PDPC)**, and **Bank Negara Malaysia (BNM)** where applicable.

---

## 2. Scope

*This section defines who and what is covered by this Policy. Be explicit about systems, entities, third parties, and data types that fall within and outside the scope.*

### 2.1 In-Scope Entities and Personnel

This Policy applies to:

- All **employees**, **contractors**, **consultants**, **temporary staff**, and **interns** of [Organisation Name];
- All **Board members** and **senior management** who exercise oversight of data processing activities;
- All **third-party service providers**, **data processors**, **outsourced service providers**, and **cloud service providers** engaged by the Organisation who process personal data on behalf of the Organisation;
- All **agents**, **representatives**, and **business partners** who have access to personal data held by the Organisation.

### 2.2 In-Scope Systems and Data

This Policy applies to all personal data and sensitive personal data that is:

- Collected, recorded, stored, disclosed, transferred, or otherwise processed by the Organisation;
- Processed by systems forming part of the Organisation's **NCII-designated infrastructure**;
- Held in any format, including **electronic records**, **paper-based records**, **audio/visual recordings**, and **biometric data**.

The following data categories are explicitly in scope:

| Data Category | Examples |
|---|---|
| **Personal Data** | Full name, identification number (MyKad/Passport), date of birth, address, telephone number, email address |
| **Financial Data** | Account numbers, transaction records, credit history, salary information |
| **Sensitive Personal Data** | Health/medical records, biometric data, racial/ethnic origin, religious beliefs, criminal records |
| **Employee Data** | HR records, payroll data, disciplinary records |
| **Customer Data** | KYC records, beneficial ownership data, risk profiling data |
| **Third-Party Data** | Supplier and vendor personal data |

### 2.3 Out-of-Scope

The following are excluded from the scope of this Policy unless otherwise stated:

- Personal data processed by individuals for purely personal or household activities;
- Anonymised or de-identified data that cannot be re-linked to an individual;
- Aggregated statistical data used solely for analytical or reporting purposes, where no individual can be identified.

### 2.4 Geographic Scope

This Policy applies to all processing activities conducted within Malaysia and extends to any processing of personal data of Malaysian residents conducted by the Organisation's overseas operations, affiliates, or third-party processors located outside Malaysia.

---

## 3. Regulatory and Legal Framework

*List all applicable legislation, regulatory guidelines, and standards. This section helps auditors and reviewers confirm that all relevant obligations have been considered. Include specific sections and clauses.*

### 3.1 Primary Legislation

| Instrument | Relevant Provisions | Regulatory Authority |
|---|---|---|
| Personal Data Protection Act 2010 (PDPA) | All Parts; particularly Part II (Principles), Part III (Sensitive Personal Data), Part IV (Rights of Data Subjects), Part V (Transfers) | Personal Data Protection Commissioner (PDPC) |
| Cyber Security Act 2024 (Act 854) | Section 18 (Duties of NCII Entity), Section 49 (Reporting of Cybersecurity Incidents) | National Cyber Security Agency (NACSA) |
| Financial Services Act 2013 (FSA) | Section 133 (Confidentiality of customer information) | Bank Negara Malaysia (BNM) |
| Islamic Financial Services Act 2013 (IFSA) | Section 145 (Confidentiality) | Bank Negara Malaysia (BNM) |
| Communications and Multimedia Act 1998 | Section 232 (Confidentiality) | Malaysian Communications and Multimedia Commission (MCMC) |

### 3.2 Subsidiary Legislation and Regulatory Guidelines

| Instrument | Issuing Authority |
|---|---|
| Personal Data Protection Regulations 2013 | Minister of Digital |
| Personal Data Protection (Class of Data Users) Order 2013 | Minister of Digital |
| BNM Policy Document: Risk Management in Technology (RMiT) | Bank Negara Malaysia |
| BNM Policy Document: Outsourcing | Bank Negara Malaysia |
| NACSA NCII Sector Guidelines — [Applicable Sector] | NACSA |
| ISO/IEC 27001:2022 — Information Security Management | [International Standard] |
| ISO/IEC 27701:2019 — Privacy Information Management | [International Standard] |

### 3.3 Cross-Reference to Act 854

The following provisions of the Cyber Security Act 2024 are directly relevant to this Policy:

| Section | Obligation | Policy Linkage |
|---|---|---|
| s18(1) | NCII entity shall take measures to manage cybersecurity risks to NCII | Sections 5, 6, 9, 10 of this Policy |
| s18(2) | NCII entity shall comply with cybersecurity codes of practice | Sections 5, 13 of this Policy |
| s49(1) | Mandatory reporting of cybersecurity incidents to NACSA | Section 9 of this Policy |
| s49(2) | Timeline and form of incident reporting | Section 9 of this Policy |

---

## 4. Definitions

*Define all technical and legal terms used throughout this Policy. Consistency in definitions is critical for auditability and legal defensibility.*

For the purposes of this Policy, the following definitions apply:

| Term | Definition |
|---|---|
| **Personal Data** | Any information in respect of commercial transactions that relates directly or indirectly to a data subject, who is identified or identifiable from that information, or from that and other information in the possession of a data user (PDPA s4). |
| **Sensitive Personal Data** | Personal data consisting of information as to the physical or mental health or condition of a data subject, their political opinions, religious beliefs or other beliefs of a similar nature, the commission or alleged commission of any offence, or any other personal data as the Minister may determine (PDPA s40). |
| **Data User** | A person who either alone or jointly or in common with other persons processes any personal data or has control over or authorises the processing of any personal data, but does not include a data processor (PDPA s4). |
| **Data Processor** | Any person, other than an employee of the data user, who processes the personal data solely on behalf of the data user, and does not process the personal data for any of their own purposes (PDPA s4). |
| **Data Subject** | An individual who is the subject of the personal data. |
| **Processing** | Collecting, recording, holding or storing the personal data or carrying out any operation or set of operations on the personal data including organising, adapting or altering, retrieving, consulting, disclosing, erasing or destroying it. |
| **NCII** | National Critical Information Infrastructure — computer systems and networks, whether physical or virtual, so vital to Malaysia that the incapacity or destruction of such systems would have a debilitating impact on national security, national defence, economy, public health, safety, or any combination of those matters (Act 854 s3). |
| **Cybersecurity Incident** | Any event that has the potential to adversely affect the confidentiality, integrity, or availability of information or information systems (Act 854 s3). |
| **Breach** | Any unauthorised access to, collection, use, disclosure, copying, modification, disposal, or similar actions on personal data. |
| **DPO** | Data Protection Officer — the officer responsible for overseeing the Organisation's data protection strategy and implementation. |
| **CISO** | Chief Information Security Officer — the officer responsible for the information security programme of the Organisation. |
| **Third-Party Processor** | An external organisation or individual engaged to process personal data on behalf of the Organisation under a written contractual arrangement. |
| **Pseudonymisation** | The processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of additional information. |
| **Anonymisation** | The irreversible process of altering personal data in such a way that a data subject cannot be identified directly or indirectly. |
| **Retention Period** | The defined period during which personal data must be kept for legitimate business, legal, or regulatory purposes. |
| **Disposal** | The permanent destruction or de-identification of personal data at the end of its defined retention period. |

---

## 5. Data Processing Principles

*Describe the core principles that govern all personal data processing activities. These must align directly with the seven principles in the PDPA and should be extended to reflect Act 854 obligations for NCII entities.*

[Organisation Name] is committed to processing all personal data in accordance with the following principles, which are derived from the PDPA and reinforced by the Organisation's obligations under Act 854 as an NCII entity.

### 5.1 General Principles

The Organisation shall adhere to the following seven data protection principles in all processing activities:

---

#### Principle 1 — General Principle (Consent and Purpose Limitation)

*Explain how the Organisation obtains valid consent and restricts processing to specified, explicit, and legitimate purposes.*

- Personal data shall only be processed with the **consent of the data subject**, except where an exemption applies under the PDPA or another written law.
- Personal data shall only be collected for **specified, explicit, and legitimate purposes** and shall not be further processed in a manner incompatible with those purposes.
- Data subjects shall be informed of the purposes of processing **at or before the time of collection** through a Privacy Notice.
- [Organisation Name] shall maintain a **Record of Processing Activities (RoPA)** (refer to **Appendix A**) documenting all processing activities, their purposes, and lawful bases.

---

#### Principle 2 — Notice and Disclosure Principle

*Specify how the Organisation informs data subjects of processing activities.*

- The Organisation shall provide data subjects with a clear, accessible **Privacy Notice** (refer to **Appendix B**) at the point of data collection.
- The Privacy Notice shall disclose, at a minimum:
  - The types of personal data being collected;
  - The purposes for which personal data is collected and processed;
  - The categories of third parties to whom personal data may be disclosed;
  - The data subject's right to request access to and correction of their personal data;
  - Contact details of the DPO.
- Any material changes to the Privacy Notice shall be communicated to data subjects in advance.

---

#### Principle 3 — Data Quality Principle

*Describe controls to ensure accuracy and currency of personal data.*

- Personal data processed by the Organisation shall be **accurate, complete, and up-to-date** as is necessary for the purpose of processing.
- The Organisation shall implement processes to allow data subjects to update their personal data.
- Personal data that is inaccurate or incomplete with respect to the purpose for which it is being processed shall be **rectified or erased** without undue delay.

---

#### Principle 4 — Data Minimisation and Relevance Principle

*Describe how data collection is limited to what is necessary.*

- Only personal data that is **adequate, relevant, and not excessive** in relation to the purpose(s) of processing shall be collected and maintained.
- Requests for personal data that exceed what is strictly necessary for the stated purpose shall be reviewed and rejected by the DPO.
- [Organisation Name] shall conduct **Data Protection Impact Assessments (DPIAs)** (refer to **Appendix C**) for new processing activities involving large-scale or sensitive personal data.

---

#### Principle 5 — Retention Principle

*Describe the Organisation's approach to retaining personal data only for as long as necessary.*

- Personal data shall not be held for longer than is **necessary for the fulfilment of the purpose** for which it was collected, or for any legal, regulatory, or business requirement.
- All personal data shall be subject to the **Data Retention Schedule** (refer to **Appendix D**) which specifies retention periods by data category.
- At the end of the applicable retention period, personal data shall be **securely disposed of** in accordance with Section 10 of this Policy.

---

#### Principle 6 — Data Integrity and Security Principle

*Outline the technical and organisational measures employed to protect personal data.*

- The Organisation shall implement appropriate **technical and organisational security measures** to protect personal data against loss, misuse, unauthorised access, disclosure, alteration, or destruction.
- Security measures shall be **proportionate to the sensitivity of the data** and the risks associated with processing.
- As an NCII entity under Act 854, [Organisation Name] shall ensure that security measures applied to NCII systems meet or exceed the requirements stipulated in the applicable **NACSA Cybersecurity Code of Practice**.
- Security measures shall include, but not be limited to:

| Control Category | Examples of Controls |
|---|---|
| Access Controls | Role-based access control (RBAC), multi-factor authentication (MFA), least privilege |
| Encryption | Encryption at rest (AES-256), encryption in transit (TLS 1.2 minimum) |
| Network Security | Firewalls, intrusion detection/prevention systems, network segmentation |
| Endpoint Security | Endpoint detection and response (EDR), patch management, device encryption |
| Monitoring | Security information and event management (SIEM), log retention, audit trails |
| Physical Security | Access controls to data centres and server rooms, CCTV, visitor management |
| Backup and Recovery | Regular backups, tested recovery procedures, offsite/cloud backup |

---

#### Principle 7 — Access Principle

*Describe how data subjects exercise access rights and how the Organisation responds.*

- Data subjects have the right to **access their personal data** held by the Organisation and to request **correction** of inaccurate data.
- The Organisation shall respond to access and correction requests within the timeframes specified in Section 7 of this Policy.
- A formal **Data Subject Request Procedure** (refer to **Appendix E**) is maintained to manage such requests.

---

### 5.2 Additional Principles for NCII Systems

In addition to the seven PDPA principles, the following supplementary principles apply to personal data processed within NCII-designated systems:

- **Resilience**: Personal data processing systems forming part of NCII shall be designed for resilience and continuity in accordance with the Organisation's Business Continuity Plan.
- **Compartmentalisation**: Sensitive personal data within NCII systems shall be logically separated from general operational data and subject to enhanced access controls.
- **Auditability**: All access to and processing of personal data within NCII systems shall generate immutable audit logs retained for a minimum of [12/24] months.

---

## 6. Lawful Basis for Processing

*This section establishes the legal grounds under which the Organisation processes personal data. Each processing activity must be mapped to a lawful basis. This is fundamental to PDPA compliance and reduces risk of regulatory action.*

### 6.1 Overview of Lawful Bases

Under the PDPA, the Organisation may process personal data where one or more of the following conditions are met:

| Lawful Basis | Description | Applicable PDPA Provision |
|---|---|---|
| **Consent** | The data subject has given explicit, informed, and voluntary consent to the processing of their personal data for one or more specific purposes. | PDPA s6 |
| **Contract Performance** | Processing is necessary for the performance of a contract to which the data subject is a party, or for taking steps at the request of the data subject prior to entering into a contract. | PDPA s6(a) |
| **Legal Obligation** | Processing is necessary for compliance with a legal obligation to which the Organisation is subject. | PDPA s6(b) |
| **Vital Interests** | Processing is necessary to protect the vital interests of the data subject or another natural person. | PDPA s6(c) |
| **Legitimate Interests** | Processing is necessary for the purposes of the legitimate interests pursued by the Organisation or by a third party, except where such interests are overridden by the fundamental rights and freedoms of the data subject. | PDPA s6(d) |
| **Public Interest / Official Authority** | Processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the Organisation. | PDPA s6(e) |

### 6.2 Processing Activity Register

*Complete the table below for each major category of processing activity. The DPO is responsible for maintaining this register and reviewing it at least annually.*

| Processing Activity | Personal Data Categories | Lawful Basis | Purpose | Data Subjects | Third Parties Involved |
|---|---|---|---|---|---|
| Customer onboarding (KYC) | Name, IC/Passport, address, financial data | Contract; Legal Obligation (FSA s47/AMLA) | Identity verification; regulatory compliance | Customers | [Third Party e.g. Credit Bureau, eKYC Provider] |
| Employee payroll processing | Name, IC, bank account, salary | Contract; Legal Obligation (Employment Act) | Salary disbursement; tax reporting | Employees | [Payroll Provider], LHDN |
| Marketing communications | Name, email, contact number | Consent | Customer engagement; product promotion | Customers | [Marketing Platform Provider] |
| Fraud detection and prevention | Transaction data, device fingerprint | Legitimate Interests; Legal Obligation | Prevention of financial crime | Customers | [Fraud Analytics Provider] |
| Cybersecurity monitoring (NCII) | User activity logs, IP addresses | Legal Obligation (Act 854 s18) | Protection of NCII; incident detection | Employees; System Users | NACSA (on incident) |
| Credit assessment | Financial data, employment history | Contract; Legal Obligation | Creditworthiness determination | Customers | [Credit Bureau] |
| Regulatory reporting | Customer transaction data | Legal Obligation | Statutory reporting to BNM, LFSA, PDPC | Customers | BNM, LFSA, PDPC, NACSA |
| [Add further processing activities] | [Data types] | [Basis] | [Purpose] | [Subjects] | [Parties] |

### 6.3 Consent Management

- Where **consent** is the lawful basis for processing, it shall be:
  - **Freely given** — not bundled with terms of service without granular opt-in;
  - **Specific** — obtained for defined purposes;
  - **Informed** — accompanied by a clear Privacy Notice;
  - **Unambiguous** — expressed through a clear affirmative action.
- Consent records shall be maintained in the **Consent Register** (refer to **Appendix F**), capturing the date, method, and scope of consent obtained.
- Data subjects shall be able to **withdraw consent** at any time through [designated channels, e.g., online portal, written request to DPO]. Withdrawal of consent shall not affect the lawfulness of processing prior to withdrawal.

### 6.4 Processing of Sensitive Personal Data

- Sensitive personal data (as defined in PDPA s40) shall **only be processed** where:
  - The data subject has given **explicit written consent**; or
  - Processing is required by or under any written law; or
  - Processing is necessary to protect the vital interests of the data subject; or
  - Processing relates to personal data which has been made public by the data subject.
- Any proposed new processing activity involving sensitive personal data shall be subject to a **Data Protection Impact Assessment (DPIA)** prior to commencement.

---

## 7. Data Subject Rights

*This section details the rights afforded to data subjects under the PDPA and the procedures the Organisation maintains to honour those rights. Auditors will look for evidence of operational procedures, not merely a statement of rights.*

### 7.1 Summary of Data Subject Rights

| Right | Description | PDPA Reference | Response Timeframe |
|---|---|---|---|
| **Right of Access** | Data subjects may request access to their personal data held by the Organisation. | PDPA Part IV, s30 | 21 days from receipt of request |
| **Right to Correction** | Data subjects may request correction of inaccurate, incomplete, misleading, or outdated personal data. | PDPA s34 | 21 days from receipt of request |
| **Right to Withdraw Consent** | Data subjects may withdraw consent to processing at any time, subject to legal or contractual constraints. | PDPA s38 | Without undue delay; confirmation within 14 days |
| **Right to Prevent Processing for Direct Marketing** | Data subjects may, by notice, require the Organisation to cease processing their personal data for direct marketing. | PDPA s43 | Effective upon receipt of notice |
| **Right to Prevent Processing Causing Damage or Distress** | Data subjects may request cessation of processing likely to cause substantial unwarranted damage or distress. | PDPA s42 | 21 days from receipt of notice |
| **Right to Lodge a Complaint** | Data subjects may lodge a complaint with the PDPC where they believe the Organisation has not complied with the PDPA. | PDPA s104 | N/A (regulatory process) |

### 7.2 Data Subject Request Procedure

#### 7.2.1 Submission of Requests

- Data subjects may submit requests to exercise their rights through the following channels:
  - **Written request** to: [DPO Name], Data Protection Officer, [Organisation Name], [Address]
  - **Email**: [DPO Email Address]
  - **Online Portal**: [URL of Data Subject Request Portal, if applicable]
- All requests shall be acknowledged within **[3] business days** of receipt.

#### 7.2.2 Identity Verification

- Prior to processing any data subject request, the Organisation shall verify the identity of the requestor to prevent unauthorised disclosure.
- Acceptable identity verification methods include:
  - Government-issued identification (MyKad, passport);
  - Verification via [online portal authentication / in-branch verification].
- For requests submitted on behalf of a data subject (e.g., by a legal representative), proof of authority shall be required.

#### 7.2.3 Processing and Response

- The designated team (DPO Office / [Compliance Team]) shall process requests and provide a response within the timeframes specified in Section 7.1.
- Where a request is refused, the Organisation shall provide written reasons for refusal and inform the data subject of their right to escalate to the PDPC.

#### 7.2.4 Grounds for Refusal

The Organisation may refuse a data subject request where:
- Compliance would result in disclosure of personal data relating to another individual;
- The request is manifestly unfounded, excessive, or repetitive;
- Exemptions apply under PDPA s45 (e.g., national security, prevention of crime, legal proceedings);
- Disclosure would be contrary to any other written law.

#### 7.2.5 Request Tracking

All data subject requests shall be logged in the **Data Subject Request Register** (refer to **Appendix G**), capturing:

| Field | Detail |
|---|---|
| Request Reference Number | [Auto-generated] |
| Date Received | [DD/MM/YYYY] |
| Data Subject Name | [Redacted after closure] |
| Type of Request | [Access / Correction / Withdrawal / Other] |
| Identity Verified | [Yes / No] |
| Date Acknowledged | [DD/MM/YYYY] |
| Date Completed | [DD/MM/YYYY] |
| Outcome | [Fulfilled / Refused / Partially Fulfilled] |
| Reason if Refused | [Reason] |

---

## 8. Cross-Border Data Transfer Controls

*This section addresses the Organisation's obligations when transferring personal data outside Malaysia. Under PDPA s129, cross-border transfers are prohibited except where prescribed conditions are met. Act 854 adds further obligations for NCII-related data.*

### 8.1 Regulatory Requirements

The Organisation shall not transfer personal data outside Malaysia unless:

- The **destination country** provides a standard of data protection equivalent to the PDPA, as gazetted by the Minister of Digital; or
- The **data subject has consented** to the transfer; or
- The transfer is **necessary for the performance of a contract** between the data subject and the Organisation; or
- The transfer is **necessary for the conclusion or performance** of a contract made in the interest of the data subject; or
- The transfer is required to **protect the vital interests** of the data subject; or
- The transfer is made on **terms approved by the PDPC**.

### 8.2 Approved Destination Countries

*Insert the list of countries approved by the Minister of Digital under the Personal Data Protection (Class of Data Users) Order. Update this table whenever the approved list is updated.*

| Country | Approval Status | Basis for Approval | Effective Date |
|---|---|---|---|
| [Country Name] | [Approved / Approved with Conditions] | [Ministerial Order / PDPC Approval] | [Date] |
| [Country Name] | [Approved / Approved with Conditions] | [Ministerial Order / PDPC Approval] | [Date] |
| [All other countries] | Not approved by default — requires additional controls | — | — |

### 8.3 Transfer Mechanisms for Unapproved Countries

Where personal data must be transferred to a country not appearing on the approved list, the Organisation shall implement one or more of the following safeguards prior to the transfer:

| Mechanism | Description | Approval Required |
|---|---|---|
| **Data Transfer Agreement (DTA)** | A contractual arrangement between the Organisation and the overseas recipient incorporating standard data protection clauses | DPO approval; Legal sign-off |
| **Binding Corporate Rules (BCR)** | For intra-group transfers across multinational entities | PDPC approval |
| **Data Subject Consent** | Explicit, informed consent from the data subject to the specific transfer | N/A (consent must be documented) |
| **PDPC Authorisation** | Direct authorisation from the PDPC for specific transfers | PDPC |

### 8.4 NCII-Specific Restrictions (Act 854)

As an NCII entity, the Organisation shall apply the following additional controls to personal data processed within NCII systems:

- **Data residency requirements**: Core personal data processed within NCII-designated systems shall be **stored within Malaysia** unless NACSA has been notified and no objection raised, or unless the transfer is expressly permitted under NACSA guidelines.
- **Notification to NACSA**: Any transfer of data from NCII systems to overseas recipients shall be evaluated for cybersecurity risk and documented. Where the transfer involves a cybersecurity incident (s49), NACSA shall be notified in accordance with Section 9 of this Policy.
- **Third-party processor assessments**: Overseas processors engaged to process NCII-related data shall be subject to enhanced **vendor security assessments** and contractual cybersecurity obligations aligned with Act 854 requirements.

### 8.5 Third-Party Processor Contracts

All agreements with third-party data processors (including overseas processors) shall include, at minimum:

- A prohibition on processing personal data for purposes other than those specified by the Organisation;
- An obligation to implement appropriate technical and organisational security measures;
- Requirements to notify the Organisation of any data breach within [24/48] hours of discovery;
- Rights for the Organisation to audit the processor's data protection practices;
- Obligations to delete or return personal data upon termination of the contract;
- Sub-processor restrictions and approval requirements.

### 8.6 Transfer Register

All cross-border transfers shall be recorded in the **Cross-Border Transfer Register** (refer to **Appendix H**):

| Transfer Reference | Destination Country | Data Categories | Volume (approx.) | Transfer Mechanism | DTA Reference | DPO Approval Date | Review Date |
|---|---|---|---|---|---|---|---|
| [CBT-001] | [Country] | [Data types] | [Number of records] | [Mechanism] | [DTA-001] | [Date] | [Date] |

---

## 9. Breach Notification Obligations

*This is a critical section for NCII entities. The Organisation has dual notification obligations — to the PDPC under the PDPA and to NACSA under Act 854 s49. The timelines and thresholds differ and must be managed concurrently. This section must be operationally precise.*

### 9.1 Overview of Dual Notification Obligations

[Organisation Name], as an entity subject to both the PDPA and Act 854, has **concurrent notification obligations** in the event of a personal data breach that also constitutes a cybersecurity incident affecting NCII. The obligations are distinct and must be managed in parallel:

| Obligation | Triggering Event | Notification Recipient | Timeframe | Instrument |
|---|---|---|---|---|
| **PDPA Breach Notification** | Unauthorised access, loss, or disclosure of personal data | Personal Data Protection Commissioner (PDPC) | [As per PDPC guidance — notify without undue delay; draft notification within 72 hours of awareness of breach] | PDPA |
| **Act 854 Incident Reporting** | Cybersecurity incident affecting NCII (including breaches involving personal data) | NACSA | As prescribed in s49 — [within 6 hours for critical incidents; within 24 hours for significant incidents — insert applicable NACSA Sector Guidelines timeline] | Act 854 s49 |
| **BNM Reporting** | Material operational risk event involving customer data loss | Bank Negara Malaysia (where applicable) | As per BNM RMiT — notify within [1 business day] for material incidents | BNM RMiT |
| **Data Subject Notification** | High-risk breach likely to result in risk to rights and freedoms of data subjects | Affected data subjects | Without undue delay following breach confirmation | PDPA |

### 9.2 Definition of a Personal Data Breach

A **personal data breach** means a breach of security leading to the accidental or unlawful:
- **Destruction** of personal data;
- **Loss** of personal data;
- **Alteration** of personal data;
- **Unauthorised disclosure** of personal data; or
- **Unauthorised access** to personal data.

### 9.3 Breach Response Procedure

#### Stage 1 — Detection and Containment (Hour 0–2)

- Any employee who becomes aware of, or suspects, a personal data breach shall **immediately notify** the [Information Security Operations Centre / Helpdesk / CISO Office] via [designated reporting channel, e.g., security@[domain].com / incident hotline].
- The CISO / incident response team shall **contain the breach** and prevent further exposure.
- Initial triage shall determine:
  - The nature and extent of the breach;
  - The categories and approximate volume of personal data involved;
  - Whether NCII systems are affected (triggering Act 854 s49 obligations).

#### Stage 2 — Assessment and Classification (Hour 2–6)

The incident response team shall assess the breach to determine:

| Assessment Criteria | Questions to Answer |
|---|---|
| **Scope** | What personal data was affected? How many data subjects? |
| **Sensitivity** | Does it involve sensitive personal data (PDPA s40)? Financial data? |
| **NCII Impact** | Has the breach affected NCII-designated systems? (Act 854 trigger) |
| **Risk to Data Subjects** | Could the breach result in identity theft, financial loss, discrimination, or other harm? |
| **Notification Threshold** | Is notification to PDPC, NACSA, BNM, or data subjects required? |

Breaches shall be classified as follows:

| Severity | Criteria | Response Actions |
|---|---|---|
| **Critical** | Mass breach (>1,000 data subjects); NCII systems compromised; sensitive personal data involved; financial data exposed | Immediate NACSA notification (Act 854 s49); PDPC notification; BNM notification; data subject notification; Board notification |
| **High** | Breach affecting 100–1,000 data subjects; risk of significant harm to individuals | NACSA notification; PDPC notification; data subject notification (case-by-case); senior management notification |
| **Medium** | Breach affecting <100 data subjects; limited risk of harm; no NCII impact | Internal investigation; PDPC notification assessment; senior management notification |
| **Low** | Accidental internal disclosure, contained quickly, minimal risk | Internal logging; DPO notification; monitoring |

#### Stage 3 — Notification (Within Applicable Timeframes)

**Notification to NACSA (Act 854 s49):**
- Where the breach constitutes a **cybersecurity incident affecting NCII**, the CISO shall submit an incident report to NACSA via [designated NACSA reporting portal/channel] within the timeframe prescribed by the applicable NACSA Sector Guidelines.
- The notification shall include: nature of the incident, affected systems, impact assessment, containment measures, and contact details.
- A follow-up **full incident report** shall be submitted within [72 hours / 7 days — as per NACSA requirements] of the initial notification.

**Notification to PDPC:**
- Where the breach meets the PDPC notification threshold, the DPO shall submit a breach notification to the PDPC containing:
  - Description of the nature of the breach;
  - Categories and approximate number of data subjects affected;
  - Categories and approximate number of personal data records affected;
  - Contact details of the DPO;
  - Likely consequences of the breach;
  - Measures taken or proposed to address the breach.

**Notification to Data Subjects:**
- Where the breach is **likely to result in a high risk** to the rights and interests of data subjects, affected individuals shall be notified **without undue delay** in clear and plain language.
- The notification shall describe the nature of the breach and provide the contact details of the DPO, guidance on protective steps, and, where applicable, measures the Organisation has taken to mitigate harm.

#### Stage 4 — Post-Incident Review (Within 30 days of resolution)

- The CISO and DPO shall conduct a **post-incident review** to identify root causes, assess the effectiveness of the response, and identify improvements to technical and organisational controls.
- A **Post-Incident Report** shall be documented and presented to [Senior Management / Audit Committee / Board Risk Committee].
- Lessons learned shall be incorporated into the **Incident Response Plan** and this Policy at the next review cycle.

### 9.4 Breach Register

All personal data breaches, regardless of severity, shall be logged in the **Breach Register** (refer to **Appendix I**):

| Field | Detail |
|---|---|
| Incident Reference | [INC-YYYY-NNNN] |
| Date/Time Detected | [DD/MM/YYYY HH:MM] |
| Date/Time Reported (Internal) | [DD/MM/YYYY HH:MM] |
| Nature of Breach | [Unauthorised access / Loss / Disclosure / Other] |
| Systems/Platforms Affected | [System names] |
| NCII System Involved | [Yes / No] |
| Data Categories Affected | [Categories] |
| Estimated Number of Data Subjects | [Number] |
| Severity Classification | [Critical / High / Medium / Low] |
| NACSA Notified | [Yes / No / N/A] — Date: [Date] |
| PDPC Notified | [Yes / No / N/A] — Date: [Date] |
| BNM Notified | [Yes / No / N/A] — Date: [Date] |
| Data Subjects Notified | [Yes / No / N/A] — Date: [Date] |
| Root Cause | [Summary] |
| Remediation Actions | [Actions taken] |
| Post-Incident Review Completed | [Yes / No] — Date: [Date] |
| Closed Date | [DD/MM/YYYY] |

---

## 10. Data Retention and Disposal

*This section establishes the Organisation's approach to managing the lifecycle of personal data from collection through to secure disposal. Auditors will look for a documented retention schedule and evidence of disposal processes.*

### 10.1 Retention Principles

- Personal data shall be retained **only for as long as necessary** for the purpose(s) for which it was collected, or as required by law or regulation.
- Retention periods shall be determined by:
  - Applicable legal and regulatory requirements (e.g., PDPA, FSA, AMLA);
  - Contractual obligations;
  - Business necessity (subject to DPO approval);
  - Limitation periods for legal claims.
- At the end of the applicable retention period, personal data shall be **securely disposed of** in accordance with Section 10.3.

### 10.2 Data Retention Schedule

*Complete the retention schedule below for all major categories of personal data. The DPO is responsible for maintaining and reviewing this schedule annually. Minimum retention periods mandated by law shall not be shortened.*

| Data Category | Sub-Category | Retention Period | Legal/Regulatory Basis | Responsible Owner | Disposal Method |
|---|---|---|---|---|---|
| **Customer Data** | KYC / CDD records | 7 years after end of business relationship | AMLA 2001 s16; PDPA | [Business Unit] | Secure deletion; shredding |
| **Customer Data** | Transaction records | 7 years | FSA s133; AMLA | [Business Unit] | Secure deletion |
| **Customer Data** | Marketing consent records | 3 years after withdrawal of consent | PDPA | DPO Office | Secure deletion |
| **Employee Data** | Employment records (active employees) | Duration of employment | Employment Act 1955 | HR | N/A (active retention) |
| **Employee Data** | Employment records (former employees) | 7 years after termination | Employment Act; Income Tax Act | HR | Secure deletion; shredding |
| **Employee Data** | Payroll records | 7 years | Income Tax Act 1967 | Finance / HR | Secure deletion |
| **Incident Data** | Security incident logs | 3 years (standard); 5 years (NCII incidents) | Act 854; Internal Policy | CISO Office | Secure deletion |
| **Incident Data** | Personal data breach records | 5 years | PDPA; Act 854 | DPO Office | Secure deletion |
| **Audit Logs** | System and access logs (NCII) | Minimum 24 months | Act 854; BNM RMiT | CISO Office | Secure deletion |
| **Audit Logs** | General system logs | 12 months | BNM RMiT; Internal Policy | CISO Office | Secure deletion |
| **Contractual Data** | Vendor contracts containing personal data | 7 years after contract expiry | Limitation Act 1953 | Legal / Procurement | Secure deletion; shredding |
| **CCTV Footage** | Physical security footage | 90 days (unless required for investigation) | Internal Policy | Facilities | Overwrite / deletion |
| **Marketing Data** | Campaign response data | 3 years | PDPA | Marketing | Secure deletion |
| **[Add category]** | [Sub-category] | [Period] | [Basis] | [Owner] | [Method] |

### 10.3 Data Disposal Procedures

#### 10.3.1 Electronic Data

All electronic personal data shall be disposed of using one of the following methods, appropriate to the sensitivity of the data:

| Disposal Method | Applicable Data Sensitivity | Standard |
|---|---|---|
| **Cryptographic erasure** | All levels — where data is encrypted at rest | [NIST SP 800-88] |
| **Secure data wiping (overwriting)** | Standard personal data | [DoD 5220.22-M / NIST SP 800-88] |
| **Physical destruction of media** | Sensitive/classified personal data; end-of-life NCII storage media | [NIST SP 800-88 — Destruction] |
| **Degaussing** | Magnetic storage media containing sensitive personal data | [NIST SP 800-88] |

#### 10.3.2 Physical/Paper Records

- Physical records containing personal data shall be disposed of by **cross-cut shredding** using a shredder meeting at least [DIN 66399 Level P-4] standard.
- For highly sensitive paper records (e.g., sensitive personal data, NCII-related), **secure destruction by a certified third-party document destruction provider** shall be used.
- A **Certificate of Destruction** shall be obtained from any third-party destruction service provider and retained for [3] years.

#### 10.3.3 Disposal Authorisation

- Disposal of personal data above a defined threshold (e.g., records pertaining to more than [500] data subjects, or any sensitive personal data) shall require **written authorisation from the DPO** prior to execution.
- All disposal activities shall be recorded in the **Disposal Log** (refer to **Appendix J**):

| Date of Disposal | Data Category | Volume | Storage Medium | Disposal Method | Authorised By | Certificate of Destruction Reference |
|---|---|---|---|---|---|---|
| [Date] | [Category] | [Records/Volume] | [Electronic/Paper] | [Method] | [DPO/Authorised Officer] | [Reference] |

### 10.4 Retention Reviews

- The DPO shall conduct a **quarterly review** of data holdings to identify personal data that has exceeded its retention period and is due for disposal.
- Business units shall conduct an **annual data inventory** to identify and report personal data holdings to the DPO Office for retention assessment.
- Where personal data is subject to a **legal hold** (e.g., pending litigation, regulatory investigation), the disposal of that data shall be suspended until the hold is lifted by the Legal team.

---

## 11. Roles and Responsibilities

*A clear governance structure is essential for regulatory compliance. This section establishes accountability. Auditors will look for evidence that these roles are operationalised, not merely stated.*

### 11.1 Governance Structure

[Organisation Name] maintains the following governance structure for data protection:

- **Board of Directors / Board Risk Committee**: Ultimate accountability for data protection governance and risk oversight.
- **Chief Executive Officer (CEO)**: Executive responsibility for ensuring the Organisation complies with data protection legislation.
- **Data Protection Officer (DPO)**: Operational responsibility for data protection compliance, advice, and monitoring.
- **Chief Information Security Officer (CISO)**: Responsibility for technical security controls protecting personal data and NCII obligations under Act 854.
- **Business Unit Heads**: Accountability for data protection compliance within their respective business areas.
- **All Employees**: Responsibility for handling personal data in accordance with this Policy.

### 11.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Board / BRC | CEO | DPO | CISO | Legal | HR | BU Heads | IT | All Staff |
|---|---|---|---|---|---|---|---|---|---|
| Approve Data Protection Policy | A | C | R | C | C | I | I | I | I |
| Maintain Record of Processing Activities (RoPA) | I | I | R/A | C | C | C | C | C | I |
| Conduct DPIAs | I | I | A | R | C | C | R | C | I |
| Respond to data subject requests | I | I | A/R | C | C | C | C | C | I |
| Manage cross-border transfer controls | I | I | A | C | R | I | C | C | I |
| Detect and contain personal data breaches | I | I | C | R/A | I | I | C | R | R |
| Notify NACSA (Act 854 s49) | I | A | C | R | C | I | I | C | I |
| Notify PDPC of personal data breach | I | I | R/A | C | C | I | I | I | I |
| Notify BNM of material data incidents | I | A | C | C | C | I | C | I | I |
| Notify affected data subjects | I | I | R/A | C | C | I | C | I | I |
| Implement technical security controls | I | I | C | R/A | I | I | C | R | I |
| Maintain Data Retention Schedule | I | I | A | C | C | C | R | C | I |
| Execute data disposal | I | I | A | C | I | C | R | R | I |
| Conduct employee data protection training | I | I | A | C | I | R | C | I | I |
| Monitor policy compliance | A | I | R/A | R | C | C | C | C | I |
| Manage vendor/processor compliance | I | I | A | C | R | I | C | I | I |
| Annual policy review | A | C | R/A | C | C | I | C | I | I |
| Report to Board on data protection matters | I | C | R | C | C | I | I | I | I |

### 11.3 DPO Mandate

The DPO is appointed in accordance with [applicable internal governance / regulatory requirements] and shall:
- Be designated in writing and have published contact details accessible to all data subjects;
- Have demonstrable expertise in data protection law and practice;
- Have sufficient resources, authority, and independence to discharge their duties;
- Report directly to [Board / CEO / Chief Compliance Officer];
- Not be subject to instructions regarding the exercise of their tasks;
- Be the primary point of contact for the PDPC, NACSA (on data-related matters), and data subjects.

**DPO Contact Details:**
- **Name**: [DPO Name]
- **Email**: [DPO Email]
- **Phone**: [DPO Phone]
- **Address**: [Organisation Address]

---

## 12. Training and Awareness

*A trained workforce is a fundamental control. Regulators and auditors expect evidence of regular, targeted training programmes, not just a once-a-year email.*

### 12.1 Training Programme

[Organisation Name] shall maintain a data protection training programme that is proportionate to the roles and responsibilities of staff:

| Training Audience | Training Content | Delivery Method | Frequency | Completion Requirement |
|---|---|---|---|---|
| All new employees | Data protection fundamentals; PDPA obligations; internal policy overview | Online module / induction programme | Upon joining | Mandatory — within 30 days of joining |
| All employees | Annual data protection refresher; policy updates | Online module | Annual | Mandatory — 100% completion required |
| IT and Security staff | Technical controls; Act 854 obligations; incident response | Workshop / hands-on | Annual | Mandatory |
| DPO and compliance staff | Advanced PDPA; Act 854; NACSA guidelines; international standards | Accredited CPD / external training | Annual | Mandatory |
| Senior management and Board | Data governance; regulatory obligations; breach escalation procedures | Briefing / Board paper | Annual | Mandatory |
| Customer-facing staff | Handling data subject requests; confidentiality; data minimisation | Role-specific module | Annual | Mandatory |

### 12.2 Training Records

- Completion records for all mandatory training shall be maintained by [HR / L&D / DPO Office] and retained for a minimum of [3] years.
- Non-completion shall be reported to the relevant line manager and tracked to resolution.

### 12.3 Awareness Activities

In addition to formal training, the Organisation shall conduct ongoing awareness activities including:
- Regular data protection communications (e.g., newsletters, intranet articles, phishing simulations);
- Annual Data Protection Day events;
- Targeted advisories following significant regulatory developments or internal incidents.

---

## 13. Monitoring, Audit, and Compliance

*Regulators expect organisations to demonstrate active monitoring of compliance, not passive reliance on policies. This section establishes the assurance framework.*

### 13.1 Internal Monitoring

The DPO, with the support of the CISO, shall conduct ongoing monitoring of data protection compliance including:

- **Monthly**: Review of data subject request logs; review of security incident logs for data protection implications.
- **Quarterly**: Review of data holdings approaching retention limits; review of third-party processor compliance certificates; access rights review for NCII systems.
- **Bi-annual**: Review of the Record of Processing Activities (RoPA); DPIA register review; consent register review.
- **Annual**: Full policy review; compliance self-assessment against PDPA and Act 854 obligations; review of the cross-border transfer register and disposal log.

### 13.2 Internal Audit

- The **Internal Audit** function shall include data protection compliance as part of its annual audit plan, with specific reference to PDPA obligations and Act 854 NCII duties.
- Audit findings shall be reported to the [Audit Committee / Board Risk Committee].
- Management responses and remediation plans shall be documented and tracked to closure.

### 13.3 External Audit and Regulatory Examination

- The Organisation shall cooperate fully with any examination, inspection, or investigation conducted by the PDPC, NACSA, BNM, or other regulatory authority.
- The DPO shall be the primary liaison for regulatory examinations relating to data protection.
- All regulatory findings and agreed remediation actions shall be reported to the Board.

### 13.4 Key Compliance Metrics

The DPO shall report the following metrics to senior management [quarterly / annually]:

| Metric | Target | Measurement Source |
|---|---|---|
| Data subject request response rate within required timeframe | 100% | DSR Register |
| Mandatory data protection training completion rate | 100% | Training Records |
| Open DPIAs for new processing activities commenced without DPIA | 0 | DPIA Register |
| Data breaches reported to NACSA within required timeframe | 100% | Breach Register |
| Data breaches reported to PDPC within required timeframe | 100% | Breach Register |
| Vendor contracts with data processing agreements in place | 100% | Vendor Register |
| Personal data disposed of within retention schedule | 100% | Disposal Log |
| Overdue DPIA reviews | 0 | DPIA Register |

---

## 14. Policy Violations and Consequences

*Clear consequences for non-compliance are essential for deterrence and to demonstrate to regulators that the Organisation takes data protection seriously.*

### 14.1 Reporting Violations

Any employee who becomes aware of a suspected violation of this Policy shall report it to the DPO or their line manager without delay. Reports may also be made through the Organisation's **whistleblowing channel**: [Whistleblowing Channel Details].

The Organisation shall not tolerate retaliation against any individual who reports a suspected violation in good faith.

### 14.2 Investigation

- All reported violations shall be investigated by the DPO in coordination with HR and, where applicable, Legal and Compliance.
- Investigations shall be conducted in accordance with the Organisation's [Disciplinary Policy / HR Procedures] and applicable employment law.

### 14.3 Consequences

Violations of this Policy may constitute a breach of the employee's terms and conditions of employment and may result in disciplinary action up to and including termination of employment. In addition:

| Type of Violation | Potential Consequence |
|---|---|
| Inadvertent / minor breach (e.g., accidental email misdirection of non-sensitive data) | Documented warning; mandatory retraining |
| Negligent breach (e.g., failure to follow disposal procedures; sharing credentials) | Formal disciplinary proceedings; retraining |
| Wilful breach (e.g., unauthorised access to personal data; selling personal data) | Summary dismissal; potential criminal referral (PDPA s130 — up to RM300,000 fine and/or 2 years imprisonment for data users; Act 854 penalties) |
| Third-party processor breach of DPA | Contractual remedies; termination of contract; notification to PDPC/NACSA |

---

## 15. Review and Approval

### 15.1 Policy Review Schedule

This Policy shall be reviewed:
- **Annually**, by the DPO with input from the CISO, Legal, and relevant business units;
- **Following any material change** to applicable legislation, regulation, or NACSA/PDPC guidance;
- **Following any significant personal data breach** or regulatory finding;
- **Following any material change** to the Organisation's processing activities, systems, or business structure.

### 15.2 Version History

| Version | Date | Author | Description of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial policy issue | [Approver] |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] | [Approver] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Major revision — description] | [Approver] |

### 15.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Protection Officer | [DPO Name] | _________________ | [Date] |
| Chief Information Security Officer | [CISO Name] | _________________ | [Date] |
| Chief Compliance Officer | [CCO Name] | _________________ | [Date] |
| Chief Executive Officer | [CEO Name] | _________________ | [Date] |
| Board Risk Committee Chairperson | [Chairperson Name] | _________________ | [Date] |

---

## 16. References

The following legislation, regulatory instruments, and standards are referenced in or directly inform this Policy:

### 16.1 Primary Legislation

| Reference | Full Citation | Key Sections |
|---|---|---|
| PDPA | Personal Data Protection Act 2010 (Act 709) | All; particularly Parts II, III, IV, V |
| Act 854 | Cyber Security Act 2024 (Act 854) | s3 (Definitions), s18 (Duties of NCII Entity), s49 (Incident Reporting) |
| FSA | Financial Services Act 2013 (Act 758) | s133 (Confidentiality) |
| IFSA | Islamic Financial Services Act 2013 (Act 759) | s145 (Confidentiality) |
| AMLA | Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities Act 2001 | s16 (Record Keeping) |
| CMA | Communications and Multimedia Act 1998 (Act 588) | s232 |
| Evidence Act 1950 | Evidence Act 1950 (Act 56) | s90A (Electronic Records) |
| Limitation Act 1953 | Limitation Act 1953 (Act 254) | s6 (Limitation Periods) |

### 16.2 Subsidiary Legislation and Regulatory Issuances

| Reference | Title | Issuing Authority |
|---|---|---|
| PDP Regulations 2013 | Personal Data Protection Regulations 2013 | Minister of Digital |
| PDP Class Order 2013 | Personal Data Protection (Class of Data Users) Order 2013 | Minister of Digital |
| RMiT | Risk Management in Technology (Policy Document) | BNM |
| BNM Outsourcing | Outsourcing (Policy Document) | BNM |
| NACSA Sector Guidelines | NACSA NCII Sector Cybersecurity Guideline — [Applicable Sector] | NACSA |
| PDPC Guidance | [PDPC Data Breach Notification Guidance] | PDPC |

### 16.3 Standards and Frameworks

| Standard | Title |
|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements |
| ISO/IEC 27701:2019 | Extension to ISO/IEC 27001 for Privacy Information Management |
| ISO/IEC 29101:2018 | Privacy Architecture Framework |
| NIST SP 800-188 | De-Identifying Government Data Sets |
| NIST SP 800-88 Rev. 1 | Guidelines for Media Sanitisation |

---

## 17. Appendices

### Appendix A — Record of Processing Activities (RoPA)

*The RoPA provides a comprehensive inventory of all personal data processing activities conducted by the Organisation. It must be maintained as a living document and reviewed at least annually. This appendix contains the full RoPA.*

**RoPA Template:**

| Field | Detail |
|---|---|
| Processing Activity Reference | [RoPA-NNNN] |
| Processing Activity Name | [Name] |
| Business Unit / System | [Unit / System] |
| Description of Processing Activity | [Description] |
| Purpose(s) of Processing | [Purposes] |
| Lawful Basis (PDPA) | [Consent / Contract / Legal Obligation / Legitimate Interests / Other] |
| Categories of Data Subjects | [Customers / Employees / Vendors / Other] |
| Categories of Personal Data | [Data types] |
| Sensitive Personal Data Involved | [Yes / No — specify if yes] |
| NCII System Involved | [Yes / No] |
| Data Sources | [Directly from data subject / Third parties / Publicly available] |
| Recipients / Disclosures | [Internal teams / External third parties / Regulators] |
| Cross-Border Transfers | [Yes / No — countries if yes] |
| Retention Period | [Period — refer to Retention Schedule] |
| Security Measures | [Key controls] |
| DPIA Required / Conducted | [Yes / No / Reference] |
| Last Review Date | [Date] |
| Reviewed By | [Name / Role] |

---

### Appendix B — Privacy Notice Template

*A Privacy Notice must be provided to data subjects at or before the point of data collection. This appendix contains the Organisation's standard Privacy Notice template. Variations for specific contexts (e.g., employee privacy notice, customer privacy notice, website privacy notice) should be maintained separately.*

**[Organisation Name] Privacy Notice**

**Effective Date:** [Date]

[Organisation Name] ("we", "us", "our") is committed to protecting your personal data. This Privacy Notice explains how we collect, use, store, and share your personal data, and describes your rights under the Personal Data Protection Act 2010 (PDPA).

**1. Data We Collect**
[List categories of personal data collected]

**2. How We Use Your Data**
[List purposes of processing and lawful basis for each]

**3. Who We Share Your Data With**
[List categories of recipients]

**4. Cross-Border Transfers**
[Disclose any cross-border transfers and safeguards]

**5. How Long We Keep Your Data**
[Summary of retention periods]

**6. Your Rights**
[Summary of data subject rights and how to exercise them]

**7. Contact Us**
Data Protection Officer: [DPO Contact Details]

**8. Complaints**
You have the right to lodge a complaint with the Personal Data Protection Commissioner: [PDPC Contact Details]

---

### Appendix C — Data Protection Impact Assessment (DPIA) Template

*A DPIA must be conducted for any new or significantly changed processing activity that is likely to result in high risk to the rights and interests of data subjects. The DPO determines whether a DPIA is required.*

**DPIA Reference:** [DPIA-NNNN]
**Project/Activity Name:** [Name]
**Date Initiated:** [Date]
**Conducted By:** [Name / Role]
**DPO Review Date:** [Date]

| Section | Content |
|---|---|
| **1. Description of Processing** | [Describe the processing activity, systems involved, data flows] |
| **2. Necessity and Proportionality** | [Assess whether the processing is necessary and proportionate to the purpose] |
| **3. Risks Identified** | [List risks to data subjects — likelihood and severity] |
| **4. Existing Controls** | [List existing technical and organisational controls] |
| **5. Residual Risks** | [Identify residual risks after existing controls] |
| **6. Additional Mitigating Measures** | [Proposed additional controls to address residual risk] |
| **7. DPO Recommendation** | [Approved to proceed / Approved with conditions / Not approved] |
| **8. Conditions / Sign-Off** | [Conditions imposed; DPO signature; date] |

**DPIA Screening Criteria** — A DPIA is mandatory where processing involves:
- [ ] Large-scale processing of sensitive personal data
- [ ] Systematic monitoring of public areas or employees
- [ ] Automated decision-making with significant effects on individuals
- [ ] New technologies or processing methods
- [ ] Processing involving vulnerable groups (e.g., children, patients)
- [ ] Cross-border transfers to unapproved countries
- [ ] Data matching or profiling activities
- [ ] Processing within NCII-designated systems involving personal data at scale

---

### Appendix D — Data Retention Schedule

*The full Data Retention Schedule is maintained as a controlled document by the DPO Office. The schedule in Section 10.2 of this Policy provides a summary. The full schedule below provides a comprehensive register of all data categories and their applicable retention periods.*

*[Refer to Section 10.2 for the summary table. The full Data Retention Schedule is maintained as a separate controlled document: [Document ID — Retention Schedule]. The current version is available from the DPO Office.]*

---

### Appendix E — Data Subject Request Procedure

*This appendix provides the step-by-step operational procedure for receiving, verifying, processing, and responding to data subject requests.*

**Step 1 — Receipt and Logging**
- Log all incoming requests in the DSR Register (Appendix G) within 1 business day of receipt.
- Assign a unique reference number.

**Step 2 — Acknowledgement**
- Send an acknowledgement to the data subject within 3 business days of receipt, confirming receipt and the expected response timeframe.

**Step 3 — Identity Verification**
- Request proof of identity from the requestor if not already provided.
- Do not begin processing the substantive request until identity is verified.

**Step 4 — Request Assessment**
- Assess the request against the criteria in Section 7.2 of this Policy.
- Determine whether any exemptions or grounds for refusal apply.

**Step 5 — Data Retrieval / Action**
- Coordinate with relevant business units and IT to retrieve the requested data or take the requested action (e.g., correction, cessation of marketing).

**Step 6 — Response**
- Provide a written response to the data subject within the applicable timeframe.
- If refusing the request, provide written reasons and information on the right to complain to the PDPC.

**Step 7 — Close and Update Register**
- Update the DSR Register with the outcome and close the request.

---

### Appendix F — Consent Register Template

*The Consent Register records all instances where consent is the lawful basis for processing. It must be maintained and be available for audit.*

| Consent Reference | Data Subject ID (anonymised) | Date of Consent | Consent Method | Purpose(s) Consented To | Marketing Opt-In | Marketing Opt-Out Date | Consent Withdrawn | Withdrawal Date | Notes |
|---|---|---|---|---|---|---|---|---|---|
| [CON-001] | [Anonymised ID] | [Date] | [Online form / Signed form / Verbal (recorded)] | [Purposes] | [Yes/No] | [Date if applicable] | [Yes/No] | [Date if applicable] | [Notes] |

---

### Appendix G — Data Subject Request Register Template

*Refer to Section 7.2.5 of this Policy for the full field list.*

| Request Ref | Date Received | Request Type | Identity Verified | Date Acknowledged | Date Completed | Outcome | Reason if Refused |
|---|---|---|---|---|---|---|---|
| [DSR-001] | [Date] | [Access / Correction / Withdrawal / Other] | [Yes/No] | [Date] | [Date] | [Fulfilled / Refused / Partial] | [Reason] |

---

### Appendix H — Cross-Border Transfer Register Template

*Refer to Section 8.6 of this Policy for the full field list.*

| Transfer Ref | Destination Country | Data Categories | Volume | Transfer Mechanism | DTA Reference | DPO Approval Date | Next Review Date |
|---|---|---|---|---|---|---|---|
| [CBT-001] | [Country] | [Categories] | [Volume] | [Mechanism] | [DTA-001] | [Date] | [Date] |

---

### Appendix I — Breach Register Template

*Refer to Section 9.4 of this Policy for the full field list.*

| Incident Ref | Date Detected | Nature | NCII Involved | Severity | NACSA Notified | PDPC Notified | Subjects Notified | Closed Date |
|---|---|---|---|---|---|---|---|---|
| [INC-2024-001] | [Date] | [Type] | [Yes/No] | [Critical/High/Medium/Low] | [Yes/No/Date] | [Yes/No/Date] | [Yes/No/Date] | [Date] |

---

### Appendix J — Data Disposal Log Template

*Refer to Section 10.3.3 of this Policy for the full field list.*

| Disposal Ref | Date | Data Category | Volume | Storage Medium | Disposal Method | Authorised By | CoD Reference | Verified By |
|---|---|---|---|---|---|---|---|---|
| [DISP-001] | [Date] | [Category] | [Volume] | [Electronic/Paper] | [Method] | [DPO] | [CoD-001] | [Name / Role] |

---

### Appendix K — Vendor Data Processing Agreement Checklist

*This checklist shall be completed by the Procurement / Legal team prior to engaging any third-party processor that will handle personal data on behalf of the Organisation.*

| Clause | Required | Included in Contract | Reference in Contract |
|---|---|---|---|
| Data processing only on documented instructions | Yes | [ ] Yes [ ] No | [Clause ref] |
| Confidentiality obligations on personnel | Yes | [ ] Yes [ ] No | [Clause ref] |
| Implementation of appropriate security measures | Yes | [ ] Yes [ ] No | [Clause ref] |
| Sub-processor restrictions and approval requirements | Yes | [ ] Yes [ ] No | [Clause ref] |
| Data subject rights assistance obligations | Yes | [ ] Yes [ ] No | [Clause ref] |
| Breach notification to Organisation (within [24/48] hours) | Yes | [ ] Yes [ ] No | [Clause ref] |
| Deletion or return of data upon termination | Yes | [ ] Yes [ ] No | [Clause ref] |
| Organisation's right to audit | Yes | [ ] Yes [ ] No | [Clause ref] |
| Act 854 cybersecurity obligations (NCII processors) | Yes (NCII) | [ ] Yes [ ] No [ ] N/A | [Clause ref] |
| Cross-border transfer restrictions | Yes | [ ] Yes [ ] No | [Clause ref] |
| Governing law — Malaysia | Yes | [ ] Yes [ ] No | [Clause ref] |

**Completed By:** [Name] | **Date:** [Date] | **Vendor Name:** [Vendor] | **DPO Review:** [Name / Date]

---

### Appendix L — Glossary of PDPA and Act 854 Terms

*A consolidated glossary of terms used in this Policy, the PDPA, and Act 854. Refer to Section 4 of this Policy for defined terms specific to this document.*

| Term | Definition | Source |
|---|---|---|
| Data User | A person who processes any personal data or has control over or authorises the processing of personal data | PDPA s4 |
| Data Processor | Any person who processes personal data solely on behalf of the data user | PDPA s4 |
| NCII | National Critical Information Infrastructure | Act 854 s3 |
| Cybersecurity Incident | Any event that adversely affects the confidentiality, integrity or availability of information or information systems | Act 854 s3 |
| NACSA | National Cyber Security Agency | Act 854 |
| PDPC | Personal Data Protection Commissioner | PDPA |
| [Add further terms as needed] | [Definition] | [Source] |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organisation Name] | [Document ID] | Version 1.0**
**© [Year] [Organisation Name]. All rights reserved. Unauthorised reproduction or distribution prohibited.**