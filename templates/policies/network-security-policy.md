# Network Security Policy

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
| **Approved By** | [Approved By — Name and Title] |
| **Organisation** | [Organisation Name] |

---

> **Regulatory Basis:** Cyber Security Act 2024 (Act 854), Sections 18 and 24 — National Cyber Security Agency (NACSA)
>
> **Document Status:** [Draft / Under Review / Approved]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Policy Statement](#3-policy-statement)
4. [Regulatory and Compliance Context](#4-regulatory-and-compliance-context)
5. [Network Segmentation Requirements](#5-network-segmentation-requirements)
6. [Firewall Management](#6-firewall-management)
7. [Intrusion Detection and Prevention](#7-intrusion-detection-and-prevention)
8. [Remote Access Controls](#8-remote-access-controls)
9. [Wireless Security](#9-wireless-security)
10. [Network Monitoring and Logging](#10-network-monitoring-and-logging)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Compliance and Enforcement](#12-compliance-and-enforcement)
13. [Exceptions and Waivers](#13-exceptions-and-waivers)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Network Security Policy ("Policy") establishes the security architecture principles, technical controls, and operational requirements governing all networks that support National Critical Information Infrastructure (NCII) systems operated or managed by [Organisation Name]. This Policy is issued pursuant to the obligations imposed by the **Cyber Security Act 2024 (Act 854)**, specifically **Section 18** (duties of NCII sector leads and entities) and **Section 24** (compliance with directions relating to cyber security measures), and is aligned with the directives and standards issued by the **National Cyber Security Agency (NACSA)**.

The intent of this Policy is to ensure that [Organisation Name]'s network infrastructure is designed, configured, operated, and monitored in a manner that:

- Protects the confidentiality, integrity, and availability of NCII systems and the information processed therein;
- Minimises the attack surface available to internal and external threat actors;
- Enables timely detection of, and response to, network-based threats and anomalies;
- Meets or exceeds the minimum cyber security measures prescribed by NACSA and applicable sector regulators.

### 1.2 Scope

This Policy applies to:

- **All network infrastructure** owned, leased, or managed by [Organisation Name], including but not limited to local area networks (LAN), wide area networks (WAN), demilitarised zones (DMZ), and cloud-connected networks;
- **All systems classified as NCII** under the Cyber Security Act 2024, as designated by [Organisation Name] and confirmed by the relevant NCII sector lead;
- **All personnel** including permanent employees, contract staff, third-party service providers, vendors, and consultants who access, administer, or otherwise interact with [Organisation Name]'s network infrastructure;
- **All network devices** including routers, switches, firewalls, load balancers, wireless access points, VPN gateways, and network security appliances;
- **All environments** including production, disaster recovery (DR), staging, and test environments where connectivity to NCII systems exists or is possible.

### 1.3 Out of Scope

*Identify any specific systems, environments, or network segments explicitly excluded from this Policy, with justification. Examples may include isolated laboratory environments with no connectivity to NCII systems, or specific subsidiary entities covered by a separate policy approved by the CISO.*

- [Out of Scope Item 1 — Description and Justification]
- [Out of Scope Item 2 — Description and Justification]

---

## 2. Definitions and Abbreviations

*This section should define all key terms and abbreviations used throughout the Policy to ensure consistent interpretation by all readers, including auditors and regulators.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **NCII** | National Critical Information Infrastructure — infrastructure as designated under Section 2 of the Cyber Security Act 2024 (Act 854) |
| **Network Segment** | A logically or physically isolated portion of a network, separated from other portions by network security controls |
| **DMZ (Demilitarised Zone)** | A network segment that sits between an internal trusted network and an external untrusted network, hosting publicly accessible services |
| **Firewall** | A hardware or software-based network security device that monitors and controls incoming and outgoing network traffic based on defined security rules |
| **IDS** | Intrusion Detection System — a system that monitors network traffic for suspicious activity and generates alerts |
| **IPS** | Intrusion Prevention System — a system that monitors network traffic and actively blocks detected threats |
| **VPN** | Virtual Private Network — an encrypted tunnel enabling secure remote access to internal network resources |
| **MFA** | Multi-Factor Authentication — an authentication method requiring two or more verification factors |
| **SIEM** | Security Information and Event Management — a platform aggregating and correlating security event data from multiple sources |
| **SOC** | Security Operations Centre — the team responsible for continuous monitoring and response to security events |
| **Zero Trust** | A security model requiring strict identity verification for every person and device attempting to access resources, regardless of network location |
| **ACL** | Access Control List — a set of rules defining which traffic is permitted or denied on a network device |
| **NAC** | Network Access Control — a solution enforcing security policy compliance before granting network access to devices |
| **VLAN** | Virtual Local Area Network — a logical grouping of network devices on the same physical network into separate broadcast domains |

### 2.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| ACL | Access Control List |
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| DR | Disaster Recovery |
| IDS | Intrusion Detection System |
| IPS | Intrusion Prevention System |
| IT | Information Technology |
| LAN | Local Area Network |
| MFA | Multi-Factor Authentication |
| MSSProvider | Managed Security Services Provider |
| NACSA | National Cyber Security Agency |
| NAC | Network Access Control |
| NCII | National Critical Information Infrastructure |
| OT | Operational Technology |
| RACI | Responsible, Accountable, Consulted, Informed |
| SIEM | Security Information and Event Management |
| SOC | Security Operations Centre |
| VPN | Virtual Private Network |
| WAN | Wide Area Network |
| WAP | Wireless Access Point |
| WLAN | Wireless Local Area Network |

---

## 3. Policy Statement

[Organisation Name] is committed to maintaining a secure and resilient network infrastructure that protects all National Critical Information Infrastructure (NCII) systems, data assets, and supporting services from unauthorised access, disruption, and compromise. Network security is a foundational pillar of [Organisation Name]'s overall cyber security posture, and all networks supporting NCII systems must be designed, operated, and monitored in accordance with the principles set forth in this Policy.

[Organisation Name] adopts a **defence-in-depth** approach to network security, applying multiple overlapping layers of security controls to ensure that the failure of any single control does not result in a breach of NCII systems. This approach is underpinned by the principles of **least privilege**, **need-to-know access**, **network segmentation**, and **continuous monitoring**.

All personnel and third parties operating within or connecting to [Organisation Name]'s network infrastructure are bound by this Policy and must comply with its requirements at all times. Non-compliance may result in disciplinary action, termination of access, or referral to relevant authorities.

---

## 4. Regulatory and Compliance Context

### 4.1 Cyber Security Act 2024 (Act 854)

This Policy is issued to fulfil the obligations of [Organisation Name] as a designated NCII entity under the Cyber Security Act 2024 (Act 854). The following sections of the Act are directly relevant to this Policy:

| Act 854 Section | Title / Subject Matter | Relevance to This Policy |
|---|---|---|
| **Section 18** | Duties of NCII entities | Imposes a duty on NCII entities to comply with minimum cyber security measures prescribed by NACSA, which includes the establishment and enforcement of network security controls |
| **Section 24** | Directions by NACSA | Empowers NACSA to issue binding directions to NCII entities regarding specific cyber security measures; this Policy operationalises compliance with such directions at the network layer |

### 4.2 Related Regulatory Frameworks

*List all other applicable regulatory frameworks, standards, and guidelines that this Policy is required to align with. Remove items not applicable to your organisation.*

| Framework / Standard | Issuing Authority | Applicability |
|---|---|---|
| Risk Management in Technology (RMiT) Policy | Bank Negara Malaysia (BNM) | Applicable to licensed financial institutions regulated by BNM |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Network security controls supporting protection of personal data |
| ISO/IEC 27001:2022 — Information Security Management | ISO/IEC | Certification standard aligned with NCII security obligations |
| NIST Cybersecurity Framework (CSF) 2.0 | NIST | Reference framework for cyber risk management |
| PCI DSS v4.0 | PCI Security Standards Council | Applicable to networks processing payment card data |
| [Other Applicable Framework] | [Issuing Authority] | [Applicability] |

### 4.3 Internal Policy Hierarchy

This Policy operates within [Organisation Name]'s information security governance framework and should be read in conjunction with the following documents:

- Information Security Policy (Master Policy)
- Cyber Security Incident Response Policy
- Access Control Policy
- Data Classification Policy
- Third-Party Risk Management Policy
- Change Management Policy
- Acceptable Use Policy

---

## 5. Network Segmentation Requirements

### 5.1 Overview

*This section defines the mandatory requirements for network segmentation. Describe the organisation's network segmentation strategy, the zones to be implemented, and the rationale for each zone. This is a critical control for NCII systems under Act 854 s18.*

Network segmentation is a mandatory control for all environments supporting NCII systems. [Organisation Name] shall design and maintain its network architecture using a zone-based segmentation model that enforces logical and, where feasible, physical separation between network zones of differing security classifications and trust levels.

### 5.2 Network Zone Architecture

[Organisation Name] shall maintain the following defined network zones at a minimum. Additional zones may be defined based on specific operational requirements, subject to approval by the CISO.

| Zone | Name | Trust Level | Description | Examples of Systems |
|---|---|---|---|---|
| Zone 0 | External / Internet Zone | Untrusted | The public internet and all external networks not controlled by [Organisation Name] | Internet, partner networks |
| Zone 1 | Demilitarised Zone (DMZ) | Low Trust | Hosts services accessible from external networks; acts as a buffer between the internet and internal networks | Web servers, API gateways, email relays, reverse proxies |
| Zone 2 | Restricted Network Zone | Medium Trust | Hosts internal business systems with indirect external connectivity | ERP, HR systems, corporate applications |
| Zone 3 | NCII Core Zone | High Trust | Hosts NCII-designated systems and the most sensitive internal data assets | Core banking, payment systems, NCII databases |
| Zone 4 | Management / Out-of-Band Zone | Privileged | Dedicated out-of-band management network for network infrastructure and server administration | Jump servers, bastion hosts, network management systems |
| Zone 5 | Operational Technology (OT) Zone | Isolated | Segregated zone for OT/SCADA systems where applicable | Industrial control systems, SCADA |
| Zone 6 | Guest / IoT Zone | Untrusted Internal | Isolated zone for guest Wi-Fi and IoT devices | Visitor laptops, printers, IoT sensors |

### 5.3 Segmentation Implementation Requirements

All network segmentation shall be implemented in accordance with the following requirements:

- **5.3.1** Each network zone shall be separated from all other zones by at least one firewall or security gateway enforcing a defined, documented ruleset;
- **5.3.2** Direct communication between Zone 0 (External) and Zone 3 (NCII Core Zone) is **strictly prohibited**; all external communication must traverse at minimum Zone 1 (DMZ) and a dedicated security gateway;
- **5.3.3** Communication between any two zones shall be governed by an explicit "deny-all" default rule, with only approved, documented traffic flows permitted;
- **5.3.4** VLANs shall be used to enforce logical segmentation at Layer 2; VLAN configurations shall be documented and reviewed at least annually;
- **5.3.5** Inter-zone traffic flows shall be documented in a **Network Traffic Flow Matrix** (see Appendix A) and reviewed at least [quarterly / annually] or upon any significant network change;
- **5.3.6** NCII systems in Zone 3 shall not be accessible directly from end-user workstations; access shall be mediated through approved jump servers or bastion hosts located in Zone 4;
- **5.3.7** Development and test environments shall be maintained in a dedicated zone with no direct connectivity to the production NCII Core Zone;
- **5.3.8** Network Address Translation (NAT) shall be employed to prevent direct exposure of internal IP addressing schemes to external networks.

### 5.4 Micro-Segmentation (Zero Trust)

*Describe any micro-segmentation or Zero Trust network architecture (ZTNA) controls deployed or planned within NCII zones.*

Where technically feasible, [Organisation Name] shall progressively implement micro-segmentation within the NCII Core Zone to enforce host-level access controls. This approach, aligned with Zero Trust principles, shall:

- Restrict lateral movement within the NCII Core Zone;
- Enforce workload-level policies in addition to perimeter controls;
- Be implemented using [describe technology — e.g., software-defined networking, host-based firewalls, micro-segmentation platforms].

### 5.5 Network Segmentation Review

| Activity | Frequency | Responsible Party |
|---|---|---|
| Review of zone architecture against current NCII asset register | Annual | Network Security Team / CISO |
| Validation of VLAN configurations | Annual (or upon change) | Network Operations |
| Review and update of Traffic Flow Matrix | Quarterly | Network Security Team |
| Penetration test validating segmentation effectiveness | Annual | [Internal Red Team / Approved Third-Party Tester] |

---

## 6. Firewall Management

### 6.1 Overview

*This section defines requirements for the deployment, configuration, and ongoing management of firewalls protecting NCII systems. All firewalls protecting NCII zones must be managed in accordance with these requirements.*

Firewalls are a primary boundary control for all network zones defined in Section 5. [Organisation Name] shall deploy, configure, and manage firewalls in accordance with the requirements set out in this section to ensure continuous protection of NCII systems.

### 6.2 Firewall Deployment Standards

- **6.2.1** A Next-Generation Firewall (NGFW) capable of application-layer inspection, user identity awareness, and threat intelligence integration shall be deployed at all zone boundaries;
- **6.2.2** Firewalls protecting the NCII Core Zone (Zone 3) shall be deployed in a **high-availability (HA) active-passive or active-active configuration** to ensure continuity of protection;
- **6.2.3** Firewall management interfaces shall be accessible only from the Management Zone (Zone 4) and shall not be reachable from any general user network or external network;
- **6.2.4** All firewall hardware and software shall be maintained under a current vendor support agreement, and firmware shall be patched in accordance with [Organisation Name]'s patch management standards;
- **6.2.5** Separate firewall instances or logical contexts shall be used to segregate traffic flows for different zones where shared appliances are employed.

### 6.3 Firewall Ruleset Management

#### 6.3.1 Ruleset Standards

All firewall rulesets protecting NCII systems shall adhere to the following standards:

- Default deny-all inbound and outbound rules shall be applied as the base policy;
- All permitted rules shall have an explicit documented business justification;
- Rules shall specify source, destination, protocol, port, and direction at a minimum;
- Overly permissive rules (e.g., "any-to-any") are prohibited on firewalls protecting Zone 3;
- Rules permitting inbound access to NCII systems from external networks require CISO written approval;
- Temporary rules shall have a defined expiry date and shall be reviewed and removed upon expiry;
- Rules shall be ordered to ensure the most specific rules are evaluated before general rules.

#### 6.3.2 Firewall Rule Review Schedule

| Review Type | Frequency | Responsible Party | Approver |
|---|---|---|---|
| Full ruleset review (all rules) | Semi-annual | Network Security Team | CISO |
| Review of rules permitting internet-facing access | Quarterly | Network Security Team | CISO |
| Review of temporary / time-limited rules | Monthly | Network Operations | Network Security Lead |
| Post-incident review | Within 5 business days of incident | Network Security Team | CISO |
| Post-change review | Within 10 business days of change | Network Operations | Network Security Lead |

#### 6.3.3 Rule Change Management

All changes to firewall rulesets shall follow [Organisation Name]'s formal change management process, including:

- Submission of a Change Request referencing the approved firewall rule justification form;
- Review and technical approval by the Network Security Team;
- CISO approval for all changes affecting the NCII Core Zone (Zone 3) boundary;
- Implementation during an approved change window (except for emergency changes);
- Post-implementation verification testing;
- Update of the firewall rule register and Traffic Flow Matrix.

### 6.4 Firewall Configuration Hardening

All firewalls shall be hardened in accordance with the applicable vendor hardening guide and the following minimum requirements:

- All default vendor accounts and passwords shall be changed prior to deployment;
- Unused services, ports, and management protocols shall be disabled;
- SNMP shall use SNMPv3 with authentication and encryption; SNMPv1/v2 is prohibited;
- Management access shall use encrypted protocols only (SSH v2, HTTPS with TLS 1.2 or higher);
- Remote management access shall require MFA;
- Logging shall be enabled for all rule matches, administrative actions, and system events;
- Configuration backups shall be taken before and after every change and stored securely in an off-device location.

### 6.5 Firewall Asset Register

[Organisation Name] shall maintain a current register of all firewalls protecting NCII systems, including:

| Field | Description |
|---|---|
| Asset ID | Unique identifier |
| Device Name / Hostname | |
| Make / Model | |
| Firmware / OS Version | |
| Zone(s) Protected | |
| HA Configuration | Active/Passive / Active/Active / Standalone |
| Management IP | |
| Owner / Administrator | |
| Last Configuration Review | |
| Next Configuration Review | |
| Support Contract Expiry | |

---

## 7. Intrusion Detection and Prevention

### 7.1 Overview

*This section defines requirements for the deployment and operation of Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) to detect and block malicious network activity targeting NCII systems. Detail the placement strategy, tuning requirements, and alert response processes.*

[Organisation Name] shall deploy and maintain network-based Intrusion Detection and Prevention Systems (IDS/IPS) at critical points within the network architecture to detect, alert on, and where operationally appropriate, actively block malicious network activity.

### 7.2 IDS/IPS Deployment Architecture

#### 7.2.1 Mandatory Deployment Points

IDS/IPS sensors or inline IPS appliances shall be deployed at the following mandatory locations:

| Deployment Point | Function | Mode |
|---|---|---|
| Internet perimeter (Zone 0 / Zone 1 boundary) | Detect external threats prior to entering DMZ | IPS (inline — blocking) |
| DMZ to internal network boundary (Zone 1 / Zone 2) | Detect lateral movement from DMZ | IPS (inline — blocking) |
| NCII Core Zone perimeter (Zone 2 / Zone 3 boundary) | Protect NCII systems from internal threats | IPS (inline — blocking) |
| NCII Core Zone (internal) | Detect internal anomalies and lateral movement within NCII zone | IDS (monitoring) |
| Management Zone (Zone 4) | Detect anomalies in privileged management traffic | IDS (monitoring) |
| [Additional locations as required] | [Description] | [Mode] |

#### 7.2.2 Deployment Considerations

- Network taps or SPAN ports shall be used for IDS sensors in monitoring mode to avoid introducing latency or single points of failure;
- Inline IPS appliances shall be deployed in HA configuration at all mandatory blocking points;
- IPS fail-open or fail-closed behaviour shall be explicitly configured and documented based on availability and security risk assessment approved by the CISO.

### 7.3 IDS/IPS Signature and Rule Management

- **7.3.1** Signature updates shall be applied within **[X hours/days]** of release by the vendor;
- **7.3.2** Custom signatures shall be developed and maintained for threats specific to [Organisation Name]'s environment, including those derived from threat intelligence feeds;
- **7.3.3** All IPS blocking rules shall be tested in detection-only mode for a minimum of **[X days]** before enabling blocking, to validate false positive rates;
- **7.3.4** A formal signature review and tuning process shall be conducted at least **[monthly / quarterly]** to address false positives and false negatives;
- **7.3.5** Signature management shall be coordinated with threat intelligence sources, including NACSA advisories and [Organisation Name]'s approved threat intelligence feeds.

### 7.4 Alert Handling and Response

All IDS/IPS alerts shall be:

1. Ingested into the Security Information and Event Management (SIEM) platform;
2. Triaged by the Security Operations Centre (SOC) or designated security team within the timeframes defined in the table below;
3. Escalated and responded to in accordance with the Cyber Security Incident Response Policy.

| Alert Severity | Initial Triage SLA | Escalation to CISO | Reporting to NACSA |
|---|---|---|---|
| Critical | Within 15 minutes | Immediately upon confirmation | Within 6 hours (per Act 854 / NACSA directions) |
| High | Within 1 hour | Within 4 hours of confirmation | As directed by CISO |
| Medium | Within 4 hours | As required | Not required (unless escalated) |
| Low | Within 24 hours | Not required | Not required |

### 7.5 IDS/IPS Performance and Effectiveness Review

| Activity | Frequency | Responsible Party |
|---|---|---|
| IDS/IPS signature update verification | Weekly | SOC / Network Security Team |
| Review of false positive rates and tuning | Monthly | Network Security Team |
| IDS/IPS performance and capacity review | Quarterly | Network Security Team |
| Effectiveness assessment (Red Team / Pen Test) | Annual | [Internal Red Team / Approved Third Party] |

---

## 8. Remote Access Controls

### 8.1 Overview

*This section establishes the controls governing all forms of remote access to [Organisation Name]'s internal networks and NCII systems, including employee remote access, third-party vendor access, and administrative remote access. Remote access is a high-risk entry point and must be tightly controlled.*

All remote access to [Organisation Name]'s internal networks and NCII systems shall be provided only through approved, controlled, and monitored mechanisms. No direct, uncontrolled remote access to NCII systems shall be permitted under any circumstances.

### 8.2 Approved Remote Access Methods

| Access Type | Approved Method | Applicable Users |
|---|---|---|
| Employee remote access | Organisation-managed VPN with MFA | Employees working remotely |
| Privileged administrative access | Privileged Access Workstation (PAW) + Bastion Host/Jump Server + MFA | System and network administrators |
| Third-party vendor access | Time-limited, session-controlled vendor access gateway with MFA and session recording | Approved vendors and contractors |
| Application-layer access | Zero Trust Network Access (ZTNA) / approved secure access gateway | [As applicable] |

### 8.3 VPN Requirements

- **8.3.1** All VPN solutions supporting access to NCII systems shall use industry-standard encryption protocols (IPsec or TLS 1.2 / 1.3 minimum);
- **8.3.2** Multi-Factor Authentication (MFA) is **mandatory** for all VPN connections; single-factor (password-only) VPN access is prohibited;
- **8.3.3** Split tunnelling is **prohibited** for VPN sessions accessing NCII systems; all traffic from VPN-connected devices shall be routed through [Organisation Name]'s security controls;
- **8.3.4** VPN clients shall be organisation-managed and shall enforce endpoint compliance checks (e.g., antivirus up-to-date, device encryption enabled, approved device) before granting access;
- **8.3.5** VPN session idle timeout shall not exceed **[30 minutes]** for NCII system access;
- **8.3.6** VPN access rights shall be role-based and shall grant access only to the network segments and systems required for the user's role (principle of least privilege);
- **8.3.7** VPN credentials (certificates, pre-shared keys, user accounts) shall be reviewed and rotated at least annually, or upon personnel changes.

### 8.4 Privileged Remote Access (Administrators)

- **8.4.1** Administrative access to NCII systems shall only be performed from approved Privileged Access Workstations (PAWs) via a hardened bastion host or jump server located in the Management Zone (Zone 4);
- **8.4.2** Direct remote desktop or SSH access from internet-connected networks to NCII systems is **prohibited**;
- **8.4.3** All administrative remote sessions to NCII systems shall be recorded and logs retained for a minimum of **[12 months]** in a tamper-proof log repository;
- **8.4.4** Just-In-Time (JIT) access provisioning shall be implemented for privileged administrative accounts where feasible, limiting the window of privilege exposure.

### 8.5 Third-Party Remote Access

- **8.5.1** Third-party remote access is only permitted for vendors and contractors with an active, approved Vendor Access Agreement and a valid business need;
- **8.5.2** All third-party remote access sessions shall be subject to MFA and session recording;
- **8.5.3** Third-party access shall be time-limited; standing (always-on) third-party VPN access to NCII systems is **prohibited**;
- **8.5.4** Third-party access shall be reviewed and reauthorised at least every **[90 days]**;
- **8.5.5** Third-party access accounts shall be deactivated immediately upon completion of the engagement or work order;
- **8.5.6** The IT / Network Operations team shall maintain a register of all active third-party remote access accounts.

### 8.6 Remote Access Account Register

| Field | Description |
|---|---|
| Account ID | Unique identifier for the remote access account |
| User / Vendor Name | |
| Access Type | Employee / Contractor / Vendor |
| Approved Systems / Zones | |
| Approval Authority | |
| Approval Date | |
| Access Expiry Date | |
| MFA Enrolled | Yes / No |
| Session Recording | Yes / No |
| Last Review Date | |

---

## 9. Wireless Security

### 9.1 Overview

*This section defines the minimum security requirements for all wireless networks operated by [Organisation Name]. Wireless networks present unique security risks due to the broadcast nature of radio communications, and all wireless infrastructure must be configured and managed to prevent unauthorised access.*

[Organisation Name] shall implement and maintain appropriate security controls for all wireless networks operating within its premises. No wireless network shall be deployed without prior approval from the CISO or delegated authority, and no wireless network shall be connected to the NCII Core Zone without explicit written approval and the implementation of additional compensating controls.

### 9.2 Wireless Network Classification and Segregation

All wireless networks operated by [Organisation Name] shall be classified and segregated as follows:

| SSID / Network | Classification | Zone | Purpose | Permitted Users |
|---|---|---|---|---|
| [Corporate SSID] | Internal | Zone 2 (Restricted) | Corporate employee access | Approved employees — organisation-managed devices only |
| [Secure SSID] | Restricted | Zone 3 (NCII-adjacent) | Authorised NCII work where wired access is impractical | CISO-approved personnel only — with compensating controls |
| [Guest SSID] | External | Zone 6 (Guest / IoT) | Visitor internet access | Guests and visitors — internet only, no internal access |
| [IoT SSID] | Isolated | Zone 6 (Guest / IoT) | IoT device connectivity | Approved IoT devices — dedicated IoT zone only |

### 9.3 Wireless Security Standards

#### 9.3.1 Encryption and Authentication

- WPA3-Enterprise with 802.1X authentication is **mandatory** for all corporate wireless SSIDs;
- WPA2-Enterprise (CCMP/AES) is the minimum acceptable standard where WPA3 is not supported; WPA2-TKIP and all WEP configurations are **prohibited**;
- Guest wireless networks shall use WPA3-Personal or WPA2-Personal with a regularly rotated pre-shared key; guest networks must be completely isolated from all internal networks;
- All wireless networks shall be authenticated against a RADIUS server integrated with [Organisation Name]'s identity management infrastructure.

#### 9.3.2 Wireless Access Point (WAP) Management

- All WAPs shall be centrally managed through an approved Wireless LAN Controller (WLC) or cloud-managed wireless platform;
- WAP firmware shall be maintained under current vendor support and patched in accordance with the patch management schedule;
- Default vendor credentials on all WAPs shall be changed prior to deployment;
- WAP management interfaces shall be accessible only from the Management Zone (Zone 4);
- WAPs shall be physically secured and mounted in tamper-evident enclosures in publicly accessible areas;
- All WAPs shall be registered in the IT asset register.

### 9.4 Rogue Access Point Detection

- [Organisation Name] shall implement continuous wireless scanning to detect rogue and unauthorised access points within its premises;
- Rogue WAP detection alerts shall be investigated by the Network Security Team within **[4 hours]** of detection;
- Any confirmed rogue WAP shall be reported to the CISO and physically removed or electronically blocked within **[2 hours]** of confirmation;
- Rogue WAP detection scan results shall be reviewed **[weekly / monthly]** by the Network Security Team.

### 9.5 Wireless Site Survey and Coverage Review

| Activity | Frequency | Responsible Party |
|---|---|---|
| Wireless site survey (coverage and interference) | Annual or upon significant physical changes | Network Operations |
| Review of authorised WAP register | Quarterly | Network Security Team |
| Rogue WAP detection report review | Monthly | Network Security Team |
| Wireless security configuration audit | Annual | Network Security Team / Internal Audit |

---

## 10. Network Monitoring and Logging

### 10.1 Overview

*This section defines the requirements for continuous network monitoring, security event logging, log management, and retention. Effective monitoring is essential for the timely detection of threats and is a key obligation for NCII entities under Act 854 s18 and s24. Detail the specific tools, retention periods, and review processes.*

[Organisation Name] shall implement and maintain a comprehensive network monitoring and logging capability to ensure continuous visibility into network activity across all zones, with particular focus on networks supporting NCII systems. All network security-relevant events shall be captured, centralised, and analysed in near-real-time.

### 10.2 Network Monitoring Architecture

#### 10.2.1 Security Information and Event Management (SIEM)

- A SIEM platform shall be deployed and maintained as the central repository and correlation engine for all network security events;
- The SIEM shall aggregate logs from all network security devices, including firewalls, IDS/IPS, VPN gateways, wireless controllers, and network infrastructure devices;
- SIEM correlation rules shall be maintained and tuned to detect known attack patterns and anomalous behaviour relevant to [Organisation Name]'s environment;
- The SIEM platform shall be operated [24x7 / during business hours with on-call coverage] by the SOC or designated monitoring team.

#### 10.2.2 Network Traffic Analysis

- Network traffic analysis (NTA) or network detection and response (NDR) capabilities shall be deployed to enable baseline profiling and anomaly detection for NCII network zones;
- Full packet capture (PCAP) capability shall be maintained at [specified capture points — e.g., NCII Core Zone perimeter] to support incident investigation;
- DNS query logging shall be enabled and centralised for all internal resolvers to support threat hunting and incident investigation.

### 10.3 Mandatory Log Sources

The following network devices and systems shall be configured to forward logs to the SIEM:

| Log Source Category | Examples | Log Types |
|---|---|---|
| Perimeter firewalls | All zone boundary firewalls | Allow/deny rules, admin actions, system events |
| IDS/IPS | All deployed sensors and inline appliances | Alerts, signature matches, blocked sessions |
| VPN gateways | Remote access VPN, site-to-site VPN | Authentication events, session start/stop, failures |
| Wireless controllers | WLC / cloud wireless management | WAP events, client associations, rogue detections |
| Network switches (core) | Core and distribution layer switches | Port changes, MAC address table events, VLAN changes |
| DNS / DHCP servers | Internal DNS resolvers, DHCP servers | Query logs, DHCP leases |
| Network Access Control (NAC) | NAC platform | Device onboarding, posture failures, quarantine events |
| Bastion hosts / jump servers | Zone 4 management hosts | All administrative sessions |
| Load balancers | Application delivery controllers | Access logs, health check events |
| [Additional sources] | [Description] | [Log types] |

### 10.4 Log Management Requirements

#### 10.4.1 Log Integrity and Confidentiality

- Logs shall be forwarded to the SIEM in real-time or near-real-time (maximum **[5-minute]** delay);
- Log transmission shall use encrypted channels (TLS 1.2 or higher);
- Logs shall be stored in a tamper-evident, write-once log repository; no personnel shall have the ability to delete or modify logs within the retention period;
- Access to the centralised log repository shall be restricted to authorised SOC personnel and auditors;
- Log integrity verification (e.g., cryptographic hashing) shall be implemented where technically supported.

#### 10.4.2 Log Retention Schedule

| Log Category | Minimum Retention Period | Storage Location | Access Control |
|---|---|---|---|
| Firewall logs | 12 months online; 24 months archived | [SIEM / Log Archive] | SOC, CISO, Auditors |
| IDS/IPS alert logs | 12 months online; 24 months archived | [SIEM / Log Archive] | SOC, CISO, Auditors |
| VPN access logs | 12 months online; 24 months archived | [SIEM / Log Archive] | SOC, CISO, Auditors |
| Administrative session recordings | 12 months online; 24 months archived | [Secure Session Recording Storage] | CISO, Auditors (read-only) |
| Wireless / NAC logs | 12 months online; 24 months archived | [SIEM / Log Archive] | SOC, CISO, Auditors |
| SIEM correlation alert logs | 36 months | [SIEM] | SOC, CISO, Auditors |

*Note: Retention periods shall meet or exceed the minimum requirements specified by NACSA and any applicable sector regulator. If regulatory requirements exceed the periods above, the longer period shall apply.*

### 10.5 SOC Monitoring Responsibilities

| Activity | Frequency | SLA | Responsible Party |
|---|---|---|---|
| Review of SIEM alerts | Continuous (24x7) | Per alert severity SLA in Section 7.4 | SOC |
| Network anomaly investigation | As detected | Per alert severity SLA | SOC / Network Security |
| Daily network security summary report | Daily | By 09:00 each business day | SOC Lead |
| Weekly trend analysis and metrics | Weekly | By Monday COB | SOC Lead |
| Monthly SIEM rule effectiveness review | Monthly | Within 5 days of month-end | Network Security Team |
| Annual monitoring coverage gap assessment | Annual | Before policy review date | CISO |

### 10.6 Network Baseline and Anomaly Detection

- [Organisation Name] shall establish and maintain documented network traffic baselines for all NCII zones, covering typical traffic volumes, protocols, and communication patterns;
- Significant deviations from established baselines (threshold: **[define % or absolute threshold]**) shall trigger an alert for SOC review;
- Baselines shall be reviewed and updated at least **[quarterly / semi-annually]** or following any significant network change.

---

## 11. Roles and Responsibilities

### 11.1 Overview

*This section defines the roles and responsibilities of all parties involved in the implementation, operation, and governance of this Policy. Use the RACI matrix below and supplement with narrative descriptions as required.*

### 11.2 RACI Matrix

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Network Security Team | Network Operations | SOC | IT Management | Business Units | Internal Audit | Third-Party Vendors |
|---|---|---|---|---|---|---|---|---|
| Policy ownership and maintenance | A | R | C | C | I | I | C | — |
| Network zone architecture design | A | R | C | C | I | C | — | — |
| Firewall rule change approval (NCII zones) | A | R | C | — | I | I | — | — |
| Firewall operations and monitoring | I | A | R | I | I | — | — | — |
| IDS/IPS deployment and tuning | A | R | C | C | I | — | — | — |
| Security event monitoring (SOC) | I | C | I | R/A | I | — | — | — |
| Incident detection and escalation | I | C | I | R | A | I | — | — |
| VPN provisioning and management | I | A | R | I | I | — | — | — |
| Third-party access approval | A | C | R | I | C | I | — | I |
| Wireless security management | I | A | R | I | I | — | — | — |
| Log management and retention | I | A | R | R | I | — | — | — |
| Compliance reporting to NACSA | A | C | I | C | I | I | — | — |
| Annual policy review | A | R | C | C | I | C | I | — |
| Penetration testing coordination | A | R | C | C | I | I | C | R |
| Exceptions and waiver approval | A | R | — | — | C | C | I | — |

### 11.3 Key Role Descriptions

#### 11.3.1 Chief Information Security Officer (CISO)
The CISO is the owner of this Policy and is accountable for ensuring that [Organisation Name]'s network security controls meet the requirements of Act 854 and this Policy. The CISO shall approve all significant exceptions and changes to this Policy, and shall report on network security compliance to senior management and the Board.

#### 11.3.2 Network Security Team
The Network Security Team is responsible for the design, implementation, and review of network security controls, including firewall rulesets, IDS/IPS configuration, segmentation architecture, and security monitoring tools. The team serves as the technical authority for network security matters.

#### 11.3.3 Network Operations
Network Operations is responsible for the day-to-day operation and maintenance of network infrastructure, including the implementation of security configurations under the direction of the Network Security Team and in accordance with this Policy.

#### 11.3.4 Security Operations Centre (SOC)
The SOC is responsible for continuous monitoring of security events, triage and initial investigation of alerts, and escalation of confirmed or suspected incidents in accordance with the Cyber Security Incident Response Policy.

#### 11.3.5 Internal Audit
Internal Audit is responsible for independently assessing compliance with this Policy and reporting findings to the CISO, senior management, and the Audit Committee.

---

## 12. Compliance and Enforcement

### 12.1 Compliance Assessment

[Organisation Name] shall assess compliance with this Policy through the following mechanisms:

| Assessment Method | Frequency | Conducted By | Reported To |
|---|---|---|---|
| Internal network security audit | Annual | Internal Audit / Network Security Team | CISO, Audit Committee |
| Vulnerability assessment (network infrastructure) | Quarterly | Network Security Team / Approved Vendor | CISO |
| Penetration test (NCII network perimeter and segmentation) | Annual | Approved Third-Party Penetration Tester | CISO, Board |
| Firewall ruleset review | Semi-annual | Network Security Team | CISO |
| Compliance review against NACSA directions | As directed / Annual | CISO, Network Security Team | Board, NACSA |
| Third-party remote access review | Quarterly | IT Management / Network Security Team | CISO |

### 12.2 Enforcement

Non-compliance with this Policy may result in:

- Immediate revocation of network access;
- Disciplinary action up to and including termination of employment or contract;
- Referral to law enforcement or regulatory authorities where the non-compliance constitutes a breach of law;
- Civil or criminal liability under the Cyber Security Act 2024 or other applicable legislation.

---

## 13. Exceptions and Waivers

### 13.1 Exception Process

*Define the process for requesting, reviewing, and approving exceptions to this Policy. All exceptions must be formally documented and time-limited.*

Where strict compliance with a specific requirement of this Policy is technically or operationally impracticable, a formal exception may be requested through the following process:

1. The requesting team shall submit an **Exception Request Form** (see Appendix B) to the Network Security Team;
2. The Network Security Team shall assess the request, identify compensating controls, and provide a recommendation;
3. The CISO shall approve or reject the exception in writing;
4. Approved exceptions shall be documented in the **Policy Exceptions Register** (see Appendix C) and shall include:
   - Description of the requirement from which an exception is sought;
   - Business justification;
   - Risk assessment and compensating controls;
   - Approval date and approver;
   - Exception expiry date (maximum **[12 months]**; renewable subject to re-approval);
5. Exceptions shall be reviewed at each renewal and at the annual policy review.

### 13.2 Exceptions Register Summary

| Exception ID | Requirement | Justification | Compensating Control | Approved By | Expiry Date |
|---|---|---|---|---|---|
| [EXC-001] | [Policy Clause Reference] | [Business Justification] | [Compensating Control Description] | [CISO Name] | [Date] |

---

## 14. Review and Approval

### 14.1 Policy Review

This Policy shall be reviewed at least annually by the Network Security Team in consultation with the CISO. In addition, a review shall be triggered by:

- Significant changes to [Organisation Name]'s network architecture or NCII systems;
- New or revised directions or guidelines issued by NACSA;
- A significant cyber security incident affecting [Organisation Name]'s network infrastructure;
- Changes to applicable legislation or regulatory requirements;
- Findings from internal or external audits or penetration tests.

### 14.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes — major revision] |

### 14.3 Approval Sign-Off

*All approvers must sign this table to indicate review and approval of this version of the Policy.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Author | [Name], [Title] | | [Date] |
| Reviewer | [Name], Network Security Lead | | [Date] |
| Reviewer | [Name], Head of Network Operations | | [Date] |
| Reviewer | [Name], Internal Audit | | [Date] |
| Approver | [Name], Chief Information Security Officer (CISO) | | [Date] |
| Endorser | [Name], Chief Information Officer (CIO) / Chief Technology Officer (CTO) | | [Date] |
| Endorser | [Name], Chief Executive Officer (CEO) / Board Representative | | [Date] |

---

## 15. References

### 15.1 Legislation and Regulatory Instruments

| Reference | Title | Relevance |
|---|---|---|
| Cyber Security Act 2024 (Act 854), **Section 18** | Duties of NCII entities | Imposes duty to comply with minimum cyber security measures prescribed by NACSA; foundational obligation for this Policy |
| Cyber Security Act 2024 (Act 854), **Section 24** | Directions by NACSA | Empowers NACSA to issue binding security directions to NCII entities; this Policy operationalises compliance with network-related directions |
| NACSA — National Cyber Security Policy (NCSP) | National cyber security strategic framework | Policy alignment |
| NACSA — Minimum Cyber Security Measures (MCSM) for NCII | NCII minimum controls guidance | Baseline control requirements for this Policy |
| Personal Data Protection Act 2010 (PDPA) | Data protection legislation | Network controls supporting protection of personal data |

### 15.2 Industry Standards and Guidelines

| Reference | Title | Version / Date |
|---|---|---|
| ISO/IEC 27001 | Information Security Management Systems — Requirements | 2022 |
| ISO/IEC 27002 | Information Security Controls | 2022 |
| NIST SP 800-41 Rev 1 | Guidelines on Firewalls and Firewall Policy | Rev 1 |
| NIST SP 800-94 Rev 1 | Guide to Intrusion Detection and Prevention Systems | Rev 1 |
| NIST SP 800-77 Rev 1 | Guide to IPsec VPNs | Rev 1 |
| NIST SP 800-153 | Guidelines for Securing Wireless LANs | 2012 |
| NIST Cybersecurity Framework | CSF 2.0 | 2024 |
| CIS Controls | Center for Internet Security Critical Security Controls | v8.1 |
| PCI DSS | Payment Card Industry Data Security Standard | v4.0 |

### 15.3 Internal Documents

| Document Title | Document ID | Location |
|---|---|---|
| Information Security Policy (Master Policy) | [Doc ID] | [Document Repository Link / Location] |
| Cyber Security Incident Response Policy | [Doc ID] | [Document Repository Link / Location] |
| Access Control Policy | [Doc ID] | [Document Repository Link / Location] |
| Patch Management Policy | [Doc ID] | [Document Repository Link / Location] |
| Change Management Policy | [Doc ID] | [Document Repository Link / Location] |
| Third-Party Risk Management Policy | [Doc ID] | [Document Repository Link / Location] |
| NCII Asset Register | [Doc ID] | [Document Repository Link / Location] |

---

## 16. Appendices

### Appendix A — Network Traffic Flow Matrix

*This appendix shall contain a comprehensive matrix documenting all approved inter-zone traffic flows. The matrix shall be maintained as a live document updated upon every approved network change. A summary template is provided below.*

**Instructions:** Complete this matrix for all approved traffic flows between defined network zones. This matrix forms part of the firewall rule justification record and must be kept current.

| Flow ID | Source Zone | Source System / CIDR | Destination Zone | Destination System / CIDR | Protocol | Port(s) | Direction | Business Justification | Approval Date | Approved By | Review Date |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TF-001 | Zone 1 (DMZ) | [Web Server CIDR] | Zone 2 (Restricted) | [App Server CIDR] | TCP | 8443 | Inbound | Web application tier to application tier communication | [Date] | [Approver] | [Date] |
| TF-002 | Zone 4 (Mgmt) | [Jump Server IP] | Zone 3 (NCII Core) | [NCII Server CIDR] | TCP | 22 | Inbound | Privileged SSH administrative access via bastion host | [Date] | [Approver] | [Date] |
| [TF-XXX] | [Source Zone] | [Source] | [Dest Zone] | [Destination] | [Protocol] | [Port] | [Direction] | [Justification] | [Date] | [Approver] | [Date] |

---

### Appendix B — Policy Exception Request Form

*This appendix provides the standard form for requesting an exception to this Policy. All fields are mandatory.*

---

**NETWORK SECURITY POLICY — EXCEPTION REQUEST FORM**

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-assigned by Network Security Team] |
| **Date of Request** | [DD/MM/YYYY] |
| **Requesting Team / Department** | [Department Name] |
| **Requestor Name and Title** | [Name, Title] |
| **Policy Clause Reference** | [Clause number and title from this Policy] |
| **System(s) / Asset(s) Affected** | [List of affected systems or network segments] |
| **Description of Non-Compliance** | [Describe what requirement cannot be met and why] |
| **Business Justification** | [Provide clear business or technical justification] |
| **Risk Assessment** | [Describe the risk introduced by the exception] |
| **Proposed Compensating Controls** | [Describe controls that mitigate the risk of the exception] |
| **Requested Exception Period** | From: [Date] To: [Date — max 12 months] |
| **Requestor Signature** | |
| **Network Security Team Recommendation** | [Approve / Reject / Approve with Conditions] |
| **CISO Decision** | [Approve / Reject] |
| **CISO Signature** | |
| **CISO Decision Date** | |
| **Conditions of Approval** | [Any conditions the requestor must meet] |

---

### Appendix C — Policy Exceptions Register

*This register shall be maintained by the Network Security Team and reviewed at each policy review cycle. All active exceptions must be listed here.*

| Exception ID | Policy Clause | Affected Systems | Business Justification | Risk Level | Compensating Controls | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| EXC-001 | [Clause] | [Systems] | [Justification] | [High / Med / Low] | [Controls] | [CISO Name] | [Date] | [Date] | Active / Expired |

---

### Appendix D — Firewall Rule Justification Template

*Use this template to document the business justification for each firewall rule created on firewalls protecting NCII systems. This record shall be maintained by the Network Security Team and linked to the corresponding change request.*

| Field | Details |
|---|---|
| **Rule ID** | [Unique Rule Reference] |
| **Firewall Device** | [Device Name / Hostname] |
| **Rule Direction** | Inbound / Outbound / Bidirectional |
| **Source Zone** | [Zone Name] |
| **Source Address / CIDR** | [IP or CIDR] |
| **Destination Zone** | [Zone Name] |
| **Destination Address / CIDR** | [IP or CIDR] |
| **Protocol** | TCP / UDP / ICMP / Other |
| **Port(s)** | [Port number(s)] |
| **Action** | Allow / Deny / Drop |
| **Business Justification** | [Describe the business need for this rule] |
| **System / Application Owner** | [Owner Name] |
| **Change Request Reference** | [CR Number] |
| **Approved By** | [CISO / Network Security Lead] |
| **Approval Date** | [Date] |
| **Rule Expiry Date (if temporary)** | [Date or "Permanent"] |
| **Last Reviewed** | [Date] |
| **Next Review** | [Date] |

---

### Appendix E — Network Security Metrics Dashboard

*This appendix defines the key metrics that shall be tracked and reported to the CISO and senior management on a [monthly / quarterly] basis to demonstrate the effectiveness of network security controls.*

| Metric | Description | Target | Reporting Frequency |
|---|---|---|---|
| Firewall rule review completion rate | % of firewall rules reviewed within scheduled review period | 100% | Quarterly |
| IDS/IPS signature currency | % of IDS/IPS sensors running current signatures (within [X] days of release) | 100% | Monthly |
| Mean Time to Detect (MTTD) — network threats | Average time from threat activity to SOC alert | < [X hours] | Monthly |
| Mean Time to Respond (MTTR) — critical alerts | Average time from critical alert to containment action | < [X hours] | Monthly |
| Rogue WAP detections | Number of unauthorised WAPs detected per period | 0 confirmed rogue WAPs | Monthly |
| VPN authentication failure rate | Number of failed VPN authentication attempts per period | < [threshold] | Weekly |
| Third-party access accounts exceeding review date | Number of third-party accounts not reviewed within 90 days | 0 | Monthly |
| Policy exceptions open beyond expiry | Number of exceptions where expiry date has passed without renewal | 0 | Monthly |
| Patch compliance — network infrastructure | % of network devices patched within defined patch window | > 95% | Monthly |
| Penetration test findings (critical / high) | Number of critical or high findings from last pen test | 0 critical at next test | Annual |

---

### Appendix F — Glossary of Network Zones

*This appendix provides a quick-reference diagram description of the network zone architecture. Replace this text with an actual network architecture diagram in the approved document.*

**[INSERT NETWORK ZONE ARCHITECTURE DIAGRAM HERE]**

The diagram shall depict:
- All defined network zones (Zones 0–6 as defined in Section 5.2);
- Zone boundary firewalls and security appliances;
- IDS/IPS sensor placement;
- Key inter-zone traffic flows;
- Internet egress and ingress points;
- Remote access entry points (VPN, vendor access gateway);
- Management zone connectivity.

*Diagram version, date, and author shall be recorded below the diagram.*

| Field | Details |
|---|---|
| Diagram Reference | [Diagram ID] |
| Version | [Version Number] |
| Last Updated | [Date] |
| Maintained By | [Network Security Team / Network Operations] |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It is intended solely for authorised personnel of [Organisation Name] and must not be disclosed to external parties without the written approval of the CISO. Printed copies are uncontrolled — refer to the document management system for the current approved version.