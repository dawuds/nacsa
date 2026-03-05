# Compliance Gap Analysis Report — Cyber Security Act 2024 (Act 854)

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Compliance Officer |
| **Organization** | [Organization Name] |
| **Prepared By** | [Prepared By] |
| **Approved By** | [Approved By] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Effective Date** | [Effective Date] |
| **Status** | [Draft / Under Review / Approved] |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. This document contains sensitive information relating to the organisation's cybersecurity posture and must be handled in accordance with the organisation's Information Classification and Handling Policy.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Regulatory Framework Overview](#3-regulatory-framework-overview)
4. [Methodology](#4-methodology)
5. [Requirement-by-Requirement Assessment](#5-requirement-by-requirement-assessment)
6. [Gap Severity Classification](#6-gap-severity-classification)
7. [Current State vs Required State Analysis](#7-current-state-vs-required-state-analysis)
8. [Remediation Effort Estimates](#8-remediation-effort-estimates)
9. [Prioritised Remediation Roadmap](#9-prioritised-remediation-roadmap)
10. [Resource Requirements](#10-resource-requirements)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Executive Summary

*Provide a concise, senior-leadership-facing summary of the overall compliance posture of [Organization Name] against the Cyber Security Act 2024 (Act 854) and the associated Code of Practice (CoP). This section should be no more than two pages and must communicate overall gap status, critical findings, and top remediation priorities without requiring the reader to consult the full report body.*

### 1.1 Overall Compliance Posture

*Summarise the organisation's current compliance maturity level, expressed as a percentage or maturity rating, against Act 854 and CoP requirements assessed in this report.*

| Metric | Value |
|---|---|
| **Total Requirements Assessed** | [Number] |
| **Compliant** | [Number] ([%]) |
| **Partially Compliant** | [Number] ([%]) |
| **Non-Compliant** | [Number] ([%]) |
| **Not Applicable** | [Number] ([%]) |
| **Overall Compliance Score** | [%] |
| **Assessment Date** | [Assessment Date] |
| **Assessment Period** | [Start Date] to [End Date] |

### 1.2 Critical Findings Summary

*List the top 5–10 critical gaps identified during this assessment. Each finding should reference the relevant section of Act 854 or CoP and indicate the business risk.*

| Finding ID | Summary | Relevant Section | Risk Rating | Status |
|---|---|---|---|---|
| GAP-001 | [Critical finding summary] | s22 / s24 | Critical | Open |
| GAP-002 | [Critical finding summary] | s22 | High | Open |
| GAP-003 | [Critical finding summary] | s24 | High | In Progress |
| GAP-004 | [Critical finding summary] | CoP Section [X] | Medium | Open |
| GAP-005 | [Critical finding summary] | s22 / CoP Section [X] | Medium | Open |
| [GAP-NNN] | [Add rows as required] | | | |

### 1.3 Key Recommendations

*Provide the top strategic recommendations arising from this assessment. These should be actionable, ownership-assigned, and time-bound.*

1. **[Recommendation 1]:** [Brief description of the recommended action, responsible party, and target completion date.]
2. **[Recommendation 2]:** [Brief description of the recommended action, responsible party, and target completion date.]
3. **[Recommendation 3]:** [Brief description of the recommended action, responsible party, and target completion date.]
4. **[Recommendation 4]:** [Brief description of the recommended action, responsible party, and target completion date.]
5. **[Recommendation 5]:** [Brief description of the recommended action, responsible party, and target completion date.]

### 1.4 Management Statement

*Include a brief statement from the Chief Executive Officer, Chief Information Security Officer, or Compliance Officer acknowledging the findings and affirming the organisation's commitment to remediation.*

> [Management statement to be inserted here. This statement should acknowledge the findings of this report, confirm the organisation's commitment to achieving full compliance with the Cyber Security Act 2024, and authorise the remediation roadmap outlined in Section 9.]
>
> **[Name]**
> **[Title]**
> **[Date]**

---

## 2. Purpose and Scope

### 2.1 Purpose

*Describe the purpose of this document, including its role in the organisation's overall compliance programme and its relationship to other compliance artefacts.*

This Compliance Gap Analysis Report has been prepared by [Organization Name] to systematically identify, assess, and document gaps between the organisation's current cybersecurity posture and the requirements imposed by the **Cyber Security Act 2024 (Act 854)**, in particular **Section 22** (Duties of National Critical Information Infrastructure entity) and **Section 24** (Cybersecurity risk assessment and audit), and the associated **Code of Practice (CoP)** issued by the **National Cyber Security Agency (NACSA)**.

The primary objectives of this report are to:

- Provide a structured, evidence-based assessment of the organisation's compliance status against each applicable requirement of Act 854 and the CoP.
- Identify and quantify gaps between the current state of cybersecurity controls and the required state under Act 854 and CoP.
- Classify identified gaps by severity and potential regulatory, operational, and reputational impact.
- Provide actionable remediation recommendations, effort estimates, and a prioritised roadmap to close identified gaps within a defined timeframe.
- Serve as the foundational input for the organisation's annual cybersecurity compliance programme and board-level risk reporting.

This document is mandatory under [Organization Name]'s Cybersecurity Compliance Framework and must be reviewed and approved annually, or following any material change to the organisation's operating environment, technology landscape, or the applicable regulatory requirements.

### 2.2 Scope

*Define the organisational and technical boundaries of this gap analysis. Be specific about what is included and what is explicitly excluded, and provide justification for any exclusions.*

#### 2.2.1 Organisational Scope

This gap analysis covers the following organisational units, entities, and functions of [Organization Name]:

| In-Scope Entity / Function | Justification |
|---|---|
| [Business Unit / Department 1] | [Reason for inclusion — e.g., processes critical information infrastructure] |
| [Business Unit / Department 2] | [Reason for inclusion] |
| [Subsidiary / Affiliate — if applicable] | [Reason for inclusion] |
| [IT Operations / Infrastructure] | [Reason for inclusion] |
| [Third-Party Service Providers — as applicable] | [Reason for inclusion — e.g., outsourced NCII functions] |

The following entities or functions are **explicitly excluded** from this assessment:

| Excluded Entity / Function | Justification for Exclusion |
|---|---|
| [Excluded Entity 1] | [Reason — e.g., assessed under separate framework; not designated NCII] |
| [Excluded Entity 2] | [Reason] |

#### 2.2.2 Technical Scope

This assessment encompasses the following categories of systems, networks, and assets:

- **Critical Systems:** [List of critical systems in scope — e.g., core banking system, payment processing infrastructure]
- **Network Infrastructure:** [Description of in-scope network segments — e.g., production LAN, DMZ, WAN links]
- **Cloud Environments:** [Description of in-scope cloud tenancies or services — e.g., [Cloud Provider] tenancy for [Application]]
- **Endpoints:** [Description of in-scope endpoint categories — e.g., managed corporate endpoints, privileged access workstations]
- **Third-Party Interfaces:** [Description of in-scope third-party connections — e.g., SWIFT connectivity, payment network links]
- **Data Assets:** [Description of in-scope data categories — e.g., personally identifiable information, critical financial data]

#### 2.2.3 Regulatory Scope

This gap analysis is specifically scoped to the requirements of:

- Cyber Security Act 2024 (Act 854), **Section 22** — Duties of National Critical Information Infrastructure entity
- Cyber Security Act 2024 (Act 854), **Section 24** — Cybersecurity risk assessment and audit
- NACSA Code of Practice (CoP) — [Applicable CoP version and effective date]

Requirements from other applicable frameworks (e.g., Bank Negara Malaysia Risk Management in Technology (RMiT) Policy Document, Personal Data Protection Act 2010) are **not** within the scope of this specific report, although cross-references are noted where relevant.

### 2.3 Assumptions and Limitations

*Document any assumptions made during the assessment that may affect findings, and any limitations in the assessment methodology or evidence reviewed.*

The following assumptions and limitations apply to this report:

1. **Information Currency:** All information collected from [Organization Name] personnel and systems is assumed to be accurate and current as of [Assessment Date]. Material changes occurring after this date are not reflected in this report.
2. **Evidence Availability:** This assessment is based on documentary evidence, interviews, and observation. Where evidence was unavailable or inaccessible, a conservative (less favourable) compliance determination has been applied.
3. **Regulatory Interpretation:** Interpretations of Act 854 and CoP requirements are based on the published text of the legislation and guidance available as at [Assessment Date]. NACSA guidance or clarifications issued after this date are not reflected.
4. **Scope Boundary:** Systems and processes explicitly excluded from scope (Section 2.2.1 and 2.2.2) have not been assessed. Gaps in excluded areas may exist and are not captured in this report.
5. **[Additional Assumption / Limitation]:** [Description]

---

## 3. Regulatory Framework Overview

### 3.1 Cyber Security Act 2024 (Act 854)

*Provide a brief overview of the Cyber Security Act 2024, its objectives, and its relevance to [Organization Name]. This section educates readers who may not be familiar with the legislative background and establishes the regulatory context for the gap analysis.*

The **Cyber Security Act 2024 (Act 854)** is primary Malaysian legislation enacted to govern the protection of **National Critical Information Infrastructure (NCII)**. The Act establishes a legal framework that assigns binding duties and obligations on designated NCII entities across ten defined NCII sectors, including the financial services sector regulated by Bank Negara Malaysia (BNM).

Key objectives of Act 854 relevant to this assessment include:

- Establishing mandatory cybersecurity duties for NCII entities (s22)
- Requiring periodic cybersecurity risk assessments and audits (s24)
- Granting NACSA enforcement and supervisory powers over NCII entities
- Establishing a framework for incident notification and response
- Imposing penalties for non-compliance, including criminal liability for responsible officers

[Organization Name] has been [designated / is subject to designation] as an NCII entity under the **[Relevant Sector]** sector pursuant to Act 854. This designation triggers full applicability of all provisions assessed in this report.

### 3.2 Section 22 — Duties of NCII Entity

*Summarise the specific obligations imposed on NCII entities under Section 22 of Act 854. Reference the specific subsections that are assessed in this report.*

Section 22 of Act 854 imposes the following duties on NCII entities:

| Subsection | Duty | Summary |
|---|---|---|
| s22(1) | Compliance with Code of Practice | The NCII entity must comply with the applicable Code of Practice issued by NACSA. |
| s22(2) | Cybersecurity measures | The entity must establish, implement, and maintain cybersecurity measures as specified in the CoP. |
| s22(3) | [Subsection description] | [Summary of obligation] |
| s22([X]) | [Subsection description] | [Summary of obligation] |
| [Add rows as required] | | |

### 3.3 Section 24 — Cybersecurity Risk Assessment and Audit

*Summarise the specific obligations imposed on NCII entities under Section 24 of Act 854, including frequency, scope, and reporting requirements.*

Section 24 of Act 854 imposes the following obligations relating to cybersecurity risk assessment and audit:

| Subsection | Obligation | Frequency / Trigger | Summary |
|---|---|---|---|
| s24(1) | Cybersecurity risk assessment | [Specified frequency per CoP] | The NCII entity must conduct a cybersecurity risk assessment in the prescribed form and within the prescribed period. |
| s24(2) | Cybersecurity audit | [Specified frequency per CoP] | The NCII entity must engage a qualified assessor to conduct an independent cybersecurity audit. |
| s24(3) | Submission to NACSA | [Specified deadline] | Results of the risk assessment and audit must be submitted to NACSA in the prescribed form. |
| s24([X]) | [Obligation description] | [Frequency / Trigger] | [Summary of obligation] |
| [Add rows as required] | | |

### 3.4 NACSA Code of Practice (CoP)

*Provide an overview of the applicable CoP, including its version, effective date, and the specific sections or control domains assessed in this report.*

The **NACSA Code of Practice (CoP)** [Version] (effective [Date]) establishes the specific technical and organisational cybersecurity requirements that NCII entities must implement to discharge their duties under s22 of Act 854. The CoP is structured into the following control domains:

| CoP Domain | Reference | Brief Description |
|---|---|---|
| [Domain 1 — e.g., Governance] | CoP Section [X] | [Brief description of domain requirements] |
| [Domain 2 — e.g., Risk Management] | CoP Section [X] | [Brief description of domain requirements] |
| [Domain 3 — e.g., Asset Management] | CoP Section [X] | [Brief description of domain requirements] |
| [Domain 4 — e.g., Access Control] | CoP Section [X] | [Brief description of domain requirements] |
| [Domain 5 — e.g., Incident Management] | CoP Section [X] | [Brief description of domain requirements] |
| [Domain 6 — e.g., Business Continuity] | CoP Section [X] | [Brief description of domain requirements] |
| [Domain 7 — e.g., Supply Chain Security] | CoP Section [X] | [Brief description of domain requirements] |
| [Add rows as required] | | |

---

## 4. Methodology

### 4.1 Assessment Approach

*Describe the methodology and approach used to conduct the gap analysis, including the assessment framework, evidence collection methods, and rating criteria.*

This gap analysis was conducted using the following approach:

1. **Requirement Decomposition:** Each obligation under Act 854 (s22 and s24) and the applicable CoP was decomposed into discrete, assessable requirements. A total of **[Number]** discrete requirements were identified and assessed.
2. **Evidence Collection:** Evidence was collected through the following methods:
   - **Documentation Review:** Review of policies, procedures, standards, guidelines, and records maintained by [Organization Name].
   - **Interviews:** Structured interviews with key stakeholders including [list relevant roles — e.g., CISO, IT Operations Manager, Risk Manager].
   - **Technical Testing / Observation:** [Describe any technical assessments conducted — e.g., vulnerability scans, configuration reviews, penetration testing results reviewed.]
   - **Self-Assessment Questionnaires:** Completion of structured questionnaires by control owners.
3. **Compliance Rating:** Each requirement was rated against the compliance scale defined in Section 6.
4. **Gap Analysis:** For each non-compliant or partially compliant requirement, a gap statement was documented, quantifying the difference between the current state and the required state.
5. **Remediation Planning:** Remediation actions, effort estimates, and ownership were assigned in collaboration with relevant business and technology stakeholders.

### 4.2 Assessment Team

*List the individuals who participated in conducting this gap analysis, their roles, and their areas of responsibility.*

| Name | Role / Title | Organization | Responsibility |
|---|---|---|---|
| [Name] | [Title] | [Organization Name / Assessor Firm] | Assessment Lead |
| [Name] | [Title] | [Organization Name / Assessor Firm] | [Area — e.g., Technical Assessment] |
| [Name] | [Title] | [Organization Name / Assessor Firm] | [Area — e.g., Governance & Policy Review] |
| [Name] | [Title] | [Organization Name] | Internal Sponsor / Key Contact |
| [Name] | [Title] | [Organization Name] | [Subject Matter Expert area] |
| [Add rows as required] | | | |

### 4.3 Evidence Register

*Reference the full evidence register maintained as Appendix A. Provide a summary of the volume and type of evidence reviewed.*

A full register of all documentary evidence reviewed during this assessment is maintained in **Appendix A — Evidence Register**. The following provides a high-level summary:

| Evidence Category | Number of Documents Reviewed |
|---|---|
| Policies and Procedures | [Number] |
| Standards and Guidelines | [Number] |
| Architecture and Design Documents | [Number] |
| Risk Registers and Assessment Reports | [Number] |
| Audit Reports and Testing Results | [Number] |
| Configuration and System Documentation | [Number] |
| Contracts and Third-Party Agreements | [Number] |
| Training and Awareness Records | [Number] |
| Incident Records | [Number] |
| **Total** | **[Total Number]** |

### 4.4 Assessment Timeline

| Phase | Activity | Start Date | End Date | Status |
|---|---|---|---|---|
| Phase 1 | Scoping and Planning | [Date] | [Date] | [Complete / In Progress] |
| Phase 2 | Document Collection | [Date] | [Date] | [Complete / In Progress] |
| Phase 3 | Interviews and Workshops | [Date] | [Date] | [Complete / In Progress] |
| Phase 4 | Technical Review | [Date] | [Date] | [Complete / In Progress] |
| Phase 5 | Gap Analysis and Rating | [Date] | [Date] | [Complete / In Progress] |
| Phase 6 | Remediation Planning | [Date] | [Date] | [Complete / In Progress] |
| Phase 7 | Draft Report | [Date] | [Date] | [Complete / In Progress] |
| Phase 8 | Review and Approval | [Date] | [Date] | [Complete / In Progress] |

---

## 5. Requirement-by-Requirement Assessment

*This section contains the core gap analysis findings. Each requirement under Act 854 and the applicable CoP is assessed individually. Findings are documented using a standardised format that captures the requirement, the evidence reviewed, the compliance determination, and the identified gap.*

### 5.1 Assessment Rating Scale

Before reviewing individual findings, the following compliance rating definitions apply throughout Section 5:

| Rating | Code | Definition |
|---|---|---|
| **Compliant** | C | The organisation fully meets the requirement. Adequate evidence is in place to demonstrate compliance. No gaps identified. |
| **Partially Compliant** | PC | The organisation meets some aspects of the requirement but has identifiable gaps. Controls exist but are incomplete, inconsistent, or not fully evidenced. |
| **Non-Compliant** | NC | The organisation does not meet the requirement. Controls are absent or materially inadequate. |
| **Not Applicable** | N/A | The requirement does not apply to the organisation based on its designated NCII sector, size, or operational context. Justification is documented. |
| **Not Assessed** | NA | The requirement was in scope but could not be assessed due to unavailability of evidence or access. To be treated as Non-Compliant for risk purposes until assessed. |

---

### 5.2 Section 22 Requirements Assessment

#### 5.2.1 s22 — [Requirement Title: e.g., Compliance with Code of Practice]

*For each Section 22 requirement, complete the following assessment record.*

| Field | Detail |
|---|---|
| **Requirement ID** | REQ-S22-001 |
| **Regulatory Reference** | Act 854, s22([X]) |
| **CoP Cross-Reference** | CoP Section [X.X] |
| **Requirement Statement** | [Full text or paraphrase of the regulatory requirement as stated in Act 854 or CoP] |
| **Compliance Rating** | [C / PC / NC / N/A / NA] |
| **Gap Severity** | [Critical / High / Medium / Low / None] |
| **Control Owner** | [Name / Role] |
| **Evidence Reviewed** | [List key evidence documents reviewed — reference Appendix A for full register] |

**Current State:**

[Describe what the organisation currently has in place to address this requirement. Include references to specific policies, controls, systems, or processes that were observed or documented.]

**Required State:**

[Describe precisely what Act 854, s22([X]) and/or the CoP requires the organisation to have in place.]

**Gap Statement:**

[Clearly articulate the gap between the current state and the required state. Be specific about what is missing, incomplete, or inadequate.]

**Finding Narrative:**

[Provide a detailed narrative description of the finding, including evidence references, observations from interviews, and any relevant context that helps understand the gap.]

**Recommended Remediation:**

[Describe the specific actions required to close this gap. Where possible, reference specific controls, standards, or guidance that should be implemented.]

**Remediation Reference:** GAP-[NNN] *(Cross-reference to Section 8 — Remediation Effort Estimates and Section 9 — Roadmap)*

---

#### 5.2.2 s22 — [Requirement Title: e.g., Cybersecurity Measures — Governance]

| Field | Detail |
|---|---|
| **Requirement ID** | REQ-S22-002 |
| **Regulatory Reference** | Act 854, s22([X]) |
| **CoP Cross-Reference** | CoP Section [X.X] |
| **Requirement Statement** | [Full text or paraphrase of requirement] |
| **Compliance Rating** | [C / PC / NC / N/A / NA] |
| **Gap Severity** | [Critical / High / Medium / Low / None] |
| **Control Owner** | [Name / Role] |
| **Evidence Reviewed** | [List key evidence] |

**Current State:** [Description]

**Required State:** [Description]

**Gap Statement:** [Description]

**Finding Narrative:** [Description]

**Recommended Remediation:** [Description]

**Remediation Reference:** GAP-[NNN]

---

#### 5.2.3 s22 — [Requirement Title: e.g., Cybersecurity Measures — Risk Management]

| Field | Detail |
|---|---|
| **Requirement ID** | REQ-S22-003 |
| **Regulatory Reference** | Act 854, s22([X]) |
| **CoP Cross-Reference** | CoP Section [X.X] |
| **Requirement Statement** | [Full text or paraphrase of requirement] |
| **Compliance Rating** | [C / PC / NC / N/A / NA] |
| **Gap Severity** | [Critical / High / Medium / Low / None] |
| **Control Owner** | [Name / Role] |
| **Evidence Reviewed** | [List key evidence] |

**Current State:** [Description]

**Required State:** [Description]

**Gap Statement:** [Description]

**Finding Narrative:** [Description]

**Recommended Remediation:** [Description]

**Remediation Reference:** GAP-[NNN]

---

#### 5.2.4 s22 — [Requirement Title: e.g., Cybersecurity Measures — Incident Management]

| Field | Detail |
|---|---|
| **Requirement ID** | REQ-S22-004 |
| **Regulatory Reference** | Act 854, s22([X]) |
| **CoP Cross-Reference** | CoP Section [X.X] |
| **Requirement Statement** | [Full text or paraphrase of requirement] |
| **Compliance Rating** | [C / PC / NC / N/A / NA] |
| **Gap Severity** | [Critical / High / Medium / Low / None] |
| **Control Owner** | [Name / Role] |
| **Evidence Reviewed** | [List key evidence] |

**Current State:** [Description]

**Required State:** [Description]

**Gap Statement:** [Description]

**Finding Narrative:** [Description]

**Recommended Remediation:** [Description]

**Remediation Reference:** GAP-[NNN]

---

*[Continue adding s22 requirement assessments — REQ-S22-005 through REQ-S22-NNN — following the same format for each discrete requirement identified in the CoP. Typical assessments cover 15–40 discrete s22 requirements depending on CoP granularity.]*

---

### 5.3 Section 24 Requirements Assessment

#### 5.3.1 s24 — [Requirement Title: e.g., Cybersecurity Risk Assessment — Scope and Frequency]

| Field | Detail |
|---|---|
| **Requirement ID** | REQ-S24-001 |
| **Regulatory Reference** | Act 854, s24([X]) |
| **CoP Cross-Reference** | CoP Section [X.X] |
| **Requirement Statement** | [Full text or paraphrase of requirement] |
| **Compliance Rating** | [C / PC / NC / N/A / NA] |
| **Gap Severity** | [Critical / High / Medium / Low / None] |
| **Control Owner** | [Name / Role] |
| **Evidence Reviewed** | [List key evidence] |

**Current State:** [Description]

**Required State:** [Description]

**Gap Statement:** [Description]

**Finding Narrative:** [Description]

**Recommended Remediation:** [Description]

**Remediation Reference:** GAP-[NNN]

---

#### 5.3.2 s24 — [Requirement Title: e.g., Independent Cybersecurity Audit]

| Field | Detail |
|---|---|
| **Requirement ID** | REQ-S24-002 |
| **Regulatory Reference** | Act 854, s24([X]) |
| **CoP Cross-Reference** | CoP Section [X.X] |
| **Requirement Statement** | [Full text or paraphrase of requirement] |
| **Compliance Rating** | [C / PC / NC / N/A / NA] |
| **Gap Severity** | [Critical / High / Medium / Low / None] |
| **Control Owner** | [Name / Role] |
| **Evidence Reviewed** | [List key evidence] |

**Current State:** [Description]

**Required State:** [Description]

**Gap Statement:** [Description]

**Finding Narrative:** [Description]

**Recommended Remediation:** [Description]

**Remediation Reference:** GAP-[NNN]

---

#### 5.3.3 s24 — [Requirement Title: e.g., Submission of Assessment Results to NACSA]

| Field | Detail |
|---|---|
| **Requirement ID** | REQ-S24-003 |
| **Regulatory Reference** | Act 854, s24([X]) |
| **CoP Cross-Reference** | CoP Section [X.X] |
| **Requirement Statement** | [Full text or paraphrase of requirement] |
| **Compliance Rating** | [C / PC / NC / N/A / NA] |
| **Gap Severity** | [Critical / High / Medium / Low / None] |
| **Control Owner** | [Name / Role] |
| **Evidence Reviewed** | [List key evidence] |

**Current State:** [Description]

**Required State:** [Description]

**Gap Statement:** [Description]

**Finding Narrative:** [Description]

**Recommended Remediation:** [Description]

**Remediation Reference:** GAP-[NNN]

---

*[Continue adding s24 requirement assessments — REQ-S24-004 through REQ-S24-NNN — following the same format.]*

---

### 5.4 Assessment Summary Matrix

*This table provides a consolidated, single-page view of all requirements assessed and their compliance ratings. It is intended as a quick-reference tool for management and auditors.*

| Req ID | Regulatory Reference | CoP Ref | Requirement Summary | Rating | Severity | Remediation Ref |
|---|---|---|---|---|---|---|
| REQ-S22-001 | s22([X]) | CoP [X.X] | [Requirement Summary] | [C/PC/NC/N/A] | [Critical/High/Medium/Low/None] | GAP-[NNN] |
| REQ-S22-002 | s22([X]) | CoP [X.X] | [Requirement Summary] | [C/PC/NC/N/A] | [Critical/High/Medium/Low/None] | GAP-[NNN] |
| REQ-S22-003 | s22([X]) | CoP [X.X] | [Requirement Summary] | [C/PC/NC/N/A] | [Critical/High/Medium/Low/None] | GAP-[NNN] |
| REQ-S22-004 | s22([X]) | CoP [X.X] | [Requirement Summary] | [C/PC/NC/N/A] | [Critical/High/Medium/Low/None] | GAP-[NNN] |
| REQ-S22-005 | s22([X]) | CoP [X.X] | [Requirement Summary] | [C/PC/NC/N/A] | [Critical/High/Medium/Low/None] | GAP-[NNN] |
| REQ-S24-001 | s24([X]) | CoP [X.X] | [Requirement Summary] | [C/PC/NC/N/A] | [Critical/High/Medium/Low/None] | GAP-[NNN] |
| REQ-S24-002 | s24([X]) | CoP [X.X] | [Requirement Summary] | [C/PC/NC/N/A] | [Critical/High/Medium/Low/None] | GAP-[NNN] |
| REQ-S24-003 | s24([X]) | CoP [X.X] | [Requirement Summary] | [C/PC/NC/N/A] | [Critical/High/Medium/Low/None] | GAP-[NNN] |
| [Add rows as required] | | | | | | |

---

## 6. Gap Severity Classification

*This section defines the severity classification framework used to rate each identified gap and presents a consolidated view of all gaps grouped by severity. The classification criteria ensure consistent and defensible ratings across all identified gaps.*

### 6.1 Severity Classification Criteria

*Gaps are classified based on a combination of regulatory risk (likelihood and impact of regulatory enforcement action), operational risk (impact on the organisation's ability to deliver critical services), and reputational risk.*

| Severity | Definition | Regulatory Risk | Operational Risk | Typical Response Timeframe |
|---|---|---|---|---|
| **Critical** | A fundamental absence of required controls or practices that represents an immediate and material risk of regulatory breach, enforcement action, or significant operational harm. | Likely enforcement action; potential criminal liability. | Severe — material impact on critical service delivery. | Immediate — within 30 days |
| **High** | A significant gap in required controls or practices that represents a material risk of non-compliance and could result in operational disruption or significant regulatory findings. | Regulatory finding likely; formal direction probable. | High — partial impact on critical services possible. | Short-term — within 90 days |
| **Medium** | A gap that represents incomplete or inconsistent implementation of required controls. While a current breach may not be immediately apparent, the gap increases vulnerability or risk of future non-compliance. | Regulatory observation likely. | Moderate — limited operational impact. | Medium-term — within 180 days |
| **Low** | A minor gap or documentation deficiency that does not materially affect the organisation's cybersecurity posture but should be addressed to achieve full compliance and maintain audit readiness. | Noted as observation or opportunity for improvement. | Minimal. | Long-term — within 12 months |

### 6.2 Gap Severity Distribution

*Provide a summary of the number of gaps identified at each severity level, with a brief commentary on the overall risk profile.*

| Severity | Number of Gaps | Percentage of Total Gaps |
|---|---|---|
| Critical | [Number] | [%] |
| High | [Number] | [%] |
| Medium | [Number] | [%] |
| Low | [Number] | [%] |
| **Total Gaps** | **[Total]** | **100%** |

**Commentary:** *[Provide a 3–5 sentence narrative interpreting the severity distribution. Highlight any particularly concerning concentrations of critical or high severity gaps, or any control domains where gaps cluster.]*

### 6.3 Gap Register — Critical Findings

*The following table lists all gaps classified as Critical severity. These findings require immediate management attention and accelerated remediation.*

| Gap ID | Requirement Ref | Gap Description | Severity | Regulatory Risk | Operational Risk | Owner | Target Date |
|---|---|---|---|---|---|---|---|
| GAP-001 | REQ-S22-[X] | [Description of gap] | Critical | [Risk description] | [Impact description] | [Owner] | [Date] |
| GAP-002 | REQ-S24-[X] | [Description of gap] | Critical | [Risk description] | [Impact description] | [Owner] | [Date] |
| [Add rows as required] | | | | | | | |

### 6.4 Gap Register — High Severity Findings

*The following table lists all gaps classified as High severity.*

| Gap ID | Requirement Ref | Gap Description | Severity | Regulatory Risk | Operational Risk | Owner | Target Date |
|---|---|---|---|---|---|---|---|
| GAP-[NNN] | REQ-S22-[X] | [Description of gap] | High | [Risk description] | [Impact description] | [Owner] | [Date] |
| GAP-[NNN] | REQ-S24-[X] | [Description of gap] | High | [Risk description] | [Impact description] | [Owner] | [Date] |
| [Add rows as required] | | | | | | | |

### 6.5 Gap Register — Medium Severity Findings

*The following table lists all gaps classified as Medium severity.*

| Gap ID | Requirement Ref | Gap Description | Severity | Regulatory Risk | Operational Risk | Owner | Target Date |
|---|---|---|---|---|---|---|---|
| GAP-[NNN] | REQ-S22-[X] | [Description of gap] | Medium | [Risk description] | [Impact description] | [Owner] | [Date] |
| GAP-[NNN] | REQ-S24-[X] | [Description of gap] | Medium | [Risk description] | [Impact description] | [Owner] | [Date] |
| [Add rows as required] | | | | | | | |

### 6.6 Gap Register — Low Severity Findings

*The following table lists all gaps classified as Low severity.*

| Gap ID | Requirement Ref | Gap Description | Severity | Regulatory Risk | Operational Risk | Owner | Target Date |
|---|---|---|---|---|---|---|---|
| GAP-[NNN] | REQ-S22-[X] | [Description of gap] | Low | [Risk description] | [Impact description] | [Owner] | [Date] |
| GAP-[NNN] | REQ-S24-[X] | [Description of gap] | Low | [Risk description] | [Impact description] | [Owner] | [Date] |
| [Add rows as required] | | | | | | | |

---

## 7. Current State vs Required State Analysis

*This section provides a structured, domain-by-domain comparison of the organisation's current cybersecurity posture against the state required by Act 854 and the CoP. This analysis helps management understand the magnitude and nature of the transformation required to achieve full compliance.*

### 7.1 Domain-by-Domain Analysis

*For each CoP control domain, document the current state and the required state, and derive a domain-level compliance score.*

#### 7.1.1 [Domain 1 — e.g., Cybersecurity Governance]

| Attribute | Current State | Required State | Gap Magnitude |
|---|---|---|---|
| **Governance Structure** | [Description of current governance arrangements — e.g., cybersecurity responsibilities sit within IT operations; no dedicated CISO role] | [Description of what Act 854 / CoP requires — e.g., designated responsible officer; board-level cybersecurity oversight] | [Significant / Moderate / Minor] |
| **Policy Framework** | [Description of current policy landscape — e.g., IT security policy exists but not reviewed in 3 years; does not reference Act 854] | [CoP requirements — e.g., cybersecurity policy reviewed annually; aligned to CoP; approved by board] | [Significant / Moderate / Minor] |
| **Roles and Responsibilities** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Cybersecurity Committee** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Domain Compliance Score** | **[%]** | **100%** | **[Gap %]** |

**Domain Narrative:** *[Provide a 3–5 sentence summary of the domain's overall compliance status, the most significant gaps, and any positive findings or areas of strength.]*

---

#### 7.1.2 [Domain 2 — e.g., Risk Management]

| Attribute | Current State | Required State | Gap Magnitude |
|---|---|---|---|
| **Risk Assessment Process** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Risk Register** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Risk Appetite** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Third-Party Risk** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Domain Compliance Score** | **[%]** | **100%** | **[Gap %]** |

**Domain Narrative:** *[Domain summary — current state, key gaps, and areas of strength.]*

---

#### 7.1.3 [Domain 3 — e.g., Asset Management]

| Attribute | Current State | Required State | Gap Magnitude |
|---|---|---|---|
| **Asset Inventory** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Asset Classification** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Critical Asset Identification** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Domain Compliance Score** | **[%]** | **100%** | **[Gap %]** |

**Domain Narrative:** *[Domain summary.]*

---

#### 7.1.4 [Domain 4 — e.g., Access Control and Identity Management]

| Attribute | Current State | Required State | Gap Magnitude |
|---|---|---|---|
| **Access Control Policy** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Privileged Access Management** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Multi-Factor Authentication** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Access Reviews** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Domain Compliance Score** | **[%]** | **100%** | **[Gap %]** |

**Domain Narrative:** *[Domain summary.]*

---

#### 7.1.5 [Domain 5 — e.g., Incident Detection and Response]

| Attribute | Current State | Required State | Gap Magnitude |
|---|---|---|---|
| **Incident Response Plan** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Detection Capabilities (SOC/SIEM)** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **NACSA Notification Procedures** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Post-Incident Review** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Domain Compliance Score** | **[%]** | **100%** | **[Gap %]** |

**Domain Narrative:** *[Domain summary.]*

---

#### 7.1.6 [Domain 6 — e.g., Business Continuity and Disaster Recovery]

| Attribute | Current State | Required State | Gap Magnitude |
|---|---|---|---|
| **BCP / DRP Documentation** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **RTO / RPO Targets** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Testing and Exercises** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Domain Compliance Score** | **[%]** | **100%** | **[Gap %]** |

**Domain Narrative:** *[Domain summary.]*

---

#### 7.1.7 [Domain 7 — e.g., Supply Chain and Third-Party Security]

| Attribute | Current State | Required State | Gap Magnitude |
|---|---|---|---|
| **Third-Party Security Policy** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Vendor Due Diligence** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Contractual Security Requirements** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Ongoing Monitoring** | [Current state description] | [Required state description] | [Significant / Moderate / Minor] |
| **Domain Compliance Score** | **[%]** | **100%** | **[Gap %]** |

**Domain Narrative:** *[Domain summary.]*

---

*[Add additional domain sections as required by the applicable CoP.]*

---

### 7.2 Overall Compliance Heat Map

*The following table presents a consolidated heat map of compliance scores by domain, providing a visual overview of the organisation's compliance posture.*

| Domain | Compliance Score | Rating |
|---|---|---|
| [Domain 1 — Governance] | [%] | [Compliant / Partially Compliant / Non-Compliant] |
| [Domain 2 — Risk Management] | [%] | [Compliant / Partially Compliant / Non-Compliant] |
| [Domain 3 — Asset Management] | [%] | [Compliant / Partially Compliant / Non-Compliant] |
| [Domain 4 — Access Control] | [%] | [Compliant / Partially Compliant / Non-Compliant] |
| [Domain 5 — Incident Response] | [%] | [Compliant / Partially Compliant / Non-Compliant] |
| [Domain 6 — Business Continuity] | [%] | [Compliant / Partially Compliant / Non-Compliant] |
| [Domain 7 — Supply Chain] | [%] | [Compliant / Partially Compliant / Non-Compliant] |
| **Overall** | **[%]** | **[Overall Rating]** |

---

## 8. Remediation Effort Estimates

*This section provides detailed effort estimates for each identified gap. Estimates are used to inform resourcing decisions and support the prioritised roadmap in Section 9. Effort is expressed in person-days and indicative cost ranges to assist budget planning.*

### 8.1 Effort Estimation Methodology

*Explain how effort estimates were derived, including the basis for estimates and any assumptions made.*

Effort estimates in this section were derived using the following methodology:

- **Expert Judgement:** Estimates were developed in consultation with subject matter experts in cybersecurity, IT operations, legal/compliance, and project management within [Organization Name] and/or the assessment team.
- **Analogous Estimation:** Where similar remediation activities have been completed previously, actual effort from comparable prior projects was used as a reference.
- **Scope of Estimates:** Estimates cover internal effort only (person-days by role category) and exclude third-party procurement costs unless specifically noted. Technology and tooling costs are captured separately in Section 10 — Resource Requirements.
- **Accuracy:** Estimates are provided at ±[30/50]% accuracy at this stage. More precise estimates should be developed during detailed project planning.

**Effort Bands:**

| Band | Person-Days | Typical Complexity |
|---|---|---|
| **S (Small)** | < 5 | Minor documentation or procedural update |
| **M (Medium)** | 5–20 | Moderate process change or tool configuration |
| **L (Large)** | 20–60 | Significant process redesign or technology implementation |
| **XL (Extra Large)** | > 60 | Major programme of work; likely requires dedicated project |

### 8.2 Remediation Effort Register

*This table provides effort estimates for every gap identified in Section 6. Gaps are grouped by CoP domain for ease of reference.*

| Gap ID | Gap Description | Severity | Domain | Effort Band | Internal Person-Days | Key Roles Required | Dependencies | Indicative Cost (MYR) |
|---|---|---|---|---|---|---|---|---|
| GAP-001 | [Gap description] | Critical | [Domain] | [S/M/L/XL] | [Number] | [e.g., CISO, IT Arch, Legal] | [Dependencies] | [MYR Range] |
| GAP-002 | [Gap description] | Critical | [Domain] | [S/M/L/XL] | [Number] | [Roles] | [Dependencies] | [MYR Range] |
| GAP-003 | [Gap description] | High | [Domain] | [S/M/L/XL] | [Number] | [Roles] | [Dependencies] | [MYR Range] |
| GAP-004 | [Gap description] | High | [Domain] | [S/M/L/XL] | [Number] | [Roles] | [Dependencies] | [MYR Range] |
| GAP-005 | [Gap description] | Medium | [Domain] | [S/M/L/XL] | [Number] | [Roles] | [Dependencies] | [MYR Range] |
| GAP-006 | [Gap description] | Medium | [Domain] | [S/M/L/XL] | [Number] | [Roles] | [Dependencies] | [MYR Range] |
| GAP-007 | [Gap description] | Low | [Domain] | [S/M/L/XL] | [Number] | [Roles] | [Dependencies] | [MYR Range] |
| [Add rows as required] | | | | | | | | |
| **TOTAL** | | | | | **[Total Days]** | | | **MYR [Total Range]** |

### 8.3 Effort Summary by Domain

| Domain | Number of Gaps | Total Person-Days | Indicative Cost (MYR) |
|---|---|---|---|
| [Domain 1] | [Number] | [Days] | [MYR Range] |
| [Domain 2] | [Number] | [Days] | [MYR Range] |
| [Domain 3] | [Number] | [Days] | [MYR Range] |
| [Domain 4] | [Number] | [Days] | [MYR Range] |
| [Domain 5] | [Number] | [Days] | [MYR Range] |
| [Domain 6] | [Number] | [Days] | [MYR Range] |
| [Domain 7] | [Number] | [Days] | [MYR Range] |
| **Total** | **[Total]** | **[Total Days]** | **MYR [Total Range]** |

### 8.4 Effort Summary by Severity

| Severity | Number of Gaps | Total Person-Days | Indicative Cost (MYR) | % of Total Effort |
|---|---|---|---|---|
| Critical | [Number] | [Days] | [MYR Range] | [%] |
| High | [Number] | [Days] | [MYR Range] | [%] |
| Medium | [Number] | [Days] | [MYR Range] | [%] |
| Low | [Number] | [Days] | [MYR Range] | [%] |
| **Total** | **[Total]** | **[Total]** | **[Total Range]** | **100%** |

---

## 9. Prioritised Remediation Roadmap

*This section presents a prioritised, time-phased roadmap for remediating all identified gaps. The roadmap is designed to close the highest-risk gaps within the shortest feasible timeframe, while managing dependencies and resource constraints.*

### 9.1 Prioritisation Principles

*Describe the criteria used to prioritise remediation activities. Transparency on prioritisation logic helps stakeholders understand and endorse the roadmap.*

Remediation activities have been prioritised based on the following weighted criteria:

1. **Regulatory Risk (40%):** Gaps that pose the most immediate risk of regulatory enforcement action under Act 854 are prioritised above all others. Critical severity gaps with direct s22 or s24 implications take highest precedence.
2. **Operational Risk (30%):** Gaps that could enable significant operational disruption, data breach, or NCII compromise are prioritised based on likelihood and potential impact.
3. **Remediation Dependency (20%):** Some remediation activities are prerequisites for others (e.g., an updated risk framework may be required before policies can be revised). Dependencies are respected in the sequencing of the roadmap.
4. **Implementation Feasibility (10%):** Where two gaps are of similar priority, quick wins with low effort and high compliance impact are scheduled earlier to build momentum and demonstrate progress to NACSA.

### 9.2 Roadmap Overview

*The roadmap is structured into three phases aligned with the severity-based response timeframes defined in Section 6.1.*

| Phase | Timeframe | Focus | Gaps Addressed |
|---|---|---|---|
| **Phase 1 — Immediate** | Within 30 days | Close all Critical severity gaps | GAP-[NNN], GAP-[NNN], [etc.] |
| **Phase 2 — Short-Term** | 31–90 days | Close all High severity gaps | GAP-[NNN], GAP-[NNN], [etc.] |
| **Phase 3 — Medium-Term** | 91–180 days | Close all Medium severity gaps | GAP-[NNN], GAP-[NNN], [etc.] |
| **Phase 4 — Long-Term** | 181–365 days | Close all Low severity gaps; sustain programme | GAP-[NNN], GAP-[NNN], [etc.] |

### 9.3 Phase 1 — Immediate Actions (Within 30 Days)

*Detail all remediation actions required within 30 days. For each action, provide sufficient detail to enable a project manager to initiate the work immediately following approval of this report.*

| Action ID | Gap Ref | Action Description | Owner | Effort (Days) | Start Date | Target Date | Success Criteria | Status |
|---|---|---|---|---|---|---|---|---|
| ACT-001 | GAP-[NNN] | [Detailed description of the action required] | [Name / Role] | [Days] | [Date] | [Date] | [Measurable outcome that confirms the gap is closed] | Not Started |
| ACT-002 | GAP-[NNN] | [Detailed description] | [Name / Role] | [Days] | [Date] | [Date] | [Success criteria] | Not Started |
| ACT-003 | GAP-[NNN] | [Detailed description] | [Name / Role] | [Days] | [Date] | [Date] | [Success criteria] | Not Started |
| [Add rows as required] | | | | | | | | |

### 9.4 Phase 2 — Short-Term Actions (31–90 Days)

| Action ID | Gap Ref | Action Description | Owner | Effort (Days) | Start Date | Target Date | Success Criteria | Status |
|---|---|---|---|---|---|---|---|---|
| ACT-[NNN] | GAP-[NNN] | [Detailed description] | [Name / Role] | [Days] | [Date] | [Date] | [Success criteria] | Not Started |
| ACT-[NNN] | GAP-[NNN] | [Detailed description] | [Name / Role] | [Days] | [Date] | [Date] | [Success criteria] | Not Started |
| [Add rows as required] | | | | | | | | |

### 9.5 Phase 3 — Medium-Term Actions (91–180 Days)

| Action ID | Gap Ref | Action Description | Owner | Effort (Days) | Start Date | Target Date | Success Criteria | Status |
|---|---|---|---|---|---|---|---|---|
| ACT-[NNN] | GAP-[NNN] | [Detailed description] | [Name / Role] | [Days] | [Date] | [Date] | [Success criteria] | Not Started |
| ACT-[NNN] | GAP-[NNN] | [Detailed description] | [Name / Role] | [Days] | [Date] | [Date] | [Success criteria] | Not Started |
| [Add rows as required] | | | | | | | | |

### 9.6 Phase 4 — Long-Term Actions (181–365 Days)

| Action ID | Gap Ref | Action Description | Owner | Effort (Days) | Start Date | Target Date | Success Criteria | Status |
|---|---|---|---|---|---|---|---|---|
| ACT-[NNN] | GAP-[NNN] | [Detailed description] | [Name / Role] | [Days] | [Date] | [Date] | [Success criteria] | Not Started |
| ACT-[NNN] | GAP-[NNN] | [Detailed description] | [Name / Role] | [Days] | [Date] | [Date] | [Success criteria] | Not Started |
| [Add rows as required] | | | | | | | | |

### 9.7 Roadmap Milestone Summary

| Milestone | Description | Target Date | Owner | Status |
|---|---|---|---|---|
| M1 | All Critical gaps remediated; evidence documented | [Date] | [Owner] | Not Started |
| M2 | All High severity gaps remediated; evidence documented | [Date] | [Owner] | Not Started |
| M3 | Interim compliance status report submitted to Board | [Date] | [Owner] | Not Started |
| M4 | All Medium severity gaps remediated | [Date] | [Owner] | Not Started |
| M5 | All Low severity gaps remediated | [Date] | [Owner] | Not Started |
| M6 | Full compliance reassessment conducted | [Date] | [Owner] | Not Started |
| M7 | Updated Gap Analysis Report approved and filed | [Date] | [Owner] | Not Started |

### 9.8 Progress Tracking and Governance

*Describe how progress against the roadmap will be tracked, reported, and governed. This ensures accountability and provides a mechanism for early escalation of blockers.*

Progress against this roadmap will be governed through the following mechanisms:

- **Monthly Compliance Steering Committee:** The Compliance Steering Committee will review roadmap progress at each monthly meeting. Action owners are required to submit a status update [5] business days prior to each meeting.
- **Fortnightly Working Group:** A technical working group chaired by [Role] will convene fortnightly to coordinate Phase 1 and Phase 2 remediation activities.
- **Escalation Process:** Any action that is forecast to miss its target date by more than [10] business days must be escalated to the [CISO / Compliance Officer] immediately. Actions forecast to miss by more than [30] days must be escalated to the [Board Risk Committee / Management Committee].
- **Evidence Repository:** All remediation evidence must be stored in [designated repository — e.g., SharePoint compliance folder, GRC platform] under the naming convention [YYYY-MM — GAP-NNN — [Description]].
- **Closure Criteria:** A gap is considered closed only when the action owner has submitted evidence to the Compliance Officer and the Compliance Officer has reviewed and accepted the evidence as demonstrating full compliance with the requirement.

---

## 10. Resource Requirements

*This section documents the human, financial, and technology resources required to execute the remediation roadmap. It is intended to support budget planning, resource allocation, and business case development for any material investment required.*

### 10.1 Human Resource Requirements

*Identify the internal and external human resources required to execute the remediation programme. Include both dedicated and part-time resources.*

#### 10.1.1 Internal Resource Requirements

| Role | Department | Phase 1 (Days) | Phase 2 (Days) | Phase 3 (Days) | Phase 4 (Days) | Total (Days) | Notes |
|---|---|---|---|---|---|---|---|
| Compliance Officer | Compliance | [Days] | [Days] | [Days] | [Days] | [Total] | [e.g., Programme governance, evidence review] |
| CISO / Head of IT Security | IT Security | [Days] | [Days] | [Days] | [Days] | [Total] | [Notes] |
| IT Operations Manager | IT Operations | [Days] | [Days] | [Days] | [Days] | [Total] | [Notes] |
| IT Architect | IT | [Days] | [Days] | [Days] | [Days] | [Total] | [Notes] |
| Legal Counsel | Legal | [Days] | [Days] | [Days] | [Days] | [Total] | [Notes] |
| Risk Manager | Risk | [Days] | [Days] | [Days] | [Days] | [Total] | [Notes] |
| Project Manager | [Department] | [Days] | [Days] | [Days] | [Days] | [Total] | [Notes] |
| [Additional Role] | [Department] | [Days] | [Days] | [Days] | [Days] | [Total] | [Notes] |
| **Total Internal** | | **[Days]** | **[Days]** | **[Days]** | **[Days]** | **[Total]** | |

#### 10.1.2 External Resource Requirements

*Identify any external resources (consultants, managed service providers, specialist vendors) required to supplement internal capabilities.*

| Resource Type | Scope of Engagement | Phase | Estimated Engagement Duration | Indicative Cost (MYR) | Procurement Status |
|---|---|---|---|---|---|
| Cybersecurity Consultant | [Scope — e.g., Policy framework development] | Phase 1–2 | [Duration] | MYR [Range] | [Not Initiated / RFP in Progress / Contracted] |
| Independent Auditor (s24) | NACSA-required cybersecurity audit | Phase [X] | [Duration] | MYR [Range] | [Status] |
| Penetration Testing Provider | [Scope] | Phase [X] | [Duration] | MYR [Range] | [Status] |
| GRC Platform Vendor | [Scope] | Phase [X] | [Duration] | MYR [Range] | [Status] |
| [Additional Resource] | [Scope] | Phase [X] | [Duration] | MYR [Range] | [Status] |

### 10.2 Technology and Tooling Requirements

*Identify any technology investments required to close identified gaps. For each item, provide a business justification linked to specific gap(s).*

| Tool / Technology | Gap(s) Addressed | Business Justification | Estimated Cost (MYR) | Priority | Procurement Lead | Target Acquisition Date |
|---|---|---|---|---|---|---|
| [e.g., GRC Platform] | GAP-[NNN], GAP-[NNN] | [Justification — e.g., Required to maintain continuous compliance monitoring and evidence repository for Act 854 s22 reporting obligations] | MYR [Range] | [High / Medium / Low] | [Name / Role] | [Date] |
| [e.g., SIEM Enhancement] | GAP-[NNN] | [Justification] | MYR [Range] | [Priority] | [Lead] | [Date] |
| [e.g., PAM Solution] | GAP-[NNN] | [Justification] | MYR [Range] | [Priority] | [Lead] | [Date] |
| [e.g., Vulnerability Management Tool] | GAP-[NNN] | [Justification] | MYR [Range] | [Priority] | [Lead] | [Date] |
| [Add rows as required] | | | | | | |

### 10.3 Financial Resource Summary

*Provide a consolidated budget summary for the remediation programme. This summary should be suitable for submission to the Board or Management Committee for budget approval.*

| Category | Phase 1 (MYR) | Phase 2 (MYR) | Phase 3 (MYR) | Phase 4 (MYR) | Total (MYR) |
|---|---|---|---|---|---|
| Internal Labour (opportunity cost) | [Amount] | [Amount] | [Amount] | [Amount] | [Total] |
| External Consulting | [Amount] | [Amount] | [Amount] | [Amount] | [Total] |
| Technology / Tooling | [Amount] | [Amount] | [Amount] | [Amount] | [Total] |
| Training and Awareness | [Amount] | [Amount] | [Amount] | [Amount] | [Total] |
| Independent Audit (s24) | [Amount] | [Amount] | [Amount] | [Amount] | [Total] |
| Contingency ([X]%) | [Amount] | [Amount] | [Amount] | [Amount] | [Total] |
| **Total** | **MYR [Total]** | **MYR [Total]** | **MYR [Total]** | **MYR [Total]** | **MYR [Grand Total]** |

**Budget Status:** [Budgeted / Partially Budgeted — requires [MYR amount] additional approval / Not Budgeted — full budget approval required]

**Budget Approval Authority:** [Name / Committee]

**Budget Request Reference:** [Reference number if formal budget request has been submitted]

### 10.4 Capability and Skills Requirements

*Identify any skills gaps within the internal team that may affect the organisation's ability to execute the remediation roadmap, and propose measures to address them.*

| Skill / Capability | Current Gap | Proposed Resolution | Owner | Target Date |
|---|---|---|---|---|
| [e.g., Act 854 / NACSA CoP interpretation] | [Description of gap] | [e.g., External training; engage specialist consultant] | [Owner] | [Date] |
| [e.g., Cybersecurity risk assessment methodology] | [Description of gap] | [e.g., Staff training; hire specialist] | [Owner] | [Date] |
| [e.g., GRC platform administration] | [Description of gap] | [e.g., Vendor training] | [Owner] | [Date] |
| [Add rows as required] | | | | |

---

## 11. Roles and Responsibilities

*This section defines the roles and responsibilities of key stakeholders in the ongoing compliance programme for Act 854, using a RACI framework. RACI assignments apply to both the maintenance of this document and the execution of the remediation roadmap.*

### 11.1 RACI Definition

| Code | Role | Definition |
|---|---|---|
| **R** | Responsible | The individual(s) who perform the work or make the decision. There must be at least one R for each activity. |
| **A** | Accountable | The single individual who is ultimately accountable for correct completion and outcome. Only one A per activity. |
| **C** | Consulted | Individuals who are consulted and whose input is sought before a decision is made or action taken. Two-way communication. |
| **I** | Informed | Individuals who are kept informed of progress and outcomes. One-way communication. |

### 11.2 RACI Matrix — Compliance Programme Activities

| Activity | Board / Board Risk Committee | CEO / MD | CISO | Compliance Officer | Risk Manager | IT Operations | Legal Counsel | Business Units | External Auditor |
|---|---|---|---|---|---|---|---|---|---|
| Approve Compliance Gap Analysis Report | A | C | C | R | C | I | C | I | — |
| Conduct Gap Assessment | I | I | R | A | C | C | C | C | C |
| Assign Remediation Ownership | I | A | C | R | C | C | C | R | — |
| Execute Remediation Actions | I | I | C | A | C | R | C | R | — |
| Monitor Remediation Progress | I | I | C | R | A | C | I | C | — |
| Report to Board on Compliance Status | I | A | C | R | C | I | C | I | — |
| Submit Reports to NACSA (s24) | I | A | C | R | C | C | C | I | — |
| Engage Independent Auditor (s24) | I | A | R | A | C | C | C | I | — |
| Maintain Evidence Repository | I | I | C | A | C | R | C | C | — |
| Annual Review of this Document | I | I | C | A | R | C | C | C | C |
| Respond to NACSA Enquiries | I | A | C | R | C | C | R | C | — |
| Staff Cybersecurity Training | I | I | R | A | C | C | C | R | — |

### 11.3 Key Roles and Responsibilities Narrative

#### Compliance Officer

The Compliance Officer is the primary owner of this document and is accountable for:

- Conducting or coordinating the annual gap analysis against Act 854 and CoP requirements.
- Maintaining the Gap Register and tracking remediation progress.
- Escalating overdue or at-risk remediation items to management and the Board as appropriate.
- Coordinating the engagement of the independent auditor required under s24.
- Managing submissions to NACSA and maintaining the regulatory correspondence register.
- Reporting on compliance status to the Board Risk Committee [quarterly / at each meeting].

#### Chief Information Security Officer (CISO)

The CISO is responsible for:

- Providing subject matter expertise on cybersecurity controls and technical remediation options.
- Leading or supervising technical remediation activities.
- Ensuring that the organisation's cybersecurity measures are maintained in accordance with the CoP on an ongoing basis.
- Providing technical input to NACSA submissions and the independent audit.

#### Board / Board Risk Committee

The Board / Board Risk Committee is accountable for:

- Approving this report and the associated remediation roadmap.
- Providing oversight of the compliance programme through regular reporting.
- Approving material budget and resourcing decisions required for remediation.
- Maintaining ultimate accountability for the organisation's compliance with Act 854.

#### [Additional Role — e.g., IT Operations Manager]

[Description of responsibilities in the context of the compliance programme.]

---

## 12. Review and Approval

### 12.1 Review Schedule

This document must be reviewed in accordance with the following schedule:

| Review Trigger | Action Required | Responsible |
|---|---|---|
| **Annual scheduled review** | Full review and update of all sections; re-assessment against current CoP | Compliance Officer |
| **Material change to Act 854 or CoP** | Review of affected sections; update gap analysis for new or amended requirements | Compliance Officer |
| **Significant change to organisation's NCII systems or operating environment** | Review and update of affected sections; additional gap assessment if warranted | CISO / Compliance Officer |
| **Following completion of independent audit (s24)** | Update findings and gap register to reflect audit outcomes | Compliance Officer |
| **Following a material cybersecurity incident** | Review of incident-related sections; update gap register if new gaps identified | CISO / Compliance Officer |
| **NACSA direction or guidance** | Review and update affected sections within [30] days of receiving direction | Compliance Officer |

### 12.2 Version History

| Version | Date | Author | Changes | Approved By |
|---|---|---|---|---|
| 0.1 | [Date] | [Author] | Initial draft | — |
| 0.2 | [Date] | [Author] | [Description of changes — e.g., Incorporated stakeholder review comments] | — |
| 0.9 | [Date] | [Author] | [Description of changes — e.g., Final draft for approval] | — |
| 1.0 | [Date] | [Author] | [Description of changes — e.g., Approved version] | [Approved By] |
| [X.X] | [Date] | [Author] | [Description of changes for future versions] | [Approved By] |

### 12.3 Approval Sign-Off

By signing below, the approvers confirm that they have reviewed this Compliance Gap Analysis Report, that the findings and conclusions are accurate to the best of their knowledge, and that the remediation roadmap is approved for execution.

| Role | Name | Signature | Date |
|---|---|---|---|
| Compliance Officer | [Name] | __________________ | [Date] |
| Chief Information Security Officer | [Name] | __________________ | [Date] |
| Chief Risk Officer / Risk Manager | [Name] | __________________ | [Date] |
| Chief Executive Officer | [Name] | __________________ | [Date] |
| [Board Risk Committee Chair — if required] | [Name] | __________________ | [Date] |

---

## 13. References

### 13.1 Regulatory References

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854)** | Primary legislation governing NCII cybersecurity obligations in Malaysia |
| **Act 854, Section 22** | Duties of National Critical Information Infrastructure entity — including obligation to comply with Code of Practice and maintain cybersecurity measures |
| **Act 854, Section 24** | Cybersecurity risk assessment and audit — requirements for periodic assessment, independent audit, and submission to NACSA |
| **NACSA Code of Practice (CoP), [Version], [Date]** | Prescribed cybersecurity requirements for NCII entities issued under Act 854 |
| **NACSA [Sector-Specific Guidance], [Version], [Date]** | [Description of any additional sector-specific guidance applicable to the organisation] |

### 13.2 Related Internal Documents

| Document Title | Document ID | Version | Owner |
|---|---|---|---|
| Cybersecurity Policy | [Doc ID] | [Version] | [Owner] |
| Information Security Risk Management Framework | [Doc ID] | [Version] | [Owner] |
| Incident Response Plan | [Doc ID] | [Version] | [Owner] |
| Business Continuity Plan | [Doc ID] | [Version] | [Owner] |
| Cybersecurity Risk Assessment Report (s24) | [Doc ID] | [Version] | [Owner] |
| Independent Cybersecurity Audit Report (s24) | [Doc ID] | [Version] | External Auditor |
| Third-Party Risk Management Policy | [Doc ID] | [Version] | [Owner] |
| Access Control and Identity Management Policy | [Doc ID] | [Version] | [Owner] |
| [Additional related document] | [Doc ID] | [Version] | [Owner] |

### 13.3 Related External Standards and Frameworks

| Standard / Framework | Relevance |
|---|---|
| ISO/IEC 27001:2022 — Information Security Management Systems | Reference standard for information security controls; aligned with CoP requirements |
| NIST Cybersecurity Framework (CSF) 2.0 | Reference framework for cybersecurity risk management; may be used to supplement CoP gap analysis |
| Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document | Applicable BNM technology risk requirements; cross-references with Act 854 obligations |
| Personal Data Protection Act 2010 (Act 709) | Intersecting obligations for personal data protection; cross-referenced where relevant |
| [Additional standard / framework] | [Relevance description] |

---

## 14. Appendices

### Appendix A — Evidence Register

*This appendix contains the full register of all documents and evidence reviewed during the gap analysis. The evidence register supports auditability of the assessment and enables efficient retrieval of supporting documentation during regulatory inspections or the s24 independent audit.*

| Evidence ID | Document / Evidence Title | Version / Date | Owner / Source | Location | Requirement(s) Supported | Reviewed By | Review Date |
|---|---|---|---|---|---|---|---|
| EV-001 | [Document title] | [Version / Date] | [Owner / Source] | [File path or system reference] | REQ-S22-[X], REQ-S24-[X] | [Name] | [Date] |
| EV-002 | [Document title] | [Version / Date] | [Owner / Source] | [File path or system reference] | REQ-S22-[X] | [Name] | [Date] |
| EV-003 | [Document title] | [Version / Date] | [Owner / Source] | [File path or system reference] | REQ-S24-[X] | [Name] | [Date] |
| [Add rows as required] | | | | | | | |

---

### Appendix B — Interview Log

*This appendix records all interviews and workshops conducted during the gap analysis. The log provides evidence of stakeholder engagement and supports the auditability of the assessment methodology.*

| Interview ID | Interviewee Name | Role / Title | Department | Date | Duration | Topics Covered | Interviewer | Notes |
|---|---|---|---|---|---|---|---|---|
| INT-001 | [Name] | [Role] | [Department] | [Date] | [Duration] | [Topics — e.g., Governance, Risk Management, Policy Framework] | [Name] | [Notes] |
| INT-002 | [Name] | [Role] | [Department] | [Date] | [Duration] | [Topics] | [Name] | [Notes] |
| INT-003 | [Name] | [Role] | [Department] | [Date] | [Duration] | [Topics] | [Name] | [Notes] |
| [Add rows as required] | | | | | | | | |

---

### Appendix C — Regulatory Requirement Mapping

*This appendix provides a complete mapping of all Act 854 (s22 and s24) and CoP requirements to the assessment requirement IDs used in this report. It is designed to assist auditors and regulators in navigating between the regulatory text and the assessment findings.*

| Regulatory Reference | Requirement Summary | Assessment ID | Compliance Rating | Gap ID (if applicable) |
|---|---|---|---|---|
| Act 854, s22([X]) | [Requirement summary] | REQ-S22-[X] | [C/PC/NC/N/A] | GAP-[NNN] |
| Act 854, s22([X]) | [Requirement summary] | REQ-S22-[X] | [C/PC/NC/N/A] | GAP-[NNN] |
| Act 854, s24([X]) | [Requirement summary] | REQ-S24-[X] | [C/PC/NC/N/A] | GAP-[NNN] |
| CoP Section [X.X] | [Requirement summary] | REQ-S22-[X] | [C/PC/NC/N/A] | GAP-[NNN] |
| CoP Section [X.X] | [Requirement summary] | REQ-S24-[X] | [C/PC/NC/N/A] | GAP-[NNN] |
| [Add rows as required] | | | | |

---

### Appendix D — Remediation Action Tracker

*This appendix provides a standalone, printable version of the remediation action tracker for use in progress review meetings. It consolidates all actions from Section 9 into a single tracking table.*

| Action ID | Gap Ref | Action Description | Owner | Phase | Target Date | % Complete | Status | Last Updated | Comments |
|---|---|---|---|---|---|---|---|---|---|
| ACT-001 | GAP-[NNN] | [Action description] | [Owner] | Phase 1 | [Date] | [%] | [Not Started / In Progress / Complete / Overdue] | [Date] | [Comments] |
| ACT-002 | GAP-[NNN] | [Action description] | [Owner] | Phase 1 | [Date] | [%] | [Status] | [Date] | [Comments] |
| ACT-[NNN] | GAP-[NNN] | [Action description] | [Owner] | Phase 2 | [Date] | [%] | [Status] | [Date] | [Comments] |
| [Add rows as required] | | | | | | | | | |

---

### Appendix E — Glossary

*This appendix defines key terms and acronyms used in this document.*

| Term / Acronym | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary Malaysian legislation governing NCII cybersecurity obligations |
| **BNM** | Bank Negara Malaysia — the Central Bank of Malaysia |
| **CoP** | Code of Practice — the technical cybersecurity standard issued by NACSA under Act 854 |
| **CISO** | Chief Information Security Officer |
| **Gap** | The difference between the organisation's current cybersecurity posture and the state required by Act 854 and/or the CoP |
| **GRC** | Governance, Risk and Compliance |
| **NCII** | National Critical Information Infrastructure — systems and assets designated as critical to national security, public safety, or economic stability |
| **NACSA** | National Cyber Security Agency — the Malaysian government agency responsible for cybersecurity policy, NCII oversight, and enforcement under Act 854 |
| **PDPA** | Personal Data Protection Act 2010 (Act 709) |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RMiT** | Risk Management in Technology — BNM Policy Document on technology risk management for financial institutions |
| **RPO** | Recovery Point Objective — the maximum tolerable period of data loss in the event of a system failure or disruption |
| **RTO** | Recovery Time Objective — the maximum tolerable downtime for a system or service |
| **s22** | Section 22 of Act 854 — Duties of National Critical Information Infrastructure entity |
| **s24** | Section 24 of Act 854 — Cybersecurity risk assessment and audit |
| **SIEM** | Security Information and Event Management |
| **[Additional Term]** | [Definition] |

---

### Appendix F — NACSA Submission Checklist

*This appendix provides a checklist to assist the Compliance Officer in preparing and validating submissions to NACSA under s24 of Act 854. The checklist should be completed prior to each regulatory submission.*

| # | Checklist Item | Requirement Reference | Completed | Completed By | Date | Notes |
|---|---|---|---|---|---|---|
| 1 | Cybersecurity Risk Assessment conducted within the prescribed period | s24([X]) | ☐ | [Name] | [Date] | |
| 2 | Risk Assessment conducted by a qualified assessor as prescribed | s24([X]) | ☐ | [Name] | [Date] | |
| 3 | Risk Assessment report completed in the prescribed form | s24([X]) | ☐ | [Name] | [Date] | |
| 4 | Independent Cybersecurity Audit conducted within the prescribed period | s24([X]) | ☐ | [Name] | [Date] | |
| 5 | Independent Audit conducted by a NACSA-approved or qualified auditor | s24([X]) | ☐ | [Name] | [Date] | |
| 6 | Audit report completed in the prescribed form | s24([X]) | ☐ | [Name] | [Date] | |
| 7 | Submission package compiled and reviewed by Compliance Officer | s24([X]) | ☐ | [Name] | [Date] | |
| 8 | Submission approved by [designated authorising officer] | s24([X]) | ☐ | [Name] | [Date] | |
| 9 | Submission lodged with NACSA by the prescribed deadline | s24([X]) | ☐ | [Name] | [Date] | |
| 10 | Submission acknowledgement received from NACSA and filed | s24([X]) | ☐ | [Name] | [Date] | |
| 11 | Submission and all supporting evidence archived in the compliance evidence repository | Internal | ☐ | [Name] | [Date] | |
| [Add additional checklist items as required] | | | | | | |

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained in [designated document management system or location]. Printed copies are uncontrolled. Please verify currency against the master copy before use.

| Field | Detail |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Last Updated** | [Last Review Date] |
| **Next Review** | [Next Review Date] |
| **Classification** | Confidential |