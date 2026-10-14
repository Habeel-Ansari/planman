/*
 * Plan Man — SEO / AI-SEO build step.  Usage:  node tools/seo-build.js
 *
 * Re-run after editing page content, products (data/products.js) or the settings below. It is
 * idempotent: generated blocks live between <!-- X:START --> / <!-- X:END --> markers.
 *
 * It maintains:
 *   - <head> SEO block on every page: title, description, canonical, robots, Open Graph, Twitter,
 *     icons, manifest, non-blocking fonts/icons, JSON-LD structured data (LocalBusiness, WebSite,
 *     WebPage, BreadcrumbList, FAQPage, Service list)
 *   - <main id="main"> landmark + "skip to content" link, dead social links removed
 *   - descriptive alt text + width/height on illustrations (no layout shift)
 *   - static, crawlable product catalog in products.html (JS still enhances it)
 *   - one detail page per product in products/<id>.html (from data/products.js + data/product-details.js)
 *   - visible FAQ section on the home page (same data as the FAQPage schema)
 *   - sitemap.xml, robots.txt (search + AI crawlers welcome), llms.txt, llms-full.txt, site.webmanifest
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://planman.ae';
const TODAY = new Date().toISOString().slice(0, 10);
const OG_IMAGE = `${SITE}/assets/og/planman-og.png`;

const BUSINESS = {
  name: 'Plan Man',
  legalHint: 'Plan Man',
  alternateNames: ['Planman', 'PlanMan', 'Plan Man UAE', 'Planman UAE'],
  tagline: 'The Engine For Your Digital Success',
  description: 'Plan Man is a Dubai-based enterprise IT solutions provider and hardware supplier. We take projects from requirements and design through hardware supply, deployment and after-sales support for hospitality groups, universities, manufacturers and enterprises across the UAE, supplying servers, storage, GPUs and networking from all premium brands.',
  phone: '+971585225166',
  phoneDisplay: '+971 58 522 5166',
  email: 'sales@planmanme.com',
  supportEmail: 'info@planmanme.com',
  street: 'IFZA Properties, Dubai Silicon Oasis (DSO)',
  city: 'Dubai',
  country: 'AE',
  hours: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '18:00' },
  whatsapp: 'https://wa.me/971585225166'
};

const PAGES = [
  { file: 'index.html', url: '/', name: 'Home', type: 'WebPage', priority: '1.0',
    title: 'Plan Man | Enterprise IT Solutions & Hardware in Dubai, UAE',
    description: 'Dubai IT solutions provider and hardware supplier: servers, storage, GPUs and networking from premium brands, with design, deployment and after-sales support.' },
  { file: 'industries.html', url: '/industries.html', name: 'Industries', type: 'CollectionPage', priority: '0.9',
    title: 'IT Solutions for Hotels, Universities & Industry | Plan Man',
    description: 'IT infrastructure for hotels, universities, manufacturers and enterprises in the UAE, from requirements and design to hardware supply, deployment and support.' },
  { file: 'products.html', url: '/products.html', name: 'Products', type: 'CollectionPage', priority: '0.9',
    title: 'Servers, Storage, GPUs & Networking in Dubai | Plan Man',
    description: 'Servers, storage, data center GPUs, AI systems and networking from Dell, HPE, Lenovo, NVIDIA, Supermicro, ASUS and Cisco, supplied and supported in the UAE.' },
  { file: 'solutions.html', url: '/solutions.html', name: 'Solutions', type: 'WebPage', priority: '0.8',
    title: 'AI, HPC, Clustering & Hosting Solutions, UAE | Plan Man',
    description: 'GPU clusters and AI factories, HPC, server clustering and high availability, virtualization, AI storage and hosting, designed and deployed in the UAE.' },
  { file: 'services.html', url: '/services.html', name: 'Services', type: 'WebPage', priority: '0.8',
    title: 'IT Design, Deployment & Support Services Dubai | Plan Man',
    description: 'Requirement analysis, solution design, rack integration, onsite deployment, liquid cooling, managed services and after-sales support from our Dubai team.' },
  { file: 'about.html', url: '/about.html', name: 'About', type: 'AboutPage', priority: '0.7',
    title: 'About Plan Man | IT Solution Provider in Dubai, UAE',
    description: 'Plan Man is a Dubai-based solution provider and enterprise hardware supplier for hospitality, education, manufacturing and corporate enterprise across the UAE.' },
  { file: 'contact.html', url: '/contact.html', name: 'Contact', type: 'ContactPage', priority: '0.8',
    title: 'Contact Plan Man | IT Hardware Quotes in Dubai, UAE',
    description: 'Request a quote or discuss your IT project. Call or WhatsApp +971 58 522 5166, email sales@planmanme.com or use our form. We reply within one business day.' }
];

const FAQ = [
  ['What does Plan Man do?',
   'Plan Man is a Dubai-based enterprise IT solutions provider and hardware supplier. We handle IT projects end to end: requirement analysis, solution design, hardware supply, deployment and after-sales support, for hospitality groups, universities, manufacturers and enterprises across the UAE.'],
  ['Which hardware brands does Plan Man supply?',
   'We supply complete servers, storage, GPUs, networking, workstations and power equipment from premium enterprise brands including Dell, HPE, Lenovo, NVIDIA, Supermicro, ASUS, Cisco, NetApp, Pure Storage, Synology, QNAP, Seagate, Western Digital, AMD, Intel, APC and Eaton.'],
  ['Does Plan Man supply NVIDIA GPU servers and AI infrastructure in the UAE?',
   'Yes. We supply and integrate NVIDIA-based AI infrastructure, from RTX PRO and HGX B200/B300 GPU servers to rack-scale GB300 NVL72 systems from Supermicro and ASUS, and we design and deploy GPU clusters, AI labs and inference platforms.'],
  ['Which industries does Plan Man work with?',
   'We focus on hospitality (hotels, resorts and hotel groups), universities and education, manufacturing and industrial sites, and corporate enterprises in the UAE.'],
  ['Does Plan Man provide installation and after-sales support?',
   'Yes. Our team handles installation, configuration, migration, testing and handover, and continues with after-sales support including warranty and RMA handling, maintenance and upgrades.'],
  ['Where is Plan Man located and how do I request a quote?',
   `Plan Man is located at ${BUSINESS.street}, Dubai, UAE. Call or WhatsApp ${BUSINESS.phoneDisplay}, email ${BUSINESS.email}, or send your requirements through the contact form at ${SITE}/contact.html. We reply within one business day.`]
];

const SERVICES = [
  ['Requirement Analysis & Solution Design', 'Site surveys, stakeholder workshops, solution architecture, bill of materials and budget planning.'],
  ['Enterprise Hardware Supply', 'Servers, storage, GPUs, networking and workstations from all premium brands for end customers, resellers and integrators.'],
  ['System & Rack Integration', 'Server, rack and cluster-level build, configuration and validation before shipping to site.'],
  ['Onsite Deployment', 'Rack and stack, structured cabling, network bring-up and OS/software installation.'],
  ['Liquid Cooling Integration', 'Direct liquid cooling for high-density GPU racks: CDU selection, manifolds and commissioning.'],
  ['Clustering & Platform Setup', 'Slurm, Kubernetes, VMware, Proxmox, Nutanix and Hyper-V high-availability clusters.'],
  ['Hosting & Colocation', 'Dedicated servers, rack space and private GPU cloud environments in the UAE.'],
  ['Managed Services', 'Monitoring, firmware and driver lifecycle, capacity planning and expansion.'],
  ['After-Sales Support', 'Warranty claims, vendor RMA, maintenance and upgrades by a Dubai-based team.']
];

const ILLUSTRATION_ALT = {
  rack: 'Illustration of a liquid-cooled rack-scale AI server system',
  'gpu-server': 'Illustration of an 8-GPU AI server',
  'gpu-card': 'Illustration of a data center GPU card',
  network: 'Illustration of a spine-leaf data center network',
  servers: 'Illustration of rack-mounted enterprise servers',
  storage: 'Illustration of enterprise storage arrays',
  desktop: 'Illustration of a deskside AI workstation',
  edge: 'Illustration of an edge computing server',
  software: 'Illustration of an infrastructure management dashboard',
  hospitality: 'Illustration of a hotel with guest Wi-Fi infrastructure',
  education: 'Illustration of a university campus with research computing',
  manufacturing: 'Illustration of a factory with edge AI quality inspection',
  enterprise: 'Illustration of corporate office towers connected on one network',
  cooling: 'Illustration of a liquid cooling loop for servers',
  cloud: 'Illustration of hosted cloud servers',
  cluster: 'Illustration of a high-availability server cluster',
  hpc: 'Illustration of an HPC simulation mesh',
  ai: 'Illustration of a neural network for AI workloads',
  vdi: 'Illustration of virtual desktops delivered from a data center'
};

/* ------------------------------------------------------------------ helpers */
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => fs.writeFileSync(path.join(ROOT, f), s);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const abs = (u) => SITE + u;
function block(html, name, content, anchorFn) {
  const re = new RegExp(`<!-- ${name}:START[\\s\\S]*?<!-- ${name}:END -->`);
  const wrapped = `<!-- ${name}:START (generated by tools/seo-build.js) -->\n${content}\n<!-- ${name}:END -->`;
  if (re.test(html)) return html.replace(re, wrapped);
  return anchorFn(html, wrapped);
}

const svgSize = {};
for (const f of fs.readdirSync(path.join(ROOT, 'assets/illustrations'))) {
  const m = read(`assets/illustrations/${f}`).match(/viewBox="0 0 (\d+) (\d+)"/);
  if (m) svgSize[f.replace('.svg', '')] = [m[1], m[2]];
}

// products
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(read('data/products.js'), sandbox);
vm.runInContext(read('data/product-details.js'), sandbox);
const { PRODUCTS, BRANDS, CATEGORIES, CATEGORY_ART, PRODUCT_DETAILS } = sandbox.window;
const COLLECTIONS = sandbox.window.COLLECTIONS || {};
// Card image: the product photo when there is one, otherwise the category illustration
const cardVisual = (p, esc, prefix = '') => {
  const ill = p.art || CATEGORY_ART[p.cat] || 'servers';
  const img = p.img
    ? `<img src="${prefix}${p.img}" alt="${esc(p.imgAlt || p.name)}" width="${p.imgSize[0]}" height="${p.imgSize[1]}" loading="lazy">`
    : `<img src="${prefix}assets/illustrations/${ill}.svg" alt="" width="400" height="300" loading="lazy">`;
  return `<div class="product-visual${p.img ? ' has-photo' : ''}"><span class="tag tag-${p.brand}">${esc(BRANDS[p.brand])}</span>${badgeHtml(p, esc)}${img}</div>`;
};
// "Supermicro Gold Series · Multi-Node" label on product pages, linking to that tab of the collection view
const seriesLink = (p, esc) => {
  const col = COLLECTIONS[p.series]; if (!col) return '';
  const [gk, sk] = (p.seriesGroup || '').split('/');
  const sub = ((col.groups || []).find((g) => g.key === gk) || { subs: [] }).subs.find(([k]) => k === sk);
  return `<a class="pd-series" href="${landingUrl('collection', p.series).replace('/products/', '')}${gk ? '#' + gk : ''}">${esc(col.name)}${sub ? ' · ' + esc(sub[1]) : ''}</a>`;
};
const badgeHtml = (p, esc) => p.preorder ? '<span class="badge-new badge-preorder">Pre-booking</span>' : p.isNew ? '<span class="badge-new">New</span>'
  : COLLECTIONS[p.series] ? `<span class="badge-new badge-series">${esc(COLLECTIONS[p.series].badge)}</span>` : '';
const productUrl = (p) => `/products/${p.id}.html`;
// Indexable landing pages for each brand, category and collection (products/<slug>.html). The catalog's
// ?cat= / ?brand= filter views all canonicalise to products.html, so these are what rank for
// searches like "GPU servers Dubai" or "Supermicro Gold Series UAE".
const CAT_SLUG = {
  'rack-scale': 'rack-scale-ai-systems', 'gpu-servers': 'gpu-ai-servers', accelerators: 'data-center-gpus',
  networking: 'ai-networking', servers: 'rack-multi-node-servers', storage: 'enterprise-storage',
  'desktop-ai': 'ai-workstations', client: 'desktops-client-pcs', laptops: 'ai-laptops', edge: 'edge-servers', software: 'ai-software-management'
};
const BRAND_TITLES = {
  nvidia: 'NVIDIA AI Systems, GPUs & Networking in Dubai | Plan Man',
  supermicro: 'Supermicro Servers & GPU Systems in Dubai, UAE | Plan Man',
  asus: 'ASUS Servers & AI Systems in Dubai, UAE | Plan Man',
  msi: 'MSI AI Laptops in Dubai, UAE | Plan Man'
};
const COLLECTION_SLUG = { gold: 'supermicro-gold-series' };
const COLLECTION_TITLES = { gold: 'Supermicro Gold Series Servers in Dubai, UAE | Plan Man' };
const catSlug = (c) => CAT_SLUG[c] || c;
const landingUrl = (kind, key) => `/products/${kind === 'cat' ? catSlug(key) : kind === 'collection' ? COLLECTION_SLUG[key] || key : key}.html`;
const fitText = (max, options) => options.find((o) => o.length <= max);
// lower-case a label for use mid-sentence, keeping acronyms (GPU, AI, PCs)
const lc = (s) => s.split(' ').map((w) => /[A-Z]{2}/.test(w) ? w : w.toLowerCase()).join(' ');
const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;
const preorderFirst = (keys, hasPreorder) => [...keys.filter(hasPreorder), ...keys.filter((k) => !hasPreorder(k))];
const listText = (a) => a.length < 2 ? a.join('') : `${a.slice(0, -1).join(', ')} and ${a[a.length - 1]}`;
const LANDINGS = (() => {
  const { CATEGORY_LEADS = {}, BRAND_LEADS = {}, BRAND_LOGOS = {}, BRAND_LOGOS_DARK = {} } = sandbox.window;
  const out = [];
  const describe = (lead) => fitText(160, [
    `${lead} Supplied, deployed and supported in Dubai and the UAE by Plan Man.`,
    `${lead} Supplied and supported in the UAE by Plan Man.`,
    `${lead} Available in the UAE from Plan Man.`, lead
  ]) || lead;
  for (const [b, brand] of Object.entries(BRANDS)) {
    const items = PRODUCTS.filter((p) => p.brand === b);
    if (!items.length) continue;
    const cats = preorderFirst(Object.keys(CATEGORIES).filter((c) => items.some((p) => p.cat === c)), (c) => items.some((p) => p.cat === c && p.preorder));
    out.push({
      kind: 'brand', key: b, url: landingUrl('brand', b), name: `${brand} Products`, h1: `${brand} Products in Dubai, UAE`,
      title: BRAND_TITLES[b] || `${brand} Products in Dubai, UAE | Plan Man`, lead: BRAND_LEADS[b] || '', logo: BRAND_LOGOS[b], logoDark: BRAND_LOGOS_DARK[b],
      description: describe(BRAND_LEADS[b] || `${brand} products supplied in the UAE.`), items, catalog: `products.html?brand=${b}`,
      intro: `Plan Man supplies ${brand} ${listText(cats.map((c) => lc(CATEGORIES[c])))} to organisations in Dubai and across the UAE. ${items.length === 1 ? `The ${brand} product below links` : `The ${items.length} ${brand} products below link`} to full specifications taken from ${brand}'s official product information. We size each configuration to your workload, supply genuine hardware with manufacturer warranty, and handle integration, deployment and after-sales support.`,
      groups: cats.map((c) => ({ id: catSlug(c), name: CATEGORIES[c], items: items.filter((p) => p.cat === c), more: [`All ${CATEGORIES[c]}`, `${catSlug(c)}.html`] }))
    });
  }
  for (const [c, label] of Object.entries(CATEGORIES)) {
    const items = PRODUCTS.filter((p) => p.cat === c);
    if (!items.length) continue;
    const brands = preorderFirst(Object.keys(BRANDS).filter((b) => items.some((p) => p.brand === b)), (b) => items.some((p) => p.brand === b && p.preorder));
    out.push({
      kind: 'cat', key: c, url: landingUrl('cat', c), name: label, h1: `${label} in Dubai, UAE`,
      title: fitText(60, [`${label} in Dubai, UAE | Plan Man`, `${label} in Dubai | Plan Man`, `${label} | Plan Man UAE`]) || label,
      lead: CATEGORY_LEADS[c] || '', description: describe(CATEGORY_LEADS[c] || `${label} supplied in the UAE.`), items, catalog: `products.html?cat=${c}`,
      intro: `Plan Man supplies ${lc(label)} from ${listText(brands.map((b) => BRANDS[b]))} in Dubai and across the UAE. ${items.length === 1 ? 'Open the product below' : `Compare the ${items.length} platforms below, open any of them`} for full specifications, or tell us your workload and we will recommend and quote the right configuration, then deliver, deploy and support it.`,
      groups: brands.map((b) => ({ id: b, name: BRANDS[b], items: items.filter((p) => p.brand === b), more: [`All ${BRANDS[b]} products`, `${b}.html`] }))
    });
  }
  for (const [k, col] of Object.entries(COLLECTIONS)) {
    const items = PRODUCTS.filter((p) => p.series === k);
    if (!items.length) continue;
    const groups = (col.groups || []).map((g) => ({ id: g.key, name: g.name, sub: g.subs.map(([, n]) => n).join(' · '), items: items.filter((p) => (p.seriesGroup || '').split('/')[0] === g.key) })).filter((g) => g.items.length);
    out.push({
      kind: 'collection', key: k, url: landingUrl('collection', k), name: col.name, h1: `${col.name} in Dubai, UAE`,
      title: COLLECTION_TITLES[k] || `${col.name} in Dubai, UAE | Plan Man`, lead: col.lead || '', logo: col.logo,
      description: describe(col.lead || `${col.name} supplied in the UAE.`), items, catalog: `products.html?cat=${k}`,
      intro: `The ${col.name} is a range of ${items.length} pre-configured systems across ${listText(groups.map((g) => lc(g.name)))}. Because every model is a fixed, tested configuration, lead times are short. Plan Man supplies them in Dubai and across the UAE and handles installation and after-sales support.`,
      groups
    });
  }
  return out;
})();
const missingImages = PRODUCTS.filter((p) => !fs.existsSync(path.join(ROOT, 'assets/og/products', p.id + '.jpg'))).map((p) => p.id);
if (missingImages.length) throw new Error(`Missing share images (run python tools/make-product-og.py): ${missingImages.join(', ')}`);
const missingDetails = PRODUCTS.filter((p) => !PRODUCT_DETAILS[p.id]).map((p) => p.id);
if (missingDetails.length) throw new Error(`data/product-details.js has no entry for: ${missingDetails.join(', ')}`);

// footer product links go to the indexable landing pages rather than the catalog's filter URLs
const footerLinks = (html) => html.replace(/<footer class="site-footer[\s\S]*?<\/footer>/, (f) => f.replace(/href="products\.html\?(cat|brand)=([\w-]+)"/g, (m, kind, key) => {
  const l = LANDINGS.find((x) => x.key === key && (kind === 'brand' ? x.kind === 'brand' : x.kind !== 'brand'));
  return l ? `href="${l.url.slice(1)}"` : m;
}));

/* ------------------------------------------------------------------ JSON-LD */
function jsonLd(page) {
  const url = abs(page.url);
  const org = {
    '@type': 'LocalBusiness',
    '@id': `${SITE}/#organization`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateNames,
    url: `${SITE}/`,
    logo: { '@type': 'ImageObject', url: `${SITE}/assets/logo/planman-logo.png`, width: 1423, height: 243 },
    image: OG_IMAGE,
    slogan: BUSINESS.tagline,
    description: BUSINESS.description,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: { '@type': 'PostalAddress', streetAddress: BUSINESS.street, addressLocality: BUSINESS.city, addressRegion: 'Dubai', addressCountry: BUSINESS.country },
    areaServed: { '@type': 'Country', name: 'United Arab Emirates' },
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: BUSINESS.hours.days, opens: BUSINESS.hours.opens, closes: BUSINESS.hours.closes }],
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'sales', telephone: BUSINESS.phone, email: BUSINESS.email, areaServed: 'AE', availableLanguage: ['English'] },
      { '@type': 'ContactPoint', contactType: 'customer support', email: BUSINESS.supportEmail, telephone: BUSINESS.phone, areaServed: 'AE', availableLanguage: ['English'] }
    ],
    knowsAbout: ['Enterprise servers', 'Data storage', 'NVIDIA GPU servers', 'AI infrastructure', 'High-performance computing', 'Server clustering', 'Virtualization', 'Networking', 'Liquid cooling', 'IT infrastructure for hospitality', 'IT infrastructure for education', 'IT infrastructure for manufacturing'],
    priceRange: 'Quote on request'
  };
  const website = { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: BUSINESS.name, alternateName: BUSINESS.alternateNames, description: BUSINESS.description, publisher: { '@id': `${SITE}/#organization` }, inLanguage: 'en' };
  const webpage = {
    '@type': page.type, '@id': `${url}#webpage`, url, name: page.title, description: page.description,
    isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': `${SITE}/#organization` }, inLanguage: 'en',
    primaryImageOfPage: { '@type': 'ImageObject', url: page.ogImage || OG_IMAGE }, dateModified: TODAY,
    ...(page.mainEntity ? { mainEntity: page.mainEntity } : {})
  };
  const graph = [org, website, webpage];
  if (page.url !== '/') {
    webpage.breadcrumb = { '@id': `${url}#breadcrumb` };
    const crumbs = page.crumbs || [['Home', '/'], [page.name, page.url]];
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs.map(([n, u], i) => (
      { '@type': 'ListItem', position: i + 1, name: n, item: abs(u) }
    )) });
  }
  if (page.extraGraph) graph.push(...page.extraGraph);
  if (page.url === '/') {
    graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
  }
  if (page.file === 'services.html') {
    graph.push({ '@type': 'ItemList', '@id': `${url}#services`, name: 'Plan Man IT infrastructure services', itemListElement: SERVICES.map(([n, d], i) => ({
      '@type': 'ListItem', position: i + 1, item: { '@type': 'Service', name: n, description: d, provider: { '@id': `${SITE}/#organization` }, areaServed: { '@type': 'Country', name: 'United Arab Emirates' } }
    })) });
  }
  if (page.file === 'products.html') {
    graph.push({ '@type': 'ItemList', '@id': `${url}#catalog`, name: 'Plan Man AI and data center product catalog', numberOfItems: PRODUCTS.length,
      itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, description: p.summary, url: abs(productUrl(p)) })) });
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

/* ------------------------------------------------------------------ head block */
function headBlock(page) {
  const url = abs(page.url);
  const icons = ['regular', 'bold', 'fill'].map((w) => `https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/${w}/style.css`);
  const fonts = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
  return [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">`,
    `<meta name="author" content="Plan Man">`,
    `<meta name="theme-color" content="#ffffff">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Plan Man">`,
    `<meta property="og:locale" content="en_AE">`,
    `<meta property="og:title" content="${esc(page.title)}">`,
    `<meta property="og:description" content="${esc(page.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${page.ogImage || OG_IMAGE}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${esc(page.ogAlt || 'Plan Man – Enterprise IT solutions and hardware in Dubai, UAE')}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(page.title)}">`,
    `<meta name="twitter:description" content="${esc(page.description)}">`,
    `<meta name="twitter:image" content="${page.ogImage || OG_IMAGE}">`,
    `<link rel="icon" href="/favicon.ico" sizes="any">`,
    `<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon.svg">`,
    `<link rel="icon" type="image/png" sizes="256x256" href="/assets/logo/favicon.png">`,
    `<link rel="apple-touch-icon" href="/assets/logo/apple-touch-icon.png">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>`,
    `<link rel="stylesheet" href="${fonts}" media="print" onload="this.media='all'">`,
    ...icons.map((h) => `<link rel="stylesheet" href="${h}" media="print" onload="this.media='all'">`),
    `<noscript><link rel="stylesheet" href="${fonts}">${icons.map((h) => `<link rel="stylesheet" href="${h}">`).join('')}</noscript>`,
    jsonLd(page)
  ].map((l) => '    ' + l).join('\n');
}

/* ------------------------------------------------------------------ static catalog */
function catalogHtml() {
  const e = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  return PRODUCTS.map((p) => {
    const top = p.specs.slice(0, 3).map(([k, v]) => `<li><strong>${e(k)}:</strong> ${e(v)}</li>`).join('');
    return `<article class="product-card" data-brand="${p.brand}">${cardVisual(p, e)}<div class="product-body"><div class="product-cat">${e(CATEGORIES[p.cat])}</div><h3><a href="products/${p.id}.html">${e(p.name)}</a></h3><p>${e(p.summary)}</p><ul class="spec-list">${top}</ul><div class="product-actions"><a class="btn btn-primary btn-sm" href="contact.html?product=${encodeURIComponent(p.name)}${p.preorder ? '&amp;type=prebook' : ''}">${p.preorder ? 'Pre-book' : 'Request Quote'}</a></div></div></article>`;
  }).join('\n');
}

/* ------------------------------------------------------------------ FAQ section */
function faqHtml() {
  return `    <section class="section section-alt" id="faq" aria-labelledby="faq-title">
        <div class="container container-narrow">
            <div class="section-head reveal">
                <span class="eyebrow">FAQ</span>
                <h2 class="h2" id="faq-title">Frequently Asked Questions</h2>
            </div>
            <div class="faq-list">
${FAQ.map(([q, a]) => `                <details class="faq-item"><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n')}
            </div>
        </div>
    </section>`;
}

/* ------------------------------------------------------------------ pre-booking banner (home page) */
// Every product with `preorder: true` in data/products.js, shown under the hero and linked to its product page
function prebookHtml() {
  const items = PRODUCTS.filter((p) => p.preorder);
  if (!items.length) return '';
  const card = (p) => `
                    <a class="prebook-card" href="products/${p.id}.html">
                        <div class="prebook-img">${p.img ? `<img src="${p.img}" alt="${esc(p.imgAlt || p.name)}" width="${p.imgSize[0]}" height="${p.imgSize[1]}" loading="lazy">` : ''}</div>
                        <span class="prebook-brand">${esc(BRANDS[p.brand])} · ${esc(CATEGORIES[p.cat])}</span>
                        <h3>${esc(p.name)}</h3>
                        <p>${esc(p.specs.slice(0, 2).map(([, v]) => v).join(' · '))}</p>
                        <span class="prebook-cta">Book now <i class="ph ph-arrow-right" aria-hidden="true"></i></span>
                    </a>`;
  return `    <section class="prebook" id="pre-booking" aria-labelledby="prebook-title">
        <div class="container">
            <div class="prebook-panel force-dark">
                <div class="prebook-head">
                    <div>
                        <span class="prebook-pill"><span class="prebook-dot" aria-hidden="true"></span>Pre-booking now open</span>
                        <h2 class="h2" id="prebook-title">Be First to Get the New AI Computers</h2>
                        <p class="lead">The first NVIDIA RTX Spark and GB300 desktops and laptops are about to reach the UAE. Pre-book now and we will allocate units from the first shipments in booking order.</p>
                    </div>
                    <a class="btn btn-primary" href="contact.html?type=prebook">Pre-book Now <i class="ph ph-arrow-right"></i></a>
                </div>
                <div class="prebook-grid">${items.map(card).join('')}
                </div>
            </div>
        </div>
    </section>`;
}

/* ------------------------------------------------------------------ page pass */
for (const page of PAGES) {
  let html = read(page.file).replace(/\r\n/g, '\n');

  // remove old head tags that the SEO block now owns
  html = html
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/\s*<link rel="icon"[^>]*>/g, '')
    .replace(/\s*<link rel="apple-touch-icon"[^>]*>/g, '')
    .replace(/\s*<script src="https:\/\/unpkg\.com\/@phosphor-icons\/web"><\/script>/, '');

  html = block(html, 'SEO', headBlock(page), (h, w) => h.replace(/(<meta name="viewport"[^>]*>)/, `$1\n    ${w}`));

  // home link: canonical root instead of /index.html
  html = html.replace(/href="index\.html"/g, 'href="/"');

  // landmarks + skip link
  if (!html.includes('<main id="main">')) {
    // repair a half-applied landmark (stray closing tags before the footer), then insert cleanly
    html = html.replace(/\n {4}<\/div>\n {4}<\/main>(\n\s*<footer class="site-footer)/, '$1');
    html = html.replace(/\n {4}<\/main>(\n\s*<footer class="site-footer)/, '$1');
    html = html.replace(/<main>/g, '<div class="catalog-results">').replace(/<\/main>/g, '</div>');
    html = html.replace(/(<\/nav>\n)/, '$1    <main id="main">\n');
    html = html.replace(/(\n\s*<footer class="site-footer)/, '\n    </main>$1');
  }
  if (!html.includes('class="skip-link"')) html = html.replace(/<body>/, '<body>\n    <a class="skip-link" href="#main">Skip to content</a>');

  html = footerLinks(html);

  // dead social links
  html = html.replace(/\s*<div class="socials">[\s\S]*?<\/div>/, '');

  // logos: don't download the hidden theme variant
  html = html.replace(/<img class="logo-(light|dark)" src="([^"]+)"(?![^>]*loading=)/g, '<img class="logo-$1" src="$2" loading="lazy" decoding="async"');

  // illustrations: alt text + intrinsic size
  html = html.replace(/<img([^>]*?)src="assets\/illustrations\/([\w-]+)\.svg"([^>]*?)>/g, (m, pre, name, post) => {
    let attrs = (pre + post).replace(/\s*alt="[^"]*"/, '').replace(/\s*width="\d+"/, '').replace(/\s*height="\d+"/, '');
    const [w, h] = svgSize[name] || [400, 300];
    return `<img${attrs.replace(/\s+$/, '')} src="assets/illustrations/${name}.svg" alt="${esc(ILLUSTRATION_ALT[name] || '')}" width="${w}" height="${h}">`.replace(/<img\s+src/, '<img src');
  });

  if (page.file === 'products.html') {
    html = html.replace(/\s*<noscript><p class="muted">Enable JavaScript[\s\S]*?<\/noscript>/, '');
    html = block(html, 'CATALOG', catalogHtml(), (h, w) => h.replace(/(<div class="product-grid" id="product-grid">)/, `$1\n${w}`));
  }
  if (page.file === 'index.html') {
    html = block(html, 'FAQ', faqHtml(), (h, w) => h.replace(/(\s*<!-- CTA -->)/, `\n${w}\n$1`));
    html = block(html, 'PREBOOK', prebookHtml(), (h, w) => h.replace(/(\n\s*<!-- Industries -->)/, `\n\n${w}\n$1`));
  }

  write(page.file, html);
  console.log('updated', page.file);
}

/* ------------------------------------------------------------------ product detail pages */
// products/<id>.html, one per product, using data/products.js + data/product-details.js and the
// navbar/footer of products.html. Pages live one folder down, so relative links get a "../" prefix.
{
  const e = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const relink = (h) => h.replace(/\b(href|src)="(?!https?:|\/|#|mailto:|tel:|data:|\.\.\/)([^"]*)"/g, '$1="../$2"');
  const shell = read('products.html');
  const between = (a, b) => shell.slice(shell.indexOf(a), shell.indexOf(b));
  const navHtml = relink(between('<a class="skip-link"', '<main id="main">')).trimEnd();
  const footerHtml = relink(between('<footer class="site-footer', '<script src="data/products.js')).trimEnd();
  const ver = (f) => (shell.match(new RegExp(`${f.replace('.', '\\.')}\\?v=(\\d+)`)) || [, '1'])[1];
  const artOf = (p) => p.art || CATEGORY_ART[p.cat] || 'servers';
  const quote = (p, extra = '') => `../contact.html?product=${encodeURIComponent(p.name)}${extra || (p.preorder ? '&type=prebook' : '')}`;
  const cta = (p) => p.preorder ? 'Pre-book Now' : 'Request a Quote';

  const relatedCard = (p) => {
    const top = p.specs.slice(0, 3).map(([k, v]) => `<li><strong>${e(k)}:</strong> ${e(v)}</li>`).join('');
    return `<article class="product-card" data-brand="${p.brand}">${cardVisual(p, e, '../')}<div class="product-body"><div class="product-cat">${e(CATEGORIES[p.cat])}</div><h3><a href="${p.id}.html">${e(p.name)}</a></h3><p>${e(p.summary)}</p><ul class="spec-list">${top}</ul><div class="product-actions"><a class="btn btn-primary btn-sm" href="${quote(p)}">${p.preorder ? 'Pre-book' : 'Request Quote'}</a></div></div></article>`;
  };

  fs.mkdirSync(path.join(ROOT, 'products'), { recursive: true });
  for (const f of fs.readdirSync(path.join(ROOT, 'products'))) {
    if (f.endsWith('.html') && !PRODUCTS.some((p) => `${p.id}.html` === f) && !LANDINGS.some((l) => l.url === `/products/${f}`)) fs.unlinkSync(path.join(ROOT, 'products', f));
  }

  for (const p of PRODUCTS) {
    const d = PRODUCT_DETAILS[p.id];
    const brand = BRANDS[p.brand];
    const cat = CATEGORIES[p.cat];
    const url = productUrl(p);
    // Most informative title / description that fits in search results (~60 / ~160 characters)
    const named = !d.model || p.name.includes(d.model) ? p.name
      : p.name.endsWith(')') ? p.name.replace(/\)$/, `, ${d.model})`) : `${p.name} (${d.model})`;
    const fit = (max, options) => options.find((o) => o.length <= max);
    const title = fit(60, [
      `${named} in Dubai, UAE | Plan Man`, `${named} | Plan Man UAE`, `${p.name} in Dubai, UAE | Plan Man`,
      `${p.name} | Plan Man UAE`, `${p.name} | Plan Man`
    ]) || p.name;
    const summary = p.summary.replace(/\s*[—–]\s*/g, ', ').replace(/\.$/, '');
    const description = fit(160, [
      ...(p.preorder ? [`${summary}. Pre-booking now open in Dubai and the UAE at Plan Man.`, `${summary}. Pre-book now at Plan Man UAE.`] : []),
      `${summary}. Supplied, deployed and supported in Dubai and the UAE by Plan Man.`,
      `${summary}. Supplied and supported in the UAE by Plan Man.`,
      `${summary}. Available in the UAE from Plan Man.`,
      `${summary}.`
    ]) || `${summary.slice(0, 157).replace(/\s+\S*$/, '')}…`;
    // same category (same brand first), then the same brand's other categories
    const related = [
      ...PRODUCTS.filter((x) => x.id !== p.id && x.cat === p.cat && x.brand === p.brand),
      ...PRODUCTS.filter((x) => x.id !== p.id && x.cat === p.cat && x.brand !== p.brand),
      ...PRODUCTS.filter((x) => x.id !== p.id && x.cat !== p.cat && x.brand === p.brand)
    ].slice(0, 3);

    const productLd = {
      '@type': 'Product', '@id': `${abs(url)}#product`, name: p.name, description: p.summary, url: abs(url),
      brand: { '@type': 'Brand', name: brand }, category: cat, image: p.img ? [abs('/' + p.img), abs(`/assets/og/products/${p.id}.jpg`)] : abs(`/assets/og/products/${p.id}.jpg`),
      ...(d.model ? { model: d.model, mpn: d.model } : {}),
      additionalProperty: p.specs.map(([k, v]) => ({ '@type': 'PropertyValue', name: k, value: v })),
      isRelatedTo: related.map((r) => ({ '@id': `${abs(productUrl(r))}#product` })),
      subjectOf: d.sources.map(([n, u]) => ({ '@type': 'WebPage', name: n, url: u }))
    };
    const page = {
      file: `products/${p.id}.html`, url, name: p.name, type: 'ItemPage', title, description,
      crumbs: [['Home', '/'], ['Products', '/products.html'], [cat, landingUrl('cat', p.cat)], [p.name, url]],
      mainEntity: { '@id': productLd['@id'] }, extraGraph: [productLd],
      ogImage: abs(`/assets/og/products/${p.id}.jpg`), ogAlt: `${p.name}: ${brand} ${lc(cat)} supplied in Dubai, UAE by Plan Man`
    };
    const head = relink(headBlock(page));

    const keySpecs = p.specs.slice(0, 4).map(([k, v]) => `<li><span>${e(k)}</span><strong>${e(v)}</strong></li>`).join('');
    const highlights = d.highlights.map(([icon, h, t]) => `
                <div class="card"><i class="ph ${icon} card-icon" aria-hidden="true"></i><h3>${e(h)}</h3><p>${e(t)}</p></div>`).join('');
    const specGroups = d.specs.map(([g, rows]) => `
                <div class="pd-spec-group">
                    <h3>${e(g)}</h3>
                    <table class="spec-table"><tbody>
${rows.map(([k, v]) => `                        <tr><th scope="row">${e(k)}</th><td>${e(v)}</td></tr>`).join('\n')}
                    </tbody></table>
                </div>`).join('');
    const models = d.models ? `
            <div class="pd-models">
                <h3>${d.modelsTitle || (p.preorder ? 'Available configurations' : 'Models in this family')}</h3>
                <table class="spec-table"><tbody>
${d.models.map(([m, t]) => `                    <tr><th scope="row">${e(m)}</th><td>${e(t)}</td></tr>`).join('\n')}
                </tbody></table>
            </div>` : '';

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- SEO:START (generated by tools/seo-build.js) -->
${head}
<!-- SEO:END -->
    <script>(function(){var d=document.documentElement,t='light';d.classList.add('js');try{t=localStorage.getItem('pm-theme')||t}catch(e){}d.setAttribute('data-theme',t)})()</script>
    <link rel="stylesheet" href="../styles.css?v=${ver('styles.css')}">
    <link rel="stylesheet" href="../apple.css?v=${ver('apple.css')}">
    <link rel="stylesheet" href="../product.css?v=3">
</head>
<body>
    <!-- Generated by tools/seo-build.js from data/products.js and data/product-details.js. Edit those, not this file. -->
    ${navHtml}
    <main id="main">

    <header class="pd-hero" data-brand="${p.brand}">
        <div class="container pd-hero-grid">
            <div class="pd-hero-copy">
                <nav class="pd-crumbs" aria-label="Breadcrumb">
                    <a href="/">Home</a><i class="ph ph-caret-right" aria-hidden="true"></i>
                    <a href="../products.html">Products</a><i class="ph ph-caret-right" aria-hidden="true"></i>
                    <a href="${catSlug(p.cat)}.html">${e(cat)}</a>
                </nav>
                <div class="pd-meta"><a class="tag tag-${p.brand}" href="${p.brand}.html">${e(brand)}</a>${badgeHtml(p, e)}<span class="pd-cat">${e(cat)}</span>${seriesLink(p, e)}</div>
                <h1 class="h1">${e(p.name)}</h1>
${d.model ? `                <p class="pd-model">Model <strong>${e(d.model)}</strong></p>\n` : ''}                <p class="lead">${e(p.summary)}</p>
                <ul class="pd-keyspecs" aria-label="Key specifications">${keySpecs}</ul>
${p.preorder ? `                <p class="pd-preorder"><i class="ph ph-clock-countdown" aria-hidden="true"></i><span><strong>Pre-booking open.</strong> Launching soon. Book now to get priority allocation from the first shipments to the UAE.</span></p>
` : ''}
                <div class="pd-actions">
                    <a class="btn btn-primary" href="${quote(p)}">${cta(p)} <i class="ph ph-arrow-right"></i></a>
                    <a class="btn btn-ghost" href="${quote(p, '&type=design')}">Talk to a Solutions Architect</a>
                </div>
            </div>
            <div class="pd-art${p.img ? ' has-photo' : ''}">
                ${p.img
                  ? `<img src="../${p.img}" alt="${e(p.imgAlt || p.name)}" width="${p.imgSize[0]}" height="${p.imgSize[1]}" fetchpriority="high">`
                  : `<img src="../assets/illustrations/${artOf(p)}.svg" alt="${e(ILLUSTRATION_ALT[artOf(p)] || '')}" width="${(svgSize[artOf(p)] || [400])[0]}" height="${(svgSize[artOf(p)] || [, 300])[1]}">`}
                <i class="ph ${p.icon || 'ph-cube'}" aria-hidden="true"></i>
            </div>
        </div>
    </header>

${d.banner ? `    <section class="pd-banner">
        <div class="container">
            <a href="${quote(p)}" aria-label="${e(cta(p))}: ${e(p.name)}"><img src="../${d.banner[0]}" alt="${e(d.banner[3])}" width="${d.banner[1]}" height="${d.banner[2]}" loading="lazy"></a>
        </div>
    </section>

` : ''}    <nav class="pd-subnav" aria-label="On this page">
        <div class="container">
            <span class="pd-subnav-title">${e(p.name)}</span>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#specs">Specifications</a></li>
                <li><a href="#use-cases">Use cases</a></li>
                <li><a href="#related">Related</a></li>
            </ul>
            <a class="btn btn-primary btn-sm" href="${quote(p)}">${p.preorder ? 'Pre-book' : 'Request Quote'}</a>
        </div>
    </nav>

    <section class="section" id="overview">
        <div class="container">
            <div class="pd-overview reveal">
                <div>
                    <span class="eyebrow">Overview</span>
                    <h2 class="h2">About the ${e(p.name.replace(new RegExp(`^${brand}\\s+`), ''))}</h2>
                </div>
                <div class="pd-prose">
${d.overview.map((t) => `                    <p>${e(t)}</p>`).join('\n')}
                </div>
            </div>
            <div class="grid-3 pd-highlights reveal-stagger">${highlights}
            </div>
        </div>
    </section>

    <section class="section section-alt" id="specs">
        <div class="container">
            <div class="section-head reveal">
                <span class="eyebrow">Specifications</span>
                <h2 class="h2">Technical Specifications</h2>
            </div>
            <div class="pd-specs">${specGroups}
            </div>${models}
${d.specNote ? `            <p class="pd-note">${e(d.specNote)}</p>\n` : ''}            <div class="pd-source">
                <i class="ph ph-info" aria-hidden="true"></i>
                <div>
                    <strong>Source:</strong> official ${e(brand)} product information.
                    <ul>${d.sources.map(([n, u]) => `<li><a href="${e(u)}" target="_blank" rel="noopener">${e(n)} <i class="ph ph-arrow-square-out" aria-hidden="true"></i></a></li>`).join('')}</ul>
                    Specifications are set by the manufacturer and may change. Plan Man confirms the final configuration, availability and lead time in your quote.
                </div>
            </div>
        </div>
    </section>

    <section class="section" id="use-cases">
        <div class="container">
            <div class="pd-use reveal-stagger">
                <div class="card">
                    <span class="eyebrow">Use cases</span>
                    <h2>What it's built for</h2>
                    <ul class="pd-chips">${d.useCases.map((u) => `<li>${e(u)}</li>`).join('')}</ul>
                </div>
                <div class="card">
                    <span class="eyebrow">Plan Man services</span>
                    <h2>Supplied and supported in the UAE</h2>
                    <ul class="ticks">
                        <li>Requirement analysis, sizing and bill of materials</li>
                        <li>Genuine supply with manufacturer warranty</li>
                        <li>Rack integration, cabling and onsite deployment</li>
                        <li>Power and liquid cooling planning for dense GPU racks</li>
                        <li>After-sales support, RMA handling and upgrades from Dubai</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="section section-alt" id="related">
        <div class="container">
            <div class="section-head reveal">
                <span class="eyebrow">Related</span>
                <h2 class="h2">You May Also Consider</h2>
                <p class="lp-links"><a href="${catSlug(p.cat)}.html">All ${e(cat)} <i class="ph ph-arrow-right" aria-hidden="true"></i></a><a href="${p.brand}.html">All ${e(brand)} products <i class="ph ph-arrow-right" aria-hidden="true"></i></a></p>
            </div>
            <div class="pd-related reveal-stagger">
                ${related.map(relatedCard).join('\n                ')}
            </div>
        </div>
    </section>

    <section class="cta-band">
        <div class="container">
            <div>
                <h2 class="h2">${p.preorder ? 'Pre-book Yours' : 'Get a Quote'}</h2>
                <p class="lead">${p.preorder ? `Pre-booking for the ${e(p.name)} is open. Reserve yours now and we will allocate units from the first shipments to the UAE in booking order, then confirm the configuration, pricing and delivery date.` : `Tell us your workload and timeline for the ${e(p.name)}. We reply within one business day with a configuration, pricing and lead time.`}</p>
            </div>
            <a href="${quote(p)}" class="btn btn-primary">${cta(p)} <i class="ph ph-arrow-right"></i></a>
        </div>
    </section>
    </main>

    ${footerHtml}
    <script src="../main.js?v=${ver('main.js')}"></script>
</body>
</html>
`;
    write(page.file, html);
  }
  console.log(`wrote ${PRODUCTS.length} product pages in products/`);

  // brand / category / collection landing pages
  const clash = LANDINGS.filter((l) => PRODUCTS.some((p) => productUrl(p) === l.url));
  if (clash.length) throw new Error(`Landing page URL clashes with a product page: ${clash.map((l) => l.url).join(', ')}`);
  const browseLinks = (skip) => {
    const row = (kind, label) => {
      const ls = LANDINGS.filter((l) => l.kind === kind && l.url !== skip);
      return ls.length ? `<div class="lp-browse-row"><h3>${label}</h3><ul class="pd-chips">${ls.map((l) => `<li><a href="${l.url.replace('/products/', '')}">${e(l.kind === 'brand' ? BRANDS[l.key] : l.name)}</a></li>`).join('')}</ul></div>` : '';
    };
    return row('cat', 'By category') + row('brand', 'By brand') + row('collection', 'Collections');
  };
  // header logo(s): the brand or collection logo, plus a dark-theme version when the brand has one
  const logoSize = (f) => {
    const buf = fs.readFileSync(path.join(ROOT, f));
    if (f.endsWith('.png')) return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
    const m = buf.toString('utf8').match(/viewBox="[\d.]+ [\d.]+ ([\d.]+) ([\d.]+)"/);
    return m ? [Math.round(m[1] * 10), Math.round(m[2] * 10)] : [232, 123];
  };
  const logoTags = (l) => {
    const alt = `${e(l.kind === 'brand' ? BRANDS[l.key] : 'Supermicro')} logo`;
    const brand = l.kind === 'brand' ? ` data-brand="${l.key}"` : '';
    const tag = (src, cls) => {
      const [w, h] = logoSize(src);
      return `            <img class="${cls}" src="../${src}" alt="${alt}" width="${w}" height="${h}"${brand}>\n`;
    };
    return tag(l.logo, l.logoDark ? 'catalog-logo has-dark' : 'catalog-logo') + (l.logoDark ? tag(l.logoDark, 'catalog-logo catalog-logo-dark') : '');
  };
  for (const l of LANDINGS) {
    const page = {
      file: `products${l.url.slice('/products'.length)}`, url: l.url, name: l.name, type: 'CollectionPage', title: l.title, description: l.description,
      crumbs: [['Home', '/'], ['Products', '/products.html'], [l.name, l.url]],
      mainEntity: { '@type': 'ItemList', name: l.name, numberOfItems: l.items.length,
        itemListElement: l.items.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, url: abs(productUrl(p)) })) },
      ogAlt: `${l.name} supplied in Dubai, UAE by Plan Man`
    };
    const quoteHref = `../contact.html?product=${encodeURIComponent(l.name)}`;
    const groups = l.groups.map((g) => `
    <section class="section${l.groups.indexOf(g) % 2 ? ' section-alt' : ''} lp-group" id="${g.id}">
        <div class="container">
            <div class="lp-group-head">
                <div>
                    <h2 class="h2">${e(g.name)} <span class="lp-count">${g.items.length}</span></h2>${g.sub ? `\n                    <p class="lp-sub">${e(g.sub)}</p>` : ''}
                </div>${g.more ? `\n                <a class="lp-more" href="${g.more[1]}">${e(g.more[0])} <i class="ph ph-arrow-right" aria-hidden="true"></i></a>` : ''}
            </div>
            <div class="pd-related">
                ${g.items.map(relatedCard).join('\n                ')}
            </div>
        </div>
    </section>`).join('\n');
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- SEO:START (generated by tools/seo-build.js) -->
${relink(headBlock(page))}
<!-- SEO:END -->
    <script>(function(){var d=document.documentElement,t='light';d.classList.add('js');try{t=localStorage.getItem('pm-theme')||t}catch(e){}d.setAttribute('data-theme',t)})()</script>
    <link rel="stylesheet" href="../styles.css?v=${ver('styles.css')}">
    <link rel="stylesheet" href="../apple.css?v=${ver('apple.css')}">
    <link rel="stylesheet" href="../product.css?v=3">
</head>
<body>
    <!-- Generated by tools/seo-build.js from data/products.js. Edit that, not this file. -->
    ${navHtml}
    <main id="main">

    <header class="page-hero catalog-hero lp-hero">
        <div class="hero-bg"></div>
        <div class="container">
            <nav class="pd-crumbs" aria-label="Breadcrumb">
                <a href="/">Home</a><i class="ph ph-caret-right" aria-hidden="true"></i>
                <a href="../products.html">Products</a><i class="ph ph-caret-right" aria-hidden="true"></i>
                <span aria-current="page">${e(l.name)}</span>
            </nav>
${l.logo ? logoTags(l) : ''}            <span class="eyebrow">${plural(l.items.length, 'product')}</span>
            <h1 class="h1">${e(l.h1)}</h1>
            <p class="lead">${e(l.lead)}</p>
            <div class="lp-actions">
                <a class="btn btn-primary" href="${quoteHref}">Request a Quote <i class="ph ph-arrow-right"></i></a>
                <a class="btn btn-ghost" href="../${l.catalog}">Filter in the catalog</a>
            </div>
        </div>
    </header>

    <section class="section lp-intro-section">
        <div class="container">
            <p class="lp-intro">${e(l.intro)}</p>${l.groups.length > 1 ? `
            <nav class="lp-jump" aria-label="Sections">${l.groups.map((g) => `<a href="#${g.id}">${e(g.name)} <span>${g.items.length}</span></a>`).join('')}</nav>` : ''}
        </div>
    </section>
${groups}

    <section class="section lp-browse" aria-labelledby="browse-title">
        <div class="container">
            <div class="section-head">
                <span class="eyebrow">Browse</span>
                <h2 class="h2" id="browse-title">More Products</h2>
            </div>
            ${browseLinks(l.url)}
        </div>
    </section>

    <section class="cta-band">
        <div class="container">
            <div>
                <h2 class="h2">Get a Quote</h2>
                <p class="lead">Tell us your workload, quantities and timeline. We reply within one business day with a configuration, pricing and lead time.</p>
            </div>
            <a href="${quoteHref}" class="btn btn-primary">Request a Quote <i class="ph ph-arrow-right"></i></a>
        </div>
    </section>
    </main>

    ${footerHtml}
    <script src="../main.js?v=${ver('main.js')}"></script>
</body>
</html>
`;
    write(page.file, html);
  }
  console.log(`wrote ${LANDINGS.length} brand / category / collection pages in products/`);
  // the products page links to every landing page (crawlable, and useful as a browse menu)
  {
    let ph = read('products.html').replace(/\r\n/g, '\n');
    const browse = `    <section class="section lp-browse" id="browse" aria-labelledby="browse-title">
        <div class="container">
            <div class="section-head">
                <span class="eyebrow">Browse</span>
                <h2 class="h2" id="browse-title">Browse by Category and Brand</h2>
            </div>
            ${browseLinks('').replace(/href="(?!https?:|\/)/g, 'href="products/')}
        </div>
    </section>`;
    ph = block(ph, 'BROWSE', browse, (h, w) => h.replace(/(\n\s*<section class="section section-alt" id="hardware">)/, `\n${w}\n$1`));
    write('products.html', ph);
  }
}

/* ------------------------------------------------------------------ 404 page head */
{
  let html = footerLinks(read('404.html').replace(/\r\n/g, '\n').replace(/href="index\.html"/g, 'href="/"'));
  const page = { file: '404.html', url: '/404.html', name: 'Page not found', type: 'WebPage', title: 'Page Not Found | Plan Man', description: 'The page you were looking for could not be found. Explore Plan Man enterprise IT solutions and hardware in Dubai, UAE.' };
  html = html.replace(/\s*<title>[\s\S]*?<\/title>/, '').replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/\s*<link rel="icon"[^>]*>/g, '').replace(/\s*<link rel="apple-touch-icon"[^>]*>/g, '')
    .replace(/\s*<script src="https:\/\/unpkg\.com\/@phosphor-icons\/web"><\/script>/, '');
  html = block(html, 'SEO', headBlock(page).replace(/<link rel="canonical"[^>]*>\n\s*/, '').replace(/index, follow/, 'noindex, follow'), (h, w) => h.replace(/(<meta name="viewport"[^>]*>)/, `$1\n    ${w}`));
  write('404.html', html);
  console.log('updated 404.html');
}

/* ------------------------------------------------------------------ sitemap / robots / manifest */
const imageTag = (p) => p.img ? `<image:image><image:loc>${abs('/' + p.img)}</image:loc></image:image>` : '';
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${PAGES.map((p) => `  <url><loc>${abs(p.url)}</loc><lastmod>${TODAY}</lastmod><priority>${p.priority}</priority></url>`).join('\n')}
${LANDINGS.map((l) => `  <url><loc>${abs(l.url)}</loc><lastmod>${TODAY}</lastmod><priority>0.8</priority></url>`).join('\n')}
${PRODUCTS.map((p) => `  <url><loc>${abs(productUrl(p))}</loc><lastmod>${TODAY}</lastmod><priority>0.7</priority>${imageTag(p)}</url>`).join('\n')}
</urlset>
`);

const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Bingbot', 'CCBot', 'Meta-ExternalAgent', 'DuckAssistBot', 'MistralAI-User'];
write('robots.txt', `# Plan Man — https://planman.ae
# Search engines and AI assistants are welcome to crawl and cite this site.

User-agent: *
Allow: /
Disallow: /tools/
Disallow: /form-backend/

${AI_BOTS.map((b) => `User-agent: ${b}`).join('\n')}
Allow: /
Disallow: /tools/
Disallow: /form-backend/

Sitemap: ${SITE}/sitemap.xml
`);

write('site.webmanifest', JSON.stringify({
  name: 'Plan Man — Enterprise IT Solutions & Hardware',
  short_name: 'Plan Man',
  description: BUSINESS.description,
  start_url: '/',
  display: 'browser',
  background_color: '#ffffff',
  theme_color: '#0071e3',
  icons: [
    { src: '/assets/logo/favicon.png', sizes: '256x256', type: 'image/png' },
    { src: '/assets/logo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    { src: '/assets/logo/favicon.svg', sizes: 'any', type: 'image/svg+xml' }
  ]
}, null, 2) + '\n');

/* ------------------------------------------------------------------ llms.txt */
write('llms.txt', `# Plan Man

> ${BUSINESS.description}

- Website: ${SITE}/
- Location: ${BUSINESS.street}, Dubai, United Arab Emirates
- Phone / WhatsApp: ${BUSINESS.phoneDisplay}
- Email: ${BUSINESS.email} (sales), ${BUSINESS.supportEmail} (support)
- Business hours: Monday to Saturday, 9:00 AM – 6:00 PM (Gulf Standard Time)
- Industries served: hospitality, universities and education, manufacturing and industrial, corporate enterprise
- Project lifecycle: requirements → design → hardware supply → deployment → after-sales support
- Brands supplied: Dell, HPE, Lenovo, NVIDIA, Supermicro, ASUS, Cisco, NetApp, Pure Storage, Synology, QNAP, Seagate, Western Digital, AMD, Intel, APC, Eaton

## Pages

${PAGES.map((p) => `- [${p.name}](${abs(p.url)}): ${p.description}`).join('\n')}

## Brand, category and collection pages

${LANDINGS.map((l) => `- [${l.name}](${abs(l.url)}): ${l.description}`).join('\n')}

## Product pages

${PRODUCTS.map((p) => `- [${p.name}](${abs(productUrl(p))}): ${p.summary}`).join('\n')}

## Frequently asked questions

${FAQ.map(([q, a]) => `- **${q}** ${a}`).join('\n')}

## Optional

- [Full site content in plain text](${SITE}/llms-full.txt): all page copy plus the complete product catalog with specifications.
- [Sitemap](${SITE}/sitemap.xml)
`);

/* ------------------------------------------------------------------ llms-full.txt */
function decode(s) {
  return s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&rsquo;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&copy;/g, '©').replace(/&ndash;/g, '–').replace(/&mdash;/g, '—').replace(/&middot;/g, '·');
}
function pageText(html) {
  let m = html.split('<main id="main">')[1];
  if (!m) return '';
  m = m.split('</main>')[0]
    .replace(/<!-- CATALOG:START[\s\S]*?CATALOG:END -->/, '')
    .replace(/<!-- FAQ:START[\s\S]*?FAQ:END -->/, '')
    .replace(/<script[\s\S]*?<\/script>/g, '').replace(/<svg[\s\S]*?<\/svg>/g, '').replace(/<noscript[\s\S]*?<\/noscript>/g, '')
    .replace(/<div class="modal"[\s\S]*$/, '')
    .replace(/<br\s*\/?>/g, ' ')
    .replace(/<h([1-4])[^>]*>([\s\S]*?)<\/h\1>/g, (x, n, t) => `\n\n${'#'.repeat(Number(n) + 1)} ${t.replace(/<[^>]+>/g, '').trim()}\n\n`)
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (x, t) => `\n- ${t.replace(/<[^>]+>/g, ' ').trim()}`)
    .replace(/<\/?(p|div|section|header|ul|article|aside|details|summary)[^>]*>/g, '\n')
    .replace(/<[^>]+>/g, ' ');
  return decode(m).split('\n').map((l) => l.replace(/\s+/g, ' ').trim()).filter((l, i, a) => l || (a[i - 1] && a[i - 1] !== '')).join('\n').replace(/\n{3,}/g, '\n\n').trim();
}
const catalogText = Object.keys(CATEGORIES).map((c) => {
  const items = PRODUCTS.filter((p) => p.cat === c);
  if (!items.length) return '';
  return `### ${CATEGORIES[c]}\n\n` + items.map((p) => {
    const d = PRODUCT_DETAILS[p.id];
    const specs = d.specs.map(([g, rows]) => `${g}:\n${rows.map(([k, v]) => `- ${k}: ${v}`).join('\n')}`).join('\n\n');
    return `#### ${p.name} (${BRANDS[p.brand]})\n\nPage: ${abs(productUrl(p))}${d.model ? `\nModel: ${d.model}` : ''}\n\n${p.summary}\n\n${d.overview.join('\n\n')}\n\n${specs}${d.models ? `\n\nModels:\n${d.models.map(([m, t]) => `- ${m}: ${t}`).join('\n')}` : ''}\n\nUse cases: ${d.useCases.join(', ')}.\n\nSource: ${d.sources.map(([n, u]) => `${n} (${u})`).join('; ')}`;
  }).join('\n\n');
}).filter(Boolean).join('\n\n');

write('llms-full.txt', `# Plan Man — full site content

> ${BUSINESS.description}

Source: ${SITE}/ · Generated ${TODAY} · Contact: ${BUSINESS.phoneDisplay} · ${BUSINESS.email}

${PAGES.map((p) => `---\n\n## ${p.name} (${abs(p.url)})\n\n${pageText(read(p.file))}`).join('\n\n')}

---

## Frequently asked questions

${FAQ.map(([q, a]) => `### ${q}\n\n${a}`).join('\n\n')}

---

## Product catalog (AI and data center platforms)

Specifications summarised from public vendor information; final configurations are confirmed with a quote.

${catalogText}
`);

console.log('wrote sitemap.xml, robots.txt, site.webmanifest, llms.txt, llms-full.txt');
