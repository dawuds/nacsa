# Backup and Recovery Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 6 months from Last Review] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be distributed outside of [Organization Name] without prior written approval from the document owner. Printed copies are uncontrolled. Always refer to the document management system for the current version.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy References](#3-regulatory-and-policy-references)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Roles and Responsibilities](#5-roles-and-responsibilities)
6. [Backup Schedule and Retention](#6-backup-schedule-and-retention)
7. [Backup Types](#7-backup-types)
8. [Offsite and Offline Backup Requirements](#8-offsite-and-offline-backup-requirements)
9. [Recovery Point and Time Objectives](#9-recovery-point-and-time-objectives)
10. [Backup Integrity Verification](#10-backup-integrity-verification)
11. [Restoration Testing](#11-restoration-testing)
12. [Incident-Driven Recovery Procedures](#12-incident-driven-recovery-procedures)
13. [Reporting and Escalation](#13-reporting-and-escalation)
14. [Exceptions and Waivers](#14-exceptions-and-waivers)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*Describe the intent of this procedure and why it exists within the organization's compliance and operational context.*

This procedure establishes the mandatory requirements and operational steps governing the backup and recovery of systems and data classified as National Critical Information Infrastructure (NCII) within [Organization Name]. It is designed to ensure the availability, integrity, and confidentiality of critical information assets in alignment with [Organization Name]'s obligations under the **Cyber Security Act 2024 (Act 854)**, specifically **Section 18**, which mandates that NCII sector leads implement measures to protect, detect, and respond to cyber incidents affecting critical systems.

This procedure supports [Organization Name]'s broader business continuity and cyber resilience posture by ensuring that:

- All NCII systems and associated data can be recovered within defined timeframes following a loss of data or system failure.
- Backup and recovery activities are performed consistently, tested regularly, and documented in a manner suitable for regulatory audit.
- Responsibilities for backup operations are clearly assigned and accountable.

---

## 2. Scope

*Define the boundary of applicability — systems, data types, personnel, and any explicit exclusions.*

### 2.1 In Scope

This procedure applies to:

- All information systems, databases, applications, and infrastructure components designated as **NCII assets** by [Organization Name] and listed in the NCII Asset Register.
- All data processed, stored, or transmitted by in-scope systems, including but not limited to:
  - Customer and transaction data
  - Core banking / financial operations data
  - Identity and access management data
  - Security operations and audit log data
  - Configuration and system state data
- All personnel within IT Operations, Security Operations, and any third-party service providers with contractual obligations to perform backup or recovery activities on behalf of [Organization Name].
- Cloud-hosted, on-premises, and hybrid deployments of NCII systems.

### 2.2 Out of Scope

- Non-NCII systems and data classified below **[Insert Classification Threshold, e.g., Internal]** are subject to the general IT backup policy rather than this procedure.
- Employee personal devices unless enrolled in the corporate mobile device management (MDM) system and used to access NCII systems.
- Archived data managed under a separate Records Retention Policy ([Policy ID]).

### 2.3 Geographic Applicability

This procedure applies to all [Organization Name] operations within **Malaysia**. Cross-border data transfer requirements for offshore backup sites are governed by the **Personal Data Protection Act 2010 (PDPA)** and any applicable data residency obligations.

---

## 3. Regulatory and Policy References

*List all applicable laws, regulations, standards, and internal policies. Be specific about the clauses that mandate this procedure.*

| Reference | Document | Relevant Clause / Section |
|---|---|---|
| **Cyber Security Act 2024** | Act 854 | Section 18 — Obligations of NCII sector leads to ensure cyber security of NCII |
| **Cyber Security Act 2024** | Act 854 | Section 25 — Directions by NACSA |
| **NACSA NCII Sector Guidelines** | [Applicable Sector Guidelines] | [Applicable clause on data protection and recovery] |
| **Bank Negara Malaysia — RMiT** | Risk Management in Technology Policy | 10.54–10.60 — Recovery, Backup and Restoration |
| **Personal Data Protection Act 2010** | Act 709 | Section 5 — Data Integrity Principle |
| **ISO/IEC 27001:2022** | Information Security Management | Annex A 8.13 — Information backup |
| **NIST SP 800-34 Rev.1** | Contingency Planning Guide | Section 3.4 — Backup |
| **[Organization Name] Information Security Policy** | [Policy ID] | [Relevant section] |
| **[Organization Name] Business Continuity Policy** | [Policy ID] | [Relevant section] |
| **[Organization Name] IT Asset Management Policy** | [Policy ID] | [Relevant section] |

---

## 4. Definitions and Abbreviations

*Provide clear definitions to ensure consistent interpretation of this procedure across teams.*

| Term / Abbreviation | Definition |
|---|---|
| **NCII** | National Critical Information Infrastructure — infrastructure designated as critical under the Cyber Security Act 2024 |
| **NACSA** | National Cyber Security Agency of Malaysia — the competent authority for cyber security under Act 854 |
| **Backup** | A copy of data or system state taken at a specific point in time for the purpose of recovery |
| **Full Backup** | A complete copy of all selected data and system states at a given point in time |
| **Incremental Backup** | A backup capturing only data changed since the last backup of any type |
| **Differential Backup** | A backup capturing only data changed since the last full backup |
| **RPO** | Recovery Point Objective — the maximum acceptable amount of data loss measured in time |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system or service to operational status |
| **MTTR** | Mean Time To Recover — average time to restore service following failure |
| **Offsite Backup** | A backup copy stored in a geographically separate location from the primary data centre |
| **Air-Gapped / Offline Backup** | A backup that is physically or logically disconnected from all networks, immune to ransomware propagation |
| **Backup Window** | The scheduled period during which backup jobs are executed |
| **Restoration Test** | A controlled exercise to verify that backed-up data can be successfully recovered to a usable state |
| **BCP** | Business Continuity Plan |
| **DRP** | Disaster Recovery Plan |
| **RTO** | Recovery Time Objective |
| **IT Ops** | IT Operations Team |
| **CISO** | Chief Information Security Officer |

---

## 5. Roles and Responsibilities

*Define who is responsible, accountable, consulted, and informed for each major backup and recovery activity.*

### 5.1 RACI Matrix

*Use the RACI matrix below to assign clear ownership. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | IT Operations Lead | System/Application Owner | CISO / Security Team | IT Ops Engineer | Internal Audit | NACSA / Regulator |
|---|---|---|---|---|---|---|
| Define backup schedule and retention policy | A | C | C | R | I | I |
| Execute scheduled backup jobs | A | I | I | R | — | — |
| Monitor backup job completion and alerts | A | I | I | R | — | — |
| Manage offsite and offline backup media | A | I | C | R | I | — |
| Perform backup integrity verification | A | C | C | R | I | — |
| Conduct restoration tests | A | C | C | R | C | — |
| Document restoration test results | A | C | I | R | I | — |
| Initiate incident-driven recovery | A | C | C | R | I | I |
| Approve exceptions and waivers | A | C | A | I | C | — |
| Report backup non-conformance | I | I | A | R | C | I |
| Conduct semi-annual procedure review | A | C | C | R | C | I |

### 5.2 Role Descriptions

**IT Operations Lead**
- Overall accountable owner of this procedure.
- Approves backup schedules, retention periods, and any material changes to backup architecture.
- Escalation point for backup failures that exceed defined thresholds.

**IT Operations Engineer**
- Day-to-day execution of backup and monitoring tasks as specified in this procedure.
- Responsible for maintaining backup logs, incident records, and restoration test evidence.

**System / Application Owner**
- Defines the RPO and RTO requirements for their respective systems in coordination with IT Operations.
- Validates restored data for correctness during restoration tests.

**CISO / Security Team**
- Reviews backup and recovery architecture from a security perspective (encryption, access controls).
- Approves the information security controls applied to backup media and storage.

**Internal Audit**
- Performs periodic independent review of backup compliance against this procedure.
- Reports findings to the Audit Committee and Board Risk Committee.

---

## 6. Backup Schedule and Retention

*Define when backups are taken and how long they are kept. Schedules must reflect RPO requirements and system criticality.*

### 6.1 Backup Schedule

*Populate the table below with the backup schedule for each NCII system. The schedule must be reviewed and approved by the IT Operations Lead each time a new system is onboarded.*

| System / Application | Criticality | Full Backup Frequency | Incremental Frequency | Differential Frequency | Backup Window | Responsible Engineer |
|---|---|---|---|---|---|---|
| [System Name 1] | Critical | Weekly (Sunday 00:00) | Daily (00:00–02:00) | — | 00:00–04:00 | [Name / Role] |
| [System Name 2] | High | Weekly (Saturday 01:00) | Daily (01:00–03:00) | — | 01:00–05:00 | [Name / Role] |
| [System Name 3] | Critical | Weekly (Sunday 02:00) | — | Daily (02:00–04:00) | 02:00–05:00 | [Name / Role] |
| [Database Name 1] | Critical | Weekly | Every 4 hours | — | Rolling | [Name / Role] |
| [Add rows as needed] | | | | | | |

> **Note:** Backup windows must be scheduled during periods of lowest system utilisation. Any conflicts with production operations must be escalated to the IT Operations Lead for resolution.

### 6.2 Retention Schedule

*Define how long backup copies are retained at each tier. Retention must satisfy both operational recovery needs and any regulatory minimum retention requirements.*

| Backup Tier | Retention Period | Storage Location | Media Type | Encryption Required |
|---|---|---|---|---|
| Daily (Incremental / Differential) | 14 days | On-premises / Primary DC | Disk (NAS/SAN) | Yes — AES-256 |
| Weekly (Full Backup) | 3 months | On-premises + Offsite DC | Disk / Tape | Yes — AES-256 |
| Monthly (Full Backup) | 12 months | Offsite / Cloud Vault | Tape / Object Storage | Yes — AES-256 |
| Quarterly (Full Backup) | 3 years | Offline / Air-Gapped | Tape | Yes — AES-256 |
| Annual (Full Backup) | 7 years | Offline / Air-Gapped | Tape | Yes — AES-256 |

> **Regulatory Note:** Retention periods must be reconciled against **PDPA Section 10 (Retention Principle)** and any sector-specific data retention directives issued by BNM or NACSA. Where a longer regulatory retention period applies, it takes precedence.

### 6.3 Backup Job Monitoring

- All backup jobs must be monitored via [Backup Monitoring Tool Name, e.g., Veeam, NetBackup, Commvault].
- Job completion status (Success / Failure / Warning) must be reviewed by the IT Operations Engineer each business day by **[Time, e.g., 08:00 MYT]**.
- Failed or incomplete backup jobs must be logged in the [ITSM Tool Name] incident management system within **[e.g., 2 hours]** of detection and remediated within **[e.g., 24 hours]**.
- A weekly backup status report must be distributed to the IT Operations Lead and system owners.

---

## 7. Backup Types

*Describe each backup type used within the organization, when it is applied, and its specific operational characteristics.*

### 7.1 Full Backup

A full backup captures a complete snapshot of all selected data, systems, and configurations at a single point in time. It is the foundational backup type from which incremental and differential backups are referenced.

**Characteristics:**
- Longest backup window; highest storage consumption.
- Provides the fastest, simplest restoration path — a single backup set contains all required data.
- Performed on a **[weekly / defined]** cycle as specified in Section 6.1.

**Operational requirements:**
- Full backups must be verified for completeness immediately upon completion (see Section 10).
- Full backup media must be clearly labelled with: System Name, Date/Time, Backup Type, Retention Expiry Date.
- A full backup must be completed successfully before the associated incremental or differential cycle begins.

### 7.2 Incremental Backup

An incremental backup captures only data that has changed since the **most recent backup of any type** (full or incremental). It produces the smallest individual backup sets and the fastest backup windows.

**Characteristics:**
- Minimal storage per backup set.
- Restoration requires the last full backup plus **all incremental backups** taken since — increasing restoration complexity.
- Performed on a **daily** basis as specified in Section 6.1.

**Operational requirements:**
- Incremental chains must not exceed **[e.g., 6 days]** before being consolidated into a new full backup.
- Broken incremental chains (e.g., due to a failed backup job) must be escalated immediately; a full backup must be triggered before resuming incremental cycles.

### 7.3 Differential Backup

A differential backup captures all data that has changed since the **last full backup**, regardless of any subsequent differential backups. It represents a middle ground between full and incremental in terms of storage and restoration complexity.

**Characteristics:**
- Grows in size each day until the next full backup.
- Restoration requires only the last full backup plus the **most recent differential backup**.
- Applied to [specify systems] as indicated in Section 6.1.

**Operational requirements:**
- Differential backups that exceed **[e.g., 70%]** of the preceding full backup size must trigger an early full backup cycle.
- Differential backup integrity must be verified following each successful execution.

### 7.4 Snapshot Backups (Where Applicable)

*For virtualized environments or cloud platforms, application-consistent snapshots may supplement the above backup types.*

- VM snapshots and cloud-native snapshots (e.g., AWS EBS Snapshots, Azure Managed Disk Snapshots) may be used as a supplementary rapid-recovery mechanism.
- Snapshots are **not a replacement** for structured full/incremental/differential backups and must not be used as the sole backup for any NCII system.
- Snapshot retention must be configured in accordance with the retention schedule in Section 6.2.

### 7.5 Database Backup Procedures

| Database Type | Backup Method | Transaction Log Backup | Hot/Cold Backup |
|---|---|---|---|
| [e.g., Microsoft SQL Server] | Full + Differential | Every [X] minutes — log shipping | Hot (online) |
| [e.g., Oracle Database] | RMAN Full + Archivelog | Continuous archiving | Hot (online) |
| [e.g., PostgreSQL] | pg_dump / pgBackRest | WAL archiving | Hot (online) |
| [Add as applicable] | | | |

---

## 8. Offsite and Offline Backup Requirements

*NCII systems require backup copies that are geographically and/or logically separated from primary systems to ensure recovery is possible even if the primary data centre is destroyed or compromised.*

### 8.1 Offsite Backup Requirements

An offsite backup is a copy of backup data stored in a facility that is physically separate from the primary data centre. The purpose is to ensure recoverability in the event of a site-level disaster (fire, flood, physical destruction).

**Requirements:**

- At least **one (1) copy** of each weekly full backup and each monthly full backup must be stored offsite.
- The offsite storage facility must be located at a minimum distance of **[e.g., 50 km]** from the primary data centre, in a different flood zone and seismic zone where practical.
- The offsite facility must be: [Select applicable]
  - Operated by [Organization Name] (secondary/DR data centre), **or**
  - A contracted third-party colocation facility, subject to the requirements of Section 8.3.

**Offsite Locations:**

| Backup Copy | Primary Location | Offsite Location | Transfer Method | Transfer Frequency |
|---|---|---|---|---|
| Weekly Full Backup | [Primary DC Name, e.g., KL DC] | [DR DC Name / Offsite Facility] | Encrypted Replication / Physical Media | Weekly |
| Monthly Full Backup | [Primary DC Name] | [Offsite Facility / Cloud Vault] | Encrypted Replication / Physical Courier | Monthly |
| [Add as needed] | | | | |

### 8.2 Offline / Air-Gapped Backup Requirements

An offline (air-gapped) backup is a copy that is physically disconnected from all networks and therefore cannot be reached by ransomware, malware, or remote attackers. This is a mandatory control for NCII systems.

**Requirements:**

- At least **one (1) air-gapped backup copy** must exist for each NCII system, covering at minimum the **most recent successful full backup**.
- Air-gapped backups must be stored on physical media (magnetic tape, removable disk) that is **disconnected and stored in a secure, access-controlled facility** when not in active use.
- Air-gapped media must not be connected to any network or system except during controlled backup write or restoration operations.
- Air-gapped backups must be produced at a minimum frequency of **[e.g., monthly]**.

**Air-Gapped Media Controls:**

| Control | Requirement |
|---|---|
| Physical storage | Locked, fire-resistant media safe or off-site vault |
| Access | Dual-person authorisation required to access air-gapped media |
| Media encryption | AES-256 encryption; encryption keys stored separately from media |
| Media labelling | System, Date, Retention Expiry, Classification |
| Media tracking | Maintained in the [Media Tracking Register / ITSM Asset Module] |
| Media degaussing / destruction | Upon expiry of retention period, per media disposal procedure [Ref. Policy ID] |

### 8.3 Third-Party and Cloud Backup Provider Requirements

Where backup storage is provided by a third-party or cloud service provider:

- The provider must be contractually bound to security requirements equivalent to or exceeding those in this procedure.
- Data must be encrypted **in transit** (TLS 1.2 minimum) and **at rest** (AES-256) using keys managed by [Organization Name] (customer-managed keys where available).
- The provider must be located within **Malaysia** or in a jurisdiction approved under PDPA data transfer provisions, with written approval from the CISO and Legal/Compliance.
- The provider must allow [Organization Name] to conduct or commission independent audit of backup storage security controls.
- Service Level Agreements (SLAs) with the provider must be aligned with the RTO/RPO requirements defined in Section 9.

---

## 9. Recovery Point and Time Objectives

*RPO and RTO define the boundaries within which recovery must occur. These targets must be validated against business impact analysis outcomes and approved by system owners and senior management.*

### 9.1 Recovery Point Objective (RPO)

The RPO defines the maximum age of data that must be recovered in the event of a failure — i.e., the maximum tolerable data loss measured in time.

*Review the RPO targets below and update based on your organisation's Business Impact Analysis (BIA). Targets must be signed off by system owners and the IT Operations Lead.*

| System / Service | Business Criticality | Defined RPO | Backup Mechanism to Achieve RPO |
|---|---|---|---|
| [Core Banking System] | Critical | 15 minutes | Transaction log backup every 15 mins + real-time replication |
| [Payment Gateway] | Critical | 15 minutes | Transaction log backup every 15 mins |
| [Customer Data Platform] | High | 4 hours | Daily incremental + transaction logs |
| [Internal HRMS] | Medium | 24 hours | Daily incremental backup |
| [Email / Collaboration] | Medium | 24 hours | Daily backup |
| [Security Operations / SIEM] | High | 4 hours | Daily incremental + log archival |
| [Add as needed] | | | |

### 9.2 Recovery Time Objective (RTO)

The RTO defines the maximum period within which a system or service must be restored to operational status following an incident.

| System / Service | Business Criticality | Defined RTO | Recovery Strategy |
|---|---|---|---|
| [Core Banking System] | Critical | 4 hours | Hot standby / failover to DR site |
| [Payment Gateway] | Critical | 2 hours | Active-active replication with automatic failover |
| [Customer Data Platform] | High | 8 hours | Restore from offsite backup to DR infrastructure |
| [Internal HRMS] | Medium | 24 hours | Restore from daily backup |
| [Email / Collaboration] | Medium | 24 hours | Restore from cloud backup |
| [Security Operations / SIEM] | High | 8 hours | Restore from offsite backup |
| [Add as needed] | | | |

### 9.3 RTO/RPO Review Process

- RPO and RTO targets must be reviewed annually as part of the Business Impact Analysis cycle and whenever a material change occurs to a covered system.
- Any proposed relaxation of RPO or RTO targets requires written approval from the **System Owner**, **IT Operations Lead**, and **CISO**.
- RTO/RPO targets must be incorporated into Disaster Recovery Plans and tested during restoration exercises (see Section 11).

---

## 10. Backup Integrity Verification

*Verifying backup integrity ensures that backup data is complete, uncorrupted, and restorable before it is actually needed in an emergency.*

### 10.1 Automated Integrity Checks

The following automated checks must be performed as a standard component of all backup jobs:

| Verification Type | Method | Frequency | Responsibility |
|---|---|---|---|
| Checksum / Hash Verification | SHA-256 hash comparison of source vs. backup | Every backup job | Backup tool (automated) |
| Backup Job Completion Status | Automated job exit code review | Every backup job | IT Ops Engineer |
| File Count Verification | Compare source file count vs. backup set | Every backup job | Backup tool (automated) |
| Backup Size Plausibility Check | Alert if backup size deviates by > [e.g., 20%] from baseline | Every backup job | Backup monitoring tool |

### 10.2 Manual Integrity Verification

In addition to automated checks, the following manual verification activities must be performed:

| Activity | Frequency | Method | Responsibility |
|---|---|---|---|
| Spot-check backup set readability | Monthly | Mount backup set and verify file accessibility | IT Ops Engineer |
| Verify encryption key availability | Monthly | Confirm decryption keys are accessible from secure key store | IT Ops Engineer + CISO |
| Audit backup logs for anomalies | Monthly | Review backup job logs for warnings, errors, or gaps | IT Ops Lead |
| Offsite media receipt confirmation | Each transfer | Confirm receipt and integrity with offsite facility | IT Ops Engineer |
| Air-gapped media condition check | Quarterly | Physical inspection and readability test | IT Ops Lead |

### 10.3 Integrity Failure Response

If a backup integrity check fails:

1. **Immediately** log the failure as an incident in [ITSM Tool Name] with severity **[High / Critical based on system criticality]**.
2. Determine the cause: hardware failure, software corruption, storage issue, or process error.
3. If the current backup is corrupted, retain the most recent verified good backup until the issue is resolved.
4. Trigger an out-of-schedule backup once the root cause is resolved and verified.
5. Document findings and corrective actions in the incident record.
6. Escalate to IT Operations Lead if the root cause cannot be resolved within **[e.g., 4 hours]**.

---

## 11. Restoration Testing

*Regular restoration testing validates that backups are genuinely usable and that recovery procedures work as expected. Testing must simulate realistic recovery scenarios.*

### 11.1 Testing Requirements

Restoration tests must be conducted at the following minimum frequencies:

| Test Type | Scope | Frequency | Responsible |
|---|---|---|---|
| File-level restore test | Sample files from each NCII system | Monthly | IT Ops Engineer |
| Full system restore test (non-production) | At least one NCII system per test | Quarterly | IT Ops Engineer + System Owner |
| Offsite backup restore test | Restore from offsite copy to DR environment | Semi-annual | IT Ops Lead + IT Ops Engineer |
| Air-gapped media restore test | Full restore from offline media | Annual | IT Ops Lead + IT Ops Engineer |
| DR Drill (integrated BCP/DRP test) | All critical NCII systems | Annual | IT Ops Lead + CISO + System Owners |

### 11.2 Restoration Test Procedure

Each restoration test must follow this procedure:

**Step 1 — Planning**
- Identify the system(s) and data set to be restored.
- Confirm availability of test environment (non-production) with sufficient capacity.
- Notify relevant system owners and obtain change approval via [Change Management Tool / Process].
- Record planned test scope, date, time, and participants in the Restoration Test Plan (Appendix A).

**Step 2 — Execution**
- Retrieve the designated backup set from storage (on-premises, offsite, or offline as applicable).
- Initiate restoration to the designated test environment.
- Record start time, backup set ID, and restoration parameters.

**Step 3 — Validation**
- Verify system or application starts and operates correctly.
- System/Application Owner validates data accuracy against a known baseline.
- Confirm restoration was completed within the defined RTO.
- Confirm data loss does not exceed the defined RPO.

**Step 4 — Documentation**
- Complete the Restoration Test Report (Appendix B) recording: test date, backup set used, systems restored, RTO achieved, RPO achieved, issues encountered, and corrective actions.
- Obtain sign-off from System Owner and IT Operations Lead.
- File the Restoration Test Report in [Document Management System / Shared Location].

**Step 5 — Lessons Learned**
- Conduct a brief debrief to identify any gaps, delays, or failures.
- Update this procedure if the test reveals deficiencies.
- Log any identified remediation actions in [ITSM Tool Name].

### 11.3 Test Acceptance Criteria

A restoration test is considered **successful** when all of the following conditions are met:

- [ ] Restoration completed within the defined RTO for the system under test.
- [ ] Recovered data reflects the state at or after the defined RPO boundary.
- [ ] System/Application Owner confirms data integrity and functional correctness.
- [ ] No manual intervention was required beyond documented procedures.
- [ ] No data loss beyond the accepted RPO was observed.

A test that does not meet all acceptance criteria must be treated as a **failed test**, the root cause investigated, remediated, and the test repeated within **[e.g., 30 days]**.

---

## 12. Incident-Driven Recovery Procedures

*This section describes the steps to be followed when a recovery is required due to a real incident, as opposed to a planned test.*

### 12.1 Recovery Trigger Conditions

Recovery procedures must be initiated when one or more of the following conditions are met:

- Data corruption or loss is confirmed or suspected on an NCII system.
- A ransomware or destructive malware attack affects NCII data or systems.
- Hardware failure results in data unavailability.
- A cyber incident (as defined under the Cyber Security Act 2024) impacts the integrity or availability of NCII systems.
- A recovery is directed by NACSA under Section 25 of Act 854.

### 12.2 Recovery Initiation Procedure

| Step | Action | Responsible | Timeframe |
|---|---|---|---|
| 1 | Confirm and classify the incident via [ITSM Tool] | IT Ops Engineer | Immediately upon detection |
| 2 | Notify IT Operations Lead and CISO | IT Ops Engineer | Within 30 minutes |
| 3 | Activate Incident Response Plan ([IR Plan Reference]) | CISO | As directed |
| 4 | Isolate affected systems to prevent further damage | IT Ops Engineer | Immediately |
| 5 | Identify most recent clean, verified backup set | IT Ops Engineer | Within 1 hour |
| 6 | Obtain recovery authorisation from IT Operations Lead | IT Ops Lead | Before recovery begins |
| 7 | Prepare recovery environment (DR site / clean systems) | IT Ops Engineer | Per DRP |
| 8 | Execute restoration from verified backup | IT Ops Engineer | Per RTO |
| 9 | Validate restored data with System Owner | System Owner | Post-restoration |
| 10 | Confirm systems returned to production | IT Ops Lead + System Owner | After validation |
| 11 | Report incident and recovery to NACSA if required under Act 854 | CISO | Per reporting obligation |
| 12 | Complete post-incident review and update procedure if required | IT Ops Lead | Within 14 days of closure |

### 12.3 NACSA Reporting Obligations

Where a cyber incident affecting NCII systems results in data loss or system unavailability, [Organization Name] must notify NACSA in accordance with:
- **Section 18, Cyber Security Act 2024** — obligation to report cyber security incidents affecting NCII.
- [Insert NACSA notification timeframe and method as specified in applicable NCII Sector Guidelines].

Reporting to NACSA does not override parallel obligations to notify **Bank Negara Malaysia** under applicable BNM policies or to notify data subjects under the **PDPA** where personal data has been compromised.

---

## 13. Reporting and Escalation

*Define the reporting cadence and escalation paths for backup and recovery activities.*

### 13.1 Regular Reporting

| Report | Content | Frequency | Audience |
|---|---|---|---|
| Daily Backup Status Report | Job completion summary, failures, and remediation | Daily (Business Days) | IT Ops Lead |
| Monthly Backup Compliance Report | Backup success rates, integrity check results, open incidents | Monthly | IT Ops Lead, CISO |
| Restoration Test Report | Results of each restoration test (see Section 11) | Per test | IT Ops Lead, System Owner, Internal Audit |
| Semi-Annual Procedure Review Report | Findings from procedure review, proposed changes | Semi-annual | CISO, Risk Committee |
| Annual DR Drill Report | Full test outcomes, RTO/RPO achievement, remediation | Annual | Board / Senior Management, CISO |

### 13.2 Escalation Matrix

| Condition | Escalate To | Timeframe |
|---|---|---|
| Backup job failure on any NCII system | IT Operations Lead | Within 2 hours |
| Backup integrity failure | IT Operations Lead + CISO | Immediately |
| Consecutive failed backups (≥ 2 days) | CISO | Within 4 hours of second failure |
| Failure to achieve RTO during restoration | IT Operations Lead + CISO + Senior Management | Immediately |
| Ransomware or destructive attack confirmed | CISO + Incident Response Team | Immediately — activate IRP |
| Regulatory reporting trigger confirmed | CISO + Legal/Compliance | Per reporting timeline |

---

## 14. Exceptions and Waivers

*Describe the process for granting exceptions to the requirements of this procedure.*

### 14.1 Exception Process

Where strict compliance with this procedure is not technically feasible or operationally practical for a specific system, an exception may be requested using the following process:

1. The requesting party (System Owner or IT Operations Engineer) completes the **Exception Request Form** ([Form ID]) documenting:
   - The specific requirement that cannot be met.
   - The reason(s) for non-compliance.
   - The risk assessment associated with the exception.
   - Proposed compensating controls to mitigate the risk.
   - Requested exception duration (maximum **[e.g., 6 months]**).

2. The exception request is reviewed and approved by:
   - **IT Operations Lead** — operational feasibility.
   - **CISO** — security risk acceptance.
   - **Risk Committee** — for exceptions affecting NCII systems.

3. Approved exceptions are logged in the **Exception Register** ([Location / ITSM Module]) and reviewed at each semi-annual procedure review.

4. Exceptions must not be renewed indefinitely. If a control gap cannot be remediated within **12 months**, it must be escalated to the Board Risk Committee.

### 14.2 Exceptions Log

| Exception ID | System | Requirement Excepted | Compensating Control | Approved By | Expiry Date | Status |
|---|---|---|---|---|---|---|
| [EX-001] | [System Name] | [Requirement] | [Compensating Control] | [Approver] | [Date] | [Active / Expired] |

---

## 15. Review and Approval

### 15.1 Review Cycle

This procedure must be reviewed:
- Every **six (6) months** from the last review date.
- Following any material change to NCII systems covered by this procedure.
- Following any cyber incident that exposes gaps in backup or recovery capability.
- Upon issuance of new or revised guidance by NACSA or BNM that affects backup requirements.
- Following any restoration test that reveals a significant deficiency.

### 15.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], IT Operations | Initial version — approved for release |
| [1.1] | [Date] | [Author Name] | [Describe changes] |
| [2.0] | [Date] | [Author Name] | [Describe changes] |

### 15.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Lead | [Name] | _________________ | [Date] |
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Chief Technology Officer / Head of IT | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| Head of Internal Audit (Endorsement) | [Name] | _________________ | [Date] |

---

## 16. References

| # | Document / Standard | Issuing Body | Clause / Section | Relevance |
|---|---|---|---|---|
| 1 | Cyber Security Act 2024 (Act 854) | Parliament of Malaysia / NACSA | Section 18 | Primary legal obligation for NCII backup and recovery |
| 2 | Cyber Security Act 2024 (Act 854) | Parliament of Malaysia / NACSA | Section 25 | NACSA directions to NCII sector leads |
| 3 | NCII Sector Guidelines — [Applicable Sector] | NACSA | [Applicable clause] | Sector-specific backup and recovery requirements |
| 4 | Risk Management in Technology (RMiT) | Bank Negara Malaysia | 10.54–10.60 | Technology recovery, backup and restoration requirements |
| 5 | Personal Data Protection Act 2010 (Act 709) | Parliament of Malaysia | Sections 5, 10 | Data integrity and retention obligations |
| 6 | ISO/IEC 27001:2022 | ISO/IEC | Annex A, Control 8.13 | Information backup |
| 7 | NIST SP 800-34 Rev.1 | NIST | Section 3.4 | Contingency planning — backup |
| 8 | NIST SP 800-209 | NIST | Section 4 | Security guidelines for storage infrastructure |
| 9 | [Organization Name] Information Security Policy | [Organization Name] | [Relevant Section] | Overarching security requirements |
| 10 | [Organization Name] Business Continuity Policy | [Organization Name] | [Relevant Section] | BCP/DRP alignment |
| 11 | [Organization Name] Incident Response Plan | [Organization Name] | [Relevant Section] | Incident-driven recovery triggers |
| 12 | [Organization Name] Data Classification Policy | [Organization Name] | [Relevant Section] | Data sensitivity and handling |

---

## 17. Appendices

### Appendix A — Restoration Test Plan Template

*Complete this form before each restoration test and obtain pre-approval from the IT Operations Lead.*

| Field | Details |
|---|---|
| **Test ID** | [RT-YYYY-NNN] |
| **Test Date** | [Date] |
| **System Under Test** | [System Name] |
| **Backup Set to Be Restored** | [Backup Set ID / Date] |
| **Backup Type** | [Full / Incremental / Differential] |
| **Backup Storage Location** | [On-premises / Offsite / Offline] |
| **Test Environment** | [DR Site / Dev Server / Other — confirm non-production] |
| **Test Scope** | [File-level / Full system / Database / Application] |
| **RTO Target** | [e.g., 4 hours] |
| **RPO Target** | [e.g., 4 hours] |
| **Test Lead** | [Name, Role] |
| **System Owner Participant** | [Name, Role] |
| **Change Request Reference** | [CR-XXXXXX] |
| **Pre-Approval** | [IT Ops Lead Name, Signature, Date] |

---

### Appendix B — Restoration Test Report Template

*Complete this form after each restoration test is concluded. File in [Document Management Location].*

| Field | Details |
|---|---|
| **Test ID** | [RT-YYYY-NNN] |
| **Test Date** | [Date] |
| **System Tested** | [System Name] |
| **Backup Set Used** | [Backup Set ID / Date] |
| **Restoration Start Time** | [HH:MM MYT] |
| **Restoration Completion Time** | [HH:MM MYT] |
| **Actual RTO Achieved** | [Duration] |
| **RTO Target Met?** | [ ] Yes &nbsp; [ ] No |
| **Actual RPO Achieved** | [Duration / data age] |
| **RPO Target Met?** | [ ] Yes &nbsp; [ ] No |
| **Data Integrity Confirmed by System Owner?** | [ ] Yes &nbsp; [ ] No |
| **Issues Encountered** | [Describe any failures, delays, or anomalies] |
| **Corrective Actions Required** | [List actions, owner, due date] |
| **Overall Test Result** | [ ] Pass &nbsp; [ ] Fail |
| **Test Lead Signature** | _________________ Date: [Date] |
| **System Owner Signature** | _________________ Date: [Date] |
| **IT Operations Lead Signature** | _________________ Date: [Date] |

---

### Appendix C — Backup Job Failure Incident Record Template

*Use this template when logging a backup job failure in [ITSM Tool Name].*

| Field | Details |
|---|---|
| **Incident ID** | [INC-XXXXXXXX] |
| **Date / Time Detected** | [YYYY-MM-DD HH:MM MYT] |
| **System Affected** | [System Name] |
| **Backup Job Reference** | [Job ID / Schedule Name] |
| **Backup Type** | [Full / Incremental / Differential] |
| **Failure Description** | [Error message / description] |
| **Root Cause** | [Hardware / Software / Configuration / Network / Other] |
| **Last Successful Backup** | [Date and Time of last verified good backup] |
| **Impact Assessment** | [Data at risk, RPO gap created] |
| **Immediate Actions Taken** | [Describe] |
| **Remediation Plan** | [Steps, owner, target completion time] |
| **Out-of-Schedule Backup Triggered?** | [ ] Yes — Date/Time: [Date] &nbsp; [ ] No — Reason: [Reason] |
| **Incident Closed Date** | [Date] |
| **Closed By** | [Name, Role] |

---

### Appendix D — Backup Media Tracking Register

*Maintain this register for all physical backup media (tapes, removable drives) in [Media Management System / Shared Spreadsheet Location].*

| Media ID | Type | System Backed Up | Backup Date | Retention Expiry | Location | Encryption Key Reference | Last Verified | Status |
|---|---|---|---|---|---|---|---|---|
| [TAPE-001] | LTO Tape | [System Name] | [Date] | [Date] | [Offsite Vault / Safe] | [Key ID in Vault] | [Date] | [Active / Expired / Destroyed] |
| [TAPE-002] | LTO Tape | [System Name] | [Date] | [Date] | [Location] | [Key ID] | [Date] | [Active] |
| [Add rows as needed] | | | | | | | | |

---

### Appendix E — Glossary of Backup Tools and Technologies

*Document the specific tools and technologies used within [Organization Name] for backup and recovery. Update as tooling changes.*

| Tool / Technology | Version | Purpose | Vendor | Support Contact |
|---|---|---|---|---|
| [e.g., Veeam Backup & Replication] | [Version] | VM and workload backup | [Vendor] | [Contact / Reference] |
| [e.g., NetBackup] | [Version] | Enterprise backup orchestration | [Vendor] | [Contact / Reference] |
| [e.g., AWS Backup] | [N/A — cloud] | Cloud workload backup | Amazon Web Services | [Reference] |
| [e.g., Tape Library Model] | [Model] | Physical tape backup media | [Vendor] | [Contact / Reference] |
| [Add as applicable] | | | | |

---

### Appendix F — NCII System Inventory Reference

*This appendix cross-references the NCII Asset Register. Do not reproduce the full asset register here; instead, maintain a pointer to the authoritative source.*

The definitive list of NCII systems covered by this procedure is maintained in the:

- **NCII Asset Register** — Location: [Document Management System Path / SharePoint URL]
- **Document ID:** [Asset Register Document ID]
- **Owner:** [Asset Register Owner, e.g., IT Asset Management]
- **Last Updated:** [Date]

All additions or removals of NCII systems must trigger a review of this procedure to ensure backup schedules and retention requirements are updated accordingly.

---

*End of Document*

---

**Document ID:** [Document ID] &nbsp;|&nbsp; **Version:** 1.0 &nbsp;|&nbsp; **Classification:** Confidential &nbsp;|&nbsp; **Owner:** IT Operations &nbsp;|&nbsp; **Next Review:** [Next Review Date]