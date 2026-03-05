# Threat Intelligence Log

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Threat Intelligence Analyst |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

*This section defines the intent of this log and the regulatory context under which it is maintained.*

This Threat Intelligence Log serves as the authoritative record of all threat intelligence received, processed, enriched, and acted upon by [Organization Name]. It is maintained in accordance with **Section 25 of the Cyber Security Act 2024 (Act 854)**, which mandates that designated entities implement mechanisms to receive, assess, and respond to threat intelligence disseminated by the National Cyber Security Agency (NACSA) and authorized Threat Intelligence Sharing Platforms (TISPs).

**Scope:** This log covers all threat intelligence ingested from:

- NACSA-designated Threat Intelligence Sharing Platforms (TISPs)
- Financial sector information sharing communities (e.g., FS-ISAC, BNM-sanctioned networks)
- Open-source and commercial threat intelligence feeds
- Internal threat hunting and incident response activities
- Peer institution disclosures and bilateral sharing arrangements

**Out of Scope:** General security event logs, vulnerability scan results, and penetration testing findings are maintained in separate registers unless directly correlated with actionable threat intelligence entries recorded herein.

---

## 2. Regulatory and Policy Context

*This section maps the log to its governing legislative and policy obligations.*

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), s25 | Obligation to receive and act on threat intelligence from NACSA TISP and other authorized sources |
| Cyber Security Act 2024 (Act 854), s26 | Reporting obligations for cyber security incidents to NACSA |
| NACSA National Cyber Security Policy | Framework for national-level threat intelligence coordination |
| BNM Risk Management in Technology (RMiT) Policy Document | Requirements for threat intelligence integration into security operations |
| Personal Data Protection Act 2010 (PDPA) | Governs handling of personal data that may appear in threat intelligence artifacts |
| [Organization Name] Information Security Policy | Internal policy governing classification, handling, and dissemination of threat data |
| [Organization Name] Incident Response Policy | Defines escalation and response procedures triggered by intelligence findings |

---

## 3. Definitions and Acronyms

*Define all terms used in this log to ensure consistent interpretation by all stakeholders.*

| Term / Acronym | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary legislation governing cybersecurity obligations for designated entities in Malaysia |
| **IOC** | Indicator of Compromise — observable artifact (IP, domain, hash, URL, email) associated with malicious activity |
| **TLP** | Traffic Light Protocol — a standardized framework for controlling the dissemination of sensitive information |
| **TISP** | Threat Intelligence Sharing Platform — designated platform operated or authorized by NACSA for sharing threat intelligence |
| **NACSA** | National Cyber Security Agency of Malaysia |
| **TTPs** | Tactics, Techniques, and Procedures — describes adversary behaviour using frameworks such as MITRE ATT&CK |
| **STIX** | Structured Threat Information eXpression — a standardized language for describing cyber threat information |
| **TAXII** | Trusted Automated eXchange of Intelligence Information — a protocol for sharing STIX content |
| **MISP** | Malware Information Sharing Platform — open-source threat intelligence platform |
| **TI Analyst** | Threat Intelligence Analyst — the designated owner and primary maintainer of this log |
| **SOC** | Security Operations Centre |
| **IR Team** | Incident Response Team |
| **FS-ISAC** | Financial Services Information Sharing and Analysis Center |

---

## 4. Log Governance and Handling Instructions

*This section establishes the operational rules for maintaining the integrity and confidentiality of this log.*

- This log is classified **Confidential** and must be stored in an access-controlled system with audit logging enabled.
- Access is restricted to personnel with a documented need-to-know basis, as approved by the [CISO / Head of Security].
- All entries must be created, updated, and reviewed using the designated threat intelligence platform (e.g., [MISP / TIP Platform Name]).
- Log entries must never be deleted; superseded or erroneous entries must be annotated as such with a revision note and timestamp.
- Entries bearing **TLP:RED** classification must not be stored in any shared repository; they must be handled exclusively within approved secure channels.
- Retention of this log shall comply with [Organization Name]'s data retention schedule, with a minimum retention period of **[X] years** in accordance with applicable regulatory requirements.
- Any breach of confidentiality involving the contents of this log must be reported immediately to the Threat Intelligence Analyst and the [CISO / Information Security Officer].

---

## 5. Intelligence Source and Traffic Light Protocol (TLP)

*Record the originating source of each threat intelligence item and its TLP classification, which determines how the intelligence may be shared and used.*

### 5.1 Approved Intelligence Sources

| Source ID | Source Name | Source Type | Feed Format | Integration Method | Status |
|---|---|---|---|---|---|
| SRC-001 | NACSA TISP | Government / Regulatory | STIX/TAXII | Automated API Pull | Active |
| SRC-002 | FS-ISAC | Sector ISAC | STIX/TAXII, PDF Reports | Automated + Manual | Active |
| SRC-003 | [Commercial TI Vendor Name] | Commercial Feed | STIX, CSV | Automated API Pull | Active |
| SRC-004 | BNM Sector Advisory | Regulatory Advisory | PDF / Email | Manual | Active |
| SRC-005 | Internal Threat Hunting | Internal | Manual Entry | Manual | Active |
| SRC-006 | [Peer Institution Name] | Bilateral Sharing | Email / MISP | Manual | Active |
| [SRC-XXX] | [Source Name] | [Type] | [Format] | [Method] | [Status] |

### 5.2 TLP Classification Reference

| TLP Level | Colour | Sharing Restriction |
|---|---|---|
| **TLP:CLEAR** | White | No restriction; suitable for public distribution |
| **TLP:GREEN** | Green | Shareable within the financial sector community |
| **TLP:AMBER** | Amber | Limited to [Organization Name] and named trusted partners only |
| **TLP:AMBER+STRICT** | Amber+Strict | Restricted to [Organization Name] internal recipients only |
| **TLP:RED** | Red | Not for disclosure; restricted to named recipients in specific meeting or exchange |

---

## 6. Intelligence Receipt and Registration

*Every piece of threat intelligence received must be formally registered upon ingestion. Complete all mandatory fields at the point of receipt before any analysis or action is taken.*

### 6.1 Intelligence Receipt Register

| Entry ID | Receipt Date & Time (UTC+8) | Source ID | Source Reference | TLP Classification | Intelligence Type | Brief Description | Received By | Platform Entry ID |
|---|---|---|---|---|---|---|---|---|
| TI-[YYYY]-[NNNN] | [DD MMM YYYY HH:MM] | [SRC-XXX] | [Advisory ID / Report Title] | [TLP Level] | [IOC / Advisory / Campaign / Vulnerability] | [One-line summary of the intelligence content] | [Analyst Name] | [MISP Event ID / TIP Ref] |
| TI-[YYYY]-[NNNN] | [DD MMM YYYY HH:MM] | [SRC-XXX] | [Advisory ID / Report Title] | [TLP Level] | [IOC / Advisory / Campaign / Vulnerability] | [One-line summary of the intelligence content] | [Analyst Name] | [MISP Event ID / TIP Ref] |

**Mandatory fields:** Entry ID, Receipt Date & Time, Source ID, TLP Classification, Intelligence Type, Brief Description, Received By.

---

## 7. Indicator of Compromise (IOC) Details

*Document all technical indicators extracted from or associated with each intelligence entry. IOC details must be recorded with sufficient fidelity to enable automated detection, threat hunting, and retrospective analysis.*

### 7.1 IOC Register

| IOC ID | Parent Entry ID | IOC Type | IOC Value | Confidence Level | Severity | First Seen | Last Seen | Associated Threat Actor | Associated Campaign | MITRE ATT&CK TTP | Context / Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| IOC-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [IP Address / Domain / URL / File Hash (MD5/SHA1/SHA256) / Email / Registry Key / User-Agent / Certificate] | [Indicator Value] | [High / Medium / Low] | [Critical / High / Medium / Low / Informational] | [DD MMM YYYY] | [DD MMM YYYY] | [Threat Actor Name or Unknown] | [Campaign Name or N/A] | [T####.###] | [Additional context] |
| IOC-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [Type] | [Value] | [Confidence] | [Severity] | [Date] | [Date] | [Actor] | [Campaign] | [TTP] | [Notes] |

### 7.2 IOC Type Reference

| IOC Type | Description | Example Format |
|---|---|---|
| IPv4 Address | Malicious IP address (host or CIDR) | `203.0.113.0` or `203.0.113.0/24` |
| IPv6 Address | Malicious IPv6 address | `2001:db8::1` |
| Domain | Malicious fully-qualified domain name | `malicious-domain.example.com` |
| URL | Malicious URL (phishing, C2, malware delivery) | `https://malicious.example.com/payload` |
| File Hash (MD5) | 32-character hexadecimal hash | `[32-char hex string]` |
| File Hash (SHA1) | 40-character hexadecimal hash | `[40-char hex string]` |
| File Hash (SHA256) | 64-character hexadecimal hash | `[64-char hex string]` |
| Email Address | Malicious sender or phishing originator | `attacker@domain.com` |
| Email Subject | Known phishing lure subject line | `[Subject line pattern]` |
| Registry Key | Malicious Windows registry persistence key | `HKLM\Software\[...]` |
| Mutex | Malware mutex identifier | `[Mutex name string]` |
| Certificate Fingerprint | Malicious TLS certificate fingerprint | `[SHA1 fingerprint]` |
| YARA Rule | Pattern-matching rule for file detection | `[Rule Name / Reference]` |
| Snort/Suricata Rule | Network detection rule | `[Rule SID / Reference]` |
| User-Agent String | Malicious HTTP User-Agent | `[User-agent string]` |

### 7.3 Confidence Level Definitions

| Level | Description |
|---|---|
| **High** | Intelligence corroborated by multiple independent sources or confirmed by internal incident data |
| **Medium** | Intelligence from a single reputable source with plausible context but not independently confirmed |
| **Low** | Unverified intelligence, potentially outdated, or from a source with limited track record |

---

## 8. Analysis and Enrichment

*Document the analytical work performed on each intelligence entry, including enrichment from additional sources, contextualisation, and relevance assessment for [Organization Name]'s specific threat landscape.*

### 8.1 Analysis Record

| Analysis ID | Parent Entry ID | Analysis Date & Time | Analyst | Enrichment Sources Used | Relevance to Organisation | Threat Actor Profile | Targeted Sectors / Assets | Recommended Priority | Analysis Summary |
|---|---|---|---|---|---|---|---|---|---|
| ANA-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [DD MMM YYYY HH:MM] | [Analyst Name] | [VirusTotal / Shodan / PassiveDNS / WHOIS / Internal Logs / Other] | [High / Medium / Low / Not Applicable] | [APT Group / Cybercriminal / Hacktivist / Unknown] | [Financial Sector / SWIFT / Internet Banking / VPN / Other] | [P1 / P2 / P3 / P4] | [Summary of analytical findings and organizational context] |
| ANA-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [DD MMM YYYY HH:MM] | [Analyst Name] | [Sources] | [Relevance] | [Profile] | [Targets] | [Priority] | [Summary] |

### 8.2 Priority Classification

| Priority | Label | Description | Response Timeframe |
|---|---|---|---|
| P1 | Critical | Active threat targeting [Organization Name] or confirmed sector-wide campaign | Immediate — within 1 hour |
| P2 | High | Credible threat with high likelihood of impact on [Organization Name] or Malaysian financial sector | Within 4 hours |
| P3 | Medium | Relevant intelligence requiring defensive action but no immediate active threat | Within 24 hours |
| P4 | Low | Informational intelligence for awareness; no immediate action required | Within 5 business days |

---

## 9. Action Taken

*Record all defensive, investigative, and remediation actions taken in response to processed threat intelligence. Each action must be traceable to a specific intelligence entry and assigned to a responsible party with a completion date.*

### 9.1 Action Register

| Action ID | Parent Entry ID | Action Type | Action Description | System / Asset Targeted | Assigned To | Team | Initiated Date & Time | Completion Date & Time | Action Status | Outcome |
|---|---|---|---|---|---|---|---|---|---|---|
| ACT-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [Block / Hunt / Alert / Patch / Escalate / Monitor / Report / No Action] | [Detailed description of the action taken, e.g., "Blocked IP range on perimeter firewall and WAF"] | [Firewall / SIEM / EDR / DNS / Proxy / Email Gateway / Endpoint / Other] | [Responsible Person] | [SOC / IR / Network / Endpoint / Management] | [DD MMM YYYY HH:MM] | [DD MMM YYYY HH:MM] | [Pending / In Progress / Completed / Deferred / Not Required] | [Outcome description] |
| ACT-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [Type] | [Description] | [System] | [Person] | [Team] | [Date] | [Date] | [Status] | [Outcome] |

### 9.2 Action Type Definitions

| Action Type | Description |
|---|---|
| **Block** | Implemented blocking rule on firewall, proxy, DNS sinkhole, or email gateway |
| **Hunt** | Conducted retrospective threat hunt across logs, endpoints, or network traffic |
| **Alert** | Created or tuned a detection rule in SIEM, EDR, or IDS/IPS |
| **Patch** | Initiated vulnerability remediation based on intelligence-linked CVE |
| **Escalate** | Escalated to IR Team, CISO, or senior management for incident response |
| **Monitor** | Placed indicator or behaviour under enhanced monitoring |
| **Report** | Submitted notification to NACSA, BNM, or other regulatory body |
| **Share** | Shared intelligence with peer institutions or sector ISAC |
| **No Action** | Intelligence assessed as not applicable; documented with rationale |

---

## 10. Detection Results

*Record the outcomes of detection activities — including retrospective threat hunting, SIEM correlation, and real-time alerting — that were triggered by or associated with threat intelligence entries.*

### 10.1 Detection Results Register

| Detection ID | Parent Entry ID / Action ID | Detection Date & Time | Detection Method | Tool / Platform | Detection Rule / Query Reference | Result | Affected Asset(s) | Affected User(s) | Incident Raised | Incident Reference | Analyst Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| DET-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] / ACT-[YYYY]-[NNNN] | [DD MMM YYYY HH:MM] | [Threat Hunt / SIEM Alert / EDR Alert / IDS Alert / Log Review / Manual] | [SIEM Name / EDR Name / IDS Name / Other] | [Rule Name / Query ID / Reference] | [Hit — Malicious / Hit — False Positive / No Hit / Inconclusive] | [Hostname / IP / System Name] | [Username(s) or N/A] | [Yes / No] | [INC-YYYY-NNNN or N/A] | [Analyst notes on detection context] |
| DET-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [Date] | [Method] | [Tool] | [Rule/Query] | [Result] | [Asset] | [User] | [Yes/No] | [Ref] | [Notes] |

### 10.2 Detection Metrics Summary

*This section should be populated on a [weekly / monthly] basis to provide management visibility of detection effectiveness.*

| Period | Total IOCs Processed | Total Detection Rules Deployed | Hits — Confirmed Malicious | Hits — False Positive | No Hit | Incidents Raised | Detection Rate (%) |
|---|---|---|---|---|---|---|---|
| [Month YYYY] | [N] | [N] | [N] | [N] | [N] | [N] | [N%] |
| [Month YYYY] | [N] | [N] | [N] | [N] | [N] | [N] | [N%] |

---

## 11. Sharing Status

*Document all instances where threat intelligence has been shared externally, in compliance with applicable TLP classifications, NACSA directives, and bilateral or multilateral sharing obligations. Unauthorized sharing of intelligence in violation of TLP classifications is prohibited.*

### 11.1 Outbound Intelligence Sharing Register

| Sharing ID | Parent Entry ID | Share Date & Time | Recipient Organisation | Recipient Contact | Sharing Platform / Channel | TLP Classification | Intelligence Shared (Summary) | Authorised By | Legal Basis / Agreement | Confirmation Received |
|---|---|---|---|---|---|---|---|---|---|---|
| SHR-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [DD MMM YYYY HH:MM] | [NACSA / FS-ISAC / Peer Institution / BNM / Other] | [Contact Name / Distribution List] | [NACSA TISP / MISP / Email / Secure Portal / Other] | [TLP Level] | [Brief description of intelligence shared] | [Authorising Manager / CISO] | [MOU / Sector Agreement / Regulatory Direction / NACSA Directive] | [Yes / No / Pending] |
| SHR-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [Date] | [Recipient] | [Contact] | [Channel] | [TLP] | [Summary] | [Authorised By] | [Basis] | [Confirmed] |

### 11.2 Inbound Intelligence Receipt Acknowledgements

*Where a source requires formal acknowledgement of receipt (e.g., NACSA directives), record confirmations here.*

| Ack ID | Parent Entry ID | Source Organisation | Acknowledgement Date | Acknowledgement Method | Acknowledged By |
|---|---|---|---|---|---|
| ACK-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [NACSA / Source Name] | [DD MMM YYYY HH:MM] | [Email / Portal / System Confirmation] | [Analyst Name] |

### 11.3 NACSA Reporting Register

*Section 26 of Act 854 may require reporting of certain threat intelligence findings to NACSA as part of incident notification or cyber threat reporting obligations. Record all such submissions here.*

| Report ID | Parent Entry ID | Report Date & Time | Report Type | NACSA Reference | Submitted By | Report Status | NACSA Response | Response Date |
|---|---|---|---|---|---|---|---|---|
| RPT-[YYYY]-[NNNN] | TI-[YYYY]-[NNNN] | [DD MMM YYYY HH:MM] | [Threat Notification / Incident Report / Advisory Acknowledgement] | [NACSA Reference Number] | [Analyst / CISO Name] | [Submitted / Acknowledged / Closed] | [Summary of NACSA response or N/A] | [DD MMM YYYY] |

---

## 12. Roles and Responsibilities

*This section defines accountability for all activities associated with this log using a RACI framework (Responsible, Accountable, Consulted, Informed).*

### 12.1 RACI Matrix

| Activity | Threat Intelligence Analyst | SOC Lead | CISO / Head of Security | Incident Response Team | IT/Network Operations | Legal & Compliance | Senior Management |
|---|---|---|---|---|---|---|---|
| Receive and register threat intelligence | R | I | I | I | — | — | — |
| Classify TLP and assess relevance | R | C | A | C | — | — | — |
| Enrich and analyse IOCs | R | C | I | C | — | — | — |
| Deploy detection rules (SIEM / EDR / IDS) | C | R | I | C | R | — | — |
| Conduct retrospective threat hunting | R | R | I | C | C | — | — |
| Initiate blocking actions (firewall / proxy / DNS) | C | C | A | C | R | — | — |
| Escalate to Incident Response | R | R | A | R | — | — | — |
| Report to NACSA (Act 854, s26) | C | C | R | C | — | C | A |
| Share intelligence with external parties | R | C | A | — | — | C | — |
| Maintain and review this log | R | C | A | — | — | C | — |
| Periodic log review and quality assurance | R | C | A | — | — | — | — |
| Annual review of log governance | C | C | A | — | — | C | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed | — = Not Involved

---

## 13. Review and Approval

### 13.1 Review Frequency

This log is maintained on a **continuous** basis. Individual entries are created in real time upon receipt of threat intelligence. The log as a whole is subject to the following periodic reviews:

| Review Type | Frequency | Conducted By | Purpose |
|---|---|---|---|
| Entry completeness audit | Weekly | Threat Intelligence Analyst | Ensure all entries are fully populated and no open actions are overdue |
| Detection efficacy review | Monthly | SOC Lead + TI Analyst | Review detection hit rates; tune or retire aged IOCs |
| Management reporting | Monthly | CISO | Summary reporting to senior management and board risk committee |
| Log governance review | Annually | CISO + Legal & Compliance | Review log structure, retention, access controls, and regulatory alignment |
| Regulatory audit support | As required | CISO + Legal & Compliance | Support NACSA or BNM regulatory inspections |

### 13.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Author Name] | Initial release |
| [X.X] | [DD MMM YYYY] | [Author Name] | [Description of changes] |

### 13.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Threat Intelligence Analyst (Preparer) | [Name] | [Signature] | [DD MMM YYYY] |
| SOC Lead (Reviewer) | [Name] | [Signature] | [DD MMM YYYY] |
| Chief Information Security Officer (Approver) | [Name] | [Signature] | [DD MMM YYYY] |
| Chief Information Officer (Endorser) | [Name] | [Signature] | [DD MMM YYYY] |
| [Board Risk Committee / CRO] (Noted) | [Name] | [Signature] | [DD MMM YYYY] |

---

## 14. References

| Reference | Document / Clause | Relevance to This Log |
|---|---|---|
| Cyber Security Act 2024 (Act 854), **s25** | Obligation to receive, process, and act on threat intelligence from NACSA TISP and authorized sources | Primary legislative basis for this log's existence and maintenance |
| Cyber Security Act 2024 (Act 854), **s26** | Incident and threat reporting obligations to NACSA | Governs entries in the NACSA Reporting Register (Section 11.3) |
| Cyber Security Act 2024 (Act 854), **s27** | NACSA's powers to direct designated entities on cybersecurity measures | May mandate specific intelligence response actions recorded in this log |
| NACSA National Cyber Security Policy (NCSP) | National policy framework for threat intelligence sharing and coordination | Framework for prioritisation and sharing protocols |
| NACSA TISP Operating Procedures | Operational guidelines for using the TISP platform | Governs Source SRC-001 and related handling procedures |
| BNM Risk Management in Technology (RMiT) | Section on Cyber Threat Intelligence | Reinforces obligation within the financial sector context |
| Personal Data Protection Act 2010 (Act 709) | Obligations regarding processing of personal data | Applies where threat intelligence contains personal data (e.g., attacker email addresses, victim data) |
| MITRE ATT&CK Framework (Enterprise) | TTPs reference framework | Used in IOC register (Section 7.1) for behavioural classification |
| Traffic Light Protocol (TLP) v2.0 — FIRST | Standard for controlling intelligence dissemination | Governs TLP classification fields throughout this log |
| [Organization Name] Information Security Policy | Internal policy, Version [X.X] | Internal governance framework for information classification and handling |
| [Organization Name] Incident Response Policy | Internal policy, Version [X.X] | Escalation and response procedures triggered by this log |
| [Organization Name] Data Retention Schedule | Internal policy, Version [X.X] | Determines minimum retention period for this log |

---

## Appendices

### Appendix A — IOC Lifecycle Management Procedure

*This appendix describes the end-to-end lifecycle for IOC management from ingestion to retirement.*

| Stage | Description | Responsible | Timeframe |
|---|---|---|---|
| Ingestion | IOC received and registered | TI Analyst | Immediate upon receipt |
| Validation | IOC verified against enrichment sources | TI Analyst | Within [X] hours of receipt |
| Deployment | Detection rule or block deployed | SOC / Network Ops | Per priority classification |
| Monitoring | Active monitoring for hits | SOC | Ongoing |
| Review | Periodic review of IOC age and ongoing relevance | TI Analyst | Monthly |
| Expiry | IOC aged out after [X] days without a confirmed hit; detection rule retired | TI Analyst | Per review cycle |
| Archival | IOC record retained in log for minimum [X] years | TI Analyst | Per retention schedule |

### Appendix B — IOC Severity Rating Criteria

*This appendix provides detailed criteria for assigning severity ratings to individual IOCs.*

| Severity | Criteria | Example |
|---|---|---|
| **Critical** | IOC directly observed in active attack against [Organization Name] or confirmed associated with critical infrastructure targeting | C2 IP from confirmed ransomware attack on local bank |
| **High** | IOC associated with a known advanced persistent threat (APT) group targeting Malaysian financial sector | Domain used by APT group known to target SWIFT infrastructure |
| **Medium** | IOC associated with broad campaigns affecting the financial sector regionally or globally | Phishing domain used in eFraud campaign across ASEAN |
| **Low** | IOC of general cybercriminal activity not specifically targeting the financial sector | Generic malware distribution URL |
| **Informational** | IOC for awareness only; no current operational relevance | IOC from expired campaign; included for historical completeness |

### Appendix C — TLP Handling Quick Reference Card

*This appendix provides a condensed handling guide for operational staff.*

| TLP Level | Who Can Receive It | Who Can Share It | Storage Requirement |
|---|---|---|---|
| TLP:CLEAR | Anyone | Anyone | Standard systems |
| TLP:GREEN | Community members (financial sector) | Within community | Access-controlled |
| TLP:AMBER | [Organization Name] + named partners | Not without explicit permission | Access-controlled |
| TLP:AMBER+STRICT | [Organization Name] internal only | Not shareable | Strictly access-controlled |
| TLP:RED | Named individuals only | Not shareable | Highest restriction; named-user access only |

### Appendix D — Integration with NACSA TISP

*[To be completed by the Threat Intelligence Analyst upon onboarding to the NACSA TISP. Include API endpoint details, authentication method, feed subscription list, and escalation contact details for NACSA.]*

| Item | Details |
|---|---|
| TISP Platform URL | [Platform URL — restricted; do not publish] |
| Integration Method | [API / TAXII Feed / Manual Portal] |
| Feed Subscriptions Active | [List of subscribed feed identifiers] |
| NACSA Point of Contact | [Name, Role, Contact Details] |
| Escalation Contact (24/7) | [NACSA Emergency Contact] |
| Last Integration Test Date | [DD MMM YYYY] |
| Next Integration Test Date | [DD MMM YYYY] |

### Appendix E — Change Log for Log Template

*Record changes to this template document (as distinct from changes to individual log entries).*

| Version | Date | Changed By | Description of Change |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Name] | Initial template created |
| [X.X] | [DD MMM YYYY] | [Name] | [Description] |

---

*End of Document — [Organization Name] Threat Intelligence Log — Version 1.0 — Confidential*