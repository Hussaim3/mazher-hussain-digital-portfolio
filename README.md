# Mazher Hussain — QA Project Lab & Executive Portfolio

> **Interactive Portfolio Demo & Technical Handover**  
> **Portfolio Owner:** Mazher Hussain (Test Manager | QA Delivery Lead | Test Lead)  
> **Location:** Wellington, New Zealand  
> **Specification Version:** 1.0 (November 2026)  
> **Hosting Target:** GitHub Pages / Static Web Server

---

## 1. Overview & Product Vision

This repository contains the interactive portfolio and **QA Project Lab** for **Mazher Hussain**. It presents sanitised demonstrations of enterprise QA delivery methods across:
- **Payment Assurance:** E2E payment gateways, asynchronous callbacks, and ledger reconciliation.
- **Data Migration Assurance:** Source-to-target SQL reconciliation and schema transformation auditing.
- **Release Readiness Governance:** Executive Go/No-Go decision rules and quality gate evaluation.
- **Card Security & Multilingual Assurance:** EMV 3DS 2.0 challenge flow simulations in English and Simplified Chinese.
- **Accessibility & Inclusive Design:** WCAG 2.1 / 2.2 AA demonstrations (visible focus, screen reader transcripts, 400% zoom reflow, contrast ratios).
- **AI-Enabled Quality Engineering:** Structured prompt engineering, specialized QA agents, artefact validation, and human-in-the-loop sign-off.

### Confidentiality Notice
> **Required Disclaimer:** All interactive demonstrations use synthetic, sanitised data. No MBIE, Immigration New Zealand, Datacom, Windcave, customer, production or test-system data is used or connected.

---

## 2. Information Architecture & Site Map

| Route | Purpose | Primary Content |
|---|---|---|
| `/` | Executive Portfolio Home | Quality Signal Network hero, trust bar, selected work, The Mazher Story, global footprint, interactive QA Lab hub, certifications showcase, career timeline, sectors & contact. |
| `/projects/` | Project Case Studies | NZeTA PayNow, IPONZ SaaS Migration, One NZ Enterprise Mobility, EPBR Accessibility, Open Banking CDR. |
| `/lab/` | QA Project Lab Landing | Overview cards, governance disclaimers, launch actions for all 6 demonstrations. |
| `/lab/paynow/` | Payment Assurance Lab | Interactive 7-stage payment pipeline with 6 failure/recovery scenarios. |
| `/lab/migration/` | Migration Assurance Lab | Legacy vs SaaS record diff, simulated SQL audit, Chart.js pass/fail metrics. |
| `/lab/release/` | Release Readiness Lab | Executive decision support dashboard, build candidate switching, KPI gate meters, print sign-off. |
| `/lab/3ds/` | 3DS Authentication Lab | Simulated browser payment checkout, issuer OTP challenge, EN / ZH translation toggle. |
| `/lab/accessibility/` | Accessibility Lab | Keyboard focus toggle, screen reader transcripts, 320px reflow simulator, error summaries. |
| `/lab/ai-quality/` | AI Quality Engineering Lab | Prompt Studio, QA Agent Workshop, Artefact Validator, Code Review Diff, Data Validation, Human Approval Gate. |
| `/toolkit/` | QA Toolkit | Sanitised RTM, Test Case Spec, Defect RCA, and Test Summary templates. |
| `/certifications/` | Certification Showcase | 5 capability pillars (Test Leadership, AI Engineering, AI Quality, Data Engineering, Cloud) with detail drawers. |
| `/experience/` | Career Timeline | 14+ years progression and technical evolution visual. |
| `/cv/` | CV Access & Preview | Executive Master PDF download, ATS-optimized summary, and verified links. |

---

## 3. Technology & Repository Structure

- **Core Stack:** HTML5 + Semantic CSS + Vanilla JavaScript (ES Modules) + Chart.js (Local Bundle).
- **Zero Backend Dependency:** 100% static, fast, offline-capable, and GitHub Pages compatible.

```text
├── index.html                           # Flagship Executive Portfolio Home
├── styles.css                           # Primary portfolio styles
├── script.js                            # Interactive canvas & timeline script
├── sitemap.xml                          # Search engine sitemap
├── robots.txt                           # Search engine crawling rules
├── README.md                            # Technical documentation & handover
├── Mazher_Hussain_Executive_Master_CV.pdf # Official Executive CV PDF
│
├── assets/
│   ├── css/
│   │   ├── tokens.css                   # Approved semantic design tokens
│   │   ├── components.css               # Shared UI component library
│   │   └── labs.css                     # Dedicated lab widget stylesheets
│   └── js/
│       ├── chart.min.js                 # Local Chart.js v4 UMD bundle
│       ├── app.js                       # Main application coordinator
│       ├── components.js                # Focus traps, tabs, live announcer
│       ├── chart-config.js              # Accessible chart defaults
│       └── labs/
│           ├── paynow.js                # Payment Assurance Lab controller
│           ├── migration.js             # Migration Assurance Lab controller
│           ├── release.js               # Release Readiness Lab controller
│           ├── 3ds.js                   # 3DS Authentication Lab controller
│           ├── accessibility.js         # Accessibility Lab controller
│           └── ai-quality.js            # AI Quality Engineering Lab controller
│
├── data/                                # Deterministic Synthetic JSON Fixtures
│   ├── profile.json                     # Master source of truth for bio & titles
│   ├── projects.json                    # Case studies data & delivery metrics
│   ├── credentials.json                 # 10 certifications across 5 pillars
│   ├── paynow-scenarios.json            # 6 payment transaction scenarios
│   ├── migration-records.json           # 3 reconciliation datasets & simulated SQL
│   ├── release-builds.json              # 3 build candidates & readiness gates
│   ├── 3ds-scenarios.json               # 5 authentication scenarios & translations
│   ├── accessibility-cases.json         # 5 accessibility compliance modules
│   ├── ai-prompt-scenarios.json         # Weak vs structured prompt before/after
│   ├── ai-agent-patterns.json           # 3 specialized QA agent architectures
│   ├── ai-artefact-reviews.json         # AI draft vs human review findings
│   ├── ai-code-reviews.json             # AI code vs production revision diff
│   └── ai-data-validation.json          # Synthetic ML anomaly auditing
│
├── projects/index.html                  # Dedicated Project Case Studies page
├── lab/
│   ├── index.html                       # QA Project Lab landing page
│   ├── paynow/index.html                # Dedicated PayNow Lab page
│   ├── migration/index.html             # Dedicated Migration Lab page
│   ├── release/index.html               # Dedicated Release Readiness page
│   ├── 3ds/index.html                   # Dedicated 3DS Authentication page
│   ├── accessibility/index.html         # Dedicated Accessibility page
│   └── ai-quality/index.html            # Dedicated AI Quality Lab page
│
├── toolkit/index.html                   # Dedicated QA Toolkit page
├── certifications/index.html            # Dedicated Certifications Showcase page
├── experience/index.html                # Dedicated Experience Timeline page
├── cv/index.html                        # Dedicated CV Access page
└── docs/qa-toolkit/                     # Sanitised QA templates & frameworks
```

---

## 4. Local Development & Deployment

### Run Locally
Run any lightweight static HTTP server from the project root:
```bash
# Using Python
python -m http.server 8089

# Using Node.js
npx serve -l 8089
```
Open `http://localhost:8089/` in your browser.

### Deploy to GitHub Pages
1. Push repository to GitHub.
2. In repository **Settings** → **Pages**, select branch `main` and root directory `/`.
3. All asset paths are relative (`./`, `../`, `../../`), ensuring seamless hosting at any subpath or custom domain.

---

## 5. Governance & Role Titles
- **Name Spelling:** Strictly **Mazher Hussain** across all pages, tags, and metadata.
- **Master Positioning:** `Test Manager | QA Delivery Lead | Test Lead`.
- **MBIE Experience:** Formally presented as **Test Lead** or **Data Migration Test Lead** (never "Senior Test Analyst").
- **AI Positioning:** AI is presented as a delivery accelerator under human QA governance (*"AI proposes. QA verifies. Humans remain accountable"*). Mazher is never titled "AI Engineer" or "Data Scientist".
