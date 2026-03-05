# Incident Notification Procedure (6-Hour) — Cyber Security Act 2024 (Act 854)

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Title** | Incident Notification Procedure (6-Hour) — NACSA |
| **Classification** | Confidential |
| **Owner** | CISO / SOC Lead |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — semi-annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Category** | Procedure |
| **Framework** | Cyber Security Act 2024 (Act 854) — NACSA |
| **Related Sections** | s23, s26 |

---

> **DOCUMENT CONTROL NOTICE**
> This document is classified **Confidential**. It must not be reproduced, distributed, or disclosed to unauthorized parties without written approval from the document owner. Printed copies are uncontrolled. Always verify the current version via the document management system before use.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Incident Detection Triggers](#4-incident-detection-triggers)
5. [6-Hour Notification Timeline and Workflow](#5-6-hour-notification-timeline-and-workflow)
6. [NACSA Notification Form Completion](#6-nacsa-notification-form-completion)
7. [Sector Lead Parallel Notification](#7-sector-lead-parallel-notification)
8. [Follow-Up Reporting at 72 Hours](#8-follow-up-reporting-at-72-hours)
9. [Final Report at 30 Days Post-Resolution](#9-final-report-at-30-days-post-resolution)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Escalation Matrix](#11-escalation-matrix)
12. [Communication Controls and Confidentiality](#12-communication-controls-and-confidentiality)
13. [Evidence Preservation Requirements](#13-evidence-preservation-requirements)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section describes why this procedure exists and the regulatory obligation it fulfills. Tailor the language to your institution's specific mandate as a National Critical Information Infrastructure (NCII) entity or licensee.*

This procedure establishes the mandatory steps that **[Organization Name]** must follow to notify the National Cyber Security Agency (NACSA) and the relevant Sector Lead of a cyber security incident within the **mandatory 6-hour notification window** prescribed under the **Cyber Security Act 2024 (Act 854)**, specifically Sections 23 and 26.

The objective of this procedure is to ensure that:

- All qualifying cyber security incidents are detected, assessed, and escalated promptly.
- Notification to NACSA is accurate, complete, and submitted within the statutory timeframe.
- The relevant Sector Lead receives parallel notification in accordance with sector-specific requirements.
- Follow-up reporting obligations (72-hour and 30-day) are tracked, assigned, and discharged.
- Evidence integrity is preserved throughout the incident lifecycle to support regulatory, forensic, and legal requirements.

### 1.2 Scope

*Identify which systems, business units, third parties, and geographic locations are in scope. Reference your organization's asset register and NCII designation if applicable.*

This procedure applies to:

| Scope Element | Details |
|---|---|
| **Entities Covered** | [Organization Name] and all wholly-owned subsidiaries operating under its group ICT infrastructure |
| **Systems Covered** | All systems designated as National Critical Information Infrastructure (NCII), core banking systems, payment systems, customer-facing digital services, and supporting infrastructure |
| **Personnel Covered** | All employees, contractors, managed service providers, and third-party vendors with access to in-scope systems |
| **Geographic Scope** | All operations conducted within Malaysia and overseas operations where Malaysian-regulated systems are involved |
| **Exclusions** | [List any explicitly excluded systems, environments (e.g., sandboxes, non-production), or organizational units] |

### 1.3 Applicability Threshold

This procedure is **mandatory** and must be activated when an incident meets one or more of the following criteria:

- The incident affects, or is reasonably suspected to affect, a National Critical Information Infrastructure (NCII) asset.
- The incident results in, or could result in, a significant disruption to the continuity of [Organization Name]'s operations.
- The incident involves a confirmed or suspected unauthorized access, data breach, ransomware, destructive malware, or denial-of-service attack.
- The incident triggers reporting obligations under any applicable sector-specific directive, Bank Negara Malaysia (BNM) circular, or other co-regulatory requirement.

---

## 2. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation across teams. Update definitions to align with NACSA's published guidance and Act 854 as amended.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Cyber Security Incident** | As defined under Section 3 of the Cyber Security Act 2024 (Act 854): any act or circumstances that adversely affects, or is likely to adversely affect, the security of a computer, computer system, computer network, or information stored therein |
| **National Critical Information Infrastructure (NCII)** | Computer systems or networks whose disruption would significantly impact national security, the economy, public health, safety, or welfare, as designated under Act 854 |
| **NACSA** | National Cyber Security Agency of Malaysia, established as the lead agency for national cyber security matters |
| **Sector Lead** | The designated lead agency responsible for overseeing cyber security within a specific NCII sector (e.g., BNM for the financial services sector) |
| **6-Hour Window** | The mandatory period within which an initial notification must be submitted to NACSA following the detection and preliminary assessment of a qualifying incident |
| **T0 (Time Zero)** | The timestamp at which a qualifying cyber security incident is first detected or reported within [Organization Name] |
| **Incident Severity Level** | A classification (Critical, High, Medium, Low) assigned to an incident based on its actual or potential impact |
| **IOC** | Indicator of Compromise — artifacts observed on a network or in an operating system that indicate a computer intrusion |
| **CISO** | Chief Information Security Officer |
| **SOC** | Security Operations Centre |
| **IRT** | Incident Response Team |
| **SIEM** | Security Information and Event Management system |

### 2.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| Act 854 | Cyber Security Act 2024 |
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| DRP | Disaster Recovery Plan |
| IRT | Incident Response Team |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PDPA | Personal Data Protection Act 2010 |
| RTO | Recovery Time Objective |
| SOC | Security Operations Centre |
| TLP | Traffic Light Protocol |

---

## 3. Regulatory and Policy Context

### 3.1 Governing Legislation and Regulatory Framework

*This section maps each key obligation in this procedure to the specific regulatory source. Update with all applicable BNM circulars and sector-specific directives that apply to your institution.*

| Regulation / Directive | Relevant Provision | Obligation Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 23 | Duty to notify NACSA of a cyber security incident affecting NCII within the prescribed timeframe |
| Cyber Security Act 2024 (Act 854) | Section 26 | Requirements for the content and manner of incident notification submissions |
| [BNM Risk Management in Technology (RMiT)] | [Relevant Section] | Sector-specific incident notification and escalation requirements for financial institutions |
| [PDPA 2010 / Amendment] | [Relevant Section] | Data breach notification obligations where personal data is involved |
| [Other applicable BNM circular / guideline] | [Reference] | [Summary of obligation] |

### 3.2 Internal Policy Alignment

This procedure operates within the following internal policy hierarchy:

- **[Organization Name] Information Security Policy** — [Document ID]
- **[Organization Name] Cyber Security Incident Response Policy** — [Document ID]
- **[Organization Name] Business Continuity Policy** — [Document ID]
- **[Organization Name] Data Classification and Handling Policy** — [Document ID]
- **[Organization Name] Third-Party Risk Management Policy** — [Document ID]

### 3.3 Consequences of Non-Compliance

Failure to comply with the 6-hour notification obligation under Act 854 may result in:

- Regulatory sanction, fines, or penalties as provided under Act 854.
- Adverse findings in regulatory examinations or audits.
- Reputational damage and loss of stakeholder confidence.
- Civil liability where third-party harm is demonstrated.

---

## 4. Incident Detection Triggers

*This section defines the sources, signals, and criteria that activate this notification procedure. Populate with your organization's specific detection tooling, alert categories, and triage thresholds. Align with your SIEM alert taxonomy.*

### 4.1 Detection Sources

A qualifying incident may be detected through any of the following channels. Upon detection, the receiving team must immediately assess whether the incident meets the notification threshold defined in Section 1.3.

| Detection Source | Responsible Team | Initial Action |
|---|---|---|
| SIEM alert / automated rule trigger | SOC Analyst (Tier 1) | Log, triage, escalate per SOC runbook |
| Endpoint Detection & Response (EDR) alert | SOC Analyst (Tier 1) | Isolate endpoint if required; escalate |
| Intrusion Detection / Prevention System (IDS/IPS) | SOC Analyst (Tier 1) | Capture alert details; initiate triage |
| Threat intelligence feed / IOC match | Threat Intelligence Team | Correlate with internal telemetry; escalate |
| Employee report / help desk ticket | IT Help Desk / SOC | Record; forward to SOC for triage |
| Vendor / managed service provider notification | Vendor Management / SOC | Verify; escalate to SOC Lead |
| Customer complaint indicating compromise | Customer Service / SOC | Document; escalate to SOC Lead |
| External notification (NACSA, peer institution, CERT) | CISO / SOC Lead | Acknowledge; initiate internal triage |
| Dark web monitoring / threat hunting finding | Threat Intelligence Team | Assess scope; escalate to SOC Lead |
| [Other — specify] | [Team] | [Action] |

### 4.2 Incident Triage and Qualification

Upon detection, the SOC Analyst must complete the following triage steps **within 30 minutes of initial detection** to determine whether the 6-hour notification clock has started:

1. **Record T0** — Document the precise timestamp of initial detection.
2. **Classify the alert** — Apply the organization's incident classification taxonomy.
3. **Assess affected assets** — Determine whether any NCII-designated or critical assets are involved.
4. **Assign preliminary severity** — Using the severity matrix below.
5. **Escalate** — Notify SOC Lead immediately if the incident is assessed as High or Critical.

### 4.3 Incident Severity Classification Matrix

*Tailor impact categories and thresholds to match your organization's risk appetite and NCII designation.*

| Severity Level | Impact Description | Examples | Notification Obligation |
|---|---|---|---|
| **Critical (P1)** | Actual or imminent disruption to NCII assets or core services; confirmed data exfiltration; ransomware activation | Ransomware on core banking; DDoS causing service outage; confirmed data breach affecting >1,000 customers | **Mandatory — 6-hour NACSA notification applies** |
| **High (P2)** | Significant compromise with potential to escalate to Critical; NCII assets at risk | Lateral movement detected; privileged account compromise; persistent threat actor presence | **Mandatory — 6-hour NACSA notification applies** |
| **Medium (P3)** | Contained incident with limited impact; no NCII assets affected | Phishing campaign with limited credential capture; isolated malware on non-critical endpoint | Monitor; escalate if scope expands |
| **Low (P4)** | Nuisance-level event; no business impact | Blocked port scan; failed brute-force attempt; policy violation | Log and report through standard channels |

### 4.4 Triggers Requiring Immediate Escalation to CISO

The following trigger types require **immediate escalation to the CISO / SOC Lead**, regardless of preliminary severity assessment:

- [ ] Ransomware or destructive malware activation on any production system
- [ ] Unauthorized access to systems containing personal data (PDPA implications)
- [ ] Exfiltration of confidential, restricted, or customer data
- [ ] Compromise of privileged accounts (Domain Admin, root, service accounts)
- [ ] Disruption to payment processing, core banking, or customer-facing services
- [ ] Nation-state or advanced persistent threat (APT) indicators
- [ ] Physical security breach combined with a cyber event
- [ ] Supply chain compromise affecting critical vendors
- [ ] [Organization-specific trigger — add as required]

---

## 5. 6-Hour Notification Timeline and Workflow

*This is the core operational section of the procedure. Define each phase with precise time markers relative to T0. Validate these steps against your SOC operating hours, escalation paths, and actual NACSA submission mechanisms.*

### 5.1 Overview of the 6-Hour Window

The 6-hour clock (**T0 to T0+6h**) begins at the moment of initial detection of a qualifying cyber security incident. The objective is to submit an initial notification to NACSA **no later than T0+6h**, even if the full scope of the incident has not yet been determined.

> **Note:** The initial notification does not require a complete incident analysis. It must convey the nature, timing, and initial impact of the incident to the best of the organization's knowledge at the time of submission. Incomplete information should be noted explicitly in the submission.

### 5.2 Step-by-Step Notification Workflow

#### Phase 1: Detection and Initial Assessment (T0 to T0+30 min)

| Step | Actor | Action | Output |
|---|---|---|---|
| 1.1 | SOC Analyst (Tier 1) | Detect incident via monitoring tools; record T0 | Incident ticket created in ITSM/ticketing system |
| 1.2 | SOC Analyst (Tier 1) | Perform initial triage; assign preliminary severity | Preliminary severity classification recorded |
| 1.3 | SOC Analyst (Tier 1) | If P1 or P2: immediately notify SOC Lead via [communication channel] | SOC Lead notified; escalation documented |
| 1.4 | SOC Lead | Verify severity assessment; confirm notification obligation | Go/No-Go decision on 6-hour notification |
| 1.5 | SOC Lead | Activate Incident Response Team (IRT) | IRT activation record created |
| 1.6 | SOC Lead / IRT | Preserve initial evidence (logs, screenshots, network captures) | Evidence log initiated |

#### Phase 2: Escalation and Management Notification (T0+30 min to T0+1h)

| Step | Actor | Action | Output |
|---|---|---|---|
| 2.1 | SOC Lead | Notify CISO of qualifying incident | CISO briefed; decision authority transferred |
| 2.2 | CISO | Brief CEO / CRO / Board representative as required by internal policy | Management notification log updated |
| 2.3 | CISO | Confirm notification obligation and authorize NACSA submission | Written authorization (email / secure message) |
| 2.4 | IRT | Continue containment actions; document all steps with timestamps | Incident timeline log maintained |
| 2.5 | CISO / Legal | Assess PDPA and other co-regulatory notification requirements | Legal/compliance assessment note |

#### Phase 3: Notification Preparation (T0+1h to T0+4h)

| Step | Actor | Action | Output |
|---|---|---|---|
| 3.1 | SOC Lead / IRT | Complete NACSA Incident Notification Form (see Section 6) | Draft NACSA notification form |
| 3.2 | CISO | Review and verify form accuracy | Reviewed notification form |
| 3.3 | Legal / Compliance | Review for legal privilege and disclosure appropriateness | Legal clearance note |
| 3.4 | CISO | Prepare parallel notification for Sector Lead (see Section 7) | Draft Sector Lead notification |
| 3.5 | IRT | Document current containment status and remediation actions taken | Incident status update |

#### Phase 4: Submission (T0+4h to T0+6h)

| Step | Actor | Action | Output |
|---|---|---|---|
| 4.1 | CISO / Designated Authorized Signatory | Submit NACSA notification via [NACSA portal / secure email / prescribed channel] | NACSA submission confirmation; submission timestamp recorded |
| 4.2 | CISO / SOC Lead | Submit Sector Lead notification via [BNM SupTech / prescribed channel] | Sector Lead submission confirmation; timestamp recorded |
| 4.3 | Compliance Officer | Record submission in incident register; attach confirmation receipts | Incident register updated |
| 4.4 | CISO | Brief management on submission completion | Management notification log updated |
| 4.5 | SOC Lead / IRT | Continue incident response; initiate 72-hour reporting countdown | 72-hour follow-up task created |

### 5.3 Notification Timeline Summary Diagram

```
T0          T0+30m       T0+1h        T0+4h        T0+6h
 |            |            |            |            |
 ▼            ▼            ▼            ▼            ▼
[DETECT]  [TRIAGE &   [CISO &      [FORM      [SUBMIT TO
          ESCALATE]   MGMT BRIEF]  READY]     NACSA &
                                              SECTOR LEAD]
```

> **CRITICAL:** If at any point it becomes apparent that the T0+6h deadline cannot be met, the CISO must immediately contact NACSA via [emergency contact — see Appendix A] to advise of the delay and provide an estimated submission time. This proactive communication must be documented.

### 5.4 Out-of-Hours Incident Notification

*Define how the 6-hour obligation is met when an incident occurs outside of business hours. Ensure on-call arrangements are tested at least semi-annually.*

| Scenario | Procedure |
|---|---|
| Incident detected after business hours (weekdays) | SOC on-call analyst applies this procedure; CISO and SOC Lead on-call numbers activated per [On-Call Roster — Appendix B] |
| Incident detected on weekends or public holidays | Same as above; escalation thresholds remain unchanged |
| CISO unavailable | Deputy CISO assumes authority; if both unavailable, escalate to CRO per [Escalation Matrix — Section 11] |
| NACSA portal unavailable | Use designated backup submission channel: [email/fax/phone — Appendix A] |

---

## 6. NACSA Notification Form Completion

*This section provides field-by-field guidance for completing the NACSA incident notification form. Reference the current form version published by NACSA and verify fields against the latest NACSA guidance. Update when form versions change.*

### 6.1 Form Identification

| Field | Detail |
|---|---|
| **Form Name** | [NACSA Cyber Security Incident Notification Form — current version] |
| **Form Reference** | [NACSA form reference number] |
| **Submission Channel** | [NACSA portal URL / secure email / prescribed channel] |
| **Submission Contact** | [NACSA contact email / phone — see Appendix A] |

### 6.2 Form Completion Guidance

*Each field below corresponds to a section in the NACSA notification form. Where information is unavailable at T0+6h, indicate "Under Investigation" and commit to update in the 72-hour report.*

#### Section A — Reporting Organization Details

| Form Field | Guidance | Example / Placeholder |
|---|---|---|
| Organization Name | Full legal name of the reporting entity | [Organization Name] Berhad |
| Organization Registration Number | SSM or equivalent registration number | [Registration Number] |
| Sector / Industry | Select the applicable NCII sector | [Financial Services / Banking] |
| NCII Designation Status | Confirm whether the organization is a designated NCII entity | [Designated NCII Entity — Yes/No] |
| Reporting Officer Name | Full name of the authorized signatory | [CISO Name] |
| Reporting Officer Designation | Job title of the authorized signatory | Chief Information Security Officer |
| Reporting Officer Contact | Phone and email | [Phone] / [Email] |

#### Section B — Incident Details

| Form Field | Guidance | Example / Placeholder |
|---|---|---|
| Incident Reference Number | Internal incident ticket number | [INC-YYYY-MMDD-XXX] |
| Date and Time of Detection (T0) | Exact timestamp in UTC+8 (MYT) | [YYYY-MM-DD HH:MM MYT] |
| Date and Time of Notification Submission | Timestamp of this submission | [YYYY-MM-DD HH:MM MYT] |
| Incident Type | Select all that apply from NACSA's taxonomy | [Ransomware / Unauthorized Access / Data Breach / DDoS / Other] |
| Brief Incident Description | Factual narrative of what occurred; avoid speculation | [2–3 sentence factual summary] |
| Attack Vector (if known) | How the attacker gained access | [Phishing / Unpatched vulnerability / Supply chain / Unknown] |

#### Section C — Affected Systems and Impact

| Form Field | Guidance | Example / Placeholder |
|---|---|---|
| Affected Systems / Assets | List systems confirmed or suspected to be affected | [System Name, IP Range, Function] |
| NCII Assets Affected | Confirm whether designated NCII assets are impacted | [Yes / No / Under Investigation] |
| Estimated Number of Records / Users Affected | Provide best estimate; note if exact figure unavailable | [Number or "Under Investigation"] |
| Business Impact | Describe operational, financial, and reputational impact | [Service disruption / Data loss / No visible impact yet] |
| Containment Status | Current status of containment efforts | [Contained / Partially Contained / Ongoing] |

#### Section D — Initial Response Actions Taken

| Form Field | Guidance | Example / Placeholder |
|---|---|---|
| Immediate Actions Taken | List specific containment and response steps completed | [Network isolation / Credential reset / System shutdown] |
| External Parties Notified | List other agencies, vendors, or parties already notified | [BNM / CAAM / Cyber forensics firm] |
| Third-Party Assistance | Note whether external forensic or response support has been engaged | [Engaged: Yes/No — Firm name if yes] |

#### Section E — Supporting Information

| Form Field | Guidance | Example / Placeholder |
|---|---|---|
| Attachments | Attach available logs, screenshots, IOC lists (observe TLP markings) | [Log file / Network capture / Screenshot] |
| TLP Classification of Attached Materials | Apply Traffic Light Protocol markings | [TLP:RED / TLP:AMBER / TLP:WHITE] |
| Additional Remarks | Any other information relevant to NACSA's assessment | [Free text] |

### 6.3 Quality Assurance Checklist Before Submission

Before submitting the NACSA notification form, the CISO or designated reviewer must confirm all of the following:

- [ ] All mandatory fields are completed or marked "Under Investigation" with justification
- [ ] Timestamps are accurate and consistent throughout the form
- [ ] The form has been reviewed and authorized by [CISO / Authorized Signatory]
- [ ] Legal / Compliance clearance has been obtained
- [ ] Supporting attachments are correctly labeled with TLP markings
- [ ] Submission confirmation mechanism (portal receipt / email acknowledgment) is prepared
- [ ] A copy of the completed form is retained in the incident record

---

## 7. Sector Lead Parallel Notification

*This section governs the parallel notification obligation to the relevant Sector Lead. For financial institutions, this is Bank Negara Malaysia (BNM). Tailor the channels and thresholds to your current regulatory relationship and any BNM circular obligations.*

### 7.1 Sector Lead Identification

| Field | Detail |
|---|---|
| **Sector** | [Financial Services / Banking / Payment Systems] |
| **Sector Lead Agency** | Bank Negara Malaysia (BNM) |
| **Relevant BNM Contact** | [BNM Supervisory Contact — see Appendix A] |
| **Submission Channel** | [BNM SupTech Portal / Designated Secure Email / RMiT prescribed channel] |
| **Applicable BNM Directive** | [Risk Management in Technology (RMiT) / BNM Circular — Reference] |

### 7.2 Timing of Sector Lead Notification

The Sector Lead notification must be submitted **simultaneously with, or immediately following**, the NACSA notification, and in all cases **within the same 6-hour window (T0+6h)**.

| Notification | Deadline | Channel |
|---|---|---|
| NACSA Initial Notification | T0+6h | [NACSA portal / prescribed channel] |
| BNM / Sector Lead Notification | T0+6h (simultaneous) | [BNM SupTech / prescribed channel] |

### 7.3 Sector Lead Notification Content

The notification to the Sector Lead must include, at minimum:

1. **Incident reference number** (internal) and NACSA submission reference (once available)
2. **Incident type and description** — consistent with the NACSA submission
3. **Affected products, services, and customer segments** — particularly any customer-facing disruption
4. **Regulatory and prudential implications** — including any capital, liquidity, or operational risk considerations
5. **Current operational status** — whether services are available, degraded, or disrupted
6. **Containment and remediation actions** — steps taken and planned
7. **Estimated recovery timeline** — if available
8. **Point of contact** for Sector Lead follow-up enquiries

### 7.4 Sector Lead Notification Log

| Field | Detail |
|---|---|
| Submission Timestamp | [YYYY-MM-DD HH:MM MYT] |
| Submitted By | [Name / Designation] |
| Submission Channel | [BNM SupTech / Email / Other] |
| Reference / Acknowledgment Number | [Sector Lead acknowledgment reference] |
| Copy Retained In | [Incident record / Document management system] |

### 7.5 Ongoing Liaison with Sector Lead

Following the initial notification, the CISO or designated Incident Response Manager must maintain active communication with the Sector Lead contact, including:

- Providing updates at intervals agreed with the Sector Lead (or as directed)
- Responding to Sector Lead information requests within [X hours — define per your regulatory agreement]
- Coordinating any joint response activities if directed by the Sector Lead
- Ensuring all Sector Lead communications are documented in the incident record

---

## 8. Follow-Up Reporting at 72 Hours

*The 72-hour follow-up report provides NACSA and the Sector Lead with a more complete picture of the incident. This section defines the structure, content, and submission process for that report.*

### 8.1 72-Hour Report Obligation

A follow-up incident report must be submitted to both NACSA and the Sector Lead **no later than 72 hours after T0** (T0+72h). This report should provide a materially more complete account of the incident than the initial 6-hour notification.

| Report | Deadline | Recipients |
|---|---|---|
| 72-Hour Follow-Up Report | T0+72h | NACSA; BNM / Sector Lead |

### 8.2 Content Requirements for the 72-Hour Report

The 72-hour report must address all of the following:

#### 8.2.1 Updated Incident Analysis

| Content Area | Required Information |
|---|---|
| Confirmed Incident Type | Final or updated classification of the incident type |
| Root Cause Analysis (Preliminary) | Best current assessment of how the incident occurred |
| Attack Timeline | Chronological account of attacker activity based on forensic evidence |
| Affected Systems (Confirmed) | Definitive list of confirmed affected systems, applications, and data stores |
| Scope of Data Affected | Confirmed or estimated number of records, customers, or accounts affected |
| Indicators of Compromise (IOCs) | Known IOCs for sharing with NACSA / sector peer organizations |

#### 8.2.2 Containment and Eradication Update

| Content Area | Required Information |
|---|---|
| Containment Actions Completed | All steps taken to stop the incident spreading |
| Eradication Steps Taken | Steps taken to remove attacker presence and malicious artifacts |
| Systems Restored | Systems returned to service with confirmation of integrity |
| Systems Remaining Affected | Outstanding remediation activities |
| Third-Party Forensic Findings | Summary of any external forensic investigation findings to date |

#### 8.2.3 Impact Assessment

| Impact Category | Assessment |
|---|---|
| Operational Impact | [Service disruption duration / affected customers / SLA breaches] |
| Financial Impact | [Estimated direct financial loss / fraud impact / recovery costs] |
| Data Impact | [Personal data / confidential data / regulated data affected] |
| Reputational Impact | [Media coverage / customer complaints / third-party notifications] |
| Regulatory Impact | [Other regulatory notifications triggered; supervisory actions received] |

#### 8.2.4 Ongoing Response Actions

- Summary of active remediation and recovery workstreams
- External parties engaged (forensic firms, law enforcement, regulators)
- Estimated timeline to full resolution
- Key risks and uncertainties

### 8.3 72-Hour Report Preparation and Submission Checklist

- [ ] Incident Response Manager has coordinated all input from technical, legal, and business teams
- [ ] Report reviewed by CISO and authorized for submission
- [ ] Legal / Compliance has reviewed for privilege and disclosure concerns
- [ ] Report submitted to NACSA via [prescribed channel] — submission reference obtained
- [ ] Report submitted to BNM / Sector Lead via [prescribed channel] — acknowledgment obtained
- [ ] Copy retained in incident record with submission timestamps

---

## 9. Final Report at 30 Days Post-Resolution

*The 30-day final report closes the regulatory notification lifecycle for a given incident. It must demonstrate that the incident has been fully remediated, root cause has been identified, and corrective actions have been implemented or are on a defined schedule.*

### 9.1 30-Day Report Obligation

A final post-incident report must be submitted to NACSA and the Sector Lead **within 30 calendar days of the declared resolution of the incident**. The resolution date is defined as the date on which all affected systems are confirmed to have been restored to a fully operational and secure state.

| Report | Deadline | Recipients |
|---|---|---|
| 30-Day Final Post-Incident Report | Within 30 days of incident resolution | NACSA; BNM / Sector Lead |

### 9.2 Content Requirements for the 30-Day Final Report

#### 9.2.1 Incident Summary

| Field | Content |
|---|---|
| Incident Reference | Internal reference and all regulatory submission references |
| Incident Type (Final) | Confirmed classification |
| Incident Timeline | Full timeline from T0 to resolution |
| Total Duration | Time from T0 to resolution declaration |
| Total Impact | Final quantification of all impact categories |

#### 9.2.2 Root Cause Analysis (Final)

| RCA Element | Content |
|---|---|
| Technical Root Cause | The specific technical vulnerability, misconfiguration, or gap exploited |
| Contributing Factors | Process, people, or technology gaps that enabled or amplified the incident |
| Attack Chain Description | End-to-end description of the attacker's methodology (MITRE ATT&CK mapping where applicable) |
| Evidence Basis | Summary of forensic evidence supporting the root cause conclusion |

#### 9.2.3 Corrective and Preventive Actions (CAPA)

*All corrective actions must be assigned an owner, target completion date, and current status.*

| Action ID | Description | Category | Owner | Target Date | Status |
|---|---|---|---|---|---|
| CAPA-001 | [Description of corrective action] | Technical / Process / People | [Owner Name] | [Date] | [Open / In Progress / Closed] |
| CAPA-002 | [Description] | [Category] | [Owner] | [Date] | [Status] |
| CAPA-003 | [Description] | [Category] | [Owner] | [Date] | [Status] |
| [Add rows as required] | | | | | |

#### 9.2.4 Lessons Learned

| Lesson | Category | Recommended Improvement |
|---|---|---|
| [Lesson identified from the incident] | [Detection / Containment / Communication / Process] | [Specific recommendation] |
| [Lesson] | [Category] | [Recommendation] |
| [Lesson] | [Category] | [Recommendation] |

#### 9.2.5 IOC and Threat Intelligence Sharing

- [ ] All confirmed IOCs have been compiled and formatted for sharing
- [ ] IOC list submitted to NACSA for sector-wide dissemination
- [ ] IOC list shared with Sector Lead / sector ISAC where applicable
- [ ] TLP markings applied to all shared intelligence

### 9.3 30-Day Report Approval and Submission

| Step | Actor | Action |
|---|---|---|
| Draft report | SOC Lead / Incident Response Manager | Compile all sections from incident record |
| Technical review | IRT Lead | Verify accuracy of technical findings |
| Management review | CISO, CRO, Legal | Review for completeness, legal compliance, disclosure appropriateness |
| Board / ExCo notification | CISO | Brief Board / ExCo on final incident outcome as required by policy |
| Submit to NACSA | CISO / Authorized Signatory | Submit via [prescribed channel]; retain confirmation |
| Submit to Sector Lead | CISO / Authorized Signatory | Submit via [BNM SupTech / prescribed channel]; retain confirmation |
| Archive | Compliance Officer | Archive complete incident record in [document management system] |

### 9.4 Incident Record Retention

The complete incident record, including all regulatory notifications, submissions, correspondence, and internal documentation, must be retained for a minimum of **[X years — align with Act 854 / BNM requirements]** from the date of the final report submission, in accordance with [Organization Name]'s Records Retention Policy.

---

## 10. Roles and Responsibilities

*This RACI matrix defines accountability for the key activities in this procedure. Review and update whenever organizational structures change. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 10.1 RACI Matrix

| Activity | SOC Analyst | SOC Lead | CISO | CRO | CEO / ExCo | Legal / Compliance | Incident Response Manager | IT Operations | Vendor Management |
|---|---|---|---|---|---|---|---|---|---|
| Incident detection and initial triage | R | A | I | I | — | — | — | C | — |
| Severity classification | R | A/R | C | — | — | — | — | C | — |
| IRT activation | — | R | A | I | — | — | — | I | — |
| CISO notification | R/SOC Lead | R | A | I | — | — | — | — | — |
| Management / Board notification | — | — | R | A | I | C | — | — | — |
| NACSA form completion | — | R | A | — | — | C | R | C | — |
| Legal / compliance review of notification | — | — | A | — | — | R | — | — | — |
| NACSA notification submission | — | — | R/A | — | — | C | — | — | — |
| Sector Lead notification | — | — | R/A | C | — | C | — | — | — |
| Incident containment | R | A | I | — | — | — | R | R | C |
| Evidence preservation | R | A | I | — | — | C | R | R | — |
| 72-hour report preparation | — | R | A | C | — | C | R | C | — |
| 72-hour report submission | — | — | R/A | — | — | C | — | — | — |
| 30-day final report preparation | — | R | A | C | C | R | R | C | — |
| 30-day report submission | — | — | R/A | C | I | C | — | — | — |
| CAPA tracking and closure | — | C | A | C | — | C | R | R | C |
| Incident record archiving | — | C | I | — | — | R/A | C | — | — |
| Procedure review and update | — | C | R/A | — | — | C | — | — | — |

### 10.2 Key Role Descriptions

| Role | Responsibilities Under This Procedure |
|---|---|
| **CISO** | Ultimate accountability for all regulatory notification submissions; authorizes and signs off NACSA and Sector Lead notifications; briefs senior management and Board; owns this procedure |
| **SOC Lead** | Operational lead for incident triage, IRT coordination, and notification preparation; primary escalation point for SOC analysts; manages 6-hour timeline |
| **SOC Analyst** | First-line detection and triage; initial incident logging; immediate escalation per severity thresholds |
| **Incident Response Manager** | Coordinates IRT activities; maintains incident timeline and record; drives 72-hour and 30-day report preparation |
| **CRO** | Risk assessment and Board escalation; oversight of financial and regulatory risk implications |
| **Legal / Compliance** | Reviews all regulatory submissions for legal privilege, accuracy, and disclosure obligations; advises on PDPA implications |
| **IT Operations** | Executes technical containment, eradication, and recovery actions; provides technical input to notifications |
| **Vendor Management** | Manages communication with affected third-party vendors; coordinates vendor incident response |

---

## 11. Escalation Matrix

*Define clear escalation paths for scenarios where the primary actor is unavailable or the incident exceeds defined parameters.*

### 11.1 Primary Escalation Path

```
SOC Analyst (Tier 1)
        ↓
SOC Lead
        ↓
CISO
        ↓
CRO / CEO
        ↓
Board / Audit and Risk Committee
```

### 11.2 Escalation Contact Register

*Maintain current contact details in a separately secured document (physical copy and encrypted digital copy) accessible to authorized personnel at all times.*

| Role | Primary | Backup | Contact Method |
|---|---|---|---|
| CISO | [Name] | [Deputy CISO Name] | [Phone / Secure Message] |
| SOC Lead | [Name] | [Alternate SOC Lead] | [Phone / Secure Message] |
| Incident Response Manager | [Name] | [Alternate IRM] | [Phone / Secure Message] |
| CRO | [Name] | [Deputy CRO] | [Phone / Secure Message] |
| CEO | [Name] | [COO / Deputy CEO] | [Phone / Secure Message] |
| Legal Counsel | [Name] | [External Counsel — Firm Name] | [Phone / Email] |
| NACSA Emergency Contact | [Name / Duty Officer] | [Alternate] | [See Appendix A] |
| BNM Supervisory Contact | [Name] | [Alternate] | [See Appendix A] |

---

## 12. Communication Controls and Confidentiality

### 12.1 Approved Communication Channels

*During a cyber security incident, standard communication channels may be compromised. Define approved out-of-band communication methods.*

| Communication Type | Approved Channel | Prohibited Channel |
|---|---|---|
| Internal incident coordination | [Dedicated secure channel / encrypted messaging platform] | Standard corporate email (if compromised) |
| NACSA notification submission | [NACSA portal / prescribed secure channel] | Unencrypted email |
| Sector Lead notification | [BNM SupTech / prescribed secure channel] | Unencrypted email |
| External forensic vendor | [Encrypted email / secure file transfer] | Consumer messaging apps |
| Media / public enquiries | [Communications / PR team only — no technical staff] | Direct response by technical staff |
| Law enforcement | [CISO / Legal only] | — |

### 12.2 Information Classification During Incident Response

All incident-related communications and documents must be classified at minimum **Confidential** and handled in accordance with [Organization Name]'s Data Classification Policy. Where materials are shared externally (NACSA, Sector Lead, forensic vendors), apply **Traffic Light Protocol (TLP)** markings:

| TLP Level | Meaning | Application |
|---|---|---|
| TLP:RED | Not for disclosure beyond named recipients | Highly sensitive tactical information shared only with NACSA/Sector Lead |
| TLP:AMBER | Limited disclosure to recipient organization | Reports shared with NACSA and Sector Lead for internal use |
| TLP:GREEN | Sector-wide sharing permitted | IOC information shared for defensive purposes |
| TLP:WHITE | Unrestricted public sharing | Post-incident public statements (if any) |

### 12.3 Media and Public Disclosure

- All media enquiries must be directed to [Corporate Communications / PR Lead] and handled in accordance with [Organization Name]'s Crisis Communications Policy.
- No public disclosure regarding the incident shall be made without written authorization from the CISO and [CEO / Head of Communications].
- Public disclosure, if required, must be coordinated with NACSA and the Sector Lead to avoid compromising ongoing response activities.

---

## 13. Evidence Preservation Requirements

### 13.1 Evidence Preservation Principles

From the moment a qualifying incident is declared, all personnel involved in the response must adhere to the following evidence preservation principles:

- **Chain of custody** must be maintained for all forensic evidence from point of collection.
- **No modification** — affected systems must not be modified, patched, or wiped without explicit authorization from the IRT Lead or CISO.
- **Documentation** — all actions taken on affected systems must be logged with timestamp, actor, and justification.
- **Isolation before analysis** — affected systems should be isolated from the network before forensic analysis.

### 13.2 Evidence Collection Checklist

- [ ] System logs (OS, application, security logs) preserved and timestamped
- [ ] Network flow data captured and preserved
- [ ] Memory dumps taken from affected systems (where operationally feasible)
- [ ] SIEM alerts and raw events exported
- [ ] Endpoint detection and response (EDR) telemetry captured
- [ ] Email headers and phishing artefacts preserved (if email vector)
- [ ] Access logs from identity and access management systems
- [ ] Cloud service provider logs obtained (if applicable)
- [ ] Third-party / vendor logs requested and preserved
- [ ] Physical access records obtained (if physical component to incident)

### 13.3 Forensic Vendor Engagement

If external forensic investigation is required:

| Step | Actor | Action |
|---|---|---|
| Authorize engagement | CISO | Written authorization on vendor engagement form |
| Execute NDA / confidentiality agreement | Legal | Ensure incident confidentiality is contractually protected |
| Brief forensic vendor | IRT Lead | Provide scope, access credentials, and timeline |
| Oversee evidence handling | IRT Lead | Maintain oversight of chain of custody |
| Receive forensic report | CISO / IRT Lead | Review; incorporate into 72-hour and 30-day reports as appropriate |

---

## 14. Review and Approval

### 14.1 Review Schedule

This procedure must be reviewed:

- **Semi-annually** — in accordance with the defined review frequency
- **Following any qualifying cyber security incident** — to incorporate lessons learned
- **Upon material change** to Act 854, NACSA guidance, BNM circulars, or [Organization Name]'s internal security architecture
- **Upon significant organizational change** affecting roles, systems, or processes in scope

### 14.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO (Document Owner) | [Name] | [Signature] | [Date] |
| CRO | [Name] | [Signature] | [Date] |
| Head of Legal / Compliance | [Name] | [Signature] | [Date] |
| CEO / Managing Director | [Name] | [Signature] | [Date] |
| [Board Audit and Risk Committee Chair — if required] | [Name] | [Signature] | [Date] |

---

## 15. References

### 15.1 Primary Legislation

| Reference | Title | Relevant Provisions |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Section 23 — Duty to notify NACSA of cyber security incidents affecting NCII |
| Act 854 | Cyber Security Act 2024 | Section 26 — Requirements for the content and manner of incident notification |
| Act 709 | Personal Data Protection Act 2010 (as amended) | Data breach notification obligations where personal data is involved |
| Act 701 | Financial Services Act 2013 | Regulatory obligations for licensed financial institutions |

### 15.2 Regulatory Guidelines and Circulars

| Reference | Issuing Authority | Title | Relevant Provisions |
|---|---|---|---|
| [RMiT] | Bank Negara Malaysia | Risk Management in Technology | [Sections governing incident notification for financial institutions] |
| [BNM Circular Reference] | Bank Negara Malaysia | [Title of relevant circular] | [Relevant provisions] |
| [NACSA Guidance Reference] | NACSA | [Title of NACSA guidance document] | [Relevant provisions] |

### 15.3 Internal Documents

| Document | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Document ID] | CISO |
| Cyber Security Incident Response Policy | [Document ID] | CISO |
| Business Continuity Policy | [Document ID] | [Owner] |
| Data Classification and Handling Policy | [Document ID] | [Owner] |
| Crisis Communications Policy | [Document ID] | [Owner] |
| Vendor Risk Management Policy | [Document ID] | [Owner] |
| Records Retention Policy | [Document ID] | [Owner] |
| Incident Response Playbooks (individual) | [Document ID Series] | SOC Lead |

---

## 16. Appendices

### Appendix A — NACSA and Sector Lead Contact Directory

*Maintain current contact details. Verify contacts at every semi-annual review. Store a physical copy in the CISO's office and the SOC.*

#### A.1 NACSA Contact Details

| Contact Type | Details |
|---|---|
| NACSA Incident Reporting Portal | [URL — verify with NACSA at time of review] |
| NACSA Emergency Hotline | [Phone number] |
| NACSA Secure Email | [Email address] |
| NACSA Duty Officer (Out of Hours) | [Phone number] |
| NACSA Point of Contact (Named) | [Name / Designation] |

#### A.2 BNM / Sector Lead Contact Details

| Contact Type | Details |
|---|---|
| BNM SupTech Portal / Submission Channel | [URL / Channel reference] |
| BNM Supervisory Contact (Named) | [Name / Designation / Email / Phone] |
| BNM Emergency / Out of Hours | [Phone number] |

#### A.3 National Coordination Contacts

| Organization | Contact | Purpose |
|---|---|---|
| CyberSecurity Malaysia (MyCERT) | [Contact details] | Cyber incident coordination and technical assistance |
| Royal Malaysia Police (PDRM) — CCID | [Contact details] | Law enforcement notification for cybercrime |
| [Sector ISAC — if applicable] | [Contact details] | Sector-wide threat intelligence sharing |

---

### Appendix B — On-Call Roster

*Maintain a current on-call roster for all roles required under this procedure. Review and update monthly. A physical copy must be accessible in the SOC at all times.*

| Role | Name | Mobile (Primary) | Mobile (Backup) | Alternate Contact |
|---|---|---|---|---|
| CISO | [Name] | [Number] | [Number] | [Email] |
| Deputy CISO | [Name] | [Number] | [Number] | [Email] |
| SOC Lead | [Name] | [Number] | [Number] | [Email] |
| Alternate SOC Lead | [Name] | [Number] | [Number] | [Email] |
| Incident Response Manager | [Name] | [Number] | [Number] | [Email] |
| CRO | [Name] | [Number] | [Number] | [Email] |
| Legal Counsel | [Name] | [Number] | [Number] | [Email] |
| Head of IT Operations | [Name] | [Number] | [Number] | [Email] |
| Head of Communications | [Name] | [Number] | [Number] | [Email] |

---

### Appendix C — Incident Classification and Notification Decision Tree

*Use this decision tree to determine whether the 6-hour NACSA notification obligation is triggered.*

```
INCIDENT DETECTED (T0)
        │
        ▼
Does the incident affect or potentially
affect an NCII-designated asset?
        │
   YES  │  NO
        │   └──► Does it cause significant operational
        │         disruption or data breach?
        │               │
        │          YES  │  NO
        │               │   └──► Manage via standard
        │               │         incident process
        ▼               ▼
  6-HOUR NACSA NOTIFICATION OBLIGATION TRIGGERED
        │
        ▼
Activate this procedure immediately.
Record T0. Notify SOC Lead.
```

---

### Appendix D — Incident Register Template

*Maintain a running incident register. Each qualifying incident must have a complete entry. Retain in accordance with the Records Retention Policy.*

| Field | Detail |
|---|---|
| Incident Reference | [INC-YYYY-MMDD-XXX] |
| Incident Title | [Brief descriptive title] |
| T0 (Detection Timestamp) | [YYYY-MM-DD HH:MM MYT] |
| Severity Level | [Critical / High / Medium / Low] |
| Incident Type | [Classification] |
| Incident Response Manager | [Name] |
| NACSA Notification Submitted | [Yes / No / N/A] |
| NACSA Submission Timestamp | [YYYY-MM-DD HH:MM MYT] |
| NACSA Reference Number | [Reference] |
| Sector Lead Notified | [Yes / No / N/A] |
| Sector Lead Submission Timestamp | [YYYY-MM-DD HH:MM MYT] |
| 72-Hour Report Submitted | [Yes / No / Pending] |
| 30-Day Report Submitted | [Yes / No / Pending] |
| Resolution Date | [YYYY-MM-DD] |
| Total Incident Duration | [Hours / Days] |
| Root Cause (Summary) | [Summary] |
| CAPA Status | [Open / In Progress / Closed] |
| Record Location | [Document management system path] |

---

### Appendix E — Glossary of NACSA Incident Types

*Reference NACSA's current published taxonomy. Update at each semi-annual review.*

| Incident Type Code | Description |
|---|---|
| [Code] | [NACSA-defined incident type description] |
| [Code] | [Description] |
| [Code] | [Description] |
| [Add rows per current NACSA taxonomy] | |

---

### Appendix F — Testing and Exercise Schedule

*This procedure must be tested regularly to ensure operational readiness.*

| Exercise Type | Frequency | Last Conducted | Next Scheduled | Lead |
|---|---|---|---|---|
| Tabletop exercise — 6-hour notification simulation | Annual | [Date] | [Date] | CISO |
| Full incident response drill (including NACSA notification) | Annual | [Date] | [Date] | SOC Lead |
| Out-of-hours escalation test | Semi-annual | [Date] | [Date] | SOC Lead |
| NACSA notification form walkthrough | Semi-annual (at procedure review) | [Date] | [Date] | Compliance Officer |
| Contact directory verification | Monthly | [Date] | [Date] | SOC Lead |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**Owner:** CISO / SOC Lead | **Organization:** [Organization Name]
**Next Review:** [Next Review Date]