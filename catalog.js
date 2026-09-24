// ===== Product catalog (products.html) =====
// Reads window.PRODUCTS / BRANDS / CATEGORIES from data/products.js.
// Supports deep links: products.html?brand=nvidia&cat=gpu-servers&q=b300

(function () {
    const grid = document.getElementById('product-grid');
    if (!grid || !window.PRODUCTS) return;

    const products = window.PRODUCTS;
    const brands = window.BRANDS;
    const cats = window.CATEGORIES;
    const catArt = window.CATEGORY_ART || {};
    const art = (p) => `assets/illustrations/${p.art || catArt[p.cat] || 'servers'}.svg`;

    const params = new URLSearchParams(location.search);
    const state = {
        brand: brands[params.get('brand')] ? params.get('brand') : 'all',
        cat: cats[params.get('cat')] ? params.get('cat') : 'all',
        q: params.get('q') || ''
    };

    const brandWrap = document.getElementById('brand-filter');
    const catWrap = document.getElementById('cat-filter');
    const search = document.getElementById('catalog-search');
    const meta = document.getElementById('results-meta');
    search.value = state.q;

    const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

    function matches(p, ignore) {
        if (ignore !== 'brand' && state.brand !== 'all' && p.brand !== state.brand) return false;
        if (ignore !== 'cat' && state.cat !== 'all' && p.cat !== state.cat) return false;
        if (state.q) {
            const hay = (p.name + ' ' + p.summary + ' ' + p.specs.map((s) => s.join(' ')).join(' ') + ' ' + brands[p.brand] + ' ' + cats[p.cat]).toLowerCase();
            if (!state.q.toLowerCase().split(/\s+/).every((w) => hay.includes(w))) return false;
        }
        return true;
    }

    function renderFilters() {
        const brandCount = (b) => products.filter((p) => (b === 'all' || p.brand === b) && matches(p, 'brand')).length;
        brandWrap.innerHTML = ['all', ...Object.keys(brands)].map((b) =>
            `<button class="chip" data-brand="${b}" aria-pressed="${state.brand === b}">${b === 'all' ? 'All brands' : esc(brands[b])} <span class="count">${brandCount(b)}</span></button>`
        ).join('');

        const catCount = (c) => products.filter((p) => (c === 'all' || p.cat === c) && matches(p, 'cat')).length;
        catWrap.innerHTML = ['all', ...Object.keys(cats)].map((c) =>
            `<li><button data-cat="${c}" aria-pressed="${state.cat === c}"><span>${c === 'all' ? 'All products' : esc(cats[c])}</span><span class="count">${catCount(c)}</span></button></li>`
        ).join('');
    }

    function card(p, i) {
        const top = p.specs.slice(0, 3).map(([k, v]) => `<li><strong>${esc(k)}:</strong> ${esc(v)}</li>`).join('');
        return `
        <article class="product-card" data-brand="${p.brand}" style="--i:${Math.min(i, 12)}">
            <div class="product-visual">
                <span class="tag tag-${p.brand}">${esc(brands[p.brand])}</span>
                ${p.isNew ? '<span class="badge-new">New</span>' : ''}
                <img src="${art(p)}" alt="" loading="lazy">
            </div>
            <div class="product-body">
                <div class="product-cat">${esc(cats[p.cat])}</div>
                <h3>${esc(p.name)}</h3>
                <p>${esc(p.summary)}</p>
                <ul class="spec-list">${top}</ul>
                <div class="product-actions">
                    <button class="btn btn-ghost btn-sm" data-details="${p.id}">Specs</button>
                    <a class="btn btn-primary btn-sm" href="contact.html?product=${encodeURIComponent(p.name)}">Request Quote</a>
                </div>
            </div>
        </article>`;
    }

    function render() {
        const list = products.filter((p) => matches(p));
        grid.innerHTML = list.length
            ? list.map((p, i) => card(p, i)).join('')
            : `<div class="empty-state" style="grid-column:1/-1"><i class="ph ph-magnifying-glass"></i>No products match your filters. <br>Try a different search, or <a class="accent" href="contact.html">ask our engineers</a> — we source beyond this catalog.</div>`;

        const parts = [];
        if (state.brand !== 'all') parts.push(brands[state.brand]);
        if (state.cat !== 'all') parts.push(cats[state.cat]);
        meta.textContent = `${list.length} product${list.length === 1 ? '' : 's'}${parts.length ? ' · ' + parts.join(' · ') : ''}${state.q ? ` · “${state.q}”` : ''}`;

        renderFilters();

        const qs = new URLSearchParams();
        if (state.brand !== 'all') qs.set('brand', state.brand);
        if (state.cat !== 'all') qs.set('cat', state.cat);
        if (state.q) qs.set('q', state.q);
        history.replaceState(null, '', location.pathname + (qs.toString() ? '?' + qs : ''));
    }

    brandWrap.addEventListener('click', (e) => {
        const b = e.target.closest('[data-brand]');
        if (b) { state.brand = b.dataset.brand; render(); }
    });
    catWrap.addEventListener('click', (e) => {
        const b = e.target.closest('[data-cat]');
        if (b) { state.cat = b.dataset.cat; render(); }
    });
    let t;
    search.addEventListener('input', () => {
        clearTimeout(t);
        t = setTimeout(() => { state.q = search.value.trim(); render(); }, 150);
    });

    // Detail modal
    const modal = document.getElementById('product-modal');
    const modalContent = document.getElementById('modal-content');
    let lastFocus;

    function openModal(id) {
        const p = products.find((x) => x.id === id);
        if (!p) return;
        lastFocus = document.activeElement;
        modalContent.innerHTML = `
            <div class="product-card" data-brand="${p.brand}" style="border:0;background:none">
                <div class="product-visual">
                    <span class="tag tag-${p.brand}">${esc(brands[p.brand])}</span>
                    <img src="${art(p)}" alt="">
                </div>
            </div>
            <div class="modal-body">
                <div class="product-cat">${esc(cats[p.cat])}</div>
                <h3 id="modal-title">${esc(p.name)}</h3>
                <p>${esc(p.summary)}</p>
                <table class="spec-table"><tbody>
                    ${p.specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}
                </tbody></table>
                <div class="modal-actions">
                    <a class="btn btn-primary" href="contact.html?product=${encodeURIComponent(p.name)}">Request a Quote <i class="ph ph-arrow-right"></i></a>
                    <a class="btn btn-ghost" href="contact.html?product=${encodeURIComponent(p.name)}&type=design">Talk to a Solutions Architect</a>
                </div>
                <p class="form-note">Configurations vary by region and availability. Plan Man will confirm the final bill of materials, lead time and pricing with you.</p>
            </div>`;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
        modal.querySelector('.modal-close').focus();
    }
    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
        if (lastFocus) lastFocus.focus();
    }

    grid.addEventListener('click', (e) => {
        const b = e.target.closest('[data-details]');
        if (b) openModal(b.dataset.details);
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('.modal-close')) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });

    render();
})();
