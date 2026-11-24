/**
 * LABS/AI-QUALITY.JS - AI Quality Engineering Lab Runner (Demo 6)
 * Author: Mazher Hussain Digital Portfolio
 */

import { announceStatus } from '../components.js';
import { ChartColors, getAccessibleChartDefaults } from '../chart-config.js';

export function initAIQualityLab(containerEl, aiData) {
  if (!containerEl || !aiData) return;

  const promptScenarios = aiData.prompts?.scenarios || [];
  const agents = aiData.agents?.agents || [];
  const artefactCase = aiData.artefacts?.case || {};
  const codeSnippets = aiData.code?.snippets || [];
  const dataValidation = aiData.dataValidation?.recordsSample || [];

  let activeTab = 'prompt-studio';
  let donutChart = null;

  renderShell();
  bindEvents();
  renderTabContent(activeTab);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-purple-400 font-bold uppercase tracking-wider">Demo 6 · Human-Led AI Governance</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">AI Quality Engineering & Governance Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Demonstrating structured prompt engineering, task-specific QA agents, artefact validation, code review, and human-in-the-loop sign-off.
            </p>
          </div>
          <div class="shrink-0 flex items-center">
            <span class="whitespace-nowrap px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-300 font-mono text-xs font-semibold shadow-sm inline-flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              AI Proposes. QA Verifies. Humans Accountable.
            </span>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Confidentiality & Determinism Control:</strong> Static demonstration using deterministic synthetic JSON fixtures. No portfolio content, prompts, CV data or project details are sent to a public language model API.
          </div>
        </div>

        <!-- Module Navigation Buttons -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT INTERACTIVE AI QA MODULE:</label>
          <div class="scenario-picker-container" id="aiModulePicker" role="tablist" aria-label="AI Quality Modules">
            <button role="tab" aria-selected="true" class="scenario-btn active" data-tab="prompt-studio">1. Prompt Studio</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="agent-workshop">2. Agent Workshop</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="artefact-validator">3. Artefact Validator</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="code-review">4. Code Review Lab</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="data-validation">5. Data & ML Validation</button>
            <button role="tab" aria-selected="false" class="scenario-btn" data-tab="approval-gate">6. Human Approval Gate</button>
          </div>
        </div>

        <!-- Active Module Content -->
        <div id="aiActiveModuleContent" class="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-6">
          <!-- Populated dynamically -->
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#aiModulePicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        activeTab = btn.getAttribute('data-tab');
        renderTabContent(activeTab);
        announceStatus(`Switched to AI module: ${btn.textContent.trim()}.`);
      });
    });
  }

  function renderTabContent(tab) {
    const contentEl = containerEl.querySelector('#aiActiveModuleContent');

    if (tab === 'prompt-studio') {
      const scenario = promptScenarios[0] || {};
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Prompt Studio: Weak vs Structured Prompt Pattern</h4>
            <p class="font-mono text-xs text-purple-400">Context framing, constraints, acceptance checks and reusable prompt design</p>
          </div>

          <div class="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs">
            <strong class="text-teal-400 block font-mono mb-1">// INPUT REQUIREMENT (SOURCE OF TRUTH)</strong>
            <p class="text-zinc-200">${scenario.inputRequirement}</p>
          </div>

          <!-- Structured Pattern Architecture Strip -->
          <div class="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 space-y-2 text-xs">
            <span class="font-mono text-purple-300 font-bold uppercase tracking-wider block">Mazher's 6-Part Structured Prompt Architecture:</span>
            <div class="grid grid-cols-2 md:grid-cols-6 gap-2 pt-1 font-mono text-[11px]">
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">1. ROLE</strong>Senior QA Lead</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">2. SOURCE</strong>BRD &amp; AC only</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">3. TASK</strong>Positive + Edge</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">4. CONSTRAINTS</strong>No inventions</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">5. OUTPUT</strong>Traceable matrix</div>
              <div class="p-2 rounded bg-zinc-900/80 border border-purple-500/20"><strong class="text-purple-300 block">6. VALIDATE</strong>Gap &amp; Sign-off</div>
            </div>
          </div>

          <!-- Before vs After Output Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
            <!-- Weak Prompt Output -->
            <div class="p-4 rounded-xl bg-zinc-900/90 border border-rose-500/30 space-y-3">
              <div class="flex items-center justify-between">
                <span class="status-badge status--fail">WEAK / UNSTRUCTURED PROMPT</span>
                <span class="font-mono text-[10px] text-zinc-500">2 Generic Checks</span>
              </div>
              <div class="p-2.5 rounded bg-zinc-950 font-mono text-xs text-zinc-300">
                "${scenario.weakPrompt?.text}"
              </div>
              <div class="font-mono text-xs text-rose-300 p-2.5 rounded bg-rose-950/20 border border-rose-500/20 whitespace-pre-wrap">
${scenario.weakPrompt?.output}
              </div>
              <p class="text-[11px] text-zinc-400"><strong>Critique:</strong> ${scenario.weakPrompt?.critique}</p>
            </div>

            <!-- Structured Prompt Output -->
            <div class="p-4 rounded-xl bg-zinc-900/90 border border-emerald-500/30 space-y-3">
              <div class="flex items-center justify-between">
                <span class="status-badge status--pass">MAZHER'S STRUCTURED PROMPT</span>
                <span class="font-mono text-[10px] text-emerald-400">4 Defensible Tests</span>
              </div>
              <div class="p-2.5 rounded bg-zinc-950 font-mono text-xs text-zinc-300">
                ${scenario.structuredPrompt?.text.replace(/\n/g, '<br/>')}
              </div>
              <div class="space-y-1.5 pt-1">
                ${(scenario.structuredPrompt?.output || []).map(t => `
                  <div class="p-2 rounded bg-zinc-950/80 border border-zinc-800 text-[11px] flex items-start justify-between gap-2">
                    <div>
                      <strong class="font-mono text-teal-400">${t.id} (${t.type}):</strong>
                      <span class="text-zinc-300 block">${t.action}</span>
                      <span class="text-zinc-500 block text-[10px] mt-0.5">Expected: ${t.expected}</span>
                    </div>
                    <span class="status-badge ${t.risk === 'High' ? 'status--fail' : 'status--pass'} text-[9px]">${t.risk}</span>
                  </div>
                `).join('')}
              </div>
              <p class="text-[11px] text-emerald-300"><strong>Quality Impact:</strong> ${scenario.structuredPrompt?.qaImpact}</p>
            </div>
          </div>
        </div>
      `;
    } else if (tab === 'agent-workshop') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Agent Workshop: Purpose, Boundaries & Guardrails</h4>
            <p class="font-mono text-xs text-purple-400">Inspecting 3 specialized QA agents designed for governed delivery</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            ${agents.map(ag => `
              <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between gap-3">
                <div class="space-y-2">
                  <div class="flex items-center justify-between">
                    <span class="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span class="font-mono text-[10px] text-zinc-500">${ag.id}</span>
                  </div>
                  <h5 class="font-display font-bold text-sm text-white">${ag.name}</h5>
                  <p class="text-xs text-zinc-300">${ag.purpose}</p>
                </div>

                <div class="space-y-2 text-[11px] pt-2 border-t border-zinc-800 font-mono">
                  <div>
                    <strong class="text-purple-300 block">Guardrails & Boundaries:</strong>
                    <span class="text-zinc-400">${ag.boundaries}</span>
                  </div>
                  <div>
                    <strong class="text-teal-400 block">Escalation Trigger:</strong>
                    <span class="text-zinc-400">${ag.escalationTrigger}</span>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tab === 'artefact-validator') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">AI Artefact Validator: Human-in-the-Loop Review</h4>
            <p class="font-mono text-xs text-purple-400">Auditing AI-generated test specs against requirements to eliminate hallucinations</p>
          </div>

          <!-- Coverage Improvement Bar -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="metric-card">
              <span class="metric-card__label">Initial AI Coverage</span>
              <span class="metric-card__value text-amber-400">71%</span>
              <span class="font-mono text-[10px] text-zinc-500">2 Hallucinated Assumptions</span>
            </div>
            <div class="metric-card">
              <span class="metric-card__label">After Human Review</span>
              <span class="metric-card__value text-emerald-400">96%</span>
              <span class="font-mono text-[10px] text-zinc-500">4 Critical Negative Tests Added</span>
            </div>
            <div class="metric-card">
              <span class="metric-card__label">Hallucinations Caught</span>
              <span class="metric-card__value text-rose-400">2</span>
              <span class="font-mono text-[10px] text-zinc-500">Filtered from Suite</span>
            </div>
            <div class="metric-card">
              <span class="metric-card__label">Artefact Status</span>
              <span class="metric-card__value text-teal-400 text-lg pt-2">APPROVED</span>
              <span class="font-mono text-[10px] text-zinc-500">Sign-off by Mazher Hussain</span>
            </div>
          </div>

          <!-- Findings List -->
          <div class="space-y-2 pt-2">
            <span class="font-mono text-xs text-zinc-400 font-bold block uppercase">// HUMAN REVIEW FINDINGS & REMEDIATION LOG:</span>
            ${(artefactCase.humanReviewFindings || []).map(f => `
              <div class="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row md:items-start justify-between gap-3 text-xs">
                <div class="space-y-1">
                  <div class="flex items-center gap-2">
                    <span class="font-mono font-bold text-white">${f.id} · ${f.type}</span>
                    <span class="status-badge ${f.severity === 'Critical' ? 'status--fail' : 'status--warning'} text-[9px]">${f.severity}</span>
                  </div>
                  <p class="text-zinc-300">${f.description}</p>
                </div>
                <div class="md:text-right shrink-0">
                  <span class="font-mono text-[10px] text-teal-400 block font-bold">REMEDIATION:</span>
                  <span class="text-zinc-400 text-[11px]">${f.actionTaken}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tab === 'code-review') {
      const snippet = codeSnippets[0] || {};
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Code Review Lab: AI-Generated vs Production-Ready</h4>
            <p class="font-mono text-xs text-purple-400">Side-by-side diff highlighting reliability, accessible locators, and network synchronization</p>
          </div>

          <div class="code-diff-container">
            <div class="code-diff-pane border-rose-500/30">
              <div class="code-diff-pane__header text-rose-400">
                <span>✕ Raw AI Generation (Flaky Anti-Pattern)</span>
                <span class="text-[10px] text-zinc-500">5s hardcoded sleep / Brittle CSS</span>
              </div>
              <pre class="text-rose-200"><code>${snippet.aiGeneratedCode}</code></pre>
            </div>

            <div class="code-diff-pane border-emerald-500/30">
              <div class="code-diff-pane__header text-emerald-400">
                <span>✓ Mazher's Production Revision (Deterministic)</span>
                <span class="text-[10px] text-emerald-400">Semantic roles / Webhook interception</span>
              </div>
              <pre class="text-emerald-200"><code>${snippet.mazherReview?.revisedCode}</code></pre>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1 text-xs">
            <span class="font-mono text-teal-400 font-bold block mb-1">// KEY REFACTORING IMPROVEMENTS:</span>
            <ul class="list-disc list-inside text-zinc-300 space-y-0.5">
              ${(snippet.mazherReview?.improvements || []).map(imp => `<li>${imp}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    } else if (tab === 'data-validation') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Data & ML Validation Lab: Synthetic Anomaly Auditing</h4>
            <p class="font-mono text-xs text-purple-400">Detecting model false positives and enforcing statutory compliance rules</p>
          </div>

          <div class="accessible-table-container">
            <table class="accessible-table" aria-label="ML reconciliation audit ledger">
              <thead>
                <tr>
                  <th scope="col">Record ID</th>
                  <th scope="col">Legacy Category</th>
                  <th scope="col">ML Predicted Category</th>
                  <th scope="col">Statutory Rule Target</th>
                  <th scope="col">Confidence</th>
                  <th scope="col">QA Verdict</th>
                </tr>
              </thead>
              <tbody>
                ${dataValidation.map(row => `
                  <tr>
                    <td class="font-mono text-white font-bold">${row.id}</td>
                    <td class="font-mono text-zinc-300">${row.legacyRecord.status}</td>
                    <td class="font-mono text-zinc-300">${row.mlPredictedCategory}</td>
                    <td class="font-mono font-bold ${row.discrepancy ? 'text-amber-400' : 'text-emerald-400'}">${row.ruleExpectedCategory}</td>
                    <td class="font-mono text-zinc-400">${(row.confidenceScore * 100).toFixed(0)}%</td>
                    <td>
                      <span class="status-badge ${row.discrepancy ? 'status--fail' : 'status--pass'}">
                        ${row.discrepancy ? 'DISCREPANCY OVERTURNED' : 'PASS'}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>

          <div class="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 space-y-1">
            <strong>Critical QA Finding (Row 1002):</strong> Machine learning classification assigned a standard tourist levy ($180 NZD) to an accredited diplomatic passport holder with 82% confidence. Mazher's statutory validation rule caught and overturned the false positive, preventing diplomatic protocol non-compliance.
          </div>
        </div>
      `;
    } else if (tab === 'approval-gate') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">Human Approval Gate: Responsible AI Governance</h4>
            <p class="font-mono text-xs text-purple-400">Accountable human review required before any AI-generated artefact enters execution</p>
          </div>

          <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs text-zinc-400 font-bold uppercase">PENDING ARTEFACT: TC-3DS-019 (Mid-Session Locale Persistence)</span>
              <span class="status-badge status--ai-draft">STATE: AI DRAFT</span>
            </div>
            <p class="text-xs text-zinc-300">
              The Test Design Agent proposes adding an automated regression check ensuring Simplified Chinese session tokens remain active when switching back to English on receipt page.
            </p>

            <div class="flex items-center gap-3 pt-2">
              <button id="gateApproveBtn" class="px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-mono text-xs font-bold uppercase hover:bg-emerald-400 transition-colors">
                Approve for Execution
              </button>
              <button id="gateModifyBtn" class="px-4 py-2 rounded-lg bg-amber-500 text-zinc-950 font-mono text-xs font-bold uppercase hover:bg-amber-400 transition-colors">
                Modify &amp; Request Rework
              </button>
              <button id="gateRejectBtn" class="px-4 py-2 rounded-lg bg-rose-500 text-white font-mono text-xs font-bold uppercase hover:bg-rose-400 transition-colors">
                Reject &amp; Archive
              </button>
            </div>
          </div>

          <div id="gateDecisionOutput" class="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-400">
            Awaiting human reviewer decision...
          </div>
        </div>
      `;

      const outEl = contentEl.querySelector('#gateDecisionOutput');
      contentEl.querySelector('#gateApproveBtn').addEventListener('click', () => {
        outEl.className = 'p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-xs font-mono text-emerald-300';
        outEl.innerHTML = `<strong>DECISION RECORDED: APPROVED FOR USE</strong><br/>Reviewer: Mazher Hussain (QA Delivery Lead)<br/>Timestamp: ${new Date().toISOString()}<br/>Audit Hash: SHA-256: 4a9f82bc18`;
        announceStatus("Artefact approved for test execution.");
      });

      contentEl.querySelector('#gateModifyBtn').addEventListener('click', () => {
        outEl.className = 'p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-xs font-mono text-amber-300';
        outEl.innerHTML = `<strong>DECISION RECORDED: MODIFICATION REQUIRED</strong><br/>Reviewer: Mazher Hussain<br/>Finding: Add explicit verification of 320px mobile reflow before test suite integration.`;
        announceStatus("Artefact flagged for rework.");
      });

      contentEl.querySelector('#gateRejectBtn').addEventListener('click', () => {
        outEl.className = 'p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/40 text-xs font-mono text-rose-300';
        outEl.innerHTML = `<strong>DECISION RECORDED: REJECTED</strong><br/>Reviewer: Mazher Hussain<br/>Reason: Material hallucination inconsistent with BRD scope.`;
        announceStatus("Artefact rejected.");
      });
    }
  }
}
