# Cloud Security Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Title** | Cloud Security Standard |
| **Category** | Standard |
| **Owner** | Cloud Architecture / CISO |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — 6 months from Last Review Date] |
| **Approved By** | [Approved By — Name and Title] |
| **Regulatory Alignment** | Cyber Security Act 2024 (Act 854) — NACSA, s18, s24 |

---

> **Document Control Notice:** This document is classified **Confidential**. It must not be reproduced, distributed, or disclosed outside [Organization Name] without explicit written authorization from the document owner. Printed copies are uncontrolled. Always refer to the document management system for the current version.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Abbreviations](#2-definitions-and-abbreviations)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Cloud Service Provider (CSP) Selection Criteria](#4-cloud-service-provider-csp-selection-criteria)
5. [Data Sovereignty and Malaysian Jurisdiction Requirements](#5-data-sovereignty-and-malaysian-jurisdiction-requirements)
6. [Identity Federation Requirements](#6-identity-federation-requirements)
7. [Cloud Security Posture Management (CSPM)](#7-cloud-security-posture-management-cspm)
8. [Container and Serverless Security](#8-container-and-serverless-security)
9. [Cloud Logging and Monitoring](#9-cloud-logging-and-monitoring)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Compliance and Exceptions](#11-compliance-and-exceptions)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Cloud Security Standard establishes the minimum security requirements that [Organization Name] must apply to all cloud deployments hosting National Critical Information Infrastructure (NCII) workloads. It operationalises the obligations set out under the **Cyber Security Act 2024 (Act 854)**, specifically Sections 18 and 24, which impose duties on NCII sector leads and entities to implement and maintain appropriate cybersecurity measures proportionate to the risk profile of critical systems and data.

This standard provides prescriptive, enforceable controls that supplement [Organization Name]'s overarching Information Security Policy and Cloud Adoption Framework. It is designed to ensure that cloud environments operated by or on behalf of [Organization Name] maintain confidentiality, integrity, and availability of NCII workloads in accordance with NACSA directives and Malaysian regulatory expectations.

### 1.2 Scope

This standard applies to:

- All cloud computing environments (public, private, hybrid, and multi-cloud) used to process, store, or transmit data classified as NCII or supporting NCII-designated systems
- All Cloud Service Providers (CSPs) engaged by [Organization Name] or its subsidiaries, whether on a direct contractual basis or through managed service intermediaries
- All [Organization Name] personnel, contractors, vendors, and third parties who design, deploy, configure, administer, or access cloud-hosted NCII workloads
- All workloads regardless of service model, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)
- All geographic regions where [Organization Name] operates cloud infrastructure, with specific controls applicable to data residency in Malaysia

This standard **does not apply** to:

- Non-production, sandbox, or research environments that are air-gapped from NCII data and systems, unless specifically designated otherwise by the CISO
- Legacy on-premise systems with no cloud integration
- Personal or shadow IT cloud accounts not provisioned or authorised by [Organization Name]'s IT governance process

### 1.3 Objectives

The objectives of this standard are to:

- Define minimum-security baselines for all cloud services hosting NCII workloads
- Ensure compliance with Act 854, s18 (duty to implement cybersecurity measures) and s24 (compliance with NACSA directives and standards)
- Establish accountability for cloud security governance across technology and business stakeholders
- Provide a repeatable, auditable framework for CSP assessment, onboarding, and ongoing assurance
- Reduce the risk of unauthorised access, data exfiltration, and service disruption in cloud environments

---

## 2. Definitions and Abbreviations

*This section defines key terms used throughout this standard to ensure consistent interpretation across all stakeholders.*

### 2.1 Definitions

| Term | Definition |
|---|---|
| **Cloud Service Provider (CSP)** | A third-party organisation that offers cloud computing services, including storage, computing, networking, or application services delivered over the internet or a private network |
| **NCII** | National Critical Information Infrastructure — information infrastructure designated by the Government of Malaysia whose incapacitation or destruction would have a debilitating impact on national security, economy, public health, or safety |
| **NCII Workload** | Any application, service, dataset, or processing job that handles data classified as NCII or that forms part of an NCII-designated system |
| **Cloud Security Posture Management (CSPM)** | A continuous process and set of tools used to identify and remediate cloud misconfigurations, policy violations, and compliance gaps across cloud environments |
| **Identity Federation** | A mechanism enabling users authenticated in one domain to access resources in another domain without separate credentials, typically implemented via SAML 2.0 or OpenID Connect |
| **Shared Responsibility Model** | A cloud security framework delineating the security obligations of the CSP versus the cloud customer depending on the service model (IaaS, PaaS, SaaS) |
| **Data Residency** | The requirement that data physically resides within a specified geographic boundary, in this context, within Malaysia |
| **Data Sovereignty** | The principle that data is subject to the laws and regulations of the country in which it is located or processed |
| **Container** | A lightweight, portable unit of software packaging an application and its dependencies, typically managed via orchestration platforms such as Kubernetes |
| **Serverless Computing** | A cloud execution model where the CSP dynamically manages allocation of machine resources, eliminating the need for the customer to provision or manage servers |
| **Landing Zone** | A pre-configured, secure cloud environment baseline established to provide a foundation for deploying workloads in alignment with organisational security standards |
| **SIEM** | Security Information and Event Management — a platform aggregating and correlating security logs for real-time analysis and incident detection |
| **Privileged Access Workstation (PAW)** | A dedicated, hardened workstation used exclusively for administrative access to cloud management planes |

### 2.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| Act 854 | Cyber Security Act 2024 |
| BNM | Bank Negara Malaysia |
| CISO | Chief Information Security Officer |
| CSP | Cloud Service Provider |
| CSPM | Cloud Security Posture Management |
| CWPP | Cloud Workload Protection Platform |
| IAM | Identity and Access Management |
| IaC | Infrastructure as Code |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| PDPA | Personal Data Protection Act 2010 |
| RBAC | Role-Based Access Control |
| SLA | Service Level Agreement |
| SOC | Security Operations Centre |
| TLS | Transport Layer Security |
| VPC | Virtual Private Cloud |
| WAF | Web Application Firewall |
| ZTA | Zero Trust Architecture |

---

## 3. Regulatory and Policy Context

### 3.1 Legislative Framework

*This section situates the standard within the applicable Malaysian regulatory and legal landscape. Authors should update references to reflect any amendments to legislation or new NACSA directives issued after the last review date.*

This standard is issued in response to and in compliance with the following legislative and regulatory instruments:

| Instrument | Relevant Provision | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Duty of NCII entity to implement and maintain cybersecurity measures |
| Cyber Security Act 2024 (Act 854) | Section 24 | Compliance with NACSA cybersecurity standards and directives |
| Personal Data Protection Act 2010 (Act 709) | Section 5 — Security Principle | Obligation to protect personal data against loss, misuse, and unauthorised access |
| [Any applicable BNM Policy Document] | [Relevant clause] | [Obligation — e.g., cloud outsourcing controls] |
| [Any applicable NACSA Directive] | [Reference number] | [Specific technical requirement] |

### 3.2 Internal Policy Alignment

This standard is subordinate to the following [Organization Name] policies and must be read in conjunction with them:

- [Organization Name] Information Security Policy [Document ID]
- [Organization Name] Cloud Adoption Policy [Document ID]
- [Organization Name] Data Classification and Handling Policy [Document ID]
- [Organization Name] Third-Party and Vendor Risk Management Policy [Document ID]
- [Organization Name] Incident Management and Response Policy [Document ID]
- [Organization Name] Business Continuity and Disaster Recovery Policy [Document ID]

### 3.3 Relationship to Other Standards

| Related Standard | Relationship |
|---|---|
| [Organization Name] Network Security Standard | Governs connectivity between cloud and on-premise environments |
| [Organization Name] Endpoint Security Standard | Applies to endpoints used to administer cloud resources |
| [Organization Name] Cryptographic Controls Standard | Defines approved encryption algorithms and key management practices |
| [Organization Name] Vulnerability Management Standard | Applies to vulnerability scanning of cloud-hosted workloads |
| [Organization Name] Access Management Standard | Governs IAM practices supplemented by this standard's federation requirements |

---

## 4. Cloud Service Provider (CSP) Selection Criteria

### 4.1 Overview

*This section defines the mandatory due diligence and assessment criteria that must be satisfied before [Organization Name] engages any CSP to host or process NCII workloads. Procurement teams and Cloud Architecture must reference this section at the initiation of any cloud procurement activity.*

Before any CSP is approved for NCII workload hosting, [Organization Name] must conduct a structured security assessment. Engagement of a CSP without completion of this assessment process is prohibited for NCII-scope workloads.

### 4.2 Mandatory Eligibility Criteria

A CSP must satisfy **all** of the following eligibility criteria before being considered for NCII workload hosting:

| Criterion | Requirement | Verification Method |
|---|---|---|
| **Legal Jurisdiction** | CSP must be able to contractually guarantee data residency within Malaysia or an approved jurisdiction (see Section 5) | Contract review; Data Processing Agreement |
| **Regulatory Compliance** | CSP must demonstrate compliance with applicable Malaysian laws and must not be subject to foreign laws that compel disclosure of Malaysian NCII data (e.g., US CLOUD Act equivalents) | Legal opinion; CSP attestation |
| **Security Certifications** | CSP must hold current, valid certifications: ISO/IEC 27001, ISO/IEC 27017, ISO/IEC 27018, and SOC 2 Type II at minimum | Certificate review; Third-party audit reports |
| **NACSA Recognition** | Preference for CSPs recognised or approved by NACSA for NCII workload hosting | NACSA published lists; attestation |
| **Penetration Testing** | CSP must permit [Organization Name] or its authorised party to conduct penetration testing within the shared responsibility scope | Contract clause |
| **Incident Notification** | CSP must contractually commit to notifying [Organization Name] of any security incident affecting NCII data within **4 hours** of detection, aligned to Act 854 reporting obligations | SLA; Incident Response Agreement |
| **Business Continuity** | CSP must provide documented evidence of RTO and RPO commitments meeting [Organization Name]'s NCII workload requirements | Business Continuity Plan; SLA |
| **Supply Chain Security** | CSP must disclose and manage sub-processors and must obtain [Organization Name]'s approval before adding new sub-processors with access to NCII data | Data Processing Agreement |

### 4.3 Security Assessment Process

The CSP assessment process must follow these stages:

1. **Initial Screening** — Verify eligibility criteria listed in Section 4.2 using publicly available certifications and completed vendor questionnaires (aligned to [Organization Name]'s standard Third-Party Security Questionnaire)
2. **Technical Deep Dive** — Cloud Architecture team conducts a technical review of the CSP's security architecture, network isolation capabilities, IAM framework, and encryption practices
3. **Legal and Contractual Review** — Legal and Compliance reviews Data Processing Agreement, Master Services Agreement, and any applicable standard contractual clauses for data sovereignty compliance
4. **Risk Assessment** — Information Security completes a formal risk assessment using [Organization Name]'s risk methodology, documenting residual risks and required mitigating controls
5. **CISO Approval** — Formal written approval from the CISO (or delegated authority) is required before contract execution for any NCII-scope CSP engagement
6. **Ongoing Assurance** — Periodic reassessment conducted in accordance with the vendor risk management programme (minimum annually; sooner upon material changes)

### 4.4 CSP Register

[Organization Name] must maintain a current register of approved CSPs for NCII workloads. The register must include:

| Field | Description |
|---|---|
| CSP Name | [CSP Name] |
| Service Model | IaaS / PaaS / SaaS |
| Approved Regions | [List of approved data centre regions] |
| Certification Status | [ISO 27001, SOC 2 Type II, etc. — expiry dates] |
| Data Classification Scope | [Maximum classification of data permitted — e.g., NCII Confidential] |
| Approval Date | [Date of CISO approval] |
| Next Review Date | [Date] |
| Contract Reference | [Contract ID] |

*The CSP Register is maintained by the Cloud Architecture team and reviewed semi-annually as part of this standard's review cycle. Current register location: [Document management system path or link].*

### 4.5 CSP Contractual Requirements

All contracts with CSPs hosting NCII workloads must include the following provisions as non-negotiable terms:

- **Right to Audit:** [Organization Name] retains the right to audit, inspect, or commission independent security assessments of the CSP's systems and controls relevant to NCII data
- **Data Return and Deletion:** Upon contract termination, CSP must return all NCII data in a portable format and provide written certification of secure deletion within [30 days]
- **Sub-processor Control:** CSP must obtain prior written approval before engaging sub-processors with access to NCII data
- **Law Enforcement Disclosure:** CSP must notify [Organization Name] of any law enforcement or government agency requests for NCII data to the extent permitted by law, and must resist compelled disclosure where legally permissible
- **Security Incident Notification:** 4-hour notification SLA for any incident with potential NCII impact
- **Regulatory Cooperation:** CSP must cooperate with NACSA or any Malaysian regulatory authority in the event of an investigation or audit involving [Organization Name]'s NCII data

---

## 5. Data Sovereignty and Malaysian Jurisdiction Requirements

### 5.1 Principles

*This section establishes [Organization Name]'s requirements for data residency and sovereignty as they apply to NCII workloads. Authors should ensure that any references to approved jurisdictions or specific CSP regions are validated against current NACSA guidance at each review cycle.*

[Organization Name] recognises that NCII data is subject to the jurisdiction of Malaysia and must be protected against compelled foreign disclosure. The following principles govern all data sovereignty decisions:

- **Primary Residency:** All NCII data at rest must be physically stored within Malaysia, unless a documented exemption has been granted by the CISO following a formal risk assessment
- **Processing Jurisdiction:** NCII data must be processed within Malaysia or within a jurisdiction approved by [Organization Name]'s Legal and Compliance function and consistent with NACSA directives
- **Egress Control:** Transmission of NCII data outside Malaysia must be subject to explicit controls, encryption, and approval
- **Foreign Law Exposure:** [Organization Name] must assess and document the risk of CSPs being subject to foreign legislation that could compel disclosure of Malaysian NCII data

### 5.2 Approved Data Residency Locations

| Location | Status | Approved CSP Regions | Notes |
|---|---|---|---|
| Malaysia (Primary) | **Approved** | [CSP Region identifiers e.g., Azure Malaysia, AWS ap-southeast-1 if applicable] | Preferred for all NCII data |
| [Jurisdiction 2] | [Approved / Conditional / Not Approved] | [Relevant CSP regions] | [Conditions or restrictions] |
| [Jurisdiction 3] | [Approved / Conditional / Not Approved] | [Relevant CSP regions] | [Conditions or restrictions] |

*Note: This table must be reviewed and updated at each semi-annual review cycle in light of CSP infrastructure changes and NACSA directives.*

### 5.3 Data Classification and Residency Mapping

| Data Classification | Permitted Residency | Cross-Border Transfer Permitted? | Approval Required |
|---|---|---|---|
| NCII — Highly Restricted | Malaysia only | No | N/A |
| NCII — Restricted | Malaysia preferred; conditional approval for approved jurisdictions | Only with CISO approval and encryption in transit | CISO |
| NCII — Internal | Malaysia or approved jurisdictions | Yes, with encryption in transit | Cloud Architecture |
| Non-NCII | As per Data Classification Policy | Subject to PDPA requirements | Per PDPA framework |

### 5.4 Technical Controls for Data Sovereignty

The following technical controls must be implemented to enforce data sovereignty requirements:

- **CSP Region Locking:** Cloud Landing Zone configurations must enforce organisation-level policies (e.g., AWS Service Control Policies, Azure Policy, GCP Organisation Policies) that restrict resource provisioning to approved Malaysian regions only
- **Backup and Replication Controls:** Automated backup and replication policies must be configured to prevent data copies from being written outside approved residency boundaries
- **CDN and Edge Caching:** Content Delivery Networks must be configured to exclude edge nodes outside approved jurisdictions when caching NCII data
- **Key Management Locality:** Encryption keys for NCII data must be held in Key Management Services (KMS) located within Malaysia, or managed using Customer-Managed Keys (CMK) where KMS in-country is unavailable, with the master key material held on-premise or in an approved Hardware Security Module (HSM) within Malaysia
- **Database Replication:** Cross-region database replication involving NCII data is prohibited unless explicitly authorised and routed exclusively between approved Malaysian regions

### 5.5 Monitoring and Enforcement

- Automated policy enforcement through CSPM tooling (see Section 7) must include alerts for any resource provisioned outside approved regions
- Monthly review of CSP billing and resource inventory reports to identify anomalous cross-region activity
- Data egress monitoring must be implemented to detect and alert on unexpected transfers of NCII-classified data to unapproved destinations
- Any policy violation must be treated as a security incident under [Organization Name]'s Incident Management Policy

### 5.6 Exemption Process

Requests for exemption from data residency requirements must:

1. Be submitted in writing to the CISO with a full justification and risk assessment
2. Be reviewed by Legal and Compliance for regulatory implications under Act 854, PDPA, and any applicable NACSA directive
3. Be approved in writing by the CISO and, where required, notified to NACSA
4. Be documented in the exemption register with a defined expiry date
5. Be subject to enhanced monitoring controls for the duration of the exemption

---

## 6. Identity Federation Requirements

### 6.1 Overview

*This section defines requirements for federated identity management in cloud environments. It governs how [Organization Name] staff, contractors, and service accounts authenticate to cloud platforms and how access is controlled across multiple CSPs and internal identity providers.*

[Organization Name] must implement a centralised, federated identity management architecture for all cloud environments hosting NCII workloads. Direct, non-federated cloud-native identity accounts are prohibited for human users except in documented break-glass scenarios.

### 6.2 Identity Provider Requirements

[Organization Name]'s authoritative Identity Provider (IdP) for cloud federation is: **[Identity Provider Name — e.g., Microsoft Entra ID, Okta]**

| Requirement | Specification |
|---|---|
| **Federation Protocol** | SAML 2.0 or OpenID Connect (OIDC) 1.0 — both must be supported |
| **MFA Enforcement** | MFA is mandatory for all human users accessing cloud management planes; phishing-resistant MFA (FIDO2/hardware token) required for privileged access |
| **Session Lifetime** | Maximum session token lifetime: [e.g., 8 hours for standard users; 1 hour for privileged access sessions] |
| **Conditional Access** | Access must be subject to conditional access policies enforcing device compliance, location, and risk-based controls |
| **Account Lifecycle** | Cloud access must be provisioned and deprovisioned in synchrony with the central HR system via automated provisioning (SCIM preferred) |
| **Emergency Access** | Break-glass accounts must be documented, monitored, and subject to mandatory post-use review within 24 hours |

### 6.3 Role-Based Access Control (RBAC) Architecture

All cloud IAM must implement RBAC principles. The following role taxonomy applies to NCII cloud workloads:

| Role Tier | Description | Examples | MFA Requirement | Session Timeout |
|---|---|---|---|---|
| **Tier 0 — Global Admin** | Unrestricted control of cloud tenancy | Cloud tenant owner, global admin | Hardware token (FIDO2) mandatory | 1 hour |
| **Tier 1 — Platform Admin** | Administrative control of platform services | Network admin, security admin, IAM admin | Phishing-resistant MFA mandatory | 2 hours |
| **Tier 2 — Workload Owner** | Management of assigned workload resources | Application owner, database admin | MFA (any method) mandatory | 4 hours |
| **Tier 3 — Operator** | Day-to-day operational access, limited write | DevOps engineer, operations analyst | MFA (any method) mandatory | 8 hours |
| **Tier 4 — Read-Only** | Monitoring, audit, reporting access only | Auditor, compliance analyst | MFA (any method) mandatory | 8 hours |

### 6.4 Service Account and Workload Identity Requirements

- Service accounts must not be shared between workloads or applications
- Service account credentials (keys, secrets, certificates) must not be stored in source code, build pipelines, or version control systems
- Workload identity federation (e.g., using OIDC tokens issued by Kubernetes or CI/CD platforms) is the **preferred** method for service-to-service authentication; long-lived service account keys are discouraged and must be documented and regularly rotated where unavoidable
- All service account keys must be stored in a secrets management solution (e.g., [Organisation's approved secrets manager — e.g., HashiCorp Vault, AWS Secrets Manager, Azure Key Vault])
- Service accounts must be assigned the minimum permissions required (least privilege) and reviewed quarterly
- Unused service accounts must be disabled within [30 days] and deleted within [90 days] of confirmed disuse

### 6.5 Privileged Access Management

- All Tier 0 and Tier 1 access must be subject to Privileged Access Management (PAM) controls, including session recording where technically feasible
- Just-in-Time (JIT) access provisioning is required for Tier 0 and Tier 1 roles; standing privileges at these tiers are prohibited unless documented and approved by the CISO
- Privileged access to cloud management planes must be performed from a dedicated Privileged Access Workstation (PAW) or through a hardened bastion/jump host
- All privileged access sessions must be logged and retained for a minimum of **[12 months]**, consistent with NACSA requirements

### 6.6 Guest and Third-Party Access

- Third-party (contractor, vendor) access to cloud environments hosting NCII workloads must be provisioned through [Organization Name]'s federated IdP, not through CSP-native guest accounts
- Third-party access must be time-limited, scoped to the minimum required resources, and subject to the same MFA requirements as internal users
- Third-party access must be reviewed and re-authorised every **[90 days]**

### 6.7 Prohibited Identity Practices

The following practices are explicitly prohibited for NCII workloads:

- Shared user accounts or shared credentials
- Use of CSP root/master accounts for routine operations
- Use of long-lived static access keys for human users
- Storing credentials in environment variables without an approved secrets management integration
- IAM policies using wildcards (e.g., `*`) on resources for NCII-scope service accounts
- Bypassing federation by creating local CSP-native accounts without CISO approval

---

## 7. Cloud Security Posture Management (CSPM)

### 7.1 Purpose and Scope

*This section establishes requirements for continuous cloud security posture assessment and remediation. It defines the tools, processes, and governance required to maintain a secure, compliant cloud baseline across all CSPs hosting NCII workloads.*

[Organization Name] must implement a Cloud Security Posture Management (CSPM) programme covering all cloud environments within scope of this standard. CSPM must provide continuous, automated visibility into the security configuration and compliance posture of cloud resources.

### 7.2 Approved CSPM Tooling

| CSP Platform | Approved CSPM Tool | Native Tool Supplement |
|---|---|---|
| [CSP 1 — e.g., Microsoft Azure] | [e.g., Microsoft Defender for Cloud] | [e.g., Azure Security Centre] |
| [CSP 2 — e.g., Amazon Web Services] | [e.g., AWS Security Hub + third-party CSPM] | [e.g., AWS Config, GuardDuty] |
| [CSP 3 — e.g., Google Cloud] | [e.g., Google Security Command Centre + third-party] | [e.g., GCP Security Health Analytics] |
| Multi-cloud / Unified | [e.g., Wiz, Prisma Cloud, Lacework] | Consolidation layer |

*The selection and configuration of CSPM tooling must be documented and approved by the CISO. Where third-party CSPM tools are used, they must themselves meet the CSP selection criteria in Section 4.*

### 7.3 Baseline Security Configuration Standards

All cloud environments must be configured to meet or exceed the following baseline standards. Compliance with these benchmarks must be validated via CSPM tooling:

| Benchmark | Applicability | Minimum Compliance Target |
|---|---|---|
| CIS Benchmarks (applicable CSP) | All IaaS/PaaS services | Level 2 for NCII workloads |
| [CSP Native Security Benchmark — e.g., AWS Foundational Security Best Practices] | Applicable CSP | Score ≥ [Target %] |
| NACSA Cloud Security Guideline | All NCII workloads | Full compliance |
| ISO/IEC 27017 Controls | All cloud services | Aligned to certification scope |

### 7.4 Security Posture Monitoring Requirements

- CSPM tools must perform **continuous** (near-real-time or minimum daily) scans of all cloud resources within scope
- All findings classified as **Critical** or **High** severity must generate automated alerts to the Security Operations Centre (SOC) and Cloud Architecture team
- CSPM findings must be integrated into [Organization Name]'s central SIEM platform to enable correlation with other security signals
- Misconfigurations representing NCII risk must be remediated within the timelines in Section 7.5

### 7.5 Remediation SLAs

| Finding Severity | Definition | Remediation SLA |
|---|---|---|
| **Critical** | Misconfiguration enabling immediate compromise, data exposure, or lateral movement in NCII workloads | **24 hours** |
| **High** | Significant control weakness with high exploitability or impact potential | **7 calendar days** |
| **Medium** | Control weakness with moderate risk; exploitability may require additional conditions | **30 calendar days** |
| **Low** | Minor deviation from baseline with limited direct impact | **90 calendar days** |
| **Informational** | Configuration observation for awareness; no direct security impact | Next scheduled review |

Findings that cannot be remediated within SLA must be subject to:
1. A formal risk acceptance documented by the workload owner and approved by the CISO
2. Compensating controls documented and implemented within the original SLA period
3. A tracked remediation plan with a defined completion date

### 7.6 Infrastructure as Code (IaC) Security

- All cloud infrastructure must be provisioned through approved Infrastructure as Code tooling (e.g., Terraform, Bicep, CloudFormation) — manual provisioning of NCII workload resources is prohibited except in approved emergency scenarios
- IaC templates must be subject to automated security scanning (e.g., Checkov, tfsec, KICS) as part of the CI/CD pipeline before deployment
- IaC repositories must be subject to access controls preventing direct deployment to production without an approved peer review and pipeline gate

### 7.7 Cloud Landing Zone Security Baseline

[Organization Name] must maintain a documented and version-controlled cloud landing zone design incorporating the following security controls:

- **Network Segmentation:** Mandatory Virtual Private Cloud (VPC) / Virtual Network (VNet) segmentation separating NCII workloads from non-NCII workloads and internet-facing resources
- **Default Deny Networking:** All inbound internet traffic to NCII workloads must traverse a WAF and/or firewall; default-deny posture on all VPC/VNet security groups
- **Encryption at Rest:** All NCII data at rest must be encrypted using AES-256 or equivalent, using Customer-Managed Keys (CMK) where available
- **Encryption in Transit:** TLS 1.2 minimum; TLS 1.3 preferred; deprecated protocols (SSL, TLS 1.0, TLS 1.1) must be disabled
- **Public Access Blocks:** Default configurations must block public access to storage buckets, databases, and snapshots containing NCII data

---

## 8. Container and Serverless Security

### 8.1 Container Security

*This section defines security requirements for containerised workloads within cloud environments hosting NCII data. These requirements apply to all container orchestration platforms, including managed Kubernetes services provided by CSPs.*

#### 8.1.1 Container Image Security

| Control | Requirement |
|---|---|
| **Base Image Standard** | Only approved, minimal base images from [Organization Name]'s approved image registry may be used for NCII workloads; public registry images (Docker Hub etc.) must undergo security scanning and approval before use |
| **Image Vulnerability Scanning** | All container images must be scanned for known vulnerabilities (CVEs) prior to deployment; images with Critical or High CVEs must not be deployed to NCII workloads without CISO-approved exceptions |
| **Image Signing** | All production container images must be cryptographically signed using an approved image signing solution (e.g., Sigstore Cosign, Notary); container runtimes must enforce signature verification |
| **No Root Processes** | Containers must not run as root (UID 0) unless explicitly justified and documented; the `allowPrivilegeEscalation` flag must be set to false |
| **Read-Only Filesystems** | Container root filesystems must be set to read-only where application design permits |
| **Immutable Infrastructure** | Container images must be treated as immutable; patching must occur through image rebuild and redeployment, not in-place modification |

#### 8.1.2 Kubernetes Cluster Security

- **Network Policies:** Kubernetes Network Policies must implement default-deny between namespaces; inter-namespace communication must be explicitly allowed based on least-privilege
- **Pod Security Standards:** [Organization Name] must enforce the Kubernetes **Restricted** Pod Security Standard for NCII workloads
- **RBAC:** Kubernetes RBAC must be configured with least-privilege roles; use of `cluster-admin` and `admin` roles must be restricted to approved platform administrators
- **Secrets Management:** Kubernetes Secrets must not be used as the primary secrets store for NCII workloads; an approved external secrets management solution must be integrated (see Section 6.4)
- **API Server Access:** Kubernetes API server access must be restricted to authorised networks and must require authentication; anonymous access must be disabled
- **etcd Encryption:** etcd must be encrypted at rest
- **Admission Controllers:** OPA/Gatekeeper or equivalent policy enforcement must be deployed to prevent non-compliant workload deployments

#### 8.1.3 Container Runtime Security

- A Cloud Workload Protection Platform (CWPP) or runtime security tool (e.g., Falco, Prisma Cloud Defender) must be deployed on all nodes hosting NCII workload containers
- Runtime security policies must detect and alert on: privilege escalation attempts, unexpected network connections, execution of unusual binaries, and file system modifications to read-only paths
- Container escape attempts must trigger immediate SOC alerts

### 8.2 Serverless Security

*This section defines security requirements for serverless computing (e.g., AWS Lambda, Azure Functions, Google Cloud Functions) used in NCII workload architectures.*

#### 8.2.1 Function Security Requirements

| Control | Requirement |
|---|---|
| **Least Privilege IAM** | Each serverless function must have its own IAM execution role with the minimum permissions required; shared execution roles across functions are prohibited for NCII workloads |
| **Environment Variable Security** | Secrets must not be stored as plain-text environment variables; all secrets must be retrieved at runtime from an approved secrets management service |
| **Dependency Management** | Function dependencies (packages, layers) must be pinned to specific versions and scanned for vulnerabilities prior to deployment |
| **VPC Integration** | Serverless functions accessing NCII data or internal resources must be deployed within the designated VPC/VNet; public internet exposure must be minimised |
| **Timeout and Concurrency Limits** | All functions must have defined execution timeout and concurrency limits to prevent resource exhaustion and unintended long-running executions |
| **Input Validation** | All serverless function inputs, especially from external sources (API Gateway, S3 events, SQS), must be validated and sanitised to prevent injection attacks |

#### 8.2.2 Serverless Logging and Monitoring

- All serverless functions processing NCII data must have logging enabled to the organisation's centralised logging platform (see Section 9)
- Cold start patterns and anomalous invocation frequencies must be monitored and baselined
- Function invocation logs must include sufficient context to support incident investigation (invocation source, parameters, execution duration, result)

---

## 9. Cloud Logging and Monitoring

### 9.1 Logging Requirements

*This section defines the mandatory logging requirements for cloud environments hosting NCII workloads. Comprehensive, tamper-evident logging is a prerequisite for effective incident detection, response, and forensic investigation, and is required under Act 854.*

#### 9.1.1 Mandatory Log Sources

The following log types must be enabled and forwarded to [Organization Name]'s centralised SIEM for all cloud environments hosting NCII workloads:

| Log Category | Examples | Retention |
|---|---|---|
| **Management Plane / Control Plane** | AWS CloudTrail, Azure Activity Log, GCP Audit Logs | Minimum 12 months hot; 7 years cold (or per NACSA requirement) |
| **Data Plane Access Logs** | S3 access logs, Blob storage access logs, Database query logs | Minimum 12 months hot |
| **Network Flow Logs** | VPC Flow Logs, Azure NSG Flow Logs | Minimum 12 months hot |
| **Identity and Authentication** | Sign-in logs, MFA events, role assumption events, service account activity | Minimum 12 months hot |
| **Security Service Alerts** | CSPM findings, WAF logs, IDS/IPS alerts, GuardDuty/Defender alerts | Minimum 12 months hot |
| **DNS Logs** | Cloud DNS query logs | Minimum 12 months hot |
| **Application Logs** | Application error logs, API access logs for NCII-processing services | Minimum 12 months hot |
| **Container/Kubernetes Logs** | Kubernetes API server audit logs, container stdout/stderr for NCII workloads | Minimum 12 months hot |
| **Serverless Function Logs** | All invocation and execution logs for NCII functions | Minimum 12 months hot |

#### 9.1.2 Log Integrity Requirements

- Logs must be written to a tamper-evident storage destination; production workload systems must not have write access to their own log archives
- Log forwarding must use encrypted channels (TLS 1.2 minimum)
- Log completeness must be monitored; gaps in expected log streams must trigger automated alerts
- Logs must not contain sensitive data (e.g., passwords, credit card numbers, unmasked identity credentials) in plain text

### 9.2 SIEM Integration

- The centralised SIEM platform for NCII workload log aggregation is: **[SIEM Platform Name and location]**
- All cloud log sources must be onboarded to the SIEM within **[30 days]** of a new cloud service or workload becoming active in the NCII scope
- SIEM correlation rules specific to cloud threats (e.g., credential stuffing, privilege escalation, data exfiltration patterns) must be developed and maintained by the SOC team
- SIEM dashboards for cloud security posture must be available to the SOC and CISO

### 9.3 Security Monitoring and Alerting

#### 9.3.1 Mandatory Alerting Scenarios

The following events must generate immediate alerts to the SOC:

| Event | Priority |
|---|---|
| Root/master account login | Critical |
| MFA disabled for any user | Critical |
| IAM policy with wildcard resource permissions created | Critical |
| Public access enabled on storage containing NCII data | Critical |
| Security group / firewall rule change opening unrestricted inbound access | Critical |
| Data exfiltration anomaly (unusually high egress volume) | Critical |
| Failed privileged access attempts (threshold: [e.g., 5 failures in 10 minutes]) | High |
| New CSP region resource provisioning outside approved regions | High |
| KMS key deletion or deactivation | High |
| CloudTrail / audit logging disabled | Critical |
| Container escape detected | Critical |
| New service account key created | High |
| Unusual geographic origin for management plane access | High |

#### 9.3.2 Threat Detection Use Cases

The SOC must maintain and regularly tune threat detection use cases covering, at minimum:

- Cloud infrastructure enumeration and reconnaissance
- Lateral movement within cloud environments
- Credential compromise and privilege escalation
- Persistence mechanisms (e.g., new IAM users, scheduled tasks, Lambda backdoors)
- Data staging and exfiltration
- Resource abuse (cryptomining, botnet C2)
- Denial of service targeting cloud-hosted NCII services

### 9.4 Security Metrics and Reporting

The following metrics must be reported to the CISO on a **monthly** basis:

| Metric | Definition | Target |
|---|---|---|
| CSPM Compliance Score | % of cloud resources compliant with baseline benchmarks | ≥ [Target, e.g., 95%] |
| Critical Finding Remediation Rate | % of Critical CSPM findings remediated within 24-hour SLA | 100% |
| Mean Time to Detect (MTTD) | Average time from cloud threat event to SOC alert | ≤ [Target, e.g., 15 minutes] |
| Mean Time to Respond (MTTR) | Average time from SOC alert to containment action | ≤ [Target, e.g., 4 hours] |
| Log Coverage Rate | % of mandatory log sources forwarded to SIEM | 100% |
| IAM Policy Violations | Number of detected IAM policy violations | Trending toward 0 |
| Open Risk Acceptances | Number of open CSPM findings with active risk acceptances | [Target — e.g., < 5] |

---

## 10. Roles and Responsibilities

### 10.1 Overview

*This section assigns accountability and responsibilities for cloud security governance across [Organization Name]. The RACI table below must be reviewed and updated at each semi-annual review to reflect any organisational changes.*

**RACI Key:**
- **R** — Responsible (performs the activity)
- **A** — Accountable (owns the outcome; there must be only one Accountable per activity)
- **C** — Consulted (provides input before a decision or action)
- **I** — Informed (notified of decisions or actions)

### 10.2 RACI Table

| Activity | CISO | Cloud Architecture | Security Operations (SOC) | Cloud Engineering / DevOps | Legal & Compliance | Business / Workload Owner | Internal Audit |
|---|---|---|---|---|---|---|---|
| Approve CSP for NCII workloads | A | R | C | C | C | I | I |
| Maintain CSP Register | I | R/A | I | I | C | I | I |
| Define and update Landing Zone baseline | A | R | C | R | I | C | I |
| Enforce data residency policy controls | A | R | I | R | C | I | I |
| Manage Identity Provider and federation | A | C | C | R | I | I | I |
| Administer CSPM tooling | A | R | R | C | I | I | I |
| Remediate Critical/High CSPM findings | A | R | I | R | I | C | I |
| Risk acceptance for unresolved findings | A | C | C | C | C | R | I |
| Manage container image registry | I | A | C | R | I | I | I |
| Review and approve IaC templates | A | R | C | R | I | I | I |
| Operate SIEM and cloud threat detection | C | C | R/A | I | I | I | I |
| Respond to cloud security incidents | A | C | R | R | C | C | I |
| Conduct cloud penetration testing | A | C | R | C | I | I | I |
| Review and maintain this standard | A | R | C | C | C | C | C |
| Report on cloud security metrics (monthly) | A | C | R | I | I | I | I |
| Conduct annual cloud security review | A | R | C | C | C | C | R |
| Manage privileged access (PAM) | A | C | R | C | I | I | I |
| Approve data residency exemptions | A | C | C | C | R | C | I |

### 10.3 Role Descriptions

| Role | Cloud Security Responsibilities |
|---|---|
| **CISO** | Accountable for overall cloud security posture; approves material decisions including CSP onboarding, risk acceptances, and exemptions; receives monthly reporting; escalation point for unresolved issues |
| **Cloud Architecture** | Responsible for defining and maintaining the cloud landing zone and security baseline; leads CSP assessments; owns the CSP Register; approves IaC templates for security compliance |
| **Security Operations (SOC)** | Operates CSPM and SIEM tooling; tunes and responds to cloud threat detection alerts; manages cloud security incident response; reports cloud security metrics |
| **Cloud Engineering / DevOps** | Implements security controls in cloud infrastructure and IaC; remediates CSPM findings in assigned workloads; integrates security into CI/CD pipelines |
| **Legal & Compliance** | Advises on regulatory obligations under Act 854, PDPA, and NACSA directives; reviews CSP contracts; assesses data sovereignty risks; supports audit engagement |
| **Business / Workload Owner** | Accountable for the classification and risk profile of their workloads; authorises risk acceptances for their workloads; ensures compliance within their scope |
| **Internal Audit** | Independently assesses compliance with this standard; reports findings to the Audit Committee; verifies remediation of audit findings |

---

## 11. Compliance and Exceptions

### 11.1 Compliance Monitoring

Compliance with this standard will be assessed through:

- **Continuous CSPM monitoring** against the benchmarks defined in Section 7.3
- **Annual internal audit** conducted by [Organization Name]'s Internal Audit function or an appointed external auditor
- **Semi-annual management review** as part of this standard's review cycle
- **Incident post-mortems** for any cloud security incident involving NCII workloads
- **NACSA assessments** in response to any regulatory inspection or review

### 11.2 Non-Compliance

Non-compliance with this standard must be escalated to the CISO. Persistent or wilful non-compliance may result in:

- Suspension of access to cloud environments hosting NCII workloads
- Formal disciplinary action under [Organization Name]'s HR and conduct policies
- Mandatory re-training and attestation
- Reporting to the Board Risk Committee
- Where required by Act 854 or NACSA directives, notification to NACSA

### 11.3 Exception Process

Where strict compliance with a specific control in this standard is not technically feasible or would result in disproportionate business impact, a formal exception may be requested:

| Step | Action | Responsible | Timeframe |
|---|---|---|---|
| 1 | Submit Exception Request to CISO, including control reference, business justification, risk assessment, and proposed compensating controls | Requestor | As required |
| 2 | CISO reviews technical and regulatory implications; consults Cloud Architecture and Legal & Compliance as appropriate | CISO | 5 business days |
| 3 | CISO approves or rejects exception; conditions and compensating controls are documented | CISO | Following review |
| 4 | Approved exception is logged in the Exception Register with expiry date (maximum 12 months) | Cloud Architecture | Upon approval |
| 5 | Exception is subject to quarterly review; must be formally renewed or resolved at expiry | CISO / Cloud Architecture | Quarterly |

---

## 12. Review and Approval

### 12.1 Review Cycle

This standard must be reviewed:

- **Semi-annually** (every 6 months) as a scheduled review
- **Upon material changes** to [Organization Name]'s cloud environment, CSP relationships, or NCII designation status
- **Upon issuance of new NACSA directives** or amendments to Act 854 affecting cloud security requirements
- **Following any significant cloud security incident** involving NCII workloads
- **Upon changes to the Malaysian regulatory landscape** affecting data sovereignty or cybersecurity obligations

### 12.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Title] | Initial release |
| [1.1] | [Date] | [Author Name, Title] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Title] | [Description of changes] |

### 12.3 Approval Sign-Off

This standard has been reviewed and approved by the following authorised signatories:

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Name] | [Signature] | [Date] |
| Head of Cloud Architecture | [Name] | [Signature] | [Date] |
| Chief Compliance Officer / Legal Counsel | [Name] | [Signature] | [Date] |
| Chief Technology Officer (if applicable) | [Name] | [Signature] | [Date] |
| Board Risk Committee Representative (if required) | [Name] | [Signature] | [Date] |

---

## 13. References

### 13.1 Legislative and Regulatory References

| Reference | Title | Relevant Sections |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Section 18 — Duty to implement cybersecurity measures; Section 24 — Compliance with NACSA standards and directives |
| Act 709 | Personal Data Protection Act 2010 | Security Principle (Section 5); Disclosure Principle |
| [NACSA Directive Reference] | [Title of applicable NACSA directive] | [Relevant provisions] |
| [BNM Policy Document Reference] | [Title] | [Relevant provisions — e.g., cloud outsourcing, operational risk] |

### 13.2 Standards and Frameworks Referenced

| Standard | Title | Application |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Overarching ISMS framework |
| ISO/IEC 27017:2015 | Code of Practice for Information Security Controls for Cloud Services | Cloud-specific security controls |
| ISO/IEC 27018:2019 | Code of Practice for Protection of Personally Identifiable Information in Public Clouds | PII protection in cloud |
| CIS Benchmarks | Centre for Internet Security Cloud Benchmarks | Cloud configuration baseline |
| NIST SP 800-145 | The NIST Definition of Cloud Computing | Reference definitions |
| NIST SP 800-190 | Application Container Security Guide | Container security |
| NIST CSF 2.0 | Cybersecurity Framework | Overarching risk management alignment |
| CSA Cloud Controls Matrix (CCM) | Cloud Security Alliance | Cloud control mapping reference |

### 13.3 Internal Documents Referenced

| Document ID | Title |
|---|---|
| [Document ID] | [Organization Name] Information Security Policy |
| [Document ID] | [Organization Name] Cloud Adoption Policy |
| [Document ID] | [Organization Name] Data Classification and Handling Policy |
| [Document ID] | [Organization Name] Third-Party and Vendor Risk Management Policy |
| [Document ID] | [Organization Name] Incident Management and Response Policy |
| [Document ID] | [Organization Name] Business Continuity and Disaster Recovery Policy |
| [Document ID] | [Organization Name] Cryptographic Controls Standard |
| [Document ID] | [Organization Name] Access Management Standard |
| [Document ID] | [Organization Name] Vulnerability Management Standard |

---

## 14. Appendices

### Appendix A — CSP Security Assessment Questionnaire Template

*This appendix provides the standard security questionnaire to be completed by prospective CSPs during the evaluation process defined in Section 4.3. The questionnaire should be distributed to CSPs at the initial screening stage and reviewed by Cloud Architecture and Information Security.*

| # | Question | Response Required | Supporting Evidence |
|---|---|---|---|
| 1 | Provide current ISO/IEC 27001 certificate and scope statement | Certificate with expiry date | Certificate document |
| 2 | Provide current ISO/IEC 27017 certificate | Certificate with expiry date | Certificate document |
| 3 | Provide current SOC 2 Type II report (most recent) | Report summary | Full report (NDA-protected) |
| 4 | Confirm data centre locations available for Malaysian data residency | List of region names and country codes | Data centre locations documentation |
| 5 | Confirm whether organisation is subject to any foreign legislation compelling disclosure of customer data (e.g., US CLOUD Act, equivalent) | Yes/No and jurisdiction details | Legal opinion or attestation |
| 6 | Describe your incident notification process and committed notification timelines | Narrative description | Incident response procedure extract |
| 7 | Confirm ability to support customer-managed encryption keys (CMK) | Yes/No; detail service scope | Technical documentation |
| 8 | List all sub-processors that may have access to customer data | Full sub-processor list | Sub-processor register |
| 9 | Confirm whether penetration testing by customers is permitted and under what conditions | Yes/No; conditions | Penetration testing policy |
| 10 | Describe your approach to physical security at data centres | Narrative | Physical security documentation |
| [Additional questions as required] | | | |

---

### Appendix B — Cloud Landing Zone Security Checklist

*This appendix provides a checklist for Cloud Architecture and Cloud Engineering to verify that new cloud accounts and subscriptions are configured to the required baseline before NCII workloads are deployed.*

**Account / Subscription Details:**
- CSP: [CSP Name]
- Account / Subscription ID: [ID]
- NCII Workload Name: [Workload Name]
- Reviewed By: [Name]
- Review Date: [Date]

| # | Control | Status | Evidence / Notes |
|---|---|---|---|
| 1 | Root / master account MFA enabled and secured | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 2 | CloudTrail / equivalent audit logging enabled for all regions | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 3 | Log forwarding to SIEM configured and verified | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 4 | Organisation-level policy restricting resource creation to approved regions applied | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 5 | Default VPC deleted or replaced with approved Landing Zone VPC | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 6 | CSPM tool onboarded and scanning active | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 7 | IAM federation configured; direct IAM user accounts for humans disabled | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 8 | CMK / KMS for data at rest encryption configured | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 9 | Public access block enabled for all storage services | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 10 | Break-glass account documented and secured | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 11 | Cost and budget alerts configured (to detect resource abuse) | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 12 | Security contact details set at account level | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 13 | GuardDuty / Defender for Cloud / equivalent threat detection enabled | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |
| 14 | IaC templates used for initial provisioning and committed to version control | ☐ Compliant / ☐ Non-Compliant / ☐ N/A | |

**Sign-off:** [Cloud Architect Name] | [Date]
**CISO Approval for NCII Workload Deployment:** [CISO Name] | [Date]

---

### Appendix C — CSPM Finding Remediation Workflow

*This appendix documents the standard workflow for managing CSPM findings from initial detection through to remediation or risk acceptance.*

```
[CSPM Tool Generates Finding]
        |
        v
[SOC / Cloud Architecture Triage]
        |
        +--> Critical / High --> Immediate alert to SOC + Cloud Architecture
        |                             |
        |                             v
        |                     [Workload Owner Notified]
        |                             |
        |                             v
        |                     [Remediation Within SLA]
        |                             |
        |                             +--> Remediated? Yes --> Close finding; update SIEM
        |                             |
        |                             +--> Cannot remediate in SLA?
        |                                         |
        |                                         v
        |                                 [Risk Acceptance Request]
        |                                         |
        |                                         v
        |                                 [CISO Approval]
        |                                         |
        |                                         v
        |                                 [Log in Exception Register]
        |                                         |
        |                                         v
        |                                 [Quarterly Review until resolved]
        |
        +--> Medium / Low --> Standard backlog management; tracked in CSPM dashboard
```

---

### Appendix D — Approved Cryptographic Standards for Cloud Environments

*This appendix supplements [Organization Name]'s Cryptographic Controls Standard [Document ID] with cloud-specific guidance. The full cryptographic policy is governed by the Cryptographic Controls Standard.*

| Use Case | Approved Algorithm(s) | Minimum Key Length | Notes |
|---|---|---|---|
| Data at rest encryption | AES-GCM | 256-bit | CSP native KMS or CMK |
| Data in transit | TLS 1.3 (preferred), TLS 1.2 (minimum) | As per RFC | TLS 1.0/1.1 and SSL prohibited |
| Key wrapping | AES-KWP or RSA-OAEP | AES-256 / RSA-4096 | For key material export/import |
| Digital signatures (IaC, container images) | ECDSA or RSA-PSS | P-256 or RSA-4096 | For image signing and IaC attestation |
| Password hashing (service credentials) | bcrypt / Argon2id | Per OWASP recommendation | Never store plain-text credentials |
| HSM Standard | FIPS 140-2 Level 3 or equivalent | N/A | For master key material |

---

### Appendix E — Glossary of NCII Cloud Risk Terminology

*Placeholder — authors should populate this appendix with any organisation-specific or jurisdiction-specific terms not covered in Section 2.*

| Term | Definition | Source |
|---|---|---|
| [Term 1] | [Definition] | [Source — e.g., Act 854, NACSA Directive, internal] |
| [Term 2] | [Definition] | [Source] |

---

### Appendix F — Related NACSA Directives and Guidance

*This appendix maintains a current list of NACSA directives and guidance documents relevant to cloud security for NCII entities. Authors must update this list at each semi-annual review to reflect any new or revised instruments.*

| Reference | Title | Issued Date | Applicability to This Standard |
|---|---|---|---|
| [NACSA Directive Ref] | [Title] | [Date] | [Sections of this standard affected] |
| [NACSA Guidance Ref] | [Title] | [Date] | [Sections of this standard affected] |

---

*End of Document*

---

**Document ID:** [Document ID] | **Version:** 1.0 | **Classification:** Confidential | **Owner:** Cloud Architecture / CISO | **Next Review:** [Next Review Date]