const HAPPY_CUSTOMERS = 3000;
const HAPPY_CLIENTS = HAPPY_CUSTOMERS;
const EXPERIENCE_YEARS = 4;
const LIVE_STORES = 200;
const TOTAL_SOLD = 13054;
const TOTAL_REVENUE = 16000;
const CURRENCY = 'BDT';

// Mixed sold counts: 300–500 range and 659–1.5k range per service
const SOLD_COUNTS = [487, 445, 412, 356, 1247, 892, 734, 1389, 1500, 445, 378, 945, 1201, 659, 823, 498, 1088];

const SERVICE_BADGES = {
  'web-app-development': 'popular',
  'tailored-website': 'popular',
  'seo-optimization': 'best-deal',
  'website-speed-fix': 'best-deal',
  'stripe-setup': 'popular',
  'ecommerce-store-build': 'popular',
  'bd-payment-gateway': 'best-deal',
  'meta-ads': 'popular',
  'google-ads': 'popular',
  'video-editing': 'best-deal',
};

const IMG_VER = '14';

const SERVICE_SECTION_ORDER = [
  'Development',
  'E-Commerce',
  'SEO',
  'Performance',
  'Marketing',
  'Payments',
  'Business',
  'Automation',
  'Creative',
  'Amazon',
];

const SERVICE_SECTION_LABELS = {
  Development: 'Web Development',
  'E-Commerce': 'E-Commerce Stores',
  SEO: 'SEO Services',
  Performance: 'Website Performance',
  Marketing: 'Digital Marketing',
  Payments: 'Payment Gateways',
  Business: 'US Business Setup',
  Automation: 'AI & Automation',
  Creative: 'Creative Services',
  Amazon: 'Amazon Business',
};

function serviceImage(slug, ext = 'jpg') {
  return `assets/services/${slug}.${ext}?v=${IMG_VER}`;
}

const GITHUB_USER = 'nazmul-cyber';

const SERVICE_GITHUB_MAP = {
  'web-app-development': 'web-app-development',
  'tailored-website': 'web-app-development',
  'seo-optimization': 'seo-optimization-services',
  'website-speed-fix': 'website-speed-optimization',
  'us-llc-formation': 'us-llc-formation',
  'mercury-bank-setup': 'us-llc-formation',
  'stripe-setup': 'payment-gateway-integration',
  'shopify-setup': 'shopify-store-services',
  'ecommerce-store-build': 'zuomio-store',
  'us-payment-gateway': 'payment-gateway-integration',
  'bd-payment-gateway': 'payment-gateway-integration',
  'digital-marketing': 'digital-marketing-services',
  'meta-ads': 'digital-marketing-services',
  'google-ads': 'digital-marketing-services',
  'ai-automation': 'web-app-development',
  'video-editing': 'digital-marketing-services',
  'amazon-business': 'digital-marketing-services',
};

function getGithubRepoUrl(repo) {
  return `https://github.com/${GITHUB_USER}/${repo}`;
}

function getServiceGithubUrl(slug) {
  const service = getServiceBySlug(slug);
  const repo = service?.githubRepo || SERVICE_GITHUB_MAP[slug];
  return repo ? getGithubRepoUrl(repo) : null;
}

function getServiceGithubRepo(slug) {
  const service = getServiceBySlug(slug);
  return service?.githubRepo || SERVICE_GITHUB_MAP[slug] || null;
}

const PORTFOLIO_BASE = 'https://portfolio-eight-red-48.vercel.app';

function getServicePageUrl(slug, absolute = false) {
  const path = `service.html?slug=${slug}`;
  return absolute ? `${PORTFOLIO_BASE}/${path}` : path;
}

function getFeaturedServiceUrl(item, absolute = false) {
  if (item.href) return absolute ? `${PORTFOLIO_BASE}/${item.href}` : item.href;
  return getServicePageUrl(item.slug, absolute);
}

function getFeaturedServiceName(item) {
  if (item.slug) {
    const service = getServiceBySlug(item.slug);
    if (service) return service.name;
  }
  return item.label;
}

const PORTFOLIO_SERVICES = [
  {
    slug: 'web-app-development',
    name: 'Web App Development',
    price: 15000,
    tag: 'Development',
    image: serviceImage('web-app-development'),
    sold: SOLD_COUNTS[0],
    rating: 4.9,
    short: 'I will build a custom React e-commerce web app with admin panel, cart and checkout.',
    description: 'Need a store that actually converts — not a template that looks like everyone else? I build production-ready web applications from scratch using React, Vite, and modern deployment. I own and operate 6 live stores using this exact stack.',
    gigDetail: 'As a vetted e-commerce developer, I deliver full-stack web apps with product catalogs, order management, payment integration, and mobile-first UI. You get clean code, fast performance, and a store you can scale.',
    includes: ['React / Vite frontend', 'Admin dashboard', 'Cart & checkout flow', 'Mobile-responsive UI', 'Vercel deployment', '30-day bug support'],
    delivery: '7–14 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'tailored-website',
    name: 'Tailored Website',
    price: 20000,
    tag: 'Development',
    image: serviceImage('tailored-website'),
    sold: SOLD_COUNTS[1],
    rating: 4.9,
    short: 'I will build a 100% custom tailored website for your brand — not a template.',
    description: 'Need a website that looks and works exactly how you want? I design and build fully tailored sites from scratch — custom layout, your colors, your content structure, and features matched to your business goals.',
    gigDetail: 'Unlike theme stores, every page is built for you. I handle design, responsive development, contact forms, SEO basics, and deployment. Perfect for businesses, portfolios, and landing pages that need a unique identity.',
    includes: ['Custom UI design', 'Mobile-responsive build', 'Contact & lead forms', 'SEO meta & speed setup', 'Domain deployment help', '30-day support'],
    delivery: '5–12 days',
    revisions: '3 revisions included'
  },
  {
    slug: 'seo-optimization',
    name: 'SEO Optimization',
    price: 6000,
    tag: 'SEO',
    image: serviceImage('seo-optimization'),
    sold: SOLD_COUNTS[2],
    rating: 4.8,
    short: 'I will optimize your website SEO for Google ranking — meta tags, schema and GSC.',
    description: 'Your products are great but Google cannot find them? I run a complete on-page SEO audit and fix everything — titles, meta descriptions, headings, alt tags, sitemap, robots.txt, and structured data.',
    gigDetail: 'Pro-level SEO for e-commerce and service sites. I set up Google Search Console, fix indexing issues, and optimize product pages so you start getting organic traffic within weeks.',
    includes: ['Keyword research', 'Meta tag optimization', 'Google Search Console', 'Sitemap & robots.txt', 'Product page SEO', 'Performance report'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'website-speed-fix',
    name: 'Website Speed Fix',
    price: 4500,
    tag: 'Performance',
    image: serviceImage('website-speed-fix'),
    sold: SOLD_COUNTS[3],
    rating: 4.9,
    short: 'I will fix your website speed — PageSpeed, Lighthouse and Core Web Vitals.',
    description: 'A 1-second delay costs you 7% in conversions. I diagnose and fix every bottleneck — image compression, lazy loading, render-blocking scripts, and Core Web Vitals on mobile and desktop.',
    gigDetail: 'Before/after Lighthouse report included. Most clients see PageSpeed scores jump from 40–60 to 85–95 after my optimization pass.',
    includes: ['Lighthouse audit', 'Image compression & WebP', 'Lazy loading setup', 'Core Web Vitals fixes', 'Before/after report', 'Mobile tuning'],
    delivery: '2–4 days',
    revisions: '1 revision included'
  },
  {
    slug: 'us-llc-formation',
    name: 'US LLC Formation',
    price: 10000,
    tag: 'Business',
    image: serviceImage('us-llc-formation'),
    sold: SOLD_COUNTS[4],
    rating: 5.0,
    short: 'I will register your Wyoming LLC within 72 hours — full legal setup.',
    description: 'Want to sell in the US legally? I handle Wyoming LLC formation end-to-end — Articles of Organization, Registered Agent, Operating Agreement, plus guides for bank account and Stripe onboarding.',
    gigDetail: 'I formed my own LLC (Zuomio LLC) and use it daily. I know exactly what documents you need and how to avoid common rejection mistakes with banks and payment processors.',
    includes: ['Articles of Organization', 'Registered Agent (1 year)', 'Operating Agreement', 'EIN guidance', 'Bank onboarding guide', 'Stripe setup guide'],
    delivery: 'Within 72 hours',
    revisions: 'Document corrections included'
  },
  {
    slug: 'mercury-bank-setup',
    name: 'Mercury Bank Setup',
    price: 8000,
    tag: 'Business',
    image: serviceImage('mercury-bank-setup'),
    sold: SOLD_COUNTS[5],
    rating: 4.9,
    short: 'I will open your Mercury business bank account for your US LLC.',
    description: 'Need a US business bank account? I guide you through Mercury Bank application step-by-step — document prep, LLC verification, and account activation for your Wyoming or Delaware LLC.',
    gigDetail: 'I opened Mercury for my own Zuomio LLC. I know the exact documents, common rejection reasons, and how to get approved fast so you can connect Stripe and start receiving payments.',
    includes: ['Mercury application prep', 'LLC document checklist', 'Rejection fix guidance', 'Account activation help', 'Stripe connection guide', 'Banking best practices'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'stripe-setup',
    name: 'Stripe Payment Setup',
    price: 8000,
    tag: 'Payments',
    image: serviceImage('stripe-setup'),
    sold: SOLD_COUNTS[6],
    rating: 4.9,
    short: 'I will set up Stripe payments for your US business — checkout and webhooks.',
    description: 'Accept card payments on your store. I configure Stripe from account verification to live checkout — products, webhooks, test transactions, and go-live checklist for your e-commerce site.',
    gigDetail: 'I run Stripe on my own US stores daily. You get a fully tested payment flow — card checkout, order webhooks, and mobile-friendly payment pages that actually work.',
    includes: ['Stripe account setup', 'Checkout integration', 'Webhook configuration', 'Test transactions', 'Go-live checklist', 'Mobile checkout tuning'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'shopify-setup',
    name: 'Shopify Store Setup',
    price: 12000,
    tag: 'E-Commerce',
    image: serviceImage('shopify-setup'),
    sold: SOLD_COUNTS[7],
    rating: 4.8,
    short: 'I will build your complete Shopify store — theme, products, apps and audit.',
    description: 'From zero to a live Shopify store that looks professional and sells. I handle theme customization, product uploads, payment/shipping config, essential apps, and a full store audit.',
    gigDetail: 'Fiverr Pro-style delivery: theme setup, up to 50 products uploaded, review widgets, SEO basics, and a written audit report with improvement suggestions for your niche.',
    includes: ['Theme setup & customization', 'Product upload (up to 50)', 'Payment & shipping config', 'Essential apps setup', 'SEO basics', 'Store audit report'],
    delivery: '5–10 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'ecommerce-store-build',
    name: 'E-Commerce Store Build',
    price: 15000,
    tag: 'E-Commerce',
    image: serviceImage('ecommerce-store-build'),
    sold: SOLD_COUNTS[8],
    rating: 4.9,
    short: 'I will build your complete online store — design, payments, admin and policies.',
    description: 'The full package. I design, develop, and launch your e-commerce store with product catalog, payment gateways, policy pages, admin panel, and mobile optimization. Launch-ready in 10–21 days.',
    gigDetail: 'This is what I do for my own brands daily. You get the same quality I put into zuomio.com, mediacube.store, and arafatllc.shop — proven stores generating real revenue.',
    includes: ['Custom store design', 'Up to 100 products', 'Payment gateway setup', 'Policy pages (Terms, Privacy, Refund)', 'Admin panel', 'Mobile PWA ready'],
    delivery: '10–21 days',
    revisions: '3 revisions included'
  },
  {
    slug: 'us-payment-gateway',
    name: 'US Payment Gateway',
    price: 8000,
    tag: 'Payments',
    image: serviceImage('us-payment-gateway'),
    sold: SOLD_COUNTS[9],
    rating: 4.8,
    short: 'I will set up Stripe, Mercury Bank, Binance Pay and bank transfer for your business.',
    description: 'Accept payments globally. I integrate Stripe, Mercury Bank onboarding, Binance Pay, and bank transfers into your store with proper webhook handling, test transactions, and a go-live checklist.',
    gigDetail: 'I have set up payment flows for US LLC stores and international clients. No guesswork — tested checkout flows that work on mobile and desktop.',
    includes: ['Stripe integration', 'Mercury Bank setup', 'Binance Pay', 'Bank transfer setup', 'Go-live checklist', 'Test transactions'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'bd-payment-gateway',
    name: 'BD Payment Gateway',
    price: 5000,
    tag: 'Payments',
    image: serviceImage('bd-payment-gateway'),
    sold: SOLD_COUNTS[10],
    rating: 4.9,
    short: 'I will set up bKash, Nagad, Rocket, Upay, bank and COD for Bangladesh.',
    description: 'Full Bangladesh payment setup. I configure bKash, Nagad, Rocket, Upay, bank transfer, COD, and SSLCommerz with checkout flows optimized for BD customers. Send payment to +8801969827902.',
    gigDetail: 'I own bubu-dudu.store — a production Bangladesh PWA with COD, bKash guidance, and local checkout. I know what BD customers expect at checkout.',
    includes: ['bKash integration', 'Nagad / Rocket / Upay', 'Bank transfer setup', 'COD configuration', 'SSLCommerz', 'BD checkout UX'],
    delivery: '2–4 days',
    revisions: '1 revision included'
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    price: 10000,
    tag: 'Marketing',
    image: serviceImage('digital-marketing'),
    sold: SOLD_COUNTS[11],
    rating: 4.6,
    short: 'I will run your digital marketing campaigns with ROI-focused strategy.',
    description: 'Data-driven campaigns that focus on revenue, not vanity metrics. I create strategies, set up tracking pixels, optimize creatives, and report weekly performance.',
    gigDetail: 'Experience across Facebook, Instagram, Google, and e-commerce funnels. I manage ads for my own stores and client brands with measurable ROAS improvements.',
    includes: ['Campaign strategy', 'Audience targeting', 'Ad creative guidance', 'Pixel & tracking setup', 'Weekly performance report', 'Conversion optimization'],
    delivery: '7 days setup',
    revisions: 'Ongoing optimization'
  },
  {
    slug: 'meta-ads',
    name: 'Meta Ads Specialist',
    price: 9000,
    tag: 'Marketing',
    image: serviceImage('meta-ads'),
    sold: SOLD_COUNTS[12],
    rating: 4.8,
    short: 'I will create and optimize Facebook/Instagram ad campaigns for max ROAS.',
    description: 'Specialized Meta advertising. I build campaigns from scratch — audience research, lookalike audiences, retargeting funnels, creative A/B testing, and budget optimization.',
    gigDetail: 'Pro Meta Ads setup: campaign structure, pixel events, custom audiences, and creative testing. Clients typically see 30–40% lower cost-per-purchase after my optimization.',
    includes: ['Campaign structure setup', 'Audience research & targeting', 'Retargeting funnels', 'Creative A/B testing', 'ROAS optimization', 'Monthly report'],
    delivery: '5–7 days setup',
    revisions: '2 optimization rounds'
  },
  {
    slug: 'google-ads',
    name: 'Google Ads Specialist',
    price: 9000,
    tag: 'Marketing',
    image: serviceImage('google-ads'),
    sold: SOLD_COUNTS[13],
    rating: 4.9,
    short: 'I will set up and optimize Google Ads — Search, Display, Shopping and YouTube.',
    description: 'AI-driven Google Ads for D2C brands and e-commerce. I build Search, Performance Max, and Shopping campaigns with proper conversion tracking, keyword strategy, and weekly optimization.',
    gigDetail: 'Pro Google Ads setup like top course sellers: campaign structure, GA4 + GTM tracking, negative keywords, bid strategy, and dashboard-based reporting. Lower CPA and scale ROAS.',
    includes: ['Campaign structure', 'Conversion tracking', 'Keyword research', 'Shopping / PMax setup', 'Weekly optimization', 'Dashboard reporting'],
    delivery: '5–7 days setup',
    revisions: '2 optimization rounds'
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    price: 10000,
    tag: 'Automation',
    image: serviceImage('ai-automation'),
    sold: SOLD_COUNTS[14],
    rating: 4.9,
    short: 'I will build AI chatbots and workflow automation for your business.',
    description: 'Stop doing repetitive tasks manually. I build AI chatbots for customer support, order notifications, product recommendations, and workflow automations that save hours daily.',
    gigDetail: 'I built AI chat for bubu-dudu.store. I can add similar smart automation to your store — chatbots, auto-replies, order bots, and integration with your existing tools.',
    includes: ['AI chatbot setup', 'Workflow automation', 'Order notification bots', 'AI product recommendations', 'Store integration', 'Documentation & training'],
    delivery: '5–10 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'video-editing',
    name: 'Video Editing',
    price: 6000,
    tag: 'Creative',
    image: serviceImage('video-editing'),
    sold: SOLD_COUNTS[15],
    rating: 4.7,
    short: 'I will edit product videos, ad reels and social clips for your brand.',
    description: 'Professional video editing for e-commerce and social media. Product showcases, Instagram Reels, Facebook ad videos, unboxing edits with captions, transitions, and music.',
    gigDetail: 'Up to 5 videos (30–60 sec each), brand-matched style, captions/subtitles, and 2 revision rounds. Optimized for Reels, Shorts, and Facebook ads.',
    includes: ['Up to 5 videos (30–60 sec)', 'Captions & subtitles', 'Brand-matched transitions', 'Music & sound design', 'Reels & Shorts format', '2 revision rounds'],
    delivery: '3–7 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'amazon-business',
    name: 'Amazon Business',
    price: 9000,
    tag: 'Amazon',
    image: serviceImage('amazon-business'),
    sold: SOLD_COUNTS[16],
    rating: 4.8,
    short: 'I will set up your Amazon seller account and optimize product listings.',
    description: 'Launch and grow on Amazon. Seller account setup, product research, SEO-optimized listings with bullet points, inventory guidance, and cross-border strategy.',
    gigDetail: 'Fiverr Pro-style Amazon gig: account verification help, 5 niche product research reports, listing optimization with keywords, and inventory management guidance.',
    includes: ['Seller account setup', 'Product research (5 niches)', 'Listing optimization', 'Keyword research', 'Inventory guidance', 'Cross-border strategy'],
    delivery: '5–10 days',
    revisions: '2 revisions included'
  }
];

PORTFOLIO_SERVICES.forEach((service) => {
  if (SERVICE_GITHUB_MAP[service.slug]) {
    service.githubRepo = SERVICE_GITHUB_MAP[service.slug];
  }
});

const SERVICE_GITHUB_REPOS = [...new Set(PORTFOLIO_SERVICES.map(s => s.githubRepo).filter(Boolean))];

const FEATURED_SERVICE_LINKS = PORTFOLIO_SERVICES.map(s => ({
  label: s.name,
  slug: s.slug,
}));

function getServiceBySlug(slug) {
  return PORTFOLIO_SERVICES.find(s => s.slug === slug);
}

function formatSold(n) {
  if (n >= 1000) {
    const k = n / 1000;
    return (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1).replace(/\.0$/, '')) + 'k sold';
  }
  return n.toLocaleString('en-US') + ' sold';
}

function formatPrice(n) {
  return '৳' + n.toLocaleString('en-US');
}

function getServicePricing(price) {
  const discount = price >= 12000 ? 10 : price >= 8000 ? 8 : price >= 5000 ? 7 : 5;
  const sale = price;
  const original = Math.round(sale / (1 - discount / 100));
  return { sale, original, discount };
}

function getReviewCount(sold) {
  return Math.max(18, Math.round(sold * 0.17 + 12));
}

function getServiceBadge(slug) {
  return SERVICE_BADGES[slug] || null;
}

function renderServiceBadge(slug) {
  const b = getServiceBadge(slug);
  if (b === 'popular') return '<span class="svc-badge svc-badge--popular">Popular</span>';
  if (b === 'best-deal') return '<span class="svc-badge svc-badge--deal">Best Deal</span>';
  return '';
}

function renderServiceGithubButton(slug, className = 'btn btn-github btn-sm') {
  const url = getServiceGithubUrl(slug);
  const repo = getServiceGithubRepo(slug);
  if (!url || !repo) return '';
  return `<a href="${url}" target="_blank" rel="noopener" class="${className}" title="${repo}">View on GitHub</a>`;
}

function renderServiceGithubLink(slug, className = 'service-github-link') {
  const url = getServiceGithubUrl(slug);
  const repo = getServiceGithubRepo(slug);
  if (!url || !repo) return '';
  return `<a href="${url}" target="_blank" rel="noopener" class="${className}">${repo}</a>`;
}