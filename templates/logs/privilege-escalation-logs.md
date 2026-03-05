# Privilege Escalation Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] — Continuous (Daily Review) |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the logging framework and operational procedures for recording, monitoring, and reviewing all privilege escalation events occurring on National Critical Information Infrastructure (NCII) systems operated or managed by [Organization Name]. It provides a structured audit trail to support incident response, forensic investigation, and regulatory compliance.

This artifact is **mandatory** under the **Cyber Security Act 2024 (Act 854)**, specifically **Section 18**, which imposes obligations on NCII sector leads and entities to maintain security controls, reporting mechanisms, and audit records commensurate with the protection of critical infrastructure.

### 1.2 Scope

This log template applies to:

- All systems and assets designated as NCII under the relevant NACSA sector designation for [Organization Name]
- All users, service accounts, and automated processes capable of executing privilege escalation commands (e.g., `sudo`, `runas`, `su`, `pkexec`, role-based access elevation via PAM, Windows UAC, or equivalent)
- All environments: production, staging, disaster recovery, and privileged access workstations (PAWs)
- Both interactive and non-interactive (scripted/automated) privilege escalation events

### 1.3 Out of Scope

- Standard user authentication events (covered under Authentication and Access Logs)
- Role provisioning and de-provisioning activities (covered under Identity and Access Management records)
- Privilege escalation on non-NCII classified systems, unless those systems have lateral access paths to NCII assets

---

## 2. Regulatory and Policy Context

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), **s18** | Obligation of NCII entities to implement and maintain cybersecurity measures, including audit logging of privileged operations |
| NACSA NCII Sector Security Requirements | Sector-specific technical controls mandating privileged access monitoring |
| [Organization Name] Privileged Access Management Policy | Internal policy governing the use and control of privileged accounts |
| [Organization Name] Security Operations Procedures | SOC procedures for log review, alert triage, and escalation |
| ISO/IEC 27001:2022 — Annex A.8.5 | Privileged access management control reference |

---

## 3. Privilege Escalation Event Records

*This section captures the primary log data for each privilege escalation event. Each row in the log table corresponds to a single discrete escalation event. Log entries must be generated automatically by the SIEM/log aggregation platform and supplemented with manual annotations where required.*

### 3.1 Log Entry Format

| Field | Description | Example / Placeholder |
|---|---|---|
| **Event ID** | Unique identifier for the escalation event | [EVT-PRIV-YYYYMMDD-NNNN] |
| **Timestamp (UTC)** | Date and time the escalation was initiated | [YYYY-MM-DD HH:MM:SS UTC] |
| **Log Source** | System or agent that generated the log | [Syslog / Windows Event Log / SIEM Agent] |
| **Event Type** | Classification of the escalation event | [sudo / runas / su / UAC Elevation / PAM / Other] |
| **Status** | Outcome of the escalation attempt | [Success / Failed / Blocked] |
| **Severity** | Risk classification of the event | [Info / Low / Medium / High / Critical] |
| **Reviewed By** | SOC analyst who reviewed the entry | [Analyst Name / Badge ID] |
| **Review Timestamp** | Date and time the entry was reviewed | [YYYY-MM-DD HH:MM:SS UTC] |
| **Disposition** | Analyst's finding for the event | [Approved Activity / Anomaly / Incident Raised] |

### 3.2 Sample Daily Log Table

*Populate the table below with escalation events captured during the review period. This table should be generated or exported from the SIEM platform and reviewed by the SOC analyst on duty.*

| Event ID | Timestamp (UTC) | Event Type | Status | Source System | Originating User | Target Account | Command Executed | Justification Ref | Session Recording | Anomaly Flag | Disposition |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [EVT-PRIV-] | [YYYY-MM-DD HH:MM:SS] | [sudo/runas] | [Success/Failed] | [Hostname/IP] | [username] | [root/admin] | [command string] | [CR/CHG/INC-Ref] | [Link/Ref ID] | [Yes/No] | [Approved/Anomaly/Incident] |
| [EVT-PRIV-] | [YYYY-MM-DD HH:MM:SS] | [sudo/runas] | [Success/Failed] | [Hostname/IP] | [username] | [root/admin] | [command string] | [CR/CHG/INC-Ref] | [Link/Ref ID] | [Yes/No] | [Approved/Anomaly/Incident] |
| [EVT-PRIV-] | [YYYY-MM-DD HH:MM:SS] | [sudo/runas] | [Success/Failed] | [Hostname/IP] | [username] | [root/admin] | [command string] | [CR/CHG/INC-Ref] | [Link/Ref ID] | [Yes/No] | [Approved/Anomaly/Incident] |

---

## 4. User and Target Account Details

*This section records the identity context for each escalation event. Capturing both the originating user and the target (privileged) account is essential for accountability and forensic traceability. All fields must be populated; "N/A" is not acceptable for mandatory fields.*

| Event ID | Originating Username | Originating User Full Name | Employee / Contractor ID | Department / Team | Target Account | Target Account Type | Account Owner | Authorization Status |
|---|---|---|---|---|---|---|---|---|
| [EVT-PRIV-] | [username] | [Full Name] | [EMP/CTR-ID] | [Department] | [root / Administrator / Service Account] | [Local / Domain / Service] | [Account Owner Name] | [Pre-Authorized / Incident-Driven / Unauthorized] |
| [EVT-PRIV-] | [username] | [Full Name] | [EMP/CTR-ID] | [Department] | [root / Administrator / Service Account] | [Local / Domain / Service] | [Account Owner Name] | [Pre-Authorized / Incident-Driven / Unauthorized] |

**Notes on account classification:**

- **Pre-Authorized**: Escalation is covered by an approved sudo policy, role definition, or standing privileged access entitlement
- **Incident-Driven**: Escalation was performed in response to an active incident under emergency access procedures
- **Unauthorized**: Escalation has no corresponding authorization record — treat as a security incident and raise per [Organization Name] Incident Response Procedure

---

## 5. System and Command Executed

*This section provides the technical context of each privilege escalation — specifically, which system was targeted and what commands were run under elevated privileges. This information is critical for detecting misuse, policy violations, and lateral movement.*

### 5.1 System Details

| Event ID | Hostname | IP Address | Operating System | Asset Classification | NCII Asset Tag | Environment |
|---|---|---|---|---|---|---|
| [EVT-PRIV-] | [hostname.domain] | [x.x.x.x] | [OS Name & Version] | [Server / Workstation / VM / Container] | [NCII-Asset-ID] | [Production / DR / Staging] |
| [EVT-PRIV-] | [hostname.domain] | [x.x.x.x] | [OS Name & Version] | [Server / Workstation / VM / Container] | [NCII-Asset-ID] | [Production / DR / Staging] |

### 5.2 Command Execution Details

| Event ID | Full Command String | Working Directory | Parent Process | Script / Automation Flag | Command Risk Rating | Policy Match |
|---|---|---|---|---|---|---|
| [EVT-PRIV-] | [e.g., sudo systemctl restart nginx] | [/etc/nginx] | [bash / powershell / cron] | [Manual / Scripted / Automated] | [Low / Medium / High] | [Allowed / Not in Policy / Prohibited] |
| [EVT-PRIV-] | [full command] | [/path/] | [parent process] | [Manual / Scripted] | [Low / Medium / High] | [Allowed / Not in Policy / Prohibited] |

**Command Risk Rating Guidance:**

| Rating | Criteria |
|---|---|
| **Low** | Read-only operations, service restarts for approved applications |
| **Medium** | Configuration file modifications, package installation, firewall rule changes |
| **High** | Account creation/deletion, kernel modifications, security tool bypass, bulk data access, database dumps |

---

## 6. Justification Reference

*Every privilege escalation event on NCII systems must be traceable to an approved authorization record. This section links each event to the corresponding change request, incident ticket, maintenance window, or standing authorization. Events without a valid justification reference must be flagged as anomalies and investigated.*

| Event ID | Justification Type | Reference Number | Reference Description | Authorized By | Authorization Date | Validity Period |
|---|---|---|---|---|---|---|
| [EVT-PRIV-] | [Change Request / Incident / Maintenance Window / Standing Auth] | [CHG-XXXX / INC-XXXX / MW-XXXX / SA-XXXX] | [Brief description of the approved work] | [Approver Name / Role] | [YYYY-MM-DD] | [One-time / Duration / Ongoing] |
| [EVT-PRIV-] | [Change Request / Incident / Maintenance Window / Standing Auth] | [CHG-XXXX / INC-XXXX / MW-XXXX / SA-XXXX] | [Brief description of the approved work] | [Approver Name / Role] | [YYYY-MM-DD] | [One-time / Duration / Ongoing] |

**Escalation procedure for missing justification:**

1. SOC Analyst flags the event with **Anomaly** disposition in the log
2. Analyst raises an internal query to the account owner's line manager within **1 business hour**
3. If no valid justification is provided within **4 hours**, escalate as a **Security Incident** under [Organization Name] Incident Response Procedure [IRP-REF]
4. Document the outcome in the Anomaly Alerts section (Section 8)

---

## 7. Session Recording Links

*For all interactive privilege escalation sessions (i.e., those involving an interactive shell or remote desktop session under elevated privileges), a session recording must be captured via the approved Privileged Access Management (PAM) platform. This section provides direct references to those recordings for audit and forensic retrieval.*

| Event ID | Session Recording Available | PAM Platform | Recording Reference / URL | Recording Duration | Recorded By (System) | Retrieval Instructions |
|---|---|---|---|---|---|---|
| [EVT-PRIV-] | [Yes / No / N/A — Non-Interactive] | [CyberArk / BeyondTrust / Delinea / Other] | [Recording ID or internal URL] | [HH:MM:SS] | [PAM System Name] | [Refer to PAM Admin Guide Rev X] |
| [EVT-PRIV-] | [Yes / No / N/A — Non-Interactive] | [PAM Platform Name] | [Recording ID or internal URL] | [HH:MM:SS] | [PAM System Name] | [Refer to PAM Admin Guide Rev X] |

**Recording retention requirement:** Session recordings related to NCII systems must be retained for a minimum of **[X years]** in accordance with [Organization Name] Log Retention Policy and NACSA guidance under Act 854 s18.

**Where session recording is unavailable:** Document the reason below and obtain sign-off from the Security Operations Manager.

| Event ID | Reason Recording Unavailable | Compensating Control Applied | Sign-Off (SecOps Manager) | Date |
|---|---|---|---|---|
| [EVT-PRIV-] | [e.g., Non-interactive batch job / PAM agent not installed] | [Enhanced command logging via auditd / PowerShell transcription enabled] | [Name / Signature] | [YYYY-MM-DD] |

---

## 8. Anomaly Alerts

*This section records all privilege escalation events that triggered automated anomaly alerts from the SIEM, UEBA, or PAM platform, as well as anomalies identified during manual SOC review. Each alert must be triaged, investigated, and closed with a documented outcome.*

### 8.1 Automated Alert Log

| Alert ID | Triggered Timestamp (UTC) | Detection Source | Alert Rule / Use Case | Event ID (Linked) | Alert Severity | Assigned Analyst | Triage Status |
|---|---|---|---|---|---|---|---|
| [ALT-PRIV-] | [YYYY-MM-DD HH:MM:SS] | [SIEM / UEBA / PAM / EDR] | [Rule Name, e.g., "Sudo to Root Outside Change Window"] | [EVT-PRIV-] | [Low / Medium / High / Critical] | [Analyst Name] | [Open / In Progress / Closed] |
| [ALT-PRIV-] | [YYYY-MM-DD HH:MM:SS] | [SIEM / UEBA / PAM / EDR] | [Rule Name] | [EVT-PRIV-] | [Low / Medium / High / Critical] | [Analyst Name] | [Open / In Progress / Closed] |

### 8.2 Alert Investigation and Closure

| Alert ID | Investigation Summary | Root Cause | Incident Raised? | Incident Reference | Closure Notes | Closed By | Closure Timestamp (UTC) |
|---|---|---|---|---|---|---|---|
| [ALT-PRIV-] | [Brief description of investigation steps taken] | [Legitimate activity / Policy violation / Malicious activity / False positive] | [Yes / No] | [INC-XXXX / N/A] | [e.g., Confirmed authorized emergency access; CHG-0045 raised retrospectively] | [Analyst Name] | [YYYY-MM-DD HH:MM:SS] |
| [ALT-PRIV-] | [Investigation summary] | [Root cause] | [Yes / No] | [INC-XXXX / N/A] | [Closure notes] | [Analyst Name] | [YYYY-MM-DD HH:MM:SS] |

### 8.3 Daily Anomaly Summary

*Complete this summary at the end of each daily review cycle.*

| Summary Field | Value |
|---|---|
| **Review Date** | [YYYY-MM-DD] |
| **Reviewing Analyst** | [Analyst Name / Badge ID] |
| **Total Escalation Events Reviewed** | [N] |
| **Total Automated Alerts Generated** | [N] |
| **Alerts Closed as False Positive** | [N] |
| **Alerts Escalated to Incidents** | [N] |
| **Events Without Valid Justification** | [N] |
| **Open Alerts Carried Forward** | [N] |
| **Overall Risk Posture** | [Normal / Elevated / Critical] |
| **Supervisor Sign-Off** | [SecOps Lead / Manager Name] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for the creation, maintenance, review, and governance of privilege escalation logs across [Organization Name].*

| Activity | SOC Analyst | SOC Lead / Supervisor | CISO / Deputy CISO | System / Asset Owner | IT Operations | Internal Audit | NACSA (Regulator) |
|---|---|---|---|---|---|---|---|
| Automated log generation and ingestion | I | I | I | A | R | I | — |
| Daily log review and triage | R | A | I | I | C | I | — |
| Anomaly alert investigation | R | A | I | C | C | I | — |
| Incident escalation (where required) | R | A | R | I | C | I | — |
| Justification reference validation | R | A | I | R | C | I | — |
| Session recording retrieval (on request) | R | A | I | I | R | I | — |
| Weekly summary reporting to CISO | C | R | A | I | I | I | — |
| Policy and procedure review | C | R | A | I | C | R | — |
| Regulatory reporting under Act 854 s18 | C | C | R | I | I | C | A |
| Log retention and archival | I | I | A | I | R | I | — |
| Annual audit of this log framework | C | C | A | C | C | R | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Role | Changes / Summary |
|---|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | [Security Operations Lead] | Initial version — created in alignment with Cyber Security Act 2024 (Act 854) s18 requirements |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Role] | [Description of changes] |

### 10.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Security Operations Lead | [Name] | [Signature] | [YYYY-MM-DD] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [YYYY-MM-DD] |
| Compliance Officer | [Name] | [Signature] | [YYYY-MM-DD] |
| NCII Sector Designated Entity Representative | [Name] | [Signature] | [YYYY-MM-DD] |

---

## 11. References

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duty of NCII entities to comply with cybersecurity measures as directed by NACSA, including audit logging and incident reporting obligations |
| **NACSA NCII Sector Security Framework** | Sector-specific requirements for privileged access monitoring and audit trail maintenance |
| **[Organization Name] Privileged Access Management Policy** | Internal policy governing assignment, use, and monitoring of privileged accounts |
| **[Organization Name] Security Operations Centre (SOC) Procedures** | Operational procedures for log review, alert triage, anomaly investigation, and incident escalation |
| **[Organization Name] Incident Response Plan** | Procedures to follow upon identification of unauthorized privilege escalation |
| **[Organization Name] Log Retention Policy** | Defines retention periods and archival requirements for security logs, including NCII system logs |
| **ISO/IEC 27001:2022, Annex A.8.5** | Privileged access management control — international best practice reference |
| **NIST SP 800-53 Rev 5 — AC-6, AU-2, AU-12** | Least privilege, event logging, and audit record generation controls — supplementary reference |

---

## 12. Appendices

### Appendix A — Privilege Escalation Command Reference

*Reference table of common privilege escalation mechanisms monitored across NCII systems.*

| Platform | Command / Mechanism | Log Source | Event ID / Log Field |
|---|---|---|---|
| Linux / Unix | `sudo <command>` | `/var/log/auth.log`, `/var/log/secure` | syslog tag: `sudo` |
| Linux / Unix | `su - <user>` | `/var/log/auth.log` | syslog tag: `su` |
| Linux / Unix | `pkexec <command>` | `/var/log/auth.log` | syslog tag: `pkexec` |
| Windows | `runas /user:<account>` | Windows Security Event Log | Event ID: 4648 |
| Windows | UAC elevation prompt | Windows Security Event Log | Event ID: 4673, 4674 |
| Windows | Scheduled task running as SYSTEM | Windows Security Event Log | Event ID: 4697 |
| Cloud (AWS) | `sts:AssumeRole` with elevated policy | AWS CloudTrail | eventName: AssumeRole |
| Cloud (Azure) | PIM role activation | Azure AD Audit Logs | Activity: Activate role |

### Appendix B — SIEM Alert Rules (Privilege Escalation Use Cases)

*List of SIEM detection rules currently deployed to monitor privilege escalation on NCII systems.*

| Rule ID | Rule Name | Detection Logic Summary | Severity | Response Playbook |
|---|---|---|---|---|
| [RULE-PRIV-001] | Sudo to Root Outside Change Window | Escalation to root user outside approved maintenance windows | High | [PLAY-PRIV-001] |
| [RULE-PRIV-002] | Repeated Failed Privilege Escalation | >3 failed sudo/runas attempts within 10 minutes | Medium | [PLAY-PRIV-002] |
| [RULE-PRIV-003] | Privilege Escalation by Service Account | Any interactive sudo/runas by a non-human service account | Critical | [PLAY-PRIV-003] |
| [RULE-PRIV-004] | Escalation to Prohibited Command | Execution of commands on the prohibited command list under elevated privileges | High | [PLAY-PRIV-004] |
| [RULE-PRIV-005] | New Account Performing First Escalation | First-ever sudo/runas event from a user account | Medium | [PLAY-PRIV-005] |

### Appendix C — Prohibited Commands List

*Commands and command patterns that are prohibited from execution under elevated privileges without explicit written approval from the CISO. Any detection of these commands must be treated as a Critical anomaly.*

| # | Command / Pattern | Platform | Risk | Approved Exception Process |
|---|---|---|---|---|
| 1 | `rm -rf /` or `rm -rf /*` | Linux | Data destruction | CISO written approval required |
| 2 | `chmod 777 -R /` | Linux | Permissions bypass | CISO written approval required |
| 3 | `net user /add` (outside IAM workflow) | Windows | Unauthorized account creation | CISO written approval required |
| 4 | `iptables -F` or `ufw disable` | Linux | Firewall bypass | CISO written approval required |
| 5 | Disabling of EDR/AV agent service | Any | Detection evasion | [Not permitted — raise incident] |
| [N] | [Command / Pattern] | [Platform] | [Risk description] | [Exception process] |

### Appendix D — Log Retention Schedule

| Log Type | Retention Period | Storage Location | Archival Format | Responsible Party |
|---|---|---|---|---|
| Privilege Escalation Logs (active) | [90 days] online | [SIEM Platform Name] | [Native SIEM / JSON / CEF] | IT Operations |
| Privilege Escalation Logs (archive) | [X years] | [Archival Storage / S3 / NAS] | [Compressed JSON / WORM] | IT Operations |
| Session Recordings | [X years] | [PAM Platform / Object Storage] | [Encrypted video / keystroke log] | IT Operations |
| Anomaly Alert Records | [X years] | [SIEM / Ticketing System] | [Native format] | Security Operations |

*Retention periods must comply with [Organization Name] Log Retention Policy and any minimum periods specified by NACSA under Act 854.*

---

*This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. For queries regarding this document, contact the Security Operations team at [secops@organization.com.my].*