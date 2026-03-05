# Change Management Log

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Change Manager |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

*This log records all changes approved and implemented on National Critical Information Infrastructure (NCII) systems in accordance with the Cyber Security Act 2024 (Act 854), Section 18. It provides a continuous, auditable trail of all change activity affecting NCII systems, supporting accountability, traceability, and regulatory compliance.*

This Change Management Log is maintained by [Organization Name] to document the full lifecycle of every change request — from initiation and approval through implementation, verification, and where applicable, rollback — affecting designated NCII systems under the organization's stewardship.

### 1.2 Scope

*Describe which systems, environments, and organizational units are covered by this log.*

This log applies to:

- All NCII systems operated or managed by [Organization Name], including:
  - [System / Application Name 1]
  - [System / Application Name 2]
  - [System / Application Name 3]
- All change types: standard, normal, emergency, and major changes
- All environments: production, staging, disaster recovery (DR), and any system with a direct dependency on NCII assets
- All personnel initiating, approving, implementing, or verifying changes to in-scope systems

**Out of Scope:** [List any explicitly excluded systems, environments, or change categories, e.g., development sandboxes, non-NCII test environments.]

### 1.3 Regulatory Basis

| Regulation | Clause / Section | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities must implement and maintain a change management process with documented records |
| [Internal Policy Reference] | [Clause] | [Internal obligation] |
| [BNM / PDPA / Other Reference, if applicable] | [Clause] | [Obligation] |

---

## 2. Change Request Details

*Record the full details of each change request at the point of submission. Every row in the log table below represents one discrete change request. Assign a unique Change Request ID for cross-referencing with approval, implementation, and verification records.*

### 2.1 Change Request Register

| Field | Description |
|---|---|
| **Change Request ID** | Unique identifier, e.g., CR-[YYYY]-[NNNN] |
| **Change Title** | Short descriptive title of the change |
| **Change Type** | Standard / Normal / Emergency / Major |
| **Priority** | Critical / High / Medium / Low |
| **Requested By** | Full name and role of requester |
| **Date Submitted** | DD-MMM-YYYY |
| **Target System(s)** | Affected NCII system(s) and components |
| **Description of Change** | Detailed description of what is being changed and why |
| **Business / Security Justification** | Regulatory, operational, or security rationale |
| **Impact Assessment** | Assessed impact on availability, integrity, confidentiality, and business continuity |
| **Risk Rating** | High / Medium / Low — with brief rationale |
| **Dependencies** | Other systems, teams, or changes this request depends on |
| **Proposed Implementation Window** | Start date/time and end date/time |
| **Rollback Plan Reference** | Reference to rollback procedure (see Section 6) |
| **Supporting Documentation** | Links or references to design docs, test plans, vendor advisories |

#### 2.2 Change Request Log Table

| CR ID | Change Title | Type | Priority | Requested By | Date Submitted | Target System | Risk Rating | Proposed Window | Status |
|---|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | [Change Title] | [Type] | [Priority] | [Name / Role] | [DD-MMM-YYYY] | [System Name] | [High/Med/Low] | [DD-MMM-YYYY HH:MM – HH:MM] | [Pending / Approved / Implemented / Closed / Rolled Back] |
| CR-[YYYY]-0002 | | | | | | | | | |
| CR-[YYYY]-0003 | | | | | | | | | |

---

## 3. Approval Records

*All changes to NCII systems must be formally approved before implementation. Record the outcome of each Change Advisory Board (CAB) review or emergency approval. Approvals must be traceable to named individuals with authority. No change shall proceed without a documented approval decision.*

### 3.1 Approval Authority Matrix

| Change Type | Approval Authority | Quorum Required |
|---|---|---|
| Standard Change | Change Manager | 1 approver |
| Normal Change | Change Advisory Board (CAB) | Majority of CAB members |
| Major Change | CAB + [Senior Leadership Role, e.g., CISO / CTO] | Full CAB + named executive |
| Emergency Change | [Emergency Change Authority, e.g., On-call Manager + CISO] | 2 approvers minimum |

### 3.2 Approval Log

| CR ID | Change Title | CAB / Review Date | Approved By (Name & Role) | Decision | Conditions / Notes | Approval Reference |
|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | [Change Title] | [DD-MMM-YYYY] | [Name], [Role] | Approved / Rejected / Deferred | [Any conditions attached to approval] | [Meeting minutes ref / email ref] |
| CR-[YYYY]-0002 | | | | | | |
| CR-[YYYY]-0003 | | | | | | |

### 3.3 Emergency Change Approval Record

*For emergency changes where standard CAB review is not feasible, record the expedited approval details below. Post-implementation CAB review is mandatory within [X] business days.*

| CR ID | Emergency Justification | Approver 1 (Name / Role) | Approver 2 (Name / Role) | Approval Date/Time | Post-Impl. CAB Review Date | CAB Ratification Decision |
|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | [Justification for emergency classification] | [Name / Role] | [Name / Role] | [DD-MMM-YYYY HH:MM] | [DD-MMM-YYYY] | [Ratified / Not Ratified] |

---

## 4. Implementation Actions

*Record every action taken during the implementation of each approved change. This section provides a step-by-step audit trail of what was done, by whom, and when. Implementation must not deviate from the approved change plan without documented justification and re-approval where required.*

### 4.1 Implementation Log

| CR ID | Implementation Step | Action Taken | Performed By (Name / Role) | Date / Time (Start) | Date / Time (End) | Outcome | Notes / Deviations |
|---|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | Step 1 – Pre-change backup | [Description of action] | [Name / Role] | [DD-MMM-YYYY HH:MM] | [DD-MMM-YYYY HH:MM] | [Success / Failed / Partial] | [Any deviation from plan] |
| CR-[YYYY]-0001 | Step 2 – [Next step] | | | | | | |
| CR-[YYYY]-0001 | Step 3 – [Next step] | | | | | | |
| CR-[YYYY]-0002 | Step 1 | | | | | | |

### 4.2 Implementation Summary

| CR ID | Change Title | Implementation Start | Implementation End | Implemented By | Overall Status | Deviation from Plan (Y/N) | Deviation Reference |
|---|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | [Change Title] | [DD-MMM-YYYY HH:MM] | [DD-MMM-YYYY HH:MM] | [Name / Role] | [Successful / Failed / Partial] | [Y / N] | [Reference to deviation record, if applicable] |
| CR-[YYYY]-0002 | | | | | | | |

---

## 5. Verification Results

*Following implementation, all changes must be verified to confirm that the intended outcome was achieved, that no unintended impact has occurred, and that security controls remain effective. Record all verification activities, test outcomes, and sign-offs here.*

### 5.1 Verification Checklist

*Indicate whether each standard verification check was performed and passed for each change.*

| CR ID | Pre-change Backup Confirmed | Change Implemented as Approved | Functional Testing Passed | Security Control Validation Passed | Performance / Availability Check Passed | Stakeholder UAT Sign-off (if required) | Verified By (Name / Role) | Verification Date |
|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | [Y/N/N/A] | [Y/N] | [Y/N] | [Y/N] | [Y/N] | [Y/N/N/A] | [Name / Role] | [DD-MMM-YYYY] |
| CR-[YYYY]-0002 | | | | | | | | |

### 5.2 Verification Detail Log

| CR ID | Verification Activity | Method / Tool Used | Result | Evidence Reference | Performed By | Date |
|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | Functional smoke test | [Test script / manual / automated tool] | [Pass / Fail] | [Ticket / log file / screenshot ref] | [Name / Role] | [DD-MMM-YYYY] |
| CR-[YYYY]-0001 | Security scan post-change | [Scanner tool, e.g., Nessus, Qualys] | [Pass / Fail] | [Scan report reference] | [Name / Role] | [DD-MMM-YYYY] |
| CR-[YYYY]-0001 | Availability confirmation | [Monitoring tool / manual check] | [Pass / Fail] | [Dashboard / alert reference] | [Name / Role] | [DD-MMM-YYYY] |
| CR-[YYYY]-0002 | | | | | | |

### 5.3 Change Closure Record

| CR ID | Closure Decision | Closed By (Name / Role) | Closure Date | Lessons Learned Reference | Post-Implementation Review Required (Y/N) | PIR Date (if applicable) |
|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | [Closed Successfully / Closed – Issues Noted / Closed – PIR Required] | [Name / Role] | [DD-MMM-YYYY] | [Reference to lessons learned record] | [Y / N] | [DD-MMM-YYYY] |
| CR-[YYYY]-0002 | | | | | | |

---

## 6. Rollback Events

*Record all instances where a change was partially or fully reversed following implementation failure, unintended impact, or a decision by the Change Manager or approved authority. Every rollback must be documented, regardless of whether it was planned or unplanned.*

### 6.1 Rollback Log

| CR ID | Change Title | Rollback Type | Reason for Rollback | Rollback Decision By (Name / Role) | Rollback Start Date/Time | Rollback End Date/Time | Rollback Steps Taken | System State After Rollback | Verification of Restored State | Post-Rollback Review Required (Y/N) |
|---|---|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | [Change Title] | [Planned / Unplanned] | [Description of failure or impact triggering rollback] | [Name / Role] | [DD-MMM-YYYY HH:MM] | [DD-MMM-YYYY HH:MM] | [Brief description or reference to rollback runbook] | [Restored to previous state / Partially restored / Other] | [Pass / Fail] | [Y / N] |
| CR-[YYYY]-0002 | | | | | | | | | | |

### 6.2 Rollback Impact Assessment

| CR ID | Business Impact of Rollback | Security Impact of Rollback | Incident Ticket Raised (Y/N) | Incident Reference | Reported to NACSA (Y/N) | NACSA Report Reference |
|---|---|---|---|---|---|---|
| CR-[YYYY]-0001 | [Description of impact on business operations] | [Description of any security implications] | [Y / N] | [Incident ticket ID] | [Y / N] | [NACSA notification reference] |
| CR-[YYYY]-0002 | | | | | | |

### 6.3 Rollback Summary Statistics

*To be updated on a [monthly / quarterly] basis by the Change Manager for management reporting.*

| Period | Total Changes Implemented | Total Rollbacks | Rollback Rate (%) | Unplanned Rollbacks | Planned Rollbacks | Notes |
|---|---|---|---|---|---|---|
| [MMM-YYYY] | [n] | [n] | [n%] | [n] | [n] | |
| [MMM-YYYY] | | | | | | |

---

## 7. Retention

*This section defines the retention requirements for all change management log records in accordance with Act 854 and applicable internal policy.*

- **Minimum Retention Period:** 7 years from the date each change record is closed
- **Retention Medium:** [Electronic records system / Physical archive / Both — specify system or location]
- **Storage Location:** [Primary storage location, e.g., ITSM platform, document management system, secure archive]
- **Backup / Redundancy:** [Describe backup arrangements for log data, e.g., daily encrypted backup to [location]]
- **Disposal Authority:** Records shall not be disposed of before the mandatory retention period expires. Disposal requires written authorization from [Role, e.g., Change Manager and CISO] and must be documented in the Records Disposal Register.
- **Legal Hold:** Records subject to an active legal hold, regulatory investigation, or audit must not be disposed of, regardless of retention period status.

| Record Type | Retention Period | Start of Retention | Disposal Method | Authority |
|---|---|---|---|---|
| Change Request Records | 7 years minimum | Date of change closure | Secure deletion / physical destruction | [Authorized Role] |
| Approval Records | 7 years minimum | Date of change closure | Secure deletion / physical destruction | [Authorized Role] |
| Implementation Logs | 7 years minimum | Date of change closure | Secure deletion / physical destruction | [Authorized Role] |
| Verification Records | 7 years minimum | Date of change closure | Secure deletion / physical destruction | [Authorized Role] |
| Rollback Records | 7 years minimum | Date of rollback event closure | Secure deletion / physical destruction | [Authorized Role] |

---

## 8. Roles and Responsibilities

*This section defines accountability for change management log activities using a RACI framework. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Change Manager | CISO / Head of Cybersecurity | System / Asset Owner | Change Implementer | Change Advisory Board (CAB) | Internal Audit | NACSA (External) |
|---|---|---|---|---|---|---|---|
| Initiate change request | R | I | C | R | I | I | — |
| Conduct impact and risk assessment | R | C | C | C | C | — | — |
| Approve / reject change request | A | C | C | — | R | I | — |
| Approve emergency changes | A | R | C | — | I | I | — |
| Implement approved change | I | I | I | R | — | — | — |
| Verify change post-implementation | R | C | C | R | — | — | — |
| Authorize and execute rollback | A | C | C | R | I | I | — |
| Maintain and update this log | R | I | I | I | — | — | — |
| Periodic review of log completeness | A | C | — | — | — | R | — |
| Report to NACSA (if required) | I | R | I | — | — | — | I |
| Archive and manage record retention | R | A | — | — | — | I | — |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Role | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD-MMM-YYYY] | [Author Name] | [Role] | Initial release |
| | | | | |
| | | | | |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Change Manager | [Name] | ________________ | [DD-MMM-YYYY] |
| CISO / Head of Cybersecurity | [Name] | ________________ | [DD-MMM-YYYY] |
| Data Protection Officer | [Name] | ________________ | [DD-MMM-YYYY] |
| [Senior Leadership Approver, e.g., CTO / COO] | [Name] | ________________ | [DD-MMM-YYYY] |

---

## 10. References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), **Section 18** | Obligations on NCII entities regarding change management controls and record-keeping for designated systems |
| Cyber Security Act 2024 (Act 854), **Section 2** | Definitions of NCII and related terms |
| NACSA NCII Sector Security Guidelines (current edition) | Sector-specific operational guidance for NCII entities |
| [Organization Name] — Cybersecurity Policy | [Internal policy reference] |
| [Organization Name] — IT Change Management Procedure | [Internal procedure reference] |
| [Organization Name] — Records Management Policy | [Internal policy reference] |
| [BNM / PDPA / JPDP reference, if applicable] | [Applicable clause and obligation] |
| ISO/IEC 27001:2022, Annex A.8.32 | Change management controls (where ISO 27001 is adopted as a reference framework) |
| ITIL 4 — Change Enablement Practice | Good practice reference for change management processes |

---

## Appendices

### Appendix A — Change Type Definitions

*Define the change categories used in this log to ensure consistent classification across the organization.*

| Change Type | Definition | Examples | Typical Approval Pathway |
|---|---|---|---|
| **Standard Change** | A pre-approved, low-risk, routine change following a documented procedure | Password resets, scheduled patching within approved windows | Change Manager approval; CAB notification |
| **Normal Change** | A planned change requiring full CAB review and approval | Infrastructure upgrades, application deployments, firewall rule modifications | Full CAB review cycle |
| **Emergency Change** | An urgent change required to restore service or mitigate an active security incident | Critical patch for actively exploited vulnerability, emergency configuration fix | Emergency Change Authority; post-implementation CAB ratification |
| **Major Change** | A significant change with broad impact on NCII systems, business continuity, or security posture | NCII system migrations, major architecture changes | CAB + senior leadership approval |

### Appendix B — Change Risk Rating Criteria

*Guidance for assessing the risk rating of a change request at submission.*

| Risk Rating | Criteria |
|---|---|
| **High** | Change affects core NCII system functions; potential for significant availability, integrity, or confidentiality impact; limited reversibility; insufficient test evidence available |
| **Medium** | Change affects non-core functions or isolated components; moderate impact if failed; tested in staging environment; rollback plan available |
| **Low** | Change is pre-approved standard type; minimal system impact; fully tested; immediate rollback available; no expected downtime |

### Appendix C — Log Entry Completeness Checklist

*Use this checklist when reviewing a change record for completeness prior to closure. All mandatory fields must be completed before a change record is considered audit-ready.*

- [ ] Change Request ID assigned
- [ ] Change type and priority recorded
- [ ] Impact and risk assessment completed
- [ ] Formal approval documented with named approver(s) and date
- [ ] Implementation steps logged with timestamps and responsible individuals
- [ ] Verification results recorded with evidence references
- [ ] Rollback record completed (if applicable)
- [ ] Closure decision recorded with named authority and date
- [ ] Record stored in designated system with correct retention metadata

### Appendix D — NACSA Notification Trigger Reference

*Record of change-related events that may trigger mandatory notification obligations to NACSA under Act 854.*

| Trigger Event | Act 854 Reference | Notification Threshold | Notified To | Date of Notification | NACSA Reference Number |
|---|---|---|---|---|---|
| [e.g., Change caused NCII system outage exceeding [X] hours] | [Section reference] | [Threshold criteria] | NACSA | [DD-MMM-YYYY] | [Ref number] |
| [e.g., Rollback resulted in security incident] | [Section reference] | | NACSA | | |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the principal legislation governing cybersecurity of NCII in Malaysia |
| **CAB** | Change Advisory Board — the governance body responsible for reviewing and approving normal and major changes |
| **Change Manager** | The designated individual accountable for the change management process and this log |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **NCII** | National Critical Information Infrastructure — systems designated under Act 854 whose disruption would have a serious impact on national security, economy, public safety, or public health |
| **PIR** | Post-Implementation Review — a structured review conducted after a significant or failed change to capture lessons learned |
| **Rollback** | The process of reverting a system to its pre-change state following implementation failure or unintended impact |

---

*This document is classified **Confidential** and is intended solely for use by [Organization Name] personnel with a legitimate need to access it. Unauthorized disclosure, reproduction, or distribution is prohibited. This template must be tailored to [Organization Name]'s specific systems, organizational structure, and regulatory obligations before use.*

*Document Owner: Change Manager | Maintained by: [Organization Name] Cybersecurity / IT Governance Function*