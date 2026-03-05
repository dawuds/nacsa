# API Security Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Application Security |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Semi-Annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [API Authentication](#3-api-authentication)
4. [Rate Limiting and Throttling](#4-rate-limiting-and-throttling)
5. [Input Validation](#5-input-validation)
6. [API Gateway Requirements](#6-api-gateway-requirements)
7. [API Inventory and Documentation](#7-api-inventory-and-documentation)
8. [API Security Testing](#8-api-security-testing)
9. [Roles and Responsibilities](#9-roles-and-responsibilities)
10. [Non-Compliance and Exceptions](#10-non-compliance-and-exceptions)
11. [Review and Approval](#11-review-and-approval)
12. [References](#12-references)
13. [Appendices](#13-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This Standard defines the minimum security requirements for Application Programming Interfaces (APIs) that are exposed by, or consumed by, systems operated or maintained by **[Organization Name]** that qualify as National Critical Information Infrastructure (NCII) under the **Cyber Security Act 2024 (Act 854)**. It establishes baseline controls to protect API endpoints from unauthorized access, data leakage, abuse, and other cyber threats.

This Standard supports [Organization Name]'s obligations under Act 854, specifically with respect to the implementation of appropriate technical security measures (s18) and the reporting and management of cyber security incidents arising from API-related vulnerabilities (s24).

### 1.2 Scope

This Standard applies to:

- All APIs that are publicly exposed, partner-facing, or internally consumed by NCII-designated systems
- All APIs that process, transmit, or store sensitive data including personal data, financial data, or operationally critical data
- All teams responsible for designing, developing, deploying, maintaining, or consuming APIs within [Organization Name]
- Third-party APIs integrated into NCII systems where [Organization Name] is the consuming entity

This Standard applies to all deployment environments including production, staging, user acceptance testing (UAT), and development environments where real or production-equivalent data is processed.

### 1.3 Exclusions

The following are explicitly out of scope for this Standard:

- Internal service-to-service communication that does not traverse network trust boundaries, unless such services are part of a NCII-designated system
- APIs operated entirely by third-party vendors under their own regulatory compliance regime, where [Organization Name] has no development or configuration authority — such integrations are governed by the [Organization Name] Third-Party Risk Management Policy

### 1.4 Relationship to Other Documents

*List related policies, standards, and procedures that this document operates alongside.*

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Doc ID] | Parent policy |
| Secure Software Development Lifecycle (SSDLC) Standard | [Doc ID] | Related standard |
| Data Classification Policy | [Doc ID] | Related policy |
| Vulnerability Management Standard | [Doc ID] | Related standard |
| Incident Response Procedure | [Doc ID] | Related procedure |
| Third-Party Risk Management Policy | [Doc ID] | Related policy |

---

## 2. Regulatory Context

### 2.1 Legislative Basis

This Standard is issued in accordance with the following legislation and regulatory instruments:

| Instrument | Provision | Obligation |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Requirement for NCII entities to establish and maintain cyber security measures commensurate with the risk to NCII systems |
| Cyber Security Act 2024 (Act 854) | Section 24 | Requirement to report cyber security incidents, including those arising from API vulnerabilities or unauthorized API access, to the National Cyber Security Agency (NACSA) |
| Personal Data Protection Act 2010 (Act 709) | Section 9 | Security principle — personal data processed via APIs must be protected against loss, misuse, modification, or unauthorized disclosure |
| Financial Services Act 2013 (Act 758) *(if applicable)* | [Relevant Section] | [Relevant obligation — to be completed where applicable] |

### 2.2 Regulatory Guidance

*Reference any NACSA-issued guidelines, directives, or advisories that inform this Standard.*

| Issuing Body | Document | Reference |
|---|---|---|
| NACSA | [Relevant NACSA Guideline Title] | [Reference Number] |
| Bank Negara Malaysia *(if applicable)* | [Relevant BNM Policy Document] | [Reference Number] |
| [Other Body] | [Title] | [Reference] |

### 2.3 Industry Standards Alignment

This Standard is informed by and aligned with the following industry standards and frameworks:

- **OWASP API Security Top 10** (latest published edition)
- **NIST Special Publication 800-204** — Security Strategies for Microservices-based Application Systems
- **ISO/IEC 27001:2022** — Information Security Management Systems
- **OAuth 2.0 Framework** (RFC 6749) and **OpenID Connect 1.0**
- **OpenAPI Specification** (OAS 3.x) for API documentation requirements

---

## 3. API Authentication

### 3.1 Overview

*This section defines the required authentication mechanisms for all APIs within scope. Authors should specify which authentication method applies to each API tier (public, partner, internal) and document any approved deviations.*

All APIs within scope must implement strong authentication to verify the identity of clients before granting access to any resource. Anonymous access to APIs that process sensitive data or perform state-changing operations is prohibited.

### 3.2 Approved Authentication Methods

The following authentication mechanisms are approved for use. The applicable method must be selected based on the API type and data sensitivity classification as specified in the [Organization Name] Data Classification Policy.

| Authentication Method | Applicable API Type | Minimum Configuration Requirements |
|---|---|---|
| OAuth 2.0 with PKCE | Public-facing, partner-facing | Authorization Code flow with PKCE; token expiry ≤ 60 minutes; refresh token rotation enabled |
| OAuth 2.0 Client Credentials | Machine-to-machine (M2M) internal | Short-lived tokens; client secrets rotated at least every [90/180] days |
| API Keys | Low-risk internal integrations only | Keys must be ≥ 256-bit entropy; transmitted via header only; never in URL query strings |
| Mutual TLS (mTLS) | High-sensitivity NCII system integrations | Certificate validity ≤ 12 months; issued by [Organization Name] internal CA or approved CA |
| JWT (JSON Web Tokens) | As bearer token for OAuth 2.0 flows | RS256 or ES256 signing algorithm; `exp`, `iss`, `aud` claims mandatory; signature validation required |

**Prohibited methods:**

- HTTP Basic Authentication over non-TLS channels
- API keys embedded in URL query parameters
- Static, non-expiring tokens for any external or partner-facing API
- Custom or proprietary authentication schemes not reviewed by the Application Security team

### 3.3 Token Management Requirements

*Specify token lifecycle management requirements including issuance, storage, transmission, and revocation.*

- [ ] Access tokens must have a maximum lifetime of **[60] minutes** for user-delegated flows
- [ ] Refresh tokens must be stored encrypted at rest and must implement rotation on each use
- [ ] Token revocation endpoints must be implemented and tested for all OAuth 2.0 authorization servers
- [ ] API keys must be stored as salted hashes; plaintext API keys must never be persisted in databases, logs, or configuration files
- [ ] All tokens and API keys must be transmitted exclusively over TLS 1.2 or above
- [ ] Token and API key compromise response procedure: [Reference Incident Response Procedure — Doc ID]

### 3.4 Identity Federation and Single Sign-On

*Complete this section where APIs participate in federated identity arrangements or SSO integrations.*

| Integration | Identity Provider | Protocol | Notes |
|---|---|---|---|
| [Integration Name] | [IdP Name] | [SAML 2.0 / OIDC] | [Any specific notes] |
| [Integration Name] | [IdP Name] | [Protocol] | [Notes] |

---

## 4. Rate Limiting and Throttling

### 4.1 Overview

*This section establishes mandatory rate limiting and throttling controls to protect APIs from abuse, denial-of-service attacks, and resource exhaustion. Authors should define specific thresholds for each API or API tier.*

All production APIs must implement rate limiting at the API gateway layer. Rate limiting policies must be reviewed as part of the semi-annual review cycle and adjusted to reflect current traffic baselines and threat intelligence.

### 4.2 Rate Limiting Requirements

- Rate limiting must be enforced for **all** authenticated and unauthenticated API endpoints
- Rate limit thresholds must be defined per client (by API key, OAuth client ID, or IP address), not only globally per endpoint
- Responses to rate-limited requests must return HTTP **429 Too Many Requests** with a `Retry-After` header
- Rate limit headers (`X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`) must be included in API responses to assist legitimate clients

### 4.3 Rate Limit Thresholds

*Complete the following table with approved rate limit thresholds for each API tier. Thresholds must be validated by the Application Security team and approved by the API owner.*

| API Tier / Endpoint Group | Client Type | Requests per Minute | Requests per Hour | Burst Allowance | Enforcement Point |
|---|---|---|---|---|---|
| Public APIs — Read operations | Unauthenticated | [e.g., 20] | [e.g., 500] | [e.g., 30 for 10s] | API Gateway |
| Public APIs — Write/mutation operations | Authenticated user | [e.g., 10] | [e.g., 100] | [e.g., 15 for 10s] | API Gateway |
| Partner APIs | OAuth 2.0 client | [e.g., 100] | [e.g., 5,000] | [e.g., 150 for 10s] | API Gateway |
| Internal M2M APIs | mTLS client | [e.g., 500] | [e.g., 20,000] | [e.g., 750 for 10s] | Service mesh / API Gateway |
| Authentication endpoints | All | [e.g., 5] | [e.g., 50] | None | API Gateway |

### 4.4 Throttling and Quota Management

- Separate rate limits must be applied to authentication endpoints to mitigate credential-stuffing attacks
- Quota allocation for partner API consumers must be documented in the API consumer onboarding record (see Section 7)
- Alerts must be configured to notify the [Security Operations / Application Security] team when a consumer exceeds **[80]%** of their allocated quota within a billing or monitoring period
- Progressive throttling (e.g., increasing response delay before hard blocking) may be implemented as a supplementary control but does not replace hard rate limits

### 4.5 Distributed Rate Limiting

Where [Organization Name] operates multiple API gateway instances or a distributed deployment:

- Rate limit state must be synchronized across all gateway instances using a shared data store (e.g., Redis cluster)
- Rate limit bypass via direct backend access must be prevented through network-layer controls
- [Document the specific technology used and its configuration reference here]

---

## 5. Input Validation

### 5.1 Overview

*This section defines requirements for validating all input received by APIs to prevent injection attacks, data corruption, and unexpected application behavior. Authors should reference the OWASP API Security Top 10 (API3, API8) and the organization's SSDLC Standard.*

All data received by an API endpoint — regardless of source — must be treated as untrusted and validated before processing. This applies to request parameters, headers, request bodies, and file uploads.

### 5.2 Input Validation Requirements

**Schema Validation**

- All APIs must be defined using a machine-readable API specification (OpenAPI Specification 3.x is the approved standard)
- Request and response payloads must be validated against the published API schema at runtime
- Requests that do not conform to the defined schema must be rejected with HTTP **400 Bad Request**; no partial processing of non-conforming requests is permitted

**Data Type and Format Validation**

- [ ] All input fields must be validated for expected data type (string, integer, boolean, etc.)
- [ ] String fields must enforce maximum length limits appropriate to the business function
- [ ] Date and time fields must conform to ISO 8601 format
- [ ] Numeric fields must be validated for acceptable range (min/max)
- [ ] Email addresses, URLs, UUIDs, and other structured string formats must be validated against their respective format specifications

**Injection Prevention**

- [ ] All string input must be validated or sanitized before use in database queries, OS commands, XML parsers, or LDAP queries
- [ ] Parameterized queries or prepared statements must be used for all database interactions invoked by API handlers
- [ ] XML input must be processed with external entity (XXE) processing disabled
- [ ] JSON input must be parsed with a size limit enforced to prevent JSON deserialization attacks
- [ ] API endpoints must not execute dynamically constructed OS commands derived from user input

**File Upload Controls** *(where applicable)*

| Control | Requirement |
|---|---|
| Allowed file types | [Define allowlist — e.g., PDF, PNG, JPEG only] |
| Maximum file size | [e.g., 10 MB per file] |
| File content validation | Magic byte / MIME type verification required; filename alone is insufficient |
| Storage location | Uploaded files must not be stored in a web-accessible directory |
| Malware scanning | All uploaded files must be scanned prior to processing or storage |

### 5.3 Output Encoding

- API responses must not reflect unsanitized user input in a manner that could facilitate Cross-Site Scripting (XSS) or injection attacks in consuming applications
- Responses must include appropriate `Content-Type` headers to prevent MIME-type sniffing
- Sensitive data (e.g., full card numbers, passwords, tokens) must never be returned in API responses; masked or tokenized representations must be used

---

## 6. API Gateway Requirements

### 6.1 Overview

*This section defines the mandatory architecture and configuration requirements for API gateways used to manage, secure, and route API traffic. Authors should document the specific API gateway products in use and map each requirement to the product's configuration.*

All APIs within scope must be exposed through an approved API gateway. Direct backend access that bypasses the API gateway is prohibited for production NCII systems.

### 6.2 Approved API Gateway Products

| Gateway Product | Version | Deployment Context | Owner | Notes |
|---|---|---|---|---|
| [Gateway Product Name] | [Version] | [e.g., Production public APIs] | [Team] | [e.g., Primary gateway] |
| [Gateway Product Name] | [Version] | [e.g., Internal M2M] | [Team] | |

### 6.3 Mandatory Gateway Controls

The following controls must be implemented and configured on all approved API gateways:

**Authentication and Authorization Enforcement**

- [ ] Authentication must be enforced at the gateway layer for all non-public endpoints; backend services must not re-implement authentication independently
- [ ] OAuth 2.0 token introspection or JWT signature validation must be performed at the gateway
- [ ] Role-based or scope-based authorization policies must be enforced at the gateway where technically feasible

**Transport Security**

- [ ] All external-facing API traffic must be served exclusively over TLS 1.2 or TLS 1.3
- [ ] TLS 1.0 and TLS 1.1 must be disabled
- [ ] HTTP-only (unencrypted) connections to external or partner APIs must be rejected; HTTP-to-HTTPS redirect is not a substitute for enforcement
- [ ] Approved cipher suites: [List approved cipher suites per organization standard or reference TLS configuration standard]
- [ ] HSTS (HTTP Strict Transport Security) header with a minimum `max-age` of **31536000** must be returned for all HTTPS responses

**Request and Response Inspection**

- [ ] Gateway must enforce maximum request body size limits (default: [e.g., 1 MB]; configurable per endpoint where justified)
- [ ] Gateway must strip or reject requests containing suspicious or disallowed headers
- [ ] Sensitive data in response headers (e.g., `Server`, `X-Powered-By`) must be removed or obfuscated

**Logging and Monitoring**

- [ ] All API requests and responses (metadata, not necessarily payload) must be logged at the gateway layer
- [ ] Logs must include: timestamp, client IP, API endpoint, HTTP method, response code, latency, and client identifier (API key ID or OAuth client ID)
- [ ] Logs must be forwarded to the [Organization Name] SIEM / centralized logging platform within [e.g., 5 minutes] of event generation
- [ ] Request and response payloads containing sensitive data must not be logged in plaintext; payload logging must be subject to data masking controls

**Web Application Firewall (WAF) Integration**

- [ ] A WAF must be deployed in front of or integrated with the API gateway for all public-facing and partner-facing APIs
- [ ] WAF rulesets must include OWASP Core Rule Set (CRS) or equivalent coverage for API-specific attacks
- [ ] WAF must be maintained in blocking mode for production environments; detection-only mode requires documented exception approval

### 6.4 Gateway High Availability and Resilience

*Complete this section with the availability and resilience configuration for each gateway deployment.*

| Requirement | Target | Current Configuration |
|---|---|---|
| Availability SLA | [e.g., 99.95%] | [To be completed] |
| Redundancy model | [e.g., Active-active, multi-AZ] | [To be completed] |
| Failover RTO | [e.g., < 30 seconds] | [To be completed] |
| Capacity review frequency | [e.g., Quarterly] | [To be completed] |

---

## 7. API Inventory and Documentation

### 7.1 Overview

*This section establishes requirements for maintaining a comprehensive, accurate, and up-to-date inventory of all APIs within scope. An accurate API inventory is a prerequisite for effective security management, vulnerability management, and regulatory reporting. Authors should describe how the inventory is maintained, where it is stored, and who is responsible for its accuracy.*

[Organization Name] must maintain a complete API inventory for all APIs associated with NCII-designated systems. The API inventory is a security-critical asset and must be treated as Confidential in accordance with the [Organization Name] Data Classification Policy.

### 7.2 API Inventory Requirements

The API inventory must capture, at minimum, the following attributes for each registered API:

| Field | Description | Example |
|---|---|---|
| API ID | Unique identifier | API-0042 |
| API Name | Human-readable name | Customer Profile API |
| API Version | Semantic version | v2.1.0 |
| Owner | Business and technical owner | [Team / Individual] |
| Classification | Data sensitivity classification | Confidential |
| Exposure Type | Public / Partner / Internal | Partner |
| Authentication Method | As per Section 3 | OAuth 2.0 Client Credentials |
| Endpoint Base URL | Base path (non-production: masked) | /api/v2/customers |
| Backend System | System of record or backend service | [System Name] |
| Data Processed | Categories of data handled | PII, Account Data |
| Dependencies | Upstream/downstream systems | [System list] |
| API Specification Location | Link to OAS document | [Link / repository path] |
| Status | Active / Deprecated / Decommissioned | Active |
| Last Security Review Date | Date of most recent security review | [Date] |
| Regulatory Classification | NCII-related / Non-NCII | NCII |

**Current API Inventory Location:** [Link to API inventory register — e.g., internal wiki, API management portal, CMDB]

### 7.3 API Documentation Requirements

All active APIs must be documented using the **OpenAPI Specification (OAS) 3.x** format and must include:

- [ ] Complete endpoint definitions including paths, HTTP methods, and operation descriptions
- [ ] Request and response schema definitions, including all field-level data types and constraints
- [ ] Authentication and authorization requirements for each endpoint
- [ ] Rate limit information (reference Section 4)
- [ ] Error response codes and their meanings
- [ ] Changelog documenting breaking and non-breaking changes between versions
- [ ] Contact information for the API owner and support channel

API specifications for public and partner APIs must be published to [Organization Name]'s API developer portal. Internal API specifications must be stored in the approved internal documentation repository.

### 7.4 API Lifecycle Management

*Define the stages of the API lifecycle and the security requirements at each stage.*

| Lifecycle Stage | Security Gate / Requirement | Responsible Party |
|---|---|---|
| Design | Threat modelling completed; authentication and authorization design reviewed by Application Security | Developer, Application Security |
| Development | SSDLC controls applied; static application security testing (SAST) completed | Developer |
| Pre-production | Dynamic API security testing completed (see Section 8); API inventory entry created | Developer, AppSec |
| Production deployment | API gateway configuration reviewed; WAF rules validated | Application Security, Infrastructure |
| Change management | Security impact assessment for breaking changes; re-testing if scope changes | Developer, Application Security |
| Deprecation | API sunset notice issued; consumers migrated; monitoring continued during deprecation period | API Owner |
| Decommission | API removed from gateway; inventory status updated; credentials revoked | API Owner, Infrastructure |

### 7.5 Consumer Onboarding

*Document the process for onboarding API consumers, particularly for external or partner-facing APIs.*

All API consumers must complete the following onboarding steps before being granted production API access:

1. Submit API consumer registration request via [Registration Channel]
2. Complete API consumer agreement / terms of use acknowledgement
3. Undergo identity verification (for external/partner consumers: [Describe KYC/verification process])
4. Receive allocated credentials with defined scope and rate limits (see Section 4.3)
5. Complete API integration security review (mandatory for partner-facing and NCII-related APIs)

---

## 8. API Security Testing

### 8.1 Overview

*This section defines the minimum security testing requirements for APIs within scope. Security testing must be integrated into the development lifecycle (shift-left) and must also be conducted periodically in production-equivalent environments. Authors should specify the tools, frequency, and acceptance criteria for each test type.*

All APIs associated with NCII-designated systems must undergo security testing prior to production deployment and on a periodic basis thereafter. Security testing results must be tracked to remediation and retained as evidence for regulatory audit purposes.

### 8.2 Security Testing Types and Requirements

#### 8.2.1 Static Application Security Testing (SAST)

- SAST must be integrated into the CI/CD pipeline and must execute automatically on each code commit or pull request
- Critical and High severity findings must block the pipeline and must be remediated or formally accepted before deployment
- Approved SAST tooling: [List approved tools — e.g., SonarQube, Semgrep]

#### 8.2.2 Dynamic Application Security Testing (DAST)

- DAST must be conducted against all new APIs and all APIs that have undergone significant change before promotion to production
- DAST must be conducted against a production-equivalent environment (not production)
- DAST scope must cover the OWASP API Security Top 10 vulnerability categories
- Approved DAST tooling: [List approved tools — e.g., OWASP ZAP, Burp Suite Enterprise]

#### 8.2.3 Periodic Penetration Testing

*Define the penetration testing schedule and requirements for APIs associated with NCII systems.*

| API Tier | Penetration Test Frequency | Scope | Provider |
|---|---|---|---|
| Public-facing APIs (NCII) | Annually (minimum) | Full API scope including authentication, authorization, business logic | [Internal team / Approved external provider] |
| Partner-facing APIs (NCII) | Annually (minimum) | Full API scope | [Provider] |
| High-risk internal APIs | [Frequency] | [Scope] | [Provider] |
| All other APIs | Biennial or upon significant change | [Scope] | [Provider] |

Penetration testing must specifically address:

- [ ] Authentication bypass and token vulnerabilities (OWASP API2, API3)
- [ ] Broken object-level and function-level authorization (OWASP API1, API5)
- [ ] Mass assignment and improper inventory management (OWASP API6, API9)
- [ ] Business logic abuse
- [ ] Injection vulnerabilities (SQL, NoSQL, command, LDAP)
- [ ] Rate limiting bypass techniques

#### 8.2.4 API-Specific Vulnerability Scanning

- Automated API-specific security scanning must be conducted at minimum **[monthly]** for all production APIs associated with NCII systems
- Scanning must include checks for exposed debug endpoints, unauthenticated API paths, and deprecated or shadow APIs
- Shadow API discovery scans must be conducted at minimum **quarterly**

### 8.3 Remediation Requirements

*Define the required remediation timelines for security findings.*

| Severity | Definition | Remediation SLA |
|---|---|---|
| Critical | Exploitable with significant impact; e.g., unauthenticated data access, authentication bypass | **[5] business days** |
| High | Exploitable with moderate-to-high impact; e.g., broken object authorization, injection | **[15] business days** |
| Medium | Exploitable under specific conditions; e.g., information disclosure, weak rate limiting | **[30] business days** |
| Low / Informational | Limited exploitability or impact; e.g., missing security headers | **[90] business days** |

Findings that cannot be remediated within the required SLA must be escalated to the [CISO / Head of Application Security] and a formal risk acceptance or compensating control documented before the deadline expires.

### 8.4 Security Testing Evidence Retention

All security testing reports, findings registers, and remediation evidence must be retained for a minimum of **[3] years** in accordance with the [Organization Name] Records Retention Policy. Retention records are subject to inspection during NACSA audits and regulatory examinations.

---

## 9. Roles and Responsibilities

### 9.1 RACI Matrix

*The following RACI matrix assigns accountability and responsibility for the key activities defined in this Standard. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | Application Security | Development Teams | Infrastructure / Cloud | CISO | Risk & Compliance | API Owner | Security Operations |
|---|---|---|---|---|---|---|---|
| Define and maintain this Standard | A/R | C | C | A | C | I | I |
| API threat modelling and design review | A/R | R | C | I | I | C | I |
| API inventory maintenance | C | R | C | I | I | A/R | I |
| API gateway configuration and management | C | I | A/R | I | I | C | C |
| SAST integration and tooling | A/R | R | C | I | I | I | I |
| DAST execution and reporting | A/R | R | I | I | I | A | I |
| Penetration testing commissioning | A | I | I | R | C | C | I |
| Remediation tracking and closure | C | R | R | I | C | A | I |
| Rate limit policy definition | A/R | C | C | I | I | R | C |
| Security incident response (API-related) | R | C | C | A | I | C | R |
| NACSA incident reporting (s24) | C | I | I | A/R | R | C | C |
| Third-party API risk assessment | A/R | C | I | I | R | R | I |
| Semi-annual Standard review | A/R | C | C | A | R | C | I |

### 9.2 Key Roles Defined

| Role | Responsibilities under this Standard |
|---|---|
| **Application Security Team** | Owns this Standard; provides design review, DAST tooling, penetration test coordination, and security advisory services to development teams |
| **API Owner** | Accountable for the security posture of their API(s); ensures API inventory is accurate; coordinates security testing; approves risk acceptances |
| **Development Teams** | Implements security controls during development; remediates findings within defined SLAs; maintains API documentation |
| **Infrastructure / Cloud Team** | Manages API gateway infrastructure; implements network-layer controls; manages TLS certificates |
| **CISO** | Approves this Standard; escalation authority for risk acceptances and critical security issues; accountable for NACSA reporting obligations |
| **Risk & Compliance** | Monitors compliance with this Standard; conducts periodic compliance reviews; coordinates regulatory engagement |
| **Security Operations Centre (SOC)** | Monitors API-related security events via SIEM; escalates incidents per Incident Response Procedure |

---

## 10. Non-Compliance and Exceptions

### 10.1 Non-Compliance

Non-compliance with this Standard must be reported to the Application Security team and documented in the [Organization Name] risk register. Non-compliant APIs must not be promoted to production unless a formal exception has been granted in accordance with Section 10.2.

Repeated or unmitigated non-compliance will be escalated to the CISO and may be reported to the [Risk Committee / Board Risk Committee] as a material risk item.

### 10.2 Exception Process

*Describe how teams may request a formal exception to a requirement in this Standard.*

Requests for exceptions to this Standard must:

1. Be submitted to the Application Security team using the [Exception Request Form — reference or link]
2. Include a business justification for the exception
3. Document the risk introduced by the exception
4. Propose compensating controls that mitigate the identified risk
5. Define an expiry date (maximum **[12] months**; exceptions must be renewed)

Exceptions must be reviewed and approved by the [Application Security Lead / CISO]. Approved exceptions must be recorded in the API inventory and the risk register.

| Field | Detail |
|---|---|
| Exception request form location | [Link / System reference] |
| Maximum exception duration | 12 months |
| Approval authority | [Application Security Lead / CISO] |
| Exception register location | [Link / System reference] |

---

## 11. Review and Approval

### 11.1 Review Schedule

This Standard must be reviewed on a **semi-annual** basis (every six months) or upon the occurrence of any of the following trigger events, whichever comes sooner:

- Significant change to NACSA regulatory requirements or issuance of new NACSA guidelines
- A material API-related security incident affecting [Organization Name] or a peer institution
- Significant change to [Organization Name]'s API architecture or technology stack
- Findings from internal audit, penetration testing, or regulatory examination that require this Standard to be updated

### 11.2 Version History

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name] | Initial version |
| | | | |
| | | | |

### 11.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Application Security Lead | [Name] | | [Date] |
| Chief Information Security Officer | [Name] | | [Date] |
| Chief Information Officer / CTO | [Name] | | [Date] |
| Head of Risk & Compliance | [Name] | | [Date] |

---

## 12. References

### 12.1 Regulatory References

| Reference | Title | Relevance to this Standard |
|---|---|---|
| Act 854, s18 | Cyber Security Act 2024 — Duty to implement cyber security measures | Provides the primary obligation for NCII entities to implement technical security controls, of which this Standard forms part |
| Act 854, s24 | Cyber Security Act 2024 — Duty to report cyber security incidents | API-related breaches and unauthorized access events constitute cyber security incidents reportable to NACSA under this section |
| Act 709, s9 | Personal Data Protection Act 2010 — Security Principle | Requires that personal data transmitted or processed via APIs be protected against unauthorized access, loss, or misuse |

### 12.2 Standards and Frameworks Referenced

| Reference | Title | Version / Edition |
|---|---|---|
| OWASP API Security Top 10 | OWASP API Security Top 10 | [Current edition year] |
| RFC 6749 | The OAuth 2.0 Authorization Framework | — |
| RFC 7519 | JSON Web Token (JWT) | — |
| NIST SP 800-204 | Security Strategies for Microservices-based Application Systems | — |
| ISO/IEC 27001 | Information Security Management Systems | 2022 |
| OpenAPI Specification | OpenAPI Specification | 3.x |

### 12.3 Internal Documents Referenced

| Document Title | Document ID |
|---|---|
| Information Security Policy | [Doc ID] |
| Secure Software Development Lifecycle (SSDLC) Standard | [Doc ID] |
| Data Classification Policy | [Doc ID] |
| Vulnerability Management Standard | [Doc ID] |
| Incident Response Procedure | [Doc ID] |
| Third-Party Risk Management Policy | [Doc ID] |
| Records Retention Policy | [Doc ID] |
| Risk Acceptance Procedure | [Doc ID] |

---

## 13. Appendices

### Appendix A — OWASP API Security Top 10 Mapping

*This appendix maps the controls defined in this Standard to the OWASP API Security Top 10 categories. Authors should verify alignment against the current edition of the OWASP API Security Top 10 at time of review.*

| OWASP API Security Risk | Description | Mitigating Controls in this Standard |
|---|---|---|
| API1 — Broken Object Level Authorization | Attackers manipulate object IDs to access unauthorized records | Section 3 (Authentication), Section 6 (Gateway authorization enforcement) |
| API2 — Broken Authentication | Weak or missing authentication mechanisms | Section 3 (Authentication requirements) |
| API3 — Broken Object Property Level Authorization | Excessive data exposure or mass assignment | Section 5 (Input Validation — mass assignment), Section 5.3 (Output encoding) |
| API4 — Unrestricted Resource Consumption | Lack of rate limiting enabling DoS or abuse | Section 4 (Rate Limiting and Throttling) |
| API5 — Broken Function Level Authorization | Horizontal/vertical privilege escalation via API functions | Section 3, Section 6 (Gateway authorization) |
| API6 — Unrestricted Access to Sensitive Business Flows | Automated abuse of business logic | Section 4, Section 8 (Security Testing — business logic) |
| API7 — Server Side Request Forgery (SSRF) | API used to induce server-side requests to internal resources | Section 5 (Input Validation), Section 8 (Penetration testing scope) |
| API8 — Security Misconfiguration | Missing security hardening, verbose error messages | Section 6 (Gateway configuration), Section 8 (DAST, scanning) |
| API9 — Improper Inventory Management | Undocumented or shadow APIs exposed | Section 7 (API Inventory), Section 8 (Shadow API discovery) |
| API10 — Unsafe Consumption of APIs | Insufficient validation of third-party API responses | Section 5 (Input validation applied to consumed APIs) |

### Appendix B — API Consumer Registration Form Template

*This appendix provides a template for collecting required information when onboarding a new API consumer. The completed form must be retained as part of the API consumer record.*

**API Consumer Registration Request**

| Field | Value |
|---|---|
| Organization / Team Name | [Consumer organization or team] |
| Contact Name | |
| Contact Email | |
| API(s) Requested | [API Name(s) and version(s)] |
| Intended Use | [Description of integration purpose] |
| Data Categories to be Accessed | [e.g., Customer PII, Transaction Data] |
| Expected Request Volume (per day) | [Estimated volume] |
| Environment Required | Production / UAT / Both |
| IP Allowlist (if applicable) | [IP ranges to be whitelisted] |
| Terms of Use Acknowledged | Yes / No |
| Security Review Required | Yes / No (determined by Application Security) |
| Request Date | |
| Approved By | |
| Approval Date | |
| Credentials Issued | API Key ID / OAuth Client ID: |
| Rate Limit Allocated | [Requests per minute / hour] |

### Appendix C — API Security Incident Classification Guide

*This appendix provides guidance for classifying API-related security incidents to support consistent incident response and NACSA reporting obligations under Act 854, s24.*

| Incident Type | Description | Initial Severity | NACSA Reportable (s24) |
|---|---|---|---|
| Unauthorized API access | Successful authentication bypass or exploitation of broken authorization | Critical | Yes — assess against NACSA reporting thresholds |
| API credential compromise | API key or OAuth token confirmed stolen or misused | Critical | Yes — assess |
| Mass data exfiltration via API | Bulk extraction of customer or sensitive data via API | Critical | Yes — mandatory |
| Rate limit bypass / DoS | API rendered unavailable or degraded due to request flooding | High | Assess — if NCII service disruption |
| Injection attack (API) | SQL, command, or other injection via API parameter | High | Assess |
| Sensitive data in API logs | PII or credentials discovered in API logs in plaintext | Medium | Assess — PDPA s12 notification may apply |
| Shadow / undocumented API discovered | Active API endpoint found with no inventory record | Medium | No — internal remediation |
| Expired certificate causing API outage | TLS certificate expiry causing service disruption | Medium | Assess — if NCII service disruption |

*For NACSA incident reporting timelines and thresholds, refer to the [Organization Name] Incident Response Procedure — [Doc ID] and Act 854, s24.*

### Appendix D — Semi-Annual Review Checklist

*Use this checklist to guide the semi-annual review of this Standard.*

- [ ] Review NACSA guidance and any new regulatory issuances for changes relevant to API security
- [ ] Review API inventory for completeness; confirm all active APIs are registered
- [ ] Confirm all APIs have a valid, in-date security test result (DAST / penetration test)
- [ ] Review open security findings; confirm remediation SLA compliance
- [ ] Review rate limit thresholds against current traffic baselines; adjust where warranted
- [ ] Review and update approved authentication methods and prohibited methods list
- [ ] Review API consumer register; confirm all active consumers are still authorized
- [ ] Review exception register; confirm all exceptions are within their approved term
- [ ] Review API gateway configurations for any drift from the approved baseline
- [ ] Update OWASP API Security Top 10 mapping (Appendix A) if a new edition has been published
- [ ] Review and update version history (Section 11.2) and obtain updated sign-off (Section 11.3)

---

*End of Document*

---

*Document ID: [Document ID] | Version: 1.0 | Classification: Confidential | Owner: Application Security | [Organization Name]*