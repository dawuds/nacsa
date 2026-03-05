# Change Management Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Change Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 12 months from Last Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Department** | [Department Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of the Cyber Security Act 2024 (Act 854) and applicable data protection obligations.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Change Classification Framework](#4-change-classification-framework)
5. [Change Request Submission](#5-change-request-submission)
6. [Security Impact Assessment](#6-security-impact-assessment)
7. [Change Advisory Board (CAB) Review and Approval](#7-change-advisory-board-cab-review-and-approval)
8. [Testing and Validation](#8-testing-and-validation)
9. [Implementation and Verification](#9-implementation-and-verification)
10. [Emergency Change Fast-Track](#10-emergency-change-fast-track)
11. [Post-Implementation Review](#11-post-implementation-review)
12. [Change Records and Audit Trail](#12-change-records-and-audit-trail)
13. [Roles and Responsibilities](#13-roles-and-responsibilities)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary intent of this procedure — why it exists and what governance problem it solves within the context of NCII system management.*

This procedure establishes a structured, auditable process for requesting, assessing, approving, and implementing changes to National Critical Information Infrastructure (NCII) systems operated by [Organization Name]. It ensures that all changes are evaluated for cybersecurity risk, undergo appropriate authorisation, and are implemented in a controlled manner that preserves system integrity, availability, and confidentiality.

This procedure is issued in compliance with **Section 18 of the Cyber Security Act 2024 (Act 854)**, which requires NCII Sector Leads and NCII Entities to maintain adequate cybersecurity practices, including the governance of changes to critical systems. It supports [Organization Name]'s obligations to the **National Cyber Security Agency (NACSA)** and aligns with the cybersecurity framework applicable to the **[NCII Sector — e.g., Financial Services / Energy / Transportation]** sector.

### 1.2 Scope

*Define which systems, environments, teams, and change types are in scope. Be explicit about exclusions where applicable.*

This procedure applies to:

- All **NCII systems** owned, operated, or managed by [Organization Name], as declared under Section 8 of the Cyber Security Act 2024 (Act 854)
- All **IT infrastructure, applications, platforms, and services** that support, interconnect with, or have a dependency on designated NCII systems
- All **personnel** — including employees, contractors, vendors, and third-party service providers — who initiate or implement changes to in-scope systems
- All **change types** including standard, normal, and emergency changes as defined in Section 4 of this procedure
- All **environments** including production, staging, disaster recovery (DR), and pre-production environments where changes may affect production NCII systems

**Out of Scope:**

| Exclusion | Rationale |
|---|---|
| Changes to non-NCII business applications with no dependency on NCII systems | Low regulatory risk; governed by [Reference Internal IT Policy] |
| Minor content updates to internal intranet/wiki pages | No system configuration impact |
| Read-only access provisioning reviews | Governed by Access Control Procedure [Document ID] |

### 1.3 Objectives

- Minimise the risk of service disruption, security incidents, or compliance breaches arising from uncontrolled changes
- Ensure all changes to NCII systems receive appropriate security impact assessment prior to implementation
- Maintain a complete and auditable record of all changes to support NACSA compliance reviews and internal audits
- Provide an expedited but controlled pathway for emergency changes that require immediate action
- Align change management practices with [Organization Name]'s broader Information Security Management System (ISMS) and business continuity obligations

---

## 2. Definitions and Abbreviations

*Provide clear, unambiguous definitions for all key terms used in this document. Definitions should align with Act 854 and recognised frameworks (e.g., ITIL, ISO/IEC 20000).*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Change** | Any addition, modification, or removal of an approved, supported, or baselined configuration item, system component, service, or related documentation |
| **Change Request (CR)** | A formal proposal to make a change, submitted through the designated change management system or form |
| **Change Advisory Board (CAB)** | A cross-functional body responsible for reviewing, assessing, and authorising changes to NCII systems |
| **Emergency Change** | A change that must be implemented immediately to resolve a critical incident, security vulnerability, or regulatory directive, and cannot follow the standard approval timeline |
| **Standard Change** | A pre-approved, low-risk, routine change that follows a documented procedure and requires no additional CAB review |
| **Normal Change** | Any change that is not classified as standard or emergency and must follow the full change management lifecycle |
| **NCII System** | A system or network that is declared as National Critical Information Infrastructure under Section 8 of the Cyber Security Act 2024 (Act 854) |
| **NCII Entity** | An organisation that owns, operates, or maintains an NCII system, as declared by the relevant NCII Sector Lead |
| **Security Impact Assessment (SIA)** | A structured evaluation of the cybersecurity risks and implications associated with a proposed change |
| **Rollback Plan** | A documented, tested procedure for reverting a change to its prior state if the implementation fails or causes unacceptable impact |
| **Change Freeze** | A period during which no changes (except emergency changes) may be implemented, typically enforced during critical business periods |
| **Configuration Item (CI)** | Any component within the IT infrastructure that is managed and controlled as part of change and configuration management |
| **Post-Implementation Review (PIR)** | A structured review conducted after a change is implemented to confirm success, identify issues, and capture lessons learned |

### 2.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| Act 854 | Cyber Security Act 2024 |
| BNM | Bank Negara Malaysia |
| CAB | Change Advisory Board |
| CISO | Chief Information Security Officer |
| CR | Change Request |
| ECAB | Emergency Change Advisory Board |
| ISMS | Information Security Management System |
| ITIL | Information Technology Infrastructure Library |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PIR | Post-Implementation Review |
| RFC | Request for Change |
| SIA | Security Impact Assessment |

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Basis

*Describe the legislative and regulatory obligations that necessitate this procedure. Reference specific sections of Act 854 and any applicable NACSA directives or guidelines.*

This procedure is established in response to the following regulatory requirements:

| Regulation / Directive | Relevant Provision | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | **Section 18** | NCII Entities shall implement and maintain cybersecurity practices for the protection of NCII systems, including controls governing changes to such systems |
| Cyber Security Act 2024 (Act 854) | Section 25 | Obligations to maintain and provide access to records relevant to cybersecurity compliance upon request by NACSA |
| [NACSA NCII Cybersecurity Framework / Sector-specific Guidelines] | [Reference Applicable Guideline Version] | Change management controls as specified in the applicable NCII Sector cybersecurity framework |
| [Bank Negara Malaysia / Sector Regulator — if applicable] | [Reference Applicable Policy/Circular] | [Describe any additional sector-specific change management requirements] |

### 3.2 Internal Policy Alignment

This procedure is a subordinate document to and must be read in conjunction with:

- **[Organization Name] Information Security Policy** — [Document ID]
- **[Organization Name] NCII Cybersecurity Programme** — [Document ID]
- **[Organization Name] Incident Management Procedure** — [Document ID]
- **[Organization Name] Configuration Management Procedure** — [Document ID]
- **[Organization Name] Risk Management Policy** — [Document ID]
- **[Organization Name] Business Continuity Plan** — [Document ID]

In the event of a conflict between this procedure and any internal policy or external regulation, the more stringent requirement shall prevail. Any conflicts identified shall be escalated to the CISO for resolution.

---

## 4. Change Classification Framework

*Define the categories of changes recognised by this procedure. Clear classification is essential to ensure the correct approval pathway is followed for each change type.*

### 4.1 Change Categories

All changes to NCII systems shall be classified into one of the following categories prior to submission:

| Category | Description | Risk Profile | Approval Authority | Lead Time |
|---|---|---|---|---|
| **Standard Change** | Pre-approved, routine, low-risk change following a documented template (e.g., scheduled patching, password resets) | Low | Change Manager | As per schedule |
| **Normal Change — Minor** | Non-routine change with limited scope and low security impact | Low–Medium | CAB (quorum) | Minimum 5 business days |
| **Normal Change — Major** | Significant change with substantial scope, architectural impact, or elevated security risk | Medium–High | CAB (full) + CISO | Minimum 10 business days |
| **Emergency Change** | Urgent change required to resolve a critical incident or vulnerability; cannot await standard CAB cycle | High | ECAB (expedited) | Immediate; post-implementation ratification within 48 hours |

### 4.2 Classification Criteria

The Change Manager shall classify each Change Request based on the following criteria:

| Criterion | Standard | Normal — Minor | Normal — Major | Emergency |
|---|---|---|---|---|
| **System Availability Risk** | Negligible | Low | Medium–High | Critical (existing incident) |
| **Security Impact** | None | Limited | Significant | Imminent threat or active exploit |
| **Change Scope** | Single CI, routine | Limited scope | Multi-system or architectural | Any scope, time-critical |
| **Rollback Complexity** | Simple, tested | Straightforward | Complex | May be limited |
| **Business Impact** | None | Minimal | Moderate–High | Existing or imminent disruption |
| **Regulatory Trigger** | No | No | Possible | Yes (e.g., NACSA directive) |

### 4.3 Standard Change Catalogue

*Maintain a pre-approved list of standard changes that do not require individual CAB review. Review the catalogue at least annually or when the risk profile of any entry changes.*

The following standard changes are pre-approved for [Organization Name]'s NCII systems:

| Standard Change ID | Description | Owner | Implementation Guide |
|---|---|---|---|
| SC-001 | Monthly operating system security patching (Tier 2 and below systems) | [System Administrator] | [Reference Runbook ID] |
| SC-002 | Antivirus / EDR definition updates | [Security Operations] | [Reference Runbook ID] |
| SC-003 | Scheduled certificate renewal (non-NCII critical services) | [PKI Administrator] | [Reference Runbook ID] |
| SC-004 | [Additional Standard Change] | [Owner] | [Reference Runbook ID] |

---

## 5. Change Request Submission

*Detail the end-to-end process for initiating a formal Change Request. This section must be sufficiently prescriptive to ensure consistent, complete submissions that support downstream assessment and approval activities.*

### 5.1 Submission Process Overview

```
Initiator Identifies Need for Change
         │
         ▼
Complete Change Request Form (CR Form)
         │
         ▼
Submit CR via [Change Management System / Service Desk Portal]
         │
         ▼
Change Manager — Initial Triage and Classification
         │
         ├── Standard Change → Implement per catalogue
         ├── Normal Change → Proceed to SIA (Section 6)
         └── Emergency Change → Fast-Track (Section 10)
```

### 5.2 Who May Submit a Change Request

Any of the following personnel may initiate a Change Request for an NCII system:

- System Owners and Application Owners
- IT Operations and Infrastructure personnel
- Security Operations personnel
- Project Managers (for project-driven changes)
- Third-party vendors and managed service providers (via authorised liaison)

All Change Requests must be submitted by an individual with sufficient technical knowledge of the proposed change and its potential impact. Anonymous or delegated submissions without an identified technical owner are not permitted.

### 5.3 Change Request Form — Mandatory Fields

*All fields below are mandatory for Normal and Emergency Change Requests. Standard Changes require only fields marked (S).*

| Field | Description | Example / Guidance |
|---|---|---|
| **CR Reference Number** | Auto-generated by the change management system | CR-2025-0001 |
| **CR Title** (S) | Brief descriptive title of the change | "Upgrade Firewall Firmware — Core DMZ" |
| **Requestor Name** (S) | Full name of the individual submitting the CR | [Full Name] |
| **Requestor Department** (S) | Department responsible for the change | [Department] |
| **System Owner** | Name of the system owner for the affected NCII system | [System Owner Name] |
| **NCII System(s) Affected** | List all NCII systems that will be directly or indirectly affected | [System Name, System ID] |
| **Change Category** | Standard / Normal–Minor / Normal–Major / Emergency | [Selected Category] |
| **Change Description** | Detailed description of the proposed change, including what is being changed and why | [Detailed Technical Description] |
| **Business Justification** | Business or operational rationale for the change | [Justification] |
| **Regulatory / Compliance Driver** | Reference to any regulatory requirement driving this change | [e.g., Act 854 s18, NACSA Advisory NA-2025-001] |
| **Proposed Implementation Date** | Target date and time window for implementation | [DD/MM/YYYY HH:MM — HH:MM] |
| **Implementation Duration** | Estimated time to complete the change | [e.g., 2 hours] |
| **Change Window** | Preferred maintenance window (must align with approved windows in Appendix A) | [Window Reference] |
| **Technical Implementation Plan** | Step-by-step implementation instructions | [Attach or Describe] |
| **Rollback Plan** | Step-by-step procedure to revert the change if unsuccessful | [Attach or Describe] |
| **Testing Plan** | Tests to be performed to validate successful implementation | [Attach or Describe] |
| **Dependencies** | Other changes, systems, or parties that this change depends on | [List Dependencies] |
| **Impact Assessment (Initial)** | Requestor's preliminary assessment of business and technical impact | [High / Medium / Low with description] |
| **Security Considerations** | Requestor's initial identification of security-relevant aspects of the change | [Description] |
| **Supporting Documentation** | Reference to architecture diagrams, vendor advisories, test results, etc. | [Attach or Reference] |

### 5.4 Submission Deadlines

| Change Category | Minimum Lead Time Before Implementation |
|---|---|
| Standard Change | As per Standard Change Catalogue schedule |
| Normal Change — Minor | 5 business days |
| Normal Change — Major | 10 business days |
| Emergency Change | No minimum — submit simultaneously with or immediately after initiation |

*Note: Lead times reflect the minimum required for assessment and approval. Requestors should allow additional time for complex changes requiring vendor input or extended testing.*

### 5.5 Change Request Triage

Upon receipt of a Change Request, the Change Manager shall:

1. Acknowledge receipt within **1 business day**
2. Verify completeness of all mandatory fields; return incomplete CRs to the requestor within **1 business day** with specific guidance on deficiencies
3. Assign a unique CR reference number if not auto-generated
4. Classify the change in accordance with Section 4
5. Assign the CR to the appropriate Security Risk Analyst for Security Impact Assessment (Section 6)
6. Update the Change Management Register (Appendix B)
7. Notify the CAB Chairperson and relevant stakeholders of the pending change

---

## 6. Security Impact Assessment

*The Security Impact Assessment is a critical control under Act 854 s18. This section must describe a rigorous, evidence-based process for evaluating the cybersecurity implications of proposed changes to NCII systems.*

### 6.1 Purpose of the Security Impact Assessment

The Security Impact Assessment (SIA) ensures that all cybersecurity risks associated with a proposed change are identified, evaluated, and addressed before the change is authorised for implementation. The SIA is mandatory for all Normal and Emergency changes to NCII systems.

### 6.2 SIA Process

The assigned Security Risk Analyst shall complete the SIA within the following timeframes:

| Change Category | SIA Completion Target |
|---|---|
| Normal Change — Minor | Within 3 business days of CR submission |
| Normal Change — Major | Within 5 business days of CR submission |
| Emergency Change | Within 2 hours of CR submission (concurrent with ECAB convening) |

### 6.3 Security Impact Assessment — Evaluation Dimensions

The SIA shall evaluate the proposed change across the following dimensions:

#### 6.3.1 Confidentiality Impact

| Assessment Area | Questions to Address |
|---|---|
| Data exposure risk | Does the change involve handling, transmitting, or processing sensitive or classified data? |
| Access control changes | Does the change alter who can access data or systems? |
| Encryption requirements | Are data-in-transit and data-at-rest protections maintained or improved? |
| Third-party data sharing | Does the change introduce or modify data flows to external parties? |

**Confidentiality Rating:** ☐ None ☐ Low ☐ Medium ☐ High ☐ Critical

#### 6.3.2 Integrity Impact

| Assessment Area | Questions to Address |
|---|---|
| Data integrity | Could the change corrupt, alter, or invalidate critical data? |
| System integrity | Does the change modify core system components, configurations, or cryptographic controls? |
| Audit trail integrity | Does the change affect logging, monitoring, or audit trail completeness? |
| Software supply chain | Does the change introduce new software components, libraries, or dependencies? |

**Integrity Rating:** ☐ None ☐ Low ☐ Medium ☐ High ☐ Critical

#### 6.3.3 Availability Impact

| Assessment Area | Questions to Address |
|---|---|
| Downtime requirement | Does the change require planned downtime of NCII systems? |
| Resilience impact | Does the change affect redundancy, failover, or disaster recovery capability? |
| Performance impact | Could the change degrade system performance or capacity? |
| Dependency risk | Are there dependencies that could cause unplanned outages? |

**Availability Rating:** ☐ None ☐ Low ☐ Medium ☐ High ☐ Critical

#### 6.3.4 Threat and Vulnerability Assessment

| Assessment Area | Questions to Address |
|---|---|
| Attack surface change | Does the change expand the attack surface (e.g., new ports, protocols, interfaces)? |
| Known vulnerabilities | Does the change introduce components with known vulnerabilities? |
| Threat landscape alignment | Is this change consistent with current threat intelligence for the NCII sector? |
| Patch/hardening compliance | Does the change maintain or improve compliance with hardening standards? |

**Threat Rating:** ☐ None ☐ Low ☐ Medium ☐ High ☐ Critical

#### 6.3.5 Regulatory and Compliance Impact

| Assessment Area | Questions to Address |
|---|---|
| Act 854 obligations | Does the change affect the organisation's ability to meet Act 854 s18 requirements? |
| Incident reporting | Does the change alter incident detection or reporting capabilities? |
| Audit and logging | Does the change maintain or enhance audit trail requirements? |
| NACSA notification | Does the change require prior notification to NACSA under applicable guidelines? |

**Compliance Rating:** ☐ None ☐ Low ☐ Medium ☐ High ☐ Critical

### 6.4 Overall SIA Risk Rating

| Rating | Criteria | Required Action |
|---|---|---|
| **Low** | All dimensions rated None or Low | CAB review with standard quorum |
| **Medium** | Any dimension rated Medium | CAB review with CISO attendance; additional controls may be required |
| **High** | Any dimension rated High | Full CAB review; CISO sign-off mandatory; enhanced testing required |
| **Critical** | Any dimension rated Critical | Full CAB; CISO + CEO sign-off; NACSA notification may be required; independent review recommended |

### 6.5 SIA Output and Documentation

The completed SIA shall include:

- Summary of risks identified across all dimensions
- Overall risk rating with justification
- Recommended security controls or conditions to be applied before, during, or after the change
- Statement on residual risk after controls are applied
- SIA author name, qualifications, and date
- Reference to supporting evidence (vulnerability scans, threat intelligence, vendor advisories)

*The completed SIA form (Appendix C) must be attached to the Change Request record and retained for a minimum of [7] years in accordance with [Organization Name]'s records retention policy.*

---

## 7. Change Advisory Board (CAB) Review and Approval

*The CAB is the primary governance body for change authorisation. This section defines CAB structure, meeting procedures, decision criteria, and approval authorities.*

### 7.1 CAB Composition

| Role | Title | Membership Type | Voting Rights |
|---|---|---|---|
| CAB Chairperson | Change Manager | Permanent | Yes |
| CISO (or delegate) | Chief Information Security Officer | Permanent | Yes |
| IT Operations Lead | [Title] | Permanent | Yes |
| System Owner(s) | Relevant System Owner(s) for the change in scope | Change-dependent | Yes |
| Business Representative | [Business Unit Head or delegate] | Permanent | Yes |
| Security Risk Analyst | Author of the SIA for the change under review | Change-dependent | Advisory |
| Compliance Officer | [Title] | Permanent | Advisory |
| Vendor / Third Party | [As applicable] | Change-dependent | No |
| ECAB — Emergency Only | Minimum: Change Manager + CISO + one System Owner | Emergency | Yes |

### 7.2 CAB Meeting Schedule

| Change Category | Meeting Frequency | Notice Period |
|---|---|---|
| Normal Changes | Weekly (or as required) | Minimum 2 business days notice to CAB members |
| Major Changes | Fortnightly (dedicated session as required) | Minimum 5 business days notice |
| Emergency Changes | Convened on demand (within 2 hours) | As soon as possible via [Communication Channel] |

*CAB meetings may be conducted in person, via video conference, or via asynchronous approval for pre-screened Minor changes, at the discretion of the CAB Chairperson.*

### 7.3 Quorum Requirements

| Change Category | Minimum Quorum |
|---|---|
| Normal Change — Minor | CAB Chairperson + 2 voting members including CISO or delegate |
| Normal Change — Major | CAB Chairperson + CISO + all Permanent voting members |
| Emergency Change | CAB Chairperson + CISO (or delegate) + System Owner |

*No change may be approved without the required quorum. If quorum cannot be achieved within the required timeframe, the CAB Chairperson shall escalate to the CISO to determine whether the change should be deferred, reclassified, or approved under emergency authority.*

### 7.4 CAB Review Agenda

At each CAB meeting, the following shall be addressed for each Change Request on the agenda:

1. **Presentor Summary** — Requestor or Change Manager presents the change, its business rationale, and key technical details (5 minutes)
2. **SIA Findings** — Security Risk Analyst presents key findings, risk rating, and recommended controls (5 minutes)
3. **CAB Questions and Discussion** — Open discussion of risks, impacts, and alternatives
4. **Condition Setting** — CAB agrees on any conditions of approval (e.g., mandatory backups, specific testing requirements, monitoring requirements)
5. **Decision** — CAB votes and records the decision

### 7.5 CAB Decision Framework

The CAB shall make one of the following decisions for each CR reviewed:

| Decision | Description | Next Step |
|---|---|---|
| **Approved** | Change is approved as submitted; all risks are acceptable | Proceed to Testing and Validation (Section 8) |
| **Approved with Conditions** | Change is approved subject to specified conditions being met before implementation | Requestor addresses conditions; Change Manager confirms compliance before implementation proceeds |
| **Deferred** | Additional information, testing, or assessment is required before a decision can be made | Requestor provides requested information; CR re-presented at next CAB session |
| **Rejected** | Change is not approved; risks are unacceptable or change does not meet policy requirements | Requestor may resubmit with significant modifications addressing CAB concerns |

### 7.6 Approval Decision Record

*All CAB decisions must be formally recorded. The following fields constitute the minimum approval record.*

| Field | Content |
|---|---|
| CR Reference Number | [CR-YYYY-NNNN] |
| CAB Meeting Date | [DD/MM/YYYY] |
| CAB Members Present | [List of Names and Roles] |
| Change Category | [Standard / Normal–Minor / Normal–Major / Emergency] |
| SIA Risk Rating | [Low / Medium / High / Critical] |
| CAB Decision | [Approved / Approved with Conditions / Deferred / Rejected] |
| Conditions of Approval | [List any conditions; "None" if unconditional] |
| Implementation Window Authorised | [DD/MM/YYYY HH:MM — HH:MM] |
| CAB Chairperson Sign-off | [Name and Signature] |
| CISO Sign-off (if required) | [Name and Signature] |

---

## 8. Testing and Validation

*Rigorous pre-implementation testing is essential to minimise the risk of change-related incidents in NCII systems. This section defines testing standards, environments, and acceptance criteria.*

### 8.1 Testing Principles

All Normal and Emergency changes to NCII systems shall be subject to formal testing and validation before implementation in the production environment. Testing shall be:

- Conducted in an environment that is **representative of the production NCII system** in terms of configuration and data sensitivity
- **Documented** with test cases, expected results, and actual results recorded
- **Signed off** by the System Owner or their designated technical representative before the change proceeds to the CAB or production implementation
- **Retained** as supporting evidence for the Change Request record

### 8.2 Test Environment Standards

| Test Environment | Required For | Notes |
|---|---|---|
| Development / Sandbox | All changes before UAT | Minimal regulatory constraint |
| Staging / Pre-Production | Normal–Major and Emergency changes | Must mirror production configuration as closely as practicable |
| Production (limited window) | Standard changes and Simple Normal–Minor changes | Only where staging environment is not available; requires enhanced monitoring |

### 8.3 Testing Requirements by Change Category

| Test Type | Standard | Normal–Minor | Normal–Major | Emergency |
|---|---|---|---|---|
| **Functional Testing** | Per catalogue | Required | Required | Required (compressed) |
| **Regression Testing** | Per catalogue | Required | Required | Required where feasible |
| **Security Testing** | Not required | Recommended | Required | Required post-implementation |
| **Performance Testing** | Not required | As required | Required | Post-implementation |
| **User Acceptance Testing (UAT)** | Not required | As required | Required | Post-implementation |
| **Rollback Testing** | Per catalogue | Required | Required | Required where feasible |
| **Penetration Testing** | Not required | Not required | As directed by CISO | As directed by CISO |

### 8.4 Test Plan Requirements

The Test Plan submitted with each CR shall include, at minimum:

- **Test Scope** — What is being tested and what is explicitly out of scope
- **Test Cases** — Individual test scenarios with:
  - Test Case ID
  - Description
  - Pre-conditions
  - Test Steps
  - Expected Result
  - Actual Result
  - Pass / Fail
- **Security Test Cases** — Specific tests validating that security controls remain effective post-change
- **Rollback Test** — Confirmation that the rollback procedure has been tested and is functional
- **Test Environment Configuration** — Description of the test environment and its representativeness of production
- **Test Execution Sign-off** — Name, role, and signature of the individual executing the tests

### 8.5 Test Acceptance Criteria

*A change may only proceed to the CAB approval or production implementation phase when all of the following acceptance criteria are met:*

- [ ] All mandatory test cases are executed and results recorded
- [ ] All test cases achieve a **Pass** result, OR all **Fail** results are documented with an approved remediation plan
- [ ] Security test cases demonstrate no introduction of new unacceptable vulnerabilities
- [ ] Rollback procedure has been tested and confirmed functional
- [ ] Test results have been reviewed and signed off by the System Owner
- [ ] No open **High** or **Critical** findings from security testing remain unmitigated at the time of implementation

---

## 9. Implementation and Verification

*This section governs the controlled execution of approved changes and the verification of successful implementation.*

### 9.1 Pre-Implementation Checklist

Before commencing implementation of any approved change, the Change Implementor shall confirm:

| Pre-Implementation Check | Confirmed By | Status |
|---|---|---|
| CAB approval (or ECAB for emergency) is current and documented | Change Manager | ☐ |
| Implementation window is active and authorised | Change Manager | ☐ |
| All conditions of approval have been satisfied | Change Manager | ☐ |
| Rollback plan is accessible and confirmed tested | Change Implementor | ☐ |
| System Owner and relevant stakeholders notified of imminent implementation | Change Manager | ☐ |
| Security Operations (SOC/SIEM) notified to monitor for anomalies | Security Operations | ☐ |
| Backups of affected systems and configurations are current and verified restorable | Change Implementor | ☐ |
| Change freeze status confirmed (not in active freeze period unless approved exception) | Change Manager | ☐ |
| Vendor or third-party support arranged (if required) | Change Manager / Vendor | ☐ |
| Implementation team are briefed and roles are assigned | Change Implementor | ☐ |

### 9.2 Implementation Procedure

#### 9.2.1 Communication

At the commencement of the implementation window, the Change Manager shall:

1. Send an implementation commencement notification to all stakeholders listed in the CR, including:
   - System Owner
   - Business representatives for affected services
   - Security Operations team
   - Service Desk (for user impact management)
2. Update the Change Management Register status to **"In Progress"**
3. Open a live implementation log in the change management system

#### 9.2.2 Step-by-Step Execution

The Change Implementor shall execute the change strictly in accordance with the approved Technical Implementation Plan. For each implementation step:

| Log Field | Description |
|---|---|
| Step Number | Sequential step reference |
| Timestamp | Exact time (HH:MM:SS) step was executed |
| Action Taken | Description of action performed |
| Outcome | Actual result of the action |
| Implementor | Name of the person performing the step |
| Status | ☐ Completed ☐ Skipped (with justification) ☐ Failed |

*Deviations from the approved implementation plan — including skipped steps or unexpected outcomes — must be immediately reported to the Change Manager and documented in the implementation log. If a deviation is significant, the Change Manager shall determine whether to pause implementation and convene an emergency CAB review.*

#### 9.2.3 Rollback Decision Point

The Change Implementor, in consultation with the Change Manager and System Owner, shall initiate rollback if:

- A critical implementation step fails and cannot be resolved within **[30] minutes**
- A security incident is detected during implementation
- System performance degrades below **[agreed threshold]**
- The implementation window is exhausted with the change incomplete
- The System Owner or CISO directs rollback

Rollback shall be executed strictly in accordance with the approved Rollback Plan. All rollback actions shall be logged in the same implementation log.

### 9.3 Post-Implementation Verification

Upon completion of the implementation (or rollback), the Change Implementor shall execute all verification tests defined in the approved Test Plan. The following verification activities are mandatory:

| Verification Activity | Responsible | Timing |
|---|---|---|
| Execute all post-implementation verification test cases | Change Implementor | Immediately after implementation |
| Confirm all affected NCII systems are operational and performing within normal parameters | System Owner | Within 1 hour of implementation completion |
| Confirm security controls (firewall rules, access controls, logging, monitoring) are functioning correctly | Security Operations | Within 1 hour of implementation completion |
| Review SIEM/security monitoring for any anomalies triggered during or immediately after implementation | Security Operations | Within 24 hours of implementation completion |
| Confirm backup integrity for any modified systems | Change Implementor | Within 24 hours of implementation completion |

### 9.4 Implementation Close-Out

Once verification is complete and the System Owner confirms the change is successful, the Change Manager shall:

1. Update the Change Management Register status to **"Implemented — Pending PIR"** or **"Rolled Back"** as applicable
2. Send an implementation completion notification to all stakeholders
3. Schedule the Post-Implementation Review (Section 11) within the required timeframe
4. Ensure all implementation records, logs, and test results are attached to the CR record

---

## 10. Emergency Change Fast-Track

*The Emergency Change process provides an expedited but controlled pathway for changes that must be implemented immediately to address critical cybersecurity threats, active incidents, or urgent regulatory directives affecting NCII systems.*

### 10.1 Emergency Change Criteria

A change may be classified as an Emergency Change only if it meets **one or more** of the following criteria:

- [ ] Active cybersecurity incident affecting or imminent to an NCII system that can only be remediated by the proposed change
- [ ] NACSA advisory, directive, or mandatory notification requiring immediate action to protect NCII systems
- [ ] Critical vulnerability (CVSS Score ≥ 9.0) actively exploited in the wild affecting an NCII system component, with no available compensating control
- [ ] Regulatory direction from NACSA, BNM, or another competent authority requiring immediate implementation
- [ ] Imminent risk of significant business disruption to NCII-dependent services where the change is the only practicable remediation

*The Change Manager and CISO must jointly confirm that the Emergency Change criteria are met before initiating the fast-track process. Misuse of the Emergency Change pathway to circumvent normal approval processes is a serious governance failure and will be treated as a policy breach.*

### 10.2 Emergency Change Process

```
Critical Incident / Threat Identified
         │
         ▼
Initiator Contacts Change Manager + CISO Immediately
         │
         ▼
Change Manager and CISO confirm Emergency criteria met
         │
         ▼
Emergency CAB (ECAB) convened within 2 hours
 [Change Manager + CISO + System Owner at minimum]
         │
         ▼
Compressed SIA conducted concurrently (≤ 2 hours)
         │
         ▼
ECAB Decision: Approved / Rejected
         │
         ├── Approved → Immediate Implementation with Enhanced Monitoring
         │
         └── Rejected → Incident Response / Alternative Remediation
                   │
                   ▼
         Post-Implementation: Formal CR submitted within 24 hours
                   │
                   ▼
         Next scheduled CAB — Ratification and lessons learned
```

### 10.3 Emergency Change Authorisation

| Scenario | Authorisation Required |
|---|---|
| Emergency change during business hours | Change Manager + CISO |
| Emergency change outside business hours | On-call CISO delegate + On-call Change Manager delegate |
| Emergency change to Tier 1 NCII systems | CISO + CEO (or delegate) |

*All emergency authorisations must be confirmed in writing (email or change management system) as soon as practicable, even if initially granted verbally.*

### 10.4 Emergency Change Documentation Requirements

Emergency Changes carry heightened documentation obligations due to the reduced pre-implementation oversight:

| Documentation Item | Deadline |
|---|---|
| Formal CR Form (may be completed post-implementation) | Within 24 hours of implementation commencement |
| ECAB Decision Record | Within 24 hours of ECAB meeting |
| Implementation Log (step-by-step) | Real-time during implementation; finalised within 24 hours |
| Security Impact Assessment (may be compressed) | Within 48 hours of implementation |
| Post-Implementation Verification Report | Within 48 hours of implementation |
| CAB Ratification | At next scheduled CAB meeting |
| Post-Implementation Review | Within 5 business days of implementation |

### 10.5 NACSA Notification Assessment

Following every Emergency Change to an NCII system, the Change Manager shall, in conjunction with the CISO and Compliance Officer, assess whether the incident or vulnerability that necessitated the emergency change requires notification to NACSA under Act 854 and applicable NCII sector guidelines. This assessment shall be documented and retained as part of the Emergency Change record.

---

## 11. Post-Implementation Review

### 11.1 Purpose and Timing

*The PIR closes the change management loop by validating that the change achieved its objectives, that no unintended consequences have emerged, and that lessons learned are captured for continuous improvement.*

| Change Category | PIR Timing |
|---|---|
| Standard Change | Not required (unless issues identified) |
| Normal Change — Minor | Within 10 business days of implementation |
| Normal Change — Major | Within 5 business days of implementation |
| Emergency Change | Within 5 business days of implementation |

### 11.2 PIR Agenda and Assessment Areas

The Post-Implementation Review shall assess:

| Assessment Area | Questions |
|---|---|
| **Objective Achievement** | Did the change achieve its stated business and technical objectives? |
| **Success Criteria** | Were all success criteria defined in the Test Plan met in production? |
| **Unintended Consequences** | Were any unexpected impacts on system performance, availability, or security observed? |
| **Security Effectiveness** | Are all security controls functioning as intended post-change? |
| **Incident Correlation** | Were any incidents, alerts, or anomalies observed in the period following implementation that may be related to the change? |
| **Documentation Quality** | Were the CR, SIA, implementation plan, and test plan of sufficient quality? |
| **Process Adherence** | Was the change management procedure followed? Were any deviations noted? |
| **Lessons Learned** | What improvements to process, planning, or implementation could be made? |

### 11.3 PIR Output

The PIR shall produce:

- A completed PIR Report (Appendix D) signed off by the Change Manager and System Owner
- Any identified corrective actions, with owners and due dates, entered into the [Issue / Risk Tracking System]
- Lessons learned recommendations submitted to the Change Manager for consideration in the next annual procedure review

---

## 12. Change Records and Audit Trail

### 12.1 Change Management Register

The Change Manager shall maintain a centralised Change Management Register containing a record of all Change Requests. The register shall include, at minimum:

| Field | Description |
|---|---|
| CR Reference Number | Unique identifier |
| CR Title | Brief description |
| Change Category | Standard / Normal–Minor / Normal–Major / Emergency |
| Requestor | Name and department |
| System(s) Affected | NCII System references |
| Submission Date | Date CR was formally submitted |
| SIA Risk Rating | Low / Medium / High / Critical |
| CAB Decision | Approved / Approved with Conditions / Deferred / Rejected |
| CAB Decision Date | Date of CAB or ECAB decision |
| Implementation Date | Actual date implemented (or "Rolled Back" / "Cancelled") |
| PIR Completed | Yes / No / Not Required |
| CR Status | Open / In Progress / Implemented / Rolled Back / Cancelled / Closed |

### 12.2 Record Retention

All change management records, including CR forms, SIAs, test plans, implementation logs, CAB decision records, and PIR reports, shall be retained for a minimum of **[7] years** from the date of closure of the Change Request, or as otherwise required by applicable law or NACSA directive, whichever is longer.

Records shall be stored in **[Organisation's designated document management system]** with appropriate access controls ensuring that only authorised personnel can modify records, while audit trail and read access is available to NACSA and internal audit upon request.

### 12.3 Reporting

| Report | Frequency | Audience |
|---|---|---|
| Change Management KPI Report | Monthly | CISO, IT Leadership |
| NCII Change Activity Summary | Quarterly | Board IT/Risk Committee |
| Change Management Compliance Report | Annual | NACSA (if required), Internal Audit |
| Emergency Change Report | Following each Emergency Change | CISO, Board Committee |

*Key Performance Indicators shall include, at minimum: total CRs submitted, CRs approved/rejected/deferred, Emergency Changes, rollback rate, PIR completion rate, and overdue PIRs.*

---

## 13. Roles and Responsibilities

*This RACI matrix defines accountability for each stage of the change management lifecycle. R = Responsible (does the work), A = Accountable (ultimately answerable), C = Consulted (provides input), I = Informed (kept updated).*

### 13.1 RACI Matrix

| Activity | Change Manager | CISO | System Owner | Change Implementor | CAB Members | Security Risk Analyst | Compliance Officer | Security Operations | NACSA |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Define and maintain this procedure | A/R | C | I | I | C | C | C | I | I |
| Submit Change Request | I | I | C | R | I | I | I | I | — |
| CR triage and classification | A/R | C | C | I | I | I | I | I | — |
| Conduct Security Impact Assessment | C | A | C | C | I | R | C | C | — |
| Convene CAB / ECAB | A/R | C | I | I | I | I | I | I | — |
| Review CR at CAB | A/R | C/R | C/R | I | C/R | C | C | I | — |
| Approve/Reject/Defer CR | A | A/R | C | I | R | I | C | I | — |
| Approve Emergency Change | A | A/R | C | I | R | I | I | I | — |
| Execute Test Plan | C | I | A | R | I | C | I | C | — |
| Sign off Test Results | C | I | A/R | R | I | C | I | I | — |
| Execute pre-implementation checklist | A/R | I | C | R | I | I | I | C | — |
| Implement approved change | C | I | A | R | I | I | I | C | — |
| Monitor implementation (security) | I | C | I | I | I | I | I | A/R | — |
| Initiate rollback decision | A/R | C | A | R | I | I | I | C | — |
| Post-implementation verification | C | I | A | R | I | C | I | C | — |
| Conduct Post-Implementation Review | A/R | C | C | C | I | C | C | C | — |
| Maintain Change Management Register | A/R | I | I | I | I | I | I | I | — |
| NACSA incident/change notification | C | A/R | C | I | I | I | C | C | I |
| Annual procedure review | A/R | C | I | I | C | C | C | I | — |

### 13.2 Role Descriptions

| Role | Individual / Position | Key Responsibilities |
|---|---|---|
| **Change Manager** | [Name / Position Title] | Overall governance of the change management process; CR triage; CAB administration; register maintenance; reporting |
| **CISO** | [Name / Position Title] | Security oversight of all NCII changes; SIA escalation decisions; Emergency Change authority; NACSA liaison |
| **System Owner** | [Multiple — per system] | Business and technical accountability for affected NCII systems; test sign-off; implementation oversight |
| **Change Implementor** | [Varies per CR] | Technical execution of the change in accordance with the approved implementation plan; implementation logging |
| **CAB Member** | [List all permanent members] | Review and authorise change requests; apply domain expertise to risk assessment |
| **Security Risk Analyst** | [Name / Position Title] | Conduct Security Impact Assessments; advise CAB on security risk profile of changes |
| **Compliance Officer** | [Name / Position Title] | Advise on regulatory implications; confirm alignment with Act 854 obligations |
| **Security Operations** | [Name / Position Title] | Monitor for security anomalies during and after implementation; respond to change-related security events |

---

## 14. Review and Approval

### 14.1 Procedure Review

This procedure shall be reviewed:

- **Annually**, at minimum, in accordance with the Review Frequency defined in the document header
- **Following any significant change** to the Cyber Security Act 2024, applicable NACSA guidelines, or relevant NCII sector regulations
- **Following any major change-related incident or near-miss** that reveals a gap or deficiency in this procedure
- **At the direction of the CISO** or the Board IT/Risk Committee at any time

All reviews shall be documented in the Version History table below.

### 14.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial release |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 14.3 Approval Sign-Off

*This document requires formal approval from the following authorised signatories prior to becoming effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Change Manager | [Full Name] | __________________ | [DD/MM/YYYY] |
| CISO | [Full Name] | __________________ | [DD/MM/YYYY] |
| Head of IT / CIO | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Risk Officer / Compliance Officer | [Full Name] | __________________ | [DD/MM/YYYY] |
| Chief Executive Officer | [Full Name] | __________________ | [DD/MM/YYYY] |

---

## 15. References

*This section lists all regulatory instruments, standards, and internal documents referenced in or relevant to this procedure.*

### 15.1 Legislation and Regulatory Instruments

| Reference | Title | Relevant Provisions |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | **s18** (Cybersecurity practices for NCII Entities), s8 (NCII Declaration), s25 (Record-keeping obligations) |
| [NACSA Reference] | NCII Cybersecurity Framework — [Sector Name] Sector | Change management controls (Section [X]) |
| [NACSA Reference] | NACSA Advisory / Directive [Reference Number] | [Describe applicability] |
| [BNM Reference] | [BNM Policy Document / Circular Title] | [Describe applicability if financial sector] |
| [Other Regulation] | [Title] | [Describe applicability] |

### 15.2 Standards and Frameworks

| Standard | Title | Applicability |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Clause 8.1 (Operational planning and control); Change management controls |
| ISO/IEC 20000-1:2018 | IT Service Management | Change management process requirements |
| NIST SP 800-128 | Guide for Security-Focused Configuration Management | Security-focused change management guidance |
| ITIL 4 | IT Infrastructure Library — Change Enablement Practice | Change classification, CAB, and lifecycle guidance |
| CIS Controls v8 | Center for Internet Security Controls | Control 4 (Secure Configuration), Control 7 (Continuous Vulnerability Management) |

### 15.3 Internal Documents

| Document ID | Title | Relationship |
|---|---|---|
| [Document ID] | Information Security Policy | Parent policy |
| [Document ID] | NCII Cybersecurity Programme | Parent programme |
| [Document ID] | Incident Management Procedure | Related procedure — triggered by change-related incidents |
| [Document ID] | Configuration Management Procedure | Related procedure — CMDB and CI management |
| [Document ID] | Risk Management Policy | Related — risk assessment methodology |
| [Document ID] | Business Continuity Plan | Related — availability and recovery considerations |
| [Document ID] | Vendor and Third-Party Management Policy | Related — third-party involvement in changes |
| [Document ID] | Access Control Procedure | Related — access changes |

---

## 16. Appendices

### Appendix A — Approved Change Windows

*Define the organisation's approved maintenance windows for NCII system changes. Changes may only be implemented outside these windows with explicit CAB exception approval.*

| Window ID | Day(s) | Time (Local) | Applicable Systems | Notes |
|---|---|---|---|---|
| MW-01 | Saturday | 22:00 — 04:00 Sunday | All NCII Systems | Standard change window |
| MW-02 | Sunday | 02:00 — 06:00 | Tier 1 NCII Systems | Tier 1 critical systems only |
| MW-03 | Weekdays | 20:00 — 23:00 | Non-Tier 1 NCII Systems | With CAB approval |
| MW-04 | Any | Any | Emergency changes only | Requires ECAB approval |

**Change Freeze Periods:**

| Freeze Period | Dates | Scope | Exception Process |
|---|---|---|---|
| Financial Year End | [Specify annual dates] | All Normal changes | CISO approval required |
| National Holidays | [Specify] | All changes | Emergency only |
| NACSA Assessment Period | [As notified by NACSA] | All NCII changes | NACSA coordination required |
| [Other] | [Specify] | [Scope] | [Process] |

---

### Appendix B — Change Management Register Template

*A digital register shall be maintained in [Change Management System]. The following columns represent the minimum required fields.*

| CR Ref | Title | Category | Requestor | NCII System(s) | Submitted | SIA Rating | CAB Decision | Decision Date | Impl. Date | Status | PIR Done |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CR-2025-0001 | [Example] | Normal–Minor | [Name] | [System] | [Date] | Low | Approved | [Date] | [Date] | Closed | Yes |

---

### Appendix C — Security Impact Assessment Form Template

**Change Request Reference:** [CR-YYYY-NNNN]
**Change Title:** [Title]
**Assessment Date:** [DD/MM/YYYY]
**Assessor Name and Role:** [Name, Role]

---

**Section 1 — Change Summary**

*[Brief description of the change being assessed]*

**Section 2 — Impact Ratings**

| Dimension | Rating | Justification |
|---|---|---|
| Confidentiality | [None / Low / Medium / High / Critical] | [Justification] |
| Integrity | [None / Low / Medium / High / Critical] | [Justification] |
| Availability | [None / Low / Medium / High / Critical] | [Justification] |
| Threat / Vulnerability | [None / Low / Medium / High / Critical] | [Justification] |
| Regulatory / Compliance | [None / Low / Medium / High / Critical] | [Justification] |

**Overall SIA Risk Rating:** [Low / Medium / High / Critical]

**Section 3 — Identified Risks**

| Risk ID | Risk Description | Likelihood | Impact | Risk Level | Recommended Control |
|---|---|---|---|---|---|
| R-001 | [Description] | [H/M/L] | [H/M/L] | [H/M/L] | [Control] |

**Section 4 — Recommended Security Controls / Conditions**

*[List specific controls or conditions that must be applied to bring residual risk to an acceptable level]*

**Section 5 — Residual Risk Assessment**

*[After application of recommended controls, describe the residual risk and confirm acceptability]*

**Assessor Sign-off:** __________________ Date: __________

**CISO Review (if required):** __________________ Date: __________

---

### Appendix D — Post-Implementation Review Report Template

**Change Request Reference:** [CR-YYYY-NNNN]
**Change Title:** [Title]
**Implementation Date:** [DD/MM/YYYY]
**PIR Date:** [DD/MM/YYYY]
**PIR Conducted By:** [Name, Role]
**Attendees:** [List names and roles]

---

| Assessment Area | Finding | Satisfactory (Y/N) |
|---|---|---|
| Objectives achieved | [Description] | [Y/N] |
| Success criteria met | [Description] | [Y/N] |
| Unintended consequences | [Description] | [Y/N] |
| Security controls effective | [Description] | [Y/N] |
| Incident correlation (none identified) | [Description] | [Y/N] |
| Documentation quality | [Description] | [Y/N] |
| Process adherence | [Description] | [Y/N] |

**Corrective Actions:**

| Action ID | Description | Owner | Due Date | Status |
|---|---|---|---|---|
| CA-001 | [Description] | [Owner] | [Date] | Open |

**Lessons Learned:**

*[Narrative summary of lessons learned and recommendations for process improvement]*

**PIR Outcome:** ☐ Successful ☐ Successful with Issues ☐ Rolled Back ☐ Partially Successful

**Change Manager Sign-off:** __________________ Date: __________

**System Owner Sign-off:** __________________ Date: __________

---

### Appendix E — Emergency Change Authorisation Record Template

**Incident / Trigger Reference:** [INC-YYYY-NNNN or Vulnerability Reference]
**Emergency CR Reference:** [CR-YYYY-NNNN]
**Date and Time of Initiation:** [DD/MM/YYYY HH:MM]
**Initiator:** [Name, Role]

---

| Field | Details |
|---|---|
| Emergency Criteria Met | [Select and describe applicable criterion from Section 10.1] |
| ECAB Members Consulted | [Names, roles, consultation method] |
| ECAB Decision | [Approved / Rejected] |
| Authorised By (Change Manager) | [Name, Signature] |
| Authorised By (CISO) | [Name, Signature] |
| Implementation Commenced | [DD/MM/YYYY HH:MM] |
| Implementation Completed | [DD/MM/YYYY HH:MM] |
| NACSA Notification Required | ☐ Yes — Notification Reference: [Ref] ☐ No — Justification: [Justification] |
| CAB Ratification Date | [Date of next CAB where emergency change was ratified] |

---

### Appendix F — Glossary of NCII Sector References

*[Insert organisation-specific references to NCII sector declarations, NACSA correspondence, and sector-specific guidance applicable to [Organization Name]'s NCII systems.]*

| Reference | Description | Date | Location |
|---|---|---|---|
| [NCII Declaration Reference] | NCII system declaration under Act 854 s8 | [Date] | [Location] |
| [NACSA Sector Framework] | NCII Cybersecurity Framework for [Sector] | [Date] | [Location] |
| [NACSA Advisory] | [Title of advisory] | [Date] | [Location] |

---

*End of Document*

---

*This document template is prepared for [Organization Name] in accordance with the Cyber Security Act 2024 (Act 854) and applicable NACSA requirements. All placeholders in [brackets] must be completed by the designated Document Owner prior to formal approval and release. This template does not constitute legal advice. [Organization Name] should seek independent legal and regulatory counsel to confirm alignment with current NACSA directives and sector-specific obligations.*