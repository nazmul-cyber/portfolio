"""Download official payment brand logos into assets/payments/."""
import os
import urllib.request

OUT = r'E:\nazmul-projects\portfolio\assets\payments'

# Primary sources: Wikimedia, logo.wine, official sites
LOGOS = [
    ('bkash.svg', 'https://www.logo.wine/a/logo/BKash/BKash-Logo.wine.svg'),
    ('nagad.svg', 'https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg'),
    ('rocket.svg', 'https://upload.wikimedia.org/wikipedia/commons/4/45/Rocket_mobile_banking_logo.svg'),
    ('upay.png', 'https://www.upaybd.com/images/Upay-logo-revised-new.png'),
    ('stripe.svg', 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg'),
    ('binance.svg', 'https://www.logo.wine/a/logo/Binance/Binance-Logo.wine.svg'),
    ('mercury.png', 'https://logo.clearbit.com/mercury.com'),
]


def fetch(name, url):
    path = os.path.join(OUT, name)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    if len(data) < 300:
        raise ValueError('too small')
    with open(path, 'wb') as f:
        f.write(data)
    print('ok', name, len(data))


def mercury_fallback():
    """Mercury Bank wordmark on brand blue."""
    svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 48" role="img" aria-label="Mercury">
  <rect width="200" height="48" rx="10" fill="#5266EB"/>
  <g fill="#fff" transform="translate(14,10)">
    <circle cx="14" cy="14" r="13" fill="none" stroke="#fff" stroke-width="2.5"/>
    <path d="M14 6v16M8 12h12" stroke="#5266EB" stroke-width="2.5"/>
    <circle cx="14" cy="14" r="4" fill="#5266EB"/>
  </g>
  <text x="46" y="31" font-family="Arial,Helvetica,sans-serif" font-size="20" font-weight="700" fill="#fff">Mercury</text>
</svg>'''
    path = os.path.join(OUT, 'mercury.svg')
    with open(path, 'w', encoding='utf-8') as f:
        f.write(svg)
    print('ok mercury.svg (fallback)')


def main():
    os.makedirs(OUT, exist_ok=True)
    for name, url in LOGOS:
        try:
            fetch(name, url)
        except Exception as e:
            print('fail', name, e)
    if not os.path.exists(os.path.join(OUT, 'mercury.png')):
        mercury_fallback()
    else:
        print('ok mercury.png from clearbit')


if __name__ == '__main__':
    main()