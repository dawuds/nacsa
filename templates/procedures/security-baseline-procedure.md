# Security Configuration Baseline Procedure

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Security Operations |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Semi-annual] |
| **Approved By** | [Approved By] |

**Organization:** [Organization Name]
**Department:** [Department Name]
**Document Status:** [Draft / Under Review / Approved]

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory Context](#3-regulatory-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Baseline Development from CIS/DISA STIGs](#5-baseline-development-from-cisdisa-stigs)
6. [Baseline Approval Process](#6-baseline-approval-process)
7. [Automated Compliance Scanning](#7-automated-compliance-scanning)
8. [Deviation Detection and Remediation](#8-deviation-detection-and-remediation)
9. [Baseline Update Triggers](#9-baseline-update-triggers)
10. [Evidence Collection for Audit](#10-evidence-collection-for-audit)
11. [Roles and Responsibilities](#11-roles-and-responsibilities)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose

This procedure establishes the requirements and processes for developing, approving, implementing, monitoring, and maintaining security configuration baselines for all National Critical Information Infrastructure (NCII) systems operated by [Organization Name]. It defines mandatory standards for hardening system configurations to reduce the attack surface and ensure a consistent, auditable security posture across the organization's technology estate.

This document supports [Organization Name]'s obligations under the **Cyber Security Act 2024 (Act 854)**, in particular the duties of NCII entities to implement and maintain prescribed cybersecurity measures as directed by the National Cyber Security Agency (NACSA). Compliance with this procedure is mandatory for all covered systems and personnel.

---

## 2. Scope

### 2.1 In Scope

This procedure applies to:

- All NCII systems owned, operated, or managed by [Organization Name], including those hosted on-premises, in co-location facilities, or in cloud environments under the organization's control
- All operating system platforms, including but not limited to: Microsoft Windows Server, Red Hat Enterprise Linux, Ubuntu Linux, and macOS endpoints
- All network infrastructure devices, including routers, switches, firewalls, and load balancers
- All database management systems, including Microsoft SQL Server, Oracle Database, MySQL, and PostgreSQL
- All middleware, application servers, and container platforms (e.g., Apache Tomcat, NGINX, Kubernetes, Docker)
- Cloud service configurations for Infrastructure-as-a-Service (IaaS) and Platform-as-a-Service (PaaS) environments (e.g., AWS, Azure, GCP tenants managed by [Organization Name])
- All third-party managed systems where [Organization Name] retains configuration management responsibility under a contractual arrangement

### 2.2 Out of Scope

- End-user Software-as-a-Service (SaaS) applications where configuration control rests entirely with the vendor
- Operational Technology (OT) or Industrial Control Systems (ICS) subject to separate hardening frameworks (unless explicitly brought under this procedure by [Organization Name]'s CISO)
- Systems under active decommissioning where a formal end-of-life plan has been approved

### 2.3 Applicability

*Identify all business units, subsidiaries, and outsourced service providers to which this procedure applies. List any exclusions and the rationale.*

| Entity / Business Unit | Applicability | Remarks |
|---|---|---|
| [Business Unit / Subsidiary Name] | Full / Partial / Excluded | [Reason if excluded or partially applied] |
| [Managed Service Provider Name] | Full / Partial / Excluded | [Governed by contract clause reference] |

---

## 3. Regulatory Context

This procedure is mandated by, and shall be interpreted in accordance with, the following legislation and regulatory directives:

### 3.1 Cyber Security Act 2024 (Act 854)

| Section | Provision | Relevance to This Procedure |
|---|---|---|
| **Section 18** | Duties of NCII entities — implementation of cybersecurity measures | Requires [Organization Name] to implement and maintain prescribed cybersecurity measures, including configuration hardening, for all NCII systems |
| **Section 24** | Compliance with directions and standards issued by NACSA | Requires adherence to configuration standards and directives issued by NACSA, including adoption of recognized baseline frameworks |

### 3.2 Supporting Regulatory Instruments

*List all additional applicable guidelines, circulars, or standards that this procedure must align with.*

| Instrument | Issuing Authority | Reference |
|---|---|---|
| NACSA Cybersecurity Framework | NACSA | [Reference / Version] |
| Bank Negara Malaysia Risk Management in Technology (RMiT) Policy | BNM | BNM/RH/PD 028-2 (if applicable) |
| Personal Data Protection Act 2010 (Act 709) | JPDP | Applicable where configuration controls protect personal data |
| [Other applicable standard or guideline] | [Authority] | [Reference] |

### 3.3 Relationship to Other Internal Policies

*Reference the parent policy and any related procedures that this document operationalizes.*

- **Parent Policy:** [Information Security Policy / Cybersecurity Policy — Document ID]
- **Related Procedures:** [Vulnerability Management Procedure — Document ID], [Change Management Procedure — Document ID], [Patch Management Procedure — Document ID], [Incident Response Procedure — Document ID]
- **Supporting Standards:** [Asset Classification Standard — Document ID], [Access Control Standard — Document ID]

---

## 4. Definitions and Abbreviations

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Security Configuration Baseline** | A documented set of security configuration settings established as the minimum acceptable security posture for a specific technology platform or system type |
| **Hardening** | The process of reducing a system's attack surface by disabling unnecessary services, applying secure settings, and removing default credentials |
| **NCII System** | Any information infrastructure whose disruption or destruction would have a debilitating impact on the national security, economy, public health, or safety of Malaysia, as designated under Act 854 |
| **Deviation** | Any configuration setting on a live system that differs from the approved baseline, whether intentional (approved exception) or unintentional (unauthorized drift) |
| **Compliance Scan** | An automated or manual assessment of a system's configuration against an approved baseline to identify deviations |
| **Remediation** | The process of correcting a configuration deviation to bring a system back into compliance with the approved baseline |
| **Benchmark** | A set of security configuration recommendations published by a recognized authority (e.g., CIS Benchmarks, DISA STIGs) used as the starting point for baseline development |
| **Golden Image** | A pre-configured, hardened system image built from an approved baseline, used as the standard template for provisioning new systems |
| **Configuration Drift** | The gradual deviation of a system's configuration from its approved baseline over time, typically caused by ad hoc changes, software updates, or operational adjustments |

### 4.2 Abbreviations

| Abbreviation | Expansion |
|---|---|
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| CIS | Center for Internet Security |
| DISA | Defense Information Systems Agency |
| STIG | Security Technical Implementation Guide |
| CCE | Common Configuration Enumeration |
| SCAP | Security Content Automation Protocol |
| OVAL | Open Vulnerability and Assessment Language |
| XCCDF | Extensible Configuration Checklist Description Format |
| CISO | Chief Information Security Officer |
| SOC | Security Operations Center |
| CAB | Change Advisory Board |
| RACI | Responsible, Accountable, Consulted, Informed |
| BNM | Bank Negara Malaysia |
| RMiT | Risk Management in Technology |

---

## 5. Baseline Development from CIS/DISA STIGs

*This section describes the process by which [Organization Name] selects authoritative benchmark sources and adapts them to produce organization-specific configuration baselines. Each technology platform requiring a baseline must follow this process.*

### 5.1 Benchmark Source Selection

[Organization Name] shall use the following industry-recognized benchmark sources as the primary reference for security configuration baseline development:

| Source | Authority | Applicability | Access |
|---|---|---|---|
| CIS Benchmarks | Center for Internet Security (CIS) | Operating systems, databases, middleware, cloud platforms, network devices | [CIS SecureSuite / Public download] |
| DISA STIGs | Defense Information Systems Agency (DISA) | Military-grade hardening for government-adjacent systems | [DISA STIG Viewer / IASE website] |
| Vendor Security Guides | Microsoft, Red Hat, Oracle, AWS, etc. | Vendor-specific supplementary guidance | [Vendor documentation portals] |
| NACSA Configuration Directives | NACSA | NCII-specific directives and overrides | [NACSA portal / Official correspondence] |

**Benchmark Level Selection:**

- **CIS Level 1** shall be the minimum acceptable benchmark level for all non-NCII-critical systems
- **CIS Level 2** shall be applied to all NCII-designated systems and high-risk assets
- DISA STIGs shall be adopted in addition to CIS Level 2 where NACSA or [Organization Name]'s CISO mandates a higher assurance level

### 5.2 Baseline Development Process

*Document the step-by-step process for taking a benchmark source and producing an organization-specific baseline document. Include who performs each step.*

**Step 1 — Initiation**

- A baseline development request is raised by [Security Operations / IT Infrastructure Team / Application Owner]
- The request must specify: platform type, version, deployment context (on-premises / cloud / containerized), and data classification of systems to be covered
- The Security Operations team assigns a Baseline Owner responsible for the development effort

**Step 2 — Benchmark Acquisition and Review**

- Security Operations downloads or accesses the latest version of the applicable CIS Benchmark or DISA STIG for the target platform
- The benchmark version and publication date are recorded in the baseline document header
- Security Operations reviews all benchmark controls for applicability to [Organization Name]'s environment

**Step 3 — Organizational Customization**

*List the categories of controls that are typically customized and the rationale for deviations from the benchmark defaults.*

For each benchmark control, Security Operations shall make one of the following determinations:

| Determination | Description | Required Documentation |
|---|---|---|
| **Adopt as-is** | The benchmark recommendation is applied without modification | None beyond baseline record |
| **Adopt with modification** | The benchmark recommendation is adjusted to suit [Organization Name]'s operational requirements | Documented rationale and compensating control (if applicable) |
| **Not applicable** | The control is not relevant to the deployment context | Written justification by Baseline Owner |
| **Deferred** | The control cannot be implemented currently due to technical or operational constraints | Risk acceptance record signed by CISO, with remediation target date |

**Step 4 — Baseline Document Drafting**

- Security Operations produces a platform-specific baseline document using the [Organization Name] Baseline Template (Appendix A)
- The baseline document shall include, at a minimum:
  - Platform name, version, and applicable benchmark reference
  - Complete list of configuration controls with implementation guidance
  - Rationale for any deviations from the benchmark
  - Automated scan profile reference (SCAP/OVAL content identifier, if applicable)
  - Test procedure for manual verification of controls that cannot be assessed automatically

### 5.3 Baseline Register

*The Baseline Register is the authoritative list of all approved configuration baselines. It is maintained by Security Operations and reviewed at each semi-annual review cycle.*

| Baseline ID | Platform | Version | Benchmark Source | Benchmark Version | Baseline Status | Baseline Owner | Last Updated |
|---|---|---|---|---|---|---|---|
| BL-001 | Windows Server 2022 | 2022 | CIS Benchmark | [Version] | [Draft/Approved] | [Name] | [Date] |
| BL-002 | Red Hat Enterprise Linux 9 | 9.x | CIS Benchmark + DISA STIG | [Version] | [Draft/Approved] | [Name] | [Date] |
| BL-003 | Microsoft SQL Server 2019 | 2019 | CIS Benchmark | [Version] | [Draft/Approved] | [Name] | [Date] |
| BL-004 | Cisco IOS | [Version] | CIS Benchmark | [Version] | [Draft/Approved] | [Name] | [Date] |
| BL-005 | AWS Account Baseline | N/A | CIS AWS Foundations Benchmark | [Version] | [Draft/Approved] | [Name] | [Date] |
| [BL-XXX] | [Platform] | [Version] | [Source] | [Version] | [Status] | [Owner] | [Date] |

---

## 6. Baseline Approval Process

*This section defines the mandatory review and approval workflow that every newly developed or significantly revised configuration baseline must complete before it is authorized for deployment. No baseline may be applied to production NCII systems without a completed approval record.*

### 6.1 Approval Workflow

The following sequential approval stages apply to all new or substantially revised baselines:

```
[Baseline Development Complete]
          |
          v
[Technical Peer Review — Security Operations]
          |
          v
[Operational Impact Assessment — IT Infrastructure / Application Owners]
          |
          v
[Risk and Compliance Review — Risk Management / Compliance Team]
          |
          v
[CISO Approval]
          |
          v
[Baseline Published to Baseline Register]
          |
          v
[Communication and Implementation]
```

### 6.2 Approval Stages — Detail

**Stage 1: Technical Peer Review**

- Conducted by: A senior security engineer not involved in the baseline's development
- Objective: Verify technical accuracy, completeness, and alignment with the benchmark source
- Output: Signed Technical Review Checklist (Appendix B)
- Acceptance criteria: Zero unresolved critical or high-severity technical errors; all deviations documented

**Stage 2: Operational Impact Assessment**

- Conducted by: Relevant IT Infrastructure owners and Application owners whose systems will be affected
- Objective: Identify any configuration controls that may disrupt business-critical services or application functionality
- Output: Operational Impact Assessment form with sign-off by affected system owners
- Acceptance criteria: All operationally significant impacts documented; mitigations or compensating controls agreed

**Stage 3: Risk and Compliance Review**

- Conducted by: Risk Management team and Compliance team
- Objective: Assess residual risk for any deferred or modified controls; verify alignment with Act 854 Section 18 and 24 requirements
- Output: Risk and Compliance sign-off on the baseline approval record
- Acceptance criteria: Risk acceptance records in place for all deferred controls; no unmitigated regulatory compliance gaps

**Stage 4: CISO Approval**

- Conducted by: Chief Information Security Officer (or delegated authority)
- Objective: Final authorization for baseline publication and mandatory implementation
- Output: CISO signature on Baseline Approval Record (Appendix C)
- Acceptance criteria: All preceding stages completed and documented

### 6.3 Approval Timeline

| Stage | Target Completion | Escalation Path |
|---|---|---|
| Technical Peer Review | Within 5 business days of draft submission | Security Operations Manager |
| Operational Impact Assessment | Within 10 business days of draft submission | IT Director / CTO |
| Risk and Compliance Review | Within 15 business days of draft submission | Chief Risk Officer |
| CISO Approval | Within 20 business days of draft submission | Board Risk Committee (if CISO unavailable) |

### 6.4 Exception Handling

- If a baseline cannot receive full approval within the defined timeline due to identified conflicts, the CISO may authorize interim deployment of a partial baseline with explicit compensating controls documented
- Emergency baseline approvals (e.g., in response to a NACSA directive or zero-day vulnerability) may be fast-tracked through a 48-hour emergency approval process, requiring verbal CISO authorization followed by written ratification within 5 business days
- All exceptions shall be logged in the Exception Register maintained by the Compliance team

---

## 7. Automated Compliance Scanning

*This section defines the tooling, scan cadence, scope, and output requirements for automated configuration compliance scanning across all NCII systems. Automated scanning is the primary mechanism for continuous verification that systems conform to approved baselines.*

### 7.1 Scanning Tools and Platforms

*Document all tools authorized for compliance scanning within [Organization Name]. Unauthorized tools must not be used to assess NCII systems.*

| Tool Name | Tool Type | Applicable Platforms | Scan Protocol | Authorized By | Version |
|---|---|---|---|---|---|
| [e.g., Tenable.sc / Tenable.io] | Vulnerability and compliance scanner | Windows, Linux, network devices | Agent / Agentless (SSH, WMI) | [CISO / IT Security Manager] | [Version] |
| [e.g., Ansible Compliance Roles] | Configuration management and compliance | Linux, Windows | SSH / WinRM | [CISO / IT Security Manager] | [Version] |
| [e.g., AWS Security Hub / Azure Policy] | Cloud configuration compliance | AWS, Azure | Native API | [CISO / IT Security Manager] | N/A |
| [e.g., OpenSCAP] | SCAP-based compliance scanning | Linux | SSH | [CISO / IT Security Manager] | [Version] |
| [Tool Name] | [Type] | [Platforms] | [Protocol] | [Authority] | [Version] |

### 7.2 Scan Cadence

| System Classification | Minimum Scan Frequency | Preferred Frequency | Rationale |
|---|---|---|---|
| NCII-designated systems — Tier 1 (Critical) | Weekly | Daily | Highest risk; NACSA obligations under Act 854 s18 |
| NCII-designated systems — Tier 2 (High) | Fortnightly | Weekly | Significant risk; regulatory obligation |
| Non-NCII systems — High sensitivity data | Monthly | Fortnightly | Data protection obligations |
| Non-NCII systems — General | Quarterly | Monthly | Standard security hygiene |
| Pre-deployment (new or changed systems) | Once, before go-live | N/A | Gate control for production release |

### 7.3 Scan Configuration Requirements

All compliance scans shall be configured as follows:

- **Scan profile:** Each scan must reference the approved baseline scan profile corresponding to the platform's Baseline ID from the Baseline Register (Section 5.3)
- **Credentials:** Scans must use privileged read-only credentials provisioned specifically for scanning purposes; shared administrative credentials must not be used
- **Scan window:** Scans shall be scheduled during [defined maintenance/low-traffic window] unless an urgent ad hoc scan is authorized by the Security Operations Manager
- **Scope confirmation:** Prior to each scan cycle, Security Operations must verify that the asset inventory used as the scan target list is current and complete
- **Result retention:** Scan results must be retained for a minimum of [3 years / as per [Organization Name]'s data retention policy] to support audit and trend analysis

### 7.4 Scan Output and Reporting

*Define the outputs expected from each scan cycle and the distribution of reports.*

| Report Type | Frequency | Recipients | Retention |
|---|---|---|---|
| Full Compliance Scan Report | Per scan cycle | Security Operations, IT Infrastructure Managers | [Retention period] |
| Executive Compliance Dashboard | Monthly | CISO, CTO, CRO | [Retention period] |
| NCII Compliance Status Report | Quarterly | CISO, Board Risk Committee, [NACSA if required] | [Retention period] |
| Non-compliant Asset Report | Per scan cycle (where deviations found) | Asset Owner, Security Operations, Compliance | [Retention period] |
| Pre-deployment Compliance Clearance Certificate | Per deployment | Change Manager, Asset Owner, CISO | Indefinite |

### 7.5 Baseline Compliance Metrics

Security Operations shall track and report the following key metrics:

| Metric | Description | Target Threshold | Reporting Frequency |
|---|---|---|---|
| Baseline Compliance Rate | Percentage of NCII systems with ≥ 95% baseline compliance | ≥ 95% | Monthly |
| Critical Deviation Count | Number of open deviations rated critical severity | 0 (zero tolerance) | Weekly |
| Mean Time to Remediate (Critical) | Average days to close a critical deviation | ≤ 3 business days | Monthly |
| Mean Time to Remediate (High) | Average days to close a high deviation | ≤ 10 business days | Monthly |
| Scan Coverage Rate | Percentage of in-scope assets scanned in the period | 100% | Monthly |
| Unauthorized Configuration Change Rate | Number of deviations caused by unapproved changes | Trending toward 0 | Monthly |

---

## 8. Deviation Detection and Remediation

*This section defines how configuration deviations from the approved baseline are identified, classified, assigned, tracked, and resolved. A deviation may be discovered through automated scanning, manual inspection, incident investigation, or third-party audit.*

### 8.1 Deviation Classification

All detected deviations shall be classified according to the following severity framework:

| Severity | Definition | Examples | Response SLA |
|---|---|---|---|
| **Critical** | Deviation creates an immediately exploitable condition or directly violates an Act 854 / NACSA mandatory control | Default credentials in use; firewall disabled; root login enabled over internet-facing interface | Escalate within 1 hour; remediate within 3 business days |
| **High** | Deviation significantly increases attack surface or violates a CIS Level 2 / DISA STIG mandatory control | Unnecessary services running; audit logging disabled; weak cryptographic protocols enabled (e.g., SSLv3, TLS 1.0) | Escalate within 4 business hours; remediate within 10 business days |
| **Medium** | Deviation represents a configuration weakness that could contribute to a compromise in combination with other factors | Non-critical service misconfiguration; suboptimal password complexity settings; missing banner text | Remediate within 30 calendar days |
| **Low** | Deviation is a minor configuration variance with negligible security impact; or a deviation covered by an approved compensating control | Cosmetic logging format differences; minor version variance within an approved range | Remediate within 90 calendar days |

### 8.2 Deviation Detection Sources

*List all channels through which deviations may be identified. Deviations identified through any channel must be logged in the Deviation Register.*

- Automated compliance scan results (Section 7)
- Change Management process — post-implementation review
- Security incident or forensic investigation findings
- Internal audit or security assessment
- External penetration testing
- Third-party audit or regulatory inspection (e.g., NACSA inspection under Act 854)
- Ad hoc manual inspection by Security Operations

### 8.3 Deviation Register

*The Deviation Register is the central log of all open and closed configuration deviations. It is maintained by Security Operations and reviewed weekly for Critical/High items and monthly for Medium/Low items.*

| Field | Description |
|---|---|
| Deviation ID | Unique identifier (e.g., DEV-2024-001) |
| System / Asset ID | Affected system identifier |
| Baseline ID | Reference to the applicable baseline (from Baseline Register) |
| Control Reference | CIS/STIG control ID and description |
| Deviation Description | Specific non-compliant setting found |
| Severity | Critical / High / Medium / Low |
| Detection Source | How the deviation was identified |
| Detection Date | Date deviation was first identified |
| Asset Owner | Business owner of the affected system |
| Assigned Remediation Team | Team responsible for fixing the deviation |
| Target Remediation Date | Based on severity SLA |
| Actual Remediation Date | Date deviation was confirmed closed |
| Status | Open / In Remediation / Closed / Accepted (with risk acceptance reference) |
| Risk Acceptance Reference | If deviation is accepted rather than remediated, reference to risk acceptance record |
| Verification Method | How remediation was confirmed (re-scan / manual check) |

### 8.4 Remediation Process

**Step 1 — Notification**

Upon detection, Security Operations notifies the relevant Asset Owner and IT team within the timeframe defined in Section 8.1. Notification shall include the Deviation ID, affected system, deviation description, severity, and required remediation SLA.

**Step 2 — Root Cause Analysis**

For Critical and High deviations, the assigned team shall conduct a root cause analysis to determine whether the deviation was caused by:

- An authorized change made without following the Change Management procedure
- An unauthorized change (potential security incident — escalate per [Incident Response Procedure — Document ID])
- A software or operating system update that altered a previously compliant setting
- A deficiency in the baseline itself (if so, initiate baseline update per Section 9)

**Step 3 — Remediation Planning**

The assigned team documents a remediation plan in the Deviation Register, including:

- Specific configuration change(s) required
- Any testing required before applying the change in production
- Change Management ticket reference (all remediation changes must follow the Change Management procedure)
- Proposed implementation date and maintenance window

**Step 4 — Remediation Execution**

The configuration change is implemented by the assigned team, following the approved Change Management procedure. For Critical deviations, an emergency change may be invoked subject to CAB emergency approval.

**Step 5 — Verification**

Following remediation:

- Security Operations performs a targeted re-scan or manual verification of the affected control within [2 business days] of the claimed remediation date
- Verification evidence (scan report extract, screenshot, or manual checklist) is attached to the Deviation Register entry
- The Deviation ID is closed with the actual remediation date recorded

**Step 6 — Escalation**

If a deviation is not remediated within its SLA, it shall be automatically escalated as follows:

| Overdue Period | Escalation Action |
|---|---|
| SLA + 1 business day | Security Operations Manager notified; daily tracking |
| SLA + 5 business days | CISO notified; formal escalation to Asset Owner's department head |
| SLA + 10 business days (Critical/High only) | CRO and Board Risk Committee notified; potential mandatory NACSA reporting assessed under Act 854 |

### 8.5 Risk Acceptance for Unremediable Deviations

Where a deviation cannot be remediated within the required SLA due to genuine technical, operational, or vendor constraints, the Asset Owner may apply for a formal risk acceptance:

- Risk acceptance must be documented on the [Risk Acceptance Form — Appendix D]
- Risk acceptance requires CISO approval for Medium/Low deviations and CRO + CISO approval for High/Critical deviations
- Risk acceptance is time-limited (maximum 90 days for High/Critical; 180 days for Medium/Low) and must be reviewed at expiry
- All risk acceptances covering Act 854-mandated controls must be reported to the Board Risk Committee and assessed for mandatory NACSA disclosure obligations

---

## 9. Baseline Update Triggers

*This section defines the events and conditions that require a configuration baseline to be reviewed and, where necessary, updated. Baselines are living documents and must reflect the current threat landscape, vendor guidance, and operational environment.*

### 9.1 Mandatory Update Triggers

The following events shall trigger an immediate review of the relevant baseline(s), with updates completed and re-approved within the timeframes specified:

| Trigger | Description | Review Initiation | Target Update Completion |
|---|---|---|---|
| **NACSA Directive** | NACSA issues a configuration directive or security notice affecting NCII systems under Act 854 s24 | Within 24 hours of receipt | Per directive's specified deadline (or within 30 days if not specified) |
| **Critical CVE / Zero-Day** | A critical (CVSS ≥ 9.0) vulnerability is published for a platform covered by an existing baseline, where a configuration mitigation is available | Within 48 hours of CVE publication | Within 10 business days |
| **Vendor Security Bulletin** | Platform vendor publishes a security bulletin recommending configuration changes | Within 5 business days | Within 30 calendar days |
| **CIS/DISA Benchmark Version Update** | A new major version of the applicable benchmark is released | Within 30 days of benchmark publication | Within 90 calendar days |
| **Security Incident** | A security incident reveals that an approved baseline configuration did not prevent or detect a known attack technique | Immediately upon incident closure | Within 30 calendar days of lessons-learned review |
| **Regulatory Change** | New or amended regulatory requirements (Act 854 amendments, NACSA directives, BNM RMiT updates) affect configuration requirements | Upon regulatory change effective date | Within 60 calendar days |
| **Technology Change** | A major platform version upgrade or new technology deployment requires a new or updated baseline | Prior to production deployment | Baseline approved before go-live |

### 9.2 Scheduled Review

In addition to event-driven updates, all baselines shall undergo a scheduled semi-annual review, aligned with this procedure's review cycle:

| Review Activity | Frequency | Responsible Party | Output |
|---|---|---|---|
| Benchmark source version check | Semi-annual | Security Operations | Updated baseline if new benchmark version released |
| Deviation trend analysis — identify systemic issues | Semi-annual | Security Operations | Recommendations for baseline modification |
| Operational feedback review | Semi-annual | Security Operations + IT Infrastructure | Baseline adjustments for operational issues |
| Regulatory alignment check | Semi-annual | Compliance Team | Compliance gap assessment |
| Full baseline re-approval (if material changes made) | As required | Per approval workflow (Section 6) | Updated, re-approved baseline |

### 9.3 Baseline Version Control

- All updates to baselines shall increment the baseline version number (major version for material changes; minor version for minor adjustments)
- Superseded baseline versions must be retained in the document management system for a minimum of [3 years / per data retention policy] to support historical audit
- Systems must be updated to comply with the new baseline version within the update completion timeframe defined in Section 9.1 or 9.2
- The Baseline Register (Section 5.3) must be updated to reflect the new version immediately upon approval

---

## 10. Evidence Collection for Audit

*This section defines the types, formats, retention periods, and custodianship of evidence that [Organization Name] must collect and maintain to demonstrate compliance with Act 854 s18 and s24 configuration baseline obligations. All evidence must be available for inspection by NACSA-authorized auditors.*

### 10.1 Evidence Requirements

*For each evidence type below, ensure that the collection process is automated wherever possible and that evidence is stored in a tamper-evident or write-once manner consistent with its classification.*

| Evidence Type | Description | Format | Retention Period | Custodian |
|---|---|---|---|---|
| Approved Baseline Documents | Final approved version of each platform baseline, including approval records | PDF / controlled document format | Indefinite (or minimum 7 years after system decommission) | Security Operations / Document Control |
| Baseline Approval Records | Completed Baseline Approval Record for each baseline (Appendix C) | Signed PDF | Indefinite | Security Operations / Compliance |
| Compliance Scan Reports | Full output of each automated compliance scan cycle | Tool-native export + PDF summary | Minimum 3 years | Security Operations / SOC |
| Deviation Register | Complete log of all detected deviations, including closed records | Exported spreadsheet / ITSM record export | Minimum 5 years | Security Operations |
| Remediation Evidence | Screenshots, configuration extracts, or re-scan extracts confirming deviation closure | PDF / image / scan extract | Minimum 3 years (linked to deviation record) | Security Operations |
| Risk Acceptance Records | Signed risk acceptance forms for all accepted deviations | Signed PDF | Minimum 5 years | Compliance / Risk Management |
| Change Management Records | CAB-approved change records for all baseline-related configuration changes | ITSM export | Per Change Management policy | IT Change Management |
| Pre-deployment Compliance Clearance | Signed clearance certificates for all new or changed systems (Appendix E) | Signed PDF | Minimum 3 years | Security Operations / Change Management |
| Baseline Update Records | Version history and change log for all baseline updates | Document version history | Minimum 5 years | Security Operations / Document Control |
| Audit / Assessment Reports | Results of internal or external audits of this procedure | PDF | Minimum 5 years | Internal Audit / Compliance |

### 10.2 Evidence Storage and Integrity

- All audit evidence must be stored in [designated evidence repository — e.g., SharePoint/Confluence/GRC platform] with access restricted to authorized Security Operations, Compliance, and Audit personnel
- Scan reports and deviation logs exported from automated tools must be stored with file hash values recorded to demonstrate integrity
- Physical or digital signatures on approval and acceptance documents must be preserved in a non-editable format
- Access logs for the evidence repository must themselves be retained and available for audit inspection

### 10.3 Audit Readiness

*Document the process for assembling and presenting evidence in response to an audit or NACSA inspection.*

- Security Operations maintains an **Audit Evidence Pack** updated at each semi-annual review, containing:
  - Current approved baselines for all in-scope platforms
  - Compliance scan summary reports for the preceding 12 months
  - Deviation Register export showing all deviations and their status
  - Risk acceptance records for any open accepted deviations
  - Evidence of baseline updates triggered by events in the preceding review period
- In the event of a NACSA inspection or formal audit request under Act 854, the CISO shall appoint a designated **Audit Liaison** responsible for assembling and presenting evidence within [5 business days] of the audit request
- The Audit Liaison shall use the [Audit Response Checklist — Appendix F] to ensure completeness of evidence production

### 10.4 Reporting to Senior Management and Regulators

| Report | Recipient | Frequency | Trigger |
|---|---|---|---|
| Configuration Compliance Dashboard | CISO, CTO, CRO | Monthly | Standing schedule |
| NCII Configuration Compliance Status | Board Risk Committee | Quarterly | Standing schedule |
| Significant Deviation Notification | CISO + CRO | Ad hoc | Any Critical deviation identified |
| NACSA Mandatory Disclosure (if required) | NACSA | As required under Act 854 | Per NACSA directive or significant cybersecurity incident |
| Annual Compliance Summary | Board of Directors | Annually | Annual governance cycle |

---

## 11. Roles and Responsibilities

*The following RACI table defines responsibilities for all key activities under this procedure. Additional personnel may be assigned at the discretion of the CISO.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Security Operations Manager | Security Engineer | IT Infrastructure Manager | Application Owner | Risk Manager | Compliance Officer | Internal Audit | CAB |
|---|---|---|---|---|---|---|---|---|---|
| Baseline development from CIS/DISA STIGs | A | R | R | C | C | I | I | — | — |
| Baseline technical peer review | I | A | R | C | — | — | — | — | — |
| Operational impact assessment | C | A | C | R | R | — | — | — | — |
| Risk and compliance review of baselines | C | C | — | — | — | R | R | — | — |
| CISO approval of baselines | A/R | I | — | — | — | C | C | — | — |
| Maintenance of Baseline Register | I | A | R | — | — | — | — | — | — |
| Configuration and execution of compliance scans | I | A | R | C | — | — | — | — | — |
| Review and distribution of scan reports | A | R | R | I | I | I | I | I | — |
| Deviation classification and assignment | I | A | R | C | C | — | — | — | — |
| Deviation remediation | C | I | C | R | R | — | — | — | C |
| Deviation re-verification | I | A | R | I | I | — | — | — | — |
| Risk acceptance for unremediable deviations | A | C | — | C | C | R | R | — | — |
| Escalation of overdue deviations | A | R | I | I | I | C | — | — | — |
| Baseline update — triggered review | A | R | R | C | C | C | C | — | — |
| Evidence collection and custody | C | A | R | — | — | — | C | — | — |
| Audit evidence pack preparation | A | R | R | C | — | C | R | C | — |
| Regulatory reporting (NACSA disclosures) | A | C | — | — | — | C | R | — | — |
| Procedure review and update | A | R | C | C | — | C | C | C | — |

### 11.1 Role Descriptions

| Role | Name / Position | Contact |
|---|---|---|
| Chief Information Security Officer (CISO) | [Name] | [Email / Phone] |
| Security Operations Manager | [Name] | [Email / Phone] |
| Senior Security Engineer (Baseline Owner) | [Name] | [Email / Phone] |
| IT Infrastructure Manager | [Name] | [Email / Phone] |
| [Application Owner — System Name] | [Name] | [Email / Phone] |
| Risk Manager | [Name] | [Email / Phone] |
| Compliance Officer | [Name] | [Email / Phone] |
| Internal Audit Representative | [Name] | [Email / Phone] |

---

## 12. Review and Approval

### 12.1 Review Cycle

This procedure shall be reviewed on a **semi-annual** basis (every 6 months) by Security Operations, with approval by the CISO. An unscheduled review shall be triggered by any of the events listed in Section 9.1.

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], Security Operations | Initial document creation and approval |
| [1.1] | [Date] | [Author Name] | [Description of changes made] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by — Security Operations Manager | [Name] | [Signature] | [Date] |
| Reviewed by — Risk Manager | [Name] | [Signature] | [Date] |
| Reviewed by — Compliance Officer | [Name] | [Signature] | [Date] |
| Reviewed by — IT Infrastructure Manager | [Name] | [Signature] | [Date] |
| Approved by — Chief Information Security Officer | [Name] | [Signature] | [Date] |

---

## 13. References

### 13.1 Legislation and Regulatory Instruments

| Reference | Title | Relevant Provisions |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024, Laws of Malaysia | Section 18 (Duties of NCII entities — cybersecurity measures); Section 24 (Compliance with NACSA directions and standards) |
| Personal Data Protection Act 2010 (Act 709) | Personal Data Protection Act 2010 | Where configuration controls protect personal data processing systems |
| [BNM Policy Document] | Risk Management in Technology (RMiT) | [Relevant paragraph references] |
| [NACSA Directive Reference] | [NACSA Directive / Circular Title] | [Applicable provisions] |

### 13.2 Standards and Frameworks

| Reference | Title | Publisher | Version / Date |
|---|---|---|---|
| CIS Benchmarks | CIS Benchmarks for [applicable platforms] | Center for Internet Security | [Version accessed] |
| DISA STIGs | Security Technical Implementation Guides | Defense Information Systems Agency (DISA) | [Version accessed] |
| NIST SP 800-70 | National Checklist Program for IT Products | NIST | Rev. 4 (or latest) |
| NIST SP 800-128 | Guide for Security-Focused Configuration Management of Information Systems | NIST | [Version] |
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | ISO/IEC | 2022 |
| ISO/IEC 27002:2022 | Information Security Controls | ISO/IEC | 2022 — Control 8.9 (Configuration Management) |
| NACSA Cybersecurity Framework | [NACSA Framework Title] | NACSA | [Version] |

### 13.3 Internal Documents

| Document ID | Document Title |
|---|---|
| [POL-SEC-001] | Information Security Policy |
| [POL-CYB-001] | Cybersecurity Policy |
| [PRO-CHG-001] | Change Management Procedure |
| [PRO-VM-001] | Vulnerability Management Procedure |
| [PRO-PM-001] | Patch Management Procedure |
| [PRO-IR-001] | Incident Response Procedure |
| [STD-AST-001] | Asset Classification Standard |
| [STD-ACC-001] | Access Control Standard |

---

## 14. Appendices

### Appendix A — Platform Baseline Document Template

*This appendix provides the standard template structure to be used when developing a new platform-specific configuration baseline. Security Operations shall produce one completed template per platform type.*

| Field | Content |
|---|---|
| Baseline ID | [BL-XXX] |
| Platform Name | [e.g., Windows Server 2022] |
| Platform Version | [e.g., 21H2] |
| Deployment Context | [On-premises / Cloud / Containerized] |
| Benchmark Source | [CIS Benchmark / DISA STIG / Vendor Guide] |
| Benchmark Version | [e.g., CIS Windows Server 2022 Benchmark v1.0.0] |
| Benchmark Level | [CIS Level 1 / CIS Level 2 / STIG] |
| Baseline Owner | [Name, Role] |
| Date Created | [Date] |
| Baseline Version | [1.0] |
| Approval Status | [Draft / Under Review / Approved] |
| Applicable Systems | [List of system types or asset IDs this baseline applies to] |
| Automated Scan Profile | [Reference to SCAP/OVAL content or tool scan policy name] |

**Control Table Template:**

| Control ID | CIS/STIG Reference | Control Title | Setting Description | Recommended Value | [Org Name] Applied Value | Determination | Rationale for Deviation (if any) | Automated? | Manual Test Procedure |
|---|---|---|---|---|---|---|---|---|---|
| [e.g., 1.1.1] | [CIS 18.1.1] | [Password complexity enabled] | [Ensure password complexity is enabled] | Enabled | Enabled | Adopt as-is | — | Yes | [N/A] |
| [e.g., 1.1.2] | [CIS 18.1.2] | [Minimum password length] | [Ensure minimum password length is 14 characters or more] | 14 | 12 | Adopt with modification | [Operational constraint: legacy application X does not support passwords > 12 chars. Risk accepted per [Risk Acceptance ID]. Remediation target: [Date]] | Yes | [N/A] |

---

### Appendix B — Technical Peer Review Checklist

*To be completed by the reviewing security engineer for each baseline under review.*

| # | Review Criterion | Pass / Fail / N/A | Reviewer Notes |
|---|---|---|---|
| 1 | Benchmark source and version correctly identified and current | | |
| 2 | All benchmark controls accounted for (adopted, modified, N/A, or deferred) | | |
| 3 | All deviations from benchmark documented with written rationale | | |
| 4 | All deferred controls have a risk acceptance reference or pending risk acceptance | | |
| 5 | Automated scan profile correctly references this baseline | | |
| 6 | Manual test procedures provided for all non-automatable controls | | |
| 7 | Baseline document follows the standard template (Appendix A) | | |
| 8 | No typographical errors in configuration values or control references | | |
| 9 | Baseline version number and metadata are correctly populated | | |
| 10 | Baseline has been validated against a test system prior to submission | | |

**Reviewer Name:** [Name]
**Reviewer Role:** [Role]
**Review Date:** [Date]
**Overall Outcome:** [Pass / Fail — require revision]
**Signature:** [Signature]

---

### Appendix C — Baseline Approval Record

*To be completed and signed by each approval stage participant for every new or substantially revised baseline.*

**Baseline Details:**

| Field | Content |
|---|---|
| Baseline ID | [BL-XXX] |
| Platform | [Platform Name and Version] |
| Baseline Version | [Version Number] |
| Date Submitted for Approval | [Date] |

**Approval Stage Sign-Off:**

| Stage | Approver Name | Role | Outcome | Date | Signature |
|---|---|---|---|---|---|
| Technical Peer Review | [Name] | Senior Security Engineer | [Approved / Approved with conditions / Rejected] | [Date] | [Signature] |
| Operational Impact Assessment | [Name] | IT Infrastructure Manager | [Approved / Approved with conditions / Rejected] | [Date] | [Signature] |
| Risk and Compliance Review | [Name] | Risk Manager / Compliance Officer | [Approved / Approved with conditions / Rejected] | [Date] | [Signature] |
| CISO Final Approval | [Name] | CISO | [Approved / Rejected] | [Date] | [Signature] |

**Conditions / Comments:** [Any conditions attached to approval, compensating controls required, or follow-up actions]

---

### Appendix D — Risk Acceptance Form

*To be completed when a configuration deviation cannot be remediated within the required SLA and a formal risk acceptance is sought.*

| Field | Content |
|---|---|
| Risk Acceptance ID | [RA-YYYY-XXX] |
| Related Deviation ID | [DEV-YYYY-XXX] |
| System / Asset ID | [Asset identifier] |
| Baseline ID | [BL-XXX] |
| Control Reference | [CIS/STIG control ID] |
| Deviation Description | [Description of the non-compliant setting] |
| Severity | [Critical / High / Medium / Low] |
| Reason Remediation is not Feasible | [Detailed explanation of technical, operational, or vendor constraints] |
| Residual Risk Assessment | [Description of the residual risk, likelihood, and impact] |
| Compensating Controls | [Controls in place that partially mitigate the residual risk] |
| Risk Acceptance Expiry Date | [Date — maximum 90 days for High/Critical; 180 days for Medium/Low] |
| Asset Owner Acknowledgement | [Name, Signature, Date] |
| CISO Approval (all deviations) | [Name, Signature, Date] |
| CRO Approval (High/Critical only) | [Name, Signature, Date] |
| Review Date | [Date for next review of this risk acceptance] |

---

### Appendix E — Pre-Deployment Compliance Clearance Certificate

*To be completed by Security Operations prior to the production deployment of any new or significantly changed NCII system.*

| Field | Content |
|---|---|
| Clearance Certificate ID | [CC-YYYY-XXX] |
| System / Asset Name | [System name] |
| Asset ID | [Asset identifier] |
| Applicable Baseline ID | [BL-XXX] |
| Pre-Deployment Scan Date | [Date] |
| Scan Tool and Profile Used | [Tool name and scan profile] |
| Compliance Score | [X% compliant with approved baseline] |
| Critical Deviations Found | [Number] |
| High Deviations Found | [Number] |
| All Critical/High Deviations Resolved? | [Yes / No — if No, attach list of open deviations with risk acceptance references] |
| Clearance Decision | [Cleared for production deployment / Not cleared — remediation required] |
| Security Operations Sign-Off | [Name, Signature, Date] |
| CISO Sign-Off (required if any open High/Critical deviations accepted) | [Name, Signature, Date] |
| Change Ticket Reference | [Change Management ticket number] |

---

### Appendix F — Audit Response Checklist

*To be used by the designated Audit Liaison when preparing evidence for a NACSA inspection or formal audit under Act 854.*

| # | Evidence Item | Location | Date Range | Custodian | Status |
|---|---|---|---|---|---|
| 1 | Current approved baselines for all in-scope platforms | [Document repository path] | Current version | Security Operations | [Ready / Pending] |
| 2 | Baseline Approval Records for all current baselines | [Document repository path] | N/A | Security Operations | [Ready / Pending] |
| 3 | Compliance scan reports — last 12 months | [Evidence repository path] | [Date range] | Security Operations / SOC | [Ready / Pending] |
| 4 | Deviation Register — full export including closed records | [ITSM / GRC system] | [Date range] | Security Operations | [Ready / Pending] |
| 5 | Risk Acceptance Records — all open acceptances | [Document repository path] | Current | Compliance | [Ready / Pending] |
| 6 | Pre-deployment Compliance Clearance Certificates | [Document repository path] | [Date range] | Security Operations | [Ready / Pending] |
| 7 | Baseline Update Records — event-triggered and scheduled reviews | [Document repository path] | [Date range] | Security Operations | [Ready / Pending] |
| 8 | Change Management records for baseline-related changes | [ITSM system] | [Date range] | IT Change Management | [Ready / Pending] |
| 9 | Configuration Compliance Dashboard reports | [Reporting system / repository] | [Date range] | Security Operations | [Ready / Pending] |
| 10 | This procedure (current approved version) | [Document repository path] | Current version | Document Control | [Ready / Pending] |
| 11 | Previous versions of this procedure | [Document repository path] | Historical | Document Control | [Ready / Pending] |
| 12 | Staff training records related to this procedure | [HR / Training system] | [Date range] | HR / Security Operations | [Ready / Pending] |

**Audit Liaison Name:** [Name]
**Audit Liaison Role:** [Role]
**Audit / Inspection Reference:** [NACSA Reference / Internal Audit Reference]
**Evidence Pack Completion Date:** [Date]
**CISO Review of Evidence Pack:** [Name, Signature, Date]

---

*End of Document*

---

**Document Control Notice:** This document is classified **Confidential**. It is intended solely for use by authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is prohibited. Printed copies are uncontrolled. The controlled version is maintained in [Organization Name]'s document management system at [Document Repository Location].