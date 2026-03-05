# Authentication Logs

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

This document defines the requirements, structure, and governance framework for Authentication Logs maintained across all National Critical Information Infrastructure (NCII) systems operated by [Organization Name]. Authentication Logs serve as the authoritative audit record of all identity verification events and form a foundational control for the detection of unauthorized access, credential abuse, and identity-based threats.

This artifact is mandated under **Section 18 of the Cyber Security Act 2024 (Act 854)**, which imposes obligations on NCII entity operators to maintain adequate records of cybersecurity events to support incident detection, investigation, and regulatory reporting to the National Cyber Security Agency (NACSA).

### 1.2 Scope

This logging framework applies to:

- All authentication events occurring within systems, applications, and infrastructure components designated as NCII assets under [Organization Name]'s NCII asset register
- All user classes, including privileged users, service accounts, third-party vendors, and end users
- All authentication mechanisms including password-based, multi-factor authentication (MFA), certificate-based, token-based, and federated identity methods
- All environments: production, disaster recovery (DR), staging, and any system with access to production data or NCII-classified assets

**Out of Scope:** Development and sandbox environments with no access to production data or NCII systems, unless otherwise designated.

---

## 2. Regulatory and Policy Context

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), s18 | Obligation for NCII entity operators to maintain cybersecurity event logs and make them available to NACSA upon request |
| [Organization Name] Information Security Policy | [Policy Reference Number] |
| [Organization Name] Identity and Access Management Policy | [Policy Reference Number] |
| [Organization Name] NCII Asset Register | [Document Reference] |
| BNM Risk Management in Technology (RMiT) Policy | Where applicable — cross-reference [RMiT Section] |

---

## 3. Authentication Attempts

*Record all authentication attempts across NCII systems, capturing both successful and failed events. Each log entry must be sufficient to reconstruct the sequence of events during an incident investigation.*

### 3.1 Log Schema — Authentication Attempts

| Field | Data Type | Description | Example |
|---|---|---|---|
| `log_id` | UUID | Unique log entry identifier | `a1b2c3d4-...` |
| `timestamp_utc` | ISO 8601 | Date and time of event in UTC | `2026-03-05T08:42:11Z` |
| `timestamp_local` | ISO 8601 | Date and time in MYT (UTC+8) | `2026-03-05T16:42:11+08:00` |
| `event_type` | String | Classification of authentication event | `AUTH_SUCCESS`, `AUTH_FAILURE` |
| `user_id` | String | Internal user identifier | `[User ID]` |
| `username` | String | Username or UPN used for authentication | `[username@domain]` |
| `account_type` | Enum | User, Service Account, Privileged, Vendor | `[Account Type]` |
| `source_ip` | String | IP address of authenticating client | `[IP Address]` |
| `source_hostname` | String | Hostname of authenticating device, if resolvable | `[Hostname]` |
| `target_system` | String | System or application being accessed | `[System Name]` |
| `auth_method` | Enum | Authentication method used | `PASSWORD`, `CERTIFICATE`, `SSO`, `TOKEN` |
| `failure_reason` | String | Reason for failure, if applicable | `INVALID_CREDENTIALS`, `ACCOUNT_LOCKED` |
| `outcome` | Enum | Result of authentication attempt | `SUCCESS`, `FAILURE`, `CHALLENGE` |
| `session_id` | String | Session identifier if authentication succeeded | `[Session ID]` |

### 3.2 Retention Requirements

| Environment | Minimum Retention Period | Storage Location |
|---|---|---|
| Production NCII Systems | 3 years | [Log Repository / SIEM Platform] |
| Privileged Access | 5 years | [Log Repository / SIEM Platform] |
| Archived Logs | Per data retention policy | [Archive Storage Reference] |

---

## 4. MFA Success and Failure Events

*Capture multi-factor authentication outcomes as discrete log events, distinguishing MFA challenges from primary credential verification. MFA failures and bypass attempts must be treated as high-priority security signals.*

### 4.1 MFA Event Log Schema

| Field | Data Type | Description | Example |
|---|---|---|---|
| `mfa_event_id` | UUID | Unique MFA event identifier | `[MFA Event ID]` |
| `parent_auth_event_id` | UUID | Reference to primary authentication log entry | `[Auth Event ID]` |
| `timestamp_utc` | ISO 8601 | Time of MFA challenge/response | `[Timestamp]` |
| `user_id` | String | User subject to MFA | `[User ID]` |
| `mfa_method` | Enum | MFA mechanism used | `TOTP`, `PUSH`, `SMS_OTP`, `HARDWARE_TOKEN`, `BIOMETRIC` |
| `mfa_outcome` | Enum | Result of MFA step | `SUCCESS`, `FAILURE`, `TIMEOUT`, `BYPASS` |
| `device_id` | String | Registered MFA device identifier, if applicable | `[Device ID]` |
| `failure_reason` | String | Reason for MFA failure | `INVALID_OTP`, `TOKEN_EXPIRED`, `PUSH_DENIED` |
| `bypass_method` | String | Method used to bypass MFA, if applicable | `ADMIN_OVERRIDE`, `RECOVERY_CODE` |
| `bypass_authorized_by` | String | Authorizing party for MFA bypass | `[Authorizing Party]` |

### 4.2 MFA Monitoring Thresholds

| Alert Condition | Threshold | Severity |
|---|---|---|
| Consecutive MFA failures — same user | ≥ 3 within 10 minutes | High |
| MFA bypass events | Any occurrence | Critical |
| MFA push acceptance after failure sequence | Any occurrence | High |
| Bulk MFA failures across multiple users | ≥ 10 users within 5 minutes | Critical |

---

## 5. Token and Session Creation

*Log all token issuance and session establishment events to support forensic reconstruction of user activity and to detect token theft, session hijacking, or abnormal session patterns.*

### 5.1 Token/Session Log Schema

| Field | Data Type | Description | Example |
|---|---|---|---|
| `token_event_id` | UUID | Unique token/session event identifier | `[Token Event ID]` |
| `event_type` | Enum | Type of token event | `SESSION_CREATED`, `TOKEN_ISSUED`, `TOKEN_REFRESHED`, `SESSION_TERMINATED`, `TOKEN_REVOKED` |
| `timestamp_utc` | ISO 8601 | Event timestamp in UTC | `[Timestamp]` |
| `user_id` | String | User associated with token/session | `[User ID]` |
| `session_id` | String | Unique session identifier | `[Session ID]` |
| `token_id` | String | Token identifier (JWT `jti` or equivalent) | `[Token ID]` |
| `token_type` | Enum | Token classification | `ACCESS`, `REFRESH`, `API_KEY`, `SERVICE` |
| `issued_at` | ISO 8601 | Token issuance time | `[Timestamp]` |
| `expiry` | ISO 8601 | Token expiry time | `[Timestamp]` |
| `source_ip` | String | IP at time of token issuance | `[IP Address]` |
| `target_resource` | String | Resource or scope for which token was issued | `[Resource / Scope]` |
| `termination_reason` | String | Reason for session/token termination, if applicable | `LOGOUT`, `TIMEOUT`, `ADMIN_REVOCATION`, `SUSPICIOUS_ACTIVITY` |

### 5.2 Session Anomaly Indicators

- Simultaneous active sessions for the same user from geographically distinct locations
- Token refresh requests from a different IP address than the original session
- Sessions remaining active beyond the defined maximum session duration: **[Maximum Session Duration, e.g., 8 hours]**
- API tokens used outside of defined service hours or originating from unexpected IP ranges

---

## 6. Password Changes

*Record all password change and reset events, including self-service, administrator-initiated, and system-forced changes. These events are critical for detecting credential manipulation and unauthorized account takeover activity.*

### 6.1 Password Change Log Schema

| Field | Data Type | Description | Example |
|---|---|---|---|
| `pwd_event_id` | UUID | Unique password event identifier | `[Event ID]` |
| `event_type` | Enum | Type of password event | `PASSWORD_CHANGED`, `PASSWORD_RESET`, `PASSWORD_EXPIRED`, `FORCED_RESET` |
| `timestamp_utc` | ISO 8601 | Time of event | `[Timestamp]` |
| `target_user_id` | String | User whose password was changed | `[User ID]` |
| `initiator_user_id` | String | User who initiated the change (may differ for admin resets) | `[Initiator ID]` |
| `initiator_role` | String | Role of the initiating party | `USER`, `HELPDESK`, `SYSADMIN`, `AUTOMATED` |
| `change_method` | Enum | How the change was triggered | `SELF_SERVICE`, `ADMIN_RESET`, `POLICY_FORCED`, `BREAK_GLASS` |
| `source_ip` | String | IP address from which change was initiated | `[IP Address]` |
| `complexity_met` | Boolean | Whether new password met complexity requirements | `true` / `false` |
| `outcome` | Enum | Result of password change operation | `SUCCESS`, `FAILURE` |
| `failure_reason` | String | Reason for failure, if applicable | `POLICY_VIOLATION`, `HISTORY_REUSE` |

### 6.2 Password Change Monitoring Rules

| Condition | Response |
|---|---|
| Admin-initiated password reset outside business hours | Alert — Security Operations Centre (SOC) review |
| Password change immediately followed by authentication from new IP | Alert — potential account takeover |
| Multiple password changes for same account within 24 hours | Alert — escalate to IAM team |
| Password reset for privileged/service accounts | Mandatory approval workflow validation |

---

## 7. Account Lockout Events

*Capture all account lockout and unlock events to facilitate identification of brute-force attacks, credential stuffing, and unauthorized account manipulation. Lockout events must be correlated with preceding authentication failure sequences.*

### 7.1 Account Lockout Log Schema

| Field | Data Type | Description | Example |
|---|---|---|---|
| `lockout_event_id` | UUID | Unique lockout event identifier | `[Event ID]` |
| `event_type` | Enum | Type of lockout event | `ACCOUNT_LOCKED`, `ACCOUNT_UNLOCKED`, `LOCKOUT_THRESHOLD_REACHED` |
| `timestamp_utc` | ISO 8601 | Time of lockout/unlock | `[Timestamp]` |
| `user_id` | String | Affected user account | `[User ID]` |
| `account_type` | Enum | Account classification | `STANDARD`, `PRIVILEGED`, `SERVICE`, `VENDOR` |
| `trigger_event_count` | Integer | Number of failed attempts that triggered lockout | `[Count]` |
| `lockout_duration_minutes` | Integer | Duration of lockout, if time-based | `[Duration]` |
| `unlock_method` | Enum | How account was unlocked | `AUTO_EXPIRY`, `ADMIN_MANUAL`, `SELF_SERVICE`, `HELPDESK` |
| `unlocked_by` | String | User or system that performed unlock | `[Unlocking Party]` |
| `source_ips_involved` | Array | List of source IPs associated with triggering failures | `["[IP1]", "[IP2]"]` |
| `correlated_incident_id` | String | Linked security incident, if raised | `[Incident ID]` |

### 7.2 Lockout Thresholds (Current Configuration)

| Account Type | Lockout Threshold | Observation Window | Lockout Duration |
|---|---|---|---|
| Standard User | [e.g., 5 failures] | [e.g., 10 minutes] | [e.g., 30 minutes] |
| Privileged User | [e.g., 3 failures] | [e.g., 5 minutes] | [e.g., Until admin review] |
| Service Account | [e.g., 3 failures] | [e.g., 5 minutes] | [e.g., Until admin review] |
| Vendor/Third-Party | [e.g., 3 failures] | [e.g., 5 minutes] | [e.g., Until admin review] |

---

## 8. Impossible Travel Detection

*Log and alert on authentication events where the geographic distance between successive logins is physically impossible within the elapsed time. Impossible travel is a strong indicator of credential compromise, VPN/proxy misuse, or account sharing.*

### 8.1 Impossible Travel Event Log Schema

| Field | Data Type | Description | Example |
|---|---|---|---|
| `travel_alert_id` | UUID | Unique alert identifier | `[Alert ID]` |
| `detection_timestamp_utc` | ISO 8601 | Time alert was generated | `[Timestamp]` |
| `user_id` | String | Affected user | `[User ID]` |
| `event_1_auth_id` | UUID | Reference to first authentication event | `[Auth Event ID]` |
| `event_1_ip` | String | Source IP of first authentication | `[IP Address]` |
| `event_1_geo_location` | String | Resolved geolocation of first authentication | `[City, Country]` |
| `event_1_timestamp_utc` | ISO 8601 | Time of first authentication | `[Timestamp]` |
| `event_2_auth_id` | UUID | Reference to second authentication event | `[Auth Event ID]` |
| `event_2_ip` | String | Source IP of second authentication | `[IP Address]` |
| `event_2_geo_location` | String | Resolved geolocation of second authentication | `[City, Country]` |
| `event_2_timestamp_utc` | ISO 8601 | Time of second authentication | `[Timestamp]` |
| `elapsed_time_minutes` | Integer | Time between the two events | `[Minutes]` |
| `estimated_travel_time_minutes` | Integer | Minimum estimated travel time between locations | `[Minutes]` |
| `risk_score` | Float | Computed risk score (0.0–1.0) | `[Score]` |
| `vpn_proxy_detected` | Boolean | Whether a VPN/proxy/Tor was detected for either event | `true` / `false` |
| `alert_disposition` | Enum | Analyst outcome | `FALSE_POSITIVE`, `CONFIRMED_COMPROMISE`, `PENDING_REVIEW`, `LEGITIMATE_VPN` |
| `analyst_id` | String | Analyst who reviewed the alert | `[Analyst ID]` |
| `correlated_incident_id` | String | Linked security incident, if raised | `[Incident ID]` |

### 8.2 Impossible Travel Detection Configuration

| Parameter | Current Value |
|---|---|
| Detection Engine / SIEM Platform | [Platform Name, e.g., Wazuh / Microsoft Sentinel] |
| Geolocation Data Source | [Provider, e.g., MaxMind GeoIP2] |
| Speed Threshold (km/h above which alert triggers) | [e.g., 900 km/h] |
| Minimum Distance to Trigger (km) | [e.g., 500 km] |
| Known VPN/Proxy Range Exclusion List | [Reference to exclusion list document] |
| Alert Severity Default | High |
| Auto-response Action | [e.g., Force MFA re-challenge / Session termination] |

---

## 9. Log Integrity and Protection

*Describe controls in place to ensure that authentication logs cannot be tampered with, deleted, or altered by any user including administrators. Log integrity is a prerequisite for evidentiary admissibility under regulatory and legal proceedings.*

### 9.1 Integrity Controls

| Control | Implementation | Owner |
|---|---|---|
| Log forwarding to centralised SIEM | Real-time syslog/API forwarding | [SOC / Platform Team] |
| Log immutability (WORM storage) | [Storage Technology / Policy Reference] | [Infrastructure Team] |
| Cryptographic log signing / hash chaining | [Technology / Tool Used] | [Platform Security Team] |
| Access controls on log repositories | Role-based access — read-only for analysts | [IAM Team] |
| Log completeness monitoring | Alert on log source gaps > [e.g., 5 minutes] | [SOC Team] |
| Regular log integrity audits | [Frequency, e.g., Monthly] | [Internal Audit / IAM Team] |

### 9.2 Log Transmission Security

- Logs must be transmitted over encrypted channels (TLS 1.2 minimum, TLS 1.3 preferred)
- Log sources must authenticate to the SIEM/log aggregation platform using [authentication method, e.g., mutual TLS / API key]
- Transmission failures must generate an alert within **[Alert Threshold, e.g., 15 minutes]** of detection

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for authentication log management activities.*

| Activity | Identity & Access Management | Security Operations Centre (SOC) | IT Infrastructure | Internal Audit | CISO / Deputy CISO | Compliance |
|---|---|---|---|---|---|---|
| Define log schema and requirements | **A/R** | C | C | I | A | I |
| Configure log sources and forwarding | I | C | **R** | I | I | I |
| Monitor authentication logs (real-time) | I | **R** | I | I | I | I |
| Investigate authentication anomalies | C | **R** | C | I | I | I |
| Manage MFA platform and policies | **R** | C | C | I | A | I |
| Review and tune detection rules | C | **R** | I | I | A | I |
| Perform periodic log integrity audits | I | C | I | **R** | A | C |
| Respond to impossible travel alerts | C | **R** | I | I | I | I |
| Produce authentication log reports for NACSA | **R** | C | I | I | A | **R** |
| Review and approve this document | C | C | I | C | **A** | C |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 11. Escalation and Incident Response

*Define the escalation path when authentication log analysis reveals indicators of compromise or policy violation.*

| Severity | Trigger Condition | Initial Response | Escalation Path | Target Response Time |
|---|---|---|---|---|
| **Critical** | MFA bypass event; Confirmed impossible travel compromise; Privileged account lockout under active attack | Immediate session termination; Account suspension | SOC → CISO → Incident Response Team | 15 minutes |
| **High** | Repeated MFA failures (≥3 in 10 min); Impossible travel alert; Admin-initiated password reset anomaly | Force MFA re-challenge; Alert analyst | SOC → IAM Team → CISO notification | 1 hour |
| **Medium** | Standard user lockout from distributed IPs; Unusual token refresh patterns | Analyst review; Corroborate with endpoint logs | SOC → IAM Team | 4 hours |
| **Low** | Single authentication failure; Routine self-service password change | Log and monitor | SOC queue for daily review | Next business day |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial release |
| [1.1] | [Date] | [Author Name], [Title] | [Description of Change] |

### 12.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Identity & Access Management | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Head of Compliance | [Name] | [Signature] | [Date] |
| Chief Information Officer (CIO) / [Equivalent] | [Name] | [Signature] | [Date] |

---

## 13. References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), **Section 18** | Mandatory cybersecurity event logging obligations for NCII entity operators; requirement to maintain and produce logs to NACSA upon request |
| National Cyber Security Agency (NACSA) Guidelines | [Reference NACSA-issued guidelines or circulars applicable to NCII operators] |
| [Organization Name] Information Security Policy | [Document Reference] |
| [Organization Name] Identity and Access Management Policy | [Document Reference] |
| [Organization Name] Incident Response Procedure | [Document Reference] |
| [Organization Name] NCII Asset Register | [Document Reference] |
| NIST SP 800-92 — Guide to Computer Security Log Management | Technical reference for log management best practices |
| MITRE ATT&CK — Credential Access (TA0006) | Threat model informing authentication log detection use cases |

---

## Appendices

### Appendix A — Authentication Event Type Reference

*Complete enumeration of all recognized authentication event type codes used in log schema fields across this document.*

| Event Code | Category | Description |
|---|---|---|
| `AUTH_SUCCESS` | Authentication | Primary credential verification succeeded |
| `AUTH_FAILURE` | Authentication | Primary credential verification failed |
| `MFA_SUCCESS` | MFA | Multi-factor authentication step succeeded |
| `MFA_FAILURE` | MFA | Multi-factor authentication step failed |
| `MFA_BYPASS` | MFA | MFA step was bypassed via authorized or unauthorized method |
| `SESSION_CREATED` | Session | New user session established |
| `SESSION_TERMINATED` | Session | Session ended by user, admin, or system |
| `TOKEN_ISSUED` | Token | Access or refresh token issued |
| `TOKEN_REVOKED` | Token | Token revoked before natural expiry |
| `PASSWORD_CHANGED` | Credential | User-initiated password change |
| `PASSWORD_RESET` | Credential | Admin or system-initiated password reset |
| `ACCOUNT_LOCKED` | Account | Account locked due to policy threshold |
| `ACCOUNT_UNLOCKED` | Account | Account unlocked by admin, helpdesk, or auto-expiry |
| `IMPOSSIBLE_TRAVEL` | Anomaly | Successive logins detected from geographically implausible locations |
| `[Add as required]` | [Category] | [Description] |

---

### Appendix B — Log Source Inventory

*Enumerate all systems and platforms that are configured as authentication log sources feeding into the central SIEM/log repository. This inventory must be kept current and reconciled quarterly.*

| System Name | System Type | Log Source Type | Log Format | Forwarding Method | Status |
|---|---|---|---|---|---|
| [System Name] | [e.g., Directory Service, Web Application, VPN] | [e.g., Windows Event Log, Syslog, API] | [e.g., CEF, JSON, W3C] | [e.g., Syslog/TLS, Beats Agent] | [Active / Pending / Decommissioned] |
| [System Name] | | | | | |

---

### Appendix C — NACSA Reporting Template

*In the event that NACSA requests authentication logs under Section 18 of the Cyber Security Act 2024, the following information must be prepared and provided within the timeframe stipulated in the request.*

- **Requested Date Range:** [From Date] to [To Date]
- **Systems in Scope:** [List of NCII Systems]
- **Log Format for Submission:** [Format, e.g., JSON / CSV / Native SIEM Export]
- **Authorising Officer:** [Name and Title]
- **Date of Submission:** [Date]
- **Reference Number (NACSA):** [Reference]
- **Handling Instructions:** All logs submitted to NACSA must be treated as **Confidential** and transmitted via [approved secure channel, e.g., encrypted email / secure file transfer portal]

---

*This document is classified **Confidential**. Unauthorised disclosure is prohibited. For queries, contact the Identity & Access Management team at [IAM Contact / Distribution List].*