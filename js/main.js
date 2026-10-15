/* ==========================================================================
   MAIN APPLICATION ORCHESTRATOR
   Portfolio - Leopoldo Doerflinger (Full Stack Developer)
   ========================================================================== */

(function () {
  'use strict';

  window.ldApp = window.ldApp || {};

  // 1. TEMA CLARO / OSCURO
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const themeLabel = document.getElementById('theme-label');
  const savedTheme = localStorage.getItem('ld-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeIcon) themeIcon.textContent = '◐';
      if (themeLabel) themeLabel.textContent = 'Oscuro';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '☼';
      if (themeLabel) themeLabel.textContent = 'Claro';
    }
    localStorage.setItem('ld-theme', theme);
  }

  // Inicializar tema
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (prefersDark.matches) {
    applyTheme('dark');
  } else {
    applyTheme('light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      applyTheme(isDark ? 'light' : 'dark');
      if (window.ldApp.playSound) window.ldApp.playSound('toggle');
    });
  }

  // 2. SONIDO TÁCTIL (Web Audio API nativa sin dependencias)
  let soundEnabled = localStorage.getItem('ld-sound') === 'true';
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  const soundLabel = document.getElementById('sound-label');

  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) audioCtx = new AudioCtxClass();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.ldApp.playSound = function (type = 'click') {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(340, now);
        osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);
        gain.gain.setValueAtTime(0.045, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
      } else if (type === 'toggle') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(460, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.06);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
      } else if (type === 'success') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(520, now);
        osc.frequency.exponentialRampToValueAtTime(800, now + 0.12);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
        osc.start(now);
        osc.stop(now + 0.14);
      }
    } catch (e) {
      // Audio seguro
    }
  };

  function updateSoundUI() {
    if (!soundIcon || !soundLabel) return;
    soundIcon.textContent = soundEnabled ? '🔔' : '🔕';
    soundLabel.textContent = soundEnabled ? 'Sonido: On' : 'Sonido: Off';
  }
  updateSoundUI();

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem('ld-sound', soundEnabled ? 'true' : 'false');
      updateSoundUI();
      if (soundEnabled) {
        window.ldApp.playSound('toggle');
      }
    });
  }

  // 3. TOAST NOTIFICATION SLIP
  const toastEl = document.getElementById('site-toast');
  let toastTimer = null;

  window.ldApp.showToast = function (msg, duration = 3000) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show', 'toast-slip');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
    }, duration);
  };

  // 4. RELOJ EN VIVO (Hora de Córdoba, Argentina)
  function updateLiveClock() {
    const clockEl = document.getElementById('live-time-readout');
    if (!clockEl) return;
    const now = new Date();
    const options = {
      timeZone: 'America/Argentina/Cordoba',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    try {
      const timeStr = new Intl.DateTimeFormat('es-AR', options).format(now);
      clockEl.textContent = `${timeStr} (CBA · ART)`;
    } catch (e) {
      clockEl.textContent = now.toTimeString().split(' ')[0];
    }
  }
  updateLiveClock();
  setInterval(updateLiveClock, 1000);

  // 5. SCROLLSPY & NAVEGACIÓN ACTIVA
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function handleScrollSpy() {
    const scrollPos = window.scrollY + 140;
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

  // 6. MENÚ MÓVIL (DRAWER LATERAL)
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
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

  // 7. SCROLL REVEAL SUAVE
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
})();
