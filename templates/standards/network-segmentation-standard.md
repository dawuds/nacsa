# Network Segmentation Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Architecture |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) — NACSA |
| **Applicable Sections** | s18, s24 |

---

> **Mandatory Compliance Notice:** This standard is mandatory for all systems designated as National Critical Information Infrastructure (NCII) under the Cyber Security Act 2024 (Act 854). Non-compliance may constitute an offence under the Act and must be reported to the National Cyber Security Agency (NACSA) as required.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Terminology](#2-definitions-and-terminology)
3. [Regulatory Obligations](#3-regulatory-obligations)
4. [NCII Zone Definitions](#4-ncii-zone-definitions)
5. [Firewall Rule Requirements](#5-firewall-rule-requirements)
6. [Micro-Segmentation Guidelines](#6-micro-segmentation-guidelines)
7. [DMZ Architecture](#7-dmz-architecture)
8. [IT/OT Network Separation](#8-itot-network-separation)
9. [Network Access Control (NAC)](#9-network-access-control-nac)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Compliance Monitoring and Assurance](#11-compliance-monitoring-and-assurance)
12. [Exceptions and Waivers](#12-exceptions-and-waivers)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Network Segmentation Standard establishes the mandatory requirements for the logical and physical segmentation of [Organization Name]'s National Critical Information Infrastructure (NCII) systems from other internal, external, and third-party networks. It defines the minimum architecture controls, zoning principles, and enforcement mechanisms required to protect NCII assets from unauthorised access, lateral movement, and cyber threats.

This standard is issued in compliance with the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 18** — Duties of NCII entity to comply with codes of practice, standards, and directions issued by the Chief Executive of NACSA
- **Section 24** — Obligations relating to the protection of NCII systems and the implementation of appropriate cyber security measures

This standard supports [Organization Name]'s broader obligation to maintain the availability, integrity, and confidentiality of NCII systems and to report significant cyber security incidents to NACSA as prescribed.

### 1.2 Scope

This standard applies to:

- All network infrastructure classified as NCII under Act 854, including systems designated by NACSA or self-identified pursuant to s6 of the Act
- All network devices, firewalls, routers, switches, load balancers, and segmentation appliances that form the boundary or interconnection between defined network zones
- All operational technology (OT) and industrial control systems (ICS) that interface with or reside within the NCII boundary
- All third-party, vendor, and managed service provider connections to [Organization Name]'s NCII environment
- All cloud-hosted or hybrid infrastructure that processes, stores, or transmits NCII data

This standard does **not** apply to:

- Non-NCII corporate end-user computing environments that have no connectivity to NCII systems
- Development and test environments that are fully isolated from production NCII systems with no shared credentials or data flows

### 1.3 Relationship to Other Policies

*This section should identify parent policies and subordinate procedures that this standard sits within. List all related documents maintained in [Organization Name]'s Policy Management System.*

| Document Type | Document Title | Document ID |
|---|---|---|
| Parent Policy | Information Security Policy | [Doc ID] |
| Parent Policy | NCII Cyber Security Policy | [Doc ID] |
| Related Standard | Identity and Access Management Standard | [Doc ID] |
| Related Standard | Vulnerability Management Standard | [Doc ID] |
| Related Standard | Cloud Security Standard | [Doc ID] |
| Related Procedure | Firewall Change Management Procedure | [Doc ID] |
| Related Procedure | Network Access Request Procedure | [Doc ID] |
| Related Guideline | Network Architecture Design Guideline | [Doc ID] |

---

## 2. Definitions and Terminology

*This section defines key terms used throughout this standard. Authors should supplement this list with organisation-specific terminology as required.*

| Term | Definition |
|---|---|
| **Act 854** | The Cyber Security Act 2024, enacted by the Parliament of Malaysia |
| **NACSA** | National Cyber Security Agency, the competent authority for NCII oversight under Act 854 |
| **NCII** | National Critical Information Infrastructure — computer systems whose disruption would have a significant impact on national security, national resilience, or the economic or social well-being of Malaysia, as defined under Act 854 |
| **NCII Entity** | An entity responsible for operating or maintaining NCII systems, as designated by the Chief Executive of NACSA |
| **Network Zone** | A logical or physical grouping of systems with shared security classification, function, and access requirements, protected by defined security controls at its boundary |
| **Segmentation** | The division of a computer network into smaller parts using technical controls to limit the scope of access between systems |
| **Micro-segmentation** | A granular approach to network security that enforces access controls at the individual workload or application level, beyond traditional perimeter-based controls |
| **DMZ** | Demilitarised Zone — a network segment that separates an organisation's internal network from untrusted external networks, typically hosting services accessible from the internet |
| **Firewall** | A network security device or software that monitors and controls incoming and outgoing network traffic based on defined security rules |
| **NAC** | Network Access Control — a set of policies and technologies that enforce security policy compliance before allowing devices to access the network |
| **OT** | Operational Technology — hardware and software that monitors or controls physical devices, processes, and events in industrial environments |
| **IT** | Information Technology — systems used for the management and processing of information |
| **ICS** | Industrial Control System — a broad term that encompasses several types of control systems used in industrial production |
| **SCADA** | Supervisory Control and Data Acquisition — a system of software and hardware elements that allows industrial organisations to control processes locally or remotely |
| **ACL** | Access Control List — a list of rules that specifies which users or systems are granted or denied access to network resources |
| **VLAN** | Virtual Local Area Network — a logical grouping of network devices that behave as if they are connected to the same physical network segment, regardless of their actual physical location |
| **Zero Trust** | A security model that requires all users and devices, whether inside or outside the organisation's network, to be authenticated, authorised, and continuously validated before being granted access to applications and data |
| **Least Privilege** | The principle of providing a user, account, or system process only the minimum levels of access necessary to perform its intended function |

---

## 3. Regulatory Obligations

### 3.1 Cyber Security Act 2024 (Act 854)

*This section summarises the specific obligations imposed by Act 854 that are addressed by this standard. Authors should verify these against the current version of the Act and any codes of practice or directions issued by NACSA.*

#### 3.1.1 Section 18 — Compliance with Codes of Practice and Standards

Under s18 of Act 854, [Organization Name] as an NCII entity is required to:

- Comply with any code of practice, standard, or direction issued by the Chief Executive of NACSA
- Implement and maintain cyber security measures consistent with any applicable NACSA-issued cyber security framework or baseline
- Submit to audits, assessments, or inspections directed by the Chief Executive to verify compliance with the Act

This standard implements the network segmentation requirements within applicable NACSA baseline standards and codes of practice, including but not limited to:

- [NACSA Baseline Security Standard — Reference]
- [Applicable NACSA Sector-Specific Code of Practice — Reference]

#### 3.1.2 Section 24 — Protection of NCII Systems

Under s24 of Act 854, [Organization Name] is obligated to:

- Take reasonable steps to protect NCII systems from cyber security threats
- Implement measures that reduce the risk of unauthorised access, disruption, modification, or destruction of NCII systems
- Ensure that cyber security incidents affecting NCII systems are detected and reported in accordance with the Act

Network segmentation is a foundational control that directly supports s24 obligations by limiting the blast radius of a security breach, preventing lateral movement, and reducing the attack surface of NCII systems.

### 3.2 Applicable NACSA Codes and Directions

*Authors should list all NACSA-issued codes of practice, standards, and directions that have been issued and apply to the organisation. Update this table as new instruments are issued.*

| Instrument | Reference | Applicable Requirements |
|---|---|---|
| [NACSA Code of Practice — Title] | [Reference Number] | [Applicable segmentation requirements] |
| [NACSA Direction — Title] | [Reference Number] | [Applicable requirements] |
| [Sector Cyber Security Framework] | [Reference Number] | [Applicable requirements] |

### 3.3 Interaction with Other Regulatory Requirements

*This section should identify other Malaysian regulatory requirements that impose complementary network segmentation obligations. Authors should review applicability and record it here.*

| Regulation | Regulator | Applicable Requirement |
|---|---|---|
| Risk Management in Technology (RMiT) Policy | Bank Negara Malaysia (BNM) | Technology risk management, system resilience, and third-party access controls for financial institutions |
| Personal Data Protection Act 2010 (PDPA) | Personal Data Protection Commissioner | Protection of personal data through appropriate technical controls |
| [Other Applicable Regulation] | [Regulator] | [Applicable requirement] |

---

## 4. NCII Zone Definitions

*This section defines the mandatory network zones for [Organization Name]'s NCII environment. Authors should map these zones to the organisation's actual network topology. Each zone must be documented, assigned a classification, and have defined ingress and egress controls. Update the zone register whenever architectural changes are made.*

### 4.1 Zone Classification Framework

[Organization Name] classifies all networks into security zones based on the sensitivity and criticality of systems hosted within each zone, and the level of trust afforded to traffic originating from that zone. The following zone classification tiers are mandatory:

| Zone Tier | Classification | Description |
|---|---|---|
| **Tier 0** | Restricted — NCII Core | Highest-criticality NCII systems with no direct external connectivity. Access is strictly controlled and limited to authorised administrators. |
| **Tier 1** | Restricted — NCII Operational | NCII operational systems that require controlled inter-system communication. No direct internet access permitted. |
| **Tier 2** | Confidential — Internal Services | Internal business systems that support NCII operations but are not themselves designated NCII. Limited, policy-controlled connectivity to Tier 1. |
| **Tier 3** | Internal — General Enterprise | Standard corporate IT environment. No direct connectivity to Tier 0 or Tier 1 without explicit policy approval and technical enforcement. |
| **Tier 4** | Semi-Trusted — DMZ | Services exposed to external parties or the internet. Strictly controlled inbound and outbound access. No direct access to Tier 0 or Tier 1. |
| **Tier 5** | Untrusted — External | The internet and all external, third-party, or partner networks. All traffic from this zone is treated as untrusted. |

### 4.2 Mandatory NCII Zones

*Authors should describe each zone specific to the organisation's environment, including the types of systems hosted, the VLANs or network ranges assigned, and the security controls applied at each zone boundary.*

#### 4.2.1 NCII Core Zone (Tier 0)

| Attribute | Details |
|---|---|
| **Zone Name** | NCII Core |
| **Tier** | 0 — Restricted |
| **VLAN ID(s)** | [VLAN ID(s)] |
| **IP Range(s)** | [IP Range(s)] |
| **Hosted Systems** | [List of systems hosted in this zone, e.g., core banking engine, payment switching infrastructure] |
| **Permitted Inbound Traffic** | [Define permitted sources and protocols] |
| **Permitted Outbound Traffic** | [Define permitted destinations and protocols] |
| **Boundary Controls** | Next-generation firewall, IDS/IPS, encrypted management channels only |
| **Monitoring** | Full packet capture capability, SIEM-integrated logging, real-time alerting |

#### 4.2.2 NCII Operational Zone (Tier 1)

| Attribute | Details |
|---|---|
| **Zone Name** | NCII Operational |
| **Tier** | 1 — Restricted |
| **VLAN ID(s)** | [VLAN ID(s)] |
| **IP Range(s)** | [IP Range(s)] |
| **Hosted Systems** | [List of systems, e.g., authentication services, certificate management, privileged access management] |
| **Permitted Inbound Traffic** | [Define permitted sources and protocols] |
| **Permitted Outbound Traffic** | [Define permitted destinations and protocols] |
| **Boundary Controls** | Next-generation firewall, application-layer inspection |
| **Monitoring** | Full NetFlow logging, SIEM-integrated alerting, anomaly detection |

#### 4.2.3 Internal Services Zone (Tier 2)

| Attribute | Details |
|---|---|
| **Zone Name** | Internal Services |
| **Tier** | 2 — Confidential |
| **VLAN ID(s)** | [VLAN ID(s)] |
| **IP Range(s)** | [IP Range(s)] |
| **Hosted Systems** | [List of systems, e.g., internal APIs, middleware, database servers supporting NCII] |
| **Permitted Inbound Traffic** | [Define permitted sources and protocols] |
| **Permitted Outbound Traffic** | [Define permitted destinations and protocols] |
| **Boundary Controls** | Stateful firewall, application-aware filtering |
| **Monitoring** | NetFlow logging, SIEM integration |

#### 4.2.4 General Enterprise Zone (Tier 3)

| Attribute | Details |
|---|---|
| **Zone Name** | General Enterprise |
| **Tier** | 3 — Internal |
| **VLAN ID(s)** | [VLAN ID(s)] |
| **IP Range(s)** | [IP Range(s)] |
| **Hosted Systems** | [Corporate workstations, email, productivity tools, HR systems] |
| **Permitted Inbound Traffic** | [Define permitted sources and protocols] |
| **Permitted Outbound Traffic** | Internet access via proxy, controlled access to Tier 2 only |
| **Boundary Controls** | Stateful firewall, web proxy, endpoint controls |
| **Monitoring** | Perimeter logging, SIEM integration |

#### 4.2.5 OT/ICS Zone

*Describe this zone if applicable to the organisation. This zone is mandatory for NCII entities that operate industrial control systems.*

| Attribute | Details |
|---|---|
| **Zone Name** | OT/ICS |
| **Tier** | 0/1 (context-dependent) |
| **VLAN ID(s)** | [VLAN ID(s)] |
| **IP Range(s)** | [IP Range(s)] |
| **Hosted Systems** | [SCADA systems, PLCs, RTUs, HMIs, historian servers] |
| **Permitted Inbound Traffic** | [Define permitted sources — default DENY all from IT networks] |
| **Permitted Outbound Traffic** | [Tightly controlled — no direct internet access] |
| **Boundary Controls** | Dedicated OT firewall, data diode where applicable, unidirectional gateways |
| **Monitoring** | OT-specific intrusion detection, historian logging |

### 4.3 Zone Register

*Authors must maintain a live zone register as a controlled annex to this standard. The register must be updated whenever zones are created, modified, or decommissioned. A summary table is provided below.*

| Zone Name | Tier | VLAN ID(s) | IP Range(s) | Zone Owner | Last Updated |
|---|---|---|---|---|---|
| NCII Core | 0 | [ID] | [Range] | [Owner] | [Date] |
| NCII Operational | 1 | [ID] | [Range] | [Owner] | [Date] |
| Internal Services | 2 | [ID] | [Range] | [Owner] | [Date] |
| General Enterprise | 3 | [ID] | [Range] | [Owner] | [Date] |
| DMZ | 4 | [ID] | [Range] | [Owner] | [Date] |
| OT/ICS | 0/1 | [ID] | [Range] | [Owner] | [Date] |
| [Additional Zone] | [Tier] | [ID] | [Range] | [Owner] | [Date] |

---

## 5. Firewall Rule Requirements

*This section defines the mandatory requirements for firewall policy design, rule management, and governance across all NCII zone boundaries. Authors should reference the organisation's Firewall Change Management Procedure for operational processes.*

### 5.1 General Firewall Policy Principles

All firewall rules protecting NCII zone boundaries must conform to the following principles:

- **Default Deny:** All inter-zone firewall policies must default to DENY ALL. Permitted traffic must be explicitly defined by an approved rule. Implicit permit rules are prohibited.
- **Least Privilege:** Rules must permit only the minimum traffic flows required for documented business or operational functions. Broad or wildcard rules are prohibited without documented risk acceptance.
- **Application Awareness:** Firewalls at Tier 0 and Tier 1 boundaries must be next-generation firewalls (NGFW) capable of application-layer inspection. Port-based rules alone are insufficient for these boundaries.
- **Statefulness:** All firewalls protecting NCII zones must be stateful. Stateless ACLs are not permitted as the primary boundary control for NCII zones.
- **Rule Expiry:** All firewall rules must have a defined review date. Temporary rules must have a mandatory expiry date not exceeding [30/60/90] days.
- **Logging:** All traffic traversing NCII zone boundaries must be logged. Logging must be forwarded to the organisation's centralised SIEM within [define timeframe].

### 5.2 Firewall Architecture Requirements

#### 5.2.1 Physical and Logical Separation of Firewall Functions

*Describe the required firewall architecture for the organisation, including the placement and function of each firewall tier.*

| Firewall Tier | Placement | Function | Minimum Capability |
|---|---|---|---|
| Internet Edge Firewall | Between Tier 5 (External) and Tier 4 (DMZ) | Controls all inbound and outbound internet traffic | NGFW with IPS, threat intelligence feeds |
| Internal Segmentation Firewall (ISF) | Between Tier 4 (DMZ) and Tier 2/3 (Internal) | Prevents lateral movement from DMZ to internal | NGFW with application inspection |
| NCII Boundary Firewall | Between Tier 2 (Internal Services) and Tier 1 (NCII Operational) | Enforces strict NCII zone isolation | NGFW with deep packet inspection, encrypted traffic inspection |
| NCII Core Firewall | Between Tier 1 and Tier 0 (NCII Core) | Maximum restriction for highest-criticality assets | NGFW with full application and user identity awareness |
| OT Boundary Firewall | Between IT and OT/ICS Zone | Enforces IT/OT separation | OT-aware firewall or data diode |

#### 5.2.2 High Availability

All firewalls protecting NCII zone boundaries must be deployed in a high availability (HA) configuration to avoid becoming a single point of failure. The following minimum requirements apply:

- Active-passive or active-active HA cluster with automated failover
- Failover time must not exceed [define threshold, e.g., 30 seconds]
- HA configuration must be tested at minimum [annually/semi-annually]
- HA test results must be documented and retained

### 5.3 Firewall Rule Governance

#### 5.3.1 Rule Request and Approval

*All changes to firewall rules protecting NCII zone boundaries must follow the Firewall Change Management Procedure [Document ID]. This section defines the minimum approval requirements.*

| Zone Boundary | Minimum Approvers |
|---|---|
| Tier 0 boundary rules | CISO + Network Architecture Owner + [define] |
| Tier 1 boundary rules | Network Architecture Owner + Security Operations Manager |
| Tier 2/3 boundary rules | Network Architecture Owner or delegate |
| Tier 4 (DMZ) boundary rules | Security Operations Manager or delegate |
| OT boundary rules | OT/ICS System Owner + Network Architecture Owner |

#### 5.3.2 Rule Documentation Requirements

Every active firewall rule must be documented with the following attributes at minimum:

| Attribute | Description |
|---|---|
| Rule ID | Unique identifier for the rule |
| Rule Name | Descriptive name indicating purpose |
| Source Zone | The originating network zone |
| Destination Zone | The target network zone |
| Source Address/Range | Specific source IP address or range |
| Destination Address/Range | Specific destination IP or range |
| Protocol and Port | Permitted protocol(s) and port(s) |
| Action | PERMIT or DENY |
| Business Justification | Documented business or operational requirement |
| Requested By | Name and role of requestor |
| Approved By | Name and role of approver(s) |
| Approval Date | Date of approval |
| Review/Expiry Date | Date the rule must next be reviewed |
| Status | Active, Expired, Pending Review |

#### 5.3.3 Firewall Rule Review

- All firewall rules protecting NCII zone boundaries must be reviewed at minimum **every [6/12] months**
- Rules that have not been actively used within [90/180] days must be reviewed and either renewed with fresh justification or removed
- Unused rules must be removed or disabled within [30] days of identification
- Review outcomes must be documented and retained for audit purposes

### 5.4 Prohibited Firewall Configurations

The following configurations are expressly prohibited on firewalls protecting NCII zone boundaries:

- **ANY/ANY rules** — Rules permitting all sources or all destinations are prohibited
- **Management traffic over production interfaces** — Out-of-band management is mandatory for NCII boundary firewalls
- **Unauthenticated remote management** — All remote management sessions must be authenticated with multi-factor authentication
- **Disabled logging** — Logging must never be disabled on NCII boundary firewall rules
- **Firewall policy backup to untrusted storage** — Configuration backups must be encrypted and stored within a trusted, access-controlled repository
- **Shared administrative credentials** — All administrative access must use individual, named accounts

---

## 6. Micro-Segmentation Guidelines

*This section provides mandatory requirements and guidelines for implementing micro-segmentation within NCII zones. Micro-segmentation extends segmentation controls beyond traditional perimeter firewalls to enforce access control at the individual workload or application level, limiting lateral movement within a zone.*

### 6.1 Applicability

Micro-segmentation controls are mandatory for all systems within Tier 0 and Tier 1 (NCII Core and NCII Operational zones). Micro-segmentation is strongly recommended for Tier 2 (Internal Services) and must be applied to any Tier 2 systems that:

- Store or process NCII data
- Provide authentication or identity services
- Host privileged management interfaces

### 6.2 Micro-Segmentation Architecture

*Authors should describe the micro-segmentation technology approach adopted by the organisation and map it to the NCII zones. Include the technology platform(s) used.*

| Technology Approach | Description | Applicable Zones |
|---|---|---|
| **Host-based firewall / endpoint segmentation agent** | Enforces allow-list policy at each individual server or workload based on identity and purpose | Tier 0, Tier 1, Tier 2 |
| **Software-defined networking (SDN) micro-segmentation** | Policy enforcement via SDN controller; traffic flows are defined per workload pair | [Define applicable zones] |
| **Hypervisor-level segmentation** | Segmentation enforced at the hypervisor layer for virtualised NCII workloads | [Define applicable zones] |
| **Container network policies** | Kubernetes NetworkPolicy or equivalent for containerised NCII workloads | [Define applicable zones] |

### 6.3 Micro-Segmentation Policy Requirements

#### 6.3.1 Policy Design Principles

- **Workload Identity:** Policies must be based on verified workload identity (e.g., cryptographic identity, service account, workload label), not solely on IP address
- **Allow-List Approach:** All intra-zone communication flows must be explicitly permitted; all other traffic is implicitly denied
- **Minimum Required Flows:** Only communication flows required for documented application functionality are permitted
- **East-West Traffic Inspection:** Where technically feasible, east-west traffic between NCII workloads must be inspected

#### 6.3.2 Micro-Segmentation Policy Documentation

*Authors must maintain a micro-segmentation policy register. This register documents all approved communication flows between NCII workloads.*

| Flow ID | Source Workload | Destination Workload | Protocol/Port | Business Justification | Approved By | Review Date |
|---|---|---|---|---|---|---|
| [ID] | [Workload Name] | [Workload Name] | [Protocol/Port] | [Justification] | [Approver] | [Date] |
| [ID] | [Workload Name] | [Workload Name] | [Protocol/Port] | [Justification] | [Approver] | [Date] |

#### 6.3.3 Policy Lifecycle

- Micro-segmentation policies must be reviewed whenever a significant change to an NCII application or system is made
- All policies must be subject to a full review at minimum **annually**
- Orphaned policies (associated with decommissioned workloads) must be removed within [30] days of workload decommission

### 6.4 Zero Trust Integration

*This section describes how the organisation's micro-segmentation approach aligns with and supports its Zero Trust architecture roadmap.*

[Organization Name]'s micro-segmentation implementation supports the adoption of Zero Trust Network Access (ZTNA) principles for NCII systems. The following controls underpin the Zero Trust posture:

- **Continuous verification:** Authentication and authorisation are validated at each access request, not assumed based on network location
- **Device posture assessment:** Access to NCII workloads requires the requesting device to meet defined security posture criteria, verified at connection time
- **Session-based access:** Access grants are scoped to individual sessions, not persistent network-level trusts
- **Comprehensive logging:** All access events are logged and forwarded to SIEM for real-time and retrospective analysis

---

## 7. DMZ Architecture

*This section defines the mandatory requirements for the design, configuration, and management of the Demilitarised Zone (DMZ) used to host services accessible from external networks or third parties. The DMZ provides a controlled buffer between untrusted external networks and the internal NCII environment.*

### 7.1 DMZ Design Principles

- The DMZ must be a dedicated network zone — no NCII Core or NCII Operational assets may reside in the DMZ
- The DMZ must be bounded on both sides by firewalls; a single firewall with two interfaces on different VLANs does not satisfy this requirement for NCII environments
- Direct communication between the DMZ and Tier 0 or Tier 1 zones is prohibited
- All communications from the DMZ to internal zones must traverse a minimum of one firewall tier
- Sensitive data (including NCII data) must not be stored in the DMZ; where temporary processing is required, data must be encrypted at rest and purged after processing

### 7.2 DMZ Segmentation

*Authors should define the DMZ segments used by the organisation. Multiple DMZ segments should be defined where services have significantly different trust levels or external audiences.*

| DMZ Segment | Hosted Services | External Facing | Inbound Access From | Outbound Access To |
|---|---|---|---|---|
| **Public DMZ** | [e.g., Public web portals, internet-facing APIs, reverse proxies] | Yes (Internet) | Internet (controlled inbound) | Internal Services Tier 2 via ISF only |
| **Partner/B2B DMZ** | [e.g., Partner API gateways, inter-bank connectivity, RENTAS/SWIFT gateways] | Yes (Dedicated links) | [Define partner networks] | [Define permitted internal destinations] |
| **Management DMZ** | [e.g., Jump servers, bastion hosts, remote access gateways] | No | VPN/MFA-authenticated internal only | [Define permitted internal targets] |
| **[Additional Segment]** | [Services] | [Yes/No] | [Sources] | [Destinations] |

### 7.3 DMZ Security Controls

The following minimum security controls must be applied to all DMZ hosted systems:

| Control Category | Requirement |
|---|---|
| **Patch Management** | DMZ systems must be patched on a [monthly/quarterly] cycle. Critical vulnerabilities must be remediated within [7/14/30] days of disclosure |
| **Hardening** | All DMZ systems must be configured according to an approved hardening baseline (e.g., CIS Benchmark) |
| **Service Limitation** | Only services required for the system's designated function are permitted. All unnecessary ports, protocols, and services must be disabled |
| **Web Application Firewall** | A WAF must be deployed in front of all internet-facing web applications and APIs hosted in the DMZ |
| **DDoS Protection** | Internet-facing DMZ services must be protected by DDoS mitigation controls appropriate to the service's criticality |
| **Intrusion Detection** | IDS/IPS must be deployed and actively monitored for all DMZ segments |
| **Log Management** | All DMZ system logs must be forwarded to the centralised SIEM in real time |
| **Vulnerability Scanning** | DMZ systems must be subject to automated vulnerability scanning at minimum [monthly]. External penetration testing must be conducted [annually] |
| **Administrative Access** | Administrative access to DMZ systems must be via the Management DMZ jump server only. Direct inbound administrative access from the internet is prohibited |

### 7.4 DMZ-to-Internal Communication Controls

*Define the approved mechanisms for passing data between the DMZ and internal systems. Authors should specify the technology and the approved data flows.*

| Communication Pattern | Approved Mechanism | Permitted For |
|---|---|---|
| **Database access from DMZ** | Connection via internal database proxy/API — direct database connections from DMZ to internal database servers are prohibited | [Define approved use cases] |
| **File transfer from DMZ to internal** | Controlled via SFTP server in the Internal Services zone or via a dedicated file transfer gateway | [Define approved use cases] |
| **API calls from DMZ to internal** | Via an internal API gateway in the Internal Services zone — DMZ services must not directly call NCII Operational services | [Define approved use cases] |
| **Reverse proxy to internal application** | Reverse proxy in DMZ terminates external TLS; re-encrypts to internal application server | [Define approved use cases] |

---

## 8. IT/OT Network Separation

*This section defines mandatory requirements for the separation of Information Technology (IT) and Operational Technology (OT) networks within [Organization Name]'s NCII environment. Authors should complete this section if the organisation operates industrial control systems, SCADA infrastructure, building management systems, or other OT systems.*

### 8.1 Applicability

*Confirm whether this section applies to the organisation and identify the OT systems in scope.*

This section applies to [Organization Name]'s operation of the following OT/ICS systems, which are designated as NCII or which have connectivity to NCII systems:

| OT System | System Type | Classification | Zone |
|---|---|---|---|
| [System Name] | [SCADA / ICS / BMS / PLC / RTU] | [NCII / Non-NCII] | OT/ICS Zone |
| [System Name] | [Type] | [Classification] | [Zone] |

### 8.2 IT/OT Separation Architecture

#### 8.2.1 Mandatory Separation Principles

- OT/ICS networks must be logically or physically separated from all IT networks, including NCII IT zones
- No uncontrolled data flows between IT and OT networks are permitted
- The OT network must operate with an **air gap or dedicated unidirectional data gateway** as the primary boundary control; bidirectional IP connectivity between IT and OT is a high-risk configuration requiring documented risk acceptance approved by the CISO and OT System Owner
- Remote access to OT systems from IT networks must traverse a dedicated, monitored jump server and must require multi-factor authentication

#### 8.2.2 Purdue Model Reference Architecture

*Authors should map the organisation's OT/ICS architecture to the Purdue Model levels and document the security controls applied at each inter-level boundary.*

| Purdue Level | Description | Systems Hosted | Boundary Controls |
|---|---|---|---|
| **Level 0** | Physical Process | [Sensors, actuators, physical plant equipment] | Physical access controls |
| **Level 1** | Intelligent Devices | [PLCs, RTUs, DCS controllers] | Physical isolation, no IP network connectivity where possible |
| **Level 2** | Control Systems | [HMI, SCADA servers, engineering workstations] | Dedicated OT LAN, no IT connectivity |
| **Level 3** | Site Operations | [OT historian, production scheduling, batch management] | OT boundary firewall — controlled access from Level 3.5 |
| **Level 3.5** | IT/OT DMZ | [Data diode server, OT proxy, secure file transfer gateway] | OT boundary firewall + ISA/IEC 62443 controls |
| **Level 4** | Site Business Planning | [IT systems that consume OT data — ERP integration, reporting] | IT network, controlled access via Level 3.5 |

#### 8.2.3 Unidirectional Data Gateways and Data Diodes

Where OT data must flow to IT systems (e.g., for reporting, analytics, or integration with business systems), [Organization Name] must implement a unidirectional data gateway (data diode) to ensure that data can only flow from OT to IT and not in the reverse direction. The following requirements apply:

- Data diodes must be hardware-enforced, not software-only implementations
- Data diode deployment must be reviewed and approved by the CISO and OT System Owner
- Data classification must be applied to all data passed through the data diode
- Logging of all data transfers through the gateway must be enabled and forwarded to SIEM

### 8.3 OT-Specific Security Controls

| Control Area | Requirement |
|---|---|
| **Asset Inventory** | A complete and current inventory of all OT/ICS devices must be maintained, including firmware versions and communication protocols used |
| **Patch Management** | OT systems must follow a vendor-approved patch cycle. Where patches cannot be applied due to operational constraints, compensating controls must be documented and approved |
| **Protocol Restrictions** | Only OT-appropriate protocols (e.g., Modbus, DNP3, IEC 61850, OPC-UA) are permitted on OT networks. General IT protocols must not traverse OT network segments without specific justification |
| **Removable Media** | The use of removable media (USB drives, portable storage) on OT systems is prohibited without specific operational justification, approval, and malware scanning |
| **Third-Party/Vendor Access** | Remote access by OT vendors must be via the dedicated jump server with session recording enabled. Persistent vendor VPN connections to OT networks are prohibited |
| **OT-Specific IDS** | An OT-aware intrusion detection system capable of parsing OT protocols must be deployed and actively monitored |
| **Change Control** | All changes to OT systems and OT network configurations must follow a change management process that includes OT System Owner approval |

### 8.4 IT/OT Interface Register

*Authors must maintain a register of all approved interfaces between IT and OT networks. Any unlisted interface is considered unauthorised and must be removed.*

| Interface ID | IT System | OT System | Direction | Protocol/Port | Purpose | Boundary Control | Approved By | Review Date |
|---|---|---|---|---|---|---|---|---|
| [ID] | [IT System] | [OT System] | IT → OT / OT → IT | [Protocol] | [Purpose] | [Control] | [Approver] | [Date] |

---

## 9. Network Access Control (NAC)

*This section defines mandatory requirements for Network Access Control (NAC) implementation to ensure that only compliant, authorised devices are permitted to connect to network zones containing NCII systems.*

### 9.1 NAC Policy Principles

[Organization Name] requires NAC controls to be applied to all networks where endpoints may connect and gain access to NCII systems. The following principles govern NAC implementation:

- **Pre-admission control:** Device identity and posture compliance must be assessed before network access is granted
- **Post-admission enforcement:** Devices that fail post-admission posture checks must be automatically quarantined or have access restricted
- **Visibility:** All devices connected to [Organization Name] networks must be visible and inventoried in real time
- **Zero-trust alignment:** NAC controls must support the principle that network location does not inherently establish trust

### 9.2 NAC Scope

| Network Segment | NAC Requirement |
|---|---|
| General Enterprise (Tier 3) — Wired | Mandatory — 802.1X authentication |
| General Enterprise (Tier 3) — Wireless | Mandatory — 802.1X or certificate-based authentication |
| Internal Services (Tier 2) | Mandatory — Certificate-based device authentication |
| NCII Zones (Tier 0/1) | Mandatory — Certificate-based mutual authentication; device must be a managed, inventoried asset |
| OT/ICS Zone | NAC appropriate to OT constraints; all devices must be inventoried and only approved devices permitted |
| Guest/External Network | Isolated VLAN with internet-only access; no access to any NCII or corporate zone |

### 9.3 Device Authentication Requirements

*This section defines how devices must authenticate to the network. Authors should document the technologies deployed.*

| Authentication Method | Applicable Zones | Technology Used |
|---|---|---|
| **IEEE 802.1X (EAP-TLS)** | Tier 2, 3, NCII zones | [NAC Platform, e.g., Cisco ISE / Aruba ClearPass] |
| **Certificate-based (machine certificate)** | Tier 1, 2 | [PKI Platform] |
| **MAC Authentication Bypass (MAB)** | OT/ICS devices that do not support 802.1X | Limited to pre-approved device list |
| **[Other Method]** | [Zone] | [Platform] |

### 9.4 Device Posture Assessment

Before network access is granted to any zone with NCII connectivity, the following device posture attributes must be assessed:

| Posture Attribute | Requirement | Zones |
|---|---|---|
| **Device Registration** | Device must be registered in the corporate asset inventory | All zones |
| **Operating System Version** | OS must be within supported version range | Tier 1, 2, 3 |
| **Patch Status** | Critical and high patches must be applied within policy timeframes | Tier 1, 2, 3 |
| **Endpoint Protection** | Approved endpoint detection and response (EDR) agent must be installed and active | Tier 1, 2, 3 |
| **Disk Encryption** | Full-disk encryption must be enabled | Tier 1, 2 |
| **Domain Membership** | Device must be a member of the corporate directory | Tier 1, 2, 3 |
| **Screen Lock / Auto-lock** | Device must have screen lock configured within policy requirements | All zones |

### 9.5 Non-Compliant Device Handling

| Posture State | Automated Response | Notification |
|---|---|---|
| **Compliant** | Full network access granted per zone policy | None |
| **Partially compliant (minor)** | Access granted with time-bound remediation window; access revoked if not remediated within [define period] | Alert to device owner and IT Service Desk |
| **Non-compliant (critical)** | Device quarantined to remediation VLAN with access to patch and AV update sources only | Alert to Security Operations Centre (SOC) and device owner |
| **Unknown/unregistered device** | Access denied; device placed in quarantine VLAN pending investigation | Alert to SOC |
| **OT device (MAB)** | Access restricted to OT VLAN only per pre-approved device list | Alert if device is not on approved list |

### 9.6 Guest and Third-Party Network Access

- Guest networks must be isolated in a dedicated VLAN with no connectivity to any corporate or NCII network
- Third-party and vendor remote access must use an approved VPN gateway with MFA enforcement
- Vendor access to NCII systems must be via a session-recorded jump server
- Temporary network access for third parties must be approved by the system owner, scoped to the minimum required network zones, and subject to a defined expiry period not exceeding [30/90] days
- All third-party access must be logged and forwarded to SIEM

---

## 10. Roles and Responsibilities

*This section defines the accountability and responsibility structure for network segmentation controls. Authors should map these roles to specific position titles within [Organization Name]'s organisational structure.*

### 10.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Network Architecture Owner | Security Operations Manager | OT System Owner | IT Operations | System Owner | Internal Audit |
|---|---|---|---|---|---|---|---|
| Approve this standard and periodic updates | A | R | C | C | I | I | I |
| Maintain NCII zone definitions and zone register | C | A/R | C | C (OT zones) | R | C | I |
| Design and review firewall architecture | A | R | C | C (OT) | C | I | I |
| Approve Tier 0/1 firewall rule changes | A | R | C | — | I | C | I |
| Conduct firewall rule reviews | C | A | R | R (OT) | R | C | I |
| Implement and maintain micro-segmentation policies | C | A | R | C (OT) | R | I | I |
| Design and maintain DMZ architecture | A | R | C | — | C | C | I |
| Approve IT/OT interface register entries | A | C | C | R | C | — | I |
| Manage NAC platform and policies | C | A | R | — | R | I | I |
| Monitor network security events | I | C | A/R | R (OT events) | C | I | I |
| Conduct annual compliance review | A | R | R | R (OT) | C | C | R |
| Report NCII incidents to NACSA | A | C | R | R (OT) | C | C | I |
| Manage exceptions and waivers | A | R | C | C (OT) | C | C | I |

### 10.2 Role Descriptions

| Role | Responsibilities under this Standard |
|---|---|
| **Chief Information Security Officer (CISO)** | Ultimate accountability for the implementation and effectiveness of this standard. Approves significant architectural decisions, exceptions, and waivers. Reports NCII compliance status to the Board Risk Committee. |
| **Network Architecture Owner** | Owns this standard. Responsible for network zone design, firewall architecture, and DMZ architecture. Approves all changes to NCII boundary controls. Maintains the zone register and firewall rule register. |
| **Security Operations Manager** | Responsible for day-to-day monitoring of network security events, firewall rule reviews, NAC operations, and incident response. Escalates potential NCII incidents to the CISO. |
| **OT System Owner** | Accountable for the security of OT/ICS systems. Co-responsible for the IT/OT interface register and OT zone security controls. Must be consulted on any changes affecting OT network boundaries. |
| **IT Operations** | Responsible for implementing and maintaining network segmentation controls in accordance with this standard and approved architectural designs. Executes approved firewall rule changes. |
| **System Owner** | Accountable for systems within their portfolio. Must ensure that system changes that affect network flows are raised through the change management process. Consults with Network Architecture on zone placement of new systems. |
| **Internal Audit** | Independently assesses compliance with this standard as part of the annual audit cycle. Reports findings to the Audit Committee. |

---

## 11. Compliance Monitoring and Assurance

### 11.1 Continuous Monitoring

*Describe the automated and manual monitoring activities that provide ongoing assurance of compliance with this standard.*

| Monitoring Activity | Frequency | Responsible | Tool/Method |
|---|---|---|---|
| Firewall rule utilisation review | [Monthly] | Security Operations | [Firewall management platform] |
| Network traffic anomaly detection | Continuous | Security Operations (SOC) | [SIEM / NDR tool] |
| Unauthorised device detection (NAC) | Continuous | Security Operations | [NAC platform] |
| Inter-zone traffic flow analysis | [Monthly] | Network Architecture | [NetFlow analysis tool] |
| OT network anomaly monitoring | Continuous | OT System Owner / SOC | [OT IDS platform] |
| Firewall configuration drift detection | [Weekly] | Security Operations | [Configuration management tool] |

### 11.2 Periodic Assurance Activities

| Assurance Activity | Frequency | Responsible | Output |
|---|---|---|---|
| Network segmentation audit (internal) | Annual | Internal Audit | Audit report |
| Firewall penetration test | Annual | [Internal / External party] | Penetration test report |
| NCII zone architecture review | Annual | Network Architecture | Architecture review report |
| IT/OT interface register review | Annual | OT System Owner + Network Architecture | Updated register |
| Micro-segmentation policy review | Annual | Security Operations | Updated policy register |
| NAC posture rule review | [Semi-annual] | Security Operations | Updated NAC policy |
| Tabletop exercise (network breach scenario) | Annual | CISO + Security Operations | Exercise report |

### 11.3 Key Performance Indicators

*Authors should define measurable KPIs to track the effectiveness of network segmentation controls. Target values should be calibrated to the organisation's risk appetite.*

| KPI | Description | Target | Measurement Method |
|---|---|---|---|
| Firewall rule review coverage | % of firewall rules reviewed within the required review period | ≥ 95% | Firewall management platform |
| Orphaned rule removal | % of identified orphaned rules removed within SLA | 100% | Firewall rule register |
| NAC compliance rate | % of managed devices that are fully NAC-compliant | ≥ 98% | NAC platform |
| Unauthorised device detection response time | Time from detection of unauthorised device to quarantine action | ≤ [define, e.g., 15 minutes] | SOC incident log |
| Micro-segmentation policy coverage | % of NCII Tier 0/1 workloads with micro-segmentation policy applied | 100% | Micro-segmentation platform |
| Firewall patch currency | % of NCII boundary firewalls running within supported firmware versions | 100% | Vulnerability management platform |

### 11.4 Non-Compliance Handling

- Instances of non-compliance with this standard must be raised as a finding in [Organization Name]'s risk register
- Non-compliance affecting NCII systems must be escalated to the CISO within [define period, e.g., 24 hours]
- Where non-compliance constitutes or may constitute a reportable cyber security incident under Act 854, the incident reporting process must be initiated immediately
- Remediation plans for non-compliance findings must be agreed within [30] days of identification and tracked to closure

---

## 12. Exceptions and Waivers

*This section defines the process for managing exceptions to the requirements of this standard. Exceptions should be rare and must be risk-justified.*

### 12.1 Exception Process

Any exception to the requirements of this standard must be:

1. Submitted in writing using the Exception Request Form ([Document ID])
2. Documented with a clear description of the requirement that cannot be met and the reason
3. Supported by a documented risk assessment identifying the residual risk
4. Accompanied by proposed compensating controls that mitigate the residual risk to an acceptable level
5. Approved by the CISO (for Tier 0/1 exceptions) or Network Architecture Owner (for Tier 2/3 exceptions)
6. Time-limited — exceptions must not be granted for an indefinite period

### 12.2 Exception Register

*Authors must maintain a live exception register. All active exceptions must be reviewed at the time of this standard's annual review.*

| Exception ID | Requirement Excepted | Justification | Risk Assessment | Compensating Controls | Approved By | Approval Date | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| [ID] | [Requirement] | [Justification] | [Risk level] | [Controls] | [Approver] | [Date] | [Date] | Active |

### 12.3 OT-Specific Exception Considerations

*Recognising that OT environments may have operational constraints that prevent compliance with certain IT-oriented security controls, exceptions for OT systems must additionally:*

- Be reviewed and supported by the OT System Owner
- Identify the operational constraint (e.g., legacy protocol, availability requirement, vendor support limitation)
- Define compensating controls appropriate to the OT context (e.g., enhanced physical access controls, OT-specific monitoring, network isolation)

---

## 13. Review and Approval

### 13.1 Review Schedule

This standard must be reviewed:

- **Annually** at minimum, in accordance with [Organization Name]'s policy review cycle
- **Upon material change** to the organisation's NCII environment, network architecture, or regulatory requirements
- **Following a significant security incident** that reveals a gap in network segmentation controls
- **Upon issuance of new NACSA codes of practice, standards, or directions** that affect network segmentation requirements

### 13.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release |
| [x.x] | [Date] | [Author Name, Title] | [Summary of changes made] |
| [x.x] | [Date] | [Author Name, Title] | [Summary of changes made] |

### 13.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Architecture Owner | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Technology Officer (CTO) / Head of IT | [Name] | [Signature] | [Date] |
| OT System Owner (where applicable) | [Name] | [Signature] | [Date] |
| [Additional Approver as required] | [Name] | [Signature] | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), s18** | Duties of NCII entity to comply with codes of practice, standards, and directions issued by the Chief Executive of NACSA |
| **Cyber Security Act 2024 (Act 854), s24** | Obligations of NCII entities to protect NCII systems and implement appropriate cyber security measures |
| **[NACSA Code of Practice — Reference]** | [Description of applicable code of practice] |
| **[NACSA Baseline Security Standard — Reference]** | [Description] |
| **[NACSA Sector Specific Direction — Reference]** | [Description] |
| **Risk Management in Technology (RMiT) Policy (BNM)** | Technology risk management requirements for financial institutions in Malaysia — relevant to network security and system resilience |
| **Personal Data Protection Act 2010 (PDPA)** | Requirements for the protection of personal data through appropriate technical and organisational measures |

### 14.2 Industry Standards and Frameworks

| Standard / Framework | Reference | Relevance |
|---|---|---|
| ISA/IEC 62443 | Security for Industrial Automation and Control Systems | IT/OT separation, OT zone design, SCADA security |
| NIST SP 800-82 | Guide to Industrial Control Systems (ICS) Security | OT/ICS security guidance |
| NIST SP 800-41 | Guidelines on Firewalls and Firewall Policy | Firewall rule management |
| NIST SP 800-125B | Secure Virtual Network Configuration for Virtual Machine (VM) Protection | Micro-segmentation and virtual network security |
| CIS Controls v8 | Center for Internet Security Controls | Network segmentation (Control 12), Boundary defence |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A.8.22 Segregation of networks |
| NIST Cybersecurity Framework (CSF) 2.0 | Identify, Protect, Detect, Respond, Recover | Framework alignment for NCII protection |
| Purdue Enterprise Reference Architecture | Industrial network architecture reference model | IT/OT segmentation design |

### 14.3 Internal References

| Document | Document ID |
|---|---|
| Information Security Policy | [Doc ID] |
| NCII Cyber Security Policy | [Doc ID] |
| Firewall Change Management Procedure | [Doc ID] |
| Network Access Request Procedure | [Doc ID] |
| Incident Response Plan | [Doc ID] |
| NCII Incident Reporting Procedure (NACSA) | [Doc ID] |
| Risk Management Policy | [Doc ID] |
| Vulnerability Management Standard | [Doc ID] |
| Asset Management Standard | [Doc ID] |

---

## 15. Appendices

### Appendix A — NCII Zone Register (Live)

*This appendix contains the current, authoritative version of the NCII Zone Register. This register must be maintained by the Network Architecture Owner and updated whenever zones are created, modified, or decommissioned. The register is a controlled document.*

*Refer to: [Zone Register — Controlled Document Location / System of Record]*

| Zone Name | Tier | Classification | VLAN ID(s) | IP Range(s) | Zone Owner | Created | Last Updated | Status |
|---|---|---|---|---|---|---|---|---|
| [Zone Name] | [Tier] | [Classification] | [VLAN] | [Range] | [Owner] | [Date] | [Date] | Active |

---

### Appendix B — Firewall Rule Register (Reference)

*This appendix provides a reference to the live Firewall Rule Register maintained in [Organization Name]'s network management platform. The register must be accessible to Internal Audit and NACSA-authorised assessors upon request.*

*Refer to: [Firewall Rule Register — Controlled Document / System Location]*

*Minimum attributes to be maintained per rule are defined in Section 5.3.2 of this standard.*

---

### Appendix C — IT/OT Interface Register

*This appendix contains the authoritative register of all approved interfaces between IT and OT/ICS networks. Any interface not listed in this register is considered unauthorised. This register must be reviewed and updated at minimum annually.*

| Interface ID | IT System | IT Zone | OT System | OT Zone | Direction | Protocol / Port | Business Purpose | Boundary Control | Approval Date | Approved By | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [ID] | [System] | [Zone] | [System] | [Zone] | [Direction] | [Protocol] | [Purpose] | [Control] | [Date] | [Approver] | [Date] | Active |

---

### Appendix D — Micro-Segmentation Policy Register

*This appendix contains the authoritative register of all approved micro-segmentation communication flows for NCII Tier 0 and Tier 1 workloads.*

*Refer to: [Micro-Segmentation Policy Register — Controlled Document / Platform]*

| Flow ID | Source Workload | Source Zone | Destination Workload | Destination Zone | Protocol / Port | Business Justification | Enforcement Mechanism | Approved By | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Workload] | [Zone] | [Workload] | [Zone] | [Protocol] | [Justification] | [Mechanism] | [Approver] | [Date] |

---

### Appendix E — Exception Register

*This appendix contains the current register of all approved exceptions to this standard. All exceptions must be reviewed annually.*

*Refer to: [Exception Register — Controlled Document Location]*

| Exception ID | Standard Requirement | Affected Zone / System | Justification | Residual Risk Rating | Compensating Controls | Approved By | Approval Date | Expiry Date | Review Status |
|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Requirement ref] | [Zone/System] | [Justification] | [High/Med/Low] | [Controls] | [Approver] | [Date] | [Date] | Active |

---

### Appendix F — Glossary of Network Protocols and Technologies

*This appendix provides a supplementary reference glossary of network protocols and segmentation technologies referenced in this standard.*

| Term | Full Name | Context |
|---|---|---|
| 802.1X | IEEE 802.1X Port-Based Network Access Control | Standard for NAC authentication |
| BGP | Border Gateway Protocol | Routing protocol — requires controlled use at NCII boundaries |
| DHCP | Dynamic Host Configuration Protocol | IP address assignment — must be segregated by zone |
| DNS | Domain Name System | Must be segregated; NCII systems must not use public DNS resolvers |
| EAP-TLS | Extensible Authentication Protocol — Transport Layer Security | Certificate-based 802.1X authentication method |
| IEC 61850 | Communication Networks and Systems for Power Utility Automation | OT protocol for power systems |
| Modbus/TCP | Modbus over TCP/IP | Common OT/ICS protocol |
| MPLS | Multiprotocol Label Switching | WAN technology — segmentation implications for multi-site NCII |
| OPC-UA | Open Platform Communications Unified Architecture | OT protocol for industrial automation |
| OSPF | Open Shortest Path First | Interior routing protocol — zone route leakage must be prevented |
| SDN | Software-Defined Networking | Technology enabling programmatic network control |
| VXLAN | Virtual Extensible LAN | Overlay network technology used in micro-segmentation |

---

### Appendix G — NACSA Incident Reporting Obligations Reference

*This appendix summarises the network-segmentation-related triggers that may give rise to a reportable cyber security incident under Act 854. Authors should cross-reference with [Organization Name]'s NCII Incident Reporting Procedure [Document ID] for the full reporting process.*

The following network security events must be assessed for reportability under Act 854 and applicable NACSA codes of practice:

- Detection of unauthorised lateral movement between NCII zones
- Compromise of a firewall or network segmentation control protecting an NCII zone boundary
- Detection of unauthorised connectivity between the OT/ICS zone and any IT network
- Discovery of an undocumented or unauthorised inter-zone interface
- Successful or attempted breach of the DMZ into an internal NCII zone
- Failure of NAC controls resulting in unauthorised device access to an NCII zone

*For each event type, the Security Operations Manager must assess: (1) whether the event constitutes a reportable incident, (2) the required notification timeframe under applicable NACSA instruments, and (3) the escalation path to the CISO for external reporting.*

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document Title** | Network Segmentation Standard |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Architecture |
| **Next Review Date** | [Next Review Date] |