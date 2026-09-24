// ===== Plan Man — shared site behaviour =====

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const navbar = document.querySelector('.navbar');

// ---------- Navbar: background + scroll progress ----------
const progress = document.createElement('div');
progress.className = 'scroll-progress';
if (navbar) navbar.appendChild(progress);

// ---------- Light / dark theme ----------
const themeBtn = document.querySelector('.theme-toggle');
function applyThemeButton() {
    if (!themeBtn) return;
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeBtn.innerHTML = dark ? '<i class="ph ph-sun"></i>' : '<i class="ph ph-moon"></i>';
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
}
applyThemeButton();
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const root = document.documentElement;
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.classList.add('theme-anim');
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('pm-theme', next); } catch (e) { /* storage unavailable */ }
        applyThemeButton();
        setTimeout(() => root.classList.remove('theme-anim'), 400);
    });
}

// ---------- Mobile menu ----------
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        const open = document.body.classList.toggle('nav-open');
        menuToggle.setAttribute('aria-expanded', open);
        menuToggle.innerHTML = open ? '<i class="ph ph-x"></i>' : '<i class="ph ph-list"></i>';
        document.body.style.overflow = open ? 'hidden' : '';
    });
}

// ---------- Mega menu: click to toggle (touch + keyboard), hover handled in CSS ----------
document.querySelectorAll('.has-mega > button').forEach((btn) => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        const open = !item.classList.contains('open');
        document.querySelectorAll('.has-mega.open').forEach((el) => el.classList.remove('open'));
        item.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open);
    });
});
document.addEventListener('click', (e) => {
    if (!e.target.closest('.has-mega')) document.querySelectorAll('.has-mega.open').forEach((el) => el.classList.remove('open'));
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.has-mega.open').forEach((el) => el.classList.remove('open'));
});

// ---------- Tabs ----------
document.querySelectorAll('[data-tabs]').forEach((root) => {
    const buttons = root.querySelectorAll('.tab-btn');
    const panels = root.querySelectorAll('.tab-panel');
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            buttons.forEach((b) => b.setAttribute('aria-selected', b === btn));
            panels.forEach((p) => p.classList.toggle('active', p.id === btn.getAttribute('aria-controls')));
        });
    });
});

// ---------- Split headings into words for the reveal ----------
function splitWords(el) {
    let n = 0;
    const walk = (node) => {
        [...node.childNodes].forEach((child) => {
            if (child.nodeType === Node.TEXT_NODE) {
                const parts = child.textContent.split(/(\s+)/);
                const frag = document.createDocumentFragment();
                parts.forEach((part) => {
                    if (!part) return;
                    if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
                    const outer = document.createElement('span');
                    outer.className = 'split-word';
                    const inner = document.createElement('span');
                    inner.className = 'split-inner';
                    inner.style.setProperty('--w', n++);
                    inner.textContent = part;
                    outer.appendChild(inner);
                    frag.appendChild(outer);
                });
                child.replaceWith(frag);
            } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
                if (child.classList.contains('rotator')) {
                    // Keep the rotating word as one unit
                    const outer = document.createElement('span');
                    outer.className = 'split-word';
                    const inner = document.createElement('span');
                    inner.className = 'split-inner';
                    inner.style.setProperty('--w', n++);
                    child.replaceWith(outer);
                    inner.appendChild(child);
                    outer.appendChild(inner);
                } else {
                    walk(child);
                }
            }
        });
    };
    walk(el);
    el.classList.add('split-text');
}

// ---------- Rotating hero word ----------
document.querySelectorAll('.rotator[data-words]').forEach((rot) => {
    const words = rot.dataset.words.split('|');
    rot.innerHTML = words.map((w, i) => `<span${i === 0 ? ' class="is-active"' : ' aria-hidden="true"'}>${w}</span>`).join('');
    if (reduceMotion || words.length < 2) return;
    const spans = [...rot.children];
    let i = 0;
    setInterval(() => {
        const cur = spans[i];
        i = (i + 1) % spans.length;
        const next = spans[i];
        cur.classList.remove('is-active');
        cur.classList.add('is-leaving');
        cur.setAttribute('aria-hidden', 'true');
        next.classList.remove('is-leaving');
        next.classList.add('is-active');
        next.removeAttribute('aria-hidden');
        setTimeout(() => cur.classList.remove('is-leaving'), 900);
    }, 2800);
});

// ---------- Scroll reveals ----------
const splitTargets = document.querySelectorAll('.display, .h1, .h2');
document.querySelectorAll('.reveal-stagger').forEach((parent) => {
    [...parent.children].forEach((child, i) => child.style.setProperty('--i', i));
});

if (reduceMotion || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => el.classList.add('in'));
} else {
    splitTargets.forEach(splitWords);
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            el.classList.add('in');
            if (el.classList.contains('reveal-stagger')) {
                setTimeout(() => el.classList.add('settled'), 900 + el.children.length * 90);
            }
            io.unobserve(el);
        });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0 });
    document.querySelectorAll('.reveal, .reveal-stagger, .split-text').forEach((el) => io.observe(el));
}

// ---------- Scroll-driven UI (progress bar, nav, back-to-top) ----------
const topBtn = document.createElement('button');
topBtn.className = 'scroll-to-top';
topBtn.setAttribute('aria-label', 'Back to top');
topBtn.innerHTML = '<i class="ph-bold ph-caret-up"></i>';
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

// Floating actions (bottom-right): back-to-top above, WhatsApp in the corner
const WHATSAPP_NUMBER = '971585225166';
const WHATSAPP_TEXT = "Hi Plan Man, I'd like to discuss a project.";
const fab = document.createElement('div');
fab.className = 'fab-stack';
const waBtn = document.createElement('a');
waBtn.className = 'wa-btn';
waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
waBtn.target = '_blank';
waBtn.rel = 'noopener';
waBtn.setAttribute('aria-label', 'Chat with Plan Man on WhatsApp');
waBtn.innerHTML = '<span class="wa-label">Chat with us</span><i class="ph-fill ph-whatsapp-logo" aria-hidden="true"></i>';
fab.append(topBtn, waBtn);
document.body.appendChild(fab);

let ticking = false;
function onScroll() {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (navbar) navbar.classList.toggle('scrolled', y > 20);
    progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    topBtn.classList.toggle('visible', y > 400);
    ticking = false;
}
window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });
onScroll();

// ---------- Pointer effects (desktop only) ----------
if (finePointer && !reduceMotion) {
    // Spotlight on cards
    const spotSelector = '.card, .feature-card, .product-card, .contact-panel';
    const markSpots = (root = document) => root.querySelectorAll(spotSelector).forEach((el) => el.classList.add('spot'));
    markSpots();
    new MutationObserver(() => markSpots()).observe(document.body, { childList: true, subtree: true });

    document.addEventListener('pointermove', (e) => {
        const card = e.target.closest('.spot');
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });

    // 3D tilt
    document.querySelectorAll('[data-tilt]').forEach((el) => {
        el.addEventListener('pointermove', (e) => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            el.classList.add('tilting');
            el.style.transform = `perspective(1000px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
        });
        el.addEventListener('pointerleave', () => {
            el.classList.remove('tilting');
            el.style.transform = '';
        });
    });

    // Magnetic call-to-action buttons
    document.querySelectorAll('.hero-buttons .btn, .cta-band .btn').forEach((btn) => {
        btn.addEventListener('pointermove', (e) => {
            const r = btn.getBoundingClientRect();
            const dx = e.clientX - (r.left + r.width / 2);
            const dy = e.clientY - (r.top + r.height / 2);
            btn.style.transform = `translate(${dx * 0.18}px, ${dy * 0.28}px)`;
        });
        btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });

    // Hero: cursor light + parallax visual
    const hero = document.querySelector('.hero');
    if (hero) {
        const light = document.createElement('div');
        light.className = 'hero-cursor';
        hero.appendChild(light);
        const visual = hero.querySelector('.hero-visual');
        let tx = hero.clientWidth * 0.7, ty = hero.clientHeight * 0.45, cx = tx, cy = ty, raf;
        const loop = () => {
            cx += (tx - cx) * 0.08;
            cy += (ty - cy) * 0.08;
            light.style.setProperty('--cx', `${cx}px`);
            light.style.setProperty('--cy', `${cy}px`);
            raf = Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5 ? requestAnimationFrame(loop) : null;
        };
        hero.addEventListener('pointermove', (e) => {
            const r = hero.getBoundingClientRect();
            tx = e.clientX - r.left;
            ty = e.clientY - r.top;
            if (!raf) raf = requestAnimationFrame(loop);
            if (visual) {
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                visual.style.setProperty('--vx', `${px * -24}px`);
                visual.style.setProperty('--vy', `${py * -18}px`);
                visual.style.setProperty('--vr', `${px * 6}deg`);
            }
        });
        hero.addEventListener('pointerleave', () => { if (visual) ['--vx', '--vy', '--vr'].forEach((p) => visual.style.removeProperty(p)); });
        loop();
    }
}

// ---------- Scroll-linked hero zoom (Apple-style) ----------
const heroEl = document.querySelector('.hero');
const heroVisual = heroEl && heroEl.querySelector('.hero-visual');
if (heroVisual && !reduceMotion) {
    let heroTick = false;
    const zoom = () => {
        const p = Math.min(Math.max(window.scrollY / (heroEl.offsetHeight || 1), 0), 1);
        heroVisual.style.setProperty('--hero-scale', (1 + p * 0.14).toFixed(3));
        heroVisual.style.setProperty('--hero-shift', `${(p * 40).toFixed(1)}px`);
        heroEl.style.setProperty('--hero-fade', (1 - p * 0.9).toFixed(3));
        heroTick = false;
    };
    window.addEventListener('scroll', () => { if (!heroTick) { requestAnimationFrame(zoom); heroTick = true; } }, { passive: true });
    zoom();
}

// ---------- Footer year ----------
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
