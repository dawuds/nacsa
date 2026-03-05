# Access Rights Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Identity & Access Management |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Register Structure and Field Definitions](#3-register-structure-and-field-definitions)
4. [Access Rights Register](#4-access-rights-register)
   - 4.1 [User Identity](#41-user-identity)
   - 4.2 [System and Application Access](#42-system-and-application-access)
   - 4.3 [Role and Permissions](#43-role-and-permissions)
   - 4.4 [Access Approval Reference](#44-access-approval-reference)
   - 4.5 [Last Review Date](#45-last-review-date)
   - 4.6 [Privileged Account Flag](#46-privileged-account-flag)
5. [Periodic Access Review Process](#5-periodic-access-review-process)
6. [Roles and Responsibilities](#6-roles-and-responsibilities)
7. [Review and Approval](#7-review-and-approval)
8. [References](#8-references)
9. [Appendices](#9-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Access Rights Register serves as the authoritative record of all user access rights granted to National Critical Information Infrastructure (NCII) systems and applications within [Organization Name]. It provides a consolidated, auditable inventory supporting periodic access reviews, least-privilege enforcement, and regulatory compliance obligations under the **Cyber Security Act 2024 (Act 854)**, administered by the National Cyber Security Agency (NACSA).

This register enables [Organization Name] to demonstrate that access to NCII systems is controlled, reviewed, and revoked in a timely manner, and that privileged access is subject to heightened oversight.

### 1.2 Scope

This register applies to:

- All user accounts (human and non-human/service accounts) with access to systems designated as NCII assets by [Organization Name]
- All access types: read, write, execute, administrative, and privileged
- All identity categories: employees, contractors, third-party vendors, and system/service accounts
- All environments: production, staging, development, and disaster recovery, where these host NCII-classified systems
- All geographic locations and subsidiaries within the regulatory perimeter of [Organization Name]

This register **does not** cover:

- Access to non-NCII systems unless explicitly included by the Head of IAM
- Physical access rights (refer to Physical Access Control Register)

---

## 2. Regulatory Context

### 2.1 Legislative Basis

This register is maintained in fulfilment of obligations under the following legislation and regulatory instruments:

| Instrument | Clause / Section | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entity must establish and maintain controls to protect NCII systems, including access control management and periodic review of access rights |
| Cyber Security Act 2024 (Act 854) | Section 18(1) | Duty of NCII entity to ensure cybersecurity of NCII under its ownership or control |
| Cyber Security Act 2024 (Act 854) | Section 18(2) | Compliance with written directions, codes of practice, and standards issued by NACSA |
| [Applicable NACSA Code of Practice / Directive] | [Reference] | [Specific access control or identity management requirement] |
| Personal Data Protection Act 2010 (PDPA) | [Relevant Section] | Protection of personal data accessed through NCII systems |
| [BNM RMiT / Other Applicable Framework] | [Policy / Paragraph] | [Cross-reference obligation if applicable] |

### 2.2 Relationship to Other Policies

This register operates in conjunction with the following internal governance documents:

- **Information Security Policy** — [Document ID]
- **Identity and Access Management Policy** — [Document ID]
- **Privileged Access Management Procedure** — [Document ID]
- **Joiner-Mover-Leaver (JML) Procedure** — [Document ID]
- **Access Request and Approval Standard** — [Document ID]
- **NCII Asset Register** — [Document ID]

---

## 3. Register Structure and Field Definitions

*This section defines the data fields captured for each access rights record. All fields are mandatory unless marked optional. Data must be kept current and updated within [X] business days of any access change.*

| Field Name | Field ID | Description | Format / Values | Mandatory |
|---|---|---|---|---|
| Record ID | ARR-001 | Unique identifier for each register entry | ARR-YYYY-NNNN | Yes |
| User ID | ARR-002 | Unique system identifier for the user or service account | Alphanumeric | Yes |
| Full Name | ARR-003 | Legal full name of the account holder | Text | Yes |
| Account Type | ARR-004 | Classification of the account | Human / Service / System / Vendor | Yes |
| Department / Business Unit | ARR-005 | Organizational unit of the account holder | Text | Yes |
| Employment Status | ARR-006 | Current status of the account holder | Active / On Leave / Contractor / Terminated | Yes |
| System / Application Name | ARR-007 | Name of the NCII system or application | Text | Yes |
| NCII Asset ID | ARR-008 | Reference to the NCII Asset Register | NCII-YYYY-NNNN | Yes |
| Access Role / Profile | ARR-009 | Role or permission profile assigned | Text | Yes |
| Permission Level | ARR-010 | Granular permissions granted | Read / Write / Execute / Admin / Full Control | Yes |
| Access Approval Reference | ARR-011 | Reference to the approved access request | AR-YYYY-NNNN | Yes |
| Access Grant Date | ARR-012 | Date access was initially granted | DD-MMM-YYYY | Yes |
| Access Expiry Date | ARR-013 | Date access is scheduled to expire (if applicable) | DD-MMM-YYYY / Permanent | Yes |
| Last Review Date | ARR-014 | Date access was last certified in a periodic review | DD-MMM-YYYY | Yes |
| Next Review Date | ARR-015 | Scheduled date of next access certification | DD-MMM-YYYY | Yes |
| Review Outcome | ARR-016 | Result of the most recent access review | Certified / Modified / Revoked / Pending | Yes |
| Privileged Account Flag | ARR-017 | Indicates whether account holds privileged access | Yes / No | Yes |
| Privileged Access Type | ARR-018 | Type of privileged access (if flagged) | Domain Admin / Local Admin / DBA / Root / Service / Other | Conditional |
| MFA Enforced | ARR-019 | Whether multi-factor authentication is active | Yes / No | Yes |
| Record Status | ARR-020 | Current lifecycle status of the record | Active / Suspended / Revoked / Archived | Yes |
| Last Modified By | ARR-021 | IAM personnel who last updated this record | Text | Yes |
| Last Modified Date | ARR-022 | Date this record was last updated | DD-MMM-YYYY | Yes |
| Remarks | ARR-023 | Any additional notes or exceptions | Text | Optional |

---

## 4. Access Rights Register

*The sections below present the register entries organized by key data category. In production deployments, this register should be maintained as a database or structured spreadsheet with the fields defined in Section 3. The sample tables below illustrate the required structure for each category.*

---

### 4.1 User Identity

*This section captures the identity attributes of each account holder. Every entry must correspond to a verified identity in [Organization Name]'s authoritative identity store (e.g., Active Directory, IAM platform). Service and system accounts must have a designated human owner recorded.*

| Record ID | User ID | Full Name | Account Type | Department / Business Unit | Employment Status | Manager / Account Owner |
|---|---|---|---|---|---|---|
| ARR-[YYYY]-[0001] | [user.id] | [Full Name] | [Human / Service / Vendor] | [Department] | [Active / Contractor] | [Manager Name] |
| ARR-[YYYY]-[0002] | [svc.accountname] | [Service Account — Description] | Service | [Owning Team] | Active | [Technical Owner Name] |
| ARR-[YYYY]-[0003] | [user.id] | [Full Name] | Human | [Department] | Contractor | [Manager Name] |
| | | | | | | |

**Guidance Notes:**

- All accounts must have a designated human owner or manager recorded
- Terminated employee accounts must be flagged for immediate review and revocation
- Service account ownership must be reassigned if the technical owner leaves the organization
- Third-party / vendor accounts must reference the corresponding vendor engagement reference

---

### 4.2 System and Application Access

*This section documents which NCII systems and applications each user or account has access to. Each access entry must be linked to a confirmed NCII asset in the NCII Asset Register. One record is created per user per system.*

| Record ID | User ID | System / Application Name | NCII Asset ID | Environment | Access Grant Date | Access Expiry Date | Record Status |
|---|---|---|---|---|---|---|---|
| ARR-[YYYY]-[0001] | [user.id] | [System Name] | NCII-[YYYY]-[NNNN] | Production | [DD-MMM-YYYY] | Permanent | Active |
| ARR-[YYYY]-[0002] | [svc.accountname] | [Application Name] | NCII-[YYYY]-[NNNN] | Production | [DD-MMM-YYYY] | [DD-MMM-YYYY] | Active |
| ARR-[YYYY]-[0003] | [user.id] | [System Name] | NCII-[YYYY]-[NNNN] | Staging | [DD-MMM-YYYY] | [DD-MMM-YYYY] | Active |
| | | | | | | | |

**Guidance Notes:**

- Every system listed must appear in the NCII Asset Register
- Temporary access (e.g., for projects or incident response) must have an explicit expiry date
- Access to disaster recovery environments must be separately recorded and reviewed
- Cross-environment access (e.g., production and staging) requires separate approval records

---

### 4.3 Role and Permissions

*This section defines the specific roles and permission levels granted to each user on each system. Permissions must align with the principle of least privilege. Role definitions must be maintained in the Role Catalogue (Appendix A).*

| Record ID | User ID | System / Application Name | Access Role / Profile | Permission Level | Scope / Resource | Least Privilege Verified | Remarks |
|---|---|---|---|---|---|---|---|
| ARR-[YYYY]-[0001] | [user.id] | [System Name] | [Role Name, e.g., Read-Only Analyst] | Read | [Module / Data Set / API] | Yes | [Notes if any] |
| ARR-[YYYY]-[0002] | [user.id] | [System Name] | [Role Name, e.g., Operations Engineer] | Read / Write | [Module / Data Set] | Yes | |
| ARR-[YYYY]-[0003] | [svc.accountname] | [Application Name] | [Service Role, e.g., API Integration Account] | Execute | [Specific API Endpoints] | Yes | Restricted to named endpoints only |
| ARR-[YYYY]-[0004] | [user.id] | [System Name] | [Role Name, e.g., System Administrator] | Admin | Full System | Yes — Reviewed quarterly | PAM tool enforced |
| | | | | | | | |

**Guidance Notes:**

- Permission levels must be the minimum required for the user's job function
- Combined permissions that effectively grant elevated access must be reviewed as privileged access
- Role assignments must map to approved role definitions in the Role Catalogue (Appendix A)
- Dormant roles (granted but unused for [X] days) must be flagged for review and removal

---

### 4.4 Access Approval Reference

*This section records the formal approval authority for each access grant. Every access entry must be traceable to an approved access request. This linkage is essential for demonstrating controlled access provisioning under Act 854, s18.*

| Record ID | User ID | System / Application Name | Access Approval Reference | Approved By (Role) | Approver Name | Approval Date | Approval Method |
|---|---|---|---|---|---|---|---|
| ARR-[YYYY]-[0001] | [user.id] | [System Name] | AR-[YYYY]-[NNNN] | [System Owner / Data Owner] | [Name] | [DD-MMM-YYYY] | [ITSM Ticket / Email / IAM Portal] |
| ARR-[YYYY]-[0002] | [svc.accountname] | [Application Name] | AR-[YYYY]-[NNNN] | [Application Owner] | [Name] | [DD-MMM-YYYY] | [ITSM Ticket] |
| ARR-[YYYY]-[0003] | [user.id] | [System Name] | AR-[YYYY]-[NNNN] | [Data Owner] | [Name] | [DD-MMM-YYYY] | [IAM Portal] |
| | | | | | | | |

**Guidance Notes:**

- Access approval references must link to retrievable records (ITSM tickets, portal approvals, or signed forms)
- Self-approved access is not permitted; approver must be different from the requester
- Dual approval is required for all privileged access grants
- Emergency/break-glass access approvals must be retrospectively documented within [X] business days

---

### 4.5 Last Review Date

*This section records the access certification history for each register entry. Quarterly reviews must be conducted by the designated access reviewer (typically the system owner or business manager) and outcomes recorded here. An entry without a review date within the past [90] days is considered overdue and must be escalated.*

| Record ID | User ID | System / Application Name | Last Review Date | Review Conducted By | Review Outcome | Actions Taken | Next Review Due |
|---|---|---|---|---|---|---|---|
| ARR-[YYYY]-[0001] | [user.id] | [System Name] | [DD-MMM-YYYY] | [Reviewer Name / Role] | Certified | None | [DD-MMM-YYYY] |
| ARR-[YYYY]-[0002] | [user.id] | [System Name] | [DD-MMM-YYYY] | [Reviewer Name / Role] | Modified | Permission scope reduced | [DD-MMM-YYYY] |
| ARR-[YYYY]-[0003] | [user.id] | [System Name] | [DD-MMM-YYYY] | [Reviewer Name / Role] | Revoked | Account disabled — AR-[YYYY]-[NNNN] | N/A |
| ARR-[YYYY]-[0004] | [svc.accountname] | [Application Name] | [DD-MMM-YYYY] | [Reviewer Name / Role] | Pending | Awaiting business justification | [DD-MMM-YYYY] |
| | | | | | | | |

**Review Frequency:** Quarterly (every 90 days) for all accounts. Privileged accounts: monthly.

**Escalation Threshold:** Records overdue by more than [15] calendar days must be escalated to the Head of IAM and reported to the CISO.

---

### 4.6 Privileged Account Flag

*This section provides a consolidated view of all privileged accounts within the register. Privileged accounts require enhanced controls including dedicated privileged access management (PAM) tooling, session recording, and increased review frequency. All entries flagged as privileged must appear in this consolidated view.*

| Record ID | User ID | Full Name | System / Application Name | Privileged Account Flag | Privileged Access Type | PAM Tool Managed | Session Recording Active | MFA Enforced | Last Privileged Review Date |
|---|---|---|---|---|---|---|---|---|---|
| ARR-[YYYY]-[0001] | [user.id] | [Full Name] | [System Name] | **Yes** | Domain Admin | Yes | Yes | Yes | [DD-MMM-YYYY] |
| ARR-[YYYY]-[0002] | [user.id] | [Full Name] | [System Name] | **Yes** | Database Administrator (DBA) | Yes | Yes | Yes | [DD-MMM-YYYY] |
| ARR-[YYYY]-[0003] | [svc.accountname] | [Service Account — Batch Processing] | [Application Name] | **Yes** | Service Account | Yes | N/A | N/A — Certificate Auth | [DD-MMM-YYYY] |
| ARR-[YYYY]-[0004] | [user.id] | [Full Name] | [System Name] | **Yes** | Root / Local Admin | Yes | Yes | Yes | [DD-MMM-YYYY] |
| | | | | | | | | | |

**Privileged Account Controls Summary:**

- **Total Privileged Accounts:** [Number] as of [Date]
- **PAM Tool Coverage:** [Number] / [Number] ([%])
- **MFA Enforcement Rate:** [Number] / [Number] ([%])
- **Accounts Overdue for Review:** [Number]
- **Shared Privileged Accounts (non-compliant, require remediation):** [Number]

> **Note:** Shared or generic privileged accounts (e.g., `admin`, `root`) are prohibited unless a documented exception exists. Each exception must be referenced here with approval from the CISO.

---

## 5. Periodic Access Review Process

*This section documents the process by which this register is reviewed and certified on a quarterly basis. The process must be followed in full; deviations require written approval from the Head of IAM.*

### 5.1 Review Schedule

| Review Cycle | Target Completion Date | Responsible Reviewer | Oversight |
|---|---|---|---|
| Q1 — January to March | [DD-MMM-YYYY] | [System Owner / Business Manager] | Head of IAM |
| Q2 — April to June | [DD-MMM-YYYY] | [System Owner / Business Manager] | Head of IAM |
| Q3 — July to September | [DD-MMM-YYYY] | [System Owner / Business Manager] | Head of IAM |
| Q4 — October to December | [DD-MMM-YYYY] | [System Owner / Business Manager] | Head of IAM |

### 5.2 Review Steps

1. **Initiation:** IAM team extracts a current snapshot of all access rights from identity systems and distributes to designated reviewers [X] days before the review deadline.
2. **Business Certification:** Reviewers confirm whether each access entry remains appropriate for the user's current role and business need.
3. **Outcome Recording:** Each entry is marked Certified, Modified, or Revoked in the register. Reviewer name and date are recorded.
4. **Remediation:** Revoked or modified access is actioned by the IAM team within [X] business days of the review outcome.
5. **Escalation:** Reviewers who do not complete certification within the deadline are escalated to the CISO.
6. **Sign-Off:** Head of IAM certifies completion of the quarterly review cycle and records the sign-off date.
7. **Reporting:** Summary review metrics are reported to the [Governance / Risk Committee] within [X] days of cycle completion.

### 5.3 Access Revocation SLAs

| Trigger | SLA |
|---|---|
| Employee termination (voluntary) | Within [1] business day |
| Employee termination (involuntary / dismissal) | Immediate (same day) |
| Role change / transfer | Within [5] business days |
| Contractor engagement end | On or before contract end date |
| Review outcome: Revoked | Within [3] business days |
| Security incident — account compromise | Immediate (within [4] hours) |

---

## 6. Roles and Responsibilities

*This RACI table defines accountability for maintaining, reviewing, and governing this register. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Head of IAM | IAM Team | System Owner | Business Manager | CISO | Internal Audit | NACSA (External) |
|---|---|---|---|---|---|---|---|
| Maintain register accuracy and completeness | A | R | C | I | I | I | I |
| Provision new access (update register) | A | R | C | I | I | I | I |
| Revoke access (update register) | A | R | C | I | I | I | I |
| Conduct quarterly access review | C | R | R | R | I | I | I |
| Certify privileged account review | A | R | C | I | C | I | I |
| Approve access exceptions | A | C | C | C | R | I | I |
| Escalate overdue reviews | R | R | I | I | A | I | I |
| Report review metrics to governance | A | R | I | I | C | I | I |
| Respond to NACSA access control inquiries | C | C | C | I | A | C | R |
| Conduct independent audit of register | I | I | I | I | C | R | I |
| Approve register policy and framework | C | I | I | I | A | C | I |

---

## 7. Review and Approval

### 7.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name], [Title] | Initial version — established to meet Act 854, s18 obligations |
| [1.1] | [DD-MMM-YYYY] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [DD-MMM-YYYY] | [Author Name], [Title] | [Description of major revision] |

### 7.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Identity & Access Management | [Name] | [Signature] | [DD-MMM-YYYY] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [DD-MMM-YYYY] |
| Chief Information Officer (CIO) / IT Head | [Name] | [Signature] | [DD-MMM-YYYY] |
| [Data Protection Officer (DPO)] | [Name] | [Signature] | [DD-MMM-YYYY] |
| [Internal Audit Representative] | [Name] | [Signature] | [DD-MMM-YYYY] |

---

## 8. References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), **Section 18** | Primary obligation — duties of NCII entity to ensure cybersecurity, including access control management and periodic review of user access rights to NCII systems |
| Cyber Security Act 2024 (Act 854), **Section 18(1)** | Duty to ensure cybersecurity of NCII under ownership or control |
| Cyber Security Act 2024 (Act 854), **Section 18(2)** | Obligation to comply with written directions, codes of practice, and standards issued by NACSA |
| [NACSA National Cyber Security Policy / Directive] | [Title and reference of applicable NACSA code of practice or directive on access control] |
| [NACSA NCII Sector-Specific Standards — Financial Sector] | [Reference if applicable to [Organization Name]] |
| Personal Data Protection Act 2010 (PDPA) | Data protection obligations for personal data accessible via NCII systems |
| [BNM Risk Management in Technology (RMiT) Policy Document] | Paragraph [X.X] — access management requirements for licensed financial institutions |
| ISO/IEC 27001:2022, **Annex A, Control 5.15** | Access control — managing access rights to information and systems |
| ISO/IEC 27001:2022, **Annex A, Control 8.2** | Privileged access rights |
| ISO/IEC 27001:2022, **Annex A, Control 5.18** | Access rights — provisioning, review, and revocation |
| NIST SP 800-53 Rev. 5, **AC-2** | Account management |
| NIST SP 800-53 Rev. 5, **AC-6** | Least privilege |
| NIST SP 800-53 Rev. 5, **AC-17** | Remote access (if applicable) |

---

## 9. Appendices

### Appendix A — Role Catalogue

*This appendix defines all approved access roles mapped to NCII systems. Each role definition must specify its intended business purpose, permitted permissions, and the approval authority required for assignment.*

| Role ID | Role Name | System / Application | Permissions | Business Purpose | Approval Authority | Date Defined | Status |
|---|---|---|---|---|---|---|---|
| ROLE-[001] | [Role Name, e.g., Read-Only Analyst] | [System Name] | Read | [Business justification] | [Approver Role] | [DD-MMM-YYYY] | Active |
| ROLE-[002] | [Role Name, e.g., Operations Engineer] | [System Name] | Read / Write | [Business justification] | [Approver Role] | [DD-MMM-YYYY] | Active |
| ROLE-[003] | [Role Name, e.g., System Administrator] | [System Name] | Admin | [Business justification] | CISO + System Owner | [DD-MMM-YYYY] | Active |
| ROLE-[004] | [Role Name, e.g., DBA] | [System Name] | Full Control (DB only) | [Business justification] | CISO + Data Owner | [DD-MMM-YYYY] | Active |
| | | | | | | | |

---

### Appendix B — Privileged Account Exception Register

*This appendix records all exceptions to the privileged account policy (e.g., shared accounts, accounts without PAM coverage, accounts without MFA). Each exception must be approved by the CISO and have a defined remediation plan.*

| Exception ID | Account / Record ID | Exception Description | Risk Assessment | Approved By | Approval Date | Remediation Plan | Target Remediation Date | Status |
|---|---|---|---|---|---|---|---|---|
| EXC-[YYYY]-[001] | [Account ID] | [Description of exception, e.g., shared admin account required for legacy system] | [High / Medium / Low] | [CISO Name] | [DD-MMM-YYYY] | [Planned remediation steps] | [DD-MMM-YYYY] | Open |
| EXC-[YYYY]-[002] | [Account ID] | [Description] | [Risk Level] | [CISO Name] | [DD-MMM-YYYY] | [Steps] | [DD-MMM-YYYY] | In Progress |
| | | | | | | | | |

---

### Appendix C — Access Review Completion Log

*This appendix records the completion status of each quarterly access review cycle, providing a historical audit trail of review governance.*

| Review Cycle | Review Period | Initiation Date | Completion Date | Total Records Reviewed | Certified | Modified | Revoked | Pending / Overdue | Completion Rate | Signed Off By | Sign-Off Date |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Q[X]-[YYYY] | [Start] to [End] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Number] | [Number] | [Number] | [Number] | [Number] | [%] | [Head of IAM Name] | [DD-MMM-YYYY] |
| Q[X]-[YYYY] | [Start] to [End] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Number] | [Number] | [Number] | [Number] | [Number] | [%] | [Head of IAM Name] | [DD-MMM-YYYY] |
| | | | | | | | | | | | |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| Access Rights | Permissions granted to a user, account, or process to interact with a system, application, or data asset |
| NCII | National Critical Information Infrastructure — as designated under the Cyber Security Act 2024 |
| NACSA | National Cyber Security Agency — the national authority responsible for cybersecurity regulation under Act 854 |
| Privileged Account | An account with elevated permissions beyond standard user access, including administrative, root, DBA, and service accounts with broad system rights |
| PAM | Privileged Access Management — tools and processes used to control and monitor privileged account usage |
| Least Privilege | The principle that a user or account should be granted only the minimum access rights necessary to perform their function |
| Access Certification | The formal periodic process by which business owners review and confirm (or revoke) the appropriateness of existing access rights |
| JML | Joiner-Mover-Leaver — the process governing access changes throughout an employee's lifecycle |
| RACI | Responsible, Accountable, Consulted, Informed — a framework for defining roles in a process |
| Service Account | A non-human account used by applications, scripts, or automated processes to access systems |
| IAM | Identity and Access Management |
| MFA | Multi-Factor Authentication |

---

*End of Document*

---

> **Document Control Notice:** This register contains information classified as **Confidential**. Access is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure may constitute a breach of the Cyber Security Act 2024 and organizational information security policy. All printed copies are uncontrolled. The current version is maintained in [Document Management System / IAM Platform].