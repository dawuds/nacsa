# NCII Asset Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Asset Management / CISO |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This NCII Asset Register serves as the authoritative inventory of all assets that constitute, support, or form part of [Organization Name]'s National Critical Information Infrastructure (NCII). It is maintained in accordance with the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 17** — Obligations of NCII entity to identify, assess, and report cyber security risks relating to NCII
- **Section 18** — Obligations of NCII entity to implement cyber security measures for the protection of NCII

This register provides the foundational data required to fulfil mandatory risk assessments, implement proportionate security controls, and support regulatory reporting to the **National Cyber Security Agency (NACSA)**.

### 1.2 Scope

*Define the organizational and technical boundaries of this register. Include all assets that, if compromised, could disrupt the delivery of critical national functions or services.*

This register covers all NCII assets owned, operated, or managed by [Organization Name], including but not limited to:

- Information systems and applications directly supporting NCII services
- Underlying ICT infrastructure (servers, network devices, storage)
- Operational Technology (OT) and Industrial Control Systems (ICS) where applicable
- Cloud-hosted or third-party-managed assets supporting NCII functions
- Communication systems and data repositories classified as NCII-supporting

**Out of Scope:** Assets with no dependency on or connection to NCII services, as documented in [Reference Classification Policy Document ID].

### 1.3 NCII Sector

*Identify which NACSA-designated NCII sector(s) this register applies to.*

| Sector | Applicable |
|---|---|
| National Defence and Security | [ ] Yes / [ ] No |
| Banking and Finance | [ ] Yes / [ ] No |
| Transportation | [ ] Yes / [ ] No |
| Energy | [ ] Yes / [ ] No |
| Water | [ ] Yes / [ ] No |
| Health | [ ] Yes / [ ] No |
| ICT | [ ] Yes / [ ] No |
| Sewerage | [ ] Yes / [ ] No |
| Government | [ ] Yes / [ ] No |

---

## 2. Asset Identifier and Description

*Each asset entry must be uniquely identified and described in sufficient detail to support unambiguous identification during an audit, incident response, or regulatory inspection.*

### 2.1 Asset Identification Schema

*Define the naming convention used to generate asset identifiers. Consistency across the register is mandatory.*

**Format:** `[ORG]-NCII-[SECTOR CODE]-[ASSET TYPE]-[SEQUENCE]`

**Example:** `MYB-NCII-BNK-SRV-0042`

| Code Element | Description | Example Values |
|---|---|---|
| `[ORG]` | Three-letter organization code | `MYB` |
| `[SECTOR CODE]` | NACSA NCII sector abbreviation | `BNK`, `ICT`, `GOV` |
| `[ASSET TYPE]` | Asset category code | `SRV`, `NET`, `APP`, `DB`, `OT` |
| `[SEQUENCE]` | Zero-padded four-digit sequence | `0001` – `9999` |

### 2.2 Asset Type Codes

| Code | Asset Type |
|---|---|
| `SRV` | Server (physical or virtual) |
| `NET` | Network device (router, switch, firewall) |
| `APP` | Application or software system |
| `DB` | Database or data repository |
| `OT` | Operational Technology / ICS / SCADA |
| `EP` | Endpoint (workstation, laptop) |
| `CLOUD` | Cloud service or hosted platform |
| `COMM` | Communication system |
| `STOR` | Storage system |
| `OTHER` | Other — specify in description |

### 2.3 Asset Register Entries

*Complete one row per asset. Additional columns may be appended without removing mandatory columns. All fields marked **M** are mandatory.*

| Asset ID (M) | Asset Name (M) | Asset Type (M) | Description (M) | Vendor / Manufacturer | Model / Version | Serial Number / Instance ID | Acquisition Date | Asset Status |
|---|---|---|---|---|---|---|---|---|
| [ORG]-NCII-[SECTOR]-[TYPE]-0001 | [Asset Name] | [Asset Type] | [Brief description of the asset's function and role in NCII service delivery] | [Vendor Name] | [Model/Version] | [Serial No. / Cloud Instance ID] | [DD/MM/YYYY] | Active / Decommissioned / Under Review |
| [ORG]-NCII-[SECTOR]-[TYPE]-0002 | | | | | | | | |

---

## 3. Criticality Classification

*Criticality classification determines the priority of protection measures and the urgency of incident response. Classification must be reviewed at least annually or upon any material change to the asset's role or dependencies.*

### 3.1 Criticality Framework

*Align criticality ratings to [Organization Name]'s Information Classification Policy and NACSA guidance. The criteria below reflect the potential impact of asset compromise on NCII service continuity.*

| Criticality Level | Label | Definition |
|---|---|---|
| **1** | Critical | Compromise or failure would cause immediate, severe, or irreversible disruption to one or more NCII services at national or sector level |
| **2** | High | Compromise or failure would cause significant disruption to NCII services within hours; recovery is complex |
| **3** | Medium | Compromise or failure would degrade NCII service quality but failover or manual alternatives exist |
| **4** | Low | Asset supports NCII indirectly; limited service impact if compromised |

### 3.2 Criticality Assignments

*Assign a criticality level to each registered asset. Include the rationale to support audit review. Re-assess whenever the asset's function, connectivity, or threat landscape changes materially.*

| Asset ID | Asset Name | Criticality Level | Criticality Label | Classification Rationale | Classified By | Classification Date | Next Review Date |
|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [1–4] | [Critical / High / Medium / Low] | [Reason for this classification, referencing impact on NCII service delivery] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY] |

### 3.3 Criticality Review Log

*Record any changes to criticality classification, including the reason for re-classification.*

| Asset ID | Previous Level | New Level | Reason for Change | Changed By | Change Date | Approved By |
|---|---|---|---|---|---|---|
| [Asset ID] | [Level] | [Level] | [Reason] | [Name] | [DD/MM/YYYY] | [Name] |

---

## 4. Asset Owner

*Every NCII asset must have a named Business Owner and a named Technical Custodian. Ownership implies accountability for the asset's protection, compliance status, and lifecycle management.*

### 4.1 Ownership Definitions

| Role | Responsibilities |
|---|---|
| **Business Owner** | Accountable for the asset's business function; authorizes changes; signs off on risk acceptance; escalation point for incidents affecting the asset |
| **Technical Custodian** | Responsible for day-to-day configuration, patching, monitoring, and technical security of the asset |
| **Data Owner** (if applicable) | Accountable for data stored or processed by the asset; responsible for data classification and access rights |

### 4.2 Asset Ownership Register

*Where an asset is managed by a third party, record the internal accountable owner and reference the relevant Third-Party Risk Management record.*

| Asset ID | Asset Name | Business Owner (Name) | Business Owner (Role) | Technical Custodian (Name) | Technical Custodian (Role) | Data Owner (if applicable) | Third-Party Managed | Third-Party Name | Contract Reference |
|---|---|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [Full Name] | [Job Title / Department] | [Full Name] | [Job Title / Department] | [Full Name / N/A] | [ ] Yes / [ ] No | [Vendor Name / N/A] | [Contract Ref / N/A] |

---

## 5. Location and Network Zone

*Accurate location and network zone data is essential for physical security controls, network segmentation verification, and incident response scoping. All assets must be assigned to a defined network security zone.*

### 5.1 Physical Location Codes

*Define standard location codes for all facilities where NCII assets are hosted. Update this table whenever new facilities are commissioned.*

| Location Code | Location Name | Address | Facility Type |
|---|---|---|---|
| [DC-01] | [Primary Data Centre] | [Address] | Tier [III/IV] Data Centre |
| [DC-02] | [Disaster Recovery Site] | [Address] | DR Data Centre |
| [OFF-HQ] | [Head Office] | [Address] | Corporate Office |
| [CLOUD-01] | [Cloud Region / Provider] | [Region Identifier] | Public / Private Cloud |

### 5.2 Network Security Zone Definitions

*Define network zones consistent with [Organization Name]'s Network Segmentation Policy and NACSA technical guidelines.*

| Zone Code | Zone Name | Description | Permitted Asset Types |
|---|---|---|---|
| `ZONE-DMZ` | Demilitarised Zone | Internet-facing services with controlled inbound/outbound access | Web servers, API gateways, proxy services |
| `ZONE-INT` | Internal Network | Standard internal business network | User endpoints, internal applications |
| `ZONE-NCII` | NCII Protected Zone | Isolated segment for NCII assets; no direct internet access | Critical servers, core banking, OT systems |
| `ZONE-MGT` | Management Network | Out-of-band management for infrastructure | Management consoles, jump servers |
| `ZONE-OT` | OT / ICS Network | Air-gapped or strictly controlled OT environment | SCADA, ICS, PLCs |
| `ZONE-CLOUD` | Cloud Environment | Assets hosted in cloud; governed by CSP shared responsibility | Cloud instances, PaaS services |

### 5.3 Location and Zone Register

| Asset ID | Asset Name | Physical Location Code | Physical Location Detail (Rack / Room / Floor) | Network Zone Code | IP Address(es) / CIDR | Hostname / FQDN | Internet-Facing | VPN / Remote Access Required |
|---|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [Location Code] | [e.g., DC-01 / Hall A / Rack R14 / Unit 3] | [Zone Code] | [IP / CIDR] | [hostname.domain.com] | [ ] Yes / [ ] No | [ ] Yes / [ ] No |

---

## 6. Dependencies and Interconnections

*Mapping dependencies and interconnections is mandatory under Act 854 to enable accurate risk assessment (s17) and the design of proportionate protection measures (s18). Incomplete dependency mapping is a common audit finding.*

### 6.1 Dependency Types

| Dependency Type | Description |
|---|---|
| **Upstream** | Assets or services this asset relies on to function (e.g., authentication server, database) |
| **Downstream** | Assets or services that depend on this asset (e.g., applications served by this server) |
| **Third-Party** | External services, APIs, or vendor systems with a data or operational link |
| **People** | Key personnel whose access or actions are required for the asset to operate |

### 6.2 Asset Dependency Map

*Complete for each NCII asset. Use the Asset ID to cross-reference. Attach a network/data flow diagram in Appendix B for Critical and High assets.*

| Asset ID | Asset Name | Upstream Asset IDs | Upstream Description | Downstream Asset IDs | Downstream Description | Third-Party Dependencies | Single Point of Failure | SPOF Mitigation |
|---|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [Asset ID(s)] | [What this asset depends on and why] | [Asset ID(s)] | [What depends on this asset] | [Vendor / Service Name] | [ ] Yes / [ ] No | [Redundancy / failover description or N/A] |

### 6.3 Interconnection Risk Indicators

*Flag interconnections that increase the attack surface or introduce systemic risk. These must be subject to enhanced monitoring.*

| Asset ID | Connected Asset / System | Connection Type | Data Classification Transmitted | Encryption in Transit | Authentication Method | Risk Indicator | Risk Notes |
|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name / External System] | [API / DB link / File transfer / Network] | [Public / Internal / Confidential / Restricted] | [ ] Yes / [ ] No | [mTLS / OAuth / API Key / None] | [ ] Elevated / [ ] Standard | [Notes if elevated] |

---

## 7. Last Assessment Date

*Each asset must undergo a formal cyber security risk assessment as required by Act 854 s17. This section tracks assessment currency and flags assets that are overdue.*

### 7.1 Assessment Types

| Assessment Type | Description | Recommended Frequency for Critical/High Assets |
|---|---|---|
| **Risk Assessment** | Structured identification and evaluation of threats, vulnerabilities, and impacts | Annual (minimum); after any material change |
| **Vulnerability Scan** | Automated scan for known technical vulnerabilities | Monthly (Critical); Quarterly (High/Medium) |
| **Penetration Test** | Authorised simulated attack to validate security controls | Annual (Critical/High); Biennial (Medium) |
| **Configuration Audit** | Review of hardening standards and configuration baselines | Annual; after major configuration change |
| **Third-Party Assessment** | External assessment by approved assessor | As required by NACSA or upon material change |

### 7.2 Assessment Tracking Register

*Update upon completion of each assessment. Overdue assessments (highlighted below) must be escalated to the CISO and recorded in the Risk Register.*

| Asset ID | Asset Name | Criticality | Last Risk Assessment Date | Next Risk Assessment Due | Last Vulnerability Scan | Last Penetration Test | Last Configuration Audit | Assessment Status | Overdue Flag | Escalation Reference |
|---|---|---|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [Level] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Current / Overdue / Scheduled] | [ ] Yes / [ ] No | [Risk Register Ref / N/A] |

### 7.3 Assessment Findings Summary

*Link to the full assessment report. Summarize open findings requiring remediation. Track remediation to closure.*

| Asset ID | Assessment Type | Assessment Date | Lead Assessor | Report Reference | Critical Findings | High Findings | Medium Findings | Remediation Due Date | Remediation Status |
|---|---|---|---|---|---|---|---|---|---|
| [Asset ID] | [Type] | [DD/MM/YYYY] | [Name / Firm] | [Report Ref] | [Count] | [Count] | [Count] | [DD/MM/YYYY] | [Open / In Progress / Closed] |

---

## 8. Roles and Responsibilities

*The following RACI table defines accountability for the maintenance and governance of this register.*

| Activity | CISO | IT Asset Management | IT Operations / System Admin | Business Unit Owner | Internal Audit | Risk & Compliance | Third-Party / Vendor |
|---|---|---|---|---|---|---|---|
| Define asset identification schema and classification criteria | A | R | C | C | I | C | — |
| Register new NCII assets upon commissioning | I | A | R | C | — | I | C (if vendor-managed) |
| Maintain and update asset records (continuous) | I | A | R | I | — | I | C (if applicable) |
| Assign and review criticality classifications | A | R | C | C | I | C | — |
| Confirm asset ownership assignments | A | R | I | A/R | — | I | — |
| Conduct quarterly formal register review | A | R | C | C | I | I | — |
| Schedule and track security assessments | A | C | R | I | I | C | — |
| Remediate assessment findings | I | I | R | A | — | C | R (if applicable) |
| Report register status to NACSA (where required) | A | C | I | I | I | R | — |
| Archive and retain historical register versions | I | A | R | I | I | I | — |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed | — = Not Applicable

---

## 9. Review and Approval

### 9.1 Maintenance Cycle

| Review Type | Trigger | Responsible Party | Target Completion |
|---|---|---|---|
| **Continuous Update** | Asset commissioned, decommissioned, or materially changed | IT Asset Management / System Admins | Within 5 business days of change |
| **Quarterly Formal Review** | Calendar quarter end (March, June, September, December) | CISO / IT Asset Management | Within 15 business days of quarter end |
| **Ad-hoc Review** | Significant cyber security incident, NACSA directive, or major infrastructure change | CISO | As directed |
| **Annual Comprehensive Audit** | Annual compliance cycle | Internal Audit / Risk & Compliance | [Specify annual review month] |

### 9.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial version — template established |
| | | | |

### 9.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Full Name] | | [DD/MM/YYYY] |
| Head of IT Asset Management | [Full Name] | | [DD/MM/YYYY] |
| Chief Risk Officer | [Full Name] | | [DD/MM/YYYY] |
| Chief Executive Officer / Authorised Delegate | [Full Name] | | [DD/MM/YYYY] |

---

## 10. References

| Reference | Description | Relevance to This Document |
|---|---|---|
| Cyber Security Act 2024 (Act 854), **s17** | Obligation of NCII entity to identify assets, assess cyber risks, and report to NACSA | Mandates this register as the primary vehicle for NCII asset identification and risk tracking |
| Cyber Security Act 2024 (Act 854), **s18** | Obligation of NCII entity to implement cyber security measures commensurate with risk | Register data informs the selection and scoping of security controls |
| NACSA NCII Sector Leads Directives | Sector-specific guidelines issued by the relevant NCII Sector Lead | Supplement Act 854 requirements with sector-specific obligations |
| [Organization Name] Information Security Policy | Internal policy governing information asset classification and protection | Aligns internal classification framework with NCII criticality levels |
| [Organization Name] Network Segmentation Policy | Internal policy defining network security zones | Governs zone assignments recorded in Section 5 |
| [Organization Name] Third-Party Risk Management Policy | Internal policy governing vendor and outsourced service provider risk | Applies to all third-party managed NCII assets recorded in Section 4 |
| [Organization Name] Risk Register | Centralised risk register | Assessment findings from Section 7 feed into the enterprise Risk Register |

---

## Appendices

### Appendix A — Asset Decommissioning Record

*When an NCII asset is decommissioned, complete this record before removing the asset from the active register. Retain decommissioning records for a minimum of [X] years in accordance with [Organization Name]'s Records Retention Policy.*

| Asset ID | Asset Name | Decommission Date | Reason for Decommission | Data Sanitisation Method | Sanitisation Confirmed By | Physical Disposal Method | Disposal Confirmed By | Approved By (CISO) |
|---|---|---|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [DD/MM/YYYY] | [Replacement / End-of-Life / Consolidation / Other] | [NIST 800-88 / DoD 5220.22-M / Physical Destruction / Other] | [Name / Date] | [Certified e-Waste / On-site shred / Return to vendor] | [Name / Date] | [Name / Date] |

---

### Appendix B — Asset Network and Data Flow Diagrams

*Attach or link to network topology diagrams and data flow diagrams for all Critical (Level 1) and High (Level 2) assets. Diagrams must show network zone boundaries, firewall positions, trust zones, and data flows including classification of data in transit.*

| Asset ID | Asset Name | Criticality | Diagram Reference | Diagram Version | Last Updated |
|---|---|---|---|---|---|
| [Asset ID] | [Asset Name] | [1 / 2] | [Diagram filename or document reference] | [v1.0] | [DD/MM/YYYY] |

---

### Appendix C — Glossary

| Term | Definition |
|---|---|
| **NCII** | National Critical Information Infrastructure — as defined under Act 854, information infrastructure the disruption or destruction of which would have a debilitating effect on national security, economy, public health, or safety of Malaysia |
| **NACSA** | National Cyber Security Agency — the lead government agency responsible for overseeing national cyber security in Malaysia, including NCII designation and oversight |
| **Act 854** | Cyber Security Act 2024 (Malaysia) |
| **Criticality** | The degree to which an asset is essential to NCII service delivery and the severity of impact if compromised |
| **SPOF** | Single Point of Failure — a component whose failure would halt the entire system |
| **OT** | Operational Technology — hardware and software that monitors or controls physical devices, processes, and infrastructure |
| **RACI** | Responsibility Assignment Matrix: Responsible, Accountable, Consulted, Informed |
| **CISO** | Chief Information Security Officer |

---

### Appendix D — Related Documents

| Document Title | Document ID | Version | Owner |
|---|---|---|---|
| Information Security Policy | [Doc ID] | [Version] | CISO |
| Network Segmentation Policy | [Doc ID] | [Version] | IT Operations |
| Third-Party Risk Management Policy | [Doc ID] | [Version] | Risk & Compliance |
| NCII Cyber Security Risk Assessment Report | [Doc ID] | [Version] | CISO |
| Incident Response Plan | [Doc ID] | [Version] | CISO |
| Business Continuity Plan | [Doc ID] | [Version] | BCM Lead |
| NACSA Reporting Procedure | [Doc ID] | [Version] | Risk & Compliance |

---

*This document is classified **Confidential**. Unauthorised disclosure is prohibited. All printed copies are uncontrolled. Refer to [Document Management System Name] for the current controlled version.*

*© [Organization Name] [Year]. All rights reserved.*