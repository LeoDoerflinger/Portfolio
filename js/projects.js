/* ==========================================================================
   PROJECTS DATA & EDITORIAL GRID
   Portfolio — Leopoldo Doerflinger
   ========================================================================== */

(function () {
  'use strict';

  window.ldApp = window.ldApp || {};

  // Catálogo de Proyectos Reales (Solo tecnologías reales trabajadas)
  const PROJECTS = [
    {
      id: 'gastropos-saas',
      index: '01',
      title: 'GastroPOS — Gestión Gastronómica',
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
      id: 'pastillero-pwa',
      index: '02',
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
      index: '03',
      title: 'ClimaX — Telemetría Climática',
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
      index: '04',
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
      id: 'mitienda-ecommerce',
      index: '05',
      title: 'MiTienda — E-Commerce React',
      subtitle: 'Catálogo comercial con filtrado instantáneo en memoria, gestión de stock y carrito reactivo.',
      categoryLabel: 'E-Commerce',
      year: '2025',
      assetPath: 'assets/tienda.png',
      liveUrl: 'https://mitienda-one.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/BarDigital',
      featured: false,
      problem: 'Muchas tiendas online sufren con carritos que se traban, páginas que se recargan al filtrar productos o pedidos que se pierden.',
      solution: 'Estado global reactivo con Context API. Cálculo instantáneo de subtotales, filtros en memoria sin recargas y persistencia en LocalStorage.',
      stack: ['React.js', 'Context API', 'CSS Modules', 'Firebase DB', 'LocalStorage']
    },
    {
      id: 'pixel-y-mate',
      index: '06',
      title: 'Pixel y Mate — Agencia Digital',
      subtitle: 'Portal corporativo, arquitectura UI/UX moderna, métricas de carga ultra-rápidas y captación comercial.',
      categoryLabel: 'E-Commerce & Branding',
      year: '2025',
      assetPath: 'assets/pym.png',
      liveUrl: 'https://pixel-y-mate.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/Pixel-y-Mate',
      featured: false,
      problem: 'Sitios corporativos que tardan demasiado en abrir desde el celular, perjudicando la retención y la conversión de clientes.',
      solution: 'Landing institucional ágil: maquetación semántica, optimización SEO on-page, carga inferior a 1 segundo y llamados a la acción claros.',
      stack: ['HTML5', 'CSS3', 'JavaScript ES6+', 'UI/UX Design', 'SEO On-Page']
    },
    {
      id: 'password-generator',
      index: '07',
      title: 'Pass — Bóveda & Generador',
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

  // Renderizador de Tarjetas en Grid Asimétrico Editorial
  function renderProjectsGrid() {
    const container = document.getElementById('projects-grid-container');
    if (!container) return;

    let html = '';

    PROJECTS.forEach((p) => {
      const isHero = p.featured;
      const cardClass = isHero ? 'project-card project-card-featured' : 'project-card';

      html += `
        <article class="${cardClass} reveal-item" data-project-id="${p.id}">
          <div class="card-inner hairline-box">
            
            <!-- Encabezado de Ficha -->
            <div class="card-meta-bar hairline-b">
              <div class="meta-left">
                <span class="meta-index">${p.index}</span>
                <span class="meta-dot">/</span>
                <span class="meta-category">${p.categoryLabel}</span>
              </div>
              <div class="meta-right">
                <span class="meta-year">${p.year}</span>
              </div>
            </div>

            <div class="card-body-layout">
              <!-- Visual Bezel / Preview Image -->
              <div class="card-visual-frame hairline-r">
                <div class="visual-wrapper" onclick="window.ldApp.openProjectModal('${p.id}')" title="Click para ver detalles">
                  <img src="${p.assetPath}" alt="Captura de ${p.title}" class="project-img" loading="lazy" />
                  <div class="visual-overlay">
                    <span class="overlay-pill">Ver ficha ↗</span>
                  </div>
                </div>
              </div>

              <!-- Ficha de Datos & Contenido -->
              <div class="card-info-pane">
                <div class="card-title-group">
                  <h3 class="card-title">${p.title}</h3>
                  <p class="card-subtitle">${p.subtitle}</p>
                </div>

                <!-- Resumen breve -->
                <div class="card-brief">
                  <div class="brief-item">
                    <span class="brief-label">DESAFÍO</span>
                    <p class="brief-text">${p.problem}</p>
                  </div>
                  <div class="brief-item">
                    <span class="brief-label">SOLUCIÓN</span>
                    <p class="brief-text">${p.solution}</p>
                  </div>
                </div>

                <!-- Stack Técnico Únicamente -->
                <div class="card-stack-row">
                  ${p.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
                </div>

                <!-- Acciones Directas -->
                <div class="card-actions-row hairline-t">
                  <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-primary" title="Abrir en Vercel">
                    <span>Probar en vivo</span>
                    <span class="arrow-icon">↗</span>
                  </a>
                  <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary" title="Ver código en GitHub">
                    <span>Código en GitHub</span>
                    <span class="arrow-icon">↗</span>
                  </a>
                  <button type="button" class="btn-action btn-ghost" onclick="window.ldApp.openProjectModal('${p.id}')" title="Ver detalles">
                    <span>Ficha</span>
                    <span class="arrow-icon">⚙</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </article>
      `;
    });

    container.innerHTML = html;

    if (window.ldApp.observeRevealItems) {
      window.ldApp.observeRevealItems();
    }
  }

  // Modal de Detalles
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
            <span class="meta-dot">/</span>
            <span class="meta-category">${project.categoryLabel} · ${project.year}</span>
            <h2 class="modal-title" style="margin-top:0.25rem;">${project.title}</h2>
          </div>
          <button type="button" class="modal-close-btn" onclick="window.ldApp.closeProjectModal()" aria-label="Cerrar ventana">✕</button>
        </div>

        <div class="modal-body">
          <div class="modal-preview-bezel hairline-b">
            <img src="${project.assetPath}" alt="${project.title}" class="modal-preview-img" />
          </div>

          <div class="modal-details-grid">
            <div>
              <h4 class="modal-section-title">DESCRIPCIÓN</h4>
              <p class="modal-p"><strong>Desafío:</strong> ${project.problem}</p>
              <p class="modal-p" style="margin-top:0.75rem;"><strong>Solución técnica:</strong> ${project.solution}</p>
            </div>

            <div>
              <h4 class="modal-section-title">TECNOLOGÍAS</h4>
              <div class="card-stack-row" style="margin-bottom:1.5rem;">
                ${project.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
              </div>

              <div class="modal-actions-box hairline-t" style="padding-top:1.25rem; display:flex; flex-direction:column; gap:0.625rem;">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-primary" style="text-align:center;">
                  Abrir Proyecto en Vercel ↗
                </a>
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary" style="text-align:center;">
                  Ver Repositorio en GitHub ↗
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
    renderProjectsGrid();
  });

  window.ldApp.PROJECTS = PROJECTS;
})();
