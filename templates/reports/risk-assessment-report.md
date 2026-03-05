# Cyber Security Risk Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID, e.g., RA-NCII-2024-001] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | [Risk Manager / Approved Assessor Name] |
| **Organization** | [Organization Name] |
| **NCII Sector** | [Relevant NCII Sector, e.g., Banking & Finance / Energy / Telecommunications] |
| **Assessment Period** | [Start Date] to [End Date] |
| **Report Date** | [Report Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date, within 12 months] |
| **Approved By** | [Approving Authority Name and Title] |
| **Prepared By** | [Lead Assessor Name and Designation] |

---

> **Handling Instructions:** This document is classified **Confidential**. It contains sensitive information relating to the cyber security posture of National Critical Information Infrastructure (NCII). Distribution is restricted to authorized personnel with a need-to-know. Unauthorized disclosure may constitute an offence under the Cyber Security Act 2024 (Act 854) and the Official Secrets Act 1972. All copies must be stored in accordance with the organization's information classification policy.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Assessment Scope and Methodology](#4-assessment-scope-and-methodology)
5. [Asset Inventory and Valuation](#5-asset-inventory-and-valuation)
6. [Threat Landscape Analysis](#6-threat-landscape-analysis)
7. [Vulnerability Assessment Results](#7-vulnerability-assessment-results)
8. [Risk Register with Ratings](#8-risk-register-with-ratings)
9. [Treatment Plan Recommendations](#9-treatment-plan-recommendations)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

*This section provides a high-level summary of the assessment findings, overall risk posture, and critical recommendations. It is intended for senior leadership and the Board. Authors should summarize key findings in plain language, highlight the most critical risks, and state the recommended course of action without requiring readers to review the full report.*

### 1.1 Overview

[Organization Name] conducted this Annual Cyber Security Risk Assessment of its National Critical Information Infrastructure (NCII) systems in compliance with Section 21 of the Cyber Security Act 2024 (Act 854). The assessment was carried out by [Approved Assessor Name / Assessment Team] during the period [Assessment Start Date] to [Assessment End Date].

This report documents the findings, risk ratings, and recommended treatment actions arising from that assessment.

### 1.2 Assessment at a Glance

| Parameter | Detail |
|---|---|
| **Assessment Period** | [Start Date] – [End Date] |
| **Systems in Scope** | [Number] NCII systems / [Number] supporting assets |
| **Lead Assessor** | [Name, Designation, Organisation] |
| **Approved Assessor Status** | [NACSA Approved Assessor License No., if applicable] |
| **Assessment Standard Applied** | [e.g., ISO/IEC 27005:2022, NIST SP 800-30 Rev 1, NACSA CSOP Framework] |
| **Total Risks Identified** | [Number] |
| **Critical Risks** | [Number] |
| **High Risks** | [Number] |
| **Medium Risks** | [Number] |
| **Low Risks** | [Number] |
| **Risks Requiring Immediate Action** | [Number] |

### 1.3 Overall Risk Posture

*Provide a narrative statement of the organization's current cyber security risk posture. Indicate whether the overall risk level has improved, deteriorated, or remained stable compared to the previous assessment period. Highlight the two or three most significant risk drivers.*

[Organization Name]'s overall cyber security risk posture for the assessment period is assessed as **[Critical / High / Medium / Low]**.

The most significant risk drivers identified during this assessment are:

1. **[Risk Driver 1]:** [Brief description, e.g., Unpatched legacy systems in the operational technology (OT) environment presenting exploitable attack surface.]
2. **[Risk Driver 2]:** [Brief description, e.g., Insufficient network segmentation between corporate IT and NCII operational systems.]
3. **[Risk Driver 3]:** [Brief description, e.g., Elevated threat actor activity targeting the [sector] sector observed in the regional threat landscape.]

### 1.4 Key Findings Summary

| Finding ID | Category | Finding Summary | Severity | Recommended Action |
|---|---|---|---|---|
| F-001 | [Category] | [Brief finding description] | Critical | [Recommended action] |
| F-002 | [Category] | [Brief finding description] | High | [Recommended action] |
| F-003 | [Category] | [Brief finding description] | High | [Recommended action] |
| F-004 | [Category] | [Brief finding description] | Medium | [Recommended action] |
| F-005 | [Category] | [Brief finding description] | Medium | [Recommended action] |
| [F-XXX] | [Category] | [Brief finding description] | [Severity] | [Recommended action] |

### 1.5 Risk Distribution

*Insert a summary risk heat map or risk distribution chart here. If using a document processor that supports images, embed the heat map graphic. Otherwise, represent risk distribution using a text-based table.*

**Risk Distribution by Severity:**

| Severity Level | Count | Percentage of Total |
|---|---|---|
| Critical (Score 20–25) | [Number] | [%] |
| High (Score 12–19) | [Number] | [%] |
| Medium (Score 6–11) | [Number] | [%] |
| Low (Score 1–5) | [Number] | [%] |
| **Total** | **[Number]** | **100%** |

**Risk Distribution by Domain:**

| Domain | Critical | High | Medium | Low | Total |
|---|---|---|---|---|---|
| Network Security | [n] | [n] | [n] | [n] | [n] |
| Application Security | [n] | [n] | [n] | [n] | [n] |
| Identity & Access Management | [n] | [n] | [n] | [n] | [n] |
| Physical Security | [n] | [n] | [n] | [n] | [n] |
| Third-Party & Supply Chain | [n] | [n] | [n] | [n] | [n] |
| Operational Technology (OT/ICS) | [n] | [n] | [n] | [n] | [n] |
| Data Security | [n] | [n] | [n] | [n] | [n] |
| Governance & Compliance | [n] | [n] | [n] | [n] | [n] |
| **Total** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** |

### 1.6 Critical Recommendations

*List the top-priority actions that senior management must authorize. These should correspond to Critical and High risks identified in the risk register.*

1. **[Recommendation 1]:** [Action description] — *Target completion: [Date]*
2. **[Recommendation 2]:** [Action description] — *Target completion: [Date]*
3. **[Recommendation 3]:** [Action description] — *Target completion: [Date]*
4. **[Recommendation 4]:** [Action description] — *Target completion: [Date]*
5. **[Recommendation 5]:** [Action description] — *Target completion: [Date]*

### 1.7 Comparison with Previous Assessment

*Compare the current risk posture with the previous annual assessment. Identify risks that have been remediated, risks that are new, and risks that have escalated or de-escalated.*

| Metric | Previous Assessment ([Year]) | Current Assessment ([Year]) | Change |
|---|---|---|---|
| Total Risks | [Number] | [Number] | [+/- Number] |
| Critical Risks | [Number] | [Number] | [+/- Number] |
| High Risks | [Number] | [Number] | [+/- Number] |
| Medium Risks | [Number] | [Number] | [+/- Number] |
| Low Risks | [Number] | [Number] | [+/- Number] |
| Risks Closed/Remediated | [Number] | — | — |
| New Risks Identified | — | [Number] | — |
| Overall Posture Rating | [Rating] | [Rating] | [Improved / Deteriorated / Stable] |

---

## 2. Purpose and Scope

*This section defines the purpose of the document, the systems and boundaries included in the assessment, and any explicit exclusions. Authors should be precise about the scope boundary to avoid ambiguity during audits.*

### 2.1 Purpose

This Cyber Security Risk Assessment Report documents the findings, risk ratings, and recommended treatment plans arising from the Annual Cyber Security Risk Assessment of [Organization Name]'s National Critical Information Infrastructure (NCII) systems. This report is prepared in fulfilment of the mandatory obligations imposed on NCII entity operators under:

- **Section 21, Cyber Security Act 2024 (Act 854):** which requires NCII entities to conduct annual cyber security risk assessments and submit reports to the Chief Executive of NACSA.
- **[Organization Name] Cyber Security Policy, Version [X.X], dated [Date]**
- **[Any applicable sector-specific directives, e.g., BNM RMIT Policy Document, MCMC licensing conditions]**

The objectives of this assessment are to:

1. Identify and document all information and technology assets that form part of, or support, [Organization Name]'s designated NCII systems.
2. Assess the value and criticality of those assets to the continuity of NCII functions.
3. Analyse the current threat landscape relevant to [Organization Name]'s operational sector and geography.
4. Identify technical and procedural vulnerabilities in NCII systems.
5. Evaluate the likelihood and potential impact of identified threats exploiting identified vulnerabilities.
6. Assign risk ratings to each identified risk scenario.
7. Recommend risk treatment actions proportionate to the risk ratings identified.
8. Provide senior management and the Board with an accurate and current picture of the organization's cyber security risk exposure.

### 2.2 Scope of Assessment

#### 2.2.1 Organizational Scope

| Entity | Role | Included in Scope |
|---|---|---|
| [Organization Name] — [Business Unit 1] | Primary NCII Operator | Yes |
| [Organization Name] — [Business Unit 2] | Supporting function | Yes |
| [Subsidiary / Affiliated Entity Name] | [Role] | [Yes / No / Partial] |
| [Third-Party Service Provider Name] | [Service provided, e.g., Managed SOC] | [Yes / Partial — interfaces only] |

#### 2.2.2 System Scope

The following NCII systems and supporting infrastructure are included within the scope of this assessment:

| System ID | System Name | System Description | NCII Classification | Criticality |
|---|---|---|---|---|
| SYS-001 | [System Name] | [Brief description] | NCII Primary | [Critical / High / Medium] |
| SYS-002 | [System Name] | [Brief description] | NCII Supporting | [Critical / High / Medium] |
| SYS-003 | [System Name] | [Brief description] | NCII Supporting | [Critical / High / Medium] |
| SYS-004 | [System Name] | [Brief description] | NCII Dependent | [High / Medium / Low] |
| [SYS-XXX] | [System Name] | [Brief description] | [Classification] | [Criticality] |

#### 2.2.3 Geographic Scope

| Location | Site Type | Systems Hosted |
|---|---|---|
| [Primary Data Centre, Location] | Owned / Co-located | [System IDs] |
| [Disaster Recovery Site, Location] | Owned / Co-located | [System IDs] |
| [Branch / Regional Office, Location] | Branch | [System IDs] |
| [Cloud Provider / Region] | Cloud (IaaS/PaaS) | [System IDs] |

#### 2.2.4 Technical Scope

The assessment encompasses the following technology layers for each in-scope system:

- Network infrastructure (routers, switches, firewalls, load balancers, VPN gateways)
- Server infrastructure (physical servers, virtual machines, containers)
- Endpoint devices (workstations, laptops, tablets, mobile devices used for NCII operations)
- Operational Technology (OT) and Industrial Control Systems (ICS), including SCADA, DCS, PLCs, and HMI systems where applicable
- Applications and middleware (web applications, APIs, integration platforms, middleware)
- Data repositories (databases, data warehouses, object storage, backup systems)
- Cloud services and platforms (IaaS, PaaS, SaaS consumed by NCII operations)
- Third-party interconnections and interfaces
- Identity and access management (IAM) systems
- Security controls infrastructure (SIEM, EDR, WAF, IDS/IPS, PAM)

### 2.3 Exclusions

*List any systems, locations, or technology layers that are explicitly excluded from this assessment and the rationale for the exclusion.*

The following are explicitly excluded from the scope of this assessment:

| Excluded Item | Rationale for Exclusion | Alternative Coverage |
|---|---|---|
| [Excluded System / Location / Asset] | [Rationale, e.g., Assessed separately under [Program Name] on [Date]] | [Reference to alternative assessment] |
| [Excluded Item] | [Rationale] | [Alternative coverage] |
| [Excluded Item] | [Rationale] | [Alternative coverage] |

### 2.4 Assessment Constraints and Limitations

*Document any factors that may have affected the completeness or accuracy of this assessment, such as access restrictions, unavailability of key personnel, or system downtime during the assessment window.*

| Constraint / Limitation | Impact on Assessment | Mitigating Action Taken |
|---|---|---|
| [Constraint description, e.g., Production system downtime window restricted active vulnerability scanning] | [Impact, e.g., Scanning conducted on a subset of production systems; remainder assessed through configuration review] | [Mitigating action taken] |
| [Constraint description] | [Impact] | [Mitigating action] |
| [Constraint description] | [Impact] | [Mitigating action] |

---

## 3. Regulatory and Policy Context

*This section provides the regulatory basis for the assessment, ensuring auditors and reviewers can trace the document to its legal and policy obligations. Authors should verify that all referenced instruments are current and correctly cited.*

### 3.1 Regulatory Framework

This assessment is conducted within the following regulatory and policy framework:

#### 3.1.1 Primary Legislation

| Legislation | Relevant Provisions | Obligation |
|---|---|---|
| **Cyber Security Act 2024 (Act 854)** | Section 21 — Annual Cyber Security Risk Assessment | NCII entity operators must conduct an annual cyber security risk assessment and submit a report to NACSA. |
| **Cyber Security Act 2024 (Act 854)** | Section 22 — Cyber Security Audit | NCII entities are subject to periodic cyber security audits; risk assessment findings inform audit scope. |
| **Cyber Security Act 2024 (Act 854)** | Section 25 — Cyber Security Incident Reporting | Risk assessment findings may trigger mandatory incident reporting obligations. |
| **Cyber Security Act 2024 (Act 854)** | Section 26 — Compliance with Directives | NACSA may issue directives requiring specific risk treatment actions. |
| [Other applicable Act, e.g., Personal Data Protection Act 2010 (PDPA)] | [Relevant sections] | [Obligation description] |
| [Other applicable Act] | [Relevant sections] | [Obligation description] |

#### 3.1.2 Subsidiary Legislation and Directives

| Instrument | Reference | Obligation |
|---|---|---|
| [NACSA Cyber Security Operations Policy (CSOP)] | [Reference number/version] | [Obligation description] |
| [NACSA Directive on NCII Risk Assessment Methodology] | [Reference number/version if issued] | [Obligation description] |
| [BNM Risk Management in Technology (RMiT) Policy Document] | [BNM/RH/PD 028-2 or current version] | [Obligation for banking sector entities] |
| [MCMC Licence Condition / Determination] | [Reference] | [Obligation for communications sector entities] |
| [Sector Regulator Directive] | [Reference] | [Obligation] |

#### 3.1.3 Applicable Standards and Frameworks

| Standard / Framework | Version / Edition | Application |
|---|---|---|
| ISO/IEC 27001:2022 — Information Security Management Systems | 2022 | Overarching ISMS framework |
| ISO/IEC 27005:2022 — Information Security Risk Management | 2022 | Primary risk assessment methodology |
| ISO/IEC 27002:2022 — Security Controls | 2022 | Control reference catalogue |
| NIST SP 800-30 Rev 1 — Guide for Conducting Risk Assessments | Rev 1 (2012) | Supplementary risk assessment guidance |
| NIST Cybersecurity Framework (CSF) 2.0 | 2.0 (2024) | Control framework reference |
| IEC 62443 — Industrial Automation and Control Systems Security | [Relevant parts] | OT/ICS environments |
| [NACSA Cyber Security Framework / CSOP] | [Version] | NACSA-specific requirements |
| [Any other applicable standard] | [Version] | [Application] |

### 3.2 Internal Policy Framework

| Policy / Procedure | Reference | Version | Relevance |
|---|---|---|---|
| [Organization Name] Cyber Security Policy | [Policy ID] | [Version] | Overarching cyber security governance |
| [Organization Name] Information Classification Policy | [Policy ID] | [Version] | Asset classification criteria |
| [Organization Name] Risk Management Policy | [Policy ID] | [Version] | Risk tolerance and appetite statements |
| [Organization Name] Acceptable Use Policy | [Policy ID] | [Version] | User behaviour controls |
| [Organization Name] Third-Party Risk Management Policy | [Policy ID] | [Version] | Supply chain risk assessment |
| [Organization Name] Incident Response Policy | [Policy ID] | [Version] | Response to identified risks |
| [Organization Name] Business Continuity Plan | [Policy ID] | [Version] | Impact assessment reference |

### 3.3 Risk Acceptance Criteria

*Document the organization's formally approved risk tolerance thresholds. These must be consistent with the Risk Management Policy referenced above.*

The following risk acceptance criteria have been approved by [Approving Body, e.g., the Board Risk Committee] and apply to this assessment:

| Risk Level | Score Range | Acceptance Criteria | Required Action |
|---|---|---|---|
| **Critical** | 20 – 25 | Not acceptable. Immediate escalation to Board. | Immediate treatment required. Board sign-off on treatment plan within [X] days. |
| **High** | 12 – 19 | Not acceptable under normal circumstances. | Treatment plan required within [30] days. Senior Management sign-off. |
| **Medium** | 6 – 11 | Acceptable with documented compensating controls. | Treatment plan required within [90] days. Risk Manager sign-off. |
| **Low** | 1 – 5 | Generally acceptable. | Monitor annually. Accepted by Risk Manager. |

---

## 4. Assessment Scope and Methodology

*This section describes how the risk assessment was conducted, including the team composition, tools used, assessment phases, and the risk scoring methodology applied. It provides the evidentiary basis for the assessment's credibility and reproducibility. Authors should describe actual methods used and reference any supporting work papers in the appendices.*

### 4.1 Assessment Team

| Name | Designation | Organization | Role in Assessment | NACSA Approved Assessor (if applicable) |
|---|---|---|---|---|
| [Name] | [Title, e.g., Chief Information Security Officer] | [Organization Name] | Assessment Sponsor | N/A |
| [Name] | [Title, e.g., Senior Risk Analyst] | [Organization Name] | Lead Internal Assessor | [License No. / N/A] |
| [Name] | [Title] | [Organization Name] | Subject Matter Expert — [Domain] | N/A |
| [Name] | [Title] | [External Firm Name, if applicable] | Lead External Assessor | [License No.] |
| [Name] | [Title] | [External Firm Name] | Technical Assessor — [Domain] | [License No. / N/A] |
| [Name] | [Title] | [Business Unit / Department] | System Owner Representative — [System Name] | N/A |

### 4.2 Assessment Phases and Timeline

*Describe each phase of the assessment, the activities conducted, and the dates on which they occurred.*

| Phase | Phase Name | Key Activities | Date(s) | Responsible Party |
|---|---|---|---|---|
| Phase 1 | Preparation and Planning | Scope definition, assessment plan development, stakeholder briefings, document collection | [Date range] | [Lead Assessor] |
| Phase 2 | Asset Identification and Valuation | Asset discovery, asset register compilation, criticality and value assessment, BIA review | [Date range] | [Lead Assessor / System Owners] |
| Phase 3 | Threat Identification | Threat modelling, threat intelligence review, threat actor profiling, threat scenario development | [Date range] | [Lead Assessor / Threat Intelligence Team] |
| Phase 4 | Vulnerability Assessment | Technical scanning, configuration review, penetration test results review, procedural gap analysis | [Date range] | [Technical Assessor] |
| Phase 5 | Risk Analysis and Evaluation | Risk scenario mapping, likelihood and impact scoring, risk rating calculation, risk register compilation | [Date range] | [Lead Assessor] |
| Phase 6 | Risk Treatment Planning | Treatment option analysis, control recommendations, cost-benefit analysis, treatment plan drafting | [Date range] | [Lead Assessor / Risk Manager] |
| Phase 7 | Reporting and Review | Draft report preparation, stakeholder review, management validation, final report issuance | [Date range] | [Lead Assessor] |

### 4.3 Data Collection Methods

The following methods were used to collect data for this assessment:

| Method | Description | Systems / Areas Covered |
|---|---|---|
| **Document Review** | Review of existing policies, procedures, architecture diagrams, previous audit reports, incident records, and vendor documentation | All in-scope systems |
| **Stakeholder Interviews** | Structured interviews with system owners, IT operations staff, security team members, and business unit representatives | All in-scope systems |
| **Technical Vulnerability Scanning** | Automated vulnerability scanning using [Tool Name, e.g., Nessus / Qualys / OpenVAS] | [In-scope systems where scanning was permitted] |
| **Configuration Baseline Review** | Manual review of device and system configurations against hardening benchmarks (e.g., CIS Benchmarks) | [List of systems / device types] |
| **Network Architecture Review** | Analysis of network topology diagrams, firewall rule sets, and segmentation controls | Network infrastructure |
| **Physical Security Walk-Through** | On-site inspection of data centre and server rooms | [Locations] |
| **Threat Intelligence Review** | Review of NACSA threat advisories, sector-specific intelligence, open-source threat intelligence (OSINT), MITRE ATT&CK | Threat landscape analysis |
| **Business Impact Analysis (BIA) Review** | Review of existing BIA documentation to inform asset criticality ratings | All in-scope systems |
| **Security Control Assessment** | Evaluation of implemented controls against [ISO/IEC 27002 / NIST CSF / NACSA CSOP control requirements] | All in-scope systems |
| **Previous Assessment Review** | Comparison with findings from the previous annual risk assessment dated [Previous Assessment Date] | All in-scope systems |

### 4.4 Risk Assessment Methodology

#### 4.4.1 Methodology Standard

This assessment follows the risk assessment methodology defined in **ISO/IEC 27005:2022** and supplemented by **NIST SP 800-30 Rev 1**. The methodology encompasses:

1. **Risk Identification:** Identifying assets, threats, vulnerabilities, and existing controls.
2. **Risk Analysis:** Estimating the likelihood of threat scenarios occurring and the potential impact on the organization.
3. **Risk Evaluation:** Comparing estimated risk levels against the organization's risk acceptance criteria to determine whether risks require treatment.

#### 4.4.2 Risk Scoring Model

Risk is calculated using the following formula:

> **Risk Score = Likelihood Score × Impact Score**

**Likelihood Scale:**

| Score | Likelihood Level | Definition |
|---|---|---|
| 5 | Almost Certain | Expected to occur in most circumstances. Has occurred multiple times in the sector in the past 12 months. |
| 4 | Likely | Will probably occur in most circumstances. Has occurred in the sector in the past 2 years. |
| 3 | Possible | Might occur at some time. Known to occur in the broader industry. |
| 2 | Unlikely | Could occur at some time but is not expected. Limited evidence of occurrence. |
| 1 | Rare | May occur only in exceptional circumstances. No known occurrence in sector. |

**Impact Scale:**

| Score | Impact Level | Operational Impact | Financial Impact (RM) | Reputational Impact |
|---|---|---|---|---|
| 5 | Catastrophic | Complete and prolonged disruption of NCII function. National-level consequence. | > RM [X] million | National media coverage; regulatory sanction; loss of operating licence |
| 4 | Major | Significant disruption to critical operations. Multiple NCII systems affected. | RM [X]M – RM [X]M | Significant media coverage; regulatory investigation; major customer impact |
| 3 | Moderate | Partial disruption to operations. Single NCII system affected for extended period. | RM [X]K – RM [X]M | Negative media coverage; customer complaints; regulatory enquiry |
| 2 | Minor | Limited disruption. Operations restored within hours. Single system briefly affected. | RM [X]K – RM [X]K | Limited media coverage; minor customer complaints |
| 1 | Negligible | No or minimal disruption. Self-contained incident with no service impact. | < RM [X]K | No public exposure; internal matter only |

**Risk Rating Matrix:**

| | **Impact 1** | **Impact 2** | **Impact 3** | **Impact 4** | **Impact 5** |
|---|---|---|---|---|---|
| **Likelihood 5** | 5 — Low | 10 — Medium | 15 — High | 20 — Critical | 25 — Critical |
| **Likelihood 4** | 4 — Low | 8 — Medium | 12 — High | 16 — High | 20 — Critical |
| **Likelihood 3** | 3 — Low | 6 — Medium | 9 — Medium | 12 — High | 15 — High |
| **Likelihood 2** | 2 — Low | 4 — Low | 6 — Medium | 8 — Medium | 10 — Medium |
| **Likelihood 1** | 1 — Low | 2 — Low | 3 — Low | 4 — Low | 5 — Low |

#### 4.4.3 Control Effectiveness Assessment

Where existing controls are in place, the assessment team evaluated control effectiveness using the following scale, which adjusts the inherent (pre-control) likelihood to derive the residual (post-control) risk score:

| Rating | Control Effectiveness | Likelihood Reduction Applied |
|---|---|---|
| Highly Effective | Control fully implemented, regularly tested, and operating as intended | Reduce inherent likelihood by 2 |
| Effective | Control implemented and generally operating as intended; minor gaps noted | Reduce inherent likelihood by 1 |
| Partially Effective | Control partially implemented or not consistently applied | No reduction |
| Ineffective / Absent | Control not implemented or not operating as intended | No reduction; note as vulnerability |

#### 4.4.4 Inherent vs. Residual Risk

This report presents both **inherent risk** (the level of risk in the absence of controls) and **residual risk** (the level of risk after applying existing controls) for each risk identified. Treatment recommendations target residual risks that exceed the organization's risk acceptance threshold.

### 4.5 Tools Used

| Tool Name | Category | Version | Purpose | Operated By |
|---|---|---|---|---|
| [Nessus Professional / Qualys / OpenVAS] | Vulnerability Scanner | [Version] | Automated vulnerability scanning of IT systems | [Assessment team / Internal SOC] |
| [Nessus Industrial Security / Claroty / Dragos] | OT/ICS Scanner | [Version] | Passive scanning of OT/ICS environment | [Assessment team] |
| [Burp Suite / OWASP ZAP] | Web Application Scanner | [Version] | Web application vulnerability assessment | [Assessment team] |
| [Shodan / Censys] | Attack Surface Management | N/A | External attack surface reconnaissance | [Assessment team] |
| [CIS-CAT / ScapWorkbench] | Configuration Assessment | [Version] | Benchmark compliance checking | [Assessment team] |
| [Organization SIEM, e.g., Wazuh / Splunk] | SIEM | [Version] | Log review and anomaly identification | [Internal SOC] |
| [Risk Management Platform, e.g., ServiceNow GRC / Archer] | GRC Platform | [Version] | Risk register and treatment plan management | [Risk Manager] |
| [Microsoft Excel / Spreadsheet Tool] | Documentation | [Version] | Risk register compilation and scoring | [Lead Assessor] |
| [Other tool] | [Category] | [Version] | [Purpose] | [Operator] |

---

## 5. Asset Inventory and Valuation

*This section documents all information assets within the assessment scope, their classification, ownership, and assessed value or criticality. Asset valuation is the foundation of risk assessment as it determines the potential impact of a successful attack. Authors should complete this section with actual asset data drawn from the organization's Configuration Management Database (CMDB) or asset register. Each asset should be assigned a criticality rating based on its importance to the continuity of NCII functions.*

### 5.1 Asset Identification Approach

Assets were identified through the following methods:

- Review of the organization's Configuration Management Database (CMDB) and existing IT asset register
- Automated network discovery scanning using [Tool Name] conducted on [Date(s)]
- Review of architecture diagrams and data flow diagrams for all in-scope NCII systems
- Interviews with system owners, IT operations personnel, and business unit representatives
- Review of contracts and service schedules for third-party-operated components

### 5.2 Asset Classification Criteria

Assets are classified according to [Organization Name]'s Information Classification Policy ([Policy Reference]) and the NCII designation criteria established under Act 854. The following classification tiers apply:

| Classification Tier | Definition | Example Asset Types |
|---|---|---|
| **NCII Primary** | Assets that directly deliver the designated NCII function. Loss or compromise would directly disrupt NCII operations. | Core transaction processing systems, SCADA/DCS, primary control systems |
| **NCII Supporting** | Assets that support NCII Primary systems. Compromise would indirectly affect NCII function. | Authentication systems, monitoring platforms, network infrastructure |
| **NCII Dependent** | Assets that depend on NCII systems or provide data to them. Compromise may affect data integrity of NCII. | Reporting systems, data feeds, analytics platforms |
| **Business Critical** | Assets critical to organizational operations but not directly part of NCII function. | ERP, HR systems, email platforms |
| **General** | Standard business assets. | General office workstations, printers |

### 5.3 Asset Valuation Methodology

Asset value is assessed across three dimensions:

| Dimension | Description | Scale |
|---|---|---|
| **Confidentiality Value** | Value of maintaining the secrecy of information held by or processed by the asset | 1 (Public) – 5 (Highly Confidential / NCII sensitive) |
| **Integrity Value** | Value of ensuring the accuracy and completeness of information processed by the asset | 1 (Minor impact if corrupted) – 5 (Catastrophic impact if corrupted) |
| **Availability Value** | Value of ensuring the asset is accessible and operational when required | 1 (Tolerable extended downtime) – 5 (Zero tolerance for downtime) |

**Overall Asset Criticality** = Maximum of (Confidentiality, Integrity, Availability) values, mapped as follows:

| Maximum CIA Score | Asset Criticality |
|---|---|
| 5 | Critical |
| 4 | High |
| 3 | Medium |
| 1–2 | Low |

### 5.4 Hardware Asset Inventory

*Document all hardware assets identified within the assessment scope. This table should be populated from the organization's CMDB and validated during the assessment. Where large numbers of assets exist (e.g., hundreds of workstations), group similar assets by type.*

| Asset ID | Asset Name / Description | Asset Type | System(s) Supported | Location | Owner | NCII Classification | Confidentiality | Integrity | Availability | Asset Criticality |
|---|---|---|---|---|---|---|---|---|---|---|
| HW-001 | [Asset name, e.g., Primary SCADA Server — Unit 1] | Server | SYS-001 | [Location] | [Owner] | NCII Primary | [1–5] | [1–5] | [1–5] | [Critical/High/Med/Low] |
| HW-002 | [Asset name] | [Type] | [System] | [Location] | [Owner] | [Classification] | [1–5] | [1–5] | [1–5] | [Rating] |
| HW-003 | [Asset name] | Firewall | SYS-001, SYS-002 | [Location] | [Owner] | NCII Supporting | [1–5] | [1–5] | [1–5] | [Rating] |
| HW-004 | [Asset name] | Network Switch | [Systems] | [Location] | [Owner] | NCII Supporting | [1–5] | [1–5] | [1–5] | [Rating] |
| HW-005 | [Workstations — Operations Floor (qty: [X])] | Endpoint | [Systems] | [Location] | [Owner] | NCII Supporting | [1–5] | [1–5] | [1–5] | [Rating] |
| [HW-XXX] | [Asset name] | [Type] | [System] | [Location] | [Owner] | [Classification] | [1–5] | [1–5] | [1–5] | [Rating] |

### 5.5 Software and Application Asset Inventory

| Asset ID | Application Name | Application Type | Version | System(s) Supported | Vendor | Hosting | Owner | NCII Classification | Asset Criticality |
|---|---|---|---|---|---|---|---|---|---|
| SW-001 | [Application name, e.g., SCADA HMI Software] | SCADA/HMI | [Version] | SYS-001 | [Vendor] | On-premise | [Owner] | NCII Primary | Critical |
| SW-002 | [Application name] | [Type, e.g., Web Application] | [Version] | [System] | [Vendor] | [Cloud/On-prem] | [Owner] | [Classification] | [Rating] |
| SW-003 | [Application name] | [Type, e.g., Database] | [Version] | [System] | [Vendor] | [Hosting] | [Owner] | [Classification] | [Rating] |
| SW-004 | [Application name] | [Type, e.g., Identity Management] | [Version] | [System] | [Vendor] | [Hosting] | [Owner] | [Classification] | [Rating] |
| SW-005 | [Application name] | [Type, e.g., Monitoring Platform] | [Version] | [System] | [Vendor] | [Hosting] | [Owner] | [Classification] | [Rating] |
| [SW-XXX] | [Application name] | [Type] | [Version] | [System] | [Vendor] | [Hosting] | [Owner] | [Classification] | [Rating] |

### 5.6 Data Asset Inventory

| Asset ID | Data Asset Name | Data Type | Classification | System(s) Where Stored/Processed | Owner | Regulatory Requirements | Criticality |
|---|---|---|---|---|---|---|---|
| DA-001 | [Data asset name, e.g., SCADA process control data] | Operational data | Confidential | SYS-001 | [Owner] | Act 854 s21; [Other] | Critical |
| DA-002 | [Data asset name, e.g., Customer personal data] | Personal data | Confidential | SYS-002 | [Owner] | PDPA 2010; Act 854 | High |
| DA-003 | [Data asset name, e.g., Authentication credentials] | Security data | Restricted | [System] | [Owner] | [Regulatory requirements] | Critical |
| DA-004 | [Data asset name] | [Type] | [Classification] | [System] | [Owner] | [Requirements] | [Rating] |
| [DA-XXX] | [Data asset name] | [Type] | [Classification] | [System] | [Owner] | [Requirements] | [Rating] |

### 5.7 Third-Party and Cloud Service Assets

| Asset ID | Service Name | Service Type | Provider | Systems Supported | Data Shared | Contractual Protections | NCII Classification | Criticality |
|---|---|---|---|---|---|---|---|---|
| TP-001 | [Service name, e.g., Managed SOC Service] | Managed Security | [Provider name] | All in-scope | Security logs | [MSA reference; DPA reference] | NCII Supporting | High |
| TP-002 | [Service name, e.g., Cloud Infrastructure (IaaS)] | Cloud / IaaS | [Provider name] | [Systems] | [Data types] | [Agreements] | [Classification] | [Rating] |
| TP-003 | [Service name] | [Type] | [Provider] | [Systems] | [Data types] | [Agreements] | [Classification] | [Rating] |
| [TP-XXX] | [Service name] | [Type] | [Provider] | [Systems] | [Data types] | [Agreements] | [Classification] | [Rating] |

### 5.8 Asset Criticality Summary

| Criticality Level | Hardware Assets | Software Assets | Data Assets | Third-Party Assets | Total |
|---|---|---|---|---|---|
| Critical | [n] | [n] | [n] | [n] | [n] |
| High | [n] | [n] | [n] | [n] | [n] |
| Medium | [n] | [n] | [n] | [n] | [n] |
| Low | [n] | [n] | [n] | [n] | [n] |
| **Total** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** |

---

## 6. Threat Landscape Analysis

*This section documents the current threat environment relevant to [Organization Name]'s operations, sector, and geographic context. It identifies the threat actors and attack vectors most likely to target the organization's NCII assets. Authors should draw on threat intelligence from NACSA advisories, sector-specific intelligence, commercial threat intelligence feeds, and public sources such as MITRE ATT&CK. Threat intelligence sources should be cited.*

### 6.1 Threat Intelligence Sources

The following sources were consulted in preparing this threat landscape analysis:

| Source | Type | Reference / Publication Date |
|---|---|---|
| NACSA Threat Advisory / Cyber Security Situation Report | Government | [Advisory reference / Date] |
| [Sector CERT / ISAC, e.g., FinancialCERT Malaysia] | Sector-specific | [Report reference / Date] |
| [Commercial Threat Intelligence Provider, e.g., Recorded Future, CrowdStrike] | Commercial | [Subscription / Report date] |
| MITRE ATT&CK Framework for Enterprise / ICS | Open Source | v[Version], [Date accessed] |
| ENISA Threat Landscape [Year] | International | [Publication date] |
| CrowdStrike / Mandiant / Palo Alto Unit 42 Annual Threat Report | Commercial | [Year / Date] |
| Organization's own Security Incident and Event Records | Internal | [Date range reviewed] |
| [Any other source] | [Type] | [Reference] |

### 6.2 National and Sectoral Threat Context

*Describe the current national cyber threat environment in Malaysia as it relates to the organization's NCII sector. Reference recent significant incidents affecting the sector or similar organizations if publicly available.*

#### 6.2.1 National Cyber Threat Environment

[Describe the current national threat environment in Malaysia. Reference any significant cyber incidents affecting Malaysian NCII or the relevant sector. Include any relevant NACSA situational reports or MYCERT advisories. Typical discussion points include: state-sponsored threat activity, ransomware trends, supply chain attacks, critical infrastructure targeting, and geopolitical factors relevant to Malaysia's threat environment.]

Key trends observed in the Malaysian national threat landscape during the assessment period include:

- **[Trend 1]:** [Description, e.g., Continued escalation of ransomware attacks targeting [sector] entities, with [number] publicly reported incidents in Malaysia during [period].]
- **[Trend 2]:** [Description, e.g., Increased reconnaissance activity attributed to state-affiliated threat actors targeting energy and utility NCII systems in Southeast Asia.]
- **[Trend 3]:** [Description, e.g., Exploitation of supply chain vulnerabilities through third-party managed service providers gaining increased prevalence.]
- **[Trend 4]:** [Description.]

#### 6.2.2 Sectoral Threat Context

[Describe threats specific to the organization's NCII sector. Include sector-specific attack trends, recent significant incidents in the sector (regionally and globally), and any sector-specific threat actor activity reported by NACSA, the sector regulator, or sector ISACs.]

### 6.3 Threat Actor Profiles

*For each significant threat actor category relevant to the organization, document their characteristics, motivations, capabilities, and typical attack patterns.*

#### 6.3.1 Threat Actor Category Summary

| Threat Actor ID | Category | Actor Name / Group | Motivation | Capability Level | Relevance to Organization | Activity Level |
|---|---|---|---|---|---|---|
| TA-001 | Nation-State / State-Sponsored | [Group name / APT designation, e.g., APT-XX] | Strategic espionage; sabotage of NCII | High | [High / Medium] — [Rationale] | [Active / Moderate / Low] |
| TA-002 | Cybercriminal (Ransomware) | [Group name, e.g., [Ransomware Group]] | Financial gain | High | High — [Sector] entities are high-value targets | Active |
| TA-003 | Hacktivist | [Group name or general category] | Ideological; disruptive | Medium | [Relevance rationale] | [Activity level] |
| TA-004 | Insider Threat (Malicious) | Disgruntled employee / contractor | Financial gain; sabotage; revenge | Low–Medium | High — privileged access to NCII systems | Persistent risk |
| TA-005 | Insider Threat (Accidental) | Employee / contractor error | N/A | N/A | High — most common cause of data incidents | Persistent risk |
| TA-006 | Script Kiddie / Opportunistic | General opportunistic attacker | Financial; notoriety | Low | Medium — exposed attack surface | Active |
| TA-007 | Supply Chain / Third-Party | Compromised vendor or service provider | Financial gain via pivot | Medium–High | High — [Number] third-party dependencies | Active |

#### 6.3.2 Primary Threat Actor — Detailed Profile

*Repeat this profile sub-section for each High or Critical relevance threat actor identified above.*

**Threat Actor: [TA-001 — Actor Name / Category]**

| Attribute | Detail |
|---|---|
| **Actor Designation** | [Name / APT Number / Category] |
| **Classification** | [Nation-State / Cybercriminal / Insider / Other] |
| **Primary Motivation** | [Espionage / Financial Gain / Disruption / Sabotage] |
| **Capability Level** | [High / Medium / Low] — [Justification] |
| **Known Targets** | [Description of typical targets — sector, geography, system types] |
| **Common Initial Access Techniques** | [e.g., Spear phishing; exploitation of public-facing applications; supply chain compromise] |
| **Known TTPs (MITRE ATT&CK)** | [List relevant MITRE ATT&CK Technique IDs and names, e.g., T1566 — Phishing; T1190 — Exploit Public-Facing Application] |
| **Preferred Tools / Malware** | [e.g., Cobalt Strike; custom RATs; commodity ransomware] |
| **Recent Activity** | [Summary of known recent activity relevant to the sector or Malaysia] |
| **Intelligence Confidence** | [High / Medium / Low] — based on [Intelligence source] |

### 6.4 Threat Event Catalogue

*This section identifies and categorises the specific threat events (scenarios) that could affect the organization's NCII assets. Each threat event represents a potential circumstance that, if it occurs, could result in harm to an NCII system. These events form the basis for risk scenario development in Section 8.*

| Threat ID | Threat Category | Threat Event Description | Likely Threat Actor(s) | Primary Attack Vector | Assets at Risk | Frequency of Occurrence (Historical) |
|---|---|---|---|---|---|---|
| TH-001 | Malware / Ransomware | Ransomware attack encrypting NCII operational systems and demanding ransom for decryption keys | TA-002 | Phishing; RDP exploitation; supply chain | SYS-001, SYS-002, [others] | [Frequent / Occasional / Rare in sector] |
| TH-002 | Advanced Persistent Threat | State-sponsored APT establishing persistent access to NCII networks for espionage or pre-positioning | TA-001 | Spear phishing; watering hole; supply chain | SYS-001, DA-001, [others] | [Occasional] |
| TH-003 | Denial of Service | Distributed Denial of Service (DDoS) attack disrupting availability of NCII systems or services | TA-003, TA-006 | Network volumetric attack; application-layer attack | [External-facing systems] | [Frequent] |
| TH-004 | Insider Threat (Malicious) | Privileged insider deliberately exfiltrating data or sabotaging NCII systems | TA-004 | Privileged access abuse | All NCII systems | [Rare] |
| TH-005 | Credential Compromise | Credential theft through phishing, brute force, or credential stuffing leading to unauthorized access | TA-002, TA-006 | Phishing; password attacks; credential markets | Authentication systems; all systems | [Frequent] |
| TH-006 | Supply Chain Attack | Malicious code introduced through compromised software update or vendor access | TA-001, TA-007 | Software supply chain; vendor remote access | All systems with third-party software | [Occasional] |
| TH-007 | OT/ICS-Specific Attack | Targeted attack on industrial control systems causing physical disruption or equipment damage | TA-001 | Spear phishing to IT pivot; direct OT access | SYS-001 (OT/ICS) | [Rare but high impact] |
| TH-008 | Data Breach / Exfiltration | Unauthorized access and exfiltration of sensitive or regulated data | TA-001, TA-002, TA-004 | Exploitation; credential compromise; phishing | DA-001, DA-002 | [Occasional] |
| TH-009 | Physical Intrusion | Unauthorized physical access to data centre or control room enabling asset theft or sabotage | [External attacker; insider] | Social engineering; tailgating | Physical infrastructure | [Rare] |
| TH-010 | Third-Party Compromise | Breach of a third-party provider with access to [Organization Name]'s NCII systems | TA-007 | Vendor credential compromise; supply chain | All systems with third-party connections | [Occasional] |
| TH-011 | [Threat description] | [Detailed description] | [Actors] | [Vector] | [Assets] | [Frequency] |
| [TH-XXX] | [Category] | [Description] | [Actors] | [Vector] | [Assets] | [Frequency] |

### 6.5 Threat Likelihood Assessment

*For each identified threat, assess the likelihood that the threat will materialize against [Organization Name]'s NCII systems during the next assessment period, taking into account the threat actor capability, motivation, and the organization's current attack surface.*

| Threat ID | Threat Event | Threat Actor Motivation | Threat Actor Capability | Opportunity / Attack Surface | Inherent Likelihood Score | Likelihood Rating |
|---|---|---|---|---|---|---|
| TH-001 | Ransomware Attack | High — financial gain | High — well-resourced groups | Medium — some internet-facing exposure | 4 | Likely |
| TH-002 | APT / Espionage | High — strategic value of [sector] | High — state-sponsored resources | Medium — targeted sector | 3 | Possible |
| TH-003 | DDoS Attack | Medium — disruption / activism | Low–Medium | High — internet-facing services | 4 | Likely |
| TH-004 | Malicious Insider | Low–Medium — depends on individual | Low–Medium | High — privileged insiders exist | 2 | Unlikely |
| TH-005 | Credential Compromise | High — enables further access | Medium | High — large user base | 4 | Likely |
| TH-006 | Supply Chain Attack | High — broad impact potential | Medium–High | Medium — [Number] third parties | 3 | Possible |
| TH-007 | OT/ICS Attack | High — maximum disruption | High | Low–Medium — OT segmentation | 2 | Unlikely |
| TH-008 | Data Exfiltration | High — data has monetary value | Medium–High | Medium | 3 | Possible |
| TH-009 | Physical Intrusion | Low–Medium | Low | Low — physical controls in place | 1 | Rare |
| TH-010 | Third-Party Compromise | High | Medium | High — [Number] connected vendors | 3 | Possible |

---

## 7. Vulnerability Assessment Results

*This section documents the technical and procedural vulnerabilities identified during the assessment. Vulnerabilities represent weaknesses in assets or controls that could be exploited by threats. Authors should present vulnerability findings organized by assessment method (technical scanning, configuration review, procedural assessment) and by severity. All vulnerability findings should be traceable to supporting evidence referenced in the appendices.*

### 7.1 Vulnerability Assessment Overview

| Assessment Method | Scope | Date(s) Conducted | Tool / Method | Vulnerabilities Identified |
|---|---|---|---|---|
| Automated Vulnerability Scanning (Authenticated) | [Systems scanned] | [Date(s)] | [Tool name, version] | [Number] |
| Automated Vulnerability Scanning (Unauthenticated) | [Systems scanned] | [Date(s)] | [Tool name, version] | [Number] |
| Web Application Assessment | [Applications assessed] | [Date(s)] | [Tool name / manual] | [Number] |
| Configuration Baseline Review | [Systems reviewed] | [Date(s)] | [CIS Benchmark version / tool] | [Number] |
| OT/ICS Assessment | [OT systems assessed] | [Date(s)] | [Passive scan / manual] | [Number] |
| Physical Security Inspection | [Locations] | [Date(s)] | Walk-through / checklist | [Number] |
| Policy and Procedural Gap Analysis | All controls domains | [Date(s)] | Interview / document review | [Number] |
| **Total Vulnerabilities Identified** | | | | **[Total]** |

### 7.2 Vulnerability Severity Summary

| Severity | Count | Percentage |
|---|---|---|
| Critical (CVSS 9.0–10.0) | [n] | [%] |
| High (CVSS 7.0–8.9) | [n] | [%] |
| Medium (CVSS 4.0–6.9) | [n] | [%] |
| Low (CVSS 0.1–3.9) | [n] | [%] |
| Informational | [n] | [%] |
| **Total** | **[n]** | **100%** |

### 7.3 Technical Vulnerability Findings

*List individual technical vulnerabilities identified during scanning and technical review. For large numbers of vulnerabilities, include the full technical detail in Appendix C and summarize the most significant findings here.*

| Vuln ID | Vulnerability Name | CVE Reference | CVSS Score | Severity | Affected System(s) / Asset(s) | Affected Component | Exploit Available | Remediation |
|---|---|---|---|---|---|---|---|---|
| VT-001 | [Vulnerability name, e.g., Remote Code Execution in Apache Log4j] | CVE-[XXXX-XXXXX] | [Score, e.g., 10.0] | Critical | [Affected systems] | [Component, e.g., Log4j v2.14.1] | Yes — public exploit | Upgrade to Log4j v2.17.1 or later |
| VT-002 | [Vulnerability name] | CVE-[XXXX-XXXXX] | [Score] | Critical | [Systems] | [Component] | [Yes/No] | [Remediation] |
| VT-003 | [Vulnerability name] | CVE-[XXXX-XXXXX] | [Score] | High | [Systems] | [Component] | [Yes/No] | [Remediation] |
| VT-004 | [Vulnerability name] | [CVE/N/A] | [Score] | High | [Systems] | [Component] | [Yes/No] | [Remediation] |
| VT-005 | [Vulnerability name] | [CVE/N/A] | [Score] | Medium | [Systems] | [Component] | [Yes/No] | [Remediation] |
| [VT-XXX] | [Vulnerability name] | [CVE/N/A] | [Score] | [Severity] | [Systems] | [Component] | [Yes/No] | [Remediation] |

*Refer to Appendix C for the complete technical vulnerability listing.*

### 7.4 Configuration Weaknesses

*Document significant configuration weaknesses identified during the configuration baseline review. These represent deviations from hardening benchmarks or security best practices that may increase exploitability.*

| Finding ID | Category | Weakness Description | Affected Systems / Assets | Benchmark Reference | Severity | Recommended Remediation |
|---|---|---|---|---|---|---|
| CF-001 | Network Segmentation | [e.g., Insufficient network segmentation between IT and OT environments; SCADA HMI accessible from corporate network without enforced access controls] | SYS-001 (OT network); Corporate LAN | NIST CSF PR.AC-5; IEC 62443-3-3 SR 5.1 | Critical | Implement network segmentation / DMZ between IT and OT; enforce strict firewall rules |
| CF-002 | Patch Management | [e.g., [Number] servers running operating system versions beyond end-of-life with no active security support] | [Systems affected] | CIS Benchmark; ISO 27002 8.8 | High | Upgrade to supported OS versions; implement compensating controls pending upgrade |
| CF-003 | Password Policy | [e.g., Password expiry policy not enforced for service accounts on [System Name]] | [Systems] | CIS Benchmark; ISO 27002 5.17 | High | Enforce password policy via Group Policy / IAM system |
| CF-004 | Logging and Monitoring | [e.g., Audit logging not enabled on [number] critical systems; logs not forwarded to SIEM] | [Systems] | ISO 27002 8.15, 8.16 | Medium | Enable and centralise audit logging for all critical systems |
| CF-005 | Remote Access | [e.g., Remote Desktop Protocol (RDP) exposed directly to internet on [number] systems without MFA] | [Systems] | CIS Benchmark; NIST SP 800-63B | Critical | Restrict RDP access; enforce MFA; route through VPN or jump host |
| CF-006 | Encryption | [e.g., Data at rest not encrypted on [asset name] containing [data classification] data] | [Assets] | ISO 27002 8.24; PDPA 2010 | High | Implement full-disk encryption or database-level encryption |
| [CF-XXX] | [Category] | [Description] | [Assets] | [Reference] | [Severity] | [Remediation] |

### 7.5 Application Security Findings

| Finding ID | Application | Vulnerability Category | OWASP / CWE Reference | Description | Severity | Recommended Remediation |
|---|---|---|---|---|---|---|
| AS-001 | [Application name] | [e.g., SQL Injection] | OWASP A03:2021; CWE-89 | [Description of specific finding] | Critical | [Remediation action] |
| AS-002 | [Application name] | [e.g., Broken Access Control] | OWASP A01:2021; CWE-284 | [Description] | High | [Remediation] |
| AS-003 | [Application name] | [e.g., Insecure Direct Object Reference] | OWASP A01:2021; CWE-639 | [Description] | High | [Remediation] |
| AS-004 | [Application name] | [e.g., Outdated Third-Party Library with Known CVE] | [CVE reference] | [Description] | High | [Remediation] |
| AS-005 | [Application name] | [e.g., Missing Security Headers] | OWASP; CWE-693 | [Description] | Medium | [Remediation] |
| [AS-XXX] | [Application] | [Category] | [Reference] | [Description] | [Severity] | [Remediation] |

### 7.6 OT/ICS-Specific Vulnerability Findings

*This section applies where operational technology or industrial control systems are within scope. OT vulnerabilities require careful handling as remediation activities (e.g., patching) may introduce operational risk if not properly planned with operations teams.*

| Finding ID | OT System | Vulnerability Description | Protocol / Technology Affected | Safety Implication | Severity | Recommended Remediation | Operational Risk of Remediation |
|---|---|---|---|---|---|---|---|
| OT-001 | [OT System name] | [e.g., Unencrypted MODBUS/TCP communications exposed on process network] | MODBUS/TCP | [Safety implication if applicable] | High | Implement encrypted communications overlay or migrate to secure protocol | Low — configuration change, no process impact |
| OT-002 | [OT System name] | [e.g., HMI workstation running Windows XP SP3 with no vendor patch support] | Windows OS | [Safety implication] | Critical | Migrate to supported OS; implement application whitelisting as compensating control | High — requires planned maintenance window |
| OT-003 | [OT System name] | [e.g., Default credentials in use on PLC [model]] | [Technology] | [Implication] | Critical | Change default credentials; enforce access control | Low |
| [OT-XXX] | [System] | [Description] | [Technology] | [Implication] | [Severity] | [Remediation] | [Operational risk] |

### 7.7 Physical and Environmental Vulnerabilities

| Finding ID | Location | Vulnerability Description | Asset(s) at Risk | Severity | Recommended Remediation |
|---|---|---|---|---|---|
| PH-001 | [Location, e.g., Data Centre — Loading Bay] | [e.g., Tailgating risk at secondary entrance — access control card reader present but no anti-tailgate barrier] | All data centre assets | Medium | Install anti-tailgate turnstile or mantraps at secondary entrance |
| PH-002 | [Location] | [e.g., CCTV camera blind spot covering [area]] | [Assets at risk] | Medium | Reposition or add CCTV camera to eliminate blind spot |
| PH-003 | [Location] | [Description] | [Assets] | [Severity] | [Remediation] |
| [PH-XXX] | [Location] | [Description] | [Assets] | [Severity] | [Remediation] |

### 7.8 Governance and Procedural Gaps

| Finding ID | Domain | Gap Description | Policy / Standard Reference | Severity | Recommended Action |
|---|---|---|---|---|---|
| GP-001 | Patch Management | [e.g., No documented patch management procedure for OT systems; ad hoc patching performed during unscheduled windows without formal change management] | ISO 27002 8.8; Act 854 s21 | High | Develop and implement a formal OT patch management procedure |
| GP-002 | Incident Response | [e.g., Cyber security incident response plan does not include NCII incident notification procedures required under Act 854 s25] | Act 854 s25; ISO 27002 5.26 | High | Update IR plan to include Act 854 notification procedures and NACSA reporting timelines |
| GP-003 | Third-Party Risk | [e.g., No formal cyber security assessment of [Number] third-party providers with access to NCII systems] | ISO 27002 5.19, 5.20; Act 854 | Medium | Conduct cyber security due diligence on all third parties with NCII system access |
| GP-004 | Awareness Training | [e.g., No cyber security awareness training delivered to staff with NCII system access in the past 12 months] | ISO 27002 6.3 | Medium | Implement annual mandatory cyber security awareness training |
| GP-005 | Access Review | [e.g., No formal periodic review of privileged user access rights to NCII systems] | ISO 27002 5.18, 8.2 | High | Implement formal quarterly privileged access review process |
| [GP-XXX] | [Domain] | [Gap description] | [Reference] | [Severity] | [Action] |

---

## 8. Risk Register with Ratings

*This section is the core output of the risk assessment. It presents each identified risk scenario, its likelihood, potential impact, inherent risk score, existing control effectiveness, and residual risk score. Risk ratings inform the treatment decisions in Section 9. Authors should ensure every risk in this register can be traced back to at least one identified vulnerability (Section 7) and at least one identified threat (Section 6).*

### 8.1 Risk Register Methodology Notes

Each risk entry in this register represents a risk scenario defined as:

> **[Threat Event] exploiting [Vulnerability] to cause [Impact] to [Asset(s)]**

Scoring follows the methodology defined in Section 4.4. The register presents:

- **Inherent Risk:** Risk level assuming no controls are in place.
- **Control Effectiveness Rating:** Assessment of how well existing controls reduce the risk.
- **Residual Risk:** Risk level after accounting for existing control effectiveness.
- **Risk Treatment Decision:** The organization's decision on how to address the residual risk.

### 8.2 Risk Register

*The full risk register is presented below. For large organizations, the register may extend to 50 or more rows. Critical and High residual risks are presented first.*

---

#### Critical Risks

| Risk ID | Risk Scenario Description | Affected Asset(s) | Threat Ref | Vuln Ref | Inherent Likelihood | Inherent Impact | Inherent Risk Score | Inherent Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Score | Residual Rating | Risk Owner | Treatment Decision | Treatment Ref |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-001 | Ransomware attack encrypting NCII operational systems, causing extended disruption to [service/function] | SYS-001, SYS-002, HW-001, DA-001 | TH-001 | VT-003, CF-002, GP-001 | 4 | 5 | 20 | **Critical** | Email filtering; endpoint AV; backup system | Partially Effective | 4 | 5 | 20 | **Critical** | [System Owner] | Treat — immediate | TR-001 |
| R-002 | State-sponsored APT establishing persistent access to NCII systems, enabling data exfiltration or pre-positioning for sabotage | SYS-001, DA-001, DA-002 | TH-002 | CF-001, CF-004, VT-001 | 3 | 5 | 15 | **High** | Perimeter firewall; SIEM; EDR | Partially Effective | 3 | 5 | 15 | **High** | [CISO] | Treat — priority | TR-002 |
| R-003 | [Risk scenario description] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **[Rating]** | [Controls] | [Effectiveness] | [1–5] | [1–5] | [Score] | **[Rating]** | [Owner] | [Decision] | [Treatment Ref] |

---

#### High Risks

| Risk ID | Risk Scenario Description | Affected Asset(s) | Threat Ref | Vuln Ref | Inherent Likelihood | Inherent Impact | Inherent Risk Score | Inherent Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Score | Residual Rating | Risk Owner | Treatment Decision | Treatment Ref |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-004 | Credential compromise leading to unauthorized privileged access to NCII systems | Authentication systems; all NCII systems | TH-005 | CF-003, CF-005 | 4 | 4 | 16 | **High** | Password policy; MFA on some systems | Partially Effective | 3 | 4 | 12 | **High** | [IAM Owner] | Treat — 30 days | TR-004 |
| R-005 | Third-party service provider compromise resulting in unauthorized access to [Organization Name] NCII systems via trusted connection | All systems with third-party access | TH-010 | GP-003, [CF refs] | 3 | 4 | 12 | **High** | Vendor contract clauses; VPN for remote access | Partially Effective | 3 | 4 | 12 | **High** | [Procurement / CISO] | Treat — 30 days | TR-005 |
| R-006 | [Risk scenario] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **[Rating]** | [Controls] | [Effectiveness] | [1–5] | [1–5] | [Score] | **[Rating]** | [Owner] | [Decision] | [Ref] |
| R-007 | [Risk scenario] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **[Rating]** | [Controls] | [Effectiveness] | [1–5] | [1–5] | [Score] | **[Rating]** | [Owner] | [Decision] | [Ref] |
| R-008 | [Risk scenario] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **[Rating]** | [Controls] | [Effectiveness] | [1–5] | [1–5] | [Score] | **[Rating]** | [Owner] | [Decision] | [Ref] |

---

#### Medium Risks

| Risk ID | Risk Scenario Description | Affected Asset(s) | Threat Ref | Vuln Ref | Inherent Likelihood | Inherent Impact | Inherent Risk Score | Inherent Rating | Existing Controls | Control Effectiveness | Residual Likelihood | Residual Impact | Residual Risk Score | Residual Rating | Risk Owner | Treatment Decision | Treatment Ref |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| R-009 | Phishing attack resulting in malware installation on employee workstation, used as pivot to NCII systems | Employee endpoints; NCII systems | TH-001, TH-005 | GP-004, CF-003 | 4 | 3 | 12 | **High** | Email filtering; AV; phishing awareness training | Effective | 3 | 3 | 9 | **Medium** | [IT Security] | Treat — 90 days | TR-009 |
| R-010 | DDoS attack against internet-facing services causing temporary unavailability of [customer-facing service] | [External-facing systems] | TH-003 | [Vuln refs] | 4 | 2 | 8 | **Medium** | CDN; ISP-level DDoS protection (partial) | Partially Effective | 3 | 2 | 6 | **Medium** | [Network Team] | Treat — 90 days | TR-010 |
| R-011 | [Risk scenario] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **[Rating]** | [Controls] | [Effectiveness] | [1–5] | [1–5] | [Score] | **[Rating]** | [Owner] | [Decision] | [Ref] |
| R-012 | [Risk scenario] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **[Rating]** | [Controls] | [Effectiveness] | [1–5] | [1–5] | [Score] | **[Rating]** | [Owner] | [Decision] | [Ref] |
| [R-XXX] | [Risk scenario] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **[Rating]** | [Controls] | [Effectiveness] | [1–5] | [1–5] | [Score] | **[Rating]** | [Owner] | [Decision] | [Ref] |

---

#### Low Risks

| Risk ID | Risk Scenario Description | Affected Asset(s) | Threat Ref | Vuln Ref | Residual Likelihood | Residual Impact | Residual Risk Score | Residual Rating | Risk Owner | Treatment Decision |
|---|---|---|---|---|---|---|---|---|---|---|
| R-020 | Physical intrusion to data centre resulting in theft of storage media containing NCII data | Physical infrastructure; DA-001 | TH-009 | PH-001 | 1 | 4 | 4 | **Low** | [Security Manager] | Accept — monitor; review physical controls |
| R-021 | [Risk scenario] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **Low** | [Owner] | [Decision] |
| [R-XXX] | [Risk scenario] | [Assets] | [Threats] | [Vulns] | [1–5] | [1–5] | [Score] | **Low** | [Owner] | [Decision] |

### 8.3 Risk Heat Map

*Insert or reproduce the risk heat map graphic showing the distribution of residual risks in the likelihood × impact matrix. If embedding a graphic is not possible, the text-based matrix below represents residual risk distribution.*

**Residual Risk Distribution — Heat Map (Text Representation):**

| | **Impact: Negligible (1)** | **Impact: Minor (2)** | **Impact: Moderate (3)** | **Impact: Major (4)** | **Impact: Catastrophic (5)** |
|---|---|---|---|---|---|
| **Likelihood: Almost Certain (5)** | | | | | |
| **Likelihood: Likely (4)** | | | R-009 | | |
| **Likelihood: Possible (3)** | | | | R-005 | R-002 |
| **Likelihood: Unlikely (2)** | | | | R-004 (post-treatment target) | R-001 (post-treatment target) |
| **Likelihood: Rare (1)** | | | | R-020 | |

*Populate with actual Risk IDs from the risk register. Risks in the top-right quadrant (red zone) represent the highest priority treatment targets.*

### 8.4 Risk Register Summary Statistics

| Metric | Value |
|---|---|
| Total risks in register | [Number] |
| Critical residual risks | [Number] |
| High residual risks | [Number] |
| Medium residual risks | [Number] |
| Low residual risks | [Number] |
| Risks with treatment — Treat | [Number] |
| Risks with treatment — Tolerate | [Number] |
| Risks with treatment — Transfer | [Number] |
| Risks with treatment — Terminate | [Number] |
| Risks with treatment — Accept | [Number] |

---

## 9. Treatment Plan Recommendations

*This section presents the recommended risk treatment actions for all risks that exceed the organization's risk acceptance threshold. Treatment plans should be specific, actionable, assigned to named owners, and time-bound. Where risks are accepted, the rationale and acceptance authority must be documented. Authors should cross-reference each treatment to the corresponding risk(s) in the risk register.*

### 9.1 Risk Treatment Options

The following treatment strategies are available and have been applied as appropriate:

| Treatment Strategy | Description | Typical Application |
|---|---|---|
| **Treat (Reduce / Mitigate)** | Implement additional or improved controls to reduce likelihood or impact to an acceptable level | Preferred for Critical and High residual risks |
| **Transfer** | Transfer the risk to a third party (e.g., cyber insurance; contractual transfer to service provider) | Appropriate where financial impact is the primary concern and technical mitigation is not cost-effective |
| **Tolerate (Accept with Controls)** | Accept the risk at its current level, with documented compensating controls and monitoring | Appropriate for Medium risks where treatment cost exceeds risk reduction benefit |
| **Terminate (Avoid)** | Eliminate the risk by ceasing the activity that creates it | Where the risky activity is not essential to operations |
| **Accept** | Accept the risk at its current level with no additional controls | Appropriate for Low risks only; requires formal documented acceptance |

### 9.2 Treatment Plan — Critical and High Risks

#### Treatment Plan: TR-001

| Field | Detail |
|---|---|
| **Treatment ID** | TR-001 |
| **Risk(s) Addressed** | R-001 |
| **Risk Rating (Residual)** | Critical — Score 20 |
| **Treatment Strategy** | Treat (Reduce / Mitigate) |
| **Treatment Objective** | Reduce residual risk from Critical (Score 20) to High (Score 12) or below within [X] months |
| **Root Cause(s) Targeted** | Insufficient backup isolation; inadequate endpoint detection; unpatched systems |
| **Proposed Controls / Actions** | See actions below |
| **Target Risk Rating (Post-Treatment)** | High — Score ≤ 16 (immediate); Medium — Score ≤ 9 (12 months) |
| **Overall Treatment Owner** | [Risk Owner — Name, Title] |
| **Budget Estimate** | [RM amount or range, if known] |
| **Target Completion Date** | [Date] |

**Treatment Actions:**

| Action ID | Action Description | Control Type | Responsible Party | Target Date | Success Criteria | Status |
|---|---|---|---|---|---|---|
| TR-001-A | Implement offline / air-gapped backup solution for NCII primary systems, tested monthly | Detective / Recovery | [System Owner] | [Date] | Monthly backup restoration test successful; backups confirmed isolated from production network | Not Started |
| TR-001-B | Deploy next-generation Endpoint Detection and Response (EDR) across all NCII-connected endpoints | Detective / Preventive | [IT Security] | [Date] | EDR agent deployed on [X]% of in-scope endpoints; SIEM integration active | Not Started |
| TR-001-C | Accelerate patch deployment for all Critical and High CVE vulnerabilities on NCII systems — patch within 14 days of release | Preventive | [IT Operations] | Ongoing | Patch compliance rate ≥ 95% for Critical CVEs within 14 days; tracked via vulnerability management platform | Not Started |
| TR-001-D | Conduct tabletop exercise simulating ransomware attack against NCII systems, including NACSA notification procedures | Corrective | [CISO / IR Team] | [Date] | Exercise completed; lessons learned documented; IR plan updated | Not Started |
| TR-001-E | [Additional action] | [Type] | [Responsible] | [Date] | [Success criteria] | Not Started |

---

#### Treatment Plan: TR-002

| Field | Detail |
|---|---|
| **Treatment ID** | TR-002 |
| **Risk(s) Addressed** | R-002 |
| **Risk Rating (Residual)** | High — Score 15 |
| **Treatment Strategy** | Treat (Reduce / Mitigate) |
| **Treatment Objective** | Reduce residual likelihood of APT persistence through improved detection and network segmentation |
| **Root Cause(s) Targeted** | Insufficient network segmentation (CF-001); limited log visibility (CF-004); unpatched critical CVEs (VT-001) |
| **Proposed Controls / Actions** | See actions below |
| **Target Risk Rating (Post-Treatment)** | Medium — Score ≤ 9 |
| **Overall Treatment Owner** | [CISO — Name] |
| **Budget Estimate** | [RM amount] |
| **Target Completion Date** | [Date] |

**Treatment Actions:**

| Action ID | Action Description | Control Type | Responsible Party | Target Date | Success Criteria | Status |
|---|---|---|---|---|---|---|
| TR-002-A | Implement micro-segmentation between IT and OT environments; establish dedicated OT DMZ with enforced access control lists | Preventive | [Network / OT Team] | [Date] | Network architecture review confirms segmentation implemented; firewall rules verified by penetration test | Not Started |
| TR-002-B | Expand SIEM coverage to include all NCII primary systems; implement use-cases aligned to APT TTPs in MITRE ATT&CK | Detective | [SOC / SIEM Team] | [Date] | 100% of NCII primary systems forwarding logs to SIEM; [Number] APT-specific detection rules active | Not Started |
| TR-002-C | Deploy deception technology (honeypots / honey tokens) on NCII network segments | Detective | [IT Security] | [Date] | Deception assets deployed; alert configured and tested | Not Started |
| TR-002-D | Patch CVE-[XXXX-XXXXX] and all other Critical CVEs on NCII systems within 14 days | Preventive | [IT Operations] | [Date] | All Critical CVEs patched; verified by rescan | Not Started |

---

#### Treatment Plan: TR-003

| Field | Detail |
|---|---|
| **Treatment ID** | TR-003 |
| **Risk(s) Addressed** | [Risk IDs] |
| **Risk Rating (Residual)** | [Rating] — Score [n] |
| **Treatment Strategy** | [Strategy] |
| **Treatment Objective** | [Objective] |
| **Root Cause(s) Targeted** | [Root causes] |
| **Proposed Controls / Actions** | See actions below |
| **Target Risk Rating (Post-Treatment)** | [Target] |
| **Overall Treatment Owner** | [Owner] |
| **Budget Estimate** | [Amount] |
| **Target Completion Date** | [Date] |

**Treatment Actions:**

| Action ID | Action Description | Control Type | Responsible Party | Target Date | Success Criteria | Status |
|---|---|---|---|---|---|---|
| TR-003-A | [Action] | [Type] | [Responsible] | [Date] | [Success criteria] | Not Started |
| TR-003-B | [Action] | [Type] | [Responsible] | [Date] | [Success criteria] | Not Started |

*[Repeat Treatment Plan blocks for each Critical and High risk identified in Section 8. Add additional TR-XXX entries as required.]*

---

### 9.3 Treatment Plan — Medium Risks

*For Medium risks, treatment plans may be presented in summary format.*

| Treatment ID | Risk(s) Addressed | Risk Rating | Treatment Strategy | Proposed Action Summary | Owner | Target Date |
|---|---|---|---|---|---|---|
| TR-009 | R-009 | Medium (9) | Treat | Enhance phishing simulation programme; mandatory awareness training for all NCII staff; implement advanced email filtering | [IT Security] | [Date] |
| TR-010 | R-010 | Medium (6) | Treat + Transfer | Implement dedicated DDoS scrubbing service with ISP; review cyber insurance coverage for DDoS scenarios | [Network Team / Risk Manager] | [Date] |
| TR-011 | [Risk ID] | [Rating] | [Strategy] | [Summary] | [Owner] | [Date] |
| [TR-XXX] | [Risk IDs] | [Rating] | [Strategy] | [Summary] | [Owner] | [Date] |

### 9.4 Accepted Risks

*All risk acceptance decisions must be documented here with the name and authority of the accepting official. Accepted risks must not exceed the organization's stated risk acceptance threshold (Section 3.3). Only Low risks may be accepted under normal circumstances.*

| Risk ID | Risk Description | Residual Rating | Acceptance Rationale | Compensating Controls | Accepting Authority | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|---|
| R-020 | Physical intrusion to data centre | Low (4) | [Rationale, e.g., Cost of additional physical controls exceeds expected loss given existing CCTV and security guard coverage; risk rated Low] | [Compensating controls, e.g., Existing CCTV; security guard patrol; alarmed access control] | [Risk Manager — Name] | [Date] | [Date — next assessment] |
| [R-XXX] | [Description] | [Rating] | [Rationale] | [Controls] | [Authority] | [Date] | [Date] |

### 9.5 Treatment Plan Roadmap

*The following phased roadmap summarizes the prioritized sequence for implementing treatment actions.*

**Phase 1 — Immediate Actions (0–30 days): Critical and High Risks**

| Priority | Treatment ID | Action | Owner | Target Date |
|---|---|---|---|---|
| 1 | TR-001-A | Implement offline backup solution | [Owner] | [Date] |
| 2 | TR-001-C | Patch Critical CVEs on NCII systems | [Owner] | [Date] |
| 3 | TR-002-D | Patch CVE-[XXXX-XXXXX] | [Owner] | [Date] |
| 4 | CF-005 remediation | Restrict RDP; enforce MFA | [Owner] | [Date] |
| 5 | TR-004-A | [Action] | [Owner] | [Date] |

**Phase 2 — Short-Term Actions (31–90 days): High and Medium Risks**

| Priority | Treatment ID | Action | Owner | Target Date |
|---|---|---|---|---|
| 1 | TR-001-B | Deploy EDR across NCII endpoints | [Owner] | [Date] |
| 2 | TR-002-A | Implement IT/OT network segmentation | [Owner] | [Date] |
| 3 | TR-002-B | Expand SIEM coverage | [Owner] | [Date] |
| 4 | TR-009 | Phishing simulation and awareness training | [Owner] | [Date] |
| 5 | [TR-XXX] | [Action] | [Owner] | [Date] |

**Phase 3 — Medium-Term Actions (91–180 days): Medium and Residual High Risks**

| Priority | Treatment ID | Action | Owner | Target Date |
|---|---|---|---|---|
| 1 | TR-005 | Third-party risk assessment programme | [Owner] | [Date] |
| 2 | TR-002-C | Deploy deception technology | [Owner] | [Date] |
| 3 | TR-001-D | Ransomware tabletop exercise | [Owner] | [Date] |
| 4 | [TR-XXX] | [Action] | [Owner] | [Date] |

**Phase 4 — Longer-Term Actions (181–365 days): Residual Risks and Systemic Improvements**

| Priority | Treatment ID | Action | Owner | Target Date |
|---|---|---|---|---|
| 1 | [TR-XXX] | [Action] | [Owner] | [Date] |
| 2 | [TR-XXX] | [Action] | [Owner] | [Date] |

### 9.6 Treatment Effectiveness Monitoring

Treatment actions will be tracked and their effectiveness monitored through the following mechanisms:

| Monitoring Mechanism | Frequency | Responsible Party | Escalation Path |
|---|---|---|---|
| Monthly risk treatment progress review | Monthly | Risk Manager | CISO if milestones missed |
| Quarterly risk register review and update | Quarterly | Risk Manager | Risk Committee |
| Post-treatment re-assessment (vulnerability rescan) | Upon completion of each treatment | Lead Assessor / IT Security | CISO |
| Annual cyber security risk assessment (full cycle) | Annual | Risk Manager / Approved Assessor | Board Risk Committee |
| [Organization Name] Risk Committee reporting | Quarterly | Risk Manager | Board Audit and Risk Committee |
| NACSA reporting (as required) | Per Act 854 / NACSA directive | CISO / Risk Manager | CEO / Board |

---

## 10. Roles and Responsibilities

*This section defines the roles and responsibilities of key stakeholders in the cyber security risk management process, including the production and maintenance of this report. The RACI matrix ensures clear accountability.*

### 10.1 Key Roles

| Role | Title / Designation | Name | Department | Responsibility |
|---|---|---|---|---|
| **Risk Assessment Sponsor** | [e.g., Chief Executive Officer / Chief Information Officer] | [Name] | [Department] | Authorizes the risk assessment; approves the final report and treatment plan |
| **Risk Manager** | [e.g., Chief Risk Officer / Risk Manager] | [Name] | Risk Management | Overall responsibility for NCII risk management; owns the risk register; coordinates treatment plan execution |
| **Lead Assessor** | [e.g., CISO / Approved Assessor] | [Name] | [Department / External Firm] | Leads the assessment; responsible for methodology; prepares the report |
| **System Owners** | [Various] | [Names] | [Various departments] | Accountable for the security of assigned NCII systems; provide access and information during assessment; own treatment actions for their systems |
| **IT Operations** | [IT Manager / Head of IT Operations] | [Name] | IT Department | Responsible for technical remediation actions; patch management; configuration hardening |
| **Security Operations** | [SOC Manager / Head of Cyber Security] | [Name] | IT / Cyber Security | Threat detection and monitoring; SIEM management; incident response |
| **Legal / Compliance** | [General Counsel / Head of Compliance] | [Name] | Legal / Compliance | Ensures regulatory compliance obligations are met; advises on Act 854 and NACSA requirements |
| **Business Continuity** | [BCM Manager] | [Name] | [Department] | Provides BIA data; ensures treatment plans align with BCP requirements |
| **Board Risk Committee** | [Committee Chair] | [Name] | Board | Reviews and approves risk tolerance; approves treatment plans for Critical risks |
| **NACSA** | Chief Executive, NACSA | N/A | NACSA | Regulatory oversight body; receives annual risk assessment report submission |

### 10.2 RACI Matrix — Risk Assessment Activities

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Board / Risk Committee | CEO / CIO | Risk Manager | CISO / Lead Assessor | System Owners | IT Operations | Legal / Compliance | NACSA |
|---|---|---|---|---|---|---|---|---|
| Approve assessment scope and plan | I | A | R | C | C | I | I | I |
| Conduct asset identification | I | I | C | A | R | R | I | — |
| Conduct threat landscape analysis | I | I | C | R/A | C | C | I | I |
| Conduct vulnerability assessment | I | I | C | A | C | R | I | — |
| Score and rate risks | I | I | C | R/A | C | C | I | — |
| Review and validate risk register | I | A | R | C | C | I | C | — |
| Develop treatment recommendations | I | A | R | R | C | C | C | — |
| Approve treatment plan (Critical risks) | A | R | C | C | I | I | C | I |
| Approve treatment plan (High risks) | I | A | R | C | C | I | C | — |
| Approve treatment plan (Medium risks) | I | I | A | R | C | C | I | — |
| Accept Low risks | I | I | A | C | C | I | I | — |
| Execute treatment actions | I | I | A | C | R | R | I | — |
| Monitor treatment progress | I | I | A | R | C | C | I | — |
| Submit report to NACSA | I | A | C | C | I | I | C | R (receive) |
| Annual report approval | A | R | C | C | I | I | C | I |

---

## 11. Review and Approval

### 11.1 Document Version History

| Version | Date | Author | Changes Description | Reviewed By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author name, designation] | Initial draft — assessment methodology and scope | [Reviewer name] |
| 0.2 | [Date] | [Author name] | Asset inventory and threat landscape sections completed | [Reviewer name] |
| 0.3 | [Date] | [Author name] | Vulnerability assessment results incorporated | [Reviewer name] |
| 0.4 | [Date] | [Author name] | Risk register completed; treatment plans drafted | [Reviewer name] |
| 0.5 | [Date] | [Author name] | Internal review comments addressed; executive summary completed | [Reviewer name] |
| 0.9 | [Date] | [Author name] | Draft issued for stakeholder review and validation | [All stakeholders] |
| 1.0 | [Date] | [Author name] | Final version — all review comments addressed; approved for submission | [Approving Authority] |

### 11.2 Stakeholder Review Record

*Document all stakeholders who reviewed and provided comments on draft versions of this report.*

| Reviewer Name | Title / Role | Department / Organization | Version Reviewed | Review Date | Comments Provided | Comments Incorporated |
|---|---|---|---|---|---|---|
| [Name] | [Title] | [Department] | [Version] | [Date] | [Yes / No] | [Yes / Partial / N/A] |
| [Name] | [Title] | [Department] | [Version] | [Date] | [Yes / No] | [Yes / Partial / N/A] |
| [Name] | [Title] | [Department] | [Version] | [Date] | [Yes / No] | [Yes / Partial / N/A] |
| [Name] | [Title] | [Department] | [Version] | [Date] | [Yes / No] | [Yes / Partial / N/A] |

### 11.3 Approval Sign-Off

By signing below, the undersigned confirm that they have reviewed this Cyber Security Risk Assessment Report, that the findings and risk ratings are accepted as accurate to the best of their knowledge, and that the treatment plan is approved for implementation.

| Role | Name | Signature | Date |
|---|---|---|---|
| **Lead Assessor** | [Name, Designation] | __________________ | [Date] |
| **Risk Manager** | [Name, Designation] | __________________ | [Date] |
| **Chief Information Security Officer** | [Name, Designation] | __________________ | [Date] |
| **Chief Information Officer / Head of Technology** | [Name, Designation] | __________________ | [Date] |
| **Chief Risk Officer** | [Name, Designation] | __________________ | [Date] |
| **Chief Executive Officer / Director** | [Name, Designation] | __________________ | [Date] |
| **Board Risk Committee Chair** (for Critical and High risks) | [Name, Designation] | __________________ | [Date] |

### 11.4 Submission Record

| Submission | Recipient | Date Submitted | Reference Number | Acknowledgment Received |
|---|---|---|---|---|
| Annual Risk Assessment Report — NACSA Submission | Chief Executive, NACSA | [Date] | [NACSA Reference / Tracking Number] | [Yes / Pending] |
| Report — Board Risk Committee | [Committee name] | [Date] | [Minutes reference] | [Yes] |
| Report — Management Committee | [Committee name] | [Date] | [Reference] | [Yes] |

---

## 12. References

*This section lists all regulatory instruments, standards, frameworks, and internal policies referenced in this report.*

### 12.1 Primary Legislation

| Reference | Title | Jurisdiction | Relevance to this Report |
|---|---|---|---|
| **Act 854** | Cyber Security Act 2024 | Malaysia | Primary regulatory instrument; Section 21 mandates this report |
| **Act 709** | Personal Data Protection Act 2010 (PDPA) | Malaysia | Data asset valuation; personal data breach risk scenarios |
| **Act 588** | Communications and Multimedia Act 1998 | Malaysia | [Where applicable — communications sector entities] |
| **Act 56** | Energy Commission Act 2001 | Malaysia | [Where applicable — energy sector entities] |
| **Act 89** | Official Secrets Act 1972 | Malaysia | Document classification obligations |

### 12.2 Cyber Security Act 2024 — Key Sections Referenced

| Section | Title | Requirement Addressed in this Report |
|---|---|---|
| Section 21 | Annual Cyber Security Risk Assessment | Primary obligation — this report fulfils the Section 21 requirement |
| Section 22 | Cyber Security Audit | Risk assessment findings inform audit scope |
| Section 25 | Reporting of Cyber Security Incidents | Risk treatment plans include NACSA notification procedures |
| Section 26 | Compliance with Directives | Treatment plans designed to comply with any NACSA directives issued |
| Section 27 | NCII Entity Obligations | General NCII operator compliance obligations context |

### 12.3 Regulatory Guidelines and Directives

| Reference | Title | Issuing Authority | Version / Date |
|---|---|---|---|
| [NACSA CSOP] | Cyber Security Operations Policy | NACSA | [Version / Date] |
| [NACSA RA Guideline] | Guidelines on Cyber Security Risk Assessment for NCII Entities | NACSA | [Version / Date if issued] |
| [BNM RMiT] | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | [BNM/RH/PD 028-X / Date] |
| [MCMC Determination] | [Title] | Malaysian Communications and Multimedia Commission | [Reference / Date] |
| [Sector Regulator Guidance] | [Title] | [Authority] | [Reference / Date] |

### 12.4 Standards and Frameworks

| Reference | Title | Publisher | Version |
|---|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | ISO/IEC | 2022 |
| ISO/IEC 27005:2022 | Information Security — Guidance on Managing Information Security Risks | ISO/IEC | 2022 |
| ISO/IEC 27002:2022 | Information Security, Cybersecurity and Privacy Protection — Information Security Controls | ISO/IEC | 2022 |
| NIST SP 800-30 Rev 1 | Guide for Conducting Risk Assessments | NIST | Revision 1 (2012) |
| NIST SP 800-53 Rev 5 | Security and Privacy Controls for Information Systems and Organizations | NIST | Revision 5 (2020) |
| NIST Cybersecurity Framework 2.0 | Cybersecurity Framework | NIST | 2.0 (2024) |
| NIST SP 800-82 Rev 3 | Guide to Operational Technology (OT) Security | NIST | Revision 3 (2023) |
| IEC 62443-3-2 | Security Risk Assessment for System Design | IEC | 2020 |
| MITRE ATT&CK for Enterprise | Adversarial Tactics, Techniques and Common Knowledge | MITRE | v[Version] |
| MITRE ATT&CK for ICS | Adversarial Tactics, Techniques and Common Knowledge — ICS | MITRE | v[Version] |
| OWASP Top 10 | Top 10 Web Application Security Risks | OWASP | 2021 |
| CIS Controls | CIS Critical Security Controls | Center for Internet Security | v8.1 |

### 12.5 Internal Policy Documents Referenced

| Document Title | Document ID | Version | Date |
|---|---|---|---|
| [Organization Name] Cyber Security Policy | [ID] | [Version] | [Date] |
| [Organization Name] Risk Management Policy | [ID] | [Version] | [Date] |
| [Organization Name] Information Classification Policy | [ID] | [Version] | [Date] |
| [Organization Name] Acceptable Use Policy | [ID] | [Version] | [Date] |
| [Organization Name] Third-Party Risk Management Policy | [ID] | [Version] | [Date] |
| [Organization Name] Incident Response Plan | [ID] | [Version] | [Date] |
| [Organization Name] Business Continuity Plan | [ID] | [Version] | [Date] |
| [Organization Name] IT Asset Management Policy | [ID] | [Version] | [Date] |
| [Organization Name] Change Management Policy | [ID] | [Version] | [Date] |
| Previous Annual Cyber Security Risk Assessment Report | [ID] | [Version] | [Date of previous assessment] |

---

## 13. Appendices

### Appendix A — Assessment Plan

*Attach or reference the formal Assessment Plan approved prior to commencement of this assessment. The Assessment Plan should include the detailed scope definition, methodology selection rationale, resource plan, timeline, and stakeholder communication plan.*

**Document Reference:** [Assessment Plan — Document ID: [ID], Version [X.X], dated [Date]]

| Item | Detail |
|---|---|
| Assessment Plan Title | [Title] |
| Document ID | [ID] |
| Version | [Version] |
| Approved By | [Approving Authority] |
| Approval Date | [Date] |
| Location | [File path / Document management system reference] |

---

### Appendix B — Asset Register (Full)

*This appendix contains the complete, detailed asset inventory for all in-scope NCII systems and supporting assets. The summary in Section 5 presents a subset of the most critical assets. This appendix is the authoritative record.*

**Document Reference:** [Full Asset Register — Document ID: [ID], Version [X.X], dated [Date]]

*[Attach full asset register or reference the CMDB export used for this assessment. The full register should include all fields defined in Section 5, populated for every identified asset.]*

**Asset Count Summary:**

| Asset Type | Total Assets Identified | Critical | High | Medium | Low |
|---|---|---|---|---|---|
| Hardware | [n] | [n] | [n] | [n] | [n] |
| Software / Applications | [n] | [n] | [n] | [n] | [n] |
| Data Assets | [n] | [n] | [n] | [n] | [n] |
| Third-Party / Cloud Services | [n] | [n] | [n] | [n] | [n] |
| **Total** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** |

---

### Appendix C — Full Technical Vulnerability Report

*This appendix contains the complete output of all technical vulnerability scans, configuration reviews, and application security assessments. Due to the sensitive nature of this information, this appendix is classified at a higher sensitivity level and distribution is restricted to the assessment team, CISO, and relevant system owners.*

**Classification of this Appendix:** [Restricted / Secret]

**Document Reference:** [Full Vulnerability Scan Report — Document ID: [ID], Version [X.X], dated [Date]]

| Scan / Assessment | Tool Used | Date | In-Scope Systems | Critical Findings | High Findings | Medium Findings | Low Findings | Informational |
|---|---|---|---|---|---|---|---|---|
| [Scan 1 — e.g., Authenticated Network Scan] | [Tool] | [Date] | [Systems] | [n] | [n] | [n] | [n] | [n] |
| [Scan 2 — e.g., Unauthenticated Network Scan] | [Tool] | [Date] | [Systems] | [n] | [n] | [n] | [n] | [n] |
| [Scan 3 — e.g., Web Application Assessment] | [Tool] | [Date] | [Applications] | [n] | [n] | [n] | [n] | [n] |
| [Scan 4 — e.g., OT Passive Scan] | [Tool] | [Date] | [OT Systems] | [n] | [n] | [n] | [n] | [n] |
| [Configuration Review] | [Tool / Manual] | [Date] | [Systems] | [n] | [n] | [n] | [n] | [n] |

*Refer to attached raw scan reports: [List file names / document IDs]*

---

### Appendix D — Threat Intelligence Summary

*This appendix contains supporting threat intelligence materials that informed the threat landscape analysis in Section 6, including summaries of relevant NACSA advisories, sector CERT reports, and commercial threat intelligence.*

**Document Reference:** [Threat Intelligence Pack — Document ID: [ID], dated [Date]]

| Intelligence Source | Report Title | Date | Key Findings Relevant to this Assessment |
|---|---|---|---|
| NACSA | [Advisory / Report Title] | [Date] | [Key findings] |
| [Sector CERT / ISAC] | [Report Title] | [Date] | [Key findings] |
| [Commercial Provider] | [Report Title] | [Date] | [Key findings] |
| [Open Source] | [Report Title] | [Date] | [Key findings] |

---

### Appendix E — Control Assessment Results

*This appendix presents the detailed results of the security control assessment conducted against the applicable control framework ([ISO/IEC 27002:2022 / NIST CSF 2.0 / NACSA CSOP]). It documents the maturity or compliance rating for each assessed control.*

**Control Framework Applied:** [ISO/IEC 27002:2022 / NIST CSF 2.0 / NACSA CSOP]

**Maturity Scale:**

| Level | Rating | Description |
|---|---|---|
| 0 | Not Implemented | Control does not exist |
| 1 | Initial | Control exists informally; not documented or consistently applied |
| 2 | Managed | Control is documented and partially implemented |
| 3 | Defined | Control is fully documented, implemented, and consistently applied |
| 4 | Quantitatively Managed | Control effectiveness is measured and monitored |
| 5 | Optimising | Control is continuously improved based on metrics |

**Control Assessment Summary:**

| Control Domain | Controls Assessed | Not Implemented (0) | Initial (1) | Managed (2) | Defined (3) | Quantitatively Managed (4) | Optimising (5) | Average Maturity |
|---|---|---|---|---|---|---|---|---|
| Organisational Controls | [n] | [n] | [n] | [n] | [n] | [n] | [n] | [X.X] |
| People Controls | [n] | [n] | [n] | [n] | [n] | [n] | [n] | [X.X] |
| Physical Controls | [n] | [n] | [n] | [n] | [n] | [n] | [n] | [X.X] |
| Technological Controls | [n] | [n] | [n] | [n] | [n] | [n] | [n] | [X.X] |
| **Total / Average** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** | **[n]** | **[X.X]** |

*Refer to attached full control assessment workbook: [Document ID]*

---

### Appendix F — Risk Register (Full — Machine-Readable)

*This appendix provides the full risk register in a tabular format suitable for import into the organization's GRC platform or risk management system. It includes all risk entries from Section 8 plus additional supporting data fields.*

**Document Reference:** [Risk Register Spreadsheet — Document ID: [ID], Version [X.X], dated [Date]]

*[Attach the full risk register in spreadsheet format. The spreadsheet should include all columns from the risk register tables in Section 8, plus the following additional fields:]*

Additional fields in the full risk register:

- Risk Category (Strategic / Operational / Financial / Compliance / Reputational)
- Sub-category
- Business Process(es) Affected
- NCII Function Impact
- Regulatory Breach Risk (Yes / No)
- Insurance Coverage (Yes / No / Partial)
- Date First Identified
- Date Last Reviewed
- Previous Assessment Risk ID (for tracking year-on-year)
- Treatment Status
- Treatment Completion Percentage
- Next Review Date

---

### Appendix G — Treatment Plan Tracker

*This appendix provides the consolidated treatment plan tracker, combining all treatment actions from Section 9 into a single management view. This tracker should be maintained and updated monthly by the Risk Manager.*

**Document Reference:** [Treatment Plan Tracker — Document ID: [ID], Version [X.X], dated [Date]]

| Treatment Action ID | Risk ID(s) | Action Description | Owner | Start Date | Target Date | Actual Completion Date | Status | % Complete | Notes |
|---|---|---|---|---|---|---|---|---|---|
| TR-001-A | R-001 | Implement offline backup solution | [Owner] | [Date] | [Date] | — | Not Started | 0% | [Notes] |
| TR-001-B | R-001 | Deploy EDR across NCII endpoints | [Owner] | [Date] | [Date] | — | Not Started | 0% | [Notes] |
| TR-001-C | R-001 | Accelerate patching — Critical CVEs | [Owner] | [Date] | Ongoing | — | Not Started | 0% | [Notes] |
| TR-001-D | R-001 | Ransomware tabletop exercise | [Owner] | [Date] | [Date] | — | Not Started | 0% | [Notes] |
| TR-002-A | R-002 | IT/OT network segmentation | [Owner] | [Date] | [Date] | — | Not Started | 0% | [Notes] |
| TR-002-B | R-002 | Expand SIEM coverage | [Owner] | [Date] | [Date] | — | Not Started | 0% | [Notes] |
| [TR-XXX-X] | [Risk IDs] | [Action] | [Owner] | [Date] | [Date] | — | Not Started | 0% | [Notes] |

---

### Appendix H — Stakeholder Interview Records

*This appendix contains the records of stakeholder interviews conducted during the assessment, including the names of interviewees, the topics covered, and key information obtained. Interview notes are maintained as work papers supporting the assessment findings.*

**Classification of this Appendix:** [Confidential]

| Interview ID | Interviewee Name | Title | Department | Interview Date | Topics Covered | Key Findings / Information Obtained | Notes |
|---|---|---|---|---|---|---|---|
| INT-001 | [Name] | [Title] | [Department] | [Date] | [Topics, e.g., OT system architecture, patch management practices, incident history] | [Key findings] | [Notes] |
| INT-002 | [Name] | [Title] | [Department] | [Date] | [Topics] | [Key findings] | [Notes] |
| INT-003 | [Name] | [Title] | [Department] | [Date] | [Topics] | [Key findings] | [Notes] |
| [INT-XXX] | [Name] | [Title] | [Department] | [Date] | [Topics] | [Key findings] | [Notes] |

---

### Appendix I — Previous Assessment Findings — Closure Status

*This appendix tracks the status of risk findings and treatment actions identified in the previous annual risk assessment ([Year]). It provides evidence of remediation progress to NACSA and the Board.*

**Previous Assessment Reference:** [Document ID, Version, Date]

| Previous Risk ID | Previous Finding Description | Previous Rating | Treatment Action Assigned | Target Date | Current Status | Closure Date | Verification Method | Current Assessment Reference |
|---|---|---|---|---|---|---|---|---|
| [Previous R-001] | [Finding description] | [Rating] | [Treatment action] | [Date] | [Closed / In Progress / Overdue / Carried Forward] | [Date / —] | [Rescan / Review / etc.] | [Current R-XXX or "Closed"] |
| [Previous R-002] | [Finding description] | [Rating] | [Treatment action] | [Date] | [Status] | [Date / —] | [Method] | [Ref / "Closed"] |
| [Previous R-XXX] | [Finding description] | [Rating] | [Treatment action] | [Date] | [Status] | [Date / —] | [Method] | [Ref / "Closed"] |

**Previous Assessment Closure Summary:**

| Status | Count | Percentage |
|---|---|---|
| Closed / Fully Remediated | [n] | [%] |
| In Progress | [n] | [%] |
| Overdue | [n] | [%] |
| Carried Forward to Current Register | [n] | [%] |
| **Total Previous Findings** | **[n]** | **100%** |

---

### Appendix J — Glossary of Terms

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — the primary legislation governing cyber security obligations for NCII entities in Malaysia |
| **APT** | Advanced Persistent Threat — a sophisticated, targeted, and prolonged cyber attack, typically attributed to nation-state or state-sponsored actors |
| **Asset** | Anything that has value to the organization, including hardware, software, data, processes, people, and third-party services |
| **Attack Surface** | The sum of all entry points through which an attacker could gain unauthorized access to a system |
| **BIA** | Business Impact Analysis — an assessment of the potential effects of disruption to business processes and systems |
| **CIA** | Confidentiality, Integrity, Availability — the three core dimensions of information security |
| **CMDB** | Configuration Management Database — a repository of configuration items and their relationships within the IT environment |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed database of known information security vulnerabilities |
| **CVSS** | Common Vulnerability Scoring System — a standardized framework for rating the severity of security vulnerabilities |
| **DDoS** | Distributed Denial of Service — an attack that overwhelms a system or network with traffic from multiple sources to disrupt availability |
| **EDR** | Endpoint Detection and Response — security software that monitors endpoints for threat indicators and enables response actions |
| **GRC** | Governance, Risk and Compliance — frameworks and tools for managing organizational governance, risk, and compliance obligations |
| **ICS** | Industrial Control Systems — systems used to control industrial processes, including SCADA, DCS, and PLC systems |
| **Inherent Risk** | The level of risk in the absence of any controls |
| **IOC** | Indicator of Compromise — forensic artefacts that indicate a system may have been breached |
| **MITRE ATT&CK** | A globally accessible knowledge base of adversary tactics, techniques, and procedures based on real-world observations |
| **NACSA** | National Cyber Security Agency — the lead government agency for cyber security in Malaysia |
| **NCII** | National Critical Information Infrastructure — computer or computer systems designated as critical under the Cyber Security Act 2024 |
| **OT** | Operational Technology — hardware and software that monitors or controls physical devices, processes, and infrastructure |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data |
| **Residual Risk** | The level of risk remaining after existing controls have been applied |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **SCADA** | Supervisory Control and Data Acquisition — an ICS architecture used to monitor and control distributed industrial processes |
| **SIEM** | Security Information and Event Management — a platform that aggregates and analyses log and event data from across the IT environment |
| **SOC** | Security Operations Centre — a team responsible for monitoring, detecting, and responding to cyber security incidents |
| **TTP** | Tactics, Techniques, and Procedures — the behaviour patterns used by threat actors |
| **Vulnerability** | A weakness in an asset or control that could be exploited by a threat to cause harm |

---

### Appendix K — NACSA Submission Checklist

*This appendix provides a checklist to confirm that the report meets NACSA's requirements for annual risk assessment submission under Section 21 of the Cyber Security Act 2024. Authors should complete this checklist prior to submitting the report to NACSA.*

| Requirement | Requirement Source | Included in Report | Section Reference | Notes |
|---|---|---|---|---|
| Assessment conducted by an approved assessor or competent internal team | Act 854 s21; NACSA guidance | [Yes / No] | Section 4.1 | [Assessor credentials in Section 4.1] |
| Assessment covers all designated NCII systems | Act 854 s21 | [Yes / No / Partial] | Section 2.2 | [Any exclusions documented in Section 2.3] |
| Assessment methodology documented | NACSA CSOP | [Yes / No] | Section 4.4 | |
| Asset inventory included | NACSA CSOP; ISO 27005 | [Yes / No] | Section 5; Appendix B | |
| Threat landscape analysis included | NACSA CSOP; ISO 27005 | [Yes / No] | Section 6 | |
| Vulnerability assessment results included | NACSA CSOP; ISO 27005 | [Yes / No] | Section 7; Appendix C | |
| Risk register with ratings included | Act 854 s21; NACSA CSOP | [Yes / No] | Section 8 | |
| Treatment plan included | Act 854 s21; NACSA CSOP | [Yes / No] | Section 9 | |
| Report signed off by authorized approver | Act 854 s21 | [Yes / No] | Section 11.3 | |
| Report submitted within prescribed timeframe | Act 854 s21 | [Yes / No] | Section 11.4 | [NACSA submission date recorded] |
| Previous assessment findings and closure status included | NACSA guidance | [Yes / No] | Appendix I | |
| Report classification and handling instructions present | Organization policy | [Yes / No] | Cover page; Section 1 | |

---

*End of Document*

---

**Document Control Footer**

| Field | Detail |
|---|---|
| Document Title | Cyber Security Risk Assessment Report |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Organization | [Organization Name] |
| Report Date | [Report Date] |
| Page Count | [X] pages |
| Regulatory Reference | Cyber Security Act 2024 (Act 854), Section 21 |

*This document is subject to version control. Verify you are reading the current approved version before relying on its contents. The current approved version is held by [Risk Manager / Document Controller] and registered in [Document Management System Name].*