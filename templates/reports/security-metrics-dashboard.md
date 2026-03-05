# Security Metrics Dashboard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Chief Information Security Officer (CISO) |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) |
| **Applicable Section** | Section 18 |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Mean Time to Detect, Respond, and Resolve](#2-mean-time-to-detect-respond-and-resolve)
3. [Patch Compliance Percentage](#3-patch-compliance-percentage)
4. [Training Completion Rates](#4-training-completion-rates)
5. [Incident Trends](#5-incident-trends)
6. [Vulnerability Remediation Rates](#6-vulnerability-remediation-rates)
7. [Control Effectiveness Metrics](#7-control-effectiveness-metrics)
8. [Roles and Responsibilities](#8-roles-and-responsibilities)
9. [Review and Approval](#9-review-and-approval)
10. [References](#10-references)
11. [Appendices](#11-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Security Metrics Dashboard provides [Organization Name]'s leadership and security operations teams with a consolidated, quantitative view of the organization's cybersecurity posture across its National Critical Information Infrastructure (NCII) systems. The dashboard supports evidence-based decision-making by tracking key performance indicators (KPIs) and key risk indicators (KRIs) aligned with obligations under the **Cyber Security Act 2024 (Act 854)**, specifically **Section 18**, which mandates that NCII entities implement and maintain adequate cybersecurity measures and demonstrate ongoing operational effectiveness.

This document serves as the monthly reporting artifact used to assess whether implemented controls are operating as intended, to identify emerging risk trends, and to initiate timely remediation actions where performance falls below defined thresholds.

### 1.2 Scope

*Define the boundaries of this dashboard — which systems, environments, business units, and personnel are covered. Reference the organization's NCII designation where applicable.*

This dashboard covers the following in-scope elements:

- **Systems:** All systems designated as NCII assets under [Organization Name]'s NCII classification register, including [list system categories, e.g., core banking platforms, payment gateways, customer data repositories]
- **Environments:** Production, pre-production, and disaster recovery environments
- **Business Units:** [List applicable business units or departments]
- **Personnel:** All staff, contractors, and third-party service providers with access to NCII systems
- **Reporting Period:** [Month/Year] — [Month/Year]

### 1.3 Regulatory Context

| Regulation | Clause/Section | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities must implement cybersecurity measures and demonstrate effectiveness through monitoring and reporting |
| Cyber Security Act 2024 (Act 854) | Section 18(1) | Duty of NCII entity owners to ensure cybersecurity of NCII systems |
| [Supplementary Framework, e.g., NACSA NCII Sector Policy] | [Clause Reference] | [Specific obligation, e.g., mandatory reporting of security metrics to sector lead] |

---

## 2. Mean Time to Detect, Respond, and Resolve

*This section presents the three core operational speed metrics for security incident handling. Populate the tables with data drawn from the Security Information and Event Management (SIEM) platform and incident management system for the reporting period. Thresholds should reflect targets established in the Incident Response Plan.*

### 2.1 Reporting Period Summary

| Metric | Target Threshold | Actual (This Month) | Actual (Prior Month) | Trend |
|---|---|---|---|---|
| Mean Time to Detect (MTTD) | ≤ [X] hours | [X] hours | [X] hours | [↑ / ↓ / →] |
| Mean Time to Respond (MTTR) | ≤ [X] hours | [X] hours | [X] hours | [↑ / ↓ / →] |
| Mean Time to Resolve (MTTRes) | ≤ [X] hours | [X] hours | [X] hours | [↑ / ↓ / →] |

> **Threshold Status:** [Green — All targets met / Amber — One or more targets exceeded / Red — Critical breach of targets]

### 2.2 Breakdown by Incident Severity

*Disaggregate MTTD/MTTR/MTTRes by severity classification to identify whether response times are disproportionately affected by any particular incident category.*

| Severity Level | No. of Incidents | Avg. MTTD | Avg. MTTR | Avg. MTTRes |
|---|---|---|---|---|
| Critical (P1) | [N] | [X] hours | [X] hours | [X] hours |
| High (P2) | [N] | [X] hours | [X] hours | [X] hours |
| Medium (P3) | [N] | [X] hours | [X] hours | [X] hours |
| Low (P4) | [N] | [X] hours | [X] hours | [X] hours |
| **Total** | **[N]** | **[X] hours** | **[X] hours** | **[X] hours** |

### 2.3 Analysis and Commentary

*Provide a narrative explanation of significant deviations from targets, contributing factors, and corrective actions initiated.*

- **Notable Deviations:** [Describe any incidents where thresholds were breached and the root cause]
- **Systemic Factors:** [Describe any process, tooling, or staffing issues affecting detection or response times]
- **Corrective Actions:** [List actions taken or planned, with owners and target completion dates]

---

## 3. Patch Compliance Percentage

*This section tracks the organization's adherence to its patch management policy across all in-scope NCII systems. Data should be sourced from the vulnerability and patch management platform. Targets are defined in the Patch Management Policy.*

### 3.1 Overall Patch Compliance Rate

| Asset Category | Total Assets | Fully Patched | Partially Patched | Non-Compliant | Compliance Rate |
|---|---|---|---|---|---|
| Servers (Production) | [N] | [N] | [N] | [N] | [X]% |
| Servers (DR/Pre-prod) | [N] | [N] | [N] | [N] | [X]% |
| Endpoints (Staff) | [N] | [N] | [N] | [N] | [X]% |
| Network Devices | [N] | [N] | [N] | [N] | [X]% |
| Security Appliances | [N] | [N] | [N] | [N] | [X]% |
| **Overall** | **[N]** | **[N]** | **[N]** | **[N]** | **[X]%** |

> **Target Compliance Rate:** ≥ [X]% | **Status:** [Met / Not Met]

### 3.2 Patch Age Analysis

*Identify aged patches that exceed defined remediation windows, representing elevated risk to NCII systems.*

| Patch Age Bracket | Critical Patches | High Patches | Medium Patches | Low Patches |
|---|---|---|---|---|
| 0–7 days (within SLA) | [N] | [N] | [N] | [N] |
| 8–30 days (approaching SLA) | [N] | [N] | [N] | [N] |
| 31–90 days (SLA breached) | [N] | [N] | [N] | [N] |
| > 90 days (critical overdue) | [N] | [N] | [N] | [N] |

### 3.3 Exception and Risk Acceptance Register

| System / Asset | Missing Patch | Business Justification | Risk Accepted By | Accepted Until | Compensating Control |
|---|---|---|---|---|---|
| [System Name] | [CVE/Patch ID] | [Reason, e.g., vendor support limitation] | [Role/Name] | [Date] | [Control Description] |

---

## 4. Training Completion Rates

*This section reports on the completion of mandatory and role-based cybersecurity training programmes across [Organization Name]. Training data should be sourced from the Learning Management System (LMS) and cross-referenced with the HR headcount register.*

### 4.1 Mandatory Training Completion

| Training Programme | Target Audience | Headcount | Completed | Pending | Exempted | Completion Rate |
|---|---|---|---|---|---|---|
| Cybersecurity Awareness (Annual) | All Staff | [N] | [N] | [N] | [N] | [X]% |
| NCII Security Responsibilities | NCII System Users | [N] | [N] | [N] | [N] | [X]% |
| Incident Response Procedures | SOC / IR Team | [N] | [N] | [N] | [N] | [X]% |
| Privileged Access Management | System Administrators | [N] | [N] | [N] | [N] | [X]% |
| Data Protection & PDPA | All Staff | [N] | [N] | [N] | [N] | [X]% |
| Phishing Simulation Exercise | All Staff | [N] | [N] | [N] | [N] | [X]% |

> **Minimum Required Completion Rate:** ≥ [X]% | **Overall Status:** [Met / Not Met]

### 4.2 Training Trend (Rolling 6 Months)

*Illustrate month-on-month training completion trajectory to identify sustained gaps or improvements.*

| Month | Mandatory Training Completion Rate | Phishing Click Rate |
|---|---|---|
| [Month -5] | [X]% | [X]% |
| [Month -4] | [X]% | [X]% |
| [Month -3] | [X]% | [X]% |
| [Month -2] | [X]% | [X]% |
| [Month -1] | [X]% | [X]% |
| **[Current Month]** | **[X]%** | **[X]%** |

### 4.3 Outstanding Training — Escalation List

*Where staff have not completed mandatory training within the defined window, escalation actions should be documented here.*

- **Overdue by > 30 days:** [N] staff — Escalated to [Department Heads / HR]
- **Overdue by > 60 days:** [N] staff — Escalated to [CISO / Line Manager]
- **Actions:** [Describe follow-up actions, e.g., system access restrictions pending completion]

---

## 5. Incident Trends

*This section provides a quantitative and qualitative analysis of security incidents recorded during the reporting period. Data should be sourced from the incident management platform (e.g., [Ticketing System Name]). All NCII-impacting incidents must be assessed for mandatory reporting obligations under Act 854.*

### 5.1 Incident Volume Summary

| Metric | This Month | Prior Month | 3-Month Average | YTD Total |
|---|---|---|---|---|
| Total Incidents Recorded | [N] | [N] | [N] | [N] |
| NCII-Impacting Incidents | [N] | [N] | [N] | [N] |
| Incidents Reported to NACSA | [N] | [N] | [N] | [N] |
| False Positives | [N] | [N] | [N] | [N] |
| Incidents Closed Within SLA | [N] | [N] | [N] | [N] |

### 5.2 Incident Classification Breakdown

| Incident Category | This Month | Prior Month | Trend |
|---|---|---|---|
| Malware / Ransomware | [N] | [N] | [↑ / ↓ / →] |
| Phishing / Social Engineering | [N] | [N] | [↑ / ↓ / →] |
| Unauthorised Access | [N] | [N] | [↑ / ↓ / →] |
| Data Breach / Exfiltration | [N] | [N] | [↑ / ↓ / →] |
| Denial of Service (DoS/DDoS) | [N] | [N] | [↑ / ↓ / →] |
| Insider Threat | [N] | [N] | [↑ / ↓ / →] |
| Supply Chain / Third-Party | [N] | [N] | [↑ / ↓ / →] |
| Other / Unclassified | [N] | [N] | [↑ / ↓ / →] |

### 5.3 Notable Incidents This Period

*Summarise significant incidents that warrant leadership attention. Full incident details remain in the Incident Register.*

| Incident ID | Date | Severity | Category | Brief Description | NACSA Reported | Status |
|---|---|---|---|---|---|---|
| [INC-XXXX] | [DD/MM/YYYY] | [P1/P2/P3] | [Category] | [Brief summary] | [Yes / No / N/A] | [Open / Closed] |
| [INC-XXXX] | [DD/MM/YYYY] | [P1/P2/P3] | [Category] | [Brief summary] | [Yes / No / N/A] | [Open / Closed] |

### 5.4 Trend Analysis

- **Key Observations:** [Describe patterns, e.g., increase in phishing attempts coinciding with [event/season]]
- **Threat Intelligence Context:** [Note any relevant threat intelligence informing the observed trends]
- **Recommended Actions:** [List proactive measures being taken in response to trends]

---

## 6. Vulnerability Remediation Rates

*This section tracks the lifecycle of identified vulnerabilities from discovery through to validated remediation. Data should be sourced from vulnerability scanning tools and cross-referenced with the Vulnerability Register. Remediation SLAs are defined in the Vulnerability Management Policy.*

### 6.1 Vulnerability Inventory Snapshot

| Severity | Open (Start of Period) | Newly Discovered | Remediated | Accepted/Deferred | Open (End of Period) |
|---|---|---|---|---|---|
| Critical | [N] | [N] | [N] | [N] | [N] |
| High | [N] | [N] | [N] | [N] | [N] |
| Medium | [N] | [N] | [N] | [N] | [N] |
| Low | [N] | [N] | [N] | [N] | [N] |
| **Total** | **[N]** | **[N]** | **[N]** | **[N]** | **[N]** |

### 6.2 Remediation Rate Against SLA

| Severity | SLA Target | Vulnerabilities Due for Remediation | Remediated Within SLA | Remediation Rate |
|---|---|---|---|---|
| Critical | [X] days | [N] | [N] | [X]% |
| High | [X] days | [N] | [N] | [X]% |
| Medium | [X] days | [N] | [N] | [X]% |
| Low | [X] days | [N] | [N] | [X]% |

> **Critical Remediation Rate Target:** ≥ [X]% | **Status:** [Met / Not Met]

### 6.3 Aged Vulnerability Exceptions

*Vulnerabilities that have exceeded their SLA without formal risk acceptance represent an unmanaged risk. These must be reviewed and formally accepted or escalated.*

| CVE / Finding ID | Affected System | Severity | Discovery Date | SLA Breach Date | Current Status | Risk Owner |
|---|---|---|---|---|---|---|
| [CVE-XXXX-XXXX] | [System Name] | [Critical/High] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Deferred / In Progress] | [Name / Role] |

### 6.4 Remediation Commentary

- **Systemic Barriers:** [Describe recurring obstacles, e.g., vendor patch availability, system availability windows]
- **Improvements This Period:** [Highlight areas where remediation performance has improved]
- **Escalations Required:** [Identify any exceptions requiring Board or senior management awareness]

---

## 7. Control Effectiveness Metrics

*This section provides a holistic assessment of whether implemented security controls are operating effectively across their defined scope. Control effectiveness data should be derived from internal audits, automated compliance scanning, red team exercises, and control self-assessments.*

### 7.1 Control Effectiveness Summary

*Rate each control domain against a defined effectiveness scale: **Effective** (operating as designed with no significant gaps), **Partially Effective** (operating with minor gaps or exceptions), **Ineffective** (material gaps identified requiring immediate remediation).*

| Control Domain | Control Reference | Effectiveness Rating | Evidence Source | Last Assessed | Trend |
|---|---|---|---|---|---|
| Identity & Access Management | [ISO 27001 A.9 / NIST AC] | [Effective / Partial / Ineffective] | [Audit / Scan / Self-Assessment] | [DD/MM/YYYY] | [↑ / ↓ / →] |
| Network Security | [ISO 27001 A.13 / NIST SC] | [Effective / Partial / Ineffective] | [Audit / Scan / Self-Assessment] | [DD/MM/YYYY] | [↑ / ↓ / →] |
| Endpoint Protection | [ISO 27001 A.12 / NIST SI] | [Effective / Partial / Ineffective] | [Audit / Scan / Self-Assessment] | [DD/MM/YYYY] | [↑ / ↓ / →] |
| Data Protection & Encryption | [ISO 27001 A.10 / NIST SC] | [Effective / Partial / Ineffective] | [Audit / Scan / Self-Assessment] | [DD/MM/YYYY] | [↑ / ↓ / →] |
| Security Monitoring & Logging | [ISO 27001 A.12.4 / NIST AU] | [Effective / Partial / Ineffective] | [SIEM Coverage Report] | [DD/MM/YYYY] | [↑ / ↓ / →] |
| Change & Configuration Mgmt | [ISO 27001 A.12.1 / NIST CM] | [Effective / Partial / Ineffective] | [Audit / CMDB Review] | [DD/MM/YYYY] | [↑ / ↓ / →] |
| Backup & Recovery | [ISO 27001 A.12.3 / NIST CP] | [Effective / Partial / Ineffective] | [Recovery Test Results] | [DD/MM/YYYY] | [↑ / ↓ / →] |
| Third-Party / Supply Chain | [ISO 27001 A.15 / NIST SR] | [Effective / Partial / Ineffective] | [Vendor Audit / Review] | [DD/MM/YYYY] | [↑ / ↓ / →] |

### 7.2 Overall NCII Security Posture Score

*This composite score represents the aggregated effectiveness of controls protecting NCII systems. The scoring methodology is defined in [Reference Scoring Methodology Document].*

| Posture Dimension | Weight | Score (0–100) | Weighted Score |
|---|---|---|---|
| Preventive Controls | [X]% | [X] | [X] |
| Detective Controls | [X]% | [X] | [X] |
| Responsive Controls | [X]% | [X] | [X] |
| Recovery Controls | [X]% | [X] | [X] |
| **Overall Posture Score** | **100%** | — | **[X] / 100** |

> **Minimum Acceptable Score:** [X] / 100 | **Status:** [Met / Not Met]

### 7.3 Control Gaps and Remediation Actions

| Control Gap | Affected Domain | Risk Rating | Remediation Owner | Target Date | Status |
|---|---|---|---|---|---|
| [Description of gap] | [Domain] | [Critical / High / Medium] | [Name / Role] | [DD/MM/YYYY] | [Open / In Progress / Closed] |

---

## 8. Roles and Responsibilities

*This section defines accountability for the preparation, review, approval, and distribution of this Security Metrics Dashboard.*

### 8.1 RACI Matrix

| Activity | CISO | Security Operations Manager | IT Operations | Risk & Compliance | Business Unit Heads | Board / EXCO |
|---|---|---|---|---|---|---|
| Define metric targets and thresholds | A | R | C | C | I | I |
| Collect and validate metric data | I | A | R | I | I | I |
| Prepare monthly dashboard | I | A | R | C | I | I |
| Review draft dashboard | A | R | C | R | I | I |
| Approve and sign off dashboard | A | I | I | C | I | I |
| Distribute dashboard to stakeholders | I | R | I | I | I | I |
| Present to Board / Risk Committee | R | I | I | C | I | A |
| Initiate remediation for underperformance | A | R | R | C | R | I |
| Archive and retain dashboard records | I | A | R | C | I | I |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 8.2 Distribution List

| Role | Name | Department | Distribution Method |
|---|---|---|---|
| Chief Information Security Officer | [Name] | Information Security | Direct / Email |
| Chief Risk Officer | [Name] | Risk Management | Direct / Email |
| Chief Information Officer | [Name] | IT | Direct / Email |
| Head of Compliance | [Name] | Compliance | Email |
| Internal Audit | [Name] | Internal Audit | Email |
| Board Risk Committee Secretariat | [Name] | Company Secretary | Email (Quarterly Summary) |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial document creation |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of change] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Description of major revision] |

### 9.2 Monthly Dashboard Approval

*Each monthly issuance of this dashboard must be approved before distribution. The sign-off below constitutes formal approval of the data and assessments contained in this edition.*

**Reporting Period:** [Month Year]

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Security Operations Manager] | _________________ | [DD/MM/YYYY] |
| Reviewed By | [CISO] | _________________ | [DD/MM/YYYY] |
| Approved By | [CISO / CRO / CIO] | _________________ | [DD/MM/YYYY] |

### 9.3 Document Review Schedule

This template document is subject to a formal review at the frequency specified below, or upon any material change to the regulatory environment, organizational structure, or NCII system landscape.

| Review Type | Frequency | Next Due Date | Responsible |
|---|---|---|---|
| Monthly Dashboard Issuance | Monthly | [First business day of next month] | Security Operations Manager |
| Template Review | Annual | [DD/MM/YYYY] | CISO |
| Ad-hoc Review (triggered) | As required | Upon trigger event | CISO |

---

## 10. References

*The following regulatory instruments, standards, and internal policies govern this document and the obligations it fulfils.*

### 10.1 Regulatory References

| Reference | Title | Relevant Clause(s) | Applicability |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | Cyber Security Act 2024 | Section 18 — Duty of NCII entity owners | Mandatory |
| [NACSA NCII Sector Policy] | [Full Policy Title] | [Clause Reference] | [Mandatory / Advisory] |
| [NACSA Cybersecurity Framework] | [Full Framework Title] | [Clause Reference] | [Mandatory / Advisory] |

### 10.2 Internal Policy References

| Document Title | Document ID | Version | Owner |
|---|---|---|---|
| Information Security Policy | [DOC-ID] | [Version] | CISO |
| Incident Response Plan | [DOC-ID] | [Version] | Security Operations Manager |
| Vulnerability Management Policy | [DOC-ID] | [Version] | CISO |
| Patch Management Policy | [DOC-ID] | [Version] | IT Operations |
| Business Continuity Plan | [DOC-ID] | [Version] | Business Continuity Manager |
| NCII Asset Register | [DOC-ID] | [Version] | CISO |
| Risk Appetite Statement | [DOC-ID] | [Version] | Chief Risk Officer |

### 10.3 Standards Referenced

| Standard | Title | Application |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Control framework mapping |
| NIST Cybersecurity Framework 2.0 | NIST CSF | Control domain alignment |
| ISO/IEC 27035 | Information Security Incident Management | Incident classification and response |

---

## 11. Appendices

### Appendix A — Metric Definitions and Calculation Methodology

*This appendix provides precise definitions for each metric reported in this dashboard to ensure consistency across reporting periods and between teams.*

| Metric | Definition | Calculation Formula | Data Source | Reporting Frequency |
|---|---|---|---|---|
| Mean Time to Detect (MTTD) | Average time elapsed between a security event occurring and its detection by the SOC | Sum of (Detection Time − Event Time) / Number of Incidents | SIEM / Incident Management System | Monthly |
| Mean Time to Respond (MTTR) | Average time from detection to initiation of a formal incident response action | Sum of (First Response Time − Detection Time) / Number of Incidents | Incident Management System | Monthly |
| Mean Time to Resolve (MTTRes) | Average time from incident detection to full resolution and closure | Sum of (Resolution Time − Detection Time) / Number of Incidents | Incident Management System | Monthly |
| Patch Compliance Rate | Percentage of in-scope assets with all required patches applied within SLA | (Patched Assets / Total In-Scope Assets) × 100 | Patch Management Platform | Monthly |
| Vulnerability Remediation Rate | Percentage of vulnerabilities remediated within their defined SLA window | (Vulnerabilities Remediated Within SLA / Total Vulnerabilities Due) × 100 | Vulnerability Scanner / Register | Monthly |
| Training Completion Rate | Percentage of required personnel who have completed mandatory training | (Trained Staff / Required Headcount) × 100 | Learning Management System (LMS) | Monthly |

### Appendix B — Threshold and Target Register

*This appendix documents the approved performance thresholds for each metric. Thresholds must be reviewed and approved annually by the CISO.*

| Metric | Green (Target Met) | Amber (At Risk) | Red (Breach) | Last Approved | Approved By |
|---|---|---|---|---|---|
| Patch Compliance Rate | ≥ [X]% | [X]–[X]% | < [X]% | [DD/MM/YYYY] | [CISO Name] |
| Critical Vuln Remediation Rate | ≥ [X]% within [X] days | [X]–[X]% | < [X]% | [DD/MM/YYYY] | [CISO Name] |
| MTTD | ≤ [X] hours | [X]–[X] hours | > [X] hours | [DD/MM/YYYY] | [CISO Name] |
| MTTR | ≤ [X] hours | [X]–[X] hours | > [X] hours | [DD/MM/YYYY] | [CISO Name] |
| Training Completion Rate | ≥ [X]% | [X]–[X]% | < [X]% | [DD/MM/YYYY] | [CISO Name] |

### Appendix C — NACSA Mandatory Reporting Obligations

*This appendix summarises the reporting obligations to NACSA that may be triggered by incidents or security events identified through this dashboard's monitoring activities.*

- Under **Section 18 of Act 854**, NCII entity owners are required to report cybersecurity incidents to NACSA within the timeframes prescribed by the relevant Sector Lead Agency and NACSA directives.
- The following thresholds trigger mandatory NACSA notification: [Describe triggering conditions per NACSA guidance, e.g., P1 incidents affecting NCII system availability, confirmed data breaches involving NCII assets]
- NACSA Incident Reporting Portal / Contact: [Insert approved NACSA reporting channel per current guidance]
- Internal NACSA Reporting Coordinator: [Name / Role]

### Appendix D — Dashboard Change Log

*Record material changes to the dashboard's structure, metrics, or thresholds below. Minor formatting changes do not require an entry.*

| Date | Change Description | Initiated By | Approved By |
|---|---|---|---|
| [DD/MM/YYYY] | [Description of structural or metric change] | [Name / Role] | [CISO Name] |

---

*This document is classified as **Confidential** and is intended solely for authorised recipients within [Organization Name] and designated regulatory bodies. Unauthorised disclosure, reproduction, or distribution is strictly prohibited. For queries regarding this document, contact the Chief Information Security Officer at [CISO Contact Details].*

---

*End of Document — Security Metrics Dashboard v1.0*