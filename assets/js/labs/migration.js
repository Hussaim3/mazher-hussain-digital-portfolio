/**
 * LABS/MIGRATION.JS - Migration Assurance Lab Runner (Demo 2)
 * Author: Mazher Hussain Digital Portfolio
 */

import { announceStatus } from '../components.js';
import { ChartColors, getAccessibleChartDefaults } from '../chart-config.js';

export function initMigrationLab(containerEl, migrationData) {
  if (!containerEl || !migrationData) return;

  const datasets = migrationData.datasets || [];
  let currentDataset = datasets[0];
  let doughnutChart = null;
  let barChart = null;

  renderShell();
  bindEvents();
  renderDataset(currentDataset);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-sky-400 font-bold uppercase tracking-wider">Demo 2 · Data Migration & ETL Assurance</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">IPONZ SaaS Migration Assurance Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Source-to-target field reconciliation, automated transformation verification, and statutory discrepancy auditing.
            </p>
          </div>
          <div>
            <button id="migrationRunBtn" class="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-display font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              <span>Run Reconciliation</span>
            </button>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Mandatory Confidentiality Control:</strong> Portfolio demonstration using synthetic and sanitised data. No MBIE, IPONZ, customer, production or test-system data is used or connected.
          </div>
        </div>

        <!-- Dataset Selector Buttons -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT MIGRATION DATASET:</label>
          <div class="scenario-picker-container" id="migrationDatasetPicker" role="radiogroup" aria-label="Migration datasets">
            ${datasets.map((d, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${idx === 0 ? 'true' : 'false'}" 
                class="scenario-btn ${idx === 0 ? 'active' : ''}" 
                data-dataset-id="${d.id}">
                ${d.title}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Side-by-Side Record Comparison -->
        <div class="migration-diff-grid">
          <div class="diff-record-pane">
            <div class="diff-record-pane__header text-zinc-300">
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>LEGACY ORACLE SOURCE</span>
              </span>
              <span class="font-mono text-xs text-zinc-500">Schema: DEMO_LEGACY_DB (Synthetic)</span>
            </div>
            <div id="migrationSourceFields" class="space-y-2"></div>
          </div>

          <div class="diff-record-pane">
            <div class="diff-record-pane__header text-zinc-300">
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-teal-400"></span>
                <span>TARGET SAAS CLOUD</span>
              </span>
              <span class="font-mono text-xs text-zinc-500">Schema: DEMO_SAAS_TARGET (Synthetic)</span>
            </div>
            <div id="migrationTargetFields" class="space-y-2"></div>
          </div>
        </div>

        <!-- Field Discrepancy Detail Table -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-mono-kicker text-xs text-zinc-400 font-bold uppercase tracking-wider">// RECONCILIATION AUDIT LEDGER</span>
            <span class="font-mono text-xs text-zinc-400" id="migrationAuditCount"></span>
          </div>
          <div class="accessible-table-container">
            <table class="accessible-table" aria-label="Field reconciliation audit ledger">
              <thead>
                <tr>
                  <th scope="col">Field Name</th>
                  <th scope="col">Legacy Value</th>
                  <th scope="col">Target Value</th>
                  <th scope="col">Transformation Rule</th>
                  <th scope="col">Result</th>
                  <th scope="col">Risk / Impact</th>
                </tr>
              </thead>
              <tbody id="migrationAuditTableBody"></tbody>
            </table>
          </div>
        </div>

        <!-- Charts & Metric Visualisation (Doughnut & Horizontal Bar) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
          <!-- Chart 1: Pass vs Fail Doughnut -->
          <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-display font-bold text-sm text-white">Record Reconciliation Pass Rate</h4>
              <span class="font-mono text-xs text-zinc-400" id="migrationPassRateBadge"></span>
            </div>
            <div class="h-48 relative">
              <canvas id="migrationDoughnutCanvas" aria-label="Record reconciliation pass vs fail doughnut chart" role="img"></canvas>
            </div>
            <div class="text-xs text-zinc-400 font-mono" id="migrationDoughnutSummary"></div>
          </div>

          <!-- Chart 2: Discrepancy Count by Category Bar -->
          <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-display font-bold text-sm text-white">Discrepancies by Field Category</h4>
              <span class="font-mono text-xs text-teal-400">Total Records: <span id="migrationTotalRecords"></span></span>
            </div>
            <div class="h-48 relative">
              <canvas id="migrationBarCanvas" aria-label="Discrepancies by category bar chart" role="img"></canvas>
            </div>
            <div class="text-xs text-zinc-400 font-mono" id="migrationBarSummary"></div>
          </div>
        </div>

        <!-- Simulated SQL Query Drawer -->
        <div class="trace-drawer">
          <div class="trace-drawer__summary" id="migrationSqlToggle" role="button" tabindex="0" aria-expanded="false">
            <span>[+] VIEW SIMULATED RECONCILIATION SQL (PORTFOLIO METHOD EXAMPLE)</span>
            <span class="text-xs text-zinc-500">Click to expand</span>
          </div>
          <div class="trace-drawer__content" id="migrationSqlContent" hidden>
            <pre class="text-sky-300 font-mono text-xs overflow-x-auto">${migrationData.simulatedSQL}</pre>
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#migrationDatasetPicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const dsId = btn.getAttribute('data-dataset-id');
        currentDataset = datasets.find(d => d.id === dsId) || datasets[0];
        renderDataset(currentDataset);
        announceStatus(`Loaded ${currentDataset.title}.`);
      });
    });

    const runBtn = containerEl.querySelector('#migrationRunBtn');
    runBtn.addEventListener('click', () => {
      renderDataset(currentDataset);
      announceStatus(`Reconciliation query completed for ${currentDataset.title}. Overall match rate: ${(currentDataset.matchRate * 100).toFixed(1)}%.`);
    });

    // SQL toggle
    const sqlToggle = containerEl.querySelector('#migrationSqlToggle');
    const sqlContent = containerEl.querySelector('#migrationSqlContent');
    const toggleHandler = () => {
      const isExpanded = sqlToggle.getAttribute('aria-expanded') === 'true';
      sqlToggle.setAttribute('aria-expanded', !isExpanded);
      sqlContent.hidden = isExpanded;
      sqlToggle.querySelector('span:first-child').textContent = isExpanded 
        ? '[+] VIEW SIMULATED RECONCILIATION SQL (PORTFOLIO METHOD EXAMPLE)' 
        : '[-] HIDE SIMULATED RECONCILIATION SQL';
    };
    sqlToggle.addEventListener('click', toggleHandler);
    sqlToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleHandler();
      }
    });
  }

  function renderDataset(dataset) {
    const records = dataset.records || [];
    
    // 1. Render Left & Right Field Panes
    const srcEl = containerEl.querySelector('#migrationSourceFields');
    const tgtEl = containerEl.querySelector('#migrationTargetFields');

    srcEl.innerHTML = records.map(r => `
      <div class="diff-field-row is-${r.type}">
        <span class="text-zinc-400">${r.field}:</span>
        <span class="font-bold text-white">${r.legacy}</span>
      </div>
    `).join('');

    tgtEl.innerHTML = records.map(r => `
      <div class="diff-field-row is-${r.type}">
        <span class="text-zinc-400">${r.field}:</span>
        <span class="font-bold ${r.status === 'pass' ? (r.type === 'transformed' ? 'text-sky-400' : 'text-emerald-400') : 'text-rose-400'}">
          ${r.target}
        </span>
      </div>
    `).join('');

    // 2. Render Audit Table
    const tableBody = containerEl.querySelector('#migrationAuditTableBody');
    tableBody.innerHTML = records.map(r => {
      const badgeClass = r.status === 'pass' 
        ? (r.type === 'transformed' ? 'status--pass text-sky-400 border-sky-500/40' : 'status--pass') 
        : 'status--fail';
      const label = r.status === 'pass' 
        ? (r.type === 'transformed' ? 'Transformed' : 'Exact Match') 
        : 'Discrepancy';
      return `
        <tr>
          <td class="font-mono font-bold text-white">${r.field}</td>
          <td class="font-mono text-zinc-300">${r.legacy}</td>
          <td class="font-mono font-bold ${r.status === 'pass' ? (r.type === 'transformed' ? 'text-sky-300' : 'text-emerald-400') : 'text-rose-400'}">${r.target}</td>
          <td class="text-zinc-400 text-xs">${r.rule}</td>
          <td><span class="status-badge ${badgeClass}">${label}</span></td>
          <td class="text-xs ${r.status === 'fail' ? 'text-rose-300 font-semibold' : 'text-zinc-400'}">${r.impact || 'Verified valid'}</td>
        </tr>
      `;
    }).join('');

    containerEl.querySelector('#migrationAuditCount').textContent = `${records.length} Fields Evaluated`;
    const srcMatchRate = dataset.legacyTotal > 0 ? (dataset.passCount / dataset.legacyTotal) * 100 : 0;
    containerEl.querySelector('#migrationPassRateBadge').textContent = `Source-Based Match Rate: ${srcMatchRate.toFixed(1)}%`;
    const netDiff = Math.abs(dataset.legacyTotal - dataset.targetTotal);
    containerEl.querySelector('#migrationTotalRecords').textContent = `${dataset.legacyTotal.toLocaleString()} source / ${dataset.targetTotal.toLocaleString()} target (diff: ${netDiff})`;

    // 3. Render Charts
    renderCharts(dataset);
  }

  function renderCharts(dataset) {
    if (typeof Chart === 'undefined') return;

    // Destroy existing instances if any
    if (doughnutChart) doughnutChart.destroy();
    if (barChart) barChart.destroy();

    // Chart 1: Doughnut Pass vs Fail
    const doughnutCanvas = containerEl.querySelector('#migrationDoughnutCanvas');
    const defaults = getAccessibleChartDefaults();

    doughnutChart = new Chart(doughnutCanvas, {
      type: 'doughnut',
      data: {
        labels: ['Reconciled (Pass)', 'Discrepancies (Fail)'],
        datasets: [{
          data: [dataset.passCount, dataset.failCount],
          backgroundColor: [ChartColors.success, ChartColors.danger],
          borderColor: '#0b1526',
          borderWidth: 2
        }]
      },
      options: {
        ...defaults,
        cutout: '65%'
      }
    });

    containerEl.querySelector('#migrationDoughnutSummary').textContent = 
      `Summary (Source-Based): ${dataset.passCount.toLocaleString()} / ${dataset.legacyTotal.toLocaleString()} passed (${((dataset.passCount / dataset.legacyTotal)*100).toFixed(1)}%), ${dataset.failCount.toLocaleString()} failed.`;

    // Chart 2: Horizontal Bar Discrepancies by Category
    const barCanvas = containerEl.querySelector('#migrationBarCanvas');
    const catData = dataset.discrepanciesByCategory || {};
    const catLabels = Object.keys(catData);
    const catValues = Object.values(catData);

    barChart = new Chart(barCanvas, {
      type: 'bar',
      data: {
        labels: catLabels,
        datasets: [{
          label: 'Discrepancies',
          data: catValues,
          backgroundColor: ChartColors.info,
          borderColor: ChartColors.border,
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        ...defaults,
        indexAxis: 'y',
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { color: ChartColors.muted, font: { family: "'JetBrains Mono', monospace" } }
          },
          y: {
            grid: { display: false },
            ticks: { color: ChartColors.text, font: { family: "'JetBrains Mono', monospace", size: 10 } }
          }
        }
      }
    });

    containerEl.querySelector('#migrationBarSummary').textContent = 
      `Categories audited: ${catLabels.join(', ')}.`;
  }
}
