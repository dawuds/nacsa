# Database Activity Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | DBA / Security |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This document defines the structure, retention, and review requirements for Database Activity Logs maintained by [Organization Name] in compliance with the **Cyber Security Act 2024 (Act 854)**, administered by the **National Cyber Security Agency (NACSA)**. Specifically, this artifact addresses obligations under **Section 18 (s18)** of Act 854, which mandates the protection and monitoring of systems designated as **National Critical Information Infrastructure (NCII)**.

Database Activity Logs serve as a continuous audit trail of all operations performed against NCII-designated data stores. These logs support incident detection, forensic investigation, regulatory reporting, and accountability enforcement for privileged and general database access.

**Scope:** This logging framework applies to:

- All database systems classified as NCII or supporting NCII-designated services operated by [Organization Name]
- All database users, including application service accounts, DBAs, and privileged administrators
- All environments (production, disaster recovery, staging where NCII data is present)
- On-premises and cloud-hosted database instances under [Organization Name]'s operational control

---

## 2. Regulatory Basis

| Reference | Instrument | Obligation |
|---|---|---|
| s18 | Cyber Security Act 2024 (Act 854) | Obligation to implement protective measures for NCII, including monitoring and logging of database operations |
| [Additional Clause] | [Additional Instrument] | [Description] |

*Identify and list all applicable regulatory provisions. Cross-reference with internal policy documents where Act 854 obligations have been operationalised.*

---

## 3. Log Configuration and Retention

*Describe the technical configuration applied to database audit logging, including the platforms, tools, and retention schedules in use.*

| Parameter | Value |
|---|---|
| **Database Platform(s)** | [e.g., Oracle 19c / MS SQL Server 2019 / PostgreSQL 15] |
| **Logging Mechanism** | [e.g., Oracle Unified Auditing / SQL Server Audit / pgAudit] |
| **Log Storage Location** | [e.g., Centralised SIEM — Wazuh / Object Storage / Log Repository] |
| **Minimum Retention Period** | [e.g., 24 months] |
| **Log Format** | [e.g., JSON / Syslog / Native binary audit trail] |
| **Encryption at Rest** | [Yes / No] |
| **Integrity Protection** | [e.g., HMAC / Immutable storage / Write-once log target] |
| **Log Review Frequency** | Continuous (daily review) |

---

## 4. DDL/DML Operations

*Record all Data Definition Language (DDL) and Data Manipulation Language (DML) operations executed against NCII data stores. This section captures the core transactional activity required for accountability and change tracing.*

### 4.1 Logged DDL Events

| Event Type | Description | Example Statement |
|---|---|---|
| CREATE | Creation of database objects | `CREATE TABLE`, `CREATE INDEX` |
| ALTER | Structural modification of existing objects | `ALTER TABLE`, `ALTER COLUMN` |
| DROP | Deletion of database objects | `DROP TABLE`, `DROP VIEW` |
| TRUNCATE | Removal of all rows from a table | `TRUNCATE TABLE` |
| [Other] | [Description] | [Example] |

### 4.2 Logged DML Events

| Event Type | Description | Threshold / Condition |
|---|---|---|
| SELECT | Read operations on sensitive tables | [e.g., Log all / Log where row count > N] |
| INSERT | Row insertion | All inserts on NCII-classified tables |
| UPDATE | Row modification | All updates on NCII-classified tables |
| DELETE | Row deletion | All deletes on NCII-classified tables |
| [Other] | [Description] | [Condition] |

### 4.3 Standard Log Record Format

| Field | Description | Example Value |
|---|---|---|
| `timestamp` | UTC timestamp of the event | `2025-03-05T08:14:32.000Z` |
| `db_user` | Database account that executed the statement | `svc_app_core` |
| `os_user` | Operating system user (where available) | `svcaccount01` |
| `client_host` | Source IP address or hostname | `10.10.5.22` |
| `database_name` | Target database | `[Database Name]` |
| `schema_name` | Target schema | `[Schema Name]` |
| `object_name` | Target table/object | `[Table Name]` |
| `action` | SQL verb | `INSERT` |
| `statement` | Full or redacted SQL statement | `INSERT INTO … VALUES …` |
| `rows_affected` | Number of rows affected | `1` |
| `session_id` | Database session identifier | `[Session ID]` |
| `return_code` | Success/failure code | `0` / `ORA-01031` |

---

## 5. Privileged Operations

*Log all operations performed by accounts with elevated database privileges (DBA roles, SYSDBA, sysadmin, superuser, etc.). Privileged access represents the highest-risk category and must be subject to enhanced scrutiny.*

### 5.1 Privileged Account Inventory

| Account / Role | Database | Privilege Level | Assigned To | Justification |
|---|---|---|---|---|
| [Account Name] | [Database Name] | [e.g., SYSDBA / DBA Role] | [Team / Individual] | [Business Justification] |
| [Account Name] | [Database Name] | [Privilege Level] | [Team / Individual] | [Justification] |

### 5.2 Monitored Privileged Actions

- Login and logoff events for all privileged accounts
- Execution of administrative commands (e.g., `DBCC`, `ALTER SYSTEM`, `SHUTDOWN`)
- Grant and revoke of privileges or roles
- Access to sensitive system tables or data dictionary views (e.g., `DBA_USERS`, `sys.sql_logins`)
- Creation, modification, or deletion of database user accounts
- Changes to audit policy configuration
- Export or backup operations initiated by privileged accounts
- [Additional Action]

### 5.3 Privileged Operation Log Fields

*In addition to the standard log record format (Section 4.3), privileged operation log entries must include:*

| Additional Field | Description |
|---|---|
| `privilege_used` | Specific privilege exercised |
| `change_ticket_ref` | Reference to approved change request (where applicable) |
| `approver` | Name of authorising officer for the action |
| `justification` | Stated reason for the privileged operation |

---

## 6. Schema Changes

*Track all structural modifications to database schemas in NCII data stores. Schema changes carry significant risk as they may affect data integrity, application behaviour, and security controls.*

### 6.1 Schema Change Log

| Date/Time (UTC) | Database | Schema | Object Affected | Change Type | Executed By | Change Ref | Approved By |
|---|---|---|---|---|---|---|---|
| [Timestamp] | [Database] | [Schema] | [Object Name] | [DDL Type] | [DB User] | [CHG-XXXXX] | [Approver] |
| [Timestamp] | [Database] | [Schema] | [Object Name] | [DDL Type] | [DB User] | [CHG-XXXXX] | [Approver] |

### 6.2 Unauthorised Schema Change Detection

*Define the alerting threshold and escalation path for schema changes executed without a corresponding approved change request.*

- **Detection Method:** [e.g., Automated SIEM correlation rule — schema DDL with no matching CHG ticket within ±30 minutes]
- **Alert Severity:** [e.g., High]
- **Escalation Path:** [e.g., DBA Lead → Security Operations → CISO]
- **Response SLA:** [e.g., Investigate within 2 hours of detection]

---

## 7. Bulk Data Operations

*Monitor and log operations that involve large-scale data movement, export, or modification, which may indicate data exfiltration, insider threat activity, or misconfiguration.*

### 7.1 Bulk Operation Thresholds

| Operation Type | Threshold for Enhanced Logging | Threshold for Alert |
|---|---|---|
| SELECT (row count) | > [e.g., 1,000 rows] | > [e.g., 10,000 rows] |
| INSERT (row count) | > [e.g., 500 rows] | > [e.g., 5,000 rows] |
| UPDATE (row count) | > [e.g., 500 rows] | > [e.g., 5,000 rows] |
| DELETE (row count) | > [e.g., 100 rows] | > [e.g., 1,000 rows] |
| Data export (size) | > [e.g., 10 MB] | > [e.g., 100 MB] |
| `SELECT INTO` / `INSERT INTO SELECT` | All occurrences | All occurrences |
| Database backup / export utility | All occurrences | Unscheduled occurrences |

### 7.2 Bulk Operation Log Fields

*Log entries for bulk operations must capture the following in addition to the standard fields:*

| Field | Description |
|---|---|
| `rows_affected` | Actual row count involved in the operation |
| `data_volume_mb` | Estimated data volume transferred (where measurable) |
| `destination` | Target of data movement (internal table, external file, linked server, etc.) |
| `query_hash` | Hash of the executed query for deduplication and pattern analysis |
| `execution_duration_ms` | Query execution time in milliseconds |

---

## 8. Failed Access Attempts

*Log all failed authentication and authorisation attempts against NCII database systems. Repeated failures are a key indicator of credential-based attack activity.*

### 8.1 Failed Authentication Events

| Event | Logged Fields | Alert Threshold |
|---|---|---|
| Invalid username | Timestamp, attempted username, client IP, DB host | > [e.g., 5] attempts within [e.g., 10] minutes from same source |
| Invalid password | Timestamp, username, client IP, DB host | > [e.g., 5] attempts within [e.g., 10] minutes |
| Account locked out | Timestamp, username, client IP, triggering event count | All occurrences |
| Connection refused (IP not in allowlist) | Timestamp, source IP, target DB | All occurrences |
| Authentication after business hours | Timestamp, username, client IP | All occurrences for privileged accounts |

### 8.2 Authorisation Failure Events

| Event | Logged Fields | Alert Threshold |
|---|---|---|
| Insufficient privilege (`ORA-01031` / `ERROR 229` / equivalent) | Timestamp, user, object, requested action | > [e.g., 3] per user per hour |
| Access to object outside assigned schema | Timestamp, user, object, schema | All occurrences |
| Attempt to modify audit configuration without authorisation | Timestamp, user, action | All occurrences |

### 8.3 Brute Force Detection Configuration

- **Detection Window:** [e.g., 10-minute rolling window]
- **Lockout Threshold:** [e.g., 5 consecutive failed attempts]
- **SIEM Correlation Rule Reference:** [Rule ID / Rule Name]
- **Automated Response:** [e.g., Temporary IP block / Account lock / Alert to SOC]

---

## 9. Stored Procedure Execution

*Track execution of stored procedures, functions, and triggers on NCII data stores. Stored procedures may encapsulate sensitive business logic, data transformations, or bulk operations and must be included in the audit trail.*

### 9.1 Stored Procedure Inventory (NCII-Relevant)

| Procedure/Function Name | Schema | Database | Purpose | Sensitivity Level | Last Reviewed |
|---|---|---|---|---|---|
| `[proc_name]` | `[schema]` | `[database]` | [Description] | [High / Medium / Low] | [Date] |
| `[proc_name]` | `[schema]` | `[database]` | [Description] | [Sensitivity] | [Date] |

### 9.2 Execution Log Fields

| Field | Description |
|---|---|
| `timestamp` | UTC timestamp of execution |
| `db_user` | Account that invoked the procedure |
| `procedure_name` | Fully qualified procedure name |
| `input_parameters` | Input parameters passed (redact sensitive values per data classification policy) |
| `return_code` | Execution result code |
| `execution_duration_ms` | Execution time in milliseconds |
| `rows_affected` | Number of rows affected (if applicable) |
| `called_from` | Application name / calling session identifier |

### 9.3 High-Risk Procedure Classification

*Identify procedures classified as high-risk due to their potential impact on NCII data. These require enhanced logging and periodic review.*

| Classification Criterion | Examples |
|---|---|
| Bulk data deletion or archival | `[proc_purge_records]`, `[proc_archive_data]` |
| Cross-schema or cross-database data movement | `[proc_data_sync]` |
| Privilege escalation or user management | `[proc_create_user]` |
| Decryption or exposure of masked data | `[proc_reveal_pii]` |
| Direct file system or OS interaction | `[proc_xp_cmdshell_wrapper]` |

---

## 10. Daily Review Process

*Describe the operational process for the mandatory daily review of database activity logs.*

### 10.1 Daily Review Checklist

| Review Item | Reviewer Role | Expected Outcome | Escalation Trigger |
|---|---|---|---|
| Review failed authentication alerts from prior 24 hours | Security Analyst | No unexplained spikes | > [threshold] failures from single source |
| Review all privileged account activity | DBA Lead | All actions matched to approved change requests | Any unmatched privileged action |
| Review schema change log | DBA Lead | All changes reference valid CHG tickets | Any unauthorised schema change |
| Review bulk operation alerts | Security Analyst | All bulk operations are expected / scheduled | Any unscheduled export > threshold |
| Review stored procedure execution anomalies | DBA / Security Analyst | Execution patterns within baseline | Deviation from baseline > [X]% |
| Confirm log integrity (no gaps or deletions) | Security Analyst | Continuous log stream with no missing intervals | Any gap in log continuity |

### 10.2 Review Artefact

- Daily review outcomes are recorded in: [e.g., SIEM Dashboard / Ticketing System / Log Review Register]
- Review sign-off is completed by: [Role]
- Unresolved findings are escalated to: [Role / Team]
- Escalation deadline: [e.g., Within 4 hours of identification]

---

## 11. Incident Response Integration

*Describe how database activity logs feed into the incident response process when anomalies are detected.*

- **SIEM Integration:** Database logs are forwarded to [SIEM Platform] in real time using [e.g., syslog / Beats agent / native connector]
- **Alert Mapping:** Database log alerts map to the following incident categories in the IR playbook: [List categories, e.g., Insider Threat, Credential Compromise, Data Exfiltration]
- **Forensic Preservation:** Upon incident declaration, database logs for the affected system and time window are preserved in write-once storage within [e.g., 1 hour] of declaration
- **NACSA Reporting Threshold:** Incidents involving NCII data stores must be assessed for mandatory reporting obligations under Act 854 s18 and reported within [e.g., 6 hours] of classification as a significant cyber security incident
- **IR Playbook Reference:** [Document ID / Link]

---

## 12. Roles and Responsibilities

*The following RACI matrix defines accountability for database activity log management.*

| Activity | DBA Lead | Security Analyst | CISO / Head of IT Security | System Owner | Compliance Officer | Internal Audit |
|---|---|---|---|---|---|---|
| Configure database audit policies | R | C | A | I | I | I |
| Maintain log storage and retention | R | C | A | I | I | I |
| Perform daily log review | C | R | I | I | I | I |
| Investigate and escalate anomalies | C | R | A | I | C | I |
| Manage privileged account access | R | C | A | I | I | I |
| Review and update stored procedure inventory | R | I | A | C | I | I |
| Report incidents to NACSA (where required) | I | C | R/A | I | C | I |
| Conduct periodic log audit | I | C | I | I | C | R |
| Approve changes to logging configuration | C | C | A | I | I | I |

**Key:** R — Responsible | A — Accountable | C — Consulted | I — Informed

---

## 13. Review and Approval

### 13.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [Version] | [Date] | [Author Name] | [Description of Changes] |

### 13.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| DBA Lead | [Name] | | [Date] |
| Head of IT Security / CISO | [Name] | | [Date] |
| Compliance Officer | [Name] | | [Date] |
| System Owner | [Name] | | [Date] |

---

## 14. References

| Reference | Instrument | Relevance |
|---|---|---|
| Section 18 (s18) | Cyber Security Act 2024 (Act 854) | Mandatory protective measures for NCII, including monitoring and logging obligations |
| [Section/Clause] | [e.g., BNM RMiT 10.x] | [Relevance to database activity logging] |
| [Section/Clause] | [e.g., PDPA 2010 — Principle 7 (Security)] | [Relevance to protection of personal data in NCII data stores] |
| [Internal Policy Reference] | [e.g., Information Security Policy v3.0] | [Internal policy governing database access controls and logging] |
| [Internal Policy Reference] | [e.g., Privileged Access Management Policy] | [Policy governing management of privileged database accounts] |

---

## Appendices

### Appendix A — Database Systems in Scope

*List all NCII-designated or NCII-supporting database systems subject to this logging framework.*

| System Name | Database Platform | Version | Environment | NCII Classification | Data Owner |
|---|---|---|---|---|---|
| [System Name] | [Platform] | [Version] | [Prod / DR] | [Yes / Supporting] | [Owner] |
| [System Name] | [Platform] | [Version] | [Prod / DR] | [Classification] | [Owner] |

### Appendix B — Audit Policy Configuration Reference

*Document the specific audit policy settings applied to each database platform to ensure consistent coverage of the required log categories.*

| Database Platform | Audit Policy Name / ID | Enabled Events | Configuration Date | Configured By |
|---|---|---|---|---|
| [Platform] | [Policy Name] | [DDL / DML / Privileged / Failed Auth] | [Date] | [DBA Name] |
| [Platform] | [Policy Name] | [Events] | [Date] | [DBA Name] |

### Appendix C — SIEM Alert Rule Index

*Cross-reference database activity log alert rules configured in the SIEM platform.*

| Rule ID | Rule Name | Log Source | Trigger Condition | Severity | Assignee |
|---|---|---|---|---|---|
| [RULE-001] | [e.g., DB — Brute Force Authentication] | [Database Audit Log] | [Condition] | [High] | [SOC / DBA] |
| [RULE-002] | [e.g., DB — Unauthorised Schema Change] | [Database Audit Log] | [Condition] | [Critical] | [DBA Lead / CISO] |
| [RULE-003] | [e.g., DB — Bulk Export Threshold Exceeded] | [Database Audit Log] | [Condition] | [High] | [SOC / DBA] |
| [RULE-XXX] | [Rule Name] | [Log Source] | [Condition] | [Severity] | [Assignee] |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary cyber security legislation in Malaysia |
| **DML** | Data Manipulation Language — SQL statements that modify data (INSERT, UPDATE, DELETE, SELECT) |
| **DDL** | Data Definition Language — SQL statements that define or modify schema structure (CREATE, ALTER, DROP) |
| **DBA** | Database Administrator |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **NCII** | National Critical Information Infrastructure, as designated under Act 854 |
| **SIEM** | Security Information and Event Management platform |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment model |
| **Privileged Account** | A database account with administrative or elevated permissions beyond standard user access |
| [Term] | [Definition] |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure is prohibited. All printed copies are uncontrolled — refer to the document management system for the current version.*