# Cyber Security Risk Management Policy

**[Organization Name]**
**National Critical Information Infrastructure (NCII) Entity**

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Risk Officer (CRO) / Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 12 months from Last Review Date] |
| **Approved By** | [Approved By — Board Risk Committee / CEO] |
| **Department** | [Risk Management / Information Security Department] |
| **Distribution** | Restricted — Senior Management, Risk Owners, Compliance |

---

> **IMPORTANT NOTICE:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorised recipients. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of the Cyber Security Act 2024 (Act 854) and related Malaysian law.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and Legal Basis](#3-regulatory-framework-and-legal-basis)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Risk Appetite Statement](#5-risk-appetite-statement)
6. [Risk Assessment Methodology](#6-risk-assessment-methodology)
7. [Risk Treatment Options](#7-risk-treatment-options)
8. [Risk Acceptance Authority Levels](#8-risk-acceptance-authority-levels)
9. [Risk Monitoring and Reporting](#9-risk-monitoring-and-reporting)
10. [Integration with Enterprise Risk Management](#10-integration-with-enterprise-risk-management)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Policy Compliance and Enforcement](#12-policy-compliance-and-enforcement)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*This section explains why this policy exists and what it is designed to achieve. Authors should articulate the organisational intent behind formalising cyber security risk management practices in relation to NCII obligations.*

This Cyber Security Risk Management Policy ("Policy") establishes the framework, principles, and requirements by which [Organization Name] ("the Organisation") identifies, assesses, treats, monitors, and reports cyber security risks that may affect its National Critical Information Infrastructure (NCII) assets, systems, and services.

The purpose of this Policy is to:

- Establish a structured and repeatable approach to managing cyber security risks across the Organisation's NCII environment, consistent with the requirements of the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 21.
- Define the Organisation's risk appetite with respect to cyber security threats, ensuring that risk-taking is aligned with the Board's strategic objectives and regulatory obligations.
- Assign clear accountability for the identification, treatment, escalation, and acceptance of cyber security risks.
- Enable informed, risk-based decision-making at all levels of the Organisation regarding the protection of NCII assets.
- Ensure that cyber security risk management activities are fully integrated with the Organisation's broader Enterprise Risk Management (ERM) framework.
- Demonstrate to the **National Cyber Security Agency (NACSA)** and other regulatory bodies that the Organisation operates a mature, documented, and auditable cyber security risk management programme.

This Policy applies to all cyber security risks that could adversely impact the confidentiality, integrity, availability, or resilience of systems designated or potentially designatable as NCII under Act 854.

---

## 2. Scope

*This section defines the boundaries of the policy — which systems, entities, personnel, and activities are covered. Authors should be specific about what is included and what is explicitly excluded.*

### 2.1 Organisational Scope

This Policy applies to:

- **[Organization Name]** and all its wholly-owned subsidiaries, branches, and affiliated entities operating within Malaysia that interact with, host, or support NCII assets.
- All **employees** (permanent, contract, and temporary) of the Organisation.
- All **third-party vendors, managed service providers, and outsourced partners** who have access to or provide services that form part of or interface with the Organisation's NCII environment.
- **Board members** and **Senior Management** insofar as they exercise oversight of, or make decisions regarding, cyber security risk.

### 2.2 Technical and Asset Scope

This Policy covers cyber security risks associated with:

- All systems, networks, applications, and infrastructure formally designated as NCII by NACSA under Act 854, Section 18.
- Systems and assets that, while not yet formally designated, are functionally critical to the Organisation's ability to deliver services that may qualify as NCII.
- Cloud-hosted, co-located, and on-premises environments that form part of the NCII technology estate.
- Industrial Control Systems (ICS), Operational Technology (OT), and Internet of Things (IoT) devices connected to or supporting NCII operations, where applicable.
- Data assets — including personal data, financial data, and operational data — held within NCII systems.
- Communication and connectivity infrastructure supporting NCII operations.

### 2.3 Exclusions

The following are explicitly outside the scope of this Policy unless otherwise stated:

- Non-NCII systems and applications that have no interaction with the designated NCII environment. These remain subject to the Organisation's general Information Security Policy.
- Physical security risks (covered separately under the Organisation's Physical Security Policy), except where physical vulnerabilities create or exacerbate cyber security risks.
- Financial risks and market risks that are not cyber security in nature (covered under the Organisation's Financial Risk Framework).

### 2.4 Geographic Scope

This Policy applies to all operations and assets of [Organization Name] located within **Malaysia**. For cross-border operations or assets hosted outside Malaysia that interact with domestic NCII, the stricter of the applicable Malaysian regulatory requirements and the host country requirements shall apply.

---

## 3. Regulatory Framework and Legal Basis

*This section establishes the legal and regulatory foundation for the policy. Authors should verify that all cited sections are current and reference the most recent version of each instrument.*

### 3.1 Primary Legislation

This Policy is mandated by and gives effect to the following primary legislation:

| Legislation | Relevant Sections | Requirement |
|---|---|---|
| **Cyber Security Act 2024 (Act 854)** | Section 21 | Obligation on NCII entities to implement cyber security measures, including risk management |
| **Cyber Security Act 2024 (Act 854)** | Section 18 | Duties of NCII entities with respect to maintaining the security of designated infrastructure |
| **Cyber Security Act 2024 (Act 854)** | Section 19 | Cyber security audit obligations for NCII entities |
| **Cyber Security Act 2024 (Act 854)** | Section 26 | Reporting obligations for cyber security incidents |

### 3.2 Subsidiary Regulations and Guidelines

| Instrument | Issuing Body | Relevance |
|---|---|---|
| NACSA NCII Sector Guidelines — [Applicable Sector] | NACSA | Sector-specific cyber security risk controls |
| Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document | BNM | Technology risk management for financial institutions |
| Personal Data Protection Act 2010 (Act 709) | PDPC | Data security obligations intersecting with cyber risk |
| Guidelines on Management of Cyber Risk (where issued) | [Relevant Regulator] | Supplementary guidance |

### 3.3 International Standards Alignment

This Policy is informed by and aligned with the following international standards, which are adopted as best-practice references:

- **ISO/IEC 27001:2022** — Information Security Management Systems
- **ISO/IEC 27005:2022** — Information Security Risk Management
- **NIST Cybersecurity Framework (CSF) 2.0** — Identify, Protect, Detect, Respond, Recover
- **NIST SP 800-30 Rev. 1** — Guide for Conducting Risk Assessments
- **IEC 62443** — Industrial Automation and Control Systems Security (where OT/ICS is in scope)

---

## 4. Definitions and Terminology

*This section provides a common vocabulary for all users of this policy. Authors should add organisation-specific terms and ensure definitions are consistent with those used in NACSA guidelines and applicable BNM policy documents.*

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary legislation governing cyber security of NCII in Malaysia |
| **Asset** | Any information, system, infrastructure, or service that has value to the Organisation and is relied upon in the delivery of NCII-related operations |
| **Cyber Security Risk** | The potential for loss, disruption, or harm arising from a threat exploiting a vulnerability in the Organisation's cyber environment, affecting NCII assets |
| **NCII (National Critical Information Infrastructure)** | Information infrastructure as designated under Act 854, the disruption or destruction of which would have a severe impact on national security, economy, public health, or safety |
| **NACSA** | National Cyber Security Agency, the competent authority under Act 854 |
| **Risk Appetite** | The aggregate level and types of cyber security risk that the Organisation is willing to accept in pursuit of its strategic objectives |
| **Risk Tolerance** | The acceptable deviation from the risk appetite within which the Organisation may operate |
| **Risk Owner** | A senior individual accountable for a specific risk, its treatment, and its monitoring |
| **Threat** | Any circumstance or event with the potential to adversely impact organisational operations through unauthorised access, disclosure, modification, destruction, or denial of service |
| **Vulnerability** | A weakness in a system, process, or control that could be exploited by a threat agent |
| **Inherent Risk** | The level of risk existing before any controls are applied |
| **Residual Risk** | The level of risk remaining after controls have been applied |
| **Risk Treatment** | The process of selecting and implementing measures to modify risk |
| **Risk Register** | A structured record of identified risks, their assessments, treatments, and current status |
| **ERM** | Enterprise Risk Management — the organisation-wide framework for identifying and managing all categories of risk |
| **CISO** | Chief Information Security Officer |
| **CRO** | Chief Risk Officer |
| **BCP** | Business Continuity Plan |
| **DRP** | Disaster Recovery Plan |
| **KRI** | Key Risk Indicator — a metric used to signal increasing risk exposure |
| **RTO** | Recovery Time Objective — the maximum acceptable downtime for a system |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss measured in time |

---

## 5. Risk Appetite Statement

*This section articulates the Board-approved level of cyber security risk the Organisation is willing to accept. Authors should ensure the risk appetite statement has been formally approved by the Board or Board Risk Committee and reflects the Organisation's strategic context, regulatory obligations, and NCII designation.*

### 5.1 Board-Approved Risk Appetite

The Board of Directors of [Organization Name] recognises that cyber security risk is inherent in the operation of digital infrastructure supporting the Organisation's NCII-designated services. The Board has determined the following risk appetite:

> **[Organization Name] has a LOW tolerance for cyber security risks that could result in a material breach, disruption, or compromise of its National Critical Information Infrastructure (NCII) assets. The Organisation will not knowingly accept cyber security risks that could lead to significant harm to public services, the financial system, national security, or the personal data of its customers and stakeholders, without first implementing appropriate controls or obtaining explicit Board-level risk acceptance.**

### 5.2 Risk Appetite Dimensions

The Organisation's cyber security risk appetite is articulated across the following dimensions:

| Risk Dimension | Appetite Level | Description |
|---|---|---|
| **Confidentiality of NCII Data** | Zero Tolerance | No acceptable level of unauthorised disclosure of data classified as Restricted or above held within NCII systems |
| **Integrity of NCII Systems** | Low | Minimal tolerance for unauthorised modification of NCII system configurations or data; all changes must be authorised and logged |
| **Availability of NCII Services** | Low | NCII services must maintain agreed uptime thresholds; unplanned outages exceeding [X] hours are outside risk appetite |
| **Regulatory Non-Compliance** | Zero Tolerance | No acceptable level of knowing non-compliance with Act 854 obligations, NACSA directives, or BNM RMiT requirements |
| **Third-Party / Supply Chain Risk** | Low | Third parties with access to NCII must demonstrate minimum security standards; vendors not meeting baseline are not acceptable |
| **Operational Cyber Risk** | Moderate | Some operational disruption from cyber events may be acceptable where impact is contained, reversible, and within BCP parameters |
| **Reputational Risk from Cyber Events** | Low | Events likely to cause material reputational harm must be escalated to Senior Management; no acceptance of risk that triggers mandatory public disclosure |

### 5.3 Risk Tolerance Thresholds

*Authors should define specific quantitative thresholds where possible, aligned with the Organisation's risk scoring methodology defined in Section 6.*

| Risk Rating | Tolerance Position | Required Action |
|---|---|---|
| **Critical (Score: [16–25])** | Outside Appetite — Immediate Action | Escalate to Board/Exco within 24 hours; mandatory treatment plan within [X] days |
| **High (Score: [10–15])** | Outside Appetite — Urgent Action | Escalate to CRO/CISO within 48 hours; treatment plan within [X] days |
| **Medium (Score: [5–9])** | Within Appetite — Managed | Assigned risk owner; treatment plan within [X] days; monitored quarterly |
| **Low (Score: [1–4])** | Within Appetite — Accepted | Logged in risk register; reviewed annually; no immediate treatment required |

### 5.4 Risk Appetite Review

The risk appetite statement shall be reviewed by the Board Risk Committee no less than **annually**, or following:

- A material change in the Organisation's NCII designation or scope.
- A significant cyber security incident affecting the Organisation or a peer institution.
- A change in NACSA guidance, Act 854 subsidiary regulations, or BNM RMiT requirements.
- A material change in the Organisation's strategic direction or technology landscape.

---

## 6. Risk Assessment Methodology

*This section defines the structured process by which cyber security risks to NCII are identified, analysed, and evaluated. Authors should ensure the methodology is consistent with the Organisation's ERM framework and aligned with NACSA and ISO/IEC 27005 guidance.*

### 6.1 Overview of the Risk Assessment Process

[Organization Name] adopts a structured, repeatable risk assessment methodology based on the **ISO/IEC 27005:2022** standard, adapted for the NCII context under Act 854. The methodology comprises the following sequential phases:

```
Asset Identification → Threat Identification → Vulnerability Assessment
       → Impact Analysis → Likelihood Assessment → Risk Scoring
              → Risk Evaluation → Risk Treatment → Residual Risk Review
```

All cyber security risk assessments relating to NCII assets shall be documented and retained in the **Cyber Security Risk Register** (refer to Appendix A).

### 6.2 Asset Identification and Valuation

#### 6.2.1 Asset Inventory

All NCII assets shall be identified, classified, and recorded in the **NCII Asset Register**, maintained by the CISO's office. The Asset Register shall include, at minimum:

| Field | Description |
|---|---|
| Asset ID | Unique identifier |
| Asset Name | Descriptive name |
| Asset Type | System / Network / Application / Data / OT/ICS / Third-Party Service |
| NCII Designation Status | Designated / Candidate / Out of Scope |
| Asset Owner | Named individual accountable for the asset |
| Business Criticality | Critical / High / Medium / Low |
| Data Classification | Top Secret / Secret / Confidential / Restricted / Public |
| Hosting Location | On-premises / Cloud (provider: []) / Co-located / Hybrid |
| Interconnections | Systems and networks the asset connects to |
| Last Updated | Date of last review |

#### 6.2.2 Asset Valuation

Assets shall be valued based on the potential impact to the Organisation and to Malaysia's NCII if the asset were compromised. Valuation shall consider:

- **Business Impact**: Financial loss, operational disruption, regulatory penalty.
- **Societal Impact**: Impact on public services, national security, or the financial system.
- **Reputational Impact**: Loss of public trust or regulatory standing.
- **Legal/Regulatory Impact**: Breach of Act 854, PDPA, or other applicable law.

Asset value ratings:

| Value Rating | Description |
|---|---|
| **Critical** | Loss or compromise would result in catastrophic, potentially irreversible impact on NCII operations or national interest |
| **High** | Loss or compromise would result in severe disruption requiring extended recovery; significant regulatory consequence |
| **Medium** | Loss or compromise would result in moderate disruption; recoverable within agreed RTO/RPO |
| **Low** | Loss or compromise would result in minimal disruption; quickly recoverable with negligible regulatory impact |

### 6.3 Threat Identification

*Authors should maintain and update threat catalogues based on NACSA threat intelligence, industry reporting, and incident history.*

Threats shall be identified through the following sources:

- NACSA threat intelligence bulletins and advisories.
- Sector-specific threat intelligence (e.g., financial sector ISACs, FS-ISAC).
- Internal incident history and near-miss analysis.
- Penetration testing and vulnerability assessment findings.
- Industry reports and open-source threat intelligence (OSINT).
- Third-party and supply chain risk assessments.

Threats shall be categorised as follows:

| Threat Category | Examples |
|---|---|
| **Malicious External Actors** | Nation-state APTs, cybercriminal groups, hacktivists, opportunistic attackers |
| **Malicious Internal Actors** | Disgruntled employees, insider fraud, privilege abuse |
| **Unintentional Internal Actions** | Human error, misconfiguration, accidental data disclosure |
| **Third-Party / Supply Chain** | Compromised vendor software, malicious updates, third-party access abuse |
| **Environmental / Physical** | Power failure affecting cyber infrastructure, physical access to systems |
| **Systemic / Emerging** | Zero-day vulnerabilities, AI-enabled attacks, quantum computing threats |

### 6.4 Vulnerability Assessment

Vulnerabilities shall be identified through:

- **Automated vulnerability scanning**: conducted no less than [quarterly / monthly] for NCII systems.
- **Penetration testing**: conducted no less than annually for NCII systems (in accordance with Act 854, Section 19 audit obligations).
- **Configuration review**: assessed against recognised baselines (e.g., CIS Benchmarks).
- **Code review and SAST/DAST**: for custom applications within the NCII environment.
- **Third-party security assessments**: as part of vendor onboarding and periodic review.

### 6.5 Impact Analysis

The potential impact of a risk materialising shall be assessed across the following dimensions:

| Impact Dimension | Rating Criteria |
|---|---|
| **Financial** | Direct financial loss, regulatory fines, cost of recovery |
| **Operational** | Degree of NCII service disruption; ability to meet RTO/RPO |
| **Regulatory/Legal** | Likelihood and severity of regulatory sanction under Act 854 or other legislation |
| **Reputational** | Public and media impact; loss of stakeholder confidence |
| **Safety** | Risk to human life or physical safety (particularly for OT/ICS environments) |
| **National / Societal** | Impact on Malaysia's critical national functions or public welfare |

**Impact Rating Scale:**

| Score | Level | Description |
|---|---|---|
| 5 | **Catastrophic** | NCII service failure with national-level consequences; regulatory enforcement action; irreversible reputational damage |
| 4 | **Severe** | Major NCII disruption exceeding RTO; significant regulatory investigation; major public incident |
| 3 | **Significant** | Moderate NCII disruption within recovery parameters; reportable regulatory event; notable reputational harm |
| 2 | **Minor** | Limited disruption; manageable; low regulatory consequence; contained reputational effect |
| 1 | **Negligible** | Minimal or no impact on NCII services; no regulatory consequence; no material reputational effect |

### 6.6 Likelihood Assessment

The likelihood of a threat successfully exploiting a vulnerability shall be assessed as follows:

| Score | Level | Description |
|---|---|---|
| 5 | **Almost Certain** | Expected to occur in most circumstances; historical precedent within the Organisation or sector |
| 4 | **Likely** | Will probably occur in many circumstances; threat actor is active and capable |
| 3 | **Possible** | Could occur at some time; moderate threat capability and identified vulnerability |
| 2 | **Unlikely** | Could occur in some circumstances; low threat capability or well-controlled vulnerability |
| 1 | **Rare** | May occur only in exceptional circumstances; no known threat actor or vulnerability heavily mitigated |

### 6.7 Risk Scoring

The inherent risk score shall be calculated as:

> **Risk Score = Impact Score × Likelihood Score**

**Risk Rating Matrix:**

| | **Likelihood: 1 (Rare)** | **Likelihood: 2 (Unlikely)** | **Likelihood: 3 (Possible)** | **Likelihood: 4 (Likely)** | **Likelihood: 5 (Almost Certain)** |
|---|---|---|---|---|---|
| **Impact: 5 (Catastrophic)** | 5 — Medium | 10 — High | 15 — High | 20 — Critical | 25 — Critical |
| **Impact: 4 (Severe)** | 4 — Low | 8 — Medium | 12 — High | 16 — Critical | 20 — Critical |
| **Impact: 3 (Significant)** | 3 — Low | 6 — Medium | 9 — Medium | 12 — High | 15 — High |
| **Impact: 2 (Minor)** | 2 — Low | 4 — Low | 6 — Medium | 8 — Medium | 10 — High |
| **Impact: 1 (Negligible)** | 1 — Low | 2 — Low | 3 — Low | 4 — Low | 5 — Medium |

**Risk Rating Key:**

| Rating | Score Range | Colour Code |
|---|---|---|
| Critical | 16–25 | Red |
| High | 10–15 | Orange |
| Medium | 5–9 | Yellow |
| Low | 1–4 | Green |

### 6.8 Risk Evaluation

Following risk scoring, risks shall be evaluated against the risk appetite defined in Section 5. This evaluation determines:

- Whether the risk is within or outside the Organisation's stated risk appetite.
- The priority order for risk treatment.
- Whether the risk requires escalation prior to treatment.

All risks rated **High** or **Critical** must be escalated immediately per the authority levels defined in Section 8.

### 6.9 Risk Assessment Frequency

| Trigger | Assessment Type | Frequency |
|---|---|---|
| Scheduled review | Full NCII risk assessment | Annual minimum |
| New NCII system deployment | System-specific risk assessment | Prior to go-live |
| Significant change to NCII environment | Change-triggered assessment | Before and after change |
| Material cyber security incident | Post-incident risk reassessment | Within [30] days of incident closure |
| New threat intelligence indicating elevated risk | Targeted threat assessment | Upon receipt of intelligence |
| NACSA advisory or directive | Assessment against advisory scope | Within [X] days of advisory |

---

## 7. Risk Treatment Options

*This section defines the options available for treating identified cyber security risks and the process by which treatment decisions are made and implemented. Authors should align treatment options with the Organisation's control framework and investment approval processes.*

### 7.1 Risk Treatment Framework

Following risk assessment and evaluation, identified risks shall be subject to a treatment decision. [Organization Name] adopts the following four standard risk treatment options, consistent with ISO/IEC 27005 and the Organisation's ERM framework:

| Treatment Option | Description | Applicability |
|---|---|---|
| **Risk Avoidance** | Eliminate the risk by discontinuing or not undertaking the activity that creates the risk | Where the risk cannot be adequately reduced and the activity is not essential to NCII operations |
| **Risk Reduction (Mitigation)** | Implement controls to reduce the likelihood and/or impact of the risk to within the risk appetite | The primary treatment approach for most NCII-related risks |
| **Risk Transfer (Sharing)** | Transfer the financial consequence of the risk to a third party (e.g., cyber insurance, contractual liability transfer) | As a supplementary measure where residual financial risk remains after mitigation |
| **Risk Acceptance** | Formally acknowledge and accept the risk, typically for Low-rated residual risks | Only where risk is within appetite and explicit acceptance has been granted per Section 8 |

> **Note:** Risk Acceptance is **not** a permitted treatment for risks rated **Critical** without explicit Board approval. Risk Transfer does not eliminate regulatory obligations under Act 854.

### 7.2 Risk Treatment Planning

For each risk requiring treatment, a **Risk Treatment Plan** shall be developed containing:

| Field | Description |
|---|---|
| Risk ID | Reference to the Cyber Security Risk Register |
| Risk Description | Summary of the risk being treated |
| Current Risk Rating | Inherent risk score and rating |
| Selected Treatment Option | Avoidance / Reduction / Transfer / Acceptance |
| Treatment Actions | Specific controls or actions to be implemented |
| Control Owner | Named individual responsible for implementing the treatment |
| Target Completion Date | Date by which treatment is to be implemented |
| Expected Residual Risk Rating | Projected risk score following treatment |
| Resources Required | Budget, personnel, or technology required |
| Dependencies | Any dependencies on other projects or approvals |
| Status | Not Started / In Progress / Completed / Overdue |

### 7.3 Control Selection Principles

When selecting controls to reduce cyber security risk, the Organisation shall:

- Prioritise controls that address **Critical** and **High** rated risks first.
- Select controls that are proportionate to the asset value and risk level.
- Prefer controls that address root causes over those that merely detect or respond to incidents.
- Reference the following control frameworks as guidance for control selection:
  - **ISO/IEC 27001:2022 Annex A** — Information security controls
  - **NIST CSF 2.0** — Cybersecurity Framework functions and categories
  - **NACSA NCII Sector-Specific Security Standards** — [Applicable Sector]
  - **CIS Controls v8** — Prioritised cyber defence actions
  - **BNM RMiT** — Technology risk controls for financial institutions

### 7.4 Control Categories

Controls shall be classified as follows to ensure a defence-in-depth approach:

| Control Category | Description | Examples |
|---|---|---|
| **Preventive** | Prevent threats from exploiting vulnerabilities | Access controls, encryption, network segmentation, patch management |
| **Detective** | Detect and alert on security events | SIEM, IDS/IPS, security monitoring, log management |
| **Corrective** | Restore systems and data after an incident | Incident response procedures, backup and recovery, DRP |
| **Deterrent** | Reduce the likelihood of intentional attacks | Security awareness training, policy enforcement, audits |
| **Compensating** | Provide alternative risk reduction where primary controls cannot be implemented | Enhanced monitoring in lieu of patching for legacy OT systems |

### 7.5 Cyber Insurance (Risk Transfer)

Where cyber insurance is used as a risk treatment mechanism:

- The scope of coverage shall be reviewed annually by the CRO in consultation with the CISO to ensure alignment with the Organisation's risk profile.
- Insurance coverage shall not be relied upon as the **primary** treatment for risks within the NCII environment.
- The Organisation shall ensure that insurance policy conditions do not conflict with its Act 854 reporting and disclosure obligations.
- All insurance arrangements shall be documented in the **Risk Treatment Plan** and the **Risk Register**.

---

## 8. Risk Acceptance Authority Levels

*This section defines who has the authority to formally accept residual cyber security risks at various rating levels. Authors must ensure these authority levels are approved by the Board and reflect the Organisation's governance structure.*

### 8.1 Principle of Formal Risk Acceptance

No identified cyber security risk relating to NCII assets shall be informally accepted or ignored. All risk acceptance decisions must be:

- **Formally documented** in the Cyber Security Risk Register.
- **Time-bound** — specifying the period for which the acceptance is valid (not to exceed 12 months without re-evaluation).
- **Rationale-supported** — with a documented business justification for acceptance.
- **Condition-based** — where compensating controls are in place, these must be specified.
- **Reviewed** — risk acceptance positions must be re-evaluated at each annual risk assessment cycle.

### 8.2 Risk Acceptance Authority Matrix

| Risk Rating | Score Range | Acceptance Authority | Escalation Requirement | Maximum Acceptance Period |
|---|---|---|---|---|
| **Critical** | 16–25 | Board of Directors / Board Risk Committee | Mandatory — must be presented to Board with full risk briefing | 6 months maximum; mandatory re-evaluation |
| **High** | 10–15 | Chief Executive Officer (CEO) + CRO + CISO (joint sign-off) | Mandatory — escalated to Board Risk Committee for noting | 12 months |
| **Medium** | 5–9 | Chief Risk Officer (CRO) | Notify CISO; summarise in quarterly risk report | 12 months |
| **Low** | 1–4 | Chief Information Security Officer (CISO) | Record in Risk Register; include in annual risk summary | 12 months |

### 8.3 Conditions for Risk Acceptance

Risk acceptance is only permissible where **all** of the following conditions are satisfied:

- A genuine and documented effort has been made to identify feasible treatment options.
- The cost or operational impact of available treatment options is demonstrably disproportionate to the risk being accepted.
- Compensating controls are in place and documented.
- The risk owner has been notified and concurs with the acceptance decision.
- The risk does not place the Organisation in knowing breach of Act 854 obligations, NACSA directives, or any other applicable law.

### 8.4 Prohibited Risk Acceptance

The following risk scenarios shall **not** be subject to risk acceptance under any circumstances, and must be treated:

- Risks relating to known exploitation of critical vulnerabilities in NCII systems for which a patch or workaround exists.
- Risks where non-treatment would constitute a clear breach of Act 854 Section 18 or Section 21 obligations.
- Risks that NACSA has specifically directed the Organisation to remediate.
- Risks related to the absence of mandatory security controls specified in applicable NACSA sector standards.

### 8.5 Escalation of Unresolved Risk Acceptance Disputes

Where there is disagreement between the Risk Owner and the relevant acceptance authority on the appropriate risk treatment or acceptance position, the matter shall be escalated as follows:

1. Dispute at CISO level → escalate to CRO.
2. Dispute at CRO level → escalate to CEO.
3. Dispute at CEO level → escalate to Board Risk Committee.
4. If the dispute relates to a regulatory interpretation → escalate to the Compliance function for formal legal opinion before proceeding.

---

## 9. Risk Monitoring and Reporting

*This section establishes how identified and treated risks are tracked over time, and how risk information is communicated to relevant stakeholders. Authors should align reporting cycles with existing governance committee structures.*

### 9.1 Cyber Security Risk Register

[Organization Name] shall maintain a **Cyber Security Risk Register** as the central repository for all identified cyber security risks relating to NCII. The Risk Register shall be:

- Maintained and owned by the CISO, with input from Risk Owners across the Organisation.
- Reviewed and updated at minimum on a **quarterly basis**, and following any material risk event or assessment.
- Accessible to the CRO, relevant Risk Owners, Internal Audit, and the Compliance function.
- Retained in a manner that supports audit by NACSA and internal auditors.

**Mandatory fields for each risk entry in the Risk Register:**

| Field | Description |
|---|---|
| Risk ID | Unique identifier (e.g., CSR-2025-001) |
| Risk Description | Clear narrative description of the risk |
| Risk Category | Threat category (per Section 6.3) |
| Affected NCII Assets | Referenced from Asset Register |
| Date Identified | Date risk was first identified |
| Risk Owner | Named individual |
| Inherent Likelihood | Score (1–5) |
| Inherent Impact | Score (1–5) |
| Inherent Risk Score | Calculated score and rating |
| Current Controls | Controls currently in place |
| Control Effectiveness | Effective / Partially Effective / Ineffective |
| Residual Likelihood | Score (1–5) |
| Residual Impact | Score (1–5) |
| Residual Risk Score | Calculated score and rating |
| Treatment Option | Avoidance / Reduction / Transfer / Acceptance |
| Treatment Plan Reference | Link to Risk Treatment Plan |
| Treatment Status | Not Started / In Progress / Completed / Overdue |
| Target Treatment Date | [Date] |
| Acceptance Authority | If accepted, the approving authority |
| Acceptance Expiry Date | If accepted, date acceptance lapses |
| Last Review Date | Date of last review |
| Next Review Date | Scheduled next review |
| Notes / Comments | Any additional context |

### 9.2 Key Risk Indicators (KRIs)

The Organisation shall maintain a suite of **Key Risk Indicators (KRIs)** for NCII cyber security risk. KRIs provide an early warning signal of increasing risk exposure before risks materialise into incidents.

**Mandatory KRIs for NCII Cyber Security:**

| KRI | Metric | Green Threshold | Amber Threshold | Red Threshold | Reporting Frequency |
|---|---|---|---|---|---|
| Unpatched Critical Vulnerabilities (CVSS ≥ 9.0) | Number of open critical CVEs on NCII systems | 0 | 1–3 (>30 days open) | ≥4, or any >60 days | Monthly |
| Overdue Risk Treatment Actions | % of treatment plan actions past due date | <5% | 5–15% | >15% | Monthly |
| Privileged Access Accounts Without MFA | Number of privileged accounts lacking MFA on NCII systems | 0 | 1–2 | ≥3 | Monthly |
| Third-Party Risk Assessments Overdue | Number of NCII-connected vendors overdue for security review | 0 | 1–2 | ≥3 | Quarterly |
| Cyber Security Incidents (High/Critical) | Number of High or Critical incidents in the reporting period | 0 | 1 | ≥2 | Monthly |
| Security Awareness Training Completion | % of NCII-role staff completing mandatory security training | ≥95% | 85–94% | <85% | Quarterly |
| Penetration Test Findings (Critical/High Unresolved) | Number of unresolved critical/high findings >90 days | 0 | 1–2 | ≥3 | Quarterly |
| Risk Register Reviews Overdue | Number of risks not reviewed within scheduled period | 0 | 1–3 | ≥4 | Quarterly |

*Authors should add organisation-specific KRIs relevant to the NCII sector and operational context.*

### 9.3 Monitoring Activities

The following ongoing monitoring activities shall be conducted to support cyber security risk management:

| Activity | Description | Frequency | Responsible Party |
|---|---|---|---|
| Risk Register Review | Full review and update of all risk register entries | Quarterly minimum | CISO / Risk Owners |
| KRI Monitoring | Collection and analysis of KRI data | Monthly | CISO / Security Operations |
| Vulnerability Scanning | Automated scanning of NCII systems | [Monthly / Quarterly] | [Security Operations / IT] |
| Penetration Testing | Independent adversarial testing of NCII systems | Annual minimum (Act 854 s.19) | [External Assessor — NACSA Approved] |
| Third-Party Risk Review | Review of NCII-connected vendor security posture | Annual per vendor | CISO / Vendor Management |
| Control Effectiveness Testing | Assessment of whether implemented controls are operating effectively | Annual | Internal Audit / CISO |
| Threat Intelligence Review | Review of emerging threats relevant to NCII | Monthly | [Threat Intelligence / CISO] |
| Risk Appetite Statement Review | Review of Board risk appetite against current threat environment | Annual / Event-driven | CRO + Board Risk Committee |

### 9.4 Risk Reporting Structure

*Authors should map the reporting structure to the Organisation's actual governance committees.*

| Report | Content | Audience | Frequency |
|---|---|---|---|
| **NCII Cyber Security Risk Dashboard** | KRI status, risk register summary, open treatment actions, incident summary | CISO, CRO, Senior Management | Monthly |
| **Quarterly Cyber Security Risk Report** | Risk register updates, KRI trends, treatment plan progress, emerging threats, third-party risk summary | Board Risk Committee, CRO, CEO, Compliance | Quarterly |
| **Annual Cyber Security Risk Review** | Full risk assessment results, risk appetite review, Year-in-review analysis, proposed risk appetite changes | Board of Directors, Audit Committee | Annual |
| **Incident Risk Notification** | Post-incident risk reassessment, treatment recommendations | CRO, CEO, Board (if High/Critical) | Post-incident (as required) |
| **NACSA Regulatory Reporting** | Mandatory incident and risk reporting as required by Act 854 and NACSA directives | NACSA | As required by regulation |

### 9.5 NACSA Regulatory Reporting Obligations

The Organisation acknowledges its mandatory reporting obligations under Act 854 and shall ensure that:

- Any cyber security incident affecting NCII is reported to NACSA in accordance with Section 26 of Act 854 and applicable subsidiary regulations within the prescribed timeframe.
- Risk information requested by NACSA in the course of an inspection or investigation is provided promptly and accurately.
- The CISO and Compliance function jointly maintain a **Regulatory Reporting Log** documenting all submissions made to NACSA.

---

## 10. Integration with Enterprise Risk Management

*This section explains how the Cyber Security Risk Management framework interacts with and contributes to the Organisation's broader Enterprise Risk Management (ERM) structure. Authors should ensure that integration points are defined and operational.*

### 10.1 ERM Integration Principles

[Organization Name] treats cyber security risk as a sub-category of **Technology Risk** within its overarching ERM taxonomy. The following principles govern the integration between this Policy and the ERM framework:

- **Single Risk Universe**: All cyber security risks are captured in the Cyber Security Risk Register, which feeds into the Organisation's ERM Risk Universe on a defined schedule.
- **Consistent Methodology**: The risk assessment methodology in Section 6 is aligned with the Organisation's ERM risk scoring methodology to enable comparison and aggregation of risks across categories.
- **Unified Reporting**: Cyber security risk information is incorporated into the Organisation's enterprise-level risk reports presented to the Board Risk Committee and Board of Directors.
- **Common Risk Appetite**: The cyber security risk appetite in Section 5 is a component of the Organisation's overall Board-approved Risk Appetite Statement.

### 10.2 Integration with Other Risk Frameworks

| Risk Framework | Integration Point | Mechanism |
|---|---|---|
| **Operational Risk Management** | NCII cyber incidents are classified as operational risk events; major incidents are reported through the operational risk incident reporting process | Shared incident taxonomy; dual-reporting for qualifying events |
| **Business Continuity Management (BCM)** | Cyber risks with availability impact inform BCP/DRP scenarios; BCP tests validate cyber resilience | Risk Register inputs to BCP risk scenarios; BCP exercises inform residual risk ratings |
| **Third-Party / Vendor Risk Management** | Cyber risk of NCII-connected third parties assessed and tracked | Vendor security assessments feed into Cyber Security Risk Register; high-risk vendors flagged to Procurement/Vendor Management |
| **Project and Change Risk** | New systems and changes to NCII require risk assessment prior to implementation | Change management gate review includes mandatory cyber risk assessment sign-off by CISO |
| **Financial Risk** | Quantification of cyber risk financial impact informs financial risk reserve calculations | Annual quantification exercise shared with Finance and Actuarial functions |
| **Compliance Risk** | Act 854 and NACSA regulatory risk tracked as compliance risks | Compliance function tracks regulatory obligations; cyber non-compliance escalated through Compliance Risk framework |

### 10.3 Escalation to Enterprise Risk Level

Cyber security risks shall be escalated to enterprise-level ERM treatment and Board visibility where:

- A single cyber security risk is rated **Critical** (Score ≥ 16).
- Multiple **High**-rated risks are unresolved and collectively present a systemic NCII risk.
- A cyber security event triggers or is likely to trigger a breach of Act 854 obligations.
- A cyber security risk materially affects the Organisation's ability to meet its financial system obligations.

### 10.4 Risk Aggregation and Concentration

The CRO, in consultation with the CISO, shall annually assess whether there is undue **concentration** of cyber security risk in any of the following dimensions:

- Concentration in a single technology or platform (e.g., single cloud provider, single operating system).
- Concentration through a single third-party vendor or managed service provider.
- Concentration in a single geographic location (data centre, colocation facility).
- Concentration of critical functions in a single team or individual (key-person risk).

Where concentration risk is identified, treatment options shall be assessed and a remediation plan developed within [X] months.

### 10.5 Risk-Based Security Investment

The cyber security risk management process shall directly inform the annual cyber security budget and investment prioritisation process. The CISO shall:

- Annually produce a **Risk-Based Investment Justification** mapping proposed security investments to specific risks in the Risk Register.
- Present unresolved High and Critical risks to the CRO and CFO as part of the budget planning cycle to ensure adequate resources are allocated to treatment.
- Ensure that cost-benefit analysis of proposed controls references the risk reduction benefit in terms of reduced residual risk score.

---

## 11. Roles and Responsibilities

*This section assigns accountability for all key activities in this Policy. Authors should ensure role titles reflect the Organisation's actual governance structure and that all named roles exist and have accepted their responsibilities.*

### 11.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Board / BRC | CEO | CRO | CISO | Risk Owners | IT / Security Ops | Internal Audit | Compliance | Third Parties |
|---|---|---|---|---|---|---|---|---|---|
| Approve Risk Appetite Statement | A | C | R | C | — | — | I | C | — |
| Review and Update Risk Appetite | C | I | R | C | — | — | I | C | — |
| Conduct NCII Risk Assessments | I | I | C | R | C | C | — | C | C |
| Maintain Cyber Security Risk Register | I | I | C | R | C | C | — | I | — |
| Own and Monitor Individual Risks | I | I | C | C | R | C | — | I | — |
| Approve Risk Treatment Plans (High/Critical) | A/I | A | R | C | C | — | I | I | — |
| Implement Risk Treatment Controls | I | I | I | A | R | R | — | I | C |
| Formal Risk Acceptance (Critical) | A | C | C | C | — | — | — | I | — |
| Formal Risk Acceptance (High) | I | A | R | C | — | — | — | I | — |
| Formal Risk Acceptance (Medium) | — | I | A | C | C | — | — | — | — |
| Formal Risk Acceptance (Low) | — | — | I | A | C | — | — | — | — |
| Maintain KRI Dashboard | I | I | I | R | C | C | — | I | — |
| Report to Board Risk Committee | A | I | R | C | I | — | — | I | — |
| Conduct Penetration Testing | I | — | I | A | — | C | I | — | R |
| Conduct Vulnerability Scanning | I | — | I | A | — | R | I | — | — |
| Third-Party Risk Assessments | I | — | C | R | C | C | — | C | A |
| Regulatory Reporting to NACSA | I | I | C | R | — | — | — | A | — |
| Annual Policy Review | A | I | R | C | C | — | C | C | — |
| Compliance Monitoring and Audit | I | I | C | C | — | — | A | C | — |
| Security Awareness Training (NCII Roles) | — | — | I | A | C | R | — | I | — |

### 11.2 Role Descriptions

#### 11.2.1 Board of Directors / Board Risk Committee (BRC)

- Ultimate accountability for the Organisation's cyber security risk governance and Act 854 compliance.
- Approves the Cyber Security Risk Appetite Statement.
- Reviews and notes the Annual Cyber Security Risk Review.
- Approves acceptance of Critical-rated cyber security risks.
- Ensures adequate resources are allocated to NCII cyber security risk management.

#### 11.2.2 Chief Executive Officer (CEO)

- Accountable to the Board for the Organisation's NCII cyber security risk posture.
- Joint approver (with CRO and CISO) for acceptance of High-rated risks.
- Ensures organisational culture supports cyber security risk management.

#### 11.2.3 Chief Risk Officer (CRO)

- Owns the ERM framework and ensures cyber security risk is integrated into the enterprise risk universe.
- Accountable for the quarterly and annual cyber security risk reports to the BRC.
- Approves treatment plans for High-rated risks.
- Formally accepts Medium-rated risks (with CISO consultation).
- Arbitrates escalated risk acceptance disputes.

#### 11.2.4 Chief Information Security Officer (CISO)

- Operationally responsible for the Cyber Security Risk Management framework under this Policy.
- Owns and maintains the Cyber Security Risk Register and NCII Asset Register.
- Leads NCII risk assessments and coordinates with Risk Owners.
- Formally accepts Low-rated risks.
- Manages regulatory relationship with NACSA on cyber security risk matters (with Compliance support).
- Reports KRI status monthly to CRO and Senior Management.

#### 11.2.5 Risk Owners

- Named senior managers accountable for specific risks within their functional area.
- Responsible for implementing and monitoring risk treatment actions assigned to them.
- Escalate changes in risk status to the CISO promptly.
- Provide quarterly updates to the CISO for Risk Register maintenance.

#### 11.2.6 IT and Security Operations

- Responsible for implementing technical controls identified in Risk Treatment Plans.
- Conducts vulnerability scanning and provides results to CISO.
- Operates security monitoring tools and escalates incidents.
- Provides technical input to risk assessments.

#### 11.2.7 Internal Audit

- Provides independent assurance that the Cyber Security Risk Management framework is operating effectively.
- Conducts periodic audits of the Risk Register, treatment plan implementation, and control effectiveness.
- Reports findings to the Audit Committee and Board.

#### 11.2.8 Compliance Function

- Maintains awareness of Act 854 requirements and NACSA directives.
- Advises CISO and CRO on regulatory interpretation.
- Supports NACSA regulatory reporting and manages the Regulatory Reporting Log.
- Escalates potential regulatory breaches through the Compliance Risk framework.

---

## 12. Policy Compliance and Enforcement

*This section establishes how compliance with this Policy is monitored and what consequences arise from non-compliance. Authors should ensure enforcement mechanisms are proportionate and consistent with the Organisation's HR and disciplinary policies.*

### 12.1 Compliance Monitoring

Compliance with this Policy shall be monitored through:

- **Quarterly KRI reviews** conducted by the CISO.
- **Annual control effectiveness assessments** conducted by Internal Audit.
- **Annual NCII risk assessments** validating that risk management activities are being conducted as required.
- **Periodic regulatory audits** by NACSA under Act 854, Section 19.
- **Incident post-mortems** that examine whether this Policy was followed prior to and during incidents.

### 12.2 Non-Compliance

Failure to comply with this Policy may result in:

- For **employees**: disciplinary action up to and including termination, in accordance with the Organisation's Human Resources Disciplinary Policy.
- For **third parties**: contractual remedies, suspension of access, or termination of the vendor relationship.
- For **the Organisation**: regulatory enforcement action by NACSA under Act 854, including administrative penalties under Part VI of the Act.

All instances of material non-compliance with this Policy shall be reported to the CISO and CRO, documented, and tracked to resolution.

### 12.3 Policy Exceptions

Where operational circumstances require a temporary exception to this Policy:

- A **formal exception request** must be submitted to the CISO using the approved exception request template (Appendix D).
- The CISO may approve exceptions for Low and Medium-rated risks with compensating controls.
- Exceptions for High-rated or Critical-rated risks require CRO and CEO approval.
- All exceptions shall be time-limited (maximum [90] days) and documented in the Risk Register.
- Exceptions shall not be used to circumvent NACSA regulatory requirements.

---

## 13. Review and Approval

### 13.1 Policy Review Schedule

This Policy shall be reviewed:

- **Annually**, no later than [anniversary of the Effective Date].
- **Within [30] days** of a material change in Act 854 subsidiary regulations or NACSA directives.
- **Following a significant cyber security incident** affecting NCII assets.
- **Upon a material change** in the Organisation's NCII designation status, technology landscape, or risk profile.

Reviews shall be led by the CISO in consultation with the CRO, Compliance, and Legal functions. Proposed material changes shall be submitted to the Board Risk Committee for approval.

### 13.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], CISO | Initial version — approved by Board Risk Committee |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 13.3 Approval Record

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) | [Name] | [Signature] | [Date] |
| Chief Executive Officer (CEO) | [Name] | [Signature] | [Date] |
| Chairman, Board Risk Committee | [Name] | [Signature] | [Date] |
| Company Secretary (for Board noting) | [Name] | [Signature] | [Date] |

---

## 14. References

*This section lists all regulatory instruments, standards, and internal documents that this Policy draws upon or implements.*

### 14.1 Legislation and Regulations

| Reference | Title | Relevant Sections |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Sections 18, 19, 21, 26 |
| Act 709 | Personal Data Protection Act 2010 | Sections 9–10 (security standards for personal data) |
| [FSA 2013] | Financial Services Act 2013 | [Relevant sections — if applicable] |
| [IFSA 2013] | Islamic Financial Services Act 2013 | [Relevant sections — if applicable] |

### 14.2 Regulatory Guidelines and Directives

| Reference | Title | Issuing Body |
|---|---|---|
| [RMiT] | Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) |
| [NACSA-NCII-01] | NACSA NCII Sector-Specific Cyber Security Standards — [Sector] | NACSA |
| [NACSA-IR-01] | NACSA Cyber Security Incident Reporting Guidelines | NACSA |
| [PDPC-01] | PDPC Data Protection Guidelines | PDPC |

### 14.3 International Standards

| Standard | Title |
|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements |
| ISO/IEC 27005:2022 | Information Security — Guidance on Managing Information Security Risks |
| ISO 31000:2018 | Risk Management — Guidelines |
| NIST SP 800-30 Rev. 1 | Guide for Conducting Risk Assessments |
| NIST CSF 2.0 | Cybersecurity Framework |
| IEC 62443 | Security for Industrial Automation and Control Systems |
| CIS Controls v8 | Centre for Internet Security Critical Security Controls |

### 14.4 Internal Documents

| Document | Description |
|---|---|
| Enterprise Risk Management (ERM) Framework | Parent risk management framework for the Organisation |
| Information Security Policy | Overarching information security governance document |
| NCII Asset Register | Register of all assets in scope for NCII designation |
| Business Continuity Plan (BCP) | Organisational continuity planning covering NCII scenarios |
| Disaster Recovery Plan (DRP) | Technical recovery procedures for NCII systems |
| Cyber Security Incident Response Plan | Procedures for detecting, containing, and recovering from cyber incidents |
| Third-Party Risk Management Policy | Policy governing security requirements for vendors and partners |
| Security Awareness and Training Programme | Programme for NCII-role staff security education |

---

## 15. Appendices

### Appendix A: Cyber Security Risk Register Template

*Authors should maintain the full Risk Register in a controlled spreadsheet or GRC platform. The template below illustrates the minimum required fields for each risk entry.*

| Field | Entry |
|---|---|
| **Risk ID** | CSR-[YYYY]-[NNN] |
| **Risk Title** | [Short descriptive title] |
| **Risk Description** | [Detailed narrative: "There is a risk that [threat] will exploit [vulnerability] resulting in [impact] affecting [asset]"] |
| **Risk Category** | [Malicious External / Malicious Internal / Unintentional / Third-Party / Environmental / Systemic] |
| **Affected NCII Asset(s)** | [Asset ID(s) from Asset Register] |
| **NCII Designation** | [Designated / Candidate] |
| **Date Identified** | [DD/MM/YYYY] |
| **Risk Owner** | [Name, Title] |
| **Inherent Likelihood** | [1–5] |
| **Inherent Impact** | [1–5] |
| **Inherent Risk Score** | [Calculated: L × I] |
| **Inherent Risk Rating** | [Critical / High / Medium / Low] |
| **Existing Controls** | [List of controls currently in place] |
| **Control Effectiveness** | [Effective / Partially Effective / Ineffective] |
| **Residual Likelihood** | [1–5] |
| **Residual Impact** | [1–5] |
| **Residual Risk Score** | [Calculated] |
| **Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Risk Appetite Status** | [Within Appetite / Outside Appetite] |
| **Treatment Option** | [Avoidance / Reduction / Transfer / Acceptance] |
| **Treatment Plan Ref** | [RTP-[YYYY]-[NNN]] |
| **Treatment Actions** | [Summary of planned actions] |
| **Control Owner** | [Name, Title] |
| **Target Completion Date** | [DD/MM/YYYY] |
| **Treatment Status** | [Not Started / In Progress / Completed / Overdue] |
| **Acceptance Authority** | [If accepted: name and role] |
| **Acceptance Expiry** | [If accepted: DD/MM/YYYY] |
| **Last Reviewed** | [DD/MM/YYYY] |
| **Next Review Due** | [DD/MM/YYYY] |
| **Comments** | [Any additional notes] |

---

### Appendix B: Risk Treatment Plan Template

**Risk Treatment Plan Reference:** RTP-[YYYY]-[NNN]
**Associated Risk ID:** CSR-[YYYY]-[NNN]
**Risk Title:** [Risk Title]
**Date Prepared:** [DD/MM/YYYY]
**Prepared By:** [Name, Title]
**Approved By:** [Name, Title]

| Field | Detail |
|---|---|
| **Current Residual Risk Rating** | [Critical / High / Medium / Low — Score: X] |
| **Target Residual Risk Rating** | [Target rating after treatment — Score: X] |
| **Treatment Option Selected** | [Avoidance / Reduction / Transfer / Acceptance] |
| **Business Justification** | [Rationale for the selected treatment option] |

**Treatment Actions:**

| # | Action Description | Owner | Resources Required | Start Date | Target Completion | Status |
|---|---|---|---|---|---|---|
| 1 | [Specific action] | [Name] | [Budget/FTE/Tool] | [Date] | [Date] | [Status] |
| 2 | [Specific action] | [Name] | [Budget/FTE/Tool] | [Date] | [Date] | [Status] |
| 3 | [Specific action] | [Name] | [Budget/FTE/Tool] | [Date] | [Date] | [Status] |

**Compensating Controls (if applicable):**

| Control | Description | Owner | Review Date |
|---|---|---|---|
| [Control name] | [Description] | [Name] | [Date] |

**Expected Residual Risk After Treatment:**

| Dimension | Before Treatment | After Treatment |
|---|---|---|
| Likelihood | [Score] | [Score] |
| Impact | [Score] | [Score] |
| Risk Score | [Score] | [Score] |
| Risk Rating | [Rating] | [Target Rating] |

**Review and Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Risk Owner | | | |
| CISO | | | |
| CRO (if High/Critical) | | | |

---

### Appendix C: Risk Acceptance Form Template

**Risk Acceptance Reference:** RAC-[YYYY]-[NNN]
**Associated Risk ID:** CSR-[YYYY]-[NNN]
**Date of Acceptance:** [DD/MM/YYYY]
**Acceptance Expiry Date:** [DD/MM/YYYY] *(Maximum 12 months; 6 months for Critical)*

| Field | Detail |
|---|---|
| **Risk Title** | [Risk Title] |
| **Residual Risk Rating** | [Critical / High / Medium / Low] |
| **Required Acceptance Authority** | [Per Section 8.2] |
| **Business Justification for Acceptance** | [Detailed rationale. Include why treatment options are not feasible or proportionate at this time] |
| **Compensating Controls in Place** | [List all compensating controls that reduce exposure during the acceptance period] |
| **Conditions of Acceptance** | [Any specific conditions that, if changed, would require re-evaluation — e.g., if a compensating control fails] |
| **Regulatory Compliance Confirmation** | [Confirm that acceptance does not place the Organisation in breach of Act 854 or NACSA directives] |
| **Risk Owner Concurrence** | [Confirm Risk Owner has been notified and concurs] |

**Acceptance Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Risk Owner | | | |
| CISO | | | |
| CRO *(Medium, High, Critical)* | | | |
| CEO *(High, Critical)* | | | |
| Board Risk Committee Chair *(Critical only)* | | | |

**Review Schedule During Acceptance Period:**

| Review Date | Reviewer | Outcome | Comments |
|---|---|---|---|
| [Date — 3 months] | [CISO / Risk Owner] | [Risk still acceptable / Escalate / Treat] | |
| [Date — 6 months] | [CISO / CRO] | [Risk still acceptable / Escalate / Treat] | |
| [Date — Expiry] | [Acceptance Authority] | [Renew / Treat / Escalate] | |

---

### Appendix D: Policy Exception Request Template

**Exception Request Reference:** EXC-[YYYY]-[NNN]
**Date of Request:** [DD/MM/YYYY]
**Requested By:** [Name, Title, Department]

| Field | Detail |
|---|---|
| **Policy Section(s) Requiring Exception** | [Specific section(s) of this Policy] |
| **Description of Exception** | [What specifically cannot be complied with, and why] |
| **Business Justification** | [Reason the exception is needed — operational necessity, technical constraint, etc.] |
| **Duration of Exception Required** | [Maximum 90 days — specify start and end date] |
| **Risk of Granting the Exception** | [Assessment of the cyber security risk introduced by the exception] |
| **Compensating Controls** | [Controls that will be implemented to reduce risk during the exception period] |
| **Remediation Plan** | [How and when full compliance will be achieved] |

**Approval:**

| Role | Decision | Name | Signature | Date |
|---|---|---|---|---|
| CISO | [Approve / Decline] | | | |
| CRO *(if High/Critical risk)* | [Approve / Decline] | | | |
| CEO *(if High/Critical risk)* | [Approve / Decline] | | | |

---

### Appendix E: Glossary of Risk Categories and Threat Taxonomy

*Authors should maintain this taxonomy in alignment with NACSA threat categories and the Organisation's ERM taxonomy. Update following each annual risk assessment cycle.*

**Tier 1 — Strategic Threat Categories:**

| Code | Category | Description |
|---|---|---|
| T-EXT | External Malicious Actor | Threats from parties outside the Organisation acting with intent to harm |
| T-INT | Internal Malicious Actor | Threats from individuals within the Organisation acting with intent to harm |
| T-ACC | Accidental / Unintentional | Threats arising from errors, omissions, or negligence without malicious intent |
| T-3P | Third Party / Supply Chain | Threats arising through or because of third-party relationships |
| T-ENV | Environmental | Threats from environmental events affecting cyber infrastructure |
| T-SYS | Systemic / Emerging | Threats from systemic vulnerabilities or emerging attack techniques |

**Tier 2 — Specific Threat Examples (non-exhaustive):**

| Code | Threat | Category | NCII Relevance |
|---|---|---|---|
| T-EXT-001 | Advanced Persistent Threat (APT) | T-EXT | High — state-sponsored actors targeting NCII |
| T-EXT-002 | Ransomware | T-EXT | High — operational disruption to NCII services |
| T-EXT-003 | Distributed Denial of Service (DDoS) | T-EXT | High — availability impact on NCII |
| T-EXT-004 | Phishing / Spear Phishing | T-EXT | Medium — initial access vector |
| T-INT-001 | Privilege Abuse | T-INT | High — insider access to NCII systems |
| T-INT-002 | Data Exfiltration | T-INT | High — confidentiality of NCII data |
| T-ACC-001 | Misconfiguration | T-ACC | High — common cause of NCII exposure |
| T-ACC-002 | Accidental Data Disclosure | T-ACC | Medium |
| T-3P-001 | Supply Chain Compromise | T-3P | High — software or hardware supply chain |
| T-3P-002 | Managed Service Provider (MSP) Breach | T-3P | High — MSP access to NCII |
| T-ENV-001 | Power Failure / UPS Failure | T-ENV | Medium — availability impact |
| T-SYS-001 | Zero-Day Exploit | T-SYS | High — unpatched NCII vulnerabilities |
| T-SYS-002 | AI-Enabled Attacks | T-SYS | Emerging — enhanced threat capability |

---

### Appendix F: Regulatory Cross-Reference Table

*This appendix maps the requirements of Act 854 and related regulatory instruments to the sections of this Policy, to support audit and compliance verification.*

| Regulatory Requirement | Regulatory Source | Relevant Policy Sections |
|---|---|---|
| Duty to implement cyber security measures for NCII | Act 854, Section 21 | Sections 5, 6, 7, 8, 9 |
| Duty to maintain security of designated NCII | Act 854, Section 18 | Sections 2, 5, 6, 12 |
| Cyber security audit of NCII | Act 854, Section 19 | Sections 9.3, 12.1 |
| Incident reporting to NACSA | Act 854, Section 26 | Section 9.5 |
| Technology risk management | BNM RMiT | Sections 6, 7, 9, 10 |
| Risk assessment and treatment | ISO/IEC 27005:2022 | Sections 6, 7 |
| Security controls | ISO/IEC 27001:2022 Annex A | Section 7.3 |
| Data security obligations | PDPA 2010, Sections 9–10 | Sections 2, 6.2 |

---

*End of Document*

---

**Document Classification: CONFIDENTIAL**
**[Organization Name] | Cyber Security Risk Management Policy | Version 1.0**
**Unauthorised reproduction or distribution is prohibited.**
**For queries regarding this document, contact: [CISO Office] | [contact@organization.com.my]**