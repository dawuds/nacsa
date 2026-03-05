# Secure Development Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Development Lead / CISO |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |
| **Regulatory Framework** | Cyber Security Act 2024 (Act 854) — NACSA |
| **Applicable Sections** | Section 18 |

---

> **Document Control Notice:** This document is classified as **Confidential**. It must not be distributed outside of [Organization Name] without prior written authorization from the document owner. Printed copies are considered uncontrolled. Always refer to the document management system for the latest approved version.

---

## Table of Contents

1. [Purpose](#1-purpose)
2. [Scope](#2-scope)
3. [Regulatory and Policy Context](#3-regulatory-and-policy-context)
4. [Definitions and Abbreviations](#4-definitions-and-abbreviations)
5. [Secure Development Lifecycle (SDLC) Overview](#5-secure-development-lifecycle-sdlc-overview)
6. [OWASP Top 10 Prevention Requirements](#6-owasp-top-10-prevention-requirements)
7. [Input Validation Requirements](#7-input-validation-requirements)
8. [Authentication and Session Management](#8-authentication-and-session-management)
9. [Static Application Security Testing (SAST) Integration](#9-static-application-security-testing-sast-integration)
10. [Dynamic Application Security Testing (DAST) Integration](#10-dynamic-application-security-testing-dast-integration)
11. [Code Review Requirements](#11-code-review-requirements)
12. [Dependency and Library Management](#12-dependency-and-library-management)
13. [Secure Configuration and Hardening](#13-secure-configuration-and-hardening)
14. [Security Testing and Acceptance Criteria](#14-security-testing-and-acceptance-criteria)
15. [Incident Response Integration for Development](#15-incident-response-integration-for-development)
16. [Roles and Responsibilities](#16-roles-and-responsibilities)
17. [Compliance and Enforcement](#17-compliance-and-enforcement)
18. [Review and Approval](#18-review-and-approval)
19. [References](#19-references)
20. [Appendices](#20-appendices)

---

## 1. Purpose

*This section explains why this standard exists and what organizational objective it serves. Authors should clearly link the standard to both business drivers and regulatory obligations.*

This Secure Development Standard establishes the minimum mandatory requirements and best practices for the design, development, testing, and deployment of software applications within the National Critical Information Infrastructure (NCII) environment of [Organization Name]. It defines a consistent, repeatable approach to incorporating security throughout the Software Development Lifecycle (SDLC) to reduce vulnerabilities, prevent exploitable weaknesses, and protect sensitive data and operational continuity.

This standard is issued in compliance with **Section 18 of the Cyber Security Act 2024 (Act 854)**, which mandates that NCII entities implement and maintain adequate measures for the security of their information and communication technology (ICT) systems. The standard operationalizes these obligations by specifying concrete engineering controls and process requirements.

The objectives of this standard are to:

- Establish a baseline of secure coding practices applicable to all application development activities within [Organization Name].
- Mandate security testing activities — including SAST and DAST — as integral, non-optional phases of the development pipeline.
- Ensure that applications delivered into the NCII environment are assessed against recognized industry frameworks, including the OWASP Top 10.
- Define clear accountability for secure development practices across development, security, and operations teams.
- Support external audit, regulatory examination, and internal compliance review by providing auditable evidence of security controls embedded in the development process.

---

## 2. Scope

*This section defines who and what this standard applies to. Be specific about systems, environments, teams, and any exclusions. Reviewers and auditors will scrutinize scope to determine applicability.*

### 2.1 Applicability

This standard applies to:

- All software applications developed, commissioned, or substantially modified by or on behalf of [Organization Name] and deployed within the NCII environment.
- All internal development teams, including permanent staff, contract developers, and third-party vendors engaged in application development for [Organization Name].
- All programming languages, frameworks, and platforms used in the development of applications hosted within [Organization Name]'s infrastructure, cloud environments, or hybrid deployments designated as NCII assets.
- All phases of the SDLC including requirements, design, development, testing, deployment, and maintenance.

### 2.2 Inclusions

The following are explicitly within scope:

| Category | Examples |
|---|---|
| Web applications | Customer portals, internal dashboards, APIs |
| Mobile applications | iOS and Android applications interfacing with NCII systems |
| Backend services | Microservices, batch processing systems, integration middleware |
| Infrastructure-as-Code (IaC) | Terraform, Ansible, Kubernetes manifests |
| Internally developed tools | Scripts, automation tools, reporting utilities |
| Third-party custom development | Vendor-developed code delivered under contract |

### 2.3 Exclusions

The following are explicitly excluded unless otherwise specified:

- Commercial off-the-shelf (COTS) software where [Organization Name] does not have access to source code. Such software is governed by the **[Third-Party and Vendor Risk Management Policy — Document ID: TBD]**.
- Open source components used without modification, which are subject to the **Dependency and Library Management** requirements in Section 12.
- Legacy systems under a formally approved and documented exception. Exceptions must be recorded in the **[Security Exception Register — Document ID: TBD]** and reviewed annually.

### 2.4 Geographic and Jurisdictional Scope

This standard applies to all [Organization Name] development activities regardless of geographic location where such activities relate to systems or data classified as NCII assets under Malaysian jurisdiction.

---

## 3. Regulatory and Policy Context

*This section establishes the legal and policy foundation for the standard. Reference all applicable regulations, internal policies, and industry frameworks. Auditors use this section to map controls back to regulatory requirements.*

### 3.1 Regulatory Framework

This standard has been developed in accordance with and to satisfy the requirements of the following legislation and regulatory instruments:

| Instrument | Clause / Section | Requirement |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | NCII entities shall implement adequate cybersecurity measures for ICT systems |
| Cyber Security Act 2024 (Act 854) | Section 18(2) | Measures shall conform to the codes of practice or standards specified by the Chief Executive of NACSA |
| Personal Data Protection Act 2010 (Act 709) | Section 9 | Security measures for the protection of personal data |
| [Bank Negara Malaysia — Risk Management in Technology (RMiT)] | [Applicable paragraph] | Secure software development lifecycle requirements |
| [Internal IT Security Policy — Document ID: TBD] | All | Organizational security policy hierarchy |

### 3.2 Relationship to Internal Policies and Standards

This standard sits within the following policy hierarchy:

```
[Information Security Policy (Tier 1)]
        |
[IT Security Framework (Tier 2)]
        |
Secure Development Standard (Tier 3)  <-- This Document
        |
[Secure Coding Guidelines (Tier 4 — Language-specific procedures)]
```

This standard shall be read in conjunction with:

- **[Information Security Policy — Document ID: TBD]**
- **[Change Management Policy — Document ID: TBD]**
- **[Vulnerability Management Standard — Document ID: TBD]**
- **[Third-Party and Vendor Risk Management Policy — Document ID: TBD]**
- **[Incident Response Plan — Document ID: TBD]**
- **[Data Classification Policy — Document ID: TBD]**

### 3.3 Industry Standards and Frameworks Referenced

- OWASP Top 10 (current edition)
- OWASP Application Security Verification Standard (ASVS) — Level 2 (minimum)
- NIST Special Publication 800-218: Secure Software Development Framework (SSDF)
- ISO/IEC 27001:2022 — Annex A Control 8.25 (Secure development lifecycle)
- SANS Top 25 Most Dangerous Software Errors
- CWE/CVE classification system

---

## 4. Definitions and Abbreviations

*Define all technical and regulatory terms used in this document to ensure consistent interpretation across all readers, including non-technical stakeholders and auditors.*

### 4.1 Definitions

| Term | Definition |
|---|---|
| **Application** | Any software system, web service, API, mobile application, or script developed or deployed by or for [Organization Name]. |
| **NCII Environment** | Systems, networks, and infrastructure designated as National Critical Information Infrastructure assets under the Cyber Security Act 2024 (Act 854). |
| **Secure Development Lifecycle (SDLC)** | A framework that integrates security activities into each phase of the software development lifecycle. |
| **Vulnerability** | A weakness in a system, application, or process that could be exploited to compromise confidentiality, integrity, or availability. |
| **Security Defect** | A flaw in software design, implementation, or configuration that introduces a security vulnerability. |
| **Threat Modelling** | A structured process for identifying potential threats, attack vectors, and mitigations applicable to an application or system. |
| **Code Repository** | A version-controlled storage system for source code, such as Git, used to manage and track changes to software. |
| **Pipeline** | An automated sequence of build, test, and deployment steps in a CI/CD (Continuous Integration / Continuous Deployment) environment. |
| **Dependency** | An external library, package, or module incorporated into an application's codebase. |
| **Security Champion** | A developer within a development team who has received additional security training and serves as a point of contact for secure development questions. |
| **False Positive** | A result from a security testing tool that incorrectly identifies a secure code pattern as a vulnerability. |
| **Attack Surface** | The sum of all points in an application or system where an attacker could attempt to input data or extract data. |

### 4.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| SDLC | Software Development Lifecycle |
| SAST | Static Application Security Testing |
| DAST | Dynamic Application Security Testing |
| SCA | Software Composition Analysis |
| OWASP | Open Web Application Security Project |
| ASVS | Application Security Verification Standard |
| CVSS | Common Vulnerability Scoring System |
| CVE | Common Vulnerabilities and Exposures |
| CWE | Common Weakness Enumeration |
| CI/CD | Continuous Integration / Continuous Deployment |
| MFA | Multi-Factor Authentication |
| RBAC | Role-Based Access Control |
| API | Application Programming Interface |
| IaC | Infrastructure as Code |
| CISO | Chief Information Security Officer |
| WAF | Web Application Firewall |
| XSS | Cross-Site Scripting |
| CSRF | Cross-Site Request Forgery |
| SQLi | SQL Injection |
| TLS | Transport Layer Security |
| JWT | JSON Web Token |
| IDOR | Insecure Direct Object Reference |

---

## 5. Secure Development Lifecycle (SDLC) Overview

*This section provides a framework-level view of where security activities occur within the development lifecycle. It ensures that security is treated as a continuous concern, not a gate at the end of development.*

### 5.1 Security in Each SDLC Phase

Security must be integrated into every phase of the software development lifecycle. The following table maps mandatory security activities to each SDLC phase:

| SDLC Phase | Mandatory Security Activity | Responsible Party | Output / Evidence |
|---|---|---|---|
| **Requirements** | Security requirements elicitation; data classification review | Business Analyst, Security Team | Security requirements document |
| **Design** | Threat modelling; architecture review; attack surface analysis | Lead Developer, Security Team | Threat model report |
| **Development** | Adherence to secure coding standards; peer code review | Developers, Security Champion | Code review records |
| **Testing (SAST)** | Automated static analysis integrated into CI/CD pipeline | DevSecOps, QA Team | SAST scan report |
| **Testing (DAST)** | Dynamic testing against running application in staging | Security Team, QA Team | DAST scan report |
| **Pre-Deployment** | Security sign-off; vulnerability remediation verification | CISO / Security Lead | Security acceptance sign-off |
| **Deployment** | Secure configuration validation; secrets management verification | DevOps, Security Team | Deployment checklist |
| **Maintenance** | Ongoing dependency monitoring; patch management; periodic penetration testing | Development Lead, Security Team | Patch logs, pentest reports |

### 5.2 Security Gates

*Define the mandatory checkpoints (gates) that an application must pass before proceeding to the next phase. Gates prevent insecure code from being promoted through environments.*

The following security gates are mandatory and must be passed before an application proceeds to the next SDLC phase:

**Gate 1 — Design Review:** Application design must be reviewed against the threat model. No application may proceed to development without documented sign-off from the Security Team.

**Gate 2 — SAST Clearance:** No build may be promoted to a staging or production environment until all **Critical** and **High** severity SAST findings have been remediated or formally accepted via the exception process.

**Gate 3 — DAST Clearance:** No application may be approved for production deployment until a DAST assessment has been completed against the staging environment and all **Critical** and **High** severity findings are remediated or formally accepted.

**Gate 4 — Code Review Approval:** No code may be merged to the main/production branch without a minimum of [two (2)] approved peer reviews, at least one of which must be conducted by a Security Champion or a member of the Security Team for security-sensitive components.

**Gate 5 — Security Acceptance:** The CISO or delegated Security Lead must provide written sign-off before any new application or major release is deployed to the production NCII environment.

### 5.3 Secure Development Environments

- Development, staging, and production environments must be logically separated and access-controlled.
- Production data must not be used in development or testing environments without explicit authorization and appropriate anonymization or pseudonymization controls.
- Development environment access must be reviewed quarterly and revoked promptly upon role change or departure.
- Secrets (API keys, passwords, certificates) must not be hardcoded in source code. Refer to Section 13 for secrets management requirements.

---

## 6. OWASP Top 10 Prevention Requirements

*This section maps the current OWASP Top 10 categories to mandatory preventive controls. Each subsection should be reviewed and updated whenever OWASP publishes a new edition of the Top 10. Authors should tailor examples to the organization's primary technology stack.*

[Organization Name] mandates that all applications be assessed and protected against the current edition of the OWASP Top 10. The following subsections define the minimum required controls for each category.

### 6.1 A01 — Broken Access Control

**Requirement:** All applications must implement and enforce access control on every request, including API endpoints, file access, and administrative functions.

Mandatory controls:

- Implement access control at the server side; never rely solely on client-side enforcement.
- Apply the principle of least privilege to all user roles and service accounts.
- Deny access by default; explicit grants must be required for all resources.
- Implement Insecure Direct Object Reference (IDOR) protections using indirect reference maps or attribute-based access checks.
- Log all access control failures and alert on repeated failures.
- Invalidate session tokens and access tokens immediately upon logout or privilege change.

| Control | Implementation Requirement | Testing Method |
|---|---|---|
| Server-side access enforcement | All authorization logic server-side | Code review, DAST |
| Principle of least privilege | Role matrix defined and enforced | Code review, pentest |
| IDOR prevention | Indirect reference maps or ABAC | DAST, penetration testing |
| Default-deny | Access denied unless explicitly granted | Code review |

### 6.2 A02 — Cryptographic Failures

**Requirement:** Sensitive data at rest and in transit must be protected using current, industry-accepted cryptographic algorithms and protocols.

Mandatory controls:

- Classify all data processed by the application and apply appropriate encryption to sensitive data.
- Use TLS 1.2 or higher for all data in transit. TLS 1.0 and 1.1 are prohibited.
- Do not use MD5 or SHA-1 for cryptographic purposes. Use SHA-256 or stronger.
- Use approved password-hashing algorithms: bcrypt, scrypt, or Argon2. Plain-text password storage is strictly prohibited.
- Encrypt sensitive data at rest using AES-256 or equivalent.
- Do not hardcode cryptographic keys in source code. Manage keys through an approved key management system.
- Disable HTTP for all production endpoints. HSTS must be enforced.

### 6.3 A03 — Injection

**Requirement:** All application inputs must be treated as untrusted. Injection flaws must be prevented through the use of parameterized queries, ORM frameworks, and strict input validation.

Mandatory controls:

- Use parameterized queries or prepared statements for all database interactions. Dynamic query construction using string concatenation is prohibited.
- Use an ORM framework with known injection protection where applicable to the technology stack.
- Apply input validation and output encoding appropriate to the context (HTML, SQL, LDAP, OS command).
- Avoid use of OS command execution functions where possible. Where required, use allowlist validation on all parameters.
- Use Web Application Firewall (WAF) rules as a defence-in-depth measure, not a primary control.

### 6.4 A04 — Insecure Design

**Requirement:** Security must be considered at the design phase. Applications must undergo threat modelling before development commences.

Mandatory controls:

- Conduct threat modelling for all new applications and for significant changes to existing applications.
- Use an established threat modelling methodology such as STRIDE or PASTA.
- Design for failure: assume that security controls may be bypassed and implement multiple layers of defence.
- Document security design decisions and maintain them as living artifacts alongside the application.
- Review and update threat models when the application architecture or threat landscape changes significantly.

### 6.5 A05 — Security Misconfiguration

**Requirement:** All application and infrastructure components must be securely configured. Default credentials and unnecessary features must be disabled prior to deployment.

Mandatory controls:

- Remove all sample files, default accounts, and unnecessary features from production builds.
- Apply security hardening baselines (refer to Section 13) to all application servers, web servers, and container images.
- Review and suppress verbose error messages in production; log errors server-side without exposing stack traces to end users.
- Ensure HTTP security headers are configured (Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy).
- Automate configuration compliance checking as part of the deployment pipeline.

### 6.6 A06 — Vulnerable and Outdated Components

**Requirement:** All third-party dependencies and libraries must be inventoried, monitored for known vulnerabilities, and updated in a timely manner.

Mandatory controls:

- Maintain a Software Bill of Materials (SBOM) for all applications. See Section 12 for full requirements.
- Integrate Software Composition Analysis (SCA) tooling into the CI/CD pipeline.
- Subscribe to vulnerability feeds (NVD, vendor advisories) and action critical vulnerabilities within defined SLAs.
- Remove unused dependencies from the codebase.

### 6.7 A07 — Identification and Authentication Failures

**Requirement:** Applications must implement robust authentication and session management controls to prevent unauthorized access.

Mandatory controls:

- Enforce Multi-Factor Authentication (MFA) for all privileged and administrative access and for consumer-facing applications processing sensitive data.
- Implement account lockout after [five (5)] consecutive failed authentication attempts.
- Passwords must meet minimum complexity requirements: minimum 12 characters, uppercase, lowercase, numeric, and special character.
- Session tokens must be cryptographically random, sufficiently long (minimum 128 bits of entropy), and invalidated upon logout.
- Refer to Section 8 for full authentication and session management requirements.

### 6.8 A08 — Software and Data Integrity Failures

**Requirement:** Software updates, build pipelines, and data processing must ensure integrity of code and data throughout the supply chain.

Mandatory controls:

- Verify integrity of downloaded packages and dependencies using cryptographic checksums or signature verification.
- Use signed commits in version control systems for production code changes.
- Protect CI/CD pipeline configurations with the same rigor as production code.
- Validate integrity of deserialized data. Do not deserialize data from untrusted sources without integrity checking.
- Use Content Security Policy (CSP) to prevent unauthorized script loading in web applications.

### 6.9 A09 — Security Logging and Monitoring Failures

**Requirement:** Applications must generate sufficient security-relevant logging to support detection of attacks, incident response, and forensic investigation.

Mandatory controls:

- Log all authentication events (success and failure), authorization failures, input validation failures, and administrative actions.
- Include in each log entry: timestamp (UTC), user identity, source IP address, action performed, and outcome.
- Do not log sensitive data such as passwords, session tokens, full credit card numbers, or personal identification numbers.
- Forward application security logs to the centralized Security Information and Event Management (SIEM) system.
- Define and implement alerting thresholds for suspicious patterns (e.g., brute force attempts, mass data extraction).
- Protect log integrity; application processes must not have the ability to modify or delete their own logs.

### 6.10 A10 — Server-Side Request Forgery (SSRF)

**Requirement:** Applications that fetch remote resources must validate and sanitize all user-supplied URLs and implement strict outbound request controls.

Mandatory controls:

- Validate and sanitize all user-supplied URLs before making server-side requests.
- Use allowlists of permitted domains, IP addresses, and protocols for outbound requests from application servers.
- Disable HTTP redirects where not required. Where redirects are followed, validate the final destination.
- Block outbound requests to internal network ranges (e.g., 10.0.0.0/8, 172.16.0.0/12, 169.254.0.0/16) from application server processes unless explicitly required and approved.
- Do not return raw error responses from outbound requests to the end user.

---

## 7. Input Validation Requirements

*This section defines the organization's mandatory approach to validating all data entering the application boundary. It covers both syntactic and semantic validation. Authors should tailor the technology-specific guidance to match the primary development stack in use.*

### 7.1 Principles of Input Validation

All data received from external sources — including users, APIs, files, and third-party systems — must be treated as untrusted and validated before processing. Input validation is a primary defence against injection attacks, buffer overflows, and business logic abuse.

The following principles govern input validation at [Organization Name]:

- **Validate on the server side:** Client-side validation is a usability control only and must never be relied upon as a security control.
- **Whitelist over blacklist:** Define what is acceptable (allowlist) rather than what is prohibited (denylist). Allowlists are substantially more resilient.
- **Fail securely:** When validation fails, reject the input and return a safe error. Do not attempt to sanitize malicious input by stripping characters and processing the remainder.
- **Validate at every trust boundary:** Re-validate data when it crosses system or component boundaries, even from internal services.
- **Contextual validation:** Validate data according to its intended context of use (e.g., data destined for a SQL query has different validation requirements from data destined for HTML rendering).

### 7.2 Validation Requirements by Data Type

*Complete this table with validation rules appropriate to your application's data types. Extend as required.*

| Data Type | Validation Requirements | Example |
|---|---|---|
| **Text / String** | Define maximum and minimum length; restrict to expected character set; encode for output context | Username: 3–64 chars, alphanumeric and hyphen only |
| **Numeric** | Enforce minimum and maximum values; reject non-numeric input; handle negative values explicitly | Age: integer, 0–150 |
| **Date / Time** | Enforce ISO 8601 format or defined locale format; validate calendar validity | Date of birth: YYYY-MM-DD, not in future |
| **Email Address** | Validate format against RFC 5322 pattern; verify domain existence where feasible | Must match email regex; max 254 chars |
| **URL** | Validate scheme (https only where applicable); validate hostname against allowlist | Only https:// permitted |
| **File Upload** | Validate file type by magic bytes (not extension only); enforce maximum file size; scan for malware | PDF only; max 10 MB; AV scan required |
| **Financial Amounts** | Validate numeric format; enforce decimal precision; apply business rule range checks | Positive, max 2 decimal places |
| **Free Text / Rich Text** | Apply output encoding; strip or reject HTML unless explicitly required; sanitize with allowlisted HTML parser | HTML entities encoded for output |
| **API Parameters** | Validate against OpenAPI schema; reject undeclared parameters; enforce type and format | Schema validation via middleware |

### 7.3 Output Encoding Requirements

Input validation must be complemented by output encoding appropriate to the rendering context:

| Output Context | Required Encoding |
|---|---|
| HTML body | HTML entity encoding |
| HTML attribute | Attribute encoding |
| JavaScript | JavaScript string encoding |
| CSS | CSS encoding |
| URL parameter | URL percent-encoding |
| JSON | JSON encoding |
| SQL | Parameterized queries (not encoding) |
| LDAP | LDAP encoding |
| XML | XML encoding |

### 7.4 File Upload Security

*Complete with specific file type requirements applicable to your application.*

Where applications accept file uploads, the following additional controls are mandatory:

- Validate file type using magic byte inspection, not solely by file extension.
- Store uploaded files outside the web root or in a separate storage service with no direct execution privilege.
- Generate a new file name for all uploaded files; do not preserve user-supplied file names.
- Enforce a maximum file size limit of [X MB] at the application layer.
- Scan all uploaded files with an approved anti-malware tool before making them available for use.
- Do not allow uploaded files to be served directly from a path that allows executable interpretation by the web server.

---

## 8. Authentication and Session Management

*This section defines mandatory controls for authenticating users and managing sessions. It should be read alongside the organization's Identity and Access Management (IAM) Policy. Authors should specify token lifetimes, MFA exemption processes, and integration with any SSO or IAM systems in use.*

### 8.1 Authentication Requirements

#### 8.1.1 Password Policy

All applications must enforce the following minimum password policy:

| Parameter | Minimum Requirement |
|---|---|
| Minimum length | 12 characters |
| Complexity | Uppercase, lowercase, numeric, and at least one special character |
| Maximum age | [90] days for privileged accounts; [180] days for standard accounts |
| History | Last [12] passwords must not be reused |
| Lockout threshold | [5] consecutive failed attempts |
| Lockout duration | [15] minutes (automatic unlock) or manual unlock by administrator |
| Secure storage | bcrypt, scrypt, or Argon2 with appropriate work factor |

#### 8.1.2 Multi-Factor Authentication

MFA is mandatory for the following use cases:

- All administrative and privileged user accounts without exception.
- All remote access to internal systems.
- Consumer-facing applications that process personal data classified as Sensitive under the Personal Data Protection Act 2010.
- Developer access to production systems and code repositories.
- Access to the CI/CD pipeline and build infrastructure.

Permitted MFA methods (in order of preference):

1. Hardware security keys (FIDO2 / WebAuthn)
2. Time-based One-Time Password (TOTP) authenticator applications
3. Push notification-based authenticator applications
4. SMS OTP (only where higher-assurance methods are not technically feasible; requires documented risk acceptance)

SMS OTP as a sole MFA mechanism for privileged access is prohibited.

#### 8.1.3 Credential Management

- Credentials must never be transmitted or stored in plaintext.
- Applications must not display or log credentials at any point.
- Default credentials on all components must be changed before deployment to any environment.
- Service account credentials must be rotated at minimum every [90] days or immediately upon suspected compromise.
- API keys and service tokens must be treated as credentials and managed through the approved secrets management system.

### 8.2 Session Management Requirements

#### 8.2.1 Session Token Standards

| Parameter | Requirement |
|---|---|
| Token generation | Cryptographically secure random number generator |
| Token entropy | Minimum 128 bits |
| Token transmission | HTTPS only; never in URL parameters |
| Cookie attributes | Secure flag, HttpOnly flag, SameSite=Strict or Lax |
| Session timeout (idle) | [15] minutes for privileged sessions; [30] minutes for standard sessions |
| Session timeout (absolute) | [8] hours maximum for standard sessions; [4] hours for privileged sessions |
| Post-authentication | Generate a new session token upon successful authentication (prevent session fixation) |
| Post-logout | Invalidate session token server-side immediately upon logout |

#### 8.2.2 Concurrent Session Control

- Applications must enforce a maximum number of concurrent sessions per user account: [specify maximum, e.g., 3 concurrent sessions].
- Users must be notified of concurrent sessions where technically feasible.
- Administrators must have the ability to terminate any active user session.

#### 8.2.3 JWT and Token-Based Authentication

Where JSON Web Tokens (JWT) or similar token-based authentication is used:

- Use asymmetric signing algorithms (RS256, ES256). The use of the `none` algorithm is strictly prohibited.
- Implement short token lifetimes: access tokens maximum [15] minutes; refresh tokens maximum [24] hours.
- Validate all token claims (issuer, audience, expiry, subject) on every request.
- Implement token revocation lists for refresh tokens.
- Store refresh tokens securely (httpOnly, Secure cookies or server-side session store). Do not store access tokens in localStorage.

### 8.3 Single Sign-On (SSO) Integration

*Complete this section if the organization uses an SSO or Identity Provider (IdP). Specify the SSO platform and integration protocol.*

Where applications integrate with [Organization Name]'s centralized identity provider ([IdP Name]):

- Applications must use the approved SSO protocol: [SAML 2.0 / OpenID Connect — specify].
- Applications must not implement their own user credential stores for accounts that are managed by the central IdP.
- Session lifetimes must align with the organization-wide SSO session policy.
- Applications must propagate logout events to the central IdP to support single logout (SLO).

---

## 9. Static Application Security Testing (SAST) Integration

*This section defines the mandatory requirements for integrating automated static code analysis into the development pipeline. Authors should specify the approved SAST tooling, configuration baselines, and SLA for remediation.*

### 9.1 SAST Requirements Overview

Static Application Security Testing (SAST) is mandatory for all applications within scope. SAST tools analyse source code without executing it to identify security defects including injection vulnerabilities, insecure API usage, hardcoded credentials, and unsafe cryptographic patterns.

### 9.2 Approved SAST Tooling

*Specify the organization's approved SAST tools. The following is a placeholder list to be replaced with actual approved tools.*

| Tool | Primary Language Support | Integration Point | Approval Status |
|---|---|---|---|
| [SAST Tool 1 — e.g., SonarQube] | [Language(s)] | CI/CD pipeline, pre-merge | [Approved] |
| [SAST Tool 2 — e.g., Semgrep] | [Language(s)] | CI/CD pipeline, IDE plugin | [Approved] |
| [SAST Tool 3 — e.g., Checkmarx] | [Language(s)] | CI/CD pipeline, scheduled scan | [Approved] |

Any SAST tooling not listed in the above table requires approval from the CISO prior to use.

### 9.3 SAST Integration Requirements

SAST scanning must be integrated at the following points in the development pipeline:

1. **Pre-commit / IDE:** Developers are encouraged to use IDE plugins for real-time feedback. This is not a mandatory gate but is strongly recommended.
2. **Pull Request / Merge Request:** A SAST scan must be triggered and completed before any pull request can be approved and merged to a protected branch.
3. **Nightly Full Scan:** A full SAST scan of the entire codebase must be scheduled and executed nightly against the main development branch.
4. **Pre-deployment:** A clean SAST scan result (no unaddressed Critical or High findings) is a mandatory gate before promotion to production (refer to Section 5.2, Gate 2).

### 9.4 Finding Severity and Remediation SLA

| Severity | CVSS Score Range | Remediation SLA | Promotion Blocker |
|---|---|---|---|
| **Critical** | 9.0 – 10.0 | 24 hours | Yes — immediate halt |
| **High** | 7.0 – 8.9 | [5] business days | Yes — blocks production |
| **Medium** | 4.0 – 6.9 | [30] calendar days | No — tracked to closure |
| **Low** | 0.1 – 3.9 | [90] calendar days | No — tracked to closure |
| **Informational** | N/A | Best effort | No |

### 9.5 False Positive Management

- Developers may not suppress or ignore a SAST finding without formal justification.
- A finding may be marked as a false positive in the SAST tool only after review and written approval from a Security Champion or Security Team member.
- All suppressed findings must be recorded in the **[SAST Finding Register — Document ID: TBD]** with justification, date, and approver.
- False positive designations are subject to quarterly review by the Security Team.

### 9.6 SAST Evidence and Reporting

- SAST scan reports must be retained for a minimum of [two (2)] years for audit purposes.
- Summary metrics (total findings by severity, findings opened, findings closed, open critical/high findings) must be reported monthly to the CISO and Development Lead.
- Trend data must be maintained to demonstrate improvement in the security posture of the codebase over time.

---

## 10. Dynamic Application Security Testing (DAST) Integration

*This section defines requirements for testing running applications for security vulnerabilities. DAST complements SAST by identifying vulnerabilities that only manifest at runtime. Authors should specify approved tools and the environments in which DAST is permitted to run.*

### 10.1 DAST Requirements Overview

Dynamic Application Security Testing (DAST) is mandatory for all web applications and APIs within scope prior to production deployment. DAST tools interact with a running application as an attacker would, identifying vulnerabilities such as XSS, SQL injection, authentication weaknesses, and misconfigurations that are not visible in static analysis.

### 10.2 Approved DAST Tooling

*Replace with the organization's approved DAST tools.*

| Tool | Application Type | Integration Point | Approval Status |
|---|---|---|---|
| [DAST Tool 1 — e.g., OWASP ZAP] | Web application, API | CI/CD pipeline, staging | [Approved] |
| [DAST Tool 2 — e.g., Burp Suite Enterprise] | Web application | Pre-release assessment | [Approved] |
| [DAST Tool 3] | [Type] | [Integration Point] | [Status] |

### 10.3 DAST Execution Requirements

- DAST scans must only be executed against **designated testing or staging environments**. DAST must not be run against production environments without explicit, written authorization from the CISO and system owner.
- The staging environment used for DAST must be representative of the production environment in terms of application configuration and technology stack.
- DAST scans must be authenticated (i.e., the tool must be able to operate as a logged-in user) to maximise coverage of authenticated functionality.
- DAST must be configured to test the application's complete API surface. API specifications (OpenAPI / Swagger) must be provided to the DAST tool where available.

### 10.4 DAST Frequency

| Trigger | DAST Scan Type | Mandatory? |
|---|---|---|
| Before each production release | Full authenticated scan of staging environment | Yes |
| Major feature deployment | Full authenticated scan | Yes |
| Scheduled (quarterly) | Full scan of all in-scope applications | Yes |
| After significant architectural change | Targeted scan of affected components | Yes |
| On-demand (ad hoc investigation) | Targeted scan | As required |

### 10.5 Finding Severity and Remediation SLA

*DAST findings use the same severity classification and SLA as SAST findings.*

| Severity | Remediation SLA | Promotion Blocker |
|---|---|---|
| **Critical** | 24 hours | Yes — immediate halt |
| **High** | [5] business days | Yes — blocks production |
| **Medium** | [30] calendar days | No — tracked to closure |
| **Low** | [90] calendar days | No — tracked to closure |

### 10.6 Penetration Testing

In addition to automated DAST, [Organization Name] requires manual penetration testing:

- **Frequency:** Annually at minimum, or following significant changes to application architecture.
- **Scope:** All applications classified as NCII assets and any application handling sensitive personal data.
- **Methodology:** Testing must follow a recognized methodology (OWASP Testing Guide, PTES, or OSSTMM).
- **Testers:** Penetration tests must be conducted by or supervised by individuals holding relevant certifications (e.g., CREST CRT/CCT, OSCP, CEH) or by an approved third-party security testing firm.
- **Reports:** Penetration test reports must be retained for a minimum of three (3) years.

---

## 11. Code Review Requirements

*This section defines mandatory standards for peer code review as a security control. Code review is distinct from automated testing and provides judgment-based analysis of business logic and design patterns that tools cannot assess. Authors should tailor mandatory review checklists to the organization's primary technology stack.*

### 11.1 Purpose of Security Code Review

Code review serves as a critical security control by enabling human judgment to identify:

- Security vulnerabilities that automated tools may miss (e.g., business logic flaws, IDOR patterns).
- Deviations from secure coding standards defined in this document.
- Insecure design patterns that increase attack surface.
- Missing security controls such as absent authorization checks.

All code merged to protected branches must undergo mandatory peer review.

### 11.2 Code Review Policy

| Parameter | Requirement |
|---|---|
| Minimum reviewers per pull request | [Two (2)] approved reviewers |
| Security-sensitive code | At least one (1) reviewer must be a Security Champion or Security Team member |
| Review response time | Reviewer must respond within [two (2)] business days |
| Auto-merge | Prohibited for any protected branch |
| Author self-approval | Prohibited |
| Approval validity | Approval is invalidated by subsequent commits; re-approval required |

### 11.3 Definition of Security-Sensitive Code

The following code areas are classified as security-sensitive and require Security Champion or Security Team review:

- Authentication and authorization logic
- Session management
- Cryptographic implementation
- Input validation and output encoding routines
- Payment processing and financial calculation logic
- Code that directly queries, modifies, or deletes database records
- Code that processes or stores personal data
- Security configuration changes
- Infrastructure-as-Code changes affecting network security or access control
- Changes to logging or audit trail functionality
- Dependency updates for security-critical libraries

### 11.4 Code Review Checklist

*Reviewers must use the following checklist as a guide during security code review. This checklist should be completed and attached to or noted in the pull request record.*

| # | Review Item | Pass / Fail / N/A |
|---|---|---|
| 1 | Input validation is implemented server-side for all user-supplied data | |
| 2 | Output encoding is applied appropriate to the output context | |
| 3 | Parameterized queries or ORM used for all database interactions | |
| 4 | No hardcoded credentials, API keys, or secrets present | |
| 5 | Authentication is enforced on all endpoints requiring it | |
| 6 | Authorization checks are enforced; IDOR protections are present | |
| 7 | Sensitive data is not logged | |
| 8 | Cryptographic algorithms meet approved standards | |
| 9 | Error handling does not expose sensitive information | |
| 10 | New dependencies are from approved sources and version-pinned | |
| 11 | File upload handling (if applicable) meets security requirements | |
| 12 | Concurrent/race condition vulnerabilities considered | |
| 13 | Business logic edge cases reviewed for security impact | |
| 14 | Security headers are configured for new/modified endpoints | |
| 15 | Logging is sufficient to detect and investigate security events | |

### 11.5 Tooling Support for Code Review

The following tools must be integrated into the code review workflow to assist reviewers:

- **SAST results:** SAST findings must be visible within the pull request interface before review commences.
- **SCA results:** Software Composition Analysis results must be visible to reviewers to flag dependency risks.
- **Linting:** Security-focused linting rules must be enforced as part of the automated pipeline checks preceding review.

### 11.6 Code Review Records

- Pull request records, including reviewer identities, review comments, and approval timestamps, must be retained in the version control system for a minimum of [two (2)] years.
- Review records are considered audit evidence and must not be modified or deleted.

---

## 12. Dependency and Library Management

*This section defines how third-party libraries and packages are to be managed. This is one of the fastest-growing attack surfaces for modern applications. Authors should specify the approved package registries, SCA tools, and the process for responding to newly disclosed vulnerabilities in dependencies.*

### 12.1 Overview

Modern applications routinely incorporate hundreds of third-party libraries and packages. Each dependency introduces potential security risk through its own vulnerabilities, transitive dependencies, and supply chain compromise risk. [Organization Name] mandates structured management of all application dependencies.

### 12.2 Software Bill of Materials (SBOM)

A Software Bill of Materials (SBOM) must be maintained for every application within scope.

| Requirement | Detail |
|---|---|
| **Format** | CycloneDX or SPDX (machine-readable) |
| **Content** | All direct and transitive dependencies, version numbers, license information, and known vulnerability status |
| **Generation** | Automatically generated as part of the CI/CD pipeline build process |
| **Storage** | Stored in the application's artifact repository alongside the corresponding build artifact |
| **Retention** | Minimum [three (3)] years |
| **Update frequency** | Regenerated on every build |

### 12.3 Approved Package Sources

| Ecosystem | Approved Registry | Prohibited Sources |
|---|---|---|
| JavaScript / Node.js | [npmjs.com or private mirror] | Unverified private registries, direct Git URLs without pinning |
| Python | [PyPI or private mirror] | Unofficial mirrors |
| Java | [Maven Central or private Nexus/Artifactory instance] | Unauthenticated repositories |
| .NET | [NuGet.org or private feed] | Unsigned packages |
| Container images | [Approved container registry] | Docker Hub public images without verification |

Packages sourced from outside approved registries require written approval from the Security Team before use.

### 12.4 Dependency Pinning

- All dependencies must be pinned to specific versions (e.g., `library==1.2.3`), not version ranges or `latest`.
- Lock files (e.g., `package-lock.json`, `Pipfile.lock`, `go.sum`) must be committed to version control and treated as authoritative.
- Automated dependency update tools (e.g., Dependabot, Renovate) may be used subject to mandatory SAST and DAST pipeline validation before merge.

### 12.5 Software Composition Analysis (SCA)

SCA tooling must be integrated into the CI/CD pipeline to continuously monitor for known vulnerabilities in dependencies.

| Requirement | Detail |
|---|---|
| **Approved SCA tools** | [SCA Tool 1 — e.g., OWASP Dependency-Check], [SCA Tool 2 — e.g., Snyk], [SCA Tool 3] |
| **Scan trigger** | Every pull request and every nightly build |
| **Vulnerability feeds** | NVD (National Vulnerability Database), GitHub Advisory Database, [vendor-specific feeds] |
| **Promotion block** | Critical and High severity CVEs in dependencies block production promotion |

### 12.6 Vulnerability Response SLA for Dependencies

| Severity (CVSS) | Notification | Assessment | Remediation (Patch or Mitigate) |
|---|---|---|---|
| **Critical (9.0–10.0)** | Immediate | Within 4 hours | Within [24] hours |
| **High (7.0–8.9)** | Within 24 hours | Within 1 business day | Within [5] business days |
| **Medium (4.0–6.9)** | Within 72 hours | Within 5 business days | Within [30] calendar days |
| **Low (0.1–3.9)** | Next scheduled review | Next sprint cycle | Within [90] calendar days |

Where a patch is not available, a compensating control or documented risk acceptance (with CISO approval) is required within the same timeline.

### 12.7 License Compliance

- Licenses of all dependencies must be reviewed to ensure compatibility with [Organization Name]'s commercial obligations.
- The following license categories require legal review before use: GPL, AGPL, LGPL (in certain contexts), and any license with attribution or copyleft obligations.
- License compliance information must be included in the SBOM.

### 12.8 Dependency Retirement and Removal

- Unused dependencies must be removed from the codebase.
- Dependencies that have reached end-of-life (EOL) with no further security updates must be replaced. Where replacement is not immediately feasible, a documented risk acceptance and compensating control are required.
- End-of-life dependency status must be reviewed quarterly.

---

## 13. Secure Configuration and Hardening

*This section covers secure configuration requirements for the application and its supporting infrastructure. It complements the OWASP Top 10 A05 controls.*

### 13.1 Application Configuration Standards

- All application configurations must be maintained in version-controlled configuration files.
- Environment-specific configurations (development, staging, production) must be managed separately. Configuration must never be baked into container images.
- Production configurations must be reviewed and approved by the Security Team before first deployment and on any subsequent change.

### 13.2 Secrets Management

Hardcoded secrets are one of the most common and severe security vulnerabilities. The following requirements are mandatory:

| Requirement | Detail |
|---|---|
| **Prohibited** | Hardcoding secrets (passwords, API keys, certificates, tokens) in source code, configuration files, or container images |
| **Approved method** | Use an approved secrets management solution: [HashiCorp Vault / AWS Secrets Manager / Azure Key Vault / specify] |
| **Environment variables** | Environment variables containing secrets must be injected at runtime, not stored in repository files or CI/CD system logs |
| **Detection** | SAST rules for secret detection must be enabled in the pipeline; pre-commit hooks for secret scanning are mandatory |
| **Rotation** | All application secrets must be rotatable without application downtime; rotation must occur on a defined schedule and immediately upon suspected compromise |

### 13.3 HTTP Security Headers

All web applications must implement the following HTTP security headers in production:

| Header | Required Value / Policy |
|---|---|
| `Content-Security-Policy` | [Define policy appropriate to application — avoid `unsafe-inline` and `unsafe-eval`] |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` or `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | [Restrict to features required by application] |

### 13.4 Container and Infrastructure Security

Where applications are deployed in containers:

- Container images must be built from approved base images. The use of unverified public images is prohibited.
- Containers must not run as root. Non-root user contexts must be specified in all Dockerfiles and Kubernetes manifests.
- Container images must be scanned for vulnerabilities using an approved container scanning tool as part of the CI/CD pipeline.
- Kubernetes network policies must restrict inter-pod and pod-to-external communication to only required flows.
- Secrets must not be passed via environment variables defined in container image layers; use mounted secrets or runtime injection.

---

## 14. Security Testing and Acceptance Criteria

*This section consolidates all security testing requirements and defines the criteria that must be met before an application can be accepted into the production NCII environment.*

### 14.1 Security Testing Requirements Summary

| Test Type | Frequency | Tool | Mandatory Gate |
|---|---|---|---|
| SAST | Every build / pull request | [Approved SAST tools] | Yes (Critical / High) |
| SCA | Every build / pull request | [Approved SCA tools] | Yes (Critical / High) |
| DAST | Pre-release (each release) | [Approved DAST tools] | Yes (Critical / High) |
| Container scan | Every image build | [Approved scanner] | Yes (Critical / High) |
| Secret scan | Every commit / build | [Approved scanner] | Yes (any finding) |
| Manual penetration test | Annual / post major change | Approved tester | Yes (annual cycle) |
| Threat model review | New applications / major change | Security Team | Yes (design gate) |

### 14.2 Security Acceptance Criteria

An application may only be approved for production deployment when all of the following criteria are met:

- [ ] All Critical and High SAST findings are remediated or have an approved exception.
- [ ] All Critical and High SCA/dependency vulnerability findings are remediated or have an approved exception.
- [ ] A DAST scan has been completed against the current release candidate in staging, and all Critical and High findings are remediated or have an approved exception.
- [ ] No unaddressed secret scan findings exist.
- [ ] The code review process has been completed for all changes in the release, with records available.
- [ ] Security acceptance sign-off has been obtained from the CISO or delegated Security Lead.
- [ ] All security exceptions are documented in the Security Exception Register with CISO approval.

### 14.3 Exception Management

Where a finding cannot be remediated within the required SLA:

1. The Development Lead must submit a **Security Exception Request** to the Security Team, documenting: the finding, the reason remediation cannot be completed within SLA, proposed compensating controls, and the proposed exception expiry date.
2. The exception must be approved in writing by the CISO.
3. Approved exceptions must be registered in the **[Security Exception Register — Document ID: TBD]**.
4. Exceptions expire on the date specified by the CISO. Expired exceptions must be renewed or the finding remediated.
5. All active exceptions must be reviewed quarterly by the Security Team.

---

## 15. Incident Response Integration for Development

*This section defines how the development team interfaces with the incident response process when security vulnerabilities are discovered post-deployment.*

### 15.1 Vulnerability Disclosure

Where a security vulnerability is discovered in a production application — whether through internal testing, external disclosure, or security monitoring — the following process applies:

1. **Discovery:** Any team member discovering a potential vulnerability must report it immediately to the Security Team via [approved reporting channel — e.g., security@[organization].com or security ticketing system].
2. **Triage:** The Security Team will triage the report within [4] hours of receipt during business hours and [8] hours outside business hours.
3. **Classification:** The vulnerability will be classified using the CVSS scoring system and prioritized according to Section 9.4 SLAs.
4. **Notification:** If the vulnerability affects NCII assets, the CISO must be notified within [2] hours of classification as Critical or High.
5. **Regulatory Notification:** Critical vulnerabilities affecting NCII assets may trigger reporting obligations under the Cyber Security Act 2024 (Act 854). The CISO must assess regulatory notification requirements in accordance with the **[Incident Response Plan — Document ID: TBD]**.

### 15.2 Emergency Patching

Where a Critical vulnerability requires emergency remediation:

- Normal change management gates may be expedited with CISO authorization. Security testing requirements must still be met but may be performed concurrently with deployment preparation.
- Emergency changes must be documented fully and subject to a post-implementation review within [5] business days.

---

## 16. Roles and Responsibilities

*This section defines accountability for secure development activities. The RACI model is used. Tailor role names to match the organization's actual titles and team structure.*

### 16.1 RACI Matrix

**R** — Responsible (performs the activity)
**A** — Accountable (owns the outcome; only one per activity)
**C** — Consulted (provides input)
**I** — Informed (notified of outcome)

| Activity | CISO | Development Lead | Developer | Security Champion | Security Team | QA / Test Lead | DevOps / Infra |
|---|---|---|---|---|---|---|---|
| Define and maintain this standard | A | C | I | C | R | I | I |
| Threat modelling | A | C | R | C | R | I | I |
| Secure coding | I | A | R | C | C | I | I |
| SAST tool configuration | A | C | I | C | R | I | R |
| SAST findings remediation | I | A | R | C | C | I | I |
| DAST execution | A | I | I | I | R | R | I |
| DAST findings remediation | I | A | R | C | C | I | I |
| Code review (standard) | I | A | R | C | I | I | I |
| Code review (security-sensitive) | I | A | R | R | C | I | I |
| Dependency management | I | A | R | C | C | I | I |
| SCA tool monitoring | A | I | I | C | R | I | I |
| Secret management | I | C | R | C | R | I | A |
| Container image scanning | A | I | I | I | R | I | R |
| Security gate enforcement | A | C | I | I | R | C | I |
| Exception management | A | C | I | C | R | I | I |
| Penetration testing (coordination) | A | C | I | I | R | C | I |
| SBOM generation and storage | I | A | R | I | C | I | R |
| Security awareness training | A | C | R | R | R | I | I |
| Regulatory reporting (if required) | A | I | I | I | R | I | I |

### 16.2 Role Descriptions

| Role | Secure Development Responsibilities |
|---|---|
| **CISO** | Ultimate accountability for the security of all applications in the NCII environment; approves exceptions; authorizes production security sign-off; oversees regulatory compliance. |
| **Development Lead** | Accountable for implementation of this standard across the development team; ensures security activities are resourced and completed; escalation point for remediation decisions. |
| **Developer** | Responsible for writing secure code in accordance with this standard; completing required training; raising security concerns promptly. |
| **Security Champion** | Developer with additional security training; first line of security advice within the development team; participates in security code reviews; liaises between development and security teams. |
| **Security Team** | Owns the security testing toolchain; conducts security assessments; manages the exception register; provides security requirements and guidance; monitors compliance with this standard. |
| **QA / Test Lead** | Integrates security testing into the test strategy; manages DAST execution; ensures security acceptance criteria are met before release approval. |
| **DevOps / Infrastructure** | Implements and maintains secure pipeline configuration; manages secrets injection; ensures container and infrastructure security; applies hardening baselines. |

---

## 17. Compliance and Enforcement

*This section defines how compliance with this standard is monitored and what consequences apply for non-compliance.*

### 17.1 Compliance Monitoring

Compliance with this standard is monitored through the following mechanisms:

| Monitoring Mechanism | Frequency | Responsible Party |
|---|---|---|
| Automated pipeline gate enforcement | Every build / deployment | DevOps / Security Team |
| SAST and DAST metrics review | Monthly | Security Team |
| Code review record audit | Quarterly | Security Team / Internal Audit |
| Security exception register review | Quarterly | CISO / Security Team |
| SBOM completeness review | Quarterly | Security Team |
| Penetration test findings review | Annually (post-test) | CISO / Development Lead |
| Full standard compliance audit | Annually | Internal Audit / Security Team |

### 17.2 Non-Compliance

Failure to comply with the requirements of this standard may result in:

- Blocking of code promotion to production environments.
- Mandatory remediation before further development activity.
- Escalation to the CISO and, where applicable, to senior management.
- Disciplinary action in accordance with [Organization Name]'s **[Human Resources Policy — Document ID: TBD]** for deliberate or repeated non-compliance.
- Regulatory consequences under the Cyber Security Act 2024 (Act 854) for failures that result in a security incident affecting NCII assets.

### 17.3 Training and Awareness

- All developers and technical staff must complete approved secure development training upon joining [Organization Name] and annually thereafter.
- Security Champions must complete advanced application security training, such as the SANS SEC522 or equivalent, within [six (6)] months of appointment.
- Training completion records must be maintained by [HR / Learning & Development] and made available for audit.

---

## 18. Review and Approval

### 18.1 Document Review Cycle

This standard must be reviewed at minimum annually, or upon any of the following triggers:

- Material changes to the Cyber Security Act 2024 (Act 854) or associated NACSA codes of practice.
- Significant changes to [Organization Name]'s application development technology stack or architecture.
- A security incident attributable to a failure in secure development practices.
- Publication of a new edition of the OWASP Top 10 or a significant revision to OWASP ASVS.
- Identification of a material gap during internal or external audit.

### 18.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial release |
| [X.X] | [Date] | [Author Name] | [Description of changes] |
| [X.X] | [Date] | [Author Name] | [Description of changes] |
| [X.X] | [Date] | [Author Name] | [Description of changes] |

### 18.3 Approval Sign-Off

By signing below, the approvers confirm that they have reviewed this standard and approve it for use within [Organization Name].

| Role | Name | Signature | Date |
|---|---|---|---|
| CISO | [Name] | | [Date] |
| Development Lead | [Name] | | [Date] |
| Head of IT / CTO | [Name] | | [Date] |
| [Head of Compliance / Risk] | [Name] | | [Date] |
| [Internal Audit Representative] | [Name] | | [Date] |

---

## 19. References

*This section lists all regulatory, standards, and internal policy references cited in or relevant to this standard.*

### 19.1 Legislation and Regulatory References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), Section 18 | Obligation on NCII entities to implement adequate cybersecurity measures for ICT systems |
| Cyber Security Act 2024 (Act 854), Section 18(2) | Measures shall conform to codes of practice or standards specified by the Chief Executive of NACSA |
| Personal Data Protection Act 2010 (Act 709), Section 9 | Security measures for the protection of personal data in processing activities |
| [Bank Negara Malaysia — Risk Management in Technology (RMiT) Policy Document, Para. X.X] | Secure software development lifecycle requirements for financial institutions |

### 19.2 Industry Standards and Frameworks

| Reference | Description |
|---|---|
| OWASP Top 10 (current edition) | Top 10 most critical web application security risks |
| OWASP Application Security Verification Standard (ASVS) v4.0 | Comprehensive application security verification requirements (Level 2 minimum) |
| OWASP Testing Guide (OTG) | Methodology for web application security testing |
| NIST SP 800-218: Secure Software Development Framework (SSDF) | NIST framework for secure software development practices |
| ISO/IEC 27001:2022, Annex A Control 8.25 | Secure development lifecycle control |
| ISO/IEC 27002:2022, Section 8.28 | Secure coding requirements |
| CWE Top 25 Most Dangerous Software Weaknesses | Common Weakness Enumeration ranking of dangerous weaknesses |
| CVSS v3.1 / v4.0 | Common Vulnerability Scoring System for severity classification |
| SPDX Specification | Software Package Data Exchange format for SBOM |
| CycloneDX Specification | SBOM format for software supply chain security |

### 19.3 Internal Documents

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Document ID] | Parent policy |
| IT Security Framework | [Document ID] | Parent framework |
| Vulnerability Management Standard | [Document ID] | Related standard |
| Change Management Policy | [Document ID] | Related policy |
| Third-Party and Vendor Risk Management Policy | [Document ID] | Related policy |
| Incident Response Plan | [Document ID] | Related procedure |
| Data Classification Policy | [Document ID] | Related policy |
| Security Exception Register | [Document ID] | Supporting register |
| Security Awareness Training Program | [Document ID] | Supporting program |

---

## 20. Appendices

### Appendix A — Secure Coding Checklist (Pre-Submission)

*This checklist is to be completed by the developer before submitting a pull request. It serves as a self-attestation and complements the peer code review checklist in Section 11.4.*

**Developer:** [Name]
**Pull Request / Change Reference:** [Reference]
**Date:** [Date]

| # | Item | Confirmed |
|---|---|---|
| 1 | I have reviewed my code for injection vulnerabilities (SQLi, XSS, command injection, LDAP injection) | ☐ |
| 2 | All database queries use parameterized statements or ORM | ☐ |
| 3 | All user inputs are validated server-side using allowlist validation | ☐ |
| 4 | Output is encoded appropriate to the rendering context | ☐ |
| 5 | Authentication is enforced on all endpoints that require it | ☐ |
| 6 | Authorization checks are present and correctly implemented | ☐ |
| 7 | No credentials, secrets, or API keys are hardcoded in the code | ☐ |
| 8 | Cryptographic functions use only approved algorithms | ☐ |
| 9 | Sensitive data is not written to logs | ☐ |
| 10 | Error messages do not expose stack traces or sensitive information to the user | ☐ |
| 11 | All new dependencies are sourced from approved registries and pinned to specific versions | ☐ |
| 12 | The SAST scan has been reviewed and all Critical/High findings addressed | ☐ |
| 13 | The SCA scan has been reviewed and all Critical/High findings addressed | ☐ |
| 14 | No sensitive or production data has been introduced into the development or test environment | ☐ |

**Developer Signature:** ___________________________ **Date:** _______________

---

### Appendix B — Security Exception Request Form

*Use this form to request an exception to a requirement of this standard. Exceptions require CISO approval.*

| Field | Details |
|---|---|
| **Exception Reference** | [Auto-generated or sequential ID] |
| **Date of Request** | [Date] |
| **Requested By** | [Name, Role] |
| **Application / System** | [Application name and ID] |
| **Standard Section** | [Reference to section of this standard requiring exception] |
| **Finding / Requirement** | [Describe the specific finding or requirement that cannot be met] |
| **Severity** | [Critical / High / Medium / Low] |
| **Reason for Exception** | [Explain why the requirement cannot be met within the required timeframe] |
| **Proposed Compensating Controls** | [Describe the controls that will reduce risk in lieu of full remediation] |
| **Residual Risk Assessment** | [Describe the residual risk after compensating controls are applied] |
| **Proposed Exception Expiry Date** | [Date — must not exceed 90 days for Critical/High findings] |
| **Remediation Plan** | [Describe the planned path to full remediation] |

**Recommended By (Security Team):** ___________________________ **Date:** _______________

**Approved / Rejected By (CISO):** ___________________________ **Date:** _______________

**Conditions of Approval (if applicable):** [Any conditions attached to the exception approval]

---

### Appendix C — Approved Tools Register

*This appendix lists approved security tooling. The Security Team is responsible for maintaining this register. Tools must not be substituted without Security Team approval.*

| Tool Category | Approved Tool(s) | Version / Licence | Notes |
|---|---|---|---|
| SAST | [Tool name] | [Version] | [Language support, integration notes] |
| DAST | [Tool name] | [Version] | [Usage notes] |
| SCA / Dependency Scanning | [Tool name] | [Version] | [Registry coverage] |
| Secret Scanning | [Tool name] | [Version] | [Pre-commit / pipeline] |
| Container Image Scanning | [Tool name] | [Version] | [Registry integration] |
| Secrets Management | [Tool name] | [Version] | [Vault / cloud provider] |
| Penetration Testing | [Approved firms / tools] | N/A | [Annual engagement] |
| Threat Modelling | [Tool name — e.g., OWASP Threat Dragon, MS Threat Modeling Tool] | [Version] | |

*Last updated: [Date] — Security Team*

---

### Appendix D — OWASP ASVS Level 2 Compliance Mapping

*This appendix maps OWASP Application Security Verification Standard (ASVS) Level 2 requirements to the sections of this standard. Complete this mapping to demonstrate coverage during audit.*

| ASVS Category | ASVS Control ID | ASVS Requirement (Summary) | Standard Section |
|---|---|---|---|
| V1 Architecture | V1.1 | Secure software development lifecycle | Section 5 |
| V2 Authentication | V2.1 | Password security | Section 8.1.1 |
| V2 Authentication | V2.2 | General authenticator security | Section 8.1 |
| V2 Authentication | V2.3 | Authenticator lifecycle | Section 8.1.3 |
| V3 Session Management | V3.1 | Session management fundamentals | Section 8.2 |
| V3 Session Management | V3.2 | Session binding | Section 8.2.1 |
| V3 Session Management | V3.3 | Session timeout | Section 8.2.1 |
| V5 Validation | V5.1 | Input validation | Section 7 |
| V5 Validation | V5.2 | Sanitization and sandboxing | Section 7.3 |
| V5 Validation | V5.3 | Output encoding | Section 7.3 |
| V7 Error and Logging | V7.1 | Log content | Section 6.9 |
| V7 Error and Logging | V7.2 | Log processing | Section 6.9 |
| V9 Communications | V9.1 | Client-side communications | Section 6.2 |
| V10 Code Integrity | V10.1 | Code integrity | Section 9 |
| V14 Configuration | V14.1 | Build and deploy | Section 13 |
| V14 Configuration | V14.2 | Dependency management | Section 12 |

*[Extend this table to cover all applicable ASVS Level 2 controls for your application inventory.]*

---

### Appendix E — Threat Modelling Template

*Use this template when conducting threat modelling in accordance with Section 5 and Section 6.4.*

**Application Name:** [Name]
**Version / Release:** [Version]
**Date of Threat Model:** [Date]
**Threat Model Author(s):** [Names]
**Reviewed By:** [Security Team Member]

#### E.1 Application Overview

[Provide a brief description of the application, its purpose, and its primary users.]

#### E.2 Data Flow Diagram

[Attach or embed a data flow diagram showing: system components, data flows between components, trust boundaries, and external entities.]

#### E.3 Assets and Data Classification

| Asset | Data Classification | Owner |
|---|---|---|
| [Asset 1] | [Public / Internal / Confidential / Restricted] | [Owner] |
| [Asset 2] | | |

#### E.4 Threat Identification (STRIDE)

| ID | Component | Threat Category (STRIDE) | Threat Description | CVSS Score (estimated) | Mitigation | Status |
|---|---|---|---|---|---|---|
| T-001 | [Component] | [Spoofing / Tampering / Repudiation / Information Disclosure / Denial of Service / Elevation of Privilege] | [Description] | [Score] | [Mitigation] | [Open / Mitigated / Accepted] |
| T-002 | | | | | | |

#### E.5 Residual Risks

[List any threats where the residual risk after mitigation remains above acceptable threshold and document the risk acceptance decision.]

---

### Appendix F — Glossary of Security Weaknesses

*A quick-reference glossary of the most common security weakness types relevant to this standard, for use by developers who may be less familiar with security terminology.*

| Weakness | CWE | Brief Description |
|---|---|---|
| SQL Injection | CWE-89 | Attacker-controlled SQL inserted into a database query |
| Cross-Site Scripting (XSS) | CWE-79 | Attacker-controlled script executed in victim's browser |
| Cross-Site Request Forgery | CWE-352 | Attacker tricks authenticated user into making unintended requests |
| Insecure Direct Object Reference | CWE-639 | Attacker accesses unauthorized objects by manipulating references |
| Path Traversal | CWE-22 | Attacker accesses files outside intended directory |
| Server-Side Request Forgery | CWE-918 | Attacker forces server to make requests to internal resources |
| Broken Authentication | CWE-287 | Flaws in authentication allow account compromise |
| Sensitive Data Exposure | CWE-200 | Sensitive information unintentionally disclosed |
| Security Misconfiguration | CWE-16 | Insecure default configuration left in production |
| Using Vulnerable Components | CWE-1395 | Dependency with known vulnerability included in application |
| Hardcoded Credentials | CWE-798 | Credentials embedded in source code |
| Insufficient Logging | CWE-778 | Failure to log security-relevant events |
| Cleartext Transmission | CWE-319 | Sensitive data transmitted without encryption |

---

*End of Document*

---

*This document is the property of [Organization Name]. Unauthorized reproduction or distribution is prohibited. For queries regarding this standard, contact the document owner: Development Lead / CISO at [contact details].*

| Document ID | [Document ID] | Version | 1.0 |
|---|---|---|---|
| Classification | Confidential | Last Review | [Date] |
| Next Review | [Date] | Approved By | [Name] |