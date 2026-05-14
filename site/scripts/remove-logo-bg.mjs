import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, "..", "public", "kilimani-walk-logo.png");
const publicPath = path.join(__dirname, "..", "public", "kilimani-walk-logo.png");
const tmpPath = path.join(__dirname, "kilimani-walk-logo-processed.png");
const thresh = 42;

const { data, info } = await sharp(srcPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const w = info.width;
const h = info.height;
const ch = info.channels;

function idx(x, y) {
  return (y * w + x) * ch;
}

function isBg(x, y) {
  const i = idx(x, y);
  return data[i] <= thresh && data[i + 1] <= thresh && data[i + 2] <= thresh;
}

const visited = new Uint8Array(w * h);
const q = [];

function enqueue(x, y) {
  if (x < 0 || x >= w || y < 0 || y >= h) return;
  const p = y * w + x;
  if (visited[p]) return;
  if (!isBg(x, y)) return;
  visited[p] = 1;
  q.push(x, y);
}

for (let x = 0; x < w; x++) {
  enqueue(x, 0);
  enqueue(x, h - 1);
}
for (let y = 0; y < h; y++) {
  enqueue(0, y);
  enqueue(w - 1, y);
}

let qi = 0;
while (qi < q.length) {
  const x = q[qi++];
  const y = q[qi++];
  const i = idx(x, y);
  data[i + 3] = 0;

  const nbr = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ];
  for (const [nx, ny] of nbr) {
    if (nx < 0 || nx >= w || ny < 0 || ny >= h) continue;
    const p = ny * w + nx;
    if (visited[p]) continue;
    if (isBg(nx, ny)) {
      visited[p] = 1;
      q.push(nx, ny);
    }
  }
}

const out = await sharp(Buffer.from(data), {
  raw: { width: w, height: h, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .toBuffer();

fs.writeFileSync(tmpPath, out);
try {
  fs.copyFileSync(tmpPath, publicPath);
  fs.unlinkSync(tmpPath);
  console.log("Updated", publicPath);
} catch (err) {
  console.error("Could not copy to public (file may be open). Temp file:", tmpPath);
  console.error(err);
  process.exitCode = 1;
}
