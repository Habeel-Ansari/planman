"""Smaller copies of the product photos for responsive images.  Usage:  python tools/make-image-sizes.py

For every assets/products/<name>.webp wider than 440 / 640 px it writes <name>-400.webp / <name>-600.webp
(skips copies that already exist and are newer than the photo). Product cards list them in srcset, so a
card downloads only the size it displays. tools/seo-build.js refuses to build if a copy is missing.
"""
import glob
import os
import re

from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
SIZES = (400, 600)

made = 0
for f in sorted(glob.glob(os.path.join(ROOT, "assets", "products", "*.webp"))):
    if re.search(r"-(400|600)\.webp$", f) or f.endswith("-banner.webp"):
        continue
    im = None
    for tw in SIZES:
        out = f[:-5] + f"-{tw}.webp"
        if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(f):
            continue
        im = im or Image.open(f)
        w, h = im.size
        if w <= tw + 40:
            continue
        im.resize((tw, round(h * tw / w)), Image.LANCZOS).save(out, "WEBP", quality=80, method=4)
        made += 1
print(f"wrote {made} resized images")
