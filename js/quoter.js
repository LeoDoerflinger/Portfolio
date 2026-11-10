/* Interactive Project Quoter & Program Configurator */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '543512619874';
  const EMAIL_ADDRESS = 'leodoercba@gmail.com';
  const ARS_RATE = 1200;

  const BASE_PLANS = {
    landing: {
      id: 'landing',
      name: 'Landing Page Profesional',
      defaultBadge: 'LANDING PAGE',
      btnLabel: 'Seleccionar Landing Page',
      priceUsd: 180,
      baseWeeksMin: 1,
      baseWeeksMax: 2
    },
    institucional: {
      id: 'institucional',
      name: 'Web Institucional Multipágina',
      defaultBadge: 'MULTIPÁGINA',
      btnLabel: 'Seleccionar Web Institucional',
      priceUsd: 340,
      baseWeeksMin: 2,
      baseWeeksMax: 3
    },
    ecommerce: {
      id: 'ecommerce',
      name: 'E-Commerce & Panel CRM',
      defaultBadge: 'TIENDA + CRM',
      btnLabel: 'Seleccionar E-Commerce & CRM',
      priceUsd: 560,
      baseWeeksMin: 3,
      baseWeeksMax: 4
    },
    saas: {
      id: 'saas',
      name: 'Sistema Web & Plataforma SaaS',
      defaultBadge: 'SISTEMA / SAAS',
      btnLabel: 'Seleccionar Sistema / SaaS',
      priceUsd: 890,
      baseWeeksMin: 4,
      baseWeeksMax: 6
    }
  };

  let currency = 'USD';

  function formatMoney(usdAmount) {
    if (currency === 'ARS') {
      const ars = Math.round(usdAmount * ARS_RATE);
      return `ARS $${ars.toLocaleString('es-AR')}`;
    }
    return `USD ${Math.round(usdAmount)}`;
  }

  function getQuoteState() {
    const selectedPlanInput = document.querySelector('input[name="base-plan"]:checked');
    const planKey = selectedPlanInput ? selectedPlanInput.value : 'institucional';
    const plan = BASE_PLANS[planKey] || BASE_PLANS.institucional;

    const checkedAddons = Array.from(document.querySelectorAll('input[name="quote-addon"]:checked')).map(input => ({
      id: input.value,
      label: input.getAttribute('data-label') || input.value,
      priceUsd: parseFloat(input.getAttribute('data-price') || '0'),
      weeks: parseFloat(input.getAttribute('data-weeks') || '0')
    }));

    const selectedUrgencyInput = document.querySelector('input[name="quote-urgency"]:checked');
    const urgencyVal = selectedUrgencyInput ? selectedUrgencyInput.value : 'standard';
    const multiplier = selectedUrgencyInput ? parseFloat(selectedUrgencyInput.getAttribute('data-multiplier') || '1') : 1;
    const urgencyLabel = selectedUrgencyInput ? selectedUrgencyInput.getAttribute('data-label') : 'Ritmo Estándar';

    const addonsTotalUsd = checkedAddons.reduce((acc, a) => acc + a.priceUsd, 0);
    const addonsWeeks = checkedAddons.reduce((acc, a) => acc + a.weeks, 0);

    const subtotalUsd = plan.priceUsd + addonsTotalUsd;
    const finalTotalUsd = Math.round(subtotalUsd * multiplier);

    let minW = plan.baseWeeksMin + Math.floor(addonsWeeks);
    let maxW = plan.baseWeeksMax + Math.ceil(addonsWeeks);

    if (urgencyVal === 'priority') {
      minW = Math.max(1, Math.round(minW * 0.7));
      maxW = Math.max(minW + 1, Math.round(maxW * 0.7));
    }

    const clientName = document.getElementById('quote-client-name')?.value.trim() || '';
    const clientContact = document.getElementById('quote-client-contact')?.value.trim() || '';
    const clientNotes = document.getElementById('quote-client-notes')?.value.trim() || '';

    return {
      plan,
      checkedAddons,
      urgencyVal,
      urgencyLabel,
      multiplier,
      subtotalUsd,
      finalTotalUsd,
      timelineText: `${minW} a ${maxW} semanas`,
      clientName,
      clientContact,
      clientNotes
    };
  }

  function syncTopProgramCards(activePlanKey) {
    document.querySelectorAll('[data-program-card]').forEach(card => {
      const key = card.getAttribute('data-program-card');
      const isSelected = key === activePlanKey;
      const planMeta = BASE_PLANS[key];

      card.classList.toggle('is-selected', isSelected);

      const badge = card.querySelector('[data-program-badge]');
      if (badge && planMeta) {
        badge.textContent = isSelected ? 'SELECCIONADO' : planMeta.defaultBadge;
      }

      const btn = card.querySelector('[data-select-plan]');
      if (btn && planMeta) {
        btn.classList.toggle('btn-primary', isSelected);
        btn.classList.toggle('btn-secondary', !isSelected);
        btn.innerHTML = isSelected
          ? '<span>✓ Seleccionado en cotizador</span>'
          : `<span>${planMeta.btnLabel}</span>`;
      }
    });
  }

  function renderQuoteSummary() {
    const state = getQuoteState();
    const listEl = document.getElementById('summary-breakdown-list');
    const totalEl = document.getElementById('summary-total-display');
    const weeksEl = document.getElementById('summary-weeks-display');
    const currBtn = document.getElementById('toggle-currency-btn');

    if (currBtn) {
      currBtn.textContent = `Moneda: ${currency}`;
    }

    syncTopProgramCards(state.plan.id);

    // Update price labels on top cards & quoter radio cards when currency toggles
    document.querySelectorAll('[data-program-price]').forEach(priceEl => {
      const key = priceEl.getAttribute('data-program-price');
      const p = BASE_PLANS[key];
      if (p) {
        priceEl.textContent = formatMoney(p.priceUsd);
      }
    });

    document.querySelectorAll('[data-plan-card]').forEach(card => {
      const key = card.getAttribute('data-plan-card');
      const p = BASE_PLANS[key];
      const priceSpan = card.querySelector('.quoter-opt-price');
      if (p && priceSpan) {
        priceSpan.textContent = formatMoney(p.priceUsd);
      }
    });

    document.querySelectorAll('input[name="quote-addon"]').forEach(input => {
      const usd = parseFloat(input.getAttribute('data-price') || '0');
      const costSpan = input.closest('.addon-check-card')?.querySelector('.addon-cost');
      if (costSpan) {
        costSpan.textContent = `+${formatMoney(usd)}`;
      }
    });

    if (listEl) {
      let html = `
        <div class="summary-line-item">
          <span>Programa: ${state.plan.name}</span>
          <strong>${formatMoney(state.plan.priceUsd)}</strong>
        </div>
      `;

      if (state.checkedAddons.length > 0) {
        state.checkedAddons.forEach(addon => {
          html += `
            <div class="summary-line-item">
              <span>+ ${addon.label}</span>
              <strong>${formatMoney(addon.priceUsd)}</strong>
            </div>
          `;
        });
      } else {
        html += `
          <div class="summary-line-item">
            <span>Módulos adicionales</span>
            <span>Sin adicionales</span>
          </div>
        `;
      }

      if (state.multiplier !== 1) {
        const diffUsd = state.finalTotalUsd - state.subtotalUsd;
        const sign = diffUsd >= 0 ? '+' : '-';
        html += `
          <div class="summary-line-item">
            <span>Modalidad: ${state.urgencyLabel}</span>
            <strong>${sign}${formatMoney(Math.abs(diffUsd))}</strong>
          </div>
        `;
      }

      listEl.innerHTML = html;
    }

    if (totalEl) {
      totalEl.textContent = formatMoney(state.finalTotalUsd);
    }

    if (weeksEl) {
      weeksEl.textContent = state.timelineText;
    }
  }

  function buildPlainTextQuote() {
    const state = getQuoteState();
    const lines = [
      'Hola Leo! Armé esta cotización de proyecto en tu portfolio web:',
      '',
      `• Programa base: ${state.plan.name} (${formatMoney(state.plan.priceUsd)})`
    ];

    if (state.checkedAddons.length > 0) {
      lines.push('• Módulos adicionales:');
      state.checkedAddons.forEach(a => {
        lines.push(`  - ${a.label} (+${formatMoney(a.priceUsd)})`);
      });
    } else {
      lines.push('• Módulos adicionales: Ninguno');
    }

    lines.push(`• Modalidad: ${state.urgencyLabel}`);
    lines.push(`• Inversión estimada: ${formatMoney(state.finalTotalUsd)}`);
    lines.push(`• Tiempo estimado: ${state.timelineText}`);

    if (state.clientName) lines.push(`• Nombre / Empresa: ${state.clientName}`);
    if (state.clientContact) lines.push(`• Contacto: ${state.clientContact}`);
    if (state.clientNotes) lines.push(`• Comentarios: ${state.clientNotes}`);

    return lines.join('\n');
  }

  function selectBasePlan(planKey, shouldScroll = false) {
    const radio = document.querySelector(`input[name="base-plan"][value="${planKey}"]`);
    if (radio) {
      radio.checked = true;
      document.querySelectorAll('[data-plan-card]').forEach(card => {
        card.classList.toggle('selected', card.getAttribute('data-plan-card') === planKey);
      });
      renderQuoteSummary();
    }
    if (shouldScroll) {
      const target = document.getElementById('cotizador');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      if (window.ldApp && window.ldApp.showToast) {
        const p = BASE_PLANS[planKey];
        if (p) window.ldApp.showToast(`Programa seleccionado: ${p.name}`);
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    // 1. Top program card buttons & cards
    document.querySelectorAll('[data-select-plan]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const planKey = btn.getAttribute('data-select-plan');
        selectBasePlan(planKey, true);
      });
    });

    document.querySelectorAll('[data-program-card]').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('button, a')) return;
        const planKey = card.getAttribute('data-program-card');
        selectBasePlan(planKey, false);
      });
    });

    // 2. Base plan radio cards in Step 1
    document.querySelectorAll('input[name="base-plan"]').forEach(radio => {
      radio.addEventListener('change', () => {
        selectBasePlan(radio.value, false);
      });
    });

    // 3. Add-on checkboxes
    document.querySelectorAll('input[name="quote-addon"]').forEach(chk => {
      chk.addEventListener('change', () => {
        const card = chk.closest('.addon-check-card');
        if (card) card.classList.toggle('checked', chk.checked);
        renderQuoteSummary();
      });
    });

    // 4. Urgency radio cards
    document.querySelectorAll('input[name="quote-urgency"]').forEach(radio => {
      radio.addEventListener('change', () => {
        document.querySelectorAll('[data-urgency-card]').forEach(card => {
          card.classList.toggle('selected', card.getAttribute('data-urgency-card') === radio.value);
        });
        renderQuoteSummary();
      });
    });

    // 5. Currency toggle
    const currBtn = document.getElementById('toggle-currency-btn');
    if (currBtn) {
      currBtn.addEventListener('click', () => {
        currency = currency === 'USD' ? 'ARS' : 'USD';
        renderQuoteSummary();
        if (window.ldApp && window.ldApp.showToast) {
          window.ldApp.showToast(`Moneda cambiada a ${currency}`);
        }
      });
    }

    // 6. Action buttons (WhatsApp, Mail, Copy)
    const waBtn = document.getElementById('btn-send-quote-wa');
    if (waBtn) {
      waBtn.addEventListener('click', () => {
        const text = encodeURIComponent(buildPlainTextQuote());
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
      });
    }

    const mailBtn = document.getElementById('btn-send-quote-mail');
    if (mailBtn) {
      mailBtn.addEventListener('click', () => {
        const state = getQuoteState();
        const subject = encodeURIComponent(`[Cotización Web] ${state.plan.name}${state.clientName ? ' · ' + state.clientName : ''}`);
        const body = encodeURIComponent(buildPlainTextQuote());
        window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
      });
    }

    const copyBtn = document.getElementById('btn-copy-quote');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const text = buildPlainTextQuote();
        try {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(text);
          }
          if (window.ldApp && window.ldApp.showToast) {
            window.ldApp.showToast('✓ Desglose de cotización copiado al portapapeles');
          }
        } catch (err) {
          console.warn('No se pudo copiar:', err);
        }
      });
    }

    renderQuoteSummary();
  });
})();
