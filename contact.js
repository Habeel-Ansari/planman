// ===== Contact form (contact.html) =====
//
// Enquiries are sent to a Google Apps Script web app (form-backend/Code.gs) that verifies
// Google reCAPTCHA, saves each enquiry as a row in your Google Sheet and emails your team.
// Bots are also stopped by a hidden honeypot field and a minimum fill-time check
// (checked here and again on the server).
//
// SETUP — fill in these two values (full steps in README-forms.md):
//   1. FORM_ENDPOINT: the Web app URL from Apps Script → Deploy → New deployment
//      (looks like https://script.google.com/macros/s/AKfy.../exec).
//   2. RECAPTCHA_SITE_KEY: the SITE key of a reCAPTCHA v2 "I'm not a robot" key from
//      https://www.google.com/recaptcha/admin (the SECRET key goes into the Apps Script
//      Script properties as RECAPTCHA_SECRET — never into this file).
// Until both are set, the form falls back to opening the visitor's email app.
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwMyPqJRHmSYJCcL7K0S5KsIRLu2wjfT4DEkJATcJ5zUGgSP6fnVwjSOXX0GTG17dTU/exec';
const RECAPTCHA_SITE_KEY = '6LfaOcwtAAAAANyTxqiWCC-t7BICUM8vZ5CPcDMh';
const FALLBACK_EMAIL = 'sales@planman.com';
const MIN_FILL_SECONDS = 4;

(function () {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const status = document.getElementById('form-status');
    const note = document.getElementById('form-note');
    const submitBtn = form.querySelector('button[type="submit"]');
    const captchaBox = document.getElementById('recaptcha');
    const f = form.elements;
    const params = new URLSearchParams(location.search);
    const startedAt = Date.now();

    const configured = !FORM_ENDPOINT.includes('YOUR_DEPLOYMENT_ID') && !RECAPTCHA_SITE_KEY.includes('YOUR_RECAPTCHA');
    let widgetId = null;

    // Prefill from links such as contact.html?product=...&type=design&industry=education
    if (params.get('product')) f.product.value = params.get('product');
    const type = params.get('type') || (params.get('product') ? 'quote' : '');
    const industry = params.get('industry');
    if (industry && f.industry.querySelector(`option[value="${CSS.escape(industry)}"]`)) f.industry.value = industry;
    if (type && f.type.querySelector(`option[value="${CSS.escape(type)}"]`)) f.type.value = type;

    function showStatus(msg, kind) {
        status.innerHTML = msg;
        status.className = `form-status show${kind ? ' ' + kind : ''}`;
    }

    // ---------- reCAPTCHA (loaded only when configured) ----------
    if (configured) {
        note.innerHTML = 'This form is protected by reCAPTCHA. Google\'s <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms of Service</a> apply.';
        window.pmRecaptchaReady = function () {
            const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
            widgetId = window.grecaptcha.render(captchaBox, { sitekey: RECAPTCHA_SITE_KEY, theme });
        };
        const s = document.createElement('script');
        s.src = 'https://www.google.com/recaptcha/api.js?onload=pmRecaptchaReady&render=explicit';
        s.async = true;
        s.defer = true;
        document.head.appendChild(s);
    } else {
        captchaBox.hidden = true;
        note.textContent = `Submitting opens your email app with the details filled in, addressed to ${FALLBACK_EMAIL}.`;
    }

    function collect() {
        const interests = [...form.querySelectorAll('input[name="interest"]:checked')].map((el) => el.value);
        const label = (sel) => (sel.value ? sel.options[sel.selectedIndex].text : '');
        return {
            name: f.name.value.trim(),
            company: f.company.value.trim(),
            email: f.email.value.trim(),
            phone: f.phone.value.trim(),
            request: label(f.type),
            industry: label(f.industry),
            interests: interests.join(', '),
            products: f.product.value.trim(),
            message: f.message.value.trim()
        };
    }

    function mailtoFallback(d) {
        const lines = [
            `Name: ${d.name}`, d.company && `Company: ${d.company}`, `Email: ${d.email}`, `Phone: ${d.phone}`,
            `Request: ${d.request}`, d.industry && `Industry: ${d.industry}`,
            d.interests && `Interests: ${d.interests}`, d.products && `Products: ${d.products}`
        ].filter(Boolean).join('\n');
        const subject = `${d.request}: ${d.company || d.name}`;
        location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines + '\n\n' + d.message)}`;
        showStatus(`Your email app should open with your request. If it doesn't, email <a href="mailto:${FALLBACK_EMAIL}">${FALLBACK_EMAIL}</a> or call +971 58 522 5166.`);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Required fields
        const missing = [...form.querySelectorAll('[required]')].filter((el) => !el.value.trim() || (el.type === 'email' && !el.checkValidity()));
        if (missing.length) {
            showStatus('Please complete the required fields: ' + missing.map((el) => form.querySelector(`label[for="${el.id}"]`).textContent.replace(' *', '')).join(', ') + '.', 'error');
            missing[0].focus();
            return;
        }

        // Bot traps: honeypot filled, or submitted faster than a human could type
        const tooFast = (Date.now() - startedAt) / 1000 < MIN_FILL_SECONDS;
        if (f._gotcha.value || tooFast) {
            showStatus('Thanks! Your request has been received.', 'success'); // look successful, send nothing
            return;
        }

        const data = collect();
        if (!configured) { mailtoFallback(data); return; }

        const token = window.grecaptcha && widgetId !== null ? window.grecaptcha.getResponse(widgetId) : '';
        if (!token) {
            showStatus('Please tick "I\'m not a robot" before sending.', 'error');
            return;
        }

        // URL-encoded body = a "simple" cross-origin request, which Apps Script accepts without CORS preflight
        const body = new URLSearchParams();
        Object.entries(data).forEach(([k, v]) => { if (v) body.append(k, v); });
        body.append('page', location.pathname + location.search);
        body.append('elapsed', String(Math.round((Date.now() - startedAt) / 1000)));
        body.append('_gotcha', f._gotcha.value);
        body.append('g-recaptcha-response', token);

        submitBtn.disabled = true;
        const original = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending… <i class="ph ph-circle-notch"></i>';
        try {
            const res = await fetch(FORM_ENDPOINT, { method: 'POST', body });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || !json.ok) throw new Error(json.error || `HTTP ${res.status}`);
            form.reset();
            window.grecaptcha.reset(widgetId);
            showStatus('<strong>Thank you!</strong> Your request has been sent. Our team will reply within one business day.', 'success');
        } catch (err) {
            window.grecaptcha.reset(widgetId);
            const msg = String(err.message || 'Network error').replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
            showStatus(`Sorry, we couldn't send your request: ${msg}${/[.!?]$/.test(msg) ? '' : '.'} You can also email <a href="mailto:${FALLBACK_EMAIL}">${FALLBACK_EMAIL}</a> / WhatsApp +971 58 522 5166.`, 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = original;
        }
    });
})();
