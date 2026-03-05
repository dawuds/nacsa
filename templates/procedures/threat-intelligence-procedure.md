# Threat Intelligence Handling Procedure

---

| **Field** | **Details** |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Threat Intelligence Analyst |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Semi-annual from Effective Date] |
| **Approved By** | [Approved By — CISO / Head of Cybersecurity] |
| **Department** | [Department Name — e.g., Cybersecurity Operations] |

---

> **Document Control Notice:** This document is classified **Confidential**. It must not be distributed outside [Organization Name] without prior written approval from the document owner. All printed copies are uncontrolled. Refer to the document management system for the current version.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Definitions and Acronyms](#4-definitions-and-acronyms)
5. [Threat Intelligence Feed Integration (TISP)](#5-threat-intelligence-feed-integration-tisp)
6. [Traffic Light Protocol (TLP) Handling Requirements](#6-traffic-light-protocol-tlp-handling-requirements)
7. [Indicator of Compromise (IOC) Ingestion and Validation](#7-indicator-of-compromise-ioc-ingestion-and-validation)
8. [Detection Rule Creation from Intelligence](#8-detection-rule-creation-from-intelligence)
9. [Sector Working Group Participation](#9-sector-working-group-participation)
10. [Intelligence Sharing Obligations](#10-intelligence-sharing-obligations)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Performance Metrics and Reporting](#12-performance-metrics-and-reporting)
13. [Exceptions and Escalation](#13-exceptions-and-escalation)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

This procedure establishes the formal process by which [Organization Name] receives, processes, assesses, and acts upon cyber threat intelligence (CTI) originating from the National Cyber Security Agency (NACSA), sector leads, the financial sector information sharing community, and approved external sources. It ensures that threat intelligence is systematically integrated into security operations, enriching detection capabilities and enabling timely, proportionate defensive action.

This document supports [Organization Name]'s obligations as a **Critical Information Infrastructure (CII) entity** under **Section 25** of the **Cyber Security Act 2024 (Act 854)**, which mandates the reporting of cybersecurity incidents to NACSA, and under **Section 18**, which governs the cybersecurity requirements and directives that CII owners must comply with. By following this procedure, [Organization Name] demonstrates active participation in the national cybersecurity ecosystem and exercises due diligence in protecting the financial system from emerging threats.

---

## 2. Scope

### 2.1 In Scope

This procedure applies to:

- All cyber threat intelligence received from NACSA, BNM's Financial Sector Cybersecurity Operations Centre (FSCOC), sector working groups, and approved commercial threat intelligence service providers (TISPs).
- All personnel involved in processing, actioning, or disseminating threat intelligence, including the Security Operations Centre (SOC), Threat Intelligence team, Incident Response team, and Vulnerability Management team.
- All technology platforms used to ingest, store, correlate, or distribute threat intelligence, including the Threat Intelligence Platform (TIP), Security Information and Event Management (SIEM) system, and endpoint protection tools.
- Intelligence relating to the financial sector, including banking trojans, payment system fraud campaigns, ransomware targeting critical services, and nation-state activity directed at Malaysian institutions.

### 2.2 Out of Scope

- Physical security intelligence not linked to a cyber vector.
- Open-source intelligence (OSINT) gathered for non-operational research purposes that does not result in actionable artefacts.
- Fraud intelligence managed exclusively by the Financial Crime Compliance function with no cybersecurity nexus.

### 2.3 Applicability

This procedure applies to all employees, contractors, managed service providers, and third-party vendors of [Organization Name] who handle threat intelligence in any capacity. Compliance is **mandatory**.

---

## 3. Regulatory and Policy Framework

*This section enumerates the statutory requirements, regulatory guidelines, and internal policies that this procedure is designed to fulfil. Authors should verify the current versions of all cited instruments before finalising this document.*

### 3.1 Statutory Obligations

| **Instrument** | **Relevant Provision** | **Obligation** |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Compliance with cybersecurity directives and requirements issued by NACSA to CII owners, including intelligence integration mandates |
| Cyber Security Act 2024 (Act 854) | Section 25 | Mandatory reporting of cybersecurity incidents to NACSA; intelligence sharing in support of national incident response |
| Personal Data Protection Act 2010 (Act 709) | Section 5, Principle 4 | Ensuring personal data embedded within threat intelligence artefacts (e.g., victim IP addresses, email addresses) is processed lawfully and securely |
| Financial Services Act 2013 (Act 758) | Section 47, 57 | BNM's power to issue standards; institutions' obligation to maintain sound risk management |

### 3.2 Regulatory Guidelines

| **Guideline** | **Issuing Authority** | **Relevance** |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Section 10 (Cyber Risk Management), para 10.78–10.81: threat intelligence and information sharing requirements |
| NACSA Cybersecurity Directives (as issued) | NACSA | Sector-specific directives on intelligence handling and reporting timelines |
| CISA Cyber Information Sharing and Collaboration Program (CISCP) | CISA (reference only) | Best practice reference for structured intelligence sharing |

### 3.3 Internal Policies

| **Internal Policy / Standard** | **Document ID** | **Relationship** |
|---|---|---|
| Information Security Policy | [Policy ID] | Parent policy governing all security controls |
| Incident Response Procedure | [Procedure ID] | Triggered when threat intelligence identifies active compromise |
| Vulnerability Management Procedure | [Procedure ID] | Receives threat intelligence on exploitable CVEs and attack paths |
| Data Classification and Handling Standard | [Standard ID] | Governs handling of TLP-classified intelligence |
| Third-Party Risk Management Policy | [Policy ID] | Governs engagement with commercial TISPs |

---

## 4. Definitions and Acronyms

*This section provides a common vocabulary for all personnel using this procedure. Definitions should align with those used by NACSA and the broader Malaysian cybersecurity regulatory community.*

### 4.1 Definitions

| **Term** | **Definition** |
|---|---|
| **Threat Intelligence (CTI)** | Evidence-based knowledge about an existing or emerging threat or hazard to assets, including context, mechanisms, indicators, implications, and action-oriented advice |
| **Indicator of Compromise (IOC)** | Observable artefacts that indicate a system has been compromised (e.g., malicious IP addresses, domain names, file hashes, URLs) |
| **Traffic Light Protocol (TLP)** | A globally recognised information-sharing framework that uses colour codes to indicate how broadly information may be shared |
| **Threat Intelligence Platform (TIP)** | [Platform Name — e.g., MISP / OpenCTI / Anomali ThreatStream] used to aggregate, correlate, and operationalise threat intelligence |
| **TISP** | Threat Intelligence Service Provider — a commercial or government entity providing structured intelligence feeds |
| **CII** | Critical Information Infrastructure, as designated under Section 4 of the Cyber Security Act 2024 |
| **STIX** | Structured Threat Information Expression — a standardised language for describing cyber threat information |
| **TAXII** | Trusted Automated Exchange of Intelligence Information — a transport protocol for sharing STIX content |
| **TTP** | Tactics, Techniques, and Procedures — adversary behaviour categorised under the MITRE ATT&CK framework |
| **SIEM** | Security Information and Event Management platform |
| **SOC** | Security Operations Centre |
| **FSCOC** | Financial Sector Cybersecurity Operations Centre (BNM) |

### 4.2 Acronyms

| **Acronym** | **Expansion** |
|---|---|
| NACSA | National Cyber Security Agency |
| BNM | Bank Negara Malaysia |
| CTI | Cyber Threat Intelligence |
| IOC | Indicator of Compromise |
| TLP | Traffic Light Protocol |
| TIP | Threat Intelligence Platform |
| TISP | Threat Intelligence Service Provider |
| MITRE ATT&CK | MITRE Adversarial Tactics, Techniques, and Common Knowledge |
| STIX/TAXII | Structured Threat Information Expression / Trusted Automated Exchange of Intelligence Information |

---

## 5. Threat Intelligence Feed Integration (TISP)

*This section describes how [Organization Name] establishes, maintains, and operationalises connections to approved threat intelligence feeds. Authors should document all approved feeds, their integration mechanisms, and the responsible parties for each feed.*

### 5.1 Approved Intelligence Sources

[Organization Name] shall maintain an approved list of threat intelligence sources. All new sources must be evaluated and approved by the Threat Intelligence Analyst and the CISO before integration.

| **Source** | **Type** | **Delivery Mechanism** | **Feed Format** | **Frequency** | **Status** |
|---|---|---|---|---|---|
| NACSA — National Threat Intelligence Platform | Government | [API / TAXII / Email] | STIX 2.1 / PDF | [Real-time / Daily] | [Active] |
| BNM FSCOC | Sector Lead | [Secure Portal / Email] | [STIX / CSV / PDF] | [As issued] | [Active] |
| [TISP Name — e.g., Recorded Future] | Commercial | TAXII / REST API | STIX 2.1 | Real-time | [Active / Pending] |
| [TISP Name — e.g., Mandiant Advantage] | Commercial | API | STIX 2.1 / JSON | Daily | [Active / Pending] |
| Financial ISAC (FS-ISAC) | Sector ISAC | TAXII / Secure Portal | STIX 2.1 | Real-time | [Active / Pending] |
| [Open-Source Feed — e.g., MISP Communities] | Open Source | MISP API / TAXII | STIX 2.1 | [Daily] | [Active] |

### 5.2 Feed Integration Architecture

*Describe the technical architecture for receiving and processing intelligence feeds, including the Threat Intelligence Platform (TIP) and its integration with downstream systems such as the SIEM, firewall, and endpoint protection.*

- **Primary TIP:** [Platform Name and Version — e.g., MISP v2.4 / OpenCTI]
- **SIEM Integration:** Intelligence enriches [SIEM Platform Name] detection rules and lookup tables via [integration method].
- **Firewall / Proxy Integration:** High-confidence IOCs are automatically propagated to [Firewall / Proxy Platform] block lists upon validation.
- **Endpoint Detection Integration:** IOC hashes and behavioural signatures are pushed to [EDR Platform Name].

### 5.3 Feed Onboarding Procedure

New TISP feeds shall be onboarded following the steps below:

1. **Request:** Threat Intelligence Analyst submits a TISP Onboarding Request to the CISO and Procurement team.
2. **Due Diligence:** Third-party risk assessment is conducted in accordance with [Third-Party Risk Management Policy — Document ID].
3. **Legal Review:** Contract and data processing terms are reviewed by the Legal team to ensure compliance with Act 709 (PDPA) and Act 854.
4. **Technical Integration:** The feed is integrated into the TIP in a staging environment and tested for data quality and format compatibility.
5. **Approval:** CISO formally approves the feed for production use.
6. **Registration:** Feed is added to the Approved Intelligence Sources table above and documented in the TIP.

### 5.4 Feed Health Monitoring

- Automated feed health checks shall be conducted every **[24 hours / configurable interval]**.
- Alerts shall be raised if a feed has not delivered new data within **[48 hours / configurable threshold]** of the expected delivery schedule.
- Feed quality metrics (volume, relevance score, false positive rate) shall be reviewed **monthly** by the Threat Intelligence Analyst.

---

## 6. Traffic Light Protocol (TLP) Handling Requirements

*This section specifies how [Organization Name] handles intelligence classified under the Traffic Light Protocol (TLP). All personnel who handle threat intelligence must be familiar with and adhere to these requirements.*

### 6.1 TLP Framework Overview

[Organization Name] adopts TLP version **2.0** as the standard for classifying and handling shared threat intelligence, consistent with NACSA guidelines and international best practice.

| **TLP Label** | **Colour** | **Distribution Permitted** | **Handling Requirements** |
|---|---|---|---|
| **TLP:RED** | Red | Recipients only — no further sharing | Must be handled on need-to-know basis; not to be shared beyond named recipients; not to be stored in shared systems; encrypted transmission required |
| **TLP:AMBER** | Amber | Limited sharing within the organisation and affiliates on need-to-know basis | Restricted to internal teams with operational need; may be shared with vetted third parties (e.g., managed SOC) with explicit source consent |
| **TLP:AMBER+STRICT** | Amber + Strict | Recipient's organisation only — no further sharing | Cannot be shared beyond [Organization Name] internal teams; stricter than TLP:AMBER |
| **TLP:GREEN** | Green | Community-wide sharing permitted | May be shared with peers in the Malaysian financial sector; not for public release |
| **TLP:CLEAR** | White/Clear | Unrestricted | No restriction on distribution; may be published publicly |

### 6.2 Handling Procedures by TLP Level

#### 6.2.1 TLP:RED

- Intelligence shall be delivered only to **named recipients** specified by the originating organisation.
- Analysts must acknowledge receipt and confirm the named recipient has received the intelligence directly.
- TLP:RED intelligence shall **not** be entered into shared platforms (TIP, SIEM) unless the TIP has access controls restricting visibility to named recipients only.
- Physical documents bearing TLP:RED shall be stored in [locked cabinet / secure location] and destroyed by cross-cut shredding when no longer required.
- Retention period: [90 days / as specified by source], after which the intelligence owner must review and confirm continued retention or arrange for secure disposal.

#### 6.2.2 TLP:AMBER and TLP:AMBER+STRICT

- May be ingested into the TIP with access restricted to the **Threat Intelligence team and designated SOC personnel**.
- Before sharing with a managed SOC provider or other third party, the Threat Intelligence Analyst must confirm the originator permits such sharing.
- IOCs derived from TLP:AMBER intelligence may be operationalised in detection systems, provided the intelligence itself is not exposed to unauthorised parties.

#### 6.2.3 TLP:GREEN

- May be shared across [Organization Name] and with **vetted peers** within the Malaysian financial sector cybersecurity community.
- Must not be published on public forums, social media, or externally facing platforms.

#### 6.2.4 TLP:CLEAR

- No restriction on sharing or publication.
- May be used in public-facing security advisories, awareness materials, or shared with customers where appropriate.

### 6.3 Reclassification

- TLP labels shall **not** be downgraded without explicit written consent of the originating organisation.
- Requests to reclassify intelligence shall be submitted by the Threat Intelligence Analyst to the originating organisation via [documented communication channel].
- All reclassification events shall be logged in [TIP / Document Management System].

---

## 7. Indicator of Compromise (IOC) Ingestion and Validation

*This section describes the end-to-end process for receiving, validating, enriching, and operationalising Indicators of Compromise. Authors should adapt the scoring thresholds and tooling references to match the organization's specific environment.*

### 7.1 IOC Types

[Organization Name] ingests and validates the following IOC types:

| **IOC Type** | **Examples** | **Primary Use** |
|---|---|---|
| IP Address (IPv4/IPv6) | Malicious C2 IPs, scanning IPs | Firewall block, SIEM alerting |
| Domain / FQDN | Phishing domains, C2 domains | DNS sinkholing, proxy blocking |
| URL | Malware download URLs, phishing pages | Proxy blocking, email filtering |
| File Hash (MD5, SHA-1, SHA-256) | Malware samples, ransomware binaries | EDR blocking, AV signatures |
| Email Address | Phishing sender addresses | Email gateway filtering |
| Registry Key | Persistence mechanism keys | EDR detection rules |
| YARA Rule | Malware family signatures | Endpoint / network detection |
| Sigma Rule | SIEM detection logic | SIEM detection rules |
| MITRE ATT&CK TTP | Technique IDs (e.g., T1566) | Threat hunt, detection engineering |

### 7.2 IOC Ingestion Workflow

```
[Intelligence Source] → [TIP Ingestion] → [Automated Deduplication] → [Enrichment] → [Validation & Scoring] → [Operationalisation] → [Review & Expiry]
```

**Step 1 — Ingestion:** IOCs are automatically ingested from approved feeds via STIX/TAXII or API into the TIP. Manual IOC submission is permitted via the [TIP Portal / designated submission form].

**Step 2 — Deduplication:** The TIP automatically deduplicates IOCs against the existing database. Duplicate IOCs increment the sighting count and update the last-seen timestamp.

**Step 3 — Enrichment:** Each IOC is automatically enriched using:

- [Threat intelligence enrichment tool — e.g., VirusTotal, Shodan, WHOIS] for reputation and context.
- Internal telemetry from the SIEM to determine if the IOC has been observed in [Organization Name]'s environment.
- MITRE ATT&CK mapping where applicable.

**Step 4 — Validation and Scoring:** The Threat Intelligence Analyst assigns a confidence score to each IOC:

| **Confidence Level** | **Score** | **Criteria** | **Action** |
|---|---|---|---|
| High | 75–100 | Multiple independent sources confirm; recent (< 30 days); context-rich | Immediate operationalisation |
| Medium | 50–74 | Single credible source; partially corroborated; moderately recent | Operationalise with monitoring |
| Low | 25–49 | Single unverified source; aged (30–90 days); limited context | Watchlist only; do not auto-block |
| Informational | 0–24 | Unverified; historical; insufficient context | Retain for research; no action |

**Step 5 — Operationalisation:** Validated IOCs are pushed to downstream systems based on confidence level (see Section 8).

**Step 6 — Review and Expiry:** IOCs are reviewed at the following intervals and expired if no longer relevant:

| **IOC Type** | **Default Expiry Period** | **Review Trigger** |
|---|---|---|
| IP Address | 30 days | Re-sighting, new intelligence |
| Domain / URL | 90 days | Re-sighting, WHOIS change |
| File Hash | 12 months | Re-sighting |
| Email Address | 90 days | Re-sighting |
| YARA / Sigma Rule | Reviewed at each semi-annual procedure review | Major change to malware family |

### 7.3 False Positive Management

- Any analyst may flag an IOC as a suspected false positive via the TIP tagging mechanism.
- The Threat Intelligence Analyst shall investigate and resolve suspected false positives within **[24 / 48] business hours** of flagging.
- Confirmed false positives shall be removed from active block lists immediately and the originating source notified where a sharing relationship exists.
- False positive rates per feed shall be tracked and reviewed monthly. Feeds with a sustained false positive rate exceeding **[X%]** shall be subject to a quality review and may be suspended.

---

## 8. Detection Rule Creation from Intelligence

*This section governs the process by which actionable threat intelligence — TTPs, IOCs, YARA rules, and Sigma rules — is translated into operational detection logic within [Organization Name]'s security tooling. Authors should align this section with the Detection Engineering process if one exists.*

### 8.1 Intelligence-to-Detection Lifecycle

The lifecycle for converting threat intelligence into detection rules follows four phases:

| **Phase** | **Activity** | **Owner** | **Timeframe** |
|---|---|---|---|
| **Triage** | Review new intelligence; assess applicability to [Organization Name]'s environment and sector threat landscape | Threat Intelligence Analyst | Within [24] hours of receipt |
| **Design** | Map TTPs to MITRE ATT&CK; identify log sources; draft detection logic (Sigma / KQL / SPL) | Detection Engineer / Threat Intelligence Analyst | Within [5] business days |
| **Test** | Deploy rule in detection-only mode; validate against known-good traffic; tune to reduce false positives | SOC Analyst / Detection Engineer | [5–10] business days |
| **Deploy** | Promote rule to production; document in detection rule registry | SOC Lead / Threat Intelligence Analyst | Following successful testing |

### 8.2 Detection Rule Standards

All detection rules created from threat intelligence shall conform to the following standards:

- **Format:** Sigma (platform-agnostic), converted to native query language ([KQL for Microsoft Sentinel / SPL for Splunk / [Platform Language]]).
- **Metadata:** Each rule must include: Rule ID, name, description, author, date created, date modified, TLP level of source intelligence, MITRE ATT&CK technique mapping, severity, and false positive guidance.
- **Versioning:** Rules are version-controlled in [Git repository / rule management system].
- **Review:** Rules are reviewed at least **semi-annually** or when the underlying threat intelligence expires or is updated.

### 8.3 Rule Registry

A centrally maintained Detection Rule Registry shall be maintained in [tool/location — e.g., Git repository / TIP / SIEM]. The registry shall include:

| **Rule ID** | **Rule Name** | **MITRE ATT&CK Technique** | **Source Intelligence** | **Severity** | **Platform** | **Status** | **Expiry Date** |
|---|---|---|---|---|---|---|---|
| [Rule ID] | [Rule Name] | [e.g., T1566.001 — Spearphishing Attachment] | [Feed Name / NACSA Advisory] | [Critical / High / Medium / Low] | [SIEM Platform] | [Active / Deprecated] | [Date] |

### 8.4 Priority Escalation

Detection rules derived from intelligence assessed as **High Confidence** and linked to **active campaigns targeting the Malaysian financial sector** shall be treated as **priority deployments** with the following accelerated timelines:

- Triage: **within 4 hours**
- Design and Test: **within 24 hours** (abbreviated testing with senior analyst sign-off)
- Deploy: **immediately upon sign-off**

---

## 9. Sector Working Group Participation

*This section establishes [Organization Name]'s obligations and procedures for participating in sector-level threat intelligence sharing forums, including NACSA-facilitated working groups and BNM-coordinated financial sector information sharing initiatives.*

### 9.1 Approved Working Groups and Forums

| **Working Group / Forum** | **Facilitator** | **Cadence** | **[Organization Name] Representative** | **Classification** |
|---|---|---|---|---|
| NACSA CII Sector Working Group — Financial Services | NACSA | [Monthly / Quarterly] | [Designated Representative — Threat Intelligence Analyst / CISO] | TLP:AMBER |
| BNM FSCOC Intelligence Sharing Forum | BNM | [Monthly] | [Designated Representative] | TLP:AMBER |
| FS-ISAC APAC Working Group | FS-ISAC | [Monthly] | [Designated Representative] | TLP:GREEN / AMBER |
| [Other Sector Forum] | [Facilitator] | [Cadence] | [Representative] | [TLP Level] |

### 9.2 Participation Obligations

[Organization Name]'s participation in sector working groups shall include:

- **Regular Attendance:** The designated representative must attend a minimum of **[X%]** of scheduled sessions. Absences must be communicated to the facilitator in advance, and an alternate representative must be designated where possible.
- **Intelligence Contribution:** [Organization Name] shall contribute anonymised and appropriately TLP-labelled threat intelligence to working group sessions, in accordance with the intelligence sharing obligations in Section 10.
- **Action Item Tracking:** All action items arising from working group sessions shall be logged, assigned, and tracked to closure by the Threat Intelligence Analyst within the timelines specified by the working group facilitator.
- **Incident Notification:** Where [Organization Name] becomes aware of an active incident with potential sector-wide impact, the designated representative shall notify the working group facilitator within the timelines specified in the Incident Response Procedure ([Procedure ID]).

### 9.3 Working Group Session Management

- **Pre-session:** The Threat Intelligence Analyst shall prepare a briefing note summarising recent intelligence, incidents, and [Organization Name]'s planned contributions at least **[3] business days** before each session.
- **Post-session:** The Threat Intelligence Analyst shall circulate a session debrief to internal stakeholders (CISO, SOC Lead, Head of Risk) within **[2] business days** of each session, summarising intelligence received, action items, and any sector alerts.
- **Records Retention:** Session records, materials received, and debrief notes shall be retained for **[3 years]** in accordance with [Organization Name]'s records management policy.

---

## 10. Intelligence Sharing Obligations

*This section describes [Organization Name]'s obligations to share threat intelligence with NACSA, sector peers, and BNM, including the mandatory reporting requirements under Act 854 and the conditions under which intelligence may be shared.*

### 10.1 Mandatory Reporting to NACSA (Act 854, Section 25)

As a designated CII entity, [Organization Name] is required to report cybersecurity incidents to NACSA in accordance with Section 25 of the Cyber Security Act 2024. Where an incident has been identified or confirmed through threat intelligence, the following applies:

| **Incident Severity** | **Initial Notification Deadline** | **Full Report Deadline** | **Notification Channel** |
|---|---|---|---|
| Critical (CII Impact) | **Within 6 hours** of detection | **Within 14 days** | NACSA MySeCure Portal / [hotline] |
| High | **Within 24 hours** of detection | **Within 30 days** | NACSA MySeCure Portal |
| Medium | **Within 72 hours** of detection | **Within 30 days** | NACSA MySeCure Portal |
| Low / Informational | As part of monthly summary | Monthly | NACSA MySeCure Portal |

### 10.2 Proactive Intelligence Sharing

Beyond mandatory incident reporting, [Organization Name] is committed to proactive intelligence sharing with the sector community, subject to the following conditions:

- Intelligence shall only be shared with **approved recipients** listed in the Approved Working Groups table (Section 9.1) or parties explicitly approved by the CISO.
- All shared intelligence must be **TLP-labelled** in accordance with Section 6.
- Intelligence that includes **personal data** (as defined under Act 709) must be anonymised or pseudonymised before sharing, unless a lawful basis for sharing personal data exists and has been documented.
- Intelligence originating from **commercial TISPs** may only be shared externally if the TISP contract permits redistribution. The Threat Intelligence Analyst must confirm redistribution rights before sharing.

### 10.3 Intelligence Sharing Workflow

1. **Identify** intelligence with potential sector-wide relevance.
2. **Assess** TLP classification and redistribution rights.
3. **Anonymise / Sanitise** personal data and proprietary internal references.
4. **Label** with appropriate TLP designation.
5. **Submit** to the relevant forum, portal, or recipient.
6. **Log** the sharing event in the intelligence sharing log ([TIP / Document Management System]).

### 10.4 Intelligence Sharing Log

All outbound intelligence sharing events shall be recorded:

| **Date** | **Intelligence ID / Reference** | **TLP Level** | **Recipient / Forum** | **Approved By** | **Redistribution Rights Confirmed** | **Notes** |
|---|---|---|---|---|---|---|
| [Date] | [Intel Ref] | [TLP Level] | [Recipient] | [Approver] | [Yes / No] | [Notes] |

---

## 11. Roles and Responsibilities

*This RACI table defines accountability for key activities in this procedure. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| **Activity** | **CISO** | **Threat Intelligence Analyst** | **SOC Lead** | **SOC Analyst** | **Detection Engineer** | **Incident Response Lead** | **Legal / Compliance** |
|---|---|---|---|---|---|---|---|
| Approve intelligence sources and TISPs | A | R | C | I | I | I | C |
| Manage TISP feed integrations | I | R/A | C | I | C | I | I |
| Monitor feed health | I | R | C | R | I | I | I |
| Triage incoming intelligence | I | R/A | C | C | I | I | I |
| Validate and score IOCs | I | R/A | C | C | I | I | I |
| Manage false positives | C | A | R | R | C | I | I |
| Create detection rules from intelligence | I | C | A | I | R | I | I |
| Deploy detection rules to production | C | C | A | I | R | I | I |
| Represent organisation at sector working groups | C | R/A | I | I | I | I | I |
| Prepare working group briefing notes | I | R/A | C | I | I | I | I |
| Submit intelligence sharing to forums | C | R/A | I | I | I | I | C |
| Report incidents to NACSA (s25) | A | R | C | C | I | R | C |
| Review and approve shared intelligence (TLP compliance) | A | R | I | I | I | I | C |
| Anonymise intelligence before sharing (PDPA compliance) | C | R | I | I | I | I | A |
| Review and update this procedure (semi-annual) | A | R | C | I | C | I | C |
| Approve procedure updates | A | I | I | I | I | I | I |

---

## 12. Performance Metrics and Reporting

*This section defines the key performance indicators (KPIs) used to measure the effectiveness of the Threat Intelligence Handling Procedure. Authors should set target values appropriate to the organisation's maturity and resource level.*

### 12.1 Key Performance Indicators

| **KPI** | **Description** | **Target** | **Reporting Frequency** | **Data Source** |
|---|---|---|---|---|
| Mean Time to Triage (MTTT) | Average time from intelligence receipt to triage completion | < [24] hours | Monthly | TIP |
| IOC Validation Rate | Percentage of ingested IOCs successfully validated | > [90]% | Monthly | TIP |
| False Positive Rate | Percentage of IOCs identified as false positives | < [5]% | Monthly | TIP / SIEM |
| Detection Rule Deployment Time | Average time from intelligence receipt to production rule deployment | < [10] business days | Monthly | Rule Registry |
| Feed Coverage | Number of active approved intelligence feeds | > [X] feeds | Quarterly | Feed Registry |
| Working Group Attendance Rate | Percentage of sessions attended | > [80]% | Quarterly | Session Records |
| NACSA Reporting Compliance | Percentage of reportable incidents notified within the mandated timeframe | 100% | Quarterly | Incident Register |
| Intelligence Sharing Contributions | Number of intelligence artefacts shared with sector per period | > [X] per quarter | Quarterly | Sharing Log |

### 12.2 Reporting

- A **monthly Threat Intelligence Operations Report** shall be prepared by the Threat Intelligence Analyst and submitted to the CISO and SOC Lead. The report shall include KPI performance, feed health, notable intelligence received, detection rules deployed, and any sharing activities.
- A **quarterly summary** shall be included in the broader Cybersecurity Operations Report submitted to [Governance Committee — e.g., Risk Management Committee / Board Risk Committee].

---

## 13. Exceptions and Escalation

### 13.1 Exceptions

Any deviation from this procedure must be:

1. Documented in writing by the requesting party with a clear justification.
2. Reviewed and approved in writing by the CISO.
3. Recorded in the Exceptions Register ([Document Management System / GRC Platform]).
4. Time-limited, with a defined expiry date and remediation plan.

Exceptions shall not be granted for mandatory NACSA reporting obligations under Section 25 of Act 854.

### 13.2 Escalation Path

| **Situation** | **Escalation To** | **Timeframe** |
|---|---|---|
| High-confidence IOC indicating active compromise in [Organization Name]'s environment | SOC Lead → Incident Response Lead → CISO | Immediate |
| Intelligence indicating imminent sector-wide threat | CISO → BNM FSCOC / NACSA | Within [2] hours |
| TISP feed failure exceeding [48] hours | CISO; TISP Account Manager | Within [4] hours of detection |
| Suspected data breach within intelligence data | CISO → Legal / Compliance → DPO | Within [2] hours |
| Disagreement on IOC confidence score | SOC Lead for adjudication | Within [24] hours |

---

## 14. Review and Approval

### 14.1 Review Schedule

This procedure shall be reviewed **semi-annually** (every six months) from the effective date, or earlier if triggered by:

- A significant change to the regulatory framework (Act 854, NACSA directive, BNM RMiT update).
- A material change to [Organization Name]'s threat intelligence tooling, TISP portfolio, or working group memberships.
- A major cybersecurity incident that exposes gaps in the procedure.
- A recommendation from an internal or external audit.

### 14.2 Version History

| **Version** | **Date** | **Author** | **Summary of Changes** |
|---|---|---|---|
| 1.0 | [Effective Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 14.3 Approval Sign-Off

| **Role** | **Name** | **Signature** | **Date** |
|---|---|---|---|
| Threat Intelligence Analyst (Author) | [Name] | | [Date] |
| SOC Lead (Reviewer) | [Name] | | [Date] |
| Head of Cybersecurity / CISO (Approver) | [Name] | | [Date] |
| Chief Risk Officer (Endorser) | [Name] | | [Date] |
| Head of Compliance (Endorser) | [Name] | | [Date] |

---

## 15. References

The following regulatory instruments, standards, and guidance documents are referenced in this procedure:

| **Reference** | **Title** | **Issuing Body** | **Relevant Section(s)** |
|---|---|---|---|
| Act 854 | Cyber Security Act 2024 | Parliament of Malaysia | Section 18 (Cybersecurity requirements and directives for CII owners); Section 25 (Mandatory incident reporting to NACSA) |
| Act 709 | Personal Data Protection Act 2010 | Parliament of Malaysia | Section 5 (Personal Data Protection Principles); Principle 4 (Security) |
| Act 758 | Financial Services Act 2013 | Parliament of Malaysia | Section 47, 57 |
| RMiT | Risk Management in Technology Policy Document | Bank Negara Malaysia | Para 10.78–10.81 (Cyber threat intelligence and information sharing) |
| NACSA-DIR-[XX] | [Applicable NACSA Directive Title] | NACSA | [Relevant provision] |
| MITRE ATT&CK | MITRE ATT&CK Framework v[14] | MITRE Corporation | All tactics and techniques referenced in detection rules |
| FIRST TLP | Traffic Light Protocol Standard v2.0 | FIRST.Org | Full standard |
| OASIS STIX 2.1 | Structured Threat Information Expression v2.1 | OASIS | IOC format standard |
| ISO/IEC 27001:2022 | Information Security Management Systems | ISO/IEC | Annex A.5.7 (Threat intelligence) |
| ISO/IEC 27035 | Information Security Incident Management | ISO/IEC | Incident response integration |

---

## 16. Appendices

### Appendix A — TISP Feed Onboarding Request Form

*Complete this form when proposing a new threat intelligence source for integration. Submit to the Threat Intelligence Analyst for review.*

| **Field** | **Details** |
|---|---|
| Proposed Source Name | [Source Name] |
| Source Type | [Government / Commercial / Open Source / ISAC] |
| Delivery Mechanism | [TAXII / API / Email / Secure Portal] |
| Intelligence Format | [STIX 2.1 / CSV / PDF / JSON] |
| Estimated Feed Volume | [IOCs per day / reports per month] |
| Annual Cost (if applicable) | [Cost or N/A] |
| Requestor | [Name and Title] |
| Business Justification | [Description] |
| Third-Party Risk Assessment Completed | [Yes / No / In Progress] |
| Redistribution Rights | [Permitted / Restricted / TBD] |
| Date Submitted | [Date] |

---

### Appendix B — IOC Validation Checklist

*Use this checklist when manually validating IOCs prior to operationalisation.*

- [ ] IOC type correctly identified and recorded in TIP
- [ ] IOC deduplicated against existing TIP database
- [ ] Source credibility assessed and documented
- [ ] Enrichment completed (VirusTotal / Shodan / WHOIS / internal telemetry)
- [ ] MITRE ATT&CK technique(s) mapped where applicable
- [ ] TLP classification confirmed and recorded
- [ ] Confidence score assigned (High / Medium / Low / Informational)
- [ ] Expiry date set in TIP
- [ ] False positive check completed (internal IP ranges, known-good domains excluded)
- [ ] Redistribution rights confirmed (if sharing externally)
- [ ] Operationalisation decision documented and action taken

---

### Appendix C — Detection Rule Metadata Template

*All detection rules created from threat intelligence must include the following metadata fields.*

```
Rule ID:           [RULE-YYYY-NNN]
Rule Name:         [Descriptive name]
Description:       [What the rule detects and why it is significant]
Author:            [Name / Team]
Date Created:      [YYYY-MM-DD]
Date Modified:     [YYYY-MM-DD]
Source Intelligence: [Feed Name / Advisory Reference / TLP Level]
MITRE ATT&CK:      [Tactic: XX | Technique: TXXXX.XXX]
Severity:          [Critical / High / Medium / Low]
Platform:          [SIEM Platform / EDR Platform]
Query Language:    [KQL / SPL / Sigma]
False Positive Guidance: [Known false positive scenarios and tuning notes]
Expiry Date:       [YYYY-MM-DD]
Status:            [Draft / Testing / Active / Deprecated]
```

---

### Appendix D — NACSA Incident Notification Template

*Use this template as a basis for mandatory incident notifications to NACSA under Section 25 of Act 854. Refer to the NACSA MySeCure Portal for the current official submission form.*

| **Field** | **Content** |
|---|---|
| Reporting Organisation | [Organization Name] |
| CII Sector | Financial Services |
| Incident Reference | [Internal Incident ID] |
| Date / Time of Detection | [YYYY-MM-DD HH:MM MYT] |
| Incident Type | [e.g., Ransomware / Data Breach / DDoS / Unauthorised Access] |
| Affected Systems / Services | [Brief description] |
| Estimated Impact | [Description of business and operational impact] |
| Initial Containment Actions Taken | [Brief description] |
| External Assistance Required | [Yes / No — specify if yes] |
| Point of Contact | [Name / Title / Phone / Email] |
| Classification | [TLP:AMBER — for NACSA use only] |

---

### Appendix E — Intelligence Sharing Decision Tree

*Use this decision tree to determine whether intelligence may be shared and with whom before any outbound sharing activity.*

```
Is the intelligence TLP:RED?
 ├─ YES → Share only with named recipients specified by the originating organisation. Stop.
 └─ NO ↓

Is redistribution permitted by the originating source?
 ├─ NO → Do not share. Seek written consent from originating source before proceeding. Stop.
 └─ YES ↓

Does the intelligence contain personal data (as defined by Act 709)?
 ├─ YES → Anonymise / pseudonymise before sharing. Confirm lawful basis if personal data cannot be removed. ↓
 └─ NO ↓

Is the intended recipient an approved forum / organisation (see Section 9.1)?
 ├─ NO → Obtain CISO approval before sharing. Stop.
 └─ YES ↓

Apply appropriate TLP label and proceed with sharing.
Log the sharing event in the Intelligence Sharing Log (Section 10.4).
```

---

### Appendix F — Glossary of MITRE ATT&CK Tactics (Reference)

*For reference when mapping threat intelligence to detection logic. Refer to the current MITRE ATT&CK Enterprise Matrix for the full technique listing.*

| **Tactic ID** | **Tactic Name** | **Description** |
|---|---|---|
| TA0001 | Initial Access | Techniques used to gain an initial foothold in the target environment |
| TA0002 | Execution | Techniques used to run malicious code |
| TA0003 | Persistence | Techniques to maintain a foothold |
| TA0004 | Privilege Escalation | Techniques to gain higher-level permissions |
| TA0005 | Defense Evasion | Techniques to avoid detection |
| TA0006 | Credential Access | Techniques to steal credentials |
| TA0007 | Discovery | Techniques to explore the environment |
| TA0008 | Lateral Movement | Techniques to move through the environment |
| TA0009 | Collection | Techniques to gather data |
| TA0010 | Exfiltration | Techniques to steal data |
| TA0011 | Command and Control | Techniques to communicate with compromised systems |
| TA0040 | Impact | Techniques to disrupt availability or integrity |

---

*End of Document*

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential | **Owner:** Threat Intelligence Analyst | **Next Review:** [Next Review Date]