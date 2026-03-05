# Cloud Security Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Cloud Security Policy |
| **Owner** | Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Annual] |
| **Approved By** | [Approved By — Name and Title] |
| **Organization** | [Organization Name] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854), NACSA |
| **Applicable Sections** | Sections 18 and 24 |

---

> **Confidentiality Notice:** This document is classified as **Confidential**. It is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure, reproduction, or distribution is strictly prohibited and may constitute an offence under applicable Malaysian law.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Policy Principles](#5-policy-principles)
6. [Cloud Service Provider Assessment](#6-cloud-service-provider-assessment)
7. [Data Sovereignty Requirements](#7-data-sovereignty-requirements)
8. [Shared Responsibility Model](#8-shared-responsibility-model)
9. [Cloud Access Security](#9-cloud-access-security)
10. [Data Encryption in Cloud](#10-data-encryption-in-cloud)
11. [Cloud Incident Response](#11-cloud-incident-response)
12. [Roles and Responsibilities](#12-roles-and-responsibilities)
13. [Compliance, Monitoring, and Enforcement](#13-compliance-monitoring-and-enforcement)
14. [Policy Exceptions](#14-policy-exceptions)
15. [Review and Approval](#15-review-and-approval)
16. [References](#16-references)
17. [Appendices](#17-appendices)

---

## 1. Purpose

*State the primary purpose of this policy. Explain why it exists, what risk or obligation it addresses, and what outcome it is designed to achieve.*

This Cloud Security Policy establishes the security requirements, controls, and governance obligations that [Organization Name] applies to the use, procurement, and management of cloud computing services. The policy is intended to ensure that cloud environments hosting or processing National Critical Information Infrastructure (NCII) data are governed in a manner consistent with applicable Malaysian law, regulatory guidance, and industry best practices.

This policy is mandated by [Organization Name]'s designation as an NCII entity under the **Cyber Security Act 2024 (Act 854)** and gives effect to the obligations imposed on NCII sector leads and entities under **Sections 18 and 24** of the Act. It supplements [Organization Name]'s overarching Information Security Policy and must be read in conjunction with all referenced standards and frameworks listed in Section 16.

The specific objectives of this policy are to:

- Define the conditions under which cloud services may be adopted for workloads involving NCII data.
- Establish a structured assessment and approval process for cloud service providers (CSPs).
- Articulate data sovereignty, residency, and jurisdictional controls applicable to NCII data.
- Define the shared security responsibility boundaries between [Organization Name] and its CSPs.
- Specify mandatory access control, encryption, and key management requirements for cloud environments.
- Establish incident response procedures specific to cloud-hosted systems and data.
- Assign clear ownership and accountability for cloud security governance.

---

## 2. Scope

*Define who and what this policy applies to. Be explicit about inclusion and exclusion. Reference organizational units, system categories, and data classifications.*

### 2.1 Applicability

This policy applies to:

- All **employees**, **contractors**, **vendors**, **third-party service providers**, and **business partners** of [Organization Name] who procure, administer, access, or use cloud computing services on behalf of the organisation.
- All **cloud service models** adopted by [Organization Name], including:
  - Infrastructure as a Service (IaaS)
  - Platform as a Service (PaaS)
  - Software as a Service (SaaS)
  - Function as a Service (FaaS) and other serverless compute paradigms
- All **cloud deployment models**, including public cloud, private cloud, hybrid cloud, and multi-cloud configurations.
- All **information assets** classified as NCII data or data processed by systems designated as part of the national critical information infrastructure.
- All **geographic regions** and **jurisdictions** in which [Organization Name] operates or stores data.

### 2.2 Exclusions

The following are excluded from the scope of this policy unless otherwise directed by the CISO:

- On-premises systems that do not interface with or replicate data to cloud environments.
- Publicly available data that carries no classification or confidentiality requirement.
- Personal productivity tools approved under a separate Acceptable Use Policy, provided they do not process NCII data.

*Document any known exclusions specific to [Organization Name] and obtain CISO approval for each exclusion.*

### 2.3 Related Policies

This policy must be read in conjunction with the following [Organization Name] policies and standards:

| Document | Document ID |
|---|---|
| Information Security Policy | [Doc ID] |
| Data Classification and Handling Policy | [Doc ID] |
| Third-Party Risk Management Policy | [Doc ID] |
| Business Continuity and Disaster Recovery Policy | [Doc ID] |
| Cryptography and Key Management Standard | [Doc ID] |
| Identity and Access Management Policy | [Doc ID] |
| Incident Response Policy | [Doc ID] |

---

## 3. Regulatory Context

*Explain the regulatory drivers for this policy. This section provides auditorsand regulators with the normative basis for each policy requirement.*

### 3.1 Cyber Security Act 2024 (Act 854)

[Organization Name] is designated as an NCII entity under the Cyber Security Act 2024 (Act 854), administered by the **National Cyber Security Agency (NACSA)**. This policy directly addresses the following statutory provisions:

| Section | Provision Summary | Policy Relevance |
|---|---|---|
| **Section 18** | Obligations of NCII entities — requires NCII entities to comply with cyber security measures, codes of practice, and standards issued by NACSA; imposes a duty of care over NCII systems and the information processed therein. | Mandates that cloud services hosting NCII systems meet defined security standards and that the organisation conducts and maintains risk assessments and security controls for cloud environments. |
| **Section 24** | Incident reporting obligations — requires NCII entities to report cyber security incidents affecting NCII to NACSA within the prescribed timeframe and in the prescribed manner. | Requires that cloud-specific incident response procedures capture, escalate, and report cloud security incidents in compliance with NACSA notification requirements. |

### 3.2 Complementary Regulatory Instruments

*List all additional regulatory frameworks, guidelines, and standards that inform this policy. Update this table as new instruments are issued.*

| Instrument | Issuing Body | Relevance |
|---|---|---|
| NCII Sector Cyber Security Framework | NACSA | Sector-specific security baseline for NCII entities |
| Personal Data Protection Act 2010 (PDPA) | JPDP | Data protection obligations for personal data processed in cloud |
| BNM Risk Management in Technology (RMiT) Policy Document | Bank Negara Malaysia | Applicable where [Organization Name] is a financial institution subject to BNM supervision |
| ISO/IEC 27017:2015 | ISO/IEC | Code of practice for information security controls for cloud services |
| ISO/IEC 27018:2019 | ISO/IEC | Code of practice for protection of personally identifiable information in public clouds |
| CSA Cloud Controls Matrix (CCM) v4 | Cloud Security Alliance | Cloud-specific security control framework |
| NIST SP 800-144 | NIST | Guidelines on security and privacy in public cloud computing |

*Add or remove rows as applicable to [Organization Name]'s specific regulatory environment.*

---

## 4. Definitions and Abbreviations

*Define all technical terms, acronyms, and regulatory terminology used in this policy. Consistency in terminology is essential for audit purposes.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Cloud Computing** | A model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction (per NIST SP 800-145). |
| **Cloud Service Provider (CSP)** | An organisation that provides cloud computing services to [Organization Name], including IaaS, PaaS, and SaaS. |
| **NCII Data** | Information that is processed, stored, or transmitted by systems designated as National Critical Information Infrastructure, or information whose compromise would materially impact the availability, integrity, or confidentiality of such infrastructure. |
| **Data Sovereignty** | The concept that digital data is subject to the laws and governance structures of the nation in which it is located or processed. |
| **Data Residency** | The physical or geographic location in which data is stored or processed. |
| **Shared Responsibility Model** | The delineation of security responsibilities between [Organization Name] (the cloud customer) and the CSP, which varies by cloud service model. |
| **Tenant** | An organisation that uses cloud services provided by a CSP, typically in a multi-tenant environment. |
| **Key Management Service (KMS)** | A managed service for creating, storing, rotating, and revoking cryptographic keys used to protect data in cloud environments. |
| **Customer-Managed Keys (CMK)** | Cryptographic keys that are owned, controlled, and managed by the cloud customer rather than the CSP. |
| **Shadow IT** | The use of IT systems, software, or services by employees without explicit organisational knowledge or approval. |
| **Zero Trust** | A security philosophy and architecture that assumes no implicit trust based on network location and requires continuous verification of all users, devices, and workloads. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CMK | Customer-Managed Key |
| CSA | Cloud Security Alliance |
| CSP | Cloud Service Provider |
| DLP | Data Loss Prevention |
| FIPS | Federal Information Processing Standards |
| IaaS | Infrastructure as a Service |
| IAM | Identity and Access Management |
| JPDP | Jabatan Perlindungan Data Peribadi (Personal Data Protection Department) |
| KMS | Key Management Service |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PaaS | Platform as a Service |
| PDPA | Personal Data Protection Act 2010 |
| PII | Personally Identifiable Information |
| RBAC | Role-Based Access Control |
| RMiT | Risk Management in Technology (BNM Policy Document) |
| SaaS | Software as a Service |
| SLA | Service Level Agreement |
| SOC | Security Operations Centre |
| TPRM | Third-Party Risk Management |

---

## 5. Policy Principles

*Articulate the overarching principles that underpin all cloud security decisions within the organisation. These principles serve as the normative foundation for interpreting policy requirements.*

All cloud security decisions and controls implemented under this policy shall be guided by the following principles:

1. **Security by Design:** Cloud services shall be architected with security controls embedded from the outset, not applied retrospectively. Security requirements shall be defined and assessed before any cloud service procurement or deployment.

2. **Least Privilege:** Access to cloud resources and data shall be granted on a need-to-know, need-to-use basis. Privileges shall be reviewed periodically and revoked when no longer required.

3. **Data Sovereignty First:** The geographic location and jurisdictional exposure of NCII data in cloud environments shall be explicitly assessed and controlled in accordance with Malaysian law and NACSA requirements.

4. **Continuous Assurance:** Cloud environments shall be subject to continuous monitoring, periodic audits, and regular reassessment of controls to detect and respond to emerging threats.

5. **Accountability and Non-Repudiation:** All actions performed in cloud environments shall be logged, attributable to an individual identity, and retained in tamper-evident audit logs for the minimum prescribed retention period.

6. **Proportionality of Controls:** Security controls shall be calibrated to the risk classification of the data and workloads hosted in the cloud, with the most stringent controls applied to NCII data.

7. **Resilience and Continuity:** Cloud architectures shall be designed to maintain the availability and integrity of NCII systems in the event of CSP outages, cyber incidents, or contract termination.

8. **Vendor Independence:** [Organization Name] shall maintain the capability to migrate workloads and retrieve data from any CSP without undue operational disruption or vendor lock-in.

---

## 6. Cloud Service Provider Assessment

*This section governs how [Organization Name] evaluates, approves, and monitors cloud service providers before and after procurement. It should reflect a structured risk-based approach aligned with NACSA guidance and TPRM policy.*

### 6.1 Pre-Procurement Assessment Requirement

No cloud service shall be procured, piloted, or used for workloads involving NCII data without prior completion of the Cloud Service Provider Assessment process as defined in this section. The assessment must be conducted by, or under the direction of, the Information Security function and approved by the CISO.

*Describe the trigger points for assessment — new procurement, significant scope change, renewal, or material change in CSP's security posture — and any fast-track provisions for low-risk SaaS tools.*

### 6.2 Assessment Criteria

Cloud service providers shall be assessed against the following minimum criteria:

| Assessment Domain | Minimum Requirement | Evidenced By |
|---|---|---|
| **Security Certifications** | CSP must hold current ISO/IEC 27001 certification and, where applicable, ISO/IEC 27017 and ISO/IEC 27018 | Certificate of Compliance, audit scope confirmation |
| **Data Residency Controls** | CSP must be capable of guaranteeing data storage and processing within Malaysia or jurisdictions approved under Section 7 of this policy | Contract clause, technical architecture documentation |
| **Penetration Testing** | CSP must conduct and share results of independent penetration tests at least annually | Penetration test summary report, remediation evidence |
| **Incident Notification** | CSP must commit to notifying [Organization Name] of security incidents affecting our data within [X hours] of detection | Contract SLA, incident response procedures |
| **Right to Audit** | CSP must grant [Organization Name] or its appointed auditors the right to audit security controls, or accept third-party audit reports in lieu | Contract clause |
| **Subcontractor Disclosure** | CSP must disclose all material subprocessors and obtain approval prior to onboarding new subprocessors | Data Processing Agreement (DPA), subprocessor list |
| **Business Continuity** | CSP must maintain documented BCM/DR capabilities with defined recovery objectives | BCM documentation, DR test results |
| **Financial Stability** | CSP must demonstrate financial viability sufficient to sustain service delivery over the contract term | Financial statements, credit ratings |
| **Regulatory Compliance** | CSP must demonstrate compliance with applicable Malaysian law, including PDPA where PII is processed | Compliance attestation, DPA |

*Expand the table to include organisation-specific criteria. Map each criterion to a risk score to enable a structured risk-based decision.*

### 6.3 Risk Classification of Cloud Workloads

*Define the risk tiers used to classify cloud workloads and the corresponding assessment rigor required for each tier.*

| Risk Tier | Data Classification | Examples | Assessment Rigor |
|---|---|---|---|
| **Tier 1 — Critical** | NCII / Restricted | Core banking systems, SCADA interfaces, national registry data | Full assessment; CISO approval; annual reassessment |
| **Tier 2 — High** | Confidential | Customer PII, financial transaction data, internal strategic data | Full assessment; CISO approval; biennial reassessment |
| **Tier 3 — Medium** | Internal | HR records, internal communications, analytics | Streamlined assessment; IT Security Head approval |
| **Tier 4 — Low** | Public | Marketing content, public-facing websites | Self-attestation; IT approval |

### 6.4 Approved Cloud Service Providers

*Maintain and reference the current register of approved CSPs. Do not embed the full register in this policy — reference the authoritative source.*

[Organization Name] maintains an **Approved Cloud Service Provider Register**, governed by the CISO and updated following each completed assessment. Only CSPs listed on the Approved Register may be used for Tier 1 and Tier 2 workloads.

The Approved Cloud Service Provider Register is maintained at: [Register Location / System Name].

*Reference the current register. Provide guidance on the process for requesting approval of a new CSP.*

| Approved CSP | Approved Service(s) | Approved Tiers | Approval Date | Reassessment Due |
|---|---|---|---|---|
| [CSP Name] | [Service Description] | [Tier 1 / 2 / 3] | [Date] | [Date] |
| [CSP Name] | [Service Description] | [Tier 1 / 2 / 3] | [Date] | [Date] |

### 6.5 Ongoing Monitoring and Reassessment

Following initial approval, CSPs shall be subject to ongoing monitoring and periodic reassessment as follows:

- **Continuous Monitoring:** [Organization Name]'s SOC shall monitor CSP security advisories, threat intelligence feeds, and public disclosures for indicators of CSP compromise or material security degradation.
- **Annual Review:** All Tier 1 CSPs shall undergo a formal annual reassessment. Tier 2 CSPs shall be reassessed at least every two years.
- **Event-Triggered Reassessment:** A full reassessment shall be triggered by any of the following: a significant security incident at the CSP, material changes to the CSP's ownership or subprocessors, changes to applicable law, or expiry of the CSP's security certifications.
- **Contract Renewal:** The CSP assessment shall be refreshed at each contract renewal regardless of the standard reassessment cycle.

*Define escalation procedures when a CSP fails reassessment or when ongoing monitoring reveals unacceptable risk.*

### 6.6 CSP Contractual Requirements

All agreements with cloud service providers for Tier 1 and Tier 2 workloads must include the following contractual provisions:

- [ ] Data Processing Agreement (DPA) compliant with PDPA 2010
- [ ] Explicit data residency and data sovereignty clauses (see Section 7)
- [ ] Incident notification timelines aligned with NACSA reporting requirements
- [ ] Right to audit or acceptance of third-party audit reports
- [ ] Data return and deletion obligations upon contract termination
- [ ] Subprocessor approval and notification requirements
- [ ] Liability and indemnity clauses addressing security breaches
- [ ] Exit assistance obligations to support workload migration

*Legal must review and approve all cloud contracts for Tier 1 and Tier 2 workloads before execution.*

---

## 7. Data Sovereignty Requirements

*This section establishes [Organization Name]'s requirements for controlling the geographic location and jurisdictional exposure of NCII data stored or processed in cloud environments. It should reflect NACSA guidance, Malaysian law, and any sector-specific requirements from BNM or other regulators.*

### 7.1 Principle of Data Sovereignty

NCII data processed or stored by [Organization Name] is subject to Malaysian law and must be managed in a manner that preserves the sovereignty and jurisdictional integrity of that data. The use of cloud services does not diminish [Organization Name]'s obligations under Malaysian law, and does not transfer legal accountability to the CSP.

### 7.2 Data Residency Requirements by Classification

*Define the mandatory data residency requirements for each data classification tier. These must reflect current NACSA guidance and any BNM or sector-specific requirements applicable to [Organization Name].*

| Data Classification | Mandatory Residency | Permitted Replication | Approval Required |
|---|---|---|---|
| **NCII / Restricted** | Malaysia — primary and secondary storage | Malaysia only; cross-border replication prohibited without NACSA approval | CISO + Legal; NACSA notification may be required |
| **Confidential** | Malaysia — primary storage | Cross-border replication to [Approved Jurisdictions] permitted with controls | CISO approval |
| **Internal** | Malaysia preferred | Cross-border replication to jurisdictions with adequate data protection permitted | IT Security Head approval |
| **Public** | No restriction | No restriction | Standard change process |

*Replace [Approved Jurisdictions] with the list of jurisdictions approved by the CISO and Legal. Consider adequacy decisions, bilateral arrangements, and NACSA guidance when defining this list.*

### 7.3 Cross-Border Data Transfer Controls

Where cross-border data transfers are permitted under Section 7.2, the following controls must be in place:

1. **Jurisdictional Assessment:** The destination jurisdiction must have been assessed and approved by Legal and the CISO. The assessment must consider the adequacy of the jurisdiction's data protection laws and the risk of foreign government access to Malaysian data.

2. **Contractual Safeguards:** Cross-border transfers must be governed by contractual clauses that impose equivalent data protection obligations on the recipient, including obligations that survive termination of the cloud contract.

3. **Encryption in Transit:** Data transferred across borders must be encrypted using protocols and key strengths specified in Section 10 of this policy.

4. **Transfer Impact Assessment:** A Transfer Impact Assessment (TIA) must be completed for each cross-border transfer of Confidential or higher data. The TIA must be reviewed annually and upon any material change in the destination jurisdiction's legal environment.

5. **Data Mapping:** [Organization Name] must maintain an up-to-date data flow map documenting all cross-border transfers of NCII data, including the source system, destination, data types, transfer mechanism, and legal basis.

*Reference the Data Transfer Impact Assessment template in Appendix C.*

### 7.4 Prohibited Jurisdictions

*List jurisdictions to which NCII data transfer is prohibited. This list must be reviewed annually by Legal and the CISO.*

The following jurisdictions are **prohibited** for storage or processing of NCII data and Confidential data without explicit Board-level approval and NACSA notification:

| Prohibited Jurisdiction | Basis for Prohibition | Review Date |
|---|---|---|
| [Jurisdiction Name] | [Regulatory / Geopolitical Basis] | [Date] |
| [Jurisdiction Name] | [Regulatory / Geopolitical Basis] | [Date] |

*Populate this table following consultation with Legal, the CISO, and NACSA guidance.*

### 7.5 CSP Infrastructure Verification

[Organization Name] shall verify the geographic location of CSP infrastructure prior to onboarding and annually thereafter. Verification methods include:

- Review of CSP's published data centre location documentation.
- Contractual binding of data centre locations with change notification obligations.
- Technical verification using cloud-native region/availability zone configurations.
- Where available, review of CSP's independent audit reports (e.g., SOC 2 Type II) confirming data residency controls.

*Document verification evidence in the CSP assessment record and the NCII Asset Register.*

### 7.6 Government and Law Enforcement Access

*Address the risk of foreign government or law enforcement access to NCII data held with foreign CSPs.*

[Organization Name] recognises that foreign cloud service providers may be subject to foreign laws (including surveillance, national security, and law enforcement access laws) that could compel the CSP to disclose Malaysian data to foreign government authorities without [Organization Name]'s consent or notification. To mitigate this risk:

- Tier 1 workloads shall preferentially use CSPs domiciled in Malaysia or CSPs with contractually enforceable commitments to challenge and notify [Organization Name] of foreign government access requests, to the extent permitted by applicable law.
- Customer-Managed Keys (CMK) shall be used for all Tier 1 workloads, ensuring that encrypted data disclosed to a foreign authority without [Organization Name]'s consent cannot be decrypted.
- [Organization Name]'s Legal function shall monitor developments in foreign surveillance law affecting approved CSPs and escalate material risks to the CISO and Board.

---

## 8. Shared Responsibility Model

*This section defines the security responsibility boundaries between [Organization Name] and its CSPs for each cloud service model. A clear shared responsibility framework prevents gaps in security coverage and forms the basis for contractual and operational accountability.*

### 8.1 Overview

Cloud computing operates on a shared responsibility model: the CSP is responsible for the security **of** the cloud (the underlying infrastructure), while the customer ([Organization Name]) is responsible for security **in** the cloud (the configuration and use of cloud services). The precise boundary of responsibilities shifts depending on the cloud service model (IaaS, PaaS, SaaS).

*Customise the table below to reflect the specific CSPs and service models used by [Organization Name]. Use this matrix to drive contractual negotiations and internal control design.*

### 8.2 Responsibility Matrix by Cloud Service Model

| Security Domain | On-Premises | IaaS | PaaS | SaaS |
|---|---|---|---|---|
| Physical security of data centres | Customer | **CSP** | **CSP** | **CSP** |
| Network infrastructure (hypervisor, physical network) | Customer | **CSP** | **CSP** | **CSP** |
| Operating system patching | Customer | **Customer** | **CSP** | **CSP** |
| Runtime environment and middleware | Customer | Customer | **CSP** | **CSP** |
| Application code and configuration | Customer | Customer | Customer | **CSP** |
| Identity and access management | Customer | Customer | Customer | Shared |
| Data classification and labelling | Customer | Customer | Customer | Customer |
| Data encryption (at rest) | Customer | Customer | Shared | Shared |
| Data encryption (in transit) | Customer | Customer | Shared | Shared |
| Encryption key management | Customer | **Customer** | **Customer** | Shared |
| Network security group configuration | Customer | **Customer** | **Customer** | **CSP** |
| Vulnerability management | Customer | Shared | Shared | **CSP** |
| Security logging and monitoring | Customer | Shared | Shared | Shared |
| Incident response | Customer | Shared | Shared | Shared |
| Business continuity / DR | Customer | Shared | Shared | Shared |
| Compliance and regulatory obligations | Customer | Customer | Customer | Customer |

**Legend:** **Bold** = Primary responsibility. Non-bold = Secondary or shared accountability.

*For each CSP and service used, document the specific responsibility boundaries in the corresponding CSP agreement and internal runbook. "Shared" responsibilities must have explicit internal controls to cover [Organization Name]'s portion.*

### 8.3 Residual Responsibilities of [Organization Name]

Regardless of cloud service model, [Organization Name] retains full and non-delegable responsibility for:

- Compliance with all applicable Malaysian law and NACSA requirements.
- Classification of all data processed in cloud environments.
- Granting, reviewing, and revoking access to cloud resources and data.
- The security configuration of all settings within the customer's administrative control.
- Monitoring of user and administrator activity within cloud tenants.
- Reporting of security incidents to NACSA in accordance with the Cyber Security Act 2024.
- Recovery of data and continuity of operations in the event of CSP failure.

### 8.4 CSP-Specific Responsibility Documentation

*For each major CSP used, document the specific shared responsibility model applicable to [Organization Name]'s deployment. These documents should be maintained in the CSP assessment records.*

| CSP | Service Model | Responsibility Document Reference | Last Reviewed |
|---|---|---|---|
| [CSP Name] | [IaaS / PaaS / SaaS] | [Document Reference] | [Date] |
| [CSP Name] | [IaaS / PaaS / SaaS] | [Document Reference] | [Date] |

### 8.5 Contractual Alignment

The shared responsibility model shall be explicitly documented in each CSP contract and Data Processing Agreement. Where a CSP's standard shared responsibility model does not adequately address [Organization Name]'s NCII obligations, [Organization Name] shall negotiate enhanced provisions or implement compensating controls. Any unresolved gaps must be escalated to the CISO for risk acceptance.

---

## 9. Cloud Access Security

*This section defines the mandatory controls for managing identity, authentication, and access to cloud resources. Controls must reflect a Zero Trust approach and align with [Organization Name]'s Identity and Access Management Policy.*

### 9.1 Identity and Access Management Principles

Access to cloud resources and NCII data shall be governed by the following principles:

- **Least Privilege:** All users, administrators, and service accounts shall be granted the minimum permissions required for their function.
- **Just-in-Time (JIT) Access:** Privileged access to production cloud environments shall be granted on a time-limited basis and shall require justification.
- **Separation of Duties:** Administrative roles shall be segregated to prevent any single individual from having unrestricted control over cloud environments.
- **Centralised Identity Management:** Cloud identities shall be federated with [Organization Name]'s enterprise identity provider wherever technically feasible.

### 9.2 Authentication Requirements

| Access Type | Minimum Authentication Requirement |
|---|---|
| Standard user access to cloud applications | Single Sign-On (SSO) with MFA |
| Administrative access to cloud management consoles | MFA with phishing-resistant second factor (FIDO2 or hardware token) |
| Service-to-service authentication | Managed identities or certificate-based authentication; static shared secrets prohibited for Tier 1/2 workloads |
| API access | Short-lived access tokens; API keys permissible only for non-NCII workloads with compensating controls |
| Break-glass / emergency access | Dual-person authorisation; time-limited; fully logged; CISO notification required |

*Align this table with [Organization Name]'s IAM Policy and specific CSP capabilities.*

### 9.3 Access Provisioning and Deprovisioning

- All cloud access requests must be submitted through the approved access management process and approved by the resource owner and IT Security.
- Access for new joiners, role changes, and leavers must be provisioned and deprovisioned within the timeframes specified in the IAM Policy.
- Service accounts and non-human identities must be registered in the cloud identity inventory and must have a designated human owner.
- Guest and external user accounts must be reviewed and reconfirmed quarterly.

### 9.4 Privileged Access Management

*Define how privileged administrative access to cloud environments is controlled. This is a high-risk area that warrants specific controls.*

- A **Privileged Access Workstation (PAW)** or equivalent hardened access path shall be required for all administrative access to Tier 1 cloud environments.
- All privileged sessions in cloud management consoles shall be recorded and logs shall be retained for a minimum of [X months / years] in accordance with the Log Retention Standard.
- Administrative accounts shall not be used for day-to-day activities. Separate accounts shall be maintained for privileged and standard access.
- Root / owner-level accounts for cloud tenants shall be used only in break-glass scenarios. These accounts must be protected with hardware MFA tokens and their credentials stored in the enterprise secrets management system.
- Privileged access reviews shall be conducted [quarterly] for all cloud administrators.

### 9.5 Access Reviews

| Access Tier | Review Frequency | Reviewer | Escalation |
|---|---|---|---|
| Tier 1 — NCII/Restricted | Quarterly | Resource Owner + IT Security | CISO for unresolved anomalies |
| Tier 2 — Confidential | Semi-annually | Resource Owner | IT Security Head |
| Tier 3 — Internal | Annually | Resource Owner | IT Security |
| Privileged / Admin | Quarterly | CISO delegate | CISO |

### 9.6 Network Access Controls

- Cloud environments hosting NCII data shall implement network segmentation to isolate workloads from internet-facing systems and other tenants.
- Direct internet access to management ports and administrative interfaces is prohibited. All administrative access shall traverse a controlled bastion host, VPN, or Zero Trust Network Access (ZTNA) solution.
- Inbound and outbound traffic rules (security groups, network ACLs, firewall policies) for Tier 1 cloud workloads shall be reviewed and approved by IT Security before deployment and following any material change.
- [Organization Name] shall deploy Cloud Security Posture Management (CSPM) tooling to continuously assess cloud network configurations for misconfigurations and policy violations.

### 9.7 Shadow IT and Unsanctioned Cloud Services

- Employees must not procure, trial, or use unsanctioned cloud services for workloads involving NCII data or Confidential data.
- [Organization Name] shall deploy Cloud Access Security Broker (CASB) or equivalent tooling to detect and control access to unsanctioned cloud services.
- The IT Security function shall maintain a catalogue of sanctioned and prohibited cloud services, reviewed quarterly.
- Violations of this section shall be escalated in accordance with [Organization Name]'s disciplinary procedures.

---

## 10. Data Encryption in Cloud

*This section specifies the mandatory encryption requirements for data at rest and in transit within cloud environments, as well as key management obligations. These requirements are designed to ensure that NCII data remains confidential even in the event of unauthorised CSP access or data disclosure.*

### 10.1 Encryption Principles

All encryption implementations under this policy shall:

- Use cryptographic algorithms and key lengths that are currently recommended by [NIST / NACSA / applicable authority] and that comply with applicable Malaysian standards.
- Prohibit the use of deprecated or weak algorithms (e.g., DES, 3DES, RC4, MD5, SHA-1 for signing).
- Ensure that encryption keys are managed separately from the encrypted data.
- Support key rotation without service interruption for Tier 1 and Tier 2 workloads.

### 10.2 Encryption at Rest Requirements

| Data Classification | Encryption Requirement | Key Management |
|---|---|---|
| **NCII / Restricted** | AES-256; mandatory; no exceptions | Customer-Managed Keys (CMK) only; keys stored in [Organization Name]-controlled HSM or approved KMS |
| **Confidential** | AES-256; mandatory | CMK preferred; CSP-managed keys permissible with CISO approval and compensating controls |
| **Internal** | AES-256; mandatory | CSP-managed keys permissible |
| **Public** | Encryption recommended; not mandatory for truly public data | CSP default |

*[Organization Name] shall not store NCII or Confidential data in cloud storage buckets, databases, or file systems that do not have encryption at rest enabled.*

### 10.3 Encryption in Transit Requirements

- All data transmitted to, from, and within cloud environments must be encrypted in transit using **TLS 1.2 or higher**. TLS 1.3 is preferred for new deployments.
- TLS 1.0 and TLS 1.1 are **prohibited**.
- Certificate management (issuance, rotation, and revocation) for cloud-hosted services must be documented and automated where technically feasible to prevent certificate expiry incidents.
- Internal service-to-service communication within a cloud environment must be encrypted in transit for Tier 1 and Tier 2 workloads.
- Certificates used for NCII-related services must be issued by a trusted Certificate Authority. Self-signed certificates are prohibited for production Tier 1 and Tier 2 environments.

### 10.4 Key Management

*Define the governance framework for cryptographic key management in cloud environments. This is a critical control for data sovereignty and confidentiality.*

#### 10.4.1 Key Management Principles

- Encryption keys for NCII data must remain under [Organization Name]'s control at all times. The CSP must not have access to plaintext encryption keys for Tier 1 workloads.
- Key generation must use a cryptographically secure random number generator approved under [Organization Name]'s Cryptography Standard.
- Keys must be stored in a Hardware Security Module (HSM) or a FIPS 140-2 Level 2 (or higher) validated key management system.

#### 10.4.2 Key Lifecycle Management

| Key Lifecycle Stage | Requirement |
|---|---|
| **Generation** | Keys shall be generated using approved algorithms and key lengths within an HSM or approved KMS |
| **Storage** | Keys shall be stored encrypted; key material shall never be stored in plaintext in application code, configuration files, or version control systems |
| **Distribution** | Key distribution shall use secure, authenticated channels; keys shall never be transmitted in cleartext |
| **Rotation** | Data encryption keys shall be rotated at least [annually] or following a suspected key compromise; rotation must not result in data unavailability |
| **Revocation** | Compromised or retired keys shall be revoked immediately; revocation must be logged and verified |
| **Destruction** | Retired keys shall be securely destroyed following the minimum retention period for data encrypted under those keys; destruction must be logged and evidenced |

#### 10.4.3 Bring Your Own Key (BYOK) and Hold Your Own Key (HYOK)

- For Tier 1 cloud workloads, [Organization Name] shall implement **Bring Your Own Key (BYOK)** or **Hold Your Own Key (HYOK)** controls, ensuring that [Organization Name] retains sole control of the encryption keys.
- The choice between BYOK and HYOK shall be determined by the CISO based on the sensitivity of the workload and the technical capabilities of the CSP.
- HYOK implementations, in which the key never leaves [Organization Name]'s control and the CSP processes data without access to plaintext keys, are the preferred model for the most sensitive NCII workloads.

### 10.5 Secrets Management

- Application secrets (API keys, database credentials, service account passwords, certificates) must not be stored in source code, configuration files, or environment variables in production cloud environments.
- All secrets for Tier 1 and Tier 2 cloud workloads must be stored in an approved secrets management solution (e.g., cloud-native secrets manager with CMK, or an enterprise secrets vault).
- Access to secrets must be controlled via IAM policies and must be logged.
- Secrets must be rotated in accordance with the Cryptography and Key Management Standard.

---

## 11. Cloud Incident Response

*This section defines the procedures for detecting, managing, and reporting security incidents affecting [Organization Name]'s cloud environments. It supplements the organisation's overarching Incident Response Policy with cloud-specific procedures and must be read in conjunction with it.*

### 11.1 Scope of Cloud Incidents

For the purposes of this policy, a **cloud security incident** is any event that actually or potentially affects the confidentiality, integrity, or availability of NCII data or NCII systems hosted in a cloud environment. Examples include, but are not limited to:

- Unauthorised access to cloud management consoles, storage buckets, or databases.
- Misconfiguration of cloud resources resulting in unintended public exposure of data.
- Compromise of cloud credentials or service account tokens.
- CSP-reported security incidents affecting [Organization Name]'s data or infrastructure.
- Ransomware, malware, or destructive attacks on cloud-hosted workloads.
- Data exfiltration from cloud storage or databases.
- Denial of service attacks against cloud-hosted NCII systems.
- Unauthorised modification or deletion of cloud-hosted data.

### 11.2 Incident Detection and Identification

*Define the technical and procedural mechanisms for detecting cloud security incidents.*

[Organization Name] shall maintain the following detection capabilities for cloud environments:

- **Cloud-native logging:** All cloud management and data plane logs (e.g., AWS CloudTrail, Azure Monitor, GCP Cloud Audit Logs) shall be enabled, centralised, and forwarded to [Organization Name]'s SIEM.
- **Security information and event management (SIEM):** The SOC shall maintain cloud-specific detection rules and alerts within the SIEM, including rules for privilege escalation, large data transfers, unusual geographic access, and disabled logging.
- **Cloud Security Posture Management (CSPM):** Automated CSPM tooling shall monitor for misconfigurations and policy violations in real time.
- **CSP security notifications:** [Organization Name] shall subscribe to CSP security bulletins and incident notifications and shall designate a responsible contact for receiving CSP incident communications.

### 11.3 Incident Response Phases

#### Phase 1 — Detection and Triage

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1.1 | Detect anomalous activity via SIEM alert, CSPM alert, CSP notification, or user report | SOC Analyst | Continuous |
| 1.2 | Perform initial triage to determine whether the event constitutes a security incident | SOC Lead | Within [1 hour] of detection |
| 1.3 | Assign incident severity level (see Section 11.4) | SOC Lead | Within [1 hour] of detection |
| 1.4 | Notify Incident Commander and escalate in accordance with severity level | SOC Lead | Per escalation matrix |

#### Phase 2 — Containment

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 2.1 | Isolate affected cloud resources (revoke credentials, restrict network access, suspend affected accounts) | Cloud Operations / SOC | Within [2 hours] of classification |
| 2.2 | Preserve evidence — capture logs, snapshots, and network captures before remediation | SOC / IR Team | Prior to any remediation action |
| 2.3 | Notify the CISO and escalate to Cloud IR Team | Incident Commander | Per escalation matrix |
| 2.4 | Engage CSP security support if CSP infrastructure is implicated | CISO / IT Security | As required |

#### Phase 3 — Eradication and Recovery

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 3.1 | Identify root cause and remove malicious artefacts or unauthorised access paths | IR Team + Cloud Operations | [Target timeframe based on severity] |
| 3.2 | Rebuild or restore affected cloud resources from known-good snapshots | Cloud Operations | Per RTO defined in BCP |
| 3.3 | Rotate all potentially compromised credentials, keys, and certificates | Cloud Operations + IT Security | Prior to service restoration |
| 3.4 | Validate restoration and confirm no residual indicators of compromise | IR Team | Before declaring incident closed |

#### Phase 4 — Post-Incident Activities

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 4.1 | Conduct post-incident review and root cause analysis | CISO / IR Lead | Within [5 business days] of closure |
| 4.2 | Document lessons learned and identify preventive controls | IR Team | Within [10 business days] of closure |
| 4.3 | Update cloud security controls, runbooks, and detection rules as required | IT Security + Cloud Operations | As determined by review |
| 4.4 | Report to Board / Risk Committee as appropriate | CISO | Per governance calendar |

### 11.4 Incident Severity Classification

| Severity | Criteria | Notification Escalation | Target NACSA Notification |
|---|---|---|---|
| **Critical (P1)** | Confirmed NCII data breach; NCII system unavailability; ransomware affecting production | Immediate: CISO, CEO, Legal | Per Act 854 Section 24 — notify NACSA within [prescribed timeframe] |
| **High (P2)** | Suspected NCII data exposure; significant cloud account compromise; data integrity impact | Within 1 hour: CISO, IT Security Head | Assess for NACSA notification; escalate to CISO |
| **Medium (P3)** | Isolated misconfiguration without confirmed data exposure; suspicious activity requiring investigation | Within 4 hours: IT Security Head | Monitor; notify CISO if scope escalates |
| **Low (P4)** | Policy violation without data impact; low-risk misconfiguration | Within 24 hours: IT Security | Document; include in periodic reporting |

*[Organization Name]'s Legal function must be engaged for all P1 and P2 incidents to assess notification obligations under Act 854, PDPA, and any sector-specific requirements.*

### 11.5 NACSA Incident Reporting Obligations

Pursuant to **Section 24 of the Cyber Security Act 2024**, [Organization Name] must report cyber security incidents affecting NCII systems to NACSA within the prescribed timeframe and in the prescribed manner. Specifically:

- The **Incident Commander** is responsible for ensuring timely NACSA notification for all Critical (P1) and High (P2) incidents affecting NCII systems or data.
- NACSA notification must include, at minimum: [describe information required by NACSA reporting guidelines or prescribed form — e.g., nature of incident, affected systems, data types involved, containment actions taken, estimated impact].
- All NACSA notifications and correspondence must be copied to the CISO and Legal.
- [Organization Name] shall maintain records of all NACSA notifications and NACSA's responses for a minimum of [X years].

*Reference the NACSA incident reporting portal or contact details in Appendix D.*

### 11.6 CSP Coordination

During a cloud security incident:

- [Organization Name] shall engage the CSP's security support team where the incident implicates CSP-managed infrastructure or requires CSP cooperation for evidence preservation.
- The designated CSP security contact and escalation path for each major CSP shall be documented in the Cloud Incident Response Runbook (Appendix E).
- [Organization Name] shall establish and maintain a secure communication channel with each CSP's security team, independent of the potentially compromised cloud environment.

### 11.7 Evidence Preservation and Forensics

- All forensic activities in cloud environments shall be conducted in a manner that preserves the admissibility of evidence in potential legal or regulatory proceedings.
- Cloud logs, snapshots, and other evidentiary artefacts shall be captured before any remediation action and stored in an evidence repository separate from the production cloud environment.
- The chain of custody for forensic evidence must be maintained and documented from collection through to disposal.

---

## 12. Roles and Responsibilities

*This section defines the cloud security governance roles and assigns accountability using a RACI framework. Ensure that all named roles correspond to positions in [Organization Name]'s current organisational structure.*

### 12.1 Key Roles

| Role | Description |
|---|---|
| **Chief Information Security Officer (CISO)** | Policy owner; accountable for overall cloud security governance; approves CSP assessments; approves exceptions; receives incident escalations; reports to Board. |
| **IT Security Head / Cloud Security Team** | Responsible for operational implementation of policy controls; conducts CSP assessments; manages CSPM and SIEM; performs access reviews; leads incident response. |
| **Cloud Operations / Platform Team** | Responsible for provisioning and configuring cloud resources in accordance with this policy; implements technical controls; manages cloud infrastructure lifecycle. |
| **Business Unit Owner / System Owner** | Responsible for classifying data in their systems; approving access to their cloud resources; participating in access reviews; escalating security concerns. |
| **Chief Information Officer (CIO) / IT Director** | Responsible for overall IT governance; ensures adequate resourcing of cloud security; receives periodic reporting from CISO. |
| **Legal / Compliance** | Advises on regulatory obligations; reviews CSP contracts; assesses NACSA and PDPA notification obligations; supports incident response. |
| **Procurement** | Coordinates vendor engagement; ensures CSP contracts include required security clauses; supports TPRM process. |
| **Internal Audit** | Provides independent assurance on compliance with this policy; conducts periodic cloud security audits. |
| **All Staff** | Comply with this policy; report suspected cloud security incidents; do not procure unsanctioned cloud services. |

### 12.2 RACI Matrix

*R = Responsible, A = Accountable, C = Consulted, I = Informed*

| Activity | CISO | IT Security | Cloud Ops | BU Owner | CIO | Legal | Procurement | Internal Audit |
|---|---|---|---|---|---|---|---|---|
| Policy ownership and annual review | **A** | R | I | I | C | C | I | I |
| CSP assessment and approval | **A** | R | C | C | I | C | C | I |
| Maintaining Approved CSP Register | A | **R** | I | I | I | I | I | I |
| CSP contract review and negotiation | C | C | I | I | A | **R** | R | I |
| Data residency verification | A | **R** | R | C | I | C | I | I |
| Encryption key management | A | **R** | R | I | I | I | I | I |
| Cloud access provisioning | C | C | **R** | A | I | I | I | I |
| Privileged access reviews | A | **R** | C | I | I | I | I | I |
| Cloud security monitoring (SIEM/CSPM) | A | **R** | C | I | I | I | I | I |
| Cloud incident response (execution) | A | **R** | R | C | I | C | I | I |
| NACSA incident notification | A | C | I | I | I | **R** | I | I |
| Policy exception approval | **A** | R | I | C | C | C | I | I |
| Internal audit and assurance | I | C | C | C | A | I | I | **R** |
| Staff awareness and training | A | **R** | I | I | I | I | I | I |

---

## 13. Compliance, Monitoring, and Enforcement

*This section defines how [Organization Name] will verify compliance with this policy and address violations.*

### 13.1 Compliance Monitoring

[Organization Name] shall maintain the following controls to verify ongoing compliance with this policy:

- **Automated CSPM scanning:** Continuous automated assessment of cloud resource configurations against defined security baselines and this policy's requirements. Critical findings must be remediated within [X business days].
- **Cloud access reviews:** Periodic reviews of all cloud user and administrator accounts as specified in Section 9.5.
- **CSP assessment schedule:** Reassessment of all approved CSPs in accordance with Section 6.5.
- **Key management reviews:** Periodic review of cryptographic key inventory, rotation compliance, and key management procedures, at least [annually].
- **Cloud security metrics:** The IT Security function shall report the following metrics to the CISO [monthly]:

| Metric | Target | Reporting Period |
|---|---|---|
| % of cloud workloads with encryption at rest enabled | 100% | Monthly |
| % of cloud admin accounts with MFA enabled | 100% | Monthly |
| Number of critical CSPM findings open > [X days] | 0 | Monthly |
| Number of unsanctioned cloud services detected | Trend to zero | Monthly |
| CSP assessments overdue | 0 | Quarterly |
| Cloud security incidents (by severity) | Trend | Monthly |

### 13.2 Internal Audit

Internal Audit shall conduct an independent review of compliance with this policy at least [annually], reporting findings to the Audit Committee. The scope of the audit shall include, at minimum:

- Validation of the Approved CSP Register and currency of CSP assessments.
- Sample testing of cloud access provisioning and access review processes.
- Review of encryption at rest and in transit compliance for a sample of Tier 1 and Tier 2 workloads.
- Assessment of incident response capability and post-incident review records.

### 13.3 Non-Compliance and Enforcement

Violations of this policy shall be addressed as follows:

| Violation Severity | Example | Response |
|---|---|---|
| **Critical** | Storing NCII data in an unapproved jurisdiction; disabling encryption for Tier 1 data; using a non-approved CSP for NCII workloads | Immediate escalation to CISO; mandatory remediation within [24 hours]; formal disciplinary process; NACSA notification if data is at risk |
| **High** | Privileged cloud access without MFA; failure to rotate compromised keys; unsanctioned cloud service in use for Confidential data | Escalation to IT Security Head and CISO; remediation within [5 business days]; formal warning |
| **Medium** | Overdue access review; minor misconfiguration without data exposure | Escalation to IT Security; remediation within [10 business days]; documented corrective action |
| **Low** | Minor procedural deviation; documentation gap | Corrective action tracked in issue register; remediated within [30 business days] |

---

## 14. Policy Exceptions

*Define the process for requesting and approving exceptions to this policy. All exceptions must be documented, risk-assessed, and time-limited.*

### 14.1 Exception Process

Exceptions to any requirement of this policy must be requested in writing using the Policy Exception Request Form ([Form Reference]). Exceptions will only be considered where:

- Technical or operational constraints make compliance infeasible.
- A compensating control is in place that provides equivalent risk reduction.
- The exception is time-limited, with a defined remediation path.

### 14.2 Exception Approval Authority

| Exception Risk Level | Approval Authority | Maximum Duration |
|---|---|---|
| Low (Tier 3/4 workloads, procedural deviation) | IT Security Head | 6 months |
| Medium (Tier 2 workloads, control deviation) | CISO | 6 months |
| High (Tier 1 / NCII workloads, any control deviation) | CISO + CIO | 3 months; Board awareness required |
| Critical (encryption, data residency, CSP approval waiver) | CISO + CIO + Board | Not permissible without NACSA consultation |

### 14.3 Exception Register

All approved exceptions shall be recorded in the Policy Exception Register, maintained by the IT Security function. The register shall be reviewed by the CISO [quarterly] and presented to Internal Audit annually.

| Exception ID | Policy Section | Description | Compensating Control | Approved By | Expiry Date | Status |
|---|---|---|---|---|---|---|
| [EXC-001] | [Section] | [Description] | [Compensating control] | [Approver] | [Date] | Active / Expired |

---

## 15. Review and Approval

### 15.1 Review Schedule

This policy shall be reviewed by the CISO at least **annually**, or earlier if triggered by:

- A material change in [Organization Name]'s cloud strategy or CSP portfolio.
- A significant cloud security incident.
- New or amended NACSA requirements, BNM guidelines, or Malaysian law.
- Material changes to the threat landscape affecting cloud environments.
- Recommendations arising from Internal Audit.

### 15.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial version — approved and issued. |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of major revision] |

### 15.3 Approval Sign-Off

*All named approvers must review and sign this policy before it is issued. Obtain wet or electronic signatures as required by [Organization Name]'s document governance framework.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Chief Information Security Officer** | [Name] | __________________ | [Date] |
| **Chief Information Officer / IT Director** | [Name] | __________________ | [Date] |
| **Head of Legal / Compliance** | [Name] | __________________ | [Date] |
| **Chief Risk Officer** | [Name] | __________________ | [Date] |
| **Chief Executive Officer** | [Name] | __________________ | [Date] |

*For Board-level policies, include a Board resolution reference:*

**Board Approval Reference:** [Board Resolution Number / Meeting Date]

---

## 16. References

*List all normative and informative references used in drafting this policy. Update this section as new guidance is issued.*

### 16.1 Malaysian Legislation and Regulatory Instruments

| Reference | Description | Relevant Sections |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Primary legislation governing cyber security of NCII in Malaysia; administered by NACSA | **Section 18** — Obligations of NCII entities to comply with cyber security measures and standards; **Section 24** — Obligation to report cyber security incidents affecting NCII to NACSA |
| Personal Data Protection Act 2010 (Act 709) — PDPA | Governs the processing of personal data in commercial transactions in Malaysia | Principles 1-7; Cross-border transfer restrictions |
| Communications and Multimedia Act 1998 (Act 588) | Governs communications and multimedia activities | As applicable |
| Digital Signature Act 1997 (Act 562) | Governs digital signatures and PKI | As applicable to certificate management |
| BNM Risk Management in Technology (RMiT) Policy Document | BNM policy document governing technology and cyber risk for financial institutions | Para 10 (Cloud Services) — if [Organization Name] is a BNM-regulated entity |

### 16.2 International Standards

| Standard | Title | Relevance |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | ISMS baseline standard |
| ISO/IEC 27017:2015 | Code of Practice for Information Security Controls for Cloud Services | Cloud-specific security controls |
| ISO/IEC 27018:2019 | Code of Practice for Protection of PII in Public Clouds | PII in cloud environments |
| ISO/IEC 27035 | Information Security Incident Management | Cloud incident response |
| NIST SP 800-145 | The NIST Definition of Cloud Computing | Cloud terminology and taxonomy |
| NIST SP 800-144 | Guidelines on Security and Privacy in Public Cloud Computing | Cloud risk and control guidance |
| NIST SP 800-57 | Recommendation for Key Management | Cryptographic key management |
| CSA Cloud Controls Matrix v4 | Cloud Security Alliance control framework | Cloud control mapping |
| CIS Benchmarks | Center for Internet Security hardening benchmarks | Cloud configuration baselines |

### 16.3 Internal Documents

| Document | Document ID | Location |
|---|---|---|
| Information Security Policy | [Doc ID] | [Location] |
| Data Classification and Handling Policy | [Doc ID] | [Location] |
| Third-Party Risk Management Policy | [Doc ID] | [Location] |
| Identity and Access Management Policy | [Doc ID] | [Location] |
| Cryptography and Key Management Standard | [Doc ID] | [Location] |
| Incident Response Policy | [Doc ID] | [Location] |
| Business Continuity and Disaster Recovery Policy | [Doc ID] | [Location] |
| Cloud Incident Response Runbook | [Doc ID] | [Location] |
| Approved Cloud Service Provider Register | [Doc ID] | [Location] |
| Policy Exception Request Form | [Doc ID] | [Location] |

---

## 17. Appendices

### Appendix A — Cloud Risk Assessment Framework

*This appendix provides the standardised risk assessment methodology and scoring criteria used to evaluate cloud service providers and cloud workloads under Section 6 of this policy. Include the risk scoring matrix, weighting criteria, and risk acceptance thresholds.*

**A.1 Risk Assessment Scoring Matrix**

*[Insert the cloud risk scoring matrix used in [Organization Name]'s TPRM process, adapted for CSP assessment. Define likelihood and impact scales, scoring methodology, and risk tier thresholds.]*

| Risk Domain | Weight | Scoring Criteria | Max Score |
|---|---|---|---|
| Security Certifications | [X%] | [Criteria] | [Score] |
| Data Residency Controls | [X%] | [Criteria] | [Score] |
| Incident Response Capability | [X%] | [Criteria] | [Score] |
| Regulatory Compliance | [X%] | [Criteria] | [Score] |
| Financial Stability | [X%] | [Criteria] | [Score] |
| **Total** | 100% | | [Max] |

**A.2 Risk Tier Thresholds**

| Risk Score | Risk Tier | Approval Requirement |
|---|---|---|
| [Score Range] | Acceptable | IT Security Head |
| [Score Range] | Conditionally Acceptable | CISO with conditions |
| [Score Range] | Unacceptable | CISO rejection; CSP not approved |

---

### Appendix B — Cloud Security Baseline Controls Checklist

*This appendix provides the technical security baseline that must be verified for all Tier 1 and Tier 2 cloud deployments prior to go-live. Cloud Operations and IT Security shall complete this checklist as part of the cloud onboarding process.*

**B.1 Identity and Access Management**

- [ ] MFA enabled for all accounts (not just privileged accounts)
- [ ] Root/owner account access restricted and MFA enforced with hardware token
- [ ] Centralised identity federation with enterprise IdP configured
- [ ] Least-privilege IAM policies applied; wildcards in production policies prohibited
- [ ] Service accounts inventory maintained; accounts without owners removed
- [ ] Privileged access management solution configured for admin access

**B.2 Logging and Monitoring**

- [ ] Management plane logging enabled (e.g., CloudTrail, Azure Activity Log)
- [ ] Data plane logging enabled for all NCII data stores
- [ ] Logs forwarded to centralised SIEM
- [ ] Log retention period configured per Log Retention Standard ([X months])
- [ ] Log integrity protection enabled (e.g., log file validation, immutable storage)
- [ ] Cloud security alerts configured in SIEM for key threat scenarios

**B.3 Network Security**

- [ ] Dedicated virtual network / VPC deployed; not using default network
- [ ] Network segmentation applied; NCII workloads isolated from internet-facing tiers
- [ ] Internet-facing attack surface minimised; unnecessary public IPs removed
- [ ] Administrative ports (SSH, RDP, management APIs) not exposed to internet
- [ ] Network flow logs enabled
- [ ] Intrusion detection / WAF deployed for internet-facing services

**B.4 Data Protection**

- [ ] Encryption at rest enabled for all storage resources
- [ ] CMK configured for Tier 1 data stores
- [ ] Encryption in transit enforced (TLS 1.2+); TLS 1.0/1.1 disabled
- [ ] Certificate management configured; expiry monitoring in place
- [ ] Secrets management solution in use; no secrets in code or config files
- [ ] Data Loss Prevention (DLP) controls evaluated and deployed where applicable

**B.5 Configuration Management**

- [ ] Infrastructure-as-Code (IaC) templates reviewed by IT Security before deployment
- [ ] CSPM tooling enabled; critical findings must be remediated before go-live
- [ ] Vulnerability scanning configured for cloud-hosted workloads
- [ ] Patch management process defined and tested
- [ ] Backup and recovery configured and tested; RTO/RPO validated against BCP

---

### Appendix C — Data Transfer Impact Assessment Template

*Complete this template for each cross-border transfer of Confidential or higher data, as required by Section 7.3 of this policy. Retain completed assessments in the Data Transfer Register.*

**Organisation:** [Organization Name]

**Assessment Reference:** [TIA-YYYY-NNN]

**Date of Assessment:** [Date]

**Assessor:** [Name, Title]

**Approved By:** [CISO Name] | **Approval Date:** [Date]

| Field | Details |
|---|---|
| Transfer Description | [Brief description of the data transfer — what data, to where, for what purpose] |
| Data Classification | [NCII/Restricted / Confidential / Internal] |
| Data Types | [e.g., Customer PII, financial transaction records, employee data] |
| Source System | [System name and location] |
| Destination System / CSP | [CSP name, service, and data centre region] |
| Destination Jurisdiction | [Country] |
| Transfer Mechanism | [e.g., TLS-encrypted API, SFTP, cloud replication] |
| Legal Basis for Transfer | [Contractual necessity / Regulatory obligation / Consent / Other] |
| Destination Jurisdiction Risk Assessment | [Assessment of adequacy of destination jurisdiction's data protection laws; risk of foreign government access] |
| Contractual Safeguards | [Reference to DPA clauses, standard contractual clauses, or other safeguards] |
| Technical Controls | [Encryption, CMK, access controls] |
| Residual Risk | [Low / Medium / High] | 
| CISO Approval | [Approved / Conditionally Approved / Rejected] |
| Review Due Date | [Annual review date] |

---

### Appendix D — NACSA Incident Notification Reference

*This appendix provides reference information for notifying NACSA of cyber security incidents in compliance with Section 24 of the Cyber Security Act 2024. Verify currency of contact details prior to use.*

**NACSA Incident Reporting Portal:** [NACSA official portal URL — verify with NACSA]

**NACSA Emergency Contact:** [Contact details — obtain from NACSA directly]

**Prescribed Notification Timeframe:** [Insert the timeframe prescribed by NACSA under Act 854 or applicable subsidiary legislation — verify against current regulatory requirements]

**Minimum Information Required in NACSA Notification:**

- [ ] Name and designation of NCII entity
- [ ] Date and time of incident detection
- [ ] Nature and description of the incident
- [ ] NCII systems and data affected
- [ ] Estimated impact and affected user/data population
- [ ] Containment actions taken
- [ ] Current status of the incident
- [ ] Contact details of [Organization Name]'s incident lead

*[Organization Name] shall maintain a pre-completed NACSA notification template for use during incidents, to minimise reporting delays. Template maintained at: [Internal location].]*

---

### Appendix E — Cloud Incident Response Runbook Summary

*This appendix provides a summary reference for the Cloud Incident Response Runbook. The full runbook is maintained separately at [Document Reference / Location]. The runbook must be reviewed at least [annually] and following any major cloud incident.*

**E.1 Incident Response Team Contacts**

| Role | Primary Contact | Secondary Contact | Contact Method |
|---|---|---|---|
| Incident Commander | [Name] | [Name] | [Phone / Secure Comms] |
| CISO | [Name] | [Name] | [Phone / Secure Comms] |
| Cloud Operations Lead | [Name] | [Name] | [Phone / Secure Comms] |
| SOC Lead | [Name] | [Name] | [Phone / Secure Comms] |
| Legal / Compliance | [Name] | [Name] | [Phone / Secure Comms] |
| Communications / PR | [Name] | [Name] | [Phone / Secure Comms] |

**E.2 CSP Security Contact Details**

| CSP | Security Contact / Portal | Escalation Path | SLA for Response |
|---|---|---|---|
| [CSP Name] | [Security portal / email] | [Escalation path] | [SLA] |
| [CSP Name] | [Security portal / email] | [Escalation path] | [SLA] |

**E.3 Quick Reference — Incident Severity and Escalation**

| Severity | Who to Call First | NACSA Notification |
|---|---|---|
| Critical (P1) | Incident Commander → CISO → CEO → Legal | Mandatory — within prescribed timeframe |
| High (P2) | SOC Lead → CISO → Legal | Assess with CISO and Legal |
| Medium (P3) | SOC Lead → IT Security Head | Not required unless scope escalates |
| Low (P4) | SOC Analyst → IT Security | Not required |

---

### Appendix F — Glossary of Cloud Service Models

*Reference guide for readers unfamiliar with cloud computing terminology.*

| Model | Definition | [Organization Name] Examples |
|---|---|---|
| **IaaS** (Infrastructure as a Service) | The CSP provides virtualised compute, storage, and networking. [Organization Name] manages the OS, middleware, runtime, data, and applications. | [Insert examples from [Organization Name]'s environment] |
| **PaaS** (Platform as a Service) | The CSP provides a managed platform including OS and middleware. [Organization Name] manages the application and data. | [Insert examples] |
| **SaaS** (Software as a Service) | The CSP provides a fully managed application. [Organization Name] manages configuration, data, and access. | [Insert examples] |
| **FaaS** (Function as a Service) | Serverless compute model; [Organization Name] deploys code functions; CSP manages all underlying infrastructure. | [Insert examples] |

---

*— End of Document —*

---

*This document is subject to annual review. For queries regarding this policy, contact the Information Security function at [infosec@organization.com.my]. For regulatory enquiries related to this policy, contact the Compliance function at [compliance@organization.com.my].*

*Document ID: [Document ID] | Version: 1.0 | Classification: Confidential | Owner: CISO | [Organization Name]*