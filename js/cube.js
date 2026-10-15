/* ==========================================================================
   INTERACTIVE 3D WORKSHOP CUBE & STACK SYNCHRONIZER
   Portfolio - Leopoldo Doerflinger (Full Stack Developer)
   ========================================================================== */

(function () {
  'use strict';

  // 1. REGISTRO DE TECNOLOGÍAS & MAPEADO DEL CUBO
  const STACK_ITEMS = [
    {
      key: 'js',
      face: 'front',
      name: 'JavaScript (ES6+)',
      asset: 'assets/js.png',
      role: 'Frontend & Lógica en Cliente',
      desc: 'Manipulación ágil del DOM, consumo asíncrono con `async/await`, estado reactivo nativo y APIs Web modernas (Storage, Crypto, Geolocation).'
    },
    {
      key: 'node',
      face: 'right',
      name: 'Node.js',
      asset: 'assets/node.png',
      role: 'Backend & APIs REST',
      desc: 'Arquitectura de endpoints REST, controladores modulares, validaciones de datos y conexión fluida con bases de datos.'
    },
    {
      key: 'python',
      face: 'back',
      name: 'Python',
      asset: 'assets/python.png',
      role: 'Scripts, Backend & Datos',
      desc: 'Automatización de tareas, procesamiento de información, scripts de soporte y desarrollo ágil de utilidades orientadas a la eficiencia.'
    },
    {
      key: 'java',
      face: 'left',
      name: 'Java (POO)',
      asset: 'assets/java.png',
      role: 'POO & Arquitectura de Software',
      desc: 'Estructuras de datos robustas, tipado estático riguroso y patrones de diseño profundizados en el cursado de Certified Tech Developer.'
    },
    {
      key: 'mongodb',
      face: 'top',
      name: 'MongoDB',
      asset: 'assets/mongodb.png',
      role: 'Persistencia NoSQL',
      desc: 'Modelado documental en JSON/BSON, esquemas flexibles, índices optimizados y consultas escalables para aplicaciones dinámicas.'
    },
    {
      key: 'html',
      face: 'bottom',
      name: 'HTML5 & CSS3',
      asset: 'assets/html.png',
      role: 'Maquetación Semántica & Diseño',
      desc: 'Estructura semántica accesible, CSS Grid, Flexbox, variables nativas y diseño 100% responsivo sin dependencias innecesarias.'
    }
  ];

  const FACE_TARGETS = {
    front:  { x: 0,   y: 0,    key: 'js' },
    right:  { x: 0,   y: -90,  key: 'node' },
    back:   { x: 0,   y: -180, key: 'python' },
    left:   { x: 0,   y: 90,   key: 'java' },
    top:    { x: -90, y: 0,    key: 'mongodb' },
    bottom: { x: 90,  y: 0,    key: 'html' }
  };

  // Estado de Rotación y Física
  let rotX = -18;
  let rotY = 32;
  let velX = 0;
  let velY = 0.25;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let lastMoveX = 0;
  let lastMoveY = 0;
  let isHovered = false;
  let activeTechKey = 'js';

  const cube = document.getElementById('workshop-cube');
  const scene = document.getElementById('cube-scene-container');
  const readout = document.getElementById('cube-telemetry-readout');
  const stackGrid = document.getElementById('stack-cards-grid');

  function applyCubeTransform(smooth = false) {
    if (!cube) return;
    if (smooth) {
      cube.classList.add('smooth-snap');
    } else {
      cube.classList.remove('smooth-snap');
    }
    cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    if (readout) {
      readout.textContent = `X:${Math.round(rotX)}° Y:${Math.round(rotY)}° · ${activeTechKey.toUpperCase()}`;
    }
  }

  // Rotar a una cara específica con animación suave
  function rotateToFace(faceName) {
    const target = FACE_TARGETS[faceName];
    if (!target) return;

    rotX = target.x;
    rotY = target.y;
    velX = 0;
    velY = 0;
    activeTechKey = target.key;
    applyCubeTransform(true);

    // Actualizar botones de navegación
    document.querySelectorAll('.cube-face-btn').forEach(btn => {
      const match = btn.getAttribute('data-face') === faceName;
      btn.classList.toggle('active', match);
    });

    // Actualizar tarjetas de stack
    updateStackCardsHighlight();
  }

  // Renderizar la grilla de tecnologías
  function renderStackCards() {
    if (!stackGrid) return;
    stackGrid.innerHTML = STACK_ITEMS.map(item => {
      const isMatch = item.key === activeTechKey;
      return `
        <div class="stack-card ${isMatch ? 'active' : ''}" data-face-target="${item.face}" role="button" tabindex="0">
          <div class="stack-card-head">
            <h4 class="stack-card-name">${item.name}</h4>
            <span style="font-family:var(--font-mono); font-size:0.65rem; color:var(--ink-muted); text-transform:uppercase;">
              ${isMatch ? '● En Foco' : 'Ver en Cubo →'}
            </span>
          </div>
          <div class="stack-card-role">${item.role}</div>
          <p class="stack-card-desc">${item.desc}</p>
        </div>
      `;
    }).join('');

    stackGrid.querySelectorAll('[data-face-target]').forEach(card => {
      card.addEventListener('click', () => {
        const face = card.getAttribute('data-face-target');
        rotateToFace(face);
        if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('click');
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  }

  function updateStackCardsHighlight() {
    if (!stackGrid) return;
    stackGrid.querySelectorAll('[data-face-target]').forEach(card => {
      const face = card.getAttribute('data-face-target');
      const isMatch = FACE_TARGETS[face]?.key === activeTechKey;
      card.classList.toggle('active', isMatch);
      const indicator = card.querySelector('.stack-card-head span');
      if (indicator) {
        indicator.textContent = isMatch ? '● En Foco' : 'Ver en Cubo →';
      }
    });
  }

  // Bucle de física suave
  function physicsLoop() {
    if (!isDragging && !isHovered) {
      rotY += 0.22;
      rotX += velX;
      rotY += velY;
      velX *= 0.94;
      velY *= 0.94;
      applyCubeTransform(false);
    }
    requestAnimationFrame(physicsLoop);
  }

  // Interacción Mouse & Touch
  function initDragHandlers() {
    if (!scene) return;

    scene.addEventListener('mouseenter', () => { isHovered = true; });
    scene.addEventListener('mouseleave', () => { isHovered = false; });

    const onStart = (clientX, clientY) => {
      isDragging = true;
      startX = clientX;
      startY = clientY;
      lastMoveX = clientX;
      lastMoveY = clientY;
      velX = 0;
      velY = 0;
      cube.classList.remove('smooth-snap');
    };

    const onMove = (clientX, clientY) => {
      if (!isDragging) return;
      const dx = clientX - lastMoveX;
      const dy = clientY - lastMoveY;

      rotY += dx * 0.5;
      rotX -= dy * 0.5;

      velY = dx * 0.15;
      velX = -dy * 0.15;

      lastMoveX = clientX;
      lastMoveY = clientY;
      applyCubeTransform(false);
    };

    const onEnd = () => {
      isDragging = false;
    };

    scene.addEventListener('mousedown', (e) => onStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', onEnd);

    scene.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        onStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchend', onEnd);

    // Conectar botones de cara
    document.querySelectorAll('.cube-face-btn[data-face]').forEach(btn => {
      btn.addEventListener('click', () => {
        const face = btn.getAttribute('data-face');
        rotateToFace(face);
        if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('click');
      });
    });
  }

  // Inicialización
  document.addEventListener('DOMContentLoaded', () => {
    applyCubeTransform(false);
    renderStackCards();
    initDragHandlers();
    requestAnimationFrame(physicsLoop);
  });
})();
