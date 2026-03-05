# NCII Cybersecurity Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 12 months from Last Review Date] |
| **Approved By** | [Approved By — Board / CEO / Risk Committee] |
| **Organization** | [Organization Name] |
| **Department** | [Department Name] |

---

> **CONFIDENTIALITY NOTICE:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of law, including the Personal Data Protection Act 2010 and the Cyber Security Act 2024 (Act 854).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Framework and Obligations](#2-regulatory-framework-and-obligations)
3. [Policy Objectives](#3-policy-objectives)
4. [NCII Asset Classification](#4-ncii-asset-classification)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Security Governance Framework](#6-security-governance-framework)
7. [Compliance Obligations under Act 854](#7-compliance-obligations-under-act-854)
8. [Security Controls and Requirements](#8-security-controls-and-requirements)
9. [Risk Management](#9-risk-management)
10. [Incident Management and Reporting](#10-incident-management-and-reporting)
11. [Business Continuity and Resilience](#11-business-continuity-and-resilience)
12. [Third-Party and Supply Chain Security](#12-third-party-and-supply-chain-security)
13. [Awareness, Training, and Competency](#13-awareness-training-and-competency)
14. [Policy Exception Process](#14-policy-exception-process)
15. [Monitoring, Audit, and Enforcement](#15-monitoring-audit-and-enforcement)
16. [Review and Update Cycle](#16-review-and-update-cycle)
17. [Roles and Responsibilities — RACI Matrix](#17-roles-and-responsibilities--raci-matrix)
18. [Review and Approval](#18-review-and-approval)
19. [References](#19-references)
20. [Appendices](#20-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the overarching purpose of this policy — why it exists, what problem it solves, and what organizational commitment it represents.*

This policy establishes [Organization Name]'s commitment to protecting its National Critical Information Infrastructure (NCII) assets and information systems in accordance with the **Cyber Security Act 2024 (Act 854)** and associated subsidiary legislation, directives, and guidelines issued by the **National Cyber Security Agency (NACSA)**.

This document serves as the master cybersecurity policy governing the security of [Organization Name]'s information assets, systems, networks, and data that are designated, or may reasonably be designated, as part of Malaysia's national critical information infrastructure under Section 17 of Act 854.

The objectives of this policy are to:

- Formally establish [Organization Name]'s cybersecurity governance posture.
- Define the organizational commitment to protect NCII assets from cyber threats.
- Assign clear accountability for cybersecurity across the organization.
- Ensure compliance with all obligations imposed on NCII entities under Act 854.
- Provide a framework for the development and maintenance of subordinate security policies, standards, procedures, and guidelines.

### 1.2 Scope

*Define the boundaries of this policy — which systems, assets, people, processes, and locations are covered.*

This policy applies to:

**a) Organizational Entities**

- All business units, departments, subsidiaries, and branch offices of [Organization Name].
- All staff including permanent employees, contract staff, interns, and seconded personnel.
- All third parties, vendors, consultants, and managed service providers who access, process, transmit, or store information belonging to [Organization Name] or who have connectivity to [Organization Name]'s systems and networks.

**b) Information Assets and Systems**

- All information assets owned, operated, managed, or leased by [Organization Name], including those hosted in on-premises data centres, co-location facilities, private clouds, public clouds, and hybrid environments.
- All NCII assets as designated under Section 17 of Act 854, including systems classified under the [specify sector, e.g., Financial Services / Energy / Water / Transportation / Health / Government] sector.
- All information systems that interface with or support NCII functions, whether or not individually designated.

**c) Geographic Scope**

- All offices, data centres, and operational sites within Malaysia.
- [Include or exclude overseas operations as applicable — e.g., "This policy also applies to overseas operations of [Organization Name] where such operations involve the processing of or connectivity to NCII assets."]

**d) Exclusions**

*Document any systems, assets, or entities explicitly excluded from scope and state the rationale.*

| Exclusion | Rationale | Approval Reference |
|---|---|---|
| [System / Entity Name] | [Reason for exclusion] | [Reference to approval] |
| [System / Entity Name] | [Reason for exclusion] | [Reference to approval] |

### 1.3 Policy Hierarchy

*Describe where this policy sits in the organization's policy framework hierarchy.*

This policy is the **apex cybersecurity policy** for [Organization Name] and takes precedence over all subordinate cybersecurity documents. The following hierarchy governs the relationship between this policy and subordinate documents:

```
Level 1 — Policy (This Document)
    └── Level 2 — Standards and Frameworks
            └── Level 3 — Procedures and Work Instructions
                    └── Level 4 — Guidelines and Checklists
```

All subordinate cybersecurity documents must be consistent with and must not conflict with this policy. In the event of any conflict, this policy shall prevail unless a formal exception has been approved in accordance with Section 14 of this document.

---

## 2. Regulatory Framework and Obligations

### 2.1 Legislative and Regulatory Context

*Describe the legal and regulatory landscape within which this policy operates, with particular emphasis on Act 854 and its implications for the organization.*

[Organization Name] operates within a complex regulatory environment. This policy is primarily governed by and must satisfy the requirements of the following legislative and regulatory instruments:

#### 2.1.1 Primary Legislation

| Legislation | Description | Relevant to This Policy |
|---|---|---|
| **Cyber Security Act 2024 (Act 854)** | Malaysia's primary legislation governing cybersecurity obligations for NCII entities, licensing of cybersecurity service providers, and cyber incident reporting. | Yes — Primary Driver |
| **Computer Crimes Act 1997 (Act 563)** | Criminalises unauthorised access, modification of computer contents, and other cybercrime offences. | Yes — Offence Framework |
| **Personal Data Protection Act 2010 (Act 709)** | Governs the processing of personal data and imposes obligations on data processors and controllers, including security obligations. | Yes — Data Security |
| **Financial Services Act 2013 (Act 758)** | [Include if applicable — financial sector] Governs the licensing and regulation of financial institutions, including operational risk and technology risk requirements. | [Yes / No / Partial] |
| **Islamic Financial Services Act 2013 (Act 759)** | [Include if applicable] Islamic financial services equivalent of the FSA. | [Yes / No / Partial] |
| **Digital Financial Services Policy — BNM** | [Include if applicable] Bank Negara Malaysia requirements on technology risk management and cybersecurity for licensed financial institutions. | [Yes / No / Partial] |
| **[Other applicable legislation]** | [Description] | [Yes / No / Partial] |

#### 2.1.2 Subsidiary Legislation, Directives, and Guidelines

| Instrument | Issuing Authority | Description |
|---|---|---|
| [Subsidiary Regulation / Order under Act 854] | NACSA | [Description] |
| [NACSA Directive / Circular Reference] | NACSA | [Description] |
| [BNM Risk Management in Technology (RMiT) Policy Document] | BNM | [Include if applicable] |
| [Other NACSA Guidelines] | NACSA | [Description] |

### 2.2 NCII Sector Designation

*State the organization's NCII designation status, the sector under which it is designated, and any conditions attached to the designation.*

[Organization Name] has been designated as a **National Critical Information Infrastructure (NCII) entity** under **Section 17 of the Cyber Security Act 2024 (Act 854)**.

| Field | Details |
|---|---|
| **NCII Sector** | [e.g., Financial Services / Energy / Water / Transportation / Health / Government / National Defence and Security / Plantation and Food / Information and Communications] |
| **Designation Reference** | [Gazettement / Notification Reference Number, if publicly available] |
| **Designated Date** | [Date of Designation] |
| **Competent Authority** | [Relevant Sector Competent Authority, e.g., Bank Negara Malaysia / Energy Commission / MCMC] |
| **Lead Federal Agency** | [Lead Federal Agency as designated under Act 854, if known] |

As an NCII entity, [Organization Name] is subject to all obligations prescribed under Act 854, including but not limited to:

- Developing, implementing, and maintaining a cybersecurity policy (s18).
- Conducting cybersecurity risk assessments (s18).
- Complying with mandatory cybersecurity measures as specified (s18).
- Reporting cybersecurity incidents to NACSA within prescribed timelines (s24).
- Cooperating with NACSA audits, inspections, and assessments (s18).
- Appointing a responsible officer for cybersecurity governance (s18).

### 2.3 Interaction with Other Frameworks

*Explain how this policy interacts with other cybersecurity or risk management frameworks used by the organization.*

[Organization Name] aligns its cybersecurity program with the following recognized frameworks, which complement and operationalize compliance with Act 854:

| Framework | Application |
|---|---|
| **NACSA Cybersecurity Framework** | Primary reference for NCII security controls and governance requirements. |
| **ISO/IEC 27001:2022** | Information Security Management System (ISMS) standard providing a comprehensive control framework. |
| **NIST Cybersecurity Framework (CSF) 2.0** | Reference framework for Identify, Protect, Detect, Respond, and Recover functions. |
| **CIS Controls v8** | Prioritized set of security controls for baseline and advanced security postures. |
| **[BNM RMiT]** | [Include if applicable] Bank Negara Malaysia Technology Risk Management requirements. |
| **[Other Framework]** | [Description of application] |

---

## 3. Policy Objectives

### 3.1 Strategic Cybersecurity Objectives

*Define the high-level strategic objectives of the organization's cybersecurity program, aligned to the organization's business strategy and regulatory obligations.*

[Organization Name]'s cybersecurity program is guided by the following strategic objectives:

**Objective 1 — Protection of NCII Assets**

Ensure the confidentiality, integrity, and availability of all NCII assets, critical systems, and sensitive data at all times, commensurate with the risk profile of those assets.

**Objective 2 — Regulatory Compliance**

Achieve and maintain full compliance with all obligations imposed by the Cyber Security Act 2024 (Act 854) and all applicable subsidiary legislation, directives, guidelines, and orders issued by NACSA and other competent authorities.

**Objective 3 — Cyber Resilience**

Build and sustain the organizational capability to anticipate, withstand, adapt to, and recover from cybersecurity threats and incidents, ensuring continuity of critical services.

**Objective 4 — Threat-Informed Defence**

Maintain a current understanding of the threat landscape relevant to [Organization Name]'s sector and operations, and ensure security controls are calibrated to address relevant and emerging threats.

**Objective 5 — Security Governance and Accountability**

Establish clear governance structures, lines of accountability, and oversight mechanisms that embed cybersecurity into the organization's enterprise risk management and corporate governance frameworks.

**Objective 6 — Culture and Competency**

Foster a security-aware organizational culture where all personnel understand their security responsibilities and are equipped with the knowledge and skills to discharge those responsibilities effectively.

**Objective 7 — Third-Party Risk Management**

Ensure that cybersecurity risk arising from third-party relationships, including vendors, service providers, and technology partners, is identified, assessed, and managed to an acceptable level.

### 3.2 Cybersecurity Principles

*List the core principles that guide the organization's approach to cybersecurity decision-making and design.*

All cybersecurity decisions, designs, and implementations at [Organization Name] shall be guided by the following principles:

| Principle | Description |
|---|---|
| **Security by Design** | Security is embedded into the design and development of systems, processes, and products from inception, not applied as an afterthought. |
| **Least Privilege** | Users, systems, and processes are granted only the minimum level of access required to perform their function. |
| **Defence in Depth** | Multiple, overlapping layers of security controls are implemented so that the failure of any single control does not result in a systemic compromise. |
| **Risk-Based Approach** | Security investment and control implementation are proportionate to the assessed risk, impact, and likelihood of threats to NCII assets. |
| **Zero Trust** | No user, device, or network segment is inherently trusted; all access requests are verified and validated regardless of origin. |
| **Accountability and Transparency** | Clear ownership and accountability for cybersecurity are established at all levels; security posture is reported transparently to appropriate governance bodies. |
| **Proportionality** | Security measures are proportionate to the sensitivity and criticality of the information and assets being protected. |
| **Continuous Improvement** | The cybersecurity program is subject to ongoing evaluation and continuous improvement based on emerging threats, incidents, audit findings, and changes to the operating environment. |

---

## 4. NCII Asset Classification

### 4.1 Asset Classification Framework

*Describe the framework used to identify, classify, and prioritize NCII assets. This section must align with NACSA's asset classification requirements under Act 854.*

[Organization Name] maintains a formal asset classification framework to ensure that all assets supporting NCII functions are identified, appropriately classified, and protected in accordance with their criticality and sensitivity.

Asset classification is performed based on two independent dimensions:

1. **Criticality** — The degree to which the asset supports the delivery of critical services and NCII functions.
2. **Sensitivity / Confidentiality** — The degree to which the asset contains or processes sensitive or confidential information.

### 4.2 Asset Criticality Classification

*Define the criticality tiers for NCII assets.*

| Criticality Tier | Label | Definition | Examples |
|---|---|---|---|
| **Tier 1** | Mission Critical | Asset directly supports NCII designated functions. Failure or compromise would cause significant disruption to national critical services. | [e.g., Core banking system / SCADA / Payment infrastructure] |
| **Tier 2** | Business Critical | Asset supports important business operations. Failure would cause significant operational disruption but not immediate impact on NCII functions. | [e.g., ERP system / HR system / Internal communication platforms] |
| **Tier 3** | Business Important | Asset supports routine business operations. Failure would cause inconvenience but can be managed with manual workarounds. | [e.g., Internal file servers / non-critical applications] |
| **Tier 4** | Non-Critical** | Asset supports ancillary functions. Failure has minimal business impact. | [e.g., Internal wikis / general-purpose workstations] |

### 4.3 Information Sensitivity Classification

*Define the sensitivity / confidentiality tiers for information held or processed by the organization.*

| Classification Level | Label | Definition | Handling Requirements |
|---|---|---|---|
| **Level 1** | Top Secret / Restricted | Information whose unauthorized disclosure could cause severe damage to national security, NCII functions, or the organization. | Strict access control; encryption mandatory; physical security required; no external transmission without written approval. |
| **Level 2** | Confidential | Information whose unauthorized disclosure could cause significant harm to the organization, its clients, or national interests. This includes NCII designation details and security architecture documents. | Access restricted to need-to-know; encryption in transit and at rest; not to be shared externally without authorization. |
| **Level 3** | Internal | Information intended for internal use only. Unauthorized disclosure could cause moderate harm or embarrassment. | Access limited to employees and authorized parties; basic access controls apply. |
| **Level 4** | Public | Information approved for public release. | Standard handling; no special controls required. |

### 4.4 NCII Asset Register

*Describe the requirement to maintain an up-to-date NCII asset register and the minimum data elements it must contain.*

[Organization Name] shall maintain a comprehensive **NCII Asset Register** documenting all assets that fall within the scope of NCII designation. The Asset Register is a controlled document maintained by the [Security Operations / IT Asset Management] team and reviewed by the CISO.

**Minimum data elements for each asset entry:**

| Field | Description |
|---|---|
| Asset ID | Unique identifier for the asset |
| Asset Name | Common name or label of the asset |
| Asset Type | [System / Network / Data / Physical / People / Third-Party Service] |
| Asset Owner | Named individual (role and name) accountable for the asset |
| Asset Custodian | Team or individual responsible for day-to-day management |
| Criticality Tier | Tier 1 / Tier 2 / Tier 3 / Tier 4 (per Section 4.2) |
| Information Classification | Level 1 / Level 2 / Level 3 / Level 4 (per Section 4.3) |
| NCII Designated | Yes / No |
| Location | [Physical location / Cloud provider / Region] |
| Dependencies | Other assets or services this asset depends on |
| Last Review Date | Date of last asset review |
| Remarks | [Any additional relevant information] |

The NCII Asset Register shall be reviewed and updated:

- Annually as part of the policy review cycle.
- Following any material change to the technology environment (e.g., new system implementation, decommissioning, significant architecture change).
- Following any cybersecurity incident that reveals gaps or inaccuracies in the register.
- Upon direction from NACSA or the competent authority.

### 4.5 Asset Ownership

*Define the concept of asset ownership and the responsibilities of asset owners.*

Every NCII asset must have a designated **Asset Owner**. Asset Owners are senior members of staff, typically at Director or Head of Department level, who are accountable for the security of the assets under their ownership.

**Asset Owner Responsibilities:**

- Formally accepting accountability for the asset and its classification.
- Ensuring that appropriate security controls are implemented for the asset, consistent with its criticality and classification tier.
- Authorising access to the asset in accordance with the Least Privilege principle.
- Reviewing and certifying the asset's classification on an annual basis or upon material change.
- Ensuring the asset is included in the NCII Asset Register and that register entries remain accurate.
- Reporting material changes to the CISO that may affect the asset's classification or security requirements.

---

## 5. Roles and Responsibilities

### 5.1 Governance Structures

*Describe the governance structures and bodies responsible for cybersecurity oversight at various levels of the organization.*

[Organization Name] operates a multi-tiered cybersecurity governance structure to ensure appropriate oversight and accountability at all organizational levels.

#### 5.1.1 Board of Directors / Governing Body

The **Board of Directors** (or equivalent governing body) of [Organization Name] bears ultimate accountability for cybersecurity governance. The Board shall:

- Approve this policy and all material amendments thereto.
- Receive regular cybersecurity risk and posture reports from the CISO, at minimum on a [quarterly / semi-annual] basis.
- Ensure that adequate resources (financial, human, and technological) are allocated to the cybersecurity program.
- Oversee the management of cybersecurity risk as a material enterprise risk.
- Ensure that cybersecurity obligations under Act 854 are met.

#### 5.1.2 Risk and Compliance Committee (or equivalent)

The **[Risk and Compliance Committee / Audit Committee / Technology Risk Committee]** shall:

- Review and recommend this policy and its updates to the Board for approval.
- Receive detailed cybersecurity risk reports and exception reports.
- Review material cybersecurity incidents and the adequacy of management's response.
- Review findings from internal and external cybersecurity audits.
- Oversee compliance with Act 854 and other applicable cybersecurity regulations.

#### 5.1.3 Chief Executive Officer / Managing Director

The **CEO / Managing Director** shall:

- Be accountable to the Board for the effective implementation of cybersecurity governance.
- Ensure that cybersecurity is integrated into the organization's strategic and operational plans.
- Support and empower the CISO to discharge their responsibilities effectively.
- Approve and communicate the organization's cybersecurity commitment to all staff.

### 5.2 Chief Information Security Officer (CISO)

*Define the role, authority, and responsibilities of the CISO as the designated responsible officer for cybersecurity under Act 854.*

The **Chief Information Security Officer (CISO)** is the designated responsible officer for cybersecurity at [Organization Name] in accordance with Section 18 of Act 854.

**Role Details:**

| Field | Details |
|---|---|
| **Role Title** | Chief Information Security Officer (CISO) |
| **Reports To** | [CEO / CRO / Board Risk Committee — as applicable] |
| **Current Post Holder** | [Name] |
| **Appointed Date** | [Date] |

**Responsibilities of the CISO:**

- Developing, implementing, and maintaining this policy and the broader cybersecurity program.
- Providing strategic cybersecurity leadership and direction across the organization.
- Ensuring compliance with all cybersecurity obligations under Act 854, including incident reporting to NACSA.
- Maintaining oversight of the NCII Asset Register and ensuring assets are appropriately classified and protected.
- Directing the Security Operations function, including threat monitoring, incident response, and vulnerability management.
- Advising the Board, Risk Committee, and senior management on cybersecurity risk and posture.
- Maintaining the organization's relationship with NACSA, the competent authority, and sector regulators on cybersecurity matters.
- Overseeing cybersecurity due diligence for third-party relationships.
- Ensuring adequate cybersecurity training and awareness programs are in place.
- Managing the cybersecurity budget and resource allocation.
- Reporting material cybersecurity incidents to NACSA within prescribed timelines.

### 5.3 Security Team

*Define the structure and responsibilities of the security team that supports the CISO.*

The **Cybersecurity Team** supports the CISO in implementing and operating the cybersecurity program. The team is organized as follows:

#### 5.3.1 Security Operations Centre (SOC)

*Describe the SOC function, whether in-house or managed, and its core responsibilities.*

| Sub-Role | Responsibilities |
|---|---|
| **SOC Manager / Lead** | Oversees SOC operations; manages escalations; maintains SOC procedures; reports to CISO. |
| **Security Analyst (Tier 1)** | First-line alert triage; basic incident classification; escalation to Tier 2. |
| **Security Analyst (Tier 2)** | In-depth incident investigation; threat hunting; escalation to Tier 3 / CISO. |
| **Security Analyst (Tier 3) / IR Specialist** | Advanced incident response; forensic investigation; recovery coordination. |
| **[External MSSP — if applicable]** | [Describe scope of managed security services provided] |

#### 5.3.2 Security Engineering and Architecture

| Sub-Role | Responsibilities |
|---|---|
| **Security Architect** | Designs and maintains the security architecture; reviews technology changes for security impact; establishes security standards. |
| **Security Engineer** | Implements, configures, and maintains security tools and controls; performs vulnerability assessments. |

#### 5.3.3 Governance, Risk, and Compliance (GRC)

| Sub-Role | Responsibilities |
|---|---|
| **GRC Manager / Analyst** | Manages policy lifecycle; coordinates compliance assessments; manages risk register; coordinates audits. |
| **Risk Analyst** | Conducts cybersecurity risk assessments; maintains risk register; reports on risk posture. |

### 5.4 Asset Owners

*Define the responsibilities of Asset Owners.*

**Asset Owners** are business or operational leaders who are assigned accountability for specific NCII assets (see Section 4.5 for detailed responsibilities).

### 5.5 IT and Technology Teams

*Define the cybersecurity responsibilities of IT and technology functions.*

The **IT Department / Technology Division** (separate from the Cybersecurity Team) bears the following security responsibilities:

- Implementing and maintaining technical controls as directed by the Cybersecurity Team.
- Applying security patches and updates within timeframes prescribed by the Vulnerability Management Standard.
- Maintaining system configurations in accordance with approved security baselines and hardening standards.
- Supporting the implementation of access management controls, including joiner/mover/leaver processes.
- Providing system logs and monitoring data to the SOC.
- Notifying the Cybersecurity Team of material technology changes that may affect security posture.
- Supporting cybersecurity incident response and recovery activities.

### 5.6 All Staff

*Define the general cybersecurity responsibilities that apply to all employees.*

All employees, contractors, and personnel of [Organization Name] are responsible for:

- Complying with this policy, all subordinate cybersecurity policies, standards, and procedures.
- Completing mandatory cybersecurity awareness training within prescribed timelines.
- Reporting suspected cybersecurity incidents, suspicious activity, or policy violations immediately to the Security Team via [designated reporting channel — e.g., security@[organization].com / IT helpdesk].
- Protecting organizational assets, including devices, credentials, and data, from unauthorized access or loss.
- Not sharing credentials, passwords, or authentication tokens with any other party.
- Not using organizational systems, networks, or assets for unauthorized purposes.
- Cooperating with cybersecurity investigations and audits.

### 5.7 Human Resources

*Define HR's responsibilities in supporting cybersecurity.*

The **Human Resources Department** is responsible for:

- Incorporating cybersecurity policy compliance obligations into employment contracts and contractor agreements.
- Coordinating pre-employment background screening for roles with access to NCII assets (in accordance with the organization's screening policy).
- Ensuring cybersecurity awareness training is included in the onboarding process for new joiners.
- Managing the leaver process in coordination with IT and the Cybersecurity Team to ensure timely revocation of access.
- Escalating disciplinary matters arising from cybersecurity policy violations.

### 5.8 Legal and Compliance

*Define Legal and Compliance's responsibilities in relation to cybersecurity.*

The **Legal and Compliance Department** is responsible for:

- Advising the CISO and senior management on legal obligations arising from Act 854, PDPA, and other applicable legislation.
- Reviewing and approving cybersecurity-related contractual provisions in third-party agreements.
- Supporting the CISO in managing regulatory interactions with NACSA, BNM [if applicable], and other authorities.
- Coordinating mandatory breach notification requirements with the CISO.

### 5.9 Third-Party Vendors and Service Providers

*Define the cybersecurity obligations of third parties.*

All third-party vendors, suppliers, and service providers who access, process, transmit, or store [Organization Name]'s NCII assets or other information must:

- Comply with this policy and all applicable security requirements communicated by [Organization Name].
- Implement and maintain security controls commensurate with the classification of information and systems they access.
- Immediately notify [Organization Name]'s CISO or Security Team of any cybersecurity incident that affects or may affect [Organization Name]'s assets or systems.
- Submit to security assessments, audits, and reviews as required by [Organization Name].
- Ensure their personnel with access to [Organization Name] systems complete security awareness training appropriate to their role.

---

## 6. Security Governance Framework

### 6.1 Governance Overview

*Describe the overarching security governance framework that underpins this policy — how decisions are made, escalated, and reported.*

[Organization Name]'s cybersecurity governance framework provides the structures, processes, and mechanisms through which cybersecurity risk is managed, overseen, and reported. The framework is designed to ensure that:

- Cybersecurity risk is treated as a material enterprise risk, subject to the same rigor as financial, operational, and reputational risks.
- Accountability for cybersecurity is clearly assigned at Board, executive, and operational levels.
- Cybersecurity performance and risk posture are reported through established governance channels.
- Regulatory obligations under Act 854 are discharged effectively and demonstrably.

### 6.2 Policy Framework

*Describe the hierarchy of cybersecurity documents and how they interrelate.*

The cybersecurity governance framework is supported by a structured hierarchy of documents:

| Level | Document Type | Examples |
|---|---|---|
| **Level 1** | **Policies** | This policy; Acceptable Use Policy; Data Classification Policy |
| **Level 2** | **Standards** | Password Standard; Encryption Standard; Patch Management Standard; Logging and Monitoring Standard |
| **Level 3** | **Procedures** | Incident Response Procedure; Change Management Procedure; Vulnerability Management Procedure; Backup and Recovery Procedure |
| **Level 4** | **Guidelines and Checklists** | Security Configuration Checklists; Secure Coding Guidelines; Security Testing Checklists |

All Level 2, 3, and 4 documents are subordinate to this policy and must be consistent with its requirements. The CISO is responsible for ensuring that the policy framework remains current, coherent, and fit for purpose.

**Subordinate policies that derive from this master policy include (but are not limited to):**

- Acceptable Use Policy
- Access Control Policy
- Data Classification and Handling Policy
- Network Security Policy
- Cryptography Policy
- Physical Security Policy
- Vulnerability Management Policy
- Incident Response Policy
- Business Continuity and Disaster Recovery Policy
- Third-Party and Vendor Security Policy
- Cloud Security Policy
- [Other applicable policies]

### 6.3 Cybersecurity Reporting

*Define the reporting lines and cadence for cybersecurity reporting to governance bodies.*

The following cybersecurity reporting cadence is established:

| Report | Audience | Frequency | Content |
|---|---|---|---|
| Cybersecurity Dashboard / Scorecard | CISO / Security Management | Monthly | KPIs, KRIs, incident metrics, vulnerability posture, awareness metrics |
| Cybersecurity Risk Report | Risk Committee / CRO | Quarterly | Cybersecurity risk profile, material incidents, regulatory compliance status, exceptions |
| Board Cybersecurity Report | Board of Directors | [Quarterly / Semi-Annual] | Strategic cybersecurity posture, material incidents, regulatory matters, program updates |
| NACSA Statutory Reports | NACSA | As required under Act 854 | Incident reports, compliance returns, assessment results |
| [Other Report] | [Audience] | [Frequency] | [Content] |

### 6.4 Security Metrics

*Define the key performance indicators and risk indicators used to measure and report on cybersecurity.*

The following metrics shall be tracked and reported as part of cybersecurity governance:

#### Key Performance Indicators (KPIs)

| Metric | Description | Target |
|---|---|---|
| Mean Time to Detect (MTTD) | Average time from incident occurrence to detection | [e.g., < 24 hours] |
| Mean Time to Respond (MTTR) | Average time from incident detection to containment | [e.g., < 4 hours for critical] |
| Patch Compliance Rate | Percentage of critical patches applied within SLA | [e.g., ≥ 95% within 30 days] |
| Vulnerability Remediation Rate | Percentage of critical vulnerabilities remediated within SLA | [e.g., ≥ 90% within 15 days] |
| Security Awareness Training Completion | Percentage of staff completing mandatory training | [e.g., ≥ 95%] |
| Phishing Simulation Click Rate | Percentage of staff clicking simulated phishing emails | [e.g., < 5%] |

#### Key Risk Indicators (KRIs)

| Metric | Description | Threshold |
|---|---|---|
| Number of Critical Open Vulnerabilities | Count of unpatched critical vulnerabilities | [e.g., > 10 triggers escalation] |
| Number of Unresolved High-Severity Incidents | Count of high-severity incidents without resolution | [e.g., > 5 triggers escalation] |
| Number of Expired Policy Exceptions | Count of exceptions past their approved expiry | [e.g., > 0 triggers immediate action] |
| Third-Party Security Assessment Overdue | Count of vendors overdue for security review | [e.g., > 3 triggers escalation] |

---

## 7. Compliance Obligations under Act 854

### 7.1 Overview of Act 854 Obligations

*Provide a detailed breakdown of [Organization Name]'s compliance obligations under the Cyber Security Act 2024 (Act 854), with reference to specific sections.*

As an NCII entity designated under Section 17 of Act 854, [Organization Name] is subject to the following statutory obligations:

### 7.2 Section 17 — Designation as NCII

**Statutory Requirement:**

Section 17 of Act 854 empowers the Chief Executive of NACSA, with the approval of the Minister, to designate any entity as a National Critical Information Infrastructure entity. Upon designation, the entity becomes subject to all obligations prescribed under Part IV of the Act.

**Organizational Response:**

- [Organization Name] has acknowledged its designation as an NCII entity (see Section 2.2 of this policy).
- [Organization Name] has established governance structures and processes to discharge all obligations arising from NCII designation.
- Any material changes to [Organization Name]'s designated NCII systems or infrastructure are notified to NACSA in accordance with prescribed requirements.

**Evidence of Compliance:**

| Evidence Item | Location / Reference | Review Frequency |
|---|---|---|
| NCII Designation acknowledgement | [File reference] | Upon receipt / upon change |
| NCII Asset Register | [File reference] | Annual |
| Board resolution acknowledging NCII obligations | [File reference] | Upon designation / upon policy change |

### 7.3 Section 18 — Cybersecurity Measures for NCII

**Statutory Requirement:**

Section 18 of Act 854 requires NCII entities to:

- Develop and implement a cybersecurity policy.
- Conduct cybersecurity risk assessments.
- Implement cybersecurity measures as prescribed.
- Cooperate with NACSA and competent authorities in cybersecurity audits and assessments.

**Organizational Response:**

| s18 Obligation | [Organization Name]'s Response | Responsible Party | Reference Document |
|---|---|---|---|
| Develop cybersecurity policy | This policy constitutes compliance with this obligation. | CISO | This document |
| Conduct cybersecurity risk assessment | Annual cybersecurity risk assessment is conducted and documented. | CISO / Risk Team | [Cybersecurity Risk Assessment Report — Document ID] |
| Implement prescribed cybersecurity measures | Security controls implemented in accordance with NACSA requirements and this policy framework. | CISO / Security Team | [Security Controls Framework — Document ID] |
| Cooperate with NACSA audits and assessments | [Organization Name] cooperates fully with all NACSA-initiated audits, inspections, and assessments. | CISO / GRC | [Audit Management Procedure — Document ID] |

**Evidence of Compliance:**

| Evidence Item | Location / Reference | Review Frequency |
|---|---|---|
| This policy (approved and current) | [File reference] | Annual |
| Cybersecurity risk assessment report | [File reference] | Annual |
| Security controls assessment / audit results | [File reference] | Annual / As required |
| NACSA audit correspondence and responses | [File reference] | As required |

### 7.4 Section 24 — Cybersecurity Incident Reporting

**Statutory Requirement:**

Section 24 of Act 854 requires NCII entities to report cybersecurity incidents to NACSA within prescribed timelines. Failure to report constitutes an offence under the Act.

**Organizational Response:**

[Organization Name] has established a formal incident reporting procedure to ensure compliance with Section 24. Key elements include:

| Reporting Stage | Timeline (Indicative — refer to Act and subsidiary legislation for binding timelines) | Responsible Party |
|---|---|---|
| Initial / Preliminary Notification to NACSA | [e.g., Within 6 hours of becoming aware of a cybersecurity incident affecting NCII] | CISO |
| Detailed Incident Report to NACSA | [e.g., Within 72 hours] | CISO / GRC |
| Final / Post-Incident Report | [e.g., Within 14 days of incident closure] | CISO / GRC |

> **Important:** The reporting timelines above are indicative. The binding timelines are those prescribed in Act 854 and any subsidiary legislation, regulations, or directives issued by NACSA. [Organization Name] shall ensure that its Incident Response Procedure always reflects the current binding timelines.

**Organizational Obligations in Respect of Incident Reporting:**

- The CISO is the designated point of contact for all interactions with NACSA in relation to cybersecurity incidents.
- All cybersecurity incidents that meet the reporting threshold (as defined in the Incident Response Procedure) must be escalated to the CISO immediately.
- No unauthorized disclosure of cybersecurity incident details to external parties (including media) shall be made without prior authorization from the CISO and Legal.
- Incident records must be maintained for a minimum of [X years, per Act 854 / NACSA requirements / organizational policy].

**Evidence of Compliance:**

| Evidence Item | Location / Reference | Review Frequency |
|---|---|---|
| Incident Response Procedure | [File reference] | Annual |
| NACSA incident notification records | [File reference] | As required |
| Incident log / tracker | [File reference] | Ongoing |

### 7.5 Ongoing Compliance Management

*Describe how the organization manages ongoing compliance with Act 854 and tracks regulatory changes.*

[Organization Name] manages ongoing compliance with Act 854 through the following mechanisms:

- **Regulatory Watch:** The GRC function, in coordination with Legal, monitors for changes to Act 854, subsidiary legislation, NACSA directives, and related guidance, and assesses the impact of such changes on [Organization Name]'s compliance posture.
- **Compliance Register:** A compliance register is maintained documenting all obligations under Act 854, the status of compliance with each obligation, and the evidence of compliance.
- **Annual Compliance Review:** An annual review of compliance with Act 854 is conducted as part of the policy review cycle.
- **Regulatory Liaison:** The CISO maintains a professional working relationship with NACSA and the competent authority to ensure timely awareness of regulatory expectations and developments.

---

## 8. Security Controls and Requirements

### 8.1 Control Framework Overview

*Describe the security control framework used by the organization and how controls are mapped to Act 854 and NACSA requirements.*

[Organization Name] implements a comprehensive set of security controls to protect its NCII assets. Controls are implemented across the following domains, aligned to the [NACSA Cybersecurity Framework / ISO 27001:2022 / NIST CSF 2.0]:

| Control Domain | Description |
|---|---|
| Access Control and Identity Management | Controls governing who can access what resources, under what conditions, and with what level of privilege. |
| Network Security | Controls protecting the confidentiality, integrity, and availability of data in transit and network infrastructure. |
| Endpoint Security | Controls securing end-user devices, servers, and other endpoints. |
| Application Security | Controls ensuring that applications are developed, deployed, and operated securely. |
| Data Security | Controls protecting data at rest, in transit, and in use. |
| Cryptography | Controls ensuring appropriate use of cryptographic mechanisms to protect information. |
| Physical and Environmental Security | Controls protecting physical infrastructure and assets from unauthorized access and environmental hazards. |
| Vulnerability Management | Controls identifying, assessing, and remediating security vulnerabilities. |
| Logging, Monitoring, and Detection | Controls ensuring appropriate capture, retention, and analysis of security-relevant events. |
| Configuration Management | Controls ensuring systems are configured securely and configurations are maintained over time. |
| Change Management | Controls ensuring that changes to IT systems are managed in a controlled, secure manner. |
| Backup and Recovery | Controls ensuring that data can be recovered in the event of loss, corruption, or ransomware. |

### 8.2 Baseline Security Controls

*Define the baseline security controls that apply to all NCII assets. Reference relevant standards for implementation detail.*

The following baseline security controls are mandatory for all NCII assets (Tier 1 and Tier 2 criticality). Implementation standards for each control are documented in subordinate standards documents.

| Control ID | Control | Mandatory For | Standard Reference |
|---|---|---|---|
| AC-01 | Multi-Factor Authentication (MFA) for all privileged access | All NCII assets | [Access Control Standard] |
| AC-02 | Privileged Access Management (PAM) solution for administrative access | Tier 1 | [Access Control Standard] |
| AC-03 | Quarterly access rights review | All NCII assets | [Access Control Standard] |
| NS-01 | Network segmentation between NCII and non-NCII systems | All NCII assets | [Network Security Standard] |
| NS-02 | Next-Generation Firewall (NGFW) at all network perimeters | All NCII assets | [Network Security Standard] |
| NS-03 | Intrusion Detection / Prevention System (IDS/IPS) | Tier 1 | [Network Security Standard] |
| EP-01 | Endpoint Detection and Response (EDR) solution | All NCII assets | [Endpoint Security Standard] |
| VM-01 | Vulnerability scans — at minimum monthly for Tier 1 | All NCII assets | [Vulnerability Management Standard] |
| VM-02 | Penetration testing — at minimum annual for NCII systems | Tier 1 | [Vulnerability Management Standard] |
| LM-01 | Security Information and Event Management (SIEM) | Tier 1 | [Logging and Monitoring Standard] |
| LM-02 | Log retention — minimum [X months] for NCII systems | All NCII assets | [Logging and Monitoring Standard] |
| DS-01 | Encryption of NCII data at rest (AES-256 or equivalent) | All NCII assets | [Cryptography Standard] |
| DS-02 | Encryption of NCII data in transit (TLS 1.2 minimum) | All NCII assets | [Cryptography Standard] |
| BK-01 | Daily automated backups for Tier 1 systems | Tier 1 | [Backup and Recovery Standard] |
| BK-02 | Offsite / air-gapped backup storage | Tier 1 | [Backup and Recovery Standard] |

### 8.3 Enhanced Controls for Tier 1 NCII Assets

*Define enhanced controls that apply specifically to Tier 1 Mission Critical NCII assets.*

In addition to the baseline controls in Section 8.2, the following enhanced controls are mandatory for all Tier 1 Mission Critical NCII assets:

| Control ID | Control | Standard Reference |
|---|---|---|
| AC-04 | Just-In-Time (JIT) privileged access provisioning | [Access Control Standard] |
| NS-04 | Zero Trust Network Access (ZTNA) for remote access | [Network Security Standard] |
| NS-05 | DDoS mitigation capability | [Network Security Standard] |
| LM-03 | 24x7 SOC monitoring | [SOC Operations Procedure] |
| IR-01 | Defined and tested Incident Response Plan | [Incident Response Policy] |
| BK-03 | Recovery Time Objective (RTO) ≤ [X hours] | [BC/DR Policy] |
| BK-04 | Recovery Point Objective (RPO) ≤ [X hours] | [BC/DR Policy] |
| TH-01 | Threat intelligence feeds integrated with SIEM | [Threat Intelligence Procedure] |

---

## 9. Risk Management

### 9.1 Cybersecurity Risk Management Approach

*Describe the organization's approach to cybersecurity risk management, including how risk assessments are conducted, documented, and managed.*

[Organization Name] manages cybersecurity risk as an integral component of its enterprise risk management (ERM) framework. Cybersecurity risk is assessed, reported, and treated in accordance with the [Enterprise Risk Management Policy / Framework — Document ID].

### 9.2 Risk Assessment Methodology

*Define the methodology used to assess cybersecurity risk.*

Cybersecurity risk assessments at [Organization Name] are conducted using the following methodology:

**Risk Assessment Steps:**

1. **Asset Identification and Scoping** — Identify assets in scope for the assessment using the NCII Asset Register.
2. **Threat Identification** — Identify relevant threats to each asset using threat intelligence, historical incident data, and sector-specific threat information.
3. **Vulnerability Identification** — Identify vulnerabilities in assets through vulnerability scans, penetration tests, security reviews, and self-assessments.
4. **Impact Assessment** — Assess the potential impact (to confidentiality, integrity, and availability) of a successful exploit.
5. **Likelihood Assessment** — Assess the likelihood of a threat exploiting a vulnerability, considering existing controls.
6. **Risk Rating** — Calculate risk as a function of Likelihood × Impact using the risk matrix below.
7. **Control Evaluation** — Evaluate the effectiveness of existing controls and identify control gaps.
8. **Risk Treatment** — Determine appropriate risk treatment options (Accept / Treat / Transfer / Avoid) and define remediation actions.
9. **Residual Risk Assessment** — Assess the residual risk after proposed controls are implemented.
10. **Risk Reporting and Approval** — Report risk assessment findings to the CISO and, where applicable, the Risk Committee; obtain approval for risk acceptance decisions.

**Risk Matrix:**

| | **Impact — Low** | **Impact — Medium** | **Impact — High** | **Impact — Critical** |
|---|---|---|---|---|
| **Likelihood — Very High** | Medium | High | Critical | Critical |
| **Likelihood — High** | Medium | High | High | Critical |
| **Likelihood — Medium** | Low | Medium | High | Critical |
| **Likelihood — Low** | Low | Low | Medium | High |
| **Likelihood — Very Low** | Low | Low | Medium | High |

**Risk Rating Definitions:**

| Rating | Description | Required Action |
|---|---|---|
| **Critical** | Immediate risk to NCII functions or compliance | Immediate treatment required; CISO and executive escalation; report to NACSA if applicable |
| **High** | Significant risk requiring prompt treatment | Treatment within [30 days]; CISO oversight; Risk Committee notification |
| **Medium** | Moderate risk requiring planned treatment | Treatment within [90 days]; CISO monitoring |
| **Low** | Low risk manageable within normal operations | Treatment within [180 days] or risk acceptance |

### 9.3 Risk Register

*Define the requirements for maintaining a cybersecurity risk register.*

[Organization Name] shall maintain a **Cybersecurity Risk Register** documenting all identified cybersecurity risks. The Risk Register is a controlled document maintained by the GRC function and reviewed by the CISO.

**Minimum data elements:**

| Field | Description |
|---|---|
| Risk ID | Unique identifier |
| Risk Description | Clear description of the risk scenario |
| Affected Assets | Assets impacted by this risk |
| Threat | The threat that may exploit the vulnerability |
| Vulnerability | The weakness that the threat may exploit |
| Existing Controls | Controls currently in place |
| Inherent Likelihood | Likelihood without controls |
| Inherent Impact | Impact without controls |
| Inherent Risk Rating | Risk rating without controls |
| Residual Likelihood | Likelihood with existing controls |
| Residual Impact | Impact with existing controls |
| Residual Risk Rating | Risk rating with existing controls |
| Risk Treatment Decision | Accept / Treat / Transfer / Avoid |
| Treatment Actions | Specific actions to treat the risk |
| Risk Owner | Named individual accountable for managing the risk |
| Target Treatment Date | Target date for completion of treatment actions |
| Status | Open / In Progress / Treated / Accepted |
| Last Review Date | Date of last review |

---

## 10. Incident Management and Reporting

### 10.1 Incident Management Overview

*Describe the organization's approach to cybersecurity incident management, including the relationship between this policy and the detailed Incident Response Policy/Procedure.*

[Organization Name] maintains a formal cybersecurity incident management capability to detect, contain, investigate, remediate, and recover from cybersecurity incidents, with specific focus on incidents affecting NCII assets.

This section provides the policy-level framework for incident management. Detailed procedures are documented in the **[Incident Response Policy — Document ID]** and the **[Incident Response Procedure — Document ID]**.

### 10.2 Incident Classification

*Define the incident classification scheme used by the organization.*

Cybersecurity incidents are classified as follows:

| Severity Level | Definition | Initial Response Time | Escalation |
|---|---|---|---|
| **P1 — Critical** | Incident affecting NCII functions; confirmed breach of NCII system; active ransomware affecting NCII; incident with potential national security implications | [e.g., 15 minutes] | CISO, CEO, Board; NACSA notification required |
| **P2 — High** | Significant incident with potential to affect NCII; confirmed breach of non-NCII but sensitive system; significant data loss event | [e.g., 1 hour] | CISO, Senior Management |
| **P3 — Medium** | Moderate incident with limited business impact; suspected breach under investigation | [e.g., 4 hours] | SOC Manager, relevant IT Lead |
| **P4 — Low** | Minor incident; contained; no data loss; single user affected | [e.g., 24 hours] | SOC Analyst |

### 10.3 NACSA Incident Reporting Obligations

*State the statutory incident reporting obligations under Section 24 of Act 854.*

Under Section 24 of the Cyber Security Act 2024, [Organization Name] is obligated to report cybersecurity incidents to NACSA. Non-compliance constitutes a criminal offence under the Act.

**Reporting Decision Tree:**

1. Is the incident a "cybersecurity incident" as defined under Act 854?
   - If **Yes** → proceed to step 2.
   - If **Uncertain** → escalate to CISO immediately for determination.

2. Does the incident affect an NCII asset or the provision of NCII services?
   - If **Yes** → mandatory NACSA report required; CISO to be notified immediately.
   - If **No** → proceed to assess under other reporting obligations (PDPA, etc.).

3. Report to NACSA within prescribed timelines (refer to the current Incident Response Procedure for binding timelines).

**NACSA Reporting Point of Contact:**

| Field | Details |
|---|---|
| **Internal Reporting Contact** | CISO — [Name], [Email], [Phone] |
| **NACSA Reporting Portal / Channel** | [NACSA Incident Reporting Portal URL / Contact — refer to NACSA official guidance] |
| **Backup Contact** | [Deputy CISO / GRC Manager — Name, Email, Phone] |

---

## 11. Business Continuity and Resilience

### 11.1 Cybersecurity and Business Continuity

*Describe the relationship between cybersecurity and business continuity management.*

[Organization Name] recognizes that cybersecurity incidents, including ransomware, destructive malware, and large-scale DDoS attacks, represent a significant threat to business continuity. The cybersecurity and business continuity programs are therefore closely integrated.

The **[Business Continuity Policy — Document ID]** and **[Disaster Recovery Policy — Document ID]** provide the detailed framework for business continuity and disaster recovery. This section establishes the cybersecurity policy requirements that feed into those frameworks.

### 11.2 Resilience Requirements for NCII Assets

*Define the minimum resilience requirements for NCII assets.*

The following minimum resilience requirements apply to all Tier 1 NCII assets:

| Requirement | Minimum Standard | Asset Owner Obligation |
|---|---|---|
| Recovery Time Objective (RTO) | ≤ [X hours] | Define and document RTO for each NCII asset |
| Recovery Point Objective (RPO) | ≤ [X hours] | Define and document RPO for each NCII asset |
| Backup Frequency | [Daily / as per RPO] | Ensure backups are performed at required frequency |
| Backup Testing | [Quarterly restore tests] | Ensure backup restores are tested regularly |
| Disaster Recovery Testing | Annual full DR exercise | Participate in and support DR exercises |
| Alternate Site / Cloud Failover | Required for Tier 1 | Ensure alternate processing capability exists |

### 11.3 Cyber Incident Recovery

*Define the approach to recovering from cybersecurity incidents.*

Recovery from cybersecurity incidents affecting NCII assets shall be managed in accordance with the Incident Response Procedure and Business Continuity Plan. Key principles:

- Recovery activities shall prioritize restoration of Tier 1 NCII assets first.
- Recovery activities shall only commence after the threat has been contained and the compromised environment has been deemed safe for restoration.
- Forensic evidence must be preserved throughout the recovery process.
- Recovery activities must be coordinated with NACSA where the incident involves a notifiable cybersecurity incident.
- Post-recovery, a formal lessons learned review shall be conducted within [30 days] of incident closure.

---

## 12. Third-Party and Supply Chain Security

### 12.1 Third-Party Security Overview

*Describe the organization's approach to managing cybersecurity risk arising from third-party relationships.*

Third-party vendors, service providers, and technology partners represent a significant source of cybersecurity risk for [Organization Name]'s NCII assets. [Organization Name] manages this risk through a formal third-party security program.

### 12.2 Third-Party Security Risk Tiering

*Define the approach to classifying third parties by risk level.*

All third parties with access to [Organization Name]'s systems, data, or premises are classified into risk tiers based on:

- The criticality of the assets or data they access.
- The nature and depth of their access.
- Their geographic location and jurisdictional risk.
- Their own cybersecurity maturity.

| Tier | Definition | Due Diligence Level |
|---|---|---|
| **Tier A — Critical** | Third parties with access to Tier 1 NCII assets or systems; or managed security service providers. | Full security assessment; contractual security obligations; annual review; right to audit. |
| **Tier B — High** | Third parties with access to Tier 2 assets or sensitive data; cloud service providers. | Security questionnaire; contractual security obligations; annual review. |
| **Tier C — Medium** | Third parties with limited access to internal systems or data. | Security questionnaire; contractual security obligations; periodic review. |
| **Tier D — Low** | Third parties with no direct access to systems or data (e.g., physical goods suppliers). | Standard vendor due diligence; minimal security obligations. |

### 12.3 Third-Party Security Requirements

*Define the minimum security requirements for third-party relationships.*

The following requirements apply to all third-party relationships:

- **Contractual Security Obligations:** All agreements with third parties who access NCII assets must include binding security obligations appropriate to their risk tier.
- **Security Assessments:** Tier A and Tier B vendors must complete a security assessment (including questionnaire and, where warranted, on-site or virtual assessment) prior to engagement and annually thereafter.
- **Incident Notification:** All third parties must notify [Organization Name]'s CISO immediately (and no later than [X hours]) of any cybersecurity incident that affects or may affect [Organization Name]'s assets.
- **Right to Audit:** Agreements with Tier A vendors must include a right-to-audit clause entitling [Organization Name] to audit the vendor's security controls.
- **Sub-contracting:** Vendors must not sub-contract functions involving access to [Organization Name]'s NCII assets without prior written approval.
- **Termination:** [Organization Name] reserves the right to terminate a vendor relationship if the vendor fails to meet required security standards.

---

## 13. Awareness, Training, and Competency

### 13.1 Security Awareness Program

*Describe the security awareness and training program.*

[Organization Name] maintains a formal cybersecurity awareness program to ensure that all personnel have the knowledge and skills to fulfil their security responsibilities and to foster a security-conscious organizational culture.

### 13.2 Training Requirements by Role

*Define the training requirements for different staff categories.*

| Staff Category | Training Requirements | Frequency | Completion Deadline |
|---|---|---|---|
| **All Staff** | General cybersecurity awareness; phishing awareness; password security; incident reporting | Annual mandatory module; phishing simulation quarterly | Within 30 days of joining; annual renewal |
| **IT and Technology Staff** | General awareness + secure system administration; patch management; access control | Annual; plus role-specific updates as required | Within 30 days of joining; annual renewal |
| **Security Team** | General awareness + advanced incident response; threat intelligence; security tools | Annual; continuous professional development (CPD) | Ongoing |
| **CISO and Security Leadership** | General awareness + strategic security leadership; regulatory compliance; board reporting | Annual; plus executive security briefings | Ongoing |
| **Developers** | Secure coding practices; OWASP Top 10; security testing | Annual; plus project-specific training | Before commencing development on NCII systems |
| **Senior Management and Board** | Cybersecurity risk governance; regulatory obligations; cyber threat landscape | Annual executive briefing | Annual |

### 13.3 Phishing Simulation

*Define the requirements for phishing simulation exercises.*

[Organization Name] shall conduct regular phishing simulation exercises to measure and improve staff resilience to social engineering attacks:

- Frequency: Minimum [quarterly] simulations.
- Scope: All staff.
- Consequence Management: Staff who repeatedly fail phishing simulations shall receive targeted remedial training. Persistent failures may be subject to disciplinary action under the HR disciplinary policy.
- Reporting: Phishing simulation results shall be reported to the CISO monthly.

---

## 14. Policy Exception Process

### 14.1 Exception Philosophy

*Describe the organization's philosophy on policy exceptions.*

[Organization Name] recognizes that there may be legitimate operational, technical, or commercial circumstances where full compliance with this policy or a subordinate cybersecurity document is not immediately achievable. However, exceptions represent increased cybersecurity risk and must be formally managed to ensure that risks are explicitly acknowledged, mitigated where possible, and time-bound.

Exceptions are not a mechanism for indefinitely deferring compliance obligations. All exceptions must have a defined remediation path and expiry date.

### 14.2 Exception Eligibility

*Define what can and cannot be the subject of an exception.*

**Exceptions may be requested for:**

- Specific technical controls that are operationally impractical due to legacy system limitations.
- Specific procedural requirements where business operations necessitate a temporary deviation.
- Timelines prescribed in this policy or subordinate standards where remediation requires longer than the standard timeframe.

**Exceptions may NOT be requested for:**

- Any obligation imposed directly by Act 854 or subsidiary legislation (statutory obligations cannot be excepted at the organizational level).
- Incident reporting obligations.
- Any control that is mandatory under a NACSA directive or competent authority requirement.

### 14.3 Exception Process

*Define the step-by-step process for requesting, approving, and managing policy exceptions.*

**Step 1 — Exception Request**

The requestor (Asset Owner or relevant Head of Department) submits an Exception Request Form to the CISO documenting:

- The specific policy requirement from which exception is sought.
- The technical or operational reason why compliance is not achievable.
- The cybersecurity risk created by the exception.
- Proposed compensating controls to mitigate the risk.
- The proposed exception duration (maximum [12 months]).
- The proposed remediation plan to achieve full compliance.

**Step 2 — Risk Assessment**

The GRC function conducts a risk assessment of the proposed exception and compensating controls.

**Step 3 — Approval**

| Exception Risk Rating | Approval Authority |
|---|---|
| Low / Medium | CISO |
| High | CISO + CRO / Risk Committee |
| Critical | CISO + CRO + CEO + Board Risk Committee |

**Step 4 — Implementation of Compensating Controls**

Approved compensating controls must be implemented before the exception takes effect.

**Step 5 — Exception Register**

All approved exceptions are recorded in the Exception Register maintained by the GRC function.

**Step 6 — Monitoring and Review**

The CISO reviews all open exceptions [monthly]. The GRC function tracks exception expiry dates and ensures that exceptions are renewed or remediated before expiry.

**Step 7 — Expiry**

At the expiry date, the exception must either:
- Be renewed (with fresh justification and approval); or
- Be remediated (full compliance achieved); or
- Be escalated as a compliance risk if neither option is possible.

### 14.4 Exception Register

*Define the minimum content of the Exception Register.*

| Field | Description |
|---|---|
| Exception ID | Unique identifier |
| Asset / System | Asset or system to which the exception applies |
| Policy Requirement | The specific policy requirement from which exception is sought |
| Justification | Reason for exception |
| Risk Rating | Risk rating of the exception |
| Compensating Controls | Controls implemented to mitigate risk |
| Approval Authority | Who approved the exception |
| Approval Date | Date of approval |
| Expiry Date | Date exception expires |
| Remediation Plan | Plan to achieve full compliance |
| Status | Active / Expired / Remediated |

---

## 15. Monitoring, Audit, and Enforcement

### 15.1 Monitoring

*Describe the monitoring mechanisms used to ensure compliance with this policy.*

Compliance with this policy and subordinate cybersecurity documents is monitored through the following mechanisms:

| Mechanism | Description | Frequency |
|---|---|---|
| Continuous Security Monitoring | SIEM-based monitoring of security events across NCII assets | Continuous (24x7 for Tier 1) |
| Vulnerability Scanning | Automated scanning for technical vulnerabilities | [Monthly for Tier 1 / Quarterly for Tier 2] |
| Access Reviews | Periodic review of user access rights | Quarterly |
| Configuration Reviews | Review of system configurations against security baselines | [Semi-annual] |
| Policy Compliance Assessments | Self-assessment against policy requirements | Annual |
| Security Metrics Reporting | KPI and KRI tracking and reporting | Monthly (to CISO); Quarterly (to Risk Committee) |

### 15.2 Internal Audit

*Describe the internal audit program for cybersecurity.*

[Organization Name]'s [Internal Audit / Internal Cybersecurity Audit] function shall conduct regular cybersecurity audits to provide independent assurance on the effectiveness of the cybersecurity program:

- **Annual Cybersecurity Audit:** A comprehensive audit of compliance with this policy and key subordinate standards, conducted by Internal Audit or an independent third-party auditor.
- **Thematic Audits:** Targeted audits of specific cybersecurity domains (e.g., access management, incident response, third-party security) as directed by the Audit Committee.
- **NACSA Assessments:** [Organization Name] cooperates fully with all cybersecurity assessments initiated by NACSA under Act 854.

Audit findings are reported to the CISO, the Risk Committee, and the Audit Committee. Management responses and remediation plans are documented and tracked to closure.

### 15.3 Enforcement and Disciplinary Action

*Define the consequences of non-compliance with this policy.*

Non-compliance with this policy is a serious matter that may expose [Organization Name] to cybersecurity risk, regulatory sanction, and legal liability.

The following enforcement framework applies:

| Nature of Non-Compliance | Consequence |
|---|---|
| Unintentional / minor breach; first occurrence | Verbal warning; mandatory remedial training. |
| Repeated or deliberate minor breach | Written warning; mandatory remedial training; access restrictions as appropriate. |
| Serious breach (e.g., unauthorized disclosure of NCII data; deliberate circumvention of security controls) | Formal disciplinary action up to and including termination of employment or contract; referral to law enforcement where applicable. |
| Breach resulting in NCII compromise or significant harm | Formal disciplinary action up to and including termination; referral to law enforcement; potential personal liability under Act 854 or other applicable legislation. |

Disciplinary proceedings shall be conducted in accordance with the organization's HR disciplinary policy and applicable employment law.

### 15.4 Personal Liability under Act 854

*Remind staff of personal liability provisions under Act 854.*

> **Important Notice to All Staff:** The Cyber Security Act 2024 (Act 854) imposes personal liability on individuals for certain cybersecurity offences, including unauthorized access, interference with NCII systems, and failure to report cybersecurity incidents where required. Personnel who deliberately or recklessly breach this policy may be personally liable under Act 854 and other applicable legislation in addition to facing internal disciplinary action.

---

## 16. Review and Update Cycle

### 16.1 Policy Review Schedule

*Define the schedule and triggers for reviewing and updating this policy.*

This policy shall be reviewed on the following basis:

| Review Trigger | Timing | Responsible Party |
|---|---|---|
| **Scheduled Annual Review** | Within [12 months] of the Effective Date of this version, and annually thereafter | CISO |
| **Material Regulatory Change** | Within [60 days] of a material change to Act 854, subsidiary legislation, or NACSA directives that affects policy content | CISO / Legal |
| **Material Incident** | Following any cybersecurity incident rated P1 or P2 that reveals a gap or inadequacy in this policy | CISO |
| **Material Technology Change** | Following a significant change to [Organization Name]'s technology architecture or NCII asset inventory that is not addressed by this policy | CISO |
| **External Audit Finding** | Following any external or NACSA audit finding that identifies a material deficiency in this policy | CISO / GRC |
| **Board or Risk Committee Direction** | As directed by the Board or Risk Committee | CISO |

### 16.2 Review Process

*Define the process for reviewing and updating this policy.*

1. The CISO (or their delegate) initiates the policy review process in accordance with the trigger above.
2. The GRC team conducts a gap analysis against current regulatory requirements, threat landscape, and organizational changes.
3. Draft amendments are prepared and circulated to relevant stakeholders for review and comment (stakeholders include: Legal, Risk, relevant Business Units, IT, HR).
4. A revised draft is presented to the [Risk Committee / Cybersecurity Steering Committee] for review and recommendation.
5. The policy is submitted for approval to the appropriate approving authority (as defined in the document header).
6. Upon approval, the updated policy is issued, versioned, and communicated to all staff.
7. The version history table in Section 18 is updated accordingly.

### 16.3 Communication of Policy Updates

*Define how policy updates are communicated to relevant stakeholders.*

Upon approval of any update to this policy:

- All staff are notified via [email / intranet / organization-wide communication].
- Staff are required to re-acknowledge the updated policy within [30 days] of issue via [acknowledgement mechanism].
- Third parties who are required to comply with this policy are notified of material changes via the Third-Party Management process.
- The updated policy is published on [the organization's intranet / document management system — specify location].

---

## 17. Roles and Responsibilities — RACI Matrix

*This RACI matrix summarizes the assignment of roles and responsibilities across key cybersecurity activities. R = Responsible; A = Accountable; C = Consulted; I = Informed.*

| Activity | Board | Risk Committee | CEO | CISO | Security Team | Asset Owner | IT Dept | HR | Legal | GRC | All Staff |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Governance and Strategy** | | | | | | | | | | | |
| Approve NCII Cybersecurity Policy | A | C | C | R | C | I | I | I | C | C | I |
| Set cybersecurity risk appetite | A | R | C | C | — | — | — | — | C | C | — |
| Allocate cybersecurity budget | A | C | R | C | — | — | — | — | — | — | — |
| Receive Board cybersecurity report | I | — | I | R | C | — | — | — | — | C | — |
| **Asset Management** | | | | | | | | | | | |
| Maintain NCII Asset Register | I | I | I | A | C | R | C | — | — | C | — |
| Classify NCII assets | — | — | — | A | C | R | C | — | — | — | — |
| Review and certify asset classification | — | — | — | A | — | R | — | — | — | C | — |
| **Risk Management** | | | | | | | | | | | |
| Conduct cybersecurity risk assessment | — | I | I | A | R | C | C | — | — | R | — |
| Maintain cybersecurity risk register | — | I | — | A | C | — | — | — | — | R | — |
| Approve risk treatment plans | — | R | — | A | — | C | — | — | — | R | — |
| Accept residual cybersecurity risk | — | A | — | R | — | C | — | — | — | C | — |
| **Incident Management** | | | | | | | | | | | |
| Detect cybersecurity incidents | — | — | — | A | R | — | C | — | — | — | C |
| Respond to cybersecurity incidents | — | — | I | A | R | C | C | — | C | — | — |
| Report to NACSA (Act 854 s24) | I | I | I | R/A | C | — | — | — | C | C | — |
| Conduct post-incident review | — | I | I | A | R | C | C | — | — | C | — |
| **Compliance** | | | | | | | | | | | |
| Monitor Act 854 compliance | — | I | I | A | C | — | — | — | C | R | — |
| Manage regulatory relationship (NACSA) | I | I | C | R/A | C | — | — | — | C | C | — |
| Coordinate NACSA audits/assessments | — | I | I | A | C | C | C | — | C | R | — |
| **Third-Party Management** | | | | | | | | | | | |
| Conduct third-party security assessments | — | I | — | A | C | C | — | — | C | R | — |
| Approve Tier A vendor engagements | — | R | C | A | C | — | — | — | C | C | — |
| **Training and Awareness** | | | | | | | | | | | |
| Deliver security awareness training | — | — | I | A | R | — | C | C | — | C | — |
| Monitor training completion rates | — | I | — | A | C | — | — | C | — | R | — |
| **Policy Management** | | | | | | | | | | | |
| Review cybersecurity policy | I | C | C | A | C | C | C | C | C | R | — |
| Enforce policy compliance | — | — | — | A | C | R | C | R | C | C | — |
| Manage policy exceptions | — | C | — | A | C | C | — | — | C | R | — |

---

## 18. Review and Approval

### 18.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 0.1 | [Date] | [Author Name / Role] | [Reviewer Name / Role] | Initial draft for internal review |
| 0.2 | [Date] | [Author Name / Role] | [Reviewer Name / Role] | Revised following internal review comments |
| 0.9 | [Date] | [Author Name / Role] | [Reviewer Name / Role] | Final draft submitted for approval |
| 1.0 | [Date] | [Author Name / Role] | [Reviewer Name / Role] | Approved version — initial issue |

### 18.2 Approval Sign-Off

*The following individuals confirm that they have reviewed this policy and that it is approved for issue.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Chief Information Security Officer** | [Name] | ___________________________ | [Date] |
| **Chief Risk Officer / Risk Committee Chair** | [Name] | ___________________________ | [Date] |
| **Chief Executive Officer** | [Name] | ___________________________ | [Date] |
| **Board Representative / Board Chair** | [Name] | ___________________________ | [Date] |
| **[Other Approver — if required]** | [Name] | ___________________________ | [Date] |

### 18.3 Acknowledgement

*By signing below, the following parties acknowledge that they have read, understood, and accept the obligations imposed by this policy.*

| Role | Name | Department | Signature | Date |
|---|---|---|---|---|
| [Role] | [Name] | [Department] | ___________________________ | [Date] |
| [Role] | [Name] | [Department] | ___________________________ | [Date] |
| [Role] | [Name] | [Department] | ___________________________ | [Date] |

---

## 19. References

### 19.1 Legislation and Subsidiary Legislation

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), s17** | Designation of National Critical Information Infrastructure entities |
| **Cyber Security Act 2024 (Act 854), s18** | Cybersecurity measures for NCII entities, including policy development, risk assessment, and cooperation obligations |
| **Cyber Security Act 2024 (Act 854), s24** | Mandatory cybersecurity incident reporting obligations for NCII entities |
| **Computer Crimes Act 1997 (Act 563)** | Criminal offences relating to unauthorized access and computer misuse |
| **Personal Data Protection Act 2010 (Act 709)** | Data protection obligations, including security of personal data |
| **[Financial Services Act 2013 (Act 758)]** | [Include if applicable] |
| **[Islamic Financial Services Act 2013 (Act 759)]** | [Include if applicable] |

### 19.2 Regulatory Guidelines and Directives

| Reference | Issuing Authority | Description |
|---|---|---|
| [NACSA Cybersecurity Framework for NCII] | NACSA | [Description and version] |
| [NACSA Directive / Circular Reference] | NACSA | [Description] |
| [BNM Risk Management in Technology (RMiT) Policy Document] | Bank Negara Malaysia | [Include if applicable] |
| [Other NACSA / regulatory guidance] | [Authority] | [Description] |

### 19.3 Standards and Frameworks

| Reference | Description |
|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements |
| ISO/IEC 27002:2022 | Information Security Controls |
| NIST Cybersecurity Framework (CSF) 2.0 | Cybersecurity Framework for critical infrastructure |
| CIS Controls v8 | Center for Internet Security Critical Security Controls |
| NIST SP 800-53 | Security and Privacy Controls for Information Systems and Organizations |
| OWASP Top 10 | Open Web Application Security Project — Top 10 Security Risks |

### 19.4 Internal Related Documents

| Document Title | Document ID | Owner |
|---|---|---|
| Acceptable Use Policy | [Doc ID] | CISO |
| Access Control Policy | [Doc ID] | CISO |
| Data Classification and Handling Policy | [Doc ID] | CISO |
| Incident Response Policy | [Doc ID] | CISO |
| Vulnerability Management Policy | [Doc ID] | CISO |
| Business Continuity Policy | [Doc ID] | [BCP Owner] |
| Third-Party and Vendor Security Policy | [Doc ID] | CISO |
| Network Security Policy | [Doc ID] | CISO |
| Cloud Security Policy | [Doc ID] | CISO |
| Cryptography Policy | [Doc ID] | CISO |
| NCII Asset Register | [Doc ID] | CISO |
| Cybersecurity Risk Register | [Doc ID] | CISO / GRC |
| Exception Register | [Doc ID] | GRC |

---

## 20. Appendices

### Appendix A — Glossary of Terms

*This appendix defines key terms used in this policy.*

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary legislation governing cybersecurity for NCII entities in Malaysia. |
| **Asset Owner** | The senior individual accountable for the security and classification of a specific asset. |
| **Availability** | The property of being accessible and usable upon demand by an authorized entity. |
| **CISO** | Chief Information Security Officer — the designated responsible officer for cybersecurity under s18 of Act 854. |
| **Competent Authority** | The relevant sector-specific regulator or government agency designated under Act 854 for a given NCII sector. |
| **Confidentiality** | The property that information is not made available or disclosed to unauthorized individuals, entities, or processes. |
| **Cybersecurity Incident** | An event that compromises or has the potential to compromise the confidentiality, integrity, or availability of information systems or information held therein, as defined in Act 854. |
| **GRC** | Governance, Risk, and Compliance — the function responsible for policy management, risk assessment, and compliance monitoring. |
| **Integrity** | The property of safeguarding the accuracy and completeness of assets. |
| **NACSA** | National Cyber Security Agency — the national authority for cybersecurity in Malaysia. |
| **NCII** | National Critical Information Infrastructure — information and communications technology systems, facilities, and organizations whose disruption or destruction would have a serious impact on the national security, economy, public health, or safety of Malaysia. |
| **NCII Entity** | An organization designated as an NCII entity under Section 17 of Act 854. |
| **PDPA** | Personal Data Protection Act 2010 (Act 709). |
| **Policy Exception** | A formally approved deviation from a requirement of this policy or a subordinate cybersecurity document. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a framework for assigning roles and responsibilities. |
| **RPO** | Recovery Point Objective — the maximum tolerable period in which data may be lost due to an incident. |
| **RTO** | Recovery Time Objective — the maximum tolerable period within which a system must be restored following an incident. |
| **SIEM** | Security Information and Event Management — a system for aggregating, correlating, and analysing security event data. |
| **SOC** | Security Operations Centre — the team responsible for monitoring, detecting, and responding to cybersecurity events. |
| **Threat** | A potential cause of an unwanted incident that may result in harm to a system or organization. |
| **Vulnerability** | A weakness of an asset or control that can be exploited by a threat. |
| **[Additional Term]** | [Definition] |

---

### Appendix B — NCII Asset Register Template

*This appendix provides the standard template for the NCII Asset Register maintained under Section 4.4 of this policy.*

| Asset ID | Asset Name | Asset Type | Asset Owner | Asset Custodian | Criticality Tier | Information Classification | NCII Designated | Location | Dependencies | Last Review Date | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|---|
| NCII-001 | [Asset Name] | [Type] | [Name / Role] | [Team / Role] | Tier 1 | Level 1 | Yes | [Location] | [Dependencies] | [Date] | [Remarks] |
| NCII-002 | [Asset Name] | [Type] | [Name / Role] | [Team / Role] | Tier 2 | Level 2 | Yes | [Location] | [Dependencies] | [Date] | [Remarks] |
| NCII-003 | [Asset Name] | [Type] | [Name / Role] | [Team / Role] | Tier 3 | Level 3 | No | [Location] | [Dependencies] | [Date] | [Remarks] |

---

### Appendix C — Policy Exception Request Form

*This appendix provides the standard form for requesting a policy exception under Section 14 of this policy.*

---

**POLICY EXCEPTION REQUEST FORM**

| Field | Details |
|---|---|
| **Exception Request ID** | [Auto-generated by GRC on receipt] |
| **Date of Request** | [Date] |
| **Requestor Name** | [Name] |
| **Requestor Role / Department** | [Role / Department] |
| **Asset(s) Affected** | [Asset name and ID from NCII Asset Register] |

**Section 1 — Policy Requirement**

*Identify the specific policy requirement from which exception is sought.*

Policy document reference: _______________________________________________

Specific policy clause / requirement: _______________________________________________

**Section 2 — Reason for Exception**

*Describe the technical or operational reason why full compliance cannot be achieved within the standard timeframe. Attach supporting documentation if required.*

[Free text — minimum 50 words required]

**Section 3 — Risk Assessment**

*Describe the cybersecurity risk that arises from the non-compliance.*

Potential impact of non-compliance: _______________________________________________

Threat scenarios: _______________________________________________

**Section 4 — Proposed Compensating Controls**

*Describe the controls that will be implemented to mitigate the risk during the exception period.*

| Compensating Control | Implementation Date | Responsible Party |
|---|---|---|
| [Control description] | [Date] | [Name / Role] |
| [Control description] | [Date] | [Name / Role] |

**Section 5 — Remediation Plan**

*Describe the plan to achieve full compliance.*

Target full compliance date: _______________________________________________

Remediation steps: _______________________________________________

**Section 6 — Exception Duration**

Requested exception start date: _______________________________________________

Requested exception expiry date: _______________________________________________

*(Maximum exception duration: 12 months — exceptions may be renewed with fresh justification and approval)*

**Section 7 — Requestor Acknowledgement**

I acknowledge that:
- This exception represents increased cybersecurity risk to [Organization Name].
- The compensating controls described above will be implemented by the stated date.
- I will notify the CISO immediately if the risk profile changes during the exception period.
- I will pursue the remediation plan to achieve full compliance by the stated date.

Requestor Signature: ___________________________ Date: _______________

**Section 8 — GRC Review**

Risk Assessment Outcome: _______________________________________________

GRC Recommended Risk Rating: [ ] Low [ ] Medium [ ] High [ ] Critical

GRC Reviewer: ___________________________ Date: _______________

**Section 9 — Approval**

| Outcome | Approved By | Signature | Date |
|---|---|---|---|
| [ ] Approved [ ] Rejected [ ] Approved with conditions | [CISO / CRO / Board] | ___________________________ | [Date] |

Conditions of approval (if any): _______________________________________________

---

### Appendix D — Cybersecurity Incident Reporting Quick Reference

*This appendix provides a quick-reference guide for staff on how and when to report cybersecurity incidents.*

---

**CYBERSECURITY INCIDENT REPORTING — QUICK REFERENCE**

**If you suspect a cybersecurity incident, act immediately:**

**Step 1 — Do NOT:**
- Attempt to fix the problem yourself.
- Delete files, logs, or emails related to the incident.
- Discuss the incident with colleagues, media, or on social media.
- Power off systems unless instructed to do so by the Security Team.

**Step 2 — Report immediately to:**

| Contact | Details |
|---|---|
| **Security Operations Centre (SOC)** | [Phone Number] / [Email] (24x7) |
| **IT Helpdesk** | [Phone Number] / [Email] |
| **Your Line Manager** | (for escalation awareness) |

**Step 3 — Information to provide:**
- Your name, department, and contact number.
- What you observed (describe the incident as clearly as possible).
- When you first noticed the issue.
- Which systems, devices, or accounts are involved.
- Any actions you have already taken.

**Examples of incidents to report:**
- Ransomware or malware infection messages on your device.
- Suspected phishing emails received (especially those requesting credentials).
- Unauthorized access to your account or device.
- Lost or stolen devices containing organizational data.
- Unusual system behaviour that may indicate compromise.
- Requests from unknown parties for organizational information.

> **NACSA Reporting Obligation:** Under the Cyber Security Act 2024 (Act 854), [Organization Name] is required to report certain cybersecurity incidents to NACSA. Do not delay reporting to the SOC — early reporting is essential to meet statutory timelines.

---

### Appendix E — Regulatory Compliance Mapping

*This appendix provides a mapping of this policy's sections to the specific requirements of Act 854 and other applicable regulations.*

| Policy Section | Policy Requirement | Act 854 Reference | Other Regulatory Reference |
|---|---|---|---|
| Section 2 | NCII designation acknowledgement and obligations | s17, s18 | — |
| Section 3 | Cybersecurity policy objectives | s18 | [ISO 27001 cl. 5.2] |
| Section 4 | NCII asset identification and classification | s18 | [ISO 27001 cl. 8.1.1] |
| Section 5 | Roles and responsibilities; designated responsible officer | s18 | [ISO 27001 cl. 5.3] |
| Section 6 | Security governance framework | s18 | [ISO 27001 cl. 5, 6] |
| Section 7 | Compliance obligations | s17, s18, s24 | — |
| Section 8 | Security controls and requirements | s18 | [NACSA Framework / ISO 27002] |
| Section 9 | Risk management | s18 | [ISO 27001 cl. 6.1] |
| Section 10 | Incident management and NACSA reporting | s24 | [ISO 27001 cl. 16] |
| Section 11 | Business continuity and resilience | s18 | [ISO 27001 cl. 17] |
| Section 12 | Third-party and supply chain security | s18 | [ISO 27001 cl. 15] |
| Section 13 | Awareness and training | s18 | [ISO 27001 cl. 7.2, 7.3] |
| Section 14 | Policy exception process | s18 | — |
| Section 15 | Monitoring, audit, and enforcement | s18 | [ISO 27001 cl. 9] |
| Section 16 | Review and update cycle | s18 | [ISO 27001 cl. 10] |

---

### Appendix F — Contact Directory

*This appendix provides contact details for key cybersecurity roles and external reporting channels.*

| Role / Organization | Name | Email | Phone | Availability |
|---|---|---|---|---|
| **Chief Information Security Officer (CISO)** | [Name] | [Email] | [Phone] | Business hours; on-call for P1 |
| **Deputy CISO / Security Manager** | [Name] | [Email] | [Phone] | Business hours; on-call for P1 |
| **Security Operations Centre (SOC)** | N/A | [Email] | [Phone] | 24x7 |
| **IT Helpdesk** | N/A | [Email] | [Phone] | [Hours] |
| **GRC Manager** | [Name] | [Email] | [Phone] | Business hours |
| **Legal Counsel** | [Name] | [Email] | [Phone] | Business hours; on-call for P1 |
| **NACSA (Incident Reporting)** | N/A | [Refer to NACSA official website for current contact] | [Refer to NACSA] | [Refer to NACSA] |
| **[Competent Authority]** | [Name / Department] | [Email] | [Phone] | Business hours |
| **[External MSSP — if applicable]** | [Name] | [Email] | [Phone] | [Hours per SLA] |

---

*End of Document*

---

**Document Control:** This document is classified **Confidential** and is subject to the document control requirements of [Organization Name]'s Information Security Management System. The master copy of this document is maintained in [Document Management System / SharePoint / specified location]. Printed copies are uncontrolled — verify currency against the master copy before use.

**Next Review Due:** [Next Review Date]