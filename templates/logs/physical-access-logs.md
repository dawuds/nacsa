# Physical Access Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Facilities |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the purpose of this log collection and why it is maintained. Reference the regulatory obligation and the operational need.*

This document defines the structure, maintenance requirements, and review procedures for Physical Access Logs maintained by [Organization Name] in respect of facilities housing National Critical Information Infrastructure (NCII). These logs serve as the primary evidentiary record of physical access events and are maintained in compliance with the **Cyber Security Act 2024 (Act 854)**, specifically **Section 18**, which imposes obligations on NCII sector leads and operators to implement, maintain, and report on cyber security measures — including physical security controls that protect the integrity and availability of NCII assets.

### 1.2 Scope

*Define the physical perimeter and asset types covered by this log. Be specific about locations and access control systems in scope.*

These logs apply to all physical access control points associated with NCII infrastructure operated or managed by [Organization Name], including but not limited to:

- **Primary Data Centres:** [Data Centre Name / Location]
- **Secondary / Disaster Recovery Sites:** [DR Site Name / Location]
- **Network Operations Centres (NOC):** [NOC Name / Location]
- **Server Rooms and Communications Rooms:** [Location(s)]
- **Control Rooms housing NCII equipment:** [Location(s)]

The scope covers all individuals — employees, contractors, vendors, visitors, and emergency personnel — who access or attempt to access controlled areas.

### 1.3 Regulatory Basis

| Instrument | Section / Clause | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII operators must implement and maintain security measures, including physical controls, for designated NCII infrastructure |
| Cyber Security Act 2024 (Act 854) | Section 18(2) | Records relating to security measures must be retained and made available to NACSA upon request |
| [Organization Name] Internal Security Policy | [Policy Reference] | Physical access control requirements for critical facilities |

---

## 2. Entry and Exit Events

*Record every physical access event — both successful and unsuccessful — at all controlled access points. Each entry must capture sufficient detail to reconstruct the timeline of any security incident.*

### 2.1 Access Event Log

| Log ID | Timestamp (UTC+8) | Access Point / Zone | Individual ID | Full Name | Department / Company | Access Type | Direction | Result | System Reference |
|---|---|---|---|---|---|---|---|---|---|
| [LOG-YYYY-MM-DD-0001] | [YYYY-MM-DD HH:MM:SS] | [e.g., DC Floor 1 — Main Entry] | [Employee / Badge ID] | [Full Name] | [Department or Vendor Name] | [Badge / Biometric / PIN / Manual] | [Entry / Exit] | [Granted / Denied] | [PACS Event ID] |
| | | | | | | | | | |

### 2.2 Access Point Inventory

*Maintain a current register of all monitored access points included in this log.*

| Access Point ID | Location Description | Zone Classification | Control Mechanism | Monitoring Status |
|---|---|---|---|---|
| [AP-001] | [e.g., Ground Floor — Server Room A Door 1] | [e.g., Restricted / Critical] | [Badge Reader / Biometric] | [Active / Offline] |
| | | | | |

---

## 3. Badge and Biometric Records

*Maintain records of all credential issuance, modification, and revocation events for physical access control systems. Biometric enrolment and de-enrolment must be logged separately from access events.*

### 3.1 Credential Issuance and Revocation Log

| Record ID | Date | Individual ID | Full Name | Credential Type | Action | Access Level Granted | Authorised By | Remarks |
|---|---|---|---|---|---|---|---|---|
| [CRED-YYYY-MM-DD-0001] | [YYYY-MM-DD] | [Employee / Contractor ID] | [Full Name] | [Badge / Biometric / Both] | [Issued / Modified / Suspended / Revoked] | [Zone(s) / Door(s)] | [Approving Manager Name] | [e.g., New joiner, role change, termination] |
| | | | | | | | | |

### 3.2 Biometric Enrolment Register

*Track all biometric enrolment and de-enrolment events. Record the biometric modality (fingerprint, iris, facial) and the system that holds the biometric template.*

| Record ID | Date | Individual ID | Full Name | Biometric Modality | Action | Enrolled By | System / Reader ID | Remarks |
|---|---|---|---|---|---|---|---|---|
| [BIO-YYYY-MM-DD-0001] | [YYYY-MM-DD] | [ID] | [Full Name] | [Fingerprint / Iris / Facial] | [Enrolled / Re-enrolled / Deleted] | [Administrator Name] | [System / Device ID] | |
| | | | | | | | | |

### 3.3 Credential Audit — Periodic Review

*Document the outcome of periodic credential reviews to ensure access rights remain current and appropriate.*

| Review Date | Reviewed By | Total Active Credentials | Credentials Modified | Credentials Revoked | Findings / Actions | Next Review Date |
|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Reviewer Name / Role] | [Count] | [Count] | [Count] | [Summary of findings] | [YYYY-MM-DD] |

---

## 4. Visitor Access Records

*All visitor access to NCII facilities must be pre-authorised, escorted, and logged in full. This section captures visitor registration, escort assignment, and departure confirmation.*

### 4.1 Visitor Pre-Authorisation Register

| Request ID | Request Date | Visit Date | Visitor Full Name | Visitor NRIC / Passport | Representing Organisation | Purpose of Visit | Area(s) to be Accessed | Requested By (Host) | Approval Status | Approved By |
|---|---|---|---|---|---|---|---|---|---|---|
| [VIS-REQ-YYYY-MM-DD-0001] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Full Name] | [ID Number] | [Company / Organisation] | [Brief Description] | [Zone / Room] | [Host Name — Employee] | [Approved / Denied / Pending] | [Approver Name] |
| | | | | | | | | | | |

### 4.2 Visitor Entry and Exit Log

*Record actual entry and exit times. Escort must sign both entry and exit entries. Any discrepancy between scheduled and actual access must be noted.*

| Log ID | Visit Date | Visitor Name | Visitor ID | Host / Escort Name | Time In | Time Out | Areas Accessed | Visitor Badge Number | Escort Sign-In | Escort Sign-Out | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [VIS-LOG-YYYY-MM-DD-0001] | [YYYY-MM-DD] | [Full Name] | [NRIC / Passport] | [Escort Name — Employee ID] | [HH:MM] | [HH:MM] | [Zone(s)] | [Badge No.] | [Signature / Initial] | [Signature / Initial] | |
| | | | | | | | | | | | |

### 4.3 Visitor NDA and Acknowledgement

*Confirm that visitors have signed required non-disclosure and facility access acknowledgement forms before entry is granted.*

| Visitor Name | Visit Date | NDA Signed | Facility Rules Acknowledged | Form Reference | Retained By |
|---|---|---|---|---|---|
| [Full Name] | [YYYY-MM-DD] | [Yes / No] | [Yes / No] | [Form ID / File Reference] | [Records Owner] |

---

## 5. After-Hours Access

*Access outside of standard business hours (defined as [HH:MM] to [HH:MM], Monday to Friday, excluding public holidays) requires additional justification and is subject to enhanced logging and review.*

### 5.1 After-Hours Access Definition

*State the organisation's definition of standard business hours and the classification of after-hours periods.*

- **Standard Business Hours:** [e.g., 08:00 — 18:00, Monday to Friday]
- **After-Hours Periods:** [e.g., 18:01 — 07:59 weekdays; all day weekends and public holidays]
- **Emergency Access Window:** [e.g., Declared incidents — refer to Incident Response Plan (IRP)]

### 5.2 After-Hours Access Log

*Every after-hours access event requires a pre-authorisation reference or, in the case of emergency access, a post-access justification submitted within [e.g., 4 hours] of the event.*

| Log ID | Date / Time (UTC+8) | Individual ID | Full Name | Access Point | Justification Category | Pre-Auth Reference | Authorised By | Duration (mins) | Post-Access Report Submitted | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|
| [AH-YYYY-MM-DD-0001] | [YYYY-MM-DD HH:MM] | [ID] | [Full Name] | [Access Point] | [Planned Maintenance / Emergency / Other] | [Auth Reference or "Emergency — Post-Auth"] | [Approver Name] | [Duration] | [Yes / No / N/A] | |
| | | | | | | | | | | |

### 5.3 After-Hours Access Weekly Summary

*Summarise all after-hours access events for the review week. Unusual or unexplained access must be escalated.*

| Week Ending | Total After-Hours Events | Planned Maintenance | Emergency Access | Unplanned / Unexplained | Escalations Raised | Reviewed By | Review Date |
|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Count] | [Count] | [Count] | [Count] | [Yes — Ref / No] | [Reviewer Name] | [YYYY-MM-DD] |

---

## 6. Tailgating Detection

*Tailgating (piggybacking) events — where an unauthorised individual gains access by following an authorised person through a controlled access point without independent authentication — must be recorded and investigated promptly.*

### 6.1 Tailgating Incident Log

*Record all detected or suspected tailgating events. Detection sources include anti-passback system alerts, CCTV review, security guard observation, and self-reporting.*

| Incident ID | Date / Time (UTC+8) | Location / Access Point | Detection Method | Authorised Individual ID | Authorised Individual Name | Unauthorised Individual Description | Incident Severity | Immediate Action Taken | Investigated By | Investigation Status | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [TG-YYYY-MM-DD-0001] | [YYYY-MM-DD HH:MM] | [Access Point] | [Anti-Passback / CCTV / Guard / Self-Report] | [Employee / Contractor ID] | [Full Name] | [Description or Identity if known] | [Low / Medium / High] | [e.g., Individual escorted out, access suspended] | [Investigator Name] | [Open / Closed] | |
| | | | | | | | | | | | |

### 6.2 Anti-Passback System Alerts

*Record system-generated anti-passback violations separately to distinguish automated detection from manual observation.*

| Alert ID | Date / Time | Access Point | Credential ID | Alert Type | System Action | Manual Follow-Up Required | Assigned To | Resolved Date |
|---|---|---|---|---|---|---|---|---|
| [APB-YYYY-MM-DD-0001] | [YYYY-MM-DD HH:MM:SS] | [Access Point / Door ID] | [Credential / Badge ID] | [Anti-Passback Violation / Forced Door / Held Open] | [Access Denied / Alarm Triggered] | [Yes / No] | [Staff Name] | [YYYY-MM-DD] |
| | | | | | | | | |

### 6.3 Tailgating Trend Summary

| Review Period | Total Tailgating Events | Confirmed Incidents | False Positives | Repeat Offenders Identified | Corrective Actions Implemented |
|---|---|---|---|---|---|
| [Week of YYYY-MM-DD] | [Count] | [Count] | [Count] | [Yes / No — Name(s)] | [Description or N/A] |

---

## 7. Access Denied Events

*All access denial events — whether triggered by invalid credentials, revoked access, anti-passback violations, or system errors — must be logged and reviewed. Patterns of repeated denial events may indicate attempted unauthorised access and must be escalated.*

### 7.1 Access Denied Event Log

*Capture every denial event generated by the Physical Access Control System (PACS). Do not suppress or filter denial events at the system level.*

| Log ID | Timestamp (UTC+8) | Access Point | Credential Presented | Individual Identity (if known) | Denial Reason | Alarm Triggered | Immediate Action | Reviewed By | Remarks |
|---|---|---|---|---|---|---|---|---|---|
| [DENIED-YYYY-MM-DD-0001] | [YYYY-MM-DD HH:MM:SS] | [Access Point] | [Badge / Biometric / PIN] | [Employee ID / Unknown] | [Invalid Credential / Expired / Revoked / Anti-Passback / Access Level Insufficient / System Error] | [Yes / No] | [e.g., Guard alerted, no action] | [Reviewer Name] | |
| | | | | | | | | | |

### 7.2 Repeated Denial Event Threshold and Escalation

*Define the thresholds for escalating repeated access denial events to the Security Operations function or CISO.*

| Threshold | Trigger Condition | Escalation Action | Escalation Target | Reference |
|---|---|---|---|---|
| Level 1 | [e.g., 3 denied attempts at same access point within 10 minutes] | [Notify Security Guard / NOC] | [Security Guard / NOC Duty Officer] | [Internal SOP Reference] |
| Level 2 | [e.g., 5 denied attempts by same credential within 30 minutes] | [Suspend credential, notify Facilities Manager] | [Facilities Manager / Security Manager] | [Internal SOP Reference] |
| Level 3 | [e.g., Denial pattern matches known attack signature or threat intel] | [Activate Incident Response Plan] | [CISO / Incident Response Team] | [IRP Reference] |

### 7.3 Access Denied Weekly Summary

| Week Ending | Total Denial Events | Invalid Credential | Expired / Revoked | Anti-Passback | System Error | Escalations Raised | Actions Taken | Reviewed By |
|---|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Count] | [Count] | [Count] | [Count] | [Count] | [Count — Ref(s)] | [Summary] | [Reviewer Name] |

---

## 8. Weekly Review Record

*A designated reviewer must conduct a structured review of all Physical Access Log entries each week. This section documents the outcome of each weekly review cycle.*

### 8.1 Weekly Review Checklist

| Review Item | Completed | Findings | Actions Raised |
|---|---|---|---|
| All access points operational and reporting | [Yes / No] | [Notes] | [Action Ref or N/A] |
| After-hours access events reviewed and justified | [Yes / No] | [Notes] | [Action Ref or N/A] |
| Tailgating events investigated and closed | [Yes / No] | [Notes] | [Action Ref or N/A] |
| Access denied patterns reviewed for anomalies | [Yes / No] | [Notes] | [Action Ref or N/A] |
| Visitor logs reconciled (entry vs. exit) | [Yes / No] | [Notes] | [Action Ref or N/A] |
| Credential list compared against active personnel records | [Yes / No] | [Notes] | [Action Ref or N/A] |
| Open incidents from prior week reviewed | [Yes / No] | [Notes] | [Action Ref or N/A] |
| PACS system health and alert integrity confirmed | [Yes / No] | [Notes] | [Action Ref or N/A] |

### 8.2 Weekly Review Sign-Off

| Review Period (Week Ending) | Reviewer Name | Reviewer Role | Review Date | Signature / Acknowledgement | Escalations to Management |
|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Full Name] | [e.g., Facilities Security Officer] | [YYYY-MM-DD] | [Signed / Acknowledged in system] | [Yes — Ref / No] |

---

## 9. Roles and Responsibilities

*The following RACI table defines accountability for Physical Access Log activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Facilities Manager | Facilities Security Officer | IT / PACS Administrator | Security Operations (SOC) | CISO / Head of Security | Internal Audit | NACSA (Regulatory) |
|---|---|---|---|---|---|---|---|
| Define and maintain access control zones | A | R | C | I | C | I | I |
| Issue and revoke physical access credentials | A | R | R | I | I | I | — |
| Maintain and operate PACS / biometric systems | C | C | R | I | I | I | — |
| Record and retain all access event logs | A | R | R | I | I | I | I |
| Conduct weekly access log review | A | R | I | C | I | I | — |
| Investigate tailgating and denial anomalies | A | R | C | C | I | I | — |
| Manage visitor pre-authorisation and escort | A | R | C | I | I | I | — |
| Escalate incidents to Incident Response | A | R | I | R | A | I | I |
| Retain logs per regulatory retention schedule | A | C | R | I | I | I | I |
| Report to NACSA upon request | I | C | C | C | R | C | A |
| Annual audit of physical access controls | I | C | C | I | C | R | I |

---

## 10. Log Retention and Integrity

*Physical Access Logs are regulatory records under the Cyber Security Act 2024 (Act 854). Retention and integrity controls must meet the requirements communicated by NACSA and [Organization Name] internal records management policy.*

| Parameter | Requirement |
|---|---|
| **Minimum Retention Period** | [e.g., 3 years, or as directed by NACSA / BNM] |
| **Storage Medium** | [e.g., PACS system database with encrypted backup to [System Name]] |
| **Backup Frequency** | [e.g., Daily automated backup; weekly integrity check] |
| **Log Integrity Mechanism** | [e.g., Cryptographic hashing (SHA-256), tamper-evident audit trail] |
| **Access to Log Data** | [e.g., Restricted to Facilities Manager, CISO, Internal Audit, and NACSA upon lawful request] |
| **Destruction Procedure** | [e.g., Refer to Records Retention and Destruction Policy — [Policy Reference]] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name — Role] | Initial document created |
| | | | |

### 11.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Facilities Manager | [Full Name] | | [YYYY-MM-DD] |
| Chief Information Security Officer (CISO) | [Full Name] | | [YYYY-MM-DD] |
| Head of Compliance / Risk | [Full Name] | | [YYYY-MM-DD] |
| [Additional Approver as required] | [Full Name] | | [YYYY-MM-DD] |

---

## 12. References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), Section 18 | Obligation on NCII operators to implement, maintain, and report on security measures protecting designated NCII |
| Cyber Security Act 2024 (Act 854), Section 18(2) | Requirement to retain records relating to security measures and make them available to NACSA upon request |
| NACSA NCII Sector Security Plan Requirements | Sector-level guidance on physical security controls for NCII operators |
| [Organization Name] Physical Security Policy | [Policy Reference — Internal] |
| [Organization Name] Records Retention and Destruction Policy | [Policy Reference — Internal] |
| [Organization Name] Incident Response Plan (IRP) | [IRP Reference — Internal] |
| [Organization Name] Visitor Management Procedure | [Procedure Reference — Internal] |
| ISO/IEC 27001:2022, Annex A Control 7.2 | Physical entry controls for secure areas |
| ISO/IEC 27001:2022, Annex A Control 7.4 | Physical security monitoring |

---

## Appendices

### Appendix A — Access Zone Classification

*Define the access zone classifications used throughout this log and the corresponding access requirements.*

| Zone Class | Description | Example Locations | Access Requirement |
|---|---|---|---|
| Restricted — Critical | Highest sensitivity; houses core NCII assets | [e.g., Primary Data Centre Floor, Core Network Room] | Biometric + Badge; prior authorisation mandatory |
| Restricted — High | High sensitivity; supporting NCII infrastructure | [e.g., UPS Room, NOC] | Badge access; manager authorisation required |
| Controlled — Standard | Operational areas with regulated entry | [e.g., IT Operations Floor] | Badge access |
| Public / Lobby | Unsecured areas open to escorted visitors | [e.g., Reception, Meeting Rooms] | Sign-in required |

### Appendix B — Glossary

| Term | Definition |
|---|---|
| NCII | National Critical Information Infrastructure as designated under the Cyber Security Act 2024 (Act 854) |
| PACS | Physical Access Control System — the electronic system governing and recording physical access events |
| Anti-Passback | A PACS feature that prevents a credential from being used to enter an area unless it has been used to exit first, detecting tailgating and credential sharing |
| Tailgating / Piggybacking | The act of an unauthorised individual following an authorised individual through a controlled access point without independent authentication |
| NACSA | National Cyber Security Agency of Malaysia |
| UTC+8 | Malaysia Standard Time (MYT) — all timestamps in this log must be recorded in UTC+8 |

### Appendix C — Escalation and Incident Contacts

*Maintain current contact details for all escalation recipients. Review and update this appendix at least quarterly.*

| Role | Name | Contact Number | Email | Backup Contact |
|---|---|---|---|---|
| Facilities Manager | [Full Name] | [Phone] | [Email] | [Backup Name / Contact] |
| Facilities Security Officer | [Full Name] | [Phone] | [Email] | [Backup Name / Contact] |
| CISO | [Full Name] | [Phone] | [Email] | [Backup Name / Contact] |
| Security Operations Duty Officer (24/7) | [Role — On-Call] | [Phone / Pager] | [Email / Ticketing System] | [Escalation Chain] |
| NACSA Incident Reporting Line | — | [NACSA Published Number] | [NACSA Published Email] | — |

### Appendix D — Related Documents

| Document Title | Document ID | Owner | Location |
|---|---|---|---|
| Physical Security Policy | [Doc ID] | Facilities | [Document Repository Path] |
| Visitor Management Procedure | [Doc ID] | Facilities | [Document Repository Path] |
| Incident Response Plan | [Doc ID] | CISO Office | [Document Repository Path] |
| Records Retention and Destruction Policy | [Doc ID] | Compliance | [Document Repository Path] |
| NCII Sector Security Plan | [Doc ID] | CISO Office | [Document Repository Path] |
| Business Continuity Plan | [Doc ID] | Risk Management | [Document Repository Path] |

---

*This document is classified **Confidential**. Unauthorised disclosure is prohibited. Printed copies are uncontrolled — refer to [Document Repository Name] for the current version.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Facilities | [Organization Name]*