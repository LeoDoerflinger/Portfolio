/* ==========================================================================
   INTERACTIVE 3D CUBE CONTROLLER
   Portfolio - Leopoldo Doerflinger
   ========================================================================== */

(function () {
  'use strict';

  const scene = document.getElementById('cube-scene');
  const cube = document.getElementById('cube');
  if (!scene || !cube) return;

  // Auto calculate translateZ for face alignment based on width
  function setCubeDepth() {
    const tz = scene.clientWidth / 2;
    document.documentElement.style.setProperty('--tz', tz + 'px');
  }
  setCubeDepth();
  window.addEventListener('resize', setCubeDepth, { passive: true });

  // Rotation physics & state
  let rotX = -12;
  let rotY = 25;
  let velX = 0;
  let velY = 0.5; // default auto-rotate velocity
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let lastMoveX = 0;
  let lastMoveY = 0;
  let isHovered = false;

  function applyTransform() {
    cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }

  // Animation Loop
  function animate() {
    if (!isDragging) {
      if (!isHovered) {
        // Natural continuous spin
        rotY += 0.45;
        // Dampen any drag inertia
        rotX += velX;
        rotY += velY;
        velX *= 0.92;
        velY *= 0.92;
      }
    }
    applyTransform();
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  // Mouse Drag Events
  scene.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    lastMoveX = e.clientX;
    lastMoveY = e.clientY;
    velX = 0;
    velY = 0;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMoveX;
    const deltaY = e.clientY - lastMoveY;

    rotY += deltaX * 0.5;
    rotX -= deltaY * 0.5;

    // Track velocity for inertia
    velY = deltaX * 0.25;
    velX = -deltaY * 0.25;

    lastMoveX = e.clientX;
    lastMoveY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Touch Drag Events for Mobile
  scene.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    isDragging = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    lastMoveX = startX;
    lastMoveY = startY;
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - lastMoveX;
    const deltaY = currentY - lastMoveY;

    rotY += deltaX * 0.6;
    rotX -= deltaY * 0.6;

    velY = deltaX * 0.3;
    velX = -deltaY * 0.3;

    lastMoveX = currentX;
    lastMoveY = currentY;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Pause gentle rotation on hover
  scene.addEventListener('mouseenter', () => { isHovered = true; });
  scene.addEventListener('mouseleave', () => { isHovered = false; });

})();
