# Mobile Device Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Document Owner** | Chief Information Security Officer (CISO) |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Department** | [Department Name] |

---

> **Handling Instruction:** This document is classified **Confidential**. It must not be distributed outside [Organization Name] without prior written authorization from the document owner. Physical copies must be stored securely and disposed of via approved secure destruction methods.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context and Obligations](#2-regulatory-context-and-obligations)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [Mobile Device Management and Mobile Application Management Requirements](#4-mobile-device-management-and-mobile-application-management-requirements)
5. [Device Encryption](#5-device-encryption)
6. [Application Management](#6-application-management)
7. [Remote Wipe Capability](#7-remote-wipe-capability)
8. [Jailbreak and Root Detection](#8-jailbreak-and-root-detection)
9. [Approved Applications List](#9-approved-applications-list)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Compliance, Monitoring, and Enforcement](#11-compliance-monitoring-and-enforcement)
12. [Exceptions and Waivers](#12-exceptions-and-waivers)
13. [Review and Approval](#13-review-and-approval)
14. [References](#14-references)
15. [Appendices](#15-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Mobile Device Standard establishes the minimum security requirements that [Organization Name] imposes on all mobile devices used to access, process, transmit, or store information classified as National Critical Information Infrastructure (NCII) data, or systems designated as NCII under the Cyber Security Act 2024 (Act 854). The Standard is issued under the authority of the Chief Information Security Officer and is mandatory for all personnel, contractors, and third parties who operate mobile devices within the organizational environment.

The Standard aims to:

- Protect the confidentiality, integrity, and availability of NCII systems and data accessed via mobile devices.
- Define a consistent baseline of technical and administrative controls for mobile device usage.
- Ensure [Organization Name] meets its obligations as an NCII entity under Act 854, specifically Section 18, which requires NCII entities to implement and maintain prescribed cybersecurity measures.
- Reduce the risk of unauthorized access, data leakage, and mobile-vector cyber threats that could impact critical services.

### 1.2 Scope

This Standard applies to:

**Devices in scope:**

- Corporate-owned smartphones and tablets (iOS, Android, and other mobile operating systems) issued by [Organization Name].
- Personally Owned Devices (BYOD) enrolled under the organization's Mobile Device Management (MDM) program, where such enrollment is a condition of accessing organizational systems or data.
- Mobile devices used by third-party vendors, contractors, or managed service providers when accessing [Organization Name] NCII systems or data.

**Systems and data in scope:**

- All systems designated or notified as NCII by [Organization Name] or by the National Cyber Security Agency (NACSA).
- Data classified as Confidential or above under [Organization Name]'s data classification policy.
- Corporate email, collaboration platforms, enterprise applications, and internal networks accessed via mobile devices.

**Personnel in scope:**

- All permanent employees, contract staff, interns, vendors, and third parties of [Organization Name] who use mobile devices to access organizational systems or data.

**Out of scope:**

- Laptops and desktop computers (governed by the Endpoint Security Standard).
- IoT and operational technology (OT) devices (governed by the OT/ICS Security Standard).
- Mobile devices used exclusively on isolated networks with no connectivity to NCII systems.

---

## 2. Regulatory Context and Obligations

### 2.1 Regulatory Framework

*This section should describe the specific regulatory obligations that make this Standard necessary. Reference all applicable Acts, guidelines, and frameworks that impose requirements on mobile device security.*

[Organization Name] is designated as an NCII entity under the **Cyber Security Act 2024 (Act 854)** and is subject to the cybersecurity obligations prescribed therein. The following provisions are directly relevant to this Standard:

| Reference | Provision | Relevance to this Standard |
|---|---|---|
| Act 854, Section 18 | Duty of NCII entity to comply with cybersecurity measures | Requires NCII entities to implement prescribed cybersecurity measures; this Standard operationalizes those measures for mobile devices. |
| Act 854, Section 18(2) | Implementation of minimum cybersecurity standards | Mandates that NCII entities establish and maintain minimum cybersecurity standards applicable to their operating environment, including mobile endpoints. |
| [NACSA NCII Sector Policy — [Sector Name]] | Sector-specific cybersecurity requirements | [Describe any sector-specific policy applicable to your organization's NCII designation.] |
| [BNM Risk Management in Technology (RMiT) Policy — where applicable] | Technology risk management | Where [Organization Name] is a financial institution, RMiT requirements for mobile device controls complement and supplement this Standard. |
| Personal Data Protection Act 2010 (PDPA) | Protection of personal data | Personal data accessed via mobile devices must be protected in accordance with PDPA principles. |
| [Organization Name] Information Security Policy | Overarching security governance | This Standard is issued under the authority granted by the Information Security Policy. |

### 2.2 Relationship to Other Standards and Policies

*List the related internal documents that this Standard should be read alongside.*

This Standard should be read in conjunction with the following [Organization Name] documents:

- Information Security Policy
- Data Classification and Handling Policy
- Acceptable Use Policy
- Endpoint Security Standard
- Network Access Control Standard
- Identity and Access Management Standard
- Third Party and Vendor Management Policy
- Incident Response Plan

---

## 3. Definitions and Abbreviations

### 3.1 Definitions

*Define all technical and regulatory terms used in this document to ensure consistent interpretation across the organization.*

| Term | Definition |
|---|---|
| **Mobile Device** | A portable computing device including smartphones, tablets, and similar handheld devices capable of connecting to organizational networks or accessing organizational data. |
| **Corporate-Owned Device** | A mobile device procured, owned, and managed by [Organization Name] and issued to an employee or contractor for business use. |
| **Personally Owned Device (BYOD)** | A mobile device owned by an employee or contractor that is enrolled into the organization's MDM program for the purpose of accessing organizational systems or data. |
| **MDM (Mobile Device Management)** | A software solution that enables centralized management, configuration, monitoring, and control of mobile devices. |
| **MAM (Mobile Application Management)** | A software solution that provides management and security controls at the application layer, enabling management of corporate applications and data without necessarily managing the entire device. |
| **NCII (National Critical Information Infrastructure)** | Systems, networks, or assets whose disruption would have a significant impact on national security, economy, public health, or safety, as defined under Act 854. |
| **NACSA** | National Cyber Security Agency — the national agency responsible for cybersecurity matters in Malaysia, including oversight of NCII entities. |
| **Jailbreak** | The process of removing software restrictions imposed by the manufacturer on an iOS device, allowing unauthorized code execution and bypassing of security controls. |
| **Root** | The process of gaining privileged administrative access to an Android device beyond what is provided by the manufacturer, which can bypass security controls. |
| **Remote Wipe** | The capability to remotely erase all or selected data from a mobile device, typically exercised when a device is lost, stolen, or when an employee departs. |
| **Containerization** | A technology approach that creates a secure, encrypted, and isolated partition on a mobile device to separate corporate data and applications from personal data. |
| **Enrollment** | The process by which a mobile device is registered with the organization's MDM/MAM solution and becomes subject to organizational security policies. |
| **Selective Wipe** | The erasure of only the corporate data and applications from a device, leaving personal data intact. Typically applied to BYOD devices. |
| **Full Wipe** | The complete factory reset and erasure of all data on a device. Typically applied to corporate-owned devices. |

### 3.2 Abbreviations

| Abbreviation | Meaning |
|---|---|
| Act 854 | Cyber Security Act 2024 |
| BNM | Bank Negara Malaysia |
| BYOD | Bring Your Own Device |
| CISO | Chief Information Security Officer |
| IAM | Identity and Access Management |
| IT | Information Technology |
| MAM | Mobile Application Management |
| MDM | Mobile Device Management |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| OS | Operating System |
| PDPA | Personal Data Protection Act 2010 |
| PIN | Personal Identification Number |
| RMiT | Risk Management in Technology |
| SOC | Security Operations Centre |
| TLS | Transport Layer Security |
| VPN | Virtual Private Network |

---

## 4. Mobile Device Management and Mobile Application Management Requirements

### 4.1 MDM Program Overview

*Describe the organization's MDM program, including the approved solution, enrollment requirements, and what the MDM policy enforces. This section should provide sufficient detail for auditors to assess the adequacy of the MDM controls.*

[Organization Name] operates a centralized Mobile Device Management program using **[MDM Solution Name, e.g., Microsoft Intune / Jamf / VMware Workspace ONE]**. All mobile devices accessing NCII systems or data must be enrolled in the MDM program prior to accessing organizational resources.

**MDM Program Objectives:**

- Enforce baseline security configurations across all managed devices.
- Provide visibility into the device inventory and compliance posture.
- Enable remote management, including configuration updates and remote wipe.
- Ensure separation of corporate and personal data on BYOD devices.
- Detect and respond to non-compliant or compromised devices.

### 4.2 Enrollment Requirements

*Specify the conditions under which enrollment is mandatory, and the process for enrollment.*

| Requirement | Corporate-Owned Device | BYOD Device |
|---|---|---|
| MDM Enrollment | **Mandatory** | **Mandatory** (condition of NCII access) |
| MAM Enrollment | Mandatory | Mandatory |
| User acknowledgment of monitoring | Required | Required (prior to enrollment) |
| BYOD Privacy Notice | Not applicable | Must be provided and signed |
| Maximum enrollment period | Device lifecycle | Duration of employment/engagement |

**Enrollment process:**

1. User submits a mobile device access request via [ITSM/Ticketing System Name].
2. IT/Security team reviews and approves the request.
3. User receives enrollment instructions and installs the MDM agent/profile.
4. Device compliance is validated by the MDM solution before network access is granted.
5. Device is recorded in the mobile device asset register.

### 4.3 MDM Policy Configurations

*List the minimum technical configurations that must be enforced by the MDM solution.*

The MDM solution must enforce, at a minimum, the following configurations on all enrolled devices:

- **Screen lock:** Automatic screen lock must activate after no more than **[5] minutes** of inactivity.
- **Authentication:** A minimum [6]-digit PIN, password, or biometric authentication must be enforced. Simple patterns (e.g., 1234, sequential) are prohibited.
- **Failed authentication lockout:** Device must lock or wipe after no more than **[10]** consecutive failed authentication attempts.
- **OS version enforcement:** Devices must run a supported OS version. Devices running end-of-life OS versions will be blocked from accessing organizational resources.
- **Patch compliance:** Security patches must be applied within **[30] days** of release for critical patches and **[60] days** for standard patches.
- **Network security:** Devices must not connect to NCII systems via unsecured public Wi-Fi without an approved VPN.
- **Configuration profile integrity:** MDM profiles must not be removable by the user without prior approval and de-enrollment.

### 4.4 MAM Controls

*Describe the Mobile Application Management controls applied to the corporate application layer, particularly for BYOD environments where full MDM may not control the entire device.*

Where MAM is deployed (particularly for BYOD), the following controls must be applied to the corporate application container:

- Copy/paste restrictions between corporate and personal applications.
- Data transfer restrictions preventing corporate data from being shared to unapproved personal applications.
- Application-level PIN or biometric authentication for corporate application containers.
- Encryption of data within managed applications.
- Screenshot prevention for applications handling sensitive NCII data.
- Application-level remote wipe of corporate data without affecting personal data.

---

## 5. Device Encryption

*This section defines the encryption requirements for mobile devices. Encryption is a foundational control for protecting data at rest on mobile devices in the event of loss or theft.*

### 5.1 Encryption Requirements

All mobile devices enrolled in the MDM program and used to access NCII systems or data must comply with the following encryption requirements:

| Requirement | iOS Devices | Android Devices |
|---|---|---|
| **Full device encryption** | Mandatory (enforced by default from iOS 8 onwards; MDM must verify) | Mandatory (must be enforced via MDM policy) |
| **Encryption standard** | AES-256 (hardware-enforced) | AES-256 |
| **Encrypted backup** | Mandatory — iTunes/iCloud backups of corporate devices must be encrypted | Mandatory |
| **External storage encryption** | Not applicable (iOS) | Mandatory — external SD cards used on corporate devices must be encrypted or prohibited |
| **MDM compliance verification** | MDM must report and enforce encryption compliance | MDM must report and enforce encryption compliance |

### 5.2 Encryption Key Management

- Encryption keys for corporate-owned devices must be managed by [Organization Name]'s IT Security team.
- Escrow keys for corporate-owned iOS devices must be stored in [Key Escrow Solution Name] and accessible only to authorized IT administrators.
- For BYOD devices, device encryption is the responsibility of the device owner; MDM must validate encryption status before granting access.
- Encryption keys must not be stored on the device they protect.

### 5.3 Data in Transit

- All data transmitted between mobile devices and NCII systems must use TLS 1.2 or higher.
- Corporate email and collaboration applications must enforce encrypted connections and must not allow the user to downgrade or bypass encryption.
- Where public Wi-Fi or untrusted networks are used, an approved VPN must be established before accessing NCII systems.
- **Approved VPN solution:** [VPN Solution Name, e.g., Cisco AnyConnect / GlobalProtect / Zscaler]

### 5.4 Non-Compliant Devices

Devices found to be non-compliant with encryption requirements will be:

1. Flagged by the MDM solution and reported to the IT Security team.
2. Blocked from accessing NCII systems until compliance is restored.
3. Logged as a compliance incident and reviewed by the CISO.

---

## 6. Application Management

*This section governs how applications are installed, managed, and removed on mobile devices. Unmanaged application installation is a significant attack vector and must be controlled.*

### 6.1 Application Installation Controls

| Control | Corporate-Owned Device | BYOD Device |
|---|---|---|
| App installation source | Approved enterprise app catalog or MDM-pushed only | Personal apps — device owner's discretion; Corporate apps — MDM-pushed or approved enterprise catalog only |
| Sideloading (installation from unofficial sources) | **Prohibited** | Prohibited within the corporate container |
| App Store / Google Play unrestricted access | Restricted — MDM enforces allowlist | Permitted for personal partition; restricted for corporate container |
| Mandatory corporate applications | Enforced via MDM | Enforced via MAM for corporate container |

### 6.2 Application Vetting Process

*Describe the process by which applications are evaluated and approved before being added to the approved list.*

Prior to deployment or approval of a new application, the following vetting steps must be completed:

1. **Business justification:** Application owner submits a request with a business case.
2. **Security assessment:** IT Security reviews the application for:
   - Known vulnerabilities (CVE database check).
   - Privacy permissions (microphone, camera, location, contacts — reviewed for necessity).
   - Data handling and storage practices (privacy policy review).
   - Developer reputation and update history.
3. **Legal and compliance review:** Legal or compliance team reviews licensing and PDPA implications.
4. **Approval:** CISO or designated authority approves the application.
5. **Listing:** Approved application is added to the Approved Applications List (see Section 9).
6. **Deployment:** Application is pushed via MDM/MAM or listed in the enterprise app catalog.

### 6.3 Application Updates

- Critical security updates for approved applications must be applied within **[14] days** of release.
- Non-critical updates must be applied within **[30] days** of release.
- MDM must enforce automatic update policies or alert users/IT staff when updates are overdue.
- Applications that are no longer supported by the vendor (end-of-life) must be removed or replaced within **[60] days** of end-of-life announcement.

### 6.4 Prohibited Applications

The following categories of applications are prohibited on devices accessing NCII systems:

- Applications from unknown or untrusted developers not listed in the Approved Applications List.
- Applications that require device root or jailbreak to operate.
- Applications identified as malware, spyware, or adware.
- Peer-to-peer file sharing applications.
- Anonymization tools (e.g., TOR browsers) unless specifically approved for security research purposes.
- Applications that exfiltrate corporate data to unauthorized cloud storage services.
- [Additional prohibited categories as determined by [Organization Name]]

---

## 7. Remote Wipe Capability

*Remote wipe is a critical control for protecting NCII data in the event of device loss, theft, or employee termination. This section defines the requirements and procedures for remote wipe.*

### 7.1 Remote Wipe Requirements

All enrolled devices must support and have enabled the following remote wipe capabilities through the MDM solution:

| Capability | Corporate-Owned Device | BYOD Device |
|---|---|---|
| **Full wipe** (factory reset) | Mandatory | Available but requires user notification (except in security incidents) |
| **Selective/corporate wipe** (corporate data only) | Mandatory | Mandatory (primary wipe method for BYOD) |
| **Remote lock** | Mandatory | Mandatory |
| **Activation Lock bypass** (iOS) | Mandatory — IT must retain bypass codes | Not applicable |
| **Wipe confirmation** | Logged in MDM audit trail | Logged in MDM audit trail |
| **Wipe verification** | IT must confirm wipe completion | IT must confirm wipe completion |

### 7.2 Triggering Conditions

A remote wipe must be initiated under the following conditions:

| Trigger | Wipe Type | Authorization Required |
|---|---|---|
| Device reported lost or stolen | Full wipe (corporate); Selective wipe (BYOD) | IT Security + Line Manager |
| Employee resignation or termination | Selective wipe (BYOD); Full wipe (corporate) | HR + IT Security |
| Employee disciplinary action involving data risk | Full wipe (corporate); Selective wipe (BYOD) | CISO + HR |
| Confirmed or suspected malware infection | Full wipe | IT Security |
| MDM compliance failure exceeding [X] days | Selective wipe of corporate data | IT Security |
| Device not seen by MDM for more than [30] days | Selective wipe of corporate data | IT Security |

### 7.3 Remote Wipe Procedure

*Document the step-by-step procedure for initiating and verifying a remote wipe. This should be maintained as a runbook referenced from this section.*

1. The triggering event is identified and reported to IT Security.
2. IT Security logs the wipe request in [ITSM/Ticketing System Name], capturing the justification and authorizing parties.
3. IT Security initiates the appropriate wipe (full or selective) from the MDM console.
4. MDM records the wipe action with timestamp and administrator identity.
5. The MDM solution is monitored for wipe completion confirmation. If the device is offline, the wipe command is queued and will execute upon the device's next connection.
6. Upon confirmed wipe, the device is removed from the asset register (for full wipe) or the corporate data inventory is updated (for selective wipe).
7. The user (if a BYOD wipe) is notified of the corporate data removal.
8. The incident or offboarding ticket is updated and closed.

**Reference:** See [Appendix C — Remote Wipe Runbook] for detailed operational procedures.

### 7.4 BYOD Privacy Considerations

- Users must be informed at enrollment that their device is subject to remote corporate data wipe.
- Selective wipe is the default method for BYOD devices and must not affect personal data.
- Full wipe of a BYOD device requires CISO authorization and documented justification (e.g., security incident).
- Users must be provided written notice of any wipe action performed on their personally owned device.

---

## 8. Jailbreak and Root Detection

*Jailbroken or rooted devices have had their manufacturer-imposed security controls removed, rendering them significantly more vulnerable to compromise. This section defines [Organization Name]'s controls to detect and respond to such devices.*

### 8.1 Detection Requirements

The MDM solution must continuously monitor enrolled devices for indicators of jailbreak (iOS) or root (Android) status. Detection mechanisms must include:

- **MDM-native detection:** The MDM agent must perform jailbreak/root checks at enrollment and at each subsequent check-in.
- **Frequency of checks:** Jailbreak/root status must be evaluated at a minimum of every **[24] hours**, or upon any device check-in event.
- **Detection coverage:** The MDM solution must be capable of detecting common jailbreak/root methods, including but not limited to:
  - Presence of Cydia, Sileo, or equivalent package managers (iOS).
  - Presence of Magisk, SuperSU, or equivalent root management tools (Android).
  - Integrity failures of system partitions.
  - Abnormal file system permissions.
  - Use of modified OS builds or custom ROMs (Android).

### 8.2 Response to Detected Jailbreak/Root

Upon detection of a jailbroken or rooted device, the following automated and manual responses must be triggered:

| Step | Action | Responsible Party | Timeframe |
|---|---|---|---|
| 1 | MDM automatically blocks device from accessing NCII systems and corporate resources | MDM solution (automated) | Immediate |
| 2 | Alert generated and sent to IT Security and the device user | MDM solution (automated) | Immediate |
| 3 | Incident ticket created in [ITSM/Ticketing System Name] | IT Security | Within [2] hours |
| 4 | IT Security contacts the user to assess whether the jailbreak/root is accidental or deliberate | IT Security | Within [4] business hours |
| 5 | If accidental: User guided to restore device to factory settings and re-enroll | IT Security | Within [24] hours |
| 6 | If deliberate: Selective/full wipe initiated; access permanently revoked pending investigation | CISO / IT Security | Within [4] hours of determination |
| 7 | HR informed if deliberate action may constitute a policy violation | CISO | Within [24] hours |
| 8 | Incident closed and documented in the security incident log | IT Security | Upon resolution |

### 8.3 User Obligations

Users must not:

- Jailbreak or root any device enrolled in the MDM program.
- Attempt to circumvent or disable jailbreak/root detection mechanisms.
- Enroll a device that has been jailbroken or rooted, even if subsequently restored.

Users who knowingly enroll a jailbroken or rooted device may be subject to disciplinary action in accordance with [Organization Name]'s [Disciplinary Policy Name].

---

## 9. Approved Applications List

### 9.1 Overview

*This section provides the framework and current listing of applications approved for use on devices accessing NCII systems. The full Approved Applications List must be maintained as a living document and reviewed at least annually or upon any significant change.*

[Organization Name] maintains an Approved Applications List for all mobile devices enrolled in the MDM program. Installation of applications not on the Approved Applications List on corporate-owned devices is prohibited. On BYOD devices, only applications within the corporate container are subject to the Approved Applications List.

The Approved Applications List is maintained by IT Security in conjunction with relevant business owners and is published on [Internal Portal/Intranet Link].

### 9.2 Approved Applications — Corporate Mandatory

*The following applications are mandatory on all corporate-enrolled devices and are pushed via MDM.*

| # | Application Name | Platform | Version (Minimum) | Purpose | Data Classification |
|---|---|---|---|---|---|
| 1 | [MDM Agent, e.g., Intune Company Portal] | iOS / Android | [Version] | MDM enrollment and compliance | Internal |
| 2 | [Corporate Email Client, e.g., Microsoft Outlook] | iOS / Android | [Version] | Corporate email and calendar | Confidential |
| 3 | [Collaboration Platform, e.g., Microsoft Teams] | iOS / Android | [Version] | Instant messaging and collaboration | Confidential |
| 4 | [VPN Client, e.g., Cisco AnyConnect] | iOS / Android | [Version] | Secure remote access | Confidential |
| 5 | [Enterprise MFA App, e.g., Microsoft Authenticator] | iOS / Android | [Version] | Multi-factor authentication | Confidential |
| 6 | [Mobile Threat Defence App] | iOS / Android | [Version] | Device threat detection | Internal |
| 7 | [Other mandatory application] | [Platform] | [Version] | [Purpose] | [Classification] |

### 9.3 Approved Applications — Business Use (Optional)

*The following applications are approved for business use and may be installed on request.*

| # | Application Name | Platform | Version (Minimum) | Purpose | Approved Date | Business Owner |
|---|---|---|---|---|---|---|
| 1 | [Application Name] | [Platform] | [Version] | [Purpose] | [Date] | [Owner] |
| 2 | [Application Name] | [Platform] | [Version] | [Purpose] | [Date] | [Owner] |
| 3 | [Application Name] | [Platform] | [Version] | [Purpose] | [Date] | [Owner] |

### 9.4 Requesting a New Application

*Describe the process for business users to request approval of a new application for the Approved Applications List.*

To request that an application be evaluated and added to the Approved Applications List, the requesting business unit must:

1. Submit a request via [ITSM Portal] using the **Mobile Application Approval Request** form.
2. Provide the following information:
   - Application name, vendor, and version.
   - Business justification and intended use.
   - Data types to be accessed or stored by the application.
   - Link to the application's privacy policy.
3. IT Security will complete the application vetting process (as defined in Section 6.2) within **[10] business days**.
4. The outcome (approved, conditionally approved, or rejected) will be communicated to the requester.
5. Approved applications will be added to the Approved Applications List within **[5] business days** of approval.

### 9.5 Approved Applications List Review

- The Approved Applications List must be reviewed **annually** as part of the annual review of this Standard.
- IT Security must also review the list whenever an application vendor announces a significant security vulnerability or end-of-life.
- Applications that no longer have a valid business justification must be removed from the list.

---

## 10. Roles and Responsibilities

*This section defines accountability for mobile device security across the organization using a RACI (Responsible, Accountable, Consulted, Informed) framework.*

### 10.1 RACI Matrix

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | CISO | IT Security | IT Operations | Business Unit Manager | End User | HR | Legal/Compliance |
|---|---|---|---|---|---|---|---|
| Define and maintain Mobile Device Standard | A | R | C | C | I | I | C |
| Operate and maintain MDM/MAM solution | I | C | R/A | I | I | I | I |
| Enforce MDM policies and configurations | I | R/A | R | I | I | I | I |
| Device enrollment and de-enrollment | I | C | R/A | I | R | I | I |
| Application vetting and approval | A | R | C | C | I | I | C |
| Maintain Approved Applications List | A | R | C | I | I | I | I |
| Monitor device compliance | I | R/A | R | I | I | I | I |
| Respond to jailbreak/root detection | A | R | R | I | I | I | I |
| Initiate remote wipe | A | R | R | C | I | C | I |
| Investigate mobile security incidents | A | R | C | I | I | I | I |
| Conduct annual Standard review | A | R | C | C | I | I | C |
| NCII reporting obligations to NACSA | A | R | I | I | I | I | R |
| User awareness and training | C | R/A | I | R | R | C | I |
| Employee offboarding (device return/wipe) | I | R | R | I | I | A | I |

### 10.2 Role Descriptions

| Role | Responsibilities under this Standard |
|---|---|
| **CISO** | Owns this Standard; accountable for mobile security posture; approves exceptions; escalates material incidents to executive management and NACSA as required. |
| **IT Security** | Administers the MDM/MAM solution; maintains the Approved Applications List; monitors compliance; investigates incidents; conducts annual review of this Standard. |
| **IT Operations** | Implements MDM configurations; manages device enrollment/de-enrollment; applies patches; executes remote wipe commands. |
| **Business Unit Manager** | Ensures their team members comply with this Standard; approves business justifications for application requests; enforces compliance within their units. |
| **End User** | Complies with all requirements in this Standard; reports lost or stolen devices immediately; does not jailbreak/root enrolled devices; completes required training. |
| **HR** | Notifies IT Security of employee departures, role changes, and disciplinary actions; co-owns the offboarding process. |
| **Legal/Compliance** | Advises on PDPA and regulatory implications; supports NACSA reporting obligations; reviews exceptions and waivers. |

---

## 11. Compliance, Monitoring, and Enforcement

### 11.1 Compliance Monitoring

IT Security must maintain continuous visibility into the compliance posture of enrolled mobile devices through the MDM solution. The following metrics must be tracked and reported:

| Metric | Reporting Frequency | Audience |
|---|---|---|
| Total enrolled device count (by type: corporate/BYOD) | Monthly | CISO |
| Devices with encryption disabled | Weekly | IT Security; Monthly summary to CISO |
| Devices running unsupported/end-of-life OS | Weekly | IT Security; Monthly summary to CISO |
| Devices with overdue security patches | Weekly | IT Security; Monthly summary to CISO |
| Devices with unapproved applications detected | Weekly | IT Security; Monthly summary to CISO |
| Jailbroken/rooted device detections | Immediately upon detection | CISO; Monthly summary |
| Remote wipe events | Monthly | CISO; Annual summary to Board/Risk Committee |
| Devices not seen by MDM for >30 days | Monthly | IT Security |
| MDM policy exceptions active | Quarterly | CISO; Compliance |

### 11.2 Auditing

- Mobile device compliance is subject to internal audit review on an **annual** basis.
- IT Security must maintain MDM audit logs for a minimum of **[12] months**, or longer if required by applicable regulations.
- Audit logs must capture: device enrollment/de-enrollment events, policy changes, compliance status changes, wipe events, and administrator actions.
- External auditors and NACSA inspectors must be granted access to MDM reports and logs upon request.

### 11.3 Non-Compliance and Enforcement

Failure to comply with this Standard will result in the following graduated enforcement actions:

| Severity | Example Non-Compliance | Enforcement Action |
|---|---|---|
| **Low** | Overdue application updates (within grace period) | Automated reminder via MDM; User notified |
| **Medium** | Device not enrolled within required timeframe; OS not updated within deadline | Access blocked until remediated; Line Manager notified |
| **High** | Jailbreak/root detected; Prohibited applications installed; Unauthorized personal data storage of NCII data | Immediate access revocation; IT Security investigation; HR involvement |
| **Critical** | Deliberate circumvention of MDM; Data exfiltration via mobile device | Immediate access revocation; Formal disciplinary proceedings; Legal/NACSA notification if applicable |

---

## 12. Exceptions and Waivers

### 12.1 Exception Process

*Describe how personnel or business units may request an exception to any requirement in this Standard.*

Exceptions to this Standard may only be granted by the CISO. Requests must be submitted in writing using the **Information Security Exception Request Form** [Form Reference Number], available on [Internal Portal].

Exception requests must include:

- The specific requirement(s) for which an exception is requested.
- The business justification for the exception.
- The compensating controls that will be implemented to mitigate the risk.
- The requested duration of the exception (maximum: **12 months**).
- Risk acceptance sign-off from the relevant Business Unit Head.

### 12.2 Exception Register

All approved exceptions must be recorded in the Information Security Exception Register maintained by IT Security. The register must include:

| Field | Description |
|---|---|
| Exception ID | Unique identifier |
| Requestor | Name and department |
| Standard Reference | Section(s) of this Standard affected |
| Justification | Business reason for exception |
| Compensating Controls | Mitigating measures in place |
| Approval Date | Date CISO approved |
| Expiry Date | Date exception expires |
| Review Date | Date exception is next reviewed |
| Status | Active / Expired / Revoked |

---

## 13. Review and Approval

### 13.1 Review Schedule

This Standard must be reviewed:

- **Annually** by the CISO and IT Security team, regardless of whether changes are required.
- **Following any significant security incident** involving mobile devices.
- **Upon material changes** to [Organization Name]'s mobile technology environment (e.g., new MDM platform, new device types).
- **Upon publication of new or amended NACSA guidelines** relevant to mobile device security.
- **Upon identification of significant new threats** to mobile device security.

### 13.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [1.1] | [Date] | [Author Name] | [Description of changes] |
| [2.0] | [Date] | [Author Name] | [Description of changes] |

### 13.3 Approval Sign-Off

*This Standard requires the following approvals before it takes effect. Digital or physical signatures are acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Chief Information Security Officer | [Name] | [Signature] | [Date] |
| Chief Information Officer / Head of IT | [Name] | [Signature] | [Date] |
| Chief Risk Officer / Head of Risk | [Name] | [Signature] | [Date] |
| Chief Executive Officer (or designated authority) | [Name] | [Signature] | [Date] |

---

## 14. References

### 14.1 Regulatory References

| Reference | Document | Relevant Sections |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Section 18 — Duty of NCII entity to comply with cybersecurity measures |
| Act 854 | Cyber Security Act 2024 | Section 18(2) — Implementation of minimum cybersecurity standards |
| [NACSA] | [Applicable NCII Sector Policy or Guideline] | [Relevant sections] |
| PDPA 2010 | Personal Data Protection Act 2010 | Principle 4 — Security; Principle 7 — Data Integrity |
| [BNM RMiT] | Risk Management in Technology Policy Document (where applicable) | [Relevant paragraphs] |

### 14.2 Internal References

| Document | Description |
|---|---|
| Information Security Policy | Parent policy governing all information security standards |
| Data Classification and Handling Policy | Defines data classification levels and handling requirements |
| Acceptable Use Policy | Governs acceptable use of organizational IT assets including mobile devices |
| Endpoint Security Standard | Security requirements for laptops and desktops |
| Network Access Control Standard | Controls for network access including mobile device network access |
| Identity and Access Management Standard | Authentication and access control requirements |
| Third Party and Vendor Management Policy | Requirements applicable to vendors using mobile devices |
| Incident Response Plan | Procedures for responding to security incidents |

### 14.3 Industry Standards and Frameworks

| Standard / Framework | Relevance |
|---|---|
| NIST SP 800-124 Rev. 2 — Guidelines for Managing the Security of Mobile Devices in the Enterprise | Guidance on MDM controls, mobile device lifecycle, and threat landscape |
| CIS Benchmarks for iOS / Android | Hardening baselines for mobile operating systems |
| ISO/IEC 27001:2022 — Annex A.6.2 (Mobile Devices) | International standard for mobile device security |
| OWASP Mobile Application Security Verification Standard (MASVS) | Application security assessment for mobile applications |

---

## 15. Appendices

### Appendix A — Mobile Device Enrollment Request Form

*This appendix provides the template form for requesting enrollment of a new mobile device. Replace with a link to the live form in [ITSM Portal] or embed the form template below.*

**Form Reference:** [Form Reference Number]

| Field | Response |
|---|---|
| Requestor Name | |
| Employee ID | |
| Department | |
| Line Manager | |
| Device Type | ☐ Corporate-Owned ☐ BYOD |
| Device Make and Model | |
| Device Serial Number / IMEI | |
| Operating System and Version | |
| Business Justification | |
| Data/Systems to be Accessed | |
| Acknowledgment of Monitoring (BYOD) | ☐ I acknowledge my device will be subject to MDM monitoring and selective wipe |
| Requestor Signature | |
| Date | |
| IT Security Approval | |
| Approval Date | |

---

### Appendix B — BYOD User Agreement

*This appendix provides the BYOD User Agreement that must be signed by all employees and contractors enrolling a personally owned device. This agreement establishes the mutual understanding of monitoring, wipe capabilities, and acceptable use for BYOD devices.*

**BYOD User Agreement**

I, [Employee/Contractor Name], acknowledge and agree to the following conditions as a prerequisite to enrolling my personally owned device into [Organization Name]'s MDM program:

1. **Monitoring:** I understand that [Organization Name] will have visibility into the compliance status of my device (OS version, encryption status, enrolled applications in the corporate container) through the MDM solution. [Organization Name] will not access my personal data, personal applications, or personal communications.

2. **Selective Wipe:** I understand that [Organization Name] reserves the right to perform a selective wipe, removing all corporate data and applications from my device, in the circumstances defined in the Mobile Device Standard (Section 7.2). I acknowledge that my personal data will not be affected by a selective wipe.

3. **Full Wipe:** I understand that a full wipe (factory reset) of my device may be performed in exceptional circumstances (e.g., a confirmed security incident) with CISO authorization. I will be notified in advance where operationally possible.

4. **Compliance:** I agree to comply with the requirements of the [Organization Name] Mobile Device Standard, including installing required MDM profiles, maintaining OS and application updates, and not jailbreaking or rooting my device while enrolled.

5. **Prohibited Use:** I agree not to use my enrolled device in any manner that violates [Organization Name]'s Acceptable Use Policy or any applicable law.

6. **Device Support:** I acknowledge that [Organization Name] does not provide support for the personal functions or applications on my device. IT Support is limited to the corporate container and MDM enrollment.

7. **De-enrollment:** I understand that [Organization Name] will de-enroll my device and remove all corporate data upon my departure from the organization or upon request.

| Field | Response |
|---|---|
| Employee Name | |
| Employee ID | |
| Department | |
| Device Make and Model | |
| Device Serial Number / IMEI | |
| Signature | |
| Date | |
| Witnessed by (IT Security) | |
| Date | |

---

### Appendix C — Remote Wipe Runbook

*This appendix provides the step-by-step operational runbook for IT Security and IT Operations when initiating a remote wipe. Expand this section with MDM-solution-specific steps for [MDM Solution Name].*

**Runbook Reference:** [Runbook Reference Number]

**Pre-requisites:**
- Authorization from CISO and/or HR as required (see Section 7.2).
- Incident ticket created in [ITSM/Ticketing System Name].
- Device IMEI/serial number and MDM device identifier confirmed.

**Step-by-step procedure:**

1. Log into the MDM administration console: [MDM Console URL — Internal Link Only].
2. Navigate to **Devices** → **Search** → Locate the device by IMEI, serial number, or user account.
3. Confirm device identity (check assigned user, device model, last check-in time).
4. Select the appropriate action:
   - **Selective Wipe (corporate data only):** Navigate to **Actions** → **Retire** or **Remove Corporate Data**.
   - **Full Wipe (factory reset):** Navigate to **Actions** → **Wipe** → Confirm the wipe command.
5. Add a note to the MDM device record referencing the incident ticket number and authorizing parties.
6. Monitor the device status in the MDM console for wipe completion.
   - If the device is online, wipe completion is typically confirmed within [X] minutes.
   - If the device is offline, the wipe command is queued and will execute upon next connection. Set a follow-up reminder.
7. Upon confirmed wipe:
   - For full wipe: Remove device from the asset register in [Asset Management System].
   - For selective wipe: Update the device record to reflect corporate data removal date.
8. Update the incident ticket with the wipe outcome and close the ticket.
9. Notify the user (and HR, if applicable) of the completed action.

**Escalation:** If the wipe command fails to execute within [72] hours (e.g., device remains offline), escalate to CISO. Consider whether law enforcement referral is necessary (e.g., suspected theft).

---

### Appendix D — Mobile Device Asset Register Template

*[Organization Name] must maintain an up-to-date register of all enrolled mobile devices. The register may be maintained within the MDM solution's reporting module or as a separate register. Minimum fields are listed below.]*

| Device ID | Assigned User | Employee ID | Department | Device Type | Make & Model | Serial No. / IMEI | OS & Version | Enrollment Date | Last MDM Check-In | Compliance Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [ID] | [Name] | [ID] | [Dept] | Corporate / BYOD | [Make/Model] | [S/N] | [OS/Ver] | [Date] | [Date/Time] | Compliant / Non-Compliant | [Notes] |

---

### Appendix E — Glossary of MDM Compliance States

*This appendix provides definitions for the compliance status indicators used in MDM reporting and dashboards.*

| Compliance State | Definition | Required Action |
|---|---|---|
| **Compliant** | Device meets all enforced MDM policy requirements. | None — continue monitoring. |
| **Non-Compliant** | Device has failed one or more MDM policy checks. | IT Security to investigate and remediate within the defined timeframe. |
| **Grace Period** | Device is non-compliant but within the allowable remediation window. | User and IT Security notified; remediation in progress. |
| **Blocked** | Device access to corporate resources has been restricted due to sustained non-compliance. | IT Security and Line Manager notified; remediation required before access is restored. |
| **Retired** | Corporate data has been selectively wiped from the device; device is no longer managed. | Remove from active device register. |
| **Wiped** | Full factory reset has been performed. | Remove from asset register. |
| **Not Evaluated** | Device has not checked in with MDM within the expected timeframe. | IT Security to investigate; selective wipe initiated if device exceeds [30]-day absence threshold. |

---

*End of Document*

---

**Document Control Notice:** This document is subject to version control. The master copy is maintained by the CISO's office. Printed copies are uncontrolled. Always refer to [Internal Portal Link] for the current approved version.

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Status** | [Draft / Under Review / Approved] |
| **Classification** | Confidential |
| **Next Review** | [Next Review Date] |