# Data Access Audit Trail

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Data Governance |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document establishes the framework and logging schema for the **Data Access Audit Trail**, a mandatory control artifact under the **Cyber Security Act 2024 (Act 854)**, administered by the National Cyber Security Agency (NACSA). It fulfils obligations under **Section 18** (duties of National Critical Information Infrastructure (NCII) sector leads to implement cyber security measures) and **Section 49** (offences relating to unauthorised access and data compromise) of Act 854.

The audit trail provides a continuous, tamper-evident record of all access events to sensitive and classified data assets residing within [Organization Name]'s NCII systems. This log register supports forensic investigation, insider threat detection, regulatory reporting, and compliance assurance activities.

**Scope:**

- All information systems designated as NCII assets by [Organization Name] or NACSA
- All data classified as **Sensitive**, **Confidential**, **Restricted**, or **Top Secret** under the organizational data classification policy
- All user categories: internal employees, privileged administrators, third-party vendors, and system accounts
- All access modalities: read, write, modify, delete, export, and bulk extraction

**Out of Scope:**

- Access to publicly available or unclassified data (unless co-located with classified data)
- System-generated health check logs not involving data retrieval

---

## 2. Regulatory and Policy Alignment

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), s18 | Duty of NCII entity to implement cyber security measures, including monitoring and audit controls |
| Cyber Security Act 2024 (Act 854), s49 | Offences relating to unauthorised access; audit trail supports evidence preservation |
| [Organization Name] Data Classification Policy | Defines classification levels applied in this log |
| [Organization Name] Information Security Policy | Governs acceptable use and access control requirements |
| [Organization Name] Incident Response Policy | Defines escalation triggers based on audit trail alerts |

---

## 3. Data Access Events

*Record each discrete event in which a user or system account accessed, queried, retrieved, modified, or attempted to interact with sensitive or classified data. Each row in the operational log should capture at minimum the fields defined in the schema below.*

### 3.1 Log Schema — Data Access Event Record

| Field | Data Type | Description | Example |
|---|---|---|---|
| **Event ID** | UUID / Sequential | Unique identifier for each log entry | EVT-2025-00001 |
| **Timestamp (UTC)** | ISO 8601 | Date and time of access event | 2025-06-15T08:42:31Z |
| **System / Asset Name** | String | Name or ID of the NCII system accessed | [System Name] |
| **Asset Classification** | Enum | Classification tier of the system | NCII / Non-NCII |
| **Data Object Accessed** | String | Table, file, record set, or dataset accessed | [Data Object Name] |
| **Access Type** | Enum | Nature of the operation performed | Read / Write / Modify / Delete / Export |
| **Access Method** | String | Channel or interface used | Web UI / API / Direct DB / SFTP |
| **Result / Status** | Enum | Outcome of the access attempt | Success / Failure / Denied |
| **Failure Reason** | String | Reason for denial or failure (if applicable) | Insufficient privilege / MFA challenge failed |
| **Source IP Address** | IPv4 / IPv6 | Network origin of the access request | [IP Address] |
| **Geolocation** | String | Derived geographic location (where available) | [City, Country] |
| **Session ID** | String | Associated authenticated session identifier | [Session ID] |

### 3.2 Operational Log Extract — Template

*Replace the sample rows below with actual log data exports for the review period. Log data may be appended as an attachment or referenced from the SIEM/log management system.*

| Event ID | Timestamp (UTC) | System | Data Object | Access Type | Result | User ID | Source IP |
|---|---|---|---|---|---|---|---|
| [EVT-ID] | [YYYY-MM-DDTHH:MM:SSZ] | [System Name] | [Data Object] | [Type] | [Result] | [User ID] | [IP] |
| [EVT-ID] | [YYYY-MM-DDTHH:MM:SSZ] | [System Name] | [Data Object] | [Type] | [Result] | [User ID] | [IP] |

---

## 4. User and Access Type

*Document the authenticated identity associated with each access event, including the user's role, privilege tier, and the nature of access performed. This section supports privilege misuse detection and access rights recertification activities.*

### 4.1 User Identity Record

| Field | Data Type | Description | Example |
|---|---|---|---|
| **User ID** | String | Unique system account identifier | [User ID] |
| **Full Name** | String | Legal name of the individual (where applicable) | [Full Name] |
| **User Category** | Enum | Classification of account type | Internal / Privileged Admin / Vendor / Service Account |
| **Department / Team** | String | Organizational unit of the user | [Department Name] |
| **Role / Job Title** | String | Business role at time of access | [Role / Title] |
| **Access Level Granted** | Enum | Privilege tier at time of access | Read-Only / Standard / Elevated / Admin |
| **Access Basis** | String | Authorization reference | [Access Request ID / Policy Reference] |
| **MFA Verified** | Boolean | Whether multi-factor authentication was completed | Yes / No |

### 4.2 Access Type Definitions

| Access Type Code | Description | Sensitivity Indicator |
|---|---|---|
| READ | View or retrieve data without modification | Standard |
| WRITE | Create new data records | Elevated |
| MODIFY | Alter existing data records | Elevated |
| DELETE | Remove data records | High |
| EXPORT | Extract data to an external format or system | High |
| BULK\_EXPORT | Mass extraction exceeding defined volume thresholds | Critical — Alert Triggered |
| ADMIN | Privileged system-level access | Critical |

---

## 5. Data Classification Level

*Record the classification level of the data accessed in each event. Classification must align with [Organization Name]'s Data Classification Policy and, where applicable, NACSA's NCII classification guidelines. This enables proportionate monitoring and ensures that access to higher-tier data is subject to additional scrutiny.*

### 5.1 Classification Tier Reference

| Classification Level | Description | Access Restriction |
|---|---|---|
| **Public** | Non-sensitive, publicly available information | No restriction |
| **Internal** | Business use only; not for external disclosure | Authenticated users |
| **Sensitive** | Material that could cause harm if disclosed | Role-based; logged |
| **Confidential** | Significant harm potential; tightly controlled | Need-to-know; logged and alerted |
| **Restricted / Top Secret** | Severe harm potential; NCII-critical data | Strictly controlled; all access alerted |

### 5.2 Classification Field in Log

| Field | Data Type | Description | Example |
|---|---|---|---|
| **Data Classification Level** | Enum | Classification of the data object at time of access | Sensitive / Confidential / Restricted |
| **Classification Source** | String | Policy or system from which classification is derived | [Data Classification Policy v2.1] |
| **Reclassification Flag** | Boolean | Whether data was reclassified within the review period | Yes / No |

---

## 6. Bulk Extraction Alerts

*Bulk extraction events represent a high-risk indicator for data exfiltration, insider threat, or unauthorized sharing of NCII data. This section records all events where data extraction volumes exceeded defined thresholds, and documents the triage and resolution outcome for each alert.*

### 6.1 Bulk Extraction Threshold Definitions

| Data Classification | Volume Threshold (Records) | Volume Threshold (File Size) | Alert Severity |
|---|---|---|---|
| Sensitive | > [X] records in a single session | > [X] MB | Medium |
| Confidential | > [X] records in a single session | > [X] MB | High |
| Restricted / Top Secret | Any bulk operation | Any size | Critical |

*Replace [X] with thresholds defined in [Organization Name]'s Data Loss Prevention (DLP) Policy or SIEM alerting rules.*

### 6.2 Bulk Extraction Alert Register

| Alert ID | Triggered Date/Time (UTC) | User ID | System | Data Object | Volume (Records / MB) | Classification | Severity | Triage Outcome | Investigator | Resolution Date |
|---|---|---|---|---|---|---|---|---|---|---|
| [ALERT-ID] | [Timestamp] | [User ID] | [System] | [Data Object] | [Volume] | [Level] | [Severity] | [Outcome] | [Name] | [Date] |
| [ALERT-ID] | [Timestamp] | [User ID] | [System] | [Data Object] | [Volume] | [Level] | [Severity] | [Outcome] | [Name] | [Date] |

### 6.3 Triage Outcome Codes

| Code | Description |
|---|---|
| **JUSTIFIED** | Access was authorized and operationally necessary; no further action |
| **ESCALATED** | Referred to Information Security for formal investigation |
| **INCIDENT-RAISED** | Formal incident record created; Incident Response Policy invoked |
| **FALSE-POSITIVE** | Alert reviewed and determined to be a tuning artifact |
| **PENDING** | Under active triage |

---

## 7. Policy Violation Events

*This section records all access events that were determined — through automated rule matching or manual review — to constitute a breach or near-miss of [Organization Name]'s data access policies, the Cyber Security Act 2024, or related NACSA directives. Each violation must be triaged and linked to a remediation or disciplinary action.*

### 7.1 Policy Violation Register

| Violation ID | Event ID (Ref) | Detected Date/Time (UTC) | User ID | Violation Type | Policy / Clause Breached | Automated / Manual Detection | Severity | Action Taken | Closed Date |
|---|---|---|---|---|---|---|---|---|---|
| [VIO-ID] | [EVT-ID] | [Timestamp] | [User ID] | [Type] | [Policy / Clause] | [Detection Method] | [Severity] | [Action] | [Date] |
| [VIO-ID] | [EVT-ID] | [Timestamp] | [User ID] | [Type] | [Policy / Clause] | [Detection Method] | [Severity] | [Action] | [Date] |

### 7.2 Violation Type Reference

| Violation Type | Description | Default Severity |
|---|---|---|
| UNAUTHORISED\_ACCESS | Access by a user without valid authorization | Critical |
| PRIVILEGE\_ESCALATION | Access at a tier above the user's granted privilege | High |
| ACCESS\_OUTSIDE\_HOURS | Access during non-approved hours without approval | Medium |
| POLICY\_BYPASS\_ATTEMPT | Attempt to circumvent access controls or logging | Critical |
| EXCESSIVE\_FAILED\_ATTEMPTS | Repeated failed access to sensitive data | High |
| THIRD\_PARTY\_OVERREACH | Vendor or contractor access beyond contracted scope | High |

### 7.3 Remediation and Disciplinary Actions

*For each policy violation, document the remediation steps taken, whether a formal incident was raised, and any disciplinary outcomes in accordance with [Organization Name]'s HR and Information Security policies.*

| Violation ID | Incident Ref (if raised) | Remediation Action | Disciplinary Outcome | HR Notified | Completed Date |
|---|---|---|---|---|---|
| [VIO-ID] | [INC-ID or N/A] | [Description of action] | [Outcome or N/A] | Yes / No | [Date] |

---

## 8. Log Retention

*This section documents the retention schedule applied to all Data Access Audit Trail log data, in compliance with Act 854 requirements and [Organization Name]'s records management obligations.*

### 8.1 Retention Schedule

| Log Category | Minimum Retention Period | Storage Location | Format | Legal Basis |
|---|---|---|---|---|
| Data Access Events (all classifications) | 7 years | [Log Management System / SIEM Platform] | [Format — e.g., JSON, CEF, LEEF] | Cyber Security Act 2024, s18; [Organization Name] Records Retention Policy |
| Bulk Extraction Alerts | 7 years | [Storage Location] | [Format] | Act 854, s49 |
| Policy Violation Records | 7 years | [Storage Location] | [Format] | Act 854, s49; HR Policy |
| Access Review Reports (weekly) | 7 years | [Storage Location] | PDF / Markdown | Internal governance |

### 8.2 Retention Compliance Attestation

| Review Period | Log Completeness Verified By | Date Verified | Gaps Identified | Gap Resolution |
|---|---|---|---|---|
| [Week / Month] | [Name, Role] | [Date] | Yes / No | [Description or N/A] |

### 8.3 Retention Governance Notes

- Log integrity must be ensured through write-once storage, cryptographic hashing, or equivalent tamper-evidence controls.
- Log access during the retention period must itself be logged and subject to this audit trail policy.
- At the end of the 7-year minimum period, disposal must be authorized in writing by the Data Governance Owner and recorded in the organization's records disposal register.
- Logs subject to active investigation or legal hold must not be disposed of regardless of retention schedule.

---

## 9. Weekly Review Summary

*This section provides a structured summary of the weekly audit trail review conducted by the Data Governance team. A completed instance of this table must be retained for each review cycle.*

| Field | Details |
|---|---|
| **Review Period** | [Start Date] to [End Date] |
| **Reviewer Name** | [Reviewer Full Name] |
| **Reviewer Role** | [Role / Title] |
| **Review Date** | [Date of Review] |
| **Total Access Events Reviewed** | [Number] |
| **Bulk Extraction Alerts Triggered** | [Number] |
| **Policy Violations Identified** | [Number] |
| **Open Incidents from This Period** | [Number] |
| **Notable Observations** | [Free text — key findings, anomalies, or trends] |
| **Recommended Actions** | [Free text — escalations, tuning changes, access revocations] |
| **Sign-off** | [Reviewer Signature / Digital Approval Reference] |

---

## 10. Roles and Responsibilities

*The table below defines accountability for all activities related to the Data Access Audit Trail using the RACI framework: **R**esponsible, **A**ccountable, **C**onsulted, **I**nformed.*

| Activity | Data Governance Owner | Information Security | CISO | System / NCII Asset Owner | Internal Audit | IT Operations | Compliance Officer |
|---|---|---|---|---|---|---|---|
| Define log schema and collection requirements | A/R | C | I | C | I | C | I |
| Configure logging on NCII systems | I | R | I | A | I | R | I |
| Perform weekly audit trail review | A/R | C | I | C | I | I | C |
| Triage bulk extraction alerts | C | A/R | I | C | I | C | I |
| Investigate policy violation events | C | A/R | I | C | C | C | C |
| Escalate critical violations / incidents | I | R | A | I | I | I | I |
| Maintain log retention compliance | A/R | C | I | C | I | R | C |
| Report to NACSA (if required under Act 854) | C | R | A | I | I | I | R |
| Annual review of this policy document | A/R | C | C | C | C | I | C |
| Approve policy revisions | I | C | A | I | C | I | C |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial document creation |
| [X.X] | [Date] | [Author Name, Role] | [Description of changes] |

### 11.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Data Governance Owner | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Compliance Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) | [Name] | [Signature] | [Date] |

---

## 12. References

| Reference | Title | Relevance |
|---|---|---|
| Cyber Security Act 2024 (Act 854), **Section 18** | Duties of NCII sector leads to implement cyber security measures | Mandates continuous monitoring and access controls for NCII systems |
| Cyber Security Act 2024 (Act 854), **Section 49** | Offences relating to unauthorised access and data compromise | Audit trail supports evidence preservation for enforcement and prosecution |
| NACSA NCII Sector Security Framework | National cyber security baseline for NCII entities | Defines minimum logging and monitoring controls |
| [Organization Name] Data Classification Policy, v[X.X] | Internal data classification framework | Defines classification tiers referenced in this log schema |
| [Organization Name] Information Security Policy, v[X.X] | Overarching information security governance | Access control and acceptable use obligations |
| [Organization Name] Incident Response Policy, v[X.X] | Procedures for cyber security incidents | Escalation triggers based on bulk extraction and violation alerts |
| [Organization Name] Records Retention Policy, v[X.X] | Records management and disposal schedule | Governs the 7-year minimum log retention obligation |
| Personal Data Protection Act 2010 (PDPA) | Malaysian personal data protection legislation | Applies where audit trail data includes personal data |

---

## 13. Appendices

### Appendix A — Log Collection Architecture

*[Insert diagram or description of the technical architecture used to collect, aggregate, and store audit trail log data, including SIEM platform, log forwarders, agents, and storage tiers.]*

### Appendix B — NCII System Register

*[Insert or reference the current register of systems in scope for this audit trail, including system name, asset owner, classification, and log source identifier.]*

### Appendix C — Alert Rule Definitions

*[Insert the specific SIEM or DLP alert rules configured to detect bulk extraction events and policy violations referenced in Sections 6 and 7, including rule logic, thresholds, and tuning history.]*

### Appendix D — Log Integrity Controls

*[Insert documentation of technical controls used to ensure log integrity and tamper-evidence, such as cryptographic hash chains, write-once storage configuration, or third-party attestation.]*

### Appendix E — Glossary

| Term | Definition |
|---|---|
| NCII | National Critical Information Infrastructure, as designated under Act 854 |
| NACSA | National Cyber Security Agency of Malaysia |
| SIEM | Security Information and Event Management platform |
| DLP | Data Loss Prevention |
| Bulk Extraction | Any single-session data retrieval event exceeding defined volume thresholds |
| Audit Trail | A chronological, tamper-evident record of system and user activity |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |

---

*This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited and may constitute an offence under the Cyber Security Act 2024 (Act 854) and the Official Secrets Act 1972.*