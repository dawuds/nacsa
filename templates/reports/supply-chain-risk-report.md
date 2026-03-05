# Supply Chain Risk Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., NACSA-SCR-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CISO / Head of Procurement |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Document Status** | [Draft / Under Review / Approved] |

---

> **Handling Instructions:** This document is classified **Confidential**. It contains sensitive information regarding the organization's supply chain security posture, vendor risk ratings, and critical infrastructure dependencies. Access is restricted to authorized personnel on a need-to-know basis. Unauthorized disclosure, reproduction, or transmission is strictly prohibited.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Supply Chain Mapping](#3-supply-chain-mapping)
4. [Vendor Risk Ratings](#4-vendor-risk-ratings)
5. [Component Provenance Assessment](#5-component-provenance-assessment)
6. [Single Points of Failure Analysis](#6-single-points-of-failure-analysis)
7. [Geopolitical Risk Factors](#7-geopolitical-risk-factors)
8. [Mitigation Recommendations](#8-mitigation-recommendations)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Supply Chain Risk Report ("Report") documents the assessment of supply chain security risks associated with the National Critical Information Infrastructure ("NCII") systems, components, and services operated or relied upon by [Organization Name]. It is prepared in accordance with obligations under the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 28, which impose duties on NCII sector leads and entities to identify, assess, and manage cybersecurity risks arising from the supply chain.

This Report serves to:

- Provide a structured inventory and risk assessment of all third-party vendors, suppliers, and service providers contributing to NCII system components and services.
- Identify critical dependencies, single points of failure, and geopolitical risk exposures within the supply chain.
- Present risk-rated assessments to support informed procurement, vendor management, and risk treatment decisions.
- Demonstrate compliance with NACSA's supply chain security requirements under Act 854.
- Enable executive and board-level oversight of material supply chain risks.

### 1.2 Scope

*Define the organizational and technical boundaries to which this Report applies. Include specific NCII systems, business units, or services covered.*

This Report applies to:

**In Scope:**

- All NCII-designated systems operated by [Organization Name] including: [List NCII systems, e.g., Core Banking Platform, Payment Switch, Customer Identity Platform]
- All third-party vendors, managed service providers, cloud service providers, hardware manufacturers, and software publishers whose products or services are integrated into or support the above NCII systems
- Sub-contractors and fourth-party suppliers where known and material to NCII system operation
- Open-source software components incorporated into NCII system builds

**Out of Scope:**

- [Specify any systems, services, or vendor relationships explicitly excluded from this assessment and the rationale for exclusion]
- Internal tools and applications with no NCII system integration

**Assessment Period:**

| Field | Value |
|---|---|
| **Reporting Period** | [Start Date] to [End Date] |
| **Assessment Conducted By** | [Internal Team / Third-Party Assessor Name] |
| **Assessment Methodology** | [e.g., Questionnaire, On-site Audit, Automated Scanning, Document Review] |

---

## 2. Regulatory Context

### 2.1 Legislative Framework

*Summarize the key regulatory obligations that mandate this Report. Reference specific sections of Act 854 and any subsidiary legislation or guidelines issued by NACSA.*

This Report is prepared to address the following statutory requirements:

| Legislation / Instrument | Section / Clause | Requirement Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Duty of NCII entity to comply with cybersecurity measures including supply chain security requirements as prescribed by the Chief Executive of NACSA |
| Cyber Security Act 2024 (Act 854) | Section 28 | Obligation to assess and manage cybersecurity risks from third-party service providers and suppliers with access to or integration with NCII systems |
| [NACSA NCII Sector Cybersecurity Framework] | [Clause Reference] | [Requirement description, e.g., mandatory annual supply chain risk assessment for Tier 1 NCII entities] |
| [Any applicable BNM Risk Management in Technology (RMiT) Policy] | [Clause Reference] | [Description — include if applicable to the organization's sector] |

### 2.2 Relationship to Organizational Risk Framework

*Describe how this supply chain risk assessment integrates with the organization's broader enterprise risk management and cybersecurity governance frameworks.*

This Report is produced as part of [Organization Name]'s integrated cybersecurity risk management programme. It feeds into the following governance processes:

- **Enterprise Risk Register** — Material supply chain risks identified herein are registered and tracked at enterprise level.
- **Third-Party Risk Management (TPRM) Programme** — Vendor risk ratings documented in Section 4 are maintained within the TPRM system of record: [System Name].
- **Business Continuity and Disaster Recovery Planning** — Single points of failure identified in Section 6 inform BCP/DR scenarios.
- **Annual Cybersecurity Report to NACSA** — Findings from this Report contribute to [Organization Name]'s mandatory annual cybersecurity posture report under Act 854.

---

## 3. Supply Chain Mapping

### 3.1 Overview

*Provide an executive summary of the supply chain mapping exercise. Describe the methodology used to identify and categorise supply chain participants and the overall complexity of the supply chain.*

[Organization Name] conducted a comprehensive supply chain mapping exercise during [Assessment Period] to identify all entities contributing hardware, software, managed services, cloud infrastructure, or professional services to NCII-designated systems. The mapping was performed using [methodology, e.g., configuration management database (CMDB) reconciliation, procurement records review, software composition analysis, vendor interviews].

**Summary Statistics:**

| Metric | Value |
|---|---|
| Total Vendors Identified | [Number] |
| Tier 1 (Direct / Critical) Vendors | [Number] |
| Tier 2 (Sub-contractor / Indirect) Vendors | [Number] |
| Fourth-Party Dependencies (Material) | [Number] |
| Open-Source Components Identified | [Number] |
| NCII Systems Covered | [Number] |

### 3.2 Supply Chain Tier Definitions

| Tier | Definition | Examples |
|---|---|---|
| **Tier 1** | Direct vendors with contractual relationship; supply mission-critical components or services directly to NCII systems | Core banking software vendor, primary cloud provider, managed SOC provider |
| **Tier 2** | Sub-contractors engaged by Tier 1 vendors; their failure could indirectly impair NCII system availability or integrity | Sub-contracted data centre operator, secondary network carrier |
| **Tier 3 / Fourth Party** | Suppliers to Tier 2 vendors where material concentration risk or dependency exists | Semiconductor manufacturers, CDN providers, upstream DNS resolvers |
| **Open Source** | Community-maintained software libraries, frameworks, and tools embedded in NCII system builds | [e.g., OpenSSL, Log4j-type dependencies] |

### 3.3 NCII System Supply Chain Map

*For each NCII system in scope, list all identified supply chain participants by tier, along with their function and dependency type. Expand rows as required.*

#### 3.3.1 [NCII System 1 Name]

| Vendor / Supplier | Tier | Component / Service Provided | Dependency Type | Country of Origin | Criticality |
|---|---|---|---|---|---|
| [Vendor Name] | Tier 1 | [e.g., Core Application Software Licence] | [Software / Hardware / Service / Support] | [Country] | [Critical / High / Medium / Low] |
| [Vendor Name] | Tier 1 | [e.g., Primary Data Centre Co-location] | [Infrastructure] | [Country] | [Critical] |
| [Vendor Name] | Tier 2 | [e.g., Physical Security for Data Centre] | [Service] | [Country] | [High] |
| [Vendor Name] | Open Source | [e.g., Authentication Library — libname v1.x] | [Software Component] | [Global / Community] | [Medium] |
| [Add rows as required] | | | | | |

#### 3.3.2 [NCII System 2 Name]

| Vendor / Supplier | Tier | Component / Service Provided | Dependency Type | Country of Origin | Criticality |
|---|---|---|---|---|---|
| [Vendor Name] | Tier 1 | [Description] | [Type] | [Country] | [Criticality] |
| [Add rows as required] | | | | | |

*(Replicate Section 3.3.x for each NCII system in scope)*

### 3.4 Supply Chain Visualisation

*Insert or reference a supply chain dependency diagram. The diagram should visually represent the relationships between NCII systems and their Tier 1, Tier 2, and material fourth-party suppliers. Include as Appendix A if the diagram is complex.*

> **[Insert Supply Chain Dependency Diagram here, or reference Appendix A — Supply Chain Dependency Diagram]**

### 3.5 Data and Information Flow Summary

*Describe the categories of data (including any personal data, sensitive financial data, or NCII operational data) that flow to or through supply chain participants. Reference the organization's data classification policy.*

| Data Category | Classification | Vendors with Access | Transmission Method | Protective Controls |
|---|---|---|---|---|
| [e.g., Customer Financial Records] | [Confidential / Restricted] | [Vendor Name(s)] | [API / SFTP / Direct DB / Encrypted Channel] | [TLS 1.3, Encryption at Rest, DLP] |
| [e.g., NCII Operational Telemetry] | [Restricted] | [Vendor Name(s)] | [SIEM Feed] | [Mutual TLS, Access Control] |
| [e.g., Authentication Credentials / Secrets] | [Highly Confidential] | [Vendor Name(s)] | [Secrets Manager API] | [HSM, Zero-Knowledge Architecture] |
| [Add rows as required] | | | | | |

---

## 4. Vendor Risk Ratings

### 4.1 Risk Rating Methodology

*Describe the risk assessment methodology applied to rate each vendor. Include scoring criteria, weighting, data sources, and the risk rating scale used.*

Vendor risk ratings were assigned using [Organization Name]'s Third-Party Risk Assessment (TPRA) methodology, which evaluates vendors across the following risk domains:

| Risk Domain | Weighting | Assessment Criteria |
|---|---|---|
| **Cybersecurity Posture** | [e.g., 30%] | Security certifications (ISO/IEC 27001, SOC 2), penetration test results, vulnerability disclosure programme, incident history |
| **Financial Stability** | [e.g., 15%] | Credit rating, financial statements, business continuity indicators |
| **Operational Resilience** | [e.g., 20%] | BCP/DR capabilities, SLA performance history, redundancy provisions |
| **Regulatory Compliance** | [e.g., 15%] | Compliance with applicable laws (PDPA, Act 854, sector regulations), regulatory sanctions history |
| **Concentration Risk** | [e.g., 10%] | Degree of single-vendor dependency, availability of alternatives |
| **Geopolitical / Jurisdictional Risk** | [e.g., 10%] | Country of incorporation, data residency, foreign ownership / control |

**Risk Rating Scale:**

| Rating | Score Range | Definition |
|---|---|---|
| **Critical** | 80–100 | Immediate risk requiring urgent remediation; potential for material NCII impact |
| **High** | 60–79 | Significant risk requiring prioritised treatment within [e.g., 90 days] |
| **Medium** | 40–59 | Moderate risk; treatment required within annual cycle |
| **Low** | 0–39 | Acceptable residual risk; standard monitoring sufficient |

### 4.2 Vendor Risk Register

*Complete the following table for all Tier 1 and material Tier 2 vendors. Scores and ratings should reflect the most recent assessment. Expand rows as required.*

| # | Vendor Name | NCII System(s) | Component / Service | Overall Risk Rating | Cybersecurity Score | Operational Resilience Score | Regulatory Compliance Score | Concentration Risk | Last Assessment Date | Next Assessment Date |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [Vendor Name] | [System] | [Description] | **[Critical / High / Medium / Low]** | [Score /100] | [Score /100] | [Score /100] | [High / Medium / Low] | [Date] | [Date] |
| 2 | [Vendor Name] | [System] | [Description] | **[Rating]** | [Score] | [Score] | [Score] | [Level] | [Date] | [Date] |
| 3 | [Add rows] | | | | | | | | | |

### 4.3 Risk Rating Distribution

*Summarise the distribution of vendor risk ratings to provide an at-a-glance view of the overall supply chain risk profile.*

| Risk Rating | Number of Vendors | Percentage of Total | Action Required |
|---|---|---|---|
| Critical | [Number] | [%] | Immediate escalation to CISO and Board Risk Committee |
| High | [Number] | [%] | Remediation plan required; CISO sign-off |
| Medium | [Number] | [%] | Remediation tracked in TPRM; annual review |
| Low | [Number] | [%] | Standard monitoring; triennial reassessment |
| **Total** | **[Total]** | **100%** | |

### 4.4 Vendor Risk Profiles — Critical and High Risk Vendors

*For each vendor rated Critical or High, provide a detailed risk profile below. Replicate this subsection for each such vendor.*

#### 4.4.1 [Vendor Name] — [Risk Rating]

| Field | Details |
|---|---|
| **Vendor Name** | [Full Legal Name] |
| **Registered Country** | [Country] |
| **Services Provided** | [Description] |
| **NCII Systems Affected** | [System Names] |
| **Overall Risk Rating** | [Critical / High] |
| **Composite Risk Score** | [Score / 100] |
| **Primary Risk Drivers** | [e.g., No current ISO 27001 certification; data processed in non-PDPA-adequate jurisdiction; sole-source dependency with no viable alternative] |
| **Contractual Protections in Place** | [e.g., DPA in place, right to audit clause, security addendum, SLA with security KPIs] |
| **Current Mitigating Controls** | [Description of controls currently applied to manage risk] |
| **Recommended Actions** | [See Section 8] |
| **Risk Owner** | [Name / Role] |
| **Target Risk Rating (Post-Treatment)** | [Rating] |

---

## 5. Component Provenance Assessment

### 5.1 Purpose of Provenance Assessment

*Explain why provenance assessment is critical for NCII systems, referencing the risks of counterfeit components, implanted backdoors, and compromised software build pipelines.*

Component provenance assessment examines the origin, custody chain, and integrity of hardware and software components used in NCII systems. This assessment is designed to identify risks including:

- Counterfeit or grey-market hardware components
- Compromised software build pipelines (e.g., SolarWinds-style supply chain attacks)
- Undisclosed foreign ownership or control of component manufacturers
- Absence of a Software Bill of Materials (SBOM) making vulnerability tracking infeasible
- Embedded firmware with unknown or unverifiable provenance

### 5.2 Hardware Component Provenance

*Document the provenance assessment for critical hardware components. Include procurement channel, manufacturer verification, and any assurance activities undertaken.*

| Component | Manufacturer | Model / Version | Procurement Channel | Country of Manufacture | Authenticity Verified | Verification Method | Assurance Level |
|---|---|---|---|---|---|---|---|
| [e.g., Core Network Switches] | [Manufacturer] | [Model] | [Authorised Distributor / Direct] | [Country] | [Yes / No / Partial] | [Serial number verification, tamper-evident packaging check, manufacturer portal] | [High / Medium / Low] |
| [e.g., HSM Modules] | [Manufacturer] | [Model] | [Direct from Manufacturer] | [Country] | [Yes] | [FIPS 140-2 certificate validation, chain of custody documentation] | [High] |
| [e.g., Server Infrastructure] | [Manufacturer] | [Model] | [Reseller Name] | [Country] | [Partial] | [Serial verification; firmware not independently validated] | [Medium] |
| [Add rows as required] | | | | | | | |

**Outstanding Provenance Concerns — Hardware:**

- [Describe any hardware components for which provenance could not be fully verified, and the associated risk and planned remediation]

### 5.3 Software and Firmware Provenance

*Document the provenance of critical software components, including commercial off-the-shelf (COTS) software, open-source dependencies, and firmware. Reference any SBOM processes in place.*

#### 5.3.1 Software Bill of Materials (SBOM) Status

| NCII System | SBOM Available? | SBOM Format | SBOM Last Updated | Open Vulnerabilities Identified | High/Critical CVEs |
|---|---|---|---|---|---|
| [System Name] | [Yes / No / Partial] | [CycloneDX / SPDX / Proprietary] | [Date] | [Number] | [Number] |
| [System Name] | [Yes / No] | [Format] | [Date] | [Number] | [Number] |

#### 5.3.2 Open-Source Component Assessment

*List material open-source components and their provenance status. Flag any components with known vulnerabilities (CVEs), abandoned maintenance, or unknown origins.*

| Component / Library | Version | License | Maintainer / Foundation | Last Release | Active Maintenance? | Known CVEs | Risk Level |
|---|---|---|---|---|---|---|---|
| [Library Name] | [v.x.x] | [MIT / Apache 2.0 / GPL] | [Maintainer] | [Date] | [Yes / No] | [CVE-XXXX-XXXX, …] | [High / Medium / Low] |
| [Library Name] | [v.x.x] | [License] | [Maintainer] | [Date] | [Yes] | None | [Low] |
| [Add rows] | | | | | | | |

#### 5.3.3 Firmware Provenance Assessment

| Device Type | Firmware Version | Vendor-Signed? | Independent Verification Performed? | Last Updated | Known Vulnerabilities |
|---|---|---|---|---|---|
| [e.g., Firewall Appliance] | [Version] | [Yes] | [Yes / No] | [Date] | [None / CVE references] |
| [e.g., UPS Management Module] | [Version] | [Yes] | [No — remediation planned] | [Date] | [None identified] |

### 5.4 Software Integrity Controls

*Describe the controls in place to verify the integrity of software artefacts throughout the software development and deployment lifecycle.*

| Control | Implemented? | Tool / Method | Applicable Systems |
|---|---|---|---|
| Code signing for all production releases | [Yes / No / Partial] | [e.g., GPG, Sigstore] | [Systems] |
| Artefact hash verification at deployment | [Yes / Partial] | [e.g., SHA-256 checksums, container digest pinning] | [Systems] |
| Dependency lock files enforced in build pipelines | [Yes / No] | [e.g., package-lock.json, Cargo.lock] | [Systems] |
| Secure CI/CD pipeline with access controls | [Yes / Partial] | [Platform Name] | [Systems] |
| SBOM generation as part of CI/CD | [No — planned for Q[x] FY[x]] | [Planned Tool] | [Systems] |
| Vulnerability scanning of dependencies pre-deployment | [Yes] | [Tool Name] | [Systems] |

---

## 6. Single Points of Failure Analysis

### 6.1 Overview

*Summarise the methodology used to identify single points of failure (SPOFs) in the supply chain and provide an executive summary of key findings.*

A Single Point of Failure (SPOF) analysis was conducted to identify supply chain nodes where the loss, compromise, or unavailability of a single vendor, component, or service would result in material degradation or outage of one or more NCII systems. The analysis considered:

- Sole-source vendor relationships with no qualified alternative
- Vendor concentration (multiple NCII systems dependent on a single vendor)
- Geographic or jurisdictional concentration of supply chain participants
- Temporal dependencies (long lead times for replacement components)
- Proprietary interfaces or data formats creating vendor lock-in

**Key Findings Summary:**

| SPOF Category | SPOFs Identified | Critical SPOFs | Status |
|---|---|---|---|
| Sole-Source Vendor | [Number] | [Number] | [Remediation in progress / Not yet addressed] |
| Geographic Concentration | [Number] | [Number] | [Status] |
| Technology / Vendor Lock-In | [Number] | [Number] | [Status] |
| Long Lead-Time Components | [Number] | [Number] | [Status] |
| **Total** | **[Total]** | **[Total]** | |

### 6.2 SPOF Register

*Document each identified SPOF. For each, describe the dependency, the potential impact, the likelihood of failure or unavailability, and the current mitigation status.*

| # | SPOF Description | Affected NCII System(s) | SPOF Category | Potential Impact | Impact Severity | Likelihood | Risk Score | Current Mitigation | Residual Risk | Remediation Owner | Target Resolution Date |
|---|---|---|---|---|---|---|---|---|---|---|---|
| SPOF-001 | [e.g., Single cloud provider (Provider X) hosts all NCII production workloads with no active-active multi-cloud arrangement] | [System A, System B, System C] | Geographic / Vendor Concentration | [e.g., Complete outage of all hosted NCII systems for duration of provider incident] | Critical | Low | High | [e.g., Provider SLA with 99.99% uptime; daily backups to separate region] | High | [Name / Role] | [Date] |
| SPOF-002 | [e.g., Sole supplier for HSM hardware with 16-week replacement lead time] | [Core Banking, Payment Switch] | Long Lead-Time / Sole Source | [e.g., Inability to replace failed HSM within RTO; payment processing halted] | Critical | Low | High | [e.g., 20% spare capacity maintained on-site] | Medium | [Name / Role] | [Date] |
| SPOF-003 | [Description] | [Systems] | [Category] | [Impact description] | [Severity] | [Likelihood] | [Score] | [Mitigation] | [Residual] | [Owner] | [Date] |
| [Add rows] | | | | | | | | | | | |

### 6.3 Concentration Risk Analysis

*Assess the degree to which critical supply chain functions are concentrated in a small number of vendors, geographies, or technologies.*

#### 6.3.1 Vendor Concentration

| Vendor | Number of NCII Systems Dependent | % of NCII Systems | Concentration Risk Level | Notes |
|---|---|---|---|---|
| [Vendor A] | [Number] | [%] | [Critical / High / Medium / Low] | [e.g., Primary cloud provider for all hosted systems] |
| [Vendor B] | [Number] | [%] | [Level] | [Notes] |

#### 6.3.2 Geographic Concentration

| Geography / Jurisdiction | Vendors Domiciled | NCII Systems Affected | Relevant Risk (e.g., geopolitical, natural disaster) | Risk Level |
|---|---|---|---|---|
| [Country / Region] | [Number] | [Systems] | [Description] | [Level] |
| [Country / Region] | [Number] | [Systems] | [Description] | [Level] |

---

## 7. Geopolitical Risk Factors

### 7.1 Framework for Geopolitical Risk Assessment

*Describe the approach used to assess geopolitical risks arising from the supply chain, including the factors considered and any external intelligence sources consulted.*

Geopolitical risk assessment evaluates the degree to which the supply chain is exposed to risks arising from the political, regulatory, and strategic environments of countries in which supply chain participants are domiciled, operate, or manufacture. Factors assessed include:

- **Foreign Ownership / Control:** Whether vendors or their parent entities are owned or controlled by entities in jurisdictions that may pose strategic risk
- **Jurisdictional Data Exposure:** Whether data processed or transmitted by vendors is subject to foreign government access laws (e.g., extraterritorial data access legislation)
- **Export Control Restrictions:** Whether components or technologies are subject to export controls that could affect supply continuity
- **Geopolitical Stability:** The political stability of jurisdictions in which key manufacturing, R&D, or service delivery occurs
- **Sanctions Exposure:** Whether vendors, their subsidiaries, or key personnel are subject to international sanctions regimes

**External Intelligence Sources Consulted:**

- [e.g., NACSA Threat Intelligence Reports]
- [e.g., Malaysian National Security Council (NSC) advisories]
- [e.g., [Organization Name] Internal Threat Intelligence / Commercial TISP]
- [e.g., Industry ISAC alerts]
- [e.g., MITRE ATT&CK Supply Chain TTPs]

### 7.2 Geopolitical Risk Register

*Document the geopolitical risks identified for supply chain participants. Focus on vendors or components where geopolitical factors materially affect the risk assessment.*

| # | Vendor / Component | Country / Jurisdiction of Risk | Risk Type | Risk Description | Risk Level | Affected NCII Systems | Current Mitigation | Residual Risk |
|---|---|---|---|---|---|---|---|---|
| GPR-001 | [Vendor / Component Name] | [Country] | [Foreign Ownership / Data Access Law / Export Control / Sanctions] | [e.g., Vendor's ultimate parent company is incorporated in a jurisdiction with mandatory government data access legislation. Data processed by this vendor may be subject to foreign government access without notice.] | [Critical / High / Medium / Low] | [Systems] | [e.g., Contractual data residency restrictions; encryption of data at rest with keys held by [Organization]; PDPA data processing agreement] | [High] |
| GPR-002 | [Vendor / Component] | [Country] | [Export Control] | [Description] | [Level] | [Systems] | [Mitigation] | [Residual] |
| GPR-003 | [Add rows] | | | | | | | |

### 7.3 Jurisdictional Data Residency Analysis

*Assess compliance with PDPA and any NCII-specific data residency requirements for data processed or stored by supply chain participants.*

| Vendor | Data Category | Processing / Storage Location | Malaysian Residency Compliant? | Foreign Access Law Exposure | Protective Measures | Compliance Status |
|---|---|---|---|---|---|---|
| [Vendor Name] | [Data Category] | [Location / Jurisdiction] | [Yes / No / Partial] | [Yes / No — detail legislation if Yes] | [Encryption, DPA, Access Controls] | [Compliant / Non-Compliant / Under Review] |
| [Add rows] | | | | | | |

### 7.4 Sanctions and Restricted Party Screening

*Document the outcome of sanctions and restricted party screening conducted for supply chain participants.*

| Screening Activity | Date Conducted | Scope | Tool / Database Used | Adverse Findings | Actions Taken |
|---|---|---|---|---|---|
| Vendor Sanctions Screening — Full Supply Chain | [Date] | All Tier 1 and Tier 2 Vendors | [e.g., OFAC SDN, UN Consolidated List, EU Sanctions List, Malaysian Designated Entities] | [None / Detail any findings] | [N/A / Actions taken if applicable] |
| Beneficial Ownership Review — Critical Vendors | [Date] | Tier 1 Vendors rated High or Critical | [Internal Review + External Due Diligence Provider] | [None / Detail findings] | [Actions] |

---

## 8. Mitigation Recommendations

### 8.1 Overview

*Provide an executive summary of the recommended mitigation actions arising from this Report. Prioritise recommendations by risk severity.*

Based on findings documented in Sections 3 through 7, [Organization Name] is recommended to implement the following risk treatment actions to reduce supply chain risk exposure to an acceptable level. Recommendations are categorised by priority:

| Priority | Recommendations | Critical/High Risks Addressed |
|---|---|---|
| **Immediate (0–30 days)** | [Number] recommendations | [Number] risks |
| **Short-Term (31–90 days)** | [Number] recommendations | [Number] risks |
| **Medium-Term (91–180 days)** | [Number] recommendations | [Number] risks |
| **Long-Term (181–365 days)** | [Number] recommendations | [Number] risks |

### 8.2 Mitigation Action Plan

*Document each recommended mitigation action, the risk it addresses, the responsible owner, required resources, and target completion date.*

| # | Recommendation | Risk Reference | Priority | Risk Treatment | Owner | Required Resources | Target Date | Status | Success Criteria |
|---|---|---|---|---|---|---|---|---|---|
| REC-001 | [e.g., Implement active-active multi-cloud architecture to eliminate single cloud provider SPOF for NCII-hosted systems] | SPOF-001 | Immediate | Reduce | [CISO / CTO] | [Budget estimate; internal/external resource] | [Date] | [Not Started / In Progress / Completed] | [e.g., Active-active deployment live; RTO meets NCII requirements without reliance on single provider] |
| REC-002 | [e.g., Require ISO/IEC 27001 certification or equivalent as minimum standard for all Tier 1 vendors at next contract renewal; issue non-conformance notice to vendors lacking certification] | Vendor Risk: [Vendor Name] | Short-Term | Reduce | [Head of Procurement / CISO] | [Procurement legal support] | [Date] | [Not Started] | [All Tier 1 vendors certified or formal remediation plan agreed] |
| REC-003 | [e.g., Generate and maintain SBOM for all NCII systems; integrate SBOM generation into CI/CD pipeline for System A and System B] | Component Provenance — Section 5.3 | Medium-Term | Reduce | [DevSecOps Lead] | [Tool licensing; pipeline development effort] | [Date] | [In Progress] | [SBOM available for 100% of NCII systems; automated vulnerability alerts active] |
| REC-004 | [e.g., Engage alternative HSM vendor and establish pre-qualified secondary supplier agreement to address sole-source dependency] | SPOF-002 | Short-Term | Reduce | [Head of IT Infrastructure] | [Vendor evaluation effort; potential dual-maintenance costs] | [Date] | [Not Started] | [Qualified alternative vendor contracted; replacement lead time < RTO] |
| REC-005 | [e.g., Review and renegotiate data processing agreement with [Vendor Name] to include binding data residency restrictions and prohibition on foreign government disclosure without notice] | GPR-001 | Immediate | Reduce | [Legal / DPO / CISO] | [Legal counsel] | [Date] | [Not Started] | [Revised DPA executed; data residency confirmed via audit] |
| REC-006 | [e.g., Establish a formal Supply Chain Security Policy aligned to NACSA guidelines and NIST SP 800-161r1 to provide a governance framework for ongoing supply chain risk management] | Programme-level | Long-Term | Reduce | [CISO] | [Policy development; NACSA engagement] | [Date] | [Not Started] | [Policy approved by Board; embedded in procurement lifecycle] |
| [Add rows] | | | | | | | | | |

### 8.3 Accepted Risks

*Document any supply chain risks for which risk acceptance has been formally approved. Risk acceptance requires sign-off from the appropriate authority as defined in the organization's risk appetite statement.*

| # | Risk Description | Risk Reference | Risk Level | Rationale for Acceptance | Acceptance Authority | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|---|
| ACC-001 | [Description of accepted risk] | [Reference] | [Medium / Low] | [e.g., Cost of remediation disproportionate to residual risk given existing compensating controls; risk below Board-approved risk appetite threshold] | [CISO / Board Risk Committee] | [Date] | [Date] |
| [Add rows] | | | | | | | |

### 8.4 Summary of Residual Risk Posture

*After application of all recommended controls and accepted risks, summarise the projected residual risk posture of the supply chain.*

> *Following implementation of all recommendations in Section 8.2, and subject to the accepted risks documented in Section 8.3, the projected residual supply chain risk posture for [Organization Name]'s NCII systems is assessed as:*
>
> **[Overall Residual Risk Level — e.g., Medium]**
>
> *[Provide 2–4 sentences summarising the residual risk posture, key residual exposures, and the conditions under which this assessment would be revised.]*

---

## 9. Roles and Responsibilities

### 9.1 RACI Matrix

*The following RACI matrix defines accountability for supply chain risk management activities referenced in this Report. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Head of Procurement | CTO / CIO | DPO | Legal Counsel | Business Unit Heads | Internal Audit | Board / Risk Committee | NACSA |
|---|---|---|---|---|---|---|---|---|---|
| Approve Supply Chain Risk Policy | C | C | C | C | C | I | I | **A** | I |
| Conduct Annual Supply Chain Risk Assessment | **R/A** | R | C | C | C | C | I | I | I |
| Maintain Vendor Risk Register | **A** | R | C | I | I | I | C | I | I |
| Approve High / Critical Vendor Relationships | **R** | R | C | C | C | I | I | **A** | I |
| Negotiate Security Requirements in Vendor Contracts | C | **R/A** | I | R | R | C | I | I | I |
| Monitor Vendor Compliance (Ongoing) | **A** | R | C | C | I | I | C | I | I |
| Conduct Vendor Security Assessments | **R/A** | C | C | I | I | I | C | I | I |
| Manage SBOM and Component Provenance | C | I | **R/A** | I | I | I | I | I | I |
| Report Supply Chain Risks to Board | **R** | C | C | C | I | I | C | **A** | I |
| Report Material Incidents to NACSA (under Act 854) | **R/A** | I | C | C | C | I | I | I | **A** |
| Review and Update this Report (Annual) | **R/A** | R | C | C | I | C | C | I | I |
| Approve Risk Acceptance Decisions | C | I | C | I | I | I | C | **A** | I |

### 9.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Department] | [Email / Extension] |
| Head of Procurement | [Name] | [Department] | [Email / Extension] |
| Chief Technology Officer / CIO | [Name] | [Department] | [Email / Extension] |
| Data Protection Officer (DPO) | [Name] | [Department] | [Email / Extension] |
| Legal Counsel (Technology / Privacy) | [Name] | [Department] | [Email / Extension] |
| Third-Party Risk Manager | [Name] | [Department] | [Email / Extension] |
| Report Coordinator | [Name] | [Department] | [Email / Extension] |

---

## 10. Review and Approval

### 10.1 Review Schedule

*This Report is subject to the following review triggers. Reviews should be completed within the timeframes specified.*

| Review Trigger | Review Timeframe | Responsible Party |
|---|---|---|
| Scheduled annual review | Annual — by [Month] each year | CISO / Head of Procurement |
| Material change to NCII system architecture | Within 60 days of change | CISO / CTO |
| Onboarding of new Tier 1 vendor | Prior to contract execution | Head of Procurement / CISO |
| Critical or High severity vendor security incident | Within 30 days of incident | CISO |
| Material change in Act 854 requirements or NACSA guidance | Within 60 days of effective date | CISO / Legal Counsel |
| Discovery of new supply chain SPOF rated High or Critical | Within 30 days of discovery | CISO |
| Significant geopolitical event affecting key supply chain jurisdiction | Within 45 days of event | CISO / Risk Committee |

### 10.2 Version History

| Version | Date | Author | Changes / Description |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial version — [Assessment Period] Annual Supply Chain Risk Report |
| [1.1] | [Date] | [Author Name, Role] | [e.g., Updated vendor risk ratings following Q3 reassessment of [Vendor Name]] |
| [Add rows as required] | | | |

### 10.3 Approval Sign-Off

*This Report requires approval from the following designated authorities prior to submission to the Board Risk Committee and filing with NACSA (if required).*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | ___________________________ | [Date] |
| Head of Procurement | [Name] | ___________________________ | [Date] |
| Chief Technology Officer / CIO | [Name] | ___________________________ | [Date] |
| Chief Risk Officer | [Name] | ___________________________ | [Date] |
| Chief Executive Officer (for Board submission) | [Name] | ___________________________ | [Date] |

---

## 11. References

### 11.1 Primary Regulatory References

| # | Document | Issuing Authority | Relevant Sections | Notes |
|---|---|---|---|---|
| 1 | Cyber Security Act 2024 (Act 854) | Parliament of Malaysia / NACSA | Section 18, Section 28 | Primary legislative basis for this Report |
| 2 | [NACSA NCII Sector Cybersecurity Framework / Guidelines] | NACSA | [Relevant clauses] | Sector-specific cybersecurity requirements applicable to [Organization Name]'s designated NCII sector |
| 3 | [NACSA Supply Chain Security Guidance / Advisory] | NACSA | [Relevant clauses] | [If published — insert reference; otherwise note as forthcoming] |
| 4 | Personal Data Protection Act 2010 (Act 709) as amended | Parliament of Malaysia / PDPD | Sections 9, 11, 40 | Data processing and transfer obligations for vendor-processed personal data |
| 5 | [Bank Negara Malaysia Risk Management in Technology (RMiT) Policy] | Bank Negara Malaysia | [Relevant paragraphs, e.g., para. 11.x — Third Party Risk Management] | Applicable if [Organization Name] is a BNM-regulated entity |

### 11.2 Standards and Frameworks Referenced

| # | Standard / Framework | Version | Publisher | Application to This Report |
|---|---|---|---|---|
| 1 | NIST Special Publication 800-161r1 — Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations | Rev. 1 (2022) | NIST | Primary methodology reference for supply chain risk assessment |
| 2 | ISO/IEC 27036 — Information Security for Supplier Relationships | Parts 1–4 | ISO/IEC | Vendor security assessment and contractual controls |
| 3 | ISO/IEC 27001:2022 — Information Security Management Systems | 2022 | ISO/IEC | Baseline security standard referenced in vendor assessments |
| 4 | MITRE ATT&CK Framework — Supply Chain Compromise (T1195) | Current | MITRE | Threat modelling for supply chain attack scenarios |
| 5 | CycloneDX SBOM Specification | [Version] | OWASP | Software Bill of Materials format |
| 6 | [Organization Name] Third-Party Risk Management Policy | [Version] | [Organization Name] | Internal policy governing vendor risk assessment process |
| 7 | [Organization Name] Information Security Policy | [Version] | [Organization Name] | Internal baseline security requirements |

### 11.3 Related Internal Documents

| Document Title | Document ID | Owner | Location |
|---|---|---|---|
| Third-Party Risk Management Policy | [Document ID] | CISO | [Document Repository Link / Path] |
| Vendor Security Assessment Questionnaire | [Document ID] | CISO / Procurement | [Location] |
| Information Security Policy | [Document ID] | CISO | [Location] |
| Business Continuity Plan | [Document ID] | [BCP Owner] | [Location] |
| Data Protection Impact Assessment (DPIA) — [Vendor Name] | [Document ID] | DPO | [Location] |
| NCII Incident Response Plan | [Document ID] | CISO | [Location] |
| Previous Annual Supply Chain Risk Report ([Year]) | [Document ID] | CISO / Procurement | [Location] |

---

## 12. Appendices

### Appendix A — Supply Chain Dependency Diagram

*Insert a visual diagram illustrating the full supply chain for NCII systems in scope. The diagram should show NCII systems at the centre, with Tier 1, Tier 2, and material fourth-party suppliers mapped to each system. Use colour-coding to indicate risk levels (e.g., red = Critical, amber = High, green = Low/Medium).*

> **[Insert Supply Chain Dependency Diagram]**
>
> *Diagram prepared by: [Name / Team]*
> *Date: [Date]*
> *Tool used: [e.g., draw.io, Lucidchart, Visio]*

---

### Appendix B — Vendor Assessment Questionnaire Summary

*This appendix summarises the vendor security assessment questionnaire responses used to inform vendor risk ratings in Section 4. Individual questionnaire responses are retained by the Third-Party Risk Management team.*

| Vendor | Assessment Date | Questionnaire Version | Response Rate (%) | Key Gaps Identified | Follow-Up Actions |
|---|---|---|---|---|---|
| [Vendor Name] | [Date] | [Version] | [%] | [e.g., No formal incident response plan; no evidence of security awareness training] | [e.g., Remediation plan requested by [Date]] |
| [Add rows] | | | | | |

---

### Appendix C — Open-Source Vulnerability Summary

*This appendix provides a detailed listing of open-source component vulnerabilities (CVEs) identified during the component provenance assessment in Section 5. Vulnerabilities are listed in descending severity order.*

| CVE ID | CVSS Score | Severity | Component / Library | Affected Version | Fixed Version | Affected NCII System(s) | Exploitation Status | Remediation Status | Target Remediation Date |
|---|---|---|---|---|---|---|---|---|---|
| [CVE-XXXX-XXXX] | [Score] | [Critical / High] | [Library Name] | [Affected version range] | [Fixed version] | [Systems] | [Exploited in Wild / PoC Available / No Known Exploit] | [Patched / In Progress / Accepted] | [Date] |
| [CVE-XXXX-XXXX] | [Score] | [High] | [Library Name] | [Version] | [Fixed version] | [Systems] | [Status] | [Status] | [Date] |
| [Add rows] | | | | | | | | | |

---

### Appendix D — Geopolitical Risk Reference — Jurisdictions of Concern

*This appendix documents the basis for geopolitical risk classifications applied in Section 7, including the specific legislative instruments and threat intelligence sources informing each jurisdiction-level risk assessment.*

| Jurisdiction | Risk Classification | Primary Risk Basis | Relevant Legislation / Instrument | Supply Chain Participants Domiciled | Date of Assessment |
|---|---|---|---|---|---|
| [Country Name] | [Critical / High / Medium / Low] | [e.g., Mandatory government data access law with extraterritorial application; state-affiliated threat actor activity] | [e.g., [Country] National Intelligence Law Article X; [Country] Cybersecurity Law Article Y] | [Vendor A, Vendor B] | [Date] |
| [Country Name] | [Level] | [Basis] | [Instruments] | [Vendors] | [Date] |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 (Malaysia) |
| **CISO** | Chief Information Security Officer |
| **CMDB** | Configuration Management Database |
| **CVE** | Common Vulnerabilities and Exposures |
| **CVSS** | Common Vulnerability Scoring System |
| **DPA** | Data Processing Agreement |
| **DPO** | Data Protection Officer |
| **NCII** | National Critical Information Infrastructure |
| **NACSA** | National Cyber Security Agency (Malaysia) |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) |
| **RACI** | Responsible, Accountable, Consulted, Informed |
| **RTO** | Recovery Time Objective |
| **SBOM** | Software Bill of Materials |
| **SPOF** | Single Point of Failure |
| **TPRA** | Third-Party Risk Assessment |
| **TPRM** | Third-Party Risk Management |
| **Tier 1 Vendor** | Direct vendor with contractual relationship supplying mission-critical components or services to NCII systems |
| **Tier 2 Vendor** | Sub-contractor engaged by a Tier 1 vendor whose failure could indirectly impair NCII system operation |
| **Fourth Party** | Supplier to a Tier 2 vendor where material concentration risk or dependency exists |

---

### Appendix F — Document Distribution List

*Record of individuals and roles to whom this Report has been distributed. Distribution is restricted to those with a need-to-know consistent with the document's Confidential classification.*

| Name | Role | Distribution Method | Date Distributed | Version Distributed |
|---|---|---|---|---|
| [Name] | Chief Executive Officer | [Secure Document Portal / Encrypted Email] | [Date] | [1.0] |
| [Name] | Chief Information Security Officer | [Secure Document Portal] | [Date] | [1.0] |
| [Name] | Chief Risk Officer | [Secure Document Portal] | [Date] | [1.0] |
| [Name] | Head of Procurement | [Secure Document Portal] | [Date] | [1.0] |
| [Name] | Board Risk Committee (via Company Secretary) | [Physical — Confidential Cover] | [Date] | [1.0] |
| [Name] | Internal Audit (Read-Only) | [Secure Document Portal] | [Date] | [1.0] |
| NACSA (if filed) | Regulatory Submission | [NACSA Submission Portal / Secure Courier] | [Date] | [1.0] |

---

*End of Supply Chain Risk Report*

---

**Document Control Notice:** This document is subject to version control. The master copy is maintained in [Document Repository Name/Path]. Printed or locally saved copies may be out of date. Always verify you are working from the current approved version before relying on this document for regulatory or operational decisions.