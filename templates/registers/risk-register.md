# Cyber Security Risk Register

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Risk Manager / CISO |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

*This section defines the intent and boundaries of the Risk Register. Update to reflect your organization's operational context.*

This Cyber Security Risk Register is maintained in accordance with **Section 21 of the Cyber Security Act 2024 (Act 854)** and the requirements of the **National Cyber Security Agency (NACSA)**. It serves as the authoritative record of all identified cyber security risks affecting [Organization Name]'s National Critical Information Infrastructure (NCII) systems and assets.

The register supports the organization's obligations to:

- Identify, assess, and treat cyber security risks to NCII systems as required under Act 854, s21;
- Maintain a continuous and current view of the organization's cyber risk posture;
- Demonstrate proactive risk governance to NACSA, regulators, and senior management;
- Inform strategic and operational security investment decisions.

**Scope:** This register covers all NCII systems, supporting infrastructure, data assets, third-party dependencies, and operational processes within the boundary of [Organization Name] as defined in the organization's NCII Asset Register ([Reference Asset Register Document ID]).

**Out of Scope:** Non-NCII systems managed exclusively by third parties without interface to NCII assets. Risks relating solely to physical safety (non-cyber) are captured in the separate [Physical Risk Register Document ID].

---

## 2. Risk Register

*This is the primary operational section of this document. Each row represents a discrete, identified cyber security risk. New risks must be logged within [X] business days of identification. The register is maintained continuously; a formal review is conducted quarterly by the Risk Manager and CISO.*

### 2.1 Active Risk Register

> **Instructions for completion:** Each risk entry must be assigned a unique Risk ID. All fields are mandatory. Risks rated **Critical** or **High** residual risk must be escalated to the CISO and reported in the quarterly Board Risk Report. Likelihood and Impact ratings use the 5-point scale defined in Section 3.

| Risk ID | Risk Title | Risk Description | Risk Category | Threat Source | Vulnerability | Asset(s) Affected | Likelihood (1–5) | Impact (1–5) | Inherent Risk Rating | Current Controls | Control Effectiveness | Residual Risk Rating | Treatment Option | Treatment Plan Ref | Treatment Owner | Target Closure Date | Status | Last Reviewed | Reviewed By |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| CSR-001 | [Risk Title] | [Brief description of the risk scenario] | [e.g., Ransomware / Data Breach / Insider Threat / Supply Chain] | [e.g., External Attacker / Insider / Nation-State / Third Party] | [e.g., Unpatched software, weak authentication, misconfiguration] | [Asset name(s) from NCII Asset Register] | [1–5] | [1–5] | [Critical / High / Medium / Low] | [List existing controls, e.g., EDR, MFA, network segmentation] | [Effective / Partially Effective / Ineffective] | [Critical / High / Medium / Low] | [Accept / Mitigate / Transfer / Avoid] | [Treatment Plan ID or N/A] | [Name / Team] | [DD MMM YYYY] | [Open / In Progress / Closed / Accepted] | [DD MMM YYYY] | [Name] |
| CSR-002 | [Risk Title] | [Brief description of the risk scenario] | | | | | | | | | | | | | | | | | |
| CSR-003 | [Risk Title] | [Brief description of the risk scenario] | | | | | | | | | | | | | | | | | |

*Add rows as required. Archive closed risks to Section 2.2.*

---

### 2.2 Closed / Archived Risk Entries

*Risks that have been fully treated, accepted, or are no longer applicable are archived here. Archived entries must not be deleted and must remain auditable.*

| Risk ID | Risk Title | Original Rating | Closure Date | Closure Rationale | Closed By |
|---|---|---|---|---|---|
| [CSR-XXX] | [Risk Title] | [Original Residual Rating] | [DD MMM YYYY] | [e.g., Vulnerability remediated via patch management — confirmed by penetration test dated DD MMM YYYY] | [Name / Role] |

---

## 3. Risk Scoring Methodology

*This section defines the rating scales used consistently across all risk entries. Do not modify the scales without formal approval; changes require version control and re-rating of all open risks.*

### 3.1 Likelihood Scale

| Rating | Score | Definition |
|---|---|---|
| Rare | 1 | The event is unlikely to occur; no known history within the sector |
| Unlikely | 2 | The event could occur but is not expected; limited precedent |
| Possible | 3 | The event might occur; some precedent exists within the sector |
| Likely | 4 | The event will probably occur; frequently observed in the sector |
| Almost Certain | 5 | The event is expected to occur; active threat intelligence indicates imminent risk |

### 3.2 Impact Scale

| Rating | Score | Operational Impact | Financial Impact | Reputational Impact | Regulatory Impact |
|---|---|---|---|---|---|
| Negligible | 1 | Minimal service disruption; resolved within hours | < [MYR X] | No public exposure | No regulatory breach |
| Minor | 2 | Partial service degradation; resolved within [X] days | [MYR X – MYR Y] | Limited adverse media | Minor non-compliance; no penalty |
| Moderate | 3 | Significant service disruption; customer impact | [MYR X – MYR Y] | Moderate adverse media | Formal regulatory notice |
| Major | 4 | Critical NCII service unavailable; widespread impact | [MYR X – MYR Y] | Significant reputational damage | Regulatory sanction / fine |
| Catastrophic | 5 | Complete NCII failure; national-level impact | > [MYR X] | Severe / sustained reputational damage | Prosecution under Act 854 |

### 3.3 Risk Rating Matrix

*Inherent and Residual Risk ratings are derived from the intersection of Likelihood and Impact scores.*

| | **Impact 1** | **Impact 2** | **Impact 3** | **Impact 4** | **Impact 5** |
|---|---|---|---|---|---|
| **Likelihood 5** | Medium | High | High | Critical | Critical |
| **Likelihood 4** | Low | Medium | High | High | Critical |
| **Likelihood 3** | Low | Medium | Medium | High | High |
| **Likelihood 2** | Low | Low | Medium | Medium | High |
| **Likelihood 1** | Low | Low | Low | Medium | Medium |

### 3.4 Risk Appetite and Escalation Thresholds

*Define the organization's tolerance levels. These thresholds trigger mandatory escalation and reporting actions.*

| Residual Risk Rating | Action Required | Escalation Recipient | Reporting Requirement |
|---|---|---|---|
| **Critical** | Immediate treatment; emergency escalation | CISO, Board Risk Committee | Mandatory NACSA notification per Act 854 s21; Board report |
| **High** | Treatment plan mandatory; tracked monthly | CISO | Quarterly Board Risk Report |
| **Medium** | Treatment plan recommended; tracked quarterly | Risk Manager | Internal Risk Report |
| **Low** | Monitor; annual review sufficient | Risk Owner | Internal Risk Log |

---

## 4. Risk Treatment Plans

*For each risk assigned a treatment option of **Mitigate**, **Transfer**, or **Avoid**, a corresponding treatment plan entry must be maintained in this section. Treatment plans for **Accepted** risks require formal sign-off from the Risk Owner and CISO.*

### 4.1 Treatment Plan Register

| Treatment Plan ID | Risk ID(s) | Treatment Option | Treatment Description | Milestones | Resources Required | Budget Allocated | Treatment Owner | Start Date | Target Completion Date | Actual Completion Date | Status | Evidence of Completion |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| TP-001 | CSR-[XXX] | [Mitigate / Transfer / Avoid] | [Detailed description of the planned treatment actions] | [List key milestones, e.g., M1: Vendor selection by DD MMM YYYY] | [People, tools, budget] | [MYR X] | [Name / Team] | [DD MMM YYYY] | [DD MMM YYYY] | [DD MMM YYYY or N/A] | [Planned / In Progress / Completed / Overdue] | [e.g., Pentest report ref, change ticket ref] |

### 4.2 Risk Acceptance Register

*Risks formally accepted by the organization must be documented here with explicit sign-off. Acceptance does not remove the risk from the active register.*

| Risk ID | Risk Title | Residual Risk Rating | Justification for Acceptance | Acceptance Conditions | Risk Acceptance Owner | CISO Sign-Off | Board Approval Required | Acceptance Date | Acceptance Expiry Date |
|---|---|---|---|---|---|---|---|---|---|
| CSR-[XXX] | [Risk Title] | [Rating] | [Business justification for accepting this risk] | [Any conditions under which acceptance is valid, e.g., compensating controls in place] | [Name / Role] | [Name] | [Yes / No] | [DD MMM YYYY] | [DD MMM YYYY] |

---

## 5. Risk Monitoring and Key Risk Indicators

*Key Risk Indicators (KRIs) provide early warning signals that a risk's likelihood or impact is changing. Each high or critical risk should have at least one associated KRI tracked on a defined frequency.*

### 5.1 Key Risk Indicator Register

| KRI ID | Linked Risk ID | KRI Description | Metric / Data Source | Measurement Frequency | Green Threshold | Amber Threshold | Red Threshold | Current Value | Current Status | Last Updated | Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|
| KRI-001 | CSR-[XXX] | [e.g., Number of unpatched critical vulnerabilities on NCII systems] | [e.g., Vulnerability scanner — Tenable / Qualys] | [Weekly] | [e.g., 0] | [e.g., 1–5] | [e.g., > 5] | [Current value] | [Green / Amber / Red] | [DD MMM YYYY] | [Name] |
| KRI-002 | CSR-[XXX] | [e.g., Mean time to detect (MTTD) security incidents] | [e.g., SIEM / SOC metrics] | [Monthly] | [e.g., < 1 hour] | [e.g., 1–4 hours] | [e.g., > 4 hours] | | | | |
| KRI-003 | CSR-[XXX] | [e.g., Number of privileged accounts with MFA disabled] | [e.g., IAM system report] | [Weekly] | [0] | [1–2] | [> 2] | | | | |

---

## 6. Roles and Responsibilities

*This section defines accountability for risk register maintenance and governance. All named individuals must be formally appointed in writing.*

### 6.1 RACI Matrix

| Activity | Board / Risk Committee | CISO | Risk Manager | System / Asset Owners | IT Security Team | Internal Audit | NACSA |
|---|---|---|---|---|---|---|---|
| Approve risk appetite and tolerances | A | C | R | I | I | C | I |
| Identify and log new risks | I | A | R | R | C | I | — |
| Assess likelihood and impact | I | A | R | C | R | I | — |
| Assign and monitor treatment plans | I | A | R | R | R | I | — |
| Review and update risk register (continuous) | I | A | R | C | R | I | — |
| Conduct quarterly formal risk review | A | A | R | C | C | C | — |
| Escalate Critical / High residual risks | I | R | R | I | I | I | I |
| Report risks to Board | A | R | R | I | I | C | — |
| Report material risks to NACSA (Act 854 s21) | I | A | R | I | I | I | R |
| Archive and maintain historical records | I | A | R | I | I | C | — |
| Audit risk register completeness | I | I | C | I | I | R | C |

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 6.2 Role Definitions

| Role | Responsibilities |
|---|---|
| **Board / Risk Committee** | Sets risk appetite; approves material risk acceptances; receives quarterly risk reports |
| **CISO** | Accountable for overall cyber risk posture; approves Critical/High risk treatments; signs off on risk acceptances; NACSA liaison |
| **Risk Manager** | Day-to-day maintenance of the risk register; coordinates risk assessments; prepares risk reports; facilitates quarterly reviews |
| **System / Asset Owners** | Identify risks within their systems; implement assigned treatment plans; attest to control effectiveness |
| **IT Security Team** | Provide technical input on threat intelligence, vulnerability data, and control assessments; execute technical treatment actions |
| **Internal Audit** | Independent assurance on risk register completeness and treatment plan progress; reports to Audit Committee |

---

## 7. Governance and Review Process

### 7.1 Continuous Monitoring Activities

*The following activities maintain the register between formal quarterly reviews.*

| Activity | Trigger / Frequency | Responsible | Output |
|---|---|---|---|
| New risk identification and logging | On identification (within [X] business days) | Risk Manager / System Owners | New register entry |
| Control effectiveness review | Following security incidents, audits, or significant changes | IT Security Team | Updated control effectiveness field |
| KRI threshold breach review | When KRI reaches Amber or Red | Risk Manager | Escalation notification; treatment plan update |
| Threat intelligence integration | Monthly (or on receipt of NACSA advisories) | IT Security Team | Risk rating review for affected entries |
| Post-incident risk review | Within [X] days of incident closure | CISO / Risk Manager | New or updated risk entry |
| Material change assessment | Prior to significant system changes | System Owner + IT Security | Risk assessment for change |

### 7.2 Quarterly Formal Review

*The quarterly formal review is a mandatory governance event. Minutes must be maintained and retained for a minimum of [X] years in accordance with [Organization Name]'s record retention policy.*

**Agenda items for quarterly review:**

1. Review of all Critical and High residual risks — status, treatment progress, and re-rating
2. Review of overdue treatment plans
3. Review of new risks logged during the quarter
4. KRI trend analysis and threshold review
5. Review of closed / archived risks
6. Risk appetite alignment check
7. Emerging threats and regulatory updates (including NACSA advisories)
8. Actions and escalations

| Review Field | Details |
|---|---|
| **Review Date** | [DD MMM YYYY] |
| **Chaired By** | [CISO / Risk Manager] |
| **Attendees** | [List roles / names] |
| **Next Review Date** | [DD MMM YYYY] |
| **Meeting Reference** | [Minutes Reference ID] |

---

## 8. Regulatory Compliance Mapping

*This section demonstrates how the Risk Register satisfies specific regulatory obligations. Update when new regulatory requirements come into effect.*

| Requirement | Regulatory Reference | How This Register Addresses It |
|---|---|---|
| Identify and manage cyber security risks to NCII | Cyber Security Act 2024 (Act 854), s21 | Active risk register maintained continuously; quarterly formal review; treatment plans tracked to closure |
| Notify NACSA of material cyber security risks | Act 854, s21 read with relevant directions | Escalation thresholds defined; CISO accountable for NACSA reporting; Critical risk entries flagged for notification |
| Risk governance and accountability | Act 854, s21; NACSA Codes of Practice | RACI matrix defines clear accountability; CISO and Board oversight documented |
| Record retention | [Applicable record retention regulation / policy] | Archived risks retained; version history maintained; quarterly review minutes retained |
| [Additional requirement] | [Reference] | [How addressed] |

---

## 9. Review and Approval

### 9.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD MMM YYYY] | [Author Name, Role] | Initial version |
| | | | |

### 9.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Risk Manager | [Name] | | [DD MMM YYYY] |
| CISO | [Name] | | [DD MMM YYYY] |
| Chief Risk Officer | [Name] | | [DD MMM YYYY] |
| Head of Internal Audit (for noting) | [Name] | | [DD MMM YYYY] |

---

## 10. References

| Reference | Document / Standard |
|---|---|
| **Act 854, s21** | Cyber Security Act 2024 (Act 854) — Section 21: Duty of NCII entity to conduct cyber security risk assessment and take risk treatment measures |
| **NACSA NCII Sector Codes of Practice** | NACSA-issued sector-specific security codes applicable to [Organization Name]'s NCII sector |
| **NACSA Incident Reporting Guidelines** | National Cyber Security Agency — Incident Reporting Requirements |
| **ISO/IEC 27005:2022** | Information security, cybersecurity and privacy protection — Guidance on managing information security risks |
| **ISO 31000:2018** | Risk management — Guidelines |
| **NIST SP 800-30 Rev. 1** | Guide for Conducting Risk Assessments |
| **[Internal Reference]** | [Organization Name] Information Security Policy — [Document ID] |
| **[Internal Reference]** | [Organization Name] NCII Asset Register — [Document ID] |
| **[Internal Reference]** | [Organization Name] Incident Response Plan — [Document ID] |
| **[Internal Reference]** | [Organization Name] Risk Management Framework — [Document ID] |

---

## Appendices

### Appendix A — Risk Category Taxonomy

*Standardized risk categories to be used in the Risk Category field of the register. Using consistent taxonomy enables trend analysis and reporting.*

| Category Code | Category Name | Description | Examples |
|---|---|---|---|
| CAT-01 | Ransomware / Malware | Malicious software targeting NCII systems | Ransomware, wiper malware, Trojan deployment |
| CAT-02 | Unauthorized Access | Exploitation of access controls or credentials | Credential stuffing, privilege escalation, brute force |
| CAT-03 | Data Breach / Exfiltration | Unauthorized disclosure or theft of sensitive data | Data exfiltration, accidental exposure, insider data theft |
| CAT-04 | Supply Chain / Third Party | Risks introduced via vendors, suppliers, or partners | Compromised software update, third-party access misuse |
| CAT-05 | Denial of Service | Disruption to availability of NCII systems | DDoS, resource exhaustion attacks |
| CAT-06 | Insider Threat | Malicious or negligent actions by employees or contractors | Sabotage, policy violations, accidental misconfiguration |
| CAT-07 | Advanced Persistent Threat (APT) | Sophisticated, targeted, long-term intrusion campaigns | Nation-state espionage, critical infrastructure targeting |
| CAT-08 | Vulnerability / Patch Management | Risks from unpatched or misconfigured systems | Zero-day exploitation, end-of-life software |
| CAT-09 | Physical / Environmental | Physical threats with cyber impact | Unauthorized physical access to server rooms, power failure |
| CAT-10 | Compliance / Regulatory | Risks of failing to meet regulatory obligations | Non-compliance with Act 854, data protection failures |
| CAT-11 | [Custom Category] | [Description] | [Examples] |

---

### Appendix B — Threat Source Reference List

*Reference list of common threat sources for use in the Threat Source field of the register.*

- **External — Cybercriminal Groups:** Financially motivated threat actors; ransomware operators; fraud networks
- **External — Nation-State / APT:** State-sponsored actors; espionage and sabotage motivated
- **External — Hacktivists:** Ideologically motivated actors; defacement and disruption
- **External — Opportunistic Attacker:** Automated scanning and exploitation of publicly known vulnerabilities
- **Internal — Malicious Insider:** Current or former employees / contractors acting with malicious intent
- **Internal — Negligent Insider:** Employees causing risk through careless or non-compliant behaviour
- **Third Party / Supply Chain:** Vendors, managed service providers, or software suppliers
- **Natural / Environmental:** Power disruption, hardware failure, natural disaster with cyber impact
- **[Custom Threat Source]:** [Description]

---

### Appendix C — Quarterly Review Checklist

*To be completed by the Risk Manager prior to each quarterly formal review meeting.*

| # | Pre-Review Task | Completed | Date | Notes |
|---|---|---|---|---|
| 1 | All open risks reviewed and ratings confirmed current | ☐ | | |
| 2 | All treatment plans updated with latest progress | ☐ | | |
| 3 | KRI data for the quarter compiled and analysed | ☐ | | |
| 4 | New risks identified in the quarter reviewed and validated | ☐ | | |
| 5 | Overdue treatment plans identified and escalation prepared | ☐ | | |
| 6 | NACSA advisories and threat intelligence reviewed for register impact | ☐ | | |
| 7 | Risk acceptance register reviewed for expiring acceptances | ☐ | | |
| 8 | Regulatory compliance mapping confirmed current | ☐ | | |
| 9 | Draft quarterly risk report prepared for CISO review | ☐ | | |
| 10 | Meeting agenda and supporting materials distributed to attendees | ☐ | | |

---

### Appendix D — NACSA Reporting Threshold and Notification Log

*Maintain a log of all instances where risks or related incidents were formally notified to NACSA under Act 854, s21 or associated directions.*

| Notification ID | Date Notified | Risk ID(s) / Incident Ref | Notification Method | NACSA Reference Received | Summary of Notification | Notified By | Follow-Up Required | Follow-Up Status |
|---|---|---|---|---|---|---|---|---|
| NACSA-NOTIF-001 | [DD MMM YYYY] | [CSR-XXX / INC-XXX] | [Email / Portal / Phone] | [NACSA Ref] | [Brief summary] | [CISO Name] | [Yes / No] | [Open / Closed] |

---

*End of Document*

| Field | Value |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential — Internal Use Only |
| **Document Owner** | Risk Manager / CISO, [Organization Name] |