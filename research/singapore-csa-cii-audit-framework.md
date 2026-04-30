# Singapore CSA CII Audit Framework: Deep Research for NACSA Act 854 Comparison

**Research Date:** 2026-03-31
**Purpose:** Inform design of Malaysia NACSA audit methodology under Cyber Security Act 2024 (Act 854)
**Classification:** Working research document -- not for client distribution

---

## 1. Legal Framework: Singapore Cybersecurity Act 2018 + 2024 Amendment

### 1.1 Original Act (2018)

The Cybersecurity Act 2018 (No. 9 of 2018) establishes the legal basis for CII regulation in Singapore. Key structural sections:

| Section | Subject | Relevance |
|---------|---------|-----------|
| s.7 | Designation of CII | Commissioner designates specific computers/systems as CII |
| s.10 | Furnishing of information | CII owners must provide design, config, security info on request |
| s.11 | Codes of Practice (CoP) | Commissioner issues CCoP for CII |
| s.12 | Standards of Performance (SoP) | Commissioner issues SoP for CII |
| s.13 | Written Directions | Commissioner may issue written directions |
| s.14 | Incident reporting | CII owners must report prescribed incidents |
| s.15 | Cybersecurity audits and risk assessments | **Core audit obligation** |
| s.16 | Cybersecurity exercises | Commissioner may direct readiness exercises |

### 1.2 Section 15 -- The Core Audit Obligation

**Section 15(1)(a) -- Biennial Audit:**
The owner of a CII must, starting from the date of the designation notice (s.7), carry out a cybersecurity audit of the compliance of the CII with:
- The Act itself
- Applicable codes of practice (CCoP)
- Applicable standards of performance (SoP)

**Frequency:** At least once every 2 years, or at such higher frequency as may be directed by the Commissioner in any particular case.

**Auditor requirement:** Must be carried out by an auditor approved or appointed by the Commissioner.

**Section 15(1)(b) -- Annual Risk Assessment:**
The CII owner must also conduct a cybersecurity risk assessment at least once a year, in such form and manner as the Commissioner may determine.

**Report submission:** Audit and risk assessment reports must be furnished to the Commissioner within 30 days of completion.

**Key distinction:** The audit and risk assessment are **separate obligations** -- the audit is biennial (compliance-focused), the risk assessment is annual (risk-focused). Both are mandatory.

### 1.3 Penalty Framework (Original Act)

| Violation | Fine | Imprisonment | Continuing Offence |
|-----------|------|-------------|-------------------|
| Failure to conduct audit/risk assessment (s.15) | Up to SGD 100,000 | Up to 2 years | SGD 5,000/day |
| Late submission of audit/RA report (>30 days) | Up to SGD 25,000 | Up to 12 months | SGD 2,500/day |
| Failure to report incident (s.14) | Up to SGD 100,000 | Up to 2 years | SGD 5,000/day |
| Non-compliance with CoP/SoP direction | Up to SGD 100,000 | Up to 2 years | SGD 5,000/day |
| Failure to notify ownership changes (7 days) | Up to SGD 100,000 | Up to 2 years | -- |
| Obstruction of audit/investigation | Up to SGD 100,000 | Up to 2 years | SGD 5,000/day |

### 1.4 Cybersecurity (Amendment) Act 2024

Passed in Parliament on 7 May 2024. Key CII-related provisions came into force on **31 October 2025**. The amendment introduces four new regulatory categories beyond traditional CII:

**Part 3A -- Third-Party-Owned CII (3PO CII):**
- Where an essential service provider (ESP) uses CII owned by a third party (e.g., cloud provider), the Commissioner can designate the ESP as responsible for the cybersecurity of that 3PO CII
- The designated ESP must obtain legally binding commitments from the third-party owner to: supply system information, maintain cybersecurity standards, and allow audits
- The ESP must also audit 3PO CII biennially and conduct annual risk assessments (mirroring s.15 obligations)
- New s.16J imposes these obligations specifically on 3PO CII providers

**Part 3B -- Systems of Temporary Cybersecurity Concern (STCC):**
- For computer systems facing heightened cybersecurity risks due to temporary events (e.g., election systems, pandemic vaccine distribution networks)
- Designation for up to 1 year, renewable annually
- STCC owners must comply with directions, report incidents, and provide system information

**Part 3C -- Entities of Special Cybersecurity Interest (ESCI):** *(Not yet in force)*
- Organizations storing sensitive information or performing functions of national interest
- Must maintain cybersecurity standards, allow audits, and report incidents
- Higher penalties: up to SGD 200,000 or 10% of annual turnover

**Part 3D -- Foundational Digital Infrastructure (FDI):** *(Not yet in force)*
- Major cloud computing and data centre service providers
- Must adhere to codes/standards and report prescribed incidents

**Other Key Changes:**
- **Virtual CII:** Definitions of "computer" and "computer system" now explicitly include "virtual computer" and "virtual computer system"
- **Overseas CII:** New s.7(1A) allows designation of systems located wholly outside Singapore, provided the owner operates in Singapore
- **Expanded reporting:** CII owners must report incidents affecting non-interconnected systems under their control, plus incidents in supplier systems interconnected with CII
- **Inspection powers:** New s.15(4) grants CSA inspection rights where non-compliance or false information is suspected
- **Civil penalties:** New s.37A allows civil penalties (with Public Prosecutor consent) as alternative to criminal prosecution -- up to SGD 500,000 or 10% of annual turnover in Singapore

### 1.5 CII Designation Mechanics

- CII is designated by the **Commissioner of Cybersecurity** via written notice under s.7
- Designation criteria: (a) necessary for continuous delivery of an essential service, and (b) loss/compromise would have a debilitating effect on availability of that essential service
- Designation period: **5 years** (renewable)
- The list of CII and CII owners is **confidential** for national security reasons
- CII designation is at the level of specific "computer" or "computer system" -- not at the entity or sector level
- The 11 critical sectors provide the pool of essential services from which CII is identified

---

## 2. CCoP Second Edition (CCoP 2.0) -- Revision One

### 2.1 Overview

- **Full title:** Cybersecurity Code of Practice for Critical Information Infrastructure -- Second Edition, Revision One
- **Effective date:** 4 July 2022
- **Grace period:** 12 months for all clauses (compliance required by July 2023)
- **Supersedes:** CCoP First Edition (which had approximately 102 clauses)
- **Total clauses:** Approximately 220 auditable security clauses (116% increase from v1)
- **Official PDF:** https://isomer-user-content.by.gov.sg/36/2df750a7-a3bc-4d77-a492-d64f0ff4db5a/CCoP---Second-Edition_Revision-One.pdf

### 2.2 CCoP 2.0 Domain Structure (11 Requirement Sections)

Based on multiple sources, the CCoP 2.0 is organized into 11 requirement sections. The section numbering corresponds to the document structure:

| Section | Domain | Key Sub-areas |
|---------|--------|---------------|
| 2 | **Audit** | CII audit requirements, audit approach |
| 3 | **Governance** | 3.1 Leadership & Oversight, 3.2 Risk Management, 3.3 Policies/Standards/Guidelines/Procedures, 3.4 Security-by-Design, 3.5 Cybersecurity Design Principles, 3.6 Change Management, 3.7 Use of Cloud Computing Systems and Services |
| 4 | **Identification** | Asset management, risk assessment, cybersecurity posture understanding |
| 5 | **Protection** | 5.2 Access Control (including PAM), 5.x Data Security/Encryption/Key Management, 5.x Network Segmentation & Network Security, 5.x System Hardening/Secure Configuration, 5.x Vulnerability Management, 5.x Patch Management, 5.13 Database Security, 5.14 Threat & Vulnerability Detection, 5.x Application Security, 5.x Physical Security, 5.x Supply Chain Risk Management, 5.x Windows Domain Controller Security, 5.x Penetration Testing |
| 6 | **Detection** | 6.1 Logging, 6.2 Monitoring/Detection (SIEM, IDS/IPS), Cyber Threat Intelligence, Continuous Control Monitoring, Threat Hunting |
| 7 | **Response & Recovery** | Incident Response Plans, Crisis Communication Plans, Business Continuity/Disaster Recovery |
| 8 | **Cyber Resilience** | Ability to withstand incidents, continue essential services, recover |
| 9 | **Cybersecurity Training & Awareness** | Awareness programs (emerging threats), Training & skills development (remediation) |
| 10 | **Operational Technology (OT) Security** | OT-specific cybersecurity practices (new in CCoP 2.0) |
| 11 | **Additional Domain-Specific Practices** | Including DNSSEC and other domain-specific requirements |

**Note:** The exact clause numbering is based on fragmentary references from multiple sources. The full clause list is in the official PDF linked above.

### 2.3 Known Specific Clause References

From vendor compliance documentation:
- **Clause 5.2.1(d):** Monitor account activities and behavioral patterns for anomalies
- **Clause 5.13.4:** Monitor databases for anomalous activities
- **Clause 5.13.5:** Monitor bulk queries exceeding predetermined thresholds
- **Clause 5.14.2:** Automate detection of threats and vulnerabilities
- **Clause 6.1.1:** Generate, collect, and store logs of all access attempts and activities
- **Clause 6.2.1:** Establish mechanisms for monitoring, detecting, collecting, storing, and analyzing cybersecurity events
- **Clause 6.2.2(b):** Establish normal operational baselines for monitoring deviations
- **Clause 6.2.2(c):** Ensure alerts trigger for all detected deviations and anomalies

### 2.4 Key Specific Requirements (from CSA Clarifications, July 2022)

- Multifactor authentication required for remote access and administrative accounts
- SIEM tool deployment mandatory
- Quarterly vulnerability scans required
- Critical vulnerability patches must be applied within 14 days
- Privileged Access Management (PAM) controls mandated
- Database activity monitoring required
- Threat hunting with baseline traffic analysis mandated

### 2.5 Comparison: CCoP 2.0 vs Malaysia CoP Template

| Feature | Singapore CCoP 2.0 | Malaysia CoP Template |
|---------|-------------------|----------------------|
| **Domains** | 11 sections | 18 domains |
| **Total clauses** | ~220 | 160 requirements (mapped to 67 controls) |
| **OT coverage** | Dedicated OT section (new in 2.0) | OT addressed within relevant domains |
| **Cloud** | Dedicated governance sub-section (3.7) | Addressed within relevant controls |
| **Supply chain** | Within Protection section | Within relevant controls |
| **Compliance ratings** | Not specified in CCoP (audit determines) | Patuh / Separa Patuh / Tidak Patuh / Tidak Berkenaan |
| **Risk tiers** | Not tiered in CCoP itself | Critical / Standard / Conditional |
| **Mandatory vs recommended** | All clauses are mandatory minimum requirements | All requirements mandatory per CoP |
| **Grace period** | 12 months from issuance | Per sector CoP implementation timeline |

---

## 3. CII Audit Methodology and Approach

### 3.1 Singapore's Published Audit Guidelines

CSA published the **"Guidelines for Auditing Critical Information Infrastructure"** (January 2020). This document sets out audit expectations for approved/appointed auditors. Key reference: https://isomer-user-content.by.gov.sg/36/5696ab2b-fdb5-4b8c-9002-2c1221975760/Guidelines_for_Auditing_Critical_Information_Infrastructure.pdf

**Note:** Brunei's Cyber Security Brunei (CSB) published a near-identical document titled "Guidelines for Auditing and Conducting Cybersecurity Risk Assessment for Critical Information Infrastructure" (v2.0), which is publicly accessible and mirrors Singapore's framework closely. The Brunei version provides the detailed structure that Singapore's original document contains.

### 3.2 Seven Areas of Audit Expectation (Sections 4.1-4.7 of Guidelines)

**4.1 Principles of Auditing:**
Five core principles, each with sub-requirements:
- **(a) Integrity** -- Perform audits with honesty, responsibility, competence, impartiality; be sensitive to influences on judgement
- **(b) Fair Presentation** -- Report truthfully and accurately; report significant obstacles and unresolved diverging opinions; ensure communication is truthful, accurate, objective, timely, clear, and complete
- **(c) Due Professional Care** -- Exercise diligence and judgement; make reasoned judgements in all situations
- **(d) Confidentiality** -- Exercise discretion; do not use audit information for personal gain; handle sensitive information properly
- **(e) Independence** -- Ensure independence of audit activity; act free from bias and conflict of interest; maintain objectivity throughout; base findings only on audit evidence

**4.2 Audit Objective:**
Two objectives:
- (a) Verify compliance of CII against the Act, subsidiary legislation, applicable written directions, CoP, and SoP
- (b) Assess the adequacy and effectiveness of controls/measures put in place to meet requirements

**4.3 Audit Scope:**

| Scope Element | Requirement |
|--------------|-------------|
| Audit Subject | All CII designated under the Act |
| Audit Period | Minimum 12 months; no gap between audit periods |
| Audit Criteria | Compliance with Act, subsidiary legislation, written directions, CoP, SoP |

**4.4 Audit Approach:**
The auditor **must adopt both** compliance and risk-based approaches:

**(a) Compliance-based:**
Carry out compliance testing to ascertain the adequacy and effectiveness of controls applied in the CII to comply with the Act, subsidiary legislation, applicable written directions, CoP, and SoP.

**(b) Risk-based:**
Identify the risks and threats that the CII faces and ascertain if the controls put in place are appropriate to mitigate the known risks and threats.

**4.5 Audit Finding:**
The auditor should highlight:
- (a) Any audit finding identified during the audit
- (b) Systemic findings spread throughout the CII (indicating design weakness)
- (c) Recurring findings from past audits that reoccurred after corrective action
- (d) Good practices in governance and controls

**Finding Attributes (structured format):**

| Attribute | Description |
|-----------|-------------|
| **Condition** | Statement describing the results of the audit finding |
| **Criteria** | Standards/Rules/Benchmarks used to measure against the condition |
| **Cause** | Root cause and contributory reason(s) for the condition |
| **Effect** | The effect and significance (immediate, future, or potential) -- must link to impact on CII essential services, including quantitative and qualitative effects |
| **Recommendation** | Recommended action(s) to correct the cause and prevent reoccurrence |

**4.6 Audit Conclusion:**
The auditor must give opinion and conclusion on:
- (a) Appropriateness of management's response to audit findings
- (b) Adequacy and effectiveness of controls put in place to address cybersecurity risks
- (c) Opportunities for improvement to secure the CII

**4.7 Audit Report Format:**
Minimum required sections:

| Report Section | Content |
|---------------|---------|
| **Executive Summary** | Overall assessment of findings, risks, implications, recommendations, management feedback, auditor's assessment of management feedback, conclusion on control effectiveness against cybersecurity risks |
| **Purpose** | Reason for audit (e.g., fulfill Act obligations or Commissioner's directives) |
| **Audit Objective** | As defined in s.4.2 |
| **Audit Scope** | As defined in s.4.3 |
| **Stakeholders** | Stakeholders involved, their roles and responsibilities |
| **Audit Methodology and Approach** | How objectives were achieved: (a) reliance on other auditors' work, (b) analysis methods used (interviews, walkthroughs, document reviews), (c) sampling methods for assessing control effectiveness |
| **Audit Finding** | As defined in s.4.5 (Condition, Criteria, Cause, Effect, Recommendation) |
| **Audit Conclusion** | As defined in s.4.6 |

### 3.3 Auditor Approval Process

**Two criteria must be fulfilled:** Independence and Competency.

**Independence:**
- No conflict of interest -- actual, potential, or perceived
- The auditor's interests must not interfere with independent and objective performance
- The firm/team must demonstrate organizational independence from the CII owner

**Competency:**
- Must possess necessary technical competencies (professional qualifications/certifications, skills, knowledge, relevant experience)
- While CISA and CISSP are recognized, CSA does not mandate specific certifications -- it evaluates competency holistically

**Approval Forms:**
- **Form A1:** Application for Appointment of Auditor -- completed by the CII owner
- **Form A2:** Application for Appointment of Auditor -- completed by the external audit firm/team/auditor
- Both forms must be submitted online to CSA for the Commissioner's approval before audit commences

**New Requirement (2026):** CII auditors must obtain **Cyber Trust Mark Level 5** certification (at the organizational level) by end-2026, with a one-year grace period.

### 3.4 Key Audit Terms and Definitions

From the Brunei/Singapore guidelines:

| Term | Definition |
|------|-----------|
| Audit | The systematic, independent, and documented process for obtaining audit evidence and evaluating objectively to determine the extent to which audit criteria are fulfilled |
| Audit criteria | A set of requirements used as reference against which audit evidence is compared |
| Audit evidence | Records, statements of fact, or other information relevant to audit criteria and verifiable |
| Audit finding | An audit criterion not being met |
| Audit period | The period to which the audit work relates and from which audit evidence is obtained |
| Audit subject | The CII system that is to be audited |
| Adequacy of control | Whether the control in place is fit for purpose |
| Effectiveness of control | Whether the control has the desired effect of mitigating the risk |
| Compensating control | Alternative control when a requirement cannot be met as stated, but the associated risk is sufficiently mitigated. Must: (a) meet intent and rigor of original, (b) provide similar level of defence, (c) be commensurate with additional risk |
| Interim control | Measures to reduce risk temporarily while the recommended control is being implemented |

---

## 4. Risk Assessment Framework

### 4.1 Separate Obligation from Audit

The cybersecurity risk assessment is a **separate annual obligation** under s.15(1)(b), distinct from the biennial audit. It follows a structured methodology:

### 4.2 Risk Assessment Process (3 Steps)

**Step 1: Risk Identification**
- Task A: Identify Assets (crown jewels + stepping stones)
- Task B: Threat Modelling (scope identification, threat identification, attack modelling)
- Task C: Construct Risk Scenarios (must include: Asset + Threat Event + Vulnerability + Consequence)

**Step 2: Risk Analysis**
- Task A: Determine Likelihood (1-5 scale: Rare to Highly Likely)
  - Based on three factors: Discoverability, Exploitability, Reproducibility (adapted from DREAD model)
  - NOT based on historical frequency -- cybersecurity risk likelihood is independent of past occurrence
- Task B: Determine Impact (1-5 scale: Negligible to Very Severe)
  - Assessed across three dimensions: Confidentiality, Integrity, Availability
  - At three levels: National, Organisational, Individual

**Step 3: Risk Evaluation**
- Task A: Determine and Prioritise Risk (5x5 risk matrix: Likelihood x Impact)
- Task B: Document Risk (Risk Register with 8 mandatory elements)

### 4.3 Mandatory Risk Register Elements

1. Risk scenario
2. Identification date
3. Existing measures
4. Current risk (likelihood x impact with existing measures)
5. Treatment plan
6. Progress status
7. Residual risk (after treatment plan implementation)
8. Risk owner

### 4.4 Risk Tolerance Levels

| Risk Level | Response Required |
|------------|------------------|
| Very High | Cannot be accepted; cease activity immediately or implement mitigation/transfer immediately |
| High | Cannot be accepted; treatment strategies developed and implemented within 1 month |
| Medium High | Cannot be accepted; treatment strategies within 3-6 months |
| Medium | Can be accepted if no easy/economical treatment; monitor regularly |
| Low | Can be accepted if no easy/economical treatment; monitor periodically |

### 4.5 Risk Response Options
1. **Accept** -- only when within tolerance
2. **Avoid** -- discontinue the exposing activity
3. **Transfer** -- share risk with other parties (reduces impact component)
4. **Mitigate** -- deploy security controls (reduces likelihood and/or impact)

**Mandatory requirement:** Senior Management must formally approve all treatment plans and formally accept all residual risks.

---

## 5. CII Sector Framework

### 5.1 The 11 Critical Sectors

The essential services are listed in the **First Schedule** of the Cybersecurity Act:

| # | Sector | Sector Lead/Regulator |
|---|--------|----------------------|
| 1 | Energy | Energy Market Authority (EMA) |
| 2 | Water | PUB (Public Utilities Board) |
| 3 | Banking & Finance | Monetary Authority of Singapore (MAS) |
| 4 | Healthcare | Ministry of Health (MOH) |
| 5 | Land Transport | Land Transport Authority (LTA) |
| 6 | Aviation | Civil Aviation Authority of Singapore (CAAS) |
| 7 | Maritime | Maritime and Port Authority (MPA) |
| 8 | Government | GovTech / various agencies |
| 9 | Info-communications | IMDA (Infocomm Media Development Authority) |
| 10 | Media | IMDA |
| 11 | Security & Emergency Services | Ministry of Home Affairs (MHA) |

### 5.2 Sector-Specific Overlay Model

Singapore uses a **dual-layer** approach:
- **Layer 1 (Universal):** CCoP 2.0 applies to ALL CII across all 11 sectors
- **Layer 2 (Sector-specific):** Sector leads may impose additional requirements through their own regulatory frameworks

**Key example -- Banking & Finance:**
- CII in the banking sector must comply with **both** CCoP 2.0 **and** MAS Technology Risk Management (TRM) Guidelines (last revised January 2021)
- MAS TRM covers IT governance, cybersecurity, incident response, outsourcing, system development, data protection
- For banking CII, the audit must verify compliance with CCoP 2.0 AND MAS TRM requirements
- MAS conducts its own separate technology risk inspections through its supervisory process

**Key example -- Healthcare (post-SingHealth breach):**
- Following the 2018 SingHealth data breach (1.5 million records stolen), the healthcare sector significantly strengthened its CII controls
- MOH CISO role was separated from IHiS operational cybersecurity role
- Enhanced security checks were mandated for all healthcare CII
- Committee of Inquiry (COI) issued 16 recommendations that shaped subsequent CCoP requirements

### 5.3 CII Designation Granularity

- CII is designated at the **specific computer or computer system** level, not at the entity level
- An organization may own multiple CII systems
- Each CII system is individually designated with its own 5-year designation period
- The audit must cover **all CII** designated under the Act for that owner
- The audit period must be minimum 12 months with no gaps between audit periods

---

## 6. Cyber Trust Mark and CII

### 6.1 Overview

The Cyber Trust Mark (CTM) is CSA's cybersecurity certification scheme. In February/March 2026, CSA announced mandatory CTM requirements for the CII ecosystem:

### 6.2 Mandatory Certification Requirements

| Entity Type | CTM Level Required | Deadline | Grace Period |
|-------------|-------------------|----------|-------------|
| **CII Owners (CIIOs)** | Level 5 (highest tier) | End-2027 | 2 years |
| **CII Auditors** | Level 5 (organisational) | End-2026 | 1 year |
| **Licensed Cybersecurity Service Providers** (pentest & managed SOC) | Level 3 | End-2026 | Grace period until 31 Dec 2026 |

### 6.3 Rationale

CSA's stated purpose is to:
- Raise baseline national cybersecurity standards
- Address supply chain risks (auditors and service providers accessing CII must themselves be secure)
- Ensure organizations supporting CII have adequate cybersecurity posture for their non-CII systems

### 6.4 Implication for Audit Market

This means that by end-2026, any firm conducting CII audits in Singapore must have achieved CTM Level 5 certification for their own organizational systems. This creates a **supply-side constraint** on qualified audit firms and may be relevant as Malaysia considers similar requirements.

---

## 7. Enforcement and Compliance Outcomes

### 7.1 Enforcement Track Record

As of March 2026, there are **no published enforcement actions** taken against CII owners under the Cybersecurity Act. This contrasts with data protection enforcement (e.g., SingHealth breach: SGD 1 million in PDPA fines).

### 7.2 Commissioner's Response Toolkit

Based on audit results, the Commissioner can:
1. **Accept the report** -- no further action needed
2. **Issue written directions** -- requiring specific remediation actions
3. **Increase audit frequency** -- direct more frequent audits for non-compliant CII
4. **Conduct inspections** -- under new s.15(4), CSA can inspect CII facilities where non-compliance or false information is suspected
5. **Issue codes of practice amendments** -- update CCoP requirements based on emerging threats
6. **Direct cybersecurity exercises** -- test CII readiness under s.16
7. **Pursue criminal prosecution** -- refer to Public Prosecutor
8. **Pursue civil penalties** -- under new s.37A (up to SGD 500,000 or 10% of annual turnover)

### 7.3 SingHealth Case Study -- Impact on CII Framework

The 2018 SingHealth breach (1.5 million records including Prime Minister's health records) was a pivotal event that shaped Singapore's CII audit framework:

**Root Causes Identified by COI:**
- Staff lacked adequate cybersecurity awareness
- "Confirm before escalate" culture delayed incident reporting
- Weak network segmentation between Citrix servers and clinical database
- Servers did not use two-factor authentication
- Weak administrator passwords
- Coding vulnerability in clinical management application

**Impact on CII Framework:**
- Accelerated implementation of the Cybersecurity Act
- Drove creation of CCoP 2.0 with significantly more clauses (102 to 220)
- Led to mandatory MFA, PAM, SIEM, and database monitoring requirements
- Established principle that cybersecurity is "a risk management issue, not merely a technical issue"
- Separated CISO governance from operational cybersecurity functions

---

## 8. Comparison: Singapore vs Malaysia (Act 854)

### 8.1 Structural Comparison

| Feature | Singapore (CSA 2018 + 2024 Amd) | Malaysia (Act 854, 2024) |
|---------|-------------------------------|--------------------------|
| **Regulator** | CSA / Commissioner of Cybersecurity | NACSA / Chief Executive of NACSA |
| **CII/NCII designation** | Commissioner designates specific systems | Chief Executive designates NCII entities |
| **Designation level** | Specific computer/computer system | NCII entity level |
| **Designation period** | 5 years | Not specified in Act |
| **Audit frequency** | Biennial (minimum) | Biennial (minimum) |
| **Risk assessment** | Annual | Annual |
| **Audit approach** | Compliance + Risk-based (both mandatory) | Compliance + Risk-based + Technical testing |
| **Report submission** | Within 30 days | Per NACSA direction |
| **Auditor approval** | Commissioner approves (Form A1/A2) | NACSA licenses/approves auditors |
| **Code of Practice** | CCoP 2.0 (universal, ~220 clauses) | Sector-specific CoPs (NCSB framework) |
| **Sector CoPs** | CCoP applies universally; sectors add overlays | Each sector gets its own CoP |
| **Confidentiality of CII list** | Secret (national security) | Not explicitly stated |
| **Virtual/cloud CII** | Explicitly covered (2024 amendment) | Not explicitly addressed |
| **Overseas CII** | Covered (2024 amendment) | Systems wholly/partly in Malaysia |
| **Third-party CII** | 3PO CII framework (2024 amendment) | Not explicitly addressed |
| **Director liability** | Not explicit in CSA | s.52 director liability |
| **Compliance ratings** | Not standardized | Patuh / Separa Patuh / Tidak Patuh / Tidak Berkenaan |

### 8.2 Penalty Comparison

| Offence | Singapore | Malaysia |
|---------|-----------|---------|
| **Failure to conduct audit** | SGD 100,000 / 2 years | MYR 200,000 / 3 years |
| **Late report submission** | SGD 25,000 / 12 months | MYR 200,000 / 3 years |
| **Failure to report incident** | SGD 100,000 / 2 years | MYR 500,000 / 10 years |
| **Unlicensed cybersecurity services** | SGD 50,000 / 2 years | MYR 500,000 / 10 years |
| **Civil penalty ceiling** | SGD 500,000 or 10% turnover | Not specified |
| **Continuing offence** | SGD 2,500-5,000/day | Per Act |

**Key observation:** Malaysia's penalties are **significantly more severe** than Singapore's -- particularly for incident reporting failures (MYR 500k/10 years vs SGD 100k/2 years) and unlicensed services (MYR 500k/10 years vs SGD 50k/2 years).

### 8.3 Where Singapore Is Stronger

1. **Maturity:** 6+ years of operational experience with CII audits since 2018
2. **Published audit guidelines:** Detailed methodology document available since January 2020
3. **Virtual/cloud/overseas CII:** Explicitly addressed through 2024 amendments
4. **Third-party CII:** 3PO CII framework with legally binding commitments
5. **STCC concept:** Ability to rapidly regulate temporary high-risk systems
6. **Civil penalty pathway:** Alternative to criminal prosecution, more proportionate
7. **Cyber Trust Mark ecosystem:** Supply chain security for the audit ecosystem itself
8. **SingHealth lessons baked in:** Hard lessons from real breach inform the framework
9. **Granular designation:** CII at system level allows more precise scoping
10. **Sector lead model:** Clear delegation to sector regulators (MAS, EMA, MOH, etc.)

### 8.4 Where Malaysia (Act 854) Goes Further

1. **Harsher penalties:** Significantly stronger deterrent effect
2. **Director liability:** s.52 personal liability for directors -- not present in Singapore's CSA
3. **Technical testing requirement:** Malaysia explicitly requires technical testing as a third audit approach alongside compliance and risk-based
4. **Standardized compliance ratings:** P/SP/TP/TB framework provides consistent language
5. **Risk tier classification:** Critical/Standard/Conditional allows proportionate audit effort
6. **Control-level mapping:** 67 controls mapped to 160 requirements with explicit audit procedures
7. **Sector-specific CoPs:** Each sector gets tailored requirements (vs Singapore's universal CCoP)
8. **Sampling methodology:** Population-based sampling tables with time-based coverage guidance
9. **Legal overlay integration:** Statutory obligations and penalty exposure integrated into audit worksheets

### 8.5 Lessons Malaysia Can Learn from Singapore

1. **Publish audit guidelines early:** Singapore's January 2020 guidelines gave auditors clarity. Malaysia should publish equivalent guidance for NACSA audits promptly.

2. **Separate audit from risk assessment clearly:** Singapore's model of biennial audit + annual RA is well-understood. The distinct obligations with different frequencies and purposes avoid confusion.

3. **Establish auditor approval workflow:** The Form A1/A2 process is simple and effective. NACSA should establish a comparable streamlined approval process.

4. **Plan for virtual/cloud/third-party CII:** Singapore learned it needed to extend its framework to cover cloud and outsourced infrastructure. Malaysia should address this proactively rather than reactively.

5. **Consider supply chain security for auditors:** Singapore's CTM requirement for audit firms is innovative -- it ensures auditors accessing CII are themselves cybersecure. NACSA could consider similar requirements.

6. **Build civil penalty capacity:** Singapore's move to allow civil penalties alongside criminal prosecution gives enforcement flexibility. Pure criminal enforcement may be disproportionate for minor compliance gaps.

7. **Expect no enforcement actions initially:** Singapore has had zero published enforcement actions in 6+ years. The framework operates primarily as a compliance improvement mechanism, not a punitive tool. Malaysia should set realistic expectations about enforcement.

8. **Learn from SingHealth:** The breach that shaped Singapore's framework exposed cultural, governance, and technical failures. Malaysia's NCII entities should study the COI findings.

9. **Prepare for scope expansion:** Singapore's 2024 amendments show that CII frameworks inevitably expand to cover new entity types. Malaysia should architect Act 854 implementation with future expansion in mind.

10. **Keep CII list confidential:** Singapore's practice of keeping CII designations secret reduces the attack surface. Malaysia should consider similar confidentiality measures.

---

## 9. Key Reference Documents

### 9.1 Primary Singapore Documents

| Document | URL |
|----------|-----|
| Cybersecurity Act 2018 (full text) | https://sso.agc.gov.sg/Acts-Supp/9-2018/ |
| Cybersecurity (Amendment) Act 2024 | https://sso.agc.gov.sg/Acts-Supp/19-2024/Published/20240704 |
| CCoP Second Edition, Revision One (PDF) | https://isomer-user-content.by.gov.sg/36/2df750a7-a3bc-4d77-a492-d64f0ff4db5a/CCoP---Second-Edition_Revision-One.pdf |
| Guidelines for Auditing CII (Jan 2020, PDF) | https://isomer-user-content.by.gov.sg/36/5696ab2b-fdb5-4b8c-9002-2c1221975760/Guidelines_for_Auditing_Critical_Information_Infrastructure.pdf |
| CSA CII Audit FAQ | https://www.csa.gov.sg/faqs/cybersecurity-audit-cii/ |
| CSA Supplementary References | https://www.csa.gov.sg/legislation/supplementary-references/ |
| CSA Codes of Practice page | https://www.csa.gov.sg/legislation/codes-of-practice/ |
| CSA CII Sectors page | https://www.csa.gov.sg/information-for/cii-sectors/ |
| CSA Forms page | https://www.csa.gov.sg/legislation/forms/ |
| Cyber Trust Mark (CTM) publication | https://isomer-user-content.by.gov.sg/36/2cff8d23-0f79-4477-9629-377d3bccbcaf/cyber-trust-v202504.pdf |
| Cybersecurity Act Explanatory Statement | https://isomer-user-content.by.gov.sg/36/9e6a3a9e-c796-4bac-b9c8-2abf167e8909/Cybersecurity-Act---Explanatory-Statement.pdf |

### 9.2 Brunei Reference (Singapore Model Proxy)

| Document | URL |
|----------|-----|
| CSB Guidelines for Auditing and Conducting Cybersecurity Risk Assessment for CII (v2.0) | https://www.csb.gov.bn/sites/default/files/downloads/Guidelines/GUIDELINES_FOR_AUDITING_AND_CONDUCTING_CYBERSECURITY_RISK_ASSESSMENT_FOR_CRITICAL_INFORMATION_INFRASTRUCTURE_v2.0.pdf |

This Brunei document closely mirrors Singapore's framework and provides the most complete publicly-accessible view of the audit/risk assessment methodology.

### 9.3 Law Firm Analysis

| Source | URL |
|--------|-----|
| Hogan Lovells -- 2024 Amendment in force | https://www.hoganlovells.com/en/publications/provisions-in-singapores-cybersecurity-amendment-act-came-into-force-on-31-october-2025 |
| Allen & Gledhill -- 2024 Amendment analysis | https://www.allenandgledhill.com/sg/perspectives/articles/31414/ |
| DLA Piper -- Key amendments in force | https://privacymatters.dlapiper.com/2025/12/singapore-key-amendments-to-the-cybersecurity-act-now-in-force/ |
| CMS -- Amendments to come into effect | https://cms-lawnow.com/en/ealerts/2025/10/key-amendments-to-singapore-s-cybersecurity-regime-to-come-into-effect-on-31-october-2025 |
| Clifford Chance -- CSA extends its reach | https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2024/05/cybersecurity-update-singapore-cybersecurity-act-extends-its-reach.html |
| Mayer Brown -- Malaysia vs Singapore comparison | https://www.mayerbrown.com/en/insights/publications/2024/12/malaysias-new-cyber-security-act-2024-a-summary-and-brief-comparative-analysis |
| ICLG -- Singapore Cybersecurity Laws 2026 | https://iclg.com/practice-areas/cybersecurity-laws-and-regulations/singapore |

### 9.4 Practitioner Audit Services

| Provider | URL |
|----------|-----|
| TUV SUD -- CCoP compliance audit | https://www.tuvsud.com/en-sg/services/cyber-security/cyber-security-code-of-practice-ccop-compliance-audit |
| SOCOTEC -- CCoP audit services | https://www.socotec-certification-international.sg/audit-services/cybersecurity-code-practice-infrastructure |
| KPMG -- CCoP 2.0 programme management | https://assets.kpmg.com/content/dam/kpmg/sg/pdf/2023/10/ccop2.0-critical-information-infrastructure-programme-management.pdf |
| Securing Things Academy -- CCoP v2 training | https://securingthings.academy/p/sg-ccop-v2 |

---

## 10. Implications for NACSA AWP Design

### 10.1 Validated Design Decisions

The research confirms that the NACSA AWP design is **well-aligned** with Singapore's proven model:

1. **Dual audit approach** (compliance + risk-based) matches Singapore's mandatory requirement
2. **Structured finding format** (Condition, Criteria, Cause, Effect, Recommendation) matches exactly
3. **Compliance ratings** (P/SP/TP/TB) are an enhancement over Singapore (which does not standardize ratings)
4. **Control context rows** (WHY / WHAT GOOD LOOKS LIKE / KEY RISK IF ABSENT) add value not present in Singapore's model
5. **Risk tier classification** provides sampling guidance not available in Singapore's framework
6. **Weakest-link aggregation** is a defensible approach for compliance audits

### 10.2 Potential Enhancements to Consider

Based on Singapore's experience:

1. **Compensating controls framework:** Singapore/Brunei guidelines explicitly define compensating controls and their acceptance criteria. Consider adding this to the AWP methodology.
2. **Interim controls:** The concept of temporary risk-reduction measures while permanent controls are implemented could be useful for initial NCII compliance cycles.
3. **Systemic vs recurring finding classification:** Singapore distinguishes between systemic findings (design weakness) and recurring findings (past findings that reoccur). This could enhance AWP reporting.
4. **Good practice recognition:** Singapore requires auditors to highlight good practices in governance and controls -- not just deficiencies. Consider adding this to the report template.
5. **Management response assessment:** The audit conclusion must assess the appropriateness of management's response to findings. This creates accountability.
6. **Risk assessment integration:** Given that the risk assessment is a separate annual obligation, consider how the AWP relates to and leverages the risk assessment output.
