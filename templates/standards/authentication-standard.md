# Authentication Standard (Multi-Factor Authentication)

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
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Status** | [Draft / Under Review / Approved] |

---

> **Regulatory Alignment:** This standard supports compliance with the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 24, governing the protection of National Critical Information Infrastructure (NCII) systems and the obligations of NCII sector leads and entities.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Password Complexity Requirements](#4-password-complexity-requirements)
5. [Multi-Factor Authentication (MFA) Methods and Requirements](#5-multi-factor-authentication-mfa-methods-and-requirements)
6. [Privileged Account Authentication](#6-privileged-account-authentication)
7. [Service Account Management](#7-service-account-management)
8. [Session Timeout Settings](#8-session-timeout-settings)
9. [Failed Authentication Lockout](#9-failed-authentication-lockout)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Compliance and Enforcement](#11-compliance-and-enforcement)
12. [Exceptions Management](#12-exceptions-management)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overarching intent of this standard — why it exists and what problem it solves for the organization. Reference the regulatory driver.*

This standard establishes the minimum authentication requirements for all information systems, applications, and infrastructure components owned or operated by [Organization Name] that are classified as, or connected to, National Critical Information Infrastructure (NCII). It defines mandatory controls for password management, multi-factor authentication (MFA), privileged access, and related authentication mechanisms to protect the confidentiality, integrity, and availability of NCII systems.

This standard is issued in accordance with and to operationalize the obligations imposed under the **Cyber Security Act 2024 (Act 854)**, Sections 18 and 24, and supports [Organization Name]'s broader Information Security Policy and Cyber Security Framework.

### 1.2 Scope

*Specify which systems, users, departments, and third parties are covered. Be explicit about what is in scope and what, if anything, is out of scope.*

This standard applies to:

- All **employees, contractors, consultants, temporary staff, and third-party vendors** who are granted access to systems operated by [Organization Name]
- All **information systems, platforms, and applications** classified as NCII or connected to NCII systems, including:
  - Production, development, staging, and disaster recovery environments
  - Cloud-hosted and on-premises systems
  - Operational Technology (OT) and Industrial Control Systems (ICS) where authentication is technically feasible
- All **privileged and service accounts** used within [Organization Name]'s environment
- All **remote access** mechanisms, including VPN, virtual desktop infrastructure (VDI), and web-based portals

**Out of Scope:**

*List any systems or user categories explicitly excluded from this standard, with justification.*

| Exclusion | Justification | Alternative Control |
|---|---|---|
| [System / User Category] | [Reason for exclusion] | [Compensating control applied] |
| [System / User Category] | [Reason for exclusion] | [Compensating control applied] |

---

## 2. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation by all readers.*

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — the primary Malaysian legislation governing cybersecurity of NCII |
| **Authentication** | The process of verifying the identity of a user, device, or system before granting access |
| **MFA** | Multi-Factor Authentication — the use of two or more independent authentication factors |
| **NACSA** | National Cyber Security Agency — the competent authority for cybersecurity under Act 854 |
| **NCII** | National Critical Information Infrastructure — as defined under Section 2 of Act 854 |
| **PAM** | Privileged Access Management — controls governing accounts with elevated permissions |
| **Privileged Account** | An account with administrative, elevated, or unrestricted access rights to systems or data |
| **Service Account** | A non-human account used by applications, scripts, or services to interact with systems |
| **SSO** | Single Sign-On — an authentication mechanism allowing one set of credentials to access multiple systems |
| **MFA Fatigue** | An attack technique that floods a user with MFA push notifications to induce accidental approval |
| **TOTP** | Time-based One-Time Password — a time-limited OTP generated by an authenticator application |
| **[Additional Term]** | [Definition] |

---

## 3. Regulatory and Policy Context

*Summarise the legal and policy obligations that this standard fulfils. This section provides auditors with traceability between the document and its regulatory drivers.*

### 3.1 Regulatory Requirements

| Regulation / Framework | Section / Clause | Requirement Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Obligates NCII entities to implement prescribed cybersecurity measures, which include access control and authentication controls |
| Cyber Security Act 2024 (Act 854) | Section 24 | Empowers NACSA to issue directions and codes of practice that NCII entities must comply with; authentication standards form part of mandated technical controls |
| [Additional Framework, e.g., BNM RMiT] | [Policy Document / Section] | [Requirement Summary] |
| [Personal Data Protection Act 2010] | [Section] | [Requirement Summary] |

### 3.2 Internal Policy Alignment

*Reference internal policies that this standard sits beneath in the policy hierarchy.*

| Internal Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy — this standard operationalises authentication requirements |
| Access Control Policy | [Doc ID] | Complementary policy — governs authorisation and access provisioning |
| Privileged Access Management Policy | [Doc ID] | Complementary policy — governs privileged account lifecycle |
| Acceptable Use Policy | [Doc ID] | Complementary policy — governs user obligations |
| Incident Response Plan | [Doc ID] | Referenced for authentication-related incident handling |

---

## 4. Password Complexity Requirements

*This section defines the minimum password construction rules applicable to all human user accounts. Define separate requirements for standard user accounts and privileged accounts where applicable.*

### 4.1 Standard User Account Password Requirements

All passwords for standard user accounts **must** conform to the following minimum requirements:

| Parameter | Minimum Requirement | [Organization Name] Requirement |
|---|---|---|
| **Minimum Length** | 12 characters | [Define, e.g., 14 characters] |
| **Maximum Length** | No restriction recommended | [Define] |
| **Uppercase Characters** | Required | [Yes / No] |
| **Lowercase Characters** | Required | [Yes / No] |
| **Numeric Characters** | Required | [Yes / No] |
| **Special Characters** | Required | [Define permitted characters] |
| **Password Expiry** | [Define, e.g., 90 days] | [Define] |
| **Password History** | Minimum 10 previous passwords | [Define] |
| **Dictionary Words** | Prohibited | Prohibited |
| **Username in Password** | Prohibited | Prohibited |
| **Sequential Characters** | Prohibited (e.g., 12345, AAAAA) | Prohibited |

### 4.2 Password Change Requirements

*Specify when and how users must change passwords, including forced changes on first login, compromise events, and routine rotation.*

- Users **must** change their password upon first login to any system
- Passwords **must** be changed immediately upon suspicion or confirmation of compromise
- Password changes **must** be performed over encrypted channels (TLS 1.2 or higher)
- Users **must not** share passwords or write them in unsecured locations
- Password reuse within the last **[X]** passwords is prohibited
- Passwords **must not** be transmitted in cleartext at any time

### 4.3 Password Storage Requirements

*Define technical controls for how passwords are stored within systems to prevent exposure in the event of a data breach.*

- Passwords **must** be stored using an approved one-way cryptographic hash function
- Approved hashing algorithms include: **[e.g., bcrypt, PBKDF2, Argon2]**
- Plaintext or reversibly encrypted passwords are **strictly prohibited**
- Password hashes **must** include a unique per-user cryptographic salt
- Systems that cannot comply with password storage requirements **must** be documented as exceptions and subject to compensating controls

### 4.4 Password Reset and Recovery

*Define the process for securely resetting forgotten or compromised passwords.*

- Self-service password reset **must** be protected by MFA before changes are permitted
- Identity verification for assisted password reset **must** involve at least **[X]** verification steps
- Temporary passwords issued for resets **must** be single-use and expire within **[X] hours**
- All password reset events **must** be logged and monitored
- Password reset requests received via unverified channels (e.g., unsolicited email, phone) **must** not be actioned without identity verification

---

## 5. Multi-Factor Authentication (MFA) Methods and Requirements

*This section defines the mandatory deployment of MFA across NCII systems and specifies approved MFA methods, their applicability, and implementation requirements.*

### 5.1 MFA Mandate

Multi-Factor Authentication is **mandatory** for the following access scenarios:

| Access Scenario | MFA Required | Notes |
|---|---|---|
| Remote access (VPN, VDI, remote desktop) | **Mandatory** | No exceptions |
| Cloud administration portals | **Mandatory** | Applies to all cloud tenants |
| On-premises administrative interfaces | **Mandatory** | Includes AD, server consoles, management planes |
| Web-based business applications (external-facing) | **Mandatory** | |
| Web-based business applications (internal-facing) | **Mandatory** | [Define any scope limitations] |
| Access to NCII-classified systems | **Mandatory** | As defined under Act 854 |
| Email access from unmanaged devices | **Mandatory** | |
| Development and CI/CD pipelines | **Mandatory** | [Define scope] |
| [Additional scenario] | [Mandatory / Recommended] | [Notes] |

### 5.2 Approved MFA Methods

*List the MFA methods that [Organization Name] permits, ranked by assurance level. Higher-assurance methods should be used for higher-risk access.*

| MFA Method | Assurance Level | Permitted Use Cases | Notes |
|---|---|---|---|
| Hardware security key (FIDO2 / WebAuthn) | High | Privileged accounts, executive access, high-value systems | Phishing-resistant; preferred |
| Certificate-based authentication (PKI / smart card) | High | Privileged accounts, VPN | Phishing-resistant |
| Authenticator app (TOTP / HOTP) | Medium-High | Standard user MFA | E.g., Microsoft Authenticator, Google Authenticator |
| Push notification (number matching enabled) | Medium-High | Standard user MFA | Number matching **must** be enabled to mitigate MFA fatigue |
| SMS OTP | Low-Medium | [Restricted use only — define] | Subject to SIM-swap risk; use only where alternatives unavailable |
| Voice OTP | Low | [Restricted use only] | Not recommended; use only as fallback |
| Email OTP | Low | [Restricted use only] | Only where email account itself is MFA-protected |

> **Note:** SMS and voice OTP are **not** approved as primary MFA methods for privileged accounts or access to NCII-classified systems. Their use is restricted to scenarios defined in the Exceptions Register.

### 5.3 MFA Implementation Requirements

*Define the technical and operational requirements that all MFA deployments must satisfy.*

- All MFA solutions **must** be integrated with [Organization Name]'s centralized Identity Provider (IdP): **[e.g., Microsoft Entra ID / Okta / [IdP Name]]**
- MFA enrollment **must** be completed before a user account is activated for production access
- MFA enrollment for privileged accounts **must** involve in-person or video-verified identity proofing
- MFA backup codes **must** be stored securely; users **must** not store backup codes in plaintext
- Number matching **must** be enforced on all push notification MFA deployments
- MFA challenge frequency **must** not exceed trusted session windows defined in Section 8
- MFA bypass and exclusion lists **must** be reviewed quarterly and approved by [Approver Role]

### 5.4 MFA Enrollment and Lifecycle

| Lifecycle Stage | Requirement | Responsible Party |
|---|---|---|
| Initial enrollment | Completed at onboarding, before first system access | [IT / IAM Team] |
| Device registration | Maximum **[X]** registered MFA devices per user | [IAM Team] |
| Device deregistration | Immediate upon device loss, theft, or user offboarding | [IT / User / Manager] |
| Periodic re-enrollment | Every **[X months]** or upon significant device change | [IAM Team] |
| Enrollment audit | Quarterly review of enrolled devices and orphaned registrations | [IAM Team] |

---

## 6. Privileged Account Authentication

*This section defines the enhanced authentication requirements applicable to accounts with administrative or elevated permissions. Privileged accounts represent a significantly higher risk profile and require stronger controls than standard user accounts.*

### 6.1 Privileged Account Definition and Classification

*Classify account types by privilege level to allow differentiated controls.*

| Classification | Description | Examples |
|---|---|---|
| **Tier 0 — Critical** | Accounts with unrestricted control over identity infrastructure or NCII systems | Domain Admins, Global Admins, Root accounts, NACSA-reported NCII system admins |
| **Tier 1 — Server / Infrastructure** | Accounts with administrative access to servers, network devices, or cloud infrastructure | Local admins, Cloud IAM admins, Network engineers |
| **Tier 2 — Application** | Accounts with administrative access to specific applications or databases | Database admins, Application admins, DevOps accounts |
| **Emergency / Break-Glass** | Accounts for use only when normal access is unavailable | Break-glass AD account, Cloud emergency account |

### 6.2 Authentication Requirements for Privileged Accounts

| Requirement | Tier 0 | Tier 1 | Tier 2 |
|---|---|---|---|
| **MFA** | Mandatory — High assurance only (FIDO2 / PKI) | Mandatory — Medium-High or above | Mandatory |
| **Separate privileged account** | Mandatory — dedicated account, not shared with daily-use account | Mandatory | Mandatory |
| **PAM vault / checkout** | Mandatory | Mandatory | Recommended |
| **Session recording** | Mandatory | Mandatory | Recommended |
| **Just-in-Time (JIT) access** | Mandatory | Recommended | Optional |
| **Dual approval for access** | Mandatory | Recommended for sensitive systems | Optional |
| **Password rotation** | Automated, minimum every **[X days]** | Automated or minimum every **[X days]** | Minimum every **[X days]** |
| **Concurrent session limit** | 1 active session | **[X]** active sessions | **[X]** active sessions |

### 6.3 Privileged Access Workstations (PAW)

*Define requirements for dedicated workstations used to perform privileged administrative tasks.*

- Tier 0 and Tier 1 privileged tasks **must** be performed from a designated **Privileged Access Workstation (PAW)** or equivalent hardened jump host
- PAWs **must** be:
  - Dedicated to privileged tasks only — no general internet browsing or email access
  - Managed and hardened in accordance with [Organization Name]'s endpoint hardening standard
  - Enrolled in endpoint detection and response (EDR) monitoring
  - Subject to enhanced logging of all authentication and session activity
- Access to PAWs themselves **must** require MFA using a high-assurance method

### 6.4 Emergency / Break-Glass Account Controls

*Define how emergency accounts are managed, used, and monitored to prevent misuse while ensuring availability during crises.*

- Break-glass accounts **must** be documented in the privileged account register
- Credentials **must** be stored in a physically secured, tamper-evident sealed envelope, and/or in the PAM vault under dual-custody
- Activation **must** require approval from **[Role, e.g., CISO or designated deputy]**
- All break-glass account activations **must** trigger an immediate alert to the Security Operations Centre (SOC)
- Post-use, credentials **must** be rotated before the account is returned to a secured state
- A post-incident review **must** be completed within **[X] business days** of any break-glass activation

---

## 7. Service Account Management

*Service accounts are non-human accounts used by applications, automated processes, and integrations. They require distinct controls due to their inability to interactively enroll in MFA and their typical high-privilege nature.*

### 7.1 Service Account Registration and Inventory

- All service accounts **must** be registered in the **[Organization Name] Service Account Register** maintained by the IAM team
- Each service account entry **must** include:

| Field | Description |
|---|---|
| Account Name | Unique identifier of the service account |
| Owner | Named individual responsible for the account |
| Business System | Application or system the account serves |
| Purpose | Description of what the account does |
| Permissions / Access Level | Specific roles or access rights assigned |
| Credential Storage Location | PAM vault reference or secure storage location |
| Last Password Rotation | Date of last credential rotation |
| Next Rotation Due | Scheduled next rotation date |
| Review Status | Current status (Active / Under Review / Decommission Pending) |

### 7.2 Service Account Authentication Requirements

*Since service accounts cannot interactively perform MFA, compensating controls must be applied to manage their risk.*

| Control | Requirement |
|---|---|
| **Principle of least privilege** | Service accounts **must** be granted only the minimum permissions required for their function |
| **Dedicated accounts** | Service accounts **must not** be shared across multiple applications or systems |
| **Interactive login disabled** | Service accounts **must** have interactive login disabled where technically feasible |
| **Password rotation** | Credentials **must** be rotated at minimum every **[X days]** via the PAM vault or automated rotation tooling |
| **Secrets management** | Credentials **must** be stored in an approved secrets manager — hardcoded credentials in scripts or code are **prohibited** |
| **Network access restriction** | Service account access **must** be restricted to specific source IPs or network segments where possible |
| **Monitoring** | All service account activity **must** be logged and anomalous behaviour **must** trigger alerts |

### 7.3 Managed Identities and API Authentication

*Where possible, service-to-service authentication should use platform-native managed identities to eliminate static credentials entirely.*

- Use of **Managed Identities** (e.g., Azure Managed Identity, AWS IAM Roles for EC2) is **preferred** over static credentials for cloud-hosted services
- API keys and tokens **must** be:
  - Scoped to the minimum required permissions
  - Set with the shortest feasible expiry
  - Stored in an approved secrets manager
  - Rotated upon any suspected compromise
- OAuth 2.0 client credentials flow **must** be used for machine-to-machine authentication where supported

---

## 8. Session Timeout Settings

*This section defines the maximum session durations and idle timeout periods for various system and access types to limit the window of opportunity for session hijacking and unauthorized access.*

### 8.1 Session Timeout Requirements

*Specify timeout values per access type. Where the system cannot enforce these values, document as an exception with a compensating control.*

| System / Access Type | Maximum Idle Timeout | Maximum Absolute Session Duration | Re-authentication Required |
|---|---|---|---|
| Standard web application (internal) | **[X] minutes** | **[X] hours** | After absolute timeout |
| Standard web application (external-facing) | **[X] minutes** | **[X] hours** | After absolute timeout |
| VPN / Remote access session | **[X] minutes** | **[X] hours** | After absolute timeout |
| Privileged access session (PAM) | **[X] minutes** | **[X] hours** | Mandatory — session checkout expires |
| Administrative console / CLI | **[X] minutes** | **[X] hours** | After absolute timeout |
| Cloud management portal | **[X] minutes** | **[X] hours** | After absolute timeout |
| Workstation screen lock | **[X] minutes** (idle) | N/A | Screen unlock requires credential |
| Thick client / desktop application | **[X] minutes** | **[X] hours** | After absolute timeout |

> *Recommended baseline: idle timeout of 15 minutes for external-facing and privileged systems; 30 minutes for internal systems. Review against operational requirements and adjust with documented justification.*

### 8.2 Session Token and Cookie Requirements

- Session tokens **must** be generated using a cryptographically secure pseudo-random number generator (CSPRNG)
- Session tokens **must** be invalidated immediately upon logout
- Cookies used for session management **must** be flagged as `HttpOnly`, `Secure`, and `SameSite=Strict` (or `Lax` where required)
- Persistent "remember me" tokens are **prohibited** for access to NCII-classified systems
- Concurrent session limits **must** be enforced per the values defined in Section 6.2 for privileged accounts

### 8.3 Re-authentication Triggers

In addition to timeout-based re-authentication, re-authentication using MFA **must** be enforced when:

- A user changes their password or MFA configuration
- A user accesses a high-risk resource or sensitive data classification
- A step-up authentication challenge is raised by the risk engine
- A user's session risk score exceeds the threshold defined in **[Conditional Access Policy / Risk Policy document reference]**

---

## 9. Failed Authentication Lockout

*This section defines the mandatory account lockout controls to protect against brute-force and credential stuffing attacks. Lockout policies must balance security with operational availability.*

### 9.1 Account Lockout Thresholds

| Account Type | Maximum Failed Attempts | Lockout Duration | Reset Mechanism |
|---|---|---|---|
| Standard user account | **[X] attempts** (recommended: 5–10) | **[X] minutes** or until unlocked | Automatic after duration, or manual by IT Service Desk |
| Privileged account | **[X] attempts** (recommended: 3–5) | **Manual unlock only** | Requires manager approval + IT Service Desk |
| Service account | **[X] attempts** | **Alert only — no auto-lockout** | Manual investigation required |
| Break-glass account | Monitor only | Alert to SOC immediately | Manual |
| API / Programmatic access | Rate limit: **[X] requests / minute** | Temporary block for **[X] minutes** | Automatic |

> **Note:** Automatic lockout of service accounts **must not** be configured where it would cause application outages. Instead, repeated failures **must** trigger automated alerts to the SOC for investigation.

### 9.2 Lockout Monitoring and Alerting

- All failed authentication events **must** be captured in the centralized SIEM / logging platform: **[SIEM Platform Name]**
- The following events **must** trigger automated alerts:

| Alert Trigger | Threshold | Destination |
|---|---|---|
| Consecutive failed logins — standard account | **[X]** failures within **[X] minutes** | IT Service Desk + SOC |
| Account locked out — standard user | Any lockout event | IT Service Desk |
| Account locked out — privileged account | Any lockout event | SOC (immediate) + CISO notification |
| Distributed failed logins — multiple accounts | **[X]** accounts affected within **[X] minutes** | SOC (immediate) — potential credential stuffing |
| Failed logins from unusual geography | As defined in risk policy | SOC |
| Break-glass account failed login | Any failed attempt | SOC (immediate) |

### 9.3 Account Unlock Procedures

*Define the process for unlocking accounts to prevent social engineering of the unlock process.*

- Standard account unlocks may be performed by the IT Service Desk after **identity verification** of the requesting user
- Identity verification for account unlocks **must** include at minimum: **[e.g., employee ID + manager confirmation, or video verification]**
- Privileged account unlocks **must** require:
  1. Formal request submitted via **[ITSM Tool, e.g., ServiceNow ticket]**
  2. Manager or designated approver authorization
  3. IAM team review of the circumstances of the lockout
- All account unlock events **must** be logged with the justification and approver name
- Where lockout patterns suggest an active attack, unlocking **must** be deferred pending SOC investigation

### 9.4 Credential Stuffing and Brute-Force Response

*Define escalated response steps when lockout patterns indicate an active attack.*

- Detection of credential stuffing indicators (high-volume failed logins, known breached credential use) **must** trigger the **[Incident Response Plan — Reference Doc ID]**
- [Organization Name] **must** subscribe to a threat intelligence feed for compromised credential monitoring: **[e.g., Have I Been Pwned API, Microsoft Entra ID Protection]**
- Passwords identified in known breach databases **must** be flagged and users required to change them within **[X] hours** of detection

---

## 10. Roles and Responsibilities

*This section defines accountability for the controls described in this standard using a RACI framework.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Control Area | Chief Information Security Officer (CISO) | Head of IT / CTO | IAM Team | IT Service Desk | System / Application Owners | End Users | Internal Audit |
|---|---|---|---|---|---|---|---|
| **Standard ownership and review** | A | C | R | I | I | I | I |
| **Password policy configuration** | A | C | R | I | C | I | I |
| **MFA deployment and enforcement** | A | C | R | C | C | I | I |
| **MFA enrollment management** | I | A | R | R | I | I | I |
| **Privileged account management** | A | C | R | I | C | I | I |
| **PAM vault administration** | A | C | R | I | I | I | I |
| **Service account register** | A | C | R | I | R | I | I |
| **Session timeout configuration** | I | A | C | I | R | I | I |
| **Lockout policy configuration** | A | C | R | I | C | I | I |
| **Account unlock (standard)** | I | I | C | R | I | I | I |
| **Account unlock (privileged)** | A | C | R | R | I | I | I |
| **Compliance monitoring** | A | I | R | I | I | I | R |
| **Exception approval** | A | C | C | I | C | I | I |
| **User awareness training** | A | C | C | R | C | R | I |

---

## 11. Compliance and Enforcement

### 11.1 Compliance Monitoring

*Define how [Organization Name] will monitor and verify compliance with this standard.*

- The IAM Team **must** conduct quarterly compliance checks against the requirements defined in this standard
- Compliance metrics **must** be reported to **[Governance Committee / CISO]** on a **[monthly / quarterly]** basis
- The following key compliance metrics **must** be tracked:

| Metric | Target | Reporting Frequency |
|---|---|---|
| MFA enrollment rate — all users | 100% | Monthly |
| MFA enrollment rate — privileged accounts | 100% | Monthly |
| Service accounts in PAM vault | 100% | Quarterly |
| Password policy compliance (via AD/IdP audit) | 100% | Quarterly |
| Accounts with non-compliant session timeouts | 0% | Quarterly |
| Unreviewed exception requests | 0 outstanding > 30 days | Monthly |

### 11.2 Non-Compliance Consequences

Failure to comply with this standard may result in:

- **Technical controls:** Account suspension, access revocation, or system isolation
- **Administrative action:** Disciplinary proceedings in accordance with [Organization Name]'s Human Resources policies
- **Regulatory consequences:** Potential breach of obligations under the Cyber Security Act 2024 (Act 854), which may attract penalties under Section **[Relevant penalty section]** of the Act
- **Escalation:** Non-compliance by system owners may be escalated to the **[Board-level Risk / Audit Committee]**

---

## 12. Exceptions Management

*This section defines the process for requesting and managing exceptions to the requirements of this standard. Exceptions must not be used to avoid implementing controls but may be granted where technical or operational constraints make compliance infeasible.*

### 12.1 Exception Request Process

1. The requesting party completes the **[Exception Request Form — Reference Form ID]**
2. The request must include: the specific requirement being excepted, the business justification, a risk assessment, proposed compensating controls, and the requested exception duration
3. The exception request is reviewed by the **IAM Team** and **CISO**
4. Exceptions for NCII-classified systems **must** be reviewed by **[Senior Risk Committee / relevant governance body]**
5. Approved exceptions are recorded in the **Exceptions Register** with an expiry date
6. All exceptions **must** be reviewed at least annually or upon the next review of this standard

### 12.2 Active Exceptions Register

| Exception ID | System / Scope | Requirement Excepted | Compensating Control | Approved By | Expiry Date | Review Date |
|---|---|---|---|---|---|---|
| [EXC-001] | [System Name] | [Section reference] | [Control description] | [Approver] | [Date] | [Date] |
| [EXC-002] | [System Name] | [Section reference] | [Control description] | [Approver] | [Date] | [Date] |

---

## 13. Review and Approval

### 13.1 Version History

| Version | Date | Author | Change Description |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial release |
| [X.X] | [Date] | [Author Name], [Title] | [Description of changes] |
| [X.X] | [Date] | [Author Name], [Title] | [Description of changes] |

### 13.2 Scheduled Review

This standard **must** be reviewed:

- **Annually** from the effective date
- Upon any significant change to the regulatory landscape (e.g., new NACSA codes of practice or directives)
- Following a material security incident involving authentication failure
- Upon significant changes to [Organization Name]'s technology environment

Next scheduled review date: **[Next Review Date]**

### 13.3 Approval Sign-Off

*All approvers below confirm that they have reviewed this standard and that it is fit for purpose, accurate, and compliant with applicable regulatory requirements.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Head of Information Technology | [Name] | __________________ | [Date] |
| Head of Identity & Access Management | [Name] | __________________ | [Date] |
| Chief Risk Officer | [Name] | __________________ | [Date] |
| [Additional Approver Role] | [Name] | __________________ | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Title | Relevant Sections |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | Section 18 — Cybersecurity measures for NCII; Section 24 — Directions and codes of practice |
| NACSA | [Applicable NACSA Code of Practice / Directive Title] | [Relevant clauses] |
| [BNM RMiT] | Risk Management in Technology (RMiT) | [Relevant clauses if applicable] |
| [PDPA 2010] | Personal Data Protection Act 2010 | [Relevant sections if applicable] |
| [NIST SP 800-63B] | Digital Identity Guidelines — Authentication and Lifecycle Management | AAL1 / AAL2 / AAL3 requirements |
| [ISO/IEC 27001:2022] | Information Security Management Systems | Annex A 8.5 — Secure authentication |

### 14.2 Internal References

| Document Title | Document ID | Version |
|---|---|---|
| Information Security Policy | [Doc ID] | [Version] |
| Access Control Policy | [Doc ID] | [Version] |
| Privileged Access Management Policy | [Doc ID] | [Version] |
| Incident Response Plan | [Doc ID] | [Version] |
| Acceptable Use Policy | [Doc ID] | [Version] |
| Exception Request Form | [Form ID] | [Version] |

---

## 15. Appendices

### Appendix A — Approved Authentication Technologies

*This appendix lists the specific technology products approved for use as authentication mechanisms within [Organization Name]'s environment. The IAM Team maintains this list and must update it when products are added, removed, or upgraded.*

| Category | Approved Product(s) | Notes / Version |
|---|---|---|
| Identity Provider (IdP) | [e.g., Microsoft Entra ID, Okta] | [Version / tenancy details] |
| Authenticator Application | [e.g., Microsoft Authenticator, Google Authenticator] | [Approved platforms: iOS, Android] |
| Hardware Security Key | [e.g., YubiKey 5 Series] | [Approved models] |
| PAM Vault | [e.g., CyberArk, HashiCorp Vault, Delinea] | [Version] |
| Secrets Manager | [e.g., Azure Key Vault, AWS Secrets Manager, HashiCorp Vault] | [Version] |
| SIEM / Authentication Logging | [e.g., Microsoft Sentinel, Splunk] | [Version] |

---

### Appendix B — Authentication Risk Classification Matrix

*This matrix maps system classification to the required minimum authentication assurance level. Use this as a quick reference when designing authentication controls for new or changed systems.*

| System Classification | Data Sensitivity | User Type | Minimum Authentication Method | MFA Assurance Level Required |
|---|---|---|---|---|
| NCII — Critical | Highly Sensitive | Privileged | Hardware key (FIDO2 / PKI) + PAM checkout | High |
| NCII — Critical | Highly Sensitive | Standard | TOTP or Push (number matching) | Medium-High |
| Internal — High | Sensitive | Privileged | TOTP / Push (number matching) + PAM | Medium-High |
| Internal — High | Sensitive | Standard | TOTP or Push (number matching) | Medium-High |
| Internal — Standard | Internal | Standard | Push notification | Medium |
| Public / External Portal | Mixed | External users | OTP (any approved method) | Medium |
| Development / Test | Non-production | Developer | TOTP / Push | Medium |

---

### Appendix C — MFA Enrollment Quick Reference Card

*This appendix contains a user-facing quick reference guide for MFA enrollment. It may be extracted and distributed as a standalone awareness document.*

**Step 1:** Navigate to the self-service portal at **[Portal URL]**

**Step 2:** Select "Set up Multi-Factor Authentication" and follow the on-screen prompts

**Step 3:** Download and install **[Approved Authenticator App]** on your registered mobile device

**Step 4:** Scan the QR code displayed on screen using the authenticator app

**Step 5:** Enter the 6-digit code displayed in the app to confirm enrollment

**Step 6:** Store your backup codes in a secure location — do **not** save them on the device used for authentication

**If you encounter issues:** Contact the IT Service Desk at **[Service Desk Contact]** or log a ticket via **[ITSM Portal URL]**

---

### Appendix D — Glossary of Authentication Error Codes

*[Optional] Define internal or system-specific error codes related to authentication failures, lockouts, and MFA challenges to assist Service Desk staff in diagnosing and resolving authentication issues.*

| Error Code | Description | Recommended Resolution |
|---|---|---|
| [ERR-AUTH-001] | [Description] | [Resolution steps] |
| [ERR-AUTH-002] | [Description] | [Resolution steps] |
| [ERR-AUTH-003] | [Description] | [Resolution steps] |

---

### Appendix E — Compliance Evidence Checklist

*Use this checklist during internal audits and regulatory assessments to verify that authentication controls are implemented and documented as required by this standard and Act 854 Sections 18 and 24.*

| Control | Evidence Required | Evidence Location | Status |
|---|---|---|---|
| MFA enforced for all NCII system access | Conditional Access / IdP policy screenshots; MFA enrollment report | [Location] | [ ] Compliant / [ ] Non-Compliant |
| Password policy configured per Section 4 | IdP / AD password policy configuration export | [Location] | [ ] Compliant / [ ] Non-Compliant |
| Privileged accounts in PAM vault | PAM vault account inventory report | [Location] | [ ] Compliant / [ ] Non-Compliant |
| Service account register current | Service account register (last reviewed within 90 days) | [Location] | [ ] Compliant / [ ] Non-Compliant |
| Session timeout configured per Section 8 | Application / system configuration screenshots | [Location] | [ ] Compliant / [ ] Non-Compliant |
| Lockout thresholds configured per Section 9 | IdP / AD account lockout policy export | [Location] | [ ] Compliant / [ ] Non-Compliant |
| Lockout alerts active in SIEM | SIEM alert rule screenshots; test alert evidence | [Location] | [ ] Compliant / [ ] Non-Compliant |
| All exceptions documented and approved | Exceptions register; signed exception forms | [Location] | [ ] Compliant / [ ] Non-Compliant |
| Standard reviewed within the last 12 months | Version history table; approval sign-off page | [Location] | [ ] Compliant / [ ] Non-Compliant |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It must not be shared outside of [Organization Name] without the written approval of the document owner. Printed copies are uncontrolled — refer to the document management system for the current version.

| Field | Value |
|---|---|
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | Identity & Access Management |
| Effective Date | [Effective Date] |