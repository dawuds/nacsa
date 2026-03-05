# IoT/OT Security Standard

---

**[Organization Name]**
**Cyber Security Act 2024 (Act 854) Compliance Programme**

---

## Document Metadata

| Field | Details |
|---|---|
| **Document ID** | [Document ID] — e.g., IS-OT-001 |
| **Title** | IoT/OT Security Standard |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Category** | Standard |
| **Owner** | OT Security / Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) — NACSA |
| **Applicable Sections** | Section 18, Section 24 |
| **Related Standards** | IEC 62443, NIST SP 800-82, IEC 61511 |

---

> **DOCUMENT CONTROL NOTICE**
> This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to any third party without prior written authorisation from the document owner. This standard forms part of [Organization Name]'s compliance obligations under the Cyber Security Act 2024 (Act 854) as a designated or potentially designated operator of National Critical Information Infrastructure (NCII).

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Device Hardening Requirements](#5-device-hardening-requirements)
6. [Network Segmentation for Operational Technology](#6-network-segmentation-for-operational-technology)
7. [Firmware Management](#7-firmware-management)
8. [Default Credential Elimination](#8-default-credential-elimination)
9. [Industrial Protocol Security (Modbus, OPC UA)](#9-industrial-protocol-security-modbus-opc-ua)
10. [IEC 62443 Alignment](#10-iec-62443-alignment)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Compliance and Enforcement](#12-compliance-and-enforcement)
13. [Exceptions and Waivers](#13-exceptions-and-waivers)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the purpose of this standard. Explain why it exists, what risk it addresses, and the regulatory obligation it fulfils. Reference specific sections of Act 854.*

This Standard establishes the minimum security requirements for Internet of Things (IoT) devices and Operational Technology (OT) systems owned, operated, or connected to networks under the control of [Organization Name]. It applies specifically where such systems interface with, or form part of, National Critical Information Infrastructure (NCII) as defined under the Cyber Security Act 2024 (Act 854).

The purpose of this Standard is to:

- Define mandatory security controls for IoT and OT assets to reduce the risk of unauthorised access, sabotage, and service disruption.
- Establish a consistent baseline for device configuration, network architecture, firmware management, and protocol usage across all operational environments.
- Ensure [Organization Name]'s compliance with obligations imposed under **Section 18** (Duty to comply with NCII security measures) and **Section 24** (Reporting of cyber security incidents) of Act 854, as directed by the **National Cyber Security Agency (NACSA)**.
- Align [Organization Name]'s OT security posture with internationally recognised standards, principally **IEC 62443** and **NIST SP 800-82**.

Failure to comply with this Standard may constitute a breach of Act 854, expose [Organization Name] to regulatory enforcement action by NACSA, and materially increase the risk of operational disruption to critical infrastructure services.

---

## 2. Scope

*Define the boundaries of this standard — which systems, sites, personnel, and third parties it applies to. Be explicit about what is excluded.*

### 2.1 In Scope

This Standard applies to:

- All **IoT devices** deployed within [Organization Name]'s operational environments, including but not limited to: sensors, meters, actuators, PLCs, HMIs, RTUs, smart cameras, SCADA endpoints, building management system (BMS) nodes, and edge computing devices.
- All **Operational Technology (OT) systems** connected to, or capable of communicating with, [Organization Name]'s corporate IT network or the internet.
- **Industrial Control Systems (ICS)** and **SCADA systems** operating within NCII-designated sectors.
- **Third-party vendors and contractors** who supply, install, maintain, or remotely access OT/IoT systems on behalf of [Organization Name].
- **Cloud-connected OT platforms** and associated management interfaces.
- All **[Organization Name] sites and facilities** where OT/IoT assets are deployed: [List Sites, e.g., Plant A — Kuala Lumpur, Substation B — Selangor].

### 2.2 Out of Scope

The following are explicitly excluded from this Standard:

- Standard enterprise IT endpoints (laptops, desktops, servers) governed by the [Organization Name] IT Security Policy.
- Consumer IoT devices used exclusively for personal/administrative purposes with no connection to operational networks.
- Systems already decommissioned and isolated with no network connectivity.

### 2.3 Asset Classification Reference

| Asset Class | Examples | Covered by This Standard |
|---|---|---|
| Level 0 — Field Devices | Sensors, actuators, PLCs | Yes |
| Level 1 — Control Devices | DCS, SCADA controllers | Yes |
| Level 2 — Supervisory | SCADA servers, HMIs | Yes |
| Level 3 — Site Operations | Historian, engineering workstations | Yes |
| Level 4 — Enterprise IT | ERP, email, endpoints | No — refer to IT Security Policy |
| External IoT (Cloud-managed) | Smart meters, remote sensors | Yes — if connected to OT network |

---

## 3. Regulatory and Policy Context

*Summarise the regulatory obligations that this standard helps fulfil. Reference the specific sections of Act 854 and any related NACSA directives, BNM guidelines (if applicable), or sector-specific requirements.*

### 3.1 Cyber Security Act 2024 (Act 854)

[Organization Name] operates as a [designated / potentially designated] NCII entity under Act 854. This Standard directly supports compliance with the following provisions:

| Section | Title | Obligation Addressed |
|---|---|---|
| **Section 18** | Duty to comply with NCII security measures | Mandatory implementation of NACSA-prescribed security measures for NCII assets, including IoT/OT systems |
| **Section 24** | Reporting of cyber security incidents | Timely detection and reporting of OT/IoT-related incidents to NACSA within prescribed timeframes |
| **Section 26** | Cyber security audits | Maintenance of evidence of compliance with this Standard for audit purposes |
| **Section 29** | Directions by NACSA | Obligation to comply with NACSA directions related to OT/IoT security |

### 3.2 Related Internal Policies and Standards

This Standard shall be read in conjunction with the following [Organization Name] documents:

| Document | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy |
| IT Risk Management Framework | [Doc ID] | Risk assessment methodology |
| Incident Response Plan | [Doc ID] | Incident handling procedures |
| Vendor Management Policy | [Doc ID] | Third-party OT access requirements |
| Network Security Standard | [Doc ID] | Enterprise network segmentation requirements |
| Business Continuity Plan | [Doc ID] | OT system resilience requirements |

### 3.3 External Standards and References

- **IEC 62443** — Industrial Automation and Control Systems (IACS) Security
- **NIST SP 800-82 Rev. 3** — Guide to OT Security
- **IEC 61511** — Functional Safety — Safety Instrumented Systems
- **NERC CIP** (where applicable to energy sector)
- **NACSA National Cyber Security Policy** (NCSP) 2020–2024

---

## 4. Definitions and Terminology

*Provide clear definitions for all technical and regulatory terms used in this document. Authors should add organisation-specific terminology as needed.*

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, enacted by the Parliament of Malaysia |
| **NCII** | National Critical Information Infrastructure — as designated by the Minister under Act 854 |
| **NACSA** | National Cyber Security Agency — the competent authority under Act 854 |
| **IoT** | Internet of Things — network-connected devices with embedded sensors or actuators, typically with limited computational resources |
| **OT** | Operational Technology — hardware and software that monitors or controls physical devices, processes, and events |
| **ICS** | Industrial Control System — a general term encompassing SCADA, DCS, PLCs, and related systems |
| **SCADA** | Supervisory Control and Data Acquisition — a control system architecture used to monitor and control industrial processes |
| **PLC** | Programmable Logic Controller — industrial digital computer used for automation of industrial processes |
| **HMI** | Human-Machine Interface — an interface device that presents process data to operators |
| **RTU** | Remote Terminal Unit — a device that interfaces physical objects to a distributed control system |
| **DCS** | Distributed Control System — a control system for a process or plant that uses distributed controllers |
| **DMZ** | Demilitarised Zone — a network segment that provides a buffer between untrusted and trusted networks |
| **Purdue Model** | A reference model for ICS network segmentation with hierarchical levels 0–5 |
| **IEC 62443** | International standard for Industrial Automation and Control System (IACS) security |
| **Security Level (SL)** | IEC 62443 rating describing the resistance of a system to cyber attack (SL 1–4) |
| **Conduit** | IEC 62443 term for a grouping of communication channels connecting two or more zones |
| **Zone** | IEC 62443 term for a grouping of logical or physical assets sharing common security requirements |
| **Firmware** | Permanent software embedded in an OT/IoT device's read-only memory |
| **Default Credentials** | Factory-set usernames and passwords shipped with devices by the manufacturer |
| **Modbus** | A serial communication protocol widely used in industrial applications |
| **OPC UA** | OPC Unified Architecture — a machine-to-machine communication protocol for industrial automation |
| **Air Gap** | Physical isolation of a network from unsecured networks, including the internet |
| **Asset Owner** | [Organization Name] personnel accountable for the security of a specific OT/IoT asset or system |

---

## 5. Device Hardening Requirements

*This section defines the mandatory security configuration baseline for all IoT and OT devices. Authors should map each requirement to specific device types and document the testing/verification procedures used to confirm compliance.*

### 5.1 Overview

All IoT and OT devices connected to [Organization Name] networks shall be hardened prior to deployment and maintained in a hardened state throughout their operational lifecycle. Device hardening reduces the attack surface by removing unnecessary functionality and enforcing secure configurations.

This section shall be applied at initial commissioning, following any significant configuration change, and as part of the annual review cycle.

### 5.2 Mandatory Hardening Controls

The following controls are mandatory for all in-scope devices unless a formal exception is granted in accordance with Section 13 of this Standard.

#### 5.2.1 Operating System and Software Hardening

| Control ID | Requirement | Applicability | Verification Method |
|---|---|---|---|
| DH-001 | Remove or disable all unused services, protocols, and ports | All devices | Configuration audit |
| DH-002 | Disable Telnet, FTP, and unencrypted HTTP management interfaces | All devices | Port scan / config review |
| DH-003 | Enable only required management protocols (SSH v2, HTTPS, SNMPv3) | All devices | Configuration audit |
| DH-004 | Apply vendor-recommended security benchmarks (e.g., CIS Benchmarks where available) | All devices | Benchmark scan |
| DH-005 | Disable USB and removable media ports where not operationally required | Embedded OT devices | Physical inspection |
| DH-006 | Enable logging of all authentication events and configuration changes | All devices | Log review |
| DH-007 | Set session timeouts for all management interfaces (maximum [15] minutes of inactivity) | All devices | Configuration audit |
| DH-008 | Disable SNMP v1 and v2c; use SNMPv3 with authentication and encryption | Network-connected OT | Configuration audit |

#### 5.2.2 Account and Access Hardening

| Control ID | Requirement | Applicability | Verification Method |
|---|---|---|---|
| DH-009 | Rename or disable the default administrative account where technically feasible | All devices | Configuration audit |
| DH-010 | Implement role-based access control (RBAC) with least-privilege principles | All devices | Access review |
| DH-011 | Enforce multi-factor authentication (MFA) for remote management access | All remotely accessible devices | Configuration audit |
| DH-012 | Prohibit shared accounts; each operator shall have a unique credential | All devices | Account audit |
| DH-013 | Implement account lockout after [5] consecutive failed authentication attempts | All devices | Configuration audit |
| DH-014 | Disable guest, anonymous, and demo accounts | All devices | Configuration audit |

#### 5.2.3 Physical Hardening

| Control ID | Requirement | Applicability | Verification Method |
|---|---|---|---|
| DH-015 | Restrict physical access to OT devices to authorised personnel only | All field devices | Physical access review |
| DH-016 | Apply tamper-evident seals to critical OT device enclosures | Critical Level 0–1 devices | Physical inspection |
| DH-017 | Disable JTAG, debug, and diagnostic ports on production devices where feasible | Embedded devices | Hardware inspection |
| DH-018 | Lock device consoles with a password or physical key | HMIs, engineering workstations | Physical inspection |

### 5.3 Device Hardening Checklist

*Authors should complete and retain a hardening checklist for each device or device class. A template checklist is provided in Appendix A.*

| Device Type | Hardening Baseline Document | Last Verified | Verified By |
|---|---|---|---|
| [PLC — Siemens S7-1500] | [Appendix A — Checklist A1] | [Date] | [Name] |
| [HMI — WinCC] | [Appendix A — Checklist A2] | [Date] | [Name] |
| [RTU — ABB] | [Appendix A — Checklist A3] | [Date] | [Name] |
| [Smart Meter — [Vendor]] | [Appendix A — Checklist A4] | [Date] | [Name] |
| [IP Camera — [Vendor]] | [Appendix A — Checklist A5] | [Date] | [Name] |

---

## 6. Network Segmentation for Operational Technology

*This section defines the required network architecture for OT environments. Authors should include actual network diagrams (referenced as appendices) showing zone boundaries, conduits, and firewall positions. The Purdue Model is recommended as the baseline architecture.*

### 6.1 Segmentation Principles

[Organization Name] shall implement network segmentation to:

- Prevent lateral movement of threats between IT and OT environments.
- Limit the blast radius of any single compromised device or zone.
- Provide visibility and control over all traffic crossing zone boundaries.
- Comply with IEC 62443-3-3 system security requirements for network zoning.

The following principles are mandatory:

- **No direct connectivity** shall exist between Level 4 (Enterprise IT) and Level 2 or below (OT) without traversing an OT DMZ.
- **All inter-zone communication** shall pass through an approved security control point (firewall, data diode, or unidirectional gateway).
- **The Purdue Reference Model** (or equivalent zone model) shall be used as the baseline architecture for all OT network designs.

### 6.2 Network Zone Architecture

#### 6.2.1 Zone Definitions

| Zone | Purdue Level | Description | Security Level (IEC 62443) |
|---|---|---|---|
| **Enterprise Zone** | Level 4–5 | Corporate IT — ERP, email, internet-facing systems | SL 1 |
| **OT DMZ** | Level 3.5 | Buffer zone between IT and OT networks; hosts historians, remote access gateways | SL 2 |
| **Site Operations Zone** | Level 3 | Operational management — historians, engineering workstations, patch servers | SL 2 |
| **Supervisory Zone** | Level 2 | SCADA servers, HMIs, data concentrators | SL 2–3 |
| **Control Zone** | Level 1 | PLCs, DCS controllers, safety systems | SL 3 |
| **Field Zone** | Level 0 | Physical process — sensors, actuators, instruments | SL 2–3 |
| **Safety Zone** | Separate | Safety Instrumented Systems (SIS) — physically or logically isolated | SL 3–4 |
| **External/Vendor Zone** | DMZ | Third-party remote access — jump servers, vendor VPN termination | SL 2 |

#### 6.2.2 Conduit Requirements

| Conduit | From Zone | To Zone | Permitted Traffic | Control Point | Direction |
|---|---|---|---|---|---|
| IT-to-OT DMZ | Enterprise | OT DMZ | [Define permitted protocols/ports] | Next-gen firewall | Bidirectional — restricted |
| OT DMZ-to-Supervisory | OT DMZ | Supervisory Zone | [Define] | Industrial firewall | Bidirectional — restricted |
| Supervisory-to-Control | Supervisory | Control Zone | [Define — e.g., OPC UA, proprietary] | Industrial switch with ACL | Bidirectional — restricted |
| Historian Replication | Site Operations | OT DMZ | [Historian protocol] | Data diode / unidirectional gateway | One-way — OT to DMZ |
| Vendor Remote Access | External Zone | OT DMZ | RDP/SSH via jump host only | Privileged Access Workstation (PAW) | Bidirectional — audited |

### 6.3 Firewall and Access Control Requirements

The following rules apply to all security control points at zone boundaries:

- **Default-deny** inbound and outbound rule sets shall be implemented on all OT firewalls.
- All permitted rules shall be documented, business-justified, and reviewed [quarterly / annually].
- **No direct inbound connections** from the internet to any OT zone are permitted.
- **Firewall rule changes** in OT environments shall follow the change management process defined in [Change Management Policy — Doc ID].
- Firewall logs shall be forwarded to [Organization Name]'s Security Operations Centre (SOC) or SIEM platform in real time.

### 6.4 Remote Access to OT Systems

| Requirement | Detail |
|---|---|
| All remote access shall terminate at a designated jump server in the OT DMZ | No direct connectivity to control zones |
| Multi-factor authentication is mandatory for all remote OT access | [Specify MFA method] |
| Vendor remote access sessions shall be time-limited | Maximum session duration: [4 hours]; requires renewal |
| All remote sessions shall be recorded | Session recording retained for [12 months] |
| Simultaneous sessions for a single vendor account shall be limited | Maximum [2] concurrent sessions |
| Remote access shall be disabled when not in active use | [Define procedure for disabling standing vendor access] |

### 6.5 Wireless Network Requirements

- **Wi-Fi access to OT Level 1–2** systems is prohibited unless operationally essential and formally approved.
- Where wireless communication is operationally required, it shall use **WPA3-Enterprise** or equivalent.
- Wireless segments shall be placed in a dedicated zone and treated as untrusted networks.
- **Rogue wireless device detection** shall be implemented within all OT areas.

*Reference network architecture diagrams are provided in Appendix B.*

---

## 7. Firmware Management

*This section governs the lifecycle management of firmware for all IoT and OT devices. Authors should maintain a live firmware inventory linked to the organisation's CMDB or OT asset register.*

### 7.1 Firmware Inventory

[Organization Name] shall maintain a current inventory of firmware versions for all in-scope devices. This inventory shall be reviewed and updated:

- Following any firmware update.
- As part of the annual review of this Standard.
- Following the procurement of any new device.

| Asset ID | Device Type | Make/Model | Current Firmware Version | Vendor Latest Version | CVE Exposure | Last Updated | Update Priority |
|---|---|---|---|---|---|---|---|
| [OT-001] | PLC | [Make/Model] | [v.x.x] | [v.x.x] | [CVE IDs if known] | [Date] | [High/Med/Low] |
| [OT-002] | RTU | [Make/Model] | [v.x.x] | [v.x.x] | [None known] | [Date] | [Low] |
| [OT-003] | Smart Meter | [Make/Model] | [v.x.x] | [v.x.x] | [CVE IDs if known] | [Date] | [High] |
| [OT-004] | IP Camera | [Make/Model] | [v.x.x] | [v.x.x] | [None known] | [Date] | [Medium] |

### 7.2 Firmware Update Policy

#### 7.2.1 Update Classification

| Priority | Trigger Condition | Maximum Patching Window |
|---|---|---|
| **Critical** | CVSS ≥ 9.0 or active exploitation confirmed | [72 hours] — emergency change process |
| **High** | CVSS 7.0–8.9 or vendor-rated High | [30 days] |
| **Medium** | CVSS 4.0–6.9 | [90 days] |
| **Low** | CVSS < 4.0 or feature updates | Next scheduled maintenance window |

#### 7.2.2 Update Procedures

All firmware updates shall follow this procedure:

1. **Notification** — Monitor vendor security advisories and NACSA/CERT-MY alerts for relevant firmware vulnerabilities.
2. **Risk Assessment** — Assess the impact of the vulnerability and the risk introduced by the update (compatibility, operational continuity).
3. **Testing** — Test the firmware update in a non-production/lab environment before deployment, where technically feasible.
4. **Change Approval** — Raise a change request in accordance with [Change Management Policy — Doc ID]. Critical updates use the emergency change process.
5. **Backup** — Create a full configuration and firmware backup of the device prior to update.
6. **Deployment** — Apply the firmware update during an approved maintenance window.
7. **Verification** — Confirm the update was successful; validate device operation and security controls post-update.
8. **Documentation** — Update the firmware inventory and retain update records.

#### 7.2.3 Exceptions — End-of-Life and Unsupported Firmware

Where a device vendor no longer provides firmware updates (End-of-Life):

- The device shall be flagged in the asset inventory as **EOL**.
- A **compensating control plan** shall be developed and approved by the CISO within [60 days] of EOL declaration.
- Compensating controls shall include, at minimum: network isolation, enhanced monitoring, and a documented device replacement roadmap.
- EOL devices shall be included in the annual budget planning process for replacement.

| Asset ID | Device | EOL Date | Compensating Controls | Replacement Target Date | Owner |
|---|---|---|---|---|---|
| [OT-XXX] | [Device] | [Date] | [Controls description] | [Date] | [Name] |

### 7.3 Firmware Integrity

- Firmware shall only be downloaded from **official vendor sources**.
- **Cryptographic signature verification** (where supported by the vendor) shall be performed before applying any firmware update.
- Firmware images shall be stored in a controlled, access-restricted internal repository.
- The integrity of stored firmware images shall be verified via checksum (SHA-256 or stronger) prior to deployment.

---

## 8. Default Credential Elimination

*This section mandates the removal of manufacturer-default credentials from all devices. This is a critical baseline control: factory default credentials are frequently documented publicly and are among the most exploited attack vectors against IoT/OT systems.*

### 8.1 Policy Statement

**No device shall be deployed on any [Organization Name] network with manufacturer-default credentials intact.** This requirement applies to:

- Usernames and passwords for all management interfaces (web UI, CLI, API).
- SNMP community strings.
- SSH host keys generated by the vendor.
- Any pre-shared keys or certificates supplied by the manufacturer.

### 8.2 Scope of Default Credentials

| Credential Type | Requirement | Verification Method |
|---|---|---|
| Administrator password | Changed before deployment; must meet password complexity requirements | Configuration audit |
| Operator/user passwords | Changed before deployment | Configuration audit |
| SNMP community strings | Default strings (e.g., "public", "private") removed; replaced with complex strings | Configuration audit |
| SSH keys | Vendor-supplied SSH host keys regenerated on first boot | Key inspection |
| API keys / tokens | Vendor-supplied defaults replaced or revoked | API configuration review |
| Pre-shared keys (PSK) | Vendor-supplied PSKs replaced with organisation-generated keys | Configuration audit |
| Certificates | Self-signed certificates replaced with [Organization Name]-issued or trusted CA certificates | Certificate inspection |

### 8.3 Password Standards for OT/IoT Devices

All passwords set on OT/IoT devices shall comply with the following minimum requirements:

| Parameter | Minimum Requirement |
|---|---|
| Minimum length | [16] characters |
| Complexity | Mix of uppercase, lowercase, numeric, and special characters |
| Prohibition | Must not contain device name, manufacturer name, or common dictionary words |
| Reuse | Must not reuse the last [12] passwords |
| Rotation frequency | [Annual] for standard accounts; [90 days] for privileged accounts |
| Storage | All device credentials stored in [Organization Name]'s approved Privileged Access Management (PAM) system: [PAM System Name] |

### 8.4 Credential Management Procedures

1. **Pre-deployment check** — Prior to connecting any new device to [Organization Name] networks, the commissioning engineer shall verify that all default credentials have been changed.
2. **PAM registration** — All device credentials shall be registered in the PAM system before the device is placed into production.
3. **Credential rotation** — Scheduled credential rotation shall be managed via the PAM system.
4. **Vendor credentials** — Vendor-supplied maintenance accounts shall be disabled when not in use and re-enabled only under a formal access request.
5. **Decommissioning** — Credentials for decommissioned devices shall be revoked and removed from the PAM system.

### 8.5 Verification and Audit

- A **default credential check** shall be included in the pre-production commissioning checklist (Appendix A).
- **Automated scanning** using tools such as [specify tool, e.g., Nessus, Claroty, Dragos] shall be conducted [quarterly] to detect devices with known default credentials.
- Results of default credential scans shall be reported to the OT Security team and remediated within [30 days] of detection.

---

## 9. Industrial Protocol Security (Modbus, OPC UA)

*This section defines security requirements for industrial communication protocols used within [Organization Name]'s OT environments. Authors should identify all protocols in use and map them to the requirements below. Not all protocols listed may be applicable — remove or add sections as relevant to the organisation's environment.*

### 9.1 Protocol Inventory

*Maintain an inventory of all industrial protocols in use. This inventory shall be updated annually and reviewed following any significant network change.*

| Protocol | Version/Variant | Usage Context | Zone(s) | Encrypted | Authenticated | Risk Rating |
|---|---|---|---|---|---|---|
| Modbus TCP | [Version] | [PLC-to-SCADA comms] | [Level 1–2] | No (native) | No (native) | High |
| Modbus RTU | [Version] | [Field device comms] | [Level 0–1] | No (native) | No (native) | High |
| OPC UA | [Version] | [Historian data collection] | [Level 2–3] | Yes (TLS) | Yes (X.509) | Low |
| DNP3 | [Version] | [Substation comms] | [Level 1–2] | [Yes/No] | [Yes/No] | [Rating] |
| IEC 61850 | [Version] | [Protection relay comms] | [Level 0–1] | [Yes/No] | [Yes/No] | [Rating] |
| PROFINET | [Version] | [Process automation] | [Level 0–1] | [Yes/No] | [Yes/No] | [Rating] |
| [Other] | | | | | | |

### 9.2 Modbus Security Requirements

Modbus was designed for serial communication in isolated environments and provides no native authentication or encryption. The following compensating controls are mandatory where Modbus is used:

#### 9.2.1 Modbus TCP Controls

| Control ID | Requirement | Implementation Guidance |
|---|---|---|
| PR-MOD-001 | Restrict Modbus TCP (port 502) to authorised source IP addresses only | Implement ACLs on industrial switches and firewalls |
| PR-MOD-002 | Deploy an OT-aware deep packet inspection (DPI) firewall or industrial IDS/IPS to monitor Modbus traffic | [Specify approved platform, e.g., Claroty, Nozomi, Dragos] |
| PR-MOD-003 | Whitelist permitted Modbus function codes; alert on or block unauthorised function codes | Configure in OT IDS/IPS |
| PR-MOD-004 | Prohibit Modbus TCP traversal across zone boundaries without inspection | Enforce at zone boundary firewalls |
| PR-MOD-005 | Log all Modbus write commands (Function Codes 05, 06, 15, 16) | Forward to SIEM/SOC |
| PR-MOD-006 | Implement read-only restrictions on non-engineering workstations | Configure at PLC/controller level |
| PR-MOD-007 | Consider deploying a Modbus proxy or application-layer gateway for cross-zone communication | Evaluated per site |

#### 9.2.2 Modbus RTU Controls

| Control ID | Requirement |
|---|---|
| PR-MOD-008 | Physically secure serial communication lines (RS-232/RS-485) |
| PR-MOD-009 | Use cable management and tamper detection for serial cabling in accessible areas |
| PR-MOD-010 | Monitor for unexpected devices on Modbus RTU segments |

### 9.3 OPC UA Security Requirements

OPC UA provides native security features (transport security, authentication, and authorisation). The following requirements are mandatory for all OPC UA deployments:

| Control ID | Requirement | Implementation Guidance |
|---|---|---|
| PR-OPC-001 | Enable OPC UA Security Mode: **SignAndEncrypt** | Disable "None" and "Sign" modes in production |
| PR-OPC-002 | Use **TLS 1.2 or 1.3** for transport layer encryption | Configure in OPC UA server settings |
| PR-OPC-003 | Implement X.509 certificate-based authentication for all OPC UA connections | Issue certificates from [Organization Name] PKI or approved CA |
| PR-OPC-004 | Rotate OPC UA certificates before expiry; minimum key length RSA-2048 | Certificate lifecycle managed in [PAM/PKI system] |
| PR-OPC-005 | Implement OPC UA user authorisation with least-privilege role assignment | Configure user roles on OPC UA server |
| PR-OPC-006 | Reject expired, revoked, or self-signed certificates (unless explicitly whitelisted with CISO approval) | Configure certificate trust store |
| PR-OPC-007 | Log OPC UA security events (authentication failures, certificate errors, session establishments) | Forward to SIEM/SOC |
| PR-OPC-008 | Apply OPC UA security profiles appropriate to the Security Level target for each zone | Map to IEC 62443 SL requirements |
| PR-OPC-009 | Restrict OPC UA port (4840) to authorised sources via firewall ACLs | Perimeter and zone boundary firewalls |

### 9.4 Other Protocol-Specific Requirements

*Complete this table for all other industrial protocols identified in the protocol inventory (Section 9.1).*

| Protocol | Key Security Controls | Status |
|---|---|---|
| **DNP3** | Implement DNP3 Secure Authentication v5 (SAv5); whitelist permitted DNP3 objects; deploy OT DPI | [Implemented / Planned / Not Applicable] |
| **IEC 61850** | Use GOOSE/Sampled Values on isolated VLANs; implement role-based access; audit MMS connections | [Status] |
| **PROFINET** | Segment on dedicated VLANs; apply PROFINET-aware firewall rules; disable unused PROFINET features | [Status] |
| **[Other]** | [Define controls] | [Status] |

---

## 10. IEC 62443 Alignment

*This section documents [Organization Name]'s alignment with the IEC 62443 series of standards for Industrial Automation and Control System (IACS) security. Authors should identify the target Security Level (SL-T) for each zone and document the gap assessment against that target.*

### 10.1 IEC 62443 Overview

IEC 62443 provides a risk-based framework for securing IACS. It is structured across four series:

| Series | Scope |
|---|---|
| **IEC 62443-1** | General — Concepts, terminology, and metrics |
| **IEC 62443-2** | Policies and procedures — Security programme requirements for asset owners |
| **IEC 62443-3** | System — Security requirements for IACS systems and zones |
| **IEC 62443-4** | Component — Security requirements for IACS components/products |

[Organization Name] is committed to achieving and maintaining alignment with IEC 62443, as required by NACSA's NCII cybersecurity framework and consistent with Section 18 obligations under Act 854.

### 10.2 Security Level Targets by Zone

*Security Level Targets (SL-T) shall be determined through a risk assessment. The following table records the agreed SL-T for each OT zone. Justification for each SL-T shall be documented in the OT Risk Register.*

| Zone | Purdue Level | Security Level Target (SL-T) | Rationale | Current Achieved SL | Gap |
|---|---|---|---|---|---|
| Enterprise Zone | 4–5 | SL 1 | Low direct OT impact | [SL x] | [Gap description] |
| OT DMZ | 3.5 | SL 2 | Buffer zone — intermediate risk | [SL x] | [Gap description] |
| Site Operations | 3 | SL 2 | Engineering workstations — moderate risk | [SL x] | [Gap description] |
| Supervisory Zone | 2 | SL 2–3 | SCADA servers — significant impact if compromised | [SL x] | [Gap description] |
| Control Zone | 1 | SL 3 | Direct process control — high impact | [SL x] | [Gap description] |
| Field Zone | 0 | SL 2 | Physical process interface | [SL x] | [Gap description] |
| Safety Zone | Separate | SL 3–4 | Safety systems — potential for harm | [SL x] | [Gap description] |

### 10.3 IEC 62443-3-3 Foundational Requirements (FR) Implementation Status

IEC 62443-3-3 defines seven Foundational Requirements (FR). The following table records [Organization Name]'s implementation status against each FR at the target Security Level.

| FR | Description | SL-T Requirement | Current Status | Evidence Reference | Gap / Action |
|---|---|---|---|---|---|
| **FR1 — Identification & Authentication Control** | Control identification and authentication for all entities | [SL-T specific] | [Implemented/Partial/Not Implemented] | [Evidence Doc] | [Action] |
| **FR2 — Use Control** | Enforce authorised use of information and resources | [SL-T specific] | [Status] | [Evidence Doc] | [Action] |
| **FR3 — System Integrity** | Ensure integrity of IACS | [SL-T specific] | [Status] | [Evidence Doc] | [Action] |
| **FR4 — Data Confidentiality** | Protect data in transit and at rest | [SL-T specific] | [Status] | [Evidence Doc] | [Action] |
| **FR5 — Restricted Data Flow** | Segment networks and restrict data flow | [SL-T specific] | [Status] | [Evidence Doc] | [Action] |
| **FR6 — Timely Response to Events** | Respond to security violations | [SL-T specific] | [Status] | [Evidence Doc] | [Action] |
| **FR7 — Resource Availability** | Ensure availability of IACS resources | [SL-T specific] | [Status] | [Evidence Doc] | [Action] |

### 10.4 IEC 62443 Gap Remediation Plan

*Document identified gaps against IEC 62443 targets and track remediation progress. This table shall be reviewed quarterly by the OT Security team.*

| Gap ID | Description | Affected Zone(s) | FR Reference | Priority | Remediation Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|---|
| [GAP-001] | [Gap description] | [Zone] | [FR x] | [High/Med/Low] | [Remediation steps] | [Owner name] | [Date] | [Open/In Progress/Closed] |
| [GAP-002] | | | | | | | | |
| [GAP-003] | | | | | | | | |

### 10.5 IEC 62443 Asset Owner Responsibilities (62443-2-1)

In accordance with IEC 62443-2-1, [Organization Name] as the IACS asset owner shall maintain:

- [ ] A documented **Cyber Security Management System (CSMS)** for OT environments.
- [ ] A current **OT Asset Inventory** aligned with the IACS asset lifecycle.
- [ ] A completed **OT Risk Assessment** using an approved methodology (e.g., HAZOP-Cyber, STRIDE, or equivalent).
- [ ] A documented **Security Plan** for each zone/conduit pair.
- [ ] Evidence of **staff competency** in OT security (training records, certifications).
- [ ] A defined **incident response procedure** for OT-specific events.

---

## 11. Roles and Responsibilities

*Define who is accountable, responsible, consulted, and informed for the key activities governed by this Standard. Populate role names with actual position titles used within [Organization Name].*

### 11.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | OT Security Manager | IT Security Team | OT/Engineering Team | Plant/Site Manager | Vendor/Third Party | Risk & Compliance | Internal Audit |
|---|---|---|---|---|---|---|---|---|
| Maintain and review this Standard | C | R | C | C | I | — | C | I |
| Approve this Standard | A | — | — | — | — | — | C | — |
| OT asset inventory management | I | A | I | R | C | C | I | I |
| Device hardening (new deployments) | I | A | C | R | I | C | I | I |
| Firmware inventory maintenance | I | A | C | R | I | C | I | I |
| Firmware vulnerability monitoring | I | R | C | C | I | I | I | I |
| Firmware update execution | I | A | C | R | C | R (vendor devices) | I | I |
| Default credential elimination | I | A | C | R | I | R (vendor devices) | I | I |
| PAM system management for OT credentials | C | A | R | C | — | — | I | I |
| Network segmentation design | C | A | R | C | I | — | C | I |
| Firewall rule management (OT) | C | A | R | C | I | — | I | I |
| Protocol security configuration | I | A | C | R | I | C | I | I |
| OT IDS/IPS management | C | R | C | C | I | — | I | I |
| IEC 62443 gap assessment | C | R | C | C | I | — | A | I |
| IEC 62443 gap remediation | I | R | C | R | C | C | A | I |
| OT incident detection and response | C | R | R | R | I | C | I | I |
| NACSA incident reporting (s24) | A | R | C | C | I | — | C | I |
| Vendor remote access management | I | A | R | C | I | R | I | I |
| Annual compliance self-assessment | C | R | C | C | I | — | A | I |
| Internal audit of this Standard | I | C | C | C | I | — | C | A |

### 11.2 Role Descriptions

| Role | Responsibilities under this Standard |
|---|---|
| **CISO** | Ultimate accountability for OT security posture; approves exceptions and waivers; escalation point for critical OT incidents; reports to NACSA where required under Act 854 s24 |
| **OT Security Manager** | Day-to-day management of OT security programme; owns this Standard; coordinates IEC 62443 gap remediation; manages OT security monitoring |
| **IT Security Team** | Manages OT DMZ and boundary firewalls; provides SIEM/SOC coverage for OT alerts; manages PKI for OT certificates |
| **OT/Engineering Team** | Implements device hardening and firmware updates; manages field devices; consults on operational impact of security controls |
| **Plant/Site Manager** | Approves maintenance windows for OT security activities; ensures site physical security; escalates operational issues |
| **Vendor/Third Party** | Complies with [Organization Name]'s vendor security requirements; executes remote access in accordance with this Standard; responsible for hardening vendor-managed devices |
| **Risk & Compliance** | Maintains OT risk register; monitors regulatory changes; reports compliance status to Board/Management |
| **Internal Audit** | Independently assesses compliance with this Standard; reports findings to Audit Committee |

---

## 12. Compliance and Enforcement

### 12.1 Compliance Monitoring

Compliance with this Standard shall be assessed through:

| Method | Frequency | Owner | Audience |
|---|---|---|---|
| Self-assessment against this Standard | Annual | OT Security Manager | CISO, Risk & Compliance |
| Internal audit | [Annual / Biennial] | Internal Audit | Audit Committee, CISO |
| OT vulnerability scanning | [Quarterly] | OT Security Manager | OT Security, CISO |
| Default credential scanning | [Quarterly] | OT Security Manager | OT Security, CISO |
| Firmware currency review | [Quarterly] | OT Security Manager | OT Security, CISO |
| NACSA NCII audit (Act 854 s26) | [As directed by NACSA] | CISO | NACSA, Board |
| Penetration testing (OT-specific) | Annual | [Internal / Third Party] | CISO, Board |

### 12.2 Non-Compliance

Instances of non-compliance with this Standard shall be:

1. Documented and risk-assessed by the OT Security Manager.
2. Reported to the CISO if the non-compliance creates a High or Critical risk.
3. Tracked to remediation with a defined owner and target date.
4. Assessed to determine whether a formal exception (Section 13) is required.

Repeated or wilful non-compliance may result in disciplinary action in accordance with [Organization Name]'s [HR Policy / Code of Conduct].

---

## 13. Exceptions and Waivers

*This section defines the process for obtaining a formal exception where full compliance with a requirement in this Standard is not technically or operationally feasible.*

### 13.1 Exception Process

1. The requestor completes the **OT Security Exception Request Form** (Appendix C).
2. The request is reviewed by the **OT Security Manager**.
3. Exceptions affecting Critical or High residual risk require **CISO approval**.
4. Approved exceptions are recorded in the **Exception Register** (maintained by Risk & Compliance).
5. All exceptions must include **compensating controls** and an **expiry date** (maximum [12 months]).
6. Exceptions shall be reviewed at least annually and prior to expiry.

### 13.2 Exception Register

| Exception ID | Standard Clause | Device/System | Risk Level | Compensating Controls | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| EX-OT-001 | [e.g., DH-002] | [Device/System] | [High/Med/Low] | [Compensating controls] | [Approver] | [Date] | [Date] | [Active/Expired] |

---

## 14. Review and Approval

### 14.1 Review Schedule

This Standard shall be reviewed:

- **Annually**, as a minimum.
- Following a significant OT security incident.
- Upon publication of new or revised NACSA directives or IEC 62443 amendments.
- Following a material change to [Organization Name]'s OT environment.
- At the direction of the CISO or Internal Audit.

### 14.2 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name, Title] | [Reviewer] | Initial draft |
| 0.2 | [Date] | [Author Name, Title] | [Reviewer] | Incorporated OT team feedback; added protocol inventory |
| 1.0 | [Date] | [Author Name, Title] | [Reviewer] | Approved for publication |
| | | | | |
| | | | | |

### 14.3 Approval Sign-Off

*By signing below, the approvers confirm they have reviewed this Standard and are satisfied that it is fit for purpose, consistent with [Organization Name]'s regulatory obligations under Act 854, and approved for implementation.*

| Role | Name | Signature | Date |
|---|---|---|---|
| OT Security Manager | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Technology Officer (CTO) / VP Engineering | [Name] | | [Date] |
| Risk & Compliance Manager | [Name] | | [Date] |
| [Additional Approver — e.g., Plant Director] | [Name] | | [Date] |

---

## 15. References

### 15.1 Regulatory References

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duty of NCII entity to comply with cybersecurity measures prescribed by NACSA |
| **Cyber Security Act 2024 (Act 854), Section 24** | Duty to report cybersecurity incidents affecting NCII to NACSA |
| **Cyber Security Act 2024 (Act 854), Section 26** | NACSA's power to conduct cybersecurity audits of NCII entities |
| **Cyber Security Act 2024 (Act 854), Section 29** | NACSA's power to issue directions to NCII entities |
| **National Cyber Security Policy (NCSP) 2020–2024** | Malaysia's national policy framework for cybersecurity |
| **NACSA — NCII Sector Cybersecurity Framework** | Sector-specific security baseline requirements |

### 15.2 Standards and Technical References

| Reference | Description |
|---|---|
| **IEC 62443-1-1:2009** | Industrial communication networks — Concepts and models |
| **IEC 62443-2-1:2010** | Establishing an IACS security programme |
| **IEC 62443-3-3:2013** | System security requirements and security levels |
| **IEC 62443-4-2:2019** | Technical security requirements for IACS components |
| **NIST SP 800-82 Rev. 3** | Guide to Operational Technology (OT) Security |
| **NIST SP 800-53 Rev. 5** | Security and Privacy Controls for Information Systems (for reference) |
| **IEC 61511** | Functional Safety — Safety Instrumented Systems for the Process Industry Sector |
| **NERC CIP Standards** | Critical Infrastructure Protection (for energy sector reference) |
| **CIS Benchmarks** | Security configuration benchmarks for specific device types |
| **OWASP IoT Security Project** | IoT security guidance |

### 15.3 Internal Document References

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy |
| OT Risk Register | [Doc ID] | Risk management |
| IT/OT Incident Response Plan | [Doc ID] | Incident handling |
| Change Management Policy | [Doc ID] | Change control |
| Vendor Management Policy | [Doc ID] | Third-party access |
| Network Security Standard | [Doc ID] | Network architecture |
| Business Continuity Plan | [Doc ID] | OT resilience |
| OT Asset Register / CMDB | [Doc ID] | Asset inventory |

---

## 16. Appendices

### Appendix A — Device Hardening Checklist

*Complete one checklist per device type. Retain completed checklists as evidence of compliance. Archive in [Document Management System].*

---

**Device Hardening Checklist — [Device Type / Make / Model]**

| Field | Detail |
|---|---|
| Asset ID | [Asset ID] |
| Device Type | [Type] |
| Make / Model | [Make / Model] |
| Firmware Version | [Version] |
| Location / Site | [Location] |
| Commissioning Date | [Date] |
| Completed By | [Name, Title] |
| Reviewed By | [Name, Title] |
| Date | [Date] |

| # | Hardening Check | Pass | Fail | N/A | Notes |
|---|---|---|---|---|---|
| 1 | Default credentials changed | | | | |
| 2 | Unnecessary services disabled | | | | |
| 3 | Unused ports closed | | | | |
| 4 | Management protocol restricted (SSH v2 / HTTPS / SNMPv3) | | | | |
| 5 | Remote management interface secured | | | | |
| 6 | Session timeout configured | | | | |
| 7 | Account lockout configured | | | | |
| 8 | Logging enabled and forwarded to SIEM | | | | |
| 9 | Credentials registered in PAM system | | | | |
| 10 | Firmware version confirmed as current (or exception approved) | | | | |
| 11 | Physical ports (USB/debug/JTAG) disabled or secured | | | | |
| 12 | Device registered in OT asset inventory | | | | |
| 13 | Network zone placement confirmed | | | | |
| 14 | Firewall rules updated for this device | | | | |
| 15 | Hardening evidence retained | | | | |

**Outcome:** [ ] Approved for production deployment  [ ] Conditional — exceptions noted above  [ ] Failed — do not deploy

---

### Appendix B — OT Network Architecture Diagrams

*Attach or reference the current OT network architecture diagrams showing:*

- *Zone boundaries and Purdue Model layer assignments*
- *Conduit definitions and security control points*
- *Firewall and IDS/IPS placement*
- *Remote access pathways*
- *IT/OT interconnection points*

| Diagram ID | Title | Version | Date | Location |
|---|---|---|---|---|
| DIA-OT-001 | OT Network Zone Architecture — [Site Name] | [v1.0] | [Date] | [Document System Path] |
| DIA-OT-002 | IT/OT Boundary and DMZ Design | [v1.0] | [Date] | [Document System Path] |
| DIA-OT-003 | Remote Access Architecture | [v1.0] | [Date] | [Document System Path] |
| DIA-OT-004 | [Site-Specific Diagram] | [v1.0] | [Date] | [Document System Path] |

*Note: Network architecture diagrams are classified as Confidential — Restricted and are maintained separately. Access is controlled by the OT Security Manager.*

---

### Appendix C — OT Security Exception Request Form

*Submit completed form to the OT Security Manager for review and approval.*

---

**OT Security Exception Request**

| Field | Detail |
|---|---|
| Request ID | [Auto-assigned by Risk & Compliance] |
| Date Submitted | [Date] |
| Requestor Name | [Name, Title] |
| Department | [Department] |
| Device / System | [Asset ID and description] |
| Standard Clause(s) | [Clause numbers from this Standard] |

**Requirement Being Excepted:**

[Describe the specific control requirement that cannot be fully met.]

**Reason for Exception:**

[Explain why full compliance is not technically or operationally feasible. Include vendor limitations, legacy system constraints, or operational safety considerations.]

**Risk Assessment:**

| Risk | Likelihood (H/M/L) | Impact (H/M/L) | Residual Risk Rating |
|---|---|---|---|
| [Risk description] | | | |

**Proposed Compensating Controls:**

[Describe all compensating controls that will be implemented to reduce risk to an acceptable level.]

**Requested Duration:** [Start Date] to [End Date — maximum 12 months]

**Requestor Sign-off:** _________________________ Date: _________

**OT Security Manager Review:** [ ] Approve [ ] Reject

**OT Security Manager Signature:** _________________________ Date: _________

**CISO Approval (if High/Critical risk):** [ ] Approve [ ] Reject

**CISO Signature:** _________________________ Date: _________

---

### Appendix D — OT Security Incident Classification

*Reference guide for classifying OT/IoT security incidents for the purpose of Act 854 Section 24 reporting obligations.*

| Severity | Description | Act 854 s24 Reporting | Reporting Timeframe |
|---|---|---|---|
| **Critical** | Confirmed compromise or disruption of OT systems with actual or imminent impact on NCII operations or public safety | Mandatory | [Within 6 hours of detection — confirm with NACSA directive] |
| **High** | Confirmed intrusion into OT network zones; active malware in OT environment; ransomware affecting OT systems | Mandatory | [Within 24 hours — confirm with NACSA directive] |
| **Medium** | Suspicious activity in OT network; potential compromise; policy violation with material risk | Assess — likely mandatory | [Within 72 hours — confirm with NACSA directive] |
| **Low** | Minor policy violations; unsuccessful attack attempts; anomalous but non-threatening behaviour | Not mandatory | Record internally; include in periodic reporting |

*Note: Reporting thresholds and timeframes shall be confirmed against the latest NACSA directives issued under Act 854. The CISO is responsible for maintaining current knowledge of NACSA reporting requirements.*

---

### Appendix E — IEC 62443 Security Level Assessment Worksheet

*Complete this worksheet during the annual IEC 62443 gap assessment. One worksheet per zone.*

**Zone:** _________________________ **Assessment Date:** _____________

**Assessor:** _________________________ **SL-Target:** _____________

| FR | System Requirement (SR) | SL-T | Implemented? | Evidence | Gap Description |
|---|---|---|---|---|---|
| FR1 | SR 1.1 — Human user identification and authentication | | [ ] Yes [ ] Partial [ ] No | | |
| FR1 | SR 1.2 — Software process and device identification and authentication | | [ ] Yes [ ] Partial [ ] No | | |
| FR1 | SR 1.3 — Account management | | [ ] Yes [ ] Partial [ ] No | | |
| FR2 | SR 2.1 — Authorisation enforcement | | [ ] Yes [ ] Partial [ ] No | | |
| FR2 | SR 2.4 — Mobile code restrictions | | [ ] Yes [ ] Partial [ ] No | | |
| FR3 | SR 3.1 — Communication integrity | | [ ] Yes [ ] Partial [ ] No | | |
| FR3 | SR 3.2 — Malicious code protection | | [ ] Yes [ ] Partial [ ] No | | |
| FR4 | SR 4.1 — Information confidentiality | | [ ] Yes [ ] Partial [ ] No | | |
| FR5 | SR 5.1 — Network segmentation | | [ ] Yes [ ] Partial [ ] No | | |
| FR5 | SR 5.2 — Zone boundary protection | | [ ] Yes [ ] Partial [ ] No | | |
| FR6 | SR 6.1 — Audit log accessibility | | [ ] Yes [ ] Partial [ ] No | | |
| FR6 | SR 6.2 — Continuous monitoring | | [ ] Yes [ ] Partial [ ] No | | |
| FR7 | SR 7.1 — Denial of service protection | | [ ] Yes [ ] Partial [ ] No | | |
| FR7 | SR 7.6 — Network and security configuration settings | | [ ] Yes [ ] Partial [ ] No | | |

**Overall Zone Assessment:** [ ] Meets SL-T [ ] Partially meets SL-T — gaps documented [ ] Does not meet SL-T

**Assessor Signature:** _________________________ Date: _________

---

*End of Document*

---

**[Organization Name] | IoT/OT Security Standard | Version 1.0 | Classification: Confidential**
*This document is subject to annual review. For the current approved version, contact the OT Security Manager or consult [Document Management System].*