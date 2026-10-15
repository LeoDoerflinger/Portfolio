/* ==========================================================================
   PROJECTS DATA, INTERACTIVE DOSSIER & SPECIMEN INSPECTOR
   Portfolio - Leopoldo Doerflinger (Full Stack Developer)
   ========================================================================== */

(function () {
  'use strict';

  // 1. REGISTRO DE PROYECTOS REALES
  const PROJECTS = [
    {
      id: 'pastillero-pwa',
      index: '01',
      title: 'Mi Pastillero Virtual',
      subtitle: 'PWA asistiva & organizador de tomas con lupa integrada',
      category: 'utilidad',
      categoryLabel: 'Salud & Utilidad',
      year: '2025',
      assetPath: 'assets/pastillero.png',
      liveUrl: 'https://pastillero10.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger',
      problem: 'La mayoría de las apps de salud están llenas de menús complejos y pasos innecesarios, cuando lo único que necesitás saber a las 8 de la mañana antes de salir al laburo es: "¿ya me tomé la pastilla o no?". Sin dar mil vueltas ni comerte un registro eterno con contraseñas complicadas.',
      solution: 'Desarrollé una Progressive Web App (PWA) pensada para resolver de una: funciona sin conexión a internet, envía alertas programadas con la Notification API nativa y suma una lupa con la cámara del celular para facilitar la lectura de prospectos pequeños.',
      stack: ['React / JS', 'PWA', 'Service Workers', 'Web Push', 'Local Storage', 'Camera API'],
      demoType: 'pastillero'
    },
    {
      id: 'climax-weather',
      index: '02',
      title: 'ClimaX — Weather App',
      subtitle: 'Estación climática reactiva & telemetría sin publicidad',
      category: 'datos',
      categoryLabel: 'APIs & Datos',
      year: '2025',
      assetPath: 'assets/climax.png',
      liveUrl: 'https://climax-leodoer.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger',
      problem: 'Entrar a un portal meteorológico común suele ser comerse 20 banners de publicidad y videos automáticos que te consumen datos, solo para saber si salís con campera o remera.',
      solution: 'Construí un cliente meteorológico ultraliviano consumiendo la OpenWeather API. Si le das permiso saca la temperatura, sensación térmica y viento de tu ubicación al instante con la Geolocation API, o podés buscar cualquier ciudad del mundo sin demoras.',
      stack: ['JavaScript ES6+', 'OpenWeather API', 'Geolocation API', 'CSS Grid', 'Async/Await'],
      demoType: 'climax'
    },
    {
      id: 'news-dashboard',
      index: '03',
      title: 'Panel de Noticias & Divisas',
      subtitle: 'Monitor financiero en vivo, cotizaciones y prensa limpia',
      category: 'datos',
      categoryLabel: 'APIs & Datos',
      year: '2025',
      assetPath: 'assets/news.png',
      liveUrl: 'https://news-leodoerflinger.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger',
      problem: 'En Argentina las cotizaciones del mercado cambiario varían constantemente y los sitios informativos suelen tapar la pantalla con anuncios flotantes y muros de pago.',
      solution: 'Integré múltiples endpoints REST concurrentes para consultar las cotizaciones cambiarias en tiempo real, sumé una calculadora de conversión directa y un feed de prensa ordenado para ver las noticias del día sin distracciones.',
      stack: ['JavaScript', 'REST APIs', 'Tailwind CSS', 'Vercel', 'Async Fetch'],
      demoType: 'news'
    },
    {
      id: 'mitienda-ecommerce',
      index: '04',
      title: 'MiTienda — E-Commerce',
      subtitle: 'Catálogo dinámico, filtrado instantáneo & carrito reactivo',
      category: 'comercio',
      categoryLabel: 'E-Commerce & Gestión',
      year: '2025',
      assetPath: 'assets/tienda.png',
      liveUrl: 'https://mitienda-one.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger',
      problem: 'Muchas tiendas online pequeñas sufren con carritos que se traban, páginas que se recargan por completo al filtrar productos o pedidos que se pierden si el usuario toca atrás.',
      solution: 'Implementé una gestión de estado global reactiva para el carrito con Context API. El cálculo de subtotales, cantidades y filtros responde al instante, con arquitectura preparada para conectar pasarelas de pago y base de datos.',
      stack: ['React.js', 'Context API', 'CSS Modules', 'Firebase / DB', 'LocalStorage'],
      demoType: 'tienda'
    },
    {
      id: 'pixel-y-mate',
      index: '05',
      title: 'Pixel y Mate — Agencia',
      subtitle: 'Portal corporativo, arquitectura UI/UX & captación directa',
      category: 'comercio',
      categoryLabel: 'E-Commerce & Gestión',
      year: '2025',
      assetPath: 'assets/pym.png',
      liveUrl: 'https://pixel-y-mate.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger',
      problem: 'Muchos sitios de agencias cargan páginas de 15 megabytes saturadas de librerías pesadas que tardan una eternidad en abrir desde el celular, perjudicando la conversión de clientes.',
      solution: 'Diseñé una landing institucional moderna y liviana: maquetación semántica, optimización SEO on-page, carga inferior a 1 segundo y llamados a la acción claros para canalizar consultas comerciales directamente.',
      stack: ['HTML5 Semántico', 'CSS3 Moderno', 'JavaScript', 'UI/UX Design', 'SEO On-Page'],
      demoType: 'pym'
    },
    {
      id: 'password-generator',
      index: '06',
      title: 'Pass — Bóveda & Generador',
      subtitle: 'Generador criptográfico con Web Crypto API & auditor de entropía',
      category: 'utilidad',
      categoryLabel: 'Salud & Utilidad',
      year: '2025',
      assetPath: 'assets/pass.png',
      liveUrl: 'https://proyectos-v2fv.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger',
      problem: 'Mucha gente sigue usando "123456" o datos personales predecibles porque inventar contraseñas seguras y memorizarlas resulta tedioso, o porque desconfían de herramientas online que puedan almacenar sus claves.',
      solution: 'Desarrollé un generador que calcula claves de alta entropía matemática directamente en el navegador mediante la Web Crypto API nativa, con parámetros configurables y copiado al portapapeles en un clic.',
      stack: ['JavaScript', 'Web Crypto API', 'Cybersecurity', 'Entropy Metrics', 'Clipboard API'],
      demoType: 'pass'
    }
  ];

  // Estado del Inspector
  let activeProjectId = PROJECTS[0].id;
  let currentFilter = 'all';
  let inspectorViewMode = 'demo'; // 'demo' o 'capture'

  // Muestras meteorológicas
  const weatherSamples = [
    { city: 'CÓRDOBA, AR', temp: '25°C', desc: 'Despejado · Viento 12 km/h', icon: '☀️' },
    { city: 'BUENOS AIRES, AR', temp: '21°C', desc: 'Templado con humedad · 68%', icon: '⛅' },
    { city: 'BARILOCHE, AR', temp: '9°C', desc: 'Fresco de cordillera · 88%', icon: '🌧️' },
    { city: 'MENDOZA, AR', temp: '23°C', desc: 'Tarde despejada · Viento calmo', icon: '🌤️' }
  ];
  let weatherIdx = 0;
  let demoCartQty = 2;

  // Helper para generar micro-simuladores
  function getMicroDemoMarkup(demoType) {
    switch (demoType) {
      case 'pastillero':
        return `
          <div class="micro-demo-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-muted);">
              <span>SIMULADOR PWA · TOMAS DE HOY</span>
              <span style="color:var(--accent-terracotta);">Tocá una para marcar</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem;">
              <button type="button" class="btn-dose p-2.5 rounded hairline-box" style="background:var(--bg-elevated); text-align:left; cursor:pointer;" onclick="window.ldApp.toggleDose(this)">
                <span style="font-family:var(--font-mono); font-size:0.625rem; color:var(--ink-muted); display:block;">08:00 AM</span>
                <strong style="font-size:0.75rem; display:block; margin:0.15rem 0;">Vitamina D</strong>
                <span class="dose-tag" style="font-family:var(--font-mono); font-size:0.65rem; color:var(--accent-moss);">✓ Tomada</span>
              </button>
              <button type="button" class="btn-dose p-2.5 rounded hairline-box" style="background:var(--bg-elevated); text-align:left; cursor:pointer;" onclick="window.ldApp.toggleDose(this)">
                <span style="font-family:var(--font-mono); font-size:0.625rem; color:var(--ink-muted); display:block;">02:00 PM</span>
                <strong style="font-size:0.75rem; display:block; margin:0.15rem 0;">Omega 3</strong>
                <span class="dose-tag" style="font-family:var(--font-mono); font-size:0.65rem; color:var(--accent-terracotta);">○ Pendiente</span>
              </button>
              <button type="button" class="btn-dose p-2.5 rounded hairline-box" style="background:var(--bg-elevated); text-align:left; cursor:pointer;" onclick="window.ldApp.toggleDose(this)">
                <span style="font-family:var(--font-mono); font-size:0.625rem; color:var(--ink-muted); display:block;">10:00 PM</span>
                <strong style="font-size:0.75rem; display:block; margin:0.15rem 0;">Magnesio</strong>
                <span class="dose-tag" style="font-family:var(--font-mono); font-size:0.65rem; color:var(--accent-terracotta);">○ Pendiente</span>
              </button>
            </div>
          </div>
        `;

      case 'climax':
        return `
          <div class="micro-demo-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-muted);">
              <span>ESTACIÓN CLIMÁTICA · TELEMETRÍA</span>
              <button type="button" onclick="window.ldApp.cycleWeather()" style="color:var(--accent-terracotta); background:none; border:none; text-decoration:underline; font-family:var(--font-mono); font-size:0.7rem; cursor:pointer;">
                Cambiar ciudad ↻
              </button>
            </div>
            <div style="padding:0.95rem; border-radius:var(--radius-xs); background:var(--bg-elevated); border:1px solid var(--rule-color); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div id="demoWxCity" style="font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-muted);">${weatherSamples[0].city}</div>
                <div id="demoWxTemp" style="font-family:var(--font-serif); font-size:2.1rem; line-height:1.1; margin:0.2rem 0;">${weatherSamples[0].temp}</div>
                <div id="demoWxDesc" style="font-family:var(--font-mono); font-size:0.7rem; color:var(--accent-moss);">${weatherSamples[0].desc}</div>
              </div>
              <div id="demoWxIcon" style="font-size:2.4rem;">${weatherSamples[0].icon}</div>
            </div>
          </div>
        `;

      case 'pass':
        return `
          <div class="micro-demo-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-muted);">
              <span>GENERADOR CRIPTOGRÁFICO EN VIVO</span>
              <button type="button" onclick="window.ldApp.generateCryptoKey()" style="color:var(--accent-terracotta); background:none; border:none; text-decoration:underline; font-family:var(--font-mono); font-size:0.7rem; cursor:pointer;">
                Generar otra ↻
              </button>
            </div>
            <div style="padding:0.75rem 0.95rem; border-radius:var(--radius-xs); background:var(--bg-elevated); border:1px solid var(--rule-color); display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
              <code id="demoPassCode" style="font-family:var(--font-mono); font-size:0.875rem; font-weight:600; letter-spacing:0.04em; user-select:all;">k7#mP9!vL2$qR8@x</code>
              <span style="font-family:var(--font-mono); font-size:0.65rem; padding:0.2rem 0.5rem; border-radius:var(--radius-xs); background:var(--accent-moss); color:#FAF8F4;">128-bit</span>
            </div>
          </div>
        `;

      case 'tienda':
        return `
          <div class="micro-demo-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-muted);">
              <span>ESTADO REACTIVO DEL CARRITO</span>
              <span id="demoCartBadge" style="font-weight:700; color:var(--accent-terracotta); font-family:var(--font-mono); font-size:0.75rem;">
                ${demoCartQty} artículos ($${(demoCartQty * 24.5).toFixed(2)})
              </span>
            </div>
            <div style="padding:0.85rem 0.95rem; border-radius:var(--radius-xs); background:var(--bg-elevated); border:1px solid var(--rule-color); display:flex; justify-content:space-between; align-items:center;">
              <div>
                <div style="font-size:0.8125rem; font-weight:600;">Cuaderno Técnico A5</div>
                <div style="font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-muted);">$24.50 c/u · Stock en tiempo real</div>
              </div>
              <div style="display:flex; align-items:center; gap:0.5rem; font-family:var(--font-mono); font-size:0.8rem;">
                <button type="button" onclick="window.ldApp.updateCartDemo(-1)" style="width:26px; height:26px; border:1px solid var(--rule-color); background:var(--bg-paper); border-radius:3px; cursor:pointer;">-</button>
                <span id="demoCartQtyDisplay" style="font-weight:700; min-width:18px; text-align:center;">${demoCartQty}</span>
                <button type="button" onclick="window.ldApp.updateCartDemo(1)" style="width:26px; height:26px; border:1px solid var(--rule-color); background:var(--bg-paper); border-radius:3px; cursor:pointer;">+</button>
              </div>
            </div>
          </div>
        `;

      case 'pym':
        return `
          <div class="micro-demo-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-muted);">
              <span>MÉTRICAS DE RENDIMIENTO WEB</span>
              <span>Lighthouse Score</span>
            </div>
            <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:0.5rem;">
              <div style="padding:0.75rem; border-radius:var(--radius-xs); background:var(--bg-elevated); border:1px solid var(--rule-color);">
                <span style="font-family:var(--font-mono); font-size:0.625rem; color:var(--ink-muted); display:block;">PERFORMANCE</span>
                <span style="font-family:var(--font-serif); font-size:1.55rem; color:var(--accent-moss); font-weight:600;">99 / 100</span>
              </div>
              <div style="padding:0.75rem; border-radius:var(--radius-xs); background:var(--bg-elevated); border:1px solid var(--rule-color);">
                <span style="font-family:var(--font-mono); font-size:0.625rem; color:var(--ink-muted); display:block;">CARGA INICIAL</span>
                <span style="font-family:var(--font-serif); font-size:1.55rem; color:var(--ink-primary); font-weight:600;">0.65 seg</span>
              </div>
            </div>
          </div>
        `;

      case 'news':
      default:
        return `
          <div class="micro-demo-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; font-family:var(--font-mono); font-size:0.7rem; color:var(--ink-muted);">
              <span>COTIZACIONES & PRENSA EN VIVO</span>
              <span style="color:var(--accent-moss);">DÓLAR BLUE: $1.220</span>
            </div>
            <div style="padding:0.85rem 0.95rem; border-radius:var(--radius-xs); background:var(--bg-elevated); border:1px solid var(--rule-color);">
              <span style="font-family:var(--font-mono); font-size:0.65rem; text-transform:uppercase; color:var(--accent-terracotta); font-weight:700;">[ECONOMÍA & TECNOLOGÍA]</span>
              <p style="font-family:var(--font-serif); font-size:0.925rem; margin-top:0.25rem; line-height:1.35; color:var(--ink-primary);">
                Lectura sin distracciones: la información económica clave al instante, sin pop-ups ni muros de suscripción molestos.
              </p>
            </div>
          </div>
        `;
    }
  }

  // Renderizar la lista editorial de proyectos
  function renderProjectsList() {
    const listContainer = document.getElementById('projects-list-container');
    if (!listContainer) return;

    const filtered = currentFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === currentFilter);

    if (!filtered.some(p => p.id === activeProjectId) && filtered.length > 0) {
      activeProjectId = filtered[0].id;
    }

    listContainer.innerHTML = filtered.map(proj => {
      const isActive = proj.id === activeProjectId;
      return `
        <article
          class="project-row ${isActive ? 'active' : ''}"
          data-project-id="${proj.id}"
          role="button"
          tabindex="0"
          aria-label="Inspeccionar proyecto ${proj.title}">
          <div>
            <div class="project-meta-line">
              <span class="project-idx">${proj.index}</span>
              <span>/</span>
              <span>${proj.categoryLabel}</span>
              <span>·</span>
              <span>${proj.year}</span>
            </div>
            <h3 class="project-row-title">${proj.title}</h3>
            <p class="project-row-subtitle">${proj.subtitle}</p>
          </div>
          <div class="project-row-action">
            ${isActive ? '● En Ficha' : 'Ver Ficha →'}
          </div>
        </article>
      `;
    }).join('');

    // Eventos de selección
    listContainer.querySelectorAll('[data-project-id]').forEach(row => {
      row.addEventListener('click', () => {
        activeProjectId = row.getAttribute('data-project-id');
        if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('click');
        renderProjectsList();
        renderInspector();
      });

      row.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          row.click();
        }
      });
    });
  }

  // Renderizar la ficha técnica del proyecto
  function renderInspector() {
    const inspectorContainer = document.getElementById('project-inspector-card');
    if (!inspectorContainer) return;

    const project = PROJECTS.find(p => p.id === activeProjectId) || PROJECTS[0];

    const visualHtml = inspectorViewMode === 'demo'
      ? getMicroDemoMarkup(project.demoType)
      : `
        <div class="img-preview-box">
          <img src="${project.assetPath}" alt="Captura de ${project.title}"
               onerror="this.onerror=null; this.src='https://placehold.co/600x340/EDE7DC/191816?text=${encodeURIComponent(project.title)}';">
        </div>
      `;

    inspectorContainer.innerHTML = `
      <!-- Encabezado de la Ficha -->
      <div class="inspector-header">
        <span>EXPEDIENTE #${project.index} — ${project.id.toUpperCase()}</span>
        <span class="font-mono text-xs">${project.year}</span>
      </div>

      <!-- Conmutador de Vista (Simulador vs Captura Real) -->
      <div class="inspector-view-switch">
        <button type="button" class="switch-btn ${inspectorViewMode === 'demo' ? 'active' : ''}" id="btnViewDemo">
          ⚡ Simulador Interactivo
        </button>
        <button type="button" class="switch-btn ${inspectorViewMode === 'capture' ? 'active' : ''}" id="btnViewCapture">
          🖼️ Captura Real (${project.assetPath})
        </button>
      </div>

      <!-- Área Visual de la Ficha -->
      <div class="inspector-visual-stage">
        ${visualHtml}
      </div>

      <!-- Contenido y Análisis Técnico -->
      <div class="inspector-content">
        <div>
          <h3 class="inspector-title">${project.title}</h3>
          <p class="inspector-subtitle">${project.subtitle}</p>
        </div>

        <div class="editorial-note-box">
          <span class="note-label" style="color:var(--accent-terracotta);">EL PROBLEMA A RESOLVER</span>
          <p class="note-text">${project.problem}</p>
        </div>

        <div class="editorial-note-box">
          <span class="note-label" style="color:var(--accent-moss);">SOLUCIÓN TÉCNICA IMPLEMENTADA</span>
          <p class="note-text">${project.solution}</p>
        </div>

        <div>
          <span class="note-label" style="display:block; font-family:var(--font-mono); font-size:0.65rem; color:var(--ink-muted); text-transform:uppercase; margin-bottom:0.4rem;">
            TECNOLOGÍAS EMPLEADAS
          </span>
          <div class="tech-tag-list">
            ${project.stack.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
          </div>
        </div>

        <!-- Botones de Acción Directa -->
        <div class="inspector-action-buttons">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-tactile btn-primary btn-sm">
            <span>Visitar Aplicación en Vivo</span>
            <span>↗</span>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-tactile btn-sm">
            <span>Código en GitHub</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    `;

    // Conectar botones de conmutación de vista
    const btnDemo = document.getElementById('btnViewDemo');
    const btnCapture = document.getElementById('btnViewCapture');

    if (btnDemo) {
      btnDemo.addEventListener('click', () => {
        inspectorViewMode = 'demo';
        if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('toggle');
        renderInspector();
      });
    }

    if (btnCapture) {
      btnCapture.addEventListener('click', () => {
        inspectorViewMode = 'capture';
        if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('toggle');
        renderInspector();
      });
    }
  }

  // Configurar filtros por categoría
  function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn[data-filter]');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        currentFilter = btn.getAttribute('data-filter');
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('click');
        renderProjectsList();
        renderInspector();
      });
    });
  }

  // Métodos expuestos globalmente para los micro-demos
  window.ldApp = window.ldApp || {};

  window.ldApp.toggleDose = function (btn) {
    const status = btn.querySelector('.dose-tag');
    if (!status) return;
    const isTaken = status.textContent.includes('Tomada');
    if (isTaken) {
      status.textContent = '○ Pendiente';
      status.style.color = 'var(--accent-terracotta)';
    } else {
      status.textContent = '✓ Tomada';
      status.style.color = 'var(--accent-moss)';
    }
    if (window.ldApp.playSound) window.ldApp.playSound('click');
  };

  window.ldApp.cycleWeather = function () {
    weatherIdx = (weatherIdx + 1) % weatherSamples.length;
    const w = weatherSamples[weatherIdx];
    const cityEl = document.getElementById('demoWxCity');
    const tempEl = document.getElementById('demoWxTemp');
    const descEl = document.getElementById('demoWxDesc');
    const iconEl = document.getElementById('demoWxIcon');
    if (cityEl) cityEl.textContent = w.city;
    if (tempEl) tempEl.textContent = w.temp;
    if (descEl) descEl.textContent = w.desc;
    if (iconEl) iconEl.textContent = w.icon;
    if (window.ldApp.playSound) window.ldApp.playSound('click');
  };

  window.ldApp.generateCryptoKey = function () {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%&*_+-=';
    let res = '';
    const array = new Uint8Array(16);
    if (window.crypto && window.crypto.getRandomValues) {
      window.crypto.getRandomValues(array);
      for (let i = 0; i < 16; i++) {
        res += chars.charAt(array[i] % chars.length);
      }
    } else {
      for (let i = 0; i < 16; i++) {
        res += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }
    const codeEl = document.getElementById('demoPassCode');
    if (codeEl) codeEl.textContent = res;
    if (window.ldApp.playSound) window.ldApp.playSound('click');
  };

  window.ldApp.updateCartDemo = function (delta) {
    demoCartQty = Math.max(1, Math.min(9, demoCartQty + delta));
    const qtyDisplay = document.getElementById('demoCartQtyDisplay');
    const badgeDisplay = document.getElementById('demoCartBadge');
    if (qtyDisplay) qtyDisplay.textContent = demoCartQty;
    if (badgeDisplay) {
      badgeDisplay.textContent = `${demoCartQty} artículos ($${(demoCartQty * 24.5).toFixed(2)})`;
    }
    if (window.ldApp.playSound) window.ldApp.playSound('click');
  };

  // Inicialización
  document.addEventListener('DOMContentLoaded', () => {
    initFilters();
    renderProjectsList();
    renderInspector();
  });
})();
