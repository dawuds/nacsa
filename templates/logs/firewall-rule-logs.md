# Firewall Rule Change Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Security |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]

---

## 1. Purpose and Scope

### 1.1 Purpose

This document serves as the official log register for all changes made to firewall rules governing network zones classified as National Critical Information Infrastructure (NCII) assets under the Cyber Security Act 2024 (Act 854). It provides a structured, auditable record to demonstrate compliance with mandatory security event logging obligations, specifically as required under **Section 18** of Act 854, which mandates that NCII sector leads maintain comprehensive records of cybersecurity measures, incidents, and control changes.

Each entry in this log constitutes a formal record of a firewall rule change event, capturing the full lifecycle of the change request from initiation through approval to implementation and post-implementation review.

### 1.2 Scope

*This section defines the boundaries of coverage for this log. Identify all firewall systems, network segments, and organisational units subject to this log.*

This log applies to:

- All perimeter, internal, and host-based firewalls protecting NCII-designated network zones operated by **[Organization Name]**
- All rule changes including creation, modification, disabling, and deletion of firewall rules
- All environments: production, staging, and disaster recovery (DR) — where these environments intersect with NCII-classified assets
- Changes initiated by internal staff, third-party vendors, and managed security service providers (MSSPs) acting on behalf of **[Organization Name]**

**Out of Scope:**
- Firewall rule changes in non-NCII classified development or test environments (unless explicitly designated otherwise)
- Temporary rule overrides lasting fewer than [X] minutes handled under the emergency change procedure (which are nevertheless subject to retrospective logging within 24 hours)

---

## 2. Regulatory and Policy References

*List all regulatory instruments, internal policies, and standards that mandate or govern the maintenance of this log.*

| Reference | Instrument | Relevant Clause / Section |
|---|---|---|
| Cyber Security Act 2024 | Act 854 — NACSA | Section 18 (Duties of NCII entity to maintain records of cybersecurity measures) |
| [Internal Policy Reference] | [Organization Name] Information Security Policy | [Clause Reference] |
| [Internal Policy Reference] | [Organization Name] Change Management Policy | [Clause Reference] |
| [Internal Standard Reference] | [Organization Name] Network Security Standard | [Clause Reference] |
| [Industry Standard] | ISO/IEC 27001:2022 | Annex A 8.20 — Networks security; Annex A 8.22 — Segregation in networks |
| [Industry Standard] | NIST SP 800-41 Rev. 1 | Guidelines on Firewalls and Firewall Policy |

---

## 3. Definitions and Abbreviations

*Define key terms used throughout this log to ensure consistent interpretation by reviewers and auditors.*

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, enacted by the Parliament of Malaysia |
| **NACSA** | National Cyber Security Agency — the designated national cyber security authority under Act 854 |
| **NCII** | National Critical Information Infrastructure — as defined under Section 2 of Act 854 |
| **Firewall Rule** | A policy statement that specifies how a firewall should handle network traffic based on defined criteria (source, destination, port, protocol) |
| **Rule Change** | Any addition, modification, deletion, or disabling of a firewall rule |
| **Requestor** | The individual or team formally requesting the firewall rule change |
| **Approver** | The authorised individual who reviews and approves the rule change prior to implementation |
| **Implementer** | The network security engineer who applies the approved change to the firewall system |
| **CAB** | Change Advisory Board — the governance body responsible for reviewing and approving significant changes |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **CR** | Change Request — the formal record in the change management system |
| **RTO** | Recovery Time Objective |
| **ACL** | Access Control List |

---

## 4. Firewall Rule Change Log Register

*This is the primary data capture section. Each row in this register represents a single firewall rule change event. Log entries must be created at the time of each change and must not be altered retrospectively without a formal amendment process. All fields are mandatory unless marked optional.*

### 4.1 Log Entry Fields Reference

The following fields are required for each log entry. Detailed guidance for each field is provided below the register table.

| Field | Mandatory | Format |
|---|---|---|
| Log Entry ID | Yes | [ORG]-FW-LOG-[YYYY]-[NNNN] |
| Change Request (CR) Reference | Yes | [CR System Reference Number] |
| Firewall System / Device | Yes | Hostname or asset ID |
| Network Zone Affected | Yes | NCII Zone designation |
| Change Type | Yes | Add / Modify / Delete / Disable |
| Rule ID / Name (Before) | Yes (if applicable) | As per firewall configuration |
| Rule ID / Name (After) | Yes (if applicable) | As per firewall configuration |
| Change Description | Yes | Plain language summary |
| Business Justification | Yes | Operational rationale |
| Requestor | Yes | Name, Role, Department |
| Approver | Yes | Name, Role |
| Implementer | Yes | Name, Role |
| Security Impact Assessment | Yes | Summary outcome |
| Effective Date and Time | Yes | DD/MM/YYYY HH:MM (MYT) |
| Rollback Plan Reference | Yes | Document or procedure reference |
| Post-Implementation Review Date | Yes | DD/MM/YYYY |
| Post-Implementation Review Outcome | Yes | Pass / Fail / Pending |
| Remarks | No | Free text |

### 4.2 Firewall Rule Change Register

*Complete one row per change event. For complex changes affecting multiple rules simultaneously, create a separate detailed entry in Section 4.3 and reference it here using the Log Entry ID.*

| Log Entry ID | CR Reference | Firewall System / Device | Network Zone | Change Type | Rule ID / Name | Requestor | Approver | Implementer | Effective Date & Time | PIR Date | PIR Outcome | Remarks |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [ORG]-FW-LOG-[YYYY]-0001 | [CR-XXXXXX] | [Hostname / Asset ID] | [NCII Zone Name] | [Add / Modify / Delete / Disable] | [Rule ID or Name] | [Name, Role] | [Name, Role] | [Name, Role] | [DD/MM/YYYY HH:MM MYT] | [DD/MM/YYYY] | [Pass / Fail / Pending] | [Optional remarks] |
| [ORG]-FW-LOG-[YYYY]-0002 | [CR-XXXXXX] | [Hostname / Asset ID] | [NCII Zone Name] | [Add / Modify / Delete / Disable] | [Rule ID or Name] | [Name, Role] | [Name, Role] | [Name, Role] | [DD/MM/YYYY HH:MM MYT] | [DD/MM/YYYY] | [Pass / Fail / Pending] | [Optional remarks] |
| [ORG]-FW-LOG-[YYYY]-0003 | [CR-XXXXXX] | [Hostname / Asset ID] | [NCII Zone Name] | [Add / Modify / Delete / Disable] | [Rule ID or Name] | [Name, Role] | [Name, Role] | [Name, Role] | [DD/MM/YYYY HH:MM MYT] | [DD/MM/YYYY] | [Pass / Fail / Pending] | [Optional remarks] |

---

## 5. Rule Change Details

*This section provides the full technical detail for each log entry. For each change recorded in Section 4.2, create a subsection using the corresponding Log Entry ID. This level of detail is required for audit purposes and to support forensic investigation if required.*

### 5.1 Change Detail Record — [ORG]-FW-LOG-[YYYY]-0001

#### 5.1.1 Change Identification

| Field | Value |
|---|---|
| **Log Entry ID** | [ORG]-FW-LOG-[YYYY]-0001 |
| **CR Reference** | [CR-XXXXXX] |
| **Change Title** | [Brief descriptive title of the change] |
| **Priority / Risk Rating** | [Standard / High / Critical] |
| **Change Category** | [Routine / Emergency / Security-Driven / Compliance-Driven] |

#### 5.1.2 Affected Firewall System

| Field | Value |
|---|---|
| **Device Hostname** | [Hostname] |
| **Device Asset ID** | [Asset ID as per CMDB] |
| **Firewall Platform / Vendor** | [e.g., Palo Alto Networks PAN-OS / Cisco ASA / Fortinet FortiGate] |
| **Firmware / OS Version** | [Version] |
| **Physical / Logical Location** | [Data Centre / Network Segment] |
| **NCII Zone(s) Affected** | [Zone Name and Classification] |
| **Associated NCII Sector** | [e.g., Financial Services / Energy / Telecommunications] |

#### 5.1.3 Business Justification

*Provide the operational or security rationale for this change. State the business need, the risk of not making the change, and the expected outcome.*

[Provide a clear statement of the business or security need driving this rule change. Reference the relevant project, incident, vulnerability, or compliance requirement that initiated this change request.]

#### 5.1.4 Requestor and Approver Information

| Role | Name | Department | Contact | Date |
|---|---|---|---|---|
| **Requestor** | [Full Name] | [Department] | [Email / Phone] | [DD/MM/YYYY] |
| **Technical Reviewer** | [Full Name] | [Network Security] | [Email / Phone] | [DD/MM/YYYY] |
| **Approver (Line Manager)** | [Full Name] | [Department] | [Email / Phone] | [DD/MM/YYYY] |
| **CAB Approval Reference** | [CAB Meeting Reference or N/A for standard changes] | — | — | [DD/MM/YYYY] |
| **Implementer** | [Full Name] | [Network Security] | [Email / Phone] | [DD/MM/YYYY] |

---

## 6. Before and After Comparison

*This section captures the exact state of the firewall rule before and after the change. Both states must be documented to provide a complete audit trail. Use the exact syntax as it appears in the firewall management console or configuration export.*

### 6.1 Rule State: Before Change

*Document the existing rule configuration prior to the change being applied. If this is a new rule addition, record "N/A — New Rule" in all fields.*

| Parameter | Value (Before) |
|---|---|
| **Rule ID / Name** | [Rule ID or Name, or N/A — New Rule] |
| **Rule Position / Order** | [Position number in ruleset, or N/A] |
| **Status** | [Enabled / Disabled / N/A] |
| **Action** | [Allow / Deny / Drop / Reject / N/A] |
| **Source Zone** | [Zone Name(s)] |
| **Source Address / Object** | [IP, CIDR, or named object] |
| **Destination Zone** | [Zone Name(s)] |
| **Destination Address / Object** | [IP, CIDR, or named object] |
| **Application / Service** | [Application name or protocol/port] |
| **Protocol** | [TCP / UDP / ICMP / Any] |
| **Port(s)** | [Port number(s) or range] |
| **NAT / Policy** | [NAT rule reference if applicable] |
| **Logging** | [Enabled / Disabled] |
| **Log Profile** | [Log profile name] |
| **Schedule** | [Always / Scheduled — specify] |
| **Description / Comments** | [Existing rule description as per firewall config] |

**Configuration Snapshot (Before):**

*Paste the raw configuration snippet or policy export from the firewall management system here.*

```
[Paste raw firewall rule configuration (before state) here]
```

### 6.2 Rule State: After Change

*Document the new or modified rule configuration as it exists following successful implementation.*

| Parameter | Value (After) |
|---|---|
| **Rule ID / Name** | [Rule ID or Name] |
| **Rule Position / Order** | [Position number in ruleset] |
| **Status** | [Enabled / Disabled] |
| **Action** | [Allow / Deny / Drop / Reject] |
| **Source Zone** | [Zone Name(s)] |
| **Source Address / Object** | [IP, CIDR, or named object] |
| **Destination Zone** | [Zone Name(s)] |
| **Destination Address / Object** | [IP, CIDR, or named object] |
| **Application / Service** | [Application name or protocol/port] |
| **Protocol** | [TCP / UDP / ICMP / Any] |
| **Port(s)** | [Port number(s) or range] |
| **NAT / Policy** | [NAT rule reference if applicable] |
| **Logging** | [Enabled / Disabled] |
| **Log Profile** | [Log profile name] |
| **Schedule** | [Always / Scheduled — specify] |
| **Description / Comments** | [Updated rule description as per firewall config] |

**Configuration Snapshot (After):**

*Paste the raw configuration snippet or policy export from the firewall management system here.*

```
[Paste raw firewall rule configuration (after state) here]
```

### 6.3 Summary of Differences

*Clearly identify every parameter that changed between the before and after states.*

| Parameter | Before | After | Change Summary |
|---|---|---|---|
| [Parameter Name] | [Old Value] | [New Value] | [Brief description of the change] |
| [Parameter Name] | [Old Value] | [New Value] | [Brief description of the change] |
| [Parameter Name] | [Old Value] | [New Value] | [Brief description of the change] |

---

## 7. Security Impact Assessment

*This section documents the formal security impact assessment conducted prior to approving the firewall rule change. The assessment must be completed by a qualified network security engineer and reviewed by the approver. All sections are mandatory.*

### 7.1 Threat and Risk Analysis

*Assess the cybersecurity risks introduced or mitigated by this change. Consider the impact on confidentiality, integrity, and availability of NCII assets.*

| Risk Factor | Assessment |
|---|---|
| **Does this change increase the attack surface?** | [Yes / No — explain] |
| **Does this change permit new inbound traffic to NCII zones?** | [Yes / No — specify traffic type and source] |
| **Does this change permit new outbound traffic from NCII zones?** | [Yes / No — specify traffic type and destination] |
| **Could this change be exploited if the approver or implementer were compromised?** | [Yes / No — explain controls preventing this] |
| **Does this change comply with the principle of least privilege?** | [Yes / No — explain] |
| **Does this change affect any existing security monitoring or SIEM alerts?** | [Yes / No — specify affected rules or alerts] |
| **Does this change affect any compliance-required traffic logging?** | [Yes / No — confirm logging remains intact] |

### 7.2 Impact on NCII Zone Security Posture

| Dimension | Impact | Justification |
|---|---|---|
| **Confidentiality** | [Increased Risk / No Change / Reduced Risk] | [Justification] |
| **Integrity** | [Increased Risk / No Change / Reduced Risk] | [Justification] |
| **Availability** | [Increased Risk / No Change / Reduced Risk] | [Justification] |
| **Overall Security Posture** | [Increased Risk / No Change / Improved] | [Overall justification] |

### 7.3 Compensating Controls

*If this change introduces any increased risk, specify the compensating controls in place or to be implemented.*

| Risk Introduced | Compensating Control | Owner | Implementation Date |
|---|---|---|---|
| [Identified risk] | [Control description] | [Role / Team] | [DD/MM/YYYY] |
| [Identified risk] | [Control description] | [Role / Team] | [DD/MM/YYYY] |

### 7.4 Security Impact Assessment Conclusion

**Overall Risk Rating:** [Low / Medium / High / Critical]

**Assessment Outcome:** [Approved to Proceed / Approved with Conditions / Rejected]

**Conditions (if any):**

[Detail any conditions attached to the approval, including required compensating controls, monitoring requirements, or time-limited nature of the change.]

**Assessed By:** [Name, Role] | **Date:** [DD/MM/YYYY]

**Reviewed By:** [Name, Role] | **Date:** [DD/MM/YYYY]

---

## 8. Effective Date and Implementation Record

*Record the scheduled and actual implementation details. This section confirms that the change was implemented at the authorised time and by the authorised individual.*

### 8.1 Implementation Schedule

| Field | Value |
|---|---|
| **Approved Change Window** | [DD/MM/YYYY HH:MM — HH:MM MYT] |
| **Scheduled Effective Date and Time** | [DD/MM/YYYY HH:MM MYT] |
| **Actual Effective Date and Time** | [DD/MM/YYYY HH:MM MYT] |
| **Implementation Duration** | [HH:MM] |
| **Implemented By** | [Full Name, Role] |
| **Witnessed By** | [Full Name, Role] (if applicable) |
| **Change Window Overrun?** | [Yes / No — if Yes, state reason] |

### 8.2 Pre-Implementation Checklist

*The implementer must confirm all items below prior to applying the change.*

| # | Checklist Item | Confirmed By | Date/Time |
|---|---|---|---|
| 1 | Change Request formally approved by authorised approver | [Name] | [DD/MM/YYYY HH:MM] |
| 2 | Current firewall configuration backed up and stored securely | [Name] | [DD/MM/YYYY HH:MM] |
| 3 | Rollback procedure reviewed and available | [Name] | [DD/MM/YYYY HH:MM] |
| 4 | Change window confirmed with operations team | [Name] | [DD/MM/YYYY HH:MM] |
| 5 | SIEM / monitoring team notified of planned change | [Name] | [DD/MM/YYYY HH:MM] |
| 6 | Dual-approval controls verified (where required) | [Name] | [DD/MM/YYYY HH:MM] |
| 7 | Relevant stakeholders notified of potential service impact | [Name] | [DD/MM/YYYY HH:MM] |

### 8.3 Implementation Notes

*Record any observations, deviations from the planned procedure, or issues encountered during implementation.*

[Record any relevant notes here. If the implementation proceeded without incident, state "Implementation completed as planned with no deviations noted."]

### 8.4 Rollback Plan

| Field | Value |
|---|---|
| **Rollback Trigger Criteria** | [Define conditions that would trigger rollback, e.g., service outage, security alert] |
| **Rollback Procedure Reference** | [Document ID / Runbook reference] |
| **Configuration Backup Location** | [Secure storage path / system reference] |
| **Rollback Responsible Person** | [Name, Role] |
| **Rollback Authorisation Required From** | [Name, Role] |
| **Maximum Time to Rollback** | [HH:MM] |

---

## 9. Post-Implementation Review

*A Post-Implementation Review (PIR) must be conducted for every firewall rule change within [X] business days of the effective date. The PIR confirms that the change achieved its intended outcome and did not introduce unintended security effects.*

### 9.1 PIR Details

| Field | Value |
|---|---|
| **PIR Reference** | [PIR-XXXXXX] |
| **PIR Conducted By** | [Name, Role] |
| **PIR Date** | [DD/MM/YYYY] |
| **PIR Outcome** | [Pass / Fail / Conditional Pass] |

### 9.2 PIR Checklist

| # | Verification Item | Result | Notes |
|---|---|---|---|
| 1 | Rule is operating as intended (traffic flows as expected) | [Pass / Fail] | [Notes] |
| 2 | No unintended services or ports exposed | [Pass / Fail] | [Notes] |
| 3 | Logging is functioning correctly for this rule | [Pass / Fail] | [Notes] |
| 4 | No security alerts triggered attributable to this change | [Pass / Fail] | [Notes] |
| 5 | Affected business systems operating normally | [Pass / Fail] | [Notes] |
| 6 | Change documentation is complete and filed | [Pass / Fail] | [Notes] |
| 7 | Temporary rules removed or scheduled for removal (if applicable) | [Pass / Fail / N/A] | [Notes] |

### 9.3 PIR Findings and Remediation

*If any PIR checklist item resulted in Fail, document the finding and corrective action below.*

| Finding ID | Description | Severity | Corrective Action | Owner | Due Date | Status |
|---|---|---|---|---|---|---|
| [PIR-F-001] | [Description of finding] | [High / Medium / Low] | [Corrective action to be taken] | [Name, Role] | [DD/MM/YYYY] | [Open / Closed] |

---

## 10. Log Retention

*This section documents the retention requirements applicable to this log register and all associated records, in accordance with Act 854 Section 18 and [Organization Name]'s Records Retention Policy.*

| Field | Details |
|---|---|
| **Minimum Retention Period** | 7 years from the date of the log entry |
| **Retention Basis** | Cyber Security Act 2024 (Act 854), Section 18; [Internal Records Retention Policy Reference] |
| **Storage Format** | [Electronic (primary) / Paper archive (secondary)] |
| **Primary Storage Location** | [Secure document management system / SIEM / GRC platform] |
| **Backup Storage Location** | [Offsite / Cloud backup reference] |
| **Access Controls** | Restricted to Network Security, CISO Office, Internal Audit, and authorised NACSA representatives |
| **Immutability Requirement** | Log entries must be stored in a tamper-evident, write-once format after finalisation |
| **Disposal Method** | Secure destruction in accordance with [Organization Name] Data Disposal Policy after retention period expires |
| **Disposal Authorisation** | [Role responsible for authorising disposal] |

---

## 11. Roles and Responsibilities

*The following RACI matrix defines the responsibilities of each role in the firewall rule change logging process.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Requestor | Network Security Engineer | Network Security Manager | CISO / Deputy CISO | Change Advisory Board (CAB) | Internal Audit | NACSA (on request) |
|---|---|---|---|---|---|---|---|
| Initiate change request | R | C | I | I | — | — | — |
| Complete security impact assessment | — | R | A | C | — | — | — |
| Technical review of rule change | — | R | A | C | — | — | — |
| Approve change request | — | C | R | A | C | — | — |
| CAB review (high / critical risk changes) | I | C | R | A | A | I | — |
| Implement approved change | — | R | A | I | — | — | — |
| Complete log entry in this register | — | R | A | I | — | — | — |
| Conduct post-implementation review | — | R | A | I | — | — | — |
| Conduct weekly log review | — | C | R | A | — | — | — |
| Escalate anomalies / policy violations | — | R | A | A | — | I | — |
| Annual log audit | — | C | C | A | — | R | — |
| Respond to NACSA requests for log access | — | C | R | A | — | — | R |
| Manage log retention and disposal | — | C | R | A | — | C | — |

---

## 12. Periodic Review and Oversight

### 12.1 Weekly Log Review

*The Network Security Manager (or designated delegate) must conduct a weekly review of all log entries recorded during the preceding week.*

**Weekly Review Checklist:**

| # | Review Item | Reviewed By | Date | Outcome |
|---|---|---|---|---|
| 1 | All changes have corresponding approved Change Requests | [Name] | [DD/MM/YYYY] | [Satisfactory / Exception noted] |
| 2 | No unauthorised changes detected | [Name] | [DD/MM/YYYY] | [Satisfactory / Exception noted] |
| 3 | All PIRs completed within required timeframe | [Name] | [DD/MM/YYYY] | [Satisfactory / Exception noted] |
| 4 | All log entries are complete with no missing mandatory fields | [Name] | [DD/MM/YYYY] | [Satisfactory / Exception noted] |
| 5 | Security impact assessments completed for all changes | [Name] | [DD/MM/YYYY] | [Satisfactory / Exception noted] |
| 6 | Any failed PIR findings have been actioned | [Name] | [DD/MM/YYYY] | [Satisfactory / Exception noted] |

**Weekly Review Sign-Off:**

| Role | Name | Signature | Date |
|---|---|---|---|
| Network Security Manager | [Name] | [Signature] | [DD/MM/YYYY] |

### 12.2 Exception and Escalation Register

*Record any exceptions identified during weekly reviews or at any other time.*

| Exception ID | Date Identified | Description | Identified By | Escalated To | Resolution | Closure Date |
|---|---|---|---|---|---|---|
| [EX-001] | [DD/MM/YYYY] | [Description of exception] | [Name, Role] | [Name, Role] | [Resolution description] | [DD/MM/YYYY] |

---

## 13. Review and Approval

### 13.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Role] | Initial document created |
| [1.1] | [DD/MM/YYYY] | [Author Name, Role] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name, Role] | [Description of changes] |

### 13.2 Approval Sign-Off

*This document requires formal approval from the following roles prior to becoming effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], Network Security Engineer | | [DD/MM/YYYY] |
| Reviewed By | [Name], Network Security Manager | | [DD/MM/YYYY] |
| Reviewed By | [Name], Chief Information Security Officer | | [DD/MM/YYYY] |
| Approved By | [Name], [CIO / COO / Authorised Signatory] | | [DD/MM/YYYY] |

---

## 14. References

| # | Reference | Description |
|---|---|---|
| 1 | Cyber Security Act 2024 (Act 854), **Section 18** | Duties of NCII entity — mandatory maintenance of records relating to cybersecurity measures, controls, and change activity |
| 2 | NACSA National Cyber Security Policy (NCSP) | National policy framework governing cybersecurity standards for NCII sectors |
| 3 | [Organization Name] Information Security Policy, [Version] | Internal overarching information security policy |
| 4 | [Organization Name] Change Management Policy, [Version] | Internal policy governing the change management lifecycle for IT and security controls |
| 5 | [Organization Name] Network Security Standard, [Version] | Internal standard governing network segmentation, firewall architecture, and rule management |
| 6 | [Organization Name] Records Management and Retention Policy, [Version] | Internal policy governing retention periods and disposal of official records |
| 7 | ISO/IEC 27001:2022 — Annex A 8.20, 8.22 | Network security and network segregation controls |
| 8 | NIST SP 800-41 Rev. 1 | Guidelines on Firewalls and Firewall Policy |
| 9 | NIST SP 800-92 | Guide to Computer Security Log Management |

---

## Appendices

### Appendix A — Firewall Rule Change Request Form Template

*A blank copy of the standardised Firewall Rule Change Request Form used to initiate entries in this log.*

[Insert or attach [Organization Name] standard Firewall Rule Change Request Form — Document ID: [Form ID]]

### Appendix B — NCII Network Zone Register

*Reference listing of all network zones classified as NCII assets, to be cross-referenced when completing the "Network Zone Affected" field in Section 4.*

| Zone ID | Zone Name | Classification | Description | Firewall Device(s) |
|---|---|---|---|---|
| [Z-001] | [Zone Name] | NCII | [Zone description] | [Device hostname(s)] |
| [Z-002] | [Zone Name] | NCII | [Zone description] | [Device hostname(s)] |

*Full Zone Register maintained by: [Role / Team] | Last Updated: [DD/MM/YYYY]*

### Appendix C — Authorised Approver Register

*Register of personnel authorised to approve firewall rule changes, by change risk rating.*

| Risk Rating | Minimum Approval Authority | Name(s) | Delegation Reference |
|---|---|---|---|
| Standard (Low Risk) | Network Security Manager | [Name] | [Delegation reference] |
| High Risk | CISO or Deputy CISO | [Name] | [Delegation reference] |
| Critical Risk | CISO + CAB | [Name] | [Delegation reference] |
| Emergency Change | On-Call Security Manager (retrospective CAB within 24 hours) | [Name] | [Delegation reference] |

### Appendix D — Log Integrity and Tamper-Evidence Controls

*Description of the technical and procedural controls used to ensure the integrity and non-repudiation of log entries.*

[Describe the technical controls in place, e.g., SIEM ingestion with cryptographic hashing, write-once storage, access logging for the document management system, and any periodic integrity verification processes. Reference the relevant system names and Document IDs for supporting procedures.]

### Appendix E — Emergency Change Procedure Summary

*Summary of the expedited procedure applicable to emergency firewall rule changes where prior approval cannot be obtained within the normal change management timeline.*

[Insert or reference [Organization Name] Emergency Change Procedure — Document ID: [Procedure ID]. Confirm that emergency changes are subject to: (1) retrospective log entry within 24 hours; (2) retrospective CAB review within [X] business days; and (3) mandatory PIR.]

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name] and designated regulatory bodies. Unauthorised disclosure, reproduction, or distribution is prohibited.*

*© [Year] [Organization Name]. All rights reserved.*