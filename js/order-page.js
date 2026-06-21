document.addEventListener('DOMContentLoaded', () => {
  renderNav('services');
  renderFooter();
  renderOrder();
});

function renderOrder() {
  const container = document.getElementById('orderContent');
  const items = Cart.get();

  if (!items.length) {
    container.innerHTML = `
      <div class="order-empty visible">
        <h2>Your cart is empty</h2>
        <p>Browse services and add what you need.</p>
        <a href="services.html" class="btn btn-primary">Browse Services</a>
      </div>
    `;
    return;
  }

  const total = Cart.total();
  container.innerHTML = `
    <div class="order-layout visible">
      <div class="order-items">
        <h2>Your Order</h2>
        ${items.map(item => {
          const svc = typeof getServiceBySlug === 'function' ? getServiceBySlug(item.slug) : null;
          const img = svc ? svc.image : 'assets/profile-professional.jpg';
          return `
          <div class="order-item" data-slug="${item.slug}">
            <img src="${img}" alt="" class="order-item-thumb" loading="lazy" onerror="this.src='assets/profile.jpg'" />
            <div class="order-item-info">
              <strong>${item.name}</strong>
              <span>${formatPrice(item.price)} each</span>
            </div>
            <div class="order-item-qty">
              <button type="button" class="qty-btn" data-action="minus" data-slug="${item.slug}">−</button>
              <span>${item.qty}</span>
              <button type="button" class="qty-btn" data-action="plus" data-slug="${item.slug}">+</button>
            </div>
            <span class="order-item-total">${formatPrice(item.price * item.qty)}</span>
            <button type="button" class="order-remove" data-slug="${item.slug}" aria-label="Remove">×</button>
          </div>`;
        }).join('')}
      </div>
      <aside class="order-summary">
        <h3>Order Summary</h3>
        <div class="order-summary-row"><span>Subtotal</span><span>${formatPrice(total)}</span></div>
        <div class="order-summary-row order-summary-total"><span>Total</span><strong>${formatPrice(total)}</strong></div>
        <p class="order-note">Prices in ৳ (BDT). 30% advance before work, 70% after completion. Final invoice may vary by scope.</p>
        <a href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(Cart.whatsappMessage())}" target="_blank" rel="noopener" class="btn btn-primary btn-block">Proceed to Checkout</a>
        <button type="button" class="btn btn-outline btn-block" id="clearCartBtn">Clear Cart</button>
        <a href="services.html" class="btn btn-ghost btn-block">Continue Shopping</a>
      </aside>
    </div>
  `;

  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const slug = btn.dataset.slug;
      const item = Cart.get().find(i => i.slug === slug);
      if (!item) return;
      const qty = btn.dataset.action === 'plus' ? item.qty + 1 : item.qty - 1;
      Cart.setQty(slug, qty);
      renderOrder();
    });
  });

  container.querySelectorAll('.order-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      Cart.remove(btn.dataset.slug);
      renderOrder();
    });
  });

  document.getElementById('clearCartBtn').addEventListener('click', () => {
    Cart.clear();
    renderOrder();
  });

  if (typeof initReveal === 'function') initReveal();
}