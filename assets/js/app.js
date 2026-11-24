/**
 * APP.JS - Main Coordinator & Modular Portfolio Controller
 * Author: Mazher Hussain Digital Portfolio
 */

import { announceStatus, trapModalFocus } from './components.js';
import { initPayNowLab } from './labs/paynow.js';
import { initMigrationLab } from './labs/migration.js';
import { initReleaseLab } from './labs/release.js';
import { init3DSLab } from './labs/3ds.js';
import { initAccessibilityLab } from './labs/accessibility.js';
import { initAIQualityLab } from './labs/ai-quality.js';

// Robust path and fallback resolver (Fixes DEF-01)
async function loadJSON(url) {
  // Check inline window state first
  if (url.includes('credentials.json') && window.__CREDENTIALS_DATA__) {
    return window.__CREDENTIALS_DATA__;
  }

  const isSubpage = window.location.pathname.includes('/certifications/') ||
                    window.location.pathname.includes('/lab/') ||
                    window.location.pathname.includes('/projects/') ||
                    window.location.pathname.includes('/toolkit/') ||
                    window.location.pathname.includes('/cv/') ||
                    window.location.pathname.includes('/experience/');

  const isDeepSubpage = /\/lab\/[^/]+\//.test(window.location.pathname);
  const candidates = [
    url,
    isDeepSubpage ? '../../' + url : (isSubpage ? '../' + url : url),
    '../' + url,
    '../../' + url,
    './' + url,
    '/' + url
  ];

  for (const target of candidates) {
    try {
      const res = await fetch(target);
      if (res.ok) return await res.json();
    } catch (_) {
      // try next
    }
  }

  if (url.includes('credentials.json') && window.__CREDENTIALS_DATA__) {
    return window.__CREDENTIALS_DATA__;
  }

  console.warn(`Could not load JSON from candidates:`, candidates);
  return null;
}

document.addEventListener('DOMContentLoaded', async () => {
  initHeroVFX();
  initAboutIntersections();
  // Mobile nav handled exclusively by single controller in script.js
  initCredentialsDrawer();
  initHomeLabTabs();
  await loadAndInitLabs();
});

// 1. Hero VFX: Quality Signal Network (Page 31)
function initHeroVFX() {
  const signalNodes = document.querySelectorAll('.signal-node');
  if (!signalNodes.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  // Pulse sequence across Validate -> Reconcile -> Release checkpoints
  const checkpoints = document.querySelectorAll('.hero-checkpoint');
  if (checkpoints.length) {
    let cpIndex = 0;
    setInterval(() => {
      checkpoints.forEach((cp, idx) => {
        cp.classList.toggle('active-pulse', idx === cpIndex);
      });
      cpIndex = (cpIndex + 1) % checkpoints.length;
    }, 2400);
  }
}

// 2. About Section Elevation: IntersectionObserver Reveals (Page 33)
function initAboutIntersections() {
  const capabilityCards = document.querySelectorAll('.about-capability-card');
  if (!capabilityCards.length || typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-4');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  capabilityCards.forEach(card => {
    card.classList.add('transition-all', 'duration-500', 'opacity-0', 'translate-y-4');
    observer.observe(card);
  });
}

// 3. Mobile Navigation Toggle
function initMobileNav() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const navDrawer = document.getElementById('mobileNavDrawer');
  const closeBtn = document.getElementById('closeMobileNavBtn');

  if (!menuBtn || !navDrawer) return;

  menuBtn.addEventListener('click', () => {
    navDrawer.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
    trapModalFocus(navDrawer);
    announceStatus("Navigation menu opened.");
  });

  const closeMenu = () => {
    navDrawer.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
    announceStatus("Navigation menu closed.");
  };

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  navDrawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

// 4. Certification Detail Drawer (Page 17-18)
async function initCredentialsDrawer() {
  const credsData = await loadJSON('data/credentials.json');
  if (!credsData) return;

  const gridEl = document.getElementById('credentialsGrid');
  const filterBtns = document.querySelectorAll('.cred-filter-btn');
  const drawer = document.getElementById('credDetailDrawer');
  const drawerBody = document.getElementById('credDrawerBody');
  const closeDrawerBtn = document.getElementById('closeCredDrawerBtn');

  if (!gridEl) return;

  let currentCategory = 'all';

  function renderCards(cat) {
    const list = credsData.credentials || [];
    const filtered = cat === 'all' ? list : list.filter(c => c.category === cat);
    gridEl.innerHTML = filtered.map(c => {
      const isEarned = c.status === 'earned';
      const isProg = c.status === 'in-progress';
      const isUnconf = c.status === 'unconfirmed';
      const badgeClass = isEarned ? 'status--pass' : isProg ? 'status--warning' : 'status--pending';
      const statusLabel = isEarned ? 'EARNED' : isProg ? 'IN PROGRESS' : isUnconf ? 'STATUS UNCONFIRMED' : 'PLANNED';

      return `
        <div class="group p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-teal-500/40 hover:bg-zinc-900/80 transition-all cursor-pointer flex flex-col justify-between gap-3"
             data-cred-id="${c.id}" role="button" tabindex="0" aria-label="View details for ${c.title}">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="font-mono text-[10px] text-zinc-500 uppercase">${c.issuer}</span>
              <span class="status-badge ${badgeClass} text-[9px]">${statusLabel}</span>
            </div>
            <h4 class="font-display font-bold text-sm text-white group-hover:text-teal-300 transition-colors">${c.title}</h4>
            <span class="font-mono text-xs text-sky-400 block">${c.shortTitle}</span>
          </div>
          <div class="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
            <span>${c.earnedDate ? `Awarded: ${c.earnedDate}` : `Target: ${c.targetDate || '2026'}`}</span>
            <span class="text-teal-400 group-hover:translate-x-0.5 transition-transform">Details →</span>
          </div>
        </div>
      `;
    }).join('');

    let lastCredTrigger = null;
    const closeCredDrawer = () => {
      if (!drawer || drawer.classList.contains('hidden')) return;
      drawer.classList.add('hidden');
      announceStatus("Credential drawer closed.");
      if (lastCredTrigger && typeof lastCredTrigger.focus === 'function') {
        lastCredTrigger.focus();
      }
    };
    window.__closeCredDrawer = closeCredDrawer;

    gridEl.querySelectorAll('[data-cred-id]').forEach(card => {
      const openDrawer = () => {
        const cId = card.getAttribute('data-cred-id');
        const cred = (credsData.credentials || []).find(c => c.id === cId);
        if (!cred || !drawer || !drawerBody) return;
        lastCredTrigger = card;
        
        drawerBody.innerHTML = `
          <div class="space-y-4">
            <div class="pb-3 border-b border-zinc-800">
              <span class="font-mono text-xs text-zinc-500 uppercase">${cred.issuer}</span>
              <h3 id="credDrawerTitle" class="font-display font-black text-xl text-white mt-1">${cred.title}</h3>
              <span class="font-mono text-xs text-sky-400">${cred.shortTitle}</span>
            </div>
            <div class="grid grid-cols-2 gap-3 text-xs font-mono">
              <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <span class="text-zinc-500 block text-[10px]">CREDENTIAL STATUS</span>
                <span class="font-bold text-white uppercase">${cred.status}</span>
              </div>
              <div class="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                <span class="text-zinc-500 block text-[10px]">VERIFICATION</span>
                <span class="font-bold ${cred.verified ? 'text-emerald-400' : 'text-zinc-500'}">${cred.verified ? 'EARNED' : (cred.status === 'in-progress' ? 'IN PROGRESS' : 'STATUS UNCONFIRMED')}</span>
              </div>
            </div>
            <div>
              <strong class="font-mono text-xs text-zinc-400 block mb-1">CAPABILITY RELEVANCE:</strong>
              <p class="text-xs text-zinc-300 leading-relaxed">${cred.relevance}</p>
            </div>
            <div>
              <strong class="font-mono text-xs text-zinc-400 block mb-1">SKILLS COVERED:</strong>
              <div class="flex flex-wrap gap-1.5">
                ${(cred.skills || []).map(s => `<span class="px-2 py-0.5 rounded bg-zinc-800 text-[11px] font-mono text-zinc-300">${s}</span>`).join('')}
              </div>
            </div>
            <div class="pt-3 flex flex-wrap items-center gap-3">
              ${cred.pdfUrl ? `
                <a href="${cred.pdfUrl.startsWith('docs/') && window.location.pathname.includes('/certifications/') ? '../' + cred.pdfUrl : cred.pdfUrl}" target="_blank" download class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-zinc-950 font-mono text-xs font-bold transition-all shadow-md">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  <span>Download Credential Summary ↓</span>
                </a>
                <a href="${cred.pdfUrl.startsWith('docs/') && window.location.pathname.includes('/certifications/') ? '../' + cred.pdfUrl : cred.pdfUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-medium transition-all">
                  <span>View Summary PDF ↗</span>
                </a>
              ` : ''}
              ${cred.verified && cred.credentialUrl ? `
                <a href="${cred.credentialUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono text-xs transition-all">
                  <span>Visit Issuer</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
              ` : ''}
            </div>
          </div>
        `;
        drawer.classList.remove('hidden');
        trapModalFocus(drawer);
        announceStatus(`Viewing credentials for ${cred.title}.`);
      };

      card.addEventListener('click', openDrawer);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDrawer();
        }
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderCards(currentCategory);
    });
  });

  if (closeDrawerBtn && drawer) {
    closeDrawerBtn.addEventListener('click', () => {
      if (window.__closeCredDrawer) window.__closeCredDrawer();
    });
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer && window.__closeCredDrawer) window.__closeCredDrawer();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !drawer.classList.contains('hidden')) {
        e.preventDefault();
        if (window.__closeCredDrawer) window.__closeCredDrawer();
      }
    });
  }

  renderCards('all');
}

// 5. Load Data & Initialize All Interactive Labs (Conditional Guard fixes DEF-01)
async function loadAndInitLabs() {
  const hasLabContainers = document.getElementById('paynowLabRoot') ||
                           document.getElementById('migrationLabRoot') ||
                           document.getElementById('releaseLabRoot') ||
                           document.getElementById('tdsLabRoot') ||
                           document.getElementById('a11yLabRoot') ||
                           document.getElementById('aiLabRoot') ||
                           document.getElementById('paynowLab') ||
                           document.getElementById('migrationLab') ||
                           document.getElementById('releaseLab') ||
                           document.getElementById('threeDsLab') ||
                           document.getElementById('accessibilityLab') ||
                           document.getElementById('aiQualityLab');
  if (!hasLabContainers) {
    return; // Do not make 10 lab-data requests on non-lab subpages like /certifications/!
  }

  const [paynowData, migrationData, releaseData, tdsData, a11yData, prompts, agents, artefacts, code, dataVal] = await Promise.all([
    loadJSON('data/paynow-scenarios.json'),
    loadJSON('data/migration-records.json'),
    loadJSON('data/release-builds.json'),
    loadJSON('data/3ds-scenarios.json'),
    loadJSON('data/accessibility-cases.json'),
    loadJSON('data/ai-prompt-scenarios.json'),
    loadJSON('data/ai-agent-patterns.json'),
    loadJSON('data/ai-artefact-reviews.json'),
    loadJSON('data/ai-code-reviews.json'),
    loadJSON('data/ai-data-validation.json')
  ]);

  // Tabbed QA Lab Suite on Homepage
  const paynowContainer = document.getElementById('paynowLabRoot');
  if (paynowContainer && paynowData) {
    initPayNowLab(paynowContainer, paynowData);
  }

  const migrationContainer = document.getElementById('migrationLabRoot');
  if (migrationContainer && migrationData) {
    initMigrationLab(migrationContainer, migrationData);
  }

  const releaseContainer = document.getElementById('releaseLabRoot');
  if (releaseContainer && releaseData) {
    initReleaseLab(releaseContainer, releaseData);
  }

  const tdsContainer = document.getElementById('tdsLabRoot');
  if (tdsContainer && tdsData) {
    init3DSLab(tdsContainer, tdsData);
  }

  const a11yContainer = document.getElementById('a11yLabRoot');
  if (a11yContainer && a11yData) {
    initAccessibilityLab(a11yContainer, a11yData);
  }

  const aiContainer = document.getElementById('aiLabRoot');
  if (aiContainer) {
    initAIQualityLab(aiContainer, {
      prompts,
      agents,
      artefacts,
      code,
      dataValidation: dataVal
    });
  }
}

// 6. Home Lab Master Tabs Controller
function initHomeLabTabs() {
  const tablist = document.getElementById('homeLabTablist');
  if (!tablist) return;

  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  const panels = [
    'lab-tab-paynow',
    'lab-tab-migration',
    'lab-tab-release',
    'lab-tab-3ds',
    'lab-tab-a11y',
    'lab-tab-ai'
  ];

  function selectTab(targetLab, shouldFocus = false) {
    tabs.forEach(tab => {
      const lab = tab.getAttribute('data-lab');
      const isTarget = lab === targetLab;
      const panelId = 'lab-tab-' + lab;
      tab.classList.toggle('active', isTarget);
      tab.setAttribute('aria-selected', isTarget ? 'true' : 'false');
      tab.setAttribute('tabindex', isTarget ? '0' : '-1');
      tab.setAttribute('aria-controls', panelId);
      if (isTarget && shouldFocus) tab.focus();
    });

    panels.forEach(pId => {
      const panel = document.getElementById(pId);
      if (panel) {
        panel.hidden = !pId.endsWith(targetLab);
      }
    });
  }

  // Initialize roving tabindex so tablist is a single Tab stop (Fixes U02)
  const initialActive = tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0];
  if (initialActive) {
    selectTab(initialActive.getAttribute('data-lab'), false);
  }

  tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      const lab = tab.getAttribute('data-lab');
      selectTab(lab, false);
      announceStatus(`Switched to ${tab.textContent.trim()}.`);
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
        const nextLab = tabs[nextIdx].getAttribute('data-lab');
        selectTab(nextLab, true);
        announceStatus(`Switched to ${tabs[nextIdx].textContent.trim()}.`);
      }
    });
  });

  // Connect "Launch Demo" buttons in Selected Work directly to tabs
  document.querySelectorAll('a[href="#lab"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = btn.closest('.p-6, .p-8');
      if (card) {
        const text = card.textContent || '';
        let target = 'paynow';
        if (text.includes('IPONZ')) target = 'migration';
        else if (text.includes('One NZ')) target = 'release';
        selectTab(target);
      }
    });
  });
}

// 7. Wire Hero CV Button to CV Modal
const heroCvBtn = document.getElementById('heroCvBtn');
if (heroCvBtn) {
  heroCvBtn.addEventListener('click', () => {
    const modal = document.getElementById('cvPreviewModal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      trapModalFocus(modal);
      announceStatus("Executive CV Preview opened.");
    }
  });
}
