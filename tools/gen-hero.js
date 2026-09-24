// Generates the home-page hero illustration (isometric server cluster + sector cards)
// and writes it into index.html between the HERO-ART markers.
// Colours come from CSS variables (--eco-*, --accent) so it follows the light/dark theme.
// Usage: node tools/gen-hero.js
const fs = require('fs');
const path = require('path');

const OX = 642, OY = 322;
const P = (x, y, z) => [OX + (x - z) * 0.866, OY + (x + z) * 0.5 - y];
const pt = (p) => p.map((n) => n.toFixed(1)).join(',');
const poly = (pts, cls, extra = '') => `<polygon class="${cls}" points="${pts.map(pt).join(' ')}"${extra}/>`;
const line = (a, b, cls, extra = '') => `<line class="${cls}" x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}"${extra}/>`;

let s = '';

// Platform under the cluster
s += `<ellipse class="eco-glow" cx="${P(-7, 0, 45)[0].toFixed(1)}" cy="${(P(-7, 0, 45)[1] + 6).toFixed(1)}" rx="340" ry="100"/>`;
s += poly([P(-190, 0, -40), P(176, 0, -40), P(176, 0, 136), P(-190, 0, 136)], 'eco-plate');
s += poly([P(-190, 0, -40), P(176, 0, -40), P(176, 0, 136), P(-190, 0, 136)], 'eco-plate-edge');

// Racks (drawn back to front)
const racks = [-150, -78, -6, 66];
const W = 70, D = 84, H = 190;
racks.forEach((x0, r) => {
    const z0 = 0;
    s += poly([P(x0, H, z0), P(x0 + W, H, z0), P(x0 + W, H, z0 + D), P(x0, H, z0 + D)], 'eco-top');
    s += poly([P(x0 + W, 0, z0), P(x0 + W, 0, z0 + D), P(x0 + W, H, z0 + D), P(x0 + W, H, z0)], 'eco-side');
    s += poly([P(x0, 0, z0 + D), P(x0 + W, 0, z0 + D), P(x0 + W, H, z0 + D), P(x0, H, z0 + D)], 'eco-front');
    // server units on the front face
    const units = 11;
    for (let u = 0; u < units; u++) {
        const y = 12 + u * 15.9;
        const isSwitch = u === 5;
        s += line(P(x0 + 5, y, z0 + D), P(x0 + W - 5, y, z0 + D), 'eco-seam');
        if (isSwitch) {
            for (let k = 0; k < 8; k++) {
                const c = P(x0 + 9 + k * 7, y + 8, z0 + D);
                s += `<circle class="eco-led-g led${(k + r) % 4}" cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="1.9"/>`;
            }
        } else {
            s += line(P(x0 + 9, y + 8, z0 + D), P(x0 + 36, y + 8, z0 + D), 'eco-vent');
            const c = P(x0 + W - 10, y + 8, z0 + D);
            s += `<circle class="${(u + r) % 3 ? 'eco-led-g' : 'eco-led-b'} led${(u + r * 2) % 4}" cx="${c[0].toFixed(1)}" cy="${c[1].toFixed(1)}" r="2.2"/>`;
        }
    }
    // top edge highlight
    s += line(P(x0, H, z0 + D), P(x0 + W, H, z0 + D), 'eco-rim');
});

// Sector cards and connections
const cards = [
    { x: 70, y: 96, label: 'Hospitality', sub: 'PMS · Wi-Fi · CCTV', icon: 'hotel', from: P(-150, 150, 84), side: 'l' },
    { x: 40, y: 318, label: 'Education', sub: 'AI labs · HPC · VDI', icon: 'campus', from: P(-120, 50, 84), side: 'l' },
    { x: 936, y: 96, label: 'Manufacturing', sub: 'Edge AI · MES · ERP', icon: 'factory', from: P(136, 160, 30), side: 'r' },
    { x: 966, y: 318, label: 'Enterprise', sub: 'Cloud · Backup · DR', icon: 'office', from: P(136, 70, 50), side: 'r' }
];
const CW = 200, CH = 72;
const icons = {
    hotel: 'M-9 9V-7h18V9M-5-3h3M2-3h3M-5 2h3M2 2h3M-2 9V6h4v3',
    campus: 'M-11-2L0-9L11-2ZM-8 8V-1M-3 8V-1M3 8V-1M8 8V-1M-11 9h22',
    factory: 'M-11 9V-2l6-4v4l6-4v4l6-4V9ZM6-6V-10h3V9',
    office: 'M-9 9V-6h8V9M-1 9V-10h10V9M-6-2h2M-6 2h2M3-6h3M3-2h3M3 2h3'
};
cards.forEach((c, i) => {
    const to = c.side === 'l' ? [c.x + CW, c.y + CH / 2] : [c.x, c.y + CH / 2];
    const [fx, fy] = c.from;
    const mx = (fx + to[0]) / 2;
    const d = `M${fx.toFixed(1)} ${fy.toFixed(1)}C${mx.toFixed(1)} ${fy.toFixed(1)} ${mx.toFixed(1)} ${to[1]} ${to[0]} ${to[1]}`;
    s += `<path class="eco-link" d="${d}"/>`;
    s += `<path class="eco-flow" d="${d}" style="animation-delay:${i * 0.35}s"/>`;
    s += `<circle class="eco-pulse" r="3.5"><animateMotion path="${d}" dur="${2.6 + i * 0.3}s" begin="${i * 0.5}s" repeatCount="indefinite"/></circle>`;
    s += `<circle class="eco-port" cx="${fx.toFixed(1)}" cy="${fy.toFixed(1)}" r="3.5"/>`;
    // card
    s += `<g class="eco-node" style="animation-delay:${i * -1.4}s">`;
    s += `<rect class="eco-card" x="${c.x}" y="${c.y}" width="${CW}" height="${CH}" rx="18"/>`;
    s += `<circle class="eco-icon-bg" cx="${c.x + 36}" cy="${c.y + CH / 2}" r="20"/>`;
    s += `<path class="eco-icon" transform="translate(${c.x + 36} ${c.y + CH / 2})" d="${icons[c.icon]}"/>`;
    s += `<text class="eco-label" x="${c.x + 66}" y="${c.y + 32}">${c.label}</text>`;
    s += `<text class="eco-sub" x="${c.x + 66}" y="${c.y + 52}">${c.sub}</text>`;
    s += `</g>`;
});

const svg = `<svg class="eco" viewBox="0 0 1200 500" role="img" aria-label="One Plan Man infrastructure platform connecting hospitality, education, manufacturing and enterprise" xmlns="http://www.w3.org/2000/svg">${s}</svg>`;

const file = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(file, 'utf8');
const start = '<!-- HERO-ART -->', end = '<!-- /HERO-ART -->';
const a = html.indexOf(start), b = html.indexOf(end);
if (a < 0 || b < 0) throw new Error('HERO-ART markers not found in index.html');
fs.writeFileSync(file, html.slice(0, a + start.length) + '\n                ' + svg + '\n                ' + html.slice(b));
console.log('hero art written,', svg.length, 'chars');
