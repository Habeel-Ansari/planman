// ===== Product catalog (products.html) =====
// Reads window.PRODUCTS / BRANDS / CATEGORIES / COLLECTIONS from data/products.js.
// Supports deep links: products.html?brand=nvidia&cat=gpu-servers&q=b300
// A collection key (e.g. cat=gold) works like a category but matches products by their `series`.

(function () {
    const grid = document.getElementById('product-grid');
    if (!grid || !window.PRODUCTS) return;

    const products = window.PRODUCTS;
    const brands = window.BRANDS;
    const cats = window.CATEGORIES;
    const cols = window.COLLECTIONS || {};
    const label = (c) => cats[c] || (cols[c] && cols[c].name);
    const inCat = (p, c) => c === 'all' || p.cat === c || (!!cols[c] && p.series === c);
    const catArt = window.CATEGORY_ART || {};
    const art = (p) => p.img || `assets/illustrations/${p.art || catArt[p.cat] || 'servers'}.svg`;
    const page = (p) => `products/${p.id}.html`;

    const params = new URLSearchParams(location.search);
    const state = {
        brand: brands[params.get('brand')] ? params.get('brand') : 'all',
        cat: label(params.get('cat')) ? params.get('cat') : 'all',
        q: params.get('q') || '',
        // selected tab per section of a grouped collection, e.g. ?cat=gold&sub=multi-node,client-system
        sub: new Set((params.get('sub') || '').split(',').filter(Boolean))
    };

    const brandWrap = document.getElementById('brand-filter');
    const catWrap = document.getElementById('cat-filter');
    const search = document.getElementById('catalog-search');
    const meta = document.getElementById('results-meta');
    search.value = state.q;

    // Page header follows the active filter, so a menu link to a category or brand visibly changes the page
    const heroTitle = document.getElementById('catalog-title');
    const heroLead = document.getElementById('catalog-lead');
    const heroLogo = document.getElementById('catalog-logo');
    const hero = heroTitle && { title: heroTitle.textContent, lead: heroLead.textContent, doc: document.title };
    function renderHero() {
        if (!hero) return;
        const b = state.brand !== 'all' ? brands[state.brand] : '';
        const c = state.cat !== 'all' ? label(state.cat) : '';
        const filtered = b || c;
        heroTitle.textContent = !filtered ? hero.title : b && c ? `${b} ${c}` : c || `${b} Products`;
        heroLead.textContent = !filtered ? hero.lead
            : (c && ((window.CATEGORY_LEADS || {})[state.cat] || (cols[state.cat] || {}).lead)) || (window.BRAND_LEADS || {})[state.brand] || hero.lead;
        document.title = filtered ? `${heroTitle.textContent} | Plan Man` : hero.doc;
        // collection logo (e.g. Supermicro Gold Series), otherwise the selected brand's logo
        const logo = (cols[state.cat] || {}).logo || (window.BRAND_LOGOS || {})[state.brand];
        if (heroLogo) {
            heroLogo.hidden = !logo;
            if (logo) { heroLogo.src = logo; heroLogo.alt = cols[state.cat] ? cols[state.cat].name.split(' ')[0] : brands[state.brand]; heroLogo.dataset.brand = logo.split('/').pop().split('.')[0]; }
        }
    }

    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    function matches(p, ignore) {
        if (ignore !== 'brand' && state.brand !== 'all' && p.brand !== state.brand) return false;
        if (ignore !== 'cat' && !inCat(p, state.cat)) return false;
        if (state.q) {
            const hay = (p.name + ' ' + p.summary + ' ' + p.specs.map((s) => s.join(' ')).join(' ') + ' ' + brands[p.brand] + ' ' + cats[p.cat] + (cols[p.series] ? ' ' + cols[p.series].name + ' ' + cols[p.series].badge : '')).toLowerCase();
            if (!state.q.toLowerCase().split(/\s+/).every((w) => hay.includes(w))) return false;
        }
        return true;
    }

    function renderFilters() {
        const brandCount = (b) => products.filter((p) => (b === 'all' || p.brand === b) && matches(p, 'brand')).length;
        brandWrap.innerHTML = ['all', ...Object.keys(brands)].map((b) =>
            `<button class="chip" data-brand="${b}" aria-pressed="${state.brand === b}">${b === 'all' ? 'All brands' : esc(brands[b])} <span class="count">${brandCount(b)}</span></button>`
        ).join('');

        const catCount = (c) => products.filter((p) => inCat(p, c) && matches(p, 'cat')).length;
        const item = (c, text, cls = '') =>
            `<li${cls ? ` class="${cls}"` : ''}><button data-cat="${c}" aria-pressed="${state.cat === c}"><span>${esc(text)}</span><span class="count">${catCount(c)}</span></button></li>`;
        // the selected category or collection is listed right under "All products"
        const keys = [...Object.keys(cats), ...Object.keys(cols)];
        const ordered = state.cat === 'all' ? keys : [state.cat, ...keys.filter((c) => c !== state.cat)];
        catWrap.innerHTML = item('all', state.brand !== 'all' ? `All ${brands[state.brand]} products` : 'All products') + ordered.map((c) => cols[c]
            ? item(c, cols[c].nav || cols[c].name, c === state.cat ? 'cat-collection is-pinned' : 'cat-collection')
            : item(c, cats[c])).join('');
    }

    function card(p, i) {
        const top = p.specs.slice(0, 3).map(([k, v]) => `<li><strong>${esc(k)}:</strong> ${esc(v)}</li>`).join('');
        return `
        <article class="product-card" data-brand="${p.brand}" style="--i:${Math.min(i, 12)}">
            <div class="product-visual${p.img ? ' has-photo' : ''}">
                <span class="tag tag-${p.brand}">${esc(brands[p.brand])}</span>
                ${p.isNew ? '<span class="badge-new">New</span>' : cols[p.series] ? `<span class="badge-new badge-series">${esc(cols[p.series].badge)}</span>` : ''}
                <img src="${art(p)}" alt="${p.img ? esc(p.imgAlt || p.name) : ''}" loading="lazy"${p.imgSize ? ` width="${p.imgSize[0]}" height="${p.imgSize[1]}"` : ''}>
            </div>
            <div class="product-body">
                <div class="product-cat">${esc(cats[p.cat])}</div>
                <h3><a href="${page(p)}">${esc(p.name)}</a></h3>
                <p>${esc(p.summary)}</p>
                <ul class="spec-list">${top}</ul>
                <div class="product-actions">
                    <a class="btn btn-primary btn-sm" href="contact.html?product=${encodeURIComponent(p.name)}">Request Quote</a>
                </div>
            </div>
        </article>`;
    }

    // A collection with groups (Supermicro Gold Series) is shown section by section, each with its own tabs,
    // mirroring the vendor's page. Products join a section/tab through seriesGroup: 'section/tab'.
    function groupedHtml(groups, list) {
        // overview bar: every section with its count, so the whole collection is visible at a glance
        const counts = groups.map((g) => [g, list.filter((p) => (p.seriesGroup || '').split('/')[0] === g.key).length]).filter(([, n]) => n);
        const overview = `<nav class="series-overview" aria-label="Sections">
                <span class="series-overview-label">${list.length} systems in ${counts.length} section${counts.length === 1 ? '' : 's'}</span>
                ${counts.map(([g, n]) => `<a class="chip" href="#series-${g.key}">${esc(g.name)} <span class="count">${n}</span></a>`).join('')}
            </nav>`;
        return overview + groups.map((g) => {
            const inGroup = list.filter((p) => (p.seriesGroup || '').split('/')[0] === g.key);
            if (!inGroup.length) return '';
            const subs = g.subs.filter(([k]) => inGroup.some((p) => p.seriesGroup === `${g.key}/${k}`));
            const active = subs.map(([k]) => k).find((k) => state.sub.has(k)) || 'all';
            const shown = active === 'all' ? inGroup : inGroup.filter((p) => p.seriesGroup === `${g.key}/${active}`);
            const tab = (k, text, n) => `<button class="chip" data-sub="${k}" data-group="${g.key}" aria-pressed="${active === k}">${esc(text)} <span class="count">${n}</span></button>`;
            const tabs = subs.length > 1
                ? `<div class="series-tabs" role="group" aria-label="${esc(g.name)} categories">${tab('all', 'All', inGroup.length)}${subs.map(([k, n]) => tab(k, n, inGroup.filter((p) => p.seriesGroup === `${g.key}/${k}`).length)).join('')}</div>`
                : `<div class="series-tabs"><span class="chip" aria-pressed="true">${esc(subs[0][1])} <span class="count">${inGroup.length}</span></span></div>`;
            return `<section class="series-group" id="series-${g.key}">
                <div class="series-head"><h3>${esc(g.name)}</h3>${tabs}</div>
                <div class="product-grid">${shown.map((p, i) => card(p, i)).join('')}</div>
            </section>`;
        }).join('');
    }

    function render() {
        const list = products.filter((p) => matches(p));
        const groups = (cols[state.cat] || {}).groups;
        grid.classList.toggle('is-grouped', !!(groups && list.length));
        grid.innerHTML = list.length
            ? (groups ? groupedHtml(groups, list) : list.map((p, i) => card(p, i)).join(''))
            : `<div class="empty-state" style="grid-column:1/-1"><i class="ph ph-magnifying-glass"></i>No products match your filters. <br>Try a different search, or <a class="accent" href="contact.html">ask our engineers</a> — we source beyond this catalog.</div>`;

        const parts = [];
        if (state.brand !== 'all') parts.push(brands[state.brand]);
        if (state.cat !== 'all') parts.push(label(state.cat));
        meta.textContent = `${list.length} product${list.length === 1 ? '' : 's'}${parts.length ? ' · ' + parts.join(' · ') : ''}${state.q ? ` · “${state.q}”` : ''}`;

        renderFilters();
        renderHero();

        const qs = new URLSearchParams();
        if (state.brand !== 'all') qs.set('brand', state.brand);
        if (state.cat !== 'all') qs.set('cat', state.cat);
        if (state.q) qs.set('q', state.q);
        if (groups && state.sub.size) qs.set('sub', [...state.sub].join(','));
        history.replaceState(null, '', location.pathname + (qs.toString() ? '?' + qs : '') + location.hash);
    }

    brandWrap.addEventListener('click', (e) => {
        const b = e.target.closest('[data-brand]');
        if (b) { state.brand = b.dataset.brand; render(); }
    });
    catWrap.addEventListener('click', (e) => {
        const b = e.target.closest('[data-cat]');
        if (b) { state.cat = b.dataset.cat; state.sub.clear(); render(); }
    });
    // section tabs inside a grouped collection: one selected tab per section
    grid.addEventListener('click', (e) => {
        const jump = e.target.closest('.series-overview a[href^="#series-"]');
        if (jump) {
            e.preventDefault();
            const target = document.getElementById(jump.getAttribute('href').slice(1));
            if (!target) return;
            const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
            target.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' });
            // if smooth scrolling did not happen (some browsers/embedded views), jump there directly
            setTimeout(() => { if (Math.abs(target.getBoundingClientRect().top) > 150) target.scrollIntoView({ behavior: 'instant', block: 'start' }); }, 900);
            return;
        }
        const b = e.target.closest('button[data-sub]');
        if (!b) return;
        const g = (cols[state.cat].groups || []).find((x) => x.key === b.dataset.group);
        g.subs.forEach(([k]) => state.sub.delete(k));
        if (b.dataset.sub !== 'all') state.sub.add(b.dataset.sub);
        render();
    });
    let t;
    search.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => { state.q = search.value.trim(); render(); }, 150);
    });

    render();

    // deep link to a tab (e.g. from a product page): bring its section into view
    if (state.sub.size) {
        const sec = [...grid.querySelectorAll('.series-group')].find((s) => s.querySelector('button[aria-pressed="true"]:not([data-sub="all"])'));
        if (sec) window.addEventListener('load', () => sec.scrollIntoView({ behavior: 'instant', block: 'start' }));
    }
})();
