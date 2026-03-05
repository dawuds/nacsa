# Certificate Lifecycle Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | PKI/Security Operations |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the framework and structure for maintaining Certificate Lifecycle Logs within [Organization Name]. These logs serve as the authoritative audit record for all Public Key Infrastructure (PKI) certificate events — including issuance, renewal, revocation, and expiry — affecting National Critical Information Infrastructure (NCII) systems.

Certificate Lifecycle Logs are a mandatory compliance artifact under the **Cyber Security Act 2024 (Act 854)**, administered by the National Cyber Security Agency (NACSA). Maintenance of these logs directly supports obligations under **Section 18** of Act 854, which mandates that NCII sector leads and entities implement, maintain, and make available records demonstrating the security and integrity of critical information infrastructure.

### 1.2 Scope

This log applies to:

- All digital certificates (TLS/SSL, code signing, client authentication, S/MIME, device certificates) provisioned on or protecting NCII systems owned or operated by [Organization Name].
- All Certificate Authorities (CA) — internal, subordinate, and third-party — used to issue certificates for in-scope systems.
- All systems, services, and personnel involved in certificate request, approval, issuance, renewal, revocation, and key management processes.
- All NCII sectors as classified by NACSA applicable to [Organization Name], including but not limited to: [Sector Name, e.g., Banking and Finance / Energy / Telecommunications].

### 1.3 Out of Scope

- Certificates used exclusively in non-production, isolated development, or sandboxed environments with no connectivity to NCII systems.
- Self-signed certificates used solely for internal testing, unless deployed on NCII-designated systems.

---

## 2. Regulatory and Policy References

*This section maps this log artifact to its governing regulatory obligations. Authors should confirm applicability against the current version of Act 854 and any NACSA Determination Notices issued to the organization.*

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), **s18** | Obligation of NCII entities to maintain and report on cybersecurity measures, including records of security controls applied to NCII systems. |
| NACSA Cybersecurity Code of Practice (CCoP) | Technical baseline controls referencing PKI and certificate management practices for NCII sectors. |
| [Organization Name] PKI Policy | Internal policy governing certificate lifecycle management. Document ID: [Internal Policy ID] |
| [Organization Name] Information Security Policy | Overarching IS policy. Document ID: [Internal Policy ID] |
| Personal Data Protection Act 2010 (PDPA) | Where certificate logs contain or reference personal data, PDPA data minimisation and retention obligations apply. |

---

## 3. Certificate Issuance Events

*Record all new certificate issuance events in this section. Each entry must capture sufficient detail to reconstruct the approval chain and configuration state of the certificate at the time of issuance. Entries are system-generated where possible and supplemented by manual annotation for exceptions.*

### 3.1 Issuance Log Table

| Log ID | Timestamp (UTC+8) | Certificate Common Name (CN) | Certificate Type | Subject Alternative Names (SAN) | Issuing CA | Serial Number | Validity Period (From) | Validity Period (To) | Key Algorithm & Length | Requested By | Approved By | System / Service | NCII Classification | Ticket / Change Ref |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [LOG-CERT-001] | [YYYY-MM-DD HH:MM:SS] | [e.g., api.example.com.my] | [TLS/SSL \| Code Signing \| Client Auth \| S/MIME \| Device] | [e.g., www.example.com.my, api-v2.example.com.my] | [e.g., DigiCert / Internal Sub-CA 01] | [Hex Serial No.] | [YYYY-MM-DD] | [YYYY-MM-DD] | [e.g., RSA-2048 / ECDSA P-256] | [Requestor Name] | [Approver Name] | [System Name / Service] | [Yes / No] | [CHG-XXXX] |

### 3.2 Issuance Notes and Exceptions

*Document any deviations from standard issuance procedures, emergency certificate requests, or certificates issued outside the normal approval workflow.*

- **[LOG-CERT-001]** — [Describe any exception or note, e.g., "Emergency issuance approved verbally by CISO; retrospective change request CHG-XXXX raised within 24 hours."]
- [Add further entries as required.]

---

## 4. Renewal Actions

*Record all certificate renewal events. A renewal event occurs when a certificate approaching expiry is replaced with a new certificate for the same subject. Renewal logs must be generated no later than the point at which the renewed certificate is installed and active.*

### 4.1 Renewal Log Table

| Log ID | Timestamp (UTC+8) | Certificate CN | Previous Certificate Serial | New Certificate Serial | New Validity (From) | New Validity (To) | Issuing CA | Renewed By | Approved By | Renewal Method | System / Service | Ticket / Change Ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [LOG-REN-001] | [YYYY-MM-DD HH:MM:SS] | [CN] | [Previous Hex Serial] | [New Hex Serial] | [YYYY-MM-DD] | [YYYY-MM-DD] | [CA Name] | [Name / System] | [Approver Name] | [Manual \| Automated (ACME) \| Managed Service] | [System Name] | [CHG-XXXX] | [e.g., Key reuse / New key pair generated] |

### 4.2 Automated Renewal Configuration

*Document any automated renewal mechanisms in use (e.g., ACME protocol, CA-managed auto-renewal). Confirm that automated renewals are captured in this log via integration with the certificate management platform.*

| System / Service | Automation Tooling | Renewal Threshold (Days Before Expiry) | Notification Recipients | Last Verified (Date) |
|---|---|---|---|---|
| [System Name] | [e.g., Certbot / Venafi / DigiCert CertCentral] | [e.g., 30 days] | [Email/Group] | [YYYY-MM-DD] |

---

## 5. Expiry Warnings

*This section tracks expiry warning events generated for certificates within the monitoring scope. Warnings must be logged at defined thresholds and escalated if remediation action is not taken within the required timeframe. Unaddressed expiry warnings that result in certificate expiry must be recorded as an incident.*

### 5.1 Expiry Warning Thresholds

| Warning Level | Days to Expiry | Notification Channel | Escalation Path |
|---|---|---|---|
| Advisory | [e.g., 90 days] | [e.g., Email to PKI Ops team] | [N/A at this stage] |
| Warning | [e.g., 30 days] | [e.g., Email + Ticketing system] | [Security Operations Manager] |
| Critical | [e.g., 14 days] | [e.g., Email + SMS + Ticketing] | [CISO / Head of IT] |
| Emergency | [e.g., 7 days or fewer] | [e.g., All channels + Incident declared] | [Incident Response Team] |

### 5.2 Expiry Warning Log Table

| Log ID | Warning Generated (UTC+8) | Certificate CN | Certificate Serial | Expiry Date | Days to Expiry at Warning | Warning Level | Notified Parties | Acknowledgement Received | Remediation Action | Remediation Completed (Date) | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|
| [LOG-EXP-001] | [YYYY-MM-DD HH:MM:SS] | [CN] | [Serial No.] | [YYYY-MM-DD] | [No. of Days] | [Advisory \| Warning \| Critical \| Emergency] | [Names/Roles] | [Yes / No — Date] | [e.g., Renewal initiated via CHG-XXXX] | [YYYY-MM-DD] | [Open \| Resolved \| Escalated] |

---

## 6. Revocation Events

*Record all certificate revocation events, regardless of the reason. Revocation may be initiated due to key compromise, CA compromise, affiliation change, cessation of operation, or privilege withdrawn. Each revocation must be traceable to an authorising decision and must confirm publication to the relevant Certificate Revocation List (CRL) and/or Online Certificate Status Protocol (OCSP) responder.*

### 6.1 Revocation Log Table

| Log ID | Timestamp (UTC+8) | Certificate CN | Certificate Serial | Issuing CA | Revocation Reason Code | Revocation Reason (Description) | Revoked By | Authorised By | CRL Published (Yes/No) | CRL Publication Timestamp | OCSP Updated (Yes/No) | Affected System / Service | Replacement Certificate Issued | Ticket / Incident Ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [LOG-REV-001] | [YYYY-MM-DD HH:MM:SS] | [CN] | [Serial No.] | [CA Name] | [RFC 5280 Reason Code, e.g., 1 = keyCompromise] | [e.g., Private key exposed in source code repository] | [Name / System] | [Approver Name] | [Yes / No] | [YYYY-MM-DD HH:MM:SS] | [Yes / No] | [System Name] | [Yes — Log ID / No] | [INC-XXXX / CHG-XXXX] | [Additional context] |

### 6.2 RFC 5280 Revocation Reason Codes (Reference)

| Code | Reason |
|---|---|
| 0 | unspecified |
| 1 | keyCompromise |
| 2 | cACompromise |
| 3 | affiliationChanged |
| 4 | superseded |
| 5 | cessationOfOperation |
| 6 | certificateHold |
| 9 | privilegeWithdrawn |
| 10 | aACompromise |

---

## 7. Certificate Transparency Logs

*Certificate Transparency (CT) is a framework for publicly auditing the issuance of TLS/SSL certificates. This section records CT log submission details for all publicly-trusted certificates issued for NCII systems. For internally-issued certificates not submitted to public CT logs, document the rationale and any equivalent internal audit controls.*

### 7.1 CT Log Submission Record

| Log ID | Certificate CN | Certificate Serial | CT Log Operator | CT Log URL | Signed Certificate Timestamp (SCT) | SCT Received (Timestamp) | Logged By | Verification Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
| [LOG-CT-001] | [CN] | [Serial No.] | [e.g., Google Argon / Cloudflare Nimbus] | [CT Log URL] | [Base64-encoded SCT value] | [YYYY-MM-DD HH:MM:SS] | [CA / Automated] | [Verified \| Pending \| Failed] | [e.g., SCT embedded in certificate / TLS extension / OCSP stapling] |

### 7.2 Internal Certificates — CT Exemption Register

*Where certificates are issued by an internal CA and not submitted to public CT logs, document the exemption and compensating controls.*

| Certificate CN | Certificate Serial | Reason for CT Exemption | Compensating Control | Approved By | Review Date |
|---|---|---|---|---|---|
| [CN] | [Serial No.] | [e.g., Internal-only CA; not publicly trusted] | [e.g., Certificate inventory maintained in [Tooling Name]; access restricted to PKI team] | [Approver Name] | [YYYY-MM-DD] |

---

## 8. Key Rotation Records

*This section records all cryptographic key rotation events associated with certificates and CA infrastructure. Key rotation includes both scheduled rotations (e.g., annual CA key renewal) and unscheduled rotations triggered by suspected or confirmed compromise. Key rotation must be distinguished from certificate renewal — a rotation implies generation of a new key pair, whereas a renewal may reuse an existing key pair.*

### 8.1 Key Rotation Log Table

| Log ID | Timestamp (UTC+8) | Subject / System | Previous Key Algorithm & Length | Previous Key Fingerprint (SHA-256) | New Key Algorithm & Length | New Key Fingerprint (SHA-256) | Rotation Type | Rotation Trigger | Rotated By | Approved By | Associated Certificate (New Serial) | Old Certificate Revoked (Yes/No) | Revocation Log Ref | Ticket / Incident Ref | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [LOG-KEY-001] | [YYYY-MM-DD HH:MM:SS] | [System / CA Name] | [e.g., RSA-2048] | [Fingerprint Hash] | [e.g., ECDSA P-256] | [Fingerprint Hash] | [Scheduled \| Unscheduled \| Emergency] | [e.g., Annual rotation policy / Key compromise suspicion / Algorithm deprecation] | [Name / System] | [Approver Name] | [New Certificate Serial] | [Yes / No] | [LOG-REV-XXX \| N/A] | [CHG-XXXX / INC-XXXX] | [e.g., Migration from RSA to ECDSA as part of crypto-agility programme] |

### 8.2 CA Key Material — Custody and Escrow

*Record the location and custody status of CA private key material, including HSM details and key escrow arrangements where applicable.*

| CA Name | Key Storage Method | HSM Make / Model | HSM Serial | Key Escrow Location | Escrow Custodian | Last Key Ceremony Date | Next Key Ceremony Date | Witnesses |
|---|---|---|---|---|---|---|---|---|
| [CA Name, e.g., [Org] Root CA] | [HSM / Software / Cloud KMS] | [e.g., Thales Luna Network HSM 7] | [HSM Serial No.] | [e.g., Secure vault — [Location]] | [Name / Role] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Name, Name, Name] |

---

## 9. Roles and Responsibilities

*The following RACI matrix defines accountability for Certificate Lifecycle Log activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | PKI Operations | Security Operations Centre (SOC) | System / Application Owner | CISO / Security Leadership | IT Audit / Compliance | NACSA (Reporting) |
|---|---|---|---|---|---|---|
| Certificate issuance request and approval | R | I | C | I | I | — |
| Certificate issuance log entry creation | R | I | I | I | I | — |
| Expiry monitoring and warning generation | R | R | I | I | I | — |
| Escalation of unresolved expiry warnings | A | R | C | I | I | — |
| Certificate renewal execution | R | I | C | I | I | — |
| Renewal log entry creation | R | I | I | I | I | — |
| Revocation initiation | R | C | C | A | I | — |
| Revocation log entry and CRL/OCSP update | R | I | I | I | I | — |
| CT log submission and verification | R | I | I | I | I | — |
| Key rotation scheduling and execution | R | I | I | A | C | — |
| Key ceremony witnessing | C | C | — | A | R | — |
| Weekly log review | A | R | — | I | C | — |
| Periodic audit of certificate inventory | C | C | — | A | R | — |
| Regulatory reporting to NACSA (s18) | C | C | — | A | R | R |
| Log retention and archival | R | I | — | I | A | — |

---

## 10. Log Management and Retention

### 10.1 Log Storage and Integrity

*Describe the systems and controls used to store, protect, and ensure the integrity of certificate lifecycle log data.*

- **Primary Log System:** [e.g., Certificate Management Platform — Venafi Trust Protection Platform / DigiCert CertCentral / In-house CMDB]
- **Secondary / Archive Store:** [e.g., SIEM — [SIEM Product Name] / Immutable object storage — [Platform]]
- **Log Integrity Controls:** [e.g., Append-only storage, cryptographic hashing of log batches, WORM media]
- **Access Controls:** Role-based access; log modification restricted to [Role]; all access attempts logged.
- **Backup Frequency:** [e.g., Daily incremental, weekly full]
- **Backup Location:** [e.g., Offsite — [Location] / Cloud — [Region]]

### 10.2 Retention Schedule

| Log Category | Minimum Retention Period | Basis | Archive Format | Disposal Method |
|---|---|---|---|---|
| Certificate Issuance Logs | [e.g., 7 years] | Act 854 s18 / Internal Policy | [e.g., Encrypted JSON / CSV] | [e.g., Secure erasure per NIST SP 800-88] |
| Renewal Logs | [e.g., 7 years] | Act 854 s18 / Internal Policy | [e.g., Encrypted JSON / CSV] | [e.g., Secure erasure per NIST SP 800-88] |
| Expiry Warning Logs | [e.g., 3 years] | Internal Policy | [e.g., Encrypted JSON / CSV] | [e.g., Secure erasure per NIST SP 800-88] |
| Revocation Logs | [e.g., 7 years] | Act 854 s18 / RFC 5280 | [e.g., Encrypted JSON / CSV] | [e.g., Secure erasure per NIST SP 800-88] |
| CT Log Records | [e.g., 7 years] | Act 854 s18 / Internal Policy | [e.g., Encrypted JSON / CSV] | [e.g., Secure erasure per NIST SP 800-88] |
| Key Rotation Records | [e.g., 10 years] | Act 854 s18 / Cryptographic Policy | [e.g., Encrypted JSON / PDF] | [e.g., Secure erasure per NIST SP 800-88] |

### 10.3 Weekly Review Checklist

*The PKI/Security Operations team must complete the following review activities on a weekly basis. Completed checklists must be retained as evidence of compliance.*

| # | Review Activity | Reviewer | Date Completed | Findings | Status |
|---|---|---|---|---|---|
| 1 | Confirm all issuance events in the review period are captured and complete | [Name] | [YYYY-MM-DD] | [None / Describe] | [Clear / Action Required] |
| 2 | Confirm no expiry warnings in the Critical or Emergency threshold remain unresolved | [Name] | [YYYY-MM-DD] | [None / Describe] | [Clear / Action Required] |
| 3 | Confirm all revocation events have been reflected in current CRL and OCSP responses | [Name] | [YYYY-MM-DD] | [None / Describe] | [Clear / Action Required] |
| 4 | Verify CT log SCTs have been received and validated for all public-facing certificates issued in the period | [Name] | [YYYY-MM-DD] | [None / Describe] | [Clear / Action Required] |
| 5 | Confirm no scheduled key rotations are overdue | [Name] | [YYYY-MM-DD] | [None / Describe] | [Clear / Action Required] |
| 6 | Review for any anomalous issuance activity (unexpected CAs, unexpected subjects, bulk issuance) | [Name] | [YYYY-MM-DD] | [None / Describe] | [Clear / Action Required] |
| 7 | Confirm log integrity checks have passed for the review period | [Name] | [YYYY-MM-DD] | [None / Describe] | [Clear / Action Required] |

---

## 11. Review and Approval

### 11.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial version. |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Describe changes, e.g., Added CT log section; revised retention schedule per updated NACSA guidance.] |

### 11.2 Approval Sign-Off

*This document requires the following approvals prior to becoming effective. Electronic signatures are acceptable provided they are captured in the organisation's approved e-signature platform.*

| Role | Name | Signature | Date |
|---|---|---|---|
| PKI Operations Lead | [Name] | [Signature] | [YYYY-MM-DD] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [YYYY-MM-DD] |
| IT Audit / Compliance Manager | [Name] | [Signature] | [YYYY-MM-DD] |
| [Additional Approver Role] | [Name] | [Signature] | [YYYY-MM-DD] |

---

## 12. References

| Reference | Description | Applicability |
|---|---|---|
| **Cyber Security Act 2024 (Act 854), Section 18** | Duties of NCII entities to establish, maintain, and report on cybersecurity measures; basis for mandatory maintenance of these logs. | Primary regulatory obligation |
| NACSA — National Cyber Security Agency Malaysia | Regulator for NCII cybersecurity compliance; issuing authority for Determinations and Codes of Practice under Act 854. | Regulatory authority |
| RFC 5280 — Internet X.509 PKI Certificate and CRL Profile | Technical standard governing certificate structure, revocation, and CRL/OCSP requirements. | Technical reference |
| RFC 6962 — Certificate Transparency | Defines the CT framework for public audit of certificate issuance. | CT log obligations |
| NIST SP 800-57 — Recommendation for Key Management | Guidance on cryptographic key lifecycle management and rotation. | Key rotation reference |
| NIST SP 800-88 — Guidelines for Media Sanitization | Guidance on secure disposal of log archives containing sensitive data. | Retention and disposal |
| Personal Data Protection Act 2010 (PDPA) | Where log entries contain personal data, PDPA obligations on data minimisation, access, and retention apply. | Data protection |
| [Organization Name] PKI Policy [Internal Policy ID] | Internal policy governing certificate request, issuance, renewal, revocation, and key management. | Internal governance |
| [Organization Name] Information Security Policy [Internal Policy ID] | Overarching information security governance framework. | Internal governance |

---

## 13. Appendices

### Appendix A — Certificate Inventory Register

*Maintain a current-state certificate inventory as a companion to this log. The inventory represents the live state of all certificates; the logs represent the historical audit trail of all lifecycle events. The two artefacts should be reconciled as part of the weekly review.*

| Inventory ID | Certificate CN | Certificate Serial | Issuing CA | Certificate Type | Validity (From) | Validity (To) | Key Algorithm | Deployed System / Service | NCII Classified | Certificate Owner | Status | Last Updated |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [INV-001] | [CN] | [Serial No.] | [CA Name] | [Type] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Algorithm] | [System] | [Yes / No] | [Owner] | [Active \| Revoked \| Expired] | [YYYY-MM-DD] |

### Appendix B — Certificate Management Platform Details

*Document the tooling used to manage and automate certificate lifecycle events.*

| Platform / Tool | Version | Vendor | Role in Lifecycle Management | Integration Points | Support Contact |
|---|---|---|---|---|---|
| [e.g., Venafi Trust Protection Platform] | [Version] | [Vendor] | [e.g., Issuance, renewal, expiry monitoring, revocation] | [e.g., Active Directory, SIEM, ServiceNow] | [Contact / Ticket Queue] |
| [e.g., Internal ACME Server — Smallstep] | [Version] | [Vendor / Open Source] | [e.g., Automated renewal for internal services] | [e.g., Kubernetes cert-manager, Nginx] | [Contact / Ticket Queue] |

### Appendix C — Incident Escalation Contacts

*List the escalation contacts to be notified in the event of a certificate-related security incident (e.g., key compromise, unauthorized issuance, CA compromise).*

| Role | Name | Contact (Primary) | Contact (Secondary) | Escalation Scenario |
|---|---|---|---|---|
| PKI Operations Lead | [Name] | [Email / Phone] | [Backup Contact] | All certificate security events |
| Security Operations Manager | [Name] | [Email / Phone] | [Backup Contact] | Unresolved critical expiry; anomalous issuance |
| CISO | [Name] | [Email / Phone] | [Backup Contact] | CA compromise; key compromise; Act 854 reportable incident |
| NACSA Reporting Contact | [Name / Team] | [NACSA Designated Contact or Portal] | — | Cybersecurity incidents reportable under Act 854 s18 |
| [CA Vendor — Emergency Response] | [Vendor Name] | [Vendor Emergency Hotline] | [Vendor NOC / Support Portal] | Externally-issued certificate revocation; CA-side incidents |

### Appendix D — Glossary

| Term | Definition |
|---|---|
| **Act 854** | Cyber Security Act 2024, the primary cybersecurity legislation in Malaysia governing NCII protection obligations. |
| **CA (Certificate Authority)** | An entity that issues, manages, and revokes digital certificates. May be internal (private PKI) or external (publicly trusted). |
| **CRL (Certificate Revocation List)** | A periodically published list of revoked certificates issued by a CA. |
| **CT (Certificate Transparency)** | A public, append-only log framework enabling audit of TLS certificate issuance by publicly-trusted CAs. |
| **HSM (Hardware Security Module)** | A dedicated hardware device used to securely generate, store, and manage cryptographic key material. |
| **Key Rotation** | The process of replacing an existing cryptographic key pair with a newly generated pair, typically accompanied by reissuance of the associated certificate. |
| **NACSA** | National Cyber Security Agency Malaysia — the regulator responsible for cybersecurity of NCII under Act 854. |
| **NCII** | National Critical Information Infrastructure — information infrastructure designated by the Minister as critical under Act 854. |
| **OCSP (Online Certificate Status Protocol)** | A real-time protocol for checking the revocation status of a specific certificate. |
| **PKI (Public Key Infrastructure)** | The framework of policies, procedures, hardware, software, and people used to create, manage, distribute, and revoke digital certificates. |
| **SCT (Signed Certificate Timestamp)** | A cryptographic token issued by a CT log server confirming that a certificate has been submitted to the log. |
| **TLS/SSL** | Transport Layer Security / Secure Sockets Layer — protocols for establishing encrypted communications, authenticated via certificates. |

---

*End of Document — [Organization Name] — Certificate Lifecycle Logs — Version 1.0*

*This document is classified **Confidential**. Unauthorised disclosure, reproduction, or distribution is prohibited. Handle in accordance with [Organization Name] Information Classification Policy.*