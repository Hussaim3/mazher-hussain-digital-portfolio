/**
 * LABS/RELEASE.JS - Release Readiness Lab Runner (Demo 3)
 * Author: Mazher Hussain Digital Portfolio
 */

import { announceStatus } from '../components.js';
import { ChartColors, getAccessibleChartDefaults } from '../chart-config.js';

export function initReleaseLab(containerEl, releaseData) {
  if (!containerEl || !releaseData) return;

  const builds = releaseData.builds || [];
  let currentBuild = builds[1]; // default to Build 2
  let execChart = null;
  let defectChart = null;

  renderShell();
  bindEvents();
  renderBuild(currentBuild);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-emerald-400 font-bold uppercase tracking-wider">Demo 3 · Executive Decision Support</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">Release Readiness & Go/No-Go Governance Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Converting execution telemetry, defect severity, and residual risk into defensible stakeholder release decisions.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <button id="releasePrintBtn" class="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs flex items-center gap-2 transition-colors" aria-label="Print release summary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print Sign-Off</span>
            </button>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Important Governance Rule:</strong> Portfolio demonstration using synthetic demonstration data. The algorithm is illustrative. Real release decisions require project-specific risk acceptance, operational readiness and accountable stakeholder approval.
          </div>
        </div>

        <!-- Build Selector -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT BUILD CANDIDATE:</label>
          <div class="scenario-picker-container" id="releaseBuildPicker" role="radiogroup" aria-label="Release builds">
            ${builds.map((b, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${b.id === currentBuild.id ? 'true' : 'false'}" 
                class="scenario-btn ${b.id === currentBuild.id ? 'active' : ''}" 
                data-build-id="${b.id}">
                ${b.name}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- KPI Summary Cards -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div class="metric-card">
            <span class="metric-card__label">Test Execution</span>
            <span class="metric-card__value" id="kpiExecution"></span>
            <span class="font-mono text-[10px] text-zinc-500">Target: >= 95.0%</span>
          </div>
          <div class="metric-card">
            <span class="metric-card__label">Requirements Coverage</span>
            <span class="metric-card__value" id="kpiCoverage"></span>
            <span class="font-mono text-[10px] text-zinc-500">Target: >= 98.0%</span>
          </div>
          <div class="metric-card">
            <span class="metric-card__label">Critical Defects</span>
            <span class="metric-card__value" id="kpiCritical"></span>
            <span class="font-mono text-[10px] text-zinc-500">Target: Strictly 0 Open</span>
          </div>
          <div class="metric-card">
            <span class="metric-card__label">High Defects</span>
            <span class="metric-card__value" id="kpiHigh"></span>
            <span class="font-mono text-[10px] text-zinc-500">Target: 0 or Mitigated</span>
          </div>
        </div>

        <!-- Decision Engine Banner -->
        <div class="decision-banner" id="releaseDecisionBanner">
          <span class="font-mono text-xs uppercase tracking-widest font-bold">EXECUTIVE GOVERNANCE RECOMMENDATION</span>
          <div class="decision-banner__badge" id="releaseDecisionBadge"></div>
          <p class="text-sm max-w-xl text-zinc-300" id="releaseDecisionRule"></p>
        </div>

        <!-- Readiness Gates Meter -->
        <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
          <div class="flex items-center justify-between">
            <h4 class="font-display font-bold text-sm text-white">Quality Gate Evaluation Checklist</h4>
            <span class="font-mono text-xs text-zinc-400">Strict Decision Policy</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" id="releaseGatesGrid"></div>
        </div>

        <!-- Charts (Execution Chart & Defect Severity Breakdown) -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-display font-bold text-sm text-white">Execution Telemetry</h4>
              <span class="font-mono text-xs text-zinc-400">Pass / Fail / Blocked / Not Run</span>
            </div>
            <div class="h-48 relative">
              <canvas id="releaseExecCanvas" aria-label="Test execution status chart" role="img"></canvas>
            </div>
            <div class="text-xs text-zinc-400 font-mono" id="releaseExecSummary"></div>
          </div>

          <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="font-display font-bold text-sm text-white">Defect Severity Breakdown</h4>
              <span class="font-mono text-xs text-zinc-400">Critical / High / Medium / Low</span>
            </div>
            <div class="h-48 relative">
              <canvas id="releaseDefectCanvas" aria-label="Defect severity distribution chart" role="img"></canvas>
            </div>
            <div class="text-xs text-zinc-400 font-mono" id="releaseDefectSummary"></div>
          </div>
        </div>

        <!-- Residual Risk & Operational Triage Panel -->
        <div class="risk-qa-panel">
          <div class="risk-qa-panel__header">
            <span class="font-display font-bold text-sm text-white">Residual Risk & Operational Mitigation</span>
            <span class="font-mono text-xs text-amber-400">Triage Owner: QA Delivery Lead</span>
          </div>
          <div class="risk-qa-panel__content" id="releaseResidualRisk"></div>
          <div class="risk-qa-panel__recommendation">
            <strong>Release Sign-Off Requirement:</strong> Production release requires written business risk acceptance from Product Owner and verified operational fallback procedures.
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#releaseBuildPicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const bId = btn.getAttribute('data-build-id');
        currentBuild = builds.find(b => b.id === bId) || builds[0];
        renderBuild(currentBuild);
        announceStatus(`Evaluated ${currentBuild.name}. Recommendation: ${currentBuild.recommendation}.`);
      });
    });

    const printBtn = containerEl.querySelector('#releasePrintBtn');
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  function renderBuild(build) {
    // 1. Update KPIs
    const _vals = (build.chartData && build.chartData.datasets && build.chartData.datasets[0] && build.chartData.datasets[0].data) || [0,0,0,0];
    const _tot = _vals.reduce((a, b) => a + b, 0);
    const _execPct = _tot > 0 ? (((_vals[0] + _vals[1]) / _tot) * 100) : (build.execution * 100);
    containerEl.querySelector('#kpiExecution').textContent = `${_execPct.toFixed(1)}%`;
    containerEl.querySelector('#kpiCoverage').textContent = `${(build.requirementsCoverage * 100).toFixed(1)}%`;
    
    const critEl = containerEl.querySelector('#kpiCritical');
    critEl.textContent = build.criticalOpen;
    critEl.className = `metric-card__value ${build.criticalOpen > 0 ? 'text-rose-400' : 'text-emerald-400'}`;

    const highEl = containerEl.querySelector('#kpiHigh');
    highEl.textContent = build.highOpen;
    highEl.className = `metric-card__value ${build.highOpen > 0 ? 'text-amber-400' : 'text-emerald-400'}`;

    // 2. Decision Banner
    const banner = containerEl.querySelector('#releaseDecisionBanner');
    banner.className = `decision-banner ${build.recommendation.toLowerCase().replace(' ', '-')}`;
    containerEl.querySelector('#releaseDecisionBadge').textContent = build.recommendation;
    containerEl.querySelector('#releaseDecisionRule').textContent = build.ruleTriggered;

    // 3. Readiness Gates
    const gatesGrid = containerEl.querySelector('#releaseGatesGrid');
    gatesGrid.innerHTML = (build.gates || []).map(g => {
      const isPass = g.status === 'pass';
      const isCond = g.status === 'conditional';
      const badgeClass = isPass ? 'status--pass' : isCond ? 'status--conditional' : 'status--fail';
      const icon = isPass ? '✓' : isCond ? '▲' : '✕';
      return `
        <div class="p-3 rounded-lg bg-zinc-900 border border-zinc-700/80 flex flex-col justify-between gap-1">
          <span class="font-mono text-[11px] text-zinc-400">${g.name}</span>
          <div class="flex items-center justify-between mt-1">
            <span class="font-display font-bold text-sm text-white">${g.value}</span>
            <span class="status-badge ${badgeClass}">${icon} ${g.status.toUpperCase()}</span>
          </div>
        </div>
      `;
    }).join('');

    // 4. Residual Risk
    containerEl.querySelector('#releaseResidualRisk').innerHTML = `<p>${build.residualRisk}</p>`;

    // 5. Render Charts
    renderCharts(build);
  }

  function renderCharts(build) {
    if (typeof Chart === 'undefined') return;

    if (execChart) execChart.destroy();
    if (defectChart) defectChart.destroy();

    const defaults = getAccessibleChartDefaults();

    // Chart 1: Execution Doughnut
    const execCanvas = containerEl.querySelector('#releaseExecCanvas');
    const cd = build.chartData || { labels: [], datasets: [{ data: [] }] };
    const execValues = cd.datasets[0].data;

    execChart = new Chart(execCanvas, {
      type: 'doughnut',
      data: {
        labels: cd.labels,
        datasets: [{
          data: execValues,
          backgroundColor: [ChartColors.success, ChartColors.danger, ChartColors.blocked, ChartColors.muted],
          borderColor: '#0b1526',
          borderWidth: 2
        }]
      },
      options: {
        ...defaults,
        cutout: '60%'
      }
    });

    containerEl.querySelector('#releaseExecSummary').textContent = 
      `Passed: ${execValues[0]}, Failed: ${execValues[1]}, Blocked: ${execValues[2]} (excluded from execution %), Not Run: ${execValues[3]} — Executed: ${execValues[0] + execValues[1]}/${execValues.reduce((a,b)=>a+b,0)} (${(((execValues[0]+execValues[1])/execValues.reduce((a,b)=>a+b,0))*100).toFixed(1)}%).`;

    // Chart 2: Defect Bar
    const defectCanvas = containerEl.querySelector('#releaseDefectCanvas');
    const db = build.defectBreakdown || {};

    defectChart = new Chart(defectCanvas, {
      type: 'bar',
      data: {
        labels: Object.keys(db),
        datasets: [{
          label: 'Open Defects',
          data: Object.values(db),
          backgroundColor: [ChartColors.danger, ChartColors.warning, ChartColors.info, ChartColors.muted],
          borderColor: ChartColors.border,
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        ...defaults,
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: ChartColors.text, font: { family: "'JetBrains Mono', monospace" } }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { stepSize: 2, color: ChartColors.muted, font: { family: "'JetBrains Mono', monospace" } }
          }
        }
      }
    });

    containerEl.querySelector('#releaseDefectSummary').textContent = 
      `Critical: ${db.Critical || 0}, High: ${db.High || 0}, Medium: ${db.Medium || 0}, Low: ${db.Low || 0}.`;
  }
}
