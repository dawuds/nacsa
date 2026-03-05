# Business Continuity Invocation Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Business Continuity Manager |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 6 months from Last Review Date] |
| **Approved By** | [Approved By — Name and Title] |
| **Organisation** | [Organisation Name] |

---

> **RESTRICTED DOCUMENT**
> This document is classified **Confidential** and is intended solely for authorised personnel of [Organisation Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute an offence under the Cyber Security Act 2024 (Act 854) and the Personal Data Protection Act 2010.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Framework](#3-regulatory-and-policy-framework)
4. [Invocation Criteria and Authority](#4-invocation-criteria-and-authority)
5. [Communication Tree](#5-communication-tree)
6. [Alternate Site Activation](#6-alternate-site-activation)
7. [System Recovery Prioritisation](#7-system-recovery-prioritisation)
8. [Staff Mobilisation](#8-staff-mobilisation)
9. [Return to Normal Operations](#9-return-to-normal-operations)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Testing and Exercising](#11-testing-and-exercising)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Business Continuity Invocation Procedure (BCIP) establishes the formal process by which [Organisation Name] activates its Business Continuity Plan (BCP) in response to a major cyber security incident, disaster, or significant disruption affecting National Critical Information Infrastructure (NCII) systems and services.

This procedure ensures that [Organisation Name] can sustain the delivery of critical services and meet its obligations as a **NCII Sector Lead** or **NCII Entity** under the **Cyber Security Act 2024 (Act 854)**, in particular the duties prescribed under **Section 18** (duty to comply with cyber security measures and codes of practice) and **Section 23** (duty to report cyber security incidents and cooperate with the National Cyber Security Agency, NACSA).

This document provides clear, actionable guidance to authorised personnel on when and how to invoke the BCP, ensuring a structured, coordinated, and auditable response.

### 1.2 Scope

This procedure applies to:

- All NCII systems, applications, and services owned, operated, or managed by [Organisation Name] as designated under Act 854.
- All primary and alternate processing sites, data centres, and cloud environments supporting NCII operations.
- All personnel — including employees, contractors, third-party vendors, and managed service providers — who perform roles within the BCP or incident response function.
- All business units and support functions whose operations are dependent on NCII systems as defined in the [Organisation Name] Asset Register.

This procedure is invoked concurrently with or following activation of the [Organisation Name] Cyber Security Incident Response Plan (CSIRP) and operates in alignment with the [Organisation Name] Disaster Recovery Plan (DRP).

### 1.3 Out of Scope

The following are outside the scope of this procedure:

- Minor incidents manageable within normal operational recovery procedures without formal BCP invocation.
- Physical security incidents that do not affect the availability or integrity of NCII systems.
- Routine planned maintenance and scheduled outages managed under Change Management procedures.

---

## 2. Definitions and Abbreviations

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Business Continuity Plan (BCP)** | A documented set of procedures and information developed, compiled, and maintained for use in the event of a disruption to ensure continuity of critical operations. |
| **BCP Invocation** | The formal act of activating the BCP in response to a declared incident or disaster, initiating all associated recovery procedures. |
| **Crisis Management Team (CMT)** | The senior leadership group responsible for strategic decision-making during a major incident or disaster. |
| **Business Continuity Team (BCT)** | The operational team responsible for executing the BCP under the direction of the BC Manager. |
| **Cyber Security Incident** | An event or series of events that compromises, or has the potential to compromise, the confidentiality, integrity, or availability of an NCII system or data as defined under Act 854. |
| **Disaster Recovery (DR)** | The process of restoring IT systems, applications, and data to a functional state following a major disruption. |
| **Maximum Tolerable Downtime (MTD)** | The maximum time a critical business function can be disrupted before the organisation suffers irreversible harm. |
| **Recovery Time Objective (RTO)** | The target duration within which a system or business process must be restored after an incident. |
| **Recovery Point Objective (RPO)** | The maximum acceptable amount of data loss measured in time, representing the point to which data must be restored. |
| **Alternate Site** | A pre-designated facility used to continue critical operations when the primary site is unavailable. |
| **NCII** | National Critical Information Infrastructure, as designated by the Minister pursuant to the Cyber Security Act 2024. |
| **NACSA** | National Cyber Security Agency, the competent authority under Act 854. |

### 2.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| Act 854 | Cyber Security Act 2024 |
| BC Manager | Business Continuity Manager |
| BCT | Business Continuity Team |
| BCP | Business Continuity Plan |
| BCIP | Business Continuity Invocation Procedure |
| CMT | Crisis Management Team |
| CISO | Chief Information Security Officer |
| CMO | Chief Management Officer / Communications Officer |
| CSIRP | Cyber Security Incident Response Plan |
| DRP | Disaster Recovery Plan |
| MTD | Maximum Tolerable Downtime |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |

---

## 3. Regulatory and Policy Framework

### 3.1 Regulatory Basis

This procedure is mandated by and shall be interpreted in accordance with the following legislation and regulatory instruments:

| Instrument | Relevant Provision | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Duty of NCII entity to comply with cyber security measures, codes of practice, and standards issued by NACSA, including maintaining a BCP. |
| Cyber Security Act 2024 (Act 854) | Section 23 | Duty to report cyber security incidents to NACSA within prescribed timeframes and to cooperate fully during recovery operations. |
| NACSA Code of Practice for NCII | [Relevant Section] | Requirements for business continuity planning, testing, and invocation for NCII entities. |
| Bank Negara Malaysia RMiT Policy | 10.102–10.110 | Technology and cyber risk management requirements applicable to licensed financial institutions (if applicable). |
| Personal Data Protection Act 2010 (PDPA) | Section 9, 11 | Data security and breach notification obligations relevant during incident recovery. |

### 3.2 Internal Policy Hierarchy

This procedure supports and must be read in conjunction with:

- [Organisation Name] Business Continuity Policy
- [Organisation Name] Cyber Security Incident Response Plan (CSIRP)
- [Organisation Name] Disaster Recovery Plan (DRP)
- [Organisation Name] NCII Asset Register and Risk Register
- [Organisation Name] Crisis Communications Policy

In the event of a conflict between this procedure and any internal policy, the more stringent requirement shall prevail. Conflicts shall be escalated to the BC Manager and CISO for resolution.

---

## 4. Invocation Criteria and Authority

*This section defines the specific conditions that trigger BCP invocation and the chain of authority required to formally activate the plan. Authors should tailor the thresholds to reflect the organisation's risk appetite, critical function MTDs, and NCII designation obligations under Act 854.*

### 4.1 Invocation Triggers

BCP invocation shall be considered when one or more of the following conditions are met:

#### 4.1.1 Cyber Security Incident Triggers

| Trigger Condition | Severity Level | Automatic Escalation To |
|---|---|---|
| Ransomware or destructive malware affecting one or more NCII systems | Critical | BC Manager, CISO, CMT |
| Confirmed breach of NCII system data with material operational impact | Critical | BC Manager, CISO, CMT |
| Denial-of-Service (DoS/DDoS) attack causing sustained service unavailability exceeding [X] hours | High | BC Manager, CISO |
| Unauthorised access to NCII core infrastructure with confirmed lateral movement | Critical | BC Manager, CISO, CMT |
| Compromise of privileged credentials affecting NCII system integrity | High | BC Manager, CISO |
| Supply chain cyber attack impacting critical third-party systems | High–Critical | BC Manager, CISO, CMT |

#### 4.1.2 Operational / Disaster Triggers

| Trigger Condition | Severity Level | Automatic Escalation To |
|---|---|---|
| Primary data centre loss or unavailability exceeding RTO threshold | Critical | BC Manager, CMT |
| Loss of access to primary site due to physical event (fire, flood, civil unrest) | Critical | BC Manager, CMT |
| Critical third-party or telecommunications failure affecting NCII services | High | BC Manager, CISO |
| Power failure at primary site exceeding [X] hours despite UPS/generator | High | BC Manager |

#### 4.1.3 Regulatory or Legal Triggers

- Direction from NACSA to invoke continuity measures under Act 854 Section 23.
- Court order, regulatory directive, or direction from a competent authority requiring service suspension or data preservation.

### 4.2 Invocation Thresholds — Operational Impact Matrix

*Authors should populate this matrix based on the organisation's critical function MTDs and business impact assessments.*

| Impact Dimension | Green (Monitor) | Amber (Standby) | Red (Invoke BCP) |
|---|---|---|---|
| Service availability | >99% | 95–99% | <95% or sustained outage >MTD |
| Systems affected | Non-critical | Tier 2 (important) | Tier 1 (NCII-critical) |
| Data integrity | Confirmed intact | Under investigation | Confirmed compromise |
| Estimated recovery time | Within RTO | Approaching RTO | Exceeds RTO |
| Regulatory notification | Not required | Prepare notification | Notify NACSA ≤ 6 hours |
| Customer/public impact | Minimal | Moderate | Significant or national |

### 4.3 Declaration of BCP Invocation

The following authority levels are established for declaring BCP invocation:

| Scenario | Primary Authority | Secondary Authority (if unavailable) |
|---|---|---|
| Cyber security incident (Critical) | BC Manager + CISO (joint) | CEO or designated alternate |
| Cyber security incident (High) | BC Manager with CISO concurrence | COO |
| Operational disaster | BC Manager | COO |
| NACSA-directed activation | CEO or Board-delegated officer | COO |

**Formal invocation declaration process:**

1. The declaring authority completes the **BCP Invocation Declaration Form** (Appendix A).
2. The declaration is communicated to all BCT members within **[X] minutes** of decision.
3. The declaration timestamp is recorded in the **Incident Log** (Appendix B) as the official invocation time T₀.
4. The BC Manager notifies the CMT Chair and initiates the Communication Tree (Section 5).
5. NACSA notification is initiated in parallel per Section 5.4 and Act 854 Section 23.

### 4.4 Invocation Levels

Three levels of BCP invocation are defined to enable proportional response:

| Level | Name | Description | Activation Scope |
|---|---|---|---|
| Level 1 | **Standby Alert** | Potential major incident; BCP activation likely. Teams are placed on standby. | BCT notified; alternate site staff on standby; monitoring heightened |
| Level 2 | **Partial Invocation** | Specific critical functions or systems are affected. Partial activation of DR and alternate site. | Selected BCT workstreams activated; DR initiated for affected systems |
| Level 3 | **Full Invocation** | Organisation-wide disruption. Complete BCP activation across all critical functions. | All BCT workstreams, alternate site, and external stakeholders activated |

---

## 5. Communication Tree

*This section defines the structured notification sequence to be followed immediately upon BCP invocation. Authors should populate all contact details using the separate, controlled Contact Directory (Appendix C), which is maintained by the BC Manager and updated quarterly.*

### 5.1 Communication Principles

- All BCP communications shall use **pre-approved messaging templates** (Appendix D) to ensure accuracy and regulatory compliance.
- Communications shall be documented in the **Incident Log** (Appendix B) with timestamp, sender, recipient, channel, and content summary.
- Where primary communication channels (email, corporate telephony) are unavailable, **out-of-band channels** defined in Section 5.3 shall be used.
- No public statements shall be issued without approval from [Communications Lead / CMO].

### 5.2 Internal Notification Sequence

The following sequence shall be initiated at T₀ (invocation declaration) and completed within the target timeframes stated:

```
T₀ — BCP INVOCATION DECLARED
│
├── T₀ + 15 min — BC Manager notifies:
│   ├── CISO
│   ├── CMT Chair (CEO/COO)
│   └── BCT Leads (all workstreams)
│
├── T₀ + 30 min — BCT Leads notify:
│   ├── IT / Disaster Recovery Team Lead
│   ├── Operations Team Lead
│   ├── HR / Staff Mobilisation Lead
│   └── Facilities / Alternate Site Lead
│
├── T₀ + 45 min — CMT convenes (virtual or in-person):
│   ├── First situation report delivered by BC Manager
│   └── Strategic decisions documented
│
├── T₀ + 60 min — Staff notification (all affected personnel):
│   ├── Notification via [SMS / corporate messaging / call cascade]
│   └── Reporting instructions issued
│
└── T₀ + ongoing — Periodic situation reports every [X] hours
```

### 5.3 Internal Communication Contact Matrix

| Role | Name | Primary Contact | Secondary Contact | Out-of-Band Contact |
|---|---|---|---|---|
| BC Manager | [Name] | [Mobile] | [Office] | [Personal email / Signal] |
| CISO | [Name] | [Mobile] | [Office] | [Personal email / Signal] |
| CEO | [Name] | [Mobile] | [Office] | [Personal email] |
| COO | [Name] | [Mobile] | [Office] | [Personal email] |
| IT / DR Team Lead | [Name] | [Mobile] | [Office] | [Personal email] |
| HR Lead | [Name] | [Mobile] | [Office] | [Personal email] |
| Facilities Lead | [Name] | [Mobile] | [Office] | [Personal email] |
| Communications Lead | [Name] | [Mobile] | [Office] | [Personal email] |
| Legal Counsel | [Name] | [Mobile] | [Office] | [Personal email] |

*Full contact directory including alternates is maintained in Appendix C (access-controlled).*

### 5.4 Regulatory and External Notification

Regulatory notifications are mandatory and subject to statutory timeframes. Non-compliance may constitute an offence under Act 854.

| Stakeholder | Notification Trigger | Timeframe from T₀ | Responsible Party | Method | Template |
|---|---|---|---|---|---|
| **NACSA** | Cyber security incident affecting NCII system | **≤ 6 hours** (initial); 24 hours (full report) | CISO / BC Manager | NACSA Incident Reporting Portal / official email | Appendix D-1 |
| **Bank Negara Malaysia** (if applicable) | Material cyber incident per RMiT | As prescribed by BNM | CISO / Chief Risk Officer | BNM Secure Portal | Appendix D-2 |
| **PDPA Commissioner** | Personal data breach | **72 hours** | Data Protection Officer | Written notification | Appendix D-3 |
| **Board of Directors** | Level 2 or Level 3 invocation | ≤ 2 hours | CEO | Board notification memo | Appendix D-4 |
| **Key Clients / Counterparties** | Material service disruption | As per SLA obligations | Communications Lead | Pre-approved client notice | Appendix D-5 |
| **Third-Party Vendors** | Activation of DR/alternate site arrangements | T₀ + 1 hour | IT / DR Team Lead | Vendor contact per SLA | Appendix D-6 |
| **Insurance Provider** | Major loss event | ≤ 24 hours | CFO / Risk Officer | Insurer notification form | Appendix D-7 |
| **Media / Public** | ONLY with CMT and Legal approval | As approved | Communications Lead | Pre-approved statement | Appendix D-8 |

### 5.5 Situation Reporting Cadence

During active BCP invocation, the BC Manager shall issue structured Situation Reports (SITREPs) to the CMT and relevant stakeholders:

| Period | Frequency | Format | Audience |
|---|---|---|---|
| First 12 hours | Every 2 hours | SITREP (Appendix E) | CMT, BCT, Regulators (NACSA) |
| 12–48 hours | Every 4 hours | SITREP | CMT, BCT |
| 48 hours onward | Daily | Consolidated report | CMT, Board |

---

## 6. Alternate Site Activation

*This section defines the procedures for activating [Organisation Name]'s alternate processing site(s) when the primary site is unavailable. Authors should confirm all site specifications, access procedures, and technical configurations with the Facilities and IT teams prior to finalising this section.*

### 6.1 Alternate Site Configuration

| Parameter | Primary Site | Alternate Site | Notes |
|---|---|---|---|
| **Site Name** | [Primary Site Name] | [Alternate Site Name] | |
| **Address** | [Primary Site Address] | [Alternate Site Address] | |
| **Site Type** | Production | [Warm / Hot / Cold] Standby | |
| **Capacity** | [X] staff, [Y] workstations | [X] staff, [Y] workstations | |
| **Connectivity** | [ISP / Circuit details] | [ISP / Circuit details] | Independent of primary |
| **Power** | [UPS / Generator specs] | [UPS / Generator specs] | |
| **Site Contact** | [Name / Number] | [Name / Number] | 24/7 contact |
| **Access Method** | [Keycard / Biometric] | [Keycard / Code: see Appendix F] | |
| **DR Data Centre** | [DC Name / Location] | [DR DC Name / Location] | |
| **Cloud DR Region** | [Primary Region] | [DR Region] | [Cloud Provider] |

### 6.2 Alternate Site Activation Sequence

The following steps shall be executed by the Facilities Lead and IT / DR Team Lead in parallel:

#### Step 1 — Site Readiness Verification (Target: T₀ + 1 hour)

- [ ] Contact alternate site facility manager at [Contact Number].
- [ ] Confirm site power, HVAC, and physical access systems are operational.
- [ ] Verify workstation availability and readiness.
- [ ] Confirm network connectivity is live and segregated from primary site.
- [ ] Validate availability of emergency supplies and consumables.

#### Step 2 — Technology Infrastructure Activation (Target: T₀ + 2 hours)

- [ ] Initiate DR failover for Tier 1 systems per Section 7.
- [ ] Activate secondary network links and VPN tunnels.
- [ ] Confirm DNS failover or traffic redirection is in effect.
- [ ] Verify remote desktop / virtual desktop infrastructure (VDI) access for staff.
- [ ] Confirm data replication status and RPO compliance for all critical systems.
- [ ] Test core business applications at alternate site.

#### Step 3 — Staff Deployment to Alternate Site (Target: T₀ + 3 hours)

- [ ] Notify designated alternate site staff per Section 8 (Staff Mobilisation).
- [ ] Issue alternate site access credentials per Appendix F.
- [ ] Establish team briefing at alternate site.

#### Step 4 — Operational Handover

- [ ] BC Manager confirms alternate site operational status to CMT.
- [ ] Record operational handover time in Incident Log (Appendix B).
- [ ] Issue SITREP confirming alternate site activation.

### 6.3 Critical Technology Dependencies at Alternate Site

*Authors should populate this table based on the DR architecture and tested configurations.*

| System / Application | DR Tier | Activation Method | Target RTO | Responsible Team |
|---|---|---|---|---|
| [Core Banking / Core System] | Tier 1 | Automated failover | [X] hours | IT / DR Team |
| [Payment Gateway] | Tier 1 | Automated failover | [X] hours | IT / DR Team |
| [Identity & Access Management] | Tier 1 | Manual failover | [X] hours | IT / DR Team |
| [Email / Communications Platform] | Tier 2 | Manual switch | [X] hours | IT / DR Team |
| [Document Management] | Tier 2 | Manual restoration | [X] hours | IT / DR Team |
| [Reporting / Analytics] | Tier 3 | Deferred restoration | [X] hours | IT / DR Team |

### 6.4 Third-Party and Cloud Services

| Service Provider | Service | Contact (Incident) | SLA / RTO | DR Arrangement |
|---|---|---|---|---|
| [Cloud Provider] | [Service Name] | [24/7 Hotline] | [X] hours | [Active-Active / Active-Passive] |
| [Telecom Provider] | [Circuit / MPLS] | [NOC Hotline] | [X] hours | [Failover circuit / backup SIM] |
| [Managed Security Provider] | SIEM / SOC | [SOC Hotline] | [X] hours | [On-call support] |
| [Core System Vendor] | [System Name] | [Support Hotline] | [X] hours | [Emergency support SLA] |

---

## 7. System Recovery Prioritisation

*This section defines the priority sequence for restoring NCII systems and critical business functions. Recovery priorities shall be derived from the organisation's Business Impact Analysis (BIA) and must be reviewed whenever the BIA is updated. Tier 1 systems must be recovered within the organisation's MTD.*

### 7.1 Recovery Prioritisation Principles

Recovery shall be sequenced based on:

1. **Regulatory criticality** — Systems designated as NCII under Act 854 take absolute priority.
2. **Business impact** — Assessed by revenue loss, customer impact, and legal/regulatory exposure.
3. **Technical dependency** — Infrastructure and foundational services are recovered before dependent applications.
4. **RTO / MTD obligations** — Systems with the shortest MTD are recovered first.

### 7.2 System Recovery Priority Matrix

| Priority Tier | Category | Rationale | Target RTO | Target RPO |
|---|---|---|---|---|
| **Tier 1 — Critical (Immediate)** | NCII-designated systems, core transaction processing, identity management | Zero tolerance for extended outage; direct regulatory obligation | [X] hours | [X] hours |
| **Tier 2 — Important (Urgent)** | Customer-facing services, internal communications, HR systems | Significant customer and operational impact; supports Tier 1 recovery | [X] hours | [X] hours |
| **Tier 3 — Normal (Deferred)** | Reporting, analytics, non-critical internal tools | Manageable impact; can be deferred pending Tier 1/2 restoration | [X] hours | [X] hours |

### 7.3 Tier 1 — Critical System Recovery Sequence

*Authors should list all NCII-designated and mission-critical systems in the order they must be recovered. Each system should have a corresponding DRP runbook referenced.*

| Recovery Order | System / Application | Owner | RTO | RPO | DR Runbook Reference |
|---|---|---|---|---|---|
| 1 | [Network Infrastructure / Firewall] | IT Infrastructure | [X] hrs | N/A | DRP-RB-001 |
| 2 | [Directory Services / IAM] | IT Security | [X] hrs | [X] hrs | DRP-RB-002 |
| 3 | [Core NCII System — e.g., Core Banking] | IT Applications | [X] hrs | [X] hrs | DRP-RB-003 |
| 4 | [Payment Processing System] | IT Applications | [X] hrs | [X] hrs | DRP-RB-004 |
| 5 | [Data Security / DLP Platform] | IT Security | [X] hrs | [X] hrs | DRP-RB-005 |
| 6 | [SIEM / Security Monitoring] | IT Security | [X] hrs | [X] hrs | DRP-RB-006 |

### 7.4 Tier 2 — Important System Recovery Sequence

| Recovery Order | System / Application | Owner | RTO | RPO | DR Runbook Reference |
|---|---|---|---|---|---|
| 1 | [Email Platform] | IT Infrastructure | [X] hrs | [X] hrs | DRP-RB-010 |
| 2 | [Customer Portal / Web Services] | IT Applications | [X] hrs | [X] hrs | DRP-RB-011 |
| 3 | [HR Information System] | HR / IT | [X] hrs | [X] hrs | DRP-RB-012 |
| 4 | [Financial Management System] | Finance / IT | [X] hrs | [X] hrs | DRP-RB-013 |

### 7.5 Tier 3 — Deferred System Recovery

| System / Application | Owner | Target Restoration | Notes |
|---|---|---|---|
| [Business Intelligence / Reporting] | IT Applications | [X] hrs | Deferred until Tier 1/2 stable |
| [Archival / Document Management] | Operations | [X] hrs | Read-only access acceptable |
| [Non-Critical Internal Tools] | Various | [X] hrs | Manual workarounds in place |

### 7.6 Manual Workaround Procedures

For systems that cannot be recovered within their MTD, the following manual workaround procedures shall be invoked:

| Function | Affected System | Manual Workaround | Duration Sustainable | Workaround Document |
|---|---|---|---|---|
| [Transaction Processing] | [Core System] | [Manual authorisation via pre-printed forms / offline process] | [X] hours | MWP-001 |
| [Customer Enquiries] | [CRM / Portal] | [Call centre with read access to last backup] | [X] hours | MWP-002 |
| [Regulatory Reporting] | [Reporting System] | [Manual compilation from raw data / spreadsheet templates] | [X] hours | MWP-003 |

---

## 8. Staff Mobilisation

*This section defines how personnel are notified, deployed, and managed during BCP invocation. All staff contact details and personal emergency contacts are maintained separately in Appendix C (access-controlled) and must not be included inline in this document.*

### 8.1 Staff Mobilisation Principles

- Staff mobilisation shall commence immediately following BCP invocation declaration.
- The **HR Lead** is responsible for coordinating staff mobilisation under direction of the BC Manager.
- Staff welfare, personal safety, and reasonable accommodation are prioritised alongside operational recovery.
- Out-of-hours mobilisation shall comply with [Organisation Name]'s employment obligations and applicable labour law.

### 8.2 Staff Categorisation

All staff are pre-assigned to one of the following categories based on their BCP role:

| Category | Definition | Mobilisation Priority | Expected Deployment Time |
|---|---|---|---|
| **Category A — Critical BCP Staff** | Staff with essential roles in BCP/DR execution that cannot be deferred | Immediate (T₀ + 1 hour) | Alternate site or remote within [X] hours |
| **Category B — Essential Operational Staff** | Staff required to sustain critical business functions during recovery | Urgent (T₀ + 2–4 hours) | Alternate site or remote |
| **Category C — Support Staff** | Staff whose roles support Category A/B or who manage manual workarounds | As required | Directed by BC Manager or HR Lead |
| **Category D — Deferred Staff** | Staff whose functions are suspended or deferred during the incident | Standby | Home standby; notified by HR Lead |

### 8.3 Staff Mobilisation Procedure

**Step 1 — Initial Notification (T₀ + 30 minutes)**

- HR Lead activates the **Call Cascade** using the Contact Directory (Appendix C).
- Category A staff are notified first via primary contact method.
- All notifications are logged in the Incident Log (Appendix B).

**Step 2 — Deployment Instructions (T₀ + 1 hour)**

- Category A staff receive deployment instructions specifying:
  - Reporting location (primary, alternate, or remote).
  - Reporting time.
  - Any special equipment or access credentials to bring.
  - Initial briefing schedule.

**Step 3 — Staff Briefing (T₀ + 2 hours)**

- BC Manager or designated BCT Lead conducts initial staff briefing covering:
  - Nature and severity of the incident (on a need-to-know basis).
  - Activated recovery procedures and immediate priorities.
  - Communication protocols and escalation paths.
  - Welfare provisions (meals, transport, accommodation if applicable).

**Step 4 — Ongoing Management**

- Shift patterns shall be established if the incident extends beyond [X] hours.
- HR Lead shall monitor staff welfare and flag concerns to BC Manager.
- Fatigue management protocols shall apply after [X] consecutive hours on duty.

### 8.4 Staff Welfare Provisions

During extended BCP invocation, the following welfare provisions shall be arranged by the HR Lead:

| Provision | Responsibility | Trigger |
|---|---|---|
| Meals / refreshments at alternate site | Facilities Lead / HR Lead | Activation exceeds [X] hours |
| Transportation assistance | HR Lead | Staff unable to self-transport to alternate site |
| Accommodation (if required) | HR Lead | Activation exceeds [X] hours or curfew / travel advisory |
| Family communication support | HR Lead | Extended deployment; staff with dependant care obligations |
| Mental health / EAP referral | HR Lead | Post-incident, or on request during incident |
| Personal protective equipment | Facilities Lead | Physical hazard at site |

### 8.5 Key Personnel Alternates

*Authors should ensure all critical BCP roles have at least two trained alternates.*

| BCP Role | Primary | First Alternate | Second Alternate |
|---|---|---|---|
| BC Manager | [Name] | [Name] | [Name] |
| CISO | [Name] | [Name] | [Name] |
| IT / DR Team Lead | [Name] | [Name] | [Name] |
| HR Lead | [Name] | [Name] | [Name] |
| Facilities Lead | [Name] | [Name] | [Name] |
| Communications Lead | [Name] | [Name] | [Name] |
| [Function Lead — e.g., Finance] | [Name] | [Name] | [Name] |

---

## 9. Return to Normal Operations

*This section governs the process for safely transitioning from BCP-invoked alternate operations back to normal operations at the primary site. Authors should ensure that each step in this section has been validated during BCP testing exercises.*

### 9.1 Criteria for Return to Normal Operations

Return to normal operations (RTNO) shall only be initiated when **all** of the following criteria are met:

| Criterion | Verification Method | Verified By |
|---|---|---|
| Primary site is physically safe and accessible | Facilities inspection report | Facilities Lead |
| Primary NCII systems are fully restored, tested, and certified secure | System health check and security assessment | IT / DR Team Lead + CISO |
| Cyber security threat has been fully contained and eradicated | CISO/SOC forensic confirmation | CISO |
| Data integrity of all Tier 1 and Tier 2 systems is confirmed | Data integrity validation report | IT / DR Team Lead |
| Regulatory obligations (NACSA notification, BNM, etc.) have been fulfilled | Compliance confirmation | CISO / Compliance Officer |
| CMT has formally approved RTNO | CMT meeting resolution | CMT Chair |

### 9.2 RTNO Decision Authority

| Scenario | RTNO Decision Authority |
|---|---|
| Full invocation (Level 3) | CMT formal resolution with BC Manager recommendation |
| Partial invocation (Level 2) | BC Manager with CISO concurrence |
| Standby alert (Level 1) | BC Manager |

### 9.3 Return to Normal Operations Procedure

#### Phase 1 — Pre-Return Assessment (48 hours prior to planned RTNO)

- [ ] IT / DR Team Lead submits **System Restoration Report** confirming Tier 1/2 system readiness at primary site.
- [ ] CISO submits **Security Clearance Report** confirming threat eradication and enhanced monitoring is in place.
- [ ] Facilities Lead confirms primary site physical readiness.
- [ ] BC Manager prepares **RTNO Recommendation** for CMT approval.
- [ ] Data migration plan prepared if data created at alternate site must be synchronised to primary.

#### Phase 2 — CMT Approval

- [ ] CMT reviews BC Manager's RTNO Recommendation.
- [ ] CMT formally approves RTNO and records decision in CMT minutes.
- [ ] Target RTNO date/time is communicated to all BCT leads.

#### Phase 3 — Staff and Operational Transition

- [ ] HR Lead notifies all staff of RTNO plan and reporting arrangements.
- [ ] Staggered return to primary site is scheduled to avoid congestion.
- [ ] Category A staff return first to validate primary site operations.
- [ ] Manual workaround procedures are formally stood down as systems are confirmed operational.

#### Phase 4 — Technology Failback

*Failback sequence is the reverse of the failover sequence in Section 7. Full failback runbooks are maintained in the DRP.*

| Step | Action | Responsible | Target Completion |
|---|---|---|---|
| 1 | Synchronise data from alternate site to primary | IT / DR Team | T-[X] hours before RTNO |
| 2 | Validate data integrity post-synchronisation | IT / DR Team | T-[X] hours |
| 3 | Redirect DNS / traffic to primary site | IT Infrastructure | T-[X] hours |
| 4 | Stand down alternate site systems (graceful shutdown) | IT / DR Team | T₀ RTNO |
| 5 | Confirm primary site monitoring is restored | IT Security / SOC | T₀ RTNO |

#### Phase 5 — Formal Stand-Down

- [ ] BC Manager declares RTNO and records stand-down time in Incident Log.
- [ ] All BCT members are formally stood down.
- [ ] BC Manager notifies NACSA and other regulators of service restoration per Act 854 Section 23.
- [ ] Post-incident review scheduled within [X] business days (see Section 9.4).

### 9.4 Post-Incident Review

A formal Post-Incident Review (PIR) shall be conducted within **[10–15] business days** of RTNO. The PIR shall:

- Document a full chronological timeline of the incident and response.
- Assess BCP effectiveness and identify gaps or failures.
- Review regulatory compliance and completeness of all notifications.
- Produce a **Lessons Learned Report** with corrective actions, owners, and deadlines.
- Update this BCIP, the BCP, and the DRP as required.
- Be presented to the Board Risk Committee or equivalent governance body.

The Lessons Learned Report template is provided at Appendix G.

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | BC Manager | CISO | CMT (CEO/COO) | IT / DR Team Lead | HR Lead | Facilities Lead | Communications Lead | Legal / Compliance |
|---|---|---|---|---|---|---|---|---|
| Identify and assess incident | R | R | I | C | I | I | I | I |
| Declare BCP invocation | A | C | A | I | I | I | I | C |
| Activate communication tree | R | C | I | I | I | I | C | I |
| Notify NACSA (Act 854 s23) | A | R | I | I | I | I | I | C |
| Notify BNM / regulators | C | R | A | I | I | I | I | R |
| Activate alternate site | R | C | I | R | I | R | I | I |
| Execute system failover | C | C | I | R | I | I | I | I |
| Mobilise staff | R | I | A | I | R | I | I | I |
| Manage staff welfare | C | I | I | I | R | R | I | I |
| Issue external communications | C | C | A | I | I | I | R | C |
| Issue SITREPs | R | C | I | C | I | I | C | I |
| Monitor recovery progress | R | C | A | R | I | I | I | I |
| Approve return to normal operations | R | C | A | C | I | C | I | C |
| Execute failback | C | C | I | R | I | I | I | I |
| Conduct Post-Incident Review | R | C | A | C | C | I | I | C |
| Update BCP/BCIP documentation | R | C | A | C | I | I | I | C |

### 10.2 Role Descriptions

| Role | Description |
|---|---|
| **BC Manager** | Overall accountability for BCP invocation, execution, and stand-down. Single point of coordination for all BCT workstreams. |
| **CISO** | Accountable for cyber security response, threat containment, NACSA notifications, and security clearance for RTNO. |
| **CMT (CEO / COO)** | Strategic decision-making authority. Approves full invocation, RTNO, and Board / external communications. |
| **IT / DR Team Lead** | Responsible for technical execution of failover, system recovery, data synchronisation, and failback. |
| **HR Lead** | Responsible for staff notification, mobilisation, welfare, and Category management. |
| **Facilities Lead** | Responsible for alternate site readiness, access management, and physical logistics. |
| **Communications Lead** | Responsible for all approved internal and external communications, media management, and stakeholder messaging. |
| **Legal / Compliance** | Advises on regulatory obligations, reviews external notifications, and confirms fulfilment of statutory duties. |

---

## 11. Testing and Exercising

### 11.1 Testing Requirements

This BCIP shall be tested at least **semi-annually** in accordance with [Organisation Name]'s BCP Testing Programme and NACSA guidance under Act 854. Testing shall include at least one **full invocation simulation** per year.

| Test Type | Frequency | Scope | Participants |
|---|---|---|---|
| **Tabletop Exercise** | Semi-annual | Walk-through of invocation procedure; decision-making scenarios | BC Manager, CMT, BCT Leads |
| **Communication Tree Test** | Semi-annual | Live test of notification cascade; verify contact accuracy | BC Manager, HR Lead, all BCT |
| **Alternate Site Activation Drill** | Annual | Physical activation of alternate site; confirm readiness | IT / DR Team, Facilities Lead, BCT |
| **Full Invocation Simulation** | Annual | End-to-end simulation of full BCP invocation including RTNO | All BCT, CMT; NACSA may observe |
| **DR Failover Test** | Semi-annual | Technical failover of Tier 1 systems to alternate DR environment | IT / DR Team, CISO |

### 11.2 Test Documentation and Reporting

All tests shall produce a **Test Report** including:

- Objectives and scope.
- Test scenario and injects.
- Observations and deviations from procedure.
- Gaps and corrective actions (with owners and target dates).
- Sign-off by BC Manager and CISO.

Test reports shall be retained for a minimum of **[5] years** and made available to NACSA upon request.

---

## 12. Review and Approval

### 12.1 Document Review Schedule

This document shall be reviewed:

- **Semi-annually** (every 6 months) as a minimum.
- Following any BCP invocation or activation.
- Following any material change to NCII systems, architecture, or regulatory requirements.
- Following any significant organisational restructuring affecting BCP roles.
- Upon direction from NACSA or changes to Act 854 codes of practice.

### 12.2 Version History

| Version | Date | Author | Changes / Description |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release. |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes] |

### 12.3 Approval and Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [BC Manager Name] | _______________ | [Date] |
| Reviewed By | [CISO Name] | _______________ | [Date] |
| Reviewed By | [Compliance Officer Name] | _______________ | [Date] |
| Approved By | [CEO / COO Name] | _______________ | [Date] |
| Board Noted By | [Board Risk Committee Chair] | _______________ | [Date] |

---

## 13. References

### 13.1 Regulatory References

| Reference | Description | Relevance |
|---|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duty of NCII entity to comply with prescribed cyber security measures and codes of practice issued by the Director General of NACSA. | Mandates the existence, maintenance, and exercise of a BCP for NCII systems. |
| **Cyber Security Act 2024 (Act 854), Section 23** | Duty to report cyber security incidents to NACSA within prescribed timeframes and to cooperate with NACSA during and after incidents. | Drives the regulatory notification obligations in Section 5.4 of this procedure. |
| **NACSA Code of Practice for NCII** | Technical and governance standards for NCII entities. | Provides specific requirements for BCP structure, testing frequency, and documentation standards. |
| **Bank Negara Malaysia Risk Management in Technology (RMiT) Policy** | Technology risk management requirements for financial institutions. | Applies where [Organisation Name] is a BNM-licensed entity; informs RTO/RPO and testing requirements. |
| **Personal Data Protection Act 2010 (PDPA)** | Data protection obligations, including security and breach notification. | Data breach obligations during cyber incidents. |
| **ISO 22301:2019** | International standard for Business Continuity Management Systems. | Reference framework for BCP structure, exercising, and continual improvement. |
| **ISO/IEC 27001:2022** | Information security management systems. | Security controls supporting BCP; referenced in NACSA codes of practice. |

### 13.2 Internal References

| Document | Document ID | Owner |
|---|---|---|
| [Organisation Name] Business Continuity Policy | [Doc ID] | BC Manager |
| [Organisation Name] Business Continuity Plan (BCP) | [Doc ID] | BC Manager |
| [Organisation Name] Disaster Recovery Plan (DRP) | [Doc ID] | IT / DR Team Lead |
| [Organisation Name] Cyber Security Incident Response Plan (CSIRP) | [Doc ID] | CISO |
| [Organisation Name] NCII Asset Register | [Doc ID] | CISO |
| [Organisation Name] Business Impact Analysis (BIA) | [Doc ID] | BC Manager |
| [Organisation Name] Crisis Communications Policy | [Doc ID] | Communications Lead |
| [Organisation Name] Third-Party Risk Management Policy | [Doc ID] | Chief Risk Officer |

---

## 14. Appendices

### Appendix A — BCP Invocation Declaration Form

*Authors should design this as a controlled single-page form for rapid completion under pressure. It should capture the minimum information required for an auditable invocation record.*

**BUSINESS CONTINUITY PLAN — INVOCATION DECLARATION**

| Field | Details |
|---|---|
| **Incident Reference Number** | INC-[YYYY]-[NNNN] |
| **Date of Declaration** | |
| **Time of Declaration (T₀)** | |
| **Declaring Authority (Name / Title)** | |
| **Co-Declaring Authority (if joint)** | |
| **Invocation Level** | Level 1 / Level 2 / Level 3 |
| **Incident Type** | Cyber Security Incident / Disaster / Regulatory Direction / Other |
| **Brief Description of Triggering Event** | |
| **Primary Site Status** | Operational / Partially Operational / Unavailable |
| **Alternate Site Status** | On Standby / Activated / Not Required |
| **Signature of Declaring Authority** | |
| **Signature of Witness** | |

---

### Appendix B — Incident Log Template

*Maintain a running chronological log of all actions, decisions, and communications throughout the BCP invocation. This log is a regulatory record under Act 854 and must be retained for [5] years.*

| Log # | Date | Time | Action / Event | Actioned By | Outcome / Notes |
|---|---|---|---|---|---|
| 001 | | | BCP invocation declared (T₀) | [Name] | Invocation Level: [X] |
| 002 | | | NACSA notified | [Name] | Reference: [NACSA Ref] |
| 003 | | | Alternate site activated | [Name] | Confirmed operational |
| ... | | | | | |

---

### Appendix C — Contact Directory

*[ACCESS CONTROLLED — MAINTAINED SEPARATELY]*

*The Contact Directory contains primary, secondary, and out-of-band contact details for all BCP personnel, key vendors, regulators, and emergency services. It is maintained by the BC Manager and reviewed quarterly. Access is restricted to BCT members.*

*Physical copies are stored in sealed envelopes at: [Primary Site Location] | [Alternate Site Location] | [BC Manager's Residence / Secure Offsite Location].*

---

### Appendix D — Pre-Approved Communication Templates

*[Pre-approved templates to be developed and approved by Communications Lead, CISO, and Legal prior to any incident. Templates reduce decision latency under pressure and ensure regulatory compliance.]*

| Template Reference | Purpose | Approved By | Last Updated |
|---|---|---|---|
| D-1 | NACSA Initial Incident Notification | CISO / Legal | [Date] |
| D-2 | BNM Incident Notification | CISO / CFO / Legal | [Date] |
| D-3 | PDPA Personal Data Breach Notification | Data Protection Officer / Legal | [Date] |
| D-4 | Board of Directors Notification | CEO / BC Manager | [Date] |
| D-5 | Client / Counterparty Service Disruption Notice | Communications Lead / Legal | [Date] |
| D-6 | Vendor / Third-Party Activation Notice | IT / DR Team Lead | [Date] |
| D-7 | Insurance Provider Notification | CFO / Legal | [Date] |
| D-8 | Media Statement (Approved Template) | Communications Lead / CEO / Legal | [Date] |

---

### Appendix E — Situation Report (SITREP) Template

**SITUATION REPORT — SITREP #[NNN]**

| Field | Details |
|---|---|
| **Incident Reference** | INC-[YYYY]-[NNNN] |
| **SITREP Number** | [NNN] |
| **Report Date / Time** | |
| **Prepared By** | BC Manager |
| **Distribution** | CMT / BCT / NACSA / [Others as approved] |

**1. Current Situation Summary**
[2–3 sentence summary of the current incident status.]

**2. Actions Completed Since Last SITREP**
- [Action 1] — Completed [Time] — [Responsible Party]
- [Action 2] — Completed [Time] — [Responsible Party]

**3. Actions In Progress**
- [Action 1] — ETA: [Time] — [Responsible Party]

**4. Upcoming Actions (Next Period)**
- [Action 1] — Target: [Time] — [Responsible Party]

**5. Issues and Blockers**
- [Issue / Blocker] — Impact: [Description] — Escalation required: Yes / No

**6. System Recovery Status**

| System | Status | RTO Met? | Notes |
|---|---|---|---|
| [System 1] | Restored / In Progress / Failed | Yes / No | |

**7. Regulatory Notifications**

| Regulator | Notified? | Time Notified | Reference |
|---|---|---|---|
| NACSA | Yes / No / Pending | | |

**8. Next SITREP**
Scheduled: [Date / Time]

---

### Appendix F — Alternate Site Access Instructions

*[ACCESS CONTROLLED — Physical copies held in sealed envelopes at designated locations]*

*This appendix contains:*
- *Alternate site physical address and directions.*
- *Access codes and keycard allocation procedure.*
- *On-site contact details.*
- *Parking and transportation arrangements.*
- *Network access credentials (encrypted, managed by CISO).*

---

### Appendix G — Post-Incident / Lessons Learned Report Template

**POST-INCIDENT REVIEW — LESSONS LEARNED REPORT**

| Field | Details |
|---|---|
| **Incident Reference** | INC-[YYYY]-[NNNN] |
| **PIR Date** | |
| **PIR Facilitated By** | BC Manager |
| **Attendees** | |

**1. Incident Summary**
[Brief factual summary: what happened, when, impact.]

**2. Timeline of Events**

| Time | Event | Action Taken |
|---|---|---|
| [T₀] | BCP invoked | |
| [...] | | |
| [Tn] | RTNO declared | |

**3. BCP Performance Assessment**

| BCP Component | Performance | Rating (1–5) | Observations |
|---|---|---|---|
| Invocation criteria and declaration | | | |
| Communication tree | | | |
| Alternate site activation | | | |
| System recovery — Tier 1 | | | |
| System recovery — Tier 2 | | | |
| Staff mobilisation | | | |
| Return to normal operations | | | |
| Regulatory notifications | | | |

**4. Lessons Learned**

| # | Observation / Gap | Recommended Corrective Action | Owner | Target Date | Status |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |

**5. Regulatory Compliance Review**

- NACSA initial notification within 6 hours: Yes / No — Actual time: [X] hours
- All required regulatory notifications completed: Yes / No
- Documentation sufficient for regulatory audit: Yes / No

**6. Document Updates Required**

| Document | Updates Required | Owner | Target Date |
|---|---|---|---|
| BCIP | [Description] | BC Manager | |
| BCP | [Description] | BC Manager | |
| DRP | [Description] | IT / DR Team Lead | |

**7. Approval**

| Role | Name | Signature | Date |
|---|---|---|---|
| BC Manager | | | |
| CISO | | | |
| CMT Chair | | | |

---

### Appendix H — BCP Testing and Exercise Log

*Maintain a register of all BCP tests and exercises conducted. This register shall be made available to NACSA upon request.*

| Test Date | Test Type | Scope / Scenario | Participants | Outcome | Report Reference | Sign-Off |
|---|---|---|---|---|---|---|
| [Date] | Tabletop | [Scenario description] | [Number] staff | Pass / Partial / Fail | [Report Ref] | [BC Manager] |
| [Date] | Full Simulation | [Scenario description] | [Number] staff | Pass / Partial / Fail | [Report Ref] | [BC Manager] |

---

*End of Document*

---

**Document Control Notice**

This document is subject to version control. The current authoritative version is maintained by the BC Manager in [Document Management System]. Printed copies are uncontrolled. Users should verify they hold the current version before use in an actual BCP invocation.

*[Organisation Name] | [Document ID] | Version 1.0 | Confidential*