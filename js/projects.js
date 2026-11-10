/* Projects data, Graphite interactive stage, and horizontal scroll rail */

(function () {
  'use strict';

  window.ldApp = window.ldApp || {};

  const PROJECTS = [
    {
      id: 'gastropos-saas',
      index: '01',
      shortTab: 'GastroPOS',
      title: 'GastroPOS · Gestión Gastronómica',
      subtitle: 'Plataforma SaaS multi-local con comanda táctil para mozos, salón interactivo y arqueos de caja.',
      categoryLabel: 'SaaS & Gestión',
      year: '2026',
      assetPath: 'assets/gastropos.png',
      liveUrl: 'https://gastro-pos-ld.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/gastro-pos',
      featured: true,
      problem: 'En gastronomía, un sistema lento frena el despacho en horario pico. Comandas que se pierden, demoras al cobrar y arqueos de caja donde no cierra la plata por falta de trazabilidad.',
      solution: 'Plataforma multi-local con comanda táctil PWA para mozos (vía QR), salón interactivo en tiempo real con alertas sonoras, arqueo ciego multicanal y módulo de proveedores.',
      stack: ['Node.js', 'Express', 'JavaScript', 'Vite', 'PWA', 'Vercel']
    },
    {
      id: 'mitienda-ecommerce',
      index: '02',
      shortTab: 'MiTienda + CRM',
      title: 'MiTienda · E-Commerce & Panel CRM',
      subtitle: 'Tienda online con catálogo de 16 productos, carrito reactivo, facturación y panel administrativo CRM sincronizado.',
      categoryLabel: 'E-Commerce & CRM',
      year: '2026',
      assetPath: 'assets/tienda.png',
      liveUrl: 'https://mitienda-one.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/Proyectos',
      featured: false,
      problem: 'Muchas tiendas online sufren con carritos que se traban, páginas que se recargan al filtrar productos o pedidos que quedan dispersos sin control administrativo.',
      solution: 'Catálogo comercial con filtrado instantáneo en memoria, modo claro/oscuro, checkout con cálculo de envíos y sincronización directa con su propio panel CRM de clientes y stock.',
      stack: ['JavaScript ES6+', 'HTML5 Semántico', 'CSS Grid', 'BroadcastChannel API', 'LocalStorage']
    },
    {
      id: 'pastillero-pwa',
      index: '03',
      shortTab: 'Pastillero PWA',
      title: 'Mi Pastillero Virtual',
      subtitle: 'PWA asistiva offline-first, organizador de tomas con alertas y lupa óptica de prospectos.',
      categoryLabel: 'PWA & Utilidad',
      year: '2025',
      assetPath: 'assets/pastillero.png',
      liveUrl: 'https://pastillero10.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/Pastillero',
      featured: false,
      problem: 'La mayoría de las apps de salud están llenas de menús complejos cuando lo único que necesitás saber es si tomaste la medicación a horario sin dar vueltas.',
      solution: 'Progressive Web App pensada para resolver de una: funciona sin conexión a internet, envía alertas programadas con Web Push y suma una lupa con la cámara para leer prospectos pequeños.',
      stack: ['React.js', 'PWA', 'Service Workers', 'Web Push API', 'LocalStorage']
    },
    {
      id: 'climax-weather',
      index: '04',
      shortTab: 'ClimaX',
      title: 'ClimaX · Telemetría Climática',
      subtitle: 'Estación meteorológica reactiva con radar de precipitaciones, geolocalización y cero publicidad.',
      categoryLabel: 'APIs & Telemetría',
      year: '2025',
      assetPath: 'assets/climax.png',
      liveUrl: 'https://climax-leodoer.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/Climax',
      featured: false,
      problem: 'Los portales meteorológicos convencionales están saturados de anuncios y videos que ralentizan la carga solo para ver la temperatura.',
      solution: 'Cliente meteorológico ultraliviano consumiendo la OpenWeather API. Detecta temperatura, sensación térmica y viento mediante Geolocation API o búsqueda global sin demoras.',
      stack: ['JavaScript ES6+', 'OpenWeather API', 'Geolocation API', 'CSS Grid', 'Vercel']
    },
    {
      id: 'news-dashboard',
      index: '05',
      shortTab: 'Divisas & Prensa',
      title: 'Panel de Noticias & Divisas',
      subtitle: 'Monitor financiero en vivo, cotizaciones cambiarias en tiempo real y feed editorial limpio.',
      categoryLabel: 'APIs & Telemetría',
      year: '2025',
      assetPath: 'assets/news.png',
      liveUrl: 'https://news-leodoerflinger.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/News',
      featured: false,
      problem: 'Las cotizaciones cambiarias en Argentina varían a diario y los sitios informativos suelen bloquear la lectura con publicidad invasiva.',
      solution: 'Endpoints concurrentes para consultar cotizaciones cambiarias en tiempo real, calculadora de conversión directa y un feed de prensa ordenado para leer sin distracciones.',
      stack: ['JavaScript ES6+', 'REST APIs', 'Tailwind CSS', 'Vercel']
    },
    {
      id: 'password-generator',
      index: '06',
      shortTab: 'Pass Vault',
      title: 'Pass · Bóveda & Generador',
      subtitle: 'Generador criptográfico con Web Crypto API nativa, cálculo de bits de entropía y copiado en 1 clic.',
      categoryLabel: 'PWA & Utilidad',
      year: '2025',
      assetPath: 'assets/pass.png',
      liveUrl: 'https://proyectos-v2fv.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/Proyectos',
      featured: false,
      problem: 'Uso de contraseñas inseguras por dificultad para inventar claves complejas o por desconfianza en generadores online que guardan datos.',
      solution: 'Generador de claves de alta entropía matemática ejecutado directamente en el navegador mediante Web Crypto API nativa con copiado en 1 clic.',
      stack: ['JavaScript', 'Web Crypto API', 'Clipboard API', 'CSS3']
    }
  ];

  let activeStageId = PROJECTS[0].id;

  // 1. Render Graphite Interactive Stage
  function renderInteractiveStage(projectId) {
    const tabsContainer = document.getElementById('stage-tabs-container');
    const workspaceContainer = document.getElementById('stage-workspace-content');
    if (!tabsContainer || !workspaceContainer) return;

    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
    activeStageId = project.id;

    tabsContainer.innerHTML = PROJECTS.map(p => {
      const isActive = p.id === activeStageId;
      return `
        <button
          type="button"
          role="tab"
          aria-selected="${isActive}"
          class="stage-tab-btn ${isActive ? 'active' : ''}"
          data-stage-select="${p.id}"
        >
          <span class="stage-tab-idx">${p.index}</span>
          <span>${p.shortTab}</span>
        </button>
      `;
    }).join('');

    workspaceContainer.innerHTML = `
      <div class="stage-preview-well stage-animate">
        <span class="corner-cross tl" aria-hidden="true">+</span>
        <span class="corner-cross tr" aria-hidden="true">+</span>
        <span class="corner-cross bl" aria-hidden="true">+</span>
        <span class="corner-cross br" aria-hidden="true">+</span>

        <button
          type="button"
          class="stage-screen-frame"
          onclick="window.ldApp.openProjectModal('${project.id}')"
          aria-label="Ver ficha ampliada de ${project.title}"
        >
          <img
            src="${project.assetPath}"
            alt="Vista previa de ${project.title}"
            class="stage-screen-img"
            width="960"
            height="600"
            fetchpriority="high"
          />
        </button>

        <div class="stage-caption-pill">
          <span>${project.index} · ${project.categoryLabel} (${project.year})</span>
        </div>
      </div>

      <div class="stage-inspector-pane stage-animate">
        <div>
          <div class="stage-active-bar">
            <div class="stage-cat-line">PROYECTO ${project.index} · ${project.categoryLabel.toUpperCase()}</div>
            <h3 class="stage-project-title">${project.title}</h3>
            <p class="stage-project-sub">${project.subtitle}</p>
          </div>

          <div class="stage-specs-block">
            <div class="stage-spec-item">
              <span class="stage-spec-label">DESAFÍO OPERATIVO</span>
              <p class="stage-spec-text">${project.problem}</p>
            </div>
            <div class="stage-spec-item">
              <span class="stage-spec-label">ARQUITECTURA Y SOLUCIÓN</span>
              <p class="stage-spec-text">${project.solution}</p>
            </div>
          </div>

          <div class="card-stack-row" aria-label="Tecnologías utilizadas">
            ${project.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
          </div>
        </div>

        <div class="stage-links-footer">
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-primary">
              <span>Probar en vivo</span>
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary">
              <span>Código en GitHub</span>
            </a>
          </div>
          <button type="button" class="signal-action-link" onclick="window.ldApp.openProjectModal('${project.id}')">
            <span>Ver ficha técnica</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    `;

    tabsContainer.querySelectorAll('[data-stage-select]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-stage-select');
        if (targetId && targetId !== activeStageId) {
          renderInteractiveStage(targetId);
        }
      });
    });
  }

  // 2. Render Horizontal Scroll-Snap Project Rail
  function renderHorizontalRail() {
    const rail = document.getElementById('projects-horizontal-rail');
    if (!rail) return;

    rail.innerHTML = PROJECTS.map(p => `
      <article class="rail-project-card" data-rail-project="${p.id}">
        <div class="rail-card-top-banner">
          <img
            src="${p.assetPath}"
            alt="Captura de ${p.title}"
            width="640"
            height="400"
            loading="lazy"
          />
        </div>
        <div class="rail-card-body">
          <div>
            <div class="rail-card-pill">
              <span>${p.index} · ${p.categoryLabel}</span>
            </div>
            <h4 class="rail-card-title">${p.title}</h4>
            <p class="rail-card-desc">${p.subtitle}</p>
            <div class="card-stack-row">
              ${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
            </div>
          </div>

          <div class="rail-card-actions">
            <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="signal-action-link">
              <span>Abrir demo</span>
              <span aria-hidden="true">→</span>
            </a>
            <div style="display:flex; gap:0.4rem;">
              <button type="button" class="btn-action btn-ghost" data-focus-stage="${p.id}" title="Cargar en el visor superior">
                <span>Visor</span>
              </button>
              <button type="button" class="btn-action btn-secondary" onclick="window.ldApp.openProjectModal('${p.id}')">
                <span>Ficha</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    rail.querySelectorAll('[data-focus-stage]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-focus-stage');
        renderInteractiveStage(id);
        const stageEl = document.getElementById('graphite-project-stage');
        if (stageEl) {
          stageEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    });

    setupHorizontalRailInteractions(rail);
  }

  function setupHorizontalRailInteractions(rail) {
    const prevBtn = document.getElementById('rail-prev-btn');
    const nextBtn = document.getElementById('rail-next-btn');
    const progressFill = document.getElementById('rail-progress-fill');

    function updateProgressAndCards() {
      const maxScroll = Math.max(1, rail.scrollWidth - rail.clientWidth);
      const pct = Math.min(100, Math.max(18, (rail.scrollLeft / maxScroll) * 82 + 18));
      if (progressFill) {
        progressFill.style.width = `${pct}%`;
      }

      // Subtle transition effect on cards during horizontal scroll
      const railRect = rail.getBoundingClientRect();
      const cards = rail.querySelectorAll('.rail-project-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const visibleWidth = Math.min(rect.right, railRect.right) - Math.max(rect.left, railRect.left);
        const ratio = Math.max(0, Math.min(1, visibleWidth / rect.width));
        card.style.opacity = (0.55 + ratio * 0.45).toFixed(2);
      });
    }

    rail.addEventListener('scroll', updateProgressAndCards, { passive: true });
    window.addEventListener('resize', updateProgressAndCards, { passive: true });
    requestAnimationFrame(updateProgressAndCards);

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        rail.scrollBy({ left: -395, behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        rail.scrollBy({ left: 395, behavior: 'smooth' });
      });
    }

    // Pointer drag support for desktop horizontal scrolling
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    rail.addEventListener('mousedown', (e) => {
      if (e.target.closest('a, button')) return;
      isDown = true;
      startX = e.pageX - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
    });
    rail.addEventListener('mouseleave', () => { isDown = false; });
    rail.addEventListener('mouseup', () => { isDown = false; });
    rail.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 1.4;
      rail.scrollLeft = scrollLeft - walk;
    });
  }

  // 3. Stack Filter Tabs
  function setupStackFilterTabs() {
    const btns = document.querySelectorAll('[data-stack-group]');
    const cards = document.querySelectorAll('[data-stack-card]');
    if (!btns.length || !cards.length) return;

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.getAttribute('data-stack-group');
        btns.forEach(b => b.classList.toggle('active', b === btn));
        cards.forEach(card => {
          const match = group === 'all' || card.getAttribute('data-stack-card') === group;
          card.classList.toggle('dimmed', !match);
        });
      });
    });
  }

  // 4. Project Detail Modal
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalContainer = document.getElementById('project-modal-container');

  window.ldApp.openProjectModal = function (projectId) {
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project || !modalOverlay || !modalContainer) return;

    modalContainer.innerHTML = `
      <div class="modal-card hairline-box">
        <div class="modal-header hairline-b">
          <div>
            <span class="meta-index">${project.index}</span>
            <span class="meta-dot">·</span>
            <span class="meta-category">${project.categoryLabel} (${project.year})</span>
            <h2 class="modal-title" style="margin-top:0.25rem;">${project.title}</h2>
          </div>
          <button type="button" class="modal-close-btn" onclick="window.ldApp.closeProjectModal()" aria-label="Cerrar ventana">✕</button>
        </div>

        <div class="modal-body">
          <div class="modal-preview-bezel hairline-b">
            <img src="${project.assetPath}" alt="${project.title}" class="modal-preview-img" width="860" height="480" />
          </div>

          <div class="modal-details-grid">
            <div>
              <h4 class="modal-section-title">DESCRIPCIÓN</h4>
              <p class="modal-p"><strong>Desafío:</strong> ${project.problem}</p>
              <p class="modal-p" style="margin-top:0.75rem;"><strong>Solución técnica:</strong> ${project.solution}</p>
            </div>

            <div>
              <h4 class="modal-section-title">TECNOLOGÍAS TRABAJADAS</h4>
              <div class="card-stack-row" style="margin-bottom:1.5rem;">
                ${project.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
              </div>

              <div class="modal-actions-box hairline-t" style="padding-top:1.25rem; display:flex; flex-direction:column; gap:0.625rem;">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-primary" style="text-align:center;">
                  Abrir Proyecto en Vercel
                </a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary" style="text-align:center;">
                  Ver Repositorio en GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.ldApp.closeProjectModal = function () {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) window.ldApp.closeProjectModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      window.ldApp.closeProjectModal();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    renderInteractiveStage(PROJECTS[0].id);
    renderHorizontalRail();
    setupStackFilterTabs();
  });

  window.ldApp.PROJECTS = PROJECTS;
})();
