"""
Builds the Plan Man logo assets from the supplied artwork (white background).

- Removes the white background with "colour to alpha", so the translucent
  overlapping shapes stay translucent instead of getting a white halo.
- Writes light-theme and dark-theme versions (dark: black text -> white,
  slate tagline -> light grey, blues untouched).
- Writes a compact version without the tagline for the navigation bar,
  plus a square favicon from the mark.

Usage: python tools/make-logo.py <source-image>
"""
import sys
from pathlib import Path
from PIL import Image

SRC = Path(sys.argv[1])
OUT = Path(__file__).resolve().parent.parent / "assets" / "logo"
OUT.mkdir(parents=True, exist_ok=True)

im = Image.open(SRC).convert("RGB")
W, H = im.size
px = im.load()


def color_to_alpha(rgb):
    """GIMP-style colour-to-alpha against white."""
    r, g, b = rgb
    a = max(255 - r, 255 - g, 255 - b) / 255.0
    if a < 0.035:  # paper noise -> fully transparent
        return (0, 0, 0, 0)
    def un(c):
        return max(0, min(255, round(255 - (255 - c) / a)))
    return (un(r), un(g), un(b), round(a * 255))


rgba = Image.new("RGBA", (W, H))
out = rgba.load()
for y in range(H):
    for x in range(W):
        out[x, y] = color_to_alpha(px[x, y])

# Locate the tagline: the text rows below the wordmark, right of the mark.
def row_ink(y, x0, x1):
    return sum(1 for x in range(x0, x1) if out[x, y][3] > 60)

bbox = rgba.getbbox()
bx0, by0, bx1, by1 = bbox
# Wordmark starts roughly where the first large dark glyph begins; the mark sits to its left.
cols_dark = [x for x in range(bx0, bx1) if any(
    out[x, y][3] > 150 and max(out[x, y][:3]) < 70 for y in range(by0, by1, 3))]
word_x0 = min(cols_dark)
rows = [y for y in range(by0, by1) if row_ink(y, word_x0, bx1) > 0]
# split rows into bands (wordmark, tagline)
bands, start, prev = [], rows[0], rows[0]
for y in rows[1:]:
    if y - prev > 6:
        bands.append((start, prev)); start = y
    prev = y
bands.append((start, prev))
tag_top = bands[-1][0] if len(bands) > 1 else None
print("image", W, H, "bbox", bbox, "wordmark x0", word_x0, "bands", bands)


def recolor_dark(img):
    """Black lettering -> near-white; slate tagline -> light grey; blues kept.
    The pale back layer of the mark becomes frosted white so it reads on dark."""
    d = img.copy()
    p = d.load()
    for y in range(d.height):
        for x in range(d.width):
            r, g, b, a = p[x, y]
            if a == 0:
                continue
            if x < word_x0 - 6:
                # Mark: the translucent back layer un-premultiplies to a dim navy
                # (blue channel well below the bright front shape). Make it frosted white.
                if b < 205 and a < 150:
                    p[x, y] = (255, 255, 255, min(255, round(a * 1.45)))
                continue
            sat = max(r, g, b) - min(r, g, b)
            lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
            if sat < 60 and lum < 90:          # black wordmark "PLAN"
                p[x, y] = (245, 245, 247, a)
            elif sat < 90 and b > r and lum < 170 and b < 200:  # slate tagline text
                p[x, y] = (190, 198, 214, a)
    return d


def save(img, name, pad=8):
    box = img.getbbox()
    img = img.crop((max(0, box[0] - pad), max(0, box[1] - pad),
                    min(img.width, box[2] + pad), min(img.height, box[3] + pad)))
    img.save(OUT / name, optimize=True)
    print("wrote", name, img.size)
    return img


full = rgba
save(full, "planman-logo.png")
save(recolor_dark(full), "planman-logo-dark.png")

# Compact: erase the tagline band (right of the mark only), keep the mark intact.
compact = rgba.copy()
if tag_top is not None:
    cp = compact.load()
    for y in range(tag_top - 4, H):
        for x in range(word_x0 - 6, W):
            cp[x, y] = (0, 0, 0, 0)
save(compact, "planman-logo-compact.png")
save(recolor_dark(compact), "planman-logo-compact-dark.png")

# ---------------------------------------------------------------------------
# Vector versions: the two-shape mark is redrawn as crisp SVG geometry
# (measured from the artwork); the lettering is embedded from the artwork.
# ---------------------------------------------------------------------------
import base64, io

SKEW = -15.6               # degrees; both shapes lean right like the artwork
FRONT = dict(cx=409, cy=308, w=189, h=164, r=36)
BACK = dict(cx=463, cy=356, w=184, h=166, r=36)
COLORS = {
    "light": dict(front="#1058f8", back="#c8d0e8", back_op=1, overlap="#0033bb"),
    "dark":  dict(front="#1a63ff", back="#ffffff", back_op=0.9, overlap="#0a3fd6"),
}


def shape(s, attrs):
    return (f'<rect x="{-s["w"]/2}" y="{-s["h"]/2}" width="{s["w"]}" height="{s["h"]}" rx="{s["r"]}" '
            f'transform="translate({s["cx"]} {s["cy"]}) skewX({SKEW})" {attrs}/>')


def mark_svg(theme):
    c = COLORS[theme]
    return (
        f'<defs><clipPath id="pm-front-{theme}">{shape(FRONT, "")}</clipPath></defs>'
        + shape(BACK, f'fill="{c["back"]}" fill-opacity="{c["back_op"]}"')
        + shape(FRONT, f'fill="{c["front"]}"')
        + f'<g clip-path="url(#pm-front-{theme})">{shape(BACK, f"fill=\"{c["overlap"]}\"")}</g>'
    )


def png_data_uri(img):
    buf = io.BytesIO()
    img.save(buf, "PNG", optimize=True)
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode()


def write_svg(letters, theme, name, pad=8):
    """letters: RGBA image of the lettering only (mark erased), original coordinates."""
    lb = letters.getbbox()
    crop = letters.crop(lb)
    # Keep the embedded lettering light: ~720px wide is plenty for 2x screens at nav/footer size,
    # and a 64-colour palette keeps anti-aliasing smooth while cutting the file size.
    if crop.width > 720:
        crop = crop.resize((720, round(crop.height * 720 / crop.width)), Image.LANCZOS)
    crop = crop.quantize(colors=64, method=Image.Quantize.FASTOCTREE)
    # overall bounds = lettering + mark (mark geometry spans roughly x 280..585, y 222..442)
    x0 = min(lb[0], 280) - pad
    y0 = min(lb[1], 222) - pad
    x1 = max(lb[2], 585) + pad
    y1 = max(lb[3], 442) + pad
    w, h = x1 - x0, y1 - y0
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0} {y0} {w} {h}" width="{w}" height="{h}">'
           f'{mark_svg(theme)}'
           f'<image href="{png_data_uri(crop)}" x="{lb[0]}" y="{lb[1]}" width="{crop.width}" height="{crop.height}"/>'
           f'</svg>')
    (OUT / name).write_text(svg, encoding="utf-8")
    print("wrote", name, (w, h))


def erase_mark(img):
    e = img.copy()
    p = e.load()
    for y in range(e.height):
        for x in range(0, word_x0 - 6):
            p[x, y] = (0, 0, 0, 0)
    return e


letters_full = erase_mark(rgba)
letters_compact = erase_mark(compact)
write_svg(letters_full, "light", "planman-logo.svg")
write_svg(recolor_dark(letters_full), "dark", "planman-logo-dark.svg")
write_svg(letters_compact, "light", "planman-logo-compact.svg")
write_svg(recolor_dark(letters_compact), "dark", "planman-logo-compact-dark.svg")

# Vector favicon (mark only)
fx0, fy0, fw, fh = 270, 214, 326, 238
side = max(fw, fh)
(OUT / "favicon.svg").write_text(
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{fx0 - (side - fw) / 2} {fy0 - (side - fh) / 2} {side} {side}">'
    f'{mark_svg("light")}</svg>', encoding="utf-8")
print("wrote favicon.svg")

# Favicon from the mark (everything left of the wordmark)
mark = rgba.crop((0, 0, word_x0 - 10, H))
mb = mark.getbbox()
mark = mark.crop(mb)
side = max(mark.size) + 24
icon = Image.new("RGBA", (side, side), (0, 0, 0, 0))
icon.paste(mark, ((side - mark.width) // 2, (side - mark.height) // 2), mark)
icon.resize((256, 256), Image.LANCZOS).save(OUT / "favicon.png", optimize=True)
icon.resize((180, 180), Image.LANCZOS).save(OUT / "apple-touch-icon.png", optimize=True)
print("wrote favicon.png, apple-touch-icon.png")
