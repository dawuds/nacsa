# Incident Register

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | SOC Lead |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This Incident Register serves as the authoritative log of all cyber security incidents affecting [Organization Name]'s National Critical Information Infrastructure (NCII) systems and associated digital assets. It supports compliance with the **Cyber Security Act 2024 (Act 854)**, specifically the obligations under **Section 23** (duty to notify NACSA of cyber security incidents) and **Section 26** (duty to take measures in response to cyber security directives), as administered by the **National Cyber Security Agency (NACSA)**.

This register captures incidents at all severity levels, including those below the NACSA mandatory notification threshold, to ensure comprehensive situational awareness, trend analysis, and continuous improvement of the organization's cyber security posture.

### 1.2 Scope

This register applies to:

- All cyber security incidents detected within systems designated as NCII under Act 854
- Incidents affecting information assets, networks, and services operated by or on behalf of [Organization Name]
- Both internally detected and externally reported incidents, regardless of whether they meet the NACSA notification threshold
- Incidents managed by internal Security Operations Centre (SOC) staff, managed security service providers (MSSPs), and third-party incident responders

### 1.3 Out of Scope

- General IT service disruptions with no security nexus
- Routine system maintenance events
- Incidents affecting systems explicitly excluded from the NCII designation

---

## 2. Regulatory Context

*This section identifies the specific legislative and regulatory obligations that this register supports. Review against the latest NACSA guidelines to ensure continued alignment.*

| Legislation / Framework | Clause / Section | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 23 | Duty of NCII sector leads and NCII entities to notify NACSA of cyber security incidents within prescribed timelines |
| Cyber Security Act 2024 (Act 854) | Section 26 | Duty to comply with cyber security directives issued by NACSA following an incident |
| Cyber Security Act 2024 (Act 854) | Section 29 | Power of NACSA to conduct investigations into cyber security incidents |
| [Insert Additional Framework] | [Section / Clause] | [Description of Obligation] |

---

## 3. Incident Classification Framework

*This section defines the classification taxonomy applied to all entries in this register. Classifications must be applied consistently at intake and reviewed as the incident evolves.*

### 3.1 Severity Levels

| Severity Level | Label | Definition | NACSA Notification Required |
|---|---|---|---|
| **P1** | Critical | Confirmed compromise of NCII systems; significant operational or data impact; national security implications | Yes — within [X hours] per NACSA guidelines |
| **P2** | High | Material impact to NCII operations; potential data breach; containment not yet achieved | Yes — assess against NACSA threshold criteria |
| **P3** | Medium | Contained incident; limited operational impact; no confirmed data exfiltration | No — log and monitor |
| **P4** | Low | Attempted attack, near-miss, or minor policy violation; no operational impact | No — log and monitor |

### 3.2 Incident Type Categories

| Code | Category | Examples |
|---|---|---|
| **MAL** | Malware / Ransomware | Ransomware execution, trojan infection, wiper deployment |
| **PHI** | Phishing / Social Engineering | Spear-phishing, business email compromise, vishing |
| **UNA** | Unauthorised Access | Privilege escalation, credential compromise, insider threat |
| **DEN** | Denial of Service | DDoS, service disruption, resource exhaustion |
| **DAT** | Data Breach / Exfiltration | Confirmed or suspected data loss, PII exposure |
| **VUL** | Vulnerability Exploitation | Zero-day exploitation, unpatched CVE abuse |
| **SUP** | Supply Chain | Third-party compromise, software supply chain attack |
| **OTH** | Other | Incidents not captured by above categories |

---

## 4. Incident Register

*This is the primary data table. Each row represents a unique incident. Complete all fields at incident intake; update fields as the incident progresses. Fields marked **[Required]** must be populated within the initial notification window.*

### 4.1 Master Incident Log

| Field | Column Header | Notes |
|---|---|---|
| Unique identifier | Incident ID | Auto-generated or sequential — see Section 4.2 |
| Incident title | Title | Brief descriptive label |
| Severity level | Severity | P1 / P2 / P3 / P4 |
| Incident type | Type | MAL / PHI / UNA / DEN / DAT / VUL / SUP / OTH |
| Detection date/time | Detected (UTC) | Date and time of first detection |
| Detection method | Detection Method | SIEM alert / EDR / User report / Threat intel / External notification |
| Reported by | Reported By | Name or team |
| Affected system(s) | Affected Systems | Hostname, IP, application, or service |
| NCII system affected | NCII System | Yes / No |
| Incident status | Status | Open / Contained / Eradicated / Recovered / Closed |
| NACSA notification status | NACSA Notified | Yes / No / N/A |
| Record owner | Assigned To | SOC analyst or incident commander |

---

**Sample Register Entries (Template Rows — Delete Before Use)**

| Incident ID | Title | Severity | Type | Detected (UTC) | Detection Method | Reported By | Affected Systems | NCII System | Status | NACSA Notified | Assigned To |
|---|---|---|---|---|---|---|---|---|---|---|---|
| INC-2025-0001 | [Incident Title] | [P1–P4] | [Type Code] | [YYYY-MM-DD HH:MM] | [Detection Method] | [Name / Team] | [System Name / IP] | [Yes / No] | [Status] | [Yes / No / N/A] | [Analyst Name] |
| INC-2025-0002 | | | | | | | | | | | |
| INC-2025-0003 | | | | | | | | | | | |

### 4.2 Incident ID Convention

*Incident IDs must be unique and traceable. Apply the following naming convention consistently across all entries.*

**Format:** `INC-[YYYY]-[NNNN]`

- `INC` — Fixed prefix indicating an incident record
- `[YYYY]` — Four-digit calendar year of detection
- `[NNNN]` — Sequential four-digit number, reset annually (e.g., 0001, 0002)

**Example:** `INC-2025-0047`

---

## 5. Incident Detail Records

*For each incident recorded in Section 4.1, a corresponding detail record must be maintained. The subsections below define the required fields for each detail record. Where this register is implemented as a database, each subsection maps to a structured data record linked to the Master Incident Log by Incident ID.*

### 5.1 Detection Date and Method

*Record the precise detection timestamp and the mechanism through which the incident was identified. Accurate detection timestamps are essential for establishing dwell time and meeting NACSA notification windows.*

| Field | Value |
|---|---|
| **Incident ID** | [INC-YYYY-NNNN] |
| **Date / Time Detected (UTC)** | [YYYY-MM-DD HH:MM:SS] |
| **Date / Time Reported to SOC (UTC)** | [YYYY-MM-DD HH:MM:SS] |
| **Detection Source** | [SIEM / EDR / NDR / User Report / External Threat Intel / NACSA Advisory / MSSP / Other] |
| **Detection Tool / Platform** | [Tool Name and Version] |
| **Alert Reference / Rule ID** | [Alert ID or SIEM Rule Name] |
| **Initial Indicator of Compromise (IoC)** | [Hash / IP / Domain / URL / Other — describe] |
| **Estimated Incident Start (UTC)** | [YYYY-MM-DD HH:MM or "Unknown"] |
| **Dwell Time (Estimated)** | [X hours / days — calculated from estimated start to detection] |

---

### 5.2 Incident Classification

*Classify the incident accurately at intake and revise as investigation findings emerge. Classification drives notification obligations and response prioritisation.*

| Field | Value |
|---|---|
| **Incident ID** | [INC-YYYY-NNNN] |
| **Incident Title** | [Descriptive title] |
| **Severity Level** | [P1 / P2 / P3 / P4] |
| **Incident Type** | [MAL / PHI / UNA / DEN / DAT / VUL / SUP / OTH] |
| **Detailed Type Description** | [e.g., "Ransomware — LockBit 3.0 variant"] |
| **Attack Vector** | [External / Internal / Third Party / Unknown] |
| **Threat Actor Attribution (if known)** | [APT Group / Criminal Group / Insider / Unknown] |
| **NCII Sector** | [e.g., Banking and Finance / Energy / Telecommunications] |
| **Classification Last Revised** | [YYYY-MM-DD] |
| **Classification Revised By** | [Name / Role] |

---

### 5.3 Impact Assessment

*Assess and document the actual and potential impact of the incident across operational, data, reputational, and regulatory dimensions. This assessment informs NACSA notification decisions and escalation requirements.*

#### 5.3.1 Systems and Services Impact

| Field | Value |
|---|---|
| **Incident ID** | [INC-YYYY-NNNN] |
| **Affected Systems** | [List hostnames, IPs, applications, services] |
| **Number of Systems Affected** | [Count] |
| **NCII Systems Affected** | [Yes / No — specify system names] |
| **Critical Business Functions Disrupted** | [Yes / No — describe if Yes] |
| **Service Availability Impact** | [Full Outage / Degraded / Unaffected] |
| **Estimated Downtime** | [X hours / minutes / N/A] |
| **Recovery Time Objective (RTO) Met** | [Yes / No / N/A] |

#### 5.3.2 Data Impact

| Field | Value |
|---|---|
| **Data Breach Confirmed** | [Yes / No / Under Investigation] |
| **Data Classification Affected** | [Top Secret / Confidential / Restricted / Public / N/A] |
| **Personal Data Involved** | [Yes / No / Under Investigation] |
| **Estimated Records Affected** | [Count or "Unknown"] |
| **Data Types Affected** | [PII / Financial / Credentials / Intellectual Property / Other] |
| **Data Exfiltration Confirmed** | [Yes / No / Under Investigation] |
| **PDPA Notification Obligation Triggered** | [Yes / No / Under Assessment] |

#### 5.3.3 Overall Impact Rating

| Dimension | Rating (1–5) | Justification |
|---|---|---|
| Operational Impact | [1–5] | [Brief justification] |
| Data Sensitivity Impact | [1–5] | [Brief justification] |
| Reputational Impact | [1–5] | [Brief justification] |
| Regulatory / Legal Impact | [1–5] | [Brief justification] |
| Financial Impact | [1–5] | [Brief justification] |
| **Overall Impact Score** | [Calculated average or weighted score] | |

*Rating scale: 1 = Negligible, 2 = Minor, 3 = Moderate, 4 = Significant, 5 = Severe*

---

### 5.4 Response Actions Taken

*Document all containment, eradication, and recovery actions chronologically. This record forms the evidentiary basis for post-incident review and any NACSA or regulatory enquiry.*

#### 5.4.1 Incident Timeline

*Record all significant events and actions in chronological order.*

| Timestamp (UTC) | Event / Action | Performed By | Notes |
|---|---|---|---|
| [YYYY-MM-DD HH:MM] | Incident detected | [Name / System] | |
| [YYYY-MM-DD HH:MM] | SOC notified | [Name] | |
| [YYYY-MM-DD HH:MM] | Incident declared — severity assigned | [Incident Commander] | |
| [YYYY-MM-DD HH:MM] | [Containment action — e.g., network isolation] | [Name] | |
| [YYYY-MM-DD HH:MM] | [Eradication action — e.g., malware removed] | [Name] | |
| [YYYY-MM-DD HH:MM] | [Recovery action — e.g., system restored from backup] | [Name] | |
| [YYYY-MM-DD HH:MM] | NACSA notified (if applicable) | [Name] | Ref: [NACSA Ticket / Ref No.] |
| [YYYY-MM-DD HH:MM] | Incident closed | [Incident Commander] | |

#### 5.4.2 Containment Actions

*Describe the immediate containment measures applied to limit the spread or impact of the incident.*

- **Containment Strategy Applied:** [Isolation / Shutdown / Traffic Blocking / Account Suspension / Other]
- **Systems Isolated:** [List hostnames or network segments]
- **Accounts Suspended / Credentials Reset:** [List affected accounts]
- **Network Controls Applied:** [Firewall rules added, ACLs modified — reference change records]
- **Evidence Preservation Actions:** [Forensic images taken, log exports completed — reference evidence register]

#### 5.4.3 Eradication Actions

*Document actions taken to remove the threat actor's presence, malicious artefacts, and vulnerabilities exploited.*

- **Malware / Artefacts Removed:** [File paths, hashes, registry keys]
- **Vulnerabilities Patched:** [CVE references, patch references]
- **Persistence Mechanisms Removed:** [Scheduled tasks, startup entries, backdoors]
- **Compromised Accounts Remediated:** [Password resets, MFA enforcement, access reviews]
- **Third-Party Notifications Issued:** [Vendor / MSSP / NACSA — reference Section 5.5]

#### 5.4.4 Recovery Actions

*Document system restoration and return-to-operations activities.*

- **Systems Restored From:** [Backup / Rebuild / Snapshot — date of backup used]
- **Integrity Verification Performed:** [Yes / No — method used]
- **Systems Returned to Production:** [List systems and return timestamps]
- **Enhanced Monitoring Applied Post-Recovery:** [Yes / No — describe]
- **Business Sign-Off for Recovery:** [Name / Role / Date]

---

### 5.5 NACSA Notification Status

*Track compliance with notification obligations under Section 23 of Act 854. All P1 and P2 incidents must be assessed for NACSA notification. Retain all correspondence with NACSA as supporting evidence.*

| Field | Value |
|---|---|
| **Incident ID** | [INC-YYYY-NNNN] |
| **NACSA Notification Required** | [Yes / No / Under Assessment] |
| **Basis for Notification Decision** | [Meets Section 23 threshold / Below threshold — specify criteria applied] |
| **Initial Notification Submitted** | [Yes / No / N/A] |
| **Initial Notification Date / Time (UTC)** | [YYYY-MM-DD HH:MM or N/A] |
| **Notification Submitted By** | [Name / Role] |
| **NACSA Reference / Ticket Number** | [NACSA-XXXX or N/A] |
| **NACSA Acknowledged** | [Yes / No / Pending / N/A] |
| **NACSA Acknowledgement Date** | [YYYY-MM-DD or N/A] |
| **Follow-Up Reports Submitted** | [Yes / No — list dates if Yes] |
| **NACSA Directives Received (s26)** | [Yes / No — describe directive if Yes] |
| **Directive Compliance Status** | [Compliant / In Progress / Not Applicable] |
| **Directive Compliance Deadline** | [YYYY-MM-DD or N/A] |
| **PDPA Notification Required** | [Yes / No / Under Assessment] |
| **PDPA Notification Submitted** | [Yes / No / N/A] |
| **Other Regulatory Notifications** | [BNM / SC / MCMC / Other — specify] |

---

### 5.6 Resolution and Lessons Learned

*Complete this section upon incident closure. Lessons learned must be actioned through the organisation's continuous improvement process. This section is reviewed during the post-incident review (PIR) meeting.*

#### 5.6.1 Resolution Summary

| Field | Value |
|---|---|
| **Incident ID** | [INC-YYYY-NNNN] |
| **Incident Status** | [Closed] |
| **Date / Time Closed (UTC)** | [YYYY-MM-DD HH:MM] |
| **Closed By** | [Incident Commander Name / Role] |
| **Total Incident Duration** | [From detection to closure — X hours / days] |
| **Root Cause (Primary)** | [e.g., Unpatched vulnerability CVE-XXXX-XXXX] |
| **Root Cause (Contributing Factors)** | [e.g., Delayed patch deployment, insufficient network segmentation] |
| **Root Cause Analysis Method** | [Five Whys / Fishbone / Fault Tree / Other] |
| **Post-Incident Review (PIR) Conducted** | [Yes / No] |
| **PIR Date** | [YYYY-MM-DD or N/A] |
| **PIR Report Reference** | [Document ID or N/A] |

#### 5.6.2 Lessons Learned and Improvement Actions

*Each lesson learned must be assigned an owner and tracked to closure.*

| Lesson # | Observation | Category | Recommended Action | Owner | Target Date | Status |
|---|---|---|---|---|---|---|
| LL-01 | [What went well or what failed] | [People / Process / Technology] | [Specific, measurable corrective action] | [Name / Role] | [YYYY-MM-DD] | [Open / In Progress / Closed] |
| LL-02 | | | | | | |
| LL-03 | | | | | | |

#### 5.6.3 Control Improvements Identified

| Control Ref | Control Description | Gap Identified | Improvement Action | Owner | Completion Date |
|---|---|---|---|---|---|
| [Control ID] | [e.g., Patch Management] | [Describe gap] | [Describe improvement] | [Owner] | [YYYY-MM-DD] |
| | | | | | |

---

## 6. Roles and Responsibilities

*This RACI table defines accountability for the Incident Register. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | SOC Lead | SOC Analyst | CISO | IT / Infrastructure | Legal & Compliance | Business Unit Heads | NACSA |
|---|---|---|---|---|---|---|---|
| Create and maintain Incident Register | A/R | R | I | I | I | I | — |
| Log new incident at detection | A | R | I | C | I | I | — |
| Assign severity classification | A | R | C | C | C | I | — |
| Conduct and document impact assessment | A | R | C | R | C | C | — |
| Execute and document response actions | A | R | I | R | I | I | — |
| Assess NACSA notification obligation | C | R | A | I | C | I | — |
| Submit NACSA notification (s23) | C | R | A | I | C | I | I |
| Comply with NACSA directives (s26) | R | R | A | R | C | C | A |
| Conduct post-incident review | A | R | C | C | C | C | — |
| Document lessons learned | A | R | C | C | C | I | — |
| Review and approve register entries | A | — | C | — | C | — | — |
| Periodic register review | A | — | C | — | C | — | — |

---

## 7. Register Governance

### 7.1 Record Retention

*This section defines retention obligations for incident records and supporting evidence.*

| Record Type | Minimum Retention Period | Basis | Storage Location |
|---|---|---|---|
| Incident Register entries | 7 years from incident closure | Act 854 / BNM RMiT obligation | [System / Platform Name] |
| NACSA notification correspondence | 7 years | Act 854 s23 | [System / Platform Name] |
| Forensic evidence and artefacts | [Specify period] | Legal hold / internal policy | [Evidence storage location] |
| Post-incident review reports | 7 years | Internal policy | [System / Platform Name] |
| Lessons learned action records | Until closure + 3 years | Internal policy | [System / Platform Name] |

### 7.2 Access Controls

*Access to this register must be restricted to authorised personnel on a need-to-know basis, consistent with the Confidential classification.*

| Role | Access Level | Justification |
|---|---|---|
| SOC Lead | Full read/write | Register owner and approver |
| SOC Analysts | Read/write (own entries) | Operational incident management |
| CISO | Full read | Oversight and governance |
| Legal & Compliance | Read (relevant fields) | Regulatory notification assessment |
| Internal Audit | Read (audit scope) | Periodic assurance review |
| NACSA | As directed under s29 | Regulatory access during investigation |
| All Others | No access | Confidential classification |

### 7.3 Quality Assurance

- All new entries must be reviewed by the SOC Lead within **[X hours]** of creation
- Severity classifications must be validated against the framework in Section 3.1
- NACSA notification fields must be completed within the prescribed notification window
- The SOC Lead conducts a completeness review of all open records on a **[daily / weekly]** basis
- The CISO reviews a summary of closed incidents on a **[monthly]** basis

---

## 8. Review and Approval

### 8.1 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial document creation |
| | | | |

### 8.2 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| SOC Lead | [Name] | | [YYYY-MM-DD] |
| CISO | [Name] | | [YYYY-MM-DD] |
| Head of Legal & Compliance | [Name] | | [YYYY-MM-DD] |
| [Additional Approver if required] | [Name] | | [YYYY-MM-DD] |

---

## 9. References

| Reference | Document / Clause | Relevance to This Register |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 23 | Mandatory notification duty — triggers NACSA Notification Status fields |
| Cyber Security Act 2024 (Act 854) | Section 26 | Directive compliance duty — tracked in NACSA Notification Status fields |
| Cyber Security Act 2024 (Act 854) | Section 29 | NACSA investigative powers — informs evidence preservation obligations |
| NACSA NCII Sector Framework | [Version / Date] | NCII designation and sector-specific obligations |
| Personal Data Protection Act 2010 (Act 709) | Section 12 | Data breach notification obligations — referenced in impact assessment |
| BNM Risk Management in Technology (RMiT) | Para 10.0 | Cyber incident management requirements for financial institutions |
| [Organization Name] Cyber Security Incident Response Plan | [Document ID] | Parent procedure governing incident response activities |
| [Organization Name] Business Continuity Plan | [Document ID] | Recovery and continuity obligations referenced in response actions |
| [Organization Name] Evidence Handling Procedure | [Document ID] | Forensic evidence preservation requirements |

---

## Appendices

### Appendix A — NACSA Notification Threshold Criteria

*Complete this appendix with the organisation's interpretation of the Section 23 notification threshold as communicated by NACSA or the applicable NCII Sector Lead. Update when NACSA issues revised guidance.*

**Incidents that MUST be notified to NACSA include (but are not limited to):**

- [ ] [Insert NACSA-defined threshold criterion 1 — e.g., confirmed compromise of NCII systems]
- [ ] [Insert NACSA-defined threshold criterion 2 — e.g., incident causing service disruption exceeding X hours]
- [ ] [Insert NACSA-defined threshold criterion 3 — e.g., suspected state-sponsored attack]
- [ ] [Insert NACSA-defined threshold criterion 4]
- [ ] [Add additional criteria as published by NACSA]

**Notification Timeline:**

| Stage | Deadline | Responsible Party |
|---|---|---|
| Initial notification to NACSA | Within [X hours] of detection | SOC Lead |
| Follow-up / progress report | Within [X hours / days] | SOC Lead |
| Final incident report | Within [X days] of closure | CISO |

---

### Appendix B — Incident Register Field Definitions

*This appendix provides authoritative definitions for all fields used in the Incident Register to ensure consistent data entry across all SOC personnel.*

| Field Name | Definition | Permitted Values / Format |
|---|---|---|
| Incident ID | Unique identifier assigned at intake | INC-YYYY-NNNN |
| Severity | Priority classification based on impact and urgency | P1 / P2 / P3 / P4 |
| Incident Type | Category of the incident based on attack vector or threat type | MAL / PHI / UNA / DEN / DAT / VUL / SUP / OTH |
| Detected (UTC) | Date and time the incident was first identified, in UTC | YYYY-MM-DD HH:MM:SS |
| NCII System | Whether the affected system is designated as NCII under Act 854 | Yes / No |
| NACSA Notified | Whether a formal notification has been submitted to NACSA | Yes / No / N/A |
| Status | Current lifecycle state of the incident | Open / Contained / Eradicated / Recovered / Closed |
| [Add additional fields as required] | | |

---

### Appendix C — Incident Response Contact Directory

*Maintain current contact details for all internal and external parties involved in incident response. Review and update quarterly.*

| Role / Organisation | Name | Primary Contact | Secondary Contact | Availability |
|---|---|---|---|---|
| SOC Lead | [Name] | [Email / Phone] | [Email / Phone] | 24/7 |
| CISO | [Name] | [Email / Phone] | [Email / Phone] | Business hours / On-call |
| Legal Counsel | [Name] | [Email / Phone] | [Email / Phone] | Business hours |
| NACSA Incident Reporting | CyberSecurity Malaysia / NACSA | [NACSA published contact] | | 24/7 |
| MSSP / IR Retainer | [Vendor Name] | [Email / Phone] | [Email / Phone] | [SLA hours] |
| Forensics Provider | [Vendor Name] | [Email / Phone] | [Email / Phone] | [SLA hours] |
| BNM (if applicable) | Bank Negara Malaysia | [BNM published contact] | | Business hours |
| [Add additional contacts] | | | | |

---

### Appendix D — NCII Systems Inventory Reference

*This appendix cross-references the systems in scope for this register. Maintain alignment with the organisation's official NCII system inventory as registered with NACSA.*

| System Name | Hostname / IP Range | NCII Designation | Sector | System Owner | Last Verified |
|---|---|---|---|---|---|
| [System Name] | [Hostname / CIDR] | [Yes / No] | [NCII Sector] | [Owner Name] | [YYYY-MM-DD] |
| | | | | | |

*Reference Document: [Organization Name] NCII Asset Register — [Document ID]*

---

*End of Document — [Organization Name] Incident Register v1.0*

*This document is classified **Confidential**. Unauthorised disclosure is prohibited under [Organization Name]'s information classification policy and may constitute an offence under the Cyber Security Act 2024 (Act 854).*