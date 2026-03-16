# NACSA Act 854 Explorer

Interactive structured compliance database for Malaysia's **Cyber Security Act 2024 (Act 854)** — browse provisions, NCII sectors, requirements, evidence guidance, controls, artifacts, penalties, supplements, and cross-references. Features dark mode (automatic via `prefers-color-scheme`), favicon, 120 document templates, risk management framework, and an **Audit Package** on each control detail view linking controls to their required artifacts and evidence items.
> **Disclaimer**: This is an indicative/educational resource. It does not constitute legal advice. Always refer to the official gazette text and seek professional counsel for compliance decisions. See [LEARNINGS.md](LEARNINGS.md) for data quality audit history.

## Technical Architecture

This repository follows the **GRC Portfolio v2.0 Standardized Schema**, optimized for machine-readability and dynamic SPA rendering.

### The Compliance Chain
Data is structured to maintain a strict bidirectional mapping:
`Cyber Security Act (Act 854) Section` $\leftrightarrow$ `NCII Global Control` $\leftrightarrow$ `Audit Evidence` $\leftrightarrow$ `Artifact Template`

> **Control structure context**: The primary control structure is the CoP Template (18 domains, 4.0-21.0) issued under s22 of Act 854. The NCSB v1.4 (15 categories, 33 elements, ~122 sub-requirements) serves as the baseline test criteria. The 53 controls in `library.json` are an earlier indicative mapping that predates the CoP alignment; see the [Tech-Audit/NACSA audit work program](../Tech-Audit/NACSA/) for the fieldwork-ready structure aligned to the CoP and NCSB.

### Data Layers
- **Controls (`/controls/library.json`):** 53 controls re-aligned to Act 854 (specifically s26 incident notification) using the unified schema.
- **Evidence (`/evidence/index.json`):** 116 items mapped across 56 sections, bound to 11 sectoral Codes of Practice (COP).
- **Templates (`/templates/`):** 120 Markdown artifacts including NCII-specific reporting forms.

### Consistency & Style
- **Naming:** Kebab-case slugs; verified 11 NCII sectors (STI replaces Education).
- **Scoring:** Standardized 5x5 Likelihood/Impact risk matrix.
- **Audit Ready:** Penalty mapping verified against the 2024 Compounding Regulations.

## About Act 854
> **⚠ Data Reliability Notice — Read Before Using for Compliance Purposes**
>
> This database contains two categories of data with materially different reliability:
>
> **Verified data** (provisions, penalties, sector definitions): Derived from Act 854 (gazetted 26 June 2024) and the four subsidiary regulations P.U.(A) 219–222/2024. Section numbers, penalty amounts, and statutory thresholds in these files are cross-referenced against the official gazette text. Specific penalty figures or section references flagged with `verificationStatus` fields require further gazette verification before being relied upon.
>
> **Constructed-indicative data** (Chief Executive Directives and Codes of Practice in `supplements/directives/` and `supplements/codes-of-practice/`): These instruments are constructed representations of what such instruments might contain based on the powers in Act 854. They have **not** been verified against any officially published gazette or NACSA instrument. Specific figures, thresholds, timelines, and procedural requirements within these files **must not** be relied upon for compliance without independent verification against official NACSA publications. All files in these directories carry `"sourceType": "constructed-indicative"` and a `verificationStatus` warning.
>
> Where conflicts exist between a constructed directive and a verified regulation, the regulation prevails. Known conflicts are documented in `verificationStatus` and `auditNote` fields within the affected files.

## Live Site

**[Browse the Explorer →](https://dawuds.github.io/nacsa/)**

## About Act 854

The Cyber Security Act 2024 (Act 854) was gazetted on 26 June 2024 and came into force on 26 August 2024. It establishes the National Cyber Security Agency (NACSA) as the lead agency for cybersecurity in Malaysia, defines **National Critical Information Infrastructure (NCII)** across 11 sectors, and mandates cybersecurity risk assessments, audits, incident notification, and licensing of cybersecurity service providers.

### Key Features
- **11 NCII Sectors**: Government, Banking & Finance, Transport, Defence & National Security, ICT, Healthcare, Water & Sewerage, Energy, Agriculture & Plantation, Trade/Industry/Economy, Science/Technology/Innovation
- **6-hour incident notification** window for cyber security incidents with **significant impact** (as defined in P.U.(A) 220/2024, reg 3); not all incidents trigger the 6-hour obligation
- **Mandatory risk assessments** and **cyber security audits** for NCII entities
- **Licensing regime** for cybersecurity service providers (5 service classes)
- **Body corporate liability** with 10x fine multiplier (s52)

## Data Architecture

The database follows a 9-layer structured compliance model plus supplements:

```
nacsa/
├── LICENSE                  # CC-BY-4.0 license
├── LEARNINGS.md             # Data quality audit findings and lessons
├── TODO.md                  # Completed and pending feature tracking
├── validate.js              # Data integrity checks (run: node validate.js)
├── provisions/              # Act 854 sections (9 parts, ~64 sections)
│   ├── parts.json           # Part structure with divisions
│   ├── index.json           # All sections with verbatim text & translations
│   └── by-part/             # Per-part section files
├── sectors/                 # 11 NCII sectors with obligations
│   └── index.json
├── requirements/            # Legal/Technical/Governance requirements
│   ├── index.json           # Keyed by sectionId
│   └── by-part/             # Per-part requirement files
├── evidence/                # Auditor focus & evidence guidance
│   └── index.json
├── artifacts/               # 120 compliance documents across 6 categories
│   ├── inventory.json       # Policies, procedures, standards, registers, reports, logs
│   └── section-map.json     # Bidirectional section ↔ artifact mapping
├── controls/                # 53 security controls across 15 domains
│   ├── domains.json         # Control domain definitions
│   ├── library.json         # Controls with framework mappings
│   └── section-map.json     # Section ↔ control mapping
├── penalties/               # 20 penalty provisions
│   └── index.json
├── cross-references/        # Framework & regulatory mappings
│   ├── framework-mappings.json    # NIST CSF 2.0, ISO 27001, RMiT, PDPA, CIS Controls
│   ├── act-to-regulations.json
│   ├── act-to-directives.json
│   └── ncii-sector-mappings.json  # Sector regulatory overlap matrix
├── risk-management/         # NCII risk assessment methodology & register
│   ├── methodology.json     # 5x5 matrix methodology, scales, assessment process
│   ├── risk-matrix.json     # Risk matrix with bands & required actions
│   ├── risk-register.json   # 20 NCII-specific risks with controls & treatment
│   ├── checklist.json       # 18-item assessment checklist across 5 phases
│   └── treatment-options.json # 4 treatment strategies with NCII examples
├── supplements/             # Subsidiary instruments
│   ├── regulations/         # 4 subsidiary regulations (P.U.(A) 219-222/2024)
│   ├── directives/          # 10 Chief Executive directives
│   └── codes-of-practice/   # 11 sector-specific codes of practice
├── templates/               # 120 document templates across 6 categories
│   ├── policies/            # 20 policy templates
│   ├── procedures/          # 20 procedure templates
│   ├── standards/           # 20 standards templates
│   ├── registers/           # 20 register templates
│   ├── reports/             # 20 report templates
│   └── logs/                # 20 log templates
├── index.html               # Static browsing site
├── style.css
└── app.js
```

### File Counts

| Layer | Files | Description |
|-------|-------|-------------|
| Provisions | 11 | parts.json + index.json + 9 by-part files |
| Sectors | 1 | 11 NCII sectors with obligations |
| Requirements | 7 | index.json + 6 by-part files (46 sections) |
| Evidence | 1 | 116 evidence items across 56 sections |
| Artifacts | 2 | 120 artifacts + section map |
| Controls | 3 | 15 domains, 53 controls + section map |
| Penalties | 1 | 20 penalty provisions |
| Cross-references | 4 | Framework mappings + regulatory mappings |
| Risk Management | 5 | Methodology, risk matrix, 20-risk register, checklist, treatment options |
| Supplements | 28 | 4 regulations + 10 directives + 11 CoPs + 3 indexes |
| Templates | 120 | 20 each: policies, procedures, standards, registers, reports, logs |
| Static site | 3 | HTML + CSS + JS |
| **Total** | **185** | |

## Static Site

The Explorer is a vanilla HTML/CSS/JS single-page application with:

- **Hash-based routing**: `#`, `#part/IV`, `#s17`, `#sectors`, `#sector/banking-finance`, `#penalties`, `#controls`, `#control/slug`, `#artifacts`, `#supplements`, `#cross-references`, `#framework/nist-csf`, `#risk-management`, `#search/keyword`
- **Lazy-loaded tabs**: Requirements, evidence, controls, artifacts, and cross-references load on demand
- **Full-text search** across provisions, sectors, penalties, and supplements
- **Dark mode**: Automatic via `prefers-color-scheme` media query
- **Responsive design**: Mobile, tablet, and desktop breakpoints
- **Templates browser**: 120 document templates across 6 categories with search and category filtering
- **Audit Package**: Control detail views show linked artifacts and evidence items
- **No build step**: Serve directly with any static file server

### Local Development

```bash
cd nacsa
python3 -m http.server 8889
```

## Framework Cross-References

The database maps Act 854 provisions to:

| Framework | Mappings | Coverage |
|-----------|----------|----------|
| NIST CSF 2.0 | 21 | Govern, Identify, Protect, Detect, Respond, Recover |
| ISO 27001:2022 | 15 | Annex A controls |
| BNM RMiT | 7 | Banking sector technology risk |
| PDPA (Act 709) | 4 | Personal data protection overlap |
| CIS Controls v8 | 7 | Implementation groups |

## Risk Management

The Risk Management section provides NCII operators with a structured risk assessment framework under Act 854:

- **Methodology**: 5x5 likelihood-impact risk assessment methodology with NCII-specific scales (national security impact, essential service disruption, data compromise, NACSA regulatory consequences), 7-phase assessment process, and annual review cycle with triggered reassessment
- **Risk Matrix**: Color-coded 5x5 matrix with four risk bands (Low/Medium/High/Critical), each with required actions, NACSA reporting obligations, and response timeframes
- **Risk Register**: 20 illustrative risks across 7 categories (NCII Threat, Compliance, Supply Chain, Insider Threat, Operational, Sector-Specific, Incident Response) with inherent/residual ratings, existing controls, and treatment plans
- **Assessment Checklist**: 18 items across 5 phases (Preparation, Risk Identification, Risk Analysis, Risk Treatment, Reporting & Monitoring) with Act 854 section references
- **Treatment Options**: Four strategies (Mitigate, Transfer, Accept, Avoid) with NCII-specific examples and regulatory constraints (e.g., Critical risk acceptance requires NACSA acknowledgement)

> All risk management data carries `sourceType: "constructed-indicative"` and must be tailored to each entity's specific context.

## Supplements

### Regulations (4)
- P.U.(A) 219/2024 — Risk Assessment and Audit
- P.U.(A) 220/2024 — Notification of Cyber Security Incident
- P.U.(A) 221/2024 — Licensing of Cyber Security Service Providers
- P.U.(A) 222/2024 — Compounding of Offences

### Chief Executive Directives (10)
Issued under s15, covering NCII registration, risk assessment methodology, audit standards, incident notification, information sharing, service provider obligations, CoP development, vulnerability disclosure, threat intelligence sharing, and NCII asset categorization.

### Codes of Practice (11)
Sector-specific CoPs under s22, with varying status: published (Banking & Finance), template issued (Government, ICT, Energy), draft (Transport, Defence, Healthcare, Water & Sewerage), pending (Trade/Industry/Economy, Agriculture, Science & Technology).

## Audit Methodology

The NACSA cyber security audit framework is defined by **CE Directive 08** (Arahan Ketua Eksekutif No. 8), effective 17 July 2025, issued under s15 of Act 854. The framework prescribes six audit approaches:

**Mandatory approaches** (required for every NCII entity audit):
- **Compliance-Based** — assessing conformity against the CoP and NCSB baseline
- **Risk-Based** — evaluating adequacy of risk identification, assessment, and treatment

**Optional approaches** (elected per engagement letter):
- **Control-Based** — testing design and operating effectiveness of specific controls
- **Technical Testing** — vulnerability assessments, penetration testing, configuration reviews
- **Inspection & Verification** — physical inspection of infrastructure and facilities
- **Continuous Improvement** — evaluating maturity progression and remediation tracking

### Compliance Ratings

| Rating | Malay Term |
| :--- | :--- |
| Compliant | Patuh |
| Partially Compliant | Separa Patuh |
| Non-Compliant | Tidak Patuh |
| Not Applicable | Tidak Berkenaan |

### Finding Severity

| Severity | Malay Term |
| :--- | :--- |
| Critical | Kritikal |
| High | Tinggi |
| Medium | Sederhana |
| Low | Rendah |

The complete audit work program with detailed procedures for all 18 CoP domains is maintained at `Tech-Audit/NACSA/`. For rating definitions, aggregation logic, and conclusion (rumusan) requirements, see [Tech-Audit/NACSA/Work-Program/Rating-and-Conclusion-Methodology.md](../Tech-Audit/NACSA/Work-Program/Rating-and-Conclusion-Methodology.md).

## License

This repository contains structured compliance data derived from publicly available Malaysian legislation. The data is provided for educational and informational purposes only.
