# Security Architecture Review Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., NACSA-SAR-2024-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Security Architect |
| **Organization** | [Organization Name] |
| **System / Scope** | [NCII System Name or Scope Description] |
| **Last Review Date** | [DD Month YYYY] |
| **Next Review Date** | [DD Month YYYY] |
| **Approved By** | [Approved By — Name and Title] |
| **Department** | [Department Name] |
| **Contact** | [security.architect@organization.com.my] |

---

> **Handling Instructions:** This document is classified **Confidential**. It contains sensitive security architecture information pertaining to National Critical Information Infrastructure (NCII). Access is restricted to authorized personnel on a need-to-know basis. This document must not be reproduced, distributed, or disclosed externally without written authorization from [Organization Name]'s Chief Information Security Officer (CISO).

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Compliance Context](#3-regulatory-and-compliance-context)
4. [Architecture Overview and Diagrams](#4-architecture-overview-and-diagrams)
5. [Security Zone Assessment](#5-security-zone-assessment)
6. [Control Placement Analysis](#6-control-placement-analysis)
7. [Identified Weaknesses and Gaps](#7-identified-weaknesses-and-gaps)
8. [Improvement Recommendations](#8-improvement-recommendations)
9. [Alignment with Standards](#9-alignment-with-standards)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

*Provide a concise summary of the security architecture review, including the system reviewed, key findings, critical gaps, and the overall security posture rating. This section should be suitable for senior management and the Board Risk Committee.*

### 1.1 Review Overview

| Field | Details |
|---|---|
| **Review Period** | [Start Date] to [End Date] |
| **Review Lead** | [Name, Title] |
| **System(s) Reviewed** | [NCII System Name(s)] |
| **Review Type** | Annual Security Architecture Review |
| **Regulatory Driver** | Cyber Security Act 2024 (Act 854), ss. 18, 21 |
| **Overall Security Posture** | [e.g., Satisfactory / Requires Improvement / Critical Attention Required] |
| **Total Findings** | [Number] |
| **Critical Findings** | [Number] |
| **High Findings** | [Number] |
| **Medium Findings** | [Number] |
| **Low Findings** | [Number] |

### 1.2 Key Findings Summary

*Summarize the most significant findings from this review. List no more than five to seven critical or high-priority observations that require immediate senior management attention.*

- **Finding 1:** [Brief description of critical finding, e.g., "Absence of network segmentation between OT and IT environments in Sector X."]
- **Finding 2:** [Brief description of high finding.]
- **Finding 3:** [Brief description of high finding.]
- **Finding 4:** [Brief description of medium finding.]
- **Finding 5:** [Brief description of medium finding.]

### 1.3 Overall Security Posture Statement

*Provide a narrative security posture statement of two to three paragraphs summarizing the maturity of the current security architecture, areas of strength, and areas requiring investment or remediation.*

[Organization Name]'s security architecture for [NCII System Name] was reviewed during the period [Start Date] to [End Date] in accordance with obligations under Section 18 and Section 21 of the Cyber Security Act 2024 (Act 854). The review assessed the adequacy of security controls, architectural design principles, zone segmentation, and alignment with applicable national and international standards.

[Overall posture narrative paragraph — describe general findings, e.g., whether the architecture reflects a defence-in-depth approach, the maturity of controls, and whether the design supports resilience of NCII operations.]

[Summary of remediation priority — describe the urgency and overall remediation effort required, and any systemic or root-cause issues identified.]

### 1.4 Remediation Priority Summary

| Priority | Count | Target Remediation Period |
|---|---|---|
| Critical (P1) | [Number] | Within 30 days |
| High (P2) | [Number] | Within 60 days |
| Medium (P3) | [Number] | Within 90 days |
| Low (P4) | [Number] | Within 180 days |
| Informational | [Number] | At next annual review |

---

## 2. Purpose and Scope

### 2.1 Purpose

This Security Architecture Review Report documents the findings, analysis, and recommendations arising from the annual security architecture review conducted for [Organization Name]'s National Critical Information Infrastructure (NCII) systems. The review is conducted in fulfilment of obligations under the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 18** — which establishes obligations on NCII entities to implement and maintain security measures commensurate with the risk to critical systems; and
- **Section 21** — which requires NCII entities to conduct periodic security assessments and provide reports to the National Cyber Security Agency (NACSA).

The purpose of this report is to:

- Provide a structured assessment of the current security architecture of designated NCII systems.
- Identify architectural weaknesses, misconfigurations, and control gaps that may expose the organization to cyber threats.
- Evaluate the placement and effectiveness of security controls across architecture layers.
- Assess the degree of alignment with applicable national and international cybersecurity standards.
- Deliver actionable recommendations to improve the resilience, security, and compliance posture of [Organization Name]'s NCII systems.

### 2.2 Scope

*Define the precise boundaries of this review, including systems, networks, infrastructure components, geographic locations, and any explicit exclusions. Clarity of scope is critical for audit purposes.*

#### 2.2.1 In-Scope Systems and Components

| System / Component | System Type | Classification | Location |
|---|---|---|---|
| [System Name 1] | [e.g., Core Banking, SCADA, Payment Gateway] | [e.g., NCII Tier 1] | [e.g., Primary Data Centre, Cyberjaya] |
| [System Name 2] | [e.g., Identity and Access Management Platform] | [e.g., NCII Tier 2] | [e.g., Secondary Data Centre, Iskandar Puteri] |
| [System Name 3] | [e.g., Network Infrastructure — Core Layer] | [e.g., Supporting Infrastructure] | [e.g., HQ Network Operations Centre] |
| [System Name 4] | [Add rows as required] | | |

#### 2.2.2 In-Scope Architectural Domains

- Network architecture (core, distribution, access, DMZ, OT/ICS layers where applicable)
- Application architecture (web tier, application tier, data tier)
- Data architecture and data flow controls
- Identity and Access Management (IAM) architecture
- Cloud and hybrid infrastructure (if applicable)
- Endpoint and device architecture
- Third-party and supply chain integration points

#### 2.2.3 Explicit Exclusions

*List any systems, components, or domains intentionally excluded from this review and provide justification.*

| Excluded Item | Justification for Exclusion |
|---|---|
| [Excluded System / Component] | [e.g., Subject to a separate dedicated review scheduled for Q3 [Year]] |
| [Excluded System / Component] | [e.g., Managed entirely by a third-party vendor under a separate SLA and assessment regime] |
| [Excluded Domain] | [e.g., Physical security architecture is addressed under a separate Physical Security Review] |

#### 2.2.4 Review Period and Methodology

| Field | Detail |
|---|---|
| **Review Start Date** | [DD Month YYYY] |
| **Review End Date** | [DD Month YYYY] |
| **Methodology** | [e.g., Combination of architecture document review, stakeholder interviews, network diagram analysis, configuration sampling, and alignment mapping against NACSA, ISO/IEC 27001:2022, and NIST CSF 2.0] |
| **Previous Review Reference** | [Document ID of previous annual review, if applicable] |
| **Review Team** | [Names and roles of review team members] |

---

## 3. Regulatory and Compliance Context

### 3.1 Regulatory Framework

*Describe the regulatory environment governing NCII security architecture requirements in Malaysia. This section provides the compliance context for all findings and recommendations in this report.*

This review is governed primarily by the **Cyber Security Act 2024 (Act 854)**, which came into force on [Commencement Date as gazetted]. Act 854 establishes a comprehensive national cybersecurity governance framework administered by the **National Cyber Security Agency (NACSA)** under the Prime Minister's Department.

[Organization Name] has been designated as an **NCII entity** under [Sector, e.g., Financial Services Sector / Energy Sector / Water Sector] pursuant to Section [relevant section] of Act 854. As an NCII entity, [Organization Name] is subject to the obligations set out in Part [relevant Part] of Act 854 and to any directives, codes of practice, or standards issued by NACSA thereunder.

### 3.2 Applicable Statutory Provisions

| Provision | Description | Relevance to This Review |
|---|---|---|
| **Act 854, s. 18** | Duty of NCII entities to implement and maintain security measures | Requires [Organization Name] to ensure its NCII systems are protected by appropriate security measures, including architectural controls. This review assesses compliance with this duty. |
| **Act 854, s. 21** | Requirement to conduct and report on periodic security assessments | This report constitutes the annual security architecture review report required to demonstrate ongoing assessment of NCII system security. |
| **Act 854, s. [X]** | [Any additional applicable provision, e.g., incident reporting obligations, NACSA directives] | [Relevance description] |

### 3.3 Related Regulatory Instruments and Directives

| Instrument | Issuing Authority | Status | Relevance |
|---|---|---|---|
| NACSA NCII Cybersecurity Framework [Version] | NACSA | [e.g., Effective DD Month YYYY] | Primary reference framework for NCII security architecture requirements |
| [NACSA Directive / Code of Practice Title] | NACSA | [Status] | [Relevance] |
| Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document | BNM | Effective 1 January 2020 (as amended) | Applicable where [Organization Name] is a BNM-regulated financial institution; provides supplementary technology and cybersecurity architecture requirements |
| Personal Data Protection Act 2010 (Act 709) as amended by PDPA (Amendment) Act 2024 | Parliament of Malaysia | In force | Governs handling of personal data processed by systems in scope |
| ISO/IEC 27001:2022 | ISO/IEC | International Standard | Reference standard for information security management |
| NIST Cybersecurity Framework (CSF) 2.0 | NIST | 2024 | Reference framework for cybersecurity risk management |
| [Other applicable instrument] | [Issuing Authority] | [Status] | [Relevance] |

### 3.4 Compliance Obligations Summary

*Summarize the specific compliance obligations that this security architecture review is designed to address.*

- **Annual Review Obligation:** [Organization Name] is obligated to conduct a security architecture review of its NCII systems on an annual basis, as required under Act 854, s. 21.
- **Reporting Obligation:** The findings of this review are to be reported to NACSA within [timeframe, e.g., 30 days of completion] in accordance with applicable NACSA reporting requirements.
- **Remediation Obligation:** Material findings identified in this review must be remediated within the timeframes stipulated by NACSA or, where not specified, within the remediation targets set out in Section 8 of this report.
- **Board Oversight:** This report is to be tabled before the [Board Risk Committee / Technology Risk Committee] in accordance with [Organization Name]'s internal governance framework.

---

## 4. Architecture Overview and Diagrams

*This section provides a structured description of the current security architecture of the systems under review. It establishes the factual baseline against which security zones, control placement, and gaps are assessed in subsequent sections.*

### 4.1 System Context and Business Function

*Describe the business purpose and criticality of the systems under review. Explain why these systems are classified as NCII and what services or functions depend on them.*

[System Name(s)] provides [description of business function, e.g., "core payment processing services for [Organization Name]'s retail banking customers, processing an average of [X] million transactions per day with a peak transaction volume of [X] transactions per second"].

The system(s) support the following critical business functions:

| Business Function | Criticality | Dependent Stakeholders |
|---|---|---|
| [Function 1, e.g., Real-time Payment Processing] | [e.g., NCII Tier 1 — Mission Critical] | [e.g., Retail customers, merchant network, interbank settlement] |
| [Function 2, e.g., Customer Identity Verification] | [e.g., NCII Tier 1 — Mission Critical] | [e.g., All customer-facing channels] |
| [Function 3] | [e.g., NCII Tier 2 — Business Critical] | [e.g., Internal operations teams] |

**Recovery Objectives (as documented in the Business Continuity Plan):**

| Metric | Target |
|---|---|
| Recovery Time Objective (RTO) | [e.g., 4 hours] |
| Recovery Point Objective (RPO) | [e.g., 15 minutes] |
| Maximum Tolerable Downtime (MTD) | [e.g., 8 hours] |

### 4.2 Architecture Layers

*Describe each architectural layer in the system, from external-facing to internal. Each layer description should be accurate as of the review date.*

#### 4.2.1 External / Internet-Facing Layer

*Describe the components and connectivity at the external boundary of the architecture.*

- **External Connectivity:** [Describe internet connectivity, e.g., redundant internet uplinks via [ISP Name(s)], BGP-peered with [X] Gbps aggregate capacity]
- **External DNS:** [Describe DNS configuration, e.g., authoritative DNS hosted externally via [Provider]; internal DNS resolution via [Solution]]
- **CDN / DDoS Mitigation:** [Describe any CDN or DDoS scrubbing service in use, e.g., "Traffic is routed through [Provider] CDN with DDoS scrubbing capacity of [X] Gbps"]
- **External Endpoints:** [List external-facing services, e.g., Internet Banking Portal, Mobile API Gateway, SWIFT connectivity]

#### 4.2.2 Perimeter / DMZ Layer

*Describe the perimeter security layer, including firewalls, proxies, load balancers, and the DMZ architecture.*

- **Perimeter Firewalls:** [Describe, e.g., "Dual next-generation firewalls (NGFW) in active-passive high-availability configuration, vendor: [Vendor], model: [Model]"]
- **Web Application Firewall (WAF):** [Describe WAF deployment, e.g., "WAF deployed in inline mode protecting all external web applications; ruleset version [X]"]
- **Load Balancers:** [Describe load balancer configuration]
- **Reverse Proxies:** [Describe reverse proxy deployment]
- **DMZ Architecture:** [Describe DMZ segmentation, e.g., "Separate DMZ VLANs for web servers, API gateways, and partner connectivity zones"]

#### 4.2.3 Internal Network Layer

*Describe the internal network architecture, including core switching, routing, and segmentation design.*

- **Core Network:** [Describe core network, e.g., "Layer 3 switching core using [Vendor] [Model] with VRF-based segmentation across [X] VLANs"]
- **Internal Segmentation:** [Describe micro-segmentation or VLAN segmentation]
- **Routing Architecture:** [Describe routing protocols, e.g., OSPF, BGP for inter-DC routing]
- **WAN / MPLS Connectivity:** [Describe WAN connectivity to branches, data centres, or third parties]

#### 4.2.4 Application Layer

*Describe the application tier architecture, including web servers, application servers, API gateways, and middleware.*

- **Web / Presentation Tier:** [Describe web server infrastructure]
- **Application Tier:** [Describe application server infrastructure, e.g., microservices on Kubernetes, traditional three-tier]
- **API Gateway:** [Describe API management platform]
- **Message Queuing / Event Streaming:** [Describe, if applicable, e.g., Apache Kafka, RabbitMQ]
- **Integration Middleware:** [Describe ESB or integration platform, if applicable]

#### 4.2.5 Data Layer

*Describe the data tier architecture, including database platforms, data stores, and data replication.*

- **Primary Databases:** [Describe, e.g., "Oracle Database [Version] RAC cluster for core transactional data; PostgreSQL [Version] for supporting application data"]
- **Data Warehousing / Analytics:** [Describe if applicable]
- **Object / File Storage:** [Describe file storage and object storage platforms]
- **Data Replication:** [Describe DR replication architecture, e.g., "Synchronous replication to DR site; asynchronous replication for reporting replica"]
- **Database Activity Monitoring (DAM):** [Describe DAM tooling, if deployed]

#### 4.2.6 Management and Operations Layer

*Describe the out-of-band management network, monitoring infrastructure, and security operations platforms.*

- **Out-of-Band Management Network:** [Describe, e.g., "Dedicated management VLAN with separate firewall policy; IPMI/iDRAC access restricted to jump servers"]
- **Jump Servers / Bastion Hosts:** [Describe Privileged Access Workstation / jump server architecture]
- **SIEM:** [Describe SIEM platform, e.g., "Wazuh SIEM / IBM QRadar / Microsoft Sentinel; log retention period: [X] months"]
- **Network Monitoring:** [Describe NMS, e.g., Nagios, SolarWinds, PRTG]
- **Vulnerability Management:** [Describe vulnerability scanner platform]
- **Endpoint Detection and Response (EDR):** [Describe EDR platform]

#### 4.2.7 Cloud and Hybrid Components (If Applicable)

*If any components of the NCII system are hosted in public cloud or in a hybrid model, describe the cloud architecture and integration points.*

- **Cloud Provider(s):** [e.g., AWS, Microsoft Azure, Google Cloud, or local cloud providers such as Telekom Malaysia, Maxis, or others]
- **Cloud-Hosted Workloads:** [Describe what workloads are cloud-hosted]
- **Connectivity Model:** [e.g., ExpressRoute / Direct Connect / Site-to-Site VPN]
- **Cloud Security Controls:** [e.g., Cloud Security Posture Management (CSPM) tool deployed; cloud-native WAF; IAM configuration]
- **Data Residency:** [Confirm data residency requirements and compliance, particularly for Malaysian personal data under PDPA]

### 4.3 Architecture Diagrams

*Reference all architecture diagrams relevant to this review. Actual diagrams should be attached as appendices or embedded directly. At minimum, include a high-level logical architecture diagram, a network segmentation diagram, and a data flow diagram.*

| Diagram Reference | Description | Location |
|---|---|---|
| Diagram 4.3.1 | High-Level Logical Architecture — [System Name] | Appendix A |
| Diagram 4.3.2 | Network Segmentation and Zone Map | Appendix B |
| Diagram 4.3.3 | Data Flow Diagram — [Key Data Flow, e.g., Payment Processing] | Appendix C |
| Diagram 4.3.4 | Cloud Integration Architecture (if applicable) | Appendix D |
| Diagram 4.3.5 | Identity and Access Management Architecture | Appendix E |
| Diagram 4.3.6 | Disaster Recovery Architecture | Appendix F |

> **Note to Author:** All diagrams must reflect the state of the architecture **as at the review date**. Where diagrams are held in a separate repository (e.g., Confluence, SharePoint, or a design tool), include the URL and access path. Diagrams must be reviewed and signed off by the relevant system architect before inclusion.

### 4.4 Key Architecture Assumptions and Constraints

*Document any assumptions or constraints that affected the architecture design and that are relevant to interpreting the security architecture review findings.*

| ID | Assumption / Constraint | Impact on Security Architecture |
|---|---|---|
| A-01 | [e.g., Legacy core banking system does not support TLS 1.3] | [e.g., Requires compensating controls at the network perimeter to enforce encryption standards] |
| A-02 | [e.g., Third-party payment scheme mandates direct connectivity via dedicated leased line] | [e.g., Creates a fixed ingress point that must be controlled through strict ACLs and monitoring] |
| A-03 | [e.g., Regulatory requirement to maintain data within Malaysia limits cloud provider options] | [e.g., Cloud-native security services from global providers may have limited coverage] |
| A-04 | [Add additional assumptions as applicable] | |

---

## 5. Security Zone Assessment

*This section assesses the design and implementation of security zones within the architecture under review. Security zone segmentation is a foundational architectural control that limits the blast radius of security incidents and enforces the principle of least privilege at the network level.*

### 5.1 Security Zone Design Principles

*Describe the security zone design principles adopted by [Organization Name] and assess whether the current architecture adheres to them.*

[Organization Name]'s security architecture is designed to implement the following zone segmentation principles:

- **Defence in Depth:** Multiple layers of security controls are implemented such that no single control failure results in a complete compromise.
- **Least-Privilege Connectivity:** Inter-zone connectivity is permitted only as explicitly required by business function, and is denied by default.
- **Separation of Duties at the Network Level:** Sensitive systems (e.g., production databases, HSMs, payment processing engines) are isolated in dedicated zones with restricted access.
- **Separate Management Plane:** Administration and management traffic is logically separated from production data traffic.
- **Trust Levels:** Zones are assigned trust levels ranging from Untrusted (Internet) to Restricted (sensitive internal systems), and all inter-zone traffic traverses an enforcing control point.

*Assessment: Describe whether the implemented architecture adheres to these design principles, and identify where deviations exist.*

[Assessment narrative — e.g., "The review found that the zone design principles are generally reflected in the logical architecture. However, [specific deviations or weaknesses were identified], as detailed in the zone-by-zone assessment below."]

### 5.2 Security Zone Inventory

*Enumerate all security zones defined in the architecture. For each zone, assess its design, the sensitivity of assets hosted within it, and the adequacy of controls governing ingress and egress.*

| Zone ID | Zone Name | Trust Level | Assets Hosted | Network Range (VLAN / Subnet) | Zone Status |
|---|---|---|---|---|---|
| Z-01 | Internet / Untrusted Zone | Untrusted | External clients, internet | N/A (external) | [e.g., Adequate / Review Required] |
| Z-02 | External DMZ | Low Trust | Web servers, API Gateway, WAF, reverse proxies | [e.g., 10.0.1.0/24] | [Adequate / Review Required] |
| Z-03 | Partner / Third-Party Zone | Low-Medium Trust | [e.g., SWIFT connectivity, payment scheme links] | [e.g., 10.0.2.0/24] | [Adequate / Review Required] |
| Z-04 | Application Zone | Medium Trust | Application servers, middleware | [e.g., 10.0.10.0/24] | [Adequate / Review Required] |
| Z-05 | Database Zone | High Trust | Production databases, data stores | [e.g., 10.0.20.0/24] | [Adequate / Review Required] |
| Z-06 | Internal User Zone | Medium Trust | Staff workstations, corporate devices | [e.g., 10.0.30.0/24] | [Adequate / Review Required] |
| Z-07 | Management Zone | Restricted | Jump servers, management consoles, SIEM | [e.g., 10.0.100.0/24] | [Adequate / Review Required] |
| Z-08 | DR Zone | High Trust | DR replicas, standby systems | [e.g., 172.16.0.0/16] | [Adequate / Review Required] |
| Z-09 | [Additional Zone] | | | | |

### 5.3 Zone-by-Zone Assessment

*For each zone, provide a detailed assessment covering: the adequacy of zone definition and boundary enforcement, the controls governing zone ingress and egress, any weaknesses or misconfigurations identified, and findings raised.*

#### 5.3.1 External DMZ (Z-02)

**Zone Purpose:** [Describe the purpose of this zone within the architecture.]

**Assets Reviewed:**

- [List key assets reviewed within this zone]
- [e.g., Web Application Server Cluster — [Vendor/Product]]
- [e.g., API Gateway — [Vendor/Product]]

**Controls Assessed:**

| Control | Expected Implementation | Actual State | Assessment |
|---|---|---|---|
| Ingress firewall rules — Internet to DMZ | Permit only HTTPS (443) and DNS (53); deny all else | [Actual state, e.g., "Permit rules confirmed; legacy HTTP (80) redirect rule present"] | [e.g., Minor — redirect to HTTPS acceptable but should enforce HSTS] |
| Egress firewall rules — DMZ to Application Zone | Permit only defined application ports; deny all else | [Actual state] | [Assessment] |
| WAF deployment | Inline WAF enforcing OWASP CRS | [Actual state, e.g., "WAF deployed in detection mode only; not blocking"] | [e.g., High — WAF must be in blocking mode] |
| TLS configuration | TLS 1.2 minimum; TLS 1.3 preferred; no legacy ciphers | [Actual state] | [Assessment] |
| Logging | All zone ingress/egress traffic logged to SIEM | [Actual state] | [Assessment] |

**Zone Finding(s):**

| Finding ID | Severity | Description |
|---|---|---|
| F-01 | [e.g., High] | [e.g., WAF deployed in detection mode only — blocking capability not enabled for [URL path or system]. Exploitation of unblocked vulnerabilities is not prevented.] |
| F-02 | [e.g., Medium] | [e.g., TLS 1.0 remains enabled on [specific server]. This exposes the server to POODLE and BEAST attacks.] |

---

#### 5.3.2 Application Zone (Z-04)

**Zone Purpose:** [Describe the purpose.]

**Assets Reviewed:**

- [List key assets reviewed within this zone]

**Controls Assessed:**

| Control | Expected Implementation | Actual State | Assessment |
|---|---|---|---|
| East-west traffic control (intra-zone) | Micro-segmentation or host-based firewall enforced | [Actual state] | [Assessment] |
| Egress to Database Zone | Restrict to specific DB ports and source IPs only | [Actual state] | [Assessment] |
| Secrets management | Application credentials stored in dedicated secrets manager (not hardcoded) | [Actual state] | [Assessment] |
| Patch status | All application servers patched within policy timeframe | [Actual state] | [Assessment] |

**Zone Finding(s):**

| Finding ID | Severity | Description |
|---|---|---|
| F-03 | [e.g., Critical] | [e.g., No micro-segmentation controls exist within the Application Zone. Lateral movement between application servers is unrestricted, increasing the blast radius of a compromised application server.] |

---

#### 5.3.3 Database Zone (Z-05)

**Zone Purpose:** [Describe the purpose.]

**Assets Reviewed:**

- [List key assets reviewed]

**Controls Assessed:**

| Control | Expected Implementation | Actual State | Assessment |
|---|---|---|---|
| Access restriction to DB zone | Only application servers in Z-04 permitted; no direct user access | [Actual state] | [Assessment] |
| Database Activity Monitoring (DAM) | All privileged database access monitored and alerted | [Actual state] | [Assessment] |
| Encryption at rest | Transparent Data Encryption (TDE) or equivalent enabled | [Actual state] | [Assessment] |
| Database firewall | Database firewall or virtual patching in place | [Actual state] | [Assessment] |

**Zone Finding(s):**

| Finding ID | Severity | Description |
|---|---|---|
| F-04 | [Severity] | [Finding description] |

---

#### 5.3.4 Management Zone (Z-07)

**Zone Purpose:** [Describe the purpose.]

**Assets Reviewed:**

- [List key assets reviewed]

**Controls Assessed:**

| Control | Expected Implementation | Actual State | Assessment |
|---|---|---|---|
| MFA enforcement for management access | MFA mandatory for all privileged access via management zone | [Actual state] | [Assessment] |
| Privileged Access Management (PAM) | All privileged sessions brokered via PAM solution | [Actual state] | [Assessment] |
| Session recording | All privileged sessions recorded and retained for [X] months | [Actual state] | [Assessment] |
| Separate credentials | Management zone access uses separate credentials from production | [Actual state] | [Assessment] |

**Zone Finding(s):**

| Finding ID | Severity | Description |
|---|---|---|
| F-05 | [Severity] | [Finding description] |

---

#### 5.3.5 [Additional Zones]

*Repeat the above structure for each additional zone identified in Section 5.2.*

### 5.4 Inter-Zone Traffic Flow Assessment

*Assess the firewall rules and ACLs governing traffic between zones. Focus on rule bloat, overly permissive rules, and traffic flows that do not align with the principle of least privilege.*

#### 5.4.1 Firewall Rule Review Summary

| Zone Pair | Total Rules | Overly Permissive Rules | Unused Rules | Shadow Rules | Review Status |
|---|---|---|---|---|---|
| Internet → DMZ (Z-01 → Z-02) | [Number] | [Number] | [Number] | [Number] | [e.g., Reviewed — issues found] |
| DMZ → Application (Z-02 → Z-04) | [Number] | [Number] | [Number] | [Number] | [Reviewed — compliant] |
| Application → Database (Z-04 → Z-05) | [Number] | [Number] | [Number] | [Number] | [Status] |
| Internal → Management (Z-06 → Z-07) | [Number] | [Number] | [Number] | [Number] | [Status] |
| [Other zone pairs] | | | | | |

#### 5.4.2 Traffic Flow Matrix

*Document the approved inter-zone traffic flows. This matrix represents the intended state; deviations identified during the review are captured as findings.*

| Source Zone | Destination Zone | Protocol / Port | Business Justification | Approved? |
|---|---|---|---|---|
| Z-02 (DMZ) | Z-04 (Application) | TCP/8080 (HTTP) | Web requests from reverse proxy to application servers | Yes |
| Z-04 (Application) | Z-05 (Database) | TCP/1521 (Oracle) | Application database connectivity | Yes |
| Z-07 (Management) | Z-04, Z-05 (all internal) | TCP/22 (SSH), TCP/3389 (RDP) via PAM | Privileged administration — via jump server only | Yes |
| [Add all approved flows] | | | | |
| [Unapproved flow identified during review] | | | | No — Finding F-[X] |

---

## 6. Control Placement Analysis

*This section analyses whether security controls are correctly placed within the architecture to provide effective protection at each layer. Control placement considers both the location of controls within the architecture and the coverage they provide against relevant threat vectors.*

### 6.1 Control Framework Reference

*Describe the control framework used as the reference for this analysis.*

This control placement analysis maps deployed controls against the following reference frameworks:

- **NACSA NCII Cybersecurity Framework** — [Version]
- **ISO/IEC 27001:2022** — Annex A Controls
- **NIST Cybersecurity Framework 2.0** — Core Functions (Govern, Identify, Protect, Detect, Respond, Recover)
- **CIS Controls v8** — Implementation Groups 1–3

### 6.2 Control Placement by Architecture Layer

*For each architecture layer, map the security controls that should be present against those that are actually deployed. Identify gaps and redundancies.*

#### 6.2.1 Perimeter Layer Controls

| Control Category | Expected Control | Deployed Control / Solution | Coverage | Gap / Issue |
|---|---|---|---|---|
| DDoS Protection | DDoS scrubbing service | [e.g., [Provider] DDoS Protection — [capacity]] | [e.g., Full] | [e.g., None / Gap description] |
| Next-Generation Firewall | NGFW with IPS enabled | [e.g., [Vendor] NGFW — IPS enabled] | [Full / Partial] | [Gap description if partial] |
| Web Application Firewall | WAF in blocking mode | [e.g., [Vendor] WAF — detection mode] | [Partial] | [High — WAF not in blocking mode — Finding F-01] |
| Email Gateway | Secure email gateway with anti-spam, anti-phishing, and sandboxing | [Solution] | [Coverage] | [Gap] |
| DNS Security | DNS filtering and DNSSEC | [Solution] | [Coverage] | [Gap] |
| SSL/TLS Inspection | Inbound TLS inspection at perimeter | [Solution] | [Coverage] | [Gap] |

#### 6.2.2 Network Layer Controls

| Control Category | Expected Control | Deployed Control / Solution | Coverage | Gap / Issue |
|---|---|---|---|---|
| Network Segmentation | VLAN / zone segmentation enforced by firewall | [e.g., Zone-based firewall — [Vendor]] | [Coverage] | [Gap] |
| Micro-segmentation | East-west traffic control within zones | [e.g., Not deployed / SDN micro-segmentation] | [None / Partial / Full] | [Critical — Finding F-03] |
| Intrusion Detection / Prevention | Network IDS/IPS in-line or in-band | [e.g., [Vendor] IDS/IPS — in-line on DMZ segment] | [Partial] | [Gap — no IDS on internal segments] |
| Network Traffic Analysis | NTA / NDR solution | [Solution] | [Coverage] | [Gap] |
| Network Access Control | NAC solution enforcing device posture | [Solution] | [Coverage] | [Gap] |
| Out-of-Band Management | Dedicated management network | [e.g., Separate management VLAN] | [Coverage] | [Gap] |

#### 6.2.3 Application Layer Controls

| Control Category | Expected Control | Deployed Control / Solution | Coverage | Gap / Issue |
|---|---|---|---|---|
| Application Firewall | WAF protection for all web-facing applications | [Solution] | [Coverage] | [Gap] |
| API Security | API gateway with rate limiting, authentication, and input validation | [Solution] | [Coverage] | [Gap] |
| Secrets Management | Centralised secrets manager (no hardcoded credentials) | [Solution] | [Coverage] | [Gap] |
| SAST / DAST | Static and dynamic application security testing in CI/CD pipeline | [Solution] | [Coverage] | [Gap] |
| Container Security | Container image scanning and runtime security (if applicable) | [Solution] | [Coverage] | [Gap] |
| Software Composition Analysis | SCA for third-party library vulnerability management | [Solution] | [Coverage] | [Gap] |

#### 6.2.4 Data Layer Controls

| Control Category | Expected Control | Deployed Control / Solution | Coverage | Gap / Issue |
|---|---|---|---|---|
| Encryption at Rest | Full-disk or TDE encryption for all sensitive data stores | [Solution] | [Coverage] | [Gap] |
| Encryption in Transit | TLS 1.2/1.3 for all data in transit | [Solution] | [Coverage] | [Gap] |
| Database Activity Monitoring | DAM solution with real-time alerting | [Solution] | [Coverage] | [Gap] |
| Data Loss Prevention | DLP solution monitoring egress of sensitive data | [Solution] | [Coverage] | [Gap] |
| Key Management | Centralised HSM-backed key management | [Solution] | [Coverage] | [Gap] |
| Data Masking / Tokenisation | Masking or tokenisation for sensitive data in non-production environments | [Solution] | [Coverage] | [Gap] |

#### 6.2.5 Identity and Access Management Controls

| Control Category | Expected Control | Deployed Control / Solution | Coverage | Gap / Issue |
|---|---|---|---|---|
| Multi-Factor Authentication | MFA enforced for all privileged and external access | [Solution] | [Coverage] | [Gap] |
| Privileged Access Management | PAM solution for all privileged accounts | [Solution] | [Coverage] | [Gap] |
| Identity Governance | IGA solution for access provisioning, review, and deprovisioning | [Solution] | [Coverage] | [Gap] |
| Single Sign-On | SSO with federated identity for internal applications | [Solution] | [Coverage] | [Gap] |
| Service Account Management | Service accounts managed under PAM with regular rotation | [Solution] | [Coverage] | [Gap] |
| Directory Security | Active Directory / LDAP hardening; tiered AD model | [Solution] | [Coverage] | [Gap] |

#### 6.2.6 Detection and Monitoring Controls

| Control Category | Expected Control | Deployed Control / Solution | Coverage | Gap / Issue |
|---|---|---|---|---|
| SIEM | Centralised SIEM with correlation rules for NCII threat scenarios | [Solution] | [Coverage] | [Gap] |
| Log Management | Centralised logging with [X] months retention; tamper-evident storage | [Solution] | [Coverage] | [Gap] |
| Endpoint Detection and Response | EDR deployed on all managed endpoints | [Solution] | [Coverage] | [Gap] |
| Threat Intelligence | Threat intelligence feeds integrated with SIEM and security tools | [Solution] | [Coverage] | [Gap] |
| Vulnerability Management | Continuous vulnerability scanning; monthly internal, quarterly external | [Solution] | [Coverage] | [Gap] |
| File Integrity Monitoring | FIM on critical system files and configuration | [Solution] | [Coverage] | [Gap] |

### 6.3 Control Effectiveness Summary

*Summarize the overall effectiveness of controls across all architecture layers.*

| Architecture Layer | Controls Assessed | Fully Effective | Partially Effective | Not Effective / Missing | Effectiveness Rating |
|---|---|---|---|---|---|
| Perimeter | [Number] | [Number] | [Number] | [Number] | [e.g., 72%] |
| Network | [Number] | [Number] | [Number] | [Number] | [e.g., 61%] |
| Application | [Number] | [Number] | [Number] | [Number] | [e.g., 55%] |
| Data | [Number] | [Number] | [Number] | [Number] | [e.g., 80%] |
| Identity and Access | [Number] | [Number] | [Number] | [Number] | [e.g., 68%] |
| Detection and Monitoring | [Number] | [Number] | [Number] | [Number] | [e.g., 75%] |
| **Overall** | **[Total]** | **[Total]** | **[Total]** | **[Total]** | **[Overall %]** |

### 6.4 Redundant and Overlapping Controls

*Identify any controls that are duplicated or where budget could be better allocated. Rationalization of controls can improve efficiency without reducing security posture.*

| Control Area | Overlapping Tools / Solutions | Rationalization Recommendation |
|---|---|---|
| [e.g., Vulnerability Scanning] | [e.g., Two separate scanners in use: [Tool A] and [Tool B]] | [e.g., Consolidate to a single enterprise vulnerability management platform] |
| [e.g., Log collection] | [e.g., Both [SIEM] and separate syslog server collecting the same sources] | [e.g., Route all log sources directly to SIEM; decommission redundant syslog server] |

---

## 7. Identified Weaknesses and Gaps

*This section consolidates all security weaknesses and architectural gaps identified during the review. Each finding is assigned a unique identifier, severity rating, and root cause classification. Findings are cross-referenced to the relevant sections of this report where the issue is described in detail.*

### 7.1 Finding Severity Definitions

| Severity | Definition | Remediation Expectation |
|---|---|---|
| **Critical (P1)** | A weakness or gap that, if exploited, would directly and severely compromise the confidentiality, integrity, or availability of an NCII system. Exploitation is likely given current threat landscape. | Immediate action required; escalate to CISO and Board. Remediation target: 30 days or as directed by NACSA. |
| **High (P2)** | A significant weakness that substantially increases risk of a material security incident. Exploitation is plausible with moderate attacker capability. | Urgent remediation required. Target: 60 days. |
| **Medium (P3)** | A weakness that increases risk but requires specific conditions or higher attacker capability to exploit. May represent a gap in defence-in-depth. | Planned remediation. Target: 90 days. |
| **Low (P4)** | A minor weakness, configuration improvement, or best-practice gap with limited direct risk impact. | Schedule for remediation in next planning cycle. Target: 180 days. |
| **Informational** | An observation that does not represent a direct weakness but warrants monitoring, review, or tracking at the next annual review. | No immediate action required; document and review. |

### 7.2 Consolidated Findings Register

| Finding ID | Zone / Layer | Title | Severity | Root Cause | Section Reference | Recommendation Ref |
|---|---|---|---|---|---|---|
| F-01 | Z-02 / Perimeter | WAF operating in detection mode only — blocking disabled | High | Configuration | Section 5.3.1 | R-01 |
| F-02 | Z-02 / Perimeter | TLS 1.0 enabled on [Server Name] | Medium | Configuration | Section 5.3.1 | R-02 |
| F-03 | Z-04 / Application | No micro-segmentation within Application Zone — unrestricted east-west traffic | Critical | Architecture Gap | Sections 5.3.2, 6.2.2 | R-03 |
| F-04 | Z-05 / Data | Database Activity Monitoring not deployed for [Database Name] | High | Tool Gap | Sections 5.3.3, 6.2.4 | R-04 |
| F-05 | Z-07 / Management | MFA not enforced for [specific admin system] privileged access | High | Policy / Configuration | Section 5.3.4 | R-05 |
| F-06 | IAM | Service account passwords have not been rotated in [X] months — policy requires [Y] months | High | Process Gap | Section 6.2.5 | R-06 |
| F-07 | Detection | SIEM correlation rules do not cover [specific threat scenario, e.g., credential stuffing against API gateway] | Medium | Detection Gap | Section 6.2.6 | R-07 |
| F-08 | Application | DAST not integrated into CI/CD pipeline for [Application Name] | Medium | Process Gap | Section 6.2.3 | R-08 |
| F-09 | Data | Encryption at rest not enabled for [specific data store] | High | Configuration | Section 6.2.4 | R-09 |
| F-10 | Network | Firewall rule [Rule ID/Description] permits overly broad access from Z-06 to Z-05 — no business justification confirmed | High | Configuration | Section 5.4.1 | R-10 |
| F-[N] | [Zone / Layer] | [Add findings as identified during review] | [Severity] | [Root Cause] | [Section Ref] | [Rec Ref] |

### 7.3 Root Cause Analysis

*Categorize findings by root cause to identify systemic issues. Systemic root causes should be addressed at a process or governance level, not just remediated individually.*

| Root Cause Category | Finding Count | Finding IDs | Systemic Issue? |
|---|---|---|---|
| Architecture Gap (design deficiency) | [Number] | F-03, [others] | [Yes / No] |
| Configuration Error | [Number] | F-01, F-02, F-09, F-10, [others] | [Yes / No — e.g., "Yes — suggests insufficient change management process for security-relevant configuration changes"] |
| Tool / Capability Gap | [Number] | F-04, [others] | [Yes / No] |
| Process Gap | [Number] | F-06, F-08, [others] | [Yes / No] |
| Detection Gap | [Number] | F-07, [others] | [Yes / No] |
| Policy Gap | [Number] | F-05, [others] | [Yes / No] |

### 7.4 Risk Heat Map

*Provide a visual representation of findings by likelihood and impact. This may be presented as a table or as a referenced diagram.*

| | **Low Impact** | **Medium Impact** | **High Impact** | **Critical Impact** |
|---|---|---|---|---|
| **High Likelihood** | | [F-07] | [F-01, F-06] | [F-03] |
| **Medium Likelihood** | | [F-02, F-08] | [F-04, F-05, F-09, F-10] | |
| **Low Likelihood** | [Informational findings] | | | |
| **Very Low Likelihood** | | | | |

### 7.5 Comparison with Previous Review

*If this is not the first annual review, compare current findings against those from the previous review. Track remediated findings, recurring findings, and new findings.*

| Category | Count | Finding IDs |
|---|---|---|
| New findings (first identified in this review) | [Number] | [IDs] |
| Recurring findings (also identified in previous review — not fully remediated) | [Number] | [IDs — cross-referenced to prior report] |
| Findings remediated since previous review | [Number] | [IDs from prior report — confirmed closed] |
| Previous findings partially remediated (reduced severity) | [Number] | [IDs] |

> **Note:** Recurring findings from the previous review that remain unremediated represent an elevated compliance risk and should be escalated to the [Board Risk Committee / Technology Risk Committee] for prioritization.

---

## 8. Improvement Recommendations

*This section provides structured, actionable recommendations corresponding to findings identified in Section 7. Each recommendation includes implementation guidance, priority, estimated effort, and the responsible party.*

### 8.1 Recommendation Register

| Rec ID | Finding Ref | Title | Priority | Responsible Party | Target Date | Estimated Effort |
|---|---|---|---|---|---|---|
| R-01 | F-01 | Enable WAF blocking mode for all external-facing applications | High | Security Architect / Platform Team | [DD Month YYYY] | [e.g., 2 days] |
| R-02 | F-02 | Disable TLS 1.0 and 1.1 on all external servers; enforce TLS 1.2 minimum | Medium | Platform Team | [DD Month YYYY] | [e.g., 1 week — requires testing] |
| R-03 | F-03 | Implement network micro-segmentation within the Application Zone | Critical | Security Architect / Network Team | [DD Month YYYY] | [e.g., 3 months — significant architecture change] |
| R-04 | F-04 | Deploy Database Activity Monitoring for [Database Name] | High | Security Operations / DBA Team | [DD Month YYYY] | [e.g., 1 month] |
| R-05 | F-05 | Enforce MFA for all privileged access to [admin system] | High | IAM Team | [DD Month YYYY] | [e.g., 2 weeks] |
| R-06 | F-06 | Immediate rotation of all overdue service account passwords; integrate with PAM for automated rotation | High | IAM Team / Application Teams | [DD Month YYYY] | [e.g., 2 weeks] |
| R-07 | F-07 | Develop and deploy SIEM correlation rules for [threat scenarios] | Medium | Security Operations (SOC) | [DD Month YYYY] | [e.g., 6 weeks] |
| R-08 | F-08 | Integrate DAST tooling into the CI/CD pipeline for [Application Name] | Medium | DevSecOps / Application Team | [DD Month YYYY] | [e.g., 2 months] |
| R-09 | F-09 | Enable encryption at rest for [data store name] | High | DBA Team / Platform Team | [DD Month YYYY] | [e.g., 3 weeks] |
| R-10 | F-10 | Review and restrict firewall rule [Rule ID]; implement principle of least privilege | High | Network / Firewall Team | [DD Month YYYY] | [e.g., 1 week] |
| R-[N] | F-[N] | [Add recommendations as required] | [Priority] | [Owner] | [Date] | [Effort] |

### 8.2 Detailed Recommendation Guidance

*For each recommendation, provide sufficient implementation detail for the responsible team to act without ambiguity.*

#### R-01 — Enable WAF Blocking Mode

**Finding Reference:** F-01
**Priority:** High
**Responsible Party:** Security Architect / Platform Team
**Target Date:** [DD Month YYYY]

**Background:** The WAF is deployed in detection-only mode, which means malicious requests are logged but not blocked. This eliminates the protective benefit of the WAF against OWASP Top 10 and other application-layer attacks against external-facing systems.

**Recommended Actions:**

1. Review existing WAF detection logs to identify any rule tuning required before enabling blocking mode (false positive assessment).
2. Conduct a minimum 10-business-day monitoring period in detection mode after any rule tuning, and validate false positive rate meets the [Organization Name] threshold of [X]% before enabling blocking.
3. Enable blocking mode in a phased approach, starting with the highest-confidence ruleset (e.g., OWASP CRS at Paranoia Level 1).
4. Document the WAF configuration including enabled rulesets, custom rules, and exception list. Store in the security configuration management repository.
5. Define a process for ongoing WAF rule review and tuning, conducted quarterly.
6. Ensure WAF alerts are integrated with the SIEM and SOC alerting workflow.

**Success Criteria:** WAF configured in blocking mode for all in-scope external applications; zero false-positive outages during a 30-day post-implementation period; WAF blocking events visible in SIEM.

**References:** OWASP ModSecurity Core Rule Set; [NACSA NCII Framework, relevant control reference].

---

#### R-03 — Implement Network Micro-Segmentation Within the Application Zone

**Finding Reference:** F-03
**Priority:** Critical
**Responsible Party:** Security Architect / Network Team
**Target Date:** [DD Month YYYY]

**Background:** The Application Zone (Z-04) currently permits unrestricted lateral movement between application servers. A threat actor who compromises any single application server within this zone can freely pivot to other servers, including those with access to the database layer. This represents a critical architecture gap.

**Recommended Actions:**

1. Conduct a traffic flow mapping exercise to document all legitimate east-west communication flows within Z-04 (source server, destination server, protocol, port, business justification).
2. Design a micro-segmentation policy based on the approved traffic flow map. Consider technology options: host-based firewall (Windows Firewall with Advanced Security, iptables/nftables), SDN overlay (VMware NSX, Cisco ACI), or application-aware segmentation.
3. Implement micro-segmentation controls in a staged rollout, starting with the most sensitive application clusters.
4. Conduct post-implementation testing to confirm that:
   - All approved flows are permitted.
   - All non-approved lateral flows are blocked.
   - Application functionality is not impaired.
5. Integrate micro-segmentation policy management with the change management process.

**Success Criteria:** Documented and enforced micro-segmentation policy covering all application servers in Z-04; penetration test confirmation of lateral movement blocking; policy integrated with change management.

**References:** NIST SP 800-207 (Zero Trust Architecture); CIS Control 12 (Network Infrastructure Management).

---

*[Repeat the detailed guidance format for each significant recommendation. Medium and Low priority recommendations may use abbreviated guidance format.]*

#### R-05 — Enforce MFA for Privileged Access to [Admin System]

**Finding Reference:** F-05
**Priority:** High
**Recommended Actions:**
1. Identify all user accounts with privileged access to [admin system].
2. Enrol all identified accounts in the organization's MFA solution ([MFA Solution Name]).
3. Configure [admin system] authentication to require MFA as a mandatory factor; remove any MFA bypass or exception for privileged accounts.
4. Test and confirm MFA is enforced for all access paths (console, API, CLI).
5. Update the Privileged Access Management Policy to formally require MFA for [admin system] class of systems.
6. Confirm MFA enforcement via the next quarterly access review cycle.

---

### 8.3 Strategic Architecture Improvement Roadmap

*Provide a longer-term strategic view of recommended architecture improvements beyond the immediate finding remediation. This roadmap should inform the organization's multi-year security investment planning.*

| Initiative | Strategic Objective | Related Findings | Priority | Indicative Timeline |
|---|---|---|---|---|
| Zero Trust Architecture Transition | Eliminate implicit trust from all internal network zones; implement identity-driven access controls | F-03, F-05, F-06, F-10 | High | [e.g., 24 months] |
| Security Automation and Orchestration (SOAR) | Automate SOC response playbooks to reduce MTTD and MTTR | F-07 | Medium | [e.g., 12 months] |
| DevSecOps Maturity Programme | Embed security into SDLC; achieve continuous security testing in CI/CD | F-08 | Medium | [e.g., 18 months] |
| Data Security Posture Management (DSPM) | Comprehensive visibility and control over sensitive data across all data stores | F-04, F-09 | High | [e.g., 12 months] |
| [Additional strategic initiative] | | | | |

---

## 9. Alignment with Standards

*This section assesses the degree to which [Organization Name]'s security architecture aligns with applicable cybersecurity standards and frameworks. The assessment provides a structured gap analysis that supports both compliance reporting and security investment prioritization.*

### 9.1 Standards Assessment Methodology

*Describe the approach used to assess standards alignment.*

Alignment with each standard was assessed through the following methods:

- **Document Review:** Review of policy documents, architecture documentation, and control evidence against the requirements of each standard.
- **Stakeholder Interviews:** Interviews with the Security Architect, IT Operations, and Security Operations teams.
- **Configuration Sampling:** Review of sample configurations for key security controls.
- **Observation:** Direct observation of controls and processes where feasible.

Alignment is rated as follows:

| Rating | Description |
|---|---|
| **Fully Aligned** | Requirements of the standard are fully met by implemented controls and documented evidence. |
| **Substantially Aligned** | The majority of requirements are met; minor gaps exist that do not materially affect overall compliance. |
| **Partially Aligned** | Some requirements are met, but significant gaps exist that require remediation. |
| **Not Aligned** | Requirements are not met; fundamental gaps exist. |
| **Not Applicable** | The requirement does not apply to [Organization Name]'s context. |

### 9.2 NACSA NCII Cybersecurity Framework Alignment

*Assess alignment against the NACSA NCII Cybersecurity Framework, which is the primary mandatory reference for NCII entities under Act 854.*

| NACSA Framework Domain | Key Requirements | Current Alignment | Key Gaps | Finding Reference |
|---|---|---|---|---|
| Identify | Asset inventory; risk assessment; supply chain risk management | [e.g., Substantially Aligned] | [e.g., Supply chain risk assessment not yet formalized] | [F-X] |
| Protect | Access control; data security; protective technology; awareness and training | [e.g., Partially Aligned] | [e.g., Micro-segmentation absent; MFA gaps; WAF not in blocking mode] | F-01, F-03, F-05 |
| Detect | Anomalies and events; continuous monitoring; detection processes | [e.g., Substantially Aligned] | [e.g., SIEM correlation rules gap for specific threat scenarios] | F-07 |
| Respond | Response planning; communications; analysis; mitigation | [e.g., Fully Aligned] | None | — |
| Recover | Recovery planning; improvements; communications | [e.g., Substantially Aligned] | [e.g., Recovery plan last tested [date] — test frequency not meeting policy] | [F-X] |

**Overall NACSA Framework Alignment: [e.g., Partially Aligned / Substantially Aligned]**

### 9.3 ISO/IEC 27001:2022 Annex A Alignment

*Assess alignment with relevant ISO/IEC 27001:2022 Annex A controls. Focus on controls most relevant to the security architecture.*

| ISO/IEC 27001:2022 Control | Control Description | Alignment | Notes |
|---|---|---|---|
| A.5.15 | Access control | [Rating] | [Notes] |
| A.5.17 | Authentication information | [Rating] | [Notes — MFA gaps noted] |
| A.8.20 | Networks security | [Rating] | [Notes — segmentation gap noted] |
| A.8.21 | Security of network services | [Rating] | [Notes] |
| A.8.22 | Segregation of networks | [Rating] | [Notes — micro-segmentation gap] |
| A.8.23 | Web filtering | [Rating] | [Notes] |
| A.8.24 | Use of cryptography | [Rating] | [Notes — encryption at rest gap] |
| A.8.25 | Secure development life cycle | [Rating] | [Notes — DAST gap] |
| A.8.26 | Application security requirements | [Rating] | [Notes] |
| A.8.27 | Secure system architecture and engineering principles | [Rating] | [Notes] |
| A.8.28 | Secure coding | [Rating] | [Notes] |
| A.8.30 | Outsourced development | [Rating] | [Notes] |
| A.8.31 | Separation of development, test and production environments | [Rating] | [Notes] |

### 9.4 NIST Cybersecurity Framework 2.0 Alignment

| CSF 2.0 Function | Subcategory Focus | Alignment | Notes |
|---|---|---|---|
| GV — Govern | GV.OC, GV.RM, GV.RR, GV.PO, GV.OV, GV.SC | [Rating] | [Notes] |
| ID — Identify | ID.AM, ID.RA, ID.IM | [Rating] | [Notes] |
| PR — Protect | PR.AA, PR.AT, PR.DS, PR.PS, PR.IR | [Rating] | [Notes — key gaps in PR.DS (data security) and PR.PS (platform security)] |
| DE — Detect | DE.CM, DE.AE | [Rating] | [Notes] |
| RS — Respond | RS.MA, RS.AN, RS.CO, RS.MI | [Rating] | [Notes] |
| RC — Recover | RC.RP, RC.CO | [Rating] | [Notes] |

### 9.5 CIS Controls v8 Alignment

| CIS Control | Title | IG Level | Alignment | Key Gap |
|---|---|---|---|---|
| CIS 1 | Inventory and Control of Enterprise Assets | IG1 | [Rating] | [Gap] |
| CIS 2 | Inventory and Control of Software Assets | IG1 | [Rating] | [Gap] |
| CIS 3 | Data Protection | IG1 | [Rating] | [Gap] |
| CIS 4 | Secure Configuration of Enterprise Assets and Software | IG1 | [Rating] | [Gap] |
| CIS 5 | Account Management | IG1 | [Rating] | [Gap] |
| CIS 6 | Access Control Management | IG1 | [Rating] | [Gap] |
| CIS 7 | Continuous Vulnerability Management | IG2 | [Rating] | [Gap] |
| CIS 8 | Audit Log Management | IG2 | [Rating] | [Gap] |
| CIS 9 | Email and Web Browser Protections | IG2 | [Rating] | [Gap] |
| CIS 12 | Network Infrastructure Management | IG2 | [Rating] | [Gap — micro-segmentation] |
| CIS 13 | Network Monitoring and Defense | IG2 | [Rating] | [Gap] |
| CIS 16 | Application Software Security | IG2 | [Rating] | [Gap — DAST] |
| CIS 18 | Penetration Testing | IG3 | [Rating] | [Gap] |

### 9.6 BNM RMiT Policy Document Alignment (If Applicable)

*Complete this section if [Organization Name] is a BNM-regulated financial institution subject to the RMiT Policy Document.*

| RMiT Section | Requirement | Alignment | Notes |
|---|---|---|---|
| 10 — Technology Risk Management | Senior management accountability for technology risk | [Rating] | [Notes] |
| 11 — Technology Operations Management | Change management; IT asset management | [Rating] | [Notes] |
| 11.12 — Network Resilience | Redundant network architecture; DDoS protection | [Rating] | [Notes] |
| 11.13 — Security Monitoring | SOC; SIEM; 24/7 monitoring | [Rating] | [Notes] |
| 11.15 — Cryptography | Encryption standards; key management | [Rating] | [Notes] |
| 11.16 — Network Security | Firewall management; network segmentation | [Rating] | [Notes — segmentation gap noted] |
| 11.17 — Vulnerability Assessment and Penetration Testing | Frequency and scope of security testing | [Rating] | [Notes] |

### 9.7 Standards Alignment Summary

| Standard / Framework | Overall Alignment | Priority Gap Areas |
|---|---|---|
| NACSA NCII Cybersecurity Framework | [Rating] | [Top 2–3 gap areas] |
| ISO/IEC 27001:2022 | [Rating] | [Top 2–3 gap areas] |
| NIST CSF 2.0 | [Rating] | [Top 2–3 gap areas] |
| CIS Controls v8 | [Rating] | [Top 2–3 gap areas] |
| BNM RMiT (if applicable) | [Rating] | [Top 2–3 gap areas] |

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix — Security Architecture Review

*The following RACI matrix defines accountability for the key activities associated with the security architecture review process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Security Architect | IT / Platform Teams | Security Operations (SOC) | Compliance Officer | System / Business Owners | Board / Risk Committee | NACSA |
|---|---|---|---|---|---|---|---|---|
| Initiate annual security architecture review | A | R | I | I | C | I | I | — |
| Define review scope | C | R | C | C | C | C | I | — |
| Conduct architecture documentation review | I | R | C | C | I | C | — | — |
| Conduct stakeholder interviews | I | R | C | C | I | C | — | — |
| Perform control placement analysis | I | R | C | R | I | I | — | — |
| Perform security zone assessment | I | R | R | C | I | I | — | — |
| Document findings | I | R | C | C | C | I | — | — |
| Validate findings with system owners | C | R | C | C | I | R | — | — |
| Develop recommendations | C | R | C | C | I | C | — | — |
| Draft Security Architecture Review Report | C | R | I | I | C | I | — | — |
| Internal review and quality assurance of report | A | R | I | I | C | I | — | — |
| Present report findings to management | R | R | I | I | C | C | I | — |
| Approve report for submission | A | C | — | — | C | I | I | — |
| Submit report to NACSA (if required) | A | C | — | — | R | — | I | I |
| Assign and track remediation actions | A | C | R | C | C | R | I | — |
| Report remediation status to Board | A | C | C | C | C | C | R | — |
| Verify remediation effectiveness | C | R | C | C | I | I | — | — |
| Maintain report in document management system | C | R | I | I | R | I | — | — |

### 10.2 Key Contacts for This Review

| Role | Name | Department | Contact |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Department] | [email] |
| Security Architect (Review Lead) | [Name] | [Department] | [email] |
| IT Infrastructure Lead | [Name] | [Department] | [email] |
| Network Security Lead | [Name] | [Department] | [email] |
| Security Operations Manager | [Name] | [Department] | [email] |
| Compliance Officer | [Name] | [Department] | [email] |
| [NCII] System Owner | [Name] | [Department] | [email] |
| [NCII] System Technical Lead | [Name] | [Department] | [email] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [DD Month YYYY] | [Author Name] | Initial draft — architecture overview and zone assessment sections |
| 0.2 | [DD Month YYYY] | [Author Name] | Added control placement analysis and findings register |
| 0.3 | [DD Month YYYY] | [Author Name] | Added recommendations and standards alignment sections; internal review feedback incorporated |
| 0.9 | [DD Month YYYY] | [Author Name] | Draft for stakeholder review and validation |
| 1.0 | [DD Month YYYY] | [Author Name] | Final version — approved for submission |

### 11.2 Stakeholder Review and Sign-Off

*All stakeholders listed below have reviewed this report in the capacity noted and confirmed that the findings and recommendations are accurately documented.*

| Role | Name | Review Date | Sign-Off |
|---|---|---|---|
| Security Architect (Author) | [Name] | [DD Month YYYY] | [Signature / Digital Sign-Off Reference] |
| IT Infrastructure Lead (Technical Review) | [Name] | [DD Month YYYY] | [Signature / Digital Sign-Off Reference] |
| System Owner (Findings Validation) | [Name] | [DD Month YYYY] | [Signature / Digital Sign-Off Reference] |
| Compliance Officer (Regulatory Review) | [Name] | [DD Month YYYY] | [Signature / Digital Sign-Off Reference] |

### 11.3 Approval Sign-Off

*The following approvals authorize this report for internal use, management reporting, and submission to NACSA as required.*

| Role | Name | Title | Signature | Approval Date |
|---|---|---|---|---|
| Chief Information Security Officer | [Name] | CISO, [Organization Name] | [Signature] | [DD Month YYYY] |
| Chief Information Officer / Chief Technology Officer | [Name] | CIO / CTO, [Organization Name] | [Signature] | [DD Month YYYY] |
| [Approved By, as per document header] | [Name] | [Title] | [Signature] | [DD Month YYYY] |

### 11.4 Next Review

This report is subject to annual review. The next Security Architecture Review is scheduled to commence no later than:

**[DD Month YYYY]**

Any material changes to the NCII system architecture, a significant security incident, or a direction from NACSA may trigger an unscheduled review before this date. The CISO is responsible for determining the need for and initiating any such unscheduled review.

---

## 12. References

### 12.1 Primary Regulatory References

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duty of NCII entities to implement and maintain appropriate security measures for NCII systems. This section is the primary obligation driving the security architecture requirements assessed in this report. |
| **Cyber Security Act 2024 (Act 854), Section 21** | Obligation of NCII entities to conduct periodic security assessments and submit reports to NACSA. This report constitutes the annual assessment report required under this section. |
| **Cyber Security Act 2024 (Act 854), Section [X]** | [Description of any additional provisions relied upon, e.g., provisions relating to NACSA directives, codes of practice, or incident reporting] |
| **NACSA NCII Cybersecurity Framework, [Version]** | Primary technical and operational reference framework issued by NACSA for NCII entities. Provides the control baseline against which this architecture review is benchmarked. |
| **NACSA Directive / Code of Practice: [Title]** | [Description] |

### 12.2 Supporting Regulatory References

| Reference | Description |
|---|---|
| **Personal Data Protection Act 2010 (Act 709)** as amended | Governs the processing of personal data. Relevant to data architecture and data security controls assessed in Section 6.2.4 of this report. |
| **BNM Risk Management in Technology (RMiT) Policy Document** (Effective 1 January 2020, as amended) | BNM technology risk management requirements applicable to BNM-regulated entities. Supplementary reference for network security, cryptography, and security monitoring controls. |
| **[Other applicable regulatory instrument]** | [Description] |

### 12.3 Standards and Technical References

| Reference | Description |
|---|---|
| **ISO/IEC 27001:2022** | Information Security Management Systems — Requirements. International standard providing the control framework reference for information security architecture. |
| **ISO/IEC 27002:2022** | Information Security Controls — guidance on implementing ISO/IEC 27001 Annex A controls. |
| **ISO/IEC 27005:2022** | Information Security Risk Management. Reference for risk assessment methodology supporting the prioritization of findings in this report. |
| **NIST Cybersecurity Framework (CSF) 2.0** (February 2024) | NIST cybersecurity risk management framework providing the Govern, Identify, Protect, Detect, Respond, Recover functions used for standards alignment assessment. |
| **NIST SP 800-53 Rev 5** | Security and Privacy Controls for Information Systems and Organizations. Technical control reference. |
| **NIST SP 800-207** | Zero Trust Architecture. Reference for micro-segmentation and access control recommendations. |
| **CIS Controls v8** | Center for Internet Security Critical Security Controls. Implementation Group reference for prioritizing security control implementation. |
| **OWASP Top 10** (Latest version) | Reference for application security risks addressed in the control placement analysis and WAF recommendations. |
| **OWASP Application Security Verification Standard (ASVS)** | Reference for application security architecture requirements. |

### 12.4 Internal Reference Documents

| Document | Document ID | Location |
|---|---|---|
| [Organization Name] Information Security Policy | [Doc ID] | [Document Management System Path] |
| [Organization Name] Cybersecurity Architecture Standard | [Doc ID] | [Location] |
| [Organization Name] Network Security Standard | [Doc ID] | [Location] |
| [Organization Name] Privileged Access Management Policy | [Doc ID] | [Location] |
| [Organization Name] Vulnerability Management Policy | [Doc ID] | [Location] |
| [Organization Name] Business Continuity Plan — [NCII System] | [Doc ID] | [Location] |
| [Organization Name] Disaster Recovery Plan — [NCII System] | [Doc ID] | [Location] |
| Previous Security Architecture Review Report ([Year]) | [Doc ID] | [Location] |
| [NCII System] System Architecture Document | [Doc ID] | [Location] |
| [NCII System] Network Diagrams | [Doc ID] | [Location] |
| [NCII System] Data Flow Diagrams | [Doc ID] | [Location] |

---

## 13. Appendices

### Appendix A — High-Level Logical Architecture Diagram

*Insert or attach the high-level logical architecture diagram for [NCII System Name] as at [Review Date]. The diagram should clearly show all major components, zones, and the trust boundaries between them.*

**[DIAGRAM — High-Level Logical Architecture — [NCII System Name] — As at [Review Date]]**

> **Diagram Notes:**
> - Diagram version: [Version Number]
> - Prepared by: [Name]
> - Last updated: [DD Month YYYY]
> - Source file location: [Path to source file, e.g., Visio, draw.io, Lucidchart]
> - Classification: Confidential

---

### Appendix B — Network Segmentation and Zone Map

*Insert or attach the network segmentation diagram showing all security zones, VLAN assignments, subnet ranges, and the firewall/control points between zones.*

**[DIAGRAM — Network Segmentation and Zone Map — As at [Review Date]]**

| Zone | VLAN ID | Subnet | Firewall / Enforcing Control | Notes |
|---|---|---|---|---|
| Z-01 Internet | N/A | External | Perimeter NGFW | External-facing |
| Z-02 External DMZ | [VLAN ID] | [Subnet] | Perimeter NGFW | |
| Z-03 Partner Zone | [VLAN ID] | [Subnet] | Perimeter NGFW + Internal FW | |
| Z-04 Application Zone | [VLAN ID] | [Subnet] | Internal FW | |
| Z-05 Database Zone | [VLAN ID] | [Subnet] | Internal FW + DB Firewall | |
| Z-06 Internal User Zone | [VLAN ID] | [Subnet] | Internal FW | |
| Z-07 Management Zone | [VLAN ID] | [Subnet] | Dedicated Management FW | OOB management only |
| Z-08 DR Zone | [VLAN ID] | [Subnet] | DR Site FW | |

---

### Appendix C — Data Flow Diagrams

*Insert or attach data flow diagrams for key data flows within the system under review. Data flow diagrams should identify all data stores, processing activities, and the direction and nature of data flows between components and across zone boundaries.*

**[DIAGRAM — Data Flow Diagram: [Key Flow Name, e.g., End-to-End Payment Processing] — As at [Review Date]]**

**[DIAGRAM — Data Flow Diagram: [Key Flow Name, e.g., Customer Authentication] — As at [Review Date]]**

**Data Flow Summary Table:**

| Flow ID | Source Component | Destination Component | Data Sensitivity | Protocol / Port | Zone Boundary Crossed | Encryption |
|---|---|---|---|---|---|---|
| DF-01 | [e.g., Internet Banking Portal] | [e.g., API Gateway] | [e.g., Confidential — customer credentials] | HTTPS / 443 | Z-01 → Z-02 | TLS 1.3 |
| DF-02 | [e.g., API Gateway] | [e.g., Application Server] | [e.g., Confidential] | HTTP / 8080 | Z-02 → Z-04 | Internal — TLS 1.2 |
| DF-03 | [e.g., Application Server] | [e.g., Oracle DB] | [e.g., Restricted — transactional data] | TCP / 1521 | Z-04 → Z-05 | TDE at rest; in-transit encryption: [Yes/No] |
| DF-[N] | [Add all key flows] | | | | | |

---

### Appendix D — Cloud Architecture Diagram (If Applicable)

*Insert or attach the cloud architecture diagram illustrating cloud-hosted components, connectivity to on-premises infrastructure, and cloud-native security controls.*

**[DIAGRAM — Cloud Integration Architecture — [Cloud Provider] — As at [Review Date]]**

---

### Appendix E — Identity and Access Management Architecture Diagram

**[DIAGRAM — IAM Architecture — As at [Review Date]]**

**Key IAM Components:**

| Component | Product / Solution | Version | Function |
|---|---|---|---|
| Identity Provider (IdP) | [e.g., Microsoft Active Directory / Azure AD / Okta] | [Version] | Central identity directory |
| Multi-Factor Authentication | [e.g., Microsoft Authenticator / RSA SecurID] | [Version] | MFA enforcement |
| Privileged Access Management (PAM) | [e.g., CyberArk / BeyondTrust / Delinea] | [Version] | Privileged session management |
| Single Sign-On (SSO) | [e.g., Okta / Microsoft ADFS] | [Version] | Federated authentication |
| Identity Governance and Administration (IGA) | [e.g., SailPoint / Saviynt / Microsoft Identity Governance] | [Version] | Access lifecycle management |

---

### Appendix F — Disaster Recovery Architecture Diagram

**[DIAGRAM — Disaster Recovery Architecture — As at [Review Date]]**

| Parameter | Primary Site | DR Site |
|---|---|---|
| Location | [e.g., Primary Data Centre, Cyberjaya] | [e.g., DR Data Centre, Iskandar Puteri] |
| Hosting Model | [e.g., Co-location] | [e.g., Co-location / Cloud] |
| Replication Method | — | [e.g., Synchronous / Asynchronous] |
| RTO | [e.g., 4 hours] | — |
| RPO | [e.g., 15 minutes] | — |
| Last DR Test Date | — | [DD Month YYYY] |
| Last DR Test Result | — | [Pass / Fail / Partial — findings noted at [Doc ID]] |

---

### Appendix G — Findings Detail Sheets

*For each finding, provide a detailed findings sheet. This appendix provides the full evidence and technical detail supporting each finding in the consolidated findings register in Section 7.*

#### Finding F-01 — WAF Operating in Detection Mode Only

| Field | Detail |
|---|---|
| **Finding ID** | F-01 |
| **Title** | WAF operating in detection mode only — blocking disabled |
| **Severity** | High |
| **System / Component Affected** | [WAF Solution Name] — protecting [Application Name(s)] |
| **Zone** | Z-02 External DMZ / Perimeter |
| **Root Cause** | Configuration |
| **Date Identified** | [DD Month YYYY] |
| **Identified By** | [Reviewer Name] |
| **Evidence** | WAF management console screenshot — mode setting confirming "Detection Only" (evidence reference: [Evidence ID]). WAF alert log showing requests flagged but not blocked during review period. |
| **Description** | The WAF protecting [Application Name(s)] is configured in detection mode. In this mode, the WAF logs potentially malicious HTTP requests and generates alerts, but does not block them. This configuration provides no active protection against OWASP Top 10 and other application-layer attacks. |
| **Potential Impact** | A threat actor can send malicious requests (e.g., SQL injection, XSS, path traversal payloads) to the application without interference from the WAF. The application is reliant solely on its own input validation controls, which were not validated as part of this review. |
| **Recommendation Reference** | R-01 |
| **Management Response** | [To be completed by responsible team — confirm acceptance or provide remediation plan] |
| **Target Remediation Date** | [DD Month YYYY] |

---

#### Finding F-[N] — [Finding Title]

| Field | Detail |
|---|---|
| **Finding ID** | F-[N] |
| **Title** | [Title] |
| **Severity** | [Severity] |
| **System / Component Affected** | [System / component] |
| **Zone** | [Zone reference] |
| **Root Cause** | [Root cause] |
| **Date Identified** | [DD Month YYYY] |
| **Identified By** | [Reviewer Name] |
| **Evidence** | [Evidence description and reference] |
| **Description** | [Full technical description of the finding] |
| **Potential Impact** | [Description of potential impact if the finding is exploited or not addressed] |
| **Recommendation Reference** | [R-N] |
| **Management Response** | [Management response] |
| **Target Remediation Date** | [DD Month YYYY] |

*[Repeat for each finding.]*

---

### Appendix H — Review Methodology and Testing Evidence Summary

*Describe the detailed methodology, tools, and evidence collected during the review. This appendix supports the auditability of the review process.*

#### H.1 Document Review Evidence

| Document Reviewed | Document ID / Version | Review Date | Reviewer |
|---|---|---|---|
| [Document Name] | [ID / Version] | [Date] | [Reviewer] |
| [Document Name] | [ID / Version] | [Date] | [Reviewer] |

#### H.2 Stakeholder Interviews Conducted

| Interviewee | Role | Interview Date | Topics Covered |
|---|---|---|---|
| [Name] | [Role] | [Date] | [e.g., Network architecture, firewall rule management, change control process] |
| [Name] | [Role] | [Date] | [e.g., IAM processes, privileged access management, service account management] |
| [Name] | [Role] | [Date] | [e.g., SOC operations, SIEM configuration, incident response] |

#### H.3 Configuration Samples Reviewed

| System / Component | Configuration Reviewed | Sampling Approach | Evidence Reference |
|---|---|---|---|
| [e.g., Perimeter Firewall] | [e.g., Firewall ruleset export] | [e.g., Full ruleset reviewed] | [Evidence ID] |
| [e.g., WAF] | [e.g., WAF configuration export; rule mode settings] | [e.g., Full configuration export reviewed] | [Evidence ID] |
| [e.g., Active Directory] | [e.g., Domain security policy; privileged group membership] | [e.g., Sample of 10 privileged accounts reviewed] | [Evidence ID] |

#### H.4 Review Tools Used

| Tool | Version | Purpose | Operated By |
|---|---|---|---|
| [e.g., Nessus Professional] | [Version] | Internal vulnerability assessment | [Team] |
| [e.g., Nmap] | [Version] | Network discovery and port scanning | [Team] |
| [e.g., Nipper / Tufin / AlgoSec] | [Version] | Firewall rule analysis | [Team] |
| [e.g., Burp Suite Professional] | [Version] | Web application security testing (if conducted) | [Team] |
| [Tool] | [Version] | [Purpose] | [Team] |

---

### Appendix I — Remediation Tracking Register

*This appendix provides a live tracking register for all remediation actions arising from this review. It should be updated monthly by the responsible parties and reported to the CISO and relevant governance committees.*

| Rec ID | Finding ID | Remediation Action | Responsible Party | Target Date | Status | Completion Date | Verification Evidence |
|---|---|---|---|---|---|---|---|
| R-01 | F-01 | Enable WAF blocking mode | Platform Team | [Date] | [Not Started / In Progress / Completed / Overdue] | [Date if completed] | [Evidence reference if verified] |
| R-02 | F-02 | Disable TLS 1.0 / 1.1 | Platform Team | [Date] | [Status] | [Date] | [Evidence] |
| R-03 | F-03 | Implement micro-segmentation in App Zone | Network Team | [Date] | [Status] | [Date] | [Evidence] |
| R-04 | F-04 | Deploy DAM for [Database Name] | SOC / DBA Team | [Date] | [Status] | [Date] | [Evidence] |
| R-05 | F-05 | Enforce MFA for [admin system] | IAM Team | [Date] | [Status] | [Date] | [Evidence] |
| R-[N] | F-[N] | [Action] | [Owner] | [Date] | [Status] | [Date] | [Evidence] |

*Status definitions: Not Started | In Progress | Completed | Verified | Overdue | Accepted Risk (with CISO approval)*

---

### Appendix J — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — the primary Malaysian legislation governing national cybersecurity, establishing NACSA and obligations for NCII entities. |
| **BNM** | Bank Negara Malaysia — the central bank and financial regulator of Malaysia. |
| **CISO** | Chief Information Security Officer. |
| **CSF** | Cybersecurity Framework — specifically the NIST Cybersecurity Framework. |
| **DAM** | Database Activity Monitoring — a security control that monitors and logs all activity to database systems. |
| **DAST** | Dynamic Application Security Testing — security testing conducted against a running application. |
| **DMZ** | Demilitarized Zone — a network zone between the internet and internal networks, hosting externally accessible services. |
| **DDoS** | Distributed Denial of Service — an attack that overwhelms a system with traffic to render it unavailable. |
| **DR** | Disaster Recovery. |
| **EDR** | Endpoint Detection and Response — security software that monitors endpoint activity for malicious behaviour. |
| **FIM** | File Integrity Monitoring — a control that monitors system files for unauthorized changes. |
| **HSM** | Hardware Security Module — a physical device for secure key management and cryptographic operations. |
| **IAM** | Identity and Access Management. |
| **ICS** | Industrial Control System. |
| **IGA** | Identity Governance and Administration. |
| **IPS / IDS** | Intrusion Prevention System / Intrusion Detection System. |
| **MTD** | Maximum Tolerable Downtime — the maximum period a critical business function can be unavailable. |
| **MFA** | Multi-Factor Authentication. |
| **NACSA** | National Cyber Security Agency — the Malaysian government agency responsible for national cybersecurity policy and oversight of NCII. |
| **NCII** | National Critical Information Infrastructure — information infrastructure designated as critical to national security, economy, or public safety under Act 854. |
| **NDR** | Network Detection and Response. |
| **NGFW** | Next-Generation Firewall. |
| **NTA** | Network Traffic Analysis. |
| **OT** | Operational Technology — hardware and software that monitors and controls physical processes. |
| **PAM** | Privileged Access Management. |
| **PDPA** | Personal Data Protection Act 2010 (Act 709) as amended. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| **RMiT** | Risk Management in Technology — BNM's policy document governing technology risk for regulated financial institutions. |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss measured in time. |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system after a disruption. |
| **SAST** | Static Application Security Testing — security testing conducted on application source code or compiled binaries. |
| **SCA** | Software Composition Analysis — analysis of third-party and open-source components for known vulnerabilities. |
| **SIEM** | Security Information and Event Management. |
| **SOC** | Security Operations Centre. |
| **TDE** | Transparent Data Encryption — database-level encryption at rest. |
| **TLS** | Transport Layer Security — the cryptographic protocol used to secure communications. |
| **VPN** | Virtual Private Network. |
| **WAF** | Web Application Firewall. |
| **Zero Trust** | An architectural security model based on the principle of "never trust, always verify." |

---

*End of Security Architecture Review Report*

---

**Document Control Notice**

This document is the property of [Organization Name]. It is classified **Confidential** and is intended solely for the use of authorized personnel within [Organization Name] and, where required, for submission to NACSA under the Cyber Security Act 2024 (Act 854). Unauthorized disclosure, reproduction, or distribution of this document is prohibited and may constitute a breach of Act 854 and the Personal Data Protection Act 2010.

Any questions regarding this document should be directed to the Document Owner: **Security Architect, [Organization Name]** at [security.architect@organization.com.my].