# DNS Security Standard

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Security |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

**Organisation:** [Organisation Name]
**Department:** [Department Name]
**Contact:** [Contact Email / Phone]

---

## Table of Contents

1. [Purpose and Scope](#1-purpose-and-scope)
2. [Regulatory Context](#2-regulatory-context)
3. [Definitions and Abbreviations](#3-definitions-and-abbreviations)
4. [DNSSEC Implementation Requirements](#4-dnssec-implementation-requirements)
5. [DNS Logging Requirements](#5-dns-logging-requirements)
6. [DNS Filtering and Sinkholing](#6-dns-filtering-and-sinkholing)
7. [Split DNS Architecture](#7-split-dns-architecture)
8. [DNS Monitoring for Tunnelling](#8-dns-monitoring-for-tunnelling)
9. [Redundancy and Resilience](#9-redundancy-and-resilience)
10. [Roles and Responsibilities](#10-roles-and-responsibilities)
11. [Compliance and Audit](#11-compliance-and-audit)
12. [Review and Approval](#12-review-and-approval)
13. [References](#13-references)
14. [Appendices](#14-appendices)

---

## 1. Purpose and Scope

### 1.1 Purpose

This standard defines the minimum security requirements for Domain Name System (DNS) infrastructure operated by or on behalf of **[Organisation Name]** in support of National Critical Information Infrastructure (NCII) systems, as designated under the **Cyber Security Act 2024 (Act 854)**.

The purpose of this standard is to:

- Establish consistent and enforceable controls for the protection of DNS services against exploitation, abuse, and disruption.
- Ensure DNS infrastructure integrity, confidentiality, and availability in alignment with national cybersecurity obligations.
- Provide a baseline against which compliance can be assessed, audited, and reported to the National Cyber Security Agency (NACSA) under Section 18 of Act 854.
- Reduce the risk of DNS-based attack vectors including cache poisoning, zone enumeration, DNS tunnelling, and denial-of-service against resolver and authoritative infrastructure.

### 1.2 Scope

This standard applies to:

- **Systems:** All DNS servers (authoritative and recursive/resolver), DNS appliances, DNS-as-a-service integrations, and associated management interfaces operated by [Organisation Name].
- **Environments:** Production, disaster recovery (DR), staging, and any environment that provides name resolution services for NCII-classified systems.
- **Personnel:** All employees, contractors, managed service providers, and third parties who design, operate, administer, or audit DNS infrastructure on behalf of [Organisation Name].
- **Locations:** All physical and virtual infrastructure located on-premises, in co-location facilities, or in cloud environments (public, private, or hybrid) used to serve [Organisation Name]'s DNS.

This standard does **not** apply to:

- DNS services that are entirely external and outside the management control of [Organisation Name] (e.g., public DNS resolvers used by end-user devices for general internet access where no [Organisation Name] data traverses).
- Development and test environments that have no connectivity to NCII systems, unless expressly included by the system owner.

### 1.3 Out of Scope

*List any specific systems, environments, or use cases explicitly excluded from this standard, and the rationale for exclusion.*

| Excluded Item | Rationale | Approved By |
|---|---|---|
| [Excluded system or environment] | [Reason for exclusion] | [Approver Name] |
| [Excluded system or environment] | [Reason for exclusion] | [Approver Name] |

---

## 2. Regulatory Context

### 2.1 Legislative Authority

This standard is issued pursuant to obligations under the following legislation and regulatory instruments:

| Instrument | Clause / Section | Obligation Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Requires NCII entities to establish, implement, and maintain cybersecurity measures for NCII systems, including technical controls governing networked services such as DNS. |
| Cyber Security Act 2024 (Act 854) | Section 22 | Establishes the duty to comply with codes of practice and standards issued by the Chief Executive of NACSA. |
| [Additional Instrument, e.g., BNM RMiT] | [Section Reference] | [Summary of obligation] |
| [Additional Instrument] | [Section Reference] | [Summary of obligation] |

### 2.2 Alignment with Standards and Frameworks

*Identify the technical frameworks and standards this document aligns with. Ensure version references are current at the time of review.*

| Standard / Framework | Version / Edition | Relevant Controls |
|---|---|---|
| NIST SP 800-81 — Secure Domain Name System (DNS) Deployment Guide | Rev. 2 | DNS infrastructure hardening, DNSSEC deployment |
| NIST Cybersecurity Framework (CSF) | 2.0 | PR.AC, PR.DS, DE.CM |
| ISO/IEC 27001:2022 | 2022 | Annex A — A.8.20 (Networks Security), A.8.22 (Segregation) |
| CIS Controls | v8 | Control 9 (DNS Filtering), Control 13 (Network Monitoring) |
| [Organisation-specific framework] | [Version] | [Relevant sections] |

---

## 3. Definitions and Abbreviations

### 3.1 Definitions

*Define all technical and regulatory terms used in this document to ensure consistent interpretation by all readers.*

| Term | Definition |
|---|---|
| **Authoritative DNS Server** | A DNS server that holds the definitive records for a domain zone and responds to queries with authoritative answers. |
| **DNS Cache Poisoning** | An attack in which fraudulent DNS records are inserted into a resolver's cache, redirecting users to malicious destinations. |
| **DNS Sinkhole** | A DNS server configured to return false or null responses for known malicious domains, redirecting or blocking malicious traffic. |
| **DNS Tunnelling** | The encapsulation of non-DNS protocol data within DNS queries and responses, commonly used to exfiltrate data or establish covert command-and-control channels. |
| **DNSSEC** | Domain Name System Security Extensions — a suite of IETF specifications that adds cryptographic authentication to DNS responses. |
| **Recursive Resolver** | A DNS server that queries other DNS servers on behalf of clients to resolve domain names. |
| **Split DNS** | A configuration in which different DNS responses are provided depending on the source of the query (internal vs. external), preventing exposure of internal infrastructure detail. |
| **Zone Transfer** | The mechanism by which DNS zone data is replicated from a primary to a secondary name server. |
| **NCII** | National Critical Information Infrastructure, as defined under Act 854. |
| **NACSA** | National Cyber Security Agency of Malaysia. |
| [Additional Term] | [Definition] |

### 3.2 Abbreviations

| Abbreviation | Full Form |
|---|---|
| BNM | Bank Negara Malaysia |
| DNS | Domain Name System |
| DNSSEC | DNS Security Extensions |
| DoH | DNS over HTTPS |
| DoT | DNS over TLS |
| DR | Disaster Recovery |
| NCII | National Critical Information Infrastructure |
| NACSA | National Cyber Security Agency |
| PDPA | Personal Data Protection Act 2010 |
| RACI | Responsible, Accountable, Consulted, Informed |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SIEM | Security Information and Event Management |
| SOC | Security Operations Centre |
| TTL | Time To Live |

---

## 4. DNSSEC Implementation Requirements

### 4.1 Overview

*This section defines requirements for the cryptographic signing of DNS zones using DNSSEC. Authors should specify signing algorithms, key management procedures, rollover schedules, and validation enforcement. Align key rollover timelines with the organisation's cryptographic key management policy.*

[Organisation Name] shall implement DNSSEC on all authoritative DNS zones that serve NCII systems, ensuring that DNS responses can be cryptographically validated by resolvers and clients.

### 4.2 Signing Requirements

All DNS zones serving NCII systems **must** be signed in accordance with the following requirements:

| Requirement | Specification |
|---|---|
| **Signing Algorithm** | ECDSA P-256 (ECDSAP256SHA256) or RSA/SHA-256 (RSASHA256) as a minimum. RSA/SHA-1 is prohibited. |
| **Zone Signing Key (ZSK) Length** | Minimum 1024-bit RSA or 256-bit ECDSA |
| **Key Signing Key (KSK) Length** | Minimum 2048-bit RSA or 256-bit ECDSA |
| **ZSK Rollover Frequency** | Every [X] days (recommended: 90 days or as per key management policy) |
| **KSK Rollover Frequency** | Annually, or upon compromise |
| **DS Record Propagation** | DS records must be submitted to the parent zone within [X] business days of KSK rollover |
| **NSEC / NSEC3** | NSEC3 with opt-out disabled shall be used to prevent zone enumeration |
| **NSEC3 Salt** | Randomly generated; minimum [X] bits; regenerated on each signing |

### 4.3 Validation Enforcement

| Requirement | Standard |
|---|---|
| DNSSEC validation **must** be enabled on all internal recursive resolvers serving NCII systems. | Mandatory |
| Resolvers must return SERVFAIL for responses that fail DNSSEC validation. | Mandatory |
| Trust anchors must be maintained and updated in accordance with IANA root key rollover procedures. | Mandatory |
| DNSSEC validation bypass (e.g., via domain exceptions) requires a documented and approved exception. | Mandatory |

### 4.4 Key Management

*Describe key storage, access controls, and escrow procedures in this section. Reference the organisation's Cryptographic Key Management Policy where applicable.*

- Keys must be stored in a Hardware Security Module (HSM) or equivalent protected storage: [Yes / No — specify implementation]
- Key access must be restricted to authorised DNS administrators under dual-person integrity controls.
- Key compromise procedures must be documented and tested annually.
- Reference: [Cryptographic Key Management Policy — Document ID]

### 4.5 Exceptions

*Any exception to DNSSEC requirements must follow the organisation's exception management process and be documented below.*

| Zone / Domain | Exception Reason | Risk Acceptance Owner | Expiry Date | Reference |
|---|---|---|---|---|
| [zone.example.my] | [Reason] | [Name / Role] | [Date] | [Exception Ref] |

---

## 5. DNS Logging Requirements

### 5.1 Overview

*This section specifies the minimum logging requirements for DNS infrastructure. Authors should align retention periods with the organisation's log management policy and regulatory obligations. Ensure log fields are sufficient to support incident investigation and forensic reconstruction.*

Comprehensive logging of DNS activity is required to support security monitoring, incident investigation, and regulatory audit obligations under Act 854 Section 18.

### 5.2 Minimum Log Fields

All DNS servers serving NCII systems must log the following fields at minimum:

| Log Field | Description | Mandatory |
|---|---|---|
| Timestamp | Date and time of the query/response (UTC, millisecond precision) | Yes |
| Source IP Address | IP address of the querying client | Yes |
| Source Port | UDP/TCP port of the originating query | Yes |
| Query Name (QNAME) | The fully qualified domain name being resolved | Yes |
| Query Type (QTYPE) | Record type requested (A, AAAA, MX, TXT, NS, PTR, etc.) | Yes |
| Response Code (RCODE) | DNS response code (NOERROR, NXDOMAIN, SERVFAIL, REFUSED, etc.) | Yes |
| Response Data | Resolved IP address(es) or other record data returned | Yes |
| DNS Server ID | Identifier of the DNS server that processed the query | Yes |
| Protocol | UDP or TCP | Yes |
| DNSSEC Status | Validation status of the response (AD flag, Bogus, Insecure) | Yes |
| Query Size | Size of the DNS query in bytes | Recommended |
| Response Size | Size of the DNS response in bytes | Recommended |
| Latency | Query processing time in milliseconds | Recommended |

### 5.3 Log Retention

| Log Category | Minimum Retention Period | Storage Location |
|---|---|---|
| DNS query/response logs (NCII systems) | [24 months / as per policy] | [SIEM / Central Log Repository] |
| DNS change logs (zone modifications) | [36 months / as per policy] | [Change Management System] |
| DNS server operational logs | [12 months / as per policy] | [Log Repository] |
| DNS security event logs | [36 months / as per policy] | [SIEM] |

### 5.4 Log Integrity and Protection

- DNS logs must be forwarded to a centralised SIEM or log aggregation platform in real time or near-real time (maximum [5-minute] delay).
- Logs must be protected against unauthorised modification using cryptographic integrity controls (e.g., hash chaining, immutable storage).
- Access to raw DNS logs must be restricted to authorised security and operations personnel.
- Log forwarding failures must generate an alert to the SOC within [X] minutes.

### 5.5 Log Review

| Activity | Frequency | Responsible |
|---|---|---|
| Automated anomaly detection (SIEM rules) | Continuous | SOC Analyst |
| Manual DNS log review for NCII systems | [Weekly / Monthly] | Network Security Team |
| Retention compliance audit | Annually | [IT Audit / Compliance] |

---

## 6. DNS Filtering and Sinkholing

### 6.1 Overview

*This section defines requirements for DNS-based content filtering and malicious domain sinkholing. Authors should specify the threat intelligence feeds used, the update frequency for block lists, and the process for handling false positives. Sinkhole infrastructure should be documented separately and referenced here.*

[Organisation Name] shall implement DNS filtering and sinkholing to prevent resolution of known malicious domains and to redirect threats to controlled infrastructure for analysis.

### 6.2 DNS Filtering Requirements

| Requirement | Standard |
|---|---|
| All internal recursive resolvers must enforce DNS filtering for clients on NCII network segments. | Mandatory |
| Filtering must block or sinkhole known malicious domains including malware C2, phishing, and botnet infrastructure. | Mandatory |
| Threat intelligence feeds must be sourced from vetted providers and updated at a frequency no less than [every 4 hours]. | Mandatory |
| Domain block list coverage must include: command-and-control (C2) domains, phishing domains, newly registered domains (NRDs) flagged as suspicious, and domains associated with known threat actors targeting the financial sector. | Mandatory |
| DNS over HTTPS (DoH) and DNS over TLS (DoT) from endpoints must be restricted or monitored to prevent circumvention of filtering controls. | Mandatory |

### 6.3 Threat Intelligence Feed Sources

*List the approved threat intelligence feeds used to populate DNS filter block lists. Review and update this list annually.*

| Feed Provider | Feed Name / Type | Update Frequency | Contract / Licence Ref |
|---|---|---|---|
| [Provider Name] | [Malware/Phishing/C2 Feed] | [Frequency] | [Reference] |
| [Provider Name] | [Feed Type] | [Frequency] | [Reference] |
| NACSA / MyCERT | [National threat feed, if available] | [Frequency] | [Reference] |
| [Internal SOC / Threat Intel team] | Internally curated IOC list | [Frequency] | [Reference] |

### 6.4 Sinkhole Architecture

*Describe the sinkhole infrastructure, including network placement, logging configuration, and escalation procedures when sinkholes trigger. Reference architecture diagrams should be maintained in Appendix A.*

| Component | Specification |
|---|---|
| **Sinkhole IP Address(es)** | [Sinkhole IP / Range] — internal, non-routable |
| **Sinkhole Logging** | All queries resolved to sinkhole IPs must be logged and forwarded to the SIEM as high-priority security events. |
| **SOC Alert Threshold** | [X] queries to sinkhole within [Y] minutes from a single host triggers a Tier 1 SOC incident. |
| **False Positive Process** | False positive submissions are reviewed within [X] business hours by [Network Security Team]; block list updated within [X] hours of confirmed false positive. |

### 6.5 Allowlisting and Exceptions

| Requirement | Standard |
|---|---|
| DNS filter allowlisting must follow a formal exception request and approval process. | Mandatory |
| Allowlist entries must include a business justification, approver name, and expiry date. | Mandatory |
| Allowlist entries must not exceed [90 days] without re-approval. | Mandatory |

*Maintain the current allowlist in Appendix B or a referenced system of record.*

---

## 7. Split DNS Architecture

### 7.1 Overview

*This section defines requirements for split-horizon DNS, which provides different DNS responses for internal versus external queries. Authors should document zone separation, the scope of internal zones, and how authoritative server roles are segregated. Architecture diagrams are recommended and should be referenced from Appendix A.*

[Organisation Name] shall implement a split DNS architecture to ensure that internal network topology, server names, and IP addressing information are not exposed to external parties through public DNS resolution.

### 7.2 Architecture Requirements

| Requirement | Standard |
|---|---|
| Internal DNS zones must not be resolvable from external networks (internet-facing resolvers). | Mandatory |
| External DNS zones must only contain records necessary for externally accessible services; no internal hostnames or RFC 1918 addresses may appear in external zones. | Mandatory |
| Separate DNS server infrastructure (physical or logical) must be maintained for internal and external DNS resolution. | Mandatory |
| Internal resolvers must not forward queries for internal zones to external DNS providers. | Mandatory |
| Zone transfers must be restricted to explicitly authorised secondary server IP addresses using TSIG authentication. | Mandatory |

### 7.3 DNS Zone Classification

*Document all DNS zones maintained by the organisation and their classification (internal/external/both). Maintain as a living register.*

| Zone Name | Zone Type | Authoritative Server(s) | Accessible From | Classification |
|---|---|---|---|---|
| [internal.organisation.my] | Internal | [Server Name / IP] | Internal networks only | Internal |
| [organisation.my] | External | [Server Name / IP] | Internet | External |
| [subdomain.organisation.my] | Split | [Server Name / IP] | Internal & External | Split |
| [Add rows as required] | | | | |

### 7.4 Zone Transfer Controls

| Control | Specification |
|---|---|
| **Zone Transfer Restriction** | AXFR and IXFR must be restricted by ACL to authorised secondary server IP addresses only. |
| **TSIG Authentication** | All zone transfers must be authenticated using TSIG (HMAC-SHA256 minimum). |
| **Monitoring** | Unauthorised zone transfer attempts must generate a SIEM alert within [X] minutes. |
| **Key Rotation** | TSIG keys must be rotated every [X] days or upon personnel change. |

### 7.5 Recursive Resolver Segregation

| Resolver Type | Network Segment | Forwarders | DNSSEC Validation |
|---|---|---|---|
| Internal Resolver (NCII) | [Internal VLAN / Segment] | [Internal only / specified upstreams] | Enabled |
| DMZ Resolver | [DMZ Segment] | [Specified external forwarders] | Enabled |
| External Authoritative | [Internet-facing DMZ] | N/A (authoritative only) | Signing enabled |

---

## 8. DNS Monitoring for Tunnelling

### 8.1 Overview

*This section defines controls for detecting and responding to DNS tunnelling activity. Authors should specify detection rules, thresholds, and escalation procedures. Where commercial DNS security tools are deployed, reference the vendor product and configuration baseline. Coordinate with the SOC to ensure detection use cases are operationalised in the SIEM.*

DNS tunnelling represents a significant data exfiltration and covert channel risk for NCII systems. [Organisation Name] shall implement continuous monitoring controls to detect DNS tunnelling activity.

### 8.2 Detection Requirements

The following behavioural indicators and detection controls must be implemented:

| Detection Method | Description | Threshold / Rule |
|---|---|---|
| **High query volume per host** | Unusually high DNS query rate from a single endpoint | > [X] queries per minute per host triggers investigation alert |
| **Anomalous QNAME length** | DNS queries with excessively long subdomain labels, characteristic of data encoding | QNAME length > [63 characters per label / 253 total] triggers alert |
| **High entropy subdomain analysis** | Random-looking subdomains indicative of base64/hex-encoded payloads | Entropy score > [threshold] on subdomain portion triggers alert |
| **Unusual record type usage** | Excessive use of TXT, NULL, CNAME, or MX record types for queries | Baseline deviation > [X]% triggers investigation |
| **Non-standard DNS server queries** | Endpoints querying DNS servers not authorised by network policy | Any query to non-approved DNS resolver IP triggers alert |
| **Large DNS response sizes** | Anomalously large DNS responses that may carry tunnelled payloads | Response size > [512 bytes over UDP / configurable threshold] without known justification |
| **Consistent beaconing pattern** | Regular, periodic DNS queries to the same domain at fixed intervals | Pattern detection: [X] queries at intervals < [Y] seconds over [Z] minutes |
| **Known tunnelling tool signatures** | Query patterns matching known DNS tunnelling tools (e.g., Iodine, DNScat2) | Signature-based detection via [DNS security platform / SIEM rule set] |

### 8.3 Monitoring Infrastructure

| Component | Implementation |
|---|---|
| **DNS Query Logging** | As defined in Section 5; all DNS logs must be forwarded to SIEM for real-time analysis. |
| **SIEM Detection Rules** | Detection use cases from Section 8.2 must be implemented as active SIEM correlation rules. |
| **DNS Security Platform** | [Name of DNS security tool, e.g., Cisco Umbrella, Infoblox, BloxOne] — reference product configuration baseline. |
| **Baseline Review** | DNS traffic baselines for NCII network segments must be reviewed and updated [quarterly]. |

### 8.4 Incident Response Integration

| Activity | Responsibility | Timeframe |
|---|---|---|
| SOC Tier 1 initial triage of DNS tunnelling alert | SOC Analyst | Within [30] minutes of alert generation |
| Endpoint isolation if tunnelling confirmed | SOC / IR Team | Within [1 hour] of confirmation |
| Forensic log preservation | IR Team | Immediately upon escalation to Tier 2 |
| Incident notification to NACSA (if NCII breach) | CISO / Compliance | As required by Act 854 Section [24 — Incident Reporting] |
| Post-incident review and rule tuning | Network Security / SOC | Within [5] business days of closure |

### 8.5 Approved DNS Protocol Usage

| Protocol | Permitted | Conditions |
|---|---|---|
| DNS over UDP (port 53) | Yes | Internal networks; filtered at perimeter |
| DNS over TCP (port 53) | Yes | For large responses and zone transfers only |
| DNS over HTTPS (DoH) | Restricted | Permitted only via approved, monitored gateway; blocked direct to external providers |
| DNS over TLS (DoT) | Restricted | Permitted only via approved, monitored gateway |
| DNS over QUIC (DoQ) | Restricted | [Permitted / Blocked — specify] |

---

## 9. Redundancy and Resilience

### 9.1 Overview

*This section defines availability requirements for DNS infrastructure supporting NCII systems. Authors should align RTO and RPO figures with the organisation's Business Continuity Plan and NCII system availability requirements. Reference the DR Plan for detailed failover procedures.*

DNS infrastructure supporting NCII systems must be designed and operated to ensure continuous availability consistent with the criticality of the systems it serves. Single points of failure in DNS infrastructure are not acceptable for NCII-classified systems.

### 9.2 Availability Requirements

| DNS Role | Minimum Availability SLA | RTO | RPO |
|---|---|---|---|
| Authoritative DNS (NCII zones) | [99.99%] | [15 minutes] | [Near-zero / last signed zone] |
| Internal Recursive Resolver (NCII) | [99.9%] | [30 minutes] | [N/A — stateless] |
| External Authoritative DNS | [99.99%] | [15 minutes] | [Last zone push] |
| DNS Management Platform | [99.5%] | [4 hours] | [24 hours] |

### 9.3 Redundancy Requirements

| Requirement | Standard |
|---|---|
| A minimum of [two] geographically or logically separated authoritative name servers must exist for each NCII zone. | Mandatory |
| A minimum of [two] internal recursive resolvers must be deployed per NCII network segment; no single resolver may be a single point of failure. | Mandatory |
| DNS servers must be deployed across separate physical hosts, availability zones, or data centres. | Mandatory |
| External authoritative DNS must be served from at least [two] independent upstream DNS hosting providers or Anycast networks. | Mandatory |
| Anycast routing is recommended for external authoritative DNS to provide geographic redundancy and DDoS resilience. | Recommended |

### 9.4 Failover and Continuity Controls

| Control | Implementation | Test Frequency |
|---|---|---|
| **Automated health monitoring** | DNS server health checked every [60 seconds]; unhealthy nodes removed from rotation automatically. | Continuous |
| **Failover testing** | Simulated DNS server failure to validate automatic failover to secondary. | [Semi-annually] |
| **DR failover test** | Full DNS infrastructure failover to DR site as part of BCP/DR exercise. | [Annually] |
| **TTL management** | TTLs for NCII service DNS records set to [300 seconds] to facilitate rapid failover. | Review at each change |
| **Out-of-band management** | DNS servers must be accessible via out-of-band management network for emergency intervention. | Validated at each DR test |

### 9.5 DDoS Resilience

| Requirement | Standard |
|---|---|
| External authoritative DNS must be protected by a DDoS mitigation service or upstream ISP-level scrubbing. | Mandatory |
| Rate limiting (response rate limiting — RRL) must be enabled on all authoritative DNS servers exposed to untrusted networks. | Mandatory |
| DNS amplification attack mitigation (e.g., disabling open recursion on authoritative servers) must be implemented. | Mandatory |
| NCII DNS infrastructure must be included in the organisation's DDoS response playbook. | Mandatory |

### 9.6 Capacity Management

| Requirement | Specification |
|---|---|
| **Baseline Query Volume** | [Document current peak queries per second (QPS) per resolver and authoritative server] |
| **Capacity Headroom** | DNS infrastructure must be sized to handle [3×] current peak QPS to absorb attack traffic. |
| **Capacity Review** | DNS capacity reviewed [annually] or upon significant changes to NCII system scope. |

---

## 10. Roles and Responsibilities

### 10.1 RACI Matrix

*The following RACI matrix defines accountabilities for key DNS security activities. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Network Security Team | SOC | System Owner | IT Operations | Compliance | Internal Audit |
|---|---|---|---|---|---|---|---|
| DNS Security Standard — ownership and maintenance | C | R | C | I | I | C | I |
| DNS Security Standard — annual review approval | **A** | R | C | C | C | C | I |
| DNSSEC key generation and rollover | I | **R/A** | I | I | C | I | I |
| DNS server build and hardening | I | **R/A** | I | C | R | I | I |
| DNS filtering rule management | I | **R/A** | C | I | C | I | I |
| Threat intelligence feed management | I | R | **R/A** | I | I | I | I |
| DNS log monitoring and alerting | I | C | **R/A** | I | I | I | I |
| DNS tunnelling investigation | C | C | **R** | I | I | I | I |
| DNS incident escalation to NACSA | **R/A** | C | C | I | I | R | I |
| DNS availability and capacity monitoring | I | C | I | I | **R/A** | I | I |
| DNS DR/failover testing | I | R | C | C | **R/A** | I | I |
| Exception approval (DNSSEC, filtering) | **A** | R | C | C | C | C | I |
| Compliance audit against this standard | C | C | C | C | C | C | **R/A** |

### 10.2 Key Roles

| Role | Responsibilities under this Standard |
|---|---|
| **CISO** | Ultimate accountability for DNS security posture; approves exceptions and escalates incidents to NACSA. |
| **Network Security Team** | Day-to-day ownership of DNS security controls; implements and maintains DNSSEC, filtering, split DNS, and monitoring. |
| **SOC** | Monitors DNS logs and SIEM alerts; investigates anomalies; escalates confirmed incidents. |
| **IT Operations** | Operates DNS server infrastructure; executes changes under Network Security Team direction. |
| **System Owner (NCII)** | Responsible for DNS requirements specific to their NCII-classified systems; approves DNS-related changes affecting their systems. |
| **Compliance** | Maintains regulatory mapping; supports NACSA engagement and audit preparation. |
| **Internal Audit** | Independently assesses compliance against this standard; reports findings to the Audit Committee. |

---

## 11. Compliance and Audit

### 11.1 Compliance Monitoring

*This section defines how compliance against this standard is measured and reported. Authors should align compliance metrics with the organisation's GRC platform where applicable.*

Compliance with this standard is assessed through the following mechanisms:

| Mechanism | Frequency | Responsible | Output |
|---|---|---|---|
| Automated compliance scanning (DNS configuration) | [Monthly] | Network Security | Compliance scorecard |
| DNSSEC zone signing validation | [Weekly / automated] | Network Security | Automated alert on failure |
| DNS filtering coverage audit | [Quarterly] | Network Security / SOC | Coverage report |
| DNS log completeness audit | [Monthly] | SOC | Log availability report |
| Internal compliance review against this standard | [Annually] | Compliance | Self-assessment report |
| Independent internal audit | [Annually] | Internal Audit | Audit report |
| NACSA or external regulatory assessment | As directed | CISO / Compliance | Regulatory audit response |

### 11.2 Non-Compliance Management

| Non-Compliance Severity | Definition | Response Timeframe | Escalation |
|---|---|---|---|
| **Critical** | Active exploitation, DNSSEC failure on NCII zone, complete logging failure | Immediate (within [4 hours]) | CISO; consider NACSA notification |
| **High** | DNSSEC not implemented on required zones, filtering bypass detected | Within [5 business days] | CISO / Network Security Manager |
| **Medium** | Log retention gaps, split DNS misconfiguration | Within [30 business days] | Network Security Manager |
| **Low** | Minor documentation gaps, overdue reviews | Within [90 days] | Network Security Team |

### 11.3 Exceptions

All exceptions to this standard must be:

1. Submitted using the formal exception request process ([reference Exception Management Policy — Document ID]).
2. Reviewed and approved by the CISO or delegated authority.
3. Time-limited (maximum [12 months] without renewal).
4. Recorded in the organisation's GRC platform.
5. Reviewed at each occurrence of the standard's annual review cycle.

---

## 12. Review and Approval

### 12.1 Review Schedule

This standard must be reviewed:

- **Annually**, no later than [12 months] from the Last Review Date.
- Upon significant changes to DNS infrastructure, architecture, or service providers.
- Following a DNS-related security incident.
- Upon issuance of new or updated guidance by NACSA relevant to DNS or NCII cybersecurity requirements.
- At the direction of the CISO.

### 12.2 Version History

| Version | Date | Author | Change Summary |
|---|---|---|---|
| 1.0 | [Date] | [Author Name, Role] | Initial release |
| [1.1] | [Date] | [Author Name, Role] | [Description of changes] |
| [2.0] | [Date] | [Author Name, Role] | [Major revision description] |

### 12.3 Approval Sign-Off

*All approvers must sign this document prior to publication. Digital signatures or approval records in the organisation's document management system are acceptable.*

| Role | Name | Signature | Date |
|---|---|---|---|
| Document Author | [Name], [Title] | | [Date] |
| Network Security Manager | [Name], [Title] | | [Date] |
| Head of IT / CTO | [Name], [Title] | | [Date] |
| CISO | [Name], [Title] | | [Date] |
| Compliance Officer | [Name], [Title] | | [Date] |
| [Additional Approver] | [Name], [Title] | | [Date] |

---

## 13. References

### 13.1 Regulatory and Legislative References

| Reference | Title | Relevant Clauses |
|---|---|---|
| Act 854 | Cyber Security Act 2024 | Section 18 — Cybersecurity measures for NCII; Section 22 — Compliance with codes of practice |
| [BNM/RMiT] | Risk Management in Technology (RMiT) Policy Document | [Relevant paragraphs, e.g., 10.31–10.39 — Network Security] |
| [PDPA 2010] | Personal Data Protection Act 2010 | [Relevant sections where DNS logging intersects with personal data] |
| [NACSA Code of Practice] | [Title of applicable NACSA Code of Practice, if issued] | [Section references] |
| [Additional reference] | [Title] | [Sections] |

### 13.2 Technical Standards and Guidelines

| Reference | Title | Version / Date |
|---|---|---|
| NIST SP 800-81 Rev. 2 | Secure Domain Name System (DNS) Deployment Guide | August 2013 |
| RFC 4033 | DNS Security Introduction and Requirements | March 2005 |
| RFC 4034 | Resource Records for the DNS Security Extensions | March 2005 |
| RFC 4035 | Protocol Modifications for the DNS Security Extensions | March 2005 |
| RFC 5155 | DNS Security (DNSSEC) Hashed Authenticated Denial of Existence (NSEC3) | March 2008 |
| RFC 7858 | Specification for DNS over Transport Layer Security (TLS) | May 2016 |
| RFC 8484 | DNS Queries over HTTPS (DoH) | October 2018 |
| CIS Controls v8 | CIS Critical Security Controls | May 2021 |
| ISO/IEC 27001:2022 | Information Security Management Systems — Requirements | 2022 |

### 13.3 Internal Policy References

| Document ID | Title | Owner |
|---|---|---|
| [DOC-ID] | Information Security Policy | CISO |
| [DOC-ID] | Network Security Policy | Network Security |
| [DOC-ID] | Cryptographic Key Management Policy | Network Security / IT |
| [DOC-ID] | Log Management and Retention Policy | SOC / Compliance |
| [DOC-ID] | Incident Response Plan | CISO / SOC |
| [DOC-ID] | Business Continuity and DR Plan | [BCP Owner] |
| [DOC-ID] | Exception Management Policy | Compliance |
| [DOC-ID] | Vulnerability Management Standard | Network Security |

---

## 14. Appendices

### Appendix A — DNS Architecture Diagram

*Insert or reference the current DNS architecture diagram here. The diagram should clearly depict: internal and external authoritative server placement, recursive resolver placement by network segment, split DNS zone separation, sinkhole infrastructure, upstream forwarders, DDoS mitigation services, and management network connectivity.*

**[DNS Architecture Diagram — Reference: [Diagram ID / Location in document management system]]**

| Diagram Element | Description |
|---|---|
| Internal Authoritative Servers | [Server names, IP addresses, hosting location] |
| External Authoritative Servers | [Server names, IP addresses, provider, Anycast details] |
| Internal Recursive Resolvers | [Server names, IP addresses, network segments served] |
| DMZ Resolver | [Server name, IP address, permitted forwarders] |
| Sinkhole Servers | [IP addresses, network placement] |
| DDoS Mitigation | [Provider / mechanism] |
| Management Access | [Out-of-band management network details] |

---

### Appendix B — DNS Filter Allowlist Register

*This register documents approved exceptions to DNS filtering controls. Entries must be reviewed and re-approved every [90 days]. The register must be maintained as a living document and is subject to internal audit.*

| Entry ID | Domain / Pattern | Business Justification | Requested By | Approved By | Approval Date | Expiry Date | Review Status |
|---|---|---|---|---|---|---|---|
| [ALL-001] | [domain.example] | [Justification] | [Name / Role] | [CISO / Delegated Approver] | [Date] | [Date] | [Active / Expired / Pending Review] |

---

### Appendix C — DNSSEC Key Register

*This register tracks all DNSSEC keys across zones. Access to this register is restricted to the Network Security Team and CISO. The register must be stored in a secured, access-controlled system.*

| Zone | Key Type | Algorithm | Key Tag | Key Length | Created Date | Last Rollover | Next Rollover | Storage Location | Custodian |
|---|---|---|---|---|---|---|---|---|---|
| [zone.example.my] | KSK | [ECDSAP256SHA256] | [Tag] | [256-bit] | [Date] | [Date] | [Date] | [HSM / System] | [Name] |
| [zone.example.my] | ZSK | [ECDSAP256SHA256] | [Tag] | [256-bit] | [Date] | [Date] | [Date] | [HSM / System] | [Name] |

---

### Appendix D — DNS Security Compliance Checklist

*This checklist is intended for use during internal compliance reviews and self-assessments. It summarises the key mandatory controls from this standard.*

| # | Control | Section Reference | Compliant | Evidence / Notes | Reviewed By | Date |
|---|---|---|---|---|---|---|
| 1 | DNSSEC implemented on all NCII zones | §4.2 | [ ] Yes [ ] No [ ] Partial | | | |
| 2 | DNSSEC validation enabled on all internal resolvers | §4.3 | [ ] Yes [ ] No [ ] Partial | | | |
| 3 | KSK and ZSK rollover schedule documented and adhered to | §4.2 | [ ] Yes [ ] No [ ] Partial | | | |
| 4 | All mandatory DNS log fields captured | §5.2 | [ ] Yes [ ] No [ ] Partial | | | |
| 5 | DNS logs forwarded to SIEM in real-time | §5.4 | [ ] Yes [ ] No [ ] Partial | | | |
| 6 | Log retention meets minimum period | §5.3 | [ ] Yes [ ] No [ ] Partial | | | |
| 7 | DNS filtering enabled on all NCII resolvers | §6.2 | [ ] Yes [ ] No [ ] Partial | | | |
| 8 | Threat intelligence feeds updated at required frequency | §6.2 | [ ] Yes [ ] No [ ] Partial | | | |
| 9 | Sinkhole infrastructure operational and logging | §6.4 | [ ] Yes [ ] No [ ] Partial | | | |
| 10 | Split DNS implemented; internal zones not externally resolvable | §7.2 | [ ] Yes [ ] No [ ] Partial | | | |
| 11 | Zone transfers restricted by ACL and TSIG | §7.4 | [ ] Yes [ ] No [ ] Partial | | | |
| 12 | DNS tunnelling detection rules active in SIEM | §8.2 | [ ] Yes [ ] No [ ] Partial | | | |
| 13 | Minimum two authoritative servers per NCII zone | §9.3 | [ ] Yes [ ] No [ ] Partial | | | |
| 14 | Minimum two internal resolvers per NCII segment | §9.3 | [ ] Yes [ ] No [ ] Partial | | | |
| 15 | DNS DDoS mitigation in place for external authoritative DNS | §9.5 | [ ] Yes [ ] No [ ] Partial | | | |
| 16 | DNS failover tested within last [12 months] | §9.4 | [ ] Yes [ ] No [ ] Partial | | | |

---

### Appendix E — Glossary of DNS Record Types

*For reference by non-specialist staff completing DNS change requests or participating in compliance reviews.*

| Record Type | Full Name | Common Use |
|---|---|---|
| A | Address Record | Maps a hostname to an IPv4 address |
| AAAA | IPv6 Address Record | Maps a hostname to an IPv6 address |
| CNAME | Canonical Name Record | Creates an alias from one hostname to another |
| DS | Delegation Signer | Links a DNSSEC-signed child zone to its parent |
| MX | Mail Exchange Record | Specifies mail servers for a domain |
| NS | Name Server Record | Identifies authoritative name servers for a zone |
| NSEC3 | Next Secure Record v3 | Provides authenticated denial of existence in DNSSEC |
| PTR | Pointer Record | Reverse DNS lookup; maps IP to hostname |
| RRSIG | Resource Record Signature | DNSSEC cryptographic signature for a DNS record set |
| SOA | Start of Authority | Contains zone metadata and serial number |
| TXT | Text Record | Stores arbitrary text; used for SPF, DKIM, domain verification |

---

*End of Document*

---

**Document Classification: Confidential**
**[Organisation Name] | [Department] | Document ID: [Document ID] | Version 1.0**
*This document is the property of [Organisation Name]. Unauthorised disclosure, reproduction, or distribution is prohibited.*