/* ==========================================================================
   PROJECTS DATA, FILTERING & MODAL CONTROLLER
   Portfolio - Leopoldo Doerflinger
   ========================================================================== */

(function () {
  'use strict';

  // Projects Registry
  const PROJECTS = [
    {
      id: 'news-dashboard',
      title: 'Panel de Noticias & Divisas',
      category: 'webapp',
      categoryLabel: 'Dashboard Financiero',
      desc: 'Dashboard dinámico con noticias en tiempo real, cotizaciones del dólar oficial/blue/cripto y conversor de divisas integrado mediante APIs REST.',
      fullDesc: 'Aplicación web orientada a la visualización de datos financieros y noticias actualizadas al instante. Integra múltiples endpoints REST para consultar cotizaciones del mercado cambiario argentino (dólar oficial, blue, MEP, tarjeta), calcular conversiones en tiempo real y presentar un feed de noticias categorizado.',
      features: [
        'Cotizaciones financieras y dólar en tiempo real mediante APIs',
        'Calculadora y conversor interactivo de divisas',
        'Consumo asíncrono con manejo de caché y reintentos',
        'Diseño 100% responsivo y optimizado con Tailwind CSS'
      ],
      tags: ['JavaScript', 'API REST', 'Tailwind CSS', 'Vercel', 'Async/Await'],
      image: 'assets/news.png',
      liveUrl: 'https://news-leodoerflinger.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger'
    },
    {
      id: 'pastillero-pwa',
      title: 'Mi Pastillero Virtual',
      category: 'webapp',
      categoryLabel: 'PWA Asistiva',
      desc: 'Progressive Web App para planificar, registrar y notificar tomas de medicamentos con soporte offline, notificaciones web y lupa con cámara.',
      fullDesc: 'Solución integral desarrollada como Progressive Web Application (PWA) instalable en móviles y desktop. Permite crear tratamientos, configurar horarios y frecuencias personalizadas, emitir recordatorios mediante Notification API, almacenar el historial localmente sin conexión y usar la cámara como lupa de lectura asistiva.',
      features: [
        'Instalable como PWA en móviles y computadoras de escritorio',
        'Notificaciones de alerta y recordatorios programados',
        'Historial de tomas y persistencia de datos local (Offline-first)',
        'Herramienta de lupa de asistencia visual mediante acceso a cámara'
      ],
      tags: ['React / JS', 'PWA', 'Service Workers', 'Web Push', 'Local Storage'],
      image: 'assets/pastillero.png',
      liveUrl: 'https://pastillero10.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger'
    },
    {
      id: 'climax-weather',
      title: 'Climax Weather App',
      category: 'frontend',
      categoryLabel: 'Weather & Geolocalización',
      desc: 'Aplicación meteorológica que consulta la API de OpenWeather para pronóstico en tiempo real por búsqueda global o geolocalización automática.',
      fullDesc: 'Herramienta interactiva para consulta de datos meteorológicos globales. Implementa geolocalización por coordenadas del navegador y buscador reactivo con autocompletado para cualquier ciudad del planeta. Presenta temperatura, humedad, viento, sensación térmica y estados climáticos dinámicos con interfaz minimalista.',
      features: [
        'Geolocalización automática mediante Geolocation API',
        'Búsqueda mundial de ciudades con control de errores 404',
        'Diseño dinámico adaptable según condición climática y hora',
        'Consumo de OpenWeather API con optimización de payload'
      ],
      tags: ['JavaScript ES6+', 'OpenWeather API', 'CSS3', 'Geolocalización'],
      image: 'assets/climax.png',
      liveUrl: 'https://climax-leodoer.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger'
    },
    {
      id: 'pixel-y-mate',
      title: 'Pixel y Mate — Agencia',
      category: 'frontend',
      categoryLabel: 'Sitio Web Corporativo',
      desc: 'Sitio web moderno para una agencia de servicios digitales, estructurado para exhibición de portafolio y captación directa de clientes.',
      fullDesc: 'Landing y portal institucional desarrollado para una agencia creativa de marketing y diseño. Cuenta con un diseño enfocado en la experiencia de usuario (UI/UX), optimización SEO on-page, carga ultra rápida de recursos gráficos y llamados a la acción estratégicos orientados a la conversión.',
      features: [
        'Arquitectura pensada para alta retención y conversión de leads',
        'Diseño responsive testeado en múltiples resoluciones',
        'Animaciones fluidas y micro-interacciones con CSS moderno',
        'Buenas prácticas de accesibilidad y SEO estructural'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'SEO'],
      image: 'assets/pym.png',
      liveUrl: 'https://pixel-y-mate.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger'
    },
    {
      id: 'mitienda-ecommerce',
      title: 'MiTienda — E-Commerce',
      category: 'tools',
      categoryLabel: 'Comercio Electrónico',
      desc: 'Plataforma de comercio electrónico con catálogo dinámico, filtrado de categorías, carrito de compras reactivo y persistencia de órdenes.',
      fullDesc: 'Plataforma interactiva de e-commerce construida con arquitectura modular en React. Gestiona el estado global del carrito mediante Context API, permitiendo agregar, restar cantidades, calcular totales con impuestos y simular procesos de checkout con almacenamiento en Firebase.',
      features: [
        'Catálogo con navegación por categorías y filtros en tiempo real',
        'Carrito de compras dinámico gestionado con Context API',
        'Persistencia de productos y órdenes en base de datos Firebase',
        'Diseño adaptado para móviles y tablets'
      ],
      tags: ['React.js', 'Context API', 'Firebase', 'CSS Modules'],
      image: 'assets/tienda.png',
      liveUrl: 'https://mitienda-one.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger'
    },
    {
      id: 'password-generator',
      title: 'Generador de Contraseñas',
      category: 'tools',
      categoryLabel: 'Herramienta de Seguridad',
      desc: 'Herramienta que genera contraseñas de alta entropía con reglas configurables (mayúsculas, números, caracteres especiales) y copiado en 1 clic.',
      fullDesc: 'Aplicación orientada a la seguridad digital y privacidad. Genera contraseñas criptográficamente seguras ajustando la longitud deseada y la combinación de caracteres requerida (alfanumérico, símbolos). Incluye función de copiado instantáneo al portapapeles y medidor de complejidad.',
      features: [
        'Generación de alta entropía matemática',
        'Personalización de reglas y longitud exacta en tiempo real',
        'Copiado seguro al portapapeles mediante Clipboard API',
        'Estética visual ciberpunk / terminal con modo claro y oscuro'
      ],
      tags: ['JavaScript', 'Cybersecurity', 'Web Crypto', 'CSS3'],
      image: 'assets/pass.png',
      liveUrl: 'https://proyectos-v2fv.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger'
    }
  ];

  // DOM Elements
  const gridContainer = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // Modal Elements
  const modalOverlay = document.getElementById('project-modal-overlay');
  const modalCloseBtn = document.getElementById('project-modal-close');
  const modalTitle = document.getElementById('modal-project-title');
  const modalCategory = document.getElementById('modal-project-category');
  const modalImg = document.getElementById('modal-project-img');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalFeatures = document.getElementById('modal-project-features');
  const modalTags = document.getElementById('modal-project-tags');
  const modalLiveBtn = document.getElementById('modal-project-live');
  const modalGithubBtn = document.getElementById('modal-project-github');

  // Render Projects Grid
  function renderProjects(filter = 'all') {
    if (!gridContainer) return;
    gridContainer.innerHTML = '';

    const filtered = filter === 'all' 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === filter);

    filtered.forEach((proj, idx) => {
      const card = document.createElement('article');
      card.className = `project-card reveal reveal-delay-${(idx % 3) + 1} visible`;
      card.setAttribute('data-category', proj.category);

      card.innerHTML = `
        <div class="project-media-wrapper">
          <img src="${proj.image}" alt="${proj.title}" class="project-thumb" loading="lazy" />
          <span class="project-badge-overlay">${proj.categoryLabel}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <div class="project-actions">
            <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="Abrir sitio en pestaña nueva">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
              Visitar Web
            </a>
            <button type="button" class="project-action-link btn-open-modal" data-id="${proj.id}" title="Ver ficha técnica completa">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Ficha Técnica
            </button>
            <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link" title="Ver código fuente en GitHub">
              <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>
      `;

      gridContainer.appendChild(card);
    });

    // Attach click listeners to open modal
    gridContainer.querySelectorAll('.btn-open-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        openModal(btn.dataset.id);
      });
    });
  }

  // Filter Buttons Handler
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  // Modal Functionality
  function openModal(projectId) {
    const proj = PROJECTS.find(p => p.id === projectId);
    if (!proj || !modalOverlay) return;

    modalTitle.textContent = proj.title;
    modalCategory.textContent = proj.categoryLabel;
    modalImg.src = proj.image;
    modalImg.alt = proj.title;
    modalDesc.textContent = proj.fullDesc;

    modalFeatures.innerHTML = proj.features.map(f => `<li>${f}</li>`).join('');
    modalTags.innerHTML = proj.tags.map(t => `<span class="tag">${t}</span>`).join('');

    modalLiveBtn.href = proj.liveUrl;
    modalGithubBtn.href = proj.githubUrl;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });

  // Initial render
  renderProjects('all');

})();
