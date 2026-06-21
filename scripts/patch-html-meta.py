"""Inject favicon + static OG/Twitter meta + social-meta.js into all HTML pages."""
import os
import re

ROOT = r'E:\nazmul-projects\portfolio'
SITE = 'https://portfolio-eight-red-48.vercel.app'
OG_IMG = f'{SITE}/assets/og-share.jpg?v=circle2'

PAGES = {
    'index.html': {
        'title': 'MD Nazmul Hasan — Web Developer · Google Ads · Meta Ads',
        'description': 'Hire MD Nazmul Hasan for web development, Google Ads, Meta Ads, SEO, e-commerce stores & more. 3000+ happy clients · 4+ years experience.',
        'url': f'{SITE}/',
    },
    'services.html': {
        'title': 'Services — MD Nazmul Hasan',
        'description': 'Order web development, Google Ads, Meta Ads, SEO, Shopify, payment gateways & more from MD Nazmul Hasan.',
        'url': f'{SITE}/services.html',
    },
    'service.html': {
        'title': 'Service — MD Nazmul Hasan',
        'description': 'Professional digital services by MD Nazmul Hasan — Google Ads, Meta Ads, web development & e-commerce.',
        'url': f'{SITE}/service.html',
    },
    'projects.html': {
        'title': 'Live Projects — MD Nazmul Hasan',
        'description': 'Live e-commerce stores and websites built by MD Nazmul Hasan — Zuomio, MediaCube, Lumiere Beauty & more.',
        'url': f'{SITE}/projects.html',
    },
    'order.html': {
        'title': 'Your Order — MD Nazmul Hasan',
        'description': 'Complete your service order with MD Nazmul Hasan.',
        'url': f'{SITE}/order.html',
    },
    'why-hire.html': {
        'title': 'Why Hire Me — MD Nazmul Hasan',
        'description': 'Why hire MD Nazmul Hasan? 3000+ happy clients, 4+ years experience, live stores & proven ad campaigns.',
        'url': f'{SITE}/why-hire.html',
    },
    'faq.html': {
        'title': 'FAQ — MD Nazmul Hasan',
        'description': 'Frequently asked questions about hiring MD Nazmul Hasan for web dev, Google Ads & Meta Ads.',
        'url': f'{SITE}/faq.html',
    },
    'privacy.html': {
        'title': 'Privacy Policy — MD Nazmul Hasan',
        'description': 'Privacy policy for MD Nazmul Hasan portfolio and services.',
        'url': f'{SITE}/privacy.html',
    },
    'terms.html': {
        'title': 'Terms of Service — MD Nazmul Hasan',
        'description': 'Terms of service for MD Nazmul Hasan digital services.',
        'url': f'{SITE}/terms.html',
    },
    'refund.html': {
        'title': 'Refund Policy — MD Nazmul Hasan',
        'description': 'Refund policy for MD Nazmul Hasan services.',
        'url': f'{SITE}/refund.html',
    },
}

ICON_BLOCK = """  <link rel="icon" type="image/png" href="assets/favicon.png" />
  <link rel="apple-touch-icon" href="assets/logo-icon.png" />"""

def og_block(seo):
    t, d, u = seo['title'], seo['description'], seo['url']
    return f"""  <meta name="description" content="{d}" />
  <meta property="og:title" content="{t}" />
  <meta property="og:description" content="{d}" />
  <meta property="og:image" content="{OG_IMG}" />
  <meta property="og:url" content="{u}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MD Nazmul Hasan" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{t}" />
  <meta name="twitter:description" content="{d}" />
  <meta name="twitter:image" content="{OG_IMG}" />
  <title>{t}</title>
{ICON_BLOCK}
  <script src="js/social-meta.js"></script>"""


SERVICE_HEAD_EXTRA = """
  <script src="js/services-data.js"></script>
  <script>
  (function () {
    var m = /[?&]slug=([^&]+)/.exec(location.search);
    if (!m || typeof PORTFOLIO_SERVICES === 'undefined') return;
    var slug = decodeURIComponent(m[1]);
    var s = PORTFOLIO_SERVICES.find(function (x) { return x.slug === slug; });
    if (!s) return;
    var base = 'https://portfolio-eight-red-48.vercel.app';
    window.PAGE_SEO = {
      title: s.name + ' — MD Nazmul Hasan',
      description: s.short,
      image: base + '/' + s.image.split('?')[0],
      url: base + '/service.html?slug=' + s.slug,
      type: 'website'
    };
  })();
  </script>"""


for fname, seo in PAGES.items():
    path = os.path.join(ROOT, fname)
    with open(path, encoding='utf-8') as f:
        html = f.read()

    html = re.sub(r'<link rel="icon"[^>]+>\s*', '', html)
    html = re.sub(r'<link rel="apple-touch-icon"[^>]+>\s*', '', html)
    html = re.sub(r'<meta name="description"[^>]+>\s*', '', html)
    html = re.sub(r'<title>[^<]+</title>\s*', '', html)
    html = re.sub(r'<script src="js/social-meta\.js"></script>\s*', '', html)

    insert = og_block(seo)
    if fname == 'service.html':
        insert = SERVICE_HEAD_EXTRA + '\n' + insert

    html = re.sub(
        r'(<meta name="viewport"[^>]+>\s*)',
        r'\1' + insert + '\n',
        html,
        count=1
    )

    if fname == 'service.html':
        html = re.sub(
            r'(<footer[^>]*>.*?</footer>\s*)<script src="js/services-data\.js"></script>\s*',
            r'\1',
            html,
            count=1,
            flags=re.DOTALL
        )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('patched', fname)

print('done')