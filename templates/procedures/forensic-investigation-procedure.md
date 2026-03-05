# Forensic Investigation Procedure

---

**Document ID:** [Document ID]
**Version:** 1.0
**Classification:** Confidential
**Framework:** Cyber Security Act 2024 (Act 854) — NACSA

---

| Metadata Field | Details |
|---|---|
| **Document Title** | Forensic Investigation Procedure |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | CISO / Forensics Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Approval Date** | [Approval Date] |
| **Document Status** | [Draft / Under Review / Approved] |

---

> **Handling Instructions:** This document is classified **Confidential**. It is intended solely for authorized personnel of [Organization Name] involved in cyber security incident response, forensic investigation, and related legal or regulatory functions. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This document must be stored in accordance with [Organization Name]'s Information Classification and Handling Policy.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Basis and Obligations](#3-regulatory-basis-and-obligations)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Forensic Investigation Principles](#5-forensic-investigation-principles)
6. [Evidence Preservation and Chain of Custody](#6-evidence-preservation-and-chain-of-custody)
7. [Forensic Image Acquisition](#7-forensic-image-acquisition)
8. [Forensic Analysis Methodology](#8-forensic-analysis-methodology)
9. [Forensic Tool Validation Requirements](#9-forensic-tool-validation-requirements)
10. [Forensic Investigation Report Preparation](#10-forensic-investigation-report-preparation)
11. [Coordination with Law Enforcement under Part VI](#11-coordination-with-law-enforcement-under-part-vi)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*This section states the intent of the procedure, the problem it addresses, and the outcomes it aims to achieve. Ensure the purpose is tightly aligned with the obligations imposed on National Critical Information Infrastructure (NCII) entities under the Cyber Security Act 2024.*

This procedure establishes the formal, standardized approach for [Organization Name] to conduct digital forensic investigations in response to cyber security incidents affecting its designated National Critical Information Infrastructure (NCII) systems. The procedure ensures that all forensic activities are conducted in a legally defensible, technically rigorous, and auditable manner, consistent with the obligations set out under the **Cyber Security Act 2024 (Act 854)**, in particular Sections 23 and 44.

The specific purposes of this procedure are to:

- Define the steps and responsibilities for initiating, conducting, and concluding a forensic investigation of a cyber security incident.
- Ensure the integrity, admissibility, and defensibility of digital evidence collected during an investigation.
- Establish a consistent methodology that supports both internal remediation and, where required, regulatory reporting or criminal prosecution.
- Protect [Organization Name] from legal liability arising from improper handling of digital evidence.
- Facilitate timely and accurate coordination with NACSA, relevant enforcement authorities, and law enforcement agencies as mandated under Part VI of Act 854.

---

## 2. Scope

*This section defines which systems, assets, people, incidents, and processes fall within the boundary of this procedure. Be explicit about what is in scope and what is out of scope to avoid ambiguity during an actual investigation.*

### 2.1 In Scope

This procedure applies to:

- All **NCII systems** owned, operated, or maintained by [Organization Name] as notified by or registered with the National Cyber Security Agency (NACSA) under Act 854.
- All **cyber security incidents** as defined under Section 2 of Act 854 that affect or are suspected to affect the availability, integrity, or confidentiality of NCII systems.
- All **digital assets** connected to, interfacing with, or forming part of the NCII environment, including:
  - On-premises servers, workstations, and endpoints
  - Network devices (firewalls, routers, switches, IDS/IPS)
  - Cloud-hosted assets and virtualized environments under [Organization Name]'s control
  - Removable storage media and portable devices
  - Operational Technology (OT) / Industrial Control Systems (ICS) where applicable
- All **personnel** of [Organization Name] involved in incident response, forensic investigation, IT operations, legal, and compliance functions.
- **Third-party service providers** and managed security service providers (MSSPs) operating under contractual obligations to [Organization Name], to the extent that their systems interface with NCII.

### 2.2 Out of Scope

The following are out of scope for this procedure unless otherwise directed by the CISO or a competent authority:

- Non-NCII systems that are not connected to or do not form part of the designated NCII environment.
- Physical security investigations not involving digital evidence.
- Fraud investigations that do not involve a cyber security component.
- Human Resources disciplinary investigations unless they intersect with a cyber security incident.

### 2.3 Triggering Events

This procedure is activated upon:

- Declaration of a **cyber security incident** under [Organization Name]'s Cyber Security Incident Response Plan (CSIRP).
- A **mandatory reporting obligation** triggered under Section 23 of Act 854.
- Direction from NACSA, the relevant sector regulator, or law enforcement to conduct a forensic investigation.
- A **litigation hold** or legal preservation notice issued by [Organization Name]'s Legal Counsel.
- Proactive management decision by the CISO following a significant security event.

---

## 3. Regulatory Basis and Obligations

*This section anchors the procedure explicitly in the applicable law and regulatory framework. Include the specific sections that impose obligations, and describe the nature of those obligations in plain language.*

### 3.1 Primary Legislation

| Legislation | Section / Clause | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 23 | Mandatory reporting of cyber security incidents affecting NCII. Forensic investigation supports the accuracy and completeness of incident reports. |
| Cyber Security Act 2024 (Act 854) | Section 44 | Powers of investigation by authorized officers; obligations on NCII entities to cooperate with and support investigative processes. |
| Cyber Security Act 2024 (Act 854) | Part VI (Sections 40–50) | Enforcement and investigation powers of NACSA and authorized officers, including powers of entry, search, and seizure of digital evidence. |
| Cyber Security Act 2024 (Act 854) | Section 29 | Obligations of NCII entities to implement and maintain cyber security measures, including incident response and investigation capabilities. |

### 3.2 Supporting Legislation and Standards

| Reference | Relevance |
|---|---|
| Evidence Act 1950 (Act 56) | Admissibility of digital evidence in Malaysian courts; requirements for authentication and chain of custody. |
| Personal Data Protection Act 2010 (Act 709) | Obligations during forensic collection and analysis involving personal data. |
| Computer Crimes Act 1997 (Act 563) | Offences that may be identified during forensic investigation; reporting obligations. |
| BNM Risk Management in Technology (RMiT) Policy | Applicable where [Organization Name] is a financial institution regulated by Bank Negara Malaysia; incident response and forensic requirements. |
| ISO/IEC 27037:2012 | Guidelines for identification, collection, acquisition, and preservation of digital evidence. |
| ISO/IEC 27042:2015 | Guidelines for analysis and interpretation of digital evidence. |
| NIST SP 800-86 | Guide to Integrating Forensic Techniques into Incident Response. |
| NACSA Cyber Security Framework | National framework requirements for NCII entities. |

### 3.3 Relationship to Other Internal Documents

| Document | Relationship |
|---|---|
| Cyber Security Incident Response Plan (CSIRP) | Parent document; this procedure operationalizes the forensic investigation phase of the CSIRP. |
| Evidence Management Policy | Governs the lifecycle of physical and digital evidence; this procedure implements evidence handling controls. |
| Information Classification and Handling Policy | Governs the classification and protection of forensic artefacts and reports. |
| Data Retention and Disposal Policy | Defines retention periods for forensic evidence; superseded by litigation hold where applicable. |
| Third Party Risk Management Policy | Applies when forensic investigation extends to third-party environments. |

---

## 4. Definitions and Abbreviations

*Define all technical, legal, and regulatory terms used in this procedure to ensure consistent interpretation by all users. Align definitions with those in Act 854 where available.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Cyber Security Incident** | As defined under Section 2 of Act 854: an act or omission that threatens or causes harm to, or a disruption to the normal functioning of, a computer or computer system, network, or data. |
| **NCII (National Critical Information Infrastructure)** | Any computer or computer system, network, service, or infrastructure designated as NCII by the Minister under Act 854, the disruption of which would have a debilitating impact on national security, economy, public health, safety, or essential services. |
| **Digital Evidence** | Any information of probative value that is stored or transmitted in binary form, including data on computers, networks, removable media, and other electronic devices. |
| **Forensic Image** | A bit-for-bit, sector-by-sector copy of a storage medium, capturing all data including deleted files, slack space, and unallocated space. |
| **Chain of Custody** | A chronological record documenting the seizure, custody, control, transfer, analysis, and disposition of digital evidence, ensuring its integrity and admissibility. |
| **Write Blocker** | A hardware or software device that prevents any data from being written to a storage medium during forensic acquisition, preserving the integrity of the original evidence. |
| **Hash Value** | A fixed-length cryptographic value (e.g., MD5, SHA-256) generated from a dataset, used to verify that evidence has not been altered. |
| **Volatile Data** | Data that is lost when power is removed from a device, including RAM contents, running processes, network connections, and logged-on users. |
| **Non-Volatile Data** | Data that persists after power loss, including data stored on hard drives, SSDs, and removable media. |
| **Forensic Artefact** | Any item of digital evidence collected and preserved during a forensic investigation. |
| **Authorized Officer** | As defined under Act 854: a person appointed by the Minister or NACSA with powers of investigation under Part VI. |
| **NACSA** | National Cyber Security Agency — the competent authority for cyber security matters in Malaysia. |
| **Litigation Hold** | A directive issued by Legal Counsel to preserve all information that may be relevant to pending or reasonably anticipated litigation. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CSIRP | Cyber Security Incident Response Plan |
| CTF | Chain of Custody Form |
| FIR | Forensic Investigation Report |
| FRT | Forensic Response Team |
| ICS | Industrial Control System |
| IOC | Indicator of Compromise |
| IR | Incident Response |
| MOU | Memorandum of Understanding |
| MSAB | Micro Systemation AB |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| OT | Operational Technology |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| SLA | Service Level Agreement |
| SOC | Security Operations Centre |
| TTP | Tactics, Techniques, and Procedures |

---

## 5. Forensic Investigation Principles

*This section establishes the overarching principles that govern all forensic activity conducted under this procedure. These principles are non-negotiable and must be adhered to in all investigations.*

All forensic investigations conducted by [Organization Name] shall be guided by the following core principles:

### 5.1 Legality

All forensic activities must be conducted within the bounds of applicable Malaysian law, including Act 854, the Evidence Act 1950, the Computer Crimes Act 1997, and the PDPA 2010. Evidence collection without lawful authority or proper authorization is prohibited.

### 5.2 Proportionality

The scope and intrusiveness of forensic investigation activities must be proportionate to the nature and severity of the incident being investigated. Investigators must avoid collecting data beyond what is necessary to achieve the investigative objective.

### 5.3 Integrity

- Original evidence must never be altered. All analysis must be conducted on forensic copies.
- Hash values must be calculated and verified at acquisition and at each subsequent stage of handling.
- Write blockers must be used when acquiring evidence from storage media.

### 5.4 Continuity (Chain of Custody)

An unbroken chain of custody must be maintained from the moment evidence is identified to its final disposition. Any gap or irregularity in the chain of custody may render evidence inadmissible.

### 5.5 Reproducibility

Forensic analysis must be conducted in a manner that allows another qualified forensic examiner to independently reproduce the results from the same evidence using the same or equivalent tools and methodology.

### 5.6 Impartiality

Investigators must remain objective and follow the evidence wherever it leads, without predetermining outcomes or tailoring findings to support a particular conclusion.

### 5.7 Competence

All personnel conducting forensic activities must possess the relevant qualifications, training, and experience as defined in Section 12.1 of this procedure. The use of approved and validated forensic tools is mandatory.

---

## 6. Evidence Preservation and Chain of Custody

*This section defines the detailed requirements for identifying, preserving, and maintaining the chain of custody for all digital evidence collected during a forensic investigation. This is the most legally critical phase of any investigation.*

### 6.1 Evidence Identification

Upon activation of this procedure, the Forensic Lead shall identify all potential sources of digital evidence relevant to the incident. Evidence sources shall be prioritized based on volatility (most volatile first) and relevance to the incident scope.

**Evidence Source Priority Order (Order of Volatility):**

| Priority | Evidence Source | Typical Volatility | Examples |
|---|---|---|---|
| 1 | System memory (RAM) | Seconds to minutes | Running processes, network connections, encryption keys, credentials |
| 2 | Network traffic and connections | Minutes | Active sessions, DNS cache, ARP cache |
| 3 | Temporary file system / swap | Hours | Temporary files, page files, swap space |
| 4 | System and application logs | Days | Event logs, syslog, application logs |
| 5 | Remote logging and monitoring | Days | SIEM logs, SOC telemetry |
| 6 | Physical storage media | Stable | Hard drives, SSDs, removable media |
| 7 | Archival media and backups | Stable | Tape backups, cloud snapshots, offsite backups |
| 8 | Printed output and written notes | Stable | Configuration printouts, operator logs |

### 6.2 Evidence Preservation Actions

*Document the specific preservation steps to be taken for each category of evidence. Include any system-specific considerations for the organization's environment.*

Upon identification of evidence sources, the Forensic Lead or designated investigator shall:

1. **Issue an immediate preservation directive** verbally and in writing to all personnel with access to affected systems, prohibiting any shutdown, restart, modification, or deletion of data on those systems.
2. **Isolate affected systems** from the network (where operationally safe to do so) to prevent further compromise, data exfiltration, or remote wiping by a threat actor.
3. **Capture volatile data** before any system shutdown or power cycle, in accordance with the order of volatility defined in Section 6.1.
4. **Photograph and document** the physical state of affected systems and their environment prior to any physical interaction.
5. **Activate litigation hold** by notifying [Organization Name]'s Legal Counsel where legal proceedings are anticipated.
6. **Notify backup administrators** to preserve all backup snapshots relevant to the incident time window and prevent their overwriting or expiry.

### 6.3 Chain of Custody Requirements

A Chain of Custody Form (CTF) must be initiated for every item of evidence collected. The CTF must capture and document every transfer of custody, from initial collection to final disposition.

**Minimum Required Fields — Chain of Custody Form:**

| Field | Description |
|---|---|
| Evidence Item ID | Unique identifier assigned to this specific item |
| Case / Incident Reference | Incident ticket or case number |
| Description of Evidence | Physical description, make, model, serial number, capacity, condition |
| Date and Time of Collection | UTC timestamp of initial collection |
| Location of Collection | Physical location and logical location (system name, IP address) |
| Collected By | Full name, position, and signature of collecting officer |
| MD5 Hash | Calculated at time of acquisition |
| SHA-256 Hash | Calculated at time of acquisition |
| Storage Location | Location where evidence is stored between handling events |
| Transfer Record | Each transfer of custody: from, to, date/time, purpose, signature |
| Access Log | Each access to evidence: accessor, date/time, purpose, tools used |
| Disposition | Final disposal or archival action, date, and authorizing officer |

**Custody Transfer Record (to be completed for each transfer):**

| Transfer No. | Date/Time (UTC) | Transferred From | Transferred To | Purpose | Received By (Signature) |
|---|---|---|---|---|---|
| 001 | [Date/Time] | [Name / Role] | [Name / Role] | [Purpose] | [Signature] |
| 002 | [Date/Time] | [Name / Role] | [Name / Role] | [Purpose] | [Signature] |

### 6.4 Evidence Storage and Security

- All physical evidence (storage media, devices) must be stored in a **designated, locked evidence storage facility** with access restricted to authorized personnel only.
- Access to the evidence storage facility must be logged with timestamps and personnel identification.
- Digital evidence stored on forensic workstations or evidence servers must be protected by:
  - Access controls limiting access to authorized investigators
  - Encryption at rest using AES-256 or equivalent
  - Write-once or append-only storage where technically feasible
  - Regular integrity verification using stored hash values
- Evidence must not be removed from secure storage except for the purpose of analysis, court proceedings, or authorized handover to an external authority, with all such events recorded on the CTF.

### 6.5 Evidence Retention

| Scenario | Minimum Retention Period |
|---|---|
| Incident with no legal proceedings | [Define per organization's data retention policy, e.g., 5 years] |
| Incident subject to regulatory investigation | Until NACSA or sector regulator formally closes the matter, plus [X] years |
| Incident subject to criminal proceedings | Until conclusion of all legal proceedings and appeal periods, plus [X] years |
| Litigation hold active | Until litigation hold is formally lifted by Legal Counsel |

> **Note:** In all cases, the most restrictive retention period applies. Forensic evidence must not be disposed of while any regulatory, legal, or internal disciplinary proceedings arising from the incident remain active or reasonably anticipated.

---

## 7. Forensic Image Acquisition

*This section prescribes the technical requirements and procedural steps for creating forensically sound copies of digital evidence. Adherence to this section is mandatory to ensure the integrity and admissibility of evidence.*

### 7.1 Acquisition Prerequisites

Before commencing image acquisition, the forensic investigator must:

- [ ] Obtain written authorization from the CISO (or designated authority) to acquire the relevant systems or media.
- [ ] Complete the Chain of Custody Form (Section 6.3) for the item to be acquired.
- [ ] Photograph the item in its current physical state.
- [ ] Document all visible serial numbers, model numbers, and identifiers.
- [ ] Verify that all forensic tools and write blockers to be used have current validation records (see Section 9).
- [ ] Prepare a forensically clean destination media of sufficient capacity, verified with a full wipe and hash verification.
- [ ] Ensure the forensic workstation's date and time are synchronized to UTC and documented.

### 7.2 Acquisition Methods

The appropriate acquisition method must be selected based on the type of evidence and operational constraints:

| Method | When to Use | Notes |
|---|---|---|
| **Physical (bit-for-bit) image** | Standard for seized storage media; offline systems | Captures all data including deleted files and unallocated space. Preferred method. |
| **Logical acquisition** | Live systems where physical acquisition would cause unacceptable operational impact; mobile devices | Collects only allocated files and active data. Document justification for choosing logical over physical. |
| **Live memory acquisition** | Running systems where volatile data is required | Must be performed before physical acquisition. Use approved RAM capture tools. |
| **Network traffic capture** | Active incidents with ongoing network activity | Use network tap or SPAN port; document capture start/end timestamps and interface details. |
| **Cloud environment acquisition** | Cloud-hosted NCII assets | Follow cloud provider's forensic procedures; capture logs, snapshots, and API access records. Document cloud provider cooperation. |
| **Virtual machine acquisition** | Virtualized workloads | Acquire at the hypervisor level (snapshot + VMDK/VHDX files) where possible. |
| **OT/ICS environment acquisition** | Industrial control systems | Engage OT-certified forensic specialist; do not apply IT forensic procedures without OT expertise. |

### 7.3 Physical Acquisition Procedure

1. Connect the source media to the forensic workstation via a **hardware write blocker**. Verify write blocker is functioning correctly before proceeding.
2. Document the write blocker make, model, firmware version, and serial number on the evidence worksheet.
3. Calculate and record the **MD5 and SHA-256 hash values** of the source media before acquisition.
4. Initiate the forensic imaging tool (see Section 9.2 for approved tools) and configure the acquisition to capture a full physical (bit-for-bit) image.
5. Document the acquisition start time (UTC) and the forensic tool settings used.
6. Upon completion, verify the acquisition by comparing the hash value of the forensic image against the hash of the source media. Both must match.
7. Record the acquisition end time (UTC) and the verified hash values on the evidence worksheet and CTF.
8. Create a **minimum of two copies** of the forensic image:
   - Working copy (for analysis)
   - Archive/master copy (stored separately, not to be used for analysis)
9. Calculate and record hash values for both copies. Verify both match the source.
10. Label all media (source, working copy, archive copy) with evidence item IDs, case references, dates, and investigator initials.

**Acquisition Verification Record:**

| Item | Value |
|---|---|
| Evidence Item ID | [Evidence Item ID] |
| Source Media Serial No. | [Serial Number] |
| Write Blocker (Make/Model/FW) | [Details] |
| Acquisition Tool (Name/Version) | [Tool Name and Version] |
| Acquisition Start Time (UTC) | [Date/Time] |
| Acquisition End Time (UTC) | [Date/Time] |
| Source MD5 Hash | [Hash Value] |
| Source SHA-256 Hash | [Hash Value] |
| Image MD5 Hash | [Hash Value] |
| Image SHA-256 Hash | [Hash Value] |
| Hash Verification Result | [ ] Match [ ] Mismatch — If mismatch, document in incident log |
| Acquired By | [Name / Signature] |
| Witnessed By | [Name / Signature] |

### 7.4 Live Memory Acquisition

*Document specific steps for volatile memory capture on the organization's primary operating system environments.*

When volatile data capture is required:

1. Document all visible system state (active processes, network connections, system time) via photographs and/or screen capture before any interaction.
2. Using an approved memory acquisition tool (see Section 9.2), execute the memory dump to a designated external or network storage location.
3. Do not write to the system's internal storage during memory acquisition.
4. Calculate and record the hash value of the memory dump file.
5. Document the system's time and date at the moment of acquisition and the offset from UTC.
6. Proceed immediately to physical storage acquisition following volatile capture.

### 7.5 Acquisition in Cloud Environments

*This section must be tailored to the specific cloud providers and services used by [Organization Name] for NCII workloads.*

For NCII workloads hosted in cloud environments:

- Engage the cloud provider's **legal and forensic support channel** promptly to preserve evidence before auto-deletion or log rotation occurs.
- Collect and preserve: access logs, audit trails, API call logs, instance snapshots, storage volume snapshots, network flow logs, identity and access management (IAM) records.
- Document the cloud provider's cooperation, reference numbers, and any data preservation confirmations received.
- Where evidence is obtained from the cloud provider under compulsion (e.g., court order or NACSA direction), coordinate with Legal Counsel and follow Section 11.

---

## 8. Forensic Analysis Methodology

*This section defines the structured analytical approach that investigators must follow when examining forensic evidence. The methodology must be systematic, documented, and reproducible.*

### 8.1 Pre-Analysis Preparation

Before commencing analysis:

1. Verify the integrity of the working copy by re-hashing and comparing against the values recorded at acquisition.
2. Mount the forensic image in read-only mode or within the forensic analysis platform to prevent accidental modification.
3. Document the analysis environment: workstation name, OS version, forensic tool versions, date/time (UTC).
4. Create an **Analysis Log** for the case, recording every analytical action, finding, and decision made during the investigation.

### 8.2 Triage and Scoping

*Initial triage should rapidly identify the most relevant evidence to focus full analysis resources on the highest-value sources.*

| Triage Activity | Description | Output |
|---|---|---|
| Timeline establishment | Determine the incident's probable start date and time window | Incident timeline |
| System identification | Identify all affected systems and their roles in the NCII | Affected asset list |
| IOC extraction | Extract initial Indicators of Compromise from available logs | IOC list |
| Attack vector hypothesis | Form initial hypothesis of attack vector(s) based on available evidence | Preliminary hypothesis |
| Scope confirmation | Confirm or refine the investigation scope with the CISO | Updated scope statement |

### 8.3 Evidence Analysis — Key Activities

*Each investigation should systematically address the following analytical categories as applicable to the incident type. Document findings for each category in the Analysis Log.*

#### 8.3.1 Timeline Analysis

- Reconstruct a chronological timeline of events using filesystem timestamps (MAC times), log timestamps, and network artefacts.
- Correlate timestamps across multiple evidence sources, accounting for time zone differences and clock skew.
- Use a standardized timeline format (e.g., CSV or XLSX) for all timeline entries.

**Timeline Entry Format:**

| Timestamp (UTC) | Source | Event Type | Description | Significance | Evidence Ref |
|---|---|---|---|---|---|
| [YYYY-MM-DD HH:MM:SS] | [Log/File/System] | [Event Type] | [Description] | [High/Medium/Low] | [Evidence Item ID] |

#### 8.3.2 Malware and Artefact Analysis

- Identify and document any malicious executables, scripts, or files present on affected systems.
- Conduct static analysis (file metadata, hashes, strings, PE analysis) on all suspect files.
- Conduct dynamic analysis in an isolated, air-gapped sandbox environment.
- Cross-reference identified artefact hashes against threat intelligence feeds and public malware databases (e.g., VirusTotal — note: do not submit samples containing personally identifiable information or sensitive organizational data to public services without authorization).
- Document TTPs observed, mapped to MITRE ATT&CK framework where applicable.

| Artefact ID | File Name | File Path | SHA-256 Hash | File Type | First Seen (UTC) | MITRE ATT&CK Technique | Analysis Notes |
|---|---|---|---|---|---|---|---|
| [ART-001] | [Filename] | [Path] | [Hash] | [Type] | [Timestamp] | [Technique ID] | [Notes] |

#### 8.3.3 Log Analysis

- Analyse relevant system logs, application logs, security logs, and network logs within the identified incident time window.
- Correlate log entries across multiple sources to reconstruct the attacker's actions.
- Identify any log gaps, deletions, or manipulation that may indicate anti-forensic activity.

**Log Sources to Examine (as applicable):**

| Log Source | Location / System | Retention Period | Relevant Events |
|---|---|---|---|
| Windows Event Logs | [System Name / Path] | [Period] | Authentication, process creation, policy changes |
| Syslog (Linux/Unix) | [System Name / Path] | [Period] | Authentication, system events, service activity |
| Firewall Logs | [Firewall System] | [Period] | Blocked/allowed traffic, policy violations |
| Web Application Logs | [Application / Path] | [Period] | Requests, errors, authentication attempts |
| Database Audit Logs | [DB System] | [Period] | Query activity, privilege use, data exports |
| Active Directory Logs | [AD System] | [Period] | Account changes, privilege escalation, lateral movement |
| Email Gateway Logs | [Gateway System] | [Period] | Phishing, malicious attachments, data exfiltration |
| SIEM / SOC Alerts | [SIEM Platform] | [Period] | Correlated security alerts |
| Cloud Audit Logs | [Cloud Provider/Service] | [Period] | API calls, IAM changes, resource creation/deletion |

#### 8.3.4 Network Forensic Analysis

- Analyse captured network traffic (PCAP files) and NetFlow data for evidence of attacker activity.
- Identify C2 (Command and Control) communications, data exfiltration, lateral movement, and exploitation attempts.
- Document all external IP addresses, domains, and URLs involved in the incident.

#### 8.3.5 Memory Forensic Analysis

- Analyse memory dumps for evidence of running malicious processes, injected code, encryption keys, credentials, and network connections active at the time of capture.
- Use approved memory analysis frameworks (see Section 9.2).

#### 8.3.6 Recovery of Deleted or Hidden Data

- Attempt recovery of deleted files from unallocated space using approved data carving tools.
- Examine file system artefacts (recycle bin, link files, prefetch, registry hives) for evidence of deleted or hidden activity.
- Document all recovered artefacts with their evidence source and recovery methodology.

### 8.4 Attribution and Impact Assessment

*Upon completion of evidence analysis, document findings related to the probable threat actor, attack vector, and business impact.*

| Assessment Item | Findings |
|---|---|
| **Probable attack vector** | [Phishing / Supply chain / External exploit / Insider / Unknown] |
| **Initial access point** | [System name, vulnerability, or account exploited] |
| **Threat actor classification** | [Nation-state / Criminal / Hacktivist / Insider / Unknown] |
| **TTPs observed** | [MITRE ATT&CK techniques identified] |
| **Data potentially compromised** | [Categories of data; estimated volume] |
| **Systems confirmed compromised** | [List of confirmed affected systems] |
| **Systems suspected compromised** | [List of systems under investigation] |
| **Duration of compromise** | [Estimated period of attacker access] |
| **Impact to NCII operations** | [Availability / Integrity / Confidentiality impact] |
| **Regulatory notification triggered** | [Yes / No — reference to Section 23 report if applicable] |

### 8.5 Analysis Completion and Quality Review

Upon completion of analysis:

1. The Forensic Lead must review the Analysis Log and all findings for completeness, accuracy, and consistency.
2. A **peer review** of key findings must be conducted by a second qualified forensic examiner not involved in the primary analysis.
3. Any discrepancies identified during peer review must be resolved and documented before the report is drafted.
4. Hash values of all evidence items must be re-verified.

---

## 9. Forensic Tool Validation Requirements

*This section defines the mandatory requirements for validating, approving, and maintaining forensic tools used in investigations. The use of unvalidated tools may compromise the admissibility of evidence.*

### 9.1 Tool Validation Principles

All forensic tools used by [Organization Name] in investigations related to NCII systems must:

- Be validated prior to use in a live investigation to confirm they perform as expected without introducing artefacts or modifying evidence.
- Be version-controlled; the specific version used in each investigation must be documented.
- Be sourced from reputable vendors or established open-source projects with published documentation.
- Have documented validation records retained for a minimum of [X] years or for the lifetime of any case in which the tool was used, whichever is longer.

### 9.2 Approved Forensic Tool Register

*This register must be reviewed and updated at least annually, or whenever new tools are introduced. All tools must be validated before inclusion.*

| Tool Name | Version | Category | Validation Method | Validation Date | Validated By | Approved For |
|---|---|---|---|---|---|---|
| [e.g., FTK Imager] | [Version] | Disk Acquisition | [Test cases against known results] | [Date] | [Name / Role] | All NCII investigations |
| [e.g., Autopsy] | [Version] | Forensic Analysis | [Test cases against known results] | [Date] | [Name / Role] | All NCII investigations |
| [e.g., Volatility 3] | [Version] | Memory Analysis | [Test cases against known results] | [Date] | [Name / Role] | Memory forensics |
| [e.g., Wireshark] | [Version] | Network Analysis | [Vendor documentation + test cases] | [Date] | [Name / Role] | Network forensics |
| [e.g., KAPE] | [Version] | Triage / Artefact Collection | [Test cases against known results] | [Date] | [Name / Role] | Live triage |
| [e.g., Cellebrite UFED] | [Version] | Mobile Device Acquisition | [Vendor certification] | [Date] | [Name / Role] | Mobile forensics |
| [e.g., X-Ways Forensics] | [Version] | Forensic Analysis | [Test cases against known results] | [Date] | [Name / Role] | All NCII investigations |
| [Tool Name] | [Version] | [Category] | [Validation Method] | [Date] | [Name] | [Scope] |

### 9.3 Tool Validation Procedure

*Document the process for validating a new tool before it is added to the Approved Forensic Tool Register.*

1. **Obtain the tool** from the official vendor or repository. Verify the installer's integrity using the vendor-published hash value.
2. **Review vendor documentation** to understand the tool's capabilities, known limitations, and any documented artefacts it may introduce.
3. **Prepare a validation environment** using a test system or known reference data set (e.g., NIST CFREDS test images or internally prepared test data with known content).
4. **Execute defined test cases** covering the tool's primary functions relevant to [Organization Name]'s investigation use cases. Document expected and actual results for each test case.
5. **Compare results** against expected outcomes and, where possible, against results from an already-validated tool performing the same function.
6. **Document the validation results** in the Tool Validation Record and obtain sign-off from the Forensics Lead or CISO.
7. **Add to the Approved Tool Register** only after successful validation and sign-off.
8. **Revalidate** upon every version upgrade that may affect core functionality.

**Tool Validation Record Template:**

| Field | Detail |
|---|---|
| Tool Name | [Name] |
| Version Validated | [Version] |
| Validation Environment | [OS, hardware, date] |
| Reference Data Used | [Test image / dataset details] |
| Test Cases Executed | [Number and summary] |
| Known Limitations Identified | [List] |
| Validation Result | [ ] Pass [ ] Fail [ ] Pass with conditions |
| Conditions / Notes | [If applicable] |
| Validated By | [Name / Role / Signature] |
| Approved By | [Forensics Lead / CISO — Name / Signature] |
| Date | [Date] |

---

## 10. Forensic Investigation Report Preparation

*This section defines the mandatory requirements for preparing the Forensic Investigation Report (FIR), which is the primary deliverable of any forensic investigation. The FIR must be accurate, complete, objective, and prepared to a standard suitable for submission to NACSA, sector regulators, legal counsel, and courts if required.*

### 10.1 Report Classification and Handling

All Forensic Investigation Reports are classified **Confidential** by default. Reports submitted to external authorities must be approved by the CISO and Legal Counsel prior to release. The number of copies produced and their recipients must be recorded in the CTF and case file.

### 10.2 Mandatory Report Sections

Every Forensic Investigation Report produced under this procedure must include, at minimum, the following sections:

| Section | Content Requirement |
|---|---|
| **Cover Page** | Report title, case reference, investigation date range, classification, author, CISO approval, version |
| **Executive Summary** | Non-technical summary of the incident, key findings, and recommended actions — suitable for senior management |
| **Investigation Scope and Objectives** | Confirmed scope, objectives, out-of-scope items, and triggering event |
| **Methodology** | Description of the forensic methodology applied, referencing this procedure |
| **Evidence Inventory** | Complete list of all evidence items, with CTF references and hash values |
| **Technical Findings** | Detailed technical findings supported by evidence references |
| **Timeline of Events** | Chronological reconstruction of the incident |
| **Attribution Assessment** | Analysis of probable threat actor, with confidence level and supporting evidence |
| **Impact Assessment** | Confirmed and suspected impact to NCII systems, data, and operations |
| **Indicators of Compromise** | Complete IOC list (hashes, IPs, domains, file paths, registry keys, etc.) |
| **Conclusions** | Investigator's conclusions drawn from the evidence |
| **Recommendations** | Prioritized remediation and preventive recommendations |
| **Limitations and Caveats** | Any limitations on the investigation's scope or conclusions |
| **Appendices** | Evidence logs, tool validation references, full timeline data, raw IOC lists |

### 10.3 Report Drafting Standards

- All findings must be directly supported by evidence references (Evidence Item ID + specific artefact).
- Investigators must distinguish clearly between facts (directly evidenced), inferences (reasonably drawn from evidence), and hypotheses (unconfirmed possibilities).
- Technical language must be appropriate for the intended audience; a separate executive summary is mandatory.
- Timestamps must be presented in UTC with the local time offset noted.
- All references to personal data must comply with the PDPA 2010 and be limited to what is strictly necessary for the investigation.

### 10.4 Report Review and Approval

| Review Stage | Reviewer | Required Action |
|---|---|---|
| Technical Review | Second forensic examiner (peer reviewer) | Verify technical accuracy, evidence references, and reproducibility of findings |
| Legal Review | Legal Counsel | Verify legal compliance, privilege considerations, and suitability for external submission |
| CISO Approval | CISO | Approve report for distribution and any external submission |
| Regulatory Submission | CISO + Legal Counsel (joint) | Approve specific version for submission to NACSA or sector regulator |

### 10.5 Report Distribution and Version Control

- Reports must be distributed on a strict **need-to-know** basis.
- All recipients must be recorded in the case file.
- Reports submitted externally must be watermarked with the recipient's identity.
- A report version log must be maintained in the case file, recording every version produced, the changes made, and the reason for revision.

---

## 11. Coordination with Law Enforcement under Part VI

*This section governs [Organization Name]'s obligations and procedures when cooperating with NACSA Authorized Officers or law enforcement agencies under Part VI of the Cyber Security Act 2024. This section requires Legal Counsel involvement at all stages.*

### 11.1 Regulatory Context

Part VI of the Cyber Security Act 2024 (Sections 40–50) grants NACSA and its Authorized Officers extensive powers of investigation, including:

- Power to enter premises and access computer systems (Section 44).
- Power to require the production of documents and records (Section 44).
- Power to examine, copy, or take possession of digital evidence.
- Power to compel persons to provide decryption keys or assistance in accessing encrypted data.

[Organization Name] is legally obligated to cooperate fully with NACSA Authorized Officers exercising powers under Part VI, subject to the legal safeguards described in this section.

### 11.2 Receipt of NACSA Investigation Notice or Direction

Upon receipt of any notice, direction, warrant, or request from a NACSA Authorized Officer or law enforcement agency:

1. The receiving employee must **immediately notify** the CISO and Legal Counsel. No response or cooperation should be provided before this notification.
2. Legal Counsel must **verify the credentials** of the Authorized Officer and the lawful authority for the request (e.g., warrant, notice under specific section of Act 854).
3. Legal Counsel must **review the scope** of the request and advise on compliance obligations and any applicable legal professional privilege claims.
4. The CISO must **designate a single point of contact** (SPOC) for all communications with the external authority.
5. All interactions with the external authority must be **documented in writing**, including the date/time, names of individuals present, and the substance of all communications.

### 11.3 Providing Assistance and Evidence to Authorized Officers

When authorized to provide assistance:

- Provide access or evidence only to the extent specified in the legal authority presented. Do not volunteer information beyond what is legally required.
- Maintain copies of all evidence provided. Document all handovers on the Chain of Custody Form and obtain a signed receipt from the receiving officer.
- Do not destroy, modify, or conceal any evidence that is or may be subject to a legal hold or NACSA direction.
- Ensure that the SPOC accompanies Authorized Officers during any on-site investigation activities.

**Evidence Handover Record (for transfer to external authority):**

| Field | Detail |
|---|---|
| Receiving Authority | [NACSA / PDRM / Other] |
| Authorized Officer Name | [Name and designation] |
| Badge / Credential No. | [Number] |
| Legal Authority Reference | [Warrant/Notice No. and Section of Act] |
| Date and Time of Handover | [Date/Time UTC] |
| Evidence Items Transferred | [List by Evidence Item ID] |
| [Organization Name] SPOC | [Name / Signature] |
| Receiving Officer Signature | [Signature and date] |

### 11.4 Mandatory Incident Reporting under Section 23

*This sub-section addresses the intersection between forensic investigation findings and the mandatory incident reporting obligation under Section 23 of Act 854.*

Where the forensic investigation confirms or reveals information that triggers or updates a mandatory incident report under Section 23:

1. The CISO must ensure that the incident report to NACSA is updated promptly with new findings.
2. The Forensic Lead must provide factual input to the incident report, ensuring accuracy of technical details.
3. Legal Counsel must review the incident report before submission to NACSA to ensure it does not inadvertently waive privilege or create unintended legal exposure.
4. All versions of the incident report submitted to NACSA must be retained in the case file.

### 11.5 Interface with Royal Malaysia Police (PDRM)

Where the forensic investigation reveals evidence of criminal offences (e.g., under the Computer Crimes Act 1997), the CISO and Legal Counsel must jointly assess whether to make a police report to PDRM. If a police report is filed:

- Coordinate evidence handover with PDRM in accordance with Section 11.3.
- Maintain separation between internal investigation records and materials provided to PDRM unless compelled by lawful authority.
- Engage Legal Counsel throughout all PDRM interactions.

### 11.6 Confidentiality of Investigation

- The existence, scope, and findings of any forensic investigation are confidential and must not be disclosed externally except as required by law, regulatory obligation, or as approved by the CISO and Legal Counsel.
- Employees involved in or aware of the investigation must be reminded of their confidentiality obligations.
- Media inquiries or public communications relating to the investigation must be directed to [Organization Name]'s Communications / PR function and coordinated with Legal Counsel.

---

## 12. Roles and Responsibilities

*This section defines the roles involved in forensic investigation activities and their responsibilities, using a RACI framework. Ensure all roles are mapped to actual positions within [Organization Name].*

### 12.1 Role Descriptions

| Role | Description / Qualification Requirements |
|---|---|
| **Chief Information Security Officer (CISO)** | Senior accountable owner of the forensic investigation. Authorizes investigations, approves reports, and manages external coordination. Must hold appropriate security leadership qualification. |
| **Forensics Lead** | Qualified digital forensic examiner responsible for leading investigations. Must hold recognized forensic certification (e.g., [Certified Forensic Computer Examiner / GCFE / CCE / equivalent]) and have [X] years of relevant experience. |
| **Forensic Investigator** | Trained forensic examiner conducting evidence collection, acquisition, and analysis under the direction of the Forensics Lead. |
| **Incident Response Manager** | Manages the broader incident response effort; interfaces with Forensics Lead to ensure forensic activities align with the CSIRP timeline and remediation requirements. |
| **SOC Analyst** | Provides log data, SIEM alerts, and network telemetry to support the forensic investigation. |
| **IT Operations** | Provides access to systems, network diagrams, asset inventories, and technical support during the investigation. |
| **Legal Counsel** | Reviews and advises on all legal aspects of the investigation, external submissions, and law enforcement coordination. |
| **Data Protection Officer (DPO)** | Advises on PDPA obligations when personal data is involved in evidence collection or analysis. |
| **Senior Management / EXCO** | Receives executive briefings; approves significant actions (e.g., system shutdowns, regulatory disclosures). |
| **Human Resources** | Engaged where the investigation involves employee conduct or internal disciplinary matters. |
| **Third-Party Forensic Provider** | External forensic service provider engaged where internal capacity is insufficient. Must be bound by NDA and operating under a written scope of work approved by the CISO. |

### 12.2 RACI Matrix

**Activity Key:** R = Responsible, A = Accountable, C = Consulted, I = Informed

| Activity | CISO | Forensics Lead | Forensic Investigator | IR Manager | SOC Analyst | IT Operations | Legal Counsel | DPO | Senior Mgmt |
|---|---|---|---|---|---|---|---|---|---|
| Authorize forensic investigation | A | R | I | C | I | I | C | I | I |
| Incident triage and scope definition | C | A/R | R | R | C | C | C | I | I |
| Evidence preservation directive | A | R | R | C | C | C | C | I | I |
| Evidence collection and acquisition | I | A | R | I | C | C | I | I | I |
| Chain of custody maintenance | A | R | R | I | I | I | C | I | I |
| Forensic analysis | I | A | R | I | C | C | I | I | I |
| Tool validation | A | R | C | I | I | I | I | I | I |
| Report drafting | C | A/R | R | C | I | I | C | I | I |
| Technical peer review | I | A | R | I | I | I | I | I | I |
| Legal review of report | C | C | I | I | I | I | A/R | C | I |
| CISO approval of report | A/R | C | I | C | I | I | C | I | I |
| NACSA incident report (Section 23) | A/R | C | I | C | I | I | C | I | I |
| NACSA / law enforcement coordination | A | R | I | C | I | I | C | I | I |
| Executive briefing | R | C | I | C | I | I | C | I | A |
| Evidence retention and disposal | A | R | R | I | I | C | C | I | I |
| Procedure review and update | A | R | C | C | I | I | C | I | I |

---

## 13. Review and Approval

### 13.1 Review Schedule

This procedure shall be reviewed on an **annual** basis, or upon any of the following triggering events:

- Amendment to the Cyber Security Act 2024 or associated subsidiary legislation.
- Direction or guidance issued by NACSA affecting forensic investigation requirements.
- Significant lessons learned arising from a forensic investigation conducted under this procedure.
- Significant changes to [Organization Name]'s NCII environment or technology stack.
- Introduction of new forensic tools or methodologies.
- Recommendations arising from an internal audit or external assessment.

### 13.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name / Role] | Initial release |
| [1.1] | [Date] | [Author Name / Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name / Role] | [Description of changes] |

### 13.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Forensics Lead | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Legal Counsel | [Name] | [Signature] | [Date] |
| Chief Executive Officer / Managing Director | [Name] | [Signature] | [Date] |
| [Additional Approver, if required] | [Name] | [Signature] | [Date] |

---

## 14. References

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 23** | Mandatory obligation to report cyber security incidents affecting NCII. Forensic investigation findings inform and support the accuracy of mandatory incident reports. |
| **Cyber Security Act 2024 (Act 854), Section 29** | Obligations of NCII entities to implement and maintain cyber security measures, including incident response and investigation capabilities. |
| **Cyber Security Act 2024 (Act 854), Section 44** | Powers of Authorized Officers to investigate; obligations of NCII entities to cooperate with investigations, provide access, produce records, and provide assistance. |
| **Cyber Security Act 2024 (Act 854), Part VI (Sections 40–50)** | Comprehensive enforcement and investigation powers framework governing the conduct of official investigations and the duties of NCII entities. |
| **Evidence Act 1950 (Act 56), Sections 90A–90B** | Admissibility of computer-generated documents and statements as evidence in Malaysian courts; authentication requirements. |
| **Personal Data Protection Act 2010 (Act 709)** | Data protection obligations applicable when personal data is encountered during forensic evidence collection and analysis. |
| **Computer Crimes Act 1997 (Act 563)** | Defines computer-related criminal offences potentially identified during forensic investigation; relevant to law enforcement reporting obligations. |
| **Bank Negara Malaysia, Risk Management in Technology (RMiT) Policy Document** | Applicable where [Organization Name] is a BNM-regulated financial institution; incident response, forensic, and reporting requirements. |
| **ISO/IEC 27037:2012** — *Information technology — Security techniques — Guidelines for identification, collection, acquisition, and preservation of digital evidence* | International standard for digital evidence handling; referenced as technical best practice for acquisition and preservation procedures. |
| **ISO/IEC 27042:2015** — *Information technology — Security techniques — Guidelines for the analysis and interpretation of digital evidence* | International standard for forensic analysis methodology; referenced for analysis and reporting procedures. |
| **NIST Special Publication 800-86** — *Guide to Integrating Forensic Techniques into Incident Response* | Technical guidance on integrating forensic capabilities into incident response. |
| **NACSA National Cyber Security Framework** | National framework requirements for NCII entities in Malaysia. |
| **MITRE ATT&CK Framework** | Adversarial tactics and techniques knowledge base used for TTP mapping during analysis. |
| **[Organization Name] Cyber Security Incident Response Plan (CSIRP)** | Parent document governing the broader incident response lifecycle. |
| **[Organization Name] Evidence Management Policy** | Governing policy for evidence lifecycle management. |
| **[Organization Name] Information Classification and Handling Policy** | Governing policy for classification and handling of forensic artefacts and reports. |

---

## 15. Appendices

### Appendix A — Forensic Investigation Activation Checklist

*Use this checklist at the point of investigation activation to ensure all initial steps are completed without omission.*

| # | Checklist Item | Completed By | Date/Time (UTC) | Notes |
|---|---|---|---|---|
| 1 | Received and documented investigation trigger event | | | |
| 2 | Notified CISO and obtained authorization to investigate | | | |
| 3 | Notified Legal Counsel | | | |
| 4 | Assigned Forensics Lead and investigation team | | | |
| 5 | Issued evidence preservation directive to IT Operations and relevant staff | | | |
| 6 | Activated litigation hold (if applicable) | | | |
| 7 | Notified backup administrators to preserve relevant snapshots | | | |
| 8 | Confirmed NACSA incident report obligation under Section 23 (Yes / No) | | | |
| 9 | Established secure case file and evidence storage location | | | |
| 10 | Initiated Chain of Custody Forms for all identified evidence sources | | | |
| 11 | Confirmed forensic tool availability and validation currency | | | |
| 12 | Briefed investigation team on scope, objectives, and confidentiality obligations | | | |

---

### Appendix B — Chain of Custody Form (Template)

*A printable Chain of Custody Form for physical evidence items. This form must accompany all physical evidence items at all times.*

**CHAIN OF CUSTODY FORM**
**[Organization Name] — CONFIDENTIAL**

| Field | Detail |
|---|---|
| **Case / Incident Reference** | |
| **Evidence Item ID** | |
| **Description** | |
| **Make / Model** | |
| **Serial Number** | |
| **Condition at Collection** | |
| **Date / Time of Collection (UTC)** | |
| **Collection Location** | |
| **Collected By (Print)** | |
| **Collected By (Signature)** | |
| **MD5 Hash (at acquisition)** | |
| **SHA-256 Hash (at acquisition)** | |
| **Current Storage Location** | |

**Custody Transfer Log:**

| Transfer No. | Date/Time (UTC) | From (Name/Role) | To (Name/Role) | Reason | Received By (Signature) |
|---|---|---|---|---|---|
| | | | | | |
| | | | | | |
| | | | | | |

---

### Appendix C — Forensic Image Acquisition Worksheet (Template)

*Complete one worksheet per evidence item acquired. Attach to the Chain of Custody Form.*

| Field | Detail |
|---|---|
| **Evidence Item ID** | |
| **Case Reference** | |
| **Acquisition Type** | [ ] Physical [ ] Logical [ ] Memory [ ] Network Capture [ ] Cloud |
| **Source Device Description** | |
| **Source Serial Number** | |
| **Source Capacity** | |
| **Write Blocker (Make/Model/S/N/FW)** | |
| **Acquisition Tool (Name/Version)** | |
| **Forensic Workstation (Name/OS)** | |
| **Workstation Date/Time (UTC at start)** | |
| **Acquisition Start Time (UTC)** | |
| **Acquisition End Time (UTC)** | |
| **Source MD5 Hash** | |
| **Source SHA-256 Hash** | |
| **Image MD5 Hash** | |
| **Image SHA-256 Hash** | |
| **Hash Verification Result** | [ ] Verified Match [ ] MISMATCH — Escalate immediately |
| **Destination Media (Evidence Item ID)** | |
| **Working Copy Location** | |
| **Archive Copy Location** | |
| **Acquired By (Print / Signature)** | |
| **Witnessed By (Print / Signature)** | |
| **Notes** | |

---

### Appendix D — Approved Forensic Tool Register

*Maintain a current copy of this register. All changes require Forensics Lead approval.*

| Tool Name | Current Version | Category | Validation Date | Next Review Due | Validated By | Status |
|---|---|---|---|---|---|---|
| [Tool Name] | [Version] | [Category] | [Date] | [Date] | [Name] | [Active / Under Review / Deprecated] |

---

### Appendix E — Evidence Handover Record to External Authority

*Complete in full whenever evidence is transferred to NACSA, PDRM, or any other external authority. Retain a copy in the case file.*

| Field | Detail |
|---|---|
| **Case Reference** | |
| **Receiving Authority** | |
| **Authorized Officer Name** | |
| **Designation / Badge No.** | |
| **Legal Authority (Warrant/Notice No., Section)** | |
| **Date / Time of Handover (UTC)** | |
| **Purpose of Handover** | |
| **Evidence Items Transferred** | |
| **[Org Name] SPOC Present (Print / Signature)** | |
| **Legal Counsel Present / Advised (Print / Signature)** | |
| **Receiving Officer Signature** | |
| **Receipt Document Reference** | |

---

### Appendix F — Incident Report Template Cross-Reference (Section 23, Act 854)

*This appendix maps forensic investigation outputs to the fields required in a Section 23 mandatory incident report to NACSA.*

| Section 23 Report Field | Forensic Investigation Source |
|---|---|
| Nature and category of incident | Forensic findings — Section 8.3 |
| Date and time of discovery | Incident log; forensic timeline |
| Affected NCII systems and services | Affected asset list — Section 8.2 |
| Impact to NCII operations | Impact assessment — Section 8.4 |
| Probable cause / attack vector | Attribution assessment — Section 8.4 |
| Actions taken to contain / recover | IR Manager's containment and recovery log |
| Data categories potentially affected | Forensic findings; DPO advice |
| Supporting evidence reference | Evidence inventory — FIR Section |
| Further investigation status | Forensics Lead status update |

---

### Appendix G — Glossary Addendum

*Use this appendix to add organization-specific terms, acronyms, or system names that are not defined in Section 4.*

| Term | Definition | Reference |
|---|---|---|
| [Term] | [Definition] | [Internal policy / external standard] |
| [Term] | [Definition] | [Internal policy / external standard] |

---

*— End of Document —*

---

**Document Control Notice:** This document is subject to annual review. The current approved version is maintained in [Organization Name]'s document management system. Printed copies are uncontrolled. If you are reading a printed copy, verify currency against the document management system before relying on this document.

| Field | Detail |
|---|---|
| **Document Title** | Forensic Investigation Procedure |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Next Review Date** | [Next Review Date] |
| **Owner** | CISO / Forensics Lead — [Organization Name] |