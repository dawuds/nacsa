# Exception Register

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Information Security Officer (CISO) |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This Exception Register documents all approved deviations from the security policies, standards, and controls applicable to [Organization Name]'s National Critical Information Infrastructure (NCII) systems. It provides a centralized, auditable record of accepted risk positions where full policy compliance is not feasible within a defined timeframe, ensuring that all exceptions are formally reviewed, authorized, and time-bounded in accordance with the Cyber Security Act 2024 (Act 854), Section 18.

### 1.2 Scope

This register applies to:

- All NCII systems owned or operated by [Organization Name] as designated under Act 854
- All information security policies, standards, baselines, and control frameworks enforced by the CISO
- All organizational units, subsidiaries, third parties, and managed service providers operating within the defined NCII boundary
- Exceptions arising from technical constraints, business continuity requirements, vendor limitations, or resource constraints

### 1.3 Regulatory Basis

This document is mandated under:

- **Cyber Security Act 2024 (Act 854), Section 18** — Obligations of NCII sector leads and NCII entities to maintain and enforce cybersecurity measures, including documented governance of approved deviations
- **NACSA NCII Cybersecurity Framework** — Governance and risk management requirements for NCII entities
- **[Organization Name] Information Security Policy** — [Policy Reference ID]

---

## 2. Exception Register

*This section constitutes the primary register body. Each row represents a single approved exception. The register should be maintained as a living record; entries must not be deleted upon expiry but must be marked as Closed or Expired for audit continuity. New exceptions must be submitted using the Exception Request Form (Appendix A) prior to entry.*

### 2.1 Active Exceptions

| Exception ID | Exception Title | Date Raised | Raised By | Status |
|---|---|---|---|---|
| EXC-[YYYY]-001 | [Short descriptive title of the exception] | [DD/MM/YYYY] | [Name, Role] | Active |
| EXC-[YYYY]-002 | [Short descriptive title of the exception] | [DD/MM/YYYY] | [Name, Role] | Active |
| EXC-[YYYY]-003 | [Short descriptive title of the exception] | [DD/MM/YYYY] | [Name, Role] | Under Review |

---

## 3. Exception Detail Records

*Each approved exception must be documented in full using the structure below. Duplicate this section for each entry in the register. All fields are mandatory; fields that are not applicable must be explicitly marked "N/A" with a brief rationale.*

---

### 3.1 Exception ID and Description

*Provide a unique, sequential identifier for the exception and a clear, unambiguous description of the deviation being approved. The description must specify what policy or control requirement is not being met and the current state of the system or process.*

| Field | Details |
|---|---|
| **Exception ID** | EXC-[YYYY]-[NNN] |
| **Exception Title** | [Short descriptive title] |
| **Date Raised** | [DD/MM/YYYY] |
| **Raised By** | [Full Name, Job Title, Department] |
| **Affected System(s)** | [System name(s), asset ID(s), or scope description] |
| **NCII Sector** | [e.g., Banking & Finance / Energy / Telecommunications / Government] |
| **Exception Description** | [Detailed description of the deviation. Specify: (1) what the policy or control requires, (2) what is currently in place, and (3) how these differ.] |
| **Exception Category** | [Technical / Operational / Contractual / Regulatory Conflict / Resource Constraint] |
| **Current Status** | [Active / Under Review / Expired / Closed] |

---

### 3.2 Policy or Standard Affected

*Identify the specific policy, standard, procedure, or control objective from which the exception is sought. Reference the document ID, version, and the specific clause or control number. Where multiple policies are affected, list each separately.*

| # | Policy / Standard / Control | Document ID | Version | Clause / Control Reference | Requirement Summary |
|---|---|---|---|---|---|
| 1 | [e.g., Information Security Policy] | [POL-IS-001] | [v2.1] | [Section 4.3.2] | [Brief description of the specific requirement not being met] |
| 2 | [e.g., NACSA NCII Cybersecurity Framework] | [N/A] | [Current] | [Control Domain X.X] | [Brief description of the specific requirement not being met] |
| 3 | [e.g., Network Security Standard] | [STD-NET-003] | [v1.4] | [Clause 7.1] | [Brief description of the specific requirement not being met] |

---

### 3.3 Business Justification

*Provide a substantive, evidence-based justification for why the exception is necessary. The justification must demonstrate that the deviation is the result of a genuine constraint rather than convenience, and must explain why full compliance cannot be achieved within the standard timeframe. Operational necessity, legacy system limitations, vendor dependencies, and regulatory conflicts are acceptable grounds; cost avoidance alone is not.*

**Justification Statement:**

> [Provide a detailed narrative justification. Include: (1) the business or technical constraint driving the exception, (2) steps already taken to achieve compliance and why they were insufficient, (3) the operational impact if the exception is not granted, and (4) the timeline and plan for achieving full compliance.]

**Supporting Evidence:**

| # | Evidence Type | Reference / Document | Date |
|---|---|---|---|
| 1 | [e.g., Vendor EOL Notice] | [Document title or reference] | [DD/MM/YYYY] |
| 2 | [e.g., Technical Assessment Report] | [Document title or reference] | [DD/MM/YYYY] |
| 3 | [e.g., Project Plan for Remediation] | [Document title or reference] | [DD/MM/YYYY] |

**Remediation Plan:**

| Milestone | Description | Target Date | Responsible Owner |
|---|---|---|---|
| 1 | [e.g., Vendor upgrade path assessment] | [DD/MM/YYYY] | [Name, Role] |
| 2 | [e.g., Procurement approval for replacement system] | [DD/MM/YYYY] | [Name, Role] |
| 3 | [e.g., Implementation and testing] | [DD/MM/YYYY] | [Name, Role] |
| 4 | [e.g., Full compliance achieved — exception closure] | [DD/MM/YYYY] | [Name, Role] |

---

### 3.4 Compensating Controls

*Detail the compensating controls implemented to reduce the residual risk introduced by the exception to an acceptable level. Compensating controls must be specific, measurable, and actively monitored. Generic statements such as "monitoring is in place" are insufficient; the control, its configuration, its owner, and its effectiveness measurement must all be documented.*

*Where compensating controls do not fully mitigate the residual risk, the residual risk level must be explicitly stated and accepted through the appropriate risk acceptance authority.*

| Control ID | Compensating Control Description | Control Type | Implementation Status | Control Owner | Effectiveness Measure | Review Frequency |
|---|---|---|---|---|---|---|
| CC-[EXC-ID]-01 | [Specific compensating control, e.g., Enhanced logging and alerting on all traffic to/from the excepted system, with alerts reviewed daily by SOC] | [Preventive / Detective / Corrective] | [Implemented / Planned — Target: DD/MM/YYYY] | [Name, Role] | [e.g., Zero unreviewed alerts > 24 hours old; monthly SOC report] | [Daily / Weekly / Monthly] |
| CC-[EXC-ID]-02 | [Specific compensating control] | [Preventive / Detective / Corrective] | [Implemented / Planned] | [Name, Role] | [Effectiveness measure] | [Frequency] |
| CC-[EXC-ID]-03 | [Specific compensating control] | [Preventive / Detective / Corrective] | [Implemented / Planned] | [Name, Role] | [Effectiveness measure] | [Frequency] |

**Residual Risk Assessment:**

| Field | Details |
|---|---|
| **Inherent Risk Level** | [Critical / High / Medium / Low] |
| **Residual Risk Level (post-compensating controls)** | [Critical / High / Medium / Low] |
| **Risk Rating Rationale** | [Brief explanation of how compensating controls reduce the risk level and any remaining residual exposure] |
| **Risk Treatment Decision** | [Accept / Transfer / Further Mitigate] |

---

### 3.5 Risk Acceptance Authority

*Document the individual or governance body that has formally accepted the residual risk associated with this exception. The acceptance authority must be commensurate with the risk level: High and Critical residual risks require Board-level or senior executive acceptance. Medium risks may be accepted at CISO or Head of Department level. Low risks may be accepted at system owner level, subject to CISO endorsement.*

| Field | Details |
|---|---|
| **Risk Acceptance Authority** | [Full Name, Job Title] |
| **Authority Level** | [Board / EXCO / CISO / Head of Department / System Owner] |
| **Delegated Authority Reference** | [Reference to delegation of authority document, if applicable] |
| **Date of Acceptance** | [DD/MM/YYYY] |
| **Conditions of Acceptance** | [Any conditions attached to the acceptance, e.g., "Subject to compensating controls remaining in place and monthly SOC reporting to CISO"] |
| **CISO Endorsement** | [Full Name] |
| **CISO Endorsement Date** | [DD/MM/YYYY] |

**Formal Acceptance Statement:**

> *I, [Risk Acceptance Authority Name], [Job Title], acknowledge that I have reviewed this exception request, including the associated risk assessment and compensating controls. I formally accept the residual risk described above on behalf of [Organization Name], subject to the conditions stated, and authorize this exception for the period specified.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Risk Acceptance Authority | [Name] | ________________ | [DD/MM/YYYY] |
| CISO | [Name] | ________________ | [DD/MM/YYYY] |
| Endorsing Committee / Body | [Name / Committee] | ________________ | [DD/MM/YYYY] |

---

### 3.6 Expiry Date and Review Trigger

*All exceptions must be time-bounded. Permanent exceptions are not permitted for NCII systems. The maximum initial exception period is 12 months; exceptions may be renewed only where the business justification and remediation plan are updated and re-approved. Review triggers define conditions that will cause an early review of the exception regardless of the scheduled review date.*

| Field | Details |
|---|---|
| **Exception Grant Date** | [DD/MM/YYYY] |
| **Exception Expiry Date** | [DD/MM/YYYY] (Maximum 12 months from grant date) |
| **Exception Duration** | [e.g., 6 months / 12 months] |
| **Renewal Permitted** | [Yes / No] |
| **Maximum Renewals** | [e.g., 1 renewal permitted; subsequent renewal requires EXCO approval] |
| **Scheduled Quarterly Review Date** | [DD/MM/YYYY] |
| **Next Review Date** | [DD/MM/YYYY] |

**Review Triggers:**

*The following conditions will trigger an immediate unscheduled review of this exception, regardless of the scheduled review date. Upon occurrence of a trigger event, the exception owner must notify the CISO within [2] business days.*

| # | Review Trigger | Action Required |
|---|---|---|
| 1 | A cybersecurity incident or near-miss involving the excepted system or control gap | Immediate escalation to CISO; exception suspended pending review |
| 2 | A material change to the affected system's architecture, configuration, or data classification | Exception owner to notify CISO; exception re-evaluated |
| 3 | Availability of a remediation path that was previously unavailable (e.g., vendor patch released) | Exception owner to update remediation plan; exception may be shortened |
| 4 | Change in regulatory requirements affecting the excepted control | CISO to review; exception may be revoked |
| 5 | Failure or degradation of a compensating control | Immediate notification to CISO; compensating control must be restored within [5] business days |
| 6 | [Organization-specific trigger] | [Action required] |

**Closure Conditions:**

| Closure Condition | Evidence Required |
|---|---|
| Full compliance achieved | Compliance evidence submitted to CISO; exception formally closed |
| Expiry without renewal | Exception marked Expired; post-exception review completed |
| Exception revoked by CISO | Formal revocation notice issued; remediation accelerated |

---

## 4. Roles and Responsibilities

*This section defines accountability for the management, maintenance, and governance of the Exception Register in accordance with Act 854, Section 18 obligations.*

### 4.1 RACI Matrix

| Activity | CISO | System Owner | Risk Owner | IT Security Team | Internal Audit | EXCO / Board |
|---|---|---|---|---|---|---|
| Define exception management policy and thresholds | A/R | C | C | I | I | I |
| Submit exception request | I | R | C | C | I | I |
| Conduct initial risk assessment of exception | A | C | R | R | I | I |
| Review and endorse exception request | A/R | I | C | C | I | I |
| Approve exception (Medium risk) | A/R | I | A | I | I | I |
| Approve exception (High / Critical risk) | R | I | A | I | I | A |
| Implement and maintain compensating controls | I | A/R | I | R | I | I |
| Maintain and update Exception Register | A/R | C | I | R | I | I |
| Conduct quarterly register review | A/R | C | C | R | C | I |
| Verify compensating control effectiveness | A | C | I | R | R | I |
| Escalate exceptions approaching expiry | R | R | I | R | I | I |
| Conduct exception closure review | A/R | R | C | R | C | I |
| Report exception status to Board / EXCO | A/R | I | I | I | I | R |
| Independent audit of exception register | I | I | I | I | A/R | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 4.2 Role Definitions

| Role | Responsibilities |
|---|---|
| **CISO** | Overall accountable owner of the Exception Register; final endorsement authority for medium-risk exceptions; escalation point for high and critical exceptions; quarterly register review chairperson |
| **System Owner** | Raises exception requests for systems under their ownership; implements and maintains compensating controls; ensures exception expiry dates are tracked; submits renewal or closure evidence |
| **Risk Owner** | Formally accepts residual risk in line with delegated authority; ensures risk acceptance is consistent with organizational risk appetite |
| **IT Security Team** | Conducts technical risk assessments; validates compensating control design and implementation; maintains register entries; monitors review triggers |
| **Internal Audit** | Provides independent assurance over the completeness and accuracy of the register; verifies compensating control effectiveness; reports findings to Audit Committee |
| **EXCO / Board** | Approves high and critical risk exceptions; reviews aggregate exception reporting; sets organizational risk appetite for NCII systems |

---

## 5. Exception Management Process

*This section summarizes the end-to-end lifecycle for managing exceptions from submission through to closure.*

### 5.1 Exception Lifecycle

```
Submission → Initial Assessment → Risk Evaluation → Approval → Implementation → Monitoring → Review → Closure/Renewal
```

| Stage | Description | Timeframe | Responsible |
|---|---|---|---|
| **1. Submission** | System Owner submits completed Exception Request Form (Appendix A) to the IT Security Team | As required | System Owner |
| **2. Initial Assessment** | IT Security Team reviews completeness and conducts initial risk assessment | Within 5 business days of submission | IT Security Team |
| **3. Risk Evaluation** | Residual risk level determined; compensating controls assessed for adequacy | Within 5 business days of initial assessment | IT Security Team, Risk Owner |
| **4. Approval** | Exception forwarded to appropriate approval authority based on risk level | Within 5 business days of risk evaluation | CISO / EXCO / Board |
| **5. Register Entry** | Approved exception recorded in this register; exception ID assigned | Within 2 business days of approval | IT Security Team |
| **6. Implementation** | Compensating controls implemented and verified | Per agreed implementation date | System Owner |
| **7. Monitoring** | Compensating controls monitored; review triggers tracked | Continuous | System Owner, IT Security Team |
| **8. Quarterly Review** | All active exceptions reviewed for continued validity | Quarterly | CISO, IT Security Team |
| **9. Renewal or Closure** | Exception renewed with updated justification or formally closed | Prior to expiry date | System Owner, CISO |

### 5.2 Approval Thresholds

| Residual Risk Level | Approval Authority | Escalation Path |
|---|---|---|
| Low | CISO | N/A |
| Medium | CISO | EXCO (if CISO determines escalation warranted) |
| High | CISO + EXCO approval | Board notification |
| Critical | CISO + Board approval | Immediate Board notification; mandatory remediation plan |

---

## 6. Reporting and Escalation

*This section defines the reporting obligations for the Exception Register under Act 854 and internal governance requirements.*

### 6.1 Internal Reporting

| Report | Frequency | Audience | Content |
|---|---|---|---|
| Exception Register Status Report | Quarterly | CISO, EXCO | Number of active exceptions by risk level; exceptions approaching expiry; newly raised exceptions; closed exceptions |
| High / Critical Exception Report | As raised | CISO, EXCO, Board | Full exception detail for high and critical risk exceptions |
| Overdue Exception Report | Monthly | CISO | Exceptions past expiry date without renewal or closure |
| Compensating Control Effectiveness Report | Quarterly | CISO | Status of all compensating controls; any control failures or degradations |

### 6.2 Regulatory Reporting

*Where an exception relates to a control required under Act 854 or the NACSA NCII Cybersecurity Framework, and the residual risk is assessed as High or Critical, [Organization Name] must consider whether notification to NACSA or the relevant NCII Sector Lead is required under Section 18 obligations. Legal and compliance counsel must be engaged prior to any regulatory disclosure.*

| Condition | Regulatory Obligation | Action |
|---|---|---|
| High / Critical exception involving core NCII system | Potential notification obligation under s18 | Escalate to Legal and Compliance; engage CISO and CEO |
| Cybersecurity incident linked to an active exception | Incident reporting obligation under Act 854 | Follow Incident Response Policy [IR-POL-001] |
| Exception exceeding 12 months without remediation | Indicative of systemic non-compliance | Escalate to Board; engage regulatory counsel |

---

## 7. Review and Approval

### 7.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Job Title] | Initial version — established in compliance with Cyber Security Act 2024 (Act 854) |
| [1.1] | [DD/MM/YYYY] | [Author Name, Job Title] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Job Title] | [Description of changes] |

### 7.2 Scheduled Review

This register is subject to **quarterly review** by the CISO and IT Security Team. The review must assess:

- [ ] All active exceptions remain valid and business justification is current
- [ ] Compensating controls remain effective and implemented
- [ ] Remediation plans are on track
- [ ] Exceptions approaching expiry within 60 days are flagged for renewal or closure
- [ ] Any new review triggers have been identified and acted upon
- [ ] Register accuracy and completeness verified

### 7.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name, IT Security Team] | ________________ | [DD/MM/YYYY] |
| Reviewed By | [Name, Information Security Manager] | ________________ | [DD/MM/YYYY] |
| Approved By | [Name, CISO] | ________________ | [DD/MM/YYYY] |
| Endorsed By | [Name, CIO / CTO] | ________________ | [DD/MM/YYYY] |
| Noted By | [Name, CEO / MD] | ________________ | [DD/MM/YYYY] |

---

## 8. References

| # | Reference | Description |
|---|---|---|
| 1 | **Cyber Security Act 2024 (Act 854), Section 18** | Obligations of NCII entities to implement and maintain cybersecurity measures, including governance of approved deviations from required controls |
| 2 | **Cyber Security Act 2024 (Act 854), Section 25–27** | NACSA's powers to conduct audits and assessments of NCII entities' cybersecurity practices |
| 3 | **NACSA NCII Cybersecurity Framework** | National cybersecurity framework for NCII sectors; governance, risk management, and compliance requirements |
| 4 | **NACSA NCII Sector Cybersecurity Framework — [Sector Name]** | Sector-specific cybersecurity requirements applicable to [Organization Name] |
| 5 | **[Organization Name] Information Security Policy** | [POL-IS-001 v[X.X]] — Parent policy for all information security controls |
| 6 | **[Organization Name] Risk Management Framework** | [RMF-001 v[X.X]] — Defines risk appetite, acceptance thresholds, and governance |
| 7 | **[Organization Name] Incident Response Policy** | [IR-POL-001 v[X.X]] — Incident response obligations relevant to exceptions that contribute to incidents |
| 8 | **ISO/IEC 27001:2022, Clause 6.1.3** | Information security risk treatment, including acceptance of identified risks |
| 9 | **Personal Data Protection Act 2010 (Act 709)** | Where excepted controls relate to personal data processing systems |

---

## 9. Appendices

### Appendix A — Exception Request Form

*Use this form to submit a new exception request to the IT Security Team. All sections must be completed in full. Incomplete submissions will be returned without review.*

| Field | Response |
|---|---|
| **Requestor Name** | [Full Name] |
| **Job Title** | [Job Title] |
| **Department** | [Department] |
| **Date of Request** | [DD/MM/YYYY] |
| **Affected System(s)** | [System name, asset ID, IP range, or scope] |
| **Policy / Standard / Control Affected** | [Policy name, document ID, and specific clause] |
| **Description of Deviation** | [What is the policy requirement? What is currently in place? How do these differ?] |
| **Business Justification** | [Why is the exception necessary? What constraint prevents compliance?] |
| **Proposed Compensating Controls** | [What controls will be implemented to reduce residual risk?] |
| **Proposed Expiry Date** | [DD/MM/YYYY — maximum 12 months] |
| **Remediation Plan Summary** | [Key milestones and target dates for achieving full compliance] |
| **Supporting Documents Attached** | [List attached evidence documents] |
| **Requestor Signature** | ________________ Date: [DD/MM/YYYY] |

---

### Appendix B — Exception Status Definitions

| Status | Definition |
|---|---|
| **Active** | Exception is approved, within its validity period, and compensating controls are in place |
| **Under Review** | Exception is pending initial review, renewal assessment, or triggered an early review |
| **Pending Approval** | Exception request has been assessed and is awaiting approval from the designated authority |
| **Expired** | Exception has passed its expiry date; system is non-compliant unless renewed or remediated |
| **Closed — Compliant** | Exception has been closed because full policy compliance has been achieved |
| **Closed — Revoked** | Exception has been revoked by the CISO prior to expiry |
| **Rejected** | Exception request was assessed and denied; full compliance is required |

---

### Appendix C — Risk Rating Matrix

*Use this matrix to determine the inherent and residual risk level when assessing exception requests.*

| Likelihood \ Impact | Negligible | Minor | Moderate | Major | Critical |
|---|---|---|---|---|---|
| **Almost Certain** | Medium | High | High | Critical | Critical |
| **Likely** | Low | Medium | High | High | Critical |
| **Possible** | Low | Medium | Medium | High | High |
| **Unlikely** | Low | Low | Medium | Medium | High |
| **Rare** | Low | Low | Low | Medium | Medium |

**Approval Thresholds Reminder:**

| Risk Level | Required Approval Authority |
|---|---|
| Low | CISO |
| Medium | CISO |
| High | CISO + EXCO |
| Critical | CISO + Board |

---

### Appendix D — Quarterly Review Checklist

*This checklist must be completed by the IT Security Team at each quarterly register review and retained as evidence of review.*

**Review Period:** [Q1 / Q2 / Q3 / Q4] [YYYY] | **Review Date:** [DD/MM/YYYY] | **Reviewer:** [Name, Role]

| # | Review Activity | Completed | Notes |
|---|---|---|---|
| 1 | All active exceptions verified — business justification remains valid | [ ] Yes [ ] No | [Notes] |
| 2 | All compensating controls confirmed as implemented and effective | [ ] Yes [ ] No | [Notes] |
| 3 | Remediation plans reviewed — milestones on track | [ ] Yes [ ] No | [Notes] |
| 4 | Exceptions expiring within 60 days identified and flagged | [ ] Yes [ ] No | [Notes] |
| 5 | New review triggers identified since last quarterly review | [ ] Yes [ ] No | [Notes] |
| 6 | Exceptions with High / Critical residual risk reported to EXCO | [ ] Yes [ ] No | [Notes] |
| 7 | Register accuracy verified — all fields current and complete | [ ] Yes [ ] No | [Notes] |
| 8 | Expired exceptions marked and closed exceptions archived | [ ] Yes [ ] No | [Notes] |
| 9 | Register submitted to CISO for sign-off | [ ] Yes [ ] No | [Notes] |

**CISO Sign-Off:** ________________ **Date:** [DD/MM/YYYY]

---

*This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. This document must be reviewed and updated at least quarterly or upon material change to the regulatory environment, organizational structure, or NCII system scope.*

*Document ID: [Document ID] | Version: 1.0 | Owner: CISO | Next Review: [Next Review Date]*