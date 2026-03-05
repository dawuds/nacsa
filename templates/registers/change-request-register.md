# Change Request Register

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

This Change Request Register serves as the authoritative log of all changes affecting National Critical Information Infrastructure (NCII) systems operated or maintained by [Organization Name]. It documents the full lifecycle of each change — from initial request through risk and security assessment, approval, implementation, and post-change verification — to ensure that changes do not compromise the confidentiality, integrity, or availability of NCII systems.

This register directly supports compliance with **Section 18 of the Cyber Security Act 2024 (Act 854)**, which requires NCII sector leads and NCII entities to maintain robust change management controls to protect the security and resilience of designated infrastructure.

### 1.2 Scope

*Define the boundary of systems, services, and infrastructure covered by this register. Specify which NCII designations apply and any exclusions.*

This register applies to:

- All information systems, applications, and infrastructure components designated as NCII under [Organization Name]'s NCII designation
- Changes initiated by internal teams, third-party vendors, or managed service providers affecting NCII systems
- Emergency, standard, and normal change categories as defined in [Organization Name]'s Change Management Policy
- All environments including production, pre-production staging, and disaster recovery systems connected to NCII assets

**Out of Scope:**

- Changes to non-NCII systems with no integration or dependency on designated NCII assets
- [Any additional exclusions specific to the organization]

### 1.3 Regulatory Authority

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), s18 | Duties of NCII entities to implement and maintain cybersecurity measures |
| [NACSA NCII Sector Security Plan Requirements] | Sector-specific technical and procedural controls |
| [Organization Name] NCII Designation Certificate | [Certificate Reference Number] |

---

## 2. Change Request Register

*This section constitutes the live operational log. Each row represents a single change request entry. Maintain this register continuously; all fields are mandatory unless marked optional. Entries must be made at the time of each stage transition.*

### 2.1 Active and Completed Change Log

| Change ID | Change Title | Requestor | Date Submitted | Change Type | Priority | System / Asset Affected | NCII Classification | Security Impact Rating | CAB Approval Status | Approved By | Approved Date | Scheduled Implementation Date | Actual Implementation Date | Implementer | Post-Change Verification Status | Verification Completed By | Verification Date | Change Status | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | [Brief title of change] | [Name / Team] | [DD/MM/YYYY] | [Standard / Normal / Emergency] | [Critical / High / Medium / Low] | [System or asset name] | [NCII / Non-NCII] | [High / Medium / Low / None] | [Approved / Rejected / Pending / Deferred] | [Name, Role] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name / Team] | [Pass / Fail / Pending] | [Name] | [DD/MM/YYYY] | [Open / In Progress / Completed / Rolled Back / Cancelled] | [Free text] |
| CR-[YYYY]-[NNNN] | | | | | | | | | | | | | | | | | | | |

---

## 3. Change Identification and Description

*Record sufficient detail to uniquely identify each change and allow an independent reviewer to understand its nature and business justification without additional context.*

### 3.1 Change Identification Fields

| Field | Guidance | Example / Format |
|---|---|---|
| **Change ID** | Unique sequential identifier assigned at intake | CR-2025-0001 |
| **Change Title** | Short descriptive title (max 80 characters) | Patch MS-SQL Server 2019 to CU27 |
| **Change Description** | Narrative description of what is being changed and why | [Full description] |
| **Business Justification** | Reason for the change (security patch, new requirement, remediation, etc.) | [Justification text] |
| **Requestor Name** | Full name of the individual submitting the request | [Name] |
| **Requestor Department** | Organizational unit of the requestor | [Department] |
| **Date Submitted** | Date the change request was formally submitted | DD/MM/YYYY |
| **Target System(s)** | All systems, services, or assets affected | [System names] |
| **NCII Asset Reference** | Reference to the NCII Asset Register entry | NCII-ASSET-[NNN] |

### 3.2 Detailed Change Description

*For each change, attach or reference the full Change Request Form. The summary below should be captured directly in this register.*

- **Current State:** [Description of the system or configuration before the change]
- **Proposed State:** [Description of the system or configuration after the change]
- **Technical Steps Summary:** [High-level implementation steps]
- **Rollback Plan Reference:** [Reference to rollback procedure document or section]
- **Dependencies:** [Other systems, services, or changes this change depends upon]
- **Estimated Downtime:** [Duration and maintenance window, if applicable]

---

## 4. Change Type and Priority

*Classify each change according to type and priority to determine the appropriate approval pathway and urgency of security assessment.*

### 4.1 Change Type Definitions

| Change Type | Definition | Approval Pathway |
|---|---|---|
| **Standard** | Pre-approved, low-risk, routine change following a tested procedure | Pre-approved by CAB; no individual review required |
| **Normal** | Non-routine change requiring full assessment and CAB approval | Full CAB review; security impact assessment mandatory |
| **Emergency** | Urgent change required to restore service or prevent imminent security breach | Emergency CAB (eCAB); retrospective full documentation within 24 hours |

### 4.2 Priority Classification

| Priority | Definition | Maximum Response Time | Example |
|---|---|---|---|
| **Critical** | Active or imminent threat to NCII availability, integrity, or confidentiality | Immediate / same day | Zero-day vulnerability exploitation in progress |
| **High** | Significant risk if not addressed within short timeframe | Within 3 business days | Known exploited vulnerability with public PoC |
| **Medium** | Moderate risk; planned maintenance window acceptable | Within 14 calendar days | Vendor security patch (non-critical CVE) |
| **Low** | Minimal risk; scheduled at next available maintenance window | Within 30 calendar days | Configuration baseline alignment |

### 4.3 Change Classification Record

| Change ID | Change Type | Priority | Justification for Classification | Classified By | Date Classified |
|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | [Standard / Normal / Emergency] | [Critical / High / Medium / Low] | [Reason for assigned type and priority] | [Name, Role] | [DD/MM/YYYY] |

---

## 5. Security Impact Assessment

*A Security Impact Assessment (SIA) is mandatory for all Normal and Emergency changes to NCII systems. Standard changes must reference the pre-approved SIA conducted at the time of standardization. The SIA must be completed before change approval is sought.*

### 5.1 Security Impact Assessment Summary

| Change ID | SIA Reference | SIA Conducted By | Date of SIA | Overall Risk Rating | Key Risks Identified | Mitigations Proposed | Residual Risk | SIA Approved By | SIA Approval Date |
|---|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | SIA-[YYYY]-[NNNN] | [Name, Role] | [DD/MM/YYYY] | [High / Medium / Low] | [Summary of identified risks] | [Summary of proposed mitigations] | [High / Medium / Low / Accepted] | [Name, Role] | [DD/MM/YYYY] |

### 5.2 Security Impact Assessment Detail Fields

*Complete the following for each Normal or Emergency change. Reference the full SIA document where detail exceeds register scope.*

- **Confidentiality Impact:** [High / Medium / Low / None] — [Brief explanation]
- **Integrity Impact:** [High / Medium / Low / None] — [Brief explanation]
- **Availability Impact:** [High / Medium / Low / None] — [Brief explanation]
- **Affected Data Classifications:** [Public / Internal / Confidential / Restricted / Regulated]
- **Third-Party or Supply Chain Risk:** [Yes / No] — [If yes, identify vendor and risk]
- **Compliance Implications:** [Any regulatory or policy implications, e.g., triggers PDPA notification, affects BNM RMiT controls]
- **Security Controls Required:** [New or modified controls needed as a condition of approval]
- **Full SIA Document Reference:** [Link or document reference to detailed SIA]

### 5.3 Threat and Vulnerability Considerations

*Document any known threats, CVEs, or vulnerability scan findings that are directly relevant to this change.*

| Threat / Vulnerability | CVE / Reference | Severity | Relevance to Change | Mitigation Status |
|---|---|---|---|---|
| [Description] | [CVE-YYYY-NNNNN] | [Critical / High / Medium / Low] | [How this threat relates to the proposed change] | [Mitigated / Accepted / Transferred / Avoided] |

---

## 6. Approval Status

*All changes to NCII systems require documented approval prior to implementation, except Emergency changes which require retrospective approval within 24 hours of implementation. No change may proceed without the required approval level.*

### 6.1 Approval Authority Matrix

| Change Type | Priority | Minimum Approval Authority | Secondary Approval Required |
|---|---|---|---|
| Standard | Any | Change Manager | No |
| Normal | Low / Medium | Change Advisory Board (CAB) | No |
| Normal | High | CAB + CISO | No |
| Normal | Critical | CAB + CISO + CEO / Executive Sponsor | Yes |
| Emergency | Any | eCAB (minimum: Change Manager + CISO) | Retrospective CAB within 24 hours |

### 6.2 Change Approval Record

| Change ID | CAB Meeting Reference | Approval Decision | Decision Date | Approved By (Name) | Role | Conditions of Approval | Rejection / Deferral Reason | Decision Communicated To | Date Communicated |
|---|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | CAB-[YYYY]-[NNN] | [Approved / Rejected / Deferred / Approved with Conditions] | [DD/MM/YYYY] | [Full name] | [Role] | [Any conditions placed on approval] | [If rejected or deferred, reason] | [Requestor name] | [DD/MM/YYYY] |

### 6.3 Emergency Change Retrospective Approval

*Emergency changes must have retrospective approval documented here within 24 hours of implementation.*

| Change ID | Emergency Declared By | Emergency Justification | eCAB Members Present | Implementation Commenced | Retrospective CAB Reference | Retrospective Approval Date | Lessons Learned Reference |
|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | [Name, Role] | [Reason emergency was declared] | [Names and roles] | [DD/MM/YYYY HH:MM] | CAB-[YYYY]-[NNN] | [DD/MM/YYYY] | [LL-YYYY-NNN or N/A] |

---

## 7. Implementation Date

*Record all scheduling, implementation, and completion details. Where changes span multiple systems or phases, record each phase separately.*

### 7.1 Implementation Schedule

| Change ID | Planned Maintenance Window Start | Planned Maintenance Window End | Actual Start Date/Time | Actual End Date/Time | Implemented By (Name) | Implementing Team | Implementation Environment | Implementation Outcome | Deviation from Plan | Deviation Reason |
|---|---|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [Name] | [Team / Vendor] | [Production / Staging / DR] | [Successful / Partially Successful / Rolled Back / Failed] | [Yes / No] | [If yes, describe] |

### 7.2 Rollback Record

*Complete only where a rollback was executed.*

| Change ID | Rollback Decision By | Rollback Reason | Rollback Start | Rollback Completed | Rollback Outcome | System Restored To State As At | Incident Reference |
|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | [Name, Role] | [Reason rollback was triggered] | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [Successful / Partial / Failed] | [DD/MM/YYYY] | [INC-YYYY-NNN or N/A] |

---

## 8. Post-Change Verification

*Post-change verification is mandatory for all Normal and Emergency changes to NCII systems. Verification must confirm that the change was implemented as approved, that the system is functioning correctly, and that no unintended security impacts have resulted.*

### 8.1 Post-Change Verification Summary

| Change ID | Verification Type | Verification Conducted By | Verification Date | Verification Result | Issues Identified | Issue Resolution Status | Sign-Off By | Sign-Off Date |
|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | [Functional / Security Scan / Penetration Test / Smoke Test / Full UAT] | [Name, Role] | [DD/MM/YYYY] | [Pass / Fail / Pass with Issues] | [Description of any issues found, or None] | [Resolved / In Progress / Accepted Risk / Raised as Incident] | [Change Manager or delegate] | [DD/MM/YYYY] |

### 8.2 Verification Checklist

*For each change, confirm the following verification activities were completed. Tick or record N/A where an item is not applicable.*

| Verification Activity | Required For | Completed | Completed By | Date | Result | Evidence Reference |
|---|---|---|---|---|---|---|
| Service functionality confirmed (smoke test) | All changes | [Yes / No / N/A] | [Name] | [DD/MM/YYYY] | [Pass / Fail] | [Test report reference] |
| No unintended service degradation observed | All changes | [Yes / No / N/A] | [Name] | [DD/MM/YYYY] | [Pass / Fail] | [Monitoring dashboard reference] |
| Security configuration verified against baseline | Normal / Emergency | [Yes / No / N/A] | [Name] | [DD/MM/YYYY] | [Pass / Fail] | [Scan report reference] |
| Vulnerability scan conducted post-change | Normal (High/Critical) / Emergency | [Yes / No / N/A] | [Name] | [DD/MM/YYYY] | [Pass / Fail] | [Scan report reference] |
| NCII Asset Register updated to reflect change | All changes to registered assets | [Yes / No / N/A] | [Name] | [DD/MM/YYYY] | [Done / Pending] | [Asset Register ref] |
| SIEM / monitoring rules reviewed and updated | Where detection logic is affected | [Yes / No / N/A] | [Name] | [DD/MM/YYYY] | [Done / N/A] | [SIEM ticket reference] |
| Configuration Management Database (CMDB) updated | All changes | [Yes / No / N/A] | [Name] | [DD/MM/YYYY] | [Done / Pending] | [CMDB record reference] |
| Business owner sign-off obtained | Normal / Emergency | [Yes / No / N/A] | [Name] | [DD/MM/YYYY] | [Signed / Pending] | [Sign-off reference] |

### 8.3 Post-Change Security Scan Results

*Where a vulnerability or configuration scan was performed post-change, summarize findings here.*

| Change ID | Scan Tool Used | Scan Date | Scan Scope | Findings Count (Critical) | Findings Count (High) | Findings Count (Medium) | Findings Count (Low) | Compared to Pre-Change Baseline | New Vulnerabilities Introduced | Remediation Required | Remediation Ticket Reference |
|---|---|---|---|---|---|---|---|---|---|---|---|
| CR-[YYYY]-[NNNN] | [Tool name and version] | [DD/MM/YYYY] | [System / scope] | [N] | [N] | [N] | [N] | [Improved / Same / Degraded] | [Yes / No] | [Yes / No] | [Ticket reference or N/A] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for the change management process as it relates to this register. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Change Manager | CISO / Deputy CISO | Change Requestor | Change Advisory Board (CAB) | Security Operations | System / Asset Owner | IT Operations | Vendor / Third Party | Executive Sponsor |
|---|---|---|---|---|---|---|---|---|---|
| Submit Change Request | C | I | **R** | I | I | C | I | R (if vendor-initiated) | I |
| Conduct Security Impact Assessment | C | **A** | I | C | **R** | C | C | C (if applicable) | I |
| Classify Change Type and Priority | **A** | C | I | C | C | I | I | I | I |
| Schedule CAB Review | **R/A** | I | I | I | I | I | I | I | I |
| CAB Approval Decision | C | C | I | **A/R** | C | C | I | I | I (Critical only) |
| Authorize Emergency Change | **R** | **R** | I | **A** (retrospective) | I | C | I | I | I |
| Implement Change | I | I | I | I | C | I | **R** | R (if vendor) | I |
| Conduct Post-Change Verification | **A** | C | I | I | **R** | **R** | C | C (if applicable) | I |
| Update NCII Asset Register and CMDB | **A** | I | I | I | I | **R** | **R** | I | I |
| Close Change Record | **R/A** | I | I | I | I | I | I | I | I |
| Report Change Metrics to Management | **R** | C | I | I | I | I | I | I | **A** |
| Review and Audit Change Register | C | **A** | I | I | I | I | I | I | I |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Role] | [Reviewer Name, Role] | Initial release of Change Request Register template |
| [1.1] | [DD/MM/YYYY] | [Author Name, Role] | [Reviewer Name, Role] | [Description of changes] |

### 10.2 Document Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Change Manager | [Full Name] | [Signature] | [DD/MM/YYYY] |
| Chief Information Security Officer | [Full Name] | [Signature] | [DD/MM/YYYY] |
| Head of IT / CTO | [Full Name] | [Signature] | [DD/MM/YYYY] |
| NCII Entity Representative | [Full Name] | [Signature] | [DD/MM/YYYY] |
| Executive Sponsor | [Full Name] | [Signature] | [DD/MM/YYYY] |

### 10.3 Register Review Schedule

*This register is maintained continuously. Periodic management reviews are conducted as follows:*

| Review Type | Frequency | Conducted By | Reviewed By | Purpose |
|---|---|---|---|---|
| Operational Review | Weekly | Change Manager | CAB Chair | Review open and in-progress changes; identify blockers |
| Management Review | Monthly | Change Manager | CISO | Review change KPIs, overdue items, and emergency change ratio |
| Compliance Audit Review | Annually (minimum) | Internal Audit | CISO / Executive Sponsor | Confirm register completeness and regulatory compliance |
| Post-Incident Review | Ad hoc (following any change-related incident) | Change Manager + CISO | Executive Sponsor | Root cause analysis and lessons learned |

---

## 11. References

*The following regulatory instruments, standards, and internal policies govern the requirements captured in this register.*

| Reference | Title | Clause / Section | Relevance |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | Section 18 | Duties of NCII entities to implement cybersecurity measures including change controls |
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | Section 26 | Compliance obligations and directions from NACSA |
| [NACSA NCII Sector Security Framework] | [Full title of applicable sector security framework] | [Relevant section(s)] | Sector-specific technical requirements for change management |
| [Organization Name] Cybersecurity Policy | [Internal document reference] | [Relevant section] | Internal policy governing cybersecurity controls |
| [Organization Name] Change Management Policy | [Internal document reference] | All | Defines change types, approval authorities, and procedures |
| [Organization Name] NCII Asset Register | [Internal document reference] | All | Master list of designated NCII assets subject to this register |
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A, Control 8.32 | Change management controls |
| NIST SP 800-53 Rev. 5 | Security and Privacy Controls for Information Systems | CM-3, CM-4 | Configuration change control and security impact analysis |

---

## Appendices

### Appendix A — Change Request Form Template

*Attach or reference the standard Change Request Form used by [Organization Name]. This form must be completed and submitted for all Normal and Emergency changes before the change is entered into this register.*

- **Document Reference:** [CR-FORM-001 or equivalent]
- **Location:** [Document management system path or URL]
- **Current Version:** [Version number]

### Appendix B — Security Impact Assessment (SIA) Template

*Attach or reference the standard Security Impact Assessment template. Completion of the SIA is a prerequisite for CAB submission for all Normal and Emergency changes to NCII systems.*

- **Document Reference:** [SIA-FORM-001 or equivalent]
- **Location:** [Document management system path or URL]
- **Current Version:** [Version number]

### Appendix C — Change Advisory Board (CAB) Terms of Reference

*Attach or reference the CAB Terms of Reference, which defines membership, quorum, meeting frequency, voting procedures, and escalation thresholds.*

- **Document Reference:** [CAB-TOR-001 or equivalent]
- **Location:** [Document management system path or URL]
- **Current Version:** [Version number]

### Appendix D — Emergency Change Authorization Procedure

*Attach or reference the Emergency Change Authorization Procedure, including the criteria for declaring an emergency change, eCAB contact list, and retrospective approval requirements.*

- **Document Reference:** [ECAB-PROC-001 or equivalent]
- **Location:** [Document management system path or URL]
- **Current Version:** [Version number]

### Appendix E — Change Management KPI Dashboard

*Attach or reference the monthly Change Management KPI report. Key metrics tracked include:*

| KPI | Definition | Target | Reporting Frequency |
|---|---|---|---|
| Total Changes Submitted | Count of all change requests in period | Informational | Monthly |
| Change Success Rate | % of changes implemented without rollback or incident | ≥ 95% | Monthly |
| Emergency Change Ratio | Emergency changes as % of total changes | ≤ 5% | Monthly |
| Unauthorized Changes | Changes implemented without prior approval | 0 | Monthly |
| Average SIA Completion Time | Days between submission and SIA sign-off | ≤ 3 business days | Monthly |
| Post-Change Verification Completion Rate | % of changes with completed verification record | 100% | Monthly |
| Overdue Change Records | Changes without closure within SLA | 0 | Weekly |

### Appendix F — Glossary

| Term | Definition |
|---|---|
| CAB | Change Advisory Board — body responsible for evaluating and approving Normal changes |
| eCAB | Emergency Change Advisory Board — subset of CAB convened for Emergency change authorization |
| NCII | National Critical Information Infrastructure — as designated under the Cyber Security Act 2024 |
| NACSA | National Cyber Security Agency — the competent authority under Act 854 |
| SIA | Security Impact Assessment — mandatory assessment of security risks arising from a proposed change |
| CMDB | Configuration Management Database — authoritative record of IT assets and their relationships |
| Rollback | Reverting a system to its prior state following a failed or harmful change implementation |
| Change Freeze | A period during which no changes (or only emergency changes) are permitted, typically during critical business periods |

### Appendix G — Related Documents

| Document Title | Document ID | Owner | Location |
|---|---|---|---|
| Cybersecurity Policy | [DOC-ID] | CISO | [Location] |
| NCII Asset Register | [DOC-ID] | Asset Owner / Change Manager | [Location] |
| Incident Response Plan | [DOC-ID] | CISO | [Location] |
| Business Continuity Plan | [DOC-ID] | BCM Manager | [Location] |
| Vulnerability Management Policy | [DOC-ID] | Security Operations | [Location] |
| Patch Management Procedure | [DOC-ID] | IT Operations | [Location] |
| Risk Register | [DOC-ID] | Risk Manager | [Location] |

---

*This document is classified **Confidential**. Unauthorized disclosure is prohibited. All completed entries constitute regulatory records under the Cyber Security Act 2024 (Act 854) and must be retained for a minimum of [5 / 7] years in accordance with [Organization Name]'s Records Retention Policy and NACSA directions.*

*Document Owner: Change Manager | [Organization Name] | [Organization Address]*