// Build-time image fetch. Downloads royalty-free Pexels photos into public/images
// so they are served from the site's own domain (no runtime hotlinking).
// Runs before `astro build`. Fail-soft with retries so a transient miss does not break deploy.
import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const OUT = "public/images";

const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1400`;

const IMAGES = {
  "hero.jpg": px(10252687),
  "og.jpg": px(12180092),
  "fire-damage-restoration.jpg": px(10252682),
  "smoke-soot-removal.jpg": px(28576631),
  "water-damage-restoration.jpg": px(18302377),
  "board-up-roof-tarp.jpg": px(8106736),
  "contents-pack-out.jpg": px(7203849),
  "odor-removal.jpg": px(2123430),
  "work-soot-wall.jpg": px(6195284),
  "work-air-mover.jpg": px(17301209),
  "work-board-up.jpg": px(29127440),
  "work-contents.jpg": px(4554242),
  "work-ceiling.jpg": px(30499666),
  "work-air-scrubber.jpg": px(7417504),
  "area-grapevine.jpg": px(15048771),
  "area-colleyville.jpg": px(3958954),
  "area-keller.jpg": px(8583638),
  "area-westlake.jpg": px(22485304),
  "area-trophy-club.jpg": px(19443316),
  "area-roanoke.jpg": px(6093742),

  // brand assets (committed to the repo; pulled from GitHub raw at build time)
  "logo.jpg": "https://raw.githubusercontent.com/darthanalyst/firedamagesouthlake/main/public/images/logo.jpg",
  "favicon.png": "https://raw.githubusercontent.com/darthanalyst/firedamagesouthlake/main/public/images/favicon.png",
};

async function fetchOne(name, src) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 4000) throw new Error(`too small (${buf.length}B)`);
      await writeFile(join(OUT, name), buf);
      console.log(`  ok  ${name} (${(buf.length / 1024).toFixed(0)}KB)`);
      return true;
    } catch (err) {
      console.warn(`  retry ${name}: ${err.message}`);
    }
  }
  console.error(`  FAIL ${name} (left missing)`);
  return false;
}

await mkdir(OUT, { recursive: true });
console.log(`Fetching ${Object.keys(IMAGES).length} images into ${OUT} ...`);
let ok = 0;
for (const [name, src] of Object.entries(IMAGES)) {
  try {
    await access(join(OUT, name));
    console.log(`  skip ${name} (exists)`);
    ok++;
    continue;
  } catch {}
  if (await fetchOne(name, src)) ok++;
}
console.log(`Done: ${ok}/${Object.keys(IMAGES).length} images ready.`);
