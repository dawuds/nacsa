# Backup Verification Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Effective Date:** [Effective Date]

---

## 1. Purpose and Scope

This log captures the operational record of backup activities performed on National Critical Information Infrastructure (NCII) data assets held by [Organization Name]. It documents the completion status, integrity verification outcomes, restoration test results, and offsite replication confirmation for all scheduled and ad-hoc backup jobs.

This document fulfills obligations under **Cyber Security Act 2024 (Act 854)**, specifically **Section 18**, which mandates that NCII entities maintain adequate cybersecurity measures — including data protection, continuity, and recovery controls — and retain verifiable evidence of their implementation. These logs serve as primary audit evidence demonstrating that [Organization Name] maintains operational resilience for NCII data in accordance with NACSA directives and applicable cybersecurity standards.

**Scope:** This log covers all backup jobs executed against systems, databases, and data repositories classified as NCII assets within the operating environment of [Organization Name], including on-premises, hybrid, and cloud-hosted workloads where applicable.

---

## 2. Backup Job Status

*Record the outcome of each backup job executed during the log period. Each entry must capture the job identifier, the system or dataset targeted, scheduled and actual execution times, and the final status. All non-successful statuses must be escalated per the incident response procedure referenced in Section 6.*

### 2.1 Daily Backup Job Register

| Log Date | Job ID | Backup Type | Target System / Dataset | Scheduled Start | Actual Start | Actual End | Duration | Status | Operator / System |
|---|---|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [JOB-001] | Full / Incremental / Differential | [System Name or DB Name] | [HH:MM] | [HH:MM] | [HH:MM] | [hh:mm:ss] | Success / Failed / Partial | [Operator ID or Automation Tool] |
| [YYYY-MM-DD] | [JOB-002] | | | | | | | | |

**Status Definitions:**

- **Success** — Backup job completed without errors; all expected data was captured.
- **Partial** — Backup job completed with warnings; a subset of data may not have been captured.
- **Failed** — Backup job did not complete; data was not backed up. Requires immediate escalation.
- **Skipped** — Job was intentionally bypassed; documented reason must be provided.

### 2.2 Skipped or Deferred Jobs

*Record any jobs that were intentionally deferred or bypassed, including the authorising authority and compensating control applied.*

| Log Date | Job ID | Reason for Skip / Deferral | Authorised By | Compensating Control | Rescheduled Date |
|---|---|---|---|---|---|
| [YYYY-MM-DD] | [JOB-XXX] | [Reason] | [Name / Role] | [Control Description] | [YYYY-MM-DD] |

---

## 3. Data Volume Backed Up

*Record the volume of data captured in each backup job to establish a baseline and detect anomalies. Significant deviations from the baseline (recommended threshold: ±20%) must be investigated and documented.*

### 3.1 Backup Volume Summary

| Log Date | Job ID | Target System / Dataset | Expected Volume (GB) | Actual Volume Backed Up (GB) | Variance (%) | Anomaly Flagged (Y/N) | Remarks |
|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [JOB-001] | [System Name] | [XX.XX] | [XX.XX] | [±X.X%] | [Y/N] | [Notes if anomaly] |
| [YYYY-MM-DD] | [JOB-002] | | | | | | |

### 3.2 Cumulative Backup Volume (Period Summary)

*Update this table at the end of each reporting period (weekly/monthly) for trend analysis.*

| Reporting Period | Total Jobs Executed | Total Volume Backed Up (GB) | Average Volume per Job (GB) | Anomalies Detected |
|---|---|---|---|---|
| [YYYY-MM Week XX] | [N] | [XX.XX] | [XX.XX] | [N] |

---

## 4. Integrity Check Results

*Record the outcome of data integrity verification performed on each backup set. Integrity checks must validate that backup data is uncorrupted and matches the source via checksums, hash comparison, or equivalent cryptographic verification. A failed integrity check must trigger immediate escalation.*

### 4.1 Integrity Verification Log

| Log Date | Job ID | Target System / Dataset | Verification Method | Checksum / Hash Algorithm | Source Hash | Backup Hash | Match (Y/N) | Integrity Status | Verified By |
|---|---|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [JOB-001] | [System Name] | Checksum / Hash / Block Verification | SHA-256 / MD5 / [Other] | [Hash Value] | [Hash Value] | [Y/N] | Passed / Failed | [Operator ID or Tool] |
| [YYYY-MM-DD] | [JOB-002] | | | | | | | | |

### 4.2 Integrity Check Failures

*Document all integrity check failures separately for escalation tracking and root cause analysis.*

| Log Date | Job ID | System Affected | Failure Description | Root Cause | Escalated To | Escalation Time | Resolution | Resolved Date |
|---|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [JOB-XXX] | [System Name] | [Description] | [Root Cause] | [Name / Role] | [HH:MM] | [Resolution Action] | [YYYY-MM-DD] |

---

## 5. Restoration Test Results

*Record the results of restoration tests conducted to verify that backed-up data can be successfully recovered. Restoration tests must be performed at the frequency defined in [Organization Name]'s Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP). Results must confirm data usability, not merely file transfer success.*

### 5.1 Restoration Test Register

| Test Date | Test ID | Job ID Tested | Target System / Dataset | Backup Date Restored From | Restoration Environment | Recovery Time Objective (RTO) Target | Actual Recovery Time | Recovery Point Objective (RPO) Target | Actual Data Loss (if any) | Data Usability Confirmed (Y/N) | Test Result | Tested By | Witnessed By |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [TEST-001] | [JOB-001] | [System Name] | [YYYY-MM-DD] | Production / DR / Sandbox | [HH:MM] | [HH:MM] | [HH:MM] | [HH:MM or None] | [Y/N] | Pass / Fail | [Name / ID] | [Name / Role] |
| [YYYY-MM-DD] | [TEST-002] | | | | | | | | | | | | |

### 5.2 Restoration Test Summary

| Period | Total Tests Conducted | Tests Passed | Tests Failed | Pass Rate (%) | Outstanding Remediation Items |
|---|---|---|---|---|---|
| [YYYY-MM] | [N] | [N] | [N] | [XX%] | [N] |

### 5.3 Failed Restoration Tests — Remediation Tracking

| Test Date | Test ID | Failure Description | Root Cause | Remediation Action | Owner | Target Resolution Date | Resolved (Y/N) |
|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [TEST-XXX] | [Description] | [Root Cause] | [Action] | [Name / Role] | [YYYY-MM-DD] | [Y/N] |

---

## 6. Failures and Retries

*Document all backup job failures, retry attempts, and their outcomes. This section provides an audit trail for operational resilience and supports root cause analysis. All failures must be assessed for potential NCII impact and escalated where required under Act 854 s18.*

### 6.1 Failure and Retry Log

| Log Date | Job ID | Target System / Dataset | Failure Time | Failure Type | Error Code / Message | Retry Attempt # | Retry Time | Retry Outcome | Root Cause Category | Root Cause Description | Escalated (Y/N) | Escalated To | Final Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [JOB-XXX] | [System Name] | [HH:MM] | Job Failure / Integrity Failure / Connectivity | [Error Code] | [1 / 2 / 3] | [HH:MM] | Success / Failed | Network / Storage / Config / Software | [Description] | [Y/N] | [Name / Role] | Resolved / Escalated / Open |
| [YYYY-MM-DD] | | | | | | | | | | | | | |

**Failure Type Definitions:**

- **Job Failure** — The backup process did not initiate or terminated abnormally.
- **Integrity Failure** — The backup completed but failed integrity verification (see Section 4).
- **Connectivity Failure** — Network or storage connectivity prevented backup completion.
- **Capacity Failure** — Insufficient storage capacity on backup target.

### 6.2 Recurring Failure Analysis

*Identify patterns in failures occurring more than once within the reporting period for systemic remediation.*

| Failure Pattern / Root Cause | Frequency | Affected Systems | Recommended Remediation | Assigned To | Status |
|---|---|---|---|---|---|
| [Description] | [N occurrences] | [System List] | [Action] | [Owner] | Open / In Progress / Closed |

---

## 7. Offsite Copy Confirmation

*Record confirmation that backup data has been successfully replicated or transferred to an offsite or geographically separate location, ensuring availability in the event of a primary site disaster. Offsite storage must meet the data classification and physical security requirements applicable to NCII data.*

### 7.1 Offsite Replication Log

| Log Date | Job ID | Source Backup Location | Offsite / Secondary Location | Replication Method | Replication Start Time | Replication End Time | Volume Transferred (GB) | Transfer Status | Encryption Applied (Y/N) | Encryption Standard | Confirmation Reference | Confirmed By |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [JOB-001] | [Primary Data Centre / Cloud Region] | [DR Site / Cloud Region / Tape Vault] | Replication / SFTP / Physical Transfer | [HH:MM] | [HH:MM] | [XX.XX] | Success / Failed | [Y/N] | AES-256 / [Other] | [Transfer Receipt / Log Ref] | [Operator ID or Tool] |
| [YYYY-MM-DD] | [JOB-002] | | | | | | | | | | | |

### 7.2 Offsite Storage Inventory

*Maintain a current inventory of all physical or logical offsite backup media. Update this table whenever media is sent to or retrieved from offsite storage.*

| Media ID / Snapshot ID | Backup Date | System / Dataset | Storage Location | Custodian | Date Sent Offsite | Expected Retention Expiry | Date Returned / Deleted | Destruction Method |
|---|---|---|---|---|---|---|---|---|
| [MEDIA-001] | [YYYY-MM-DD] | [System Name] | [Location Name] | [Custodian Name / Company] | [YYYY-MM-DD] | [YYYY-MM-DD] | [YYYY-MM-DD or N/A] | [Shredding / Degaussing / Deletion / N/A] |

### 7.3 Offsite Replication Failures

| Log Date | Job ID | Failure Description | Root Cause | Compensating Control | Escalated To | Resolution |
|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [JOB-XXX] | [Description] | [Root Cause] | [e.g., Manual transfer initiated] | [Name / Role] | [Resolution Action] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for maintaining, reviewing, and acting on this log. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations (Backup Admin) | IT Operations Manager | CISO / IT Security | Internal Audit | NACSA (Regulator) | Business Continuity Manager |
|---|---|---|---|---|---|---|
| Execute backup jobs and record log entries | R | A | I | I | — | I |
| Perform integrity checks and record results | R | A | C | I | — | — |
| Conduct and document restoration tests | R | A | C | C | — | C |
| Investigate and escalate backup failures | R | A | C | I | I (if NCII impact) | C |
| Confirm offsite replication and maintain inventory | R | A | C | I | — | I |
| Review logs for completeness and accuracy | C | R | A | R | — | I |
| Approve log period and escalate material issues | I | R | A | C | — | C |
| Report NCII-related incidents to NACSA | I | C | R | I | A | C |
| Archive and retain logs per retention policy | R | A | C | I | — | — |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial version |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Description of changes] |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | [Signature] | [YYYY-MM-DD] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [YYYY-MM-DD] |
| Head of Internal Audit | [Name] | [Signature] | [YYYY-MM-DD] |
| [Additional Approver Role] | [Name] | [Signature] | [YYYY-MM-DD] |

---

## 10. References

| Reference | Document / Clause | Description |
|---|---|---|
| Act 854 | Cyber Security Act 2024 (Malaysia), **Section 18** | Duties of NCII entity owners to implement, maintain, and provide evidence of cybersecurity measures including data protection and recovery controls |
| Act 854 | Cyber Security Act 2024 (Malaysia), **Section 25–26** | Reporting obligations for cybersecurity incidents affecting NCII; applicable where backup failure constitutes or contributes to an NCII incident |
| NACSA | NACSA Cybersecurity Framework for NCII | Operational security and resilience requirements applicable to designated NCII entities |
| [Internal] | [Organization Name] — Backup and Recovery Policy | Internal policy governing backup schedules, retention periods, RTO/RPO targets, and restoration testing frequency |
| [Internal] | [Organization Name] — Business Continuity Plan (BCP) | Defines recovery objectives and escalation procedures referenced in this log |
| [Internal] | [Organization Name] — Disaster Recovery Plan (DRP) | Defines DR site procedures and restoration workflows referenced in Section 5 |
| [Internal] | [Organization Name] — Data Classification Policy | Governs classification of NCII data assets and applicable handling requirements for backups |
| [Internal] | [Organization Name] — Incident Response Plan | Defines escalation paths for backup failures with NCII impact |

---

## 11. Appendices

### Appendix A — Backup Schedule Reference

*Attach or reference the current approved backup schedule, including job names, target systems, backup types, frequencies, and retention periods. This schedule defines the expected entries in Section 2 and the baseline for anomaly detection in Section 3.*

> **[Attach: Approved Backup Schedule — [Organization Name] — Version X.X — [Date]]**

---

### Appendix B — Offsite Storage Locations Register

*List all approved offsite and secondary storage locations, including physical addresses, custodian details, and applicable data handling agreements. All NCII data stored offsite must be governed by a formal agreement meeting Act 854 and PDPA requirements.*

| Location ID | Location Name | Address | Type | Custodian / Provider | Agreement Reference | Data Classification Supported |
|---|---|---|---|---|---|---|
| [LOC-001] | [Location Name] | [Address] | Physical Vault / Cloud Region / DR Site | [Custodian Name] | [Agreement Ref] | Confidential / Restricted |

---

### Appendix C — Escalation Matrix

*Define the escalation contacts and communication channels to be used when backup failures, integrity failures, or offsite replication failures are detected. This matrix supplements the Roles and Responsibilities in Section 8.*

| Severity | Trigger Condition | Primary Escalation Contact | Secondary Escalation Contact | Notification Timeframe | NACSA Notification Required |
|---|---|---|---|---|---|
| Critical | Backup failure affecting NCII production system; integrity failure unresolved > 2 hours | IT Operations Manager | CISO | Immediate (within 1 hour) | Assess per Act 854 s25 |
| High | Backup failure with successful retry; offsite replication failure | IT Operations Manager | [Backup Admin Lead] | Within 4 hours | No (unless NCII impact confirmed) |
| Medium | Partial backup; volume anomaly detected | [Backup Admin Lead] | IT Operations Manager | Within 8 hours | No |
| Low | Skipped job with approved deferral; minor retry | [Backup Admin Lead] | — | Next business day | No |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **NCII** | National Critical Information Infrastructure — information infrastructure designated under the Cyber Security Act 2024 as critical to national functions |
| **NACSA** | National Cyber Security Agency of Malaysia — the competent authority under Act 854 |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system or dataset after a disruption |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| **Integrity Check** | A verification process (e.g., checksum, hash comparison) confirming that backup data is uncorrupted and identical to the source |
| **Offsite Copy** | A backup copy stored at a physically or logically separate location from the primary data centre to ensure availability following a site-level disaster |
| **Full Backup** | A complete copy of all designated data at a point in time |
| **Incremental Backup** | A backup capturing only data changed since the previous backup job |
| **Differential Backup** | A backup capturing all data changed since the last full backup |

---

*This document is classified **Confidential**. It must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Data Classification Policy and applicable requirements under the Cyber Security Act 2024 (Act 854) and the Personal Data Protection Act 2010 (PDPA). Unauthorised disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: IT Operations | [Organization Name]*