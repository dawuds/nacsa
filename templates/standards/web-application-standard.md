# Web Application Security Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Application Security |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date — Semi-annual] |
| **Approved By** | [Approved By] |
| **Organization** | [Organization Name] |

---

> **Document Control Notice:** This document is classified **Confidential** and is intended solely for authorized personnel of [Organization Name]. Unauthorized disclosure, reproduction, or distribution is strictly prohibited. This standard is issued pursuant to obligations under the **Cyber Security Act 2024 (Act 854)** and supports the security posture of [Organization Name] as a National Critical Information Infrastructure (NCII) entity.

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory and Policy Context](#2-regulatory-and-policy-context)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [OWASP ASVS Compliance Level Requirements](#4-owasp-asvs-compliance-level-requirements)
5. [Web Application Firewall (WAF) Requirements](#5-web-application-firewall-waf-requirements)
6. [Content Security Policy (CSP)](#6-content-security-policy-csp)
7. [Session Management Controls](#7-session-management-controls)
8. [HTTP Security Headers](#8-http-security-headers)
9. [Secure Cookie Configuration](#9-secure-cookie-configuration)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Compliance and Exceptions](#11-compliance-and-exceptions)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

*This section defines the intent of the standard. Authors should articulate why this standard exists, what problem it solves, and how it protects the organization.*

This Web Application Security Standard establishes the minimum-security requirements that [Organization Name] shall apply to all web applications operating within or interfacing with its National Critical Information Infrastructure (NCII) environment. The standard ensures that web-facing systems are designed, developed, deployed, and maintained in a manner that reduces exposure to known web application vulnerabilities and meets the obligations prescribed under the **Cyber Security Act 2024 (Act 854), Section 18**.

This standard supports [Organization Name]'s commitment to protecting the confidentiality, integrity, and availability of information assets and the services dependent upon web application infrastructure.

### 1.2 Scope

*Authors should list all systems, environments, and teams this standard applies to. Be specific about what is in and out of scope.*

This standard applies to:

- All web applications (internal and external-facing) owned, operated, or contracted by [Organization Name]
- Web application programming interfaces (APIs) that serve or are consumed by web clients
- Third-party web applications hosted on [Organization Name] infrastructure or accessing [Organization Name] data
- Development, staging, user acceptance testing (UAT), and production environments
- All personnel involved in the design, development, deployment, operation, or maintenance of web applications, including employees, contractors, and third-party service providers

**Out of Scope:**

- Native mobile applications not delivered through a web browser runtime (refer to [Mobile Application Security Standard — Document ID TBC])
- Internal administrative tools that are network-isolated and accessible only via privileged workstations subject to separate access controls
- Thick-client desktop applications with no web-based delivery mechanism

### 1.3 Objectives

*List the specific security objectives this standard is designed to achieve.*

This standard is designed to:

- Establish a structured baseline aligned with internationally recognised best practices (OWASP ASVS)
- Mandate controls that mitigate the OWASP Top 10 web application risk categories
- Define consistent configuration requirements for WAF, CSP, session management, HTTP headers, and cookies
- Support NCII sector compliance reporting to the National Cyber Security Agency (NACSA)
- Enable repeatable, auditable security assurance across the web application portfolio

---

## 2. Regulatory and Policy Context

### 2.1 Regulatory Basis

*This section must reference the specific legislation and regulatory instruments that mandate or underpin this standard. Authors should verify clause numbers against the current version of each instrument before finalising.*

This standard is issued in accordance with the following regulatory instruments:

| Instrument | Provision | Relevance |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Obligation on NCII entities to comply with cybersecurity standards issued by NACSA; duty to implement appropriate security measures for NCII systems |
| Cyber Security Act 2024 (Act 854) | Section 25 | Incident reporting obligations for NCII entities; web application breaches may constitute reportable incidents |
| NACSA NCII Sector Security Plan Guidelines | [Applicable Version] | Sector-specific cybersecurity plan requirements for NCII entities |
| Personal Data Protection Act 2010 (Act 709) | Section 9 (Security Principle) | Obligation to take practical steps to protect personal data processed through web applications |
| Bank Negara Malaysia (BNM) Risk Management in Technology (RMiT) Policy | Section [Applicable] | Where applicable to financial sector NCII entities |

### 2.2 Internal Policy Hierarchy

*This section places the standard within the organisation's internal policy framework. Authors should ensure the hierarchy reflects the actual document governance structure in place.*

This standard operates within [Organization Name]'s internal cybersecurity governance framework as follows:

```
[Organization Name] Information Security Policy (Tier 1)
    └── Cyber Security Framework (Tier 2)
            └── Web Application Security Standard [This Document] (Tier 3)
                    └── Web Application Security Procedures & Guidelines (Tier 4)
```

This standard is subordinate to the [Organization Name] **Information Security Policy** ([Policy Document ID]) and the **Cyber Security Framework** ([Framework Document ID]). In the event of conflict, the higher-tier document shall prevail unless a formal exception has been approved.

### 2.3 Related Standards and Policies

*List all internal documents that intersect with or are directly related to this standard.*

| Document Title | Document ID | Relationship |
|---|---|---|
| Information Security Policy | [Document ID] | Parent policy |
| Secure Software Development Lifecycle (SSDLC) Standard | [Document ID] | Governs development practices that produce web applications subject to this standard |
| Vulnerability Management Standard | [Document ID] | Defines scanning cadence and remediation SLAs for web application vulnerabilities |
| Penetration Testing Standard | [Document ID] | Mandates web application penetration testing requirements |
| Identity and Access Management Standard | [Document ID] | Authentication and authorisation controls that intersect with session management |
| Data Classification and Handling Standard | [Document ID] | Governs how data processed by web applications must be classified and protected |
| Third-Party Security Management Standard | [Document ID] | Applies to third-party web applications within scope |
| Incident Response Plan | [Document ID] | Response procedures applicable to web application security incidents |

---

## 3. Definitions and Abbreviations

### 3.1 Definitions

*Authors should tailor definitions to reflect terminology used within the organisation. Ensure alignment with definitions used in parent policies.*

| Term | Definition |
|---|---|
| **Web Application** | A software application delivered to users via a web browser over a network, including customer portals, staff intranets, and API-backed services with web clients |
| **NCII** | National Critical Information Infrastructure — information infrastructure whose disruption or destruction would have a debilitating impact on national security, the economy, public health, or safety |
| **NCII Entity** | An organisation designated by the Minister as owning, operating, or maintaining NCII under the Cyber Security Act 2024 |
| **ASVS** | Application Security Verification Standard — the OWASP framework defining functional and non-functional security requirements for web applications |
| **WAF** | Web Application Firewall — a security control that monitors, filters, and blocks HTTP/HTTPS traffic to and from a web application |
| **CSP** | Content Security Policy — an HTTP response header mechanism that restricts the sources from which browser resources may be loaded |
| **Session Token** | A cryptographic value issued by a web application server to identify and authenticate a user's active session |
| **Secure Cookie** | An HTTP cookie configured with security attributes (Secure, HttpOnly, SameSite) to limit exposure to theft or misuse |
| **HTTP Security Header** | An HTTP response header that instructs the browser to enforce a specific security behaviour |
| **Threat Actor** | An individual or group that intends to conduct or conducts malicious activity against an information system |
| **OWASP** | Open Web Application Security Project — a nonprofit foundation that produces freely available tools, documentation, and standards related to web application security |
| **Remediation SLA** | The maximum permitted elapsed time between vulnerability identification and confirmed remediation, categorised by severity |

### 3.2 Abbreviations

| Abbreviation | Expansion |
|---|---|
| ACT 854 | Cyber Security Act 2024 |
| API | Application Programming Interface |
| ASVS | Application Security Verification Standard |
| BNM | Bank Negara Malaysia |
| CSP | Content Security Policy |
| CORS | Cross-Origin Resource Sharing |
| CSRF | Cross-Site Request Forgery |
| DDoS | Distributed Denial of Service |
| DMARC | Domain-based Message Authentication, Reporting and Conformance |
| HSTS | HTTP Strict Transport Security |
| HTML | Hypertext Markup Language |
| HTTP/HTTPS | Hypertext Transfer Protocol / Secure |
| IAM | Identity and Access Management |
| MFA | Multi-Factor Authentication |
| NACSA | National Cyber Security Agency |
| NCII | National Critical Information Infrastructure |
| OWASP | Open Web Application Security Project |
| PDPA | Personal Data Protection Act 2010 |
| RMiT | Risk Management in Technology |
| SSDLC | Secure Software Development Lifecycle |
| TLS | Transport Layer Security |
| WAF | Web Application Firewall |
| XSS | Cross-Site Scripting |
| XXE | XML External Entity |

---

## 4. OWASP ASVS Compliance Level Requirements

### 4.1 Overview of ASVS Levels

*This section mandates the OWASP ASVS compliance tier applicable to each category of web application in the organisation's portfolio. Authors should map applications to the correct tier based on data sensitivity and criticality.*

[Organization Name] adopts the **OWASP Application Security Verification Standard (ASVS)** as the primary benchmark for web application security requirements. ASVS defines three verification levels of increasing rigour:

| ASVS Level | Description | Suitable For |
|---|---|---|
| **Level 1** | Opportunistic — protection against low-effort, high-volume attacks | Low-risk internal tools with no personal or sensitive data |
| **Level 2** | Standard — defence-in-depth against a sophisticated attacker | Most commercial applications, customer-facing portals, API services |
| **Level 3** | Advanced — highest assurance; resistance to nation-state and advanced persistent threats | Safety-critical systems, NCII-classified applications, high-value financial systems |

### 4.2 Mandated ASVS Level by Application Tier

*Authors should categorise existing applications into these tiers and document the assignments in the organisation's Application Security Register.*

| Application Tier | Classification Criteria | Mandatory ASVS Level |
|---|---|---|
| **Tier 1 — Critical** | Classified as NCII; processes financial transactions; contains personal data of >10,000 individuals; internet-facing with authentication | **Level 3** |
| **Tier 2 — High** | Customer-facing portals; internal applications with privileged access; applications handling confidential data | **Level 2** |
| **Tier 3 — Standard** | Internal tools without sensitive data access; static informational sites; low-traffic administrative tools | **Level 1** |

**Current application tier assignments are maintained in the [Application Security Register — Document ID TBC].**

### 4.3 ASVS Category Coverage Requirements

*Authors should confirm which ASVS chapters are applicable and whether any chapters are formally excluded with documented rationale.*

All in-scope web applications shall be assessed against the following ASVS chapters at the mandated level:

| ASVS Chapter | Chapter Title | Applicability |
|---|---|---|
| V1 | Architecture, Design and Threat Modelling | Mandatory — All Tiers |
| V2 | Authentication | Mandatory — All Tiers |
| V3 | Session Management | Mandatory — All Tiers |
| V4 | Access Control | Mandatory — All Tiers |
| V5 | Validation, Sanitization and Encoding | Mandatory — All Tiers |
| V6 | Stored Cryptography | Mandatory — Tier 1 & 2 |
| V7 | Error Handling and Logging | Mandatory — All Tiers |
| V8 | Data Protection | Mandatory — All Tiers |
| V9 | Communication | Mandatory — All Tiers |
| V10 | Malicious Code | Mandatory — Tier 1 & 2 |
| V11 | Business Logic | Mandatory — Tier 1 & 2 |
| V12 | Files and Resources | Mandatory — Tier 1 & 2 |
| V13 | API and Web Service | Mandatory — All Tiers (where APIs exist) |
| V14 | Configuration | Mandatory — All Tiers |

### 4.4 Verification and Evidence Requirements

*Authors should define how ASVS compliance is demonstrated and documented for audit purposes.*

- ASVS compliance assessments shall be conducted by qualified personnel (minimum [Certification — e.g., GWEB, CSSLP, CEH]) or accredited third-party assessors
- ASVS assessment reports shall be retained for a minimum of **[3] years**
- Assessment findings shall be tracked through the organisation's vulnerability management process with remediation SLAs defined in the **Vulnerability Management Standard ([Document ID])**
- New Tier 1 applications shall not be promoted to production without evidence of ASVS Level 3 assessment sign-off from the Application Security team
- ASVS assessments shall be repeated following **major releases**, **material architecture changes**, or as part of the **semi-annual review** cycle of this standard

---

## 5. Web Application Firewall (WAF) Requirements

### 5.1 Mandatory WAF Deployment

*This section mandates WAF coverage for web applications within scope. Authors should document the WAF technology in use and confirm alignment with these requirements in the network architecture documentation.*

A Web Application Firewall (WAF) shall be deployed in front of all Tier 1 and Tier 2 web applications exposed to external networks (internet or extranet). WAF deployment for Tier 3 applications is recommended and shall be assessed on a risk basis.

### 5.2 WAF Deployment Architecture Requirements

*Authors should specify the approved deployment models and confirm that the WAF placement does not create single points of failure or inspection gaps.*

| Requirement | Specification |
|---|---|
| **Deployment Mode** | Inline (blocking mode) for all Tier 1 applications; detection mode permitted during initial tuning phase not exceeding [30] days |
| **Placement** | WAF shall be positioned between the internet edge / load balancer and the web application origin servers |
| **High Availability** | WAF deployment shall be configured in a highly available, redundant topology with no single point of failure |
| **TLS Inspection** | WAF shall perform TLS termination and inspection; re-encryption to origin shall use TLS 1.2 or higher |
| **Log Retention** | WAF logs shall be forwarded to the SIEM and retained for a minimum of **[12] months** |
| **Vendor / Product** | [Approved WAF Vendor / Product — e.g., AWS WAF, F5 BIG-IP ASM, Cloudflare WAF, Fortinet FortiWeb] |

### 5.3 WAF Rule Set Requirements

*Authors should document the rule sets deployed, the OWASP Core Rule Set version in use, and the process for updating and tuning rules.*

The following rule categories shall be enabled and enforced in blocking mode:

- **OWASP Core Rule Set (CRS)** — minimum version [4.x]; all critical and high-severity rules enabled
- **SQL Injection (SQLi)** detection and blocking
- **Cross-Site Scripting (XSS)** detection and blocking
- **Remote File Inclusion (RFI)** and **Local File Inclusion (LFI)** blocking
- **Command Injection** detection and blocking
- **Protocol Enforcement** — reject malformed HTTP/HTTPS requests
- **HTTP Method Restriction** — allow only methods required by application function; deny OPTIONS/TRACE in production unless explicitly required
- **Request Rate Limiting** — configurable thresholds per IP, per session, and per endpoint to mitigate brute-force and scraping
- **Scanner Detection** — block known automated scanning tool signatures
- **IP Reputation** — block known malicious IP ranges via [Threat Intelligence Feed — e.g., MISP, commercial feed]

### 5.4 WAF Tuning and Change Management

*Authors should define the process for updating WAF rules to reduce false positives without weakening the security posture.*

| Activity | Frequency | Responsible Party |
|---|---|---|
| Rule set review and update | [Quarterly] or upon OWASP CRS new release | Application Security |
| False-positive review and exclusion approval | As required, with formal sign-off | Application Security Lead |
| WAF alert triage | Daily | Security Operations (SOC) |
| WAF effectiveness review | Semi-annual | Application Security |
| Penetration testing of WAF bypass | Annual | [Accredited Penetration Testing Vendor] |

All WAF rule exclusions shall be documented with:
- Justification for the exclusion
- Risk acceptance sign-off by [Application Security Lead / CISO]
- Expiry date for temporary exclusions (maximum [90] days)
- Review date for permanent exclusions

### 5.5 WAF Incident Response Integration

*Authors should document how WAF alerts are escalated and integrated with the incident response process.*

- WAF high-severity alerts shall be forwarded in real-time to the Security Information and Event Management (SIEM) system
- WAF events meeting [defined thresholds — document in SOC runbook] shall automatically generate incidents in the [Ticketing System — e.g., ServiceNow]
- Incident response procedures for web application attacks are defined in the **Incident Response Plan ([Document ID])**

---

## 6. Content Security Policy (CSP)

### 6.1 CSP Mandate

*This section defines the requirement to implement and maintain a Content Security Policy for all web applications. Authors should note that CSP implementation requires close collaboration between Application Security and development teams.*

A Content Security Policy (CSP) shall be implemented for all Tier 1 and Tier 2 web applications. CSP shall be delivered as an HTTP response header (`Content-Security-Policy`) and shall not rely solely on `<meta>` tag delivery, as this method does not cover all browser enforcement scenarios.

### 6.2 CSP Directive Requirements

*Authors should document the specific CSP directives mandated for each application tier. The table below provides minimum required directives; application teams may add further restrictions.*

The following directives shall be defined in all CSP implementations:

| Directive | Requirement | Notes |
|---|---|---|
| `default-src` | `'none'` or a minimally restrictive fallback | Explicitly set; do not rely on browser defaults |
| `script-src` | Restrict to approved origins; prohibit `'unsafe-inline'` and `'unsafe-eval'` | Use nonces or hashes where inline scripts are unavoidable |
| `style-src` | Restrict to approved origins; prohibit `'unsafe-inline'` | Use nonces where inline styles are required |
| `img-src` | Restrict to `'self'` and explicitly approved CDN origins | Avoid wildcard (`*`) |
| `font-src` | Restrict to `'self'` and explicitly approved font providers | [e.g., Google Fonts if used] |
| `connect-src` | Restrict to approved API origins and WebSocket endpoints | |
| `frame-ancestors` | `'none'` or `'self'` | Prevents clickjacking; reinforces X-Frame-Options |
| `form-action` | Restrict to `'self'` and explicitly approved targets | Prevents data exfiltration via form submissions |
| `base-uri` | `'self'` | Prevents base tag injection attacks |
| `object-src` | `'none'` | Disallow plugins (Flash, Java applets) |
| `upgrade-insecure-requests` | Present on all production deployments | Forces HTTP resources to HTTPS |

### 6.3 CSP Nonce and Hash Usage

*Authors should define the approved mechanism for handling legitimate inline scripts and styles without resorting to 'unsafe-inline'.*

Where inline scripts or styles are technically unavoidable:

- **Nonces** shall be generated server-side using a cryptographically secure random number generator, per-request, with a minimum entropy of **128 bits**
- Nonces shall not be reused across requests or sessions
- Where inline content is static and cannot be served externally, **hashes** (SHA-256 minimum) shall be used in preference to blanket `'unsafe-inline'`
- The use of `'unsafe-inline'` and `'unsafe-eval'` is **prohibited** without a documented exception approved by the Application Security Lead

### 6.4 CSP Reporting

*Authors should document the CSP reporting pipeline to enable detection of policy violations.*

| Requirement | Detail |
|---|---|
| **Report URI** | `report-uri` directive shall be configured to send violation reports to [CSP Reporting Endpoint — e.g., report-uri.com, internal SIEM endpoint] |
| **Report-Only Mode** | New or substantially changed CSPs shall initially deploy in `Content-Security-Policy-Report-Only` mode for a period of [14] days before enforcement |
| **Review Cadence** | CSP violation reports shall be reviewed [weekly] by the Application Security team |
| **Violation Thresholds** | Significant spikes in violation reports shall be treated as potential security incidents and escalated per the Incident Response Plan |

### 6.5 CSP Testing and Validation

*Authors should specify tools and methods approved for testing CSP effectiveness.*

- CSP shall be validated using [Approved Tool — e.g., Google CSP Evaluator, observatory.mozilla.org] before promotion to production
- CSP shall achieve a minimum grade of **[A / A+]** on [Mozilla Observatory or equivalent] for Tier 1 and Tier 2 applications
- CSP configuration shall be included in web application penetration test scope

---

## 7. Session Management Controls

### 7.1 Session Token Generation

*This section defines requirements for the creation of session identifiers. Authors should confirm that the web application framework's session management module meets these requirements or that custom implementations are validated.*

| Requirement | Specification |
|---|---|
| **Entropy** | Session tokens shall be generated using a cryptographically secure pseudo-random number generator (CSPRNG) with a minimum of **128 bits** of entropy |
| **Length** | Minimum token length of **32 characters** (hex) or **64 characters** (base64url) |
| **Unpredictability** | Sequential or predictable session identifiers are prohibited |
| **Framework-Managed** | Session tokens shall be generated by the application framework's built-in session management where possible; custom implementations require security review and Application Security sign-off |

### 7.2 Session Token Transmission

*Authors should ensure that session tokens are never transmitted over unencrypted channels.*

- Session tokens shall only be transmitted over **TLS 1.2 or higher** encrypted channels
- Session tokens shall **never** be included in URL query strings (GET parameters), as these are logged in server and proxy logs, browser history, and referrer headers
- Session tokens shall be transmitted via HTTP cookies with appropriate security attributes (see Section 9) or via secure, opaque HTTP Authorization headers for API contexts
- Session tokens shall not be stored in browser `localStorage` or `sessionStorage` for Tier 1 or Tier 2 applications, as these are accessible via JavaScript

### 7.3 Session Timeout Requirements

*Authors should apply timeout values appropriate to the application's risk classification. Stricter timeouts apply to higher-risk contexts.*

| Timeout Type | Tier 1 (Critical) | Tier 2 (High) | Tier 3 (Standard) |
|---|---|---|---|
| **Idle / Inactivity Timeout** | [15] minutes | [30] minutes | [60] minutes |
| **Absolute Session Timeout** | [8] hours | [12] hours | [24] hours |
| **Post-Authentication Timeout Warning** | [2] minutes before expiry | [5] minutes before expiry | [5] minutes before expiry |
| **Remember Me Maximum Duration** | Not permitted | [7] days (with MFA re-authentication) | [30] days |

### 7.4 Session Invalidation

*Authors should ensure that the application correctly invalidates sessions at all logout points and on security-relevant events.*

Sessions shall be **immediately and completely invalidated** (server-side) upon:

- User-initiated logout
- Password change or reset
- Account lock or suspension
- MFA device change or reset
- Privilege escalation or de-escalation events
- Idle or absolute timeout expiry
- Detection of a concurrent session limit violation (where applicable)
- Administrative forced logout

Invalidation shall occur **server-side** by removing or expiring the session from the session store; client-side cookie deletion alone is insufficient and shall not be relied upon.

### 7.5 Concurrent Session Management

*Authors should define the policy for concurrent sessions per application tier.*

| Tier | Concurrent Session Policy |
|---|---|
| **Tier 1** | Maximum **[1]** concurrent session per user identity; new login invalidates prior session with user notification |
| **Tier 2** | Maximum **[3]** concurrent sessions per user identity; configurable by application risk owner |
| **Tier 3** | No restriction; audit logging of concurrent sessions required |

### 7.6 Session Fixation Prevention

- Applications shall generate a **new session token** immediately following successful authentication, discarding the pre-authentication session identifier
- Session tokens presented before authentication shall not be elevated or reused post-authentication

### 7.7 Session Hijacking Detection

*Authors should define controls that detect anomalous session behaviour indicative of hijacking.*

Applications shall implement and log the following session anomaly checks:

- IP address change mid-session (alert and optionally re-authenticate)
- User-Agent string change mid-session (alert and optionally invalidate)
- Impossible travel detection (geographic IP change within implausible timeframe)
- High-frequency request rate per session token (possible token theft and automation)

Session anomaly events shall be forwarded to the SIEM as security events.

---

## 8. HTTP Security Headers

### 8.1 Mandatory HTTP Security Headers

*This section defines the HTTP response headers that shall be present on all web application responses. Authors should confirm implementation at the server or reverse proxy layer to ensure consistent coverage across all application endpoints.*

The following HTTP security headers are **mandatory** for all in-scope web applications at the specified configuration:

| Header | Required Value / Configuration | Purpose |
|---|---|---|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Enforces HTTPS; prevents protocol downgrade attacks |
| `X-Content-Type-Options` | `nosniff` | Prevents MIME type sniffing |
| `X-Frame-Options` | `DENY` or `SAMEORIGIN` (align with CSP `frame-ancestors`) | Prevents clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` or `no-referrer` | Controls referrer information leakage |
| `Permissions-Policy` | [See Section 8.3] | Restricts browser feature access |
| `Content-Security-Policy` | [Per Section 6] | Restricts resource loading origins |
| `Cache-Control` | `no-store` on authenticated/sensitive responses; `no-cache, no-store, must-revalidate` on session endpoints | Prevents caching of sensitive data |
| `Pragma` | `no-cache` (for HTTP/1.0 compatibility where required) | Legacy cache control |

### 8.2 Prohibited Headers — Information Disclosure

*Authors should ensure the following headers are suppressed at the web server, application server, or reverse proxy layer to prevent technology fingerprinting.*

The following headers shall be **removed** from all HTTP responses:

| Header | Rationale |
|---|---|
| `Server` | Discloses web server software and version |
| `X-Powered-By` | Discloses application framework and version |
| `X-AspNet-Version` / `X-AspNetMvc-Version` | Discloses .NET framework version |
| `X-Generator` | Discloses CMS or framework in use |
| `X-Runtime` | Discloses server-side processing time |
| `Via` | Discloses proxy infrastructure |

### 8.3 Permissions-Policy Configuration

*Authors should restrict browser feature access to only those features the application genuinely requires. The table below is a starting baseline; application teams should remove features not used.*

Recommended `Permissions-Policy` baseline:

```
Permissions-Policy:
  accelerometer=(),
  camera=(),
  display-capture=(),
  fullscreen=(self),
  geolocation=(),
  gyroscope=(),
  magnetometer=(),
  microphone=(),
  payment=(),
  usb=()
```

Features required by the application shall be explicitly listed with the minimum permitted origin scope.

### 8.4 CORS Configuration

*Authors should document the Cross-Origin Resource Sharing policy for each application. Overly permissive CORS configurations are a common vulnerability class.*

| Requirement | Specification |
|---|---|
| `Access-Control-Allow-Origin` | Explicitly allowlisted origins only; wildcard (`*`) is **prohibited** for authenticated or data-bearing endpoints |
| `Access-Control-Allow-Methods` | Minimum required methods only; avoid blanket `*` |
| `Access-Control-Allow-Headers` | Explicitly listed required headers only |
| `Access-Control-Allow-Credentials` | `true` only where explicitly required; never combined with wildcard origin |
| `Access-Control-Max-Age` | [600] seconds maximum for preflight caching |

Approved CORS origins for each application shall be documented in the **Application Security Register**.

### 8.5 HTTP Security Header Verification

*Authors should specify how header compliance is verified and validated.*

- HTTP security headers shall be validated using [Approved Tool — e.g., securityheaders.com, Mozilla Observatory] prior to each production release
- Tier 1 and Tier 2 applications shall achieve a minimum grade of **[A]** on [Mozilla Observatory]
- Header configuration shall be version-controlled and subject to change management controls
- Header compliance shall be included in web application penetration test scope

---

## 9. Secure Cookie Configuration

### 9.1 Cookie Security Attributes

*This section defines mandatory security attributes for all cookies set by web applications in scope. Authors should confirm that these attributes are enforced at the application framework or server configuration layer, not solely reliant on developer discipline.*

All cookies set by in-scope web applications shall be configured with the following attributes:

| Attribute | Required Value | Rationale |
|---|---|---|
| `Secure` | **Mandatory** | Cookie transmitted only over HTTPS; prevents interception over unencrypted channels |
| `HttpOnly` | **Mandatory** on session and authentication cookies | Cookie inaccessible to JavaScript; mitigates XSS-based session token theft |
| `SameSite` | `Strict` (preferred) or `Lax` | Mitigates Cross-Site Request Forgery (CSRF); `None` requires `Secure` and explicit justification |
| `Domain` | Minimally scoped; avoid setting `Domain` attribute to enable subdomain restriction | Over-broad Domain attribute extends cookie scope unnecessarily |
| `Path` | Minimally scoped to the application path (e.g., `/app/`) | Limits cookie transmission to required paths |
| `Max-Age` / `Expires` | Session cookies: omit (expire on browser close); persistent cookies: set per Section 7.3 timeout values | Controls cookie persistence |

### 9.2 Session Cookie Requirements

*Authors should confirm that session cookies — those used to maintain authenticated state — meet the strictest configuration requirements.*

Session cookies (those carrying the session token or authentication state) shall additionally:

- Use the `HttpOnly` attribute — **no exceptions**
- Use the `Secure` attribute — **no exceptions**
- Use `SameSite=Strict` where application functionality permits; `SameSite=Lax` where cross-site navigation to the application is a business requirement
- Not contain sensitive data within the cookie value itself; the cookie value shall be an opaque reference only
- Not be set with a `Domain` attribute broader than the application's registered domain

### 9.3 Third-Party and Tracking Cookies

*Authors should document whether third-party cookies are in use and ensure compliance with PDPA requirements for consent.*

- Third-party cookies shall only be set following explicit user consent, in accordance with the **Personal Data Protection Act 2010 (Act 709)** and [Organization Name]'s **Privacy Notice ([Document ID])**
- A cookie consent mechanism shall be implemented for all external-facing web applications that set non-essential cookies
- Third-party cookie usage shall be inventoried and documented in the **Data Processing Register ([Document ID])**

### 9.4 Cookie Prefixes

*Authors should consider the use of cookie prefixes as an additional defence mechanism for session cookies on Tier 1 applications.*

For Tier 1 applications, the use of browser **cookie prefixes** is recommended:

| Prefix | Effect | Application |
|---|---|---|
| `__Host-` | Cookie must have `Secure` attribute, no `Domain` attribute, and `Path=/`; sent only to the host that set it | Highest security session cookies |
| `__Secure-` | Cookie must have `Secure` attribute | Authentication-related cookies where `__Host-` is not feasible |

### 9.5 Cookie Inventory and Review

*Authors should ensure that all cookies in use are known, documented, and periodically reviewed.*

| Requirement | Specification |
|---|---|
| **Cookie Inventory** | A complete inventory of cookies set by each application shall be maintained in the **Application Security Register** |
| **Review Cadence** | Cookie inventory shall be reviewed semi-annually or following material application changes |
| **Automated Scanning** | Cookie configuration shall be validated by automated security scanners (e.g., OWASP ZAP, Burp Suite) as part of the CI/CD pipeline |

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix

*This section defines accountability for implementation, maintenance, and compliance verification against this standard. Authors should confirm role titles align with the organisation's current structure.*

**Key:** R = Responsible | A = Accountable | C = Consulted | I = Informed

| Activity | Chief Information Security Officer (CISO) | Application Security Lead | Application Security Engineer | Development Team | DevOps / Platform Engineering | IT Risk & Compliance | Internal Audit | Third-Party Vendors |
|---|---|---|---|---|---|---|---|---|
| Standard ownership and approval | A | R | C | I | I | C | I | — |
| Standard implementation guidance | I | A | R | C | C | I | I | I |
| ASVS assessment — Tier 1 | A | R | R | C | C | I | I | C |
| ASVS assessment — Tier 2 & 3 | I | A | R | C | I | I | I | — |
| WAF deployment and configuration | I | A | C | I | R | I | I | — |
| WAF rule review and tuning | I | A | R | I | R | I | I | — |
| CSP implementation | I | C | R | R | C | I | I | — |
| CSP monitoring and violation review | I | A | R | C | I | I | I | — |
| HTTP security header configuration | I | C | R | R | R | I | I | — |
| Cookie attribute compliance | I | C | R | R | C | I | I | — |
| Session management implementation | I | C | R | R | C | I | I | — |
| Vulnerability remediation (Critical/High) | A | R | C | R | C | I | I | I |
| Penetration testing — web applications | A | R | C | I | I | I | I | R |
| Standard compliance reporting (NACSA) | A | C | C | I | I | R | I | — |
| Exception management | A | R | C | I | I | C | I | — |
| Standard review — semi-annual | A | R | C | C | C | C | I | — |
| Third-party compliance assessment | I | A | R | I | I | C | I | R |
| Training and awareness | I | R | C | I | I | C | I | — |

### 10.2 Role Descriptions

*Authors should update role descriptions to reflect actual responsibilities within the organisation.*

| Role | Primary Responsibilities under this Standard |
|---|---|
| **CISO** | Ultimate accountability for web application security posture; approves exceptions to this standard; escalation point for unresolved risk |
| **Application Security Lead** | Day-to-day ownership of this standard; governs the ASVS assessment programme; approves WAF exclusions; leads semi-annual review |
| **Application Security Engineer** | Implements technical requirements; conducts ASVS assessments; reviews code and configurations; manages CSP violation monitoring |
| **Development Team** | Implements security controls within application code; remediates vulnerabilities within SLA; participates in security reviews |
| **DevOps / Platform Engineering** | Configures WAF, reverse proxy, and infrastructure-layer security headers; manages TLS termination; maintains cookie and header configuration in deployment pipelines |
| **IT Risk & Compliance** | Monitors standard compliance; reports compliance status to regulators; manages exception register; coordinates with NACSA as required |
| **Internal Audit** | Independently assesses compliance with this standard; reports findings to Board Audit Committee |
| **Third-Party Vendors** | Comply with this standard for web applications within scope; provide evidence of compliance on request; notify [Organization Name] of security incidents |

---

## 11. Compliance and Exceptions

### 11.1 Compliance Monitoring

*This section defines how compliance with this standard is measured and reported.*

Compliance with this standard shall be monitored through the following mechanisms:

| Mechanism | Frequency | Responsible Party | Output |
|---|---|---|---|
| Automated security header scanning (CI/CD pipeline) | Per deployment | DevOps / Platform Engineering | Pass/Fail build gate |
| OWASP ZAP / Burp Suite automated scan | [Weekly] | Application Security | Vulnerability report |
| Manual ASVS assessment | Per application tier (see Section 4.4) | Application Security | ASVS assessment report |
| Web application penetration test | Annual (Tier 1); Biennial (Tier 2) | [Accredited Third Party] | Penetration test report |
| WAF log review | Daily | Security Operations (SOC) | SOC daily report |
| CSP violation monitoring | Weekly | Application Security | CSP monitoring report |
| Cookie and session configuration review | Semi-annual | Application Security | Configuration review report |
| Compliance self-assessment | Semi-annual | IT Risk & Compliance | Compliance dashboard |

### 11.2 Non-Compliance and Remediation

*Authors should define the escalation process for non-compliance findings.*

| Severity | Definition | Remediation SLA | Escalation |
|---|---|---|---|
| **Critical** | Exploitable vulnerability with active risk of data breach or system compromise | **[5] business days** | CISO; Incident Response Plan activated |
| **High** | Significant control gap with high exploitation potential | **[15] business days** | Application Security Lead; Risk Register entry |
| **Medium** | Control weakness with moderate exploitation potential | **[45] business days** | Application Security Lead; tracked in vulnerability register |
| **Low** | Minor configuration or documentation gap | **[90] business days** | Application Security Engineer; tracked in vulnerability register |
| **Informational** | Observation with no direct exploitation potential | Next scheduled review cycle | Application Security |

### 11.3 Exception Management

*Authors should define a formal process for managing deviations from this standard. Exceptions should be time-bound and risk-accepted by an appropriate authority.*

Where compliance with a requirement of this standard is not technically or operationally feasible, an exception may be requested through the following process:

1. The application team documents the exception request, including:
   - Specific requirement(s) that cannot be met
   - Technical or operational rationale
   - Compensating controls implemented to mitigate the residual risk
   - Requested exception duration (maximum [12] months)
2. Exception request is reviewed by the **Application Security Lead**
3. Exceptions involving Critical or High residual risk require approval by the **CISO**
4. Approved exceptions are recorded in the **Exception Register ([Document ID])** and subject to semi-annual review
5. Exceptions are disclosed to **IT Risk & Compliance** for inclusion in the risk register and, where required, regulatory reporting

**Blanket or permanent exceptions to mandatory controls (Sections 5.1, 7.1, 7.2, 8.1, 9.1) are not permitted.**

---

## 12. Review and Approval

### 12.1 Review Schedule

This standard shall be reviewed on a **semi-annual basis** (every six months) or earlier if triggered by:

- Material changes to the regulatory landscape (new NACSA guidelines, Act 854 amendments, BNM RMiT updates)
- Significant changes to the organisation's web application architecture or portfolio
- A material security incident involving a web application
- Identification of significant new vulnerability classes affecting web applications (e.g., new OWASP Top 10 release)
- Post-penetration test findings that reveal gaps in the standard's coverage

### 12.2 Version History

*Authors should maintain a complete, accurate version history. Each revision should record the nature of changes to support audit traceability.*

| Version | Date | Author | Summary of Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], Application Security | Initial release |
| [1.1] | [Date] | [Author Name] | [e.g., Updated ASVS level requirements for Tier 2 applications; added CSP nonce requirements] |
| [2.0] | [Date] | [Author Name] | [e.g., Major revision following NACSA guideline update; incorporated new session timeout requirements] |

### 12.3 Approval Sign-Off

*All versions of this standard require formal approval from the designated signatories before they are effective. Authors should obtain wet or electronic signatures and retain originals.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Application Security Lead | [Name] | [Signature] | [Date] |
| Chief Information Security Officer (CISO) | [Name] | [Signature] | [Date] |
| Chief Information Officer (CIO) / Head of IT | [Name] | [Signature] | [Date] |
| IT Risk & Compliance | [Name] | [Signature] | [Date] |
| [Additional Approver — e.g., Legal / DPO] | [Name] | [Signature] | [Date] |

---

## 13. References

### 13.1 Regulatory References

| Reference | Description |
|---|---|
| Cyber Security Act 2024 (Act 854), **Section 18** | Duty of NCII entity to comply with national cybersecurity standards and implement appropriate security measures for NCII systems — primary regulatory basis for this standard |
| Cyber Security Act 2024 (Act 854), **Section 25** | Incident reporting obligations for NCII entities |
| Cyber Security Act 2024 (Act 854), **Section 28** | Powers of NACSA to issue codes of practice and standards |
| Personal Data Protection Act 2010 (Act 709), **Section 9** | Security Principle — obligation to take practical steps to protect personal data |
| Personal Data Protection Act 2010 (Act 709), **Section 6** | Consent Principle — applicable to cookie consent requirements |
| BNM Risk Management in Technology (RMiT) Policy, **[Applicable Sections]** | Technology risk management requirements for financial sector NCII entities |
| NACSA NCII Sector Security Plan Guidelines, **[Version]** | Sector-specific security plan requirements |

### 13.2 Industry Standards and Frameworks

| Reference | Description |
|---|---|
| OWASP Application Security Verification Standard (ASVS) v4.0 / v5.0 | Primary application security benchmark referenced throughout this standard |
| OWASP Top 10 Web Application Security Risks (Latest Edition) | Foundational vulnerability taxonomy; informs WAF rule set and development training |
| OWASP Testing Guide (OTG) | Methodology for web application security testing |
| OWASP Cheat Sheet Series | Implementation guidance for specific security controls (session management, CSP, HTTP headers, cookies) |
| NIST Special Publication 800-53 (Rev 5) | Security and Privacy Controls for Information Systems and Organizations |
| NIST Special Publication 800-95 | Guide to Secure Web Services |
| ISO/IEC 27001:2022 | Information Security Management Systems — requirements |
| ISO/IEC 27002:2022 | Information Security Controls |
| CIS Benchmarks — Web Application Server Hardening | Configuration benchmarks for common web and application servers |
| RFC 6265 (HTTP State Management Mechanism) | Cookie specification; basis for Sections 9.1–9.4 |
| RFC 7034 (HTTP Header Field X-Frame-Options) | Specification for X-Frame-Options header |
| W3C Content Security Policy Level 3 | CSP specification; basis for Section 6 |

---

## 14. Appendices

### Appendix A: Minimum Acceptable HTTP Security Header Configuration Examples

*This appendix provides illustrative configuration examples for common web server platforms. Authors should adapt these examples to the organisation's specific technology stack and validate them in a non-production environment before deploying to production. These examples are indicative and must not be used without review.*

**A.1 — Nginx Configuration Example**

```nginx
# HTTP Security Headers — [Organization Name] Baseline
# Reference: Web Application Security Standard [Document ID] v1.0

add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "accelerometer=(), camera=(), microphone=(), payment=(), geolocation=()" always;
add_header Content-Security-Policy "[CSP Policy — Define per application; see Section 6]" always;

# Remove information-disclosure headers
server_tokens off;
more_clear_headers 'Server';
more_clear_headers 'X-Powered-By';
```

**A.2 — Apache HTTP Server Configuration Example**

```apache
# HTTP Security Headers — [Organization Name] Baseline
# Reference: Web Application Security Standard [Document ID] v1.0

Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
Header always set X-Content-Type-Options "nosniff"
Header always set X-Frame-Options "DENY"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Permissions-Policy "accelerometer=(), camera=(), microphone=(), payment=(), geolocation=()"

# Remove information-disclosure headers
ServerTokens Prod
ServerSignature Off
Header unset X-Powered-By
```

**A.3 — IIS (web.config) Example**

```xml
<system.webServer>
  <httpProtocol>
    <customHeaders>
      <add name="Strict-Transport-Security" value="max-age=31536000; includeSubDomains; preload" />
      <add name="X-Content-Type-Options" value="nosniff" />
      <add name="X-Frame-Options" value="DENY" />
      <add name="Referrer-Policy" value="strict-origin-when-cross-origin" />
      <add name="Permissions-Policy" value="accelerometer=(), camera=(), microphone=(), payment=()" />
      <remove name="X-Powered-By" />
    </customHeaders>
  </httpProtocol>
</system.webServer>
```

---

### Appendix B: ASVS Assessment Checklist Summary

*This appendix provides a summary checklist for Application Security teams conducting ASVS assessments. The complete ASVS checklist shall be obtained directly from the OWASP ASVS project (https://owasp.org/www-project-application-security-verification-standard/) and version-controlled in the Application Security team's assessment tooling.*

| ASVS Chapter | Level 1 Controls | Level 2 Controls | Level 3 Controls | Assessment Result | Evidence Reference |
|---|---|---|---|---|---|
| V1 — Architecture | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V2 — Authentication | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V3 — Session Management | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V4 — Access Control | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V5 — Validation & Encoding | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V7 — Error Handling & Logging | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V8 — Data Protection | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V9 — Communication | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V13 — API & Web Service | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |
| V14 — Configuration | [#] controls | [#] controls | [#] controls | [Pass / Fail / Partial / N/A] | [Document Reference] |

**Assessment Conducted By:** [Name, Certification]
**Assessment Date:** [Date]
**Application Name / ID:** [Application Name / ID]
**ASVS Level Assessed:** [Level 1 / 2 / 3]
**Overall Result:** [Pass / Fail / Conditional Pass]
**Findings Summary:** [Number of Critical / High / Medium / Low findings]

---

### Appendix C: Cookie Attribute Compliance Checklist

*This appendix provides a per-cookie compliance checklist. Application teams shall complete this checklist for all cookies set by the application and retain it as evidence of compliance.*

| Cookie Name | Purpose / Classification | `Secure` | `HttpOnly` | `SameSite` | `Domain` Scope | `Path` Scope | `Max-Age` / `Expires` | Compliant? | Notes |
|---|---|---|---|---|---|---|---|---|---|
| [session_id] | Session management | Yes | Yes | Strict | [domain.com] | [/app/] | Session | [Yes/No] | |
| [auth_token] | Authentication | Yes | Yes | Strict | [domain.com] | [/] | [8h] | [Yes/No] | |
| [csrf_token] | CSRF protection | Yes | No* | Strict | [domain.com] | [/] | Session | [Yes/No] | *HttpOnly=No required for JS access |
| [analytics_id] | Analytics (non-essential) | Yes | No | Lax | [domain.com] | [/] | [365d] | [Yes/No] | Consent required |
| [preference] | UI preferences | Yes | Yes | Lax | [domain.com] | [/] | [30d] | [Yes/No] | |

**Review Conducted By:** [Name]
**Application Name:** [Application Name]
**Review Date:** [Date]
**Next Review Date:** [Date]

---

### Appendix D: Exception Register Template

*Authors should maintain a centralised exception register for all approved deviations from this standard. The register shall be reviewed semi-annually by the Application Security Lead.*

| Exception ID | Application / System | Requirement(s) Exempted | Justification | Compensating Controls | Residual Risk Rating | Approved By | Approval Date | Expiry Date | Review Date | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| EX-WAS-001 | [Application Name] | [Section Reference] | [Business / Technical Justification] | [Controls Mitigating Residual Risk] | [Critical / High / Medium / Low] | [Name, Role] | [Date] | [Date] | [Date] | [Active / Expired / Revoked] |

---

### Appendix E: Glossary of OWASP Top 10 Risk Categories

*This appendix provides brief descriptions of OWASP Top 10 categories for reference by development and operations teams. Authors should update this appendix to reflect the current edition of the OWASP Top 10.*

| OWASP Top 10 Category | Description | Primary Mitigating Controls in This Standard |
|---|---|---|
| A01 — Broken Access Control | Failures in access control allow users to act outside intended permissions | Section 4 (ASVS V4); Section 7 (Session Management) |
| A02 — Cryptographic Failures | Failure to protect sensitive data in transit or at rest | Section 7.2 (TLS); Section 8.1 (HSTS); Section 9.1 (Secure Cookie) |
| A03 — Injection | SQL, NoSQL, OS, LDAP injection attacks | Section 4 (ASVS V5); Section 5 (WAF) |
| A04 — Insecure Design | Missing or inadequate security controls at the design stage | Section 4 (ASVS V1 — Architecture) |
| A05 — Security Misconfiguration | Missing hardening, unnecessary features, default credentials | Section 8 (HTTP Headers); Section 9 (Cookies); Section 5 (WAF) |
| A06 — Vulnerable and Outdated Components | Use of components with known vulnerabilities | Section 4 (ASVS V14); Vulnerability Management Standard |
| A07 — Identification and Authentication Failures | Weak authentication, session management flaws | Section 7 (Session Management); IAM Standard |
| A08 — Software and Data Integrity Failures | Code/infrastructure integrity not verified; insecure deserialization | Section 4 (ASVS V10); SSDLC Standard |
| A09 — Security Logging and Monitoring Failures | Insufficient logging; failure to detect and respond to attacks | Section 5.4 (WAF Logging); Section 7.7 (Session Anomaly Detection) |
| A10 — Server-Side Request Forgery (SSRF) | Application fetches remote resources without validating user-supplied URL | Section 4 (ASVS V5, V13); Section 5 (WAF) |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organization Name] | Application Security | Web Application Security Standard | [Document ID] | Version 1.0**

*This document is subject to [Organization Name]'s Document Control Policy. Printed copies are uncontrolled. The controlled version is maintained in [Document Management System — e.g., SharePoint, Confluence].*