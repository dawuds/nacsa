# Access Provisioning and Deprovisioning Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Identity & Access Management |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual from Effective Date] |
| **Approved By** | [Approved By] |

---

> **Document Control Notice:** This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This procedure forms part of the organization's compliance obligations under the **Cyber Security Act 2024 (Act 854)**, as administered by the National Cyber Security Agency (NACSA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Access Request and Approval Workflow](#4-access-request-and-approval-workflow)
5. [Role-Based Access Assignment](#5-role-based-access-assignment)
6. [Privileged Account Provisioning](#6-privileged-account-provisioning)
7. [Joiner, Mover, and Leaver Process](#7-joiner-mover-and-leaver-process)
8. [Access Recertification Schedule](#8-access-recertification-schedule)
9. [Emergency Access Provisioning](#9-emergency-access-provisioning)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Non-Compliance and Exceptions](#11-non-compliance-and-exceptions)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the intent of this procedure and the compliance objective it fulfils. Reference the specific regulatory requirement that mandates this procedure.*

This procedure establishes the formal requirements and operational steps for granting, modifying, and revoking user and system access to National Critical Information Infrastructure (NCII) systems operated or maintained by [Organization Name]. It ensures that access rights are managed in a controlled, auditable, and least-privilege manner consistent with the organization's security posture and regulatory obligations.

This procedure supports compliance with **Section 18 of the Cyber Security Act 2024 (Act 854)**, which mandates that NCII sector leads and owners implement prescribed cybersecurity measures governing access to critical systems. It further aligns with the organization's overarching **Information Security Policy** and **Identity and Access Management Policy**.

### 1.2 Scope

*Define the boundaries of this procedure — which systems, personnel, and access types are covered. Be explicit about inclusions and exclusions.*

This procedure applies to:

- **Systems:** All NCII systems, applications, databases, network infrastructure, cloud environments, and operational technology (OT) assets owned, operated, or managed by [Organization Name] that fall within the NCII designation under Act 854.
- **Personnel:** All permanent employees, contract staff, third-party vendors, system administrators, and managed service providers who require access to in-scope systems.
- **Access Types:** Logical access including standard user accounts, privileged accounts, service accounts, API credentials, remote access accounts, and shared accounts.
- **Lifecycle Events:** New access provisioning (Joiners), access modification (Movers), access revocation (Leavers), and periodic access recertification.

**Exclusions:**

- Physical access controls (governed by the **Physical Security Policy**)
- Guest Wi-Fi and non-NCII systems [as defined in [Organization Name] NCII Asset Register — [Document ID]]

---

## 2. Definitions and Abbreviations

*List all technical terms and abbreviations used in this document to ensure consistent interpretation across departments and during audits.*

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — the primary legislative framework governing cybersecurity of NCII in Malaysia |
| **NCII** | National Critical Information Infrastructure — designated systems whose disruption would have a significant impact on national security, economy, or public welfare |
| **NACSA** | National Cyber Security Agency — the national lead agency administering Act 854 |
| **IAM** | Identity and Access Management — the function responsible for managing digital identities and access rights |
| **RBAC** | Role-Based Access Control — a method of restricting access based on roles assigned to users within an organization |
| **PAM** | Privileged Access Management — controls governing accounts with elevated or administrative privileges |
| **JML** | Joiner, Mover, Leaver — the three lifecycle events that trigger access provisioning or deprovisioning actions |
| **Least Privilege** | The principle that a user should be granted only the minimum access rights necessary to perform their job function |
| **Privileged Account** | An account with elevated permissions beyond standard user access, including system administrator, domain administrator, root, or service accounts |
| **SoD** | Segregation of Duties — the principle of distributing tasks among multiple users to prevent fraud or error |
| **Recertification** | Periodic formal review of user access rights to confirm their continued appropriateness |
| **Access Request Form (ARF)** | The formal document or system record used to initiate an access provisioning or modification request |
| **Business Owner** | The designated manager or head accountable for a system or data set |
| **ITSM** | IT Service Management — the platform used to manage and track access requests (e.g., ServiceNow, Jira) |
| **MFA** | Multi-Factor Authentication — authentication requiring two or more verification factors |

---

## 3. Regulatory and Policy Framework

*Enumerate all laws, regulations, standards, and internal policies that this procedure is designed to satisfy. Include specific clause references where possible.*

### 3.1 Legislative and Regulatory Requirements

| Reference | Clause / Section | Requirement Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII owners must implement prescribed cybersecurity measures, including access controls, for their designated systems |
| Cyber Security Act 2024 (Act 854) | Section 25 | Obligation to report cybersecurity incidents, which may include unauthorized access events |
| Personal Data Protection Act 2010 (PDPA) | Section 5 — Security Principle | Personal data must be protected against unauthorized or unlawful processing and accidental loss |
| [Applicable BNM Policy / RMiT] | [Clause Reference] | [Summary of applicable BNM requirement, e.g., RMiT 10.30 — Access Management] |
| [Other Applicable Regulation] | [Clause Reference] | [Summary] |

### 3.2 Internal Policy Alignment

| Internal Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Document ID] | Parent policy — sets overarching access control principles |
| Identity and Access Management Policy | [Document ID] | Policy — defines IAM governance framework this procedure operationalizes |
| Privileged Access Management Policy | [Document ID] | Policy — governs privileged account lifecycle |
| Acceptable Use Policy | [Document ID] | Sets obligations for users granted access |
| Third-Party Access Management Policy | [Document ID] | Governs vendor and contractor access |
| NCII Asset Register | [Document ID] | Defines in-scope systems for this procedure |

### 3.3 Related Standards

| Standard | Version | Applicability |
|---|---|---|
| ISO/IEC 27001:2022 | 2022 | Annex A — 5.15 Access Control, 5.16 Identity Management, 5.18 Access Rights |
| NIST SP 800-53 | Rev. 5 | AC — Access Control family |
| CIS Controls | v8 | Control 5 — Account Management, Control 6 — Access Control Management |

---

## 4. Access Request and Approval Workflow

*Detail the end-to-end process for initiating, reviewing, approving, and fulfilling an access request. Include process steps, decision points, timelines, and the tools used.*

### 4.1 Access Request Initiation

*Describe how a request is initiated, who can initiate it, and what information must be provided.*

All access requests for in-scope NCII systems must be formally initiated through the organization's designated ITSM platform ([ITSM Platform Name]). Verbal or informal requests are not permitted and will not be actioned.

**Mandatory information required on an Access Request Form (ARF):**

- Full name and employee/contractor ID of the requestee
- Department and cost centre
- System(s) or application(s) for which access is required
- Specific role or access level requested (referencing the approved Role Catalogue — Appendix A)
- Business justification for the access
- Requested access start date and, where applicable, end date
- Line manager details and confirmation of approval
- Data classification of the target system(s)
- Confirmation that SoD conflicts have been checked

### 4.2 Approval Workflow

*Define each approval stage, the approver, and the condition under which each stage is triggered. Specify escalation paths.*

All access requests must pass through a multi-stage approval workflow before provisioning is actioned:

| Stage | Approver | Criteria / Trigger | Maximum SLA |
|---|---|---|---|
| **Stage 1 — Line Manager Approval** | Requestee's Direct Line Manager | All requests | 1 business day |
| **Stage 2 — System / Data Owner Approval** | Designated Business Owner of the target system | All requests | 2 business days |
| **Stage 3 — IAM Team Review** | IAM Team Lead | Technical feasibility, SoD check, Role Catalogue alignment | 1 business day |
| **Stage 4 — CISO / Security Approval** | Chief Information Security Officer (or delegate) | Privileged access, cross-system access, third-party access to sensitive systems | 2 business days |
| **Stage 5 — Provisioning Action** | IAM Administrator | Upon full approval chain completion | 1 business day |

**Escalation:** If any approver does not respond within the stated SLA, the ITSM system will automatically escalate to the approver's designated delegate and notify the IAM Team Lead.

### 4.3 Access Request Workflow Diagram

*Insert or attach the access request workflow diagram here. The diagram should illustrate all decision points, approvers, and outcomes including rejection and re-submission paths.*

> **[INSERT WORKFLOW DIAGRAM — Access Request and Approval Process]**
>
> *The diagram should cover: Request Submission → Manager Approval → Business Owner Approval → IAM Review → (If Privileged: CISO Approval) → Provisioning → Notification to Requestee → Ticket Closure*

### 4.4 Request Rejection

If a request is rejected at any stage, the approver must document the reason for rejection in the ITSM record. The requestee will be notified via the ITSM platform. Rejected requests may be resubmitted with additional justification. Repeated rejection of the same request must be escalated to the [Governance Committee / IAM Steering Committee].

### 4.5 Access Provisioning Confirmation

Upon completion of provisioning, the IAM Administrator must:

- Update the ITSM ticket to **Resolved** status with provisioning completion details
- Record the new access in the **Access Rights Register** (Appendix B)
- Notify the requestee and their line manager of the provisioned access and any relevant usage conditions
- Confirm MFA enrollment for all newly provisioned accounts

---

## 5. Role-Based Access Assignment

*Define how access is structured using role-based access control, how roles are created and maintained, and how roles map to job functions.*

### 5.1 RBAC Principles

[Organization Name] employs a Role-Based Access Control (RBAC) model for all NCII systems. Access rights are assigned to predefined roles rather than directly to individual users. Roles are designed in accordance with the following principles:

- **Least Privilege:** Roles grant only the minimum access required for the associated job function.
- **Segregation of Duties (SoD):** Roles are designed to prevent a single individual from holding conflicting permissions that could facilitate fraud or error. A current SoD conflict matrix is maintained in Appendix C.
- **Need-to-Know:** Access to sensitive data is restricted to personnel with a documented business need.

### 5.2 Role Catalogue

*The Role Catalogue defines all approved access roles for each in-scope system. It must be maintained by the IAM Team in collaboration with Business Owners. Reference the current version here.*

The authoritative **Role Catalogue** is maintained by the IAM Team and accessible via [Location/Link — e.g., ITSM platform / SharePoint]. It is reviewed no less than annually and updated within [5] business days of any organizational restructure or system change.

The Role Catalogue records, at minimum:

| Field | Description |
|---|---|
| Role ID | Unique identifier for the role |
| Role Name | Descriptive name aligned to job function |
| Target System | The system(s) to which the role grants access |
| Access Level | Read / Read-Write / Admin / Privileged |
| Permissions | Specific permissions or entitlements included |
| SoD Conflicts | List of roles that cannot be held concurrently |
| Business Owner | Accountable owner for the role definition |
| Last Reviewed | Date the role definition was last reviewed |

### 5.3 Role Assignment Process

*Describe how roles are mapped to users and the constraints on assigning multiple roles.*

1. Access requests must specify a role from the approved Role Catalogue. Requests for access not covered by an existing role must be accompanied by a **New Role Request** (see Section 5.4).
2. The IAM Team will verify that the requested role does not create an SoD conflict with existing roles held by the requestee before provisioning.
3. Multiple roles may be assigned to a single user where business-justified and SoD-compliant.
4. Time-limited roles must have an explicit expiry date configured at provisioning.

### 5.4 New Role Creation

Requests to create a new RBAC role must be submitted to the IAM Team by the relevant Business Owner and include:

- Business justification and associated job functions
- Proposed permissions and access level
- Identification of potential SoD conflicts
- Approval from the CISO

New roles must be added to the Role Catalogue before provisioning is actioned. New roles that introduce privileged access must also comply with Section 6 of this procedure.

---

## 6. Privileged Account Provisioning

*Define the additional controls and procedures that apply specifically to accounts with elevated or administrative privileges. These accounts carry the highest risk and require the most stringent controls.*

### 6.1 Definition of Privileged Accounts

For the purposes of this procedure, **privileged accounts** include but are not limited to:

- Operating system administrator and root accounts
- Domain administrator accounts
- Database administrator (DBA) accounts
- Network device administrative accounts (routers, firewalls, switches)
- Cloud infrastructure administrator accounts (IAM, root/owner roles)
- Application administrator accounts with the ability to modify configurations, create users, or access all data
- Service accounts with elevated permissions
- Shared administrative accounts (where approved by exception)

### 6.2 Privileged Account Provisioning Controls

*Enumerate the additional approval, technical, and monitoring controls that apply to privileged accounts beyond the standard access request process.*

All privileged account provisioning requests must comply with the following controls in addition to the standard access workflow (Section 4):

| Control | Requirement |
|---|---|
| **Additional CISO Approval** | All privileged account requests require explicit CISO or Deputy CISO written approval |
| **PAM Tool Onboarding** | All privileged accounts must be managed within the organization's PAM solution ([PAM Tool Name]) |
| **Just-in-Time (JIT) Access** | Where technically supported, privileged access must be provisioned on a JIT basis with a maximum session duration of [4] hours |
| **MFA Enforcement** | MFA is mandatory for all privileged account authentication without exception |
| **Session Recording** | All privileged sessions must be recorded and logs retained for a minimum of [12] months |
| **Dedicated Privileged Accounts** | Privileged accounts must be separate from the user's standard day-to-day account. No dual-use accounts are permitted |
| **Named Accounts** | Shared privileged accounts are prohibited except where technically unavoidable; any exception must be documented and approved by the CISO |
| **Quarterly Recertification** | Privileged accounts are subject to quarterly recertification (see Section 8) |

### 6.3 Service Account Management

*Define how service accounts are created, owned, and managed throughout their lifecycle.*

- Every service account must have a designated **human owner** (a named employee responsible for the account)
- Service account credentials must be stored in the PAM tool and rotated at minimum every [90] days or immediately upon suspected compromise
- Service accounts must not be used for interactive login
- Service accounts must be granted only the specific permissions required for their function (least privilege)
- Service accounts must be reviewed as part of the annual access recertification cycle

### 6.4 Privileged Account Register

*Maintain a current register of all privileged accounts. This register is a key audit artefact.*

The IAM Team maintains a **Privileged Account Register** (Appendix D), recording:

| Field | Description |
|---|---|
| Account Name | The privileged account identifier |
| System / Platform | Target system |
| Account Type | Admin / Root / DBA / Service / Other |
| Account Owner | Named responsible employee |
| PAM Tool Managed | Yes / No |
| JIT Enabled | Yes / No |
| Last Password Rotation | Date |
| Last Reviewed | Date |

---

## 7. Joiner, Mover, and Leaver Process

*Define the access lifecycle actions triggered by employment or contractual status changes. This section is critical for ensuring timely provisioning and, crucially, timely deprovisioning of access.*

### 7.1 Joiner Process (New Access Provisioning)

*Describe the trigger, responsible parties, and required steps when a new employee, contractor, or third party joins the organization or commences a new engagement.*

**Trigger:** Confirmed offer acceptance / contract execution, notified by Human Resources or Procurement.

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| J1 | HR/Procurement notifies IAM Team of new joiner details via ITSM or automated HR system integration | HR / Procurement | At least [5] business days before start date |
| J2 | Line Manager submits Access Request Form specifying required roles per Role Catalogue | Line Manager | At least [3] business days before start date |
| J3 | IAM Team conducts SoD conflict check and validates against Role Catalogue | IAM Team | Upon receipt of ARF |
| J4 | Approval workflow completed per Section 4.2 | Approvers per workflow | Per SLA in Section 4.2 |
| J5 | IAM Administrator provisions accounts and enrolls user in MFA | IAM Administrator | By or on start date |
| J6 | Credentials and access details communicated to user via secure channel | IAM Administrator | On start date |
| J7 | Access record updated in Access Rights Register | IAM Administrator | Same day as provisioning |
| J8 | User completes mandatory security awareness training before accessing NCII systems | User / Training Team | Within [5] business days of start |

**For Third Parties and Contractors:** In addition to the above, third-party access must be:
- Time-limited with a defined expiry date aligned to the contract or engagement period
- Restricted to the minimum systems required for the contracted scope
- Subject to a signed **Third-Party Access Agreement** before credentials are issued
- Reviewed monthly where the engagement exceeds [3] months

### 7.2 Mover Process (Access Modification)

*Describe the process for modifying access when an employee changes role, department, or responsibilities.*

**Trigger:** Confirmed internal transfer, promotion, secondment, or role change, notified by HR.

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| M1 | HR notifies IAM Team and relevant Line Managers of role change details | HR | At least [3] business days before effective date |
| M2 | New Line Manager submits ARF for required new-role access | New Line Manager | At least [3] business days before effective date |
| M3 | Old Line Manager or HR confirms which existing access is no longer required | Old Line Manager / HR | At least [3] business days before effective date |
| M4 | IAM Team reviews current access, identifies access to be removed, and processes new-role ARF through approval workflow | IAM Team | Per standard approval SLAs |
| M5 | IAM Administrator removes redundant access and provisions new access simultaneously on the effective date | IAM Administrator | On effective date of role change |
| M6 | Access Rights Register updated | IAM Administrator | Same day |
| M7 | User notified of access changes | IAM Administrator | Same day |

> **Important:** Access from the previous role must be removed concurrent with provisioning of new-role access. Under no circumstances should a mover retain access rights from a previous role beyond the effective date of their role change, unless a documented time-limited exception is approved by the CISO.

### 7.3 Leaver Process (Access Revocation)

*Define the deprovisioning steps for departing employees, contractors, or third parties. Timely revocation is one of the most critical controls in access management.*

**Trigger:** Confirmed resignation, termination, contract end, or redundancy, notified by HR or Procurement.

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| L1 | HR/Procurement notifies IAM Team and Line Manager of departure and last day | HR / Procurement | Immediately upon confirmation; at least [3] business days before last day where possible |
| L2 | IAM Team flags the user record for deprovisioning in ITSM | IAM Team | Upon receipt of notification |
| L3 | All logical access (accounts, VPN, email, applications, cloud) is disabled or revoked | IAM Administrator | **By end of last working day** (or immediately for involuntary terminations) |
| L4 | Privileged accounts associated with the leaver are revoked and passwords rotated for any shared accounts the leaver had access to | IAM Administrator | Simultaneously with L3 |
| L5 | Access Rights Register updated to reflect revocation | IAM Administrator | Same day |
| L6 | IT assets (laptops, tokens, access cards) returned and confirmed by HR | HR / IT | On or before last working day |
| L7 | Line Manager confirms no residual access required (e.g., for handover period) | Line Manager | Prior to last day |
| L8 | Closed ITSM ticket retained as audit evidence | IAM Team | Retained per records retention schedule |

**Involuntary Terminations:** For involuntary leavers (termination for cause), access must be revoked **immediately and simultaneously** with the notification of termination, prior to the employee being informed where operationally feasible. The CISO and HR Director must be notified immediately.

**Post-Departure Access Review:** Within [5] business days of a leaver's departure, the IAM Team must confirm full revocation across all systems via an automated or manual access audit.

---

## 8. Access Recertification Schedule

*Define the periodic review process by which the ongoing appropriateness of user access rights is formally validated. Recertification is a key detective control.*

### 8.1 Recertification Objectives

The access recertification process ensures that:

- Access rights remain appropriate to each user's current role and responsibilities
- Orphaned accounts (e.g., from missed leaver notifications) are identified and removed
- SoD conflicts are detected and remediated
- Privileged access remains justified and proportionate
- Compliance with Act 854 Section 18 and internal IAM policy is evidenced

### 8.2 Recertification Schedule

| Access Type | Recertification Frequency | Campaign Owner | Reviewer |
|---|---|---|---|
| Standard User Access — NCII Systems | Annual | IAM Team | Business Owner / Line Manager |
| Privileged Accounts (Admin, Root, DBA) | Quarterly | IAM Team Lead | CISO / System Owner |
| Service Accounts | Annual (aligned to standard) | IAM Team | Service Account Owner |
| Third-Party / Vendor Access | Every [6] months or on contract renewal | IAM Team | Procurement / Contract Manager |
| Remote Access / VPN Accounts | Annual | IAM Team | Line Manager |
| Temporary / Time-Limited Access | On expiry date | IAM Administrator (automated) | N/A — auto-expired |

### 8.3 Recertification Process

*Describe the steps in a recertification campaign from initiation to completion and remediation.*

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| RC1 | IAM Team generates access reports from all in-scope systems and the Access Rights Register | IAM Team | [30] days before campaign deadline |
| RC2 | Recertification tasks assigned to Business Owners and Line Managers via ITSM or IAM platform | IAM Team | [25] days before campaign deadline |
| RC3 | Reviewers certify each access record as **Approved (Continue)**, **Modify**, or **Revoke** | Business Owner / Line Manager | Within [15] days of assignment |
| RC4 | IAM Team follows up on overdue certifications — escalation to department head after [5] business days | IAM Team | Per campaign schedule |
| RC5 | Revocation actions executed for all access marked as **Revoke** or **Modify** | IAM Administrator | Within [5] business days of reviewer decision |
| RC6 | Recertification completion report produced and submitted to CISO | IAM Team Lead | Within [5] business days of campaign close |
| RC7 | Exceptions and findings reported to [Governance Committee] | IAM Team Lead | At next scheduled governance meeting |

### 8.4 Recertification Completion Metrics

The following metrics must be captured and reported at the conclusion of each recertification campaign:

| Metric | Description |
|---|---|
| Completion Rate | Percentage of access records certified by the campaign deadline |
| Revocation Count | Number of access rights revoked as a result of the campaign |
| Modification Count | Number of access rights modified |
| Orphaned Accounts Found | Number of accounts with no identifiable active owner |
| Overdue Certifications | Number of certifications not completed by reviewer deadline |
| SoD Conflicts Identified | Number of SoD conflicts detected and remediated |

### 8.5 Consequences of Non-Completion

Failure by a Business Owner or Line Manager to complete their assigned recertification tasks within the campaign deadline will result in:

1. Escalation to the department head and CISO
2. Automatic suspension of the uncertified access rights pending review (where technically feasible)
3. Recording as a compliance exception in the IAM governance log

---

## 9. Emergency Access Provisioning

*Define the expedited process for granting access in urgent situations where the standard approval workflow would cause unacceptable operational disruption. Emergency access must be subject to equally rigorous after-the-fact controls.*

### 9.1 Criteria for Emergency Access

Emergency access provisioning may only be invoked where all of the following conditions are met:

- There is a genuine, documented operational emergency or business-critical incident in progress
- The required access cannot be obtained through the standard approval process within an operationally acceptable timeframe
- The access is necessary to mitigate, remediate, or investigate a specific and identified incident or failure
- The request has been verbally authorized by the CISO or a designated Deputy

### 9.2 Emergency Access Provisioning Process

| Step | Action | Responsible Party | Timeline |
|---|---|---|---|
| E1 | Incident lead identifies access requirement and contacts CISO or Deputy for verbal authorization | Incident Lead | Immediately |
| E2 | CISO or Deputy provides verbal authorization and logs authorization via [designated channel — e.g., Teams/phone with follow-up email] | CISO / Deputy | Immediately |
| E3 | IAM Administrator provisions emergency access and records the action in the Emergency Access Log (Appendix E) | IAM Administrator | Within [30] minutes of authorization |
| E4 | Formal ITSM ticket raised retrospectively within [4] hours with all required justification and authorization details | IAM Administrator / Incident Lead | Within 4 hours |
| E5 | Emergency access automatically expires after [24] hours or at incident resolution, whichever is sooner | IAM System / Administrator | Per configured expiry |
| E6 | Post-incident review conducted — access logs reviewed, access revoked, formal documentation completed | IAM Team / CISO | Within [2] business days of incident closure |
| E7 | Emergency access event reported in next IAM governance report | IAM Team Lead | At next scheduled governance meeting |

### 9.3 Emergency Access Controls

The following controls remain mandatory even during emergency access events:

- MFA must be enforced on all emergency access accounts
- All emergency access sessions must be recorded (PAM session recording)
- Emergency access must be scoped to the minimum required for the specific incident — blanket or unrestricted access is not permitted
- Emergency access must not be used for any purpose beyond the specific incident that justified its creation
- Emergency access must be revoked as soon as the operational need is resolved

### 9.4 Emergency Access Log

All emergency access events must be recorded in the **Emergency Access Log** (Appendix E) maintained by the IAM Team. The log is reviewed by the CISO on a monthly basis. Any patterns of excessive emergency access usage will be escalated to the [Governance Committee].

---

## 10. Roles and Responsibilities

*Define who is accountable, responsible, consulted, and informed for each key activity in this procedure. Use a RACI model.*

### 10.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | IAM Team Lead | IAM Administrator | Business Owner | Line Manager | HR / Procurement | End User | IT Operations |
|---|---|---|---|---|---|---|---|---|
| Maintain and update this procedure | A | R | C | C | I | I | — | — |
| Maintain Role Catalogue | A | R | C | C | — | — | — | — |
| Initiate access request | I | I | I | C | A | C | R | — |
| Stage 1: Line Manager approval | I | I | — | I | A/R | — | I | — |
| Stage 2: Business Owner approval | I | I | — | A/R | I | — | I | — |
| Stage 3: IAM technical review | A | A/R | R | C | I | — | — | C |
| Stage 4: CISO approval (privileged) | A/R | I | — | I | I | — | — | — |
| Provision / modify access | A | A | R | I | I | — | I | C |
| Joiner notification to IAM | I | I | I | — | I | A/R | — | — |
| Mover notification to IAM | I | I | I | — | A | A/R | — | — |
| Leaver notification and deprovisioning trigger | A | I | I | — | R | A/R | — | — |
| Execute access revocation (Leaver) | A | A | R | I | I | I | — | C |
| Manage privileged account controls | A | A | R | C | I | — | — | C |
| Conduct access recertification campaign | A | R | C | R | R | — | — | — |
| Review and sign off recertification report | A/R | R | I | I | I | — | — | — |
| Authorize emergency access | A/R | C | — | I | I | — | — | I |
| Execute emergency access provisioning | A | C | R | I | I | — | — | C |
| Maintain Access Rights Register | A | A | R | — | — | — | — | — |
| Report compliance metrics to governance | A | R | C | I | — | — | — | — |

### 10.2 Key Role Descriptions

| Role | Responsibilities Under This Procedure |
|---|---|
| **CISO** | Ultimate accountability for IAM controls; approves privileged access; authorizes emergency access; reviews governance reports |
| **IAM Team Lead** | Day-to-day governance of this procedure; manages recertification campaigns; produces governance reports; maintains Role Catalogue and PAM controls |
| **IAM Administrator** | Executes provisioning, modification, and deprovisioning actions; maintains Access Rights Register; manages PAM tool |
| **Business Owner** | Approves access to systems they own; participates in recertification as primary reviewer; owns Role Catalogue entries for their systems |
| **Line Manager** | Initiates access requests for their team; approves Stage 1 requests; participates in recertification; triggers leaver/mover notifications |
| **HR / Procurement** | Notifies IAM Team of JML events; manages third-party engagement lifecycle; confirms asset recovery on departure |
| **End User** | Completes mandatory security training; uses access only for authorized purposes; reports suspected unauthorized access |

---

## 11. Non-Compliance and Exceptions

### 11.1 Non-Compliance

Failure to comply with this procedure may result in:

- Disciplinary action in accordance with [Organization Name] HR policies, up to and including termination
- Revocation of system access pending investigation
- Regulatory reporting obligations under Act 854 where a breach of access controls constitutes or contributes to a cybersecurity incident
- Civil or criminal liability under the Cyber Security Act 2024 or Personal Data Protection Act 2010

Suspected non-compliance must be reported to the IAM Team Lead and CISO immediately. Confirmed non-compliance events will be recorded in the IAM compliance log and reported to the [Governance Committee].

### 11.2 Exceptions

Any deviation from the controls specified in this procedure must be formally approved via the organization's **Policy Exception Process**:

1. A written exception request must be submitted to the IAM Team Lead, documenting the specific control, the proposed deviation, the business justification, and compensating controls.
2. Exceptions require approval from the CISO and, for exceptions relating to privileged accounts or NCII systems, from the [Governance Committee].
3. Approved exceptions are time-limited to a maximum of [6] months and must be reviewed before renewal.
4. All approved exceptions are maintained in the **IAM Exception Register** and reported in IAM governance reporting.

---

## 12. Review and Approval

### 12.1 Document Review

This procedure must be reviewed:

- **Annually** from the date of last approval, at minimum
- Upon any material change to the Cyber Security Act 2024 or NACSA-prescribed cybersecurity measures
- Following a significant cybersecurity incident involving unauthorized or inappropriate access
- Upon material changes to the organization's NCII systems, technology platforms, or operating structure
- At the direction of the CISO or [Governance Committee]

The IAM Team Lead is responsible for initiating and coordinating the review. The updated procedure must be approved by the CISO and [Governance Committee / Board Risk Committee] before the revised version takes effect.

### 12.2 Version History

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], IAM Team | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of change] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [IAM Team Lead Name] | | [Date] |
| Reviewed By | [CISO Name] | | [Date] |
| Approved By | [Committee Chair / CTO / CEO Name] | | [Date] |
| Endorsed By (if applicable) | [Board Risk Committee Representative] | | [Date] |

---

## 13. References

*List all external regulatory documents, standards, and internal policies referenced in this procedure.*

### 13.1 Legislative and Regulatory References

| Document | Issuing Authority | Relevant Provisions |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Parliament of Malaysia / NACSA | Section 18 — Prescribed cybersecurity measures for NCII owners; Section 25 — Cybersecurity incident reporting |
| Personal Data Protection Act 2010 (Act 709) | PDPC Malaysia | Section 5 — Security Principle |
| [Financial Services Act 2013 / Islamic Financial Services Act 2013] | Parliament of Malaysia | [Relevant provisions if applicable] |
| [BNM Risk Management in Technology (RMiT) Policy Document] | Bank Negara Malaysia | [Relevant clause references] |
| [NACSA Prescribed Cybersecurity Measures — NCII Sector] | NACSA | [Reference to sector-specific prescribed measures under Act 854] |

### 13.2 Standards References

| Standard | Version | Publisher |
|---|---|---|
| ISO/IEC 27001 — Information Security Management | 2022 | ISO/IEC |
| ISO/IEC 27002 — Information Security Controls | 2022 | ISO/IEC (Controls 5.15, 5.16, 5.17, 5.18) |
| NIST Special Publication 800-53 — Security and Privacy Controls | Rev. 5 | NIST |
| CIS Controls | v8 | Center for Internet Security |

### 13.3 Internal Document References

| Document | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Document ID] | CISO |
| Identity and Access Management Policy | [Document ID] | IAM Team |
| Privileged Access Management Policy | [Document ID] | IAM Team |
| Third-Party Access Management Policy | [Document ID] | CISO / Procurement |
| Acceptable Use Policy | [Document ID] | HR / CISO |
| NCII Asset Register | [Document ID] | IT / CISO |
| Cybersecurity Incident Response Procedure | [Document ID] | CISO |
| Policy Exception Register | [Document ID] | CISO |

---

## 14. Appendices

### Appendix A — Role Catalogue (Current Version)

*Attach or link to the current approved Role Catalogue. The Role Catalogue must be maintained separately as a living document and referenced from this procedure. It is reviewed annually and updated as required.*

> **[ATTACH: Role Catalogue — Document ID [Document ID], Version [X.X], dated [Date]]**
>
> *The Role Catalogue must include: Role ID, Role Name, Target System, Access Level, Permissions, SoD Conflicts, Business Owner, and Last Review Date for every approved role.*

---

### Appendix B — Access Rights Register Template

*The Access Rights Register records all current access provisioned to users across in-scope NCII systems. It is maintained by the IAM Team and updated within [1] business day of any provisioning or deprovisioning action.*

| Field | Description |
|---|---|
| Record ID | Unique identifier for the access record |
| User Full Name | Full legal name of the user |
| User ID / Employee ID | Unique organizational identifier |
| User Type | Employee / Contractor / Vendor / Service Account |
| Department | User's department or business unit |
| System / Application | Target NCII system or application |
| Role / Access Level | Role assigned per Role Catalogue |
| Account Type | Standard / Privileged / Service |
| Provisioning Date | Date access was first granted |
| Expiry Date | Date access is set to expire (if time-limited) |
| Approved By | Name and role of final approver |
| ITSM Reference | Reference number of the access request ticket |
| Last Recertified | Date of most recent recertification |
| Status | Active / Suspended / Revoked |

---

### Appendix C — Segregation of Duties (SoD) Conflict Matrix

*The SoD Conflict Matrix identifies pairs or groups of roles that must not be held concurrently by the same individual. It is maintained by the IAM Team in consultation with Business Owners and the Internal Audit function. An extract is provided below for illustrative purposes — the full matrix must be maintained separately.*

| Role A | Role B | Conflict Type | Rationale | Approved Exception Possible? |
|---|---|---|---|---|
| Payment Initiator | Payment Approver | High — Financial Fraud | A single individual must not be able to initiate and approve the same payment | No |
| Access Provisioner (IAM Admin) | Access Approver (Business Owner) | High — Access Fraud | IAM Administrators must not approve their own access requests | No |
| System Administrator | Audit Log Administrator | High — Evidence Tampering | Administrators must not be able to modify or delete their own activity logs | No |
| [Role Name] | [Role Name] | [High / Medium / Low] | [Rationale] | [Yes / No] |

> **[ATTACH: Full SoD Conflict Matrix — Document ID [Document ID], Version [X.X], dated [Date]]**

---

### Appendix D — Privileged Account Register Template

*Maintained by the IAM Team. Updated within [1] business day of any privileged account lifecycle event. Reviewed quarterly.*

| Account Name | System / Platform | Account Type | Named Owner | PAM Managed | JIT Enabled | Last Pwd Rotation | Last Reviewed | Status |
|---|---|---|---|---|---|---|---|---|
| [Account] | [System] | Admin / Root / DBA / Service | [Name] | Yes / No | Yes / No | [Date] | [Date] | Active / Disabled |

---

### Appendix E — Emergency Access Log Template

*All emergency access events must be recorded here. Reviewed monthly by the CISO. Retained for a minimum of [5] years.*

| Log ID | Date / Time | Requestee | System Accessed | Access Scope | Incident Reference | Verbal Authorization By | ITSM Ticket | Access Expiry | Post-Incident Review Date | Findings / Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| EA-[YYYY]-[NNN] | [Date/Time] | [Name] | [System] | [Scope] | [INC-XXXXX] | [CISO / Deputy Name] | [TKT-XXXXX] | [Date/Time] | [Date] | [Notes] |

---

### Appendix F — Access Request Form (ARF) Field Reference

*The ARF is submitted via [ITSM Platform Name]. The following fields are mandatory for all standard access requests.*

| Field | Mandatory | Description |
|---|---|---|
| Requestee Full Name | Yes | Legal name of the individual requiring access |
| Employee / Contractor ID | Yes | Unique organizational identifier |
| Department | Yes | Department or business unit |
| Line Manager | Yes | Name and email of direct line manager |
| Target System(s) | Yes | System(s) for which access is required |
| Requested Role(s) | Yes | Role(s) from approved Role Catalogue |
| Business Justification | Yes | Documented reason why access is required |
| Start Date | Yes | Date access is required from |
| End Date | If time-limited | Date access should be automatically revoked (mandatory for contractors and vendors) |
| Data Classification Acknowledgement | Yes | Confirmation that requestee understands data classification of target system |
| SoD Self-Declaration | Yes | Confirmation that requestee has no known SoD conflicts with requested role |
| Third-Party Access Agreement Reference | If applicable | Reference to signed agreement (mandatory for vendors and contractors) |
| Manager Approval Confirmation | Yes | Electronic sign-off by line manager within ITSM |

---

### Appendix G — Glossary of Regulatory Terms

*Provides definitions of terms as used under the Cyber Security Act 2024 (Act 854) and related NACSA guidance, for reference by document readers unfamiliar with the regulatory framework.*

| Term | Regulatory Definition / Source |
|---|---|
| **National Critical Information Infrastructure (NCII)** | As defined under Section 2, Act 854 — computer or computer system, or a network of interconnected computers or computer systems, necessary for the continuous delivery of essential services |
| **NCII Sector Lead** | The government ministry or agency designated as the lead for each NCII sector under Act 854 |
| **NCII Entity** | An organisation designated as an owner or operator of NCII under Act 854 |
| **Prescribed Cybersecurity Measure** | A cybersecurity measure prescribed by the Minister on the recommendation of the Chief Executive of NACSA, with which NCII entities must comply under Section 18, Act 854 |
| **Cybersecurity Incident** | As defined under Section 2, Act 854 — [insert statutory definition] |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**Owner:** Identity & Access Management | **Next Review:** [Next Review Date]
**© [Organization Name] — All rights reserved. Internal use only.**