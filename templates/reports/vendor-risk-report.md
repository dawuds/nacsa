# Vendor Risk Assessment Report

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | CISO / Procurement |
| **Organization** | [Organization Name] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Vendor Profile](#2-vendor-profile)
3. [Vendor Security Posture Assessment](#3-vendor-security-posture-assessment)
4. [Licence Compliance Verification](#4-licence-compliance-verification)
5. [Access Scope and Controls](#5-access-scope-and-controls)
6. [Identified Risks and Mitigations](#6-identified-risks-and-mitigations)
7. [Residual Risk Rating](#7-residual-risk-rating)
8. [Recommendations](#8-recommendations)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Review and Approval](#10-review-and-approval)
11. [References](#11-references)
12. [Appendices](#12-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Vendor Risk Assessment Report documents the findings of a structured security risk assessment conducted against a vendor that has been granted, or is seeking, access to systems designated as National Critical Information Infrastructure (NCII) assets owned or operated by [Organization Name].

This report is prepared in compliance with the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 18** — Obligations of NCII entities to assess and manage risks arising from third-party and supply chain access to NCII systems.
- **Section 28** — Requirements relating to the governance of vendor and service provider relationships that interact with or support NCII assets.

This report supports [Organization Name]'s obligations to NACSA (National Cyber Security Agency) and serves as a record of due diligence for third-party cyber risk management.

### 1.2 Scope

*Define the boundaries of this assessment, including which systems, data, and services the vendor accesses or supports. Limit the scope to what was assessed during the review period.*

This assessment covers the following:

- **Vendor:** [Vendor Name]
- **Assessment Period:** [Assessment Start Date] to [Assessment End Date]
- **NCII Systems in Scope:** [List of NCII systems or asset categories the vendor accesses]
- **Service / Contract Reference:** [Contract or Service Agreement Number]
- **Assessment Type:** ☐ Initial Assessment   ☐ Annual Review   ☐ Triggered Review
- **Assessment Method:** ☐ Document Review   ☐ On-site Audit   ☐ Remote Assessment   ☐ Questionnaire-Based

### 1.3 Out of Scope

*List any systems, environments, or activities explicitly excluded from this assessment.*

| Excluded Item | Reason for Exclusion |
|---|---|
| [Item 1] | [Rationale] |
| [Item 2] | [Rationale] |

### 1.4 Assessment Methodology

*Briefly describe the methodology, frameworks, or standards used to conduct this assessment (e.g., ISO/IEC 27001, NIST SP 800-161, NACSA guidelines).*

This assessment was conducted using the following methodology:

- Review of vendor-submitted documentation and self-assessment questionnaires
- Technical interviews with vendor security personnel
- Review of relevant certifications and audit reports (e.g., ISO 27001, SOC 2)
- Alignment checks against NACSA vendor risk requirements under Act 854
- Risk scoring using [Organization Name]'s approved risk rating matrix

---

## 2. Vendor Profile

*Capture all identifying information about the vendor. Ensure this section is fully completed before the assessment commences.*

### 2.1 Vendor Identification

| Field | Details |
|---|---|
| **Vendor / Company Name** | [Vendor Name] |
| **Registered Business Number** | [SSM or equivalent registration number] |
| **Registered Address** | [Vendor Registered Address] |
| **Primary Contact Name** | [Contact Name] |
| **Primary Contact Title** | [Contact Title] |
| **Primary Contact Email** | [Contact Email] |
| **Primary Contact Phone** | [Contact Phone] |
| **Security / DPO Contact** | [Security Contact Name and Email] |
| **Country of Incorporation** | [Country] |
| **Nature of Business** | [Brief description of vendor's core business] |

### 2.2 Service Description

*Describe the service or product provided by the vendor and its relevance to the organization's NCII operations.*

| Field | Details |
|---|---|
| **Service / Product Name** | [Service or Product Name] |
| **Service Category** | ☐ Managed Service   ☐ Software/SaaS   ☐ Hardware   ☐ Consultancy   ☐ Maintenance   ☐ Other: [specify] |
| **Contract Start Date** | [Contract Start Date] |
| **Contract End Date / Renewal Date** | [Contract End Date] |
| **Criticality to NCII Operations** | ☐ Critical   ☐ High   ☐ Medium   ☐ Low |
| **Sub-contractors / Fourth Parties** | ☐ Yes — see Section 3.7   ☐ No |

### 2.3 Vendor Tier Classification

*Assign a tier based on the vendor's level of access and the criticality of services provided to NCII systems.*

| Tier | Description | Assigned Tier |
|---|---|---|
| **Tier 1 — Critical** | Direct access to NCII production systems; processes sensitive or classified data | ☐ |
| **Tier 2 — High** | Access to NCII-adjacent systems or processes non-public operational data | ☐ |
| **Tier 3 — Medium** | Indirect or read-only access; handles administrative or non-sensitive data | ☐ |
| **Tier 4 — Low** | No system access; purely physical or logistical services | ☐ |

**Assigned Tier:** **[Tier X — Classification]**

**Rationale:** [Provide justification for the tier assigned]

---

## 3. Vendor Security Posture Assessment

*This section documents the results of the security posture evaluation across key control domains. Assessors should rate each domain based on evidence reviewed.*

### 3.1 Assessment Summary

| Control Domain | Evidence Reviewed | Rating | Findings |
|---|---|---|---|
| Information Security Governance | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Access Control and Identity Management | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Network and Perimeter Security | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Vulnerability and Patch Management | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Incident Response and Reporting | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Data Protection and Privacy | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Business Continuity and Disaster Recovery | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Physical and Environmental Security | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Security Awareness and Training | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |
| Supply Chain and Sub-contractor Security | [Document/Artefact] | ☐ Satisfactory ☐ Partial ☐ Unsatisfactory ☐ N/A | [Summary] |

### 3.2 Information Security Governance

*Document the vendor's governance framework including policies, accountability structures, and security leadership.*

- **Information Security Policy in place:** ☐ Yes   ☐ No   ☐ In Progress
- **Policy last reviewed:** [Date]
- **Designated security officer / CISO equivalent:** ☐ Yes — Name: [Name]   ☐ No
- **Security function reporting line:** [e.g., Reports to CEO / Board]
- **Findings:** [Document findings from policy review or interview]

### 3.3 Access Control and Identity Management

*Assess whether the vendor enforces least-privilege access, multi-factor authentication, and access review processes for personnel accessing NCII systems.*

- **MFA enforced for remote access:** ☐ Yes   ☐ No   ☐ Partial
- **Privileged Access Management (PAM) in place:** ☐ Yes   ☐ No
- **Access review frequency:** [e.g., Quarterly / Semi-annual]
- **Joiners/Movers/Leavers process documented:** ☐ Yes   ☐ No
- **Findings:** [Document findings]

### 3.4 Network and Perimeter Security

*Review the vendor's network segmentation, firewall configurations, and controls protecting the environment through which NCII systems are accessed.*

- **Network segmentation between client environments:** ☐ Yes   ☐ No   ☐ Partial
- **Firewall / IPS / IDS deployed:** ☐ Yes   ☐ No
- **Penetration testing conducted:** ☐ Yes — Last date: [Date]   ☐ No
- **Findings:** [Document findings]

### 3.5 Vulnerability and Patch Management

*Assess the vendor's processes for identifying, prioritising, and remediating vulnerabilities across systems used to access or support NCII assets.*

- **Vulnerability scanning in place:** ☐ Yes   ☐ No
- **Patch management SLA defined:** ☐ Yes — Critical: [X days], High: [X days]   ☐ No
- **Last vulnerability scan date:** [Date]
- **Known unpatched critical CVEs:** ☐ None identified   ☐ [Number] identified — see Appendix B
- **Findings:** [Document findings]

### 3.6 Incident Response and Reporting

*Evaluate the vendor's capability to detect, respond to, and notify [Organization Name] of security incidents that may affect NCII systems.*

- **Incident Response Plan documented:** ☐ Yes   ☐ No
- **Notification obligation to [Organization Name] defined:** ☐ Yes — Timeframe: [X hours]   ☐ No
- **Past incidents involving [Organization Name] systems:** ☐ None   ☐ Yes — see Appendix C
- **Findings:** [Document findings]

### 3.7 Sub-contractor and Fourth-Party Security

*Identify all sub-contractors engaged by the vendor that may have access to or influence over NCII systems and assess controls in place.*

| Sub-contractor Name | Service Provided | Access to NCII Systems | Security Assessment Conducted |
|---|---|---|---|
| [Sub-contractor Name] | [Service] | ☐ Yes   ☐ No | ☐ Yes   ☐ No |
| [Sub-contractor Name] | [Service] | ☐ Yes   ☐ No | ☐ Yes   ☐ No |

**Findings:** [Document findings regarding fourth-party risk management]

---

## 4. Licence Compliance Verification

*This section verifies that the vendor holds all required licences, certifications, and regulatory approvals applicable under Malaysian law and relevant sector regulations.*

### 4.1 Regulatory and Statutory Licences

| Licence / Registration | Issuing Authority | Licence Number | Expiry Date | Status |
|---|---|---|---|---|
| Companies Commission of Malaysia (SSM) Registration | SSM | [Number] | N/A — perpetual | ☐ Valid   ☐ Expired   ☐ N/A |
| NACSA-recognised Cyber Security Service Provider (CSSP) | NACSA | [Number] | [Date] | ☐ Valid   ☐ Expired   ☐ N/A |
| PDPA Registration (if applicable) | PDPC | [Number] | [Date] | ☐ Valid   ☐ Expired   ☐ N/A |
| [Sector-specific licence, e.g., BNM, SC, CAAM] | [Authority] | [Number] | [Date] | ☐ Valid   ☐ Expired   ☐ N/A |
| [Other applicable licence] | [Authority] | [Number] | [Date] | ☐ Valid   ☐ Expired   ☐ N/A |

### 4.2 Security Certifications and Audit Reports

*List all third-party certifications and independent audit reports provided by the vendor as evidence of security controls.*

| Certification / Report | Issuing Body | Scope | Valid From | Valid To | Verified |
|---|---|---|---|---|---|
| ISO/IEC 27001:2022 | [Certification Body] | [Scope statement] | [Date] | [Date] | ☐ Yes   ☐ No |
| SOC 2 Type II | [Auditor] | [Scope statement] | [Date] | [Date] | ☐ Yes   ☐ No |
| ISO/IEC 22301 (BCMS) | [Certification Body] | [Scope statement] | [Date] | [Date] | ☐ Yes   ☐ No |
| PCI DSS (if applicable) | [QSA / Auditor] | [Scope statement] | [Date] | [Date] | ☐ Yes   ☐ No |
| [Other certification] | [Body] | [Scope] | [Date] | [Date] | ☐ Yes   ☐ No |

### 4.3 Contractual Compliance Obligations

*Confirm that current contractual instruments with the vendor include the mandatory security and compliance clauses required under Act 854 and [Organization Name]'s vendor management policy.*

| Contractual Clause | Required | Present in Contract | Notes |
|---|---|---|---|
| Data Processing Agreement (PDPA-compliant) | ☐ Yes   ☐ No | ☐ Yes   ☐ No | [Notes] |
| Right to audit clause | ☐ Yes   ☐ No | ☐ Yes   ☐ No | [Notes] |
| Security incident notification obligation | ☐ Yes   ☐ No | ☐ Yes   ☐ No | [Notes] |
| NCII-specific security obligations | ☐ Yes   ☐ No | ☐ Yes   ☐ No | [Notes] |
| Sub-contractor disclosure obligation | ☐ Yes   ☐ No | ☐ Yes   ☐ No | [Notes] |
| Termination and data return/destruction clause | ☐ Yes   ☐ No | ☐ Yes   ☐ No | [Notes] |

**Overall Licence Compliance Finding:** ☐ Compliant   ☐ Partially Compliant — remediation required   ☐ Non-Compliant — escalation required

---

## 5. Access Scope and Controls

*This section documents the nature, extent, and controls governing the vendor's access to NCII systems. All access must be justified, appropriately controlled, and subject to regular review.*

### 5.1 Access Inventory

*List all systems, environments, and data classifications the vendor accesses as part of their service delivery.*

| System / Environment | Data Classification | Access Type | Access Method | Justification |
|---|---|---|---|---|
| [System Name] | ☐ NCII-Critical ☐ Confidential ☐ Internal ☐ Public | ☐ Read ☐ Write ☐ Admin ☐ Execute | ☐ VPN ☐ API ☐ Direct ☐ Portal | [Business justification] |
| [System Name] | ☐ NCII-Critical ☐ Confidential ☐ Internal ☐ Public | ☐ Read ☐ Write ☐ Admin ☐ Execute | ☐ VPN ☐ API ☐ Direct ☐ Portal | [Business justification] |
| [System Name] | ☐ NCII-Critical ☐ Confidential ☐ Internal ☐ Public | ☐ Read ☐ Write ☐ Admin ☐ Execute | ☐ VPN ☐ API ☐ Direct ☐ Portal | [Business justification] |

### 5.2 Privileged and Administrative Access

*Document any elevated or privileged access granted to vendor personnel and the controls in place to govern such access.*

| Account / Role | Personnel Name | Access Level | Access Duration | PAM Controlled | Last Reviewed |
|---|---|---|---|---|---|
| [Account Name] | [Name] | [Admin / Privileged / Read-only] | ☐ Permanent ☐ Time-limited: [Dates] | ☐ Yes ☐ No | [Date] |
| [Account Name] | [Name] | [Admin / Privileged / Read-only] | ☐ Permanent ☐ Time-limited: [Dates] | ☐ Yes ☐ No | [Date] |

### 5.3 Remote Access Controls

*Detail the technical and procedural controls governing remote access by vendor personnel to NCII systems.*

| Control | Implemented | Notes |
|---|---|---|
| Multi-factor authentication (MFA) required | ☐ Yes   ☐ No | [Notes] |
| Dedicated VPN / secure gateway for vendor access | ☐ Yes   ☐ No | [Notes] |
| Session recording / monitoring | ☐ Yes   ☐ No | [Notes] |
| Just-in-time (JIT) access provisioning | ☐ Yes   ☐ No | [Notes] |
| IP allowlisting | ☐ Yes   ☐ No | [Notes] |
| Access time restrictions | ☐ Yes   ☐ No | [Notes] |
| Shared account usage prohibited | ☐ Yes   ☐ No | [Notes] |

### 5.4 Access Governance

- **Access request and approval process:** [Describe the formal process for granting vendor access]
- **Access review frequency:** [e.g., Every 6 months / Annually]
- **Last access review date:** [Date]
- **Responsible owner for vendor access review:** [Role / Name]
- **Onboarding / Offboarding checklist referenced:** ☐ Yes — Ref: [Document ID]   ☐ No

---

## 6. Identified Risks and Mitigations

*This section captures all risks identified during the assessment. Each risk must be rated for likelihood and impact before mitigations are documented. Risks with a residual rating of High or Critical must be escalated to the CISO.*

### 6.1 Risk Rating Matrix

*The following matrix is used to determine the inherent and residual risk ratings applied in Section 6.2.*

| | **Impact: Low** | **Impact: Medium** | **Impact: High** | **Impact: Critical** |
|---|---|---|---|---|
| **Likelihood: Rare** | Low | Low | Medium | High |
| **Likelihood: Unlikely** | Low | Medium | High | High |
| **Likelihood: Possible** | Medium | Medium | High | Critical |
| **Likelihood: Likely** | Medium | High | Critical | Critical |
| **Likelihood: Almost Certain** | High | High | Critical | Critical |

### 6.2 Risk Register

*Document each risk identified during the assessment. Risk IDs should follow the format VR-[Year]-[NNN] (e.g., VR-2025-001).*

| Risk ID | Risk Description | Affected System / Data | Likelihood | Impact | Inherent Risk | Current Mitigation | Mitigation Owner | Residual Risk | Target Resolution Date |
|---|---|---|---|---|---|---|---|---|---|
| VR-[YYYY]-001 | [Description of risk, e.g., Vendor personnel retain access after contract termination] | [System / Data] | [Rare / Unlikely / Possible / Likely / Almost Certain] | [Low / Medium / High / Critical] | [Low / Medium / High / Critical] | [Description of existing control or mitigation] | [Role / Name] | [Low / Medium / High / Critical] | [Date] |
| VR-[YYYY]-002 | [Description of risk] | [System / Data] | [Rating] | [Rating] | [Rating] | [Mitigation] | [Owner] | [Rating] | [Date] |
| VR-[YYYY]-003 | [Description of risk] | [System / Data] | [Rating] | [Rating] | [Rating] | [Mitigation] | [Owner] | [Rating] | [Date] |
| VR-[YYYY]-004 | [Description of risk] | [System / Data] | [Rating] | [Rating] | [Rating] | [Mitigation] | [Owner] | [Rating] | [Date] |
| VR-[YYYY]-005 | [Description of risk] | [System / Data] | [Rating] | [Rating] | [Rating] | [Mitigation] | [Owner] | [Rating] | [Date] |

### 6.3 Risk Categories Summary

*Summarise identified risks by category to provide a consolidated view of the vendor's threat landscape.*

| Risk Category | Number of Risks | Highest Rating | Notes |
|---|---|---|---|
| Access and Identity | [Number] | [Rating] | [Notes] |
| Data Protection | [Number] | [Rating] | [Notes] |
| Supply Chain / Fourth-party | [Number] | [Rating] | [Notes] |
| Regulatory and Compliance | [Number] | [Rating] | [Notes] |
| Operational Continuity | [Number] | [Rating] | [Notes] |
| Technical Security Controls | [Number] | [Rating] | [Notes] |
| Physical Security | [Number] | [Rating] | [Notes] |
| **Total** | **[Total]** | **[Overall Highest]** | |

---

## 7. Residual Risk Rating

*This section presents the consolidated residual risk position for the vendor following the application of all current mitigations. The overall residual risk rating determines the required management response and monitoring posture.*

### 7.1 Overall Residual Risk Determination

*Based on the findings in Section 6, determine the overall residual risk rating for this vendor relationship.*

| Dimension | Finding | Rating |
|---|---|---|
| Security posture (Section 3) | [Summary finding] | ☐ Low   ☐ Medium   ☐ High   ☐ Critical |
| Licence compliance (Section 4) | [Summary finding] | ☐ Low   ☐ Medium   ☐ High   ☐ Critical |
| Access scope and controls (Section 5) | [Summary finding] | ☐ Low   ☐ Medium   ☐ High   ☐ Critical |
| Risk register — highest residual (Section 6) | [Summary finding] | ☐ Low   ☐ Medium   ☐ High   ☐ Critical |

**Overall Residual Risk Rating:** ☐ **Low**   ☐ **Medium**   ☐ **High**   ☐ **Critical**

**Rationale for Overall Rating:**

> [Provide a concise narrative explaining the overall residual risk rating, noting the key factors that drove the determination and any compensating controls that reduced the rating.]

### 7.2 Residual Risk Acceptance

*The overall residual risk must be formally accepted or escalated by the appropriate authority based on rating.*

| Residual Risk Level | Required Action | Required Approver |
|---|---|---|
| **Low** | Document and accept; standard monitoring | Risk Owner / Business Unit Head |
| **Medium** | Accept with documented compensating controls; enhanced monitoring | CISO |
| **High** | Conditional acceptance; mandatory remediation plan with milestones | CISO + Risk Committee |
| **Critical** | Do not approve / immediate remediation required or contract suspension | Board Risk Committee / CEO |

**Decision:** ☐ Risk Accepted   ☐ Risk Accepted with Conditions (see Section 8)   ☐ Risk Not Accepted — Escalated

**Acceptance Authority:** [Name and Role of Risk Acceptor]

**Date of Acceptance:** [Date]

**Conditions (if applicable):** [Detail any conditions attached to acceptance, including remediation deadlines]

### 7.3 Monitoring Requirements

*Based on the residual risk rating, define the ongoing monitoring posture for this vendor.*

| Monitoring Activity | Frequency | Responsible Party |
|---|---|---|
| Vendor security posture review | [Monthly / Quarterly / Annually] | [Role] |
| Access review | [Monthly / Quarterly / Bi-annually] | [Role] |
| Compliance certificate renewal check | [As required / Annually] | [Role] |
| Incident / breach notification follow-up | [On occurrence] | [Role] |
| Contract compliance review | [Annually] | [Role] |

---

## 8. Recommendations

*This section documents formal recommendations arising from the assessment. Recommendations should be specific, actionable, and assigned to an accountable owner. Status must be updated at each subsequent review cycle.*

### 8.1 Summary of Recommendations

| Rec. ID | Priority | Recommendation | Linked Risk ID(s) | Accountable Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| REC-001 | ☐ Critical ☐ High ☐ Medium ☐ Low | [Specific, actionable recommendation] | [VR-YYYY-NNN] | [Role / Name] | [Date] | ☐ Open ☐ In Progress ☐ Closed |
| REC-002 | ☐ Critical ☐ High ☐ Medium ☐ Low | [Specific, actionable recommendation] | [VR-YYYY-NNN] | [Role / Name] | [Date] | ☐ Open ☐ In Progress ☐ Closed |
| REC-003 | ☐ Critical ☐ High ☐ Medium ☐ Low | [Specific, actionable recommendation] | [VR-YYYY-NNN] | [Role / Name] | [Date] | ☐ Open ☐ In Progress ☐ Closed |
| REC-004 | ☐ Critical ☐ High ☐ Medium ☐ Low | [Specific, actionable recommendation] | [VR-YYYY-NNN] | [Role / Name] | [Date] | ☐ Open ☐ In Progress ☐ Closed |
| REC-005 | ☐ Critical ☐ High ☐ Medium ☐ Low | [Specific, actionable recommendation] | [VR-YYYY-NNN] | [Role / Name] | [Date] | ☐ Open ☐ In Progress ☐ Closed |

### 8.2 Recommended Contractual Enhancements

*List any amendments or additions recommended for the vendor's contract or service agreement to address identified gaps.*

- [ ] [Contractual amendment recommendation 1 — e.g., Insert right-to-audit clause covering sub-contractors]
- [ ] [Contractual amendment recommendation 2 — e.g., Define maximum breach notification window of 24 hours]
- [ ] [Contractual amendment recommendation 3 — e.g., Require annual ISO 27001 recertification evidence]
- [ ] [Contractual amendment recommendation 4]

### 8.3 Recommended Technical Controls

*List specific technical controls recommended for implementation by either the vendor or [Organization Name]'s IT/security team to reduce identified risks.*

- [ ] [Technical control recommendation 1 — e.g., Enforce MFA for all vendor remote access sessions]
- [ ] [Technical control recommendation 2 — e.g., Implement session recording for privileged vendor access]
- [ ] [Technical control recommendation 3 — e.g., Segregate vendor-accessible environments from NCII production networks]
- [ ] [Technical control recommendation 4]

### 8.4 Overall Assessment Conclusion

*Provide a concise overall conclusion and the recommended disposition for this vendor relationship.*

**Assessment Conclusion:**

> [Provide a 2–4 sentence narrative summarising the overall findings, the key strengths and weaknesses identified, and the assessor's overall confidence in the vendor's ability to securely handle access to NCII systems.]

**Recommended Disposition:** ☐ **Approve**   ☐ **Approve with Conditions**   ☐ **Defer pending remediation**   ☐ **Do Not Approve**

---

## 9. Roles and Responsibilities

*This section defines accountability for the vendor risk assessment lifecycle using a RACI model.*

**RACI Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | Procurement | Risk & Compliance | IT / Security Ops | Business Unit Owner | Vendor |
|---|---|---|---|---|---|---|
| Initiate vendor risk assessment | R | A | C | I | I | I |
| Define assessment scope | A | C | R | C | C | I |
| Conduct security posture review | R | I | C | R | I | C |
| Verify licence and certifications | I | R | A | I | I | C |
| Review access scope and controls | R | I | C | A | C | I |
| Conduct risk identification and rating | A | I | R | C | C | I |
| Draft assessment report | R | I | C | C | I | I |
| Review and validate report | A | C | R | C | C | I |
| Communicate findings to vendor | A | R | C | I | I | I |
| Track recommendation remediation | C | C | R | C | A | R |
| Approve vendor engagement | A | C | C | I | R | I |
| Update vendor risk register | I | I | R | I | I | I |
| Schedule next review | C | A | R | I | I | I |

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial assessment report issued |
| [X.X] | [Date] | [Author Name, Role] | [Description of changes] |
| [X.X] | [Date] | [Author Name, Role] | [Description of changes] |

### 10.2 Document Approval

*This report must be reviewed and approved by the designated authorities before it is considered final. A physically or digitally signed copy must be retained on file.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Prepared by | [Assessor Name, Title] | | [Date] |
| Reviewed by | [Reviewer Name, Title] | | [Date] |
| Approved by (CISO) | [CISO Name] | | [Date] |
| Approved by (Risk Committee / DPO, if escalated) | [Name, Title] | | [Date] |

### 10.3 Distribution List

*List all parties authorised to receive a copy of this report. Due to the Confidential classification, distribution must be strictly controlled.*

| Name | Role | Organization | Date Distributed |
|---|---|---|---|
| [Name] | [Role] | [Organization Name] | [Date] |
| [Name] | [Role] | [Organization Name] | [Date] |
| [Name] | [Role] | [Vendor Name] — redacted copy only | [Date] |

---

## 11. References

*This report is issued in compliance with and with reference to the following instruments, regulations, and standards.*

### 11.1 Primary Legislative References

| Instrument | Relevant Provisions | Notes |
|---|---|---|
| **Cyber Security Act 2024 (Act 854)** | **Section 18** — Obligations of NCII entities to manage risks, including third-party and supply chain risks relating to NCII systems | Core legislative mandate for this assessment |
| **Cyber Security Act 2024 (Act 854)** | **Section 28** — Governance requirements for vendor and service provider relationships involving NCII systems | Governs contractual and oversight obligations |
| **Personal Data Protection Act 2010 (Act 709)** | Sections 6, 9, 10 — Data processing, security, and third-party processor obligations | Applicable where vendor processes personal data |

### 11.2 Regulatory Guidelines and Frameworks

| Document | Issuing Body | Applicability |
|---|---|---|
| NACSA National Cyber Security Policy (NCSP) | NACSA | Overarching national cybersecurity policy and NCII sector guidelines |
| NACSA Cyber Security Framework for NCII Sectors | NACSA | Sector-specific control requirements for NCII entities |
| [Relevant BNM / SC Guideline, if applicable] | BNM / SC | [Applicability to organization and sector] |
| ISO/IEC 27001:2022 — Information Security Management | ISO / SIRIM | Reference standard for evaluating vendor security posture |
| ISO/IEC 27036 — Information security for supplier relationships | ISO / SIRIM | Standard for third-party and supply chain risk management |
| NIST SP 800-161 Rev. 1 — Cybersecurity Supply Chain Risk Management | NIST | Reference framework for supply chain risk methodology |

### 11.3 Internal Policy References

| Document | Document ID | Notes |
|---|---|---|
| [Organization Name] Vendor Risk Management Policy | [Document ID] | Parent policy for this assessment |
| [Organization Name] Information Security Policy | [Document ID] | Organizational security requirements applicable to vendors |
| [Organization Name] Third-Party Access Control Standard | [Document ID] | Technical access requirements for vendor connectivity |
| [Organization Name] NCII Asset Register | [Document ID] | Register of NCII-designated assets in scope |

---

## 12. Appendices

### Appendix A — Vendor Security Questionnaire

*Attach or reference the completed vendor security self-assessment questionnaire submitted by the vendor in preparation for this assessment.*

**Questionnaire Reference:** [Document ID / Filename]

**Date Submitted by Vendor:** [Date]

**Questionnaire Version:** [Version Number]

> *[Attach completed questionnaire or insert reference to file location in the document management system.]*

---

### Appendix B — Outstanding Vulnerabilities

*List all unpatched critical or high-severity vulnerabilities identified in systems used by the vendor to access NCII assets, where these have not been fully remediated at the time of report issuance.*

| CVE / Ref | Affected System | Severity | Vendor Acknowledged | Remediation Commitment Date | Status |
|---|---|---|---|---|---|
| [CVE-YYYY-NNNNN] | [System Name] | [Critical / High] | ☐ Yes   ☐ No | [Date] | ☐ Open   ☐ In Progress |
| [CVE-YYYY-NNNNN] | [System Name] | [Critical / High] | ☐ Yes   ☐ No | [Date] | ☐ Open   ☐ In Progress |

---

### Appendix C — Prior Incident History

*Summarise any known security incidents involving the vendor that have affected, or had the potential to affect, [Organization Name]'s systems or data within the last 36 months.*

| Incident Reference | Date | Description | Impact on [Organization Name] | Resolution Status |
|---|---|---|---|---|
| [Reference] | [Date] | [Brief description] | [Impact description or "None confirmed"] | ☐ Resolved   ☐ Ongoing |
| [Reference] | [Date] | [Brief description] | [Impact description or "None confirmed"] | ☐ Resolved   ☐ Ongoing |

---

### Appendix D — Evidence Register

*List all documents, reports, and artefacts reviewed during the assessment as supporting evidence.*

| Ref | Document / Artefact | Version / Date | Provided By | Verified |
|---|---|---|---|---|
| E-001 | [e.g., Vendor Information Security Policy] | [Version / Date] | Vendor | ☐ Yes   ☐ No |
| E-002 | [e.g., ISO 27001 Certificate] | [Version / Date] | Vendor | ☐ Yes   ☐ No |
| E-003 | [e.g., Penetration Test Report] | [Version / Date] | Vendor | ☐ Yes   ☐ No |
| E-004 | [e.g., SOC 2 Type II Report] | [Version / Date] | Vendor | ☐ Yes   ☐ No |
| E-005 | [e.g., Completed Security Questionnaire] | [Version / Date] | Vendor | ☐ Yes   ☐ No |
| E-006 | [e.g., Current contract / DPA] | [Version / Date] | Procurement | ☐ Yes   ☐ No |
| E-007 | [Additional document] | [Version / Date] | [Source] | ☐ Yes   ☐ No |

---

### Appendix E — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary Malaysian legislation governing national cybersecurity obligations |
| **CISO** | Chief Information Security Officer |
| **CSSP** | Cyber Security Service Provider — a recognised provider category under Act 854 |
| **NACSA** | National Cyber Security Agency — the national authority responsible for cybersecurity policy and NCII protection in Malaysia |
| **NCII** | National Critical Information Infrastructure — systems designated under Act 854 whose disruption would significantly impact national security, economy, public health, or safety |
| **PDPA** | Personal Data Protection Act 2010 (Act 709) |
| **Residual Risk** | The level of risk remaining after all existing controls and mitigations have been applied |
| **RACI** | Responsible, Accountable, Consulted, Informed — a responsibility assignment matrix |
| **Tier 1 Vendor** | A vendor with direct access to NCII production systems and/or sensitive NCII data |
| **Fourth Party** | A sub-contractor or supplier engaged by a vendor that may indirectly affect NCII systems |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name] and approved regulators. Unauthorised disclosure is prohibited under [Organization Name]'s Information Classification Policy and applicable Malaysian law.*

*Document ID: [Document ID] | Version: 1.0 | Owner: CISO / Procurement | Next Review: [Next Review Date]*