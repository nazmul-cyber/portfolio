const I18N_LANG_KEY = 'nazmul_portfolio_lang';

/** These keys stay English even when বাং is selected (hero, CTAs, footer brand, etc.) */
const I18N_ALWAYS_EN = new Set([
  'badge.bd', 'badge.expert', 'badge.kuet', 'badge.owner', 'badge.revenue',
  'hero.eyebrow', 'hero.headline', 'hero.desc', 'hero.resume.link', 'hero.photo.badge', 'hero.stat.revenue',
  'hero.cta.services', 'hero.cta.projects', 'hero.cta.whatsapp',
  'about.tag',
  'footer.tag',
  'card.by',
  'contact.phone', 'contact.whatsapp', 'contact.email',
  'contact.linkedin', 'contact.github', 'contact.resume', 'contact.resume.sub',
  'service.provider.meta',
]);

const I18N = {
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.why': 'Why Me',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.sub': 'Web Developer · Entrepreneur',
    'footer.tag': 'Entrepreneur & Web Developer · Bangladesh',
    'badge.bd': 'Bangladesh',
    'badge.owner': 'Multi-Business Owner',
    'badge.revenue': 'Revenue $16000+',
    'badge.expert': 'Web Developer',
    'badge.kuet': 'KUET · Energy Science & Engineering',
    'hero.eyebrow': 'Available for projects · Bangladesh',
    'hero.headline': 'Entrepreneur & Web Developer',
    'hero.photo.badge': 'KUET · Bangladesh',
    'hero.stat.revenue': 'Revenue',
    'hero.desc': 'I build websites, run e-commerce stores, and deliver digital services for clients in Bangladesh and worldwide. Owner of <strong>Bubu & Dudu BD</strong> and <strong>Zuomio LLC</strong>.',
    'hero.cta.services': 'Order a Service',
    'hero.cta.projects': 'Live Projects',
    'hero.cta.whatsapp': 'WhatsApp',
    'hero.resume.link': 'resume',
    'about.tag': 'About Me',
    'about.title': 'Building businesses & websites',
    'about.p1': 'I\'m <strong>MD Nazmul Hasan</strong> — an <strong>entrepreneur</strong>, <strong>web developer</strong>, and <strong>KUET student</strong> (Energy Science and Engineering) from Bangladesh. I <strong>own</strong> <a href="https://bubu-dudu.store/" target="_blank" rel="noopener" class="text-link">Bubu & Dudu BD</a> and <a href="https://zuomio.com" target="_blank" rel="noopener" class="text-link">Zuomio LLC</a>. I built <strong>theme websites</strong> for <a href="https://mediacube.store" target="_blank" rel="noopener" class="text-link">MediaCube</a>, <a href="https://lumiere-beauty-five.vercel.app" target="_blank" rel="noopener" class="text-link">Lumiere Beauty</a>, and <a href="https://arafatllc.shop" target="_blank" rel="noopener" class="text-link">Arafat LLC</a> — I work on them daily. I also build <strong>tailored custom websites</strong> from scratch.',
    'about.p2': 'I also build <strong>custom software</strong>, run <strong>Google Ads & Meta ad campaigns</strong>, create <strong>content</strong>, and automate workflows with <strong>AI</strong>. Total income: <strong>Revenue $16000+</strong> from stores and client work. As one of Bangladesh\'s most experienced hands-on developers, I deliver production-ready work — not just demos.',
    'stat.customers': 'Happy Customers',
    'stat.years': 'Years Experience',
    'stat.stores': 'Live Stores',
    'stat.services': 'Services Offered',
    'skills.tag': 'Beyond Services',
    'skills.title': 'Skills & personal projects',
    'skills.desc': 'Things I build for myself — not listed as hireable services.',
    'skills.pv.title': 'PV Panel Simulation',
    'skills.pv.desc': 'Windows desktop app I built for KUET — PyQt6 GUI, OOP simulator, weather CSV import, and live power/energy plots. Packaged as a professional .exe installer.',
    'skills.pv.badge': 'v1.0.0 · Personal Project',
    'skills.pv.github': 'GitHub',
    'skills.pv.download': 'Download EXE',
    'skills.stores.title': '200+ Live Stores',
    'skills.stores.desc': 'From Bangladesh PWA to US multi-niche stores — I build, deploy, and maintain stores at scale.',
    'skills.stores.link': 'See all projects →',
    'skills.sw.title': 'SolidWorks',
    'skills.sw.desc': '3D CAD modeling and mechanical design for engineering coursework and personal projects.',
    'skills.matlab.title': 'MATLAB',
    'skills.matlab.desc': 'Simulation, data analysis, and numerical modeling for energy systems and engineering problems.',
    'skills.ansys.title': 'ANSYS',
    'skills.ansys.desc': 'FEA and CFD simulation for structural and thermal analysis in academic projects.',
    'skills.eng.badge': 'Engineering Skill · Not for hire',
    'services.tag': 'Services',
    'services.title': 'Popular services',
    'services.desc': 'Add to cart or view full details, reviews & descriptions. All prices in Bangladeshi Taka (৳).',
    'services.cta': 'View All {count} Services →',
    'payments.tag': 'Payments',
    'payments.title': 'Payment methods I accept',
    'payments.desc': 'Pay your way — Bangladesh local or international options.',
    'payments.policy': '<strong>Payment policy:</strong> 30% advance before work starts, remaining 70% after project completion. Confirmed via WhatsApp before any work begins.',
    'payments.bd': 'Bangladesh',
    'payments.bd.send': 'Send payment:',
    'payments.intl': 'US & International',
    'payments.intl.note': 'I set up Mercury, Payoneer, Stripe & more for US LLC clients — <a href="services.html#section-business">view US Business services →</a>',
    'contact.title': "Let's work together",
    'contact.desc': 'Websites, SEO, Google Ads, Meta Ads, AI automation, video editing — reach out anytime.',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.resume': 'Resume',
    'contact.resume.sub': 'View PDF',
    'price.from': 'from',
    'cart.add': 'Add to Cart',
    'cart.added': 'Added to cart',
    'cart.error': 'Could not add — try again',
    'card.by': 'By <strong>MD Nazmul Hasan</strong>',
    'service.about.btn': 'About this service',
    'service.checkout': 'Proceed to Checkout',
    'service.whatsapp': 'Order via WhatsApp',
    'service.related': 'Related Services',
    'service.payment.note': '30% advance (৳) before work · 70% after completion. Final quote via WhatsApp.',
    'service.buy.note': 'Fixed starting price in ৳. Final quote depends on scope.',
    'service.provider': 'Entrepreneur & Web Developer · KUET Student',
    'service.provider.meta': '4+ years · Bangladesh\'s trusted expert',
    'service.about.title': 'About this service',
    'service.see.more': 'See more',
    'service.see.less': 'See less',
    'service.includes': "What's included",
    'service.delivery.label': 'Delivery',
    'service.revisions.label': 'Revisions',
    'service.trust.customers': 'Happy Customers',
    'service.trust.experience': 'Experience',
    'service.trust.this': 'This service',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.refund': 'Refund',
  },
  bn: {
    'nav.home': 'হোম',
    'nav.services': 'সার্ভিস',
    'nav.projects': 'প্রজেক্ট',
    'nav.why': 'কেন আমি',
    'nav.faq': 'প্রশ্নোত্তর',
    'nav.contact': 'যোগাযোগ',
    'nav.sub': 'ওয়েব ডেভেলপার · উদ্যোক্তা',
    'footer.tag': 'উদ্যোক্তা ও ওয়েব ডেভেলপার · বাংলাদেশ',
    'badge.bd': 'বাংলাদেশ',
    'badge.owner': 'একাধিক ব্যবসার মালিক',
    'badge.revenue': 'আয় $১৬,০০০+',
    'badge.expert': 'ওয়েব ডেভেলপার',
    'badge.kuet': 'কুয়েট · এনার্জি সায়েন্স বিভাগ',
    'hero.eyebrow': 'Available for projects · Bangladesh',
    'hero.headline': 'উদ্যোক্তা ও ওয়েব ডেভেলপার',
    'hero.photo.badge': 'KUET · Bangladesh',
    'hero.stat.revenue': 'Revenue',
    'hero.desc': 'ওয়েবসাইট বানাই, অনলাইন স্টোর চালাই, বাংলাদেশ ও বিদেশি ক্লায়েন্টদের ডিজিটাল সেবা দিই। <strong>Bubu & Dudu BD</strong> ও <strong>Zuomio LLC</strong> আমার নিজের প্রতিষ্ঠান।',
    'hero.cta.services': 'সার্ভিস অর্ডার করুন',
    'hero.cta.projects': 'চালু প্রজেক্ট',
    'hero.cta.whatsapp': 'হোয়াটসঅ্যাপ',
    'hero.resume.link': 'রেজুমে',
    'about.tag': 'আমার সম্পর্কে',
    'about.title': 'ব্যবসা ও ওয়েবসাইট গড়ে তোলা',
    'about.p1': 'আমি <strong>মোঃ নাজমুল হাসান</strong> — <strong>উদ্যোক্তা</strong>, <strong>ওয়েব ডেভেলপার</strong>, আর <strong>কুয়েটের শিক্ষার্থী</strong> (এনার্জি সায়েন্স ও ইঞ্জিনিয়ারিং)। <a href="https://bubu-dudu.store/" target="_blank" rel="noopener" class="text-link">Bubu & Dudu BD</a> ও <a href="https://zuomio.com" target="_blank" rel="noopener" class="text-link">Zuomio LLC</a> আমার নিজের। <a href="https://mediacube.store" target="_blank" rel="noopener" class="text-link">MediaCube</a>, <a href="https://lumiere-beauty-five.vercel.app" target="_blank" rel="noopener" class="text-link">Lumiere Beauty</a> ও <a href="https://arafatllc.shop" target="_blank" rel="noopener" class="text-link">Arafat LLC</a>-র ওয়েবসাইট বানিয়েছি — প্রতিদিন এগুলো নিয়ে কাজ করি। ক্লায়েন্টদের জন্য আলাদা করে <strong>কাস্টম ওয়েবসাইট</strong>ও তৈরি করি।',
    'about.p2': '<strong>সফটওয়্যার</strong> বানাই, <strong>Google Ads ও Meta Ads</strong> চালাই, <strong>কনটেন্ট</strong> তৈরি করি, <strong>AI</strong> দিয়ে কাজ সহজ করি। স্টোর ও ক্লায়েন্ট কাজ মিলিয়ে মোট আয় <strong>$১৬,০০০+</strong>। বাংলাদেশে যারা নিজে হাতে কাজ করে সেভাবে ডেভেলপ করে, তাদের মধ্যে আমি একজন — শুধু দেখানোর ডেমো নয়, সত্যি চালানোর মতো কাজ দিই।',
    'stat.customers': 'খুশি গ্রাহক',
    'stat.years': 'বছরের অভিজ্ঞতা',
    'stat.stores': 'চালু স্টোর',
    'stat.services': 'সার্ভিস',
    'skills.tag': 'সার্ভিসের বাইরে',
    'skills.title': 'দক্ষতা ও নিজের প্রজেক্ট',
    'skills.desc': 'নিজের জন্য যা করি — এগুলো ভাড়ায় দেওয়া হয় না।',
    'skills.pv.title': 'PV Panel Simulation',
    'skills.pv.desc': 'কুয়েটের কাজের জন্য বানানো Windows অ্যাপ — PyQt6 ইন্টারফেস, সিমুলেশন, আবহাওয়ার ডেটা ইমপোর্ট, লাইভ গ্রাফ। ইনস্টলার (.exe) সহ।',
    'skills.pv.badge': 'v1.0.0 · ব্যক্তিগত প্রজেক্ট',
    'skills.pv.github': 'GitHub',
    'skills.pv.download': 'ডাউনলোড করুন',
    'skills.stores.title': '২০০+ চালু স্টোর',
    'skills.stores.desc': 'বাংলাদেশের PWA থেকে আমেরিকার বিভিন্ন ধরনের স্টোর — বানাই, চালু করি, দেখাশোনা করি।',
    'skills.stores.link': 'সব প্রজেক্ট দেখুন →',
    'skills.sw.title': 'SolidWorks',
    'skills.sw.desc': 'ইঞ্জিনিয়ারিং পড়াশোনা ও নিজের কাজে ৩ডি মডেলিং ও মেকানিক্যাল ডিজাইন।',
    'skills.matlab.title': 'MATLAB',
    'skills.matlab.desc': 'এনার্জি ও ইঞ্জিনিয়ারিং সমস্যায় হিসাব, বিশ্লেষণ ও সিমুলেশন।',
    'skills.ansys.title': 'ANSYS',
    'skills.ansys.desc': 'পড়াশোনার প্রজেক্টে কাঠামো ও তাপ বিশ্লেষণের সিমুলেশন।',
    'skills.eng.badge': 'ইঞ্জিনিয়ারিং দক্ষতা · ভাড়া দেওয়া হয় না',
    'services.tag': 'সার্ভিস',
    'services.title': 'জনপ্রিয় সার্ভিস',
    'services.desc': 'কার্টে রাখুন বা বিস্তারিত, রিভিউ ও বর্ণনা দেখুন। সব দাম টাকায় (৳)।',
    'services.cta': 'সব {count}টি সার্ভিস দেখুন →',
    'payments.tag': 'পেমেন্ট',
    'payments.title': 'যেসব পেমেন্ট নিই',
    'payments.desc': 'আপনার সুবিধামতো — দেশি বা বিদেশি।',
    'payments.policy': '<strong>পেমেন্ট নিয়ম:</strong> কাজ শুরুর আগে ৩০% অগ্রিম, শেষে বাকি ৭০%। কোনো কাজ শুরুর আগে হোয়াটসঅ্যাপে নিশ্চিত হবে।',
    'payments.bd': 'বাংলাদেশ',
    'payments.bd.send': 'পেমেন্ট পাঠান:',
    'payments.intl': 'আমেরিকা ও আন্তর্জাতিক',
    'payments.intl.note': 'আমেরিকার LLC ক্লায়েন্টদের Mercury, Payoneer, Stripe সেটআপ করি — <a href="services.html#section-business">ব্যবসা সেটআপ সার্ভিস দেখুন →</a>',
    'contact.title': 'চলুন কাজ করি',
    'contact.desc': 'ওয়েবসাইট, SEO, Google Ads, Meta Ads, AI অটোমেশন, ভিডিও এডিটিং — যেকোনো সময় লিখুন বা কল করুন।',
    'contact.phone': 'ফোন',
    'contact.whatsapp': 'হোয়াটসঅ্যাপ',
    'contact.email': 'ইমেইল',
    'contact.linkedin': 'লিংকডইন',
    'contact.github': 'GitHub',
    'contact.resume': 'রেজুমে',
    'contact.resume.sub': 'PDF দেখুন',
    'price.from': 'শুরু',
    'cart.add': 'কার্টে যোগ করুন',
    'cart.added': 'কার্টে যোগ হয়েছে',
    'cart.error': 'যোগ করা যায়নি — আবার চেষ্টা করুন',
    'card.by': '<strong>MD Nazmul Hasan</strong> দ্বারা',
    'service.about.btn': 'বিস্তারিত দেখুন',
    'service.checkout': 'অর্ডার করুন',
    'service.whatsapp': 'হোয়াটসঅ্যাপে অর্ডার',
    'service.related': 'আরও সার্ভিস',
    'service.payment.note': 'কাজ শুরুর আগে ৩০% অগ্রিম (৳), শেষে বাকি ৭০%। চূড়ান্ত দাম হোয়াটসঅ্যাপে জানানো হবে।',
    'service.buy.note': 'এটা শুরুর দাম (৳)। কাজের পরিমাণ অনুযায়ী চূড়ান্ত দাম ঠিক হবে।',
    'service.provider': 'উদ্যোক্তা ও ওয়েব ডেভেলপার · কুয়েট শিক্ষার্থী',
    'service.provider.meta': '৪ বছরের অভিজ্ঞতা · বাংলাদেশে বিশ্বস্ত নাম',
    'service.about.title': 'এই সার্ভিসে কী পাবেন',
    'service.see.more': 'আরও পড়ুন',
    'service.see.less': 'কম দেখুন',
    'service.includes': 'যা অন্তর্ভুক্ত',
    'service.delivery.label': 'সময়',
    'service.revisions.label': 'সংশোধন',
    'service.trust.customers': 'খুশি গ্রাহক',
    'service.trust.experience': 'অভিজ্ঞতা',
    'service.trust.this': 'এই সার্ভিসে বিক্রি',
    'footer.faq': 'প্রশ্নোত্তর',
    'footer.privacy': 'গোপনীয়তা',
    'footer.terms': 'শর্তাবলী',
    'footer.refund': 'রিফান্ড',
  }
};

function getLang() {
  return localStorage.getItem(I18N_LANG_KEY) || 'en';
}

function setLang(lang) {
  localStorage.setItem(I18N_LANG_KEY, lang);
  document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
  document.documentElement.classList.toggle('lang-bn', lang === 'bn');
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  const featured = document.getElementById('featuredServices');
  if (featured && typeof renderServiceCards === 'function') {
    renderServiceCards(featured, { limit: 6 });
  }
  if (typeof refreshServicePageI18n === 'function') refreshServicePageI18n();
  const related = document.getElementById('relatedServices');
  if (related && related.dataset.slugs && typeof renderServiceCards === 'function') {
    renderServiceCards(related, {
      slugs: related.dataset.slugs.split(','),
      linkPrefix: 'service.html?slug='
    });
  }
  const servicesGrid = document.getElementById('servicesGrid');
  if (servicesGrid && typeof renderServiceCards === 'function') {
    renderServiceCards(servicesGrid);
  }
  if (typeof renderFooter === 'function') renderFooter();
  if (typeof applyI18n === 'function') applyI18n();
}

function t(key) {
  if (I18N_ALWAYS_EN.has(key)) return I18N.en[key] || key;
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

function syncServiceCounts() {
  const n = typeof getServiceCount === 'function' ? getServiceCount() : 0;
  if (!n) return;
  document.querySelectorAll('[data-service-count]').forEach(el => { el.textContent = n; });
  document.querySelectorAll('[data-i18n="services.cta"]').forEach(el => {
    el.textContent = t('services.cta').replace('{count}', n);
  });
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (val) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  syncServiceCounts();
}

function initI18n() {
  setLang(getLang());
}

document.addEventListener('DOMContentLoaded', initI18n);