"""
Builds a 1200x630 social-share / Open Graph image for every product: assets/og/products/<id>.jpg
Reads data/products.js through Node. Usage: python tools/make-product-og.py
Run it after adding or renaming products, then run node tools/seo-build.js.
"""
import json
import subprocess
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "og" / "products"
OUT.mkdir(parents=True, exist_ok=True)
W, H = 1200, 630
FONTS = Path("C:/Windows/Fonts")
BRAND_COLOR = {"nvidia": (118, 185, 0), "supermicro": (77, 163, 255), "asus": (200, 162, 255)}

DUMP = """
const vm = require('vm'), fs = require('fs'), s = { window: {} };
vm.createContext(s); vm.runInContext(fs.readFileSync('data/products.js', 'utf8'), s);
const { PRODUCTS, BRANDS, CATEGORIES } = s.window;
process.stdout.write(JSON.stringify(PRODUCTS.map((p) => ({ ...p, brandName: BRANDS[p.brand], catName: CATEGORIES[p.cat] }))));
"""


def font(names, size):
    for n in names:
        p = FONTS / n
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


def wrap(draw, text, fnt, width):
    lines, line = [], ""
    for word in text.split():
        test = f"{line} {word}".strip()
        if draw.textlength(test, font=fnt) <= width:
            line = test
        else:
            lines.append(line)
            line = word
    return lines + [line] if line else lines


def fit_title(draw, text, width, max_lines=2):
    for size in (68, 62, 56, 50, 44):
        f = font(["segoeuib.ttf", "arialbd.ttf"], size)
        lines = wrap(draw, text, f, width)
        if len(lines) <= max_lines:
            return f, lines
    return f, lines[:max_lines]


products = json.loads(subprocess.run(["node", "-e", DUMP], cwd=ROOT, capture_output=True, text=True, check=True).stdout)
logo = Image.open(ROOT / "assets" / "logo" / "planman-logo-dark.png" if (ROOT / "assets" / "logo" / "planman-logo-dark.png").exists() else ROOT / "assets" / "logo" / "planman-logo.png").convert("RGBA")
logo = logo.resize((300, round(logo.height * 300 / logo.width)), Image.LANCZOS)
label = font(["segoeuisb.ttf", "segoeui.ttf", "arial.ttf"], 26)
spec_k = font(["segoeui.ttf", "arial.ttf"], 22)
spec_v = font(["segoeuisb.ttf", "segoeui.ttf", "arial.ttf"], 26)
small = font(["segoeuisb.ttf", "segoeui.ttf", "arial.ttf"], 22)

for p in products:
    color = BRAND_COLOR.get(p["brand"], (0, 113, 227))
    img = Image.new("RGB", (W, H), (11, 11, 12))
    glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    g = ImageDraw.Draw(glow)
    g.ellipse((700, 200, 1500, 950), fill=color + (70,))
    g.ellipse((-300, -400, 400, 200), fill=(0, 113, 227, 40))
    glow = glow.filter(ImageFilter.GaussianBlur(110))
    img.paste(glow, (0, 0), glow)
    d = ImageDraw.Draw(img)

    img.paste(logo, (72, 60), logo)
    # brand pill + category
    tag = p["brandName"]
    tw = d.textlength(tag, font=label)
    d.rounded_rectangle((72, 150, 72 + tw + 36, 194), radius=22, fill=(28, 28, 30), outline=color, width=2)
    d.text((90, 155), tag, font=label, fill=color)
    d.text((72 + tw + 56, 155), p["catName"], font=label, fill=(161, 161, 166))

    tf, lines = fit_title(d, p["name"], W - 144)
    y = 222
    for ln in lines:
        d.text((72, y), ln, font=tf, fill=(245, 245, 247))
        y += int(tf.size * 1.15)

    # three key specs
    y = max(y + 28, 420)
    col_w = (W - 144 - 48) // 3
    for i, (k, v) in enumerate(p["specs"][:3]):
        x = 72 + i * (col_w + 24)
        d.rounded_rectangle((x, y, x + col_w, y + 118), radius=18, fill=(28, 28, 30))
        d.text((x + 20, y + 16), k, font=spec_k, fill=(134, 134, 139))
        vl = wrap(d, v, spec_v, col_w - 40)
        if len(vl) > 2:
            vl = vl[:2]
            while d.textlength(vl[1] + "…", font=spec_v) > col_w - 40:
                vl[1] = vl[1][:-1]
            vl[1] += "…"
        for j, ln in enumerate(vl):
            d.text((x + 20, y + 44 + j * 30), ln, font=spec_v, fill=(245, 245, 247))

    d.text((72, H - 52), "planman.ae  ·  Supplied & supported in Dubai, UAE", font=small, fill=(134, 134, 139))
    img.save(OUT / f"{p['id']}.jpg", quality=88, optimize=True, progressive=True)

print(f"wrote {len(products)} images to {OUT}")
