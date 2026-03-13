# NACSA Act 854 — Audit Work Program

**Cyber Security Act 2024 (Act 854) — Code of Practice Compliance Audit Methodology**

| Document Detail | Value |
|---|---|
| **Document Type** | Audit Work Program & Methodology Guide |
| **Legal Basis** | Cyber Security Act 2024 (Act 854), Section 23 |
| **Regulatory Instrument** | P.U.(A) 219/2024 — Risk Assessment and Audit Regulations |
| **Directive** | Direction No. 8 — Directive on Audit Standards and Frequency |
| **Applicability** | All National Critical Information Infrastructure (NCII) Entities |
| **Classification** | PRACTITIONER USE — NOT FOR PUBLIC DISTRIBUTION |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Audit Authority & Legal Framework](#2-audit-authority--legal-framework)
3. [Engagement Lifecycle](#3-engagement-lifecycle)
4. [Scope Determination](#4-scope-determination)
5. [Control Domain Framework](#5-control-domain-framework)
6. [Testing Methodology](#6-testing-methodology)
7. [Sampling Methodology](#7-sampling-methodology)
8. [Compliance Rating Scale](#8-compliance-rating-scale)
9. [Finding Framework (5 C's)](#9-finding-framework-5-cs)
10. [Reporting Requirements](#10-reporting-requirements)
11. [Remediation & Follow-up](#11-remediation--follow-up)
12. [Sector-Specific Considerations](#12-sector-specific-considerations)
13. [Quality Assurance](#13-quality-assurance)
14. [File Reference](#14-file-reference)
15. [Professional Standards References](#15-professional-standards-references)
16. [Disclaimer](#16-disclaimer)

---

## 1. Introduction

### 1.1 Purpose

This Audit Work Program provides a structured, repeatable methodology for conducting Code of Practice (CoP) compliance audits of National Critical Information Infrastructure (NCII) entities under the Cyber Security Act 2024 (Act 854). It is designed for licensed cyber security audit firms and individual auditors who are engaged to assess NCII entities' adherence to the regulatory obligations imposed by Act 854 and its subordinate instruments.

The work program serves three objectives:

1. **Standardisation** — Ensure all CoP compliance audits follow a consistent methodology that meets NACSA expectations and professional auditing standards.
2. **Completeness** — Provide auditors with a comprehensive control framework, test procedures, and evidence requirements so that no material area of compliance is overlooked.
3. **Defensibility** — Produce audit workpapers and reports that withstand regulatory scrutiny by the Chief Executive (CE) of NACSA and sector leads.

This guide accompanies a set of machine-readable JSON data files located in this directory that contain detailed test procedures, sampling tables, evidence request lists, rating criteria, and reporting templates. The JSON files are the operational backbone; this document provides the interpretive context, legal grounding, and methodological guidance required to use them effectively.

### 1.2 Legal Basis

The Cyber Security Act 2024 (Act 854), gazetted and effective as of 26 August 2024, establishes the legal foundation for cyber security governance of NCII in Malaysia. Section 23 of the Act mandates that NCII entities undergo periodic cyber security audits conducted by licensed auditors approved by NACSA.

The principal regulatory instruments relevant to this work program are:

| Instrument | Description |
|---|---|
| **Act 854** | Cyber Security Act 2024 — Primary legislation governing NCII cyber security |
| **P.U.(A) 219/2024** | Risk Assessment and Audit Regulations — Subsidiary legislation prescribing audit frequency, scope, and auditor obligations |
| **Direction No. 8** | Directive on Audit Standards and Frequency — NACSA directive specifying audit standards, rating methodology, and reporting requirements |
| **Sector CoPs** | Codes of Practice issued by each of the 11 NCII sector leads, specifying sector-specific control requirements |

### 1.3 Scope of Application

This work program applies to:

- **Comprehensive annual audits** of NCII entities' compliance with their applicable CoP, as mandated by Direction No. 8.
- **Triggered audits** ordered by the CE or sector leads following a significant cyber security incident, material change in NCII infrastructure, or identification of systemic non-compliance.
- **Risk-based audits** where the scope is narrowed to specific control domains based on the entity's risk profile, subject to NACSA approval.

It does not cover penetration testing, vulnerability assessments, or red team engagements, which are governed by separate NACSA directives, though findings from those activities may inform the audit scope.

---

## 2. Audit Authority & Legal Framework

### 2.1 Statutory Mandate (Section 23)

Section 23 of Act 854 imposes a mandatory obligation on every NCII entity to cause a cyber security audit to be carried out:

- At the frequency prescribed by Direction No. 8 (minimum annually for comprehensive audits).
- By a licensed cyber security service provider holding a valid audit licence under Part V of the Act.
- In accordance with the standards and methodology specified by NACSA.

Failure to comply with Section 23 constitutes an offence punishable by a fine not exceeding **RM500,000** and/or imprisonment for a term not exceeding **10 years**.

### 2.2 Inspection and Audit Powers (Sections 29–32)

The Act confers broad powers on authorised officers and the CE:

| Section | Power | Scope |
|---|---|---|
| **s29** | Power of inspection | Authorised officers may enter premises, inspect systems, and require production of documents |
| **s30** | Power to require information | NCII entities must provide information, documents, or access to systems upon request |
| **s31** | Power to examine persons | Officers may examine any person reasonably believed to possess relevant information |
| **s32** | Power of audit | The CE may direct a special audit where there are grounds to believe non-compliance exists |

Auditors engaged under Section 23 exercise delegated authority and must operate within the boundaries of their engagement letter and applicable NACSA directives. Obstruction of an audit is an offence under the Act.

### 2.3 Licensed Cyber Security Service Providers (Part V, Sections 33–46)

Only firms and individuals licensed under Part V of Act 854 may conduct CoP compliance audits. Key licensing requirements include:

- **Section 33**: Prohibition on unlicensed provision of cyber security services.
- **Section 35**: Application for licence — prescribes the form, fee, and supporting documentation.
- **Section 38**: Conditions of licence — NACSA may impose conditions on scope, sector, and service type.
- **Section 42**: Duty to maintain competence — licensees must maintain professional qualifications and CPD.
- **Section 46**: Revocation and suspension — grounds include professional misconduct, conflict of interest, or failure to meet audit standards.

### 2.4 Direction No. 8 Requirements

Direction No. 8 establishes the following audit regime:

| Requirement | Detail |
|---|---|
| **Comprehensive audit** | Annual; covers all 15 control domains and all applicable controls |
| **Triggered audit** | Ordered by CE or sector lead; scope defined by triggering event |
| **Follow-up audit** | May be ordered where Critical or High findings remain unremediated past deadline |
| **Audit cycle** | Biannual comprehensive planning cycle (current year + prior year comparison mandatory) |
| **Submission deadline** | Audit report to be submitted to CE and sector lead within 30 calendar days of fieldwork completion |

### 2.5 Auditor Qualifications

Direction No. 8 stipulates minimum qualifications for the engagement lead and key audit team members:

| Requirement | Minimum Standard |
|---|---|
| **Professional certification** | At least one of: CISA (ISACA), ISO/IEC 27001 Lead Auditor, CISSP (ISC2) |
| **Experience** | Minimum 5 years of information security audit or assessment experience |
| **Sector knowledge** | Demonstrable familiarity with the NCII sector being audited |
| **Independence** | No financial interest, employment, or consulting engagement with the auditee within the preceding **24 months** (cooling-off period) |
| **Licence status** | Valid Part V licence with audit service scope |

The engagement team must include at least one member who holds a current CISA certification or ISO/IEC 27001 Lead Auditor qualification.

### 2.6 Independence and Conflict of Interest

The 24-month cooling-off period applies to:

- The audit firm and all its partners/directors.
- Individual auditors assigned to the engagement.
- Any subcontractors or specialists engaged for the audit.

Prior to engagement acceptance, the audit firm must complete a conflict-of-interest declaration and submit it to NACSA. The declaration must disclose all relationships with the NCII entity, its parent company, subsidiaries, and key suppliers within the preceding 36 months.

### 2.7 Penalties Summary

| Offence | Section | Maximum Fine | Maximum Imprisonment |
|---|---|---|---|
| Failure to conduct mandatory audit | s23 | RM500,000 | 10 years |
| Obstruction of audit/inspection | s29–s31 | RM200,000 | 3 years |
| Providing false information to auditor | s30 | RM300,000 | 5 years |
| Unlicensed provision of audit services | s33 | RM500,000 | 10 years |
| Failure to report incident | s25 | RM500,000 | 10 years |
| Non-compliance with CE direction | s52 | RM200,000 | 3 years |

---

## 3. Engagement Lifecycle

The CoP compliance audit follows a five-phase engagement lifecycle. Each phase has defined inputs, activities, outputs, and quality gates.

```
Phase 1          Phase 2           Phase 3          Phase 4          Phase 5
PLANNING    -->  OPENING      -->  FIELDWORK   -->  REPORTING   -->  FOLLOW-UP
(2-3 weeks)      MEETING           (3-6 weeks)      (2-3 weeks)      (ongoing)
                 (1 day)
```

### Phase 1: Planning

**Objective**: Establish the audit scope, understand the entity's NCII environment, assess inherent risk, and develop the audit plan.

| Activity | Description | Output |
|---|---|---|
| Engagement acceptance | Conflict check, independence confirmation, licence verification | Engagement letter |
| Scoping | Identify applicable CoP, NCII assets, sector requirements | Scope memorandum |
| Risk assessment | Review entity risk register, prior audit findings, incident history | Risk-ranked domain priority list |
| PBC list issuance | Issue Prepared by Client (PBC) evidence request list | PBC list (see `baseline/pbc-list.json`) |
| Audit plan | Develop detailed audit plan with timeline, resource allocation, and test procedures | Audit plan document |
| Team briefing | Brief audit team on entity background, sector requirements, and key risks | Team briefing notes |

**Quality gate**: Planning phase is complete when the audit plan has been reviewed and approved by the engagement lead, and the PBC list has been acknowledged by the NCII entity's designated liaison.

### Phase 2: Opening Meeting

**Objective**: Formally commence the audit, confirm scope and logistics, and establish communication protocols.

| Agenda Item | Detail |
|---|---|
| Introductions | Audit team, entity management, NCII liaison officer |
| Scope confirmation | Confirm applicable CoP, in-scope NCII assets, exclusions |
| Methodology overview | Explain audit approach, testing methods, rating scale |
| Logistics | Schedule walkthroughs, interview slots, system access, secure workspace |
| PBC status | Review outstanding evidence items |
| Escalation protocol | Define points of contact, issue escalation path, dispute resolution |
| Confidentiality | Confirm data handling, information security requirements for audit workpapers |

**Output**: Signed opening meeting minutes.

### Phase 3: Fieldwork

**Objective**: Execute test procedures, collect evidence, evaluate control design and operating effectiveness, and document findings.

| Activity | Description | Reference |
|---|---|---|
| Control walkthroughs | End-to-end walkthrough of each control to understand design | Test of Design (ToD) |
| Test of Design | Evaluate whether the control is appropriately designed to address the risk and meet the CoP requirement | `baseline/test-procedures.json` (ToD entries) |
| Test of Effectiveness | Test whether the control has operated consistently and effectively over the audit period | `baseline/test-procedures.json` (ToE entries) |
| Evidence collection | Obtain, review, and catalogue supporting evidence | PBC list + ad hoc requests |
| Sampling | Select and test samples per the sampling methodology | `baseline/sampling-guide.json` |
| Interview and inquiry | Conduct structured interviews with control owners | Interview record template |
| Exception identification | Document control deviations, gaps, and failures | Finding template |
| Working paper completion | Document all testing performed, evidence obtained, and conclusions reached | Workpaper files |

**Quality gate**: All test procedures executed, all findings drafted and discussed with management, all evidence catalogued with cross-references.

### Phase 4: Reporting

**Objective**: Produce the audit report in accordance with Direction No. 8 requirements and submit to the CE and sector lead.

| Activity | Description | Timeline |
|---|---|---|
| Finding finalisation | Finalise findings after management discussion; apply the 5 C's framework | Week 1 |
| Management response | Obtain entity management's formal response to each finding | Week 1–2 |
| Rating determination | Apply compliance rating methodology to each control and overall | Week 2 |
| Report drafting | Draft report per Direction No. 8 structure | Week 2 |
| Engagement lead review | Independent review of report by engagement lead | Week 2–3 |
| Closing meeting | Present findings to entity senior management and NCII officer | Week 3 |
| Report submission | Submit final report to CE and sector lead within 30 calendar days | Week 3 |

**Output**: Final audit report, management representation letter, closing meeting minutes.

### Phase 5: Follow-up

**Objective**: Monitor remediation progress and verify closure of findings.

| Activity | Description | Timeline |
|---|---|---|
| MAP issuance | Entity issues Management Action Plan (MAP) | Within 30 days of report |
| Progress tracking | Auditor tracks remediation milestones per MAP | Ongoing |
| Evidence of remediation | Entity provides evidence of control implementation/improvement | Per MAP deadlines |
| Verification testing | Auditor performs limited re-testing of remediated controls | As applicable |
| Follow-up report | Issue follow-up status report to CE and sector lead | Upon completion |

### Biannual Cycle and Triggered Audits

Direction No. 8 requires audit planning on a biannual cycle:

- **Year 1**: Full comprehensive audit — all 15 domains, all applicable controls.
- **Year 2**: Full comprehensive audit with mandatory comparison to Year 1 findings.
- **Triggered audits** may be ordered at any time and operate outside the regular cycle. Common triggers include:
  - Significant cyber security incident affecting NCII.
  - Material change to NCII architecture or ownership.
  - Sector lead identification of systemic risk.
  - CE direction following intelligence or threat assessment.

---

## 4. Scope Determination

### 4.1 Scoping Principles

Every CoP compliance audit must cover all controls applicable to the entity's NCII designation. The scoping process determines which of the 53 controls across 15 domains apply to a specific entity, taking into account:

1. **NCII designation scope** — Which systems, assets, and services have been designated as NCII by the relevant sector lead.
2. **Applicable CoP** — The sector-specific Code of Practice issued by the sector lead under Section 17 of Act 854.
3. **Entity risk profile** — The entity's risk register, threat landscape, and prior audit findings.
4. **Materiality** — The significance of each control domain relative to the entity's NCII criticality classification.

### 4.2 Control Library Overview

The CoP control library comprises:

| Dimension | Count |
|---|---|
| Control domains | 15 |
| Individual controls | 53 |
| Test procedures (ToD + ToE) | 106 |
| Act section mappings | 53 controls mapped to applicable Act sections |

Each control is mapped to one or more sections of Act 854, ensuring traceability from the audit finding back to the statutory obligation.

### 4.3 Sector-Specific CoP Requirements

The 11 NCII sectors each have a sector-specific CoP that may:

- **Add** sector-specific controls beyond the baseline 53.
- **Modify** control requirements to reflect sector-specific risks and regulatory expectations.
- **Specify** minimum implementation standards (e.g., encryption algorithms, backup frequencies, incident response times).
- **Mandate** additional evidence requirements or testing procedures.

Sector overlays are maintained in `sector-overlays/*.json` and must be applied during the scoping phase.

### 4.4 Risk-Based Scoping

While the comprehensive annual audit must cover all applicable controls, the depth and intensity of testing may be risk-adjusted:

| Risk Factor | Impact on Scope |
|---|---|
| Prior audit findings (Critical/High) | Increased testing depth, expanded sample sizes |
| Recent cyber incidents | Focused testing on affected domains |
| Material system changes | Full re-testing of changed control environments |
| New NCII designation | Baseline assessment of all controls (first audit) |
| Clean prior audit | Standard testing depth, standard sample sizes |

The risk assessment should be documented in the planning memorandum and approved by the engagement lead before fieldwork commences.

### 4.5 Exclusions and Materiality

Controls may be excluded from scope only when:

- The control is genuinely **not applicable** to the entity's NCII environment (e.g., Cloud Security controls for an entity with no cloud infrastructure).
- The exclusion is **documented and justified** in the scope memorandum.
- The sector lead's CoP does not mandate the control for that entity class.

Exclusions must be disclosed in the audit report. The auditor must exercise professional judgement when assessing materiality — a control that is individually immaterial may be collectively material when aggregated with related controls.

---

## 5. Control Domain Framework

The following table lists all 15 control domains, their applicable Act 854 section references, the number of controls in each domain, and a brief description.

| # | Domain | Act Sections | Controls | Description |
|---|---|---|---|---|
| 1 | **NCII Governance** | s17, s18, s52, s53 | 5 | NCII governance structure, policies, roles, responsibilities, and board oversight |
| 2 | **Asset Management** | s17, s22, s23 | 4 | NCII asset inventory, classification, ownership, and lifecycle management |
| 3 | **Risk Assessment** | s22, s23, s24 | 4 | Cyber security risk identification, assessment, treatment, and monitoring |
| 4 | **Access Control** | s22, s23 | 4 | Logical and administrative access controls, identity management, authentication |
| 5 | **Network Security** | s22, s23, s24 | 4 | Network architecture, segmentation, monitoring, and perimeter defences |
| 6 | **Incident Response** | s25, s26, s27, s28 | 5 | Incident detection, reporting (6-hour mandatory notification), containment, eradication, recovery |
| 7 | **BCDR** | s22, s23, s24 | 3 | Business continuity planning, disaster recovery, backup and restoration |
| 8 | **Audit & Compliance** | s29, s30, s31, s32, s52 | 3 | Internal audit, compliance monitoring, regulatory reporting, CE directions |
| 9 | **Supply Chain Security** | s22, s23, s47 | 3 | Third-party risk management, vendor security assessments, supply chain controls |
| 10 | **Security Awareness & Training** | s22, s23 | 3 | Cyber security awareness programmes, role-based training, competency assessment |
| 11 | **Vulnerability Management** | s22, s23, s24, s25 | 3 | Vulnerability scanning, patch management, remediation tracking |
| 12 | **Cryptography** | s22, s23 | 3 | Encryption standards, key management, certificate lifecycle |
| 13 | **Physical Security** | s22, s23 | 3 | Physical access controls, environmental protection, secure areas for NCII assets |
| 14 | **Cloud Security** | s22, s23, s47 | 3 | Cloud governance, shared responsibility model, cloud-specific controls |
| 15 | **Change Management** | s22, s23, s24 | 3 | Change control processes, impact assessment, authorisation, and rollback |
| | **Total** | | **53** | |

### Domain Interrelationships

Control domains are not assessed in isolation. The auditor should consider interdependencies:

- **Incident Response** depends on effective **Network Security** monitoring and **Vulnerability Management** detection capabilities.
- **BCDR** effectiveness is linked to **Asset Management** completeness and **Risk Assessment** accuracy.
- **Supply Chain Security** and **Cloud Security** share dependencies on **Access Control** and **Cryptography**.
- **NCII Governance** sets the tone and direction for all other domains.
- **Audit & Compliance** provides the feedback loop for continuous improvement across all domains.

---

## 6. Testing Methodology

### 6.1 Test Types

Every control in the CoP framework is tested using two complementary procedures:

| Test Type | Abbreviation | Question Answered | Typical Evidence |
|---|---|---|---|
| **Test of Design** | ToD | Is the control properly designed to meet the CoP requirement? | Policies, procedures, architecture diagrams, configuration standards |
| **Test of Effectiveness** | ToE | Has the control operated effectively and consistently during the audit period? | Logs, records, system outputs, sample testing results |

Both ToD and ToE must be performed for each in-scope control. A control that passes ToD but fails ToE is rated **Partially Compliant** — the design intent exists but execution is deficient.

### 6.2 Testing Techniques

| Technique | Description | When to Use |
|---|---|---|
| **Inquiry** | Structured interview with control owners and operators | Initial understanding; must be corroborated with other evidence |
| **Inspection** | Examination of documents, records, configurations, and system settings | Primary technique for ToD; supporting technique for ToE |
| **Observation** | Direct witnessing of a control being performed | Operational controls, physical security, real-time monitoring |
| **Re-performance** | Auditor independently re-executes the control procedure | Key technique for ToE; validates that the control produces the expected outcome |
| **Inquiry + Corroboration** | Inquiry followed by independent verification through inspection or re-performance | Required where inquiry is the primary evidence source |

### 6.3 Evidence Hierarchy

Evidence sources are ranked by reliability. Higher-ranked evidence requires less corroboration:

| Rank | Evidence Type | Description | Reliability |
|---|---|---|---|
| 1 | **System-generated** | Automated logs, system reports, audit trails generated without human intervention | Highest |
| 2 | **Auditor-generated** | Re-performance results, screenshots taken by the auditor, auditor observations | High |
| 3 | **Photographic** | Photographs of physical controls, screen captures taken by the entity | Moderate–High |
| 4 | **Third-party** | Independent reports, certifications, SOC reports, external audit letters | Moderate–High |
| 5 | **Internal** | Entity-prepared documents, policies, procedures, internal reports | Moderate |
| 6 | **Testimonial** | Verbal representations from entity personnel | Lowest |

**Rule**: Testimonial evidence alone is never sufficient to support a **Compliant** rating. It must be corroborated by at least one higher-ranked evidence source.

### 6.4 Evidence Documentation Standards

All evidence must be:

- **Dated** — Show the date the evidence was obtained or the period it covers.
- **Sourced** — Identify who provided the evidence and from which system it was extracted.
- **Cross-referenced** — Linked to the specific test procedure and control being tested.
- **Preserved** — Maintained in the audit file in its original format (no modification).
- **Sufficient** — Adequate in quantity and quality to support the auditor's conclusion.

---

## 7. Sampling Methodology

### 7.1 Sampling Approach Selection

| Approach | Use Case | Basis |
|---|---|---|
| **Statistical sampling** | High-volume, homogeneous populations (e.g., access reviews, change tickets) | Mathematical confidence level (typically 95% confidence, 5% tolerable deviation) |
| **Non-statistical (judgmental) sampling** | Low-volume populations, unique items, risk-focused selection | Professional judgement guided by risk assessment |

For most CoP compliance audits, a combination of both approaches is used. Statistical sampling is applied to recurring controls with large populations; judgmental sampling is used for infrequent or unique controls.

### 7.2 Sample Size Tables

The following table provides minimum sample sizes based on control frequency and population size, consistent with ISACA ITAF guidance and Direction No. 8 expectations:

| Control Frequency | Population (per audit period) | Minimum Sample Size |
|---|---|---|
| **Annual** | 1 | 1 (examine the single occurrence) |
| **Semi-annual** | 2 | 2 (examine both occurrences) |
| **Quarterly** | 4 | 2–4 |
| **Monthly** | 12 | 5 |
| **Fortnightly** | 26 | 8 |
| **Weekly** | 52 | 10 |
| **Daily** | ~250 (business days) | 25 |
| **Per occurrence (event-driven)** | Varies | 25 (or 10% of population, whichever is greater, up to 60) |

For populations exceeding 250, a minimum sample of 25 items is required. For populations exceeding 1,000, consider statistical sampling with a calculated sample size.

### 7.3 Selection Methods

| Method | Description | Appropriate Use |
|---|---|---|
| **Random** | Items selected using a random number generator | Homogeneous populations; statistical sampling |
| **Systematic** | Every *n*th item selected from an ordered list | Large populations with sequential identifiers |
| **Haphazard** | Items selected without conscious bias but without formal randomisation | Small populations; non-statistical sampling |
| **Judgmental** | Items selected based on risk, value, or auditor assessment | Targeted testing of high-risk items, outliers, or exceptions |

### 7.4 Population and Completeness

Before selecting samples, the auditor must:

1. **Define the population** — Clearly describe the universe of items from which the sample will be drawn.
2. **Verify completeness** — Confirm that the population listing is complete (e.g., reconcile the change ticket listing to the change management system, verify the user access report covers all in-scope systems).
3. **Document the population source** — Record the system, report, or extract from which the population was obtained.

### 7.5 Deviation Evaluation

When sample testing reveals deviations (control failures):

| Deviations Found | Action Required |
|---|---|
| **0** | Control is operating effectively; document conclusion |
| **1** | Investigate root cause; consider expanding sample by 50%; assess whether deviation is isolated or systemic |
| **2+** | Expand sample; evaluate whether control is operating effectively; likely results in Partially Compliant or Non-Compliant rating |
| **>10% of sample** | Control is not operating effectively; Non-Compliant rating unless mitigating/compensating controls exist |

---

## 8. Compliance Rating Scale

### 8.1 Control-Level Ratings

Per Direction No. 8, each individual control is assigned one of four ratings:

| Rating | Definition | Criteria |
|---|---|---|
| **Compliant** | The control is designed and operating effectively to meet the CoP requirement. | ToD: Pass. ToE: Pass. Evidence is sufficient and consistent. Zero or isolated immaterial deviations. |
| **Partially Compliant** | The control exists but has design gaps, operating deficiencies, or inconsistent application. | ToD: Pass with reservations, OR ToE: Fail with limited deviations. Control intent is present but execution is deficient. |
| **Non-Compliant** | The control is absent, fundamentally inadequate, or has pervasive operating failures. | ToD: Fail, OR ToE: Pervasive failures. The CoP requirement is not being met. |
| **Not Applicable** | The control is not relevant to the entity's NCII scope and has been formally excluded. | Documented justification for exclusion. Confirmed by sector lead CoP. No compensating control required. |

### 8.2 Overall Compliance Ratings

The overall entity compliance rating is determined by aggregating individual control ratings:

| Overall Rating | Criteria | Regulatory Consequence |
|---|---|---|
| **Fully Compliant** | All controls rated Compliant or Not Applicable. Zero Non-Compliant or Partially Compliant findings. | Standard audit cycle continues. |
| **Substantially Compliant** | Maximum 3 Partially Compliant findings. Zero Non-Compliant findings. | Standard audit cycle; entity monitors and remediates Partially Compliant items. |
| **Partially Compliant** | One or more Non-Compliant findings exist, but none affect assets classified as **Critical** in the NCII asset register. | Mandatory remediation plan. CE may direct follow-up audit. |
| **Non-Compliant** | One or more Non-Compliant findings affecting assets classified as **Critical** in the NCII asset register. | Mandatory remediation plan. CE will direct follow-up audit. Potential enforcement action under Act 854. |

### 8.3 Rating Determination Process

```
For each control:
  1. Evaluate ToD result
  2. Evaluate ToE result
  3. Consider evidence sufficiency
  4. Apply judgement on severity and pervasiveness of deviations
  5. Assign control-level rating

For overall rating:
  1. Count Non-Compliant controls
  2. Count Partially Compliant controls
  3. Assess whether Non-Compliant findings affect Critical assets
  4. Apply overall rating criteria
  5. Document rating rationale
```

---

## 9. Finding Framework (5 C's)

### 9.1 Finding Structure

Every audit finding must be documented using the **5 C's Framework**, which ensures findings are complete, actionable, and traceable to the legal/regulatory requirement:

| Element | Description | Guidance |
|---|---|---|
| **Condition** | What was found — the factual statement of the current state. | Be specific, objective, and evidence-based. Avoid vague language. Quantify where possible (e.g., "12 of 25 sampled user accounts lacked multi-factor authentication"). |
| **Criteria** | What the standard requires — the CoP requirement, Act section, or Direction No. 8 provision that establishes the expected state. | Cite the specific CoP control reference, Act 854 section, and any applicable sector-specific requirement. |
| **Cause** | Why the gap exists — the root cause or contributing factors that led to the non-compliance. | Distinguish between root causes (e.g., "no documented procedure") and symptoms (e.g., "inconsistent practice"). Common causes: resource constraints, lack of awareness, technology limitations, organisational change. |
| **Consequence** | The risk or impact of the finding — what could happen or has happened as a result of the gap. | Frame in terms of risk to NCII confidentiality, integrity, or availability. Reference the entity's risk register where applicable. Consider regulatory consequences (penalties, enforcement action). |
| **Corrective Action** | The recommended remediation — specific, actionable steps to address the finding. | Provide clear, practical recommendations. Specify the expected remediation timeline consistent with finding severity. Identify the responsible party (where possible). |

### 9.2 Finding Severity Classification

| Severity | Definition | Remediation Timeline | NACSA Notification |
|---|---|---|---|
| **Critical** | Immediate and material risk to NCII confidentiality, integrity, or availability. Exploitation is probable or has occurred. The finding represents a fundamental failure of a core control. | Immediate (within 30 days) | **Mandatory** — auditor must notify NACSA within 48 hours of confirmation |
| **High** | Significant gap in a key control area. The risk is elevated and the finding, if unaddressed, could lead to a Critical issue. | 90 days | Included in audit report; no separate notification required |
| **Medium** | Notable gap that reduces the overall effectiveness of the control environment but does not pose an immediate threat to NCII. | 180 days | Included in audit report |
| **Low** | Minor improvement opportunity. The control is substantially effective but could be enhanced. | 180 days (advisory) | Included in audit report as an observation |

### 9.3 Finding Escalation Protocol

For **Critical** findings, the auditor must:

1. Immediately inform the engagement lead.
2. Notify the NCII entity's senior management and designated NCII officer verbally within 24 hours.
3. Submit a written notification to NACSA (CE) within 48 hours, including a description of the finding, the affected NCII asset(s), and the assessed risk.
4. Document the notification in the audit workpapers.

---

## 10. Reporting Requirements

### 10.1 Report Structure

Per Direction No. 8, the audit report must contain the following sections in order:

| Section | Content | Guidance |
|---|---|---|
| **1. Executive Summary** | Overall compliance rating, key findings summary, scope overview, audit opinion | Maximum 2 pages; written for board-level audience |
| **2. Scope and Methodology** | Audit scope, period covered, methodology applied, exclusions, team composition | Reference this work program and applicable standards |
| **3. Entity Profile** | NCII entity overview, sector classification, NCII asset inventory summary, organisational structure | Based on information provided during planning |
| **4. Detailed Findings** | Individual findings per domain, structured using the 5 C's framework, with evidence references | Organised by control domain; each finding cross-referenced to evidence |
| **5. Compliance Ratings** | Control-level and domain-level compliance ratings in tabular format | Use the rating scale from Section 8 |
| **6. Vulnerability Summary** | Summary of identified vulnerabilities with severity ratings (if vulnerability assessment was in scope or findings were leveraged) | Cross-referenced to affected controls |
| **7. Recommendations** | Prioritised recommendations with estimated effort, responsible party, and suggested timeline | Grouped by severity; aligned with finding corrective actions |
| **8. Prior Audit Comparison** | Comparison of current findings with prior year audit findings; status of prior recommendations | Mandatory for Year 2+ audits; shows remediation progress |
| **9. Management Response** | Entity management's formal response to each finding and stated remediation plan | Must be obtained before report finalisation |
| **10. Appendices** | Supporting detail: sampling methodology, evidence index, glossary, team qualifications | Reference but do not duplicate full evidence |

### 10.2 Submission Requirements

| Requirement | Detail |
|---|---|
| **Recipients** | Chief Executive (CE) of NACSA; applicable sector lead |
| **Format** | Secure electronic submission per NACSA-specified portal/channel |
| **Timeline** | Within 30 calendar days of fieldwork completion |
| **Classification** | Minimum CONFIDENTIAL; higher classification as directed by NACSA |
| **Retention** | Audit workpapers and report retained for minimum 7 years |

### 10.3 Report Quality Standards

The report must:

- Be written in clear, professional English (or Bahasa Malaysia if required by the sector lead).
- Avoid ambiguous language — findings must be stated definitively, not speculatively.
- Cross-reference all findings to specific evidence items in the audit workpapers.
- Include sufficient detail for a knowledgeable third party to understand and replicate the auditor's conclusions.
- Be internally consistent — control ratings must align with the finding narratives and evidence.

---

## 11. Remediation & Follow-up

### 11.1 Remediation Timeline

Following issuance of the audit report, the following timeline applies:

| Milestone | Deadline | Responsible Party |
|---|---|---|
| **Submit Management Action Plan (MAP)** | 30 calendar days from report issuance | NCII entity |
| **Remediate Critical findings** | 90 calendar days from report issuance | NCII entity |
| **Remediate High findings** | 90 calendar days from report issuance | NCII entity |
| **Remediate Medium findings** | 180 calendar days from report issuance | NCII entity |
| **Remediate Low findings** | 180 calendar days from report issuance (advisory) | NCII entity |
| **Follow-up audit (if directed)** | As directed by CE; typically within 6 months | Audit firm |

### 11.2 Management Action Plan (MAP)

The MAP must include, for each finding:

| MAP Element | Description |
|---|---|
| **Finding reference** | Audit report finding number and title |
| **Agreed action** | Specific remediation action agreed by management |
| **Responsible owner** | Named individual accountable for remediation |
| **Target date** | Planned completion date (must be within prescribed deadlines) |
| **Resources required** | Budget, personnel, technology, or external support needed |
| **Status** | Current status: Not Started / In Progress / Completed / Overdue |
| **Evidence of completion** | Description of evidence that will demonstrate remediation |

The MAP tracker template is available at `templates/map-tracker.json`.

### 11.3 Follow-up Audit

The CE may order a follow-up audit when:

- Critical or High findings remain unremediated beyond the 90-day deadline.
- The entity's MAP is assessed as inadequate or not being implemented.
- A subsequent incident suggests the remediation was ineffective.

The follow-up audit scope is limited to the unremediated findings and related controls. The original audit firm may be engaged for the follow-up, subject to continued independence requirements.

### 11.4 Escalation for Non-Remediation

If an NCII entity fails to remediate findings within the prescribed timelines:

1. **Auditor** reports non-remediation status to CE and sector lead.
2. **CE** may issue a direction under Section 52 requiring remediation within a specified period.
3. **Non-compliance with a CE direction** constitutes an offence under Act 854 (fine up to RM200,000 and/or imprisonment up to 3 years).
4. **Sector lead** may impose additional sector-specific regulatory consequences.

---

## 12. Sector-Specific Considerations

The 11 NCII sectors each operate under a sector-specific Code of Practice that supplements the baseline control framework. Auditors must obtain and apply the relevant sector overlay during the scoping and fieldwork phases.

| # | Sector | Sector Lead | Key Sector-Specific Considerations |
|---|---|---|---|
| 1 | **Government** | MAMPU (Malaysian Administrative Modernisation and Management Planning Unit) | RAKKSSA compliance; MyGovCloud security requirements; DKICT policy alignment; classified information handling |
| 2 | **Banking & Finance** | Bank Negara Malaysia (BNM) | RMiT (Risk Management in Technology) alignment; BNM Technology Risk Framework; PCI DSS for payment systems; financial data protection |
| 3 | **Healthcare** | Ministry of Health (MOH) | Patient data protection (PDPA integration); medical device security; health information exchange standards; telehealth security |
| 4 | **Information & Communications Technology** | MCMC (Malaysian Communications and Multimedia Commission) | Telecommunications infrastructure protection; DNS security; submarine cable protection; MCMC licensing conditions |
| 5 | **Energy** | Energy Commission (Suruhanjaya Tenaga) | SCADA/ICS security; OT/IT convergence controls; smart grid security; energy supply chain resilience |
| 6 | **Transport** | MOT (Ministry of Transport) / CAAM | Aviation systems security (ICAO alignment); maritime systems; rail signalling security; air traffic management |
| 7 | **Water & Sewerage** | SPAN (Suruhanjaya Perkhidmatan Air Negara) | SCADA/ICS security for water treatment; water quality monitoring systems; distribution network controls |
| 8 | **Defence** | MINDEF (Ministry of Defence) | Military classification requirements; defence-specific access controls; interoperability with allied systems; ITAR considerations |
| 9 | **Agriculture & Food** | KPKM (Ministry of Plantation and Commodities) | Food supply chain security; precision agriculture systems; commodity trading platforms; biosecurity systems |
| 10 | **Trade & Industry** | MITI (Ministry of Trade and Industry) | Trade facilitation systems; customs platforms; industrial control systems; intellectual property protection |
| 11 | **Science & Technology** | MOSTI (Ministry of Science, Technology and Innovation) | Research data protection; laboratory systems security; national research infrastructure; technology transfer controls |

### Sector Overlay Application Process

1. Obtain the current sector-specific CoP from the sector lead or NACSA portal.
2. Load the applicable sector overlay from `sector-overlays/*.json`.
3. Map sector-specific controls to the baseline 53-control framework.
4. Identify additional sector-specific test procedures beyond the baseline 106.
5. Document any sector-specific evidence requirements in the PBC list.
6. Apply sector-specific rating considerations (if any) during the rating determination phase.

---

## 13. Quality Assurance

### 13.1 Engagement Quality Control

Quality assurance is integral to every CoP compliance audit. The following quality controls apply:

| QA Activity | Responsible | Timing |
|---|---|---|
| **Independence confirmation** | Engagement lead | Before engagement acceptance |
| **Planning review** | Engagement lead | Before fieldwork commencement |
| **Workpaper review** | Senior auditor / engagement lead | During and after fieldwork |
| **Finding review** | Engagement lead | Before management discussion |
| **Report review** | Independent reviewer (not on engagement team) | Before report finalisation |
| **Hot file review** | Quality assurance partner | Before report issuance (for high-risk engagements) |

### 13.2 Workpaper Review Checklist

The following checklist should be applied to every workpaper before the audit file is closed:

- [ ] Test procedure clearly stated and aligned with `baseline/test-procedures.json`
- [ ] Population defined and completeness verified
- [ ] Sample selection documented and justified
- [ ] Evidence obtained is sufficient, relevant, and reliable
- [ ] Evidence is cross-referenced to the test procedure
- [ ] Conclusion is clearly stated and supported by the evidence
- [ ] Exceptions/deviations are documented and evaluated
- [ ] Finding (if applicable) follows the 5 C's framework
- [ ] Control rating is consistent with test results
- [ ] Workpaper is signed/initialled and dated by the preparer
- [ ] Review notes have been addressed and cleared

### 13.3 Professional Standards Compliance

This work program is designed to be consistent with the following professional standards:

| Standard | Relevance |
|---|---|
| **ISACA ITAF 4th Edition** | Framework for IS audit and assurance; defines general, performance, and reporting standards |
| **IIA IPPF** | International Professional Practices Framework; applicable where the audit firm also performs internal audit functions |
| **ISO 19011:2018** | Guidelines for auditing management systems; provides principles and guidance on audit programme management |

Auditors should maintain familiarity with these standards and apply them to the extent that they supplement (and do not conflict with) Direction No. 8 and NACSA-specific requirements.

### 13.4 Continuous Improvement

After each engagement, the audit firm should:

1. Conduct a post-engagement debrief to identify lessons learned.
2. Update internal templates and checklists based on findings.
3. Incorporate NACSA feedback (if any) into the methodology.
4. Track changes to Act 854, subsidiary legislation, and sector CoPs that may affect future audits.

---

## 14. File Reference

This work program is accompanied by the following JSON data files. These files contain the machine-readable operational detail that supports the methodology described in this document.

### Baseline Files

| File | Description | Key Content |
|---|---|---|
| `baseline/test-procedures.json` | 106 test procedures covering ToD and ToE for each of the 53 controls | Control ID, domain, procedure description, evidence requirements, expected results |
| `baseline/pbc-list.json` | Prepared by Client (PBC) evidence request list | Evidence item, description, responsible party, format, due date |
| `baseline/sampling-guide.json` | Sample size tables and sampling methodology guidance | Control frequency, population ranges, minimum sample sizes, selection methods |
| `baseline/rating-methodology.json` | Compliance rating criteria and determination rules | Control-level ratings, overall ratings, escalation criteria |

### Sector Overlay Files

| File | Description |
|---|---|
| `sector-overlays/government.json` | MAMPU / Government sector overlay |
| `sector-overlays/banking-finance.json` | BNM / Banking & Finance sector overlay |
| `sector-overlays/healthcare.json` | MOH / Healthcare sector overlay |
| `sector-overlays/ict.json` | MCMC / ICT sector overlay |
| `sector-overlays/energy.json` | Energy Commission / Energy sector overlay |
| `sector-overlays/transport.json` | MOT-CAAM / Transport sector overlay |
| `sector-overlays/water-sewerage.json` | SPAN / Water & Sewerage sector overlay |
| `sector-overlays/defence.json` | MINDEF / Defence sector overlay |
| `sector-overlays/agriculture.json` | KPKM / Agriculture & Food sector overlay |
| `sector-overlays/trade-industry.json` | MITI / Trade & Industry sector overlay |
| `sector-overlays/science-technology.json` | MOSTI / Science & Technology sector overlay |

### Template Files

| File | Description |
|---|---|
| `templates/finding-template.json` | Standardised audit finding template using the 5 C's framework |
| `templates/report-structure.json` | Audit report structure and section guidance per Direction No. 8 |
| `templates/map-tracker.json` | Management Action Plan tracker template |

### File Usage Notes

- Baseline files define the core audit programme and should not be modified for individual engagements.
- Sector overlay files are applied additively on top of the baseline for the relevant NCII sector.
- Template files may be customised per engagement, provided the mandatory fields and structure defined by Direction No. 8 are preserved.

---

## 15. Professional Standards References

The following professional standards and frameworks inform this audit work program:

| Standard | Issuing Body | Relevance to CoP Audit |
|---|---|---|
| **ISACA ITAF 4th Edition** | ISACA | Primary IS audit and assurance framework; defines audit standards, guidelines, and procedures |
| **IIA International Professional Practices Framework (IPPF)** | Institute of Internal Auditors | Internal audit standards; applicable to audit governance, independence, and quality |
| **ISO 19011:2018** | ISO | Auditing management systems; provides principles of auditing, managing an audit programme, and conducting audits |
| **ISO/IEC 27001:2022** | ISO/IEC | Information security management systems; the international benchmark for ISMS against which many CoP controls are mapped |
| **ISACA COBIT 2019** | ISACA | IT governance and management framework; provides a comprehensive model for enterprise IT governance relevant to NCII governance controls |
| **NIST Cybersecurity Framework 2.0** | NIST (US) | Risk-based cybersecurity framework; provides supplementary control guidance and risk assessment methodology |

Auditors are expected to maintain current knowledge of these standards and apply professional judgement in integrating their requirements with the specific obligations of Act 854 and Direction No. 8.

---

## 16. Disclaimer

> **This audit work program contains constructed-indicative content for Direction No. 8 and sector-specific Codes of Practice.** While the structure, methodology, and control framework are designed to reflect the requirements of the Cyber Security Act 2024 (Act 854) and the regulatory instruments referenced herein, practitioners **must always verify** the content of this work program against the official instruments issued by NACSA, including:
>
> - The gazetted text of Act 854 as amended from time to time.
> - The current version of P.U.(A) 219/2024 and any subsequent subsidiary legislation.
> - The current text of Direction No. 8 as issued by the Chief Executive of NACSA.
> - The current sector-specific Codes of Practice as issued by each sector lead.
>
> This work program does not constitute legal advice. Audit firms and individual auditors remain solely responsible for ensuring their audit engagements comply with all applicable legal, regulatory, and professional requirements.
>
> References to penalties, timelines, and specific statutory provisions are provided for practitioner guidance and may not reflect subsequent amendments to the Act or its subsidiary instruments. Always consult the official gazette and NACSA circulars for the authoritative text.

---

*Document version: 1.0 | Work program aligned to Act 854 as at August 2024 | Next review: Upon issuance of updated Direction No. 8 or amendment to Act 854*
