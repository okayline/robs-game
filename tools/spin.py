#!/usr/bin/env python3
# Spinning fans for the GPU pictures (kura, Nov 5, 2026). Makes public/gpu/<card>-frames.png: 24 frames of 88x31 side by side, the
# fans turning one 24th of a turn a frame, which page.html's spin() plays every 20 ms once the GPU has resolved.
#
# Needs Python 3 and Pillow (pip install pillow). Run it from the repo's root folder.
#
#   python3 tools/spin.py look <card>                 print the picture's brightness, pixel by pixel, to find the fans
#   python3 tools/spin.py '<settings>'                make the frames and a preview GIF (in your temp folder) and print the checks
#   python3 tools/spin.py '<settings>' --write        the same, then save public/gpu/<card>-frames.png, and its first frame as
#                                                     public/gpu/<card>.png (the still, so the picture matches before and after)
# Then set spin: true on the card in src/rules.js (GPUS).
#
# Settings, as JSON: {"name": "rtx-5080", "fans": [[72, 13]], "R": 12.75, "Rin": 12.75, "Y0": 3, "Y1": 23, "HUB": 3.0, "connected": true}
#   name       the card's picture, public/gpu/<name>.png (88x31, kura's pixel art)
#   fans       each fan's middle, [x, y] in pixels. Find the hub (the bright silver blob) with "look": a hub an even number of pixels
#              wide has its middle on a whole number (pixels 69-74 wide: x 72), an odd number on a half (pixels 21-27: x 24.5)
#   HUB        the round hub's radius: 3.0 for a 6-pixel hub, 3.3 for a 7-pixel one. The old hub is painted over with a round one
#              that stays still (three of the hub's own silvers, light at the top left), so it doesn't wobble as it turns
#   R          how far out from the middle the fan turns: up to the frame. Too small leaves a still ring of blade, too big turns the frame
#   Y0, Y1     only rows Y0 to Y1 turn: the frame's straight top and bottom rows (and the dark line just inside them) stay still
#   connected  true for cards whose frame crosses into the fan's circle (the X-shaped RTX 50 frames): a bright pixel inside the circle
#              stays still only if it joins up with the frame outside it; bright blade edges turn
#   Rin        when connected is false: bright pixels (brightness over 80) further out than Rin stay still as frame
#   gap_px     pixels to paint the fan's dark gap colour first, [[x, y], ...]: stray pixels, or a blade tip that pokes past R
#
# The frames are "soft": each pixel is the average of 9 points turned back to the picture. Kura picked soft over hard (Nov 5).
#
# The checks (each one caught something on a finished card):
#   - still pixels inside a fan brighter than the blades: a blade edge counted as frame, or a stray pixel (paint it with gap_px, or
#     check connected / Rin)
#   - bright pixels just outside R: a blade tip poking past the circle stays behind as a stub (paint it with gap_px, or a bigger R)
#   - pixels that change outside the fans: should be 0
# kura still looks at every card in motion: a grey or dark pixel on the circle's edge that stays still while the blades pass shows
# up there first (the RTX 5080 needed R 12.75, not 12.7, for two of them).
#
# The game uses the PNG frames, not a GIF: a GIF holds at most 256 colours a frame and the pictures have about 1,000 (each frame got
# its own palette at first, so still pixels flickered). The preview GIF here uses one palette for all its frames.
#
# Finished cards (their settings, on kura's original pictures; the stills in public/gpu/ are now each card's first frame):
#   rtx-5090     {"fans": [[25, 13], [70, 13]], "R": 12.3, "Rin": 4.6, "Y0": 2, "Y1": 23, "HUB": 3.0, "gap_px": [[72, 16], [31, 22]]}
#   arc-b580     {"fans": [[40, 13], [69, 13]], "R": 11.5, "Rin": 11.5, "Y0": 3, "Y1": 23, "HUB": 3.0}
#   rtx-5070-ti  {"fans": [[24.5, 13.5], [71.5, 13.5]], "R": 12.7, "Rin": 12.7, "Y0": 3, "Y1": 23, "HUB": 3.3, "connected": true,
#                 "gap_px": [[14, 5], [81, 21]]}
#   rtx-5080     {"fans": [[72, 13]], "R": 12.75, "Rin": 12.75, "Y0": 3, "Y1": 23, "HUB": 3.0, "connected": true}
# Still to do: rtx-5070, rtx-4090 (one fan each, X frame: like the 5080), rx-9070 and rx-9070-xt (three fans), gtx-1080-ti (a blower);
# the voodoo3-3000's fan is under the 3dfx logo, so it would turn the logo too (kura hasn't decided).
import json, math, os, sys, tempfile
from PIL import Image

FRAMES, MS, SUB = 24, 20, 3
lum = lambda p: .3 * p[0] + .59 * p[1] + .11 * p[2]
dist = lambda x, y, cx, cy: math.hypot(x + .5 - cx, y + .5 - cy)
hour = lambda x, y, cx, cy: round((math.degrees(math.atan2(x + .5 - cx, -(y + .5 - cy))) % 360) / 30, 1)   # 12 at the top, 3 at the right


def look(name):
    im = Image.open(f"public/gpu/{name}.png").convert("RGBA")
    print("     " + "".join(f"{x:4}" for x in range(im.width)))
    for y in range(im.height):
        print(f"{y:3}: " + "".join(f"{int(lum(p)) if p[3] else -1:4}" for p in (im.getpixel((x, y)) for x in range(im.width))))
    print("(brightness 0-255; -1 is see-through)")


def spin(name, fans, R, Rin, Y0, Y1, HUB=3.0, connected=False, gap_px=(), src=None):
    im = Image.open(src or f"public/gpu/{name}.png").convert("RGBA")
    W, H = im.size
    sp = im.load()
    near = lambda R_: [(x, y) for cx, cy in fans for y in range(H) for x in range(W) if dist(x, y, cx, cy) <= R_]
    hub = sorted((sp[p] for p in near(HUB) if lum(sp[p]) > 80), key=lum)
    LIGHT, MID, DARK = hub[-1], hub[len(hub) // 2], hub[0]
    darks = sorted(lum(sp[p]) for p in near(R) if sp[p][3] and lum(sp[p]) < 40)
    GAP = next(sp[p] for p in near(R) if sp[p][3] and lum(sp[p]) == darks[len(darks) // 2])   # the fan's usual dark gap colour
    for cx, cy in fans:   # the old hub's silver just outside the new round hub would circle it as dots
        for y in range(H):
            for x in range(W):
                if HUB < dist(x, y, cx, cy) <= 4.6 and lum(sp[x, y]) > 80: sp[x, y] = GAP
    for p in gap_px: sp[tuple(p)] = GAP
    frame_px = set()
    if connected:
        todo = [(x, y) for cx, cy in fans for y in range(H) for x in range(W) if R < dist(x, y, cx, cy) <= R + 1.5 and sp[x, y][3] and lum(sp[x, y]) > 80]
        while todo:
            x, y = todo.pop()
            if (x, y) in frame_px or not (0 <= x < W and 0 <= y < H) or not sp[x, y][3] or lum(sp[x, y]) <= 80: continue
            if min(dist(x, y, cx, cy) for cx, cy in fans) <= 4.6: continue
            frame_px.add((x, y))
            todo += [(x + i, y + j) for i in (-1, 0, 1) for j in (-1, 0, 1) if i or j]

    def still(x, y, cx, cy):
        if y < Y0 or y > Y1 or sp[x, y][3] == 0: return True
        return (x, y) in frame_px if connected else (dist(x, y, cx, cy) > Rin and lum(sp[x, y]) > 80)

    def frame(a):
        out = im.copy()
        px = out.load()
        ca, sa = math.cos(a), math.sin(a)
        for cx, cy in fans:
            for y in range(H):
                for x in range(W):
                    dx, dy = x + .5 - cx, y + .5 - cy
                    if dx * dx + dy * dy > R * R or still(x, y, cx, cy): continue
                    if math.hypot(dx, dy) <= HUB:
                        t = dx + dy
                        px[x, y] = LIGHT if t < -1.5 else DARK if t > 1.5 else MID
                        continue
                    acc, n = [0, 0, 0, 0], 0
                    for j in range(SUB):
                        for i in range(SUB):
                            ux, uy = dx + (i + .5) / SUB - .5, dy + (j + .5) / SUB - .5
                            sx, sy = int(cx + ux * ca + uy * sa), int(cy - ux * sa + uy * ca)
                            ok = 0 <= sx < W and 0 <= sy < H and HUB < dist(sx, sy, cx, cy) <= R and not still(sx, sy, cx, cy)
                            p = sp[sx, sy] if ok else GAP
                            acc = [acc[k] + p[k] for k in range(4)]
                            n += 1
                    px[x, y] = tuple(round(v / n) for v in acc)
        return out

    frames = [frame(2 * math.pi * k / FRAMES) for k in range(FRAMES)]
    strip = Image.new("RGBA", (W * FRAMES, H), (0, 0, 0, 0))
    for i, f in enumerate(frames): strip.paste(f, (i * W, 0))

    # the checks
    orig = Image.open(src or f"public/gpu/{name}.png").convert("RGBA")
    inside = lambda x, y: any(dist(x, y, cx, cy) <= R for cx, cy in fans)
    stills = [(x, y, hour(x, y, cx, cy)) for cx, cy in fans for y in range(Y0, Y1 + 1) for x in range(W)
              if 4.6 < dist(x, y, cx, cy) <= R and len({f.getpixel((x, y)) for f in frames}) == 1 and lum(frames[0].getpixel((x, y))) > 60]
    stubs = [(x, y, hour(x, y, cx, cy)) for cx, cy in fans for y in range(Y0, Y1 + 1) for x in range(W)
             if R < dist(x, y, cx, cy) <= R + 1.1 and sp[x, y][3] and lum(sp[x, y]) > 60 and (x, y) not in frame_px]
    moved = sum(1 for x in range(W) for y in range(H) if not inside(x, y) and any(f.getpixel((x, y)) != orig.getpixel((x, y)) for f in frames))
    print("still bright pixels inside a fan (x, y, o'clock):", stills or "none")
    print("bright pixels just outside R, not frame (x, y, o'clock):", stubs or "none", "(the frame's own edge can show here too)")
    print("pixels changed outside the fans:", moved, "(should be 0, apart from gap_px pixels outside R)")

    # a preview GIF: 6x big and real size, on the card colour behind, one palette for every frame
    out_dir = os.path.join(tempfile.gettempdir(), "spin")
    os.makedirs(out_dir, exist_ok=True)
    pv = []
    for f in frames:
        b = Image.new("RGBA", f.size, (40, 44, 52, 255))
        b.alpha_composite(f)
        b = b.convert("RGB")
        c = Image.new("RGB", (W * 6 + 20 + W + 20, H * 6 + 20), (20, 22, 26))
        c.paste(b.resize((W * 6, H * 6), Image.NEAREST), (10, 10))
        c.paste(b, (W * 6 + 30, 10 + H * 3 - 15))
        pv.append(c)
    allrgb = Image.new("RGB", (pv[0].width, pv[0].height * len(pv)))
    for i, f in enumerate(pv): allrgb.paste(f, (0, i * f.height))
    pal = allrgb.quantize(colors=255, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE)
    q = [f.quantize(palette=pal, dither=Image.Dither.NONE) for f in pv]
    gif = os.path.join(out_dir, f"{name}-preview.gif")
    q[0].save(gif, save_all=True, append_images=q[1:], duration=MS, loop=0)
    print("preview:", gif)
    return strip


if __name__ == "__main__":
    if len(sys.argv) >= 3 and sys.argv[1] == "look":
        look(sys.argv[2])
        sys.exit()
    if len(sys.argv) < 2:
        print(__doc__ or "see the notes at the top of tools/spin.py")
        sys.exit(1)
    s = json.loads(sys.argv[1])
    strip = spin(**s)
    if "--write" in sys.argv[2:]:
        strip.save(f"public/gpu/{s['name']}-frames.png", optimize=True)
        strip.crop((0, 0, 88, 31)).save(f"public/gpu/{s['name']}.png", optimize=True)
        print(f"saved public/gpu/{s['name']}-frames.png and its first frame as public/gpu/{s['name']}.png")
