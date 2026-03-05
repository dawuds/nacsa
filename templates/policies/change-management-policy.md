# Change Management Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | IT Director |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) — NACSA |
| **Applicable Sections** | Section 18, Section 24 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to unauthorized parties without prior written approval from the IT Director or the designated Document Owner. All printed copies are uncontrolled unless stamped "CONTROLLED COPY."

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Change Classification Framework](#5-change-classification-framework)
6. [Change Advisory Board (CAB) Composition and Governance](#6-change-advisory-board-cab-composition-and-governance)
7. [Change Initiation and Request Procedures](#7-change-initiation-and-request-procedures)
8. [Security Impact Assessment](#8-security-impact-assessment)
9. [Testing and Rollback Requirements](#9-testing-and-rollback-requirements)
10. [Documentation and Audit Trail](#10-documentation-and-audit-trail)
11. [Emergency Change Procedures](#11-emergency-change-procedures)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Compliance Monitoring and Exceptions](#13-compliance-monitoring-and-exceptions)
14. [Policy Violations](#14-policy-violations)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*Describe why this policy exists and the organizational outcome it protects. Link the policy directly to regulatory obligations and business risk objectives.*

This Change Management Policy establishes the framework, controls, and procedures governing all changes made to systems, infrastructure, applications, and configurations that form part of [Organization Name]'s National Critical Information Infrastructure (NCII). The policy ensures that changes are authorized, assessed for risk and security impact, properly tested, and traceable — preserving the stability, integrity, and availability of services upon which [Organization Name] depends.

This policy supports [Organization Name]'s obligations as a designated NCII sector lead or entity under the **Cyber Security Act 2024 (Act 854)**, particularly the requirements under **Section 18** (duties of NCII entities to implement cyber security measures) and **Section 24** (reporting and governance obligations). It also supports compliance with applicable guidelines issued by the **National Cyber Security Agency (NACSA)**.

By implementing a structured change management lifecycle, [Organization Name] mitigates the risk of unauthorized, untested, or poorly coordinated changes that could expose NCII systems to cyber threats, operational disruption, or regulatory non-compliance.

---

## 2. Scope

*Define which systems, personnel, third parties, and change types fall within the boundary of this policy. Be precise to prevent scope gaps during audits.*

### 2.1 In-Scope Systems and Assets

This policy applies to all changes affecting:

- **NCII systems and platforms** designated under Act 854, as listed in [Organization Name]'s NCII Asset Register
- Core banking and financial transaction processing systems
- Network infrastructure, including firewalls, routers, switches, load balancers, and VPN gateways
- Security infrastructure, including Security Information and Event Management (SIEM), Intrusion Detection/Prevention Systems (IDS/IPS), and endpoint protection platforms
- Cloud environments and hybrid infrastructure hosting NCII workloads
- Database systems containing customer, operational, or regulatory data
- Third-party and vendor-managed systems integrated with NCII components
- Operating system, firmware, and application configurations
- Identity and access management (IAM) and privileged access management (PAM) systems

### 2.2 In-Scope Personnel

This policy applies to:

- All permanent employees of [Organization Name] who initiate, review, approve, or implement changes
- Contractors, consultants, and third-party service providers with access to NCII systems
- Managed service providers (MSPs) operating under contractual agreements with [Organization Name]
- Vendors performing software updates, patches, or configuration changes on behalf of [Organization Name]

### 2.3 Out-of-Scope

The following are **excluded** from this policy unless they affect in-scope NCII systems:

- Changes to non-production test environments that are fully isolated from NCII networks
- Content updates to public-facing informational websites with no backend NCII integration
- End-user device configuration changes managed under the separate [Device Management Policy]

---

## 3. Regulatory Context

*Summarize the specific regulatory obligations this policy fulfils. This section is critical for demonstrating regulatory alignment during NACSA assessments or audits.*

### 3.1 Cyber Security Act 2024 (Act 854)

[Organization Name] is subject to the Cyber Security Act 2024 as a [designated NCII entity / NCII sector lead — select applicable]. The following sections directly inform this policy:

| Section | Title / Requirement | Policy Relevance |
|---|---|---|
| **Section 18** | Duties of NCII entities — implementation of cyber security measures and controls | Mandates that changes to NCII systems are governed by formal controls to preserve security posture |
| **Section 24** | Compliance and governance obligations — maintenance of records and submission of evidence | Requires that change records are retained, auditable, and available for regulatory inspection |

### 3.2 Supporting Frameworks and Standards

This policy is also informed by the following frameworks, which [Organization Name] has adopted or referenced:

| Framework / Standard | Relevance |
|---|---|
| NACSA Cyber Security Guidelines for NCII Entities | Sector-specific controls for NCII protection |
| ISO/IEC 27001:2022 — Annex A Control A.8.32 | Change management control requirements |
| NIST SP 800-53 Rev. 5 — CM Control Family | Configuration and change management baseline |
| ITIL 4 — Change Enablement Practice | Industry best practice for change lifecycle |
| Bank Negara Malaysia (BNM) Risk in Technology (RiT) Policy | Applicable if [Organization Name] is a BNM-licensed entity |
| Personal Data Protection Act 2010 (PDPA) | Ensures changes do not compromise personal data protection controls |

---

## 4. Definitions and Abbreviations

*Define all key terms used throughout this document to ensure consistent interpretation across departments and during regulatory review.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Change** | Any addition, modification, or removal of anything that could affect IT services, infrastructure, or security controls |
| **Standard Change** | A pre-approved, low-risk, repeatable change following an established procedure |
| **Normal Change** | A change that is not pre-approved and must follow the full change assessment and authorization lifecycle |
| **Emergency Change** | A change that must be implemented immediately to restore service, address a critical security vulnerability, or prevent imminent harm to NCII systems |
| **NCII** | National Critical Information Infrastructure — systems and assets designated as critical under Act 854 |
| **Change Initiator** | The individual who identifies the need for a change and submits a Change Request |
| **Change Implementer** | The individual or team responsible for executing an approved change |
| **Change Owner** | The accountable party responsible for ensuring a change is properly managed end-to-end |
| **CAB** | Change Advisory Board — the governance body responsible for reviewing and authorizing changes |
| **ECAB** | Emergency Change Advisory Board — a subset of the CAB convened for emergency change authorization |
| **RFC** | Request for Change — the formal record documenting a proposed change |
| **PIR** | Post-Implementation Review — an assessment conducted after a change to evaluate its success and identify lessons learned |
| **Rollback Plan** | A documented procedure to reverse a change and restore the previous known-good state |
| **Security Impact Assessment (SIA)** | An evaluation of the potential security risks introduced or mitigated by a proposed change |
| **CMDB** | Configuration Management Database — the authoritative repository of configuration item records |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| CAB | Change Advisory Board |
| CISO | Chief Information Security Officer |
| CMDB | Configuration Management Database |
| CTO | Chief Technology Officer |
| ECAB | Emergency Change Advisory Board |
| IAM | Identity and Access Management |
| ITSM | IT Service Management |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PIR | Post-Implementation Review |
| RFC | Request for Change |
| SIA | Security Impact Assessment |
| SLA | Service Level Agreement |

---

## 5. Change Classification Framework

*This section defines how changes are categorized. Accurate classification determines the approval path, urgency level, and required controls. Guidance: populate the risk criteria and examples with organization-specific thresholds agreed by the CAB and CISO.*

### 5.1 Classification Overview

All changes to in-scope systems must be classified at the time of RFC submission. Classification determines the authorization level required and the process to be followed. Misclassification is itself a policy violation and must be reported to the Change Manager.

### 5.2 Standard Changes

*Standard changes are pre-authorized, low-risk, and follow a documented, repeatable procedure. They do not require individual CAB review but must be logged and tracked.*

**Characteristics:**
- Frequently performed, well-understood procedure
- Low risk to NCII availability, integrity, or confidentiality
- Documented step-by-step implementation instructions exist
- Rollback procedure is documented and tested
- Approved in the Standard Change Register

**Examples:**
- Routine operating system patch application (pre-tested in non-production)
- Password resets for standard user accounts
- Antivirus signature and definition updates
- Addition of pre-approved firewall rules from an approved ruleset library
- Scheduled certificate renewal following an approved procedure

**Authorization:** Change Manager (no CAB meeting required)

**Standard Change Register:** [Organization Name] shall maintain a Standard Change Register listing all approved standard change templates. Each template must be reviewed and re-approved by the CAB at minimum annually or upon any material change to the procedure or affected system.

### 5.3 Normal Changes

*Normal changes require full assessment and CAB authorization. They vary in priority and risk but all must complete the standard change lifecycle.*

Normal changes are further sub-classified by priority and risk:

| Sub-Classification | Risk Level | Typical CAB Lead Time | Description |
|---|---|---|---|
| **Minor** | Low | [X] business days | Limited scope, minimal impact on NCII availability |
| **Significant** | Medium | [X] business days | Broader scope, potential service disruption or moderate security impact |
| **Major** | High | [X] business days | Large-scale or cross-system change with significant availability or security implications |

**Normal Change lifecycle stages:**

1. Change Initiation — RFC submitted
2. Initial Assessment — Change Manager review
3. Security Impact Assessment — Information Security team
4. Technical Review — Architecture / relevant technical teams
5. CAB Review and Authorization
6. Scheduled implementation
7. Post-Implementation Review (PIR)

### 5.4 Emergency Changes

*Emergency changes bypass standard timelines due to operational urgency. However, they must not bypass security assessment. Full retrospective documentation is mandatory. See Section 11 for detailed emergency change procedures.*

**Criteria for emergency classification** (one or more of the following must apply):

- Active exploitation of a critical vulnerability in an NCII system
- Service outage affecting NCII availability with no viable workaround
- Regulatory directive or NACSA mandatory notification requiring immediate remedial action
- Critical security control failure (e.g., SIEM offline, IPS disabled)

**Emergency changes must NOT be used to:**

- Bypass organizational approval processes for convenience
- Implement feature enhancements or non-critical changes under time pressure
- Circumvent standard testing requirements without CISO written approval

### 5.5 Change Classification Decision Matrix

| Factor | Standard | Normal (Minor) | Normal (Major) | Emergency |
|---|---|---|---|---|
| Pre-authorization available | Yes | No | No | No (retrospective) |
| Security impact | Negligible | Low–Medium | Medium–High | Critical |
| NCII availability risk | Negligible | Low | Medium–High | Immediate risk |
| CAB review required | No | Yes | Yes | ECAB (expedited) |
| SIA required | Pre-approved | Yes | Yes | Yes (expedited) |
| Testing in non-production | Pre-tested (template) | Mandatory | Mandatory | Best effort / CISO waiver |
| Rollback plan required | Pre-documented | Mandatory | Mandatory | Mandatory |

---

## 6. Change Advisory Board (CAB) Composition and Governance

*Define the CAB structure, quorum requirements, meeting cadence, and decision authority. This section demonstrates governance maturity to regulators and auditors.*

### 6.1 CAB Purpose

The Change Advisory Board (CAB) is the primary governance body responsible for reviewing, authorizing, and overseeing significant changes to NCII systems. The CAB ensures that changes are evaluated from technical, security, operational, and business risk perspectives before authorization.

### 6.2 CAB Membership

| Role | Member | Voting Rights | Mandatory Attendance |
|---|---|---|---|
| **CAB Chair** | IT Director | Yes | Yes |
| **Change Manager** | [Change Manager Name / Role] | Yes (casting vote) | Yes |
| **Information Security Representative** | CISO or delegate | Yes | Yes |
| **Infrastructure Lead** | [Infrastructure Manager Name / Role] | Yes | Yes |
| **Application Owner(s)** | Relevant Application Owner(s) for RFC under review | Advisory | As required |
| **Network Engineering Lead** | [Network Manager Name / Role] | Yes | As required |
| **Business Continuity Manager** | [BCM Name / Role] | Advisory | As required |
| **Risk and Compliance Representative** | [Risk Manager Name / Role] | Advisory | As required |
| **Vendor / Third-Party Representative** | [Vendor Name] — where RFC involves vendor-managed systems | Advisory | As required |

*Organizations should populate the Member column with named individuals or role titles specific to their organizational structure.*

### 6.3 Quorum Requirements

| Change Sub-Classification | Minimum Quorum for Authorization |
|---|---|
| Normal (Minor) | Change Manager + CISO representative + one technical lead |
| Normal (Significant) | CAB Chair + Change Manager + CISO representative + two technical leads |
| Normal (Major) | Full CAB attendance or formal written delegation |

Decisions are made by majority vote of voting members present. In the event of a tie, the CAB Chair holds the casting vote. The CISO representative retains the right to veto any change determined to present an unacceptable security risk to NCII systems, pending escalation to the CTO and IT Director.

### 6.4 CAB Meeting Schedule

| Meeting Type | Frequency | Purpose |
|---|---|---|
| **Standard CAB** | [Weekly / Bi-weekly — select applicable] | Review and authorize RFC queue |
| **Emergency CAB (ECAB)** | Ad hoc, convened within [2] hours | Emergency change authorization |
| **CAB Review Session** | Quarterly | Review of PIRs, policy compliance, and change trend analysis |

### 6.5 Emergency Change Advisory Board (ECAB)

The ECAB is a reduced-quorum body convened only for emergency changes. ECAB membership comprises:

- IT Director (or delegate)
- CISO (or delegate)
- Change Manager

ECAB authorization may be obtained via email, secure messaging, or verbal approval followed by written confirmation within [24] hours. Full CAB retrospective review of all emergency changes must occur at the next scheduled CAB meeting.

### 6.6 CAB Decision Outcomes

| Decision | Description | Next Action |
|---|---|---|
| **Approved** | Change authorized to proceed as proposed | Schedule implementation window |
| **Approved with Conditions** | Change authorized subject to specific additional controls or testing | Change Owner documents conditions; Change Manager validates prior to implementation |
| **Deferred** | Change requires additional information or assessment | Initiator addresses CAB concerns and resubmits |
| **Rejected** | Change does not meet security, risk, or operational requirements | Initiator notified; escalation path documented |

---

## 7. Change Initiation and Request Procedures

*This section outlines the end-to-end process for submitting, assessing, and scheduling a change. Organizations should reference their ITSM tooling (e.g., ServiceNow, Jira Service Management) where applicable.*

### 7.1 Request for Change (RFC) Submission

All changes to NCII systems must be initiated through a formal Request for Change (RFC). Verbal or informal change requests are not permitted.

RFC submissions must be made via [Organization Name]'s designated ITSM platform: **[ITSM Platform Name]**, accessible at **[ITSM Platform URL / Reference]**.

**Mandatory RFC fields:**

| Field | Description |
|---|---|
| RFC Reference Number | Auto-generated by ITSM platform |
| Change Title | Short, descriptive title |
| Change Classification | Standard / Normal (Minor, Significant, Major) / Emergency |
| Affected Systems / CIs | CMDB reference IDs for all affected configuration items |
| Description of Change | Detailed description of what will be changed and why |
| Business Justification | Business or regulatory driver for the change |
| Proposed Implementation Date/Time | Requested maintenance window |
| Change Owner | Named accountable individual |
| Change Implementer(s) | Named team or individual(s) executing the change |
| Security Impact Assessment Reference | SIA document reference number (Section 8) |
| Testing Evidence Reference | Test plan and results reference (Section 9) |
| Rollback Plan Reference | Rollback procedure document reference (Section 9) |
| Risk Rating | Low / Medium / High / Critical |
| Dependencies | Other changes, systems, or parties that may be affected |
| Downtime Required | Yes / No — estimated duration |
| Communication Plan | Stakeholder notification plan |

### 7.2 Change Freeze Periods

[Organization Name] shall maintain a **Change Freeze Calendar** published by the Change Manager at least [30] days in advance. During freeze periods, only emergency changes may be implemented.

**Standard freeze periods include:**

- Month-end and year-end financial processing windows
- Public holidays and long weekends as determined by the Change Manager
- Major regulatory reporting submission deadlines
- NACSA or BNM examination periods (upon notification)
- [Organization Name]-specific business-critical periods as determined by the IT Director

### 7.3 Change Scheduling and Communication

Upon CAB authorization, the Change Manager shall:

1. Schedule the change within the approved maintenance window
2. Notify all affected stakeholders via [communication channel, e.g., email/ITSM notification] no less than [X] business days prior to implementation
3. Update the CMDB with the scheduled change record
4. Coordinate with operations and helpdesk teams to manage service impact expectations

---

## 8. Security Impact Assessment

*The SIA is a mandatory control for all Normal and Emergency changes. It ensures that security risks introduced by changes are identified, evaluated, and addressed before authorization. Guidance: develop an SIA template as a formal appendix and reference it here.*

### 8.1 SIA Requirement

A Security Impact Assessment (SIA) is mandatory for all Normal changes and Emergency changes affecting NCII systems. SIAs for Emergency changes may be expedited but must not be omitted.

The SIA must be completed by a qualified member of the Information Security team or a designated security-cleared third party, and reviewed by the CISO or delegate prior to CAB submission.

### 8.2 SIA Scope and Analysis Areas

The SIA must evaluate the proposed change against the following dimensions:

| Assessment Area | Description | Assessment Outcome |
|---|---|---|
| **Confidentiality Impact** | Risk that the change exposes sensitive, personal, or classified data | [None / Low / Medium / High] |
| **Integrity Impact** | Risk that the change corrupts or permits unauthorized modification of data or system configuration | [None / Low / Medium / High] |
| **Availability Impact** | Risk that the change causes system downtime or degraded performance | [None / Low / Medium / High] |
| **Authentication and Access Control** | Changes to IAM, PAM, or access control mechanisms | [Affected / Not Affected] |
| **Network Security** | Changes to firewall rules, network segmentation, or exposure | [Affected / Not Affected] |
| **Encryption and Data Protection** | Changes affecting encryption algorithms, certificates, or key management | [Affected / Not Affected] |
| **Logging and Monitoring** | Impact on SIEM feeds, log collection, or alerting rules | [Affected / Not Affected] |
| **Third-Party and Supply Chain Risk** | Vendor-introduced changes, updates from external parties | [Affected / Not Affected] |
| **Compliance Impact** | Impact on Act 854 compliance posture or other regulatory obligations | [None / Potential / Significant] |
| **Residual Risk** | Risk remaining after proposed controls are applied | [Acceptable / Requires Escalation] |

### 8.3 SIA Risk Rating Criteria

| Risk Rating | Criteria | Required Authorization |
|---|---|---|
| **Low** | Negligible impact across all SIA dimensions; existing controls fully address residual risk | Change Manager |
| **Medium** | Moderate impact on one or more SIA dimensions; additional controls recommended | CAB + CISO review |
| **High** | Significant impact; residual risk requires additional treatment | CAB + CISO written approval |
| **Critical** | Potential to materially compromise NCII security posture; may require NACSA notification under Section 24 | IT Director + CISO + Board risk escalation |

### 8.4 SIA Output and Documentation

The completed SIA must document:

- Identified threats and vulnerabilities introduced or affected by the change
- Existing controls and their adequacy
- Recommended additional controls or safeguards
- Residual risk rating and acceptance statement
- Name and signature of the Information Security reviewer
- CISO review and approval

SIA records must be retained for a minimum of **[5 / 7] years** in accordance with [Organization Name]'s Records Retention Policy and Act 854 compliance requirements.

### 8.5 Security Control Validation

Where a change affects security controls, the Information Security team must:

- Conduct a pre-change baseline of the affected security controls
- Validate that controls are restored to baseline (or improved) following implementation
- Document any temporary security control gaps and the compensating controls applied during the change window
- Escalate to CISO if a security control cannot be restored within the agreed window

---

## 9. Testing and Rollback Requirements

*Testing and rollback are non-negotiable requirements for changes to NCII systems. This section defines minimum standards. Guidance: attach testing evidence templates and rollback procedure templates as appendices.*

### 9.1 Testing Philosophy

No change to an NCII system shall be implemented in a production environment without prior testing, except where expressly authorized in writing by the CISO due to emergency circumstances. Testing must demonstrate that the change achieves its intended outcome without introducing unintended adverse effects.

### 9.2 Testing Environments

| Environment | Description | Usage |
|---|---|---|
| **Development** | Isolated sandbox; no production data | Initial development and unit testing |
| **System Integration Testing (SIT)** | Integrated environment; anonymized/synthetic data | Integration and functional testing |
| **User Acceptance Testing (UAT)** | Production-replica; approved test data | Business acceptance and regression testing |
| **Pre-Production / Staging** | Near-identical to production | Final validation prior to production deployment |
| **Production** | Live NCII environment | Implementation only after all prior stages passed |

[Organization Name] must maintain at minimum a **[SIT / Pre-Production]** environment that sufficiently mirrors the production NCII environment for testing purposes.

### 9.3 Mandatory Testing Requirements

#### 9.3.1 Standard Changes

- Implementation procedure must reference a pre-tested, approved standard change template
- No additional testing required per change instance unless the template is being modified

#### 9.3.2 Normal Changes

| Test Type | Minor Changes | Significant Changes | Major Changes |
|---|---|---|---|
| **Functional Testing** | Required | Required | Required |
| **Regression Testing** | Recommended | Required | Required |
| **Security Testing (VAPT/DAST/SAST)** | As determined by SIA | Required for security-affecting changes | Required |
| **Performance / Load Testing** | As required | As required | Required |
| **Integration Testing** | As required | Required | Required |
| **User Acceptance Testing (UAT)** | As required | Required | Required |
| **Business Continuity / Failover Test** | Not required | As required | Required |

#### 9.3.3 Emergency Changes

Testing for emergency changes must be conducted to the maximum extent possible given time constraints. Where standard testing cannot be completed, the CISO must provide written authorization documenting:

- The specific tests that were omitted
- The justification for omission
- Compensating controls applied
- The timeline for post-implementation testing

### 9.4 Test Documentation Requirements

All testing activities must be documented and retained as part of the RFC record. Test documentation must include:

- Test plan with defined test cases and expected outcomes
- Test execution results (pass/fail for each test case)
- Defects identified and remediation actions taken
- Name and role of the tester
- Date and environment in which testing was conducted
- Sign-off by the Change Owner confirming test results are acceptable

### 9.5 Rollback Requirements

#### 9.5.1 Mandatory Rollback Plan

A documented rollback plan is mandatory for all Normal and Emergency changes. The rollback plan must be submitted as part of the RFC and approved by the CAB prior to authorization.

**Rollback plan must include:**

- Step-by-step procedure to reverse the change and restore the previous configuration/state
- Estimated rollback duration
- Rollback decision criteria — specific conditions under which rollback will be triggered
- Rollback trigger authority — the named individual authorized to initiate rollback
- Fallback communication plan — stakeholder notification in the event of rollback
- Verification steps to confirm successful rollback

#### 9.5.2 Rollback Triggers

Rollback shall be initiated if, during or after implementation, any of the following occur:

- Critical functionality failure with no immediate resolution available
- Security control failure or detected security incident linked to the change
- System performance degradation beyond agreed thresholds
- Data integrity issues identified
- Rollback decision made by the Change Owner or IT Director

#### 9.5.3 Rollback Time Limits

| Change Classification | Maximum Rollback Decision Window |
|---|---|
| Normal (Minor) | [X] hours from implementation start |
| Normal (Significant) | [X] hours from implementation start |
| Normal (Major) | As defined in the approved change plan |
| Emergency | As defined by ECAB authorization |

Beyond these windows, a new RFC must be raised to address any issues identified.

### 9.6 Post-Implementation Review (PIR)

A PIR must be conducted for all Normal (Significant and Major) changes and all Emergency changes. PIR must occur within **[5–10] business days** of implementation and document:

- Whether the change achieved its intended objectives
- Any incidents or unexpected outcomes during or after implementation
- Lessons learned and recommendations for future changes
- Whether rollback was required and, if so, root cause analysis
- Confirmation that all change-related tasks are closed

PIR reports must be reviewed by the CAB at the next scheduled meeting.

---

## 10. Documentation and Audit Trail

*Comprehensive documentation is a regulatory requirement under Section 24 of Act 854. This section establishes the minimum documentation standards and retention obligations that support NACSA audits and internal reviews.*

### 10.1 Documentation Principles

[Organization Name] shall maintain complete, accurate, and auditable records of all changes to NCII systems. Documentation must be:

- **Complete:** All mandatory fields and attachments captured
- **Accurate:** Reflecting actual changes made, not only planned changes
- **Tamper-evident:** Stored in a system with access controls and audit logging
- **Retained:** Kept for the minimum retention period specified below
- **Accessible:** Retrievable within [48] hours for regulatory inspection upon request

### 10.2 Mandatory Change Records

The following records must be created and retained for every change to NCII systems:

| Record Type | Applicable Change Types | Retention Period |
|---|---|---|
| Request for Change (RFC) | All | [5 / 7] years |
| Security Impact Assessment (SIA) | Normal, Emergency | [5 / 7] years |
| CAB / ECAB Meeting Minutes and Decisions | Normal, Emergency | [5 / 7] years |
| Test Plans and Test Results | Normal, Emergency | [5 / 7] years |
| Rollback Plan | Normal, Emergency | [5 / 7] years |
| Implementation Log (timestamped activity record) | All | [5 / 7] years |
| Post-Implementation Review (PIR) | Normal (Significant, Major), Emergency | [5 / 7] years |
| Change Freeze Waivers | As applicable | [5 / 7] years |
| Security Control Validation Records | Normal, Emergency | [5 / 7] years |
| CISO Approvals and Waivers | As applicable | [5 / 7] years |

*Retention periods should be confirmed against [Organization Name]'s Records Retention Policy and any sector-specific regulatory guidance issued by NACSA or BNM.*

### 10.3 ITSM System as System of Record

The designated ITSM platform (**[ITSM Platform Name]**) is the authoritative system of record for all change management documentation. All RFC records, approval decisions, and attachments must be logged within the ITSM platform. Email and verbal approvals must be captured in the ITSM record within **[24] hours** of occurrence.

### 10.4 CMDB Update Requirements

Following successful implementation, the Change Implementer must update the CMDB within **[X] business days** to reflect:

- Configuration Item (CI) changes resulting from the implemented change
- Updated software versions, firmware versions, or configuration baselines
- New CIs introduced or decommissioned CIs removed
- Relationship updates between CIs

Failure to update the CMDB within the required timeframe constitutes a policy violation.

### 10.5 Audit Trail Controls

The ITSM system and CMDB must maintain an immutable audit trail capturing:

- All create, read, update, and delete actions on RFC records
- User identity (with authenticated login) for every action
- Timestamp (with time zone) for every action
- Before-and-after values for all modified fields
- Approvals, rejections, and comments with identity and timestamp

Audit logs for the change management system must be integrated into [Organization Name]'s SIEM platform and reviewed as part of regular security monitoring activities.

### 10.6 Reporting and Management Information

The Change Manager shall produce and distribute the following reports:

| Report | Frequency | Audience |
|---|---|---|
| Change Status Summary | Weekly | IT Director, CISO |
| Emergency Change Register | Monthly | IT Director, CISO, Risk Committee |
| CAB Decision Log | Monthly | IT Director |
| Change Metrics Dashboard (volume, success rate, rollback rate) | Monthly | IT Leadership |
| Compliance Exception Report | Quarterly | IT Director, CISO, Compliance |
| Annual Change Management Review | Annual | Board / Executive Committee |

---

## 11. Emergency Change Procedures

*Emergency changes carry the highest risk of unintended consequences. This section provides the specific, time-bound procedures that govern emergency changes to ensure speed and security are balanced. All emergency changes must be fully documented retrospectively.*

### 11.1 Emergency Change Declaration

An emergency change may be declared by:

- IT Director
- CISO
- Change Manager (with IT Director or CISO concurrence)
- On-call Incident Manager (subject to post-hoc review)

The declaring individual must record the basis for emergency classification at the time of declaration. Unsubstantiated emergency declarations are a policy violation.

### 11.2 Emergency Change Procedure

The following steps must be followed for all emergency changes, in sequence:

**Step 1 — Declare Emergency and Notify**
- Declaring individual notifies IT Director, CISO, and Change Manager immediately
- ECAB convened via [defined communication channel, e.g., emergency bridge line, secure messaging group]
- Emergency RFC opened in ITSM within **[1] hour** of declaration (may be completed retrospectively in extreme urgency but no later than **[2] hours**)

**Step 2 — Expedited Security Impact Assessment**
- CISO or delegate conducts a rapid SIA within the time available
- Where full SIA cannot be completed prior to implementation, the CISO must document the risks accepted and compensating controls applied
- CISO provides written (email / secure message) authorization to proceed

**Step 3 — ECAB Authorization**
- ECAB convenes (in-person, call, or secure message) and authorizes the change
- Minimum ECAB quorum: IT Director or delegate + CISO + Change Manager
- Authorization is recorded with names, timestamps, and basis for approval
- Verbal authorization must be followed by written confirmation within **[2] hours**

**Step 4 — Implementation**
- Change Implementer executes the emergency change
- Implementation activities are logged in real-time or near-real-time
- Change Owner monitors implementation and confirms completion
- Rollback is initiated immediately if implementation fails or introduces new critical issues

**Step 5 — Incident and Notification Assessment**
- CISO assesses whether the incident or vulnerability triggering the emergency change meets NACSA reporting thresholds under Section 24 of Act 854
- Where mandatory reporting is required, the notification process is initiated without delay

**Step 6 — Retrospective Documentation**
- Full RFC record completed within **[24] hours** of emergency change completion
- SIA finalized and signed off by CISO within **[24] hours**
- Implementation log submitted within **[24] hours**
- Rollback plan (even if not invoked) documented within **[24] hours**

**Step 7 — CAB Retrospective Review**
- All emergency changes reviewed at the next scheduled CAB meeting
- CAB determines whether classification was appropriate
- Lessons learned captured and PIR initiated if required
- Patterns of emergency change usage reviewed quarterly for potential policy abuse

### 11.3 Emergency Change Register

The Change Manager shall maintain a dedicated Emergency Change Register updated in real-time. The register must capture:

| Field | Description |
|---|---|
| Emergency RFC Reference | ITSM reference number |
| Date / Time of Declaration | [DD/MM/YYYY HH:MM] |
| Declared By | Name and role |
| Affected NCII System(s) | CMDB CI references |
| Trigger / Justification | Brief description of the event requiring emergency change |
| ECAB Authorizers | Names and roles |
| Implementation Date / Time | [DD/MM/YYYY HH:MM] |
| Implementation Outcome | Successful / Failed / Partially Successful |
| Rollback Invoked | Yes / No |
| NACSA Notification Required | Yes / No — reference if yes |
| PIR Required | Yes / No — PIR reference if yes |
| CAB Retrospective Review Date | [DD/MM/YYYY] |

---

## 12. Roles and Responsibilities

*This RACI table defines accountability for all key change management activities. Ensure all named roles are mapped to actual job titles within [Organization Name]'s organizational structure.*

### 12.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | IT Director | CISO | Change Manager | Change Owner | Change Implementer | Application Owner | Information Security Team | Risk & Compliance | CAB Members |
|---|---|---|---|---|---|---|---|---|---|
| Define and maintain Change Management Policy | A | C | R | — | — | — | C | C | — |
| Maintain Standard Change Register | I | C | R/A | — | — | C | C | — | C |
| Submit RFC | I | — | — | A | R | C | — | — | — |
| Classify change type | I | — | A | R | — | — | C | — | — |
| Conduct Security Impact Assessment | I | A | I | C | — | C | R | C | — |
| Chair CAB | A | — | R | — | — | — | — | — | C |
| Authorize Normal changes | A | C | R | — | — | — | C | C | R |
| Authorize Emergency changes (ECAB) | A | R | R | — | — | — | C | I | — |
| Schedule implementation window | I | — | A | R | — | I | — | — | — |
| Execute change implementation | I | — | I | A | R | — | I | — | — |
| Monitor implementation | I | I | I | A | R | — | C | — | — |
| Trigger rollback | A | C | C | R | R | — | C | — | — |
| Conduct Post-Implementation Review | I | C | A | R | C | C | C | — | — |
| Update CMDB | I | — | I | A | R | — | — | — | — |
| Maintain Emergency Change Register | I | I | R/A | — | — | — | I | I | — |
| Report to Board / Executive Committee | A/R | C | C | — | — | — | C | C | — |
| Ensure NACSA regulatory reporting | A | R | C | — | — | — | R | C | — |
| Conduct annual policy review | A | C | R | — | — | — | C | C | — |

### 12.2 Role Descriptions

**IT Director**
Overall accountable owner of this policy. Chairs the CAB. Approves major and emergency changes. Escalates critical security risks to executive leadership and the Board. Accountable for NACSA regulatory compliance in respect of change management obligations.

**Chief Information Security Officer (CISO)**
Holds veto authority over any change presenting unacceptable security risk to NCII systems. Reviews and approves all SIAs. Co-authorizes emergency changes via ECAB. Ensures security testing requirements are met. Responsible for NACSA incident notification assessment following emergency changes.

**Change Manager**
Operational owner of the change management process. Manages the RFC queue, chairs CAB meetings (under IT Director authority), maintains the Standard Change Register and Emergency Change Register, produces management reports, and ensures policy compliance.

**Change Owner**
The accountable individual (typically a manager or team lead) responsible for ensuring a specific change is managed correctly end-to-end, from RFC submission through PIR completion.

**Change Implementer**
The technical individual or team responsible for executing the change in accordance with the approved implementation plan and rollback plan.

**Application Owner**
Accountable for the business functionality of the affected application or system. Provides input on business impact and participates in UAT and PIR as required.

**Information Security Team**
Conducts SIAs, validates security controls pre- and post-change, supports emergency change security assessment, and integrates change management audit logs into SIEM monitoring.

**Risk and Compliance**
Provides oversight of policy compliance, maintains the exception register, supports regulatory reporting, and escalates systemic compliance failures to the Board Risk Committee.

---

## 13. Compliance Monitoring and Exceptions

### 13.1 Compliance Monitoring

The Change Manager, supported by the Information Security team, shall monitor compliance with this policy through:

- Weekly review of open RFCs for process adherence
- Monthly audit of a random sample of implemented changes (minimum [10]% or [X] records, whichever is greater)
- Quarterly review of the Emergency Change Register for classification abuse
- Annual comprehensive policy compliance audit reported to the IT Director

Key compliance metrics to be tracked:

| Metric | Target |
|---|---|
| RFCs with complete documentation at submission | ≥ [95]% |
| Changes implemented without CAB authorization | 0 |
| Emergency changes as a percentage of total changes | ≤ [5]% |
| PIRs completed within required timeframe | ≥ [90]% |
| CMDB updates completed within required timeframe | ≥ [95]% |
| Unauthorized changes (changes without RFC) | 0 |

### 13.2 Policy Exceptions

Exceptions to this policy must be approved in writing by the IT Director, with the CISO concurrence. All exceptions must be:

- Documented with a clear business or technical justification
- Time-limited (not open-ended)
- Subject to compensating controls
- Recorded in the Policy Exception Register maintained by Risk and Compliance
- Reviewed at each CAB quarterly review session

---

## 14. Policy Violations

*Clear consequences for non-compliance are essential for deterrence and demonstrate to regulators that [Organization Name] enforces its policies.*

### 14.1 Examples of Policy Violations

The following constitute violations of this Change Management Policy:

- Implementing a change to an NCII system without an approved RFC
- Misclassifying a change to bypass required controls or approvals
- Implementing changes during a declared change freeze without ECAB authorization
- Failing to conduct or document a mandatory SIA
- Bypassing CAB authorization without appropriate authority
- Failing to update the CMDB within the required timeframe
- Repeatedly invoking emergency change procedures without legitimate justification
- Destroying, altering, or failing to retain change records within the required retention period

### 14.2 Consequences

Policy violations will be managed in accordance with [Organization Name]'s **[Human Resources Disciplinary Policy / Code of Conduct]** and, where applicable, applicable Malaysian law. Consequences may include:

- Formal written warning
- Suspension of system access rights
- Termination of employment or contract
- Regulatory reporting to NACSA where the violation constitutes a notifiable breach under Act 854
- Civil or criminal liability where violations cause material harm to NCII systems

Third-party violations will be escalated to the relevant vendor or service provider and may result in contract termination.

---

## 15. Review and Approval

### 15.1 Policy Review Schedule

This policy shall be reviewed at minimum **annually** or upon any of the following triggers:

- Amendment to the Cyber Security Act 2024 or issuance of new NACSA guidelines
- Significant change to [Organization Name]'s NCII environment
- Material security incident linked to a change management failure
- Regulatory direction or audit finding requiring policy update
- Organizational restructuring affecting roles defined in this policy

### 15.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial release |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 15.3 Approval and Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Change Manager Name] | __________________ | [DD/MM/YYYY] |
| Reviewed By (Security) | [CISO Name] | __________________ | [DD/MM/YYYY] |
| Reviewed By (Risk) | [Risk Manager Name] | __________________ | [DD/MM/YYYY] |
| Approved By | [IT Director Name] | __________________ | [DD/MM/YYYY] |
| Endorsed By | [CTO / CEO Name] | __________________ | [DD/MM/YYYY] |

---

## 16. References

*This section lists all regulatory instruments, standards, and internal documents referenced in or directly relevant to this policy.*

### 16.1 Regulatory References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), Section 18 | Duties of NCII entities to implement and maintain cyber security measures |
| Cyber Security Act 2024 (Act 854), Section 24 | Compliance obligations, record-keeping, and regulatory reporting requirements |
| NACSA Cyber Security Directives and Guidelines for NCII | Supplementary guidance issued by NACSA to NCII entities (reference latest gazette version) |
| Personal Data Protection Act 2010 (Act 709) | Obligations relating to personal data processed within NCII systems |
| Bank Negara Malaysia Risk in Technology (RiT) Policy (if applicable) | Technology risk management obligations for licensed financial institutions |
| Malaysian Communications and Multimedia Act 1998 (Act 588) | As applicable to communications infrastructure |

### 16.2 Internal Policy References

| Document | Purpose |
|---|---|
| [Information Security Policy] | Parent security policy framework |
| [Incident Response Policy] | Procedures triggered by security incidents leading to emergency changes |
| [Business Continuity and Disaster Recovery Policy] | Interaction between change management and BCP/DR testing |
| [Vendor and Third-Party Management Policy] | Controls applicable to third-party change implementers |
| [Records Retention Policy] | Retention periods applicable to change management records |
| [NCII Asset Register] | Definitive list of NCII systems in scope of this policy |
| [Configuration Management Policy] | Baseline configuration standards referenced in change assessments |
| [Human Resources Disciplinary Policy] | Consequences framework for policy violations |

### 16.3 Standards and Frameworks

| Standard / Framework | Relevant Controls |
|---|---|
| ISO/IEC 27001:2022 — Annex A | A.8.32 Change management |
| ISO/IEC 20000-1:2018 | Change and release management |
| NIST SP 800-53 Rev. 5 | CM-3 Configuration Change Control; CM-4 Impact Analyses; CM-5 Access Restrictions for Change |
| ITIL 4 — Change Enablement | Change types, CAB governance, and change lifecycle |
| CIS Controls v8 | Control 4: Secure Configuration of Enterprise Assets; Control 7: Continuous Vulnerability Management |

---

## 17. Appendices

### Appendix A — Request for Change (RFC) Template

*This appendix should contain the standardized RFC form to be used within [Organization Name]'s ITSM platform. Alternatively, reference the ITSM template directly.*

**[Attach or embed the RFC form template here. The form should include all mandatory fields listed in Section 7.1 of this policy. Where an ITSM platform is in use, reference the relevant ITSM form ID or workflow URL.]**

---

### Appendix B — Security Impact Assessment (SIA) Template

*This appendix provides the standardized SIA form to be completed by the Information Security team for all Normal and Emergency changes.*

**[Attach or embed the SIA template here. The template should include all assessment areas defined in Section 8.2, risk rating methodology, recommended controls, residual risk acceptance, and sign-off fields.]**

---

### Appendix C — Rollback Plan Template

*A standardized rollback plan template ensures consistent, actionable rollback procedures for all changes.*

**Section C1 — Change Reference**

| Field | Value |
|---|---|
| RFC Reference Number | [RFC-XXXXX] |
| Change Title | [Change Title] |
| Affected Systems / CIs | [CI Reference(s)] |
| Change Owner | [Name] |

**Section C2 — Rollback Steps**

| Step | Action | Responsible Party | Estimated Duration | Verification Step |
|---|---|---|---|---|
| 1 | [Step description] | [Role / Name] | [X] minutes | [Verification action] |
| 2 | [Step description] | [Role / Name] | [X] minutes | [Verification action] |
| 3 | [Step description] | [Role / Name] | [X] minutes | [Verification action] |

**Section C3 — Rollback Decision Authority**

Rollback shall be initiated upon decision by: [Named role / individual]

**Section C4 — Rollback Communication**

Stakeholders to be notified upon rollback initiation: [List stakeholders and communication method]

---

### Appendix D — Standard Change Register

*The Standard Change Register lists all pre-authorized standard change templates. This register must be reviewed and re-approved by the CAB annually.*

| Standard Change ID | Description | Affected System(s) | Risk Rating | Implementation Procedure Reference | Approved By | Approval Date | Next Review Date |
|---|---|---|---|---|---|---|---|
| SC-001 | [Standard change description] | [System(s)] | Low | [Procedure reference] | [CAB Chair] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| SC-002 | [Standard change description] | [System(s)] | Low | [Procedure reference] | [CAB Chair] | [DD/MM/YYYY] | [DD/MM/YYYY] |

---

### Appendix E — Emergency Change Register Template

*Reference Section 11.3 for the Emergency Change Register field definitions. A sample register structure is provided below.*

| Emergency RFC Ref | Declaration Date/Time | Declared By | Affected Systems | Trigger / Justification | ECAB Authorizers | Implementation Date/Time | Outcome | Rollback Invoked | NACSA Notification | PIR Required | CAB Review Date |
|---|---|---|---|---|---|---|---|---|---|---|---|
| EC-001 | [DD/MM/YYYY HH:MM] | [Name / Role] | [CI refs] | [Description] | [Names] | [DD/MM/YYYY HH:MM] | [Successful] | [No] | [No] | [Yes] | [DD/MM/YYYY] |

---

### Appendix F — Change Management Process Flowchart

*This appendix should contain a visual process flowchart illustrating the end-to-end change management lifecycle, from RFC submission through PIR completion, including decision points for change classification, CAB authorization, and emergency procedures.*

**[Attach process flowchart diagram here. Recommended format: Visio, draw.io, or embedded image. The flowchart should illustrate Standard, Normal, and Emergency change paths as separate swim lanes, clearly showing CAB decision points and rollback branches.]**

---

### Appendix G — Change Freeze Calendar Template

*This appendix provides a template for the annual Change Freeze Calendar, to be populated and published by the Change Manager at the start of each calendar year.*

| Period | From | To | Freeze Type | Authorized Emergency Changes | Approved By |
|---|---|---|---|---|---|
| Year-End Processing | [DD/MM/YYYY] | [DD/MM/YYYY] | Full Freeze | ECAB authorization required | IT Director |
| Month-End Processing | [DD of each month] | [DD of each month] | Partial Freeze | ECAB authorization required | Change Manager |
| [BNM Submission Period] | [DD/MM/YYYY] | [DD/MM/YYYY] | Full Freeze | ECAB authorization required | IT Director |
| [Public Holiday Period] | [DD/MM/YYYY] | [DD/MM/YYYY] | Partial Freeze | ECAB authorization required | Change Manager |

---

### Appendix H — CAB Meeting Agenda Template

*Standard agenda structure for CAB meetings to ensure consistent governance.*

**Meeting:** Change Advisory Board — [Meeting Date]
**Chair:** [IT Director / Change Manager]
**Attendees:** [List]

1. Review and approval of previous CAB minutes
2. RFC queue review — changes pending authorization
3. Post-Implementation Reviews — changes awaiting PIR sign-off
4. Emergency Change Register review (since last CAB)
5. Standard Change Register updates
6. Compliance metrics review
7. Policy exception review
8. Any other business
9. Date of next CAB meeting

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | Change Management Policy | Version 1.0**
**IT Director | Cyber Security Act 2024 (Act 854) — NACSA Compliance**