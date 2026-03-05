# Remote Access Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By — Name, Title] |
| **Organization** | [Organization Name] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws and regulations.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and References](#3-regulatory-framework-and-references)
4. [Definitions](#4-definitions)
5. [Policy Statement](#5-policy-statement)
6. [VPN Requirements](#6-vpn-requirements)
7. [Multi-Factor Authentication](#7-multi-factor-authentication)
8. [Endpoint Security Requirements](#8-endpoint-security-requirements)
9. [Session Management](#9-session-management)
10. [Privileged Remote Access Controls](#10-privileged-remote-access-controls)
11. [Third-Party Remote Access Restrictions](#11-third-party-remote-access-restrictions)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Policy Compliance and Exceptions](#13-policy-compliance-and-exceptions)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the overarching intent of this policy and why it exists. Reference the regulatory obligations that necessitate it.*

This Remote Access Policy ("Policy") establishes the requirements and controls governing secure remote access to [Organization Name]'s National Critical Information Infrastructure (NCII) systems, networks, and data assets by internal employees, contractors, vendors, and other authorized third parties.

The purpose of this Policy is to:

- Define the minimum security standards for all forms of remote access to [Organization Name]'s information systems;
- Protect the confidentiality, integrity, and availability of NCII assets from threats introduced through remote connectivity;
- Ensure compliance with obligations under the **Cyber Security Act 2024 (Act 854)**, particularly Sections 18 and 24, as issued and enforced by the **National Cyber Security Agency (NACSA)**;
- Establish accountability for all remote access activities and provide a framework for monitoring, auditing, and enforcement;
- Mitigate risks associated with unauthorized access, data exfiltration, and lateral movement through remote access channels.

Adherence to this Policy supports [Organization Name]'s commitment to maintaining a resilient and secure cyber posture in accordance with national cybersecurity directives applicable to NCII sector operators.

---

## 2. Scope

*Define clearly who and what this policy applies to. Be explicit about inclusions and exclusions to avoid ambiguity during audits.*

### 2.1 In-Scope Entities

This Policy applies to:

- **Internal Personnel:** All full-time employees, part-time employees, and temporary staff of [Organization Name] who access organizational systems remotely;
- **Privileged Users:** System administrators, database administrators, network engineers, and any personnel with elevated or administrative access rights;
- **Contractors and Consultants:** Individuals engaged under contract who require remote access to perform their duties;
- **Third-Party Vendors and Suppliers:** External service providers, managed service providers (MSPs), and technology partners granted access for support, maintenance, or integration purposes;
- **Outsourced Personnel:** Individuals performing functions on behalf of [Organization Name] but employed by a third-party organization.

### 2.2 In-Scope Systems and Assets

This Policy applies to all remote access to:

- NCII systems and networks as designated under Act 854;
- On-premises data centers, server infrastructure, and network equipment;
- Cloud-hosted environments and Software-as-a-Service (SaaS) platforms managed or contracted by [Organization Name];
- Operational Technology (OT) and Industrial Control Systems (ICS) where remote access is permitted;
- Internal applications, databases, and file repositories accessible via remote connectivity technologies.

### 2.3 Out-of-Scope

- Physical access to [Organization Name] premises (governed by the Physical Security Policy);
- Access to publicly available systems or services that do not require authentication.

---

## 3. Regulatory Framework and References

*List all applicable laws, regulations, standards, and internal policies that this document is designed to satisfy. This section is critical for regulatory audit traceability.*

This Policy has been developed in alignment with the following regulatory and standards framework:

| Reference | Instrument | Clause / Section | Relevance |
|---|---|---|---|
| **Act 854** | Cyber Security Act 2024 | Section 18 | Obligations on NCII sector leads regarding cybersecurity measures |
| **Act 854** | Cyber Security Act 2024 | Section 24 | Duty to comply with cybersecurity directives issued by NACSA |
| **NACSA** | National Cyber Security Agency Directives | [Applicable Directive Reference] | Sector-specific cybersecurity requirements |
| **ISO/IEC 27001:2022** | Information Security Management | A.6.7, A.8.20 | Remote working and network security controls |
| **NIST SP 800-46** | Guide to Enterprise Telework and Remote Access Security | All | Technical guidance on remote access implementation |
| **BNM RMiT** | Risk Management in Technology (BNM/RH/PD 028-119) | 10.37–10.43 | [If applicable — remote access under technology risk] |
| **PDPA 2010** | Personal Data Protection Act 2010 | Section 9 | Security principle for personal data processed remotely |
| [Internal Policy] | Information Security Policy | [Section Reference] | Parent policy governing all information security controls |
| [Internal Policy] | Acceptable Use Policy | [Section Reference] | Permitted use of organizational systems and networks |
| [Internal Policy] | Third-Party Risk Management Policy | [Section Reference] | Vendor access governance |

---

## 4. Definitions

*Provide clear, unambiguous definitions for all technical and policy-specific terms used throughout this document.*

| Term | Definition |
|---|---|
| **Remote Access** | Any access to [Organization Name]'s internal systems, networks, or applications from a location outside the organization's physically controlled premises. |
| **VPN (Virtual Private Network)** | An encrypted tunnel that creates a secure connection between a remote device and [Organization Name]'s internal network over a public or untrusted network. |
| **Multi-Factor Authentication (MFA)** | An authentication mechanism requiring a user to present two or more verification factors from different categories: something you know, something you have, and/or something you are. |
| **Endpoint** | Any device — including laptops, desktops, mobile devices, or thin clients — used to connect remotely to organizational systems. |
| **Privileged Access** | Access rights that exceed those of a standard user, typically including administrative, root, or elevated permissions on systems, applications, or network devices. |
| **NCII** | National Critical Information Infrastructure, as defined under the Cyber Security Act 2024 (Act 854). |
| **Third Party** | Any external individual or organization, including vendors, contractors, consultants, or managed service providers, that is not an employee of [Organization Name]. |
| **Jump Server / Bastion Host** | A hardened, monitored intermediary server used to control and audit access to internal systems, particularly for privileged sessions. |
| **Split Tunneling** | A VPN configuration where only traffic destined for the organizational network is routed through the VPN, while other internet traffic bypasses it. |
| **Session Recording** | The capture and storage of a remote access session for audit and forensic purposes. |
| **Zero Trust** | A security model that assumes no implicit trust for any user or device, requiring continuous verification regardless of network location. |

---

## 5. Policy Statement

*State the organization's overarching position on remote access. This should be a clear, unequivocal declaration that sets the tone for all subsequent requirements.*

[Organization Name] recognizes that remote access to its information systems is a business necessity. However, such access introduces significant cybersecurity risks, particularly to NCII assets that are critical to national resilience and financial stability.

It is the policy of [Organization Name] that:

- **All remote access must be explicitly authorized** — no individual shall access [Organization Name] systems remotely without prior written approval from the appropriate authority;
- **Minimum security standards must be met** — remote access is only permitted from endpoints and via channels that satisfy the technical requirements defined in this Policy;
- **Access shall follow the principle of least privilege** — remote access rights shall be limited to only those systems and functions necessary for the user's role;
- **All remote sessions are subject to monitoring and audit** — users must be informed, and by proceeding with remote access, consent to the monitoring of their sessions in accordance with applicable law;
- **Non-compliance will result in access revocation and disciplinary action** — violations of this Policy may result in immediate suspension of remote access privileges, disciplinary proceedings, and, where applicable, referral to relevant authorities;
- **Remote access provisioning and deprovisioning must follow formal lifecycle management** — access must be reviewed periodically and revoked promptly upon termination or change of role.

---

## 6. VPN Requirements

*Detail the mandatory technical and configuration standards for VPN usage. This section should be specific enough to guide implementation and auditing.*

### 6.1 Mandatory VPN Usage

All remote access to [Organization Name]'s internal networks, NCII systems, and on-premises resources **must** be conducted exclusively through [Organization Name]'s approved VPN solution. Direct internet-facing access to internal systems without VPN is prohibited unless an approved, documented exception is in place.

### 6.2 Approved VPN Solutions

*List the VPN technologies approved for use. Unapproved solutions, including consumer-grade or personal VPNs, are prohibited.*

| VPN Solution | Use Case | Approval Status |
|---|---|---|
| [VPN Product Name] | Standard employee remote access | Approved |
| [VPN Product Name] | Privileged/administrative access | Approved |
| [VPN Product Name] | Third-party vendor access | Approved |
| All consumer-grade VPN services | Any | **Prohibited** |

### 6.3 Encryption Standards

Remote access VPN connections must conform to the following minimum cryptographic standards:

- **Protocol:** TLS 1.2 or higher; IPSec with IKEv2 preferred;
- **Cipher Suites:** [Specify approved cipher suites — e.g., AES-256-GCM, ECDHE-RSA];
- **Certificate Authority:** Certificates must be issued by [Organization Name]'s internal PKI or an approved commercial CA;
- **Key Length:** RSA keys must be a minimum of 2048 bits; ECDSA keys must be a minimum of 256 bits.

### 6.4 Split Tunneling

- Split tunneling **is prohibited** for all remote access to NCII systems;
- All traffic from remote endpoints must be routed through the VPN when connected, including internet traffic, to enable centralized monitoring and threat detection;
- Exceptions require formal written approval from the CISO and must be documented with compensating controls.

### 6.5 VPN Gateway Hardening

- VPN gateways must be subject to regular vulnerability assessments (minimum quarterly);
- VPN concentrators and gateways must be maintained in accordance with [Organization Name]'s Patch Management Policy;
- VPN access logs must be retained for a minimum of [specify retention period, e.g., 12 months] and integrated with the Security Information and Event Management (SIEM) system;
- Unused or inactive VPN accounts must be disabled within [specify period, e.g., 30 days] of inactivity.

### 6.6 VPN Account Lifecycle

| Stage | Requirement | Responsible Party |
|---|---|---|
| Provisioning | Formal access request and approval | IT/IAM Team |
| Onboarding | User training on VPN acceptable use | IT / HR |
| Periodic Review | Quarterly access certification | CISO / Line Manager |
| Modification | Re-approval required for scope changes | IT/IAM Team |
| Deprovisioning | Revocation within 24 hours of departure | IT/IAM Team |

---

## 7. Multi-Factor Authentication

*Define the MFA requirements for all remote access scenarios. Specify acceptable factors and any scenarios where MFA may be adapted.*

### 7.1 MFA Mandate

Multi-Factor Authentication (MFA) is **mandatory** for all remote access to [Organization Name]'s systems without exception. Single-factor authentication (e.g., password only) is not sufficient for any form of remote access.

### 7.2 Acceptable Authentication Factors

MFA implementations must use at least two factors from different categories:

| Factor Category | Acceptable Methods | Prohibited Methods |
|---|---|---|
| **Something You Know** | Strong password (min. 12 characters, complexity enforced) | Simple PINs (< 6 digits), security questions |
| **Something You Have** | FIDO2/WebAuthn hardware token, TOTP authenticator app, PKI smart card | SMS OTP (deprecated — see note below), email OTP |
| **Something You Are** | Biometric verification integrated with device TPM | Standalone biometric devices without device binding |

> **Note on SMS OTP:** SMS-based one-time passwords are deprecated as a primary MFA factor for NCII system access due to SIM-swapping risks and SS7 vulnerabilities. Where SMS OTP is currently in use, a remediation plan must be documented and approved by the CISO, with a defined migration timeline.

### 7.3 MFA for Privileged Access

- Privileged users must use hardware security keys (FIDO2/WebAuthn) or PKI smart cards as the second factor — software-based authenticator apps are not sufficient for privileged remote access;
- Privileged MFA sessions must not be persistent — re-authentication is required for each privileged session.

### 7.4 MFA Exceptions

- MFA exceptions are **not permitted** for access to NCII systems;
- For non-NCII systems, exceptions may be approved by the CISO in writing, subject to documented compensating controls, and must be reviewed every [specify period, e.g., 90 days].

### 7.5 MFA Recovery and Backup

- A formal MFA recovery process must be documented and followed — recovery must not bypass MFA permanently;
- Backup codes, if used, must be stored securely and their use must trigger an alert to the Security Operations Centre (SOC);
- Lost or compromised MFA devices must be reported to IT immediately, and access must be suspended pending re-enrolment.

---

## 8. Endpoint Security Requirements

*Define the minimum security posture that a device must demonstrate before it is permitted to establish a remote access connection.*

### 8.1 Authorized Devices

*Specify which device types are permitted and under what conditions.*

| Device Category | Permitted | Conditions |
|---|---|---|
| [Organization Name]-issued corporate laptops | Yes | Must meet all endpoint standards below |
| [Organization Name]-issued mobile devices | Yes (limited access) | MDM-enrolled, specific applications only |
| Contractor-owned devices (BYOD) | Conditional | Must be assessed and approved; compensating controls required |
| Personal/unmanaged devices | No | Prohibited for all NCII system access |
| Shared or public computers | No | Strictly prohibited |

### 8.2 Minimum Endpoint Security Standards

All authorized devices used for remote access must satisfy the following baseline before connection is permitted:

**Operating System**
- Supported operating system with current security patches applied (within [specify period, e.g., 7 days] of release for critical patches);
- Operating system must not have reached end-of-life/end-of-support;
- Full disk encryption must be enabled (e.g., BitLocker for Windows, FileVault for macOS).

**Endpoint Protection**
- Approved endpoint detection and response (EDR) solution must be installed, active, and reporting to [Organization Name]'s management console;
- Antivirus/anti-malware definitions updated within the last [specify period, e.g., 24 hours];
- Host-based firewall must be enabled and configured per [Organization Name]'s standard build.

**Device Management**
- Corporate devices must be enrolled in [Organization Name]'s Mobile Device Management (MDM) / Unified Endpoint Management (UEM) solution;
- Device configuration must align with [Organization Name]'s Endpoint Hardening Standard (refer Appendix B);
- Screen lock with automatic activation after [specify period, e.g., 5 minutes] of inactivity.

**Local Security**
- Local administrator rights must be disabled for standard users on corporate-issued devices;
- USB and removable media access must be controlled via endpoint policy;
- Personal VPN software and remote desktop tools not approved by [Organization Name] must be absent from the endpoint.

### 8.3 Endpoint Posture Assessment (Network Access Control)

- [Organization Name] shall implement Network Access Control (NAC) or an equivalent posture assessment mechanism to validate endpoint compliance prior to granting VPN access;
- Non-compliant devices must be automatically quarantined and the user notified with remediation instructions;
- Posture checks must occur at the time of connection and periodically throughout the session.

---

## 9. Session Management

*Define controls over the lifecycle of a remote access session from establishment through to termination.*

### 9.1 Session Establishment

- Remote access sessions may only be established by authenticated, authorized users on compliant endpoints;
- Session establishment must trigger a log entry in the centralized SIEM, capturing: user identity, source IP address, device identifier, timestamp, and target system;
- A legal notice/warning banner must be displayed prior to session establishment, informing the user that the session is subject to monitoring and recording.

### 9.2 Session Timeout and Idle Limits

*Define inactivity thresholds to reduce the risk of session hijacking or unauthorized use of unattended sessions.*

| User Category | Idle Timeout | Maximum Session Duration |
|---|---|---|
| Standard Users | [specify, e.g., 15 minutes] | [specify, e.g., 8 hours] |
| Privileged Users | [specify, e.g., 10 minutes] | [specify, e.g., 4 hours] |
| Third-Party / Vendor | [specify, e.g., 10 minutes] | [specify, e.g., 2 hours] |

- Re-authentication (including MFA) is required upon session resumption after idle timeout;
- Sessions exceeding the maximum duration must be automatically terminated, requiring the user to re-authenticate to establish a new session.

### 9.3 Concurrent Sessions

- Standard users are permitted a maximum of [specify, e.g., 1] concurrent remote access session;
- Concurrent session attempts must generate an alert to the SOC for review;
- Privileged users must not conduct privileged activities across concurrent sessions.

### 9.4 Session Monitoring and Recording

- All remote access sessions to NCII systems must be logged and retained for a minimum of [specify retention period, e.g., 12 months];
- Privileged remote access sessions (refer Section 10) must be recorded using session recording technology deployed on the bastion host or Privileged Access Management (PAM) solution;
- Session recordings must be stored in tamper-evident storage accessible only to authorized security personnel and auditors;
- Anomalous session activity (e.g., unusual data volumes, off-hours access, access to atypical systems) must generate automated alerts in the SIEM.

### 9.5 Session Termination

- Users must manually disconnect remote access sessions upon completion of their work;
- Automatic session termination must occur upon VPN disconnection, device lock, or system shutdown;
- Privileged sessions must be terminated using the formal session close procedure within the PAM solution to ensure proper audit trail closure.

---

## 10. Privileged Remote Access Controls

*Define the enhanced controls that apply specifically to users with administrative or elevated access rights connecting remotely.*

### 10.1 Definition of Privileged Remote Access

Privileged remote access encompasses any remote connection used to perform administrative, configuration, maintenance, or elevated-permission tasks on:

- Servers (physical and virtual) and hypervisors;
- Network devices (routers, switches, firewalls, load balancers);
- Security infrastructure (SIEM, EDR consoles, PAM systems, firewalls);
- Database systems with administrative privileges;
- Cloud management consoles and infrastructure-as-code pipelines;
- Operational Technology (OT)/ICS systems where applicable.

### 10.2 Privileged Access Management (PAM)

- [Organization Name] must deploy and maintain a Privileged Access Management (PAM) solution approved by the CISO;
- All privileged remote access must be channelled exclusively through the PAM solution — direct SSH, RDP, or console connections that bypass the PAM are prohibited;
- The PAM solution must provide: session recording, keystroke logging, command filtering, and real-time session monitoring;
- Shared administrative credentials (e.g., `root`, `administrator`) must be vaulted within the PAM solution and checked out for individual use with full attribution.

### 10.3 Bastion Host / Jump Server Requirements

| Requirement | Specification |
|---|---|
| **Hardening** | Hardened configuration per [Organization Name]'s Server Hardening Standard; CIS Benchmark Level 2 or equivalent |
| **Access Control** | Access restricted to authorized privileged users only; MFA enforced at bastion level |
| **Monitoring** | Full session recording; real-time SOC visibility |
| **Patching** | Critical patches applied within [specify period, e.g., 48 hours] of release |
| **Audit Logging** | All logon/logoff events, commands executed, and file transfers logged |
| **Network Segmentation** | Bastion host must reside in a dedicated DMZ or management network segment |

### 10.4 Just-in-Time (JIT) Access

*Where technically feasible, adopt a just-in-time provisioning model for privileged access.*

- Privileged remote access should follow a Just-in-Time (JIT) model where access is provisioned on-demand for a defined duration and automatically revoked upon expiry;
- JIT access requests must be approved by [specify approver, e.g., the user's line manager and the CISO/delegate] prior to access being granted;
- All JIT access grants and expirations must be logged.

### 10.5 Emergency / Break-Glass Access

- Emergency access procedures must be documented and tested [specify frequency, e.g., semi-annually];
- Break-glass account credentials must be stored securely (e.g., in a sealed physical envelope and within the PAM vault);
- Any use of break-glass accounts must trigger an immediate alert to the CISO and SOC, and a post-incident review must be completed within [specify period, e.g., 24 hours].

### 10.6 Privileged Access Restrictions

Privileged remote users must adhere to the following additional restrictions:

- Privileged sessions must not be conducted from personal devices;
- Privileged users must not use privileged accounts for general web browsing, email, or non-administrative tasks;
- Downloading or exporting data from systems during a privileged session must require additional justification and approval;
- Privileged remote sessions must not be left unattended.

---

## 11. Third-Party Remote Access Restrictions

*Define the specific requirements and restrictions that apply to external parties — vendors, contractors, and managed service providers — when accessing organizational systems remotely.*

### 11.1 Authorization Requirements

- Third-party remote access must be formally authorized prior to provisioning through [Organization Name]'s Third-Party Access Request process (refer Appendix C);
- Authorization must be granted by the relevant business owner and reviewed by the CISO or delegate;
- All third-party remote access agreements must reference and require compliance with this Policy.

### 11.2 Contractual Obligations

All third parties granted remote access must have in place:

| Contractual Requirement | Document |
|---|---|
| Non-Disclosure Agreement (NDA) | [Organization Name] Standard NDA |
| Data Processing Agreement (where personal data is involved) | [Organization Name] DPA Template |
| Cybersecurity obligations and right to audit | [Organization Name] Vendor Agreement / MSA |
| Incident notification obligations (within [specify, e.g., 4 hours]) | Vendor SLA / MSA |
| Compliance with this Remote Access Policy | Vendor Acknowledgement Form (Appendix D) |

### 11.3 Technical Controls for Third-Party Access

| Control | Requirement |
|---|---|
| **Access Method** | Dedicated VPN profile or vendor portal with no access to internal network segments beyond what is required |
| **MFA** | Mandatory — hardware token or TOTP; SMS OTP prohibited |
| **Endpoint Requirements** | Vendor devices must meet minimum security standards (refer Section 8); unmanaged personal devices prohibited |
| **Session Recording** | All third-party sessions must be recorded via the PAM solution |
| **Privileged Access** | Third-party privileged access must be explicitly authorized and time-limited |
| **File Transfer** | Data transfer to/from vendor systems must be logged; sensitive data must not be exfiltrated without approval |

### 11.4 Access Scope and Limitation

- Third-party access must be scoped to the minimum systems and functions required to fulfil the contractual purpose (principle of least privilege);
- Network segmentation must prevent third-party remote access from providing lateral movement capability to internal systems;
- Access must be time-bound — standing vendor access accounts are prohibited. Access must be provisioned for each engagement or support window.

### 11.5 Third-Party Access Lifecycle

| Stage | Process | Timeline |
|---|---|---|
| **Request** | Formal access request submitted by internal sponsor | Prior to engagement start |
| **Vetting** | Background and security assessment of vendor | [specify period, e.g., 5 business days] |
| **Provisioning** | Access configured and credentials issued | Prior to first access session |
| **Active Monitoring** | Continuous session monitoring by SOC | Throughout access period |
| **Periodic Review** | Access rights reviewed and re-certified | [specify frequency, e.g., Monthly] |
| **Deprovisioning** | Access revoked upon engagement conclusion | Within [specify, e.g., 24 hours] of engagement end |

### 11.6 Unescorted Access Prohibition

- Third-party personnel must not conduct unescorted remote access to NCII systems for first engagements or sensitive maintenance windows;
- Where real-time oversight is required, an internal [Organization Name] employee with appropriate knowledge must monitor the session actively;
- The internal monitor must be named in the access request and their attendance recorded.

---

## 12. Roles and Responsibilities

*Define who is accountable, responsible, consulted, and informed for remote access governance activities. This RACI matrix is critical for audit traceability and operational accountability.*

### 12.1 RACI Matrix

**Legend:** **A** = Accountable | **R** = Responsible | **C** = Consulted | **I** = Informed

| Activity | CISO | IT/IAM Team | SOC | Business Unit Manager | End User / Third Party | Internal Audit | Risk & Compliance |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Policy ownership and annual review | **A/R** | C | C | C | I | C | C |
| Remote access standards development | A | **R** | C | I | I | C | C |
| User access request approval (standard) | I | **R** | I | **A** | R | I | I |
| Privileged access request approval | **A** | R | C | C | R | I | I |
| Third-party access authorization | A | R | I | **A/R** | R | I | C |
| VPN provisioning and configuration | I | **A/R** | I | I | I | I | I |
| MFA enrolment and management | I | **A/R** | I | I | R | I | I |
| Endpoint compliance enforcement | A | **R** | C | I | R | I | I |
| Session monitoring and alerting | A | I | **R** | I | I | I | I |
| Incident response — remote access breach | **A** | R | **R** | C | C | I | C |
| Periodic access review and certification | A | R | I | **A/R** | I | C | C |
| Policy compliance audit | C | C | C | C | C | **A/R** | R |
| Exception management and approval | **A/R** | R | C | C | I | C | C |
| Remote access deprovisioning | A | **R** | I | R | I | I | I |

### 12.2 Role Descriptions

| Role | Responsibilities |
|---|---|
| **Chief Information Security Officer (CISO)** | Policy owner; approves exceptions and privileged access; oversees remote access programme; escalation authority for incidents. |
| **IT / IAM Team** | Implements and maintains VPN and MFA infrastructure; provisions and deprovisions access; enforces endpoint compliance; manages PAM platform. |
| **Security Operations Centre (SOC)** | Monitors remote access sessions in real time; investigates anomalous activity; manages SIEM alerts; escalates potential breaches. |
| **Business Unit Manager** | Sponsors and approves access requests for their team members; participates in periodic access certifications; ensures their team complies with this Policy. |
| **End User / Third Party** | Complies with all requirements of this Policy; completes mandatory training; reports anomalies and incidents promptly. |
| **Internal Audit** | Conducts periodic audits of remote access controls and compliance; reports findings to the Audit Committee. |
| **Risk and Compliance** | Maintains the policy register; ensures regulatory alignment; tracks exceptions; prepares regulatory reporting. |

---

## 13. Policy Compliance and Exceptions

### 13.1 Compliance Obligations

All individuals within scope of this Policy are required to comply with its provisions. Compliance will be assessed through:

- **Periodic Access Reviews:** Formal quarterly reviews of all remote access accounts, conducted by the IT/IAM Team and certified by Business Unit Managers;
- **Technical Audits:** Automated posture assessment and configuration audits of VPN infrastructure, MFA configurations, and endpoint compliance;
- **Internal Audit Reviews:** Annual independent audit of remote access controls, findings to be reported to the Board Risk Committee or equivalent governance body;
- **Regulatory Reviews:** Compliance assessments conducted by or submitted to NACSA and other applicable regulatory bodies.

### 13.2 Consequences of Non-Compliance

Non-compliance with this Policy may result in:

- Immediate suspension or revocation of remote access privileges;
- Disciplinary action in accordance with [Organization Name]'s HR Disciplinary Policy, up to and including termination;
- Termination of third-party contracts and relationships where the non-compliant party is an external vendor or contractor;
- Notification to regulatory authorities (NACSA) where non-compliance constitutes a breach under Act 854;
- Civil or criminal liability under applicable Malaysian law.

### 13.3 Exception Management

*No policy can anticipate every operational scenario. Exceptions must be managed formally to ensure they are tracked, controlled, and reviewed.*

- Requests for exceptions to this Policy must be submitted in writing to the CISO using the Policy Exception Request Form (refer Appendix E);
- All exceptions must include: business justification, risk assessment, proposed compensating controls, and a defined review/expiry date;
- The CISO must review and approve or deny the exception within [specify period, e.g., 5 business days];
- Approved exceptions must be logged in the Policy Exception Register and reviewed [specify frequency, e.g., quarterly];
- No exception shall remain in force for more than [specify period, e.g., 12 months] without formal renewal;
- Exceptions that introduce significant risk to NCII systems must be escalated to the Board Risk Committee.

---

## 14. Review and Approval

### 14.1 Policy Review Schedule

This Policy shall be reviewed:

- **Annually**, at a minimum, in accordance with [Organization Name]'s policy management framework;
- **Following a significant security incident** involving remote access;
- **Upon material changes** to the regulatory landscape (e.g., new NACSA directives issued under Act 854);
- **Upon significant changes** to [Organization Name]'s technology environment or remote access architecture.

The CISO is responsible for initiating and completing the review process. Proposed amendments must be submitted to [specify governance body, e.g., the IT Steering Committee / Board Risk Committee] for approval prior to implementation.

### 14.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Effective Date] | [Author Name, Title] | Initial release of Remote Access Policy |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes — major revision] |

### 14.3 Approval Sign-Off

*All approvers must sign below to confirm they have reviewed and approved this Policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Chief Information Security Officer** | [Name] | _________________________ | [Date] |
| **Chief Technology Officer / Head of IT** | [Name] | _________________________ | [Date] |
| **Chief Risk Officer / Head of Risk** | [Name] | _________________________ | [Date] |
| **Head of Compliance** | [Name] | _________________________ | [Date] |
| **Chief Executive Officer / Managing Director** | [Name] | _________________________ | [Date] |

---

## 15. References

*This section provides traceability to all regulatory instruments and standards that this Policy is designed to satisfy.*

### 15.1 Legislation and Regulations

| Reference | Title | Sections Referenced |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Section 18 — Cybersecurity measures for NCII entities; Section 24 — Duty to comply with cybersecurity directives |
| Act 709 | Personal Data Protection Act 2010 | Section 9 — Security Principle |
| [Act No.] | Communications and Multimedia Act 1998 | [Relevant Sections] |

### 15.2 NACSA Directives and Guidelines

| Reference | Title | Applicable Requirement |
|---|---|---|
| [NACSA Directive Reference] | [Title of Applicable Directive] | [Specific requirement addressed by this Policy] |
| [NACSA Guideline Reference] | National Cyber Security Policy (NCSP) | [Applicable strategic objectives] |
| [NACSA Circular Reference] | [Title of Applicable Circular] | [Applicable requirement] |

### 15.3 Standards and Frameworks

| Standard | Title | Applicable Sections |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | A.6.7 (Remote Working), A.8.20 (Networks Security) |
| ISO/IEC 27002:2022 | Information Security Controls | 6.7, 8.20 |
| NIST SP 800-46 Rev. 2 | Guide to Enterprise Telework, Remote Access, and BYOD Security | All chapters |
| NIST SP 800-63B | Digital Identity Guidelines — Authentication | MFA assurance levels |
| CIS Controls v8 | Center for Internet Security Controls | Control 6 (Access Control), Control 12 (Network Infrastructure) |

### 15.4 Internal Policy Documents

| Document | Owner | Relationship |
|---|---|---|
| Information Security Policy | CISO | Parent policy |
| Acceptable Use Policy | CISO | Supplementary — permitted use |
| Privileged Access Management Policy | CISO | Supplementary — PAM controls |
| Third-Party Risk Management Policy | Risk & Compliance | Supplementary — vendor controls |
| Endpoint Hardening Standard | IT/IAM Team | Technical standard referenced in Section 8 |
| Incident Response Policy | CISO | Referenced — breach response |
| Patch Management Policy | IT Team | Referenced — VPN and endpoint patching |

---

## 16. Appendices

### Appendix A — Remote Access Architecture Diagram

*Insert or attach a network diagram illustrating the approved remote access architecture, including VPN gateway placement, bastion host/jump server location, network segmentation zones, and connections to NCII systems. The diagram must be version-controlled and reflect the current approved architecture.*

**[Insert Network Architecture Diagram Here]**

Diagram Reference: [Diagram ID and Version]
Last Updated: [Date]

---

### Appendix B — Endpoint Hardening Baseline

*Provide a summary reference to the Endpoint Hardening Standard, or reproduce the key configuration requirements applicable to remote access devices. Include requirements for Windows, macOS, and approved mobile device platforms as applicable.*

| Control Area | Windows (Corporate) | macOS (Corporate) | Mobile (MDM-Enrolled) |
|---|---|---|---|
| Full Disk Encryption | BitLocker (AES-256) | FileVault 2 | Device encryption mandatory |
| Firewall | Windows Defender Firewall — enabled | macOS Application Firewall — enabled | MDM-enforced |
| Antivirus / EDR | [Approved solution] | [Approved solution] | [Approved solution] |
| Screen Lock Timeout | 5 minutes | 5 minutes | 2 minutes |
| Automatic Updates | Enabled (critical patches within 48 hours) | Enabled (critical patches within 48 hours) | Enforced via MDM |
| Local Admin Rights | Disabled for standard users | Disabled for standard users | N/A |
| USB Control | Blocked via policy | Blocked via policy | N/A |

*Full technical specifications are maintained in the [Organization Name] Endpoint Hardening Standard [Document ID].*

---

### Appendix C — Third-Party Remote Access Request Form Template

*This form must be completed for all third-party remote access requests and submitted to the IT/IAM Team with sign-off from the business sponsor.*

| Field | Detail |
|---|---|
| **Requesting Organization** | [Third-Party Organization Name] |
| **Contact Name and Title** | [Name, Title] |
| **Internal Business Sponsor** | [Employee Name, Department] |
| **Purpose of Remote Access** | [Description of business need] |
| **Systems/Applications Required** | [Specific systems — no broad network access] |
| **Requested Access Period** | From: [Date] To: [Date] |
| **MFA Method to be Used** | [Specify] |
| **Endpoint Compliance Confirmed** | Yes / No (attach evidence) |
| **NDA in Place** | Yes / No (attach reference) |
| **DPA Required** | Yes / No (if personal data involved) |
| **Business Sponsor Signature** | _________________________ Date: [Date] |
| **CISO / Delegate Approval** | _________________________ Date: [Date] |

---

### Appendix D — Vendor Remote Access Policy Acknowledgement Form

*All third-party personnel granted remote access must sign this acknowledgement prior to access being provisioned.*

I, **[Vendor Representative Name]**, representing **[Third-Party Organization Name]**, acknowledge that I have read, understood, and agree to comply with the [Organization Name] Remote Access Policy (Version [X.X], dated [Date]) as a condition of being granted remote access to [Organization Name]'s systems.

I understand that:
- My remote access sessions may be monitored and recorded;
- I must not share my credentials or access with any other person;
- I must report any suspected security incidents immediately;
- Non-compliance may result in immediate revocation of access and termination of the vendor relationship.

| Field | Detail |
|---|---|
| **Name** | [Full Name] |
| **Title** | [Job Title] |
| **Organization** | [Third-Party Organization Name] |
| **Signature** | _________________________ |
| **Date** | [Date] |
| **Witness (if required)** | _________________________ |

---

### Appendix E — Policy Exception Request Form Template

*Complete this form to request a formal exception to any requirement in this Policy. Submit to the CISO for review.*

| Field | Detail |
|---|---|
| **Requestor Name and Title** | [Name, Title] |
| **Department / Business Unit** | [Department] |
| **Date of Request** | [Date] |
| **Policy Section(s) Affected** | [Specify sections e.g., Section 6.4 — Split Tunneling] |
| **Description of Exception Required** | [Detailed description of what cannot be complied with] |
| **Business Justification** | [Why compliance is not feasible in this instance] |
| **Risk Assessment** | [What risks are introduced by this exception] |
| **Proposed Compensating Controls** | [What controls will mitigate the risk in lieu of compliance] |
| **Requested Exception Duration** | From: [Date] To: [Date] (maximum 12 months) |
| **Requestor Signature** | _________________________ Date: [Date] |
| **Business Unit Manager Sign-Off** | _________________________ Date: [Date] |
| **CISO Decision** | Approved / Denied |
| **CISO Comments** | [Conditions or rationale] |
| **CISO Signature** | _________________________ Date: [Date] |
| **Next Review Date** | [Date] |

---

### Appendix F — Remote Access Incident Response Quick Reference

*This quick reference summarizes the immediate actions to be taken in the event of a suspected remote access security incident.*

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Detect and identify anomalous remote access activity | SOC | Immediately upon alert |
| 2 | Isolate — suspend affected remote access accounts | IT/IAM Team | Within [specify, e.g., 15 minutes] of confirmation |
| 3 | Notify CISO and Incident Response Team | SOC | Within [specify, e.g., 30 minutes] |
| 4 | Preserve evidence — session logs, recordings, SIEM data | SOC / IT | Immediately — do not delete logs |
| 5 | Assess scope and impact | IR Team | Within [specify, e.g., 2 hours] |
| 6 | Notify NACSA (if NCII breach) | CISO / Compliance | Within [specify regulatory timeframe per Act 854] |
| 7 | Conduct root cause analysis | IR Team | Within [specify, e.g., 5 business days] |
| 8 | Implement remediation and restore access | IT/IAM Team | Upon CISO approval |
| 9 | Post-incident review and lessons learned | CISO / IR Team | Within [specify, e.g., 10 business days] |

*Full incident response procedures are documented in the [Organization Name] Incident Response Policy [Document ID].*

---

*End of Document*

---

**Document Control**

| Field | Detail |
|---|---|
| **Document ID** | [Document ID] |
| **Title** | Remote Access Policy |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Information Security Officer |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |

*This document is subject to [Organization Name]'s document control procedures. Printed copies are uncontrolled. Always refer to the document management system for the current approved version.*