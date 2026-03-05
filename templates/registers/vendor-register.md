# Vendor and Third-Party Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Procurement / Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Quarterly] |
| **Approved By** | [Approved By] |
| **Organisation** | [Organisation Name] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This register serves as the authoritative record of all vendors, third-party service providers, and external parties that have access to, process data within, or otherwise impact the National Critical Information Infrastructure (NCII) systems operated or managed by [Organisation Name].

This document is maintained in fulfilment of obligations under the **Cyber Security Act 2024 (Act 854)**, specifically:

- **Section 18** — Duties of NCII entity owners with respect to third-party cyber risk management and vendor oversight.
- **Section 28** — Requirements relating to the notification and management of cyber security incidents involving third parties or supply chain actors.

The register supports [Organisation Name]'s ongoing compliance posture with the **National Cyber Security Agency (NACSA)** and demonstrates governance over the supply chain security lifecycle.

### 1.2 Scope

*This section defines the boundaries of the register. Include all third parties that touch NCII systems, directly or indirectly.*

This register applies to all vendors and third parties that meet one or more of the following criteria:

- Have **direct or remote access** to NCII systems, networks, or data environments.
- **Process, store, or transmit** information classified as sensitive or subject to regulatory protection on behalf of [Organisation Name].
- Provide **managed services, outsourced operations, or cloud services** that underpin NCII functions.
- Supply **hardware, software, or telecommunications** components integrated into NCII systems.
- Serve as **sub-processors or sub-contractors** engaged by a primary vendor where NCII impact exists.

Out of scope: Vendors with no access to or impact on NCII systems and no processing of regulated data.

---

## 2. Register Governance and Maintenance

*This section describes how the register is maintained, who is responsible for its accuracy, and the cadence of updates.*

### 2.1 Maintenance Obligations

- The register shall be reviewed and updated **at minimum quarterly**, or immediately upon:
  - Onboarding of a new vendor or third party.
  - Expiry or renewal of a contract.
  - Completion of a third-party security assessment.
  - A material change in a vendor's access scope or services.
  - A cyber security incident involving a listed vendor.
  - Revocation or change in an Act 854 licence status.

- All updates shall be recorded in the **Version History** (Section 7.1) and approved by the CISO or delegated authority.

### 2.2 Entry Lifecycle

| Stage | Action | Responsible Party |
|---|---|---|
| **Onboarding** | New vendor entry created and initial assessment completed | Procurement / CISO |
| **Active** | Periodic review, reassessment, and contract monitoring | CISO / Risk Owner |
| **Renewal** | Contract reviewed, security assessment refreshed | Procurement / Legal |
| **Offboarding** | Access revoked, entry archived with closure date | IT Security / Procurement |
| **Archived** | Record retained per data retention schedule | Compliance Officer |

---

## 3. Vendor and Third-Party Register

*This is the primary register table. Each row represents a single vendor or third-party relationship. Expand rows as required. For large organisations, this table may be maintained in a linked database or GRC tool; this document then serves as the governing policy framework and index.*

### 3.1 Master Register

| Field | Guidance |
|---|---|
| **Vendor ID** | Unique identifier, e.g., VTP-2024-001 |
| **Vendor Name** | Legal registered name of the entity |
| **Services Provided** | Description of services rendered to [Organisation Name] |
| **Act 854 Licence Status** | Licensed / Exempt / Not Applicable — with licence number if applicable |
| **Access Level** | None / Read-Only / Read-Write / Administrative / Full Systems Access |
| **Access Scope** | Specific systems, environments, or data sets accessible |
| **Contract Reference** | Contract or PO number |
| **Contract Start Date** | DD/MM/YYYY |
| **Contract Expiry Date** | DD/MM/YYYY |
| **Last Security Assessment Date** | DD/MM/YYYY |
| **Next Security Assessment Due** | DD/MM/YYYY |
| **Risk Rating** | Critical / High / Medium / Low |
| **Risk Justification** | Brief rationale for the assigned risk rating |
| **Incident History** | Reference to any past incidents involving this vendor |
| **Register Status** | Active / Offboarded / Under Review |
| **Record Owner** | Name of internal owner accountable for this relationship |

---

| Vendor ID | Vendor Name | Services Provided | Act 854 Licence Status | Access Level | Access Scope | Contract Reference | Contract Start Date | Contract Expiry Date | Last Security Assessment | Next Assessment Due | Risk Rating | Risk Justification | Incident History | Register Status | Record Owner |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| VTP-[YYYY]-001 | [Vendor Legal Name] | [e.g., Managed SOC Services] | [Licensed / Exempt / N/A] | [e.g., Read-Write] | [e.g., SIEM Platform, Log Repository] | [Contract No.] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [e.g., Access to core NCII monitoring systems] | [None / Ref: INC-YYYY-XXX] | [Active] | [Name, Title] |
| VTP-[YYYY]-002 | [Vendor Legal Name] | [e.g., Cloud Infrastructure Hosting] | [Licensed / Exempt / N/A] | [e.g., Administrative] | [e.g., Production Environment, Tier-1 Applications] | [Contract No.] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [e.g., Hosts primary NCII application stack] | [None / Ref: INC-YYYY-XXX] | [Active] | [Name, Title] |
| VTP-[YYYY]-003 | [Vendor Legal Name] | [e.g., Software Maintenance and Support] | [Licensed / Exempt / N/A] | [e.g., Read-Only] | [e.g., Application Logs, Support Portal] | [Contract No.] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Critical / High / Medium / Low] | [e.g., Limited read access, no data exfiltration risk] | [None / Ref: INC-YYYY-XXX] | [Active] | [Name, Title] |

*Add additional rows as required. Archived (offboarded) entries shall be moved to Appendix A.*

---

## 4. Vendor Name and Services

*This section provides the definitional guidance for how vendor identity and services are recorded and categorised in the master register.*

### 4.1 Vendor Identification

All vendors shall be recorded using their **legal registered name** as per the Companies Commission of Malaysia (SSM) registration or equivalent foreign registration. Trading names, where different, shall be noted in parentheses.

| Attribute | Description |
|---|---|
| **Legal Name** | Full registered legal name |
| **Trading Name** | Operating or brand name, if different |
| **Registration Number** | SSM or equivalent registration number |
| **Country of Incorporation** | Malaysia / [Country] |
| **Primary Contact** | Name, designation, email, phone |
| **Internal Relationship Manager** | [Organisation Name] staff member managing this relationship |

### 4.2 Services Classification

*Categorise each vendor's services to enable risk-tiered oversight and targeted assessment scheduling.*

| Service Category | Description | Examples |
|---|---|---|
| **Managed Security Services** | Outsourced security operations | SOC-as-a-service, MSSP, MDR |
| **Cloud and Hosting** | Infrastructure or platform services | IaaS, PaaS, SaaS, co-location |
| **Software and Application** | Commercial or bespoke software | ERP, core banking, ITSM tools |
| **Telecommunications** | Network connectivity or communication | ISP, WAN providers, leased lines |
| **Consulting and Professional Services** | Advisory, audit, implementation | Penetration testing, audit firms |
| **Hardware Supply** | Physical equipment supply and maintenance | Servers, networking equipment, HSMs |
| **Data Processing** | Processing of regulated or sensitive data | Payment processors, data bureaus |
| **Other** | Any other service with NCII impact | [Specify] |

---

## 5. Act 854 Licence Status

*The Cyber Security Act 2024 (Act 854) introduces a licensing regime for certain cyber security service providers. This section records each vendor's status under that regime.*

### 5.1 Licence Status Definitions

| Status | Definition |
|---|---|
| **Licensed** | The vendor holds a valid licence issued by NACSA under Act 854 for the relevant cyber security service(s) they provide. |
| **Exempt** | The vendor falls within a class of entities explicitly exempted from the Act 854 licensing requirement (e.g., certain in-house providers or foreign entities under bilateral arrangements). |
| **Not Applicable** | The vendor does not provide cyber security services as defined under Act 854 and the licensing requirement does not apply to the nature of their services. |
| **Pending** | Licensing application submitted; status under verification. |
| **Non-Compliant** | Vendor provides cyber security services but does not hold a valid licence. Escalation action required. |

### 5.2 Licence Detail Table

*Maintain the following details for all vendors with "Licensed" status.*

| Vendor ID | Vendor Name | NACSA Licence Number | Licence Category | Licence Issue Date | Licence Expiry Date | Verification Date | Verified By |
|---|---|---|---|---|---|---|---|
| VTP-[YYYY]-XXX | [Vendor Name] | [NACSA-LIC-XXXX-XXXX] | [Category per NACSA schedule] | [DD/MM/YYYY] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name] |

### 5.3 Non-Compliant Vendor Escalation

*Any vendor identified as "Non-Compliant" shall trigger the following process:*

1. Immediate notification to CISO and Procurement.
2. Formal written notice to the vendor requiring licence acquisition within **[30] calendar days**.
3. If unresolved within the notice period, escalation to the Board Risk Committee and assessment of contract suspension.
4. Notification to NACSA where required under Act 854 obligations.

---

## 6. Access Level and Scope

*This section documents the nature and extent of each vendor's access to NCII systems, enabling least-privilege reviews and access recertification exercises.*

### 6.1 Access Level Definitions

| Access Level | Description |
|---|---|
| **None** | No direct system access; vendor operates entirely via [Organisation Name] staff intermediaries. |
| **Read-Only** | Vendor can view but not modify data or system configurations. |
| **Read-Write** | Vendor can read and modify data or system configurations within a defined scope. |
| **Administrative** | Vendor holds elevated or privileged access, including user management or configuration control. |
| **Full Systems Access** | Vendor has unrestricted or near-unrestricted access to the defined NCII environment (highest risk tier). |

### 6.2 Access Scope Detail

*For each vendor, document the specific systems, data classifications, and environments to which access is granted. Principle of least privilege must be applied and evidenced.*

| Vendor ID | Systems Accessible | Data Classifications Accessible | Environment | Access Method | MFA Required | PAM/Privileged Access Controls | Access Review Frequency |
|---|---|---|---|---|---|---|---|
| VTP-[YYYY]-XXX | [System Name(s)] | [Confidential / Restricted / Public] | [Production / UAT / Development] | [VPN / Direct / API / Jump Host] | [Yes / No] | [PAM Tool / None] | [Monthly / Quarterly / Annual] |

### 6.3 Access Recertification Schedule

*Access shall be formally recertified at the frequency specified for each vendor. The CISO or delegated authority shall sign off recertification evidence.*

| Vendor ID | Last Recertification Date | Next Recertification Due | Recertified By | Outcome |
|---|---|---|---|---|
| VTP-[YYYY]-XXX | [DD/MM/YYYY] | [DD/MM/YYYY] | [Name, Title] | [Access Confirmed / Access Modified / Access Revoked] |

---

## 7. Contract Expiry Date

*This section provides a consolidated view of contract lifecycle dates to support proactive renewal management and timely security reassessment scheduling.*

### 7.1 Contract Lifecycle Summary

*Contracts approaching expiry within 90 days shall be flagged for review. Procurement is responsible for triggering renewal assessments in advance of the expiry date.*

| Vendor ID | Vendor Name | Contract Reference | Contract Type | Contract Start | Contract Expiry | Days to Expiry | Renewal Status | Legal Owner |
|---|---|---|---|---|---|---|---|---|
| VTP-[YYYY]-XXX | [Vendor Name] | [PO / Contract No.] | [MSA / SLA / NDA / Other] | [DD/MM/YYYY] | [DD/MM/YYYY] | [Auto-calculated] | [Renewal Initiated / Not Started / Renewed] | [Name] |

### 7.2 Contract Expiry Escalation Thresholds

| Threshold | Action Required |
|---|---|
| **90 days to expiry** | Procurement to initiate renewal process; security team notified. |
| **60 days to expiry** | CISO review of continued vendor access and updated security assessment if outstanding. |
| **30 days to expiry** | Escalation to executive sponsor; contract renewal or access termination plan confirmed. |
| **Expired (no renewal)** | Immediate access revocation; vendor entry updated to "Offboarded". |

### 7.3 Cyber Security Contractual Requirements

*All vendor contracts must include the following minimum cyber security clauses. Compliance against each is to be verified at contract execution and renewal.*

| Requirement | Act 854 Reference | Compliant (Y/N) | Notes |
|---|---|---|---|
| Right to audit vendor security controls | s18 | [Y/N] | [Notes] |
| Obligation to notify [Organisation Name] of security incidents within [24] hours | s28 | [Y/N] | [Notes] |
| Data breach and incident response obligations | s28 | [Y/N] | [Notes] |
| Compliance with NCII security standards | s18 | [Y/N] | [Notes] |
| Sub-contractor disclosure and approval | s18 | [Y/N] | [Notes] |
| Data return and secure deletion upon termination | [PDPA / s18] | [Y/N] | [Notes] |

---

## 8. Last Security Assessment

*This section records the details of security assessments conducted against each vendor, ensuring that the risk posture of the third-party supply chain is regularly validated.*

### 8.1 Assessment Register

| Vendor ID | Vendor Name | Assessment Type | Assessment Date | Conducted By | Assessment Scope | Findings (High/Med/Low) | Remediation Deadline | Remediation Status | Next Assessment Due |
|---|---|---|---|---|---|---|---|---|---|
| VTP-[YYYY]-XXX | [Vendor Name] | [Questionnaire / On-site Audit / Penetration Test / Document Review / ISO Cert Review] | [DD/MM/YYYY] | [Internal / External Assessor Name] | [Systems / Processes / Physical / All] | [e.g., 2 High, 3 Medium, 1 Low] | [DD/MM/YYYY] | [Open / In Progress / Closed] | [DD/MM/YYYY] |

### 8.2 Assessment Methodology

*The following assessment types shall be applied based on vendor risk rating. All assessments shall be documented with evidence retained in the ISMS document repository.*

| Vendor Risk Rating | Minimum Assessment Type | Frequency |
|---|---|---|
| **Critical** | On-site audit or independent third-party assessment | Annual (minimum) |
| **High** | Comprehensive questionnaire + evidence review + right-to-audit clause exercised | Annual |
| **Medium** | Standardised security questionnaire + certification review | Annual |
| **Low** | Self-attestation questionnaire + document review | Biennial or upon material change |

### 8.3 Accepted Certifications

*The following third-party certifications may be accepted in lieu of or as a supplement to direct assessment, subject to CISO approval:*

- ISO/IEC 27001:2022 — Information Security Management
- SOC 2 Type II — Security, Availability, and Confidentiality
- PCI DSS (where applicable to payment processing)
- CSA STAR Certification (for cloud service providers)
- [Other certification as accepted by CISO]

*Certification validity must be confirmed at each review cycle. Expired certifications are not acceptable.*

---

## 9. Risk Rating

*This section defines the risk rating methodology applied to each vendor entry and records the rationale and outcome of each risk determination.*

### 9.1 Risk Rating Definitions

| Risk Rating | Criteria |
|---|---|
| **Critical** | Vendor has administrative or full access to core NCII systems; loss of service or a breach would cause immediate, material harm to NCII operations or national security. |
| **High** | Vendor has significant access to NCII systems or processes large volumes of sensitive data; a breach would have serious operational or regulatory impact. |
| **Medium** | Vendor has limited or read-only access to NCII-adjacent systems; a breach would have moderate operational impact. |
| **Low** | Vendor has no direct system access and minimal data exposure; impact of a breach is manageable with minimal NCII disruption. |

### 9.2 Risk Scoring Matrix

*Risk rating is determined by the intersection of **Impact** (consequences of a vendor-related incident) and **Likelihood** (probability based on vendor security posture and access level).*

| | **Likelihood: Low** | **Likelihood: Medium** | **Likelihood: High** |
|---|---|---|---|
| **Impact: Critical** | High | Critical | Critical |
| **Impact: High** | Medium | High | Critical |
| **Impact: Medium** | Low | Medium | High |
| **Impact: Low** | Low | Low | Medium |

### 9.3 Risk Rating Log

| Vendor ID | Vendor Name | Impact Score | Likelihood Score | Composite Risk Rating | Rating Rationale | Rated By | Rating Date | Approved By | Next Rating Review |
|---|---|---|---|---|---|---|---|---|---|
| VTP-[YYYY]-XXX | [Vendor Name] | [Critical / High / Medium / Low] | [High / Medium / Low] | [Critical / High / Medium / Low] | [Brief justification] | [Name, Title] | [DD/MM/YYYY] | [Name, Title] | [DD/MM/YYYY] |

### 9.4 Risk Treatment Actions

*For all vendors rated Critical or High, a risk treatment plan shall be documented below or referenced to the organisation's Risk Register.*

| Vendor ID | Risk Rating | Risk Treatment | Treatment Owner | Target Completion | Status |
|---|---|---|---|---|---|
| VTP-[YYYY]-XXX | [Critical / High] | [Accept / Mitigate / Transfer / Terminate] | [Name, Title] | [DD/MM/YYYY] | [Open / In Progress / Completed] |

---

## 10. Roles and Responsibilities

*This section defines accountability for the maintenance, review, and governance of this register using a RACI framework.*

### 10.1 RACI Matrix

| Activity | CISO | Procurement | IT Security | Risk & Compliance | Legal | Business Unit Head | Board / Audit Committee |
|---|---|---|---|---|---|---|---|
| Maintain and update the register | **A** | R | R | C | C | I | I |
| Onboard new vendor entries | C | **A** | R | C | C | R | — |
| Conduct vendor security assessments | **A** | C | R | C | — | I | I |
| Review and approve risk ratings | **A** | I | R | C | — | I | I |
| Monitor contract expiry dates | I | **A** | I | C | R | I | — |
| Verify Act 854 licence status | **A** | R | C | C | — | I | — |
| Approve access recertification | **A** | — | R | C | — | C | — |
| Escalate non-compliant vendors | **A** | C | C | R | C | I | I |
| Approve quarterly register review | **A** | C | C | C | — | I | I |
| Report to Board / Audit Committee | **A** | — | — | R | — | — | I |

**Legend:** R = Responsible | A = Accountable | C = Consulted | I = Informed

### 10.2 Key Contacts

| Role | Name | Department | Contact |
|---|---|---|---|
| Register Owner (Primary) | [CISO Name] | Cyber Security | [Email] |
| Register Owner (Secondary) | [Procurement Head Name] | Procurement | [Email] |
| IT Security Lead | [Name] | IT Security | [Email] |
| Risk & Compliance Officer | [Name] | Risk & Compliance | [Email] |
| Legal Counsel | [Name] | Legal | [Email] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [DD/MM/YYYY] | [Author Name] | Initial version created |
| [1.1] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |
| [2.0] | [DD/MM/YYYY] | [Author Name] | [Description of changes] |

### 11.2 Scheduled Review Record

| Review Cycle | Review Date | Reviewed By | Changes Made | Next Review Due |
|---|---|---|---|---|
| Q[X] [YYYY] | [DD/MM/YYYY] | [Name, Title] | [Summary of updates / No changes] | [DD/MM/YYYY] |
| Q[X] [YYYY] | [DD/MM/YYYY] | [Name, Title] | [Summary of updates / No changes] | [DD/MM/YYYY] |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | __________________ | [DD/MM/YYYY] |
| Head of Procurement | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Risk Officer / Head of Compliance | [Name] | __________________ | [DD/MM/YYYY] |
| Chief Executive Officer / Authorised Representative | [Name] | __________________ | [DD/MM/YYYY] |

---

## 12. References

*The following regulatory instruments, standards, and internal policies are referenced in or govern this document.*

| Reference | Description |
|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duties of NCII entity owners, including obligations in relation to the management of third-party cyber risks and vendor oversight. |
| **Cyber Security Act 2024 (Act 854), Section 28** | Requirements for the reporting and management of cyber security incidents, including those originating from or involving third-party vendors. |
| **NACSA NCII Sector Security Plan Guidelines** | Sectoral guidelines issued by the National Cyber Security Agency for NCII entity compliance planning. |
| **Personal Data Protection Act 2010 (PDPA)** | Data processing obligations applicable to third parties handling personal data on behalf of [Organisation Name]. |
| **Bank Negara Malaysia Risk Management in Technology (RMiT) Policy** | Applicable to licensed financial institutions; imposes additional vendor and outsourcing risk management requirements. |
| **ISO/IEC 27001:2022 — Annex A Control 5.19** | Information security in supplier relationships. |
| **ISO/IEC 27001:2022 — Annex A Control 5.21** | Managing information security in the ICT supply chain. |
| **[Organisation Name] Information Security Policy** | [Internal document reference] |
| **[Organisation Name] Vendor Management Policy** | [Internal document reference] |
| **[Organisation Name] Third-Party Risk Management Procedure** | [Internal document reference] |

---

## 13. Appendices

### Appendix A — Archived Vendor Entries (Offboarded)

*This appendix retains historical records of vendors that have been fully offboarded. Records are maintained for audit trail and regulatory inspection purposes in accordance with [Organisation Name]'s data retention schedule.*

| Vendor ID | Vendor Name | Services Provided | Offboarding Date | Reason for Offboarding | Access Revocation Confirmed | Archived By |
|---|---|---|---|---|---|---|
| VTP-[YYYY]-XXX | [Vendor Name] | [Services] | [DD/MM/YYYY] | [Contract expired / Relationship terminated / Vendor ceased operations / Other] | [Yes / No — If No, state reason] | [Name, Title] |

---

### Appendix B — Vendor Onboarding Checklist

*Complete this checklist for each new vendor prior to granting any access to NCII systems.*

| # | Onboarding Step | Responsible | Completed | Date | Notes |
|---|---|---|---|---|---|
| 1 | Vendor risk rating determined and documented | CISO / Risk | [ ] | | |
| 2 | Vendor register entry created (Section 3.1) | Procurement | [ ] | | |
| 3 | Act 854 licence status verified | CISO | [ ] | | |
| 4 | Initial security assessment completed | IT Security | [ ] | | |
| 5 | Contract executed with minimum cyber security clauses (Section 7.3) | Legal | [ ] | | |
| 6 | Access scope formally approved (Section 6.2) | CISO | [ ] | | |
| 7 | MFA and access controls provisioned | IT Security | [ ] | | |
| 8 | PAM/privileged access controls configured (where applicable) | IT Security | [ ] | | |
| 9 | Vendor briefed on [Organisation Name] incident reporting obligations | Procurement | [ ] | | |
| 10 | Access recertification schedule set (Section 6.3) | CISO | [ ] | | |

---

### Appendix C — Vendor Offboarding Checklist

*Complete this checklist when terminating a vendor relationship. All steps must be confirmed before a vendor entry is archived.*

| # | Offboarding Step | Responsible | Completed | Date | Notes |
|---|---|---|---|---|---|
| 1 | Contract termination notice issued and acknowledged | Legal / Procurement | [ ] | | |
| 2 | All logical access revoked (accounts disabled/deleted) | IT Security | [ ] | | |
| 3 | All physical access revoked (badges, keys, site access) | Facilities / IT Security | [ ] | | |
| 4 | VPN credentials and certificates revoked | IT Security | [ ] | | |
| 5 | Shared credentials rotated | IT Security | [ ] | | |
| 6 | Data return or secure deletion confirmed in writing | Legal / IT Security | [ ] | | |
| 7 | Final security assessment or closure audit completed | CISO | [ ] | | |
| 8 | Outstanding findings or incidents formally closed | IT Security | [ ] | | |
| 9 | Register entry updated to "Offboarded" and moved to Appendix A | Procurement | [ ] | | |
| 10 | CISO sign-off on offboarding completion | CISO | [ ] | | |

---

### Appendix D — Risk Rating Review Log

*This log captures all formal risk rating reviews and any changes to a vendor's rating between scheduled quarterly reviews.*

| Vendor ID | Vendor Name | Previous Rating | New Rating | Trigger for Review | Reviewed By | Review Date | Approved By |
|---|---|---|---|---|---|---|---|
| VTP-[YYYY]-XXX | [Vendor Name] | [Previous] | [New] | [Quarterly review / Incident / Contract change / Assessment finding] | [Name, Title] | [DD/MM/YYYY] | [Name, Title] |

---

### Appendix E — Definitions and Abbreviations

| Term / Abbreviation | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary legislation governing cyber security in Malaysia. |
| **CISO** | Chief Information Security Officer |
| **GRC** | Governance, Risk, and Compliance |
| **ISMS** | Information Security Management System |
| **MFA** | Multi-Factor Authentication |
| **MSSP** | Managed Security Service Provider |
| **NACSA** | National Cyber Security Agency, Malaysia |
| **NCII** | National Critical Information Infrastructure |
| **PAM** | Privileged Access Management |
| **PDPA** | Personal Data Protection Act 2010 |
| **RMiT** | Risk Management in Technology (BNM Policy Document) |
| **SOC** | Security Operations Centre |
| **SSM** | Suruhanjaya Syarikat Malaysia (Companies Commission of Malaysia) |
| **Third Party** | Any external entity that provides services to or has access to systems operated by [Organisation Name]. |
| **Vendor** | A supplier of goods, services, or technology to [Organisation Name]. |

---

*This document is classified **Confidential**. Unauthorised disclosure is prohibited. For queries regarding this register, contact the CISO at [ciso@organisation.my].*

*— End of Document —*