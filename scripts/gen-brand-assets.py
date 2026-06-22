"""Create logo PNG, favicon, OG share image — preserve original aspect ratio."""
from PIL import Image, ImageDraw, ImageFont
import os

ROOT = r'E:\nazmul-projects\portfolio\assets'
LOGO_SRC = os.path.join(ROOT, 'logo-source.jpg')
PHOTO = os.path.join(ROOT, 'source', 'profile-main.jpg')
if not os.path.exists(PHOTO):
    PHOTO = os.path.join(ROOT, 'source', 'main-photo.jpg')
if not os.path.exists(PHOTO):
    PHOTO = os.path.join(ROOT, 'profile.jpg')


def trim_logo_rgba():
    img = Image.open(LOGO_SRC).convert('RGBA')
    px = img.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if r > 240 and g > 240 and b > 240:
                px[x, y] = (255, 255, 255, 0)
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
    return img


def fit_in_square(icon, size=512, bg=(255, 255, 255, 255)):
    """Scale to fit inside square — never stretch."""
    icon = icon.copy()
    icon.thumbnail((size, size), Image.LANCZOS)
    canvas = Image.new('RGBA', (size, size), bg)
    x = (size - icon.width) // 2
    y = (size - icon.height) // 2
    canvas.paste(icon, (x, y), icon)
    return canvas


def icon_mark_only(full):
    w, h = full.size
    return full.crop((0, 0, w, int(h * 0.58)))


def trim_logo():
    full = trim_logo_rgba()
    icon_only = icon_mark_only(full)

    # Nav + favicon: geometric mark only (no NAZMUL wordmark)
    icon_only.save(os.path.join(ROOT, 'logo-mark.png'))
    full.save(os.path.join(ROOT, 'logo.png'))
    fit_in_square(icon_only).save(os.path.join(ROOT, 'logo-icon.png'))
    fit_in_square(icon_only, 64).convert('RGB').save(os.path.join(ROOT, 'favicon.png'))


def og_image():
    W, H = 1200, 630
    img = Image.new('RGB', (W, H))
    draw = ImageDraw.Draw(img)
    for y in range(H):
        t = y / H
        draw.line([(0, y), (W, y)], fill=(
            int(37 + (99 - 37) * t), int(99 + (130 - 99) * t), int(235 + (246 - 235) * t)))
    logo = trim_logo_rgba()
    max_w = 320
    ratio = logo.size[1] / logo.size[0]
    lw = max_w
    lh = int(lw * ratio)
    logo = logo.resize((lw, lh), Image.LANCZOS)
    img.paste(logo, (80, 100), logo)
    try:
        f_lg = ImageFont.truetype('arialbd.ttf', 42)
        f_sm = ImageFont.truetype('arial.ttf', 24)
    except OSError:
        f_lg = f_sm = ImageFont.load_default()
    ty = 100 + lh + 36
    draw.text((80, ty), 'MD Nazmul Hasan', fill='white', font=f_lg)
    draw.text((80, ty + 55), 'Web Developer · Google Ads · Meta Ads · E-Commerce', fill=(219, 234, 254), font=f_sm)
    draw.text((80, ty + 95), '3000+ Happy Clients · 4+ Years Experience', fill=(191, 219, 254), font=f_sm)
    if os.path.exists(PHOTO):
        size = 400
        cx, cy = W - 280, H // 2
        p = Image.open(PHOTO).convert('RGB')
        fw, fh = p.size
        side = min(fw, fh)
        left = (fw - side) // 2
        top = max(0, int((fh - side) * 0.06))
        p = p.crop((left, top, left + side, top + side))
        p = p.resize((size, size), Image.LANCZOS)
        ring = size + 16
        draw.ellipse(
            (cx - ring // 2, cy - ring // 2, cx + ring // 2, cy + ring // 2),
            fill=(255, 255, 255),
        )
        mask = Image.new('L', (size, size), 0)
        ImageDraw.Draw(mask).ellipse((0, 0, size - 1, size - 1), fill=255)
        img.paste(p, (cx - size // 2, cy - size // 2), mask)
    img.save(os.path.join(ROOT, 'og-share.jpg'), quality=92)


if __name__ == '__main__':
    trim_logo()
    og_image()
    print('brand assets done')