"""Rebuild js/services-data.js from structured service list."""
from pathlib import Path

HEADER = r'''const HAPPY_CUSTOMERS = 200;
const HAPPY_CLIENTS = HAPPY_CUSTOMERS;
const EXPERIENCE_YEARS = 4;
const LIVE_STORES = 200;
const TOTAL_SOLD = 13054;
const TOTAL_REVENUE = 3000;
const CURRENCY = 'BDT';

const SOLD_COUNTS = [
  487, 445, 412, 356, 521, 1247, 892, 734, 756, 468, 389, 1389, 1500, 412, 445,
  378, 945, 1201, 659, 823, 498, 1088, 367, 398, 512, 623, 534, 478, 692, 587, 445,
];

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
  'fullstack-api-development': 'popular',
  'wordpress-store': 'popular',
  'php-laravel-store': 'popular',
  'ecommerce-seo': 'best-deal',
  'amazon-ppc': 'popular',
  'ai-video-making': 'popular',
};

const IMG_VER = '17';

const SERVICE_SECTION_ORDER = [
  'Development', 'E-Commerce', 'SEO', 'Performance', 'Marketing', 'Payments',
  'Business', 'Automation', 'Creative', 'Amazon',
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

function serviceImage(slug, ext = 'webp') {
  return `assets/services/${slug}.${ext}?v=${IMG_VER}`;
}

const GITHUB_USER = 'nazmul-cyber';

const SERVICE_GITHUB_MAP = {
  'web-app-development': 'web-app-development',
  'tailored-website': 'web-app-development',
  'fullstack-api-development': 'web-app-development',
  'seo-optimization': 'seo-optimization-services',
  'local-seo': 'seo-optimization-services',
  'ecommerce-seo': 'seo-optimization-services',
  'website-speed-fix': 'website-speed-optimization',
  'core-web-vitals-fix': 'website-speed-optimization',
  'mobile-page-speed': 'website-speed-optimization',
  'us-llc-formation': 'us-llc-formation',
  'mercury-bank-setup': 'us-llc-formation',
  'payoneer-setup': 'payment-gateway-integration',
  'ein-application': 'us-llc-formation',
  'itin-application': 'us-llc-formation',
  'stripe-setup': 'payment-gateway-integration',
  'shopify-setup': 'shopify-store-services',
  'ecommerce-store-build': 'zuomio-store',
  'wordpress-store': 'shopify-store-services',
  'php-laravel-store': 'web-app-development',
  'us-payment-gateway': 'payment-gateway-integration',
  'bd-payment-gateway': 'payment-gateway-integration',
  'digital-marketing': 'digital-marketing-services',
  'meta-ads': 'digital-marketing-services',
  'google-ads': 'digital-marketing-services',
  'ai-automation': 'web-app-development',
  'video-editing': 'digital-marketing-services',
  'ai-video-making': 'digital-marketing-services',
  'custom-ai-video': 'digital-marketing-services',
  'amazon-business': 'digital-marketing-services',
  'amazon-ppc': 'digital-marketing-services',
  'amazon-seo': 'digital-marketing-services',
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
'''

FOOTER = r'''];

const SERVICE_COUNT = PORTFOLIO_SERVICES.length;

function getServiceCount() {
  return PORTFOLIO_SERVICES.length;
}

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
    const num = k % 1 === 0 ? k.toFixed(0) : k.toFixed(1).replace(/\.0$/, '');
    return num + 'k sold';
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
'''

SERVICES = [
  ('web-app-development', 'Web App Development', 15000, 'Development', 4.9,
   'I will build a custom React e-commerce web app with admin panel, cart and checkout.',
   'Need a store that actually converts — not a template that looks like everyone else? I build production-ready web applications from scratch using React, Vite, and modern deployment. I own and operate 6 live stores using this exact stack.',
   'As a vetted e-commerce developer, I deliver full-stack web apps with product catalogs, order management, payment integration, and mobile-first UI. You get clean code, fast performance, and a store you can scale.',
   ['React / Vite frontend', 'Admin dashboard', 'Cart & checkout flow', 'Mobile-responsive UI', 'Vercel deployment', '30-day bug support'],
   '7–14 days', '2 revisions included'),
  ('tailored-website', 'Tailored Website', 20000, 'Development', 4.9,
   'I will build a 100% custom tailored website for your brand — not a template.',
   'Need a website that looks and works exactly how you want? I design and build fully tailored sites from scratch — custom layout, your colors, your content structure, and features matched to your business goals.',
   'Unlike theme stores, every page is built for you. I handle design, responsive development, contact forms, SEO basics, and deployment. Perfect for businesses, portfolios, and landing pages that need a unique identity.',
   ['Custom UI design', 'Mobile-responsive build', 'Contact & lead forms', 'SEO meta & speed setup', 'Domain deployment help', '30-day support'],
   '5–12 days', '3 revisions included'),
  ('fullstack-api-development', 'Full-Stack API Development', 12000, 'Development', 4.9,
   'I will build REST APIs, admin backends and database layers for your web app.',
   'Need a solid backend behind your store or SaaS? I build Node/Express or Laravel APIs with authentication, CRUD, webhooks, and admin endpoints — production-ready and documented.',
   'I build the same API patterns I use on my live stores — clean routes, secure auth, and integrations with payment gateways and third-party services.',
   ['REST API design', 'Auth & user roles', 'Database schema', 'Admin endpoints', 'API documentation', 'Deployment help'],
   '7–12 days', '2 revisions included'),
  ('shopify-setup', 'Shopify Store Setup', 12000, 'E-Commerce', 4.8,
   'I will build your complete Shopify store — theme, products, apps and audit.',
   'From zero to a live Shopify store that looks professional and sells. I handle theme customization, product uploads, payment/shipping config, essential apps, and a full store audit.',
   'Fiverr Pro-style delivery: theme setup, up to 50 products uploaded, review widgets, SEO basics, and a written audit report with improvement suggestions for your niche.',
   ['Theme setup & customization', 'Product upload (up to 50)', 'Payment & shipping config', 'Essential apps setup', 'SEO basics', 'Store audit report'],
   '5–10 days', '2 revisions included'),
  ('ecommerce-store-build', 'E-Commerce Store Build', 15000, 'E-Commerce', 4.9,
   'I will build your complete online store — design, payments, admin and policies.',
   'The full package. I design, develop, and launch your e-commerce store with product catalog, payment gateways, policy pages, admin panel, and mobile optimization. Launch-ready in 10–21 days.',
   'This is what I do for my own brands daily. You get the same quality I put into zuomio.com, mediacube.store, and arafatllc.shop — proven stores generating real revenue.',
   ['Custom store design', 'Up to 100 products', 'Payment gateway setup', 'Policy pages (Terms, Privacy, Refund)', 'Admin panel', 'Mobile PWA ready'],
   '10–21 days', '3 revisions included'),
  ('wordpress-store', 'WordPress E-Commerce Store', 10000, 'E-Commerce', 4.8,
   'I will build your WooCommerce WordPress store — theme, products and payments.',
   'Need a WordPress store that is easy to manage? I set up WooCommerce with premium theme, product catalog, payment gateways, SEO plugins, and admin training.',
   'WordPress is perfect for clients who want to edit products themselves. I deliver a fast, secure WooCommerce store with the same conversion focus as my custom builds.',
   ['WooCommerce setup', 'Theme customization', 'Up to 50 products', 'Payment & shipping config', 'SEO plugin setup', 'Admin walkthrough'],
   '5–10 days', '2 revisions included'),
  ('php-laravel-store', 'PHP Laravel Store', 14000, 'E-Commerce', 4.9,
   'I will build a custom PHP Laravel e-commerce store with admin panel.',
   'Enterprise-grade custom store on Laravel — product management, orders, users, payments, and scalable backend. Ideal for brands that outgrow WordPress or Shopify.',
   'Laravel gives you full control. I build MVC architecture, Blade templates, MySQL database, and admin dashboards — the same professional stack agencies charge $5k+ for.',
   ['Laravel MVC build', 'Admin dashboard', 'Product & order management', 'Payment integration', 'User auth system', 'Deployment on VPS'],
   '10–18 days', '3 revisions included'),
  ('seo-optimization', 'SEO Optimization', 6000, 'SEO', 4.8,
   'I will optimize your website SEO for Google ranking — meta tags, schema and GSC.',
   'Your products are great but Google cannot find them? I run a complete on-page SEO audit and fix everything — titles, meta descriptions, headings, alt tags, sitemap, robots.txt, and structured data.',
   'Pro-level SEO for e-commerce and service sites. I set up Google Search Console, fix indexing issues, and optimize product pages so you start getting organic traffic within weeks.',
   ['Keyword research', 'Meta tag optimization', 'Google Search Console', 'Sitemap & robots.txt', 'Product page SEO', 'Performance report'],
   '3–5 days', '1 revision included'),
  ('local-seo', 'Local SEO', 5500, 'SEO', 4.8,
   'I will optimize your Google Business Profile and local search rankings.',
   'Get found in "near me" searches. I optimize Google Business Profile, local citations, NAP consistency, map pack keywords, and location pages for Bangladesh and international markets.',
   'Perfect for shops, clinics, restaurants, and service businesses that need local foot traffic and phone calls from Google Maps.',
   ['Google Business Profile setup', 'Local keyword research', 'Citation & NAP audit', 'Map pack optimization', 'Review strategy', 'Monthly report'],
   '3–5 days', '1 revision included'),
  ('ecommerce-seo', 'E-Commerce SEO', 7000, 'SEO', 4.9,
   'I will optimize product pages, categories and schema for e-commerce SEO.',
   'Rank your products on Google. I optimize category pages, product titles, schema markup, internal linking, and Search Console for stores on Shopify, WordPress, or custom React builds.',
   'I SEO my own stores daily — zuomio.com, bubu-dudu.store, and client shops. You get keyword-mapped product pages that actually index and convert.',
   ['Product page SEO', 'Category optimization', 'Schema & rich results', 'Internal linking plan', 'GSC indexing fixes', 'Competitor keyword map'],
   '4–6 days', '1 revision included'),
  ('website-speed-fix', 'Website Speed Fix', 4500, 'Performance', 4.9,
   'I will fix your website speed — PageSpeed, Lighthouse and Core Web Vitals.',
   'A 1-second delay costs you 7% in conversions. I diagnose and fix every bottleneck — image compression, lazy loading, render-blocking scripts, and Core Web Vitals on mobile and desktop.',
   'Before/after Lighthouse report included. Most clients see PageSpeed scores jump from 40–60 to 85–95 after my optimization pass.',
   ['Lighthouse audit', 'Image compression & WebP', 'Lazy loading setup', 'Core Web Vitals fixes', 'Before/after report', 'Mobile tuning'],
   '2–4 days', '1 revision included'),
  ('core-web-vitals-fix', 'Core Web Vitals Fix', 5000, 'Performance', 4.9,
   'I will fix LCP, CLS and INP — pass Google Core Web Vitals.',
   'Google uses Core Web Vitals for ranking. I fix Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint on your live site with measurable before/after reports.',
   'Most sites fail on mobile LCP and CLS. I target the exact elements Google flags — hero images, fonts, layout shifts, and slow JavaScript — until your site passes.',
   ['CWV audit report', 'LCP optimization', 'CLS layout fixes', 'INP / TBT tuning', 'Mobile field data check', 'Before/after scores'],
   '2–4 days', '1 revision included'),
  ('mobile-page-speed', 'Mobile Page Speed', 4000, 'Performance', 4.8,
   'I will boost your mobile PageSpeed score to 85+ on real devices.',
   'Mobile traffic is 70%+ of e-commerce. I optimize mobile-specific bottlenecks — image sizes, font loading, third-party scripts, and touch UI performance.',
   'I specialize in mobile-first stores. Clients typically jump from 35–55 mobile PageSpeed to 85–95 without changing their design.',
   ['Mobile Lighthouse audit', 'Responsive image tuning', 'Script defer & lazy load', 'Font & CSS optimization', 'AMP / PWA tips', 'Score report'],
   '2–3 days', '1 revision included'),
  ('digital-marketing', 'Digital Marketing', 10000, 'Marketing', 4.6,
   'I will run your digital marketing campaigns with ROI-focused strategy.',
   'Data-driven campaigns that focus on revenue, not vanity metrics. I create strategies, set up tracking pixels, optimize creatives, and report weekly performance.',
   'Experience across Facebook, Instagram, Google, and e-commerce funnels. I manage ads for my own stores and client brands with measurable ROAS improvements.',
   ['Campaign strategy', 'Audience targeting', 'Ad creative guidance', 'Pixel & tracking setup', 'Weekly performance report', 'Conversion optimization'],
   '7 days setup', 'Ongoing optimization'),
  ('meta-ads', 'Meta Ads Specialist', 9000, 'Marketing', 4.8,
   'I will create and optimize Facebook/Instagram ad campaigns for max ROAS.',
   'Specialized Meta advertising. I build campaigns from scratch — audience research, lookalike audiences, retargeting funnels, creative A/B testing, and budget optimization.',
   'Pro Meta Ads setup: campaign structure, pixel events, custom audiences, and creative testing. Clients typically see 30–40% lower cost-per-purchase after my optimization.',
   ['Campaign structure setup', 'Audience research & targeting', 'Retargeting funnels', 'Creative A/B testing', 'ROAS optimization', 'Monthly report'],
   '5–7 days setup', '2 optimization rounds'),
  ('google-ads', 'Google Ads Specialist', 9000, 'Marketing', 4.9,
   'I will set up and optimize Google Ads — Search, Display, Shopping and YouTube.',
   'AI-driven Google Ads for D2C brands and e-commerce. I build Search, Performance Max, and Shopping campaigns with proper conversion tracking, keyword strategy, and weekly optimization.',
   'Pro Google Ads setup like top course sellers: campaign structure, GA4 + GTM tracking, negative keywords, bid strategy, and dashboard-based reporting. Lower CPA and scale ROAS.',
   ['Campaign structure', 'Conversion tracking', 'Keyword research', 'Shopping / PMax setup', 'Weekly optimization', 'Dashboard reporting'],
   '5–7 days setup', '2 optimization rounds'),
  ('stripe-setup', 'Stripe Payment Setup', 8000, 'Payments', 4.9,
   'I will set up Stripe payments for your US business — checkout and webhooks.',
   'Accept card payments on your store. I configure Stripe from account verification to live checkout — products, webhooks, test transactions, and go-live checklist for your e-commerce site.',
   'I run Stripe on my own US stores daily. You get a fully tested payment flow — card checkout, order webhooks, and mobile-friendly payment pages that actually work.',
   ['Stripe account setup', 'Checkout integration', 'Webhook configuration', 'Test transactions', 'Go-live checklist', 'Mobile checkout tuning'],
   '3–5 days', '1 revision included'),
  ('us-payment-gateway', 'US Payment Gateway', 8000, 'Payments', 4.8,
   'I will set up Stripe, Mercury, Payoneer, Binance Pay and bank transfer for your business.',
   'Accept payments globally. I integrate Stripe, Mercury Bank, Payoneer, Binance Pay, and bank transfers into your store with proper webhook handling, test transactions, and a go-live checklist.',
   'I set up Mercury, Payoneer, and Stripe for US LLC stores and international clients daily. No guesswork — tested checkout and payout flows that work on mobile and desktop.',
   ['Stripe integration', 'Mercury Bank setup', 'Payoneer setup', 'Binance Pay', 'Bank transfer setup', 'Go-live checklist'],
   '3–5 days', '1 revision included'),
  ('bd-payment-gateway', 'BD Payment Gateway', 5000, 'Payments', 4.9,
   'I will set up bKash, Nagad, Rocket, Upay, bank and COD for Bangladesh.',
   'Full Bangladesh payment setup. I configure bKash, Nagad, Rocket, Upay, bank transfer, COD, and SSLCommerz with checkout flows optimized for BD customers. Send payment to +8801969827902.',
   'I own bubu-dudu.store — a production Bangladesh PWA with COD, bKash guidance, and local checkout. I know what BD customers expect at checkout.',
   ['bKash integration', 'Nagad / Rocket / Upay', 'Bank transfer setup', 'COD configuration', 'SSLCommerz', 'BD checkout UX'],
   '2–4 days', '1 revision included'),
  ('us-llc-formation', 'US LLC Formation', 10000, 'Business', 5.0,
   'I will register your Wyoming LLC within 72 hours — full legal setup.',
   'Want to sell in the US legally? I handle Wyoming LLC formation end-to-end — Articles of Organization, Registered Agent, Operating Agreement, plus guides for Mercury, Payoneer, and Stripe onboarding.',
   'I formed my own LLC (Zuomio LLC) and use it daily. I know exactly what documents you need and how to avoid common rejection mistakes with Mercury, Payoneer, and other payment processors.',
   ['Articles of Organization', 'Registered Agent (1 year)', 'Operating Agreement', 'EIN guidance', 'Mercury & Payoneer guide', 'Stripe setup guide'],
   'Within 72 hours', 'Document corrections included'),
  ('mercury-bank-setup', 'Mercury Bank Setup', 8000, 'Business', 4.9,
   'I will open your Mercury business bank account for your US LLC.',
   'Need a US business bank account? I guide you through Mercury Bank application step-by-step — document prep, LLC verification, and account activation for your Wyoming or Delaware LLC.',
   'I opened Mercury for my own Zuomio LLC. I know the exact documents, common rejection reasons, and how to get approved fast so you can connect Stripe and start receiving payments.',
   ['Mercury application prep', 'LLC document checklist', 'Rejection fix guidance', 'Account activation help', 'Stripe connection guide', 'Banking best practices'],
   '3–5 days', '1 revision included'),
  ('payoneer-setup', 'Payoneer Setup', 8000, 'Business', 4.9,
   'I will set up your Payoneer business account for US & global payouts.',
   'Receive international payments without a US bank account. I guide Payoneer registration, identity verification, USD receiving account setup, and connecting Payoneer to your store or marketplace.',
   'I use Payoneer for cross-border payouts on US and international projects. You get a verified account, receiving details, and integration guidance for Stripe alternatives, Amazon, Fiverr, and your own store.',
   ['Payoneer account registration', 'ID & business verification', 'USD receiving account setup', 'Store / marketplace linking', 'Withdrawal to local bank guide', 'Payout best practices'],
   '3–5 days', '1 revision included'),
  ('ein-application', 'EIN Application', 5000, 'Business', 5.0,
   'I will get your US EIN (Employer Identification Number) for your LLC.',
   'Every US LLC needs an EIN for banking, Stripe, and taxes. I prepare and file your IRS EIN application (SS-4) correctly — avoid rejections and delays.',
   'I got EIN for Zuomio LLC and help clients weekly. You get step-by-step filing, IRS confirmation, and a guide for using EIN with Mercury, Stripe, and Amazon.',
   ['SS-4 preparation', 'IRS online filing guide', 'Responsible party setup', 'EIN confirmation letter', 'Bank & Stripe linking guide', 'Tax ID best practices'],
   '1–3 days', 'Refile support included'),
  ('itin-application', 'ITIN Application', 6000, 'Business', 4.9,
   'I will guide your US ITIN application for non-US residents.',
   'Non-US residents selling in America often need an ITIN. I guide Form W-7 preparation, document checklist, IRS submission, and follow-up for Bangladesh and international clients.',
   'Cross-border sellers trust me for US tax ID setup. I explain exactly which documents you need and how to avoid the most common IRS rejection reasons.',
   ['Form W-7 preparation', 'Document checklist', 'IRS submission guide', 'Certified copy guidance', 'Follow-up support', 'US tax ID usage guide'],
   '3–7 days', 'Document corrections included'),
  ('ai-automation', 'AI Automation', 10000, 'Automation', 4.9,
   'I will build AI chatbots and workflow automation for your business.',
   'Stop doing repetitive tasks manually. I build AI chatbots for customer support, order notifications, product recommendations, and workflow automations that save hours daily.',
   'I built AI chat for bubu-dudu.store. I can add similar smart automation to your store — chatbots, auto-replies, order bots, and integration with your existing tools.',
   ['AI chatbot setup', 'Workflow automation', 'Order notification bots', 'AI product recommendations', 'Store integration', 'Documentation & training'],
   '5–10 days', '2 revisions included'),
  ('video-editing', 'Video Editing', 6000, 'Creative', 4.7,
   'I will edit product videos, ad reels and social clips for your brand.',
   'Professional video editing for e-commerce and social media. Product showcases, Instagram Reels, Facebook ad videos, unboxing edits with captions, transitions, and music.',
   'Up to 5 videos (30–60 sec each), brand-matched style, captions/subtitles, and 2 revision rounds. Optimized for Reels, Shorts, and Facebook ads.',
   ['Up to 5 videos (30–60 sec)', 'Captions & subtitles', 'Brand-matched transitions', 'Music & sound design', 'Reels & Shorts format', '2 revision rounds'],
   '3–7 days', '2 revisions included'),
  ('ai-video-making', 'AI Video Making', 7000, 'Creative', 4.8,
   'I will create AI-generated product and ad videos for your brand.',
   'Fast, affordable video content using AI tools — product promos, UGC-style ads, explainers, and social clips without expensive shoots.',
   'I combine AI video generators with manual editing for polished results. Perfect for e-commerce brands that need daily Reels and ad creatives on a budget.',
   ['AI script & storyboard', 'Up to 3 AI videos (30–60s)', 'Voiceover & captions', 'Brand-matched style', 'Reels & Shorts format', '2 revision rounds'],
   '3–5 days', '2 revisions included'),
  ('custom-ai-video', 'Custom AI Video', 9000, 'Creative', 4.9,
   'I will produce custom AI avatar videos tailored to your script and brand.',
   'Premium AI video with custom scripts, branded avatars, product demos, and multilingual voiceovers — for ads, landing pages, and training content.',
   'Go beyond template AI clips. I craft a unique visual style, custom script, branded elements, and manual polish so your AI video looks professional — not generic.',
   ['Custom script writing', 'Branded AI avatar / visuals', 'Up to 5 min final video', 'Multilingual voiceover option', 'Captions & music', '3 revision rounds'],
   '5–8 days', '3 revisions included'),
  ('amazon-business', 'Amazon Business', 9000, 'Amazon', 4.8,
   'I will set up your Amazon seller account and optimize product listings.',
   'Launch and grow on Amazon. Seller account setup, product research, SEO-optimized listings with bullet points, inventory guidance, and cross-border strategy.',
   'Fiverr Pro-style Amazon gig: account verification help, 5 niche product research reports, listing optimization with keywords, and inventory management guidance.',
   ['Seller account setup', 'Product research (5 niches)', 'Listing optimization', 'Keyword research', 'Inventory guidance', 'Cross-border strategy'],
   '5–10 days', '2 revisions included'),
  ('amazon-ppc', 'Amazon PPC Management', 8500, 'Amazon', 4.9,
   'I will set up and optimize Amazon Sponsored Products & Brands PPC campaigns.',
   'Get sales on Amazon with profitable PPC. I structure campaigns, research keywords, set bids, optimize ACOS, and scale winning ads for US and international marketplaces.',
   'I manage Amazon PPC for seller clients — exact match, broad, auto, and brand campaigns with weekly bid adjustments and negative keyword lists.',
   ['Campaign structure', 'Keyword research', 'Sponsored Products setup', 'Sponsored Brands ads', 'ACOS optimization', 'Weekly performance report'],
   '5–7 days setup', '2 optimization rounds'),
  ('amazon-seo', 'Amazon SEO', 7500, 'Amazon', 4.8,
   'I will optimize your Amazon listings for A9 search ranking and conversions.',
   'Rank higher in Amazon search. I optimize titles, bullet points, backend keywords, A+ content guidance, and competitor keyword gaps for your ASINs.',
   'Amazon SEO is different from Google SEO. I use Helium 10 / Jungle Scout style research to find keywords that drive organic Amazon sales.',
   ['Listing title optimization', 'Bullet points rewrite', 'Backend keyword research', 'Competitor ASIN analysis', 'A+ content guidance', 'Indexing check'],
   '3–5 days', '2 revision rounds'),
]


def esc(s):
    return s.replace("'", "\\'")


def render_service(i, s):
    slug, name, price, tag, rating, short, desc, gig, includes, delivery, revisions = s
    inc = ', '.join(f"'{esc(x)}'" for x in includes)
    return f"""  {{
    slug: '{slug}',
    name: '{esc(name)}',
    price: {price},
    tag: '{tag}',
    image: serviceImage('{slug}'),
    sold: SOLD_COUNTS[{i}],
    rating: {rating},
    short: '{esc(short)}',
    description: '{esc(desc)}',
    gigDetail: '{esc(gig)}',
    includes: [{inc}],
    delivery: '{delivery}',
    revisions: '{revisions}'
  }}"""


body = ',\n'.join(render_service(i, s) for i, s in enumerate(SERVICES))
out = HEADER + body + FOOTER
path = Path(r'E:\nazmul-projects\portfolio\js\services-data.js')
path.write_text(out, encoding='utf-8')
print(f'wrote {len(SERVICES)} services -> {path}')