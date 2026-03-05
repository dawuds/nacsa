# Email Gateway Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Messaging / Security |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the logging framework and evidence record for all email security gateway events within [Organization Name]. It defines the structure, retention requirements, and review obligations for email gateway logs maintained in compliance with the **Cyber Security Act 2024 (Act 854)**, with specific reference to **Section 18**, which mandates that designated National Critical Information Infrastructure (NCII) entities implement, maintain, and monitor security controls proportionate to identified cyber risks.

Email gateway logs serve as a primary evidentiary record for detecting, investigating, and reporting email-borne threats, data exfiltration attempts, and policy violations. These logs support incident response, forensic investigations, regulatory reporting obligations to NACSA, and continuous security monitoring.

### 1.2 Scope

This logging framework applies to:

- All inbound and outbound email traffic traversing [Organization Name]'s email security gateway infrastructure
- All email domains and mail exchange (MX) records owned or operated by [Organization Name]
- All email accounts provisioned under corporate domains, including shared mailboxes, distribution lists, and service accounts
- Third-party managed email security services contracted on behalf of [Organization Name]
- All personnel, contractors, and third parties using [Organization Name] email systems

### 1.3 Regulatory Context

| Instrument | Section / Clause | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities must implement prescribed security measures and maintain records demonstrating compliance |
| Cyber Security Act 2024 (Act 854) | Section 18(2) | Obligation to report cyber security incidents to NACSA within prescribed timescales |
| NACSA NCII Sector Guidelines | [Applicable Sector Guideline] | Sector-specific technical controls for email security |
| Personal Data Protection Act 2010 (Act 709) | Section 9, Section 10 | Security principle for personal data transmitted via email |
| Bank Negara Malaysia — Risk Management in Technology (RMiT) | 10.55 – 10.61 | Email security controls for financial institutions (where applicable) |

---

## 2. Log Infrastructure Overview

*Provide a concise description of the email gateway platform(s) generating these logs. Include system names, vendors, and integration points with SIEM or log management platforms.*

### 2.1 Gateway Platform Details

| Field | Details |
|---|---|
| **Primary Gateway Solution** | [Vendor / Product Name, e.g., Microsoft Defender for Office 365 / Proofpoint / Mimecast] |
| **Version / Build** | [Version] |
| **Deployment Model** | [Cloud-hosted / On-premises / Hybrid] |
| **Managed By** | [Internal Team / Managed Security Service Provider] |
| **Log Forwarding Target** | [SIEM Platform, e.g., Microsoft Sentinel / Splunk / Wazuh] |
| **Log Retention Period** | [Minimum 3 years — or as prescribed by NACSA directive] |
| **Log Integrity Controls** | [Immutable storage / Hash verification / Timestamp signing] |

### 2.2 Log Collection Architecture

*Describe how logs flow from the email gateway to centralised log management. Include any aggregation, normalisation, or forwarding agents in use.*

- **Log Format:** [CEF / JSON / Syslog / Native vendor format]
- **Forwarding Protocol:** [Syslog-TLS / HTTPS / API]
- **Polling / Streaming Interval:** [Real-time / Every [X] minutes]
- **Time Synchronisation:** [NTP Server — all gateway nodes synchronised to [NTP Source]]
- **Time Zone:** [UTC+8 / Malaysia Standard Time]

---

## 3. Inbound and Outbound Email Events

*This section records the core email transaction log data capturing all message delivery attempts, routing decisions, and disposition outcomes for both inbound and outbound mail flows.*

### 3.1 Log Fields — Core Email Transaction

| Field Name | Description | Example Value |
|---|---|---|
| `timestamp` | Date and time of event (ISO 8601) | `2025-01-15T08:32:11+08:00` |
| `message_id` | Unique message identifier | `<abc123@mail.example.com>` |
| `sender_address` | Envelope sender (MAIL FROM) | `sender@external.com` |
| `recipient_address` | Envelope recipient (RCPT TO) | `staff@[organization].com.my` |
| `subject` | Email subject line | `[Redacted for log record]` |
| `source_ip` | Sending mail server IP address | `203.0.113.45` |
| `source_hostname` | Reverse DNS of sending server | `mail.external.com` |
| `direction` | Mail flow direction | `Inbound` / `Outbound` |
| `disposition` | Final action taken | `Delivered` / `Quarantined` / `Rejected` / `Dropped` |
| `message_size_bytes` | Total message size | `245120` |
| `attachment_count` | Number of file attachments | `2` |
| `policy_matched` | Gateway policy rule triggered | `[Policy Name]` |
| `threat_category` | Detected threat classification | `Spam` / `Phishing` / `Malware` / `Clean` |

### 3.2 Daily Summary — Email Volume

*Record the daily aggregate counts for operational awareness and anomaly detection baselining.*

| Date | Inbound Received | Inbound Delivered | Inbound Blocked | Outbound Sent | Outbound Blocked | Total Processed |
|---|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Count] | [Count] | [Count] | [Count] | [Count] | [Count] |
| [YYYY-MM-DD] | [Count] | [Count] | [Count] | [Count] | [Count] | [Count] |

---

## 4. Spam and Phishing Detections

*This section captures all events where the email gateway classified messages as spam or phishing, including the detection method, confidence score, and action taken. This record supports NACSA Section 18 obligations to demonstrate active threat monitoring.*

### 4.1 Detection Log Fields

| Field Name | Description | Example Value |
|---|---|---|
| `detection_timestamp` | Time of threat classification | `2025-01-15T08:32:14+08:00` |
| `message_id` | Reference to core transaction log | `<abc123@mail.example.com>` |
| `threat_type` | Classification result | `Spam` / `Phishing` / `Spear-Phishing` / `BEC` |
| `confidence_score` | Engine confidence (0–100) | `97` |
| `detection_engine` | Engine or rule set that triggered | `[Vendor Engine Name]` |
| `url_count` | Number of URLs in message | `3` |
| `malicious_url_detected` | Whether a malicious URL was found | `Yes` / `No` |
| `malicious_url` | Detected malicious URL (if applicable) | `http://[redacted]` |
| `impersonated_brand` | Brand or domain being spoofed | `Maybank` / `LHDN` / `NACSA` |
| `action_taken` | Gateway disposition | `Quarantined` / `Rejected` / `Delivered to Junk` |
| `user_reported` | Whether end-user reported the email | `Yes` / `No` |

### 4.2 Phishing Incident Summary

*Populate this table for any phishing campaign detected affecting [Organization Name] users during the review period.*

| Incident Ref | Date Detected | Campaign Type | Impersonated Entity | Recipients Targeted | Recipients Compromised | Status |
|---|---|---|---|---|---|---|
| [INC-YYYY-XXX] | [Date] | [Phishing / BEC / Whaling] | [Entity Name] | [Count] | [Count] | [Contained / Under Investigation / Escalated to NACSA] |

---

## 5. Malware Attachment Blocks

*This section records all instances where the email gateway detected and blocked malicious file attachments, including sandbox detonation results and file hash references for threat intelligence correlation.*

### 5.1 Malware Detection Log Fields

| Field Name | Description | Example Value |
|---|---|---|
| `detection_timestamp` | Time malware was detected | `2025-01-15T09:15:02+08:00` |
| `message_id` | Reference to core transaction log | `<def456@mail.external.com>` |
| `filename` | Attachment filename | `invoice_jan2025.exe` |
| `file_type` | Actual file type (MIME) | `application/x-msdownload` |
| `file_size_bytes` | Attachment file size | `512000` |
| `sha256_hash` | SHA-256 hash of attachment | `[Hash Value]` |
| `md5_hash` | MD5 hash of attachment | `[Hash Value]` |
| `malware_family` | Identified malware classification | `Emotet` / `AgentTesla` / `Unknown` |
| `detection_method` | How malware was detected | `Signature` / `Sandbox` / `Machine Learning` |
| `sandbox_verdict` | Sandbox analysis result | `Malicious` / `Suspicious` / `Clean` |
| `sandbox_report_url` | Link to full sandbox report | `[Internal Threat Intelligence Platform URL]` |
| `action_taken` | Gateway action | `Stripped and Quarantined` / `Message Rejected` |
| `ioc_submitted` | Whether IOC was submitted to threat intel platform | `Yes` / `No` |

### 5.2 Malware Block Summary

| Date | Files Scanned | Malware Detected | Malware Blocked | Threat Families Identified | IOCs Submitted |
|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Count] | [Count] | [Count] | [List] | [Count] |

---

## 6. DLP Policy Triggers

*This section records all Data Loss Prevention (DLP) policy violations detected on outbound or internal email flows. These records are critical evidence for PDPA compliance and support NACSA obligations regarding the protection of sensitive NCII-related information.*

### 6.1 DLP Detection Log Fields

| Field Name | Description | Example Value |
|---|---|---|
| `event_timestamp` | Time of DLP policy trigger | `2025-01-15T11:42:30+08:00` |
| `message_id` | Reference to core transaction log | `<ghi789@[organization].com.my>` |
| `sender_address` | Internal sender email address | `staff@[organization].com.my` |
| `recipient_address` | Destination address | `external@[domain].com` |
| `direction` | Mail flow direction | `Outbound` / `Internal` |
| `dlp_policy_name` | Policy rule that was triggered | `[e.g., PII — Malaysian IC Number] / [e.g., NCII Data Classification]` |
| `data_classification` | Sensitivity classification of content | `Confidential` / `Restricted` / `Internal` |
| `sensitive_data_type` | Type of sensitive data detected | `NRIC` / `Credit Card` / `Account Number` / `Regulatory Report` |
| `match_count` | Number of sensitive data instances | `3` |
| `attachment_involved` | Whether attachment triggered DLP | `Yes` / `No` |
| `action_taken` | Gateway disposition | `Blocked` / `Quarantined` / `Encrypted and Delivered` / `Manager Notified` |
| `justification_provided` | Whether sender provided business justification | `Yes` / `No` / `Pending` |
| `reviewed_by` | Security analyst who reviewed event | `[Analyst Name / ID]` |
| `final_disposition` | Post-review outcome | `False Positive — Released` / `Confirmed — Blocked` / `Escalated` |

### 6.2 DLP Incident Summary

| Date | Policy Triggers | Confirmed Violations | False Positives | Escalated to Privacy Officer | Status |
|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Count] | [Count] | [Count] | [Count] | [Review Complete / Pending] |

---

## 7. SPF / DKIM / DMARC Failures

*This section records authentication failures for inbound email, providing evidence of domain spoofing attempts and the effectiveness of email authentication controls. Persistent failures may indicate active impersonation campaigns targeting [Organization Name] or its counterparties.*

### 7.1 Authentication Failure Log Fields

| Field Name | Description | Example Value |
|---|---|---|
| `event_timestamp` | Time of authentication check | `2025-01-15T10:05:55+08:00` |
| `message_id` | Reference to core transaction log | `<jkl012@mail.spoofed.com>` |
| `sender_address` | Claimed sender address | `noreply@[organization].com.my` |
| `source_ip` | Actual sending server IP | `198.51.100.22` |
| `source_hostname` | Reverse DNS of sending server | `mail.unauthorised.com` |
| `spf_result` | SPF check result | `Pass` / `Fail` / `SoftFail` / `Neutral` / `None` |
| `spf_domain` | Domain checked against SPF | `[organization].com.my` |
| `dkim_result` | DKIM signature verification result | `Pass` / `Fail` / `None` |
| `dkim_domain` | DKIM signing domain | `[organization].com.my` |
| `dmarc_result` | DMARC policy evaluation result | `Pass` / `Fail` / `None` |
| `dmarc_policy_applied` | DMARC policy action taken | `none` / `quarantine` / `reject` |
| `action_taken` | Gateway disposition | `Quarantined` / `Rejected` / `Delivered` |
| `spoofing_suspected` | Whether domain impersonation is suspected | `Yes` / `No` |

### 7.2 Authentication Failure Summary

| Date | SPF Failures | DKIM Failures | DMARC Failures | Suspected Spoofing Events | Actions Taken |
|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Count] | [Count] | [Count] | [Count] | [Summary] |

### 7.3 DMARC Policy Status — Owned Domains

*Review and record the current DMARC policy posture for all corporate email domains.*

| Domain | SPF Record Published | DKIM Configured | DMARC Policy | DMARC Policy Level | Reporting Enabled | Last Verified |
|---|---|---|---|---|---|---|
| [organization].com.my | Yes / No | Yes / No | Yes / No | `none` / `quarantine` / `reject` | Yes / No | [Date] |
| [subdomain].[organization].com.my | Yes / No | Yes / No | Yes / No | `none` / `quarantine` / `reject` | Yes / No | [Date] |

---

## 8. Quarantine Actions

*This section documents all messages placed into quarantine by the email gateway, the rationale for quarantine, and the outcome of quarantine review. This record demonstrates that [Organization Name] maintains active disposition management for potentially malicious or policy-violating communications.*

### 8.1 Quarantine Log Fields

| Field Name | Description | Example Value |
|---|---|---|
| `quarantine_timestamp` | Time message was quarantined | `2025-01-15T12:30:00+08:00` |
| `message_id` | Reference to core transaction log | `<mno345@mail.external.com>` |
| `sender_address` | Sender email address | `sender@external.com` |
| `recipient_address` | Intended recipient | `staff@[organization].com.my` |
| `quarantine_reason` | Reason for quarantine | `Spam` / `Phishing` / `Malware` / `DLP` / `Policy` |
| `quarantine_queue` | Quarantine bucket or category | `[System-defined queue name]` |
| `retention_expiry` | Date quarantined message will be purged | `[Date]` |
| `reviewed_by` | Analyst or system that reviewed | `[Analyst Name / Automated]` |
| `review_timestamp` | Time of quarantine review | `[Timestamp]` |
| `release_decision` | Outcome of quarantine review | `Released` / `Deleted` / `Forwarded to IR Team` / `Pending Review` |
| `released_to` | Recipient if message was released | `[Email Address]` |
| `justification` | Reason for release or deletion | `[Free text]` |

### 8.2 Quarantine Activity Summary

| Date | Messages Quarantined | Released (Legitimate) | Deleted (Confirmed Threat) | Pending Review | False Positive Rate |
|---|---|---|---|---|---|
| [YYYY-MM-DD] | [Count] | [Count] | [Count] | [Count] | [%] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for email gateway log management, review, and compliance reporting obligations under Act 854 Section 18.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Chief Information Security Officer | Head of IT / Messaging | Security Operations Centre (SOC) | Email / Messaging Administrator | Data Protection Officer | NACSA Liaison Officer | Internal Audit |
|---|---|---|---|---|---|---|---|
| Email gateway configuration and maintenance | I | A | C | R | I | I | I |
| Daily log review and threat monitoring | I | A | R | C | I | I | I |
| DLP policy management and review | A | C | R | R | C | I | I |
| Quarantine review and release decisions | I | A | R | R | I | I | I |
| SPF / DKIM / DMARC management | I | A | C | R | I | I | I |
| Log integrity verification | A | C | R | I | I | I | C |
| Incident escalation to NACSA | A | C | R | I | C | R | I |
| Log retention compliance | A | R | C | C | C | I | C |
| Periodic compliance reporting | A | R | C | C | I | C | I |
| Internal audit of log controls | I | C | C | C | I | I | A/R |

---

## 10. Log Retention and Integrity

### 10.1 Retention Requirements

| Log Category | Minimum Retention Period | Storage Location | Immutability Control |
|---|---|---|---|
| Core email transaction logs | [3 years / Per NACSA directive] | [SIEM / Immutable log store] | [WORM / Hash verification] |
| Threat detection logs (spam, phishing, malware) | [3 years / Per NACSA directive] | [SIEM / Immutable log store] | [WORM / Hash verification] |
| DLP incident logs | [5 years / Per PDPA retention guidance] | [DLP Platform / SIEM] | [WORM / Access-controlled] |
| Quarantine records | [1 year minimum / Align with gateway retention policy] | [Email Gateway Platform] | [Vendor-managed immutability] |
| Authentication failure logs | [3 years / Per NACSA directive] | [SIEM / Immutable log store] | [WORM / Hash verification] |

### 10.2 Log Integrity Controls

*Describe the technical controls in place to ensure log data cannot be tampered with or deleted by unauthorised parties.*

- **Hash Verification:** [SHA-256 hashing applied to log files at time of collection — Yes / No]
- **Immutable Storage:** [Logs written to WORM-compliant storage — Yes / No / In Progress]
- **Access Controls:** [Role-based access to log data — read-only for SOC analysts, administrative access restricted to [Role]]
- **Audit Logging:** [Access to email gateway logs is itself logged and reviewed — Yes / No]
- **Backup and Replication:** [Logs replicated to [Secondary Location] for resilience]

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial document creation |
| [1.1] | [Date] | [Author Name] | [Description of changes] |

### 11.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Head of IT / Messaging | [Name] | [Signature] | [Date] |
| Data Protection Officer | [Name] | [Signature] | [Date] |
| NACSA Liaison Officer | [Name] | [Signature] | [Date] |

---

## 12. References

| Reference | Document / Instrument | Relevance |
|---|---|---|
| Cyber Security Act 2024 (Act 854), Section 18 | Obligations of NCII entities to implement and maintain prescribed cyber security measures and retain supporting records | Primary compliance obligation for this log |
| Cyber Security Act 2024 (Act 854), Section 18(2) | Requirement to report cyber security incidents to NACSA | Governs escalation of email-borne incidents |
| NACSA NCII Sector Cybersecurity Framework | [Applicable Sector Framework Version] | Sector-specific technical controls including email security |
| Personal Data Protection Act 2010 (Act 709), Section 9 | Security principle — obligation to protect personal data transmitted via email | Governs DLP obligations for email |
| Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document, 10.55–10.61 | Email security controls applicable to financial institutions | Supplementary guidance where BNM regulated |
| NIST SP 800-45 Version 2 | Guidelines on Electronic Mail Security | Reference framework for email security controls |
| RFC 7489 — Domain-based Message Authentication | DMARC specification | Technical reference for SPF/DKIM/DMARC implementation |

---

## Appendices

### Appendix A — Email Gateway Alert Severity Classification

*Define the severity levels used to classify email security events for triage and escalation purposes.*

| Severity | Definition | Response SLA | Escalation Path |
|---|---|---|---|
| Critical | Active malware delivered to user; confirmed BEC compromise; mass phishing campaign in progress | 15 minutes | SOC Lead → CISO → NACSA Liaison |
| High | Malware blocked; targeted spear-phishing detected; DLP confirmed data exfiltration attempt | 1 hour | SOC Analyst → SOC Lead → CISO |
| Medium | Phishing campaign detected; elevated spam volume; DMARC failure spike | 4 hours | SOC Analyst → SOC Lead |
| Low | Routine spam; SPF SoftFail; individual DLP false positive | 24 hours | SOC Analyst |

---

### Appendix B — NACSA Incident Reporting Thresholds

*Summarise the thresholds that trigger mandatory notification to NACSA under Act 854 Section 18(2) for email-borne incidents.*

| Trigger Condition | Reporting Threshold | Notification Timeframe | Point of Contact |
|---|---|---|---|
| Email-borne malware successfully executed on NCII systems | Any confirmed incident | [Within 6 hours of discovery / Per NACSA directive] | [NACSA Contact Details] |
| Confirmed Business Email Compromise (BEC) | Any confirmed incident | [Within 6 hours of discovery / Per NACSA directive] | [NACSA Contact Details] |
| Mass phishing campaign impersonating NCII entity | [X] or more recipients targeted | [Within 24 hours / Per NACSA directive] | [NACSA Contact Details] |
| Suspected data exfiltration via email | Any DLP-confirmed incident involving NCII data | [Within 6 hours of discovery / Per NACSA directive] | [NACSA Contact Details] |

---

### Appendix C — Log Field Normalisation Mapping

*Map vendor-specific log field names to the normalised field names used in this document, to support consistent SIEM ingestion and reporting.*

| Normalised Field Name | [Vendor A] Field Name | [Vendor B] Field Name | Notes |
|---|---|---|---|
| `timestamp` | `[VendorA_Field]` | `[VendorB_Field]` | Ensure UTC+8 conversion applied |
| `message_id` | `[VendorA_Field]` | `[VendorB_Field]` | |
| `sender_address` | `[VendorA_Field]` | `[VendorB_Field]` | |
| `disposition` | `[VendorA_Field]` | `[VendorB_Field]` | Normalise values to standard vocabulary |
| `threat_category` | `[VendorA_Field]` | `[VendorB_Field]` | |

---

### Appendix D — Glossary

| Term | Definition |
|---|---|
| Act 854 | Cyber Security Act 2024 — the primary Malaysian legislation governing cyber security obligations for NCII entities |
| BEC | Business Email Compromise — fraudulent impersonation of executives or trusted parties to authorise fraudulent transactions |
| DKIM | DomainKeys Identified Mail — cryptographic signature mechanism for email authentication |
| DMARC | Domain-based Message Authentication, Reporting and Conformance — policy framework building on SPF and DKIM |
| DLP | Data Loss Prevention — policy controls preventing the unauthorised transmission of sensitive data |
| MX | Mail Exchange — DNS record directing email delivery for a domain |
| NACSA | National Cyber Security Agency — the competent authority designated under Act 854 |
| NCII | National Critical Information Infrastructure — systems designated as critical under Act 854 |
| SPF | Sender Policy Framework — DNS-based mechanism authorising mail servers to send on behalf of a domain |
| WORM | Write Once Read Many — storage technology ensuring log immutability |

---

*End of Document — [Organization Name] | [Document ID] | Version 1.0 | Classification: Confidential*