/**
 * COMPONENTS.JS - Accessible UI Utilities & Shared Component Logic
 * Author: Mazher Hussain Digital Portfolio
 */

// 1. Aria-Live Status Announcer
export function announceStatus(message) {
  let announcer = document.getElementById('a11y-live-announcer');
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'a11y-live-announcer';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
  }
  announcer.textContent = '';
  setTimeout(() => {
    announcer.textContent = message;
  }, 50);
}

// 2. Keyboard Focus Trap for Modals & Drawers
export function trapModalFocus(modalEl) {
  if (!modalEl) return () => {};
  
  const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableEls = Array.from(modalEl.querySelectorAll(focusableSelector)).filter(
    el => !el.hasAttribute('disabled') && el.offsetParent !== null
  );

  if (!focusableEls.length) return () => {};

  const firstEl = focusableEls[0];
  const lastEl = focusableEls[focusableEls.length - 1];

  function handleKeydown(e) {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstEl) {
        lastEl.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastEl) {
        firstEl.focus();
        e.preventDefault();
      }
    }
  }

  modalEl.addEventListener('keydown', handleKeydown);
  firstEl.focus();

  return function cleanup() {
    modalEl.removeEventListener('keydown', handleKeydown);
  };
}

// 3. Accessible Tablist Controller (WCAG Arrow Key Navigation)
export function initTabs(tablistEl, onTabChange) {
  if (!tablistEl) return;
  const tabs = Array.from(tablistEl.querySelectorAll('[role="tab"]'));
  
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      selectTab(index);
    });

    tab.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight') {
        targetIndex = (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        targetIndex = 0;
      } else if (e.key === 'End') {
        targetIndex = tabs.length - 1;
      }

      if (targetIndex !== null) {
        e.preventDefault();
        tabs[targetIndex].focus();
        selectTab(targetIndex);
      }
    });
  });

  function selectTab(selectedIndex) {
    tabs.forEach((tab, i) => {
      const isSelected = i === selectedIndex;
      tab.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      tab.classList.toggle('active', isSelected);
      const panelId = tab.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (panel) {
        panel.hidden = !isSelected;
      }
    });

    if (typeof onTabChange === 'function') {
      onTabChange(tabs[selectedIndex].getAttribute('data-tab-id') || selectedIndex);
    }
  }
}
