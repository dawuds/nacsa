# Audit Findings Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Head of Internal Audit / CISO |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This Audit Findings Register serves as the authoritative record for tracking all findings identified through cyber security audits, assessments, penetration tests, and compliance reviews conducted by or on behalf of [Organization Name]. It provides a centralised, continuously maintained log that enables management, the Head of Internal Audit, and the Chief Information Security Officer (CISO) to monitor the lifecycle of each finding from identification through to verified closure.

This register supports [Organization Name]'s obligations under the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 22** — Requirements for cyber security audits and assessments of critical information infrastructure (CII) and designated entities, including the obligation to conduct audits at prescribed intervals and report outcomes to the National Cyber Security Agency (NACSA).
- **Section 23** — Obligations relating to the submission of audit reports, rectification of identified vulnerabilities, and the maintenance of evidence demonstrating that remediation actions have been completed within required timeframes.

### 1.2 Scope

This register applies to:

- All internal and external cyber security audits commissioned by [Organization Name].
- Vulnerability assessments, penetration tests, red team exercises, and control effectiveness reviews.
- Findings arising from regulatory examinations by NACSA, Bank Negara Malaysia (BNM), and other relevant authorities.
- Self-assessments conducted against recognised frameworks (e.g., NIST CSF, ISO/IEC 27001, RMiT Technology Risk Management).
- Any other formal review that produces documented findings requiring remediation tracking.

**Out of Scope:** Informal observations, ad hoc recommendations not formalised in an audit report, and findings related to non-technology operational risks unless they have a direct cyber security implication.

---

## 2. Finding ID and Audit Source

*Each entry in this register must be assigned a unique Finding ID upon creation. The audit source identifies the originating review engagement. This enables traceability back to the source audit report and supports aggregated reporting to the Board, EXCO, and NACSA as required under Act 854 s22.*

### 2.1 Finding Identification Structure

Finding IDs shall follow the convention:

**`[ORG]-AF-[YEAR]-[AUDIT CODE]-[SEQUENCE]`**

**Example:** `MYB-AF-2025-PT01-003` denotes the third finding from the first penetration test engagement conducted in 2025 at [Organization Name].

### 2.2 Audit Source Reference Table

| Finding ID | Audit / Assessment Name | Audit Type | Auditor / Assessor | Audit Reference Number | Audit Report Date |
|---|---|---|---|---|---|
| [ORG]-AF-[YYYY]-[CODE]-[NNN] | [Name of Audit Engagement] | [Internal Audit / External Audit / Penetration Test / Regulatory Examination / Self-Assessment] | [Auditor Name / Firm] | [Audit Report Ref No.] | [DD-MMM-YYYY] |
| | | | | | |
| | | | | | |

**Audit Type Reference:**

| Code | Audit Type |
|---|---|
| IA | Internal Audit |
| EA | External Audit |
| PT | Penetration Test / Red Team |
| VA | Vulnerability Assessment |
| RE | Regulatory Examination |
| SA | Self-Assessment / Gap Analysis |
| TP | Third-Party / Vendor Assessment |

---

## 3. Severity Classification

*All findings must be assigned a severity rating at the time of recording, consistent with [Organization Name]'s risk rating methodology. Severity ratings inform escalation thresholds, remediation deadlines, and Board reporting obligations under Act 854 s22 and s23.*

### 3.1 Severity Rating Scale

| Severity Level | Rating Code | Definition | Remediation Deadline |
|---|---|---|---|
| **Critical** | CR | Exploitation likely; immediate threat to confidentiality, integrity, or availability of CII systems or sensitive data. Regulatory breach may be imminent. | 14 calendar days |
| **High** | HI | Significant control weakness; exploitation feasible with moderate effort. Material risk to operations or compliance posture. | 30 calendar days |
| **Medium** | ME | Control gap that increases risk but requires specific conditions to exploit. Moderate operational or compliance impact. | 60 calendar days |
| **Low** | LO | Minor weakness or best-practice deviation with limited immediate impact. | 90 calendar days |
| **Informational** | IN | Observation for improvement; no direct risk identified. No mandatory remediation deadline. | [As agreed] |

### 3.2 Severity Assignment Log

*Record the assigned severity for each finding at time of initial entry. Changes to severity must be documented with justification and approver sign-off.*

| Finding ID | Initial Severity | Current Severity | Severity Change Justification | Severity Revised By | Revision Date |
|---|---|---|---|---|---|
| [Finding ID] | [CR/HI/ME/LO/IN] | [CR/HI/ME/LO/IN] | [Justification if changed] | [Name, Role] | [DD-MMM-YYYY] |
| | | | | | |

---

## 4. Description and Recommendation

*This section captures the substantive detail of each finding. Descriptions must be sufficiently detailed to allow a technically competent reviewer unfamiliar with the original audit to understand the nature of the gap, its root cause, and the associated risk. Recommendations must be specific and actionable.*

### 4.1 Finding Detail Register

| Finding ID | Finding Title | Detailed Description | Root Cause | Affected System / Asset | Regulatory / Framework Reference | Auditor's Recommendation | Management Response |
|---|---|---|---|---|---|---|---|
| [Finding ID] | [Short descriptive title] | [Full description of the finding, including what was observed, why it constitutes a gap or risk, and what evidence was examined] | [Technical / Process / People root cause] | [System name, IP range, application, or business process] | [Act 854 s22 / s23 / ISO 27001 A.x.x / RMiT clause x.x] | [Specific, actionable recommendation as stated in the audit report] | [Management's agreed response and any alternative remediation proposed] |
| | | | | | | | |
| | | | | | | | |

### 4.2 Risk Context

*For Critical and High severity findings, complete a brief risk context statement to support escalation decisions and Board reporting.*

| Finding ID | Threat Scenario | Likelihood (1–5) | Impact (1–5) | Inherent Risk Score | Control Effectiveness | Residual Risk Score |
|---|---|---|---|---|---|---|
| [Finding ID] | [Description of threat scenario if exploited] | [1–5] | [1–5] | [L × I] | [Effective / Partially Effective / Ineffective] | [Residual score] |
| | | | | | | |

---

## 5. Remediation Owner and Deadline

*Each finding must be assigned a named remediation owner who holds accountability for delivering the remediation action within the agreed deadline. Deadlines are derived from the severity classification in Section 3 and must not be extended without formal approval from the CISO or Head of Internal Audit.*

### 5.1 Remediation Assignment Register

| Finding ID | Severity | Remediation Owner (Name) | Remediation Owner (Role) | Business Unit | Date Finding Assigned | Target Remediation Date | CISO-Approved Extension Date | Extension Justification |
|---|---|---|---|---|---|---|---|---|
| [Finding ID] | [CR/HI/ME/LO/IN] | [Full Name] | [Job Title] | [Department / BU] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [DD-MMM-YYYY or N/A] | [Reason for extension, if applicable] |
| | | | | | | | | |
| | | | | | | | | |

### 5.2 Deadline Extension Approval Log

*All deadline extensions for Critical and High severity findings require documented approval. Extensions must not be granted more than once without Board Risk Committee notification.*

| Finding ID | Original Deadline | New Deadline | Extension Requested By | Request Date | Approved By | Approval Date | Board Notification Required? |
|---|---|---|---|---|---|---|---|
| [Finding ID] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [Name, Role] | [DD-MMM-YYYY] | [CISO / Head of IA] | [DD-MMM-YYYY] | [Yes / No] |
| | | | | | | | |

---

## 6. Current Status

*The status field must be updated at a minimum during each monthly review cycle. Status transitions must be recorded to provide a full audit trail of remediation progress. Findings may not be marked Closed without verified evidence reviewed by the Head of Internal Audit or a delegated auditor.*

### 6.1 Status Definitions

| Status Code | Status | Definition |
|---|---|---|
| **OPEN** | Open | Finding identified; remediation not yet commenced. |
| **IN-PROG** | In Progress | Remediation action underway; within target deadline. |
| **OVERDUE** | Overdue | Target remediation deadline has passed; finding not yet closed. |
| **REMEDIATED** | Remediated (Pending Verification) | Remediation owner has declared completion; awaiting independent verification by Internal Audit. |
| **CLOSED** | Closed | Independent verification completed; finding confirmed remediated with satisfactory evidence. |
| **ACCEPTED** | Risk Accepted | Residual risk formally accepted by appropriate authority (Risk Committee / Board); documented in risk register. |
| **VOID** | Voided | Finding withdrawn following re-assessment (e.g., determined to be a false positive); documented justification required. |

### 6.2 Status Tracking Register

| Finding ID | Severity | Date Opened | Current Status | Status Last Updated | Updated By | Days Open | Days Until Deadline / Days Overdue | Escalation Triggered? |
|---|---|---|---|---|---|---|---|---|
| [Finding ID] | [CR/HI/ME/LO/IN] | [DD-MMM-YYYY] | [Status Code] | [DD-MMM-YYYY] | [Name, Role] | [Auto-calculated] | [Auto-calculated] | [Yes / No] |
| | | | | | | | | |
| | | | | | | | | |

### 6.3 Monthly Status Review Summary

*Complete this summary table at each monthly review session to provide a management-level snapshot for reporting.*

| Review Month | Total Open Findings | Critical Open | High Open | Overdue Findings | Newly Opened | Closed This Month | Risk Accepted | Reviewed By | Review Date |
|---|---|---|---|---|---|---|---|---|---|
| [MMM-YYYY] | [n] | [n] | [n] | [n] | [n] | [n] | [n] | [Name, Role] | [DD-MMM-YYYY] |
| | | | | | | | | | |

---

## 7. Evidence of Closure

*Closure of any finding requires independent verification by Internal Audit or a designated independent reviewer. Evidence must be documented, referenced, and retained in accordance with [Organization Name]'s records management policy. For NACSA regulatory audit findings, evidence must be retained for a minimum period as prescribed under Act 854 and submitted to NACSA upon request.*

### 7.1 Closure Evidence Register

| Finding ID | Closure Evidence Type | Evidence Reference / Location | Evidence Description | Verification Performed By | Verification Date | Closure Approved By | Closure Date | Remarks |
|---|---|---|---|---|---|---|---|---|
| [Finding ID] | [Screenshot / Configuration File / Policy Document / Test Result / Third-Party Certification / Other] | [Document path, ticket number, or repository reference] | [Brief description of the evidence and how it demonstrates remediation] | [Internal Auditor Name] | [DD-MMM-YYYY] | [Head of IA / CISO] | [DD-MMM-YYYY] | [Any residual observations] |
| | | | | | | | | |
| | | | | | | | | |

### 7.2 Accepted Evidence Types

*The following evidence types are acceptable to support finding closure. Where multiple types are available, more than one should be referenced.*

| Evidence Type | Description | Acceptable For |
|---|---|---|
| Configuration screenshot | Timestamped screenshot demonstrating corrected system configuration | Technical control findings |
| Patching / vulnerability scan report | Re-scan report confirming vulnerability no longer present | Vulnerability findings |
| Updated policy / procedure document | Revised document with version control and approval metadata | Process / governance findings |
| Training completion records | Evidence of staff training completion (e.g., LMS export) | Awareness / human factor findings |
| Third-party certification | Updated certificate (e.g., ISO 27001) or third-party attestation letter | Vendor / third-party findings |
| Penetration test re-test report | Re-test report from original or independent tester confirming finding remediated | Penetration test findings |
| Audit committee minutes | Board or committee minutes recording formal risk acceptance decision | Risk-accepted findings |
| NACSA acknowledgement | Written acknowledgement from NACSA confirming satisfactory remediation | Regulatory examination findings |

### 7.3 Regulatory Submission Log

*For findings arising from NACSA examinations or findings required to be reported to NACSA under Act 854 s23, maintain a submission log.*

| Finding ID | Regulatory Body | Submission Required? | Submission Date | Submission Reference | NACSA / Regulatory Response | Response Date | Final Status |
|---|---|---|---|---|---|---|---|
| [Finding ID] | [NACSA / BNM / Other] | [Yes / No] | [DD-MMM-YYYY] | [Reference number] | [Acknowledged / Further action required / Closed] | [DD-MMM-YYYY] | [Status] |
| | | | | | | | |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for maintaining and acting upon this register. All parties must be briefed on their responsibilities at the commencement of each audit cycle.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Head of Internal Audit | CISO | Remediation Owner (Business Unit) | IT Security Team | Risk & Compliance Officer | Board / Risk Committee | NACSA |
|---|---|---|---|---|---|---|---|
| Assign Finding ID and record new finding | R | C | I | C | I | — | — |
| Assign severity classification | R | A | C | C | C | I | — |
| Assign remediation owner and deadline | A | R | C | C | I | — | — |
| Update remediation status (monthly) | R | A | R | C | C | I | — |
| Approve deadline extensions (High/Critical) | A | R | C | — | C | I | — |
| Notify Board of overdue Critical/High findings | R | A | I | — | C | I | — |
| Perform independent closure verification | R | A | — | C | C | — | — |
| Approve finding closure | A | R | I | — | C | — | — |
| Submit required findings to NACSA | A | R | — | C | C | I | I |
| Archive closed findings and evidence | R | C | — | C | A | — | — |
| Conduct monthly register review | R | A | I | C | C | I | — |
| Maintain register version control | R | C | — | — | C | — | — |

---

## 9. Escalation and Reporting

### 9.1 Escalation Thresholds

*Findings meeting the following criteria must be escalated to the specified authority within the defined timeframe.*

| Trigger | Escalation Authority | Escalation Timeframe |
|---|---|---|
| Any Critical finding identified | CISO + CEO | Within 24 hours of finding identification |
| Critical finding not remediated within 7 days | Board Risk Committee | Immediately upon day 7 breach |
| Any High finding overdue by more than 14 days | CISO + Head of IA | Within 48 hours of overdue threshold |
| 3 or more High/Critical findings open simultaneously | Board Risk Committee | At next scheduled Board meeting (or sooner) |
| Finding constituting a reportable cyber security incident | NACSA (via CISO) | As per Act 854 incident notification obligations |
| NACSA-directed remediation deadline approaching (≤7 days) | CEO | At least 7 days prior to deadline |

### 9.2 Reporting Schedule

| Report | Audience | Frequency | Prepared By |
|---|---|---|---|
| Audit Findings Status Report | CISO, Head of IA | Monthly | Internal Audit |
| Overdue Findings Summary | Board Risk Committee | Quarterly (or immediately for Critical) | Head of Internal Audit |
| NACSA Regulatory Compliance Report | NACSA | As prescribed by Act 854 s22/s23 | CISO |
| Annual Audit Findings Trend Analysis | Board / EXCO | Annually | Head of Internal Audit |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name, Role] | Initial release |
| | | | |
| | | | |

### 10.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Internal Audit | [Full Name] | __________________ | [DD-MMM-YYYY] |
| Chief Information Security Officer (CISO) | [Full Name] | __________________ | [DD-MMM-YYYY] |
| Chief Risk Officer | [Full Name] | __________________ | [DD-MMM-YYYY] |
| Chief Executive Officer | [Full Name] | __________________ | [DD-MMM-YYYY] |

---

## 11. References

| Reference | Document / Clause | Relevance to This Register |
|---|---|---|
| Cyber Security Act 2024 (Act 854), **Section 22** | Requirements for cyber security audits of CII and designated entities | Mandates conduct of cyber security audits and recording of findings |
| Cyber Security Act 2024 (Act 854), **Section 23** | Submission of audit reports and rectification obligations | Requires documented remediation tracking and submission of evidence to NACSA |
| NACSA CII Designation Order [Reference] | CII sector-specific requirements | Applicable sector obligations for [Organization Name] as a designated CII entity |
| Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document, **Clause 10 (Cyber Risk Management)** | Cyber security risk management requirements for financial institutions | Aligns audit finding management with BNM regulatory expectations |
| Personal Data Protection Act 2010 (Act 709) | Data protection obligations | Applicable to findings involving personal data exposure or processing breaches |
| ISO/IEC 27001:2022, **Clause 9.2 (Internal Audit)** | Internal audit requirements | International best-practice framework for audit finding management |
| ISO/IEC 27001:2022, **Clause 10.1 (Nonconformity and Corrective Action)** | Corrective action and closure requirements | Evidence and closure standards |
| [Organization Name] Information Security Policy | [Document ID] | Overarching policy governing information security controls and audit obligations |
| [Organization Name] Risk Management Framework | [Document ID] | Severity rating and risk acceptance methodology |
| [Organization Name] Records Management Policy | [Document ID] | Evidence retention requirements and archival standards |

---

## Appendices

### Appendix A — Finding ID Allocation Log

*Maintain a sequential log of all Finding IDs allocated to ensure uniqueness and prevent duplication across audit engagements.*

| Sequence Number | Finding ID | Allocated On | Allocated By | Audit Engagement |
|---|---|---|---|---|
| 001 | [ORG]-AF-[YYYY]-[CODE]-001 | [DD-MMM-YYYY] | [Name] | [Audit Name] |
| | | | | |

---

### Appendix B — Audit Engagement Reference Index

*Cross-reference index linking each audit engagement to its findings in this register.*

| Audit Engagement Reference | Audit Name | Audit Period | Total Findings | Critical | High | Medium | Low | Informational |
|---|---|---|---|---|---|---|---|---|
| [Audit Ref No.] | [Engagement Name] | [Start] – [End] | [n] | [n] | [n] | [n] | [n] | [n] |
| | | | | | | | | |

---

### Appendix C — Risk Acceptance Register

*Findings where residual risk has been formally accepted must be recorded here with documented authority. Risk acceptance does not constitute finding closure — the finding remains in the register with status ACCEPTED.*

| Finding ID | Risk Acceptance Rationale | Accepted By | Acceptance Authority | Acceptance Date | Review Date | Board Notification Date |
|---|---|---|---|---|---|---|
| [Finding ID] | [Detailed rationale including why remediation is not feasible or cost-justified] | [Name, Role] | [Risk Committee / Board / CEO per delegated authority matrix] | [DD-MMM-YYYY] | [DD-MMM-YYYY] | [DD-MMM-YYYY] |
| | | | | | | |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| Act 854 | Cyber Security Act 2024, the primary legislation governing cyber security obligations for CII owners and designated entities in Malaysia |
| CII | Critical Information Infrastructure — infrastructure designated under Act 854 as critical to national security, public health, safety, or the economy |
| NACSA | National Cyber Security Agency — the competent authority under Act 854 responsible for overseeing CII protection and cyber security regulation in Malaysia |
| CISO | Chief Information Security Officer |
| Finding | A documented gap, weakness, or non-conformity identified during a cyber security audit or assessment |
| Remediation | The corrective action taken to address a finding and reduce the associated risk to an acceptable level |
| Closure | The confirmed and independently verified completion of remediation, supported by documented evidence |
| Risk Acceptance | A formal management decision to accept residual risk without full remediation, subject to appropriate authority approval |
| Severity | A rating assigned to each finding reflecting the potential impact and exploitability of the identified gap |

---

### Appendix E — Document Control and Retention

| Attribute | Detail |
|---|---|
| **Document Owner** | Head of Internal Audit / CISO |
| **Document Custodian** | [Name, Role] |
| **Storage Location** | [Document Management System path / SharePoint / GRC Platform] |
| **Access Control** | Confidential — restricted to Internal Audit, CISO Office, Risk & Compliance, and Board Risk Committee |
| **Retention Period** | Minimum [7] years from date of finding creation, or as prescribed by NACSA / BNM, whichever is longer |
| **Disposal Method** | Secure deletion in accordance with [Organization Name] Data Disposal Policy |
| **Review Frequency** | Monthly (operational review); Annual (template and process review) |
| **Distribution List** | Head of Internal Audit, CISO, CRO, Board Risk Committee Secretary |

---

*This document is classified **Confidential**. It must not be reproduced, distributed, or disclosed outside of [Organization Name] without the written authorisation of the Chief Information Security Officer. In the event of a regulatory examination by NACSA or Bank Negara Malaysia, this register must be produced upon request in accordance with Act 854 and applicable BNM guidelines.*

---

**End of Document — [Organization Name] Audit Findings Register v1.0**