# CoP Compliance Assessment Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Compliance Officer |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory Context](#3-regulatory-context)
4. [CoP Requirement Mapping](#4-cop-requirement-mapping)
5. [Self-Assessment Methodology](#5-self-assessment-methodology)
6. [Gap Identification and Scoring](#6-gap-identification-and-scoring)
7. [Remediation Prioritisation](#7-remediation-prioritisation)
8. [Evidence Collection Guidance](#8-evidence-collection-guidance)
9. [Compliance Reporting to Sector Lead](#9-compliance-reporting-to-sector-lead)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This procedure establishes the structured methodology by which [Organization Name] assesses, documents, and maintains its compliance with the sector-specific Code of Practice (CoP) issued pursuant to the **Cyber Security Act 2024 (Act 854)**, with particular reference to **Section 24**, which mandates that entities operating Critical Information Infrastructure (CII) comply with any applicable code of practice issued or approved by the National Cyber Security Agency (NACSA) or the relevant sector lead.

This document provides the Compliance Officer and relevant stakeholders with a repeatable, auditable, and evidence-based process for conducting compliance assessments, identifying gaps, prioritising remediation activities, and reporting compliance status to the designated sector lead authority.

### 1.2 Scope

This procedure applies to:

- All personnel within [Organization Name] with responsibilities related to cybersecurity governance, risk, and compliance.
- All information systems, assets, and processes designated as, or supporting, Critical Information Infrastructure (CII) owned or operated by [Organization Name].
- All sector-specific Codes of Practice (CoP) issued by NACSA or the relevant sector lead that are applicable to [Organization Name]'s operations.
- Third-party service providers and supply chain entities where their services are integral to the operation of [Organization Name]'s CII.

### 1.3 Out of Scope

- Internal cybersecurity policies not directly mandated by Act 854 or the applicable CoP.
- Non-CII systems unless explicitly referenced in the applicable CoP.
- Compliance assessments against frameworks other than Act 854 and its associated CoPs, except where cross-mapping is conducted for efficiency.

---

## 2. Definitions and Abbreviations

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary legislation governing cybersecurity of CII in Malaysia |
| **CII** | Critical Information Infrastructure — systems whose disruption would have a serious impact on national security, economy, public health, or safety |
| **CoP** | Code of Practice — sector-specific standards issued or approved by NACSA or a sector lead under Act 854 |
| **NACSA** | National Cyber Security Agency — the national authority responsible for cybersecurity policy and coordination in Malaysia |
| **Sector Lead** | The government ministry or regulatory body designated as responsible for a specific CII sector |
| **Gap** | A control requirement within the applicable CoP that is not currently implemented, partially implemented, or implemented inadequately |
| **Remediation** | The planned and executed activities to address an identified compliance gap |
| **CAP** | Corrective Action Plan — a documented plan to address identified gaps within a defined timeline |
| **Assessment Period** | The twelve-month interval over which each formal compliance assessment cycle is conducted |
| **Self-Assessment** | An internal evaluation of compliance status conducted by [Organization Name] against the applicable CoP requirements |
| **Evidence** | Documentation, records, artefacts, or observations that demonstrate compliance with a specific CoP control requirement |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |

---

## 3. Regulatory Context

### 3.1 Legislative Basis

[Organization Name] is designated as a CII entity under **Section 7** of the Cyber Security Act 2024 (Act 854). As a designated CII entity, [Organization Name] is required under **Section 24** of Act 854 to comply with applicable Codes of Practice issued or approved by NACSA or the relevant sector lead.

Failure to comply with an applicable CoP constitutes an offence under Act 854 and may result in enforcement action, including directions to remedy non-compliance, administrative sanctions, or prosecution.

### 3.2 Applicable Codes of Practice

*List all Codes of Practice that are applicable to [Organization Name]. Include the CoP title, issuing authority, version, and effective date.*

| CoP Reference | Title | Issuing Authority | Version | Effective Date |
|---|---|---|---|---|
| [CoP-001] | [CoP Full Title] | [NACSA / Sector Lead Name] | [Version] | [Effective Date] |
| [CoP-002] | [CoP Full Title] | [NACSA / Sector Lead Name] | [Version] | [Effective Date] |
| [CoP-003] | [CoP Full Title] | [NACSA / Sector Lead Name] | [Version] | [Effective Date] |

### 3.3 Sector Classification

| Attribute | Detail |
|---|---|
| **CII Sector** | [e.g., Banking and Finance / Energy / Telecommunications / Water / Transport] |
| **Designated Sector Lead** | [e.g., Bank Negara Malaysia / Energy Commission / Malaysian Communications and Multimedia Commission] |
| **CII Designation Date** | [Date of CII Designation] |
| **CII Reference Number** | [CII Designation Reference] |

---

## 4. CoP Requirement Mapping

### 4.1 Purpose of Requirement Mapping

*This section documents the structured mapping of each control domain and individual control requirement contained within the applicable CoP(s) to [Organization Name]'s internal policies, procedures, and technical controls. This mapping forms the foundation of the self-assessment and must be maintained as a living document, updated whenever the applicable CoP is revised or when internal controls change materially.*

### 4.2 Mapping Methodology

The CoP requirement mapping shall be performed as follows:

1. Obtain the current, authoritative version of each applicable CoP from the issuing authority.
2. Decompose the CoP into discrete, assessable control requirements at the domain and control level.
3. Assign each control requirement a unique mapping reference identifier.
4. Identify the corresponding internal policy, procedure, system, or control that addresses each requirement.
5. Document the mapping in the **CoP Requirement Mapping Register** (Appendix A).
6. Identify requirements for which no internal control exists (unmapped requirements) — these are automatically recorded as gaps.
7. Review and update the mapping annually or whenever the CoP is revised.

### 4.3 CoP Domain Summary

*Populate the following table with the control domains defined in the applicable CoP. Adjust rows as required to reflect the actual structure of the applicable CoP.*

| Domain ID | CoP Domain Name | No. of Controls | Internal Policy / Procedure Reference | Domain Owner |
|---|---|---|---|---|
| [D-01] | [e.g., Governance and Risk Management] | [n] | [Policy/Procedure Reference] | [Role / Department] |
| [D-02] | [e.g., Asset Management] | [n] | [Policy/Procedure Reference] | [Role / Department] |
| [D-03] | [e.g., Access Control] | [n] | [Policy/Procedure Reference] | [Role / Department] |
| [D-04] | [e.g., Incident Management] | [n] | [Policy/Procedure Reference] | [Role / Department] |
| [D-05] | [e.g., Supply Chain Security] | [n] | [Policy/Procedure Reference] | [Role / Department] |
| [D-06] | [e.g., Business Continuity and Resilience] | [n] | [Policy/Procedure Reference] | [Role / Department] |
| [D-07] | [e.g., Audit and Monitoring] | [n] | [Policy/Procedure Reference] | [Role / Department] |
| [D-0n] | [Additional Domain] | [n] | [Policy/Procedure Reference] | [Role / Department] |

### 4.4 Control-Level Mapping Register

*The detailed control-level mapping is maintained in Appendix A (CoP Requirement Mapping Register). The extract below illustrates the mapping structure for a sample domain.*

| Mapping Ref | CoP Domain | CoP Control ID | CoP Control Requirement (Summary) | Internal Control Reference | Control Type | Control Owner |
|---|---|---|---|---|---|---|
| [MAP-01-001] | [Domain Name] | [CoP Ctrl Ref] | [Brief description of the CoP requirement] | [Internal Policy / Procedure / System] | Preventive / Detective / Corrective | [Role] |
| [MAP-01-002] | [Domain Name] | [CoP Ctrl Ref] | [Brief description of the CoP requirement] | [Internal Policy / Procedure / System] | Preventive / Detective / Corrective | [Role] |
| [MAP-0n-00n] | [Domain Name] | [CoP Ctrl Ref] | [Brief description of the CoP requirement] | [None — Gap] | — | [Role to be assigned] |

---

## 5. Self-Assessment Methodology

### 5.1 Overview

*This section describes the end-to-end process for conducting the annual self-assessment against the applicable CoP. The methodology must be applied consistently across all assessment cycles to ensure comparability of results over time and to support trend analysis.*

### 5.2 Assessment Cycle

The self-assessment shall be conducted on an **annual** basis, aligned with [Organization Name]'s internal compliance calendar. The following schedule governs the assessment cycle:

| Milestone | Target Timing | Responsible Party |
|---|---|---|
| Assessment planning and scoping | [e.g., Q1 — Week 1] | Compliance Officer |
| Assessment team briefing | [e.g., Q1 — Week 2] | Compliance Officer |
| Evidence collection commencement | [e.g., Q1 — Week 3] | Control Owners |
| Evidence collection completion | [e.g., Q1 — Week 8] | Control Owners |
| Assessment scoring and gap analysis | [e.g., Q1 — Week 9–10] | Compliance Officer |
| Draft assessment report | [e.g., Q1 — Week 11] | Compliance Officer |
| Management review of findings | [e.g., Q1 — Week 12] | CISO / Senior Management |
| Corrective Action Plan development | [e.g., Q2 — Week 1–2] | Control Owners / Compliance Officer |
| Report submission to sector lead | [e.g., Q2 — Week 4] | Compliance Officer / CISO |

### 5.3 Assessment Team

| Role | Name | Department | Responsibility |
|---|---|---|---|
| Assessment Lead | [Compliance Officer Name] | Compliance | Overall coordination and methodology |
| Technical Assessor | [Name] | IT / Cybersecurity | Technical control verification |
| Business Process Assessor | [Name] | [Business Unit] | Process and people control verification |
| Internal Audit Observer | [Name] | Internal Audit | Independent observation and quality assurance |
| Domain Owner Representatives | [Per domain] | Respective departments | Evidence provision and control attestation |

### 5.4 Assessment Steps

**Step 1 — Preparation**

- Confirm the current version of the applicable CoP is being assessed against.
- Retrieve the CoP Requirement Mapping Register (Appendix A) and verify it reflects the current CoP version.
- Issue assessment notification to all Control Owners.
- Confirm availability of assessment team members.
- Prepare evidence collection templates (Appendix B).

**Step 2 — Evidence Collection**

- Distribute evidence collection requests to Control Owners using the templates in Appendix B.
- Set evidence submission deadline with sufficient time for review prior to scoring.
- Log all evidence received in the Evidence Collection Log (Appendix C).
- Follow up with Control Owners for outstanding evidence submissions.

**Step 3 — Control Testing and Verification**

- Review submitted evidence against each CoP control requirement.
- For each control, assign a **Compliance Rating** using the scoring scale defined in Section 6.2.
- Where evidence is insufficient or absent, request additional evidence or record the control as non-compliant.
- Conduct walkthrough interviews with Control Owners as necessary to verify process compliance.

**Step 4 — Scoring and Gap Analysis**

- Compile assessment scores into the Assessment Scoring Matrix (Appendix D).
- Calculate domain-level and overall compliance scores.
- Identify and document all gaps (controls rated below the compliant threshold).
- Classify gaps by severity using the criteria in Section 6.3.

**Step 5 — Reporting and Remediation Planning**

- Prepare the Assessment Summary Report (Appendix E).
- Present findings to CISO and senior management for review.
- Develop the Corrective Action Plan (Appendix F) for all identified gaps.
- Submit compliance report to the sector lead in accordance with Section 9.

---

## 6. Gap Identification and Scoring

### 6.1 Purpose

*This section defines the criteria and scoring methodology used to evaluate the compliance status of each CoP control requirement, to identify gaps, and to classify their severity. Consistent application of this scoring methodology is essential to ensure the assessment results are defensible, comparable, and suitable for regulatory reporting.*

### 6.2 Compliance Rating Scale

Each CoP control requirement shall be rated using the following five-point scale:

| Rating | Score | Description | Compliance Status |
|---|---|---|---|
| **Fully Compliant** | 4 | Control is implemented, operating effectively, documented, and supported by complete evidence. No gaps identified. | Compliant |
| **Substantially Compliant** | 3 | Control is implemented and largely effective. Minor gaps exist that do not materially affect the control's objective. Evidence is largely complete. | Compliant (with observations) |
| **Partially Compliant** | 2 | Control is partially implemented or inconsistently applied. Moderate gaps exist. Evidence is incomplete or inconsistent. | Non-Compliant (moderate) |
| **Minimally Compliant** | 1 | Control exists in name only or is implemented in an ad hoc manner. Significant gaps exist. Little supporting evidence. | Non-Compliant (significant) |
| **Non-Compliant** | 0 | Control is absent, not implemented, or evidence confirms the requirement is not being met. | Non-Compliant (critical) |

*Controls rated 3 or 4 are considered within the compliant threshold. Controls rated 0, 1, or 2 are recorded as gaps and must be included in the Corrective Action Plan.*

### 6.3 Gap Classification and Severity

All identified gaps shall be classified by severity to support prioritisation of remediation activities:

| Severity | Criteria | Escalation Requirement | Remediation Timeline |
|---|---|---|---|
| **Critical** | Score 0; control absence creates direct exposure to a material cyber incident or regulatory breach; mandatory CoP requirement | Immediate — CISO and Board/Senior Management notification within 5 business days | 30 days |
| **High** | Score 1; significant deficiency with potential for material harm if exploited or upon regulatory inspection | CISO notification within 10 business days | 60 days |
| **Medium** | Score 2; moderate deficiency that reduces control effectiveness but does not create immediate material risk | Compliance Officer management; CISO briefed in next scheduled report | 90 days |
| **Low** | Score 3 (observation); minor gap that does not materially affect control objective | Documented and tracked; reported in annual assessment | 180 days |

### 6.4 Domain Compliance Score Calculation

Domain-level compliance scores shall be calculated as follows:

**Domain Score (%) = (Sum of Control Ratings in Domain) ÷ (Maximum Possible Score for Domain) × 100**

*Where Maximum Possible Score = Number of Controls in Domain × 4*

| Domain ID | Domain Name | No. of Controls | Maximum Score | Actual Score | Domain Score (%) | Status |
|---|---|---|---|---|---|---|
| [D-01] | [Domain Name] | [n] | [n × 4] | [Sum] | [%] | [Compliant / Non-Compliant] |
| [D-02] | [Domain Name] | [n] | [n × 4] | [Sum] | [%] | [Compliant / Non-Compliant] |
| [D-0n] | [Domain Name] | [n] | [n × 4] | [Sum] | [%] | [Compliant / Non-Compliant] |
| | **OVERALL** | [Total] | [Total Max] | [Total Actual] | **[Overall %]** | **[Overall Status]** |

*An overall score of 80% or above, with no Critical gaps, is the minimum threshold for [Organization Name] to represent itself as compliant to the sector lead. Any score below this threshold, or the presence of any Critical gaps, requires mandatory escalation and expedited remediation.*

### 6.5 Gap Register

*All identified gaps must be recorded in the Gap Register (Appendix F). The following fields must be captured for each gap:*

| Gap ID | CoP Domain | CoP Control Ref | Gap Description | Compliance Rating | Severity | Root Cause | Gap Owner | Target Remediation Date |
|---|---|---|---|---|---|---|---|---|
| [GAP-001] | [Domain] | [Control Ref] | [Description of the gap] | [0–2] | [Critical/High/Medium/Low] | [Root cause description] | [Role / Name] | [Date] |
| [GAP-002] | [Domain] | [Control Ref] | [Description of the gap] | [0–2] | [Critical/High/Medium/Low] | [Root cause description] | [Role / Name] | [Date] |
| [GAP-00n] | | | | | | | | |

---

## 7. Remediation Prioritisation

### 7.1 Prioritisation Framework

*This section defines the process by which identified gaps are prioritised for remediation. Prioritisation ensures that the most material compliance deficiencies receive the earliest allocation of resources, minimising regulatory exposure and cyber risk. Prioritisation decisions must be documented, reviewed by the CISO, and included in the Corrective Action Plan.*

### 7.2 Prioritisation Criteria

Remediation prioritisation shall be determined by the combined consideration of the following factors:

| Factor | Description | Weighting |
|---|---|---|
| **Severity** | Gap severity classification (Critical / High / Medium / Low) as defined in Section 6.3 | High |
| **Regulatory Exposure** | Whether the gap corresponds to a mandatory CoP requirement subject to regulatory inspection or reporting | High |
| **Risk Impact** | Potential impact on [Organization Name]'s CII operations if the gap is exploited or results in a cyber incident | High |
| **Ease of Remediation** | Estimated effort, cost, and complexity of implementing the required remediation | Medium |
| **Dependencies** | Whether remediation of this gap is a prerequisite for addressing other gaps | Medium |

### 7.3 Prioritisation Matrix

*Use the following matrix to determine the remediation priority tier for each gap, based on its severity and regulatory exposure.*

| | **Mandatory CoP Requirement** | **Recommended CoP Requirement** |
|---|---|---|
| **Critical** | Priority 1 — Immediate | Priority 1 — Immediate |
| **High** | Priority 1 — Immediate | Priority 2 — Urgent |
| **Medium** | Priority 2 — Urgent | Priority 3 — Scheduled |
| **Low** | Priority 3 — Scheduled | Priority 4 — Monitored |

| Priority Tier | Label | Action Required | Timeline |
|---|---|---|---|
| **Priority 1** | Immediate | Escalate to CISO; initiate remediation without delay; report to sector lead if required | As per Section 6.3 severity timelines |
| **Priority 2** | Urgent | Include in CAP; assign dedicated owner; track in fortnightly compliance review | Within 60–90 days |
| **Priority 3** | Scheduled | Include in CAP; track in monthly compliance reporting | Within 90–180 days |
| **Priority 4** | Monitored | Document as observation; review at next annual assessment | At next assessment |

### 7.4 Corrective Action Plan (CAP) Structure

*A Corrective Action Plan must be developed for all gaps classified as Priority 1, 2, or 3. The CAP must be approved by the CISO and submitted to the sector lead as part of the compliance report where required. The full CAP template is provided in Appendix F.*

| CAP Item ID | Gap ID | Gap Description | Severity | Priority | Remediation Action | Resource Required | Responsible Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| [CAP-001] | [GAP-001] | [Brief gap description] | [Severity] | [P1/P2/P3] | [Specific remediation steps] | [Budget / Personnel / Tools] | [Role / Name] | [Date] | [Not Started / In Progress / Completed] |
| [CAP-002] | [GAP-002] | [Brief gap description] | [Severity] | [P1/P2/P3] | [Specific remediation steps] | [Resource] | [Role / Name] | [Date] | [Status] |
| [CAP-00n] | | | | | | | | | |

### 7.5 CAP Progress Tracking

CAP progress shall be reviewed at the following intervals:

- **Priority 1 items:** Weekly status review, reported to CISO and Senior Management.
- **Priority 2 items:** Fortnightly status review, reported to CISO.
- **Priority 3 items:** Monthly status review, reported to Compliance Officer.
- **Priority 4 items:** Reviewed at next annual assessment.

All status updates must be recorded in the CAP (Appendix F) with the date of update and the name of the reviewer.

---

## 8. Evidence Collection Guidance

### 8.1 Principles of Evidence Collection

*This section provides guidance to Control Owners and the assessment team on the collection, organisation, and submission of evidence to support the self-assessment. Adequate, relevant, and reliable evidence is the foundation of a credible compliance assessment and is essential for demonstrating compliance to the sector lead and NACSA upon inspection.*

Evidence collected must satisfy the following principles:

- **Adequate:** The evidence must be sufficient to demonstrate that the CoP control requirement is met in full.
- **Current:** Evidence must be dated within the current assessment period (last 12 months) unless the requirement is inherently periodic at a longer interval.
- **Authentic:** Evidence must be traceable to its source and must not have been altered or fabricated.
- **Relevant:** Evidence must directly address the specific CoP control requirement being assessed.

### 8.2 Accepted Evidence Types

| Evidence Type | Description | Examples |
|---|---|---|
| **Policy and Procedure Documents** | Formal documents governing how a control is implemented | Information Security Policy, Incident Response Procedure |
| **System Configuration Records** | Technical records demonstrating control implementation in systems | Firewall rulesets, access control lists, patch records |
| **Audit Logs and Reports** | Automated or manual logs demonstrating control operation | SIEM logs, access logs, vulnerability scan reports |
| **Meeting Minutes and Records** | Records of governance activities demonstrating oversight | Board/committee meeting minutes, risk committee records |
| **Training Records** | Evidence of awareness and training activities | Completion records, attendance sheets, training materials |
| **Test and Exercise Reports** | Results of control testing, drills, or exercises | Penetration test reports, BCP/DR exercise reports |
| **Third-Party Reports** | Independent assessments or certifications | External audit reports, ISO 27001 certification |
| **Attestations** | Signed declarations from responsible officers | Control owner attestation forms |
| **Contracts and Agreements** | Agreements with third parties governing security obligations | Vendor contracts, Data Processing Agreements |

### 8.3 Evidence Collection Process

1. The Compliance Officer issues evidence request forms (Appendix B) to all Control Owners at the commencement of the assessment period.
2. Each evidence request form specifies:
   - The CoP control requirement reference
   - The evidence type(s) required
   - The evidence period (date range)
   - The submission deadline
3. Control Owners submit evidence electronically to the designated secure evidence repository at: **[Evidence Repository Location / System]**.
4. All submitted evidence is logged in the Evidence Collection Log (Appendix C), recording the control reference, evidence type, submission date, file reference, and Control Owner name.
5. The assessment team reviews all evidence for adequacy, currency, authenticity, and relevance prior to scoring.
6. Where evidence is assessed as insufficient, the assessment team issues a notice of insufficient evidence to the Control Owner, who has **[n] business days** to provide supplementary evidence.
7. If supplementary evidence is not provided within the specified period, the control is scored based on available evidence, which may result in a lower compliance rating.

### 8.4 Evidence Retention

All evidence collected during the assessment shall be retained for a minimum period of **[specify retention period, e.g., 7 years]** in accordance with [Organization Name]'s Records Retention Policy **[Policy Reference]** and any applicable statutory requirements under Act 854 or sector-specific regulations.

| Evidence Category | Minimum Retention Period | Retention Location | Responsible Party |
|---|---|---|---|
| Assessment evidence files | [n] years | [Repository / Archive Location] | Compliance Officer |
| Assessment reports | [n] years | [Repository / Archive Location] | Compliance Officer |
| Corrective Action Plans | [n] years | [Repository / Archive Location] | Compliance Officer |
| Sector lead submissions | [n] years | [Repository / Archive Location] | Compliance Officer |

---

## 9. Compliance Reporting to Sector Lead

### 9.1 Reporting Obligations

*This section governs the preparation, review, and submission of compliance reports to the designated sector lead in accordance with Act 854 Section 24 and any reporting requirements specified in the applicable CoP. Timely and accurate reporting is a mandatory obligation; failure to report or the submission of materially inaccurate reports may constitute a regulatory breach.*

### 9.2 Reporting Requirements Summary

| Requirement | Detail |
|---|---|
| **Sector Lead** | [Sector Lead Authority Name, e.g., Bank Negara Malaysia] |
| **Reporting Frequency** | Annual (and ad hoc for Critical gaps — see Section 9.4) |
| **Reporting Portal / Channel** | [Reporting Portal Name / Submission Email / Address] |
| **Annual Report Submission Deadline** | [Specify deadline, e.g., 31 March each year for the preceding calendar year] |
| **Report Format** | [Sector Lead Prescribed Format / [Organization Name] Format approved by sector lead] |
| **Submission Authority** | Chief Information Security Officer (CISO) / [Authorized Signatory] |

### 9.3 Annual Compliance Report

The Annual Compliance Report submitted to the sector lead shall include the following sections as a minimum:

| Section | Content |
|---|---|
| **Executive Summary** | Overall compliance posture; total controls assessed; overall compliance score; number of gaps by severity |
| **Compliance Score Summary** | Domain-level and overall compliance scores (Section 6.4 scoring matrix) |
| **Gap Summary** | Summary of all identified gaps, including severity classification |
| **Corrective Action Plan Summary** | Summary of remediation actions, owners, timelines, and current status |
| **Progress on Prior Year CAP** | Status update on gaps identified in the previous annual assessment |
| **Attestation** | Signed attestation from the CISO and/or Board-level sponsor confirming the accuracy of the report |

### 9.4 Ad Hoc Reporting for Critical Gaps

Where a Critical gap is identified at any point during the year — whether through the annual assessment, an interim review, or an incident investigation — [Organization Name] shall:

1. Notify the sector lead within **[specify timeframe, e.g., 14 calendar days]** of identifying the Critical gap.
2. Submit an ad hoc report to the sector lead containing:
   - Description of the Critical gap and affected CoP control requirement(s)
   - Root cause analysis
   - Immediate containment measures implemented
   - Proposed remediation actions and target completion date
3. Submit a follow-up remediation completion report to the sector lead upon closure of the Critical gap.

### 9.5 Report Preparation and Review Workflow

| Step | Action | Responsible | Deadline |
|---|---|---|---|
| 1 | Compile assessment results and draft Annual Compliance Report | Compliance Officer | [Date relative to assessment completion] |
| 2 | Internal review of draft report | CISO | [Date] |
| 3 | Management sign-off | [Authorised Signatory / Board Representative] | [Date] |
| 4 | Submission to sector lead | CISO / Compliance Officer | [Sector Lead Deadline] |
| 5 | Acknowledge receipt from sector lead | Compliance Officer | [Within n business days of submission] |
| 6 | Respond to sector lead queries | Compliance Officer / CISO | [Within n business days of query receipt] |
| 7 | File submitted report in evidence repository | Compliance Officer | [Within n business days of submission] |

### 9.6 Communication Log

*All communications with the sector lead relating to CoP compliance must be recorded in the Sector Lead Communication Log (Appendix G) to maintain a complete audit trail.*

---

## 10. Roles and Responsibilities

*The following RACI matrix defines the responsibilities of key roles across the CoP compliance assessment procedure. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Board / Risk Committee | CISO | Compliance Officer | Control Owners | IT / Cybersecurity Team | Internal Audit | Legal / Regulatory Affairs |
|---|---|---|---|---|---|---|---|
| Approve CoP Compliance Assessment Procedure | A | C | R | I | I | C | C |
| Maintain CoP Requirement Mapping Register | I | A | R | C | C | I | I |
| Plan and coordinate annual self-assessment | I | A | R | I | C | C | I |
| Collect and submit control evidence | I | I | A | R | C | I | I |
| Review and assess evidence | I | A | R | C | C | C | I |
| Score controls and identify gaps | I | A | R | C | C | C | I |
| Classify gap severity | I | A | R | C | C | C | I |
| Approve Corrective Action Plan | A | R | C | I | I | C | I |
| Implement remediation actions | I | A | C | R | R | I | I |
| Track CAP progress | I | A | R | C | C | I | I |
| Prepare Annual Compliance Report | I | A | R | C | C | C | C |
| Review and approve Annual Compliance Report | A | R | C | I | I | C | C |
| Submit Annual Compliance Report to sector lead | I | A | R | I | I | I | C |
| Manage sector lead communications | I | A | R | I | I | I | C |
| Conduct annual procedure review | I | A | R | C | C | C | C |

---

## 11. Review and Approval

### 11.1 Review Schedule

This procedure shall be reviewed annually or whenever any of the following trigger events occur:

- An applicable CoP is issued, revised, or withdrawn by NACSA or the sector lead.
- [Organization Name]'s CII designation scope changes materially.
- A Critical compliance gap is identified that reveals a deficiency in this procedure.
- A material change occurs in [Organization Name]'s organisational structure, systems, or operations that affects the application of this procedure.
- A regulatory inspection or audit identifies a deficiency in this procedure.

### 11.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version — document created |
| [1.1] | [Date] | [Author Name] | [Description of changes made] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Compliance Officer (Document Owner) | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Risk Officer | [Name] | | [Date] |
| Internal Audit (Review Confirmation) | [Name] | | [Date] |
| Board Risk Committee Chairperson | [Name] | | [Date] |

---

## 12. References

| Reference | Document / Regulation | Relevant Provision |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Section 24 — Compliance with codes of practice applicable to CII entities |
| Act 854 | Cyber Security Act 2024 | Section 7 — Designation of Critical Information Infrastructure |
| Act 854 | Cyber Security Act 2024 | Section 25 — Direction to comply / enforcement provisions |
| [CoP-001] | [Full CoP Title] | All applicable control requirements |
| [CoP-002] | [Full CoP Title] | All applicable control requirements |
| [Internal Policy Ref] | [Organization Name] Information Security Policy | Cybersecurity governance framework |
| [Internal Policy Ref] | [Organization Name] Risk Management Policy | Risk assessment and treatment methodology |
| [Internal Policy Ref] | [Organization Name] Records Management Policy | Evidence and document retention requirements |
| [Internal Procedure Ref] | Cyber Incident Response Procedure | Incident reporting obligations under Act 854 |
| [NACSA Reference] | NACSA Cybersecurity Guidelines | Supplementary guidance issued by NACSA |

---

## 13. Appendices

### Appendix A — CoP Requirement Mapping Register

*This register documents the complete mapping of all CoP control requirements to [Organization Name]'s internal controls, policies, and procedures. It serves as the master reference for the annual self-assessment. Maintain this register in a separate controlled spreadsheet or GRC system and reference it from this document.*

**Register Location:** [File Path / GRC System Location]

**Register Fields:**

| Field | Description |
|---|---|
| Mapping Reference | Unique identifier (e.g., MAP-D01-001) |
| CoP Reference | CoP document reference and version |
| CoP Domain | Control domain within the CoP |
| CoP Control ID | Control identifier as numbered in the CoP |
| CoP Control Requirement | Full text or accurate summary of the requirement |
| Mandatory / Recommended | Whether the control is mandatory or recommended |
| Internal Control Reference | [Organization Name]'s corresponding policy / procedure / system |
| Control Type | Preventive / Detective / Corrective / Compensating |
| Control Owner | Role or individual responsible for the control |
| Last Verified Date | Date the mapping was last confirmed as current |
| Notes | Any relevant comments or cross-references |

---

### Appendix B — Evidence Collection Request Template

*This template is issued to Control Owners at the commencement of each annual assessment. Complete one form per CoP control domain or per individual control where evidence requirements are complex.*

**Evidence Collection Request**

| Field | Detail |
|---|---|
| **Request Reference** | [ECR-YYYY-NNN] |
| **Assessment Year** | [Year] |
| **CoP Control Domain** | [Domain Name and ID] |
| **CoP Control Reference(s)** | [Control ID(s)] |
| **Control Requirement Summary** | [Brief description of what the CoP requires] |
| **Evidence Required** | [Specific evidence items requested — list each item] |
| **Evidence Period** | [From Date] to [To Date] |
| **Addressed To** | [Control Owner Name / Role] |
| **Issued By** | [Compliance Officer Name] |
| **Submission Deadline** | [Date] |
| **Submission Location** | [Evidence Repository Path / System] |

**Acknowledgement by Control Owner:**

Name: ___________________________ Role: ___________________________ Date: ___________________________

---

### Appendix C — Evidence Collection Log

*Maintained by the Compliance Officer to track the status of all evidence requests during the assessment cycle.*

| Log Ref | Control Ref | Evidence Type | Control Owner | Request Date | Deadline | Submission Date | File Reference | Adequacy Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| [ECL-001] | [Control Ref] | [Type] | [Name] | [Date] | [Date] | [Date / Outstanding] | [File Ref] | [Adequate / Insufficient / Pending] | [Notes] |
| [ECL-00n] | | | | | | | | | |

---

### Appendix D — Assessment Scoring Matrix

*This matrix records the compliance rating assigned to each CoP control requirement following evidence review. It is the primary working document of the assessment.*

**Scoring Matrix Location:** [File Path / GRC System]

| Control Ref | Control Summary | Evidence Ref(s) | Compliance Rating (0–4) | Severity (if gap) | Assessor | Assessment Date | Notes |
|---|---|---|---|---|---|---|---|
| [Control Ref] | [Summary] | [ECL-XXX, ECL-YYY] | [0–4] | [Critical/High/Medium/Low/N/A] | [Assessor Name] | [Date] | [Notes] |
| [Control Ref] | | | | | | | |

---

### Appendix E — Assessment Summary Report Template

*The Assessment Summary Report is prepared following completion of scoring and is submitted to management and to the sector lead. It must be approved by the CISO prior to external submission.*

**Report Sections:**

1. Executive Summary
2. Assessment Scope and Methodology
3. Overall Compliance Score Summary (table from Section 6.4)
4. Gap Summary by Severity
5. Key Findings and Observations
6. Corrective Action Plan Summary
7. Prior Year CAP Progress Update
8. Conclusion and CISO Attestation

---

### Appendix F — Corrective Action Plan (CAP) Register

*The CAP Register documents all gaps and their associated remediation actions. It is a living document maintained throughout the year.*

**CAP Register Location:** [File Path / GRC System]

| CAP Item ID | Gap ID | CoP Control Ref | Gap Description | Severity | Priority | Root Cause | Remediation Action | Resources Required | Owner | Target Date | Actual Completion Date | Status | Last Updated |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [CAP-001] | [GAP-001] | [Ref] | [Description] | [Severity] | [P1–P4] | [Cause] | [Action] | [Resources] | [Owner] | [Date] | [Date / —] | [Status] | [Date] |
| [CAP-00n] | | | | | | | | | | | | | |

---

### Appendix G — Sector Lead Communication Log

*All formal and informal communications with the sector lead regarding CoP compliance must be recorded here to maintain a complete audit trail.*

| Log Ref | Date | Direction | Contact Name / Authority | Communication Channel | Subject | Summary | Follow-Up Required | Follow-Up Date | Closed |
|---|---|---|---|---|---|---|---|---|---|
| [SL-001] | [Date] | Outbound / Inbound | [Contact / Authority Name] | Email / Portal / Meeting | [Subject] | [Brief summary] | Yes / No | [Date] | Yes / No |
| [SL-00n] | | | | | | | | | |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It must not be disclosed to any party outside [Organization Name] without the prior written authorisation of the [Compliance Officer / CISO]. Any printed copies of this document are uncontrolled. The master version is maintained at **[Document Repository Location]**.