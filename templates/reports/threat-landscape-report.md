# Threat Landscape Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Threat Intelligence Analyst |
| **Organization** | [Organization Name] |
| **Reporting Period** | [Quarter, e.g., Q1 2025 — 1 January 2025 to 31 March 2025] |
| **Last Review Date** | [DD MMM YYYY] |
| **Next Review Date** | [DD MMM YYYY] |
| **Approved By** | [Approved By] |

---

> **Handling Instructions:** This document is classified **Confidential**. It is intended solely for authorised personnel within [Organization Name] and designated regulatory or oversight bodies. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. Recipients must handle this document in accordance with [Organization Name]'s Information Classification and Handling Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Sector Threat Assessment](#3-sector-threat-assessment)
4. [Active Threat Actor Profiles](#4-active-threat-actor-profiles)
5. [Emerging Attack Techniques](#5-emerging-attack-techniques)
6. [Relevant CVEs and Exploits](#6-relevant-cves-and-exploits)
7. [Recommendations for Defence](#7-recommendations-for-defence)
8. [NACSA and Sector Lead Advisories](#8-nacsa-and-sector-lead-advisories)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Threat Landscape Report provides a periodic, structured assessment of the cyber threat environment relevant to [Organization Name] as a designated National Critical Information Infrastructure (NCII) entity operating within the **[Sector Name, e.g., Financial Services / Energy / Water]** sector under the **Cyber Security Act 2024 (Act 854)**.

The report is produced in accordance with:

- **Section 25, Cyber Security Act 2024 (Act 854)** — which establishes obligations for NCII entities to assess, monitor, and respond to cyber threats affecting their sector and critical systems.
- **Section 18, Cyber Security Act 2024 (Act 854)** — which requires NCII entities to implement risk management measures commensurate with the threat environment, including the identification and treatment of emerging and active threats.

The report consolidates intelligence from internal telemetry, open-source intelligence (OSINT), sector-sharing platforms, and advisories issued by the **National Cyber Security Agency (NACSA)** and the designated **Sector Lead Agency (SLA)** for the [Sector Name] sector.

### 1.2 Scope

This report covers the following in scope areas:

- Threats targeting the **[Sector Name]** NCII sector at the national and regional level
- Cyber threats with a direct or plausible indirect impact on [Organization Name]'s NCII assets as registered under Act 854
- Threat intelligence gathered during the reporting period: **[Start Date] to [End Date]**
- Threat actors, campaigns, and techniques observed or disclosed during the reporting period

The following are **out of scope** for this report:

- Physical security threats (unless with a direct cyber nexus)
- Threats exclusively targeting sectors outside of [Sector Name]
- Incidents already formally closed and reported under separate Incident Reports

### 1.3 Regulatory Obligations

*This section maps the document to its specific legal and regulatory obligations. Authors should verify the current version of Act 854 and any NACSA subsidiary instruments or guidelines in force at the time of publication.*

| Obligation | Regulatory Reference | Requirement Summary |
|---|---|---|
| Threat assessment for NCII sector | Act 854, s25 | NCII entities must conduct periodic assessments of threats to their sector and report findings to NACSA and the Sector Lead Agency |
| Risk-based cyber security measures | Act 854, s18 | NCII entities must implement and maintain risk management measures responsive to the prevailing threat landscape |
| Notification of significant threats | Act 854, s25(2) | Material threats identified must be escalated to NACSA within prescribed timelines |
| Sector threat intelligence sharing | NACSA NCII Framework | Threat intelligence relevant to the sector must be shared through designated channels |

---

## 2. Executive Summary

*Provide a concise, management-level summary of the most significant findings from this reporting period. This section should be written last and should not exceed two pages. It must be intelligible to a non-technical senior audience including the Board, senior management, and regulators.*

### 2.1 Reporting Period Overview

| Item | Detail |
|---|---|
| **Reporting Period** | [Start Date] — [End Date] |
| **Overall Threat Level** | [Critical / High / Medium / Low] |
| **Previous Period Threat Level** | [Critical / High / Medium / Low] |
| **Trend** | [Increasing / Stable / Decreasing] |
| **Number of Active Threat Actors Tracked** | [Number] |
| **Number of High-Severity CVEs Assessed** | [Number] |
| **NACSA Advisories Reviewed** | [Number] |
| **Sector Lead Advisories Reviewed** | [Number] |

### 2.2 Key Findings

*Summarise the three to five most critical findings from this report. Each finding should reference the relevant section of the report for further detail.*

1. **[Finding 1 — Short Title]:** [One to two sentence summary. Reference: Section X.X]
2. **[Finding 2 — Short Title]:** [One to two sentence summary. Reference: Section X.X]
3. **[Finding 3 — Short Title]:** [One to two sentence summary. Reference: Section X.X]
4. **[Finding 4 — Short Title]:** [One to two sentence summary. Reference: Section X.X]
5. **[Finding 5 — Short Title]:** [One to two sentence summary. Reference: Section X.X]

### 2.3 Priority Recommendations

*List the top recommendations from Section 7, ordered by priority. Each recommendation should include an indicative action owner and target date.*

| Priority | Recommendation | Owner | Target Date |
|---|---|---|---|
| 1 — Critical | [Recommendation summary] | [Team / Role] | [DD MMM YYYY] |
| 2 — High | [Recommendation summary] | [Team / Role] | [DD MMM YYYY] |
| 3 — High | [Recommendation summary] | [Team / Role] | [DD MMM YYYY] |
| 4 — Medium | [Recommendation summary] | [Team / Role] | [DD MMM YYYY] |
| 5 — Medium | [Recommendation summary] | [Team / Role] | [DD MMM YYYY] |

---

## 3. Sector Threat Assessment

*This section provides a structured assessment of the current cyber threat environment facing the [Sector Name] NCII sector. Authors should draw on NACSA advisories, Sector Lead Agency bulletins, peer NCII entity disclosures (where permitted), and vetted OSINT sources. Assessment ratings must be applied consistently using the organization's approved threat rating methodology.*

### 3.1 Methodology

*Describe the methodology used to assess and rate threats in this report. This section ensures that the assessment is transparent, reproducible, and defensible during regulatory review.*

The threat assessment contained in this report was produced using the following methodology:

- **Intelligence Sources:** [List the intelligence sources used, e.g., NACSA Advisories, MyCERT, FS-ISAC, vendor threat intelligence feeds, internal SIEM telemetry, dark web monitoring]
- **Threat Rating Framework:** [Describe the rating framework used, e.g., a qualitative matrix based on Likelihood × Impact, or a quantitative scoring model]
- **MITRE ATT&CK Mapping:** Threat actor tactics and techniques are mapped to the **MITRE ATT&CK Framework (Enterprise)** where applicable
- **Classification of Findings:** All findings are classified in accordance with [Organization Name]'s Information Classification Policy
- **Validation Process:** Intelligence findings were validated by [Role/Team] before inclusion

#### Threat Rating Scale

| Rating | Definition |
|---|---|
| **Critical** | Imminent or active threat with high likelihood of severe impact on NCII assets; immediate action required |
| **High** | Significant threat with credible indicators of targeting or exploitation; urgent action required |
| **Medium** | Moderate threat with plausible potential for impact; action required within the quarter |
| **Low** | Limited or theoretical threat; monitor and reassess next quarter |
| **Informational** | No immediate threat; situational awareness only |

### 3.2 Overall Sector Threat Level

*Assign and justify an overall threat level for the sector based on the aggregated assessment below. This rating should be consistent with any rating communicated to NACSA or the Sector Lead Agency during the reporting period.*

**Overall Sector Threat Level for Reporting Period [Quarter, Year]: [Critical / High / Medium / Low]**

**Justification:** *[Provide a brief narrative (3–5 sentences) explaining the overall rating. Reference the primary threat drivers identified this quarter.]*

### 3.3 Threat Category Assessment

*Assess each threat category relevant to the [Sector Name] sector. For each category, provide a current-period rating, a trend indicator, and a brief narrative.*

| Threat Category | Current Rating | Trend | Key Observations |
|---|---|---|---|
| Ransomware | [Critical/High/Medium/Low] | [↑ Increasing / → Stable / ↓ Decreasing] | [Brief summary] |
| Business Email Compromise (BEC) | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| Distributed Denial of Service (DDoS) | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| Advanced Persistent Threat (APT) | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| Supply Chain Compromise | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| Phishing / Spear Phishing | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| Insider Threat | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| Data Exfiltration / Theft | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| OT/ICS/SCADA Threats | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| AI-Augmented Attacks | [Critical/High/Medium/Low] | [↑/→/↓] | [Brief summary] |
| [Additional Category] | [Rating] | [↑/→/↓] | [Brief summary] |

### 3.4 Geopolitical and Regional Context

*Describe any geopolitical factors, regional tensions, or nation-state activities during the reporting period that may influence the threat environment for Malaysian NCII entities. Reference publicly available assessments from NACSA, government agencies, or credible international sources.*

**Regional Threat Context:**

[Provide narrative assessment of regional geopolitical developments relevant to the [Sector Name] sector's threat environment during the reporting period. Include reference to any Malaysian government or NACSA statements on the threat environment.]

**Key Geopolitical Factors:**

- [Factor 1: Brief description and relevance to sector]
- [Factor 2: Brief description and relevance to sector]
- [Factor 3: Brief description and relevance to sector]

### 3.5 Sector-Specific Attack Surface

*Identify the key attack surface elements specific to [Organization Name] and the broader [Sector Name] sector. This informs the relevance of threat actor profiles and CVEs assessed later in the report.*

| Asset Category | Exposure Level | Attack Surface Notes |
|---|---|---|
| Internet-facing web applications | [High/Medium/Low] | [Brief notes on exposure] |
| Core [Sector-Specific] Systems (e.g., Core Banking, SCADA) | [High/Medium/Low] | [Brief notes] |
| Remote access infrastructure (VPN, RDP) | [High/Medium/Low] | [Brief notes] |
| Third-party and vendor connections | [High/Medium/Low] | [Brief notes] |
| Cloud services and APIs | [High/Medium/Low] | [Brief notes] |
| Operational Technology (OT) / ICS | [High/Medium/Low] | [Brief notes] |
| Mobile and endpoint devices | [High/Medium/Low] | [Brief notes] |
| Email and collaboration platforms | [High/Medium/Low] | [Brief notes] |

---

## 4. Active Threat Actor Profiles

*This section profiles threat actors assessed as actively targeting or posing a credible threat to the [Sector Name] sector during the reporting period. Profiles should be based on reliable intelligence sources and must clearly distinguish between confirmed activity and assessed or suspected activity. Authors should use MITRE ATT&CK Group identifiers where available.*

### 4.1 Threat Actor Summary

*Provide a summary table of all tracked threat actors for this reporting period before presenting individual profiles.*

| Threat Actor | Type | Origin | Primary Motivation | Sector Relevance | Current Activity Level |
|---|---|---|---|---|---|
| [Threat Actor Name / Alias] | [Nation-State / Cybercriminal / Hacktivist / Insider] | [Country/Region or Unknown] | [Financial / Espionage / Disruption / Ideological] | [High/Medium/Low] | [Active / Inactive / Unknown] |
| [Threat Actor Name / Alias] | [Type] | [Origin] | [Motivation] | [High/Medium/Low] | [Active/Inactive/Unknown] |
| [Threat Actor Name / Alias] | [Type] | [Origin] | [Motivation] | [High/Medium/Low] | [Active/Inactive/Unknown] |
| [Add rows as required] | | | | | |

### 4.2 Individual Threat Actor Profiles

*For each threat actor of High or Critical relevance to the sector, provide a full profile using the template below. Duplicate this subsection for each actor.*

---

#### 4.2.1 [Threat Actor Name / Group Alias]

| Attribute | Detail |
|---|---|
| **Known Aliases** | [List aliases, e.g., APT28, Fancy Bear, Sofacy] |
| **MITRE ATT&CK Group ID** | [e.g., G0007] |
| **Actor Type** | [Nation-State / Cybercriminal / Hacktivist / Insider] |
| **Assessed Origin** | [Country or Region, or "Unknown"] |
| **Primary Motivation** | [Financial / Espionage / Disruption / Ideological] |
| **Active Since** | [Year or "Unknown"] |
| **Current Activity Level** | [Active / Inactive / Unknown] |
| **Sector Relevance** | [High / Medium / Low] — [Brief justification] |
| **Intelligence Confidence** | [High / Medium / Low] |

**Overview:**

*[Provide a brief narrative profile of the threat actor (3–5 sentences). Include their known history of targeting Malaysian or regional [Sector Name] entities, primary objectives, and any known affiliations or sponsorship.]*

[Provide narrative here]

**Recent Activity (Reporting Period):**

*[Describe any observed or reported activity by this actor during the current reporting period. Note whether this activity was directly observed within [Organization Name]'s environment or attributed via external intelligence sources.]*

- **[Date / Period]:** [Description of activity or campaign]
- **[Date / Period]:** [Description of activity or campaign]
- **[Date / Period]:** [Description of activity or campaign]

**Known Targets in [Sector Name] Sector:**

- [Target type or named entity (if publicly disclosed)]
- [Target type or named entity]
- [Target type or named entity]

**Tactics, Techniques, and Procedures (TTPs):**

| MITRE ATT&CK Tactic | Technique ID | Technique Name | Notes |
|---|---|---|---|
| Initial Access | [e.g., T1566.001] | [e.g., Spearphishing Attachment] | [Brief notes on observed use] |
| Execution | [Technique ID] | [Technique Name] | [Notes] |
| Persistence | [Technique ID] | [Technique Name] | [Notes] |
| Privilege Escalation | [Technique ID] | [Technique Name] | [Notes] |
| Defence Evasion | [Technique ID] | [Technique Name] | [Notes] |
| Lateral Movement | [Technique ID] | [Technique Name] | [Notes] |
| Exfiltration | [Technique ID] | [Technique Name] | [Notes] |
| Impact | [Technique ID] | [Technique Name] | [Notes] |

**Indicators of Compromise (IOCs):**

*List any IOCs associated with this actor that are relevant to [Organization Name]'s environment. Classify IOCs by confidence level and ensure they are shared through appropriate channels (e.g., NACSA sector feeds, MyCERT). Refer to Appendix A for the full IOC list.*

| IOC Type | Value | Confidence | Source | First Seen | Last Seen |
|---|---|---|---|---|---|
| IP Address | [x.x.x.x] | [High/Medium/Low] | [Source] | [Date] | [Date] |
| Domain | [domain.example.com] | [High/Medium/Low] | [Source] | [Date] | [Date] |
| File Hash (SHA256) | [hash value] | [High/Medium/Low] | [Source] | [Date] | [Date] |
| Email Address | [attacker@example.com] | [High/Medium/Low] | [Source] | [Date] | [Date] |
| [IOC Type] | [Value] | [Confidence] | [Source] | [Date] | [Date] |

**Defensive Recommendations:**

- [Specific defensive measure targeting this actor's known TTPs]
- [Specific defensive measure]
- [Specific defensive measure]

---

#### 4.2.2 [Threat Actor Name / Group Alias]

*[Repeat the profile structure from Section 4.2.1 for each additional high-relevance threat actor.]*

---

### 4.3 Threat Actor Comparison Matrix

*Provide a comparative view of all tracked threat actors to assist prioritisation of defensive investments.*

| Threat Actor | Sophistication | Resources | Intent to Target Sector | Capability | Overall Risk to [Organization Name] |
|---|---|---|---|---|---|
| [Actor 1] | [High/Med/Low] | [High/Med/Low] | [Confirmed/Suspected/Unknown] | [High/Med/Low] | [Critical/High/Med/Low] |
| [Actor 2] | [High/Med/Low] | [High/Med/Low] | [Confirmed/Suspected/Unknown] | [High/Med/Low] | [Critical/High/Med/Low] |
| [Actor 3] | [High/Med/Low] | [High/Med/Low] | [Confirmed/Suspected/Unknown] | [High/Med/Low] | [Critical/High/Med/Low] |

---

## 5. Emerging Attack Techniques

*This section documents new, novel, or significantly evolved attack techniques observed or anticipated during the reporting period. Authors should distinguish between techniques observed in the wild against the [Sector Name] sector and those observed in other sectors or regions that may migrate to affect Malaysian NCII entities.*

### 5.1 Technique Overview

*Summarise all emerging techniques assessed during the reporting period before providing detailed entries.*

| Technique Name | MITRE ATT&CK ID | Category | Sector Impact Potential | First Observed | Confidence |
|---|---|---|---|---|---|
| [Technique Name] | [T-ID or "Novel — not yet catalogued"] | [Category] | [Critical/High/Medium/Low] | [Date or Period] | [High/Medium/Low] |
| [Technique Name] | [T-ID] | [Category] | [Critical/High/Medium/Low] | [Date or Period] | [High/Medium/Low] |
| [Add rows as required] | | | | | |

### 5.2 Detailed Technique Analysis

*For each emerging technique assessed as High or Critical impact, provide a detailed analysis using the template below. Duplicate this subsection for each technique.*

---

#### 5.2.1 [Technique Name]

| Attribute | Detail |
|---|---|
| **MITRE ATT&CK ID** | [Technique ID, or "Novel — pending cataloguing"] |
| **Tactic** | [Tactic, e.g., Initial Access, Execution, Lateral Movement] |
| **Category** | [e.g., Social Engineering, Exploit, Malware, Living-off-the-Land] |
| **Impact Potential** | [Critical / High / Medium / Low] |
| **First Observed** | [Date or reporting period] |
| **Associated Threat Actors** | [Actor names or "Multiple / Unknown"] |
| **Detection Availability** | [Available / Partial / Not Available] |
| **Patch/Mitigation Available** | [Yes / Partial / No] |

**Description:**

*[Provide a clear, technically accurate description of the technique (3–5 sentences). Explain how it works, what it exploits, and why it is novel or significant compared to previously known techniques.]*

[Provide description here]

**Observed Usage in the [Sector Name] Sector:**

*[Describe any observed or reported instances of this technique being used against [Sector Name] entities. If not yet observed in sector, describe where it has been observed and assess the likelihood of sector migration.]*

[Provide observed usage here]

**Attack Chain / Kill Chain Placement:**

1. **[Phase 1]:** [Description of how technique is used in this phase]
2. **[Phase 2]:** [Description]
3. **[Phase 3]:** [Description]

**Detection Opportunities:**

| Detection Point | Method | Data Source | Effectiveness |
|---|---|---|---|
| [Detection point, e.g., Network perimeter] | [Detection method, e.g., Anomalous outbound TLS] | [Data source, e.g., Firewall logs, SIEM] | [High/Medium/Low] |
| [Detection point] | [Method] | [Data source] | [High/Medium/Low] |
| [Detection point] | [Method] | [Data source] | [High/Medium/Low] |

**Recommended Mitigations:**

- [Specific, actionable mitigation measure]
- [Specific mitigation measure]
- [Specific mitigation measure]

---

#### 5.2.2 [Technique Name]

*[Repeat the analysis structure from Section 5.2.1 for each additional emerging technique.]*

---

### 5.3 AI-Augmented and Emerging Technology Threats

*This section specifically addresses threats leveraging artificial intelligence, machine learning, generative AI, or other emerging technologies. Given the rapidly evolving nature of these threats, this section should be updated with particular rigour each quarter.*

**AI-Augmented Phishing and Social Engineering:**

*[Assess the current state and trajectory of AI-generated phishing, deepfakes, and social engineering relevant to the [Sector Name] sector.]*

[Provide assessment here]

**AI-Assisted Vulnerability Discovery and Exploitation:**

*[Assess the use of AI by threat actors to accelerate vulnerability research, fuzzing, and automated exploitation.]*

[Provide assessment here]

**Large Language Model (LLM) Abuse:**

*[Assess risks arising from the misuse of LLMs, including jailbreaking, malicious code generation, and disinformation.]*

[Provide assessment here]

---

## 6. Relevant CVEs and Exploits

*This section documents Common Vulnerabilities and Exposures (CVEs) and related exploits assessed as relevant to [Organization Name]'s technology environment and the broader [Sector Name] sector. Authors should focus on CVEs with confirmed or suspected active exploitation during the reporting period, particularly those affecting systems commonly deployed in the sector.*

### 6.1 CVE Assessment Methodology

*Describe the process used to identify, score, and prioritise CVEs for this report.*

CVEs included in this report were identified and prioritised using the following process:

1. **Sources:** [e.g., NACSA advisories, MyCERT, CISA KEV (Known Exploited Vulnerabilities), NVD, vendor security advisories, threat intelligence feeds]
2. **Scoring:** CVEs are assessed using **CVSS v3.1 base scores** in conjunction with contextual factors including exploitation status and asset exposure within [Organization Name]'s environment
3. **Prioritisation Criteria:** CVEs are included if they meet one or more of the following criteria:
   - CVSS base score ≥ 7.0 (High or Critical)
   - Confirmed active exploitation in the wild
   - Listed on CISA KEV or equivalent authoritative list
   - Directly affects technology assets deployed within [Organization Name] or the sector
   - Exploited by a threat actor profiled in Section 4

### 6.2 CVE Summary Table

*Provide a consolidated summary of all CVEs assessed in this reporting period. The full analysis for priority CVEs follows in Section 6.3.*

| CVE ID | CVSS Score | Severity | Affected Product(s) | Exploitation Status | Active in Sector | [Org] Exposure | Priority |
|---|---|---|---|---|---|---|---|
| CVE-[YYYY-XXXXX] | [Score e.g., 9.8] | [Critical/High/Medium] | [Vendor Product Version] | [Actively Exploited / PoC Available / Not Known] | [Yes/No/Unknown] | [High/Med/Low/None] | [P1/P2/P3] |
| CVE-[YYYY-XXXXX] | [Score] | [Severity] | [Vendor Product] | [Status] | [Yes/No/Unknown] | [Exposure] | [P1/P2/P3] |
| CVE-[YYYY-XXXXX] | [Score] | [Severity] | [Vendor Product] | [Status] | [Yes/No/Unknown] | [Exposure] | [P1/P2/P3] |
| CVE-[YYYY-XXXXX] | [Score] | [Severity] | [Vendor Product] | [Status] | [Yes/No/Unknown] | [Exposure] | [P1/P2/P3] |
| [Add rows as required] | | | | | | | |

**Exposure Key:**
- **High** — [Organization Name] runs the affected product in a production environment with internet exposure
- **Medium** — [Organization Name] runs the affected product in a non-internet-facing or internal environment
- **Low** — [Organization Name] may run a legacy or partial deployment of the affected product
- **None** — [Organization Name] does not use the affected product

### 6.3 Priority CVE Detailed Analysis

*For each P1 (Priority 1) CVE, provide a detailed analysis entry. Duplicate this subsection for each P1 CVE.*

---

#### 6.3.1 [CVE-YYYY-XXXXX] — [Short Descriptive Title]

| Attribute | Detail |
|---|---|
| **CVE ID** | CVE-[YYYY-XXXXX] |
| **CVSS v3.1 Base Score** | [Score] — [Critical/High/Medium/Low] |
| **CVSS Vector** | [e.g., CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H] |
| **Affected Vendor** | [Vendor Name] |
| **Affected Products** | [Product Name(s) and affected version range] |
| **Vulnerability Type** | [e.g., Remote Code Execution, SQL Injection, Privilege Escalation] |
| **Exploitation Status** | [Actively Exploited / PoC Available / No Known Exploit] |
| **Patch Available** | [Yes — Patch Version X.X / Partial / No] |
| **CISA KEV Listed** | [Yes — Date Added / No] |
| **[Organization Name] Exposure** | [High / Medium / Low / None] |
| **Associated Threat Actors** | [Actor names from Section 4, or "Unknown"] |
| **Disclosure Date** | [DD MMM YYYY] |
| **Patch Release Date** | [DD MMM YYYY, or "Pending"] |

**Technical Description:**

*[Provide a clear, accurate technical description of the vulnerability (3–5 sentences). Include the attack vector, attack complexity, privileges required, user interaction required, and scope of impact.]*

[Provide description here]

**Exploitation in the Wild:**

*[Describe observed exploitation of this CVE. Include any attribution to specific threat actors, observed target sectors, and the nature of the payload or impact when exploited.]*

[Provide exploitation details here]

**Impact Assessment for [Organization Name]:**

*[Assess the specific impact if this CVE were exploited against [Organization Name]'s environment. Reference specific systems, data, or services at risk.]*

[Provide impact assessment here]

**Remediation Actions:**

| Action | Type | Responsible Team | Target Date | Status |
|---|---|---|---|---|
| Apply vendor patch [version] to [affected systems] | Patch | [Team Name] | [DD MMM YYYY] | [Not Started / In Progress / Completed] |
| Apply temporary workaround: [description] | Workaround | [Team Name] | [DD MMM YYYY] | [Status] |
| Update detection rules in [SIEM/EDR/IDS] | Detection | [Team Name] | [DD MMM YYYY] | [Status] |
| Block known exploit IOCs at perimeter | Blocking | [Team Name] | [DD MMM YYYY] | [Status] |

---

#### 6.3.2 [CVE-YYYY-XXXXX] — [Short Descriptive Title]

*[Repeat the analysis structure from Section 6.3.1 for each additional P1 CVE.]*

---

### 6.4 Exploit Trends

*Provide a brief analysis of exploit trends observed during the reporting period, including changes in time-to-exploit, exploitation of older unpatched CVEs, and the prevalence of exploit kits or marketplaces offering exploits relevant to the sector.*

**Time-to-Exploit Trends:**

[Provide assessment here]

**Legacy and Unpatched Vulnerability Exploitation:**

[Provide assessment here]

**Exploit Marketplace Activity:**

[Provide assessment here]

---

## 7. Recommendations for Defence

*This section translates the threat intelligence findings from Sections 3–6 into actionable defensive recommendations for [Organization Name]. Each recommendation must be traceable to a specific threat finding, CVE, or sector assessment. Recommendations should be prioritised, owned, and tracked to resolution. This section serves as the primary output for the Security Operations team and relevant technology owners.*

### 7.1 Recommendation Prioritisation Framework

*All recommendations are prioritised using the following framework:*

| Priority | Definition | Expected Action Timeframe |
|---|---|---|
| **P1 — Critical** | Addresses an actively exploited vulnerability or an imminent, credible threat to NCII assets | Immediate action — within 72 hours |
| **P2 — High** | Addresses a significant threat or vulnerability with high likelihood of exploitation if unmitigated | Urgent action — within 14 days |
| **P3 — Medium** | Addresses an emerging or moderate risk requiring planned remediation | Action — within the current quarter |
| **P4 — Low** | Addresses a low-probability or low-impact risk; strategic or longer-term improvement | Action — within two quarters |

### 7.2 Consolidated Recommendations Register

*All recommendations from this report are consolidated in the table below. Detailed guidance for each recommendation is provided in the subsections that follow.*

| Ref | Priority | Recommendation | Source Finding | Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-[QQ-YY]-001 | [P1–P4] | [Short recommendation title] | [Section reference] | [Team / Role] | [DD MMM YYYY] | [New / In Progress / Closed] |
| REC-[QQ-YY]-002 | [P1–P4] | [Short recommendation title] | [Section reference] | [Team / Role] | [DD MMM YYYY] | [Status] |
| REC-[QQ-YY]-003 | [P1–P4] | [Short recommendation title] | [Section reference] | [Team / Role] | [DD MMM YYYY] | [Status] |
| REC-[QQ-YY]-004 | [P1–P4] | [Short recommendation title] | [Section reference] | [Team / Role] | [DD MMM YYYY] | [Status] |
| REC-[QQ-YY]-005 | [P1–P4] | [Short recommendation title] | [Section reference] | [Team / Role] | [DD MMM YYYY] | [Status] |
| [Add rows as required] | | | | | | |

### 7.3 Patch and Vulnerability Management

*Recommendations in this category address the remediation of specific CVEs and broader vulnerability management posture improvements identified in Section 6.*

**REC-[QQ-YY]-001: [Patch Recommendation Title]**

- **Priority:** [P1 / P2 / P3]
- **Source Finding:** [CVE-YYYY-XXXXX — Section 6.3.X]
- **Recommendation:** [Detailed, actionable description of the recommended action. Specify the affected systems, the required patch version, and the expected outcome upon remediation.]
- **Rationale:** [Explain why this recommendation is necessary, referencing the threat context from Sections 3–6.]
- **Owner:** [Team / Role]
- **Success Criteria:** [Measurable outcome that confirms the recommendation has been implemented, e.g., "100% of in-scope systems confirmed patched to version X.X by [Date]"]

---

**REC-[QQ-YY]-002: [Patch Recommendation Title]**

- **Priority:** [P1 / P2 / P3]
- **Source Finding:** [CVE-YYYY-XXXXX — Section 6.3.X]
- **Recommendation:** [Detailed description]
- **Rationale:** [Rationale]
- **Owner:** [Team / Role]
- **Success Criteria:** [Success criteria]

---

### 7.4 Detection and Monitoring

*Recommendations in this category address improvements to detection capabilities, SIEM rules, EDR configurations, and threat hunting activities based on the TTPs and IOCs identified in Sections 4 and 5.*

**REC-[QQ-YY]-00X: [Detection Recommendation Title]**

- **Priority:** [P1 / P2 / P3]
- **Source Finding:** [Threat actor / technique / Section reference]
- **Recommendation:** [Detailed, actionable description of the detection improvement. Reference specific MITRE ATT&CK techniques, log sources, and detection tools.]
- **Rationale:** [Rationale]
- **Owner:** [Team / Role]
- **Success Criteria:** [Success criteria, e.g., "Detection rule deployed in SIEM with confirmed true-positive test result by [Date]"]

---

### 7.5 Access Control and Identity Management

*Recommendations in this category address identity and access management improvements relevant to the threat techniques observed in Sections 4 and 5.*

**REC-[QQ-YY]-00X: [Access Control Recommendation Title]**

- **Priority:** [P1 / P2 / P3]
- **Source Finding:** [Section reference]
- **Recommendation:** [Detailed description]
- **Rationale:** [Rationale]
- **Owner:** [Team / Role]
- **Success Criteria:** [Success criteria]

---

### 7.6 Security Awareness and Human Risk

*Recommendations in this category address the human elements of the threat landscape including phishing susceptibility, social engineering, and insider threat risk.*

**REC-[QQ-YY]-00X: [Awareness Recommendation Title]**

- **Priority:** [P1 / P2 / P3]
- **Source Finding:** [Section reference]
- **Recommendation:** [Detailed description]
- **Rationale:** [Rationale]
- **Owner:** [Team / Role]
- **Success Criteria:** [Success criteria]

---

### 7.7 Architecture and Strategic Improvements

*Recommendations in this category address longer-term, strategic improvements to [Organization Name]'s security architecture in response to the evolving threat landscape.*

**REC-[QQ-YY]-00X: [Architecture Recommendation Title]**

- **Priority:** [P3 / P4]
- **Source Finding:** [Section reference]
- **Recommendation:** [Detailed description]
- **Rationale:** [Rationale]
- **Owner:** [Team / Role]
- **Success Criteria:** [Success criteria]

---

### 7.8 Carry-over Recommendations from Previous Quarter

*Track the status of recommendations from the previous quarter's Threat Landscape Report that remain open.*

| Ref | Original Quarter | Recommendation | Priority | Owner | Original Target Date | Revised Target Date | Status | Notes |
|---|---|---|---|---|---|---|---|---|
| REC-[QQ-YY]-00X | [Quarter, Year] | [Recommendation summary] | [P1–P4] | [Owner] | [Original Date] | [Revised Date] | [In Progress / Overdue / Closed] | [Notes on delay or progress] |
| [Add rows as required] | | | | | | | | |

---

## 8. NACSA and Sector Lead Advisories

*This section documents all advisories, alerts, and directives issued by NACSA and the Sector Lead Agency (SLA) for the [Sector Name] sector during the reporting period. It records [Organization Name]'s response and compliance posture against each advisory. This section is critical for demonstrating regulatory compliance under Act 854 s25.*

### 8.1 NACSA Advisories

*List all advisories received from NACSA during the reporting period. For each advisory, document [Organization Name]'s assessment and response.*

| Advisory ID | Title | Date Issued | Severity | Summary | [Org Name] Action Taken | Response Deadline | Compliance Status |
|---|---|---|---|---|---|---|---|
| NACSA-ADV-[YYYY]-[XXXX] | [Advisory Title] | [DD MMM YYYY] | [Critical/High/Medium/Low] | [One-sentence summary] | [Action taken or "Under Assessment"] | [DD MMM YYYY] | [Compliant / In Progress / Non-Compliant / N/A] |
| NACSA-ADV-[YYYY]-[XXXX] | [Advisory Title] | [DD MMM YYYY] | [Severity] | [Summary] | [Action] | [Date] | [Status] |
| [Add rows as required] | | | | | | | |

**Total NACSA Advisories Reviewed This Quarter:** [Number]

**Advisories Requiring Mandatory Action:** [Number]

**Compliance Rate:** [Percentage]%

### 8.2 Sector Lead Agency (SLA) Advisories

*List all advisories received from the Sector Lead Agency (SLA) for the [Sector Name] sector during the reporting period. The SLA for [Sector Name] is [Name of SLA, e.g., Bank Negara Malaysia for Financial Services].*

**Sector Lead Agency:** [Name of SLA]

| Advisory ID | Title | Date Issued | Severity | Summary | [Org Name] Action Taken | Response Deadline | Compliance Status |
|---|---|---|---|---|---|---|---|
| [SLA]-ADV-[YYYY]-[XXXX] | [Advisory Title] | [DD MMM YYYY] | [Critical/High/Medium/Low] | [Summary] | [Action] | [DD MMM YYYY] | [Compliant / In Progress / Non-Compliant / N/A] |
| [SLA]-ADV-[YYYY]-[XXXX] | [Advisory Title] | [DD MMM YYYY] | [Severity] | [Summary] | [Action] | [Date] | [Status] |
| [Add rows as required] | | | | | | | |

**Total SLA Advisories Reviewed This Quarter:** [Number]

### 8.3 Intelligence Sharing and Reporting Obligations

*This section records [Organization Name]'s fulfilment of intelligence sharing and reporting obligations under Act 854 and applicable NACSA guidelines during the reporting period.*

| Obligation | Regulatory Basis | Reporting Channel | Submissions This Quarter | Compliance Status |
|---|---|---|---|---|
| Sector threat intelligence sharing | Act 854, s25 | [NACSA designated channel, e.g., MySEF Portal] | [Number of submissions] | [Compliant / In Progress / Non-Compliant] |
| Significant threat notification | Act 854, s25(2) | [NACSA notification mechanism] | [Number of notifications] | [Compliant / Non-Compliant / N/A] |
| NCII incident reporting | Act 854, s29 | [NACSA / CIRTS reporting channel] | [Number of reports] | [Compliant / Non-Compliant / N/A] |
| [Other obligation] | [Regulatory basis] | [Channel] | [Number] | [Status] |

### 8.4 Notable Advisory Findings

*Provide a narrative summary of the most significant NACSA and SLA advisories from this quarter and their implications for [Organization Name].*

[Provide narrative summary here, referencing specific advisory IDs from Sections 8.1 and 8.2. Describe the collective threat picture painted by this quarter's advisories and any sector-wide trends they indicate.]

---

## 9. Roles and Responsibilities

*This section defines the roles and responsibilities for producing, reviewing, approving, and acting upon this Threat Landscape Report. The RACI matrix (Responsible, Accountable, Consulted, Informed) governs the production cycle and response activities.*

### 9.1 RACI Matrix — Report Production

*Define responsibilities for producing this report.*

| Activity | Threat Intelligence Analyst | CISO | Security Operations Lead | Head of IT / CTO | Risk & Compliance | Board / Audit Committee | NACSA / SLA |
|---|---|---|---|---|---|---|---|
| Gather threat intelligence | **R** | I | C | I | I | — | I |
| Analyse and assess threat actors | **R** | I | C | — | — | — | — |
| Assess CVEs and exploits | **R** | I | **R** | C | I | — | — |
| Draft report content | **R** | I | C | — | C | — | — |
| Review and quality assurance | C | **R** | C | C | **R** | — | — |
| Approve and sign off report | C | **A** | — | — | C | I | — |
| Submit report to NACSA / SLA | C | **R** | — | — | **R** | — | **I** |
| Distribute internally | — | **R** | I | I | I | I | — |
| Track recommendation implementation | C | **A** | **R** | **R** | C | I | — |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed | — = Not Applicable

### 9.2 RACI Matrix — Recommendation Implementation

*Define responsibilities for implementing the defensive recommendations from Section 7.*

| Activity | Threat Intelligence Analyst | CISO | Security Operations | IT / Infrastructure | Application Teams | Risk & Compliance | Vendor / Third Party |
|---|---|---|---|---|---|---|---|
| Assign recommendations to owners | C | **A** | **R** | I | I | C | — |
| Implement P1 / P2 patches | I | **A** | C | **R** | C | I | C |
| Deploy detection rules | C | **A** | **R** | C | — | I | — |
| Implement architecture changes | C | **A** | C | **R** | **R** | C | C |
| Conduct security awareness activities | I | **A** | C | — | — | **R** | — |
| Verify and close recommendations | C | **A** | **R** | C | C | **R** | — |
| Report status to CISO / Board | C | **R** | C | C | — | **R** | — |

### 9.3 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Threat Intelligence Analyst (Report Owner) | [Name] | [Department] | [Email / Extension] |
| Chief Information Security Officer (CISO) | [Name] | [Department] | [Email / Extension] |
| Security Operations Lead | [Name] | [Department] | [Email / Extension] |
| Head of IT / CTO | [Name] | [Department] | [Email / Extension] |
| Risk and Compliance Manager | [Name] | [Department] | [Email / Extension] |
| NACSA Liaison / Reporting Officer | [Name] | [Department] | [Email / Extension] |
| Sector Lead Agency Point of Contact | [Name] | [SLA Organisation] | [Email / Extension] |

---

## 10. Review and Approval

### 10.1 Review Schedule

*This document is reviewed and reissued on a quarterly basis in accordance with the reporting requirements of Act 854, s25 and [Organization Name]'s Threat Intelligence Programme.*

| Review Activity | Frequency | Responsible | Next Due Date |
|---|---|---|---|
| Full report production and issuance | Quarterly | Threat Intelligence Analyst | [DD MMM YYYY] |
| Interim threat alert assessment | As required (on receipt of NACSA advisory) | Threat Intelligence Analyst | N/A — triggered |
| Recommendation status review | Monthly | Security Operations Lead | [DD MMM YYYY] |
| Report methodology review | Annual | CISO | [DD MMM YYYY] |

### 10.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Author Name] | Initial issue |
| [1.1] | [DD MMM YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD MMM YYYY] | [Author Name] | [Description of major revision] |

### 10.3 Approval Sign-Off

*By signing below, the approving parties confirm that they have reviewed this Threat Landscape Report and are satisfied that it accurately represents the current threat landscape, meets the requirements of Act 854, and that the recommendations are appropriate and have been assigned for action.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by — Threat Intelligence Analyst | [Name] | _________________________ | [DD MMM YYYY] |
| Reviewed by — Security Operations Lead | [Name] | _________________________ | [DD MMM YYYY] |
| Reviewed by — Risk and Compliance Manager | [Name] | _________________________ | [DD MMM YYYY] |
| Approved by — CISO | [Name] | _________________________ | [DD MMM YYYY] |
| Noted by — Head of IT / CTO | [Name] | _________________________ | [DD MMM YYYY] |

---

## 11. References

*This section lists the specific regulatory instruments, standards, and frameworks that govern the production and content of this Threat Landscape Report.*

### 11.1 Regulatory and Legislative References

| Reference | Title | Relevant Clause(s) | Application to this Document |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | s18, s25 | Primary legislative basis for threat assessment and risk management obligations for NCII entities |
| Act 854, s18 | Cyber security measures for NCII entities | s18 | Requires NCII entities to implement and maintain risk management measures responsive to the threat environment; informs Section 3, 6, and 7 of this report |
| Act 854, s25 | Threat assessment obligations for NCII entities | s25, s25(2) | Requires periodic sector threat assessments and notification of significant threats to NACSA; governs the production frequency and submission requirements of this report |
| [NACSA NCII Framework] | [Full title of applicable NACSA framework or guideline] | [Applicable sections] | [Application to this document] |
| [NACSA Sector Cybersecurity Requirements] | [Full title] | [Applicable sections] | [Application to this document] |
| [Personal Data Protection Act 2010 (Act 709)] | Personal Data Protection Act 2010 | [Applicable sections] | [Relevance, if applicable, e.g., data exfiltration threat scenarios] |

### 11.2 Standards and Frameworks

| Standard / Framework | Version | Application |
|---|---|---|
| MITRE ATT&CK Framework (Enterprise) | [Current version, e.g., v14] | Threat actor TTP mapping in Sections 4 and 5 |
| CVSS v3.1 | v3.1 | CVE scoring and prioritisation in Section 6 |
| NIST Cybersecurity Framework (CSF) | [Version] | Alignment of recommendations in Section 7 |
| ISO/IEC 27001 | [Version in use] | Information security management context |
| [Other applicable standard] | [Version] | [Application] |

### 11.3 Internal Policy References

| Document | Document ID | Version | Relationship |
|---|---|---|---|
| Cyber Security Policy | [Document ID] | [Version] | Parent policy governing cyber security obligations |
| Threat Intelligence Programme | [Document ID] | [Version] | Programme under which this report is produced |
| Incident Response Plan | [Document ID] | [Version] | Referenced for escalation of critical threat findings |
| Vulnerability Management Policy | [Document ID] | [Version] | Governs CVE remediation timelines in Section 6 |
| Information Classification and Handling Policy | [Document ID] | [Version] | Governs classification and distribution of this document |
| NCII Asset Register | [Document ID] | [Version] | Provides the asset scope for exposure assessments in Section 6 |

---

## 12. Appendices

### Appendix A — Full Indicators of Compromise (IOC) Register

*This appendix provides the complete, unredacted IOC register for the reporting period. This register is classified **Confidential — Restricted** and should only be distributed to authorised security operations personnel. IOCs summarised in Section 4 are detailed in full here.*

*Authors must ensure that IOCs are shared through NACSA-designated sector intelligence sharing channels where required under Act 854, s25.*

| IOC ID | IOC Type | Value | Confidence | Threat Actor | Campaign | Source | First Seen | Last Seen | Action Taken | Active? |
|---|---|---|---|---|---|---|---|---|---|---|
| IOC-[QQ-YY]-001 | [IP / Domain / Hash / Email / URL] | [Value] | [High/Med/Low] | [Actor Name or Unknown] | [Campaign name or N/A] | [Source] | [Date] | [Date] | [Blocked / Monitoring / Submitted to NACSA] | [Yes/No] |
| IOC-[QQ-YY]-002 | [Type] | [Value] | [Confidence] | [Actor] | [Campaign] | [Source] | [Date] | [Date] | [Action] | [Yes/No] |
| [Add rows as required] | | | | | | | | | | |

---

### Appendix B — MITRE ATT&CK Coverage Heatmap

*This appendix provides a visual representation of the MITRE ATT&CK techniques identified in this report, mapped to [Organization Name]'s current detection and mitigation coverage. Authors should generate this heatmap using the MITRE ATT&CK Navigator tool and export it as an image or table for inclusion.*

*[Insert MITRE ATT&CK Navigator heatmap image or table here]*

**Coverage Summary:**

| ATT&CK Tactic | Total Techniques Observed | Techniques with Detection Coverage | Techniques with Mitigation | Coverage Gap |
|---|---|---|---|---|
| Reconnaissance | [Number] | [Number] | [Number] | [Number] |
| Resource Development | [Number] | [Number] | [Number] | [Number] |
| Initial Access | [Number] | [Number] | [Number] | [Number] |
| Execution | [Number] | [Number] | [Number] | [Number] |
| Persistence | [Number] | [Number] | [Number] | [Number] |
| Privilege Escalation | [Number] | [Number] | [Number] | [Number] |
| Defence Evasion | [Number] | [Number] | [Number] | [Number] |
| Credential Access | [Number] | [Number] | [Number] | [Number] |
| Discovery | [Number] | [Number] | [Number] | [Number] |
| Lateral Movement | [Number] | [Number] | [Number] | [Number] |
| Collection | [Number] | [Number] | [Number] | [Number] |
| Command and Control | [Number] | [Number] | [Number] | [Number] |
| Exfiltration | [Number] | [Number] | [Number] | [Number] |
| Impact | [Number] | [Number] | [Number] | [Number] |

---

### Appendix C — Intelligence Sources Register

*This appendix documents the intelligence sources used in producing this report, providing transparency on the provenance and reliability of threat intelligence. This supports the methodology described in Section 3.1.*

| Source Name | Source Type | Classification | Reliability Rating | Subscription / Access | Last Verified |
|---|---|---|---|---|---|
| NACSA Advisories | Government / Regulatory | Official | High | [Access method] | [Date] |
| MyCERT Advisories | Government / CERT | Official | High | [Access method] | [Date] |
| [FS-ISAC / Sector ISAC] | Industry Sharing | Confidential | High | [Membership] | [Date] |
| CISA KEV Catalogue | Government / Regulatory | Public | High | Public | [Date] |
| [Commercial Threat Intel Feed, e.g., Recorded Future] | Commercial | Proprietary | High | [Subscription] | [Date] |
| [OSINT Source, e.g., VirusTotal, Shodan] | Open Source | Public | Medium | [Access method] | [Date] |
| Internal SIEM Telemetry | Internal | Confidential | High | Internal | [Date] |
| Dark Web Monitoring | Commercial / Internal | Confidential | Medium | [Tool / Service] | [Date] |
| [Additional source] | [Type] | [Classification] | [Reliability] | [Access] | [Date] |

---

### Appendix D — Glossary of Terms

*This appendix provides definitions for technical and regulatory terms used in this report.*

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary legislation governing cyber security for National Critical Information Infrastructure (NCII) entities in Malaysia |
| **APT** | Advanced Persistent Threat — a sophisticated, often state-sponsored threat actor that gains unauthorised access to a target network and remains undetected for an extended period |
| **ATT&CK** | Adversarial Tactics, Techniques, and Common Knowledge — the MITRE framework for cataloguing adversary behaviour |
| **BEC** | Business Email Compromise — a type of cyber attack that uses email fraud to target organisations conducting financial transactions |
| **CIRTS** | Cyber Incident Response Teams, as recognised under Act 854 |
| **CVE** | Common Vulnerabilities and Exposures — a standardised list of publicly disclosed cyber security vulnerabilities |
| **CVSS** | Common Vulnerability Scoring System — an open framework for communicating the characteristics and severity of software vulnerabilities |
| **DDoS** | Distributed Denial of Service — an attack that attempts to disrupt normal traffic of a targeted server or network by overwhelming it with a flood of traffic |
| **IOC** | Indicator of Compromise — evidence that a security breach or attack has occurred, used for detection and response |
| **ICS / SCADA** | Industrial Control Systems / Supervisory Control and Data Acquisition — systems used to monitor and control industrial processes |
| **NACSA** | National Cyber Security Agency — Malaysia's lead agency for cyber security, responsible for NCII oversight |
| **NCII** | National Critical Information Infrastructure — information infrastructure as designated by the Government of Malaysia under Act 854 that, if disrupted or destroyed, would have serious negative impacts on national security, public safety, health, or the economy |
| **OSINT** | Open Source Intelligence — intelligence gathered from publicly available sources |
| **SLA** | Sector Lead Agency — the government agency designated under Act 854 as responsible for the cyber security of a specific NCII sector |
| **TTP** | Tactics, Techniques, and Procedures — the behaviour patterns used by threat actors |
| **[Add term]** | [Definition] |

---

### Appendix E — NACSA Submission Record

*This appendix provides a record of all formal submissions made to NACSA or the Sector Lead Agency during or in relation to this reporting period, in fulfilment of obligations under Act 854.*

| Submission Reference | Submission Type | Submitted To | Date Submitted | Submitted By | Acknowledgement Received | Acknowledgement Reference |
|---|---|---|---|---|---|---|
| [Reference] | [e.g., Threat Landscape Report, Threat Notification, IOC Submission] | [NACSA / SLA Name] | [DD MMM YYYY] | [Name / Role] | [Yes / Pending / No] | [Reference number or N/A] |
| [Reference] | [Type] | [Recipient] | [Date] | [Submitter] | [Yes/Pending/No] | [Reference] |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | [Document ID] | Version 1.0 | [Date]**

*This document is subject to review and should not be treated as current beyond its Next Review Date. Any queries regarding this document should be directed to the Threat Intelligence Analyst at [Contact Email].*