# Incident Investigation Log

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CISO / Forensics Lead |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | Per Incident |
| **Approved By** | [Approved By] |

---

> **Handling Notice:** This document is classified **Confidential** and constitutes a legal case file under the Cyber Security Act 2024 (Act 854). It may contain forensic evidence, chain of custody records, and sensitive operational data pertaining to a National Critical Information Infrastructure (NCII) security incident. Access is strictly limited to authorized personnel with a need-to-know basis. Unauthorized disclosure, reproduction, or tampering may constitute an offence under Act 854 and applicable Malaysian law.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Incident Case Overview](#2-incident-case-overview)
3. [Forensic Images](#3-forensic-images)
4. [Timeline Reconstruction](#4-timeline-reconstruction)
5. [Indicators of Compromise (IOC) Evidence](#5-indicators-of-compromise-ioc-evidence)
6. [Chain of Custody Records](#6-chain-of-custody-records)
7. [Analysis Notes](#7-analysis-notes)
8. [Containment, Eradication, and Recovery Actions](#8-containment-eradication-and-recovery-actions)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Retention and Disposition](#10-retention-and-disposition)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Incident Investigation Log serves as the official case file for the documented cybersecurity incident affecting [Organization Name]'s National Critical Information Infrastructure (NCII). It provides a structured, evidentially sound record of all forensic activities, findings, and investigative actions undertaken in response to the incident, in accordance with obligations imposed by the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 23** — Duties of NCII entities to notify, respond, and maintain records of cybersecurity incidents;
- **Section 44** — Powers of investigation, collection of evidence, and requirements for maintaining records in connection with NCII security matters.

This document supports regulatory reporting to the **National Cyber Security Agency (NACSA)**, internal governance processes, potential legal proceedings, and post-incident review.

### 1.2 Scope

*This section defines the systems, networks, data, and personnel within the boundary of this investigation. Specify the affected NCII sector and assets.*

This investigation log applies to:

- **Affected Systems / Assets:** [List of affected systems, servers, endpoints, networks, or applications]
- **NCII Sector:** [e.g., Financial Services / Energy / Telecommunications / Government / etc.]
- **Incident Classification:** [Unauthorized Access / Malware / Data Breach / Ransomware / DDoS / Insider Threat / Other]
- **Organizational Units Affected:** [e.g., IT Infrastructure, Core Banking, Customer Data Platform]
- **Geographic Scope:** [On-premises / Cloud / Hybrid — specify data centres or regions]

### 1.3 Definitions

| Term | Definition |
|---|---|
| **NCII** | National Critical Information Infrastructure as designated under Act 854 |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **IOC** | Indicator of Compromise — artefact observed on a network or system that indicates a potential intrusion |
| **Chain of Custody** | A chronological record documenting the collection, transfer, analysis, and storage of digital evidence |
| **Forensic Image** | A bit-for-bit copy of a storage device or memory used in digital forensic investigations |
| **TTPs** | Tactics, Techniques, and Procedures associated with a threat actor |
| **CISO** | Chief Information Security Officer |

---

## 2. Incident Case Overview

*This section captures the high-level facts of the incident. Complete all fields upon initial triage. Update as the investigation progresses.*

### 2.1 Case Identification

| Field | Details |
|---|---|
| **Case Reference Number** | [INC-YYYY-NNNN] |
| **Incident Title** | [Brief descriptive title of the incident] |
| **Date/Time Detected** | [DD/MM/YYYY HH:MM MYT] |
| **Date/Time Reported** | [DD/MM/YYYY HH:MM MYT] |
| **Date/Time Investigation Opened** | [DD/MM/YYYY HH:MM MYT] |
| **Date/Time Investigation Closed** | [DD/MM/YYYY HH:MM MYT — leave blank if ongoing] |
| **Incident Severity** | [Critical / High / Medium / Low] |
| **Incident Status** | [Open / Contained / Eradicated / Closed] |
| **Lead Investigator** | [Name, Title] |
| **Case File Owner** | CISO / Forensics Lead |
| **NACSA Notification Reference** | [NACSA Case/Ticket Number, if applicable] |
| **Law Enforcement Reference** | [Police Report / PDRM Reference Number, if applicable] |

### 2.2 Incident Description

*Provide a factual, narrative description of what occurred, how it was detected, and what was immediately known at the time of reporting. Avoid speculation; record only confirmed facts at each stage.*

[Provide a clear narrative description of the incident, including how it was detected (e.g., SIEM alert, user report, third-party notification), initial indicators, and a summary of the impact observed at the time of discovery.]

### 2.3 Initial Impact Assessment

| Impact Category | Details |
|---|---|
| **Systems Compromised** | [List affected systems] |
| **Data Potentially Affected** | [e.g., Customer PII, Financial Records, Credentials — indicate volume if known] |
| **Services Disrupted** | [Services impacted and duration] |
| **Estimated Financial Impact** | [RM [Amount] — or "Under Assessment"] |
| **Regulatory Reporting Obligations Triggered** | [Act 854 s23 notification / BNM RMiT / PDPA / Other] |
| **Third Parties Affected** | [Vendors, partners, customers — specify] |

### 2.4 Investigation Team

| Role | Name | Organization / Unit | Contact |
|---|---|---|---|
| Lead Investigator | [Name] | [Unit] | [Email / Phone] |
| Forensic Analyst | [Name] | [Unit] | [Email / Phone] |
| Threat Intelligence Analyst | [Name] | [Unit] | [Email / Phone] |
| IT / Systems Administrator | [Name] | [Unit] | [Email / Phone] |
| Legal / Compliance Representative | [Name] | [Unit] | [Email / Phone] |
| External Forensics Vendor | [Vendor Name] | [Company] | [Email / Phone] |
| NACSA Liaison | [Name] | NACSA | [Email / Phone] |

---

## 3. Forensic Images

*This section records all forensic imaging activities performed during the investigation. Each image must be documented with verification hashes to ensure integrity and admissibility as evidence.*

### 3.1 Imaging Log

| Image ID | Date/Time Acquired | Acquired By | Source Device/System | Device Type | Serial Number / Asset Tag | Media Size | Acquisition Method | Write Blocker Used | Hash Algorithm | Hash Value (Pre-Image) | Hash Value (Post-Image) | Storage Location | Integrity Verified |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| IMG-001 | [DD/MM/YYYY HH:MM] | [Name] | [Hostname / IP] | [HDD/SSD/VM/RAM] | [Serial/Asset] | [GB/TB] | [dd / FTK / Cellebrite / etc.] | [Yes/No] | [SHA-256 / MD5] | [Hash Value] | [Hash Value] | [Storage path / evidence locker ref] | [Yes/No] |
| IMG-002 | | | | | | | | | | | | | |

### 3.2 Memory (RAM) Captures

| Capture ID | Date/Time | Acquired By | Source System | OS | Memory Size | Tool Used | Hash Value | Storage Location |
|---|---|---|---|---|---|---|---|---|
| MEM-001 | [DD/MM/YYYY HH:MM] | [Name] | [Hostname] | [OS Version] | [GB] | [Volatility/WinPmem/etc.] | [Hash Value] | [Location] |

### 3.3 Network Captures

| Capture ID | Date/Time (Start–End) | Acquired By | Source Interface / Sensor | PCAP File Name | File Size | Hash Value | Storage Location |
|---|---|---|---|---|---|---|---|
| NET-001 | [DD/MM/YYYY HH:MM – HH:MM] | [Name] | [Interface/SPAN port] | [filename.pcap] | [MB/GB] | [Hash Value] | [Location] |

### 3.4 Log Exports

*Document all system, application, and security logs exported as part of the investigation.*

| Log ID | Date/Time Exported | Source System | Log Type | Log Period Covered | Format | Hash Value | Storage Location |
|---|---|---|---|---|---|---|---|
| LOG-001 | [DD/MM/YYYY HH:MM] | [System/Tool Name] | [SIEM / Firewall / EDR / OS / Application] | [From – To] | [JSON/CSV/EVTX/Syslog] | [Hash Value] | [Location] |

---

## 4. Timeline Reconstruction

*This section presents a chronological reconstruction of the incident from initial access or earliest known indicator through to containment. All entries must be correlated to evidence sources. Times are recorded in Malaysia Time (MYT, UTC+8).*

### 4.1 Master Incident Timeline

| Seq | Date/Time (MYT) | Event Description | Evidence Source | System / Asset | Confidence Level | Recorded By |
|---|---|---|---|---|---|---|
| 1 | [DD/MM/YYYY HH:MM] | [Description of event, e.g., "Malicious phishing email received by [User]"] | [LOG-001 / IMG-001 / NET-001] | [System/Asset] | [High / Medium / Low] | [Name] |
| 2 | [DD/MM/YYYY HH:MM] | [e.g., "Initial access established via exploitation of [Vulnerability CVE-XXXX-XXXXX]"] | | | | |
| 3 | [DD/MM/YYYY HH:MM] | [e.g., "Lateral movement observed to [System B]"] | | | | |
| 4 | [DD/MM/YYYY HH:MM] | [e.g., "Data exfiltration attempt detected by DLP"] | | | | |
| 5 | [DD/MM/YYYY HH:MM] | [e.g., "Incident detected via SIEM alert [Alert ID]"] | | | | |
| 6 | [DD/MM/YYYY HH:MM] | [e.g., "Incident reported to CISO and investigation initiated"] | | | | |
| 7 | [DD/MM/YYYY HH:MM] | [e.g., "Affected systems isolated from network"] | | | | |
| 8 | [DD/MM/YYYY HH:MM] | [Continue adding rows as needed] | | | | |

### 4.2 Kill Chain / Attack Phase Mapping

*Map the reconstructed timeline to the recognized attack lifecycle or kill chain framework used by the organization.*

| Attack Phase | Observed Activity | Date/Time (MYT) | Evidence Reference |
|---|---|---|---|
| Reconnaissance | [Description or N/A] | | |
| Weaponization | [Description or N/A] | | |
| Delivery | [Description or N/A] | | |
| Exploitation | [Description or N/A] | | |
| Installation / Persistence | [Description or N/A] | | |
| Command & Control (C2) | [Description or N/A] | | |
| Actions on Objectives | [Description or N/A] | | |
| Exfiltration / Impact | [Description or N/A] | | |

### 4.3 Timeline Gaps and Uncertainties

*Document any gaps in the timeline where evidence is missing, inconclusive, or where log coverage was insufficient.*

- **Gap 1:** [Description of gap, e.g., "No firewall logs available for the period DD/MM/YYYY HH:MM – HH:MM due to logging misconfiguration on [Device]. Impact: Unable to confirm lateral movement path."]
- **Gap 2:** [Description]
- **Gap 3:** [Description]

---

## 5. Indicators of Compromise (IOC) Evidence

*This section catalogs all IOCs identified during the investigation. IOCs should be submitted to NACSA and relevant threat intelligence platforms as appropriate. Use defanging notation (e.g., hxxp://, 1.2.3[.]4) for network-based IOCs in plain text fields.*

### 5.1 Network-Based IOCs

| IOC ID | Type | Value (Defanged) | First Seen | Last Seen | Context / Description | Confidence | TLP | Source |
|---|---|---|---|---|---|---|---|---|
| IOC-N-001 | IP Address | [x.x.x[.]x] | [DD/MM/YYYY] | [DD/MM/YYYY] | [e.g., C2 server IP observed in outbound traffic] | [High/Med/Low] | [RED/AMBER/GREEN/WHITE] | [SIEM Alert / Threat Intel / Manual Analysis] |
| IOC-N-002 | Domain | [malicious[.]domain] | | | | | | |
| IOC-N-003 | URL | [hxxps://malicious[.]domain/path] | | | | | | |
| IOC-N-004 | Email Address | [sender@malicious[.]domain] | | | | | | |

### 5.2 File-Based IOCs

| IOC ID | Type | Value | File Name | File Path | File Size | First Seen | Context | Confidence | Source |
|---|---|---|---|---|---|---|---|---|---|
| IOC-F-001 | MD5 Hash | [Hash Value] | [filename.ext] | [Full path] | [Bytes] | [DD/MM/YYYY] | [e.g., Dropper malware found on [System]] | [High/Med/Low] | [EDR / Forensic Image IMG-001] |
| IOC-F-002 | SHA-256 Hash | | | | | | | | |
| IOC-F-003 | File Name / Path | | | | | | | | |

### 5.3 Host-Based IOCs

| IOC ID | Type | Value | System | First Seen | Context | Confidence | Source |
|---|---|---|---|---|---|---|---|
| IOC-H-001 | Registry Key | [HKLM\Software\...] | [Hostname] | [DD/MM/YYYY] | [e.g., Persistence mechanism] | [High/Med/Low] | [IMG-001] |
| IOC-H-002 | Scheduled Task | [Task Name] | | | | | |
| IOC-H-003 | Process Name / PID | | | | | | |
| IOC-H-004 | User Account Created | | | | | | |
| IOC-H-005 | Service Installed | | | | | | |

### 5.4 Threat Actor Attribution

*Document any threat actor attribution findings. Note that attribution should be stated with appropriate confidence levels and caveats.*

| Field | Details |
|---|---|
| **Suspected Threat Actor** | [Name / Group / "Unknown"] |
| **Attribution Confidence** | [High / Medium / Low / Unattributed] |
| **TTPs Observed (MITRE ATT&CK)** | [e.g., T1566.001 Spearphishing Attachment, T1059.001 PowerShell] |
| **Motivation (Assessed)** | [Financial / Espionage / Hacktivism / Unknown] |
| **Attribution Basis** | [Description of evidence supporting attribution, or "Insufficient evidence for attribution"] |
| **Threat Intelligence References** | [NACSA advisories / MITRE ATT&CK Groups / vendor reports] |

---

## 6. Chain of Custody Records

*This section maintains an unbroken chain of custody for all physical and digital evidence collected during this investigation. Any break in custody must be documented and explained. This record may be used in legal or regulatory proceedings.*

### 6.1 Evidence Register

| Evidence ID | Description | Type | Date/Time Collected | Collected By | Collection Location | Storage Location | Seal / Container Reference |
|---|---|---|---|---|---|---|---|
| EVD-001 | [e.g., Hard drive from workstation WS-001] | [Physical / Digital] | [DD/MM/YYYY HH:MM] | [Name] | [Physical location / system] | [Evidence locker / server path] | [Seal number / bag reference] |
| EVD-002 | [e.g., Forensic image IMG-001] | Digital | | | | | |
| EVD-003 | | | | | | | |

### 6.2 Evidence Transfer Log

*Every time evidence is accessed, transferred, or returned, a new entry must be made.*

| Evidence ID | Date/Time | Action | Transferred From | Transferred To | Purpose | Authorized By | Received By | Condition on Receipt | Notes |
|---|---|---|---|---|---|---|---|---|---|
| EVD-001 | [DD/MM/YYYY HH:MM] | [Collected / Transferred / Accessed / Returned] | [Name / Location] | [Name / Location] | [e.g., Forensic imaging] | [Supervisor Name] | [Name] | [Intact / Seal Intact / Condition] | |
| EVD-001 | [DD/MM/YYYY HH:MM] | | | | | | | | |
| EVD-002 | | | | | | | | | |

### 6.3 Evidence Storage Conditions

| Storage Location | Type | Access Control Method | Custodian | Location Address | Temperature / Environmental Controls |
|---|---|---|---|---|---|
| [Evidence Locker / Server Room / Offsite Storage] | [Physical Safe / Locked Cabinet / Encrypted Server] | [Key / Access Card / Biometric] | [Name] | [Physical address or system path] | [Specify if relevant for physical media] |

### 6.4 Evidence Integrity Verification Log

*Record all instances where evidence integrity was verified (e.g., re-hashing forensic images).*

| Evidence ID | Date/Time Verified | Verified By | Verification Method | Original Hash | Verification Hash | Integrity Status | Notes |
|---|---|---|---|---|---|---|---|
| EVD-002 | [DD/MM/YYYY HH:MM] | [Name] | [SHA-256 re-hash] | [Original Hash] | [Verification Hash] | [Verified / MISMATCH — Escalate] | |

---

## 7. Analysis Notes

*This section contains the working notes, findings, and technical conclusions of the forensic and investigation team. Notes should be recorded in real time and dated. All findings must reference supporting evidence.*

### 7.1 Investigator Working Notes

*Record chronological working notes as the investigation progresses. Each entry must be dated, timed, and attributed to the recording investigator.*

---

**Entry [AN-001]**
- **Date/Time:** [DD/MM/YYYY HH:MM MYT]
- **Recorded By:** [Name, Role]
- **Subject:** [Brief subject, e.g., "Initial triage findings — [System Name]"]

[Record detailed investigative notes here. Include commands run, tools used, observations made, and any preliminary conclusions. Reference specific evidence items (e.g., IMG-001, LOG-001) to support all findings.]

---

**Entry [AN-002]**
- **Date/Time:** [DD/MM/YYYY HH:MM MYT]
- **Recorded By:** [Name, Role]
- **Subject:** [Brief subject]

[Continue entries chronologically throughout the investigation]

---

### 7.2 Malware Analysis Summary

*Complete this section if malware samples were identified and subjected to static or dynamic analysis.*

| Field | Details |
|---|---|
| **Sample Reference** | [IOC-F-001] |
| **Malware Family / Type** | [e.g., Ransomware / RAT / Loader / Wiper / Unknown] |
| **Analysis Type Performed** | [Static / Dynamic / Both] |
| **Analysis Environment** | [Isolated sandbox — specify tool/platform] |
| **Key Capabilities Identified** | [e.g., Keylogging, credential harvesting, file encryption, lateral movement] |
| **Persistence Mechanisms** | [e.g., Registry Run key, Scheduled Task] |
| **C2 Communication Method** | [e.g., HTTPS beaconing to IOC-N-001] |
| **Anti-Analysis Techniques Observed** | [e.g., VM detection, obfuscation, packing] |
| **YARA / Sigma Rules Created** | [Yes / No — reference Rule ID if applicable] |
| **Analyst** | [Name] |
| **Date Completed** | [DD/MM/YYYY] |

### 7.3 Vulnerability Analysis

*Document any vulnerabilities exploited or contributing weaknesses identified during the investigation.*

| CVE / Vulnerability ID | Description | Affected System(s) | CVSS Score | Exploitation Status | Patch Available | Remediation Action | Remediated By | Date |
|---|---|---|---|---|---|---|---|---|
| [CVE-XXXX-XXXXX] | [Description] | [System list] | [Score] | [Confirmed / Suspected] | [Yes/No] | [Action taken] | [Name] | [DD/MM/YYYY] |

### 7.4 Key Findings Summary

*Provide a consolidated summary of the key technical findings upon investigation closure. This is the primary narrative finding of the investigation.*

**Finding 1: [Title]**
[Detailed description of finding, supported by evidence references]

**Finding 2: [Title]**
[Detailed description]

**Finding 3: Root Cause**
[Documented root cause of the incident, referencing supporting evidence and timeline entries]

---

## 8. Containment, Eradication, and Recovery Actions

*Document all response actions taken. Each action must be authorized, logged with date/time, and confirmed as completed.*

### 8.1 Containment Actions

| Action ID | Date/Time | Action Taken | System / Asset Affected | Performed By | Authorized By | Outcome | Notes |
|---|---|---|---|---|---|---|---|
| CON-001 | [DD/MM/YYYY HH:MM] | [e.g., Network isolation of affected segment] | [System/VLAN] | [Name] | [Name] | [Confirmed / Partial / Failed] | |
| CON-002 | | [e.g., Account disabled — [Username]] | | | | | |

### 8.2 Eradication Actions

| Action ID | Date/Time | Action Taken | System / Asset Affected | Performed By | Authorized By | Outcome | Verification Method |
|---|---|---|---|---|---|---|---|
| ERA-001 | [DD/MM/YYYY HH:MM] | [e.g., Malware removed and system reimaged] | | [Name] | [Name] | [Confirmed] | [Hash comparison / clean scan] |
| ERA-002 | | [e.g., Malicious accounts and persistence mechanisms removed] | | | | | |

### 8.3 Recovery Actions

| Action ID | Date/Time | Action Taken | System / Asset Affected | Performed By | Authorized By | Service Restored | Verification Method |
|---|---|---|---|---|---|---|---|
| REC-001 | [DD/MM/YYYY HH:MM] | [e.g., Systems restored from verified clean backup dated DD/MM/YYYY] | | [Name] | [Name] | [Yes/No] | [System health check / UAT] |

### 8.4 Post-Incident Hardening Measures

| Measure ID | Description | Priority | Responsible Party | Target Completion Date | Status |
|---|---|---|---|---|---|
| PHM-001 | [e.g., Patch [CVE-XXXX-XXXXX] across all affected systems] | [Critical/High/Medium/Low] | [Name/Team] | [DD/MM/YYYY] | [Open / In Progress / Completed] |
| PHM-002 | [e.g., Implement enhanced monitoring for [TTP observed]] | | | | |
| PHM-003 | [e.g., MFA enforcement on privileged accounts] | | | | |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for tasks associated with the creation, maintenance, and execution of incident investigation logs under Act 854.*

### 9.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Forensics Lead | SOC Analyst | IT Operations | Legal / Compliance | Risk Management | NACSA | Executive Management |
|---|---|---|---|---|---|---|---|---|
| Declaring a cybersecurity incident | A | R | R | C | I | I | I | I |
| Opening investigation case file | A | R | C | I | I | I | I | I |
| Forensic evidence collection | C | A/R | R | C | I | — | — | — |
| Maintaining chain of custody | A | R | C | — | C | — | — | — |
| Timeline reconstruction | C | A/R | R | C | — | — | — | — |
| IOC identification and cataloging | C | A | R | C | — | I | I | — |
| Threat actor attribution | A | R | C | — | — | I | C | I |
| Containment decisions | A | R | C | R | C | C | I | I |
| Eradication and recovery actions | A | C | C | R | — | I | I | I |
| NACSA statutory notification (s23) | A | C | — | — | R | C | — | I |
| Legal hold management | C | C | — | — | A/R | C | — | I |
| Case file review and sign-off | A/R | R | — | — | C | C | — | I |
| Evidence retention and archiving | A | R | — | C | C | — | — | — |
| Post-incident lessons learned | A | R | C | C | C | R | I | I |

---

## 10. Retention and Disposition

*In accordance with Section 23 and Section 44 of the Cyber Security Act 2024 (Act 854), all records, evidence, and documentation associated with cybersecurity incident investigations on NCII must be retained for a minimum period of seven (7) years.*

### 10.1 Retention Schedule

| Record Type | Retention Period | Storage Format | Storage Location | Custodian | Disposal Method |
|---|---|---|---|---|---|
| Complete case file (this document) | Minimum 7 years from case closure | Encrypted digital + Physical archive | [Specify secure location] | CISO / Forensics Lead | Secure destruction per [Organization] disposal policy |
| Forensic images (digital) | Minimum 7 years from case closure | Encrypted write-once media / secure vault | [Forensic evidence storage system] | Forensics Lead | Secure cryptographic erasure with certificate |
| Physical evidence | Duration of legal/regulatory proceedings + 7 years minimum | Sealed evidence bags in controlled facility | [Physical evidence locker — location] | Forensics Lead / Custodian | Documented physical destruction |
| Chain of custody records | Minimum 7 years from case closure | Digital + Physical | [Location] | CISO / Legal | Secure destruction |
| NACSA correspondence and notifications | Minimum 7 years | Digital | [Secure records system] | Legal / Compliance | Secure destruction |
| Analysis notes and working papers | Minimum 7 years | Encrypted digital | [Location] | Forensics Lead | Secure destruction |

### 10.2 Legal Hold

*If this incident is subject to regulatory investigation, civil proceedings, or criminal proceedings, a legal hold must be placed on all related records. A legal hold supersedes standard retention and disposal schedules.*

| Field | Details |
|---|---|
| **Legal Hold Status** | [Active / Not Active] |
| **Date Legal Hold Imposed** | [DD/MM/YYYY] |
| **Imposed By** | [Name, Legal Counsel / Compliance Officer] |
| **Scope of Hold** | [Description of records subject to hold] |
| **Matter Reference** | [Court case number / regulatory reference / internal legal matter number] |
| **Expected Review Date** | [DD/MM/YYYY] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Name, Title] | Initial case file created |
| 1.1 | [DD/MM/YYYY] | [Name, Title] | [Description of update, e.g., Timeline updated following additional forensic analysis] |
| 1.2 | [DD/MM/YYYY] | [Name, Title] | [Description of update] |
| 2.0 | [DD/MM/YYYY] | [Name, Title] | Final case file — investigation closed |

### 11.2 Approval and Sign-Off

*This case file must be reviewed and approved by the following personnel prior to formal closure.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Lead Investigator | [Name] | __________________ | [DD/MM/YYYY] |
| Forensics Lead | [Name] | __________________ | [DD/MM/YYYY] |
| CISO | [Name] | __________________ | [DD/MM/YYYY] |
| Legal / Compliance Representative | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Executive Officer / Authorized Representative | [Name] | __________________ | [DD/MM/YYYY] |

---

## 12. References

The following regulatory instruments, standards, and guidelines are directly applicable to this document:

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), s23** | Duties of NCII entities to notify NACSA of cybersecurity incidents and maintain records of such incidents and the measures taken in response |
| **Cyber Security Act 2024 (Act 854), s44** | Powers of investigation and authorized officers in connection with cybersecurity matters; requirements for preservation and production of evidence relating to NCII incidents |
| **NACSA National Cyber Security Policy (NCSP)** | National policy framework governing cybersecurity incident response and NCII protection obligations |
| **NIST SP 800-86** | Guide to Integrating Forensic Techniques into Incident Response — methodology for forensic evidence collection and preservation |
| **ISO/IEC 27037:2012** | Guidelines for identification, collection, acquisition, and preservation of digital evidence |
| **ISO/IEC 27035-1 / 27035-2** | Information security incident management — principles and guidelines for incident response |
| **MITRE ATT&CK Framework** | Knowledge base of adversary tactics and techniques used for threat actor attribution and TTP mapping |
| **Personal Data Protection Act 2010 (PDPA)** | Applicable where incident involves personal data of Malaysian data subjects; breach notification obligations may apply |
| **BNM Risk Management in Technology (RMiT) Policy** | Applicable to licensed financial institutions; cyber incident response and reporting requirements |
| **[Organization Name] Cybersecurity Incident Response Plan** | [Document ID] — Internal incident response procedures and escalation pathways |
| **[Organization Name] Digital Forensics Procedures** | [Document ID] — Internal forensic evidence collection and handling procedures |
| **[Organization Name] Evidence Retention and Disposal Policy** | [Document ID] — Internal policy governing retention, archival, and disposal of records |

---

## 13. Appendices

### Appendix A — NACSA Incident Notification Record

*Attach or reference all statutory notifications submitted to NACSA under Section 23 of Act 854, including initial notification, updates, and final report.*

| Notification Type | Date/Time Submitted | Submitted By | NACSA Reference | Submission Method | Acknowledgement Received |
|---|---|---|---|---|---|
| Initial Notification | [DD/MM/YYYY HH:MM] | [Name] | [NACSA Ref] | [NACSA Portal / Email / Phone] | [Yes / No] |
| Status Update | | | | | |
| Final Incident Report | | | | | |

*[Attach copies of all NACSA correspondence as sub-appendices A-1, A-2, etc.]*

---

### Appendix B — External Notifications and Disclosures

*Record all notifications made to external parties including law enforcement, regulators (BNM, PDPA Commissioner), affected customers, third-party vendors, and cyber insurance providers.*

| Recipient | Organization | Notification Type | Date | Notified By | Reference / Acknowledgement | Notes |
|---|---|---|---|---|---|---|
| [PDRM / Cybercrime Division] | Royal Malaysia Police | Law Enforcement Report | [DD/MM/YYYY] | [Name] | [Police Report No.] | |
| [BNM Supervision Department] | Bank Negara Malaysia | Regulatory Notification | | | | |
| [PDPA Commissioner] | [Department of Personal Data Protection] | Data Breach Notification | | | | |
| [Vendor/Partner Name] | [Company] | Third-Party Notification | | | | |
| [Cyber Insurance Provider] | [Company] | Insurance Claim Notification | | | | |

---

### Appendix C — Evidence Inventory Summary

*A consolidated list of all evidence items associated with this investigation, cross-referenced with the detailed records in Sections 3 and 6.*

| Evidence ID | Description | Type | Date Collected | Current Location | Status |
|---|---|---|---|---|---|
| EVD-001 | | | | | |
| EVD-002 | | | | | |
| IMG-001 | | | | | |
| LOG-001 | | | | | |

---

### Appendix D — IOC Dissemination Record

*Document all instances where IOCs identified in this investigation were shared with external parties (NACSA, threat intelligence platforms, sector peers, law enforcement).*

| IOC Reference | Recipient | Organization | Date Shared | Shared By | TLP Classification | Sharing Platform / Method | Acknowledgement |
|---|---|---|---|---|---|---|---|
| [IOC-N-001] | [Name] | [NACSA / FS-ISAC / etc.] | [DD/MM/YYYY] | [Name] | [TLP:AMBER] | [STIX/TAXII / Email / Portal] | [Yes/No] |

---

### Appendix E — Lessons Learned Register

*To be completed following case closure. Document findings that can improve organizational resilience and inform updates to security controls, policies, and procedures.*

| Finding ID | Category | Description | Recommendation | Priority | Responsible Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|
| LL-001 | [Detection / Prevention / Response / Recovery / Policy] | [Detailed description of lesson learned] | [Specific actionable recommendation] | [Critical/High/Medium/Low] | [Name/Team] | [DD/MM/YYYY] | [Open] |
| LL-002 | | | | | | | |

---

### Appendix F — Glossary of Terms

| Term | Definition |
|---|---|
| Act 854 | Cyber Security Act 2024, the primary Malaysian legislation governing cybersecurity obligations for NCII entities |
| NCII | National Critical Information Infrastructure — computer or computer system designated as critical under Act 854 |
| NACSA | National Cyber Security Agency — the competent authority under Act 854 |
| IOC | Indicator of Compromise — forensic artefact indicating potential malicious activity |
| TLP | Traffic Light Protocol — a framework for classifying and controlling the sharing of sensitive information |
| STIX/TAXII | Structured Threat Information Expression / Trusted Automated Exchange of Intelligence Information — standards for sharing threat intelligence |
| MITRE ATT&CK | Adversarial Tactics, Techniques & Common Knowledge — a globally accessible knowledge base of adversary behavior |
| RMiT | Risk Management in Technology — Bank Negara Malaysia policy document governing technology risk for licensed financial institutions |
| PDPA | Personal Data Protection Act 2010 (Act 709) |
| MYT | Malaysia Time (UTC+8) |

---

*End of Document — Case Reference: [INC-YYYY-NNNN] — [Organization Name]*

*This document is subject to legal privilege and confidentiality obligations. Unauthorized access, disclosure, or reproduction is strictly prohibited.*