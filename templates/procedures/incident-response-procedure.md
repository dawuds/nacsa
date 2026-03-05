# Incident Response Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Lead / CISO |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) |
| **Applicable Sections** | Section 23, Section 26 |

---

> **CONFIDENTIALITY NOTICE:** This document contains confidential and proprietary information belonging to [Organization Name]. It is intended solely for authorized personnel involved in cyber security operations and compliance. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of Malaysian law, including the Cyber Security Act 2024 (Act 854) and the Personal Data Protection Act 2010.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory Context](#3-regulatory-context)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Incident Classification Matrix](#5-incident-classification-matrix)
6. [Incident Response Lifecycle Overview](#6-incident-response-lifecycle-overview)
7. [Detection and Triage Workflow](#7-detection-and-triage-workflow)
8. [Containment Strategies by Incident Type](#8-containment-strategies-by-incident-type)
9. [Eradication Procedures](#9-eradication-procedures)
10. [Recovery and Restoration Steps](#10-recovery-and-restoration-steps)
11. [Evidence Collection and Chain of Custody](#11-evidence-collection-and-chain-of-custody)
12. [Notification and Reporting Obligations](#12-notification-and-reporting-obligations)
13. [Post-Incident Review](#13-post-incident-review)
14. [Testing and Exercising](#14-testing-and-exercising)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*Describe the primary purpose of this procedure — what operational need it addresses and the regulatory obligation it fulfils. Reference the specific Act and sections that mandate this document.*

This Incident Response Procedure establishes the formal, operationally binding process by which [Organization Name] detects, responds to, contains, eradicates, and recovers from cyber security incidents affecting its National Critical Information Infrastructure (NCII) assets and associated systems. This procedure is issued in compliance with the **Cyber Security Act 2024 (Act 854)**, with specific reference to:

- **Section 23** — Obligations of NCII sector leads and NCII entities with respect to cyber security incident reporting and response; and
- **Section 26** — Requirements for NCII entities to maintain cyber security measures and implement prescribed standards for incident management.

This procedure operationalises the strategic commitments set out in [Organization Name]'s Cyber Security Policy and Incident Response Policy, translating high-level directives into actionable, repeatable steps that can be executed by the Security Operations Centre (SOC), Information Technology (IT) teams, and relevant business units during a live incident.

### 1.2 Scope

*Define the boundaries of applicability — which systems, people, processes, and data are covered. Be explicit about inclusions and exclusions.*

This procedure applies to:

**In Scope:**

- All information systems, networks, applications, and data assets classified as NCII or supporting NCII functions operated by [Organization Name], including:
  - Core banking and payment processing systems
  - Customer-facing digital channels (online banking, mobile banking)
  - Internal enterprise systems (ERP, HRMS, email infrastructure)
  - Cloud-hosted workloads and hybrid environments managed by or on behalf of [Organization Name]
  - Third-party and vendor-managed systems with access to [Organization Name]'s NCII
- All employees, contractors, vendors, and third parties who access, administer, or support [Organization Name]'s information systems
- All cyber security incidents, regardless of origin (external threat actor, insider threat, system failure, or supply chain compromise), where the confidentiality, integrity, or availability of NCII assets is, or is suspected to be, impacted

**Out of Scope:**

- Physical security incidents not involving a cyber security dimension (refer to [Physical Security Incident Procedure Reference])
- IT service interruptions caused solely by planned maintenance activities (refer to [Change Management Procedure Reference])
- Fraud events that do not involve a cyber security component (refer to [Fraud Management Procedure Reference])

### 1.3 Objectives

*List the measurable objectives this procedure is designed to achieve.*

This procedure is designed to ensure that [Organization Name]:

- Detects and identifies cyber security incidents in a timely manner, consistent with regulatory thresholds;
- Classifies incidents accurately to mobilise an appropriately scaled response;
- Contains threats rapidly to prevent lateral spread and minimise impact on NCII operations;
- Eradicates the root cause of incidents to prevent recurrence;
- Restores affected systems and services safely, with confidence in the integrity of recovered assets;
- Collects, preserves, and manages digital evidence in a manner admissible for legal and regulatory proceedings;
- Fulfils all mandatory notification and reporting obligations to the National Cyber Security Agency (NACSA), Bank Negara Malaysia (BNM), and other relevant authorities within prescribed timelines; and
- Conducts thorough post-incident reviews to drive continuous improvement.

---

## 2. Definitions and Abbreviations

*This section establishes a shared vocabulary to ensure consistent interpretation of key terms across all teams involved in incident response. Authors should verify that definitions align with those prescribed by NACSA, BNM, and internal policy.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Cyber Security Incident** | Any act or attempt, whether successful or unsuccessful, to compromise the confidentiality, integrity, or availability of an information system, network, or data, as defined under Section 3 of the Cyber Security Act 2024 (Act 854). |
| **NCII (National Critical Information Infrastructure)** | Information infrastructure, the disruption of which would have a debilitating impact on the delivery of essential services or national security, as designated under the Cyber Security Act 2024. |
| **NCII Entity** | An organization designated as an NCII entity by the Minister under Section 9 of Act 854, responsible for maintaining the security of NCII assets. |
| **NCII Sector Lead** | The government ministry or agency responsible for overseeing a designated NCII sector, as specified under Act 854. |
| **Threat Actor** | An individual, group, organization, or government that conducts or has the intent to conduct malicious cyber activities against [Organization Name]. |
| **Indicator of Compromise (IoC)** | Artefacts observed on a network or in an operating system that, with high confidence, indicate intrusion or malicious activity. |
| **Indicator of Attack (IoA)** | Behavioural patterns and tactics, techniques, and procedures (TTPs) that indicate an active or imminent attack. |
| **Containment** | Actions taken to limit the scope, spread, and impact of a cyber security incident without necessarily eliminating its root cause. |
| **Eradication** | The process of identifying and eliminating the root cause of an incident, including removal of malware, closing of exploited vulnerabilities, and revocation of compromised credentials. |
| **Recovery** | The process of restoring affected systems and services to a confirmed secure operational state following eradication. |
| **Chain of Custody** | The chronological documentation and unbroken sequence of custody, control, transfer, and analysis of digital evidence to ensure its admissibility and integrity. |
| **Digital Forensics** | The application of scientifically derived and proven methods to the collection, preservation, validation, identification, analysis, and presentation of digital evidence. |
| **Incident Commander (IC)** | The designated individual who assumes overall command and coordination of the incident response effort for a specific incident. |
| **Mean Time to Detect (MTTD)** | The average time elapsed between the occurrence of a cyber security incident and its detection by [Organization Name]. |
| **Mean Time to Respond (MTTR)** | The average time elapsed between detection of a cyber security incident and its full containment or resolution. |
| **Playbook** | A predefined, step-by-step operational guide for responding to a specific category or type of cyber security incident. |
| **Triage** | The process of evaluating and prioritizing a reported security event to determine whether it constitutes an incident and, if so, its severity and required response. |
| **War Room** | A dedicated physical or virtual coordination space established for the duration of a major incident to centralise communication, decision-making, and response activities. |

### 2.2 Abbreviations

| Abbreviation | Expansion |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CIRT | Cyber Incident Response Team |
| CSA | Cyber Security Act 2024 (Act 854) |
| DLP | Data Loss Prevention |
| EDR | Endpoint Detection and Response |
| GRC | Governance, Risk and Compliance |
| IoC | Indicator of Compromise |
| IR | Incident Response |
| ITSM | IT Service Management |
| MDR | Managed Detection and Response |
| MyCERT | Malaysia Computer Emergency Response Team |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PDPA | Personal Data Protection Act 2010 |
| RTO | Recovery Time Objective |
| RPO | Recovery Point Objective |
| SIEM | Security Information and Event Management |
| SLA | Service Level Agreement |
| SOC | Security Operations Centre |
| SOC Lead | Security Operations Centre Lead |
| TLP | Traffic Light Protocol |
| TTP | Tactics, Techniques, and Procedures |

---

## 3. Regulatory Context

*This section maps the procedure to its regulatory obligations. Authors should review the applicable provisions of Act 854 annually and update this section if the regulatory landscape changes, including any subsidiary legislation, codes of practice, or NACSA directives issued under the Act.*

### 3.1 Cyber Security Act 2024 (Act 854)

[Organization Name] is designated as an NCII entity within the **[Applicable NCII Sector, e.g., Banking and Finance]** sector under the Cyber Security Act 2024. As such, it is subject to the following obligations directly addressed by this procedure:

| Section | Title / Subject | Obligation Summary | Addressed By |
|---|---|---|---|
| Section 23 | Duty to report cyber security incidents | NCII entities must notify NACSA and the relevant NCII Sector Lead of prescribed cyber security incidents within mandatory timelines. | Section 12 of this procedure |
| Section 26 | Cyber security measures for NCII | NCII entities must establish, implement, and maintain cyber security measures, including incident response capabilities, that comply with the national cyber security standards prescribed by NACSA. | Sections 5–13 of this procedure |
| Section 27 | Cyber security audit | NCII entities are subject to cyber security audits to verify compliance with prescribed standards, for which documented incident response procedures constitute evidence. | All sections |
| Section 29 | Directions by NACSA | NACSA may issue directions to NCII entities during or following a cyber security incident; this procedure defines the escalation path for acting on such directions. | Sections 12, 13 |

### 3.2 Related Regulatory Instruments

| Instrument | Issuing Authority | Relevance |
|---|---|---|
| Risk Management in Technology (RMiT) Policy | Bank Negara Malaysia | Section 11 (Incident Management) mandates a structured incident response capability for BNM-regulated entities. |
| Personal Data Protection Act 2010 (PDPA) | PDPC Malaysia | Incidents involving personal data breaches trigger additional notification obligations. |
| National Cyber Security Policy (NCSP) | NACSA / NSC | Establishes the national framework within which this procedure must operate. |
| [NACSA Cyber Security Standards for NCII, if published] | NACSA | Prescribed technical standards applicable to NCII incident response. |
| Payment Systems Act 2003 | BNM | Applicable to incidents affecting licensed payment system operators. |

### 3.3 Internal Policy Hierarchy

*Reference the internal documents that this procedure implements.*

This procedure is subordinate to and operationalises the following [Organization Name] internal documents:

- [Cyber Security Policy — Document ID]
- [Incident Response Policy — Document ID]
- [Business Continuity Plan — Document ID]
- [Data Classification and Handling Policy — Document ID]
- [Evidence Management Policy — Document ID]

---

## 4. Roles and Responsibilities

*This section defines who is responsible, accountable, consulted, and informed for each phase of incident response. All named roles should be mapped to specific job titles or organizational units in [Organization Name]'s current organizational structure. Ensure that alternates or deputies are designated for all critical roles to maintain continuity during unavailability.*

### 4.1 Role Definitions

| Role | Organizational Position | Primary Responsibility |
|---|---|---|
| **CISO** | Chief Information Security Officer | Ultimate accountability for cyber security posture; escalation authority; regulatory liaison at executive level. |
| **SOC Lead** | Head of Security Operations Centre | Operational owner of incident response; chairs the CIRT; approves Severity 1 and Severity 2 classifications. |
| **Incident Commander (IC)** | Designated senior SOC analyst or SOC Lead (for major incidents) | Assumes tactical command of a specific incident; coordinates all response activities; owns communications during the incident. |
| **SOC Analyst (Tier 1)** | SOC Analyst | First responder; monitors alerts; performs initial triage; escalates confirmed incidents. |
| **SOC Analyst (Tier 2/3)** | Senior/Principal SOC Analyst | Performs deep-dive investigation, forensic analysis, and advanced threat hunting. |
| **IT Operations** | IT Infrastructure / Systems Administration | Executes containment and recovery actions on systems and networks under direction of the IC. |
| **Legal and Compliance** | Legal Counsel / Compliance Officer | Advises on regulatory reporting obligations; manages legal holds; coordinates with external counsel. |
| **Communications / PR** | Head of Corporate Communications | Manages external communications, including media statements and customer notifications. |
| **Business Unit Owner** | Relevant Department Head | Provides business context; approves recovery prioritisation for business-critical systems. |
| **Human Resources** | HR Manager | Involved in incidents with an insider threat dimension; manages personnel actions. |
| **Third-Party / Vendor** | [Managed Security Service Provider / Relevant Vendor] | Provides specialist support as engaged; bound by contractual incident response obligations. |

### 4.2 RACI Matrix — Incident Response Phases

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

| Activity | CISO | SOC Lead | Incident Commander | SOC Analyst (T1) | SOC Analyst (T2/3) | IT Operations | Legal & Compliance | Communications | BU Owner |
|---|---|---|---|---|---|---|---|---|---|
| **Monitoring and alert generation** | I | I | I | R | C | I | — | — | — |
| **Initial triage and classification** | I | C | C | R | C | — | — | — | — |
| **Severity escalation (Sev 2+)** | I | A | R | R | C | — | — | — | — |
| **Severity escalation (Sev 1)** | A | R | R | C | C | — | I | I | I |
| **Incident Commander appointment** | I | A | R | I | I | I | — | — | — |
| **War Room activation** | A | R | R | I | I | I | I | I | I |
| **Containment execution** | I | A | R | I | R | R | — | — | C |
| **Evidence collection** | I | A | R | C | R | C | C | — | — |
| **Eradication** | I | A | R | C | R | R | — | — | C |
| **Recovery planning** | I | A | R | I | C | R | C | — | A |
| **Recovery execution** | I | A | R | I | C | R | — | — | C |
| **NACSA notification** | A | R | C | — | — | — | R | — | — |
| **BNM notification** | A | C | — | — | — | — | R | — | — |
| **Customer / public notification** | A | C | — | — | — | — | R | R | C |
| **Post-incident review** | A | R | R | C | C | C | C | — | C |
| **Lessons learned implementation** | A | R | C | I | I | I | I | — | I |

### 4.3 24/7 On-Call Escalation Tree

*Define the escalation contacts and sequence to ensure that incident response can be initiated at any time, including outside business hours. Update this section whenever personnel or contact details change. Store actual contact details in the separately maintained and access-controlled [Incident Response Contact Directory — Document ID] to avoid exposing PII in this template.*

**Level 1 — SOC Analyst On-Call:**
- Primary: [Name — refer to On-Call Roster]
- Contact: [Refer to On-Call Directory]
- Response SLA: Acknowledge within 15 minutes

**Level 2 — SOC Lead / Senior Analyst:**
- Primary: [Name — refer to On-Call Roster]
- Contact: [Refer to On-Call Directory]
- Escalate when: Severity 2 or above confirmed, or Tier 1 analyst requires assistance

**Level 3 — CISO:**
- Primary: [Name]
- Contact: [Refer to On-Call Directory]
- Escalate when: Severity 1 confirmed, regulatory notification required, or executive decision needed

**Level 4 — CEO / Board Notification:**
- Primary: [Name]
- Contact: [Refer to On-Call Directory]
- Escalate when: Severity 1 with material business impact, regulatory breach, or reputational risk requiring board-level awareness

---

## 5. Incident Classification Matrix

*This section provides the formal taxonomy for classifying cyber security incidents by type and severity. Accurate classification at the triage stage is critical — it determines the speed of response, the personnel mobilised, the escalation path, and the regulatory notification timeline. Authors should align severity levels with those used in [Organization Name]'s SIEM tooling and ITSM ticketing system to ensure consistency.*

### 5.1 Incident Type Taxonomy

*The following categories cover the principal types of cyber security incidents that [Organization Name] may face. This list should be reviewed against current threat intelligence at each semi-annual review cycle.*

| Incident Type | Code | Description | Examples |
|---|---|---|---|
| Malware Infection | MAL | Unauthorized malicious software present on or actively executing within [Organization Name] systems. | Ransomware, wiper, banking trojan, rootkit, spyware |
| Unauthorized Access | UA | Confirmed or suspected unauthorized access to systems, applications, or data. | Credential compromise, privilege escalation, account takeover |
| Data Breach / Exfiltration | DB | Confirmed or suspected unauthorized disclosure, exfiltration, or access to sensitive or personal data. | Database dump, DLP alert confirmed exfiltration, cloud storage misconfiguration exposing data |
| Denial of Service | DOS | Attack designed to disrupt the availability of systems or services. | Volumetric DDoS, application-layer DoS, resource exhaustion |
| Phishing / Social Engineering | PHI | Deceptive communications designed to obtain credentials, install malware, or facilitate fraud. | Spear-phishing email, vishing call, smishing |
| Insider Threat | INS | Malicious or negligent actions by employees, contractors, or privileged users that compromise security. | Deliberate data theft, accidental exposure, policy violation |
| Supply Chain Compromise | SCC | Compromise of a third-party vendor, software package, or service that propagates to [Organization Name]. | Trojanized software update, compromised third-party API |
| Advanced Persistent Threat (APT) | APT | Sophisticated, long-duration intrusion by a well-resourced threat actor targeting [Organization Name]'s NCII. | Nation-state intrusion, prolonged lateral movement campaign |
| Web Application Attack | WAA | Attack targeting [Organization Name]'s public-facing or internal web applications. | SQL injection, XSS, CSRF, API abuse |
| Physical / Hybrid Attack | PHA | Physical intrusion with a cyber component, or physical access to systems enabling a cyber attack. | USB drop attack, rogue device implantation |
| Fraudulent Transaction | FRT | Cyber-enabled fraud affecting [Organization Name]'s payment systems or customer accounts. | SWIFT fraud, card-not-present fraud, account takeover-driven wire transfer |
| Miscellaneous / Unclassified | MISC | Incidents that do not fit the above categories at time of initial classification. | [To be reclassified upon investigation] |

### 5.2 Severity Classification Matrix

*The severity level assigned at triage governs the response posture and escalation path. The criteria below are based on actual or estimated impact; if uncertainty exists, classify at the higher severity level (err on the side of caution) and downgrade once more information is available.*

| Severity Level | Label | Criteria | Response Time Objective | Escalation Required |
|---|---|---|---|---|
| **Severity 1** | Critical | Confirmed or imminent compromise of NCII with material impact on operations, or confirmed exfiltration of PDPA-regulated personal data at scale, or confirmed ransomware actively encrypting critical systems, or regulatory threshold for mandatory NACSA notification met | **Immediate** — IC activated within 15 minutes; War Room within 30 minutes | SOC Lead → CISO → CEO |
| **Severity 2** | High | Confirmed incident with significant but contained impact; active threat actor presence suspected; single critical system compromised; potential personal data exposure under investigation | **Within 1 hour** — IC activated; senior analysts engaged | SOC Lead → CISO |
| **Severity 3** | Medium | Confirmed incident with moderate impact; limited scope; no confirmed data exfiltration; threat actor likely contained; no immediate business disruption | **Within 4 hours** — Standard response procedures activated | SOC Lead notified |
| **Severity 4** | Low | Suspected or low-confidence incident; policy violation; isolated malware infection on non-critical system; phishing attempt without successful compromise | **Within 24 hours** — Standard SOC handling | SOC Lead as appropriate |
| **Severity 5** | Informational | Security event assessed as non-incident after triage; false positive; anomaly requiring monitoring but not active response | **Next business day** — Logging and monitoring | None required |

### 5.3 Severity Assessment Decision Guide

*When determining severity at triage, analysts should consider the following factors. Document the rationale for the assigned severity in the incident ticket.*

**Factors that escalate severity:**

- Involvement of NCII-designated systems or data
- Evidence of active threat actor access or lateral movement
- Confirmed or suspected data exfiltration
- Impact on payment processing, core banking, or customer-facing services
- More than [50] endpoints or systems affected
- External reporting or detection (customer, regulator, media, third party)
- Involvement of privileged accounts (Domain Admin, root, service accounts)
- Evidence of persistence mechanisms installed by threat actor
- Cross-sector or national security implications

**Factors that reduce severity:**

- Incident confirmed as isolated to non-NCII, non-production environment
- Threat actor access revoked and threat fully contained
- No data at risk or confirmed data exfiltration ruled out
- Affected systems have known clean backups available and verified

---

## 6. Incident Response Lifecycle Overview

*This section provides an end-to-end view of [Organization Name]'s incident response lifecycle. Each phase is covered in detail in subsequent sections. This overview serves as a quick-reference summary for operational teams and a governance-level view for management.*

### 6.1 Lifecycle Phases

[Organization Name]'s incident response lifecycle consists of six phases, aligned with international best practice (NIST SP 800-61r2) and adapted to meet the specific obligations of Act 854:

```
[Preparation] → [Detection & Identification] → [Containment] → [Eradication] → [Recovery] → [Post-Incident Review]
                         ↑                                                                             |
                         └─────────────────── Lessons Learned Feedback Loop ───────────────────────┘
```

| Phase | Objective | Key Output |
|---|---|---|
| **1. Preparation** | Maintain readiness through trained personnel, configured tooling, tested playbooks, and documented procedures. | Updated procedures, trained team, exercised playbooks |
| **2. Detection & Identification** | Detect anomalies and security events; triage to determine if an incident has occurred; classify by type and severity. | Incident ticket with classification and initial evidence |
| **3. Containment** | Limit the scope and spread of the incident; isolate affected systems; prevent further damage. | Containment confirmation; systems isolated or quarantined |
| **4. Eradication** | Remove the threat from the environment; eliminate root cause; close vulnerabilities exploited. | Clean environment verified; vulnerabilities patched |
| **5. Recovery** | Restore affected systems to verified secure operation; validate integrity; resume business services. | Systems restored; business services resumed; recovery validated |
| **6. Post-Incident Review** | Analyse the incident; identify lessons learned; implement improvements; complete regulatory reporting. | Post-incident report; improvement actions; regulatory submissions |

### 6.2 Concurrent Activities

*Certain activities run in parallel across multiple phases and must be maintained throughout the incident lifecycle.*

- **Evidence collection and preservation** — Active from Detection through Eradication
- **Incident documentation** — Continuous from Detection through Post-Incident Review
- **Regulatory notification tracking** — Active from Detection through Post-Incident Review
- **Stakeholder communication** — Active from Containment through Post-Incident Review
- **Legal hold management** — Active from Detection through legal conclusion

---

## 7. Detection and Triage Workflow

*This section defines the operational steps for detecting security events, triaging them to confirm whether an incident has occurred, and classifying confirmed incidents. The detection capability depends on the tooling and data sources maintained by [Organization Name]'s SOC. Authors should ensure that the detection sources listed below reflect [Organization Name]'s actual deployed technology stack and update this section whenever significant changes are made to the SOC architecture.*

### 7.1 Detection Sources

*[Organization Name]'s SOC monitors the following sources for security events and anomalies. This list should be reviewed and updated semi-annually.*

| Detection Source | Technology / Platform | Coverage | Alert Priority |
|---|---|---|---|
| SIEM Platform | [e.g., Microsoft Sentinel / Splunk / IBM QRadar] | Network, endpoint, cloud, application logs | Primary |
| Endpoint Detection and Response (EDR) | [e.g., CrowdStrike Falcon / Microsoft Defender for Endpoint] | All managed endpoints and servers | Primary |
| Network Intrusion Detection / Prevention | [e.g., Palo Alto NGFW / Darktrace] | North-south and east-west network traffic | Primary |
| Email Security Gateway | [e.g., Proofpoint / Microsoft Defender for Office 365] | All inbound and outbound email | Primary |
| Web Application Firewall (WAF) | [e.g., Cloudflare / F5 / AWS WAF] | Public-facing web applications | Primary |
| Data Loss Prevention (DLP) | [e.g., Symantec DLP / Microsoft Purview] | Endpoint and network data transfers | Primary |
| Vulnerability Management | [e.g., Tenable / Qualys] | All in-scope systems | Secondary |
| Threat Intelligence Feeds | [e.g., MISP / MyCERT feeds / Commercial TI] | IoC matching across all sources | Secondary |
| User and Entity Behaviour Analytics (UEBA) | [Integrated with SIEM or standalone] | User and service account behaviour | Secondary |
| Cloud Security Posture Management (CSPM) | [e.g., Microsoft Defender for Cloud / Prisma Cloud] | Cloud workloads and configurations | Secondary |
| External Reporting | Customers, regulators (NACSA, BNM), third parties, MyCERT | — | Immediate escalation |
| Dark Web Monitoring | [e.g., Recorded Future / Digital Shadows] | Credential leaks, data dumps mentioning [Organization Name] | Secondary |

### 7.2 Initial Alert Handling — Tier 1 SOC Analyst

*The following workflow applies to every security alert received by the SOC, regardless of source. Tier 1 analysts must complete all steps and document findings in the ITSM ticketing system before closing or escalating an alert.*

**Step 1 — Alert Receipt and Acknowledgement**
- Acknowledge the alert in [SIEM Platform] within **15 minutes** of generation
- Log the alert in [ITSM Platform, e.g., ServiceNow / Jira Service Management] with the following minimum information:
  - Alert ID / Reference Number
  - Date and Time (UTC) of alert generation
  - Alert source and detection tool
  - Affected asset(s) (hostname, IP address, user account)
  - Raw alert details / log snippets

**Step 2 — Initial Context Gathering**
- Query [SIEM Platform] for related events within the preceding [24–72] hours involving the same asset(s) or user(s)
- Check [Threat Intelligence Platform] for any known IoC matches associated with alert artefacts
- Review asset inventory records for the affected system(s) — owner, classification, business criticality, and NCII designation
- Check for any concurrent alerts, open incidents, or recent change activity involving the affected asset(s)

**Step 3 — False Positive Assessment**
- Apply the relevant [SIEM Use Case / Detection Rule] tuning criteria to assess likelihood of false positive
- If assessed as a false positive:
  - Document the justification with supporting evidence
  - Update the ticket status to "Closed — False Positive"
  - Log the false positive for use-case tuning purposes in [Tuning Register]
  - **Do not close without documentation**
- If assessed as a true positive or uncertain: proceed to Step 4

**Step 4 — Severity Classification**
- Apply the Severity Classification Matrix (Section 5.2) to assign an initial severity level
- Document the criteria used for the classification in the incident ticket
- If Severity 1 or Severity 2: **immediately escalate to SOC Lead without delay**
- If Severity 3: notify SOC Lead and proceed with Tier 2 escalation
- If Severity 4 or 5: handle within Tier 1 per standard operating procedures

**Step 5 — Incident Ticket Creation**
- Create a formal Incident ticket in [ITSM Platform] with the following mandatory fields populated:

| Field | Value |
|---|---|
| Incident ID | [Auto-generated] |
| Incident Title | [Descriptive — e.g., "Suspected Ransomware — Finance File Server FS-01"] |
| Detection Date/Time (UTC) | [DD/MM/YYYY HH:MM UTC] |
| Reported By | [Name / Detection Source] |
| Incident Type | [Refer to Section 5.1 taxonomy] |
| Severity | [1 / 2 / 3 / 4 / 5] |
| Affected Assets | [List all known affected hostnames, IPs, accounts] |
| NCII Asset Involved? | [Yes / No / Unknown] |
| Initial Description | [Factual narrative of what is known at this point] |
| Assigned Analyst | [Name] |
| Status | Open — Triage |

### 7.3 Escalated Triage — Tier 2 / Tier 3 SOC Analyst

*For Severity 1–3 incidents, a Tier 2 or Tier 3 analyst conducts a deeper investigation to confirm the nature and scope of the incident before containment actions are taken. The goal of this phase is to gather sufficient evidence to confirm the incident, understand the attack vector, and scope the potential blast radius — not to achieve full forensic understanding before acting.*

**Step 1 — Deep-Dive Log Analysis**
- Extend the SIEM query window to cover [7 days] prior to the earliest known event
- Identify the initial attack vector (entry point) where possible
- Map the sequence of events using a timeline — record all relevant log entries with timestamps (UTC)
- Identify all affected assets, accounts, and data through lateral movement analysis
- Pivot on IoCs (IP addresses, file hashes, domains, user agents) to identify additional affected systems

**Step 2 — Threat Intelligence Correlation**
- Submit identified IoCs to [Threat Intelligence Platform] for enrichment
- Query MyCERT, NACSA advisories, and commercial threat intelligence for attribution or campaign context
- Document the assessed threat actor TTP mapping against MITRE ATT&CK framework

**Step 3 — Scope Determination**
- Determine the full list of:
  - Affected endpoints and servers
  - Compromised user and service accounts
  - Data at risk (classification, estimated volume, PDPA applicability)
  - Systems with evidence of lateral movement
  - Persistence mechanisms identified
- Update the incident ticket with scope findings

**Step 4 — NCII Impact Assessment**
- Assess whether any affected systems are NCII-designated assets (refer to [NCII Asset Register — Document ID])
- Assess impact on critical business services dependent on affected systems
- Assess whether regulatory notification thresholds under Section 23 of Act 854 have been met or are likely to be met
- Document assessment in the incident ticket and notify SOC Lead

**Step 5 — Incident Confirmation and Severity Validation**
- Confirm or revise the initial severity classification based on findings
- If Severity 1 confirmed: SOC Lead to activate War Room protocol and notify CISO
- Brief SOC Lead verbally and update incident ticket with findings summary

### 7.4 Triage Decision Tree

*The following decision framework guides analysts through the triage process. For each security alert, work through the questions sequentially.*

```
Security Alert Received
        │
        ▼
Is this a known false positive pattern?
   ├── YES → Close as False Positive (document and log for tuning)
   └── NO ↓
        │
        ▼
Is there evidence of malicious activity or policy violation?
   ├── NO → Monitor / Close as Informational (Severity 5)
   └── YES ↓
        │
        ▼
Is an NCII asset involved or potentially involved?
   ├── YES → Escalate immediately to SOC Lead
   └── NO ↓
        │
        ▼
Assess severity using matrix (Section 5.2)
        │
   ┌────┴─────────────────────┬──────────────────┐
   ▼                          ▼                  ▼
Sev 1-2                    Sev 3              Sev 4-5
Immediate escalation    Notify SOC Lead    Standard SOC handling
IC activation           Tier 2 analysis    Monitor and document
```

---

## 8. Containment Strategies by Incident Type

*This section defines the containment actions applicable to each incident type. Containment is the most time-critical phase and must be initiated as soon as the incident scope is sufficiently understood — analysts should not delay containment to achieve perfect forensic understanding first. However, forensic evidence must be preserved before containment actions alter system state. All containment actions must be authorised by the Incident Commander and documented in the incident ticket with the rationale for each action.*

### 8.1 General Containment Principles

*Before executing incident-type-specific containment steps, the Incident Commander must confirm the following general principles are applied in all cases:*

- **Preserve before you contain:** Capture memory images, volatile data, and network traffic captures before isolating or powering down systems wherever operationally possible
- **Coordinate with Business Unit Owners:** Containment actions (particularly network isolation and system shutdown) must be communicated to the relevant Business Unit Owner before execution, except where immediate action is necessary to prevent imminent spread
- **Authorise actions:** All containment actions must be approved by the Incident Commander and logged with timestamp in the incident ticket
- **Do not tip off the threat actor prematurely:** In APT scenarios, consider the risk that premature containment actions alert the threat actor and cause them to accelerate exfiltration or activate destructive payloads before the full scope is understood
- **Avoid over-containment:** Unnecessary isolation of critical business systems causes operational impact disproportionate to the benefit; contain at the minimum necessary scope

### 8.2 Containment Playbooks by Incident Type

#### 8.2.1 Ransomware

| Step | Action | Executed By | Authorised By |
|---|---|---|---|
| 1 | Isolate affected endpoint(s) from the network immediately (disable NIC or move to quarantine VLAN) | IT Operations | Incident Commander |
| 2 | Identify the ransomware variant using file extension analysis and ransom note content; cross-reference with ID-Ransomware or equivalent | SOC Analyst T2 | — |
| 3 | Identify the patient zero (initial infection point) and determine infection vector | SOC Analyst T2 | — |
| 4 | Block identified IoCs (C2 IP addresses, domains) at perimeter firewall and DNS | IT Operations | Incident Commander |
| 5 | Disable affected user accounts and reset passwords for all accounts with access to affected systems | IT Operations / AD Admin | Incident Commander |
| 6 | Identify and isolate any additional systems with evidence of ransomware execution or staging activity | IT Operations | Incident Commander |
| 7 | Disable SMB shares and mapped drives accessible from affected systems to prevent spread | IT Operations | Incident Commander |
| 8 | Capture memory image and disk image of affected systems before any recovery action | SOC Analyst T2 / Digital Forensics | Incident Commander |
| 9 | Assess RTO/RPO and identify the most recent known-clean backup | IT Operations | SOC Lead |
| 10 | Notify SOC Lead, CISO, and initiate Section 23 notification assessment | SOC Lead | CISO |

**Do NOT:**
- Pay the ransom without explicit board-level and legal authorisation and consultation with NACSA/law enforcement
- Reboot affected systems before capturing forensic evidence
- Attempt to decrypt files without expert guidance (may destroy evidence or permanently corrupt data)

#### 8.2.2 Unauthorized Access / Account Compromise

| Step | Action | Executed By | Authorised By |
|---|---|---|---|
| 1 | Immediately disable or lock compromised account(s) in Active Directory / Identity Provider | IT Operations / IAM Admin | Incident Commander |
| 2 | Revoke all active sessions and OAuth tokens associated with compromised account(s) | IT Operations / IAM Admin | Incident Commander |
| 3 | Force password reset for compromised account(s) and any accounts with recent access from the same source IP | IT Operations | Incident Commander |
| 4 | Review and revoke any persistence mechanisms created by the threat actor (new accounts, service accounts, SSH keys, API keys) | SOC Analyst T2 / IT Operations | Incident Commander |
| 5 | Block source IP addresses and user agents associated with the unauthorized access at perimeter firewall and WAF | IT Operations | Incident Commander |
| 6 | Enable enhanced logging on all privileged accounts for the duration of the investigation | IT Operations | SOC Lead |
| 7 | Assess lateral movement — query authentication logs for all systems accessed by the compromised account(s) | SOC Analyst T2 | — |
| 8 | Isolate any systems where the threat actor has established persistence or executed commands | IT Operations | Incident Commander |
| 9 | Verify MFA is enforced on all affected accounts post-reset | IT Operations / IAM Admin | SOC Lead |

#### 8.2.3 Data Breach / Data Exfiltration

| Step | Action | Executed By | Authorised By |
|---|---|---|---|
| 1 | Terminate the exfiltration channel (block destination IPs/domains at firewall; close exploited application vulnerability) | IT Operations | Incident Commander |
| 2 | Preserve DLP logs, proxy logs, and SIEM evidence of the exfiltration before taking any further action | SOC Analyst T2 | Incident Commander |
| 3 | Identify the data set accessed — query database audit logs, file access logs, and DLP alerts | SOC Analyst T2 | — |
| 4 | Determine whether exfiltrated data is subject to PDPA (personal data of Malaysian data subjects) | Legal & Compliance / SOC Lead | CISO |
| 5 | Isolate the source system from which exfiltration occurred | IT Operations | Incident Commander |
| 6 | Revoke credentials of any accounts used in the exfiltration | IT Operations | Incident Commander |
| 7 | Engage Legal & Compliance to initiate legal hold on all relevant logs and artefacts | Legal & Compliance | CISO |
| 8 | Initiate notification assessment under Section 23 of Act 854 and PDPA obligations | Legal & Compliance / SOC Lead | CISO |
| 9 | Notify affected Business Unit Owners of the data set and estimated scope | SOC Lead | CISO |

#### 8.2.4 Denial of Service (DDoS)

| Step | Action | Executed By | Authorised By |
|---|---|---|---|
| 1 | Confirm the attack vector (volumetric, protocol, application layer) via traffic analysis | SOC Analyst T2 / Network Team | — |
| 2 | Activate upstream DDoS mitigation service / scrubbing centre if contracted | IT Operations | Incident Commander |
| 3 | Implement rate limiting and geo-blocking at perimeter if volumetric attack from identifiable sources | IT Operations | Incident Commander |
| 4 | Enable WAF emergency ruleset if application-layer attack | IT Operations | Incident Commander |
| 5 | Engage ISP / upstream provider for traffic null-routing if attack volume overwhelms on-premises controls | SOC Lead | CISO |
| 6 | Activate Business Continuity failover for affected services if availability SLA is breached | IT Operations | BU Owner / CISO |
| 7 | Monitor and document attack traffic patterns for post-incident analysis and potential law enforcement referral | SOC Analyst T2 | — |

#### 8.2.5 Phishing / Malware via Email

| Step | Action | Executed By | Authorised By |
|---|---|---|---|
| 1 | Quarantine the malicious email from all recipient mailboxes using [Email Security Platform] admin console | IT Operations | Incident Commander |
| 2 | Block the sender domain and IP at the email security gateway | IT Operations | Incident Commander |
| 3 | Submit email samples and attachments to sandbox for analysis | SOC Analyst T2 | — |
| 4 | Identify all users who received, opened, or clicked links in the malicious email from email gateway logs | SOC Analyst T2 | — |
| 5 | For users who clicked links or opened attachments: isolate endpoints and treat as potential malware incident | IT Operations | Incident Commander |
| 6 | Block malicious URLs and domains at DNS layer and web proxy | IT Operations | Incident Commander |
| 7 | Issue staff advisory via out-of-band communication channel (not email) | Communications / SOC Lead | CISO |
| 8 | Reset credentials for any users who may have submitted credentials to phishing page | IT Operations | Incident Commander |

#### 8.2.6 Insider Threat

| Step | Action | Executed By | Authorised By |
|---|---|---|---|
| 1 | Do NOT alert the suspected insider to avoid evidence destruction — maintain strict need-to-know | SOC Lead | CISO |
| 2 | Enable enhanced, covert logging on the suspected insider's accounts and devices (coordinate with Legal) | SOC Analyst T2 / IT Operations | CISO / Legal |
| 3 | Preserve existing logs and evidence immediately before they are overwritten | SOC Analyst T2 | Incident Commander |
| 4 | Engage HR and Legal immediately — all actions must be legally defensible | Legal & Compliance / HR | CISO |
| 5 | Revoke access (in coordination with HR for disciplinary action timing) | IT Operations | CISO / HR / Legal |
| 6 | Seize devices (physical and virtual) under proper chain of custody procedures | Digital Forensics / HR | CISO / Legal |
| 7 | Assess scope of data accessed or exfiltrated | SOC Analyst T2 | — |

---

## 9. Eradication Procedures

*Eradication is the process of completely removing the threat from [Organization Name]'s environment and eliminating the conditions that allowed the incident to occur. Eradication must not begin until containment is confirmed and sufficient forensic evidence has been collected. Rushing to eradication without completing containment risks leaving residual threat actor access in the environment. All eradication steps must be documented and verified.*

### 9.1 Eradication Readiness Checklist

*Before initiating eradication, the Incident Commander must confirm all of the following:*

- [ ] Containment is confirmed — all known affected systems are isolated or quarantined
- [ ] Forensic evidence collection is complete for all affected systems (Section 11)
- [ ] Legal hold is in place for all relevant evidence (for Severity 1–2 incidents)
- [ ] Full scope of affected systems and accounts has been determined to the extent possible
- [ ] Root cause (or working hypothesis for root cause) has been identified
- [ ] Eradication plan has been reviewed and approved by the SOC Lead
- [ ] IT Operations team has been briefed on all eradication tasks and their sequence
- [ ] Business Unit Owners have been informed of planned actions and estimated timelines

### 9.2 Malware and Threat Actor Artefact Removal

*For each confirmed affected system, execute the following steps in the order specified. Do not skip steps to accelerate the process.*

**Step 1 — Malware Identification and Scoping**
- Obtain and validate the malware sample(s) identified during the investigation
- Map all identified malware components: executable, persistence mechanisms, dropped files, registry modifications, scheduled tasks, and C2 communication channels
- Cross-reference against [Threat Intelligence Platform] for known variants and all associated artefacts

**Step 2 — Malware Removal Options Assessment**
Assess the appropriate remediation approach for each affected system:

| System Condition | Recommended Remediation Approach | Justification |
|---|---|---|
| Rootkit or firmware-level compromise detected | Full reimaging from known-clean golden image | Rootkits can survive AV scans and OS reinstallation |
| Ransomware encryption confirmed | Full reimaging and restore from verified clean backup | Encrypted systems cannot be reliably cleaned |
| Malware identified and fully understood; no persistence | AV/EDR-assisted removal with manual verification | May be appropriate for isolated, well-understood infections |
| APT confirmed with prolonged access | Full reimaging of all affected systems | Assumption must be that the environment is fully compromised |
| Unknown malware or uncertain scope | Full reimaging — do not attempt to clean | Risk of residual access is too high |

**Step 3 — Threat Actor Persistence Removal**

For any system where manual remediation is approved by the Incident Commander:

- Remove all identified malware files (verify using file hashes)
- Delete malicious scheduled tasks, services, and startup entries
- Remove malicious registry keys and values
- Revoke all certificates or keys generated or compromised by the threat actor
- Remove any backdoors, web shells, or remote access tools installed by the threat actor
- Delete threat-actor-created local and domain accounts
- Remove any persistence established via WMI subscriptions, Group Policy modifications, or similar mechanisms

**Step 4 — Vulnerability Remediation**

- Identify the specific vulnerability(ies) exploited as the initial access vector
- Apply vendor-supplied patches where available; prioritise based on exploitability and asset criticality
- If a patch is not available:
  - Apply compensating controls (disable the vulnerable feature, apply WAF rules, network segmentation)
  - Document compensating controls in the incident ticket and [Vulnerability Register]
  - Schedule for remediation as soon as patch is available
- Apply additional patches for any vulnerabilities identified on affected systems during the investigation that may have facilitated lateral movement or privilege escalation

**Step 5 — Credential Reset and Access Review**

- Reset passwords for all compromised accounts (identified during triage and investigation)
- Reset passwords for all accounts that had access to compromised systems, even if compromise is not confirmed (for Severity 1 incidents)
- Revoke and reissue all API keys, service account credentials, and certificates associated with affected systems
- Review and reset all privileged account credentials (Domain Admin, local Administrator accounts) across the environment
- Enable or enforce MFA on all affected accounts
- Review and remove all unnecessary privileges and access rights on affected accounts

**Step 6 — Eradication Verification**

- Re-scan all affected systems using EDR and AV tools post-remediation
- Conduct a targeted threat hunting exercise on the network to identify any residual threat actor activity
- Verify that all identified IoCs are blocked at all control points (firewall, DNS, proxy, email gateway)
- Review SIEM alerts for any recurrence of activity patterns associated with the incident
- Obtain Incident Commander sign-off that eradication is complete before proceeding to Recovery

### 9.3 Eradication Documentation

*The following information must be recorded in the incident ticket upon completion of eradication:*

| Field | Content |
|---|---|
| Eradication Completion Date/Time (UTC) | [DD/MM/YYYY HH:MM UTC] |
| Systems Eradicated (list) | [Hostname — Method — Analyst] |
| Vulnerabilities Patched | [CVE / Description — Patch Applied — Date] |
| Accounts Reset | [Count — types] |
| Threat Actor Artefacts Removed | [List of removed files, keys, accounts, persistence mechanisms] |
| Eradication Verification Performed By | [Name — Date] |
| Incident Commander Sign-off | [Name — Date — Time] |
| Residual Risk / Outstanding Items | [Any known gaps or compensating controls in place] |

---

## 10. Recovery and Restoration Steps

*Recovery is the process of returning affected systems and services to verified, secure operational status. Recovery must be treated as a security activity, not merely a technical restoration — every system returning to production must be confirmed as clean and its integrity verified before reconnection. Recovery activities must be coordinated with Business Unit Owners to sequence restoration in alignment with business criticality and recovery time objectives.*

### 10.1 Recovery Planning

*Before initiating recovery, the Incident Commander and SOC Lead must approve a Recovery Plan specific to the incident. The Recovery Plan must address the following elements:*

**Recovery Sequencing — Prioritisation Criteria:**

| Priority | System Category | Rationale |
|---|---|---|
| Priority 1 | NCII-designated core systems (e.g., core banking, payment processing) | Regulatory and systemic importance; directly impacts financial sector stability |
| Priority 2 | Customer-facing digital channels | Revenue impact and reputational risk |
| Priority 3 | Internal business-critical systems (treasury, risk management) | Operational continuity |
| Priority 4 | Corporate productivity systems (email, collaboration) | Staff productivity |
| Priority 5 | Non-critical / development and test environments | Lowest business impact |

**Recovery Method Selection:**

| Method | When Applicable | Considerations |
|---|---|---|
| Restore from verified clean backup | Preferred method for all reimaged systems | Verify backup integrity and confirm backup predates infection using forensic evidence |
| Rebuild from golden image | Where no clean backup is available or backup integrity cannot be verified | Requires reconfiguration; allows for hardened baseline to be applied |
| In-place recovery (patched/cleaned system) | Only for Severity 3–4 incidents where malware removal has been verified | Requires enhanced monitoring post-recovery |
| Failover to DR environment | Where RTO cannot be met by standard restoration methods | Confirm DR environment was not itself affected by the incident |

### 10.2 System Restoration Procedure

*Execute the following steps for each system being restored. Document completion of each step in the incident ticket.*

**Step 1 — Pre-Restoration Integrity Check**
- Confirm the incident has been classified as contained and eradicated (Incident Commander sign-off from Section 9.3)
- Identify the backup or golden image to be used; confirm the backup creation date predates the incident (use forensic timeline)
- Verify backup integrity using cryptographic hash verification
- Confirm the backup has not itself been affected by the incident (review backup system access logs for the incident period)

**Step 2 — Isolated Restoration**
- Restore the system in an isolated network environment (separate VLAN or offline environment) before reconnecting to the production network
- Apply all outstanding security patches to the restored system before reconnection
- Run full EDR/AV scan on the restored system in the isolated environment
- Verify the restored system configuration against the approved hardening baseline

**Step 3 — Security Validation**
- Conduct targeted threat hunting on the restored system to confirm no residual malicious artefacts
- Verify all logging agents (EDR, SIEM agent) are operational and reporting to SOC monitoring platforms
- Confirm all unnecessary services, ports, and accounts have been disabled or removed
- Verify MFA is enforced for all accounts with access to the system

**Step 4 — Business Validation**
- Engage the Business Unit Owner and relevant technical team to perform functional testing on the restored system
- Confirm that the system meets operational requirements before accepting it back into production
- Document Business Unit Owner sign-off on the restored system

**Step 5 — Production Reconnection**
- Reconnect the system to the production network under enhanced monitoring for a minimum period of [72 hours / [Organization Name]-specified period]
- Brief SOC team on the system's re-entry into production and alert them to watch for any recurrence of incident-related activity
- Monitor the reconnected system closely via SIEM and EDR for the enhanced monitoring period

**Step 6 — Post-Recovery Monitoring**
- Maintain enhanced SOC monitoring on all recovered systems for [30 days] following the incident
- Set up specific detection rules in [SIEM Platform] targeting TTPs and IoCs associated with the incident
- Review monitoring data at daily intervals during the enhanced monitoring period and escalate any anomalies immediately

### 10.3 Service Restoration Communication

*Business Unit Owners and relevant stakeholders must be kept informed throughout the recovery phase. Use the following communication schedule as a minimum:*

| Milestone | Notification Required To | Method | Lead |
|---|---|---|---|
| Recovery plan approved | CISO, BU Owners | Secure email / War Room update | SOC Lead |
| Each system cleared for reconnection | BU Owner (system owner), CISO | Secure email confirmation | Incident Commander |
| Customer-facing services restored | BU Owner, Communications, CISO | Incident update brief | SOC Lead |
| Full recovery declared | CISO, CEO, BU Owners, Legal | Formal incident closure communication | CISO |
| Regulatory update | NACSA, BNM | Formal regulatory submission | Legal & Compliance / CISO |

### 10.4 Recovery Completion Criteria

*The Incident Commander may declare recovery complete only when all of the following criteria are met:*

- [ ] All affected systems have been restored and verified as clean
- [ ] All affected systems are reconnected to the production network and operational
- [ ] Business Unit Owners have confirmed restoration of all critical business services
- [ ] All affected accounts have been reset and access reviewed
- [ ] Enhanced monitoring is in place for the post-recovery period
- [ ] All regulatory reporting obligations have been met or are on track within prescribed timelines
- [ ] Incident ticket has been updated with full recovery details
- [ ] SOC Lead and CISO have signed off on recovery completion

---

## 11. Evidence Collection and Chain of Custody

*Digital evidence collected during a cyber security incident may be required for regulatory investigations, law enforcement referrals, civil litigation, or internal disciplinary proceedings. Evidence that is improperly collected, handled, or documented may be inadmissible in court or regulatory proceedings. All evidence collection activities must follow the procedures defined in this section and must be performed by, or under the direct supervision of, personnel who have received appropriate digital forensics training. Authors should ensure that this section is reviewed by [Organization Name]'s Legal Counsel to confirm alignment with Malaysian evidentiary standards.*

### 11.1 Evidence Collection Principles

*The following principles govern all evidence collection activities during incident response. These principles reflect the requirements of the Evidence Act 1950 (as amended) and international digital forensics best practice (ISO/IEC 27037).*

- **Integrity:** Evidence must be collected in a manner that preserves its integrity. Use write blockers and cryptographic hashing to create verified forensic copies. Never analyse original evidence media directly.
- **Authenticity:** Maintain an unbroken chain of custody from collection to final disposition. Every transfer of evidence must be documented.
- **Completeness:** Collect all potentially relevant evidence, including volatile data (memory, running processes, active connections) before non-volatile data.
- **Legal authority:** Confirm the legal basis for evidence collection (employer authority, court order, regulatory power) before collecting evidence, particularly from personal devices.
- **Minimisation:** Collect only the evidence necessary for the investigation. Avoid collecting personal data beyond what is required.
- **Timeliness:** Volatile evidence is lost when a system is powered off — capture memory images and network connections before other actions where operationally possible.

### 11.2 Evidence Types and Collection Priority

| Priority | Evidence Type | Collection Method | Volatility |
|---|---|---|---|
| 1 | System RAM / Memory image | Live memory acquisition tool (e.g., Magnet RAM Capture, WinPmem, LiME for Linux) | Highest — lost on reboot/shutdown |
| 2 | Running processes, network connections, open files | Automated triage tool or manual commands (documented in Appendix B) | High |
| 3 | System and application event logs | SIEM pull, log export via agent, or manual collection | Medium — may be overwritten |
| 4 | Network traffic captures (PCAP) | Network TAP, SPAN port capture, or IDS/IPS logs | Medium |
| 5 | Disk image / forensic copy | Write-blocker and imaging tool (e.g., FTK Imager, dd) | Low |
| 6 | Application logs (web server, database, authentication) | Log export from application platform | Low to medium |
| 7 | Email artefacts | E-discovery export from mail platform | Low |
| 8 | Cloud audit logs | Export from cloud platform (Azure Activity Log, AWS CloudTrail, GCP Audit Log) | Low — may have retention limits |
| 9 | Physical evidence (USB devices, printed documents) | Secure physical collection under witnessed chain of custody | Non-volatile |

### 11.3 Evidence Collection Procedure

**Step 1 — Authorisation**
- Obtain written authorisation from the Incident Commander before commencing evidence collection
- Record the authorisation in the Evidence Log (Appendix C template)
- Confirm the legal basis for collection with Legal & Compliance for Severity 1–2 incidents

**Step 2 — Preparation**
- Prepare forensically clean collection media (verified using hash value before use)
- Document the condition of the target system before any actions are taken (photographs, system information screenshot)
- Assign an Evidence Reference Number using the format: [ORG-IR-YYYY-NNNN-E-NN] where NNNN is the incident number and NN is the evidence item number

**Step 3 — Collection**
- Follow the priority order in Section 11.2
- For each evidence item collected:
  - Record the collection start and end time (UTC)
  - Record the collection method and tool used (including tool version)
  - Calculate and record the SHA-256 cryptographic hash of the original and acquired copy
  - Verify that the hashes match (acquisition integrity)
  - Record all of the above in the Evidence Log

**Step 4 — Packaging and Labelling**
- Label all physical evidence containers and storage media with:
  - Evidence Reference Number
  - Incident ID
  - Date and time of collection (UTC)
  - Collector's name and signature
  - Brief description of contents
  - Hash value (for digital media)
- Seal physical containers with tamper-evident tape; record the seal number
- Store digital evidence on encrypted, access-controlled storage in the [Evidence Safe / Digital Evidence Repository]

**Step 5 — Documentation**
- Update the Evidence Log (Appendix C) immediately upon collection of each item
- Record all access to evidence in the Chain of Custody Log (Appendix C)
- Brief the Incident Commander on evidence collected upon completion

### 11.4 Chain of Custody Log

*Every transfer of custody of any piece of evidence must be recorded in the Chain of Custody Log. Use the template in Appendix C. A failure in chain of custody may result in evidence being deemed inadmissible in legal proceedings.*

| Evidence Ref # | Transferred From | Transferred To | Date / Time (UTC) | Purpose of Transfer | Witness | Signature |
|---|---|---|---|---|---|---|
| [ORG-IR-YYYY-NNNN-E-NN] | [Name / Role] | [Name / Role] | [DD/MM/YYYY HH:MM UTC] | [Analysis / Storage / Regulatory submission] | [Name] | [Signature] |

### 11.5 Evidence Retention

*Digital evidence and associated chain of custody documentation must be retained in accordance with the following schedule. These timelines reflect the requirements of Act 854, PDPA, and BNM's RMiT Policy. Legal & Compliance must be consulted if evidence is subject to a legal hold, which may extend the retention period indefinitely.*

| Incident Severity | Minimum Retention Period | Notes |
|---|---|---|
| Severity 1 | 7 years | Extended retention for NCII incidents; subject to legal hold extension |
| Severity 2 | 5 years | Subject to legal hold extension |
| Severity 3 | 3 years | Subject to legal hold extension |
| Severity 4–5 | 1 year | Standard operational log retention |

### 11.6 Evidence Disposal

*Upon expiry of the retention period (or earlier if directed by Legal & Compliance), evidence must be disposed of securely:*

- Digital evidence: Cryptographic erasure or physical destruction of storage media, certified by IT Operations
- Physical evidence: Secure shredding or destruction, witnessed and documented
- All disposals must be recorded in the Evidence Disposal Register (Appendix C)

---

## 12. Notification and Reporting Obligations

*This section defines [Organization Name]'s mandatory and discretionary notification obligations arising from cyber security incidents. Failure to comply with mandatory notification timelines under Act 854 constitutes an offence and may result in significant civil and criminal penalties. Authors must maintain awareness of any updates to notification thresholds published by NACSA and update this section accordingly. All external notifications must be coordinated through Legal & Compliance and approved by the CISO before transmission.*

### 12.1 Mandatory Notification — NACSA (Section 23, Act 854)

*Section 23 of the Cyber Security Act 2024 imposes a mandatory duty on NCII entities to notify NACSA and the NCII Sector Lead of prescribed cyber security incidents. Authors must refer to the most current NACSA guidelines for the precise definition of prescribed incidents and notification timelines, as these may be specified by subsidiary legislation or administrative direction.*

| Notification Requirement | Timeline | Recipient | Method | Lead |
|---|---|---|---|---|
| **Initial notification** of a prescribed cyber security incident | **[As prescribed by NACSA — e.g., within 6 hours of confirmation]** | NACSA; NCII Sector Lead ([Relevant Ministry/Agency]) | NACSA Incident Reporting Portal / Secure channel as directed by NACSA | SOC Lead / CISO |
| **Supplementary / interim report** with updated investigation findings | **[As prescribed by NACSA — e.g., within 72 hours]** | NACSA; NCII Sector Lead | NACSA Reporting Portal | Legal & Compliance / CISO |
| **Final incident report** upon resolution | **[As prescribed by NACSA — e.g., within 14 days of resolution]** | NACSA; NCII Sector Lead | Formal written report | CISO |

**Information required for initial NACSA notification:**

- [Organization Name] and NCII sector designation
- Incident reference number
- Date and time of detection (UTC)
- Brief description of the incident (type, nature, affected systems)
- Initial assessment of impact on NCII operations
- Containment status
- Contact details for [Organization Name]'s designated liaison

### 12.2 Mandatory Notification — Bank Negara Malaysia (BNM)

*BNM-regulated entities must notify BNM of material cyber security incidents in accordance with the Risk Management in Technology (RMiT) Policy and any applicable BNM circulars. Authors should refer to the most current BNM RMiT notification requirements and update this table accordingly.*

| Incident Type | Notification Timeline | BNM Notification Channel | Report Content |
|---|---|---|---|
| Material cyber security incident affecting regulated systems or customer data | **Within [1 hour] of confirmed material incident** | BNM LINK / BNM Operational Risk Reporting Channel | Incident type, affected systems, estimated impact, containment status |
| Significant service disruption (availability impact on core services) | **Within [1 hour]** | BNM LINK | Duration of disruption, systems affected, customer impact, restoration timeline |
| Updated report | **Within [24 hours]** | BNM LINK | Investigation progress, root cause findings, mitigation actions |
| Final resolution report | **Within [14 days]** | BNM LINK | Full incident summary, root cause analysis, lessons learned, remediation completed |

### 12.3 Personal Data Protection Act 2010 — Data Breach Notification

*Where a cyber security incident involves the unauthorized access to or disclosure of personal data, [Organization Name] must assess its obligations under the PDPA. Authors note that PDPA notification obligations should be confirmed with Legal Counsel, as Malaysian PDPA notification requirements may be subject to amendment.*

| Obligation | Trigger | Timeline | Recipient | Lead |
|---|---|---|---|---|
| Notify affected data subjects | Confirmed unauthorized access to personal data where breach is likely to result in significant harm | **[As per PDPA requirements / current BNM guidance]** | Affected individuals | Communications / Legal & Compliance |
| Report to Personal Data Protection Commissioner | As required by PDPA and any applicable subsidiary legislation | **[As prescribed]** | PDPC Malaysia | Legal & Compliance / CISO |

### 12.4 Law Enforcement Referral

*For incidents involving criminal activity (ransomware, fraud, unauthorized access, data theft), [Organization Name] may refer the incident to law enforcement. The decision to make a law enforcement referral must be made by the CISO in consultation with Legal & Compliance and, where relevant, the CEO.*

| Scenario | Relevant Authority | Decision Authority | Coordination Lead |
|---|---|---|---|
| Confirmed criminal cyber attack (ransomware, hacking, extortion) | Royal Malaysia Police (PDRM) — Cybercrime Unit | CISO / CEO | Legal & Compliance |
| National security implications | NACSA; PDRM | CISO / CEO / Board | CISO |
| International cyber crime | CyberSecurity Malaysia; Interpol referral via PDRM | CISO / CEO | Legal & Compliance |

### 12.5 Notification Tracking Log

*All notifications (internal and external) made during an incident must be logged in the Notification Tracking Log. Use the template in Appendix D.*

| Notification ID | Recipient | Notification Type | Date/Time Sent (UTC) | Method | Content Summary | Sent By | Approval Authority |
|---|---|---|---|---|---|---|---|
| [NOTIF-001] | NACSA | Initial Notification (s23) | [DD/MM/YYYY HH:MM UTC] | [NACSA Portal] | [Summary] | [Name] | [CISO] |

---

## 13. Post-Incident Review

*The post-incident review (also referred to as a lessons-learned review or after-action review) is a mandatory activity following all Severity 1–3 incidents. Its purpose is not to assign blame but to objectively analyse what happened, what [Organization Name]'s response achieved, and how processes, tools, and capabilities can be improved. The outputs of the post-incident review directly feed into [Organization Name]'s continuous improvement program.*

### 13.1 Post-Incident Review Process

| Step | Activity | Timing | Lead | Participants |
|---|---|---|---|---|
| 1 | Schedule the post-incident review meeting | Within 5 business days of incident resolution | Incident Commander | SOC Lead |
| 2 | Prepare the Post-Incident Report draft | Within 5 business days of resolution | Incident Commander / Lead Analyst | — |
| 3 | Conduct the post-incident review meeting | Within 10 business days of resolution | SOC Lead | All CIRT members, BU Owners, relevant IT staff |
| 4 | Finalise the Post-Incident Report | Within 5 business days of review meeting | SOC Lead | CISO review and approval |
| 5 | Log improvement actions in the action register | Upon report finalisation | SOC Lead | GRC / Compliance |
| 6 | Submit regulatory post-incident report | Per regulatory timelines | CISO / Legal & Compliance | — |
| 7 | Track and verify completion of improvement actions | Ongoing | SOC Lead | GRC |

### 13.2 Post-Incident Report Structure

*The Post-Incident Report is a formal document that must be prepared for every Severity 1–3 incident and retained in accordance with the evidence retention schedule in Section 11.5. The report must address each of the following elements.*

**Section 1 — Incident Summary**
- Incident ID, type, severity, and classification
- Timeline: Detection time, containment time, eradication time, recovery time, closure time
- Affected systems, services, and data
- Impact assessment (operational, financial, reputational, regulatory)

**Section 2 — Root Cause Analysis**
- Initial access vector (how the threat actor gained entry)
- Contributing vulnerabilities (technical, process, human factors)
- Attack timeline and threat actor TTPs (MITRE ATT&CK mapping)

**Section 3 — Response Assessment**
- What worked well in the response
- What did not work as expected
- Gaps in detection, containment, eradication, or recovery capabilities
- Assessment of response timelines against targets in this procedure

**Section 4 — Regulatory Compliance Review**
- Notifications made (recipients, timelines, content)
- Assessment of compliance with Section 23 obligations
- Any regulatory feedback received

**Section 5 — Lessons Learned and Improvement Actions**

| Action ID | Description | Priority | Owner | Target Date | Status |
|---|---|---|---|---|---|
| [LA-001] | [Specific improvement action] | [Critical / High / Medium] | [Name / Team] | [DD/MM/YYYY] | [Open] |

### 13.3 Key Performance Metrics

*[Organization Name] tracks the following incident response metrics to measure the effectiveness of its incident response capability and drive continuous improvement. These metrics should be reviewed at each semi-annual procedure review and reported to the CISO on a monthly basis.*

| Metric | Definition | Target | Measurement Frequency |
|---|---|---|---|
| Mean Time to Detect (MTTD) | Average time from incident occurrence to SOC detection | [< 4 hours for Sev 1–2] | Monthly |
| Mean Time to Respond (MTTR) | Average time from detection to confirmed containment | [< 2 hours for Sev 1; < 8 hours for Sev 2] | Monthly |
| Mean Time to Recover (MTTREC) | Average time from detection to full service restoration | [Aligned with BCP RTO targets] | Per incident |
| Regulatory Notification Compliance Rate | Percentage of incidents where NACSA notification was made within the prescribed timeline | 100% | Per incident |
| False Positive Rate | Percentage of security alerts assessed as false positives | [< 30%] | Monthly |
| Post-Incident Review Completion Rate | Percentage of Sev 1–3 incidents with completed PIR within 10 business days | 100% | Monthly |
| Improvement Action Closure Rate | Percentage of PIR improvement actions closed within their target date | [> 80%] | Quarterly |

---

## 14. Testing and Exercising

*The effectiveness of this procedure depends on the regular testing and exercising of incident response capabilities. Documented evidence of testing activities is required for Act 854 compliance audits and BNM RMiT assessments. Testing findings must be used to update and improve this procedure and associated playbooks.*

### 14.1 Testing and Exercising Programme

| Exercise Type | Description | Frequency | Participants | Evidence Required |
|---|---|---|---|---|
| **Tabletop Exercise** | Facilitated discussion-based simulation of a specific incident scenario; tests decision-making and escalation procedures | Semi-annual (at minimum; prior to each semi-annual procedure review) | CISO, SOC Lead, IC candidates, BU Owners, Legal & Compliance, Communications | Exercise scenario, attendance record, findings report |
| **Functional Exercise** | Partial operational test of specific IR capabilities (e.g., containment procedure for ransomware; NACSA notification process) | Annual | SOC team, IT Operations | Exercise plan, execution log, findings report |
| **Full-Scale Simulation** | End-to-end simulation of a major incident, including all phases from detection through regulatory notification | Biennial | All CIRT members, IT Operations, BU Owners, senior management | Full exercise report, regulatory submission simulation evidence |
| **Technical Testing — EDR / SIEM** | Verify detection coverage using red team simulations or MITRE ATT&CK-mapped atomic tests | Quarterly | SOC team, Red Team / MSSP | Testing schedule, detection results, gap analysis |
| **Playbook Walkthrough** | Review of each incident type playbook with relevant SOC analysts to ensure currency and usability | Annual | SOC Lead, SOC Analysts | Sign-off record |

### 14.2 Testing Evidence and Record-Keeping

*All testing activities must be documented and records retained for a minimum of 3 years as evidence of ongoing compliance with incident response requirements under Act 854.*

| Document | Purpose | Retention Period |
|---|---|---|
| Exercise scenario and design | Evidence that the exercise was planned and risk-based | 3 years |
| Participant attendance register | Evidence of personnel participation and training | 3 years |
| Exercise findings and recommendations | Evidence of continuous improvement | 3 years |
| Management sign-off on findings | Evidence of governance oversight | 3 years |

---

## 15. Review and Approval

### 15.1 Version History

*This table records all revisions made to this document. Every change to the document, including minor amendments, must be recorded here with a description of what was changed and why.*

| Version | Date | Author | Reviewed By | Summary of Changes |
|---|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | [Reviewer Name] | Initial release |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Reviewer Name] | [Description of changes — e.g., Updated NACSA notification timelines per Circular XXX; Added ransomware playbook] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Reviewer Name] | [Description of major revision] |

### 15.2 Review Schedule

*This procedure must be formally reviewed at least semi-annually (every six months) or upon any of the following trigger events, whichever occurs first:*

- Significant changes to the regulatory landscape (new NACSA directives, BNM circulars, amendments to Act 854)
- Material changes to [Organization Name]'s technology environment (new systems, cloud migration, significant architecture changes)
- Following any Severity 1 or Severity 2 incident where the review identifies deficiencies in this procedure
- Following any testing exercise that identifies significant gaps
- Changes to [Organization Name]'s NCII designation or scope

| Review | Due Date | Assigned To | Completion Date | Sign-off |
|---|---|---|---|---|
| Semi-annual Review 1 | [DD/MM/YYYY] | [SOC Lead] | [DD/MM/YYYY] | [Name] |
| Semi-annual Review 2 | [DD/MM/YYYY] | [SOC Lead] | [DD/MM/YYYY] | [Name] |

### 15.3 Approval Sign-Off

*This document requires the approval of the following roles before it takes effect. An approved version supersedes all previous versions.*

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Lead | [Name] | [Signature] | [DD/MM/YYYY] |
| CISO | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Risk Officer | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Operations Officer | [Name] | [Signature] | [DD/MM/YYYY] |
| Chief Executive Officer | [Name] | [Signature] | [DD/MM/YYYY] |

---

## 16. References

*This section lists the regulatory instruments, standards, and internal documents that inform and govern this procedure.*

### 16.1 Malaysian Legislation and Regulations

| Reference | Full Title | Relevant Provisions |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Section 23 (Duty to Report Incidents); Section 26 (Cyber Security Measures for NCII); Section 27 (Cyber Security Audit); Section 29 (Directions by NACSA) |
| Act 709 | Personal Data Protection Act 2010 | Provisions relating to security of personal data and data breach notification obligations |
| Act 562 | Communications and Multimedia Act 1998 | Applicable provisions relating to computer crimes and network security |
| Act 563 | Computer Crimes Act 1997 | Offences relating to unauthorized access and computer misuse |
| Act 56 | Evidence Act 1950 (as amended) | Admissibility of electronic evidence in legal proceedings |
| — | Risk Management in Technology (RMiT) Policy | BNM policy document governing technology and cyber risk management for regulated entities; Section 11 (Incident Management) |

### 16.2 NACSA and National Framework Documents

| Reference | Document | Issuing Body |
|---|---|---|
| — | National Cyber Security Policy (NCSP) | National Security Council (NSC) / NACSA |
| — | [NACSA Cyber Security Standards for NCII — if published and applicable] | NACSA |
| — | [NACSA Incident Reporting Guidelines — if published] | NACSA |
| — | Malaysia Cyber Security Strategy 2020–2024 | NACSA |

### 16.3 International Standards and Frameworks

| Standard / Framework | Title | Relevance |
|---|---|---|
| NIST SP 800-61r2 | Computer Security Incident Handling Guide | Incident response lifecycle framework |
| ISO/IEC 27035-1:2023 | Information Security Incident Management — Part 1: Principles | International standard for incident management |
| ISO/IEC 27037:2012 | Guidelines for Identification, Collection, Acquisition and Preservation of Digital Evidence | Digital evidence handling |
| MITRE ATT&CK Framework | Adversarial Tactics, Techniques, and Common Knowledge | Threat actor TTP mapping and detection engineering |
| CIS Controls v8 | Center for Internet Security Controls | Incident response control reference (Control 17) |

### 16.4 Internal Documents

| Document ID | Title | Relationship |
|---|---|---|
| [DOC-ID] | Cyber Security Policy | Parent policy governing this procedure |
| [DOC-ID] | Incident Response Policy | Policy this procedure operationalises |
| [DOC-ID] | Business Continuity Plan | Referenced for recovery prioritisation and RTO/RPO |
| [DOC-ID] | NCII Asset Register | Reference for NCII asset identification during triage |
| [DOC-ID] | Data Classification and Handling Policy | Reference for data sensitivity assessment during breach incidents |
| [DOC-ID] | Evidence Management Policy | Governs evidence handling in conjunction with Section 11 |
| [DOC-ID] | Incident Response Contact Directory | Contains on-call contact details referenced in Section 4.3 |
| [DOC-ID] | Third-Party Risk Management Policy | Governs vendor obligations during incidents |

---

## 17. Appendices

### Appendix A — Incident Response Playbooks Index

*This appendix provides a consolidated index of all incident-type-specific playbooks maintained by [Organization Name]'s SOC. Detailed playbooks are maintained as separate documents, accessible to SOC analysts via [Playbook Repository — e.g., SharePoint / Confluence / secure SOC wiki]. Each playbook provides step-by-step operational guidance that supplements the general procedure defined in this document.*

| Playbook ID | Incident Type | Version | Last Updated | Location |
|---|---|---|---|---|
| PB-MAL-001 | Ransomware Response | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-MAL-002 | Malware Infection (General) | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-UA-001 | Unauthorized Access / Account Compromise | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-DB-001 | Data Breach / Exfiltration | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-DOS-001 | Denial of Service / DDoS | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-PHI-001 | Phishing and Business Email Compromise | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-INS-001 | Insider Threat | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-SCC-001 | Supply Chain Compromise | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-APT-001 | Advanced Persistent Threat | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-WAA-001 | Web Application Attack | [1.0] | [DD/MM/YYYY] | [Link / Location] |
| PB-FRT-001 | Cyber-Enabled Fraud / SWIFT Fraud | [1.0] | [DD/MM/YYYY] | [Link / Location] |

---

### Appendix B — Volatile Data Collection Commands

*This appendix provides reference commands for collecting volatile system data during incident response, prior to system isolation or shutdown. These commands must be run by a trained SOC analyst or digital forensics practitioner. Results must be captured to a forensically clean external medium, not to the affected system's local storage. All commands must be executed as part of a documented evidence collection activity under Section 11.*

**Windows Systems:**

*[Note to authors: Commands below are reference examples. Validate against the specific operating system versions deployed in [Organization Name]'s environment.]*

| Data Type | Command | Notes |
|---|---|---|
| Running processes | `tasklist /v > processes.txt` | Captures all running processes with details |
| Network connections | `netstat -ano > netstat.txt` | All active connections with process IDs |
| User accounts | `net user > users.txt` | Local user accounts |
| Logged-on users | `query user > loggedon.txt` | Currently logged-on users |
| Scheduled tasks | `schtasks /query /fo LIST /v > tasks.txt` | All scheduled tasks |
| Services | `sc query type= all state= all > services.txt` | All Windows services |
| Autoruns | `[Autoruns tool from Sysinternals — export to CSV]` | All persistence locations |
| DNS cache | `ipconfig /displaydns > dnscache.txt` | Cached DNS entries |

**Linux/Unix Systems:**

| Data Type | Command | Notes |
|---|---|---|
| Running processes | `ps auxf > processes.txt` | Full process tree |
| Network connections | `ss -tulnap > netstat.txt` | All connections with process info |
| Logged-on users | `who > loggedon.txt` and `w > loggedon_detail.txt` | Current users |
| Open files | `lsof > openfiles.txt` | All open files and network connections |
| Cron jobs | `crontab -l > crontabs.txt` | Scheduled tasks |
| Loaded kernel modules | `lsmod > modules.txt` | May reveal rootkit modules |
| Recent commands | `history > history.txt` | Shell command history |

---

### Appendix C — Evidence Log and Chain of Custody Template

*Use a separate Evidence Log for each incident. The Evidence Log must be maintained as a controlled document and stored securely alongside the collected evidence. Print and use a physical copy for physical evidence; maintain a digital, access-controlled version for digital evidence.*

**EVIDENCE LOG**

| Field | Value |
|---|---|
| Incident ID | [IR-YYYY-NNNN] |
| Case Officer | [Name / Role] |
| Log Creation Date/Time (UTC) | [DD/MM/YYYY HH:MM UTC] |
| Legal Hold Reference | [LH-YYYY-NN / N/A] |

---

**Evidence Item Register:**

| Evidence Ref # | Description | Source (Hostname / Location) | Collection Date/Time (UTC) | Collector (Name) | Collection Method / Tool | SHA-256 Hash (Original) | SHA-256 Hash (Acquired Copy) | Hash Match (Y/N) | Storage Location |
|---|---|---|---|---|---|---|---|---|---|
| [ORG-IR-YYYY-NNNN-E-01] | [e.g., RAM image — Server SRV-CORE-01] | [SRV-CORE-01 / Server Room Rack 3] | [DD/MM/YYYY HH:MM UTC] | [Name] | [WinPmem v3.3] | [SHA256 hash value] | [SHA256 hash value] | [Y] | [Encrypted NAS / Evidence Safe] |

---

**Chain of Custody Transfer Log:**

| Evidence Ref # | Transfer # | Transferred From (Name / Role) | Transferred To (Name / Role) | Date / Time (UTC) | Purpose | Witness (Name) | Transferor Signature | Recipient Signature |
|---|---|---|---|---|---|---|---|---|
| [ORG-IR-YYYY-NNNN-E-01] | 001 | [Name / SOC Analyst] | [Name / Digital Forensics] | [DD/MM/YYYY HH:MM UTC] | [Forensic Analysis] | [Name] | [Signature] | [Signature] |

---

**Evidence Disposal Record:**

| Evidence Ref # | Description | Disposal Date | Disposal Method | Performed By | Witnessed By | Reason |
|---|---|---|---|---|---|---|
| [ORG-IR-YYYY-NNNN-E-01] | [Description] | [DD/MM/YYYY] | [Cryptographic erasure / Physical destruction] | [Name] | [Name] | [Retention period expired / Legal hold lifted] |

---

### Appendix D — Notification Tracking Log Template

*Maintain a Notification Tracking Log for every Severity 1–3 incident. This log is required as evidence of compliance with Section 23 of Act 854 and BNM RMiT notification obligations.*

**INCIDENT NOTIFICATION TRACKING LOG**

| Field | Value |
|---|---|
| Incident ID | [IR-YYYY-NNNN] |
| Incident Title | [Description] |
| Log Owner | [CISO / Legal & Compliance] |

---

| Notif. ID | Recipient | Organization | Notification Type | Trigger Event / Basis | Required Timeline | Date/Time Sent (UTC) | Method Used | Content Summary | Confirmation Receipt | Sent By (Name) | Approved By (Name) |
|---|---|---|---|---|---|---|---|---|---|---|---|
| NOTIF-001 | [Name / Role] | NACSA | Initial Notification — Act 854 s23 | Severity 1 Incident Confirmed | [Per NACSA guidelines] | [DD/MM/YYYY HH:MM UTC] | [NACSA Portal] | [Summary of notification content] | [Yes — Ref: XXX / Pending] | [Name] | [CISO Name] |
| NOTIF-002 | [Name / Role] | BNM | Operational Incident Notification — RMiT | Material impact on regulated systems | Within 1 hour of confirmation | [DD/MM/YYYY HH:MM UTC] | [BNM LINK] | [Summary] | [Yes / Pending] | [Name] | [CISO Name] |
| NOTIF-003 | [Name / Role] | NACSA | Final Incident Report — Act 854 s23 | Incident resolution | [Per NACSA guidelines] | [DD/MM/YYYY HH:MM UTC] | [NACSA Portal] | [Summary] | [Yes — Ref: XXX] | [Name] | [CISO Name] |

---

### Appendix E — Incident Response Quick Reference Card

*This one-page quick reference card should be printed, laminated, and posted at every SOC analyst workstation and in the War Room. It provides the essential steps and escalation contacts for immediate use during an incident. Actual contact details must be populated from the Incident Response Contact Directory.*

---

**[Organization Name] — INCIDENT RESPONSE QUICK REFERENCE**

**DETECT AN ALERT?**
1. Acknowledge in [SIEM Platform] within 15 minutes
2. Log in [ITSM Platform]
3. Gather initial context
4. Classify: False Positive → Close | True Positive → Classify Severity

---

**SEVERITY LEVELS AT A GLANCE**

| Sev | Label | Action |
|---|---|---|
| 1 | Critical | IC activated NOW. War Room in 30 min. Call SOC Lead. |
| 2 | High | Call SOC Lead within 15 min. IC activated within 1 hour. |
| 3 | Medium | Notify SOC Lead. Respond within 4 hours. |
| 4 | Low | Standard handling within 24 hours. |
| 5 | Info | Next business day. Document only. |

---

**ESCALATION — CALL IN THIS ORDER:**

1. **SOC Lead:** [Refer to On-Call Directory]
2. **CISO:** [Refer to On-Call Directory]
3. **CEO (Sev 1 only):** [Refer to On-Call Directory]

---

**ALWAYS REMEMBER:**
- **PRESERVE** evidence BEFORE you contain
- **DOCUMENT** every action with timestamp (UTC)
- **DO NOT** discuss the incident on unencrypted channels
- **DO NOT** power off systems before capturing memory
- **NOTIFY** SOC Lead immediately if NCII assets are involved

---

**REGULATORY NOTIFICATION TRIGGERS (Contact Legal & Compliance):**
- NACSA (s23 Act 854): Any confirmed NCII incident → **[X hours]**
- BNM (RMiT): Material impact on regulated systems → **Within 1 hour**
- PDPA: Personal data breach → **[As per PDPA guidance]**

---

### Appendix F — War Room Activation Protocol

*This appendix defines the protocol for activating the War Room in response to a Severity 1 incident. The War Room (physical or virtual) is the central coordination point for the incident response team during major incidents.*

**Activation Trigger:** Severity 1 incident confirmed by SOC Lead

**Physical War Room Location:** [Conference Room / Dedicated SOC Room — Location, Building, Floor]

**Virtual War Room Platform:** [e.g., Microsoft Teams Incident Channel / Secure communications platform — Channel: "IR-[Incident ID]"]

**Activation Steps:**

| Step | Action | Responsible |
|---|---|---|
| 1 | SOC Lead confirms Severity 1 and triggers War Room activation | SOC Lead |
| 2 | Notify all CIRT members via out-of-band communication (phone / SMS — not email) | SOC Lead / Incident Commander |
| 3 | Establish secure communications channel (virtual War Room) | SOC Analyst |
| 4 | Set up physical War Room (if required): screens, access to SIEM, incident ticket | SOC Analyst / IT Operations |
| 5 | Brief all War Room participants on the current incident status (5-minute initial brief) | Incident Commander |
| 6 | Assign roles and immediate tasks | Incident Commander |
| 7 | Establish communication rhythm (status update cadence — e.g., every 30 minutes) | Incident Commander |
| 8 | Open and maintain the incident timeline document in real time | Designated Scribe (SOC Analyst) |

**War Room Communication Cadence — Severity 1:**

| Update | Frequency | Audience | Lead |
|---|---|---|---|
| Internal CIRT status update | Every 30 minutes | War Room participants | Incident Commander |
| CISO executive brief | Every 60 minutes | CISO | SOC Lead |
| CEO / Board update | As required (minimum 2-hourly for extended Sev 1 incidents) | CEO | CISO |
| Regulatory authority update | Per notification schedule in Section 12 | NACSA / BNM | CISO / Legal |
| Customer-facing communication | As required and approved | Public / Customers | Communications |

---

### Appendix G — Glossary of MITRE ATT&CK Tactics

*This appendix provides a brief reference to the MITRE ATT&CK framework tactics used for documenting threat actor behaviour during incident investigations. SOC analysts should map all identified threat actor activity to the relevant ATT&CK tactic and technique as part of the post-incident report.*

| Tactic ID | Tactic Name | Description |
|---|---|---|
| TA0043 | Reconnaissance | Threat actor is gathering information to plan future operations |
| TA0042 | Resource Development | Threat actor is establishing resources to support operations |
| TA0001 | Initial Access | Threat actor is attempting to gain initial entry into the network |
| TA0002 | Execution | Threat actor is running malicious code |
| TA0003 | Persistence | Threat actor is maintaining their foothold |
| TA0004 | Privilege Escalation | Threat actor is gaining higher-level permissions |
| TA0005 | Defense Evasion | Threat actor is trying to avoid detection |
| TA0006 | Credential Access | Threat actor is stealing account names and passwords |
| TA0007 | Discovery | Threat actor is exploring the environment |
| TA0008 | Lateral Movement | Threat actor is moving through the environment |
| TA0009 | Collection | Threat actor is gathering data of interest |
| TA0011 | Command and Control | Threat actor is communicating with compromised systems |
| TA0010 | Exfiltration | Threat actor is stealing data |
| TA0040 | Impact | Threat actor is manipulating, interrupting, or destroying systems and data |

---

*— End of Document —*

---

| Field | Value |
|---|---|
| Document Title | Incident Response Procedure |
| Document ID | [Document ID] |
| Version | 1.0 |
| Classification | Confidential |
| Owner | SOC Lead / CISO |
| Organization | [Organization Name] |
| Last Review Date | [Last Review Date] |
| Next Review Date | [Next Review Date] |
| Approved By | [Approved By] |

*This document is subject to [Organization Name]'s document control policy. The current approved version of this document is maintained in [Document Management System]. Printed copies are uncontrolled — verify currency before use.*