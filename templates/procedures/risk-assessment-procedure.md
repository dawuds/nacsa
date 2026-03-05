# Cyber Security Risk Assessment Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Risk Manager / Chief Information Security Officer (CISO) |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Department** | [Department Name] |
| **Status** | [Draft / Under Review / Approved] |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorized personnel of [Organization Name] and must not be disclosed to any external party without prior written approval from the document owner or an authorized representative. Unauthorized disclosure may constitute a breach of the Cyber Security Act 2024 (Act 854) and applicable data protection obligations.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and Obligations](#2-regulatory-framework-and-obligations)
3. [Definitions and Acronyms](#3-definitions-and-acronyms)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Risk Assessment Overview](#5-risk-assessment-overview)
6. [Asset Identification and Valuation](#6-asset-identification-and-valuation)
7. [Threat Identification and Categorisation](#7-threat-identification-and-categorisation)
8. [Vulnerability Assessment](#8-vulnerability-assessment)
9. [Risk Calculation Methodology](#9-risk-calculation-methodology)
10. [Risk Treatment Plan Development](#10-risk-treatment-plan-development)
11. [Report Submission to NACSA / Sector Lead](#11-report-submission-to-nacsa--sector-lead)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary objective of this procedure and why it exists within the organization's security governance framework.*

This procedure establishes the structured, repeatable methodology by which [Organization Name] conducts mandatory cyber security risk assessments for its National Critical Information Infrastructure (NCII) systems and related assets. It is designed to ensure full compliance with **Section 21 of the Cyber Security Act 2024 (Act 854)**, which mandates that NCII entities conduct periodic risk assessments and implement risk treatment measures commensurate with identified threats and vulnerabilities.

The procedure provides guidance to all personnel involved in risk assessment activities, ensuring that assessments are conducted consistently, documented comprehensively, and communicated to the National Cyber Security Agency (NACSA) and the relevant Sector Lead Agency in the prescribed format and timeline.

### 1.2 Scope

*Define the boundaries of this procedure — which systems, departments, data types, and locations it applies to.*

This procedure applies to:

- All **NCII systems** operated, owned, or managed by [Organization Name] as designated under Act 854
- All **information assets** that support, interface with, or are integral to NCII systems, including hardware, software, data repositories, networks, and third-party integrations
- All **organizational units**, subsidiaries, branches, and outsourced service providers whose systems or services materially support the delivery of NCII functions
- All **environments** including on-premises data centres, hybrid cloud deployments, and co-location facilities operated on behalf of [Organization Name]
- All **personnel** with responsibilities for the design, operation, maintenance, or oversight of NCII systems

### 1.3 Exclusions

*List any explicit exclusions from this procedure's scope to prevent ambiguity during audits.*

The following are explicitly excluded from the scope of this procedure unless otherwise determined by the CISO:

- Non-NCII systems that do not interact with designated critical infrastructure
- Personal devices (BYOD) unless connected to NCII network segments
- Archived systems that have been formally decommissioned and are no longer processing operational data
- [Any other exclusions specific to [Organization Name]]

### 1.4 Objectives

The specific objectives of this procedure are to:

1. Identify and document all assets that constitute or support the organization's NCII systems
2. Systematically identify and categorise threats and vulnerabilities that may affect asset confidentiality, integrity, and availability
3. Calculate residual risk using a consistent, auditable methodology
4. Develop structured risk treatment plans with clear ownership and timelines
5. Submit risk assessment findings to NACSA and the relevant Sector Lead Agency in accordance with regulatory requirements
6. Maintain an ongoing, living risk register that is updated following material changes to the NCII environment

---

## 2. Regulatory Framework and Obligations

### 2.1 Primary Legislative Basis

*Summarize the legal obligations that necessitate this procedure, citing specific sections.*

[Organization Name] has been designated as an NCII entity under the **Cyber Security Act 2024 (Act 854)**. The following legislative provisions directly mandate the activities described in this procedure:

| Reference | Provision | Obligation |
|---|---|---|
| **Act 854, Section 21** | Risk Assessment of NCII | NCII entities must conduct cyber security risk assessments of their NCII systems at prescribed intervals and in the prescribed manner |
| **Act 854, Section 21(1)** | Mandatory Assessment | Obligation to carry out a risk assessment within the specified timeframe from designation |
| **Act 854, Section 21(2)** | Periodic Reassessment | Obligation to conduct risk assessments at least once every [prescribed period] or upon occurrence of a significant cyber security incident or material change to the NCII system |
| **Act 854, Section 21(3)** | Submission Requirement | Obligation to submit the risk assessment report to NACSA and the Sector Lead Agency within the prescribed period |
| **Act 854, Section 26** | Cyber Security Audit | Risk assessment outputs may be referenced and reviewed during mandatory cyber security audits |

### 2.2 Supporting Regulatory Instruments

*List any subsidiary legislation, guidelines, or circulars issued by NACSA or Sector Lead Agencies that supplement the primary Act.*

| Instrument | Issuing Authority | Description |
|---|---|---|
| [NACSA Guideline/Circular Reference] | NACSA | [Description of guideline content] |
| [Sector Lead Agency Circular Reference] | [Sector Lead Agency Name] | [Description of sector-specific requirements] |
| [Other Applicable Standard] | [Issuing Body] | [Description] |

### 2.3 Alignment with Other Frameworks

*Describe how this procedure aligns with or complements other frameworks adopted by [Organization Name].*

This procedure has been developed with reference to the following internationally recognised standards and frameworks. Where requirements under Act 854 are more prescriptive, the Act takes precedence:

- **ISO/IEC 27005:2022** — Information Security Risk Management
- **NIST SP 800-30 Rev. 1** — Guide for Conducting Risk Assessments
- **NIST Cybersecurity Framework (CSF) 2.0** — Identify (ID.RA) Risk Assessment function
- **BNM Risk Management in Technology (RMiT) Policy Document** — [If applicable to sector]
- **COBIT 2019** — Risk Management domain
- [Any other frameworks adopted by [Organization Name]]

---

## 3. Definitions and Acronyms

### 3.1 Definitions

*Provide precise definitions for all technical and regulatory terms used in this procedure.*

| Term | Definition |
|---|---|
| **Asset** | Any item of value to [Organization Name] that is required to deliver NCII functions, including information, hardware, software, personnel, and physical facilities |
| **Asset Owner** | The individual or team responsible for the management, protection, and maintenance of a specific asset |
| **Confidentiality** | The property that information is not made available or disclosed to unauthorized individuals, entities, or processes |
| **Control** | A measure that modifies risk, including any policy, procedure, practice, or technical mechanism designed to mitigate identified threats or vulnerabilities |
| **Cyber Security Risk** | The potential for loss or disruption to NCII operations arising from threats exploiting vulnerabilities in information assets |
| **Impact** | The consequence or effect on [Organization Name] and/or national critical services if a risk event were to materialize |
| **Inherent Risk** | The level of risk existing before any controls or risk treatment measures are applied |
| **Integrity** | The property of safeguarding the accuracy and completeness of information assets |
| **Likelihood** | The probability or frequency with which a threat is expected to exploit a vulnerability and result in an adverse event |
| **NCII System** | A computer, computer system, or network designated by NACSA as forming part of the National Critical Information Infrastructure |
| **Residual Risk** | The level of risk remaining after existing controls have been applied |
| **Risk Appetite** | The aggregate level of risk [Organization Name] is willing to accept in pursuit of its strategic objectives, as approved by the Board |
| **Risk Owner** | The individual accountable for ensuring that risk treatment actions are implemented and monitored for an identified risk |
| **Risk Register** | The documented repository of all identified risks, their assessments, treatment plans, and current status |
| **Threat** | Any circumstance or event with the potential to adversely impact organizational assets through unauthorized access, destruction, disclosure, modification of information, or denial of service |
| **Threat Actor** | An entity, person, or group that intentionally or unintentionally acts to exploit vulnerabilities in NCII systems |
| **Vulnerability** | A weakness in an asset or a control that could be exploited by one or more threats |

### 3.2 Acronyms

| Acronym | Expansion |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CIS | Center for Internet Security |
| CVE | Common Vulnerabilities and Exposures |
| CVSS | Common Vulnerability Scoring System |
| GRC | Governance, Risk, and Compliance |
| ICT | Information and Communications Technology |
| ISO/IEC | International Organization for Standardization / International Electrotechnical Commission |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| NIST | National Institute of Standards and Technology |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| RMO | Risk Management Officer |
| SLA | Service Level Agreement |
| SME | Subject Matter Expert |
| SOC | Security Operations Centre |
| VA/PT | Vulnerability Assessment and Penetration Testing |

---

## 4. Roles and Responsibilities

### 4.1 RACI Matrix

*The following RACI matrix defines the roles and responsibilities of all parties involved in the cyber security risk assessment process. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Board / Audit Committee | CISO | Risk Manager | Asset Owners | IT / Security Team | Internal Audit | Legal & Compliance | NACSA / Sector Lead |
|---|---|---|---|---|---|---|---|---|
| Approve risk assessment methodology | A | R | C | I | I | C | C | I |
| Initiate risk assessment cycle | I | A | R | I | I | I | I | I |
| Asset identification and inventory | I | A | C | R | C | I | I | I |
| Asset valuation | I | A | C | R | C | I | C | I |
| Threat identification | I | A | R | C | R | C | I | C |
| Vulnerability assessment | I | A | C | C | R | C | I | I |
| Risk calculation and scoring | I | A | R | C | C | C | I | I |
| Risk treatment plan development | I | A | R | A | C | C | C | I |
| Risk treatment implementation | I | A | C | R | R | I | I | I |
| Review and approve risk report | A | R | C | I | I | C | C | I |
| Submit report to NACSA / Sector Lead | I | A | R | I | I | I | C | R |
| Monitor risk treatment progress | I | A | R | R | C | C | I | I |
| Annual procedure review | A | R | R | C | C | C | C | I |

### 4.2 Role Descriptions

*Provide a narrative description of each role's responsibilities in the context of this procedure.*

**Board of Directors / Audit Committee**

The Board is ultimately accountable for the organization's overall risk posture. The Audit Committee is responsible for overseeing the effectiveness of the risk management framework, approving risk appetite statements, and receiving high-level risk assessment summaries. The Board approves any material changes to the risk assessment methodology.

**Chief Information Security Officer (CISO)**

The CISO has overall accountability for the execution of this procedure. The CISO ensures that risk assessments are conducted in accordance with the methodology defined herein, within prescribed timelines, and that findings are appropriately escalated and communicated. The CISO is the primary authorized signatory for risk assessment reports submitted to NACSA.

**Risk Manager / Risk Management Officer (RMO)**

The Risk Manager is responsible for coordinating and facilitating the end-to-end risk assessment process. This includes scheduling assessments, facilitating workshops with asset owners and the IT security team, maintaining the risk register, and preparing the formal risk assessment report for review and submission.

**Asset Owners**

Asset owners are responsible for providing accurate information about the assets under their stewardship, including their function, data classification, dependencies, and operational significance. Asset owners participate in asset valuation exercises and are accountable for implementing approved risk treatment actions within their areas of responsibility.

**IT / Security Team**

The IT and Security Team are responsible for conducting or coordinating technical assessments, including vulnerability scans and penetration testing. They provide subject matter expertise on system configurations, network architecture, technical controls, and emerging threat intelligence. The Security Operations Centre (SOC), where applicable, provides threat intelligence inputs.

**Internal Audit**

Internal Audit provides independent assurance that the risk assessment process has been conducted in accordance with this procedure and that findings are appropriately addressed. Internal Audit may review risk assessment reports and treatment plan progress as part of the annual audit plan.

**Legal & Compliance**

Legal and Compliance are consulted to ensure that the risk assessment process and submitted reports meet all applicable regulatory requirements under Act 854 and any sector-specific regulations. They review the report prior to submission to NACSA.

---

## 5. Risk Assessment Overview

### 5.1 Assessment Approach

*Describe the overall methodology philosophy — qualitative, quantitative, or hybrid — and justify the choice.*

[Organization Name] adopts a **semi-quantitative risk assessment approach**, combining structured qualitative likelihood and impact ratings with numerical scoring to produce consistent, comparable, and auditable risk scores. This approach aligns with **ISO/IEC 27005:2022** and **NIST SP 800-30 Rev. 1**, and fulfils the requirements prescribed under **Act 854, Section 21**.

The assessment follows a sequential process:

```
Asset Identification → Threat Identification → Vulnerability Assessment
         ↓                                               ↓
   Asset Valuation         ←←←←←←←←←←←←←         Control Assessment
         ↓
   Risk Calculation → Risk Evaluation → Risk Treatment Planning → Reporting
```

### 5.2 Assessment Triggers

*Specify when a risk assessment must be conducted, both periodically and event-driven.*

A cyber security risk assessment of NCII systems must be conducted under the following circumstances:

| Trigger | Description | Required Response Time |
|---|---|---|
| **Periodic (Mandatory)** | Annual scheduled assessment of all NCII systems | As per NACSA prescription / annually |
| **Post-Incident** | Following a cyber security incident that materially affected an NCII system | Within [X] days of incident closure |
| **Material Change** | Significant change to NCII system architecture, technology, or operational context | Prior to production deployment of changes |
| **New Asset** | Addition of a new system or asset to the NCII scope | Within [X] days of designation |
| **Regulatory Direction** | NACSA or Sector Lead Agency directs an out-of-cycle assessment | Within timeframe specified by NACSA |
| **Third-Party Change** | Material change to a third-party service provider integral to NCII function | Within [X] days of change notification |

### 5.3 Assessment Team Composition

*Define the minimum team composition required to conduct a valid risk assessment.*

Each risk assessment must be conducted by a team with the following minimum composition:

| Role | Minimum Number | Required Competency |
|---|---|---|
| Assessment Lead | 1 | Certified risk practitioner (e.g., CISA, CRISC, ISO 27005 lead implementer) |
| Technical Analyst | 1–2 | Cyber security technical expertise, familiar with NCII system architecture |
| Asset Owner Representative | 1 per NCII system | Operational knowledge of system and its criticality |
| CISO or delegate | 1 | Oversight and authorization |

External consultants may supplement the internal team but must operate under a formal engagement agreement with appropriate confidentiality obligations.

### 5.4 Assessment Timeline

*Define the standard timeline for completing a full risk assessment cycle.*

| Phase | Activity | Target Duration |
|---|---|---|
| Phase 1 | Scoping and preparation | [X] weeks |
| Phase 2 | Asset identification and valuation | [X] weeks |
| Phase 3 | Threat and vulnerability identification | [X] weeks |
| Phase 4 | Risk calculation and analysis | [X] weeks |
| Phase 5 | Risk treatment planning | [X] weeks |
| Phase 6 | Report preparation and internal review | [X] weeks |
| Phase 7 | CISO approval and submission | [X] weeks |
| **Total** | **Full assessment cycle** | **[Total Duration]** |

---

## 6. Asset Identification and Valuation

### 6.1 Purpose of Asset Identification

*Explain why asset identification is the foundational step of the risk assessment process.*

*A comprehensive and accurate asset inventory is the foundation of an effective risk assessment. Without a clear understanding of what assets exist, their function, and their value, it is impossible to systematically identify threats, assess vulnerabilities, or calculate meaningful risk scores. This section defines how [Organization Name] identifies, classifies, and values all assets within the NCII risk assessment scope.*

### 6.2 Asset Categories

*Define the taxonomy of asset types recognised by [Organization Name] for risk assessment purposes.*

Assets within scope are classified into the following categories:

| Asset Category | Sub-Category | Examples |
|---|---|---|
| **Information / Data** | Structured Data | Customer records, transaction data, configuration data |
| | Unstructured Data | Emails, reports, audit logs |
| | Classified / Sensitive | Personal data (PDPA), classified government data |
| **Software** | Operating Systems | Windows Server, Linux distributions |
| | Applications | Core banking systems, SCADA, enterprise applications |
| | Middleware | Message brokers, API gateways, integration platforms |
| | Security Tools | SIEM, EDR, firewall platforms |
| **Hardware** | Servers | Physical and virtual servers |
| | Network Equipment | Routers, switches, firewalls, load balancers |
| | End-User Devices | Workstations, laptops (within NCII scope) |
| | Operational Technology | ICS/SCADA hardware, PLCs (if applicable) |
| **Services** | Internal Services | DNS, Active Directory, authentication services |
| | External / Cloud | Cloud hosting, SaaS applications, CDN |
| | Third-Party Managed | Managed security services, outsourced ICT |
| **Facilities** | Physical Infrastructure | Data centres, server rooms |
| | Utilities | Power supply, cooling systems |
| **Personnel** | Privileged Users | System administrators, DBA, security personnel |
| | Key Personnel | CISO, IT Director, operations leads |

### 6.3 Asset Identification Process

*Describe the steps taken to compile and verify the asset inventory.*

The asset identification process shall include the following steps:

1. **Inventory Review** — Review existing asset management databases, configuration management databases (CMDB), and network topology diagrams to compile an initial asset list
2. **Stakeholder Interviews** — Conduct structured interviews with asset owners and system administrators to identify assets not captured in existing inventories
3. **Network Discovery** — Conduct or review results of automated network discovery scans to identify undocumented assets connected to NCII network segments
4. **Third-Party Review** — Review contracts and service schedules with third-party providers to identify assets managed externally that fall within scope
5. **Verification** — Cross-reference identified assets against previous assessment inventories to identify new, changed, or decommissioned assets

### 6.4 Asset Inventory Register

*Maintain the following asset inventory table for all assets within scope. A separate, more detailed asset register may be maintained as Appendix A.*

| Asset ID | Asset Name | Asset Category | Description | Asset Owner | Location / Environment | Data Classification | System / NCII Function Supported | Criticality (High / Medium / Low) | Last Updated |
|---|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [Category] | [Brief Description] | [Owner Name / Team] | [Location] | [Public / Internal / Confidential / Restricted] | [NCII System Name] | [High / Medium / Low] | [Date] |
| [ASSET-002] | | | | | | | | | |
| [ASSET-003] | | | | | | | | | |

*Add rows as required. Maintain the full asset register in Appendix A — Asset Inventory.*

### 6.5 Asset Valuation Methodology

*Define the criteria by which asset value is determined, reflecting the three pillars of information security.*

Asset value is determined based on the potential impact to [Organization Name] and to national critical services if the asset's **confidentiality**, **integrity**, or **availability** were compromised. Asset valuation considers both quantitative and qualitative factors.

#### 6.5.1 Valuation Criteria

| Criterion | Description |
|---|---|
| **Operational Criticality** | Degree to which the asset is essential to the continuous delivery of NCII functions |
| **Regulatory / Legal Value** | Extent to which the asset holds regulated data (personal data, financial data) or must meet specific compliance requirements |
| **Financial Value** | Estimated replacement cost, or financial loss attributable to the asset if compromised or unavailable |
| **Reputational Value** | Potential reputational damage or loss of public trust resulting from asset compromise |
| **Recovery Cost** | Estimated cost to detect, respond to, and recover from an incident involving this asset |

#### 6.5.2 Asset Value Rating Scale

| Rating | Score | Description |
|---|---|---|
| **Very High** | 5 | Loss or compromise would cause catastrophic disruption to national critical services or irreversible reputational harm |
| **High** | 4 | Loss or compromise would cause significant operational disruption, substantial financial loss, or major regulatory breach |
| **Medium** | 3 | Loss or compromise would cause moderate disruption with recoverable consequences within acceptable SLA thresholds |
| **Low** | 2 | Loss or compromise would cause minor inconvenience with minimal operational or financial impact |
| **Very Low** | 1 | Loss or compromise would have negligible impact on operations or service delivery |

#### 6.5.3 Asset Valuation Summary

| Asset ID | Asset Name | Confidentiality Value | Integrity Value | Availability Value | Overall Asset Value | Valuation Rationale |
|---|---|---|---|---|---|---|
| [ASSET-001] | [Asset Name] | [1–5] | [1–5] | [1–5] | [Calculated] | [Brief justification] |
| [ASSET-002] | | | | | | |
| [ASSET-003] | | | | | | |

*Overall Asset Value = Maximum of (Confidentiality, Integrity, Availability) ratings, or as defined by [Organization Name]'s approved formula.*

---

## 7. Threat Identification and Categorisation

### 7.1 Purpose of Threat Identification

*Explain why comprehensive threat identification is essential before risk can be meaningfully calculated.*

*Threat identification ensures that all plausible adverse events that could exploit vulnerabilities in [Organization Name]'s NCII assets are systematically considered. This prevents gaps in risk coverage and ensures that risk treatment plans address the actual threat landscape facing the organization and the broader NCII sector.*

### 7.2 Threat Intelligence Sources

*Define the sources of threat intelligence used to populate the threat register.*

The threat identification process draws on the following sources of threat intelligence:

| Source | Description | Update Frequency |
|---|---|---|
| **NACSA Threat Advisories** | Threat alerts and advisories issued by NACSA specific to the Malaysian NCII environment | As published |
| **Sector Lead Agency Bulletins** | Threat intelligence circulated by [Sector Lead Agency Name] | As published |
| **CISA Known Exploited Vulnerabilities (KEV)** | US CISA catalogue of actively exploited vulnerabilities | Weekly |
| **MITRE ATT&CK Framework** | Taxonomy of adversary tactics, techniques, and procedures (TTPs) | Version updates |
| **Internal SOC Intelligence** | Threat data from [Organization Name]'s own SOC, including observed TTPs | Continuous |
| **Industry ISACs / ISAOs** | Sector-specific threat intelligence sharing communities | As published |
| **Vendor Security Advisories** | Security bulletins from technology vendors used by [Organization Name] | As published |
| **Open Source Threat Intelligence (OSINT)** | Curated OSINT feeds relevant to the sector | [Frequency] |
| **Previous Assessment Findings** | Historical threats identified in prior risk assessments | Each assessment cycle |

### 7.3 Threat Taxonomy

*Define the classification scheme used to organise identified threats.*

Threats are classified according to the following taxonomy:

| Threat Category | Sub-Category | Example Threats |
|---|---|---|
| **Deliberate — External** | Cyber Criminal | Ransomware, phishing, BEC fraud, data exfiltration |
| | Nation-State / APT | Espionage, sabotage, supply chain compromise |
| | Hacktivism | Website defacement, DDoS, data leaks |
| | Opportunistic Attacker | Automated exploitation of known vulnerabilities |
| **Deliberate — Internal** | Malicious Insider | Unauthorized data access, sabotage, intellectual property theft |
| | Privilege Abuse | Unauthorized use of administrative access |
| **Accidental** | Human Error | Misconfiguration, accidental deletion, inadvertent data disclosure |
| | Process Failure | Failure to apply patches, inadequate access provisioning |
| **Environmental** | Natural Disaster | Flood, earthquake, fire affecting data centre |
| | Infrastructure Failure | Power outage, cooling failure, hardware failure |
| **Third-Party / Supply Chain** | Vendor Compromise | Compromise of a supplier with access to NCII systems |
| | Software Supply Chain | Malicious code inserted into commercial or open-source software |

### 7.4 Threat Identification Register

*Document all threats identified during the assessment in the following register.*

| Threat ID | Threat Description | Threat Category | Threat Actor / Source | Target Asset(s) | MITRE ATT&CK Tactic(s) | Threat Relevance (High / Medium / Low) | Intelligence Source | Notes |
|---|---|---|---|---|---|---|---|---|
| [THR-001] | [Threat Description] | [Category] | [Actor / Source] | [Asset ID(s)] | [Tactic] | [H / M / L] | [Source] | [Notes] |
| [THR-002] | | | | | | | | |
| [THR-003] | | | | | | | | |

### 7.5 Threat Likelihood Assessment

*Define how the likelihood of each threat materialising is assessed.*

Threat likelihood is assessed based on the following factors:

- **Threat actor capability and motivation** — Whether the threat actor has the technical ability and motive to target [Organization Name]
- **Historical frequency** — How often this threat has been observed in the sector or against similar organizations
- **Environmental factors** — Geopolitical context, industry targeting patterns, and known campaigns active at the time of assessment
- **Existing preventive controls** — The effectiveness of controls already in place that may deter or prevent the threat from materialising

| Likelihood Rating | Score | Description |
|---|---|---|
| **Almost Certain** | 5 | Expected to occur in most circumstances; observed frequently in the sector |
| **Likely** | 4 | Will probably occur in most circumstances; has occurred in comparable organizations |
| **Possible** | 3 | Might occur at some time; has occurred in the sector |
| **Unlikely** | 2 | Could occur at some time; limited evidence of occurrence |
| **Rare** | 1 | May occur only in exceptional circumstances; little or no historical evidence |

---

## 8. Vulnerability Assessment

### 8.1 Purpose of Vulnerability Assessment

*Describe the objective of the vulnerability assessment phase and its relationship to threat and risk analysis.*

*The vulnerability assessment identifies weaknesses in [Organization Name]'s NCII assets and controls that could be exploited by identified threats. Vulnerabilities may exist in technology, processes, or human behaviours. This phase provides the link between identified threats and the actual risk they pose, by determining whether a credible path exists from threat to impact.*

### 8.2 Vulnerability Assessment Methods

*Describe the range of techniques used to identify vulnerabilities.*

[Organization Name] employs a combination of the following vulnerability assessment methods:

| Method | Description | Responsible Party | Frequency |
|---|---|---|---|
| **Automated Vulnerability Scanning** | Use of approved scanning tools to identify known technical vulnerabilities in systems and applications | IT / Security Team | [Quarterly / As required] |
| **Penetration Testing** | Simulated attacks conducted by qualified professionals to identify exploitable vulnerabilities | [Internal Team / External Vendor] | [Annual / Biennial] |
| **Configuration Review** | Assessment of system and network device configurations against security baselines (e.g., CIS Benchmarks) | IT / Security Team | [Annual] |
| **Application Security Review** | Static and dynamic analysis of custom-developed applications for security vulnerabilities | [Development Team / External Vendor] | [Per release / Annual] |
| **Physical Security Review** | Assessment of physical access controls, CCTV, environmental controls at NCII facilities | [Facilities / Security Team] | [Annual] |
| **Policy and Process Review** | Assessment of procedural controls, reviewing policies for completeness and effectiveness | Risk Manager | [Annual] |
| **Third-Party Assessment** | Review of security posture of third parties with access to NCII systems | Risk Manager / Procurement | [Annual / On engagement] |
| **Social Engineering Testing** | Phishing simulations and social engineering exercises to assess human-layer vulnerabilities | [HR / Security Team] | [Annual] |

### 8.3 Vulnerability Severity Rating

*Define the severity classification used to rate identified vulnerabilities.*

Technical vulnerabilities identified through automated scanning shall be rated using the **Common Vulnerability Scoring System (CVSS) v3.1** base score. All vulnerabilities shall additionally be assessed for **exploitability** and **exposure** in the context of [Organization Name]'s specific environment.

| Severity | CVSS Score Range | Internal Rating | Description |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Critical | Immediate exploitation likely; remotely exploitable without authentication |
| **High** | 7.0 – 8.9 | High | Significant risk; exploitable with minimal conditions |
| **Medium** | 4.0 – 6.9 | Medium | Moderate risk; exploitation requires specific conditions |
| **Low** | 0.1 – 3.9 | Low | Limited risk; exploitation requires significant prerequisites |
| **Informational** | 0.0 | Informational | No direct risk; noted for awareness |

### 8.4 Existing Control Effectiveness Assessment

*Before calculating residual risk, the effectiveness of existing controls must be assessed.*

For each identified vulnerability, the effectiveness of controls currently in place to mitigate it shall be assessed as follows:

| Control Effectiveness | Rating | Description |
|---|---|---|
| **Highly Effective** | 1 | Control consistently prevents exploitation; fully implemented and monitored |
| **Mostly Effective** | 2 | Control significantly reduces likelihood or impact; minor gaps exist |
| **Partially Effective** | 3 | Control provides some mitigation; notable gaps or inconsistencies in implementation |
| **Minimally Effective** | 4 | Control exists but provides limited mitigation; significant implementation gaps |
| **Ineffective / Not Present** | 5 | No relevant control exists, or existing control is demonstrably ineffective |

### 8.5 Vulnerability Register

*Document all identified vulnerabilities in the following register.*

| Vuln ID | Vulnerability Description | CVE / Reference | Affected Asset(s) | Vulnerability Category | CVSS Score | Internal Severity | Existing Control(s) | Control Effectiveness | Discovery Method | Discovery Date | Remediation Owner | Target Remediation Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [VUL-001] | [Description] | [CVE-XXXX-XXXX] | [Asset ID(s)] | [Technical / Process / Physical / Human] | [Score] | [Critical / High / Medium / Low] | [Control Description] | [1–5] | [Method] | [Date] | [Owner] | [Date] | [Open / In Progress / Closed] |
| [VUL-002] | | | | | | | | | | | | | |
| [VUL-003] | | | | | | | | | | | | | |

---

## 9. Risk Calculation Methodology

### 9.1 Risk Calculation Formula

*Define the formula used to calculate risk scores, ensuring it is transparent and auditable.*

[Organization Name] calculates risk using the following formula:

> **Risk Score = Likelihood × Impact**

Where:

- **Likelihood** reflects the probability of a threat successfully exploiting a vulnerability, taking into account existing controls and threat actor capability
- **Impact** reflects the consequence to [Organization Name] and NCII service delivery if the risk event occurs, taking into account asset value

### 9.2 Likelihood Score

*Define how the adjusted likelihood score is derived.*

The adjusted likelihood score for a specific risk scenario (threat × vulnerability combination) is determined based on:

1. The **inherent threat likelihood** score (Section 7.5)
2. The **control effectiveness** rating applicable to the vulnerability (Section 8.4)

**Adjusted Likelihood = Inherent Likelihood − Control Effectiveness Adjustment**

| Control Effectiveness Rating | Likelihood Adjustment |
|---|---|
| Highly Effective (1) | Reduce inherent likelihood by 2 |
| Mostly Effective (2) | Reduce inherent likelihood by 1 |
| Partially Effective (3) | No adjustment |
| Minimally Effective (4) | Increase inherent likelihood by 0 |
| Ineffective / Not Present (5) | Increase inherent likelihood by 1 |

*Minimum adjusted likelihood = 1. Maximum adjusted likelihood = 5.*

### 9.3 Impact Score

*Define how the impact score is determined for each risk scenario.*

The impact score is determined by assessing the potential consequence of the risk scenario across the following dimensions:

| Impact Dimension | Description | Weight |
|---|---|---|
| **Operational Impact** | Degree of disruption to NCII service delivery | [Weight %] |
| **Financial Impact** | Estimated direct and indirect financial loss | [Weight %] |
| **Regulatory / Legal Impact** | Severity of regulatory sanctions, fines, or legal liability | [Weight %] |
| **Reputational Impact** | Extent of reputational damage or loss of public confidence | [Weight %] |
| **National Security Impact** | Potential effect on national critical services or public safety | [Weight %] |

| Impact Rating | Score | Operational | Financial | Regulatory | Reputational | National Security |
|---|---|---|---|---|---|---|
| **Catastrophic** | 5 | Complete disruption of NCII services; recovery > [X] days | Loss > RM [X] million | Criminal prosecution / license revocation | National media coverage; permanent damage | Significant threat to national services |
| **Major** | 4 | Significant disruption; recovery [X]–[X] days | Loss RM [X]–[X] million | Significant regulatory sanctions | Major media coverage; sustained reputational harm | Disruption to national services |
| **Moderate** | 3 | Partial disruption; recovery [X]–[X] hours | Loss RM [X]–[X] million | Formal regulatory action / warnings | Industry-level reputational impact | Limited effect on national services |
| **Minor** | 2 | Minor disruption; recovery < [X] hours | Loss RM [X]–[X] thousand | Regulatory inquiry / notation | Localised reputational impact | Negligible national service impact |
| **Negligible** | 1 | No material disruption to services | Loss < RM [X] thousand | Minor compliance notation | Minimal external awareness | No national service impact |

### 9.4 Risk Score Matrix

*The following 5×5 risk matrix is used to determine risk ratings based on the combined likelihood and impact scores.*

| **Likelihood \ Impact** | **Negligible (1)** | **Minor (2)** | **Moderate (3)** | **Major (4)** | **Catastrophic (5)** |
|---|---|---|---|---|---|
| **Almost Certain (5)** | 5 — Medium | 10 — High | 15 — Critical | 20 — Critical | 25 — Critical |
| **Likely (4)** | 4 — Low | 8 — Medium | 12 — High | 16 — Critical | 20 — Critical |
| **Possible (3)** | 3 — Low | 6 — Medium | 9 — High | 12 — High | 15 — Critical |
| **Unlikely (2)** | 2 — Low | 4 — Low | 6 — Medium | 8 — Medium | 10 — High |
| **Rare (1)** | 1 — Low | 2 — Low | 3 — Low | 4 — Low | 5 — Medium |

| Risk Rating | Score Range | Required Action |
|---|---|---|
| **Critical** | 15 – 25 | Immediate escalation to CISO and Board; risk treatment mandatory; NACSA notification may be required |
| **High** | 8 – 14 | CISO approval required for risk acceptance; treatment plan mandatory within [X] days |
| **Medium** | 4 – 7 | Risk owner approval sufficient; treatment plan required within [X] days |
| **Low** | 1 – 3 | Risk may be accepted by Risk Manager; monitor during standard review cycle |

### 9.5 Consolidated Risk Register

*The master risk register consolidates all identified risks, their scores, and treatment status.*

| Risk ID | Risk Description | Threat ID | Vuln ID | Asset ID | Likelihood (Adjusted) | Impact | Risk Score | Risk Rating | Risk Owner | Treatment Strategy | Residual Risk Score | Risk Status | Last Updated |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [RISK-001] | [Description] | [THR-XXX] | [VUL-XXX] | [ASSET-XXX] | [1–5] | [1–5] | [Score] | [Critical / High / Medium / Low] | [Owner] | [Treat / Tolerate / Transfer / Terminate] | [Score] | [Open / In Treatment / Closed / Accepted] | [Date] |
| [RISK-002] | | | | | | | | | | | | | |
| [RISK-003] | | | | | | | | | | | | | |

### 9.6 Risk Acceptance Criteria

*Define the conditions under which a risk may be formally accepted without further treatment.*

Risks may only be accepted when the following conditions are met:

| Risk Rating | Acceptance Authority | Required Documentation | Maximum Acceptance Period |
|---|---|---|---|
| **Critical** | Board / Audit Committee (via CISO recommendation) | Written Board resolution; NACSA notification if required | [X] months |
| **High** | CISO | Written CISO acceptance with documented justification | [X] months |
| **Medium** | Risk Manager | Documented rationale in risk register | [X] months |
| **Low** | Risk Owner | Risk register notation | Annual review cycle |

Risk acceptance must be formally reviewed at the next scheduled risk assessment cycle or upon a material change in the risk environment, whichever occurs earlier.

---

## 10. Risk Treatment Plan Development

### 10.1 Risk Treatment Strategies

*Describe the four standard risk treatment options and criteria for selecting each.*

*Risk treatment involves selecting and implementing measures to modify risk to an acceptable level. For each identified risk rated Medium or above, a risk treatment plan must be developed. The following treatment strategies are available, and more than one strategy may be applied to a single risk.*

| Strategy | Description | When to Apply |
|---|---|---|
| **Treat (Mitigate)** | Implement or enhance controls to reduce likelihood and/or impact to an acceptable level | Preferred strategy for High and Critical risks where effective controls exist |
| **Tolerate (Accept)** | Accept the risk without additional treatment, where cost of treatment outweighs benefit or risk is within appetite | Low risks within risk appetite, or where treatment options are limited |
| **Transfer** | Transfer risk to a third party (e.g., cyber insurance, contractual liability clauses, outsourcing) | Where third parties are better positioned to manage the risk |
| **Terminate (Avoid)** | Discontinue the activity or remove the asset that gives rise to the risk | Where risk cannot be reduced to an acceptable level and the activity is not essential |

### 10.2 Control Selection Framework

*Guide treatment plan developers in selecting appropriate controls.*

Controls selected for risk treatment should be assessed against the following criteria:

- **Effectiveness** — Will the control materially reduce likelihood or impact?
- **Feasibility** — Is the control technically and operationally implementable within [Organization Name]'s environment?
- **Cost-Benefit** — Does the cost of implementing the control justify the risk reduction achieved?
- **Regulatory Alignment** — Does the control satisfy applicable requirements under Act 854 and sector regulations?
- **Residual Risk** — What is the expected residual risk rating after the control is implemented?

Controls shall be selected from or aligned with recognized control catalogues, including:

- ISO/IEC 27001:2022 Annex A Controls
- NIST SP 800-53 Rev. 5 Security and Privacy Controls
- CIS Controls v8
- [Organization Name] Internal Control Library

### 10.3 Risk Treatment Plan Template

*Develop a risk treatment plan entry for each risk requiring treatment.*

| Field | Details |
|---|---|
| **Risk ID** | [RISK-XXX] |
| **Risk Description** | [Description] |
| **Current Risk Rating** | [Critical / High / Medium / Low] |
| **Current Risk Score** | [Score] |
| **Treatment Strategy** | [Treat / Transfer / Tolerate / Terminate] |
| **Proposed Control(s)** | [Description of control(s) to be implemented] |
| **Control Type** | [Preventive / Detective / Corrective / Deterrent / Compensating] |
| **Expected Residual Likelihood** | [1–5] |
| **Expected Residual Impact** | [1–5] |
| **Expected Residual Risk Score** | [Score] |
| **Expected Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Risk Owner** | [Name / Role] |
| **Implementation Lead** | [Name / Team] |
| **Target Completion Date** | [Date] |
| **Resources Required** | [Budget / Personnel / Tools] |
| **Dependencies** | [List any dependencies] |
| **Success Criteria / KPI** | [How will successful implementation be measured?] |
| **Interim Mitigating Control** | [Any compensating control active during remediation period] |
| **Status** | [Not Started / In Progress / Completed / Deferred] |
| **Progress Update** | [Latest update from implementation lead] |
| **Last Updated** | [Date] |

### 10.4 Risk Treatment Plan Summary

*Maintain the following summary table of all treatment plans for management reporting and tracking.*

| Risk ID | Risk Description | Risk Rating | Treatment Strategy | Key Control(s) | Risk Owner | Target Date | Expected Residual Rating | Status |
|---|---|---|---|---|---|---|---|---|
| [RISK-001] | [Description] | [Critical / High / Medium / Low] | [Strategy] | [Control Summary] | [Owner] | [Date] | [Rating] | [Status] |
| [RISK-002] | | | | | | | | |
| [RISK-003] | | | | | | | | |

### 10.5 Risk Treatment Monitoring

*Define how risk treatment progress is monitored and escalated.*

Risk treatment progress shall be monitored as follows:

| Risk Rating | Monitoring Frequency | Reporting Mechanism | Escalation Trigger |
|---|---|---|---|
| **Critical** | Monthly | CISO Risk Dashboard; Board Audit Committee report | Overdue treatment; worsening risk indicators |
| **High** | Quarterly | CISO Risk Dashboard; Risk Committee report | Overdue treatment by > [X] days |
| **Medium** | Semi-annually | Risk Manager report | Overdue treatment by > [X] days |
| **Low** | Annually | Risk Register review | Material change in risk environment |

The Risk Manager shall maintain a live Risk Treatment Tracker and report treatment progress to the CISO on a [monthly / quarterly] basis, or on an ad-hoc basis when treatment is significantly delayed or the risk profile changes materially.

---

## 11. Report Submission to NACSA / Sector Lead

### 11.1 Reporting Obligation

*Describe the regulatory obligation for report submission under Act 854.*

**Section 21(3) of the Cyber Security Act 2024 (Act 854)** requires that [Organization Name] submit its completed cyber security risk assessment report to:

1. **NACSA** — The National Cyber Security Agency, as the overarching regulatory authority for NCII cyber security
2. **[Sector Lead Agency Name]** — The designated Sector Lead Agency for [Organization Name]'s sector

Failure to submit the report within the prescribed timeframe may constitute an offence under Act 854 and may result in enforcement action.

### 11.2 Report Content Requirements

*Define the minimum content requirements for the formal risk assessment report submitted to NACSA.*

The formal risk assessment report submitted to NACSA and the Sector Lead Agency shall include, at a minimum, the following elements:

| Section | Content Required |
|---|---|
| **Executive Summary** | High-level summary of assessment scope, key findings, overall risk posture, and critical risks |
| **Organization Profile** | [Organization Name], NCII designation details, NCII systems assessed |
| **Assessment Methodology** | Summary of the risk assessment methodology applied, including scoring approach and frameworks referenced |
| **Asset Overview** | Summary of NCII assets assessed, by category and criticality |
| **Threat Landscape Summary** | Key threats identified, their categories, and overall threat environment assessment |
| **Vulnerability Summary** | Summary of vulnerabilities identified by severity, including critical and high-severity findings |
| **Risk Summary** | Summary of risk ratings across the risk register, including number of Critical, High, Medium, and Low risks |
| **Critical and High Risk Detail** | Detailed description of all Critical and High risks, including likelihood, impact, and treatment plans |
| **Risk Treatment Plan Summary** | Summary of treatment plans, owners, timelines, and expected residual risk ratings |
| **Compliance Status** | Statement of compliance with Act 854 and sector-specific requirements |
| **Declaration** | Signed declaration from the CISO confirming accuracy and completeness of the report |

### 11.3 Report Classification and Handling

*Define how the risk assessment report is classified and must be handled.*

The risk assessment report is classified as **[CONFIDENTIAL / RESTRICTED]** and must be handled in accordance with [Organization Name]'s Information Classification and Handling Policy. Specifically:

- The report must be transmitted to NACSA and the Sector Lead Agency via the **approved secure submission channel** specified by NACSA (e.g., NACSA's secure portal, encrypted email, or official registered mail)
- Physical copies, if produced, must be stored in locked, access-controlled storage
- The report must not be shared with any unauthorized parties, including third-party vendors, without prior written approval from the CISO
- Access to the report within [Organization Name] must be restricted to personnel with a legitimate need to know

### 11.4 Submission Process

*Define the step-by-step process for preparing and submitting the report.*

| Step | Activity | Responsible | Timeline |
|---|---|---|---|
| 1 | Draft risk assessment report based on assessment findings | Risk Manager | [X] weeks after assessment completion |
| 2 | Internal review by CISO and Legal & Compliance | CISO / Legal | [X] days after draft completion |
| 3 | Incorporate review comments and finalise report | Risk Manager | [X] days after review |
| 4 | Obtain CISO signature / formal approval | CISO | [X] days before submission deadline |
| 5 | Submit report via approved NACSA submission channel | Risk Manager | By [prescribed submission deadline] |
| 6 | Submit report to Sector Lead Agency | Risk Manager | By [prescribed submission deadline] |
| 7 | Obtain and retain submission acknowledgement / receipt | Risk Manager | Upon submission confirmation |
| 8 | File submission records in compliance management system | Risk Manager | Within [X] days of submission |

### 11.5 Submission Records

*Maintain submission records for audit and regulatory inspection purposes.*

| Submission ID | Submission Date | Submitted To | Submission Method | Reference / Receipt Number | Submitted By | Report Version | Notes |
|---|---|---|---|---|---|---|---|
| [SUB-001] | [Date] | NACSA | [Method] | [Reference] | [Name] | [Version] | [Notes] |
| [SUB-002] | [Date] | [Sector Lead Agency] | [Method] | [Reference] | [Name] | [Version] | [Notes] |

### 11.6 Post-Submission Actions

*Define what occurs after the report is submitted.*

Following submission of the risk assessment report, [Organization Name] shall:

1. **Monitor for Regulatory Feedback** — Monitor for any feedback, queries, or directions from NACSA or the Sector Lead Agency regarding the submitted report
2. **Respond to Queries** — Respond to any regulatory queries within the timeframe specified by NACSA or the Sector Lead Agency
3. **Implement Directed Actions** — Implement any additional risk treatment actions directed by NACSA or the Sector Lead Agency as a result of their review of the report
4. **Update Risk Register** — Update the risk register to reflect any changes arising from regulatory feedback
5. **Schedule Next Assessment** — Schedule the next periodic risk assessment in accordance with the prescribed cycle

---

## 12. Review and Approval

### 12.1 Procedure Review Schedule

*This procedure shall be reviewed at the following intervals and upon occurrence of specified triggers.*

| Review Trigger | Description | Required Action |
|---|---|---|
| **Annual Review** | Scheduled review of this procedure to ensure continued relevance and regulatory alignment | Full review and update by Risk Manager; CISO approval |
| **Regulatory Change** | Amendment to Act 854, NACSA guidelines, or sector-specific requirements | Review and update within [X] days of regulatory change |
| **Significant Incident** | Major cyber security incident affecting NCII systems | Post-incident review to assess procedure effectiveness |
| **Significant Finding** | NACSA audit or internal audit identifies material gaps in this procedure | Immediate review and remediation |
| **Material Change to NCII** | Significant change to the organization's NCII systems or designation | Review and update as required |

### 12.2 Version History

*Maintain a complete version history of this procedure document.*

| Version | Date | Author | Approved By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | [Approver Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Approver Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Approver Name] | [Description of major revision] |

### 12.3 Approval Sign-Off

*The following individuals have reviewed and approved this procedure.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | _________________ | [Date] |
| Risk Manager | [Name] | _________________ | [Date] |
| Chief Information Officer (CIO) / IT Director | [Name] | _________________ | [Date] |
| Chief Compliance Officer / Head of Legal | [Name] | _________________ | [Date] |
| Chief Executive Officer (CEO) / Designated Senior Management | [Name] | _________________ | [Date] |
| Board Audit Committee Representative | [Name] | _________________ | [Date] |

---

## 13. References

### 13.1 Legislation and Regulatory References

| Reference | Description | Relevant Sections |
|---|---|---|
| **Cyber Security Act 2024 (Act 854)** | Primary legislation establishing mandatory cyber security obligations for NCII entities in Malaysia | Section 21 (Risk Assessment), Section 26 (Cyber Security Audit) |
| **Personal Data Protection Act 2010 (Act 709)** | Data protection legislation governing the processing of personal data; intersects with asset valuation and impact assessment | Relevant personal data processing provisions |
| **[Sector Lead Agency Act / Regulations]** | [Sector-specific legislation if applicable] | [Relevant sections] |

### 13.2 NACSA Guidelines and Circulars

| Reference | Description | Version / Date |
|---|---|---|
| [NACSA Guideline Reference] | [Title and description of NACSA guideline] | [Version / Date] |
| [NACSA Circular Reference] | [Title and description of NACSA circular] | [Date] |

### 13.3 International Standards

| Standard | Description | Relevant Clauses |
|---|---|---|
| **ISO/IEC 27001:2022** | Information security management systems — Requirements | Clause 6.1 (Risk Assessment), Annex A Controls |
| **ISO/IEC 27005:2022** | Information security risk management | All |
| **ISO/IEC 27002:2022** | Information security controls | Relevant control domains |
| **NIST SP 800-30 Rev. 1** | Guide for Conducting Risk Assessments | All |
| **NIST SP 800-53 Rev. 5** | Security and Privacy Controls for Information Systems and Organizations | Relevant control families |
| **NIST Cybersecurity Framework (CSF) 2.0** | Framework for improving critical infrastructure cybersecurity | ID.RA (Risk Assessment) |

### 13.4 Internal Policy References

| Document | Description | Document ID |
|---|---|---|
| Information Security Policy | [Organization Name]'s overarching information security policy | [Document ID] |
| Information Classification and Handling Policy | Policy governing data classification and handling requirements | [Document ID] |
| Cyber Security Incident Response Plan | Plan for responding to cyber security incidents | [Document ID] |
| Business Continuity Plan | Plan for maintaining operations during disruptions | [Document ID] |
| Cyber Security Risk Management Framework | Overarching framework within which this procedure operates | [Document ID] |
| [Other Relevant Internal Document] | [Description] | [Document ID] |

---

## 14. Appendices

### Appendix A — Asset Inventory Register (Full)

*This appendix contains the complete, detailed asset inventory for all NCII systems and supporting assets within scope of this risk assessment. The asset inventory shall be maintained in a dedicated asset management tool or spreadsheet, with this appendix serving as a printed reference.*

*Refer to the dedicated Asset Inventory Register maintained by [Team / System Name], last updated [Date].*

**Minimum fields for each asset record:**

| Field | Description |
|---|---|
| Asset ID | Unique identifier |
| Asset Name | Descriptive name |
| Asset Type | Category (hardware, software, data, service, personnel, facility) |
| Asset Description | Detailed description of the asset and its function |
| NCII System | The NCII system(s) this asset supports |
| Asset Owner | Name and role of accountable owner |
| Custodian | Name and team responsible for day-to-day management |
| Location | Physical and/or logical location |
| Data Classification | Classification of data held or processed |
| Regulatory Requirements | Applicable regulatory requirements (e.g., PDPA, Act 854) |
| CIA Ratings | Confidentiality, Integrity, Availability ratings (1–5) |
| Overall Asset Value | Combined valuation score |
| Dependencies | Other assets this asset depends on |
| Vendor / Supplier | External vendor if applicable |
| Support Contract | Contract reference and expiry |
| Last Updated | Date of last record review |

---

### Appendix B — Threat Library

*This appendix provides a pre-populated threat library for use during threat identification workshops. Assessment teams should select applicable threats from this library and supplement with threats identified through threat intelligence sources.*

| Threat ID | Threat Name | Description | Typical Threat Actor | Primary Target Asset Type |
|---|---|---|---|---|
| TL-001 | Ransomware Attack | Malware that encrypts systems and demands ransom for decryption keys | Cyber criminal groups, RaaS operators | Servers, workstations, file systems |
| TL-002 | Phishing / Spear-Phishing | Deceptive emails or messages designed to steal credentials or deploy malware | Cyber criminals, APT groups | Personnel, email systems |
| TL-003 | Business Email Compromise (BEC) | Fraudulent emails impersonating executives or suppliers to authorise fraudulent transactions | Cyber criminal groups | Personnel, financial systems |
| TL-004 | Distributed Denial of Service (DDoS) | Overwhelming network or application resources to cause unavailability | Hacktivists, cyber criminals, nation-states | Network infrastructure, web applications |
| TL-005 | Advanced Persistent Threat (APT) | Sophisticated, long-term intrusion campaigns for espionage or sabotage | Nation-state threat actors | All NCII systems |
| TL-006 | Supply Chain Compromise | Compromise of software or hardware through trusted supplier channels | Nation-states, sophisticated criminal groups | Software, hardware |
| TL-007 | Insider Threat — Malicious | Deliberate misuse of authorized access by employees or contractors | Malicious insiders, disgruntled employees | Data repositories, administrative systems |
| TL-008 | Insider Threat — Accidental | Unintentional data exposure or system damage due to human error | All personnel | All assets |
| TL-009 | Credential Theft / Password Attack | Brute force, credential stuffing, or password spraying to gain unauthorized access | Cyber criminals, APT groups | Authentication systems, user accounts |
| TL-010 | SQL Injection | Exploitation of database input validation flaws to extract or manipulate data | Cyber criminals, hacktivists | Databases, web applications |
| TL-011 | Zero-Day Exploit | Exploitation of previously unknown vulnerabilities before patches are available | Nation-states, sophisticated criminals | Any system with exploitable software |
| TL-012 | Man-in-the-Middle (MitM) | Interception of communications to eavesdrop or alter data in transit | Cyber criminals, nation-states | Network communications, encrypted channels |
| TL-013 | Physical Intrusion | Unauthorized physical access to facilities housing NCII systems | Criminal groups, disgruntled personnel | Data centres, server rooms |
| TL-014 | Natural Disaster | Flood, earthquake, fire, or other natural event affecting NCII facilities | Environmental | Physical facilities, hardware |
| TL-015 | Power / Infrastructure Failure | Loss of power, cooling, or connectivity affecting NCII system availability | Environmental, third-party failure | Data centres, network infrastructure |
| [TL-XXX] | [Additional threats specific to [Organization Name]'s sector] | | | |

---

### Appendix C — Risk Calculation Worksheets

*This appendix provides blank worksheets for use during risk assessment workshops. One worksheet should be completed for each identified risk scenario.*

**Risk Scenario Worksheet**

| Field | Input |
|---|---|
| **Risk Scenario ID** | [RISK-XXX] |
| **Date of Assessment** | [Date] |
| **Assessor(s)** | [Names] |
| **Asset** | [Asset ID / Name] |
| **Threat** | [Threat ID / Description] |
| **Vulnerability** | [Vuln ID / Description] |
| **Risk Description** | [Full description of the risk scenario] |
| **Inherent Likelihood** | [1–5] — Rationale: [Description] |
| **Existing Controls** | [List controls currently in place] |
| **Control Effectiveness** | [1–5] — Rationale: [Description] |
| **Adjusted Likelihood** | [Calculated value] |
| **Impact — Operational** | [1–5] — Rationale: [Description] |
| **Impact — Financial** | [1–5] — Rationale: [Description] |
| **Impact — Regulatory** | [1–5] — Rationale: [Description] |
| **Impact — Reputational** | [1–5] — Rationale: [Description] |
| **Impact — National Security** | [1–5] — Rationale: [Description] |
| **Overall Impact Score** | [Calculated / Selected value] |
| **Risk Score** | [Adjusted Likelihood × Impact] |
| **Risk Rating** | [Critical / High / Medium / Low] |
| **Proposed Treatment Strategy** | [Treat / Transfer / Tolerate / Terminate] |
| **Proposed Controls / Actions** | [Description] |
| **Expected Residual Likelihood** | [1–5] |
| **Expected Residual Impact** | [1–5] |
| **Expected Residual Risk Score** | [Score] |
| **Expected Residual Risk Rating** | [Rating] |
| **Risk Owner** | [Name / Role] |
| **Target Completion Date** | [Date] |

---

### Appendix D — Risk Assessment Scheduling Template

*This appendix provides a template for scheduling and tracking annual risk assessment cycles.*

| Assessment Cycle | NCII System(s) in Scope | Planned Start Date | Planned Completion Date | Submission Deadline | Assessment Lead | Status | Actual Completion Date | Submission Date |
|---|---|---|---|---|---|---|---|---|
| [YYYY Annual Assessment] | [List of NCII systems] | [Date] | [Date] | [Date] | [Name] | [Planned / In Progress / Completed] | [Date] | [Date] |

---

### Appendix E — NACSA Report Submission Checklist

*Use this checklist prior to submitting the risk assessment report to NACSA and the Sector Lead Agency.*

| # | Checklist Item | Completed | Verified By | Date |
|---|---|---|---|---|
| 1 | All NCII systems designated under Act 854 are included in the assessment scope | ☐ | | |
| 2 | Asset inventory is complete and reflects current state of NCII systems | ☐ | | |
| 3 | All Critical and High threats have been identified and documented | ☐ | | |
| 4 | Technical vulnerability assessment has been conducted and results are current (within [X] months) | ☐ | | |
| 5 | All Critical and High vulnerabilities are documented in the vulnerability register | ☐ | | |
| 6 | Risk scores have been calculated using the approved methodology | ☐ | | |
| 7 | Risk treatment plans are documented for all Critical and High risks | ☐ | | |
| 8 | Risk treatment plans have assigned owners and target completion dates | ☐ | | |
| 9 | Report has been reviewed by CISO and Legal & Compliance | ☐ | | |
| 10 | Report has been formally approved and signed by the CISO | ☐ | | |
| 11 | Report is classified and labelled correctly | ☐ | | |
| 12 | Submission is via the approved NACSA secure channel | ☐ | | |
| 13 | Submission acknowledgement / receipt has been obtained and filed | ☐ | | |
| 14 | Submission records have been updated in the compliance management system | ☐ | | |
| 15 | Next assessment cycle has been scheduled | ☐ | | |

---

### Appendix F — Glossary of Regulatory References

*This appendix provides a quick-reference summary of all Act 854 sections referenced in this procedure.*

| Section | Short Title | Summary |
|---|---|---|
| **Section 21** | Cyber Security Risk Assessment | Requires NCII entities to conduct cyber security risk assessments of NCII systems in the prescribed manner and submit results to NACSA and the Sector Lead Agency |
| **Section 21(1)** | Initial Assessment Obligation | Sets out the obligation and timeframe for initial risk assessment following NCII designation |
| **Section 21(2)** | Periodic and Event-Triggered Assessment | Requires periodic reassessment and reassessment following significant incidents or material changes |
| **Section 21(3)** | Submission Requirement | Requires submission of the risk assessment report to NACSA and Sector Lead Agency within the prescribed period |
| **Section 26** | Cyber Security Audit | Provides for mandatory cyber security audits of NCII entities; risk assessment outputs may be reviewed as part of an audit |
| [Additional Sections] | [Title] | [Summary] |

---

### Appendix G — Contact Directory

*Maintain up-to-date contact information for all key stakeholders involved in the risk assessment process and regulatory submission.*

| Role | Name | Organization | Email | Phone | Last Updated |
|---|---|---|---|---|---|
| CISO | [Name] | [Organization Name] | [Email] | [Phone] | [Date] |
| Risk Manager | [Name] | [Organization Name] | [Email] | [Phone] | [Date] |
| NACSA Point of Contact | [Name] | NACSA | [Email] | [Phone] | [Date] |
| Sector Lead Agency Contact | [Name] | [Sector Lead Agency] | [Email] | [Phone] | [Date] |
| Internal Audit Lead | [Name] | [Organization Name] | [Email] | [Phone] | [Date] |
| Legal & Compliance Lead | [Name] | [Organization Name] | [Email] | [Phone] | [Date] |
| [Other Key Contact] | [Name] | [Organization] | [Email] | [Phone] | [Date] |

---

*End of Document*

---

**Document Control Notice**

This document is the property of [Organization Name]. It must be reviewed and updated annually or upon occurrence of a material change. The current approved version of this document is available from [Document Management System / SharePoint Location]. Any printed copies are considered uncontrolled and may not reflect the current approved version. Please verify currency before use.

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Title** | Cyber Security Risk Assessment Procedure |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Risk Manager / CISO |
| **Next Review** | [Next Review Date] |