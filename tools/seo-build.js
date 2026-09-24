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
  tagline: 'The Engine For Your Digital Success',
  description: 'Plan Man is a Dubai-based enterprise IT solutions provider and hardware supplier. We take projects from requirements and design through hardware supply, deployment and after-sales support for hospitality groups, universities, manufacturers and enterprises across the UAE, supplying servers, storage, GPUs and networking from all premium brands.',
  phone: '+971585225166',
  phoneDisplay: '+971 58 522 5166',
  email: 'sales@planman.ae',
  supportEmail: 'info@planman.ae',
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
    title: 'About Plan Man | Enterprise IT Solution Provider in Dubai, UAE',
    description: 'Plan Man is a Dubai-based solution provider and enterprise hardware supplier for hospitality, education, manufacturing and corporate enterprise across the UAE.' },
  { file: 'contact.html', url: '/contact.html', name: 'Contact', type: 'ContactPage', priority: '0.8',
    title: 'Contact Plan Man | IT Hardware Quotes in Dubai, UAE',
    description: 'Request a quote or discuss your IT project. Call or WhatsApp +971 58 522 5166, email sales@planman.ae or use our form. We reply within one business day.' }
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
const { PRODUCTS, BRANDS, CATEGORIES, CATEGORY_ART } = sandbox.window;

/* ------------------------------------------------------------------ JSON-LD */
function jsonLd(page) {
  const url = abs(page.url);
  const org = {
    '@type': 'LocalBusiness',
    '@id': `${SITE}/#organization`,
    name: BUSINESS.name,
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
  const website = { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: BUSINESS.name, description: BUSINESS.description, publisher: { '@id': `${SITE}/#organization` }, inLanguage: 'en' };
  const webpage = {
    '@type': page.type, '@id': `${url}#webpage`, url, name: page.title, description: page.description,
    isPartOf: { '@id': `${SITE}/#website` }, about: { '@id': `${SITE}/#organization` }, inLanguage: 'en',
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE }, dateModified: TODAY
  };
  const graph = [org, website, webpage];
  if (page.url !== '/') {
    webpage.breadcrumb = { '@id': `${url}#breadcrumb` };
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: page.name, item: url }
    ] });
  }
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
      itemListElement: PRODUCTS.map((p, i) => ({ '@type': 'ListItem', position: i + 1, name: p.name, description: p.summary })) });
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
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Plan Man – Enterprise IT solutions and hardware in Dubai, UAE">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${esc(page.title)}">`,
    `<meta name="twitter:description" content="${esc(page.description)}">`,
    `<meta name="twitter:image" content="${OG_IMAGE}">`,
    `<link rel="icon" type="image/svg+xml" href="assets/logo/favicon.svg">`,
    `<link rel="icon" type="image/png" sizes="256x256" href="assets/logo/favicon.png">`,
    `<link rel="apple-touch-icon" href="assets/logo/apple-touch-icon.png">`,
    `<link rel="manifest" href="site.webmanifest">`,
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
    const art = p.art || CATEGORY_ART[p.cat] || 'servers';
    return `<article class="product-card" data-brand="${p.brand}"><div class="product-visual"><span class="tag tag-${p.brand}">${e(BRANDS[p.brand])}</span>${p.isNew ? '<span class="badge-new">New</span>' : ''}<img src="assets/illustrations/${art}.svg" alt="" width="400" height="300" loading="lazy"></div><div class="product-body"><div class="product-cat">${e(CATEGORIES[p.cat])}</div><h3>${e(p.name)}</h3><p>${e(p.summary)}</p><ul class="spec-list">${top}</ul><div class="product-actions"><a class="btn btn-primary btn-sm" href="contact.html?product=${encodeURIComponent(p.name)}">Request Quote</a></div></div></article>`;
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
  }

  write(page.file, html);
  console.log('updated', page.file);
}

/* ------------------------------------------------------------------ 404 page head */
{
  let html = read('404.html').replace(/\r\n/g, '\n').replace(/href="index\.html"/g, 'href="/"');
  const page = { file: '404.html', url: '/404.html', name: 'Page not found', type: 'WebPage', title: 'Page Not Found | Plan Man', description: 'The page you were looking for could not be found. Explore Plan Man enterprise IT solutions and hardware in Dubai, UAE.' };
  html = html.replace(/\s*<title>[\s\S]*?<\/title>/, '').replace(/\s*<meta name="description"[^>]*>/, '')
    .replace(/\s*<link rel="icon"[^>]*>/g, '').replace(/\s*<link rel="apple-touch-icon"[^>]*>/g, '')
    .replace(/\s*<script src="https:\/\/unpkg\.com\/@phosphor-icons\/web"><\/script>/, '');
  html = block(html, 'SEO', headBlock(page).replace(/<link rel="canonical"[^>]*>\n\s*/, '').replace(/index, follow/, 'noindex, follow'), (h, w) => h.replace(/(<meta name="viewport"[^>]*>)/, `$1\n    ${w}`));
  write('404.html', html);
  console.log('updated 404.html');
}

/* ------------------------------------------------------------------ sitemap / robots / manifest */
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((p) => `  <url><loc>${abs(p.url)}</loc><lastmod>${TODAY}</lastmod><priority>${p.priority}</priority></url>`).join('\n')}
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
  return `### ${CATEGORIES[c]}\n\n` + items.map((p) => `#### ${p.name} (${BRANDS[p.brand]})\n\n${p.summary}\n\n${p.specs.map(([k, v]) => `- ${k}: ${v}`).join('\n')}`).join('\n\n');
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
