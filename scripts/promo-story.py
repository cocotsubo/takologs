#!/usr/bin/env python3
"""TakoLogs Instagram stories — iPhone Air Gold, thème = capture, sans crop."""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

W, H = 1080, 1920
OUT = Path("/workspace/artifacts/stories")
SHOT = Path("/workspace/attachments")
FONTS = Path("/tmp/fonts")
LOGO = Path("/workspace/artifacts/stories/logo-mark.png")
FRAME_PNG = Path("/workspace/artifacts/stories/iphone-air-frame.png")
EMOJI_TTF = "/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf"
OUT.mkdir(parents=True, exist_ok=True)

F_H = "josefin-sans_5.1.0_latin-700-normal.ttf"
F_HS = "josefin-sans_5.1.0_latin-600-normal.ttf"
F_HR = "josefin-sans_5.1.0_latin-400-normal.ttf"
F_B = "nunito-sans_5.1.0_latin-400-normal.ttf"


def hsl(h: float, s: float, l: float) -> tuple[int, int, int]:
    s, l = s / 100.0, l / 100.0
    c = (1 - abs(2 * l - 1)) * s
    x = c * (1 - abs((h / 60) % 2 - 1))
    m = l - c / 2
    if h < 60:
        r, g, b = c, x, 0
    elif h < 120:
        r, g, b = x, c, 0
    elif h < 180:
        r, g, b = 0, c, x
    elif h < 240:
        r, g, b = 0, x, c
    elif h < 300:
        r, g, b = x, 0, c
    else:
        r, g, b = c, 0, x
    return tuple(int(round((v + m) * 255)) for v in (r, g, b))


def rgb_to_hsl(r: int, g: int, b: int) -> tuple[float, float, float]:
    r_, g_, b_ = r / 255, g / 255, b / 255
    mx, mn = max(r_, g_, b_), min(r_, g_, b_)
    l = (mx + mn) / 2
    if mx == mn:
        return 36.0, 0.0, l * 100
    d = mx - mn
    s = d / (2 - mx - mn) if l > 0.5 else d / (mx + mn)
    if mx == r_:
        h = (g_ - b_) / d + (6 if g_ < b_ else 0)
    elif mx == g_:
        h = (b_ - r_) / d + 2
    else:
        h = (r_ - g_) / d + 4
    return (h * 60) % 360, s * 100, l * 100


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / name), size)


def theme_from(shot: Image.Image) -> dict:
    bar = shot.crop((0, 30, shot.width, 140)).resize((1, 1), Image.Resampling.BOX)
    bg = bar.getpixel((0, 0))[:3]
    lum = bg[0] * 0.299 + bg[1] * 0.587 + bg[2] * 0.114
    dark = lum < 100
    h0, s0, _ = rgb_to_hsl(*bg)
    # accent = most saturated mid-tone
    small = shot.resize((64, 128), Image.Resampling.BOX)
    best_h, best_s = (h0 if s0 > 12 else 36.0), s0
    for p in small.getdata():
        hh, ss, ll = rgb_to_hsl(*p[:3])
        if 22 < ll < 72 and ss > best_s:
            best_s, best_h = ss, hh
    hue = best_h if best_s > 14 else 36.0
    if dark:
        ink = hsl(hue, 28, 94)
        muted = hsl(hue, 18, 72)
        clay = hsl(hue, 42, 62)
        bg2 = tuple(min(255, int(c + 18)) for c in bg)
        hexline = hsl(hue, 20, 48)
        logo_fill = hsl(hue, 40, 68)
    else:
        ink = hsl(hue, 34, 22)
        muted = hsl(hue, 22, 38)
        clay = hsl(hue, 48, 46)
        bg2 = hsl(hue, 42, 84)
        hexline = hsl(hue, 28, 42)
        logo_fill = clay
    return {
        "bg": bg,
        "bg2": bg2,
        "ink": ink,
        "muted": muted,
        "clay": clay,
        "dark": dark,
        "hue": hue,
        "hex": hexline,
        "logo": logo_fill,
    }


def canvas(th: dict) -> Image.Image:
    im = Image.new("RGB", (W, H), th["bg"])
    px = im.load()
    for y in range(H):
        t = y / H
        c = tuple(int(th["bg"][i] * (1 - t) + th["bg2"][i] * t) for i in range(3))
        for x in range(W):
            px[x, y] = c
    glow = Image.new("RGB", (W, H), th["bg"])
    ImageDraw.Draw(glow).ellipse((-280, -520, 1360, 640), fill=th["clay"])
    return Image.blend(im, glow, 0.10 if th["dark"] else 0.16)


def molecules(im: Image.Image, th: dict, alpha: int = 38) -> None:
    layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    col = (*th["hex"], alpha)

    def hexagon(cx, cy, r, rot=0.0):
        pts = []
        for i in range(6):
            a = math.radians(60 * i - 30) + rot
            pts.append((cx + math.cos(a) * r, cy + math.sin(a) * r))
        d.line(pts + [pts[0]], fill=col, width=3)
        for x, y in pts:
            d.ellipse((x - 5, y - 5, x + 5, y + 5), fill=col)

    hexagon(80, 200, 70, 0.18)
    hexagon(1010, 260, 82, -0.12)
    hexagon(70, 1720, 64, 0.4)
    hexagon(1020, 1760, 76, -0.22)
    im.paste(Image.alpha_composite(im.convert("RGBA"), layer).convert("RGB"))


GOLD_LO = (186, 148, 96)
GOLD_HI = (244, 228, 200)

_FRAME = None
_HOLE = None  # L mask of the glass


def gold_frame() -> Image.Image:
    im = Image.open(FRAME_PNG).convert("RGBA")
    im = im.resize((im.width * 4, im.height * 4), Image.Resampling.LANCZOS)
    a = np.array(im).astype(np.float32)
    rgb, al = a[..., :3], a[..., 3]
    lum = rgb.mean(axis=2)
    t = np.clip((lum - 35) / 160.0, 0, 1)[..., None]
    gold = np.array(GOLD_LO, dtype=np.float32) * (1 - t) + np.array(GOLD_HI, dtype=np.float32) * t
    metal = (al > 40) & (lum > 32)
    rgb[metal] = gold[metal]
    a[..., :3] = rgb
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), "RGBA")


def hole_mask(frame: Image.Image) -> Image.Image:
    """Flood-fill the inner glass from the center (not the exterior transparency)."""
    al = np.array(frame.getchannel("A"))
    h, w = al.shape
    thresh = 16
    out = np.zeros((h, w), np.uint8)
    y, x = h // 2, w // 2
    stack = [(y, x)]
    while stack:
        cy, cx = stack.pop()
        if out[cy, cx] or al[cy, cx] >= thresh:
            continue
        x1 = cx
        while x1 > 0 and not out[cy, x1 - 1] and al[cy, x1 - 1] < thresh:
            x1 -= 1
        x2 = cx
        while x2 < w - 1 and not out[cy, x2 + 1] and al[cy, x2 + 1] < thresh:
            x2 += 1
        out[cy, x1 : x2 + 1] = 255
        for nx in range(x1, x2 + 1):
            if cy > 0 and not out[cy - 1, nx] and al[cy - 1, nx] < thresh:
                stack.append((cy - 1, nx))
            if cy < h - 1 and not out[cy + 1, nx] and al[cy + 1, nx] < thresh:
                stack.append((cy + 1, nx))
    # 1px inset so gold edge stays gold
    k = np.ones((3, 3), np.uint8)
    # erode without scipy: min filter
    pad = np.pad(out, 1, constant_values=0)
    er = out.copy()
    for dy in range(3):
        for dx in range(3):
            er = np.minimum(er, pad[dy : dy + h, dx : dx + w])
    return Image.fromarray(er, "L")


def air_overlay(screen: Image.Image) -> Image.Image:
    """Official iPhone Air PNG. Screenshot clipped to the rounded glass — no square corners."""
    global _FRAME, _HOLE
    if _FRAME is None:
        _FRAME = gold_frame()
        _HOLE = hole_mask(_FRAME)
    fr = _FRAME
    hole = _HOLE
    m = np.array(hole)
    ys, xs = np.where(m > 0)
    x0, x1 = int(xs.min()), int(xs.max()) + 1
    y0, y1 = int(ys.min()), int(ys.max()) + 1
    bw, bh = x1 - x0, y1 - y0

    sw, sh = screen.size
    scale = max(bw / sw, bh / sh)
    nw, nh = int(sw * scale) + 6, int(sh * scale) + 6
    scr = screen.convert("RGBA").resize((nw, nh), Image.Resampling.LANCZOS)
    px = x0 + (bw - nw) // 2
    py = y0 + (bh - nh) // 2

    out = Image.new("RGBA", fr.size, (0, 0, 0, 0))
    out.paste(scr, (px, py))
    # keep pixels only inside the rounded glass
    r, g, b, a = out.split()
    a = ImageChops.multiply(a, hole)
    out = Image.merge("RGBA", (r, g, b, a))
    out.alpha_composite(fr)
    return out
def shadow(base: Image.Image, img: Image.Image, xy: tuple[int, int], blur=28, dy=16):
    x, y = xy
    iw, ih = img.size
    pad = blur * 3
    alpha = img.split()[-1] if img.mode == "RGBA" else Image.new("L", img.size, 180)
    alpha = alpha.filter(ImageFilter.GaussianBlur(blur))
    blob = Image.new("RGBA", (iw, ih), (20, 12, 8, 255))
    blob.putalpha(alpha.point(lambda v: min(160, int(v * 0.55))))
    sh = Image.new("RGBA", (iw + pad * 2, ih + pad * 2), (0, 0, 0, 0))
    sh.paste(blob, (pad, pad + dy), blob)
    layer = base.convert("RGBA")
    layer.alpha_composite(sh, (x - pad, y - pad))
    layer.alpha_composite(img if img.mode == "RGBA" else img.convert("RGBA"), (x, y))
    base.paste(layer.convert("RGB"))


def wrap(d, text, fnt, max_w):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if d.textlength(t, font=fnt) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def paste_emoji(im: Image.Image, emoji: str, xy: tuple[int, int], size: int = 86):
    tmp = Image.new("RGBA", (200, 200), (0, 0, 0, 0))
    td = ImageDraw.Draw(tmp)
    f = ImageFont.truetype(EMOJI_TTF, 109)
    td.text((20, 16), emoji, font=f, embedded_color=True)
    # trim
    bbox = tmp.getbbox()
    if not bbox:
        return size
    tmp = tmp.crop(bbox)
    s = size / max(tmp.width, tmp.height)
    tmp = tmp.resize((max(1, int(tmp.width * s)), max(1, int(tmp.height * s))), Image.Resampling.LANCZOS)
    layer = im.convert("RGBA")
    layer.alpha_composite(tmp, xy)
    im.paste(layer.convert("RGB"))
    return tmp.width


def wordmark(d, y, size, th):
    fb = font(F_H, size)
    tako, logs = "Tako", "Logs"
    wt, wl = d.textlength(tako, font=fb), d.textlength(logs, font=fb)
    x = (W - wt - wl) / 2
    d.text((x, y), tako, font=fb, fill=th["ink"])
    d.text((x + wt, y), logs, font=fb, fill=th["clay"])


def tint_logo(th: dict, size: int) -> Image.Image:
    mark = Image.open(LOGO).convert("RGBA").resize((size, size), Image.Resampling.LANCZOS)
    if not th["dark"]:
        return mark
    # brighten for dark bg
    r, g, b, a = mark.split()
    color = Image.new("RGBA", mark.size, (*th["logo"], 255))
    color.putalpha(a)
    return color


def footer(d, y, th):
    pill = "takohelp.com"
    fnt = font(F_HS, 28)
    tw = d.textlength(pill, font=fnt)
    pad_x, pad_y = 32, 12
    d.rounded_rectangle(
        ((W - tw) / 2 - pad_x, y, (W + tw) / 2 + pad_x, y + 28 + pad_y * 2),
        40,
        fill=th["clay"],
    )
    d.text(((W - tw) / 2, y + pad_y - 1), pill, font=fnt, fill=(255, 255, 255))


def crop_shot(path: Path, y0: float, y1: float) -> Image.Image:
    im = Image.open(path).convert("RGB")
    h = im.height
    a, b = int(h * y0), int(h * y1)
    a = max(0, a)
    b = min(h, max(a + 200, b))
    return im.crop((0, a, im.width, b))


def fit_phone(phone: Image.Image, max_w: int, max_h: int) -> Image.Image:
    s = min(max_w / phone.width, max_h / phone.height, 1.0)
    nw, nh = int(phone.width * s), int(phone.height * s)
    return phone.resize((nw, nh), Image.Resampling.LANCZOS)


def story(
    shot_name: str,
    emoji: str,
    kicker: str,
    title: str,
    show_kicker: bool = True,
):
    raw = Image.open(SHOT / shot_name).convert("RGB")
    th = theme_from(raw)
    im = canvas(th)
    molecules(im, th, 26 if th["dark"] else 32)

    # 1. Logo
    mark = tint_logo(th, 68)
    layer = im.convert("RGBA")
    layer.alpha_composite(mark, ((W - mark.width) // 2, 28))
    im.paste(layer.convert("RGB"))

    d = ImageDraw.Draw(im)
    # 2. Wordmark + texte — air under the logo
    y = 28 + 68 + 22
    wordmark(d, y, 50, th)
    y += 62

    if show_kicker:
        kfont = font(F_HS, 26)
        kt = kicker.upper()
        ktw = d.textlength(kt, font=kfont)
        row_w = 84 + 12 + ktw
        x0 = int((W - row_w) / 2)
        paste_emoji(im, emoji, (x0, y), 80)
        d = ImageDraw.Draw(im)
        d.text((x0 + 92, y + 22), kt, font=kfont, fill=th["clay"])
        y += 96
    else:
        paste_emoji(im, emoji, ((W - 84) // 2, y), 84)
        y += 100

    tfont = font(F_H, 44)
    d = ImageDraw.Draw(im)
    lines = wrap(d, title, tfont, 960)
    for ln in lines:
        tw = d.textlength(ln, font=tfont)
        d.text(((W - tw) / 2, y), ln, font=tfont, fill=th["ink"])
        y += 52
    # 3. Lien, air under the copy
    y += 28
    footer(d, y, th)
    y += 56 + 36  # pill + gap before the phone

    # 4. iPhone Air overlay, full screenshot, no crop
    phone = air_overlay(raw)
    phone = fit_phone(phone, 700, 1920 - y - 36)
    shadow(im, phone, ((W - phone.width) // 2, y), blur=22, dy=12)
    return im


def mission_story() -> Image.Image:
    """Full-bleed beige, text only, everything centered."""
    th = {
        "bg": hsl(36, 42, 90),
        "bg2": hsl(36, 38, 84),
        "ink": hsl(36, 32, 24),
        "muted": hsl(36, 22, 40),
        "clay": hsl(36, 48, 46),
        "dark": False,
        "hue": 36.0,
        "hex": hsl(36, 28, 48),
        "logo": hsl(36, 48, 46),
    }
    im = canvas(th)
    molecules(im, th, 22)
    d = ImageDraw.Draw(im)

    kicker = "JE VEUX DONNER DE LA VISIBILIT\u00c9"
    title_lines = ["Pour aider au mieux", "les personnes."]
    points = [
        ("\U0001f6e1\ufe0f", "R\u00e9duire les risques"),
        ("\U0001f4c8", "Suivre sa consommation"),
        ("\u26a0\ufe0f", "\u00c9viter les associations toxiques"),
    ]

    kfont = font(F_HS, 22)
    tfont = font(F_H, 54)
    pfont = font(F_H, 36)
    mark_s = 88

    # measure stack to center it vertically
    stack_h = (
        mark_s
        + 28
        + 58  # wordmark
        + 36
        + 28  # kicker
        + 20
        + 64 * len(title_lines)
        + 36
        + 108 * len(points)
        + 40
        + 56  # pill
    )
    y = (H - stack_h) // 2

    mark = tint_logo(th, mark_s)
    layer = im.convert("RGBA")
    layer.alpha_composite(mark, ((W - mark.width) // 2, y))
    im.paste(layer.convert("RGB"))
    y += mark_s + 28

    d = ImageDraw.Draw(im)
    wordmark(d, y, 56, th)
    y += 58 + 36

    tw = d.textlength(kicker, font=kfont)
    d.text(((W - tw) / 2, y), kicker, font=kfont, fill=th["clay"])
    y += 28 + 20

    for ln in title_lines:
        tw = d.textlength(ln, font=tfont)
        d.text(((W - tw) / 2, y), ln, font=tfont, fill=th["ink"])
        y += 64
    y += 36

    for em, label in points:
        # emoji then label, both centered as a pair
        tmp_w = 72
        paste_emoji(im, em, ((W - tmp_w) // 2, y), tmp_w)
        y += 78
        d = ImageDraw.Draw(im)
        tw = d.textlength(label, font=pfont)
        d.text(((W - tw) / 2, y), label, font=pfont, fill=th["ink"])
        y += 30 + 20

    y += 20
    d = ImageDraw.Draw(im)
    footer(d, y, th)
    return im


def save(im: Image.Image, name: str):
    p = OUT / name
    im.save(p, "PNG", optimize=True)
    im.convert("RGB").save(p.with_suffix(".jpg"), "JPEG", quality=93, optimize=True)
    print("wrote", p)


def main():
    save(
        story(
            "IMG_0342.jpg",
            "✨",
            "TakoLogs",
            "Savoir, réduire les risques, tenir son journal.",
            show_kicker=False,
        ),
        "01-cover.png",
    )
    save(
        story("IMG_0350.jpg", "🤖", "TakoAI", "Demande n’importe quoi. TakoAI le fait pour toi."),
        "02-takoai.png",
    )
    save(
        story("IMG_0354.jpg", "📈", "Journal", "Tes doses et ta courbe, en un coup d’œil."),
        "03-journal.png",
    )
    save(
        story("IMG_0357.jpg", "➕", "Ajouter", "Une prise, en quelques secondes."),
        "04-ajouter.png",
    )
    save(
        story("IMG_0346.jpg", "🚨", "Alertes labo", "Ce que les labos trouvent vraiment."),
        "05-alertes.png",
    )
    save(
        story(
            "IMG_0351.jpg",
            "🛡️",
            "Réduction des risques",
            "Les bons réflexes, toujours sous la main.",
        ),
        "06-rdr.png",
    )
    save(
        story("IMG_0345.jpg", "☕", "Fiches", "328 substances : dosages, durées, interactions."),
        "07-fiche.png",
    )
    save(
        story("IMG_0356.jpg", "🎵", "En cours", "Musique, courbe et trip-sitter — en live."),
        "08-encours.png",
    )
    save(mission_story(), "09-mission.png")


if __name__ == "__main__":
    main()
