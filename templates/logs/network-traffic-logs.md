# Network Traffic Logs

---

| Field | Details |
|---|---|
| **Document ID** | [Document ID] |
| **Version** | 1.0 |
| **Classification** | Confidential |
| **Owner** | Network Security |
| **Organization** | [Organization Name] |
| **Effective Date** | [Effective Date] |
| **Last Review Date** | [Last Review Date] |
| **Next Review Date** | [Next Review Date] |
| **Approved By** | [Approved By] |

---

## 1. Purpose and Scope

### 1.1 Purpose

This document establishes the requirements, structure, and governance framework for the collection, retention, and monitoring of **Network Traffic Logs** within [Organization Name]. Network Traffic Logs constitute a mandatory security control under the **Cyber Security Act 2024 (Act 854)**, specifically under **Section 18**, which mandates that designated National Critical Information Infrastructure (NCII) entities implement and maintain technical measures for the continuous monitoring and logging of network activities.

These logs serve as the primary evidentiary record of network behaviour across NCII-designated network zones and support incident detection, forensic investigation, regulatory reporting, and threat intelligence operations.

### 1.2 Scope

This document applies to:

- All network zones designated as NCII perimeters within [Organization Name]
- All ingress and egress network traffic traversing organizational boundaries
- All internal (east-west) traffic flows between network segments and security zones
- All network infrastructure devices including firewalls, routers, switches, proxies, and load balancers
- All personnel responsible for network security operations, log management, and incident response

### 1.3 Regulatory Basis

| Regulation | Section / Clause | Requirement Summary |
|---|---|---|
| Cyber Security Act 2024 (Act 854) | Section 18 | Mandatory implementation of cybersecurity measures for NCII entities, including continuous monitoring and logging of network activities |
| [Organization Name] Information Security Policy | [Policy Reference] | Internal policy alignment with Act 854 obligations |
| [Additional Framework, e.g., BNM RMiT] | [Clause Reference] | [Requirement Summary] |

---

## 2. Netflow Records

*This section documents the configuration parameters and data fields captured in Netflow/IPFIX records exported from network devices. Specify all active flow exporters, collectors, and the retention schedule for raw flow data.*

### 2.1 Flow Collection Architecture

| Component | Details |
|---|---|
| **Flow Protocol** | [NetFlow v9 / IPFIX / sFlow] |
| **Flow Exporters** | [List of devices: routers, firewalls, switches] |
| **Flow Collector** | [Collector Platform / SIEM Integration] |
| **Sampling Rate** | [e.g., 1:1 (full) / 1:1000 (sampled)] |
| **Export Interval** | [e.g., 60 seconds active timeout / 15 seconds idle timeout] |
| **Storage Location** | [Log Management Platform / SIEM / Cold Storage] |
| **Retention Period** | [Minimum 3 years recommended for NCII entities] |

### 2.2 Captured Flow Fields

*The following fields must be present in all exported Netflow records to satisfy forensic and regulatory requirements.*

| Field | Description | Mandatory |
|---|---|---|
| Source IP Address | IPv4/IPv6 source address | Yes |
| Destination IP Address | IPv4/IPv6 destination address | Yes |
| Source Port | Layer 4 source port number | Yes |
| Destination Port | Layer 4 destination port number | Yes |
| IP Protocol | TCP / UDP / ICMP / other | Yes |
| Bytes Transferred | Total bytes in flow | Yes |
| Packets Transferred | Total packets in flow | Yes |
| Flow Start Timestamp | UTC timestamp of first packet | Yes |
| Flow End Timestamp | UTC timestamp of last packet | Yes |
| Input Interface | Ingress interface identifier | Yes |
| Output Interface | Egress interface identifier | Yes |
| TCP Flags | SYN, ACK, FIN, RST, PSH, URG | Recommended |
| VLAN ID | VLAN tag for segmented networks | Recommended |
| Next-Hop IP | Next routing hop address | Recommended |
| AS Number (BGP) | Source/Destination autonomous system | Optional |

### 2.3 Flow Data Volume Baseline

*Document expected daily flow volumes to enable anomaly detection against established baselines.*

| Network Zone | Average Daily Flows | Average Daily Volume (GB) | Peak Period | Baseline Established Date |
|---|---|---|---|---|
| [Internet Perimeter] | [Number] | [GB] | [Time Window] | [Date] |
| [DMZ Zone] | [Number] | [GB] | [Time Window] | [Date] |
| [Internal Core] | [Number] | [GB] | [Time Window] | [Date] |
| [Data Centre / Server Farm] | [Number] | [GB] | [Time Window] | [Date] |
| [OT/ICS Zone, if applicable] | [Number] | [GB] | [Time Window] | [Date] |

---

## 3. Connection Metadata

*This section defines the additional contextual metadata that must be captured alongside raw Netflow records to enrich investigations and enable behavioural analysis. Metadata enrichment sources should be integrated with the SIEM or log management platform.*

### 3.1 DNS Resolution Records

| Field | Description | Retention |
|---|---|---|
| Query Timestamp | UTC time of DNS query | [Retention Period] |
| Client IP | IP of the requesting host | [Retention Period] |
| Queried Domain | Fully qualified domain name (FQDN) | [Retention Period] |
| Response Code | NOERROR, NXDOMAIN, SERVFAIL, etc. | [Retention Period] |
| Resolved IP(s) | Returned A/AAAA records | [Retention Period] |
| Query Type | A, AAAA, MX, TXT, PTR, CNAME, etc. | [Retention Period] |
| DNS Server | Resolver handling the query | [Retention Period] |

### 3.2 Session and Application Metadata

| Field | Description | Source |
|---|---|---|
| Application Protocol | HTTP, HTTPS, FTP, SSH, RDP, SMB, etc. | [Firewall / DPI / Proxy] |
| HTTP Method | GET, POST, PUT, DELETE (for HTTP flows) | [Web Proxy / WAF] |
| URL / URI | Full request URI for web sessions | [Web Proxy] |
| User-Agent String | Browser or client application identifier | [Web Proxy] |
| TLS Version | TLS 1.0 / 1.1 / 1.2 / 1.3 | [Firewall / SSL Inspection] |
| TLS Certificate CN | Subject of presented TLS certificate | [SSL Inspection Appliance] |
| JA3/JA3S Hash | TLS fingerprint for client/server | [IDS / NDR Platform] |
| HTTP Response Code | 200, 403, 404, 500, etc. | [Web Proxy / WAF] |
| Bytes Sent / Received | Payload size in each direction | [Firewall / Proxy] |

### 3.3 Asset and Identity Enrichment

*Connection metadata should be enriched with asset inventory and identity data where available to accelerate triage.*

| Enrichment Source | Fields Added | Integration Method |
|---|---|---|
| [Asset Management Platform] | Hostname, Asset Class, Business Owner | [API / Syslog Feed] |
| [Active Directory / LDAP] | Authenticated Username, Department, Role | [SIEM Lookup] |
| [DHCP Server] | IP-to-Hostname mapping, Lease timestamps | [DHCP Log Ingestion] |
| [Threat Intelligence Platform] | IP/Domain reputation, Threat tags | [TIP API Integration] |
| [GeoIP Database] | Country, ASN, Organisation | [SIEM Enrichment] |

---

## 4. Anomalous Traffic Detection

*This section documents the detection logic, thresholds, and alerting rules configured to identify network traffic patterns that deviate from established baselines. All rules must be reviewed quarterly and tuned to minimise false positives while maintaining detection efficacy.*

### 4.1 Detection Rule Inventory

*Maintain a living inventory of active detection rules. Each rule must have a documented owner, tuning history, and associated incident response runbook.*

| Rule ID | Rule Name | Detection Logic Summary | Severity | MITRE ATT&CK Technique | Status | Last Tuned |
|---|---|---|---|---|---|---|
| [NTL-001] | [Port Scan Detection] | [>100 unique destination ports from single source in 60s] | [High] | [T1046 – Network Service Discovery] | [Active] | [Date] |
| [NTL-002] | [Unusual Protocol on Standard Port] | [Non-HTTP traffic on TCP/80] | [Medium] | [T1571 – Non-Standard Port] | [Active] | [Date] |
| [NTL-003] | [Large Outbound Data Transfer] | [Single flow >500MB to external IP] | [High] | [T1048 – Exfiltration Over Alternative Protocol] | [Active] | [Date] |
| [NTL-004] | [Internal-to-Internal Lateral Scan] | [>50 unique internal IPs contacted in 5 min] | [High] | [T1018 – Remote System Discovery] | [Active] | [Date] |
| [NTL-005] | [Connection to Tor Exit Node] | [IP matches Tor exit node threat feed] | [Critical] | [T1090.003 – Multi-hop Proxy] | [Active] | [Date] |
| [Rule ID] | [Rule Name] | [Detection Logic] | [Severity] | [Technique ID] | [Active/Disabled] | [Date] |

### 4.2 Anomaly Detection Thresholds

| Metric | Baseline Value | Alert Threshold | Critical Threshold | Review Frequency |
|---|---|---|---|---|
| Outbound connections per host per hour | [Baseline] | [Threshold] | [Threshold] | Quarterly |
| Unique external IPs contacted per host per day | [Baseline] | [Threshold] | [Threshold] | Quarterly |
| DNS queries per host per hour | [Baseline] | [Threshold] | [Threshold] | Quarterly |
| ICMP traffic volume (bytes/hour) | [Baseline] | [Threshold] | [Threshold] | Quarterly |
| Failed connection attempts per source per minute | [Baseline] | [Threshold] | [Threshold] | Quarterly |

### 4.3 Alert Escalation Matrix

| Severity | Initial Response SLA | Escalation Path | Notification Method |
|---|---|---|---|
| Critical | 15 minutes | SOC Analyst → SOC Lead → CISO | Automated alert + Phone |
| High | 1 hour | SOC Analyst → SOC Lead | Automated alert + SMS |
| Medium | 4 hours | SOC Analyst | Automated alert + Email |
| Low | Next business day | SOC Analyst | Ticket queue |

---

## 5. C2 Beaconing Detection

*This section documents detection capabilities specifically targeting Command and Control (C2) communication patterns. C2 beaconing represents a high-priority indicator of compromise (IoC) and must trigger immediate investigation. Detection logic must account for both periodic beaconing and jittered/randomised intervals used by advanced threat actors.*

### 5.1 Beaconing Detection Methodology

*Document the technical approach used to identify beaconing patterns in network traffic. Specify the tools, algorithms, and data sources used.*

| Detection Method | Description | Tool / Platform | Coverage |
|---|---|---|---|
| [Statistical Frequency Analysis] | [Identifies flows with regular intervals within ±variance threshold] | [NDR Platform / SIEM] | [Deployed / Planned] |
| [JA3/JA3S Fingerprint Matching] | [Matches TLS fingerprints against known C2 malware signatures] | [IDS / NDR] | [Deployed / Planned] |
| [DNS Beaconing Detection] | [Identifies high-frequency DNS queries to same domain with low TTL] | [DNS Security / SIEM] | [Deployed / Planned] |
| [Domain Generation Algorithm (DGA) Detection] | [ML-based identification of algorithmically generated domains] | [DNS Security / ML Model] | [Deployed / Planned] |
| [Threat Intelligence Feed Matching] | [Correlates flows against known C2 IP/domain indicators] | [TIP / SIEM] | [Deployed / Planned] |
| [Long Connection Detection] | [Flags persistent low-bandwidth sessions exceeding threshold duration] | [Netflow Analyser] | [Deployed / Planned] |

### 5.2 Beaconing Indicators of Compromise

*Maintain a record of confirmed C2 patterns observed in this environment or sourced from threat intelligence relevant to the financial sector.*

| Indicator Type | Value / Pattern | Confidence | Source | Date Added | Associated Malware / Actor |
|---|---|---|---|---|---|
| [IP Address] | [Indicator Value] | [High/Medium/Low] | [TIP / NACSA Advisory / Internal] | [Date] | [Malware Family / Threat Group] |
| [Domain] | [Indicator Value] | [High/Medium/Low] | [Source] | [Date] | [Malware Family / Threat Group] |
| [JA3 Hash] | [Indicator Value] | [High/Medium/Low] | [Source] | [Date] | [Malware Family / Threat Group] |
| [URL Pattern] | [Indicator Value] | [High/Medium/Low] | [Source] | [Date] | [Malware Family / Threat Group] |

### 5.3 C2 Beaconing Alert Response Procedure

- **Step 1:** Automated alert generated by SIEM/NDR upon detection of beaconing pattern
- **Step 2:** SOC Analyst validates alert against threat intelligence and false positive history
- **Step 3:** Affected host(s) isolated from network pending investigation (automated or manual per playbook [Reference Playbook ID])
- **Step 4:** Forensic collection initiated — memory dump, process list, network connections
- **Step 5:** Incident declared and NACSA notified per Act 854 Section 18 reporting obligations if confirmed
- **Step 6:** Indicators shared with threat intelligence platform and sector-sharing community (FinTECH-ISAC / [Relevant ISAC])

---

## 6. Data Exfiltration Indicators

*This section documents the technical controls and detection logic used to identify potential data exfiltration activity through network traffic analysis. Exfiltration detection complements DLP controls by focusing on volumetric, behavioural, and protocol-based indicators visible at the network layer.*

### 6.1 Exfiltration Detection Controls

| Control | Detection Capability | Platform | Status |
|---|---|---|---|
| [Volumetric Threshold Alerting] | [Large outbound transfers exceeding baseline] | [SIEM / Firewall] | [Active / Planned] |
| [Unusual Port Exfiltration] | [Data transfer over non-standard or tunnelling protocols] | [IDS / Firewall] | [Active / Planned] |
| [DNS Tunnelling Detection] | [Exfiltration encoded within DNS query strings] | [DNS Security Platform] | [Active / Planned] |
| [HTTPS Payload Inspection] | [Anomalous upload volumes to unknown cloud services] | [SSL Inspection / CASB] | [Active / Planned] |
| [ICMP Covert Channel Detection] | [Data encoded within ICMP payload fields] | [IDS / NDR] | [Active / Planned] |
| [Scheduled Upload Detection] | [Recurring outbound transfers at off-hours to same destination] | [SIEM Correlation] | [Active / Planned] |

### 6.2 High-Risk Exfiltration Destinations

*Maintain awareness of destination categories that represent elevated exfiltration risk. Block or monitor as appropriate per data classification policy.*

| Destination Category | Risk Level | Control Applied | Exceptions Process |
|---|---|---|---|
| Personal cloud storage (Dropbox, Google Drive, etc.) | High | [Block / Monitor] | [Approval process] |
| File sharing / paste sites (Pastebin, etc.) | High | [Block / Monitor] | [Approval process] |
| Anonymisation networks (Tor, VPN exit nodes) | Critical | [Block] | [None / CISO approval] |
| Newly registered domains (<30 days) | High | [Monitor / Block] | [Approval process] |
| Geographies under sanctions or elevated risk | High | [Monitor / Block] | [Legal and CISO approval] |
| Unknown / uncategorised external IPs | Medium | [Monitor] | [Standard SOC review] |

### 6.3 Exfiltration Volume Thresholds

| Data Classification | Outbound Volume Alert Threshold | Time Window | Escalation |
|---|---|---|---|
| [Confidential / Customer Data] | [Threshold, e.g., 100MB] | [Per session / Per hour] | [Immediate — Critical] |
| [Internal / Restricted] | [Threshold] | [Per session / Per hour] | [High] |
| [Public / Unclassified] | [Threshold] | [Per day] | [Medium] |

---

## 7. East-West Traffic Monitoring

*This section documents the monitoring strategy for lateral (internal) network traffic between network segments, zones, and hosts. East-west traffic monitoring is critical for detecting lateral movement, privilege escalation, and insider threats that do not traverse the perimeter. This is particularly important for NCII-designated network zones under Act 854 Section 18.*

### 7.1 Internal Network Segmentation Map

*Document the network zones and trust boundaries relevant to east-west monitoring. Maintain alignment with the Network Architecture diagram [Reference Document ID].*

| Zone Name | Zone Classification | Permitted Inbound Sources | Permitted Outbound Destinations | Monitoring Level |
|---|---|---|---|---|
| [Internet DMZ] | [Untrusted / Semi-Trusted] | [Internet] | [Internal App Zone] | [Full Netflow + IDS] |
| [Application Zone] | [Internal Trusted] | [DMZ / User Zone] | [Database Zone] | [Full Netflow + IDS] |
| [Database Zone] | [Restricted] | [Application Zone only] | [None / Backup Zone] | [Full Netflow + Deep Inspection] |
| [Management Zone] | [Highly Restricted] | [Approved Admin IPs only] | [All internal zones] | [Full Netflow + Session Recording] |
| [User / Endpoint Zone] | [Internal Trusted] | [Authentication servers] | [Application Zone / Internet via Proxy] | [Sampled Netflow + Endpoint Agent] |
| [OT / ICS Zone] | [Air-gapped / Isolated] | [None / Historian only] | [None] | [Full Netflow + Unidirectional Gateway] |

### 7.2 Lateral Movement Detection Rules

| Rule ID | Scenario | Detection Logic | Severity | MITRE Technique |
|---|---|---|---|---|
| [EW-001] | [Workstation-to-Workstation SMB] | [SMB (TCP/445) flow between two endpoint-class assets] | [High] | [T1021.002 – SMB/Windows Admin Shares] |
| [EW-002] | [Direct Database Access from Non-App Tier] | [TCP/1433 or TCP/3306 from non-application-zone source] | [Critical] | [T1078 – Valid Accounts] |
| [EW-003] | [Mass Internal Ping Sweep] | [ICMP echo to >50 hosts from single source in 60s] | [High] | [T1018 – Remote System Discovery] |
| [EW-004] | [RDP Traversal Across Zones] | [RDP (TCP/3389) crossing zone boundary without jump server] | [Critical] | [T1021.001 – Remote Desktop Protocol] |
| [EW-005] | [Kerberoasting Indicators] | [Unusual volume of TGS requests for service accounts] | [High] | [T1558.003 – Kerberoasting] |
| [Rule ID] | [Scenario] | [Detection Logic] | [Severity] | [Technique] |

### 7.3 East-West Monitoring Coverage Assessment

*Conduct quarterly reviews of east-west monitoring coverage and document any blind spots requiring remediation.*

| Assessment Date | Zone Coverage (%) | Blind Spots Identified | Remediation Action | Remediation Target Date | Assessed By |
|---|---|---|---|---|---|
| [Date] | [%] | [Description] | [Action] | [Date] | [Name] |

---

## 8. Roles and Responsibilities

*The following RACI matrix defines accountability for Network Traffic Log governance, operations, and oversight. R = Responsible, A = Accountable, C = Consulted, I = Informed.*

| Activity | CISO | Network Security Team | SOC / Threat Detection | IT Infrastructure | Data Protection Officer | Internal Audit | Senior Management |
|---|---|---|---|---|---|---|---|
| Define logging requirements and policy | A | R | C | C | C | I | I |
| Configure and maintain flow exporters | I | R | C | A | I | I | I |
| Operate SIEM / log collection platform | I | C | R | A | I | I | I |
| Develop and tune detection rules | C | R | A | I | I | C | I |
| Monitor alerts and investigate anomalies | I | C | R | I | I | I | I |
| Manage log retention and archival | A | C | C | R | C | I | I |
| Review and approve detection rule changes | A | R | R | I | I | C | I |
| Conduct periodic coverage assessments | A | R | C | C | I | R | I |
| Report incidents under Act 854 s18 | A | C | R | I | C | I | R |
| Review this document (annual) | A | R | C | I | C | C | I |
| Approve this document | A | I | I | I | I | I | R |

---

## 9. Log Retention and Integrity

### 9.1 Retention Schedule

| Log Type | Minimum Retention | Recommended Retention | Storage Tier | Encryption Required | Integrity Mechanism |
|---|---|---|---|---|---|
| Raw Netflow / IPFIX records | 1 year | 3 years | [Hot / Warm / Cold] | Yes | [Hash chaining / WORM storage] |
| DNS query logs | 1 year | 3 years | [Hot / Warm] | Yes | [Hash chaining] |
| Firewall connection logs | 1 year | 3 years | [Hot / Warm] | Yes | [Hash chaining] |
| IDS/IPS alert logs | 3 years | 5 years | [Hot / Warm] | Yes | [Hash chaining / Immutable storage] |
| Security alert / incident logs | 5 years | 7 years | [Warm / Cold] | Yes | [Immutable storage / Signed records] |
| NDR session records | 1 year | 3 years | [Hot / Warm] | Yes | [Hash chaining] |

### 9.2 Log Integrity Controls

- **Tamper-evident storage:** All log data must be stored in WORM (Write Once Read Many) compliant storage or cryptographically signed to ensure integrity
- **Access controls:** Log data must be accessible only to authorised SOC and security personnel; administrative access to log storage must require dual authorisation
- **Audit trail:** All access to log data — including queries, exports, and deletions — must itself be logged in a separate, protected audit trail
- **Time synchronisation:** All log-generating devices must synchronise to a common NTP source to ensure consistent timestamps across log sources
- **NTP Source:** [NTP Server Address / Stratum 1 Source]
- **Time Zone Standard:** UTC (all logs must be stored in UTC regardless of device local time)

---

## 10. Review and Approval

### 10.1 Version History

| Version | Date | Author | Changes |
|---|---|---|---|
| 1.0 | [Date] | [Author Name], Network Security | Initial document creation |
| [Version] | [Date] | [Author Name] | [Description of changes] |

### 10.2 Document Review Schedule

| Review Type | Frequency | Trigger Conditions |
|---|---|---|
| Scheduled Review | Annual | Calendar-based review of all content |
| Triggered Review | As required | Significant network architecture change, new regulatory guidance, major security incident, or material change in threat landscape |
| Detection Rule Review | Quarterly | Review and tuning of all active detection rules and thresholds |

### 10.3 Approval Sign-Off

| Role | Name | Signature | Date |
|---|---|---|---|
| Head of Network Security | [Name] | | [Date] |
| Chief Information Security Officer (CISO) | [Name] | | [Date] |
| Chief Information Officer (CIO) / Head of IT | [Name] | | [Date] |
| Data Protection Officer (DPO) | [Name] | | [Date] |
| Senior Management Representative | [Name] | | [Date] |

---

## 11. References

| Reference | Document / Regulation | Specific Clause | Relevance to This Document |
|---|---|---|---|
| [1] | Cyber Security Act 2024 (Act 854) | Section 18 | Mandatory cybersecurity measures for NCII entities, including continuous network monitoring and logging |
| [2] | [BNM Risk Management in Technology (RMiT)] | [Clause Reference, e.g., 10.27–10.29] | [Technology risk management and security monitoring requirements] |
| [3] | [NACSA National Cyber Security Policy] | [Reference] | [National cybersecurity framework obligations] |
| [4] | [Organization Name] Information Security Policy | [Policy Reference] | Internal policy framework governing security controls |
| [5] | [Organization Name] Incident Response Plan | [IR-DOC-XXX] | Escalation and response procedures for network security events |
| [6] | [Organization Name] Network Architecture Document | [NET-ARCH-XXX] | Network zone definitions and segmentation design |
| [7] | MITRE ATT&CK Framework | Enterprise v14+ | Threat technique mapping for detection rules |
| [8] | NIST SP 800-92 | Guide to Computer Security Log Management | Log management best practice reference |

---

## 12. Appendices

### Appendix A: Network Zone Topology Diagram

*Insert or reference the current network topology diagram showing all NCII-designated zones, trust boundaries, monitoring sensor placement, and traffic flow directions. The diagram should be version-controlled and maintained by [Network Architecture Team].*

**Reference:** [Diagram stored at: /[path/to/diagram] or [Document Management System Reference]]

---

### Appendix B: SIEM Detection Rule Catalogue

*A full catalogue of detection rules, correlation searches, and alert configurations referenced in Section 4, Section 5, and Section 7 of this document. Rules should be exported from the SIEM and attached as a controlled annex.*

**Reference:** [SIEM Rule Export — [Platform Name] — Version [X.X] — [Date]]

---

### Appendix C: Threat Intelligence Feed Inventory

*A current inventory of threat intelligence feeds integrated with the SIEM and network monitoring platform. Includes feed provider, data type, update frequency, and licence information.*

| Feed Name | Provider | Data Type | Update Frequency | Integration Method | Licence Expiry |
|---|---|---|---|---|---|
| [Feed Name] | [Provider] | [IP/Domain/Hash/STIX] | [Hourly/Daily] | [API / TAXII / STIX] | [Date] |

---

### Appendix D: Incident Notification Template — Act 854 Section 18

*Template for notifying NACSA of a cybersecurity incident detected through network traffic monitoring, in accordance with the reporting obligations under Act 854 Section 18.*

| Field | Content |
|---|---|
| **Reporting Organisation** | [Organization Name] |
| **Incident Reference** | [Internal Incident ID] |
| **Date and Time of Detection** | [UTC Timestamp] |
| **Date and Time of Notification** | [UTC Timestamp] |
| **Nature of Incident** | [Brief description: C2 beaconing / Data exfiltration / Lateral movement / Other] |
| **Affected Systems / Zones** | [Description of affected NCII components] |
| **Impact Assessment** | [Actual or potential impact on NCII operations] |
| **Initial Containment Measures** | [Actions taken at time of notification] |
| **Contact Person** | [Name, Role, Phone, Email] |

---

### Appendix E: Glossary

| Term | Definition |
|---|---|
| NCII | National Critical Information Infrastructure — systems whose disruption would severely impact national security, economy, public safety, or essential services, as designated under Act 854 |
| Netflow | A network protocol developed by Cisco for collecting IP network traffic metadata as it enters or exits an interface |
| IPFIX | IP Flow Information Export — the IETF standard (RFC 7011) based on Netflow v9 |
| C2 / Command and Control | Infrastructure used by threat actors to communicate with and direct malware or compromised systems |
| East-West Traffic | Network traffic flowing laterally between internal systems within an organisation, as opposed to North-South traffic traversing the perimeter |
| SIEM | Security Information and Event Management — a platform that aggregates, correlates, and analyses log and event data |
| NDR | Network Detection and Response — a security solution that monitors network traffic for threats using behavioural analytics |
| DGA | Domain Generation Algorithm — a technique used by malware to generate large numbers of domain names for C2 communication |
| JA3 | A method of fingerprinting TLS client-hello messages to identify specific client applications or malware families |
| MITRE ATT&CK | A globally accessible knowledge base of adversary tactics and techniques based on real-world observations |
| RACI | Responsible, Accountable, Consulted, Informed — a responsibility assignment framework |
| WORM | Write Once Read Many — a storage paradigm ensuring data cannot be modified or deleted after being written |
| TIP | Threat Intelligence Platform — a system for aggregating, normalising, and operationalising threat intelligence data |

---

*This document is classified **Confidential** and is intended solely for authorised personnel of [Organization Name]. Unauthorised disclosure is prohibited. For queries regarding this document, contact [Network Security Team Contact / security@[organization-domain]].*

*Document ID: [Document ID] | Version: 1.0 | © [Year] [Organization Name]. All rights reserved.*