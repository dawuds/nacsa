# Business Continuity and Disaster Recovery (BCDR) Test Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | BC Manager |
| **Organization** | [Organization Name] |
| **Test Exercise Date** | [Test Exercise Date] |
| **Report Date** | [Report Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

> **CONFIDENTIALITY NOTICE:** This document is classified as **Confidential**. It contains sensitive information relating to the operational resilience posture of [Organization Name] and its National Critical Information Infrastructure (NCII) systems. Access is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable Malaysian law, including the Cyber Security Act 2024 (Act 854).

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory Context](#3-regulatory-context)
4. [Test Scenario and Objectives](#4-test-scenario-and-objectives)
5. [Systems and Teams Tested](#5-systems-and-teams-tested)
6. [RTO/RPO Achievement Results](#6-rtorpo-achievement-results)
7. [Issues Identified During Test](#7-issues-identified-during-test)
8. [Lessons Learned](#8-lessons-learned)
9. [Improvement Actions](#9-improvement-actions)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

*Provide a concise, management-level summary of the BCDR test exercise. This section should be self-contained and readable by senior leadership without reference to the full report. Summarize the test type, key outcomes, critical findings, and overall readiness posture.*

### 1.1 Test Overview

| Field | Details |
|---|---|
| **Test Exercise Name** | [Exercise Name, e.g., "Phoenix 2025 — DR Failover Exercise"] |
| **Test Type** | [Tabletop / Simulation / Parallel Test / Full Failover / Walkthrough] |
| **Test Date(s)** | [Start Date] to [End Date] |
| **Test Duration** | [e.g., 8 hours / 2 days] |
| **Exercise Lead** | [Name, Title] |
| **Scenario Tested** | [Brief description, e.g., "Ransomware-induced data centre outage requiring full DR site activation"] |
| **Overall Test Outcome** | [Pass / Conditional Pass / Fail] |

### 1.2 Summary of Findings

| Category | Count |
|---|---|
| **Critical Issues** | [Number] |
| **Major Issues** | [Number] |
| **Minor Issues** | [Number] |
| **Observations / Recommendations** | [Number] |
| **Total Action Items Raised** | [Number] |

### 1.3 Overall Readiness Assessment

*State the overall resilience posture as assessed during this exercise. Reference the RTO/RPO targets versus actuals at a high level.*

[Organization Name]'s NCII systems demonstrated **[Adequate / Partially Adequate / Inadequate]** resilience during this test exercise. Key RTO/RPO targets were **[met / partially met / not met]** for critical systems. The organization is assessed as **[Ready / Conditionally Ready / Not Ready]** to execute its Business Continuity and Disaster Recovery plans in the event of a real incident.

**Key Strengths Observed:**
- [Strength 1]
- [Strength 2]
- [Strength 3]

**Key Areas Requiring Immediate Attention:**
- [Area 1]
- [Area 2]
- [Area 3]

---

## 2. Purpose and Scope

### 2.1 Purpose

This Business Continuity and Disaster Recovery (BCDR) Test Report documents the planning, execution, and findings of the BCDR test exercise conducted by [Organization Name] on [Test Exercise Date(s)]. The report provides a structured record of:

- The test scenario, assumptions, and declared objectives;
- The NCII systems and response teams that participated in the exercise;
- Actual Recovery Time Objective (RTO) and Recovery Point Objective (RPO) performance against approved targets;
- Issues, gaps, and deficiencies identified during test execution;
- Lessons learned from the exercise; and
- Remediation and improvement actions required to strengthen organizational resilience.

This report constitutes a mandatory compliance artifact under the **Cyber Security Act 2024 (Act 854)**, Section 18, which imposes obligations on NCII Sector Leads and NCII entities to establish, maintain, and periodically test business continuity and disaster recovery arrangements for designated critical information infrastructure.

### 2.2 Scope

*Define which systems, processes, locations, business units, and third-party providers were in scope for this test. Clearly distinguish what was in scope from what was explicitly excluded, and provide rationale for exclusions.*

#### 2.2.1 In-Scope Systems and Processes

The following NCII-designated systems and supporting business processes were included within the scope of this test exercise:

| System / Process | Classification | Business Function | Recovery Tier |
|---|---|---|---|
| [System Name 1] | NCII / Critical | [e.g., Core Banking Platform] | Tier 1 |
| [System Name 2] | NCII / Critical | [e.g., Payment Processing Gateway] | Tier 1 |
| [System Name 3] | NCII / Important | [e.g., Customer Identity Management] | Tier 2 |
| [System Name 4] | Supporting | [e.g., Internal Email Infrastructure] | Tier 3 |
| [Add rows as required] | | | |

#### 2.2.2 In-Scope Business Units and Locations

- [Business Unit / Department 1] — [Location]
- [Business Unit / Department 2] — [Location]
- [Primary Data Centre] — [Location / Address]
- [Disaster Recovery Site] — [Location / Address]
- [Relevant Third-Party Service Providers, if applicable]

#### 2.2.3 Exclusions

The following systems and processes were explicitly **excluded** from this test exercise:

| Excluded Item | Reason for Exclusion |
|---|---|
| [System / Process Name] | [e.g., Scheduled for separate testing in H2 2025] |
| [System / Process Name] | [e.g., Covered under vendor-managed continuity arrangement; separate evidence obtained] |
| [System / Process Name] | [e.g., System undergoing decommission; excluded per Change Advisory Board decision] |

### 2.3 Applicable Regulatory Obligations

This document directly supports [Organization Name]'s compliance with the obligations described in **Section 3** of this report and the regulatory references listed in **Section 12**.

---

## 3. Regulatory Context

### 3.1 Cyber Security Act 2024 (Act 854)

The Cyber Security Act 2024 (Act 854) was enacted to establish a legal framework for the oversight, protection, and resilience of National Critical Information Infrastructure (NCII) in Malaysia. The Act is administered by the **National Cyber Security Agency (NACSA)** and imposes specific obligations on designated NCII entities across sixteen (16) NCII sectors.

**Relevant Provision — Section 18 (Business Continuity and Disaster Recovery):**

Section 18 of Act 854 requires NCII entities to:

- Establish and maintain a Business Continuity Plan (BCP) and a Disaster Recovery Plan (DRP) for their NCII systems;
- Conduct periodic testing of their BCP and DRP to validate the effectiveness of recovery arrangements;
- Document test results, including issues identified and remediation actions taken; and
- Submit test reports to NACSA in accordance with prescribed timelines and formats, as directed by the relevant NCII Sector Lead.

This report satisfies the documentation and testing requirements of Act 854, Section 18 for the test exercise period covered herein.

### 3.2 Sector-Specific Requirements

*If applicable, reference any sector-specific directives, circulars, or guidelines issued by the NCII Sector Lead that impose additional BCDR testing requirements beyond the baseline Act 854 obligations.*

| Requirement | Issuing Authority | Reference | Obligation |
|---|---|---|---|
| [e.g., BCDR Testing Circular] | [e.g., Bank Negara Malaysia] | [e.g., RMiT 10.64] | [e.g., Annual DR test for Tier-1 systems] |
| [e.g., PDPA Data Recovery Requirements] | [e.g., PDPC] | [e.g., PDPA Section 9] | [e.g., Data restoration capability must be demonstrated] |
| [Add as applicable] | | | |

### 3.3 Internal Policy Alignment

This test exercise was conducted in accordance with the following internal policies and procedures:

- [Organization Name] Business Continuity Policy, Version [x.x], dated [Date]
- [Organization Name] Disaster Recovery Procedure — [System/Scope], Version [x.x], dated [Date]
- [Organization Name] BCDR Testing Schedule and Methodology, Version [x.x], dated [Date]
- [Any other relevant internal document]

---

## 4. Test Scenario and Objectives

### 4.1 Test Exercise Overview

*Describe the test scenario in sufficient detail for an independent auditor to understand what was simulated, the assumptions made, and the conditions under which the exercise was conducted. Include the rationale for scenario selection.*

#### 4.1.1 Scenario Description

| Field | Details |
|---|---|
| **Scenario Title** | [e.g., "Scenario Alpha: Ransomware Attack — Primary Data Centre Loss of Service"] |
| **Scenario Category** | [e.g., Cyber Incident / Natural Disaster / Infrastructure Failure / Pandemic / Supply Chain Disruption] |
| **Simulated Trigger Event** | [Describe the initiating event, e.g., "Detection of ransomware encryption of all primary data centre storage arrays at 02:00 hours on a business day"] |
| **Simulated Impact** | [e.g., "Complete loss of availability for all Tier-1 and Tier-2 systems hosted at the primary data centre"] |
| **Threat Actor Profile** | [If applicable, e.g., "Sophisticated external threat actor; assumed to have been present in the network for 72 hours prior to detonation"] |
| **Scenario Basis** | [e.g., Based on real-world incident pattern; NACSA Threat Intelligence Report [Ref]; internal risk assessment finding] |

#### 4.1.2 Scenario Narrative

*Provide a structured narrative describing the sequence of events within the simulated scenario. This should describe the "inject timeline" used during the exercise — the simulated messages, alerts, and escalations that were introduced to test participants.*

**Phase 1 — Detection and Initial Response** *(Simulated Time: T+0 to T+1 hour)*

[Describe the initial detection events — e.g., "At T+0, the Security Operations Centre (SOC) received automated alerts indicating abnormal encryption activity across primary storage arrays. Initial triage confirmed malware activity consistent with ransomware. At T+15 minutes, the SOC escalated to the Incident Response Team..."]

**Phase 2 — Escalation and Declaration** *(Simulated Time: T+1 hour to T+2 hours)*

[Describe the escalation and business continuity invocation — e.g., "At T+1 hour, the Incident Commander declared a major incident and invoked the Business Continuity Plan. The Crisis Management Team convened and authorized activation of the DR site..."]

**Phase 3 — Recovery Execution** *(Simulated Time: T+2 hours to T+[X] hours)*

[Describe the DR activation and recovery execution — e.g., "DR site activation was initiated at T+2 hours. Technical teams executed recovery runbooks for Tier-1 systems in priority order. Recovery status was reported to the Crisis Management Team at 30-minute intervals..."]

**Phase 4 — Restoration and Stand-Down** *(Simulated Time: T+[X] hours to End)*

[Describe the return-to-normal sequence and exercise close-out.]

#### 4.1.3 Test Assumptions and Constraints

*Document the assumptions that governed the test exercise. Assumptions limit the scope of what was tested and must be clearly stated for audit purposes.*

| # | Assumption / Constraint | Impact on Test |
|---|---|---|
| 1 | [e.g., "Live production data was not used; anonymised/masked datasets were used for recovery validation"] | [e.g., RPO validation based on simulated data loss; actual data integrity checks not performed on production systems] |
| 2 | [e.g., "DR site network connectivity was pre-established and not tested as part of this exercise"] | [e.g., Network failover time not included in RTO measurement for this exercise] |
| 3 | [e.g., "Third-party payment network failover was simulated; actual notification to partner was not made"] | [e.g., External dependency recovery not fully validated] |
| 4 | [Add rows as required] | |

### 4.2 Test Objectives

*List the specific, measurable objectives of this test exercise. Each objective should be clearly defined so that pass/fail determination is unambiguous.*

#### 4.2.1 Primary Objectives

| Obj. ID | Objective | Success Criteria | Priority |
|---|---|---|---|
| OBJ-01 | Validate the effectiveness of the Disaster Recovery Plan for Tier-1 NCII systems | All Tier-1 systems recover within approved RTO with data loss not exceeding approved RPO | Critical |
| OBJ-02 | Test the Crisis Management Team's ability to invoke and manage the BCDR response | CMT convened within [X] minutes of incident declaration; communication protocols followed | Critical |
| OBJ-03 | Validate staff familiarity with BCDR roles, procedures, and runbooks | All designated recovery personnel execute assigned tasks without material deviation from procedure | High |
| OBJ-04 | Test the integrity of data backup and restoration processes | Data restoration successfully completed with no corruption; backup media accessible and readable | Critical |
| OBJ-05 | Validate communication procedures (internal and external stakeholder notifications) | Notification timelines met; NACSA/Sector Lead reporting requirements satisfied within prescribed timeframe | High |
| OBJ-06 | [Add additional objectives as required] | | |

#### 4.2.2 Secondary Objectives

| Obj. ID | Objective | Success Criteria | Priority |
|---|---|---|---|
| OBJ-07 | Assess adequacy of DR site capacity to sustain critical operations | Critical business functions operable from DR site at minimum required service levels | Medium |
| OBJ-08 | Test vendor/third-party escalation and support procedures | Vendor support engagement initiated per SLA; escalation contacts current and responsive | Medium |
| OBJ-09 | Evaluate the adequacy of documentation (runbooks, contact lists, recovery procedures) | Recovery procedures sufficiently detailed for execution without key-person dependency | Medium |
| OBJ-10 | [Add additional objectives as required] | | |

### 4.3 Test Methodology

| Field | Details |
|---|---|
| **Test Method** | [e.g., Full Interruption Test / Parallel Test / Simulation / Tabletop Exercise / Walkthrough] |
| **Test Environment** | [e.g., DR site — [Location]; Production systems isolated during test window] |
| **Pre-Test Briefing Date** | [Date] |
| **Test Execution Date(s)** | [Date(s)] |
| **Post-Test Debrief Date** | [Date] |
| **Test Facilitator(s)** | [Name(s)] |
| **Independent Observer(s)** | [Name(s) — Internal Audit / External Auditor / NACSA Representative, if applicable] |

---

## 5. Systems and Teams Tested

### 5.1 Systems Tested

*List all systems that were actively tested during the exercise. For each system, record the recovery tier, the test actions performed, and whether the system was fully, partially, or not tested.*

#### 5.1.1 NCII Systems — Participation Summary

| System Name | System ID | NCII Designation | Recovery Tier | System Owner | Hosting Environment | Test Participation |
|---|---|---|---|---|---|---|
| [System Name 1] | [SYS-001] | [Yes / No] | Tier 1 | [Owner Name] | [Primary DC / Cloud / Hybrid] | Full |
| [System Name 2] | [SYS-002] | [Yes / No] | Tier 1 | [Owner Name] | [Primary DC / Cloud / Hybrid] | Full |
| [System Name 3] | [SYS-003] | [Yes / No] | Tier 2 | [Owner Name] | [Primary DC / Cloud / Hybrid] | Partial |
| [System Name 4] | [SYS-004] | [Yes / No] | Tier 3 | [Owner Name] | [Primary DC / Cloud / Hybrid] | Simulated Only |
| [Add rows as required] | | | | | | |

#### 5.1.2 System Recovery Actions Executed

*For each in-scope system, document the specific recovery actions that were executed during the test. Reference the relevant runbook step numbers where applicable.*

**[System Name 1] — Recovery Actions**

| Step | Action Performed | Runbook Reference | Executed By | Time Commenced | Time Completed | Outcome |
|---|---|---|---|---|---|---|
| 1 | [e.g., Initiate DR replication verification] | [DRP-SYS001, Step 3.1] | [Name / Role] | [HH:MM] | [HH:MM] | [Pass / Fail / N/A] |
| 2 | [e.g., Activate standby database instance at DR site] | [DRP-SYS001, Step 3.2] | [Name / Role] | [HH:MM] | [HH:MM] | [Pass / Fail / N/A] |
| 3 | [e.g., DNS cutover to DR site endpoints] | [DRP-SYS001, Step 4.1] | [Name / Role] | [HH:MM] | [HH:MM] | [Pass / Fail / N/A] |
| 4 | [e.g., Application health checks and smoke testing] | [DRP-SYS001, Step 5.1] | [Name / Role] | [HH:MM] | [HH:MM] | [Pass / Fail / N/A] |
| [Add rows] | | | | | | |

**[System Name 2] — Recovery Actions**

| Step | Action Performed | Runbook Reference | Executed By | Time Commenced | Time Completed | Outcome |
|---|---|---|---|---|---|---|
| 1 | [Action] | [Reference] | [Name / Role] | [HH:MM] | [HH:MM] | [Pass / Fail / N/A] |
| [Add rows as required] | | | | | | |

### 5.2 Teams Tested

*Document all teams and personnel who participated in the test exercise. Record attendance and active participation to demonstrate organisational readiness.*

#### 5.2.1 Team Participation Summary

| Team / Function | Team Lead | No. of Personnel Scheduled | No. of Personnel Participated | Participation Rate | Notes |
|---|---|---|---|---|---|
| Crisis Management Team (CMT) | [Name] | [#] | [#] | [%] | [e.g., One member substituted due to leave] |
| Incident Response Team (IRT) | [Name] | [#] | [#] | [%] | |
| IT Recovery Team — Infrastructure | [Name] | [#] | [#] | [%] | |
| IT Recovery Team — Applications | [Name] | [#] | [#] | [%] | |
| Network Operations Team | [Name] | [#] | [#] | [%] | |
| Database Administration Team | [Name] | [#] | [#] | [%] | |
| Security Operations Centre (SOC) | [Name] | [#] | [#] | [%] | |
| Business Continuity Team | [Name] | [#] | [#] | [%] | |
| Communications / PR Team | [Name] | [#] | [#] | [%] | |
| Vendor / Third-Party Support | [Vendor Name] | [#] | [#] | [%] | |
| Internal Audit (Observer) | [Name] | [#] | [#] | [%] | Observer role only |
| [Add rows as required] | | | | | | |

#### 5.2.2 Key Personnel — Crisis Management Team

| Role | Name | Contact Number | Attendance | Substitute (if applicable) |
|---|---|---|---|---|
| Incident Commander | [Name] | [Number] | [Present / Absent] | [Name if substituted] |
| BC Manager | [Name] | [Number] | [Present / Absent] | |
| Chief Information Security Officer (CISO) | [Name] | [Number] | [Present / Absent] | |
| Head of IT / CIO | [Name] | [Number] | [Present / Absent] | |
| Head of Operations | [Name] | [Number] | [Present / Absent] | |
| Chief Risk Officer | [Name] | [Number] | [Present / Absent] | |
| Legal / Compliance Representative | [Name] | [Number] | [Present / Absent] | |
| Communications Lead | [Name] | [Number] | [Present / Absent] | |
| NACSA Liaison / Reporting Officer | [Name] | [Number] | [Present / Absent] | |
| [Add rows as required] | | | | | | |

#### 5.2.3 Third-Party and Vendor Participation

*Document the involvement of third-party providers and vendors whose participation was required during the test.*

| Vendor / Provider | Service Provided | Contact Name | Participation Mode | SLA Tested | Notes |
|---|---|---|---|---|---|
| [Vendor Name] | [e.g., Primary Data Centre Operations] | [Name] | [On-site / Remote / Simulated] | [Yes / No] | |
| [Vendor Name] | [e.g., DR Site Managed Services] | [Name] | [On-site / Remote / Simulated] | [Yes / No] | |
| [Vendor Name] | [e.g., Cloud Backup Services] | [Name] | [On-site / Remote / Simulated] | [Yes / No] | |
| [Add rows as required] | | | | | | |

---

## 6. RTO/RPO Achievement Results

*This section documents the actual recovery performance achieved during the test exercise against the approved RTO and RPO targets defined in the Disaster Recovery Plan. Results must be recorded against each in-scope system and overall test objectives.*

### 6.1 RTO/RPO Definitions

| Term | Definition |
|---|---|
| **Recovery Time Objective (RTO)** | The maximum acceptable length of time that a system or process can be unavailable following a disruption before the impact becomes unacceptable to the organization. |
| **Recovery Point Objective (RPO)** | The maximum acceptable amount of data loss, measured in time, that the organization can tolerate. Represents the age of the most recent backup or replication checkpoint that must be recovered. |
| **Actual Recovery Time (ART)** | The elapsed time from the point of declared disruption to the point at which the system was confirmed operational at the DR site during this test. |
| **Actual Recovery Point (ARP)** | The timestamp of the most recent data point successfully recovered during this test, representing actual data loss in minutes/hours. |

### 6.2 System-Level RTO/RPO Results

*Record the RTO/RPO targets and actual performance for each tested system. Where targets were not met, reference the corresponding Issue ID raised in Section 7.*

| System Name | System ID | Recovery Tier | Approved RTO | Actual Recovery Time (ART) | RTO Status | Approved RPO | Actual Recovery Point (ARP) | RPO Status | Issue Reference |
|---|---|---|---|---|---|---|---|---|---|
| [System Name 1] | SYS-001 | Tier 1 | [e.g., 4 hours] | [e.g., 3h 42m] | **PASS** | [e.g., 15 minutes] | [e.g., 12 minutes] | **PASS** | N/A |
| [System Name 2] | SYS-002 | Tier 1 | [e.g., 2 hours] | [e.g., 2h 38m] | **FAIL** | [e.g., 30 minutes] | [e.g., 28 minutes] | **PASS** | ISS-003 |
| [System Name 3] | SYS-003 | Tier 2 | [e.g., 8 hours] | [e.g., 6h 15m] | **PASS** | [e.g., 1 hour] | [e.g., 45 minutes] | **PASS** | N/A |
| [System Name 4] | SYS-004 | Tier 3 | [e.g., 24 hours] | [Simulated] | **N/A** | [e.g., 4 hours] | [Simulated] | **N/A** | N/A |
| [Add rows as required] | | | | | | | | | |

### 6.3 RTO/RPO Summary Dashboard

| Metric | Count | Percentage |
|---|---|---|
| Systems with RTO Achieved (Pass) | [#] | [%] |
| Systems with RTO Not Achieved (Fail) | [#] | [%] |
| Systems with RPO Achieved (Pass) | [#] | [%] |
| Systems with RPO Not Achieved (Fail) | [#] | [%] |
| Systems Tested via Simulation Only (Excluded from Pass/Fail) | [#] | [%] |
| **Total Systems In Scope** | **[#]** | **100%** |

### 6.4 Detailed Recovery Timeline

*Provide a chronological timeline of the test exercise, from the initial scenario inject to the declaration of recovery completion. This timeline serves as the primary audit evidence of actual recovery performance.*

| Time (Actual / Elapsed) | Event / Milestone | Responsible Team | Systems Affected | Notes |
|---|---|---|---|---|
| [HH:MM] / T+0:00 | Test exercise commenced. Scenario inject delivered to SOC. | Exercise Facilitator | All | |
| [HH:MM] / T+0:[MM] | SOC detected simulated incident. Incident ticket raised. | SOC | [System Name] | |
| [HH:MM] / T+0:[MM] | Incident escalated to Incident Response Team. | SOC | All | |
| [HH:MM] / T+0:[MM] | Major incident declared. BCP invoked. | Incident Commander | All | |
| [HH:MM] / T+0:[MM] | Crisis Management Team convened. | BC Manager | N/A | |
| [HH:MM] / T+0:[MM] | DR site activation authorized by CMT. | Incident Commander | All | |
| [HH:MM] / T+0:[MM] | DR site activation commenced. | IT Recovery Team | All | |
| [HH:MM] / T+0:[MM] | [System Name 1] recovery initiated. | [Team Name] | SYS-001 | |
| [HH:MM] / T+[H]:[MM] | [System Name 1] recovery confirmed operational at DR site. | [Team Name] | SYS-001 | **RTO Clock Stop — SYS-001** |
| [HH:MM] / T+[H]:[MM] | [System Name 2] recovery initiated. | [Team Name] | SYS-002 | |
| [HH:MM] / T+[H]:[MM] | Issue encountered — [Brief description]. Issue ISS-003 raised. | [Team Name] | SYS-002 | See Section 7 |
| [HH:MM] / T+[H]:[MM] | [System Name 2] recovery confirmed operational at DR site (delayed). | [Team Name] | SYS-002 | **RTO Clock Stop — SYS-002 (FAIL)** |
| [HH:MM] / T+[H]:[MM] | All critical systems confirmed operational at DR site. | BC Manager | All | |
| [HH:MM] / T+[H]:[MM] | Internal stakeholder notifications completed. | Communications Lead | N/A | |
| [HH:MM] / T+[H]:[MM] | NACSA/Sector Lead notification transmitted (simulated). | NACSA Liaison | N/A | |
| [HH:MM] / T+[H]:[MM] | Test stand-down declared. Exercise concluded. | Exercise Facilitator | All | |
| [Add rows as required] | | | | |

### 6.5 Test Objective Achievement Summary

| Obj. ID | Objective | Success Criteria | Achieved? | Notes |
|---|---|---|---|---|
| OBJ-01 | Validate DR Plan effectiveness for Tier-1 NCII systems | All Tier-1 systems recover within approved RTO/RPO | **Partial** | SYS-002 RTO not achieved — see ISS-003 |
| OBJ-02 | Test CMT invocation and management | CMT convened within [X] minutes | **Pass** | CMT convened at T+[MM] |
| OBJ-03 | Staff familiarity with BCDR procedures | Tasks executed per runbook | **Pass** | Minor procedural deviations noted |
| OBJ-04 | Data backup and restoration integrity | Successful restoration, no corruption | **Pass** | All backup restorations successful |
| OBJ-05 | Communication procedures validation | Notification timelines met | **Pass** | |
| OBJ-06 | DR site capacity adequacy | Critical functions operable at DR | **Pass** | |
| [Add rows as required] | | | | |

---

## 7. Issues Identified During Test

*Document all issues, gaps, and deficiencies identified during the test exercise. Each issue must be assigned a unique identifier, classified by severity, and linked to a remediation action in Section 9. This section is a critical audit evidence record.*

### 7.1 Issue Severity Classification

| Severity | Definition | Required Resolution Timeline |
|---|---|---|
| **Critical** | Issue that caused or would likely cause a material failure to meet RTO/RPO targets or regulatory reporting obligations during a real incident. | Immediate — within 30 days |
| **Major** | Issue that significantly impaired recovery execution or posed material risk to recovery success without causing outright failure. | Short-term — within 60 days |
| **Minor** | Issue that caused minor delay or required workaround but did not materially impact overall recovery outcome. | Medium-term — within 90 days |
| **Observation** | A noted gap, risk, or improvement opportunity that did not directly impair the test but warrants management attention. | As scheduled — within 6 months |

### 7.2 Issue Register

| Issue ID | Severity | Systems Affected | Description of Issue | Root Cause | Impact on Test | Action ID | Status |
|---|---|---|---|---|---|---|---|
| ISS-001 | Critical | [System Name] | [Detailed description of the issue observed] | [Root cause analysis] | [Impact on RTO/RPO/objectives] | ACT-001 | Open |
| ISS-002 | Major | [System Name] | [Detailed description] | [Root cause] | [Impact] | ACT-002 | Open |
| ISS-003 | Major | SYS-002 | [e.g., "DR database replication lag exceeded RPO threshold due to undetected replication configuration drift"] | [e.g., "Configuration change applied to production replication settings in [Month] was not replicated to the DR configuration baseline"] | [e.g., "SYS-002 RTO exceeded by 38 minutes; RPO met"] | ACT-003 | Open |
| ISS-004 | Minor | [System Name] | [Detailed description] | [Root cause] | [Impact] | ACT-004 | Open |
| ISS-005 | Observation | General | [Detailed description] | [Root cause] | [Impact] | ACT-005 | Open |
| [Add rows as required] | | | | | | | |

### 7.3 Detailed Issue Descriptions

*Provide full narrative descriptions for Critical and Major issues. Minor issues and observations may be described at a summary level.*

#### ISS-001 — [Short Issue Title] *(Critical)*

**System(s) Affected:** [System Name(s)]

**Issue Description:**
[Provide a detailed narrative description of the issue. Include when it was first observed, what the expected behaviour was, what the actual behaviour was, and how the issue was identified during the test. Be specific — vague issue descriptions are insufficient for audit purposes.]

**Root Cause:**
[Describe the underlying root cause of the issue. Where root cause has not been fully determined at the time of report publication, state that root cause analysis is in progress and provide the expected completion date.]

**Impact on Test:**
[Describe the specific impact this issue had on the test exercise — RTO/RPO deviation, procedural failure, safety concern, compliance risk, etc.]

**Interim Mitigating Action (if applicable):**
[Describe any workaround or interim control applied during the test to manage the impact of this issue.]

**Linked Remediation Action:** ACT-001 (see Section 9)

---

#### ISS-002 — [Short Issue Title] *(Major)*

**System(s) Affected:** [System Name(s)]

**Issue Description:**
[Detailed narrative as above.]

**Root Cause:**
[Root cause as above.]

**Impact on Test:**
[Impact description as above.]

**Interim Mitigating Action (if applicable):**
[Workaround if applied.]

**Linked Remediation Action:** ACT-002 (see Section 9)

---

#### ISS-003 — [Short Issue Title] *(Major)*

**System(s) Affected:** [SYS-002]

**Issue Description:**
[Detailed narrative.]

**Root Cause:**
[Root cause.]

**Impact on Test:**
[Impact description.]

**Linked Remediation Action:** ACT-003 (see Section 9)

---

*[Add additional detailed issue descriptions as required for all Critical and Major issues.]*

---

## 8. Lessons Learned

*This section documents structured lessons learned from the test exercise. Lessons learned are distinct from issues — they represent insights, good practices observed, process improvements identified, and knowledge captured for future exercises. They inform both the Improvement Actions in Section 9 and the planning of future test exercises.*

### 8.1 What Went Well

*Document positive observations from the test exercise. Recognizing what worked effectively is important for reinforcing good practices and providing balance in the overall assessment.*

| # | Observation | Team / System | Implication |
|---|---|---|---|
| 1 | [e.g., "The Crisis Management Team convened within 12 minutes of incident declaration, exceeding the 20-minute target and demonstrating strong executive engagement with the BCDR programme."] | Crisis Management Team | Escalation and invocation procedures are well-embedded; no changes required. |
| 2 | [e.g., "Backup restoration for SYS-001 completed significantly faster than the approved RTO, suggesting the RTO may be conservatively set and could potentially be tightened in the next review cycle."] | IT Recovery Team | Consider reviewing SYS-001 RTO target at next BCP/DRP annual review. |
| 3 | [e.g., "DR site staff were well-prepared with physical access arrangements, workstation builds, and network connectivity pre-validated, minimising setup time during activation."] | [Team Name] | Good practice to be documented in DR site preparation checklist and replicated for future exercises. |
| 4 | [Add as required] | | |

### 8.2 What Could Be Improved

*Document specific areas where performance fell short of expectations, where processes were unclear or inefficient, or where staff demonstrated uncertainty. These observations directly inform the Improvement Actions in Section 9.*

| # | Observation | Team / System | Root Cause / Contributing Factor | Linked Action |
|---|---|---|---|---|
| 1 | [e.g., "Recovery runbooks for SYS-003 contained outdated IP addressing information, causing delays when staff attempted to connect to DR infrastructure using production addresses."] | IT Recovery Team | Documentation maintenance process does not include automated or triggered runbook updates following infrastructure changes. | ACT-006 |
| 2 | [e.g., "Vendor escalation for the backup service provider took 47 minutes, exceeding the SLA-committed 15-minute response. Contact details in the DR Plan were for a general support line rather than the priority escalation path."] | [Team Name] | Contact register not updated since [Year]; priority support contact pathway not documented. | ACT-007 |
| 3 | [e.g., "Two members of the technical recovery team were unfamiliar with the recovery steps for a recently migrated system, highlighting a gap in cross-training for new system onboarding to the DR programme."] | IT Recovery Team | Training and onboarding process for new systems does not include mandatory DR procedure familiarisation. | ACT-008 |
| 4 | [Add as required] | | | |

### 8.3 Process and Procedural Observations

*Document observations relating to the adequacy and accuracy of BCDR documentation, processes, and procedures.*

| # | Document / Process | Observation | Recommended Update |
|---|---|---|---|
| 1 | [e.g., Disaster Recovery Plan — SYS-002] | [Observation] | [Recommended update] |
| 2 | [e.g., Crisis Communications Procedure] | [Observation] | [Recommended update] |
| 3 | [e.g., BCDR Contact Register] | [Observation] | [Recommended update] |
| 4 | [Add rows as required] | | |

### 8.4 Technology and Infrastructure Observations

*Document observations relating to the adequacy, capacity, and configuration of DR infrastructure and technology.*

| # | System / Component | Observation | Recommended Action |
|---|---|---|---|
| 1 | [System / Component Name] | [Observation] | [Action] |
| 2 | [System / Component Name] | [Observation] | [Action] |
| 3 | [Add rows as required] | | |

### 8.5 Lessons Applicable to Future Test Exercises

*Document specific changes to be incorporated into the planning and conduct of future BCDR test exercises.*

| # | Lesson | Applicable to Next Exercise | Owner |
|---|---|---|---|
| 1 | [e.g., "Inject timeline should include a delayed scenario element (e.g., extended outage beyond initial RTO window) to test management decision-making under sustained pressure."] | Yes | [Name / Role] |
| 2 | [e.g., "Pre-test data readiness checks should be added to the test preparation checklist to ensure backup currency is validated before exercise commencement."] | Yes | [Name / Role] |
| 3 | [e.g., "Engagement of NACSA and Sector Lead observer representatives should be planned for at least 30 days in advance to accommodate scheduling constraints."] | Yes | [Name / Role] |
| 4 | [Add rows as required] | | |

---

## 9. Improvement Actions

*This section documents all remediation and improvement actions arising from the test exercise — including those linked to Issues (Section 7) and Lessons Learned (Section 8). Each action must be assigned an owner, priority, and completion deadline. Progress against actions will be tracked and reported at the next BCDR programme review.*

### 9.1 Action Priority Classification

| Priority | Definition | Completion Deadline |
|---|---|---|
| **P1 — Immediate** | Action required to address a Critical issue that presents unacceptable residual risk to business continuity or regulatory compliance. | Within 30 days of report issuance |
| **P2 — Short-Term** | Action required to address a Major issue or significant process gap. | Within 60 days of report issuance |
| **P3 — Medium-Term** | Action required to address a Minor issue, process improvement, or documentation update. | Within 90 days of report issuance |
| **P4 — Planned** | Action to address an observation or enhancement opportunity; can be incorporated into the next scheduled review cycle. | Within 6 months of report issuance |

### 9.2 Action Register

| Action ID | Linked Issue / Lesson | Priority | Action Description | Owner | Target Completion Date | Status | Evidence of Completion |
|---|---|---|---|---|---|---|---|
| ACT-001 | ISS-001 | P1 | [Detailed description of the specific remediation action to be taken] | [Name / Role] | [Date] | Open | [e.g., Updated runbook, configuration change record, test evidence] |
| ACT-002 | ISS-002 | P2 | [Action description] | [Name / Role] | [Date] | Open | |
| ACT-003 | ISS-003 | P2 | [e.g., "Review and reconcile DR replication configuration against production baseline for SYS-002. Implement automated configuration drift detection for all Tier-1 system DR components."] | [Name / Role] | [Date] | Open | |
| ACT-004 | ISS-004 | P3 | [Action description] | [Name / Role] | [Date] | Open | |
| ACT-005 | ISS-005 | P4 | [Action description] | [Name / Role] | [Date] | Open | |
| ACT-006 | Lesson 8.2-1 | P3 | [e.g., "Implement a process to automatically trigger runbook review and update notifications to system owners following any approved infrastructure change affecting DR systems."] | [Name / Role] | [Date] | Open | |
| ACT-007 | Lesson 8.2-2 | P3 | [e.g., "Update BCDR Contact Register with priority escalation pathways for all critical vendors. Schedule quarterly contact list verification. Include in vendor management review process."] | [Name / Role] | [Date] | Open | |
| ACT-008 | Lesson 8.2-3 | P2 | [e.g., "Develop and implement a mandatory DR procedure familiarisation requirement for all new systems onboarded to the DR programme. Include in system onboarding checklist."] | [Name / Role] | [Date] | Open | |
| [Add rows as required] | | | | | | | |

### 9.3 Action Tracking and Governance

Actions arising from this report will be tracked through the [Organization Name] BCDR Programme governance process. Progress will be reported:

- At the **monthly** BCDR Programme Working Group;
- At the **quarterly** IT Risk and Resilience Committee; and
- At the **semi-annual** BC Manager report to the Board Risk Committee (or equivalent).

Overdue P1 actions will be escalated to the [Chief Information Security Officer / Chief Risk Officer] within [X] business days of the target date.

Completion evidence for all actions must be submitted to the BC Manager and retained in the BCDR documentation repository for audit purposes.

---

## 10. Roles and Responsibilities

### 10.1 BCDR Test Exercise RACI Matrix

*The following RACI matrix defines the roles and responsibilities of key stakeholders for the planning, execution, and reporting of BCDR test exercises. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | BC Manager | CISO | CIO / Head of IT | System Owners | IT Recovery Teams | SOC | Internal Audit | Board / Risk Committee | NACSA Liaison |
|---|---|---|---|---|---|---|---|---|---|
| Define test scope and objectives | R/A | C | C | C | C | C | I | I | I |
| Develop test scenario and inject plan | R | C | C | I | C | C | C | I | I |
| Approve test plan | C | C | C | I | I | I | C | A | I |
| Communicate test schedule to stakeholders | R | I | I | I | I | I | I | I | R |
| Notify NACSA / Sector Lead of upcoming test | R | I | I | I | I | I | I | I | A |
| Execute test exercise | R | C | C | C | R | R | I | I | I |
| Observe and record test activities | C | I | I | I | I | I | R/A | I | C |
| Facilitate post-test debrief | R/A | C | C | C | C | C | C | I | I |
| Draft BCDR Test Report | R/A | C | C | C | C | I | I | I | I |
| Review and approve BCDR Test Report | C | C | C | I | I | I | C | A | I |
| Manage and track improvement actions | R/A | C | C | R | R | R | I | I | I |
| Submit test report to NACSA / Sector Lead | R | I | I | I | I | I | I | A | R |
| Report test outcomes to Board / Risk Committee | R | C | C | I | I | I | C | A | I |
| Schedule and plan next test exercise | R/A | I | I | C | C | I | I | I | I |

### 10.2 Roles and Responsibilities — Definitions

| Role | Responsibilities in BCDR Testing Context |
|---|---|
| **BC Manager** | Owns the BCDR programme. Responsible for planning, coordinating, and reporting on all BCDR test exercises. Accountable for the accuracy and completeness of this report. |
| **CISO** | Provides oversight of cyber-resilience dimensions of BCDR. Reviews test results for security-related gaps. Approves test outcomes. |
| **CIO / Head of IT** | Ensures adequate IT resources and infrastructure are allocated for DR execution. Accountable for the technical recovery capability of the organization. |
| **System Owners** | Responsible for ensuring their systems' recovery procedures are current, tested, and executable. Accountable for RTO/RPO performance of their systems. |
| **IT Recovery Teams** | Execute technical recovery procedures during test exercises. Responsible for following runbooks and documenting deviations. |
| **SOC** | Operates detection and monitoring capabilities during exercises. Responsible for identifying simulated incidents and executing escalation procedures. |
| **Internal Audit** | Acts as independent observer during test exercises. Reviews test evidence and reports for adequacy. |
| **Board / Risk Committee** | Accountable at governance level for organizational resilience. Receives reports on BCDR test outcomes and approves material resource allocations for remediation. |
| **NACSA Liaison / Reporting Officer** | Responsible for managing notifications and submissions to NACSA and the relevant NCII Sector Lead in accordance with Act 854 obligations. |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document — [Exercise Name] test report |
| [Add rows as required] | | | |

### 11.2 Document Review

This report has been reviewed by the following individuals prior to submission for approval:

| Reviewer | Title / Role | Review Date | Comments |
|---|---|---|---|
| [Name] | [e.g., IT Recovery Team Lead] | [Date] | [e.g., Reviewed for technical accuracy — no material changes required] |
| [Name] | [e.g., CISO] | [Date] | [e.g., Reviewed security findings — concur with severity ratings] |
| [Name] | [e.g., Internal Audit Representative] | [Date] | [e.g., Reviewed as independent observer — findings consistent with observations] |
| [Add rows as required] | | | |

### 11.3 Approval Sign-Off

*This document requires formal approval by the following authorized signatories before it is considered final and submitted to NACSA / the NCII Sector Lead.*

| Role | Name | Signature | Date |
|---|---|---|---|
| BC Manager | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Head of IT / CIO | [Name] | | [Date] |
| [Additional approver, if required] | [Name] | | [Date] |

*By signing above, the approver confirms that they have reviewed this report, are satisfied with its accuracy and completeness, and authorize its submission to NACSA and relevant NCII Sector Lead in compliance with the Cyber Security Act 2024 (Act 854), Section 18.*

---

## 12. References

### 12.1 Regulatory References

| Reference | Title | Issuing Authority | Relevant Obligation |
|---|---|---|---|
| Cyber Security Act 2024, Section 18 | Business Continuity and Disaster Recovery for NCII | NACSA / Parliament of Malaysia | Requires NCII entities to establish, maintain, and test BCP/DRP arrangements and document results |
| Cyber Security Act 2024, Section 19 | Reporting Obligations | NACSA / Parliament of Malaysia | Reporting requirements for NCII entities, including test outcome reporting |
| [NACSA NCII Sector Framework — Applicable Sector] | [Title] | NACSA | [Obligation] |
| [BNM Risk Management in Technology (RMiT), if applicable] | Risk Management in Technology | Bank Negara Malaysia | [Relevant clause, e.g., 10.64 — DR testing requirements for financial institutions] |
| [PDPA 2010, if applicable] | Personal Data Protection Act 2010 | PDPC / Ministry of Digital | [Relevant clause — data recovery and availability obligations] |
| [ISO 22301:2019, if used as framework] | Business Continuity Management Systems — Requirements | ISO / SIRIM | Internationally recognized BCM standard referenced in organizational framework |
| [ISO/IEC 27031:2011, if applicable] | ICT Readiness for Business Continuity | ISO / SIRIM | Guidelines for ICT readiness to support business continuity |

### 12.2 Internal Document References

| Document Title | Document ID | Version | Date | Location |
|---|---|---|---|---|
| Business Continuity Policy | [DOC-ID] | [Version] | [Date] | [Document repository path / URL] |
| Disaster Recovery Plan — [System/Scope] | [DOC-ID] | [Version] | [Date] | [Location] |
| Business Continuity Plan — [Scope] | [DOC-ID] | [Version] | [Date] | [Location] |
| BCDR Contact Register | [DOC-ID] | [Version] | [Date] | [Location] |
| NCII Asset Register | [DOC-ID] | [Version] | [Date] | [Location] |
| Previous BCDR Test Report — [Period] | [DOC-ID] | [Version] | [Date] | [Location] |
| IT Risk Register | [DOC-ID] | [Version] | [Date] | [Location] |

---

## 13. Appendices

### Appendix A — Test Attendance Register

*Attach or transcribe the signed attendance register from the test exercise, recording all participants, their roles, and attendance confirmation.*

| Name | Organization | Role / Team | Contact | Arrival Time | Departure Time | Signature |
|---|---|---|---|---|---|---|
| [Name] | [Organization] | [Role] | [Email / Phone] | [HH:MM] | [HH:MM] | |
| [Add rows as required] | | | | | | |

---

### Appendix B — Test Scenario Inject Plan

*Attach the full scenario inject plan (also called the "Master Scenario Events List" or MSEL) used during the exercise. This is the documented schedule of simulated events, messages, and triggers introduced to participants.*

| Inject ID | Scheduled Time | Inject Type | Description | Target Audience | Delivered By | Actual Delivery Time | Notes |
|---|---|---|---|---|---|---|---|
| INJ-001 | T+0:00 | Initial Alert | [e.g., "Simulated SOC alert: Ransomware encryption detected on primary storage"] | SOC | Exercise Facilitator | [HH:MM] | |
| INJ-002 | T+0:30 | Escalation | [e.g., "Simulated notification: Encryption spreading to backup systems"] | IRT | Exercise Facilitator | [HH:MM] | |
| INJ-003 | T+1:00 | Decision Point | [e.g., "CMT inject: Vendor confirms ransomware; recommends DR activation"] | CMT | Exercise Facilitator | [HH:MM] | |
| [Add rows as required] | | | | | | | |

---

### Appendix C — System Recovery Runbook References

*List the recovery runbooks that were used or referenced during the test exercise, confirming their version at the time of use.*

| System Name | Runbook Title | Document ID | Version Used | Last Review Date | Notes |
|---|---|---|---|---|---|
| [System Name 1] | [Runbook Title] | [DOC-ID] | [Version] | [Date] | [e.g., Step 3.2 contained outdated IP — see ISS-003] |
| [System Name 2] | [Runbook Title] | [DOC-ID] | [Version] | [Date] | |
| [Add rows as required] | | | | | |

---

### Appendix D — Evidence and Artifacts Collected

*List all evidence items collected during the test exercise to support post-exercise review, internal audit, and regulatory inspection.*

| Evidence ID | Evidence Type | Description | Collected By | Date / Time Collected | Location / Reference |
|---|---|---|---|---|---|
| EVD-001 | Screenshot | [e.g., System health check dashboard at DR site — SYS-001 confirmed operational] | [Name] | [Date/Time] | [Repository path] |
| EVD-002 | Log File | [e.g., DR replication log — SYS-002 — showing replication lag at time of failover] | [Name] | [Date/Time] | [Repository path] |
| EVD-003 | Communication Record | [e.g., CMT WhatsApp/Teams group log — crisis communication during exercise] | [Name] | [Date/Time] | [Repository path] |
| EVD-004 | Photo / Video | [e.g., DR site activation — server room photos] | [Name] | [Date/Time] | [Repository path] |
| EVD-005 | Signed Checklist | [e.g., Pre-test readiness checklist — signed by IT Recovery Team Lead] | [Name] | [Date/Time] | [Repository path] |
| [Add rows as required] | | | | | |

---

### Appendix E — NACSA Submission Checklist

*If this report is to be submitted to NACSA or the NCII Sector Lead, complete this checklist to confirm that all required elements are present prior to submission.*

| # | Requirement | Reference in This Report | Confirmed |
|---|---|---|---|
| 1 | Test scenario and objectives documented | Section 4 | ☐ |
| 2 | Systems tested identified | Section 5.1 | ☐ |
| 3 | Teams and personnel tested identified | Section 5.2 | ☐ |
| 4 | RTO/RPO targets and actual results recorded for each system | Section 6.2 | ☐ |
| 5 | Recovery timeline documented | Section 6.4 | ☐ |
| 6 | Issues identified and severity classified | Section 7.2 | ☐ |
| 7 | Root cause analysis provided for Critical and Major issues | Section 7.3 | ☐ |
| 8 | Lessons learned documented | Section 8 | ☐ |
| 9 | Improvement actions with owners and deadlines documented | Section 9.2 | ☐ |
| 10 | Report approved by accountable executive | Section 11.3 | ☐ |
| 11 | Supporting evidence referenced or attached | Appendix D | ☐ |
| 12 | Submission transmitted within required timeframe per Act 854 / Sector Framework | N/A | ☐ |

**Submission Confirmation:**

| Field | Details |
|---|---|
| **Submitted To** | [NACSA / Sector Lead Name] |
| **Submission Method** | [e.g., NACSA Reporting Portal / Secure Email / Physical Submission] |
| **Submission Reference Number** | [Ref Number] |
| **Date Submitted** | [Date] |
| **Submitted By** | [Name], [Title] |

---

### Appendix F — Previous Test Report — Open Actions Status

*Track the status of outstanding actions from the previous BCDR test exercise to demonstrate continuous improvement.*

| Action ID (Prior Report) | Prior Report Reference | Action Description | Original Due Date | Responsible Owner | Current Status | Completion Evidence |
|---|---|---|---|---|---|---|
| [Prior-ACT-001] | [Prior Report ID / Date] | [Action description] | [Date] | [Name / Role] | [Complete / In Progress / Overdue] | [Evidence reference] |
| [Prior-ACT-002] | [Prior Report ID / Date] | [Action description] | [Date] | [Name / Role] | [Status] | [Evidence reference] |
| [Add rows as required] | | | | | | |

---

*End of Document*

---

| Field | Value |
|---|---|
| **Document Title** | Business Continuity and Disaster Recovery (BCDR) Test Report |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | BC Manager — [Organization Name] |
| **Regulatory Basis** | Cyber Security Act 2024 (Act 854), Section 18 |
| **Next Review / Test Due** | [Next Review Date] |