# Incident Notification Report

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CISO / SOC Lead |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | Per Incident |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

This Incident Notification Report is a mandatory regulatory submission prepared in accordance with **Section 26 of the Cyber Security Act 2024 (Act 854)**, administered by the **National Cyber Security Agency (NACSA)**. It documents the formal notification of a reportable cyber security incident affecting National Critical Information Infrastructure (NCII) systems operated by [Organization Name].

Under Act 854 s26, this report must be submitted to NACSA **within six (6) hours** of detecting a reportable cyber security incident. This template applies to all personnel responsible for incident detection, triage, escalation, and regulatory reporting, including but not limited to the Security Operations Centre (SOC), CISO office, and relevant IT and business unit leads.

---

## 2. Entity Identification

*Provide complete and accurate details identifying the reporting organization. This information enables NACSA to route the notification to the correct sector coordinator and initiate regulatory follow-up.*

| Field | Details |
|---|---|
| **Organization Name** | [Organization Name] |
| **Registration Number** | [SSM / Regulatory Registration Number] |
| **Regulated Sector** | [e.g., Banking & Finance / Energy / Water / Transport] |
| **NCII Sector** | [NCII Sector as designated by NACSA] |
| **Registered Address** | [Registered Business Address] |
| **Primary Contact Name** | [Full Name] |
| **Primary Contact Designation** | [e.g., CISO / SOC Lead / IT Manager] |
| **Primary Contact Email** | [official.email@organization.com.my] |
| **Primary Contact Phone** | [+60X-XXXX XXXX] |
| **Alternate Contact Name** | [Full Name] |
| **Alternate Contact Phone** | [+60X-XXXX XXXX] |

---

## 3. Incident Description and Classification

*Describe the incident as accurately as possible based on information available at the time of notification. Classification must follow NACSA's incident taxonomy. Update this section in subsequent reports if new information emerges.*

### 3.1 Incident Overview

| Field | Details |
|---|---|
| **Incident Reference ID** | [INC-YYYY-NNNN] |
| **Date and Time Detected** | [DD/MM/YYYY HH:MM MYT] |
| **Date and Time of Notification** | [DD/MM/YYYY HH:MM MYT] |
| **Elapsed Time (Detection to Notification)** | [X hours X minutes] |
| **Incident Status at Time of Notification** | [Ongoing / Contained / Resolved] |
| **Reported By** | [Name, Designation] |

### 3.2 Incident Classification

| Field | Details |
|---|---|
| **Incident Category** | [e.g., Ransomware / Data Breach / DDoS / Unauthorized Access / Malware / Insider Threat] |
| **NACSA Severity Level** | [Critical / High / Medium / Low] |
| **Attack Vector** | [e.g., Phishing / Exploitation of Vulnerability / Supply Chain / Insider] |
| **Attack Surface** | [e.g., Internet-facing / Internal Network / Endpoint / Cloud] |

### 3.3 Incident Narrative

*Provide a factual, chronological narrative of the incident as understood at the time of this report. Avoid speculation. Use confirmed information only.*

[Describe the sequence of events leading to detection, including any observable indicators, alarms, or alerts that triggered the incident declaration. Include relevant timestamps where known.]

---

## 4. Affected NCII Systems

*Identify all National Critical Information Infrastructure (NCII) systems, assets, and services impacted or potentially impacted by this incident. Be as specific as possible; NACSA uses this information to assess cross-sector risk.*

### 4.1 Affected Systems Inventory

| System / Asset Name | System Type | Function / Role | IP Address / Hostname | Environment | Status |
|---|---|---|---|---|---|
| [System Name] | [Server / Application / Network Device / Cloud Service] | [Description of business function] | [X.X.X.X / hostname] | [Production / DR / Staging] | [Compromised / Potentially Affected / Under Investigation] |
| [System Name] | | | | | |
| [System Name] | | | | | |

### 4.2 Critical Services Affected

*List any regulated or critical services experiencing degradation or disruption as a result of this incident.*

- [ ] [Service Name] — [Description of impact, e.g., partial outage, data unavailable]
- [ ] [Service Name] — [Description of impact]
- [ ] [Service Name] — [Description of impact]

### 4.3 Data Assets Potentially Compromised

| Data Category | Estimated Records | Sensitivity | Regulatory Classification |
|---|---|---|---|
| [e.g., Customer PII] | [Estimated count or "Unknown"] | [High / Medium / Low] | [e.g., PDPA Personal Data] |
| [e.g., Financial Transactions] | | | |
| [e.g., Authentication Credentials] | | | |

---

## 5. Impact Assessment

*Provide an initial assessment of the business, operational, and reputational impact. This assessment is based on information available at the time of notification and will be revised in subsequent reports.*

### 5.1 Impact Summary

| Impact Dimension | Assessment | Severity |
|---|---|---|
| **Operational Impact** | [e.g., Core banking unavailable, transaction processing halted] | [Critical / High / Medium / Low] |
| **Customer Impact** | [e.g., X customers unable to access online services] | [Critical / High / Medium / Low] |
| **Data Confidentiality Impact** | [e.g., Potential unauthorized access to customer records] | [Critical / High / Medium / Low] |
| **Data Integrity Impact** | [e.g., Possible data modification detected] | [Critical / High / Medium / Low] |
| **Financial Impact (Estimated)** | [MYR estimate or "Under Assessment"] | [Critical / High / Medium / Low] |
| **Reputational Impact** | [e.g., Media attention anticipated / No public exposure yet] | [Critical / High / Medium / Low] |
| **Regulatory Impact** | [e.g., Potential PDPA breach / BNM notification triggered] | [Critical / High / Medium / Low] |

### 5.2 Scope of Exposure

- **Number of Systems Confirmed Affected:** [X]
- **Number of Systems Under Investigation:** [X]
- **Number of Users / Accounts Affected:** [X or "Under Investigation"]
- **Estimated Duration of Exposure:** [e.g., From DD/MM/YYYY to present / X hours]
- **Geographic Scope:** [e.g., Malaysia only / Cross-border exposure suspected]

### 5.3 Cascading or Third-Party Impact

*Identify any third parties, vendors, or interconnected NCII entities that may be affected.*

- [Third Party / Vendor Name] — [Nature of potential impact]
- [Third Party / Vendor Name] — [Nature of potential impact]

---

## 6. Initial Response Actions

*Document all response actions taken from the point of detection to the time of this notification. This provides NACSA with evidence of active containment and regulatory good faith.*

### 6.1 Immediate Containment Actions

| Timestamp (MYT) | Action Taken | Performed By | Outcome |
|---|---|---|---|
| [DD/MM/YYYY HH:MM] | [e.g., Isolated affected server segment from network] | [Name / Team] | [e.g., Segment isolated; lateral movement halted] |
| [DD/MM/YYYY HH:MM] | [e.g., Disabled compromised user accounts] | [Name / Team] | [e.g., X accounts suspended] |
| [DD/MM/YYYY HH:MM] | [e.g., Activated Incident Response Plan v[X]] | [Name / Team] | [e.g., IR Team assembled] |
| [DD/MM/YYYY HH:MM] | | | |

### 6.2 Evidence Preservation

- [ ] System memory captures initiated
- [ ] Relevant log files preserved and hash-verified
- [ ] Forensic imaging of affected endpoints initiated
- [ ] Chain of custody documentation commenced
- [ ] [Additional action]

### 6.3 Internal Escalation

| Escalation Target | Notified At (MYT) | Method | Acknowledged By |
|---|---|---|---|
| CISO | [HH:MM] | [Phone / Email / Pager] | [Name] |
| CEO / Management | [HH:MM] | [Phone / Email] | [Name] |
| Legal & Compliance | [HH:MM] | [Phone / Email] | [Name] |
| Board (if applicable) | [HH:MM] | [Phone / Email] | [Name] |

### 6.4 Parallel Regulatory Notifications

*List any other regulatory notifications initiated concurrently with or prior to this NACSA submission.*

| Regulatory Body | Obligation | Notification Sent | Reference |
|---|---|---|---|
| Bank Negara Malaysia (BNM) | [e.g., RMiT 11.11 / JPDPD PDPA] | [Yes / No / Pending] | [Reference Number] |
| Personal Data Protection Department (JPDPD) | PDPA s12A | [Yes / No / Pending] | [Reference Number] |
| Securities Commission (SC) | [Applicable obligation] | [Yes / No / N/A] | [Reference Number] |
| [Other Regulator] | | | |

---

## 7. Contact Information

*Provide current contact details for all personnel NACSA may need to liaise with during the incident response. Ensure contacts are reachable on a 24/7 basis for the duration of the incident.*

### 7.1 Incident Response Contacts

| Role | Name | Email | Mobile | Availability |
|---|---|---|---|---|
| **Incident Commander** | [Full Name] | [email] | [+60X-XXXX XXXX] | 24/7 for incident duration |
| **CISO** | [Full Name] | [email] | [+60X-XXXX XXXX] | [Hours / 24/7] |
| **SOC Lead** | [Full Name] | [email] | [+60X-XXXX XXXX] | 24/7 for incident duration |
| **Legal Counsel** | [Full Name] | [email] | [+60X-XXXX XXXX] | [Hours] |
| **Communications / PR Lead** | [Full Name] | [email] | [+60X-XXXX XXXX] | [Hours] |
| **External IR Retainer (if engaged)** | [Firm Name / Contact] | [email] | [+60X-XXXX XXXX] | [Hours] |

### 7.2 NACSA Submission Details

| Field | Details |
|---|---|
| **Submitted To** | National Cyber Security Agency (NACSA) |
| **Submission Channel** | [e.g., NACSA Incident Reporting Portal / Email: [NACSA contact]] |
| **Submission Timestamp** | [DD/MM/YYYY HH:MM MYT] |
| **NACSA Case Reference (if assigned)** | [NACSA-YYYY-NNNNNN] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for the preparation, review, submission, and follow-up of this Incident Notification Report.*

| Activity | CISO | SOC Lead | IT Manager | Legal & Compliance | CEO / Management | External IR Firm |
|---|---|---|---|---|---|---|
| Incident detection and triage | I | R | C | I | I | C |
| Incident severity classification | A | R | C | C | I | C |
| Drafting initial notification report | A | R | C | C | I | C |
| Legal review of notification content | C | I | I | R | A | I |
| Submission to NACSA | R | C | I | A | I | I |
| Liaison with NACSA post-submission | R | C | I | C | I | I |
| Internal escalation to Board/CEO | A | I | I | C | R | I |
| Evidence preservation | C | R | R | I | I | C |
| Follow-up and supplementary reporting | A | R | C | C | I | C |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name, Designation] | Initial submission |
| 1.1 | [DD/MM/YYYY] | [Author Name, Designation] | [e.g., Updated containment actions; revised impact scope] |
| [X.X] | | | |

### 9.2 Approval and Sign-Off

*This report must be reviewed and approved by the designated signatories prior to submission to NACSA. In time-critical situations where the 6-hour deadline is imminent, verbal approval with documented confirmation is acceptable, to be followed by written sign-off at the earliest opportunity.*

| Role | Name | Signature | Date & Time (MYT) |
|---|---|---|---|
| Incident Commander | [Full Name] | _________________________ | [DD/MM/YYYY HH:MM] |
| CISO | [Full Name] | _________________________ | [DD/MM/YYYY HH:MM] |
| Legal & Compliance Officer | [Full Name] | _________________________ | [DD/MM/YYYY HH:MM] |
| CEO / Authorized Representative | [Full Name] | _________________________ | [DD/MM/YYYY HH:MM] |

---

## 10. References

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), s26** | Obligation to notify NACSA of reportable cyber security incidents within prescribed timeframes |
| **Cyber Security Act 2024 (Act 854), s25** | Duties of NCII entity owners in relation to cyber security measures |
| **NACSA National Cyber Security Policy (NCSP)** | Policy framework governing NCII protection and incident response |
| **Personal Data Protection Act 2010 (PDPA), s12A** | Data breach notification obligations to the Personal Data Protection Commissioner |
| **Bank Negara Malaysia — Risk Management in Technology (RMiT)** | Technology risk and cyber incident reporting obligations for financial institutions |
| **ISO/IEC 27035 — Information Security Incident Management** | International standard for incident management processes |
| **[Organization Name] Cyber Incident Response Plan v[X.X]** | Internal IR procedures governing activation, escalation, and response |

---

## Appendices

### Appendix A — Network Topology Diagram (Affected Segments)

*Attach a network diagram highlighting the affected systems, network segments, and isolation boundaries at the time of the incident.*

[Attach diagram — File Reference: [Filename, Version, Date]]

### Appendix B — Indicators of Compromise (IoCs)

*List all confirmed or suspected IoCs identified during initial triage. This information assists NACSA and sector CERTs in issuing threat intelligence advisories.*

| IoC Type | Value | Confidence | Source |
|---|---|---|---|
| IP Address | [X.X.X.X] | [High / Medium / Low] | [e.g., Firewall log, SIEM alert] |
| Domain / FQDN | [malicious-domain.tld] | | |
| File Hash (SHA-256) | [hash value] | | |
| Email Address | [sender@domain.tld] | | |
| URL | [http://...] | | |
| [Other IoC Type] | | | |

### Appendix C — Evidence Log

*Maintain a tamper-evident log of all evidence collected during initial response. Attach formal chain of custody documentation as a separate exhibit.*

| Evidence ID | Description | Collected By | Date/Time Collected | Storage Location | Hash (SHA-256) |
|---|---|---|---|---|---|
| [EVID-001] | [e.g., Memory dump — Server PROD-DB-01] | [Name] | [DD/MM/YYYY HH:MM] | [Secure storage path / media label] | [hash] |
| [EVID-002] | | | | | |

### Appendix D — Supplementary Notification Log

*Track all subsequent notifications and updates submitted to NACSA and other regulators following this initial report.*

| Submission No. | Submitted To | Date/Time | Submission Type | Key Updates | NACSA Acknowledgement Ref |
|---|---|---|---|---|---|
| 1 (This Report) | NACSA | [DD/MM/YYYY HH:MM] | Initial Notification (s26) | — | [Pending / Ref No.] |
| 2 | NACSA | [DD/MM/YYYY HH:MM] | Supplementary Update | [Summary of updates] | [Ref No.] |
| 3 | NACSA | [DD/MM/YYYY HH:MM] | Final Closure Report | [Summary] | [Ref No.] |

---

*This document is classified **Confidential** and is intended solely for submission to NACSA and authorized internal stakeholders. Unauthorized disclosure is prohibited. Retain in accordance with [Organization Name] Records Retention Policy and applicable regulatory requirements.*