/**
 * LABS/3DS.JS - 3DS Authentication Lab Runner (Demo 4)
 * Author: Mazher Hussain Digital Portfolio
 */

import { announceStatus } from '../components.js';

export function init3DSLab(containerEl, tdsData) {
  if (!containerEl || !tdsData) return;

  const scenarios = tdsData.scenarios || [];
  const languages = tdsData.languages || {};
  let currentLang = 'en';
  let currentScenario = scenarios[0];

  renderShell();
  bindEvents();
  renderScenario(currentScenario);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-indigo-400 font-bold uppercase tracking-wider">Demo 4 · Card Security & Multilingual Assurance</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">NZeTA 3-D Secure 2.0 Authentication Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Simulating EMV 3DS 2.0 Challenge flows, frictionless risk assessments, and bilingual traveller guidance.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="font-mono text-xs text-zinc-400">Language:</span>
            <div class="inline-flex rounded-lg border border-zinc-700 bg-zinc-900 p-0.5" role="group" aria-label="Select language">
              <button id="langEnBtn" class="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-teal-500 text-zinc-950 transition-all">English</button>
              <button id="langZhBtn" class="px-2.5 py-1 text-xs font-mono font-bold rounded-md text-zinc-400 hover:text-white transition-all">中文 (简体)</button>
            </div>
          </div>
        </div>

        <!-- Mandatory Synthetic Disclaimer -->
        <div class="demo-disclaimer-banner">
          <svg class="disclaimer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <strong>Safety & Confidentiality Control:</strong> Portfolio demonstration using synthetic guidance copy. No real card fields, cardholder data, or bank branding are used or connected.
          </div>
        </div>

        <!-- Scenario Picker -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT AUTHENTICATION SCENARIO:</label>
          <div class="scenario-picker-container" id="tdsScenarioPicker" role="radiogroup" aria-label="3DS scenarios">
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

        <!-- Simulator Browser & QA Panel Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          <!-- Left: Simulated Browser Frame -->
          <div class="browser-simulator-frame w-full">
            <div class="browser-simulator-header">
              <span class="browser-dot bg-rose-500"></span>
              <span class="browser-dot bg-amber-500"></span>
              <span class="browser-dot bg-emerald-500"></span>
              <div class="browser-address-bar">https://nzeta.immigration.govt.nz/secure-payment</div>
            </div>
            
            <div class="p-6 bg-zinc-950 text-white space-y-4" id="tdsSimulatorBody">
              <!-- Content rendered dynamically -->
            </div>
          </div>

          <!-- Right: QA Verification & Risk Panel -->
          <div class="space-y-4">
            <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <div class="flex items-center justify-between pb-2 border-b border-zinc-800">
                <span class="font-display font-bold text-sm text-white">Cryptographic Protocol Telemetry</span>
                <span class="font-mono text-xs text-teal-400">EMV 3DS Core v2.2.0</span>
              </div>
              <div class="grid grid-cols-2 gap-3 text-xs font-mono">
                <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span class="text-zinc-500 block text-[10px]">AUTH RESULT CODE</span>
                  <span class="font-bold text-white text-sm" id="tdsResultCode">-</span>
                </div>
                <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <span class="text-zinc-500 block text-[10px]">ELECTRONIC COMMERCE IND (ECI)</span>
                  <span class="font-bold text-white text-sm" id="tdsEciCode">-</span>
                </div>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 space-y-3">
              <span class="font-display font-bold text-sm text-white block">QA Verification Checklist</span>
              <div class="space-y-2" id="tdsChecksList"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#tdsScenarioPicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const sId = btn.getAttribute('data-scenario-id');
        currentScenario = scenarios.find(s => s.id === sId) || scenarios[0];
        renderScenario(currentScenario);
        announceStatus(`Loaded 3DS scenario: ${currentScenario.label}.`);
      });
    });

    const enBtn = containerEl.querySelector('#langEnBtn');
    const zhBtn = containerEl.querySelector('#langZhBtn');

    enBtn.addEventListener('click', () => {
      currentLang = 'en';
      enBtn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-teal-500 text-zinc-950 transition-all';
      zhBtn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded-md text-zinc-400 hover:text-white transition-all';
      renderScenario(currentScenario);
      announceStatus("Language switched to English.");
    });

    zhBtn.addEventListener('click', () => {
      currentLang = 'zh';
      zhBtn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-teal-500 text-zinc-950 transition-all';
      enBtn.className = 'px-2.5 py-1 text-xs font-mono font-bold rounded-md text-zinc-400 hover:text-white transition-all';
      renderScenario(currentScenario);
      announceStatus("Language switched to Simplified Chinese.");
    });
  }

  function renderScenario(scenario) {
    const copy = languages[currentLang] || languages.en;
    const bodyEl = containerEl.querySelector('#tdsSimulatorBody');

    containerEl.querySelector('#tdsResultCode').textContent = scenario.authResult;
    containerEl.querySelector('#tdsEciCode').textContent = scenario.eci;

    const isPass = scenario.status === 'pass';

    bodyEl.innerHTML = `
      <div class="space-y-4">
        <div class="flex items-center justify-between pb-3 border-b border-zinc-800">
          <div>
            <div class="font-display font-black text-sm text-teal-400 uppercase tracking-wide">NZeTA Payment Gateway</div>
            <div class="text-[11px] text-zinc-400">Total Due: $180.00 NZD (IVL + NZeTA Fee)</div>
          </div>
          <span class="text-xs font-mono text-zinc-500">Session ID: #98421</span>
        </div>

        <div class="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
          <h4 class="font-display font-bold text-sm text-white">${copy.title}</h4>
          <p class="text-xs text-zinc-300 leading-relaxed">${copy.prompt}</p>
          <div class="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800 text-[11px] text-zinc-400">
            ${copy.instructions}
          </div>
          
          <div class="flex items-center gap-2 pt-2">
            <input 
              type="text" 
              value="482910" 
              readonly 
              class="w-32 bg-zinc-950 border border-zinc-700 text-center font-mono font-bold text-white text-sm rounded-lg py-1.5 focus:outline-none" 
              aria-label="${copy.otpPlaceholder}" />
            <button class="px-4 py-1.5 rounded-lg ${isPass ? 'bg-teal-500 text-zinc-950' : 'bg-rose-500 text-white'} font-mono font-bold text-xs uppercase">
              ${copy.submitBtn}
            </button>
          </div>
        </div>

        <div class="p-3 rounded-lg ${isPass ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-300'} border text-xs">
          <strong>Authentication Status:</strong> ${isPass ? copy.successMsg : (scenario.id === '3ds-unavailable' ? copy.unavailableMsg : copy.declineMsg)}
        </div>
      </div>
    `;

    // Render QA checks
    const checksEl = containerEl.querySelector('#tdsChecksList');
    checksEl.innerHTML = (scenario.qaChecks || []).map(c => `
      <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs flex flex-col gap-1">
        <div class="flex items-center justify-between">
          <span class="font-bold text-white">${c.name}</span>
          <span class="status-badge ${c.result === 'Pass' ? 'status--pass' : 'status--fail'}">${c.result}</span>
        </div>
        <span class="text-zinc-400 text-[11px]">${c.note}</span>
      </div>
    `).join('');
  }
}
