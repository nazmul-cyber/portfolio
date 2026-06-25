const HAPPY_CUSTOMERS = 200;
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
    slug: 'fullstack-api-development',
    name: 'Full-Stack API Development',
    price: 12000,
    tag: 'Development',
    image: serviceImage('fullstack-api-development'),
    sold: SOLD_COUNTS[2],
    rating: 4.9,
    short: 'I will build REST APIs, admin backends and database layers for your web app.',
    description: 'Need a solid backend behind your store or SaaS? I build Node/Express or Laravel APIs with authentication, CRUD, webhooks, and admin endpoints — production-ready and documented.',
    gigDetail: 'I build the same API patterns I use on my live stores — clean routes, secure auth, and integrations with payment gateways and third-party services.',
    includes: ['REST API design', 'Auth & user roles', 'Database schema', 'Admin endpoints', 'API documentation', 'Deployment help'],
    delivery: '7–12 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'shopify-setup',
    name: 'Shopify Store Setup',
    price: 12000,
    tag: 'E-Commerce',
    image: serviceImage('shopify-setup'),
    sold: SOLD_COUNTS[3],
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
    sold: SOLD_COUNTS[4],
    rating: 4.9,
    short: 'I will build your complete online store — design, payments, admin and policies.',
    description: 'The full package. I design, develop, and launch your e-commerce store with product catalog, payment gateways, policy pages, admin panel, and mobile optimization. Launch-ready in 10–21 days.',
    gigDetail: 'This is what I do for my own brands daily. You get the same quality I put into zuomio.com, mediacube.store, and arafatllc.shop — proven stores generating real revenue.',
    includes: ['Custom store design', 'Up to 100 products', 'Payment gateway setup', 'Policy pages (Terms, Privacy, Refund)', 'Admin panel', 'Mobile PWA ready'],
    delivery: '10–21 days',
    revisions: '3 revisions included'
  },
  {
    slug: 'wordpress-store',
    name: 'WordPress E-Commerce Store',
    price: 10000,
    tag: 'E-Commerce',
    image: serviceImage('wordpress-store'),
    sold: SOLD_COUNTS[5],
    rating: 4.8,
    short: 'I will build your WooCommerce WordPress store — theme, products and payments.',
    description: 'Need a WordPress store that is easy to manage? I set up WooCommerce with premium theme, product catalog, payment gateways, SEO plugins, and admin training.',
    gigDetail: 'WordPress is perfect for clients who want to edit products themselves. I deliver a fast, secure WooCommerce store with the same conversion focus as my custom builds.',
    includes: ['WooCommerce setup', 'Theme customization', 'Up to 50 products', 'Payment & shipping config', 'SEO plugin setup', 'Admin walkthrough'],
    delivery: '5–10 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'php-laravel-store',
    name: 'PHP Laravel Store',
    price: 14000,
    tag: 'E-Commerce',
    image: serviceImage('php-laravel-store'),
    sold: SOLD_COUNTS[6],
    rating: 4.9,
    short: 'I will build a custom PHP Laravel e-commerce store with admin panel.',
    description: 'Enterprise-grade custom store on Laravel — product management, orders, users, payments, and scalable backend. Ideal for brands that outgrow WordPress or Shopify.',
    gigDetail: 'Laravel gives you full control. I build MVC architecture, Blade templates, MySQL database, and admin dashboards — the same professional stack agencies charge $5k+ for.',
    includes: ['Laravel MVC build', 'Admin dashboard', 'Product & order management', 'Payment integration', 'User auth system', 'Deployment on VPS'],
    delivery: '10–18 days',
    revisions: '3 revisions included'
  },
  {
    slug: 'seo-optimization',
    name: 'SEO Optimization',
    price: 6000,
    tag: 'SEO',
    image: serviceImage('seo-optimization'),
    sold: SOLD_COUNTS[7],
    rating: 4.8,
    short: 'I will optimize your website SEO for Google ranking — meta tags, schema and GSC.',
    description: 'Your products are great but Google cannot find them? I run a complete on-page SEO audit and fix everything — titles, meta descriptions, headings, alt tags, sitemap, robots.txt, and structured data.',
    gigDetail: 'Pro-level SEO for e-commerce and service sites. I set up Google Search Console, fix indexing issues, and optimize product pages so you start getting organic traffic within weeks.',
    includes: ['Keyword research', 'Meta tag optimization', 'Google Search Console', 'Sitemap & robots.txt', 'Product page SEO', 'Performance report'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'local-seo',
    name: 'Local SEO',
    price: 5500,
    tag: 'SEO',
    image: serviceImage('local-seo'),
    sold: SOLD_COUNTS[8],
    rating: 4.8,
    short: 'I will optimize your Google Business Profile and local search rankings.',
    description: 'Get found in "near me" searches. I optimize Google Business Profile, local citations, NAP consistency, map pack keywords, and location pages for Bangladesh and international markets.',
    gigDetail: 'Perfect for shops, clinics, restaurants, and service businesses that need local foot traffic and phone calls from Google Maps.',
    includes: ['Google Business Profile setup', 'Local keyword research', 'Citation & NAP audit', 'Map pack optimization', 'Review strategy', 'Monthly report'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-Commerce SEO',
    price: 7000,
    tag: 'SEO',
    image: serviceImage('ecommerce-seo'),
    sold: SOLD_COUNTS[9],
    rating: 4.9,
    short: 'I will optimize product pages, categories and schema for e-commerce SEO.',
    description: 'Rank your products on Google. I optimize category pages, product titles, schema markup, internal linking, and Search Console for stores on Shopify, WordPress, or custom React builds.',
    gigDetail: 'I SEO my own stores daily — zuomio.com, bubu-dudu.store, and client shops. You get keyword-mapped product pages that actually index and convert.',
    includes: ['Product page SEO', 'Category optimization', 'Schema & rich results', 'Internal linking plan', 'GSC indexing fixes', 'Competitor keyword map'],
    delivery: '4–6 days',
    revisions: '1 revision included'
  },
  {
    slug: 'website-speed-fix',
    name: 'Website Speed Fix',
    price: 4500,
    tag: 'Performance',
    image: serviceImage('website-speed-fix'),
    sold: SOLD_COUNTS[10],
    rating: 4.9,
    short: 'I will fix your website speed — PageSpeed, Lighthouse and Core Web Vitals.',
    description: 'A 1-second delay costs you 7% in conversions. I diagnose and fix every bottleneck — image compression, lazy loading, render-blocking scripts, and Core Web Vitals on mobile and desktop.',
    gigDetail: 'Before/after Lighthouse report included. Most clients see PageSpeed scores jump from 40–60 to 85–95 after my optimization pass.',
    includes: ['Lighthouse audit', 'Image compression & WebP', 'Lazy loading setup', 'Core Web Vitals fixes', 'Before/after report', 'Mobile tuning'],
    delivery: '2–4 days',
    revisions: '1 revision included'
  },
  {
    slug: 'core-web-vitals-fix',
    name: 'Core Web Vitals Fix',
    price: 5000,
    tag: 'Performance',
    image: serviceImage('core-web-vitals-fix'),
    sold: SOLD_COUNTS[11],
    rating: 4.9,
    short: 'I will fix LCP, CLS and INP — pass Google Core Web Vitals.',
    description: 'Google uses Core Web Vitals for ranking. I fix Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint on your live site with measurable before/after reports.',
    gigDetail: 'Most sites fail on mobile LCP and CLS. I target the exact elements Google flags — hero images, fonts, layout shifts, and slow JavaScript — until your site passes.',
    includes: ['CWV audit report', 'LCP optimization', 'CLS layout fixes', 'INP / TBT tuning', 'Mobile field data check', 'Before/after scores'],
    delivery: '2–4 days',
    revisions: '1 revision included'
  },
  {
    slug: 'mobile-page-speed',
    name: 'Mobile Page Speed',
    price: 4000,
    tag: 'Performance',
    image: serviceImage('mobile-page-speed'),
    sold: SOLD_COUNTS[12],
    rating: 4.8,
    short: 'I will boost your mobile PageSpeed score to 85+ on real devices.',
    description: 'Mobile traffic is 70%+ of e-commerce. I optimize mobile-specific bottlenecks — image sizes, font loading, third-party scripts, and touch UI performance.',
    gigDetail: 'I specialize in mobile-first stores. Clients typically jump from 35–55 mobile PageSpeed to 85–95 without changing their design.',
    includes: ['Mobile Lighthouse audit', 'Responsive image tuning', 'Script defer & lazy load', 'Font & CSS optimization', 'AMP / PWA tips', 'Score report'],
    delivery: '2–3 days',
    revisions: '1 revision included'
  },
  {
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    price: 10000,
    tag: 'Marketing',
    image: serviceImage('digital-marketing'),
    sold: SOLD_COUNTS[13],
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
    sold: SOLD_COUNTS[14],
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
    sold: SOLD_COUNTS[15],
    rating: 4.9,
    short: 'I will set up and optimize Google Ads — Search, Display, Shopping and YouTube.',
    description: 'AI-driven Google Ads for D2C brands and e-commerce. I build Search, Performance Max, and Shopping campaigns with proper conversion tracking, keyword strategy, and weekly optimization.',
    gigDetail: 'Pro Google Ads setup like top course sellers: campaign structure, GA4 + GTM tracking, negative keywords, bid strategy, and dashboard-based reporting. Lower CPA and scale ROAS.',
    includes: ['Campaign structure', 'Conversion tracking', 'Keyword research', 'Shopping / PMax setup', 'Weekly optimization', 'Dashboard reporting'],
    delivery: '5–7 days setup',
    revisions: '2 optimization rounds'
  },
  {
    slug: 'stripe-setup',
    name: 'Stripe Payment Setup',
    price: 8000,
    tag: 'Payments',
    image: serviceImage('stripe-setup'),
    sold: SOLD_COUNTS[16],
    rating: 4.9,
    short: 'I will set up Stripe payments for your US business — checkout and webhooks.',
    description: 'Accept card payments on your store. I configure Stripe from account verification to live checkout — products, webhooks, test transactions, and go-live checklist for your e-commerce site.',
    gigDetail: 'I run Stripe on my own US stores daily. You get a fully tested payment flow — card checkout, order webhooks, and mobile-friendly payment pages that actually work.',
    includes: ['Stripe account setup', 'Checkout integration', 'Webhook configuration', 'Test transactions', 'Go-live checklist', 'Mobile checkout tuning'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'us-payment-gateway',
    name: 'US Payment Gateway',
    price: 8000,
    tag: 'Payments',
    image: serviceImage('us-payment-gateway'),
    sold: SOLD_COUNTS[17],
    rating: 4.8,
    short: 'I will set up Stripe, Mercury, Payoneer, Binance Pay and bank transfer for your business.',
    description: 'Accept payments globally. I integrate Stripe, Mercury Bank, Payoneer, Binance Pay, and bank transfers into your store with proper webhook handling, test transactions, and a go-live checklist.',
    gigDetail: 'I set up Mercury, Payoneer, and Stripe for US LLC stores and international clients daily. No guesswork — tested checkout and payout flows that work on mobile and desktop.',
    includes: ['Stripe integration', 'Mercury Bank setup', 'Payoneer setup', 'Binance Pay', 'Bank transfer setup', 'Go-live checklist'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'bd-payment-gateway',
    name: 'BD Payment Gateway',
    price: 5000,
    tag: 'Payments',
    image: serviceImage('bd-payment-gateway'),
    sold: SOLD_COUNTS[18],
    rating: 4.9,
    short: 'I will set up bKash, Nagad, Rocket, Upay, bank and COD for Bangladesh.',
    description: 'Full Bangladesh payment setup. I configure bKash, Nagad, Rocket, Upay, bank transfer, COD, and SSLCommerz with checkout flows optimized for BD customers. Send payment to +8801969827902.',
    gigDetail: 'I own bubu-dudu.store — a production Bangladesh PWA with COD, bKash guidance, and local checkout. I know what BD customers expect at checkout.',
    includes: ['bKash integration', 'Nagad / Rocket / Upay', 'Bank transfer setup', 'COD configuration', 'SSLCommerz', 'BD checkout UX'],
    delivery: '2–4 days',
    revisions: '1 revision included'
  },
  {
    slug: 'us-llc-formation',
    name: 'US LLC Formation',
    price: 10000,
    tag: 'Business',
    image: serviceImage('us-llc-formation'),
    sold: SOLD_COUNTS[19],
    rating: 5.0,
    short: 'I will register your Wyoming LLC within 72 hours — full legal setup.',
    description: 'Want to sell in the US legally? I handle Wyoming LLC formation end-to-end — Articles of Organization, Registered Agent, Operating Agreement, plus guides for Mercury, Payoneer, and Stripe onboarding.',
    gigDetail: 'I formed my own LLC (Zuomio LLC) and use it daily. I know exactly what documents you need and how to avoid common rejection mistakes with Mercury, Payoneer, and other payment processors.',
    includes: ['Articles of Organization', 'Registered Agent (1 year)', 'Operating Agreement', 'EIN guidance', 'Mercury & Payoneer guide', 'Stripe setup guide'],
    delivery: 'Within 72 hours',
    revisions: 'Document corrections included'
  },
  {
    slug: 'mercury-bank-setup',
    name: 'Mercury Bank Setup',
    price: 8000,
    tag: 'Business',
    image: serviceImage('mercury-bank-setup'),
    sold: SOLD_COUNTS[20],
    rating: 4.9,
    short: 'I will open your Mercury business bank account for your US LLC.',
    description: 'Need a US business bank account? I guide you through Mercury Bank application step-by-step — document prep, LLC verification, and account activation for your Wyoming or Delaware LLC.',
    gigDetail: 'I opened Mercury for my own Zuomio LLC. I know the exact documents, common rejection reasons, and how to get approved fast so you can connect Stripe and start receiving payments.',
    includes: ['Mercury application prep', 'LLC document checklist', 'Rejection fix guidance', 'Account activation help', 'Stripe connection guide', 'Banking best practices'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'payoneer-setup',
    name: 'Payoneer Setup',
    price: 8000,
    tag: 'Business',
    image: serviceImage('payoneer-setup'),
    sold: SOLD_COUNTS[21],
    rating: 4.9,
    short: 'I will set up your Payoneer business account for US & global payouts.',
    description: 'Receive international payments without a US bank account. I guide Payoneer registration, identity verification, USD receiving account setup, and connecting Payoneer to your store or marketplace.',
    gigDetail: 'I use Payoneer for cross-border payouts on US and international projects. You get a verified account, receiving details, and integration guidance for Stripe alternatives, Amazon, Fiverr, and your own store.',
    includes: ['Payoneer account registration', 'ID & business verification', 'USD receiving account setup', 'Store / marketplace linking', 'Withdrawal to local bank guide', 'Payout best practices'],
    delivery: '3–5 days',
    revisions: '1 revision included'
  },
  {
    slug: 'ein-application',
    name: 'EIN Application',
    price: 5000,
    tag: 'Business',
    image: serviceImage('ein-application'),
    sold: SOLD_COUNTS[22],
    rating: 5.0,
    short: 'I will get your US EIN (Employer Identification Number) for your LLC.',
    description: 'Every US LLC needs an EIN for banking, Stripe, and taxes. I prepare and file your IRS EIN application (SS-4) correctly — avoid rejections and delays.',
    gigDetail: 'I got EIN for Zuomio LLC and help clients weekly. You get step-by-step filing, IRS confirmation, and a guide for using EIN with Mercury, Stripe, and Amazon.',
    includes: ['SS-4 preparation', 'IRS online filing guide', 'Responsible party setup', 'EIN confirmation letter', 'Bank & Stripe linking guide', 'Tax ID best practices'],
    delivery: '1–3 days',
    revisions: 'Refile support included'
  },
  {
    slug: 'itin-application',
    name: 'ITIN Application',
    price: 6000,
    tag: 'Business',
    image: serviceImage('itin-application'),
    sold: SOLD_COUNTS[23],
    rating: 4.9,
    short: 'I will guide your US ITIN application for non-US residents.',
    description: 'Non-US residents selling in America often need an ITIN. I guide Form W-7 preparation, document checklist, IRS submission, and follow-up for Bangladesh and international clients.',
    gigDetail: 'Cross-border sellers trust me for US tax ID setup. I explain exactly which documents you need and how to avoid the most common IRS rejection reasons.',
    includes: ['Form W-7 preparation', 'Document checklist', 'IRS submission guide', 'Certified copy guidance', 'Follow-up support', 'US tax ID usage guide'],
    delivery: '3–7 days',
    revisions: 'Document corrections included'
  },
  {
    slug: 'ai-automation',
    name: 'AI Automation',
    price: 10000,
    tag: 'Automation',
    image: serviceImage('ai-automation'),
    sold: SOLD_COUNTS[24],
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
    sold: SOLD_COUNTS[25],
    rating: 4.7,
    short: 'I will edit product videos, ad reels and social clips for your brand.',
    description: 'Professional video editing for e-commerce and social media. Product showcases, Instagram Reels, Facebook ad videos, unboxing edits with captions, transitions, and music.',
    gigDetail: 'Up to 5 videos (30–60 sec each), brand-matched style, captions/subtitles, and 2 revision rounds. Optimized for Reels, Shorts, and Facebook ads.',
    includes: ['Up to 5 videos (30–60 sec)', 'Captions & subtitles', 'Brand-matched transitions', 'Music & sound design', 'Reels & Shorts format', '2 revision rounds'],
    delivery: '3–7 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'ai-video-making',
    name: 'AI Video Making',
    price: 7000,
    tag: 'Creative',
    image: serviceImage('ai-video-making'),
    sold: SOLD_COUNTS[26],
    rating: 4.8,
    short: 'I will create AI-generated product and ad videos for your brand.',
    description: 'Fast, affordable video content using AI tools — product promos, UGC-style ads, explainers, and social clips without expensive shoots.',
    gigDetail: 'I combine AI video generators with manual editing for polished results. Perfect for e-commerce brands that need daily Reels and ad creatives on a budget.',
    includes: ['AI script & storyboard', 'Up to 3 AI videos (30–60s)', 'Voiceover & captions', 'Brand-matched style', 'Reels & Shorts format', '2 revision rounds'],
    delivery: '3–5 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'custom-ai-video',
    name: 'Custom AI Video',
    price: 9000,
    tag: 'Creative',
    image: serviceImage('custom-ai-video'),
    sold: SOLD_COUNTS[27],
    rating: 4.9,
    short: 'I will produce custom AI avatar videos tailored to your script and brand.',
    description: 'Premium AI video with custom scripts, branded avatars, product demos, and multilingual voiceovers — for ads, landing pages, and training content.',
    gigDetail: 'Go beyond template AI clips. I craft a unique visual style, custom script, branded elements, and manual polish so your AI video looks professional — not generic.',
    includes: ['Custom script writing', 'Branded AI avatar / visuals', 'Up to 5 min final video', 'Multilingual voiceover option', 'Captions & music', '3 revision rounds'],
    delivery: '5–8 days',
    revisions: '3 revisions included'
  },
  {
    slug: 'amazon-business',
    name: 'Amazon Business',
    price: 9000,
    tag: 'Amazon',
    image: serviceImage('amazon-business'),
    sold: SOLD_COUNTS[28],
    rating: 4.8,
    short: 'I will set up your Amazon seller account and optimize product listings.',
    description: 'Launch and grow on Amazon. Seller account setup, product research, SEO-optimized listings with bullet points, inventory guidance, and cross-border strategy.',
    gigDetail: 'Fiverr Pro-style Amazon gig: account verification help, 5 niche product research reports, listing optimization with keywords, and inventory management guidance.',
    includes: ['Seller account setup', 'Product research (5 niches)', 'Listing optimization', 'Keyword research', 'Inventory guidance', 'Cross-border strategy'],
    delivery: '5–10 days',
    revisions: '2 revisions included'
  },
  {
    slug: 'amazon-ppc',
    name: 'Amazon PPC Management',
    price: 8500,
    tag: 'Amazon',
    image: serviceImage('amazon-ppc'),
    sold: SOLD_COUNTS[29],
    rating: 4.9,
    short: 'I will set up and optimize Amazon Sponsored Products & Brands PPC campaigns.',
    description: 'Get sales on Amazon with profitable PPC. I structure campaigns, research keywords, set bids, optimize ACOS, and scale winning ads for US and international marketplaces.',
    gigDetail: 'I manage Amazon PPC for seller clients — exact match, broad, auto, and brand campaigns with weekly bid adjustments and negative keyword lists.',
    includes: ['Campaign structure', 'Keyword research', 'Sponsored Products setup', 'Sponsored Brands ads', 'ACOS optimization', 'Weekly performance report'],
    delivery: '5–7 days setup',
    revisions: '2 optimization rounds'
  },
  {
    slug: 'amazon-seo',
    name: 'Amazon SEO',
    price: 7500,
    tag: 'Amazon',
    image: serviceImage('amazon-seo'),
    sold: SOLD_COUNTS[30],
    rating: 4.8,
    short: 'I will optimize your Amazon listings for A9 search ranking and conversions.',
    description: 'Rank higher in Amazon search. I optimize titles, bullet points, backend keywords, A+ content guidance, and competitor keyword gaps for your ASINs.',
    gigDetail: 'Amazon SEO is different from Google SEO. I use Helium 10 / Jungle Scout style research to find keywords that drive organic Amazon sales.',
    includes: ['Listing title optimization', 'Bullet points rewrite', 'Backend keyword research', 'Competitor ASIN analysis', 'A+ content guidance', 'Indexing check'],
    delivery: '3–5 days',
    revisions: '2 revision rounds'
  }];

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
