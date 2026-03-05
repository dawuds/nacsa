# Access Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Identity & Access Management |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the requirements, structure, and governance for Access Logs maintained by [Organization Name] in its capacity as a National Critical Information Infrastructure (NCII) entity. Access Logs record all access attempts — both successful and failed — to NCII systems, and serve as a primary evidentiary source for security monitoring, incident investigation, and regulatory compliance demonstration.

This template is maintained in accordance with:

- **Cyber Security Act 2024 (Act 854)**, Section 18 — which imposes obligations on NCII Sector Leads and NCII entities to implement and maintain cybersecurity measures, including audit logging, access controls, and incident detection capabilities.
- **National Cyber Security Policy (NCSP)** and associated NACSA directives applicable to NCII entities.
- Internal information security policies of [Organization Name].

### 1.2 Scope

This log standard applies to:

- All information systems, applications, and infrastructure components designated as NCII assets under [Organization Name]'s NCII asset register.
- All user accounts — including privileged accounts, service accounts, and third-party/vendor accounts — with access to in-scope systems.
- All access channels: direct console access, network-based access, remote access, API-based access, and federated/SSO authentication flows.
- All environments: production, disaster recovery, and staging environments holding NCII-classified data or functions.

*Out of scope: Development and test environments that do not process live NCII data, unless otherwise specified in the asset register.*

---

## 2. Regulatory and Policy References

| Reference | Clause / Section | Requirement Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities must implement cybersecurity measures as directed; access logging supports detection, response, and audit obligations |
| Cyber Security Act 2024 (Act 854) | Section 18(2) | Compliance with NACSA directives and codes of practice issued to NCII entities |
| NACSA NCII Sector Code of Practice | [Applicable Code Reference] | Specific technical controls for access monitoring and log retention |
| [Organization Name] Information Security Policy | [Policy Reference] | Internal access control and audit logging requirements |
| [Organization Name] Data Classification Policy | [Policy Reference] | Handling and protection of Confidential log data |

---

## 3. Login and Logout Events

*This section captures the core access event data. Every authentication session initiation and termination must be recorded with sufficient detail to reconstruct user activity for incident investigation or audit purposes.*

### 3.1 Log Fields — Login Events

| Field Name | Data Type | Description | Example Value |
|---|---|---|---|
| `event_id` | String (UUID) | Unique identifier for the log event | `a1b2c3d4-...` |
| `event_type` | Enum | Type of event | `LOGIN_SUCCESS` / `LOGIN_FAILURE` |
| `timestamp_utc` | DateTime (ISO 8601) | Date and time of the event in UTC | `2025-06-01T08:23:11Z` |
| `timestamp_local` | DateTime | Date and time in Malaysia Standard Time (UTC+8) | `2025-06-01T16:23:11+08:00` |
| `username` | String | Username or account identifier | `[Username]` |
| `user_id` | String | Unique internal user or account ID | `[User ID]` |
| `account_type` | Enum | Type of account | `Standard` / `Privileged` / `Service` / `Vendor` |
| `system_name` | String | Name or hostname of the target system | `[System Name]` |
| `application_name` | String | Name of the application accessed | `[Application Name]` |
| `asset_id` | String | NCII Asset Register reference | `[Asset ID]` |
| `session_id` | String | Unique session identifier | `[Session ID]` |
| `result` | Enum | Outcome of the login attempt | `SUCCESS` / `FAILURE` |
| `failure_reason` | String | Reason for failure (if applicable) | `Invalid credentials` / `Account locked` |

### 3.2 Log Fields — Logout Events

| Field Name | Data Type | Description | Example Value |
|---|---|---|---|
| `event_id` | String (UUID) | Unique identifier for the log event | `[Event ID]` |
| `event_type` | Enum | Type of event | `LOGOUT` / `SESSION_TIMEOUT` / `FORCED_LOGOUT` |
| `timestamp_utc` | DateTime (ISO 8601) | Date and time of logout in UTC | `[Timestamp]` |
| `username` | String | Username or account identifier | `[Username]` |
| `session_id` | String | Session identifier (links to login event) | `[Session ID]` |
| `session_duration_seconds` | Integer | Total duration of the session | `[Duration]` |
| `system_name` | String | System from which the user logged out | `[System Name]` |
| `logout_initiated_by` | Enum | Who or what initiated logout | `User` / `System` / `Administrator` |

---

## 4. Authentication Method Used

*Each access event must capture the authentication mechanism employed. This enables detection of policy violations (e.g., password-only access to privileged systems) and supports MFA compliance verification.*

### 4.1 Authentication Method Log Fields

| Field Name | Data Type | Description | Example Value |
|---|---|---|---|
| `auth_method` | Enum | Primary authentication method used | `Password` / `MFA` / `Certificate` / `SSO` / `Biometric` / `Token` |
| `mfa_factor` | Enum | Second factor type (if MFA used) | `TOTP` / `SMS_OTP` / `Hardware Token` / `Push Notification` |
| `mfa_result` | Enum | Outcome of MFA challenge | `PASSED` / `FAILED` / `BYPASSED` / `NOT_REQUIRED` |
| `auth_protocol` | String | Authentication protocol | `SAML 2.0` / `OAuth 2.0` / `LDAP` / `RADIUS` / `Kerberos` |
| `identity_provider` | String | Identity provider used | `[IdP Name]` / `Local` |
| `credential_type` | Enum | Nature of credential presented | `Username-Password` / `PKI Certificate` / `API Key` |
| `privileged_access_justification` | String | Reason for privileged access (where applicable) | `[Justification Text]` |

### 4.2 MFA Compliance Summary

*The following table should be populated during daily review to track MFA adoption and exceptions across NCII systems.*

| System | MFA Enforced (Y/N) | Exceptions Granted | Exception Approved By | Expiry Date |
|---|---|---|---|---|
| [System Name] | [Y/N] | [Count] | [Approver] | [Date] |

---

## 5. Source IP and Location

*Capturing source network information enables detection of anomalous access patterns such as logins from unexpected geographies, unauthorized internal subnets, or known malicious IP ranges.*

### 5.1 Source Network Log Fields

| Field Name | Data Type | Description | Example Value |
|---|---|---|---|
| `source_ip_address` | String (IPv4/IPv6) | IP address of the connecting client | `[IP Address]` |
| `source_ip_type` | Enum | Classification of source IP | `Internal` / `VPN` / `External` / `Cloud NAT` |
| `source_hostname` | String | Resolved hostname of the source (if applicable) | `[Hostname]` |
| `source_country` | String | Geo-IP resolved country | `Malaysia` / `[Country Name]` |
| `source_city` | String | Geo-IP resolved city | `[City Name]` |
| `source_asn` | String | Autonomous System Number of source | `[ASN]` |
| `vpn_gateway` | String | VPN gateway used (if applicable) | `[VPN Gateway Name]` |
| `access_channel` | Enum | Channel through which access occurred | `Internal LAN` / `VPN` / `Internet` / `Dedicated Line` |
| `device_id` | String | Registered device identifier (if managed) | `[Device ID]` |
| `user_agent` | String | Browser or client user-agent string | `[User Agent]` |

### 5.2 Geo-Anomaly Flags

*The following indicators must be evaluated automatically by the SIEM or log analysis platform and flagged for daily review:*

- [ ] Access from countries outside [Organization Name]'s approved country list
- [ ] Simultaneous logins from geographically distant locations ("impossible travel")
- [ ] Access from IP addresses listed on threat intelligence blocklists
- [ ] Access from Tor exit nodes or anonymizing proxies
- [ ] Access from non-managed or unregistered devices

---

## 6. Failed Access Attempts

*Repeated failed access attempts are a primary indicator of brute-force attacks, credential stuffing, or insider threat activity. This section defines logging requirements and alert thresholds for failed authentication events.*

### 6.1 Failed Attempt Log Fields

| Field Name | Data Type | Description | Example Value |
|---|---|---|---|
| `event_type` | Enum | Specific failure type | `INVALID_PASSWORD` / `INVALID_USERNAME` / `EXPIRED_CREDENTIAL` / `MFA_FAILURE` |
| `failure_count_rolling` | Integer | Rolling count of failures for this account within the threshold window | `[Count]` |
| `threshold_window_minutes` | Integer | Time window for failure count evaluation | `[Minutes]` |
| `alert_triggered` | Boolean | Whether an alert was raised | `true` / `false` |
| `alert_id` | String | Reference to associated SIEM alert (if any) | `[Alert ID]` |
| `lockout_triggered` | Boolean | Whether an account lockout was initiated | `true` / `false` |

### 6.2 Failed Attempt Thresholds

*The following thresholds are configured in [Organization Name]'s Identity Provider / Access Management Platform. Adjustments require Change Advisory Board (CAB) approval.*

| Account Type | Failure Threshold | Window | Action Triggered |
|---|---|---|---|
| Standard User | [e.g., 5] | [e.g., 15 minutes] | Account lockout + alert |
| Privileged User | [e.g., 3] | [e.g., 10 minutes] | Immediate lockout + SOC notification |
| Service Account | [e.g., 3] | [e.g., 5 minutes] | Alert + automatic key rotation trigger |
| Vendor / Third Party | [e.g., 3] | [e.g., 10 minutes] | Lockout + vendor notification |

### 6.3 Daily Failed Attempt Summary

*To be reviewed by the IAM team each business day. Anomalies must be escalated to the Security Operations Centre (SOC).*

| Date | System | Account | Failure Count | Source IP | Action Taken | Reviewed By |
|---|---|---|---|---|---|---|
| [Date] | [System] | [Account] | [Count] | [IP] | [Action] | [Reviewer] |

---

## 7. Account Lockouts

*Account lockout events must be logged in full to support both security incident investigation and operational troubleshooting. All lockouts on privileged accounts require mandatory review.*

### 7.1 Account Lockout Log Fields

| Field Name | Data Type | Description | Example Value |
|---|---|---|---|
| `event_type` | Enum | Lockout event classification | `AUTO_LOCKOUT` / `ADMIN_LOCKOUT` / `POLICY_LOCKOUT` |
| `lockout_reason` | String | Reason triggering the lockout | `Exceeded failed login threshold` / `Administrator initiated` |
| `locked_by` | String | System or administrator that initiated lockout | `[System/Admin Name]` |
| `lockout_timestamp_utc` | DateTime | Time at which lockout was applied | `[Timestamp]` |
| `unlock_timestamp_utc` | DateTime | Time at which account was unlocked (if applicable) | `[Timestamp]` |
| `unlock_method` | Enum | How the account was unlocked | `Auto-Unlock (Timer)` / `Admin Unlock` / `Self-Service Reset` |
| `unlocked_by` | String | Administrator or system that performed unlock | `[Name/System]` |
| `incident_raised` | Boolean | Whether a security incident was raised | `true` / `false` |
| `incident_id` | String | Reference to incident record | `[Incident ID]` |

### 7.2 Lockout Review Register

| Date | Account | Account Type | Lockout Reason | Duration | Unlocked By | Incident Raised | Reviewed By |
|---|---|---|---|---|---|---|---|
| [Date] | [Account] | [Type] | [Reason] | [Duration] | [Name] | [Y/N] | [Reviewer] |

---

## 8. Log Retention

*Log retention must comply with the minimum period mandated by Act 854 and NACSA directives. Retention schedules must be enforced through automated log management platform policies and verified through periodic audits.*

### 8.1 Retention Requirements

| Log Type | Minimum Retention Period | Regulatory Basis | Storage Tier | Deletion Authorisation Required |
|---|---|---|---|---|
| Access Logs (all events) | 12 months (online/accessible) | Cyber Security Act 2024 (Act 854), s18; NACSA Directive | Hot / Warm | Yes — IAM Manager + CISO |
| Access Logs (archived) | [24 months recommended] | [Internal Policy Reference] | Cold Archive | Yes — CISO + Legal |
| Privileged Access Logs | [24 months minimum recommended] | [Internal Policy / Regulatory Guidance] | Warm / Cold | Yes — CISO |
| Security Incident–Related Logs | Until incident closure + [36 months] | Internal Incident Management Policy | Legal Hold | Yes — Legal + CISO |

### 8.2 Retention Compliance Controls

- Logs must be stored in an immutable, tamper-evident format (e.g., WORM storage, cryptographic hash chaining).
- Log integrity verification must be performed [monthly / quarterly] and results documented in the Log Integrity Verification Register ([Reference Document]).
- Log deletion must be authorised via a formal request reviewed and approved by at least two of: IAM Manager, CISO, and Legal Counsel.
- Automated retention enforcement must be configured in [Log Management Platform Name] with policy reference [Policy ID].
- Backup copies of logs must be stored in a geographically separate location: [Backup Location].

### 8.3 Log Integrity Verification Register

| Verification Date | Log Period Verified | Verification Method | Integrity Status | Performed By | Reviewed By |
|---|---|---|---|---|---|
| [Date] | [Period] | [Hash Check / Signature Verification] | [Pass/Fail] | [Name] | [Name] |

---

## 9. Daily Review Procedure

*Access Logs are subject to continuous automated monitoring and mandatory daily manual review. This section defines the minimum review activities required to meet Act 854 obligations.*

### 9.1 Daily Review Checklist

*To be completed by the IAM Analyst each business day, with findings recorded below.*

| # | Review Item | Status | Findings | Escalated To | Notes |
|---|---|---|---|---|---|
| 1 | Review all failed login events exceeding threshold | [Complete/Pending] | [Findings] | [Name/SOC] | |
| 2 | Review all account lockout events | [Complete/Pending] | [Findings] | [Name/SOC] | |
| 3 | Review privileged account access events | [Complete/Pending] | [Findings] | [Name/SOC] | |
| 4 | Review access from external/VPN sources | [Complete/Pending] | [Findings] | [Name/SOC] | |
| 5 | Review geo-anomaly and impossible travel flags | [Complete/Pending] | [Findings] | [Name/SOC] | |
| 6 | Review after-hours access events | [Complete/Pending] | [Findings] | [Name/SOC] | |
| 7 | Review service and vendor account activity | [Complete/Pending] | [Findings] | [Name/SOC] | |
| 8 | Confirm log ingestion pipeline health (no gaps) | [Complete/Pending] | [Findings] | [Platform Team] | |
| 9 | Confirm SIEM alert queue cleared or triaged | [Complete/Pending] | [Findings] | [SOC Lead] | |

### 9.2 Escalation Path

| Severity | Trigger | Escalate To | Response Time |
|---|---|---|---|
| Critical | Confirmed unauthorised access to NCII system | SOC Lead → CISO → Incident Response Team | Immediate |
| High | Multiple failed logins on privileged account; geo-anomaly confirmed | SOC Lead → IAM Manager | Within 1 hour |
| Medium | Elevated failed logins on standard accounts; unusual access times | IAM Analyst → IAM Manager | Within 4 hours |
| Low | Single anomalous event; no confirmed threat | IAM Analyst documents and monitors | Within 1 business day |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for Access Log management activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | IAM Manager | IAM Analyst | SOC Lead | System Owner | Internal Audit | NACSA |
|---|---|---|---|---|---|---|---|
| Define access logging policy and standards | A | R | C | C | I | C | I |
| Configure logging on NCII systems | I | A | R | C | R | I | — |
| Monitor logs (automated — SIEM) | I | A | R | R | I | I | — |
| Perform daily manual log review | I | A | R | C | I | I | — |
| Investigate flagged anomalies | A | C | R | R | C | I | — |
| Escalate confirmed incidents | A | I | R | R | I | I | I |
| Manage log retention and archiving | A | R | R | I | I | C | — |
| Conduct log integrity verification | A | R | R | I | I | R | — |
| Report to NACSA (incident/regulatory) | R | C | I | C | I | I | A |
| Annual review of this log standard | A | R | C | C | C | C | I |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial document creation |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |

### 11.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| IAM Manager | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Information Officer (CIO) / Head of IT | [Name] | [Signature] | [Date] |
| Internal Audit Representative | [Name] | [Signature] | [Date] |

---

## 12. References

| # | Document / Regulation | Section / Clause | Description |
|---|---|---|---|
| 1 | Cyber Security Act 2024 (Act 854) | Section 18 | Obligations of NCII entities to implement cybersecurity measures including access logging and monitoring |
| 2 | Cyber Security Act 2024 (Act 854) | Section 18(2) | Duty to comply with NACSA codes of practice and directives issued to NCII Sector Leads and entities |
| 3 | NACSA NCII Sector Code of Practice | [Code Reference] | Technical requirements for access control, audit logging, and log retention applicable to the relevant NCII sector |
| 4 | [Organization Name] Information Security Policy | [Policy ID / Section] | Organisational access control and audit logging requirements |
| 5 | [Organization Name] Incident Response Policy | [Policy ID / Section] | Procedures for escalation and response to security events identified through access log review |
| 6 | [Organization Name] Data Classification Policy | [Policy ID / Section] | Classification and handling requirements for Confidential log data |
| 7 | NIST SP 800-92 | — | Guide to Computer Security Log Management (reference standard for log management best practice) |

---

## Appendices

### Appendix A — NCII System Access Log Inventory

*List all in-scope NCII systems for which access logs are being collected. This inventory should be maintained in alignment with the organisation's NCII Asset Register.*

| System ID | System Name | Asset Owner | Log Source Type | SIEM Integrated (Y/N) | Logging Verified Date |
|---|---|---|---|---|---|
| [Asset ID] | [System Name] | [Owner Name] | [Syslog / API / Agent] | [Y/N] | [Date] |

---

### Appendix B — Log Format Specifications

*Document the specific log formats accepted from each system type. Standardising log format improves SIEM parsing accuracy and reduces alert fatigue.*

| System / Platform | Log Format | Log Transport Protocol | Log Schema Reference |
|---|---|---|---|
| [System Name] | [CEF / JSON / Syslog RFC 5424] | [UDP Syslog / TLS Syslog / API] | [Schema Document Reference] |

---

### Appendix C — SIEM Alert Rules Register

*Reference the SIEM correlation rules that process Access Log events. Rules must be reviewed annually or after any significant change to the environment.*

| Rule ID | Rule Name | Trigger Condition | Severity | Last Reviewed | Reviewed By |
|---|---|---|---|---|---|
| [Rule ID] | [e.g., Brute Force Detection] | [e.g., ≥5 failed logins in 15 min] | [Critical/High/Medium/Low] | [Date] | [Name] |

---

### Appendix D — Regulatory Reporting Obligations

*In the event that access log analysis identifies a cybersecurity incident affecting NCII systems, the following reporting obligations under Act 854 apply.*

| Obligation | Regulatory Body | Timeframe | Reporting Channel | Reference |
|---|---|---|---|---|
| Notify NACSA of cybersecurity incident affecting NCII | NACSA | As prescribed by NACSA directive / [within X hours] | [NACSA Incident Portal / Designated Contact] | Act 854, s18; NACSA Directive |
| Internal incident escalation | CISO / Senior Management | Immediate upon confirmation | Incident Management System | Internal Incident Response Policy |
| Post-incident report submission | NACSA | [As prescribed] | [NACSA Portal] | Act 854; NACSA Directive |

---

*This document is classified **Confidential**. It must be stored, transmitted, and disposed of in accordance with [Organization Name]'s Data Classification Policy. Unauthorised disclosure is prohibited.*

*Document ID: [Document ID] | Version: 1.0 | Owner: Identity & Access Management | [Organization Name]*