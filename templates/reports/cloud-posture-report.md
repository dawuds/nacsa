# Cloud Security Posture Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Cloud Security |
| **Organization** | [Organization Name] |
| **Report Period** | [Quarter, e.g., Q1 FY2026] |
| **Last Review Date** | [DD MMM YYYY] |
| **Next Review Date** | [DD MMM YYYY] |
| **Approved By** | [Approved By] |

---

> **Document Classification Notice:** This document is classified **Confidential**. It contains sensitive information relating to the cloud security posture of [Organization Name] and is intended solely for authorized personnel. Unauthorized disclosure, reproduction, or distribution is strictly prohibited and may constitute an offence under the Cyber Security Act 2024 (Act 854) and the Personal Data Protection Act 2010 (Act 709).

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Executive Summary](#2-executive-summary)
3. [Cloud Asset Inventory](#3-cloud-asset-inventory)
4. [Configuration Compliance](#4-configuration-compliance)
5. [Vulnerability Findings](#5-vulnerability-findings)
6. [Access Anomalies](#6-access-anomalies)
7. [Cost and Usage Analysis](#7-cost-and-usage-analysis)
8. [Improvement Recommendations](#8-improvement-recommendations)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Cloud Security Posture Report provides a comprehensive, quarterly assessment of the security state of cloud environments operated by or on behalf of [Organization Name] that host National Critical Information Infrastructure (NCII) workloads. The report is produced in accordance with the obligations imposed upon NCII sector leads and NCII entities under **Section 18 of the Cyber Security Act 2024 (Act 854)**, which requires NCII entities to implement, monitor, and report on cybersecurity measures commensurate with the risk profile of critical systems and services.

The primary objectives of this report are to:

- Provide leadership and the Cloud Security team with a factual, evidence-based view of the current cloud security posture.
- Identify configuration drift, unmitigated vulnerabilities, and anomalous access patterns across cloud-hosted NCII workloads.
- Track remediation progress against previously identified findings.
- Support board-level and regulatory reporting obligations under Act 854 and related directives issued by the National Cyber Security Agency (NACSA).
- Inform investment decisions and resource prioritisation for cloud security improvement initiatives.

### 1.2 Scope

*Define the organizational and technical boundaries of this report. Include the cloud service providers, accounts, subscriptions, tenancies, and workload classifications in scope.*

This report covers the following cloud environments and workloads for the reporting period **[Quarter, e.g., Q1 FY2026]** (covering **[Start Date]** to **[End Date]**):

| Dimension | In Scope | Out of Scope |
|---|---|---|
| **Cloud Service Providers** | [e.g., Microsoft Azure, Amazon Web Services, Google Cloud Platform] | [e.g., Shadow IT tenancies, unmanaged subscriptions] |
| **Environments** | Production, Pre-Production, Disaster Recovery | Development sandboxes (unless hosting NCII-adjacent data) |
| **Workload Classification** | NCII workloads, Tier 1 and Tier 2 critical systems | Non-production test workloads |
| **Organizational Entities** | [Organization Name] and its subsidiaries hosting NCII workloads | Third-party managed service provider environments (covered separately) |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854), s18 | [List any explicitly excluded frameworks] |

### 1.3 Reporting Period

| Field | Value |
|---|---|
| **Report Quarter** | [Q1 / Q2 / Q3 / Q4] |
| **Financial Year** | [FY20XX] |
| **Period Start** | [DD MMM YYYY] |
| **Period End** | [DD MMM YYYY] |
| **Report Generated** | [DD MMM YYYY] |
| **Next Report Due** | [DD MMM YYYY] |

---

## 2. Executive Summary

*Provide a concise, non-technical summary of the overall cloud security posture for the reporting period. Highlight the most significant findings, risk posture trends, and critical remediation actions required. This section is intended for senior management and the Board.*

### 2.1 Posture Overview

During **[Quarter, FY20XX]**, [Organization Name]'s cloud security posture was assessed as **[Overall Rating: Critical / High Risk / Medium Risk / Low Risk / Acceptable]** based on consolidated findings across all in-scope cloud environments.

| Indicator | Status | Trend vs. Prior Quarter |
|---|---|---|
| **Overall Posture Rating** | [Rating] | [Improving / Stable / Deteriorating] |
| **Critical Findings Open** | [Number] | [▲ / ▼ / —] [Number] from prior quarter |
| **High Findings Open** | [Number] | [▲ / ▼ / —] [Number] from prior quarter |
| **Configuration Compliance Score** | [XX]% | [▲ / ▼ / —] [XX]% from prior quarter |
| **Findings Remediated This Quarter** | [Number] | — |
| **SLA Breach (Overdue Findings)** | [Number] | [▲ / ▼ / —] [Number] from prior quarter |
| **Access Anomalies Investigated** | [Number] | — |

### 2.2 Key Highlights

*Summarize 3–5 significant observations or events from the quarter. Include both risks identified and positive security improvements.*

- **[Finding/Highlight 1]:** [Brief description. e.g., Three critical misconfigurations were identified in the production Azure subscription associated with publicly exposed storage containers. Immediate remediation was initiated on DD MMM YYYY.]
- **[Finding/Highlight 2]:** [Brief description. e.g., Configuration compliance score improved from XX% to XX% following the enforcement of Azure Policy for NCII workload subscriptions.]
- **[Finding/Highlight 3]:** [Brief description. e.g., XX privileged access anomalies were detected via CSPM tooling; XX were confirmed false positives and XX are under active investigation.]
- **[Finding/Highlight 4]:** [Brief description.]
- **[Finding/Highlight 5]:** [Brief description.]

### 2.3 Priority Actions Required

*List the top remediation or improvement actions that require immediate attention or senior leadership decision. Assign an owner and target date for each.*

| Priority | Action | Owner | Target Date | Status |
|---|---|---|---|---|
| P1 — Critical | [Action description] | [Role / Name] | [DD MMM YYYY] | [Open / In Progress] |
| P1 — Critical | [Action description] | [Role / Name] | [DD MMM YYYY] | [Open / In Progress] |
| P2 — High | [Action description] | [Role / Name] | [DD MMM YYYY] | [Open / In Progress] |
| P2 — High | [Action description] | [Role / Name] | [DD MMM YYYY] | [Open / In Progress] |
| P3 — Medium | [Action description] | [Role / Name] | [DD MMM YYYY] | [Open / In Progress] |

---

## 3. Cloud Asset Inventory

*This section provides a complete and current inventory of all cloud assets within the defined scope. Accurate asset inventory is a prerequisite for effective security posture management and is required to demonstrate compliance with NACSA's NCII risk management obligations under Act 854, s18. The inventory must be reviewed and reconciled quarterly.*

### 3.1 Inventory Summary

| Cloud Provider | Subscriptions / Accounts | Total Assets Discovered | Managed Assets | Unmanaged / Shadow Assets |
|---|---|---|---|---|
| [e.g., Microsoft Azure] | [Number] | [Number] | [Number] | [Number] |
| [e.g., Amazon Web Services] | [Number] | [Number] | [Number] | [Number] |
| [e.g., Google Cloud Platform] | [Number] | [Number] | [Number] | [Number] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** |

### 3.2 Asset Breakdown by Type

*List all discovered asset types and their counts. Adjust asset type categories to reflect the organization's cloud footprint.*

| Asset Type | Count | NCII-Classified | Non-NCII | New This Quarter | Decommissioned This Quarter |
|---|---|---|---|---|---|
| Virtual Machines / Compute Instances | [Number] | [Number] | [Number] | [Number] | [Number] |
| Managed Kubernetes Clusters | [Number] | [Number] | [Number] | [Number] | [Number] |
| Serverless Functions (FaaS) | [Number] | [Number] | [Number] | [Number] | [Number] |
| Managed Databases (PaaS) | [Number] | [Number] | [Number] | [Number] | [Number] |
| Object / Blob Storage Accounts | [Number] | [Number] | [Number] | [Number] | [Number] |
| Virtual Networks / VPCs | [Number] | [Number] | [Number] | [Number] | [Number] |
| Load Balancers | [Number] | [Number] | [Number] | [Number] | [Number] |
| Identity and Access Management Accounts | [Number] | [Number] | [Number] | [Number] | [Number] |
| API Gateways | [Number] | [Number] | [Number] | [Number] | [Number] |
| CDN / Edge Endpoints | [Number] | [Number] | [Number] | [Number] | [Number] |
| Security Services (WAF, Firewall, CASB) | [Number] | [Number] | [Number] | [Number] | [Number] |
| Other: [Specify] | [Number] | [Number] | [Number] | [Number] | [Number] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** |

### 3.3 Asset Classification and Criticality

*Map discovered assets to their business criticality and NCII classification. This mapping underpins risk prioritisation throughout the remainder of the report.*

| Asset ID / Name | Asset Type | Cloud Provider | Subscription / Account | Environment | NCII Classification | Criticality | Data Classification | Asset Owner |
|---|---|---|---|---|---|---|---|---|
| [ASSET-001] | [Type] | [Provider] | [Subscription Name] | Production | [Yes / No] | [Critical / High / Medium / Low] | [Confidential / Restricted / Public] | [Team / Owner] |
| [ASSET-002] | [Type] | [Provider] | [Subscription Name] | DR | [Yes / No] | [Critical / High / Medium / Low] | [Confidential / Restricted / Public] | [Team / Owner] |
| [ASSET-003] | [Type] | [Provider] | [Subscription Name] | Pre-Production | [Yes / No] | [High / Medium / Low] | [Confidential / Restricted / Public] | [Team / Owner] |

### 3.4 Inventory Changes This Quarter

*Document significant additions, removals, or reclassifications in the asset inventory. Unexplained additions may indicate shadow IT or unauthorized provisioning.*

| Change Type | Asset ID / Name | Description | Approved By | Date |
|---|---|---|---|---|
| New Asset | [ASSET-XXX] | [Description of new asset and business justification] | [Approver] | [DD MMM YYYY] |
| Decommissioned | [ASSET-XXX] | [Description of decommissioned asset and confirmation of data sanitisation] | [Approver] | [DD MMM YYYY] |
| Reclassified | [ASSET-XXX] | [Previous classification → New classification and reason] | [Approver] | [DD MMM YYYY] |
| Unmanaged (Flagged) | [ASSET-XXX] | [Description of shadow asset discovered and action taken] | [Approver] | [DD MMM YYYY] |

---

## 4. Configuration Compliance

*This section assesses the degree to which cloud assets are configured in accordance with approved security baselines, regulatory requirements, and industry benchmarks (e.g., CIS Benchmarks, NACSA Cloud Security Guidelines). Configuration compliance is a key indicator of security hygiene and directly supports compliance with Act 854, s18 obligations for NCII entities.*

### 4.1 Compliance Score Summary

*Provide an aggregated compliance score per cloud provider and benchmark. Scores should be derived from an automated Cloud Security Posture Management (CSPM) tool.*

| Cloud Provider | Benchmark / Standard | Controls Evaluated | Compliant | Non-Compliant | N/A / Exempt | Score (%) | Prior Quarter Score (%) |
|---|---|---|---|---|---|---|---|
| [e.g., Microsoft Azure] | CIS Microsoft Azure Foundations v2.0 | [Number] | [Number] | [Number] | [Number] | [XX]% | [XX]% |
| [e.g., Microsoft Azure] | NACSA Cloud Security Guidelines | [Number] | [Number] | [Number] | [Number] | [XX]% | [XX]% |
| [e.g., AWS] | CIS AWS Foundations Benchmark v1.5 | [Number] | [Number] | [Number] | [Number] | [XX]% | [XX]% |
| [e.g., AWS] | AWS Foundational Security Best Practices | [Number] | [Number] | [Number] | [Number] | [XX]% | [XX]% |
| **Overall** | — | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[XX]%** | **[XX]%** |

### 4.2 Non-Compliant Configuration Findings

*List all non-compliant configurations identified during the quarter. Prioritise by severity. Each finding must have an assigned owner and remediation target date.*

| Finding ID | Cloud Provider | Resource / Asset | Control / Benchmark Reference | Description | Severity | Status | Owner | Target Remediation Date |
|---|---|---|---|---|---|---|---|---|
| CFG-001 | [Provider] | [Resource Name] | [e.g., CIS Azure 2.1.1] | [Brief description of the misconfiguration] | Critical | [Open / In Progress / Resolved] | [Owner] | [DD MMM YYYY] |
| CFG-002 | [Provider] | [Resource Name] | [e.g., NACSA-CSG-4.3] | [Brief description of the misconfiguration] | High | [Open / In Progress / Resolved] | [Owner] | [DD MMM YYYY] |
| CFG-003 | [Provider] | [Resource Name] | [e.g., CIS AWS 1.4] | [Brief description of the misconfiguration] | High | [Open / In Progress / Resolved] | [Owner] | [DD MMM YYYY] |
| CFG-004 | [Provider] | [Resource Name] | [Control Reference] | [Brief description] | Medium | [Open / In Progress / Resolved] | [Owner] | [DD MMM YYYY] |
| CFG-005 | [Provider] | [Resource Name] | [Control Reference] | [Brief description] | Low | [Open / In Progress / Resolved] | [Owner] | [DD MMM YYYY] |

### 4.3 Compliance Trend Analysis

*Compare compliance scores across the last four quarters to identify trend lines and assess the effectiveness of remediation activities.*

| Control Domain | Q-3 Score | Q-2 Score | Q-1 Score | Current Quarter Score | Trend |
|---|---|---|---|---|---|
| Identity and Access Management | [XX]% | [XX]% | [XX]% | [XX]% | [Improving / Stable / Deteriorating] |
| Data Protection and Encryption | [XX]% | [XX]% | [XX]% | [XX]% | [Improving / Stable / Deteriorating] |
| Network Security | [XX]% | [XX]% | [XX]% | [XX]% | [Improving / Stable / Deteriorating] |
| Logging and Monitoring | [XX]% | [XX]% | [XX]% | [XX]% | [Improving / Stable / Deteriorating] |
| Incident Response Readiness | [XX]% | [XX]% | [XX]% | [XX]% | [Improving / Stable / Deteriorating] |
| Patch and Vulnerability Management | [XX]% | [XX]% | [XX]% | [XX]% | [Improving / Stable / Deteriorating] |
| Backup and Resilience | [XX]% | [XX]% | [XX]% | [XX]% | [Improving / Stable / Deteriorating] |

### 4.4 Accepted Risks and Exemptions

*Document any non-compliant configurations that have been formally risk-accepted or exempted from the applicable benchmark. Each exemption must be supported by a documented business justification and time-limited approval.*

| Exemption ID | Finding Reference | Description | Business Justification | Risk Accepted By | Acceptance Date | Expiry Date | Compensating Control |
|---|---|---|---|---|---|---|---|
| EX-001 | [CFG-XXX] | [Description of exemption] | [Business justification] | [Authorizing Role / Name] | [DD MMM YYYY] | [DD MMM YYYY] | [Description of compensating control in place] |
| EX-002 | [CFG-XXX] | [Description of exemption] | [Business justification] | [Authorizing Role / Name] | [DD MMM YYYY] | [DD MMM YYYY] | [Description of compensating control in place] |

---

## 5. Vulnerability Findings

*This section presents the results of vulnerability assessments conducted across all in-scope cloud workloads during the reporting period. Findings are drawn from automated vulnerability scanning, Cloud-Native Application Protection Platform (CNAPP) tooling, and where applicable, manual penetration testing engagements. Timely remediation of vulnerabilities in NCII workloads is required under Act 854, s18.*

### 5.1 Vulnerability Summary

*Provide an aggregated view of all open vulnerabilities by severity. This summary should align with the organization's vulnerability management policy SLA definitions.*

| Severity | New This Quarter | Remediated This Quarter | Carried Over | Total Open | SLA Breached | % of Total Open |
|---|---|---|---|---|---|---|
| Critical (CVSS 9.0–10.0) | [Number] | [Number] | [Number] | [Number] | [Number] | [XX]% |
| High (CVSS 7.0–8.9) | [Number] | [Number] | [Number] | [Number] | [Number] | [XX]% |
| Medium (CVSS 4.0–6.9) | [Number] | [Number] | [Number] | [Number] | [Number] | [XX]% |
| Low (CVSS 0.1–3.9) | [Number] | [Number] | [Number] | [Number] | [Number] | [XX]% |
| Informational | [Number] | [Number] | [Number] | [Number] | — | [XX]% |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **100%** |

### 5.2 Critical and High Vulnerability Detail

*List all open Critical and High severity vulnerabilities in detail. These require executive visibility and active tracking.*

| Vuln ID | CVE Reference | Affected Asset | Asset Criticality | Description | CVSS Score | Severity | Date Discovered | Days Open | SLA Deadline | Remediation Status | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| VLN-001 | [CVE-20XX-XXXXX] | [Asset Name] | [Critical / High] | [Brief technical description] | [X.X] | Critical | [DD MMM YYYY] | [Number] | [DD MMM YYYY] | [Open / In Progress / Pending Patch / Risk Accepted] | [Owner] |
| VLN-002 | [CVE-20XX-XXXXX] | [Asset Name] | [Critical / High] | [Brief technical description] | [X.X] | Critical | [DD MMM YYYY] | [Number] | [DD MMM YYYY] | [Open / In Progress / Pending Patch / Risk Accepted] | [Owner] |
| VLN-003 | [CVE-20XX-XXXXX] | [Asset Name] | [High] | [Brief technical description] | [X.X] | High | [DD MMM YYYY] | [Number] | [DD MMM YYYY] | [Open / In Progress / Pending Patch / Risk Accepted] | [Owner] |
| VLN-004 | [CVE-20XX-XXXXX] | [Asset Name] | [High] | [Brief technical description] | [X.X] | High | [DD MMM YYYY] | [Number] | [DD MMM YYYY] | [Open / In Progress / Pending Patch / Risk Accepted] | [Owner] |

### 5.3 Vulnerability Remediation SLA Compliance

*Track adherence to the organization's vulnerability remediation SLAs. SLA breaches for NCII workloads should be escalated to the Cloud Security Lead and CISO.*

| SLA Tier | SLA Target (Days) | Total Due for Remediation | Remediated Within SLA | SLA Breaches | SLA Compliance Rate |
|---|---|---|---|---|---|
| Critical | [e.g., 7 days] | [Number] | [Number] | [Number] | [XX]% |
| High | [e.g., 30 days] | [Number] | [Number] | [Number] | [XX]% |
| Medium | [e.g., 90 days] | [Number] | [Number] | [Number] | [XX]% |
| Low | [e.g., 180 days] | [Number] | [Number] | [Number] | [XX]% |

### 5.4 Vulnerability Trend Analysis

*Describe the trend in vulnerability discovery and remediation over the past four quarters. Note any patterns related to specific asset types, teams, or cloud providers.*

| Metric | Q-3 | Q-2 | Q-1 | Current Quarter | Trend |
|---|---|---|---|---|---|
| Total Open Vulnerabilities | [Number] | [Number] | [Number] | [Number] | [▲ / ▼ / —] |
| Critical Open | [Number] | [Number] | [Number] | [Number] | [▲ / ▼ / —] |
| Mean Time to Remediate (Critical) | [X days] | [X days] | [X days] | [X days] | [▲ / ▼ / —] |
| Mean Time to Remediate (High) | [X days] | [X days] | [X days] | [X days] | [▲ / ▼ / —] |
| SLA Breach Count | [Number] | [Number] | [Number] | [Number] | [▲ / ▼ / —] |

### 5.5 Accepted Risk — Unmitigated Vulnerabilities

*Document all vulnerabilities for which remediation has been deferred through a formal risk acceptance process.*

| Vuln ID | CVE Reference | Affected Asset | Justification for Deferral | Compensating Control | Risk Accepted By | Acceptance Date | Review Date |
|---|---|---|---|---|---|---|---|
| VLN-XXX | [CVE-20XX-XXXXX] | [Asset Name] | [Justification] | [Compensating control in place] | [Authorizing Role / Name] | [DD MMM YYYY] | [DD MMM YYYY] |

---

## 6. Access Anomalies

*This section documents privileged and anomalous access events detected across cloud environments during the reporting period. Detection is sourced from Cloud Access Security Broker (CASB) tooling, cloud-native audit logs (e.g., Azure Monitor, AWS CloudTrail), and SIEM correlation rules. Monitoring for unauthorized or anomalous access is a core requirement for NCII entities under Act 854, s18.*

### 6.1 Anomaly Detection Summary

*Provide a high-level count of access anomalies detected, investigated, and resolved during the quarter. Distinguish between confirmed security incidents and false positives.*

| Anomaly Category | Detected | Investigated | Confirmed Incident | False Positive | Under Investigation | Escalated to IR |
|---|---|---|---|---|---|---|
| Privileged Account Misuse | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| Impossible Travel / Geolocation Anomaly | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| Unauthorized API Access | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| Dormant Account Activity | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| Excessive Permission Usage | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| Data Exfiltration Indicators | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| Service Account Anomalies | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| Other: [Specify] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** |

### 6.2 Notable Access Anomaly Detail

*Describe each confirmed or high-severity access anomaly in sufficient detail for audit purposes. Reference any linked incident tickets.*

| Anomaly ID | Date Detected | Cloud Provider | Affected Resource | Anomaly Type | Description | User / Principal | Source IP / Location | Disposition | Incident Reference | Resolved Date |
|---|---|---|---|---|---|---|---|---|---|---|
| AAN-001 | [DD MMM YYYY] | [Provider] | [Resource] | [Type] | [Brief description of the anomalous activity observed] | [User / Service Principal] | [IP / Country] | [Confirmed Incident / False Positive / Under Investigation] | [INC-XXXXX] | [DD MMM YYYY] |
| AAN-002 | [DD MMM YYYY] | [Provider] | [Resource] | [Type] | [Brief description] | [User / Service Principal] | [IP / Country] | [Confirmed Incident / False Positive / Under Investigation] | [INC-XXXXX] | [DD MMM YYYY] |
| AAN-003 | [DD MMM YYYY] | [Provider] | [Resource] | [Type] | [Brief description] | [User / Service Principal] | [IP / Country] | [Confirmed Incident / False Positive / Under Investigation] | [INC-XXXXX] | [DD MMM YYYY] |

### 6.3 Privileged Access Review

*Summarize the results of the quarterly privileged access review for cloud environments. Flag over-provisioned, stale, or non-compliant privileged accounts.*

| Cloud Provider | Total Privileged Accounts | Accounts Reviewed | Over-Provisioned | Accounts with No MFA | Stale Accounts (> [90] days inactive) | Accounts Remediated | Accounts Flagged for Removal |
|---|---|---|---|---|---|---|---|
| [Provider 1] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| [Provider 2] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] | [Number] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** |

### 6.4 Service Account and Non-Human Identity Review

*Review of service accounts, managed identities, and API keys to ensure they comply with least-privilege principles and key rotation policies.*

| Finding | Count | Notes |
|---|---|---|
| Service accounts with owner / contributor rights | [Number] | [Action taken or required] |
| API keys older than [90] days without rotation | [Number] | [Action taken or required] |
| Service accounts not linked to a CI/CD or automation system | [Number] | [Action taken or required] |
| Shared service accounts (multiple systems / teams using the same credential) | [Number] | [Action taken or required] |
| Service accounts with no activity in > [180] days | [Number] | [Action taken or required] |

---

## 7. Cost and Usage Analysis

*This section presents an analysis of cloud expenditure and resource usage for the reporting period. While primarily a financial management function, cost and usage analysis contributes to security posture management by identifying unauthorized resource provisioning, cryptomining workloads, and shadow IT. Unexplained cost spikes may indicate a security incident.*

### 7.1 Cloud Spend Summary

*Provide a high-level summary of cloud expenditure during the quarter. Note any material variances from forecast that require investigation.*

| Cloud Provider | Budgeted Spend (MYR) | Actual Spend (MYR) | Variance (MYR) | Variance (%) | Status |
|---|---|---|---|---|---|
| [Provider 1] | [Amount] | [Amount] | [Amount] | [XX]% | [Within Budget / Over Budget / Under Budget] |
| [Provider 2] | [Amount] | [Amount] | [Amount] | [XX]% | [Within Budget / Over Budget / Under Budget] |
| **Total** | **[Amount]** | **[Amount]** | **[Amount]** | **[XX]%** | — |

### 7.2 Spend Breakdown by Environment and Workload

*Break down spend by environment and workload classification to identify anomalous or disproportionate usage.*

| Environment | Workload / Service | Cloud Provider | Monthly Average Spend (MYR) | Quarter Total Spend (MYR) | % of Total | Prior Quarter Spend (MYR) | Variance |
|---|---|---|---|---|---|---|---|
| Production | [Workload / Service Name] | [Provider] | [Amount] | [Amount] | [XX]% | [Amount] | [▲ / ▼ / —] |
| Pre-Production | [Workload / Service Name] | [Provider] | [Amount] | [Amount] | [XX]% | [Amount] | [▲ / ▼ / —] |
| Disaster Recovery | [Workload / Service Name] | [Provider] | [Amount] | [Amount] | [XX]% | [Amount] | [▲ / ▼ / —] |
| **Total** | — | — | **[Amount]** | **[Amount]** | **100%** | **[Amount]** | — |

### 7.3 Cost Anomalies and Security-Relevant Spend Events

*Identify and investigate cost anomalies that may indicate unauthorized provisioning, cryptomining, or data exfiltration (e.g., unexpected data egress charges).*

| Anomaly ID | Date Detected | Cloud Provider | Service / Resource | Description | Cost Impact (MYR) | Security Relevance | Investigation Status | Findings |
|---|---|---|---|---|---|---|---|---|
| COST-001 | [DD MMM YYYY] | [Provider] | [Service Name] | [Description of the anomalous cost event] | [Amount] | [Yes / No / Suspected] | [Investigated / Ongoing / Closed] | [Summary of findings] |
| COST-002 | [DD MMM YYYY] | [Provider] | [Service Name] | [Description] | [Amount] | [Yes / No / Suspected] | [Investigated / Ongoing / Closed] | [Summary of findings] |

### 7.4 Resource Utilisation and Right-Sizing

*Identify over-provisioned or underutilised resources. Over-provisioned resources increase the attack surface unnecessarily and represent avoidable cost.*

| Resource Type | Total Count | Underutilised (< [20]% avg CPU / memory) | Recommended for Right-Sizing | Potential Monthly Saving (MYR) | Recommended Action |
|---|---|---|---|---|---|
| Virtual Machines | [Number] | [Number] | [Number] | [Amount] | [Downsize / Terminate / Reserved Instance] |
| Databases | [Number] | [Number] | [Number] | [Amount] | [Downsize / Terminate / Reserved Instance] |
| Kubernetes Node Pools | [Number] | [Number] | [Number] | [Amount] | [Scale Down / Right-Size Node Type] |
| Storage Accounts | [Number] | [Number] | [Number] | [Amount] | [Archive / Delete Orphaned Storage] |

---

## 8. Improvement Recommendations

*This section consolidates recommendations arising from findings across all sections of this report. Recommendations are prioritised by risk impact and mapped to the relevant regulatory requirement or security control framework. Each recommendation should be tracked in the organization's risk register or security roadmap.*

### 8.1 Recommendation Summary

| Priority | Total Recommendations | New This Quarter | Carried Over | Completed This Quarter | Open |
|---|---|---|---|---|---|
| P1 — Critical | [Number] | [Number] | [Number] | [Number] | [Number] |
| P2 — High | [Number] | [Number] | [Number] | [Number] | [Number] |
| P3 — Medium | [Number] | [Number] | [Number] | [Number] | [Number] |
| P4 — Low | [Number] | [Number] | [Number] | [Number] | [Number] |
| **Total** | **[Number]** | **[Number]** | **[Number]** | **[Number]** | **[Number]** |

### 8.2 Detailed Recommendations

*For each recommendation, provide sufficient context for the responsible team to understand the issue, the proposed solution, and the expected risk reduction.*

---

#### REC-001: [Recommendation Title]

| Field | Details |
|---|---|
| **Recommendation ID** | REC-001 |
| **Priority** | [P1 — Critical / P2 — High / P3 — Medium / P4 — Low] |
| **Source Section** | [e.g., Section 4 — Configuration Compliance / Section 5 — Vulnerability Findings] |
| **Regulatory Reference** | [e.g., Act 854, s18 / NACSA Cloud Security Guidelines / CIS Benchmark] |
| **Owner** | [Role / Team] |
| **Target Completion Date** | [DD MMM YYYY] |
| **Status** | [Open / In Progress / Completed / Deferred] |

**Observation:** [Describe the current state, gap, or finding that this recommendation addresses.]

**Recommended Action:** [Describe the specific steps or measures recommended to address the finding. Be prescriptive where possible.]

**Expected Outcome / Risk Reduction:** [Describe the security improvement or risk reduction that will result from implementing this recommendation.]

**Estimated Effort:** [Low / Medium / High] | **Estimated Cost (if applicable):** [MYR Amount / To be determined]

---

#### REC-002: [Recommendation Title]

| Field | Details |
|---|---|
| **Recommendation ID** | REC-002 |
| **Priority** | [P1 — Critical / P2 — High / P3 — Medium / P4 — Low] |
| **Source Section** | [e.g., Section 6 — Access Anomalies] |
| **Regulatory Reference** | [e.g., Act 854, s18] |
| **Owner** | [Role / Team] |
| **Target Completion Date** | [DD MMM YYYY] |
| **Status** | [Open / In Progress / Completed / Deferred] |

**Observation:** [Describe the current state, gap, or finding.]

**Recommended Action:** [Describe the recommended steps.]

**Expected Outcome / Risk Reduction:** [Describe the expected benefit.]

**Estimated Effort:** [Low / Medium / High] | **Estimated Cost (if applicable):** [MYR Amount / To be determined]

---

#### REC-003: [Recommendation Title]

| Field | Details |
|---|---|
| **Recommendation ID** | REC-003 |
| **Priority** | [P2 — High / P3 — Medium / P4 — Low] |
| **Source Section** | [e.g., Section 7 — Cost and Usage Analysis] |
| **Regulatory Reference** | [e.g., Organizational Cloud Governance Policy] |
| **Owner** | [Role / Team] |
| **Target Completion Date** | [DD MMM YYYY] |
| **Status** | [Open / In Progress / Completed / Deferred] |

**Observation:** [Describe the current state, gap, or finding.]

**Recommended Action:** [Describe the recommended steps.]

**Expected Outcome / Risk Reduction:** [Describe the expected benefit.]

**Estimated Effort:** [Low / Medium / High] | **Estimated Cost (if applicable):** [MYR Amount / To be determined]

---

*[Add additional REC-XXX entries as required. Each finding from Sections 3–7 generating a recommendation should have a corresponding entry in this section.]*

### 8.3 Recommendations Completed This Quarter

*Track the closure of recommendations from previous reports to demonstrate ongoing improvement.*

| Recommendation ID | Title | Original Priority | Completed Date | Verified By | Notes |
|---|---|---|---|---|---|
| [REC-XXX] | [Recommendation Title] | [Priority] | [DD MMM YYYY] | [Verifier Name / Role] | [Brief note on how the recommendation was addressed] |
| [REC-XXX] | [Recommendation Title] | [Priority] | [DD MMM YYYY] | [Verifier Name / Role] | [Brief note] |

---

## 9. Roles and Responsibilities

*This section defines the roles and responsibilities for the production, review, approval, and action of this report. The RACI matrix clarifies accountability for each key activity associated with the cloud security posture assessment process.*

### 9.1 Key Roles

| Role | Title | Name | Contact |
|---|---|---|---|
| **Report Author** | Cloud Security Analyst / Engineer | [Name] | [email@organization.com.my] |
| **Cloud Security Lead** | Head of Cloud Security | [Name] | [email@organization.com.my] |
| **Chief Information Security Officer (CISO)** | CISO | [Name] | [email@organization.com.my] |
| **Cloud Platform Owner** | Head of Cloud Engineering | [Name] | [email@organization.com.my] |
| **Risk and Compliance Manager** | Cloud Risk and Compliance | [Name] | [email@organization.com.my] |
| **NCII Coordinator** | NCII Designated Officer | [Name] | [email@organization.com.my] |
| **Business/System Owners** | Asset Owners (per Section 3) | [Multiple] | [As per asset register] |

### 9.2 RACI Matrix

*R = Responsible | A = Accountable | C = Consulted | I = Informed*

| Activity | Cloud Security Analyst | Cloud Security Lead | CISO | Cloud Platform Owner | Risk & Compliance Manager | NCII Coordinator | System / Asset Owners |
|---|---|---|---|---|---|---|---|
| Conduct cloud asset discovery and reconciliation | R | A | I | C | I | I | C |
| Execute CSPM configuration compliance scan | R | A | I | C | I | I | I |
| Conduct vulnerability scanning | R | A | I | C | I | I | I |
| Analyse access anomalies and triage alerts | R | A | C | C | I | I | C |
| Analyse cloud cost and usage data | R | A | I | C | I | I | I |
| Draft Cloud Security Posture Report | R | A | I | I | C | C | I |
| Review and validate report findings | C | R | A | C | C | I | C |
| Approve report for distribution | I | C | A | I | I | R | I |
| Distribute report to stakeholders | R | A | I | I | I | I | I |
| Track and remediate findings | C | A | I | R | C | I | R |
| Escalate unresolved Critical / P1 findings | R | A | R | C | C | R | I |
| Submit to NACSA / regulator (if required) | C | C | A | I | R | R | I |
| Maintain report archive and version history | R | A | I | I | C | I | I |

---

## 10. Review and Approval

### 10.1 Review and Distribution

This report is subject to the following review and distribution controls:

- This report is produced on a **quarterly** basis, in alignment with [Organization Name]'s Cloud Security Policy and the obligations under Act 854, s18.
- Draft reports must be reviewed by the Cloud Security Lead and Risk & Compliance Manager prior to submission for approval.
- The approved report is distributed to the CISO, Cloud Platform Owner, NCII Coordinator, and relevant system owners.
- Copies submitted to NACSA or other regulatory bodies must be accompanied by the official cover letter approved by the CISO.
- Report archives are retained for a minimum of **[7 years]** in accordance with [Organization Name]'s Records Management Policy.

### 10.2 Version History

| Version | Date | Author | Description of Changes |
|---|---|---|---|
| 0.1 | [DD MMM YYYY] | [Author Name] | Initial draft for internal review |
| 0.2 | [DD MMM YYYY] | [Author Name] | Incorporated review comments from Cloud Security Lead and Compliance |
| 1.0 | [DD MMM YYYY] | [Author Name] | Approved final version for distribution |

### 10.3 Approval Sign-Off

*By signing below, the approvers confirm that they have reviewed the contents of this Cloud Security Posture Report and are satisfied that it accurately represents the cloud security posture of [Organization Name] for the stated reporting period.*

| Role | Name | Signature | Date |
|---|---|---|---|
| **Cloud Security Lead** | [Name] | | [DD MMM YYYY] |
| **Risk and Compliance Manager** | [Name] | | [DD MMM YYYY] |
| **NCII Coordinator** | [Name] | | [DD MMM YYYY] |
| **Chief Information Security Officer (CISO)** | [Name] | | [DD MMM YYYY] |

---

## 11. References

*This section lists the regulatory instruments, standards, guidelines, and internal policies that govern the preparation and content of this report.*

### 11.1 Regulatory and Legislative References

| Reference | Description | Relevant Clause(s) |
|---|---|---|
| **Cyber Security Act 2024 (Act 854)** | Primary legislation governing cybersecurity obligations for NCII entities in Malaysia | **Section 18** — Obligations of NCII entities to implement and maintain cybersecurity measures; reporting requirements |
| **NACSA National Cyber Security Policy (NCSP)** | National policy framework governing cybersecurity across critical sectors | All applicable provisions |
| **NACSA Cloud Security Guidelines** | Technical guidelines issued by NACSA for the security of cloud environments hosting NCII workloads | All applicable provisions |
| **Personal Data Protection Act 2010 (Act 709)** | Governs the protection of personal data processed in the course of commercial transactions | Sections 9–11 (Security Standard) |
| **Bank Negara Malaysia — Risk Management in Technology (RMiT)** | BNM policy document applicable to financial institutions | 10.52–10.57 (Cloud Services) |

### 11.2 Standards and Frameworks

| Reference | Description |
|---|---|
| **CIS Microsoft Azure Foundations Benchmark v2.0** | Industry benchmark for securing Azure cloud environments |
| **CIS AWS Foundations Benchmark v1.5** | Industry benchmark for securing AWS cloud environments |
| **CIS Google Cloud Platform Foundations Benchmark** | Industry benchmark for securing GCP environments |
| **ISO/IEC 27001:2022** | Information security management system requirements |
| **ISO/IEC 27017:2015** | Code of practice for information security controls for cloud services |
| **NIST SP 800-144** | Guidelines on security and privacy in public cloud computing |
| **CSA Cloud Controls Matrix (CCM) v4** | Cloud-specific security controls framework |

### 11.3 Internal Policy References

| Document | Document ID | Version |
|---|---|---|
| [Organization Name] Cloud Security Policy | [DOC-ID] | [Version] |
| [Organization Name] Vulnerability Management Policy | [DOC-ID] | [Version] |
| [Organization Name] Identity and Access Management Policy | [DOC-ID] | [Version] |
| [Organization Name] Incident Response Policy | [DOC-ID] | [Version] |
| [Organization Name] Risk Management Framework | [DOC-ID] | [Version] |
| [Organization Name] Data Classification Policy | [DOC-ID] | [Version] |
| [Organization Name] Records Management Policy | [DOC-ID] | [Version] |
| NCII Asset Register | [DOC-ID] | [Version] |

---

## 12. Appendices

### Appendix A: Cloud Asset Inventory — Full Register

*This appendix contains the complete, unabridged cloud asset inventory for the reporting period. The summary table in Section 3 presents aggregate counts; this appendix contains full asset-level detail including asset IDs, resource names, tags, regions, and ownership metadata. The full register is maintained in [System Name, e.g., Microsoft Defender for Cloud / AWS Security Hub / ServiceNow CMDB] and exported at the close of each quarter.*

> **Appendix A is attached as a separate controlled document:** [ASSET-REGISTER-Q[X]-FY20XX.xlsx / .csv]
>
> Document Reference: [Document ID] | Classification: Confidential | Version: [1.0]

---

### Appendix B: CSPM Tool Scan Reports

*This appendix contains the raw or summarised output from the Cloud Security Posture Management (CSPM) tool scans conducted during the reporting period. These reports provide the evidence base for the configuration compliance findings presented in Section 4.*

| Report | Tool | Date Generated | Coverage | File Reference |
|---|---|---|---|---|
| Azure CIS Benchmark Scan — Production | [Tool Name, e.g., Microsoft Defender for Cloud] | [DD MMM YYYY] | All production Azure subscriptions | [File name / SharePoint link] |
| AWS CIS Benchmark Scan — Production | [Tool Name, e.g., AWS Security Hub] | [DD MMM YYYY] | All production AWS accounts | [File name / SharePoint link] |
| NACSA Cloud Security Guidelines Assessment | [Tool Name] | [DD MMM YYYY] | All in-scope environments | [File name / SharePoint link] |

---

### Appendix C: Vulnerability Scan Reports

*This appendix references the full vulnerability scan reports for the reporting period. Scan results are retained in [Vulnerability Management Platform, e.g., Tenable.io / Qualys / Prisma Cloud] and are accessible to authorized personnel.*

| Scan Type | Tool | Scan Date | Scope | Report Reference |
|---|---|---|---|---|
| Cloud Workload Vulnerability Scan | [Tool Name] | [DD MMM YYYY] | All production compute assets | [Report ID / Link] |
| Container Image Vulnerability Scan | [Tool Name] | [DD MMM YYYY] | All container registries and running pods | [Report ID / Link] |
| Infrastructure as Code (IaC) Security Scan | [Tool Name] | [DD MMM YYYY] | All IaC repositories | [Report ID / Link] |
| Penetration Test Report | [Vendor Name] | [DD MMM YYYY] | [Scope as defined in test engagement] | [Report Reference — Restricted Distribution] |

---

### Appendix D: Access Anomaly Investigation Logs

*This appendix contains the detailed investigation logs for all access anomalies flagged during the reporting period. Each log entry references the corresponding anomaly ID from Section 6.2 and includes investigation notes, evidence references, and disposition details.*

> **Note:** Access anomaly investigation logs may contain sensitive information regarding security incidents. Distribution of this appendix is restricted to the Cloud Security team, CISO, and authorized investigators only.

| Anomaly ID | Investigation Log Reference | Lead Investigator | Date Opened | Date Closed | SIEM Reference | Disposition Summary |
|---|---|---|---|---|---|---|
| AAN-001 | [LOG-REF-001] | [Name] | [DD MMM YYYY] | [DD MMM YYYY] | [SIEM-TICKET-XXXXX] | [Summary of investigation findings and outcome] |
| AAN-002 | [LOG-REF-002] | [Name] | [DD MMM YYYY] | [DD MMM YYYY] | [SIEM-TICKET-XXXXX] | [Summary of investigation findings and outcome] |

---

### Appendix E: Glossary of Terms

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary Malaysian legislation governing cybersecurity obligations for NCII entities |
| **CASB** | Cloud Access Security Broker — a security policy enforcement point between cloud service users and cloud service providers |
| **CNAPP** | Cloud-Native Application Protection Platform — an integrated platform for securing cloud-native workloads |
| **CSPM** | Cloud Security Posture Management — continuous monitoring and assessment of cloud resource configurations against security policies |
| **CVSS** | Common Vulnerability Scoring System — a standardised framework for rating the severity of software vulnerabilities |
| **IAM** | Identity and Access Management |
| **NACSA** | National Cyber Security Agency — the lead agency in Malaysia for cybersecurity policy and NCII protection |
| **NCII** | National Critical Information Infrastructure — infrastructure whose disruption would have a significant impact on national security, economy, or public welfare |
| **NCSP** | National Cyber Security Policy |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **RMiT** | Risk Management in Technology — Bank Negara Malaysia's policy document for technology risk management in financial institutions |
| **SLA** | Service Level Agreement |
| **SIEM** | Security Information and Event Management |
| **WAF** | Web Application Firewall |

---

### Appendix F: Previous Quarter Recommendations Tracker

*This appendix provides a complete tracker of all open and closed recommendations from prior quarters, enabling longitudinal visibility of the security improvement programme.*

| Recommendation ID | Quarter Raised | Title | Priority | Owner | Target Date | Status | Completion Date | Notes |
|---|---|---|---|---|---|---|---|---|
| [REC-XXX] | [Q-1 FY20XX] | [Title] | [Priority] | [Owner] | [DD MMM YYYY] | [Open / In Progress / Completed / Deferred] | [DD MMM YYYY or —] | [Notes] |
| [REC-XXX] | [Q-2 FY20XX] | [Title] | [Priority] | [Owner] | [DD MMM YYYY] | [Open / In Progress / Completed / Deferred] | [DD MMM YYYY or —] | [Notes] |
| [REC-XXX] | [Q-3 FY20XX] | [Title] | [Priority] | [Owner] | [DD MMM YYYY] | [Open / In Progress / Completed / Deferred] | [DD MMM YYYY or —] | [Notes] |

---

*End of Document*

---

**Document Control:** This document is subject to version control. The master copy is maintained in [Document Management System / SharePoint Location]. Printed copies are uncontrolled — verify currency against the master before use.

| Field | Value |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Last Updated** | [DD MMM YYYY] |
| **Next Review** | [DD MMM YYYY] |