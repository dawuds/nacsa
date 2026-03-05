# Patch Management Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations / Security |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 6 months from Last Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Department** | [Department Name] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and References](#2-regulatory-framework-and-references)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Patch Classification](#4-patch-classification)
5. [Testing Requirements per Criticality](#5-testing-requirements-per-criticality)
6. [Deployment Timelines](#6-deployment-timelines)
7. [Rollback Procedures](#7-rollback-procedures)
8. [Emergency Patching Process](#8-emergency-patching-process)
9. [Exception and Deferral Process](#9-exception-and-deferral-process)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Monitoring, Reporting, and Audit](#11-monitoring-reporting-and-audit)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Patch Management Procedure establishes the formal requirements and operational steps for identifying, classifying, testing, approving, and deploying security patches across [Organization Name]'s National Critical Information Infrastructure (NCII) systems and IT environment. It ensures that vulnerabilities are remediated within defined timelines commensurate with their severity, thereby reducing the attack surface and maintaining the security posture of the organization.

This procedure supports [Organization Name]'s obligations under the **Cyber Security Act 2024 (Act 854)**, specifically Section 18, which mandates that NCII sector leads and NCII entities implement and maintain appropriate cyber security measures for the protection of NCII systems under their purview.

### 1.2 Scope

*Describe the boundary of systems, environments, and personnel to which this procedure applies. Include all NCII-designated systems, shared services, and any third-party managed assets in scope.*

This procedure applies to:

- All systems, servers, workstations, network devices, and applications designated as NCII assets or supporting NCII functions operated by [Organization Name]
- All operating systems (Windows, Linux, Unix, and other platforms) within the production, staging, development, and disaster recovery environments
- All network infrastructure components, including firewalls, routers, switches, and load balancers
- All third-party and vendor-managed systems operating within [Organization Name]'s network or connected to NCII systems under a managed services arrangement
- All personnel with responsibility for the procurement, deployment, maintenance, or decommissioning of systems within scope

The following are **out of scope** for this procedure:

- [List any exclusions, e.g., end-user personal devices not connected to corporate network, isolated test environments with no NCII connectivity]
- Application-layer code changes and software development lifecycle patches, which are governed by [Reference to SDLC/Change Management Policy]

### 1.3 Objectives

- Ensure timely identification and classification of security patches and vulnerability advisories
- Define consistent testing, approval, and deployment workflows for patches based on criticality
- Minimize service disruption through structured testing and rollback planning
- Maintain a complete and auditable record of all patch activities
- Comply with the requirements of Act 854 (s18) and associated NACSA directives

---

## 2. Regulatory Framework and References

*Identify all applicable regulatory instruments, standards, and internal policies that this procedure is designed to satisfy. Ensure section references are accurate and up to date.*

| Regulatory Instrument | Relevant Sections / Clauses | Obligation Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Requires NCII entities to implement cyber security measures for NCII systems, including vulnerability and patch management controls |
| NACSA Cyber Security Framework | [Applicable Control Domain] | [Summarize relevant control requirements] |
| [BNM Risk Management in Technology (RMiT) Policy] | [Applicable Paragraphs] | [Summarize if applicable to financial sector NCII entities] |
| ISO/IEC 27001:2022 | A.8.8 — Management of technical vulnerabilities | Vulnerability management and timely patching |
| NIST Special Publication 800-40 Rev. 4 | All | Guide to enterprise patch management planning |
| [Organization Name] Information Security Policy | [Section Reference] | Overarching security requirements |
| [Organization Name] Change Management Policy | [Section Reference] | Governing change control for production environments |
| [Organization Name] Incident Response Procedure | [Section Reference] | Escalation for zero-day and emergency patches |

---

## 3. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used in this document to ensure consistent interpretation by all stakeholders.*

| Term / Abbreviation | Definition |
|---|---|
| **NCII** | National Critical Information Infrastructure — infrastructure whose disruption or destruction would have a debilitating impact on national security, the economy, or public welfare, as defined under Act 854 |
| **NACSA** | National Cyber Security Agency of Malaysia — the lead agency for cyber security matters under Act 854 |
| **Patch** | A software update issued by a vendor to correct a security vulnerability, fix a defect, or improve functionality |
| **Security Patch** | A patch specifically issued to address one or more identified security vulnerabilities |
| **Vulnerability** | A weakness in a system, application, or network that could be exploited by a threat actor |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed list of cybersecurity vulnerabilities |
| **CVSS** | Common Vulnerability Scoring System — a standardized framework for rating the severity of security vulnerabilities, scored 0.0–10.0 |
| **Zero-Day** | A vulnerability that is publicly known or actively exploited before the vendor has issued a patch |
| **Critical Patch** | A patch addressing a vulnerability with CVSS score ≥ 9.0, or as otherwise classified under Section 4 of this procedure |
| **CAB** | Change Advisory Board — the governance body responsible for reviewing and approving changes to production systems |
| **WAR** | Work Authorization Request — the formal request used to initiate a patch deployment activity |
| **Rollback** | The process of reverting a system to its pre-patch state following a failed or problematic deployment |
| **Deferral** | A formally approved postponement of a patch beyond the standard deployment timeline |
| **SLA** | Service Level Agreement |
| **POC** | Point of Contact |
| **ITSM** | IT Service Management |

---

## 4. Patch Classification

*This section defines the classification tiers used to prioritize patches. Classification drives testing requirements and mandatory deployment timelines. All patches must be assigned a classification upon identification.*

### 4.1 Classification Framework

[Organization Name] classifies patches into four tiers based on the CVSS base score of the underlying vulnerability, vendor severity ratings, exploitability intelligence, and business impact assessment.

| Classification | CVSS Score Range | Vendor Severity | Exploitability Criteria | Examples |
|---|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Critical | Actively exploited in the wild, proof-of-concept publicly available, or zero-day with no workaround | Remote code execution on internet-facing systems; authentication bypass; zero-day vulnerabilities |
| **High** | 7.0 – 8.9 | High | Exploit code available; high likelihood of exploitation within 30 days | Privilege escalation; remote code execution requiring authentication; significant data exposure |
| **Medium** | 4.0 – 6.9 | Medium | Exploit requires local access or significant complexity; limited public exploit code | Cross-site scripting; local privilege escalation; denial of service with moderate impact |
| **Low** | 0.1 – 3.9 | Low / Informational | Exploit requires complex conditions; minimal business impact | Information disclosure with limited sensitivity; low-impact configuration weaknesses |

### 4.2 Classification Override Criteria

*Describe circumstances under which the default CVSS-based classification may be escalated or de-escalated by the Security team, and the approval required for any de-escalation.*

The Security team may escalate or de-escalate a patch classification based on the following factors:

**Escalation triggers (upgrade classification):**
- Active exploitation of the vulnerability observed in threat intelligence feeds subscribed to by [Organization Name]
- The affected system is classified as a Tier 1 NCII asset
- NACSA or CISA Known Exploited Vulnerabilities (KEV) catalogue listing
- Vendor advisory explicitly recommends emergency patching
- [Add additional escalation criteria as applicable]

**De-escalation criteria (downgrade classification):**
- Effective compensating controls are in place and validated (requires CISO approval)
- The affected component is isolated from all network connectivity
- Vendor confirms the vulnerability is not exploitable in [Organization Name]'s specific configuration

All classification overrides must be documented in the patch tracking register with rationale and approver details.

### 4.3 Patch Source Identification

*List the authoritative sources monitored for patch and vulnerability intelligence.*

[Organization Name] monitors the following sources for patch and vulnerability advisories:

- Vendor security bulletins and patch Tuesday/release cycles (Microsoft, Red Hat, Cisco, Oracle, etc.)
- NACSA advisories and alerts
- CISA Known Exploited Vulnerabilities (KEV) catalogue
- National Vulnerability Database (NVD) / CVE Programme
- [Organization Name]'s vulnerability scanning platform: [Tool Name]
- Threat intelligence subscriptions: [Service Name(s)]
- Industry-specific ISACs or information-sharing platforms: [Name(s)]

---

## 5. Testing Requirements per Criticality

*This section defines the mandatory testing activities that must be completed before any patch is approved for deployment to production NCII systems. Testing requirements are scaled to patch criticality to balance security urgency with operational risk.*

### 5.1 Testing Principles

All patches must be tested in a non-production environment prior to production deployment unless the Emergency Patching Process (Section 8) is invoked. Testing must validate:

- Successful installation and system stability post-patch
- Continued correct function of critical business applications
- Absence of negative performance impact
- Compatibility with existing software stack and configurations
- Integrity of rollback capability

### 5.2 Testing Requirements by Classification

| Requirement | Critical | High | Medium | Low |
|---|---|---|---|---|
| **Test Environment Deployment** | Mandatory (expedited) | Mandatory | Mandatory | Recommended |
| **Automated Regression Testing** | Mandatory | Mandatory | Mandatory | Optional |
| **Manual Functional Testing** | Mandatory (targeted) | Mandatory (targeted) | Recommended | Optional |
| **Performance / Load Testing** | If applicable | If applicable | Not required | Not required |
| **Stakeholder UAT Sign-off** | Not required (expedited) | Required for Tier 1 systems | Required | Required |
| **Security Validation Scan (post-test)** | Mandatory | Mandatory | Mandatory | Optional |
| **Minimum Test Duration** | 4–8 hours | 24–48 hours | 3–5 business days | 5–10 business days |
| **CAB Approval Required** | Emergency CAB | Standard or Emergency CAB | Standard CAB | Standard CAB |

### 5.3 Test Environment Requirements

*Describe the test environment configuration required to validate patches. The test environment should mirror production as closely as practicable for NCII system patches.*

The test environment used for patch validation shall:

- Mirror the production configuration of the target system(s) to the extent practicable, including OS version, installed software, and network segmentation
- Be maintained and updated to reflect current production baselines on at least a [monthly/quarterly] basis
- Be logically or physically isolated from the production NCII environment
- Have test results captured and retained in [ITSM Tool / Patch Management Platform] for a minimum of [3 years] for audit purposes

### 5.4 Test Documentation

All testing activities must be recorded in the Patch Test Record (Appendix B). The record must capture:

- Patch identifier (CVE number, vendor bulletin reference)
- Systems tested
- Test environment details
- Test cases executed and results
- Issues identified and resolution
- Sign-off by the responsible tester and Security team reviewer

---

## 6. Deployment Timelines

*This section establishes the mandatory maximum timeframes within which patches must be deployed to production NCII systems following classification. Adherence to these timelines is a key compliance metric under Act 854 (s18).*

### 6.1 Mandatory Deployment Timelines

| Classification | Maximum Deployment Timeline | Timeline Start Point | Notes |
|---|---|---|---|
| **Critical** | **48 hours** | From patch availability confirmation or threat intelligence identification | Emergency CAB approval; after-hours deployment authorized |
| **High** | **7 calendar days** | From patch availability confirmation | Standard or Emergency CAB; weekend deployment may be required |
| **Medium** | **30 calendar days** | From patch availability confirmation | Standard CAB; scheduled maintenance window |
| **Low** | **90 calendar days** | From patch availability confirmation | Standard CAB; next scheduled maintenance cycle |

### 6.2 Timeline Measurement and Tracking

*Describe how patch deployment timelines are tracked, reported, and enforced.*

- All patches must be logged in [Organization Name]'s Patch Tracking Register ([Tool Name]) immediately upon identification, capturing the date/time of first identification as the timeline start point
- Automated alerts shall be configured in [Tool Name] to notify the [Patch Manager / IT Operations Lead] when a patch is approaching 75% of its mandatory deployment window
- Escalation to [CISO / IT Director] is required if a Critical or High patch is projected to exceed its deployment deadline
- Weekly patch compliance reports shall be generated and reviewed by [Patch Manager] and distributed to [IT Security Committee / relevant stakeholders]

### 6.3 Deployment Windows

*Define standard and emergency maintenance windows for patch deployments.*

| Window Type | Schedule | Applicable Classifications |
|---|---|---|
| **Standard Maintenance Window** | [e.g., Every Tuesday 22:00–02:00 MYT] | Medium, Low |
| **Extended Maintenance Window** | [e.g., First Saturday of month 00:00–06:00 MYT] | High, Medium |
| **Emergency Maintenance Window** | As required, on-demand with Emergency CAB approval | Critical |
| **Blackout Periods** | [e.g., Month-end processing, public holidays — list dates or reference calendar] | All classifications (except Critical with CISO approval) |

### 6.4 Deployment Sequencing

*Describe the order in which systems are patched when multiple systems require the same patch, to manage cascading risk.*

Where a patch affects multiple systems, the following deployment sequence shall be observed:

1. **Non-production / Test environment** — to validate patch behaviour
2. **Development and staging systems** — to assess application compatibility
3. **Non-critical production systems** — as a pilot cohort
4. **High-criticality / Tier 1 NCII systems** — following successful pilot deployment
5. **Disaster Recovery / Standby systems** — after primary systems are confirmed stable

Deployment sequencing may be compressed for Critical patches under the Emergency Patching Process (Section 8).

---

## 7. Rollback Procedures

*Rollback procedures ensure that patch deployments that result in system instability, service degradation, or unexpected failures can be reversed in a controlled and timely manner. A documented rollback plan is mandatory for all Critical and High patches and recommended for all others.*

### 7.1 Pre-Deployment Rollback Requirements

Prior to initiating any patch deployment, the responsible team must ensure the following rollback prerequisites are in place:

- [ ] A full system/configuration backup or snapshot has been taken and verified within [4 hours] of the planned deployment
- [ ] The rollback procedure has been documented in the Change Request, including step-by-step restoration steps
- [ ] The rollback has been tested in the test environment (for Critical and High patches)
- [ ] A defined rollback decision point has been established (i.e., the time or trigger after which rollback will be initiated if stability is not confirmed)
- [ ] Personnel required to execute the rollback are identified and available during the deployment window

### 7.2 Rollback Decision Criteria

Rollback shall be initiated when any of the following conditions are observed post-patch deployment:

| Trigger Condition | Rollback Authority |
|---|---|
| Critical business application or NCII system becomes unavailable | [Patch Manager] or on-call [IT Operations Lead] |
| System performance degrades beyond [defined threshold, e.g., >30% latency increase] | [Patch Manager] or on-call [IT Operations Lead] |
| Security controls (antivirus, EDR, SIEM agent) stop functioning | Security Operations team |
| Data integrity issues detected | [Application Owner / Database Administrator] |
| Patch installation fails or produces errors | Deploying engineer (immediate rollback) |
| Business stakeholder escalation approved by [IT Director / CISO] | [CISO] or [IT Director] |

### 7.3 Rollback Procedure

*Document the generic rollback steps applicable to all patch deployments. System-specific rollback procedures must be documented in the relevant system runbooks referenced in Appendix D.*

1. **Declare rollback intent** — The deploying engineer or Patch Manager declares rollback and notifies all stakeholders via [communication channel, e.g., incident bridge / Teams channel]
2. **Stop deployment activity** — Cease any ongoing patch installation steps immediately
3. **Initiate restoration** — Restore from the pre-deployment backup or snapshot using the procedure documented in the Change Request
4. **Validate restoration** — Confirm system functionality, application availability, and performance against the pre-deployment baseline
5. **Notify stakeholders** — Communicate rollback completion and system status to all stakeholders
6. **Raise incident record** — Log the failed deployment as a [P1/P2] incident in [ITSM Tool] for root cause analysis
7. **Document and report** — Complete the Patch Rollback Report (Appendix C) and submit to [Patch Manager / CISO] within [24 hours] of rollback completion

### 7.4 Post-Rollback Review

Following any rollback event:

- A root cause analysis must be completed within [5 business days]
- Findings must be documented and shared with the CAB
- Re-patching must be planned and approved through the standard change process after the root cause is addressed
- Repeated rollback failures for the same patch must be escalated to the CISO

---

## 8. Emergency Patching Process

*The Emergency Patching Process provides an expedited pathway for deploying Critical patches or patches addressing actively exploited zero-day vulnerabilities where the standard change management timeline would introduce unacceptable risk to NCII systems.*

### 8.1 Criteria for Emergency Patching

The Emergency Patching Process may be invoked when **one or more** of the following conditions are met:

- A vulnerability is classified as **Critical** (CVSS ≥ 9.0) with active exploitation confirmed in the wild
- NACSA or a recognized threat intelligence authority has issued a directive requiring immediate patching
- A zero-day vulnerability affecting [Organization Name]'s NCII systems is identified with no available workaround
- [Organization Name]'s Security Operations team detects active exploitation attempts targeting the vulnerability within the organization's environment
- The [CISO] determines that the risk of delaying patching beyond the standard timeline is unacceptable

### 8.2 Emergency Patching Workflow

*The emergency patching workflow is designed to preserve governance oversight while enabling rapid response. All steps must be completed and documented, even if approval is obtained verbally and ratified in writing post-deployment.*

```
Vulnerability Identified
        │
        ▼
Security team classifies as Emergency
        │
        ▼
CISO notified and authorizes Emergency Patching Process
        │
        ▼
Emergency CAB convened (minimum: [CISO / IT Director + Patch Manager + Application Owner])
        │
        ▼
Expedited testing in test environment (4–8 hours where possible)
        │
        ▼
Emergency Change Request raised and approved (verbal + written ratification)
        │
        ▼
Deployment executed (after-hours if required)
        │
        ▼
Post-deployment validation (30–60 minutes)
        │
        ├── Success ─► Notify stakeholders; complete documentation within 24h
        │
        └── Failure ─► Rollback (Section 7); implement compensating controls
```

### 8.3 Emergency Change Approval Authority

| Scenario | Approval Authority |
|---|---|
| Standard Emergency Patch (Critical CVSS, no active exploitation) | [IT Director] + [CISO] |
| Active exploitation confirmed / Zero-day | [CISO] (immediate); ratified by [Emergency CAB] within 4 hours |
| After-hours deployment (no CISO available) | [On-call IT Security Manager] + [IT Operations Lead] (CISO ratification required next business day) |

### 8.4 Compensating Controls

Where a Critical or emergency patch cannot be deployed within the 48-hour timeline (e.g., due to test environment failure, vendor patch unavailability, or critical system dependency), the following compensating controls must be implemented **immediately** and maintained until patching is complete:

- Network-level isolation or micro-segmentation of the affected system
- Enhanced monitoring and alerting on the affected system via [SIEM / EDR platform]
- Temporary disabling of the affected service or feature (where operationally feasible)
- Web Application Firewall (WAF) virtual patching (for web-facing vulnerabilities)
- [Additional organization-specific compensating controls]

All compensating controls must be documented and approved by the [CISO] and reviewed at least every [48 hours] until the patch is deployed.

### 8.5 Post-Emergency Patching Requirements

Within **5 business days** of an emergency patch deployment, the Patch Manager must:

- Complete and distribute the Emergency Patch Report (Appendix E)
- Conduct a post-implementation review with the Security team and relevant Application Owners
- Update the Patch Tracking Register with final deployment status
- Report the emergency patching event in the next [Security Steering Committee / IT Risk Committee] meeting

---

## 9. Exception and Deferral Process

*Not all patches can be deployed within standard timelines due to legitimate operational, compatibility, or business continuity constraints. This section governs the formal process for requesting, approving, monitoring, and closing patch exceptions and deferrals.*

### 9.1 Grounds for Exception or Deferral

A patch deferral or exception may be requested on the following grounds:

| Ground | Description | Maximum Deferral Period |
|---|---|---|
| **Vendor Dependency** | The patch requires a vendor software upgrade or configuration change that cannot be completed within the standard timeline | [30 days for High; 14 days for Critical] |
| **Compatibility Conflict** | The patch introduces a confirmed compatibility conflict with a critical business application | [30 days for High; 14 days for Critical] |
| **Business Continuity Risk** | Deployment within the standard timeline would create unacceptable business continuity risk during a critical operational period | [14 days maximum; not applicable to Critical patches without CISO and NACSA notification] |
| **Test Environment Failure** | The test environment is unavailable due to an unrelated outage | [7 days maximum] |
| **Awaiting Stable Patch** | Vendor has issued a defective patch and a corrected version is pending | Until corrected patch is available + standard timeline |

Deferrals for **Critical** patches require [CISO] approval and must be accompanied by documented compensating controls (Section 8.4).

### 9.2 Exception Request Process

1. The requesting team submits a **Patch Exception / Deferral Request** (Appendix F) to [Patch Manager] with:
   - Patch identifier and classification
   - Original deployment deadline
   - Grounds for deferral with supporting evidence
   - Proposed revised deployment date
   - Compensating controls to be implemented during the deferral period
   - Risk acceptance statement from the system/application owner

2. [Patch Manager] reviews the request and forwards to the appropriate approver:

| Patch Classification | Approval Authority |
|---|---|
| Low | [IT Operations Manager] |
| Medium | [IT Director] |
| High | [CISO] |
| Critical | [CISO] + [Risk Committee] (and NACSA notification if deferral exceeds 7 days) |

3. Approved deferrals are recorded in the Patch Tracking Register with the revised target date, compensating controls, and approver details.

4. Rejected deferral requests escalate to immediate deployment planning.

### 9.3 Deferral Monitoring and Review

- All active deferrals are reviewed weekly by the [Patch Manager] and reported to [IT Security Steering Committee]
- Compensating controls for deferred Critical and High patches must be validated on a [weekly] basis
- A deferral may not be renewed beyond the maximum deferral period without re-approval at the next approval tier
- Patches that remain undeployed at the end of the maximum deferral period without renewed approval are escalated to the [CISO] as a formal risk acceptance item

### 9.4 Permanent Exceptions (Risk Acceptance)

Where a patch cannot be deployed due to end-of-life software, unsupported systems, or contractual constraints, a **Permanent Exception** may be granted subject to:

- Formal risk acceptance by the [CISO] and [Chief Risk Officer]
- A documented remediation plan (e.g., system replacement or decommission) with a committed timeline
- Implementation of permanent compensating controls
- Annual review and re-approval of the exception
- Notification to NACSA if the affected system is a designated NCII asset, in accordance with Act 854 requirements

---

## 10. Roles and Responsibilities

*This section defines the responsibilities of all parties involved in the patch management lifecycle. The RACI matrix should be reviewed and updated whenever organizational changes affect the roles listed.*

### 10.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | CISO | IT Director | Patch Manager | Security Operations | IT Operations | Application Owner | Change Advisory Board | Business Stakeholder |
|---|---|---|---|---|---|---|---|---|
| Patch intelligence monitoring and identification | C | I | R | R | C | I | — | — |
| Patch classification | A | C | R | C | C | C | — | — |
| Classification override decision | A | C | R | C | — | C | — | — |
| Test environment preparation | I | A | C | C | R | C | — | — |
| Patch testing and validation | C | I | A | C | R | R | — | — |
| Change Request submission | I | I | A | C | R | C | I | — |
| CAB approval (Standard) | C | C | A | I | I | I | R | I |
| CAB approval (Emergency) | A | R | C | C | I | C | R | — |
| Production deployment | I | I | A | C | R | C | I | I |
| Post-deployment validation | I | I | A | C | R | R | — | I |
| Rollback decision and execution | A | C | R | C | R | C | I | I |
| Exception / Deferral approval (Critical) | A | C | R | C | C | C | — | — |
| Exception / Deferral approval (High) | A | I | R | I | I | C | — | — |
| Compensating control implementation | A | C | R | R | R | C | — | — |
| Patch compliance reporting | C | I | R | C | C | I | — | I |
| Procedure review and update | A | C | R | C | C | I | I | — |

### 10.2 Role Descriptions

| Role | Primary Responsibility in Patch Management |
|---|---|
| **CISO** | Ultimate accountability for patch management compliance; approves Critical patch deferrals; chairs Security Steering Committee patch reviews |
| **IT Director** | Operational accountability for timely patch deployment; ensures resource availability; approves emergency deployments in CISO's absence |
| **Patch Manager** | Day-to-day management of patch lifecycle; maintains Patch Tracking Register; coordinates with all teams; produces compliance reports |
| **Security Operations** | Threat intelligence monitoring; patch classification input; validates security posture post-deployment; manages SIEM/EDR alerts |
| **IT Operations** | Executes patch testing and production deployments; maintains backup and rollback readiness; documents deployment activities |
| **Application Owner** | Validates application compatibility; approves deployment windows for supported systems; signs off on test results; accepts residual risk for deferrals |
| **Change Advisory Board (CAB)** | Reviews and approves Change Requests for patch deployments; convenes Emergency CAB for Critical patches |
| **Business Stakeholders** | Informed of planned maintenance windows; provide input on blackout periods; approve deferral requests where business continuity risk is cited |

---

## 11. Monitoring, Reporting, and Audit

### 11.1 Key Performance Indicators

*Track and report the following metrics to demonstrate patch management effectiveness and regulatory compliance.*

| KPI | Target | Measurement Frequency | Reported To |
|---|---|---|---|
| Critical patch deployment rate within 48 hours | 100% | Weekly | CISO, IT Director |
| High patch deployment rate within 7 days | ≥ 95% | Weekly | CISO, IT Director |
| Medium patch deployment rate within 30 days | ≥ 90% | Monthly | IT Security Steering Committee |
| Low patch deployment rate within 90 days | ≥ 85% | Monthly | IT Operations Lead |
| Number of active patch deferrals (Critical/High) | 0 (target) | Weekly | CISO |
| Mean time to patch (Critical) | ≤ 36 hours | Monthly | CISO |
| Patch coverage (% of in-scope systems patched) | ≥ 98% | Monthly | IT Security Steering Committee |
| Rollback rate per deployment cycle | ≤ [X]% | Monthly | IT Director |

### 11.2 Reporting

| Report | Frequency | Audience | Owner |
|---|---|---|---|
| Patch Compliance Dashboard | Weekly | CISO, IT Director, Patch Manager | Patch Manager |
| Monthly Patch Status Report | Monthly | IT Security Steering Committee | Patch Manager |
| Quarterly Vulnerability Posture Report | Quarterly | [Risk Committee / Board Risk Committee] | CISO |
| Emergency Patch Report | Per event (within 5 business days) | CISO, IT Director, CAB | Patch Manager |
| NACSA Compliance Evidence Package | As required / Annual | NACSA | CISO |

### 11.3 Audit and Evidence Retention

*Describe the records that must be retained for audit purposes, the retention period, and the storage location.*

The following records must be retained for a minimum of **[5 years]** or as required by applicable law, whichever is greater:

- Patch Tracking Register entries (all classifications)
- Patch Test Records (Appendix B)
- Approved Change Requests and CAB minutes
- Exception and Deferral Request forms and approvals
- Emergency Patch Reports
- Post-deployment validation records
- Rollback reports and root cause analyses

Records shall be stored in [Document Management System / ITSM Tool] with access controls appropriate to their Confidential classification. Physical copies, where applicable, shall be secured in [location].

---

## 12. Review and Approval

### 12.1 Review Schedule

This procedure is subject to **semi-annual** review. An out-of-cycle review shall be triggered by:

- Material changes to the regulatory requirements under Act 854 or NACSA directives
- Significant changes to [Organization Name]'s NCII system landscape or IT architecture
- A major security incident or audit finding relating to patch management
- Changes in the organization's risk appetite or security strategy

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document — approved for implementation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Patch Manager / IT Security Analyst] | | [Date] |
| Reviewed By | [IT Operations Manager] | | [Date] |
| Reviewed By | [Head of IT Security / Security Architect] | | [Date] |
| Approved By | [Chief Information Security Officer (CISO)] | | [Date] |
| Endorsed By | [Chief Information Officer (CIO) / IT Director] | | [Date] |
| Noted By | [Chief Risk Officer (CRO)] | | [Date] |

---

## 13. References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), **Section 18** | Imposes obligations on NCII sector leads and NCII entities to implement cyber security measures for NCII systems; the primary legislative basis for this procedure |
| NACSA National Cyber Security Reference Framework | Provides the operational framework for cyber security controls applicable to NCII entities in Malaysia |
| [BNM RMiT Policy, Paragraph [X.X]] | [Describe relevance if applicable — e.g., technology risk management, outsourcing, or vulnerability management requirements for financial institutions] |
| ISO/IEC 27001:2022, Control A.8.8 | International standard control for management of technical vulnerabilities, informing the classification and timeline framework in this procedure |
| ISO/IEC 27002:2022, Clause 8.8 | Implementation guidance for technical vulnerability management |
| NIST SP 800-40 Rev. 4 | NIST Guide to Enterprise Patch Management Planning — technical guidance informing the testing and deployment framework |
| NIST SP 800-53 Rev. 5, Control SI-2 | Flaw Remediation — federal security control informing patch management best practice |
| [Organization Name] Information Security Policy, v[X.X] | Parent policy governing all information security activities, including patch management |
| [Organization Name] Change Management Policy, v[X.X] | Governs the Change Advisory Board and change request process referenced in this procedure |
| [Organization Name] Incident Response Procedure, v[X.X] | Governs escalation and response for zero-day and emergency patching scenarios |
| [Organization Name] Asset Management Procedure, v[X.X] | Defines the NCII asset register and criticality tiers referenced in Section 4 |
| [Organization Name] Business Continuity Plan, v[X.X] | Referenced for blackout period definitions and continuity risk assessment in the deferral process |

---

## 14. Appendices

### Appendix A — Patch Tracking Register Template

*The Patch Tracking Register is the master record for all patches identified, classified, and managed under this procedure. It must be maintained in [ITSM Tool / Patch Management Platform] and accessible to the Patch Manager and Security Operations team at all times.*

| Field | Description |
|---|---|
| **Patch ID** | Unique identifier assigned by [ITSM Tool] |
| **CVE / Vendor Reference** | CVE number(s) or vendor bulletin reference |
| **Vendor / Product** | Affected vendor and product name |
| **Affected Systems** | List of in-scope systems affected |
| **CVSS Score** | Base CVSS score from NVD |
| **Classification** | Critical / High / Medium / Low |
| **Date Identified** | Date/time patch first identified |
| **Deadline** | Maximum deployment deadline (per Section 6.1) |
| **Status** | Identified / Testing / Approved / Deployed / Deferred / Exception |
| **Change Request ID** | Reference to CAB-approved Change Request |
| **Deployment Date** | Actual date deployed to production |
| **Deployed By** | Name of engineer who executed deployment |
| **Rollback Taken** | Yes / No |
| **Deferral / Exception Reference** | Reference to approved Deferral/Exception form (if applicable) |
| **Notes** | Additional context or compensating controls |

---

### Appendix B — Patch Test Record Template

*Complete this form for each patch prior to production deployment. Retain for audit purposes.*

**Patch Test Record**

| Field | Detail |
|---|---|
| **Patch ID / CVE** | |
| **Patch Classification** | |
| **Test Environment** | |
| **Test Date(s)** | |
| **Tester(s)** | |
| **Systems Tested** | |
| **Test Cases Executed** | |
| **Issues Identified** | |
| **Issue Resolution** | |
| **Post-Test Security Scan Result** | |
| **Recommendation** | Proceed to Production / Do Not Proceed / Proceed with Conditions |
| **Tester Sign-off** | Name: __________ Date: __________ |
| **Security Review Sign-off** | Name: __________ Date: __________ |

---

### Appendix C — Patch Rollback Report Template

*Complete this form within 24 hours of any patch rollback event.*

| Field | Detail |
|---|---|
| **Patch ID / CVE** | |
| **System(s) Affected** | |
| **Deployment Date/Time** | |
| **Rollback Decision Time** | |
| **Rollback Decision Maker** | |
| **Trigger for Rollback** | |
| **Rollback Steps Executed** | |
| **Time to Restore** | |
| **Post-Rollback System Status** | |
| **Incident Record Reference** | |
| **Root Cause (preliminary)** | |
| **Next Steps / Re-patch Plan** | |
| **Report Author** | |
| **Reviewed By (Patch Manager)** | |

---

### Appendix D — System-Specific Patch Runbooks

*Reference list of system-specific patch deployment and rollback runbooks maintained by the IT Operations team. This list must be reviewed and updated at each semi-annual procedure review.*

| System / Platform | Runbook Reference | Owner | Last Updated |
|---|---|---|---|
| [Windows Server — Active Directory Domain Controllers] | [Runbook ID / Location] | [IT Operations] | [Date] |
| [Linux — RHEL/CentOS Production Servers] | [Runbook ID / Location] | [IT Operations] | [Date] |
| [Cisco IOS Network Devices] | [Runbook ID / Location] | [Network Team] | [Date] |
| [Oracle Database Servers] | [Runbook ID / Location] | [DBA Team] | [Date] |
| [VMware ESXi Hypervisors] | [Runbook ID / Location] | [Virtualisation Team] | [Date] |
| [Web Application Servers — Apache/IIS] | [Runbook ID / Location] | [IT Operations] | [Date] |
| [Add additional systems as applicable] | | | |

---

### Appendix E — Emergency Patch Report Template

*Complete this report within 5 business days of an emergency patch deployment.*

| Field | Detail |
|---|---|
| **Emergency Patch ID** | |
| **CVE / Vulnerability Reference** | |
| **Classification** | Critical / Zero-Day |
| **Trigger for Emergency Process** | |
| **Date/Time Emergency Process Invoked** | |
| **Authorizing Officer** | |
| **Emergency CAB Attendees** | |
| **Systems Patched** | |
| **Deployment Date/Time** | |
| **Testing Summary** | |
| **Post-Deployment Validation Result** | |
| **Compensating Controls Applied (if any)** | |
| **Were Timelines Met?** | Yes / No — explain if No |
| **Lessons Learned** | |
| **Follow-up Actions Required** | |
| **Report Author** | |
| **Reviewed By (CISO)** | |
| **Date Submitted** | |

---

### Appendix F — Patch Exception / Deferral Request Form

*Submit this form to the Patch Manager to formally request a deferral or exception for any patch beyond its standard deployment deadline.*

| Field | Detail |
|---|---|
| **Request Date** | |
| **Requestor Name / Team** | |
| **Patch ID / CVE** | |
| **Patch Classification** | |
| **Original Deployment Deadline** | |
| **Proposed Revised Deployment Date** | |
| **Ground for Deferral** (per Section 9.1) | |
| **Supporting Evidence** | |
| **Risk Assessment** | [Describe the risk exposure during the deferral period] |
| **Compensating Controls** | [List all controls to be implemented during the deferral] |
| **System / Application Owner Acceptance** | Name: __________ Signature: __________ Date: __________ |
| **Patch Manager Recommendation** | Approve / Reject — Rationale: |
| **Approving Authority** | |
| **Approval Date** | |
| **Conditions of Approval** | |
| **Deferral Review Date** | |
| **Closure Date (patch deployed)** | |

---

*This document is classified **Confidential** and is intended for authorized personnel of [Organization Name] only. Unauthorized disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact [Patch Manager / IT Security Team] at [contact details].*

*© [Year] [Organization Name]. All rights reserved.*

---

*Document ID: [Document ID] | Version: 1.0 | Last Updated: [Date] | Next Review: [Date]*