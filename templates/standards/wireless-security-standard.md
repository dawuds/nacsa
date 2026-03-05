# Wireless Security Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Security |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [WPA3/WPA2-Enterprise Requirements](#4-wpa3wpa2-enterprise-requirements)
5. [SSID Management](#5-ssid-management)
6. [Rogue Access Point Detection](#6-rogue-access-point-detection)
7. [Guest Network Isolation](#7-guest-network-isolation)
8. [Wireless Monitoring](#8-wireless-monitoring)
9. [RF Shielding Considerations](#9-rf-shielding-considerations)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Compliance and Exceptions](#11-compliance-and-exceptions)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Wireless Security Standard establishes the minimum security requirements for the deployment, configuration, operation, and management of wireless network infrastructure within [Organization Name]. It ensures that all wireless communications are protected in a manner consistent with the organization's obligations as a National Critical Information Infrastructure (NCII) sector entity under the **Cyber Security Act 2024 (Act 854)**, administered by the **National Cyber Security Agency (NACSA)**.

This Standard mandates controls that protect the confidentiality, integrity, and availability of data transmitted over wireless networks, and defines the baseline configuration and operational requirements to which all wireless deployments must conform.

### 1.2 Scope

This Standard applies to:

- All wireless network infrastructure owned, operated, leased, or managed by [Organization Name], including but not limited to IEEE 802.11 (Wi-Fi) access points, wireless controllers, and associated network equipment.
- All physical premises and facilities operated by [Organization Name], including corporate offices, data centres, branch locations, and co-location facilities designated as NCII environments.
- All personnel — employees, contractors, third-party vendors, and service providers — who deploy, configure, administer, or use wireless networks on [Organization Name] premises.
- Wireless networks used to transmit or provide access to systems classified as critical or sensitive under [Organization Name]'s Information Classification Policy.

This Standard does **not** apply to:

- Mobile telecommunications networks (e.g., cellular/LTE/5G) operated by licensed telecommunications providers on behalf of [Organization Name], unless such networks are integrated with internal wireless infrastructure.
- Personal mobile devices subject solely to the Mobile Device Management (MDM) Policy, unless those devices are used to connect to [Organization Name] wireless networks.

### 1.3 Objectives

The objectives of this Standard are to:

- Define mandatory encryption and authentication protocols for all wireless networks.
- Establish governance controls for SSID lifecycle management.
- Mandate detection and response capabilities for rogue or unauthorized access points.
- Enforce network segmentation and isolation for guest and third-party wireless access.
- Specify continuous wireless monitoring requirements.
- Address physical RF containment and shielding in sensitive environments.

---

## 2. Definitions and Abbreviations

*This section defines key terms used throughout this document to ensure consistent interpretation by all stakeholders.*

| Term / Abbreviation | Definition |
|---|---|
| **Access Point (AP)** | A networking device that allows wireless devices to connect to a wired network using Wi-Fi or related standards. |
| **NCII** | National Critical Information Infrastructure — infrastructure whose disruption would have a debilitating impact on national security, economy, public health, or safety. |
| **NACSA** | National Cyber Security Agency — the lead agency for cybersecurity in Malaysia, responsible for overseeing NCII protection under Act 854. |
| **SSID** | Service Set Identifier — the name that identifies a wireless network. |
| **WPA2-Enterprise** | Wi-Fi Protected Access 2 using 802.1X authentication with a RADIUS server; provides per-user/device authentication. |
| **WPA3-Enterprise** | The successor to WPA2-Enterprise, providing enhanced cryptographic protections including 192-bit security mode. |
| **Rogue AP** | An unauthorized access point connected to a network without the knowledge or approval of the network administrator. |
| **Evil Twin AP** | A malicious AP that mimics a legitimate SSID to intercept wireless communications. |
| **RF** | Radio Frequency — electromagnetic waves used for wireless communications. |
| **WIDS/WIPS** | Wireless Intrusion Detection System / Wireless Intrusion Prevention System. |
| **RADIUS** | Remote Authentication Dial-In User Service — a networking protocol providing centralized authentication, authorization, and accounting. |
| **EAP** | Extensible Authentication Protocol — an authentication framework used in wireless networks and other point-to-point connections. |
| **PMF** | Protected Management Frames (IEEE 802.11w) — a security standard that protects management frames from forgery and eavesdropping. |
| **VLAN** | Virtual Local Area Network — a logical subdivision of a network providing traffic isolation. |
| **[Add additional terms as required]** | [Definition] |

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Framework

This Standard is issued in accordance with and supports compliance with the following legislation and regulatory instruments:

| Instrument | Relevant Provision | Applicability |
|---|---|---|
| **Cyber Security Act 2024 (Act 854)** | Section 18 — Obligations of NCII Sector Leads and NCII entities to implement and maintain cybersecurity measures | Primary mandate for this Standard |
| **[NACSA NCII Cybersecurity Framework / Directive]** | [Relevant control domain — e.g., Network Security, Access Control] | Technical control baseline |
| **Personal Data Protection Act 2010 (Act 709)** | Principle 7 — Security of personal data during processing and transmission | Applicable to wireless networks transmitting personal data |
| **[BNM Risk Management in Technology (RMiT) Policy Document]** | [Relevant paragraph — if applicable to the organization] | For financial sector entities regulated by BNM |
| **[Organization Name] Information Security Policy** | [Policy Reference ID] | Parent policy governing this Standard |
| **[Organization Name] Network Security Policy** | [Policy Reference ID] | Supporting policy |

### 3.2 Consequence of Non-Compliance

Failure to comply with this Standard may result in:

- Regulatory sanctions, fines, or enforcement action by NACSA under **Act 854, Section 18**.
- Increased organizational exposure to wireless-borne cyber threats including unauthorized access, data interception, and lateral movement within NCII environments.
- Disciplinary action in accordance with [Organization Name]'s Human Resource and Code of Conduct policies.
- Notification obligations to NACSA and relevant authorities in the event of a cybersecurity incident attributed to non-compliant wireless configurations.

---

## 4. WPA3/WPA2-Enterprise Requirements

*This section defines the mandatory encryption and authentication protocols for all wireless networks. Authors should specify protocol version requirements, acceptable EAP methods, certificate management requirements, and transition timelines from legacy protocols.*

### 4.1 Encryption Protocol Requirements

All wireless networks within scope of this Standard shall implement the following minimum encryption requirements:

| Network Type | Minimum Protocol | Preferred Protocol | Authentication Method |
|---|---|---|---|
| Corporate / Internal | WPA2-Enterprise | WPA3-Enterprise | 802.1X with RADIUS |
| Privileged / Restricted | WPA3-Enterprise (192-bit mode) | WPA3-Enterprise (192-bit mode) | 802.1X with RADIUS + Certificate |
| Guest / Visitor | WPA2-Personal (WPA3 preferred) | WPA3-SAE | Pre-shared Key or Captive Portal |
| IoT / OT Segment | WPA2-Enterprise | WPA3-Enterprise | 802.1X with Device Certificates |
| [Additional Network Type] | [Minimum Protocol] | [Preferred Protocol] | [Authentication Method] |

**Mandatory requirements:**

- WEP, WPA (original), and TKIP encryption are **strictly prohibited** on all [Organization Name] wireless networks.
- WPA2-CCMP (AES-128) is the minimum acceptable cipher suite for corporate networks.
- WPA3-GCMP-256 shall be enforced on all networks classified as Restricted or handling NCII-sensitive data.
- **Protected Management Frames (PMF / IEEE 802.11w)** shall be set to **mandatory** on all corporate, privileged, and IoT wireless networks, and **enabled** (optional) on guest networks as a minimum.
- Downgrade attacks shall be mitigated by disabling support for legacy authentication modes on access points serving corporate and restricted networks.

### 4.2 802.1X Authentication Configuration

*Specify the RADIUS infrastructure requirements, acceptable EAP methods, certificate authority requirements, and per-device/per-user authentication enforcement here.*

- All corporate wireless networks shall authenticate users and devices using **802.1X / EAP** against a centrally managed RADIUS server infrastructure.
- The following EAP methods are approved for use:

| EAP Method | Use Case | Notes |
|---|---|---|
| EAP-TLS | Preferred — Certificate-based device/user authentication | Requires PKI infrastructure |
| PEAP-MSCHAPv2 | Permitted — Username/password over TLS tunnel | Requires server certificate validation enforced on clients |
| EAP-TTLS | Permitted — Alternative tunnelled authentication | Requires server certificate validation enforced on clients |
| [Other EAP method] | [Use Case] | [Notes] |

- RADIUS server(s) shall be deployed in a highly available configuration (primary and secondary at minimum).
- RADIUS shared secrets shall comply with [Organization Name]'s Password and Secrets Management Standard and shall be a minimum of [e.g., 24] characters in length, randomly generated.
- Certificate-based authentication (EAP-TLS) shall be **mandatory** for all devices connecting to networks classified as Restricted or handling NCII-sensitive data.
- Server-side certificates used for RADIUS authentication shall be issued by [Organization Name]'s internal Certificate Authority (CA) or an approved third-party CA, with a maximum validity period of [e.g., 2 years].
- Client supplicants shall be configured to validate the RADIUS server certificate against the trusted CA and shall not prompt users to accept invalid or untrusted certificates.

### 4.3 WPA3 Transition Planning

*Document the organization's roadmap for migrating from WPA2 to WPA3, including target dates, asset inventory, and exception management.*

| Milestone | Target Date | Responsible Party | Status |
|---|---|---|---|
| Inventory of all APs and their WPA3 capability | [Target Date] | [Network Security Team] | [Status] |
| Deployment of WPA3-capable APs in Restricted zones | [Target Date] | [Network Security Team] | [Status] |
| Full WPA3-Enterprise rollout across all corporate networks | [Target Date] | [Network Security Team] | [Status] |
| Decommission of all WPA2-only access points | [Target Date] | [Network Security Team] | [Status] |

---

## 5. SSID Management

*This section governs the lifecycle management of SSIDs — from provisioning and naming conventions through to decommissioning. Authors should address naming standards, prohibited configurations, broadcast controls, and the approval process for new SSIDs.*

### 5.1 SSID Naming Convention

- SSIDs shall **not** reveal organizational information, building names, department names, or any detail that could assist an attacker in reconnaissance.
- SSIDs shall follow the naming convention defined in the table below:

| Network Type | SSID Naming Convention | Example |
|---|---|---|
| Corporate | [Prefix]-CORP-[SiteCode] | [ORG]-CORP-KUL |
| Guest | [Prefix]-GUEST-[SiteCode] | [ORG]-GUEST-KUL |
| IoT / OT | [Prefix]-IOT-[SegmentCode] | [ORG]-IOT-DC01 |
| Management | [Prefix]-MGMT-[SiteCode] (hidden) | [ORG]-MGMT-KUL |
| [Other] | [Convention] | [Example] |

- SSIDs shall not include the organization's full legal name, brand, building addresses, floor numbers, or network segment information.

### 5.2 SSID Lifecycle Management

**Provisioning:**

- All new SSIDs require formal approval from [Network Security Owner / CISO] prior to deployment.
- A new SSID request shall document: business justification, target user population, associated VLAN, security profile (protocol, authentication), and scheduled review date.
- New SSIDs shall be registered in the [Organization Name] Wireless Network Register (refer to Appendix A).

**Periodic Review:**

- All active SSIDs shall be reviewed on an **[Annual / Semi-Annual]** basis.
- SSIDs with no active connections in the preceding **[90 days]** shall be flagged for decommissioning unless a valid business justification is documented.

**Decommissioning:**

- Decommissioned SSIDs shall be removed from all access points and wireless controllers within **[5 business days]** of approval to decommission.
- Decommissioned SSIDs shall be retained in the Wireless Network Register with decommission date and approver noted.

### 5.3 Prohibited SSID Configurations

The following configurations are **prohibited** on all [Organization Name] wireless infrastructure:

- Broadcasting SSIDs that expose the organizational name, technology stack, or physical location.
- Use of default manufacturer SSIDs (e.g., "linksys", "NETGEAR", "TP-Link").
- SSIDs configured with open (unauthenticated, unencrypted) access, except where a captive portal providing mandatory terms-of-use acceptance and session-based isolation is implemented for guest access.
- SSIDs sharing the same Pre-Shared Key across multiple site locations without a documented risk acceptance.
- [Additional prohibited configuration — e.g., SSID cloning, unregistered SSIDs].

### 5.4 SSID Broadcast Controls

- The management SSID, where technically required, shall have SSID broadcast **disabled (hidden)** and shall be restricted to authorized administrative devices only.
- Hidden SSIDs shall not be relied upon as a primary security control; this is a supplementary measure only.
- The number of active SSIDs broadcast per access point shall be limited to **[maximum number, e.g., 4]** to minimize co-channel interference and reduce attack surface.

---

## 6. Rogue Access Point Detection

*This section defines requirements for the detection, investigation, and remediation of unauthorized or rogue access points. Authors should specify WIDS/WIPS deployment requirements, detection thresholds, escalation procedures, and containment authorities.*

### 6.1 WIDS/WIPS Deployment Requirements

- [Organization Name] shall deploy a **Wireless Intrusion Detection System (WIDS)** or **Wireless Intrusion Prevention System (WIPS)** across all facilities classified as NCII environments.
- WIDS/WIPS shall be capable of continuous, real-time monitoring of the RF environment to detect unauthorized wireless devices and anomalous behaviour.
- Minimum WIDS/WIPS coverage requirements:

| Facility Type | Minimum Coverage | Preferred Mode | Notes |
|---|---|---|---|
| Data Centre / Server Rooms | 100% RF coverage | WIPS (active prevention) | Zero tolerance for rogue APs |
| Corporate Office Floors | 100% RF coverage | WIDS (detection + alert) | Investigate within defined SLA |
| Branch Locations | 100% RF coverage | WIDS (detection + alert) | Remote alert to central SOC |
| [Other Facility Type] | [Coverage %] | [Mode] | [Notes] |

- WIDS/WIPS alerts shall be integrated with [Organization Name]'s Security Operations Centre (SOC) and/or Security Information and Event Management (SIEM) platform.

### 6.2 Rogue AP Classification

| Classification | Description | Required Response Time |
|---|---|---|
| **Critical — Evil Twin / Active Attack** | AP mimicking an authorized SSID with active client associations | Immediate — within [15 minutes] |
| **High — Unauthorized AP on Corporate Network** | AP physically connected to [Organization Name] network infrastructure | [2 hours] |
| **Medium — Unauthorized AP (Off-Network)** | AP detected in RF range but not connected to [Organization Name] network | [8 business hours] |
| **Low — Neighbour / Adjacent AP** | AP from adjacent tenant or building with no threat indication | [Log and review — no active response required] |

### 6.3 Detection and Response Procedure

*Authors should reference or embed the detailed Rogue AP Incident Response Procedure here, or link to the standalone procedure document.*

1. **Detection:** WIDS/WIPS generates alert upon detection of unauthorized AP or anomalous wireless activity.
2. **Triage:** SOC analyst classifies the alert per the classification table in Section 6.2.
3. **Notification:** [Network Security Lead] and [CISO / delegate] are notified in accordance with the response time requirements above.
4. **Investigation:** Physical inspection of the detected location is conducted to identify and verify the rogue device.
5. **Containment:** Rogue AP is physically removed or isolated from the network. WIPS automated containment may be activated for Critical-class events, subject to approval by [authorized role].
6. **Evidence Preservation:** Device details (MAC address, physical location, connection details) are documented for forensic purposes and potential disciplinary or legal action.
7. **Post-Incident Review:** Root cause is identified and remediated (e.g., unsecured network ports, inadequate physical access controls).
8. **Reporting:** All confirmed rogue AP incidents are reported to [CISO] and logged in the [Incident Management System]. Incidents meeting the threshold under Act 854 are reported to NACSA within the prescribed timeframe.

### 6.4 Containment Authority

| Action | Authorized By |
|---|---|
| Automated WIPS containment (deauthentication) | [Network Security Lead] — pre-authorized for Critical class |
| Manual physical removal of rogue device | [Facilities Security / Network Security Team] |
| Escalation to NACSA / law enforcement | [CISO] |

---

## 7. Guest Network Isolation

*This section defines the architecture and operational requirements for guest and visitor wireless networks to ensure they are fully isolated from corporate and NCII systems. Authors should specify VLAN/segment requirements, traffic filtering rules, bandwidth controls, and acceptable use enforcement.*

### 7.1 Guest Network Architecture Requirements

- All guest wireless networks shall be hosted on a **dedicated, isolated VLAN** that is logically and physically separated from corporate, NCII, and internal management networks.
- Guest network traffic shall be routed **directly to the internet** and shall have **no route** to any internal corporate subnet, server VLAN, management VLAN, or NCII system network segment.
- Guest network isolation shall be enforced at the network infrastructure layer (firewall/router rules) and shall not rely solely on wireless controller-level isolation.
- The following firewall rules are mandatory for the guest VLAN:

| Source | Destination | Action | Notes |
|---|---|---|---|
| Guest VLAN | Internet | Permit (filtered) | Web filtering / DNS filtering recommended |
| Guest VLAN | All internal VLANs | **Deny** | Enforced at perimeter firewall |
| Guest VLAN | [Organization Name] DNS/DHCP (internal) | **Deny** | Guest DHCP served by isolated server |
| Guest VLAN | NCII Systems / Data Centre VLAN | **Deny** | Explicit deny |
| Internal VLANs | Guest VLAN | **Deny** | Prevent lateral movement |

### 7.2 Guest Network Access Controls

- Guest network access shall be provided through a **captive portal** that enforces:
  - Terms of acceptable use acceptance prior to granting internet access.
  - Session time limits — maximum session duration: **[e.g., 8 hours]** with re-authentication required.
  - Bandwidth throttling — maximum per-device bandwidth: **[e.g., 10 Mbps down / 5 Mbps up]**.
  - Logging of connection details (date/time, MAC address, assigned IP, duration) for a minimum retention period of **[e.g., 90 days]** in compliance with PDPA and relevant data retention requirements.
- Guest network credentials (PSK or captive portal access codes) shall be:
  - Rotated on a **[daily / weekly]** basis.
  - Not shared via electronic means on the same guest SSID (use out-of-band distribution).
  - Revocable immediately upon request by [authorized role].
- [Organization Name] personnel shall **not** use guest wireless networks to access internal corporate systems or data.

### 7.3 Guest Network Monitoring

- Guest network usage shall be monitored for anomalous activity including port scanning, high-volume data transfer, and attempts to access internal network segments.
- Alerts shall be generated and routed to the SOC for any guest network traffic attempting to reach internal VLANs.
- A summary of guest network utilization and security events shall be included in [Network Security's] monthly operational report.

### 7.4 Third-Party and Contractor Wireless Access

*Specify whether contractors and third parties use the guest network or have dedicated access, and document additional controls applied.*

| Access Type | Network | Additional Controls | Approval Required |
|---|---|---|---|
| Visitor (one-time) | Guest VLAN | Captive portal, time-limited | Receptionist / Facilities |
| Short-term Contractor | Guest VLAN or Dedicated Contractor VLAN | As above + documented registration | [IT / Network Security] |
| Long-term Contractor / Managed Service Provider | Dedicated Contractor VLAN (isolated) | 802.1X authentication, documented justification | [CISO / Network Security Lead] |

---

## 8. Wireless Monitoring

*This section defines the requirements for ongoing operational monitoring of wireless infrastructure, including log collection, alerting thresholds, performance monitoring, and integration with the SOC and SIEM. Authors should align monitoring requirements with the organization's SOC operational model.*

### 8.1 Logging Requirements

- All wireless infrastructure components (access points, wireless controllers, RADIUS servers) shall generate and forward security and operational logs to [Organization Name]'s centralized SIEM / log management platform.
- Minimum log retention period: **[e.g., 12 months]** online / **[e.g., 36 months]** archived, in accordance with [Organization Name]'s Log Management Policy.
- The following events shall be logged at a minimum:

| Log Category | Events to Log | Severity |
|---|---|---|
| Authentication | Successful and failed 802.1X authentications, RADIUS accept/reject, client association and disassociation | High (failures), Medium (success) |
| Rogue AP | Rogue AP detected, Evil Twin detected, WIDS/WIPS alert triggered | Critical / High |
| Configuration Changes | AP configuration changes, SSID additions/modifications/deletions, controller configuration changes | High |
| Client Activity | Client IP assignments (DHCP), MAC address associations, session durations | Medium |
| PMF / Management Frame | Deauthentication floods, management frame anomalies | High |
| System Health | AP offline / online events, controller failover events | Medium |
| [Additional category] | [Events] | [Severity] |

### 8.2 Alerting and Threshold Requirements

*Define specific alerting thresholds and response expectations. Authors should calibrate thresholds based on baseline analysis of normal operational volumes.*

| Alert Condition | Threshold | Response Action | Escalation Target |
|---|---|---|---|
| Multiple authentication failures (potential credential attack) | >[X] failures from same client in [Y] minutes | Investigate; block MAC if confirmed attack | SOC → Network Security |
| Rogue AP detected | Any detection | Immediate classification and response per Section 6.3 | SOC → Network Security Lead |
| SSID misconfiguration detected (e.g., open network) | Any detection | Immediate remediation | SOC → Network Security |
| Wireless controller unreachable | Controller offline >[X] minutes | Trigger DR procedure | SOC → Network Security Lead → [CISO] |
| Abnormal data volume on guest network | >[X] GB in [Y] hours per device | Investigate; suspend session | SOC → Network Security |

### 8.3 Wireless Site Surveys and RF Assessments

- A wireless site survey shall be conducted:
  - **Prior to** any new wireless deployment or significant infrastructure expansion.
  - **At least annually** across all NCII-designated facilities.
  - **Following** any significant facility modification (construction, reconfiguration of office space).
- Site surveys shall assess: coverage, channel utilization, co-channel interference, AP placement, and signal bleed beyond facility boundaries.
- Results of site surveys shall be documented, reviewed by [Network Security Lead], and retained for a minimum of **[3 years]**.
- Signal bleed identified beyond [Organization Name]'s physical perimeter shall be addressed through AP power adjustment, antenna orientation, or RF shielding (refer to Section 9).

### 8.4 Wireless Vulnerability Assessments

- A wireless-specific vulnerability assessment or penetration test shall be performed **at least annually** and following significant changes to wireless infrastructure.
- The assessment shall include testing for:
  - Rogue AP susceptibility.
  - Weak or misconfigured encryption.
  - Deauthentication attack vulnerabilities (PMF enforcement).
  - Guest network isolation bypass.
  - Captive portal bypass.
  - [Additional test item].
- Findings shall be tracked in the [Vulnerability Management System] and remediated within the timeframes defined in [Organization Name]'s Vulnerability Management Standard.

---

## 9. RF Shielding Considerations

*This section addresses physical and architectural controls to manage RF signal containment in sensitive areas. Authors should document areas requiring RF shielding, technical specifications, and the process for assessment and implementation. Consultation with a qualified RF engineer is recommended for implementations.*

### 9.1 RF Shielding Requirement Assessment

Facilities or rooms meeting any of the following criteria shall be assessed for RF shielding requirements:

- Areas where wireless signals could be intercepted from outside [Organization Name]'s physical security perimeter (e.g., external walls adjacent to public areas, car parks, or adjacent tenants).
- Server rooms, data centres, or network operations centres where NCII systems are housed.
- Executive meeting rooms or boardrooms where sensitive discussions involving NCII operations occur.
- Areas subject to regulatory or contractual requirements for electromagnetic containment (e.g., secure government-designated rooms, Faraday cage requirements).
- [Other criteria as determined by risk assessment].

### 9.2 RF Shielding Implementation Standards

*Authors should populate this section based on a site-specific RF shielding assessment conducted by a qualified RF engineer. Specify the applicable shielding standards (e.g., IEEE, TEMPEST where applicable), attenuation targets, and approved materials or solutions.*

| Area / Zone | Shielding Requirement | Target Attenuation | Implementation Method | Assessment Date |
|---|---|---|---|---|
| Primary Data Centre | [Required / Not Required / Under Review] | [e.g., ≥ 40 dB] | [e.g., RF shielding paint, shielded enclosure] | [Date] |
| Executive Boardroom | [Required / Not Required / Under Review] | [e.g., ≥ 20 dB] | [e.g., Window film, wall treatment] | [Date] |
| Network Operations Centre | [Required / Not Required / Under Review] | [Attenuation target] | [Method] | [Date] |
| [Other Area] | [Requirement] | [Target] | [Method] | [Date] |

### 9.3 Signal Containment Controls

Where full RF shielding is not implemented, the following compensating controls shall be applied to minimize signal bleed beyond [Organization Name]'s physical perimeter:

- AP transmit power shall be configured to the **minimum level** necessary to provide adequate coverage within the intended area, minimising unintentional signal propagation beyond facility boundaries.
- Directional antennas shall be used where technically appropriate to focus RF energy within intended coverage areas.
- AP placement shall avoid proximity to external walls, windows, and other areas where signal bleed is greatest.
- Annual RF perimeter testing shall be conducted to detect and measure signal leakage beyond [Organization Name]'s physical boundaries.
- Results of RF perimeter testing shall be reviewed by [Network Security Lead] and documented in the Wireless Network Register.

### 9.4 Wireless-Free Zones

*Document any areas where all wireless transmissions are prohibited (e.g., classified areas, HSM rooms, SCIF-equivalent environments).*

| Area / Room | Wireless Prohibition | Enforcement Method | Approving Authority |
|---|---|---|---|
| [Area Name, e.g., HSM Room] | All wireless devices prohibited | RF detection monitoring + physical access controls + policy | [CISO] |
| [Area Name] | [Scope of prohibition] | [Enforcement] | [Approving Authority] |

---

## 10. Roles and Responsibilities

*This section defines accountabilities for the implementation and maintenance of this Standard. The RACI model is used: **R** = Responsible, **A** = Accountable, **C** = Consulted, **I** = Informed.*

### 10.1 RACI Matrix

| Activity | CISO / Information Security | Network Security Lead | Network Security Team | SOC | IT Operations | Facility Management | Internal Audit | All Staff |
|---|---|---|---|---|---|---|---|---|
| Approve and own this Standard | A | R | C | I | I | I | C | — |
| Approve new SSID deployments | A | R | C | I | I | — | — | — |
| Configure and maintain wireless infrastructure | I | A | R | I | C | — | — | — |
| Operate WIDS/WIPS | I | A | R | R | I | — | — | — |
| Respond to rogue AP incidents | A | R | R | R | C | C | I | — |
| Maintain Wireless Network Register | I | A | R | I | I | — | — | — |
| Conduct annual wireless vulnerability assessment | A | C | R | C | I | — | I | — |
| Conduct RF site surveys | I | A | R | — | C | C | — | — |
| Review and monitor wireless logs | I | A | C | R | I | — | — | — |
| Manage guest network access provisioning | I | A | C | I | R | I | — | — |
| Comply with this Standard | I | A | R | R | R | R | — | R |
| Review and update this Standard (annual) | A | R | C | C | C | — | C | — |
| Report non-compliance | C | A | R | R | I | — | R | R |

### 10.2 Key Contacts

| Role | Name | Contact |
|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Email / Contact] |
| Network Security Lead (Standard Owner) | [Name] | [Email / Contact] |
| SOC Manager | [Name] | [Email / Contact] |
| IT Operations Lead | [Name] | [Email / Contact] |

---

## 11. Compliance and Exceptions

### 11.1 Compliance Monitoring

- Compliance with this Standard shall be assessed through:
  - **Automated configuration compliance scans** of wireless infrastructure against the requirements of this Standard — frequency: **[Monthly / Quarterly]**.
  - **Annual wireless security assessment** as defined in Section 8.4.
  - **Internal audit review** — frequency per [Internal Audit Plan].
- Non-compliant configurations identified through automated scanning shall be reported to [Network Security Lead] and remediated within the timeframes defined in [Organization Name]'s Vulnerability Management Standard.
- Compliance metrics shall be included in [Network Security's] quarterly security reporting to [CISO / Executive Committee / Board Risk Committee].

### 11.2 Exception Management

- Any deviation from the requirements of this Standard requires a formal **Security Exception Request**, approved by **[CISO / delegate]** prior to implementation.
- Exceptions shall be:
  - Documented in the [Security Exception Register] with: business justification, risk assessment, compensating controls, exception duration, and approver.
  - Reviewed and re-approved on a **[maximum 6-month]** basis.
  - Revoked immediately if the risk profile changes or the business justification ceases to apply.
- Exceptions shall not be granted for requirements mandated directly by Act 854 or NACSA directives without escalation to and written approval from [CISO].

---

## 12. Review and Approval

### 12.1 Review Cycle

This Standard shall be reviewed:

- **Annually**, as a minimum, or more frequently if triggered by:
  - Significant changes to wireless infrastructure or architecture.
  - Publication of new or updated NACSA directives or guidance related to wireless security.
  - A material cybersecurity incident involving wireless networks.
  - Changes to applicable legislation or regulatory requirements.

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version — document created. |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By — Network Security Lead | [Name] | [Signature] | [Date] |
| Reviewed By — CISO | [Name] | [Signature] | [Date] |
| Reviewed By — Internal Audit | [Name] | [Signature] | [Date] |
| Approved By — [CTO / COO / Board Risk Committee] | [Name] | [Signature] | [Date] |

---

## 13. References

The following regulatory instruments, standards, and internal documents are referenced in or underpin this Standard:

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Primary legislative mandate — obligations of NCII entities to implement cybersecurity measures commensurate with risk. |
| **NACSA NCII Cybersecurity Framework (or applicable Directive)** | Technical control baseline issued by NACSA for NCII sector entities. |
| **IEEE 802.11i** | Standard for wireless LAN security mechanisms (basis for WPA2/WPA3). |
| **IEEE 802.11w** | Standard for Protected Management Frames. |
| **IEEE 802.1X** | Port-based Network Access Control standard. |
| **Wi-Fi Alliance WPA3 Specification** | Wi-Fi Alliance certification specifications for WPA3 protocols. |
| **NIST SP 800-97** | Establishing Wireless Robust Security Networks — a guide to IEEE 802.11i. |
| **NIST SP 800-153** | Guidelines for Securing Wireless Local Area Networks (WLANs). |
| **Personal Data Protection Act 2010 (Act 709)** | Malaysian data protection legislation applicable to personal data transmitted over wireless networks. |
| **[BNM RMiT Policy Document]** | [Relevant paragraph(s) — for BNM-regulated entities] |
| **[Organization Name] Information Security Policy** | [Internal Policy Reference ID] — parent policy |
| **[Organization Name] Network Security Policy** | [Internal Policy Reference ID] |
| **[Organization Name] Incident Response Plan** | [Internal Document Reference ID] |
| **[Organization Name] Vulnerability Management Standard** | [Internal Document Reference ID] |
| **[Organization Name] Log Management Policy** | [Internal Document Reference ID] |
| **[Organization Name] Physical Security Policy** | [Internal Document Reference ID] — relevant to RF shielding and wireless-free zones |

---

## 14. Appendices

### Appendix A — Wireless Network Register Template

*Maintain a current register of all active and decommissioned SSIDs across all [Organization Name] facilities. This register shall be reviewed and updated by the Network Security Team at minimum quarterly and following any SSID lifecycle change.*

| SSID Name | Associated VLAN | Network Type | Encryption Protocol | Authentication Method | Site / Location | Date Activated | Date Decommissioned | Business Owner | Last Review Date | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| [SSID Name] | [VLAN ID] | [Corporate / Guest / IoT / etc.] | [WPA3-Enterprise / WPA2-Enterprise / etc.] | [802.1X / PSK / Captive Portal] | [Site Name] | [Date] | [N/A or Date] | [Department / Owner] | [Date] | [Any relevant notes] |

---

### Appendix B — Approved Wireless Equipment List

*This appendix lists wireless infrastructure equipment (access points, wireless controllers, WIDS/WIPS solutions) that have been evaluated and approved for use within [Organization Name] environments. Only equipment from this list shall be procured and deployed. Unapproved equipment shall not be connected to [Organization Name] networks.*

| Equipment Type | Vendor | Model | Firmware Version | WPA3 Support | PMF Support | Approval Date | Approved By | Notes |
|---|---|---|---|---|---|---|---|---|
| Access Point | [Vendor] | [Model] | [Version] | [Yes / No] | [Mandatory / Optional / No] | [Date] | [Network Security Lead] | [Notes] |
| Wireless Controller | [Vendor] | [Model] | [Version] | [Yes / No] | [Yes / No] | [Date] | [Network Security Lead] | [Notes] |
| WIDS/WIPS Solution | [Vendor] | [Model / Version] | [Version] | N/A | N/A | [Date] | [CISO] | [Notes] |

---

### Appendix C — Rogue AP Response Quick Reference Card

*This appendix provides a summarised quick-reference for SOC analysts and first responders when handling rogue AP alerts. Refer to Section 6 for full procedural detail.*

**Step 1 — Receive and acknowledge WIDS/WIPS alert**
- Log alert in [Incident Management System] with timestamp.
- Record: detected SSID (if applicable), MAC address, detected AP location, signal strength.

**Step 2 — Classify the rogue AP**

| Criteria | Classification | Response SLA |
|---|---|---|
| Mimics authorized SSID, active client connections | Critical — Evil Twin | [15 minutes] |
| MAC traced to [Organization Name] wired network | High — On-Network Rogue | [2 hours] |
| Off-network, no active threat indicators | Medium — Off-Network | [8 business hours] |
| Adjacent tenant / building AP, no threat | Low — Neighbour AP | Log and monitor |

**Step 3 — Notify:** [Network Security Lead] → [CISO] per escalation matrix.

**Step 4 — Dispatch** physical security or network team for on-site investigation.

**Step 5 — Contain:** Physically remove / isolate device. Activate WIPS containment for Critical class (pre-authorized).

**Step 6 — Document** full incident details and initiate post-incident review.

---

### Appendix D — Wireless Security Checklist (Annual Review)

*This checklist shall be completed by the Network Security Team during the annual Standard review and wireless security assessment cycle.*

| # | Check Item | Compliant | Non-Compliant | N/A | Evidence / Notes |
|---|---|---|---|---|---|
| 1 | All corporate SSIDs using WPA3-Enterprise or WPA2-Enterprise | ☐ | ☐ | ☐ | |
| 2 | WEP, WPA (original), and TKIP disabled on all APs | ☐ | ☐ | ☐ | |
| 3 | PMF set to Mandatory on all corporate / restricted SSIDs | ☐ | ☐ | ☐ | |
| 4 | RADIUS server(s) operational and highly available | ☐ | ☐ | ☐ | |
| 5 | All SSIDs registered in the Wireless Network Register | ☐ | ☐ | ☐ | |
| 6 | SSIDs with no active connections reviewed / decommissioned | ☐ | ☐ | ☐ | |
| 7 | Default manufacturer SSIDs absent from all APs | ☐ | ☐ | ☐ | |
| 8 | WIDS/WIPS operational across all NCII facilities | ☐ | ☐ | ☐ | |
| 9 | WIDS/WIPS alerts integrated with SIEM / SOC | ☐ | ☐ | ☐ | |
| 10 | Guest VLAN isolated — no routes to internal networks | ☐ | ☐ | ☐ | |
| 11 | Guest captive portal operational with terms-of-use enforcement | ☐ | ☐ | ☐ | |
| 12 | Wireless logs retained per policy minimum | ☐ | ☐ | ☐ | |
| 13 | RF perimeter signal bleed assessment conducted | ☐ | ☐ | ☐ | |
| 14 | RF shielding implemented in required zones | ☐ | ☐ | ☐ | |
| 15 | Annual wireless vulnerability assessment completed | ☐ | ☐ | ☐ | |
| 16 | All open exceptions reviewed and re-approved | ☐ | ☐ | ☐ | |
| 17 | Approved Equipment List current and enforced | ☐ | ☐ | ☐ | |
| 18 | RADIUS certificates valid and within renewal window | ☐ | ☐ | ☐ | |

**Checklist Completed By:** [Name] — [Role] — [Date]

**Reviewed By:** [Network Security Lead] — [Date]

---

*End of Document — [Organization Name] Wireless Security Standard v1.0*

*This document is classified **Confidential** and is intended solely for authorized personnel within [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited.*

---