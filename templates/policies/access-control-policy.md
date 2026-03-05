# Access Control Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organisation** | [Organisation Name] |
| **Department** | [Department Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organisation Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of the Cyber Security Act 2024 (Act 854), the Personal Data Protection Act 2010, and [Organisation Name]'s information security policies.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Least Privilege Principle](#5-least-privilege-principle)
6. [Multi-Factor Authentication Requirements for NCII Systems](#6-multi-factor-authentication-requirements-for-ncii-systems)
7. [Account Lifecycle Management](#7-account-lifecycle-management)
8. [Privileged Access Management](#8-privileged-access-management)
9. [Remote Access Controls](#9-remote-access-controls)
10. [Access Review Frequency](#10-access-review-frequency)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Policy Compliance and Enforcement](#12-policy-compliance-and-enforcement)
13. [Exceptions Management](#13-exceptions-management)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*This section should clearly articulate why this policy exists, the risk it mitigates, and its strategic alignment with organisational security objectives and Malaysian regulatory obligations. Reference the Cyber Security Act 2024 explicitly.*

This Access Control Policy establishes the principles, requirements, and responsibilities governing the management of access to information systems, data, and physical resources within [Organisation Name]. The policy ensures that access to National Critical Information Infrastructure (NCII) systems is granted on a need-to-know and least-privilege basis, protecting the confidentiality, integrity, and availability of critical systems and data.

This policy is established in accordance with **Section 18** and **Section 24** of the **Cyber Security Act 2024 (Act 854)**, which impose obligations on NCII sector leads and NCII entities to implement and maintain adequate cyber security measures commensurate with the nature and sensitivity of the systems operated.

The objectives of this policy are to:

- Ensure only authorised individuals are granted access to [Organisation Name]'s systems, applications, and data.
- Enforce the principle of least privilege across all user classes.
- Mandate multi-factor authentication for access to NCII-designated systems.
- Define and govern the full lifecycle of user accounts from provisioning to deprovisioning.
- Establish controls for privileged and administrative access.
- Govern secure remote access to organisational systems.
- Specify minimum frequencies for periodic access reviews and recertification.

---

## 2. Scope

*Define precisely which systems, environments, entities, personnel, and third parties are subject to this policy. Be explicit about NCII system boundaries and any carve-outs.*

### 2.1 Applicability

This policy applies to:

- **All personnel** of [Organisation Name], including permanent employees, contractors, consultants, temporary staff, and secondees.
- **Third-party vendors and service providers** who are granted access to [Organisation Name]'s systems or facilities.
- **All information systems** owned, operated, or managed by [Organisation Name], with particular emphasis on systems designated as **National Critical Information Infrastructure (NCII)** under the Cyber Security Act 2024.
- **All environments**, including production, staging, development, test, and disaster recovery environments.
- **All access modalities**, including physical access, logical (network and application) access, remote access, and privileged access.

### 2.2 NCII Systems in Scope

*List or reference the register of systems formally designated as NCII under the organisation's NCII asset inventory. If a separate NCII asset register exists, cross-reference it here.*

| System / Application | NCII Designation | Criticality | Custodian |
|---|---|---|---|
| [System Name 1] | [Yes / No] | [Critical / High / Medium] | [System Owner Name] |
| [System Name 2] | [Yes / No] | [Critical / High / Medium] | [System Owner Name] |
| [System Name 3] | [Yes / No] | [Critical / High / Medium] | [System Owner Name] |
| [System Name 4] | [Yes / No] | [Critical / High / Medium] | [System Owner Name] |

*Refer to [Organisation Name]'s NCII Asset Register [Document ID / Reference] for the complete inventory of designated NCII systems.*

### 2.3 Out of Scope

The following are explicitly excluded from this policy unless otherwise specified:

- [List any excluded systems, environments, or third-party hosted platforms with justification]
- Personal devices not enrolled in [Organisation Name]'s Mobile Device Management (MDM) solution, unless accessing corporate systems via approved remote access methods.

---

## 3. Regulatory and Policy Context

*This section situates the policy within the Malaysian regulatory landscape and the organisation's internal policy hierarchy. Ensure all cited references remain current.*

### 3.1 Regulatory Framework

This policy has been developed to fulfil obligations arising from the following legislation, regulations, and regulatory guidelines:

| Instrument | Issuing Authority | Relevant Provisions | Obligation |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | National Cyber Security Agency (NACSA) | Section 18, Section 24 | Mandatory cyber security measures for NCII entities |
| Personal Data Protection Act 2010 (Act 709) | Department of Personal Data Protection (JPDP) | Sections 9–10 (Security Principle) | Protection of personal data through access controls |
| [BNM Risk Management in Technology (RMiT) Policy] | Bank Negara Malaysia (BNM) | [Applicable Paragraphs] | [Applicable to licensed financial institutions] |
| [Applicable Sector-Specific Regulation] | [Regulator] | [Section/Paragraph] | [Obligation summary] |

### 3.2 Internal Policy Hierarchy

This policy operates within [Organisation Name]'s information security policy framework:

- **Parent Policy:** [Information Security Policy — Document ID]
- **Supporting Standards:** [Access Control Standard — Document ID], [Identity and Access Management Standard — Document ID]
- **Related Procedures:** [User Provisioning Procedure — Document ID], [Privileged Access Management Procedure — Document ID], [Access Review Procedure — Document ID]
- **Related Guidelines:** [Password Management Guideline — Document ID], [Remote Access Guideline — Document ID]

### 3.3 Alignment with Standards

This policy is aligned with the following internationally recognised standards and frameworks:

- **ISO/IEC 27001:2022** — Control A.5.15 (Access Control), A.5.16 (Identity Management), A.5.17 (Authentication Information), A.5.18 (Access Rights)
- **NIST Special Publication 800-53 Rev. 5** — Access Control (AC) control family
- **CIS Controls v8** — Control 5 (Account Management), Control 6 (Access Control Management)

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used throughout this policy to ensure consistent interpretation by all stakeholders.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Access** | The ability to make use of any information system resource, including reading, writing, modifying, or executing data or systems. |
| **Access Control** | The process of granting or denying specific requests to obtain and use information, and related information processing services. |
| **Account Lifecycle** | The complete set of stages an identity account passes through, from creation and provisioning through active use to deactivation and deletion. |
| **Authorisation** | The granting of rights or permissions to an identity to access specific resources or perform specific actions. |
| **Least Privilege** | The security principle that a user, process, or system should be granted the minimum level of access rights necessary to perform its legitimate function. |
| **Multi-Factor Authentication (MFA)** | An authentication mechanism requiring the presentation of two or more verification factors from different categories: something you know, something you have, or something you are. |
| **National Critical Information Infrastructure (NCII)** | As defined under Section 4 of the Cyber Security Act 2024: a computer or computer system which the disruption or destruction of which would significantly impact the delivery of essential services or cause harm to national security, public safety, or public health. |
| **Privileged Access** | Elevated access rights that allow a user to perform administrative or management functions on systems, applications, or infrastructure beyond standard user access. |
| **Privileged Account** | An account that has been granted elevated access rights, including system administrator accounts, database administrator accounts, service accounts, and emergency (break-glass) accounts. |
| **Remote Access** | Access to [Organisation Name]'s systems and data from locations outside the organisation's controlled network perimeter. |
| **Role-Based Access Control (RBAC)** | An access control model in which access decisions are based on the roles that individual users hold within an organisation. |
| **Separation of Duties (SoD)** | A control mechanism that distributes critical functions among multiple individuals to reduce the risk of error or fraud. |
| **Service Account** | A non-interactive account used by applications, services, or automated processes to access resources. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| IAM | Identity and Access Management |
| IT | Information Technology |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PAM | Privileged Access Management |
| RBAC | Role-Based Access Control |
| SoD | Separation of Duties |
| SSO | Single Sign-On |
| VPN | Virtual Private Network |

---

## 5. Least Privilege Principle

*This section should articulate how the organisation operationalises the least privilege principle across user types, systems, and access modalities. Include specific controls and implementation requirements.*

### 5.1 Policy Statement

[Organisation Name] mandates that all access rights to information systems, applications, networks, and data shall be granted based on the **principle of least privilege**. Access shall be limited to the minimum permissions required for a user, process, or system to perform its legitimate and defined business function. No user shall be granted access beyond what is necessary for their current role.

### 5.2 Implementation Requirements

The following requirements apply to the implementation of least privilege across [Organisation Name]:

#### 5.2.1 Default Deny

- All access to [Organisation Name]'s systems shall default to **deny-all** unless explicitly permitted.
- New accounts shall be provisioned with no access rights by default; access shall be explicitly granted based on documented and approved business justification.

#### 5.2.2 Need-to-Know Access

- Access to sensitive and classified data shall be granted only to individuals with a demonstrated and approved **business need to know**.
- Data classification labels ([Refer to Data Classification Policy — Document ID]) shall be used to determine access entitlement thresholds.

#### 5.2.3 Role-Based Access Control

- [Organisation Name] shall implement **Role-Based Access Control (RBAC)** as the primary access control model for all managed systems.
- Access roles shall be defined based on job functions and documented in a **Role Matrix** maintained by the [IAM Team / IT Department].
- Role definitions shall be reviewed [annually / upon significant organisational change] to ensure they remain accurate and appropriately scoped.

| Role Name | System / Application | Permissions Granted | Business Justification | Role Owner |
|---|---|---|---|---|
| [Role Name] | [System] | [Read / Write / Execute / Admin] | [Justification] | [Owner] |
| [Role Name] | [System] | [Read / Write / Execute / Admin] | [Justification] | [Owner] |
| [Role Name] | [System] | [Read / Write / Execute / Admin] | [Justification] | [Owner] |

#### 5.2.4 Separation of Duties

- **Separation of Duties (SoD)** shall be enforced for all critical and sensitive processes to prevent any single individual from having end-to-end control.
- Conflicting access combinations shall be identified, documented, and either technically prevented or subject to compensating controls.

*Document known SoD conflicts below or reference the SoD Conflict Matrix maintained by [Team/Function]:*

| Function A | Function B | Conflict Type | Control Applied |
|---|---|---|---|
| [Function] | [Function] | [Direct Conflict] | [Technical / Compensating] |
| [Function] | [Function] | [Direct Conflict] | [Technical / Compensating] |

#### 5.2.5 Just-In-Time Access

- Where technically feasible, **just-in-time (JIT) access provisioning** shall be used for elevated and privileged access, ensuring elevated rights are available only for the duration required to complete the task.

#### 5.2.6 Application and Service Accounts

- Applications and services shall be assigned dedicated service accounts with the minimum permissions required for their operation.
- Service accounts shall not be shared across multiple applications unless technically unavoidable and subject to documented approval.
- Service accounts shall not be used for interactive human login.

---

## 6. Multi-Factor Authentication Requirements for NCII Systems

*This section must specify mandatory MFA requirements, acceptable MFA methods, exemption criteria, and enforcement mechanisms. Be precise regarding NCII system applicability given the Act 854 obligations under s18 and s24.*

### 6.1 Policy Statement

[Organisation Name] mandates the use of **Multi-Factor Authentication (MFA)** for all access to NCII-designated systems. MFA is a critical control to mitigate the risk of compromised credentials and unauthorised access to systems that underpin essential services.

### 6.2 MFA Scope and Applicability

MFA is **mandatory** for the following access scenarios:

| Access Scenario | MFA Required | Minimum MFA Strength | Notes |
|---|---|---|---|
| Access to NCII-designated systems (all users) | **Yes — Mandatory** | [Phishing-resistant / Standard] | Act 854 s18, s24 obligation |
| Remote access via VPN or remote desktop | **Yes — Mandatory** | [Standard MFA] | All users |
| Access to privileged / administrative accounts | **Yes — Mandatory** | [Phishing-resistant MFA preferred] | PAM tool enforcement |
| Access to cloud management consoles | **Yes — Mandatory** | [Standard MFA] | |
| Access to email and collaboration platforms | **Yes — Mandatory** | [Standard MFA] | |
| Access to HR and financial systems | **Yes — Mandatory** | [Standard MFA] | |
| Standard on-premises access (non-NCII) | [Yes / No — as determined] | [As applicable] | Risk-based determination |

### 6.3 Acceptable MFA Methods

The following MFA methods are approved for use at [Organisation Name], listed in order of preference:

| Priority | MFA Method | Method Category | Approved for NCII Systems | Notes |
|---|---|---|---|---|
| 1 | FIDO2 / WebAuthn Hardware Security Key | Possession (phishing-resistant) | Yes | Preferred for privileged access |
| 2 | Certificate-based Authentication (PKI Smart Card) | Possession (phishing-resistant) | Yes | |
| 3 | TOTP Authenticator Application (e.g., Microsoft Authenticator, Google Authenticator) | Possession | Yes | |
| 4 | Push Notification via Authenticator App | Possession | Yes | Number matching must be enabled |
| 5 | SMS One-Time Password (OTP) | Possession | **Conditional** | Not recommended; permitted only where alternatives are unavailable; subject to CISO approval |
| 6 | Email OTP | Possession | **Conditional** | Not recommended for NCII; requires written approval |
| — | Voice Call OTP | Possession | **Not Approved** | Deprecated |
| — | Security Questions | Knowledge only | **Not Approved** | Not a valid second factor |

### 6.4 MFA Enrolment Requirements

- All users accessing systems within MFA scope shall enrol at least **[two (2)] MFA methods** to ensure continuity of access in case of device loss.
- MFA enrolment shall be completed within **[X] business days** of account provisioning.
- MFA recovery options shall be reviewed and verified during the annual access review cycle.
- Self-service MFA re-enrolment shall require identity re-verification through [Identity Verification Process — describe process].

### 6.5 MFA Exemptions

*MFA exemptions should be rare, formally documented, and time-limited. Any exemption for NCII system access must be escalated to the CISO and documented.*

- Requests for MFA exemption shall be submitted to the [IT Security Team / CISO Office] using [Form Reference].
- Exemptions for NCII systems require **CISO written approval** and must include a documented compensating control.
- All exemptions are time-limited to a maximum of **[90] days** and must be reviewed before renewal.
- An exemption register shall be maintained by [IT Security Team]:

| Account / System | Exemption Reason | Compensating Control | Approved By | Expiry Date |
|---|---|---|---|---|
| [Account] | [Reason] | [Control] | [CISO] | [Date] |

---

## 7. Account Lifecycle Management

*This section governs the complete lifecycle of all user accounts from provisioning through to deprovisioning. It should align with HR processes to ensure timely action on joiner, mover, and leaver events.*

### 7.1 Policy Statement

[Organisation Name] shall manage all user accounts through a defined and controlled lifecycle, ensuring that access rights remain aligned with the current role and employment status of each individual. Accounts shall be provisioned promptly on commencement, modified accurately on role change, and deprovisioned without delay on departure or disengagement.

### 7.2 Account Types

| Account Type | Description | Managed By |
|---|---|---|
| Standard User Account | Regular business user account with role-based access | [IT / IAM Team] |
| Privileged / Administrator Account | Elevated-rights account for IT administration | [IT Security / IAM Team] |
| Service Account | Non-interactive account used by applications and services | [IT / System Owner] |
| Guest / Temporary Account | Time-limited account for visitors, contractors, or temporary access | [IT / IAM Team] |
| Emergency (Break-Glass) Account | Pre-provisioned emergency access account for crisis scenarios | [CISO / IT Security] |
| Shared Account | Account shared among multiple users (to be minimised) | [IT / System Owner] |

### 7.3 Joiners — Account Provisioning

*Describe the process for provisioning new accounts when a user joins the organisation. Specify timelines, approvals, and documentation requirements.*

- User access provisioning shall be triggered by an approved request from [HR / Line Manager] upon confirmed employment commencement.
- Access requests shall be submitted via [Access Management System / Ticketing System] and must include:
  - User's full name, employee ID, and department
  - Role or job function
  - Systems and applications requiring access
  - Authorised approver (Line Manager or System Owner)
  - Start date
- Access shall be provisioned within **[X] business days** of receiving a complete, approved request.
- New accounts shall be provisioned with the minimum access required for the user's role, as defined in the Role Matrix.
- Users shall be required to complete mandatory security awareness training before system access is activated, or within **[X] days** of activation.

**Provisioning Approval Matrix:**

| Access Type | First-Level Approver | Second-Level Approver |
|---|---|---|
| Standard user access | Line Manager | System Owner |
| Privileged / admin access | Line Manager | CISO |
| NCII system access | Line Manager + System Owner | CISO |
| Emergency (break-glass) account | CISO | [CIO / CEO] |

### 7.4 Movers — Access Modification on Role Change

*Define how access rights are updated when an employee changes roles, departments, or responsibilities.*

- Upon an internal transfer or promotion, the employee's former Line Manager and new Line Manager shall notify [HR / IT Security] within **[X] business days** of the effective date.
- Access rights associated with the former role shall be **revoked within [X] business days** of the role change, unless explicitly re-approved for retention.
- New access rights appropriate to the new role shall be provisioned upon receipt of an approved access request from the new Line Manager.
- A **role change access review** shall be conducted to identify and revoke any accumulated access that is no longer required (access creep remediation).
- Significant role changes (e.g., from non-privileged to privileged access) shall require CISO approval.

### 7.5 Leavers — Account Deprovisioning

*This is a high-risk process. Timelines must be strict, particularly for NCII system access. Define the process for voluntary leavers, involuntary terminations, and contractor offboarding.*

- [HR] shall notify [IT Security / IAM Team] of all departing personnel no later than **[X] business days** prior to the effective departure date for planned departures.
- For unplanned or involuntary terminations, [HR] shall notify [IT Security] **immediately upon the decision being made**, and access shall be revoked **within [X] hours**.

| Departure Type | Notification Timeline | Deprovisioning Deadline |
|---|---|---|
| Planned resignation / retirement | [5] business days prior to last day | End of last working day |
| Involuntary termination | Immediate upon decision | Within [2] hours |
| End of contract (contractor / consultant) | [5] business days prior to contract end | End of last working day |
| NCII system access (all departure types) | Immediate upon confirmation | Within [1] hour |

- Deprovisioning actions shall include:
  - Disabling the Active Directory / Identity Provider account.
  - Revoking all application and system access.
  - Revoking all digital certificates and tokens.
  - Recovering corporate assets, including hardware tokens and smart cards.
  - Archiving or transferring data owned by the departing user in accordance with data retention requirements.
  - Changing any shared passwords or credentials the user may have had knowledge of.
- A deprovisioning checklist shall be completed and retained for audit purposes.

### 7.6 Account Dormancy and Suspension

- User accounts with no login activity for **[30] calendar days** shall be flagged for review.
- Accounts with no login activity for **[60] calendar days** shall be automatically **disabled**.
- Disabled accounts with no activity for **[90] calendar days** shall be **deleted** or archived in accordance with [Organisation Name]'s data retention policy.
- Exceptions (e.g., accounts for staff on extended leave) require documented Line Manager approval and shall be reviewed monthly.

### 7.7 Shared and Generic Accounts

- Shared and generic accounts are **strongly discouraged** and shall be used only where technically unavoidable.
- Any request to create a shared account must be approved by the **CISO** and must include documented justification and compensating controls (e.g., session recording, access logging).
- All shared accounts shall be registered in a Shared Account Register and reviewed quarterly.
- Shared account passwords shall be changed immediately upon any user who had knowledge of the credentials leaving the organisation or changing roles.

---

## 8. Privileged Access Management

*This is a high-risk area requiring stringent controls. Define requirements for all forms of privileged access including administrative, root, database, and emergency access.*

### 8.1 Policy Statement

Privileged access represents the highest risk category of access within [Organisation Name]'s information security framework. The compromise of a privileged account can result in total loss of system integrity and confidentiality. [Organisation Name] shall implement a comprehensive **Privileged Access Management (PAM)** programme to control, monitor, and audit all privileged access to NCII and other critical systems.

### 8.2 Identification and Classification of Privileged Accounts

*Maintain a complete, current register of all privileged accounts. This register is a key audit artefact.*

All privileged accounts shall be formally identified and classified. A **Privileged Account Register** shall be maintained by [IT Security / IAM Team] and reviewed quarterly.

| Account Classification | Description | Examples |
|---|---|---|
| **Domain / Directory Administrator** | Accounts with administrative control over the identity directory | Active Directory Domain Admin |
| **Local Administrator** | Accounts with administrative rights on individual endpoints or servers | Local admin accounts on servers |
| **Database Administrator (DBA)** | Accounts with full administrative control over databases | DBA accounts, SA accounts |
| **Network Administrator** | Accounts with administrative access to network infrastructure | Router / switch admin accounts |
| **Cloud Platform Administrator** | Accounts with elevated rights in cloud environments | AWS root, Azure Global Admin |
| **Security Tool Administrator** | Accounts with administrative access to security platforms | SIEM admin, EDR admin |
| **Application Administrator** | Accounts with elevated rights within business applications | ERP admin, banking system admin |
| **Emergency (Break-Glass) Account** | Pre-provisioned accounts for emergency recovery scenarios | Named break-glass accounts |
| **Service / Application Account** | Non-interactive accounts used by systems and automated processes | Service accounts, API keys |

### 8.3 Privileged Access Controls

The following controls are **mandatory** for all privileged accounts:

#### 8.3.1 Dedicated Privileged Accounts

- Privileged users shall maintain **separate accounts** for privileged activities and standard day-to-day work.
- Privileged accounts shall not be used for general activities such as email, web browsing, or document editing.
- Privileged accounts shall follow a naming convention that identifies them as privileged (e.g., `adm-[username]`).

#### 8.3.2 Privileged Access Workstations (PAW)

- Administrative access to NCII systems and Tier 0 / Tier 1 assets shall be performed exclusively from designated **Privileged Access Workstations (PAWs)**.
- PAWs shall be hardened in accordance with [Organisation Name]'s Server and Endpoint Hardening Standard [Document ID].
- PAWs shall not be used for general-purpose computing activities.

#### 8.3.3 PAM Tooling

- [Organisation Name] shall deploy and maintain a **PAM solution** ([PAM Tool Name, e.g., CyberArk / BeyondTrust / Delinea]) to manage privileged credentials and sessions.
- All privileged access to NCII systems shall be brokered through the PAM solution.
- The PAM solution shall provide:
  - Automated credential vaulting and rotation.
  - Session recording and monitoring for all privileged sessions.
  - Just-in-time (JIT) access provisioning.
  - Full audit trail of privileged account usage.

#### 8.3.4 Credential Management

- Privileged account passwords shall be managed by the PAM vault and shall not be known to individual users except at the point of checkout.
- Password checkout periods shall be time-limited to a maximum of **[X] hours** for interactive sessions.
- Privileged account credentials shall be automatically rotated by the PAM tool:
  - Upon check-in after each use.
  - At a minimum interval of **[X] days** even if not checked out.
  - Immediately upon suspected compromise.

#### 8.3.5 Session Monitoring and Recording

- All privileged sessions on NCII systems shall be **recorded** by the PAM solution.
- Session recordings shall be retained for a minimum of **[12] months** and for **[36] months** for NCII systems.
- The [IT Security / SOC] team shall conduct periodic review of privileged session recordings.
- Alerts shall be configured for anomalous privileged session activity.

### 8.4 Emergency (Break-Glass) Access

*Break-glass accounts enable access during emergency scenarios when normal access mechanisms are unavailable. They must be tightly controlled and audited.*

- [Organisation Name] shall maintain pre-provisioned **break-glass accounts** for use only in genuine emergency scenarios where normal access mechanisms have failed.
- Break-glass account credentials shall be stored in a physically secured location (e.g., sealed envelope in a secured safe) and in the PAM vault with access restricted to [CISO / designated emergency contacts].
- Use of a break-glass account shall **automatically trigger an alert** to the [SOC / CISO / IT Security].
- Every use of a break-glass account shall be:
  - Documented with justification within **[X] hours** of use.
  - Subject to a post-incident review within **[X] business days**.
  - Reported to the CISO.
- Break-glass credentials shall be rotated **immediately after each use**.

| System | Break-Glass Account Name | Custodian | Storage Location | Last Rotation Date |
|---|---|---|---|---|
| [System] | [Account Name] | [Name / Role] | [Location] | [Date] |

---

## 9. Remote Access Controls

*Remote access expands the attack surface significantly. Define permitted methods, security requirements, and monitoring obligations. This is particularly relevant for NCII systems under Act 854.*

### 9.1 Policy Statement

Remote access to [Organisation Name]'s systems and data introduces additional security risks that must be mitigated through appropriate technical and procedural controls. All remote access shall be approved, secured, monitored, and limited to the minimum access required for legitimate business purposes.

### 9.2 Approved Remote Access Methods

Only the following remote access methods are approved for use. All other methods are prohibited unless specifically approved by the CISO.

| Method | Approved Users | Access Permitted | MFA Required | Notes |
|---|---|---|---|---|
| Corporate VPN ([VPN Solution Name]) | All staff | Internal systems and NCII systems (as authorised) | Yes — Mandatory | Split tunnelling policy to be defined |
| Privileged Remote Access via PAM | IT Administrators, System Administrators | NCII systems, servers, infrastructure | Yes — Mandatory (phishing-resistant preferred) | PAM-brokered sessions only |
| Remote Desktop Gateway / Bastion Host | IT staff, privileged users | Servers, admin interfaces | Yes — Mandatory | No direct RDP to production servers |
| Third-Party Vendor Remote Access | Approved vendors | Specified systems only | Yes — Mandatory | Time-limited; session recorded |
| Cloud Management Console | Authorised cloud administrators | Cloud environments | Yes — Mandatory | |

### 9.3 VPN Requirements

- All VPN access shall be authenticated using MFA in accordance with Section 6 of this policy.
- VPN client software shall be maintained at an approved and current version, as defined by [IT Department].
- Devices connecting via VPN must comply with [Organisation Name]'s endpoint security requirements, including:
  - Current, approved operating system version.
  - Endpoint Detection and Response (EDR) agent installed and active.
  - Full-disk encryption enabled.
  - Current antivirus / anti-malware signatures.
- Devices failing endpoint compliance checks shall be **denied VPN access** or quarantined to a restricted network segment.
- Split tunnelling shall be [disabled / restricted] to ensure that all traffic from connected devices routes through [Organisation Name]'s security controls.

### 9.4 Third-Party and Vendor Remote Access

*Third-party remote access is a high-risk vector and must be tightly controlled, particularly for NCII systems.*

- Remote access for third-party vendors and service providers shall be:
  - **Formally requested** and approved by the System Owner and [IT Security].
  - **Time-limited** to the minimum period required (maximum **[X] days** per approved session).
  - **Restricted** to only the specific systems required for the vendor's scope of work.
  - **Session-recorded** via the PAM solution for NCII systems.
  - **Monitored** by [Organisation Name]'s [IT Security / SOC] team in real time or near-real time.
- Third-party remote access accounts shall be deprovisioned immediately upon completion of the engagement or expiry of the approved access window.
- All third-party remote access agreements shall reference [Organisation Name]'s third-party information security requirements as set out in [Third-Party Risk Management Policy — Document ID].

| Vendor Name | System(s) Accessed | Access Purpose | Approved By | Access Window | Session Recording |
|---|---|---|---|---|---|
| [Vendor Name] | [Systems] | [Purpose] | [Approver] | [Start] – [End] | [Yes / No] |

### 9.5 Remote Access Prohibitions

The following activities are **prohibited** during remote access sessions:

- Accessing [Organisation Name]'s systems from **public or unsecured Wi-Fi networks** without the use of the approved corporate VPN.
- Connecting to [Organisation Name]'s systems from devices not meeting the endpoint compliance requirements in Section 9.3.
- Using remote access for purposes other than those approved and documented in the access request.
- Leaving remote access sessions unattended without engaging screen lock or session timeout controls.
- Using personal accounts or personal cloud storage to handle [Organisation Name] data during remote sessions.

### 9.6 Remote Access Monitoring

- All remote access sessions to NCII systems shall be logged and monitored by [SOC / IT Security].
- Session logs shall be retained for a minimum of **[12] months** ([36] months for NCII system access).
- Anomalous remote access activity (unusual hours, unusual geolocation, high data volume) shall trigger automated alerts to [SOC / IT Security].
- Remote access session metrics shall be reported to the CISO [monthly / quarterly].

---

## 10. Access Review Frequency

*Access reviews (recertification) are a critical audit control. Define who reviews what, how often, and what happens when inappropriate access is identified.*

### 10.1 Policy Statement

[Organisation Name] shall conduct periodic reviews of all access rights to ensure they remain appropriate, accurate, and aligned with current roles and business needs. Access rights that are no longer required shall be revoked promptly upon identification. Access review results constitute key evidence for regulatory compliance under the Cyber Security Act 2024.

### 10.2 Access Review Schedule

| Access Category | Review Frequency | Reviewer | Approver | Notes |
|---|---|---|---|---|
| NCII system access (all users) | **Quarterly** | System Owner | CISO | Act 854 s18 obligation |
| Privileged / Administrator access | **Quarterly** | IT Security | CISO | |
| Standard user access (non-NCII) | **Semi-annually** | Line Manager | System Owner | |
| Service and application accounts | **Semi-annually** | System Owner | IT Security | |
| Third-party and vendor access | **Quarterly** | System Owner | IT Security | |
| Shared and generic accounts | **Quarterly** | IT Security | CISO | |
| Emergency (break-glass) accounts | After each use + **Annually** | IT Security | CISO | |
| Remote access entitlements | **Quarterly** | IT Security | CISO | |
| Dormant / inactive accounts | **Monthly** (automated) | IT Security (automated tool) | — | Auto-disabled per Section 7.6 |

### 10.3 Access Review Process

1. **Initiation:** [IT Security / IAM Team] initiates the access review cycle and distributes access reports to designated reviewers via [Access Management Tool / email].
2. **Review:** Reviewers examine all access entitlements assigned to users within their scope, certifying each entitlement as:
   - **Approve** — Access is appropriate and required.
   - **Revoke** — Access is no longer required; to be removed.
   - **Modify** — Access requires adjustment.
3. **Action:** [IT Security / IAM Team] implements all revocation and modification actions within **[5] business days** of the review decision.
4. **Escalation:** If a reviewer fails to complete the review within **[10] business days** of initiation, the review shall be escalated to the reviewer's Line Manager and the CISO shall be notified.
5. **Non-Response:** Accounts for which no review decision is received within **[15] business days** shall be **automatically disabled** pending review completion.
6. **Documentation:** Completed access review records (including reviewer, date, decisions, and actions taken) shall be retained for a minimum of **[3] years** as audit evidence.
7. **Reporting:** Access review completion rates and findings shall be reported to the [IT Security Steering Committee / CISO] within **[5] business days** of cycle completion.

### 10.4 Access Review Metrics and Reporting

*Define the key performance indicators used to track the effectiveness of the access review programme.*

| Metric | Description | Target | Reporting Frequency |
|---|---|---|---|
| Access Review Completion Rate | Percentage of access reviews completed within the defined window | ≥ [95]% | Quarterly |
| Excessive Access Findings | Number of access entitlements revoked per review cycle | Trend tracking | Quarterly |
| Overdue Reviews | Number of reviews not completed within the required window | 0 | Quarterly |
| Time to Revocation | Average time from review decision to access revocation | ≤ [5] business days | Quarterly |
| Privileged Access Review Completion | Completion rate for privileged account reviews | [100]% | Quarterly |

---

## 11. Roles and Responsibilities

*Clearly define accountability for each aspect of this policy. The RACI model ensures no ambiguity about who must act, who must approve, who must be consulted, and who must be informed.*

### 11.1 RACI Matrix

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | IT Security Team | IAM / IT Team | System Owner | Line Manager | HR | Internal Audit | User |
|---|---|---|---|---|---|---|---|---|
| Policy ownership and maintenance | A | R | C | C | — | I | C | — |
| Access provisioning (standard users) | I | C | R | A | C | C | — | — |
| Access provisioning (privileged users) | A | R | R | C | C | — | — | — |
| Access provisioning (NCII systems) | A | R | R | A | C | — | — | — |
| MFA enrolment and management | I | A | R | — | — | — | — | R |
| Access deprovisioning (leavers) | I | C | R | I | A | A | — | — |
| Account lifecycle management | I | A | R | C | C | C | — | — |
| Privileged access management programme | A | R | R | C | — | — | I | — |
| PAM tool administration | C | A | R | — | — | — | — | — |
| Remote access approval | A | C | R | C | C | — | — | — |
| Remote access monitoring | A | R | C | — | — | — | — | — |
| Access review (standard access) | I | C | I | A | R | — | — | — |
| Access review (NCII / privileged access) | A | R | C | C | — | — | — | — |
| SoD conflict identification | A | R | C | C | — | — | C | — |
| Policy exception approval | A | C | — | C | — | — | — | — |
| Compliance reporting to NACSA | A | R | C | — | — | — | — | — |
| Security awareness training (access) | A | R | C | — | I | C | — | R |
| Audit evidence provision | A | R | R | R | — | — | A | — |
| Incident response (access-related) | A | R | R | C | I | I | — | — |

### 11.2 Key Roles — Descriptions

| Role | Responsibilities under this Policy |
|---|---|
| **Chief Information Security Officer (CISO)** | Policy owner; accountable for all aspects of access control governance; approves privileged and NCII access; approves exceptions; reports to regulators. |
| **IT Security Team** | Implements and monitors access controls; conducts access reviews for privileged and NCII systems; manages PAM tooling; monitors remote access; responds to access-related incidents. |
| **IAM / IT Team** | Operationally provisions and deprovisions accounts; manages identity directory; enforces role-based access controls; administers MFA; maintains account registers. |
| **System Owner** | Accountable for access to their designated system(s); approves access requests; conducts or delegates access reviews; maintains system-specific access records. |
| **Line Manager** | Initiates access requests for direct reports; approves access entitlements; notifies HR and IT of role changes and departures; conducts standard access reviews. |
| **HR** | Notifies IT of joiners, movers, and leavers in a timely manner; coordinates the return of assets upon departure; supports identity verification. |
| **Internal Audit** | Independently reviews compliance with this policy; tests the effectiveness of access controls; reports findings to the Audit Committee. |
| **All Users** | Comply with this policy; do not share credentials; report suspected unauthorised access; complete MFA enrolment; complete mandatory security awareness training. |

---

## 12. Policy Compliance and Enforcement

*This section should make clear the consequences of non-compliance and the monitoring approach used to detect violations.*

### 12.1 Monitoring and Assurance

[Organisation Name] shall implement continuous and periodic monitoring activities to assess compliance with this policy:

- **Automated technical controls** shall enforce access control requirements where technically feasible (e.g., MFA enforcement via Conditional Access, PAM session gating, dormant account disablement).
- **Access logs** for NCII systems shall be collected, centralised in [SIEM Solution Name], and monitored for anomalous activity by [SOC / IT Security].
- **Quarterly access review** results shall be reported to the CISO.
- **Annual internal audit** of access control compliance shall be conducted by [Internal Audit / IT Security].
- **Third-party penetration testing** shall include testing of access control effectiveness at a minimum [annually / biannually].

### 12.2 Non-Compliance

Violations of this policy, whether intentional or accidental, will be taken seriously. Depending on the nature and severity of the violation, consequences may include:

| Severity | Example Violations | Consequence |
|---|---|---|
| **Minor** | Failure to complete MFA enrolment within the prescribed period; late completion of access review | Formal reminder; mandatory retraining |
| **Moderate** | Sharing of credentials; accessing systems not required for role; failure to report a leaver in time | Formal warning; escalation to HR; disciplinary action |
| **Serious** | Deliberate circumvention of access controls; accessing systems without authorisation; misuse of privileged access | Disciplinary action up to and including termination; possible legal action |
| **Critical** | Deliberate sabotage or exfiltration of NCII system data; providing access to unauthorised external parties | Termination; referral to law enforcement; regulatory notification |

Non-compliance may also be reported to **NACSA** as required under the Cyber Security Act 2024 (Act 854).

---

## 13. Exceptions Management

*Every policy requires an exception process. This must be formal, documented, and time-bounded — especially for NCII system exceptions under Act 854.*

### 13.1 Exception Process

Exceptions to any requirement in this policy shall follow the process below:

1. The **requesting party** (typically Line Manager or System Owner) submits an exception request using [Exception Request Form — Reference / Link], documenting:
   - The specific policy requirement from which an exception is sought.
   - The business justification for the exception.
   - The proposed compensating control(s) to mitigate the associated risk.
   - The requested duration of the exception.
2. The exception is reviewed by **IT Security** for risk assessment and completeness.
3. Exceptions are **approved or rejected by the CISO**. Exceptions relating to NCII systems are additionally noted by [Executive Sponsor / Risk Committee].
4. Approved exceptions are recorded in the **Policy Exception Register** (maintained by IT Security) and communicated to relevant parties.
5. All exceptions are time-limited to a maximum of **[90] calendar days** and must be formally renewed if the business need persists.
6. The exception register is reviewed by the CISO [monthly / quarterly] and reported to the [IT Security Steering Committee].

### 13.2 Exception Register

| Exception ID | Policy Section | Requesting Party | System / Scope | Business Justification | Compensating Control | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| EXC-001 | [Section] | [Requester] | [Scope] | [Justification] | [Control] | [CISO] | [Date] | [Date] | [Active / Expired] |

---

## 14. Review and Approval

### 14.1 Policy Review Schedule

This policy shall be reviewed:

- **Annually** from the effective date, as a minimum.
- Upon significant changes to the regulatory environment (e.g., new NACSA directives, amendments to Act 854).
- Upon significant changes to [Organisation Name]'s technology environment or NCII designation status.
- Following any major security incident related to access control.
- As directed by Internal Audit or the CISO.

The CISO is responsible for initiating and managing the review process.

### 14.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description] |
| [2.0] | [Date] | [Author Name] | [Description] |

### 14.3 Approval Sign-Off

By signing below, the approvers confirm that they have reviewed this policy, that it is fit for purpose, and that it is approved for implementation within [Organisation Name].

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Information Officer (CIO) / Head of IT | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) | [Name] | [Signature] | [Date] |
| Chief Executive Officer (CEO) / Managing Director | [Name] | [Signature] | [Date] |
| Head of Internal Audit | [Name] | [Signature] | [Date] |

---

## 15. References

*This section lists all regulatory, standards-based, and internal references cited in this policy.*

### 15.1 Legislation and Regulations

| Reference | Full Title | Relevant Provisions |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | **Section 18** — Cyber security measures for NCII entities; **Section 24** — Obligations of NCII sector lead and NCII entity |
| Act 709 | Personal Data Protection Act 2010 | Section 9 (Security Principle), Section 10 |
| [Act / Policy] | [Full Title] | [Relevant Sections] |

### 15.2 Regulatory Guidelines and Directives

| Reference | Issuing Body | Description |
|---|---|---|
| [NACSA Directive / Guideline Reference] | NACSA | [Description of relevant directive] |
| [BNM RMiT Policy Document Reference] | Bank Negara Malaysia | [Applicable paragraph numbers and topic] |
| [Sector-Specific Guideline] | [Regulator] | [Description] |

### 15.3 Standards and Frameworks

| Standard | Full Title | Applicable Controls |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | A.5.15, A.5.16, A.5.17, A.5.18 |
| ISO/IEC 27002:2022 | Information Security Controls — Guidance | Clauses 5.15–5.18 |
| NIST SP 800-53 Rev. 5 | Security and Privacy Controls for Information Systems and Organisations | AC Control Family |
| NIST SP 800-63B | Digital Identity Guidelines — Authentication and Lifecycle Management | MFA requirements |
| CIS Controls v8 | CIS Critical Security Controls | Control 5, Control 6 |

### 15.4 Internal Documents

| Document ID | Title | Relationship |
|---|---|---|
| [DOC-ID] | Information Security Policy | Parent Policy |
| [DOC-ID] | Identity and Access Management Standard | Supporting Standard |
| [DOC-ID] | Privileged Access Management Procedure | Supporting Procedure |
| [DOC-ID] | User Provisioning and Deprovisioning Procedure | Supporting Procedure |
| [DOC-ID] | Access Review Procedure | Supporting Procedure |
| [DOC-ID] | Remote Access Guideline | Supporting Guideline |
| [DOC-ID] | Password Management Guideline | Supporting Guideline |
| [DOC-ID] | Data Classification Policy | Related Policy |
| [DOC-ID] | Third-Party Risk Management Policy | Related Policy |
| [DOC-ID] | NCII Asset Register | Supporting Register |
| [DOC-ID] | Incident Response Policy | Related Policy |

---

## 16. Appendices

### Appendix A — Access Request Form Template

*This appendix should contain, or reference the location of, the standard form used to request access to [Organisation Name]'s systems. Ensure the form captures all fields necessary for the provisioning workflow described in Section 7.*

**Form Fields (minimum):**

- Requestor Name and Employee ID
- Date of Request
- User Requiring Access (if different from requestor): Name, Employee ID, Department, Job Title
- System(s) / Application(s) for which access is requested
- Access level / Role requested
- Business Justification
- Duration (permanent or time-limited; if time-limited, specify end date)
- Line Manager Name and Approval (signature or electronic approval)
- System Owner Name and Approval (signature or electronic approval)
- CISO Approval (if privileged or NCII system access)
- IT Security / IAM Team Acknowledgement and Action

*[Attach or link to the current version of the Access Request Form: [Form Reference / URL]]*

---

### Appendix B — Access Deprovisioning Checklist

*This appendix provides a standardised checklist to be completed for all leavers to ensure comprehensive and auditable deprovisioning.*

**User Details:**

- User Name: ___________________________
- Employee ID: ___________________________
- Department: ___________________________
- Last Working Day: ___________________________
- Departure Type: [ ] Planned Resignation  [ ] Involuntary Termination  [ ] Contract End  [ ] Other

**Deprovisioning Actions:**

| # | Action | Responsible | Completed Date | Notes |
|---|---|---|---|---|
| 1 | Disable Active Directory / Identity Provider account | IT / IAM Team | | |
| 2 | Revoke all application access | IT / IAM Team | | |
| 3 | Revoke VPN / remote access | IT / IAM Team | | |
| 4 | Disable/revoke MFA tokens and enrolled devices | IT / IAM Team | | |
| 5 | Revoke digital certificates and smart cards | IT / IAM Team | | |
| 6 | Disable privileged accounts (if applicable) | IT Security | | |
| 7 | Rotate shared credentials known to the user | IT Security | | |
| 8 | Recover hardware tokens / smart cards | HR / Line Manager | | |
| 9 | Transfer or archive user data | IT / IAM Team | | |
| 10 | Notify system owners of user departure | IT / IAM Team | | |
| 11 | Confirm NCII system access removed (if applicable) | IT Security | | |
| 12 | Update user account in HR system | HR | | |
| 13 | Complete and file deprovisioning record | IT / IAM Team | | |

**Sign-Off:**

- Completed By: ___________________________ Date: ___________________________
- Verified By (IT Security): ___________________________ Date: ___________________________

---

### Appendix C — Privileged Account Register Template

*Maintain a current, complete register of all privileged accounts as required by Section 8 of this policy. This register is a primary audit artefact and must be reviewed quarterly.*

| Account ID | Account Name | System / Platform | Account Type | Assigned To (if personal) | Business Justification | Managed in PAM (Y/N) | Review Date | Status |
|---|---|---|---|---|---|---|---|---|
| PA-001 | [Account Name] | [System] | [Domain Admin / DBA / etc.] | [Name / Non-Personal] | [Justification] | [Y/N] | [Date] | [Active / Inactive] |

---

### Appendix D — MFA Exception Register Template

*All exceptions to MFA requirements must be formally documented here in accordance with Section 6.5.*

| Exception ID | Account / System | Exception Reason | Compensating Control | Risk Accepted By | Approved By (CISO) | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| MFA-EXC-001 | [Account / System] | [Reason] | [Control] | [Risk Owner] | [CISO Name] | [Date] | [Date] | [Active / Expired] |

---

### Appendix E — Access Review Evidence Template

*Use this template to document the evidence produced during each access review cycle for audit purposes.*

**Review Cycle Details:**

| Field | Details |
|---|---|
| Review Cycle ID | [e.g., ACR-2025-Q1] |
| Review Period | [Start Date] to [End Date] |
| Review Type | [Quarterly NCII / Semi-Annual Standard / Annual] |
| Systems in Scope | [List of systems reviewed] |
| Review Initiated By | [IT Security Team Member] |
| Review Initiated Date | [Date] |
| Review Completed Date | [Date] |
| Total Accounts Reviewed | [Number] |
| Accounts Approved | [Number] |
| Accounts Revoked | [Number] |
| Accounts Modified | [Number] |
| Pending Actions | [Number] |
| Reviewed By | [Reviewer Name(s)] |
| Reported To | [CISO / IT Security Steering Committee] |
| Report Date | [Date] |

---

### Appendix F — Glossary of Access Control Terms

*This appendix provides an extended glossary of technical and regulatory terms for reference by personnel involved in implementing this policy. Supplement as required.*

| Term | Definition |
|---|---|
| **Attribute-Based Access Control (ABAC)** | An access control model in which access decisions are based on attributes of the user, resource, and environment, allowing fine-grained policy enforcement. |
| **Conditional Access** | A policy engine that grants or restricts access based on signals including user identity, device compliance, location, and risk score. |
| **Federation** | The process of linking identity information across multiple systems or organisations, enabling cross-domain authentication (e.g., SAML, OAuth, OpenID Connect). |
| **Identity Governance and Administration (IGA)** | A framework of policies and technologies that manage digital identities and access rights across an organisation's systems. |
| **Just-In-Time (JIT) Access** | An access model in which elevated privileges are provisioned only at the time of need and for the minimum duration required. |
| **Orphaned Account** | An account that is no longer associated with a current employee, contractor, or system but has not been deprovisioned. |
| **Privileged Access Workstation (PAW)** | A dedicated, hardened workstation used exclusively for performing privileged administrative tasks. |
| **SAML** | Security Assertion Markup Language; an open standard for exchanging authentication and authorisation data between identity providers and service providers. |
| **Zero Trust Architecture** | A security model that assumes no implicit trust for any user, device, or network segment; all access requests must be continuously verified. |

---

*End of Document*

---

**Document Control Notice**

This document is subject to version control. The master copy of this document is maintained by [Document Control / IT Security Team] at [Document Repository Location / URL]. Printed copies are considered uncontrolled. Always verify you are reading the current version before relying on this document.

**[Organisation Name] | Access Control Policy | Version 1.0 | Confidential**