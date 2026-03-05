# Business Continuity Plan Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | BC Manager |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Plan Identification and Scope](#2-plan-identification-and-scope)
3. [NCII Systems Coverage](#3-ncii-systems-coverage)
4. [RTO and RPO Objectives](#4-rto-and-rpo-objectives)
5. [Testing Record](#5-testing-record)
6. [Plan Ownership](#6-plan-ownership)
7. [Test Schedule](#7-test-schedule)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Business Continuity Plan (BCP) Register serves as the authoritative inventory of all business continuity and disaster recovery (DR) plans maintained by [Organization Name] for its National Critical Information Infrastructure (NCII) systems. The register ensures that all continuity plans are systematically documented, current, tested, and accessible to designated personnel during and in preparation for disruptive events.

This register supports [Organization Name]'s obligations under **Section 18 of the Cyber Security Act 2024 (Act 854)**, which mandates that NCII Sector Leads and NCII entities establish, maintain, and periodically test business continuity arrangements for systems under their purview.

### 1.2 Scope

*Define the organizational boundary and the specific NCII systems or sectors to which this register applies. Include any exclusions and the rationale for those exclusions.*

This register applies to:

- All NCII systems operated, managed, or hosted by [Organization Name] within the **[Sector Name]** sector as designated by NACSA
- Business continuity and disaster recovery plans covering primary operations, alternate processing sites, and critical third-party dependencies
- Plans that have been formally approved, are under review, or are in development

**Out of Scope:**

- Non-NCII systems covered by separate departmental continuity arrangements (unless cross-referenced herein)
- [Any other exclusions specific to the organization]

---

## 2. Plan Identification and Scope

*For each business continuity or disaster recovery plan maintained by the organization, record the unique plan identifier, its formal title, and a concise statement of what the plan covers. This enables rapid retrieval during an incident and supports audit evidence of comprehensive continuity coverage.*

### 2.1 Master Plan Inventory

| Plan ID | Plan Title | Plan Type | Plan Scope Description | Status | Version | Effective Date |
|---|---|---|---|---|---|---|
| [BCP-001] | [e.g., Core Banking System BCP] | [BCP / DRP / COOP] | [Brief description of what systems, functions, and processes the plan covers] | [Active / Under Review / Draft / Retired] | [1.0] | [DD/MM/YYYY] |
| [BCP-002] | [e.g., Payment Gateway Disaster Recovery Plan] | [BCP / DRP / COOP] | [Brief description] | [Active / Under Review / Draft / Retired] | [1.0] | [DD/MM/YYYY] |
| [BCP-003] | [Plan Title] | [BCP / DRP / COOP] | [Brief description] | [Active / Under Review / Draft / Retired] | [1.0] | [DD/MM/YYYY] |

**Plan Type Definitions:**

| Code | Type | Description |
|---|---|---|
| BCP | Business Continuity Plan | Sustains critical business functions during disruption |
| DRP | Disaster Recovery Plan | Restores IT systems and data after a disaster |
| COOP | Continuity of Operations Plan | Ensures essential functions continue at an alternate location |

### 2.2 Plan Document Locations

*Record where each approved plan document is stored to ensure it can be accessed during an emergency, including offline/physical copies.*

| Plan ID | Primary Document Location | Offline/Physical Copy Location | Access Restriction |
|---|---|---|---|
| [BCP-001] | [e.g., SharePoint: /BC/Plans/BCP-001] | [e.g., BC Manager's secure cabinet, Floor 3] | [BC Manager + Alternates] |
| [BCP-002] | [Document path or system] | [Physical location] | [Authorized roles] |

---

## 3. NCII Systems Coverage

*Map each plan to the specific NCII systems it covers. This section demonstrates to NACSA that all designated NCII systems are protected by at least one active continuity plan, fulfilling the coverage requirement under Act 854 s18.*

### 3.1 NCII System–Plan Mapping

| NCII System ID | NCII System Name | NCII Sector | Criticality Classification | Covered by Plan ID(s) | Coverage Gaps / Notes |
|---|---|---|---|---|---|
| [SYS-001] | [e.g., Core Banking Platform] | [e.g., Banking & Finance] | [Critical / High / Medium] | [BCP-001, DRP-001] | [None / Partial coverage – failover only] |
| [SYS-002] | [e.g., RTGS Interface] | [e.g., Banking & Finance] | [Critical / High / Medium] | [BCP-002] | [None] |
| [SYS-003] | [System Name] | [Sector] | [Criticality] | [Plan ID(s)] | [Notes] |

### 3.2 Coverage Summary

| Metric | Value |
|---|---|
| Total NCII Systems in Scope | [Number] |
| Systems with Active BCP Coverage | [Number] |
| Systems with Active DRP Coverage | [Number] |
| Systems with No Current Coverage | [Number] |
| Coverage Rate (%) | [Calculated: Covered / Total × 100]% |

> **Action Required:** Any NCII system recorded with no current coverage must have a remediation plan with a target completion date approved by the BC Manager and reported to [CISO / Risk Committee].

---

## 4. RTO and RPO Objectives

*Document the Recovery Time Objective (RTO) and Recovery Point Objective (RPO) for each plan and cross-reference these against the business impact analysis (BIA). This section provides evidence that recovery objectives are formally defined, business-approved, and technically achievable as required under Act 854 s18.*

### 4.1 RTO/RPO Register

| Plan ID | NCII System(s) Covered | BIA Reference | RTO (Hours) | RPO (Hours) | MTPD (Hours) | Recovery Strategy Summary | BIA Approval Date | Validated by Test? |
|---|---|---|---|---|---|---|---|---|
| [BCP-001] | [SYS-001] | [BIA-2024-01] | [4] | [1] | [72] | [Hot standby at DR site; automated failover via [technology]] | [DD/MM/YYYY] | [Yes / No / Partial] |
| [BCP-002] | [SYS-002] | [BIA-2024-02] | [8] | [2] | [48] | [Warm standby; manual failover procedure] | [DD/MM/YYYY] | [Yes / No / Partial] |
| [BCP-003] | [System(s)] | [BIA Reference] | [Hours] | [Hours] | [Hours] | [Brief strategy] | [DD/MM/YYYY] | [Yes / No / Partial] |

**Definitions:**

- **RTO (Recovery Time Objective):** Maximum acceptable duration of service interruption before recovery must be complete.
- **RPO (Recovery Point Objective):** Maximum acceptable data loss measured in time from the point of disruption to the last valid backup.
- **MTPD (Maximum Tolerable Period of Disruption):** Beyond this threshold, the disruption causes unacceptable consequences to the organization.

### 4.2 RTO/RPO Exceptions and Deviations

*Record any instances where tested or actual recovery times have exceeded defined objectives, and the approved remediation actions.*

| Plan ID | Deviation Type | Approved Deviation (RTO/RPO) | Business Justification | Risk Acceptance By | Remediation Target Date |
|---|---|---|---|---|---|
| [BCP-001] | [e.g., RTO exceeded in test] | [e.g., 6 hours (vs. 4 hour target)] | [Justification] | [Name / Role] | [DD/MM/YYYY] |

---

## 5. Testing Record

*Document all past BCP and DRP tests, including test type, outcome, issues identified, and remediation status. Regular, documented testing is a key compliance requirement under Act 854 s18 and demonstrates that plans are operationally effective, not merely theoretical.*

### 5.1 Test History Log

| Test ID | Plan ID | NCII System(s) | Test Date | Test Type | Test Lead | Participants | RTO Achieved | RPO Achieved | Overall Result | Test Report Reference |
|---|---|---|---|---|---|---|---|---|---|---|
| [TEST-2024-001] | [BCP-001] | [SYS-001] | [DD/MM/YYYY] | [Tabletop / Walkthrough / Functional / Full Simulation] | [Name] | [Teams/Departments] | [Achieved / Not Achieved – X hrs] | [Achieved / Not Achieved – X hrs] | [Pass / Conditional Pass / Fail] | [TEST-RPT-2024-001] |
| [TEST-2024-002] | [BCP-002] | [SYS-002] | [DD/MM/YYYY] | [Test Type] | [Name] | [Participants] | [Result] | [Result] | [Pass / Fail] | [Report Reference] |

**Test Type Definitions:**

| Test Type | Description |
|---|---|
| Tabletop Exercise | Discussion-based walkthrough of the plan with key stakeholders; no systems activated |
| Walkthrough | Step-by-step review of plan procedures without live execution |
| Functional Test | Activation of specific components (e.g., backup restoration, failover of a single system) |
| Full Simulation | End-to-end test simulating an actual disaster scenario; full failover executed |

### 5.2 Test Findings and Remediation Tracker

*Track all deficiencies or improvement observations raised during testing to closure. Outstanding items must be escalated per the escalation thresholds defined in Section 8.*

| Finding ID | Test ID | Plan ID | Finding Description | Severity | Assigned To | Target Closure Date | Status | Closure Evidence |
|---|---|---|---|---|---|---|---|---|
| [FIND-2024-001] | [TEST-2024-001] | [BCP-001] | [Description of gap or issue identified] | [Critical / High / Medium / Low] | [Name / Role] | [DD/MM/YYYY] | [Open / In Progress / Closed] | [Reference to evidence] |
| [FIND-2024-002] | [TEST-2024-001] | [BCP-001] | [Finding description] | [Severity] | [Assignee] | [DD/MM/YYYY] | [Status] | [Evidence] |

---

## 6. Plan Ownership

*Every plan must have a named owner who is accountable for its currency, accuracy, and execution. This section records the primary and alternate owners to ensure continuity of accountability during an incident when the primary owner may not be available.*

### 6.1 Plan Owner Register

| Plan ID | Plan Title | Primary Plan Owner | Owner Title / Department | Contact (Business Hours) | Contact (Out of Hours) | Alternate Plan Owner | Alternate Contact | Date of Last Owner Confirmation |
|---|---|---|---|---|---|---|---|---|
| [BCP-001] | [Plan Title] | [Full Name] | [Title, Department] | [Phone / Email] | [Mobile] | [Full Name] | [Mobile] | [DD/MM/YYYY] |
| [BCP-002] | [Plan Title] | [Full Name] | [Title, Department] | [Phone / Email] | [Mobile] | [Full Name] | [Mobile] | [DD/MM/YYYY] |
| [BCP-003] | [Plan Title] | [Full Name] | [Title, Department] | [Phone / Email] | [Mobile] | [Full Name] | [Mobile] | [DD/MM/YYYY] |

### 6.2 Owner Responsibilities

Each Plan Owner is responsible for:

- Maintaining the plan in a current and tested state
- Ensuring the plan reflects changes to systems, processes, people, and technology
- Coordinating scheduled tests and documenting outcomes
- Reporting plan status to the BC Manager at each semi-annual review cycle
- Confirming plan readiness and owner contact details at least annually

---

## 7. Test Schedule

*The forward test schedule ensures that all plans are tested at the required frequency and that testing is coordinated to avoid operational disruption. Act 854 s18 requires that NCII entities test their continuity arrangements at least [annually / as specified in applicable NACSA directives]; this schedule demonstrates proactive compliance.*

### 7.1 Upcoming Test Calendar

| Test Schedule ID | Plan ID | NCII System(s) | Planned Test Date | Planned Test Type | Test Lead (Planned) | Coordination Requirements | Status |
|---|---|---|---|---|---|---|---|
| [SCHED-2025-001] | [BCP-001] | [SYS-001] | [DD/MM/YYYY] | [Test Type] | [Name / Role] | [e.g., Requires DR site booking; notify [Team] 4 weeks in advance] | [Scheduled / Confirmed / Deferred] |
| [SCHED-2025-002] | [BCP-002] | [SYS-002] | [DD/MM/YYYY] | [Test Type] | [Name / Role] | [Coordination notes] | [Scheduled / Confirmed / Deferred] |
| [SCHED-2025-003] | [BCP-003] | [System(s)] | [DD/MM/YYYY] | [Test Type] | [Name / Role] | [Coordination notes] | [Scheduled / Confirmed / Deferred] |

### 7.2 Testing Frequency Requirements

| Plan Criticality | Minimum Test Frequency | Recommended Test Type |
|---|---|---|
| Critical NCII Systems (MTPD ≤ 24 hrs) | Semi-annual | Functional Test (min); Full Simulation (annually) |
| High NCII Systems (MTPD 24–72 hrs) | Annual | Functional Test or Full Simulation |
| Medium NCII Systems (MTPD > 72 hrs) | Annual | Tabletop or Walkthrough (min); Functional (recommended) |

### 7.3 Overdue Tests

*Automatically flag plans whose last test date has exceeded the required testing interval. Overdue items must be escalated to the CISO.*

| Plan ID | Last Test Date | Required Frequency | Overdue Since | Escalation Status | Remarks |
|---|---|---|---|---|---|
| [BCP-00X] | [DD/MM/YYYY] | [Semi-annual / Annual] | [DD/MM/YYYY] | [Escalated to CISO on DD/MM/YYYY / Pending] | [Reason for delay and planned resolution] |

---

## 8. Roles and Responsibilities

*This section defines accountabilities for the ongoing maintenance, testing, and governance of the BCP Register. The RACI model is used: **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

### 8.1 RACI Matrix

| Activity | BC Manager | Plan Owner | CISO | IT Operations | Risk & Compliance | Internal Audit | Senior Management |
|---|---|---|---|---|---|---|---|
| Maintain BCP Register | R/A | C | I | I | C | I | I |
| Develop / Update BCP/DRP Plans | C | R/A | C | R | C | I | I |
| Approve RTO/RPO Objectives | C | R | A | C | C | I | A |
| Schedule and Coordinate Tests | R/A | C | I | C | I | I | I |
| Execute BCP/DRP Tests | C | R/A | I | R | I | I | I |
| Document Test Results | R | R/A | I | C | I | I | I |
| Remediate Test Findings | C | R/A | I | R | C | I | I |
| Semi-annual Register Review | R/A | C | A | I | C | C | I |
| Report Status to Risk Committee | C | I | R/A | I | C | I | A |
| NACSA Incident Notification | C | C | R/A | C | C | I | A |

### 8.2 Role Definitions

| Role | Responsibilities |
|---|---|
| **BC Manager** | Owns and maintains this register; coordinates the semi-annual review cycle; escalates overdue tests and unresolved findings; reports to CISO |
| **Plan Owner** | Accountable for the currency and testability of their assigned plan(s); confirms owner details annually; leads plan execution during incidents |
| **CISO** | Provides oversight and strategic direction for the BCP program; approves risk acceptances for RTO/RPO deviations; receives escalations |
| **IT Operations** | Provides technical support for DRP testing; maintains DR infrastructure and backup systems |
| **Risk & Compliance** | Ensures BCP program aligns with regulatory requirements; tracks compliance obligations under Act 854; supports audit activities |
| **Internal Audit** | Independently reviews the BCP Register and test evidence; reports findings to Audit Committee |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial version |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Description of major revision] |

### 9.2 Review Schedule

| Review Type | Frequency | Next Due Date | Trigger Conditions |
|---|---|---|---|
| Scheduled Review | Semi-annual | [DD/MM/YYYY] | Calendar-based; driven by BC Manager |
| Ad-hoc Review | As required | N/A | Post-incident; significant change to NCII systems; NACSA directive; organizational restructure |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| BC Manager | [Full Name] | _________________ | [DD/MM/YYYY] |
| CISO | [Full Name] | _________________ | [DD/MM/YYYY] |
| Chief Risk Officer | [Full Name] | _________________ | [DD/MM/YYYY] |
| [Additional Approver] | [Full Name] | _________________ | [DD/MM/YYYY] |

---

## 10. References

The following regulatory instruments, standards, and internal documents are referenced in or inform the requirements captured in this register.

| Reference | Document / Clause | Description |
|---|---|---|
| **Act 854** | Cyber Security Act 2024 (Act 854), Section 18 | Mandates NCII entities to establish, maintain, and test business continuity arrangements for NCII systems |
| **NACSA** | National Cyber Security Agency (NACSA) Directives and Guidelines | Sector-specific requirements issued by NACSA under Act 854 authority |
| **BNM** | Bank Negara Malaysia — Business Continuity Management Policy Document (if applicable) | Applicable to licensed financial institutions designated as NCII entities |
| **ISO 22301** | ISO 22301:2019 — Security and Resilience: Business Continuity Management Systems | International standard for BCMS; used as a supplementary framework |
| **ISO/IEC 27001** | ISO/IEC 27001:2022, Annex A.5.29–5.30 | Information security aspects of business continuity |
| **Internal** | [Organization Name] Business Impact Analysis — [BIA Document ID] | Defines criticality classifications, RTO/RPO requirements, and MTPD thresholds |
| **Internal** | [Organization Name] Incident Response Plan — [IRP Document ID] | Interfaces with BCPs for cyber-incident-triggered continuity activation |
| **Internal** | [Organization Name] NCII Asset Register — [AR Document ID] | Source of truth for systems designated as NCII |

---

## 11. Appendices

### Appendix A — Glossary of Terms

| Term | Definition |
|---|---|
| BCP | Business Continuity Plan: a documented set of procedures to sustain critical business functions during disruption |
| DRP | Disaster Recovery Plan: a documented set of procedures to restore IT systems, data, and infrastructure following a disaster |
| COOP | Continuity of Operations Plan: ensures essential organizational functions continue at an alternate site |
| NCII | National Critical Information Infrastructure: information infrastructure designated as critical to national security, economy, or public safety under Act 854 |
| RTO | Recovery Time Objective: the maximum acceptable duration of service interruption |
| RPO | Recovery Point Objective: the maximum acceptable data loss measured in time |
| MTPD | Maximum Tolerable Period of Disruption: the threshold beyond which disruption causes unacceptable harm |
| NACSA | National Cyber Security Agency: the national authority for cyber security under Act 854 |
| BC Manager | Business Continuity Manager: the designated owner of the BCP program and this register |
| BIA | Business Impact Analysis: assessment of the criticality and recovery requirements of business functions and systems |

### Appendix B — Plan Status Definitions

| Status | Definition |
|---|---|
| **Active** | Plan is approved, current, and available for use |
| **Under Review** | Plan is undergoing scheduled or triggered revision; previous version remains active |
| **Draft** | Plan is in development and has not yet been approved; not available for operational use |
| **Retired** | Plan has been superseded or the system it covered is decommissioned; retained for record purposes |

### Appendix C — Escalation Thresholds

*[Populate with the organization's defined escalation rules, e.g.:]*

| Condition | Escalation To | Timeframe |
|---|---|---|
| Test result: Fail | CISO + Risk Committee | Within 5 business days |
| Test overdue by > 30 days | CISO | Within 2 business days |
| Critical finding not remediated within target date | CISO + Internal Audit | Immediately upon breach |
| RTO/RPO not achieved in live incident | Senior Management + NACSA (if reportable) | Per Incident Response Plan |

### Appendix D — NACSA Notification Reference

*[Insert the applicable NACSA reporting channel, incident classification thresholds, and notification timelines as specified in the current NACSA directives for your sector. Reference the relevant sections of Act 854 and any sector-specific guidelines issued by the NCII Sector Lead.]*

| Notification Type | Trigger | Recipient | Timeline | Reference |
|---|---|---|---|---|
| Cyber Security Incident (NCII) | Activation of BCP/DRP due to cyber event | NACSA via designated channel | [Per Act 854 s18 / NACSA directive] | Act 854 s18; [NACSA Directive Reference] |
| BCP Test Failure Report | Fail result on NCII system test | NCII Sector Lead; NACSA (if required) | [Per sector directive] | [Applicable directive] |

### Appendix E — Change Log for Register Entries

*Maintain a running audit trail of all substantive changes made to individual register entries (outside of the document version cycle) to support audit evidence requirements.*

| Date | Entry Modified | Field Changed | Previous Value | New Value | Changed By | Reason |
|---|---|---|---|---|---|---|
| [DD/MM/YYYY] | [Plan ID / Row] | [Field name] | [Previous value] | [New value] | [Name] | [Reason for change] |

---

*This document is classified **Confidential**. It is intended solely for authorized personnel of [Organization Name] and designated regulatory bodies. Unauthorized disclosure is prohibited under [Organization Name]'s Information Classification Policy and applicable provisions of the Cyber Security Act 2024 (Act 854).*

*Document ID: [Document ID] | Version: 1.0 | Owner: BC Manager | [Organization Name]*