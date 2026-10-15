/* ==========================================================================
   CONTACT FORM, CLIPBOARD & WHATSAPP
   Portfolio - Leopoldo Doerflinger (Full Stack Developer)
   ========================================================================== */

(function () {
  'use strict';

  const EMAIL_ADDRESS = 'leodoercba@gmail.com';
  const WHATSAPP_PHONE = '543512619874';

  // Elementos DOM
  const form = document.getElementById('postal-contact-form');
  const formAlert = document.getElementById('form-status-alert');
  const btnCopyEmail = document.getElementById('btn-copy-email');
  const btnOpenWhatsapp = document.getElementById('btn-open-whatsapp');
  const btnSubmitEmail = document.getElementById('btn-submit-email');
  const btnSubmitWhatsapp = document.getElementById('btn-submit-whatsapp');

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
      if (window.ldApp && window.ldApp.playSound) {
        window.ldApp.playSound('success');
      }
    } catch (err) {
      console.warn('Error al copiar al portapapeles:', err);
    }
  }

  // Copiar Email Directo
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      copyText(EMAIL_ADDRESS, `✓ Correo copiado: ${EMAIL_ADDRESS}`);
    });
  }

  // Abrir WhatsApp Directo
  if (btnOpenWhatsapp) {
    btnOpenWhatsapp.addEventListener('click', () => {
      const msg = encodeURIComponent('¡Hola Leo! Vi tu portafolio y me gustaría ponerme en contacto con vos.');
      window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${msg}`, '_blank');
      if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('click');
    });
  }

  // Validación de campos
  function validateForm() {
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const topic = document.getElementById('contact-topic')?.value;
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      showFormAlert('Por favor, completá tu nombre, correo y mensaje antes de enviar.', 'error');
      return null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFormAlert('El correo ingresado no parece tener un formato válido (ej. tu@correo.com).', 'error');
      return null;
    }

    return { name, email, topic, message };
  }

  function showFormAlert(text, type) {
    if (!formAlert) return;
    formAlert.className = `form-status-alert ${type}`;
    formAlert.textContent = text;
  }

  // Envío vía Mailto
  if (btnSubmitEmail) {
    btnSubmitEmail.addEventListener('click', (e) => {
      e.preventDefault();
      const data = validateForm();
      if (!data) return;

      const subject = encodeURIComponent(`[Contacto] ${data.topic} — De: ${data.name}`);
      const body = encodeURIComponent(
        `Hola Leo,\n\nMi nombre es: ${data.name}\nCorreo de contacto: ${data.email}\nMotivo: ${data.topic}\n\nMensaje:\n${data.message}\n\n— Enviado desde tu portafolio web`
      );

      showFormAlert(`✓ Mensaje preparado, ${data.name}. Abriendo tu cliente de correo...`, 'success');
      if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('success');

      setTimeout(() => {
        window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
        if (form) form.reset();
      }, 700);
    });
  }

  // Envío directo vía WhatsApp
  if (btnSubmitWhatsapp) {
    btnSubmitWhatsapp.addEventListener('click', (e) => {
      e.preventDefault();
      const data = validateForm();
      if (!data) return;

      const waText = encodeURIComponent(
        `*¡Hola Leo! Te contacto desde tu portafolio.*\n\n*Nombre:* ${data.name}\n*Email:* ${data.email}\n*Motivo:* ${data.topic}\n\n*Mensaje:*\n${data.message}`
      );

      showFormAlert(`✓ Abriendo WhatsApp con tu mensaje preparado...`, 'success');
      if (window.ldApp && window.ldApp.playSound) window.ldApp.playSound('success');

      setTimeout(() => {
        window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${waText}`, '_blank');
        if (form) form.reset();
      }, 700);
    });
  }
})();
