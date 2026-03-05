# Business Continuity and Disaster Recovery Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CRO / CISO |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to any third party without the prior written approval of the [Organization Name] Chief Risk Officer (CRO) or Chief Information Security Officer (CISO). All printed copies are considered uncontrolled unless stamped "Controlled Copy."

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Policy Statements](#5-policy-statements)
6. [Recovery Time Objectives and Recovery Point Objectives for NCII Systems](#6-recovery-time-objectives-and-recovery-point-objectives-for-ncii-systems)
7. [Business Impact Analysis Methodology](#7-business-impact-analysis-methodology)
8. [Recovery Prioritisation](#8-recovery-prioritisation)
9. [Testing Frequency and Scenarios](#9-testing-frequency-and-scenarios)
10. [Alternate Site Arrangements](#10-alternate-site-arrangements)
11. [Communication and Notification](#11-communication-and-notification)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Compliance and Enforcement](#13-compliance-and-enforcement)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the primary purpose of this policy, including the obligations it fulfils and the outcomes it is designed to achieve. Reference the regulatory mandate.*

This policy establishes the framework, requirements, and governance structure for [Organization Name]'s Business Continuity and Disaster Recovery (BCDR) programme, with specific focus on ensuring the resilience and recoverability of National Critical Information Infrastructure (NCII) systems and services under the stewardship of [Organization Name].

The purpose of this policy is to:

- Ensure [Organization Name] maintains the ability to sustain, or promptly restore, critical business functions and NCII-designated services during and following disruptive events, including cyberattacks, natural disasters, technical failures, and other incidents.
- Define minimum acceptable levels of service continuity through formally established Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) for all NCII systems.
- Establish a structured Business Impact Analysis (BIA) process to identify, assess, and prioritise the recovery of critical systems and functions.
- Mandate regular testing of Business Continuity Plans (BCP) and Disaster Recovery Plans (DRP) to validate their effectiveness.
- Fulfil obligations imposed on [Organization Name] as a designated NCII entity under the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 23.
- Support [Organization Name]'s broader enterprise risk management and operational resilience strategies.

---

## 2. Scope

*Define the boundaries of this policy — which systems, processes, entities, and personnel are covered. Be explicit about what is in scope and what is excluded.*

### 2.1 In-Scope Systems and Services

This policy applies to:

- All **NCII systems** operated, managed, or maintained by [Organization Name] as identified in the current NCII Asset Register.
- All **critical business processes** identified through the Business Impact Analysis (BIA) that support NCII functions.
- All **technology platforms, infrastructure components, and data repositories** that underpin NCII services, including but not limited to:
  - Core banking and payment processing systems
  - Customer data management platforms
  - Network and communication infrastructure
  - Data centres (primary and alternate)
  - Cloud service environments designated as NCII-supporting
  - Third-party hosted systems where [Organization Name] retains operational responsibility
- All **personnel** employed by or contracted to [Organization Name] who have responsibilities related to business continuity or disaster recovery.
- All **subsidiaries and affiliates** of [Organization Name] that operate systems categorised as NCII or that provide services integral to NCII continuity.

### 2.2 Out-of-Scope

The following are explicitly excluded from this policy unless otherwise stated:

- Non-critical internal administrative systems with no dependency to NCII functions (refer to Appendix A for the complete NCII system classification matrix).
- Contracted third parties who operate their own independent BCDR frameworks — however, [Organization Name] retains the right to audit and assess the adequacy of third-party BCDR capabilities where service interdependencies exist.
- Personal computing devices of employees, unless specifically integrated into a continuity response.

### 2.3 Geographic Scope

This policy applies to all [Organization Name] operations within **Malaysia**. Where [Organization Name] operates internationally, the requirements of this policy represent minimum standards, and local regulatory requirements shall be assessed in conjunction with this policy.

---

## 3. Regulatory Context

*Reference all applicable legislation, regulations, directives, and standards that inform or mandate this policy. Provide specific section citations.*

[Organization Name]'s BCDR obligations arise from, and this policy is designed to comply with, the following regulatory instruments:

### 3.1 Primary Legislation — Cyber Security Act 2024 (Act 854)

| Section | Title | Obligation |
|---|---|---|
| **Section 18** | Duties of NCII Sector Leads and NCII Entities | Requires NCII entities to develop, implement, and maintain business continuity measures commensurate with the criticality of the infrastructure, and to submit continuity plans to the sector lead or National Cyber Security Agency (NACSA) upon request. |
| **Section 23** | Directions by the Chief Executive | Empowers the NACSA Chief Executive to issue binding directions to NCII entities regarding the conduct of risk assessments, security audits, penetration tests, and the implementation of specific security measures, including continuity controls. |

### 3.2 Supporting Regulatory Instruments

| Instrument | Issuing Authority | Relevance |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Technology risk management and business continuity requirements for financial institutions. |
| Guidelines on Business Continuity Management | Bank Negara Malaysia (BNM) | Specific BCP/DRP requirements for licensed financial institutions. |
| Personal Data Protection Act 2010 (PDPA) | Ministry of Digital | Obligations to protect personal data during and following incidents. |
| National Cyber Security Policy (NCSP) | Government of Malaysia | National framework for cyber security governance and resilience. |
| ISO/IEC 27031:2011 | ISO/IEC | Guidelines for ICT readiness for business continuity. |
| ISO 22301:2019 | ISO/IEC | Business Continuity Management System (BCMS) standard — used as a technical reference. |
| NIST SP 800-34 Rev.1 | NIST | Contingency Planning Guide for Federal Information Systems — used as a technical reference. |

### 3.3 Internal Policy Hierarchy

This policy is a Level 2 Policy within [Organization Name]'s policy framework and operates under the authority of:

- [Organization Name] Information Security Policy (Level 1)
- [Organization Name] Enterprise Risk Management Policy (Level 1)

Subordinate standards, procedures, and guidelines that operationalise this policy are listed in Section 15 (References) and Appendix G.

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Business Continuity** | The capability of [Organization Name] to continue delivering products and services at acceptable predefined levels following a disruptive incident. |
| **Business Continuity Plan (BCP)** | A documented collection of procedures and information developed, compiled, and maintained in readiness for use in an incident to enable [Organization Name] to continue to deliver its critical activities at an acceptable predefined level. |
| **Business Impact Analysis (BIA)** | A process of analysing business functions and the effect that a disruption might have upon them, used to determine recovery priorities and inform RTO/RPO targets. |
| **Critical Business Function (CBF)** | A function or process that, if disrupted, would result in a significant adverse impact on [Organization Name]'s ability to deliver NCII services or meet regulatory obligations. |
| **Disaster Recovery (DR)** | The process, policies, and procedures related to preparing for recovery or continuation of technology infrastructure critical to [Organization Name] following a natural or human-induced disaster. |
| **Disaster Recovery Plan (DRP)** | A documented plan that describes the procedures to be followed to recover technology infrastructure and systems following a disaster. |
| **Maximum Acceptable Outage (MAO)** | The maximum time that a business process can be unavailable before the consequences become unacceptable to [Organization Name] or its stakeholders. Also referred to as Maximum Tolerable Period of Disruption (MTPD). |
| **National Critical Information Infrastructure (NCII)** | As defined under the Cyber Security Act 2024 (Act 854), any computer or computer system, the loss or compromise of which would have a serious detrimental effect on the delivery of essential services, national security, or national interest. |
| **NCII Entity** | An organisation designated by the relevant sector lead as owning, operating, or maintaining NCII, including [Organization Name]. |
| **Recovery Point Objective (RPO)** | The maximum targeted age of files or data that must be recovered from backup storage for normal operations to resume after a disaster. Represents the maximum acceptable data loss. |
| **Recovery Time Objective (RTO)** | The targeted duration of time within which a business process or system must be restored after a disaster in order to avoid unacceptable consequences associated with the disruption. |
| **Resilience** | The adaptive capacity of [Organization Name] to withstand the effects of an event, incident, or crisis. |
| **Sector Lead** | The government ministry or agency designated under the Cyber Security Act 2024 as responsible for overseeing cyber security within a specific NCII sector. |
| **Warm/Cold/Hot Site** | Alternate processing facilities at varying states of readiness — Hot sites are immediately operational; Warm sites require some activation time; Cold sites require full equipment provisioning. |

### 4.2 Abbreviations

| Abbreviation | Expansion |
|---|---|
| BCP | Business Continuity Plan |
| BCDR | Business Continuity and Disaster Recovery |
| BCMS | Business Continuity Management System |
| BIA | Business Impact Analysis |
| BNM | Bank Negara Malaysia |
| CBF | Critical Business Function |
| CISO | Chief Information Security Officer |
| CRO | Chief Risk Officer |
| DRP | Disaster Recovery Plan |
| MAO | Maximum Acceptable Outage |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| NCSP | National Cyber Security Policy |
| PDPA | Personal Data Protection Act 2010 |
| RMiT | Risk Management in Technology |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SLA | Service Level Agreement |

---

## 5. Policy Statements

*State the overarching policy positions of [Organization Name] regarding business continuity and disaster recovery. These are high-level commitments from which all other requirements derive.*

[Organization Name] is committed to maintaining the continuity of its NCII services and critical business operations in the face of disruption. The following policy statements govern the BCDR programme:

### 5.1 Commitment to Continuity

**5.1.1** [Organization Name] shall maintain a documented, tested, and current Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP) for all NCII systems and critical business functions at all times.

**5.1.2** [Organization Name] shall ensure that BCPs and DRPs are developed in accordance with the results of a formally conducted Business Impact Analysis (BIA), reviewed and updated at least annually, and following any significant organisational, technological, or regulatory change.

**5.1.3** Senior management, up to and including the Board of Directors, shall be actively engaged in the governance and oversight of the BCDR programme, reflecting the strategic importance of operational resilience to [Organization Name].

### 5.2 Recovery Objectives

**5.2.1** [Organization Name] shall define formally documented RTOs and RPOs for all NCII systems and critical business functions. These objectives shall be informed by the BIA, approved by the relevant system owners, and validated through periodic testing.

**5.2.2** RTOs and RPOs shall be calibrated to ensure compliance with regulatory requirements, contractual obligations, and stakeholder expectations. Where regulatory minima are specified, [Organization Name]'s targets shall meet or exceed those minima.

**5.2.3** Any revision to an RTO or RPO for an NCII system shall be subject to formal risk assessment and approval by the CRO prior to implementation.

### 5.3 Testing and Validation

**5.3.1** [Organization Name] shall conduct regular, structured tests of its BCPs and DRPs in accordance with the testing programme defined in Section 9 of this policy. Test results shall be formally documented, reviewed, and used to drive continuous improvement.

**5.3.2** Untested continuity and recovery plans shall not be considered adequate for regulatory compliance purposes.

### 5.4 Alternate Site Readiness

**5.4.1** [Organization Name] shall maintain operationally ready alternate site facilities sufficient to support the recovery of NCII systems and critical business functions within approved RTOs.

**5.4.2** Alternate site arrangements shall be subject to contractual agreements, regular review, and periodic activation tests.

### 5.5 Communication and Notification

**5.5.1** [Organization Name] shall maintain defined communication and notification procedures to ensure that all relevant internal and external stakeholders — including NACSA, BNM, and other regulatory bodies — are informed of significant disruptions in a timely, accurate, and appropriate manner.

**5.5.2** Regulatory notification timelines prescribed under Act 854 and other applicable legislation shall be treated as mandatory and non-negotiable.

### 5.6 Supply Chain and Third-Party Resilience

**5.6.1** [Organization Name] shall assess the business continuity capabilities of all third-party service providers whose services are integral to NCII operations. Contractual requirements for third-party BCPs and DRPs shall be established and enforced.

**5.6.2** Significant third-party disruptions affecting NCII services shall be managed under this policy as if they were [Organization Name] internal disruptions.

---

## 6. Recovery Time Objectives and Recovery Point Objectives for NCII Systems

*This section documents the formally approved RTOs and RPOs for all NCII-designated systems and supporting infrastructure. RTO and RPO values must be derived from and traceable to the current BIA.*

### 6.1 Overview

*Briefly explain how RTO and RPO are used to drive recovery planning decisions.*

Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs) are the primary quantitative parameters that govern [Organization Name]'s disaster recovery planning and investment decisions. These figures represent the maximum acceptable disruption duration and data loss respectively for each system, as determined through the BIA process and approved by system owners and executive management.

The RTO for any system must be equal to or less than the Maximum Acceptable Outage (MAO) identified for that system's dependent business functions.

### 6.2 NCII System Tier Classification

*Define the system tiers used to group systems with similar criticality and recovery requirements.*

[Organization Name] classifies NCII systems into four tiers based on their criticality to business operations and regulatory obligations:

| Tier | Classification | Description | Maximum RTO | Maximum RPO |
|---|---|---|---|---|
| **Tier 1** | Mission Critical | Systems whose failure immediately prevents delivery of regulated or statutory services. Zero tolerance for extended outage. | [e.g., 2 hours] | [e.g., 15 minutes] |
| **Tier 2** | Business Critical | Systems essential to core business operations. Disruption causes significant financial or reputational impact. | [e.g., 4 hours] | [e.g., 1 hour] |
| **Tier 3** | Important | Systems supporting significant operational functions. Disruption causes manageable impact. | [e.g., 24 hours] | [e.g., 4 hours] |
| **Tier 4** | Normal | Systems supporting non-critical administrative or back-office functions. | [e.g., 72 hours] | [e.g., 24 hours] |

### 6.3 NCII System RTO and RPO Register

*Populate this table with all NCII-designated systems. Each row must reference the BIA document and be approved by the relevant system owner. This table must be reviewed at least annually.*

| System ID | System Name | Business Function Supported | Tier | RTO | RPO | System Owner | BIA Reference | Last Reviewed |
|---|---|---|---|---|---|---|---|---|
| [SYS-001] | [System Name] | [Function Description] | [1–4] | [e.g., 2 hrs] | [e.g., 15 min] | [Owner Name/Role] | [BIA-YYYY-NN] | [Date] |
| [SYS-002] | [System Name] | [Function Description] | [1–4] | [e.g., 4 hrs] | [e.g., 1 hr] | [Owner Name/Role] | [BIA-YYYY-NN] | [Date] |
| [SYS-003] | [System Name] | [Function Description] | [1–4] | [e.g., 24 hrs] | [e.g., 4 hrs] | [Owner Name/Role] | [BIA-YYYY-NN] | [Date] |
| [SYS-004] | [System Name] | [Function Description] | [1–4] | [e.g., 72 hrs] | [e.g., 24 hrs] | [Owner Name/Role] | [BIA-YYYY-NN] | [Date] |
| *[Add rows as required]* | | | | | | | | |

> **Note:** The complete and current NCII System RTO/RPO Register is maintained as a controlled document: **[Document Reference: NCII-RTO-RPO-REG-YYYY]**. The table above represents a summary view. The master register is the authoritative source.

### 6.4 RTO and RPO Approval and Governance

- RTOs and RPOs for Tier 1 and Tier 2 systems require approval by the **CRO** and **CISO**.
- RTOs and RPOs for Tier 3 and Tier 4 systems require approval by the **relevant Business Unit Head** and **IT Risk Manager**.
- All RTOs and RPOs for NCII systems shall be reviewed during the annual BIA review cycle.
- Any change to an RTO or RPO shall be treated as a policy change and subject to the change management process defined in [Reference: Change Management Policy].
- Where actual tested recovery performance differs from documented RTOs/RPOs, a remediation plan shall be raised within **[e.g., 30 days]** of the test date.

### 6.5 Regulatory Alignment

*Document any specific RTOs or RPOs mandated by external regulators for particular system types.*

| Regulator | System Type | Mandated RTO | Mandated RPO | Reference |
|---|---|---|---|---|
| Bank Negara Malaysia | Core payment systems | [Regulatory RTO] | [Regulatory RPO] | [BNM RMiT Reference] |
| NACSA | NCII systems (general) | [Per NACSA direction] | [Per NACSA direction] | Act 854, s18 |
| [Other Regulator] | [System Type] | [Mandated RTO] | [Mandated RPO] | [Reference] |

---

## 7. Business Impact Analysis Methodology

*This section defines the standardised methodology [Organization Name] uses to conduct BIA exercises. The BIA is the foundation of all continuity and recovery planning.*

### 7.1 Purpose of the BIA

The Business Impact Analysis (BIA) is [Organization Name]'s primary tool for:

- Identifying Critical Business Functions (CBFs) and the systems, resources, and dependencies that support them.
- Quantifying the impact of disruption over time across financial, operational, reputational, regulatory, and human dimensions.
- Establishing Maximum Acceptable Outages (MAOs) for each CBF and, by extension, the RTOs and RPOs for supporting systems.
- Prioritising recovery activities and informing resource allocation for the BCDR programme.

### 7.2 BIA Governance

| Role | Responsibility |
|---|---|
| CRO / CISO | Sponsor and approve the BIA programme. |
| BCM Manager / IT Risk Manager | Coordinate and facilitate BIA exercises; consolidate results. |
| Business Unit Heads | Provide subject matter expertise and validate impact ratings for their functions. |
| IT System Owners | Identify system dependencies and technical constraints. |
| Internal Audit | Provide independent assurance of BIA methodology and results. |

### 7.3 BIA Process Steps

*Describe each step of the BIA methodology in sufficient detail for consistent execution across business units.*

#### Step 1: Scoping and Planning

- Define the BIA scope, including which business units, processes, and systems are to be assessed.
- Identify BIA participants — business unit representatives, process owners, and IT stakeholders.
- Prepare data collection templates (see Appendix B).
- Schedule BIA workshops and set timelines.

#### Step 2: Business Function Identification

- Enumerate all business functions within the defined scope.
- Map each function to the organisational unit responsible.
- Document the products or services each function delivers.
- Identify regulatory or contractual obligations attached to each function.

#### Step 3: Dependency Mapping

- For each business function, identify:
  - Supporting IT systems and applications.
  - Data and information assets.
  - Personnel and skill dependencies.
  - Facilities and physical infrastructure.
  - Third-party and supplier dependencies.
  - Interdependencies with other business functions.

#### Step 4: Impact Assessment

*Conduct a structured assessment of the consequences of disruption to each business function across the following impact dimensions:*

| Impact Dimension | Description | Measurement Approach |
|---|---|---|
| **Financial** | Direct financial loss, lost revenue, penalties, recovery costs. | Estimated MYR value per hour/day of disruption. |
| **Regulatory / Legal** | Breach of regulatory requirements, licence conditions, or legal obligations. | Applicable laws/regulations; penalty ranges. |
| **Reputational** | Customer trust, media attention, brand damage. | Qualitative scale (Low / Medium / High / Critical). |
| **Operational** | Inability to serve customers or execute business operations. | Number of customers affected; volume of transactions impacted. |
| **Safety** | Risk to employee or customer health and safety. | Qualitative scale aligned to risk matrix. |

Impact ratings shall be assigned across time horizons: **1 hour, 4 hours, 8 hours, 24 hours, 48 hours, 72 hours, and 7 days**.

#### Step 5: MAO and RTO/RPO Determination

- Based on impact assessment results, determine the **Maximum Acceptable Outage (MAO)** for each CBF — the point at which disruption impact becomes unacceptable.
- Establish draft **RTO** for each CBF: the time within which the function must be restored (RTO ≤ MAO).
- Establish draft **RPO** for each CBF: the maximum acceptable age of restored data.
- Present draft RTO/RPO values to business unit heads and system owners for validation.
- Submit validated RTO/RPO values to CRO/CISO for approval.

#### Step 6: BIA Report Production

- Consolidate BIA data into a formal BIA Report (see Appendix C for report template structure).
- Classify the BIA Report as **Confidential — Restricted**.
- Obtain sign-off from Business Unit Heads and CRO/CISO.
- Archive the approved BIA Report in [Document Management System] under reference **[BIA-YYYY-NN]**.

### 7.4 BIA Review Cycle

| Trigger | Action |
|---|---|
| Annual mandatory review | Full BIA exercise for all in-scope functions and systems. |
| Significant organisational change | BIA update for affected functions and systems. |
| New NCII system commissioning | BIA assessment prior to system go-live. |
| NCII system decommissioning | BIA update to reflect changes in dependency. |
| Post-incident review | BIA validation following a significant disruption event. |
| Regulatory direction | BIA re-conduct as directed by NACSA or BNM. |

### 7.5 BIA Data Quality and Integrity

- All BIA data shall be collected using standardised templates (Appendix B) to ensure consistency.
- BIA findings shall be independently validated by Internal Audit on at least a biennial basis.
- BIA data shall be treated as confidential and access restricted to authorised personnel on a need-to-know basis.

---

## 8. Recovery Prioritisation

*This section defines the framework [Organization Name] uses to determine the order in which systems and functions are recovered following a disruption.*

### 8.1 Prioritisation Principles

Recovery prioritisation at [Organization Name] is governed by the following principles:

1. **Life Safety First:** Actions to protect the safety of personnel, customers, and the public always take precedence over all system recovery activities.
2. **Regulatory Compliance:** Recovery activities that prevent regulatory breaches or meet statutory notification timelines are prioritised above commercial considerations.
3. **NCII Service Continuity:** Restoration of NCII-designated services takes priority over non-NCII services.
4. **Tier-Based Sequencing:** Recovery shall proceed in tier order (Tier 1 → Tier 4) unless specific dependencies require deviation.
5. **Dependency-Aware Sequencing:** Infrastructure and platform dependencies must be resolved before dependent applications can be recovered.

### 8.2 Recovery Priority Tiers

*The following recovery priority framework applies to all BCDR activities. Priority assignments are derived from the BIA and reviewed annually.*

#### Priority Wave 1 — Immediate Recovery (0–[RTO Tier 1])

*Systems and functions in this wave must be recovered within the Tier 1 RTO. This wave is activated immediately upon declaration of a disaster.*

| # | System / Function | Recovery Action | Responsible Team |
|---|---|---|---|
| 1 | [System/Function Name] | [Recovery Action] | [Team] |
| 2 | [System/Function Name] | [Recovery Action] | [Team] |
| 3 | [System/Function Name] | [Recovery Action] | [Team] |
| *[Add as required]* | | | |

#### Priority Wave 2 — Short-Term Recovery ([RTO Tier 1] – [RTO Tier 2])

*Systems and functions required to restore full operational capability across core business functions.*

| # | System / Function | Recovery Action | Responsible Team |
|---|---|---|---|
| 1 | [System/Function Name] | [Recovery Action] | [Team] |
| 2 | [System/Function Name] | [Recovery Action] | [Team] |
| *[Add as required]* | | | |

#### Priority Wave 3 — Medium-Term Recovery ([RTO Tier 2] – [RTO Tier 3])

*Systems and functions supporting wider operational and customer-facing activities.*

| # | System / Function | Recovery Action | Responsible Team |
|---|---|---|---|
| 1 | [System/Function Name] | [Recovery Action] | [Team] |
| 2 | [System/Function Name] | [Recovery Action] | [Team] |
| *[Add as required]* | | | |

#### Priority Wave 4 — Standard Recovery ([RTO Tier 3] – [RTO Tier 4])

*Non-critical systems and administrative functions restored once operational stability is achieved.*

| # | System / Function | Recovery Action | Responsible Team |
|---|---|---|---|
| 1 | [System/Function Name] | [Recovery Action] | [Team] |
| 2 | [System/Function Name] | [Recovery Action] | [Team] |
| *[Add as required]* | | | |

### 8.3 Dependency Map

*Document the key technical dependencies that govern recovery sequencing. This section should be read in conjunction with the full Dependency Map in Appendix D.*

| Layer | Components | Must Be Recovered Before |
|---|---|---|
| Physical Infrastructure | Data centre power, cooling, physical access | All IT systems |
| Network Infrastructure | Core routers, firewalls, WAN/LAN | All server and application layers |
| Identity and Access | Active Directory / LDAP, MFA infrastructure | All business applications |
| Storage and Backup | SAN/NAS infrastructure, backup repositories | All databases and application servers |
| Database Layer | [Database platform names] | All dependent applications |
| Application Layer — Tier 1 | [Core NCII application names] | Tier 2 and above applications |
| Application Layer — Tier 2 | [Business-critical application names] | Tier 3 and above applications |

### 8.4 Conflict Resolution in Prioritisation

Where competing recovery priorities arise — for example, where two Tier 1 systems cannot be simultaneously recovered due to resource constraints — the following escalation and decision-making protocol applies:

1. The **Crisis Management Team (CMT)** convenes to assess the conflict.
2. The **CRO** makes the final prioritisation decision, informed by real-time impact assessment.
3. The decision, rationale, and outcome are documented in the incident log.
4. Post-incident review examines whether resource constraints require remediation.

---

## 9. Testing Frequency and Scenarios

*This section defines the mandatory testing programme for all BCPs and DRPs, including test types, frequency, scenarios, and documentation requirements.*

### 9.1 Testing Objectives

The BCDR testing programme is designed to:

- Validate that BCPs and DRPs are complete, accurate, and executable.
- Confirm that RTOs and RPOs are achievable under realistic conditions.
- Identify gaps, weaknesses, and areas for improvement in continuity and recovery capabilities.
- Develop staff familiarity and competence with continuity and recovery procedures.
- Demonstrate compliance with requirements under Act 854 Section 18 and applicable BNM guidelines.

### 9.2 Mandatory Test Types and Frequency

*All tests below are mandatory for NCII systems. Test schedules shall be documented in the Annual BCDR Test Plan, approved by the CRO/CISO by [e.g., 31 January] each year.*

| Test Type | Description | Minimum Frequency | Systems in Scope | Outcome Required |
|---|---|---|---|---|
| **Document Review / Walk-Through** | Structured review of BCP/DRP documents with key stakeholders to confirm currency and accuracy. | Annually (all systems) | All NCII systems | Confirmed document currency; identified gaps. |
| **Tabletop Exercise** | Facilitated simulation of a disruption scenario using discussion rather than live systems. | Annually | All Tier 1 and Tier 2 systems | Exercise report; action log. |
| **Functional / Component Test** | Testing of specific recovery components in isolation (e.g., backup restoration, failover of a single system). | Semi-annually | Tier 1 and Tier 2 systems | Test results; RTO/RPO validation. |
| **Full Failover / Simulation Test** | End-to-end simulation of complete failover to alternate site or recovery environment. | Annually | All Tier 1 systems | Full test report; RTO/RPO achievement confirmation. |
| **Alternate Site Activation Test** | Physical activation of the alternate/DR site and transfer of operations. | Annually (minimum) | Tier 1 and Tier 2 systems | Site readiness confirmed; issues logged. |
| **Communication / Notification Drill** | Test of internal and external communication trees, including regulatory notification procedures. | Bi-annually | All — notification chain | Contact information confirmed; notification timelines met. |
| **Third-Party / Supplier DR Test** | Joint testing with critical third-party service providers. | Annually (or per SLA) | Third parties supporting NCII | Joint test report; SLA compliance confirmed. |

### 9.3 Test Scenarios

*Tests shall be conducted against realistic, plausible disruption scenarios relevant to [Organization Name]'s threat landscape. The following scenarios represent the minimum set to be exercised within each annual testing cycle.*

| Scenario ID | Scenario Name | Description | Target Test Type | Priority Systems |
|---|---|---|---|---|
| SCN-001 | Ransomware Attack | Large-scale ransomware infection encrypting primary data centre systems. | Full Simulation / Tabletop | All Tier 1 |
| SCN-002 | Primary Data Centre Loss | Complete loss of [Organization Name]'s primary data centre due to fire, flood, or physical damage. | Alternate Site Activation | Tier 1 and Tier 2 |
| SCN-003 | Critical Third-Party Failure | Unexpected failure of a critical NCII-supporting third-party service provider. | Tabletop / Functional | Tier 1 and Tier 2 |
| SCN-004 | Network Infrastructure Failure | Loss of core network connectivity affecting internal and external communications. | Functional | All Tiers |
| SCN-005 | Key Personnel Unavailability | Unavailability of critical technical and management staff during a disruptive event. | Tabletop | Recovery team procedures |
| SCN-006 | Prolonged Power Outage | Extended power failure affecting primary site beyond UPS/generator capacity. | Tabletop / Functional | All Tier 1 |
| SCN-007 | Cyber Incident — Data Exfiltration | Data breach requiring system isolation, forensic preservation, and parallel recovery. | Tabletop | All Tier 1 — PDPA-relevant systems |
| SCN-008 | Supply Chain Compromise | Compromise via a trusted software vendor or managed service provider. | Tabletop | All Tiers |
| *[Add scenarios as required]* | | | | |

### 9.4 Test Planning and Documentation

Each test shall be governed by the following documentation:

| Document | Purpose | Owner | Timing |
|---|---|---|---|
| **Annual BCDR Test Plan** | Schedules all tests for the year, including scope, type, and lead. | BCM Manager | Approved by [e.g., 31 Jan] annually. |
| **Test Script / Scenario Document** | Defines the test scenario, injects, objectives, and expected outcomes. | BCM Manager / IT Risk | Issued ≥ 2 weeks before test. |
| **Test Results Report** | Documents actual outcomes, deviations from expected, and findings. | Test Lead | Issued within [e.g., 10 business days] of test completion. |
| **Post-Test Action Log** | Captures remediation actions, owners, and target dates arising from findings. | BCM Manager | Maintained and tracked post-test. |

### 9.5 Test Results Reporting and Escalation

- Test results shall be reported to the **CISO** and **CRO** within [e.g., 10 business days] of test completion.
- Material test failures — defined as failure to achieve approved RTO or RPO for a Tier 1 or Tier 2 system — shall be escalated to the **Board Risk Committee** and a remediation plan submitted within [e.g., 30 days].
- Test results shall be retained for a minimum of **[e.g., 7 years]** in accordance with [Organization Name]'s records retention policy.
- NACSA and BNM may request access to test results and reports at any time. [Organization Name] shall provide these within the timeframe specified in any such request.

---

## 10. Alternate Site Arrangements

*This section defines the requirements for [Organization Name]'s alternate and disaster recovery site facilities used to maintain NCII service continuity.*

### 10.1 Alternate Site Strategy

[Organization Name] maintains alternate site arrangements to support the failover and recovery of NCII systems and critical business functions in the event that the primary site becomes unavailable. The alternate site strategy is designed to meet the RTOs specified in Section 6 for Tier 1 and Tier 2 systems.

[Organization Name]'s alternate site strategy consists of:

| Site | Location | Type | Readiness | Primary Function | Supported Tiers |
|---|---|---|---|---|---|
| **Primary Data Centre** | [Location] | Production | Operational | Primary NCII systems hosting | All Tiers |
| **DR / Alternate Data Centre** | [Location — minimum [X] km from primary] | [Hot / Warm] | [Activation time] | NCII system failover | Tier 1 and Tier 2 |
| **Alternate Business Work Area** | [Location] | [Hot / Warm] | [Activation time] | Staff relocation for CBF continuity | Tier 1 and Tier 2 |
| **Cloud DR Environment** | [Cloud Provider / Region] | Hot / Warm | [Activation time] | Supplementary NCII recovery capability | [Tiers] |

> **Note:** The geographic separation between the primary and DR data centres shall be sufficient to ensure that a single physical disaster event (flood, earthquake, fire) cannot simultaneously affect both sites. Minimum separation is **[e.g., 50 km]** unless a formal risk waiver is approved by the CRO and documented.

### 10.2 DR Data Centre Requirements

The DR data centre shall meet the following minimum requirements:

- **Power:** Independent utility supply with UPS and diesel generator backup providing a minimum of **[e.g., 72 hours]** of autonomous power.
- **Connectivity:** Dedicated network links to [Organization Name]'s WAN, independent of the primary site's connectivity path.
- **Physical Security:** Access controls equivalent to or exceeding those of the primary data centre, including CCTV, access logging, and guarded entry.
- **Environmental Controls:** Cooling, humidity, and fire suppression systems meeting data centre industry standards.
- **Replication:** Data replication from primary to DR site shall occur at a frequency that supports RPO requirements for all Tier 1 and Tier 2 systems. Current replication configuration is documented in **[Reference: DR Infrastructure Design Document]**.
- **Capacity:** The DR site shall have sufficient compute, storage, and network capacity to support all Tier 1 and Tier 2 workloads simultaneously.
- **Certification:** The DR data centre shall maintain at minimum a **[e.g., Tier III — Uptime Institute]** certification or equivalent.

### 10.3 Alternate Business Work Area Requirements

The alternate business work area shall provide:

| Requirement | Minimum Specification |
|---|---|
| Workstations | Sufficient for [Number] concurrent users — covering all CBF-critical roles. |
| Network Connectivity | Dedicated internet and WAN links independent of the primary site. |
| Telephony | IP telephony or alternative voice capability for all seats. |
| VPN / Remote Access | Secure remote access for personnel unable to reach either site. |
| Printing / Scanning | Sufficient capacity for operational needs during activation. |
| Physical Security | Access-controlled environment with visitor management. |
| Activation Time | Fully operational within **[e.g., 4 hours]** of activation instruction. |

### 10.4 Alternate Site Agreements and Contracts

- Alternate site arrangements shall be governed by formal contractual agreements reviewed and renewed at least **annually**.
- Contracts shall include provisions for:
  - Guaranteed activation timelines.
  - Minimum service levels during an activation.
  - [Organization Name]'s right to conduct periodic tests.
  - Confidentiality and data handling obligations.
  - Exit and transition provisions.
- The current alternate site contract register is maintained by [BCM Manager / Procurement] and available at **[Reference Location]**.

### 10.5 Alternate Site Access and Logistics

- A current list of personnel authorised to activate and access the alternate site is maintained by the **BCM Manager** and reviewed at least **semi-annually**.
- Transport arrangements to the alternate site shall be documented in the relevant BCP.
- Essential physical resources (printed procedures, backup credentials, access tokens) shall be maintained at the alternate site in a secure, inventoried form and updated following any significant change.

---

## 11. Communication and Notification

*This section defines the communication and notification procedures applicable during and following a disruptive event affecting NCII systems.*

### 11.1 Communication Objectives

Effective communication during a disruption is essential to:

- Ensure rapid and coordinated response by all stakeholders.
- Provide accurate, timely, and consistent information to regulators, customers, and the public.
- Meet mandatory regulatory notification timelines.
- Maintain [Organization Name]'s reputation and stakeholder confidence.

### 11.2 Internal Communication

#### 11.2.1 Incident Escalation Chain

*The following escalation chain shall be activated upon identification of a potential or actual disruption to an NCII system or critical business function.*

| Tier | Who to Notify | Trigger | Method | Timeframe |
|---|---|---|---|---|
| 1 — Initial | IT Operations / Service Desk | Incident detected | Phone / ITSM tool | Immediate |
| 2 — Assessment | CISO / IT Risk Manager | Potential NCII impact | Phone / Secure messaging | Within [e.g., 30 min] |
| 3 — Executive | CRO, CEO | Confirmed NCII disruption | Phone / Direct contact | Within [e.g., 1 hour] |
| 4 — Board | Board Risk Committee Chair | Major incident declared | Direct contact | Within [e.g., 2 hours] |

#### 11.2.2 Crisis Management Team Activation

- The CRO or CISO may declare a **Major Incident** and activate the **Crisis Management Team (CMT)** upon confirmation of a disruption meeting predefined criteria (see Appendix E — Incident Classification Matrix).
- CMT activation triggers the parallel execution of BCP and DRP procedures.
- The CMT convenes at the **[Primary Location: Meeting Room / Alternate Location]** or via **[Secure Video Conference Platform]** if physical assembly is not possible.
- CMT composition and contact details are maintained in the **Crisis Management Contact Directory** (Appendix F).

#### 11.2.3 Staff Communication

| Audience | Information | Channel | Responsible |
|---|---|---|---|
| All staff | Incident awareness, safety instructions, reporting instructions | Email, SMS, intranet announcement | HR / Corporate Communications |
| BCM/DRP teams | Activation instructions, role assignments | Secure messaging / phone cascade | BCM Manager |
| IT operations | Technical recovery instructions | ITSM tool, phone bridge | IT Lead |
| Third-party vendors | Activation of joint response procedures | Email / phone per contract | BCM Manager / Procurement |

### 11.3 External Communication and Regulatory Notification

#### 11.3.1 Regulatory Notification Obligations

[Organization Name] is subject to mandatory regulatory notification requirements under multiple instruments. Non-compliance with notification timelines is a regulatory breach.

| Regulator | Instrument | Notification Trigger | Notification Timeline | Method | Responsible |
|---|---|---|---|---|---|
| **NACSA** | Cyber Security Act 2024, s18 | Significant cyber incident or NCII disruption | Within **[e.g., 6 hours]** of detection | NACSA Cyber999 Portal / Email | CISO |
| **Bank Negara Malaysia** | BNM RMiT Policy | Significant operational or technology incident | Within **[e.g., 1 hour]** for critical; **24 hours** for serious | BNM ITSIMS Portal | CRO / CISO |
| **Securities Commission** *(if applicable)* | [Reference] | [Trigger] | [Timeline] | [Method] | [Responsible] |
| **[Other Regulator]** | [Reference] | [Trigger] | [Timeline] | [Method] | [Responsible] |

> **Critical:** Regulatory notification timelines are non-negotiable. The CISO is responsible for ensuring notifications are made within prescribed timelines and that all notifications are documented with timestamps.

#### 11.3.2 Customer Communication

| Scenario | Message Approach | Channel | Approval Required | Responsible |
|---|---|---|---|---|
| Service interruption (minor) | Factual status update; estimated restoration time. | Website banner, app notification, social media | CRO | Corporate Communications |
| Extended outage (significant) | Formal communication with apology, explanation, and recovery timeline. | Direct email/SMS, media release | CEO | Corporate Communications / Legal |
| Data breach (PDPA-notifiable) | Breach notification per PDPA requirements. | Direct written notice to affected individuals | CEO / Legal | Legal / Compliance / Corporate Communications |

#### 11.3.3 Media and Public Communication

- All media enquiries relating to a BCDR incident shall be directed exclusively to **[Head of Corporate Communications]** or their delegate.
- No employee other than authorised spokespersons shall make statements to the media regarding an incident.
- Media statements shall be approved by the **CEO** and **Legal Counsel** before release.
- A media holding statement template is maintained in Appendix E and shall be used as the basis for initial media responses.

### 11.4 Communication Log

Throughout any BCDR incident, all communications — internal and external — shall be logged in the **Incident Communication Register**, capturing:

| Field | Description |
|---|---|
| Timestamp | Date and time of communication. |
| Direction | Outbound / Inbound. |
| Recipient / Sender | Name, role, and organisation. |
| Medium | Phone, email, portal submission, in-person. |
| Content Summary | Summary of message or notification sent/received. |
| Sent By | Name and role of [Organization Name] representative. |
| Confirmation | Confirmation of receipt (where applicable). |

---

## 12. Roles and Responsibilities

*This section defines the roles and responsibilities of all personnel involved in [Organization Name]'s BCDR programme, presented in RACI format.*

### 12.1 Role Definitions

| Role | Description |
|---|---|
| **Board of Directors** | Provides ultimate governance oversight of the BCDR programme; approves BCDR policy. |
| **Board Risk Committee (BRC)** | Oversees BCDR programme performance and receives escalated incident reports. |
| **Chief Executive Officer (CEO)** | Accountable for [Organization Name]'s operational resilience; chairs CMT for major incidents. |
| **Chief Risk Officer (CRO)** | Policy owner; approves BIA outcomes, RTOs, and RPOs; oversees BCDR programme. |
| **Chief Information Security Officer (CISO)** | Operational lead for BCDR; manages BCM team; oversees testing programme. |
| **BCM Manager** | Day-to-day management of the BCDR programme; coordinates BIA, BCP/DRP development and testing. |
| **IT Risk Manager** | Manages DR technical planning and execution; maintains DR infrastructure readiness. |
| **Business Unit Heads** | Accountable for BCP for their units; provide BIA data; direct business recovery activities. |
| **IT Operations Lead** | Leads technical recovery activities; manages DR site activation. |
| **Human Resources** | Manages staff welfare, communication, and redeployment during incidents. |
| **Legal and Compliance** | Advises on legal and regulatory obligations; reviews external communications. |
| **Corporate Communications** | Manages external and customer communications during incidents. |
| **Internal Audit** | Provides independent assurance of BCDR programme adequacy. |
| **Third-Party Providers** | Execute contractual BCDR obligations; participate in joint tests. |

### 12.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Board / BRC | CEO | CRO | CISO | BCM Mgr | IT Risk Mgr | BU Heads | IT Ops | Legal / Compliance | Internal Audit |
|---|---|---|---|---|---|---|---|---|---|---|
| Approve BCDR Policy | A | C | R | C | C | | | | C | I |
| Sponsor BCDR Programme | I | A | R | C | | | | | | I |
| Conduct BIA | I | I | A | C | R | C | C | C | C | I |
| Approve RTO / RPO | I | I | A | R | C | C | C | | | I |
| Develop BCP / DRP | I | I | A | R | R | R | C | C | | I |
| Approve BCP / DRP | A | C | R | R | | | | | | I |
| Maintain NCII Asset Register | I | I | C | A | R | R | C | C | | I |
| Manage Alternate Site Arrangements | I | I | C | A | R | R | | C | | I |
| Develop Annual Test Plan | I | I | A | R | R | C | | C | | I |
| Execute BCDR Tests | I | I | C | A | R | R | C | R | | I |
| Report Test Results to Board | A | I | R | C | C | | | | | C |
| Declare Major Incident / CMT Activation | I | A | R | R | C | | | | | |
| Lead Crisis Management Team | | A | R | C | C | | | | | |
| Execute Technical DR (failover) | I | I | I | A | C | R | | R | | |
| Execute Business Recovery (BCP) | I | I | A | C | C | | R | C | | |
| Manage Regulatory Notifications | I | C | C | A | | | | | C | |
| Manage Customer Communications | I | A | C | | | | | | C | |
| Manage Media Communications | I | A | | | | | | | C | |
| Post-Incident Review | I | C | A | R | R | C | C | C | C | R |
| Annual Policy Review | A | C | R | C | C | | | | C | C |

---

## 13. Compliance and Enforcement

*This section defines how compliance with this policy is monitored, measured, and enforced.*

### 13.1 Compliance Monitoring

[Organization Name] shall monitor compliance with this policy through the following mechanisms:

| Mechanism | Frequency | Responsible | Reported To |
|---|---|---|---|
| Annual BIA exercise completion | Annually | BCM Manager | CRO / CISO |
| BCP / DRP currency review | Annually (minimum) | BCM Manager | CISO |
| BCDR test programme completion | Annually (per test plan) | BCM Manager | CRO / CISO |
| RTO / RPO achievement during tests | Per test | IT Risk Manager | CISO |
| Regulatory notification timeline compliance | Per incident | CISO | CRO |
| Alternate site contract review | Annually | BCM Manager | CISO |
| Internal Audit BCDR assessment | Biennial (minimum) | Internal Audit | Board Audit Committee |
| BCDR Key Risk Indicator (KRI) reporting | Quarterly | BCM Manager | Risk Committee |

### 13.2 Key Risk Indicators (KRIs)

| KRI | Threshold (Acceptable) | Threshold (Escalation) | Reporting Frequency |
|---|---|---|---|
| % of NCII systems with current, tested BCP/DRP | ≥ 100% | < 100% | Quarterly |
| % of annual test plan completed on schedule | ≥ 90% | < 80% | Quarterly |
| # of Tier 1 systems failing to meet RTO in testing | 0 | ≥ 1 | Per test |
| # of regulatory notifications made outside prescribed timelines | 0 | ≥ 1 | Per incident |
| # of open P1 post-test remediation actions past target date | 0 | ≥ 1 | Monthly |
| Days since last successful alternate site test | ≤ 365 | > 365 | Quarterly |

### 13.3 Non-Compliance and Consequences

- Non-compliance with this policy shall be reported to the **CRO** and documented in the **Policy Exception Register**.
- Material non-compliance — including failure to achieve Tier 1 RTOs, failure to notify regulators within required timelines, or failure to conduct mandatory annual testing — shall be escalated to the **Board Risk Committee**.
- Deliberate non-compliance or negligence in BCDR duties may result in disciplinary action in accordance with [Organization Name]'s HR policies.
- Where non-compliance creates or exacerbates regulatory risk, [Organization Name]'s **Compliance function** shall assess whether voluntary disclosure to the relevant regulator is appropriate.

### 13.4 Policy Exceptions

Requests for exceptions to any requirement within this policy shall be:

1. Submitted in writing to the **CRO** using the Policy Exception Request form (Appendix G).
2. Accompanied by a risk assessment documenting the nature and duration of the exception and compensating controls.
3. Approved in writing by the **CRO** (Tier 3–4 exceptions) or **CEO** (Tier 1–2 exceptions).
4. Recorded in the **Policy Exception Register** with a defined expiry date not exceeding **12 months**.
5. Reported to the **Board Risk Committee** if the exception relates to a Tier 1 system or regulatory requirement.

---

## 14. Review and Approval

### 14.1 Policy Review Schedule

This policy shall be reviewed:

- **Annually**, by the policy owner (CRO/CISO), as a minimum.
- Following any **significant change** to [Organization Name]'s NCII systems, organisational structure, or regulatory requirements.
- Following a **significant BCDR incident** or test failure that reveals material policy deficiencies.
- Upon **direction from NACSA, BNM**, or other regulatory authority.

### 14.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name / Role] | Initial policy release. |
| [1.1] | [Date] | [Author Name / Role] | [Description of changes made.] |
| [2.0] | [Date] | [Author Name / Role] | [Description of major revision.] |

### 14.3 Approval Record

| Role | Name | Signature | Date |
|---|---|---|---|
| Policy Author | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) | [Name] | [Signature] | [Date] |
| Chief Executive Officer (CEO) | [Name] | [Signature] | [Date] |
| Board Risk Committee Chair | [Name] | [Signature] | [Date] |

---

## 15. References

### 15.1 Legislation and Regulations

| Reference | Title | Relevant Sections |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | Sections 18 (Duties of NCII entities), 23 (Directions by Chief Executive) |
| Personal Data Protection Act 2010 (Act 709) | Personal Data Protection Act 2010 | Section 9 (Security principle), Section 12 (Retention principle) |
| Financial Services Act 2013 (Act 758) | Financial Services Act 2013 | Section 47 (Operational requirements) |
| Islamic Financial Services Act 2013 (Act 759) | Islamic Financial Services Act 2013 | Equivalent operational requirements |

### 15.2 Regulatory Guidelines and Policies

| Reference | Issuing Authority | Title |
|---|---|---|
| [BNM/RH/PD 028-X] | Bank Negara Malaysia | Risk Management in Technology (RMiT) Policy Document |
| [BNM Reference] | Bank Negara Malaysia | Guidelines on Business Continuity Management |
| [NACSA Reference] | NACSA | NCII Sector Security Plan Requirements |
| [NACSA Reference] | NACSA | National Cyber Security Policy (NCSP) |

### 15.3 Standards

| Standard | Title | Application |
|---|---|---|
| ISO 22301:2019 | Security and Resilience — Business Continuity Management Systems | Primary BCM standard reference. |
| ISO/IEC 27031:2011 | Information Technology — ICT Readiness for Business Continuity | DR technical reference. |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISMS integration reference. |
| NIST SP 800-34 Rev.1 | Contingency Planning Guide for Federal Information Systems | Technical DR planning reference. |

### 15.4 Internal Documents

| Document ID | Title | Location |
|---|---|---|
| [POL-IS-001] | Information Security Policy | [Document Management System Path] |
| [POL-ERM-001] | Enterprise Risk Management Policy | [Document Management System Path] |
| [POL-CM-001] | Change Management Policy | [Document Management System Path] |
| [BIA-YYYY-NN] | Business Impact Analysis Report (Current) | [Document Management System Path — Restricted] |
| [NCII-RTO-RPO-REG-YYYY] | NCII System RTO/RPO Register | [Document Management System Path — Restricted] |
| [DRP-YYYY-NN] | Disaster Recovery Plan (Current) | [Document Management System Path — Restricted] |
| [BCP-YYYY-NN] | Business Continuity Plan (Current) | [Document Management System Path — Restricted] |
| [BCDR-TEST-PLAN-YYYY] | Annual BCDR Test Plan | [Document Management System Path] |

---

## 16. Appendices

### Appendix A — NCII System Classification Matrix

*This appendix contains the complete NCII System Classification Matrix used to determine whether a system is in scope for this policy and its associated tier classification. The matrix is maintained by the BCM Manager and reviewed annually.*

| Column | Description |
|---|---|
| System ID | Unique identifier for the system. |
| System Name | Common name of the system. |
| Business Function | Primary business function(s) supported. |
| NCII Designation | Yes / No — whether the system is formally designated as NCII. |
| Tier | 1 / 2 / 3 / 4 — per Section 6.2. |
| Designation Date | Date the system was designated as NCII. |
| Review Date | Date the classification was last reviewed. |

*[Full matrix is maintained in: [Document Reference] — see BCM Manager for access.]*

---

### Appendix B — BIA Data Collection Template

*This appendix contains the standardised template used by business units to provide data for the annual BIA exercise. The BCM Manager issues this template to Business Unit Heads at the commencement of each BIA cycle.*

**Section 1: Business Unit Information**

| Field | Response |
|---|---|
| Business Unit Name | [Business Unit] |
| Process Owner | [Name / Role] |
| Date Completed | [Date] |

**Section 2: Critical Business Function Inventory**

| Function ID | Function Name | Description | Regulatory/Contractual Obligations | Peak Periods |
|---|---|---|---|---|
| [F-001] | [Function Name] | [Description] | [Obligations] | [e.g., Month-end, Year-end] |

**Section 3: Impact Assessment**

*For each function, rate the impact of disruption across the following timeframes. Use the scale: Negligible / Minor / Moderate / Significant / Critical.*

| Function ID | 1 Hour | 4 Hours | 8 Hours | 24 Hours | 48 Hours | 72 Hours | 7 Days |
|---|---|---|---|---|---|---|---|
| [F-001] | | | | | | | |

**Section 4: Resource Dependencies**

| Function ID | IT Systems | Data/Information | Personnel | Third Parties | Facilities |
|---|---|---|---|---|---|
| [F-001] | | | | | |

**Section 5: Draft RTO / RPO**

| Function ID | Proposed RTO | Proposed RPO | Justification |
|---|---|---|---|
| [F-001] | | | |

---

### Appendix C — BIA Report Structure

*The BIA Report produced at the conclusion of each BIA exercise shall follow this standardised structure.*

1. Executive Summary
2. BIA Scope and Methodology
3. Critical Business Function Inventory
4. Impact Assessment Results — Summary Table
5. MAO, RTO, and RPO Summary by Function
6. NCII System Dependency Map
7. Key Findings and Observations
8. Recovery Priority Recommendations
9. Sign-Off and Approval
10. Appendices (raw data, workshop notes, participant list)

---

### Appendix D — Technical Dependency Map

*This appendix contains the detailed technical dependency map for all NCII systems, documenting system-to-system, system-to-infrastructure, and system-to-third-party dependencies. This map is maintained by the IT Risk Manager and updated following any significant infrastructure change.*

*[Full Dependency Map is maintained in: [Document Reference] — refer to IT Risk Manager for the current version.]*

**Summary Dependency Layers:**

```
[Layer 1: Physical Infrastructure]
    └── [Layer 2: Network & Connectivity]
            └── [Layer 3: Identity & Access Management]
                    └── [Layer 4: Storage & Backup]
                            └── [Layer 5: Database Layer]
                                    └── [Layer 6: Application Layer — Tier 1]
                                                └── [Layer 7: Application Layer — Tier 2+]
```

---

### Appendix E — Incident Classification Matrix and Media Holding Statement Template

#### E.1 Incident Classification Matrix

*Use this matrix to classify an incident and determine the appropriate escalation and response level.*

| Category | Description | Examples | Response Level |
|---|---|---|---|
| **P1 — Critical** | NCII system or CBF unavailable; regulatory notification threshold met; active cyber attack in progress. | Ransomware encrypting production systems; core banking system down. | CMT activated; all BCDR plans invoked; immediate regulatory notification. |
| **P2 — Major** | Significant degradation of NCII service; risk of P1 if unresolved within [e.g., 2 hours]. | Partial system failure; third-party service degradation. | CISO and CRO notified; DR procedures on standby; escalation monitoring. |
| **P3 — Moderate** | Non-critical system failure; workarounds available; no immediate NCII impact. | Internal administrative system failure; isolated connectivity issue. | Standard incident management; BCM Manager monitoring. |
| **P4 — Low** | Minor disruption; self-resolved or resolved within normal operations. | Brief network blip; single user access issue. | Standard IT service desk handling. |

#### E.2 Media Holding Statement Template

*This template shall be used as the basis for the initial [Organization Name] response to media enquiries during a BCDR incident. It must be approved by the CEO and Legal Counsel before use.*

---

*For Immediate Release / [EMBARGO UNTIL: Date / Time]*

**Statement from [Organization Name]**

[Organization Name] is aware of [a technical incident / service disruption / cybersecurity incident] that [has affected / may have affected] [describe affected service or system in general, non-sensitive terms].

We are actively investigating the matter and have deployed our incident response and business continuity teams. The restoration of [affected services] is our highest priority.

We are working closely with [relevant authorities / regulatory bodies] and will provide further updates as they become available.

[Where applicable: Customer data / personal information — We have no current evidence that customer data has been compromised. We are conducting a thorough investigation and will notify affected parties in accordance with our legal obligations if this position changes.]

We apologise for any inconvenience caused and thank our customers and stakeholders for their patience.

For further enquiries, please contact: **[Corporate Communications Contact Details]**

---

### Appendix F — Crisis Management Contact Directory

*This appendix contains the contact details of all CMT members, alternates, and key external contacts (regulators, DR site contacts, third-party emergency lines). This directory is classified Confidential — Restricted and maintained by the BCM Manager. It is reviewed and updated at minimum semi-annually and distributed in printed form to the alternate site and to all CMT members.*

*[Full Contact Directory: [Document Reference] — contact BCM Manager for the current copy.]*

| Role | Primary Contact | Alternate Contact | Phone (24/7) | Email |
|---|---|---|---|---|
| CMT Chair (CEO) | [Name] | [Alternate Name] | [Phone] | [Email] |
| CRO | [Name] | [Alternate Name] | [Phone] | [Email] |
| CISO | [Name] | [Alternate Name] | [Phone] | [Email] |
| BCM Manager | [Name] | [Alternate Name] | [Phone] | [Email] |
| IT Operations Lead | [Name] | [Alternate Name] | [Phone] | [Email] |
| Legal Counsel | [Name] | [Alternate Name] | [Phone] | [Email] |
| Head of Corporate Communications | [Name] | [Alternate Name] | [Phone] | [Email] |
| NACSA (Cyber999) | N/A | N/A | 1300-88-2999 | cyber999@nacsa.gov.my |
| BNM Regulatory Notification | N/A | N/A | [BNM Contact] | [BNM Email / Portal] |
| DR Site Operations | [Vendor Name] | N/A | [Phone] | [Email] |
| Primary Data Centre NOC | [Provider / Internal] | N/A | [Phone] | [Email] |

---

### Appendix G — Policy Exception Request Form and Subordinate Document Register

#### G.1 Policy Exception Request Form

| Field | Details |
|---|---|
| Exception Reference | [EXC-YYYY-NN] |
| Date of Request | [Date] |
| Requesting Department | [Department] |
| Requestor Name and Role | [Name / Role] |
| Policy Section(s) Affected | [Section reference(s)] |
| Nature of Exception Required | [Description of what cannot be complied with and why] |
| Risk Assessment | [Summary of risk impact if exception is granted] |
| Compensating Controls | [Controls in place to mitigate the risk during the exception period] |
| Requested Duration | [Start Date] to [End Date — max 12 months] |
| Approver (CRO / CEO) | [Name] |
| Approval Decision | Approved / Declined |
| Approval Date | [Date] |
| BRC Notification Required? | Yes / No |

#### G.2 Subordinate Document Register

*The following documents are directly subordinate to this policy and operationalise its requirements. Each document must remain current and consistent with this policy.*

| Document ID | Document Title | Owner | Review Frequency |
|---|---|---|---|
| [PROC-BCM-001] | BIA Procedure | BCM Manager | Annual |
| [PROC-BCM-002] | BCP Development and Maintenance Procedure | BCM Manager | Annual |
| [PROC-BCM-003] | DRP Development and Maintenance Procedure | IT Risk Manager | Annual |
| [PROC-BCM-004] | BCDR Testing Procedure | BCM Manager | Annual |
| [PROC-BCM-005] | Alternate Site Activation Procedure | IT Operations Lead | Annual |
| [PROC-BCM-006] | Crisis Communication Procedure | Head of Corporate Communications | Annual |
| [PROC-BCM-007] | Regulatory Notification Procedure | CISO / Compliance | Annual |
| [PLAN-BCP-YYYY] | Business Continuity Plan (Current) | BCM Manager | Annual |
| [PLAN-DRP-YYYY] | Disaster Recovery Plan (Current) | IT Risk Manager | Annual |
| [PLAN-TEST-YYYY] | Annual BCDR Test Plan | BCM Manager | Annual |
| [REG-NCII-YYYY] | NCII System RTO/RPO Register | BCM Manager | Annual |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | Business Continuity and Disaster Recovery Policy | Version 1.0**
**This document is uncontrolled if printed. The controlled version is held in [Document Management System].**