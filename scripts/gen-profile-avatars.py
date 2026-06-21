"""Generate HQ avatars for service page provider card."""
from PIL import Image
import os

OUT = r'E:\nazmul-projects\portfolio\assets\source'
CARD_SRC = os.path.join(OUT, 'service-card-face.jpg')


def to_square_avatar(src_path, out_path, size=512, zoom=0.92):
    im = Image.open(src_path).convert('RGB')
    sw, sh = im.size
    side = int(min(sw, sh) * zoom)
    left = (sw - side) // 2
    top = max(0, int(sh * 0.08))
    if top + side > sh:
        top = (sh - side) // 2
    crop = im.crop((left, top, left + side, top + side))
    crop = crop.resize((size, size), Image.Resampling.LANCZOS)
    crop.save(out_path, quality=96)
    print('ok', out_path)


def main():
    if os.path.isfile(CARD_SRC):
        to_square_avatar(CARD_SRC, os.path.join(OUT, 'avatar-service.jpg'))


if __name__ == '__main__':
    main()