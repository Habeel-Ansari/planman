// Generates the Plan Man SVG illustration set.
// Usage: node tools/gen-illustrations.js assets/illustrations
const fs = require('fs');
const path = require('path');
const OUT = process.argv[2];
fs.mkdirSync(OUT, { recursive: true });

const G = '#8cc63f', B = '#4da3ff', P = '#c8a2ff', O = '#ff9a55';
const S1 = '#111111', S2 = '#181818', S3 = '#202020', L = '#2c2c2c', L2 = '#3a3a3a';

const style = `<style>
.led{animation:blink 2.4s ease-in-out infinite}
.d1{animation-delay:.5s}.d2{animation-delay:1.1s}.d3{animation-delay:1.7s}
.flow{stroke-dasharray:6 10;animation:flow 1.4s linear infinite}
.flow-rev{stroke-dasharray:6 10;animation:flow 1.4s linear infinite reverse}
.slow{animation-duration:2.8s}
.pulse{animation:pulse 3s ease-in-out infinite}
.float{animation:float 6s ease-in-out infinite}
.spin{animation:spin 1.2s linear infinite;transform-box:fill-box;transform-origin:center}
.draw{stroke-dasharray:600;stroke-dashoffset:600;animation:draw 4s ease-in-out infinite}
.grow{animation:grow 3s ease-in-out infinite;transform-box:fill-box;transform-origin:bottom}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
@keyframes flow{to{stroke-dashoffset:-32}}
@keyframes pulse{0%,100%{opacity:.35}50%{opacity:1}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes draw{0%{stroke-dashoffset:600}50%,80%{stroke-dashoffset:0}100%{stroke-dashoffset:-600}}
@keyframes grow{0%,100%{transform:scaleY(.55)}50%{transform:scaleY(1)}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;stroke-dashoffset:0!important}}
</style>`;

const glow = (id, color, op = .35) =>
    `<radialGradient id="${id}"><stop offset="0" stop-color="${color}" stop-opacity="${op}"/><stop offset="1" stop-color="${color}" stop-opacity="0"/></radialGradient>`;

function svg(name, w, h, defs, body) {
    const out = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" fill="none">${style}<defs>${defs}</defs>${body}</svg>\n`;
    fs.writeFileSync(path.join(OUT, name + '.svg'), out);
}
const d = (i) => ['', ' d1', ' d2', ' d3'][i % 4];

/* 1. Rack-scale system with liquid manifolds */
(() => {
    let b = `<ellipse cx="200" cy="302" rx="170" ry="16" fill="url(#g)"/>`;
    b += `<rect x="130" y="16" width="140" height="278" rx="6" fill="${S1}" stroke="${L2}"/>`;
    // pipes
    b += `<path d="M112 30V284" stroke="${B}" stroke-width="5" stroke-linecap="round" opacity=".5"/><path d="M112 30V284" stroke="#bfe0ff" stroke-width="2" class="flow slow"/>`;
    b += `<path d="M288 30V284" stroke="${O}" stroke-width="5" stroke-linecap="round" opacity=".45"/><path d="M288 284V30" stroke="#ffd2b0" stroke-width="2" class="flow slow"/>`;
    let y = 28, i = 0;
    const tray = () => {
        b += `<rect x="140" y="${y}" width="120" height="14" rx="2" fill="${S2}" stroke="${L}"/>`;
        b += `<path d="M146 ${y + 7}h56" stroke="${L}" stroke-width="2"/>`;
        b += `<circle class="led${d(i)}" cx="250" cy="${y + 7}" r="2.6" fill="${G}"/>`;
        b += `<path d="M115 ${y + 7}h25M260 ${y + 7}h25" stroke="${L2}" stroke-width="1.5"/>`;
        y += 17; i++;
    };
    for (let k = 0; k < 6; k++) tray();
    for (let k = 0; k < 3; k++) {
        b += `<rect x="140" y="${y}" width="120" height="14" rx="2" fill="#141f0a" stroke="${G}" stroke-opacity=".55"/>`;
        for (let p = 0; p < 12; p++) b += `<rect class="led${d(p + k)}" x="${146 + p * 9}" y="${y + 4}" width="6" height="6" rx="1" fill="${G}" opacity=".8"/>`;
        y += 17;
    }
    for (let k = 0; k < 6; k++) tray();
    svg('rack', 400, 320, glow('g', G), b);
})();

/* 2. 8-GPU server tray (top-down) */
(() => {
    let b = `<ellipse cx="200" cy="270" rx="170" ry="18" fill="url(#g)"/>`;
    b += `<rect x="30" y="40" width="340" height="220" rx="10" fill="${S1}" stroke="${L2}"/>`;
    for (let i = 0; i < 4; i++) {
        const cy = 72 + i * 52;
        b += `<circle cx="62" cy="${cy}" r="19" fill="${S2}" stroke="${L2}"/>`;
        b += `<g class="spin"><path d="M62 ${cy - 15}v30M47 ${cy}h30M51 ${cy - 11}l22 22M73 ${cy - 11}l-22 22" stroke="${L2}" stroke-width="3"/></g>`;
        b += `<circle cx="62" cy="${cy}" r="4" fill="${L2}"/>`;
    }
    for (let row = 0; row < 2; row++) for (let c = 0; c < 4; c++) {
        const x = 100 + c * 58, yy = row ? 164 : 54;
        b += `<rect x="${x}" y="${yy}" width="50" height="80" rx="4" fill="${S2}" stroke="${L}"/>`;
        for (let f = 0; f < 6; f++) b += `<path d="M${x + 8 + f * 7} ${yy + 12}v60" stroke="${L}" stroke-width="2"/>`;
        b += `<rect x="${x}" y="${yy}" width="50" height="5" rx="2" fill="${G}" class="pulse" style="animation-delay:${(row * 4 + c) * .25}s"/>`;
    }
    b += `<rect x="100" y="142" width="224" height="14" rx="3" fill="#141f0a" stroke="${G}" stroke-opacity=".6"/>`;
    b += `<path d="M106 149H318" stroke="${G}" stroke-width="2" class="flow"/>`;
    for (let i = 0; i < 8; i++) {
        b += `<rect x="338" y="${56 + i * 25}" width="22" height="16" rx="2" fill="${S3}" stroke="${B}" stroke-opacity=".6"/>`;
        b += `<circle class="led${d(i)}" cx="349" cy="${64 + i * 25}" r="2.4" fill="${B}"/>`;
    }
    svg('gpu-server', 400, 300, glow('g', G), b);
})();

/* 3. PCIe GPU card */
(() => {
    let b = `<ellipse cx="200" cy="230" rx="160" ry="16" fill="url(#g)"/>`;
    b += `<g class="float">`;
    b += `<rect x="28" y="56" width="14" height="148" rx="2" fill="#2a2a2a" stroke="${L2}"/>`;
    b += `<rect x="40" y="68" width="320" height="124" rx="10" fill="${S2}" stroke="${L2}"/>`;
    b += `<rect x="52" y="80" width="296" height="100" rx="6" fill="${S1}"/>`;
    for (let x = 62; x < 340; x += 8) b += `<path d="M${x} 90v80" stroke="${L}" stroke-width="2"/>`;
    b += `<path d="M52 80H348" stroke="${G}" stroke-width="3" class="flow"/>`;
    b += `<rect x="150" y="112" width="100" height="36" rx="6" fill="${S2}" stroke="${G}" stroke-opacity=".5"/>`;
    b += `<rect x="170" y="124" width="60" height="12" rx="2" fill="${G}" class="pulse"/>`;
    b += `<rect x="316" y="52" width="28" height="16" rx="2" fill="${S3}" stroke="${L2}"/>`;
    for (let i = 0; i < 22; i++) b += `<rect x="${86 + i * 8}" y="192" width="5" height="14" fill="#9a8440"/>`;
    b += `</g>`;
    svg('gpu-card', 400, 260, glow('g', G), b);
})();

/* 4. Spine-leaf network fabric */
(() => {
    const spines = [[140, 51], [260, 51]];
    const leaves = [65, 155, 245, 335];
    let b = `<ellipse cx="200" cy="280" rx="180" ry="14" fill="url(#g)"/>`;
    for (const [sx] of spines) for (const lx of leaves) {
        b += `<path d="M${sx} 62L${lx} 130" stroke="${L2}"/>`;
        b += `<path d="M${sx} 62L${lx} 130" stroke="${G}" stroke-width="1.5" class="flow slow" opacity=".8"/>`;
    }
    leaves.forEach((lx, i) => {
        for (const off of [-14, 14]) {
            b += `<path d="M${lx} 150L${lx + off} 212" stroke="${L2}"/><path d="M${lx} 150L${lx + off} 212" stroke="${B}" stroke-width="1.5" class="flow" opacity=".8"/>`;
            b += `<rect x="${lx + off - 11}" y="212" width="22" height="36" rx="3" fill="${S2}" stroke="${L2}"/>`;
            b += `<path d="M${lx + off - 6} 222h12M${lx + off - 6} 230h12" stroke="${L}" stroke-width="2"/>`;
            b += `<circle class="led${d(i + (off > 0 ? 1 : 0))}" cx="${lx + off}" cy="240" r="2.4" fill="${G}"/>`;
        }
        b += `<rect x="${lx - 26}" y="130" width="52" height="20" rx="3" fill="${S2}" stroke="${B}" stroke-opacity=".7"/>`;
        for (let p = 0; p < 5; p++) b += `<rect x="${lx - 20 + p * 9}" y="137" width="6" height="6" rx="1" fill="${B}" class="led${d(p + i)}"/>`;
    });
    for (const [sx, y] of spines) {
        b += `<rect x="${sx - 34}" y="${y - 11}" width="68" height="22" rx="3" fill="#141f0a" stroke="${G}"/>`;
        for (let p = 0; p < 6; p++) b += `<rect x="${sx - 27 + p * 9}" y="${y - 3}" width="6" height="6" rx="1" fill="${G}" class="led${d(p)}"/>`;
    }
    const packets = [['M140 62L65 130', 0], ['M260 62L245 130', .6], ['M140 62L335 130', 1.2], ['M260 62L155 130', 1.8]];
    for (const [p, delay] of packets) b += `<circle r="3.5" fill="#e8ffd0"><animateMotion path="${p}" dur="2.4s" begin="${delay}s" repeatCount="indefinite"/></circle>`;
    svg('network', 400, 300, glow('g', G, .25), b);
})();

/* 5. Storage arrays */
(() => {
    let b = `<ellipse cx="200" cy="282" rx="170" ry="14" fill="url(#g)"/>`;
    for (const [yy, col] of [[40, B], [150, G]]) {
        b += `<rect x="50" y="${yy}" width="300" height="96" rx="8" fill="${S1}" stroke="${L2}"/>`;
        for (let i = 0; i < 12; i++) {
            const x = 64 + i * 23;
            b += `<rect x="${x}" y="${yy + 12}" width="19" height="72" rx="2" fill="${S2}" stroke="${L}"/>`;
            b += `<path d="M${x + 5} ${yy + 22}h9" stroke="${L2}" stroke-width="2"/>`;
            b += `<rect class="led${d(i * 3 + (yy > 100 ? 1 : 0))}" x="${x + 4}" y="${yy + 74}" width="11" height="3" rx="1" fill="${col}"/>`;
        }
    }
    svg('storage', 400, 300, glow('g', B, .3), b);
})();

/* 6. Liquid cooling loop */
(() => {
    let b = `<ellipse cx="200" cy="276" rx="170" ry="14" fill="url(#g)"/>`;
    b += `<rect x="36" y="70" width="100" height="170" rx="8" fill="${S1}" stroke="${L2}"/>`;
    b += `<rect x="50" y="84" width="72" height="30" rx="3" fill="${S2}" stroke="${B}" stroke-opacity=".6"/>`;
    b += `<path d="M56 104l10-8 10 6 10-10 10 8 10-6" stroke="${B}" stroke-width="2" class="draw"/>`;
    b += `<circle cx="86" cy="170" r="30" fill="${S2}" stroke="${L2}"/><g class="spin"><path d="M86 146v48M62 170h48M69 153l34 34M103 153l-34 34" stroke="${B}" stroke-width="3" opacity=".7"/></g><circle cx="86" cy="170" r="6" fill="${L2}"/>`;
    b += `<rect x="238" y="70" width="126" height="170" rx="8" fill="${S1}" stroke="${L2}"/>`;
    b += `<rect x="268" y="120" width="66" height="66" rx="6" fill="${S2}" stroke="${G}" stroke-opacity=".6"/>`;
    b += `<path d="M258 132H344M344 132V148H258V164H344V180H258" stroke="${B}" stroke-width="4" stroke-linejoin="round" opacity=".6"/>`;
    b += `<path d="M258 132H344M344 132V148H258V164H344V180H258" stroke="#cfe7ff" stroke-width="1.5" class="flow"/>`;
    b += `<path d="M136 110H238" stroke="${B}" stroke-width="7" stroke-linecap="round" opacity=".5"/><path d="M136 110H238" stroke="#cfe7ff" stroke-width="2" class="flow"/>`;
    b += `<path d="M238 210H136" stroke="${O}" stroke-width="7" stroke-linecap="round" opacity=".5"/><path d="M238 210H136" stroke="#ffd9bd" stroke-width="2" class="flow"/>`;
    b += `<g class="float"><path d="M187 50c0 0-14 16-14 26a14 14 0 0 0 28 0c0-10-14-26-14-26z" fill="${B}" opacity=".85"/></g>`;
    svg('cooling', 400, 300, glow('g', B, .3), b);
})();

/* 7. Hosting / cloud */
(() => {
    let b = `<ellipse cx="200" cy="282" rx="170" ry="14" fill="url(#g)"/>`;
    b += `<path d="M112 168H290A40 40 0 0 0 286 90A56 56 0 0 0 182 74A46 46 0 0 0 112 108A30 30 0 0 0 112 168Z" fill="${S1}" stroke="${G}" stroke-width="2"/>`;
    for (let r = 0; r < 2; r++) for (let c = 0; c < 5; c++)
        b += `<rect x="${146 + c * 24}" y="${106 + r * 24}" width="18" height="18" rx="3" fill="#141f0a" stroke="${G}" stroke-opacity=".7" class="pulse" style="animation-delay:${(r * 5 + c) * .3}s"/>`;
    b += `<path d="M180 172V204" stroke="${G}" stroke-width="2" class="flow-rev"/><path d="M220 172V204" stroke="${B}" stroke-width="2" class="flow"/>`;
    for (let i = 0; i < 3; i++) {
        const yy = 206 + i * 22;
        b += `<rect x="130" y="${yy}" width="140" height="18" rx="3" fill="${S2}" stroke="${L2}"/>`;
        b += `<path d="M138 ${yy + 9}h60" stroke="${L}" stroke-width="2"/>`;
        b += `<circle class="led${d(i)}" cx="258" cy="${yy + 9}" r="2.6" fill="${G}"/><circle class="led${d(i + 2)}" cx="248" cy="${yy + 9}" r="2" fill="${B}"/>`;
    }
    svg('cloud', 400, 300, glow('g', G, .28), b);
})();

/* 8. Deskside AI supercomputer */
(() => {
    let b = `<ellipse cx="200" cy="262" rx="130" ry="16" fill="url(#g)"/>`;
    b += `<g class="float">`;
    b += `<path d="M130 110L166 76H300L264 110Z" fill="${S3}" stroke="${L2}"/>`;
    b += `<path d="M264 110L300 76V200L264 236Z" fill="#141414" stroke="${L2}"/>`;
    b += `<rect x="130" y="110" width="134" height="126" rx="6" fill="${S2}" stroke="${L2}"/>`;
    for (let r = 0; r < 6; r++) for (let c = 0; c < 9; c++) b += `<circle cx="${146 + c * 13}" cy="${130 + r * 13}" r="2.4" fill="${L2}"/>`;
    b += `<path d="M142 214H252" stroke="${G}" stroke-width="3" stroke-linecap="round" class="pulse"/>`;
    b += `<circle class="led" cx="248" cy="122" r="3" fill="${G}"/>`;
    b += `<path d="M276 110V200" stroke="${G}" stroke-width="2" opacity=".6" class="flow slow"/>`;
    b += `</g>`;
    svg('desktop', 400, 300, glow('g', G, .35), b);
})();

/* 9. HA server cluster */
(() => {
    const nodes = [[200, 62], [92, 214], [308, 214]];
    let b = `<ellipse cx="200" cy="278" rx="170" ry="14" fill="url(#g)"/>`;
    const edges = [[0, 1], [1, 2], [2, 0]];
    for (const [a, c] of edges) {
        const [x1, y1] = nodes[a], [x2, y2] = nodes[c];
        b += `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${L2}"/><path d="M${x1} ${y1}L${x2} ${y2}" stroke="${G}" stroke-width="1.5" class="flow slow" opacity=".7"/>`;
    }
    for (const [x, y] of nodes) b += `<path d="M${x} ${y}L200 158" stroke="${B}" stroke-width="1.5" stroke-dasharray="3 5" opacity=".7"/>`;
    b += `<ellipse cx="200" cy="146" rx="26" ry="8" fill="${S3}" stroke="${B}"/><path d="M174 146V172A26 8 0 0 0 226 172V146" fill="${S2}" stroke="${B}"/><path d="M174 159A26 8 0 0 0 226 159" stroke="${B}" opacity=".6"/>`;
    nodes.forEach(([x, y], i) => {
        b += `<rect x="${x - 42}" y="${y - 26}" width="84" height="52" rx="6" fill="${S1}" stroke="${i === 0 ? G : L2}"/>`;
        b += `<path d="M${x - 32} ${y - 10}h40M${x - 32} ${y + 2}h40M${x - 32} ${y + 14}h40" stroke="${L}" stroke-width="3"/>`;
        b += `<circle class="led${d(i)}" cx="${x + 28}" cy="${y - 10}" r="3" fill="${G}"/>`;
    });
    b += `<circle r="4" fill="#e8ffd0"><animateMotion path="M200 62L92 214L308 214Z" dur="4s" repeatCount="indefinite"/></circle>`;
    svg('cluster', 400, 300, glow('g', G, .25), b);
})();

/* 10. HPC simulation mesh */
(() => {
    const U = 16, V = 11;
    const pt = (u, v) => {
        const peak = 70 * Math.exp(-((u - 8) ** 2 + (v - 5) ** 2) / 14) - 26 * Math.exp(-((u - 3) ** 2 + (v - 8) ** 2) / 6);
        return [30 + u * 17 + v * 8, 112 + v * 14 - peak];
    };
    const grad = `<linearGradient id="m" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${G}"/><stop offset="1" stop-color="${B}"/></linearGradient>`;
    let b = `<ellipse cx="200" cy="276" rx="170" ry="14" fill="url(#g)"/>`;
    for (let v = 0; v <= V; v++) {
        const pts = []; for (let u = 0; u <= U; u++) pts.push(pt(u, v).map((n) => n.toFixed(1)).join(','));
        b += `<polyline points="${pts.join(' ')}" stroke="url(#m)" stroke-width="1.2" opacity="${.35 + .5 * (v / V)}"/>`;
    }
    for (let u = 0; u <= U; u++) {
        const pts = []; for (let v = 0; v <= V; v++) pts.push(pt(u, v).map((n) => n.toFixed(1)).join(','));
        b += `<polyline points="${pts.join(' ')}" stroke="url(#m)" stroke-width="1.2" opacity=".45"/>`;
    }
    const [px, py] = pt(8, 5);
    b += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="6" fill="${G}" class="pulse"/><circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="16" stroke="${G}" class="pulse" style="animation-delay:.8s"/>`;
    svg('hpc', 400, 300, glow('g', B, .25) + grad, b);
})();

/* 11. Neural network (AI) */
(() => {
    const layers = [[70, 4], [160, 6], [245, 6], [330, 3]];
    const pos = layers.map(([x, n]) => Array.from({ length: n }, (_, i) => [x, 150 + (i - (n - 1) / 2) * 38]));
    let b = `<ellipse cx="200" cy="284" rx="170" ry="12" fill="url(#g)"/>`;
    for (let l = 0; l < pos.length - 1; l++) for (const [x1, y1] of pos[l]) for (const [x2, y2] of pos[l + 1])
        b += `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${L2}" stroke-width="1"/>`;
    const hot = [[0, 1, 1, 2], [1, 2, 2, 4], [2, 4, 3, 1], [0, 3, 1, 4], [1, 4, 2, 1], [2, 1, 3, 0]];
    hot.forEach(([l1, i1, l2, i2], k) => {
        const [x1, y1] = pos[l1][i1], [x2, y2] = pos[l2][i2];
        b += `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${G}" stroke-width="1.6" class="flow" style="animation-delay:${k * .3}s"/>`;
    });
    pos.forEach((layer, l) => layer.forEach(([x, y], i) => {
        const c = l === 0 || l === 3 ? B : G;
        b += `<circle cx="${x}" cy="${y}" r="10" fill="${S1}" stroke="${c}" stroke-width="1.5"/>`;
        b += `<circle cx="${x}" cy="${y}" r="4.5" fill="${c}" class="pulse" style="animation-delay:${(l * 6 + i) * .22}s"/>`;
    }));
    svg('ai', 400, 300, glow('g', G, .25), b);
})();

/* 12. VDI */
(() => {
    let b = `<ellipse cx="200" cy="282" rx="170" ry="12" fill="url(#g)"/>`;
    b += `<rect x="40" y="96" width="92" height="110" rx="8" fill="${S1}" stroke="${G}" stroke-opacity=".7"/>`;
    for (let i = 0; i < 4; i++) b += `<rect x="52" y="${108 + i * 22}" width="68" height="16" rx="2" fill="${S2}" stroke="${L}"/><circle class="led${d(i)}" cx="110" cy="${116 + i * 22}" r="2.4" fill="${G}"/>`;
    const mons = [[270, 62], [300, 150], [270, 238]];
    mons.forEach(([x, y], i) => {
        b += `<path d="M132 151C190 151 200 ${y} ${x - 50} ${y}" stroke="${L2}"/><path d="M132 151C190 151 200 ${y} ${x - 50} ${y}" stroke="${B}" stroke-width="1.5" class="flow" style="animation-delay:${i * .4}s"/>`;
        b += `<rect x="${x - 50}" y="${y - 30}" width="100" height="58" rx="5" fill="${S1}" stroke="${L2}"/>`;
        b += `<rect x="${x - 44}" y="${y - 24}" width="88" height="46" rx="2" fill="#0f1a24"/>`;
        b += `<path d="M${x - 36} ${y + 12}l18-14 14 8 20-18 18 10" stroke="${[G, B, P][i]}" stroke-width="2" class="draw" style="animation-delay:${i * .6}s"/>`;
    });
    svg('vdi', 400, 300, glow('g', B, .25), b);
})();

/* 13. Edge */
(() => {
    let b = `<ellipse cx="200" cy="270" rx="150" ry="14" fill="url(#g)"/>`;
    for (let i = 0; i < 3; i++) {
        const r = 40 + i * 30;
        b += `<path d="M${200 - r} 112A${r} ${r} 0 0 1 ${200 + r} 112" stroke="${G}" stroke-width="2" class="pulse" style="animation-delay:${i * .5}s" fill="none"/>`;
    }
    b += `<path d="M200 112V150" stroke="${L2}" stroke-width="3"/><circle cx="200" cy="108" r="6" fill="${G}"/>`;
    b += `<rect x="140" y="150" width="120" height="70" rx="8" fill="${S2}" stroke="${L2}"/>`;
    for (let i = 0; i < 4; i++) b += `<rect x="${152 + i * 16}" y="196" width="10" height="12" rx="1" fill="${S1}" stroke="${L}"/>`;
    b += `<circle class="led" cx="244" cy="166" r="3" fill="${G}"/><circle class="led d2" cx="232" cy="166" r="3" fill="${B}"/>`;
    const ends = [[70, 210], [330, 210]];
    for (const [x, y] of ends) {
        b += `<path d="M${x < 200 ? 140 : 260} 185L${x} ${y}" stroke="${B}" stroke-width="1.5" class="flow"/>`;
        b += `<circle cx="${x}" cy="${y}" r="18" fill="${S1}" stroke="${B}"/><circle cx="${x}" cy="${y}" r="6" fill="${B}" class="pulse"/>`;
    }
    svg('edge', 400, 300, glow('g', G, .3), b);
})();

/* 14. Software / management dashboard */
(() => {
    let b = `<ellipse cx="200" cy="282" rx="170" ry="12" fill="url(#g)"/>`;
    b += `<rect x="40" y="40" width="320" height="220" rx="10" fill="${S1}" stroke="${L2}"/>`;
    b += `<path d="M40 64H360" stroke="${L2}"/><circle cx="56" cy="52" r="4" fill="${L2}"/><circle cx="70" cy="52" r="4" fill="${L2}"/><circle cx="84" cy="52" r="4" fill="${G}"/>`;
    b += `<rect x="52" y="76" width="70" height="172" rx="4" fill="${S2}"/>`;
    for (let i = 0; i < 6; i++) b += `<path d="M62 ${94 + i * 24}h${i === 1 ? 50 : 40}" stroke="${i === 1 ? G : L2}" stroke-width="3" stroke-linecap="round"/>`;
    b += `<rect x="134" y="76" width="214" height="96" rx="4" fill="${S2}"/>`;
    b += `<path d="M146 150l26-20 22 10 28-30 26 16 28-24 24 12" stroke="${G}" stroke-width="2.5" stroke-linejoin="round" class="draw"/>`;
    for (let i = 0; i < 7; i++) b += `<rect x="${146 + i * 28}" y="192" width="16" height="48" rx="2" fill="${i % 3 ? B : G}" opacity=".85" class="grow" style="animation-delay:${i * .3}s"/>`;
    svg('software', 400, 300, glow('g', G, .22), b);
})();

/* 15. Rack & multi-node servers */
(() => {
    let b = `<ellipse cx="200" cy="286" rx="170" ry="12" fill="url(#g)"/>`;
    for (let i = 0; i < 4; i++) {
        const y = 48 + i * 52;
        b += `<rect x="54" y="${y}" width="292" height="44" rx="5" fill="${S1}" stroke="${L2}"/>`;
        b += `<rect x="46" y="${y + 6}" width="8" height="32" rx="2" fill="${S3}"/><rect x="346" y="${y + 6}" width="8" height="32" rx="2" fill="${S3}"/>`;
        for (let k = 0; k < 10; k++) b += `<rect x="${64 + k * 17}" y="${y + 8}" width="13" height="28" rx="2" fill="${S2}" stroke="${L}"/><rect class="led${d(k + i)}" x="${67 + k * 17}" y="${y + 30}" width="7" height="2" fill="${k % 4 ? G : B}"/>`;
        for (let v = 0; v < 6; v++) b += `<path d="M${244 + v * 10} ${y + 10}v24" stroke="${L}" stroke-width="3"/>`;
        b += `<circle class="led${d(i)}" cx="324" cy="${y + 22}" r="3" fill="${G}"/>`;
    }
    svg('servers', 400, 300, glow('g', G, .22), b);
})();

/* ---------- Industry illustrations ---------- */
const A = '#ffc56b'; // warm window light
const lit = (r, c, k = 5) => (r * 7 + c * 3) % k === 0;

/* 16. Hospitality: hotel with guest Wi-Fi */
(() => {
    let b = `<ellipse cx="200" cy="262" rx="175" ry="14" fill="url(#g)"/>`;
    for (let i = 0; i < 3; i++) {
        const r = 12 + i * 10;
        b += `<path d="M${200 - r} 52A${r} ${r} 0 0 1 ${200 + r} 52" stroke="${G}" stroke-width="2" class="pulse" style="animation-delay:${i * .4}s"/>`;
    }
    b += `<path d="M200 70V52" stroke="${L2}" stroke-width="2"/><circle cx="200" cy="52" r="3" fill="${G}"/>`;
    for (const x of [70, 250]) {
        b += `<rect x="${x}" y="140" width="80" height="112" rx="3" fill="${S1}" stroke="${L2}"/>`;
        for (let r = 0; r < 5; r++) for (let c = 0; c < 3; c++)
            b += `<rect x="${x + 10 + c * 22}" y="${152 + r * 19}" width="14" height="10" rx="1" fill="${lit(r, c + x, 4) ? A : S2}"${lit(r, c + x, 4) ? ` class="pulse" style="animation-delay:${(r + c) * .4}s"` : ''}/>`;
    }
    b += `<rect x="150" y="70" width="100" height="182" rx="4" fill="${S1}" stroke="${L2}"/>`;
    for (let r = 0; r < 8; r++) for (let c = 0; c < 4; c++)
        b += `<rect x="${160 + c * 22}" y="${82 + r * 17}" width="14" height="10" rx="1" fill="${lit(r, c) ? A : S2}"${lit(r, c) ? ` class="pulse" style="animation-delay:${(r * 4 + c) * .2}s"` : ''}/>`;
    b += `<rect x="182" y="224" width="36" height="28" rx="2" fill="${S2}" stroke="${L2}"/><path d="M172 222H228" stroke="${G}" stroke-width="3" stroke-linecap="round"/>`;
    svg('hospitality', 400, 280, glow('g', A, .22), b);
})();

/* 17. Education: university campus */
(() => {
    let b = `<ellipse cx="200" cy="266" rx="175" ry="14" fill="url(#g)"/>`;
    b += `<path d="M70 112L200 50L330 112Z" fill="${S2}" stroke="${L2}"/>`;
    b += `<circle cx="200" cy="90" r="12" stroke="${G}" stroke-width="2"/><circle cx="200" cy="90" r="4" fill="${G}" class="pulse"/>`;
    b += `<rect x="80" y="112" width="240" height="10" fill="${S3}" stroke="${L2}"/>`;
    b += `<rect x="86" y="122" width="228" height="112" fill="${S1}"/>`;
    for (let i = 0; i < 6; i++) b += `<rect x="${96 + i * 40}" y="126" width="14" height="106" rx="2" fill="${S2}" stroke="${L}"/>`;
    for (let i = 0; i < 5; i++) b += `<rect x="${116 + i * 40}" y="150" width="14" height="60" rx="1" fill="#0f1a24" stroke="${B}" stroke-opacity=".5"/><path d="M${118 + i * 40} ${200}v-${14 + (i % 3) * 10}" stroke="${B}" stroke-width="3" class="grow" style="animation-delay:${i * .35}s"/>`;
    b += `<rect x="70" y="234" width="260" height="8" fill="${S3}"/><rect x="58" y="242" width="284" height="8" fill="${S2}"/>`;
    b += `<g class="float"><path d="M318 52l24-10 24 10-24 10z" fill="${G}"/><path d="M328 56v10c8 6 20 6 28 0V56" stroke="${G}" stroke-width="2"/></g>`;
    svg('education', 400, 280, glow('g', B, .25), b);
})();

/* 18. Manufacturing: factory with edge AI inspection */
(() => {
    let b = `<defs><clipPath id="belt"><rect x="60" y="200" width="300" height="40"/></clipPath></defs>`;
    b += `<ellipse cx="200" cy="266" rx="175" ry="14" fill="url(#g)"/>`;
    b += `<rect x="202" y="52" width="20" height="46" fill="${S2}" stroke="${L2}"/><circle class="led" cx="212" cy="58" r="3" fill="${O}"/>`;
    b += `<path d="M40 232V122L90 92V122L140 92V122L190 92V122L240 92V232Z" fill="${S1}" stroke="${L2}"/>`;
    for (let i = 0; i < 4; i++) b += `<rect x="${54 + i * 46}" y="142" width="32" height="18" rx="2" fill="${S2}" stroke="${L}"/>`;
    b += `<g class="led d2"><path d="M150 176L132 222H168Z" fill="${G}" opacity=".18"/></g>`;
    b += `<rect x="142" y="166" width="16" height="12" rx="2" fill="${S3}" stroke="${G}"/><circle cx="150" cy="172" r="2.5" fill="${G}"/>`;
    b += `<g><animateTransform attributeName="transform" type="rotate" values="-14 312 206;14 312 206;-14 312 206" dur="4s" repeatCount="indefinite"/>`;
    b += `<path d="M312 206V160L346 176" stroke="${B}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="312" cy="160" r="5" fill="${S1}" stroke="${B}" stroke-width="2"/><path d="M346 176l6 10M346 176l10 2" stroke="${B}" stroke-width="3" stroke-linecap="round"/></g>`;
    b += `<rect x="298" y="204" width="28" height="18" rx="3" fill="${S2}" stroke="${L2}"/>`;
    b += `<g clip-path="url(#belt)"><g><animateTransform attributeName="transform" type="translate" from="0 0" to="100 0" dur="3s" repeatCount="indefinite"/>`;
    for (const x of [-40, 60, 160, 260]) b += `<rect x="${x}" y="208" width="26" height="18" rx="2" fill="${S3}" stroke="${G}" stroke-opacity=".7"/>`;
    b += `</g></g>`;
    b += `<rect x="56" y="226" width="308" height="10" rx="5" fill="${S2}" stroke="${L2}"/>`;
    for (let x = 66; x < 360; x += 24) b += `<circle cx="${x}" cy="231" r="3" fill="${L2}"/>`;
    svg('manufacturing', 400, 280, glow('g', G, .22), b);
})();

/* 19. Corporate enterprise: office towers on one network */
(() => {
    let b = `<ellipse cx="200" cy="266" rx="175" ry="14" fill="url(#g)"/>`;
    const towers = [[70, 120, 70, 132], [165, 60, 80, 192], [270, 140, 60, 112]];
    b += `<path d="M105 120Q150 40 205 60" stroke="${G}" stroke-width="1.5" class="flow slow"/><path d="M205 60Q270 60 300 140" stroke="${B}" stroke-width="1.5" class="flow slow"/>`;
    towers.forEach(([x, y, w, h], t) => {
        b += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${S1}" stroke="${L2}"/>`;
        const cols = Math.floor((w - 12) / 16), rows = Math.floor((h - 16) / 16);
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
            const on = lit(r + t, c, 4);
            b += `<rect x="${x + 8 + c * 16}" y="${y + 10 + r * 16}" width="10" height="8" rx="1" fill="${on ? (t === 1 ? G : B) : S2}"${on ? ` class="pulse" style="animation-delay:${(r + c) * .3}s" opacity=".85"` : ''}/>`;
        }
        b += `<circle cx="${x + w / 2}" cy="${y}" r="4" fill="${t === 1 ? G : B}" class="led${d(t)}"/>`;
    });
    svg('enterprise', 400, 280, glow('g', B, .22), b);
})();

console.log('wrote', fs.readdirSync(OUT).join(', '));
