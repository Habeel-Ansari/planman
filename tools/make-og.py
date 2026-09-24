"""
Builds the 1200x630 social-share / Open Graph image: assets/og/planman-og.png
Usage: python tools/make-og.py
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "og"
OUT.mkdir(parents=True, exist_ok=True)
W, H = 1200, 630
FONTS = Path("C:/Windows/Fonts")


def font(names, size):
    for n in names:
        p = FONTS / n
        if p.exists():
            return ImageFont.truetype(str(p), size)
    return ImageFont.load_default()


bold = font(["segoeuib.ttf", "arialbd.ttf"], 58)
regular = font(["segoeui.ttf", "arial.ttf"], 28)
small = font(["segoeuisb.ttf", "segoeui.ttf", "arial.ttf"], 24)

img = Image.new("RGB", (W, H), "#ffffff")

# soft blue glow, bottom right
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
g = ImageDraw.Draw(glow)
g.ellipse((620, 300, 1400, 900), fill=(0, 113, 227, 60))
g.ellipse((-200, -300, 500, 250), fill=(0, 113, 227, 25))
glow = glow.filter(ImageFilter.GaussianBlur(90))
img.paste(glow, (0, 0), glow)

d = ImageDraw.Draw(img)

# logo (full version with tagline)
logo = Image.open(ROOT / "assets" / "logo" / "planman-logo.png").convert("RGBA")
lw = 560
logo = logo.resize((lw, round(logo.height * lw / logo.width)), Image.LANCZOS)
img.paste(logo, (80, 84), logo)

d.text((80, 250), "Enterprise IT Solutions & Hardware", font=bold, fill="#1d1d1f")
d.text((80, 322), "Dubai, United Arab Emirates", font=bold, fill="#0066cc")
d.text((80, 418), "Servers · Storage · GPUs · Networking · AI Infrastructure", font=regular, fill="#424245")
d.text((80, 460), "Requirements → Design → Supply → Deployment → After-Sales Support", font=regular, fill="#424245")

# footer strip
d.rectangle((0, H - 70, W, H), fill="#f5f5f7")
d.text((80, H - 52), "planman.ae", font=small, fill="#0066cc")
d.text((300, H - 52), "Hospitality · Education · Manufacturing · Enterprise", font=small, fill="#6e6e73")

img.save(OUT / "planman-og.png", optimize=True)
print("wrote", OUT / "planman-og.png")
