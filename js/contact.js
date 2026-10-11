/* ==========================================================================
   CONTACT FORM & CLIPBOARD CONTROLLER
   Portfolio - Leopoldo Doerflinger
   ========================================================================== */

(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const btnEmailSubmit = document.getElementById('btn-email-submit');
  const btnWhatsappSubmit = document.getElementById('btn-whatsapp-submit');
  const toast = document.getElementById('toast');

  // Helper Toast notification
  function showToast(message, duration = 3200) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  }

  // Copy to clipboard helper
  function setupCopyButton(btnId, textToCopy, successMsg) {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(successMsg);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(successMsg);
      }
    });
  }

  setupCopyButton('btn-copy-email', 'leodoercba@gmail.com', '📋 Email copiado al portapapeles: leodoercba@gmail.com');
  setupCopyButton('btn-copy-email-hero', 'leodoercba@gmail.com', '📋 Email copiado: leodoercba@gmail.com');
  setupCopyButton('btn-copy-phone', '+54 351 261 9874', '📋 WhatsApp copiado: +54 351 261 9874');

  // Form Validation
  function getFormData() {
    const name = document.getElementById('contact-name')?.value.trim();
    const email = document.getElementById('contact-email')?.value.trim();
    const subject = document.getElementById('contact-subject')?.value.trim();
    const message = document.getElementById('contact-message')?.value.trim();

    if (!name || !email || !message) {
      if (formStatus) {
        formStatus.textContent = 'Por favor, completá los campos obligatorios (Nombre, Email y Mensaje).';
        formStatus.className = 'form-status visible error';
      }
      return null;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (formStatus) {
        formStatus.textContent = 'Por favor, ingresá un correo electrónico válido.';
        formStatus.className = 'form-status visible error';
      }
      return null;
    }

    if (formStatus) {
      formStatus.className = 'form-status';
    }

    return { name, email, subject: subject || 'Consulta General', message };
  }

  // Email Submit (mailto)
  if (btnEmailSubmit) {
    btnEmailSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data) return;

      const subjectLine = encodeURIComponent(`[Portfolio] ${data.subject} — De: ${data.name}`);
      const bodyText = encodeURIComponent(
        `Hola Leo,\n\nMi nombre es: ${data.name}\nEmail de contacto: ${data.email}\nTipo de consulta: ${data.subject}\n\nMensaje:\n${data.message}\n\nEnviado desde portfolio-leodoerflinger`
      );

      const mailtoUrl = `mailto:leodoercba@gmail.com?subject=${subjectLine}&body=${bodyText}`;

      if (formStatus) {
        formStatus.textContent = 'Abriendo tu cliente de correo...';
        formStatus.className = 'form-status visible success';
      }

      window.location.href = mailtoUrl;

      setTimeout(() => {
        if (formStatus) formStatus.className = 'form-status';
      }, 5000);
    });
  }

  // WhatsApp Submit
  if (btnWhatsappSubmit) {
    btnWhatsappSubmit.addEventListener('click', (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data) return;

      const waText = encodeURIComponent(
        `¡Hola Leo! Te contacto desde tu Portfolio.\n\n*Nombre:* ${data.name}\n*Email:* ${data.email}\n*Tema:* ${data.subject}\n\n*Mensaje:* ${data.message}`
      );

      const waUrl = `https://wa.me/543512619874?text=${waText}`;

      if (formStatus) {
        formStatus.textContent = 'Redirigiendo a WhatsApp...';
        formStatus.className = 'form-status visible success';
      }

      window.open(waUrl, '_blank', 'noopener,noreferrer');

      setTimeout(() => {
        if (formStatus) formStatus.className = 'form-status';
      }, 4000);
    });
  }

})();
