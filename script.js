/**
 * MAZHER HUSSAIN — EXECUTIVE PORTFOLIO INTERACTIVITY SCRIPT
 * Positioning: Test Lead | Data Migration & Release Assurance
 * Full Accessibility (WCAG 2.1 AA), Signal to Sign-off reveal,
 * QA Lab Simulator & AI Test Design, Focus Trapping & Search Engine
 */

(function () {
  'use strict';

  // =========================================================================
  // 2. HERO TYPEWRITER LINE
  // =========================================================================
  const TYPE_PHRASES = [
    '14+ YEARS IN IT & QA DELIVERY · LEADING A 5-PERSON QA TEAM',
    'TEST LEAD & DATA MIGRATION TEST LEAD (MBIE)',
    'GOVERNMENT & BANKING TRANSFORMATIONS · UAT & RELEASE ASSURANCE',
    'GLOBAL EXPERIENCE ACROSS 9 COUNTRIES (SAUDI ARABIA → 7 HUBS → NZ)'
  ];
  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typewriterEl = document.getElementById('typewriterText');

  function tickTypewriter() {
    if (!typewriterEl) return;
    const current = TYPE_PHRASES[phraseIdx];
    if (isDeleting) {
      charIdx--;
      typewriterEl.textContent = current.substring(0, charIdx);
      if (charIdx <= 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % TYPE_PHRASES.length;
        setTimeout(tickTypewriter, 500);
        return;
      }
      setTimeout(tickTypewriter, 32);
    } else {
      charIdx++;
      typewriterEl.textContent = current.substring(0, charIdx);
      if (charIdx >= current.length) {
        isDeleting = true;
        setTimeout(tickTypewriter, 2600);
        return;
      }
      setTimeout(tickTypewriter, 52);
    }
  }
  setTimeout(tickTypewriter, 1200);

  // =========================================================================
  // 3. CORE CAPABILITY PILL READOUT
  // =========================================================================
  const PILLAR_DATA = {
    WEB: {
      title: 'WEB & DIGITAL PORTALS',
      desc: 'End-to-end Web & Portal validation (.NET 10, NZeTA Web 3DS 2.0 Datacom integration, EPBR WCAG 2.1 AA, Great Walks Booking Portal).'
    },
    MOBILE: {
      title: 'ENTERPRISE MOBILITY & APPS',
      desc: 'Mobile device management assurance across NZDF BlackBerry UEM → Intune cutover, MSD Workspace ONE migration, and NZ Police supervised iOS discovery.'
    },
    AUTOMATION: {
      title: 'TEST AUTOMATION & FRAMEWORKS',
      desc: 'Scalable automation across Cypress, Mabl, Selenium WebDriver, Postman API suites, and CI/CD quality gate enforcement in Azure DevOps & GitHub Actions.'
    },
    API: {
      title: 'API & PAYMENT GATEWAY INTEGRATIONS',
      desc: 'REST & OpenAPI gateway assurance across QuickPay, Windcave, Datacom 3DS 2.0, Open Banking CDR standards, and Postman regression suites.'
    },
    DATA: {
      title: 'DATA MIGRATION & RECONCILIATION',
      desc: 'SQL source-to-target reconciliation, schema validation, transformation rules, row-count & hash checksum verification across IPONZ SaaS & Open Banking.'
    },
    CLOUD: {
      title: 'CLOUD ARCHITECTURE & RELEASE ASSURANCE',
      desc: 'Cloud transformation governance across SaaS migration (COEXYA France), Microsoft Intune cloud tenants, AWS, and MBIE GitHub Enterprise Cloud.'
    }
  };

  const pillarButtons = document.querySelectorAll('.pillar-btn');
  const pillarTitle = document.getElementById('pillarTitle');
  const pillarText = document.getElementById('pillarText');

  pillarButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      pillarButtons.forEach(b => {
        b.classList.remove('bg-teal-500/20', 'border-teal-400', 'text-teal-200');
        b.classList.add('bg-zinc-950/90', 'border-zinc-800', 'text-zinc-300');
      });
      btn.classList.remove('bg-zinc-950/90', 'border-zinc-800', 'text-zinc-300');
      btn.classList.add('bg-teal-500/20', 'border-teal-400', 'text-teal-200');
      const pKey = btn.getAttribute('data-pillar');
      if (PILLAR_DATA[pKey]) {
        if (pillarTitle) pillarTitle.textContent = PILLAR_DATA[pKey].title;
        if (pillarText) pillarText.textContent = PILLAR_DATA[pKey].desc;
      }
    });
  });

  // =========================================================================
  // 4. SELECTED WORK: FEATURED PROJECTS & CASE STUDIES
  // =========================================================================
  const CASE_STUDIES = [
    {
      index: '01',
      featured: true,
      category: 'payments',
      title: 'NZeTA Batch Portal – PayNow / Upfront Payments',
      org: 'MBIE / Immigration New Zealand · QA Delivery Lead / Test Lead',
      tagline: 'Leading a 5-person QA team across incremental vendor releases to introduce upfront QuickPay/Windcave payment capability without disrupting live batch processing.',
      proof: 'How I led a five-person QA team, coordinated vendor builds, and gave stakeholders a clear view of coverage, defects and release readiness.',
      flow: 'Batch Portal (External / Internal) → Batch API → QuickPay → Windcave Hosted Payment Page → Callback & Status Reconciliation → GST Tax Invoice PDF → Data Warehouse & Downstream NZeTA Processing',
      metrics: [
        { val: '5-Person', lbl: 'QA Team Led' },
        { val: 'Builds 1–3', lbl: 'Incremental Vendor Releases' },
        { val: 'E2E RTM', lbl: 'Build → US → AC → Test → Defect' },
        { val: '99.4%', lbl: 'Acceptance Pass Rate' }
      ],
      challenge: 'The initiative introduced upfront payment processing into an operational NZeTA Batch Portal across External and Internal journeys, Provider/Proxy administration, QuickPay/Windcave gateways, invoicing, GST, payment recovery, and Data Warehouse reporting—delivered incrementally across multiple vendor builds.',
      did: [
        'Led day-to-day QA delivery across a five-person QA team, coordinating test design, resource allocation, execution readiness, and build-level smoke/acceptance gates.',
        'Worked with Business Analysts in process walkthroughs to clarify Provider/Proxy/CRT rules, GST, invoicing, and recovery, translating User Stories into scenario-based ADO test suites.',
        'Validated Batch Portal → Batch API → QuickPay → Windcave → Callbacks/Reconciliation → Invoice and built interactive Excel QA operating dashboards giving stakeholders full visibility of release readiness.'
      ],
      results: [
        'Structured QA operating model established across incremental vendor builds',
        'Full executive visibility of scope, test coverage, execution progress, defect severity & release readiness',
        'Protected existing operational Batch Portal behaviour with zero production outages during cutover'
      ],
      inspectType: 'dashboard',
      inspectData: {
        builds: [
          { name: 'Build 1 · Core Framework & Proxy Admin', status: 'PASS (100%)', scenarios: '38/38', defects: '0 P1 / 0 P2' },
          { name: 'Build 2 · QuickPay & Windcave Hosted Page', status: 'PASS (100%)', scenarios: '56/56', defects: '0 P1 / 0 P2 / 1 P3' },
          { name: 'Build 3 · UAT, Reconciliation & Invoicing', status: 'PASS (99.4%)', scenarios: '48/48', defects: '0 P1 / 0 P2 / 1 P3' }
        ],
        defectSummary: 'P1 (Critical): 0 · P2 (High): 0 · P3 (Cosmetic/Accepted): 2 · Blockers: 0',
        releaseGateDecision: 'GO RECOMMENDATION: All critical acceptance criteria met; rollback runbook dry-run verified.'
      }
    },
    {
      index: '03',
      featured: true,
      category: 'migration',
      title: 'IPONZ SaaS Cloud Migration, Legacy V3.39–Optonum Integration & Open Banking / Dow Jones',
      org: 'MBIE · Migration Test Lead (Vendor: COEXYA France & Payments NZ Transition)',
      tagline: 'Reconciling critical Intellectual Property records and national Open Banking API specifications into modern cloud platforms using SQL reconciliation.',
      proof: 'How I used SQL reconciliation and transformation-rule validation to check that critical records arrived correctly in the target system.',
      flow: 'Legacy On-Premise IPONZ & Payments NZ Repos → SQL Source-to-Target Extraction & Transformation Rules → COEXYA SaaS Cloud & MBIE GitHub Enterprise Cloud/Pages + Dow Jones Risk Screening (CDR)',
      metrics: [
        { val: 'SaaS Cloud', lbl: 'Target Platform (COEXYA)' },
        { val: '840K+', lbl: 'IP Records Reconciled' },
        { val: 'SQL Rules', lbl: 'Source-to-Target Verification' },
        { val: 'CDR Ready', lbl: 'Dow Jones Risk & OpenAPI' }
      ],
      challenge: 'Simultaneously leading migration assurance for transitioning IPONZ from a legacy on-premise system to SaaS Cloud with international vendor COEXYA (France) and migrating New Zealand’s Open Banking Standards Platform from Payments NZ to MBIE GitHub Enterprise Cloud alongside Dow Jones Risk Screening.',
      did: [
        'Defined end-to-end migration test strategies, SQL source-to-target reconciliation queries, and transformation-rule verification across IPONZ and Open Banking schemas.',
        'Executed hands-on IPONZ Legacy V3.39–Optonum seamless integration testing: Postman APIs (GetDocument, CheckDesignRenewal), Keycloak SSO/SLO authentication, user/customer sync, NFR performance-baseline scripts, and migration operational readiness.',
        'Represented MBIE as Data Migration Test Lead in formal external vendor audit interviews for the IPONZ transformation, contributing technical scrutiny of migration methodology, reconciliation controls, data quality, and delivery risks.',
        'Executed row count, column mapping, and cryptographic hash verification between legacy tables and cloud schemas, resolving historical data anomalies prior to cutover.',
        'Tested GitHub authoring/publishing workflows, OpenAPI artefacts, RBAC, audit logging, DR/rollback, and Dow Jones Risk Screening (SSO, search, audit trails, UAT).'
      ],
      results: [
        'Verified source-to-target data integrity across 840,000+ IP records with zero missing entities',
        'Repeatable Mabl automated regression and GitHub publishing verification pipeline',
        'Supported Consumer Data Right (CDR) accreditation readiness across NZ banking and government standards'
      ],
      inspectType: 'sql',
      inspectData: {
        query: `SELECT 'Legacy_IPONZ' AS source_db, COUNT(*) AS record_count,
       CHECKSUM_AGG(BINARY_CHECKSUM(patent_id, filing_date, status_code)) AS schema_checksum
FROM dbo.tbl_patents_legacy
UNION ALL
SELECT 'COEXYA_SaaS' AS source_db, COUNT(*) AS record_count,
       CHECKSUM_AGG(BINARY_CHECKSUM(patent_id, filing_date, status_code)) AS schema_checksum
FROM saas_schema.patents_core;`,
        findings: 'Dry-Run 1 Analysis: 842,910 Source vs 842,910 Target records matched. Detected 12 legacy patents with missing ISO-8601 timezone offsets. Remediation: Updated COEXYA transformation mapping rule; re-reconciliation confirmed 100% hash equivalence.'
      }
    },
    {
      index: '05',
      featured: true,
      category: 'enterprise',
      title: 'One NZ Enterprise Mobility — NZDF, MSD & NZ Police Streams',
      org: 'One NZ (2019 – Aug 2025) · Technical Test Lead / Release Manager',
      tagline: 'Distinct MDM cloud migrations, technical discovery, and multi-stream BAU release governance across three national security and government agencies.',
      proof: 'How I managed test and cutover risk across government streams and supported the handover into live service.',
      flow: 'Stream 1: NZDF (BlackBerry UEM → Microsoft Intune Cutover) | Stream 2: MSD (VMware Workspace ONE → Intune Migration & BAU Assurance) | Stream 3: NZ Police (Supervised iOS Technical Discovery & Release Governance)',
      metrics: [
        { val: 'NZDF', lbl: 'Intune Cutover · Zero Data Loss' },
        { val: 'MSD', lbl: 'WS1 Migration & BAU Assurance' },
        { val: 'NZ Police', lbl: 'iOS Discovery & Release Gov' },
        { val: '6 Years', lbl: 'Enterprise Mobile Governance' }
      ],
      challenge: 'Delivering enterprise mobility assurance across three distinct high-security government agencies—requiring separate test strategies for NZDF’s BlackBerry UEM cutover, MSD’s Workspace ONE migration and ongoing BAU streams, and NZ Police’s supervised iOS discovery and release management.',
      did: [
        'NZDF Stream: Authored the cutover test plan for migrating defence mobile endpoints from BlackBerry UEM to Microsoft Intune; verified zero user data loss, MAM policies, and secure enrolment.',
        'MSD Stream: Executed functional, migration, and regression test suites across VMware Workspace ONE to Intune; managed multi-stream BAU releases across production device pools.',
        'NZ Police Stream: Led technical discovery on supervised iOS configuration profiles, certificate management, and app distribution, delivering structured governance into live service.'
      ],
      results: [
        'Flawless NZDF migration with zero data loss and full compliance with New Zealand Information Security Manual (NZISM)',
        'Standardised multi-stream UAT and regression governance for MSD with accelerated monthly release cadence',
        'Structured iOS supervisory testing for NZ Police and seamless handover into live enterprise operations'
      ],
      inspectType: 'checklist',
      inspectData: {
        checklist: [
          { item: 'Zero Data Loss Validation', status: 'VERIFIED', detail: 'Cryptographic hash backup check completed for 100% of defence user profiles.' },
          { item: 'No-Go Gate: MAM Enrolment Failure', status: 'PASSED', detail: 'Pre-flight check: Zero enrolment failures tolerated in test ring prior to live cutover.' },
          { item: 'Emergency Rollback Runbook', status: 'TESTED', detail: 'Dry-run rollback to legacy MDM executed in staging environment within 24 minutes.' },
          { item: 'NZISM Security Sign-off', status: 'APPROVED', detail: 'Information Security compliance ratified by enterprise accreditors.' }
        ]
      }
    },
    {
      index: '02',
      featured: false,
      category: 'payments',
      title: 'NZeTA Web – 3D Secure (3DS 2.0) Security Enhancement',
      org: 'MBIE / Immigration New Zealand · QA Lead / Test Lead',
      tagline: 'Transitioning the Datacom Payment Gateway from ATTEMPT/BYPASS to ENFORCED 3DS 2.0 authentication.',
      flow: 'NZeTA Public Web Application (EN / Simplified Chinese UI) → Upfront 3DS Traveller Guidance → Pay & Submit → Datacom Payment Gateway (ENFORCED 3DS 2.0 Challenge) → Callback & Confirmation',
      metrics: [
        { val: '3DS 2.0', lbl: 'Enforced Authentication' },
        { val: 'EN + ZH', lbl: 'Multilingual UI Validation' },
        { val: 'Datacom', lbl: 'Payment Gateway Integration' }
      ],
      challenge: 'Strengthening online payment authentication by moving the Datacom Payment Gateway from ATTEMPT/BYPASS to ENFORCED 3D Secure (3DS 2.0) required rigorous validation of redirects, callback states, and multilingual traveller guidance while protecting application completion rates.',
      did: [
        'Designed comprehensive test scenarios covering frictionless authentication, step-up biometric/OTP challenge flows, issuer timeouts, and network dropouts.',
        'Validated multilingual user interface and error states across English and Simplified Chinese viewports down to 320px mobile form factors.',
        'Partnered with Datacom engineers and immigration operational teams to verify payment settlement, transaction callback idempotency, and fraud prevention controls.'
      ],
      results: [
        'Zero payment reconciliation gaps upon production cutover',
        'Seamless multilingual traveller experience across global browsers and mobile devices',
        'Full compliance with global banking security mandates and card network regulations'
      ]
    },
    {
      index: '04',
      featured: false,
      category: 'enterprise',
      title: 'Earthquake-Prone Building Register (EPBR) Accessibility',
      org: 'MBIE · Accessibility Test Lead',
      tagline: 'Delivering WCAG 2.1 Level AA compliance across a high-visibility national public safety register.',
      flow: 'EPBR Public Portal → NVDA & VoiceOver Screen Reader Tree → Keyboard-Only Tab/Focus Order → Semantic ARIA & DOM Hierarchy → Colour Contrast & 200% Zoom Reflow Verification',
      metrics: [
        { val: 'WCAG 2.1 AA', lbl: 'NZ Govt Web Standard' },
        { val: '200% Reflow', lbl: 'Responsive & Zoom Audits' },
        { val: 'NVDA + ARIA', lbl: 'Assistive Tech Validation' }
      ],
      challenge: 'Public-facing government registers must be accessible to all citizens, including users relying on screen readers, keyboard-only navigation, and high-zoom viewports under mandatory New Zealand Government Web Accessibility Standards.',
      did: [
        'Defined the accessibility test plan, test scenarios, and compliance checklist aligned with WCAG 2.1 Level AA.',
        'Executed screen-reader testing (NVDA/VoiceOver), keyboard-only navigation, focus-order verification, semantic HTML/ARIA inspection, colour contrast, and 200% reflow audits.',
        'Logged prioritised defects mapped to WCAG success criteria and coached developers through remediation.'
      ],
      results: [
        'Comprehensive WCAG 2.1 Level AA compliance evidence pack approved by government accessibility auditor',
        'Verified assistive technology compatibility across all public search and map workflows',
        'Clear developer remediation guidance and ongoing accessibility governance model'
      ]
    },
    {
      index: '06',
      featured: false,
      category: 'enterprise',
      title: 'DOC Great Walks ERP/POS Platform & The Co-operative Bank Cypress QA',
      org: 'Department of Conservation & The Co-operative Bank',
      tagline: 'Validating nationwide conservation booking ERP/POS platforms and leading banking test automation.',
      flow: 'DOC National Booking Engine & Visitor Centre Hardware → POS Gateway → SAP/ERP Financials | Co-operative Bank: Core Banking Migration → Cypress Test Automation Suites',
      metrics: [
        { val: 'Nationwide POS', lbl: 'Launched with Prime Minister' },
        { val: 'Cypress / Selenium', lbl: 'Automated Banking Suites' },
        { val: 'Scrum Master', lbl: 'Agile Delivery Leadership' }
      ],
      challenge: 'Delivering quality assurance across two critical New Zealand platforms: the Department of Conservation’s nationwide Great Walks booking system and POS hardware roll-out, and The Co-operative Bank’s core banking digital migration.',
      did: [
        'DOC: Conducted end-to-end testing of booking transactions, retail POS hardware across visitor centres, offline recovery, and financial reconciliation into SAP.',
        'Co-operative Bank: Architected automated Cypress and Selenium regression suites for internet banking and mobile web applications; served as Acting Scrum Master.',
        'Established automated test pipelines integrated into release governance workflows.'
      ],
      results: [
        'Flawless nationwide POS launch, personally inaugurated by the Prime Minister of New Zealand',
        'Substantial reduction in banking regression testing cycle times via Cypress automation',
        'Standardised Agile QA ceremonies and defect triage practices'
      ]
    }
  ];

  // Preserved filter state (Fixes Defect 5)
  let activeWorkFilter = 'all';

  function renderFeaturedCards() {
    const container = document.getElementById('featuredWorkContainer');
    if (!container) return;
    const featuredItems = CASE_STUDIES.filter(c => c.featured);

    container.innerHTML = featuredItems.map((c, i) => `
      <article id="case-card-${c.index}" class="p-6 sm:p-8 rounded-2xl bg-zinc-950/90 border border-zinc-800/90 hover:border-teal-500/40 transition-all space-y-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
          <div class="space-y-1">
            <div class="flex items-center gap-3">
              <span class="featured-badge">FEATURED PROOF 0${i+1}</span>
              <span class="font-mono-kicker text-xs text-teal-400 font-bold">${c.org}</span>
            </div>
            <h3 class="font-display font-black text-2xl sm:text-3xl text-white pt-1">
              <a href="#case-${c.index}" class="hover:text-teal-300 transition-colors">${c.title}</a>
            </h3>
            <p class="text-xs sm:text-sm text-zinc-400 italic">${c.proof}</p>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <button type="button" class="inspect-toggle-btn px-4 py-2 rounded-lg bg-teal-500/15 hover:bg-teal-500/25 border border-teal-400/40 text-teal-300 font-mono-kicker text-xs font-bold cursor-pointer transition-all" data-case="${c.index}">
              Inspect My Work ▾
            </button>
            <button type="button" class="open-case-modal-btn px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono-kicker text-xs font-bold cursor-pointer transition-all" data-case-idx="${c.index}">
              Deep Dive ↗
            </button>
          </div>
        </div>

        <p class="text-sm sm:text-base text-zinc-300 leading-relaxed">${c.tagline}</p>

        <!-- Metrics Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${c.metrics.map(m => `
            <div class="p-3 rounded-xl bg-black border border-zinc-800/80">
              <div class="font-display font-black text-xl text-teal-300">${m.val}</div>
              <div class="font-mono-kicker text-[10px] text-zinc-400 mt-0.5">${m.lbl}</div>
            </div>
          `).join('')}
        </div>

        <!-- System Flow -->
        <div class="p-3.5 rounded-xl bg-black/60 border border-zinc-800 text-xs font-mono-kicker text-zinc-300 leading-relaxed">
          <span class="text-teal-400 font-bold block mb-1">END-TO-END VERIFICATION FLOW:</span>
          ${c.flow}
        </div>

        <!-- Expandable Inspect My Work Panel -->
        <div id="inspect-panel-${c.index}" class="inspect-panel hidden p-4 sm:p-5 space-y-3">
          <div class="inspect-header rounded-lg mb-2">
            <span class="text-teal-400 font-bold text-xs uppercase tracking-wider">// RECREATED OPERATIONAL ARTIFACT — INSPECTION PANEL</span>
            <span class="text-zinc-500 text-[10px]">Synthetic Evidence Demo</span>
          </div>
          ${renderInspectContent(c)}
        </div>
      </article>
    `).join('');

    // Attach inspect toggle listeners
    container.querySelectorAll('.inspect-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cId = btn.getAttribute('data-case');
        const panel = document.getElementById(`inspect-panel-${cId}`);
        if (!panel) return;
        const isHidden = panel.classList.contains('hidden');
        panel.classList.toggle('hidden', !isHidden);
        btn.textContent = isHidden ? 'Inspect My Work ▴' : 'Inspect My Work ▾';
      });
    });

    // Attach modal open buttons
    container.querySelectorAll('.open-case-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openCaseModalByIndex(btn.getAttribute('data-case-idx'));
      });
    });
  }

  function renderInspectContent(c) {
    if (c.inspectType === 'dashboard') {
      return `
        <div class="space-y-3">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
            ${c.inspectData.builds.map(b => `
              <div class="p-3 rounded-lg bg-zinc-950 border border-zinc-800">
                <div class="font-bold text-teal-300">${b.name}</div>
                <div class="text-[11px] text-emerald-400 mt-1">${b.status} · ${b.scenarios} Scenarios</div>
                <div class="text-[10px] text-zinc-400 mt-0.5">Defects: ${b.defects}</div>
              </div>
            `).join('')}
          </div>
          <div class="p-3 rounded-lg bg-black border border-teal-500/30 text-xs">
            <div class="text-teal-300 font-bold">Defect Severity Triage:</div>
            <div class="text-zinc-300 mt-0.5">${c.inspectData.defectSummary}</div>
            <div class="text-emerald-400 font-semibold mt-1.5">${c.inspectData.releaseGateDecision}</div>
          </div>
        </div>
      `;
    } else if (c.inspectType === 'sql') {
      return `
        <div class="space-y-3">
          <div class="p-3.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] text-sky-300 font-mono overflow-x-auto">
            <pre><code>${c.inspectData.query}</code></pre>
          </div>
          <div class="p-3 rounded-lg bg-black border border-sky-500/30 text-xs text-zinc-300">
            <strong class="text-sky-300">Verification Outcome:</strong> ${c.inspectData.findings}
          </div>
        </div>
      `;
    } else if (c.inspectType === 'checklist') {
      return `
        <div class="space-y-2">
          ${c.inspectData.checklist.map(chk => `
            <div class="p-3 rounded-lg bg-zinc-950 border border-zinc-800 flex items-start justify-between gap-3 text-xs">
              <div>
                <span class="font-bold text-white">${chk.item}</span>
                <p class="text-zinc-400 text-[11px] mt-0.5">${chk.detail}</p>
              </div>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${chk.status === 'VERIFIED' || chk.status === 'PASSED' || chk.status === 'APPROVED' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-600' : 'bg-zinc-800 text-zinc-300'}">${chk.status}</span>
            </div>
          `).join('')}
        </div>
      `;
    }
    return '';
  }

  function renderFilteredWork(filter = 'all') {
    activeWorkFilter = filter;
    const container = document.getElementById('workListContainer');
    if (!container) return;

    // Filter button active classes
    document.querySelectorAll('.work-filter-btn').forEach(btn => {
      const match = btn.getAttribute('data-filter') === filter;
      btn.className = match
        ? 'work-filter-btn px-4 py-2 rounded-full font-mono-kicker text-xs bg-white text-black font-bold cursor-pointer transition-all'
        : 'work-filter-btn px-4 py-2 rounded-full font-mono-kicker text-xs bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-teal-400 cursor-pointer transition-all';
    });

    const items = filter === 'all' ? CASE_STUDIES : CASE_STUDIES.filter(c => c.category === filter);

    container.innerHTML = items.map(w => `
      <article id="case-card-${w.index}" class="py-10 space-y-6">
        <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
          <div>
            <div class="flex items-center gap-3">
              <span class="font-mono-kicker text-xs text-teal-400 font-bold">${w.index} · ${w.org}</span>
              ${w.featured ? '<span class="px-2 py-0.5 rounded text-[9px] font-mono-kicker bg-teal-500/20 text-teal-300 border border-teal-500/30">FEATURED</span>' : ''}
            </div>
            <h3 class="font-display font-black text-2xl sm:text-3xl text-white mt-1">
              <a href="#case-${w.index}" class="hover:text-teal-300 transition-colors">${w.title}</a>
            </h3>
          </div>
          <button type="button" class="open-case-modal-btn self-start md:self-auto px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-teal-300 font-mono-kicker text-xs font-bold cursor-pointer transition-all" data-case-idx="${w.index}">
            Deep Dive Case Study ↗
          </button>
        </div>

        <p class="text-sm sm:text-base text-zinc-300 leading-relaxed">${w.tagline}</p>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          ${w.metrics.map(m => `
            <div class="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800">
              <div class="font-display font-black text-xl text-teal-300">${m.val}</div>
              <div class="font-mono-kicker text-[10px] text-zinc-400 mt-1">${m.lbl}</div>
            </div>
          `).join('')}
        </div>

        <div class="p-3.5 rounded-xl bg-black border border-zinc-800 text-xs font-mono-kicker text-zinc-300 leading-relaxed">
          <span class="text-teal-400 font-bold block mb-1">VERIFICATION FLOW:</span>
          ${w.flow}
        </div>
      </article>
    `).join('');

    container.querySelectorAll('.open-case-modal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openCaseModalByIndex(btn.getAttribute('data-case-idx'));
      });
    });
  }

  // Filter button click listeners
  document.querySelectorAll('.work-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      renderFilteredWork(btn.getAttribute('data-filter'));
    });
  });

  // =========================================================================
  // 5. CASE STUDY MODAL DEEP DIVE
  // =========================================================================
  const caseModal = document.getElementById('caseModal');
  const closeCaseModalBtn = document.getElementById('closeCaseModalBtn');
  let lastCaseTrigger = null;

  function openCaseModalByIndex(caseIdxStr) {
    const c = CASE_STUDIES.find(item => item.index === caseIdxStr);
    if (!c) return;
    lastCaseTrigger = document.activeElement;
    document.getElementById('modalOrg').textContent = c.org;
    document.getElementById('modalTitle').textContent = c.title;
    document.getElementById('modalFlow').textContent = c.flow;
    document.getElementById('modalOutcome').textContent = c.results.join(' · ');
    const ul = document.getElementById('modalBullets');
    ul.innerHTML = [
      `<strong>The Challenge:</strong> ${c.challenge}`,
      ...c.did.map(d => `<strong>Leadership & Quality Engineering:</strong> ${d}`)
    ].map(b => `<li>${b}</li>`).join('');

    caseModal.classList.remove('hidden');
    caseModal.classList.add('flex');
    closeCaseModalBtn.focus();
  }

  function closeCaseModal() {
    caseModal.classList.add('hidden');
    caseModal.classList.remove('flex');
    if (lastCaseTrigger && typeof lastCaseTrigger.focus === 'function') {
      lastCaseTrigger.focus();
    }
  }

  if (closeCaseModalBtn) {
    closeCaseModalBtn.addEventListener('click', closeCaseModal);
  }

  // Case Study URL routing & jump (Fixes Defect 5)
  function jumpToCaseStudy(caseIdxStr) {
    // Open case modal directly without wiping or permanently overriding active filter
    openCaseModalByIndex(caseIdxStr);
    const cardEl = document.getElementById(`case-card-${caseIdxStr}`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Check URL hash on load
  function handleUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#case-')) {
      const idx = hash.replace('#case-', '');
      jumpToCaseStudy(idx);
    }
  }
  window.addEventListener('load', handleUrlHash);

  // =========================================================================
  // 6. QA LAB: RELEASE GATE SIMULATOR & AI TEST DESIGN
  // =========================================================================
  const runSimBtn = document.getElementById('runSimBtn');
  const runNoGoSimBtn = document.getElementById('runNoGoSimBtn');
  const resetSimBtn = document.getElementById('resetSimBtn');
  const simStatusLabel = document.getElementById('simStatusLabel');
  const simProgressBar = document.getElementById('simProgressBar');
  const simMetricLeft = document.getElementById('simMetricLeft');
  const simMetricRight = document.getElementById('simMetricRight');
  const evolveSvgWrapper = document.getElementById('evolveSvgWrapper');
  const allSvgNodes = document.querySelectorAll('.evolve-node');
  let simTimers = [];

  function clearSimTimers() {
    simTimers.forEach(t => clearTimeout(t));
    simTimers = [];
  }

  function resetSimulator() {
    clearSimTimers();
    if (evolveSvgWrapper) evolveSvgWrapper.classList.remove('sim-running');
    allSvgNodes.forEach(n => n.classList.remove('sim-pass', 'sim-fail', 'active'));
    if (allSvgNodes.length > 3) allSvgNodes[3].classList.add('active');
    if (simProgressBar) {
      simProgressBar.style.width = '0%';
      simProgressBar.className = 'h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300';
    }
    if (simStatusLabel) simStatusLabel.textContent = 'Not run — Select a scenario below to simulate gate checks';
    if (simMetricLeft) simMetricLeft.textContent = 'DEMO RTM COVERAGE: NOT RUN (0/12)';
    if (simMetricRight) simMetricRight.textContent = 'GATE STATUS: IDLE';
  }

  if (resetSimBtn) {
    resetSimBtn.addEventListener('click', () => {
      resetSimulator();
    });
  }

  // Pass (Go Gate) Simulation
  if (runSimBtn) {
    runSimBtn.addEventListener('click', () => {
      clearSimTimers();
      if (evolveSvgWrapper) evolveSvgWrapper.classList.add('sim-running');
      allSvgNodes.forEach(n => n.classList.remove('sim-pass', 'sim-fail', 'active'));
      if (simProgressBar) {
        simProgressBar.style.width = '0%';
        simProgressBar.className = 'h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300';
      }

      const steps = [
        { pct: 25, label: 'Running Layer 01: Client, Web & Identity Validation (Pass 100%)', passNodes: [0, 1, 2] },
        { pct: 50, label: 'Running Layer 02: API Gateway & Payment Service Integrations (Pass 100%)', passNodes: [3, 4, 5] },
        { pct: 75, label: 'Running Layer 03: Cloud Infrastructure & Database Schema Checksums (Pass 100%)', passNodes: [6, 7, 8] },
        { pct: 100, label: 'Running Layer 04: Regulatory Compliance & Release Sign-off (PASSED)', passNodes: [9, 10, 11] }
      ];

      steps.forEach((step, idx) => {
        const timer = setTimeout(() => {
          if (simProgressBar) simProgressBar.style.width = step.pct + '%';
          if (simStatusLabel) simStatusLabel.textContent = step.label;
          step.passNodes.forEach(nIdx => {
            if (allSvgNodes[nIdx]) allSvgNodes[nIdx].classList.add('sim-pass');
          });
          if (simMetricLeft) simMetricLeft.textContent = `DEMO RTM COVERAGE: ${(step.pct / 100 * 12).toFixed(0)}/12 NODES VALIDATED`;
          if (idx === steps.length - 1) {
            if (simMetricRight) simMetricRight.textContent = 'GATE STATUS: GO (RELEASE APPROVED)';
            if (evolveSvgWrapper) evolveSvgWrapper.classList.remove('sim-running');
          }
        }, 500 * (idx + 1));
        simTimers.push(timer);
      });
    });
  }

  // Failure (No-Go Gate) Simulation: Unresolved Critical Payment Defect
  if (runNoGoSimBtn) {
    runNoGoSimBtn.addEventListener('click', () => {
      clearSimTimers();
      if (evolveSvgWrapper) evolveSvgWrapper.classList.add('sim-running');
      allSvgNodes.forEach(n => n.classList.remove('sim-pass', 'sim-fail', 'active'));
      if (simProgressBar) {
        simProgressBar.style.width = '0%';
        simProgressBar.className = 'h-full bg-rose-500 transition-all duration-300';
      }

      const t1 = setTimeout(() => {
        if (simProgressBar) simProgressBar.style.width = '30%';
        if (simStatusLabel) simStatusLabel.textContent = 'Layer 01: Client & Identity checks passed';
        [0, 1, 2].forEach(nIdx => allSvgNodes[nIdx] && allSvgNodes[nIdx].classList.add('sim-pass'));
      }, 500);

      const t2 = setTimeout(() => {
        if (simProgressBar) simProgressBar.style.width = '55%';
        if (simStatusLabel) simStatusLabel.textContent = 'CRITICAL ALERT: Layer 02 — Payment Gateway Callback Timeout (P1 Defect Detected)';
        if (allSvgNodes[3]) allSvgNodes[3].classList.add('sim-pass');
        if (allSvgNodes[4]) allSvgNodes[4].classList.add('sim-fail'); // Payment node fails
        if (simMetricLeft) simMetricLeft.textContent = 'DEFECT LOGGED: P1 BLOCKER (CALLBACK TIMEOUT)';
        if (simMetricRight) simMetricRight.textContent = 'GATE STATUS: NO-GO (RELEASE HALTED)';
        if (evolveSvgWrapper) evolveSvgWrapper.classList.remove('sim-running');
      }, 1200);

      simTimers.push(t1, t2);
    });
  }

  // Architecture Stage Selector Buttons
  const STAGES = [
    { num: '14+', unit: 'Years in IT & QA Delivery', sub: 'Leading 5-Person QA Teams · 6+ Yrs NZ Govt', title: 'End-to-End Architecture & Release Governance', copy: 'Inspection of Mazher\'s layered validation model across Web, API, Database, and Release Gate controls.' },
    { num: '05', unit: 'Person QA Team Led', sub: 'MBIE / Immigration New Zealand · NZeTA PayNow', title: 'Payment Gateway Integration & Batch Portal', copy: 'Led QA across QuickPay and Windcave gateways, upfront invoicing, GST rules, and callback reconciliation.' },
    { num: '03', unit: 'National Security Agencies', sub: 'One NZ · NZDF, MSD & NZ Police Mobility Streams', title: 'Enterprise Mobility & Cloud Cutover Governance', copy: 'Managed cutover risks across BlackBerry UEM to Intune (zero data loss), Workspace ONE, and supervised iOS.' },
    { num: '02', unit: 'Critical Commercial Sectors', sub: 'The Co-operative Bank & DOC Great Walks ERP', title: 'Core Banking Automation & Nationwide POS Launch', copy: 'Delivered Cypress banking automation and nationwide POS launch inaugurated by the Prime Minister.' }
  ];

  document.querySelectorAll('.stage-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.stage-btn').forEach(b => {
        b.className = 'stage-btn px-3 py-1.5 rounded-md font-mono-kicker text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-teal-500 cursor-pointer transition-all';
      });
      btn.className = 'stage-btn px-3 py-1.5 rounded-md font-mono-kicker text-[10px] bg-teal-500 text-black font-bold cursor-pointer transition-all';
      const s = STAGES[Number(btn.getAttribute('data-stage'))];
      if (!s) return;
      const v = document.getElementById('scaleValue');
      const u = document.getElementById('scaleUnit');
      const st = document.getElementById('scaleStage');
      const cp = document.getElementById('scaleCopy');
      if (v) v.textContent = s.num;
      if (u) u.textContent = s.unit;
      if (st) st.textContent = s.title;
      if (cp) cp.textContent = s.copy;
    });
  });

  // AI-Assisted Test Design Tab Switcher
  const aiTabCopilot = document.getElementById('aiTabCopilot');
  const aiTabMazher = document.getElementById('aiTabMazher');
  const aiPaneCopilot = document.getElementById('aiPaneCopilot');
  const aiPaneMazher = document.getElementById('aiPaneMazher');

  if (aiTabCopilot && aiTabMazher) {
    aiTabCopilot.addEventListener('click', () => {
      aiTabCopilot.className = 'px-4 py-2 rounded-lg font-mono-kicker text-xs font-bold bg-zinc-800 text-teal-300 border border-zinc-700 cursor-pointer';
      aiTabMazher.className = 'px-4 py-2 rounded-lg font-mono-kicker text-xs font-bold bg-transparent text-zinc-400 hover:text-white cursor-pointer';
      if (aiPaneCopilot) aiPaneCopilot.classList.remove('hidden');
      if (aiPaneMazher) aiPaneMazher.classList.add('hidden');
    });
    aiTabMazher.addEventListener('click', () => {
      aiTabMazher.className = 'px-4 py-2 rounded-lg font-mono-kicker text-xs font-bold bg-teal-500/20 text-teal-300 border border-teal-500/40 cursor-pointer';
      aiTabCopilot.className = 'px-4 py-2 rounded-lg font-mono-kicker text-xs font-bold bg-transparent text-zinc-400 hover:text-white cursor-pointer';
      if (aiPaneMazher) aiPaneMazher.classList.remove('hidden');
      if (aiPaneCopilot) aiPaneCopilot.classList.add('hidden');
    });
  }

    // =========================================================================
  // 7. GLOBAL EXPERIENCE: 9 COUNTRIES & REAL FLAGS (SCENE 03)
  // =========================================================================
  const COUNTRIES = {
    SA: { name: 'Saudi Arabia', flag: '01-Saudi-Arabia.png', title: 'SAUDI ARABIA — CAREER START (2012–2016)', text: 'Origin of enterprise systems engineering, infrastructure, Oracle ERP workflows, and database quality assurance foundations.' },
    US: { name: 'United States', flag: '02-United-States.png', title: 'UNITED STATES — SYSTEMS TESTING & GLOBAL PROJECT TRAVEL', text: 'Enterprise software integration, client acceptance testing, transatlantic project delivery, and multi-vendor coordination.' },
    AE: { name: 'United Arab Emirates', flag: '03-United-Arab-Emirates.png', title: 'UNITED ARAB EMIRATES — ENTERPRISE SYSTEMS & REGIONAL CONSULTING', text: 'Regional IT consultancy, business system migration, enterprise stakeholder management, and end-to-end UAT.' },
    EG: { name: 'Egypt', flag: '04-Egypt.png', title: 'EGYPT — MOBILE TELECOMMUNICATIONS & CORE QA DELIVERY', text: 'Telecommunications systems assurance, handset validation, network switching protocols, and high-volume subscriber billing.' },
    QA: { name: 'Qatar', flag: '05-Qatar.png', title: 'QATAR — BANKING & FINANCIAL SYSTEMS ASSURANCE', text: 'Banking platform validation, financial transaction integrity, audit logging, and regulatory compliance reporting.' },
    OM: { name: 'Oman', flag: '06-Oman.png', title: 'OMAN — REGIONAL ENTERPRISE SYSTEMS DELIVERY', text: 'Public sector systems delivery, high-availability platform checks, and cross-border vendor acceptance governance.' },
    SG: { name: 'Singapore', flag: '07-Singapore.png', title: 'SINGAPORE — GLOBAL TECH HUB · FINTECH & CLOUD VERIFICATION', text: 'High-speed cloud service verification, payment routing, low-latency API testing, and microservices architecture assurance.' },
    MY: { name: 'Malaysia', flag: '08-Malaysia.png', title: 'MALAYSIA — ENTERPRISE SYSTEMS & REGIONAL DELIVERY', text: 'Enterprise delivery, telecommunications rollout, system integration testing (SIT), and multi-partner test execution.' },
    NZ: { name: 'New Zealand', flag: '09-New-Zealand.png', title: 'NEW ZEALAND — CAREER DESTINATION & HOME BASE (2016 – PRESENT)', text: 'Wellington, New Zealand: Test Lead, Data Migration Lead & QA Delivery Lead across MBIE, One NZ (NZDF, MSD, NZ Police), The Co-operative Bank, DOC, and Victoria University of Wellington.' },
    IN: { name: 'India', flag: '10-India-personal-travel.png', title: 'INDIA — PERSONAL & FAMILY TRAVEL', text: 'Personal travel and cultural heritage roots. Documented separately from commercial client delivery locations.' },
    AU: { name: 'Australia', flag: '11-Australia-location-or-work-rights.png', title: 'AUSTRALIA — LOCATION & FULL WORK RIGHTS', text: 'Full Australian work rights for Brisbane-based or Trans-Tasman engagements (Subclass 444 Special Category).' }
  };

  // Map alternative labels
  COUNTRIES['USA'] = COUNTRIES['US'];
  COUNTRIES['UAE'] = COUNTRIES['AE'];
  COUNTRIES['EGYPT'] = COUNTRIES['EG'];
  COUNTRIES['QATAR'] = COUNTRIES['QA'];
  COUNTRIES['OMAN'] = COUNTRIES['OM'];
  COUNTRIES['SINGAPORE'] = COUNTRIES['SG'];
  COUNTRIES['MALAYSIA'] = COUNTRIES['MY'];
  COUNTRIES['NEW ZEALAND'] = COUNTRIES['NZ'];
  COUNTRIES['SAUDI ARABIA'] = COUNTRIES['SA'];
  COUNTRIES['AUSTRALIA'] = COUNTRIES['AU'];
  COUNTRIES['INDIA'] = COUNTRIES['IN'];

  function activateCountry(rawCode) {
    const code = (rawCode || '').toUpperCase().trim();
    const c = COUNTRIES[code];
    if (!c) return;

    // Update buttons active state
    document.querySelectorAll('.country-card-btn').forEach(btn => {
      const bCode = (btn.getAttribute('data-country') || '').toUpperCase().trim();
      const isMatch = bCode === code || (COUNTRIES[bCode] && COUNTRIES[bCode].name === c.name);
      if (isMatch) {
        btn.classList.add('ring-2', 'ring-teal-400', 'bg-teal-950/40');
      } else {
        btn.classList.remove('ring-2', 'ring-teal-400', 'bg-teal-950/40');
      }
    });

    const cFlagImg = document.getElementById('countryDetailFlagImg');
    const cTitle = document.getElementById('countryDetailTitle');
    const cText = document.getElementById('countryDetailText');

    if (cFlagImg) cFlagImg.src = c.flag;
    if (cTitle) cTitle.textContent = c.title;
    if (cText) cText.textContent = c.text;

    // Pulse map pin
    const pin = document.getElementById(`map-pin-${code}`) || document.getElementById(`map-pin-${c.name}`);
    if (pin) {
      document.querySelectorAll('.map-pin-circle').forEach(p => p.classList.remove('fill-teal-300', 'r-6'));
      pin.classList.add('fill-teal-300');
    }
  }

  document.querySelectorAll('.country-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activateCountry(btn.getAttribute('data-country'));
    });
  });

  // =========================================================================
  // 8. CAREER TIMELINE & ETL PIPELINE (SCENE 04)
  // =========================================================================
  const TIMELINE_DATA = [
    { num: '01', status: 'APR 2012 – DEC 2014 · SYSTEMS', title: 'IT CONSULTING / SYSTEMS ANALYSIS', org: 'Al-elM / Jarir Investment · Saudi Arabia', desc: 'Enterprise IT foundations, Oracle ERP workflows, statutory financial data reconciliation, and structured systems testing.' },
    { num: '02', status: 'MAY 2015 – MAR 2016 · APPLICATIONS', title: 'TEST LEAD (ENTERPRISE APPS)', org: 'GulfNet Solutions · Saudi Arabia & International Delivery Hubs', desc: 'Led application test planning, defect triage, and cross-border UAT execution across regional banking, telecom, and enterprise software releases.' },
    { num: '03', status: 'JUN 2016 – JAN 2018 · APPLICATIONS', title: 'SENIOR APPLICATIONS TEST ANALYST', org: 'Victoria University of Wellington (VUW) · Wellington, NZ', desc: 'Single Data Return (SDR) Ministry of Education statutory reporting validation, student system upgrades, and high-volume SQL verification.' },
    { num: '04', status: 'JAN 2018 – JAN 2019 · DIGITAL / PAYMENTS', title: 'TEST LEAD / QA ANALYST', org: 'Department of Conservation (DOC) & Wilkinson & Son’s Chemist · Wellington, NZ', desc: 'Led Great Walks national booking and POS platform testing for DOC alongside retail POS/ERP quality assurance for Wilkinson & Son’s Chemist.' },
    { num: '05', status: 'JAN 2019 – AUG 2019 · DIGITAL', title: 'BANKING + TELECOM TESTING', org: 'The Co-operative Bank · Wellington, NZ', desc: 'Core internet banking migration, automated Cypress and Selenium regression suites, and Acting Scrum Master leadership.' },
    { num: '06', status: '2019 – AUG 2025 · ENTERPRISE MOBILITY', title: 'TECHNICAL TEST LEAD / RELEASE MANAGER', org: 'One NZ (NZDF, MSD, NZ Police Streams)', desc: 'Directed 3 high-security mobile streams: NZDF BlackBerry UEM to Intune (zero data loss), MSD Workspace ONE, and NZ Police iOS.' },
    { num: '07', status: 'SEP 2025 – PRESENT · CLOUD &amp; DATA', title: 'TEST LEAD / <span class="text-teal-400">DATA MIGRATION TEST LEAD</span>', org: 'Ministry of Business, Innovation & Employment (MBIE)', desc: 'Leading QA & BA/technical assurance across NZeTA PayNow (5-person QA team), 3DS 2.0 (Datacom), IPONZ SaaS Cloud Migration (COEXYA France) & Legacy V3.39–Optonum API/Keycloak/NFR integration, external vendor audit interviews, Open Banking CDR, and EPBR accessibility.' }
  ];

  document.querySelectorAll('.era-btn, .timeline-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.era-btn, .timeline-btn').forEach(b => {
        b.classList.remove('bg-teal-500/15', 'border-teal-400', 'ring-1', 'ring-teal-400/50', 'bg-teal-500', 'text-black');
        b.classList.add('bg-zinc-900/90', 'border-zinc-800');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.remove('bg-zinc-900/90', 'border-zinc-800');
      btn.classList.add('bg-teal-500/15', 'border-teal-400', 'ring-1', 'ring-teal-400/50');
      btn.setAttribute('aria-pressed', 'true');

      const idx = Number(btn.getAttribute('data-era'));
      const d = TIMELINE_DATA[idx];
      if (!d) return;
      const eNum = document.getElementById('eraNumBadge') || document.getElementById('eraNum');
      const eStat = document.getElementById('eraStatusPill') || document.getElementById('eraStatus');
      const eTitle = document.getElementById('eraTitle');
      const eOrg = document.getElementById('eraOrgSub') || document.getElementById('eraOrg');
      const eDesc = document.getElementById('eraDesc');
      if (eNum) eNum.textContent = d.num;
      if (eStat) eStat.textContent = d.status;
      if (eTitle) eTitle.innerHTML = d.title;
      if (eOrg) eOrg.textContent = d.org;
      if (eDesc) eDesc.textContent = d.desc;
    });
  });

  // =========================================================================
  // 9. THREE.JS 3D WIREFRAME & BEATS (SCENE 06)
  // =========================================================================
  let meshGroup = null;
  let targetRotX = 0;
  let targetRotY = 0;

  function initThreeCraft() {
    const canvas = document.getElementById('craftThreeCanvas');
    if (!canvas || typeof THREE === 'undefined') return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
    camera.position.z = 5.2;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    meshGroup = new THREE.Group();
    const geoOuter = new THREE.IcosahedronGeometry(1.55, 1);
    const matOuter = new THREE.MeshBasicMaterial({ color: 0x14b8a6, wireframe: true, transparent: true, opacity: 0.55 });
    meshGroup.add(new THREE.Mesh(geoOuter, matOuter));

    const geoInner = new THREE.OctahedronGeometry(0.95, 0);
    const matInner = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.9 });
    meshGroup.add(new THREE.Mesh(geoInner, matInner));

    const pCount = 90;
    const pGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount * 3; i++) positions[i] = (Math.random() - 0.5) * 4.5;
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x5eead4, size: 0.04, transparent: true, opacity: 0.75 });
    meshGroup.add(new THREE.Points(pGeo, pMat));

    scene.add(meshGroup);

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      targetRotY = ((e.clientX - rect.left) / rect.width - 0.5) * 1.4;
      targetRotX = ((e.clientY - rect.top) / rect.height - 0.5) * 1.4;
    });

    function animate() {
      requestAnimationFrame(animate);
      meshGroup.rotation.y += 0.0045 + (targetRotY - meshGroup.rotation.y) * 0.03;
      meshGroup.rotation.x += 0.002 + (targetRotX - meshGroup.rotation.x) * 0.03;
      renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
      if (!canvas.clientWidth) return;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    });
  }
  window.addEventListener('load', initThreeCraft);

  document.querySelectorAll('.craft-beat-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.craft-beat-card').forEach(c => c.classList.remove('is-on'));
      card.classList.add('is-on');
      const idx = Number(card.getAttribute('data-beat')) + 1;
      const title = card.querySelector('h3') ? card.querySelector('h3').textContent : '';
      const th = document.getElementById('terminalHeader');
      const tl = document.getElementById('terminalLiveLine');
      if (th) th.textContent = `// ACTIVE BEAT: 0${idx} ${title}`;
      if (tl) tl.textContent = card.getAttribute('data-terminal');
      if (meshGroup) {
        meshGroup.rotation.y += 0.7;
        meshGroup.rotation.x += 0.4;
      }
    });
  });

  // =========================================================================
  // 10. ACROSS SECTORS INTERACTIVE EXPLORER (SCENE 07)
  // =========================================================================
  const DOMAINS = [
    {
      count: '01 / 05',
      org: 'MBIE / IMMIGRATION NEW ZEALAND',
      title: 'DIGITAL PAYMENTS & 3DS 2.0 SECURITY',
      desc: 'Led a 5-person QA team on NZeTA Batch Portal PayNow (Builds 1–3) across QuickPay and Windcave gateways, Provider/Proxy/CRT rules, duplicate-payment prevention, GST invoicing, and NZeTA Web 3DS 2.0 card authentication via Datacom Payment Gateway.',
      tags: ['NZeTA PayNow', '3DS 2.0 (Datacom)', 'Windcave & QuickPay', '5-Person QA Lead']
    },
    {
      count: '02 / 05',
      org: 'MBIE (IPONZ) & OPEN BANKING',
      title: 'CLOUD, SAAS & OPEN BANKING MIGRATION',
      desc: 'Data Migration Test Lead for IPONZ SaaS Cloud Migration (COEXYA France) and hands-on IPONZ Legacy V3.39–Optonum seamless integration (Postman APIs, Keycloak SSO/SLO, NFR baselines), external vendor audit technical interviews, plus Open Banking Standards & Dow Jones CDR.',
      tags: ['IPONZ SaaS Migration', 'SQL Reconciliation', 'Open Banking CDR', 'MuleSoft & OpenAPI']
    },
    {
      count: '03 / 05',
      org: 'PROGRAMME WORK VIA ONE NZ (2019–2025)',
      title: 'DEFENCE, MSD & POLICING MOBILITY',
      desc: 'Technical Test Lead across three high-security enterprise mobility workstreams delivered via One NZ: NZDF BlackBerry UEM cutover to Microsoft Intune with zero data loss, MSD Workspace ONE migration, and NZ Police supervised iOS release governance.',
      tags: ['NZDF (Intune)', 'MSD (Workspace ONE)', 'NZ Police (iOS)', 'One NZ']
    },
    {
      count: '04 / 05',
      org: 'DOC & THE CO-OPERATIVE BANK',
      title: 'NATIONAL ERP, POS & DIGITAL LENDING',
      desc: 'Delivered end-to-end testing for the Department of Conservation Great Walks national booking platform, visitor-centre POS hardware & SAP/ERP finance integration, plus core internet banking migration and Cypress/Selenium automation at The Co-operative Bank.',
      tags: ['DOC Great Walks', 'POS & SAP/ERP', 'The Co-operative Bank', 'Cypress Automation']
    },
    {
      count: '05 / 05',
      org: 'MBIE (EPBR) & VICTORIA UNIVERSITY OF WELLINGTON',
      title: 'ACCESSIBILITY (WCAG 2.1 AA) & STATUTORY DATA',
      desc: 'Executed WCAG 2.1 AA and NVDA/VoiceOver screen-reader accessibility assurance on the MBIE Earthquake-Prone Building Register (EPBR), and led Single Data Return (SDR) Ministry of Education statutory reporting SQL validation at Victoria University of Wellington.',
      tags: ['EPBR WCAG 2.1 AA', 'NVDA Screen Reader', 'VUW SDR Reporting', 'SQL Data Validation']
    }
  ];

  document.querySelectorAll('.dom-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.dom-btn').forEach(b => {
        b.className = 'dom-btn w-full text-left p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between cursor-pointer transition-all';
      });
      btn.className = 'dom-btn w-full text-left p-3.5 rounded-xl bg-teal-500/15 border border-teal-400 flex items-center justify-between cursor-pointer transition-all';
      const d = DOMAINS[Number(btn.getAttribute('data-dom'))];
      if (!d) return;
      const dc = document.getElementById('domCount');
      const doBadge = document.getElementById('domOrgBadge');
      const dt = document.getElementById('domTitle');
      const dd = document.getElementById('domDesc');
      const dTags = document.getElementById('domTags');
      if (dc) dc.textContent = d.count;
      if (doBadge) doBadge.textContent = d.org;
      if (dt) dt.textContent = d.title;
      if (dd) dd.textContent = d.desc;
      if (dTags) dTags.innerHTML = d.tags.map(t => `<span class="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-xs">${t}</span>`).join('');
    });
  });

  // =========================================================================
  // 11. QUICK SEARCH / COMMAND PALETTE (Fixes Defect 2 & Defect 3)
  // =========================================================================
  // 12. COMMAND PALETTE & QUICK SEARCH (Fixes Defect 2 & Defect 3)
  // =========================================================================
  const CMD_ITEMS = [
    // Executive CV & Credentials
    {
      label: 'Download Executive Master CV (PDF) & View Credentials',
      tag: 'Executive CV · Eligibility',
      keywords: 'cv resume pdf download nz citizen police vetted australian work eligibility credentials',
      href: '#hero',
      action: () => {
        const modal = document.getElementById('cvPreviewModal');
        if (modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); }
      }
    },
    // Featured Projects (Tier-1)
    {
      label: '01 · NZeTA Batch Portal – PayNow / Upfront Payments (5-Person QA Team Leadership)',
      tag: 'Featured Case 01 · Payments',
      keywords: '01 nzeta paynow windcave quickpay batch payments lead 5-person qa team upfront mbie immigration',
      href: '#work',
      action: () => jumpToCaseStudy('01')
    },
    {
      label: '03 · IPONZ SaaS Cloud Migration & Open Banking / Dow Jones CDR',
      tag: 'Featured Case 03 · Migration',
      keywords: '03 iponz saas cloud migration sql reconciliation data transformation coexya open banking cdr dow jones',
      href: '#work',
      action: () => jumpToCaseStudy('03')
    },
    {
      label: '05 · One NZ Enterprise Mobility — NZDF Cutover, MSD & NZ Police Intune Governance',
      tag: 'Featured Case 05 · Cutover',
      keywords: '05 one nz enterprise mobility nzdf blackberry uem cutover intune msd workspace one nz police ios nzism',
      href: '#work',
      action: () => jumpToCaseStudy('05')
    },

    // Additional Case Studies (Tier-2)
    {
      label: '02 · NZeTA Web – 3D Secure (3DS 2.0) Datacom Payment Gateway Integration',
      tag: 'Case Study 02 · 3DS',
      keywords: '02 3ds 3d secure datacom gateway payment fraud friction challenge protocol visa mastercard',
      href: '#work',
      action: () => jumpToCaseStudy('02')
    },
    {
      label: '04 · Earthquake-Prone Building Register (EPBR) WCAG 2.1 AA Accessibility Assurance',
      tag: 'Case Study 04 · Accessibility',
      keywords: '04 epbr earthquake-prone building register wcag 2.1 aa accessibility screen reader keyboard axe compliance',
      href: '#work',
      action: () => jumpToCaseStudy('04')
    },
    {
      label: '06 · DOC Great Walks ERP/POS Platform & Co-op Bank Cypress Automation',
      tag: 'Case Study 06 · Banking & ERP',
      keywords: '06 doc department of conservation great walks pos prime minister launch co-op bank cypress selenium core banking',
      href: '#work',
      action: () => jumpToCaseStudy('06')
    },

    // Interactive QA Labs
    {
      label: 'Run Live Go/No-Go Release Gate Simulator (Interactive QA Lab)',
      tag: 'QA Lab · Release Gate',
      keywords: 'qa lab simulator release gate go no-go decision production readiness risk scoring automated evidence',
      href: '#lab',
      action: () => {
        window.location.hash = '#lab';
        const b = document.getElementById('runSimBtn');
        if (b) b.click();
      }
    },
    {
      label: 'Inspect AI-Assisted Test Design (Copilot Generation vs Mazher Correction)',
      tag: 'QA Lab · AI Quality',
      keywords: 'ai quality copilot generative llm test design boundary edge cases mazher correction prompt synthetic',
      href: '#lab',
      action: () => {
        window.location.hash = '#lab';
        const t = document.getElementById('aiTabMazher');
        if (t) t.click();
      }
    },

    // Global Footprint Countries (Fixes Defect 3: Singapore, Egypt, Malaysia, USA, etc.)
    {
      label: 'Singapore · Global Tech Hub Delivery (Fintech, Cloud & Latency Testing)',
      tag: 'Country · Singapore',
      keywords: 'singapore sg fintech asia cloud latency performance payments banking',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('SG')
    },
    {
      label: 'Egypt · Mobile Telecommunications & Core QA Handset Systems',
      tag: 'Country · Egypt',
      keywords: 'egypt eg cairo telecommunications telco mobile handset roaming networks',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('EG')
    },
    {
      label: 'Malaysia · Enterprise Delivery & Telecommunications Systems',
      tag: 'Country · Malaysia',
      keywords: 'malaysia my kuala lumpur enterprise telecom core networks consulting',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('MY')
    },
    {
      label: 'United States (USA) · Systems Delivery, Project Travel & Integration',
      tag: 'Country · USA',
      keywords: 'united states usa us america global enterprise architecture integration travel',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('US')
    },
    {
      label: 'United Arab Emirates (UAE) · Enterprise Systems & Regional Consulting',
      tag: 'Country · UAE',
      keywords: 'united arab emirates uae ae dubai abu dhabi middle east enterprise consulting',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('AE')
    },
    {
      label: 'Qatar · Banking & Financial Platform Assurance',
      tag: 'Country · Qatar',
      keywords: 'qatar qa doha banking financial payments switch assurance compliance',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('QA')
    },
    {
      label: 'Oman · Regional Enterprise Solutions Delivery',
      tag: 'Country · Oman',
      keywords: 'oman om muscat enterprise solutions systems implementation integration',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('OM')
    },
    {
      label: 'Saudi Arabia · Enterprise IT Career Start (2012) & Oracle ERP QA',
      tag: 'Country · Saudi Arabia',
      keywords: 'saudi arabia sa ksa riyadh career origin oracle erp enterprise systems 2012',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('SA')
    },
    {
      label: 'New Zealand · Wellington HQ & Long-Term Base (MBIE, One NZ, DOC, Co-op Bank)',
      tag: 'Country · New Zealand',
      keywords: 'new zealand nz wellington destination citizenship home mbie one nz doc police defence banking',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('NZ')
    },
    {
      label: 'Australia · Work Rights & Trans-Tasman Engagements',
      tag: 'Country · Australia',
      keywords: 'australia au trans-tasman work rights sydney melbourne special category visa 444',
      href: '#global-footprint',
      action: () => activateCountryAndScroll('AU')
    },

    // Contact & External Links
    {
      label: 'Email Mazher Hussain (mazher.khaja313@outlook.co.nz)',
      tag: 'Direct Contact · Email',
      keywords: 'email mail contact mazher message outlook phone wlg wellington',
      href: 'mailto:mazher.khaja313@outlook.co.nz',
      action: () => { window.location.href = 'mailto:mazher.khaja313@outlook.co.nz'; }
    },
    {
      label: 'LinkedIn Profile · Connect with Mazher Hussain',
      tag: 'Profile · LinkedIn',
      keywords: 'linkedin profile social connect recommendations network professional',
      href: 'https://www.linkedin.com/in/kmazherhussain/',
      action: () => { window.open('https://www.linkedin.com/in/kmazherhussain/', '_blank', 'noopener,noreferrer'); }
    }
  ];

  function activateCountryAndScroll(code) {
    const sec = document.getElementById('global-footprint');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    activateCountry(code);
  }

  const cmdModal = document.getElementById('cmdPaletteModal');
  const cmdInput = document.getElementById('cmdSearchInput');
  const cmdList = document.getElementById('cmdResultsList');
  const openCmdBtn = document.getElementById('openCmdPaletteBtn') || document.getElementById('quickSearchBtn');
  let filteredCmdItems = [...CMD_ITEMS];
  let activeCmdIndex = 0;
  let lastCmdTrigger = null;

  function openCmdPalette(triggerEl) {
    lastCmdTrigger = triggerEl || openCmdBtn;
    if (cmdModal) {
      cmdModal.classList.remove('hidden');
      cmdModal.classList.add('flex');
    }
    document.querySelectorAll('#openCmdPaletteBtn, #quickSearchBtn, .quick-search-trigger').forEach(btn => {
      btn.setAttribute('aria-expanded', 'true');
    });
    if (cmdInput) {
      cmdInput.value = '';
      activeCmdIndex = 0;
      renderCmdList('');
      setTimeout(() => cmdInput.focus(), 30);
    }
  }

  function closeCmdPalette() {
    if (cmdModal) {
      cmdModal.classList.add('hidden');
      cmdModal.classList.remove('flex');
    }
    document.querySelectorAll('#openCmdPaletteBtn, #quickSearchBtn, .quick-search-trigger').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    if (lastCmdTrigger && typeof lastCmdTrigger.focus === 'function') {
      lastCmdTrigger.focus();
    }
  }

  function executeCmdItem(item) {
    if (!item) return;
    closeCmdPalette();
    if (typeof item.action === 'function') {
      item.action();
    } else if (item.href) {
      window.location.hash = item.href;
    }
  }

  function renderCmdList(filterQuery) {
    if (!cmdList) return;
    const q = (filterQuery || '').toLowerCase().trim();
    const terms = q.split(/\s+/).filter(Boolean);

    filteredCmdItems = CMD_ITEMS.filter(it => {
      if (terms.length === 0) return true;
      const haystack = (it.label + ' ' + it.tag + ' ' + (it.keywords || '')).toLowerCase();
      return terms.every(t => haystack.includes(t));
    });

    if (cmdInput) {
      if (filteredCmdItems.length > 0) {
        cmdInput.setAttribute('aria-activedescendant', `cmd-opt-${activeCmdIndex}`);
      } else {
        cmdInput.removeAttribute('aria-activedescendant');
      }
    }
    if (filteredCmdItems.length === 0) {
      cmdList.innerHTML = `<li class="p-4 text-center text-xs text-zinc-500 font-mono-kicker">No matching results found for "${q}". Try "PayNow", "IPONZ", "Singapore", "Egypt", "Intune", or "Download CV".</li>`;
      return;
    }

    cmdList.innerHTML = filteredCmdItems.map((it, idx) => `
      <li id="cmd-opt-${idx}" role="option" aria-selected="${idx === activeCmdIndex}" data-cmd-idx="${idx}" class="cmd-item p-3 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-colors ${idx === activeCmdIndex ? 'bg-teal-500/20 text-white border border-teal-400/40' : 'hover:bg-zinc-900 text-zinc-300'}">
        <span class="text-xs font-medium">${it.label}</span>
        <span class="px-2 py-0.5 rounded font-mono-kicker text-[9px] bg-zinc-900 border border-zinc-700 text-teal-300 shrink-0">${it.tag}</span>
      </li>
    `).join('');

    cmdList.querySelectorAll('.cmd-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        const idx = parseInt(el.getAttribute('data-cmd-idx'), 10);
        if (!isNaN(idx)) {
          activeCmdIndex = idx;
          updateCmdSelection();
        }
      });
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-cmd-idx'), 10);
        executeCmdItem(filteredCmdItems[idx]);
      });
    });
  }

  function updateCmdSelection() {
    if (!cmdList) return;
    const items = cmdList.querySelectorAll('.cmd-item');
    items.forEach((item, idx) => {
      const isSelected = idx === activeCmdIndex;
      item.setAttribute('aria-selected', String(isSelected));
      if (isSelected) {
        item.classList.add('bg-teal-500/20', 'text-white', 'border', 'border-teal-400/40');
        item.classList.remove('hover:bg-zinc-900', 'text-zinc-300');
        item.scrollIntoView({ block: 'nearest' });
      } else {
        item.classList.remove('bg-teal-500/20', 'text-white', 'border', 'border-teal-400/40');
        item.classList.add('hover:bg-zinc-900', 'text-zinc-300');
      }
    });
  }

  // Attach search triggers
  document.querySelectorAll('#openCmdPaletteBtn, #quickSearchBtn, .quick-search-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCmdPalette(btn);
    });
  });

  const closeCmdPaletteBtn = document.getElementById('closeCmdPaletteBtn');
  if (closeCmdPaletteBtn) {
    closeCmdPaletteBtn.addEventListener('click', closeCmdPalette);
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      activeCmdIndex = 0;
      renderCmdList(e.target.value);
    });
    cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (filteredCmdItems.length > 0) {
          activeCmdIndex = (activeCmdIndex + 1) % filteredCmdItems.length;
          updateCmdSelection();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (filteredCmdItems.length > 0) {
          activeCmdIndex = (activeCmdIndex - 1 + filteredCmdItems.length) % filteredCmdItems.length;
          updateCmdSelection();
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCmdItems[activeCmdIndex]) {
          executeCmdItem(filteredCmdItems[activeCmdIndex]);
        }
      }
    });
  }

  // =========================================================================
  // 12. DIALOG FOCUS TRAPPING (Fixes Defect 2)
  // =========================================================================
  function trapModalFocus(modalEl) {
    if (!modalEl) return;
    modalEl.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusables = modalEl.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
      const visible = Array.from(focusables).filter(el => el.offsetParent !== null);
      if (visible.length === 0) return;
      const first = visible[0];
      const last = visible[visible.length - 1];

      // If active element is not inside the modal, force focus back inside
      if (!modalEl.contains(document.activeElement)) {
        if (e.shiftKey) {
          last.focus();
        } else {
          first.focus();
        }
        e.preventDefault();
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    });
  }

  trapModalFocus(cmdModal);
  trapModalFocus(caseModal);

  // =========================================================================
  // 13. EXECUTIVE CV MODAL & DIRECT DOWNLOAD (Fixes Defect 4)
  // =========================================================================
  const cvPreviewModal = document.getElementById('cvPreviewModal');
  const closeCvModalBtn = document.getElementById('closeCvModalBtn');
  let lastCvTrigger = null;

  function openCvModal(triggerEl) {
    lastCvTrigger = triggerEl || document.activeElement;
    if (cvPreviewModal) {
      cvPreviewModal.classList.remove('hidden');
      cvPreviewModal.classList.add('flex');
    }
    setTimeout(() => {
      if (closeCvModalBtn) {
        closeCvModalBtn.focus();
      }
    }, 40);
  }

  function closeCvModal() {
    if (cvPreviewModal) {
      cvPreviewModal.classList.add('hidden');
      cvPreviewModal.classList.remove('flex');
    }
    if (lastCvTrigger && typeof lastCvTrigger.focus === 'function') {
      lastCvTrigger.focus();
    }
  }

  // Wire all CV buttons
  document.querySelectorAll('.download-cv-trigger, #openCvModalBtn, #heroCvBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCvModal(btn);
    });
  });

  if (closeCvModalBtn) {
    closeCvModalBtn.addEventListener('click', closeCvModal);
    closeCvModalBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeCvModal();
      }
    });
  }

  trapModalFocus(cvPreviewModal);

  const printCvSummaryBtn = document.getElementById('printCvSummaryBtn');
  if (printCvSummaryBtn) {
    printCvSummaryBtn.addEventListener('click', () => { window.open('Mazher_Hussain_Executive_Master_CV.pdf', '_blank'); });
  }

  const directPdfDownloadBtn = document.getElementById('directPdfDownloadBtn');
  if (directPdfDownloadBtn) {
    directPdfDownloadBtn.addEventListener('click', () => {
      const pdfFile = 'Mazher_Hussain_Executive_Master_CV.pdf';
      const link = document.createElement('a');
      link.href = pdfFile;
      link.download = pdfFile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Backdrop click closing for all modals
  [cvPreviewModal, cmdModal, caseModal].forEach(m => {
    if (m) {
      m.addEventListener('click', (e) => {
        if (e.target === m) {
          if (m === cvPreviewModal) closeCvModal();
          if (m === cmdModal) closeCmdPalette();
          if (m === caseModal) closeCaseModal();
        }
      });
    }
  });

  // Global Keydown Handler (Cmd+K / Ctrl+K and Escape - Fixes Defect 4)
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openCmdPalette(document.activeElement);
    } else if (e.key === 'Escape') {
      let handled = false;
      if (cmdModal && !cmdModal.classList.contains('hidden')) {
        closeCmdPalette();
        handled = true;
      }
      if (caseModal && !caseModal.classList.contains('hidden')) {
        closeCaseModal();
        handled = true;
      }
      // Closes CV preview on Escape (Fixes Defect 4!)
      if (cvPreviewModal && !cvPreviewModal.classList.contains('hidden')) {
        closeCvModal();
        handled = true;
      }
      if (handled) {
        e.preventDefault();
      }
    }
  });

  // =========================================================================
  // 14. MOBILE MENU DRAWER (Mobile-First Executive Sheet)
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavPanel = document.getElementById('mobileNavPanel');
  const closeMobileNavBtn = document.getElementById('closeMobileNavBtn');
  const mobileMenuBtnLabel = document.getElementById('mobileMenuBtnLabel');

  function isMobileNavOpen() {
    return !!(mobileNavDrawer && !mobileNavDrawer.classList.contains('hidden'));
  }

  function openMobileNav() {
    if (!mobileNavDrawer) return;
    mobileNavDrawer.classList.remove('hidden');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    if (mobileMenuBtnLabel) mobileMenuBtnLabel.textContent = 'Close ✕';
    document.body.style.overflow = 'hidden';
    if (closeMobileNavBtn) closeMobileNavBtn.focus();
  }

  function closeMobileNav(restoreFocus = true) {
    if (!mobileNavDrawer || mobileNavDrawer.classList.contains('hidden')) return;
    mobileNavDrawer.classList.add('hidden');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    if (mobileMenuBtnLabel) mobileMenuBtnLabel.textContent = 'Menu ☰';
    document.body.style.overflow = '';
    if (restoreFocus && mobileMenuBtn && typeof mobileMenuBtn.focus === 'function') {
      mobileMenuBtn.focus();
    }
  }

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (isMobileNavOpen()) {
        closeMobileNav(true);
      } else {
        openMobileNav();
      }
    });
  }

  if (closeMobileNavBtn) {
    closeMobileNavBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileNav(true);
    });
  }

  if (mobileNavDrawer) {
    // Backdrop click closes drawer
    mobileNavDrawer.addEventListener('click', (e) => {
      if (e.target === mobileNavDrawer || (mobileNavPanel && !mobileNavPanel.contains(e.target))) {
        closeMobileNav(true);
      }
    });
    // Any navigation link or action inside drawer closes drawer cleanly
    mobileNavDrawer.querySelectorAll('a, button:not(#closeMobileNavBtn)').forEach(el => {
      el.addEventListener('click', () => closeMobileNav(false));
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMobileNavOpen()) {
      e.preventDefault();
      closeMobileNav(true);
    }
  });

  // =========================================================================
  // 15. SCROLL PROGRESS & SCENE COUNTER TELEMETRY
  // =========================================================================
  const progressBar = document.getElementById('progressBar');
  const sceneCounterNum = document.getElementById('sceneCounterNum');
  const sceneCounterLabel = document.getElementById('sceneCounterLabel');
  const sceneSections = document.querySelectorAll('section[data-scene]');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
    if (progressBar) progressBar.style.width = pct + '%';

    let activeNum = '01';
    let activeName = 'Hero';
    sceneSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.45) {
        activeNum = sec.getAttribute('data-scene') || activeNum;
        activeName = sec.getAttribute('data-scene-name') || activeName;
      }
    });
    if (sceneCounterNum) sceneCounterNum.textContent = activeNum;
    if (sceneCounterLabel) sceneCounterLabel.textContent = '/ ' + activeName;
  }, { passive: true });

  // =========================================================================
  // 16. ONE-CLICK CLIPBOARD FEEDBACK
  // =========================================================================
  function copyTextWithFeedback(text, labelEl, originalText) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
    if (labelEl) {
      labelEl.textContent = 'Copied ✓';
      setTimeout(() => { labelEl.textContent = originalText; }, 2000);
    }
  }

  function fallbackCopy(val) {
    const ta = document.createElement('textarea');
    ta.value = val;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  const footerCopyEmailBtn = document.getElementById('footerCopyEmailBtn');
  if (footerCopyEmailBtn) {
    footerCopyEmailBtn.addEventListener('click', () => {
      copyTextWithFeedback('mazher.khaja313@outlook.co.nz', document.getElementById('footerEmailLabel'), 'Copy Email Address');
    });
  }

  const footerCopyPhoneBtn = document.getElementById('footerCopyPhoneBtn');
  if (footerCopyPhoneBtn) {
    footerCopyPhoneBtn.addEventListener('click', () => {
      copyTextWithFeedback('+64 211 842 439', document.getElementById('footerPhoneLabel'), '+64 211 842 439');
    });
  }

  // =========================================================================
  // 17. INITIALIZATION
  // =========================================================================
  renderFeaturedCards();
  renderFilteredWork('all');

})();
