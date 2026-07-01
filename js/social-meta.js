(function () {
  const SITE_URL = 'https://portfolio-eight-red-48.vercel.app';
  const defaults = {
    title: 'MD Nazmul Hasan — Web Developer · Google Ads · Meta Ads',
    description: 'Hire MD Nazmul Hasan for web development, Google Ads, Meta Ads, SEO, e-commerce stores & more. 200+ happy clients · Revenue $3000+ · 4+ years experience.',
    image: SITE_URL + '/assets/og-share.jpg?v=circle2',
    url: SITE_URL + '/',
    type: 'website'
  };

  function setMeta(name, content, prop) {
    if (!content) return;
    const attr = prop ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  const data = { ...defaults, ...(window.PAGE_SEO || {}) };
  if (!data.url.startsWith('http')) data.url = SITE_URL + (data.url.startsWith('/') ? '' : '/') + data.url;
  if (!data.image.startsWith('http')) data.image = SITE_URL + '/' + data.image.replace(/^\//, '');

  document.title = data.title;
  setMeta('description', data.description);
  setMeta('og:title', data.title, true);
  setMeta('og:description', data.description, true);
  setMeta('og:image', data.image, true);
  setMeta('og:url', data.url, true);
  setMeta('og:type', data.type, true);
  setMeta('og:site_name', 'MD Nazmul Hasan', true);
  setMeta('og:image:width', '1200', true);
  setMeta('og:image:height', '630', true);
  setMeta('twitter:card', 'summary_large_image');
  setMeta('twitter:title', data.title);
  setMeta('twitter:description', data.description);
  setMeta('twitter:image', data.image);
})();