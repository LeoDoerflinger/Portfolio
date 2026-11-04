/* ==========================================================================
   MAIN APPLICATION ORCHESTRATOR
   Portfolio — Leopoldo Doerflinger (Frontend & UI Developer · Córdoba, AR)
   ========================================================================== */

(function () {
  'use strict';

  window.ldApp = window.ldApp || {};

  // 1. GESTIÓN DE TEMA (MODO NOCHE POR DEFECTO + TOGGLE A MODO BLANCO)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  const savedTheme = localStorage.getItem('ld-theme');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '☼';
      if (themeLabel) themeLabel.textContent = 'Blanco';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '◐';
      if (themeLabel) themeLabel.textContent = 'Noche';
    }
    localStorage.setItem('ld-theme', theme);
  }

  // Por defecto: Modo Noche de estudio, a menos que se indique ?theme=light o se guarde 'light'
  const urlParams = new URLSearchParams(window.location.search);
  const urlTheme = urlParams.get('theme');
  if (urlTheme === 'light' || urlTheme === 'dark') {
    applyTheme(urlTheme);
  } else if (savedTheme === 'light') {
    applyTheme('light');
  } else {
    applyTheme('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      applyTheme(isLight ? 'dark' : 'light');
      window.ldApp.showToast(`Modo cambiado a: ${isLight ? 'Noche' : 'Blanco'}`);
    });
  }

  // 2. TOAST NOTIFICATION SLIP (Desaparece siempre en 3.2s)
  const toastEl = document.getElementById('site-toast');
  let toastTimer = null;

  window.ldApp.showToast = function (msg, duration = 3200) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    if (toastTimer) clearTimeout(toastTimer);

    toastEl.classList.remove('show');
    void toastEl.offsetWidth;
    toastEl.classList.add('show');

    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
      toastTimer = null;
    }, duration);
  };

  // 3. SCROLLSPY & NAVEGACIÓN ACTIVA
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function handleScrollSpy() {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          const isMatch = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', isMatch);
        });
      }
    });
  }
  window.addEventListener('scroll', handleScrollSpy, { passive: true });

  // 4. MENÚ MÓVIL (DRAWER LATERAL)
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  drawerLinks.forEach(l => l.addEventListener('click', closeDrawer));

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }

  // 5. SCROLL REVEAL SUAVE
  let revealObserver = null;
  window.ldApp.observeRevealItems = function () {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-item').forEach(el => el.classList.add('revealed'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      }, { threshold: 0.08 });
    }
    document.querySelectorAll('.reveal-item:not(.revealed)').forEach(el => revealObserver.observe(el));
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.ldApp.observeRevealItems();
  });
})();
