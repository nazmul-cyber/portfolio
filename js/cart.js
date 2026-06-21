const CART_KEY = 'nazmul_portfolio_cart';

function addServiceToCart(slug, btn) {
  if (!slug || typeof getServiceBySlug !== 'function') return false;
  const service = getServiceBySlug(slug);
  if (!service) return false;
  const items = Cart.get();
  const existing = items.find(i => i.slug === slug);
  if (existing) existing.qty += 1;
  else items.push({ slug, name: service.name, price: service.price, qty: 1 });
  Cart.save(items);
  if (btn) {
    btn.textContent = 'Added ✓';
    btn.classList.add('added');
    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.classList.remove('added');
    }, 1800);
  }
  if (typeof showCartToast === 'function') showCartToast('Added to cart');
  return true;
}

window.addServiceToCart = addServiceToCart;

const Cart = {
  get() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  },

  save(items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    Cart.updateBadge();
  },

  add(slug) {
    if (!slug || typeof getServiceBySlug !== 'function') return false;
    const service = getServiceBySlug(slug);
    if (!service) return false;
    const items = Cart.get();
    const existing = items.find(i => i.slug === slug);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ slug, name: service.name, price: service.price, qty: 1 });
    }
    Cart.save(items);
    return true;
  },

  remove(slug) {
    Cart.save(Cart.get().filter(i => i.slug !== slug));
  },

  setQty(slug, qty) {
    const items = Cart.get();
    const item = items.find(i => i.slug === slug);
    if (!item) return;
    if (qty <= 0) {
      Cart.remove(slug);
    } else {
      item.qty = qty;
      Cart.save(items);
    }
  },

  clear() {
    localStorage.removeItem(CART_KEY);
    Cart.updateBadge();
  },

  total() {
    return Cart.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },

  updateBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const count = Cart.count();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  },

  whatsappMessage() {
    const items = Cart.get();
    if (!items.length) return '';
    const lines = items.map(i => `• ${i.name} (x${i.qty}) — ${formatPrice(i.price * i.qty)}`);
    const total = Cart.total();
    return `Hi Nazmul, I want to order:\n\n${lines.join('\n')}\n\nTotal: ${formatPrice(total)}\n\n30% advance before work, 70% after completion.\nPlease confirm availability and payment details.`;
  }
};