# Vendor and Third-Party Security Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Department** | Information Security / Cybersecurity |

---

> **Confidentiality Notice:** This document is classified as **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute a breach of applicable laws, including the Cyber Security Act 2024 (Act 854) and the Personal Data Protection Act 2010.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Framework and Legal Basis](#3-regulatory-framework-and-legal-basis)
4. [Definitions](#4-definitions)
5. [Policy Statement](#5-policy-statement)
6. [Vendor Risk Assessment Requirements](#6-vendor-risk-assessment-requirements)
7. [Security Contractual Clauses](#7-security-contractual-clauses)
8. [Right to Audit Provisions](#8-right-to-audit-provisions)
9. [Incident Notification Obligations for Vendors](#9-incident-notification-obligations-for-vendors)
10. [Access Management for Third Parties](#10-access-management-for-third-parties)
11. [Ongoing Monitoring and Review](#11-ongoing-monitoring-and-review)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Non-Compliance and Enforcement](#13-non-compliance-and-enforcement)
14. [Exceptions](#14-exceptions)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*This section states the intent and objective of the policy. Describe why the policy exists and what risk or regulatory obligation it addresses.*

This policy establishes the minimum security requirements that [Organization Name] imposes on all vendors, third-party service providers, and supply chain partners who have access to, process, transmit, store, or otherwise impact [Organization Name]'s National Critical Information Infrastructure (NCII) systems, data, and operational environments.

The purpose of this policy is to:

- Define a structured approach to evaluating and managing cybersecurity risks introduced by third-party relationships.
- Ensure all vendor engagements are governed by legally enforceable security obligations consistent with applicable Malaysian legislation.
- Protect the confidentiality, integrity, and availability of [Organization Name]'s NCII assets from threats originating in or amplified by the third-party ecosystem.
- Demonstrate regulatory compliance with the Cyber Security Act 2024 (Act 854), in particular obligations imposed on NCII Sector Leads and entities under Sections 18 and 28.
- Align with directives issued by the National Cyber Security Agency (NACSA) and any applicable Bank Negara Malaysia (BNM) standards where [Organization Name] operates within the financial services sector.

---

## 2. Scope

*Define the boundaries of this policy — who it applies to, which systems and data are in scope, and any explicit exclusions.*

### 2.1 Applicability

This policy applies to all:

- **Internal parties:** Employees, contractors, and personnel of [Organization Name] who engage, procure, manage, or oversee third-party vendor relationships.
- **External parties:** All vendors, suppliers, subcontractors, managed service providers (MSPs), cloud service providers (CSPs), system integrators, and any other third-party entity that:
  - Has access (logical or physical) to [Organization Name]'s NCII systems or data;
  - Provides products or services that are integrated into or that support NCII operations;
  - Processes or transmits data on behalf of [Organization Name]; or
  - Maintains connectivity (network, API, remote access) to [Organization Name]'s infrastructure.

### 2.2 In-Scope Systems and Assets

This policy covers all NCII-designated systems and assets of [Organization Name], including but not limited to:

- Core banking and financial processing systems
- Enterprise resource planning (ERP) and HR systems with access to sensitive data
- Network infrastructure, perimeter controls, and security operations platforms
- Cloud environments (public, private, hybrid) hosting NCII workloads
- Operational technology (OT) and industrial control systems (ICS) where applicable
- Data repositories, databases, and backup environments containing NCII data

### 2.3 Exclusions

The following are explicitly excluded from the scope of this policy, unless otherwise determined by the CISO:

- Vendors who supply purely physical commodities with no logical access to systems or data.
- Publicly available software or open-source components governed separately under the [Organization Name] Software Supply Chain Security Policy.
- Individual consumer-grade or incidental service providers (e.g., couriers, office supplies) with no access to NCII systems.

> **Note:** The CISO retains the authority to extend the scope of this policy to additional parties or systems at any time based on risk assessment findings.

---

## 3. Regulatory Framework and Legal Basis

*Reference all applicable laws, regulations, and standards that this policy is designed to satisfy. Include specific section references.*

This policy is developed in direct response to, and to ensure compliance with, the following regulatory instruments and standards:

### 3.1 Primary Legislation

| Instrument | Issuing Authority | Relevant Provisions |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Parliament of Malaysia / NACSA | Section 18 (Cybersecurity measures for NCII), Section 28 (Supply chain and third-party obligations) |
| Personal Data Protection Act 2010 (Act 709) | PDPD / Ministry of Digital | Principles governing personal data processing by third parties |
| Financial Services Act 2013 (Act 758) | BNM | Requirements on outsourcing arrangements for financial institutions |
| Islamic Financial Services Act 2013 (Act 759) | BNM | Parallel outsourcing requirements for Islamic financial institutions |

### 3.2 Regulatory Guidelines and Directives

| Guideline | Issuing Authority | Applicability |
|---|---|---|
| Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Mandatory for licensed financial institutions; Technology Risk, Cloud, Third-Party |
| NACSA National Cyber Security Framework | NACSA | NCII sector leads and entities |
| NACSA Cybersecurity Guidelines for NCII | NACSA | Third-party and supply chain security |
| BNM Guidelines on Outsourcing | BNM | Outsourcing risk management for financial institutions |

### 3.3 Standards and Frameworks (Reference)

| Standard | Body | Use |
|---|---|---|
| ISO/IEC 27001:2022 | ISO/IEC | Information security management — Annex A Control A.5.19–A.5.22 (Supplier relationships) |
| ISO/IEC 27036 | ISO/IEC | Information security for supplier relationships |
| NIST SP 800-161r1 | NIST | Cybersecurity supply chain risk management |
| CIS Controls v8 | CIS | Controls 15 (Service Provider Management) |

---

## 4. Definitions

*Define key terms used throughout this policy to ensure consistent interpretation by all readers.*

| Term | Definition |
|---|---|
| **Vendor / Third Party** | Any external organization or individual engaged by [Organization Name] under a contractual or formal arrangement to provide goods, services, or support. |
| **NCII (National Critical Information Infrastructure)** | Information infrastructure designated under the Cyber Security Act 2024 as critical to national security, economy, public health, or safety, as declared by the Minister on the recommendation of NACSA. |
| **NCII Sector Lead** | The government ministry or regulatory authority designated to oversee a specific NCII sector, as defined under Act 854. |
| **NCII Entity** | An organization that owns or operates NCII, including [Organization Name] where applicable. |
| **Fourth Party / Nth Party** | Subcontractors and downstream service providers engaged by a vendor on behalf of [Organization Name]. |
| **Managed Service Provider (MSP)** | A vendor that remotely manages [Organization Name]'s IT infrastructure, security, or end-user systems. |
| **Cloud Service Provider (CSP)** | A vendor that provides cloud computing services (IaaS, PaaS, or SaaS) to [Organization Name]. |
| **Vendor Risk Assessment (VRA)** | A structured evaluation of a vendor's security posture, data handling practices, and risk profile prior to and during engagement. |
| **Right to Audit** | A contractual provision granting [Organization Name] the authority to assess or commission an assessment of a vendor's security controls. |
| **Security Incident** | Any event that compromises or has the potential to compromise the confidentiality, integrity, or availability of [Organization Name]'s assets or data held or accessed by a vendor. |
| **Supply Chain Risk** | Cybersecurity risk arising from dependencies on vendors, software, hardware, or services that may be compromised, manipulated, or subject to failure. |
| **Data Processing Agreement (DPA)** | A binding contract governing the processing of personal data by a third party on behalf of [Organization Name], as required under PDPA 2010. |

---

## 5. Policy Statement

*Articulate the organization's position and commitment with respect to third-party security. This should be a high-level, authoritative declaration.*

[Organization Name] recognizes that third-party relationships represent a significant and growing vector for cybersecurity risk to its NCII operations. The organization is committed to ensuring that all vendor and third-party engagements are subject to proportionate security governance commensurate with the risk and sensitivity of the access, data, or services involved.

[Organization Name] shall:

- **Apply a risk-based approach** to the assessment, selection, and ongoing management of all vendors with access to or impact on NCII systems.
- **Require contractual security commitments** from all vendors, including minimum security standards, compliance obligations, incident notification requirements, and the right to audit.
- **Restrict access** granted to third parties to the minimum required to fulfil the contracted service, in accordance with the principle of least privilege.
- **Monitor vendor compliance** continuously and review the security posture of all material vendors on at least an annual basis.
- **Terminate or suspend** vendor access where the vendor fails to meet required security standards or poses an unacceptable risk to [Organization Name]'s NCII assets.
- **Comply fully** with the requirements of the Cyber Security Act 2024 (Act 854), in particular Sections 18 and 28, and all applicable directions issued by NACSA.

Compliance with this policy is **mandatory** for all personnel involved in vendor management and for all vendors engaged by [Organization Name]. Non-compliance will result in escalation, sanctions, or contract termination as appropriate.

---

## 6. Vendor Risk Assessment Requirements

*This section defines the process for evaluating security risks posed by vendors before engagement and on an ongoing basis.*

### 6.1 Vendor Tiering and Risk Classification

*Describe how vendors are categorized by risk level. Tiering determines the depth of assessment and the level of controls required.*

All vendors shall be classified into risk tiers prior to onboarding. The classification is based on the sensitivity of data accessed, the criticality of the service to NCII operations, and the extent of connectivity to [Organization Name]'s systems.

| Tier | Label | Criteria | Examples |
|---|---|---|---|
| **Tier 1** | Critical | Direct access to NCII systems or data; supports core operational functions; single-point of failure potential | Core banking platform vendors, SOC/MSSP providers, core cloud infrastructure |
| **Tier 2** | High | Indirect access to NCII systems; significant data processing; regulatory or operational dependency | HR systems, ERP providers, secondary cloud services |
| **Tier 3** | Medium | Limited access; non-critical services; restricted data exposure | IT hardware suppliers, training providers, non-critical SaaS |
| **Tier 4** | Low | No logical access; no sensitive data; no NCII connectivity | Office supplies, building contractors (no IT access) |

> Tier 1 and Tier 2 vendors are subject to full Vendor Risk Assessments. Tier 3 vendors are subject to a simplified assessment. Tier 4 vendors are not subject to this policy beyond basic due diligence.

### 6.2 Pre-Engagement Assessment

*Outline the mandatory assessments that must be completed before a new vendor is onboarded.*

Before entering into any engagement with a Tier 1, 2, or 3 vendor, [Organization Name] shall conduct a Vendor Risk Assessment (VRA) that includes, at minimum:

- **Security questionnaire:** Completion of the [Organization Name] Vendor Security Assessment Questionnaire (refer to Appendix A), tailored to the vendor's tier.
- **Documentary review:** Evaluation of the vendor's security certifications (e.g., ISO 27001, SOC 2 Type II), policies, and audit reports.
- **Financial and operational due diligence:** Assessment of the vendor's financial stability and operational resilience.
- **Regulatory compliance verification:** Confirmation that the vendor is compliant with applicable Malaysian regulations, including Act 854 and PDPA 2010.
- **Fourth-party review (Tier 1):** Identification and review of critical subcontractors used by the vendor.
- **Site visit or interview (Tier 1):** Physical or virtual assessment of the vendor's security practices for critical engagements.

### 6.3 Assessment Scoring and Approval

*Define how assessment results are scored and what approvals are required before a vendor can be onboarded.*

| Risk Rating | Score Range | Approval Required | Conditions |
|---|---|---|---|
| **Low** | [Score range] | Head of IT Security | Standard controls apply |
| **Medium** | [Score range] | CISO | Additional contractual controls may be required |
| **High** | [Score range] | CISO + CEO/CRO | Compensating controls or risk acceptance required |
| **Critical** | [Score range] | Board Risk Committee | Engagement may be declined or subject to intensive remediation plan |

### 6.4 Assessment Documentation

All VRA findings, supporting documentation, and approvals shall be recorded in the [Organization Name] Vendor Risk Register (refer to Appendix B). The Vendor Risk Register shall be maintained by the [Procurement / Third-Party Risk Management team] and reviewed by the CISO quarterly.

### 6.5 Periodic Reassessment

- **Tier 1 vendors:** Full reassessment annually and upon any material change to services, personnel, or the vendor's operating environment.
- **Tier 2 vendors:** Reassessment every [12–18] months or upon material change.
- **Tier 3 vendors:** Reassessment every [24] months or upon contract renewal.
- **Triggered reassessment:** Any vendor subject to a security incident, regulatory sanction, or adverse intelligence shall be subject to an immediate out-of-cycle reassessment.

---

## 7. Security Contractual Clauses

*This section defines the minimum security obligations that must be included in all contracts with in-scope vendors.*

### 7.1 Mandatory Security Requirements in Contracts

*Enumerate the contractual obligations that must be present in vendor agreements. These form the legal basis for enforcing security standards.*

All contracts, master service agreements (MSAs), and statements of work (SOWs) with Tier 1, 2, and 3 vendors shall include, at minimum, the following security clauses:

#### 7.1.1 Information Security Standards

The vendor must:

- Maintain and operate a documented Information Security Management System (ISMS) aligned with ISO/IEC 27001:2022 or an equivalent standard acceptable to [Organization Name].
- Apply security controls no less rigorous than those required by applicable Malaysian law, including Act 854 and PDPA 2010.
- Provide evidence of compliance with agreed security standards upon request and at each annual review.

#### 7.1.2 Data Protection and Confidentiality

The vendor must:

- Enter into a Data Processing Agreement (DPA) where personal data is involved, satisfying the requirements of PDPA 2010.
- Treat all data provided by or generated on behalf of [Organization Name] as confidential and apply appropriate technical and organizational measures to protect it.
- Not disclose [Organization Name] data to any third party without prior written consent.
- Return or securely destroy all [Organization Name] data upon contract termination, and provide written certification of destruction within [30] days.

#### 7.1.3 Security Incident Obligations

Refer to Section 9 for detailed incident notification requirements. Contracts must reference and incorporate these obligations by name or by annexure.

#### 7.1.4 Access Control Requirements

The vendor must:

- Implement role-based access controls (RBAC) for all personnel accessing [Organization Name] systems.
- Enforce multi-factor authentication (MFA) for all remote access to [Organization Name] systems.
- Maintain and provide access logs upon request.
- Remove access of any vendor personnel within [24 hours] of role change or departure.

#### 7.1.5 Subcontracting and Fourth Parties

The vendor must:

- Obtain prior written approval from [Organization Name] before subcontracting any service that involves access to [Organization Name] NCII systems or data.
- Apply security requirements no less stringent than those in the primary contract to any approved subcontractors.
- Remain fully liable to [Organization Name] for the acts and omissions of its subcontractors.

#### 7.1.6 Compliance and Legal Obligations

The vendor must:

- Comply with all applicable Malaysian laws and regulations, including Act 854, PDPA 2010, and any directions issued by NACSA or BNM relevant to the services provided.
- Notify [Organization Name] promptly of any regulatory investigation, sanction, or legal proceeding that may affect the vendor's ability to deliver services securely.

#### 7.1.7 Security Assessments and Audits

Refer to Section 8 for right to audit provisions. Contracts must include explicit right-to-audit clauses as specified.

### 7.2 Minimum Contractual Clause Checklist

*Use the following checklist to verify contract completeness before execution.*

| Clause | Required For | Included (Y/N) | Notes |
|---|---|---|---|
| Information security standards | Tier 1, 2, 3 | | |
| Data processing agreement | Tier 1, 2 (where personal data) | | |
| Data return/destruction | Tier 1, 2, 3 | | |
| Incident notification | Tier 1, 2, 3 | | |
| Access control requirements | Tier 1, 2 | | |
| MFA for remote access | Tier 1, 2 | | |
| Subcontracting approval | Tier 1, 2 | | |
| Fourth-party obligations | Tier 1 | | |
| Right to audit | Tier 1, 2 | | |
| Regulatory compliance | Tier 1, 2, 3 | | |
| Regulatory notification | Tier 1, 2 | | |
| Liability and indemnity | Tier 1, 2, 3 | | |
| Termination for security breach | Tier 1, 2, 3 | | |

### 7.3 Contract Review and Legal Sign-Off

All contracts incorporating security clauses under this policy shall be reviewed and approved by:

- **Legal / Compliance:** For regulatory adequacy and legal enforceability.
- **CISO / Information Security:** For security clause completeness and adequacy.
- **[Procurement / Business Owner]:** For commercial and operational alignment.

---

## 8. Right to Audit Provisions

*This section defines the organization's authority and process for auditing vendor security practices.*

### 8.1 Policy on Right to Audit

*Explain the importance of audit rights and the conditions under which they are exercised.*

[Organization Name] shall retain, and all Tier 1 and Tier 2 vendors must contractually grant, an unconditional right to audit the vendor's security controls, processes, and compliance posture as they relate to [Organization Name]'s data, systems, and obligations under Act 854.

The right to audit is a fundamental safeguard that enables [Organization Name] to:

- Verify that contractual security obligations are being met.
- Identify vulnerabilities or non-compliances in the vendor's environment before they impact [Organization Name].
- Satisfy regulatory obligations imposed by NACSA and BNM, including the ability to demonstrate oversight of third parties handling NCII.

### 8.2 Types of Audit

| Audit Type | Description | Frequency | Applies To |
|---|---|---|---|
| **Document Review** | Review of vendor-supplied policies, procedures, certifications (e.g., ISO 27001, SOC 2), and audit reports | Annual | Tier 1, 2, 3 |
| **Questionnaire-Based Assessment** | Completion of [Organization Name]'s vendor security questionnaire | Annual | Tier 1, 2, 3 |
| **Third-Party Audit Report Review** | Review of independent audit or penetration test reports obtained by the vendor | Annual | Tier 1, 2 |
| **On-Site Audit** | Physical inspection of vendor facilities, processes, and technical controls by [Organization Name] or its appointed auditors | As required; at least every [2] years for Tier 1 | Tier 1 |
| **Remote Technical Assessment** | Technical review or penetration test of vendor interfaces and access points by [Organization Name] or its appointed auditors | As required | Tier 1 |
| **Triggered / Ad Hoc Audit** | Unscheduled assessment triggered by a security incident, adverse intelligence, or compliance concern | On trigger | Tier 1, 2 |

### 8.3 Audit Execution

- **Notification:** [Organization Name] shall provide the vendor with [10 business days] advance notice for scheduled audits, except for triggered audits where notice may be reduced to [48 hours] or waived.
- **Scope:** The scope of each audit shall be defined in writing prior to commencement and shared with the vendor.
- **Appointed Auditors:** [Organization Name] may conduct audits directly or appoint a qualified, independent third-party auditor, subject to appropriate confidentiality obligations.
- **Vendor Cooperation:** Vendors are contractually obligated to cooperate fully with all audit activities, provide requested documentation within [5 business days], and facilitate access to relevant personnel and systems.
- **Costs:** Audit costs shall be borne by [Organization Name] for routine audits. Where an audit is triggered by vendor non-compliance or a security incident caused by the vendor, costs may be passed to the vendor as specified in the contract.

### 8.4 Audit Findings and Remediation

| Finding Severity | Required Remediation Timeline | Escalation |
|---|---|---|
| **Critical** | [5 business days] or immediate access suspension | CISO, Legal, Executive |
| **High** | [15 business days] | CISO |
| **Medium** | [30 business days] | Head of Third-Party Risk |
| **Low** | [60 business days] or next review cycle | Third-Party Risk Team |

All audit findings shall be documented in the Vendor Risk Register. Vendor responses and remediation evidence shall be tracked to closure. Unresolved critical or high findings after the required remediation timeline shall be escalated to the CISO and may result in contract suspension or termination.

---

## 9. Incident Notification Obligations for Vendors

*This section defines vendor obligations to report security incidents and [Organization Name]'s response process.*

### 9.1 Regulatory Context

Under Section 18 of the Cyber Security Act 2024 (Act 854), [Organization Name] as an NCII entity is obligated to report cybersecurity incidents affecting its NCII to NACSA within prescribed timelines. The ability of [Organization Name] to fulfil this obligation is directly dependent on timely notification from vendors who experience or discover incidents affecting [Organization Name]'s assets, data, or systems. Vendors' notification obligations must therefore be contractually mandated and enforceable.

### 9.2 Vendor Incident Notification Requirements

All Tier 1, 2, and 3 vendors must contractually commit to the following incident notification obligations:

#### 9.2.1 Notification Timelines

| Incident Severity | Initial Notification | Detailed Report | Resolution Report |
|---|---|---|---|
| **Critical** — Active breach, data exfiltration, ransomware, or NCII impact | **Within 1 hour** of discovery | Within [12 hours] | Within [7 days] of resolution |
| **High** — Confirmed security incident with potential NCII or data impact | **Within [2 hours]** of discovery | Within [24 hours] | Within [14 days] of resolution |
| **Medium** — Suspected incident or security event under investigation | **Within [4 hours]** of discovery | Within [48 hours] | Within [30 days] of resolution |
| **Low** — Minor security events, policy violations, no confirmed impact | **Within [24 hours]** | Within [5 business days] | Within [30 days] |

> Initial notification must be made via [Organization Name]'s designated emergency contact channel (refer to Appendix C — Incident Notification Contacts). Formal written notification must follow through the agreed secure communication channel.

#### 9.2.2 Minimum Information in Initial Notification

Vendors must include at minimum the following in their initial incident notification:

- Date and time the incident was discovered
- Nature and description of the incident
- Systems, data, and assets potentially affected, including any [Organization Name] data
- Initial assessment of the potential impact on [Organization Name]
- Actions taken or underway to contain the incident
- Vendor incident response lead name and contact details

#### 9.2.3 Detailed Incident Report Requirements

The detailed incident report must additionally include:

- Root cause analysis (preliminary or confirmed)
- Scope of affected systems, users, and data (including quantification of any [Organization Name] data affected)
- Indicator of compromise (IoC) data, where available
- Timeline of events
- Full containment and remediation actions taken
- Evidence of containment (e.g., forensic findings)
- Regulatory notifications made (if applicable)
- Ongoing monitoring measures

### 9.3 Vendor Cooperation During Incident Response

Vendors are obligated to:

- Cooperate fully with [Organization Name]'s incident response team (IRT) and any appointed external forensic investigators.
- Preserve all evidence related to the incident and not destroy logs, systems, or data without written approval from [Organization Name].
- Allow [Organization Name] or its designees to participate in the vendor's incident response activities to the extent necessary to protect [Organization Name]'s assets.
- Not make any public disclosure, press release, or regulatory notification related to the incident that references [Organization Name] without prior written approval.

### 9.4 Regulatory Notification Support

Where a vendor incident requires [Organization Name] to make a notification to NACSA under Act 854, the vendor must provide all information, documentation, and cooperation required to enable [Organization Name] to submit an accurate and timely regulatory notification.

---

## 10. Access Management for Third Parties

*This section governs how access to [Organization Name]'s systems and data is granted, managed, and revoked for third parties.*

### 10.1 Principles of Third-Party Access

*State the foundational principles that govern all third-party access.*

All access granted to third parties shall be governed by the following principles:

- **Least Privilege:** Third parties shall be granted access only to the specific systems, data, and resources required to perform their contracted services. Broad or administrative access shall not be granted unless explicitly justified and approved.
- **Need to Know:** Access to data shall be further restricted based on the vendor's specific functional need.
- **Time-Bound Access:** All third-party access shall be time-limited and tied to the duration of the contracted engagement or specific task.
- **Accountability:** All third-party access shall be associated with uniquely identifiable accounts, and all actions shall be logged and auditable.
- **Formal Authorization:** No third-party access shall be provisioned without a completed and approved access request.

### 10.2 Access Request and Provisioning Process

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Business owner submits formal third-party access request | Business Owner |
| 2 | Security review of requested access scope and justification | Information Security Team |
| 3 | CISO or designated approver approves or modifies access request | CISO / Delegated Approver |
| 4 | IT / IAM team provisions access per approved scope | IT / IAM Team |
| 5 | Vendor completes mandatory security acknowledgement and NDA (if not already in place) | Vendor Representative |
| 6 | Access credentials issued via secure channel; MFA enrolled | IT / IAM Team |
| 7 | Access details recorded in Third-Party Access Register | IT / IAM Team |

### 10.3 Authentication and Access Control Standards

All third-party access to [Organization Name] systems must comply with the following minimum technical standards:

- **Multi-Factor Authentication (MFA):** Mandatory for all remote access and all access to systems handling NCII data.
- **VPN / Secure Gateway:** Remote access must traverse [Organization Name]'s approved secure access gateway. Direct internet-to-production access is prohibited.
- **Named Accounts:** Shared accounts or generic credentials must not be used. Each vendor representative must have an individually named account.
- **Privileged Access Management (PAM):** Privileged access (e.g., administrative, root, DBA) must be provisioned through [Organization Name]'s PAM solution and all sessions must be recorded.
- **Password Policy:** Vendor accounts must comply with [Organization Name]'s password policy as a minimum.

### 10.4 Third-Party Access Register

[Organization Name] shall maintain a Third-Party Access Register containing, at minimum:

| Field | Description |
|---|---|
| Vendor Name | Legal name of the vendor organization |
| Vendor Contact | Named individual(s) granted access |
| Access Type | System(s) / data / network segments accessible |
| Access Level | Read / Read-Write / Administrative |
| Access Method | VPN, portal, direct, PAM-managed |
| Authorization Reference | Access request ID and approver |
| Access Start Date | Date access was provisioned |
| Access Expiry Date | Date access is scheduled to expire |
| MFA Enrolled | Yes / No |
| Last Review Date | Date of last access review |

The Third-Party Access Register shall be reviewed by the CISO or delegate on a **quarterly** basis, and all access entries shall be recertified at least **annually** or upon contract renewal.

### 10.5 Access Suspension and Revocation

| Trigger | Required Action | Timeline |
|---|---|---|
| Contract expiry or termination | Revoke all access | Within [4 hours] of termination |
| Vendor personnel departure | Revoke individual access | Within [24 hours] of notification |
| Security incident involving vendor | Suspend access pending investigation | **Immediately** upon discovery |
| Vendor fails security assessment | Suspend access pending remediation | As directed by CISO |
| Access not used for [90] days | Suspend and review | Upon detection |

Revocation actions shall be recorded in the Third-Party Access Register and confirmed in writing to the business owner.

---

## 11. Ongoing Monitoring and Review

*This section defines how [Organization Name] continuously monitors vendor security posture and manages the vendor relationship lifecycle.*

### 11.1 Continuous Monitoring Activities

*Describe the day-to-day and periodic monitoring activities applied to active vendor relationships.*

[Organization Name] shall maintain ongoing oversight of all Tier 1 and Tier 2 vendor relationships through the following monitoring activities:

#### 11.1.1 Technical Monitoring

- **Access log review:** Automated monitoring and periodic manual review of all third-party access logs for anomalous activity.
- **Network traffic monitoring:** Monitoring of traffic from and to third-party connection points for unusual patterns or unauthorized data transfers.
- **Privileged session monitoring:** Real-time monitoring of all privileged vendor sessions conducted via the PAM solution.
- **Vulnerability intelligence:** Tracking of public vulnerability disclosures (CVEs) affecting vendor products or services used by [Organization Name].

#### 11.1.2 Compliance Monitoring

- **Certification tracking:** Monitoring of the validity and renewal status of vendor security certifications (e.g., ISO 27001, SOC 2).
- **Regulatory and adverse news monitoring:** Monitoring of regulatory sanctions, enforcement actions, or adverse news relating to key vendors.
- **SLA and KPI tracking:** Monitoring of vendor performance against agreed security-related service level agreements (SLAs) and key performance indicators (KPIs).

### 11.2 Periodic Review Schedule

| Activity | Frequency | Responsible |
|---|---|---|
| Vendor Risk Register review | Quarterly | CISO / Third-Party Risk Team |
| Third-Party Access Register recertification | Quarterly | IT / IAM Team |
| Tier 1 Vendor Security Review | Annual | CISO / Third-Party Risk Team |
| Tier 2 Vendor Security Review | Annual | Third-Party Risk Team |
| Tier 3 Vendor Security Review | Bi-annual or on renewal | Third-Party Risk Team |
| Vendor security KPI / SLA review | Monthly (Tier 1), Quarterly (Tier 2) | Business Owner / Procurement |
| Policy review and update | Annual | CISO |
| Board / Executive reporting on vendor risk | Quarterly | CISO / CRO |

### 11.3 Annual Vendor Security Review

The annual vendor security review for Tier 1 and Tier 2 vendors shall include, at minimum:

- Review of the vendor's current security certifications and any changes to their security posture.
- Assessment against updated [Organization Name] Vendor Security Assessment Questionnaire.
- Review of any incidents, breaches, or near-misses involving the vendor since the last review.
- Review of open audit findings and remediation status.
- Review of contract terms for adequacy and alignment with current regulatory requirements.
- Re-classification of vendor tier if the nature of services or risk profile has changed.
- Sign-off by CISO and business owner.

### 11.4 Vendor Offboarding

When a vendor relationship ends, the following steps must be completed:

| Step | Action | Timeline | Responsible |
|---|---|---|---|
| 1 | Revoke all logical access | [4 hours] from contract end | IT / IAM Team |
| 2 | Retrieve or securely destroy all [Organization Name] assets (physical) | [15 business days] | Business Owner |
| 3 | Obtain written confirmation of data destruction from vendor | [30 days] | Procurement / Legal |
| 4 | Archive vendor contract and VRA records per records retention policy | Immediately | Procurement / Compliance |
| 5 | Close open findings in Vendor Risk Register | [30 days] | Third-Party Risk Team |
| 6 | Conduct post-engagement review (Tier 1) | [30 days] | Business Owner / CISO |

### 11.5 Vendor Risk Metrics and Reporting

*Define the key risk metrics used to report on the third-party security programme to leadership.*

The following metrics shall be tracked and reported to the CISO and Board Risk Committee on a quarterly basis:

| Metric | Description |
|---|---|
| Number of active vendors by tier | Total vendor population and tier distribution |
| % vendors with current VRA | Coverage of valid, up-to-date risk assessments |
| % vendors with contractual security clauses | Contractual compliance coverage |
| Number of vendor-related security incidents | Vendor-originated or vendor-impacted incidents |
| Open audit findings by severity | Outstanding remediation items |
| Average days to remediation (by severity) | Remediation effectiveness |
| % third-party access reviewed in period | Access recertification completion rate |
| Vendors with overdue reassessment | VRA currency compliance |

---

## 12. Roles and Responsibilities

*This section defines the responsibilities of key roles in the implementation and maintenance of this policy, presented in a RACI format.*

### 12.1 RACI Matrix

**R** = Responsible | **A** = Accountable | **C** = Consulted | **I** = Informed

| Activity | CISO | Third-Party Risk Team | Business Owner | IT / IAM Team | Procurement / Legal | Internal Audit | Vendor |
|---|---|---|---|---|---|---|---|
| Policy ownership and approval | A | R | I | I | C | I | — |
| Vendor tier classification | A | R | C | I | C | I | I |
| Vendor Risk Assessment (VRA) | A | R | C | I | C | I | R |
| Contract security clause review | C | C | I | — | R/A | I | — |
| Contract execution | I | I | A | — | R | I | R |
| Access request approval | A | C | R | I | — | — | — |
| Access provisioning | I | I | I | R/A | — | — | — |
| Third-Party Access Register maintenance | I | C | I | R/A | — | I | — |
| Access recertification | A | C | R | R | — | I | — |
| Access revocation | A | I | R | R | — | — | — |
| Vendor incident notification receipt | A | R | I | R | I | I | R |
| Incident response coordination | A | C | C | R | I | I | R |
| Audit scheduling and execution | A | R | C | C | C | C | R |
| Audit finding remediation tracking | A | R | C | I | — | I | R |
| Ongoing vendor monitoring | A | R | C | R | I | I | — |
| Annual vendor security review | A | R | C | I | C | I | R |
| Vendor offboarding | A | R | R | R | R | I | R |
| Quarterly risk reporting | R/A | C | I | I | I | I | — |
| Policy review (annual) | R/A | C | C | I | C | C | — |

### 12.2 Key Role Descriptions

| Role | Responsibility Summary |
|---|---|
| **CISO** | Accountable for this policy and the overall third-party security programme. Approves high-risk vendor engagements, escalated findings, and access suspension decisions. |
| **Third-Party Risk Management Team** | Day-to-day execution of VRAs, maintenance of the Vendor Risk Register, coordination of audits, and tracking of remediation. |
| **Business Owner** | Responsible for identifying and sponsoring vendor relationships within their area, participating in access reviews, and ensuring vendors meet contractual obligations. |
| **IT / IAM Team** | Responsible for provisioning, maintaining, and revoking third-party access accounts; maintaining the Third-Party Access Register; PAM system administration. |
| **Procurement / Legal** | Responsible for embedding security clauses in vendor contracts and ensuring contractual enforceability. |
| **Internal Audit** | Provides independent assurance on the effectiveness of third-party security controls; includes vendor risk in the annual audit plan. |
| **Vendor** | Responsible for complying with all security requirements, completing assessments, notifying incidents, and cooperating with audits. |

---

## 13. Non-Compliance and Enforcement

*This section defines the consequences and actions taken where vendors or internal parties fail to comply with this policy.*

### 13.1 Vendor Non-Compliance

Where a vendor is found to be non-compliant with this policy or their contractual security obligations, [Organization Name] may take one or more of the following actions, proportionate to the severity and circumstances:

| Non-Compliance Severity | Possible Actions |
|---|---|
| **Minor** (e.g., late submission of documentation) | Written notice; remediation plan required |
| **Moderate** (e.g., failure to remediate medium-risk findings; access control lapses) | Formal breach notice; escalation to vendor executive; enhanced monitoring |
| **Significant** (e.g., failure to notify an incident; unauthorized subcontracting) | Access suspension pending remediation; legal notice; financial penalties per contract |
| **Critical** (e.g., data breach caused by vendor negligence; material misrepresentation) | Immediate access termination; contract termination for cause; regulatory notification; legal action |

### 13.2 Internal Non-Compliance

[Organization Name] personnel who fail to comply with this policy (e.g., engaging vendors without completing a VRA, granting unauthorized access) shall be subject to disciplinary action under [Organization Name]'s HR Disciplinary Policy, up to and including termination.

---

## 14. Exceptions

*Define how exceptions to this policy are requested, assessed, and documented.*

### 14.1 Exception Process

Exceptions to any requirement in this policy must be:

1. Submitted in writing to the CISO using the [Organization Name] Policy Exception Request Form (refer to Appendix D).
2. Accompanied by a documented business justification and an assessment of the risks associated with the exception.
3. Reviewed and approved by the CISO, with escalation to the Board Risk Committee for exceptions affecting Tier 1 vendors or NCII systems.
4. Subject to compensating controls where the standard requirement cannot be met.
5. Time-limited — all approved exceptions must specify an expiry date and a remediation plan to achieve full compliance.

### 14.2 Exception Register

All approved exceptions shall be recorded in the [Organization Name] Policy Exception Register, maintained by the Third-Party Risk Management Team and reviewed by the CISO quarterly.

| Field | Description |
|---|---|
| Exception ID | Unique reference number |
| Policy Section | Section of this policy to which the exception applies |
| Vendor / System | Affected vendor or system |
| Business Justification | Reason for the exception |
| Risk Assessment | Risk rating of proceeding with the exception |
| Compensating Controls | Controls applied in lieu of standard requirement |
| Approved By | Name and role of approver |
| Approval Date | Date exception was approved |
| Expiry Date | Date by which exception expires or standard must be met |

---

## 15. Review and Approval

### 15.1 Policy Review

This policy shall be reviewed:

- **Annually** by the CISO, or more frequently if required.
- Upon significant changes to [Organization Name]'s operating environment, vendor ecosystem, or regulatory requirements.
- Following any material security incident involving a third party.
- Upon issuance of new or revised directions by NACSA or BNM affecting third-party security requirements.

### 15.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 15.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Risk Officer (CRO) | [Name] | | [Date] |
| Chief Executive Officer (CEO) / Managing Director | [Name] | | [Date] |
| Board Risk Committee Chairperson | [Name] | | [Date] |

---

## 16. References

*List all regulatory instruments, standards, and internal policies referenced in this document.*

### 16.1 Legislation and Regulations

| Reference | Title | Relevant Provisions |
|---|---|---|
| Act 854 (2024) | Cyber Security Act 2024 | **Section 18** — Cybersecurity measures for NCII entities; obligations to implement security controls and manage risks; **Section 28** — Supply chain and third-party obligations for NCII |
| Act 709 (2010) | Personal Data Protection Act 2010 | Principles of data processing; obligations on data processors; data transfer restrictions |
| Act 758 (2013) | Financial Services Act 2013 | Part IX — Outsourcing; risk management requirements for financial institutions |
| Act 759 (2013) | Islamic Financial Services Act 2013 | Equivalent provisions on outsourcing for Islamic financial institutions |

### 16.2 Regulatory Guidelines

| Reference | Title | Issuing Authority |
|---|---|---|
| RMiT (2023) | Risk Management in Technology Policy Document | Bank Negara Malaysia |
| BNM/RH/GL 013-3 | Guidelines on Outsourcing | Bank Negara Malaysia |
| [NACSA-GL-001] | NACSA Cybersecurity Guidelines for NCII Entities | NACSA |
| [NACSA-NCSF] | National Cyber Security Framework | NACSA |

### 16.3 Standards

| Reference | Title |
|---|---|
| ISO/IEC 27001:2022 | Information security, cybersecurity and privacy protection — Information security management systems — Requirements |
| ISO/IEC 27036-1:2021 | Cybersecurity — Supplier relationships — Part 1: Overview and concepts |
| ISO/IEC 27036-2:2022 | Cybersecurity — Supplier relationships — Part 2: Requirements |
| NIST SP 800-161r1 | Cybersecurity Supply Chain Risk Management Practices for Systems and Organizations |
| CIS Controls v8 | Center for Internet Security Critical Security Controls — Control 15: Service Provider Management |

### 16.4 Internal Documents

| Document | Description |
|---|---|
| [Organization Name] Information Security Policy | Parent information security policy |
| [Organization Name] Incident Response Policy | Governing document for security incident management |
| [Organization Name] Identity and Access Management Policy | Governing document for access control |
| [Organization Name] Risk Management Framework | Enterprise risk management methodology |
| [Organization Name] HR Disciplinary Policy | Disciplinary procedures for policy non-compliance |
| [Organization Name] Procurement Policy | Procurement process and vendor engagement procedures |

---

## 17. Appendices

### Appendix A — Vendor Security Assessment Questionnaire

*Complete this questionnaire for all Tier 1, 2, and 3 vendor assessments. The depth of questions completed should be proportionate to the vendor's risk tier.*

**Section 1: Organization and Governance**

| # | Question | Vendor Response | [Org Name] Assessment |
|---|---|---|---|
| 1.1 | Does the vendor maintain a formal Information Security Management System (ISMS)? | | |
| 1.2 | Is the vendor certified to ISO/IEC 27001 or equivalent? If so, provide certification scope and expiry date. | | |
| 1.3 | Does the vendor have a designated CISO or equivalent security leadership role? | | |
| 1.4 | Does the vendor maintain a formal third-party/supply chain risk management programme? | | |
| 1.5 | Has the vendor undergone any regulatory action or sanction related to security in the past [3] years? | | |

**Section 2: Data Protection**

| # | Question | Vendor Response | [Org Name] Assessment |
|---|---|---|---|
| 2.1 | How does the vendor classify and protect data received from clients? | | |
| 2.2 | Where will [Organization Name] data be stored (country/region)? | | |
| 2.3 | Does the vendor maintain a data retention and destruction policy? | | |
| 2.4 | How does the vendor ensure compliance with PDPA 2010? | | |

**Section 3: Access Control and Identity Management**

| # | Question | Vendor Response | [Org Name] Assessment |
|---|---|---|---|
| 3.1 | Does the vendor enforce MFA for all remote access to client environments? | | |
| 3.2 | Describe the vendor's privileged access management approach. | | |
| 3.3 | How does the vendor manage access for departing staff? | | |

**Section 4: Incident Management**

| # | Question | Vendor Response | [Org Name] Assessment |
|---|---|---|---|
| 4.1 | Does the vendor maintain a formal Incident Response Plan? | | |
| 4.2 | What is the vendor's process for notifying clients of security incidents? | | |
| 4.3 | Has the vendor experienced a security incident in the past [3] years? If so, describe the nature and outcome. | | |

**Section 5: Business Continuity and Resilience**

| # | Question | Vendor Response | [Org Name] Assessment |
|---|---|---|---|
| 5.1 | Does the vendor maintain a Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP)? | | |
| 5.2 | What are the vendor's RTO and RPO commitments for services provided to [Organization Name]? | | |
| 5.3 | When was the vendor's BCP/DRP last tested? | | |

**Section 6: Subcontractors (Tier 1 / Tier 2 Only)**

| # | Question | Vendor Response | [Org Name] Assessment |
|---|---|---|---|
| 6.1 | Does the vendor use subcontractors for services delivered to [Organization Name]? | | |
| 6.2 | List all subcontractors with access to [Organization Name] data or systems. | | |
| 6.3 | How does the vendor assess the security of its subcontractors? | | |

---

### Appendix B — Vendor Risk Register Template

*The Vendor Risk Register is the master record of all vendor risk assessments. Maintained by the Third-Party Risk Management Team and reviewed quarterly.*

| Vendor Name | Vendor Type | Tier | Services Provided | Data Accessed | VRA Date | VRA Expiry | Risk Rating | Open Findings | Last Review Date | Next Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [Vendor Name] | [MSP/CSP/Software] | [1/2/3] | [Description] | [Personal/NCII/None] | [Date] | [Date] | [Low/Med/High/Critical] | [#] | [Date] | [Date] | [Active/Pending/Offboarding] |

---

### Appendix C — Incident Notification Contacts

*Vendors must use these contacts for all incident notifications. Contacts to be kept current by the [Security Operations / CISO Office] team.*

**Primary Contact (24/7 Incident Hotline):**

| Field | Detail |
|---|---|
| Contact Name | [Name of SOC Lead / Incident Manager] |
| Role | [Role Title] |
| Phone | [Emergency Phone Number] |
| Email | [incidents@organization.com.my] |
| Secure Portal | [URL of vendor incident portal, if applicable] |

**Secondary Contact (Escalation):**

| Field | Detail |
|---|---|
| Contact Name | [CISO Name] |
| Role | Chief Information Security Officer |
| Phone | [Phone Number] |
| Email | [ciso@organization.com.my] |

**NACSA Reporting (For Reference):**

| Field | Detail |
|---|---|
| NACSA CyCert | Refer to NACSA official website for current reporting channels |
| MyCERT (CyberSecurity Malaysia) | Refer to CyberSecurity Malaysia website for current reporting channels |

---

### Appendix D — Policy Exception Request Form

*Submit this form to the CISO Office for all exceptions to requirements within this policy.*

| Field | Detail |
|---|---|
| **Exception Request ID** | [Auto-assigned upon submission] |
| **Requestor Name** | [Name] |
| **Requestor Role** | [Role / Department] |
| **Date of Request** | [Date] |
| **Vendor Name (if applicable)** | [Vendor Name] |
| **Policy Section** | [Section number and title to which the exception applies] |
| **Standard Requirement** | [State the requirement that cannot be met] |
| **Business Justification** | [Explain why the standard requirement cannot be met] |
| **Risk Assessment** | [Describe the risk of proceeding without meeting the standard requirement] |
| **Risk Rating** | [Low / Medium / High / Critical] |
| **Proposed Compensating Controls** | [Describe what alternative controls will be applied] |
| **Requested Expiry Date** | [Date by which exception must expire] |
| **Remediation Plan** | [Describe steps to achieve full compliance and target date] |

**Approval:**

| Approver Role | Name | Decision (Approved/Rejected) | Conditions | Date |
|---|---|---|---|---|
| CISO | [Name] | | | |
| CRO (if High/Critical risk) | [Name] | | | |
| Board Risk Committee (if NCII impact) | [Chair Name] | | | |

---

### Appendix E — Vendor Security Clause Minimum Standards Reference

*A reference guide to minimum security clauses that must be present in contracts with in-scope vendors. For use by Procurement and Legal during contract drafting and review.*

**E.1 Minimum Security Clause Subjects (by Tier)**

| Clause Subject | Tier 1 | Tier 2 | Tier 3 |
|---|---|---|---|
| Security standards maintenance (ISO 27001 or equivalent) | Mandatory | Mandatory | Recommended |
| Data classification and handling | Mandatory | Mandatory | Mandatory |
| Data Processing Agreement (PDPA compliance) | Mandatory (if PD) | Mandatory (if PD) | Mandatory (if PD) |
| Data return or destruction upon termination | Mandatory | Mandatory | Mandatory |
| Incident notification (as per Section 9 of this policy) | Mandatory | Mandatory | Mandatory |
| MFA for remote access | Mandatory | Mandatory | Recommended |
| Access control and logging | Mandatory | Mandatory | Recommended |
| Subcontracting approval and flow-down requirements | Mandatory | Mandatory | — |
| Right to audit | Mandatory | Mandatory | — |
| Business continuity and DR requirements | Mandatory | Recommended | — |
| Vulnerability management and patching SLAs | Mandatory | Recommended | — |
| Personnel security (background checks) | Mandatory | Recommended | — |
| Regulatory compliance obligation | Mandatory | Mandatory | Mandatory |
| Regulatory notification cooperation | Mandatory | Mandatory | Recommended |
| Liability and indemnity for security failures | Mandatory | Mandatory | Mandatory |
| Termination for security breach or failure | Mandatory | Mandatory | Mandatory |
| Cyber insurance requirements | Mandatory | Recommended | — |

---

*End of Document*

---

**Document Control Statement:** This document is subject to version control. The current version is always the authoritative version. Printed or offline copies are considered uncontrolled and may not reflect the latest content. Always verify against the document management system of [Organization Name] before relying on this policy.

| | |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [Date] |
| **Owner** | Chief Information Security Officer, [Organization Name] |