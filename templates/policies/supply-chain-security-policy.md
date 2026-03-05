# Supply Chain Security Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CISO / Procurement |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be shared outside [Organization Name] or with third parties without prior written approval from the CISO. Physical and electronic copies are subject to the organization's Information Asset Management Policy.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and Obligations](#3-regulatory-framework-and-obligations)
4. [Policy Principles](#4-policy-principles)
5. [Supplier Risk Assessment Framework](#5-supplier-risk-assessment-framework)
6. [Software Bill of Materials Requirements](#6-software-bill-of-materials-requirements)
7. [Hardware Provenance Verification](#7-hardware-provenance-verification)
8. [Supply Chain Incident Notification](#8-supply-chain-incident-notification)
9. [Contractual Security Obligations](#9-contractual-security-obligations)
10. [Ongoing Supplier Monitoring](#10-ongoing-supplier-monitoring)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Non-Compliance and Enforcement](#12-non-compliance-and-enforcement)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose

*Describe the rationale for this policy, the specific risks it addresses, and the outcomes it is intended to achieve within the context of NCII protection obligations.*

This Supply Chain Security Policy establishes [Organization Name]'s mandatory requirements for managing cyber security risks introduced through the procurement, integration, and ongoing use of components, software, hardware, and managed services across its supply chain. As a designated operator of **National Critical Information Infrastructure (NCII)**, [Organization Name] is obligated under the **Cyber Security Act 2024 (Act 854)** to ensure that supply chain risks are identified, assessed, and mitigated to a standard commensurate with the sensitivity and criticality of its systems and services.

Supply chain threats — including the insertion of malicious code, compromised hardware, insecure software dependencies, and third-party service failures — represent a material and growing vector for cyber incidents affecting NCII sectors. This policy provides a structured, risk-based approach to counter these threats by embedding security requirements at every stage of the supply chain lifecycle, from pre-procurement risk assessment through to contractual enforcement, continuous monitoring, and incident response.

This policy supports [Organization Name]'s commitment to:

- Fulfilling statutory duties under Act 854, including obligations imposed under **Section 18** (Duty to comply with directions issued by the National Cyber Security Agency, **NACSA**) and **Section 28** (Duty to report cyber security incidents).
- Aligning with NACSA's **NCII Sector Security Standards** and associated directives.
- Protecting the confidentiality, integrity, and availability of systems, data, and services that constitute or support [Organization Name]'s NCII.
- Maintaining stakeholder trust, operational resilience, and regulatory standing.

---

## 2. Scope

*Define the boundaries of this policy — which entities, systems, technologies, and third parties it applies to. Be precise about inclusions and exclusions.*

### 2.1 Applicability

This policy applies to:

- **All employees** of [Organization Name] involved in procurement, vendor management, technology acquisition, or system integration.
- **All departments and business units** that procure, commission, or manage external suppliers, contractors, sub-contractors, or managed service providers.
- **All third-party suppliers, vendors, and service providers** that supply components, software, hardware, or services that are integrated into or that support [Organization Name]'s NCII systems.
- **All technology assets** — including but not limited to enterprise software, open-source libraries, cloud services, network equipment, end-point devices, and industrial control system (ICS) components — procured for use within NCII environments.

### 2.2 In-Scope Systems and Environments

| Environment | Description | NCII Classification |
|---|---|---|
| [System/Environment Name] | [Brief description] | [Critical / High / Medium] |
| [System/Environment Name] | [Brief description] | [Critical / High / Medium] |
| [System/Environment Name] | [Brief description] | [Critical / High / Medium] |

### 2.3 Exclusions

*List any specific systems, entities, or categories that are explicitly out of scope, with justification.*

The following are excluded from this policy:

- [Exclusion 1 — e.g., procurement of non-IT consumables with no connectivity to NCII systems]
- [Exclusion 2 — e.g., intra-group transactions with wholly owned subsidiaries covered by a separate Group Supply Chain Policy, subject to equivalence review]

### 2.4 Relationship to Other Policies

This policy should be read in conjunction with the following [Organization Name] policy instruments:

| Policy / Standard | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy framework |
| Third-Party Risk Management Policy | [Doc ID] | Complementary — broader vendor governance |
| Incident Response Policy | [Doc ID] | Invoked for supply chain incidents |
| Data Protection Policy | [Doc ID] | Applicable where supplier processes personal data |
| Business Continuity Policy | [Doc ID] | Supplier continuity obligations |
| Procurement Policy | [Doc ID] | Operational procurement procedures |

---

## 3. Regulatory Framework and Obligations

*Summarise the specific statutory and regulatory requirements that this policy fulfils. Reference all applicable sections, directives, and standards explicitly.*

### 3.1 Cyber Security Act 2024 (Act 854)

[Organization Name] is designated as an NCII entity under the Cyber Security Act 2024. The following provisions of Act 854 are directly relevant to this policy:

| Section | Provision | Obligation |
|---|---|---|
| **Section 18** | Duty to Comply with Directions | [Organization Name] must comply with all written directions issued by NACSA, including any directives pertaining to supply chain security standards, mandatory controls, or approved supplier lists. |
| **Section 28** | Duty to Report Cyber Security Incidents | [Organization Name] must notify NACSA within the prescribed timeframe of any cyber security incident — including those originating from or affecting the supply chain — that impacts or has the potential to impact NCII systems. |

### 3.2 NACSA Directives and Standards

| Instrument | Requirement |
|---|---|
| NCII Sector Security Standards | [Specify applicable sector standard — e.g., Financial Sector, Energy Sector — and relevant control domains] |
| NACSA Direction [Reference] | [Specify any specific NACSA directions received by the organization] |
| [Additional NACSA Instrument] | [Description] |

### 3.3 Complementary Regulatory Obligations

| Regulation / Standard | Relevant Requirement |
|---|---|
| Personal Data Protection Act 2010 (PDPA) | Third-party data processors handling personal data must meet PDPA data protection obligations |
| Bank Negara Malaysia (BNM) — Risk Management in Technology (RMiT) | Technology service provider management, outsourcing, and cloud requirements (where applicable) |
| ISO/IEC 27001:2022 | Annex A.5.19–5.22 — Information security in supplier relationships |
| ISO/IEC 27036 | Supplier relationships — information security guidelines |
| NIST SP 800-161r1 | Cybersecurity supply chain risk management practices |

---

## 4. Policy Principles

*State the foundational principles that guide decision-making under this policy. These should be brief, normative statements that inform interpretation of all subsequent sections.*

[Organization Name] adopts the following principles to govern supply chain security:

1. **Risk-Based Prioritisation** — Supply chain security controls are proportionate to the criticality of the supplier's role, the sensitivity of data or systems accessed, and the potential impact of a supply chain compromise on NCII operations.

2. **Security by Design** — Security requirements are embedded at the earliest stage of procurement and system design, rather than applied retroactively.

3. **Transparency and Traceability** — [Organization Name] requires full visibility into the components, software, and services it procures, including the origins and provenance of hardware and software.

4. **Contractual Accountability** — All security obligations imposed on suppliers are formalised through binding contractual instruments, with rights of audit and enforcement.

5. **Continuous Assurance** — Supplier security posture is assessed not only at the point of onboarding but on an ongoing basis throughout the supplier relationship lifecycle.

6. **Incident Readiness** — Supply chain incident detection, notification, and response capabilities are maintained and tested, consistent with obligations under Act 854, Section 28.

7. **Shared Responsibility** — While [Organization Name] retains ultimate accountability for NCII security, suppliers share responsibility for maintaining security within their own environments and supply chains.

---

## 5. Supplier Risk Assessment Framework

*This section defines how [Organization Name] categorises, assesses, and responds to risks introduced by suppliers. Authors should populate assessment criteria, tier definitions, and risk treatment approaches based on the organisation's existing risk methodology.*

### 5.1 Supplier Categorisation and Tiering

All suppliers are assigned to a risk tier at the point of onboarding and reviewed annually. Tier assignment is based on:

- The **criticality** of the goods or services supplied to NCII operations.
- The **level of access** granted to [Organization Name]'s systems, networks, or data.
- The **volume and sensitivity** of personal data or confidential information processed.
- The **potential impact** of a supply chain failure or compromise.

| Tier | Classification | Description | Examples |
|---|---|---|---|
| **Tier 1 — Critical** | Highest risk | Suppliers with privileged access to NCII systems, or whose failure would directly impair NCII operations | Managed Security Service Providers (MSSPs), core infrastructure vendors, cloud service providers for NCII workloads |
| **Tier 2 — High** | Elevated risk | Suppliers with significant access to internal systems or data, or providing materially important services | ERP system vendors, network equipment suppliers, software development partners |
| **Tier 3 — Medium** | Moderate risk | Suppliers providing non-critical services with limited system access | Professional services firms with network access, HR software providers |
| **Tier 4 — Low** | Baseline risk | Suppliers with minimal or no access to [Organization Name] systems or sensitive data | Office consumables, low-risk SaaS applications with no sensitive data |

### 5.2 Pre-Procurement Risk Assessment

*Describe the mandatory risk assessment activities that must occur before a new supplier relationship is initiated. Authors should reference the relevant assessment forms and risk registers.*

Before any new supplier is engaged for Tier 1, 2, or 3 supply, a **Pre-Procurement Supply Chain Risk Assessment (SC-RA)** must be completed. This assessment must address:

- [ ] Supplier's country of origin, ownership structure, and any potential geopolitical risk factors.
- [ ] Supplier's cyber security posture — evidenced through certifications, audit reports, or self-assessment questionnaires.
- [ ] Supplier's sub-contractor dependencies and fourth-party risk exposure.
- [ ] Concentration risk — whether [Organization Name] is over-reliant on a single supplier or geography.
- [ ] Supplier's financial stability and business continuity capabilities.
- [ ] Any adverse intelligence, known vulnerabilities, or prior security incidents attributed to the supplier.

**Required Evidence by Tier:**

| Evidence Type | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Completed Supplier Security Questionnaire | Mandatory | Mandatory | Mandatory | Optional |
| Independent Security Audit / Penetration Test | Mandatory (within 12 months) | Mandatory (within 24 months) | Recommended | Not required |
| ISO 27001 / SOC 2 Certification | Mandatory | Strongly recommended | Recommended | Not required |
| Financial Due Diligence Report | Mandatory | Mandatory | Optional | Not required |
| Business Continuity Plan (BCP) Review | Mandatory | Mandatory | Optional | Not required |
| Reference Checks with Other NCII Customers | Mandatory | Recommended | Optional | Not required |

### 5.3 Risk Assessment Methodology

*Specify the risk scoring methodology used. Authors should align this with the organization's enterprise risk management framework.*

Risk assessments under this policy use the following scoring approach:

- **Likelihood Score (L):** [1 — Rare / 2 — Unlikely / 3 — Possible / 4 — Likely / 5 — Almost Certain]
- **Impact Score (I):** [1 — Negligible / 2 — Minor / 3 — Moderate / 4 — Major / 5 — Catastrophic]
- **Inherent Risk = L × I**
- **Residual Risk** is calculated after application of compensating controls.

| Residual Risk Score | Risk Level | Required Action |
|---|---|---|
| 20–25 | **Critical** | Escalate to CISO and Board; engagement requires explicit Board approval |
| 12–19 | **High** | Requires CISO approval; enhanced monitoring and contractual controls mandatory |
| 6–11 | **Medium** | Requires Head of Procurement and Information Security Manager approval |
| 1–5 | **Low** | Standard procurement process; periodic review |

### 5.4 Risk Treatment and Acceptance

*Describe how identified risks are treated, including risk avoidance, mitigation, transfer, and acceptance options.*

For each identified supply chain risk, a risk treatment option must be selected:

- **Avoid** — Decline to engage the supplier; source alternative.
- **Mitigate** — Implement compensating controls (technical, contractual, or operational).
- **Transfer** — Require the supplier to carry appropriate cyber insurance; note this does not transfer NCII compliance responsibility.
- **Accept** — Formally accept residual risk, with documented rationale, approved by the CISO.

All risk acceptance decisions for Tier 1 and Tier 2 suppliers must be documented in the **Supply Chain Risk Register** (see Appendix A) and reviewed at least annually.

---

## 6. Software Bill of Materials Requirements

*This section establishes mandatory requirements for software transparency. Authors should define specific SBOM formats, tooling, and verification processes adopted by the organisation.*

### 6.1 Policy Statement

[Organization Name] requires a **Software Bill of Materials (SBOM)** for all software — including commercial off-the-shelf (COTS), open-source, and custom-developed software — that is deployed within NCII environments. The SBOM provides a formal, machine-readable inventory of all software components and their dependencies, enabling [Organization Name] to assess vulnerability exposure and respond rapidly to emerging supply chain threats.

### 6.2 SBOM Standards and Formats

Suppliers must provide SBOMs in one of the following machine-readable formats:

| Format | Standard Body | Preferred Use |
|---|---|---|
| **CycloneDX** | OWASP | Preferred format for all new software procurement |
| **SPDX (Software Package Data Exchange)** | Linux Foundation | Acceptable alternative |
| **SWID (Software Identification Tags)** | ISO/IEC 19770-2 | Acceptable for COTS software inventory |

### 6.3 Minimum SBOM Content Requirements

Each SBOM delivered to [Organization Name] must include, at a minimum:

- [ ] Supplier name and contact information.
- [ ] Software product name, version, and release date.
- [ ] All direct and transitive software components and dependencies.
- [ ] Component name, version, and unique identifier (e.g., CPE, PURL).
- [ ] Applicable software licenses for each component.
- [ ] Known vulnerabilities (mapped to CVE identifiers) at time of delivery.
- [ ] Cryptographic hashes (SHA-256 or stronger) for all components.
- [ ] Timestamp of SBOM generation.
- [ ] SBOM author and tooling used to generate the SBOM.

### 6.4 SBOM Delivery and Maintenance Requirements

| Trigger | SBOM Requirement |
|---|---|
| Initial software procurement | SBOM must be provided before deployment approval |
| Major version release | Updated SBOM required within [X] business days of release |
| Minor version / patch release | Updated SBOM required within [X] business days |
| Discovery of a material vulnerability (CVSS ≥ 7.0) in any component | Supplier must notify [Organization Name] and provide updated SBOM within [X] hours |
| Contract renewal | SBOM currency verified as part of renewal due diligence |

### 6.5 SBOM Verification and Vulnerability Management

[Organization Name]'s Information Security team will:

1. Ingest all supplier SBOMs into the organisation's **Software Asset Management** and **Vulnerability Management** platforms.
2. Continuously scan SBOM components against known vulnerability databases (e.g., NVD, OSV).
3. Alert the relevant system owners and procurement contacts where newly published CVEs affect components listed in active SBOMs.
4. Require suppliers to provide remediation timelines and patching commitments within the periods defined in the **Contractual Security Obligations** (see Section 9).

### 6.6 Open-Source Software (OSS) Policy

Where [Organization Name] or its suppliers incorporate open-source software components:

- All OSS components must be listed in the SBOM.
- OSS components must originate from official, authorised repositories (e.g., PyPI, npm, Maven Central, GitHub with verified authors).
- OSS components must be assessed for active maintenance, community health, and known vulnerabilities before adoption.
- Unmaintained or abandoned OSS components must not be used in NCII environments without CISO-approved compensating controls.
- License compatibility must be verified to avoid intellectual property risk.

---

## 7. Hardware Provenance Verification

*This section addresses risks associated with counterfeit, tampered, or maliciously modified hardware. Authors should define specific verification processes for their hardware categories and supply chains.*

### 7.1 Policy Statement

[Organization Name] requires verification of the **provenance, authenticity, and integrity** of all hardware procured for use in NCII environments. Hardware supply chain compromises — including counterfeit components, implanted backdoors, and firmware tampering — represent a critical and difficult-to-detect threat vector. This section establishes controls to reduce this risk.

### 7.2 Approved Supplier and Distributor List

*Maintain and reference a list of pre-approved hardware suppliers and authorised distributors. Procurement must only source from this list unless a specific exception is approved.*

Hardware for NCII environments must be procured exclusively from:

- **Original Equipment Manufacturers (OEMs)** or their **authorised resellers and distributors**.
- Suppliers listed on the [Organization Name] **Approved Hardware Supplier Register** (see Appendix B).

Procurement from secondary markets, grey-market distributors, or online marketplaces (e.g., third-party marketplace sellers) is **prohibited** for hardware destined for NCII environments without explicit written approval from the CISO.

### 7.3 Hardware Verification Requirements

All hardware delivered for NCII use must be subjected to the following verification steps before deployment:

| Verification Step | Description | Responsible Party |
|---|---|---|
| **Visual Inspection** | Inspect for signs of physical tampering, repackaging, or counterfeit labelling | IT Operations / Receiving Team |
| **Serial Number Verification** | Confirm serial numbers against manufacturer records and purchase orders | IT Operations / Procurement |
| **Manufacturer Authenticity Check** | Verify authenticity via manufacturer's online portal, holographic labels, or anti-counterfeiting features | IT Operations |
| **Firmware Version Verification** | Confirm firmware version matches manufacturer's official release upon first power-on | Information Security |
| **Secure Boot Verification** | Confirm Secure Boot is enabled and firmware integrity verified before deployment | Information Security |
| **Supply Chain Documentation Review** | Verify chain of custody documentation accompanies the shipment | Procurement |

### 7.4 High-Risk Hardware Categories

The following hardware categories are subject to **enhanced provenance verification**, including third-party laboratory testing or NACSA-approved assessments, where required:

- Core network infrastructure (routers, switches, firewalls)
- Servers hosting NCII workloads
- Hardware Security Modules (HSMs)
- Industrial Control Systems (ICS) and SCADA components
- Telecommunications equipment
- Hardware with embedded cellular, Bluetooth, or Wi-Fi radios not specified in design documentation

### 7.5 Country of Origin and Geopolitical Risk

*Document the organisation's approach to assessing country-of-origin risks for hardware and components. Reference any applicable government advisories or NACSA directives.*

[Organization Name] will assess **country of origin risk** for all Tier 1 and Tier 2 hardware acquisitions. Where hardware originates from, or its manufacturing supply chain passes through, jurisdictions identified as presenting elevated geopolitical or security risk, the following additional controls apply:

- [ ] Independent technical assessment or hardware security testing.
- [ ] CISO and, where appropriate, Board approval before procurement.
- [ ] Enhanced monitoring of devices post-deployment.
- [ ] Review of any applicable NACSA directives or Malaysian government advisories.

### 7.6 Chain of Custody Documentation

Suppliers must provide **chain of custody documentation** for all Tier 1 hardware deliveries. This documentation must:

- Identify all parties in the supply chain from OEM to delivery.
- Record all handling, storage, and transportation events.
- Be retained by [Organization Name] for a minimum of [X] years.

---

## 8. Supply Chain Incident Notification

*This section aligns supply chain incident response with Act 854, Section 28 obligations. Authors should cross-reference the organisation's Incident Response Policy and ensure notification timelines are consistent.*

### 8.1 Policy Statement

[Organization Name] is required under **Section 28 of the Cyber Security Act 2024** to report cyber security incidents — including those originating from supply chain compromises — to **NACSA** within prescribed timeframes. This section establishes the requirements for detecting, assessing, escalating, and reporting supply chain incidents, and defines obligations on suppliers to notify [Organization Name] promptly.

### 8.2 Definition of a Supply Chain Incident

For the purposes of this policy, a **supply chain incident** includes, but is not limited to:

- Discovery of malicious code, backdoors, or unauthorised functionality in software or firmware supplied to [Organization Name].
- Confirmed or suspected compromise of a supplier's systems that may have impacted software, data, or services delivered to [Organization Name].
- Discovery of counterfeit or tampered hardware within [Organization Name]'s NCII environment.
- Unauthorised modification of software or hardware during transit or storage.
- A supplier experiencing a significant cyber security incident (e.g., ransomware, data breach) that may affect [Organization Name]'s NCII operations.
- Discovery of a critical vulnerability (CVSS ≥ 9.0) in a software component actively deployed in NCII environments.

### 8.3 Supplier Notification Obligations

*Contractual requirements placed on suppliers regarding incident notification are detailed in Section 9. This section describes the internal handling of those notifications.*

All Tier 1 and Tier 2 suppliers are contractually required to notify [Organization Name] of any potential or confirmed supply chain incident within the timeframes specified below:

| Incident Severity | Supplier Notification to [Organization Name] |
|---|---|
| **Critical** (direct impact or high-confidence potential impact on NCII) | Within **4 hours** of supplier becoming aware |
| **High** (potential impact on [Organization Name]; under investigation) | Within **12 hours** of supplier becoming aware |
| **Medium** (limited impact; supplier investigating) | Within **24 hours** of supplier becoming aware |
| **Low** (minimal impact; informational) | Within **5 business days** |

### 8.4 Internal Escalation and Reporting

Upon receipt of a supplier incident notification, or upon internal detection of a supply chain incident, [Organization Name] will:

1. **Immediately notify** the Information Security Manager (ISM) and CISO.
2. **Activate** the Incident Response team in accordance with the **Incident Response Policy [Doc ID]**.
3. **Assess** the potential impact on NCII systems within [X] hours of notification.
4. **Notify NACSA** in accordance with Section 28 of Act 854 and any applicable NACSA reporting guidelines.
5. **Notify** relevant internal stakeholders (e.g., Board, Legal, Compliance, Affected Business Units) as required by internal escalation protocols.

### 8.5 NACSA Incident Reporting Obligations

| Reporting Milestone | Timeframe | Content Requirements |
|---|---|---|
| **Initial Notification** | As prescribed by NACSA (refer to current NACSA reporting guidelines) | Incident description, affected systems, initial assessment |
| **Interim Update** | As prescribed by NACSA | Investigation status, containment actions, revised impact assessment |
| **Final Report** | As prescribed by NACSA | Root cause analysis, full impact assessment, remediation actions, lessons learned |

*Authors must confirm current NACSA reporting timeframes with the Legal and Compliance team, as these may be updated by NACSA directive.*

### 8.6 Supply Chain Incident Response Actions

| Phase | Actions |
|---|---|
| **Identification** | Confirm and scope the incident; identify affected components, systems, and suppliers |
| **Containment** | Isolate affected systems; suspend affected supplier access; implement emergency patches or workarounds |
| **Eradication** | Remove malicious components or compromised assets; reimage or replace affected hardware as necessary |
| **Recovery** | Restore systems from verified clean backups; validate integrity before returning to production |
| **Post-Incident Review** | Root cause analysis; assessment of contractual remedies; lessons learned; policy and control updates |

---

## 9. Contractual Security Obligations

*This section defines the minimum security requirements that must be embedded in all supplier contracts. Authors should work with Legal to ensure these clauses are appropriately drafted and enforceable.*

### 9.1 Policy Statement

All suppliers providing goods or services in scope of this policy must execute binding contractual instruments that incorporate [Organization Name]'s minimum security requirements. **No in-scope supplier engagement may proceed without an executed agreement containing the mandatory clauses specified in this section.**

### 9.2 Mandatory Contract Clauses

The following security clauses are **mandatory** for all Tier 1 and Tier 2 supplier contracts. Tier 3 contracts must include clauses marked with (T3):

| # | Clause | Tier Applicability |
|---|---|---|
| 1 | Obligation to comply with [Organization Name]'s Supply Chain Security Policy and any updates thereto (T3) | Tier 1, 2, 3 |
| 2 | Right of [Organization Name] to audit supplier's security controls, with reasonable notice | Tier 1, 2 |
| 3 | Obligation to maintain and provide SBOM for all software (T3 for software suppliers) | Tier 1, 2, 3 |
| 4 | Incident notification obligations and timeframes as specified in Section 8.3 (T3) | Tier 1, 2, 3 |
| 5 | Obligation to maintain and provide evidence of security certifications (e.g., ISO 27001, SOC 2) | Tier 1, 2 |
| 6 | Prohibition on sub-contracting in-scope work without prior written approval | Tier 1, 2 |
| 7 | Flow-down obligations — supplier must impose equivalent obligations on approved sub-contractors | Tier 1, 2 |
| 8 | Obligation to notify [Organization Name] of any changes to ownership, key personnel, or security posture | Tier 1, 2 |
| 9 | Vulnerability disclosure and patching SLA obligations | Tier 1, 2 |
| 10 | Data protection obligations consistent with PDPA (T3 where personal data is processed) | Tier 1, 2, 3 |
| 11 | Termination for cause provisions triggered by material security breach | Tier 1, 2 |
| 12 | Indemnification and liability provisions for security incidents caused by supplier | Tier 1, 2 |
| 13 | Obligation to maintain cyber insurance at specified minimum coverage levels | Tier 1 |
| 14 | Hardware authenticity and chain of custody warranty | Tier 1, 2 (hardware) |
| 15 | Obligation to cooperate with NACSA and law enforcement investigations | Tier 1, 2 |

### 9.3 Minimum Security Standards Required of Suppliers

Tier 1 and Tier 2 suppliers must demonstrate ongoing compliance with a recognised security standard. Acceptable evidence includes:

| Standard / Certification | Acceptable As |
|---|---|
| ISO/IEC 27001:2022 (current certificate) | Primary evidence |
| SOC 2 Type II Report (within 12 months) | Primary evidence |
| CSA STAR (Level 2 or above) | Primary evidence (cloud services) |
| PCI DSS (where applicable) | Supplementary evidence |
| NIST CSF or equivalent framework assessment | Supplementary evidence |

### 9.4 Vulnerability Patching SLAs

The following patching SLAs must be included in all Tier 1 and Tier 2 contracts:

| CVSS Score | Severity | Patch / Mitigation Deadline |
|---|---|---|
| 9.0 – 10.0 | **Critical** | Within **48 hours** of CVE publication or notification |
| 7.0 – 8.9 | **High** | Within **7 calendar days** |
| 4.0 – 6.9 | **Medium** | Within **30 calendar days** |
| 0.1 – 3.9 | **Low** | Within **90 calendar days** or next scheduled release |

### 9.5 Right of Audit

[Organization Name] reserves the right to conduct, or commission an independent third party to conduct, security audits of Tier 1 and Tier 2 suppliers. Audit rights include:

- Review of security policies, procedures, and certifications.
- Technical security assessments (e.g., vulnerability scans, configuration reviews).
- On-site visits to supplier premises (with [X] business days' notice for planned audits).
- Emergency audits (with [X] hours' notice) in response to a confirmed or suspected security incident.

Audit costs are the responsibility of [Organization Name] unless the audit reveals a material security breach, in which case costs may be recovered from the supplier in accordance with the contract terms.

### 9.6 Supplier Contract Review Cycle

| Tier | Contract Review Frequency |
|---|---|
| Tier 1 | Annual security review and reaffirmation of obligations |
| Tier 2 | Biennial security review |
| Tier 3 | At contract renewal |
| Tier 4 | Standard commercial terms apply |

---

## 10. Ongoing Supplier Monitoring

*This section defines the continuous assurance activities applied throughout the supplier relationship lifecycle. Authors should specify the tools, processes, and escalation triggers used in their environment.*

### 10.1 Policy Statement

The security assessment conducted at supplier onboarding represents a point-in-time view. [Organization Name] maintains **continuous visibility** over the security posture of its in-scope suppliers through a structured monitoring programme, proportionate to supplier risk tier.

### 10.2 Supplier Monitoring Activities

| Monitoring Activity | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|---|---|---|---|---|
| Annual Supplier Security Questionnaire | Mandatory | Mandatory | Mandatory | Optional |
| Continuous Threat Intelligence Monitoring | Mandatory | Recommended | — | — |
| Annual Independent Security Audit Review | Mandatory | Mandatory | — | — |
| Penetration Test Results Review | Annual | Biennial | — | — |
| SBOM Continuous Vulnerability Scanning | Mandatory | Mandatory | Mandatory (software) | — |
| Supplier Financial Health Review | Annual | Annual | At renewal | — |
| Sub-contractor / 4th Party Risk Review | Annual | Biennial | — | — |
| On-site Assessment | Annual (or as required) | As required | — | — |
| Dark Web / Exposure Monitoring | Mandatory | Recommended | — | — |

### 10.3 Key Performance Indicators for Supplier Security

*Define measurable KPIs used to evaluate supplier security performance. Authors should adapt these to reflect the organisation's contractual SLAs.*

The following KPIs are tracked for all Tier 1 and Tier 2 suppliers:

| KPI | Target | Measurement Frequency |
|---|---|---|
| Incident notification compliance rate | 100% within contracted timeframes | Per incident |
| Critical vulnerability patching compliance | 100% within 48 hours | Per CVE |
| High vulnerability patching compliance | ≥ 95% within 7 days | Monthly |
| Security questionnaire completion rate | 100% within [X] days of request | Annual |
| Valid security certification maintained | 100% | Continuous |
| SBOM currency (age of most recent SBOM) | ≤ [X] days for Tier 1; ≤ [X] days for Tier 2 | Monthly |
| Audit findings — Critical/High severity | 0 unmitigated after [X] days | Per audit |

### 10.4 Supplier Risk Register

[Organization Name] maintains a **Supply Chain Risk Register** that records:

- All in-scope suppliers, their risk tier, and current risk rating.
- Outstanding risk treatment actions and due dates.
- Audit findings and remediation status.
- Incident history.
- Contract expiry and review dates.
- Approved exceptions and risk acceptances.

The Supply Chain Risk Register is reviewed by the CISO (or delegate) on a **monthly** basis and presented to [Risk Committee / Board Risk Committee] on a **quarterly** basis.

### 10.5 Supplier Performance Escalation

Where a supplier fails to meet security obligations or exhibits deteriorating security posture, the following escalation pathway applies:

| Trigger | Escalation Action |
|---|---|
| Missed patching SLA (non-critical) | Written notice to supplier; remediation plan required within [X] days |
| Repeated SLA breaches | Formal breach notice; escalation to senior supplier management |
| Critical security finding unmitigated after [X] days | CISO engagement; contractual remedies considered |
| Confirmed security incident at supplier impacting [Organization Name] | Invoke Incident Response; legal review; consider contract termination |
| Supplier fails or is acquired by a higher-risk entity | Immediate risk reassessment; CISO approval required to continue engagement |

### 10.6 Supplier Offboarding

When a supplier relationship is terminated, [Organization Name] will ensure:

- [ ] All supplier access to [Organization Name] systems, networks, and data is revoked promptly.
- [ ] Supplier-held [Organization Name] data is securely returned or destroyed, with certification.
- [ ] Credentials, tokens, and API keys associated with the supplier are rotated.
- [ ] SBOM and chain of custody records are retained in accordance with the retention schedule.
- [ ] Any ongoing obligations (e.g., confidentiality, incident notification) that survive termination are documented and communicated.

---

## 11. Roles and Responsibilities

*Define accountability for supply chain security across the organisation. The RACI matrix below should be adapted to reflect the actual roles and structure of [Organization Name].*

### 11.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Information Security Manager | Procurement / Vendor Mgmt | Legal | Business Unit Owner | IT Operations | Risk & Compliance | Board / Risk Committee |
|---|---|---|---|---|---|---|---|---|
| Approve Supply Chain Security Policy | A | C | C | C | I | I | C | I |
| Maintain Supply Chain Risk Register | C | R | C | — | C | I | A | I |
| Conduct Supplier Tier Classification | A | R | C | — | C | — | C | — |
| Conduct Pre-Procurement Risk Assessment | A | R | R | C | C | — | C | — |
| Draft and Review Contractual Security Clauses | C | C | R | A | I | — | C | — |
| Manage SBOM Inventory and Vulnerability Scanning | A | R | — | — | I | R | C | — |
| Conduct Hardware Provenance Verification | C | A | C | — | I | R | — | — |
| Monitor Supplier Security Performance | A | R | R | — | C | C | C | I |
| Manage Supply Chain Incidents | A | R | C | C | C | R | C | I |
| Report Incidents to NACSA (Act 854 s28) | A | R | — | C | I | — | C | I |
| Conduct Supplier Audits | A | R | C | C | C | C | — | — |
| Annual Policy Review | A | R | C | C | C | I | C | I |
| Board/Risk Committee Reporting | R | C | C | — | — | — | C | A |

### 11.2 Key Roles — Definitions

| Role | Responsibility |
|---|---|
| **CISO** | Ultimate accountability for supply chain security policy and compliance. Approves high-risk supplier engagements and risk acceptances. |
| **Information Security Manager** | Day-to-day operational responsibility for supply chain risk assessment, monitoring, and incident response. |
| **Procurement / Vendor Management** | Responsible for embedding security requirements into the procurement process and managing supplier contracts. |
| **Legal** | Responsible for drafting and reviewing contractual security clauses and managing legal remedies for supplier breaches. |
| **Business Unit Owner** | Accountable for identifying and managing supply chain risks within their business domain; participate in risk assessments for systems under their ownership. |
| **IT Operations** | Responsible for hardware verification, SBOM ingestion, and technical controls related to supplier-provided components. |
| **Risk & Compliance** | Maintain the Supply Chain Risk Register; provide oversight and reporting to governance bodies. |
| **Board / Risk Committee** | Oversight and approval of policy; receive quarterly supply chain risk reporting. |

---

## 12. Non-Compliance and Enforcement

*Describe the consequences of non-compliance with this policy, both internally (for employees) and externally (for suppliers).*

### 12.1 Internal Non-Compliance

Failure by [Organization Name] employees or internal stakeholders to comply with this policy may result in:

- Disciplinary action in accordance with [Organization Name]'s **Disciplinary Policy**, up to and including termination of employment.
- Referral to relevant professional or regulatory bodies where applicable.
- Personal liability where non-compliance results in a regulatory breach under Act 854.

### 12.2 Supplier Non-Compliance

Where a supplier is found to be in breach of their contractual security obligations, [Organization Name] may take one or more of the following actions:

- Issue a formal written notice of breach and require a remediation plan.
- Suspend supplier access to systems pending remediation.
- Impose contractual penalties (where specified in the contract).
- Initiate contract termination for material breach.
- Seek indemnification for losses arising from the breach.
- Report the breach to relevant authorities where required.

### 12.3 Policy Exceptions

Requests for exceptions to this policy must be:

1. Submitted in writing to the CISO, via the **Information Security Exception Register**.
2. Accompanied by a documented risk assessment and proposed compensating controls.
3. Approved by the CISO (and the Board, for Tier 1 exceptions).
4. Time-limited and subject to review at intervals not exceeding [X] months.
5. Recorded in the Supply Chain Risk Register.

Exceptions do not override statutory obligations under Act 854.

---

## 13. Review and Approval

### 13.1 Review Cycle

This policy is subject to **annual review**, or earlier if:

- A significant supply chain incident occurs that reveals a gap in policy coverage.
- A new or amended NACSA direction or regulatory instrument is issued.
- A material change to [Organization Name]'s NCII systems or supplier landscape occurs.
- An internal or external audit identifies a material deficiency in policy content.

### 13.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author] | Initial version |
| [1.1] | [Date] | [Author] | [Description of changes] |
| [2.0] | [Date] | [Author] | [Description of changes] |

### 13.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Name] | [Signature] | [Date] |
| Chief Procurement Officer / Head of Procurement | [Name] | [Signature] | [Date] |
| Chief Risk Officer / Head of Risk | [Name] | [Signature] | [Date] |
| General Counsel / Head of Legal | [Name] | [Signature] | [Date] |
| Chief Executive Officer | [Name] | [Signature] | [Date] |
| Board Risk Committee Chairman | [Name] | [Signature] | [Date] |

---

## 14. References

*List all regulatory instruments, standards, and internal policy documents referenced in this policy.*

### 14.1 Legislation and Regulations

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duty of NCII entities to comply with NACSA directions, including supply chain security directives |
| **Cyber Security Act 2024 (Act 854), Section 28** | Duty of NCII entities to report cyber security incidents to NACSA within prescribed timeframes |
| **Personal Data Protection Act 2010 (Act 709)** | Obligations relating to processing of personal data by suppliers |
| [Other applicable Malaysian legislation] | [Description] |

### 14.2 Regulatory Guidelines and Directives

| Reference | Description |
|---|---|
| **NACSA NCII Sector Security Standards** | Sector-specific security requirements for designated NCII operators |
| **NACSA Direction [Reference / Date]** | [Description of specific NACSA directions received] |
| **Bank Negara Malaysia — Risk Management in Technology (RMiT)** | Technology service provider and outsourcing requirements (where applicable to financial sector entities) |

### 14.3 Standards and Frameworks

| Reference | Description |
|---|---|
| **ISO/IEC 27001:2022** | Information security management systems — Requirements (Annex A.5.19–5.22: Supplier relationships) |
| **ISO/IEC 27036** | Information security for supplier relationships |
| **ISO/IEC 27002:2022** | Information security controls guidance — Clause 5.19–5.22 |
| **NIST SP 800-161r1** | Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations |
| **NIST SP 800-53 Rev. 5** | Security and Privacy Controls — SA Family (System and Services Acquisition) |
| **CycloneDX SBOM Standard** | OWASP standard for Software Bill of Materials |
| **SPDX 2.3** | Linux Foundation — Software Package Data Exchange standard |

### 14.4 Internal Policy Documents

| Document | Document ID |
|---|---|
| Information Security Policy | [Doc ID] |
| Third-Party Risk Management Policy | [Doc ID] |
| Incident Response Policy | [Doc ID] |
| Data Protection Policy | [Doc ID] |
| Business Continuity Policy | [Doc ID] |
| Procurement Policy | [Doc ID] |
| Information Asset Management Policy | [Doc ID] |

---

## 15. Appendices

### Appendix A — Supply Chain Risk Register Template

*This register must be maintained by the Risk & Compliance team and updated at least quarterly. The CISO reviews the register monthly.*

| # | Supplier Name | Supplier Tier | Services/Goods Supplied | Inherent Risk Score | Controls in Place | Residual Risk Score | Risk Owner | Risk Treatment | Next Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [Supplier Name] | [1/2/3/4] | [Description] | [Score] | [Description] | [Score] | [Name] | [Avoid/Mitigate/Transfer/Accept] | [Date] | [Open/Closed] |
| 2 | | | | | | | | | | |

---

### Appendix B — Approved Hardware Supplier Register

*This register is maintained by Procurement and reviewed annually by the CISO. All hardware for NCII environments must be sourced from suppliers on this register.*

| # | Supplier / OEM Name | Product Categories | Approval Date | Approved By | Expiry / Review Date | Notes |
|---|---|---|---|---|---|---|
| 1 | [Supplier Name] | [e.g., Network Equipment] | [Date] | [Name] | [Date] | [Any restrictions] |
| 2 | | | | | | |

---

### Appendix C — Supplier Security Questionnaire (Outline)

*The full Supplier Security Questionnaire is maintained as a standalone document [Document ID]. The outline below summarises the key domains covered.*

| Domain | Key Questions |
|---|---|
| **Governance** | Does the supplier have a documented Information Security Policy? Who is accountable for cyber security at the Board level? |
| **Risk Management** | Does the supplier conduct annual risk assessments? Is supply chain risk formally assessed? |
| **Access Control** | How is privileged access to systems managed? Are multi-factor authentication (MFA) controls in place? |
| **Vulnerability Management** | What is the supplier's vulnerability scanning and patching cadence? How are critical patches managed? |
| **Incident Response** | Does the supplier have a documented Incident Response Plan? When was it last tested? |
| **Business Continuity** | Does the supplier have a Business Continuity Plan covering services provided to [Organization Name]? |
| **Sub-contracting** | Does the supplier sub-contract any in-scope services? How are sub-contractors assessed? |
| **Software Security** | Does the supplier implement secure development lifecycle practices? Can SBOMs be provided? |
| **Physical Security** | What physical access controls are in place at facilities where [Organization Name] data is processed? |
| **Certifications** | What security certifications does the supplier hold? Provide current certificates. |

---

### Appendix D — Supply Chain Incident Notification Form Template

*Suppliers must complete and submit this form to [Organization Name]'s designated security contact upon discovery of a potential or confirmed supply chain incident. Contact: [Security Contact Email / Portal URL]*

**SUPPLIER INCIDENT NOTIFICATION**

| Field | Details |
|---|---|
| **Supplier Name** | |
| **Contact Name and Role** | |
| **Contact Email / Phone** | |
| **Date / Time of Notification** | |
| **Date / Time Incident Discovered** | |
| **Incident Reference Number (Supplier)** | |
| **Incident Summary** | |
| **Affected Products / Services / Components** | |
| **Potential Impact on [Organization Name]** | |
| **Current Status** | [Under Investigation / Contained / Remediated] |
| **Immediate Actions Taken** | |
| **Next Steps and Estimated Timeline** | |
| **Additional Contacts** | |

---

### Appendix E — SBOM Minimum Content Checklist

*To be completed by the Information Security team upon receipt of each SBOM from a supplier.*

| Requirement | Present (Y/N) | Notes |
|---|---|---|
| Supplier name and contact information | | |
| Software product name and version | | |
| All direct dependencies listed | | |
| All transitive dependencies listed | | |
| Component identifiers (CPE / PURL) | | |
| License information for each component | | |
| Known CVEs mapped at time of generation | | |
| Cryptographic hashes (SHA-256 or stronger) | | |
| SBOM generation timestamp | | |
| SBOM author and tooling | | |
| Format: CycloneDX / SPDX / SWID | | |
| SBOM accepted by Information Security team | | |
| Date of acceptance | | |
| Reviewed by | | |

---

### Appendix F — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — primary Malaysian legislation governing cyber security for NCII |
| **CVSS** | Common Vulnerability Scoring System — industry standard for rating the severity of software vulnerabilities |
| **CVE** | Common Vulnerabilities and Exposures — a catalogue of publicly disclosed security vulnerabilities |
| **NCII** | National Critical Information Infrastructure — systems and infrastructure designated under Act 854 as critical to national security, public safety, economic stability, or public health |
| **NACSA** | National Cyber Security Agency — the competent authority under Act 854 |
| **SBOM** | Software Bill of Materials — a formal, machine-readable inventory of software components and their dependencies |
| **OEM** | Original Equipment Manufacturer |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **MSP / MSSP** | Managed Service Provider / Managed Security Service Provider |
| **Tier 1–4** | Supplier risk tiers as defined in Section 5.1 of this policy |
| **4th Party Risk** | Risk arising from a supplier's own suppliers (sub-contractors) |
| **SOC 2** | Service Organization Control 2 — an auditing standard for service organisations |
| **ICS** | Industrial Control Systems |
| **SCADA** | Supervisory Control and Data Acquisition |
| **HSM** | Hardware Security Module |
| **CPE** | Common Platform Enumeration — a structured naming scheme for IT systems, software, and packages |
| **PURL** | Package URL — a standard for identifying and locating software packages |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential
**Owner:** CISO / Procurement | **Next Review:** [Next Review Date]
**© [Organization Name] — This document is the property of [Organization Name] and must not be reproduced or distributed without authorisation.**