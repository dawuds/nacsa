# Backup Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | IT Operations |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [3-2-1 Backup Rule](#4-3-2-1-backup-rule)
5. [Immutable Backup Requirements](#5-immutable-backup-requirements)
6. [Backup Encryption Standards](#6-backup-encryption-standards)
7. [Air-Gapped Backup Copies](#7-air-gapped-backup-copies)
8. [Restoration Testing Frequency](#8-restoration-testing-frequency)
9. [Backup Monitoring and Alerting](#9-backup-monitoring-and-alerting)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Non-Compliance and Exceptions](#11-non-compliance-and-exceptions)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Backup Standard establishes the minimum technical requirements for backup systems that protect National Critical Information Infrastructure (NCII) data and configurations at [Organization Name]. It defines mandatory controls governing the creation, storage, protection, encryption, and verification of backup copies to ensure the resilience, integrity, and recoverability of critical digital assets.

This Standard supports [Organization Name]'s obligations under the **Cyber Security Act 2024 (Act 854)**, specifically Section 18, which places duties on NCII entity owners to implement appropriate cyber security measures to protect national critical information infrastructure. The controls in this Standard are designed to ensure that backup capabilities can withstand ransomware, destructive malware, insider threats, and infrastructure failures while enabling timely service restoration.

### 1.2 Scope

This Standard applies to:

- All NCII systems, applications, and data assets owned or operated by [Organization Name]
- All production databases, application configurations, system images, and cryptographic key material classified as critical or sensitive
- All personnel, contractors, and third-party service providers who design, operate, or maintain backup systems on behalf of [Organization Name]
- On-premises, cloud-hosted, co-located, and hybrid backup environments under [Organization Name]'s operational control

### 1.3 Out of Scope

The following are explicitly excluded from this Standard:

- Development and test environment data that does not contain production NCII data or sensitive personal data
- Non-critical archival systems not designated as NCII
- Backup systems governed exclusively by a separate contractual arrangement with an approved third-party NCII entity, provided equivalent controls are formally documented and auditable

---

## 2. Regulatory Context

*This section maps the Standard to its governing regulatory and policy framework. Authors should confirm that all cited clauses reflect the current version of each instrument and update cross-references when amendments are issued.*

### 2.1 Primary Regulatory Obligation

| Instrument | Section / Clause | Obligation Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Duty of NCII entity owners to comply with cyber security measures, including data protection and system resilience requirements as directed by NACSA |
| Cyber Security Act 2024 (Act 854) | Section 18(1)(a) | Implementation of risk-appropriate technical and organisational measures to protect NCII |
| Cyber Security Act 2024 (Act 854) | Section 18(1)(b) | Compliance with Cyber Security Standards issued by the National Cyber Security Agency (NACSA) |

### 2.2 Supporting Regulatory and Policy Context

| Instrument | Section / Clause | Relevance |
|---|---|---|
| Personal Data Protection Act 2010 (Act 709) | Section 9 | Security principle: protection of personal data against loss, misuse, and unauthorised access |
| Bank Negara Malaysia – Risk Management in Technology (RMiT) | 10.49–10.53 | Backup and recovery requirements for financial institutions (if applicable) |
| ISO/IEC 27001:2022 | Annex A 8.13 | Information backup controls |
| NIST SP 800-34 Rev. 1 | Section 3.4 | Contingency planning: backup procedures |
| [Organization Name] Information Security Policy | [Section Reference] | Overarching information security governance framework |
| [Organization Name] Business Continuity Policy | [Section Reference] | Recovery objectives and continuity requirements |

---

## 3. Definitions and Abbreviations

*Define all technical terms used in this Standard to ensure consistent interpretation by all stakeholders. Align definitions with NACSA guidance and industry standards where possible.*

| Term / Abbreviation | Definition |
|---|---|
| **Air-Gapped Backup** | A backup copy maintained in physical or logical isolation from all production and primary backup networks, preventing reachability via any network path |
| **Backup** | A copy of data or system configuration retained for the purpose of restoration following loss, corruption, or destruction of the primary copy |
| **Immutable Backup** | A backup copy stored in a write-once format such that the data cannot be modified, encrypted, or deleted for a defined retention period, including by privileged administrators |
| **NCII** | National Critical Information Infrastructure — information infrastructure designated under the Cyber Security Act 2024 whose disruption would have a significant impact on national security, the economy, public health, or safety |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **RTO** | Recovery Time Objective — the maximum acceptable time to restore a system or service following a disruption |
| **RPO** | Recovery Point Objective — the maximum acceptable data loss measured in time between the last backup and a disruption event |
| **3-2-1 Rule** | A backup strategy requiring three copies of data, stored on two different media types, with one copy maintained off-site |
| **WORM** | Write Once, Read Many — a storage technology or software policy that prevents overwriting or deletion of stored data |
| **Encryption at Rest** | The encryption of data stored on a physical or logical medium to prevent unauthorised access if the medium is compromised |
| **Encryption in Transit** | The encryption of data while it is being transmitted across a network to prevent interception |
| **Full Backup** | A complete copy of all designated data and configuration at a specific point in time |
| **Incremental Backup** | A backup containing only data that has changed since the last backup of any type |
| **Differential Backup** | A backup containing only data that has changed since the last full backup |

---

## 4. 3-2-1 Backup Rule

*This section defines [Organization Name]'s mandatory implementation of the 3-2-1 backup strategy. Authors should specify the precise media types, storage locations, and data classification tiers to which each copy requirement applies.*

### 4.1 Overview

[Organization Name] shall implement the 3-2-1 backup rule as a minimum baseline for all NCII data and system configurations. This rule requires:

- **3** — Three (3) total copies of data must exist at all times (one primary and two backups)
- **2** — Two (2) different storage media or technology types must be used to mitigate media-specific failure modes
- **1** — One (1) copy must be maintained at a geographically separate off-site location

### 4.2 Backup Copy Requirements by Data Classification

| Classification | Primary Copy | Second Copy (Different Media) | Off-Site Copy | Minimum Retention |
|---|---|---|---|---|
| NCII — Critical | [Production Environment] | [On-premises NAS / tape / object storage] | [Off-site facility or approved cloud region] | [e.g., 12 months] |
| NCII — High | [Production Environment] | [On-premises backup appliance] | [Off-site facility or approved cloud region] | [e.g., 6 months] |
| NCII — Standard | [Production Environment] | [On-premises backup target] | [Off-site or secondary data centre] | [e.g., 3 months] |
| Configuration & Secrets | [Version control / secrets vault] | [Encrypted backup appliance] | [Air-gapped storage] | [e.g., 24 months] |

### 4.3 Backup Schedule Requirements

| Backup Type | Minimum Frequency | Target Systems | Retention Period |
|---|---|---|---|
| Full Backup | [e.g., Weekly] | All NCII-classified systems | [e.g., 12 months] |
| Incremental Backup | [e.g., Daily] | All NCII-classified systems | [e.g., 30 days] |
| Differential Backup | [e.g., Daily or as required] | [Specify systems] | [e.g., 14 days] |
| Configuration Snapshot | [e.g., After every change] | Network devices, security appliances, servers | [e.g., 24 months] |
| Database Transaction Log | [e.g., Every 15–60 minutes] | Production databases | [e.g., 30 days] |

### 4.4 Off-Site Location Requirements

- The off-site backup location shall be a minimum of [e.g., 50 km] from the primary data centre to mitigate regional disaster scenarios
- Off-site facilities must hold, at minimum, the following certifications: [e.g., Tier III, ISO 27001, or MCMC-licensed data centre]
- Approved off-site locations:

| Location Name | Type | Address | Distance from Primary DC | Certifications |
|---|---|---|---|---|
| [Location 1] | [Physical / Cloud] | [Address or Region] | [km] | [Certifications held] |
| [Location 2] | [Physical / Cloud] | [Address or Region] | [km] | [Certifications held] |

---

## 5. Immutable Backup Requirements

*This section specifies the mandatory use of immutable storage for backup copies protecting NCII data. Authors should identify specific storage technologies in use and the retention lock periods applied to each data tier.*

### 5.1 Mandatory Immutability Requirement

All backup copies designated as the primary off-site or air-gapped copy for NCII-classified data **shall** be stored in an immutable format. Immutability must prevent modification, encryption, or deletion by any user, process, or automated system — including accounts with administrative or root privileges — for the duration of the defined retention lock period.

### 5.2 Approved Immutability Technologies

| Technology / Mechanism | Type | Applicable Backup Tier | Notes |
|---|---|---|---|
| [e.g., Object Lock — Compliance Mode (AWS S3 / MinIO)] | Software-enforced WORM | Off-site cloud copy | Governance mode is NOT sufficient for NCII |
| [e.g., NetApp SnapLock Compliance] | Hardware/software WORM | On-premises secondary copy | Requires dedicated SnapLock volume |
| [e.g., Dell PowerProtect — Retention Lock] | Software-enforced WORM | On-premises backup appliance | [Notes] |
| [e.g., Physical WORM tape (LTO-7+)] | Hardware WORM | Air-gapped copy | Cartridge physically write-locked after write |
| [Other Approved Technology] | [Type] | [Tier] | [Notes] |

### 5.3 Retention Lock Periods

| Data Classification | Minimum Immutable Retention Period | Justification |
|---|---|---|
| NCII — Critical | [e.g., 12 months] | Regulatory obligation and ransomware recovery window |
| NCII — High | [e.g., 6 months] | Operational recovery and incident investigation |
| NCII — Standard | [e.g., 90 days] | Operational recovery baseline |
| Audit Logs and Security Events | [e.g., 24 months] | Regulatory investigation and forensic preservation |

### 5.4 Immutability Verification

- Immutability settings shall be verified at the time of backup job creation and documented in the backup solution's configuration record
- Immutability status shall be included in monthly backup health reports reviewed by [Role, e.g., IT Operations Manager]
- Any attempt to modify or delete a retention-locked backup must generate an alert and be logged as a security event in [Organization Name]'s SIEM platform
- Annual audits shall include validation that no immutable backup copies were deleted or unlocked without formal authorisation through the Change Management process

---

## 6. Backup Encryption Standards

*This section defines the cryptographic requirements for protecting backup data at rest and in transit. Authors should confirm that selected algorithms align with the current NACSA Cryptography Standard and [Organization Name]'s cryptographic policy.*

### 6.1 Encryption at Rest

All backup copies, regardless of storage location or media type, **shall** be encrypted at rest using the following minimum standards:

| Requirement | Standard |
|---|---|
| **Encryption Algorithm** | AES-256 (Advanced Encryption Standard, 256-bit key) |
| **Mode of Operation** | GCM (Galois/Counter Mode) preferred; CBC with HMAC acceptable |
| **Key Length** | Minimum 256-bit symmetric keys |
| **Key Management System** | [e.g., HashiCorp Vault / AWS KMS / Azure Key Vault / HSM-backed solution] |
| **Key Rotation Frequency** | Minimum annual rotation; immediately upon suspected compromise |
| **Key Escrow** | Backup encryption keys shall be escrowed in [KMS/Vault name] with restricted access |

### 6.2 Encryption in Transit

All backup data transmitted across any network — including internal LAN, WAN, and cloud connectivity — **shall** be encrypted in transit:

| Requirement | Standard |
|---|---|
| **Transport Protocol** | TLS 1.2 minimum; TLS 1.3 preferred |
| **Deprecated Protocols** | SSL 2.0, SSL 3.0, TLS 1.0, TLS 1.1 are strictly prohibited |
| **Certificate Authority** | [e.g., Internal PKI / Approved commercial CA] |
| **Certificate Validity** | Maximum [e.g., 2 years]; automated renewal required where available |

### 6.3 Key Management Requirements

- Backup encryption keys **shall not** be stored on the same system as the backup data they protect
- Key access shall follow the principle of least privilege; a minimum of two (2) authorised personnel are required to access master encryption keys (dual-control)
- Key material shall be backed up separately from the data it encrypts and stored in a dedicated key management store
- Loss of encryption keys is treated as equivalent to data loss; key recovery procedures shall be documented and tested annually

### 6.4 Encryption Coverage Verification

- Backup solution administrators shall verify encryption is enabled for all backup jobs at initial configuration and after any system upgrade or reconfiguration
- Monthly backup health reports shall confirm that no unencrypted backup copies exist for NCII-classified assets
- Any discovery of unencrypted backup data for NCII assets shall be treated as a security incident and reported per [Organization Name]'s Incident Response Procedure

---

## 7. Air-Gapped Backup Copies

*This section establishes requirements for air-gapped backup copies, which provide the last line of defence against ransomware and destructive attacks. Authors should describe the physical or logical isolation mechanisms in place and the operational procedures for accessing air-gapped media.*

### 7.1 Air-Gap Requirement

[Organization Name] **shall** maintain at least one (1) backup copy for all NCII-critical systems in a state of complete network isolation (air-gapped). An air-gapped copy is defined as a backup that:

- Has no active network connection to any production, backup replication, or management network
- Cannot be reached or modified by any user or automated system over a network path
- Is physically or logically isolated in a manner that survives a total compromise of the primary and secondary network environments

### 7.2 Approved Air-Gap Mechanisms

| Mechanism | Description | Applicable Use Case |
|---|---|---|
| **Physical Tape / Removable Media** | Backup written to LTO tape or external drive, physically ejected and stored in a secured location | Primary air-gap method for NCII-critical data |
| **Logical Air-Gap (Vault)** | Backup replication to an isolated vault environment with scheduled, time-limited network connectivity (e.g., 1–2 hours per day) | Secondary method where physical tape is not operationally feasible |
| **Offline Object Storage** | Backup data written to object storage in a separate, isolated account or tenant with no inbound replication or internet routing | Cloud-native environments |

> **Note:** Logical air-gap solutions must enforce a network-disconnected state for a minimum of [e.g., 22 hours per day]. Time-limited connectivity windows shall be strictly controlled and logged.

### 7.3 Physical Storage Requirements for Air-Gapped Media

| Requirement | Control |
|---|---|
| **Storage Location** | [e.g., Fireproof safe / locked media cabinet / NCII-designated storage room] |
| **Access Control** | Biometric or dual-key physical access; access log maintained |
| **Environmental Controls** | Temperature and humidity monitoring; compliant with [e.g., ISO 11108 / media manufacturer specifications] |
| **Labelling** | All media labelled with: Classification, Date Created, Retention Expiry, System Name, Backup Type |
| **Media Inventory** | Physical inventory log updated each time media is created, moved, or destroyed |
| **Transportation** | [e.g., Sealed tamper-evident bag; chain-of-custody form signed by two staff] |
| **Media Destruction** | Degaussing and physical shredding per [e.g., NIST SP 800-88 / DoD 5220.22-M]; destruction witnessed and certified |

### 7.4 Air-Gap Operational Procedures

- The air-gapped copy of NCII-critical systems shall be updated at a minimum of [e.g., weekly] intervals
- Access to air-gapped media for restoration shall require authorisation from [e.g., CISO and IT Operations Manager]
- A chain-of-custody form shall accompany all air-gapped media whenever it is transported or accessed
- Air-gapped backup copies shall be stored at a location separate from both the primary data centre and the primary off-site backup location

---

## 8. Restoration Testing Frequency

*This section defines [Organization Name]'s mandatory schedule and procedures for testing the recoverability of backup copies. Authors should document actual test results, RTO/RPO targets, and any remediation actions in the Backup Test Register (Appendix A).*

### 8.1 Testing Mandate

Backup copies that have not been tested for successful restoration provide no assurance of recoverability. [Organization Name] **shall** conduct regular, documented restoration tests across all NCII backup tiers in accordance with the schedule below.

### 8.2 Restoration Test Schedule

| Test Type | Frequency | Scope | Success Criteria |
|---|---|---|---|
| **Full System Restoration** | Annually (minimum) | NCII-Critical systems | Full application functionality restored within RTO; data verified to RPO |
| **Partial / File-Level Restoration** | Quarterly | All NCII-classified backup tiers | Target files/objects restored successfully; data integrity verified |
| **Database Recovery Test** | Semi-annually | All production databases | Database consistent; transactions verified; application connectivity confirmed |
| **Configuration Restoration** | Annually | Network devices, servers, security appliances | Running configuration matches backup; no manual reconfiguration required |
| **Air-Gapped Media Restoration** | Annually | NCII-Critical air-gapped copies | Successful read and restore from offline media |
| **Tabletop / Simulated DR** | Annually | All NCII systems | End-to-end recovery runbook validated |

### 8.3 Recovery Objectives

| System / Application | RTO Target | RPO Target | Responsible Team |
|---|---|---|---|
| [System Name — e.g., Core Banking] | [e.g., 4 hours] | [e.g., 15 minutes] | [Team Name] |
| [System Name — e.g., Identity & Access Management] | [e.g., 2 hours] | [e.g., 1 hour] | [Team Name] |
| [System Name — e.g., SIEM Platform] | [e.g., 8 hours] | [e.g., 4 hours] | [Team Name] |
| [System Name] | [RTO] | [RPO] | [Team Name] |

### 8.4 Restoration Test Procedure

Each restoration test shall follow this minimum process:

1. **Pre-Test Planning** — Document the test scope, target backup date/version, test environment, and expected outcome
2. **Authorisation** — Obtain written approval from [e.g., IT Operations Manager] before initiating restoration in any production-adjacent environment
3. **Restoration Execution** — Restore data or system to the designated test environment; do not overwrite production with backup data unless in an actual recovery scenario
4. **Data Integrity Verification** — Compare restored data against known checksums or hash values recorded at backup time
5. **Functional Verification** — Confirm application or system operates as expected post-restoration
6. **Timing Measurement** — Record actual restoration time and compare against RTO/RPO targets
7. **Documentation** — Complete the Backup Test Record (see Appendix A) and file in [Document Repository]
8. **Gap Remediation** — Raise a remediation action in [e.g., JIRA / Change Management System] for any test that fails or exceeds RTO/RPO targets

### 8.5 Failed Restoration Response

- Any failed restoration test shall be escalated to the [e.g., CISO / IT Operations Manager] within [e.g., 24 hours]
- A root cause analysis (RCA) shall be completed within [e.g., 5 business days]
- Remediation shall be implemented and a retest conducted within [e.g., 30 days] of the failure
- Persistent failures across two (2) consecutive test cycles shall be escalated as a risk item to [e.g., Information Security Steering Committee]

---

## 9. Backup Monitoring and Alerting

*This section specifies the requirements for continuous monitoring of backup job status and the alerting thresholds that must be configured to provide timely notification of failures, anomalies, or policy deviations. Authors should list the actual monitoring tools in use and map each alert to its escalation path.*

### 9.1 Monitoring Requirements

[Organization Name] shall implement continuous monitoring of all backup systems covering the following minimum parameters:

| Monitoring Parameter | Description | Monitoring Tool | Check Frequency |
|---|---|---|---|
| **Backup Job Completion Status** | Success, failure, or partial completion of each scheduled backup job | [e.g., Veeam ONE / Commvault / Backup Exec / Custom script] | Every backup run |
| **Backup Storage Capacity** | Used and available capacity across all backup repositories and media | [Monitoring Tool] | Daily |
| **Backup Data Transfer Rate** | Throughput of backup replication jobs; significant deviations may indicate network issues or exfiltration | [Monitoring Tool] | Per job |
| **Encryption Status** | Confirmation that encryption is active and functioning for all backup jobs | [Monitoring Tool] | Per job |
| **Immutability Lock Status** | Verification that retention locks remain active and unmodified | [Monitoring Tool] | Daily |
| **Retention Policy Compliance** | Confirmation that backups meeting minimum retention requirements exist for all in-scope systems | [Monitoring Tool] | Daily |
| **Last Successful Backup Age** | Age of the most recent successful backup per system; alerts when exceeding RPO | [Monitoring Tool] | Hourly |
| **Air-Gap Media Inventory** | Physical media log reviewed against expected schedule | Manual review | Weekly |

### 9.2 Alert Thresholds and Escalation

| Alert Condition | Severity | Notification Target | Response SLA |
|---|---|---|---|
| Backup job failure — NCII-Critical system | **Critical** | IT Operations On-Call, IT Operations Manager, CISO | Acknowledge within 15 minutes; resolution within RTO |
| Backup job failure — NCII-High system | **High** | IT Operations On-Call, IT Operations Manager | Acknowledge within 30 minutes; resolution within 4 hours |
| Backup storage capacity > [e.g., 80%] | **Medium** | IT Operations Team | Review and remediate within 24 hours |
| Backup storage capacity > [e.g., 90%] | **High** | IT Operations Manager | Immediate escalation; emergency capacity provisioning |
| Last successful backup age exceeds RPO threshold | **Critical** | IT Operations On-Call, CISO | Immediate response; treat as potential data loss event |
| Immutability lock modified or deletion attempted | **Critical** | CISO, Security Operations Centre | Treat as security incident; initiate Incident Response |
| Encryption disabled or error on any backup job | **High** | IT Operations Manager, CISO | Suspend affected backups; investigate and remediate |
| Backup job missing (no run detected) — scheduled window passed | **High** | IT Operations On-Call | Investigate within 1 hour |

### 9.3 Backup Health Reporting

- A **daily automated backup health report** shall be generated and distributed to [e.g., IT Operations Manager and designated IT Operations staff] covering all backup job outcomes from the prior 24-hour period
- A **monthly backup status report** shall be compiled by the IT Operations team and reviewed by [e.g., CISO / IT Operations Manager], covering:
  - Total backup jobs: completed, failed, skipped
  - Storage utilisation trends
  - Encryption and immutability compliance summary
  - Any alerts triggered and their resolution status
  - Upcoming restoration tests
- Monthly reports shall be retained for [e.g., 24 months] and made available to auditors on request

### 9.4 SIEM Integration

- All backup job outcomes (success, failure, warning) shall be forwarded as structured log events to [Organization Name]'s Security Information and Event Management (SIEM) platform
- The following events shall trigger a SIEM security alert:
  - Modification or deletion of immutable/retention-locked backup data
  - Disabling of backup encryption
  - Unauthorised access to backup storage repositories
  - Bulk deletion of backup objects exceeding [e.g., threshold defined in SIEM rule]
- SIEM correlation rules for backup anomalies shall be reviewed and updated [e.g., quarterly] by the Security Operations team

---

## 10. Roles and Responsibilities

*This section assigns accountability for backup-related activities using a RACI model. R = Responsible (performs the work), A = Accountable (single point of accountability), C = Consulted (provides input), I = Informed (kept informed). Authors should map each role to the organisation's actual job titles.*

### 10.1 RACI Matrix

| Activity | CISO | IT Ops Manager | IT Ops Engineer | System / Application Owner | Security Ops | Internal Audit | Risk & Compliance |
|---|---|---|---|---|---|---|---|
| Define and approve backup policy and standards | A | C | I | C | C | I | C |
| Design and implement backup architecture | I | A | R | C | C | I | I |
| Execute scheduled backup jobs | I | A | R | I | I | I | I |
| Monitor backup job status daily | I | A | R | I | C | I | I |
| Respond to backup failure alerts | I | A | R | I | C | I | I |
| Manage backup encryption keys | A | C | R | I | C | I | I |
| Configure and verify immutability settings | I | A | R | I | C | I | I |
| Manage physical air-gapped media inventory | I | A | R | I | I | I | I |
| Conduct and document restoration tests | I | A | R | C | I | C | I |
| Produce and distribute backup health reports | I | A | R | I | I | I | I |
| Review backup health monthly | A | R | C | I | C | I | I |
| Escalate failed restoration tests | I | R | R | C | I | I | A |
| Review and update this Standard annually | A | C | I | I | C | R | R |
| Manage third-party backup service providers | I | A | R | C | I | I | C |
| Report significant backup incidents to NACSA | A | C | R | I | C | I | C |

### 10.2 Role Descriptions

| Role | Responsibility Summary |
|---|---|
| **Chief Information Security Officer (CISO)** | Ultimate accountability for the adequacy of backup controls protecting NCII assets; approves this Standard and escalates material failures to senior management and regulators |
| **IT Operations Manager** | Day-to-day accountability for backup operations; approves restoration tests; reviews monthly health reports; escalates capacity and resilience issues |
| **IT Operations Engineer** | Executes backup jobs, responds to alerts, manages encryption keys and immutability configurations, maintains physical media inventory, conducts restoration tests |
| **System / Application Owner** | Defines RTO/RPO requirements for owned systems; confirms restoration test outcomes; approves classification of NCII assets under their ownership |
| **Security Operations Centre (SOC)** | Monitors SIEM for backup-related security events; escalates anomalies to CISO and IT Operations |
| **Internal Audit** | Independently verifies compliance with this Standard; reviews restoration test records and backup health reports |
| **Risk and Compliance** | Maintains the risk register entry for backup failure risk; reviews Standard annually; ensures alignment with regulatory obligations |

---

## 11. Non-Compliance and Exceptions

### 11.1 Non-Compliance

Failure to comply with the requirements of this Standard may result in:

- Regulatory enforcement action by NACSA under the Cyber Security Act 2024 (Act 854)
- Formal risk acceptance and escalation to [e.g., Information Security Steering Committee]
- Disciplinary action in accordance with [Organization Name]'s Human Resources policies for wilful non-compliance by staff

### 11.2 Exception Process

Where full compliance with this Standard is not technically or operationally feasible, an exception may be requested through the following process:

1. Submit a completed **Backup Standard Exception Request Form** (Appendix B) to the IT Operations Manager and CISO
2. Provide documented justification, risk assessment, and proposed compensating controls
3. Obtain written approval from the CISO; exceptions for NCII-Critical systems require additional approval from [e.g., CTO / Board Risk Committee]
4. Register the approved exception in [Organization Name]'s risk register
5. Define and document a remediation plan with a target resolution date not exceeding [e.g., 12 months]
6. Review the exception status at each annual Standard review cycle

| Exception Field | Detail |
|---|---|
| Exception Reference | [Exception ID] |
| System / Scope Affected | [System Name] |
| Requirement Excepted | [Standard Section and Requirement] |
| Justification | [Reason compliance is not achievable] |
| Compensating Controls | [Alternative controls implemented] |
| Risk Level | [Critical / High / Medium / Low] |
| Approved By | [Name and Role] |
| Approval Date | [Date] |
| Remediation Target Date | [Date] |
| Review Date | [Date] |

---

## 12. Review and Approval

### 12.1 Review Schedule

This Standard shall be reviewed at a minimum of once every **twelve (12) months**, or earlier in any of the following circumstances:

- Material changes to [Organization Name]'s NCII systems or backup architecture
- New or amended directives issued by NACSA under the Cyber Security Act 2024
- Discovery of a significant backup failure, data loss event, or security incident affecting backup systems
- Changes to [Organization Name]'s risk appetite or technology strategy

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IT Operations Manager | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Technology Officer (CTO) | [Name] | [Signature] | [Date] |
| Risk and Compliance | [Name] | [Signature] | [Date] |
| [Additional Approver] | [Name] | [Signature] | [Date] |

---

## 13. References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), Section 18 | Primary duty of NCII entity owners to implement cyber security measures, including backup and resilience controls |
| Cyber Security Act 2024 (Act 854), Section 18(1)(a) | Risk-appropriate technical and organisational measures for NCII protection |
| Cyber Security Act 2024 (Act 854), Section 18(1)(b) | Compliance with Cyber Security Standards issued by NACSA |
| NACSA National Cyber Security Policy | Overarching national framework for critical information infrastructure protection |
| Personal Data Protection Act 2010 (Act 709), Section 9 | Security principle for personal data protection; relevant where backup systems contain personal data |
| ISO/IEC 27001:2022, Annex A 8.13 | Information backup controls and operational requirements |
| NIST SP 800-34 Rev. 1 | Contingency Planning Guide for Federal Information Systems; backup procedures and recovery objectives |
| NIST SP 800-88 Rev. 1 | Guidelines for Media Sanitization; applicable to air-gapped media destruction |
| [Organization Name] Information Security Policy | [Document ID] — Parent governance document |
| [Organization Name] Business Continuity Plan | [Document ID] — Recovery objectives and continuity procedures |
| [Organization Name] Incident Response Procedure | [Document ID] — Escalation and notification procedures for backup failures and security incidents |
| [Organization Name] Change Management Policy | [Document ID] — Governing changes to backup systems and configurations |
| [Organization Name] Cryptographic Key Management Standard | [Document ID] — Key lifecycle management requirements |

---

## 14. Appendices

### Appendix A — Backup Test Record

*This form shall be completed for every restoration test conducted under Section 8. Completed records shall be retained in [Document Repository] for a minimum of [e.g., 3 years] and made available to auditors on request.*

| Field | Detail |
|---|---|
| **Test Reference** | [Test ID — e.g., BKP-TEST-2025-001] |
| **Test Date** | [Date] |
| **Conducted By** | [Name and Role] |
| **Witnessed By** | [Name and Role] |
| **System / Application** | [System Name] |
| **Backup Source Date/Time** | [Date and time of backup being restored] |
| **Test Type** | [Full System / Partial / Database / Configuration / Air-Gapped] |
| **Test Environment** | [Test / Isolated / Production — note if production] |
| **RTO Target** | [Target in hours/minutes] |
| **Actual Restoration Time** | [Measured time] |
| **RPO Target** | [Target in hours/minutes] |
| **Actual Data Age at Restoration** | [Time since last backup] |
| **Data Integrity Check Method** | [Hash comparison / Checksum / Manual verification] |
| **Data Integrity Result** | [Pass / Fail — note any discrepancies] |
| **Functional Verification Result** | [Pass / Fail — describe tests performed] |
| **Test Outcome** | [Pass / Fail / Partial Pass] |
| **Issues Identified** | [Description of any failures or deviations] |
| **Remediation Actions** | [Action items raised; reference to change/incident tickets] |
| **Next Scheduled Test** | [Date] |
| **Approving Manager** | [Name, Role, Signature, Date] |

---

### Appendix B — Backup Standard Exception Request Form

*To be submitted to the IT Operations Manager and CISO when full compliance with a specific requirement of this Standard cannot be achieved. Exceptions are not approved retrospectively.*

| Field | Detail |
|---|---|
| **Exception Request ID** | [Auto-assigned on submission] |
| **Date of Request** | [Date] |
| **Requested By** | [Name and Role] |
| **System / Scope** | [Affected system(s) or environment] |
| **Standard Section** | [Section number and requirement that cannot be met] |
| **Requirement Description** | [Quote the specific requirement] |
| **Reason for Exception** | [Technical / operational / financial justification] |
| **Risk Assessment** | [Likelihood, impact, and overall risk rating] |
| **Compensating Controls** | [Alternative controls to mitigate the risk] |
| **Target Remediation Date** | [Date by which full compliance will be achieved] |
| **Remediation Plan** | [Summary of steps to achieve compliance] |
| **IT Operations Manager Decision** | [Approved / Rejected] |
| **IT Operations Manager Sign-Off** | [Name, Signature, Date] |
| **CISO Decision** | [Approved / Rejected] |
| **CISO Sign-Off** | [Name, Signature, Date] |
| **Additional Approver (if required)** | [Name, Role, Signature, Date] |
| **Risk Register Entry Reference** | [Risk ID] |
| **Next Review Date** | [Date — maximum 12 months from approval] |

---

### Appendix C — NCII Asset Backup Coverage Register

*This register shall be maintained by IT Operations and updated whenever NCII assets are added, modified, or decommissioned. It provides a single view of backup coverage across all in-scope systems.*

| Asset Name | Asset Classification | System Owner | Backup Solution | Full Backup Frequency | Incremental Frequency | Retention Period | Off-Site Copy | Immutable Copy | Air-Gapped Copy | Last Successful Backup | Last Restoration Test | RTO | RPO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [System Name] | [NCII-Critical / High / Standard] | [Owner] | [Backup Tool] | [Weekly] | [Daily] | [12 months] | [Yes / No] | [Yes / No] | [Yes / No] | [Date] | [Date] | [Hours] | [Hours] |
| [System Name] | | | | | | | | | | | | | |
| [System Name] | | | | | | | | | | | | | |

---

### Appendix D — Air-Gapped Media Inventory Log

*This log shall be maintained by the designated IT Operations Engineer and reviewed monthly by the IT Operations Manager. Physical custody of this log shall reside with [e.g., the primary data centre security officer].*

| Media ID | System Backed Up | Backup Date | Backup Type | Media Type | Location | Created By | Retention Expiry | Status | Destruction Date | Destruction Witnessed By |
|---|---|---|---|---|---|---|---|---|---|---|
| [MEDIA-001] | [System Name] | [Date] | [Full / Incremental] | [LTO Tape / HDD / Other] | [Vault / Cabinet / Location] | [Name] | [Date] | [Active / Expired / Destroyed] | [Date or N/A] | [Name or N/A] |
| | | | | | | | | | | |

---

*End of Document*

---

> **Document Control Notice:** This document is classified **Confidential**. It must not be shared outside of [Organization Name] without written authorisation from the document Owner. Printed copies are uncontrolled. The current approved version is maintained in [Organization Name]'s document management system at [Document Repository URL / Location].