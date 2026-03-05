# Email Security Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Messaging Team / Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [SPF, DKIM, and DMARC Configuration Requirements](#5-spf-dkim-and-dmarc-configuration-requirements)
6. [Anti-Phishing Controls](#6-anti-phishing-controls)
7. [Attachment Sandboxing](#7-attachment-sandboxing)
8. [Data Loss Prevention (DLP) for Email](#8-data-loss-prevention-dlp-for-email)
9. [Email Encryption Requirements](#9-email-encryption-requirements)
10. [Email Archiving and Retention](#10-email-archiving-and-retention)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Compliance and Monitoring](#12-compliance-and-monitoring)
13. [Exceptions and Waivers](#13-exceptions-and-waivers)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*Describe the intent and objective of this standard. Explain why email security is critical for the organization and what risk it mitigates.*

This Email Security Standard establishes the minimum technical and procedural requirements for securing email systems operated by or on behalf of **[Organization Name]** as a designated National Critical Information Infrastructure (NCII) entity under the **Cyber Security Act 2024 (Act 854)**.

Email remains one of the primary attack vectors for phishing, business email compromise (BEC), malware delivery, and data exfiltration. This standard defines mandatory controls to protect the confidentiality, integrity, and availability of email communications, and to ensure that [Organization Name] meets its statutory obligations under Act 854, in particular the requirements for cybersecurity measures applicable to NCII entities.

This standard is mandatory and applies to all email infrastructure operated by or on behalf of [Organization Name]. Non-compliance with this standard is treated as a security control deficiency and must be remediated within timelines specified in Section 12.

---

## 2. Scope

*Define which systems, personnel, third parties, and data types fall within the boundaries of this standard.*

### 2.1 In Scope

This standard applies to:

- All **email platforms and mail transfer agents (MTAs)** owned, managed, or licensed by [Organization Name], including on-premises and cloud-hosted email services (e.g., Microsoft Exchange, Microsoft 365, Google Workspace, or equivalent).
- All **personnel** of [Organization Name], including permanent employees, contract staff, interns, and secondees who use [Organization Name]-issued or [Organization Name]-managed email accounts.
- All **third-party managed service providers** that operate or administer email infrastructure on behalf of [Organization Name].
- All **email domains** registered and used by [Organization Name], including primary and subsidiary domains.
- All **data transmitted via email**, including personal data as defined under the Personal Data Protection Act 2010 (PDPA), sensitive business information, and regulated financial data.

### 2.2 Out of Scope

The following are expressly excluded from this standard:

- Personal email accounts accessed on personal devices not enrolled in [Organization Name]'s Mobile Device Management (MDM) solution.
- External partner or vendor email systems not managed or co-managed by [Organization Name].
- Instant messaging and collaboration tools (e.g., Microsoft Teams, Slack) which are governed by the **[Collaboration Platform Security Standard, Document ID: TBC]**.

---

## 3. Regulatory and Policy Context

*Reference the specific regulatory frameworks, legislation, and internal policies that mandate or inform this standard.*

### 3.1 Statutory Obligations

This standard is issued in compliance with the following legislation and regulatory instruments:

| Instrument | Relevance |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Imposes a duty on NCII entities to implement cybersecurity measures to protect their NCII. Email systems are designated as part of [Organization Name]'s NCII. Compliance with this standard directly fulfils the obligation under s18 to maintain appropriate technical controls. |
| **Personal Data Protection Act 2010 (Act 709)** | Email systems process personal data. This standard supports compliance with the Security Principle under the PDPA by protecting personal data from unauthorised access, loss, or disclosure during transmission. |
| **Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy Document** | Para 10.x requires financial institutions to implement controls for electronic communications and data transmission, including encryption and access controls. |
| **NACSA National Cyber Security Policy (NCSP)** | Mandates baseline cybersecurity standards for NCII sectors, including controls for communications infrastructure. |

### 3.2 Internal Policy Hierarchy

This standard is subordinate to and must be read in conjunction with:

- **[Organization Name] Information Security Policy** — [Document ID]
- **[Organization Name] Acceptable Use Policy** — [Document ID]
- **[Organization Name] Data Classification and Handling Policy** — [Document ID]
- **[Organization Name] Incident Response Policy** — [Document ID]
- **[Organization Name] Third-Party Risk Management Policy** — [Document ID]

---

## 4. Definitions and Abbreviations

*Define technical terms and abbreviations used throughout this document to ensure consistent interpretation.*

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary legislation governing cybersecurity obligations for NCII entities in Malaysia. |
| **BEC** | Business Email Compromise — a social engineering attack where adversaries impersonate executives or trusted parties to authorise fraudulent transactions or extract sensitive data. |
| **DKIM** | DomainKeys Identified Mail — an email authentication method that uses cryptographic signatures to verify that an email was authorised by the domain owner. |
| **DMARC** | Domain-based Message Authentication, Reporting and Conformance — a policy framework that uses SPF and DKIM to determine how receiving mail servers handle unauthenticated email. |
| **DLP** | Data Loss Prevention — technologies and processes that detect and prevent the unauthorised transmission of sensitive data. |
| **MTA** | Mail Transfer Agent — a software component responsible for routing and delivering email messages between servers. |
| **NCII** | National Critical Information Infrastructure — information infrastructure designated under Act 854 whose disruption would have a significant impact on national security, the economy, or public welfare. |
| **S/MIME** | Secure/Multipurpose Internet Mail Extensions — a standard for public-key encryption and digital signing of email messages. |
| **SPF** | Sender Policy Framework — a DNS-based email authentication mechanism that specifies which mail servers are authorised to send email on behalf of a domain. |
| **TLS** | Transport Layer Security — a cryptographic protocol that provides secure communication over a network, used to encrypt email in transit. |
| **[Organization Name]** | [Full legal entity name of the organization]. |

---

## 5. SPF, DKIM, and DMARC Configuration Requirements

*This section defines the mandatory DNS-based email authentication controls required to prevent domain spoofing and unauthorised email transmission on behalf of [Organization Name]'s domains.*

### 5.1 Sender Policy Framework (SPF)

All email domains registered and used by [Organization Name] **must** have a valid SPF record published in DNS.

**Requirements:**

- SPF records **must** be published as a DNS TXT record for each sending domain and all subdomain delegations used for email.
- SPF records **must** use the `~all` (softfail) qualifier at a minimum during initial deployment, transitioning to `-all` (hardfail) upon confirmation that all legitimate sending sources are enumerated.
- The target qualifier for all production domains is **`-all` (hardfail)**.
- SPF records **must not** exceed the 10 DNS lookup limit defined in RFC 7208.
- All authorised mail sending services (including third-party SaaS platforms sending on behalf of [Organization Name]) **must** be included in the SPF record before being permitted to send.

**Current SPF Record Inventory:**

| Domain | SPF Record | Enforcement Level | Last Validated | Responsible Team |
|---|---|---|---|---|
| [primary-domain.com] | [v=spf1 include:... -all] | [-all / ~all] | [Date] | [Team] |
| [subsidiary-domain.com] | [v=spf1 include:... -all] | [-all / ~all] | [Date] | [Team] |
| [non-sending domain] | v=spf1 -all | Hardfail (no senders) | [Date] | [Team] |

### 5.2 DomainKeys Identified Mail (DKIM)

All outbound email **must** be signed with DKIM.

**Requirements:**

- DKIM **must** be enabled on all outbound mail streams for all sending domains.
- DKIM keys **must** use a minimum key length of **2048 bits** for RSA keys, or **Ed25519** where supported by the email platform.
- DKIM selector keys **must** be rotated at a minimum frequency of **every 12 months** or following any suspected key compromise.
- DKIM private keys **must** be stored in a secrets management solution and access restricted to authorised mail server administrators only.
- Retired DKIM selectors **must** be removed from DNS within **30 days** of rotation to prevent key re-use attacks.

**DKIM Key Inventory:**

| Domain | Selector Name | Key Length | Key Algorithm | Expiry Date | Rotation Due |
|---|---|---|---|---|---|
| [primary-domain.com] | [selector1] | [2048 / 4096] | [RSA / Ed25519] | [Date] | [Date] |
| [primary-domain.com] | [selector2 (standby)] | [2048 / 4096] | [RSA / Ed25519] | [Date] | [Date] |

### 5.3 Domain-based Message Authentication, Reporting and Conformance (DMARC)

All domains **must** have a DMARC policy published in DNS.

**Requirements:**

- DMARC **must** be implemented for all sending domains and non-sending domains.
- The minimum acceptable DMARC policy for non-sending domains is `p=reject`.
- For active sending domains, the following phased enforcement path **must** be followed:

| Phase | Policy | Condition to Advance |
|---|---|---|
| 1 — Monitoring | `p=none` | Initial deployment; aggregate reports reviewed for 30 days. |
| 2 — Partial Enforcement | `p=quarantine; pct=25` | No legitimate email streams identified as failing. |
| 3 — Full Quarantine | `p=quarantine; pct=100` | Stable for 30 days at pct=25. |
| 4 — Full Rejection (**Target**) | `p=reject` | No false positives observed over 60 days at full quarantine. |

- DMARC aggregate reports (`rua`) **must** be directed to a monitored mailbox or DMARC reporting service: `rua=mailto:[dmarc-reports@organization.com]`.
- DMARC forensic reports (`ruf`) **must** be directed to the Security Operations Centre (SOC): `ruf=mailto:[soc@organization.com]`.
- DMARC reports **must** be reviewed at a minimum **monthly** by the Messaging team, and any anomalies escalated to the SOC.

**DMARC Record Inventory:**

| Domain | DMARC Policy | Percentage | RUA Destination | RUF Destination | Status |
|---|---|---|---|---|---|
| [primary-domain.com] | [p=none/quarantine/reject] | [pct=100] | [rua mailbox] | [ruf mailbox] | [Phase 1/2/3/4] |

---

## 6. Anti-Phishing Controls

*This section defines the technical and procedural controls required to detect, block, and respond to phishing, spear-phishing, and business email compromise (BEC) attempts targeting [Organization Name] personnel.*

### 6.1 Email Gateway Filtering

- A secure email gateway (SEG) or equivalent cloud-based email security service **must** be deployed and positioned to inspect all inbound and outbound email.
- The SEG **must** be configured with the following capabilities enabled:

| Control | Requirement | Current Status |
|---|---|---|
| URL rewriting and time-of-click scanning | Mandatory | [Enabled / Disabled] |
| Impersonation protection (executive / domain) | Mandatory | [Enabled / Disabled] |
| Brand impersonation detection | Mandatory | [Enabled / Disabled] |
| Newly registered domain (NRD) detection | Mandatory | [Enabled / Disabled] |
| Graymail filtering | Recommended | [Enabled / Disabled] |
| Anti-spam filtering | Mandatory | [Enabled / Disabled] |
| Reputation-based sender blocking | Mandatory | [Enabled / Disabled] |

### 6.2 Display Name and Header Spoofing Controls

- The email platform **must** be configured to detect and flag or reject emails where the display name of the sender matches an [Organization Name] executive or sensitive role (e.g., CEO, CFO, CISO) but the sending address is external or does not match the expected domain.
- External email banners or visual indicators **must** be applied to all inbound email originating from outside [Organization Name]'s email domain(s) to assist users in identifying potentially suspicious messages.

### 6.3 Phishing Simulation and Awareness

- [Organization Name] **must** conduct phishing simulation exercises at a minimum of **[quarterly / bi-annually]** using an approved phishing simulation platform.
- Personnel who fail phishing simulations **must** be automatically enrolled in mandatory security awareness training within **[5 business days]** of the simulated click.
- Results of phishing simulations **must** be reported to the CISO and Risk Committee on a **[quarterly]** basis.

| Metric | Target Threshold | Reporting Frequency |
|---|---|---|
| Phishing click rate | < [X]% | Quarterly |
| Credential submission rate | < [X]% | Quarterly |
| Reporting rate (user-reported phishing) | > [X]% | Quarterly |

### 6.4 User Reporting Mechanism

- A one-click phishing report button or equivalent mechanism **must** be deployed to all email clients.
- Reported phishing emails **must** be triaged by the SOC within **[4 hours]** during business hours and **[8 hours]** outside business hours.
- Confirmed phishing campaigns **must** trigger retrospective inbox sweep procedures to identify and remove the malicious email from all affected mailboxes.

---

## 7. Attachment Sandboxing

*This section defines requirements for the automated detonation and analysis of email attachments to detect malware, ransomware, and other malicious payloads prior to delivery to end users.*

### 7.1 Sandboxing Platform Requirements

- An automated attachment sandboxing solution **must** be deployed and integrated with the inbound email gateway.
- The sandboxing solution **must** support analysis of at minimum the following file types:

| File Category | Examples |
|---|---|
| Office documents | .docx, .xlsx, .pptx, .doc, .xls, .ppt |
| PDF documents | .pdf |
| Compressed archives | .zip, .rar, .7z, .tar.gz |
| Executable files | .exe, .msi, .bat, .ps1, .vbs, .js |
| Disk images | .iso, .img |
| HTML and script files | .html, .htm, .js, .hta |

### 7.2 Sandboxing Operational Requirements

- Attachments **must** be held in quarantine and not delivered to the recipient until sandbox analysis is complete or a configurable timeout threshold is reached (maximum hold time: **[X minutes]**).
- If a sandboxing verdict of **malicious** is returned, the attachment **must** be stripped and the email delivered with a notification to the recipient indicating that the attachment was blocked.
- If a sandboxing verdict of **suspicious** is returned, the email **must** be quarantined and the SOC notified for manual review within **[2 hours]**.
- Sandboxing verdicts and detonation reports **must** be logged and retained for a minimum of **[12 months]** and integrated into the SIEM platform.
- Password-protected archives submitted with passwords in the email body **must** be identified and handled according to the **[Organization Name] Threat Intelligence and Incident Response Procedures]**.

### 7.3 False Positive Management

*Document the process for handling legitimate business attachments that are incorrectly flagged by the sandboxing solution.*

- A formal exception process **must** exist for whitelisting specific file types, sender addresses, or attachment hashes from sandboxing, subject to documented business justification and CISO approval.
- All sandbox exceptions **must** be reviewed at minimum **annually**.

| Exception ID | Sender / File Type | Justification | Approved By | Expiry Date |
|---|---|---|---|---|
| [EXC-001] | [example@vendor.com] | [Business justification] | [CISO Name] | [Date] |

---

## 8. Data Loss Prevention (DLP) for Email

*This section defines the requirements for DLP controls applied to outbound (and where applicable, internal) email to prevent the unauthorised disclosure of sensitive or regulated data via email channels.*

### 8.1 DLP Policy Scope

Email DLP controls **must** be applied to:

- All **outbound email** leaving [Organization Name]'s email environment to external recipients.
- All **internal email** containing data classified as **Restricted** or above under the **[Organization Name] Data Classification Policy**.
- Email transmitted to **personal email addresses** (e.g., Gmail, Yahoo, Hotmail) from corporate accounts.

### 8.2 Mandatory DLP Rules

The following DLP rules **must** be configured as a minimum baseline:

| Rule ID | Data Type Detected | Trigger Condition | Action | Override Permitted |
|---|---|---|---|---|
| DLP-001 | Malaysian National Registration Identity Card (NRIC) number | 5 or more instances in a single email | Block and alert SOC | Yes, with manager approval |
| DLP-002 | Payment card data (PAN) — PCI DSS | Any instance | Block and alert SOC | No |
| DLP-003 | [Organization Name] customer account numbers | 3 or more instances | Quarantine for review | Yes, with manager approval |
| DLP-004 | Confidential / Restricted document classification labels | Detected in subject, body, or attachment | Encrypt or block (based on recipient domain) | No |
| DLP-005 | Large file transfer (bulk data exfiltration indicator) | > [X] MB or > [X] attachments | Hold and notify manager | Yes, with manager approval |
| DLP-006 | Source code or database export patterns | Pattern match | Block and alert CISO | No |

### 8.3 DLP Incident Handling

- All DLP policy violations **must** be logged and reviewed by the SOC within **[4 hours]** of triggering.
- Confirmed DLP incidents involving personal data **must** be escalated to the Data Protection Officer (DPO) and assessed against [Organization Name]'s data breach notification obligations under PDPA.
- DLP incident trends **must** be reported to the CISO and Risk Committee on a **[monthly]** basis.

### 8.4 DLP Tuning and Review

- DLP rules **must** be reviewed and tuned at minimum **[semi-annually]** to reduce false positive rates and address emerging data exfiltration patterns.
- Changes to DLP rules **must** be approved by the CISO and documented in the DLP Rule Change Register.

---

## 9. Email Encryption Requirements

*This section defines the mandatory and recommended encryption controls for email in transit and at rest, including the use of TLS, S/MIME, and end-to-end encryption for sensitive communications.*

### 9.1 Transport Layer Security (TLS) — Email in Transit

- All outbound email from [Organization Name] mail servers **must** be transmitted using **Opportunistic TLS** at minimum, with **Mandatory TLS** enforced for known partner domains processing sensitive or regulated data.
- [Organization Name]'s mail servers **must** support a minimum of **TLS 1.2**; **TLS 1.3** is preferred.
- SSL 2.0, SSL 3.0, TLS 1.0, and TLS 1.1 **must** be disabled on all mail servers.
- **MTA-STS (Mail Transfer Agent Strict Transport Security)** and **TLS-RPT** **must** be implemented for all sending domains to enforce TLS and receive delivery failure reports.

**Mandatory TLS Partner Domain Registry:**

| Partner Organisation | Domain | TLS Version Required | Enforced Since | Review Date |
|---|---|---|---|---|
| [Partner A] | [@partner-a.com] | TLS 1.2+ | [Date] | [Date] |
| [Regulatory Body] | [@regulator.gov.my] | TLS 1.2+ | [Date] | [Date] |

### 9.2 S/MIME and End-to-End Encryption

- **S/MIME** certificates **must** be provisioned for all personnel in roles handling **Restricted** or **Confidential** data as defined in the Data Classification Policy. At minimum this includes:
  - Senior management and C-suite
  - Finance and treasury personnel
  - Legal and compliance personnel
  - IT and cybersecurity personnel

- S/MIME certificates **must** be issued from an approved Certificate Authority (CA) as listed in the **[Organization Name] PKI Certificate Policy — [Document ID]**.
- Minimum key length for S/MIME RSA keys: **2048 bits**.
- S/MIME certificates **must** be renewed before expiry; a renewal reminder process **must** be in place no later than **30 days** before expiry.
- [Organization Name] **must** maintain an escrow copy of S/MIME encryption keys to support lawful interception, eDiscovery, and incident investigation requirements.

### 9.3 Encryption of Sensitive Email to External Recipients

Where [Organization Name] personnel are required to transmit **Restricted** or above data to external recipients who do not support S/MIME, the following approved alternatives **must** be used:

| Scenario | Approved Method |
|---|---|
| Sending sensitive documents externally | Encrypt attachment using [approved tool] and transmit password via separate channel (SMS / phone) |
| Bulk sensitive data transfer | Use the [Organization Name]-approved Secure File Transfer Platform — [Document ID] |
| Sending to a regulated partner with portal access | Use the designated partner secure messaging portal |

Transmitting **Restricted** data as unencrypted plain-text email to external recipients is **prohibited**.

---

## 10. Email Archiving and Retention

*This section defines the requirements for the archiving, retention, and retrieval of email records to meet operational, legal, regulatory, and audit obligations.*

### 10.1 Archiving Requirements

- All email sent from or received by [Organization Name] email accounts **must** be captured and archived in a tamper-evident email archive solution.
- Archiving **must** be configured to operate transparently without the ability of end users to delete or modify archived copies.
- The email archive **must** support:
  - Full-text search across all archived messages, including attachment content.
  - Legal hold and eDiscovery capabilities.
  - Role-based access controls restricting archive access to authorised personnel (Legal, Compliance, CISO, and SOC).
  - Audit logging of all archive access and search activities.

### 10.2 Retention Schedule

Email retention periods **must** comply with the following schedule, and must be consistent with the **[Organization Name] Records Retention Schedule — [Document ID]**:

| Email Category | Minimum Retention Period | Legal / Regulatory Basis |
|---|---|---|
| General business correspondence | 7 years | [Internal Policy / Companies Act 2016] |
| Financial transaction records | 7 years | Financial Services Act 2013 (FSA) |
| Customer communications (regulated) | 7 years | BNM / FSA requirements |
| HR and employment-related correspondence | 7 years or duration of employment + [X] years | Employment Act 1955 |
| Legal correspondence and privilege | Duration of matter + 7 years | Legal department direction |
| Regulatory and compliance correspondence | 7 years | Act 854 / BNM / PDPA |
| Incident response correspondence | 10 years | [Organization Name] Incident Response Policy |
| Executive and Board-level correspondence | [X] years | [Board resolution / policy] |
| Personal data subject to PDPA | Not longer than necessary; comply with retention limits | PDPA 2010 |

### 10.3 Disposal of Email Records

- Email records that have exceeded their retention period **must** be disposed of in accordance with the **[Organization Name] Records Retention and Disposal Procedure — [Document ID]**.
- Disposal **must** be irreversible (cryptographic erasure or certified deletion) and **must** be documented in the Records Disposal Log.
- Email records subject to legal hold **must not** be disposed of until the hold is formally lifted by the Legal department.

### 10.4 Retrieval and eDiscovery

- The archive platform **must** support retrieval of email records within **[2 business days]** for standard regulatory requests and **[24 hours]** for urgent regulatory or legal demands.
- Retrieval requests **must** be logged with the following details:

| Field | Description |
|---|---|
| Request ID | Unique identifier for the retrieval request |
| Requestor | Name and role of the requesting individual |
| Authorising Officer | Legal / Compliance / CISO approval |
| Date of Request | Date the request was received |
| Date of Completion | Date the records were provided |
| Scope | Date range, custodians, keywords used |
| Purpose | Legal hold / audit / regulatory request / investigation |

---

## 11. Roles and Responsibilities

*This section defines accountability for the controls in this standard using a RACI (Responsible, Accountable, Consulted, Informed) model.*

**RACI Key:**
- **R** — Responsible: Does the work
- **A** — Accountable: Owns the outcome (single person)
- **C** — Consulted: Input sought before decisions
- **I** — Informed: Notified of decisions/outcomes

| Control Area | CISO | Messaging Team | SOC | IT Infrastructure | Legal / Compliance | DPO | All Personnel |
|---|---|---|---|---|---|---|---|
| SPF / DKIM / DMARC configuration and maintenance | A | R | I | C | I | — | — |
| DMARC report review and action | A | R | C | — | I | — | — |
| Secure email gateway management | A | R | I | C | — | — | — |
| Anti-phishing control configuration | A | R | R | C | — | — | — |
| Phishing simulation programme | A | C | R | — | I | — | I |
| Security awareness training (phishing) | A | — | C | — | C | — | R |
| Attachment sandboxing operation | A | R | I | C | — | — | — |
| Sandbox exception management | A | C | R | — | C | — | — |
| DLP rule configuration and maintenance | A | R | R | C | C | C | — |
| DLP incident response | A | I | R | — | C | C | — |
| Email encryption (TLS) configuration | A | R | I | R | — | — | — |
| S/MIME certificate provisioning | A | R | — | R | — | — | I |
| Email archiving platform management | A | R | I | R | C | C | — |
| Retention schedule compliance | C | I | — | — | A | R | — |
| eDiscovery and legal hold management | C | I | — | — | A | C | — |
| Records disposal authorisation | C | I | — | — | A | R | — |
| Standard review and update | A | R | — | C | C | C | — |

---

## 12. Compliance and Monitoring

*Define how compliance with this standard is measured, reported, and enforced.*

### 12.1 Key Performance and Risk Indicators

The Messaging team and SOC **must** track and report the following metrics on a **[monthly]** basis to the CISO:

| KPI / KRI | Description | Target | Reporting Frequency |
|---|---|---|---|
| DMARC enforcement rate | Percentage of sending domains at `p=reject` | 100% | Monthly |
| SPF hardfail rate | Percentage of sending domains with `-all` | 100% | Monthly |
| DKIM signing coverage | Percentage of outbound email successfully DKIM-signed | 100% | Monthly |
| Phishing click rate | Percentage of users who clicked simulated phishing links | < [X]% | Quarterly |
| DLP block rate | Number of outbound emails blocked by DLP per month | Trending down | Monthly |
| Sandbox malicious verdicts | Number of malicious attachments detected and blocked | N/A (track trend) | Monthly |
| TLS enforcement coverage (partner domains) | Percentage of high-risk partner domains with mandatory TLS | 100% | Quarterly |
| Archive coverage | Percentage of email accounts captured in archive | 100% | Monthly |
| S/MIME certificate expiry | Number of certificates expiring within 30 days | 0 | Monthly |

### 12.2 Compliance Assessment

- An internal compliance assessment against this standard **must** be conducted at minimum **annually**, aligned with the standard's review cycle.
- Findings from compliance assessments **must** be tracked in the [Organization Name] Risk Register with remediation owners and target dates assigned.
- Critical findings (controls not in place with high risk exposure) **must** be remediated within **[30 days]**.
- High findings **must** be remediated within **[60 days]**.
- Medium and low findings **must** be remediated within **[90 days]**.

### 12.3 Non-Compliance

Instances of non-compliance with this standard **must** be:
1. Reported to the CISO within **[2 business days]** of identification.
2. Assessed for regulatory notification obligations under Act 854 s18 and PDPA.
3. Documented in the Risk Register with a formal remediation plan.

---

## 13. Exceptions and Waivers

*Document the process for requesting and approving exceptions to the requirements in this standard.*

- Requests for exceptions to any requirement in this standard **must** be submitted in writing to the CISO using the **[Organization Name] Security Exception Request Form — [Document ID]**.
- Exceptions **must** include:
  - A description of the requirement that cannot be met.
  - A business justification for the exception.
  - An assessment of the risk introduced by the exception.
  - Proposed compensating controls.
  - A proposed duration for the exception (maximum **12 months**).
- All exceptions **must** be approved by the CISO and reviewed by the Risk Committee.
- Approved exceptions **must** be recorded in the Exception Register below and reviewed at renewal.

**Active Exception Register:**

| Exception ID | Requirement | Business Justification | Compensating Controls | Approved By | Expiry Date | Status |
|---|---|---|---|---|---|---|
| [EXC-ESS-001] | [Requirement reference] | [Justification] | [Controls] | [CISO Name] | [Date] | [Active / Under Review] |

---

## 14. Review and Approval

### 14.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial release |
| [1.1] | [Date] | [Author Name], [Title] | [Description of changes] |

### 14.2 Approval Sign-Off

*This standard requires the following approvals before it becomes effective.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Head of Messaging / IT Infrastructure | [Name] | [Signature] | [Date] |
| Chief Risk Officer (CRO) | [Name] | [Signature] | [Date] |
| Data Protection Officer (DPO) | [Name] | [Signature] | [Date] |
| [Legal Counsel / General Counsel] | [Name] | [Signature] | [Date] |

---

## 15. References

The following regulatory instruments, standards, and internal documents are directly referenced by or inform this standard:

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duty of NCII entity to comply with directions and implement cybersecurity measures for designated NCII. |
| **Personal Data Protection Act 2010 (Act 709)** | Security Principle — obligation to protect personal data from loss, misuse, modification, unauthorised or accidental access or disclosure. |
| **BNM Risk Management in Technology (RMiT) Policy Document** | Electronic communications security and data transmission controls for licensed financial institutions. |
| **NACSA National Cyber Security Policy (NCSP)** | Baseline cybersecurity requirements for NCII entities across all 11 designated sectors. |
| **RFC 7208** | Sender Policy Framework (SPF) for Authorizing Use of Domains in Email. |
| **RFC 6376** | DomainKeys Identified Mail (DKIM) Signatures. |
| **RFC 7489** | Domain-based Message Authentication, Reporting, and Conformance (DMARC). |
| **RFC 8461** | SMTP MTA Strict Transport Security (MTA-STS). |
| **RFC 8460** | SMTP TLS Reporting (TLS-RPT). |
| **NIST SP 800-177 Rev. 1** | Trustworthy Email — NIST guidelines for securing email infrastructure. |
| **[Organization Name] Information Security Policy** | [Document ID] |
| **[Organization Name] Data Classification and Handling Policy** | [Document ID] |
| **[Organization Name] Acceptable Use Policy** | [Document ID] |
| **[Organization Name] Incident Response Policy** | [Document ID] |
| **[Organization Name] Records Retention Schedule** | [Document ID] |
| **[Organization Name] PKI Certificate Policy** | [Document ID] |

---

## 16. Appendices

### Appendix A — Email Domain Inventory

*Maintain a complete list of all email domains owned and operated by [Organization Name]. This inventory must be reviewed and updated quarterly by the Messaging team.*

| Domain | Type | Sending Enabled | SPF Status | DKIM Status | DMARC Policy | MTA-STS | Owner | Last Reviewed |
|---|---|---|---|---|---|---|---|---|
| [primary-domain.com] | Primary corporate | Yes | Compliant | Compliant | p=reject | Enabled | [Team] | [Date] |
| [subsidiary.com] | Subsidiary | Yes | Compliant | Compliant | p=quarantine | Enabled | [Team] | [Date] |
| [legacy-domain.com] | Legacy / parked | No | v=spf1 -all | N/A | p=reject | N/A | [Team] | [Date] |

---

### Appendix B — Approved Email Security Tools and Platforms

*List all tools and platforms currently deployed to fulfil the requirements of this standard.*

| Control Area | Tool / Platform | Vendor | Deployment Model | Contract Expiry | Owner |
|---|---|---|---|---|---|
| Secure Email Gateway | [Tool Name] | [Vendor] | [Cloud / On-Prem] | [Date] | [Team] |
| Attachment Sandboxing | [Tool Name] | [Vendor] | [Cloud / On-Prem] | [Date] | [Team] |
| DLP (Email) | [Tool Name] | [Vendor] | [Cloud / On-Prem] | [Date] | [Team] |
| Email Archive | [Tool Name] | [Vendor] | [Cloud / On-Prem] | [Date] | [Team] |
| S/MIME CA | [CA Name] | [Vendor] | [Cloud / On-Prem] | [Date] | [Team] |
| Phishing Simulation | [Tool Name] | [Vendor] | [Cloud / On-Prem] | [Date] | [Team] |
| DMARC Reporting | [Tool Name] | [Vendor] | [Cloud / On-Prem] | [Date] | [Team] |

---

### Appendix C — Email Security Incident Classification

*Reference guide for classifying email security incidents and determining escalation and notification requirements.*

| Incident Type | Example | Severity | SOC Response SLA | CISO Notification | Act 854 / PDPA Notification Assessment |
|---|---|---|---|---|---|
| Confirmed phishing campaign (internal user targeted) | Credential harvesting email delivered to mailbox | High | 2 hours | Yes | Assess if credentials compromised |
| Business Email Compromise (BEC) | Fraudulent payment instruction sent via spoofed executive account | Critical | 1 hour | Immediate | Yes — potential financial crime and data breach |
| Malware delivered via email attachment | Ransomware dropper detonated | Critical | 1 hour | Immediate | Yes — NCII impact assessment required |
| DLP policy violation (confirmed exfiltration) | Customer data sent to personal email | High | 2 hours | Yes | Yes — PDPA breach assessment |
| DLP policy violation (suspected / unclear intent) | Large attachment sent externally | Medium | 4 hours | If confirmed | Pending investigation |
| Email spoofing (external sender impersonating [Organization Name]) | Phishing campaign abusing [Organization Name] domain | High | 4 hours | Yes | Inform NACSA / affected parties |
| Email archive unavailability | Archive platform offline | Medium | 4 hours | If > 4 hours | Assess regulatory reporting obligation |

---

### Appendix D — DMARC Reporting and Escalation Procedure

*Step-by-step procedure for the Messaging team to process DMARC aggregate and forensic reports.*

1. **Collection:** DMARC aggregate (`rua`) reports are received at `[dmarc-reports@organization.com]` and ingested into `[DMARC Reporting Tool]`.
2. **Review:** Messaging team reviews aggregate reports weekly using `[DMARC Reporting Tool]` dashboard.
3. **Triage:** Any new source IP addresses or domains appearing in reports are triaged:
   - If a **legitimate** sending source: update SPF/DKIM configuration accordingly.
   - If an **unknown or suspicious** source: escalate to SOC for threat intelligence review.
4. **SOC Escalation:** SOC investigates suspicious sources and determines if abuse is in progress.
5. **Abuse Response:** If domain abuse is confirmed, initiate the **[Organization Name] Phishing / Domain Abuse Response Procedure — [Document ID]**.
6. **Reporting:** Monthly DMARC summary reported to CISO including: volume of authenticated vs. unauthenticated email, identified abuse, and enforcement progress.

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**[Organization Name]** — Email Security Standard
*This document is the property of [Organization Name]. Unauthorised reproduction or distribution is prohibited.*