# Endpoint Protection Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Semi-annual from Effective Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organisation Name]
**Department:** [Department Name]
**Document Type:** Standard
**Regulatory Framework:** Cyber Security Act 2024 (Act 854) — NACSA

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organisation Name]. It is intended solely for authorised personnel. Unauthorised disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Alignment](#3-regulatory-alignment)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Endpoint Detection and Response (EDR/XDR) Requirements](#5-endpoint-detection-and-response-edrxdr-requirements)
6. [Host-Based Firewall Configuration](#6-host-based-firewall-configuration)
7. [Application Whitelisting](#7-application-whitelisting)
8. [Device Encryption](#8-device-encryption)
9. [USB and Removable Media Controls](#9-usb-and-removable-media-controls)
10. [Automated Patching Requirements](#10-automated-patching-requirements)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Compliance and Exceptions](#12-compliance-and-exceptions)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*Describe the intent of this standard and why it exists within the organisation's security governance framework.*

This Endpoint Protection Standard establishes the minimum security requirements for all endpoints — including workstations, servers, and mobile devices — that access, process, store, or transmit information within [Organisation Name]'s National Critical Information Infrastructure (NCII) systems. This standard is issued to fulfil the obligations of [Organisation Name] as a NCII entity under the **Cyber Security Act 2024 (Act 854)**, specifically pursuant to **Section 18**, which mandates NCII entity owners to comply with cybersecurity measures as directed by the Chief Executive of the National Cyber Security Agency (NACSA).

The purpose of this standard is to:

- Establish a consistent and enforceable security baseline for all endpoint devices across [Organisation Name];
- Reduce the attack surface of endpoints that interact with NCII systems by mandating technical controls;
- Enable detection of, and response to, endpoint-based threats in a timely and structured manner;
- Demonstrate regulatory compliance with Act 854 and applicable NACSA directives and guidelines;
- Protect the confidentiality, integrity, and availability of critical information assets.

---

## 2. Scope

*Define which systems, devices, personnel, and business units are covered by this standard. Be explicit about what is excluded.*

### 2.1 In Scope

This standard applies to:

- All **workstations** (desktop computers and laptops) owned, leased, or managed by [Organisation Name] that connect to internal networks or NCII systems;
- All **servers** (physical and virtual) hosted on-premises or in cloud environments operated by or on behalf of [Organisation Name];
- All **mobile devices** (smartphones, tablets) enrolled in [Organisation Name]'s Mobile Device Management (MDM) programme that access corporate data or NCII-connected systems;
- All **third-party and contractor-managed devices** that are permitted to access [Organisation Name]'s NCII systems under formal agreements;
- All **operating system platforms** in use, including but not limited to Microsoft Windows, macOS, Linux distributions, iOS, and Android.

### 2.2 Out of Scope

The following are explicitly excluded from this standard unless otherwise stated:

- Operational Technology (OT) and Industrial Control System (ICS) endpoints, which are governed by [Reference to OT/ICS Security Standard];
- Network infrastructure devices (switches, routers, firewalls), which are governed by [Reference to Network Security Standard];
- Personal devices used under a Bring Your Own Device (BYOD) arrangement that have not been formally enrolled in the MDM programme;
- Legacy systems under an approved exception — refer to Section 12 (Compliance and Exceptions).

### 2.3 Geographic and Organisational Applicability

This standard applies to all [Organisation Name] offices, branches, and subsidiaries located within Malaysia and, where operationally feasible, to international operations that interact with Malaysian NCII systems.

---

## 3. Regulatory Alignment

*Map this standard to the specific regulatory requirements it fulfils. This section is critical for audit evidence.*

[Organisation Name] is designated as an NCII entity under the Cyber Security Act 2024 (Act 854). This standard directly supports compliance with the following regulatory instruments:

| Regulatory Instrument | Clause / Section | Requirement Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entity owner shall comply with cybersecurity measures as directed by NACSA Chief Executive |
| Cyber Security Act 2024 (Act 854) | Section 18(1)(a) | Implement cybersecurity measures to protect NCII |
| Cyber Security Act 2024 (Act 854) | Section 18(1)(b) | Conduct cybersecurity risk assessments |
| NACSA Cybersecurity Framework | [Applicable Control Domain] | Endpoint security controls and monitoring |
| [BNM RMiT / PDPA / Other Applicable Standard] | [Clause Reference] | [Brief Description] |
| ISO/IEC 27001:2022 | Annex A — 8.7, 8.8, 8.19 | Protection against malware, patch management, installation of software |
| CIS Controls v8 | Controls 4, 7, 10, 18 | Secure configuration, vulnerability management, malware defences |

> **Note:** Where conflicts exist between this standard and regulatory requirements, the more stringent requirement shall prevail. Any conflict should be escalated to [Chief Information Security Officer / Compliance Officer] for resolution.

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Endpoint** | Any computing device that communicates over a network, including workstations, laptops, servers, mobile devices, and virtual machines |
| **NCII** | National Critical Information Infrastructure — information infrastructure critical to the delivery of essential services as defined under Act 854 |
| **NCII Entity** | An entity designated by the Minister under Section 9 of Act 854 as an owner or operator of NCII |
| **EDR** | Endpoint Detection and Response — security software that continuously monitors endpoints for threats, enabling detection, investigation, and response |
| **XDR** | Extended Detection and Response — a unified security platform that extends EDR capabilities across multiple security layers (network, cloud, email) |
| **Application Whitelisting** | A security practice that allows only pre-approved, explicitly listed applications to execute on an endpoint |
| **Full Disk Encryption (FDE)** | A method of encrypting all data on a storage device so that it is unreadable without the correct authentication credentials |
| **MDM** | Mobile Device Management — software that enables IT administrators to control, secure, and enforce policies on mobile devices |
| **Patch** | A software update released by a vendor to fix security vulnerabilities, bugs, or improve functionality |
| **Removable Media** | Portable storage devices including USB flash drives, external hard drives, optical discs, SD cards, and other similar devices |
| **Threat Intelligence** | Evidence-based knowledge about current or emerging threats used to inform security decisions |
| **Zero-Day** | A vulnerability that is exploited before the software vendor has released a patch or fix |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| Act 854 | Cyber Security Act 2024 |
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CIS | Center for Internet Security |
| DLP | Data Loss Prevention |
| FDE | Full Disk Encryption |
| HBI | Host-Based Intrusion |
| IOC | Indicator of Compromise |
| MDM | Mobile Device Management |
| NACSA | National Cyber Security Agency |
| OS | Operating System |
| RACI | Responsible, Accountable, Consulted, Informed |
| SOC | Security Operations Centre |
| SLA | Service Level Agreement |
| TPM | Trusted Platform Module |
| UAT | User Acceptance Testing |
| USB | Universal Serial Bus |

---

## 5. Endpoint Detection and Response (EDR/XDR) Requirements

*This section defines mandatory requirements for deploying and operating EDR/XDR tooling across all in-scope endpoints. Authors should specify the approved product(s), configuration baselines, and monitoring obligations.*

### 5.1 Mandatory Deployment

All in-scope endpoints shall have an approved EDR or XDR solution installed, active, and reporting to the central Security Operations Centre (SOC) console. The approved solution(s) for [Organisation Name] are:

| Endpoint Category | Approved EDR/XDR Solution | Version (Minimum) | Deployment Mode |
|---|---|---|---|
| Windows Workstations | [Approved Product Name] | [Version] | Agent-based |
| Windows Servers | [Approved Product Name] | [Version] | Agent-based |
| Linux Servers | [Approved Product Name] | [Version] | Agent-based |
| macOS Devices | [Approved Product Name] | [Version] | Agent-based |
| Mobile Devices (iOS/Android) | [MDM-integrated Solution] | [Version] | MDM-enrolled |

### 5.2 Configuration Requirements

*Specify the mandatory configuration baselines for the EDR/XDR solution. Reference vendor hardening guides where applicable.*

The EDR/XDR solution shall be configured to, at a minimum:

- **Real-time protection:** Enable continuous, real-time monitoring of all endpoint processes, file system events, network connections, and registry changes;
- **Behavioural analysis:** Enable machine learning and behavioural analytics to detect anomalous activity indicative of malware, ransomware, or living-off-the-land attacks;
- **Threat intelligence integration:** Configure the solution to consume up-to-date threat intelligence feeds including [Specify feeds — e.g., NACSA National Cyber Coordination and Command Centre (NC4) feeds, commercial feeds];
- **Tamper protection:** Enable tamper protection to prevent unauthorised modification or disabling of the EDR/XDR agent by local users or malware;
- **Automatic threat response:** Configure automated response actions for high-confidence detections, including process termination and endpoint isolation, in accordance with the [Incident Response Plan — Document ID];
- **Log retention:** Retain endpoint telemetry data for a minimum of **[12 months / as per log retention policy]**, with at least **90 days** of hot storage for immediate investigation;
- **Heartbeat monitoring:** Alert the SOC within **[15 minutes]** if an enrolled endpoint ceases to report to the console.

### 5.3 Coverage and Compliance Metrics

| Metric | Target |
|---|---|
| EDR/XDR agent deployment coverage | 100% of in-scope endpoints |
| Agent health (active and reporting) | ≥ 99% at any given time |
| Mean time to detect (MTTD) for critical alerts | ≤ [X hours] |
| Mean time to respond (MTTR) for critical alerts | ≤ [X hours] |
| Threat intelligence feed update frequency | ≤ Every 24 hours |

### 5.4 Exceptions

Endpoints that cannot host the standard EDR/XDR agent due to technical constraints (e.g., legacy operating systems, air-gapped systems) shall be subject to a formal exception process as defined in Section 12. Compensating controls must be documented and approved prior to the exception being granted.

---

## 6. Host-Based Firewall Configuration

*This section establishes requirements for the deployment and configuration of host-based firewalls on all in-scope endpoints. Authors should define approved rule sets, configuration standards, and change management processes.*

### 6.1 Mandatory Requirements

All in-scope endpoints shall have a host-based firewall enabled and configured in accordance with the following requirements:

- The host-based firewall shall be **enabled at all times** and shall not be disabled by end users;
- Firewall configuration shall follow a **default-deny posture** — all inbound connections shall be denied unless explicitly permitted;
- Outbound traffic filtering shall be enabled on servers and, where technically feasible, on workstations;
- Firewall rules shall be managed centrally via [Group Policy / MDM / Configuration Management Tool] and shall not be modifiable by local administrators without SOC approval;
- All firewall rule changes shall be subject to the [Change Management Policy — Document ID].

### 6.2 Platform-Specific Configuration Standards

| Platform | Firewall Solution | Management Method | Baseline Standard |
|---|---|---|---|
| Windows | Windows Defender Firewall | Group Policy (GPO) | [CIS Windows Firewall Benchmark / Internal Baseline] |
| Linux | iptables / nftables / firewalld | Ansible / Chef / Puppet | [CIS Linux Firewall Benchmark / Internal Baseline] |
| macOS | Application Firewall (pf) | MDM Profile (Apple Configurator) | [CIS macOS Benchmark / Internal Baseline] |
| Mobile (iOS) | Managed via MDM network policies | MDM | [Internal Mobile Security Baseline] |
| Mobile (Android) | Managed via MDM network policies | MDM | [Internal Mobile Security Baseline] |

### 6.3 Permitted Inbound Traffic Rules

*List the approved inbound rules applicable to each endpoint category. Tailor this table to the organisation's specific network architecture.*

| Rule ID | Source | Destination | Protocol | Port(s) | Justification | Approved By |
|---|---|---|---|---|---|---|
| FW-001 | [Internal Management Network] | All Endpoints | TCP | [22, 443] | Remote management | [Approver] |
| FW-002 | [SOC Network Range] | All Endpoints | TCP | [EDR Console Port] | EDR telemetry | [Approver] |
| FW-003 | [Patch Management Server IP] | All Endpoints | TCP | [8530 / Custom] | WSUS / Patch management | [Approver] |
| [FW-XXX] | [Source] | [Destination] | [Protocol] | [Port(s)] | [Justification] | [Approver] |

### 6.4 Prohibited Configurations

The following firewall configurations are strictly prohibited:

- Disabling the host-based firewall without a documented, time-bound exception approved by the CISO;
- Creating rules that allow **ANY/ANY** traffic;
- Opening firewall ports for personal or non-business applications;
- Using IP address wildcards in inbound rules unless technically unavoidable and explicitly approved.

---

## 7. Application Whitelisting

*This section defines requirements for application control and whitelisting to prevent the execution of unauthorised or malicious software. Authors should specify the approved tooling, management process, and approved application baseline.*

### 7.1 Policy Statement

[Organisation Name] shall implement application whitelisting (also referred to as application control or allowlisting) on all in-scope endpoints to ensure that only authorised and approved software is permitted to execute. This control directly mitigates the risk of malware, ransomware, and unapproved shadow IT tools operating within the NCII environment.

### 7.2 Approved Application Control Solutions

| Endpoint Category | Application Control Solution | Enforcement Mode |
|---|---|---|
| Windows Servers | [AppLocker / Windows Defender Application Control (WDAC) / CyberArk Endpoint Privilege Manager] | Enforce |
| Windows Workstations | [AppLocker / WDAC / Approved Third-Party Tool] | Enforce |
| Linux Servers | [SELinux / AppArmor / fapolicyd] | Enforce |
| macOS Devices | [macOS Gatekeeper + MDM Application Restrictions] | Enforce |
| Mobile (iOS/Android) | MDM-managed application catalogue | Enforce |

### 7.3 Application Approval Process

*Describe the workflow for requesting, reviewing, and approving new applications for inclusion in the whitelist.*

All requests to add an application to the approved whitelist shall follow the process below:

1. **Request Submission:** The requesting business unit submits an Application Approval Request to [IT Helpdesk / Service Desk] referencing the [Application Approval Form — Appendix B];
2. **Security Assessment:** The Security Operations team conducts a security assessment of the application, including:
   - Vendor reputation and support status;
   - Known vulnerabilities (CVE check);
   - Software composition and third-party dependency review;
   - Licensing compliance verification;
3. **Risk Acceptance:** Applications assessed as Medium or above risk require written approval from the CISO;
4. **Deployment and Whitelisting:** Upon approval, the application is added to the central whitelist and deployed via [Software Deployment Tool — e.g., SCCM, Intune, Jamf];
5. **Periodic Review:** The approved application catalogue shall be reviewed **semi-annually** to remove unused, end-of-life, or superseded applications.

### 7.4 Approved Application Catalogue

*Maintain the full catalogue in a controlled register. The table below is illustrative.*

| Application Name | Version | Vendor | Business Justification | Approved Date | Approved By | Review Date |
|---|---|---|---|---|---|---|
| [Application Name] | [Version] | [Vendor] | [Justification] | [Date] | [Name] | [Date] |
| [Application Name] | [Version] | [Vendor] | [Justification] | [Date] | [Name] | [Date] |

> **Note:** The complete and authoritative Approved Application Catalogue is maintained at [Location — e.g., ITSM Portal / SharePoint] and is incorporated by reference into this standard.

### 7.5 Script and Macro Control

- The execution of unsigned PowerShell scripts, VBScript, macros, and other scripting languages shall be restricted on endpoints that do not require them for business purposes;
- PowerShell execution policy on all workstations shall be set to **AllSigned** or **RemoteSigned** as a minimum;
- Microsoft Office macro execution shall be disabled by Group Policy for all documents originating from outside the organisation, unless explicitly whitelisted.

---

## 8. Device Encryption

*This section establishes mandatory encryption requirements for all in-scope endpoints to protect data at rest from unauthorised access, particularly in the event of device loss or theft.*

### 8.1 Policy Statement

All in-scope endpoint devices shall have full disk encryption (FDE) enabled to protect data at rest. Encryption keys shall be managed centrally and backed up in accordance with the [Cryptographic Key Management Policy — Document ID].

### 8.2 Encryption Standards

*Specify the minimum cryptographic standards acceptable for device encryption across all platforms.*

| Platform | Approved Encryption Solution | Minimum Algorithm | Key Length | Key Escrow Method |
|---|---|---|---|---|
| Windows Workstations & Laptops | BitLocker | AES-256 | 256-bit | Active Directory / Azure AD (BitLocker Recovery Keys) |
| Windows Servers | BitLocker / Third-Party FDE | AES-256 | 256-bit | [Key Management Solution] |
| Linux Servers | LUKS (Linux Unified Key Setup) | AES-256-XTS | 256-bit | [Key Management Solution] |
| macOS Devices | FileVault 2 | AES-256 | 256-bit | MDM-escrowed recovery key |
| iOS Devices | Native iOS Data Protection (hardware-enforced) | AES-256 | 256-bit | MDM-managed |
| Android Devices | Native Android Full Disk / File-Based Encryption | AES-256 | 256-bit | MDM-managed |

### 8.3 Mandatory Requirements

- **TPM Utilisation:** Where hardware permits, BitLocker and equivalent solutions shall leverage the Trusted Platform Module (TPM) for key storage and pre-boot authentication integrity checking;
- **Pre-boot Authentication:** High-sensitivity endpoints (as classified under [Data Classification Policy — Document ID]) shall require a PIN or passphrase in addition to TPM protection;
- **Recovery Key Management:** All encryption recovery keys shall be escrowed to a centralised, access-controlled key management system. Recovery keys shall not be stored locally on the encrypted device;
- **Verification:** IT Operations shall verify encryption status for all endpoints on a **monthly** basis via the central management console. Non-compliant devices shall be remediated within **[5 business days]**;
- **New Device Provisioning:** Encryption shall be enabled and verified prior to device deployment to end users;
- **Decommissioning:** Upon device decommissioning or reallocation, cryptographic erasure or physical destruction of storage media shall be performed in accordance with the [Asset Disposal and Media Sanitisation Procedure — Document ID].

### 8.4 Encryption Coverage Metrics

| Metric | Target |
|---|---|
| Encryption coverage (workstations and laptops) | 100% |
| Encryption coverage (servers with sensitive data) | 100% |
| Encryption coverage (enrolled mobile devices) | 100% |
| Recovery key escrow compliance | 100% |
| Time to remediate unencrypted discovered device | ≤ [5 business days] |

---

## 9. USB and Removable Media Controls

*This section defines controls governing the use of USB and removable media devices to prevent data exfiltration, introduction of malware, and unauthorised data transfer to or from NCII systems.*

### 9.1 Policy Statement

The connection of USB and removable media devices to [Organisation Name] endpoints presents a significant risk of data loss and malware introduction. [Organisation Name] shall implement technical and administrative controls to manage this risk in a manner proportionate to the classification of the systems involved.

### 9.2 Default Control Posture

| Endpoint Category | Default USB / Removable Media Policy |
|---|---|
| NCII-connected Workstations | **Blocked by default** — requires formal approval |
| General Corporate Workstations | **Restricted** — only approved, encrypted devices permitted |
| Servers (all) | **Blocked by default** — no exceptions unless formally approved |
| Mobile Devices (MDM-enrolled) | **Blocked** — USB data transfer disabled via MDM profile |
| Kiosk / Shared Terminals | **Blocked** — no removable media permitted |

### 9.3 Technical Enforcement

*Specify the tools and configuration methods used to enforce USB and removable media controls.*

USB and removable media controls shall be enforced through the following technical mechanisms:

- **Group Policy / MDM:** Block or restrict USB storage devices via Group Policy Object (GPO) settings on Windows (`Removable Disks: Deny execute/write/read access`) or equivalent MDM profiles for macOS and mobile devices;
- **DLP Integration:** [Organisation Name]'s Data Loss Prevention (DLP) solution shall be integrated with endpoint controls to monitor and alert on attempts to write sensitive data to removable media;
- **EDR/XDR Monitoring:** The EDR/XDR solution shall log all USB device connection events and alert the SOC on connection of unapproved or unrecognised devices;
- **Device Whitelisting:** Where removable media access is approved, only devices with pre-registered hardware IDs (USB Vendor ID / Product ID) shall be permitted to connect.

### 9.4 Approved Use Exceptions

Requests for approved removable media access shall be processed as follows:

1. The requesting user or team submits a **Removable Media Exception Request** (see Appendix C) to their line manager and the Security Operations team;
2. The Security Operations team assesses the business justification and risk;
3. Upon approval, access is granted for a specified, **time-limited period** (maximum **[30 days]**, renewable upon re-justification);
4. All approved media devices shall be **encrypted** (minimum AES-256) before use;
5. An audit log of all data transfers to approved media shall be retained for **[12 months]**;
6. Upon expiry of the exception, access rights are automatically revoked.

### 9.5 Prohibited Activities

The following activities are strictly prohibited:

- Connecting personal USB or removable media devices to [Organisation Name] endpoints without express approval;
- Transferring confidential or restricted data to unencrypted removable media under any circumstances;
- Disabling or circumventing technical controls governing USB access;
- Using removable media to transfer data between corporate and personal devices.

Violations shall be subject to disciplinary action in accordance with [Organisation Name]'s [Acceptable Use Policy / HR Disciplinary Policy].

---

## 10. Automated Patching Requirements

*This section defines the requirements for the timely identification, assessment, testing, and deployment of security patches across all in-scope endpoints. Authors should define patch windows, SLA tiers, and tooling.*

### 10.1 Policy Statement

Unpatched software vulnerabilities represent one of the most commonly exploited attack vectors against endpoints. [Organisation Name] shall maintain an automated patching programme that ensures all in-scope endpoints receive security patches within defined timeframes based on risk severity.

### 10.2 Patch Management Tooling

| Endpoint Category | Patch Management Solution | Patch Source |
|---|---|---|
| Windows Workstations & Servers | [WSUS / Microsoft Endpoint Configuration Manager / Intune / Ansible] | Microsoft Update Catalogue |
| Linux Servers | [Ansible / Red Hat Satellite / Landscape / Custom Script] | Vendor Repositories |
| macOS Devices | [Jamf Pro / MDM Profile / Munki] | Apple Software Update |
| iOS Devices | MDM-enforced OS update policy | Apple Software Update |
| Android Devices | MDM-enforced OS update policy | Google / OEM Updates |
| Third-Party Applications | [Patch Management Tool] | Vendor Channels |

### 10.3 Patch Classification and SLA

All patches shall be classified and remediated within the following maximum timeframes:

| Severity | CVSS Score Range | Definition | Patch Deployment SLA |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Remotely exploitable, no user interaction required, actively exploited in the wild | **72 hours** from vendor release or NACSA/CISA advisory |
| **High** | 7.0 – 8.9 | Significant risk of exploitation; potential for data exfiltration or system compromise | **7 calendar days** from vendor release |
| **Medium** | 4.0 – 6.9 | Moderate exploitation complexity; limited impact in isolation | **30 calendar days** from vendor release |
| **Low** | 0.1 – 3.9 | Minimal exploitability; low impact | **90 calendar days** from vendor release |
| **Informational** | N/A | No direct security risk | Next scheduled patch cycle |

> **Zero-Day Exception:** For critical zero-day vulnerabilities actively exploited against the financial sector or NCII entities (as communicated by NACSA NC4, BNM, or the SOC's threat intelligence feeds), the CISO may invoke emergency patching procedures requiring deployment within **24 hours**, bypassing standard change management approval gates with post-implementation review.

### 10.4 Patch Testing and Deployment Process

*Describe the phased patch deployment process to minimise business disruption while ensuring timely remediation.*

Patches shall be deployed through the following phased process:

1. **Identification:** Automated vulnerability scanning tools ([Specify Tool]) shall scan all endpoints **[weekly / daily]** and report newly identified vulnerabilities to the patch management console;
2. **Assessment:** The Security Operations team triages identified vulnerabilities, assigns severity ratings, and schedules patches in accordance with the SLA table in Section 10.3;
3. **Testing (Non-Critical):** Medium and Low severity patches shall be tested in a representative **[UAT / Staging]** environment for a minimum of **[3 business days]** before production deployment. Critical and High patches may proceed directly to production for NCII-connected systems given the risk calculus;
4. **Change Request:** Patch deployments shall be raised as standard change requests in [ITSM Tool] and approved by the [Change Advisory Board (CAB) / Change Manager];
5. **Deployment:** Patches are deployed through the automated patch management solution during approved **maintenance windows** (see Section 10.5);
6. **Verification:** Post-deployment scanning confirms successful patch application. Failed patches are re-queued for the next window or escalated;
7. **Reporting:** Monthly patch compliance reports are produced and reviewed by the CISO.

### 10.5 Maintenance Windows

| Endpoint Category | Standard Maintenance Window | Emergency Window |
|---|---|---|
| Workstations | [Day, e.g., Tuesday / Thursday] — [Time, e.g., 20:00–23:00 MYT] | As required — SOC-initiated |
| Non-Critical Servers | [Day, e.g., Sunday] — [Time, e.g., 02:00–06:00 MYT] | As required — CISO-approved |
| Critical Servers / NCII | [Agreed with Business Owner] — [Time] | Requires CISO + Business Owner approval |

### 10.6 Patch Compliance Metrics

| Metric | Target |
|---|---|
| Critical patch compliance within SLA | ≥ 99% |
| High patch compliance within SLA | ≥ 95% |
| Medium patch compliance within SLA | ≥ 90% |
| Endpoint patch coverage (agent deployed) | 100% |
| Mean time to patch (Critical) | ≤ 72 hours |

### 10.7 Unpatched and End-of-Life Systems

- Endpoints running software or operating systems that have reached **end-of-life (EOL)** and no longer receive security updates shall be formally identified and reported to the CISO within **[30 days]** of EOL date;
- EOL systems that cannot be immediately replaced or upgraded shall be subject to a formal **risk acceptance** process and **compensating controls** (e.g., network segmentation, enhanced monitoring) documented in accordance with Section 12;
- The inventory of EOL systems shall be reviewed **quarterly** by IT Operations and reported to the [IT Risk Committee / Steering Committee].

---

## 11. Roles and Responsibilities

*This section defines accountability and ownership for the controls described in this standard using a RACI framework. Authors should adapt role names to reflect the organisation's actual structure.*

### 11.1 Role Definitions

| Role | Description |
|---|---|
| **Chief Information Security Officer (CISO)** | Senior executive accountable for the overall cybersecurity programme and regulatory compliance |
| **Security Operations Centre (SOC) Lead** | Operational head of the SOC, responsible for day-to-day monitoring, threat detection, and incident response |
| **IT Operations Manager** | Responsible for endpoint provisioning, patch management, and infrastructure management |
| **Endpoint Security Engineer** | Technical specialist responsible for EDR/XDR deployment, application control, and firewall configuration |
| **Business Unit (BU) Head** | Accountable for compliance with this standard within their respective business unit |
| **End User** | All staff, contractors, and third parties operating endpoints in scope of this standard |
| **Internal Audit** | Independent review function responsible for assessing compliance with this standard |
| **Compliance Officer** | Responsible for regulatory mapping and liaison with NACSA and other regulators |

### 11.2 RACI Matrix

*R = Responsible (does the work) | A = Accountable (owns the outcome) | C = Consulted | I = Informed*

| Activity | CISO | SOC Lead | IT Ops Manager | Endpoint Security Engineer | BU Head | End User | Internal Audit | Compliance Officer |
|---|---|---|---|---|---|---|---|---|
| Approve this standard | A | C | C | C | I | I | C | C |
| Maintain and update this standard | A | R | C | R | C | I | C | C |
| Deploy and maintain EDR/XDR agents | I | A | R | R | I | I | I | I |
| Monitor EDR/XDR alerts | A | R | I | R | I | I | I | I |
| Configure host-based firewalls | I | C | R | A/R | I | I | I | I |
| Manage application whitelist | A | C | R | R | C | I | I | I |
| Process application approval requests | I | A | C | R | R | I | I | I |
| Enable and verify device encryption | I | C | A/R | R | I | I | I | I |
| Manage USB exception requests | A | R | C | R | C | I | I | I |
| Deploy patches (Critical) | A | R | R | R | I | C | I | I |
| Deploy patches (Standard) | I | C | A/R | R | I | I | I | I |
| Manage patch compliance reporting | A | C | R | R | I | I | I | I |
| Review EOL system risk acceptances | A | C | C | C | C | I | C | C |
| Conduct periodic compliance review | A | R | R | R | C | I | R | R |
| Report compliance status to regulators | A | C | C | C | C | I | C | R |
| Investigate policy violations | A | R | C | R | C | I | C | I |

---

## 12. Compliance and Exceptions

*This section describes how compliance with this standard is measured and the formal process for requesting and managing exceptions.*

### 12.1 Compliance Measurement

Compliance with this standard shall be monitored through the following mechanisms:

- **Automated Scanning:** Continuous and periodic vulnerability and configuration scanning of all in-scope endpoints using [Specify Tooling];
- **MDM Compliance Reports:** MDM platform compliance dashboards reviewed [weekly / monthly];
- **EDR/XDR Console:** Monitoring of agent health, coverage, and policy enforcement status;
- **Internal Audit:** Periodic independent reviews of endpoint security controls as scheduled by Internal Audit;
- **Management Reporting:** Monthly endpoint security compliance dashboards presented to [IT Risk Committee / Steering Committee].

### 12.2 Non-Compliance Handling

Instances of non-compliance shall be handled as follows:

| Non-Compliance Severity | Response |
|---|---|
| **Critical** (e.g., NCII endpoint with no EDR, unencrypted, or unpatched critical vulnerability) | Immediate escalation to CISO; endpoint isolated pending remediation; incident raised in [ITSM Tool] |
| **High** (e.g., persistent patch non-compliance beyond SLA, disabled firewall) | Escalation to IT Operations Manager and SOC Lead; remediation plan required within **[2 business days]** |
| **Medium** (e.g., unapproved application detected, USB policy violation) | SOC investigation; endpoint user notified; remediation within **[5 business days]** |
| **Low** (e.g., minor configuration drift from baseline) | Logged and tracked; remediated at next maintenance window |

### 12.3 Exception Process

Where technical or business constraints prevent full compliance with a requirement of this standard, the following exception process applies:

1. **Submit:** The requesting party submits a completed **Security Exception Request Form** (Appendix D) to the Security Operations team, documenting:
   - The specific requirement(s) that cannot be met;
   - The technical or business reason for the exception;
   - The proposed compensating controls;
   - The requested exception duration (maximum **[12 months]**);
2. **Review:** The Security Operations team and Compliance Officer assess the risk of the exception and the adequacy of proposed compensating controls;
3. **Approve:** Exceptions are approved by the CISO. Exceptions affecting NCII systems require additional sign-off by [Relevant Executive — e.g., CTO / CRO];
4. **Document:** Approved exceptions are recorded in the [Security Exception Register — Location] and communicated to Internal Audit;
5. **Review:** All active exceptions are reviewed at least **quarterly**. Expired exceptions that have not been renewed or remediated are escalated to the CISO.

---

## 13. Review and Approval

### 13.1 Review Schedule

This standard shall be reviewed on a **semi-annual** basis and updated as necessary to reflect:

- Changes to the regulatory environment (Act 854, NACSA directives, BNM requirements);
- Significant changes to [Organisation Name]'s technology landscape;
- Lessons learned from security incidents or audit findings;
- Changes in the threat landscape affecting NCII entities in Malaysia.

### 13.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes] |

### 13.3 Approval Sign-Off

*All approvers must review the complete document before signing. Digital signatures or equivalent electronic approval records are acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [CISO Name] | _________________ | [Date] |
| IT Operations Manager | [IT Ops Manager Name] | _________________ | [Date] |
| Chief Technology Officer | [CTO Name] | _________________ | [Date] |
| Compliance Officer | [Compliance Officer Name] | _________________ | [Date] |
| Internal Audit Representative | [Auditor Name] | _________________ | [Date] |

---

## 14. References

*This section lists all regulatory instruments, standards, and internal policies referenced by or relevant to this document.*

### 14.1 Regulatory References

| Reference | Title | Relevant Sections |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Section 18 — Duties of NCII Entity Owner to Comply with Cybersecurity Measures |
| NACSA | [Applicable NACSA Directive / Guideline Title] | [Applicable Sections] |
| BNM | [Risk Management in Technology (RMiT) Policy Document — if applicable] | [Applicable Paragraphs] |
| PDPA 2010 | Personal Data Protection Act 2010 | [Applicable Sections — e.g., Data Security Principle] |

### 14.2 Standards and Frameworks

| Reference | Title | Relevant Sections |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A Controls: 8.7 (Protection against malware), 8.8 (Management of technical vulnerabilities), 8.19 (Installation of software on operational systems) |
| ISO/IEC 27002:2022 | Information Security Controls | Controls 8.7, 8.8, 8.19, 8.20, 8.21 |
| CIS Controls v8 | Center for Internet Security Controls | Control 4 (Secure Configuration), Control 7 (Continuous Vulnerability Management), Control 10 (Malware Defences), Control 18 (Penetration Testing) |
| NIST SP 800-190 | Application Container Security Guide | [Applicable Sections — if containers in scope] |
| NIST SP 800-124 | Guidelines for Managing the Security of Mobile Devices | [Applicable Sections] |

### 14.3 Internal Policy References

| Document ID | Document Title | Relationship |
|---|---|---|
| [POL-IS-001] | Information Security Policy | Parent policy governing this standard |
| [POL-CR-001] | Cryptographic Key Management Policy | Referenced in Section 8 |
| [POL-IR-001] | Incident Response Plan | Referenced in Section 5 |
| [POL-CM-001] | Change Management Policy | Referenced in Section 6 |
| [POL-AU-001] | Acceptable Use Policy | Referenced in Section 9 |
| [POL-DC-001] | Data Classification Policy | Referenced in Section 8 |
| [POL-AM-001] | Asset Disposal and Media Sanitisation Procedure | Referenced in Section 8 |
| [REG-SE-001] | Security Exception Register | Referenced in Section 12 |

---

## 15. Appendices

### Appendix A — Endpoint Inventory Register

*The Endpoint Inventory Register provides a current record of all endpoints in scope of this standard. Authors should link to the live register maintained in the ITSM or CMDB system.*

| Field | Description |
|---|---|
| **Register Location** | [ITSM Tool / CMDB / SharePoint Link] |
| **Owner** | IT Operations |
| **Update Frequency** | Real-time / upon change |
| **Minimum Data Fields** | Hostname, IP Address, MAC Address, OS / Version, Owner / User, Department, Location, EDR Status, Encryption Status, Last Patch Date, Asset Classification |

The live Endpoint Inventory Register is maintained at: **[Location / URL]**

---

### Appendix B — Application Approval Request Form

*This form is submitted by business units requesting approval for a new application to be added to the corporate whitelist.*

**Form Reference:** [FORM-APP-001]

| Field | Detail |
|---|---|
| **Requestor Name** | [Name] |
| **Department / Business Unit** | [Department] |
| **Date of Request** | [Date] |
| **Application Name** | [Application Name] |
| **Version Requested** | [Version] |
| **Vendor Name** | [Vendor] |
| **Business Justification** | [Describe business need — why is this application required?] |
| **Intended Users** | [All staff / Specific team / Role] |
| **Estimated Number of Users** | [Number] |
| **Data Accessed by Application** | [Describe what data the application will access or process] |
| **Network Access Required** | [Yes / No — if yes, describe] |
| **Vendor Support Status** | [Actively supported / End-of-life — specify date] |
| **Known CVEs or Vulnerabilities** | [None known / List] |
| **Proposed Security Controls** | [Any controls to be applied to the application] |
| **Line Manager Approval** | [Name / Signature / Date] |
| **Security Operations Decision** | [Approved / Rejected / Conditionally Approved] |
| **Conditions / Notes** | [Any conditions attached to approval] |
| **CISO Approval (if High Risk)** | [Name / Signature / Date] |

---

### Appendix C — Removable Media Exception Request Form

**Form Reference:** [FORM-USB-001]

| Field | Detail |
|---|---|
| **Requestor Name** | [Name] |
| **Department / Business Unit** | [Department] |
| **Date of Request** | [Date] |
| **Device Type** | [USB Flash Drive / External HDD / SD Card / Other] |
| **Device Make / Model** | [Make and Model] |
| **Device Serial Number** | [Serial Number] |
| **Business Justification** | [Describe why removable media is required and what data will be transferred] |
| **Data Classification of Data to be Transferred** | [Public / Internal / Confidential / Restricted] |
| **Duration of Access Required** | [Start Date] to [End Date — maximum 30 days] |
| **Encryption Status of Device** | [AES-256 encrypted — Yes / No] |
| **Line Manager Approval** | [Name / Signature / Date] |
| **Security Operations Decision** | [Approved / Rejected] |
| **DLP Alert Monitoring** | [Enabled / Not applicable] |
| **CISO Approval (NCII systems)** | [Name / Signature / Date] |

---

### Appendix D — Security Exception Request Form

**Form Reference:** [FORM-EXC-001]

| Field | Detail |
|---|---|
| **Requestor Name** | [Name] |
| **Department / Business Unit** | [Department] |
| **Date of Request** | [Date] |
| **Affected System(s) / Endpoint(s)** | [Hostname(s) / Asset ID(s)] |
| **Standard Requirement(s) Not Met** | [Reference specific section(s) of this standard] |
| **Reason for Non-Compliance** | [Technical constraint / Business requirement / Vendor limitation] |
| **Risk Assessment** | [Likelihood: High/Medium/Low] × [Impact: High/Medium/Low] = [Risk Rating] |
| **Proposed Compensating Controls** | [List specific controls to mitigate the risk in absence of the standard requirement] |
| **Requested Exception Duration** | [Start Date] to [End Date — maximum 12 months] |
| **Remediation Plan** | [Describe plan to achieve compliance by a target date, if applicable] |
| **Target Compliance Date** | [Date] |
| **Requestor Line Manager Approval** | [Name / Signature / Date] |
| **Security Operations Review** | [Assessment and recommendation] |
| **CISO Decision** | [Approved / Rejected / Conditionally Approved] |
| **Conditions / Notes** | [Any conditions on approval] |
| **Exception Register Entry** | [Exception ID assigned upon approval] |
| **Next Review Date** | [Date] |

---

### Appendix E — Endpoint Security Configuration Baseline Summary

*This appendix summarises the key configuration parameters required across all in-scope endpoints. Detailed baseline configurations are maintained in [Hardening Guide / Configuration Management Tool Location].*

| Control Area | Windows Workstation | Windows Server | Linux Server | macOS | Mobile (MDM) |
|---|---|---|---|---|---|
| EDR/XDR Agent | Mandatory | Mandatory | Mandatory | Mandatory | MDM-integrated |
| Host-Based Firewall | Enabled / Default-Deny | Enabled / Default-Deny | Enabled / Default-Deny | Enabled | MDM-managed |
| Application Whitelisting | AppLocker/WDAC | AppLocker/WDAC | AppArmor/SELinux | Gatekeeper + MDM | MDM App Catalogue |
| Full Disk Encryption | BitLocker (AES-256) | BitLocker (AES-256) | LUKS (AES-256-XTS) | FileVault 2 | Hardware-enforced |
| USB / Removable Media | Blocked (GPO) | Blocked (GPO) | Blocked (udev rules) | Blocked (MDM) | Blocked (MDM) |
| Automated Patching | WSUS / Intune | SCCM / Ansible | Ansible / Satellite | Jamf / MDM | MDM-enforced |
| Screen Lock Timeout | ≤ [5 minutes] | N/A (server) | N/A (server) | ≤ [5 minutes] | ≤ [5 minutes] |
| Password / PIN Policy | As per [Password Policy] | As per [Password Policy] | As per [Password Policy] | As per [Password Policy] | As per MDM Profile |
| Local Admin Rights | Restricted to IT/SOC | Restricted to IT/SOC | Restricted to root/sudo | Restricted to IT/SOC | N/A |

---

*End of Document*

---

**Document Classification: Confidential**
**© [Year] [Organisation Name]. All rights reserved. Unauthorised reproduction or distribution of this document is prohibited.**