# Incident Response Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By — Name and Title] |
| **Organization** | [Organization Name] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) |
| **Applicable Sections** | Section 23, Section 26 |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. If you have received this document in error, please notify the CISO immediately and destroy all copies.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Obligations](#3-regulatory-obligations)
4. [Definitions and Terminology](#4-definitions-and-terminology)
5. [Incident Classification Framework](#5-incident-classification-framework)
6. [6-Hour Notification Obligation](#6-6-hour-notification-obligation)
7. [Roles and Escalation Matrix](#7-roles-and-escalation-matrix)
8. [Incident Response Lifecycle](#8-incident-response-lifecycle)
9. [Communication Protocols](#9-communication-protocols)
10. [Evidence Preservation Requirements](#10-evidence-preservation-requirements)
11. [Post-Incident Review Process](#11-post-incident-review-process)
12. [Roles and Responsibilities (RACI)](#12-roles-and-responsibilities-raci)
13. [Policy Compliance and Enforcement](#13-policy-compliance-and-enforcement)
14. [Review and Approval](#14-review-and-approval)
15. [References](#15-references)
16. [Appendices](#16-appendices)

---

## 1. Purpose

*This section states the intent of the policy, the problem it addresses, and its alignment with national cybersecurity legislation. Authors should ensure the purpose is specific to the organization's role as a National Critical Information Infrastructure (NCII) entity.*

This Incident Response Policy ("Policy") establishes the formal framework by which [Organization Name] ("the Organization") detects, reports, manages, responds to, and recovers from cyber security incidents that affect, or have the potential to affect, its systems, assets, and operations — particularly those designated as National Critical Information Infrastructure (NCII) under the Cyber Security Act 2024 (Act 854).

The purpose of this Policy is to:

- Define a structured, repeatable, and auditable approach to cyber security incident management;
- Ensure compliance with mandatory reporting obligations under Section 23 and Section 26 of the Cyber Security Act 2024;
- Minimize the impact of cyber security incidents on the Organization's operations, data, customers, and reputation;
- Establish clear lines of authority, accountability, and communication during a cyber security incident;
- Protect the integrity of evidence and support potential law enforcement or regulatory investigations;
- Enable continuous improvement through systematic post-incident analysis and lessons-learned processes;
- Fulfil the Organization's obligations as a designated NCII entity to the National Cyber Security Agency (NACSA) and relevant Sector Leads.

This Policy applies in conjunction with [Organization Name]'s broader Information Security Policy, Business Continuity Plan, and Disaster Recovery Plan, and is informed by established industry standards including ISO/IEC 27035, NIST SP 800-61, and the NACSA National Cyber Security Policy (NCSP).

---

## 2. Scope

*This section defines the boundary of the policy — what systems, entities, people, and incident types are covered. Authors must clearly delineate NCII systems from general IT systems if applicable, and identify any exclusions.*

### 2.1 Organizational Scope

This Policy applies to:

- All employees, contractors, vendors, third-party service providers, and any other persons who have authorized access to [Organization Name]'s information systems, networks, or data;
- All subsidiaries, branches, and affiliate entities of [Organization Name] that operate under shared infrastructure or receive services from centrally managed NCII systems;
- Members of the Board, Senior Management, and the Incident Response Team (IRT) in their respective governance and operational capacities.

### 2.2 Systems and Asset Scope

This Policy governs incidents affecting the following:

- **NCII Systems:** All systems, networks, services, and assets formally designated as NCII under the Cyber Security Act 2024, as listed in [Organization Name]'s NCII Asset Register (Reference: [Asset Register Document ID]);
- **Critical Business Systems:** Core banking systems, payment infrastructure, customer-facing platforms, data repositories, and enterprise resource planning (ERP) systems, whether on-premises, cloud-hosted, or hybrid;
- **Third-Party Managed Systems:** Systems operated by third parties on behalf of [Organization Name] where a cyber security incident could impact NCII assets or customer data;
- **Operational Technology (OT) and Industrial Control Systems (ICS):** Where applicable to [Organization Name]'s operating environment.

### 2.3 Incident Scope

This Policy covers all types of cyber security incidents as defined in Section 4, including but not limited to:

- Unauthorized access or data breaches;
- Malware and ransomware infections;
- Distributed Denial-of-Service (DDoS) attacks;
- Insider threats and privilege abuse;
- Supply chain compromises;
- Phishing campaigns and social engineering attacks;
- Advanced Persistent Threats (APTs);
- Physical security incidents with a cyber dimension.

### 2.4 Exclusions

*Authors should document any explicit exclusions to avoid ambiguity during an incident.*

The following are explicitly excluded from the scope of this Policy unless they intersect with NCII systems:

- [Exclusion 1 — e.g., Routine IT helpdesk incidents with no security dimension]
- [Exclusion 2 — e.g., Non-production or sandbox environments with no connectivity to live systems]
- [Exclusion 3 — e.g., Physical security incidents with no cyber component, which are governed by the Physical Security Policy]

---

## 3. Regulatory Obligations

*This section translates legal obligations into operational commitments. Authors should reference specific Act provisions and confirm alignment with NACSA's issued guidelines and circulars. Legal counsel should review this section.*

[Organization Name] is designated as an entity responsible for NCII under the Cyber Security Act 2024 (Act 854) and is subject to the following statutory obligations:

### 3.1 Cyber Security Act 2024 (Act 854)

| Section | Obligation | Policy Alignment |
|---|---|---|
| **Section 23** | Duty to notify NACSA of a cyber security incident affecting NCII within the prescribed timeframe (6 hours for initial notification; 14 days for a full incident report) | Sections 6, 9.1 of this Policy |
| **Section 26** | Duty to take reasonable steps to manage and mitigate cyber security risks affecting NCII, including maintaining an incident response capability | Sections 5, 7, 8, 10 of this Policy |
| **Section 29** | Duty to comply with NACSA directives issued during or following a cyber security incident | Sections 7.3, 9.2 of this Policy |
| **Section 30** | Prohibition on obstruction of NACSA investigations; duty to cooperate with authorized officers | Section 10 of this Policy |

### 3.2 Related Regulatory Frameworks

In addition to Act 854, this Policy is informed by the following:

| Framework | Issuing Authority | Relevant Obligation |
|---|---|---|
| Personal Data Protection Act 2010 (Act 709) | PDPC Malaysia | Data breach notification and protection of personal data during incidents |
| Bank Negara Malaysia (BNM) Risk in Technology (RMiT) Policy | BNM | Technology risk management and incident reporting for licensed financial institutions |
| National Cyber Security Policy (NCSP) | NACSA | National-level incident reporting and coordination obligations |
| [Other Applicable Regulation] | [Issuing Authority] | [Obligation Summary] |

### 3.3 NACSA Reporting Channels

The Organization's designated reporting mechanism to NACSA is as follows:

- **Primary Channel:** [NACSA Cyber999 Help Centre / Sector Lead Contact — insert contact details]
- **Sector Lead:** [Name of Sector Lead Authority, e.g., BNM for Financial Sector]
- **Organization Liaison:** [Name and Title of Primary Liaison Officer]
- **Backup Contact:** [Name and Title of Secondary Liaison Officer]

---

## 4. Definitions and Terminology

*This section ensures a shared understanding of key terms used throughout the policy. Authors should align these definitions with NACSA's official glossary where available and add organization-specific terms as needed.*

| Term | Definition |
|---|---|
| **Cyber Security Incident** | Any event that actually or potentially jeopardizes the confidentiality, integrity, or availability of an information system or the information the system processes, stores, or transmits, as defined under the Cyber Security Act 2024. |
| **NCII (National Critical Information Infrastructure)** | Computer or computer system, whether stand-alone or part of a network, which is necessary for the continuous delivery of an essential service as designated by the Minister under the Cyber Security Act 2024. |
| **Incident Response Team (IRT)** | The designated team responsible for coordinating and executing the Organization's response to cyber security incidents. |
| **CISO** | Chief Information Security Officer — the designated senior executive responsible for the Organization's cyber security posture and this Policy. |
| **NACSA** | National Cyber Security Agency — the national authority for cyber security in Malaysia under Act 854. |
| **Threat Actor** | An individual, group, or entity responsible for initiating or carrying out a cyber attack or security incident. |
| **Indicators of Compromise (IoC)** | Forensic artifacts or evidence found on a network or in an operating system that, with high confidence, indicates a computer intrusion. |
| **Containment** | Actions taken to limit the scope and impact of a security incident and prevent further damage. |
| **Eradication** | The process of removing the root cause and all traces of an incident from the Organization's environment. |
| **Recovery** | The process of restoring affected systems and services to normal, verified, secure operation. |
| **Chain of Custody** | A documented and unbroken record of the possession, handling, and transfer of evidence, ensuring its integrity for legal and regulatory purposes. |
| **Sector Lead** | The designated regulator or statutory authority responsible for overseeing NCII within a particular sector (e.g., BNM for the financial sector). |
| **Lessons Learned** | A post-incident activity to identify what worked well, what did not, and what improvements should be made to the incident response process. |
| **Mean Time to Detect (MTTD)** | The average time taken to identify a cyber security incident from the point at which it first occurs. |
| **Mean Time to Respond (MTTR)** | The average time taken to contain and begin remediation of a cyber security incident from the point of detection. |
| **[Organization-Specific Term]** | [Definition] |

---

## 5. Incident Classification Framework

*This section provides the tiered incident classification system that determines response urgency, escalation requirements, and notification obligations. Authors should calibrate severity thresholds to the Organization's risk appetite and operational context. The classification must be aligned with NACSA's severity taxonomy where available.*

All cyber security incidents reported to [Organization Name] shall be classified according to a standardized severity framework to ensure consistent, proportionate, and timely response. Incident severity shall be determined by assessing impact across the following dimensions:

- **Confidentiality:** Whether sensitive, personal, or classified data has been or may be compromised;
- **Integrity:** Whether data, systems, or processes have been altered or corrupted;
- **Availability:** Whether systems, services, or data are unavailable or degraded;
- **Reputational Impact:** The potential for public, regulatory, or media attention;
- **Financial Impact:** Direct financial loss or regulatory penalty exposure;
- **NCII Impact:** Whether designated NCII systems are affected or at risk.

### 5.1 Severity Classification Levels

| Severity Level | Label | Description | Examples | Initial Response Time | Escalation Required |
|---|---|---|---|---|---|
| **P1** | Critical | Confirmed or suspected breach of NCII systems; significant data exfiltration; ransomware deployment; systemic service outage affecting critical operations | Ransomware on core banking system; APT intrusion confirmed; NCII service fully unavailable | Immediate (within 15 minutes) | Board, CEO, CISO, NACSA (6-hour rule applies) |
| **P2** | High | Significant incident with potential NCII impact; large-scale phishing campaign with confirmed compromise; partial service degradation | Active intrusion contained to non-NCII systems; confirmed insider data theft; DDoS causing significant service degradation | Within 1 hour | CISO, CTO, Risk Committee |
| **P3** | Medium | Containable incident with limited impact; isolated malware infection; suspicious activity requiring investigation | Malware on isolated workstation; unauthorized access attempt blocked; suspicious network traffic | Within 4 hours | CISO, IT Security Manager |
| **P4** | Low | Minor incident or potential security event with negligible impact; no data compromise; no service disruption | Failed brute-force attempt; phishing email received but not acted upon; policy violation with no security impact | Within 24 hours | IT Security Manager |
| **P5** | Informational | Security events requiring logging and monitoring but not immediate action | Routine vulnerability scan; scheduled penetration test activity; security alert from automated tool requiring review | Next business day | IT Security Team |

### 5.2 Incident Classification Criteria Matrix

*Authors should complete the following matrix to provide staff with objective, measurable criteria for classification decisions.*

| Impact Dimension | P1 — Critical | P2 — High | P3 — Medium | P4 — Low |
|---|---|---|---|---|
| **Records Compromised** | >10,000 records OR any NCII-related data | 1,000–10,000 records | 100–999 records | <100 records |
| **Systems Affected** | NCII systems or >50% of critical systems | 10–50% of critical systems | <10% of critical systems or non-critical systems | Single non-critical system |
| **Service Availability** | Complete or near-complete outage of critical services | Significant degradation of critical services | Minor degradation of non-critical services | No service impact |
| **Financial Exposure** | >[RM Threshold] direct loss or regulatory exposure | [RM Threshold] to [RM Threshold] | [RM Threshold] to [RM Threshold] | <[RM Threshold] |
| **Regulatory Notification** | Mandatory — NACSA 6-hour rule triggered | Mandatory — assess within 1 hour | Likely required — CISO to decide | Not typically required |
| **Media/Reputational Risk** | High — national or international attention likely | Moderate — industry or sector attention likely | Low — internal attention only | Negligible |

### 5.3 Incident Classification Process

1. **Initial Triage:** The Security Operations Centre (SOC) or first responder assigns a preliminary severity classification upon detecting or receiving a report of a potential incident.
2. **CISO Review:** For all P1 and P2 incidents, the CISO (or designate) must validate or revise the classification within [30 minutes] of initial triage.
3. **Dynamic Reclassification:** Incident severity shall be reassessed continuously as new information emerges. Escalation to a higher severity level shall be immediate; de-escalation shall require CISO approval.
4. **Classification Record:** All classification decisions and changes shall be documented in the Incident Register (Reference: [Incident Register Document ID]) with a timestamp and the name of the classifying officer.

### 5.4 Incident Categories

In addition to severity, incidents shall be categorized by type to facilitate appropriate technical response:

| Category Code | Incident Category | Description |
|---|---|---|
| **CAT-01** | Unauthorized Access | Intrusion, privilege escalation, credential compromise |
| **CAT-02** | Malware | Viruses, ransomware, spyware, trojans, rootkits |
| **CAT-03** | Data Breach / Exfiltration | Confirmed or suspected unauthorized data access or export |
| **CAT-04** | Denial of Service | DDoS, resource exhaustion attacks |
| **CAT-05** | Phishing / Social Engineering | Email phishing, vishing, smishing, pretexting |
| **CAT-06** | Insider Threat | Malicious or negligent actions by authorized users |
| **CAT-07** | Supply Chain / Third-Party | Compromise originating from a vendor or third-party system |
| **CAT-08** | APT / Nation-State | Sophisticated, persistent, targeted attacks |
| **CAT-09** | Physical / Cyber Intersection | Physical access resulting in a cyber security impact |
| **CAT-10** | Other | Incidents not fitting the above categories |

---

## 6. 6-Hour Notification Obligation

*This section operationalizes the mandatory reporting requirement under Section 23 of the Cyber Security Act 2024. Authors must clearly define the trigger event, notification content, responsible party, and escalation pathway. This section should be reviewed by legal counsel.*

### 6.1 Legal Basis

Section 23 of the Cyber Security Act 2024 (Act 854) mandates that any entity responsible for NCII **must notify NACSA as soon as practicable, and in any event within six (6) hours**, of becoming aware of a cyber security incident that affects or may affect NCII under their responsibility.

Failure to comply with the 6-hour notification obligation constitutes an offence under Act 854 and may result in regulatory sanctions.

### 6.2 Notification Trigger Conditions

The 6-hour notification clock commences upon [Organization Name] becoming **aware** of an incident. Awareness is deemed to occur at the earliest of:

- Receipt of a formal incident report from the SOC, an employee, a vendor, or any other party;
- Automated security alert from a monitoring or detection system that is escalated and acknowledged by a security professional;
- Notification from an external party (e.g., law enforcement, NACSA, sector regulator, or a customer) of a potential incident;
- Discovery through any other means that a cyber security incident affecting NCII has occurred or is occurring.

**Note:** The 6-hour clock is not contingent on classification confirmation or investigation completion. If there is reasonable suspicion that an NCII system is affected, notification must be initiated immediately.

### 6.3 Notification Pathway

The following mandatory notification sequence must be executed within 6 hours of awareness:

```
[Detecting Party / SOC]
        ↓ Immediate (within 15 minutes)
[Incident Response Team Lead / IT Security Manager]
        ↓ Within 30 minutes of detection
[CISO]
        ↓ Within 1 hour of detection (CISO assesses NCII impact)
[If NCII impact confirmed or suspected — NACSA Notification]
        ↓ Within 6 hours of awareness
[NACSA via prescribed channel]
        ↓ Simultaneously or within 2 hours of NACSA notification
[Sector Lead — e.g., BNM] + [Board / Risk Committee] + [CEO]
```

### 6.4 Initial Notification Content (6-Hour Report)

The initial notification to NACSA shall include, at minimum, the following information:

| Field | Required Content |
|---|---|
| **Organization Name** | [Organization Name] and NCII designation |
| **Date and Time of Detection** | Timestamp when awareness was established |
| **Incident Reference Number** | Internal incident ticket/reference number |
| **Incident Description** | Brief factual description of the incident (what is known at time of notification) |
| **NCII Systems Affected** | Identity and nature of NCII systems affected or potentially affected |
| **Preliminary Severity** | Initial classification (P1–P4) and incident category |
| **Current Status** | Whether the incident is active, contained, or eradicated |
| **Immediate Actions Taken** | Steps taken to contain or mitigate the incident to date |
| **Reporting Contact** | Name, title, and contact details of the primary incident liaison |
| **Estimated Impact** | Preliminary assessment of operational, data, and service impact |

*The prescribed NACSA notification form (where issued by NACSA) shall be used. In the absence of a prescribed form, the above fields shall be communicated via [email / secure portal / telephone followed by written confirmation] to [NACSA contact details].*

### 6.5 Follow-Up Reporting Obligations

| Report | Timeframe | Recipient | Content |
|---|---|---|---|
| **Initial Notification** | Within 6 hours of awareness | NACSA, Sector Lead | Minimum fields per Section 6.4 |
| **Interim Status Update** | Every [24 hours] while incident is active | NACSA, Sector Lead, Board | Updated incident status, containment progress, revised impact assessment |
| **Full Incident Report** | Within 14 days of incident closure | NACSA, Sector Lead | Complete incident report per Section 11 and Appendix D |
| **Post-Incident Review Report** | Within [30 days] of incident closure | NACSA (if requested), Board, Risk Committee | Lessons learned and remediation plan |

### 6.6 Notification Decision Log

All notification decisions — including the decision not to notify — shall be documented in the Notification Decision Log (Appendix E). The log shall capture:

- Date and time of awareness;
- Decision made (notify / not notify);
- Basis for decision;
- Name and title of decision-maker (must be CISO or delegate);
- Actual notification timestamp;
- Any delays and their justification.

---

## 7. Roles and Escalation Matrix

*This section defines who is responsible for each aspect of incident response and how incidents are escalated. Authors should populate this with specific individuals or role-holders within the organization and ensure the escalation matrix is consistent with the incident classification levels defined in Section 5.*

### 7.1 Incident Response Organizational Structure

[Organization Name]'s incident response structure operates on three tiers:

**Tier 1 — Operational (Detection and Initial Containment)**

> *The front line of incident detection, triage, and initial technical response. Authors should list the specific teams or functions that comprise this tier.*

- Security Operations Centre (SOC) — [Internal / Managed Service Provider: Name]
- IT Operations Team
- [Other Tier 1 Functions]

**Tier 2 — Management (Coordination and Communication)**

> *The incident management layer responsible for coordinating the response, managing communications, and making escalation decisions.*

- Incident Response Team (IRT) Lead
- Chief Information Security Officer (CISO)
- IT/Technology Risk Manager
- Legal Counsel
- Communications / Public Relations Manager

**Tier 3 — Executive and Governance (Strategic Oversight)**

> *Senior leadership and board-level oversight, engaged for P1 and P2 incidents.*

- Chief Executive Officer (CEO)
- Chief Risk Officer (CRO)
- Chief Operating Officer (COO)
- Board Risk Committee / Audit Committee
- [Other Executive Stakeholders]

### 7.2 Key Roles and Responsibilities

| Role | Title | Primary Responsibility | Contact (24/7) |
|---|---|---|---|
| **CISO** | [Name] | Ultimate accountability for incident response policy, NACSA notification decisions, board reporting | [Contact] |
| **IRT Lead** | [Name / Role] | Day-to-day coordination of the incident response team, incident documentation, status reporting | [Contact] |
| **SOC Lead** | [Name / Role] | Threat detection, triage, initial containment actions, IoC analysis | [Contact] |
| **Legal Counsel** | [Name / Role] | Legal advice, regulatory communication oversight, law enforcement liaison, evidence handling guidance | [Contact] |
| **Communications Manager** | [Name / Role] | Internal and external communications, media management, customer notifications | [Contact] |
| **IT Operations Lead** | [Name / Role] | Technical containment, system recovery, infrastructure support | [Contact] |
| **Data Protection Officer** | [Name / Role] | PDPA compliance, personal data breach assessment and notification to PDPC | [Contact] |
| **Forensics Lead** | [Name / Internal / External: Firm Name] | Digital forensic investigation, evidence preservation, chain of custody | [Contact] |
| **Business Continuity Manager** | [Name / Role] | Activation of BCP/DRP if required, operational continuity coordination | [Contact] |
| **Third-Party IR Retainer** | [Vendor Name] | Specialist incident response support, surge capacity, advanced forensics | [Contact / SLA Reference] |
| **NACSA Liaison** | [Name / Role] | Primary point of contact for all NACSA communications during and after an incident | [Contact] |
| **Sector Lead Liaison** | [Name / Role] | Primary point of contact for Sector Lead (e.g., BNM) communications | [Contact] |

### 7.3 Escalation Matrix

*Authors should validate these escalation thresholds with the CISO and executive team and ensure they are reflected in on-call schedules.*

| Incident Severity | Notify Within | Escalation Path | Decision Authority |
|---|---|---|---|
| **P1 — Critical** | Immediately / within 15 minutes | SOC → IRT Lead → CISO → CEO → Board Chair / Risk Committee → NACSA → Sector Lead | CEO / Board |
| **P2 — High** | Within 1 hour | SOC → IRT Lead → CISO → CRO → Risk Committee | CISO / CRO |
| **P3 — Medium** | Within 4 hours | SOC → IRT Lead → CISO | CISO |
| **P4 — Low** | Within 24 hours | SOC → IT Security Manager | IT Security Manager |
| **P5 — Informational** | Next business day | SOC → IT Security Team | SOC Lead |

### 7.4 On-Call and Out-of-Hours Response

*Authors should confirm that on-call arrangements are formally documented and tested.*

[Organization Name] maintains a **24/7/365 on-call roster** for cyber security incident response. The on-call arrangement operates as follows:

- **Primary On-Call:** [SOC / Managed Security Service Provider — Contact Protocol]
- **Secondary On-Call (Escalation):** IRT Lead — [Paging/Contact Method]
- **CISO Emergency Contact:** [Contact Protocol for P1 Incidents]
- **Executive Emergency Contact:** [Contact Protocol for P1 Incidents]

The on-call schedule is maintained by [HR / IT Security / SOC Manager] and reviewed [monthly / quarterly]. The current on-call schedule is accessible at [Location / System].

---

## 8. Incident Response Lifecycle

*This section describes the end-to-end incident response process. Authors should map each phase to specific procedures, playbooks, and tooling, and ensure alignment with ISO/IEC 27035 and NIST SP 800-61.*

[Organization Name] adopts a six-phase incident response lifecycle:

### 8.1 Phase 1 — Preparation

*Preparation activities that must be in place before an incident occurs.*

The Preparation phase encompasses all activities undertaken to ensure [Organization Name] is ready to detect and respond to cyber security incidents effectively. Key preparation activities include:

- Maintenance of this Policy and associated procedures, playbooks, and runbooks;
- Regular training and awareness for all IRT members and relevant staff;
- Procurement and maintenance of incident response tooling (SIEM, EDR, forensics tools, etc.);
- Establishment and testing of communication channels and escalation pathways;
- Maintenance of a retainer agreement with a third-party incident response firm;
- Regular tabletop exercises and simulated incident drills (minimum [annually / semi-annually]);
- Maintenance of the NCII Asset Register and system documentation to support rapid impact assessment.

**Preparation Checklist:**

| Preparation Item | Owner | Frequency | Last Completed | Status |
|---|---|---|---|---|
| IRT training and certification | CISO | Annual | [Date] | [Status] |
| Tabletop exercise | IRT Lead | [Frequency] | [Date] | [Status] |
| IR tooling health check | SOC Lead | Monthly | [Date] | [Status] |
| Contact list validation | IRT Lead | Quarterly | [Date] | [Status] |
| Third-party retainer review | CISO / Legal | Annual | [Date] | [Status] |
| NCII Asset Register update | IT Security Manager | [Frequency] | [Date] | [Status] |
| Playbook review and update | IRT Lead | Annual | [Date] | [Status] |

### 8.2 Phase 2 — Detection and Identification

*The process by which potential incidents are first identified and reported.*

An incident may be detected through the following channels:

| Detection Source | Examples | Initial Recipient |
|---|---|---|
| **Automated Detection** | SIEM alerts, EDR alerts, IDS/IPS triggers, anomaly detection | SOC |
| **Internal Reporting** | Employee report via [helpdesk / email / hotline] | [Helpdesk / SOC] |
| **External Notification** | Customer complaint, partner alert, law enforcement | [CISO / Legal] |
| **NACSA / Sector Lead Alert** | Threat intelligence sharing, sector-wide advisory | [NACSA Liaison / CISO] |
| **Threat Intelligence** | Commercial or open-source threat feeds, OSINT | SOC |
| **Third-Party Discovery** | Penetration test findings, bug bounty reports | [IT Security Manager] |

**Detection Response Steps:**

1. Log the potential incident in the Incident Register with a unique Incident Reference Number;
2. Assign a preliminary severity classification;
3. Notify the IRT Lead;
4. Commence initial investigation to confirm whether a security incident has occurred;
5. Initiate the 6-hour notification clock if NCII impact is suspected.

### 8.3 Phase 3 — Containment

*Actions taken to limit the spread and impact of the incident.*

Containment shall be implemented in two stages:

**Short-Term Containment** (immediate actions to stop the bleeding):

- [Isolate affected systems from the network];
- [Block malicious IP addresses or domains at the firewall];
- [Disable compromised user accounts];
- [Preserve volatile memory and system state before isolation where forensically required];
- [Document all containment actions with timestamps].

**Long-Term Containment** (stabilization for continued operation during investigation):

- [Implement alternative or backup systems for critical services];
- [Apply enhanced monitoring to all adjacent systems];
- [Establish a clean, segmented environment for business continuity];
- [Brief relevant business units on operational restrictions during containment].

**Containment Decision Authority:**

| Action | Authorization Required |
|---|---|
| Isolate single workstation | SOC Lead |
| Isolate server or network segment | IRT Lead |
| Take down business-critical service | CISO + COO |
| Take down NCII service | CISO + CEO |
| Engage law enforcement | CISO + Legal Counsel + CEO |

### 8.4 Phase 4 — Eradication

*Removing the root cause and all malicious artifacts from the environment.*

Eradication activities shall include:

- Identification and removal of all malware, backdoors, and unauthorized access points;
- Patching or remediation of exploited vulnerabilities;
- Reset of all potentially compromised credentials;
- Review and hardening of affected system configurations;
- Verification that no residual malicious artifacts remain across all affected systems;
- Forensic confirmation of eradication prior to initiating recovery.

### 8.5 Phase 5 — Recovery

*Restoring systems and services to verified, secure operational status.*

Recovery shall follow a structured, tested process:

- Restoration shall be conducted from verified, clean backups unless a clean build is required;
- Systems shall be restored in order of criticality, with NCII systems prioritized;
- Restored systems shall undergo security verification and testing prior to reconnection to the production network;
- Business units shall formally confirm acceptance of restored services before they are considered operationally restored;
- Enhanced monitoring shall remain in place for a minimum of [30 days] post-recovery;
- Recovery milestones shall be communicated to NACSA and the Sector Lead as required.

### 8.6 Phase 6 — Post-Incident Activity

*See Section 11 — Post-Incident Review Process.*

---

## 9. Communication Protocols

*This section governs how information about the incident is communicated internally and externally. Poorly managed communications can exacerbate reputational and regulatory risk. Authors should ensure this section is reviewed by Legal, Communications, and HR.*

### 9.1 Communication Principles

All incident-related communications shall adhere to the following principles:

- **Accuracy:** Only factually verified information shall be communicated externally. Speculative statements must be avoided;
- **Need-to-Know:** Internal communications shall be restricted to those with a legitimate need for the information;
- **Timeliness:** Communications shall meet all regulatory deadlines and be sufficiently prompt to manage stakeholder expectations;
- **Consistency:** A single, authorized spokesperson shall be designated for all external communications;
- **Confidentiality:** Information about the incident shall not be disclosed on social media, personal devices, or unofficial channels by any staff member.

### 9.2 Internal Communications

| Audience | Content | Channel | Frequency | Owner |
|---|---|---|---|---|
| IRT and Technical Teams | Full incident details, technical findings, action items | [Secure Incident Response Platform / Email] | Continuous during incident | IRT Lead |
| CISO and Executive Team | Incident status, key decisions required, regulatory obligations | [Secure Briefing / Executive Channel] | Every [2–4 hours] for P1; every [6–12 hours] for P2 | IRT Lead |
| Board / Risk Committee | High-level impact summary, regulatory notification status, financial exposure | Board briefing / formal memo | At onset (P1); within [24 hours] (P2) | CISO |
| Affected Business Units | Operational impact, restrictions, expected recovery timeline | Email / direct briefing | At onset and at major status changes | IRT Lead / Business Continuity Manager |
| General Staff | Need-to-know operational guidance only (e.g., system unavailability) | [Internal communications channel] | As required | Communications Manager |

### 9.3 External Communications

*All external communications must be approved by the CISO and, where applicable, Legal Counsel before release.*

| Audience | Trigger | Content | Channel | Owner |
|---|---|---|---|---|
| **NACSA** | NCII incident suspected (6-hour rule) | See Section 6.4 | [Prescribed NACSA channel] | NACSA Liaison / CISO |
| **Sector Lead (e.g., BNM)** | Simultaneous or within 2 hours of NACSA notification | Incident summary, NCII impact, actions taken | [Prescribed BNM channel] | Sector Lead Liaison / CISO |
| **Law Enforcement (PDRM / CyberSecurity Malaysia)** | Criminal activity suspected | Incident particulars, evidence summary | Formal report / CISO + Legal | Legal Counsel / CISO |
| **Affected Customers / Data Subjects** | Personal data breach confirmed (PDPA obligation) | Nature of breach, data affected, protective steps, contact | [Prescribed method — letter, email, in-app notification] | DPO / Communications Manager |
| **Media / Public** | P1 incident with public impact; regulatory direction | Approved holding statement only | Official press release / spokesperson | CEO / Communications Manager |
| **Business Partners / Third Parties** | Third-party systems or data affected | Incident notification, required partner actions | Formal written notification | CISO / Legal Counsel |

### 9.4 Media and Public Relations Protocol

In the event of media enquiries or public interest in a cyber security incident:

1. All media enquiries shall be directed to [Communications Manager / Designated Spokesperson];
2. No technical details, patient or customer data, or unconfirmed information shall be disclosed;
3. A holding statement shall be prepared by the Communications Manager in consultation with Legal Counsel and CISO within [4 hours] of a P1 incident;
4. All media statements must be approved by [CEO / Legal Counsel] before release;
5. Social media monitoring shall be activated for P1 and P2 incidents to detect emerging public commentary.

### 9.5 Prohibited Communications

The following are strictly prohibited without explicit written authorization from the CISO:

- Disclosure of incident details to media, analysts, or external parties;
- Discussion of the incident on personal social media or messaging applications;
- Sharing of forensic reports, IoCs, or technical details with unauthorized parties;
- Speculation about the cause, scale, or attribution of the incident.

---

## 10. Evidence Preservation Requirements

*This section ensures that digital evidence is preserved in a manner that maintains its integrity, admissibility, and chain of custody for regulatory investigations, law enforcement proceedings, and internal reviews. Authors should ensure alignment with Evidence Act 1950 (as amended) and seek legal review.*

### 10.1 Purpose of Evidence Preservation

Proper evidence preservation is critical to:

- Support NACSA's authorized investigation and audit rights under Act 854;
- Enable law enforcement to prosecute cybercrime offences;
- Support insurance claims and civil litigation;
- Provide a factual basis for the post-incident review and regulatory reporting;
- Protect [Organization Name] from allegations of evidence tampering or negligence.

### 10.2 Evidence Types

| Evidence Type | Description | Preservation Method |
|---|---|---|
| **Volatile Evidence** | RAM contents, running processes, active network connections | Captured immediately prior to system isolation using approved forensic tools |
| **Log Files** | SIEM logs, application logs, access logs, firewall logs, authentication logs | Exported and hashed; preserved on isolated forensic storage |
| **Disk Images** | Full forensic images of affected system storage | Bit-for-bit forensic copy using write-blockers; verified with hash |
| **Network Traffic** | Packet captures (PCAPs) from affected network segments | Preserved from SIEM / network monitoring infrastructure |
| **Endpoint Artefacts** | Malware samples, config files, scheduled tasks, registry entries | Preserved in isolated, contained environment |
| **Email Records** | Phishing emails, suspicious communications | Preserved via email gateway export; originals retained |
| **Physical Evidence** | Hardware devices, USB drives, physical access records | Secured in physical evidence bag with tamper-evident seal |
| **Communication Records** | Incident communications, notifications, decisions | Preserved in incident management platform; exported to evidence archive |

### 10.3 Chain of Custody Requirements

All evidence collected during an incident investigation shall be subject to a documented chain of custody:

- A **Chain of Custody Form** (Appendix F) shall be completed for every item of evidence at the time of collection;
- Evidence shall be logged in the **Evidence Register** (Appendix G) with: item ID, description, date and time of collection, collector's name and signature, storage location, and hash values;
- Access to evidence shall be restricted to authorized IRT members and the designated Forensics Lead;
- Transfer of evidence between parties (e.g., to law enforcement or external forensic firm) shall be documented on the Chain of Custody Form with the recipient's acknowledgment;
- Evidence shall not be altered, deleted, or modified under any circumstances;
- Unauthorized access to or modification of evidence shall itself constitute a security incident and shall be reported immediately.

### 10.4 Evidence Storage and Retention

| Evidence Category | Storage Location | Retention Period | Disposal Method |
|---|---|---|---|
| Digital Forensic Artefacts | [Isolated forensic storage system — air-gapped / encrypted] | Minimum 7 years or duration of any legal proceedings, whichever is longer | Secure deletion with certificate of destruction |
| Log Files | [Centralized, tamper-evident log repository] | Minimum 3 years | Secure deletion |
| Incident Documentation | [Incident Management Platform / Secure Document Repository] | Minimum 7 years | Secure deletion |
| Physical Evidence | [Physical secure storage — locked, access-controlled] | Duration of investigation plus [2 years] | Destroyed under supervision with documentation |

### 10.5 Forensic Investigation Standards

All forensic investigations shall:

- Be conducted by or under the supervision of a qualified forensic professional;
- Use industry-accepted, court-admissible forensic tools (e.g., [EnCase, FTK, Autopsy, Magnet AXIOM]);
- Follow the ACPO Principles for Digital Evidence (or equivalent Malaysian standard);
- Never work on original evidence — all investigation shall be conducted on forensic copies;
- Produce a formal **Forensic Investigation Report** upon completion (Appendix H Template).

### 10.6 Legal Hold

Upon CISO or Legal Counsel declaration of a **Legal Hold**:

- All preservation and deletion schedules for data within scope of the Legal Hold are immediately suspended;
- IT Operations shall be notified to prevent any automated data deletion (e.g., log rotation) within scope;
- The Legal Hold remains in effect until formally lifted by Legal Counsel in writing;
- A Legal Hold Register shall be maintained by Legal Counsel.

---

## 11. Post-Incident Review Process

*This section ensures that every significant incident generates actionable improvements. Authors should embed this as a non-negotiable process and tie its outputs to the risk register and security improvement roadmap.*

### 11.1 Mandatory Post-Incident Review

[Organization Name] shall conduct a formal Post-Incident Review (PIR) following every P1 and P2 incident. For P3 incidents, a PIR shall be conducted at the discretion of the CISO. P4 and P5 incidents shall be reviewed in aggregate on a [monthly / quarterly] basis.

### 11.2 Post-Incident Review Timeline

| Activity | Timeframe | Owner |
|---|---|---|
| Hot Debrief — immediate verbal debrief of IRT | Within 24–48 hours of incident closure | IRT Lead |
| Evidence and documentation compilation | Within 5 business days of closure | IRT Lead / Forensics Lead |
| Draft PIR Report | Within 10 business days of closure | IRT Lead |
| PIR Workshop — structured review session with all stakeholders | Within 14 business days of closure | CISO |
| Final PIR Report — incorporating all findings and action items | Within 20 business days of closure | CISO |
| Full Incident Report submission to NACSA | Within 14 calendar days of closure | NACSA Liaison / CISO |
| Remediation action plan implementation tracking commences | Following PIR Report approval | IRT Lead / Risk Manager |

### 11.3 Post-Incident Review Scope

The PIR shall address the following questions:

**Timeline Reconstruction:**
- What happened? When did it start? When was it detected? How long did each phase take?
- What was the attack vector, root cause, and threat actor (if attributable)?

**Detection and Response Effectiveness:**
- How was the incident detected? Was the detection timely?
- Were the MTTD and MTTR within acceptable thresholds?
- Did the response follow the documented procedures? If not, why?

**Impact Assessment:**
- What was the confirmed impact on systems, data, customers, and operations?
- Were NCII systems affected? To what extent?
- What was the financial impact (direct and indirect)?

**Regulatory Compliance:**
- Was the 6-hour notification to NACSA met? If not, what was the reason?
- Were all regulatory obligations fulfilled?

**Lessons Learned:**
- What worked well in the response?
- What did not work? What were the gaps?
- What changes are required to prevent recurrence or reduce impact in future?

### 11.4 Post-Incident Review Report Structure

The PIR Report shall contain the following sections at minimum:

| Section | Content |
|---|---|
| **Executive Summary** | High-level narrative of the incident and key findings |
| **Incident Timeline** | Chronological record of the incident from first occurrence to closure |
| **Root Cause Analysis** | Identified root cause(s) and contributing factors |
| **Impact Summary** | Confirmed impact on systems, data, services, customers, and finances |
| **Response Assessment** | Evaluation of each response phase against policy requirements |
| **Regulatory Compliance Summary** | Confirmation of notification obligations met (or explanation of exceptions) |
| **Lessons Learned** | Key findings — positive and negative |
| **Remediation Action Plan** | Specific, time-bound actions to address identified gaps |
| **Recommendations** | Strategic recommendations for policy, process, or technology improvement |

### 11.5 Remediation Action Tracking

All remediation actions identified in the PIR shall be:

- Assigned a unique Action ID and logged in the Remediation Register (Appendix I);
- Assigned to a named owner with a target completion date;
- Reviewed for progress at the monthly Security Operations meeting;
- Reported to the Board Risk Committee on a [quarterly] basis;
- Formally closed only upon verification of completion by the CISO.

| Action ID | Finding | Recommended Action | Owner | Priority | Target Date | Status |
|---|---|---|---|---|---|---|
| [REM-001] | [Finding] | [Action Description] | [Owner] | [High/Med/Low] | [Date] | [Open/Closed] |
| [REM-002] | [Finding] | [Action Description] | [Owner] | [High/Med/Low] | [Date] | [Open/Closed] |

### 11.6 Metrics and Key Performance Indicators

The following metrics shall be tracked, reported monthly to the CISO, and reported quarterly to the Board Risk Committee:

| Metric | Target | Measurement Method |
|---|---|---|
| Mean Time to Detect (MTTD) | <[X] hours | Average across all P1–P3 incidents |
| Mean Time to Contain (MTTC) | <[X] hours | Average across all P1–P3 incidents |
| Mean Time to Recover (MTTR) | <[X] hours | Average across all P1–P3 incidents |
| 6-Hour Notification Compliance Rate | 100% | All P1 incidents requiring NACSA notification |
| PIR Completion Rate | 100% (P1/P2); [X]% (P3) | PIR reports completed within 20 business days |
| Remediation Action Closure Rate | >[X]% within target date | Actions closed on time |
| Incidents Resulting in Data Breach | Tracked for trend | Count per quarter |
| Recurrence Rate (same root cause) | <[X]% | Incidents with same root cause as prior incident |

---

## 12. Roles and Responsibilities (RACI)

*This section provides a consolidated RACI matrix for all key incident response activities. R = Responsible (does the work), A = Accountable (owns the outcome), C = Consulted (input required), I = Informed (kept up to date). Authors should validate each assignment with the relevant role-holder.*

| Activity | CISO | IRT Lead | SOC Lead | IT Ops Lead | Legal Counsel | DPO | Comms Manager | CEO | Board |
|---|---|---|---|---|---|---|---|---|---|
| **Incident Detection and Logging** | I | I | R/A | C | — | — | — | — | — |
| **Incident Classification** | A | R | C | C | — | C | — | — | — |
| **NACSA 6-Hour Notification Decision** | A/R | C | C | — | C | — | — | I | — |
| **NACSA Notification Execution** | A | R | — | — | C | — | — | — | — |
| **Sector Lead Notification** | A | R | — | — | C | — | — | — | — |
| **Short-Term Containment** | A | C | R | R | — | — | — | — | — |
| **Long-Term Containment** | A | R | C | R | — | — | — | I | — |
| **Evidence Preservation** | A | R | C | C | C | — | — | — | — |
| **Forensic Investigation** | A | R | C | C | C | — | — | — | — |
| **Legal Hold Declaration** | C | I | — | I | A/R | — | — | C | — |
| **Eradication** | A | R | C | R | — | — | — | — | — |
| **Recovery** | A | R | C | R | — | — | I | I | — |
| **Board Briefing** | R | C | — | — | C | — | — | R | A |
| **Media / Public Statement** | C | — | — | — | C | — | R | A | I |
| **Customer / Data Subject Notification** | A | C | — | — | C | R | C | I | I |
| **Post-Incident Review** | A | R | C | C | C | C | C | I | I |
| **Remediation Action Tracking** | A | R | C | C | — | — | — | I | I |
| **Policy Review and Update** | A/R | C | C | — | C | — | — | — | I |

---

## 13. Policy Compliance and Enforcement

*This section sets out the consequences of non-compliance and the monitoring mechanisms that ensure the policy is followed.*

### 13.1 Compliance Obligations

All personnel within scope of this Policy are obligated to:

- Read, understand, and comply with this Policy and all associated procedures;
- Report any suspected or known cyber security incidents without delay;
- Cooperate fully with the Incident Response Team during an incident;
- Protect the confidentiality of incident-related information;
- Preserve all potential evidence and not attempt to remediate incidents independently without IRT direction;
- Attend required incident response training as directed by the CISO.

### 13.2 Non-Compliance Consequences

Failure to comply with this Policy may result in:

| Violation Type | Potential Consequence |
|---|---|
| Failure to report a known or suspected incident | Disciplinary action, up to and including termination; regulatory liability |
| Unauthorized disclosure of incident information | Disciplinary action, up to and including termination; civil or criminal liability |
| Interference with evidence or forensic investigation | Immediate suspension; civil or criminal liability; regulatory sanction |
| Failure to meet NACSA notification obligation | Organizational offence under Act 854; regulatory penalty |
| Non-cooperation with NACSA authorized investigation | Offence under Act 854; criminal liability |

Disciplinary outcomes shall be determined in accordance with [Organization Name]'s Human Resources policies and, where applicable, applicable employment law and the Employment Act 1955.

### 13.3 Monitoring and Assurance

Compliance with this Policy shall be monitored through:

- **Monthly:** SOC operational metrics review;
- **Quarterly:** CISO review of incident register, PIR completion, and remediation action status; report to Board Risk Committee;
- **Annually:** Internal audit of incident response capability and policy compliance;
- **Ad hoc:** NACSA or external auditor assessment.

### 13.4 Policy Exceptions

Any request for an exception to this Policy shall:

- Be submitted in writing to the CISO, with justification and proposed compensating controls;
- Be reviewed and approved by the CISO and Risk Committee;
- Be documented in the Policy Exception Register (Appendix J);
- Be time-limited with a defined review date;
- Not apply to obligations mandated by law (e.g., NACSA notification requirements).

---

## 14. Review and Approval

### 14.1 Policy Review Schedule

This Policy shall be reviewed:

- **Annually** — as a scheduled review regardless of any changes;
- **Following a P1 or significant P2 incident** — to incorporate lessons learned;
- **Upon publication of new or updated NACSA guidelines, circulars, or legislative amendments** — to ensure continued compliance;
- **Upon significant changes to [Organization Name]'s NCII systems, operations, or risk environment.**

The CISO is responsible for initiating and completing the annual review. Material amendments require Board Risk Committee approval.

### 14.2 Version History

| Version | Date | Author | Description of Changes | Approved By |
|---|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release | [Approved By] |
| [1.1] | [Date] | [Author Name] | [Description of changes] | [Approved By] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] | [Approved By] |

### 14.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | ___________________________ | [Date] |
| Chief Risk Officer | [Name] | ___________________________ | [Date] |
| Chief Executive Officer | [Name] | ___________________________ | [Date] |
| Board Risk Committee Chairperson | [Name] | ___________________________ | [Date] |
| Head of Legal / General Counsel | [Name] | ___________________________ | [Date] |

---

## 15. References

*This section lists all regulatory instruments, standards, and internal documents that underpin this Policy.*

### 15.1 Legislation and Regulations

| Reference | Title | Relevance |
|---|---|---|
| **Act 854** | Cyber Security Act 2024 | Primary legislation; ss. 23, 26, 29, 30 — NCII incident notification and management obligations |
| **Act 854, s.23** | Duty to notify NACSA of cyber security incidents | Mandatory 6-hour notification obligation |
| **Act 854, s.26** | Duty to manage cyber security risks for NCII | Mandates incident response capability |
| **Act 709** | Personal Data Protection Act 2010 | Data breach reporting; protection of personal data during incidents |
| **Act 447** | Computer Crimes Act 1997 | Offences relating to unauthorized computer access; law enforcement reporting |
| **Act 588** | Digital Signature Act 1997 | Relevance to authenticated electronic evidence |
| **Evidence Act 1950** | Evidence Act 1950 (as amended) | Admissibility of electronic evidence in legal proceedings |
| **Employment Act 1955** | Employment Act 1955 | Employment consequences for non-compliant staff |
| **BNM RMiT Policy** | Risk in Technology Policy (Bank Negara Malaysia) | Technology risk management and incident reporting for financial institutions (if applicable) |

### 15.2 Standards and Frameworks

| Reference | Title | Use |
|---|---|---|
| **ISO/IEC 27035** | Information Technology — Information Security Incident Management | Primary international standard for incident response |
| **ISO/IEC 27001** | Information Security Management Systems | Overall ISMS framework |
| **NIST SP 800-61 r2** | Computer Security Incident Handling Guide | Technical guidance for incident response |
| **NACSA NCSP** | National Cyber Security Policy | National-level incident management framework |
| **MITRE ATT&CK** | ATT&CK Framework | Threat categorization and incident analysis |

### 15.3 Internal Documents

| Document ID | Document Title | Owner |
|---|---|---|
| [DOC-ID] | Information Security Policy | CISO |
| [DOC-ID] | Business Continuity Plan | BCM Manager |
| [DOC-ID] | Disaster Recovery Plan | IT Operations Lead |
| [DOC-ID] | NCII Asset Register | IT Security Manager |
| [DOC-ID] | Incident Response Procedures and Playbooks | IRT Lead |
| [DOC-ID] | Data Classification Policy | CISO / DPO |
| [DOC-ID] | Third-Party Risk Management Policy | Risk Manager |
| [DOC-ID] | Access Control Policy | CISO |

---

## 16. Appendices

### Appendix A — Incident Report Form (Initial)

*Authors should create and attach the standard incident report form here or reference the electronic form location. The form should collect all fields required for the NACSA 6-hour notification.*

**Form Reference:** [Form ID — Initial Incident Report Form]
**Location:** [Hyperlink to form in incident management system / SharePoint / physical template location]

The Initial Incident Report Form shall capture:

| Field | Description |
|---|---|
| Incident Reference Number | Unique identifier assigned by incident management system |
| Date and Time of Detection | UTC and local time |
| Date and Time of Report | When this form was completed |
| Reported By | Name, title, contact |
| Incident Description | Factual description of what occurred |
| Affected Systems | List of affected systems, including NCII designation |
| Preliminary Severity | P1–P5 |
| Incident Category | CAT-01 through CAT-10 |
| Immediate Actions Taken | Actions already taken at time of report |
| Is NACSA Notification Required? | Yes / No / Under Assessment |
| NACSA Notification Time | Timestamp of NACSA notification |
| IRT Lead Assigned | Name and contact |
| Escalated To | Names and time of escalation |

---

### Appendix B — Incident Response Playbooks Index

*Authors should attach or reference the detailed technical playbooks for each incident category. Each playbook provides step-by-step technical response procedures for a specific incident type.*

| Playbook ID | Incident Category | Document Location | Last Updated |
|---|---|---|---|
| PB-CAT01 | Unauthorized Access | [Location] | [Date] |
| PB-CAT02 | Malware / Ransomware | [Location] | [Date] |
| PB-CAT03 | Data Breach / Exfiltration | [Location] | [Date] |
| PB-CAT04 | Denial of Service (DDoS) | [Location] | [Date] |
| PB-CAT05 | Phishing / Social Engineering | [Location] | [Date] |
| PB-CAT06 | Insider Threat | [Location] | [Date] |
| PB-CAT07 | Supply Chain / Third-Party | [Location] | [Date] |
| PB-CAT08 | APT / Nation-State | [Location] | [Date] |
| PB-CAT09 | Physical / Cyber Intersection | [Location] | [Date] |
| PB-CAT10 | General / Other | [Location] | [Date] |

---

### Appendix C — NACSA Notification Template

*Authors should insert the prescribed NACSA notification form here, or — where NACSA has not yet prescribed a form — the Organization's standard notification template that satisfies Section 23 requirements.*

**[NACSA Notification Form — To be inserted or linked upon NACSA publication of prescribed form]**

In the interim, the following template shall be used for Section 23 notifications:

---

**TO:** National Cyber Security Agency (NACSA)
**FROM:** [Organization Name] — NCII Responsible Entity
**DATE:** [Date and Time of Notification]
**SUBJECT:** Cyber Security Incident Notification — [Organization Name] — [Incident Reference]

---

**1. Organization Details**

- Organization Name: [Organization Name]
- NCII Designation / Sector: [Sector]
- NACSA Registration / Reference Number (if applicable): [Reference]

**2. Incident Summary**

- Incident Reference Number: [Internal Reference]
- Date and Time Incident Detected: [Date/Time]
- Date and Time of This Notification: [Date/Time]
- Elapsed Time Since Detection: [Hours/Minutes]
- Preliminary Incident Category: [CAT-XX]
- Preliminary Severity: [P1–P4]

**3. Description of Incident**

[Brief factual description — what is known at time of notification]

**4. NCII Systems Affected**

[List of affected or potentially affected NCII systems]

**5. Current Status**

[ ] Active and ongoing
[ ] Contained
[ ] Under investigation
[ ] Eradicated
[ ] In recovery

**6. Immediate Actions Taken**

[List of actions taken to date]

**7. Preliminary Impact Assessment**

- Operational Impact: [Description]
- Data Impact: [Description — including whether personal data is involved]
- Service Availability Impact: [Description]
- Estimated Number of Affected Individuals (if applicable): [Number / Unknown]

**8. Primary Incident Contact**

- Name: [Name]
- Title: [Title]
- Email: [Email]
- Mobile: [Number] (24/7)

---

### Appendix D — Full Incident Report Template

*Authors should develop and attach the full incident report template here. This is the report submitted to NACSA within 14 days of incident closure and serves as the Organization's formal account of the incident.*

**[Full Incident Report Template — to be completed post-incident]**

Sections shall include:
1. Executive Summary
2. Incident Timeline (detailed chronology)
3. Technical Analysis (attack vector, tools, techniques, and procedures)
4. Root Cause Analysis
5. Impact Assessment (confirmed, quantified)
6. Response Actions — Phase by Phase
7. Evidence Summary
8. Regulatory Notifications (dates, recipients, content summary)
9. Lessons Learned
10. Remediation Action Plan
11. Appendices (forensic report, evidence register extracts, communication logs)

---

### Appendix E — Notification Decision Log

*This log provides an auditable record of all decisions regarding NACSA notification, including decisions not to notify and their basis. This is critical for regulatory audit purposes.*

| Log ID | Incident Reference | Date/Time of Awareness | NCII Involvement? | Notification Decision | Basis for Decision | Decision-Maker | NACSA Notified At | Notes |
|---|---|---|---|---|---|---|---|---|
| NDL-001 | [Ref] | [Date/Time] | Yes / No / Under Assessment | Notify / Do Not Notify | [Rationale] | [Name / Title] | [Date/Time] | [Notes] |

---

### Appendix F — Chain of Custody Form

*A Chain of Custody Form must be completed for every item of evidence collected during an incident investigation. This form is a legal document.*

---

**CHAIN OF CUSTODY FORM**

**Incident Reference:** ___________________
**Evidence Item ID:** ___________________
**Item Description:** ___________________
**Hash Value (MD5):** ___________________
**Hash Value (SHA-256):** ___________________
**Date and Time Collected:** ___________________
**Location of Collection:** ___________________
**Collected By (Name / Signature):** ___________________

| Transfer # | Date/Time | Released By | Released To | Organization | Reason | Signature (Releasing) | Signature (Receiving) |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |

**Current Custodian:** ___________________
**Storage Location:** ___________________

---

### Appendix G — Evidence Register

*The Evidence Register is a master log of all evidence items collected across all incidents. Maintained by the IRT Lead / Forensics Lead.*

| Evidence ID | Incident Reference | Description | Type | Collected By | Date/Time Collected | Hash Value | Storage Location | Current Custodian | Status |
|---|---|---|---|---|---|---|---|---|---|
| EV-001 | [Ref] | [Description] | [Type] | [Name] | [Date/Time] | [Hash] | [Location] | [Name] | [In custody / Transferred / Disposed] |

---

### Appendix H — Forensic Investigation Report Template

*Authors should attach the standard forensic report template here or reference the document location. The Forensics Lead is responsible for completing this report.*

**[Forensic Investigation Report Template — Reference: [Template Document ID]]**

Standard sections shall include:
1. Report Summary
2. Investigator Details and Qualifications
3. Scope of Investigation
4. Tools and Methodology Used
5. Findings (technical)
6. Indicators of Compromise (IoCs)
7. Attribution Assessment (if applicable)
8. Evidence Integrity Verification
9. Conclusions
10. Appendices (raw evidence extracts, tool outputs)

---

### Appendix I — Remediation Action Register

*This register tracks all remediation actions arising from Post-Incident Reviews. Maintained by the IRT Lead. Reported to the Board Risk Committee quarterly.*

| Action ID | Source (Incident/PIR Reference) | Finding | Recommended Action | Owner | Priority | Target Completion Date | Actual Completion Date | Status | Verified By |
|---|---|---|---|---|---|---|---|---|---|
| REM-001 | [PIR Ref] | [Finding] | [Action] | [Name] | High | [Date] | [Date] | Open / Closed | [Name] |

---

### Appendix J — Policy Exception Register

*All approved exceptions to this Policy must be documented here.*

| Exception ID | Date Requested | Requested By | Section Affected | Justification | Compensating Controls | Approved By | Expiry Date | Status |
|---|---|---|---|---|---|---|---|---|
| EXC-001 | [Date] | [Name / Dept] | [Policy Section] | [Justification] | [Controls] | [CISO / Risk Committee] | [Date] | Active / Expired |

---

### Appendix K — Incident Response Contact Directory

*The contact directory must be kept current. Reviewed quarterly by the IRT Lead. Print a copy and store in the secure incident response kit.*

**[CLASSIFICATION: CONFIDENTIAL — RESTRICTED DISTRIBUTION]**

| Role | Name | Organization | Primary Phone | Secondary Phone | Email | Available |
|---|---|---|---|---|---|---|
| CISO | [Name] | [Org] | [Number] | [Number] | [Email] | 24/7 |
| IRT Lead | [Name] | [Org] | [Number] | [Number] | [Email] | 24/7 |
| SOC Lead | [Name / Service] | [Org] | [Number] | [Number] | [Email] | 24/7 |
| Legal Counsel | [Name] | [Org/Firm] | [Number] | [Number] | [Email] | On-call |
| DPO | [Name] | [Org] | [Number] | [Number] | [Email] | Business hours / on-call for P1 |
| NACSA Cyber999 | — | NACSA | 1-300-88-2999 | — | cyber999@cybersecurity.my | 24/7 |
| Sector Lead (BNM) | [Name / Team] | BNM | [Number] | [Number] | [Email] | [Availability] |
| CyberSecurity Malaysia | — | CSM | [Number] | — | [Email] | 24/7 |
| External IR Firm | [Firm Name] | [Firm] | [Number] | [Number] | [Email] | 24/7 (per retainer) |
| External Forensics Firm | [Firm Name] | [Firm] | [Number] | [Number] | [Email] | 24/7 (per retainer) |
| Cyber Insurance Broker | [Firm Name] | [Firm] | [Number] | [Number] | [Email] | Business hours / on-call |

---

### Appendix L — Training and Awareness Requirements

*Authors should document the minimum training requirements for all IRT members and relevant staff.*

| Role | Minimum Training Requirements | Frequency | Evidence Required |
|---|---|---|---|
| All Staff | Cyber security awareness training, including incident reporting obligations | Annual | Training completion record |
| IRT Members | Incident response fundamentals; Act 854 obligations; evidence handling | Annual | Certification / attendance record |
| SOC Analysts | Technical incident triage; SIEM operation; forensic basics | Annual + on-the-job | Certification / skills assessment |
| IRT Lead | IR management; tabletop exercise facilitation; NACSA reporting | Annual | Certification / exercise record |
| CISO | Board-level reporting; regulatory liaison; strategic IR governance | Annual | CPD record |
| Legal Counsel | Cyber law; Act 854; evidence law; PDPA | Annual | CPD record |
| Forensics Lead | Digital forensics certification (e.g., GCFE, GCFA, CHFI) | Per certification cycle | Certification copy |

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. Ensure you are reading the current version as published in [Organization Name]'s document management system at [Document Repository Location]. Printed copies are uncontrolled. For queries regarding this Policy, contact the CISO at [CISO contact details].