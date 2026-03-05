# Database Security Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | DBA / CISO |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]
**Document Status:** [Draft / Under Review / Approved]

---

> **Confidentiality Notice:** This document contains confidential information belonging to [Organization Name]. It is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and Obligations](#3-regulatory-framework-and-obligations)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Database Hardening Requirements](#5-database-hardening-requirements)
6. [Access Control and Least Privilege](#6-access-control-and-least-privilege)
7. [Encryption — TDE and Column-Level](#7-encryption--tde-and-column-level)
8. [Audit Logging Configuration](#8-audit-logging-configuration)
9. [Backup Encryption](#9-backup-encryption)
10. [Database Activity Monitoring](#10-database-activity-monitoring)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Compliance and Enforcement](#12-compliance-and-enforcement)
13. [Exceptions Management](#13-exceptions-management)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*State the primary objective of this standard and the problem it addresses within the organization's security posture.*

This Database Security Standard establishes the minimum security requirements for the configuration, access control, encryption, monitoring, and operational management of database systems operated by [Organization Name]. It ensures that all databases handling sensitive, regulated, or operationally critical data are protected against unauthorized access, data exfiltration, tampering, and loss.

This standard supports [Organization Name]'s obligations as a **National Critical Information Infrastructure (NCII) entity** under the **Cyber Security Act 2024 (Act 854)**, and aligns with the security controls mandated by the **National Cyber Security Agency (NACSA)** pursuant to Section 18 of the Act.

Compliance with this standard is **mandatory** for all database systems within scope and is subject to periodic audit by internal assurance functions and regulatory bodies.

---

## 2. Scope

*Define the boundaries of this standard — which systems, data types, environments, and personnel are covered. Be explicit about what is excluded.*

### 2.1 In Scope

This standard applies to:

- All **relational and non-relational database management systems (DBMS)** owned, operated, or managed by [Organization Name], including but not limited to:
  - Microsoft SQL Server
  - Oracle Database
  - MySQL / MariaDB
  - PostgreSQL
  - MongoDB
  - [Other DBMS in use — list here]
- Databases hosted in the following environments:
  - On-premises data centres
  - Co-location facilities
  - Private cloud infrastructure
  - Public cloud platforms (AWS RDS, Azure SQL, GCP Cloud SQL, etc.)
  - Hybrid environments
- Databases that store, process, or transmit:
  - Personal data as defined under the **Personal Data Protection Act 2010 (PDPA)**
  - Financial transaction data
  - Customer account data
  - Regulatory reporting data
  - Any data classified as **Confidential** or above under [Organization Name]'s Data Classification Policy
- All personnel with administrative, operational, or read-only access to in-scope database systems, including:
  - Internal staff (DBAs, developers, analysts)
  - Third-party vendors and managed service providers
  - Contractors and temporary staff

### 2.2 Out of Scope

The following are excluded from this standard unless otherwise specified:

- Development and sandbox environments containing only synthetic or anonymized data, subject to confirmation via the [Organization Name] Data Classification Register
- Database instances operated solely by regulators or government agencies and not managed by [Organization Name]
- Legacy systems under approved decommission plans with a documented risk acceptance

> **Note:** Any exclusion must be formally documented in the Exceptions Register referenced in Section 13.

---

## 3. Regulatory Framework and Obligations

*Reference all applicable laws, regulations, guidelines, and standards that this document supports. Include specific clauses or sections where possible.*

This standard is issued in compliance with and supports the following regulatory instruments:

### 3.1 Primary Legislation

| Instrument | Issuing Authority | Relevant Provision | Obligation |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | Parliament of Malaysia / NACSA | Section 18 | Mandatory security measures for NCII entities |
| Personal Data Protection Act 2010 (PDPA) | PDPD / KKMM | Section 9 (Security Principle) | Protection of personal data against loss, misuse, unauthorized access |
| Financial Services Act 2013 (FSA) | Bank Negara Malaysia | [Applicable section] | Information security obligations for licensed financial institutions |
| Islamic Financial Services Act 2013 (IFSA) | Bank Negara Malaysia | [Applicable section] | As above for Islamic financial institutions |

### 3.2 Regulatory Guidelines and Directives

| Document | Issuing Authority | Relevance |
|---|---|---|
| NACSA NCII Sector Security Plan Requirements | NACSA | Baseline security standards for NCII entities |
| BNM Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Technology risk management, including database security controls |
| [NACSA Technical Directive, if applicable] | NACSA | [Description] |
| [Organization Name] Information Security Policy | [Organization Name] | Parent policy governing this standard |

### 3.3 Standards and Frameworks Referenced

| Standard | Version | Application |
|---|---|---|
| CIS Benchmark for [DBMS Name] | [Version] | Database hardening baseline |
| ISO/IEC 27001:2022 | 2022 | Annex A controls — A.8 (Technology Controls) |
| NIST SP 800-53 | Rev. 5 | AC, AU, SC, SI control families |
| OWASP Database Security Cheat Sheet | Current | Application-layer database security |
| [Other applicable standard] | [Version] | [Application] |

---

## 4. Definitions and Abbreviations

*Provide clear definitions for all technical and regulatory terms used in this document to ensure consistent interpretation.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Database Management System (DBMS)** | Software that provides an interface for storing, organizing, retrieving, and managing structured data. |
| **Database Administrator (DBA)** | A person responsible for the installation, configuration, maintenance, performance, and security of a DBMS. |
| **Transparent Data Encryption (TDE)** | A method of encrypting database files at rest at the storage level, transparent to applications and users. |
| **Column-Level Encryption (CLE)** | Encryption applied to specific columns within a database table, providing granular data protection. |
| **Least Privilege** | The principle that a user or process should be granted only the minimum access rights necessary to perform its function. |
| **Database Activity Monitoring (DAM)** | A security technology that monitors and analyzes database activity in real time or near real time to detect threats and policy violations. |
| **Privileged Account** | Any account that has elevated rights within a system, including DBA, schema owner, or service accounts with DDL/DML rights. |
| **NCII Entity** | A National Critical Information Infrastructure entity designated under Section 2 of the Cyber Security Act 2024. |
| **Hardening** | The process of securing a system by reducing its attack surface through configuration changes, patch application, and removal of unnecessary services. |
| **Separation of Duties (SoD)** | A control that divides critical tasks among multiple individuals to reduce the risk of fraud or error. |

### 4.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CLE | Column-Level Encryption |
| DAM | Database Activity Monitoring |
| DBA | Database Administrator |
| DBMS | Database Management System |
| DDL | Data Definition Language |
| DML | Data Manipulation Language |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PDPA | Personal Data Protection Act 2010 |
| RMiT | Risk Management in Technology |
| SoD | Separation of Duties |
| TDE | Transparent Data Encryption |

---

## 5. Database Hardening Requirements

*This section defines the baseline configuration standards that must be applied to all in-scope database instances to reduce attack surface and eliminate known vulnerabilities.*

### 5.1 Hardening Baseline

All database instances **must** be hardened in accordance with the applicable CIS Benchmark or equivalent vendor security guide prior to being placed into production. The hardening baseline for each DBMS platform used by [Organization Name] is documented in the corresponding technical annexure referenced in Appendix A.

The following hardening principles apply universally across all DBMS platforms:

#### 5.1.1 Installation and Configuration

- [ ] The DBMS must be installed on a dedicated server or container with no co-hosted production applications unless formally approved and risk-accepted.
- [ ] The default installation directory must be changed from vendor defaults where technically feasible.
- [ ] All sample databases, demonstration schemas, and default schemas not required for operation (e.g., `SCOTT`, `HR`, `DEMO`) must be removed or disabled.
- [ ] Default system accounts (e.g., `sa`, `sys`, `system`, `postgres`, `root`) must be **renamed or disabled** where supported by the platform.
- [ ] Default passwords on all system accounts must be changed prior to production deployment.
- [ ] The DBMS must not be installed using a domain administrator account or any account with excessive operating system privileges.
- [ ] Network listener configuration must bind only to required IP addresses and ports; wildcard bindings (0.0.0.0) are prohibited unless technically unavoidable.

#### 5.1.2 Unnecessary Features and Services

All unnecessary DBMS features must be disabled. The following table lists components that require a documented business justification to remain enabled:

| Feature / Component | Platform | Default State | Required Action |
|---|---|---|---|
| xp_cmdshell | SQL Server | Disabled | Verify disabled; document if enabled |
| CLR Integration | SQL Server | Disabled | Verify disabled; document if enabled |
| Linked Servers | SQL Server | Per install | Remove if not required |
| UTL_FILE | Oracle | Enabled | Restrict or disable |
| External Procedures | Oracle | Enabled | Disable if not required |
| FILE privilege | MySQL | Variable | Revoke unless required |
| LOAD DATA INFILE | MySQL/MariaDB | Enabled | Disable if not required |
| [Other feature] | [Platform] | [Default] | [Action] |

#### 5.1.3 Network Security

- [ ] Database listener ports must not be exposed directly to untrusted networks. Access must be mediated by a firewall or network access control list (ACL).
- [ ] Remote administrative access (e.g., SQL*Net, TCP 1433, TCP 5432) must be restricted to authorized management IP addresses only.
- [ ] TLS/SSL must be enforced for all client-to-database communications. Minimum TLS version: **TLS 1.2**; TLS 1.3 preferred.
- [ ] Self-signed certificates are not permitted in production environments; certificates must be issued by [Organization Name]'s approved CA.
- [ ] Database Management ports must be isolated on a dedicated management VLAN, separate from application and user network segments.

#### 5.1.4 Patch Management

- [ ] Critical and high-severity database vendor patches must be applied within **[30] calendar days** of release, subject to change management procedures.
- [ ] Medium-severity patches must be applied within **[90] calendar days** of release.
- [ ] Patch status for all in-scope database instances must be tracked in the [Organization Name] Asset and Vulnerability Register.
- [ ] End-of-life DBMS versions that no longer receive security patches are prohibited in production without a documented risk acceptance approved by the CISO.

#### 5.1.5 Operating System Integration

- [ ] The DBMS service account must be a dedicated, non-interactive service account with the minimum OS privileges required.
- [ ] The DBMS service account must not have local administrator or root privileges on the host operating system.
- [ ] File system permissions for DBMS data files, log files, and configuration files must restrict access to the DBMS service account only; no world-readable or world-writable permissions are permitted.

### 5.2 Hardening Verification

*Describe the process for verifying that hardening controls are applied and maintained.*

| Activity | Frequency | Responsible Party | Evidence |
|---|---|---|---|
| Automated CIS benchmark scan | Quarterly | DBA Team | Scan report with remediation log |
| Manual hardening review | Annual | Information Security Team | Hardening checklist sign-off |
| Post-change hardening verification | After each major change | DBA Team | Change request closure evidence |
| Penetration testing (database scope) | Annual | [Internal / Third-party] | Penetration test report |

---

## 6. Access Control and Least Privilege

*This section defines requirements for managing access to database systems, enforcing the principle of least privilege, and controlling privileged accounts.*

### 6.1 Access Control Principles

All access to in-scope database systems must be governed by the following principles:

- **Least Privilege:** Each user, service account, or application account must be granted only the permissions necessary to perform its defined function. No additional rights may be assigned without a documented business justification.
- **Need-to-Know:** Access to specific schemas, tables, or data sets must be restricted to those with a legitimate operational need.
- **Separation of Duties:** The roles of DBA, developer, application account, and auditor must be assigned to distinct accounts; no single account may hold all roles simultaneously.
- **Individual Accountability:** Shared generic accounts for interactive database access are prohibited. Each user must authenticate with a uniquely identified account.

### 6.2 Account Categories and Permitted Rights

| Account Type | Examples | Maximum Permitted Rights | Notes |
|---|---|---|---|
| DBA Administrative Account | `[org]_dba_admin` | Full DDL/DML on assigned schemas; DBMS administration | Must use privileged access workstation (PAW) |
| Application Service Account | `[app]_svc_acct` | DML on specific schemas only (SELECT, INSERT, UPDATE, DELETE) | No DDL; no GRANT permissions |
| Read-Only Account | `[app]_ro_acct` | SELECT on specific schemas/views only | Used for reporting, analytics, BI tools |
| Developer Account (Non-Prod) | `[dev]_dev_[name]` | DDL/DML in non-production schemas only | No access to production databases |
| Audit / Monitoring Account | `[org]_audit_acct` | SELECT on audit logs and system catalog views only | Read-only; no DML |
| Emergency Break-Glass Account | `[org]_emergency_dba` | Full administrative access | Checked out via PAM; session fully recorded |

### 6.3 Privileged Access Management

- [ ] All DBA and privileged database accounts must be enrolled in a **Privileged Access Management (PAM)** solution.
- [ ] Privileged session recording must be enabled for all interactive DBA sessions. Session recordings must be retained for a minimum of **[12] months**.
- [ ] Passwords for privileged accounts must be rotated on a minimum **[90]-day** cycle, or immediately upon personnel change.
- [ ] Just-in-time (JIT) access must be implemented for break-glass accounts where the PAM solution supports it.
- [ ] Multi-factor authentication (MFA) must be enforced for all interactive privileged access to production databases.

### 6.4 Access Provisioning and De-provisioning

| Activity | Requirement |
|---|---|
| Access request | Formal request via [ITSM tool], approved by data owner and line manager |
| Provisioning | Completed within [5] business days of approved request |
| Periodic access review | Quarterly for privileged accounts; semi-annually for all other accounts |
| De-provisioning on role change | Within [1] business day of HR notification |
| De-provisioning on termination | Within [4] hours of confirmed termination (immediate for involuntary) |
| Dormant account review | Accounts inactive for [90] days must be reviewed; inactive for [180] days must be disabled |

### 6.5 Service and Application Account Controls

- [ ] Application service accounts must authenticate using managed credentials stored in an approved secrets management solution (e.g., HashiCorp Vault, Azure Key Vault, AWS Secrets Manager).
- [ ] Hard-coded database credentials in application source code, configuration files, or scripts are strictly **prohibited**.
- [ ] Service account passwords must be rotated at minimum every **[90] days** or upon any suspected compromise.
- [ ] Application accounts must not have the ability to create, modify, or drop schemas, tables, or database objects (no DDL rights).

### 6.6 Access Rights Review

*Describe the access certification process, including who conducts the review and how exceptions are handled.*

- Access reviews for all database accounts must be conducted at the frequency defined in Section 6.4.
- Reviews must be performed and signed off by the relevant **Data Owner** and **DBA Team Lead**.
- Accounts that cannot be certified must be disabled pending investigation.
- Results of all access reviews must be documented and retained for a minimum of **[3] years** as audit evidence.

---

## 7. Encryption — TDE and Column-Level

*This section defines the mandatory encryption requirements for data at rest within database systems, including full-database encryption using TDE and granular protection of sensitive fields using column-level encryption.*

### 7.1 Encryption Policy

[Organization Name] mandates that all sensitive data stored in database systems is encrypted at rest. Encryption requirements are determined by the data classification of the information stored within the database.

| Data Classification | Minimum Encryption Requirement |
|---|---|
| Confidential | TDE (mandatory) + CLE for PII/financial fields |
| Internal | TDE (mandatory) |
| Public | TDE (recommended) |

### 7.2 Transparent Data Encryption (TDE)

TDE must be implemented on all production database instances storing Confidential or Internal data.

#### 7.2.1 TDE Requirements

| Requirement | Specification |
|---|---|
| Encryption algorithm | AES-256 |
| Key storage | Hardware Security Module (HSM) or approved key management system; keys must not be stored on the same server as the database |
| Key management system | [Approved KMS — e.g., [Organization Name] KMS / Cloud KMS] |
| Master key rotation frequency | Annual, or upon suspected compromise |
| Database encryption key (DEK) rotation | Upon master key rotation or as required |
| TDE verification | Monthly — verify TDE status on all in-scope instances |

#### 7.2.2 TDE Implementation Checklist

- [ ] TDE enabled on all production databases storing Confidential or Internal data
- [ ] TDE certificate / asymmetric key backed up securely and stored separately from the database host
- [ ] Key backup stored in [approved secure location — e.g., HSM, encrypted offline storage]
- [ ] TDE status documented in the Database Inventory Register (Appendix B)
- [ ] TDE verified as part of quarterly DBA security review

### 7.3 Column-Level Encryption (CLE)

Column-level encryption must be applied to specific data fields that carry elevated sensitivity, regardless of whether TDE is implemented.

#### 7.3.1 Fields Requiring Column-Level Encryption

The following data types must be encrypted at the column level in all production databases:

| Data Type | Examples | Encryption Requirement |
|---|---|---|
| National Identification Number | MyKad / NRIC | CLE — AES-256 |
| Financial account numbers | Bank account, card PAN | CLE — AES-256 |
| Authentication credentials | Passwords, PINs | Hashed (bcrypt / Argon2) — not encrypted |
| Biometric data | [If stored] | CLE — AES-256 |
| Sensitive personal data | [As defined in PDPA] | CLE — AES-256 |
| [Other organization-defined fields] | [Examples] | CLE — AES-256 |

#### 7.3.2 CLE Implementation Requirements

- [ ] All columns listed in the organization's **Sensitive Data Register** must be assessed for CLE applicability.
- [ ] CLE keys must be managed via [approved key management solution] and must not be accessible to application developers.
- [ ] Application-layer encryption may substitute for database CLE where it achieves equivalent or stronger protection, subject to CISO approval.
- [ ] Tokenization or format-preserving encryption may be used for payment card data fields in compliance with PCI-DSS requirements.

### 7.4 Encryption in Transit

- [ ] All connections between application servers and database instances must use TLS 1.2 or higher.
- [ ] Unencrypted database connections (e.g., plain TCP without TLS) are prohibited in production environments.
- [ ] Database replication and log shipping streams must also be encrypted in transit.

### 7.5 Key Management

| Key Management Requirement | Detail |
|---|---|
| Key generation | Must use FIPS 140-2 Level 2 validated HSM or equivalent approved mechanism |
| Key storage | Keys must be stored separately from encrypted data; dual-control recommended for master keys |
| Key access control | Access to cryptographic keys must be restricted to the DBA Team and Key Custodians; logged and audited |
| Key backup and recovery | Key backups must be tested for restoration at minimum annually |
| Key destruction | Decommissioned keys must be securely destroyed per NIST SP 800-88 guidelines |
| Escrow | Master keys must be escrowed in [approved escrow location] for disaster recovery |

---

## 8. Audit Logging Configuration

*This section defines requirements for enabling, configuring, and retaining audit logs for all in-scope database systems to ensure accountability and support forensic investigation.*

### 8.1 Audit Logging Principles

All database systems must maintain comprehensive audit logs sufficient to:

- Establish individual accountability for all data access and administrative actions
- Support forensic investigation of security incidents
- Provide evidence for regulatory compliance and internal audit purposes
- Enable detection of unauthorized or anomalous database activity

### 8.2 Mandatory Audit Events

The following events must be logged for all in-scope production databases:

| Event Category | Specific Events to Log |
|---|---|
| **Authentication** | Successful logins, failed login attempts, account lockouts, logouts |
| **Privileged Access** | All DBA session activity; use of administrative commands |
| **Schema Changes (DDL)** | CREATE, ALTER, DROP on tables, views, procedures, indexes, schemas |
| **Data Manipulation (DML)** | INSERT, UPDATE, DELETE on tables containing Confidential or regulated data |
| **Access Control Changes** | GRANT, REVOKE, DENY operations; role membership changes |
| **Configuration Changes** | Changes to DBMS configuration parameters, startup parameters |
| **Backup and Restore** | Initiation and completion of backup/restore operations |
| **Audit Log Events** | Any modification, deletion, or disabling of audit log settings |
| **Error Events** | Critical DBMS errors, permission violations, connection failures |
| **Export / Bulk Operations** | BULK COPY, export operations, SELECT INTO (for Confidential data tables) |

### 8.3 Audit Log Configuration Requirements

| Requirement | Specification |
|---|---|
| Log format | Structured format (JSON preferred) or platform-native structured format |
| Minimum fields per log entry | Timestamp (UTC), username, source IP, database name, object name, SQL statement (or operation code), success/failure indicator |
| Log destination | Centralized SIEM / log management platform; logs must NOT be stored only on the database host |
| Log forwarding | Near real-time forwarding to SIEM (maximum [15]-minute delay) |
| Log integrity | Logs must be write-protected; use of append-only log accounts or WORM storage recommended |
| Tamper detection | Hash-chaining or equivalent log integrity verification must be implemented where platform supports it |

### 8.4 Audit Log Retention

| Data Sensitivity | Minimum Online Retention | Minimum Archive Retention | Total Minimum Retention |
|---|---|---|---|
| Confidential | 90 days (hot) | 24 months (cold) | 24 months |
| Internal | 90 days (hot) | 12 months (cold) | 12 months |
| All logs subject to investigation | Duration of investigation + 12 months post-closure | — | As required |

> Retention periods must comply with Bank Negara Malaysia RMiT requirements and any other applicable regulatory mandates. Where requirements conflict, the longer retention period applies.

### 8.5 Audit Log Access Control

- [ ] Access to raw audit logs must be restricted to the Information Security team and authorized auditors only.
- [ ] DBAs must not have the ability to modify or delete audit log records; separation between DBA and audit log administrator roles must be enforced.
- [ ] All access to audit logs must itself be logged.
- [ ] Audit log accounts used for forwarding to SIEM must have append/write-only permissions; no read access to historical logs.

### 8.6 Audit Log Review

*Define who reviews audit logs, how frequently, and what criteria trigger escalation.*

| Review Type | Frequency | Reviewer | Escalation Criteria |
|---|---|---|---|
| Automated alerting (DAM/SIEM) | Real-time / Near real-time | SOC Analyst | As per DAM alert policy (Section 10) |
| Privileged account activity review | Weekly | DBA Team Lead / IS Team | Any unexplained privileged operations |
| Failed authentication review | Daily | SOC Analyst | >5 failed attempts on any account within 15 minutes |
| Schema change review | After each change event | DBA Team Lead | Any unauthorized DDL changes |
| Periodic comprehensive review | Monthly | IS Team | Anomalies, dormant account activity, off-hours access |

---

## 9. Backup Encryption

*This section defines security requirements for database backups to ensure that data remains protected throughout its lifecycle, including when stored on backup media or transmitted to off-site locations.*

### 9.1 Backup Security Principles

Database backups represent a complete copy of production data and carry the same data classification and protection requirements as the source database. All backup operations must incorporate security controls commensurate with the sensitivity of the data being backed up.

### 9.2 Backup Encryption Requirements

| Requirement | Specification |
|---|---|
| Encryption algorithm | AES-256 minimum |
| Encryption scope | All backups of databases storing Confidential or Internal data must be encrypted before being written to backup media or transmitted off-site |
| Encryption point | Backup encryption must be applied at the source (server-side) before data leaves the database host |
| Backup encryption keys | Must be managed separately from the backup data; keys must not be stored on the same media or system as the backup |
| Key recovery | Backup encryption key recovery procedures must be documented and tested annually |

### 9.3 Backup Storage and Transmission

| Control | Requirement |
|---|---|
| On-site backup storage | Encrypted backups stored in access-controlled, fire-rated storage media or dedicated backup server with restricted access |
| Off-site / cloud backup transmission | Encrypted in transit using TLS 1.2+ in addition to backup-level encryption |
| Cloud backup storage | Must use [Organization Name]-managed encryption keys (BYOK); cloud provider must not have access to plaintext backup data |
| Tape / portable media | Must be encrypted; physical handling must follow media handling procedures; chain of custody documented |

### 9.4 Backup Integrity and Restoration Testing

- [ ] Backup integrity verification (checksum or hash verification) must be performed upon completion of each backup job.
- [ ] Backup restoration must be tested at minimum **quarterly** for critical production databases.
- [ ] Restoration tests must verify that:
  - Backup files can be successfully decrypted using the stored key
  - Data integrity post-restoration is confirmed (row counts, hash verification)
  - Restoration time meets Recovery Time Objective (RTO) defined in the Business Continuity Plan
- [ ] Test restoration results must be documented and retained as audit evidence.

### 9.5 Backup Retention and Disposal

| Backup Type | Minimum Retention | Disposal Method |
|---|---|---|
| Daily incremental | 30 days | Secure overwrite (NIST SP 800-88) |
| Weekly full | 12 weeks | Secure overwrite (NIST SP 800-88) |
| Monthly full | 12 months | Secure overwrite / degauss / physical destruction |
| Annual full (for compliance) | [7] years | Physical destruction with certificate of destruction |

> Retention periods must be aligned with the organization's Records Retention Policy and any applicable regulatory obligations including BNM RMiT and PDPA requirements.

### 9.6 Backup Access Control

- [ ] Access to backup files and backup management systems must be restricted to authorized DBA and backup operations personnel only.
- [ ] All access to backup systems and backup files must be logged.
- [ ] Restoration of production database backups must require dual authorization (four-eyes principle) from a DBA and the applicable system owner.

---

## 10. Database Activity Monitoring

*This section defines requirements for the implementation and operation of Database Activity Monitoring (DAM) capabilities to detect, alert, and respond to unauthorized or anomalous database activity in real time.*

### 10.1 DAM Objectives

Database Activity Monitoring must provide [Organization Name] with the capability to:

- Detect unauthorized data access and exfiltration attempts in real time
- Identify anomalous user behavior and access patterns
- Alert on policy violations and suspicious database activity
- Support forensic investigation of security incidents
- Provide continuous compliance evidence for regulatory obligations under Act 854 Section 18

### 10.2 DAM Coverage Requirements

- [ ] DAM must be deployed and active on **all production databases** storing Confidential data.
- [ ] DAM coverage must include both network-based monitoring and, where supported, agent-based monitoring on the database host.
- [ ] DAM monitoring must be continuous (24x7); monitoring gaps must be treated as security incidents and reported accordingly.

### 10.3 DAM Policy Configuration

The DAM solution must be configured to detect and alert on the following activities at minimum:

#### 10.3.1 Access Anomalies

| Alert Rule | Threshold / Condition | Severity |
|---|---|---|
| Off-hours access by privileged account | Access outside of [defined business hours] by DBA accounts | High |
| Access from unauthorized source IP | Database connection from IP not in approved source list | Critical |
| Dormant account access | Access by account with no activity in past [90] days | High |
| Concurrent sessions exceeding baseline | Single account with >N simultaneous sessions (N = [define]) | Medium |
| Geographic anomaly | Access from unexpected geographic region | High |

#### 10.3.2 Data Access Anomalies

| Alert Rule | Threshold / Condition | Severity |
|---|---|---|
| Mass data retrieval | Single query or session returning >[X] rows from Confidential tables | High |
| Bulk export / SELECT INTO | Use of export commands on regulated data tables | Critical |
| Sensitive column access by non-authorised account | Access to columns designated in Sensitive Data Register by accounts without explicit approval | Critical |
| Sequential row scan | Full table scan of large Confidential tables outside of batch window | Medium |

#### 10.3.3 Privilege and Configuration Abuse

| Alert Rule | Threshold / Condition | Severity |
|---|---|---|
| Privilege escalation | GRANT of DBA or admin role | Critical |
| Audit log modification | Any attempt to modify or delete audit log settings | Critical |
| DDL on production schema | Any CREATE/ALTER/DROP outside of approved change window | High |
| New account creation | Creation of any new database account | High |
| Password change on service account | Password change outside of PAM rotation cycle | Medium |

### 10.4 Alert Response Requirements

| Severity | Response SLA | Primary Responder | Escalation Path |
|---|---|---|---|
| Critical | Acknowledge within 15 minutes; investigate within 1 hour | SOC Analyst | SOC Lead → CISO |
| High | Acknowledge within 1 hour; investigate within 4 hours | SOC Analyst | SOC Lead → DBA Team Lead |
| Medium | Acknowledge within 4 hours; investigate within 1 business day | DBA Team Lead | Information Security Team |
| Low | Review within 5 business days | DBA Team | Periodic review |

### 10.5 DAM System Requirements

| Requirement | Detail |
|---|---|
| DAM platform | [Approved DAM solution — e.g., Imperva, IBM Guardium, Oracle Audit Vault] |
| Integration with SIEM | DAM alerts and logs must be forwarded to [SIEM platform] in real time |
| DAM system availability | DAM must have high-availability configuration; single points of failure are not permitted |
| DAM rule maintenance | Alert rules must be reviewed and updated quarterly by the Information Security Team |
| False positive management | False positive rate must be reviewed monthly; tuning actions documented |
| DAM administrator access | Restricted to Information Security Team; DBA team must not have access to DAM management console |

### 10.6 DAM Reporting

| Report | Frequency | Audience |
|---|---|---|
| DAM alert summary report | Weekly | DBA Team Lead, SOC Lead |
| Privileged access activity report | Monthly | CISO, DBA Team Lead |
| Policy violation trend report | Monthly | Information Security Team |
| Compliance evidence report | Quarterly | CISO, Internal Audit |
| Annual DAM effectiveness review | Annual | CISO, Risk Committee |

---

## 11. Roles and Responsibilities

*This section defines accountability for implementing and maintaining the controls in this standard, presented as a RACI matrix.*

### 11.1 Role Definitions

| Role | Description |
|---|---|
| **Chief Information Security Officer (CISO)** | Executive owner of this standard; responsible for strategic oversight and approval |
| **Database Administrator (DBA) Team** | Primary implementors of database security controls; responsible for day-to-day technical compliance |
| **DBA Team Lead** | Responsible for DBA team compliance, access reviews, and technical escalation |
| **Information Security Team** | Responsible for policy governance, compliance monitoring, DAM management, and audit support |
| **Security Operations Centre (SOC)** | Responsible for real-time monitoring, alert triage, and incident response |
| **Application Development Team** | Responsible for secure coding practices, service account management, and no hard-coded credentials |
| **IT Infrastructure Team** | Responsible for network segmentation, TLS configuration, and patch management support |
| **Internal Audit** | Independent assurance of compliance with this standard |
| **Data Owner** | Business unit owner responsible for certifying access to their data |
| **Compliance / Risk Team** | Regulatory liaison; responsible for ensuring regulatory obligations are met |

### 11.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Control Activity | CISO | DBA Team | IS Team | SOC | App Dev | IT Infra | Internal Audit | Data Owner |
|---|---|---|---|---|---|---|---|---|
| Database hardening implementation | I | R | C | I | I | C | I | I |
| Hardening verification and audit | A | C | R | I | I | I | R | I |
| Access provisioning | I | R | C | I | I | I | I | A |
| Periodic access review | A | R | C | I | I | I | I | R |
| Privileged account management (PAM) | A | R | C | I | I | I | I | I |
| TDE implementation | A | R | C | I | I | I | I | I |
| Column-level encryption implementation | A | R | C | I | R | I | I | I |
| Key management | A | R | R | I | I | I | I | I |
| Audit log configuration | A | R | C | I | I | I | I | I |
| Audit log review and monitoring | I | I | R | R | I | I | C | I |
| Backup encryption implementation | A | R | C | I | I | I | I | I |
| Backup restoration testing | A | R | C | I | I | I | I | I |
| DAM deployment and configuration | A | C | R | I | I | I | I | I |
| DAM alert monitoring and response | I | C | C | R | I | I | I | I |
| Standard review and update | A | C | R | I | C | C | C | I |
| Regulatory reporting (Act 854) | A | I | R | I | I | I | I | I |
| Exception management | A | C | R | I | I | I | C | I |

---

## 12. Compliance and Enforcement

*This section describes how compliance with this standard is measured, monitored, and enforced.*

### 12.1 Compliance Measurement

Compliance with this standard will be measured through:

- **Automated scanning:** Quarterly CIS benchmark scans against all in-scope database instances, producing a scored compliance report.
- **Internal audit:** Annual internal audit of database security controls, conducted by Internal Audit with support from the Information Security Team.
- **Continuous monitoring:** Real-time DAM and SIEM monitoring as described in Section 10.
- **Periodic access reviews:** As defined in Section 6.4.
- **Penetration testing:** Annual penetration test with database systems in scope.

### 12.2 Compliance Metrics

The following Key Performance Indicators (KPIs) will be tracked and reported monthly to the CISO:

| KPI | Target | Reporting Frequency |
|---|---|---|
| % of production databases with TDE enabled | 100% | Monthly |
| % of databases meeting CIS benchmark score | ≥ [85]% | Quarterly |
| Critical/High DAM alerts resolved within SLA | ≥ 95% | Monthly |
| % of privileged accounts enrolled in PAM | 100% | Monthly |
| % of access certifications completed on time | ≥ 98% | Quarterly |
| Mean time to patch (critical vulnerabilities) | ≤ 30 days | Monthly |
| Backup restoration test success rate | 100% | Quarterly |

### 12.3 Non-Compliance Consequences

Non-compliance with this standard may result in:

- Formal notification to the relevant team head and CISO
- Escalation to the Risk and Compliance Committee
- Mandatory remediation plan with tracked milestones
- Escalation to the Board Risk Committee for persistent or material non-compliance
- Regulatory disclosure obligations under Act 854 Section 18 where non-compliance constitutes a reportable incident

---

## 13. Exceptions Management

*This section describes the process for managing exceptions to this standard where full compliance is technically infeasible or operationally impractical.*

### 13.1 Exception Process

Any deviation from the requirements of this standard must be formally documented and approved through the following process:

1. The requesting team submits an **Exception Request Form** to the Information Security Team, documenting:
   - The specific control requirement(s) from which an exception is sought
   - The technical or operational justification for the exception
   - The compensating controls that will be implemented to mitigate the residual risk
   - The proposed duration of the exception
2. The Information Security Team assesses the risk and prepares a recommendation.
3. The CISO approves or rejects exceptions with a residual risk rating of Medium or below.
4. Exceptions with a residual risk rating of High or Critical require approval from the **Chief Risk Officer (CRO)** and must be noted at the **Risk and Compliance Committee**.
5. Approved exceptions are recorded in the **Database Security Exception Register**.

### 13.2 Exception Register

| Exception ID | Database / System | Control Ref. | Justification | Compensating Control | Risk Rating | Approved By | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| [EX-DB-001] | [System name] | [Section ref.] | [Justification] | [Control description] | [H/M/L] | [Approver] | [Date] | [Active/Expired] |

### 13.3 Exception Review

- All active exceptions must be reviewed at minimum **every 6 months**.
- Exceptions must not be renewed more than **twice** without a mandatory escalation to CRO.
- Exceptions that cannot be resolved within **24 months** must be escalated as a formal risk item to the Board Risk Committee.

---

## 14. Review and Approval

### 14.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Major revision description] |

### 14.2 Review Schedule

This standard must be reviewed at minimum **annually** from the date of approval, or earlier in the following circumstances:

- Following a significant security incident involving a database system
- Following a material change in the threat landscape relevant to database security
- Upon issuance of new or amended NACSA directives, BNM guidelines, or other applicable regulatory instruments
- Following a significant change in [Organization Name]'s database technology landscape (e.g., migration to cloud, new DBMS platform)
- As directed by Internal Audit or a regulatory examination finding

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], DBA Team Lead | | [Date] |
| Reviewed By | [Name], Information Security Manager | | [Date] |
| Reviewed By | [Name], Internal Audit | | [Date] |
| Approved By | [Name], Chief Information Security Officer | | [Date] |
| Endorsed By | [Name], Chief Risk Officer | | [Date] |

---

## 15. References

The following regulatory instruments, standards, and internal documents are referenced in or directly support this standard:

### 15.1 Legislation and Regulatory Instruments

| Reference | Title | Issuing Authority | Relevant Provisions |
|---|---|---|---|
| Act 854 | Cyber Security Act 2024 | Parliament of Malaysia | Section 18 — Duty of NCII entity owners to comply with security directives |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 9 — Security Principle; Section 10 — Retention Principle |
| Act 758 | Financial Services Act 2013 | Parliament of Malaysia | [Applicable sections on information security] |
| — | Risk Management in Technology (RMiT) | Bank Negara Malaysia | Part G — Cybersecurity; Appendix 5 — Technology Controls |
| — | NACSA NCII Security Standards | NACSA | All applicable NCII security requirements |

### 15.2 Industry Standards

| Reference | Title | Version | Application |
|---|---|---|---|
| CIS Benchmark | CIS Benchmark for [DBMS Platform] | [Current version] | Database hardening baseline |
| ISO/IEC 27001 | Information Security Management Systems | 2022 | Annex A — Technology Controls |
| NIST SP 800-53 | Security and Privacy Controls for Information Systems | Rev. 5 | AC, AU, SC, SI, IA control families |
| NIST SP 800-57 | Recommendation for Key Management | Part 1 Rev. 5 | Cryptographic key management |
| NIST SP 800-88 | Guidelines for Media Sanitization | Rev. 1 | Secure data disposal |
| PCI DSS | Payment Card Industry Data Security Standard | v4.0 | Requirement 3 (data protection), Requirement 10 (logging) — where applicable |

### 15.3 Internal Documents

| Document Title | Document ID | Owner |
|---|---|---|
| Information Security Policy | [Doc ID] | CISO |
| Data Classification Policy | [Doc ID] | CISO / CDO |
| Access Control Policy | [Doc ID] | CISO |
| Cryptography and Key Management Policy | [Doc ID] | CISO |
| Incident Response Policy | [Doc ID] | CISO / SOC |
| Business Continuity and Disaster Recovery Plan | [Doc ID] | CRO / CIO |
| Change Management Policy | [Doc ID] | CIO |
| Records Retention Policy | [Doc ID] | Compliance / Legal |
| Privileged Access Management Procedure | [Doc ID] | DBA Team / IS Team |

---

## 16. Appendices

### Appendix A — Platform-Specific Hardening Checklists

*This appendix provides or references platform-specific hardening checklists for each DBMS type in use at [Organization Name]. Each checklist should be based on the applicable CIS Benchmark and supplemented with organization-specific requirements.*

| DBMS Platform | Hardening Reference Document | Version | Last Updated |
|---|---|---|---|
| Microsoft SQL Server [version] | CIS Microsoft SQL Server [version] Benchmark | [Version] | [Date] |
| Oracle Database [version] | CIS Oracle Database [version] Benchmark | [Version] | [Date] |
| MySQL [version] | CIS MySQL Enterprise Edition [version] Benchmark | [Version] | [Date] |
| PostgreSQL [version] | CIS PostgreSQL [version] Benchmark | [Version] | [Date] |
| [Other DBMS] | [Reference document] | [Version] | [Date] |

> Detailed checklists are maintained in [document repository location / tool name]. DBAs must confirm checklist completion prior to production deployment and record confirmation in the change request.

---

### Appendix B — Database Inventory Register

*Maintain a current register of all in-scope database instances. This register must be reviewed and updated quarterly.*

| DB Instance ID | DBMS Platform | Version | Environment | Hosting | Data Classification | TDE Status | CLE Applied | DAM Covered | DBA Owner | Last Review Date |
|---|---|---|---|---|---|---|---|---|---|---|
| [DB-001] | [DBMS] | [Version] | Production | On-prem | Confidential | Enabled | Yes | Yes | [Name] | [Date] |
| [DB-002] | [DBMS] | [Version] | Production | Cloud (AWS) | Internal | Enabled | No | Yes | [Name] | [Date] |
| [DB-003] | [DBMS] | [Version] | UAT | On-prem | Internal | Enabled | No | No | [Name] | [Date] |

---

### Appendix C — Sensitive Data Register (Database Scope)

*This appendix cross-references the organization's Sensitive Data Register for fields that require column-level encryption or heightened access controls within database systems.*

| Field Name | Table / Schema | DBMS Instance | Data Type | Classification | CLE Required | CLE Implemented | Data Owner |
|---|---|---|---|---|---|---|---|
| `customer_ic_number` | `customers.personal_data` | [DB-001] | NRIC | Confidential | Yes | Yes | [Owner] |
| `account_number` | `accounts.financial` | [DB-001] | Financial | Confidential | Yes | Yes | [Owner] |
| `card_pan` | `payments.transactions` | [DB-002] | PAN | Confidential | Yes | Yes | [Owner] |
| [Field name] | [Table.schema] | [Instance] | [Type] | [Class] | [Y/N] | [Y/N] | [Owner] |

---

### Appendix D — Database Account Register

*Maintain a current register of all database accounts. This register underpins the access review process defined in Section 6.4.*

| Account Name | Account Type | DBMS Instance | Schema / DB Access | Rights Granted | Creation Date | Last Used | MFA Enrolled | PAM Enrolled | Certifying Owner | Next Review Date |
|---|---|---|---|---|---|---|---|---|---|---|
| [svc_app1] | Service Account | [DB-001] | [schema_name] | SELECT, INSERT, UPDATE, DELETE | [Date] | [Date] | N/A | Yes | [Owner] | [Date] |
| [dba_admin1] | DBA Account | All | All | Full admin | [Date] | [Date] | Yes | Yes | [DBA Lead] | [Date] |
| [rpt_readonly] | Read-Only | [DB-001] | [schema_name] | SELECT | [Date] | [Date] | No | No | [Owner] | [Date] |

---

### Appendix E — Backup and Encryption Key Register

*This appendix tracks backup schedules, encryption key identifiers, and key custodians for all in-scope databases.*

| DB Instance | Backup Type | Backup Frequency | Encryption Method | Key ID / Reference | Key Custodian | Key Backup Location | Last Restoration Test | Test Result |
|---|---|---|---|---|---|---|---|---|
| [DB-001] | Full + Incremental | Daily (incr), Weekly (full) | AES-256 (backup tool) | [Key ID] | [Custodian Name] | [Location] | [Date] | [Pass/Fail] |
| [DB-002] | Full | Daily | AES-256 (cloud KMS) | [Key ID] | [Custodian Name] | [Location] | [Date] | [Pass/Fail] |

---

### Appendix F — DAM Alert Rule Catalogue

*This appendix documents all active DAM alert rules, thresholds, and associated response runbooks.*

| Rule ID | Rule Name | Trigger Condition | Severity | Response Runbook | Last Reviewed |
|---|---|---|---|---|---|
| DAM-001 | Off-hours DBA access | DBA login between 20:00–07:00 MYT on weekdays, or any time on weekends | High | [Runbook ID / Link] | [Date] |
| DAM-002 | Mass data extraction | Single session SELECT returning >10,000 rows from Confidential tables | High | [Runbook ID / Link] | [Date] |
| DAM-003 | Privilege escalation | GRANT of DBA or SYSDBA role | Critical | [Runbook ID / Link] | [Date] |
| DAM-004 | Audit log tampering | ALTER AUDIT or deletion of audit trail records | Critical | [Runbook ID / Link] | [Date] |
| DAM-005 | Unauthorized source IP | Connection from IP not in approved source list | Critical | [Runbook ID / Link] | [Date] |
| [DAM-NNN] | [Rule name] | [Condition] | [Severity] | [Runbook] | [Date] |

> Alert rule thresholds must be reviewed quarterly by the Information Security Team and adjusted based on operational baselines and false positive analysis.

---

### Appendix G — Glossary of Act 854 Section 18 Obligations

*This appendix maps specific obligations under Cyber Security Act 2024 Section 18 to the relevant controls in this standard, supporting compliance evidence preparation.*

| Obligation Reference | Obligation Description | Relevant Controls in This Standard |
|---|---|---|
| Act 854, s18(1) | NCII entity must comply with security measures specified by NACSA | All sections of this standard |
| Act 854, s18(2) | NCII entity must implement controls to protect NCII systems | Sections 5, 6, 7, 10 |
| Act 854, s18(3) | [As per gazetted directive — insert specific obligation] | [Cross-reference relevant section] |
| [Additional s18 sub-provisions as gazetted] | [Description] | [Cross-reference] |

> **Note:** This appendix must be updated following each review of NACSA directives issued under Act 854 to ensure ongoing alignment. The Compliance Team is responsible for maintaining this mapping.

---

*End of Document*

---

**Document Control**

| Field | Detail |
|---|---|
| File Name | `[OrgCode]-STD-DB-[NNN] Database Security Standard v1.0.md` |
| Storage Location | [Document Management System / Path] |
| Access Control | Restricted — Information Security Team, DBA Team, Internal Audit, CISO |
| Next Mandatory Review | [Next Review Date] |