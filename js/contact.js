/* ==========================================================================
   CONTACT ACTIONS, CLIPBOARD & WHATSAPP
   Portfolio — Leopoldo Doerflinger
   ========================================================================== */

(function () {
  'use strict';

  const EMAIL_ADDRESS = 'leodoercba@gmail.com';
  const WHATSAPP_PHONE = '543512619874';

  // Helper Copiar al Portapapeles
  async function copyText(text, successMessage) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const temp = document.createElement('textarea');
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
      }
      if (window.ldApp && window.ldApp.showToast) {
        window.ldApp.showToast(successMessage);
      }
    } catch (err) {
      console.warn('Error al copiar:', err);
    }
  }

  // Copiar Email en 1 clic
  document.querySelectorAll('[data-action="copy-email"]').forEach(btn => {
    btn.addEventListener('click', () => {
      copyText(EMAIL_ADDRESS, `✓ Correo copiado: ${EMAIL_ADDRESS}`);
    });
  });

  // Abrir WhatsApp Directo ("Te dejo mi número")
  document.querySelectorAll('[data-action="open-whatsapp"]').forEach(btn => {
    btn.addEventListener('click', () => {
      const msg = encodeURIComponent('¡Hola Leo! Vi tu portfolio y me gustaría ponerme en contacto con vos.');
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, '_blank', 'noopener,noreferrer');
    });
  });

  // Formulario Directo por Mailto
  const form = document.getElementById('architectural-contact-form');
  const alertEl = document.getElementById('form-feedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        if (alertEl) {
          alertEl.textContent = 'Por favor completá tu nombre, correo y mensaje.';
          alertEl.className = 'form-alert error';
        }
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (alertEl) {
          alertEl.textContent = 'Ingresá un correo electrónico válido.';
          alertEl.className = 'form-alert error';
        }
        return;
      }

      const subject = encodeURIComponent(`[Portfolio] Consulta de ${name}`);
      const body = encodeURIComponent(`Hola Leo,\n\nSoy ${name} (${email}).\n\nMensaje:\n${message}\n\n— Enviado desde tu portfolio web.`);

      if (alertEl) {
        alertEl.textContent = `✓ Preparado. Abriendo cliente de correo...`;
        alertEl.className = 'form-alert success';
      }

      window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
    });
  }
})();
