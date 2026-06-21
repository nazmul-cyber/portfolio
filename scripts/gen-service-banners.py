"""
Premium service banners — clear titles, readable service details, small profile pic.
"""
from PIL import Image, ImageDraw, ImageFont
import os
import math

OUT = r'E:\nazmul-projects\portfolio\assets\services'
BANNER_FACE = r'E:\nazmul-projects\portfolio\assets\source\service-banner-face.jpg'
W, H = 1200, 675

# slug, title, lines[], tag, c1, c2, badge, icon
SERVICES = [
    ('web-app-development', 'Web App Development',
     ['Custom React store & admin panel', 'Cart, checkout & mobile UI', 'Deployed on Vercel — production ready'],
     'DEVELOPMENT', (30, 58, 138), (59, 130, 246), 'popular', 'code'),
    ('tailored-website', 'Tailored Website',
     ['100% custom design — not a template', 'Your brand, your layout, your goals', 'SEO-ready & fast on every device'],
     'DEVELOPMENT', (79, 70, 229), (139, 92, 246), 'popular', 'design'),
    ('seo-optimization', 'SEO Optimization',
     ['Google ranking & keyword strategy', 'Meta tags, schema & Search Console', 'On-page + technical SEO audit'],
     'SEO', (6, 78, 59), (16, 185, 129), 'best-deal', 'search'),
    ('website-speed-fix', 'Website Speed Fix',
     ['Lighthouse score 90+ target', 'Core Web Vitals optimization', 'Image, cache & code performance'],
     'PERFORMANCE', (146, 64, 14), (245, 158, 11), 'best-deal', 'speed'),
    ('us-llc-formation', 'US LLC Formation',
     ['Wyoming LLC — full setup', 'Articles, agent & operating agreement', 'Bank & Stripe onboarding guide'],
     'BUSINESS', (30, 64, 175), (59, 130, 246), None, 'business'),
    ('mercury-bank-setup', 'Mercury Bank Setup',
     ['US business bank account', 'LLC-ready Mercury application', 'Wire & ACH for your store'],
     'BUSINESS', (67, 97, 238), (99, 102, 241), None, 'bank'),
    ('stripe-setup', 'Stripe Setup',
     ['Checkout, webhooks & subscriptions', 'Test mode → live payments', 'Fraud rules & payout settings'],
     'PAYMENTS', (99, 91, 255), (139, 92, 246), 'popular', 'stripe'),
    ('shopify-setup', 'Shopify Store Setup',
     ['Theme install & customization', 'Products, collections & apps', 'Full store audit included'],
     'E-COMMERCE', (22, 101, 52), (34, 197, 94), None, 'shop'),
    ('ecommerce-store-build', 'E-Commerce Store Build',
     ['Full launch — design to go-live', 'Payments, admin & policies', 'Same stack as my live stores'],
     'E-COMMERCE', (157, 23, 77), (236, 72, 153), 'popular', 'cart'),
    ('us-payment-gateway', 'US Payment Gateway',
     ['Stripe, PayPal & card processing', 'Apple Pay & Google Pay setup', 'US bank & crypto options'],
     'PAYMENTS', (3, 105, 161), (14, 165, 233), None, 'pay'),
    ('bd-payment-gateway', 'BD Payment Gateway',
     ['bKash, Nagad, Rocket & Upay', 'SSLCommerz & COD integration', 'Checkout for Bangladesh stores'],
     'PAYMENTS', (157, 23, 77), (225, 29, 72), 'best-deal', 'bdpay'),
    ('digital-marketing', 'Digital Marketing',
     ['ROI-focused ad campaigns', 'Audience research & creatives', 'Weekly performance reports'],
     'MARKETING', (29, 78, 216), (37, 99, 235), None, 'chart'),
    ('google-ads', 'Google Ads',
     ['Search, Display, Shopping & YouTube', 'AI-driven campaigns for D2C brands', 'Conversion tracking & dashboards'],
     'MARKETING', (26, 115, 232), (66, 133, 244), 'popular', 'google'),
    ('meta-ads', 'Meta Ads',
     ['Facebook & Instagram campaigns', 'Server-side tracking setup', 'ROAS optimization after Andromeda'],
     'MARKETING', (24, 119, 242), (37, 99, 235), 'popular', 'meta'),
    ('ai-automation', 'AI Automation',
     ['Chatbots for customer support', 'Workflow & order automation', 'AI tools integrated in your store'],
     'AUTOMATION', (88, 28, 135), (139, 92, 246), None, 'ai'),
    ('video-editing', 'Video Editing',
     ['Reels, ads & product videos', 'CapCut Pro style editing', '40GB resource pack included'],
     'CREATIVE', (8, 145, 178), (6, 182, 212), 'best-deal', 'video'),
    ('amazon-business', 'Amazon Business',
     ['Seller Central account setup', 'Listing SEO & keyword research', 'PPC campaigns & inventory tips'],
     'AMAZON', (194, 65, 12), (249, 115, 22), None, 'amazon'),
]

def fonts():
    try:
        return (
            ImageFont.truetype('arialbd.ttf', 52),
            ImageFont.truetype('arialbd.ttf', 28),
            ImageFont.truetype('arialbd.ttf', 17),
            ImageFont.truetype('arial.ttf', 14),
        )
    except OSError:
        d = ImageFont.load_default()
        return d, d, d, d


def paste_circle_face(img, cx, cy, size=148):
    """Face-only circle — no white ring, no icon."""
    if not os.path.isfile(BANNER_FACE):
        return
    face = Image.open(BANNER_FACE).convert('RGB')
    fw, fh = face.size
    side = min(fw, fh)
    left = (fw - side) // 2
    top = max(0, int((fh - side) * 0.06))
    face = face.crop((left, top, left + side, top + side))
    face = face.resize((size, size), Image.Resampling.LANCZOS)
    mask = Image.new('L', (size, size), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
    img.paste(face, (cx - size // 2, cy - size // 2), mask)


def gradient(img, draw, c1, c2):
    for y in range(H):
        t = y / H
        col = (
            int(c1[0] + (c2[0] - c1[0]) * t),
            int(c1[1] + (c2[1] - c1[1]) * t),
            int(c1[2] + (c2[2] - c1[2]) * t),
        )
        draw.line([(0, y), (W, y)], fill=col)
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.ellipse((W - 280, -80, W + 80, 280), fill=(255, 255, 255, 18))
    od.ellipse((W - 120, 380, W + 200, 700), fill=(0, 0, 0, 35))
    img.paste(overlay, (0, 0), overlay)


def wrap(draw, text, font, max_w):
    words = text.split()
    lines, cur = [], []
    for w in words:
        test = ' '.join(cur + [w])
        bb = draw.textbbox((0, 0), test, font=font)
        if bb[2] - bb[0] > max_w and cur:
            lines.append(' '.join(cur))
            cur = [w]
        else:
            cur.append(w)
    if cur:
        lines.append(' '.join(cur))
    return lines


def badge(draw, text, x, y, color, f):
    bb = draw.textbbox((0, 0), text, font=f)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    draw.rounded_rectangle((x, y, x + tw + 22, y + th + 12), radius=6, fill=color)
    draw.text((x + 11, y + 4), text, fill='white', font=f)
    return tw + 22


def service_pill(img, draw, text, x, y, c1, font):
    """White pill with dark readable text — no black boxes."""
    pad_x, pad_y = 22, 14
    bb = draw.textbbox((0, 0), text, font=font)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    box_w = min(tw + pad_x * 2, 700)
    box_h = th + pad_y * 2
    pill = Image.new('RGBA', (box_w, box_h), (0, 0, 0, 0))
    pd = ImageDraw.Draw(pill)
    pd.rounded_rectangle((0, 0, box_w - 1, box_h - 1), radius=12, fill=(255, 255, 255, 235))
    pd.rounded_rectangle((0, 0, box_w - 1, box_h - 1), radius=12, outline=(255, 255, 255, 255), width=2)
    img.paste(pill, (x, y), pill)
    text_color = (max(20, c1[0] - 10), max(20, c1[1] - 10), max(30, c1[2] - 5))
    draw.text((x + pad_x, y + pad_y - 2), text, fill=text_color, font=font)
    return box_h + 10


def draw_icon(draw, kind, cx, cy, scale=0.65):
    r = int(88 * scale)
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(255, 255, 255, 40), outline='white', width=2)
    f_lg, f_md, _, _ = fonts()
    if kind == 'google':
        draw.ellipse((cx - int(52 * scale), cy - int(52 * scale), cx + int(52 * scale), cy + int(52 * scale)), fill='white')
        draw.text((cx - int(22 * scale), cy - int(32 * scale)), 'G', fill=(66, 133, 244), font=f_lg)
    elif kind == 'meta':
        draw.ellipse((cx - int(52 * scale), cy - int(52 * scale), cx + int(52 * scale), cy + int(52 * scale)), fill='white')
        draw.text((cx - int(14 * scale), cy - int(34 * scale)), 'f', fill=(24, 119, 242), font=f_lg)
    elif kind == 'design':
        s = scale
        draw.polygon([(cx, cy - int(50 * s)), (cx + int(45 * s), cy - int(10 * s)),
                      (cx + int(30 * s), cy + int(45 * s)), (cx - int(30 * s), cy + int(45 * s)),
                      (cx - int(45 * s), cy - int(10 * s))], outline='white', width=3)
        draw.ellipse((cx - int(12 * s), cy - int(18 * s), cx + int(12 * s), cy + int(6 * s)), fill='white')
    elif kind == 'code':
        draw.text((cx - int(48 * scale), cy - int(18 * scale)), '</>', fill='white', font=f_md)
    elif kind == 'search':
        s = scale
        draw.ellipse((cx - int(40 * s), cy - int(40 * s), cx + int(10 * s), cy + int(10 * s)), outline='white', width=5)
        draw.line([(cx + int(6 * s), cy + int(6 * s)), (cx + int(42 * s), cy + int(42 * s))], fill='white', width=5)
    elif kind == 'speed':
        s = scale
        draw.polygon([(cx, cy - int(55 * s)), (cx + int(50 * s), cy + int(40 * s)), (cx - int(15 * s), cy + int(40 * s))], fill='white')
    elif kind == 'cart':
        s = scale
        draw.rounded_rectangle((cx - int(55 * s), cy - int(35 * s), cx + int(55 * s), cy + int(40 * s)), radius=10, outline='white', width=4)
        draw.ellipse((cx - int(35 * s), cy + int(35 * s), cx - int(18 * s), cy + int(52 * s)), fill='white')
        draw.ellipse((cx + int(18 * s), cy + int(35 * s), cx + int(35 * s), cy + int(52 * s)), fill='white')
    elif kind == 'chart':
        s = scale
        for i, h in enumerate([35, 60, 45, 75]):
            x = cx - int(48 * s) + i * int(28 * s)
            draw.rounded_rectangle((x, cy + int(30 * s) - int(h * s), x + int(20 * s), cy + int(30 * s)), radius=3, fill='white')
    elif kind == 'video':
        s = scale
        draw.polygon([(cx - int(40 * s), cy - int(50 * s)), (cx - int(40 * s), cy + int(50 * s)), (cx + int(50 * s), cy)], fill='white')
    elif kind == 'ai':
        draw.text((cx - int(22 * scale), cy - int(16 * scale)), 'AI', fill='white', font=f_md)
    elif kind == 'amazon':
        s = scale
        draw.arc((cx - int(60 * s), cy - int(20 * s), cx + int(60 * s), cy + int(45 * s)), 200, 340, fill='white', width=6)
        draw.polygon([(cx - int(50 * s), cy + int(15 * s)), (cx + int(50 * s), cy + int(15 * s)), (cx, cy - int(45 * s))], fill='white')
    elif kind == 'bank':
        s = scale
        draw.polygon([(cx, cy - int(50 * s)), (cx - int(55 * s), cy - int(20 * s)), (cx + int(55 * s), cy - int(20 * s))], fill='white')
        for i in range(4):
            draw.rectangle((cx - int(48 * s) + i * int(26 * s), cy - int(10 * s),
                            cx - int(28 * s) + i * int(26 * s), cy + int(40 * s)), fill='white')
    elif kind == 'bdpay':
        s = scale
        for i, c in enumerate([(226, 19, 110), (246, 146, 32), (139, 47, 139), (0, 102, 179)]):
            draw.ellipse((cx - int(54 * s) + i * int(30 * s), cy - int(22 * s),
                          cx - int(30 * s) + i * int(30 * s), cy + int(2 * s)), fill=c)
    elif kind == 'stripe':
        draw.text((cx - int(38 * scale), cy - int(14 * scale)), 'Stripe', fill='white', font=f_md)
    elif kind == 'shop':
        s = scale
        draw.polygon([(cx - int(45 * s), cy + int(35 * s)), (cx + int(45 * s), cy + int(35 * s)),
                      (cx + int(35 * s), cy - int(35 * s)), (cx - int(35 * s), cy - int(35 * s))], outline='white', width=3)
        draw.rectangle((cx - int(20 * s), cy - int(15 * s), cx + int(20 * s), cy + int(10 * s)), fill='white')
    elif kind == 'pay':
        s = scale
        draw.rounded_rectangle((cx - int(55 * s), cy - int(35 * s), cx + int(55 * s), cy + int(35 * s)), radius=8, outline='white', width=3)
        draw.line([(cx - int(35 * s), cy), (cx + int(35 * s), cy)], fill='white', width=3)
    elif kind == 'business':
        s = scale
        draw.rectangle((cx - int(40 * s), cy - int(30 * s), cx + int(40 * s), cy + int(40 * s)), outline='white', width=3)
        for i in range(3):
            draw.rectangle((cx - int(30 * s) + i * int(22 * s), cy - int(10 * s),
                            cx - int(14 * s) + i * int(22 * s), cy + int(25 * s)), fill='white')
    else:
        draw.text((cx - int(20 * scale), cy - int(10 * scale)), kind[:3].upper(), fill='white', font=f_md)


def draw_right_panel(img, icon):
    """Service banner — circular face only, no white halo."""
    paste_circle_face(img, W - 188, H // 2 + 6, size=148)


def generate(slug, title, lines, tag, c1, c2, badge_type, icon):
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    gradient(img, draw, c1, c2)
    f_title, f_line, f_tag, f_sm = fonts()

    draw.rounded_rectangle((40, 32, 40 + 200, 68), radius=8, fill=(255, 255, 255))
    draw.text((54, 42), tag, fill=c1, font=f_tag)

    bx = 40
    by = 78
    if badge_type == 'popular':
        bw = badge(draw, 'POPULAR', bx, by, (239, 68, 68), f_tag)
        bx += bw + 8
    elif badge_type == 'best-deal':
        bw = badge(draw, 'BEST DEAL', bx, by, (16, 185, 129), f_tag)
        bx += bw + 8

    y = 130
    for line in wrap(draw, title, f_title, 680):
        draw.text((44, y), line, fill='white', font=f_title)
        y += 58

    y += 14
    for line in lines:
        y += service_pill(img, draw, line, 44, y, c1, f_line)

    draw_right_panel(img, icon)

    draw = ImageDraw.Draw(img)
    draw.text((44, H - 52), 'MD Nazmul Hasan', fill=(240, 248, 255), font=f_tag)
    draw.text((44, H - 28), 'Web Developer · Entrepreneur', fill=(210, 225, 245), font=f_sm)

    out = os.path.join(OUT, f'{slug}.jpg')
    img.save(out, quality=95)
    print('ok', slug)


def main():
    os.makedirs(OUT, exist_ok=True)
    for row in SERVICES:
        generate(*row)


if __name__ == '__main__':
    main()