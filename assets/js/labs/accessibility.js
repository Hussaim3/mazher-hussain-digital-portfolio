/**
 * LABS/ACCESSIBILITY.JS - Accessibility & Inclusive Design Lab (Demo 5)
 * Author: Mazher Hussain Digital Portfolio
 */

import { announceStatus } from '../components.js';

export function initAccessibilityLab(containerEl, a11yData) {
  if (!containerEl || !a11yData) return;

  const modes = a11yData.modes || [];
  let currentMode = modes[0];

  renderShell();
  bindEvents();
  renderMode(currentMode);

  function renderShell() {
    containerEl.innerHTML = `
      <div class="space-y-6">
        <!-- Lab Header -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
              <span class="font-mono-kicker text-xs text-purple-400 font-bold uppercase tracking-wider">Demo 5 · WCAG 2.1 / 2.2 AA Compliance</span>
            </div>
            <h3 class="font-display font-black text-2xl text-white mt-1">Accessibility & Inclusive Design Lab</h3>
            <p class="text-zinc-400 text-xs sm:text-sm mt-0.5">
              Demonstrating keyboard navigation, screen reader transcripts, 400% reflow, error handling, and measured contrast ratios.
            </p>
          </div>
          <div>
            <span class="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs">
              NZ Govt Web Standards 1.1
            </span>
          </div>
        </div>

        <!-- Mode Picker Buttons -->
        <div>
          <label class="font-mono-kicker text-xs text-zinc-400 font-bold block mb-2">SELECT ACCESSIBILITY MODULE:</label>
          <div class="scenario-picker-container" id="a11yModePicker" role="radiogroup" aria-label="Accessibility modules">
            ${modes.map((m, idx) => `
              <button 
                type="button" 
                role="radio" 
                aria-checked="${idx === 0 ? 'true' : 'false'}" 
                class="scenario-btn ${idx === 0 ? 'active' : ''}" 
                data-mode-id="${m.id}">
                ${m.title}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Demonstration Area -->
        <div id="a11yActiveContent" class="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-6">
          <!-- Populated dynamically -->
        </div>
      </div>
    `;
  }

  function bindEvents() {
    const picker = containerEl.querySelector('#a11yModePicker');
    picker.querySelectorAll('.scenario-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.scenario-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-checked', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-checked', 'true');
        const mId = btn.getAttribute('data-mode-id');
        currentMode = modes.find(m => m.id === mId) || modes[0];
        renderMode(currentMode);
        announceStatus(`Viewing ${currentMode.title}. Standard: ${currentMode.standard}.`);
      });
    });
  }

  function renderMode(mode) {
    const contentEl = containerEl.querySelector('#a11yActiveContent');

    if (mode.id === 'keyboard-nav') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div>
              <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
              <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
            </div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-xs text-zinc-400">Toggle Mode:</span>
              <button id="toggleFocusBtn" class="px-3 py-1.5 rounded-lg bg-teal-500 text-zinc-950 font-mono text-xs font-bold">
                Showing: Compliant (Focus Visible)
              </button>
            </div>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>
          
          <div class="p-6 rounded-xl bg-zinc-900 border border-zinc-800 space-y-4" id="keyboardFormBox">
            <div class="space-y-1">
              <label for="a11yInput1" class="font-mono text-xs text-zinc-300 block">Traveller Passport Number:</label>
              <input id="a11yInput1" type="text" placeholder="LA991204" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
            </div>
            <div class="space-y-1">
              <label for="a11yInput2" class="font-mono text-xs text-zinc-300 block">Issuing Country (ISO 3166):</label>
              <input id="a11yInput2" type="text" placeholder="NZL" class="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-teal-400" />
            </div>
            <div class="flex items-center gap-2 pt-2">
              <input id="a11yCheckbox" type="checkbox" class="w-4 h-4 rounded bg-zinc-950 border-zinc-700 text-teal-500 focus:ring-2 focus:ring-teal-400" />
              <label for="a11yCheckbox" class="text-xs text-zinc-300">I declare that all details supplied are true and verifiable.</label>
            </div>
            <button id="a11ySubmitDemoBtn" class="px-5 py-2.5 rounded-xl bg-teal-500 text-zinc-950 font-display font-bold text-xs uppercase focus:outline-none focus:ring-2 focus:ring-teal-400">
              Submit Declaration
            </button>
          </div>
        </div>
      `;

      let isCompliant = true;
      const toggleBtn = contentEl.querySelector('#toggleFocusBtn');
      const box = contentEl.querySelector('#keyboardFormBox');

      toggleBtn.addEventListener('click', () => {
        isCompliant = !isCompliant;
        toggleBtn.textContent = isCompliant ? 'Showing: Compliant (Focus Visible)' : 'Showing: Faulty (Outline: None)';
        toggleBtn.className = isCompliant 
          ? 'px-3 py-1.5 rounded-lg bg-teal-500 text-zinc-950 font-mono text-xs font-bold'
          : 'px-3 py-1.5 rounded-lg bg-rose-500 text-white font-mono text-xs font-bold';

        box.querySelectorAll('input, button').forEach(el => {
          if (isCompliant) {
            el.classList.add('focus:ring-2', 'focus:ring-teal-400');
            el.classList.remove('focus:ring-0', 'outline-none');
          } else {
            el.classList.remove('focus:ring-2', 'focus:ring-teal-400');
            el.classList.add('focus:ring-0', 'outline-none');
          }
        });
        announceStatus(`Switched to ${isCompliant ? 'compliant focus' : 'faulty outline-none'} mode.`);
      });
    } else if (mode.id === 'screen-reader') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
            <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
              <span class="status-badge status--pass">ACCESSIBLE IMPLEMENTATION</span>
              <p class="text-xs text-zinc-300 font-mono mt-2"><strong>NVDA Screen Reader Announcement:</strong></p>
              <div class="p-3 rounded-lg bg-zinc-950 font-mono text-xs text-emerald-300">
                ${mode.accessibleAnnouncement}
              </div>
              <p class="text-[11px] text-zinc-400">Button has explicit text, role, state, and contextual payment metadata.</p>
            </div>

            <div class="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 space-y-2">
              <span class="status-badge status--fail">FAULTY / UNLABELLED IMPLEMENTATION</span>
              <p class="text-xs text-zinc-300 font-mono mt-2"><strong>NVDA Screen Reader Announcement:</strong></p>
              <div class="p-3 rounded-lg bg-zinc-950 font-mono text-xs text-rose-300">
                ${mode.faultyAnnouncement}
              </div>
              <p class="text-[11px] text-zinc-400">Zero accessible name or aria-label provided; assistive users are blocked.</p>
            </div>
          </div>
        </div>
      `;
    } else if (mode.id === 'reflow-400') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div>
              <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
              <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
            </div>
            <button id="toggle320Btn" class="px-3 py-1.5 rounded-lg bg-sky-500 text-zinc-950 font-mono text-xs font-bold">
              Toggle 320px Viewport Simulation
            </button>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>

          <div class="reflow-test-box is-320px" id="reflowBox">
            <div class="text-center font-mono text-xs text-sky-400 font-bold mb-3">
              [ 320 CSS Pixels Viewport Width ]
            </div>
            <div class="space-y-3">
              <div class="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span class="text-xs font-bold text-white block">Step 01: Identification</span>
                <span class="text-[11px] text-zinc-400 block mt-1">Single column wrap with zero horizontal overflow.</span>
              </div>
              <div class="p-3 rounded-lg bg-zinc-900 border border-zinc-800">
                <span class="text-xs font-bold text-white block">Step 02: Verification</span>
                <span class="text-[11px] text-zinc-400 block mt-1">Form buttons stack vertically with full finger tap targets.</span>
              </div>
              <button class="w-full py-2 bg-teal-500 text-zinc-950 font-bold text-xs rounded-lg uppercase">
                Continue Form
              </button>
            </div>
          </div>
        </div>
      `;

      const toggle320Btn = contentEl.querySelector('#toggle320Btn');
      const reflowBox = contentEl.querySelector('#reflowBox');
      let is320 = true;
      toggle320Btn.addEventListener('click', () => {
        is320 = !is320;
        reflowBox.classList.toggle('is-320px', is320);
        toggle320Btn.textContent = is320 ? 'Showing: 320px Simulated Width' : 'Showing: 100% Fluid Width';
        announceStatus(`Viewport width toggled to ${is320 ? '320px' : '100%'}.`);
      });
    } else if (mode.id === 'error-summary') {
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
            <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>

          <div class="p-4 rounded-xl bg-rose-500/10 border-2 border-rose-500/40 space-y-3" role="alert" aria-labelledby="error-heading">
            <h5 id="error-heading" class="font-display font-bold text-sm text-rose-400 flex items-center gap-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
              <span>There are 2 problems in this payment submission:</span>
            </h5>
            <ul class="list-disc list-inside text-xs text-rose-200 space-y-1 font-mono">
              <li><a href="#demo-expiry" class="underline hover:text-white">Expiry date must be in the future (MM/YY format)</a></li>
              <li><a href="#demo-cvv" class="underline hover:text-white">Security code (CVV) must contain 3 digits</a></li>
            </ul>
          </div>
        </div>
      `;
    } else if (mode.id === 'color-contrast') {
      const measurements = mode.measurements || [];
      contentEl.innerHTML = `
        <div class="space-y-4">
          <div class="pb-3 border-b border-zinc-800">
            <h4 class="font-display font-bold text-lg text-white">${mode.title}</h4>
            <p class="font-mono text-xs text-teal-400">${mode.standard}</p>
          </div>
          <p class="text-xs text-zinc-300 leading-relaxed">${mode.description}</p>

          <div class="accessible-table-container">
            <table class="accessible-table" aria-label="Color contrast evaluation table">
              <thead>
                <tr>
                  <th scope="col">UI Element & Color Pairing</th>
                  <th scope="col">Measured Ratio</th>
                  <th scope="col">WCAG Verdict</th>
                </tr>
              </thead>
              <tbody>
                ${measurements.map(m => `
                  <tr>
                    <td class="font-mono text-zinc-300">${m.element}</td>
                    <td class="font-mono font-bold text-white">${m.ratio}</td>
                    <td>
                      <span class="status-badge ${m.verdict.includes('PASS') ? 'status--pass' : 'status--fail'}">
                        ${m.verdict}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  }
}
