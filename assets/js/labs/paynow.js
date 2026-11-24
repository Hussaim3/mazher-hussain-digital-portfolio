/**
 * LABS/PAYNOW.JS - PayNow Assurance Lab Runner (Demo 1)
 * Author: Mazher Hussain Digital Portfolio
 */

import { announceStatus } from '../components.js';

export function initPayNowLab(containerEl, scenariosData) {
  if (!containerEl || !scenariosData) return;

  const coreStages = scenariosData.coreStages || [];
  const scenarios = scenariosData.scenarios || [];
  let currentScenario = scenarios[0];
  let isRunning = false;
  let activeInterval = null;
  let activeTimeouts = [];

  function cancelActiveRun() {
    if (activeInterval) {
      clearInterval(activeInterval);
      activeInterval = null;
    }
    activeTimeouts.forEach(t => clearTimeout(t));
    activeTimeouts = [];
    isRunning = false;
    const runBtn = containerEl ? containerEl.querySelector('#paynowRunBtn') : null;
    if (runBtn) {
      runBtn.disabled = false;
      runBtn.classList.remove('opacity-50');
    }
  }

  let batchSize = 25;

  renderShell();
  bindEvents();
  renderScenario(currentScenario, false);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-teal-400 font-bold uppercase tracking-wider">Demo 1 · Interactive E2E Showcase</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">NZeTA PayNow Assurance Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Simulating border payment transactions across distributed systems, asynchronous webhooks, and ledger reconciliation.
            </p>
          </div>
          <div class="flex items-center gap-3">
            <span class="font-mono-kicker text-xs text-zinc-400">Batch Size:</span>
            <select id="paynowBatchSelect" class="bg-zinc-900 border border-zinc-700 text-white font-mono-kicker text-xs rounded-lg px-2.5 py-1.5 focus:border-teal-400 focus:outline-none" aria-label="Select batch size">
              <option value="5">5 Applications ($900 NZD)</option>
              <option value="25" selected>25 Applications ($4,500 NZD)</option>
              <option value="100">100 Applications ($18,000 NZD)</option>
            </select>
            <button id="paynowResetBtn" class="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono-kicker text-xs transition-colors" aria-label="Reset scenario">
              Reset
            </button>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Mandatory Confidentiality Control:</strong> Portfolio demonstration using synthetic and sanitised data. No MBIE, Immigration New Zealand, Datacom, Windcave, customer, production or test-system data is used or connected.
          </div>
        </div>

        <!-- Scenario Selector Buttons -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT DEMONSTRATION SCENARIO:</label>
          <div class="scenario-picker-container" id="paynowScenarioPicker" role="radiogroup" aria-label="Payment scenarios">
            ${scenarios.map((s, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${idx === 0 ? 'true' : 'false'}" 
                class="scenario-btn ${idx === 0 ? 'active' : ''}" 
                data-scenario-id="${s.id}">
                ${s.label}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Journey Timeline -->
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="font-mono-kicker text-xs text-zinc-400 font-bold">TRANSACTION PIPELINE:</span>
            <button id="paynowRunBtn" class="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-zinc-950 font-display font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-teal-500/20">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Start Payment Journey</span>
            </button>
          </div>

          <div class="stage-timeline-track" id="paynowStagesTrack">
            ${coreStages.map(st => `
              <div class="stage-node is-pending" id="stage-${st.id}">
                <div class="stage-node__icon">
                  <span class="font-mono text-xs">○</span>
                </div>
                <span class="stage-node__name">${st.label}</span>
                <span class="stage-node__status text-zinc-500">Pending</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Risk & QA Action Panel -->
        <div class="risk-qa-panel" id="paynowRiskPanel">
          <!-- Populated dynamically -->
        </div>

        <!-- Detailed Tabs (Coverage, Evidence, Traceability, Defects) -->
        <div class="space-y-3">
          <div class="flex flex-wrap gap-2 border-b border-zinc-800 pb-2" role="tablist" id="paynowTablist">
            <button role="tab" aria-selected="true" aria-controls="panel-coverage" class="scenario-btn active" data-tab-id="coverage">Test Coverage</button>
            <button role="tab" aria-selected="false" aria-controls="panel-evidence" class="scenario-btn" data-tab-id="evidence">Evidence & Payloads</button>
            <button role="tab" aria-selected="false" aria-controls="panel-trace" class="scenario-btn" data-tab-id="trace">Traceability Matrix</button>
            <button role="tab" aria-selected="false" aria-controls="panel-risks" class="scenario-btn" data-tab-id="risks">Risk & Defect Detail</button>
          </div>

          <div id="panel-coverage" role="tabpanel" class="pt-2 text-xs text-zinc-300"></div>
          <div id="panel-evidence" role="tabpanel" class="pt-2 text-xs text-zinc-300" hidden></div>
          <div id="panel-trace" role="tabpanel" class="pt-2 text-xs text-zinc-300" hidden></div>
          <div id="panel-risks" role="tabpanel" class="pt-2 text-xs text-zinc-300" hidden></div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#paynowScenarioPicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (isRunning) return;
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const scId = btn.getAttribute('data-scenario-id');
        cancelActiveRun();
        currentScenario = scenarios.find(s => s.id === scId) || scenarios[0];
        renderScenario(currentScenario, false);
      });
    });

    const runBtn = containerEl.querySelector('#paynowRunBtn');
    runBtn.addEventListener('click', () => {
      runJourney(currentScenario);
    });

    const resetBtn = containerEl.querySelector('#paynowResetBtn');
    resetBtn.addEventListener('click', () => {
      cancelActiveRun();
      renderScenario(currentScenario, false);
      announceStatus("Scenario reset.");
    });

    const batchSelect = containerEl.querySelector('#paynowBatchSelect');
    batchSelect.addEventListener('change', (e) => {
      batchSize = parseInt(e.target.value, 10);
      renderScenario(currentScenario, false);
    });

    // Tab switcher with Arrow-key Navigation (Fixes DEF-06)
    const tablist = containerEl.querySelector('#paynowTablist');
    const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
    tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        const targetId = tab.getAttribute('aria-controls');
        containerEl.querySelectorAll('[role="tabpanel"]').forEach(p => {
          p.hidden = p.id !== targetId;
        });
      });

      tab.addEventListener('keydown', (e) => {
        let nextIdx = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          nextIdx = (idx + 1) % tabs.length;
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          nextIdx = (idx - 1 + tabs.length) % tabs.length;
        } else if (e.key === 'Home') {
          nextIdx = 0;
        } else if (e.key === 'End') {
          nextIdx = tabs.length - 1;
        }
        if (nextIdx !== null) {
          e.preventDefault();
          tabs[nextIdx].focus();
          tabs[nextIdx].click();
        }
      });
    });
  }

  function renderScenario(scenario, hasExecuted) {
    // Reset stages
    coreStages.forEach(st => {
      const node = containerEl.querySelector(`#stage-${st.id}`);
      if (!node) return;
      node.className = 'stage-node is-pending';
      const icon = node.querySelector('.stage-node__icon');
      const statusEl = node.querySelector('.stage-node__status');
      
      if (hasExecuted) {
        const stageStatus = scenario.stages[st.id] || 'pending';
        node.classList.remove('is-pending');
        node.classList.add(`is-${stageStatus}`);
        if (stageStatus === 'pass') {
          icon.innerHTML = '✓';
          statusEl.textContent = 'Pass';
          statusEl.className = 'stage-node__status text-emerald-400 font-bold';
        } else if (stageStatus === 'fail') {
          icon.innerHTML = '✕';
          statusEl.textContent = 'Fail';
          statusEl.className = 'stage-node__status text-rose-400 font-bold';
        } else if (stageStatus === 'blocked') {
          icon.innerHTML = '⊘';
          statusEl.textContent = 'Blocked';
          statusEl.className = 'stage-node__status text-zinc-500';
        } else if (stageStatus === 'pending') {
          icon.innerHTML = '⏳';
          statusEl.textContent = 'Pending';
          statusEl.className = 'stage-node__status text-amber-400 font-medium';
        }
      } else {
        icon.innerHTML = '○';
        statusEl.textContent = 'Ready';
        statusEl.className = 'stage-node__status text-zinc-500';
      }
    });

    // Render Risk Panel
    const riskPanel = containerEl.querySelector('#paynowRiskPanel');
    const badgeColor = scenario.severity === 'None' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' :
                       scenario.severity === 'Low' ? 'bg-amber-500/20 text-amber-400 border-amber-500/40' :
                       'bg-rose-500/20 text-rose-400 border-rose-500/40';

    // Release approval badge only appears after successful execution (Fixes DEF-03)
    const statusPill = hasExecuted ?
      `<span class="px-2.5 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wide ${badgeColor}">
        ${scenario.severity === 'None' && scenario.status === 'pass' ? 'RELEASE APPROVED' : `SEVERITY: ${scenario.severity}`}
       </span>` :
      `<span class="px-2.5 py-1 rounded-full border border-zinc-700 bg-zinc-900 text-zinc-400 text-[11px] font-mono font-bold uppercase tracking-wide">
        AWAITING EXECUTION
       </span>`;

    riskPanel.innerHTML = `
      <div class="risk-qa-panel__header">
        <div class="flex items-center gap-3">
          ${statusPill}
          <span class="font-mono text-xs text-zinc-400">Payment Outcome: <strong class="text-sky-300">${hasExecuted ? (scenario.paymentOutcome || scenario.label) : 'Awaiting Run'}</strong> &nbsp;|&nbsp; QA Verdict: <strong class="${scenario.status === 'pass' ? 'text-emerald-400' : 'text-rose-400'}">${hasExecuted ? (scenario.qaVerdict || scenario.status.toUpperCase()) : 'Pending'}</strong></span>
        </div>
        <span class="font-mono text-xs text-teal-400">Batch Total: $${(batchSize * 180).toLocaleString()} NZD</span>
      </div>
      <div class="risk-qa-panel__content">
        <p><strong>Business Impact:</strong> ${scenario.businessImpact}</p>
      </div>
      <div class="risk-qa-panel__recommendation">
        <p><strong>QA Delivery Lead Action & Recommendation:</strong> ${scenario.qaRecommendation}</p>
      </div>
    `;

    // Render Tabs
    renderTabsContent(scenario, hasExecuted);
  }

  function renderTabsContent(scenario, hasExecuted) {
    // 1. Coverage
    const covEl = containerEl.querySelector('#panel-coverage');
    covEl.innerHTML = `
      <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2">
        <div class="font-mono text-teal-400 font-bold mb-1">// TEST COVERAGE & ACCEPTANCE CRITERIA</div>
        <p class="text-zinc-300"><strong>Scenario ID:</strong> ${scenario.id} (${scenario.tag})</p>
        <p class="text-zinc-300"><strong>Covered Requirements:</strong> US-PAY-101 (Windcave Hosted Gateway Integration), US-PAY-104 (Declined Payment Feedback), US-PAY-108 (Cancellation Handover), US-PAY-112 (Asynchronous Webhook Receipt & Reconciliation).</p>
        <p class="text-zinc-400 mt-2">All tests verified across desktop web, iOS Safari, and Android Chrome viewports down to 320px width.</p>
      </div>
    `;

    // 2. Evidence
    const evEl = containerEl.querySelector('#panel-evidence');
    evEl.innerHTML = `
      <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 font-mono text-xs space-y-2 overflow-x-auto">
        <div class="text-teal-400 font-bold mb-1">// SANITISED EXECUTION TELEMETRY & PAYLOAD</div>
        <pre class="text-zinc-300">${JSON.stringify(scenario.evidence || {}, null, 2)}</pre>
      </div>
    `;

    // 3. Traceability
    const trEl = containerEl.querySelector('#panel-trace');
    trEl.innerHTML = `
      <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-3 font-mono text-xs">
        <div class="text-teal-400 font-bold mb-1">// REQUIREMENT-TO-DEFECT TRACEABILITY CHAIN</div>
        <div class="p-3 rounded-lg bg-zinc-900/90 border border-zinc-700/80 text-zinc-300">
          ${scenario.evidence && scenario.evidence.traceability ? scenario.evidence.traceability : 'User Story -> AC -> Test -> Defect'}
        </div>
        <p class="text-zinc-400">Maintained in Jira / Azure DevOps with strict verification gate before merge.</p>
      </div>
    `;

    // 4. Risks & Defects
    const rkEl = containerEl.querySelector('#panel-risks');
    rkEl.innerHTML = `
      <div class="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-2 text-xs">
        <div class="font-mono text-teal-400 font-bold mb-1">// DEFECT TRIAGE & RESIDUAL RISK REGISTER</div>
        <p class="text-zinc-300"><strong>Identified Risk:</strong> ${scenario.businessImpact}</p>
        <p class="text-zinc-300"><strong>Mitigation:</strong> ${scenario.qaRecommendation}</p>
        <p class="text-zinc-400">Assurance ownership by Mazher Hussain (QA Delivery Lead). Stakeholder sign-off captured in Test Summary Report.</p>
      </div>
    `;
  }

  function runJourney(scenario) {
    if (isRunning) return;
    isRunning = true;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const runBtn = containerEl.querySelector('#paynowRunBtn');
    runBtn.disabled = true;
    runBtn.classList.add('opacity-50');

    announceStatus(`Starting payment journey for ${scenario.label}.`);

    if (reducedMotion) {
      renderScenario(scenario, true);
      isRunning = false;
      runBtn.disabled = false;
      runBtn.classList.remove('opacity-50');
      announceStatus(`Payment journey completed for ${scenario.label}. Result: ${scenario.status}.`);
      return;
    }

    let currentIdx = 0;
    activeInterval = setInterval(() => {
      if (currentIdx < coreStages.length) {
        const st = coreStages[currentIdx];
        const node = containerEl.querySelector(`#stage-${st.id}`);
        if (node) {
          node.classList.remove('is-pending');
          node.classList.add('is-active');
          const stageStatus = scenario.stages[st.id] || 'pending';
          const stTimeout = setTimeout(() => {
            node.classList.remove('is-active');
            node.classList.add(`is-${stageStatus}`);
            const icon = node.querySelector('.stage-node__icon');
            const statusEl = node.querySelector('.stage-node__status');
            if (stageStatus === 'pass') {
              icon.innerHTML = '✓';
              statusEl.textContent = 'Pass';
              statusEl.className = 'stage-node__status text-emerald-400 font-bold';
            } else if (stageStatus === 'fail') {
              icon.innerHTML = '✕';
              statusEl.textContent = 'Fail';
              statusEl.className = 'stage-node__status text-rose-400 font-bold';
            } else if (stageStatus === 'blocked') {
              icon.innerHTML = '⊘';
              statusEl.textContent = 'Blocked';
              statusEl.className = 'stage-node__status text-zinc-500';
            } else if (stageStatus === 'pending') {
              icon.innerHTML = '⏳';
              statusEl.textContent = 'Pending';
              statusEl.className = 'stage-node__status text-amber-400 font-medium';
            }
          }, 200);
          activeTimeouts.push(stTimeout);
        }
        currentIdx++;
      } else {
        clearInterval(activeInterval); activeInterval = null;
        isRunning = false;
        runBtn.disabled = false;
        runBtn.classList.remove('opacity-50');
        renderScenario(scenario, true);
        announceStatus(`Payment journey finished. Verdict: ${scenario.status.toUpperCase()}. Severity: ${scenario.severity}.`);
      }
    }, 280);
  }
}
