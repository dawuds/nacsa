# Security Configuration Baseline Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Architecture |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 6 months from Last Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Document Status** | [Draft / Under Review / Approved / Retired] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute an offence under the Cyber Security Act 2024 (Act 854) and related legislation. If you have received this document in error, please notify [Security Architecture contact] immediately and destroy all copies.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Framework](#2-regulatory-and-policy-framework)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [OS Hardening Requirements — Windows](#5-os-hardening-requirements--windows)
6. [OS Hardening Requirements — Linux](#6-os-hardening-requirements--linux)
7. [Database Security Configurations](#7-database-security-configurations)
8. [Application Server Settings](#8-application-server-settings)
9. [CIS Benchmark Alignment](#9-cis-benchmark-alignment)
10. [Deviation Approval Process](#10-deviation-approval-process)
11. [Automated Compliance Checking](#11-automated-compliance-checking)
12. [Exceptions and Compensating Controls](#12-exceptions-and-compensating-controls)
13. [Enforcement and Non-Compliance](#13-enforcement-and-non-compliance)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe why this Standard exists, the security objective it serves, and the regulatory obligation it fulfils. Link to the organisation's overarching Information Security Policy.*

This Security Configuration Baseline Standard ("the Standard") establishes the **minimum mandatory security configuration requirements** for all operating systems, database management systems, and application servers operated by [Organization Name] in its capacity as a National Critical Information Infrastructure (NCII) entity.

This Standard is issued pursuant to [Organization Name]'s obligations under the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 24, which impose duties on NCII entities to implement and maintain adequate cyber security measures. The Standard operationalises those duties by prescribing specific, measurable, and auditable technical controls aligned with internationally recognised hardening benchmarks.

The Standard exists to:

- Reduce the attack surface of systems within the NCII environment by eliminating unnecessary services, accounts, and default configurations.
- Establish a consistent, repeatable, and auditable security posture across all in-scope systems.
- Support compliance assessments conducted by the **National Cyber Security Agency (NACSA)** and internal audit functions.
- Provide a defensible baseline from which deviations are formally managed and risk-accepted.
- Enable automated, continuous verification of configuration compliance.

### 1.2 Scope

*Define precisely which systems, environments, departments, and third parties are subject to this Standard. Be explicit about inclusions and exclusions.*

#### 1.2.1 In-Scope Systems

This Standard applies to all of the following assets owned, operated, or managed by [Organization Name], regardless of whether they are hosted on-premises, in a private cloud, or in a contracted managed service environment:

| System Category | Examples | Applicability |
|---|---|---|
| Server Operating Systems (Windows) | Windows Server 2019, Windows Server 2022 | Mandatory |
| Server Operating Systems (Linux) | RHEL 8/9, Ubuntu 22.04 LTS, CentOS Stream | Mandatory |
| Relational Database Management Systems | Microsoft SQL Server, Oracle Database, PostgreSQL, MySQL | Mandatory |
| Application Servers | Apache Tomcat, NGINX, Microsoft IIS, JBoss/WildFly | Mandatory |
| Virtualisation Hosts | VMware ESXi, Hyper-V | Mandatory |
| Container Hosts | Docker Engine, Kubernetes Nodes | Mandatory |
| Network Infrastructure (Supplementary) | Refer to [Network Device Hardening Standard — Document ID] | Reference Only |
| End-User Devices | Refer to [Endpoint Security Standard — Document ID] | Reference Only |

#### 1.2.2 Out-of-Scope Systems

The following are explicitly excluded from this Standard:

- **Development and test environments** not connected to production networks or not storing live personal data (subject to a separate Development Security Standard — [Document ID]).
- **Vendor-managed appliances** where the operating system is not accessible to [Organization Name] administrators, provided a vendor hardening attestation is obtained and retained on file.
- **Decommissioned systems** that have been formally retired and network-isolated per the [Asset Disposal Procedure — Document ID].

#### 1.2.3 Organisational Scope

This Standard applies to:

- All employees of [Organization Name] with system administration, database administration, or application ownership responsibilities.
- All third-party vendors, contractors, and managed service providers (MSPs) operating systems on behalf of [Organization Name] under a contractual arrangement.
- All subsidiaries and affiliates operating within the NCII environment of [Organization Name], unless a separate baseline has been formally approved.

#### 1.2.4 Geographic Scope

This Standard applies to all systems operated within Malaysia and to any offshore systems that process or store data subject to Malaysian regulatory jurisdiction, including personal data of Malaysian residents subject to the **Personal Data Protection Act 2010 (PDPA)**.

---

## 2. Regulatory and Policy Framework

### 2.1 Regulatory Basis

*List all legislation, regulations, and regulatory guidance that this Standard is issued to satisfy. Provide sufficient detail for an auditor to trace each requirement to its source.*

This Standard is grounded in the following regulatory instruments:

| Instrument | Issuing Authority | Relevant Provisions | Obligation |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | Parliament of Malaysia / NACSA | Sections 18, 24 | Mandatory |
| NACSA NCII Sector Guidelines [Latest Version] | NACSA | [Relevant Guideline Reference] | Mandatory |
| Personal Data Protection Act 2010 (Act 709) | Parliament of Malaysia | Sections 9, 10, 11 (Security Principle) | Mandatory |
| Bank Negara Malaysia Risk Management in Technology (RMiT) Policy | BNM | Para 10.x (Technology Risk Controls) | Mandatory (if financial sector) |
| [Organisation Name] Information Security Policy | Security Architecture | All | Mandatory (Internal) |
| [Organisation Name] IT Risk Management Framework | Risk Management | All | Mandatory (Internal) |

#### 2.1.1 Cyber Security Act 2024 — Section 18 (Duties of NCII Entity)

Section 18 of Act 854 imposes a duty on every NCII entity to take **reasonable steps to manage cyber security risks** to its critical information infrastructure. This Standard directly supports compliance by establishing the technical baseline controls that constitute reasonable steps in the context of system hardening.

Key obligations addressed:

- Implement and maintain cyber security measures commensurate with the sensitivity and criticality of NCII systems.
- Conduct periodic review of security measures to ensure continued adequacy.
- Report material deviations from established cyber security measures to NACSA where required.

#### 2.1.2 Cyber Security Act 2024 — Section 24 (Compliance with Directions)

Section 24 empowers NACSA to issue directions to NCII entities on cyber security matters. This Standard is designed to ensure [Organization Name] is in a position to demonstrate compliance with any such directions relating to system configuration and hardening. All baselines defined herein shall be reviewed and updated whenever NACSA issues a relevant direction.

### 2.2 Internal Policy Hierarchy

*Show how this Standard fits within the organisation's policy framework.*

```
Information Security Policy (Tier 1 — Policy)
    └── Security Architecture Standards (Tier 2 — Standards)
            └── Security Configuration Baseline Standard ← THIS DOCUMENT
                    └── System-Specific Hardening Guides (Tier 3 — Procedures/Guides)
                            ├── Windows Server Hardening Guide [Doc ID]
                            ├── Linux Server Hardening Guide [Doc ID]
                            ├── MSSQL Hardening Guide [Doc ID]
                            └── [Additional Guides]
```

### 2.3 Relationship to Other Standards

| Related Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy; this Standard operationalises its requirements |
| Access Control Standard | [Doc ID] | Access configurations defined herein must align |
| Vulnerability Management Standard | [Doc ID] | Baseline scanning supports deviation identification |
| Patch Management Standard | [Doc ID] | Patch levels are a configuration baseline component |
| Network Device Hardening Standard | [Doc ID] | Complementary scope (network devices) |
| Incident Response Plan | [Doc ID] | Baseline deviations may trigger incident procedures |
| Change Management Policy | [Doc ID]] | All baseline changes must follow change management |

---

## 3. Definitions and Abbreviations

### 3.1 Definitions

*Define all technical and regulatory terms used in this Standard to ensure consistent interpretation by all readers.*

| Term | Definition |
|---|---|
| **Baseline Configuration** | A documented set of specifications for a system, or a configuration item within a system, that has been formally reviewed and agreed upon and serves as the basis for future builds and changes. |
| **Benchmark** | A set of recommended security configuration settings, typically published by an authoritative body such as the Centre for Internet Security (CIS) or the Defense Information Systems Agency (DISA). |
| **Compensating Control** | An alternative security control that achieves an equivalent or greater level of protection when a required baseline control cannot be implemented. |
| **Configuration Item (CI)** | Any hardware, software, or service component that is subject to configuration management, including its associated configuration settings. |
| **Critical Information Infrastructure (CII)** | Infrastructure, the loss or compromise of which would have a significant impact on national security, public safety, public health, or the Malaysian economy. |
| **Deviation** | Any configuration state that differs from the approved baseline, whether intentional (formally approved) or unintentional (drift). |
| **Drift** | The gradual deviation of a system's configuration from its approved baseline, typically caused by undocumented changes over time. |
| **Hardening** | The process of reducing a system's attack surface by removing unnecessary functionality, disabling unused services, and applying secure configuration settings. |
| **NCII Entity** | An entity designated by NACSA as an owner or operator of National Critical Information Infrastructure under Act 854. |
| **Privileged Account** | Any account with elevated or administrative rights on a system, including local administrator accounts, root accounts, database administrator accounts, and service accounts with elevated permissions. |
| **Remediation Period** | The maximum permitted time between the identification of a baseline non-conformance and its resolution or formal exception approval. |
| **Secure Configuration** | A configuration applied to a system that reduces its exposure to security threats by disabling unnecessary features and applying security controls. |
| **Security Technical Implementation Guide (STIG)** | Hardening guidance published by DISA for US Department of Defense systems, widely adopted as a hardening reference in non-DoD contexts. |

### 3.2 Abbreviations

| Abbreviation | Expansion |
|---|---|
| ACL | Access Control List |
| BNM | Bank Negara Malaysia |
| CIS | Centre for Internet Security |
| CISO | Chief Information Security Officer |
| CMS | Configuration Management System |
| DBMS | Database Management System |
| DISA | Defense Information Systems Agency |
| GPO | Group Policy Object |
| ISMS | Information Security Management System |
| MFA | Multi-Factor Authentication |
| MSP | Managed Service Provider |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| NTP | Network Time Protocol |
| OS | Operating System |
| PDPA | Personal Data Protection Act 2010 |
| RBAC | Role-Based Access Control |
| RMiT | Risk Management in Technology (BNM Policy) |
| SIEM | Security Information and Event Management |
| SLA | Service Level Agreement |
| SSH | Secure Shell |
| SSL/TLS | Secure Sockets Layer / Transport Layer Security |
| STIG | Security Technical Implementation Guide |
| SUDM | Service User and Dependency Mapping |

---

## 4. Roles and Responsibilities

### 4.1 Overview

*Define accountability for this Standard using a RACI model. Ensure every key activity has a single Accountable owner.*

The following roles are referenced throughout this Standard. [Organization Name] shall maintain an up-to-date mapping of named individuals to each role in the [ISMS Roles Register — Document ID].

### 4.2 Role Descriptions

| Role | Description |
|---|---|
| **Chief Information Security Officer (CISO)** | Ultimate accountability for information security, including this Standard. Approves the Standard and all formal deviations. |
| **Security Architecture** | Owns and maintains this Standard. Defines baseline requirements. Reviews and updates on a semi-annual basis. |
| **System Administrators** | Responsible for implementing and maintaining baseline configurations on all in-scope servers. |
| **Database Administrators (DBAs)** | Responsible for implementing and maintaining baseline configurations on all in-scope DBMS instances. |
| **Application Owners** | Responsible for ensuring application server configurations comply with this Standard for systems under their ownership. |
| **IT Operations** | Responsible for deploying and enforcing baseline configurations through automation tooling. |
| **Compliance and Risk** | Responsible for monitoring compliance against this Standard and reporting to senior management. |
| **Internal Audit** | Responsible for independently assessing compliance with this Standard. |
| **Vendor / MSP** | Where systems are managed by a third party, the vendor/MSP is responsible for implementing baseline controls per contractual obligations. |
| **Change Advisory Board (CAB)** | Approves changes to in-scope systems, including those required to achieve baseline compliance. |

### 4.3 RACI Matrix

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

| Activity | CISO | Security Architecture | System Admin | DBA | App Owner | IT Ops | Compliance & Risk | Internal Audit | Vendor/MSP |
|---|---|---|---|---|---|---|---|---|---|
| Define and maintain baseline standards | I | A/R | C | C | C | C | C | I | I |
| Implement OS hardening (Windows) | I | A | R | — | — | C | I | I | R (if MSP) |
| Implement OS hardening (Linux) | I | A | R | — | — | C | I | I | R (if MSP) |
| Implement database security configurations | I | A | C | R | — | C | I | I | R (if MSP) |
| Implement application server hardening | I | A | C | — | R | C | I | I | R (if MSP) |
| Operate automated compliance scanning | I | C | C | C | C | A/R | I | I | C |
| Review compliance scan results | I | A | R | R | R | C | R | I | R (if MSP) |
| Approve deviation requests | A | R | I | I | C | I | C | I | I |
| Manage exceptions and compensating controls | A | R | C | C | C | C | R | I | C |
| Conduct semi-annual Standard review | A | R | C | C | C | C | C | I | I |
| Report compliance status to leadership | I | C | I | I | I | I | A/R | I | I |
| Independent compliance assessment | I | C | C | C | C | I | C | A/R | I |
| Escalate non-compliance | A | C | I | I | I | I | R | R | I |

---

## 5. OS Hardening Requirements — Windows

### 5.1 Overview

*Summarise the approach to Windows server hardening, referencing the specific CIS Benchmark version in use. State whether the Level 1 or Level 2 profile applies.*

[Organization Name] requires all Windows Server instances within scope to be hardened in accordance with the **CIS Microsoft Windows Server Benchmark**, minimum **Level 1** profile, supplemented by the additional controls specified in this section. As of the effective date of this Standard, the applicable benchmark versions are:

| Platform | CIS Benchmark Version | Profile |
|---|---|---|
| Windows Server 2019 | CIS Microsoft Windows Server 2019 Benchmark v3.0.0 | Level 1 |
| Windows Server 2022 | CIS Microsoft Windows Server 2022 Benchmark v3.0.0 | Level 1 |

*Organisations operating in higher-risk environments, or as directed by NACSA, shall apply the Level 2 profile. Deviations from any Level 2 control shall follow the Deviation Approval Process defined in Section 10.*

### 5.2 Account and Password Policy

*Define mandatory account and password settings. Where Group Policy Objects (GPOs) are used to enforce these, reference the GPO name or template.*

#### 5.2.1 Password Policy

| Control ID | Setting | Required Value | Rationale |
|---|---|---|---|
| WIN-ACC-001 | Minimum Password Length | 14 characters | CIS L1; NACSA guidance |
| WIN-ACC-002 | Password Complexity | Enabled | CIS L1 |
| WIN-ACC-003 | Maximum Password Age | 90 days | CIS L1; RMiT para [x] |
| WIN-ACC-004 | Minimum Password Age | 1 day | Prevents immediate reuse cycling |
| WIN-ACC-005 | Password History | 24 passwords remembered | CIS L1 |
| WIN-ACC-006 | Reversible Encryption | Disabled | CIS L1 |
| WIN-ACC-007 | Store Passwords Using Reversible Encryption | Disabled | CIS L1 |

#### 5.2.2 Account Lockout Policy

| Control ID | Setting | Required Value | Rationale |
|---|---|---|---|
| WIN-ACC-008 | Account Lockout Threshold | 5 invalid logon attempts | CIS L1 |
| WIN-ACC-009 | Account Lockout Duration | 15 minutes | CIS L1 |
| WIN-ACC-010 | Reset Account Lockout Counter After | 15 minutes | CIS L1 |

#### 5.2.3 Local Administrator Account

| Control ID | Requirement | Implementation |
|---|---|---|
| WIN-ACC-011 | Default Administrator account must be renamed | Configure via GPO: Computer Configuration → Windows Settings → Security Settings → Local Policies → Security Options |
| WIN-ACC-012 | Default Administrator account must be disabled where a named admin account exists | GPO or local policy |
| WIN-ACC-013 | Default Guest account must be disabled | GPO enforcement mandatory |
| WIN-ACC-014 | Local Administrator Password Solution (LAPS) must be deployed | Microsoft LAPS or equivalent; passwords rotated on schedule |
| WIN-ACC-015 | Shared local administrator credentials are prohibited | Each system must have a unique local admin password managed by LAPS |

### 5.3 User Rights Assignment

*Enumerate critical User Rights Assignments that restrict privilege escalation paths.*

| Control ID | Right | Permitted Accounts | Prohibited Accounts |
|---|---|---|---|
| WIN-URA-001 | Access this computer from the network | Administrators, Authenticated Users | Everyone, Anonymous Logon, Guests |
| WIN-URA-002 | Act as part of the operating system | No accounts | All |
| WIN-URA-003 | Allow log on locally | Administrators | All non-admin accounts on servers |
| WIN-URA-004 | Allow log on through Remote Desktop Services | Administrators, [Named RDP Group] | All others |
| WIN-URA-005 | Back up files and directories | Administrators, Backup Operators | All others |
| WIN-URA-006 | Create a token object | No accounts | All |
| WIN-URA-007 | Debug programs | No accounts (except break-glass) | All standard accounts |
| WIN-URA-008 | Enable computer and user accounts to be trusted for delegation | No accounts | All (unless explicit business need, requires deviation) |
| WIN-URA-009 | Force shutdown from a remote system | Administrators | All others |
| WIN-URA-010 | Load and unload device drivers | Administrators | All others |
| WIN-URA-011 | Manage auditing and security log | Administrators | All others |
| WIN-URA-012 | Take ownership of files or objects | Administrators | All others |

### 5.4 Security Options

| Control ID | Policy | Required Setting |
|---|---|---|
| WIN-SEC-001 | Accounts: Limit local account use of blank passwords to console logon only | Enabled |
| WIN-SEC-002 | Audit: Force audit policy subcategory settings | Enabled |
| WIN-SEC-003 | Audit: Shut down system immediately if unable to log security audits | Enabled (critical systems); review for operational impact |
| WIN-SEC-004 | Domain member: Digitally encrypt or sign secure channel data (always) | Enabled |
| WIN-SEC-005 | Interactive logon: Do not display last user name | Enabled |
| WIN-SEC-006 | Interactive logon: Do not require CTRL+ALT+DEL | Disabled (i.e., CTRL+ALT+DEL IS required) |
| WIN-SEC-007 | Interactive logon: Machine inactivity limit | 900 seconds (15 minutes) |
| WIN-SEC-008 | Microsoft network client: Digitally sign communications (always) | Enabled |
| WIN-SEC-009 | Microsoft network server: Digitally sign communications (always) | Enabled |
| WIN-SEC-010 | Network access: Do not allow anonymous enumeration of SAM accounts | Enabled |
| WIN-SEC-011 | Network access: Do not allow anonymous enumeration of SAM accounts and shares | Enabled |
| WIN-SEC-012 | Network access: Restrict anonymous access to Named Pipes and Shares | Enabled |
| WIN-SEC-013 | Network security: LAN Manager authentication level | Send NTLMv2 response only. Refuse LM and NTLM |
| WIN-SEC-014 | Network security: Minimum session security for NTLM SSP-based clients | Require NTLMv2 session security, 128-bit encryption |
| WIN-SEC-015 | System cryptography: Use FIPS compliant algorithms | Enabled (subject to application compatibility assessment) |
| WIN-SEC-016 | User Account Control: Admin Approval Mode for the built-in Administrator account | Enabled |
| WIN-SEC-017 | User Account Control: Behaviour of the elevation prompt for administrators in Admin Approval Mode | Prompt for credentials on the secure desktop |
| WIN-SEC-018 | Windows Firewall: Domain Profile — Firewall state | On |
| WIN-SEC-019 | Windows Firewall: Private Profile — Firewall state | On |
| WIN-SEC-020 | Windows Firewall: Public Profile — Firewall state | On |

### 5.5 Audit Policy

*Define mandatory audit categories. Logs must be forwarded to the centralised SIEM within [X] minutes of event generation.*

| Control ID | Audit Category | Subcategory | Setting |
|---|---|---|---|
| WIN-AUD-001 | Account Logon | Credential Validation | Success and Failure |
| WIN-AUD-002 | Account Logon | Kerberos Authentication Service | Success and Failure |
| WIN-AUD-003 | Account Management | Computer Account Management | Success and Failure |
| WIN-AUD-004 | Account Management | Security Group Management | Success and Failure |
| WIN-AUD-005 | Account Management | User Account Management | Success and Failure |
| WIN-AUD-006 | Detailed Tracking | Process Creation | Success |
| WIN-AUD-007 | Logon/Logoff | Logon | Success and Failure |
| WIN-AUD-008 | Logon/Logoff | Logoff | Success |
| WIN-AUD-009 | Logon/Logoff | Special Logon | Success |
| WIN-AUD-010 | Object Access | Removable Storage | Success and Failure |
| WIN-AUD-011 | Policy Change | Audit Policy Change | Success and Failure |
| WIN-AUD-012 | Policy Change | Authentication Policy Change | Success |
| WIN-AUD-013 | Privilege Use | Sensitive Privilege Use | Success and Failure |
| WIN-AUD-014 | System | Security State Change | Success |
| WIN-AUD-015 | System | Security System Extension | Success and Failure |
| WIN-AUD-016 | System | System Integrity | Success and Failure |

**Event Log Size Requirements:**

| Log | Minimum Size | Retention (Local) |
|---|---|---|
| Security | 196,608 KB (192 MB) | 30 days |
| Application | 32,768 KB (32 MB) | 30 days |
| System | 32,768 KB (32 MB) | 30 days |

All logs are to be forwarded to the SIEM for centralised retention per the [Log Management and Retention Policy — Document ID].

### 5.6 Services

*Define services that must be disabled and services that must be enabled. Only services with a documented business justification may be enabled.*

#### 5.6.1 Services That Must Be Disabled

| Control ID | Service Name | Display Name | Rationale |
|---|---|---|---|
| WIN-SVC-001 | Spooler | Print Spooler | PrintNightmare; disable on non-print servers |
| WIN-SVC-002 | RemoteRegistry | Remote Registry | Reduces remote configuration attack surface |
| WIN-SVC-003 | Telnet | Telnet | Plaintext protocol; replaced by SSH |
| WIN-SVC-004 | SSDPSRV | SSDP Discovery | UPnP attack surface |
| WIN-SVC-005 | upnphost | UPnP Device Host | UPnP attack surface |
| WIN-SVC-006 | WMSvc | Web Management Service | Disable on non-IIS servers |
| WIN-SVC-007 | W3SVC | World Wide Web Publishing Service | Disable on non-IIS servers |
| WIN-SVC-008 | XblGameSave | Xbox Game Save | Not applicable to servers |
| WIN-SVC-009 | [Additional services per environment] | | |

#### 5.6.2 Services That Must Be Enabled

| Control ID | Service Name | Display Name | Rationale |
|---|---|---|---|
| WIN-SVC-101 | WinDefend | Windows Defender Antivirus Service | Endpoint protection |
| WIN-SVC-102 | EventLog | Windows Event Log | Audit and forensics |
| WIN-SVC-103 | wuauserv | Windows Update | Patch management |
| WIN-SVC-104 | MpsSvc | Windows Defender Firewall | Host-based firewall |
| WIN-SVC-105 | W32Tm | Windows Time | NTP synchronisation; required for Kerberos |

### 5.7 Registry Settings

*List critical registry settings that are not covered by Group Policy Object templates. These must be applied via GPO Preferences or a configuration management tool.*

| Control ID | Registry Key | Value Name | Required Data | Type |
|---|---|---|---|---|
| WIN-REG-001 | `HKLM\SYSTEM\CurrentControlSet\Control\Lsa` | LmCompatibilityLevel | 5 | DWORD |
| WIN-REG-002 | `HKLM\SYSTEM\CurrentControlSet\Control\Lsa` | NoLMHash | 1 | DWORD |
| WIN-REG-003 | `HKLM\SYSTEM\CurrentControlSet\Control\Lsa` | RestrictAnonymous | 1 | DWORD |
| WIN-REG-004 | `HKLM\SYSTEM\CurrentControlSet\Services\LanmanServer\Parameters` | EnableSecuritySignature | 1 | DWORD |
| WIN-REG-005 | `HKLM\SYSTEM\CurrentControlSet\Services\LanmanWorkstation\Parameters` | EnableSecuritySignature | 1 | DWORD |
| WIN-REG-006 | `HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System` | EnableLUA | 1 | DWORD |
| WIN-REG-007 | `HKLM\SOFTWARE\Policies\Microsoft\Windows NT\DNSClient` | EnableMulticast | 0 | DWORD |
| WIN-REG-008 | `HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Kernel` | ObCaseInsensitive | 1 | DWORD |

### 5.8 Windows Update and Patch Configuration

| Control ID | Requirement |
|---|---|
| WIN-UPD-001 | Windows Server Update Services (WSUS) or equivalent patch management tool must be configured for all in-scope systems |
| WIN-UPD-002 | Critical and Security patches must be applied within 14 calendar days of release |
| WIN-UPD-003 | All other patches must be applied within 30 calendar days of release |
| WIN-UPD-004 | Automatic download and scheduling must be configured; automatic installation is subject to CAB approval |
| WIN-UPD-005 | Systems must not have pending Critical patches older than 14 days at the time of any compliance assessment |

### 5.9 Encryption and TLS Requirements (Windows)

| Control ID | Requirement |
|---|---|
| WIN-ENC-001 | TLS 1.0 and TLS 1.1 must be disabled on all systems |
| WIN-ENC-002 | SSL 2.0 and SSL 3.0 must be disabled on all systems |
| WIN-ENC-003 | TLS 1.2 minimum must be enabled; TLS 1.3 is preferred where supported |
| WIN-ENC-004 | Weak cipher suites (RC4, DES, 3DES, NULL) must be disabled |
| WIN-ENC-005 | BitLocker Drive Encryption must be enabled on all servers storing sensitive or personal data |
| WIN-ENC-006 | BitLocker recovery keys must be escrowed to [Key Management System — specify] |

---

## 6. OS Hardening Requirements — Linux

### 6.1 Overview

*Summarise the approach to Linux server hardening, referencing the specific CIS Benchmark version in use and whether Level 1 or Level 2 applies.*

[Organization Name] requires all Linux server instances within scope to be hardened in accordance with the **CIS Benchmark for the relevant Linux distribution**, minimum **Level 1** profile. As of the effective date of this Standard, the applicable benchmark versions are:

| Distribution | CIS Benchmark Version | Profile |
|---|---|---|
| Red Hat Enterprise Linux 8 | CIS RHEL 8 Benchmark v3.0.0 | Level 1 Server |
| Red Hat Enterprise Linux 9 | CIS RHEL 9 Benchmark v2.0.0 | Level 1 Server |
| Ubuntu 22.04 LTS | CIS Ubuntu Linux 22.04 LTS Benchmark v2.0.0 | Level 1 Server |
| CentOS Stream 9 | CIS CentOS Stream 9 Benchmark [Latest] | Level 1 Server |

### 6.2 Filesystem Configuration

| Control ID | Requirement | Implementation |
|---|---|---|
| LNX-FS-001 | Separate partitions must be created for `/tmp`, `/var`, `/var/log`, `/var/log/audit`, and `/home` | Enforced at build time via kickstart/cloud-init |
| LNX-FS-002 | `nodev` mount option must be set on `/tmp`, `/var/tmp`, `/home`, and removable media | `/etc/fstab` |
| LNX-FS-003 | `nosuid` mount option must be set on `/tmp`, `/var/tmp`, and removable media | `/etc/fstab` |
| LNX-FS-004 | `noexec` mount option must be set on `/tmp` and `/var/tmp` | `/etc/fstab` |
| LNX-FS-005 | `/proc` filesystem must be mounted with `hidepid=2` | `/etc/fstab` |
| LNX-FS-006 | Sticky bit must be set on all world-writable directories | Enforced and monitored via compliance scanning |
| LNX-FS-007 | AIDE or equivalent file integrity monitoring must be installed and baseline initialised | Post-hardening; alert on unexpected changes |
| LNX-FS-008 | Filesystem ACLs must be enabled where required | Verify `acl` mount option |
| LNX-FS-009 | Automounting of filesystems must be disabled (`autofs` service disabled) | `systemctl disable autofs` |
| LNX-FS-010 | USB storage must be disabled on servers | `/etc/modprobe.d/usb-storage.conf: install usb-storage /bin/true` |

### 6.3 Software and Package Management

| Control ID | Requirement |
|---|---|
| LNX-PKG-001 | Only packages required for the system's documented function may be installed |
| LNX-PKG-002 | Package management must be configured to verify GPG signatures on all packages |
| LNX-PKG-003 | GPG keys must not be disabled (`gpgcheck=1` in yum/dnf configuration) |
| LNX-PKG-004 | Package repositories must only reference approved, internally mirrored or vendor-official repositories |
| LNX-PKG-005 | Packages superseded by more secure alternatives must be removed (e.g., `telnet`, `rsh`, `ypbind`, `xinetd`) |
| LNX-PKG-006 | `aide` (Advanced Intrusion Detection Environment) must be installed |
| LNX-PKG-007 | `firewalld` or `nftables` must be installed and enabled |
| LNX-PKG-008 | `auditd` must be installed and enabled |
| LNX-PKG-009 | Automatic security updates must be configured via `dnf-automatic` or `unattended-upgrades` (subject to CAB approval for automated installation) |

### 6.4 Services and Network Configuration

| Control ID | Requirement |
|---|---|
| LNX-SVC-001 | Only services required for the system's documented function may be active; all others must be disabled and masked |
| LNX-SVC-002 | `inetd` / `xinetd` must be disabled |
| LNX-SVC-003 | The `chargen`, `daytime`, `discard`, `echo`, `time` services (TCP/UDP) must be disabled |
| LNX-SVC-004 | `avahi-daemon` (mDNS) must be disabled unless required for a documented function |
| LNX-SVC-005 | `cups` (print daemon) must be disabled on non-print servers |
| LNX-SVC-006 | `dhcpd` must be disabled unless the system is an authorised DHCP server |
| LNX-SVC-007 | `ldap` (slapd) must be disabled unless the system is an authorised LDAP server |
| LNX-SVC-008 | `nfs` and `rpcbind` must be disabled unless explicitly required |
| LNX-SVC-009 | `rsyncd` must be disabled unless explicitly required |
| LNX-SVC-010 | `snmpd` must be disabled unless required; if required, SNMPv3 with authentication and encryption must be used |
| LNX-SVC-011 | `vsftpd` / `ftpd` must be disabled; SFTP via SSH is the approved alternative |
| LNX-SVC-012 | `telnet` must not be installed or enabled |
| LNX-SVC-013 | Time synchronisation must be configured via `chronyd` or `ntpd`; the time source must be the approved internal NTP server |
| LNX-SVC-014 | IP forwarding must be disabled (`net.ipv4.ip_forward = 0`) unless the system is a designated router |

### 6.5 Network Parameters (Kernel `sysctl`)

| Control ID | Parameter | Required Value | Rationale |
|---|---|---|---|
| LNX-NET-001 | `net.ipv4.ip_forward` | 0 | Prevents routing between interfaces |
| LNX-NET-002 | `net.ipv4.conf.all.send_redirects` | 0 | Prevent ICMP redirect attacks |
| LNX-NET-003 | `net.ipv4.conf.default.send_redirects` | 0 | Prevent ICMP redirect attacks |
| LNX-NET-004 | `net.ipv4.conf.all.accept_redirects` | 0 | Prevent ICMP redirect attacks |
| LNX-NET-005 | `net.ipv4.conf.all.secure_redirects` | 0 | Prevent secure ICMP redirect attacks |
| LNX-NET-006 | `net.ipv4.conf.all.log_martians` | 1 | Log spoofed, source-routed packets |
| LNX-NET-007 | `net.ipv4.conf.default.log_martians` | 1 | Log spoofed, source-routed packets |
| LNX-NET-008 | `net.ipv4.icmp_echo_ignore_broadcasts` | 1 | Prevent Smurf attacks |
| LNX-NET-009 | `net.ipv4.icmp_ignore_bogus_error_responses` | 1 | Ignore bogus ICMP responses |
| LNX-NET-010 | `net.ipv4.conf.all.rp_filter` | 1 | Enable reverse path filtering |
| LNX-NET-011 | `net.ipv4.tcp_syncookies` | 1 | Protect against SYN flood attacks |
| LNX-NET-012 | `net.ipv6.conf.all.disable_ipv6` | 1 | Disable IPv6 if not in use |
| LNX-NET-013 | `net.ipv6.conf.all.accept_redirects` | 0 | Prevent IPv6 ICMP redirect attacks |
| LNX-NET-014 | `kernel.randomize_va_space` | 2 | Enable full ASLR |
| LNX-NET-015 | `fs.suid_dumpable` | 0 | Disable core dumps for SUID programs |

### 6.6 Auditing (auditd)

*Define mandatory audit rules to be configured in `/etc/audit/rules.d/`. Rules must persist across reboots.*

| Control ID | Event to Audit | Rule (example) |
|---|---|---|
| LNX-AUD-001 | System time changes | `-a always,exit -F arch=b64 -S adjtimex -S settimeofday -k time-change` |
| LNX-AUD-002 | User/group modifications | `-w /etc/group -p wa -k identity` |
| LNX-AUD-003 | `/etc/passwd` modifications | `-w /etc/passwd -p wa -k identity` |
| LNX-AUD-004 | `/etc/shadow` modifications | `-w /etc/shadow -p wa -k identity` |
| LNX-AUD-005 | Network configuration changes | `-a always,exit -F arch=b64 -S sethostname -S setdomainname -k system-locale` |
| LNX-AUD-006 | SELinux/AppArmor policy changes | `-w /etc/selinux/ -p wa -k MAC-policy` |
| LNX-AUD-007 | Login/logout events | `-w /var/log/lastlog -p wa -k logins` |
| LNX-AUD-008 | `sudo` usage | `-w /var/log/sudo.log -p wa -k actions` |
| LNX-AUD-009 | Module loading/unloading | `-w /sbin/insmod -p x -k modules` |
| LNX-AUD-010 | Failed file access attempts (unauthorised) | `-a always,exit -F arch=b64 -S open -F dir=/etc -F success=0 -k unauth-access` |
| LNX-AUD-011 | `cron` configuration changes | `-w /etc/crontab -p wa -k cron` |
| LNX-AUD-012 | Privileged command execution | `-a always,exit -F arch=b64 -F euid=0 -S execve -k root-commands` |

**Audit Log Configuration:**

| Parameter | Required Value |
|---|---|
| `max_log_file` | 100 (MB) |
| `max_log_file_action` | keep_logs |
| `space_left_action` | email |
| `action_mail_acct` | [security-alerts@organisation.com] |
| `admin_space_left_action` | halt |
| `disk_full_action` | halt |

### 6.7 Access, Authentication, and SSH Configuration

| Control ID | Requirement | Implementation |
|---|---|---|
| LNX-SSH-001 | SSH Protocol version 1 must be disabled | `Protocol 2` in `sshd_config` |
| LNX-SSH-002 | SSH root login must be disabled | `PermitRootLogin no` |
| LNX-SSH-003 | SSH empty passwords must be disallowed | `PermitEmptyPasswords no` |
| LNX-SSH-004 | SSH idle timeout must be configured | `ClientAliveInterval 300`, `ClientAliveCountMax 3` |
| LNX-SSH-005 | SSH `MaxAuthTries` must be limited | `MaxAuthTries 4` |
| LNX-SSH-006 | SSH `LoginGraceTime` must be limited | `LoginGraceTime 60` |
| LNX-SSH-007 | SSH host-based authentication must be disabled | `IgnoreRhosts yes`, `HostbasedAuthentication no` |
| LNX-SSH-008 | SSH X11 forwarding must be disabled unless required | `X11Forwarding no` |
| LNX-SSH-009 | SSH `AllowUsers` or `AllowGroups` must be configured | Restrict to named users or groups |
| LNX-SSH-010 | SSH access must use key-based authentication for privileged accounts | `PubkeyAuthentication yes`; enforce via PAM |
| LNX-SSH-011 | Weak SSH ciphers and MACs must be disabled | `Ciphers aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr` |
| LNX-SSH-012 | SSH banner must display an approved warning message | `Banner /etc/issue.net`; content per Appendix A |
| LNX-SSH-013 | The `root` account must be locked | `passwd -l root` |
| LNX-SSH-014 | `su` access must be restricted to the `wheel` group | PAM configuration: `auth required pam_wheel.so use_uid` |
| LNX-SSH-015 | `sudo` must be configured to log all commands | `Defaults logfile=/var/log/sudo.log` |

### 6.8 File Permissions and Integrity

| Control ID | File / Directory | Required Permission | Rationale |
|---|---|---|---|
| LNX-FP-001 | `/etc/passwd` | `644` (root:root) | Readable, not writable by others |
| LNX-FP-002 | `/etc/shadow` | `640` or `000` (root:shadow) | No world access |
| LNX-FP-003 | `/etc/group` | `644` (root:root) | Readable, not writable by others |
| LNX-FP-004 | `/etc/gshadow` | `640` or `000` (root:shadow) | No world access |
| LNX-FP-005 | `/etc/crontab` | `600` (root:root) | No group or world access |
| LNX-FP-006 | `/boot/grub2/grub.cfg` | `600` (root:root) | Prevent unauthorised bootloader modification |
| LNX-FP-007 | World-writable files | Must not exist without sticky bit | Identify via `find / -xdev -type f -perm -0002` |
| LNX-FP-008 | Unowned files and directories | Must not exist | Identify and remediate via compliance scanning |
| LNX-FP-009 | SUID/SGID executables | Must be minimised and documented | Review against approved list in Appendix B |

---

## 7. Database Security Configurations

### 7.1 Overview

*Describe the approach to database hardening. Reference the applicable CIS Benchmark for each DBMS platform.*

[Organization Name] requires all database management system instances within scope to be configured in accordance with the following baseline requirements and applicable CIS Benchmarks:

| DBMS Platform | CIS Benchmark | Version |
|---|---|---|
| Microsoft SQL Server 2019 | CIS Microsoft SQL Server 2019 Benchmark | v1.4.0 |
| Microsoft SQL Server 2022 | CIS Microsoft SQL Server 2022 Benchmark | [Latest] |
| Oracle Database 19c | CIS Oracle Database 19c Benchmark | v1.1.0 |
| MySQL 8.0 | CIS Oracle MySQL 8.0 Benchmark | v1.0.0 |
| PostgreSQL 16 | CIS PostgreSQL 16 Benchmark | [Latest] |

### 7.2 Authentication and Access Control

| Control ID | Requirement | Applicable DBMS |
|---|---|---|
| DB-AUTH-001 | Default DBMS accounts (`sa`, `sys`, `system`, `root`, `anonymous`) must be disabled or have passwords changed to a strong value | All |
| DB-AUTH-002 | Authentication must use Windows Authentication (SQL Server) or OS authentication where available; mixed mode requires deviation approval | SQL Server |
| DB-AUTH-003 | Remote authentication from the database server to other systems using stored plaintext credentials is prohibited | All |
| DB-AUTH-004 | Database accounts must follow the principle of least privilege; application accounts must not have DBA or `sysadmin` roles | All |
| DB-AUTH-005 | Individual named accounts must be used for DBA access; shared DBA accounts are prohibited | All |
| DB-AUTH-006 | Database passwords must comply with the organisational password policy (minimum 14 characters, complexity enforced) | All |
| DB-AUTH-007 | External authentication integration (LDAP/AD) is preferred and must be implemented where supported | All |
| DB-AUTH-008 | MFA must be enforced for all DBA access to production databases | All |
| DB-AUTH-009 | Database login failure lockout must be configured at a maximum of 5 failed attempts | All (where supported) |
| DB-AUTH-010 | Application service accounts must use dedicated, non-interactive, non-expiring accounts with minimum required permissions | All |

### 7.3 Network and Connectivity Configuration

| Control ID | Requirement |
|---|---|
| DB-NET-001 | Database listener ports must only accept connections from authorised application servers; network ACLs and host-based firewall rules must enforce this |
| DB-NET-002 | Default listener ports must be changed to non-standard ports where operationally feasible |
| DB-NET-003 | SQL Server Browser Service must be disabled unless required for named instances |
| DB-NET-004 | All connections to the database from application servers must use encrypted channels (TLS 1.2 minimum); unencrypted database connections are prohibited |
| DB-NET-005 | Database servers must not be directly accessible from end-user networks or the internet |
| DB-NET-006 | Database links between disparate databases must be documented, approved, and encrypted |
| DB-NET-007 | Remote DBA connections must traverse a jump server or bastion host with MFA |

### 7.4 Auditing and Logging

| Control ID | Requirement | Implementation Notes |
|---|---|---|
| DB-AUD-001 | Database auditing must be enabled for all DDL statements (CREATE, ALTER, DROP) | Native audit; log to separate audit table or file |
| DB-AUD-002 | Database auditing must be enabled for all privileged account activity (DBA, SYSDBA) | Native audit |
| DB-AUD-003 | Failed login attempts must be audited | Native audit; forward to SIEM |
| DB-AUD-004 | Access to sensitive tables (containing personal data or financial records) must be audited at the row or statement level | Fine-grained auditing or equivalent |
| DB-AUD-005 | Database audit logs must be protected from modification by database users, including DBAs | Write to OS-level audit trail or WORM storage |
| DB-AUD-006 | Database audit logs must be forwarded to the centralised SIEM | Configure syslog forwarding or agent |
| DB-AUD-007 | Audit logs must be retained for a minimum of [12 months] online and [7 years] in archive | Per [Log Management and Retention Policy] |
| DB-AUD-008 | Direct access to underlying data files (bypassing the DBMS engine) must be detected and alerted | File integrity monitoring on data directories |

### 7.5 Encryption (Data at Rest and in Transit)

| Control ID | Requirement |
|---|---|
| DB-ENC-001 | Transparent Data Encryption (TDE) or equivalent must be enabled on all production databases storing sensitive or personal data |
| DB-ENC-002 | Encryption keys must be managed via an approved Key Management System; keys must not be stored in the same location as the encrypted data |
| DB-ENC-003 | Backup files must be encrypted prior to storage or transmission |
| DB-ENC-004 | TLS 1.2 minimum must be enforced for all database client connections |
| DB-ENC-005 | Sensitive columns (e.g., identity card numbers, credit card numbers, passwords) must be encrypted at the column level in addition to TDE |
| DB-ENC-006 | Database passwords stored in application configuration files must be encrypted or retrieved from a secrets management system |

### 7.6 Patching and Configuration Management

| Control ID | Requirement |
|---|---|
| DB-PATCH-001 | Critical database vendor security patches must be applied within 30 calendar days of release |
| DB-PATCH-002 | Patch testing must be performed in a non-production environment before production deployment |
| DB-PATCH-003 | All installed database features and components not required for the system's function must be removed or disabled |
| DB-PATCH-004 | SQL Server: `xp_cmdshell`, `Ole Automation Procedures`, and `Ad Hoc Distributed Queries` must be disabled unless a specific, documented business need exists and a deviation is approved |
| DB-PATCH-005 | Oracle: The `UTL_FILE`, `UTL_HTTP`, and `JAVA` features must be disabled or restricted unless required |
| DB-PATCH-006 | Database sample schemas and example databases must be removed from production instances |

---

## 8. Application Server Settings

### 8.1 Overview

*Summarise the scope of application server hardening. Define which products are in scope and reference applicable CIS Benchmarks or vendor hardening guides.*

This section establishes baseline security configurations for application servers and web servers operating within the NCII environment. Applicable platforms and reference benchmarks are:

| Platform | Reference | Version |
|---|---|---|
| Apache HTTP Server | CIS Apache HTTP Server 2.4 Benchmark | v2.1.0 |
| NGINX | CIS NGINX Benchmark | v2.1.0 |
| Microsoft IIS 10 | CIS Microsoft IIS 10 Benchmark | v1.2.1 |
| Apache Tomcat 10 | CIS Apache Tomcat 10 Benchmark | v1.1.0 |
| JBoss / WildFly | Vendor Hardening Guide + internal baseline | [Version] |

### 8.2 General Application Server Controls

| Control ID | Requirement | Applies To |
|---|---|---|
| APP-GEN-001 | Application servers must run under a dedicated, non-privileged, non-interactive service account | All |
| APP-GEN-002 | Web server processes must not run as root/SYSTEM | All |
| APP-GEN-003 | Server version and banner information must be suppressed from HTTP response headers | All |
| APP-GEN-004 | Default error pages must be replaced with custom error pages that do not disclose internal system information | All |
| APP-GEN-005 | Directory listing must be disabled unless explicitly required | All |
| APP-GEN-006 | Unnecessary HTTP methods (PUT, DELETE, TRACE, TRACK, OPTIONS) must be disabled unless required by the application | All |
| APP-GEN-007 | Server-side includes (SSI) must be disabled unless required | Apache, IIS |
| APP-GEN-008 | CGI execution must be disabled unless required and explicitly approved | Apache, IIS |
| APP-GEN-009 | WebDAV must be disabled unless required | Apache, IIS, Tomcat |
| APP-GEN-010 | Application server administration consoles must not be accessible from external networks | All |
| APP-GEN-011 | Default credentials on administration interfaces must be changed before production deployment | All |
| APP-GEN-012 | Application server access logs must be enabled and forwarded to SIEM | All |

### 8.3 TLS / SSL Configuration

| Control ID | Requirement |
|---|---|
| APP-TLS-001 | Only TLS 1.2 and TLS 1.3 must be enabled; TLS 1.0, TLS 1.1, SSL 2.0, and SSL 3.0 must be explicitly disabled |
| APP-TLS-002 | Weak cipher suites must be disabled: RC4, DES, 3DES, EXPORT ciphers, NULL ciphers, and anonymous Diffie-Hellman |
| APP-TLS-003 | Preferred cipher order must be configured server-side (SSLHonorCipherOrder on / ssl_prefer_server_ciphers on) |
| APP-TLS-004 | HSTS (HTTP Strict Transport Security) header must be set with a minimum max-age of 31,536,000 seconds |
| APP-TLS-005 | HTTP to HTTPS redirect must be enforced for all public-facing web applications |
| APP-TLS-006 | SSL/TLS certificates must be issued by an approved Certificate Authority and must be valid (not expired, not self-signed in production) |
| APP-TLS-007 | Certificate expiry must be monitored; alerts must be generated at 60 days and 30 days prior to expiry |
| APP-TLS-008 | Perfect Forward Secrecy (PFS) cipher suites must be preferred (ECDHE, DHE) |

### 8.4 Security Headers

| Header | Required Value | Purpose |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Enforce HTTPS |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME-type sniffing |
| `X-Frame-Options` | `DENY` or `SAMEORIGIN` | Prevent clickjacking |
| `Content-Security-Policy` | [Application-specific policy — defined by Application Owner] | Prevent XSS, injection |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Control referrer information leakage |
| `Permissions-Policy` | [Application-specific; restrict unnecessary browser features] | Limit browser feature access |
| `Server` | Must be removed or set to a non-descriptive value | Prevent version disclosure |
| `X-Powered-By` | Must be removed | Prevent technology disclosure |

### 8.5 Apache HTTP Server — Specific Controls

| Control ID | Directive | Required Configuration |
|---|---|---|
| APP-APH-001 | `ServerTokens` | `Prod` |
| APP-APH-002 | `ServerSignature` | `Off` |
| APP-APH-003 | `TraceEnable` | `Off` |
| APP-APH-004 | `Options` for document root | `Options None` or explicit allowed options; `Indexes` must be absent |
| APP-APH-005 | `AllowOverride` | `None` (disable `.htaccess` unless required) |
| APP-APH-006 | `LimitRequestBody` | Set to appropriate value per application requirement |
| APP-APH-007 | `Timeout` | `60` seconds or less |
| APP-APH-008 | `KeepAliveTimeout` | `15` seconds or less |
| APP-APH-009 | `mod_status` | Disabled or restricted to localhost |
| APP-APH-010 | `mod_info` | Disabled |
| APP-APH-011 | Run under dedicated user | `User apache`, `Group apache` (non-root) |

### 8.6 NGINX — Specific Controls

| Control ID | Directive | Required Configuration |
|---|---|---|
| APP-NGX-001 | `server_tokens` | `off` |
| APP-NGX-002 | `autoindex` | `off` |
| APP-NGX-003 | `client_max_body_size` | [Set per application; e.g., `10m`] |
| APP-NGX-004 | `client_body_timeout` | `10s` |
| APP-NGX-005 | `client_header_timeout` | `10s` |
| APP-NGX-006 | `keepalive_timeout` | `15s` |
| APP-NGX-007 | `send_timeout` | `10s` |
| APP-NGX-008 | Stub status module | Disabled or restricted to localhost |
| APP-NGX-009 | Run under dedicated user | `user nginx;` (non-root) |
| APP-NGX-010 | Worker processes | `auto` (matches CPU count) |

### 8.7 Apache Tomcat — Specific Controls

| Control ID | Requirement |
|---|---|
| APP-TOM-001 | Tomcat Manager and Host Manager web applications must be removed or restricted to authorised administrative hosts |
| APP-TOM-002 | Default credentials on Manager application must be changed; use unique, complex passwords |
| APP-TOM-003 | The `shutdown` command in `server.xml` must be changed from the default to a random string |
| APP-TOM-004 | `autoDeploy` must be set to `false` in `server.xml` |
| APP-TOM-005 | `server.xml`: remove or restrict the HTTP connector if HTTPS is terminated at a load balancer; otherwise enforce TLS |
| APP-TOM-006 | AJP connector must be disabled unless explicitly required (`<Connector protocol="AJP/1.3" .../>` commented out) |
| APP-TOM-007 | Tomcat version information must be suppressed from error pages (configure custom `ErrorReportValve`) |
| APP-TOM-008 | Tomcat must run under a dedicated, non-root service account |
| APP-TOM-009 | `CATALINA_HOME` and `CATALINA_BASE` directories must have appropriate permissions; not world-writable |

### 8.8 Session Management

| Control ID | Requirement |
|---|---|
| APP-SES-001 | Session cookies must have the `HttpOnly` flag set |
| APP-SES-002 | Session cookies must have the `Secure` flag set |
| APP-SES-003 | Session cookies must use `SameSite=Strict` or `SameSite=Lax` |
| APP-SES-004 | Session identifiers must be regenerated upon successful authentication |
| APP-SES-005 | Idle session timeout must be configured to [15 minutes] for privileged interfaces and [30 minutes] for standard user interfaces |
| APP-SES-006 | Absolute session timeout must not exceed [8 hours] regardless of activity |
| APP-SES-007 | Session tokens must have sufficient entropy (minimum 128 bits) |

---

## 9. CIS Benchmark Alignment

### 9.1 Overview and Approach

*Describe how the organisation uses CIS Benchmarks as the authoritative source for configuration requirements, and how benchmark versions are managed.*

[Organization Name] adopts the **Centre for Internet Security (CIS) Benchmarks** as the primary authoritative reference for system hardening configuration requirements. The CIS Benchmarks provide a globally recognised, consensus-based set of security configuration recommendations that are accepted by NACSA as evidence of reasonable cyber security measures in the context of Act 854 compliance.

The Security Architecture team is responsible for:

- Monitoring CIS Benchmark releases for all in-scope platform types.
- Evaluating new or updated benchmark versions and assessing the impact of changes on existing configurations.
- Updating this Standard and associated Hardening Guides within [60 days] of a significant CIS Benchmark update.
- Maintaining a mapping of all [Organization Name] controls to their corresponding CIS Benchmark recommendations.

### 9.2 Benchmark Version Register

*Maintain a current register of all CIS Benchmark versions in use. This table must be updated during each semi-annual review.*

| Platform | CIS Benchmark Title | Version In Use | Publication Date | Review Due | Custodian |
|---|---|---|---|---|---|
| Windows Server 2019 | CIS Microsoft Windows Server 2019 Benchmark | v3.0.0 | [Date] | [Next Review Date] | [Name] |
| Windows Server 2022 | CIS Microsoft Windows Server 2022 Benchmark | v3.0.0 | [Date] | [Next Review Date] | [Name] |
| RHEL 8 | CIS Red Hat Enterprise Linux 8 Benchmark | v3.0.0 | [Date] | [Next Review Date] | [Name] |
| RHEL 9 | CIS Red Hat Enterprise Linux 9 Benchmark | v2.0.0 | [Date] | [Next Review Date] | [Name] |
| Ubuntu 22.04 LTS | CIS Ubuntu Linux 22.04 LTS Benchmark | v2.0.0 | [Date] | [Next Review Date] | [Name] |
| SQL Server 2019 | CIS Microsoft SQL Server 2019 Benchmark | v1.4.0 | [Date] | [Next Review Date] | [Name] |
| Oracle DB 19c | CIS Oracle Database 19c Benchmark | v1.1.0 | [Date] | [Next Review Date] | [Name] |
| MySQL 8.0 | CIS Oracle MySQL 8.0 Benchmark | v1.0.0 | [Date] | [Next Review Date] | [Name] |
| PostgreSQL 16 | CIS PostgreSQL 16 Benchmark | [Latest] | [Date] | [Next Review Date] | [Name] |
| Apache HTTP Server 2.4 | CIS Apache HTTP Server 2.4 Benchmark | v2.1.0 | [Date] | [Next Review Date] | [Name] |
| NGINX | CIS NGINX Benchmark | v2.1.0 | [Date] | [Next Review Date] | [Name] |
| Microsoft IIS 10 | CIS Microsoft IIS 10 Benchmark | v1.2.1 | [Date] | [Next Review Date] | [Name] |
| Apache Tomcat 10 | CIS Apache Tomcat 10 Benchmark | v1.1.0 | [Date] | [Next Review Date] | [Name] |
| Docker | CIS Docker Benchmark | v1.6.0 | [Date] | [Next Review Date] | [Name] |
| Kubernetes | CIS Kubernetes Benchmark | v1.9.0 | [Date] | [Next Review Date] | [Name] |

### 9.3 CIS Profile Selection Rationale

| Profile Level | Application |
|---|---|
| **Level 1** | Minimum mandatory profile for all in-scope systems. Represents foundational controls that are broadly applicable and unlikely to cause operational impact. |
| **Level 2** | Applies to systems classified as **high risk** or storing **highly sensitive data** (including NCII critical systems and systems containing large volumes of personal data). Requires formal justification and approval by CISO for downgrade to Level 1. |
| **STIG** | DISA STIGs are used as a supplementary reference where CIS Benchmarks do not cover a specific control area. STIG adoption is optional unless directed by NACSA. |

### 9.4 Control-to-Benchmark Mapping

*Maintain a detailed mapping of each control in this Standard to its corresponding CIS Benchmark recommendation. The full mapping is maintained in the [CIS Control Mapping Register — Document ID] and is reviewed at each semi-annual review.*

A summary mapping structure is provided below:

| [Organisation Name] Control ID | Control Description | CIS Benchmark Reference | CIS Recommendation ID | Level |
|---|---|---|---|---|
| WIN-ACC-001 | Minimum Password Length = 14 | CIS Windows Server 2022 | 1.1.4 | L1 |
| WIN-ACC-008 | Account Lockout Threshold = 5 | CIS Windows Server 2022 | 1.2.1 | L1 |
| WIN-SSH-013 | SSHd PermitRootLogin = no | CIS RHEL 9 | 5.3.21 | L1 |
| DB-ENC-001 | TDE enabled on production databases | CIS SQL Server 2019 | 3.1 | L1 |
| [Additional mappings — see CIS Control Mapping Register] | | | | |

### 9.5 Handling CIS Benchmark Updates

When a new CIS Benchmark version is released for an in-scope platform, the following process applies:

1. **Assessment (within 30 days):** Security Architecture reviews the change log and identifies new, modified, or removed recommendations.
2. **Impact Analysis (within 45 days):** Security Architecture conducts an impact analysis against the existing baseline, identifying gaps and potential operational impacts.
3. **Standard Update (within 60 days):** This Standard and associated Hardening Guides are updated to reflect the new benchmark version, subject to approval by CISO.
4. **Remediation Planning (within 90 days):** IT Operations and System Administrators develop a remediation plan for any new controls requiring implementation, with risk-based prioritisation.
5. **Implementation:** Remediation is executed per the agreed plan and tracked in the compliance management system.

---

## 10. Deviation Approval Process

### 10.1 Purpose and Principles

*Explain why a formal deviation process is necessary, and establish the guiding principles for managing deviations.*

No organisation can achieve 100% baseline compliance at all times across all systems. Business requirements, legacy system constraints, vendor limitations, or operational dependencies may sometimes necessitate a departure from one or more baseline controls. This section establishes the formal process by which such deviations are managed, ensuring that:

- All deviations are identified, documented, and tracked.
- The risk associated with each deviation is formally assessed and risk-accepted by an appropriate authority.
- Compensating controls are implemented to mitigate the residual risk where possible.
- Deviations are time-limited and subject to regular review.
- NACSA is notified of material deviations where required under Act 854.

**Principle:** A deviation is always a risk-bearing exception to the baseline, not a permanent modification to the baseline itself. Changes to the baseline for all systems must follow the Standard review process (Section 14).

### 10.2 Deviation Categories

| Category | Description | Approval Authority | Maximum Initial Duration |
|---|---|---|---|
| **Temporary Operational** | Short-term deviation required during a planned maintenance window, change activity, or incident response | Security Architecture Lead | 30 days |
| **Project Transition** | Deviation required during a system migration or upgrade project where full compliance cannot be immediately achieved | CISO | 90 days (renewable once) |
| **Vendor Limitation** | Technical limitation imposed by a vendor product that prevents full baseline implementation; vendor acknowledgement required | CISO | 12 months (subject to annual review) |
| **Legacy System** | Deviation required for a system at end-of-life or under extended support where patching or reconfiguration is not feasible | CISO + Risk Committee | Aligned to decommission plan |
| **Compensated** | Deviation where compensating controls provide an equivalent or superior level of protection | Security Architecture Lead | 12 months (renewable) |

### 10.3 Deviation Request and Approval Workflow

```
[Step 1] System Owner / Administrator identifies required deviation
          ↓
[Step 2] Requestor completes Deviation Request Form (Appendix C)
          ↓
[Step 3] Security Architecture reviews request and conducts risk assessment
          ↓
[Step 4] Security Architecture determines compensating controls
          ↓
[Step 5] Approval by designated authority (per category above)
          ↓
[Step 6] Approved deviation logged in Deviation Register (Appendix D)
          ↓
[Step 7] Compensating controls implemented and verified
          ↓
[Step 8] Deviation monitored until closure or renewal
          ↓
[Step 9] Deviation reviewed at expiry; renewed or closed
```

### 10.4 Deviation Request Requirements

A Deviation Request (Appendix C) must include:

- **Control Reference:** The specific control ID(s) from this Standard that are subject to deviation.
- **System(s) Affected:** Hostnames, IP addresses, asset IDs, and classification of affected systems.
- **Deviation Description:** A clear description of the actual configuration versus the required baseline.
- **Business Justification:** A documented business or technical reason why the baseline cannot be met.
- **Risk Assessment:** An assessment of the likelihood and impact of the deviation, referencing the [IT Risk Management Framework — Document ID].
- **Residual Risk Rating:** The risk rating of the deviation after compensating controls are applied.
- **Compensating Controls:** Specific controls that will be implemented to reduce the risk of the deviation.
- **Remediation Plan:** A dated plan for returning to full baseline compliance, or a formal decommission timeline for legacy systems.
- **Expiry Date:** The date by which the deviation must be renewed or remediated.
- **Requestor Details:** Name, role, department, and contact information.
- **Approver Details:** Name, role, and date of approval.

### 10.5 Deviation Register

Security Architecture shall maintain a **Deviation Register** (Appendix D) that contains all active and historical deviations. The register shall be:

- Updated within [5 business days] of a deviation being approved, renewed, or closed.
- Reviewed as part of the semi-annual Standard review.
- Available to Internal Audit upon request.
- Reported to the CISO on a [quarterly] basis as part of the Security Architecture status report.

### 10.6 Escalation of Non-Approved Deviations

If a system is found to be non-compliant with this Standard and no approved deviation exists:

1. The non-conformance is logged in the compliance management system.
2. The System Owner is notified and required to either remediate within the prescribed period or submit a Deviation Request.
3. Unresolved non-conformances are escalated to the CISO after [15 business days].
4. Persistent non-conformances are reported to the Risk Committee and may be subject to formal disciplinary action per the [HR Policy — Document ID].

**Remediation Periods for Non-Approved Non-Conformances:**

| Severity | Definition | Remediation Period |
|---|---|---|
| Critical | Control failure that creates a direct, exploitable vulnerability | 7 calendar days |
| High | Control failure that significantly increases system exposure | 14 calendar days |
| Medium | Control failure that moderately increases system exposure | 30 calendar days |
| Low | Minor configuration gap with limited security impact | 60 calendar days |

---

## 11. Automated Compliance Checking

### 11.1 Overview

*Describe the strategy for continuous, automated verification of configuration compliance. Define the tooling, scanning frequency, and reporting cadence.*

[Organization Name] employs automated configuration compliance checking to provide continuous, objective assurance that in-scope systems maintain their approved baseline configurations. Manual configuration reviews are insufficient as a sole assurance mechanism given the number of systems, the complexity of baselines, and the speed at which configuration drift can occur.

Automated compliance checking supports:

- **Continuous monitoring** of configuration state against the approved baseline.
- **Early detection of drift** before it can be exploited or identified in an audit.
- **Evidence generation** for NACSA compliance assessments and internal audits.
- **Integration with the change management process** to verify pre- and post-change configuration state.

### 11.2 Tooling and Platform

| Tool / Platform | Purpose | Scope | Operated By |
|---|---|---|---|
| [Compliance Scanning Tool — e.g., Tenable.sc / Qualys / OpenSCAP] | CIS Benchmark compliance scanning | All in-scope servers | IT Operations / Security Architecture |
| [Configuration Management Tool — e.g., Ansible / Puppet / Chef] | Automated baseline enforcement and drift remediation | All in-scope servers | IT Operations |
| [SIEM Platform — e.g., Wazuh / Splunk / Microsoft Sentinel] | Continuous log monitoring; alert on configuration change events | All in-scope systems | Security Operations |
| [Vulnerability Scanner — e.g., Nessus / Qualys VM] | Vulnerability and patch compliance scanning | All in-scope systems | IT Operations |

*Document specific tool versions, instance names, and licensing information in the [ISMS Asset Register — Document ID].*

### 11.3 Scanning Schedule and Frequency

| Scan Type | Frequency | Trigger | Scope |
|---|---|---|---|
| Full CIS Benchmark Compliance Scan | Monthly | Scheduled | All in-scope systems |
| Targeted Post-Change Compliance Scan | On change | Approved change completion | Changed systems |
| Vulnerability and Patch Scan | Weekly | Scheduled | All in-scope systems |
| Continuous Configuration Monitoring | Real-time | Configuration change event | All in-scope systems (via SIEM) |
| Pre-Production Compliance Gate | On deployment | New system provisioning | All new or rebuilt systems |

### 11.4 Compliance Scoring and Thresholds

*Define the minimum acceptable compliance score and the response required when scores fall below threshold.*

| System Classification | Minimum Acceptable CIS Compliance Score | Action if Below Threshold |
|---|---|---|
| Critical NCII Systems | 95% | Immediate escalation to CISO; remediation plan within 5 business days |
| High Sensitivity Systems | 90% | Escalation to Security Architecture; remediation plan within 10 business days |
| Standard Systems | 85% | Remediation plan within 20 business days |

*Note: Compliance scores are calculated against the applicable CIS Benchmark Level 1 (or Level 2 where mandated) after excluding controls covered by approved deviations. An approved deviation does not lower the compliance score.*

### 11.5 Scan Result Review and Remediation Workflow

```
[Monthly Scan Completed]
          ↓
[Results Imported to Compliance Dashboard]
          ↓
[Automated Report Generated per System / Owner]
          ↓
[System Owners Review Results within 5 Business Days]
          ↓
[Compliance Gaps Categorised: Drift vs. New Baseline Gap vs. Approved Deviation]
          ↓
[Remediation Tasks Raised in ITSM System]
          ↓
[Remediation Executed per Severity SLA]
          ↓
[Re-scan to Verify Remediation]
          ↓
[Compliance Dashboard Updated]
          ↓
[Monthly Compliance Report to Security Architecture]
          ↓
[Quarterly Compliance Summary to CISO]
```

### 11.6 Pre-Production Compliance Gate

No new server, database instance, or application server may be promoted to a production environment unless it has passed a baseline compliance scan with a score meeting or exceeding the applicable threshold defined in Section 11.4.

The pre-production compliance gate process:

1. System Administrator or DevOps team triggers a compliance scan upon completion of initial build.
2. Scan results are reviewed by Security Architecture.
3. Systems achieving the required score are approved for production deployment.
4. Systems failing to achieve the required score must be remediated and re-scanned.
5. The compliance scan result is recorded in the system's build documentation and retained in the [ISMS Record Repository — Document ID].

### 11.7 Compliance Reporting

| Report | Frequency | Audience | Content |
|---|---|---|---|
| Per-System Compliance Report | Monthly | System Owner, System Administrator | CIS score, failed checks, open deviations, trend vs. previous month |
| Consolidated Compliance Dashboard | Monthly | Security Architecture, IT Operations | Organisation-wide compliance posture; top failed controls; trend analysis |
| CISO Compliance Summary | Quarterly | CISO, IT Director | Executive summary; critical gaps; deviation register summary; remediation status |
| Audit Evidence Package | On request / semi-annual | Internal Audit, NACSA | Scan results, deviation register, remediation evidence |

---

## 12. Exceptions and Compensating Controls

### 12.1 Exception Management

*Define the difference between a deviation (time-limited, risk-accepted departure) and a permanent exception (formally approved removal of a control from scope for a specific system).*

A **permanent exception** may be granted only in circumstances where a control is permanently inapplicable to a specific system due to its technical architecture, and no compensating control is available. Permanent exceptions require:

- Approval by the CISO.
- Documented rationale that clearly demonstrates why the control cannot be applied.
- A documented residual risk assessment accepted by the Risk Committee.
- Review at each semi-annual Standard review to confirm continued applicability.
- Notification to NACSA where the exception relates to a control required by a NACSA direction.

### 12.2 Compensating Control Framework

*Describe how compensating controls are defined, selected, and validated.*

Compensating controls must satisfy the following criteria:

1. **Equivalence:** The compensating control must address the same threat vector as the original control.
2. **Measurability:** The compensating control must be objective and measurable.
3. **Independence:** Where possible, the compensating control should operate independently of the system to which the deviation applies.
4. **Documentation:** The compensating control must be formally documented, assigned an owner, and monitored.

**Common Compensating Control Examples:**

| Baseline Control | Example Deviation Scenario | Possible Compensating Control |
|---|---|---|
| Disable Telnet | Legacy application requires Telnet | Network ACL restricts Telnet to specific jump server only; SSH jump server required; session recorded |
| TLS 1.2 minimum | Legacy vendor application only supports TLS 1.0 | Application isolated in dedicated VLAN; WAF with TLS offload placed in front; vendor support ticket raised with escalation path |
| MFA for admin access | Legacy system does not support MFA | PAM (Privileged Access Management) solution enforces MFA at jump server; direct access prohibited; all sessions recorded |
| Separate partition for `/tmp` | Container-based system; filesystem fixed at build | `tmpfs` mounted with `noexec,nosuid`; runtime security monitoring via container runtime policy |
| Disable `xp_cmdshell` | Legacy ETL process requires it | Restricted to specific service account; account monitored; all executions logged; network egress restricted from DB server |

---

## 13. Enforcement and Non-Compliance

### 13.1 Enforcement Mechanisms

[Organization Name] enforces this Standard through the following mechanisms:

- **Automated scanning:** Continuous configuration compliance scanning detects drift and non-conformances automatically.
- **Pre-production gate:** Systems cannot be deployed to production without meeting the compliance threshold.
- **Change management integration:** Change requests that would create baseline deviations trigger a mandatory review by Security Architecture before the change is approved by the CAB.
- **Configuration management tooling:** Infrastructure-as-code and configuration management tools enforce baseline settings automatically and alert on manual changes.
- **Access controls:** System Administrator access to production systems is restricted, logged, and reviewed.

### 13.2 Consequences of Non-Compliance

Non-compliance with this Standard may result in:

- Mandatory remediation within the prescribed period.
- Escalation to the CISO and Risk Committee.
- Formal incident logging where non-compliance is assessed to create a material security risk.
- Disciplinary action for individuals who intentionally or negligently bypass baseline controls, in accordance with the [HR Disciplinary Policy — Document ID].
- Reporting to NACSA where non-compliance constitutes a failure to meet the requirements of Act 854 Section 18 or a NACSA direction issued under Section 24.
- Suspension of system access or network isolation of non-compliant systems in cases of high or critical severity non-compliance where remediation is not forthcoming.

### 13.3 Regulatory Reporting Obligations

[Organization Name] shall notify NACSA in accordance with Act 854 requirements where:

- A material non-conformance with this Standard is identified that constitutes a significant cyber security risk to NCII operations.
- A deviation or exception has been in place for more than [12 months] without remediation and creates an ongoing material risk.
- A NACSA direction relating to system configuration has not been fully implemented within the required timeframe.

The CISO is responsible for determining when a notification obligation is triggered and for managing the notification to NACSA in accordance with the [NACSA Incident and Notification Procedure — Document ID].

---

## 14. Review and Approval

### 14.1 Review Schedule

This Standard is subject to a **semi-annual formal review** cycle. The review shall be initiated by Security Architecture and completed within [30 days] of the scheduled review date.

Reviews shall consider:

- Changes to the regulatory and legislative environment (Act 854, NACSA directions, PDPA, RMiT).
- New or updated CIS Benchmark versions for in-scope platforms.
- Lessons learned from security incidents, near-misses, and vulnerability assessments.
- Output from the automated compliance scanning programme.
- Changes to [Organization Name]'s technology estate that introduce new platform types.
- Feedback from Internal Audit and external assessors.
- Changes to the threat landscape relevant to NCII entities.

Ad-hoc reviews shall be triggered by:

- A significant change to Act 854 or related NACSA guidance.
- A security incident attributable to a configuration weakness.
- A directive from NACSA requiring immediate standard updates.
- A major technology change affecting a significant proportion of in-scope systems.

### 14.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], Security Architecture | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [CISO Name] | | [Date] |
| Head of Security Architecture | [Name] | | [Date] |
| Chief Information Officer | [CIO Name] | | [Date] |
| Head of Compliance and Risk | [Name] | | [Date] |
| Head of IT Operations | [Name] | | [Date] |

---

## 15. References

### 15.1 Legislation and Regulatory Instruments

| Reference | Title | Issuing Authority | Relevant Sections |
|---|---|---|---|
| Act 854 | Cyber Security Act 2024 | Parliament of Malaysia | Sections 18, 24 |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | Sections 9, 10, 11 |
| RMiT Policy Document | Risk Management in Technology | Bank Negara Malaysia | Para 10.x |
| NACSA NCII Sector Guidelines | [Full Title of Applicable Guideline] | NACSA | [Relevant Paragraphs] |

### 15.2 CIS Benchmarks

*All CIS Benchmarks referenced in Section 9.2 are incorporated by reference. The specific versions in use are listed in the Benchmark Version Register (Section 9.2). CIS Benchmarks are available from the Centre for Internet Security at [https://www.cisecurity.org/cis-benchmarks] for registered members.*

### 15.3 Internal Documents

| Document ID | Title | Relationship |
|---|---|---|
| [Doc ID] | Information Security Policy | Parent policy |
| [Doc ID] | Access Control Standard | Related standard |
| [Doc ID] | Vulnerability Management Standard | Related standard |
| [Doc ID] | Patch Management Standard | Related standard |
| [Doc ID] | Network Device Hardening Standard | Complementary standard |
| [Doc ID] | Incident Response Plan | Referenced in escalation procedures |
| [Doc ID] | Change Management Policy | Referenced in change control |
| [Doc ID] | Log Management and Retention Policy | Referenced in logging requirements |
| [Doc ID] | IT Risk Management Framework | Referenced in risk assessment |
| [Doc ID] | ISMS Roles Register | Referenced in Roles and Responsibilities |
| [Doc ID] | NACSA Incident and Notification Procedure | Referenced in regulatory reporting |
| [Doc ID] | CIS Control Mapping Register | Detailed control-to-benchmark mapping |
| [Doc ID] | Windows Server Hardening Guide | Implementing procedure for Section 5 |
| [Doc ID] | Linux Server Hardening Guide | Implementing procedure for Section 6 |
| [Doc ID] | Database Hardening Guide | Implementing procedure for Section 7 |
| [Doc ID] | Application Server Hardening Guide | Implementing procedure for Section 8 |

### 15.4 Industry Standards and Frameworks

| Standard | Title | Organisation |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | ISO/IEC |
| ISO/IEC 27002:2022 | Information Security Controls | ISO/IEC |
| NIST SP 800-123 | Guide to General Server Security | NIST |
| NIST SP 800-53 Rev 5 | Security and Privacy Controls for Information Systems | NIST |
| DISA STIG Library | Security Technical Implementation Guides | DISA |

---

## 16. Appendices

### Appendix A — Approved System Login Warning Banner

*The following banner text must be displayed on all in-scope systems prior to user authentication. It must be configured on SSH (via `/etc/issue.net`), local console, and remote desktop logon screens.*

---

**WARNING — AUTHORISED ACCESS ONLY**

This computer system is the property of **[Organization Name]** and is designated as National Critical Information Infrastructure (NCII) under the Cyber Security Act 2024 (Act 854).

Access to this system is restricted to **authorised users only**. Unauthorised access, attempted access, or use of this system in excess of authorised levels is prohibited and may constitute an offence under the Cyber Security Act 2024, the Computer Crimes Act 1997, and other applicable laws of Malaysia.

All access to and activities on this system are **logged and monitored**. By accessing this system, you expressly consent to such monitoring. Monitoring data may be disclosed to law enforcement authorities in accordance with Malaysian law.

If you are not an authorised user, **disconnect immediately**.

---

### Appendix B — Approved SUID/SGID Executables (Linux)

*This appendix contains the approved list of SUID and SGID executables for each Linux distribution and version. Any SUID/SGID executable not on this list must be reported to Security Architecture immediately. The list is reviewed and updated at each semi-annual Standard review.*

*[System Administrators are responsible for populating this appendix for their specific distribution and version. Generate the list using: `find / -xdev \( -perm -4000 -o -perm -2000 \) -type f -print` and document each executable with its business justification.]*

**Template Table:**

| Executable Path | Permission | Group | Business Justification | Approved By | Date |
|---|---|---|---|---|---|
| `/usr/bin/sudo` | SUID (4755) | root | Administrative privilege escalation | [Name] | [Date] |
| `/usr/bin/su` | SUID (4755) | root | User switching | [Name] | [Date] |
| `/usr/bin/passwd` | SUID (4755) | root | Password change | [Name] | [Date] |
| `/usr/bin/ping` | SUID (4755) | root | Network diagnostics | [Name] | [Date] |
| [Additional entries per environment] | | | | | |

### Appendix C — Deviation Request Form

*This form must be completed in full by the requesting party and submitted to Security Architecture via [email address / ticketing system]. Incomplete forms will be returned without processing.*

---

**SECURITY CONFIGURATION BASELINE DEVIATION REQUEST**

**Document Reference:** [Organization Name] Security Configuration Baseline Standard v[x.x]

| Field | Details |
|---|---|
| **Request Date** | [Date] |
| **Request Reference** | [Auto-assigned by ticketing system] |
| **Requestor Name** | [Full name] |
| **Requestor Role** | [Job title / role] |
| **Requestor Department** | [Department] |
| **Requestor Contact** | [Email / phone] |

**Section 1: Control(s) Subject to Deviation**

| Control ID | Control Description | Required Baseline Value | Current/Proposed Value |
|---|---|---|---|
| [e.g., WIN-ACC-001] | Minimum Password Length | 14 characters | 8 characters |

**Section 2: Systems Affected**

| Hostname / FQDN | IP Address | Asset ID | Classification | Environment |
|---|---|---|---|---|
| [Hostname] | [IP] | [Asset ID] | [High / Medium / Low] | [Prod / DR / UAT] |

**Section 3: Business / Technical Justification**

*[Provide a clear, specific explanation of why the baseline control cannot be implemented. Include vendor documentation, technical constraints, or business requirements as supporting evidence.]*

[Justification text]

**Supporting Evidence Attached:** Yes / No — [List attachments]

**Section 4: Risk Assessment**

| Risk Factor | Assessment |
|---|---|
| **Threat Vector** | [Describe the threat that the baseline control mitigates] |
| **Likelihood without baseline control** | High / Medium / Low |
| **Impact if exploited** | High / Medium / Low |
| **Inherent Risk Rating** | Critical / High / Medium / Low |

**Section 5: Proposed Compensating Controls**

| Compensating Control | Owner | Implementation Date | Verification Method |
|---|---|---|---|
| [Describe control] | [Name] | [Date] | [How it will be verified] |

**Section 6: Remediation Plan**

| Milestone | Target Date | Owner |
|---|---|---|
| [e.g., Vendor fix applied] | [Date] | [Name] |
| [e.g., System upgraded] | [Date] | [Name] |
| [e.g., Baseline compliance achieved] | [Date] | [Name] |

**Requested Deviation Expiry Date:** [Date]

**Deviation Category:** (circle one) — Temporary Operational / Project Transition / Vendor Limitation / Legacy System / Compensated

---

**Section 7: Security Architecture Review**

| Field | Details |
|---|---|
| Reviewed by | [Name], Security Architecture |
| Review Date | [Date] |
| Risk Assessment Agreed | Yes / No / Modified (see notes) |
| Compensating Controls Adequate | Yes / No (see notes) |
| Recommendation | Approve / Decline / Approve with conditions |
| Review Notes | [Notes] |
| Residual Risk Rating (post-compensating controls) | Critical / High / Medium / Low |

---

**Section 8: Approval**

| Approval Level | Approver Name | Signature | Date | Decision |
|---|---|---|---|---|
| Security Architecture Lead | [Name] | | [Date] | Approved / Declined |
| CISO (if required per category) | [Name] | | [Date] | Approved / Declined |
| Risk Committee (if required) | [Name] | | [Date] | Approved / Declined |

---

### Appendix D — Deviation Register

*Security Architecture maintains this register. It is reviewed monthly and reported quarterly to the CISO. Entries are retained for a minimum of 7 years after closure.*

| Deviation ID | Control ID(s) | System(s) | Deviation Description | Category | Requestor | Date Approved | Expiry Date | Compensating Controls | Residual Risk | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| DEV-2024-001 | [Control ID] | [System] | [Description] | [Category] | [Name] | [Date] | [Date] | [Controls] | [Rating] | Active | [Notes] |
| DEV-2024-002 | | | | | | | | | | | |

### Appendix E — Automated Compliance Scan Configuration

*This appendix documents the configuration of the automated compliance scanning infrastructure, including scan profiles, schedules, credential management, and integration points.*

*[Security Architecture and IT Operations are responsible for populating this appendix. Content should include:]*

**E.1 Scan Platform Configuration**

| Parameter | Value |
|---|---|
| Scanning Platform | [Tool name and version] |
| Instance / Server | [Hostname / IP] |
| Managed By | [Team / Individual] |
| Authentication Method | [e.g., SSH key / Windows domain credential / service account] |
| Credential Store | [e.g., CyberArk / HashiCorp Vault] |

**E.2 Scan Profiles**

| Profile Name | Target Benchmark | Target Platform | Scope | Schedule |
|---|---|---|---|---|
| [CIS-WIN2022-L1] | CIS Windows Server 2022 L1 | Windows Server 2022 | All production Windows servers | Monthly, 1st Sunday 02:00 |
| [CIS-RHEL9-L1] | CIS RHEL 9 L1 | RHEL 9 | All production RHEL 9 servers | Monthly, 1st Sunday 03:00 |
| [CIS-MSSQL-L1] | CIS SQL Server 2019 L1 | SQL Server 2019 | All production SQL instances | Monthly, 2nd Sunday 02:00 |
| [Additional profiles] | | | | |

**E.3 Integration Points**

| Integration | Target System | Data Exchanged | Frequency |
|---|---|---|---|
| SIEM Integration | [SIEM Platform] | Compliance scan results, alerts | Real-time / Post-scan |
| ITSM Integration | [ITSM Platform] | Remediation tickets | Post-scan |
| Compliance Dashboard | [Dashboard Platform] | Compliance scores, trends | Post-scan |
| Email Reporting | [Mail system] | System Owner reports | Monthly |

### Appendix F — Hardening Implementation Checklists

*Detailed, step-by-step implementation checklists are maintained as separate controlled documents. This appendix provides an index and summary verification checklist for sign-off purposes.*

**F.1 Hardening Guide Index**

| Hardening Guide | Document ID | Version | Applicable Standard Section |
|---|---|---|---|
| Windows Server 2019/2022 Hardening Guide | [Doc ID] | [Version] | Section 5 |
| RHEL 8/9 Hardening Guide | [Doc ID] | [Version] | Section 6 |
| Ubuntu 22.04 LTS Hardening Guide | [Doc ID] | [Version] | Section 6 |
| Microsoft SQL Server Hardening Guide | [Doc ID] | [Version] | Section 7 |
| Oracle Database Hardening Guide | [Doc ID] | [Version] | Section 7 |
| MySQL Hardening Guide | [Doc ID] | [Version] | Section 7 |
| PostgreSQL Hardening Guide | [Doc ID] | [Version] | Section 7 |
| Apache HTTP Server Hardening Guide | [Doc ID] | [Version] | Section 8 |
| NGINX Hardening Guide | [Doc ID] | [Version] | Section 8 |
| Microsoft IIS Hardening Guide | [Doc ID] | [Version] | Section 8 |
| Apache Tomcat Hardening Guide | [Doc ID] | [Version] | Section 8 |
| Docker Host Hardening Guide | [Doc ID] | [Version] | [Section] |
| Kubernetes Node Hardening Guide | [Doc ID] | [Version] | [Section] |

**F.2 Build Sign-Off Checklist (Summary)**

*This checklist must be completed and retained for every new system build prior to production promotion.*

| # | Verification Item | Verified By | Date | Pass / Fail / N/A |
|---|---|---|---|---|
| 1 | System build completed per approved hardening guide | [Name] | [Date] | |
| 2 | Automated CIS compliance scan executed | [Name] | [Date] | |
| 3 | Compliance score meets or exceeds threshold for system classification | [Name] | [Date] | |
| 4 | All failed scan items reviewed; remediated or deviation submitted | [Name] | [Date] | |
| 5 | Security Architecture sign-off on compliance scan results obtained | [Name] | [Date] | |
| 6 | System registered in CMDB / Asset Register | [Name] | [Date] | |
| 7 | System Owner and Administrator details recorded | [Name] | [Date] | |
| 8 | SIEM log forwarding verified | [Name] | [Date] | |
| 9 | Vulnerability scan completed; critical/high vulnerabilities remediated | [Name] | [Date] | |
| 10 | Change request for production promotion submitted and approved by CAB | [Name] | [Date] | |

### Appendix G — Control Severity Classification

*This appendix classifies each control by severity to support risk-based prioritisation of remediation activities.*

| Severity | Definition | Examples from this Standard |
|---|---|---|
| **Critical** | Direct, exploitable vulnerability if not implemented; immediate risk of compromise | WIN-ACC-011 (rename admin account), LNX-SSH-002 (disable root login), DB-AUTH-001 (change default passwords) |
| **High** | Significant increase in attack surface or exploitation potential | WIN-URA-001 (network access rights), WIN-AUD-007 (logon auditing), DB-NET-004 (encrypted DB connections) |
| **Medium** | Moderate security impact; may contribute to compromise when combined with other weaknesses | WIN-SEC-007 (inactivity timeout), LNX-NET-001 (IP forwarding), APP-TLS-003 (cipher order) |
| **Low** | Minor configuration gap; limited direct security impact but contributes to defence-in-depth | WIN-SEC-005 (do not display last username), LNX-NET-007 (log martians), APP-GEN-004 (custom error pages) |

### Appendix H — NACSA Compliance Evidence Map

*This appendix maps each section of this Standard to the corresponding Act 854 obligations and NACSA assessment criteria to facilitate regulatory compliance reporting.*

| Act 854 Section | NACSA Requirement Description | Standard Sections Addressing Requirement | Evidence Artefacts |
|---|---|---|---|
| Section 18(1) | NCII entity must take reasonable steps to manage cyber security risks | Sections 5, 6, 7, 8 (all hardening controls) | Compliance scan reports; deviation register; build sign-off records |
| Section 18(2) | Implement and maintain cyber security measures | Sections 9, 11 (CIS alignment; automated checking) | CIS benchmark alignment documentation; scan tool configuration |
| Section 18(3) | Periodic review of cyber security measures | Section 14 (review cycle) | Version history; review records; CISO approval |
| Section 24 | Comply with directions from NACSA | Section 2.1.2; Section 13.3 | NACSA direction register; implementation evidence |
| [NACSA Sector Guideline — Para X] | [Specific guideline requirement] | [Relevant section] | [Evidence type] |

---

*End of Document*

---

| Document ID | [Document ID] |
|---|---|
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Architecture — [Organization Name] |
| **This document is subject to semi-annual review.** | **Next Review: [Next Review Date]** |