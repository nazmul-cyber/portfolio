const WHATSAPP = '8801969827902';
const SITE = {
  name: 'MD Nazmul Hasan',
  tagline: 'Entrepreneur & Web Developer'
};
const PROVIDER_PHOTO = 'assets/source/avatar-service.jpg?v=1';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

function renderNav(active) {
  const el = document.getElementById('site-nav');
  if (!el) return;

  const links = [
    { href: 'index.html', labelKey: 'nav.home', id: 'home' },
    { href: 'services.html', labelKey: 'nav.services', id: 'services' },
    { href: 'projects.html', labelKey: 'nav.projects', id: 'projects' },
    { href: 'why-hire.html', labelKey: 'nav.why', id: 'why' },
    { href: 'faq.html', labelKey: 'nav.faq', id: 'faq' },
    { href: 'index.html#contact', labelKey: 'nav.contact', id: 'contact', cta: true }
  ];
  const lang = typeof getLang === 'function' ? getLang() : 'en';

  el.innerHTML = `
    <a href="index.html" class="nav-logo" aria-label="${SITE.name}">
      <img src="assets/logo-mark.png?v=2" alt="NAZMUL" class="nav-logo-mark" width="40" height="40" />
    </a>
    <div class="lang-toggle" aria-label="Language">
      <button type="button" class="lang-toggle-btn${lang === 'en' ? ' active' : ''}" data-lang="en">EN</button>
      <button type="button" class="lang-toggle-btn${lang === 'bn' ? ' active' : ''}" data-lang="bn">বাং</button>
    </div>
    <a href="order.html" class="nav-cart" aria-label="View cart">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M6 6h15l-1.5 9H7.5L6 6z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
      <span class="nav-cart-badge" id="cartBadge" style="display:none">0</span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    <ul class="nav-links" id="navLinks">
      ${links.map(l => `<li><a href="${l.href}" class="${l.cta ? 'nav-cta' : ''} ${active === l.id ? 'active' : ''}" data-i18n="${l.labelKey}">${typeof t === 'function' ? t(l.labelKey) : l.labelKey}</a></li>`).join('')}
    </ul>
  `;

  el.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof setLang === 'function') setLang(btn.dataset.lang);
    });
  });

  initNav();
  if (typeof Cart !== 'undefined') Cart.updateBadge();
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-brand">
        <strong>${SITE.name}</strong>
        <p data-i18n="footer.tag">${typeof t === 'function' ? t('footer.tag') : 'Entrepreneur & Web Developer · Bangladesh'}</p>
      </div>
      <div class="footer-links">
        <a href="services.html">Services</a>
        <a href="order.html">Order</a>
        <a href="faq.html">FAQ</a>
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="refund.html">Refund</a>
      </div>
      <p class="footer-copy">© 2026 ${SITE.name}</p>
    </div>
  `;
}

function renderWhatsAppFloat() {
  if (document.querySelector('.whatsapp-float')) return;
  const a = document.createElement('a');
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hi Nazmul, I want to discuss a project')}`;
  a.target = '_blank';
  a.rel = 'noopener';
  a.className = 'whatsapp-float';
  a.setAttribute('aria-label', 'Chat on WhatsApp');
  a.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  document.body.appendChild(a);
}

function initNav() {
  const nav = document.getElementById('site-nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!nav || !navToggle || !navLinks) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const open = navLinks.classList.contains('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = open ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = open ? '0' : '1';
    spans[2].style.transform = open ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  reveals.forEach(el => observer.observe(el));
}

function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) other.open = false;
      });
    });
  });
}

function renderStars(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n);
}

function renderDecimalStars(rating) {
  const pct = Math.min(100, Math.max(0, (rating / 5) * 100));
  return `
    <span class="product-stars" aria-label="${rating} out of 5 stars">
      <span class="product-stars-base">★★★★★</span>
      <span class="product-stars-fill" style="width:${pct}%">★★★★★</span>
    </span>
  `;
}

function renderServicePricingBlock(service) {
  const { sale, original, discount } = getServicePricing(service.price);
  const reviews = getReviewCount(service.sold);
  return `
    <div class="product-pricing-block">
      <div class="product-rating-row">
        <div class="product-rating-left">
          ${renderDecimalStars(service.rating)}
          <span class="product-rating-text"><strong>${service.rating}</strong> (${reviews} reviews)</span>
        </div>
        <span class="product-sold-count">↑ ${formatSold(service.sold)}</span>
      </div>
      <div class="product-price-row">
        <span class="product-price-old">${formatPrice(original)}</span>
        <span class="product-price-sale">${formatPrice(sale)}</span>
        <span class="product-discount-badge">-${discount}%</span>
      </div>
    </div>
  `;
}

function renderReviews(container, service) {
  if (!container) return;
  const rating = service?.rating || 4.8;
  const id = 'reviewCarousel_' + (service?.slug || 'main');

  container.innerHTML = `
    <div class="reviews-header">
      <div>
        <h3>Client Reviews</h3>
        <p class="reviews-social">
          <span class="review-stars">${renderStars(Math.round(rating))}</span>
          <span class="meta-pill">${rating}</span>
          <span class="meta-pill meta-pill--sold">${HAPPY_CUSTOMERS.toLocaleString()}+ happy customers</span>
          <span class="meta-pill">${EXPERIENCE_YEARS}+ years experience</span>
        </p>
      </div>
      <div class="review-nav">
        <button type="button" class="review-nav-btn" data-carousel-prev="${id}" aria-label="Previous review">‹</button>
        <button type="button" class="review-nav-btn" data-carousel-next="${id}" aria-label="Next review">›</button>
      </div>
    </div>
    <div class="review-carousel" id="${id}">
      <div class="review-carousel-track">
        ${PORTFOLIO_REVIEWS.map(r => `
          <article class="review-card review-card--slide">
            <div class="review-top">
              <div class="review-avatar">${r.name.charAt(0)}</div>
              <div>
                <strong>${r.name}</strong>
                <span class="review-loc">${r.location}</span>
              </div>
              <span class="review-stars" aria-label="${r.stars} stars">${renderStars(r.stars)}</span>
            </div>
            <p class="review-text">${r.text}</p>
            ${r.verified ? '<span class="review-verified">✓ Verified client</span>' : ''}
          </article>
        `).join('')}
      </div>
    </div>
    <div class="review-dots" data-carousel-dots="${id}"></div>
  `;

  initReviewCarousel(id);
}

function initReviewCarousel(id) {
  const root = document.getElementById(id);
  if (!root) return;
  const track = root.querySelector('.review-carousel-track');
  const slides = track.querySelectorAll('.review-card--slide');
  const dotsEl = document.querySelector(`[data-carousel-dots="${id}"]`);
  let index = 0;
  let paused = false;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'review-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Review ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(dot);
  });

  function goTo(next) {
    index = ((next % slides.length) + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dotsEl.querySelectorAll('.review-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => { if (!paused) goTo(index + 1); }, 6000);
  }

  document.querySelector(`[data-carousel-prev="${id}"]`)?.addEventListener('click', () => goTo(index - 1));
  document.querySelector(`[data-carousel-next="${id}"]`)?.addEventListener('click', () => goTo(index + 1));
  root.addEventListener('mouseenter', () => { paused = true; });
  root.addEventListener('mouseleave', () => { paused = false; });
  startAuto();
}

function serviceCardHtml(s, linkPrefix = 'service.html?slug=') {
  return `
    <article class="hire-card reveal">
      <a href="${linkPrefix}${s.slug}" class="hire-card-link" draggable="false">
        <div class="hire-card-thumb">
          <img src="${s.image}" alt="${s.name}" loading="lazy" onerror="this.src='assets/profile-professional.jpg'" />
          <span class="service-tag-pill">${s.tag}</span>
          ${renderServiceBadge(s.slug)}
        </div>
        <h3>${s.name}</h3>
        <div class="hire-card-meta">
          <span class="review-stars">${renderStars(Math.round(s.rating))}</span>
          <span class="meta-pill">${s.rating}</span>
          <span class="meta-pill meta-pill--sold">${formatSold(s.sold)}</span>
        </div>
        <p class="hire-card-provider">By <strong>MD Nazmul Hasan</strong></p>
        <p class="hire-card-desc">${s.short}</p>
      </a>
      <div class="hire-card-footer">
        <span class="hire-price">${typeof t === 'function' ? t('price.from') : 'from'} <strong>${formatPrice(s.price)}</strong></span>
        ${typeof renderServiceGithubLink === 'function' && getServiceGithubRepo(s.slug) ? `<p class="hire-card-github">GitHub: ${renderServiceGithubLink(s.slug)}</p>` : ''}
        <div class="hire-card-actions">
          <a href="${linkPrefix}${s.slug}" class="btn btn-about btn-sm">About this service</a>
          ${typeof renderServiceGithubButton === 'function' ? renderServiceGithubButton(s.slug, 'btn btn-github btn-sm') : ''}
          <button type="button" class="btn btn-cart btn-sm" data-add-cart="${s.slug}">Add to Cart</button>
        </div>
      </div>
    </article>
  `;
}

function renderServiceCards(container, options = {}) {
  if (!container) return;
  const { limit, linkPrefix = 'service.html?slug=', slugs } = options;
  let list = PORTFOLIO_SERVICES;
  if (slugs && slugs.length) {
    list = slugs.map(s => getServiceBySlug(s)).filter(Boolean);
  } else if (limit) {
    list = PORTFOLIO_SERVICES.slice(0, limit);
  }

  container.innerHTML = list.map(s => serviceCardHtml(s, linkPrefix)).join('');

  initReveal();
  initHireCardLinks(container);
}

function renderServiceSections(container, options = {}) {
  if (!container) return;
  const { linkPrefix = 'service.html?slug=' } = options;
  const order = typeof SERVICE_SECTION_ORDER !== 'undefined'
    ? SERVICE_SECTION_ORDER
    : [...new Set(PORTFOLIO_SERVICES.map(s => s.tag))];
  const grouped = {};
  PORTFOLIO_SERVICES.forEach(s => {
    if (!grouped[s.tag]) grouped[s.tag] = [];
    grouped[s.tag].push(s);
  });

  container.innerHTML = order.filter(tag => grouped[tag]?.length).map(tag => `
    <section class="service-section reveal" id="section-${tag.toLowerCase().replace(/[^a-z0-9]+/g, '-')}">
      <div class="service-section-head">
        <span class="service-section-tag">${tag}</span>
        <h2>${(typeof SERVICE_SECTION_LABELS !== 'undefined' && SERVICE_SECTION_LABELS[tag]) || tag}</h2>
        <span class="service-section-count">${grouped[tag].length} service${grouped[tag].length > 1 ? 's' : ''}</span>
      </div>
      <div class="hire-grid hire-grid--page">
        ${grouped[tag].map(s => serviceCardHtml(s, linkPrefix)).join('')}
      </div>
    </section>
  `).join('');

  initReveal();
  initHireCardLinks(container);
}

function initHireCardLinks(container) {
  if (!container) return;
  container.querySelectorAll('.hire-card-link, .hire-card-actions a, .hire-card-actions button').forEach(el => {
    el.addEventListener('click', (e) => e.stopPropagation());
    el.addEventListener('touchend', (e) => e.stopPropagation(), { passive: true });
  });
}

function renderServiceRepos(container) {
  if (!container || typeof FEATURED_SERVICE_LINKS === 'undefined') return;
  const items = FEATURED_SERVICE_LINKS.map(item => {
    const service = getServiceBySlug(item.slug);
    return `
    <li>
      <a href="${getFeaturedServiceUrl(item)}">${item.label}</a>
      <span class="service-repos-repo">${service ? `from ${formatPrice(service.price)}` : ''}</span>
    </li>`;
  }).join('');

  container.innerHTML = `
    <section class="service-repos reveal">
      <h2>
        <svg class="service-repos-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
        Services Repos
      </h2>
      <p class="service-repos-desc">All 17 portfolio services — click any service to view details and order.</p>
      <ul class="service-repos-list">${items}</ul>
    </section>
  `;
  initReveal();
}

function initCartButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-add-cart]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    const slug = btn.dataset.addCart;
    if (typeof Cart === 'undefined' || !slug) return;
    if (typeof addServiceToCart === 'function') {
      addServiceToCart(slug, btn);
    } else if (Cart.add(slug)) {
      btn.textContent = 'Added ✓';
      btn.classList.add('added');
      showCartToast('Added to cart');
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.classList.remove('added');
      }, 1800);
    } else {
      showCartToast('Could not add — try again', true);
    }
  });
}

function showCartToast(message, isError) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.className = 'cart-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.toggle('cart-toast--error', !!isError);
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('visible'), 2200);
}

document.addEventListener('DOMContentLoaded', () => {
  renderWhatsAppFloat();
  initReveal();
  initFaq();
  initCartButtons();
  if (typeof Cart !== 'undefined') Cart.updateBadge();
});