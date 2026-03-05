# Security Event Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | Continuous (Real-Time) |
| **Approved By** | [Approved By] |

---

> **Regulatory Basis:** Cyber Security Act 2024 (Act 854) — National Cyber Security Agency (NACSA)
> **Applicable Sections:** Section 18 (Cybersecurity Obligations of NCII Sector Leads), Section 23 (Reporting of Cybersecurity Incidents)
> **Mandatory:** Yes

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Aggregated Security Events](#2-aggregated-security-events)
3. [Correlation Rules Output](#3-correlation-rules-output)
4. [Alert Generation](#4-alert-generation)
5. [Threat Detection Events](#5-threat-detection-events)
6. [Compliance-Relevant Events](#6-compliance-relevant-events)
7. [Log Retention Policy](#7-log-retention-policy)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the framework and operational standards governing **Security Event Logs** maintained by [Organization Name] as a designated National Critical Information Infrastructure (NCII) entity under the **Cyber Security Act 2024 (Act 854)**. The Security Event Logs constitute a centralised, continuous record of security-significant events aggregated by the Security Information and Event Management (SIEM) platform across all NCII-designated systems.

These logs serve as the authoritative audit trail for:

- Demonstrating compliance with cybersecurity obligations under **Act 854, Section 18**
- Supporting timely incident detection, investigation, and reporting obligations under **Act 854, Section 23**
- Enabling forensic analysis, threat hunting, and post-incident review
- Providing evidence of due diligence to NACSA, regulators, and auditors

### 1.2 Scope

*This section defines the systems, environments, and log sources captured within the centralised SIEM. Update the source inventory table to reflect the actual NCII asset register.*

This policy applies to all systems, services, and infrastructure components classified as NCII assets within [Organization Name], including but not limited to:

| Scope Boundary | Included | Excluded |
|---|---|---|
| **Systems** | All NCII-designated production systems | Non-NCII development/test environments (unless connected to NCII) |
| **Networks** | Internal LAN, DMZ, OT/ICS networks, cloud VPCs | Fully isolated lab networks |
| **Endpoints** | Servers, workstations, privileged access workstations (PAWs) | Personal BYOD devices (unless accessing NCII resources) |
| **Applications** | Core banking/operational systems, identity platforms, security tools | Third-party SaaS with no NCII data access |
| **Cloud** | IaaS/PaaS tenancies processing NCII data | Public-facing CDN edge nodes (unless generating security events) |
| **OT/ICS** | [List OT/ICS systems as applicable] | [List exclusions as applicable] |

### 1.3 Log Collection Architecture

*Provide a high-level description of the SIEM architecture and data flow. Reference the organisation's SIEM Architecture Document if available.*

| Component | Description | Reference |
|---|---|---|
| **SIEM Platform** | [SIEM Product Name, e.g., Splunk / IBM QRadar / Microsoft Sentinel] | [Architecture Document ID] |
| **SIEM Version** | [Version] | — |
| **Log Aggregation Method** | [Agent-based / Syslog / API / Mix] | — |
| **Storage Backend** | [Storage platform and location] | — |
| **SIEM Operator** | [Internal SOC / Managed SIEM Provider Name] | [MSS Contract Ref] |
| **Primary SOC Location** | [SOC Location / Remote] | — |

---

## 2. Aggregated Security Events

### 2.1 Overview

*This section documents the categories and sources of security events ingested into the centralised SIEM. Maintain the source inventory to reflect the current state of NCII-connected systems. Each source should map to a log type and normalisation standard.*

Aggregated security events are collected in real time from all in-scope NCII systems. All events are normalised to a common schema within the SIEM to enable correlation and unified search.

### 2.2 Log Source Inventory

| Source ID | System / Device Name | Log Type | Collection Method | Event Volume (EPS) | Normalisation Schema | Status |
|---|---|---|---|---|---|---|
| SRC-001 | [Firewall / NGFW] | Network perimeter events | Syslog (UDP/514) | [~EPS] | CEF / LEEF | Active |
| SRC-002 | [Active Directory / LDAP] | Authentication & authorisation | Windows Event Log / WinRM | [~EPS] | Windows Event XML | Active |
| SRC-003 | [Endpoint Detection & Response Platform] | Endpoint telemetry, process execution | EDR API | [~EPS] | Vendor-normalised | Active |
| SRC-004 | [Web Application Firewall] | HTTP/HTTPS traffic events | Syslog (TCP/6514 TLS) | [~EPS] | CEF | Active |
| SRC-005 | [VPN / Remote Access Gateway] | Remote access authentication | Syslog | [~EPS] | CEF | Active |
| SRC-006 | [Core Banking / Core Application] | Application-layer security events | Syslog / API | [~EPS] | Custom / OCSF | Active |
| SRC-007 | [Database Activity Monitor] | Privileged DB access, SQL anomalies | DAM Agent | [~EPS] | CEF | Active |
| SRC-008 | [Cloud Platform — AWS/Azure/GCP] | Cloud control plane & data plane events | Cloud API / CloudTrail / Diagnostic Logs | [~EPS] | Cloud-native JSON | Active |
| SRC-009 | [OT / ICS Systems] | [Protocol-specific events — Modbus / DNP3 / OPC] | Industrial syslog bridge | [~EPS] | CEF | Active |
| SRC-010 | [Email Gateway] | Email security events, phishing detection | API / Syslog | [~EPS] | CEF | Active |
| [SRC-XXX] | [Add additional sources] | | | | | |

### 2.3 Common Event Categories Aggregated

| Event Category | SIEM Index / Data Model | Minimum Logging Level | Regulatory Relevance |
|---|---|---|---|
| Authentication events (success/failure) | `authentication` | All attempts | Act 854 s18, s23 |
| Privileged account activity | `identity` | All activity | Act 854 s18 |
| Network traffic anomalies | `network_traffic` | Alert & above | Act 854 s18, s23 |
| Malware / endpoint detections | `endpoint` | All detections | Act 854 s23 |
| Data exfiltration indicators | `dlp` | All alerts | Act 854 s18, s23 |
| Configuration changes (systems/firewall) | `change` | All changes | Act 854 s18 |
| Vulnerability scan results (passive) | `vulnerability` | Critical / High | Act 854 s18 |
| Application errors (security-relevant) | `application` | Error & above | Act 854 s18 |
| Physical access events (if integrated) | `physical_access` | All events | Act 854 s18 |
| Cloud API calls (privileged) | `cloud` | All privileged calls | Act 854 s18 |

---

## 3. Correlation Rules Output

### 3.1 Overview

*This section documents the active correlation rules deployed within the SIEM. Correlation rules combine multiple raw events to detect complex attack patterns and behaviours that single-event alerting would miss. Maintain this register and review rules on a scheduled basis.*

SIEM correlation rules are applied to the stream of aggregated events in real time to identify attack patterns, lateral movement, credential abuse, and other threat indicators relevant to NCII environments.

### 3.2 Active Correlation Rule Register

| Rule ID | Rule Name | Description | Data Sources | Severity | MITRE ATT&CK Mapping | Status | Last Validated |
|---|---|---|---|---|---|---|---|
| COR-001 | Brute Force Authentication | >5 failed logins from single source in 5 min | Active Directory, VPN, App logs | High | T1110 — Brute Force | Enabled | [Date] |
| COR-002 | Privilege Escalation — New Admin | New account added to privileged group | Active Directory | Critical | T1078 — Valid Accounts | Enabled | [Date] |
| COR-003 | Lateral Movement — Pass the Hash | NTLM auth anomaly pattern | EDR, AD | Critical | T1550.002 | Enabled | [Date] |
| COR-004 | Data Staging / Exfiltration | Large outbound data transfer to external IP | Firewall, Proxy, DLP | High | T1041 — Exfiltration Over C2 | Enabled | [Date] |
| COR-005 | Malware C2 Beacon Detection | Periodic outbound connection to threat intel IOC | Firewall, Threat Intel Feed | Critical | T1071 — Application Layer Protocol | Enabled | [Date] |
| COR-006 | Impossible Travel | Auth from two geographically distinct locations within short window | IdP / SSO logs | High | T1078 — Valid Accounts | Enabled | [Date] |
| COR-007 | After-Hours Privileged Access | Privileged account login outside approved hours | Active Directory, PAM | Medium | T1078 | Enabled | [Date] |
| COR-008 | Cloud Privilege Escalation | New IAM role assignment to admin policy | Cloud Platform Logs | Critical | T1098 — Account Manipulation | Enabled | [Date] |
| COR-009 | Ransomware Precursor Activity | Mass file rename / encryption pattern | EDR, File System Audit | Critical | T1486 — Data Encrypted for Impact | Enabled | [Date] |
| COR-010 | Insider Threat — Bulk Download | User downloads anomalous volume of files | DLP, Application Logs | High | T1530 — Data from Cloud Storage | Enabled | [Date] |
| [COR-XXX] | [Add additional rules] | | | | | | |

### 3.3 Rule Tuning and False Positive Management

*Document the process for reviewing, tuning, and retiring correlation rules. Include thresholds and exception management.*

| Parameter | Value |
|---|---|
| **Rule Review Cadence** | [Monthly / Quarterly] |
| **False Positive Threshold** | [e.g., >20% FP rate triggers mandatory tuning review] |
| **Exception Approval Authority** | [SOC Lead / CISO] |
| **Exception Register Location** | [Link to Exception Register] |
| **Tuning Log Location** | [SIEM console / Change management system] |

---

## 4. Alert Generation

### 4.1 Overview

*This section documents the alert pipeline from event detection through to SOC analyst notification. Ensure the alert thresholds, escalation paths, and SLA targets align with the organisation's Incident Response Plan.*

Alerts are generated by the SIEM when correlation rules fire or when individual event signatures match threat intelligence or anomaly detection models. All alerts are triaged by the SOC in accordance with defined severity levels and SLA targets.

### 4.2 Alert Severity Classification

| Severity Level | Definition | Example Events | SOC Response SLA | Escalation Path |
|---|---|---|---|---|
| **Critical (P1)** | Active compromise, imminent NCII impact | Confirmed ransomware, active data exfiltration, C2 beacon | 15 minutes acknowledgement | SOC Lead → CISO → Management within 1 hour |
| **High (P2)** | Strong indicator of attack, high NCII risk | Privilege escalation, brute force success, lateral movement | 30 minutes acknowledgement | SOC Lead within 2 hours |
| **Medium (P3)** | Suspicious activity requiring investigation | After-hours access, unusual data volume, config change | 4 hours acknowledgement | SOC Analyst → SOC Lead if confirmed |
| **Low (P4)** | Low-risk anomaly or policy deviation | Single failed login, minor misconfiguration | 24 hours acknowledgement | SOC Analyst handles |
| **Informational** | Audit trail, compliance logging only | Successful admin logins, scheduled task execution | No response required | Retained for audit |

### 4.3 Alert Volume Metrics

*Complete this table with current average alert volumes. Review monthly and use to identify noise reduction opportunities.*

| Metric | Value | Reporting Period |
|---|---|---|
| Average daily alerts (total) | [Number] | [Period] |
| Average daily Critical (P1) alerts | [Number] | [Period] |
| Average daily High (P2) alerts | [Number] | [Period] |
| Alert-to-incident conversion rate | [%] | [Period] |
| Mean Time to Detect (MTTD) | [Hours / Minutes] | [Period] |
| Mean Time to Respond (MTTR) | [Hours / Minutes] | [Period] |
| False positive rate | [%] | [Period] |

### 4.4 Alert Notification Channels

| Channel | Recipients | Severity Trigger | Tool / Platform |
|---|---|---|---|
| SIEM console queue | SOC Analysts (on shift) | All severities | [SIEM Platform] |
| Email notification | SOC Lead, Incident Response Team | P1, P2 | [Email system] |
| SMS / Push alert | SOC Lead, CISO (out of hours) | P1 only | [Alerting tool] |
| Ticketing system auto-case | SOC Analysts | P1, P2, P3 | [ITSM Platform, e.g., ServiceNow / Jira] |
| NACSA reporting portal | CISO / Compliance Officer | P1 (confirmed incidents per s23) | NACSA CyberSAFE / designated portal |

---

## 5. Threat Detection Events

### 5.1 Overview

*This section records confirmed or suspected threat detection events identified through SIEM correlation, threat intelligence integration, or manual threat hunting. This log is distinct from raw events — it represents security-significant findings requiring analyst review.*

Threat detection events are SIEM-identified occurrences that indicate malicious activity, adversarial behaviour, or conditions that increase NCII cyber risk. These events are cross-referenced with threat intelligence feeds and the MITRE ATT&CK framework.

### 5.2 Threat Intelligence Integration

*List the threat intelligence feeds integrated with the SIEM for IOC enrichment and automated blocking.*

| Feed ID | Feed Name / Source | Type | Integration Method | Update Frequency | Status |
|---|---|---|---|---|---|
| TI-001 | [NACSA Threat Intelligence Feed] | Government / CERT | STIX/TAXII | [Daily / Real-time] | Active |
| TI-002 | [MISP — Internal IOC Platform] | Internal | MISP API | Real-time | Active |
| TI-003 | [Commercial Threat Intel Provider] | Commercial | STIX/TAXII / API | [Daily] | Active |
| TI-004 | [FS-ISAC / Sector ISAC] | Sector-specific | Email / API | [As published] | Active |
| TI-005 | [Open Source — Abuse.ch / AlienVault OTX] | Open Source | API | [Daily] | Active |
| [TI-XXX] | [Add feeds] | | | | |

### 5.3 Threat Detection Event Log

*The following is a template record structure for documenting individual threat detection events. In practice, this log is maintained within the SIEM/SOAR platform and ticketing system. Provide a summary view here for audit purposes.*

| Event ID | Detection Timestamp (UTC+8) | Detection Source | Threat Category | MITRE Tactic | Affected System(s) | Severity | Status | Analyst Assigned | Ticket Ref |
|---|---|---|---|---|---|---|---|---|---|
| TDE-[YYYY]-[NNNN] | [YYYY-MM-DD HH:MM:SS] | [SIEM Rule / TI Feed / Manual Hunt] | [Malware / Phishing / Intrusion / etc.] | [Initial Access / Lateral Movement / etc.] | [Hostname / IP] | [Critical/High/Medium/Low] | [Open / In Progress / Closed] | [Analyst Name] | [Ticket ID] |
| TDE-[YYYY]-[NNNN] | | | | | | | | | |

### 5.4 Threat Hunting Activities

*Document scheduled and ad hoc threat hunting activities performed against the SIEM dataset.*

| Hunt ID | Hunt Name | Hypothesis | Data Sources | Hunt Period | Analyst | Findings | Status |
|---|---|---|---|---|---|---|---|
| TH-[YYYY]-[NN] | [e.g., Living-off-the-Land Binary Abuse] | [e.g., Attacker using LOLBins to evade EDR] | EDR, Process Logs | [Date range] | [Analyst] | [Negative / Finding description] | [Complete / Ongoing] |
| TH-[YYYY]-[NN] | | | | | | | |

---

## 6. Compliance-Relevant Events

### 6.1 Overview

*This section identifies and documents security events that have direct regulatory significance under Act 854, BNM Risk Management in Technology (RMiT) Policy, PDPA 2010, and other applicable frameworks. These events must be retained with heightened integrity controls and may be required for regulatory reporting.*

Compliance-relevant events are a subset of the aggregated security event log that directly satisfy regulatory audit, reporting, or evidence requirements. These are tagged within the SIEM with a compliance flag to ensure appropriate retention and protection.

### 6.2 Compliance Event Categories

| Compliance Event Category | Regulatory Requirement | Act 854 Section | SIEM Tag / Label | Reporting Obligation |
|---|---|---|---|---|
| Cybersecurity incident (as defined under Act 854) | Mandatory reporting to NACSA | s23 | `compliance:act854_incident` | Within [X hours] of detection — confirm with NACSA guidance |
| NCII system availability disruption | Service continuity obligation | s18 | `compliance:ncii_availability` | Internal escalation + NACSA notification |
| Unauthorised access to NCII systems | Obligation to prevent & report | s18, s23 | `compliance:unauthorised_access` | NACSA reporting if confirmed |
| Privileged account creation / modification | Access control assurance | s18 | `compliance:privileged_access` | Retained for audit |
| Cryptographic key management events | Data protection obligation | s18 | `compliance:crypto_key` | Retained for audit |
| Personal data breach indicators | PDPA 2010 s43/s45 | — | `compliance:pdpa_breach` | PDPC notification if confirmed |
| Third-party / supply chain anomalies | Third-party risk management | s18 | `compliance:third_party` | Internal + potential NACSA notification |
| BNM RMiT audit trail events | RMiT 10.60–10.62 | — | `compliance:bnm_rmit` | Retained for BNM examination |

### 6.3 Compliance Event Summary Log

*Maintain a summary of compliance-relevant events for the current reporting period. The full event detail remains in the SIEM; this table provides a management-level view.*

| Event Ref | Date / Time (UTC+8) | Event Category | System Affected | Regulatory Framework | Reported to Regulator? | Report Date | Report Ref |
|---|---|---|---|---|---|---|---|
| CE-[YYYY]-[NNNN] | [YYYY-MM-DD HH:MM] | [Category from table above] | [System name] | [Act 854 / PDPA / RMiT] | [Yes / No / Pending] | [Date if applicable] | [Submission ref] |
| CE-[YYYY]-[NNNN] | | | | | | | |

### 6.4 Regulatory Reporting Tracker

*Track all regulatory notifications made or pending in relation to compliance events detected via the SIEM.*

| Report ID | Incident / Event Ref | Regulator | Reporting Obligation | Report Due | Submitted On | Submission Method | NACSA / Regulator Ref | Status |
|---|---|---|---|---|---|---|---|---|
| RPT-[YYYY]-[NN] | [CE / TDE Ref] | NACSA | Act 854 s23 | [Deadline] | [Date] | [Portal / Email / Form] | [Ref no.] | [Submitted / Pending / Overdue] |
| RPT-[YYYY]-[NN] | | PDPC | PDPA s43/s45 | | | | | |

---

## 7. Log Retention Policy

### 7.1 Retention Requirements

*Act 854 and associated NACSA guidelines require NCII entities to retain security event logs for a minimum period. Ensure storage capacity planning accounts for projected event volumes. Retention periods must be enforced through automated SIEM policies.*

[Organization Name] maintains security event logs in accordance with the following minimum retention standards:

| Log Tier | Description | Minimum Retention | Storage Medium | Integrity Protection | Access Control |
|---|---|---|---|---|---|
| **Hot (Online)** | Real-time searchable events | 90 days | SIEM primary storage (SSD/NVMe) | SHA-256 hash on ingest | SOC Analysts (read), SOC Lead (admin) |
| **Warm (Near-line)** | Recent archived events, searchable within [X hours] | 6 months | [NAS / S3-compatible object store] | WORM-protected storage | SOC Lead, Compliance Officer |
| **Cold (Archive)** | Long-term compliance archive | **12 months minimum** (Act 854 requirement) | [Tape / Cold object storage / Compliance vault] | Cryptographic hash + immutable storage | CISO, Compliance Officer (read-only) |
| **Legal Hold** | Events under regulatory or legal investigation | Until hold released | [Isolated secure storage] | Court-admissible chain of custody | CISO, Legal Counsel |

### 7.2 Retention Configuration

| Parameter | Configured Value | Last Reviewed |
|---|---|---|
| **Minimum retention period** | 12 months (Act 854 minimum) | [Date] |
| **Actual configured retention** | [e.g., 18 months — above minimum] | [Date] |
| **Deletion / purge policy** | Automated purge after configured retention period; log of deletions retained | [Date] |
| **Legal hold override** | Automated retention extension on legal hold flag; no auto-purge | [Date] |
| **Backup frequency** | [Daily / Continuous replication] | [Date] |
| **Backup tested** | [Date of last restore test] | [Date] |
| **Encryption at rest** | [AES-256 / Vendor encryption] | [Date] |
| **Encryption in transit** | TLS 1.2 minimum for all log transport | [Date] |

### 7.3 Log Integrity Controls

*Log integrity is critical for forensic admissibility and regulatory evidence. Document the controls in place to prevent tampering.*

| Control | Description | Implementation | Verified |
|---|---|---|---|
| Immutable storage | WORM (Write Once Read Many) for archived logs | [Platform / S3 Object Lock / Azure Immutable Blob] | [Date] |
| Cryptographic hashing | SHA-256 hash generated on log ingest | [SIEM feature / custom pipeline] | [Date] |
| Chain of custody | Documented access log for all log exports used in investigations | [ITSM / evidence management tool] | [Date] |
| Time synchronisation | All log sources synchronised to NTP (stratum ≤2) | [NTP server address] | [Date] |
| Log forwarding redundancy | Secondary log aggregator / SIEM DR for failover | [DR platform] | [Date] |
| Access logging | All access to the SIEM and log archive is itself logged | [SIEM / RBAC audit log] | [Date] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the Security Event Logs across the relevant teams. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | SOC Lead | SOC Analyst | CISO | IT / Infrastructure | Compliance Officer | Risk Officer | Legal Counsel | NACSA |
|---|---|---|---|---|---|---|---|---|
| Define and maintain log source inventory | A/R | C | C | R | I | I | — | — |
| SIEM platform operation and maintenance | A | R | I | R | I | — | — | — |
| Monitor and triage security events (real-time) | A | R | I | I | I | — | — | — |
| Manage correlation rules (create / tune / retire) | A/R | R | C | C | I | — | — | — |
| Escalate P1 / P2 incidents | R | R | A | I | I | I | — | — |
| Determine compliance-relevant event classification | A/R | R | C | — | R | C | C | — |
| Submit regulatory notifications (Act 854 s23) | C | — | A/R | — | R | C | C | I |
| Maintain log retention and archive policy | A | R | C | R | C | — | — | — |
| Conduct threat hunting | A/R | R | I | I | — | — | — | — |
| Perform log integrity verification | A | R | I | R | I | — | — | — |
| Review and approve this document | A | C | R | C | R | C | — | — |
| Audit log access and report findings | C | — | A | C | R | C | — | I |
| Respond to NACSA enquiries / requests for logs | C | — | A/R | I | R | C | C | A |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], SOC Lead | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 9.2 Approval Sign-Off

*This document requires approval from the following roles prior to taking effect. Approved versions must be stored in the document management system.*

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Lead (Document Owner) | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Compliance Officer | [Name] | [Signature] | [Date] |
| Chief Information Officer (CIO) / IT Director | [Name] | [Signature] | [Date] |
| [Additional approver as required] | [Name] | [Signature] | [Date] |

---

## 10. References

The following regulatory instruments, standards, and internal documents govern this artifact:

### 10.1 Primary Legislation and Regulatory Instruments

| Reference | Title | Relevant Provisions |
|---|---|---|
| **Act 854** | Cyber Security Act 2024 (Malaysia) | **Section 18** — Cybersecurity obligations of NCII entity; duty to implement cybersecurity measures, including logging and monitoring; **Section 23** — Duty to report cybersecurity incidents to NACSA within prescribed timeframes |
| **NACSA NCII Sector Guidelines** | [Applicable sector-specific guidelines issued by NACSA under Act 854] | Logging and monitoring requirements, incident reporting procedures |
| **PDPA 2010 (Act 709)** | Personal Data Protection Act 2010 | Sections 40–43 (Security principle — protection of personal data from loss, misuse, and unauthorised access) |
| **BNM RMiT Policy** | Bank Negara Malaysia — Risk Management in Technology Policy Document | Section 10 (Cybersecurity), paras 10.60–10.62 (Security event logging and monitoring) |

### 10.2 Standards and Frameworks

| Reference | Title | Application |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A 8.15 (Logging), A 8.16 (Monitoring Activities) |
| ISO/IEC 27002:2022 | Information Security Controls | 8.15 — Logging; 8.16 — Monitoring; 8.17 — Clock synchronisation |
| NIST SP 800-92 | Guide to Computer Security Log Management | Log management architecture and retention guidance |
| MITRE ATT&CK | Enterprise ATT&CK Framework | Threat detection mapping for correlation rules |
| CIS Controls v8 | Center for Internet Security Critical Security Controls | Control 8: Audit Log Management |

### 10.3 Internal Documents

| Document ID | Title | Version |
|---|---|---|
| [DOC-ID] | Incident Response Plan | [Version] |
| [DOC-ID] | Information Security Policy | [Version] |
| [DOC-ID] | SIEM Architecture and Design Document | [Version] |
| [DOC-ID] | Asset Register — NCII Systems | [Version] |
| [DOC-ID] | Access Control Policy | [Version] |
| [DOC-ID] | Business Continuity and Disaster Recovery Plan | [Version] |
| [DOC-ID] | Data Retention and Disposal Policy | [Version] |

---

## 11. Appendices

### Appendix A — SIEM Log Source Onboarding Checklist

*Use this checklist when onboarding a new log source to the SIEM to ensure completeness and compliance alignment.*

- [ ] System / device identified in NCII asset register
- [ ] Log source owner identified and notified
- [ ] Log format confirmed (CEF / LEEF / JSON / Syslog RFC5424)
- [ ] Collection method selected and configured (agent / syslog / API)
- [ ] Time zone and NTP synchronisation verified
- [ ] Network connectivity and firewall rules confirmed
- [ ] Log volume (EPS) estimated and storage capacity checked
- [ ] Normalisation field mapping reviewed and validated
- [ ] Test events ingested and confirmed visible in SIEM
- [ ] Relevant correlation rules reviewed for applicability
- [ ] SIEM source inventory (Section 2.2) updated
- [ ] Change management record raised: [Ticket ID]
- [ ] SOC Lead sign-off: [Name / Date]

---

### Appendix B — Act 854 Section 23 Incident Reporting Reference

*Quick reference for SOC analysts on mandatory reporting timelines and thresholds. Verify against the latest NACSA guidelines, as notification timelines may be updated by subsidiary legislation or NACSA directives.*

| Notification Stage | Trigger | Recipient | Timeline (from detection) | Method |
|---|---|---|---|---|
| **Initial Notification** | Confirmed or suspected cybersecurity incident affecting NCII | NACSA | [Within X hours — per NACSA prescribed timeframe] | [NACSA portal / designated channel] |
| **Incident Update** | Material change in incident scope or impact | NACSA | [As required by NACSA guidance] | [NACSA portal] |
| **Final Report** | Incident resolved / remediated | NACSA | [Within X days of closure — per NACSA prescribed timeframe] | [NACSA portal / formal report] |
| **Internal Escalation (P1)** | P1 alert confirmed by SOC | CISO, Management | Within 1 hour of confirmation | Telephone + email |
| **Board Notification** | Major incident with potential reputational or systemic impact | Board / Audit Committee | [Within X hours / as per internal policy] | [As per governance policy] |

> **Note:** Reporting timelines are subject to subsidiary legislation and NACSA directives issued under Act 854. [Organization Name] must verify current requirements with NACSA and update this appendix accordingly.

---

### Appendix C — Log Retention Evidence Record

*Maintain this record as evidence that log retention controls are operating effectively. Complete at defined intervals.*

| Check Date | Retention Period Verified | Archive Integrity Check | Last Restore Test | Storage Capacity (%) | Checked By | Findings / Actions |
|---|---|---|---|---|---|---|
| [Date] | [12+ months confirmed] | [Pass / Fail] | [Date] | [%] | [Name] | [None / Issues noted] |
| [Date] | | | | | | |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — Malaysian primary legislation governing cybersecurity obligations for NCII entities |
| **NCII** | National Critical Information Infrastructure — information infrastructure designated as critical under Act 854 |
| **NACSA** | National Cyber Security Agency — the competent authority under Act 854 |
| **SIEM** | Security Information and Event Management — platform for centralised log collection, correlation, and alerting |
| **SOC** | Security Operations Centre — team responsible for monitoring, detecting, and responding to security events |
| **EPS** | Events Per Second — measure of log ingestion volume |
| **MITRE ATT&CK** | Adversarial Tactics, Techniques & Common Knowledge framework for classifying adversary behaviour |
| **CEF** | Common Event Format — standardised log format for interoperability |
| **WORM** | Write Once Read Many — storage technology ensuring log immutability |
| **MTTD** | Mean Time to Detect — average time from incident onset to detection |
| **MTTR** | Mean Time to Respond — average time from detection to containment/resolution |
| **IOC** | Indicator of Compromise — observable artefact indicating potential malicious activity |
| **STIX/TAXII** | Structured Threat Information Expression / Trusted Automated eXchange of Intelligence — threat intelligence sharing standards |
| **RMiT** | Risk Management in Technology — Bank Negara Malaysia policy document |
| **PDPA** | Personal Data Protection Act 2010 (Act 709) |

---

*This document template is classified **Confidential**. Distribution is restricted to authorised personnel with a need-to-know. Unauthorised disclosure is prohibited under [Organization Name] Information Security Policy and may constitute an offence under applicable law.*

*Document maintained by: **SOC Lead**, [Organization Name]*
*Template version: **1.0** | Generated: [Date]*