# Patch Deployment Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Effective Date** | [Effective Date] |

---

## 1. Purpose and Scope

This document serves as the official log registry for the deployment of security patches across all systems designated as National Critical Information Infrastructure (NCII) within [Organization Name]. It provides a structured, auditable record of each patch deployment cycle, capturing deployment outcomes, system-level status, reboot compliance, and Service Level Agreement (SLA) adherence.

This log is maintained in accordance with **Section 18 of the Cyber Security Act 2024 (Act 854)**, which mandates that NCII entities implement and maintain adequate cyber security measures, including documented evidence of vulnerability and patch management activities. Maintenance of these logs demonstrates [Organization Name]'s ongoing compliance with NACSA directives and supports incident investigation, regulatory audit, and continuous improvement of the patch management programme.

**Scope:** These logs apply to all NCII-designated systems, endpoints, servers, network devices, and operational technology (OT) assets under the management of [Organization Name]'s IT Operations function.

---

## 2. Patch Deployment Log Register

*Record each patch deployment event as a separate entry in this register. A new entry must be created for every patch cycle initiated, including emergency out-of-band patches. Entries must be completed within [X] business days of deployment completion.*

### 2.1 Log Entry Summary

| Field | Value |
|---|---|
| **Log Entry ID** | PDL-[YYYY]-[NNNN] |
| **Patch Cycle Reference** | [Patch Cycle ID / Change Request Number] |
| **Deployment Date** | [DD/MM/YYYY] |
| **Patch Type** | [ ] Critical  [ ] High  [ ] Medium  [ ] Low  [ ] Emergency OOB |
| **Initiated By** | [Name / Role] |
| **Log Recorded By** | [Name / Role] |
| **Log Entry Date** | [DD/MM/YYYY] |

---

## 3. Patch Identifier

*Record all unique identifiers associated with the patch or patches deployed in this cycle. Include both Microsoft KB article numbers and CVE identifiers where applicable. For non-Microsoft patches, record the vendor advisory reference.*

### 3.1 Patch Details

| Field | Details |
|---|---|
| **Patch / KB Identifier** | [e.g., KB5034441 / MS-ADV-2024-XXXX] |
| **CVE Reference(s)** | [e.g., CVE-2024-XXXXX, CVE-2024-YYYYY] |
| **Vendor Advisory Reference** | [e.g., MSRC / Vendor Security Advisory ID] |
| **CVSS Score** | [e.g., 9.8 (Critical)] |
| **Vulnerability Description** | [Brief description of the vulnerability addressed] |
| **Patch Source / Repository** | [e.g., Microsoft Update Catalog, Vendor Portal, Internal WSUS] |
| **Patch Release Date** | [DD/MM/YYYY] |
| **Patch File Hash (SHA-256)** | [Hash value for integrity verification] |
| **Affected Product / Component** | [e.g., Windows Server 2022, Apache 2.4, Cisco IOS 15.x] |

### 3.2 Additional Patches in This Cycle

*If multiple patches were deployed in the same cycle, list each additional patch below.*

| Patch / KB ID | CVE Reference(s) | CVSS Score | Product / Component | Vendor Advisory |
|---|---|---|---|---|
| [KB / Patch ID] | [CVE-YYYY-XXXXX] | [Score] | [Product] | [Advisory Ref] |
| [KB / Patch ID] | [CVE-YYYY-XXXXX] | [Score] | [Product] | [Advisory Ref] |
| [KB / Patch ID] | [CVE-YYYY-XXXXX] | [Score] | [Product] | [Advisory Ref] |

---

## 4. Target Systems

*List all systems identified as in-scope for this patch cycle. Systems must be referenced by their official asset inventory identifier. Include all NCII-designated assets. Systems excluded from this cycle must be documented with a justified reason in Section 6.*

### 4.1 In-Scope System Inventory

| Asset ID | Hostname / Device Name | IP Address | Asset Type | NCII Category | Business Unit | Environment | Operating System / Firmware |
|---|---|---|---|---|---|---|---|
| [ASSET-XXXX] | [Hostname] | [IP Address] | [Server / Endpoint / Network / OT] | [Yes / No] | [Business Unit] | [Prod / UAT / DR] | [OS / Version] |
| [ASSET-XXXX] | [Hostname] | [IP Address] | [Server / Endpoint / Network / OT] | [Yes / No] | [Business Unit] | [Prod / UAT / DR] | [OS / Version] |
| [ASSET-XXXX] | [Hostname] | [IP Address] | [Server / Endpoint / Network / OT] | [Yes / No] | [Business Unit] | [Prod / UAT / DR] | [OS / Version] |
| [ASSET-XXXX] | [Hostname] | [IP Address] | [Server / Endpoint / Network / OT] | [Yes / No] | [Business Unit] | [Prod / UAT / DR] | [OS / Version] |

**Total In-Scope Systems:** [Number]

---

## 5. Deployment Status

*Record the overall deployment outcome for this patch cycle. This section provides a high-level summary; per-system status is captured in Section 6.*

### 5.1 Deployment Summary

| Field | Value |
|---|---|
| **Deployment Window Start** | [DD/MM/YYYY HH:MM] |
| **Deployment Window End** | [DD/MM/YYYY HH:MM] |
| **Deployment Method** | [e.g., WSUS / SCCM / Ansible / Manual / Vendor Tool] |
| **Change Advisory Board (CAB) Approval Reference** | [CAB Reference Number] |
| **Overall Deployment Status** | [ ] Completed  [ ] Partially Completed  [ ] Failed  [ ] Rolled Back |
| **Total Systems Targeted** | [Number] |
| **Total Successfully Patched** | [Number] |
| **Total Failed** | [Number] |
| **Total Deferred / Excluded** | [Number] |
| **Patch Coverage Rate** | [X]% |
| **Post-Deployment Verification Method** | [e.g., Vulnerability scan, Compliance scan, Manual check] |
| **Verification Completed By** | [Name / Role] |
| **Verification Date** | [DD/MM/YYYY] |

---

## 6. Success / Failure Per System

*Document the individual deployment outcome for every target system. For each failed deployment, record the error code or failure reason and the remediation action taken or planned. This section is the primary evidence artefact for regulatory audit.*

### 6.1 Per-System Deployment Outcome

| Asset ID | Hostname | Patch / KB ID | Deployment Date & Time | Status | Error Code / Failure Reason | Remediation Action | Remediation Target Date | Verified By | Verification Date |
|---|---|---|---|---|---|---|---|---|---|
| [ASSET-XXXX] | [Hostname] | [KB / Patch ID] | [DD/MM/YYYY HH:MM] | [ ] Success [ ] Failed [ ] Deferred [ ] N/A | [N/A or Error Description] | [N/A or Action Taken] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] |
| [ASSET-XXXX] | [Hostname] | [KB / Patch ID] | [DD/MM/YYYY HH:MM] | [ ] Success [ ] Failed [ ] Deferred [ ] N/A | [N/A or Error Description] | [N/A or Action Taken] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] |
| [ASSET-XXXX] | [Hostname] | [KB / Patch ID] | [DD/MM/YYYY HH:MM] | [ ] Success [ ] Failed [ ] Deferred [ ] N/A | [N/A or Error Description] | [N/A or Action Taken] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] |
| [ASSET-XXXX] | [Hostname] | [KB / Patch ID] | [DD/MM/YYYY HH:MM] | [ ] Success [ ] Failed [ ] Deferred [ ] N/A | [N/A or Error Description] | [N/A or Action Taken] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] |

**Status Legend:**
- **Success** — Patch successfully applied and verified
- **Failed** — Patch deployment attempted but unsuccessful; remediation required
- **Deferred** — Patch deployment postponed with documented justification and compensating control
- **N/A** — System not applicable for this patch (e.g., different OS, already patched)

### 6.2 Deferred / Excluded Systems — Justification Register

*All systems excluded or deferred from a patch cycle must have a formal justification and an approved compensating control documented here.*

| Asset ID | Hostname | Reason for Deferral / Exclusion | Compensating Control Applied | Risk Accepted By | Revised Target Date | Risk Acceptance Expiry |
|---|---|---|---|---|---|---|
| [ASSET-XXXX] | [Hostname] | [e.g., Critical system — planned maintenance window required] | [e.g., Network segmentation, enhanced monitoring] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY] |
| [ASSET-XXXX] | [Hostname] | [Reason] | [Compensating Control] | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY] |

---

## 7. Reboot Compliance

*Some patches require a system reboot to take effect. Record whether the required reboot was completed within the approved maintenance window. Non-compliance with reboot requirements must be documented with justification and a remediation timeline.*

### 7.1 Reboot Requirement Summary

| Asset ID | Hostname | Reboot Required | Reboot Completed | Reboot Date & Time | Reboot Compliance Status | Non-Compliance Justification | Remediation Date |
|---|---|---|---|---|---|---|---|
| [ASSET-XXXX] | [Hostname] | [ ] Yes  [ ] No | [ ] Yes  [ ] No  [ ] Pending | [DD/MM/YYYY HH:MM] | [ ] Compliant  [ ] Non-Compliant  [ ] Pending | [N/A or Reason] | [DD/MM/YYYY or N/A] |
| [ASSET-XXXX] | [Hostname] | [ ] Yes  [ ] No | [ ] Yes  [ ] No  [ ] Pending | [DD/MM/YYYY HH:MM] | [ ] Compliant  [ ] Non-Compliant  [ ] Pending | [N/A or Reason] | [DD/MM/YYYY or N/A] |
| [ASSET-XXXX] | [Hostname] | [ ] Yes  [ ] No | [ ] Yes  [ ] No  [ ] Pending | [DD/MM/YYYY HH:MM] | [ ] Compliant  [ ] Non-Compliant  [ ] Pending | [N/A or Reason] | [DD/MM/YYYY or N/A] |

### 7.2 Reboot Compliance Summary

| Metric | Value |
|---|---|
| **Total Systems Requiring Reboot** | [Number] |
| **Reboots Completed Within Window** | [Number] |
| **Reboots Pending** | [Number] |
| **Reboot Non-Compliance Count** | [Number] |
| **Overall Reboot Compliance Rate** | [X]% |

---

## 8. SLA Adherence

*Patch deployment must be completed within the SLA timelines defined in [Organization Name]'s Patch Management Policy, aligned with the CVSS severity rating of each vulnerability. Record whether the SLA for this patch cycle was met and document exceptions.*

### 8.1 Applicable SLA Targets

*The following SLA thresholds apply per [Organization Name] Patch Management Policy [Policy Reference]:*

| Severity Rating | CVSS Score Range | SLA Target (Days from Vendor Release) |
|---|---|---|
| **Critical** | 9.0 – 10.0 | [e.g., 3 business days] |
| **High** | 7.0 – 8.9 | [e.g., 7 business days] |
| **Medium** | 4.0 – 6.9 | [e.g., 30 calendar days] |
| **Low** | 0.1 – 3.9 | [e.g., 90 calendar days] |

### 8.2 SLA Adherence Record

| Patch / KB ID | CVE Reference | Severity | CVSS Score | Vendor Release Date | SLA Deadline | Actual Deployment Completion Date | SLA Status | SLA Breach Justification | Approved By |
|---|---|---|---|---|---|---|---|---|---|
| [KB / Patch ID] | [CVE-YYYY-XXXXX] | [Critical/High/Medium/Low] | [Score] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [ ] Met  [ ] Breached  [ ] Exempt | [N/A or Reason for Breach] | [Name / Role] |
| [KB / Patch ID] | [CVE-YYYY-XXXXX] | [Critical/High/Medium/Low] | [Score] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [ ] Met  [ ] Breached  [ ] Exempt | [N/A or Reason for Breach] | [Name / Role] |
| [KB / Patch ID] | [CVE-YYYY-XXXXX] | [Critical/High/Medium/Low] | [Score] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [ ] Met  [ ] Breached  [ ] Exempt | [N/A or Reason for Breach] | [Name / Role] |

### 8.3 SLA Adherence Summary

| Metric | Value |
|---|---|
| **Total Patches in Cycle** | [Number] |
| **Patches Deployed Within SLA** | [Number] |
| **SLA Breaches** | [Number] |
| **SLA Exempt (with Approval)** | [Number] |
| **Overall SLA Compliance Rate** | [X]% |
| **SLA Breach Escalated to** | [CISO / Risk Committee / N/A] |
| **Escalation Date** | [DD/MM/YYYY or N/A] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for the patch deployment log process. All roles must be assigned to named individuals for each patch cycle.*

| Activity | IT Operations Lead | System / Server Admin | Security Operations (SOC) | Change Manager | CISO | Business System Owner |
|---|---|---|---|---|---|---|
| Identify and prioritise patches | C | R | R | I | A | I |
| Raise and obtain CAB approval | R | C | C | A | I | C |
| Execute patch deployment | A | R | I | I | I | I |
| Record per-system deployment outcome | R | R | I | I | I | I |
| Verify patch application and reboot compliance | C | R | R | I | I | I |
| Log SLA adherence and exceptions | R | I | C | C | A | I |
| Escalate SLA breaches and failures | R | I | C | I | A | C |
| Review and sign off completed log | I | I | C | I | A | I |
| Archive completed log records | R | I | I | I | A | I |
| Report to NACSA (if required under Act 854) | I | I | I | I | R | I |

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial template creation |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 10.2 Approval Sign-Off

*Each completed patch deployment log cycle record must be reviewed and approved by the designated approvers below before archival.*

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Lead | [Name] | __________________ | [DD/MM/YYYY] |
| Information Security Manager | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Information Security Officer (CISO) | [Name] | __________________ | [DD/MM/YYYY] |
| [Additional Approver Role] | [Name] | __________________ | [DD/MM/YYYY] |

---

## 11. References

The following regulatory instruments, standards, and internal policies govern this document and the activities it records:

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), s18** | Obligation on NCII entities to implement and maintain cyber security measures, including documented patch and vulnerability management activities |
| **NACSA NCII Sector Cyber Security Framework** | Sector-specific requirements for patch management and log retention applicable to NCII entities |
| **[Organization Name] Patch Management Policy [Ref]** | Internal policy governing patch classification, SLA targets, approval workflow, and escalation procedures |
| **[Organization Name] Vulnerability Management Procedure [Ref]** | Internal procedure for vulnerability identification, risk rating, and remediation tracking |
| **[Organization Name] Change Management Policy [Ref]** | Internal policy governing the CAB process and change advisory requirements for patch deployment |
| **NIST SP 800-40 Rev. 4** | Guide to Enterprise Patch Management Planning (reference standard) |
| **ISO/IEC 27001:2022 — Annex A 8.8** | Management of technical vulnerabilities |

---

## 12. Appendices

### Appendix A — Patch Severity Classification Reference

*This appendix provides the severity classification mapping used by [Organization Name] to align internal patch prioritisation with CVSS scoring and NACSA requirements.*

| CVSS Base Score | Severity | Internal Priority | SLA Target | Emergency CAB Required |
|---|---|---|---|---|
| 9.0 – 10.0 | Critical | P1 | [X] business days | Yes |
| 7.0 – 8.9 | High | P2 | [X] business days | No |
| 4.0 – 6.9 | Medium | P3 | [X] calendar days | No |
| 0.1 – 3.9 | Low | P4 | [X] calendar days | No |
| N/A | Informational | P5 | Next scheduled cycle | No |

---

### Appendix B — Compensating Controls Register Template

*Where a patch cannot be deployed within the required SLA, a compensating control must be formally documented and risk-accepted. Use the format below.*

| Control ID | Related Asset ID | Related Patch / CVE | Compensating Control Description | Control Effectiveness | Risk Owner | Implementation Date | Review Date |
|---|---|---|---|---|---|---|---|
| CC-[YYYY]-[NNN] | [ASSET-XXXX] | [Patch ID / CVE] | [Description of compensating control] | [ ] Effective  [ ] Partially Effective | [Name / Role] | [DD/MM/YYYY] | [DD/MM/YYYY] |

---

### Appendix C — Patch Deployment Log Retention Schedule

*In accordance with Act 854 s18 and [Organization Name]'s Records Retention Policy [Ref], completed patch deployment logs must be retained as follows:*

| Record Type | Minimum Retention Period | Storage Location | Access Control |
|---|---|---|---|
| Completed Patch Deployment Log (per cycle) | [e.g., 7 years] | [e.g., Secure document management system] | IT Operations, CISO, Auditors |
| SLA Breach and Exception Records | [e.g., 7 years] | [e.g., Secure document management system] | IT Operations, CISO, Risk Committee |
| Compensating Control Evidence | Duration of control + [X] years | [Storage Location] | IT Operations, CISO |
| NACSA Reporting Correspondence | [e.g., Permanent] | [Storage Location] | CISO, Legal |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary legislation governing cybersecurity obligations for NCII entities in Malaysia |
| **CVE** | Common Vulnerabilities and Exposures — a standardised identifier for publicly known cybersecurity vulnerabilities |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the characteristics and severity of software vulnerabilities |
| **KB Article** | Knowledge Base article — Microsoft's reference identifier for software updates and patches |
| **NACSA** | National Cyber Security Agency — the national lead agency for cybersecurity in Malaysia |
| **NCII** | National Critical Information Infrastructure — information infrastructure designated as critical under Act 854 |
| **OOB Patch** | Out-of-Band Patch — an emergency patch released outside of a vendor's regular patch cycle |
| **SLA** | Service Level Agreement — the defined timeframe within which a patch must be deployed based on severity |
| **WSUS / SCCM** | Windows Server Update Services / System Centre Configuration Manager — common patch deployment tools |

---

*This document is classified as **Confidential**. Unauthorised disclosure is prohibited. For queries regarding this document, contact [IT Operations Lead Name] at [Contact Email].*