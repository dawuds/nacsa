# Network Diagram Register

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
| **Next Review Date** | [Next Review Date — Quarterly] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This Network Diagram Register serves as the authoritative index and living record of all network architecture diagrams maintained by [Organization Name] for its National Critical Information Infrastructure (NCII) environments. It establishes a structured mechanism for cataloguing, versioning, and controlling network topology documentation in accordance with the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 17** — Obligations of NCII sector leads and entities to implement and maintain cybersecurity measures, including the documentation of network architecture as a foundational security control.
- **Section 18** — Requirements for NCII entities to conduct and record cybersecurity risk assessments, which depend on current and accurate network topology documentation.

This register ensures that network diagrams remain current, accessible to authorised personnel, and traceable through a formal version control process.

### 1.2 Scope

This register applies to:

- All NCII-designated environments operated or managed by [Organization Name].
- All network segments classified under NCII zone boundaries, including production, management, and interconnection networks.
- Both logical and physical representations of network infrastructure.
- Third-party and vendor-managed segments where [Organization Name] retains regulatory accountability.

This register does **not** cover non-NCII corporate IT environments unless those environments have direct interconnection with NCII zones.

---

## 2. Diagram Register Index

*This section serves as the master index of all network architecture diagrams in scope. Each entry must reference the diagram's unique identifier, its current version, storage location, and custodian. All diagrams listed here are subject to quarterly review.*

| Diagram ID | Diagram Title | Type | NCII Zone(s) Covered | Current Version | Last Updated | Diagram Owner | Storage Location | Status |
|---|---|---|---|---|---|---|---|---|
| NDR-001 | [Diagram Title] | Logical | [Zone Name(s)] | [v1.x] | [Date] | [Owner Name] | [File Path / Repository URL] | Active |
| NDR-002 | [Diagram Title] | Physical | [Zone Name(s)] | [v1.x] | [Date] | [Owner Name] | [File Path / Repository URL] | Active |
| NDR-003 | [Diagram Title] | Zone Boundary | [Zone Name(s)] | [v1.x] | [Date] | [Owner Name] | [File Path / Repository URL] | Active |
| NDR-004 | [Diagram Title] | Firewall / ACL | [Zone Name(s)] | [v1.x] | [Date] | [Owner Name] | [File Path / Repository URL] | Active |
| NDR-005 | [Diagram Title] | Interconnection | [Zone Name(s)] | [v1.x] | [Date] | [Owner Name] | [File Path / Repository URL] | Under Review |

> **Note:** Diagrams in **Under Review** or **Deprecated** status must have a justification recorded in the [Remarks](#appendix-b-diagram-remarks-log) appendix.

---

## 3. Logical Network Topology

*This section documents the logical representation of the NCII network architecture, capturing how systems, services, and network segments communicate. Diagrams referenced here must reflect current IP addressing schemes, routing paths, VLANs, and logical trust relationships.*

### 3.1 Logical Topology Diagrams

| Diagram ID | Title | Layers Covered | Key Systems Depicted | Reference Diagram |
|---|---|---|---|---|
| NDR-001 | [Diagram Title] | [e.g., Layer 2 / Layer 3] | [e.g., Core switches, application servers, DNS] | *See Appendix A* |
| [NDR-XXX] | [Diagram Title] | [Layers] | [Systems] | *See Appendix A* |

### 3.2 Logical Architecture Notes

*Record any contextual notes that assist in interpreting the logical diagrams — for example, summarised VLAN assignments, routing protocols in use, or network segmentation rationale.*

- **Routing Protocol(s) in Use:** [e.g., OSPF, BGP, Static]
- **VLAN Summary:** [e.g., VLAN 10 — Management, VLAN 20 — Production, VLAN 30 — DMZ]
- **IP Address Scheme:** [e.g., RFC 1918 Class B — 172.16.0.0/12 for NCII internal]
- **DNS / DHCP Architecture:** [Brief description or reference to separate documentation]
- **High Availability / Redundancy Paths:** [Brief description]

---

## 4. Physical Network Layout

*This section documents the physical representation of the NCII network infrastructure, including hardware placement, data centre locations, rack positions, and physical cabling paths. Diagrams must be updated following any physical infrastructure change.*

### 4.1 Physical Layout Diagrams

| Diagram ID | Title | Site / Facility | Key Hardware Depicted | Reference Diagram |
|---|---|---|---|---|
| NDR-002 | [Diagram Title] | [e.g., Primary Data Centre, DR Site] | [e.g., Core routers, firewall appliances, patch panels] | *See Appendix A* |
| [NDR-XXX] | [Diagram Title] | [Site] | [Hardware] | *See Appendix A* |

### 4.2 Site and Facility Summary

| Site Name | Location | Classification | Primary Function | NCII Designation |
|---|---|---|---|---|
| [Site Name] | [Physical Address] | [e.g., Tier 3 DC] | [e.g., Production Hosting] | Yes / No |
| [Site Name] | [Physical Address] | [e.g., Tier 2 DC] | [e.g., Disaster Recovery] | Yes / No |

### 4.3 Physical Architecture Notes

*Record notes relevant to physical security boundaries, hardware refresh schedules, or decommissioned equipment not yet reflected in diagrams.*

- **Cabling Standard:** [e.g., Structured Cat 6A for copper, OM4 for fibre]
- **Hardware Lifecycle Status:** [Brief note or reference to Asset Register]
- **Out-of-Band Management Network:** [Brief description of OOBM topology]

---

## 5. NCII Zone Boundaries

*This section defines and documents the boundaries of NCII-classified network zones. Zone boundary diagrams must clearly delineate trust levels, control points between zones, and any demilitarised zones (DMZ). This directly supports compliance obligations under Act 854, s17 and s18.*

### 5.1 Zone Boundary Diagrams

| Diagram ID | Title | Zones Depicted | Control Points Shown | Reference Diagram |
|---|---|---|---|---|
| NDR-003 | [Diagram Title] | [e.g., Core NCII, DMZ, External] | [e.g., Firewall FW-01, IPS-01] | *See Appendix A* |
| [NDR-XXX] | [Diagram Title] | [Zones] | [Control Points] | *See Appendix A* |

### 5.2 Zone Classification Table

*Each NCII zone must be assigned a trust classification and have its boundary controls documented. This table provides a consolidated view for audit purposes.*

| Zone Name | Trust Level | IP Subnet(s) | Permitted Inbound Sources | Permitted Outbound Destinations | Enforcing Control |
|---|---|---|---|---|---|
| [Zone Name — e.g., NCII Core] | High / Restricted | [Subnet] | [List of zones or "None"] | [List of zones] | [e.g., FW-01, ACL-CORE-01] |
| [Zone Name — e.g., DMZ] | Medium | [Subnet] | [Internet — filtered] | [NCII Core — restricted ports] | [e.g., FW-01, FW-02] |
| [Zone Name — e.g., Management] | High / Out-of-Band | [Subnet] | [Privileged users only] | [All zones — read-only monitoring] | [e.g., OOB Switch, ACL-MGMT] |
| [Zone Name — e.g., External / Internet] | Untrusted | N/A | N/A | N/A | N/A |

---

## 6. Firewall Rule Summaries

*This section provides a high-level summary of firewall policies governing traffic between NCII zones. This is not a substitute for the full firewall rule base, which should be maintained separately in the Firewall Configuration Register. Summaries here enable non-specialist stakeholders and auditors to understand the traffic control posture without requiring access to operational configuration files.*

### 6.1 Firewall Inventory

| Device ID | Device Name / Hostname | Model | Location | Manages Traffic Between | Last Configuration Review |
|---|---|---|---|---|---|
| FW-001 | [Hostname] | [Make / Model] | [Site Name] | [Zone A ↔ Zone B] | [Date] |
| FW-002 | [Hostname] | [Make / Model] | [Site Name] | [Zone B ↔ External] | [Date] |

### 6.2 Policy Summary by Firewall

*For each firewall device, summarise the high-level intent of rule groups. Detailed rule bases are stored separately and referenced here.*

**Device: [FW-001 — Hostname]**

| Rule Group | Direction | Source Zone | Destination Zone | Permitted Services | Default Action |
|---|---|---|---|---|---|
| [Rule Group Name] | Inbound | External | DMZ | [e.g., HTTPS/443, SMTP/25] | Deny-All |
| [Rule Group Name] | Outbound | NCII Core | External | [e.g., None — Egress blocked] | Deny-All |
| [Rule Group Name] | Inter-Zone | DMZ | NCII Core | [e.g., SQL/1433 — restricted IPs only] | Deny-All |

> **Reference:** Full firewall rule base is documented in **[Firewall Configuration Register — Document ID: FCR-XXX]**.

---

## 7. Interconnection Points

*This section documents all points where [Organization Name]'s NCII network connects to external parties, including third-party service providers, government networks, financial industry networks, and internet egress points. Each interconnection must be risk-assessed in accordance with Act 854, s18.*

### 7.1 Interconnection Register

| Interconnection ID | Connected Party | Connection Type | Protocol / Circuit | Entry / Exit Point | Risk Classification | Risk Assessment Reference | Status |
|---|---|---|---|---|---|---|---|
| ICP-001 | [Party Name] | [e.g., MPLS, VPN, Leased Line, Internet] | [e.g., IPSec VPN, BGP Peering] | [e.g., Firewall FW-02, Router RT-01] | High / Medium / Low | [Risk Assessment ID] | Active |
| ICP-002 | [Party Name] | [e.g., Dedicated Circuit] | [Protocol] | [Entry Point] | [Classification] | [RA-XXX] | Active |
| ICP-003 | [Internet Egress — Primary] | Internet | [e.g., BGP via ISP Name] | [e.g., Edge Router ER-01] | High | [RA-XXX] | Active |

### 7.2 Third-Party Interconnection Controls

*For each external interconnection, document the security controls applied at the boundary.*

| Interconnection ID | Encryption in Transit | MFA Required | Monitoring / Logging | Contractual Data Handling Clause | Last Access Review |
|---|---|---|---|---|---|
| ICP-001 | Yes / No — [Method] | Yes / No | Yes — [Tool / System] | Yes — [Contract Ref] | [Date] |
| ICP-002 | Yes / No — [Method] | Yes / No | Yes — [Tool / System] | Yes — [Contract Ref] | [Date] |

---

## 8. Last Update Date and Change Log

*This section records all changes made to any diagram within this register. It is mandatory to log every update, including minor revisions, to maintain an auditable change history. The "Last Updated" column in Section 2 must always reflect the most recent entry here for each diagram.*

### 8.1 Diagram Change Log

| Change Reference | Diagram ID | Diagram Title | Change Description | Changed By | Change Date | Reviewed By | Review Date | Version After Change |
|---|---|---|---|---|---|---|---|---|
| CHG-001 | NDR-001 | [Diagram Title] | [e.g., Added new server segment following infrastructure expansion] | [Author Name] | [Date] | [Reviewer Name] | [Date] | v1.1 |
| CHG-002 | NDR-003 | [Diagram Title] | [e.g., Updated DMZ zone boundary following firewall upgrade] | [Author Name] | [Date] | [Reviewer Name] | [Date] | v2.0 |
| CHG-003 | NDR-XXX | [Diagram Title] | [Change Description] | [Author Name] | [Date] | [Reviewer Name] | [Date] | [Version] |

### 8.2 Quarterly Review Summary

*At each quarterly review cycle, complete the following table to confirm the register and all diagrams have been assessed for accuracy and currency.*

| Review Period | Review Date | Reviewer | Diagrams Reviewed | Diagrams Requiring Update | Updates Completed | Sign-Off |
|---|---|---|---|---|---|---|
| Q[X] [Year] | [Date] | [Reviewer Name] | [Count] | [Count] | Yes / No / Partial | [Initials] |
| Q[X] [Year] | [Date] | [Reviewer Name] | [Count] | [Count] | Yes / No / Partial | [Initials] |

---

## 9. Roles and Responsibilities

*This RACI table defines accountability for all activities related to this register. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Network Architecture | Chief Information Security Officer (CISO) | IT Operations | Risk & Compliance | Senior Management / Board |
|---|---|---|---|---|---|
| Maintain and update network diagrams | **R** | I | C | I | I |
| Approve changes to NCII zone boundaries | C | **A** | I | C | I |
| Conduct quarterly register review | **R** | A | C | C | I |
| Log diagram changes in the change log | **R** | I | R | I | I |
| Approve new external interconnections | C | C | R | **A** | I |
| Conduct risk assessment for interconnections | C | A | C | **R** | I |
| Approve this register and its revisions | C | **A** | I | C | I |
| Report register status to senior management | I | **R** | I | C | **I** |
| Ensure alignment with Act 854 obligations | C | R | I | **R** | A |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 10.2 Approval Sign-Off

*This document requires formal sign-off by the following roles prior to issuance and following each major revision.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Architecture Lead | [Name] | _________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Risk & Compliance Officer | [Name] | _________________ | [Date] |
| [Additional Approver if required] | [Name] | _________________ | [Date] |

---

## 11. References

The following regulatory instruments and standards govern the requirements addressed by this register:

| Reference | Document / Clause | Relevance |
|---|---|---|
| Act 854 — s17 | Cyber Security Act 2024, Section 17 | Obligations of NCII entities to implement and maintain cybersecurity measures, including documented network architecture |
| Act 854 — s18 | Cyber Security Act 2024, Section 18 | Requirement for NCII entities to conduct cybersecurity risk assessments, predicated on current network documentation |
| NACSA NCII Sector Guidelines | [Applicable Sector-Specific Directive] | Sector-specific requirements for network documentation and NCII boundary controls |
| BNM RMiT | Bank Negara Malaysia — Risk Management in Technology Policy (where applicable) | Control 11.x — Network security architecture requirements for financial institutions |
| ISO/IEC 27001:2022 | Annex A — Control 8.20 (Network Security), Control 8.21 (Security of Network Services) | International best practice for network security documentation and management |
| NIST SP 800-53 Rev. 5 | Control CA-3 (System Interconnections), SA-17 (Developer Security Architecture) | Supporting framework for interconnection documentation and architecture governance |

---

## 12. Appendices

### Appendix A — Network Diagram Repository

*Diagrams referenced throughout this register are stored in the [Organization Name] secure document repository. Access is restricted to authorised personnel as defined in the Access Control Register.*

**Repository Location:** [File path, SharePoint URL, or Confluence space — internal reference only]

**Access Control:** Access to NCII network diagrams is governed by [Access Control Policy Reference]. Diagrams are classified **Confidential** and must not be shared outside of [Organization Name] without written approval from the CISO.

| Diagram ID | File Name | Format | Repository Path | Access Group |
|---|---|---|---|---|
| NDR-001 | [filename.vsdx / .drawio / .pdf] | [Format] | [Path] | [Group Name] |
| NDR-002 | [filename] | [Format] | [Path] | [Group Name] |
| NDR-003 | [filename] | [Format] | [Path] | [Group Name] |

---

### Appendix B — Diagram Remarks Log

*Use this appendix to record explanatory remarks for any diagram with a status other than "Active", or to note known gaps pending remediation.*

| Diagram ID | Status | Remark | Raised By | Date Raised | Target Resolution Date | Resolved By | Resolution Date |
|---|---|---|---|---|---|---|---|
| [NDR-XXX] | Under Review | [e.g., Pending update following DC migration project — in progress] | [Name] | [Date] | [Date] | [Name] | [Date] |
| [NDR-XXX] | Deprecated | [e.g., Replaced by NDR-004 following network consolidation] | [Name] | [Date] | N/A | [Name] | [Date] |

---

### Appendix C — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary Malaysian legislation governing cybersecurity obligations for NCII entities |
| **DMZ** | Demilitarised Zone — a network segment that acts as a buffer between trusted internal networks and untrusted external networks |
| **NACSA** | National Cyber Security Agency of Malaysia, the competent authority responsible for national cybersecurity policy and NCII oversight |
| **NCII** | National Critical Information Infrastructure — information infrastructure whose disruption or destruction would have a debilitating effect on national security, the economy, or public safety |
| **NCII Zone** | A defined network segment classified as part of an organisation's NCII environment, subject to heightened security controls |
| **OOBM** | Out-of-Band Management — a separate management network used to administer infrastructure independently of the production data plane |
| **RACI** | Responsibility Assignment Matrix — Responsible, Accountable, Consulted, Informed |
| **VLAN** | Virtual Local Area Network — a logical segmentation of a physical network |

---

*This document is classified **Confidential**. Unauthorised disclosure, reproduction, or transmission is prohibited. For queries regarding this register, contact the Network Architecture function at [Organization Name].*

*Document ID: [Document ID] | Version: 1.0 | Last Review: [Last Review Date] | Next Review: [Next Review Date]*