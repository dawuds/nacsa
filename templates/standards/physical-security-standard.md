# Physical Security Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Facilities / CISO |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organisation Name]

**Prepared By:** [Author Name], [Title]

---

> **Classification Notice:** This document is classified **Confidential**. It is intended solely for authorised personnel of [Organisation Name] and must not be disclosed to external parties without prior written approval from the CISO. Handle, store, and dispose of this document in accordance with [Organisation Name]'s Information Classification and Handling Policy.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Access Control System Requirements](#4-access-control-system-requirements)
5. [CCTV Coverage and Retention](#5-cctv-coverage-and-retention)
6. [Environmental Monitoring](#6-environmental-monitoring)
7. [Rack-Level Security](#7-rack-level-security)
8. [Visitor Escort Requirements](#8-visitor-escort-requirements)
9. [Equipment Disposal Standards](#9-equipment-disposal-standards)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Non-Compliance and Exceptions](#11-non-compliance-and-exceptions)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Physical Security Standard establishes the minimum mandatory requirements for physical access control and environmental protection of National Critical Information Infrastructure (NCII) facilities and assets operated or managed by [Organisation Name]. It defines the baseline controls necessary to prevent unauthorised physical access, environmental damage, and interference with NCII systems, consistent with [Organisation Name]'s obligations under the Cyber Security Act 2024 (Act 854).

This Standard supports [Organisation Name]'s designation as an NCII entity and ensures that physical security measures are commensurate with the sensitivity, criticality, and operational continuity requirements of the infrastructure it protects.

### 1.2 Scope

This Standard applies to:

- All data centres, server rooms, network operations centres (NOC), and communication rooms owned, leased, or operated by [Organisation Name] that house NCII assets
- All facilities classified as Restricted or above under [Organisation Name]'s Site Classification Framework
- All employees, contractors, third-party vendors, and service providers who require physical access to in-scope facilities
- Co-location facilities where [Organisation Name] maintains cage or cabinet presence and retains operational responsibility for the assets therein
- Disaster recovery (DR) and backup sites that host NCII systems

*The following are out of scope: general office areas not housing NCII assets, end-user workstation areas, and facilities explicitly documented as non-NCII in [Organisation Name]'s NCII Asset Register.*

### 1.3 Objectives

By implementing this Standard, [Organisation Name] aims to:

- Prevent unauthorised physical access to NCII infrastructure
- Protect NCII assets from environmental hazards including fire, flood, temperature extremes, and electromagnetic interference
- Ensure continuity of critical services by maintaining physical integrity of supporting infrastructure
- Comply with mandatory requirements under the Cyber Security Act 2024 (Act 854), Section 18
- Support audit and regulatory review by maintaining verifiable physical security records

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Basis

*Describe the specific regulatory obligations that mandate this Standard. List all applicable legislation, directives, and circulars.*

This Standard is issued pursuant to, and must be read in conjunction with, the following:

| Instrument | Issuing Body | Applicable Provision | Obligation |
|---|---|---|---|
| Cyber Security Act 2024 (Act 854) | Parliament of Malaysia | Section 18 | NCII entities must implement and maintain measures to protect NCII, including physical security controls |
| [BNM Risk Management in Technology (RMiT) Policy] | Bank Negara Malaysia | [Applicable clause, e.g., 10.1] | [Brief description of obligation] |
| [PDPA 2010 (Act 709)] | Parliament of Malaysia | [Applicable section] | Physical safeguards for personal data processing facilities |
| [NACSA Cyber Security Framework for NCII] | NACSA | [Applicable control domain] | Physical and environmental security baseline controls |
| [Organisation Name] Information Security Policy | Internal | All | Parent policy governing this Standard |

### 2.2 Internal Policy Hierarchy

*Identify where this Standard sits within [Organisation Name]'s internal policy framework.*

This Standard is a subordinate document to the [Organisation Name] Information Security Policy and operates at the **Standard** tier of the policy hierarchy. It is supported by the following related documents:

- [Organisation Name] Information Security Policy
- [Organisation Name] Data Centre Operations Procedure
- [Organisation Name] Incident Response Plan
- [Organisation Name] Asset Management Policy
- [Organisation Name] Third-Party Access Management Standard
- [Organisation Name] Secure Disposal Procedure

### 2.3 Consequence of Non-Compliance

Failure to comply with this Standard may constitute a breach of obligations under Section 18 of the Cyber Security Act 2024, which may result in regulatory enforcement action by NACSA, including directions, financial penalties, and reputational sanctions as provided under Act 854. Non-compliance may also result in internal disciplinary action under [Organisation Name]'s Human Resources policies.

---

## 3. Definitions and Abbreviations

### 3.1 Definitions

*Define all technical and regulatory terms used in this document to ensure consistent interpretation.*

| Term | Definition |
|---|---|
| **NCII (National Critical Information Infrastructure)** | Information infrastructure the disruption of which would have a debilitating impact on national security, economy, public health, or safety, as designated under the Cyber Security Act 2024 |
| **Restricted Area** | A physical zone within an [Organisation Name] facility requiring authorised access, as classified under the Site Classification Framework |
| **Secure Zone** | A Restricted Area with enhanced physical controls, typically housing primary data centre floors, server rooms, or NOC environments |
| **High-Security Zone** | The highest classification of physical area, typically housing core NCII infrastructure such as primary data centre halls and Tier-1 network equipment |
| **Access Control System (ACS)** | An integrated system of hardware and software used to regulate, monitor, and record physical entry and exit to controlled areas |
| **CCTV** | Closed-Circuit Television; a system of video cameras used for surveillance and recording of physical areas |
| **Environmental Monitoring System (EMS)** | A system that continuously measures and alerts on environmental parameters within a facility, including temperature, humidity, water ingress, and power quality |
| **Visitor** | Any individual not permanently employed by [Organisation Name] who requires temporary access to an in-scope facility, including contractors, vendors, auditors, and regulators |
| **Escort** | A permanently badged [Organisation Name] employee assigned responsibility for supervising a visitor within a Restricted or Secure Zone |
| **Rack Unit (U)** | A standard unit of measurement for rack-mounted equipment height |
| **Sanitisation** | The process of rendering data on storage media unrecoverable through degaussing, cryptographic erasure, or physical destruction |
| **Chain of Custody** | A documented, unbroken record of who had possession of an asset at each point in its lifecycle |

### 3.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| ACS | Access Control System |
| BAS | Building Automation System |
| CISO | Chief Information Security Officer |
| CCTV | Closed-Circuit Television |
| DR | Disaster Recovery |
| EMS | Environmental Monitoring System |
| HVAC | Heating, Ventilation, and Air Conditioning |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| NOC | Network Operations Centre |
| UPS | Uninterruptible Power Supply |
| RACI | Responsible, Accountable, Consulted, Informed |

---

## 4. Access Control System Requirements

*This section defines the mandatory technical and operational requirements for physical access control systems deployed at all in-scope facilities. Detail the technologies, authentication methods, zoning model, and audit controls required.*

### 4.1 Zoning and Perimeter Model

[Organisation Name] shall implement a defence-in-depth physical security model based on concentric security zones. Access rights shall be granted on the principle of least privilege — personnel shall only be granted access to the zones necessary for their defined role.

The following zone classification shall apply to all in-scope facilities:

| Zone Level | Classification | Description | Example Areas |
|---|---|---|---|
| Zone 0 | Public | Unrestricted access | Building lobby, reception, car park |
| Zone 1 | General | [Organisation Name] staff only | General office areas, meeting rooms |
| Zone 2 | Restricted | Authorised staff and escorted visitors | NOC, IT operations areas |
| Zone 3 | Secure | Explicitly authorised staff only | Server rooms, data centre ante-rooms |
| Zone 4 | High-Security | Minimum access list, dual-authorisation | Primary data centre floor, core NCII cabinets |

### 4.2 Access Control Technology Requirements

All Zone 2 and above areas shall be protected by an electronic Access Control System meeting the following minimum requirements:

**Authentication Requirements by Zone:**

| Zone | Minimum Authentication Factor | Requirement |
|---|---|---|
| Zone 2 | Single-factor | [e.g., Proximity card / RFID badge] |
| Zone 3 | Two-factor | [e.g., Card + PIN] |
| Zone 4 | Two-factor + Biometric | [e.g., Card + PIN + Fingerprint or iris scan] |

**Technical Requirements:**

- The ACS shall be capable of enforcing anti-passback controls to prevent tailgating and credential sharing
- All access events (granted, denied, forced entry, door held open) shall be logged with timestamp, user identity, and zone identifier
- ACS logs shall be retained for a minimum of **[12 months online / 24 months archived]** and must be protected from tampering
- The ACS shall integrate with [Organisation Name]'s Security Information and Event Management (SIEM) system for real-time alerting
- Door-held-open and forced-entry events shall generate an immediate alert to the [Security Operations Centre / NOC / Facilities team]
- All physical access credentials shall be managed through [Organisation Name]'s Identity and Access Management (IAM) process; access rights must be reviewed **[quarterly / semi-annually]** and upon change in employment status
- Lost or stolen access credentials must be reported immediately and deactivated within **[2 hours / [Organisation Name]-defined SLA]**
- Emergency break-glass procedures shall be documented and tested **[annually]**; physical override keys must be secured in tamper-evident, access-controlled key cabinets

**Tailgating and Mantrap Controls:**

- Zone 3 and Zone 4 entry points shall be protected by either a mantrap (airlock) or an anti-tailgating detection system
- [Where mantraps are deployed:] The mantrap shall prevent simultaneous occupancy of both doors and shall alert the security team on detection of a tailgating event
- Signage clearly prohibiting tailgating shall be displayed at all Restricted, Secure, and High-Security zone entry points

### 4.3 Access Provisioning and Deprovisioning

| Event | Required Action | Timeframe |
|---|---|---|
| New joiner requires access | Formal request via [Ticketing System] with line manager approval and CISO/Facilities authorisation | Prior to first access |
| Role change / transfer | Access reviewed and adjusted to reflect new role | Within [5 business days] of effective date |
| Resignation / termination | All physical access credentials deactivated | By end of last working day (immediate for involuntary termination) |
| Contractor engagement | Temporary access issued with defined expiry date | As per Third-Party Access Management Standard |
| Periodic access review | All Zone 2+ access rights reviewed against current role | [Quarterly] |

---

## 5. CCTV Coverage and Retention

*This section defines the minimum standards for CCTV deployment, coverage, image quality, data retention, and access to recorded footage. Ensure requirements align with both physical security objectives and applicable data protection obligations under PDPA 2010.*

### 5.1 Coverage Requirements

CCTV cameras shall be installed at a minimum at the following locations across all in-scope facilities:

| Location | Camera Type | Coverage Requirement |
|---|---|---|
| All Zone 2, 3, and 4 entry and exit points | Fixed or PTZ | Full-frame capture of all individuals entering and exiting; facial recognition quality |
| Data centre floor | Fixed | [100% coverage of floor area with no blind spots] |
| Server room perimeter | Fixed | All four walls and ceiling-mounted to cover rack rows |
| Loading bay / equipment delivery area | Fixed + PTZ | All equipment movement areas |
| UPS and power distribution areas | Fixed | Full coverage |
| Cooling plant room | Fixed | Full coverage |
| Perimeter of building (external) | PTZ / Fixed | All building entry/exit points, car parks, and delivery areas |
| Reception and lobby | Fixed | All visitor interaction areas |

*[Organisation Name] shall maintain a CCTV Coverage Map (see Appendix B) documenting camera positions, fields of view, and identified coverage gaps with mitigating controls.*

### 5.2 Technical Standards

- Minimum image resolution: **[1080p full HD]** or higher for all interior cameras; **[4K or equivalent]** recommended for Zone 4
- Frame rate: Minimum **[15 frames per second (fps)]** during normal operation; **[25 fps]** during motion-triggered recording
- Night vision / low-light capability is mandatory for all internal cameras and external cameras in low-light environments
- Cameras shall be tamper-resistant and installed to prevent easy removal, obstruction, or repositioning by a single individual without visible evidence
- The CCTV system shall include motion-detection alerting integrated with the security monitoring platform
- A CCTV health monitoring capability shall be in place to detect and alert on camera faults, loss of feed, and storage failures within **[15 minutes]**

### 5.3 Data Retention

| Zone | Minimum Retention Period | Storage Location | Access Control |
|---|---|---|---|
| Zone 4 (High-Security) | [90 days] | [On-site NVR + off-site backup] | CISO and designated Facilities Security Manager only |
| Zone 3 (Secure) | [60 days] | [On-site NVR] | CISO and designated Facilities Security Manager |
| Zone 2 (Restricted) | [30 days] | [On-site NVR] | Facilities Security Manager |
| Zone 0–1 (Public/General) | [14 days] | [On-site NVR] | Facilities Manager |

- CCTV footage shall be stored on dedicated, access-controlled network video recorder (NVR) infrastructure, logically segregated from business networks
- Footage shall be protected against deletion, overwriting, or modification; any deletion prior to the defined retention period requires written authorisation from the CISO
- CCTV footage may be retained beyond the standard retention period where required for an ongoing investigation, legal hold, or regulatory inquiry
- Access to CCTV footage shall be logged; access requests must be submitted via [Ticketing System] and approved by [CISO / Facilities Security Manager]

### 5.4 Privacy and Data Protection Considerations

- CCTV deployment and operation shall comply with the Personal Data Protection Act 2010 (Act 709)
- CCTV notices shall be prominently displayed at all locations where surveillance is in operation, informing individuals of the presence of cameras and the purpose of recording
- A CCTV Privacy Impact Assessment shall be conducted and maintained, reviewed annually or when significant changes to deployment occur
- Requests for footage disclosure to third parties (including law enforcement) shall be routed through [Legal / Compliance] and documented

---

## 6. Environmental Monitoring

*This section establishes requirements for continuous monitoring of environmental conditions within data centres and server rooms. Define the parameters to be monitored, alerting thresholds, and response procedures.*

### 6.1 Monitored Parameters

An Environmental Monitoring System (EMS) shall be deployed and maintained at all Zone 3 and Zone 4 facilities. The EMS shall continuously monitor the following parameters:

| Parameter | Monitoring Method | Alert Threshold | Critical Threshold |
|---|---|---|---|
| Temperature | In-row and room-level sensors | [> 27°C or < 18°C] | [> 30°C or < 15°C] |
| Relative Humidity | Hygrometric sensors | [> 65% RH or < 30% RH] | [> 80% RH or < 20% RH] |
| Water / Leak Detection | Under-floor leak detection cables and spot sensors | Any detection | Any detection (immediate escalation) |
| Smoke / Fire | VESDA or equivalent early-warning smoke detection | Any detection | Any detection (immediate escalation) |
| Power Quality | UPS monitoring — voltage, frequency, battery status | Battery < [80%] charge or voltage deviation | Power failure or UPS bypass |
| Airflow | Differential pressure sensors on CRAC/CRAH units | [> 10% deviation from baseline] | [> 20% deviation] |
| Vibration | [Where applicable, e.g., seismic zones] | [Threshold TBD by Facilities Engineering] | [Threshold TBD] |

### 6.2 Alerting and Escalation

- The EMS shall generate real-time alerts via **[SMS, email, and/or integration with SIEM/NOC monitoring platform]** upon breach of any alert threshold
- All alerts shall be classified by severity and routed to the appropriate response team as follows:

| Severity | Condition | Response Team | Response Time |
|---|---|---|---|
| Warning | Alert threshold breached, not critical | Facilities Operations | Acknowledge within [15 minutes], resolve within [4 hours] |
| Critical | Critical threshold breached | Facilities Operations + CISO | Acknowledge within [5 minutes], escalate to Incident Response if unresolved within [1 hour] |
| Emergency | Fire, flood, or complete power failure | Facilities Operations + CISO + Senior Management + Emergency Services (where applicable) | Immediate |

### 6.3 HVAC Requirements

- Precision air conditioning (CRAC or CRAH units) shall be sized to maintain the target operating environment under **[N+1 or N+2 redundancy]** as specified in the Facilities Engineering Standard
- HVAC systems shall be on dedicated, uninterruptible power circuits separate from general building services
- Hot aisle / cold aisle containment shall be implemented on all new installations and retrofitted to existing data centre layouts where technically feasible
- HVAC maintenance schedules shall be documented and adhered to; maintenance records shall be retained for a minimum of **[3 years]**

### 6.4 Fire Suppression

- An automated gaseous fire suppression system (e.g., FM-200, Novec 1230, or equivalent) shall be installed in all Zone 3 and Zone 4 areas
- Fire suppression systems shall be tested and certified in accordance with the manufacturer's specifications and applicable Malaysian fire safety regulations, at a minimum **[annually]**
- Pre-action or dual-interlock systems are preferred to prevent accidental discharge from a single fault
- Portable fire extinguishers of the appropriate class for electrical fires shall be present at all entry points and within data centre floors
- The fire suppression system shall be integrated with the EMS and the building fire alarm system; activation shall trigger automatic alerts to the NOC and Facilities team

### 6.5 Power Resilience

| Component | Minimum Requirement |
|---|---|
| UPS | [N+1 redundancy; minimum [10 minutes] runtime at full load] |
| Generator | [On-site diesel generator with [N+1] capability; minimum [72 hours] fuel at full load] |
| Power Distribution Units (PDU) | [Dual-feed, metered, remotely manageable PDUs at rack level] |
| Automatic Transfer Switch (ATS) | [< [10 millisecond] transfer time to generator on mains failure] |
| Utility Feeds | [Dual diverse utility feeds from separate substations where available] |

---

## 7. Rack-Level Security

*This section defines security requirements at the individual rack and cabinet level within data centres and server rooms. Address physical locking, asset labelling, cable management, and access controls applicable at the rack level.*

### 7.1 Cabinet and Rack Standards

- All server cabinets and network racks shall be enclosed, lockable cabinets conforming to **[EIA-310 or equivalent]** standards
- Open-frame racks are not permitted in Zone 3 or Zone 4 environments unless enclosed within a locked cage or secondary physical security barrier
- Rack doors (front and rear) shall be locked at all times when not being actively worked on by authorised personnel
- Lock type by zone:

| Zone | Minimum Lock Type |
|---|---|
| Zone 3 | Keyed cylinder lock with key management log |
| Zone 4 | Electronic lock with individual audit trail per rack (smart lock or ACS-integrated) |

### 7.2 Key and Access Management

- Physical rack keys shall be managed under a formal key management process:
  - Keys shall be stored in a secured, access-controlled key cabinet when not in use
  - Key issuance and return shall be logged with timestamp, recipient name, and purpose
  - Keys shall not be duplicated without written authorisation from the CISO
  - Lost keys shall be reported immediately; affected lock cylinders shall be re-keyed within **[24 hours]**
- For electronically locked racks in Zone 4, access shall be provisioned through the ACS and shall generate an individual access log entry per cabinet access event

### 7.3 Asset Labelling and Inventory

- Every asset installed in a rack shall be uniquely labelled in accordance with [Organisation Name]'s Asset Management Policy
- Rack inventory records shall be maintained in **[Asset Management System / CMDB]** and updated within **[5 business days]** of any addition, removal, or change to rack contents
- An up-to-date rack elevation diagram shall be maintained for every rack in Zone 3 and Zone 4, either in the CMDB or in a physical binder kept in the data centre ante-room

### 7.4 Cable Management

- Structured cabling within all Zone 3 and Zone 4 areas shall be installed in accordance with **[TIA-942 or equivalent]** standards
- Power and data cabling shall be physically separated or, where co-routed, segregated by colour-coding and labelling
- Patch cables shall be labelled at both ends; unlabelled cables shall not be installed
- No dangling, unconnected cables shall be present in active rack environments; unused ports shall be blanked with port blockers
- Cable management shall support clear visual inspection of rack contents and facilitate hot-work without disrupting adjacent systems

### 7.5 Capacity and Separation

- Racks hosting NCII systems shall not co-host non-NCII equipment unless formally approved by the CISO and documented in the NCII Asset Register
- Power density limits per rack shall be defined by Facilities Engineering and enforced; no rack shall exceed its rated power load without formal capacity review
- Adequate blanking panels shall be installed to maintain airflow integrity; removal of blanking panels without replacement is prohibited

---

## 8. Visitor Escort Requirements

*This section defines the processes and controls governing physical access for all non-permanent personnel, including contractors, vendors, auditors, and regulators, to Restricted, Secure, and High-Security zones.*

### 8.1 Visitor Categories and Pre-Access Requirements

| Visitor Category | Examples | Pre-Access Requirements |
|---|---|---|
| Scheduled contractor | Hardware vendor, maintenance engineer | Advance notice [minimum 48 hours]; NDA signed; background check per [Organisation Name]'s Third-Party Policy; formal access request approved by asset owner and CISO |
| Emergency contractor | Break-fix responder, emergency maintenance | CISO or designated deputy verbal approval prior to entry; formal documentation completed within [24 hours] post-visit |
| Auditor / Regulator | External auditor, NACSA inspector, BNM examiner | Formal written notification; engagement managed through [Compliance / Legal]; access scope and duration documented |
| Visitor / Guest | Executive visitor, prospect client | Zone 1 access only unless specific business need; CISO approval required for Zone 2 and above |

### 8.2 Visitor Registration Process

All visitors to Zone 2 and above shall follow the process below:

1. **Pre-visit authorisation:** Formal access request submitted via **[Ticketing System]** by an internal sponsor (employee) at least **[48 hours]** prior to visit (except emergencies — see 8.1)
2. **Identity verification:** Visitor presents government-issued photo identification at the reception / security desk upon arrival; identity verified against the pre-approved visitor list
3. **Visitor badge issuance:** A time-limited, distinctly coloured visitor badge is issued indicating the maximum permitted zone
4. **Briefing:** Visitor is briefed on applicable security rules, emergency procedures, and prohibited activities prior to entering Restricted areas
5. **Escort assignment:** An authorised escort is assigned (see 8.3)
6. **Log entry:** Visitor entry is recorded in the physical Visitor Log (see Appendix C) including: name, organisation, purpose, badge number, escort name, time in, and anticipated time out
7. **Access:** Visitor may only enter areas explicitly covered by the approved access request and only while under escort
8. **Departure:** Visitor badge is collected at departure; time out is recorded in the Visitor Log; escort confirms all visitor equipment and any removed assets are documented

### 8.3 Escort Requirements and Responsibilities

- **Zone 2 (Restricted):** One escort per visitor or group of up to [3] visitors; escort must remain within visual range at all times
- **Zone 3 (Secure):** One escort per visitor; visual line of sight at all times; escort must not simultaneously escort visitors in a different zone
- **Zone 4 (High-Security):** One-to-one escort required (one escort per visitor); escort must remain within arm's reach at all times; a second [Organisation Name] employee must be present in the zone during the visit (two-person rule)

**Escort Responsibilities:**

- The escort is accountable for the visitor's conduct and compliance with this Standard throughout the visit
- Escort must prevent the visitor from accessing any area, system, or equipment beyond the approved scope
- Any observed security violation, suspicious behaviour, or unplanned activity must be immediately reported to **[Security / Facilities helpdesk]** and documented as a security event
- Escort must not leave the visitor unattended; if an emergency requires the escort to leave, access must be suspended and the visitor must exit the Restricted area or a replacement escort must be immediately assigned

### 8.4 Photography and Recording Prohibition

- Photography, video recording, audio recording, and any form of digital capture is strictly prohibited within Zone 3 and Zone 4 areas
- Visitors must surrender mobile phones and personal electronic devices to the escort or security desk before entering Zone 3; these shall be stored in a designated secure locker until departure
- In Zone 2, device use is permitted only with prior written CISO approval; any approved recording is documented in the access request
- Violation of this control shall result in immediate removal from the facility and escalation per the Incident Response Plan

### 8.5 Working Outside Standard Hours

- Visitor access outside standard business hours **([define hours, e.g., 0800–1800 Monday–Friday, excluding public holidays])** requires additional approval from the CISO or designated deputy
- All out-of-hours visits must be pre-authorised in writing; approvals shall be retained for **[12 months]**
- Security monitoring and response capability must be confirmed available before any out-of-hours visit commences

---

## 9. Equipment Disposal Standards

*This section defines the mandatory controls for the decommissioning, sanitisation, and disposal of hardware assets, particularly those that have hosted NCII data or been installed in in-scope facilities. Ensure chain of custody is maintained from decommission through final destruction.*

### 9.1 Scope of Disposal Controls

These requirements apply to all physical assets that:

- Have been installed in a Zone 2, 3, or 4 environment
- Have processed, stored, or transmitted data classified as **[Confidential, Restricted, or NCII]** under [Organisation Name]'s Information Classification Policy
- Include but are not limited to: servers, storage arrays, network equipment, UPS units, printers, removable media, hard disk drives (HDD), solid-state drives (SSD), tape media, and end-user devices that have accessed NCII systems

### 9.2 Sanitisation Methods

The appropriate sanitisation method shall be selected based on the asset type and data classification:

| Asset Type | Data Classification | Minimum Sanitisation Method | Verification |
|---|---|---|---|
| HDD / SSD (reuse within [Organisation Name]) | Confidential and below | Cryptographic erasure or NIST SP 800-88 compliant overwrite | Written certificate from sanitisation tool |
| HDD / SSD (disposal / transfer to third party) | Any | Physical destruction (shredding or degaussing to DOD/NIST standard) | Destruction certificate |
| HDD / SSD hosting NCII data | NCII / Restricted | Physical destruction mandatory | Certificate + witnessed destruction |
| SSD / Flash media (NVMe) | Any | Cryptographic erasure (manufacturer tool) + physical destruction | Certificate |
| Tape media | Any classification | Degaussing + physical destruction | Certificate |
| Network equipment with configuration data | Confidential and above | Factory reset + physical destruction of onboard storage if present | Change record + certificate |
| Printed/paper documents from in-scope areas | Confidential and above | Cross-cut shredding (DIN 66399 Level P-4 minimum) | [Waste manifest] |
| Mobile devices / tokens | Any | Remote wipe + factory reset | MDM record |

*Physical destruction of storage media shall be performed by an approved vendor (see Appendix D — Approved Disposal Vendors) or in-house using certified media destruction equipment.*

### 9.3 Disposal Process

1. **Decommission request:** Asset owner raises a formal decommission request via **[Asset Management System / Ticketing System]**
2. **Asset register update:** Asset status updated to "Pending Decommission" in CMDB
3. **Data classification confirmation:** CISO or designated delegate confirms data classification and required sanitisation method
4. **Sanitisation:** Sanitisation performed using the required method; tool-generated or witnessed certificate obtained
5. **Verification:** A second person (Facilities or IT team member) verifies sanitisation completion; certificate signed by both parties
6. **Physical removal:** Asset removed from rack; physical label updated or removed; rack inventory updated
7. **Chain of custody transfer:** If transferring to disposal vendor, chain of custody form (see Appendix E) completed; signed by [Organisation Name] representative and vendor representative
8. **Final destruction:** Vendor provides destruction certificate including: asset serial numbers, destruction method, date, and operator name
9. **Asset register closure:** Asset record updated to "Disposed" with all certificates attached; retained for **[minimum 7 years]**

### 9.4 Prohibited Disposal Methods

The following disposal methods are expressly prohibited for assets in scope of this Standard:

- Disposal via general waste or recycling bins
- Sale, donation, or transfer of unsanitised assets to any third party, including charitable organisations
- Return of leased equipment to vendor without documented sanitisation certificate
- Destruction via informal means (e.g., physical damage by staff without certification)
- Disposal through unapproved vendors not listed in Appendix D

Any breach of prohibited disposal methods shall be treated as a security incident and reported per the Incident Response Plan.

---

## 10. Roles and Responsibilities

*This section defines the accountabilities for implementing, maintaining, and complying with this Standard. The RACI model is used: R = Responsible, A = Accountable, C = Consulted, I = Informed.*

### 10.1 RACI Matrix

| Activity | CISO | Facilities Manager | IT Operations | Data Centre Manager | Line Manager | Legal / Compliance | Internal Audit |
|---|---|---|---|---|---|---|---|
| Maintain and update this Standard | A/R | C | C | C | I | C | I |
| Design and approve zone classification | A | R | C | C | I | C | I |
| Provision and deprovision access credentials | A | R | R | R | C | I | I |
| Conduct periodic access rights review | A | R | C | R | C | I | I |
| Manage CCTV system and footage | A | R | C | I | I | C | I |
| Respond to CCTV footage access requests | A | R | I | I | I | C | I |
| Operate and maintain EMS | A | R | C | R | I | I | I |
| Respond to environmental alerts | I | R | R | A | I | I | I |
| Manage rack keys and access | A | R | C | R | I | I | I |
| Approve visitor access requests | A | R | C | C | C | I | I |
| Provide visitor escort | I | I | R | R | I | I | I |
| Approve equipment disposal | A | C | C | R | I | C | I |
| Execute equipment sanitisation | I | C | R | R | I | I | I |
| Maintain disposal vendor list | A | R | C | I | I | C | I |
| Conduct physical security audits | A | C | C | C | I | C | R |
| Report physical security incidents | A | R | R | R | R | I | I |

### 10.2 Key Roles

| Role | Responsibilities |
|---|---|
| **CISO** | Ultimate accountability for this Standard; approves exceptions; approves high-sensitivity visitor access; oversees audit and compliance |
| **Facilities Manager** | Day-to-day operational responsibility for physical security controls; manages ACS, CCTV, EMS, and environmental systems; vendor management |
| **Data Centre Manager** | Manages rack-level security, inventory, and in-facility operations; first-line escalation for environmental and physical alerts |
| **IT Operations** | Manages logical access controls integrated with physical ACS; maintains CMDB; executes equipment sanitisation and disposal |
| **Line Manager** | Responsible for ensuring team members' access rights reflect current role; sponsors visitor access requests; enforces this Standard with direct reports |
| **Legal / Compliance** | Advises on regulatory obligations; manages CCTV-related privacy requirements; coordinates regulatory visitor access (e.g., BNM, NACSA) |
| **Internal Audit** | Independently assesses compliance with this Standard; reports findings to Board Audit Committee and CISO |

---

## 11. Non-Compliance and Exceptions

### 11.1 Exceptions Process

*Describe the formal process for requesting and approving deviations from this Standard.*

Requests for exceptions to any requirement in this Standard shall follow the process below:

1. The requesting party submits a formal Exception Request to the CISO via **[Ticketing System / Exception Request Form — Appendix F]**
2. The Exception Request shall document: the specific requirement(s) to be deviated from, the business justification, the risk assessment, and the proposed compensating controls
3. The CISO reviews the request in consultation with the Facilities Manager and Legal/Compliance as appropriate
4. Approved exceptions are documented, time-limited to a maximum of **[12 months]**, and subject to review at the next scheduled review cycle
5. All exceptions are maintained in the **[Exception Register]** and presented to the Risk Committee **[quarterly]**

### 11.2 Non-Compliance Consequences

| Severity | Examples | Consequence |
|---|---|---|
| Minor | Unlabelled cable, minor documentation gap | Verbal or written warning; remediation within [30 days] |
| Moderate | Unescorted visitor, expired access rights not revoked | Formal disciplinary process; remediation within [10 business days]; incident logged |
| Serious | Tailgating into Zone 4, unsanctioned data extraction, disabling of security controls | Formal disciplinary process up to and including termination; incident reported to CISO; possible regulatory notification |
| Critical / Breach | Confirmed data breach, physical compromise of NCII, deliberate circumvention | Immediate suspension; Incident Response Plan activated; mandatory NACSA/BNM notification as applicable under Act 854 |

---

## 12. Review and Approval

### 12.1 Review Schedule

This Standard shall be reviewed:

- **Annually** from the effective date as a mandatory scheduled review
- **Following any material change** to NCII infrastructure, facility layout, or regulatory requirements
- **Following any significant physical security incident** affecting in-scope areas
- **Within 30 days** of any NACSA or BNM examination finding relating to physical security

### 12.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of major revision] |

### 12.3 Approval Sign-Off

*This Standard requires formal approval from the following roles prior to publication and at each review cycle.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | _________________ | [Date] |
| Head of Facilities | [Name] | _________________ | [Date] |
| Chief Risk Officer | [Name] | _________________ | [Date] |
| Chief Compliance Officer | [Name] | _________________ | [Date] |
| [Board Risk Committee Chair / Authorised Board Delegate] | [Name] | _________________ | [Date] |

---

## 13. References

### 13.1 Regulatory References

| Reference | Description | Applicable Sections |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Primary legislation governing NCII cybersecurity obligations in Malaysia | Section 18 — Duty of NCII entity to comply with directions and implement security measures |
| PDPA 2010 (Act 709) | Personal Data Protection Act — governs handling of personal data captured in CCTV and visitor records | Section 9 (Security Principle), Section 10 (Retention Principle) |
| [BNM RMiT Policy Document] | Bank Negara Malaysia Risk Management in Technology | [Paragraph 10.x — Physical and Environmental Security] |
| [NACSA National Cyber Security Policy / Framework] | NACSA policy framework for NCII sectors | [Applicable control domain] |
| [Malaysian Fire Services Act 1988 (Act 341)] | Fire safety requirements applicable to data centre fire suppression and detection systems | [Applicable provisions] |

### 13.2 Standards References

| Standard | Description | Application in this Document |
|---|---|---|
| ISO/IEC 27001:2022 | Information Security Management Systems | Annex A, Control 7 — Physical Controls |
| ISO/IEC 27002:2022 | Information Security Controls | Section 7 — Physical and Environmental Security |
| NIST SP 800-88 Rev. 1 | Guidelines for Media Sanitisation | Section 9.2 — Sanitisation methods |
| TIA-942 | Telecommunications Infrastructure Standard for Data Centres | Section 7 — Physical Security |
| DIN 66399 | Office and data technology — Destroying data media | Paper and media shredding levels |

### 13.3 Internal Policy References

| Document | Owner | Relationship |
|---|---|---|
| [Organisation Name] Information Security Policy | CISO | Parent policy |
| [Organisation Name] Asset Management Policy | IT Operations | Asset lifecycle and CMDB |
| [Organisation Name] Incident Response Plan | CISO | Physical security incident escalation |
| [Organisation Name] Third-Party Access Management Standard | CISO / Procurement | Vendor and contractor access |
| [Organisation Name] Business Continuity Plan | Risk / Facilities | DR site physical security |
| [Organisation Name] Information Classification and Handling Policy | CISO | Data classification applied in this Standard |

---

## 14. Appendices

### Appendix A — In-Scope Facility Register

*List all facilities subject to this Standard, updated annually and upon any change to the organisation's physical estate.*

| Facility ID | Facility Name | Address | Zone Classification | NCII Status | Facility Manager |
|---|---|---|---|---|---|
| [FAC-001] | [Primary Data Centre] | [Address] | Zone 4 | NCII-designated | [Name] |
| [FAC-002] | [Disaster Recovery Site] | [Address] | Zone 3 | NCII-designated | [Name] |
| [FAC-003] | [Network Operations Centre] | [Address] | Zone 2–3 | NCII-supporting | [Name] |
| [FAC-00X] | [Additional facility] | [Address] | [Zone] | [Status] | [Name] |

---

### Appendix B — CCTV Coverage Map Template

*For each in-scope facility, maintain a floor plan annotated with camera positions, fields of view, and any known coverage limitations. The CCTV Coverage Map shall be treated as Confidential and stored in [Document Management System].*

**Camera Register (per facility):**

| Camera ID | Location Description | Zone | Camera Type | Resolution | Coverage Area | Known Gaps / Notes |
|---|---|---|---|---|---|---|
| [CAM-001] | [Main data centre entrance — front] | Zone 3 | [Fixed, Full HD] | [1080p] | [Full door coverage, 3m approach] | [None] |
| [CAM-002] | [Data centre floor — Row A–C overview] | Zone 4 | [Fixed, 4K] | [4K] | [Rows A, B, C — full coverage] | [None] |
| [CAM-00X] | [Location] | [Zone] | [Type] | [Resolution] | [Area] | [Notes] |

*[Attach or reference annotated floor plan diagram here.]*

---

### Appendix C — Visitor Log Template

*A physical Visitor Log shall be maintained at the security desk for each in-scope facility. The log shall be retained for a minimum of [24 months].*

| # | Date | Visitor Name | Organisation | IC / Passport No. | Purpose of Visit | Host / Sponsor | Escort Name | Badge No. | Zone Access | Time In | Time Out | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | [DD/MM/YYYY] | | | | | | | | | | | |
| 2 | | | | | | | | | | | | |

---

### Appendix D — Approved Equipment Disposal Vendors

*This register lists vendors approved by [Organisation Name] for secure equipment sanitisation and destruction. Only vendors listed herein may be engaged for disposal of assets from in-scope facilities.*

| Vendor ID | Vendor Name | Services Provided | Certification / Accreditation | Contract Reference | Last Reviewed |
|---|---|---|---|---|---|
| [DV-001] | [Vendor Name] | [HDD shredding, degaussing, full asset destruction] | [e.g., NAID AAA Certified, MS ISO 9001] | [Contract No.] | [Date] |
| [DV-002] | [Vendor Name] | [Electronic waste recycling and data destruction] | [Certification] | [Contract No.] | [Date] |

*Approved vendor list reviewed annually by CISO and Facilities Manager. Additions require CISO approval and due diligence review.*

---

### Appendix E — Equipment Chain of Custody Form

*Complete this form for every asset transferred to a disposal vendor or moved between facilities.*

**Chain of Custody Reference:** [COC-YYYY-NNN]

| Field | Details |
|---|---|
| Asset Tag / Serial Number | [Asset Tag] |
| Asset Description | [e.g., Dell PowerEdge R740 Server] |
| Originating Facility | [Facility Name and Zone] |
| Data Classification | [Classification of data previously stored on asset] |
| Sanitisation Method Applied | [Method and tool used] |
| Sanitisation Certificate Reference | [Certificate No. / Date] |
| Sanitisation Performed By | [Name, Role, Date] |
| Sanitisation Verified By | [Name, Role, Date] |
| Transfer Date | [DD/MM/YYYY] |
| Receiving Party (Vendor / Facility) | [Name and address] |
| Vendor Representative | [Name, Signature, Date] |
| [Organisation Name] Representative | [Name, Signature, Date] |
| Final Destruction Certificate Reference | [Certificate No. / Date — complete upon receipt] |

---

### Appendix F — Physical Security Exception Request Form

*Submit this form to the CISO to request a time-limited exception to any requirement in this Standard.*

| Field | Details |
|---|---|
| Exception Request Reference | [EXC-YYYY-NNN] |
| Date of Request | [DD/MM/YYYY] |
| Requestor Name and Role | [Name, Role] |
| Business Unit | [Business Unit] |
| Standard Section(s) Affected | [e.g., Section 4.2 — Two-factor authentication requirement] |
| Specific Requirement to be Deviated From | [Describe the requirement] |
| Business Justification | [Detailed justification] |
| Risk Assessment | [Describe the risk introduced by the exception] |
| Proposed Compensating Controls | [Describe mitigating measures] |
| Requested Exception Period | [Start Date] to [End Date; maximum 12 months] |
| CISO Decision | ☐ Approved ☐ Rejected ☐ Approved with conditions |
| CISO Comments | [Comments] |
| CISO Signature / Date | [Signature] / [Date] |
| Conditions (if applicable) | [List conditions] |

---

### Appendix G — Physical Security Audit Checklist

*Use this checklist during annual physical security reviews and ad-hoc audits. All findings shall be documented and tracked to closure.*

| # | Control Area | Audit Question | Expected Evidence | Finding | Risk Rating | Remediation Owner | Due Date |
|---|---|---|---|---|---|---|---|
| 1 | Access Control | Are all Zone 3 and Zone 4 entry points protected by two-factor authentication? | ACS configuration record, recent access log | | | | |
| 2 | Access Control | Are access rights reviewed quarterly and upon role change? | Access review records, HR change log | | | | |
| 3 | Access Control | Are terminated employees' credentials deactivated on last working day? | HR records vs ACS provisioning log | | | | |
| 4 | CCTV | Is CCTV footage retained for the required period per zone? | NVR storage configuration and retention log | | | | |
| 5 | CCTV | Are all mandatory camera positions operational and fault-free? | EMS / CCTV health monitoring report | | | | |
| 6 | Environmental | Are EMS alerts integrated with the SIEM / NOC? | SIEM integration configuration | | | | |
| 7 | Environmental | Are HVAC and UPS maintenance records current? | Maintenance log, service contracts | | | | |
| 8 | Rack Security | Are all rack doors locked when not under active maintenance? | Physical inspection, key log | | | | |
| 9 | Rack Security | Are rack inventories current in the CMDB? | CMDB records vs physical inspection | | | | |
| 10 | Visitor Management | Are visitor logs complete for the past [12 months]? | Physical visitor log review | | | | |
| 11 | Visitor Management | Are escort requirements being observed in Zone 3 and Zone 4? | CCTV review, visitor log spot-check | | | | |
| 12 | Disposal | Are disposal certificates available for all recently decommissioned assets? | Disposal records, chain of custody forms | | | | |
| 13 | Disposal | Are all approved disposal vendors on the current approved vendor list? | Approved vendor register vs disposal records | | | | |

---

*End of Document*

---

| Field | Details |
|---|---|
| **Document Title** | Physical Security Standard |
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **© [Organisation Name] [Year]** | All rights reserved. Internal use only. |