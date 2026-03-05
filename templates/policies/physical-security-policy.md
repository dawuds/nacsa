# Physical Security Policy

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Facilities Manager / Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organisation Name]
**Department:** [Department Name]
**Document Status:** [Draft / Under Review / Approved]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Definitions](#2-definitions)
3. [Policy Statements and Principles](#3-policy-statements-and-principles)
4. [Data Centre Access Controls](#4-data-centre-access-controls)
5. [Visitor Management](#5-visitor-management)
6. [Environmental Controls](#6-environmental-controls)
7. [Equipment Disposal Procedures](#7-equipment-disposal-procedures)
8. [Physical Security Monitoring](#8-physical-security-monitoring)
9. [Clean Desk and Clear Screen Policy](#9-clean-desk-and-clear-screen-policy)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Non-Compliance and Disciplinary Action](#11-non-compliance-and-disciplinary-action)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section explains why this policy exists and what regulatory obligations it fulfils. Tailor language to reflect the organisation's operational context as a designated National Critical Information Infrastructure (NCII) entity.*

This Physical Security Policy establishes the requirements and controls governing the physical protection of [Organisation Name]'s information systems, infrastructure, facilities, and assets designated as National Critical Information Infrastructure (NCII) under the **Cyber Security Act 2024 (Act 854)**. The policy is designed to prevent unauthorised physical access, damage, theft, interference, and disruption to NCII systems and supporting environments.

This policy supports [Organisation Name]'s obligation to implement appropriate physical security measures in accordance with **Section 18 of Act 854**, which mandates NCII entities to put in place technical and organisational measures proportionate to the risks posed to their critical information infrastructure. Physical security forms an integral layer of [Organisation Name]'s defence-in-depth security posture.

### 1.2 Scope

*Define clearly what facilities, assets, and personnel are covered. Avoid ambiguity — auditors will test scope boundaries.*

This policy applies to:

**Facilities and Assets:**
- All data centres, server rooms, and communications rooms operated or leased by [Organisation Name]
- Disaster Recovery (DR) sites and secondary processing facilities
- Network demarcation points, cable rooms, and telecommunications infrastructure
- End-user workspaces, offices, and shared areas where NCII data is processed or accessed
- Any third-party co-location facilities hosting [Organisation Name] NCII assets

**Personnel:**
- All permanent employees of [Organisation Name]
- Contractors, consultants, and temporary staff with access to [Organisation Name] premises
- Third-party vendors and service providers performing on-site work
- Visitors granted temporary access to controlled areas

**Exclusions:**
- [List any facilities or asset types explicitly excluded, e.g., retail branches below a defined tier, if applicable]

### 1.3 Regulatory Context

*Reference the specific legislative obligations that make this policy mandatory. Cross-reference with any subsidiary regulations or guidelines issued by NACSA.*

| Regulation | Clause / Section | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities must implement physical and environmental security measures commensurate with identified risks |
| Cyber Security Act 2024 (Act 854) | Section 26 | Duty to comply with codes of practice and standards issued by the Chief Executive of NACSA |
| [NACSA NCII Sector Security Plan Guidelines] | [Relevant Clause] | [Description of obligation] |
| [ISO/IEC 27001:2022] | Annex A, Controls 7.1–7.14 | Physical and environmental security controls (adopted as baseline reference) |
| [Internal Reference Standard, if any] | [Clause] | [Description] |

---

## 2. Definitions

*Define all technical and policy terms used throughout this document. Consistent terminology is critical for audit evidence and staff understanding.*

| Term | Definition |
|---|---|
| **NCII** | National Critical Information Infrastructure — as designated by the Minister under Section 6 of Act 854 |
| **Data Centre** | A dedicated facility housing servers, networking equipment, and storage systems classified as NCII assets |
| **Controlled Area** | Any physical space requiring authorised access, including data centres, server rooms, and secure offices |
| **Restricted Area** | The highest classification of physical zone within [Organisation Name], housing core NCII systems; access limited to a defined minimum set of personnel |
| **Visitor** | Any individual not employed by [Organisation Name] who requires temporary access to [Organisation Name] premises |
| **Clean Desk** | A practice requiring that sensitive materials are secured and not left unattended on workstations |
| **Clear Screen** | A practice requiring that unattended screens are locked or blank to prevent unauthorised viewing |
| **CISO** | Chief Information Security Officer |
| **Facilities Manager** | The individual responsible for the physical management and maintenance of [Organisation Name] premises |
| **CCTV** | Closed-Circuit Television — used for surveillance of physical premises |
| **UPS** | Uninterruptible Power Supply — backup power system preventing equipment loss during outages |
| **HVAC** | Heating, Ventilation, and Air Conditioning — environmental control systems for data centre facilities |
| **Media Sanitisation** | The process of securely erasing or destroying data from physical storage media prior to disposal or reuse |
| **Chain of Custody** | A documented record of the handling and transfer of physical assets or evidence |

---

## 3. Policy Statements and Principles

*List the overarching policy commitments that underpin all specific controls in subsequent sections. These statements should be auditable and unambiguous.*

[Organisation Name] is committed to protecting the physical integrity of all NCII assets and supporting infrastructure. The following principles govern this policy:

**3.1 Layered Physical Security**
Physical security controls shall be implemented in concentric layers — perimeter, building, floor, and room level — ensuring that compromise of one layer does not grant unrestricted access to NCII assets.

**3.2 Least Privilege Access**
Physical access to controlled and restricted areas shall be granted on a need-to-access basis, commensurate with an individual's role and operational requirements. Access rights shall be reviewed regularly and revoked promptly when no longer required.

**3.3 Environmental Resilience**
NCII facilities shall be equipped with environmental controls sufficient to sustain operations and protect equipment from fire, flood, power failure, and extreme temperature events.

**3.4 Secure Disposal**
All equipment, media, and physical assets containing or having contained NCII data shall be disposed of through approved, documented, and auditable processes that prevent data recovery.

**3.5 Continuous Monitoring**
Physical security monitoring shall be active, recorded, and reviewed on a risk-based schedule to detect and respond to physical security incidents in a timely manner.

**3.6 Accountability and Audit**
All physical access events to controlled and restricted areas shall be logged and retained for a minimum period as defined in Section 8 of this policy, to support audit and incident investigation requirements.

**3.7 Compliance**
Non-compliance with this policy may result in disciplinary action, including termination of employment or engagement, and may constitute a breach of [Organisation Name]'s legal obligations under Act 854.

---

## 4. Data Centre Access Controls

*This section defines the physical access control framework for data centres and server rooms hosting NCII assets. Specify zone classification, access methods, provisioning and revocation procedures, and escort requirements.*

### 4.1 Physical Zone Classification

[Organisation Name] classifies physical areas into the following security zones:

| Zone | Classification | Description | Examples |
|---|---|---|---|
| Zone 0 | Public | Open access, no controls | Lobby, reception |
| Zone 1 | General | Standard employee badge access | Office floors, meeting rooms |
| Zone 2 | Controlled | Restricted badge access; logged | IT offices, network rooms |
| Zone 3 | Restricted | Dual-factor access; logged; CCTV | Data centre floor, server rooms |
| Zone 4 | High Security | Dual-person access; biometric; CCTV | Core NCII infrastructure cabinets |

*Amend zone classifications to reflect the actual physical layout and risk profile of [Organisation Name]'s facilities.*

### 4.2 Access Control Methods

Physical access to Zone 3 and Zone 4 areas shall be protected by the following controls:

- **Proximity card / smart card** access integrated with the organisation's identity management system
- **Personal Identification Number (PIN)** or **biometric authentication** (fingerprint / iris scan) for Zone 4 areas
- **Mantrap / airlock vestibule** at the primary entrance to the data centre, preventing tailgating
- **Anti-tailgating sensors** or turnstiles where mantrap configuration is not feasible
- All access control hardware shall be evaluated for tamper resistance and connected to a centralised Access Control System (ACS)

### 4.3 Access Provisioning

| Step | Action | Responsible Party |
|---|---|---|
| 1 | Business justification submitted by requesting manager | Line Manager |
| 2 | Approval from CISO or designated delegate | CISO |
| 3 | Facilities Manager provisions physical access credential | Facilities Manager |
| 4 | Personnel briefed on physical security obligations | Security team |
| 5 | Access rights recorded in Physical Access Register | Facilities Manager |

- Access to Zone 3 and Zone 4 shall require written approval from the CISO
- Temporary access shall be time-limited and automatically expired in the ACS
- Emergency access procedures are defined in Appendix A

### 4.4 Access Reviews

- Physical access rights shall be reviewed **quarterly** for Zone 3 and Zone 4 areas
- The Facilities Manager shall produce an access report and present it to the CISO
- Access rights shall be revoked within **[X] business hours** of an employee's termination or role change
- Results of access reviews shall be documented and retained for **[X] years**

### 4.5 Key and Credential Management

| Item | Requirement |
|---|---|
| Physical keys | Issued with numbered tags; logged in Key Register; master keys stored in tamper-evident safe |
| Access cards | Personalised, non-transferable; reported lost immediately; deactivated within [X] hours of report |
| PINs/biometrics | Individualised; not shared; changed upon suspected compromise |
| Combination locks | Codes changed at least [annually / upon personnel change] |

*Populate the requirements in the table above based on [Organisation Name]'s actual key management procedures.*

### 4.6 Server Cabinet and Rack Security

- Individual server cabinets and racks in Zone 3 and Zone 4 shall be locked when not in active maintenance
- Cabinet keys shall be managed under the Key Register in Section 4.5
- Open-frame racks in shared co-location environments shall be caged and locked separately
- A record of cabinet access for maintenance purposes shall be maintained in the Equipment Access Log (Appendix B)

---

## 5. Visitor Management

*This section governs the management of all non-employees who require access to [Organisation Name] controlled premises. A robust visitor management process is essential to demonstrate compliance with physical access control requirements under Act 854.*

### 5.1 Visitor Categories

| Category | Description | Maximum Access Level |
|---|---|---|
| Business Guest | External stakeholder, auditor, regulator | Zone 1 (escorted) |
| Vendor / Contractor | Third-party performing work on premises | Zone 2 (escorted); Zone 3 with approval |
| Maintenance Personnel | Facilities, HVAC, UPS engineers | Zone 3 (escorted at all times) |
| Regulator / Auditor | NACSA, BNM, or other competent authority | As requested; logged |

### 5.2 Pre-Registration Requirements

- All visitors to Zone 2 and above must be **pre-registered** at least **[X] business days** in advance
- Pre-registration requires: full name, identification type and number, organisation, purpose of visit, and sponsoring employee
- The sponsoring employee is responsible for the conduct of their visitor throughout the visit
- Regulatory visitors and auditors shall be processed in accordance with [Organisation Name]'s Regulatory Engagement Procedure

### 5.3 Visitor Check-In Procedure

1. Visitor presents government-issued photo identification at reception
2. Reception verifies identity against the pre-registration record
3. Visitor signs the **Visitor Register** (name, ID number, organisation, time in, purpose)
4. A timed visitor badge is issued and must be worn visibly at all times
5. Sponsoring employee is notified and must collect the visitor from reception
6. Visitor is briefed verbally on applicable security rules (no photography, escorted movement, clean desk, etc.)

### 5.4 Escorting Requirements

- Visitors in Zone 2, Zone 3, and Zone 4 areas **must be accompanied by an authorised escort at all times**
- The escort must maintain visual contact with the visitor throughout the visit
- Visitors must not be left unattended in any controlled or restricted area
- Unescorted visitors found in controlled areas shall be treated as a **physical security incident** (see Section 8.4)

### 5.5 Visitor Check-Out Procedure

1. Escort accompanies visitor to reception upon completion of visit
2. Visitor badge is collected and invalidated
3. Visitor signs out of the Visitor Register (time out recorded)
4. Any access credentials issued temporarily are revoked immediately upon departure

### 5.6 Visitor Record Retention

- Visitor registers and associated records shall be retained for a minimum of **[X] years**
- Records shall be available for inspection upon request by NACSA or other competent authorities
- Digital visitor management systems (where used) shall produce audit logs meeting the same retention requirements

### 5.7 Contractor and Vendor On-Site Work

- Contractors performing work within Zone 3 or Zone 4 must hold a valid **Vendor Access Agreement** approved by the CISO
- Background verification requirements for on-site contractors are specified in [Reference: Third-Party Security Policy]
- All contractor tools, equipment, and bags are subject to inspection upon entry and exit from restricted areas
- Contractors must sign a **Non-Disclosure Agreement (NDA)** and the **Physical Security Acknowledgement Form** (Appendix C) prior to first access

---

## 6. Environmental Controls

*This section defines the environmental protection requirements for facilities housing NCII assets. Environmental controls are a prerequisite for operational continuity and regulatory compliance. Address fire, flooding, power, temperature, humidity, and related hazards.*

### 6.1 Fire Detection and Suppression

| Control | Requirement | Inspection Frequency |
|---|---|---|
| Smoke / heat detectors | Installed throughout data centre ceiling and under raised floor | [Quarterly] |
| Early Warning Fire Detection (EWFD) | VESDA or equivalent aspirating system for Zone 3 and Zone 4 | [Annually] |
| Fire suppression system | Gaseous suppression (e.g., FM-200 / Novec 1230) — not water-based in server areas | [Annually] |
| Portable fire extinguishers | CO₂ extinguishers positioned at data centre entry points | [Annually] |
| Fire alarm panel | Monitored 24/7; connected to building management system and external fire service | [As per BOMBA requirement] |
| Emergency signage | Exit routes clearly marked and illuminated | [Quarterly] |

- Fire suppression system discharge shall trigger automatic shutdown of HVAC systems to prevent gas dispersal
- Fire drills shall be conducted at least [annually] and records maintained
- All data centre personnel shall be trained in fire safety procedures

### 6.2 Flood and Water Ingress Protection

- Data centres shall not be located in basement levels unless flood mitigation controls (waterproof seals, raised floors, sump pumps) are in place and documented
- Raised flooring shall be maintained at a minimum height of **[X] cm** above the structural floor
- Water leak detection sensors shall be installed under raised floors and around HVAC condensate lines
- Alerts from water leak sensors shall trigger immediate notification to the Facilities Manager and on-call NCII operations team
- [Organisation Name] shall assess flood risk annually as part of the Physical Security Risk Assessment (Appendix D)

### 6.3 Power Supply and Resilience

| Component | Specification | Maintenance Frequency |
|---|---|---|
| Uninterruptible Power Supply (UPS) | N+1 redundancy; minimum [X] minutes runtime at full load | [Quarterly] |
| Generator | Diesel/gas generator with automatic transfer switch; minimum [X] hours fuel autonomy | [Monthly load test; Annual full test] |
| Power Distribution Units (PDUs) | Dual-feed PDUs for all critical servers; load balanced | [Quarterly] |
| Utility feeds | Dual utility feeds from separate substations where available | [Annual review of utility provider SLA] |
| Power monitoring | Continuous monitoring via DCIM or BMS with alerting | Real-time |

- UPS and generator tests shall be documented and records retained for **[X] years**
- Any power anomaly events (outages, voltage fluctuations) shall be logged in the Environmental Incident Log
- Critical systems shall undergo a **power continuity risk assessment** annually

### 6.4 Temperature and Humidity Control

- Data centre operating environment shall be maintained within the following parameters:

| Parameter | Target Range | Alert Threshold |
|---|---|---|
| Temperature | 18°C – 27°C | < 16°C or > 30°C |
| Relative Humidity | 45% – 60% RH | < 40% RH or > 65% RH |
| Dew Point | 5.5°C – 15°C | Outside range |

- Temperature and humidity shall be monitored **continuously** via sensors connected to the Building Management System (BMS) or DCIM platform
- HVAC systems shall be maintained under a planned preventive maintenance schedule
- HVAC maintenance records shall be retained for **[X] years**
- Redundant HVAC units (N+1 minimum) shall be in place for Zone 3 and Zone 4 areas

### 6.5 Physical Access to Environmental Infrastructure

- Access to power distribution panels, UPS rooms, generator rooms, and HVAC plant rooms shall be restricted to authorised personnel only
- These areas shall be designated as Zone 2 or Zone 3 as appropriate and subject to the access controls in Section 4

### 6.6 Cabling and Physical Infrastructure Security

- All power and data cabling within data centres shall be routed through cable trays, conduits, or raised floors to protect against accidental damage and unauthorised interference
- External cabling ingress points (entry glands) shall be sealed and labelled
- Cable management shall be documented in a **Cable Register** maintained by the Facilities Manager
- Unused cable ports on switches and patch panels shall be physically blanked

---

## 7. Equipment Disposal Procedures

*This section defines the mandatory procedures for the secure decommissioning, sanitisation, and physical disposal of all equipment and media that has processed, stored, or transmitted NCII data. Inadequate disposal is a common audit finding and a significant data security risk.*

### 7.1 Scope of Equipment Covered

This section applies to all physical assets that have hosted or processed NCII data, including but not limited to:

- Servers, storage arrays, and backup tape libraries
- Network equipment (routers, switches, firewalls)
- End-user devices (laptops, desktops, tablets, smartphones)
- Portable storage media (USB drives, external HDDs, optical disks)
- Printed documents and paper records containing sensitive information
- Decommissioned HVAC units, UPS systems, and other infrastructure with embedded data logging

### 7.2 Equipment Decommissioning Approval

| Step | Action | Responsible |
|---|---|---|
| 1 | Asset owner submits Decommission Request Form (Appendix E) | Asset Owner / Line Manager |
| 2 | IT Manager verifies asset and determines data classification | IT Manager |
| 3 | CISO approves disposal method for NCII-classified assets | CISO |
| 4 | Facilities Manager coordinates logistics of physical removal | Facilities Manager |

### 7.3 Data Sanitisation Standards

All equipment shall undergo data sanitisation appropriate to its classification before physical disposal or reuse:

| Data Classification | Sanitisation Method | Standard Reference |
|---|---|---|
| NCII / Confidential | Cryptographic erasure + physical destruction (degaussing / shredding) | NIST SP 800-88 Rev.1; [NACSA Guideline, if published] |
| Internal | Secure overwrite (minimum 3-pass) or degaussing | NIST SP 800-88 Rev.1 |
| Public | Standard format | — |
| Physically damaged media | Physical destruction (shredding / incineration) regardless of classification | — |

- Sanitisation shall be **witnessed and certified** by a minimum of **two authorised personnel**
- A **Media Sanitisation Certificate** (Appendix F) shall be completed for each item
- Certificates shall be retained for **[X] years** and made available to auditors on request

### 7.4 Approved Disposal Methods and Vendors

- Physical destruction services must be performed by a **pre-approved disposal vendor** holding appropriate certification (e.g., MS ISO/IEC 27001, SIRIM certification, or equivalent)
- The vendor must provide a **Certificate of Destruction** for each disposal engagement
- Vendor evaluation and approval is conducted by the CISO and reviewed annually
- Approved vendors: [List approved vendors here, or reference Approved Vendor Register]

### 7.5 Chain of Custody

- All assets from point of decommission to point of destruction shall be tracked under a documented **Chain of Custody Record** (Appendix G)
- Assets must not be left unattended in unsecured areas during the disposal process
- Transport to disposal facilities must use tamper-evident packaging or sealed containers
- [Organisation Name] staff or an authorised representative shall witness physical destruction where feasible

### 7.6 Paper and Physical Record Disposal

- Documents classified as Internal, Confidential, or NCII shall be disposed of using **cross-cut shredders** located in secure office areas, or placed in **locked confidential waste bins**
- Confidential waste bins shall be emptied by the approved disposal vendor under the Chain of Custody process
- General waste bins shall **not** be used for any document disposal above Public classification

---

## 8. Physical Security Monitoring

*This section defines the surveillance, logging, alerting, and incident response requirements for physical security events. Monitoring evidence is critical for regulatory compliance and forensic investigations.*

### 8.1 CCTV Surveillance

| Requirement | Specification |
|---|---|
| Coverage | All entry/exit points to Zone 2, Zone 3, Zone 4 areas; data centre floor; server room interiors; loading docks |
| Camera resolution | Minimum [1080p / 4MP] with sufficient clarity for facial recognition at entry points |
| Recording | Continuous, 24/7 recording |
| Retention period | Minimum **[90 days]** for Zone 3 and Zone 4 footage; **[30 days]** for Zone 1 and Zone 2 |
| Storage | Secured, tamper-evident, separate from primary network |
| Access to footage | Restricted to CISO, Facilities Manager, Human Resources (for investigations), and competent authorities |
| Signage | CCTV in operation notices displayed at all monitored area entrances in compliance with PDPA 2010 |

- CCTV systems shall be tested for functionality **monthly**
- Any CCTV outage affecting Zone 3 or Zone 4 coverage shall be treated as a **security incident** and reported immediately
- CCTV footage is subject to the PDPA 2010 and shall only be accessed or shared in accordance with [Organisation Name]'s Personal Data Protection Policy

### 8.2 Access Control System Logging

- The Access Control System (ACS) shall log all access attempts (successful and failed) for Zone 2, Zone 3, and Zone 4 areas
- Logs shall capture: timestamp, individual identifier, access point, access result (granted/denied)
- ACS logs shall be retained for a minimum of **[X] years**
- ACS logs shall be treated as security audit logs and protected from unauthorised modification or deletion

### 8.3 Security Guard and Patrol Requirements

| Requirement | Details |
|---|---|
| On-site guards | [24/7 / Business hours only] at primary data centre facility |
| Patrol schedule | [Frequency and route — e.g., hourly perimeter patrols; random additional patrols] |
| Guard log | Guards maintain a physical Patrol Log recording patrol times, observations, and incidents |
| Competency | Guards shall have completed [Organisation Name]'s physical security briefing; vendor guards to hold valid security licence |

### 8.4 Physical Security Incident Response

*Define the immediate response steps for physical security incidents. This should align with [Organisation Name]'s broader Incident Response Policy.*

Physical security incidents include, but are not limited to:

- Unauthorised access or attempted access to controlled areas
- Tailgating incidents
- Lost or stolen access credentials
- Theft or loss of equipment
- CCTV or ACS system failures
- Environmental alarms (fire, flood, power)
- Suspicious persons or objects on premises

**Incident Response Steps:**

1. **Detection** — Incident detected via CCTV, ACS alert, guard patrol, or staff report
2. **Containment** — Immediate action to limit access or impact (lock down area, revoke credentials, alert security personnel)
3. **Notification** — Notify Facilities Manager and CISO within **[X] minutes** of detection; escalate to management as required
4. **Evidence Preservation** — Secure CCTV footage, ACS logs, and any physical evidence; do not tamper
5. **Investigation** — Conduct formal investigation in accordance with [Organisation Name]'s Incident Response Policy
6. **Reporting** — If incident involves NCII assets or systems, report to NACSA in accordance with Act 854 Section [relevant section on incident reporting] within the prescribed timeframe
7. **Remediation** — Implement corrective actions; update risk register and controls as required
8. **Post-Incident Review** — Document lessons learned within **[X] days** of incident closure

### 8.5 Physical Security Audits and Inspections

| Activity | Frequency | Conducted By |
|---|---|---|
| Internal physical security walkthrough | Quarterly | Facilities Manager / Security team |
| ACS access review | Quarterly | IT Manager / Facilities Manager |
| CCTV functionality test | Monthly | Facilities Manager |
| Environmental systems inspection | Quarterly | Facilities Manager / approved vendor |
| Annual physical security audit | Annually | CISO / Internal Audit / External Auditor |

- Findings from all audits and inspections shall be documented, tracked, and remediated within agreed timelines
- Critical findings shall be escalated to the CISO and risk committee immediately

---

## 9. Clean Desk and Clear Screen Policy

*The clean desk and clear screen policy reduces the risk of unauthorised access to sensitive information through physical observation, theft, or accidental disclosure. This policy applies to all staff and contractors with access to [Organisation Name] workspaces.*

### 9.1 Clean Desk Requirements

All employees and contractors are required to:

- **At the end of each working day** (or when leaving their workstation for an extended period):
  - [ ] Remove all papers, documents, and portable media from the desk surface
  - [ ] Lock away sensitive documents in designated locked drawers or filing cabinets
  - [ ] Return all keys to their designated secure storage location
  - [ ] Ensure no whiteboard content containing sensitive information is visible
  - [ ] Ensure no printed reports or documents are left in printer trays or output bins

- **Classified document storage:**

| Classification | Storage Requirement |
|---|---|
| Public | Standard desk drawer or filing |
| Internal | Locked drawer or filing cabinet |
| Confidential / NCII | Locked cabinet with restricted key access; or secure room |

- Portable storage media (USB drives, external hard drives) must be locked away when not in active use
- Physical keys must never be left unattended on desks

### 9.2 Clear Screen Requirements

- Workstations, laptops, and other display devices must be **locked or screened** when left unattended, even briefly
- Automatic screen lock shall activate after a maximum of **[X] minutes** of inactivity — enforced by Group Policy or equivalent MDM control
- Staff must manually lock screens (e.g., Windows Key + L) when leaving their workstation for any reason
- Screens must be positioned to prevent **shoulder surfing** — where practical, privacy screens shall be used in open-plan or public-facing environments
- Sensitive information must not be displayed on screens in view of visitors, unauthorised staff, or areas accessible to the public

### 9.3 Printing and Document Handling

- Sensitive documents must be collected from printers **immediately** after printing
- Secure print release (requiring PIN or badge authentication at the printer) shall be used where available
- Documents no longer required shall be disposed of in accordance with Section 7.6 (Paper and Physical Record Disposal)

### 9.4 Enforcement and Monitoring

- Compliance with the clean desk and clear screen policy shall be assessed during **quarterly physical security walkthroughs**
- A **Clean Desk Checklist** (Appendix H) shall be used to document walkthrough findings
- Non-compliance findings shall be reported to the relevant line manager for remediation
- Repeated non-compliance shall be escalated to Human Resources and addressed under [Organisation Name]'s disciplinary procedures

### 9.5 Remote Work Considerations

*Where [Organisation Name] permits remote or hybrid working, extend clean desk and clear screen principles to home offices and remote locations.*

- Employees working remotely with access to NCII data must apply clean desk and clear screen principles at their remote location
- NCII documents must not be printed in unsecured environments
- Use of privacy screens is recommended for remote work in shared or public spaces
- Detailed remote working security requirements are set out in [Reference: Remote Working Policy]

---

## 10. Roles and Responsibilities

*This RACI table assigns accountability for each major activity in this policy. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Facilities Manager | IT Manager | Line Manager | All Staff | Internal Audit |
|---|---|---|---|---|---|---|
| Policy ownership and maintenance | A | C | C | I | I | I |
| Physical access provisioning and revocation | C | R/A | C | C | I | I |
| Quarterly access rights review | A | R | C | I | I | I |
| Visitor registration and management | C | A | I | R | R | I |
| Environmental systems maintenance | C | R/A | I | I | I | I |
| CCTV operation and footage management | A | R | C | I | I | I |
| Equipment disposal approval (NCII) | A | C | R | C | I | I |
| Media sanitisation and destruction | A | C | R | I | I | I |
| Physical security incident response | R/A | R | R | C | C | I |
| NACSA incident notification | A | C | C | I | I | I |
| Clean desk and clear screen enforcement | C | R | I | A | R | I |
| Quarterly physical security walkthrough | A | R | C | I | I | C |
| Annual physical security audit | A | C | C | C | I | R |
| Policy training and awareness | A | C | C | R | R | I |

**Key Role Descriptions:**

- **CISO** — Ultimate accountability for the information security posture of [Organisation Name]; approves policy exceptions; escalates to Board and regulators
- **Facilities Manager** — Day-to-day management of physical security systems, access control, CCTV, and environmental infrastructure
- **IT Manager** — Responsible for ACS integration with IT systems, media sanitisation, and equipment decommissioning
- **Line Manager** — Accountable for staff compliance within their team; initiates access requests and decommissioning; manages visitor sponsorship
- **All Staff** — Responsible for adhering to clean desk, clear screen, visitor escort, and access control requirements
- **Internal Audit** — Independent review and assurance of physical security control effectiveness

---

## 11. Non-Compliance and Disciplinary Action

*This section sets out the consequences of non-compliance to underscore the seriousness of physical security obligations and deter negligent or wilful violations.*

### 11.1 Policy Exceptions

- Requests for exceptions to this policy must be submitted in writing to the CISO using the **Policy Exception Request Form** (Appendix I)
- All exceptions require CISO approval and must be risk-assessed and time-limited
- Approved exceptions shall be recorded in the **Policy Exception Register** and reviewed quarterly
- No standing exceptions shall be granted to controls required under Act 854 without NACSA consultation

### 11.2 Non-Compliance Consequences

| Severity | Example Violations | Consequence |
|---|---|---|
| Minor | Failure to lock screen; paper left on desk; visitor badge not worn | Verbal warning; mandatory security awareness refresher |
| Moderate | Repeated clean desk violations; failure to escort visitor; unreported access card loss | Formal written warning; escalation to HR |
| Serious | Tailgating into restricted area; propping open secure doors; sharing access credentials | Disciplinary action up to and including termination; potential legal referral |
| Critical | Deliberate circumvention of security controls; destruction of evidence; aiding unauthorised access | Immediate suspension; termination; referral to law enforcement and NACSA |

- Non-compliance involving NCII assets may constitute an offence under Act 854 and subject the individual and [Organisation Name] to regulatory penalties
- [Organisation Name] reserves the right to report serious physical security breaches to NACSA, PDRM, or other competent authorities

---

## 12. Review and Approval

### 12.1 Review Schedule

This policy shall be reviewed:

- **Annually** at minimum, as scheduled by the CISO
- Following any significant physical security incident affecting NCII assets
- Following material changes to [Organisation Name]'s physical infrastructure or operations
- Following amendments to Act 854, related NACSA codes of practice, or applicable standards
- As directed by Internal Audit or external regulatory assessment findings

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Facilities Manager | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Technology Officer (CTO) / IT Director | [Name] | [Signature] | [Date] |
| Chief Executive Officer (CEO) / Managing Director | [Name] | [Signature] | [Date] |
| Board Risk Committee Representative (if required) | [Name] | [Signature] | [Date] |

---

## 13. References

*List all regulatory instruments, standards, and internal documents referenced within this policy.*

### 13.1 Primary Legislation and Regulatory Instruments

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), Section 18 | Duties of NCII entity — implementation of physical and organisational security measures |
| Cyber Security Act 2024 (Act 854), Section 26 | Compliance with codes of practice issued by the Chief Executive of NACSA |
| Cyber Security Act 2024 (Act 854), Section 6 | Designation of National Critical Information Infrastructure |
| Personal Data Protection Act 2010 (Act 709) | Requirements governing CCTV footage and personal data collected in visitor management |
| [NACSA NCII Sector Security Plan — [Relevant Sector]] | Sector-specific physical security requirements |
| [NACSA Code of Practice — Physical Security, if published] | [Description] |

### 13.2 Standards and Frameworks

| Reference | Description |
|---|---|
| ISO/IEC 27001:2022, Annex A — Controls 7.1 to 7.14 | Physical and environmental security controls |
| ISO/IEC 27002:2022, Section 7 | Guidance on physical controls implementation |
| NIST SP 800-88 Revision 1 | Guidelines for media sanitisation |
| NIST SP 800-53 Revision 5 — PE Controls | Physical and environmental protection controls |
| TIA-942 / ANSI/BICSI 002 | Data centre design and infrastructure standards |

### 13.3 Internal Policy Documents

| Document | Description |
|---|---|
| Information Security Policy | Overarching information security governance framework |
| Incident Response Policy | Procedures for security incident management and reporting |
| Third-Party Security Policy | Security requirements for vendors and contractors |
| Remote Working Policy | Security requirements for remote and hybrid work |
| Personal Data Protection Policy | PDPA compliance obligations including CCTV data handling |
| Business Continuity Plan | Continuity procedures activated following physical security incidents |
| Asset Management Policy | Asset lifecycle, classification, and decommissioning procedures |

---

## 14. Appendices

### Appendix A — Emergency Physical Access Procedure

*This appendix defines the procedure for granting emergency access to controlled or restricted areas outside normal working hours or under exceptional circumstances.*

**A.1 Trigger Conditions**

Emergency access may be required under the following circumstances:
- [ ] Critical system failure requiring immediate on-site intervention
- [ ] Fire, flood, or other emergency response
- [ ] Security incident investigation
- [ ] [Other — specify]

**A.2 Emergency Access Approval**

| Scenario | Approver | Notification Required |
|---|---|---|
| Outside business hours — planned emergency | On-call CISO delegate | Facilities Manager; Security Operations |
| Incident response | CISO | Facilities Manager; Senior Management |
| Regulatory / Law enforcement | Competent authority order | CISO; Legal Counsel |

**A.3 Documentation Requirements**

All emergency access shall be documented within **[X] hours** of the event, including: time, individual, justification, approver, and actions taken. Emergency access records shall be reviewed by the CISO.

---

### Appendix B — Equipment Access Log Template

*Used to record authorised access to server cabinets and racks for maintenance purposes.*

| Date | Time In | Time Out | Name | Organisation | Cabinet / Rack ID | Purpose | Escorted By | Signature |
|---|---|---|---|---|---|---|---|---|
| [Date] | [Time] | [Time] | [Name] | [Org] | [Cabinet ID] | [Purpose] | [Escort Name] | [Signature] |

---

### Appendix C — Physical Security Acknowledgement Form

*To be signed by all contractors and vendors prior to first access to [Organisation Name] premises.*

I, **[Full Name]**, representing **[Organisation]**, acknowledge that I have read, understood, and agree to comply with [Organisation Name]'s Physical Security Policy, including:

- [ ] Access only to authorised areas, accompanied by an escort at all times in Zone 2 and above
- [ ] No photography or recording without explicit written approval
- [ ] Compliance with clean desk and clear screen requirements while on premises
- [ ] Immediate reporting of security incidents to my designated escort or the Facilities Manager
- [ ] Return of all access credentials and badges upon departure
- [ ] Understanding that violation of these requirements may result in permanent access revocation and legal action

**Name:** ___________________________
**Organisation:** ___________________________
**Signature:** ___________________________
**Date:** ___________________________
**[Organisation Name] Representative:** ___________________________

---

### Appendix D — Physical Security Risk Assessment Template

*Conduct annually and following any material change to [Organisation Name]'s physical environment.*

| Risk ID | Risk Description | Threat Source | Likelihood (1-5) | Impact (1-5) | Risk Rating | Existing Controls | Residual Risk | Treatment Action | Owner | Target Date |
|---|---|---|---|---|---|---|---|---|---|---|
| PHYS-001 | Unauthorised access to data centre | External intruder / disgruntled employee | [L] | [I] | [Rating] | Mantrap, biometric access, CCTV | [Residual] | [Action] | [Owner] | [Date] |
| PHYS-002 | Fire in server room | Electrical fault / arson | [L] | [I] | [Rating] | VESDA, gaseous suppression, fire patrol | [Residual] | [Action] | [Owner] | [Date] |
| PHYS-003 | Flooding of data centre | Heavy rainfall / burst pipe | [L] | [I] | [Rating] | Raised floor, water sensors, sump pump | [Residual] | [Action] | [Owner] | [Date] |
| PHYS-004 | Extended power outage | Utility failure | [L] | [I] | [Rating] | UPS, diesel generator | [Residual] | [Action] | [Owner] | [Date] |
| PHYS-005 | Data theft via physical media removal | Insider threat | [L] | [I] | [Rating] | Bag inspection, CCTV, media controls | [Residual] | [Action] | [Owner] | [Date] |
| [PHYS-00X] | [Add additional risks] | | | | | | | | | |

---

### Appendix E — Equipment Decommission Request Form

| Field | Details |
|---|---|
| Asset Tag / Serial Number | [Asset ID] |
| Asset Description | [Make, Model, Type] |
| Data Classification of Asset | [NCII / Confidential / Internal / Public] |
| Reason for Decommission | [End-of-life / Replacement / Damage / Other] |
| Requested By | [Name, Role, Date] |
| Line Manager Approval | [Name, Signature, Date] |
| IT Manager Verification | [Name, Signature, Date] |
| CISO Approval (NCII assets) | [Name, Signature, Date] |
| Disposal Method Approved | [Physical destruction / Secure overwrite / Other] |
| Assigned Disposal Vendor | [Vendor Name] |
| Target Disposal Date | [Date] |

---

### Appendix F — Media Sanitisation Certificate Template

| Field | Details |
|---|---|
| Certificate Number | [Certificate ID] |
| Asset Tag / Serial Number | [Asset ID] |
| Asset Description | [Make, Model, Type] |
| Data Classification | [NCII / Confidential / Internal] |
| Sanitisation Method Applied | [Overwrite / Degauss / Physical destruction] |
| Standard Referenced | [NIST SP 800-88 / Other] |
| Sanitisation Date | [Date] |
| Performed By | [Name, Role, Organisation] |
| Witnessed By | [Name, Role, Organisation] |
| Outcome | [Sanitisation confirmed successful / Destruction confirmed] |
| Certificate of Destruction (Vendor) | [Vendor Certificate Reference] |
| Record Retained By | [Name, Location] |

**Signatures:**

Performed By: ___________________________ Date: ___________
Witnessed By: ___________________________ Date: ___________

---

### Appendix G — Chain of Custody Record Template

| Step | Action | Asset ID | Transferred From | Transferred To | Date/Time | Signature (Transferring) | Signature (Receiving) |
|---|---|---|---|---|---|---|---|
| 1 | Asset tagged for disposal | [Asset ID] | [Location/Owner] | Decommission staging area | [Date/Time] | [Sig] | [Sig] |
| 2 | Asset transferred to disposal vendor | [Asset ID] | Decommission staging | [Vendor Name] | [Date/Time] | [Sig] | [Sig] |
| 3 | Asset sanitised/destroyed at vendor facility | [Asset ID] | [Vendor Name] | [Destruction facility] | [Date/Time] | [Sig] | [Sig] |
| 4 | Certificate of Destruction issued | [Asset ID] | [Vendor Name] | [Organisation Name] IT Manager | [Date/Time] | [Sig] | [Sig] |

---

### Appendix H — Clean Desk Walkthrough Checklist

*For use during quarterly physical security walkthroughs. Record findings and follow up with relevant line managers.*

| Check Item | Area / Desk | Compliant (Y/N) | Finding / Observation | Action Required | Assigned To | Resolved By |
|---|---|---|---|---|---|---|
| No sensitive documents left on desk surface | [Area/Desk ID] | [Y/N] | [Observation] | [Action] | [Name] | [Date] |
| Locked drawers / filing cabinets for classified documents | [Area/Desk ID] | [Y/N] | | | | |
| Screens locked or blanked | [Area/Desk ID] | [Y/N] | | | | |
| No portable media left unattended | [Area/Desk ID] | [Y/N] | | | | |
| Printer trays clear of output | [Area/Desk ID] | [Y/N] | | | | |
| Whiteboards cleared of sensitive content | [Area/Desk ID] | [Y/N] | | | | |
| Keys secured appropriately | [Area/Desk ID] | [Y/N] | | | | |

**Walkthrough conducted by:** ___________________________
**Date:** ___________________________
**Next scheduled walkthrough:** ___________________________

---

### Appendix I — Policy Exception Request Form

| Field | Details |
|---|---|
| Exception Request ID | [Exception ID] |
| Policy Reference | Physical Security Policy, Section [X] |
| Control to be Excepted | [Description of control] |
| Requestor | [Name, Role, Department] |
| Business Justification | [Detailed justification for the exception] |
| Compensating Controls | [Controls in place to mitigate the risk during the exception period] |
| Requested Duration | [Start Date] to [End Date] |
| Risk Assessment Reference | [Risk ID / Assessment Date] |
| CISO Decision | [ ] Approved [ ] Rejected [ ] Deferred |
| CISO Comments | [Comments] |
| CISO Signature | ___________________________ Date: ___________ |
| Review Date | [Date exception will be reviewed] |

---

*End of Document*

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be reproduced, distributed, or disclosed to any party outside [Organisation Name] without the prior written approval of the CISO. Printed copies are uncontrolled — verify the current version on [Organisation Name]'s document management system before use.