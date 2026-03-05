# Asset Management Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Asset Management Policy |
| **Organization** | [Organization Name] |
| **Owner** | IT Director / Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854), NACSA |
| **Applicable Sections** | Section 17, Section 18 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This policy constitutes a controlled document and must be managed in accordance with [Organization Name]'s document control procedures.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Policy Statements](#5-policy-statements)
6. [NCII Asset Identification Criteria](#6-ncii-asset-identification-criteria)
7. [Asset Classification Methodology](#7-asset-classification-methodology)
8. [Asset Ownership Assignment](#8-asset-ownership-assignment)
9. [Asset Lifecycle Management](#9-asset-lifecycle-management)
10. [Asset Disposal and Decommissioning](#10-asset-disposal-and-decommissioning)
11. [Asset Inventory Maintenance](#11-asset-inventory-maintenance)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Compliance and Enforcement](#13-compliance-and-enforcement)
14. [Exceptions and Waivers](#14-exceptions-and-waivers)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*Briefly describe the purpose of this policy and what it seeks to achieve. Reference the regulatory obligation that necessitates its existence.*

This policy establishes the requirements and responsibilities for the systematic identification, classification, ownership, and lifecycle management of all assets within [Organization Name] that form part of, or support, the National Critical Information Infrastructure (NCII). It provides a structured framework to ensure that assets are appropriately identified, inventoried, protected, and disposed of in a manner consistent with the obligations imposed by the **Cyber Security Act 2024 (Act 854)** and directives issued by the **National Cyber Security Agency (NACSA)**.

The purpose of this policy is to:

- Ensure complete and accurate visibility over all NCII assets owned, operated, or managed by [Organization Name].
- Establish clear accountability and stewardship for each asset throughout its operational life.
- Minimize the risk of unauthorized access, data loss, service disruption, or regulatory breach arising from poorly managed assets.
- Support [Organization Name]'s obligations as a NCII entity to report, protect, and maintain assets as required under Act 854 Sections 17 and 18.
- Enable consistent, audit-ready documentation of asset management practices for regulatory inspection and internal governance purposes.

---

## 2. Scope

*Define the boundaries of this policy — what systems, entities, personnel, and asset types are covered. Be explicit about what is excluded if necessary.*

### 2.1 In Scope

This policy applies to:

- All **information assets**, including data, databases, and information systems owned or operated by [Organization Name].
- All **technology assets**, including servers, workstations, network devices, storage systems, end-user computing devices, and operational technology (OT) components.
- All **software assets**, including licensed software, internally developed applications, firmware, and cloud-based services.
- All **third-party and outsourced assets** that are used to process, store, or transmit information on behalf of [Organization Name], where [Organization Name] retains regulatory accountability.
- All **physical assets** that house or support critical information infrastructure (e.g., data centres, server rooms, network racks).
- Assets located on-premises, in colocation facilities, or deployed in cloud environments (public, private, or hybrid).
- All employees, contractors, vendors, and third parties who own, operate, manage, or interact with assets covered by this policy.

### 2.2 Out of Scope

*List any asset categories or organizational units that are explicitly excluded from this policy, and the rationale for their exclusion.*

The following are **outside the scope** of this policy:

- [List any excluded entities, subsidiaries, or asset categories — e.g., "Assets owned exclusively by subsidiary entities not designated as NCII entities by NACSA."]
- Personal devices used solely for personal purposes and not connected to [Organization Name]'s networks or systems.
- [Any other exclusions relevant to the organization's structure.]

### 2.3 Geographic Scope

This policy applies to all operations of [Organization Name] conducted within **Malaysia** and, where applicable, overseas operations that interface with NCII-designated systems within Malaysia.

---

## 3. Regulatory Context

*Provide a summary of the regulatory obligations that this policy is designed to satisfy. Reference specific legislative sections and NACSA directives.*

[Organization Name] has been designated as a **National Critical Information Infrastructure (NCII) entity** under the **Cyber Security Act 2024 (Act 854)** by the National Cyber Security Agency (NACSA). This designation imposes specific statutory obligations on [Organization Name] with respect to the identification, protection, and management of its critical information assets.

### 3.1 Cyber Security Act 2024 (Act 854)

| Section | Provision | Policy Relevance |
|---|---|---|
| **Section 17** | Duties of NCII entity to identify and notify NACSA of NCII assets | Mandates formal asset identification, inventory maintenance, and notification obligations |
| **Section 18** | Duties of NCII entity to comply with directives relating to NCII | Requires NCII entities to follow NACSA-issued directives governing asset protection and management |
| [Additional Section] | [Provision Summary] | [Relevance to this policy] |

### 3.2 Supporting Regulatory Instruments

*List any subsidiary legislation, NACSA codes of practice, or sector-specific guidance that supplements Act 854 in the context of asset management.*

- NACSA Codes of Practice and Standards issued under Act 854
- [Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy — where applicable]
- [Malaysian Personal Data Protection Act 2010 (PDPA) — where asset management intersects with personal data processing]
- [ISO/IEC 27001:2022 — Information Security Management Systems (adopted as internal standard)]
- [Any other applicable regulatory instruments]

---

## 4. Definitions and Abbreviations

*Define all key terms used throughout this document. Consistent terminology is essential for audit-readiness.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Asset** | Any item of value — physical, logical, or informational — that is owned, leased, or operated by [Organization Name] in support of its business and operational objectives. |
| **NCII Asset** | An asset that forms part of, or directly supports, the National Critical Information Infrastructure as designated under Act 854. |
| **Asset Owner** | The individual or organizational unit that holds primary accountability for an asset throughout its lifecycle, including its protection, maintenance, and authorized use. |
| **Asset Custodian** | The individual or team responsible for the day-to-day management, operation, and safeguarding of an asset on behalf of the Asset Owner. |
| **Asset Inventory** | A formally maintained register of all assets within scope, containing attributes necessary for management and regulatory reporting. |
| **Asset Lifecycle** | The complete sequence of phases through which an asset passes from acquisition or creation through to disposal or decommissioning. |
| **Classification** | The process of categorizing an asset based on its criticality, sensitivity, and business impact to determine appropriate protection requirements. |
| **NCII** | National Critical Information Infrastructure — infrastructure designated by NACSA under Act 854 as critical to Malaysia's national security, economy, public health, or safety. |
| **Decommissioning** | The formal process of removing an asset from active operation, including data sanitization, physical disposal, and removal from the asset inventory. |
| **Shadow IT** | Technology assets or services deployed or used within [Organization Name] without formal IT approval or awareness. |
| [Additional Term] | [Definition] |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| Act 854 | Cyber Security Act 2024 |
| BIA | Business Impact Analysis |
| CISO | Chief Information Security Officer |
| CMDB | Configuration Management Database |
| GRC | Governance, Risk and Compliance |
| IT | Information Technology |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| OT | Operational Technology |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| RTO | Recovery Time Objective |
| RPO | Recovery Point Objective |

---

## 5. Policy Statements

*State the overarching policy commitments of the organization. These should be declarative, unambiguous statements of intent and obligation.*

[Organization Name] is committed to maintaining rigorous standards of asset management across all NCII and NCII-supporting assets. The following policy statements are binding on all personnel within scope:

**5.1** All assets owned, operated, or managed by [Organization Name] that meet the NCII asset identification criteria defined in Section 6 of this policy **must** be formally registered in the [Organization Name] Asset Inventory within **[X] business days** of acquisition, deployment, or identification.

**5.2** Every asset within scope **must** be assigned a designated Asset Owner who holds ultimate accountability for that asset's protection and lifecycle management.

**5.3** All assets **must** be classified in accordance with the Asset Classification Methodology defined in Section 7 of this policy. Classification **must** be reviewed at least **annually** or upon any material change to the asset.

**5.4** Asset management practices **must** comply with all directives, codes of practice, and standards issued by NACSA under Act 854, as well as any applicable sector-specific regulatory requirements.

**5.5** Assets **must** be disposed of or decommissioned only in accordance with the approved disposal procedures defined in Section 10 of this policy. Unauthorized disposal or abandonment of NCII assets is prohibited.

**5.6** [Organization Name] **must** notify NACSA in accordance with the requirements of Act 854 Section 17 regarding the identification and status of NCII assets, within the timeframes prescribed by NACSA.

**5.7** All third-party vendors and service providers who manage or operate assets on behalf of [Organization Name] **must** comply with the requirements of this policy as stipulated in applicable contractual agreements.

**5.8** Non-compliance with this policy may result in disciplinary action, up to and including termination of employment or contract, and may expose [Organization Name] and relevant individuals to regulatory sanctions under Act 854.

---

## 6. NCII Asset Identification Criteria

*Describe the criteria used to determine whether an asset qualifies as an NCII asset and how the identification process is conducted.*

### 6.1 Overview

*This section establishes the formal criteria and process by which [Organization Name] determines whether an asset falls within the scope of NCII designation under Act 854. Criteria should be reviewed against NACSA's sector-specific guidance and updated as directives are issued.*

The identification of NCII assets is a foundational obligation under Act 854 Section 17. [Organization Name] applies a structured, risk-informed approach to asset identification to ensure that all assets that are critical to the continuity of [Organization Name]'s designated NCII functions are captured and formally registered.

### 6.2 NCII Asset Identification Criteria

An asset shall be identified as an NCII Asset if it meets **one or more** of the following criteria:

| Criterion | Description | Examples |
|---|---|---|
| **Criticality** | The asset supports a function, service, or process designated as critical by NACSA or identified as NCII by [Organization Name]'s Business Impact Analysis (BIA). | Core banking systems, payment processing platforms |
| **Dependency** | Disruption or compromise of the asset would have a cascading impact on other NCII assets or functions. | Central authentication systems, network backbone infrastructure |
| **Regulatory Designation** | The asset has been explicitly identified as an NCII component by NACSA or is required to be managed as NCII under Act 854 or sector-specific directives. | [Organization-specific examples] |
| **Data Sensitivity** | The asset stores, processes, or transmits data that, if compromised, would materially impact national security, public safety, or the financial system. | Customer financial data repositories, transaction logs |
| **Operational Continuity** | Loss or degradation of the asset would prevent [Organization Name] from meeting its regulatory obligations or maintaining minimum service levels. | Disaster recovery infrastructure, core network connectivity |
| **Physical Criticality** | The physical asset directly houses or enables NCII systems and its compromise would expose those systems to risk. | Primary data centre, server rooms |

### 6.3 Identification Process

*Describe the step-by-step process for conducting NCII asset identification exercises. This should be repeatable and documented.*

The NCII asset identification process shall be conducted as follows:

1. **Initiation:** The CISO initiates the identification exercise [annually / upon material organizational change / upon NACSA directive].
2. **Scoping:** Business unit heads nominate assets within their operational remit that may meet the NCII criteria defined in Section 6.2.
3. **Assessment:** The IT Security team, in consultation with business stakeholders, evaluates each nominated asset against the criteria in Section 6.2.
4. **Business Impact Analysis:** A BIA is conducted or referenced for each candidate asset to assess criticality and dependency.
5. **Classification and Registration:** Assets meeting one or more criteria are classified (per Section 7) and registered in the Asset Inventory (per Section 11).
6. **NACSA Notification:** Where required under Act 854 Section 17, NACSA is notified of newly identified NCII assets within the prescribed timeframe.
7. **Documentation:** All identification decisions, including assets assessed and not classified as NCII, are documented and retained for audit purposes.

### 6.4 NCII Asset Identification Register

*Maintain a summary register of assets assessed during each identification exercise, including both confirmed NCII assets and those assessed but excluded.*

| Asset ID | Asset Name | Asset Type | Business Function | Criteria Met | NCII Designation | Assessment Date | Assessed By |
|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Type] | [Function] | [Criterion] | Yes / No | [Date] | [Name] |
| [ASSET-002] | [Asset Name] | [Type] | [Function] | [Criterion] | Yes / No | [Date] | [Name] |

---

## 7. Asset Classification Methodology

*Define the classification tiers, the criteria for each tier, and the protection requirements associated with each classification level.*

### 7.1 Overview

*This section defines how assets are categorized by criticality and sensitivity. Classification drives downstream decisions about protection controls, access restrictions, and priority of recovery. Align classification levels with your organization's existing information classification scheme where possible.*

All NCII assets and NCII-supporting assets shall be classified according to the methodology defined in this section. Asset classification determines the minimum security controls and management requirements applicable to each asset.

### 7.2 Asset Classification Tiers

[Organization Name] applies the following asset classification tiers:

| Classification Tier | Definition | Impact of Compromise | Examples |
|---|---|---|---|
| **Tier 1 — Critical** | Assets whose failure or compromise would cause severe, immediate impact on NCII functions, national security, or regulatory compliance. | Catastrophic — system-wide failure, major financial loss, national impact | Core financial processing systems, central authentication infrastructure |
| **Tier 2 — High** | Assets whose failure or compromise would significantly impair NCII functions or cause material operational disruption. | Significant — major service degradation, substantial financial or reputational impact | Business-critical applications, primary network infrastructure |
| **Tier 3 — Medium** | Assets whose failure or compromise would cause moderate disruption with limited NCII impact. | Moderate — partial service disruption, recoverable within defined RTO/RPO | Supporting systems, secondary applications |
| **Tier 4 — Low** | Assets whose failure or compromise would have minimal operational impact and no direct NCII consequence. | Minor — isolated impact, quickly recoverable | Administrative workstations, non-critical peripherals |

### 7.3 Classification Criteria

Assets shall be classified by assessing the following dimensions:

- **Confidentiality:** The sensitivity of data stored or processed by the asset.
- **Integrity:** The criticality of ensuring the accuracy and completeness of asset outputs.
- **Availability:** The operational dependency on uninterrupted asset availability.
- **Dependency:** The extent to which other critical assets depend on this asset.
- **Regulatory Exposure:** Whether asset compromise would constitute a reportable incident or regulatory breach.

### 7.4 Classification Assignment and Review

*Document how classification is assigned initially and how it is reviewed over time.*

| Activity | Frequency | Responsible Party |
|---|---|---|
| Initial classification | At asset onboarding | Asset Owner, IT Security |
| Periodic classification review | Annually | Asset Owner |
| Triggered classification review | Upon material change to asset or environment | Asset Owner, CISO |
| Classification dispute resolution | As required | CISO |

### 7.5 Classification Labels and Handling

| Classification Tier | Label | Handling Requirements |
|---|---|---|
| Tier 1 — Critical | `CRITICAL-NCII` | [Define specific handling, access, and protection requirements] |
| Tier 2 — High | `HIGH-NCII` | [Define specific handling, access, and protection requirements] |
| Tier 3 — Medium | `MEDIUM` | [Define specific handling, access, and protection requirements] |
| Tier 4 — Low | `LOW` | [Define specific handling, access, and protection requirements] |

---

## 8. Asset Ownership Assignment

*Define the model for assigning and maintaining accountability for each asset, including the roles of Asset Owner and Asset Custodian.*

### 8.1 Overview

*Every asset within scope must have a clearly assigned owner. Unowned assets represent a governance gap and a potential regulatory risk. This section defines the ownership model, assignment process, and responsibilities of each role.*

Clear asset ownership is a prerequisite for effective asset governance. Every asset registered in [Organization Name]'s Asset Inventory **must** have a designated **Asset Owner** and, where appropriate, an **Asset Custodian**.

### 8.2 Asset Ownership Model

| Role | Accountability Level | Description |
|---|---|---|
| **Asset Owner** | Primary / Accountable | The senior individual (typically a business unit head or IT Director) with ultimate accountability for the asset's protection, classification, and lifecycle decisions. Asset Owners approve access, authorize changes, and are accountable for policy compliance. |
| **Asset Custodian** | Operational / Responsible | The individual or team (typically IT Operations or a system administrator) responsible for the day-to-day management, maintenance, and protection of the asset in accordance with the Asset Owner's directions. |
| **IT Security** | Advisory / Oversight | Provides security requirements, monitors compliance, and advises the Asset Owner on classification and protection decisions. |
| **CISO** | Governance / Escalation | Holds overall governance accountability for the asset management framework and escalates unresolved ownership issues. |

### 8.3 Ownership Assignment Process

*Describe how ownership is assigned to newly identified or acquired assets.*

1. **Identification of Candidate Owner:** The department or function that initiates the acquisition or deployment of an asset is responsible for nominating an Asset Owner prior to commissioning.
2. **Ownership Confirmation:** The nominated Asset Owner formally accepts ownership by signing the [Asset Ownership Acceptance Form — Appendix B].
3. **Registration:** Asset Owner and Custodian details are recorded in the Asset Inventory at the time of asset registration.
4. **Ownership Transitions:** Where an Asset Owner changes due to organizational restructuring, resignation, or reassignment, ownership must be formally transferred within **[X] business days** using the [Asset Ownership Transfer Form — Appendix C].

### 8.4 Asset Owner Responsibilities

Asset Owners are responsible for:

- Ensuring the asset is registered in the Asset Inventory with accurate and current information.
- Approving and periodically reviewing the asset's classification tier.
- Authorizing access to the asset and ensuring access rights are reviewed at least [annually / semi-annually].
- Ensuring that Asset Custodians are performing day-to-day management obligations.
- Approving changes to the asset through the Change Management process.
- Initiating the decommissioning process at end-of-life.
- Participating in the annual asset inventory review.

### 8.5 Orphaned Assets

*Define what happens when an asset has no designated owner, e.g., following personnel departure.*

Assets identified as lacking a designated Asset Owner ("orphaned assets") must be:

1. Flagged in the Asset Inventory with the status `Orphaned`.
2. Reported to the CISO within **[X] business days** of identification.
3. Assigned an interim custodian from the IT Security team pending formal ownership assignment.
4. Formally assigned to a new Owner within **[X] days** of initial flagging, with CISO sign-off.

---

## 9. Asset Lifecycle Management

*Define the phases of the asset lifecycle and the requirements applicable at each phase.*

### 9.1 Overview

*This section provides the framework for managing assets from acquisition through to disposal. Each lifecycle phase has specific obligations to ensure assets are managed securely and consistently, and that the Asset Inventory remains current at all times.*

All assets within scope are subject to lifecycle management requirements throughout the following phases:

### 9.2 Asset Lifecycle Phases

```
[Acquisition / Creation] → [Registration] → [Operation & Maintenance] → [Review & Reassessment] → [Disposal / Decommissioning]
```

### 9.3 Phase 1 — Acquisition and Onboarding

*This phase covers all activities required before an asset enters operational use.*

| Requirement | Description | Responsible |
|---|---|---|
| Pre-acquisition security review | All new assets must undergo a security assessment prior to procurement approval. | IT Security, Asset Owner |
| Vendor due diligence | Third-party and cloud-hosted assets must undergo vendor risk assessment prior to onboarding. | Procurement, IT Security |
| Asset registration | Asset must be registered in the Asset Inventory within [X] business days of acquisition. | Asset Custodian |
| Classification | Asset classification tier must be assigned at onboarding. | Asset Owner, IT Security |
| Baseline configuration | Asset must be configured in accordance with [Organization Name]'s applicable hardening standards prior to deployment. | IT Operations |
| Licensing compliance | Software assets must be licensed in accordance with applicable agreements prior to deployment. | IT Operations, Legal |

### 9.4 Phase 2 — Active Operation and Maintenance

*This phase covers requirements during the operational life of an asset.*

| Requirement | Description | Frequency | Responsible |
|---|---|---|---|
| Patch and vulnerability management | Assets must be patched in accordance with [Organization Name]'s Vulnerability Management Policy. | Per policy schedule | IT Operations |
| Change management | Changes to assets must be processed through the formal Change Management process. | Per change event | Asset Custodian, Change Manager |
| Access review | User access to assets must be reviewed to ensure appropriateness. | [Semi-annually / Annually] | Asset Owner |
| Performance monitoring | Assets must be monitored for availability, performance, and security events. | Continuous | IT Operations, SOC |
| Inventory refresh | Asset Inventory records must be updated to reflect any material changes. | Upon change | Asset Custodian |
| Backup and recovery | Critical and High-tier assets must be subject to backup regimes consistent with their RTO/RPO requirements. | Per BCP schedule | IT Operations |

### 9.5 Phase 3 — Review and Reassessment

*This phase covers periodic and triggered reviews of asset status.*

| Trigger | Review Activities | Responsible |
|---|---|---|
| Annual review | Full review of asset classification, ownership, and inventory accuracy. | CISO, Asset Owners |
| Material environmental change | Re-assessment of classification and applicable controls. | Asset Owner, IT Security |
| Security incident | Post-incident review of asset vulnerability and controls adequacy. | CISO, Incident Response Team |
| Regulatory directive | Review and update of asset management practices per NACSA direction. | CISO, IT Director |
| Technology refresh | Re-assessment of assets approaching end-of-life or undergoing major upgrade. | Asset Owner, IT Operations |

### 9.6 Asset Status Definitions

| Status | Description |
|---|---|
| `Active` | Asset is in full operational use. |
| `Under Maintenance` | Asset is temporarily out of service for planned maintenance. |
| `Suspended` | Asset is inactive pending review, investigation, or decision. |
| `Pending Disposal` | Asset has been approved for disposal and is awaiting processing. |
| `Decommissioned` | Asset has been formally retired from service and removed from active inventory. |
| `Orphaned` | Asset has no designated owner — flagged for immediate remediation. |

---

## 10. Asset Disposal and Decommissioning

*Define the requirements and processes for the secure and compliant disposal or decommissioning of assets at end-of-life.*

### 10.1 Overview

*Improper disposal of assets — particularly those containing sensitive or personal data — constitutes a significant regulatory and reputational risk. This section mandates a structured, documented approach to asset retirement. All disposal activities must be traceable and auditable.*

The disposal or decommissioning of any NCII asset or NCII-supporting asset must be conducted in a controlled, documented, and authorized manner. No asset within scope may be disposed of, repurposed, donated, sold, or abandoned without completing the formal decommissioning process defined in this section.

### 10.2 Triggers for Decommissioning

An asset decommissioning process shall be initiated upon:

- Reaching the end of the asset's defined operational lifespan.
- End-of-life or end-of-support notification from the vendor.
- Technology refresh or platform migration resulting in the retirement of existing assets.
- Business decision to cease use of a particular asset, system, or application.
- Regulatory direction to retire or replace a system.
- Severe, unresolvable security vulnerability rendering the asset unsuitable for continued operation.

### 10.3 Decommissioning Approval Requirements

| Asset Classification | Approvals Required |
|---|---|
| Tier 1 — Critical | CISO + IT Director + [Senior Executive Sponsor / COO] |
| Tier 2 — High | CISO + IT Director |
| Tier 3 — Medium | IT Director + Asset Owner |
| Tier 4 — Low | Asset Owner + IT Operations Lead |

### 10.4 Data Sanitization Requirements

*All data must be securely removed from assets prior to disposal or repurposing. Define the acceptable data destruction methods.*

| Asset Type | Acceptable Sanitization Method | Standard Reference |
|---|---|---|
| Magnetic hard drives | Cryptographic erasure, multi-pass overwrite, or physical destruction (degaussing / shredding) | [NIST SP 800-88 / NACSA guideline reference] |
| Solid-state drives (SSD) | Cryptographic erasure or physical destruction | [Standard reference] |
| Optical media | Physical destruction (shredding) | [Standard reference] |
| Mobile devices | Factory reset with remote wipe verification | [Standard reference] |
| Cloud-hosted storage | Cryptographic deletion per cloud provider's certified process | [Standard reference] |
| Paper records | Cross-cut shredding or secure destruction services | [Standard reference] |

All data sanitization activities must be performed by [an authorized internal team / an approved third-party provider] and **must** be documented using the [Data Sanitization Certificate — Appendix D].

### 10.5 Physical Disposal Methods

| Disposal Method | Applicability | Documentation Required |
|---|---|---|
| Internal repurposing | Asset reassigned to lower-classification use within [Organization Name]. | Asset transfer record, re-registration in inventory |
| Certified e-waste disposal | Asset forwarded to an approved e-waste contractor for compliant disposal. | Disposal certificate from contractor |
| Physical destruction | Asset physically destroyed (shredded/crushed) for highest-classification hardware. | Destruction certificate, witnessed destruction record |
| Sale or donation | Asset sold or donated following full data sanitization. | Sales/donation record, sanitization certificate |
| Return to vendor | Leased or borrowed asset returned at end of contract term. | Lease termination and return receipt |

### 10.6 Decommissioning Process

1. **Initiation:** Asset Owner submits a [Decommissioning Request Form — Appendix E] to IT Operations and CISO.
2. **Approval:** Required approvals are obtained in accordance with Section 10.3.
3. **Data Backup:** Any data required for regulatory retention is backed up and archived prior to sanitization.
4. **Data Sanitization:** Applicable sanitization method is applied and documented.
5. **Physical Disposal:** Asset is physically disposed of through the approved method.
6. **Inventory Update:** Asset Inventory status is updated to `Decommissioned`, with the disposal date, method, and responsible party recorded.
7. **Access Revocation:** All access credentials, certificates, licenses, and network entries associated with the asset are revoked.
8. **Regulatory Notification:** Where required under Act 854 or NACSA directive, NACSA is notified of the decommissioning of an NCII asset.
9. **Record Retention:** All decommissioning documentation is retained for a minimum of **[X] years** in accordance with [Organization Name]'s Record Retention Policy.

### 10.7 Unauthorized Disposal

Disposal of an in-scope asset without following the process defined in this section is a **disciplinary matter** and may constitute a breach of Act 854. Any suspected unauthorized disposal must be reported to the CISO immediately and may be subject to internal investigation.

---

## 11. Asset Inventory Maintenance

*Define the requirements for establishing, maintaining, and auditing the organization's Asset Inventory.*

### 11.1 Overview

*The Asset Inventory is the authoritative register of all in-scope assets. Its accuracy is critical to regulatory compliance, incident response, risk management, and business continuity planning. This section defines what must be recorded, how it must be maintained, and how its accuracy must be verified.*

[Organization Name] shall maintain a centralized, continuously updated **Asset Inventory** that serves as the definitive register of all NCII assets and NCII-supporting assets. The Asset Inventory shall be maintained in [CMDB tool name / GRC platform / Asset management system — e.g., ServiceNow, Jira Assets, etc.].

### 11.2 Mandatory Asset Inventory Attributes

The following attributes must be recorded for each asset in the Asset Inventory:

| Attribute | Description | Mandatory |
|---|---|---|
| Asset ID | Unique identifier assigned to the asset | Yes |
| Asset Name | Descriptive name of the asset | Yes |
| Asset Type | Category (e.g., Server, Network Device, Application, Database) | Yes |
| Asset Description | Brief description of the asset's function | Yes |
| Classification Tier | Tier 1 / 2 / 3 / 4 per Section 7 | Yes |
| NCII Designation | Yes / No | Yes |
| Asset Owner | Name and role of designated Asset Owner | Yes |
| Asset Custodian | Name and team of designated Asset Custodian | Yes |
| Business Unit | Business unit responsible for the asset | Yes |
| Physical / Logical Location | Data centre, office, cloud region, etc. | Yes |
| IP Address / Hostname | For network-connected assets | Yes (where applicable) |
| Operating System / Platform | For hardware and software assets | Yes (where applicable) |
| Software Version / Firmware | Current version in production | Yes (where applicable) |
| Vendor / Manufacturer | Supplier of the asset | Yes |
| Procurement Date | Date of purchase or onboarding | Yes |
| Warranty / Support End Date | Date vendor support expires | Yes |
| Asset Status | Active / Suspended / Pending Disposal / Decommissioned | Yes |
| Last Review Date | Date of last inventory verification | Yes |
| Dependencies | Assets this asset depends on, or that depend on it | Recommended |
| NACSA Notification Status | Whether NACSA has been notified of this asset | Yes (NCII assets) |
| Disposal Date | Date of decommissioning (if applicable) | Yes (upon disposal) |
| Notes | Any additional relevant information | Optional |

### 11.3 Inventory Maintenance Obligations

| Activity | Frequency | Responsible |
|---|---|---|
| Real-time update on asset change | Upon any material change | Asset Custodian |
| Automated discovery reconciliation | [Monthly / Quarterly] | IT Operations |
| Full inventory audit | Annually | IT Security, Asset Owners |
| NACSA inventory reporting | Per NACSA directive | CISO |
| Spot-check verification | [Quarterly] | IT Security |

### 11.4 Automated Asset Discovery

*Where technically feasible, automated discovery tools shall supplement manual inventory maintenance to detect unregistered or changed assets.*

[Organization Name] shall deploy and maintain automated asset discovery tools to:

- Detect all network-connected devices and systems on [Organization Name]'s networks.
- Reconcile discovered assets against the Asset Inventory to identify unregistered or missing assets.
- Alert IT Security to the presence of unauthorized or unknown assets (Shadow IT).
- Generate periodic discovery reports for review by the CISO.

Automated discovery tools in use: [List tools — e.g., Qualys Asset Management, Tenable.sc, ServiceNow Discovery, etc.]

### 11.5 Shadow IT Management

Any asset identified through automated discovery or manual reporting that is not registered in the Asset Inventory shall be treated as a potential Shadow IT instance and must be:

1. Flagged and investigated by IT Security within **[X] business days** of discovery.
2. Assessed against NCII identification criteria (Section 6).
3. Either formally onboarded (registered, classified, and assigned an owner) or decommissioned and removed from the network.
4. Reported to the CISO, with repeat occurrences escalated to the IT Director.

### 11.6 Annual Asset Inventory Audit

An annual, formal audit of the Asset Inventory shall be conducted to verify:

- Completeness and accuracy of all asset records.
- That all assets have designated owners and custodians.
- That classification tiers remain appropriate and current.
- That assets approaching end-of-support or end-of-life are flagged for lifecycle action.
- That all NCII assets have been reported to NACSA as required.

The annual audit findings shall be reported to the CISO and [Board / ITSCO / Relevant governance committee] and documented in the [Annual Asset Audit Report — Appendix F].

---

## 12. Roles and Responsibilities

*Define all roles involved in asset management and their responsibilities. A RACI matrix ensures clarity of accountability.*

### 12.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Board / ITSCO | IT Director / CISO | IT Security Team | Asset Owner | Asset Custodian | IT Operations | Business Units | Procurement | Legal / Compliance |
|---|---|---|---|---|---|---|---|---|---|
| Policy approval and oversight | A | C | I | I | I | I | I | I | C |
| NCII asset identification | I | A | R | C | C | C | C | I | C |
| Asset classification | I | A | C | R | C | I | C | I | C |
| Asset ownership assignment | I | A | C | R | I | I | C | I | I |
| Asset Inventory maintenance | I | A | C | C | R | R | I | I | I |
| Automated asset discovery | I | A | R | I | C | R | I | I | I |
| Shadow IT investigation | I | A | R | I | I | C | I | I | I |
| Vendor risk assessment | I | A | C | C | I | I | I | R | C |
| Change management | I | A | C | C | R | R | C | I | I |
| Access review | I | A | C | R | C | I | C | I | I |
| Patch and vulnerability management | I | A | R | C | C | R | I | I | I |
| Decommissioning approval | I | A | R | R | I | I | I | I | C |
| Data sanitization | I | A | R | C | R | R | I | I | I |
| NACSA notification | I | A | R | C | I | I | I | I | C |
| Annual inventory audit | I | A | R | C | C | C | C | I | C |
| Policy review | C | A | R | C | I | I | C | I | C |

---

## 13. Compliance and Enforcement

*Define how compliance with this policy is measured, monitored, and enforced.*

### 13.1 Compliance Monitoring

*Describe how [Organization Name] monitors adherence to this policy on an ongoing basis.*

Compliance with this policy shall be monitored through the following mechanisms:

- **Automated Inventory Reconciliation:** Regular automated scans to detect discrepancies between discovered assets and the Asset Inventory.
- **Periodic Compliance Reviews:** Quarterly reviews by the IT Security team of a sample of asset records to verify completeness and accuracy.
- **Internal Audit:** Annual internal audit of asset management practices against this policy's requirements.
- **CISO Reporting:** The CISO shall report on Asset Management compliance status to [the Board Risk Committee / ITSCO / relevant governance body] on a [quarterly / semi-annual] basis.
- **Key Metrics:** The following metrics shall be tracked and reported:

| Metric | Target | Reporting Frequency |
|---|---|---|
| Asset Inventory completeness (% assets registered) | 100% | Monthly |
| Assets with designated owners | 100% | Monthly |
| Overdue classification reviews | 0 | Monthly |
| Shadow IT assets identified and remediated | [Target] | Quarterly |
| Assets approaching end-of-support without lifecycle plan | 0 | Quarterly |
| Decommissioning requests completed within SLA | [X]% | Quarterly |

### 13.2 Policy Breaches

Breaches of this policy shall be assessed in accordance with [Organization Name]'s Disciplinary Policy. Severity of breach will be assessed by the CISO in consultation with Human Resources and Legal.

| Breach Severity | Examples | Consequence |
|---|---|---|
| **Minor** | Failure to update Asset Inventory within prescribed timeframe | Documented warning, mandatory retraining |
| **Significant** | Failure to assign asset ownership, repeated non-compliance | Formal disciplinary action |
| **Serious** | Unauthorized disposal of an NCII asset, deliberate falsification of inventory records | Disciplinary action up to and including termination, potential regulatory referral |

---

## 14. Exceptions and Waivers

*Define how exceptions to this policy are handled.*

### 14.1 Exception Process

Any request to deviate from the requirements of this policy must be submitted using the [Policy Exception Request Form — Appendix G] and must include:

- A clear description of the exception required.
- The business justification for the exception.
- An assessment of the risk associated with the exception.
- Proposed compensating controls to mitigate the risk.
- The duration for which the exception is required.

### 14.2 Exception Approval Authority

| Exception Scope | Approval Required |
|---|---|
| Minor, time-limited exceptions (≤ 30 days) | CISO |
| Exceptions affecting Tier 1 or Tier 2 assets | CISO + IT Director |
| Exceptions with regulatory compliance implications | CISO + IT Director + Legal / Compliance |
| Exceptions > 90 days | Board / ITSCO |

All approved exceptions must be:

- Documented and retained in the exception register.
- Reviewed at expiry for renewal or closure.
- Reported to the CISO on a quarterly basis.

Exceptions do not override obligations under Act 854 or NACSA directives. Where an exception would place [Organization Name] in breach of a statutory obligation, it shall not be approved.

---

## 15. Review and Approval

### 15.1 Policy Review

This policy shall be reviewed:

- **Annually**, no later than [Next Review Date].
- **Upon** any material change to the regulatory landscape (e.g., new NACSA directive, amendment to Act 854).
- **Following** any significant security incident that reveals a gap in asset management practices.
- **Upon** material change to [Organization Name]'s technology environment or organizational structure.

The CISO is responsible for initiating the review process and ensuring that the updated policy is submitted for approval within **[X] days** of the review trigger.

### 15.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial version — document created |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name], [Title] | [Description of major revision] |

### 15.3 Approval Sign-Off

*All individuals listed below have reviewed this policy and confirm that it is fit for purpose, appropriate for [Organization Name]'s risk environment, and compliant with applicable regulatory requirements.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Director | [Name] | [Signature] | [Date] |
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Risk Officer / Head of Compliance | [Name] | [Signature] | [Date] |
| Head of Legal | [Name] | [Signature] | [Date] |
| [Senior Executive Sponsor — e.g., COO / CEO] | [Name] | [Signature] | [Date] |
| Board / ITSCO Representative | [Name] | [Signature] | [Date] |

---

## 16. References

*List all regulatory instruments, standards, and internal policies that inform or are referenced by this document.*

### 16.1 Regulatory References

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 17** | Duties of NCII entity — identification and notification of NCII assets to NACSA |
| **Cyber Security Act 2024 (Act 854), Section 18** | Duties of NCII entity to comply with directives issued by NACSA relating to NCII |
| **NACSA Codes of Practice** | Sector-specific codes of practice and standards issued pursuant to Act 854 |
| **Personal Data Protection Act 2010 (PDPA)** | Requirements relevant to assets processing personal data |
| **Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy** | Technology risk management requirements for financial institutions |

### 16.2 Standards References

| Reference | Description |
|---|---|
| **ISO/IEC 27001:2022** | Information Security Management Systems — requirements for asset management controls (Annex A Control 5.9, 5.10, 5.11, 5.12) |
| **ISO/IEC 27002:2022** | Information security controls — guidance for asset management implementation |
| **NIST SP 800-88 Rev.1** | Guidelines for Media Sanitization |
| **NIST Cybersecurity Framework (CSF) 2.0** | Identify function — asset management category |

### 16.3 Internal Policy References

| Document | Description |
|---|---|
| [Information Classification Policy] | Governs the classification of information assets |
| [Information Security Policy] | Overarching information security governance framework |
| [Vendor Risk Management Policy] | Requirements for third-party asset management |
| [Business Continuity and Disaster Recovery Policy] | Asset recovery requirements aligned with BCP |
| [Vulnerability Management Policy] | Patching and vulnerability remediation requirements for assets |
| [Change Management Policy] | Change control requirements for asset modifications |
| [Record Retention Policy] | Retention periods for asset management records |
| [Incident Response Policy] | Requirements triggered by asset-related security incidents |

---

## 17. Appendices

### Appendix A — NCII Asset Inventory Template

*This appendix provides the standard template for recording NCII assets in the Asset Inventory. This template should be replicated in the designated asset management system.*

| Field | Value |
|---|---|
| Asset ID | [ASSET-XXXX] |
| Asset Name | |
| Asset Type | |
| Asset Description | |
| Classification Tier | |
| NCII Designation | Yes / No |
| Business Function Supported | |
| Asset Owner | |
| Asset Custodian | |
| Business Unit | |
| Physical Location | |
| Logical Location / IP | |
| Operating System | |
| Software Version | |
| Vendor / Manufacturer | |
| Procurement Date | |
| Warranty / Support End Date | |
| Asset Status | |
| Last Review Date | |
| NACSA Notification Status | |
| Dependencies | |
| Notes | |

---

### Appendix B — Asset Ownership Acceptance Form

*To be completed by the designated Asset Owner upon formal assignment of ownership.*

**Asset Details:**

- Asset ID: [ASSET-XXXX]
- Asset Name: [Asset Name]
- Classification Tier: [Tier 1 / 2 / 3 / 4]

**Ownership Acceptance:**

I, [Name], [Title], of [Business Unit], hereby accept ownership of the above-named asset. I acknowledge and accept the responsibilities of the Asset Owner role as defined in [Organization Name]'s Asset Management Policy (Section 8.4), including accountability for the asset's protection, classification, access control, and lifecycle management.

| Field | Details |
|---|---|
| Owner Name | |
| Title / Role | |
| Business Unit | |
| Signature | |
| Date | |

---

### Appendix C — Asset Ownership Transfer Form

*To be completed when ownership of an asset is transferred from one individual to another.*

| Field | Details |
|---|---|
| Asset ID | |
| Asset Name | |
| Transferring Owner (Name / Role) | |
| Reason for Transfer | |
| Receiving Owner (Name / Role) | |
| Effective Date of Transfer | |
| CISO Approval | |
| Date of CISO Approval | |

---

### Appendix D — Data Sanitization Certificate

*To be completed upon completion of data sanitization prior to asset disposal or repurposing.*

| Field | Details |
|---|---|
| Asset ID | |
| Asset Name / Description | |
| Sanitization Method Applied | |
| Standard Referenced | |
| Sanitization Date | |
| Performed By (Name / Role) | |
| Witnessed By (Name / Role) | |
| Third-Party Provider (if applicable) | |
| Certificate / Reference Number | |
| Asset Owner Sign-Off | |
| CISO Sign-Off | |

---

### Appendix E — Asset Decommissioning Request Form

*To be submitted by the Asset Owner to initiate a formal decommissioning.*

| Field | Details |
|---|---|
| Asset ID | |
| Asset Name | |
| Classification Tier | |
| Reason for Decommissioning | |
| Proposed Decommissioning Date | |
| Data Backup Completed (Y/N) | |
| Proposed Disposal Method | |
| Dependencies Identified and Managed | |
| Asset Owner Name / Signature | |
| Date Submitted | |
| CISO Approval | |
| IT Director Approval (Tier 1/2) | |
| Approved Decommissioning Date | |

---

### Appendix F — Annual Asset Audit Report Template

*This appendix provides the structure for the annual Asset Inventory audit report.*

**Report Period:** [Year]
**Audit Lead:** [Name, Title]
**Date Completed:** [Date]

**Executive Summary:**
[Summary of audit findings, key issues, and recommendations.]

**Audit Scope:**
[Description of assets and processes included in the audit.]

**Findings Summary:**

| Finding ID | Description | Severity | Affected Assets | Recommended Action | Owner | Target Date |
|---|---|---|---|---|---|---|
| F-001 | [Finding description] | High / Medium / Low | [Asset IDs] | [Recommended action] | [Owner] | [Date] |

**Key Metrics:**

| Metric | Target | Actual | Status |
|---|---|---|---|
| Asset Inventory completeness | 100% | [X]% | [RAG] |
| Assets with designated owners | 100% | [X]% | [RAG] |
| Overdue classification reviews | 0 | [X] | [RAG] |
| NACSA notifications current | 100% | [X]% | [RAG] |

**Conclusion and Recommendations:**
[Overall conclusion and priority recommendations for the coming year.]

---

### Appendix G — Policy Exception Request Form

*To be submitted when a deviation from the requirements of this policy is required.*

| Field | Details |
|---|---|
| Requestor Name / Role | |
| Date of Request | |
| Policy Section(s) Affected | |
| Description of Exception Required | |
| Business Justification | |
| Risk Assessment | |
| Proposed Compensating Controls | |
| Duration of Exception Requested | |
| Asset(s) Affected | |
| CISO Decision | Approved / Rejected |
| CISO Signature | |
| IT Director Decision (if required) | Approved / Rejected |
| Approval Date | |
| Exception Expiry Date | |
| Review Date | |

---

### Appendix H — NACSA Notification Log

*Maintain a record of all notifications made to NACSA in accordance with Act 854 Section 17.*

| Notification ID | Asset ID | Asset Name | Notification Type | Date Notified | NACSA Reference | Follow-Up Actions | Status |
|---|---|---|---|---|---|---|---|
| [NACSA-001] | [ASSET-XXXX] | [Asset Name] | Initial Registration / Update / Decommissioning | [Date] | [Reference] | [Actions] | [Status] |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | [Document ID] | Version 1.0 | Last Reviewed: [Last Review Date]**
*This document is subject to annual review. Printed copies are uncontrolled. Refer to the document management system for the current version.*