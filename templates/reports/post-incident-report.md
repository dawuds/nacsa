# Post-Incident Review Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Information Security Officer (CISO) |
| **Organization** | [Organization Name] |
| **Incident Reference** | [Incident Reference Number] |
| **Incident Name** | [Brief Incident Title] |
| **Report Date** | [Report Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | Per Incident |
| **Approved By** | [Approved By] |

---

> **Handling Instructions:** This document is classified **Confidential**. It contains sensitive information regarding a cybersecurity incident affecting [Organization Name] and is subject to regulatory reporting obligations under the Cyber Security Act 2024 (Act 854). Distribution is restricted to named recipients and authorized personnel only. Unauthorized disclosure may constitute a breach of regulatory obligations and internal policy.

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Purpose and Scope](#2-purpose-and-scope)
3. [Incident Overview](#3-incident-overview)
4. [Incident Timeline](#4-incident-timeline)
5. [Root Cause Analysis](#5-root-cause-analysis)
6. [Impact Assessment (Final)](#6-impact-assessment-final)
7. [Response Effectiveness Evaluation](#7-response-effectiveness-evaluation)
8. [Lessons Learned](#8-lessons-learned)
9. [Improvement Actions and Owners](#9-improvement-actions-and-owners)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Executive Summary

*Provide a concise, non-technical summary of the incident, its impact, how it was resolved, and the key actions being taken to prevent recurrence. This section should be suitable for senior leadership and board-level audiences.*

**Incident Classification:** [Critical / High / Medium / Low]

**Incident Status:** [Resolved / Closed]

**Date of Incident:** [Date Incident Commenced — DD/MM/YYYY]

**Date of Resolution:** [Date Incident Was Fully Resolved — DD/MM/YYYY]

**Total Duration:** [Duration in hours/days]

**NACSA Notification Status:** [Initial notification submitted on DD/MM/YYYY — Reference: [NACSA Reference Number]]

### 1.1 Summary Statement

[Provide a 3–5 sentence description of what occurred, what was affected, how the incident was contained and resolved, and the overall business impact. Example: "On [Date], [Organization Name] experienced a [type of incident] affecting [systems/services]. The incident was detected at [time] and contained by [time]. [X] systems were impacted and [describe data/service impact]. The incident was fully resolved by [date/time]. This report details the findings of the post-incident review conducted by the incident response team.]

### 1.2 Key Findings

| Finding | Severity | Status |
|---|---|---|
| [Key Finding 1] | [Critical / High / Medium / Low] | [Open / Closed] |
| [Key Finding 2] | [Critical / High / Medium / Low] | [Open / Closed] |
| [Key Finding 3] | [Critical / High / Medium / Low] | [Open / Closed] |
| [Key Finding 4] | [Critical / High / Medium / Low] | [Open / Closed] |

### 1.3 Immediate Actions Taken

- [Immediate Action 1 — e.g., Isolated affected systems from network]
- [Immediate Action 2 — e.g., Notified NACSA via prescribed reporting channel]
- [Immediate Action 3 — e.g., Activated Business Continuity Plan for affected services]
- [Immediate Action 4 — e.g., Engaged third-party forensics provider]

---

## 2. Purpose and Scope

### 2.1 Purpose

This Post-Incident Review Report is prepared by [Organization Name] in fulfilment of its obligations under the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 26** — which requires national critical information infrastructure (NCII) entities to submit a comprehensive post-incident report to the National Cyber Security Agency (NACSA) within **30 days** of incident resolution, detailing the nature of the incident, its impact, response actions, root cause, and preventive measures; and
- **Section 23** — which establishes the obligation to notify NACSA of cybersecurity incidents affecting NCII systems, and to provide follow-up information as directed by NACSA.

This report serves as the formal submission document to NACSA and as an internal record of the organization's incident response, findings, and improvement commitments.

### 2.2 Objectives

The objectives of this report are to:

- Document a factual and chronological account of the cybersecurity incident and all response activities;
- Identify the root cause(s) of the incident and contributing factors;
- Assess the final, confirmed impact on systems, data, operations, and stakeholders;
- Evaluate the effectiveness of the incident response process;
- Capture lessons learned for the benefit of the organization and the broader NCII sector; and
- Define concrete, time-bound improvement actions with accountable owners.

### 2.3 Scope

*Define the systems, services, data, and organizational units within scope of this review. Be specific about what is included and explicitly state what is excluded, with rationale.*

**In Scope:**

| Component | Description |
|---|---|
| Systems | [List affected systems, applications, or infrastructure components] |
| Data | [Describe categories of data involved, e.g., personal data, financial records] |
| Business Units | [List affected business units or departments] |
| Geographic Locations | [List affected sites or regions] |
| Third Parties | [List any affected or involved third-party service providers] |

**Out of Scope:**

| Component | Rationale for Exclusion |
|---|---|
| [System/Area] | [Reason not within scope of this review] |
| [System/Area] | [Reason not within scope of this review] |

### 2.4 Regulatory Context

This report is prepared in accordance with the following regulatory framework and associated obligations:

| Regulation | Relevant Obligation |
|---|---|
| Cyber Security Act 2024 (Act 854), s23 | Incident notification to NACSA |
| Cyber Security Act 2024 (Act 854), s26 | Post-incident report submission to NACSA within 30 days of resolution |
| [Other applicable regulation, e.g., BNM RMiT 10.55] | [Describe obligation] |
| [Personal Data Protection Act 2010 (Act 709), if applicable] | [Describe data breach reporting obligation, if triggered] |

---

## 3. Incident Overview

*Provide a factual, structured description of the incident. This section should enable a reader unfamiliar with the event to understand what happened, how it was discovered, and the initial response.*

### 3.1 Incident Details

| Field | Details |
|---|---|
| **Incident Reference Number** | [Internal Incident ID] |
| **NACSA Notification Reference** | [NACSA Assigned Reference, if available] |
| **Incident Title** | [Brief descriptive title] |
| **Incident Type** | [e.g., Ransomware / Data Breach / DDoS / Unauthorized Access / Insider Threat / Phishing / System Compromise] |
| **Incident Sub-Type** | [e.g., Double-extortion ransomware / Credential stuffing] |
| **Severity Classification** | [Critical / High / Medium / Low — per organization's classification policy] |
| **Initial Detection Date/Time** | [DD/MM/YYYY HH:MM MYT] |
| **Incident Declared Date/Time** | [DD/MM/YYYY HH:MM MYT] |
| **Containment Date/Time** | [DD/MM/YYYY HH:MM MYT] |
| **Eradication Date/Time** | [DD/MM/YYYY HH:MM MYT] |
| **Recovery Date/Time** | [DD/MM/YYYY HH:MM MYT] |
| **Incident Closed Date/Time** | [DD/MM/YYYY HH:MM MYT] |
| **Total Incident Duration** | [X hours / X days] |
| **Mean Time to Detect (MTTD)** | [X hours from initial compromise to detection] |
| **Mean Time to Respond (MTTR)** | [X hours from detection to containment] |
| **Mean Time to Recover (MTTRec)** | [X hours from containment to full recovery] |

### 3.2 Incident Description

[Provide a factual narrative of the incident in 3–5 paragraphs. Describe how the incident began (initial attack vector or trigger), how it progressed, how it was detected, and how it was ultimately resolved. Avoid speculation — confine this section to confirmed facts established during the investigation.]

### 3.3 Attack Vector and Techniques

*Describe the methods used by the threat actor or the technical cause of the incident. Reference MITRE ATT&CK techniques where applicable.*

| ATT&CK Tactic | ATT&CK Technique ID | Technique Name | Observed Evidence |
|---|---|---|---|
| [e.g., Initial Access] | [e.g., T1566.001] | [e.g., Spearphishing Attachment] | [Brief description of evidence] |
| [e.g., Execution] | [e.g., T1059.001] | [e.g., PowerShell] | [Brief description of evidence] |
| [e.g., Persistence] | [e.g., T1078] | [e.g., Valid Accounts] | [Brief description of evidence] |
| [e.g., Lateral Movement] | [e.g., T1021.001] | [e.g., Remote Desktop Protocol] | [Brief description of evidence] |
| [e.g., Exfiltration] | [e.g., T1041] | [e.g., Exfiltration Over C2 Channel] | [Brief description of evidence] |

### 3.4 Affected Assets

*List all assets confirmed to have been affected by the incident, including their classification and the nature of the impact on each asset.*

| Asset Name / ID | Asset Type | Criticality | Owner | Nature of Impact |
|---|---|---|---|---|
| [Asset Name] | [Server / Endpoint / Database / Application / Network Device] | [Critical / High / Medium / Low] | [Asset Owner] | [e.g., Compromised / Encrypted / Exfiltrated / Unavailable] |
| [Asset Name] | [Server / Endpoint / Database / Application / Network Device] | [Critical / High / Medium / Low] | [Asset Owner] | [e.g., Compromised / Encrypted / Exfiltrated / Unavailable] |
| [Asset Name] | [Server / Endpoint / Database / Application / Network Device] | [Critical / High / Medium / Low] | [Asset Owner] | [e.g., Compromised / Encrypted / Exfiltrated / Unavailable] |

---

## 4. Incident Timeline

*Document a comprehensive, chronological account of all significant events, actions, and decisions from the earliest known point of compromise through to incident closure. Times should be in Malaysian Time (MYT, UTC+8). This section is critical for regulatory review and forensic record-keeping.*

### 4.1 Timeline Narrative

[Provide a narrative description of the incident timeline, highlighting the most significant phases: initial compromise, lateral movement, detection, escalation, containment, eradication, recovery, and closure.]

### 4.2 Detailed Incident Timeline

| Date | Time (MYT) | Phase | Event Description | Actor / System | Evidence Reference |
|---|---|---|---|---|---|
| [DD/MM/YYYY] | [HH:MM] | **Pre-Incident** | [e.g., Phishing email delivered to [user]@[domain]] | [Threat Actor / Internal System] | [Log ref / Ticket ref] |
| [DD/MM/YYYY] | [HH:MM] | **Initial Compromise** | [e.g., User clicked malicious link; credential harvested] | [Threat Actor] | [Forensic Report Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Lateral Movement** | [e.g., Attacker used stolen credentials to access [System X]] | [Threat Actor] | [SIEM Alert Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Discovery / Detection** | [e.g., SIEM alert triggered on anomalous PowerShell execution] | [SOC Analyst / SIEM] | [Alert ID] |
| [DD/MM/YYYY] | [HH:MM] | **Escalation** | [e.g., SOC escalated to Incident Response Team; incident declared] | [SOC Lead] | [Ticket Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Notification — Internal** | [e.g., CISO and senior management notified] | [Incident Commander] | [Communication Log] |
| [DD/MM/YYYY] | [HH:MM] | **Notification — NACSA** | [e.g., Initial notification submitted to NACSA via prescribed channel] | [CISO] | [NACSA Submission Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Containment** | [e.g., Affected systems isolated; network segment quarantined] | [IR Team] | [Change Record Ref] |
| [DD/MM/YYYY] | [HH:MM] | **External Engagement** | [e.g., Third-party forensics firm [Name] engaged] | [CISO / Procurement] | [Engagement Letter Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Eradication** | [e.g., Malware removed; compromised accounts reset] | [IR Team / IT Operations] | [Change Record Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Recovery — Phase 1** | [e.g., Systems restored from clean backups; integrity verified] | [IT Operations] | [Recovery Log Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Recovery — Phase 2** | [e.g., Full service restoration; monitoring enhanced] | [IT Operations / SOC] | [Recovery Log Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Incident Closure** | [e.g., Incident formally closed; post-incident review initiated] | [Incident Commander] | [Ticket Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Post-Incident Review** | [e.g., Post-incident review meeting conducted] | [CISO / IR Team] | [Meeting Minutes Ref] |
| [DD/MM/YYYY] | [HH:MM] | **Report Submission** | [e.g., Post-incident report submitted to NACSA] | [CISO] | [Submission Reference] |

### 4.3 Key Time Metrics Summary

| Metric | Date / Time | Duration from Detection |
|---|---|---|
| **Earliest Known Compromise** | [DD/MM/YYYY HH:MM] | N/A |
| **Initial Detection** | [DD/MM/YYYY HH:MM] | — |
| **Incident Declaration** | [DD/MM/YYYY HH:MM] | [+X mins from detection] |
| **NACSA Initial Notification** | [DD/MM/YYYY HH:MM] | [+X hours from detection] |
| **Containment Achieved** | [DD/MM/YYYY HH:MM] | [+X hours from detection] |
| **Eradication Completed** | [DD/MM/YYYY HH:MM] | [+X hours from detection] |
| **Full Service Recovery** | [DD/MM/YYYY HH:MM] | [+X hours from detection] |
| **Incident Closed** | [DD/MM/YYYY HH:MM] | [+X days from detection] |
| **This Report Submitted** | [DD/MM/YYYY] | Within 30 days of resolution: [Yes / No] |

---

## 5. Root Cause Analysis

*This section presents the findings of the formal root cause analysis (RCA) conducted following the incident. The analysis must identify both direct (proximate) causes and underlying (contributing) factors. Use a structured methodology such as the 5 Whys, Fishbone (Ishikawa) Diagram, or Fault Tree Analysis.*

### 5.1 RCA Methodology

**Methodology Used:** [5 Whys / Fishbone Diagram / Fault Tree Analysis / Other — specify]

**RCA Conducted By:** [Names and roles of RCA team members]

**RCA Date:** [Date RCA was conducted — DD/MM/YYYY]

**External Forensics Input:** [Yes / No — if Yes, provide name of firm and reference to forensic report]

### 5.2 Root Cause Summary

| Cause Type | Description |
|---|---|
| **Direct (Proximate) Cause** | [The immediate technical cause of the incident — e.g., Exploitation of unpatched vulnerability CVE-XXXX-XXXX in [system]] |
| **Root Cause** | [The fundamental underlying cause — e.g., Absent patch management process for internet-facing systems] |
| **Contributing Factor 1** | [e.g., Insufficient network segmentation allowing lateral movement] |
| **Contributing Factor 2** | [e.g., Inadequate privileged access controls] |
| **Contributing Factor 3** | [e.g., Alert fatigue resulting in SIEM alert not escalated promptly] |
| **Contributing Factor 4** | [e.g., Third-party vendor access not subject to multi-factor authentication] |

### 5.3 5 Whys Analysis

*Complete the 5 Whys chain for each root cause identified. Add additional chains as necessary if multiple independent root causes exist.*

**Chain 1: [Title — e.g., Initial System Compromise]**

| Why Level | Question | Answer |
|---|---|---|
| **Why 1** | Why did the incident occur? | [e.g., An attacker gained unauthorized access to the environment] |
| **Why 2** | Why was the attacker able to gain access? | [e.g., A vulnerability in the VPN appliance was exploited] |
| **Why 3** | Why was the vulnerability present? | [e.g., The security patch had not been applied to the system] |
| **Why 4** | Why had the patch not been applied? | [e.g., The system was not included in the monthly patch management cycle] |
| **Why 5** | Why was the system excluded from the patch cycle? | [e.g., The asset register was incomplete and the system was not formally registered] |
| **Root Cause** | | **Incomplete asset register leading to unmanaged and unpatched internet-facing system** |

**Chain 2: [Title — e.g., Delayed Detection]**

| Why Level | Question | Answer |
|---|---|---|
| **Why 1** | Why was the incident not detected earlier? | [e.g., The attacker operated within the environment for [X] days undetected] |
| **Why 2** | Why were attacker activities not detected? | [e.g., SIEM correlation rules did not cover the techniques used] |
| **Why 3** | Why were the correlation rules insufficient? | [e.g., Rules had not been updated since [date] and did not incorporate current TTPs] |
| **Why 4** | Why had the rules not been updated? | [e.g., No formal process exists for periodic SIEM rule review and tuning] |
| **Why 5** | Why does no formal process exist? | [e.g., Responsibility for SIEM maintenance was not assigned to a specific role] |
| **Root Cause** | | **Absence of ownership and process for ongoing SIEM rule maintenance and TTP alignment** |

### 5.4 Contributing Factors Analysis

*Describe each contributing factor in detail, including the control gap or failure that allowed it to exist.*

**Contributing Factor 1: [Factor Title]**

- **Description:** [Detailed description of the contributing factor]
- **Control Gap:** [What control was absent, ineffective, or circumvented]
- **Evidence:** [Reference to evidence supporting this finding]
- **Relationship to Root Cause:** [How this factor enabled or amplified the incident]

**Contributing Factor 2: [Factor Title]**

- **Description:** [Detailed description of the contributing factor]
- **Control Gap:** [What control was absent, ineffective, or circumvented]
- **Evidence:** [Reference to evidence supporting this finding]
- **Relationship to Root Cause:** [How this factor enabled or amplified the incident]

**Contributing Factor 3: [Factor Title]**

- **Description:** [Detailed description of the contributing factor]
- **Control Gap:** [What control was absent, ineffective, or circumvented]
- **Evidence:** [Reference to evidence supporting this finding]
- **Relationship to Root Cause:** [How this factor enabled or amplified the incident]

### 5.5 Threat Intelligence Context

*Document any threat intelligence relevant to understanding the incident, including threat actor attribution (if established), known campaigns, and sector-specific threat context.*

| Intelligence Element | Details |
|---|---|
| **Threat Actor Attribution** | [Attributed / Unattributed — if attributed, provide name/group and confidence level] |
| **Known Campaign Association** | [Yes / No — if Yes, describe] |
| **Indicators of Compromise (IOCs)** | [Summary — full IOC list in Appendix C] |
| **Threat Intelligence Sources** | [e.g., NACSA advisories, commercial TI feed, ISAC sharing] |
| **Sector Targeting Context** | [Any known targeting of Malaysian financial institutions or NCII sector] |

---

## 6. Impact Assessment (Final)

*This section presents the final, confirmed assessment of the incident's impact across all dimensions. This supersedes any preliminary impact assessments made during the incident response. Assessments should be based on completed forensic analysis and investigation.*

### 6.1 Overall Impact Rating

| Dimension | Preliminary Rating | **Final Rating** | Change from Preliminary |
|---|---|---|---|
| Confidentiality | [Initial] | **[Final]** | [Higher / Same / Lower] |
| Integrity | [Initial] | **[Final]** | [Higher / Same / Lower] |
| Availability | [Initial] | **[Final]** | [Higher / Same / Lower] |
| Overall Severity | [Initial] | **[Final]** | [Higher / Same / Lower] |

**Overall Final Severity:** [Critical / High / Medium / Low]

**Rationale:** [Provide a brief explanation of the final overall severity rating, referencing the most significant impact dimensions]

### 6.2 Operational Impact

*Describe the impact on the organization's ability to conduct normal operations, including service disruptions, system unavailability, and business process failures.*

| Service / System | Disruption Type | Start Date/Time | End Date/Time | Total Downtime | Customer Impact |
|---|---|---|---|---|---|
| [Service/System Name] | [Unavailable / Degraded / Intermittent] | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [X hours] | [Number of customers affected, if applicable] |
| [Service/System Name] | [Unavailable / Degraded / Intermittent] | [DD/MM/YYYY HH:MM] | [DD/MM/YYYY HH:MM] | [X hours] | [Number of customers affected, if applicable] |

**Maximum Concurrent System Outages:** [Number of systems simultaneously unavailable]

**Peak Customer Impact:** [Maximum number of customers unable to access services at any one time]

### 6.3 Data Impact

*Document the confirmed impact on data, including any personal data breach. This section must be completed with reference to forensic findings and should support any obligations under the Personal Data Protection Act 2010.*

| Data Category | Classification | Volume (Estimated) | Nature of Compromise | Individuals Affected |
|---|---|---|---|---|
| [e.g., Customer personal data] | [Confidential / Restricted / Internal] | [e.g., ~50,000 records] | [Accessed / Exfiltrated / Encrypted / Destroyed] | [Number of data subjects] |
| [e.g., Employee records] | [Confidential / Restricted / Internal] | [e.g., ~1,200 records] | [Accessed / Exfiltrated / Encrypted / Destroyed] | [Number of data subjects] |
| [e.g., Financial transaction data] | [Highly Confidential] | [e.g., ~10,000 transactions] | [Accessed / Exfiltrated / Encrypted / Destroyed] | [N/A or specify] |

**Personal Data Breach Confirmed:** [Yes / No]

**PDPA Notification Required:** [Yes / No — if Yes, reference notification status in Appendix]

**Data Exfiltration Confirmed:** [Yes / No — if Yes, describe what was exfiltrated and to where (if known)]

### 6.4 Financial Impact

*Summarize the estimated and, where quantifiable, confirmed financial impact. Include direct costs (remediation, legal, forensics) and indirect costs (reputational, regulatory, operational).*

| Impact Category | Estimated Amount (MYR) | Confidence Level | Notes |
|---|---|---|---|
| Incident Response and Forensics Costs | [MYR X] | [High / Medium / Low] | [Description] |
| System Recovery and Remediation | [MYR X] | [High / Medium / Low] | [Description] |
| Lost Revenue (Service Downtime) | [MYR X] | [High / Medium / Low] | [Description] |
| Regulatory Fines and Penalties (potential) | [MYR X] | [High / Medium / Low] | [Description] |
| Legal and Notification Costs | [MYR X] | [High / Medium / Low] | [Description] |
| Reputational Impact (estimated) | [MYR X] | [Low] | [Description] |
| **Total Estimated Financial Impact** | **[MYR X]** | | |

### 6.5 Reputational and Customer Impact

*Assess the impact on the organization's reputation and its relationships with customers, regulators, and other stakeholders.*

| Stakeholder Group | Nature of Impact | Severity | Status |
|---|---|---|---|
| Retail Customers | [Description of customer-facing impact] | [High / Medium / Low] | [Ongoing / Resolved] |
| Corporate Customers | [Description] | [High / Medium / Low] | [Ongoing / Resolved] |
| Regulator (NACSA) | [Regulatory scrutiny / formal inquiry] | [High / Medium / Low] | [Ongoing / Resolved] |
| Regulator (BNM, if applicable) | [Description] | [High / Medium / Low] | [Ongoing / Resolved] |
| Media / Public | [Negative press coverage / public disclosure] | [High / Medium / Low] | [Ongoing / Resolved] |
| Business Partners / Third Parties | [Supply chain impact] | [High / Medium / Low] | [Ongoing / Resolved] |

**Media Coverage:** [Yes / No — if Yes, summarize]

**Regulatory Inquiry Opened:** [Yes / No — if Yes, provide reference]

### 6.6 Regulatory and Legal Impact

| Obligation | Triggered | Actions Taken | Status |
|---|---|---|---|
| NACSA Initial Notification (Act 854 s23) | [Yes / No] | [Description of action] | [Submitted / Pending] |
| NACSA Post-Incident Report (Act 854 s26) | Yes | This report | Submitted [DD/MM/YYYY] |
| BNM Notification (if applicable) | [Yes / No] | [Description] | [Submitted / Pending / N/A] |
| PDPA Breach Notification | [Yes / No] | [Description] | [Submitted / Pending / N/A] |
| Law Enforcement Report | [Yes / No] | [Police report / JSJK referral] | [Filed / Pending / N/A] |

---

## 7. Response Effectiveness Evaluation

*Critically assess how well the organization identified, contained, eradicated, and recovered from the incident. This section should be honest and objective — identifying both strengths and deficiencies in the response is essential for organizational learning and regulatory confidence.*

### 7.1 Response Phase Assessment

*Rate the effectiveness of each response phase using a standardized scale: Effective, Partially Effective, Ineffective. Provide evidence-based rationale for each rating.*

| Response Phase | Rating | Rationale | Evidence |
|---|---|---|---|
| **Detection and Identification** | [Effective / Partially Effective / Ineffective] | [Rationale] | [Reference] |
| **Initial Triage and Escalation** | [Effective / Partially Effective / Ineffective] | [Rationale] | [Reference] |
| **Incident Declaration** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |
| **Internal Communication and Notification** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |
| **Regulatory Notification (NACSA)** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |
| **Containment** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |
| **Forensic Evidence Preservation** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |
| **Eradication** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |
| **Recovery and Restoration** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |
| **Stakeholder Communication** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |
| **Documentation and Record-Keeping** | [Effective / Partly Effective / Ineffective] | [Rationale] | [Reference] |

### 7.2 Incident Response Plan Assessment

*Evaluate how well the organization's Incident Response Plan (IRP) performed in practice during this incident.*

| IRP Component | Was it followed? | Was it adequate? | Gaps Identified |
|---|---|---|---|
| Incident classification criteria | [Yes / Partially / No] | [Yes / No] | [Description or N/A] |
| Escalation procedures | [Yes / Partially / No] | [Yes / No] | [Description or N/A] |
| NACSA notification procedure | [Yes / Partially / No] | [Yes / No] | [Description or N/A] |
| Communication templates | [Yes / Partially / No] | [Yes / No] | [Description or N/A] |
| Evidence handling procedures | [Yes / Partially / No] | [Yes / No] | [Description or N/A] |
| Recovery procedures | [Yes / Partially / No] | [Yes / No] | [Description or N/A] |
| Third-party engagement procedures | [Yes / Partially / No] | [Yes / No] | [Description or N/A] |

**Overall IRP Assessment:** [Effective / Requires Improvement / Inadequate]

**Narrative Assessment:**

[Provide a 2–4 paragraph narrative assessment of the IRP's performance. Highlight areas where the plan worked well, areas where it was not followed, and areas where the plan itself was found to be inadequate. Identify any ad hoc decisions made outside the IRP and assess whether they were appropriate.]

### 7.3 Technology and Tooling Assessment

*Evaluate the performance of security technologies and tools during the incident.*

| Tool / Technology | Function | Performance | Issues Identified |
|---|---|---|---|
| [e.g., SIEM Platform] | Detection and correlation | [Effective / Partially / Ineffective] | [e.g., Relevant correlation rules not present] |
| [e.g., EDR Solution] | Endpoint detection and response | [Effective / Partially / Ineffective] | [Description] |
| [e.g., Firewall / NGFW] | Network perimeter defence | [Effective / Partially / Ineffective] | [Description] |
| [e.g., Backup Solution] | Data recovery | [Effective / Partially / Ineffective] | [Description] |
| [e.g., DLP Solution] | Data loss prevention | [Effective / Partially / Ineffective] | [Description] |
| [e.g., PAM Solution] | Privileged access management | [Effective / Partially / Ineffective] | [Description] |

### 7.4 Human and Process Performance

*Assess the performance of teams and individuals involved in the response.*

**Strengths Observed:**

- [Strength 1 — e.g., SOC team demonstrated rapid escalation once alert was identified]
- [Strength 2 — e.g., Communications team effectively managed media inquiries without disclosing sensitive details]
- [Strength 3 — e.g., IT Operations successfully restored critical systems from clean backups within SLA]

**Deficiencies Observed:**

- [Deficiency 1 — e.g., Incident commander role was unclear in the initial 2-hour response window]
- [Deficiency 2 — e.g., Out-of-band communication channel was not established promptly, raising risk of using compromised channels]
- [Deficiency 3 — e.g., Third-party forensics engagement delayed by procurement process]

### 7.5 Response KPI Performance

| KPI | Target | Actual | Met? |
|---|---|---|---|
| Time to Detect (from compromise) | < [X hours] | [Actual hours] | [Yes / No] |
| Time to Escalate (from detection) | < [X mins] | [Actual mins] | [Yes / No] |
| Time to NACSA Notification | Per Act 854 s23 requirements | [Actual time] | [Yes / No] |
| Time to Contain (from detection) | < [X hours] | [Actual hours] | [Yes / No] |
| Time to Recover (from containment) | < [X hours] | [Actual hours] | [Yes / No] |
| Time to Restore Critical Services | < [X hours] (per BCP RTO) | [Actual hours] | [Yes / No] |

---

## 8. Lessons Learned

*Document all lessons learned from this incident, covering technical, process, people, and governance dimensions. Lessons should be specific, actionable, and honest. This section informs the improvement actions in Section 9.*

### 8.1 Lessons Learned Summary

*Summarize the most significant lessons learned at a high level, suitable for senior leadership review.*

[Provide a 2–3 paragraph executive-level summary of the key lessons from this incident. Focus on the most impactful insights and their implications for the organization's security posture.]

### 8.2 Technical Lessons Learned

| # | Lesson | Category | Impact if Not Addressed | Priority |
|---|---|---|---|---|
| T1 | [e.g., Internet-facing systems must be included in a mandatory and time-bound patch cycle with no exceptions] | Vulnerability Management | [High / Medium / Low] | [Critical / High / Medium] |
| T2 | [e.g., Network segmentation must prevent lateral movement between internet-facing DMZ and internal systems] | Network Architecture | [High / Medium / Low] | [Critical / High / Medium] |
| T3 | [e.g., SIEM correlation rules must be regularly reviewed and updated against current MITRE ATT&CK TTPs] | Detection Capability | [High / Medium / Low] | [Critical / High / Medium] |
| T4 | [e.g., Privileged account usage must be restricted and monitored with just-in-time access controls] | Identity and Access Management | [High / Medium / Low] | [Critical / High / Medium] |
| T5 | [Add additional technical lessons as identified] | [Category] | [Impact] | [Priority] |

### 8.3 Process Lessons Learned

| # | Lesson | Category | Impact if Not Addressed | Priority |
|---|---|---|---|---|
| P1 | [e.g., Incident classification thresholds must be reviewed to ensure Critical incidents are declared more rapidly] | Incident Response | [High / Medium / Low] | [Critical / High / Medium] |
| P2 | [e.g., NACSA notification procedure must be a standalone documented procedure with clear trigger criteria] | Regulatory Compliance | [High / Medium / Low] | [Critical / High / Medium] |
| P3 | [e.g., Procurement fast-track process for emergency forensic vendor engagement must be established] | Vendor Management | [High / Medium / Low] | [Critical / High / Medium] |
| P4 | [e.g., Evidence preservation procedures must be practiced in tabletop exercises to ensure consistent application] | Forensic Readiness | [High / Medium / Low] | [Critical / High / Medium] |
| P5 | [Add additional process lessons as identified] | [Category] | [Impact] | [Priority] |

### 8.4 People and Awareness Lessons Learned

| # | Lesson | Category | Impact if Not Addressed | Priority |
|---|---|---|---|---|
| A1 | [e.g., Phishing simulation frequency and realism must be increased to better reflect current threat actor TTPs] | Security Awareness | [High / Medium / Low] | [Critical / High / Medium] |
| A2 | [e.g., Incident Response team members require formal IR certification and regular hands-on training] | Capability Development | [High / Medium / Low] | [Critical / High / Medium] |
| A3 | [e.g., Out-of-band communication plan must be exercised so all responders know the procedure under stress] | IR Preparedness | [High / Medium / Low] | [Critical / High / Medium] |
| A4 | [Add additional people/awareness lessons as identified] | [Category] | [Impact] | [Priority] |

### 8.5 Governance Lessons Learned

| # | Lesson | Category | Impact if Not Addressed | Priority |
|---|---|---|---|---|
| G1 | [e.g., Asset register must be maintained as a live, auditable record with mandatory inclusion of all internet-facing systems] | Asset Management | [High / Medium / Low] | [Critical / High / Medium] |
| G2 | [e.g., Third-party security assessments must include verification of MFA enforcement for all vendor access] | Third-Party Risk | [High / Medium / Low] | [Critical / High / Medium] |
| G3 | [e.g., Board and EXCO must receive post-incident briefings within 48 hours of incident declaration] | Governance | [High / Medium / Low] | [Critical / High / Medium] |
| G4 | [Add additional governance lessons as identified] | [Category] | [Impact] | [Priority] |

### 8.6 Positive Observations

*Document what worked well during this incident. Acknowledging effective controls and good practices is important for morale, for reinforcing positive behaviors, and for providing a balanced account to regulators.*

- [Positive Observation 1 — e.g., Backup and recovery procedures were well-documented and executed effectively, enabling restoration within defined RTO]
- [Positive Observation 2 — e.g., Initial SIEM alert, once escalated, was actioned rapidly by the on-call IR team]
- [Positive Observation 3 — e.g., Communication to affected customers was clear, timely, and consistent with the organization's crisis communications policy]
- [Positive Observation 4 — e.g., Board and senior management maintained appropriate oversight throughout the incident without impeding technical response]

---

## 9. Improvement Actions and Owners

*This section translates the lessons learned into a formal, time-bound improvement plan. Each action must have a clear owner, a target completion date, and success criteria. This plan will be tracked by the CISO and reported to the Board Risk Committee and NACSA as required.*

### 9.1 Improvement Action Plan Overview

**Total Actions Identified:** [Number]

**Critical Priority Actions:** [Number]

**High Priority Actions:** [Number]

**Medium Priority Actions:** [Number]

**Plan Review Date:** [Date — typically 30/60/90 days post submission]

### 9.2 Improvement Action Register

| Action ID | Action Description | Root Cause / Lesson Reference | Category | Priority | Owner (Role) | Owner (Name) | Target Date | Success Criteria | Status |
|---|---|---|---|---|---|---|---|---|---|
| IA-001 | [e.g., Conduct a full audit and remediation of the asset register to ensure all internet-facing systems are captured and categorized] | T1, G1 | Asset Management | Critical | Head of IT Infrastructure | [Name] | [DD/MM/YYYY] | [e.g., 100% of internet-facing systems registered; audit evidence provided to CISO] | [Not Started / In Progress / Completed] |
| IA-002 | [e.g., Implement mandatory monthly patching cycle for all internet-facing systems with zero-exception policy and CISO sign-off for any deferrals] | T1 | Vulnerability Management | Critical | CISO / Head of IT Operations | [Name] | [DD/MM/YYYY] | [e.g., Patching policy updated; first cycle completed; compliance dashboard operational] | [Not Started / In Progress / Completed] |
| IA-003 | [e.g., Redesign network segmentation to implement zero-trust micro-segmentation between DMZ and internal network segments] | T2 | Network Security | Critical | Head of IT Architecture | [Name] | [DD/MM/YYYY] | [e.g., New network architecture approved; implementation completed; penetration test confirming segmentation effective] | [Not Started / In Progress / Completed] |
| IA-004 | [e.g., Engage SIEM vendor to conduct a full rule review and implement MITRE ATT&CK-aligned detection coverage mapping] | T3 | Detection Capability | High | SOC Manager | [Name] | [DD/MM/YYYY] | [e.g., ATT&CK coverage report produced; critical gaps remediated; quarterly review process established] | [Not Started / In Progress / Completed] |
| IA-005 | [e.g., Implement Just-in-Time (JIT) privileged access management for all critical system administrators] | T4 | Identity and Access Management | High | Head of IT Security | [Name] | [DD/MM/YYYY] | [e.g., PAM solution configured for JIT; all privileged accounts onboarded; access review completed] | [Not Started / In Progress / Completed] |
| IA-006 | [e.g., Review and update Incident Response Plan to incorporate lessons from this incident; re-issue as v[X+1]] | P1, P2 | Incident Response | High | CISO | [Name] | [DD/MM/YYYY] | [e.g., Updated IRP approved by CISO and Board Risk Committee; communicated to all IR team members] | [Not Started / In Progress / Completed] |
| IA-007 | [e.g., Document standalone NACSA Notification Procedure with clear trigger criteria, templates, and responsible persons] | P2 | Regulatory Compliance | Critical | Head of Compliance | [Name] | [DD/MM/YYYY] | [e.g., Procedure documented, approved, and tested in tabletop exercise] | [Not Started / In Progress / Completed] |
| IA-008 | [e.g., Establish and pre-qualify emergency forensic vendor panel through a simplified procurement fast-track process] | P3 | Vendor Management | High | Head of Procurement / CISO | [Name] | [DD/MM/YYYY] | [e.g., At least two pre-qualified forensic vendors with signed retainer agreements in place] | [Not Started / In Progress / Completed] |
| IA-009 | [e.g., Increase phishing simulation frequency to monthly and upgrade to targeted spear-phishing scenarios based on current threat intelligence] | A1 | Security Awareness | High | Head of Information Security | [Name] | [DD/MM/YYYY] | [e.g., Simulation program running monthly; click rate reduced by X% within 6 months] | [Not Started / In Progress / Completed] |
| IA-010 | [e.g., Conduct a full-scale IR tabletop exercise within 60 days incorporating scenarios derived from this incident] | A3, P4 | IR Preparedness | High | CISO | [Name] | [DD/MM/YYYY] | [e.g., Exercise conducted; after-action report produced; identified gaps remediated] | [Not Started / In Progress / Completed] |
| IA-011 | [e.g., Enforce MFA for all third-party vendor remote access; revoke non-compliant access immediately] | G2 | Third-Party Risk | Critical | Head of IT Security | [Name] | [DD/MM/YYYY] | [e.g., MFA enforced for 100% of vendor access accounts; quarterly compliance review established] | [Not Started / In Progress / Completed] |
| IA-012 | [e.g., Establish Board and EXCO incident briefing template and escalation trigger criteria] | G3 | Governance | Medium | CISO / Company Secretary | [Name] | [DD/MM/YYYY] | [e.g., Template approved by Board; escalation criteria documented in IRP] | [Not Started / In Progress / Completed] |
| IA-013 | [Add additional actions as identified] | [Reference] | [Category] | [Priority] | [Owner Role] | [Name] | [DD/MM/YYYY] | [Success criteria] | [Status] |

### 9.3 Action Tracking and Governance

**Reporting Frequency:** [Monthly / Quarterly]

**Reported To:** [Board Risk Committee / EXCO / NACSA (if required)]

**Tracking Mechanism:** [e.g., GRC platform / Jira / SharePoint — specify system and location]

**Next Status Review Date:** [DD/MM/YYYY]

---

## 10. Roles and Responsibilities

*This section documents the roles and responsibilities for the preparation, review, approval, and ongoing maintenance of this report, as well as accountability for the improvement action plan.*

### 10.1 RACI Matrix — Post-Incident Review Report

*R = Responsible (does the work) | A = Accountable (ultimate owner) | C = Consulted (input required) | I = Informed (kept up to date)*

| Activity | CISO | Incident Response Team | IT Operations | Head of Compliance | Legal Counsel | Business Unit Heads | Board / Risk Committee | NACSA |
|---|---|---|---|---|---|---|---|---|
| Declare incident closed and initiate PIR | A | R | C | I | I | I | I | I |
| Conduct post-incident review meeting | A | R | C | C | C | C | I | — |
| Conduct root cause analysis | A | R | C | I | I | I | — | — |
| Compile incident timeline | A | R | R | I | I | I | — | — |
| Conduct forensic investigation | A | R (with external forensics) | C | I | C | I | — | — |
| Prepare impact assessment | A | R | C | C | C | R (operational impact) | I | — |
| Draft post-incident report | A | R | C | C | C | C | — | — |
| Review draft report | A | C | C | R | R | C | — | — |
| Approve report for submission | A | — | — | C | C | — | I | — |
| Submit report to NACSA | R, A | — | — | C | C | — | I | **Receives** |
| Own and track improvement actions | A | R (technical actions) | R (IT actions) | R (compliance actions) | — | R (BU actions) | I | I |
| Report action status to Board | R, A | C | C | C | — | C | **Receives** | — |

### 10.2 Key Personnel — This Review

| Role | Name | Title | Department | Contact |
|---|---|---|---|---|
| Incident Commander | [Name] | [Title] | [Department] | [Email] |
| CISO / Report Owner | [Name] | Chief Information Security Officer | Information Security | [Email] |
| Lead Investigator | [Name] | [Title] | [Department] | [Email] |
| External Forensics Lead | [Name] | [Title] | [Organization] | [Email] |
| Head of Compliance | [Name] | [Title] | Compliance | [Email] |
| Legal Counsel | [Name] | [Title] | Legal | [Email] |
| Report Author | [Name] | [Title] | [Department] | [Email] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 0.1 | [DD/MM/YYYY] | [Author Name] | Initial draft |
| 0.2 | [DD/MM/YYYY] | [Author Name] | Incorporated forensic findings from [Forensics Firm] |
| 0.3 | [DD/MM/YYYY] | [Author Name] | Incorporated legal review comments |
| 0.4 | [DD/MM/YYYY] | [Author Name] | Incorporated compliance review comments |
| 1.0 | [DD/MM/YYYY] | [Author Name] | Final version — approved for NACSA submission |

### 11.2 Internal Review Record

| Reviewer | Role | Review Date | Comments / Outcome |
|---|---|---|---|
| [Name] | Head of Compliance | [DD/MM/YYYY] | [Approved with comments / Approved without comments / Returned for revision] |
| [Name] | Legal Counsel | [DD/MM/YYYY] | [Approved with comments / Approved without comments / Returned for revision] |
| [Name] | Head of IT Operations | [DD/MM/YYYY] | [Approved with comments / Approved without comments / Returned for revision] |
| [Name] | Chief Risk Officer | [DD/MM/YYYY] | [Approved with comments / Approved without comments / Returned for revision] |

### 11.3 Approval Sign-Off

*By signing below, the approver confirms that they have reviewed this report, that its contents are accurate to the best of their knowledge, and that they authorize its submission to the National Cyber Security Agency (NACSA) pursuant to Section 26 of the Cyber Security Act 2024 (Act 854).*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | _________________________ | [DD/MM/YYYY] |
| Chief Risk Officer | [Name] | _________________________ | [DD/MM/YYYY] |
| Head of Compliance | [Name] | _________________________ | [DD/MM/YYYY] |
| Chief Executive Officer / Managing Director | [Name] | _________________________ | [DD/MM/YYYY] |

---

## 12. References

*This section lists the regulatory instruments, internal policies, and standards that this report is intended to address or that informed its preparation.*

### 12.1 Regulatory References

| Reference | Title | Relevant Clauses | Notes |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | Section 23 | Incident notification obligation for NCII entities |
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | Section 26 | Post-incident report submission obligation to NACSA within 30 days |
| [BNM/RH/PD 028-109] | Risk Management in Technology (RMiT) | [Relevant paragraph] | Technology risk and incident reporting |
| Personal Data Protection Act 2010 (Act 709) | Personal Data Protection Act 2010 | [Relevant section] | Applies where personal data was compromised |
| [NACSA Directive / Circular Reference] | [Title of applicable NACSA directive] | [All] | NACSA-issued reporting format or requirements |

### 12.2 Internal Policy References

| Document ID | Document Title | Version | Relevance |
|---|---|---|---|
| [Policy ID] | Information Security Policy | [Version] | Overarching IS governance framework |
| [Policy ID] | Incident Response Plan | [Version] | Procedures followed during this incident |
| [Policy ID] | Business Continuity Plan | [Version] | Recovery procedures invoked |
| [Policy ID] | Vulnerability Management Policy | [Version] | Root cause context |
| [Policy ID] | Third-Party Risk Management Policy | [Version] | Third-party engagement context |
| [Policy ID] | Data Classification and Handling Policy | [Version] | Data impact assessment context |
| [Policy ID] | Privileged Access Management Policy | [Version] | IAM controls context |

### 12.3 Standards and Frameworks Referenced

| Standard / Framework | Title | Application in This Report |
|---|---|---|
| NIST SP 800-61r2 | Computer Security Incident Handling Guide | Incident response lifecycle structure |
| MITRE ATT&CK v[latest] | Adversarial Tactics, Techniques and Common Knowledge | Attack technique classification (Section 3.3) |
| ISO/IEC 27035 | Information Security Incident Management | Incident management principles |
| ISO/IEC 27001:2022 | Information Security Management Systems | Control reference framework |

---

## 13. Appendices

### Appendix A: NACSA Initial Notification Records

*Attach copies of all NACSA notifications submitted in relation to this incident, including acknowledgement receipts where available.*

| Submission | Date Submitted | Submitted By | NACSA Reference | Method of Submission |
|---|---|---|---|---|
| Initial Notification (s23) | [DD/MM/YYYY] | [Name, Role] | [Reference] | [Portal / Email / Other] |
| Supplementary Notification 1 | [DD/MM/YYYY] | [Name, Role] | [Reference] | [Portal / Email / Other] |
| Post-Incident Report (s26, this document) | [DD/MM/YYYY] | [Name, Role] | [Reference] | [Portal / Email / Other] |

[Attach or reference NACSA notification documents]

---

### Appendix B: Forensic Investigation Report Summary

*Attach or reference the full forensic investigation report. Where the full report is classified at a higher level, include a sanitized executive summary here and note the classification and storage location of the full report.*

**Forensic Provider:** [Name of external forensics firm, if engaged, or Internal Forensics Team]

**Forensic Report Reference:** [Report ID / Reference Number]

**Forensic Report Classification:** [Confidential / Highly Confidential]

**Storage Location:** [Secure system reference / SharePoint path / Evidence management system]

**Key Forensic Findings Summary:**

- [Finding 1]
- [Finding 2]
- [Finding 3]

[Note: Full forensic report available at [Location] — access restricted to authorized personnel]

---

### Appendix C: Indicators of Compromise (IOCs)

*List all IOCs identified during the investigation. This information should be shared with NACSA and, where appropriate, with sector peers through established threat intelligence sharing mechanisms.*

**IOC Classification:** [Confidential — Restricted Distribution]

**IOC Sharing Status:** [Shared with NACSA: Yes/No | Shared via ISAC: Yes/No]

| IOC Type | IOC Value | Confidence | First Seen | Last Seen | Associated TTP | Notes |
|---|---|---|---|---|---|---|
| IP Address | [x.x.x.x] | [High / Medium / Low] | [Date] | [Date] | [ATT&CK ID] | [e.g., C2 server] |
| Domain | [malicious-domain.com] | [High / Medium / Low] | [Date] | [Date] | [ATT&CK ID] | [e.g., Phishing domain] |
| File Hash (SHA-256) | [hash value] | [High / Medium / Low] | [Date] | [Date] | [ATT&CK ID] | [e.g., Malware dropper] |
| File Hash (MD5) | [hash value] | [High / Medium / Low] | [Date] | [Date] | [ATT&CK ID] | [Description] |
| URL | [malicious URL] | [High / Medium / Low] | [Date] | [Date] | [ATT&CK ID] | [Description] |
| Email Sender | [email address] | [High / Medium / Low] | [Date] | [Date] | [ATT&CK ID] | [e.g., Phishing sender] |
| Registry Key | [registry path] | [High / Medium / Low] | [Date] | [Date] | [ATT&CK ID] | [Description] |
| User Agent String | [user agent] | [High / Medium / Low] | [Date] | [Date] | [ATT&CK ID] | [Description] |

---

### Appendix D: Affected Systems Inventory

*Provide the complete inventory of all systems confirmed to have been affected by the incident. Reference the organization's asset register for full asset details.*

| Asset ID | Asset Name | Asset Type | OS / Platform | Criticality | Business Function | Impact Type | Remediation Status |
|---|---|---|---|---|---|---|---|
| [Asset ID] | [Name] | [Server/Endpoint/etc.] | [OS Version] | [Critical/High/Med/Low] | [Business Function] | [Compromised/Encrypted/etc.] | [Reimaged / Restored / Patched / Decommissioned] |
| [Asset ID] | [Name] | [Server/Endpoint/etc.] | [OS Version] | [Critical/High/Med/Low] | [Business Function] | [Compromised/Encrypted/etc.] | [Reimaged / Restored / Patched / Decommissioned] |

---

### Appendix E: Evidence Log

*Maintain a chain-of-custody log for all evidence collected during the investigation.*

| Evidence ID | Description | Type | Collected By | Collection Date/Time | Storage Location | Chain of Custody Reference |
|---|---|---|---|---|---|---|
| EVD-001 | [e.g., Forensic image of [Server Name]] | [Digital / Physical] | [Name, Role] | [DD/MM/YYYY HH:MM] | [Secure storage location] | [CoC Form Ref] |
| EVD-002 | [e.g., SIEM log export for [date range]] | [Digital] | [Name, Role] | [DD/MM/YYYY HH:MM] | [Secure storage location] | [CoC Form Ref] |
| EVD-003 | [e.g., Memory dump from [System Name]] | [Digital] | [Name, Role] | [DD/MM/YYYY HH:MM] | [Secure storage location] | [CoC Form Ref] |
| EVD-004 | [e.g., Network traffic capture — [segment]] | [Digital] | [Name, Role] | [DD/MM/YYYY HH:MM] | [Secure storage location] | [CoC Form Ref] |

---

### Appendix F: Communication Log

*Document all significant communications made during the incident, including internal notifications, regulatory submissions, customer communications, and media statements.*

| Date/Time | Communication Type | From | To | Subject / Summary | Reference |
|---|---|---|---|---|---|
| [DD/MM/YYYY HH:MM] | Internal — Incident Declaration | [From] | CISO, EXCO, Senior Management | Incident declared — [Brief description] | [Email/Ticket Ref] |
| [DD/MM/YYYY HH:MM] | Regulatory — NACSA | CISO | NACSA | Initial notification pursuant to Act 854 s23 | [NACSA Ref] |
| [DD/MM/YYYY HH:MM] | Regulatory — BNM (if applicable) | [From] | BNM | [Subject] | [BNM Ref] |
| [DD/MM/YYYY HH:MM] | Customer Communication | [From] | Affected customers | [Brief description of communication] | [Ref] |
| [DD/MM/YYYY HH:MM] | Media Statement | Communications | Public / Media | [Brief description] | [Press Release Ref] |
| [DD/MM/YYYY HH:MM] | Board Briefing | CISO | Board of Directors | Post-incident briefing | [Minutes Ref] |

---

### Appendix G: Improvement Action Status Dashboard

*This appendix is intended to be updated at each review cycle and maintained as a live tracking document throughout the improvement action plan implementation period.*

**Last Updated:** [DD/MM/YYYY]

**Reporting Period:** [Start Date] to [End Date]

| Action ID | Action Description | Owner | Target Date | % Complete | Status | Notes / Blockers |
|---|---|---|---|---|---|---|
| IA-001 | [Description] | [Owner] | [Date] | [%] | [On Track / At Risk / Delayed / Completed] | [Notes] |
| IA-002 | [Description] | [Owner] | [Date] | [%] | [On Track / At Risk / Delayed / Completed] | [Notes] |
| IA-003 | [Description] | [Owner] | [Date] | [%] | [On Track / At Risk / Delayed / Completed] | [Notes] |
| IA-004 | [Description] | [Owner] | [Date] | [%] | [On Track / At Risk / Delayed / Completed] | [Notes] |
| IA-005 | [Description] | [Owner] | [Date] | [%] | [On Track / At Risk / Delayed / Completed] | [Notes] |

**Overall Plan Status:** [On Track / At Risk / Delayed]

**Next Review Date:** [DD/MM/YYYY]

**Reported To:** [Board Risk Committee / NACSA / Both]

---

*End of Document*

---

**Document Control Notice**

This document is the property of [Organization Name]. It is classified **Confidential** and must be handled in accordance with the organization's Information Classification and Handling Policy. Any reproduction, distribution, or disclosure outside of authorized channels is strictly prohibited. Queries regarding this document should be directed to the Chief Information Security Officer at [CISO Email Address].

**Regulatory Submission Notice**

This report is submitted to the National Cyber Security Agency (NACSA) in fulfilment of Section 26 of the Cyber Security Act 2024 (Act 854). It contains information pertaining to a cybersecurity incident affecting national critical information infrastructure and should be treated accordingly by all recipients.