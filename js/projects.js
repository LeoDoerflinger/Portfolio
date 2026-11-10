/* Projects data, Scroll-Guided Sticky Accordion Stage (with GitHub Languages Bar), Horizontal Rail, and Scroll-Vanishing Skills */

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
      stack: ['Node.js', 'Express', 'JavaScript ES6+', 'Vite', 'PWA', 'Vercel'],
      calloutBadge: ' Salón & Comanda en Vivo',
      calloutText: 'Sincronización instantánea entre mesas, barra, cocina y arqueo ciego de 4 vías.',
      modules: [
        { num: 'MÓDULO 01', title: 'Salón Interactivo & Mesas', desc: 'Mapa táctil con estados de ocupación, tiempos de permanencia y unión o cambio de mesas.' },
        { num: 'MÓDULO 02', title: 'Comanda Móvil PWA (QR)', desc: 'Acceso rápido para mozos desde el celular con envío directo a comandera de cocina y barra.' },
        { num: 'MÓDULO 03', title: 'Arqueo Ciego de 4 Vías', desc: 'Conciliación separada de Efectivo, Tarjetas, QR/Transferencias y Cuentas Corrientes.' },
        { num: 'MÓDULO 04', title: 'Stock, Recetas & Costos', desc: 'Descuento automático de insumos por plato vendido y alertas de reposición.' }
      ],
      languages: [
        { name: 'JavaScript', pct: 93.1, color: '#F1E05A' },
        { name: 'CSS', pct: 6.1, color: '#563D7C' },
        { name: 'HTML', pct: 0.8, color: '#E34C26' }
      ],
      stackBreakdown: [
        { label: 'Backend API (Node.js & Express)', pct: 52, color: '#F1E05A' },
        { label: 'Cliente Operativo & PWA Salón', pct: 34, color: '#FF6B2B' },
        { label: 'Motor de Arqueos & Reportes', pct: 14, color: '#A855F7' }
      ],
      metrics: [
        { val: '4 Vías', label: 'Arqueo ciego de caja' },
        { val: 'PWA + API', label: 'Arquitectura híbrida' },
        { val: 'Multi-sede', label: 'Control por sucursal' }
      ],
      steps: [
        {
          title: 'Operación gastronómica sin cuellos de botella',
          desc: 'Diseñado para soportar el ritmo real de salón, barra y cocina en horario pico sin recargas de página ni pasos innecesarios.',
          ctaText: 'Ampliar captura operativa →'
        },
        {
          title: 'Arquitectura modular multi-sucursal',
          desc: 'Cuatro subsistemas acoplados: mapa de salón interactivo, comanda móvil para mozos, control de insumos y cierre de turno blindado.',
          ctaText: 'Ver ficha técnica completa →'
        },
        {
          title: 'Porcentaje de tecnologías y distribución (GitHub)',
          desc: 'Repositorio construido con 93.1% JavaScript (Node.js + Express en servidor y cliente reactivo Vite PWA), 6.1% CSS y 0.8% HTML.',
          ctaText: 'Inspeccionar repositorio en GitHub ↗'
        },
        {
          title: 'Despliegue en producción y demo interactiva',
          desc: 'Publicado en Vercel con entorno de prueba funcional para recorrer el salón, cargar comandas y simular cierres de caja.',
          ctaText: 'Probar GastroPOS en vivo ↗'
        }
      ]
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
      featured: true,
      problem: 'Muchas tiendas online sufren con carritos que se traban, páginas que se recargan al filtrar productos o pedidos que quedan dispersos sin control administrativo.',
      solution: 'Catálogo comercial con filtrado instantáneo en memoria, modo claro/oscuro, checkout con cálculo de envíos y sincronización directa con su propio panel CRM de clientes y stock.',
      stack: ['JavaScript ES6+', 'HTML5 Semántico', 'CSS Grid', 'BroadcastChannel API', 'LocalStorage'],
      calloutBadge: 'Storefront + CRM Sincronizado',
      calloutText: 'Cada compra en la tienda impacta al instante en el tablero administrativo CRM sin recargar.',
      modules: [
        { num: 'MÓDULO 01', title: 'Catálogo & Filtros en Memoria', desc: 'Búsqueda instantánea, filtrado por categorías, ordenamiento por precio y vista rápida.' },
        { num: 'MÓDULO 02', title: 'Carrito Reactivo & Cupones', desc: 'Cálculo dinámico de envíos, códigos promocionales y emisión de comprobante de orden.' },
        { num: 'MÓDULO 03', title: 'Tablero Administrativo CRM', desc: 'Gestión de inventario en vivo, edición de precios, alta de productos y estados de pedido.' },
        { num: 'MÓDULO 04', title: 'Sincronización BroadcastChannel', desc: 'Comunicación bidireccional en tiempo real entre la tienda pública y el panel CRM.' }
      ],
      languages: [
        { name: 'JavaScript', pct: 48.3, color: '#F1E05A' },
        { name: 'CSS', pct: 27.5, color: '#563D7C' },
        { name: 'HTML', pct: 24.2, color: '#E34C26' }
      ],
      stackBreakdown: [
        { label: 'Storefront, Carrito & Checkout', pct: 46, color: '#F1E05A' },
        { label: 'Panel Administrativo CRM & Stock', pct: 38, color: '#FF6B2B' },
        { label: 'Sincronización Broadcast & Temas', pct: 16, color: '#563D7C' }
      ],
      metrics: [
        { val: '16 ítems', label: 'Catálogo activo' },
        { val: '2 Vistas', label: 'Tienda + Panel CRM' },
        { val: '0 ms', label: 'Filtrado en memoria' }
      ],
      steps: [
        {
          title: 'Experiencia de compra ágil con modo claro y oscuro',
          desc: 'Hero dinámico por categorías, grilla comercial limpia, vista rápida de productos y carrito lateral persistente.',
          ctaText: 'Ampliar vista de la tienda →'
        },
        {
          title: 'Doble entorno: Tienda pública + Panel CRM',
          desc: 'Permite administrar stock, actualizar precios, auditar clientes y seguir el estado de cada pedido desde una interfaz dedicada.',
          ctaText: 'Ver arquitectura del sistema →'
        },
        {
          title: 'Porcentaje de tecnologías y distribución (GitHub)',
          desc: 'Equilibrio entre lógica de negocio en JavaScript ES6+ (48.3%), sistema de diseño CSS con variables de tema (27.5%) y HTML5 semántico (24.2%).',
          ctaText: 'Inspeccionar código en GitHub ↗'
        },
        {
          title: 'Publicación en vivo lista para probar',
          desc: 'Navegá el catálogo, aplicá cupones de descuento, generá un pedido y revisalo en el panel CRM integrado.',
          ctaText: 'Abrir MiTienda en vivo ↗'
        }
      ]
    },
    {
      id: 'news-dashboard',
      index: '03',
      shortTab: 'Agora · Divisas',
      title: 'Agora · Prensa & Monitor de Divisas',
      subtitle: 'Monitor financiero en vivo, cotizaciones cambiarias en tiempo real, calculadora de arbitraje y feed editorial limpio.',
      categoryLabel: 'APIs & Telemetría',
      year: '2025',
      assetPath: 'assets/news.png',
      liveUrl: 'https://news-leodoerflinger.vercel.app/',
      githubUrl: 'https://github.com/LeoDoerflinger/News',
      featured: true,
      problem: 'Las cotizaciones cambiarias en Argentina varían a diario y los sitios informativos suelen bloquear la lectura con publicidad invasiva y scripts pesados.',
      solution: 'Consultas concurrentes a APIs financieras para mostrar cotizaciones en tiempo real, calculadora de conversión directa y un feed de prensa ordenado para leer sin distracciones.',
      stack: ['JavaScript ES6+', 'REST APIs', 'CSS3 Editorial', 'Fetch Concurrente', 'Vercel'],
      calloutBadge: 'Cotizaciones & Prensa en Vivo',
      calloutText: 'Pizarra cambiaria actualizada con brecha porcentual automática y conversor multimoneda.',
      modules: [
        { num: 'MÓDULO 01', title: 'Pizarra Cambiaria Concurrente', desc: 'Consulta simultánea de Dólar Oficial, Blue, MEP, CCL, Tarjeta y Cripto con cálculo de brecha.' },
        { num: 'MÓDULO 02', title: 'Calculadora de Conversión', desc: 'Conversor instantáneo bidireccional entre Pesos Argentinos y cualquiera de las cotizaciones activas.' },
        { num: 'MÓDULO 03', title: 'Feed Editorial Categorizado', desc: 'Lectura limpia por secciones (Economía, Mercados, Tecnología, Internacional) sin banners intrusivos.' },
        { num: 'MÓDULO 04', title: 'Caché Resiliente & Fallback', desc: 'Persistencia local de la última cotización válida para garantizar disponibilidad ante microcortes.' }
      ],
      languages: [
        { name: 'JavaScript', pct: 44.6, color: '#F1E05A' },
        { name: 'CSS', pct: 37.8, color: '#563D7C' },
        { name: 'HTML', pct: 17.6, color: '#E34C26' }
      ],
      stackBreakdown: [
        { label: 'Motor de Cotizaciones & Fetch API', pct: 48, color: '#F1E05A' },
        { label: 'Maquetación Editorial & Grilla', pct: 35, color: '#563D7C' },
        { label: 'Calculadora & Caché Local', pct: 17, color: '#FF6B2B' }
      ],
      metrics: [
        { val: '6 Mercados', label: 'Pizarra en tiempo real' },
        { val: 'REST API', label: 'Fetch concurrente' },
        { val: '100% Limpio', label: 'Lectura sin anuncios' }
      ],
      steps: [
        {
          title: 'Claridad editorial y datos financieros al instante',
          desc: 'Reúne en una sola pantalla las cotizaciones del día y las noticias clave con jerarquía tipográfica de diario financiero.',
          ctaText: 'Ampliar vista de Agora →'
        },
        {
          title: 'Consumo concurrente de APIs y calculadora',
          desc: 'Procesa múltiples endpoints en paralelo, calcula spreads automáticamente y ofrece conversión inmediata de montos.',
          ctaText: 'Ver detalle de módulos →'
        },
        {
          title: 'Porcentaje de tecnologías y distribución (GitHub)',
          desc: 'Desarrollado con 44.6% JavaScript asíncrono, 37.8% hojas de estilo editoriales responsivas y 17.6% estructura HTML5.',
          ctaText: 'Ver repositorio en GitHub ↗'
        },
        {
          title: 'Acceso directo a la edición en producción',
          desc: 'Desplegado en Vercel con actualización automática de indicadores y diseño adaptable de escritorio a móvil.',
          ctaText: 'Abrir Agora en vivo ↗'
        }
      ]
    },
    {
      id: 'pastillero-pwa',
      index: '04',
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
      stack: ['React.js', 'PWA', 'Service Workers', 'Web Push API', 'LocalStorage'],
      calloutBadge: 'Accesibilidad & Offline-First',
      calloutText: 'Funciona sin internet e incluye lupa óptica mediante la cámara del celular.',
      modules: [
        { num: 'MÓDULO 01', title: 'Cronograma Diario de Tomas', desc: 'Tarjetas de alto contraste con confirmación táctil en un toque.' },
        { num: 'MÓDULO 02', title: 'Service Worker Offline', desc: 'Acceso garantizado al tratamiento incluso sin señal de datos.' },
        { num: 'MÓDULO 03', title: 'Lupa Óptica de Prospectos', desc: 'Uso de MediaDevices API con zoom y alto contraste para leer letras chicas.' },
        { num: 'MÓDULO 04', title: 'Alertas & Recordatorios', desc: 'Notificaciones programadas para evitar olvidos en las tomas.' }
      ],
      languages: [
        { name: 'JavaScript / React', pct: 68.4, color: '#F1E05A' },
        { name: 'CSS', pct: 21.6, color: '#563D7C' },
        { name: 'HTML', pct: 10.0, color: '#E34C26' }
      ],
      stackBreakdown: [
        { label: 'Componentes React & Estado', pct: 60, color: '#F1E05A' },
        { label: 'Service Workers & Web APIs', pct: 25, color: '#FF6B2B' },
        { label: 'UI Accesible Alto Contraste', pct: 15, color: '#563D7C' }
      ],
      metrics: [
        { val: 'Offline', label: 'Service Worker activo' },
        { val: 'WCAG AAA', label: 'Foco en accesibilidad' },
        { val: 'PWA', label: 'Instalable en móvil' }
      ],
      steps: [
        {
          title: 'Interfaz asistiva pensada para personas reales',
          desc: 'Botones amplios, tipografía legible y flujo directo sin menús confusos.',
          ctaText: 'Ampliar captura →'
        },
        {
          title: 'Módulos offline y lupa por cámara',
          desc: 'Combina almacenamiento persistente con acceso a la cámara para asistir en la lectura de prospectos.',
          ctaText: 'Ver ficha técnica →'
        },
        {
          title: 'Porcentaje de tecnologías (GitHub)',
          desc: 'Construido con 68.4% JavaScript/React, 21.6% CSS de alto contraste y 10.0% HTML.',
          ctaText: 'Ver código en GitHub ↗'
        },
        {
          title: 'Aplicación instalable en producción',
          desc: 'Disponible online en Vercel lista para instalar en la pantalla de inicio del celular.',
          ctaText: 'Probar Pastillero en vivo ↗'
        }
      ]
    },
    {
      id: 'climax-weather',
      index: '05',
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
      stack: ['JavaScript ES6+', 'OpenWeather API', 'Geolocation API', 'CSS Grid', 'Vercel'],
      calloutBadge: 'Telemetría Directa',
      calloutText: 'Consulta meteorológica global en milisegundos sin rastreadores ni publicidad.',
      modules: [
        { num: 'MÓDULO 01', title: 'Geolocalización Instantánea', desc: 'Detección automática de coordenadas del usuario al iniciar.' },
        { num: 'MÓDULO 02', title: 'Buscador Global de Ciudades', desc: 'Consulta rápida de cualquier localidad con métricas completas.' },
        { num: 'MÓDULO 03', title: 'Variables Atmosféricas', desc: 'Humedad, presión, ráfagas de viento, visibilidad y pronóstico extendido.' },
        { num: 'MÓDULO 04', title: 'Interfaz Adaptativa', desc: 'Indicadores visuales claros optimizados para lectura rápida en móvil.' }
      ],
      languages: [
        { name: 'JavaScript', pct: 52.0, color: '#F1E05A' },
        { name: 'CSS', pct: 31.0, color: '#563D7C' },
        { name: 'HTML', pct: 17.0, color: '#E34C26' }
      ],
      stackBreakdown: [
        { label: 'Consumo OpenWeather & Geo API', pct: 52, color: '#F1E05A' },
        { label: 'Layout & Tarjetas de Telemetría', pct: 31, color: '#563D7C' },
        { label: 'Estructura Semántica', pct: 17, color: '#E34C26' }
      ],
      metrics: [
        { val: '< 1s', label: 'Carga inicial' },
        { val: 'Geo API', label: 'Ubicación nativa' },
        { val: '0 Ads', label: 'Interfaz limpia' }
      ],
      steps: [
        {
          title: 'Datos meteorológicos precisos al instante',
          desc: 'Presentación directa de temperatura actual, máxima/mínima y estado del cielo.',
          ctaText: 'Ampliar captura →'
        },
        {
          title: 'Integración con OpenWeather y Geolocation',
          desc: 'Arquitectura ligera sin dependencias pesadas.',
          ctaText: 'Ver ficha técnica →'
        },
        {
          title: 'Porcentaje de tecnologías (GitHub)',
          desc: '52.0% JavaScript ES6+, 31.0% CSS Grid y 17.0% HTML5.',
          ctaText: 'Ver código en GitHub ↗'
        },
        {
          title: 'Demo en producción',
          desc: 'Disponible en Vercel para consultar el clima de cualquier ciudad en tiempo real.',
          ctaText: 'Probar ClimaX en vivo ↗'
        }
      ]
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
      stack: ['JavaScript', 'Web Crypto API', 'Clipboard API', 'CSS3'],
      calloutBadge: 'Criptografía Local',
      calloutText: 'Generación 100% en el navegador con window.crypto.getRandomValues().',
      modules: [
        { num: 'MÓDULO 01', title: 'Motor Web Crypto Nativo', desc: 'Entropía criptográfica real generada en el dispositivo del usuario.' },
        { num: 'MÓDULO 02', title: 'Medidor de Fortaleza', desc: 'Evaluación en vivo según longitud y variedad de caracteres.' },
        { num: 'MÓDULO 03', title: 'Configurador Flexible', desc: 'Control de longitud, mayúsculas, números y símbolos especiales.' },
        { num: 'MÓDULO 04', title: 'Copiado Seguro en 1 Clic', desc: 'Integración con Clipboard API y confirmación visual inmediata.' }
      ],
      languages: [
        { name: 'JavaScript', pct: 49.5, color: '#F1E05A' },
        { name: 'CSS', pct: 32.5, color: '#563D7C' },
        { name: 'HTML', pct: 18.0, color: '#E34C26' }
      ],
      stackBreakdown: [
        { label: 'Web Crypto & Cálculo de Entropía', pct: 50, color: '#F1E05A' },
        { label: 'Controles UI & Feedback', pct: 32, color: '#563D7C' },
        { label: 'Maquetación Accesible', pct: 18, color: '#E34C26' }
      ],
      metrics: [
        { val: '100% Local', label: 'Sin envío a servidor' },
        { val: 'Crypto API', label: 'Entropía nativa' },
        { val: '1 Clic', label: 'Clipboard API' }
      ],
      steps: [
        {
          title: 'Seguridad criptográfica ejecutada en el cliente',
          desc: 'Ninguna clave generada sale de tu navegador.',
          ctaText: 'Ampliar captura →'
        },
        {
          title: 'Control de parámetros y entropía',
          desc: 'Ajustá longitud y complejidad con respuesta visual instantánea.',
          ctaText: 'Ver ficha técnica →'
        },
        {
          title: 'Porcentaje de tecnologías (GitHub)',
          desc: '49.5% JavaScript, 32.5% CSS3 y 18.0% HTML5.',
          ctaText: 'Ver código en GitHub ↗'
        },
        {
          title: 'Herramienta lista para usar',
          desc: 'Publicada en producción con acceso inmediato.',
          ctaText: 'Abrir Pass Vault en vivo ↗'
        }
      ]
    }
  ];

  // Featured projects shown in the top selector bar (GastroPOS, MiTienda, Agora)
  const FEATURED_IDS = ['gastropos-saas', 'mitienda-ecommerce', 'news-dashboard'];

  let activeStageId = PROJECTS[0].id;
  let activeStepIndex = 0;
  let activeStepProgress = 35;

  function getActiveProject() {
    return PROJECTS.find(p => p.id === activeStageId) || PROJECTS[0];
  }

  // Build Left Visor HTML according to activeStepIndex (0..3)
  function buildVisorStepHtml(project, stepIdx) {
    if (stepIdx === 0) {
      return `
        <div class="visor-step-panel" data-visor-step="0">
          <div class="visor-screenshot-wrap">
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

            <div class="visor-floating-callout">
              <div class="callout-top-row">
                <span class="callout-badge">${project.calloutBadge}</span>
                <span class="visor-window-tag">${project.year}</span>
              </div>
              <p class="callout-text">${project.calloutText}</p>
            </div>
          </div>
        </div>
      `;
    }

    if (stepIdx === 1) {
      return `
        <div class="visor-step-panel visor-inner-window" data-visor-step="1">
          <div class="visor-window-header">
            <span class="visor-window-title">Arquitectura & Módulos Operativos</span>
            <span class="visor-window-tag">${project.title}</span>
          </div>

          <div class="visor-modules-grid">
            ${project.modules.map(m => `
              <div class="visor-module-card">
                <div class="visor-mod-num">${m.num}</div>
                <div class="visor-mod-title">${m.title}</div>
                <p class="visor-mod-desc">${m.desc}</p>
              </div>
            `).join('')}
          </div>

          <div class="card-stack-row" style="margin-top:1rem; margin-bottom:0;">
            ${project.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
          </div>
        </div>
      `;
    }

    if (stepIdx === 2) {
      return `
        <div class="visor-step-panel visor-inner-window" data-visor-step="2">
          <div class="visor-window-header">
            <span class="visor-window-title">Languages & Stack Distribution</span>
            <span class="visor-window-tag">GitHub Repository Metrics</span>
          </div>

          <div class="visor-lang-headline">
            <span class="visor-lang-big">${project.languages[0].name} ${project.languages[0].pct}%</span>
            <span class="visor-lang-sub">Composición real del código fuente</span>
          </div>

          <!-- Barra porcentual estilo GitHub -->
          <div class="github-lang-bar" role="img" aria-label="Porcentaje de lenguajes utilizados en ${project.title}">
            ${project.languages.map(lang => `
              <div
                class="github-lang-segment"
                style="width: ${lang.pct}%; background-color: ${lang.color};"
                title="${lang.name}: ${lang.pct}%"
              ></div>
            `).join('')}
          </div>

          <!-- Leyenda estilo GitHub con puntos de color y porcentaje -->
          <div class="github-lang-legend">
            ${project.languages.map(lang => `
              <div class="github-lang-item">
                <span class="lang-dot" style="background-color: ${lang.color};"></span>
                <span class="lang-name">${lang.name}</span>
                <span class="lang-pct">${lang.pct}%</span>
              </div>
            `).join('')}
          </div>

          <!-- Desglose por capas del proyecto -->
          <div class="stack-dist-list">
            ${project.stackBreakdown.map(item => `
              <div class="stack-dist-row">
                <div class="stack-dist-labels">
                  <span>${item.label}</span>
                  <strong>${item.pct}%</strong>
                </div>
                <div class="stack-dist-track">
                  <div class="stack-dist-fill" style="width:${item.pct}%; background:${item.color};"></div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="visor-metrics-row">
            ${project.metrics.map(m => `
              <div class="visor-metric-cell">
                <span class="visor-metric-val">${m.val}</span>
                <span class="visor-metric-label">${m.label}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Step 3: Production Deployment & Repository
    return `
      <div class="visor-step-panel visor-inner-window" data-visor-step="3">
        <div class="visor-window-header">
          <span class="visor-window-title">Entorno de Producción & Código Fuente</span>
          <span class="visor-window-tag">Vercel + GitHub</span>
        </div>

        <div class="visor-deploy-top">
          <div class="visor-deploy-thumb">
            <img src="${project.assetPath}" alt="Captura de ${project.title}" width="480" height="300" />
          </div>
          <div class="visor-deploy-specs">
            <div class="visor-deploy-row">
              <span>Proyecto</span>
              <span>${project.title}</span>
            </div>
            <div class="visor-deploy-row">
              <span>Categoría</span>
              <span>${project.categoryLabel}</span>
            </div>
            <div class="visor-deploy-row">
              <span>Hosting</span>
              <span>Vercel Edge Network</span>
            </div>
            <div class="visor-deploy-row">
              <span>Repositorio</span>
              <span>GitHub Público</span>
            </div>
          </div>
        </div>

        <p class="accordion-step-desc" style="margin-bottom:0.9rem;">
          <strong>Solución implementada:</strong> ${project.solution}
        </p>

        <div class="visor-deploy-actions">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-primary">
            <span>Abrir Demo en Vivo ↗</span>
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary">
            <span>Ver Código en GitHub ↗</span>
          </a>
          <button type="button" class="btn-action btn-ghost" onclick="window.ldApp.openProjectModal('${project.id}')">
            <span>Ficha Completa</span>
          </button>
        </div>
      </div>
    `;
  }

  function handleStepCtaClick(project, stepIdx) {
    if (stepIdx === 0 || stepIdx === 1) {
      window.ldApp.openProjectModal(project.id);
    } else if (stepIdx === 2) {
      window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  }

  // Render the entire Interactive Stage (when project changes)
  function renderInteractiveStage(projectId, initialStep = 0) {
    const tabsContainer = document.getElementById('stage-tabs-container');
    const workspaceContainer = document.getElementById('stage-workspace-content');
    const stepCounterEl = document.getElementById('stage-step-counter');
    if (!tabsContainer || !workspaceContainer) return;

    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
    activeStageId = project.id;
    activeStepIndex = initialStep;
    activeStepProgress = 100;

    // Build top selector tabs: always show the 3 Featured Projects + active project if it's 04..06
    const tabProjects = PROJECTS.filter(p => FEATURED_IDS.includes(p.id) || p.id === activeStageId);

    tabsContainer.innerHTML = tabProjects.map(p => {
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

    if (stepCounterEl) {
      stepCounterEl.textContent = `0${activeStepIndex + 1} / 04`;
    }

    workspaceContainer.innerHTML = `
      <div class="stage-preview-well stage-animate">
        <span class="corner-cross tl" aria-hidden="true">+</span>
        <span class="corner-cross tr" aria-hidden="true">+</span>
        <span class="corner-cross bl" aria-hidden="true">+</span>
        <span class="corner-cross br" aria-hidden="true">+</span>
        <div class="visor-ambient-glow" aria-hidden="true"></div>

        <div class="visor-stage-body" id="visor-dynamic-body">
          ${buildVisorStepHtml(project, activeStepIndex)}
        </div>

        <div class="stage-caption-pill">
          <span id="visor-caption-text">${project.index} · ${project.title} — Etapa 0${activeStepIndex + 1} de 04</span>
        </div>
      </div>

      <div class="stage-accordion-column stage-animate">
        <div class="stage-accordion-list" id="stage-accordion-list">
          ${project.steps.map((st, idx) => {
            const isActive = idx === activeStepIndex;
            return `
              <div
                class="stage-accordion-item ${isActive ? 'active' : ''}"
                data-accordion-step="${idx}"
                role="button"
                tabindex="0"
                aria-expanded="${isActive}"
              >
                <div class="accordion-progress-track" aria-hidden="true">
                  <div class="accordion-progress-fill" style="height: ${isActive ? activeStepProgress : 0}%;"></div>
                </div>
                <div class="accordion-content-col">
                  <div class="accordion-header-line">
                    <h3 class="accordion-step-title">${st.title}</h3>
                    <span class="accordion-step-num">0${idx + 1}</span>
                  </div>
                  <div class="accordion-expand-body">
                    <p class="accordion-step-desc">${st.desc}</p>
                    <span class="accordion-step-cta" data-step-cta="${idx}">
                      <span>${st.ctaText}</span>
                    </span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="stage-quick-footer">
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-primary">
              <span>Probar en vivo</span>
            </a>
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-secondary">
              <span>Código en GitHub</span>
            </a>
          </div>
          <button type="button" class="signal-action-link" onclick="window.ldApp.openProjectModal('${project.id}')">
            <span>Ficha completa</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    `;

    // Bind project selector tabs
    tabsContainer.querySelectorAll('[data-stage-select]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-stage-select');
        if (targetId && targetId !== activeStageId) {
          renderInteractiveStage(targetId, 0);
          // Reset scroll position to top of stage track on desktop if user scrolled deep
          const trackEl = document.getElementById('scroll-stage-track');
          if (trackEl && window.innerWidth >= 960) {
            const rect = trackEl.getBoundingClientRect();
            if (rect.top < -80) {
              window.scrollTo({ top: window.scrollY + rect.top - 76, behavior: 'smooth' });
            }
          }
        }
      });
    });

    bindAccordionEvents(project);
  }

  function bindAccordionEvents(project) {
    const items = document.querySelectorAll('[data-accordion-step]');
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        const ctaEl = e.target.closest('[data-step-cta]');
        const idx = parseInt(item.getAttribute('data-accordion-step') || '0', 10);

        if (ctaEl && idx === activeStepIndex) {
          e.stopPropagation();
          handleStepCtaClick(project, idx);
          return;
        }

        // Scroll to the corresponding quarter of the scroll track on desktop, or activate directly
        const trackEl = document.getElementById('scroll-stage-track');
        if (trackEl && window.innerWidth >= 960) {
          const trackTop = trackEl.getBoundingClientRect().top + window.scrollY;
          const scrollableDistance = Math.max(1, trackEl.offsetHeight - window.innerHeight);
          const targetScroll = trackTop + (scrollableDistance * ((idx + 0.35) / 4));
          setActiveStageStep(idx, 65);
          window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        } else {
          setActiveStageStep(idx, 100);
        }
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });
  }

  // Update active step and progress bar smoothly without rebuilding the entire stage
  function setActiveStageStep(newStepIdx, progressPct) {
    const project = getActiveProject();
    const clampedStep = Math.max(0, Math.min(3, newStepIdx));
    const clampedPct = Math.max(8, Math.min(100, progressPct));

    const stepChanged = clampedStep !== activeStepIndex;
    activeStepIndex = clampedStep;
    activeStepProgress = clampedPct;

    const stepCounterEl = document.getElementById('stage-step-counter');
    if (stepCounterEl) {
      stepCounterEl.textContent = `0${activeStepIndex + 1} / 04`;
    }

    const captionEl = document.getElementById('visor-caption-text');
    if (captionEl) {
      captionEl.textContent = `${project.index} · ${project.title} — Etapa 0${activeStepIndex + 1} de 04`;
    }

    const items = document.querySelectorAll('[data-accordion-step]');
    items.forEach(item => {
      const idx = parseInt(item.getAttribute('data-accordion-step') || '0', 10);
      const isCurrent = idx === activeStepIndex;
      item.classList.toggle('active', isCurrent);
      item.setAttribute('aria-expanded', isCurrent ? 'true' : 'false');
      const fill = item.querySelector('.accordion-progress-fill');
      if (fill) {
        fill.style.height = isCurrent ? `${activeStepProgress}%` : (idx < activeStepIndex ? '100%' : '0%');
      }
    });

    if (stepChanged) {
      const visorBody = document.getElementById('visor-dynamic-body');
      if (visorBody) {
        visorBody.innerHTML = buildVisorStepHtml(project, activeStepIndex);
      }
    }
  }

  // Scroll listener for the Scroll-Guided Featured Project Stage
  function setupScrollGuidedStage() {
    const trackEl = document.getElementById('scroll-stage-track');
    if (!trackEl) return;

    let ticking = false;

    function onScroll() {
      if (window.innerWidth < 960) return;
      const rect = trackEl.getBoundingClientRect();
      const totalScrollable = trackEl.offsetHeight - window.innerHeight * 0.78;
      if (totalScrollable <= 40) return;

      const scrolled = -rect.top + 84;
      if (scrolled < -120 || scrolled > totalScrollable + 220) return;

      const rawProgress = Math.max(0, Math.min(0.999, scrolled / totalScrollable));
      const scaled = rawProgress * 4;
      const stepIdx = Math.min(3, Math.floor(scaled));
      const stepProgress = Math.round(((scaled - stepIdx) * 88) + 12);

      setActiveStageStep(stepIdx, stepProgress);
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
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
        renderInteractiveStage(id, 0);
        const stageEl = document.getElementById('graphite-project-stage');
        if (stageEl) {
          stageEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  // 3. Scroll-Vanishing Transitions & Isometric Layer Sync for #stack ("Habilidades")
  function setupStackVanishAndFilters() {
    const btns = document.querySelectorAll('[data-stack-group]');
    const cards = Array.from(document.querySelectorAll('[data-stack-card]'));
    const isoPlates = Array.from(document.querySelectorAll('[data-iso-layer]'));
    const activeLayerLabel = document.getElementById('iso-active-layer-label');
    const activeLayerDesc = document.getElementById('iso-active-layer-desc');

    if (!cards.length) return;

    let activeFilter = 'all';

    function highlightIsoLayer(layerKey) {
      const idxMap = { frontend: '01', apis: '02', backend: '03', design: '04' };
      isoPlates.forEach(plate => {
        const key = plate.getAttribute('data-iso-layer');
        const isMatch = key === layerKey;
        plate.classList.toggle('active-layer', isMatch);
        plate.classList.toggle('vanished-layer', activeFilter !== 'all' && !isMatch);
      });

      if (activeLayerLabel && idxMap[layerKey]) {
        activeLayerLabel.textContent = `CAPA ${idxMap[layerKey]} ACTIVA`;
      }

      const matchingCard = cards.find(c => c.getAttribute('data-stack-card') === layerKey);
      if (activeLayerDesc && matchingCard) {
        const desc = matchingCard.getAttribute('data-layer-desc');
        if (desc) activeLayerDesc.textContent = desc;
      }
    }

    // Filter buttons at top of #stack
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.getAttribute('data-stack-group') || 'all';
        activeFilter = group;
        btns.forEach(b => b.classList.toggle('active', b === btn));

        cards.forEach(card => {
          const key = card.getAttribute('data-stack-card');
          const match = group === 'all' || key === group;
          card.classList.toggle('dimmed', !match);
          if (match && group !== 'all') {
            card.classList.add('in-focus');
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }
        });

        if (group !== 'all') {
          highlightIsoLayer(group);
        } else {
          updateScrollVanishEffect();
        }
      });
    });

    // Clicking an isometric plate scrolls to or highlights that skill card
    isoPlates.forEach(plate => {
      plate.addEventListener('click', () => {
        const layerKey = plate.getAttribute('data-iso-layer');
        const targetCard = cards.find(c => c.getAttribute('data-stack-card') === layerKey);
        if (targetCard) {
          highlightIsoLayer(layerKey);
          cards.forEach(c => c.classList.toggle('in-focus', c === targetCard));
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    });

    // Continuous Scroll-Vanishing effect as cards enter/leave the viewport center zone
    function updateScrollVanishEffect() {
      if (activeFilter !== 'all') return;

      const vh = window.innerHeight;
      const focusCenter = vh * 0.48;
      let closestCard = cards[0];
      let minDistance = Infinity;

      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distFromFocus = cardCenter - focusCenter;
        const absDist = Math.abs(distFromFocus);

        if (absDist < minDistance) {
          minDistance = absDist;
          closestCard = card;
        }

        // Normalize distance: within 180px of focusCenter = full visibility; beyond = progressive vanish
        const maxRange = vh * 0.58;
        const ratio = Math.max(0, Math.min(1, 1 - (Math.max(0, absDist - 90) / maxRange)));
        const opacity = (0.24 + ratio * 0.76).toFixed(2);
        const shiftY = distFromFocus < -90
          ? -Math.round((1 - ratio) * 18) // Vanishing upward as you scroll past
          : (distFromFocus > 90 ? Math.round((1 - ratio) * 18) : 0);
        const scale = (0.965 + ratio * 0.035).toFixed(3);

        card.style.opacity = opacity;
        card.style.transform = `translateY(${shiftY}px) scale(${scale})`;
      });

      cards.forEach(c => c.classList.toggle('in-focus', c === closestCard));
      if (closestCard) {
        const activeKey = closestCard.getAttribute('data-stack-card');
        if (activeKey) highlightIsoLayer(activeKey);
      }
    }

    let vanishTicking = false;
    window.addEventListener('scroll', () => {
      if (!vanishTicking) {
        requestAnimationFrame(() => {
          updateScrollVanishEffect();
          vanishTicking = false;
        });
        vanishTicking = true;
      }
    }, { passive: true });

    window.addEventListener('resize', updateScrollVanishEffect, { passive: true });
    requestAnimationFrame(updateScrollVanishEffect);
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
              <h4 class="modal-section-title">DESCRIPCIÓN & ARQUITECTURA</h4>
              <p class="modal-p"><strong>Desafío operativo:</strong> ${project.problem}</p>
              <p class="modal-p" style="margin-top:0.75rem;"><strong>Solución técnica:</strong> ${project.solution}</p>
            </div>

            <div>
              <h4 class="modal-section-title">LENGUAJES & TECNOLOGÍAS</h4>
              <div class="github-lang-bar" style="margin-bottom:0.65rem;">
                ${project.languages.map(lang => `
                  <div class="github-lang-segment" style="width:${lang.pct}%; background-color:${lang.color};"></div>
                `).join('')}
              </div>
              <div class="github-lang-legend" style="margin-bottom:1rem; padding-bottom:0.85rem;">
                ${project.languages.map(lang => `
                  <div class="github-lang-item">
                    <span class="lang-dot" style="background-color:${lang.color};"></span>
                    <span class="lang-name">${lang.name}</span>
                    <span class="lang-pct">${lang.pct}%</span>
                  </div>
                `).join('')}
              </div>

              <div class="card-stack-row" style="margin-bottom:1.25rem;">
                ${project.stack.map(s => `<span class="stack-tag">${s}</span>`).join('')}
              </div>

              <div class="modal-actions-box hairline-t" style="padding-top:1.1rem; display:flex; flex-direction:column; gap:0.625rem;">
                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-action btn-primary" style="text-align:center;">
                  Abrir Proyecto en Producción
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
    renderInteractiveStage(PROJECTS[0].id, 0);
    setupScrollGuidedStage();
    renderHorizontalRail();
    setupStackVanishAndFilters();
  });

  window.ldApp.PROJECTS = PROJECTS;
  window.ldApp.setActiveStageStep = setActiveStageStep;
  window.ldApp.renderInteractiveStage = renderInteractiveStage;
})();
