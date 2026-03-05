# Logging and Monitoring Standard

---

**[Organization Name]**
**Information Security & Cyber Resilience Division**

---

| Field | Details |
|---|---|
| **Document ID** | [DOC-ID] / IS-STD-LOG-001 |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | SOC Lead |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 6 months from last review] |
| **Approved By** | [Approved By — Name, Title] |
| **Regulatory Authority** | National Cyber Security Agency (NACSA) |
| **Governing Legislation** | Cyber Security Act 2024 (Act 854), Sections 18 and 23 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to unauthorised parties without the written approval of the Document Owner. All printed copies are uncontrolled. The master version is maintained in the [Document Management System / SharePoint URL].

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Required Log Sources](#5-required-log-sources)
6. [Log Format and Content Requirements](#6-log-format-and-content-requirements)
7. [Centralised Log Aggregation (SIEM)](#7-centralised-log-aggregation-siem)
8. [Log Retention Periods](#8-log-retention-periods)
9. [Real-Time Alerting Rules](#9-real-time-alerting-rules)
10. [Log Integrity Protection](#10-log-integrity-protection)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Compliance and Assurance](#12-compliance-and-assurance)
13. [Exceptions and Waivers](#13-exceptions-and-waivers)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the intent and objective of this standard. Explain why the standard exists, what risk it mitigates, and how it supports the organisation's overall cyber security posture.*

This Logging and Monitoring Standard establishes the minimum requirements for the collection, storage, centralisation, protection, and monitoring of security-relevant logs across all **National Critical Information Infrastructure (NCII)** systems operated by **[Organization Name]**. The standard defines the obligations of all system owners, administrators, and the Security Operations Centre (SOC) in maintaining an auditable and tamper-evident logging environment.

This standard is issued in accordance with the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 23, which mandate that NCII entities implement adequate technical controls to detect, respond to, and investigate cyber security incidents. Non-compliance with this standard may constitute a breach of statutory obligations and expose [Organization Name] to regulatory action by the **National Cyber Security Agency (NACSA)**.

This standard supports the following organisational objectives:

- Ensuring the availability of complete and accurate log records for incident investigation and forensic analysis.
- Enabling timely detection of unauthorised access, anomalous behaviour, and potential cyber threats.
- Demonstrating compliance with NACSA, BNM's Risk Management in Technology (RMiT) Policy (where applicable), and the Personal Data Protection Act 2010 (PDPA) in respect of personal data access audit trails.
- Supporting continuous security monitoring through the centralised Security Information and Event Management (SIEM) platform.

---

## 2. Scope

*Define which systems, environments, entities, and personnel this standard applies to. Be explicit about what is in scope and what is explicitly excluded.*

### 2.1 In-Scope Systems and Entities

This standard applies to all of the following:

- All information systems, applications, platforms, and infrastructure components classified as **National Critical Information Infrastructure (NCII)** under the Cyber Security Act 2024 (Act 854).
- All IT and OT systems owned, operated, or managed by **[Organization Name]**, including those hosted on-premises, in private cloud, public cloud (IaaS/PaaS/SaaS), or hybrid environments.
- All third-party service providers, managed security service providers (MSSPs), and technology vendors that operate, maintain, or have privileged access to in-scope systems on behalf of [Organization Name].
- All personnel, contractors, and agents of [Organization Name] who administer, operate, or develop in-scope systems.

**In-scope system categories include (but are not limited to):**

| System Category | Examples |
|---|---|
| Network Infrastructure | Firewalls, routers, switches, load balancers, VPN gateways |
| Endpoint Systems | Servers (Windows/Linux), workstations, virtualised compute |
| Identity and Access Management | Active Directory, LDAP, PAM solutions, MFA platforms |
| Applications | Core banking systems, customer-facing portals, internal business applications |
| Databases | Oracle, MSSQL, PostgreSQL, MySQL, NoSQL data stores |
| Cloud Platforms | [List applicable cloud providers, e.g., AWS, Azure, GCP] |
| Security Tools | IDS/IPS, DLP, EDR, WAF, email security gateways |
| Operational Technology (OT) | [If applicable — SCADA, ICS, BMS systems] |

### 2.2 Out-of-Scope Systems

*List any systems or environments explicitly excluded from this standard, with justification.*

The following are **excluded** from this standard, subject to formal exception approval:

- [List any explicitly out-of-scope systems, e.g., non-networked standalone kiosks, decommissioned systems pending disposal]
- Development and sandbox environments that have no connectivity to production networks and process no real data — subject to the conditions defined in Section 13 (Exceptions and Waivers).

### 2.3 Geographic Scope

This standard applies to all [Organization Name] operations conducted within **Malaysia** and, where [Organization Name] processes data on behalf of Malaysian NCII entities, internationally.

---

## 3. Regulatory and Policy Context

*Describe the regulatory obligations and internal policy hierarchy that give this standard its authority. Reference specific clauses.*

### 3.1 Regulatory Obligations

This standard is enacted to satisfy the following regulatory requirements:

| Regulation / Framework | Applicable Provision | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities must implement controls to prevent, detect and respond to cyber security threats |
| Cyber Security Act 2024 (Act 854) | Section 23 | NCII entities must submit incident reports and maintain records sufficient to support investigation |
| Personal Data Protection Act 2010 (Act 709) | Section 9 — Security Principle | Personal data must be protected against unauthorised or unlawful processing, including via access audit logging |
| BNM Risk Management in Technology (RMiT) | Para 10.39–10.44 | [If applicable — financial institution context] |
| [Other applicable standard, e.g., ISO/IEC 27001:2022] | A.8.15 — Logging | [Describe obligation] |

### 3.2 Internal Policy Hierarchy

This standard is subordinate to and must be read in conjunction with:

- **[Organization Name] Information Security Policy** — [Policy Document ID]
- **[Organization Name] Cyber Security Framework** — [Framework Document ID]
- **[Organization Name] Incident Response Policy** — [Policy Document ID]
- **[Organization Name] Data Classification and Handling Standard** — [Standard Document ID]
- **[Organization Name] Access Control Standard** — [Standard Document ID]

In the event of conflict between this standard and higher-level policies, the more restrictive requirement shall prevail. Any conflict that cannot be resolved operationally must be escalated to the Chief Information Security Officer (CISO).

---

## 4. Definitions and Abbreviations

*Provide clear definitions of all technical and regulatory terms used in this document to ensure consistent interpretation.*

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary Malaysian legislation governing cyber security for NCII entities |
| **Audit Log** | A chronological record of system activities that provides documentary evidence of the sequence of activities affecting a specific operation, procedure, or event |
| **CISO** | Chief Information Security Officer |
| **CSIRT** | Cyber Security Incident Response Team |
| **DLP** | Data Loss Prevention |
| **EDR** | Endpoint Detection and Response |
| **Event** | Any observable occurrence in a system or network |
| **IDS/IPS** | Intrusion Detection System / Intrusion Prevention System |
| **Log** | A record of events occurring within an organisation's systems and networks |
| **Log Aggregation** | The process of collecting and consolidating logs from multiple sources into a centralised repository |
| **Log Integrity** | The assurance that log records have not been tampered with, altered, or deleted since the time of their creation |
| **MSSP** | Managed Security Service Provider |
| **NACSA** | National Cyber Security Agency Malaysia |
| **NCII** | National Critical Information Infrastructure — assets, systems, and functions vital to national security, economy, public health, or safety |
| **NTP** | Network Time Protocol — used to synchronise clocks across systems |
| **PAM** | Privileged Access Management |
| **RMiT** | Risk Management in Technology Policy, issued by Bank Negara Malaysia |
| **SIEM** | Security Information and Event Management — a platform for aggregating, correlating, and analysing security events |
| **SOC** | Security Operations Centre |
| **Syslog** | A standard protocol for sending event notification messages across IP networks |
| **Threat Intelligence** | Evidence-based knowledge about existing or emerging threats that can inform decisions about response |
| **UTC** | Coordinated Universal Time — the primary time standard used for log timestamps |
| **WAF** | Web Application Firewall |

---

## 5. Required Log Sources

*Identify all systems and components that are mandatory log sources. This section should comprehensively list every category of asset whose logs must be collected and forwarded to the SIEM. Tailor the list to the organisation's actual technology estate.*

### 5.1 Mandatory Log Source Categories

All in-scope systems must generate and forward security-relevant logs to the centralised SIEM. The following table defines the mandatory log source categories, specific log types required, and the responsible owner for each:

| # | Log Source Category | Specific Component / System | Required Log Types | System Owner |
|---|---|---|---|---|
| 1 | **Perimeter Firewall** | [Firewall Product Name, e.g., Palo Alto PA-Series] | Allow/deny rules, NAT translations, zone policy hits, admin logins | Network Operations |
| 2 | **Web Application Firewall (WAF)** | [WAF Product Name] | Request/response events, rule violations, bot detections, block events | Application Security |
| 3 | **Intrusion Detection / Prevention (IDS/IPS)** | [IDS/IPS Product Name] | Signature alerts, anomaly detections, prevention actions | SOC |
| 4 | **VPN Gateway** | [VPN Product Name] | Authentication attempts, session establishment/termination, split tunnel events | Network Operations |
| 5 | **Active Directory / LDAP** | [AD Domain Controller Names] | Authentication events (4624, 4625, 4634), privilege escalation (4672), group membership changes (4728, 4732), account lockouts (4740) | Identity & Access |
| 6 | **Privileged Access Management (PAM)** | [PAM Solution Name] | Session initiation, commands executed, session recordings metadata, checkout/check-in events | Identity & Access |
| 7 | **Endpoint Detection & Response (EDR)** | [EDR Product Name] | Process creation, file system changes, network connections, malware detections, script executions | SOC |
| 8 | **Windows Servers** | [Domain/Hostname Pattern] | Security Event Log (Application, System, Security), PowerShell logs, WMI activity | Server Operations |
| 9 | **Linux / Unix Servers** | [Hostname Pattern] | /var/log/auth.log, /var/log/syslog, /var/log/audit/audit.log (auditd), cron activity | Server Operations |
| 10 | **Database Systems** | [Database Platform, e.g., Oracle, MSSQL] | Login/logout, DDL events (CREATE, DROP, ALTER), DML on sensitive tables, privilege grants, failed queries | Database Administration |
| 11 | **Core Banking / Critical Applications** | [Application Name] | User login/logout, transaction processing, administrative actions, data export events | Application Owner |
| 12 | **Email Security Gateway** | [Product Name] | Inbound/outbound message metadata, malware detections, phishing blocks, DLP policy violations | IT Operations |
| 13 | **DNS Servers** | [DNS Platform] | Query logs, zone transfer attempts, NXDOMAIN responses | Network Operations |
| 14 | **DHCP Servers** | [DHCP Platform] | IP lease assignments and releases, rogue DHCP detections | Network Operations |
| 15 | **Cloud Platform** | [AWS / Azure / GCP] | CloudTrail / Azure Activity Log / Cloud Audit Log: API calls, IAM changes, resource creation/deletion | Cloud Operations |
| 16 | **Remote Access / Jump Servers** | [Bastion Host Names] | All sessions, commands, file transfers | SOC |
| 17 | **Data Loss Prevention (DLP)** | [DLP Product Name] | Policy violations, data exfiltration attempts, quarantine events | Data Protection Officer |
| 18 | **Vulnerability Scanners** | [Scanner Product Name] | Scan initiations, findings, authenticated scan credentials used | Security Engineering |
| 19 | **Backup Systems** | [Backup Platform Name] | Backup job completion/failure, restore operations, policy changes | IT Operations |
| 20 | **OT / ICS Systems** *(if applicable)* | [SCADA / ICS Platform Name] | Operator actions, alarm events, configuration changes | OT Security Lead |

### 5.2 Prioritisation of Log Sources

*Where resource constraints require prioritisation of onboarding to the SIEM, log sources shall be classified by criticality.*

| Priority | Classification | Description | Onboarding Deadline |
|---|---|---|---|
| P1 | **Critical** | Identity systems, perimeter security, core banking, PAM | Immediate — already onboarded |
| P2 | **High** | Endpoint, database, email security, cloud platforms | Within [30] days of system classification |
| P3 | **Medium** | Internal applications, backup systems, DNS/DHCP | Within [90] days of system classification |
| P4 | **Low** | Non-critical peripherals, development proxies | Within [180] days or at next review cycle |

### 5.3 New System Onboarding

*Define the process for adding new log sources.*

- Any new system or platform deployed within [Organization Name] must be assessed for log source requirements prior to production deployment.
- The System Owner is responsible for submitting a **Log Source Onboarding Request** to the SOC at least **[14] business days** before go-live.
- The SOC will confirm SIEM ingestion, parsing, and alerting readiness before the system enters production.
- The SIEM log source register must be updated within **[5] business days** of onboarding completion.

---

## 6. Log Format and Content Requirements

*Define the minimum required data fields for each log event, the mandatory timestamp format, encoding standards, and any normalisation requirements. This section ensures logs are useful for correlation and investigation.*

### 6.1 Mandatory Log Fields

Every log event forwarded to the SIEM must contain, at a minimum, the following fields. Systems that cannot natively produce all fields must have a log enrichment or normalisation rule applied at the collection layer.

| Field Name | Description | Format / Example | Mandatory |
|---|---|---|---|
| **Timestamp** | Date and time the event occurred on the source system | ISO 8601 — `YYYY-MM-DDTHH:MM:SS.sssZ` (UTC) | **Yes** |
| **Source Host** | Hostname or FQDN of the originating system | `srv-app01.domain.com.my` | **Yes** |
| **Source IP Address** | IPv4 or IPv6 address of the originating system | `10.0.1.45` | **Yes** |
| **Destination IP Address** | Target IP address, where applicable | `203.0.113.10` | Where applicable |
| **Destination Port** | Target port number | `443` | Where applicable |
| **User Account** | The user account associated with the event | `jsmith@domain.com.my` | **Yes** |
| **Event Type / Category** | Classification of the event | `Authentication`, `Authorization`, `Network`, `System` | **Yes** |
| **Event ID / Code** | Vendor-specific event identifier | Windows: `4625`, Syslog: `AUTH_FAILURE` | **Yes** |
| **Action / Outcome** | Result of the event | `SUCCESS`, `FAILURE`, `BLOCKED`, `ALLOWED` | **Yes** |
| **Object / Resource** | The resource or object acted upon | `\\srv-file01\HR\payroll.xlsx` | Where applicable |
| **Process Name** | The process or application generating the event | `powershell.exe`, `sshd` | Where applicable |
| **Log Level / Severity** | Severity classification of the event | `INFO`, `WARN`, `ERROR`, `CRITICAL` | **Yes** |
| **Raw Log / Message** | The original, unmodified log message | [Full syslog or event text] | **Yes** |
| **Collector / Forwarder** | Identity of the log collection agent | `Splunk UF v9.x`, `Wazuh Agent v4.x` | **Yes** |

### 6.2 Timestamp and Time Synchronisation Requirements

Accurate and consistent timestamps are essential for log correlation and forensic analysis. The following requirements apply to all in-scope systems:

- All systems **must** synchronise their clocks using the **Network Time Protocol (NTP)**, configured to use the organisation's designated authoritative NTP servers:
  - Primary NTP Server: `[ntp1.domain.com.my]`
  - Secondary NTP Server: `[ntp2.domain.com.my]`
- Systems must synchronise at intervals not exceeding **[60] seconds**.
- The maximum permissible clock drift for any in-scope system is **[500 milliseconds]** from the NTP reference source.
- All log timestamps must be recorded in **Coordinated Universal Time (UTC)**. Local time (MYT, UTC+8) may be stored as an additional field but must not replace UTC.
- Systems unable to meet the NTP synchronisation requirement must be reported to the SOC and documented as a known exception pending remediation.

### 6.3 Log Format Standards

*Define the preferred log transport and format standards.*

| Requirement | Standard |
|---|---|
| **Preferred Transport Protocol** | Syslog over TLS (RFC 5425) — encrypted transport mandatory for all log forwarding |
| **Preferred Structured Format** | CEF (Common Event Format) or JSON |
| **Character Encoding** | UTF-8 |
| **Log Message Maximum Size** | [8,192 bytes per event — truncation must be flagged with a truncation indicator] |
| **Syslog Facility** | As per RFC 5424; security events should use Facility `authpriv` or `security` where supported |

### 6.4 Sensitive Data Handling in Logs

- Logs must **not** contain plaintext credentials, passwords, cryptographic keys, or full payment card numbers (PAN).
- Systems must mask or tokenise sensitive personal data fields (e.g., NRIC numbers, full account numbers) in log output, consistent with the **[Organization Name] Data Classification and Handling Standard**.
- The data minimisation principle applies — logs should capture sufficient context for security purposes without unnecessarily capturing personal data beyond what is required for the investigative purpose.

### 6.5 Log Categories and Event Coverage

Each log source must, at a minimum, capture events in the following categories:

| Event Category | Description | Example Events |
|---|---|---|
| **Authentication** | All attempts to authenticate to any system | Successful logins, failed logins, MFA challenges, account lockouts |
| **Authorisation** | Access granted or denied to resources | Privilege escalation, permission changes, access denied events |
| **Account Management** | Changes to user accounts and groups | Account creation/deletion, password resets, group membership changes |
| **Session Activity** | User and system session lifecycle | Session start, session end, idle timeout, remote desktop connections |
| **System Events** | Operating system and service events | System start/stop, service crash, kernel panics, scheduled task execution |
| **Configuration Changes** | Changes to system or application configuration | Policy changes, firewall rule modifications, registry edits |
| **Data Access** | Access to sensitive data stores | Database queries on sensitive tables, file opens on classified shares |
| **Network Traffic** | Security-relevant network activity | Denied connections, port scans, large data transfers |
| **Malware / Threat Events** | Detections by security tools | Malware quarantine, exploit attempts, C2 beacon detections |
| **Audit Trail Events** | Regulatory audit trail requirements | PDPA data access, transaction records, approval workflows |

---

## 7. Centralised Log Aggregation (SIEM)

*Describe the architecture, components, and operational requirements of the centralised SIEM platform used to aggregate, correlate, and analyse logs from all in-scope systems.*

### 7.1 SIEM Platform

[Organization Name] operates a centralised Security Information and Event Management (SIEM) platform as the single authoritative repository for all security-relevant log data. The SIEM is the foundation of the SOC's monitoring and detection capability.

| Attribute | Detail |
|---|---|
| **SIEM Platform** | [SIEM Product Name and Version, e.g., Splunk Enterprise 9.x / IBM QRadar / Microsoft Sentinel] |
| **Deployment Model** | [On-premises / Cloud-hosted / Hybrid] |
| **Primary SOC Location** | [Primary SOC Site Name and Address] |
| **Secondary / DR SOC Location** | [DR SOC Site Name and Address] |
| **SIEM Administrator** | [Name / Team Name] |
| **SIEM Vendor Support** | [Vendor Name, Support Tier] |

### 7.2 Log Collection Architecture

*Describe how logs flow from source systems to the SIEM. Include the collection agents, forwarders, and any intermediate aggregation layers.*

**Architecture Overview:**

```
[Log Source Systems]
        │
        ▼ (TLS-encrypted Syslog / Agent)
[Log Collection Layer — Forwarders / Agents]
        │
        ▼ (Encrypted, authenticated transport)
[SIEM Indexers / Data Nodes]
        │
        ▼
[SIEM Search Head / Correlation Engine]
        │
        ▼
[SOC Analyst Dashboards] ←→ [Alerting & Ticketing Integration]
```

*Replace the above diagram with an accurate architectural diagram reference or embed a more detailed ASCII/image representation of the actual environment.*

**Collection Methods:**

| Collection Method | Use Case | Systems |
|---|---|---|
| **Agent-based (SIEM Forwarder)** | Preferred method for all servers and endpoints | Windows/Linux servers, workstations |
| **Agentless Syslog** | Network devices that cannot support agents | Firewalls, switches, routers, network appliances |
| **API / Connector** | Cloud platforms and SaaS applications | AWS CloudTrail, Azure Activity Log, Microsoft 365 |
| **Database Connector** | Direct database audit log collection | Oracle, MSSQL, PostgreSQL |
| **File-based (Log File Monitor)** | Legacy applications that write to local log files | [Legacy Application Names] |

### 7.3 SIEM Capacity and Performance Requirements

| Metric | Requirement |
|---|---|
| **Log Ingestion Capacity** | Must support a minimum of [X] GB/day of raw log data with headroom for [150%] peak burst |
| **Events Per Second (EPS)** | Sustained throughput of [X,000] EPS with burst capacity of [X,000] EPS |
| **Search Response Time** | Ad-hoc queries over the last 30 days must return results within [60] seconds for standard queries |
| **Availability** | SIEM platform must maintain [99.5%] availability, measured monthly |
| **Hot/Warm Storage** | [90] days of immediately searchable, online log data |
| **Cold Storage** | [12–36] months of archived log data accessible within [4] hours |

### 7.4 Log Normalisation and Parsing

- All ingested logs must be **parsed and normalised** into the organisation's common event schema (as defined in Section 6.1) upon ingestion.
- Source-specific parsing rules (extractors, field transforms) must be documented in the **SIEM Content Library**.
- Parsing failures (events that cannot be normalised) must generate a SIEM health alert and be reviewed within **[2] business days**.
- Unparsed raw logs must still be retained and searchable in their raw form.

### 7.5 Log Correlation and Use Cases

*Define the framework for SIEM correlation rules and detection use cases. Detailed alerting rules are in Section 9.*

The SIEM correlation engine must maintain an active use case library aligned to the MITRE ATT&CK framework. Use cases must be:

- Documented in the **SIEM Use Case Register** — [Document ID].
- Reviewed and validated against current threat intelligence at least **semi-annually** or following a significant security incident.
- Mapped to specific MITRE ATT&CK Tactics, Techniques, and Procedures (TTPs).
- Tested in a staging environment before deployment to production.

| Use Case Maturity Level | Description |
|---|---|
| **Level 1 — Detection** | Rule detects the event and generates an alert |
| **Level 2 — Investigation** | Correlated view assists analyst investigation |
| **Level 3 — Response Automation** | SOAR playbook triggered automatically upon alert |

### 7.6 SIEM Access Control

- Access to the SIEM platform is restricted to authorised SOC personnel and designated security administrators.
- Role-based access control (RBAC) must be enforced, with the following roles as a minimum:

| SIEM Role | Access Level | Assigned To |
|---|---|---|
| SOC Analyst (Tier 1) | View alerts, search assigned data sources | [SOC Analyst Team] |
| SOC Analyst (Tier 2/3) | Full search, correlation rule management | [Senior SOC Team] |
| SIEM Administrator | Full administrative access, including configuration | [SIEM Admin Team] |
| Auditor / Compliance | Read-only access to compliance dashboards | [Audit / Compliance Team] |
| Incident Responder | Full search, case management | [IR Team] |

- SIEM administrative actions must themselves be logged and forwarded to a **separate, protected audit log store**.
- Privileged access to the SIEM must be routed through the PAM solution.

### 7.7 SIEM Availability and Business Continuity

- The SIEM must have a documented **Disaster Recovery (DR) plan** with a Recovery Time Objective (RTO) of **[4] hours** and a Recovery Point Objective (RPO) of **[1] hour**.
- In the event of SIEM unavailability, logs must continue to be collected and queued at the forwarder/collector layer for delivery once connectivity is restored. Queue capacity must support a minimum of **[72] hours** of normal EPS without log loss.
- SIEM DR failover procedures are documented in the **[SOC Business Continuity Runbook — Document ID]**.

---

## 8. Log Retention Periods

*Define the minimum and recommended log retention periods for each category of log source, aligned to regulatory requirements. The Cyber Security Act 2024 and related NACSA guidelines require retention sufficient to support incident investigation and regulatory audit.*

### 8.1 Minimum Retention Requirements

All logs collected by [Organization Name] must be retained for a **minimum of 12 months**, in accordance with the requirements of the **Cyber Security Act 2024 (Act 854), Section 23**, and to support timely incident investigation, regulatory reporting, and legal proceedings.

Extended retention periods apply to specific log categories as defined below.

### 8.2 Retention Schedule by Log Category

| Log Category | Log Source Examples | Minimum Retention | Recommended Retention | Justification |
|---|---|---|---|---|
| **Authentication and Access** | AD, PAM, VPN, SSO | **12 months** | 24 months | Supports long-tail insider threat investigations |
| **Privileged User Activity** | PAM session logs, admin commands | **24 months** | 36 months | High-risk actions require extended audit trail |
| **Network Traffic (Security)** | Firewall, IDS/IPS, WAF | **12 months** | 18 months | Incident reconstruction, forensic analysis |
| **Application / Core Banking** | Core banking system, payment gateway | **24 months** | 60 months | Regulatory and legal proceedings (BNM RMiT) |
| **Database Access** | Oracle, MSSQL audit logs | **24 months** | 36 months | Data breach investigation, PDPA compliance |
| **System Events** | Windows Security Event Log, auditd | **12 months** | 18 months | Standard incident investigation support |
| **Cloud Platform Activity** | AWS CloudTrail, Azure Activity Log | **12 months** | 24 months | Cloud incident investigation |
| **Security Tool Events** | EDR, DLP, AV alerts | **12 months** | 18 months | Malware/threat investigation |
| **SIEM Alerts and Cases** | SIEM correlation alert history | **36 months** | 60 months | Regulatory audit, trend analysis |
| **Incident Response Evidence** | Forensic images, preserved log exports | **As directed by legal** | **Indefinite until case closed** | Litigation hold, regulatory investigation |

### 8.3 Retention Storage Tiers

| Tier | Storage Type | Accessibility | Retention Duration |
|---|---|---|---|
| **Hot** | Online, indexed, immediately searchable | < 1 second | [0–90 days] |
| **Warm** | Online, indexed, searchable with minor delay | < 5 minutes | [91–365 days] |
| **Cold** | Compressed archive, offline or near-line | < 4 hours upon request | [13–36 months] |
| **Compliance Archive** | Immutable write-once archive (WORM) | < 24 hours upon request | [As per retention schedule above] |

### 8.4 Log Disposal

- Upon expiry of the applicable retention period, logs must be **securely disposed of** in accordance with the **[Organization Name] Data Disposal Standard — [Document ID]**.
- Log disposal must be documented and logged within the SIEM audit trail.
- Logs subject to a **litigation hold** or **ongoing regulatory investigation** must not be disposed of until written authorisation is received from the Legal/Compliance function.
- The SOC Lead must conduct a **quarterly review** of the retention schedule to confirm alignment with current regulatory requirements.

### 8.5 Legal Hold Procedure

*Describe the process for placing logs under legal hold when required by regulators or legal counsel.*

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Legal/Compliance issues a Legal Hold Notice specifying log sources and date ranges | Legal / Compliance |
| 2 | SOC Lead acknowledges receipt and identifies the relevant log data in the SIEM | SOC Lead |
| 3 | SIEM Administrator applies an immutable retention lock to the identified log sets | SIEM Administrator |
| 4 | Confirmation sent to Legal/Compliance and documented in the Incident/Case Record | SOC Lead |
| 5 | Hold reviewed every [90] days until Legal/Compliance issues a Release Notice | SOC Lead / Legal |

---

## 9. Real-Time Alerting Rules

*Define the minimum set of alerting rules that must be active in the SIEM at all times, the alerting thresholds, severity classifications, and response time expectations for each alert type.*

### 9.1 Alert Severity Framework

All SIEM alerts must be assigned a severity level in accordance with the following classification:

| Severity Level | Colour Code | Description | SOC Response Time |
|---|---|---|---|
| **Critical (P1)** | Red | Confirmed or highly probable active attack, data breach, or ransomware indicator | Immediate — within **15 minutes** |
| **High (P2)** | Orange | Strong indicators of compromise, significant policy violation, or privilege abuse | Within **1 hour** |
| **Medium (P3)** | Yellow | Anomalous behaviour requiring investigation; possible attack indicator | Within **4 hours** (business hours) |
| **Low (P4)** | Blue | Informational events, minor policy violations, single failed login | Within **1 business day** |

### 9.2 Mandatory Alerting Use Cases

The following alerting rules must be active in the SIEM at all times. Each rule must have a documented correlation logic, threshold, and response runbook linked in the SIEM Use Case Register.

#### 9.2.1 Identity and Access Alerts

| Alert ID | Alert Name | Trigger Condition | Severity | Linked Runbook |
|---|---|---|---|---|
| IAM-001 | **Brute Force — Local Account** | ≥ [10] failed authentication attempts on a single account within [5] minutes | P2 — High | [SOC-RB-IAM-001] |
| IAM-002 | **Brute Force — Network / VPN** | ≥ [20] failed authentication attempts from a single source IP within [10] minutes | P2 — High | [SOC-RB-IAM-002] |
| IAM-003 | **Successful Login After Multiple Failures** | Successful login following ≥ [5] failed attempts within [15] minutes | P2 — High | [SOC-RB-IAM-003] |
| IAM-004 | **Privileged Account Login Outside Business Hours** | Privileged account (Admin group member) login between [2200–0600] MYT | P3 — Medium | [SOC-RB-IAM-004] |
| IAM-005 | **Dormant Account Activity** | Login by any account inactive for ≥ [90] days | P2 — High | [SOC-RB-IAM-005] |
| IAM-006 | **Account Privilege Escalation** | Addition of any account to a privileged group (Domain Admins, Enterprise Admins, etc.) | P2 — High | [SOC-RB-IAM-006] |
| IAM-007 | **Service Account Interactive Logon** | Interactive login (Type 2) by a service account | P2 — High | [SOC-RB-IAM-007] |
| IAM-008 | **Mass Account Lockout** | ≥ [20] account lockout events within [10] minutes across any accounts | P1 — Critical | [SOC-RB-IAM-008] |

#### 9.2.2 Network and Perimeter Alerts

| Alert ID | Alert Name | Trigger Condition | Severity | Linked Runbook |
|---|---|---|---|---|
| NET-001 | **Port Scan Detected** | Single source IP triggering connections to ≥ [100] distinct destination ports within [60] seconds | P2 — High | [SOC-RB-NET-001] |
| NET-002 | **Large Outbound Data Transfer** | Single egress flow exceeding [1] GB within [1] hour to an external destination | P2 — High | [SOC-RB-NET-002] |
| NET-003 | **Connection to Known Malicious IP** | Any connection to/from an IP on the threat intelligence blacklist | P1 — Critical | [SOC-RB-NET-003] |
| NET-004 | **Firewall Rule Modification** | Any change to perimeter firewall ruleset | P2 — High | [SOC-RB-NET-004] |
| NET-005 | **DNS Tunnelling Indicator** | Abnormally large DNS query payloads or high query frequency to a single external domain | P2 — High | [SOC-RB-NET-005] |
| NET-006 | **Impossible Travel** | User authenticated from two geographically distinct locations within an implausible time window | P1 — Critical | [SOC-RB-NET-006] |

#### 9.2.3 Endpoint and System Alerts

| Alert ID | Alert Name | Trigger Condition | Severity | Linked Runbook |
|---|---|---|---|---|
| EPT-001 | **Malware Detection** | Any EDR/AV malware detection event | P1 — Critical | [SOC-RB-EPT-001] |
| EPT-002 | **Ransomware Indicator** | Mass file rename/encrypt events or shadow copy deletion | P1 — Critical | [SOC-RB-EPT-002] |
| EPT-003 | **Lateral Movement Indicator** | Pass-the-Hash, Pass-the-Ticket, or Kerberoasting detection by EDR | P1 — Critical | [SOC-RB-EPT-003] |
| EPT-004 | **Suspicious PowerShell Execution** | PowerShell invoked with encoded command, `-noprofile`, `-ExecutionPolicy Bypass` | P2 — High | [SOC-RB-EPT-004] |
| EPT-005 | **New Scheduled Task Created** | Creation of a new scheduled task on a server outside of approved change windows | P3 — Medium | [SOC-RB-EPT-005] |
| EPT-006 | **Log Clearing Detected** | Security or System event log cleared (Event ID 1102 / 104) | P1 — Critical | [SOC-RB-EPT-006] |

#### 9.2.4 Application and Database Alerts

| Alert ID | Alert Name | Trigger Condition | Severity | Linked Runbook |
|---|---|---|---|---|
| APP-001 | **SQL Injection Attempt** | WAF or IDS detection of SQL injection patterns in web requests | P2 — High | [SOC-RB-APP-001] |
| APP-002 | **Mass Data Export from Database** | Single database session exporting ≥ [10,000] records from a sensitive table | P1 — Critical | [SOC-RB-APP-002] |
| APP-003 | **Privileged Database Account Login** | Direct login to database using SA / SYS / root database account | P2 — High | [SOC-RB-APP-003] |
| APP-004 | **Application Authentication Bypass** | Application error log indicating authentication bypass or token forgery | P1 — Critical | [SOC-RB-APP-004] |

#### 9.2.5 SIEM Health and Integrity Alerts

| Alert ID | Alert Name | Trigger Condition | Severity | Linked Runbook |
|---|---|---|---|---|
| SHI-001 | **Log Source Silence** | No events received from a P1 log source for ≥ [15] minutes | P2 — High | [SOC-RB-SHI-001] |
| SHI-002 | **SIEM Ingestion Failure** | Forwarder queue backlog exceeding [80%] capacity | P2 — High | [SOC-RB-SHI-002] |
| SHI-003 | **Log Volume Anomaly** | Event volume from any source deviating ≥ [300%] from baseline for ≥ [30] minutes | P3 — Medium | [SOC-RB-SHI-003] |
| SHI-004 | **SIEM Admin Action** | Any administrative action performed on the SIEM outside of approved change windows | P2 — High | [SOC-RB-SHI-004] |

### 9.3 Alert Tuning and False Positive Management

- All alerting rules must have a documented **false positive rate** tracked monthly.
- Rules with a false positive rate exceeding **[30%]** must be reviewed and tuned within **[10] business days**.
- Alert tuning changes must be subject to the SOC's **change management process** and approved by the SOC Lead.
- Suppressed or disabled alerts must be documented in the **SIEM Use Case Register** with a justification and planned review date.

### 9.4 Threat Intelligence Integration

- The SIEM must be integrated with at least one **automated threat intelligence feed** to maintain an up-to-date list of known malicious indicators (IPs, domains, hashes, URLs).
- Threat intelligence sources in use:

| Feed Name | Type | Update Frequency | Owner |
|---|---|---|---|
| [Feed Name, e.g., NACSA CERT MY Feeds] | IOC — IP, Domain, Hash | [Daily] | SOC |
| [Feed Name, e.g., Commercial TI Platform] | IOC + TTP context | [Real-time] | SOC |
| [Feed Name, e.g., MISP Sharing Community] | Sector-specific IOCs | [As published] | SOC |

---

## 10. Log Integrity Protection

*Define the technical and procedural controls required to ensure that log records are protected from unauthorised modification, deletion, or tampering. Log integrity is a prerequisite for logs to be admissible as evidence in regulatory proceedings or legal action.*

### 10.1 Integrity Principles

Log records must be treated as **immutable evidence**. Once written, log records must not be modified, overwritten, or deleted except through the approved retention disposal process defined in Section 8.4. The following integrity principles apply:

- **Write-once:** Log storage at the archive tier must use WORM (Write Once Read Many) technology or equivalent immutable storage.
- **Non-repudiation:** Logs must uniquely identify the user, system, and action to prevent denial of activity.
- **Completeness:** Gaps in logging or unexplained log source silences must be treated as potential integrity events and investigated.
- **Chain of custody:** Logs used in incident investigation must be handled under documented chain-of-custody procedures to preserve evidentiary value.

### 10.2 Technical Controls for Log Integrity

| Control | Description | Implementation |
|---|---|---|
| **Encrypted Transport** | All log data in transit must be encrypted | TLS 1.2 minimum (TLS 1.3 preferred) for all Syslog and forwarder communication |
| **Log Signing / Hashing** | Log files must be cryptographically hashed at point of collection | SHA-256 hash generated per log batch; stored separately from the logs |
| **Immutable Storage (WORM)** | Archive-tier log storage must be immutable | [WORM storage platform, e.g., AWS S3 Object Lock, Azure Immutable Blob Storage] |
| **Access Restriction** | Raw log storage must be accessible only to authorised SIEM and SOC administrators | RBAC enforced; no direct write access for analysts |
| **Log Source Authentication** | Log forwarders must authenticate to the SIEM before log delivery is accepted | Mutual TLS (mTLS) certificate-based authentication for forwarders |
| **Tamper Detection** | SIEM must alert on log gaps, unexpected volume drops, or hash mismatches | SHI-001, SHI-003 alerting rules (see Section 9.2.5) |
| **Separation of Duties** | SIEM administrators must not also be SOC analysts with case management authority | Role separation enforced via RBAC and PAM session policy |

### 10.3 Log Integrity Verification

- Log integrity hashes must be verified:
  - **Automatically** during the archive process — any hash mismatch must generate a P1 alert.
  - **Manually**, on a **quarterly** basis, by the SOC Lead or a designated senior analyst, as part of the Compliance Assurance activity (Section 12).
  - **On-demand** when logs are requested for incident investigation, regulatory audit, or legal proceedings.

- Results of integrity verification checks must be documented and retained for the duration of the log retention period + **[1] year**.

### 10.4 Audit Trail for SIEM Administration

- All administrative actions performed on the SIEM platform (configuration changes, rule modifications, data deletions, access changes) must be captured in a **dedicated SIEM administration audit log**.
- The SIEM administration audit log must be:
  - Stored **separately** from the operational SIEM log store.
  - Protected with the same integrity controls defined in Section 10.2.
  - Reviewed by the CISO or delegate at least **monthly**.
  - Retained for a minimum of **[36] months**.

### 10.5 Handling of Suspected Log Tampering

If suspected log tampering is identified:

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | Immediately escalate to SOC Lead and CISO | SOC Analyst (Tier 2/3) | Within 15 minutes of detection |
| 2 | Isolate the affected log storage volume from further writes (preserve state) | SIEM Administrator | Within 30 minutes |
| 3 | Engage the Incident Response team — open a P1 Security Incident | SOC Lead | Within 1 hour |
| 4 | Initiate forensic preservation of affected storage | IR Team / Forensic Analyst | Within 2 hours |
| 5 | Notify NACSA if the tampering implicates an NCII system, per Act 854 Section 23 | CISO / Compliance | Within mandatory reporting window |
| 6 | Complete a Root Cause Analysis and remediation plan | IR Team | Within [14] days of containment |

---

## 11. Roles and Responsibilities

*Define who is accountable, responsible, consulted, and informed for each key activity within this standard using the RACI framework.*

### 11.1 RACI Matrix

**Key:** **R** = Responsible (does the work) | **A** = Accountable (owns the outcome) | **C** = Consulted | **I** = Informed

| Activity | CISO | SOC Lead | SOC Analyst | SIEM Admin | System Owner | IT Operations | Data Protection Officer | Internal Audit | NACSA |
|---|---|---|---|---|---|---|---|---|---|
| Define and maintain this standard | A | R | C | C | I | I | C | C | I |
| Maintain SIEM log source register | I | A | I | R | C | C | I | I | — |
| Onboard new log sources to SIEM | I | A | C | R | R | C | I | I | — |
| Configure and maintain SIEM correlation rules | A | R | C | R | I | I | I | I | — |
| Monitor SIEM alerts (Tier 1 triage) | I | A | R | I | I | I | I | I | — |
| Investigate and respond to alerts (Tier 2/3) | I | A | R | C | C | C | C | I | — |
| Manage log retention and archiving | I | A | I | R | I | C | C | I | — |
| Conduct log integrity verification | I | A | R | R | I | I | I | I | — |
| Review and tune alerting rules | C | A | R | R | I | I | I | I | — |
| Conduct SIEM access reviews | A | R | I | C | I | I | I | C | — |
| Ensure NTP synchronisation on managed systems | I | I | I | I | R | R | I | I | — |
| Submit NACSA incident notifications | A | R | I | I | I | I | I | I | R |
| Annual compliance assessment against this standard | A | R | C | C | C | C | C | R | I |
| Review and approve this standard (semi-annual) | A | R | I | I | C | I | C | C | I |

### 11.2 Role Descriptions

| Role | Responsibilities in the Context of This Standard |
|---|---|
| **CISO** | Ultimate accountability for the organisation's logging and monitoring posture; approves exceptions and waivers; escalation point for P1 integrity events |
| **SOC Lead** | Day-to-day ownership of SIEM operations; enforces this standard; chairs the semi-annual review; approves alerting rule changes |
| **SOC Analyst** | Monitors SIEM dashboard; triages, investigates, and escalates alerts per runbooks; documents findings in the case management system |
| **SIEM Administrator** | Maintains SIEM infrastructure, forwarder configuration, parser rules, storage management, and availability; implements approved changes |
| **System Owner** | Ensures their systems generate required logs; facilitates log source onboarding; responsible for NTP configuration on managed assets |
| **IT Operations** | Maintains NTP infrastructure; ensures network connectivity for log forwarding; executes server-level logging configuration |
| **Data Protection Officer** | Advises on PDPA compliance requirements affecting log content (personal data); reviews log data retention for privacy obligations |
| **Internal Audit** | Independently assesses compliance with this standard; reviews SIEM access logs; reports findings to the Audit Committee |
| **NACSA** | Regulatory authority; receives mandatory incident notifications per Act 854 Section 23; may request log evidence during investigations |

---

## 12. Compliance and Assurance

*Define how compliance with this standard will be measured, monitored, and reported.*

### 12.1 Key Performance Indicators (KPIs)

The following KPIs must be tracked monthly and reported to the CISO:

| KPI | Description | Target | Measurement Source |
|---|---|---|---|
| **Log Source Coverage** | % of in-scope systems actively forwarding logs to SIEM | ≥ 98% | SIEM log source register |
| **Log Source Availability** | % uptime of log forwarding per source (SHI-001 alerts) | ≥ 99% | SIEM health dashboard |
| **Alert Response Time — P1** | % of P1 alerts acknowledged within 15 minutes | ≥ 95% | SIEM case management |
| **Alert Response Time — P2** | % of P2 alerts acknowledged within 1 hour | ≥ 95% | SIEM case management |
| **False Positive Rate** | % of alerts that are confirmed false positives | ≤ 20% | SOC analyst disposition records |
| **Log Retention Compliance** | % of log categories meeting minimum retention thresholds | 100% | SIEM storage audit |
| **Integrity Check Pass Rate** | % of quarterly hash verification checks passing without anomaly | 100% | SOC integrity verification records |
| **Use Case Coverage (MITRE)** | % of MITRE ATT&CK tactics with at least one active detection rule | ≥ [70%] | SIEM Use Case Register |

### 12.2 Compliance Reviews

| Review Activity | Frequency | Responsible | Output |
|---|---|---|---|
| SIEM log source register audit | Quarterly | SOC Lead | Updated register; gaps remediation plan |
| Alerting rule effectiveness review | Semi-annual | SOC Lead | Updated use case register |
| Log integrity verification | Quarterly | SOC Lead / Senior Analyst | Verification report |
| SIEM access review | Quarterly | SOC Lead | Access certification record |
| Full standard compliance assessment | Semi-annual (aligned to review cycle) | SOC Lead + Internal Audit | Compliance assessment report |
| External / Third-party assessment | Annual | CISO | Independent audit report |

### 12.3 Non-Compliance Handling

- Non-compliance with any mandatory requirement in this standard must be raised as a **finding** in the compliance tracking system within **[5] business days** of identification.
- A remediation plan with agreed timelines must be approved by the SOC Lead within **[10] business days**.
- Critical non-compliance (e.g., complete log source absence for a P1 system) must be escalated to the CISO within **[24] hours**.
- Persistent or repeated non-compliance must be escalated to the Chief Risk Officer and, where applicable, to the Board Risk Committee.

---

## 13. Exceptions and Waivers

*Define the process for requesting and approving exceptions to requirements in this standard. All exceptions must be documented and risk-accepted.*

### 13.1 Exception Request Process

| Step | Action | Responsible Party |
|---|---|---|
| 1 | System Owner identifies a requirement that cannot be met and documents the business/technical justification | System Owner |
| 2 | System Owner completes the **Exception Request Form** — [Form ID / Link] | System Owner |
| 3 | SOC Lead reviews the exception request and assesses compensating controls | SOC Lead |
| 4 | CISO reviews and approves or rejects; escalates to CRO if the risk is rated High or Critical | CISO |
| 5 | Approved exceptions are logged in the **Exception Register** — [Document ID] | SOC Lead |
| 6 | Exception reviewed at each semi-annual standard review; renewal requires fresh approval | SOC Lead / CISO |

### 13.2 Exception Criteria

Exceptions will only be considered where:

- A documented technical limitation exists that prevents compliance (not a resource or cost preference).
- Compensating controls are proposed that reduce the residual risk to an acceptable level.
- The exception does not create a compliance breach under Act 854 or other applicable regulation.
- The exception is time-limited, with a remediation target date no more than **[12] months** from approval.

---

## 14. Review and Approval

### 14.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] |

### 14.2 Review Schedule

This standard must be reviewed **semi-annually** (every six months), or earlier in the event of:

- A significant change to the Cyber Security Act 2024 or associated NACSA guidelines.
- A material change to the organisation's technology architecture or SIEM platform.
- A significant security incident that reveals a gap in logging or monitoring coverage.
- A directive from NACSA, BNM, or another regulatory authority.
- A finding from an internal audit or external assessment.

The next scheduled review date is: **[Next Review Date]**

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| **Document Author** | [Name] | [Signature] | [Date] |
| **SOC Lead (Document Owner)** | [Name] | [Signature] | [Date] |
| **Chief Information Security Officer (CISO)** | [Name] | [Signature] | [Date] |
| **Chief Risk Officer (CRO)** | [Name] | [Signature] | [Date] |
| **Head of IT / CTO** | [Name] | [Signature] | [Date] |
| **Chief Compliance Officer** | [Name] | [Signature] | [Date] |
| **Internal Audit (Review Acknowledgement)** | [Name] | [Signature] | [Date] |

---

## 15. References

*List all regulatory, legislative, and internal documents referenced in this standard.*

### 15.1 Legislation and Regulatory Instruments

| Reference | Description | Relevant Sections |
|---|---|---|
| **Cyber Security Act 2024 (Act 854)** | Primary Malaysian legislation governing cyber security obligations for NCII entities | Sections 18, 23 |
| **Personal Data Protection Act 2010 (Act 709)** | Governs the processing of personal data; requires security safeguards including access logging | Section 9 (Security Principle) |
| **Computer Crimes Act 1997 (Act 563)** | Criminalises unauthorised computer access; logs serve as admissible evidence | Sections 3, 5, 6 |
| **Financial Services Act 2013 (Act 758)** | Financial institutions regulatory framework; log requirements for financial transactions | [Relevant sections, if applicable] |
| **BNM Risk Management in Technology (RMiT) Policy** | BNM policy document governing technology risk management in licensed financial institutions | Paragraphs 10.39–10.44 (Logging and Monitoring) |

### 15.2 NACSA and Standards References

| Reference | Description |
|---|---|
| **NACSA Cyber Security Framework (NCSF)** | National framework for cyber security risk management for NCII entities |
| **NACSA NCII Sector Guidelines** | Sector-specific NCII guidance applicable to [Organization Name]'s sector |
| **MITRE ATT&CK Framework (Enterprise)** | Adversarial tactics, techniques, and procedures used to align detection use cases |
| **ISO/IEC 27001:2022 — Annex A.8.15** | International standard for information security — logging controls |
| **ISO/IEC 27035** | Incident management standard; logging supports incident evidence requirements |
| **NIST SP 800-92** | Guide to Computer Security Log Management (reference guidance) |
| **RFC 5424** | The Syslog Protocol — standard for syslog message format |
| **RFC 5425** | Transport Layer Security (TLS) Transport Mapping for Syslog |

### 15.3 Internal Document References

| Document ID | Document Title | Owner |
|---|---|---|
| [IS-POL-001] | Information Security Policy | CISO |
| [IS-FRW-001] | Cyber Security Framework | CISO |
| [IS-STD-INC-001] | Incident Response Policy and Plan | SOC Lead |
| [IS-STD-ACC-001] | Access Control Standard | Identity & Access Team |
| [IS-STD-DAT-001] | Data Classification and Handling Standard | Data Protection Officer |
| [IS-STD-DAT-002] | Data Disposal Standard | Data Protection Officer |
| [SOC-REG-001] | SIEM Log Source Register | SOC Lead |
| [SOC-REG-002] | SIEM Use Case Register | SOC Lead |
| [SOC-REG-003] | Exception Register | SOC Lead / CISO |
| [SOC-RB-*] | SOC Response Runbooks (per alert ID) | SOC Lead |
| [SOC-BCP-001] | SOC Business Continuity Runbook | SOC Lead |

---

## 16. Appendices

### Appendix A — Log Source Register Template

*The SIEM Log Source Register is maintained as a live operational document in [Document Management System / SharePoint Location]. The template below defines the minimum fields required.*

| Field | Description |
|---|---|
| **Source ID** | Unique identifier for the log source |
| **System Name / Hostname** | Name and FQDN of the source system |
| **System Type** | Category (Firewall, Server, Application, etc.) |
| **IP Address** | Primary IP address of the source |
| **Operating Environment** | Production / DR / Staging / Cloud |
| **Log Types Collected** | Specific log categories forwarded |
| **Collection Method** | Agent / Agentless Syslog / API / File |
| **SIEM Index / Data Store** | Target SIEM index or data store name |
| **Onboarding Date** | Date the source was onboarded to the SIEM |
| **Priority Classification** | P1 / P2 / P3 / P4 (per Section 5.2) |
| **System Owner** | Name and contact of the accountable system owner |
| **Parsing Rule Status** | Validated / Pending / Known Gap |
| **Last Verified** | Date of last health check confirming active ingestion |
| **Notes** | Any known limitations, exceptions, or special handling |

---

### Appendix B — SIEM Use Case Template

*Each active SIEM detection rule must have a corresponding use case record in the SIEM Use Case Register. The template below defines the minimum required fields.*

| Field | Description |
|---|---|
| **Use Case ID** | Unique identifier (e.g., IAM-001) |
| **Use Case Name** | Descriptive name for the detection |
| **Detection Objective** | What threat behaviour or compliance requirement does this detect? |
| **MITRE ATT&CK Mapping** | Tactic / Technique / Sub-technique (e.g., T1110.001 — Brute Force: Password Guessing) |
| **Log Sources Required** | Which log sources must be available for this rule to function? |
| **Detection Logic / Pseudo-code** | High-level description of the correlation logic and thresholds |
| **Severity** | P1 / P2 / P3 / P4 |
| **Alert Volume (Avg/Month)** | Baseline alert volume to inform capacity and staffing |
| **False Positive Rate (%)** | Tracked monthly |
| **Linked Response Runbook** | Document ID of the SOC response runbook |
| **Created Date** | Date the use case was created |
| **Last Tuning Date** | Date the rule was last modified or threshold adjusted |
| **Rule Status** | Active / Disabled / In Development |
| **Approved By** | SOC Lead approval for production deployment |

---

### Appendix C — Log Integrity Verification Checklist

*This checklist must be completed quarterly by the SOC Lead or designated senior analyst and retained as evidence of compliance.*

| # | Verification Item | Verification Method | Result (Pass / Fail / N/A) | Finding / Notes |
|---|---|---|---|---|
| 1 | All P1 log sources are actively ingesting logs with no gaps in the last 90 days | SIEM health dashboard review | | |
| 2 | SHA-256 hash records exist for all archived log batches in the period | Hash store audit | | |
| 3 | Spot-check: Verify hash integrity of [5] randomly selected archived log batches | Manual hash verification | | |
| 4 | WORM / immutable storage lock is active on the compliance archive tier | Storage platform configuration review | | |
| 5 | No unauthorised modifications to SIEM alert rules in the period | SIEM admin audit log review | | |
| 6 | SIEM administrator audit log is intact and complete for the period | Admin audit log review | | |
| 7 | No unexplained gaps or anomalies in log source volume baselines | Volume anomaly report review | | |
| 8 | All log sources are transmitting over TLS-encrypted channels | TLS certificate and configuration audit | | |
| 9 | Log retention periods are configured correctly for each storage tier | SIEM retention policy configuration review | | |
| 10 | No exceptions to log integrity requirements are outstanding beyond approved waiver dates | Exception register review | | |
| **Verification Completed By:** | | | | [Name, Title] |
| **Date:** | | | | [Date] |
| **Reviewed By (SOC Lead):** | | | | [Name, Signature] |

---

### Appendix D — Log Onboarding Request Form

*System Owners must submit this form to the SOC Lead at least 14 business days before a new system enters production.*

| Field | Response |
|---|---|
| **Requesting System Owner** | [Name, Title, Contact] |
| **System Name / Application** | |
| **System Type and Function** | |
| **IP Address(es) / Hostname(s)** | |
| **Operating System / Platform** | |
| **Production Go-Live Date** | |
| **Log Types to be Collected** | |
| **Proposed Collection Method** | Agent / Agentless / API / File |
| **Estimated EPS (Events Per Second)** | |
| **Sensitive Data in Logs?** | Yes / No — If Yes, describe masking controls |
| **Personal Data in Logs?** | Yes / No — If Yes, confirm with DPO |
| **NTP Synchronisation Confirmed?** | Yes / No |
| **Log Format (Syslog, JSON, CEF, etc.)** | |
| **SOC Use Case Requirements** | Describe any specific alerting requirements |
| **System Criticality** | P1 / P2 / P3 / P4 |
| **Supporting Documentation** | [Link to system architecture / data flow diagram] |

---

### Appendix E — Exception Request Form

*Any request for an exception to the requirements of this standard must be documented using this form and submitted to the SOC Lead.*

| Field | Response |
|---|---|
| **Exception Request ID** | [Auto-assigned by SOC] |
| **Requesting System Owner** | [Name, Title, Contact] |
| **System / Component Affected** | |
| **Standard Requirement Reference** | [Section number and requirement text] |
| **Reason for Exception** | [Technical / business justification] |
| **Risk Assessment** | [Likelihood, Impact, Residual Risk rating] |
| **Proposed Compensating Controls** | |
| **Proposed Exception Duration** | [Start Date] to [End Date — max 12 months] |
| **Remediation Plan** | [Steps to achieve full compliance by end date] |
| **SOC Lead Review** | [Name, Decision, Date] |
| **CISO Approval** | [Name, Decision, Date] |
| **CRO Approval (if High/Critical risk)** | [Name, Decision, Date] |

---

### Appendix F — NACSA Incident Notification Reference

*This appendix provides a summary reference for mandatory NACSA incident reporting obligations under the Cyber Security Act 2024 (Act 854), Section 23, as they relate to log-based incident detection.*

| Notification Type | Trigger | Timeframe | Recipient | Notes |
|---|---|---|---|---|
| **Initial Notification** | Detection of a cyber security incident affecting NCII systems | Within [6] hours of detection (refer to current NACSA directive for exact timeframe) | NACSA | Must include: nature of incident, affected systems, estimated impact |
| **Interim Report** | Ongoing significant incident | As directed by NACSA or within [24] hours of initial notification | NACSA | Incident status, containment actions taken |
| **Final Report** | Incident closure / post-incident review complete | Within [14] days of incident closure | NACSA | RCA, full timeline, evidence summary, remediation actions |

*Note: The specific reporting timeframes are subject to change in accordance with NACSA directives and subsidiary regulations under Act 854. The SOC Lead must ensure this appendix is updated whenever NACSA publishes revised notification requirements.*

---

*End of Document*

---

**[Organization Name] | Information Security & Cyber Resilience Division**
*This document is subject to semi-annual review. Printed copies are uncontrolled. Verify currency against the master document in [Document Management System].*