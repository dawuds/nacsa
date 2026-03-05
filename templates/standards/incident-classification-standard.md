# Incident Classification Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Lead / CISO |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]

**Regulatory Framework:** Cyber Security Act 2024 (Act 854) — National Cyber Security Agency (NACSA)

**Applicable Sections:** Section 23 (Duty to Notify), Section 26 (Cyber Security Measures)

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Acronyms](#2-definitions-and-acronyms)
3. [Severity Levels](#3-severity-levels)
4. [Impact Assessment Criteria](#4-impact-assessment-criteria)
5. [NACSA Reportable Incident Thresholds](#5-nacsa-reportable-incident-thresholds)
6. [Incident Type Taxonomy](#6-incident-type-taxonomy)
7. [Escalation Matrix by Severity](#7-escalation-matrix-by-severity)
8. [Classification Review Triggers](#8-classification-review-triggers)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Incident Classification Standard establishes the authoritative taxonomy and classification methodology governing all cyber security incidents affecting [Organization Name]'s National Critical Information Infrastructure (NCII) systems and assets. This Standard ensures that incidents are identified, categorised, and prioritised in a consistent, repeatable, and audit-defensible manner, enabling appropriate and timely response actions commensurate with the severity and impact of each incident.

This Standard has been developed in compliance with the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 23** — which imposes a duty on NCII sector leads and NCII entities to notify NACSA of cyber security incidents affecting designated NCII systems within prescribed timeframes; and
- **Section 26** — which requires NCII entities to implement and maintain prescribed cyber security measures, including those relating to incident detection, classification, and response.

### 1.2 Scope

This Standard applies to:

- All information systems, networks, applications, and data assets owned, operated, or managed by [Organization Name] that are designated as NCII or that support NCII functions.
- All employees, contractors, vendors, third-party service providers, and any other parties who interact with or administer [Organization Name]'s information systems.
- All cyber security incidents, regardless of whether they originate from internal or external sources, affecting the confidentiality, integrity, or availability of [Organization Name]'s systems or data.
- All subsidiary entities and branch offices of [Organization Name] subject to Act 854 obligations.

### 1.3 Objectives

- Provide a standardised, consistent framework for classifying cyber security incidents.
- Ensure incidents are escalated appropriately based on severity and regulatory reportability.
- Support timely notification to NACSA and other relevant authorities as required under Act 854.
- Enable effective resource allocation and response prioritisation.
- Maintain an auditable record of incident classification decisions.

### 1.4 Out of Scope

The following are not covered by this Standard:

- Physical security incidents (unless they directly result in a cyber security impact).
- IT service outages caused purely by hardware failure without any cyber security dimension (unless classification is uncertain, in which case this Standard applies until confirmed otherwise).
- Fraud or financial crime incidents unless they involve a cyber security component.

---

## 2. Definitions and Acronyms

### 2.1 Definitions

*This section provides definitions for key terms used throughout this document. Authors should ensure definitions align with Act 854 and NACSA published guidance.*

| Term | Definition |
|---|---|
| **Cyber Security Incident** | Any act or activity that threatens the confidentiality, integrity, or availability of a computer, computer system, or computer network, including unauthorised access, disruption, destruction, or misuse of data or systems, as defined under Act 854. |
| **NCII System** | A computer or computer system designated by the Minister as National Critical Information Infrastructure under Act 854, the disruption of which would have a debilitating effect on national security, economy, public safety, or public health. |
| **Incident Classification** | The process of assigning a severity level and incident type to a confirmed or suspected cyber security incident based on defined criteria. |
| **Escalation** | The formal process of notifying higher-level management, specialist response teams, or external authorities of an incident based on its severity or regulatory requirements. |
| **Threat Actor** | An individual, group, or entity responsible for initiating or conducting a cyber security incident. |
| **Impact** | The adverse effect on [Organization Name]'s operations, reputation, data, or regulatory standing resulting from a cyber security incident. |
| **Indicator of Compromise (IoC)** | Forensic artefacts or observable evidence that suggest a cyber security incident has occurred or is in progress. |
| **NACSA** | National Cyber Security Agency, established under Act 854 as the lead agency responsible for overseeing cyber security in Malaysia. |
| **NCII Sector Lead** | The government ministry or agency designated as the lead authority for a specific NCII sector under Act 854. |

### 2.2 Acronyms

| Acronym | Full Form |
|---|---|
| Act 854 | Cyber Security Act 2024 |
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CSIRT | Cyber Security Incident Response Team |
| IoC | Indicator of Compromise |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PDPA | Personal Data Protection Act 2010 |
| RTO | Recovery Time Objective |
| RPO | Recovery Point Objective |
| SLA | Service Level Agreement |
| SOC | Security Operations Centre |
| TLP | Traffic Light Protocol |

---

## 3. Severity Levels

*This section defines the four standard severity levels used by [Organization Name] for classifying cyber security incidents. Each level should reflect the actual or potential impact on NCII systems, regulatory obligations, and business operations. Authors should validate these thresholds against NACSA sector-specific guidance applicable to [Organization Name]'s designated NCII sector.*

[Organization Name] adopts a four-tier severity classification framework aligned with NACSA classification standards and industry best practices.

### 3.1 Critical (Severity Level 1)

**Definition:** A cyber security incident that has caused, or is actively causing, severe disruption to NCII systems or services, with widespread impact on national security, public safety, critical service delivery, or significant financial harm.

**Characteristics:**

- Active exploitation of NCII systems resulting in loss of operational control.
- Complete or near-complete disruption of a critical service or function.
- Confirmed exfiltration of highly sensitive, classified, or personally identifiable information at scale.
- Incident affecting multiple NCII entities or interconnected critical systems simultaneously.
- Credible threat to human life or national security.
- Ransomware or destructive malware causing irreversible data loss or system destruction.

**Response Timeframe:** Immediate — within **[X] minutes** of detection.

**NACSA Notification Required:** Yes — mandatory notification within **[6] hours** of classification (refer to Section 5).

---

### 3.2 High (Severity Level 2)

**Definition:** A cyber security incident that has caused, or is likely to cause, significant disruption to NCII systems or services, with material impact on operations, data integrity, or regulatory compliance.

**Characteristics:**

- Confirmed unauthorised access to production NCII systems or sensitive data repositories.
- Partial disruption of critical services affecting a significant user base or operational capability.
- Confirmed compromise of privileged accounts or administrative credentials.
- Targeted attack with indicators of advanced persistent threat (APT) activity.
- Confirmed data breach involving personal data or confidential information requiring regulatory notification.
- Malware infection affecting production systems with potential for lateral movement.

**Response Timeframe:** Urgent — within **[X] hours** of detection.

**NACSA Notification Required:** Yes — mandatory notification within **[24] hours** of classification (refer to Section 5).

---

### 3.3 Medium (Severity Level 3)

**Definition:** A cyber security incident with limited or contained impact on [Organization Name]'s systems or operations, with no immediate threat to NCII functionality but requiring prompt investigation and remediation.

**Characteristics:**

- Unauthorised access attempt that was detected and blocked before exploitation.
- Isolated malware infection on a non-production or non-critical system with no evidence of lateral movement.
- Phishing attack with limited user compromise (e.g., credential harvesting of a standard user account).
- Policy violation resulting in unintended data exposure (limited scope and not publicly disclosed).
- Suspicious network activity requiring investigation but not yet confirmed as a breach.
- Denial of service attack that caused temporary, recoverable degradation of non-critical services.

**Response Timeframe:** Standard — within **[X] hours** of detection.

**NACSA Notification Required:** Conditional — notify if the incident escalates to High or Critical (refer to Section 5).

---

### 3.4 Low (Severity Level 4)

**Definition:** A minor cyber security event with negligible impact on [Organization Name]'s systems, operations, or data, typically requiring routine investigation and logging but no escalation.

**Characteristics:**

- Automated scanning or probe activity with no successful access.
- Spam or unsophisticated phishing emails with no confirmed user interaction.
- Minor policy violations without data exposure or system impact.
- Failed brute-force attempts that were blocked by existing controls.
- Informational alerts from security tools requiring review but no immediate action.

**Response Timeframe:** Routine — within **[X] business days** of detection.

**NACSA Notification Required:** No — unless patterns suggest coordinated activity warranting escalation.

---

### 3.5 Severity Level Summary

| Severity Level | Label | Response Timeframe | NACSA Notification | Escalation to CISO |
|---|---|---|---|---|
| **1** | Critical | [X] minutes | Mandatory (≤6 hours) | Immediate |
| **2** | High | [X] hours | Mandatory (≤24 hours) | Within [X] hours |
| **3** | Medium | [X] hours | Conditional | Within [X] hours |
| **4** | Low | [X] business days | No | Not required |

---

## 4. Impact Assessment Criteria

*This section defines the dimensions and scoring methodology used to assess the impact of a cyber security incident prior to, or in parallel with, assigning a severity level. Authors should customise the scoring thresholds to reflect [Organization Name]'s risk appetite, operational profile, and NCII sector designation.*

Impact assessment is conducted across five dimensions. Each dimension is scored independently, and the **highest individual dimension score** determines the overall severity level, unless [Organization Name]'s CSIRT Lead determines that a combination of lower scores warrants a higher overall classification.

### 4.1 Impact Dimensions

#### 4.1.1 Operational Impact

*Assess the degree to which the incident disrupts [Organization Name]'s core business operations or service delivery.*

| Score | Level | Description |
|---|---|---|
| 4 | Critical | Complete disruption of one or more critical services; NCII functions inoperable. |
| 3 | High | Significant degradation of critical services; SLAs breached; major customer impact. |
| 2 | Medium | Partial or isolated disruption; limited customer impact; workarounds available. |
| 1 | Low | Negligible disruption; no customer impact; operations continue normally. |

#### 4.1.2 Data Impact

*Assess the confidentiality, integrity, and availability impact on [Organization Name]'s data assets, including personal data subject to PDPA obligations.*

| Score | Level | Description |
|---|---|---|
| 4 | Critical | Confirmed exfiltration or destruction of highly sensitive, classified, or large-scale personal data (>10,000 records or as per [Organization Name] threshold). |
| 3 | High | Confirmed exposure or integrity compromise of sensitive data (financial records, credentials, personal data of significant scope). |
| 2 | Medium | Suspected or limited data exposure; integrity concerns on non-critical data; under investigation. |
| 1 | Low | No data impact confirmed; informational or metadata exposure only. |

#### 4.1.3 Reputational Impact

*Assess the potential for the incident to damage [Organization Name]'s public standing, customer trust, or regulatory relationships.*

| Score | Level | Description |
|---|---|---|
| 4 | Critical | Incident is publicly known or likely to become so; significant media coverage expected; regulatory censure likely. |
| 3 | High | Incident may become public; customer notification required; regulatory scrutiny anticipated. |
| 2 | Medium | Limited reputational exposure; incident contained; proactive communication may be required. |
| 1 | Low | No reputational exposure; incident fully contained and non-public. |

#### 4.1.4 Regulatory and Legal Impact

*Assess the actual or potential regulatory, legal, or compliance consequences arising from the incident.*

| Score | Level | Description |
|---|---|---|
| 4 | Critical | Mandatory NACSA notification triggered; PDPA breach notification required; potential criminal investigation or enforcement action. |
| 3 | High | NACSA notification likely required; regulatory reporting obligation under BNM or sector authority; legal liability exposure. |
| 2 | Medium | Regulatory review likely; internal compliance reporting required; potential civil liability. |
| 1 | Low | No regulatory obligation triggered; internal documentation sufficient. |

#### 4.1.5 Financial Impact

*Assess the direct and indirect financial impact of the incident, including remediation costs, fines, and business loss.*

| Score | Level | Description |
|---|---|---|
| 4 | Critical | Estimated financial impact exceeds [MYR X million]; systemic financial loss or market impact. |
| 3 | High | Estimated financial impact between [MYR X] and [MYR X million]; significant remediation costs. |
| 2 | Medium | Estimated financial impact between [MYR X] and [MYR X]; manageable remediation within existing budget. |
| 1 | Low | Negligible financial impact; absorbed within operational expenditure. |

### 4.2 Overall Severity Determination

The overall severity classification is determined as follows:

1. Score each of the five dimensions (1–4).
2. The **highest dimension score** sets the minimum severity level.
3. The CSIRT Lead may **upgrade** (but not downgrade) the classification based on contextual factors, threat intelligence, or emerging information.
4. Classification decisions must be **documented** in the incident record with rationale.

| Maximum Dimension Score | Assigned Severity |
|---|---|
| 4 | Critical (Level 1) |
| 3 | High (Level 2) |
| 2 | Medium (Level 3) |
| 1 | Low (Level 4) |

---

## 5. NACSA Reportable Incident Thresholds

*This section defines the specific thresholds that trigger mandatory notification to NACSA under Section 23 of Act 854. Authors must review NACSA's current published guidance and any sector-specific directions issued by [Organization Name]'s NCII Sector Lead to ensure these thresholds remain accurate. Notification timelines should be confirmed against the most current NACSA directions in force at the time of review.*

### 5.1 Mandatory Reporting Obligation

Under **Section 23 of Act 854**, [Organization Name] as an NCII entity is obligated to notify NACSA of any cyber security incident that meets or exceeds the thresholds defined in this section. Failure to notify within prescribed timeframes constitutes an offence under Act 854.

### 5.2 Reporting Triggers

An incident must be reported to NACSA if **any one** of the following thresholds is met:

| # | Trigger Condition | Notification Timeframe |
|---|---|---|
| 1 | The incident is classified as **Critical (Level 1)**. | Within **[6] hours** of classification. |
| 2 | The incident is classified as **High (Level 2)**. | Within **[24] hours** of classification. |
| 3 | The incident results in confirmed unauthorised access to or exfiltration from an NCII-designated system. | Within **[24] hours** of confirmation. |
| 4 | The incident involves ransomware, destructive malware, or wiper malware affecting NCII systems. | Within **[6] hours** of detection. |
| 5 | The incident causes disruption to critical service delivery for more than **[X] hours** continuously. | Within **[24] hours** of onset. |
| 6 | The incident involves a suspected supply chain compromise affecting NCII systems or key vendors. | Within **[24] hours** of detection. |
| 7 | The incident is assessed as involving a nation-state or advanced persistent threat actor. | Within **[6] hours** of assessment. |
| 8 | The incident is subject to a specific NACSA alert or directive requiring mandatory reporting. | Per NACSA directive. |

### 5.3 Notification Process

*Authors should document the internal process for preparing and submitting notifications to NACSA. Reference the NACSA Incident Reporting Procedure for detailed procedural steps.*

1. **Initial Notification:** Notify NACSA via [NACSA designated reporting channel/portal/email — insert current details] within the applicable timeframe.
2. **Preliminary Report:** Submit a Preliminary Incident Report (PIR) containing: incident summary, affected systems, initial impact assessment, and containment actions taken.
3. **Interim Updates:** Provide updates to NACSA at **[X]-hour intervals** or as requested until the incident is resolved.
4. **Final Report:** Submit a Final Incident Report within **[X] days** of incident closure, including root cause analysis, full impact assessment, and remediation actions.

### 5.4 Concurrent Notification Obligations

In addition to NACSA, the following authorities may require concurrent or subsequent notification depending on the nature of the incident:

| Authority | Trigger | Timeframe |
|---|---|---|
| Bank Negara Malaysia (BNM) | Data breach, operational disruption affecting financial services | Per BNM Risk Management in Technology (RMiT) Policy Document |
| Personal Data Protection Commissioner | Breach involving personal data of Malaysian data subjects | Per PDPA requirements |
| [Organization Name] NCII Sector Lead | As directed | Per sector-specific directions |
| Bursa Malaysia (if applicable) | Material event affecting listed entity | Per listing rules |
| Royal Malaysia Police (PDRM) | Incidents involving criminal activity | As appropriate |

---

## 6. Incident Type Taxonomy

*This section defines the authoritative taxonomy of cyber security incident types recognised by [Organization Name]. Authors should ensure this taxonomy is aligned with NACSA's published incident classification categories and updated to reflect emerging threat categories as identified during periodic reviews.*

Incidents are classified by **type** in addition to severity level. Incident type classification enables effective routing to specialist response teams, trend analysis, and regulatory reporting.

### 6.1 Taxonomy Structure

Incident types are organised into **eight primary categories**, each subdivided into specific incident types.

---

#### Category 1: Unauthorised Access

| Incident Type Code | Incident Type | Description |
|---|---|---|
| UA-01 | Account Compromise | Unauthorised use of legitimate credentials to access systems or data. |
| UA-02 | Privilege Escalation | Attacker gains higher-level privileges than authorised. |
| UA-03 | Insider Threat | Authorised user intentionally accesses or misuses systems beyond their authority. |
| UA-04 | Physical Unauthorised Access | Physical intrusion resulting in cyber security impact (e.g., rogue device installation). |
| UA-05 | Third-Party Unauthorised Access | Compromise via a vendor, partner, or supply chain entity. |

---

#### Category 2: Malware and Malicious Code

| Incident Type Code | Incident Type | Description |
|---|---|---|
| MW-01 | Ransomware | Malware encrypts data or systems and demands ransom for restoration. |
| MW-02 | Destructive Malware / Wiper | Malware designed to permanently destroy data or render systems inoperable. |
| MW-03 | Trojan / Backdoor | Malware establishing persistent unauthorised access. |
| MW-04 | Spyware / Keylogger | Malware designed to covertly capture information. |
| MW-05 | Rootkit | Malware concealing its presence to maintain persistent privileged access. |
| MW-06 | Fileless Malware | Malware operating in-memory without a persistent file footprint. |
| MW-07 | Cryptominer | Unauthorised use of [Organization Name] resources for cryptocurrency mining. |

---

#### Category 3: Denial of Service

| Incident Type Code | Incident Type | Description |
|---|---|---|
| DS-01 | Volumetric DDoS | High-volume traffic attack overwhelming network bandwidth or resources. |
| DS-02 | Application-Layer DoS | Targeted attack on application services (e.g., HTTP flood). |
| DS-03 | Resource Exhaustion | Deliberate exhaustion of system resources (CPU, memory, storage). |
| DS-04 | Ransom DDoS (RDDoS) | DDoS attack accompanied by extortion demand. |

---

#### Category 4: Data Breach and Exfiltration

| Incident Type Code | Incident Type | Description |
|---|---|---|
| DB-01 | Personal Data Breach | Unauthorised access to or disclosure of personal data subject to PDPA. |
| DB-02 | Confidential Data Exfiltration | Theft of [Organization Name]'s confidential or proprietary information. |
| DB-03 | Credential Theft | Exfiltration of usernames, passwords, tokens, or cryptographic keys. |
| DB-04 | Accidental Data Disclosure | Unintentional exposure of sensitive data due to misconfiguration or human error. |
| DB-05 | Unauthorised Data Modification | Tampering with or corruption of data assets. |

---

#### Category 5: Phishing and Social Engineering

| Incident Type Code | Incident Type | Description |
|---|---|---|
| SE-01 | Spear Phishing | Targeted phishing attack against specific individuals or roles. |
| SE-02 | Whaling | Phishing attack specifically targeting senior executives. |
| SE-03 | Smishing / Vishing | Phishing via SMS or voice call. |
| SE-04 | Business Email Compromise (BEC) | Impersonation of executives or vendors to authorise fraudulent transactions. |
| SE-05 | General Phishing | Broad, non-targeted phishing campaigns. |

---

#### Category 6: Supply Chain and Third-Party Compromise

| Incident Type Code | Incident Type | Description |
|---|---|---|
| SC-01 | Software Supply Chain Attack | Compromise of software or updates delivered to [Organization Name] via a trusted vendor. |
| SC-02 | Managed Service Provider (MSP) Compromise | Threat actor pivots from an MSP to [Organization Name]'s systems. |
| SC-03 | Hardware Supply Chain Compromise | Tampering with hardware or firmware prior to delivery. |

---

#### Category 7: Vulnerability Exploitation

| Incident Type Code | Incident Type | Description |
|---|---|---|
| VE-01 | Zero-Day Exploitation | Active exploitation of a previously unknown vulnerability. |
| VE-02 | Known Vulnerability Exploitation | Exploitation of a published vulnerability for which a patch exists. |
| VE-03 | Misconfiguration Exploitation | Exploitation of insecure system or application configuration. |
| VE-04 | Web Application Attack | SQL injection, XSS, CSRF, or other web application-layer attacks. |
| VE-05 | API Exploitation | Abuse of exposed or poorly secured APIs. |

---

#### Category 8: Insider Threat and Policy Violation

| Incident Type Code | Incident Type | Description |
|---|---|---|
| IT-01 | Malicious Insider | Intentional harm by an employee, contractor, or trusted individual. |
| IT-02 | Negligent Insider | Unintentional harm caused by employee error or policy non-compliance. |
| IT-03 | Data Theft by Departing Employee | Unauthorised copying or transfer of data upon or before departure. |
| IT-04 | Unauthorised Software / Shadow IT | Installation or use of unapproved software or services. |

---

## 7. Escalation Matrix by Severity

*This section defines the required escalation actions, notification recipients, and response accountabilities for each severity level. Authors must ensure that all named roles, contact details, and escalation paths are validated against [Organization Name]'s current organisational structure and updated at each review cycle.*

### 7.1 Escalation Principles

- Escalation must be initiated **immediately upon classification**, not upon resolution.
- Any analyst uncertain of the correct severity level must escalate to the **CSIRT Lead** for determination.
- **Downgrade** of a severity level requires written approval from the CSIRT Lead and must be documented in the incident record with rationale.
- Escalation communications must use **secure channels** and apply **TLP:RED** markings for Critical and High incidents.

### 7.2 Escalation Matrix

| Severity | Immediate Notification (within classification timeframe) | Escalation to Management | External Notification | War Room / Crisis Management |
|---|---|---|---|---|
| **Critical (L1)** | SOC Lead, CSIRT Lead, CISO, CTO/CIO | CEO, Board Risk Committee, General Counsel | NACSA (≤6 hrs), BNM (if applicable), PDRM (if criminal) | Activate immediately |
| **High (L2)** | SOC Lead, CSIRT Lead, CISO | CTO/CIO, Head of Compliance, Head of Risk | NACSA (≤24 hrs), BNM (if applicable) | Activate within [X] hours |
| **Medium (L3)** | SOC Lead, CSIRT Lead | [Relevant Business Unit Head], Head of IT | Conditional (refer Section 5) | Not required unless escalated |
| **Low (L4)** | SOC Analyst (Tier 2) | Not required | Not required | Not required |

### 7.3 Escalation Contacts

*Authors must populate and maintain current contact details. This table should be reviewed at every semi-annual cycle.*

| Role | Name | Primary Contact | Alternate Contact | Availability |
|---|---|---|---|---|
| SOC Analyst (Tier 1) | [Name] | [Contact] | [Contact] | 24/7 |
| SOC Analyst (Tier 2) | [Name] | [Contact] | [Contact] | 24/7 |
| SOC Lead | [Name] | [Contact] | [Contact] | 24/7 |
| CSIRT Lead | [Name] | [Contact] | [Contact] | 24/7 |
| CISO | [Name] | [Contact] | [Contact] | On-call |
| CTO / CIO | [Name] | [Contact] | [Contact] | On-call |
| Head of Compliance | [Name] | [Contact] | [Contact] | Business hours |
| General Counsel | [Name] | [Contact] | [Contact] | On-call |
| CEO | [Name] | [Contact] | [Contact] | Critical only |
| NACSA Reporting Desk | N/A | [Insert current NACSA contact] | [Insert] | 24/7 |
| BNM Supervisor Contact | N/A | [Insert current BNM contact] | [Insert] | Business hours |

### 7.4 Escalation Timelines

| Severity | Time to Classify (from Detection) | Time to Escalate (from Classification) | Time to Notify NACSA (from Classification) | Time to Initial Containment |
|---|---|---|---|---|
| **Critical (L1)** | ≤ [X] minutes | ≤ [X] minutes | ≤ [6] hours | ≤ [X] hours |
| **High (L2)** | ≤ [X] hours | ≤ [X] hours | ≤ [24] hours | ≤ [X] hours |
| **Medium (L3)** | ≤ [X] hours | ≤ [X] hours | N/A (conditional) | ≤ [X] hours |
| **Low (L4)** | ≤ [X] business days | N/A | N/A | ≤ [X] business days |

---

## 8. Classification Review Triggers

*This section defines the circumstances under which an incident's classification must be formally reviewed and potentially reclassified. Authors should ensure these triggers are communicated to all SOC staff and embedded in the incident management playbooks.*

### 8.1 Mandatory Reclassification Triggers

The assigned severity classification **must** be reviewed and updated if any of the following occurs:

| # | Trigger | Action Required |
|---|---|---|
| 1 | New technical evidence (e.g., forensic findings, additional IoCs) materially changes the scope or impact of the incident. | CSIRT Lead to review and reclassify within [X] hours of new evidence. |
| 2 | The number of affected systems, users, or data records increases beyond the thresholds for the current severity level. | Immediate upward reclassification; escalation matrix re-applied. |
| 3 | A threat actor is identified or confirmed as an advanced persistent threat (APT), nation-state actor, or organised criminal group. | Immediate upgrade to at least High (L2); CISO notification required. |
| 4 | A previously unknown vulnerability (zero-day) is identified as the attack vector. | Review for potential upgrade; threat intelligence team engaged. |
| 5 | Incident is linked to a concurrent attack on another NCII entity or is part of a coordinated campaign. | Immediate escalation to CISO; NACSA notification triggered regardless of individual severity. |
| 6 | Containment actions fail and the incident spreads beyond its initially identified scope. | Immediate upgrade by one severity level minimum. |
| 7 | Media or public disclosure of the incident occurs (or is imminent), regardless of technical scope. | Immediate review; Communications and Legal teams notified. |
| 8 | NACSA or another competent authority directs reclassification. | Comply immediately; document the direction. |
| 9 | Post-incident review identifies that the original classification was inaccurate. | Reclassify in the incident record retrospectively; root cause of misclassification documented. |

### 8.2 Periodic Review During Active Incidents

For all **Critical (L1)** and **High (L2)** incidents, the CSIRT Lead must conduct a formal classification review:

- Every **[X] hours** for Critical incidents.
- Every **[X] hours** for High incidents.

Each review must be documented in the incident log with the outcome (maintained or reclassified) and the reviewer's name.

### 8.3 Post-Incident Reclassification

Following incident closure, the CSIRT Lead must confirm whether the final severity classification accurately reflects the actual impact of the incident. If retrospective reclassification is required:

- Update the incident record with the revised classification and rationale.
- If the reclassification triggers a NACSA notification obligation not previously met, notify NACSA immediately and document the late notification with explanation.
- Include findings in the Post-Incident Review report.

### 8.4 Standard Document Review Triggers

In addition to per-incident triggers, this Standard itself must be reviewed if any of the following occur:

- **Act 854 or NACSA guidance is amended** and materially affects classification requirements.
- **A Major or Critical incident** is resolved and the post-incident review identifies gaps in this Standard.
- **Organisational restructuring** changes the incident response function, escalation contacts, or NCII designations.
- **New threat intelligence** identifies significant emerging threat categories not covered by the current taxonomy.
- **Scheduled semi-annual review** is due (regardless of whether any triggers have occurred).

---

## 9. Roles and Responsibilities

*This section defines the roles with accountability, responsibility, consultation, and information (RACI) obligations under this Standard. Authors should validate all role titles against [Organization Name]'s current organisational chart.*

### 9.1 RACI Matrix

**RACI Key:**
- **R** — Responsible: Performs the activity.
- **A** — Accountable: Owns the outcome; approves decisions.
- **C** — Consulted: Provides input before or during the activity.
- **I** — Informed: Notified of outcomes or progress.

| Activity | SOC Analyst | SOC Lead | CSIRT Lead | CISO | CTO / CIO | Head of Compliance | General Counsel | CEO / Board |
|---|---|---|---|---|---|---|---|---|
| Detect and log potential incident | R | I | I | — | — | — | — | — |
| Perform initial triage and severity scoring | R | C | A | — | — | — | — | — |
| Assign incident type from taxonomy | R | C | A | — | — | — | — | — |
| Confirm and document classification | C | R | A | I | — | — | — | — |
| Initiate internal escalation | R | A | C | I | I | I | — | — |
| Approve NACSA notification submission | C | R | A | A | C | C | C | — |
| Submit NACSA notification | R | A | C | I | — | I | — | — |
| Coordinate concurrent regulatory notifications | C | C | R | A | C | R | C | I |
| Activate war room / crisis management | — | R | A | A | C | C | C | I |
| Authorise severity downgrade | — | C | R | A | — | — | — | — |
| Conduct periodic reclassification review | R | R | A | I | — | — | — | — |
| Lead post-incident review | — | R | A | I | I | C | — | — |
| Maintain and review this Standard | — | R | A | A | C | C | — | — |
| Approve this Standard | — | — | C | R | C | C | — | A |

### 9.2 Role Descriptions

| Role | Responsibility under this Standard |
|---|---|
| **SOC Analyst (Tier 1/2)** | Detects, triages, and initially classifies incidents using this Standard; escalates to SOC Lead for guidance; documents all classification decisions. |
| **SOC Lead** | Oversees incident classification quality; ensures escalation matrix is followed; reviews and confirms classification for Medium and above. |
| **CSIRT Lead** | Ultimate accountability for classification accuracy; approves NACSA notifications; manages reclassification decisions; leads post-incident review. |
| **CISO** | Accountable for [Organization Name]'s overall compliance with Act 854 incident notification obligations; approves this Standard; escalates Board-level incidents. |
| **CTO / CIO** | Provides technical authority and resources for incident response; consulted on systemic or infrastructure-level impacts. |
| **Head of Compliance** | Ensures regulatory notification obligations are met concurrently (BNM, PDPA); maintains records for regulatory audit. |
| **General Counsel** | Advises on legal implications, privilege, and external communications; engaged for all High and Critical incidents. |
| **CEO / Board** | Informed of Critical incidents; approves crisis communications and strategic response decisions. |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], [Title] | Initial issue of Incident Classification Standard. |
| [X.X] | [Date] | [Author Name], [Title] | [Description of changes made] |

### 10.2 Review Schedule

This Standard is subject to **semi-annual review**, with the next scheduled review due on **[Next Review Date]**. Unscheduled reviews may be triggered as defined in Section 8.4.

The review process must include:

- Assessment against current NACSA classification guidance and Act 854 obligations.
- Validation of escalation contacts and organisational roles.
- Lessons learned from incidents classified in the preceding period.
- Review of incident taxonomy for completeness against emerging threat categories.

### 10.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| CSIRT Lead | [Name] | [Signature] | [Date] |
| CISO | [Name] | [Signature] | [Date] |
| CTO / CIO | [Name] | [Signature] | [Date] |
| Head of Compliance | [Name] | [Signature] | [Date] |
| CEO / Authorised Delegate | [Name] | [Signature] | [Date] |

---

## 11. References

*The following regulatory instruments, standards, and internal documents are referenced by or directly relevant to this Standard.*

### 11.1 Legislation and Regulatory Frameworks

| Reference | Description | Relevant Provisions |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Primary legislation governing cyber security obligations for NCII entities in Malaysia. | Section 23 (Duty to notify NACSA of cyber security incidents); Section 26 (Duty to implement cyber security measures). |
| Personal Data Protection Act 2010 (Act 709) | Governs the processing and protection of personal data in Malaysia. | Relevant to data breach classification and notification obligations. |
| Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document | BNM's technology risk management requirements for financial institutions. | Relevant for concurrent notification obligations. |
| Computer Crimes Act 1997 (Act 563) | Criminalises unauthorised access and misuse of computers in Malaysia. | Relevant to criminal referral decisions following incident classification. |

### 11.2 NACSA Guidance and Directives

| Reference | Description |
|---|---|
| NACSA Incident Reporting Guidelines | [Insert title and version of applicable NACSA incident reporting guidance] |
| NACSA NCII Sector Directions — [Sector Name] | [Insert title of applicable sector-specific NACSA direction] |
| NACSA Cyber Security Framework | [Insert reference to applicable NACSA framework document] |

### 11.3 Internal Documents

| Document Title | Document ID | Owner |
|---|---|---|
| Cyber Security Incident Response Plan | [Document ID] | CSIRT Lead |
| NACSA Incident Notification Procedure | [Document ID] | SOC Lead |
| Risk Appetite Statement | [Document ID] | Chief Risk Officer |
| Business Continuity Plan | [Document ID] | [Owner] |
| Information Security Policy | [Document ID] | CISO |
| Third-Party Risk Management Policy | [Document ID] | [Owner] |

### 11.4 Industry Standards

| Standard | Description |
|---|---|
| ISO/IEC 27035 — Information Security Incident Management | International standard for information security incident management processes. |
| NIST SP 800-61 — Computer Security Incident Handling Guide | NIST guidance for establishing and operating an incident response capability. |
| FIRST — CVSS (Common Vulnerability Scoring System) | Industry standard for assessing vulnerability severity; supports impact scoring in Section 4. |

---

## 12. Appendices

### Appendix A: Incident Classification Flowchart

*Authors should insert or attach a visual flowchart depicting the end-to-end incident classification process, from detection through to NACSA notification decision. The flowchart should reference the decision points described in Sections 3, 4, and 5 of this Standard.*

[Insert Incident Classification Flowchart — see attached diagram or document management system reference: [Document ID/Link]]

---

### Appendix B: Incident Classification Worksheet

*This worksheet is to be completed by the SOC Analyst and CSIRT Lead for each classified incident. A completed copy must be retained in the incident record.*

**Incident Reference:** [Incident ID]
**Date/Time of Detection:** [DD/MM/YYYY HH:MM]
**Date/Time of Classification:** [DD/MM/YYYY HH:MM]
**Classified By:** [Name, Role]
**Reviewed By (CSIRT Lead):** [Name]

| Impact Dimension | Score (1–4) | Rationale |
|---|---|---|
| Operational Impact | [ ] | [Notes] |
| Data Impact | [ ] | [Notes] |
| Reputational Impact | [ ] | [Notes] |
| Regulatory and Legal Impact | [ ] | [Notes] |
| Financial Impact | [ ] | [Notes] |
| **Maximum Score (Overall Severity)** | [ ] | |

**Assigned Severity Level:** ☐ Critical (L1) ☐ High (L2) ☐ Medium (L3) ☐ Low (L4)

**Incident Type Code and Description:** [e.g., MW-01 — Ransomware]

**NACSA Notification Required:** ☐ Yes — Deadline: [DD/MM/YYYY HH:MM] ☐ No ☐ Conditional

**Escalation Actions Taken:**

| Action | Notified Party | Date/Time | Method |
|---|---|---|---|
| [e.g., Internal escalation to CISO] | [Name] | [DD/MM/YYYY HH:MM] | [Phone/Email/Secure Channel] |
| [e.g., NACSA Preliminary Notification] | NACSA | [DD/MM/YYYY HH:MM] | [Portal/Email] |

**Classification Review History:**

| Review Date/Time | Reviewer | Outcome | Rationale |
|---|---|---|---|
| [DD/MM/YYYY HH:MM] | [Name] | [Maintained / Upgraded / Downgraded] | [Notes] |

---

### Appendix C: NACSA Notification Template — Preliminary Incident Report

*Authors should maintain this template in a readily accessible location for use during high-pressure incident response situations. Confirm currency against NACSA's current reporting requirements.*

**TO:** [NACSA Reporting Contact / Portal]
**FROM:** [Organization Name] — [CISO / SOC Lead Name]
**DATE:** [DD/MM/YYYY HH:MM]
**SUBJECT:** Preliminary Incident Report — [Incident ID] — [Severity Level]
**TLP CLASSIFICATION:** TLP:RED

---

1. **Reporting Entity:** [Organization Name] | NCII Sector: [Sector]
2. **Incident Reference:** [Internal Incident ID]
3. **Date and Time of Detection:** [DD/MM/YYYY HH:MM]
4. **Incident Severity Classification:** [Critical / High]
5. **Incident Type:** [Incident Type Code and Description from Section 6]
6. **Summary of Incident:** [Brief factual description — max 200 words]
7. **Affected Systems:** [List affected NCII systems or system categories]
8. **Estimated Impact:** [Operational / Data / Financial impact summary]
9. **Containment Status:** [Contained / Partially Contained / Not Yet Contained]
10. **Actions Taken to Date:** [Summary of response actions]
11. **Assistance Required from NACSA:** [Yes / No — if yes, describe]
12. **Primary Contact for this Incident:** [Name, Role, Phone, Email]

---

### Appendix D: Incident Type Quick-Reference Card

*This quick-reference card is intended for use by SOC analysts during triage. It should be printed and available at SOC workstations.*

| Category | Code Range | Examples |
|---|---|---|
| Unauthorised Access | UA-01 to UA-05 | Account compromise, privilege escalation, insider threat |
| Malware | MW-01 to MW-07 | Ransomware, wiper, backdoor, rootkit, fileless malware |
| Denial of Service | DS-01 to DS-04 | Volumetric DDoS, application DDoS, RDDoS |
| Data Breach | DB-01 to DB-05 | Personal data breach, credential theft, data modification |
| Social Engineering | SE-01 to SE-05 | Spear phishing, whaling, BEC, smishing |
| Supply Chain | SC-01 to SC-03 | Software supply chain, MSP compromise, hardware tampering |
| Vulnerability Exploitation | VE-01 to VE-05 | Zero-day, known CVE, web app attack, API exploitation |
| Insider Threat | IT-01 to IT-04 | Malicious insider, negligent insider, data theft on departure |

---

### Appendix E: Glossary of Regulatory References

*Authors should maintain an up-to-date glossary of regulatory terms as defined by NACSA and Act 854, to ensure consistent interpretation across the incident response function.*

| Term | Source | Definition |
|---|---|---|
| NCII Entity | Act 854, Section [X] | [Insert statutory definition] |
| Cyber Security Incident | Act 854, Section [X] | [Insert statutory definition] |
| NCII Sector Lead | Act 854, Section [X] | [Insert statutory definition] |
| [Additional terms as required] | | |

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It must not be disclosed to unauthorised parties. Physical copies must be stored securely. Electronic copies must be stored in [Organization Name]'s approved document management system with access restricted to authorised personnel. Queries regarding this Standard should be directed to the CISO or SOC Lead.