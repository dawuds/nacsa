# Penetration Testing Procedure

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

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions and Acronyms](#2-definitions-and-acronyms)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Scope Definition and Rules of Engagement](#4-scope-definition-and-rules-of-engagement)
5. [Licensed Service Provider Engagement](#5-licensed-service-provider-engagement)
6. [Testing Methodology](#6-testing-methodology)
7. [Finding Classification](#7-finding-classification)
8. [Remediation Verification](#8-remediation-verification)
9. [Report Submission and Retention](#9-report-submission-and-retention)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Penetration Testing Procedure establishes the requirements, methodology, and governance framework for conducting authorized penetration tests against [Organization Name]'s National Critical Information Infrastructure (NCII) systems and assets. The procedure ensures that penetration testing activities are performed in a controlled, legally compliant, and repeatable manner, in accordance with the **Cyber Security Act 2024 (Act 854)**, specifically Sections 21 and 28, and any directives issued by the **National Cyber Security Agency (NACSA)**.

The objectives of this procedure are to:

- Define the structured approach for planning, executing, and concluding penetration tests;
- Mandate the engagement of NACSA-licensed cybersecurity service providers where required under s28 of Act 854;
- Ensure identified vulnerabilities are classified, tracked, and remediated within defined timelines;
- Support [Organization Name]'s ongoing obligation to protect NCII systems against cyber threats;
- Maintain an auditable record of all penetration testing activities for regulatory and internal assurance purposes.

### 1.2 Scope

*This section identifies the systems, environments, and organizational units covered by this procedure. Define all in-scope NCII assets explicitly to avoid ambiguity during test execution.*

This procedure applies to:

- All information systems, networks, applications, and infrastructure designated as NCII under Act 854 and administered by [Organization Name];
- All internal and third-party personnel involved in the planning, authorization, execution, or review of penetration tests;
- All environments where NCII assets reside, including but not limited to production, staging, and disaster recovery environments;
- Cloud-hosted, on-premises, and hybrid deployments that process, store, or transmit data classified as Critical or Sensitive.

**Out of Scope:**

The following are explicitly excluded from this procedure unless otherwise authorized in writing by the CISO:

- Systems owned or operated by third parties without a formal data-sharing or hosting agreement;
- Operational Technology (OT) and Industrial Control Systems (ICS), which are governed under [Reference OT Security Procedure];
- Non-production development environments with no connectivity to production NCII systems.

### 1.3 Applicability

This procedure is mandatory for all business units, subsidiaries, and contracted service providers of [Organization Name] that operate, support, or have privileged access to NCII-designated systems.

---

## 2. Definitions and Acronyms

*Define all technical and regulatory terms used throughout this document to ensure consistent interpretation by all stakeholders, including auditors.*

| Term / Acronym | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024 — the primary Malaysian legislation governing the protection of NCII systems |
| **CISO** | Chief Information Security Officer |
| **CVE** | Common Vulnerabilities and Exposures — a publicly disclosed list of cybersecurity vulnerabilities |
| **CVSS** | Common Vulnerability Scoring System — a framework for rating the severity of security vulnerabilities |
| **NACSA** | National Cyber Security Agency — the competent authority for cybersecurity in Malaysia |
| **NCII** | National Critical Information Infrastructure — information infrastructure designated under Act 854 whose disruption would have significant impact on national security, economy, or public safety |
| **NDA** | Non-Disclosure Agreement |
| **OWASP** | Open Web Application Security Project |
| **PTES** | Penetration Testing Execution Standard |
| **ROE** | Rules of Engagement — the formal agreement defining the scope, constraints, and conduct of a penetration test |
| **RoT** | Remediation of Testing — the process of verifying that identified vulnerabilities have been remediated |
| **VAPT** | Vulnerability Assessment and Penetration Testing |
| **Licensed Provider** | A cybersecurity service provider licensed by NACSA under s28 of Act 854 to conduct cybersecurity services on NCII systems |

---

## 3. Regulatory and Policy Context

### 3.1 Regulatory Basis

*Summarize the specific legal obligations that mandate or shape this procedure. Reference the exact sections of Act 854 and any subsidiary regulations or NACSA directives applicable to penetration testing.*

This procedure is established to fulfil obligations under the following instruments:

| Instrument | Section / Clause | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 21 | NCII entity duty to comply with cybersecurity measures, including periodic security assessments |
| Cyber Security Act 2024 (Act 854) | Section 28 | Requirement to engage only licensed cybersecurity service providers when conducting cybersecurity services on NCII systems |
| [NACSA Directive / Code of Practice Reference] | [Clause Reference] | [Summary of specific obligation] |
| [Internal Information Security Policy] | [Section Reference] | Requirement for annual penetration testing of critical systems |

### 3.2 Related Internal Policies and Procedures

- [Information Security Policy] — [Document ID]
- [Vulnerability Management Procedure] — [Document ID]
- [Incident Response Procedure] — [Document ID]
- [Third-Party and Vendor Risk Management Policy] — [Document ID]
- [Change Management Procedure] — [Document ID]

---

## 4. Scope Definition and Rules of Engagement

*This section defines how penetration test scope is formally determined and documented prior to each engagement. Precise scope boundaries protect the organization legally and ensure tests deliver meaningful results.*

### 4.1 Scope Determination Process

The scope of each penetration test engagement shall be formally determined by the CISO in consultation with relevant system owners prior to the commencement of any testing activity. Scope determination shall consider:

- Regulatory requirements (e.g., NACSA directives specifying systems or frequencies);
- Risk-based prioritization of NCII assets based on the current risk register;
- Previous penetration test findings and outstanding remediation items;
- Significant changes to systems, architecture, or connectivity since the last test;
- Business impact of test disruption to production services.

### 4.2 In-Scope Systems and Assets

*For each engagement, complete the following table to formally document which systems are included. This table forms part of the Rules of Engagement document.*

| Asset ID | Asset Name / Description | IP Range / URL | Environment | System Owner | NCII Designation |
|---|---|---|---|---|---|
| [ASSET-001] | [e.g., Core Banking Application] | [e.g., 10.0.1.0/24] | [Production] | [Name / Team] | [Yes / No] |
| [ASSET-002] | [e.g., Internet Banking Portal] | [e.g., portal.organization.com.my] | [Production] | [Name / Team] | [Yes / No] |
| [ASSET-003] | [e.g., Payment Gateway Integration] | [e.g., 10.0.2.10 – 10.0.2.50] | [Staging] | [Name / Team] | [Yes / No] |

### 4.3 Rules of Engagement (ROE)

A signed Rules of Engagement document is **mandatory** before any penetration testing activity commences. The ROE shall be executed between [Organization Name] (represented by the CISO or authorized delegate) and the Licensed Provider, and shall include at minimum:

**4.3.1 Authorization**

- Written authorization from the CISO and relevant system owners;
- Confirmation that Board or Senior Management notification has been provided where testing involves production NCII systems;
- Legal authorization confirming the licensed provider has permission to conduct the specified testing activities.

**4.3.2 Testing Windows**

| Parameter | Detail |
|---|---|
| **Testing Start Date** | [DD-MM-YYYY] |
| **Testing End Date** | [DD-MM-YYYY] |
| **Permitted Testing Hours** | [e.g., 22:00 – 06:00 MYT (off-peak) / 09:00 – 17:00 MYT (business hours)] |
| **Blackout Periods** | [e.g., Month-end processing, public holidays, regulatory reporting windows] |
| **Emergency Stop Contact** | [Name, mobile number, and escalation path to halt testing immediately] |

**4.3.3 Testing Constraints**

The following constraints apply to all engagements unless explicitly waived in writing by the CISO:

- Denial-of-service (DoS) and distributed denial-of-service (DDoS) testing techniques are **prohibited** on production systems;
- Data exfiltration simulation beyond agreed proof-of-concept artefacts is **prohibited**;
- Social engineering targeting staff is **prohibited** unless a specific phishing simulation scope is separately authorized;
- Lateral movement beyond agreed network segments requires prior written approval;
- All test credentials and access tokens are to be deactivated immediately upon test completion;
- The licensed provider shall not share, retain, or copy any organizational data beyond what is minimally necessary to produce the final report.

**4.3.4 Emergency Procedures**

In the event testing causes unintended service disruption:

1. The licensed provider shall immediately notify the [Organization Name] designated point of contact;
2. Testing shall be suspended pending investigation;
3. [Organization Name] Incident Response Procedure ([Document ID]) shall be invoked if disruption meets incident thresholds;
4. All evidence of unintended impact shall be preserved and documented.

---

## 5. Licensed Service Provider Engagement

*This section governs the selection and engagement of penetration testing service providers in compliance with s28 of Act 854, which requires organizations conducting cybersecurity services on NCII systems to use only NACSA-licensed providers.*

### 5.1 Regulatory Requirement

Pursuant to **Section 28 of the Cyber Security Act 2024 (Act 854)**, [Organization Name] shall only engage cybersecurity service providers who hold a valid licence issued by NACSA to conduct cybersecurity services on NCII systems. Engaging an unlicensed provider for NCII penetration testing constitutes a breach of Act 854 and may result in regulatory action.

### 5.2 Provider Selection Criteria

Prior to engaging a penetration testing service provider, the CISO or designated procurement owner shall verify the following:

| Criteria | Requirement | Verification Method |
|---|---|---|
| NACSA Licence | Valid and current licence for cybersecurity services on NCII | Check NACSA public register; obtain certified copy |
| Licence Category | Applicable to penetration testing / VAPT services | Confirm licence category covers intended service scope |
| Professional Certifications | Lead testers hold recognized certifications (e.g., OSCP, CREST, CEH, GPEN) | Review CVs and certification evidence |
| NCII Sector Experience | Demonstrated experience in the relevant NCII sector | Review past engagement references |
| Insurance Coverage | Professional indemnity insurance at minimum [RM X million] coverage | Request certificate of insurance |
| Data Protection Compliance | Provider is compliant with PDPA 2010 and organizational data handling requirements | Review provider's data protection policy and sign DPA |

### 5.3 Procurement and Contracting

All licensed provider engagements shall be governed by a formal contract or service agreement that includes:

- Reference to Act 854 s28 compliance;
- Scope of work aligned to the approved ROE;
- Confidentiality and Non-Disclosure Agreement (NDA) covering all findings, credentials, and organizational data;
- Data Processing Agreement (DPA) under the Personal Data Protection Act 2010 (PDPA) if personal data may be encountered during testing;
- Deliverables specification (draft report, final report, executive summary, technical evidence package);
- Timelines for report delivery (refer to Section 9);
- Right to audit the provider's engagement records;
- Incident notification obligations if the provider discovers an active compromise or breach during testing;
- Restrictions on sub-contracting without prior written consent.

### 5.4 NACSA Licence Verification Register

*Maintain the following register for each engagement. Retain evidence of licence verification as an appendix to the engagement file.*

| Engagement Ref | Provider Name | NACSA Licence No. | Licence Expiry | Verified By | Verification Date |
|---|---|---|---|---|---|
| [ENG-2025-001] | [Provider Name] | [NACSA-XXXX-XXXX] | [DD-MM-YYYY] | [Name, Role] | [DD-MM-YYYY] |

---

## 6. Testing Methodology

*This section defines the approved methodology and testing phases that must be followed by licensed providers. Standardizing the methodology ensures consistent, comparable results across engagements.*

### 6.1 Approved Methodologies

All penetration tests conducted under this procedure shall adhere to at least one of the following recognized methodologies, as appropriate to the scope:

| Methodology | Applicability |
|---|---|
| **PTES** (Penetration Testing Execution Standard) | General infrastructure and network testing |
| **OWASP Testing Guide** (latest version) | Web application and API penetration testing |
| **OWASP Mobile Testing Guide** | Mobile application testing |
| **NIST SP 800-115** | Technical Guide to Information Security Testing and Assessment |
| **CREST Standards** | Where CREST-accredited providers are engaged |

### 6.2 Testing Phases

All engagements shall encompass the following phases. The licensed provider must document activities completed in each phase within the final test report.

**Phase 1 — Pre-Engagement and Planning**

- Finalize and execute the Rules of Engagement document;
- Confirm in-scope systems and authorized testing windows;
- Establish secure communication channels between [Organization Name] and the provider;
- Conduct pre-test briefing with relevant system owners and IT security teams;
- Confirm NACSA licence validity (Section 5.4).

**Phase 2 — Reconnaissance and Intelligence Gathering**

- Passive reconnaissance: open-source intelligence (OSINT), DNS enumeration, WHOIS, certificate transparency logs;
- Active reconnaissance: network scanning, service enumeration, banner grabbing (within agreed scope only);
- Document all assets discovered during reconnaissance that were not previously identified in scope for CISO review.

**Phase 3 — Vulnerability Identification**

- Automated vulnerability scanning using licensed, industry-standard tools (e.g., [Nessus / Qualys / Rapid7 InsightVM]);
- Manual vulnerability assessment to identify logic flaws, misconfigurations, and weaknesses not detected by automated tools;
- Assessment of authentication mechanisms, access controls, and cryptographic implementations;
- Review of network segmentation and firewall rule effectiveness.

**Phase 4 — Exploitation and Privilege Escalation**

- Controlled exploitation of identified vulnerabilities to confirm exploitability and determine real-world impact;
- Privilege escalation attempts within agreed network segments to assess depth of potential compromise;
- Lateral movement assessment within authorized boundaries;
- All exploitation activity to be conducted with minimum necessary impact; no data destruction permitted.

**Phase 5 — Post-Exploitation and Evidence Collection**

- Demonstration of business impact (e.g., access to sensitive data, ability to disrupt NCII services);
- Collection of evidence (screenshots, logs, proof-of-concept code) in accordance with agreed evidence handling protocols;
- Documentation of complete attack chains for each confirmed finding.

**Phase 6 — Reporting and Debriefing**

- Preparation of draft report (refer to Section 9.1);
- Technical debrief session with [Organization Name] security team;
- Delivery of final report following debrief (refer to Section 9.2);
- Handover of evidence package and test artefacts.

### 6.3 Testing Types

The following test types may be specified within the ROE based on the objectives of the engagement:

| Test Type | Description | Typical Use Case |
|---|---|---|
| **Black Box** | Tester has no prior knowledge of target systems | Simulating external threat actor |
| **Grey Box** | Tester has partial knowledge (e.g., user credentials, network diagrams) | Simulating insider threat or authenticated attacker |
| **White Box** | Tester has full knowledge including architecture, source code, and credentials | In-depth application security review; compliance-focused testing |
| **Red Team Exercise** | Adversarial simulation with full threat actor emulation | Mature security posture assessment; NCII resilience evaluation |

---

## 7. Finding Classification

*This section establishes a consistent classification framework for vulnerabilities discovered during penetration testing. Standardized classification enables risk-prioritized remediation and meaningful trend analysis.*

### 7.1 Severity Classification Framework

All findings identified during penetration testing shall be classified using the **Common Vulnerability Scoring System (CVSS) v3.1** as the primary scoring mechanism, mapped to the following organizational severity levels:

| Severity Level | CVSS v3.1 Score Range | Definition | Remediation SLA |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | Vulnerability that can be exploited remotely without authentication to fully compromise NCII systems, cause significant data breach, or disrupt critical services | 72 hours (emergency patch) |
| **High** | 7.0 – 8.9 | Significant vulnerability that could allow unauthorized access to sensitive systems or data, or enable privilege escalation | 30 calendar days |
| **Medium** | 4.0 – 6.9 | Vulnerability that could be exploited under specific conditions to partially compromise systems or disclose limited sensitive information | 90 calendar days |
| **Low** | 0.1 – 3.9 | Minor vulnerability with limited potential for exploitation or impact | 180 calendar days |
| **Informational** | N/A | Observations, best practice deviations, or weaknesses without direct exploitability | Next planned release cycle |

### 7.2 Finding Documentation Requirements

Each finding documented in the penetration test report shall include:

| Field | Description |
|---|---|
| **Finding ID** | Unique reference number (e.g., [ENG-2025-001]-F001) |
| **Title** | Concise description of the vulnerability |
| **Severity** | Critical / High / Medium / Low / Informational |
| **CVSS Score** | CVSS v3.1 Base Score and Vector String |
| **CVE Reference** | CVE identifier where applicable |
| **Affected Asset(s)** | Systems, applications, or components affected |
| **Description** | Detailed technical description of the vulnerability |
| **Evidence** | Screenshots, logs, or proof-of-concept demonstrating exploitability |
| **Attack Chain** | Step-by-step reproduction steps |
| **Business Impact** | Description of potential impact to NCII operations or data |
| **Recommended Remediation** | Specific, actionable remediation guidance |
| **References** | CVE, vendor advisories, or relevant security standards |

### 7.3 Finding Register

*The following register shall be maintained by [Organization Name]'s security team and updated throughout the remediation cycle. This register forms part of the official engagement record.*

| Finding ID | Title | Severity | CVSS Score | Affected Asset | Date Identified | Date Assigned | Remediation Owner | Target Date | Status |
|---|---|---|---|---|---|---|---|---|---|
| [ENG-2025-001]-F001 | [Finding Title] | [Critical] | [9.8] | [Asset Name] | [DD-MM-YYYY] | [DD-MM-YYYY] | [Owner Name] | [DD-MM-YYYY] | [Open / In Progress / Remediated / Accepted] |

---

## 8. Remediation Verification

*This section defines the process for confirming that identified vulnerabilities have been remediated to an acceptable standard, including the requirements for re-testing and formal closure.*

### 8.1 Remediation Planning

Upon receipt of the final penetration test report, the CISO shall:

1. Review all findings and confirm severity classifications are appropriate for the organizational risk context;
2. Assign a remediation owner for each finding (typically the relevant system owner or IT operations team lead);
3. Confirm remediation target dates in accordance with the SLAs defined in Section 7.1;
4. Ensure all Critical and High findings are escalated to Senior Management within **5 business days** of report receipt;
5. Update the Finding Register (Section 7.3) with assigned owners and target dates.

### 8.2 Remediation Approach

Remediation owners shall implement fixes using one of the following approaches, documented in the Finding Register:

| Approach | Description | Approval Required |
|---|---|---|
| **Patch / Fix** | Technical remediation of the vulnerability (patch, configuration change, code fix) | System Owner + Change Advisory Board (CAB) |
| **Compensating Control** | Implementation of an alternative control that reduces risk to acceptable level where direct fix is not feasible | CISO approval; documented risk justification required |
| **Risk Acceptance** | Formal decision to accept the residual risk without remediation | CISO + [Risk Committee / Board-level approval depending on severity] |

All compensating controls and risk acceptances for **Critical or High** findings must be documented in the organizational risk register and reviewed at the next annual penetration test cycle.

### 8.3 Re-Testing Requirements

| Finding Severity | Re-Testing Requirement |
|---|---|
| **Critical** | Mandatory re-test within **14 calendar days** of reported remediation by the original licensed provider or equivalent qualified internal team |
| **High** | Mandatory re-test at next scheduled penetration test or within **90 days**, whichever is sooner |
| **Medium** | Re-test recommended at next scheduled penetration test |
| **Low / Informational** | Re-test at CISO's discretion; confirmation via evidence review acceptable |

### 8.4 Re-Testing Process

1. Remediation owner notifies the CISO that remediation is complete, providing evidence (patch notes, configuration screenshots, code review results);
2. CISO reviews evidence and, where re-testing is required, coordinates with the licensed provider or internal security team;
3. Re-testing is conducted against the specific finding(s) within the scope of the original engagement;
4. Licensed provider issues a re-test attestation letter or supplementary report confirming findings as:
   - **Remediated** — vulnerability is no longer present or exploitable;
   - **Partially Remediated** — vulnerability risk is reduced but not fully resolved;
   - **Not Remediated** — vulnerability persists; remediation plan must be revised.
5. Finding Register is updated with re-test outcome and evidence reference.

### 8.5 Escalation for Overdue Remediations

| Scenario | Escalation Action |
|---|---|
| Critical finding not remediated within 72 hours | Immediate escalation to CISO and CEO; invoke risk escalation process |
| High finding SLA breach (>30 days) | CISO escalates to Senior Management; revised remediation plan required within 5 days |
| Medium finding SLA breach (>90 days) | CISO issues formal notice to system owner; escalation to risk committee if unresolved after 30 additional days |

---

## 9. Report Submission and Retention

*This section governs the format, delivery, review, and retention of penetration test reports as regulatory and audit evidence. Proper report management is essential for demonstrating NCII compliance under Act 854.*

### 9.1 Draft Report Requirements

The licensed provider shall deliver a draft penetration test report within **[X] business days** of completing testing activities. The draft report shall include:

- Executive Summary suitable for Senior Management review;
- Full technical findings with all fields as specified in Section 7.2;
- Methodology description referencing the standards applied (Section 6.1);
- Testing timeline and activities summary;
- Scope confirmation (in-scope and out-of-scope systems);
- Risk posture summary and trending (where historical data is available).

[Organization Name] shall review the draft report within **[X] business days** and provide comments limited to factual corrections, scope clarifications, and finding reclassification requests supported by technical justification.

### 9.2 Final Report Delivery

The licensed provider shall deliver the final report within **[X] business days** of receiving [Organization Name]'s comments on the draft. The final report package shall include:

| Deliverable | Format | Recipient |
|---|---|---|
| Executive Summary | PDF (encrypted) | CISO, Senior Management, Board Risk Committee |
| Full Technical Report | PDF (encrypted) | CISO, Security Team |
| Finding Evidence Package | ZIP (encrypted, password-protected) | CISO, Security Team |
| Re-test Attestation (where applicable) | PDF (encrypted) | CISO |

All reports shall be transmitted via an encrypted channel (e.g., [Secure file transfer portal / PGP-encrypted email]).

### 9.3 Regulatory Submission

*Confirm whether NACSA or other regulatory bodies require submission of penetration test reports or summaries. Document the submission process and timeline here.*

| Reporting Obligation | Recipient | Submission Timeline | Responsible Party |
|---|---|---|---|
| [NACSA Cybersecurity Assessment Notification, if applicable] | NACSA | [Within X days of test completion / Upon request] | CISO |
| [Internal Board Risk Committee Reporting] | [Board Risk Committee] | [Next scheduled meeting following report receipt] | CISO |
| [BNM RMIT / RMiT Reporting, if applicable] | [Bank Negara Malaysia] | [Per RMiT requirements] | CISO / CRO |

### 9.4 Report Classification and Handling

All penetration test reports and associated evidence are classified as **Confidential** and shall be handled in accordance with [Organization Name]'s Information Classification Policy ([Document ID]). Specifically:

- Reports shall not be transmitted via unencrypted email or unsecured file sharing platforms;
- Access to reports shall be restricted on a need-to-know basis;
- Physical copies (if any) shall be stored in locked cabinets and destroyed via cross-cut shredding when no longer required;
- Digital copies shall be stored in the designated secure repository: **[Secure Repository Location / System Name]**.

### 9.5 Retention Schedule

| Record Type | Retention Period | Storage Location | Disposal Method |
|---|---|---|---|
| Final Penetration Test Report | [7 years] | [Secure Document Repository] | Secure deletion / shredding |
| Draft Report and Review Correspondence | [3 years] | [Secure Document Repository] | Secure deletion |
| Evidence Package | [7 years] | [Secure Document Repository] | Secure deletion |
| Rules of Engagement Document | [7 years] | [Secure Document Repository] | Secure deletion |
| Finding Register | [7 years] | [GRC Platform / SharePoint] | Secure deletion |
| NACSA Licence Verification Register | [7 years] | [Secure Document Repository] | Secure deletion |
| Re-test Attestation Letters | [7 years] | [Secure Document Repository] | Secure deletion |

---

## 10. Roles and Responsibilities

*The following RACI matrix defines accountability for all key activities within this procedure. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | IT Security Team | System Owner | IT Operations | Legal / Compliance | Senior Management | Licensed Provider |
|---|---|---|---|---|---|---|---|
| Approve penetration test scope | A | R | C | C | C | I | — |
| Execute Rules of Engagement | A | R | C | — | C | I | R |
| Verify NACSA licence | A | R | — | — | C | — | I |
| Manage procurement / contracting | C | — | — | — | R | A | — |
| Provide system access for testing | A | R | C | R | — | — | I |
| Monitor test execution | A | R | C | C | — | I | — |
| Review draft report | A | R | C | I | C | I | — |
| Assign remediation owners | A | R | R | C | — | I | — |
| Implement remediation | C | C | A | R | — | — | — |
| Coordinate re-testing | A | R | C | I | — | I | R |
| Maintain Finding Register | A | R | C | — | — | I | — |
| Submit regulatory notifications | A | R | — | — | C | I | — |
| Manage report retention | A | R | — | — | C | — | — |
| Annual procedure review | A | R | C | — | C | I | — |

---

## 11. Review and Approval

### 11.1 Review Cycle

This procedure shall be reviewed **annually** from the date of last approval, or earlier in the following circumstances:

- Significant changes to NCII system architecture or scope;
- New or amended regulatory requirements under Act 854 or NACSA directives;
- Material findings from penetration tests that identify gaps in this procedure;
- Post-incident review outcomes that impact penetration testing scope or methodology;
- Changes to organizational structure affecting roles defined in Section 10.

### 11.2 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD-MM-YYYY] | [Author Name, Role] | Initial document creation |
| [1.1] | [DD-MM-YYYY] | [Author Name, Role] | [Description of changes] |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared By | [Name], [Title] | | [DD-MM-YYYY] |
| Reviewed By | [Name], IT Security Manager | | [DD-MM-YYYY] |
| Reviewed By | [Name], Legal / Compliance | | [DD-MM-YYYY] |
| Approved By | [Name], Chief Information Security Officer | | [DD-MM-YYYY] |
| Endorsed By | [Name], Chief Risk Officer | | [DD-MM-YYYY] |
| Endorsed By | [Name], Chief Executive Officer | | [DD-MM-YYYY] |

---

## 12. References

The following regulatory instruments, standards, and internal policies are referenced in this procedure:

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), s21** | Duty of NCII entity to comply with cybersecurity measures, including conducting security assessments |
| **Cyber Security Act 2024 (Act 854), s28** | Requirement to engage only NACSA-licensed providers for cybersecurity services on NCII systems |
| **[NACSA Code of Practice for NCII — [Reference]]** | [Description of relevant NACSA code or directive] |
| **Personal Data Protection Act 2010 (PDPA)** | Data protection obligations applicable when personal data may be encountered during testing |
| **NIST SP 800-115** | Technical Guide to Information Security Testing and Assessment |
| **OWASP Testing Guide (v4.2 or latest)** | Web application penetration testing methodology |
| **PTES (Penetration Testing Execution Standard)** | General penetration testing methodology |
| **CVSS v3.1 Specification** | Vulnerability severity scoring standard |
| **ISO/IEC 27001:2022, Annex A** | Information security controls including vulnerability management |
| **[Internal Information Security Policy — Document ID]** | Overarching information security requirements |
| **[Vulnerability Management Procedure — Document ID]** | Procedure governing vulnerability identification and remediation beyond penetration testing |
| **[Incident Response Procedure — Document ID]** | Procedure to be invoked if testing causes unintended disruption |

---

## 13. Appendices

### Appendix A — Penetration Test Engagement Checklist

*Use this checklist to ensure all pre-engagement, execution, and post-engagement requirements are satisfied for each penetration test.*

**Pre-Engagement**

- [ ] Scope approved by CISO and relevant system owners
- [ ] NACSA licence of provider verified and recorded in register (Section 5.4)
- [ ] Rules of Engagement document signed by all parties
- [ ] NDA executed with licensed provider
- [ ] Data Processing Agreement executed (if applicable under PDPA)
- [ ] Service contract or purchase order raised and approved
- [ ] Testing windows confirmed with IT Operations
- [ ] Emergency stop contact designated and communicated to provider
- [ ] Relevant system owners notified of upcoming testing
- [ ] Firewall / WAF exceptions documented and approved (if required for testing)

**During Testing**

- [ ] Testing activity log maintained by licensed provider
- [ ] Daily check-in with designated [Organization Name] contact completed
- [ ] Any unintended impacts or discoveries reported immediately
- [ ] Emergency stop procedure invoked if required

**Post-Engagement**

- [ ] Draft report received within agreed timeline
- [ ] Draft report reviewed; comments provided to licensed provider
- [ ] Final report and evidence package received
- [ ] Executive summary distributed to Senior Management
- [ ] Technical debrief conducted with security team
- [ ] Finding Register populated and remediation owners assigned
- [ ] Regulatory notification submitted (if required)
- [ ] Test credentials and access revoked/deactivated
- [ ] Report and evidence stored in secure repository
- [ ] Engagement records filed for retention

---

### Appendix B — Rules of Engagement Template

*A standalone Rules of Engagement document template should be maintained separately and referenced here. The ROE shall be customized for each engagement and executed as a legally binding agreement.*

**Document Reference:** [ROE-TEMPLATE-v1.0]

**Sections to include in the ROE template:**

1. Party identification (Organization and Licensed Provider)
2. Engagement reference and dates
3. In-scope systems (refer to Section 4.2 table)
4. Permitted testing techniques
5. Prohibited techniques (refer to Section 4.3.3)
6. Testing windows and blackout periods
7. Emergency contacts and stop procedures
8. Evidence handling requirements
9. Incident notification obligations
10. Authorization signatures (CISO and Licensed Provider representative)

---

### Appendix C — Severity Classification Quick Reference Card

*A one-page reference for system owners and remediation owners, summarizing severity levels and remediation SLAs.*

| Severity | CVSS Range | Remediation SLA | Escalation |
|---|---|---|---|
| Critical | 9.0 – 10.0 | **72 hours** | CISO + CEO immediate |
| High | 7.0 – 8.9 | **30 days** | CISO + Senior Management within 5 days |
| Medium | 4.0 – 6.9 | **90 days** | CISO notification |
| Low | 0.1 – 3.9 | **180 days** | Standard tracking |
| Informational | N/A | Next release cycle | No escalation required |

---

### Appendix D — NACSA Licensed Provider Verification Procedure

*Step-by-step instructions for verifying a prospective provider's NACSA licence prior to engagement.*

1. Access the NACSA official licensed provider register at **[NACSA Official Portal URL]**;
2. Search for the provider by company name and registration number;
3. Confirm that the licence category covers penetration testing / VAPT services on NCII systems;
4. Confirm that the licence expiry date extends beyond the planned engagement completion date;
5. Obtain a certified or printable copy of the licence listing from the portal;
6. File the evidence in the NACSA Licence Verification Register (Section 5.4) and in the engagement file;
7. If the provider's licence cannot be confirmed on the public register, contact NACSA directly for verification before proceeding;
8. **Do not proceed with engagement if licence cannot be confirmed** — engaging an unlicensed provider is an offence under Act 854 s28.

---

### Appendix E — Finding Register Template

*A standalone Finding Register template in spreadsheet format is maintained separately at [Secure Repository Location]. The register shall be used for all engagements and retained per the schedule in Section 9.5.*

**Recommended columns:**

| Column | Description |
|---|---|
| Finding ID | Unique reference (Engagement Ref + sequential number) |
| Title | Short vulnerability name |
| Severity | Critical / High / Medium / Low / Informational |
| CVSS Score | Base score (v3.1) |
| CVSS Vector | Full vector string |
| CVE Reference | Where applicable |
| Affected Asset | System or component name |
| Date Identified | Date finding was reported |
| Date Assigned | Date remediation owner assigned |
| Remediation Owner | Name and team |
| Remediation Approach | Patch / Compensating Control / Risk Acceptance |
| Target Remediation Date | Per SLA |
| Actual Remediation Date | Completed date |
| Re-test Required | Yes / No |
| Re-test Date | Actual date of re-test |
| Re-test Outcome | Remediated / Partially Remediated / Not Remediated |
| Status | Open / In Progress / Remediated / Accepted / Closed |
| Notes | Additional context |

---

*End of Document*

*This document is classified **Confidential**. Unauthorised disclosure, reproduction, or distribution is prohibited. For queries regarding this procedure, contact the Chief Information Security Officer at [CISO contact details].*