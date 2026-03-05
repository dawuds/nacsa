# Certificate Inventory

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

This Certificate Inventory serves as the authoritative register of all digital certificates deployed across National Critical Information Infrastructure (NCII) systems operated or managed by [Organization Name]. It supports lifecycle management, expiry tracking, and compliance monitoring in accordance with **Section 18 of the Cyber Security Act 2024 (Act 854)**, which mandates that NCII sector leads maintain comprehensive records of security controls and cryptographic assets protecting designated systems.

The inventory enables PKI/Security Operations to proactively manage certificate renewals, detect unauthorized or shadow certificates, and demonstrate assurance of cryptographic hygiene to NACSA and relevant sector regulators.

### 1.2 Scope

This inventory covers:

- All X.509 digital certificates (TLS/SSL, code signing, client authentication, email/S/MIME, document signing) issued to or managed by [Organization Name]
- Certificates deployed on systems, services, and endpoints classified as NCII under the Cyber Security Act 2024
- Certificates issued by internal Certificate Authorities (CAs) operated by [Organization Name]
- Certificates issued by external/public CAs on behalf of [Organization Name]
- Wildcard and Subject Alternative Name (SAN) certificates covering NCII-scoped domains

**Out of Scope:**

- Personal certificates issued to individual employees for email encryption where not associated with an NCII system
- Certificates managed exclusively by third-party vendors under a separate contractual obligation (to be referenced in the relevant vendor register)

---

## 2. Regulatory and Policy References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), s18 | Obligation for NCII entity to maintain registers of security controls and cryptographic assets |
| NACSA NCII Sector Security Framework | PKI and certificate management requirements for NCII operators |
| [Organization Name] PKI Policy | Internal policy governing certificate issuance, management, and revocation |
| [Organization Name] Information Security Policy | Overarching cryptographic controls policy |
| ISO/IEC 27001:2022, Annex A 8.24 | Use of cryptography |
| NIST SP 800-57 | Recommendation for Key Management |

---

## 3. Certificate Inventory Register

*This section constitutes the primary record. Each row in the table below represents a single certificate entry. The register shall be maintained as a living record, updated upon issuance, renewal, revocation, or decommission of any certificate. Entries must be reviewed monthly by the PKI/Security Operations team and validated against deployed certificate states using automated discovery tooling where available.*

### 3.1 Active Certificate Register

| Cert ID | Common Name (CN) | Subject Alternative Names (SANs) | Certificate Type | Associated NCII System | Environment | Issuing CA | CA Type | Serial Number | Issuance Date | Expiry Date | Days to Expiry | Key Algorithm | Key Length (bits) | Signature Algorithm | Auto-Renewal Enabled | Renewal Method | Deployment Location | Responsible Team | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [CERT-001] | [e.g., portal.example.com.my] | [e.g., portal.example.com.my, www.portal.example.com.my] | [TLS/SSL] | [e.g., Customer Portal — NCII-SYS-001] | [Production] | [e.g., DigiCert Inc.] | [Public] | [Serial Number] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Calculated] | [RSA / ECDSA] | [2048 / 4096 / 256] | [SHA-256 with RSA] | [Yes / No] | [ACME / Manual / SCEP] | [e.g., F5 Load Balancer — LB-PROD-01] | [PKI Ops] | [Active] | [—] |
| [CERT-002] | [e.g., api.internal.example.com.my] | [e.g., api.internal.example.com.my] | [TLS/SSL — Internal] | [e.g., Core Banking API Gateway — NCII-SYS-002] | [Production] | [e.g., [Organization Name] Internal CA] | [Internal] | [Serial Number] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Calculated] | [ECDSA] | [256] | [SHA-256 with ECDSA] | [Yes] | [ACME] | [e.g., NGINX — APIGW-PROD-01] | [PKI Ops] | [Active] | [—] |
| [CERT-003] | [e.g., [Organization Name] Code Signing] | [N/A] | [Code Signing] | [e.g., Software Deployment Pipeline — NCII-SYS-003] | [Production] | [e.g., Entrust] | [Public] | [Serial Number] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Calculated] | [RSA] | [4096] | [SHA-384 with RSA] | [No] | [Manual] | [e.g., HSM — HSM-PROD-01] | [Security Ops] | [Active] | [Annual renewal — JIRA ticket required] |

*Add rows as required. Archived and revoked certificates are maintained in Section 3.2.*

---

### 3.2 Archived / Revoked Certificate Register

*Record certificates that have been revoked prior to expiry or decommissioned following system retirement. Retention of this register supports audit and incident investigation obligations.*

| Cert ID | Common Name (CN) | Serial Number | Associated NCII System | Issuing CA | Issuance Date | Expiry / Revocation Date | Reason for Revocation / Archival | Revoked By | Date Archived |
|---|---|---|---|---|---|---|---|---|---|
| [CERT-A001] | [Common Name] | [Serial Number] | [NCII System Name] | [Issuing CA] | [YYYY-MM-DD] | [YYYY-MM-DD] | [e.g., Key compromise / System decommission / Superseded by renewal] | [Name / System] | [YYYY-MM-DD] |

---

## 4. Certificate Subject and Subject Alternative Names (SANs)

*This section provides supplementary detail on certificate subject fields and SAN configurations for certificates with complex multi-domain coverage. For simple single-domain certificates, the register in Section 3.1 is sufficient.*

### 4.1 SAN Detail Records

*For each wildcard or multi-SAN certificate, document all covered domains to support impact assessment in the event of compromise or expiry.*

| Cert ID | Common Name (CN) | SAN Entry Type | SAN Value | Covered System / Service | Active Use |
|---|---|---|---|---|---|
| [CERT-ID] | [Common Name] | [DNS / IP / Email / URI] | [SAN Value] | [System or Service] | [Yes / No] |
| [CERT-ID] | [Common Name] | [DNS] | [*.example.com.my] | [Wildcard — see sub-entries below] | [Yes] |

> **Note on Wildcard Certificates:** Wildcard certificates (`*.domain`) should be used only where operationally necessary and risk-accepted. All hostnames actively using a wildcard certificate must be enumerated in this table. Refer to [Organization Name] PKI Policy Section [X] for wildcard certificate usage controls.

---

## 5. Issuing Certificate Authority (CA) Details

*This section maintains a register of Certificate Authorities (CAs) trusted or used by [Organization Name] for NCII-related certificates. This supports CA compromise response planning and supply chain risk management.*

### 5.1 CA Register

| CA ID | CA Name | CA Type | Root / Intermediate | Certificate Policies (CP) OID | CA Operator | Audit Standard | Trust Store | Contact / Support | Notes |
|---|---|---|---|---|---|---|---|---|---|
| [CA-001] | [e.g., DigiCert TLS RSA4096 Root G5] | [Public] | [Root] | [OID] | [DigiCert Inc.] | [WebTrust / ETSI] | [OS / Browser / Internal] | [support@digicert.com] | [—] |
| [CA-002] | [e.g., [Organization Name] Internal Issuing CA 1] | [Internal] | [Intermediate] | [OID] | [[Organization Name] PKI Team] | [Internal audit] | [Internal GPO] | [pki-ops@example.com.my] | [HSM-backed — HSM-PROD-01] |

---

## 6. Issuance and Expiry Date Tracking

*This section provides a consolidated expiry calendar view to support proactive renewal scheduling. It is derived from the register in Section 3.1 and should be refreshed monthly or upon any certificate change.*

### 6.1 Expiry Horizon Summary

*Summarize certificates by expiry band to surface urgency. Auto-calculated fields should be drawn from the certificate management system or automation tooling.*

| Expiry Band | Count | Cert IDs |
|---|---|---|
| Expired (past due) | [Count] | [CERT-IDs] |
| Expiring within 7 days | [Count] | [CERT-IDs] |
| Expiring within 30 days | [Count] | [CERT-IDs] |
| Expiring within 60 days | [Count] | [CERT-IDs] |
| Expiring within 90 days | [Count] | [CERT-IDs] |
| Valid beyond 90 days | [Count] | [CERT-IDs] |

### 6.2 Renewal Tracking Log

*Record renewal actions taken against certificates to maintain an audit trail.*

| Cert ID | Previous Expiry Date | Renewal Initiated Date | Renewed By | New Cert ID | New Expiry Date | Renewal Method | Outcome | Notes |
|---|---|---|---|---|---|---|---|---|
| [CERT-ID] | [YYYY-MM-DD] | [YYYY-MM-DD] | [Name / System] | [New CERT-ID] | [YYYY-MM-DD] | [ACME / Manual / SCEP] | [Success / Failed / Pending] | [—] |

---

## 7. Key Algorithm and Length

*This section captures the cryptographic standards applied across the certificate inventory. It supports compliance assessment against NACSA cryptographic requirements and organizational cryptographic policies, and informs planning for algorithm transitions (e.g., post-quantum readiness).*

### 7.1 Cryptographic Profile Summary

| Algorithm | Key Length / Curve | Signature Algorithm | Approved for New Issuance | Retirement Date | Notes |
|---|---|---|---|---|---|
| RSA | 4096 bits | SHA-384 with RSA | Yes | [Date / TBD] | Preferred for code signing |
| RSA | 2048 bits | SHA-256 with RSA | Conditionally | [Date / TBD] | Acceptable for short-lived TLS; not for new long-lived certs |
| RSA | 1024 bits | SHA-1 with RSA | **No** | Immediate retirement | Legacy only — remediation required |
| ECDSA | P-256 (secp256r1) | SHA-256 with ECDSA | Yes | [Date / TBD] | Preferred for TLS |
| ECDSA | P-384 (secp384r1) | SHA-384 with ECDSA | Yes | [Date / TBD] | Preferred for high-assurance |

### 7.2 Non-Compliant Certificate Remediation Tracker

*List certificates using deprecated or non-compliant algorithms for remediation tracking.*

| Cert ID | Common Name | Algorithm | Key Length | Identified Date | Remediation Owner | Target Remediation Date | Status |
|---|---|---|---|---|---|---|---|
| [CERT-ID] | [Common Name] | [e.g., RSA] | [e.g., 1024] | [YYYY-MM-DD] | [Name / Team] | [YYYY-MM-DD] | [Open / In Progress / Closed] |

---

## 8. Associated NCII System Mapping

*This section maps each certificate to the NCII-designated system(s) it protects, supporting impact assessment, incident response scoping, and regulatory reporting. All NCII system identifiers must align with the organization's NCII Asset Register.*

### 8.1 NCII System — Certificate Mapping

| NCII System ID | NCII System Name | NCII Sector | Criticality Classification | Cert IDs in Use | Certificate Purpose | Data Classification Protected |
|---|---|---|---|---|---|---|
| [NCII-SYS-001] | [e.g., Customer Internet Banking Portal] | [e.g., Banking and Finance] | [Critical / High / Medium] | [CERT-001, CERT-XXX] | [TLS — Customer-facing HTTPS] | [Confidential — Customer PII, Financial Data] |
| [NCII-SYS-002] | [e.g., Core Banking API Gateway] | [e.g., Banking and Finance] | [Critical] | [CERT-002] | [TLS — Internal service mesh mTLS] | [Restricted — Inter-system financial transactions] |
| [NCII-SYS-003] | [e.g., Software Deployment Pipeline] | [e.g., Banking and Finance] | [High] | [CERT-003] | [Code Signing — Release artifact integrity] | [Confidential — Source code / build artefacts] |

---

## 9. Auto-Renewal Status

*This section documents the auto-renewal configuration for each certificate or group of certificates. Automated renewal reduces operational risk from manual process failure and supports continuous compliance.*

### 9.1 Auto-Renewal Configuration Register

| Cert ID / Group | Auto-Renewal Enabled | Renewal Protocol / Method | Renewal Trigger (days before expiry) | ACME CA / SCEP Server / Renewal System | Notification Recipients | Last Successful Renewal | Last Renewal Outcome | Monitoring Alert Configured |
|---|---|---|---|---|---|---|---|---|
| [CERT-001] | [Yes] | [ACME (Let's Encrypt / Internal CA)] | [30 days] | [acme.internal.example.com.my] | [pki-ops@example.com.my] | [YYYY-MM-DD] | [Success] | [Yes — PagerDuty Policy PKI-01] |
| [CERT-002] | [Yes] | [ACME] | [30 days] | [acme.internal.example.com.my] | [pki-ops@example.com.my] | [YYYY-MM-DD] | [Success] | [Yes] |
| [CERT-003] | [No] | [Manual] | [N/A — Manual trigger at 60 days] | [N/A] | [pki-ops@example.com.my, secops@example.com.my] | [YYYY-MM-DD] | [Completed manually] | [Yes — calendar alert + JIRA auto-ticket] |

### 9.2 Manual Renewal Procedure Reference

*For certificates where auto-renewal is not enabled, document the procedure reference and approval requirements.*

| Cert ID | Procedure Document Reference | Approver | Lead Time Required | Escalation Contact |
|---|---|---|---|---|
| [CERT-ID] | [e.g., PKI-PROC-003: Manual Certificate Renewal] | [PKI Operations Manager] | [10 business days] | [CISO / [Name]] |

---

## 10. Roles and Responsibilities

*This section defines accountability for certificate inventory management using a RACI framework. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | PKI/Security Operations | CISO | System / Application Owner | IT Infrastructure | Vendor / MSP | Internal Audit | NACSA (Regulator) |
|---|---|---|---|---|---|---|---|
| Maintain and update certificate inventory register | R | A | C | C | I | I | — |
| Conduct monthly inventory review | R | A | I | I | C | I | — |
| Initiate and execute certificate renewals | R | I | C | C | C | — | — |
| Approve new certificate issuance requests | R | A | C | I | — | — | — |
| Monitor certificate expiry and alerting | R | I | I | C | — | — | — |
| Manage internal CA infrastructure | R | A | — | C | — | I | — |
| Remediate non-compliant certificates | R | A | C | C | C | I | — |
| Report to NACSA on NCII cryptographic controls | I | R/A | I | I | — | C | I |
| Annual PKI policy review | C | A | C | C | — | R | — |
| Certificate incident response | R | A | C | C | C | I | I |

---

## 11. Certificate Discovery and Tooling

*This section documents the tooling and processes used to discover, monitor, and validate certificates across NCII systems. Manual-only inventories are not acceptable for NCII-scale environments.*

### 11.1 Discovery Tooling Register

| Tool Name | Tool Type | Scope | Discovery Frequency | Integration | Operated By | Notes |
|---|---|---|---|---|---|---|
| [e.g., Venafi Trust Protection Platform] | [Certificate lifecycle management] | [Internal and external certs] | [Continuous] | [SIEM / ITSM] | [PKI Ops] | [—] |
| [e.g., Certbot / cert-manager] | [ACME client / K8s auto-renewal] | [Kubernetes workloads] | [Continuous] | [Kubernetes Ingress] | [Platform Eng] | [—] |
| [e.g., SSL Labs / Custom script] | [External TLS validation] | [Public-facing NCII endpoints] | [Weekly scan] | [Email alert] | [Security Ops] | [—] |
| [e.g., OpenSSL scripts / custom inventory script] | [Internal scan] | [Internal network ranges] | [Monthly] | [CSV export to this register] | [PKI Ops] | [Script path: /scripts/cert-scan/] |

---

## 12. Review and Approval

### 12.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [YYYY-MM-DD] | [Author Name] | Initial release |
| [1.1] | [YYYY-MM-DD] | [Author Name] | [Description of changes] |

### 12.2 Monthly Review Log

*Record each monthly review in this table to evidence ongoing compliance with Act 854 s18 obligations.*

| Review Period (Month/Year) | Review Date | Reviewed By | Total Certificates | Expiring within 30 days | Renewals Actioned | Non-Compliant Certs | Findings / Actions | Sign-off |
|---|---|---|---|---|---|---|---|---|
| [MM/YYYY] | [YYYY-MM-DD] | [Reviewer Name] | [Count] | [Count] | [Count] | [Count] | [Summary or "None"] | [Signature / Initials] |

### 12.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| PKI Operations Lead | [Name] | [Signature] | [YYYY-MM-DD] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [YYYY-MM-DD] |
| NCII Sector Lead / [Organization Name] Representative | [Name] | [Signature] | [YYYY-MM-DD] |
| [Approver Role as per Document Control Policy] | [Name] | [Signature] | [YYYY-MM-DD] |

---

## 13. References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), **Section 18** | Obligation for NCII entities to maintain records and registers of security controls, including cryptographic and PKI assets protecting designated systems |
| NACSA National Cyber Security Policy (NCSP) | National framework for NCII protection and cybersecurity governance |
| NACSA NCII Sector Security Framework — [Applicable Sector] | Sector-specific security requirements for NCII operators |
| Personal Data Protection Act 2010 (Act 709) | Data protection obligations relevant to certificate-protected personal data in transit |
| ISO/IEC 27001:2022, Annex A Control 8.24 | Use of cryptography — policy and key management |
| ISO/IEC 27002:2022, Section 8.24 | Implementation guidance for cryptographic controls |
| NIST SP 800-57 Part 1 Rev. 5 | Recommendation for Key Management — General |
| NIST SP 800-52 Rev. 2 | Guidelines for TLS Implementations |
| CA/Browser Forum Baseline Requirements | Industry requirements for publicly trusted TLS certificates |
| [Organization Name] PKI Policy [Document ID] | Internal policy governing certificate lifecycle management |
| [Organization Name] Cryptographic Controls Standard [Document ID] | Internal standard for approved algorithms and key lengths |
| [Organization Name] NCII Asset Register [Document ID] | Authoritative register of NCII-designated systems — source for NCII System IDs |

---

## Appendices

### Appendix A — Certificate Request and Issuance Procedure

*Reference to or copy of the standard operating procedure for requesting, approving, and issuing new digital certificates. Include approval workflow, required documentation, and lead times.*

> **Reference:** [Organization Name] PKI-PROC-001: Certificate Request and Issuance — [Document ID / Link]

### Appendix B — Certificate Revocation Procedure

*Reference to or copy of the standard operating procedure for revoking certificates, including emergency revocation following key compromise or security incident.*

> **Reference:** [Organization Name] PKI-PROC-002: Certificate Revocation — [Document ID / Link]

### Appendix C — Certificate Incident Response Runbook

*Summarize or reference the runbook for responding to certificate-related security incidents, including expired certificate outages, CA compromise, and unauthorized certificate issuance.*

> **Reference:** [Organization Name] IRP-PKI-001: Certificate Incident Response Runbook — [Document ID / Link]

### Appendix D — Certificate Monitoring and Alerting Configuration

*Document alerting thresholds, notification channels, and escalation paths configured in certificate monitoring tooling.*

| Alert Threshold | Alert Channel | Recipient(s) | Escalation (if not acknowledged within) | Escalation Recipient |
|---|---|---|---|---|
| Expiry ≤ 7 days | [PagerDuty / Email / SIEM alert] | [pki-ops@example.com.my] | [4 hours] | [CISO / PKI Manager] |
| Expiry ≤ 30 days | [Email / ITSM ticket] | [pki-ops@example.com.my] | [2 business days] | [PKI Operations Lead] |
| Expiry ≤ 60 days | [Email] | [pki-ops@example.com.my] | [—] | [—] |
| Certificate already expired | [PagerDuty — Critical] | [pki-ops@example.com.my, secops@example.com.my, CISO] | [Immediate] | [CISO / Incident Commander] |
| Auto-renewal failure | [PagerDuty / SIEM alert] | [pki-ops@example.com.my] | [2 hours] | [PKI Operations Lead] |
| New certificate detected (shadow cert) | [SIEM alert] | [secops@example.com.my] | [1 hour] | [CISO] |

### Appendix E — Glossary

| Term | Definition |
|---|---|
| CA | Certificate Authority — an entity that issues digital certificates |
| CN | Common Name — the primary hostname or identifier in a certificate subject |
| CRL | Certificate Revocation List — a list of revoked certificates published by a CA |
| mTLS | Mutual TLS — TLS with bidirectional certificate-based authentication |
| NCII | National Critical Information Infrastructure as designated under Act 854 |
| OCSP | Online Certificate Status Protocol — a mechanism for checking certificate revocation status in real time |
| PKI | Public Key Infrastructure — the framework of policies, processes, and technology for managing digital certificates |
| SAN | Subject Alternative Name — X.509 certificate extension listing additional hostnames or identifiers covered by the certificate |
| HSM | Hardware Security Module — a physical device for secure cryptographic key storage and operations |
| ACME | Automated Certificate Management Environment (RFC 8555) — a protocol for automated certificate issuance and renewal |

---

*This document is classified **Confidential** and intended for authorized personnel of [Organization Name] only. Unauthorized disclosure is prohibited. For queries, contact [PKI Operations / Security Operations] at [contact details].*