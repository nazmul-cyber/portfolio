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

  document.title = `${service.name} — MD Nazmul Hasan`;

  const related = PORTFOLIO_SERVICES.filter(s => s.slug !== service.slug).slice(0, 4);

  const content = document.getElementById('serviceContent');
  content.innerHTML = `
    <div class="service-page service-page--product">
      <div class="container">
        <nav class="breadcrumb"><a href="services.html">Services</a> <span>/</span> <span>${service.name}</span></nav>
        <div class="service-product-grid">
          <div class="service-product-gallery reveal">
            <div class="service-hero-image">
              <img src="${service.image}" alt="${service.name}" loading="eager" onerror="this.src='assets/profile-professional.jpg'" />
              ${renderServiceBadge(service.slug)}
            </div>
            <div class="service-provider-card">
              <div class="service-provider-photo-wrap">
                <img src="${PROVIDER_PHOTO}" alt="MD Nazmul Hasan" class="service-provider-photo" width="84" height="84" loading="lazy" onerror="this.src='assets/source/avatar-service.jpg?v=1'" />
              </div>
              <div>
                <strong>MD Nazmul Hasan</strong>
                <span data-i18n="service.provider">${typeof t === 'function' ? t('service.provider') : 'Entrepreneur & Web Developer · KUET Student'}</span>
                <span class="service-provider-meta">${EXPERIENCE_YEARS}+ years · Bangladesh's trusted expert</span>
              </div>
            </div>
          </div>
          <div class="service-product-info reveal">
            <span class="service-page-tag">${service.tag}</span>
            <h1>${service.name}</h1>
            ${getServiceGithubRepo(service.slug) ? `<p class="service-github-meta">GitHub: ${renderServiceGithubLink(service.slug)}</p>` : ''}
            <p class="service-gig-line">${service.short}</p>
            ${renderServicePricingBlock(service)}
            <div class="service-buy-card service-buy-card--inline">
              <p class="service-buy-note" data-i18n="service.buy.note">${typeof t === 'function' ? t('service.buy.note') : 'Fixed starting price in ৳. Final quote depends on scope.'}</p>
              <p class="service-payment-policy" data-i18n="service.payment.note">${typeof t === 'function' ? t('service.payment.note') : '30% advance (৳) before work · 70% after completion. Final quote via WhatsApp.'}</p>
              <button type="button" class="btn btn-cart btn-block" id="addToCartBtn">Add to Cart</button>
              <button type="button" class="btn btn-primary btn-block" id="proceedCheckoutBtn">Proceed to Checkout</button>
              <a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hi, I want to order: ${service.name}`)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-block">Order via WhatsApp</a>
              ${renderServiceGithubButton(service.slug, 'btn btn-github btn-block')}
            </div>
          </div>
        </div>

        <div class="service-details-grid reveal">
          <div class="service-main service-main--compact">
            <div class="service-gig-block">
              <h3>About this service</h3>
              <div class="service-about-collapsible" id="serviceAboutBlock">
                <p class="service-lead service-lead--preview">${service.description}</p>
                <div class="service-lead-extra" id="serviceAboutExtra" hidden>
                  <p class="service-lead">${service.gigDetail}</p>
                </div>
                <button type="button" class="service-see-more" id="seeMoreBtn" aria-expanded="false">See more</button>
              </div>
            </div>
            <h3>What's included</h3>
            <ul class="service-includes service-includes--compact">
              ${service.includes.map(i => `<li>${i}</li>`).join('')}
            </ul>
            <p class="service-delivery service-delivery--compact"><strong>Delivery:</strong> ${service.delivery} · <strong>Revisions:</strong> ${service.revisions}</p>
          </div>
          <aside class="service-trust-panel">
            <div class="trust-stat"><strong>${HAPPY_CUSTOMERS.toLocaleString()}+</strong><span>Happy Customers</span></div>
            <div class="trust-stat"><strong>${EXPERIENCE_YEARS}+ yrs</strong><span>Experience</span></div>
            <div class="trust-stat"><strong>${formatSold(service.sold)}</strong><span>This service</span></div>
          </aside>
        </div>

        <section class="service-reviews reveal" id="reviewsSection"></section>

        <section class="service-related reveal">
          <h3>Related Services</h3>
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
      seeMoreBtn.textContent = open ? 'See less' : 'See more';
      seeMoreBtn.setAttribute('aria-expanded', String(open));
      seeMoreBtn.classList.toggle('is-open', open);
      document.getElementById('serviceAboutBlock')?.classList.toggle('is-expanded', open);
    });
  }

  initReveal();
});