# Vendor Onboarding Security Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Procurement / Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified **Confidential**. Distribution is restricted to authorised personnel with a legitimate need to know. Unauthorised disclosure, reproduction, or transmission is prohibited. This procedure supports compliance with the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 28, as administered by the National Cyber Security Agency (NACSA).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory Framework and Obligations](#3-regulatory-framework-and-obligations)
4. [Roles and Responsibilities](#4-roles-and-responsibilities)
5. [Vendor Security Questionnaire and Assessment](#5-vendor-security-questionnaire-and-assessment)
6. [Due Diligence Checklist](#6-due-diligence-checklist)
7. [Licence Verification — Act 854 Section 28](#7-licence-verification--act-854-section-28)
8. [Contractual Security Requirements](#8-contractual-security-requirements)
9. [Access Provisioning for Vendors](#9-access-provisioning-for-vendors)
10. [Ongoing Monitoring and Review Schedule](#10-ongoing-monitoring-and-review-schedule)
11. [Procedure Exceptions and Escalation](#11-procedure-exceptions-and-escalation)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This procedure establishes the mandatory security assessment and onboarding process for all vendors, third-party service providers, and contractors who will access, service, or otherwise interact with [Organization Name]'s National Critical Information Infrastructure (NCII) systems, networks, or data.

The procedure ensures that [Organization Name] meets its obligations under the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 18** — which imposes duties on NCII Sector Leads and NCII Entities to ensure the security of NCII assets, including obligations extending to third parties who operate or have access to such assets; and
- **Section 28** — which requires that only licensed Cyber Security Service Providers (CSSPs) are engaged to provide regulated cyber security services.

This procedure also supports alignment with [Organization Name]'s broader Information Security Policy, relevant Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) obligations, and the Personal Data Protection Act 2010 (PDPA) where vendor engagements involve the processing of personal data.

### 1.2 Scope

This procedure applies to:

- All **new vendors** seeking to provide goods or services that require access (physical, logical, or remote) to NCII systems or related environments.
- All **existing vendors** undergoing contract renewal or scope-of-work expansion that introduces new access to NCII systems.
- All **subcontractors** nominated by a primary vendor where sub-contractor access to NCII assets is required.
- Internal stakeholders including Procurement, IT, CISO Office, Legal, and Risk Management teams involved in vendor engagement.

This procedure does **not** apply to:

- Vendors with no direct or indirect access to NCII systems, classified data, or NCII-adjacent network segments.
- Intra-group service arrangements governed by a separate Group Entity Access Policy.

### 1.3 Guiding Principles

- No vendor shall be granted access to NCII systems prior to completing this procedure in full.
- Security requirements are non-negotiable and are applied consistently regardless of vendor size or commercial relationship.
- All vendor assessments shall be risk-based, with higher-risk engagements subject to enhanced due diligence.

---

## 2. Definitions and Abbreviations

*This section defines key terms used throughout this procedure. Amend or extend definitions as appropriate for your organisation's context.*

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — the principal legislation governing cyber security of NCII in Malaysia, administered by NACSA. |
| **CISO** | Chief Information Security Officer — the designated owner of information and cyber security governance within [Organization Name]. |
| **CSSP** | Cyber Security Service Provider — a person or entity licensed under Act 854 Section 28 to provide regulated cyber security services. |
| **NCII** | National Critical Information Infrastructure — computer, computer system, or network that is critical to national security, the economy, or public safety, as designated under Act 854. |
| **NACSA** | National Cyber Security Agency — the competent authority responsible for administering Act 854 in Malaysia. |
| **Third Party / Vendor** | Any external entity, supplier, contractor, or consultant engaged by [Organization Name] under a commercial or contractual arrangement. |
| **Vendor Onboarding** | The end-to-end process of evaluating, approving, and activating a vendor prior to commencing contracted services. |
| **VSQ** | Vendor Security Questionnaire — a structured assessment instrument used to evaluate a vendor's cyber security posture. |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix. |
| **DPA** | Data Processing Agreement — a contract governing the processing of personal data on behalf of [Organization Name]. |
| **MOU / NDA** | Memorandum of Understanding / Non-Disclosure Agreement. |
| **RMiT** | Risk Management in Technology — BNM Policy Document applicable to financial institutions. |
| **PDPA** | Personal Data Protection Act 2010 — Malaysian legislation governing the processing of personal data. |

---

## 3. Regulatory Framework and Obligations

*Summarise the specific regulatory obligations that this procedure satisfies. Reference exact section numbers to support auditability.*

### 3.1 Cyber Security Act 2024 (Act 854)

| Section | Obligation | Relevance to This Procedure |
|---|---|---|
| **Section 18** | Duties of NCII Sector Leads and NCII Entities to implement cyber security measures and manage third-party risk to NCII assets. | Mandates that [Organization Name] ensure vendors accessing NCII systems are assessed and held to defined security standards. |
| **Section 28** | Prohibition on engaging unlicensed Cyber Security Service Providers for regulated services. | Requires verification of CSSP licence prior to engagement for applicable services (e.g., penetration testing, SOC services, incident response). |

### 3.2 Supporting Regulatory Instruments

| Instrument | Issuing Body | Relevance |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia (BNM) | Third-party risk management, outsourcing controls, technology risk. |
| Personal Data Protection Act 2010 (PDPA) | PDPC | Governs vendor processing of personal data; requires Data Processing Agreements. |
| NACSA National Cyber Security Policy (NCSP) | NACSA | Overarching cyber security policy framework for NCII sectors. |
| [Organization Name] Information Security Policy | CISO Office | Internal policy governing information security requirements extended to vendors. |

---

## 4. Roles and Responsibilities

*The following RACI matrix defines accountability for each stage of the vendor onboarding security procedure. Adjust roles to reflect your organisational structure.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Procurement | CISO / InfoSec Team | IT / Infrastructure | Legal / Compliance | Risk Management | Business Owner |
|---|---|---|---|---|---|---|
| Initiate vendor onboarding request | R | I | I | I | I | A |
| Distribute and collect Vendor Security Questionnaire (VSQ) | R | C | I | I | I | I |
| Evaluate VSQ responses and assign risk rating | C | R/A | C | I | C | I |
| Conduct due diligence verification | R | C | I | C | C | I |
| Verify CSSP licence (Act 854 s28) | C | R | I | C | I | I |
| Review and approve contractual security clauses | C | C | R/A | I | C | I |
| Execute vendor contract / DPA | A | C | I | R | C | I |
| Provision vendor access to NCII systems | I | C | R/A | I | I | I |
| Conduct periodic vendor security review | C | R/A | C | C | C | I |
| Escalate non-compliance findings | I | R | I | A | C | I |
| Maintain vendor register | R/A | C | I | I | I | I |
| Approve exceptions to this procedure | I | C | I | C | C | A |

---

## 5. Vendor Security Questionnaire and Assessment

*This section governs the structured security questionnaire that all vendors must complete as the first stage of the onboarding assessment. The VSQ establishes a baseline security posture for risk-tiering decisions.*

### 5.1 Questionnaire Trigger

A Vendor Security Questionnaire (VSQ) must be issued to all prospective vendors prior to contract execution where the proposed engagement involves:

- Logical or physical access to NCII systems, data centres, or classified network segments.
- Processing, storing, or transmitting [Organization Name] data classified as **Confidential** or above.
- Provision of regulated cyber security services as defined under Act 854 Section 28.
- Remote access capabilities into [Organization Name]'s environment.

### 5.2 VSQ Domains

The VSQ shall assess the vendor across the following domains at minimum:

| Domain | Example Controls Assessed |
|---|---|
| **1. Organisational Security** | Security policy, security governance structure, named security contact |
| **2. Human Resources Security** | Background screening, security awareness training, employee termination procedures |
| **3. Access Control** | Privileged access management, MFA enforcement, access review processes |
| **4. Asset Management** | Asset inventory, classification scheme, device management (MDM/EDR) |
| **5. Cryptography** | Encryption standards at rest and in transit, key management |
| **6. Physical and Environmental Security** | Data centre certifications (e.g., ISO 27001, Tier classification), visitor control |
| **7. Operations Security** | Patch management, vulnerability management, malware protection, logging |
| **8. Communications Security** | Network segmentation, secure remote access (VPN/zero-trust), DLP |
| **9. Incident Management** | Incident response plan, breach notification timelines, tabletop exercise history |
| **10. Business Continuity** | BCP/DRP documentation, RTO/RPO commitments, last test date |
| **11. Compliance and Certifications** | ISO 27001, SOC 2, PCI-DSS, CSA STAR, or equivalent certifications held |
| **12. Supply Chain Security** | Subcontractor management, fourth-party risk controls |
| **13. Data Protection** | PDPA compliance, data residency, data retention and deletion policies |

### 5.3 Risk Tier Assignment

Based on VSQ responses, the CISO Office shall assign the vendor to a risk tier:

| Risk Tier | Criteria | Required Actions |
|---|---|---|
| **Tier 1 — Critical** | Direct access to NCII production systems; processes highly sensitive data; provides regulated CSSP services | Enhanced due diligence; on-site or virtual audit; minimum ISO 27001 or SOC 2 Type II required |
| **Tier 2 — High** | Indirect access to NCII environment; processes Confidential data; significant business dependency | Standard due diligence; certification evidence review; contractual audit rights |
| **Tier 3 — Medium** | Limited access to non-critical systems; handles Internal-classified data only | Abridged due diligence; self-attestation acceptable |
| **Tier 4 — Low** | No system access; no sensitive data handling | Acknowledgement of security policy sufficient |

### 5.4 VSQ Evaluation Outcome

| Outcome | Description | Next Step |
|---|---|---|
| **Approved** | VSQ responses meet minimum requirements for assigned tier | Proceed to Due Diligence (Section 6) |
| **Conditionally Approved** | Minor gaps identified; remediation plan accepted | Proceed with documented conditions; re-assess within [X] months |
| **Deferred** | Material gaps identified; vendor must remediate before onboarding | Issue remediation notice; re-submit VSQ after remediation |
| **Rejected** | Critical non-compliance; risk appetite exceeded | Decline engagement; escalate to Risk Management |

---

## 6. Due Diligence Checklist

*This section defines the documentary evidence and verification activities required to substantiate VSQ responses and confirm vendor eligibility for engagement. Evidence collected shall be retained in the Vendor Security Register.*

### 6.1 Standard Due Diligence Requirements

The following items must be collected and verified for **all vendors**:

- [ ] Completed and signed Vendor Security Questionnaire (VSQ)
- [ ] Copy of current **ISO 27001 certificate** or equivalent security certification (where applicable)
- [ ] Company registration documents (SSM registration or equivalent)
- [ ] Completed **Vendor Self-Assessment Declaration** (Appendix A)
- [ ] Signed **Non-Disclosure Agreement (NDA)** / Confidentiality Agreement
- [ ] Confirmation of **Data Protection Officer (DPO)** or nominated data protection contact
- [ ] Evidence of current **cyber insurance coverage** (minimum coverage: [MYR X,000,000])
- [ ] Reviewed and executed **Data Processing Agreement (DPA)** (where personal data is processed)

### 6.2 Enhanced Due Diligence Requirements (Tier 1 and Tier 2 Vendors)

In addition to standard requirements, Tier 1 and Tier 2 vendors must provide:

- [ ] Most recent **external penetration test report** (conducted within the past 12 months by a licensed CSSP)
- [ ] Most recent **vulnerability assessment report** with remediation evidence
- [ ] **SOC 2 Type II report** or equivalent third-party assurance report (Tier 1 only)
- [ ] Evidence of **security awareness training** completion records for personnel accessing [Organization Name] systems
- [ ] **Subcontractor / fourth-party disclosure list** with security attestations
- [ ] **Business Continuity Plan (BCP)** and **Disaster Recovery Plan (DRP)** executive summaries
- [ ] Results of the most recent **BCP/DRP tabletop exercise** or live test
- [ ] Reference contacts from **at least [two (2)] financial institution or NCII sector clients** (Tier 1 only)
- [ ] **On-site or virtual security audit** conducted by [Organization Name] InfoSec team or appointed CSSP (Tier 1 only)

### 6.3 Due Diligence Evidence Register

| Evidence Item | Vendor Provided | Verified By | Verification Date | Expiry / Renewal Date | Remarks |
|---|---|---|---|---|---|
| VSQ (Completed) | [ ] Yes [ ] No | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | |
| ISO 27001 Certificate | [ ] Yes [ ] No | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | |
| NDA / Confidentiality Agreement | [ ] Yes [ ] No | [Name] | [DD/MM/YYYY] | N/A | |
| Data Processing Agreement | [ ] Yes [ ] No | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | |
| Penetration Test Report | [ ] Yes [ ] No | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | |
| Cyber Insurance Certificate | [ ] Yes [ ] No | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | |
| CSSP Licence (if applicable) | [ ] Yes [ ] No | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | |
| BCP/DRP Summary | [ ] Yes [ ] No | [Name] | [DD/MM/YYYY] | [DD/MM/YYYY] | |

---

## 7. Licence Verification — Act 854 Section 28

*This section operationalises the obligation under Section 28 of the Cyber Security Act 2024, which prohibits engaging unlicensed persons or entities to provide regulated cyber security services. This step is mandatory for all vendors providing services that fall within regulated CSSP categories.*

### 7.1 Regulated Cyber Security Services

Under Act 854 Section 28, vendors providing any of the following services to [Organization Name] must hold a valid CSSP licence issued by NACSA:

| Service Category | Examples |
|---|---|
| **Managed Security Services** | SOC-as-a-Service, SIEM management, threat monitoring |
| **Penetration Testing / Red Teaming** | Network, application, physical, and social engineering assessments |
| **Incident Response Services** | Digital forensics, malware analysis, breach response |
| **Vulnerability Assessment Services** | Automated and manual vulnerability identification and reporting |
| **Cyber Security Consulting** | Risk assessments, security architecture advisory, compliance auditing |
| **[Other regulated categories as published by NACSA]** | Refer to the current NACSA CSSP Licence Classification |

> **Important:** [Organization Name] shall not execute a contract for, or allow the commencement of, any regulated cyber security service without first confirming NACSA licence validity. Engaging an unlicensed CSSP constitutes a direct regulatory breach under Act 854.

### 7.2 Licence Verification Process

1. **Identify** whether the proposed vendor service falls within regulated CSSP categories (refer to table above and current NACSA published list).
2. **Request** a copy of the vendor's NACSA CSSP Licence certificate, including:
   - Licence number
   - Licence category / class
   - Licensed entity name (must match contracting entity)
   - Licence issue date and expiry date
3. **Verify** the licence independently via the **NACSA CSSP Register** at [NACSA official portal — insert URL as published by NACSA].
4. **Record** the verification outcome in the Vendor Licence Register (Section 7.3 below).
5. **Re-verify** licence status at each contract renewal and during the annual periodic review.

### 7.3 Vendor Licence Register

*Maintain this register for all vendors providing regulated cyber security services. A separate entry is required per vendor per licence category.*

| Vendor Name | Contracting Entity | NACSA Licence No. | Licence Category | Issue Date | Expiry Date | Verified By | Verification Date | Verification Method | Status |
|---|---|---|---|---|---|---|---|---|---|
| [Vendor Name] | [Legal Entity] | [NACSA-XXXX-XXXX] | [Category] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] | NACSA Portal | Active |
| [Vendor Name] | [Legal Entity] | [NACSA-XXXX-XXXX] | [Category] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] | [DD/MM/YYYY] | NACSA Portal | Active |

### 7.4 Unlicensed Vendor Escalation

If a proposed vendor is found to be unlicensed for a regulated service:

1. The CISO Office shall **immediately suspend** the onboarding process.
2. Procurement shall **notify the Business Owner** and Risk Management.
3. Legal / Compliance shall assess whether any **interim exposure exists** if services have already commenced.
4. The CISO Office shall determine whether the service can be **re-scoped** to fall outside regulated categories or whether an alternative licensed vendor must be sourced.
5. The incident shall be **logged** in the Compliance Incident Register.

---

## 8. Contractual Security Requirements

*This section defines the minimum security obligations that must be embedded in all vendor contracts, service agreements, and supplementary schedules where the vendor has access to NCII systems or [Organization Name] data. Legal team must confirm final contractual language.*

### 8.1 Mandatory Contract Clauses

All vendor contracts must include, at minimum, the following security provisions:

**8.1.1 Compliance with Law and Regulation**

The vendor shall at all times comply with all applicable laws, regulations, and regulatory guidelines, including but not limited to the Cyber Security Act 2024 (Act 854), the Personal Data Protection Act 2010 (PDPA), and relevant BNM policy documents.

**8.1.2 Security Standards and Controls**

The vendor shall implement and maintain information security controls consistent with, at minimum:
- ISO/IEC 27001:2022 Information Security Management, or equivalent; and
- Controls and requirements specified in [Organization Name]'s Vendor Security Schedule (Appendix B).

**8.1.3 Incident Notification**

The vendor shall notify [Organization Name]'s CISO Office within **[X hours — recommended: 4 hours]** of becoming aware of any actual or suspected cyber security incident, data breach, or unauthorised access involving [Organization Name]'s data or systems. Notification shall be made to [security incident contact — insert email/hotline].

**8.1.4 Audit Rights**

[Organization Name] reserves the right to conduct, or commission a third-party to conduct, a security audit, assessment, or penetration test of the vendor's systems and controls as they relate to the [Organization Name] engagement, with [X business days] notice. The vendor shall cooperate fully with such audits.

**8.1.5 Subcontracting**

The vendor shall not subcontract any part of the services involving access to [Organization Name]'s NCII systems or data without prior written approval from [Organization Name]. Approved subcontractors shall be bound by equivalent security obligations.

**8.1.6 Data Return and Destruction**

Upon expiry or termination of the contract, the vendor shall, within **[X calendar days]**, return or securely destroy all [Organization Name] data in its possession, and provide written certification of destruction.

**8.1.7 Personnel Security**

The vendor shall ensure that all personnel accessing [Organization Name]'s systems have completed background verification checks and security awareness training appropriate to their access level. The vendor shall promptly revoke access for any personnel who leave the engagement.

**8.1.8 CSSP Licence Maintenance**

Where the vendor provides regulated cyber security services, the vendor warrants that it holds and will maintain a valid NACSA CSSP licence for the duration of the contract. The vendor shall notify [Organization Name] immediately if its licence is suspended, revoked, or not renewed.

### 8.2 Contract Security Schedule — Summary Checklist

| Contractual Clause | Included in Contract | Clause Reference | Reviewed By | Date |
|---|---|---|---|---|
| Regulatory compliance obligation | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |
| Security standards requirement | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |
| Incident notification obligation | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |
| Audit rights | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |
| Subcontracting restrictions | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |
| Data return / destruction | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |
| Personnel security requirements | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |
| CSSP licence maintenance (if applicable) | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |
| Data Processing Agreement executed | [ ] Yes [ ] No | Separate DPA | [Name] | [DD/MM/YYYY] |
| Liability and indemnity for security breach | [ ] Yes [ ] No | [Clause X.X] | [Name] | [DD/MM/YYYY] |

---

## 9. Access Provisioning for Vendors

*This section governs the provisioning, management, and revocation of vendor access to [Organization Name]'s NCII systems, networks, and data environments. Access must never be provisioned prior to full completion of Sections 5 through 8.*

### 9.1 Access Provisioning Prerequisites

Before any vendor access is provisioned, the following must be confirmed as complete:

- [ ] VSQ evaluated and vendor approved (or conditionally approved with documented conditions)
- [ ] All required due diligence evidence collected and verified
- [ ] CSSP licence verified (if applicable)
- [ ] Contract fully executed including all security schedules and DPA
- [ ] Vendor access request formally submitted and approved (see Section 9.2)
- [ ] Vendor personnel identified, named, and background-checked
- [ ] IT security briefing / onboarding session completed by vendor personnel

### 9.2 Vendor Access Request Process

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Business Owner submits **Vendor Access Request Form** (Appendix C) to IT and CISO Office | Business Owner |
| 2 | CISO Office reviews access scope against approved VSQ risk tier and contract terms | CISO / InfoSec |
| 3 | IT verifies that technical access controls are in place (MFA, logging, network segmentation) | IT / Infrastructure |
| 4 | CISO Office approves or rejects access request | CISO |
| 5 | IT provisions access consistent with least-privilege principle | IT / Infrastructure |
| 6 | Access details confirmed to Business Owner and documented in Vendor Access Register | IT / Procurement |
| 7 | Vendor notified; system access logs baseline established | IT |

### 9.3 Access Control Requirements

All vendor access to NCII systems shall conform to the following mandatory controls:

| Control | Requirement |
|---|---|
| **Principle of Least Privilege** | Access limited to the minimum systems, data, and functions required for the contracted scope |
| **Multi-Factor Authentication (MFA)** | MFA enforced for all remote access sessions without exception |
| **Named Accounts** | Shared or generic accounts are prohibited; each vendor personnel must have a uniquely identified account |
| **Remote Access Method** | Access via approved secure channels only (e.g., [Organization Name]-managed VPN, PAM solution, or zero-trust gateway) |
| **Session Recording** | Privileged sessions shall be recorded via PAM tooling where technically feasible |
| **Time-Bounded Access** | Access accounts shall have defined start and end dates matching the contract term |
| **Network Segmentation** | Vendor access restricted to dedicated vendor network segment; lateral movement to production NCII environment requires additional approval |
| **Data Access Logging** | All vendor access to NCII data shall be logged and retained for a minimum of **[12 months]** |

### 9.4 Vendor Access Register

*Maintain this register for all active vendor access accounts. Review quarterly and at each vendor periodic review.*

| Vendor Name | Personnel Name | Access Account ID | Systems / Scope | Access Level | MFA Enforced | Access Start Date | Access End Date | Last Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| [Vendor] | [Name] | [Account ID] | [Systems] | [Read/Write/Admin] | Yes / No | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | Active / Suspended / Revoked |

### 9.5 Access Revocation

Vendor access shall be revoked immediately (within **[4 hours]** of notification) in the following circumstances:

- Contract expiry or termination.
- Vendor personnel departure from the engagement.
- Identification of a security incident involving vendor access.
- Vendor fails to renew CSSP licence (if applicable).
- CISO Office determination that continued access poses unacceptable risk.

IT shall confirm revocation in writing to the CISO Office and update the Vendor Access Register accordingly.

---

## 10. Ongoing Monitoring and Review Schedule

*This section defines the continuous oversight activities that [Organization Name] will conduct for active vendors with access to NCII systems. Ongoing monitoring is not optional — it is a direct obligation under Act 854 Section 18, which requires NCII Entities to maintain the security of NCII assets on an ongoing basis.*

### 10.1 Monitoring Activities by Tier

| Activity | Tier 1 (Critical) | Tier 2 (High) | Tier 3 (Medium) | Tier 4 (Low) |
|---|---|---|---|---|
| **Periodic Security Review** | Quarterly | Semi-Annual | Annual | Biennial |
| **Vendor Access Log Review** | Monthly | Quarterly | Semi-Annual | Annual |
| **Certificate / Licence Expiry Check** | Monthly | Quarterly | Semi-Annual | Annual |
| **Contractual Compliance Review** | Semi-Annual | Annual | Annual | At Renewal |
| **Re-submission of VSQ** | Annual | Annual | Biennial | At Renewal |
| **On-site / Virtual Security Audit** | Annual | Biennial | At Renewal | Not Required |
| **Incident Notification Review** | Continuous | Continuous | Quarterly | Annual |

### 10.2 Periodic Vendor Security Review Process

At each scheduled review, the CISO Office shall:

1. **Re-assess** the vendor's security posture against current VSQ responses.
2. **Verify** continued validity of security certifications, CSSP licences, and insurance.
3. **Review** access logs for anomalous activity, excessive access, or policy violations.
4. **Evaluate** any security incidents reported by or involving the vendor since the last review.
5. **Confirm** that contract security clauses remain current and reflective of the actual scope of services.
6. **Update** the vendor's risk tier if circumstances have materially changed.
7. **Document** findings and required remediation actions in the Vendor Periodic Review Record (Appendix D).

### 10.3 Key Performance Indicators (KPIs) and Thresholds

| KPI | Target | Escalation Threshold |
|---|---|---|
| VSQ completion rate (new vendors) | 100% | Any vendor onboarded without completed VSQ |
| CSSP licence verification (applicable vendors) | 100% | Any licensed service commenced without verified licence |
| Vendor access review completion (per schedule) | 100% | >30 days overdue triggers CISO escalation |
| Incident notification within agreed SLA | 100% | Any breach of notification SLA |
| Contract security schedule inclusion rate | 100% | Any contract executed without security schedule |
| Vendor access revocation within SLA | 100% | Any access not revoked within [4 hours] of trigger |

### 10.4 Annual Vendor Register Review

[Organization Name] shall conduct a full review of the **Vendor Security Register** annually, no later than **[month — e.g., December]** of each year. This review shall:

- Confirm all active vendors are still within valid contracts.
- Identify and close dormant or expired vendor access accounts.
- Update risk tier classifications based on changes in vendor scope or risk landscape.
- Report findings to the **[Board Risk Committee / CISO / appropriate governance forum]**.

---

## 11. Procedure Exceptions and Escalation

*This section governs circumstances where full compliance with this procedure is not achievable within the required timeframe, and defines the escalation path for unresolved vendor security concerns.*

### 11.1 Procedure Exceptions

Any exception to this procedure must be:

1. Submitted in writing by the Business Owner to the CISO Office using the **Exception Request Form** (Appendix E).
2. Accompanied by a documented **risk justification**, including the specific requirement being excepted, the reason for the exception, and proposed compensating controls.
3. **Reviewed and approved** by the CISO (and Risk Management for Tier 1/2 exceptions).
4. **Time-bound** — exceptions shall not exceed **[90 calendar days]** without re-evaluation.
5. **Logged** in the Exception Register and reported in the next quarterly risk review.

> Exceptions do **not** relieve [Organization Name] of its obligations under Act 854. The CISO must assess whether any exception creates a reportable compliance gap under the Act.

### 11.2 Escalation Matrix

| Trigger | Escalation Path | Timeline |
|---|---|---|
| Vendor refuses to complete VSQ | Procurement → CISO → Business Owner → Risk Committee | Within [3] business days |
| CSSP licence invalid or expired | CISO → Legal → Risk Management | Immediate — same business day |
| Vendor security incident detected | CISO → [Incident Response Procedure] → NACSA (if NCII-affecting) | Per Incident Response SLA |
| Vendor fails periodic review | CISO → Business Owner → Risk Management | Within [5] business days |
| Exception request — Tier 1 vendor | Business Owner → CISO → CRO / Board Risk Committee | Within [5] business days |
| Suspected Act 854 breach by vendor | CISO → Legal → NACSA notification (as required) | Per regulatory obligation |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial release |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [X.X] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 12.2 Review Schedule

This procedure shall be reviewed:

- **Annually**, as a minimum, or
- Following any **material change** in regulatory requirements under Act 854 or related instruments,
- Following a **significant vendor security incident** involving NCII systems, or
- Upon **NACSA guidance** or directive requiring procedural updates.

The CISO is responsible for initiating the review. Proposed amendments must be approved in accordance with Section 12.3.

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | _________________ | [DD/MM/YYYY] |
| Head of Procurement | [Name] | _________________ | [DD/MM/YYYY] |
| Chief Risk Officer (CRO) | [Name] | _________________ | [DD/MM/YYYY] |
| Head of Legal / Compliance | [Name] | _________________ | [DD/MM/YYYY] |
| Chief Executive Officer (CEO) / Authorised Delegate | [Name] | _________________ | [DD/MM/YYYY] |

---

## 13. References

*The following regulatory instruments, standards, and internal policies are directly referenced by or have bearing on this procedure.*

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duties of NCII Entities to ensure the security of NCII — including obligations extending to third-party vendors and service providers accessing NCII assets. |
| **Cyber Security Act 2024 (Act 854), Section 28** | Prohibition on engaging unlicensed Cyber Security Service Providers for regulated cyber security services; licensing requirements administered by NACSA. |
| **NACSA CSSP Licensing Framework** | Regulatory framework governing the licensing of Cyber Security Service Providers in Malaysia; published by NACSA. |
| **Personal Data Protection Act 2010 (Act 709)** | Governs the collection, processing, and storage of personal data; applicable to vendor engagements involving personal data processing on behalf of [Organization Name]. |
| **BNM Risk Management in Technology (RMiT) Policy Document** | BNM policy governing technology risk management for financial institutions, including third-party and outsourcing risk requirements. |
| **ISO/IEC 27001:2022** | International standard for Information Security Management Systems; referenced as the minimum security framework for Tier 1 and Tier 2 vendors. |
| **ISO/IEC 27036** | International standard on information security for supplier relationships; guidance on security requirements in supplier agreements. |
| **[Organization Name] Information Security Policy** | Internal policy governing information security requirements, risk appetite, and controls applicable to all employees and third parties. |
| **[Organization Name] Incident Response Procedure** | Internal procedure defining the organisation's response to cyber security incidents, including vendor-related incidents. |
| **[Organization Name] Data Classification Policy** | Internal policy defining data classification tiers and handling requirements extended to vendors via contractual obligations. |

---

## 14. Appendices

*The following appendices are referenced throughout this procedure. Each appendix is a separate controlled document maintained by the owner indicated.*

### Appendix A — Vendor Self-Assessment Declaration

*A signed declaration from the vendor's authorised signatory confirming the accuracy of VSQ responses, acknowledgement of [Organization Name]'s security requirements, and commitment to maintain the declared security posture for the duration of the engagement.*

**Document Owner:** CISO Office
**Template Location:** [Document Management System path / SharePoint link]

---

### Appendix B — Vendor Security Schedule

*A contractual schedule defining the specific security controls, standards, and obligations applicable to the vendor based on their risk tier. This schedule is incorporated by reference into the main vendor contract. It includes specific technical requirements (e.g., encryption standards, logging requirements, access control specifications) and operational requirements (e.g., security incident notification procedures, audit cooperation obligations).*

**Document Owner:** CISO Office / Legal
**Template Location:** [Document Management System path / SharePoint link]

---

### Appendix C — Vendor Access Request Form

*A structured form submitted by the Business Owner to formally request provisioning of vendor access to [Organization Name] systems. Fields include: vendor name, personnel name(s), systems requested, access level, business justification, contract reference, approved access duration, and CISO approval.*

**Document Owner:** IT / Infrastructure
**Template Location:** [Document Management System path / SharePoint link]

---

### Appendix D — Vendor Periodic Review Record

*A standardised record used to document the findings, outcomes, and required remediation actions from each scheduled periodic vendor security review. Includes: review date, reviewer, vendor risk tier, areas assessed, findings, risk rating of findings, agreed remediation actions, and sign-off.*

**Document Owner:** CISO Office
**Template Location:** [Document Management System path / SharePoint link]

---

### Appendix E — Exception Request Form

*A formal request form for exceptions to any requirement within this procedure. Fields include: requesting Business Owner, vendor name, specific requirement being excepted, business justification, risk assessment, proposed compensating controls, requested exception period, and approval chain.*

**Document Owner:** Risk Management / CISO Office
**Template Location:** [Document Management System path / SharePoint link]

---

### Appendix F — Vendor Security Register (Master)

*The consolidated register maintained by Procurement and the CISO Office listing all vendors subject to this procedure, their assigned risk tier, onboarding status, VSQ completion date, CSSP licence details (if applicable), contract expiry, next review date, and current status (Active / Under Review / Suspended / Offboarded).*

**Document Owner:** Procurement / CISO Office
**Update Frequency:** Continuous; formal review Annual
**Template Location:** [Document Management System path / SharePoint link]

---

### Appendix G — Glossary of Regulated Cyber Security Services (Act 854 s28)

*A reference list of service categories regulated under Act 854 Section 28, as published by NACSA, used by Procurement and the CISO Office to determine whether a proposed vendor engagement triggers the CSSP licence verification requirement in Section 7 of this procedure. This appendix shall be updated promptly following any revision to the NACSA published list.*

**Document Owner:** CISO Office / Legal
**Source:** NACSA Official Publication (refer to NACSA portal for current list)
**Last Updated:** [DD/MM/YYYY]

---

*End of Document*

---

**[Organization Name]**
*Vendor Onboarding Security Procedure | Version 1.0 | Classification: Confidential*
*This document is subject to annual review. Printed copies are uncontrolled. Refer to the document management system for the current version.*