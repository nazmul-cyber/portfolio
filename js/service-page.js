let activeService = null;

const VERIFIED_BADGE_SVG = `<span class="verified-badge-wrap" title="যাচাইকৃত প্রোফাইল" aria-label="Verified"><img src="assets/verified-badge.png" alt="" class="verified-badge" width="22" height="22" loading="lazy" decoding="async" /></span>`;

function serviceAboutPreview(service) {
  return typeof getServiceAboutText === 'function'
    ? getServiceAboutText(service, 'description')
    : service.description;
}

function serviceAboutDetail(service) {
  return typeof getServiceAboutText === 'function'
    ? getServiceAboutText(service, 'gigDetail')
    : service.gigDetail;
}

function refreshServicePageI18n() {
  if (!activeService) return;
  const s = activeService;
  const preview = document.getElementById('serviceAboutPreview');
  const extra = document.getElementById('serviceAboutExtra');
  const seeBtn = document.getElementById('seeMoreBtn');
  const delivery = document.getElementById('serviceDeliveryLine');
  const providerMeta = document.querySelector('.service-provider-meta');

  const gigLine = document.getElementById('serviceGigLine');
  if (gigLine) gigLine.textContent = typeof getServiceShortText === 'function' ? getServiceShortText(s) : s.short;
  if (preview) preview.textContent = serviceAboutPreview(s);
  if (extra) {
    const p = extra.querySelector('.service-lead');
    if (p) p.textContent = serviceAboutDetail(s);
  }
  if (seeBtn && extra) {
    const open = !extra.hidden;
    seeBtn.textContent = open
      ? (typeof t === 'function' ? t('service.see.less') : 'See less')
      : (typeof t === 'function' ? t('service.see.more') : 'See more');
  }
  if (delivery) {
    delivery.innerHTML = `<strong>${typeof t === 'function' ? t('service.delivery.label') : 'Delivery'}:</strong> ${s.delivery} · <strong>${typeof t === 'function' ? t('service.revisions.label') : 'Revisions'}:</strong> ${s.revisions}`;
  }
  if (providerMeta) {
    providerMeta.textContent = typeof t === 'function' ? t('service.provider.meta') : `${EXPERIENCE_YEARS}+ years · Bangladesh's trusted expert`;
  }
  document.querySelectorAll('.trust-stat-label').forEach((el, i) => {
    const keys = ['service.trust.customers', 'service.trust.revenue', 'service.trust.experience'];
    if (typeof t === 'function' && keys[i]) el.textContent = t(keys[i]);
  });
}

window.refreshServicePageI18n = refreshServicePageI18n;

document.addEventListener('DOMContentLoaded', () => {
  renderNav('services');
  renderFooter();

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const service = getServiceBySlug(slug);

  if (!service) {
    document.getElementById('serviceContent').innerHTML = `
      <div class="container page-pad">
        <h1>Service not found</h1>
        <p><a href="services.html">← Back to all services</a></p>
      </div>
    `;
    return;
  }

  activeService = service;
  document.title = `${service.name} — MD Nazmul Hasan`;

  const related = PORTFOLIO_SERVICES.filter(s => s.slug !== service.slug).slice(0, 4);
  const heroImg = serviceImageSources(service.image);
  const serviceUrl = `${window.location.origin}/service.html?slug=${encodeURIComponent(service.slug)}`;
  const waOrderText = `Hi Nazmul, I want to order:\n\n• ${service.name} — ${formatPrice(service.price)}\n  Link: ${serviceUrl}\n\n30% advance before work, 70% after completion.`;
  const waOrderHref = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(waOrderText)}`;

  const content = document.getElementById('serviceContent');
  content.innerHTML = `
    <div class="service-page service-page--product">
      <div class="container">
        <nav class="breadcrumb"><a href="services.html">Services</a> <span>/</span> <span>${service.name}</span></nav>
        <div class="service-product-grid">
          <div class="service-product-gallery reveal">
            <div class="service-hero-image">
              <picture>
                <source srcset="${heroImg.webp}" type="image/webp" />
                <img src="${heroImg.fallback}" alt="${service.name}" loading="eager" width="800" height="450" onerror="this.src='assets/profile-professional.jpg'" />
              </picture>
              ${renderServiceBadge(service.slug)}
            </div>
            <div class="service-provider-card">
              <div class="service-provider-photo-wrap">
                <img src="${PROVIDER_PHOTO}" alt="MD Nazmul Hasan" class="service-provider-photo" width="84" height="84" loading="lazy" onerror="this.src='assets/source/avatar-service.jpg?v=1'" />
              </div>
              <div class="service-provider-info">
                <div class="service-provider-name-row">
                  <strong>MD Nazmul Hasan</strong>
                  ${VERIFIED_BADGE_SVG}
                </div>
                <span class="service-provider-kuet hero__badge" data-i18n="badge.kuet">KUET-Energy Science and Engineering</span>
                <span class="service-provider-meta">${typeof t === 'function' ? t('service.provider.meta') : `${EXPERIENCE_YEARS}+ years · Bangladesh's trusted expert`}</span>
              </div>
            </div>
          </div>
          <div class="service-product-info reveal">
            <span class="service-page-tag">${service.tag}</span>
            <h1>${service.name}</h1>
            <p class="service-gig-line" id="serviceGigLine">${typeof getServiceShortText === 'function' ? getServiceShortText(service) : service.short}</p>
            ${renderServicePricingBlock(service)}
            <div class="service-buy-card service-buy-card--inline">
              <p class="service-buy-note" data-i18n="service.buy.note">${typeof t === 'function' ? t('service.buy.note') : 'Fixed starting price in ৳. Final quote depends on scope.'}</p>
              <p class="service-payment-policy" data-i18n="service.payment.note">${typeof t === 'function' ? t('service.payment.note') : '30% advance (৳) before work · 70% after completion. Final quote via WhatsApp.'}</p>
              <button type="button" class="btn btn-cart btn-block" id="addToCartBtn" data-i18n="cart.add">${typeof t === 'function' ? t('cart.add') : 'Add to Cart'}</button>
              <button type="button" class="btn btn-primary btn-block" id="proceedCheckoutBtn" data-i18n="service.checkout">${typeof t === 'function' ? t('service.checkout') : 'Proceed to Checkout'}</button>
              <a href="${waOrderHref}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block" data-i18n="service.whatsapp">${typeof t === 'function' ? t('service.whatsapp') : 'Order via WhatsApp'}</a>
            </div>
          </div>
        </div>

        <div class="service-details-grid reveal">
          <div class="service-main service-main--compact">
            <div class="service-gig-block service-gig-block--about">
              <h3 class="service-about-heading" data-i18n="service.about.title">${typeof t === 'function' ? t('service.about.title') : 'About this service'}</h3>
              <div class="service-about-collapsible" id="serviceAboutBlock">
                <p class="service-lead service-lead--preview" id="serviceAboutPreview">${serviceAboutPreview(service)}</p>
                <div class="service-lead-extra" id="serviceAboutExtra" hidden>
                  <p class="service-lead">${serviceAboutDetail(service)}</p>
                </div>
                <button type="button" class="service-see-more" id="seeMoreBtn" aria-expanded="false" data-i18n="service.see.more">${typeof t === 'function' ? t('service.see.more') : 'See more'}</button>
              </div>
            </div>
            <h3 class="service-includes-heading" data-i18n="service.includes">${typeof t === 'function' ? t('service.includes') : "What's included"}</h3>
            <ul class="service-includes service-includes--compact">
              ${service.includes.map(i => `<li>${i}</li>`).join('')}
            </ul>
            <p class="service-delivery service-delivery--compact" id="serviceDeliveryLine"><strong>${typeof t === 'function' ? t('service.delivery.label') : 'Delivery'}:</strong> ${service.delivery} · <strong>${typeof t === 'function' ? t('service.revisions.label') : 'Revisions'}:</strong> ${service.revisions}</p>
          </div>
          <aside class="service-trust-panel">
            <div class="trust-stat"><strong>${HAPPY_CUSTOMERS.toLocaleString()}+</strong><span class="trust-stat-label">${typeof t === 'function' ? t('service.trust.customers') : 'Happy Clients'}</span></div>
            <div class="trust-stat"><strong>$${TOTAL_REVENUE.toLocaleString()}+</strong><span class="trust-stat-label">${typeof t === 'function' ? t('service.trust.revenue') : 'Revenue'}</span></div>
            <div class="trust-stat"><strong>${EXPERIENCE_YEARS}+ yrs</strong><span class="trust-stat-label">${typeof t === 'function' ? t('service.trust.experience') : 'Experience'}</span></div>
          </aside>
        </div>

        <section class="service-reviews reveal" id="reviewsSection"></section>

        <section class="service-related reveal">
          <h3 data-i18n="service.related">${typeof t === 'function' ? t('service.related') : 'Related Services'}</h3>
          <div class="hire-grid hire-grid--compact" id="relatedServices"></div>
        </section>
      </div>
    </div>
  `;

  renderReviews(document.getElementById('reviewsSection'), service);
  const relatedEl = document.getElementById('relatedServices');
  relatedEl.dataset.slugs = related.map(s => s.slug).join(',');
  renderServiceCards(relatedEl, {
    slugs: related.map(s => s.slug),
    linkPrefix: 'service.html?slug='
  });

  document.getElementById('addToCartBtn').addEventListener('click', function () {
    addServiceToCart(service.slug, this);
  });

  document.getElementById('proceedCheckoutBtn').addEventListener('click', function () {
    Cart.add(service.slug);
    window.location.href = 'order.html';
  });

  const seeMoreBtn = document.getElementById('seeMoreBtn');
  const aboutExtra = document.getElementById('serviceAboutExtra');
  if (seeMoreBtn && aboutExtra) {
    seeMoreBtn.addEventListener('click', () => {
      const open = aboutExtra.hidden;
      aboutExtra.hidden = !open;
      seeMoreBtn.textContent = open
        ? (typeof t === 'function' ? t('service.see.less') : 'See less')
        : (typeof t === 'function' ? t('service.see.more') : 'See more');
      seeMoreBtn.setAttribute('aria-expanded', String(open));
      seeMoreBtn.classList.toggle('is-open', open);
      document.getElementById('serviceAboutBlock')?.classList.toggle('is-expanded', open);
    });
  }

  if (typeof applyI18n === 'function') applyI18n();
  initReveal();
});