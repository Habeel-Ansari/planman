/**
 * Plan Man — contact form backend (Google Apps Script + Google Sheets)
 *
 * Paste this file into a Google Sheet: Extensions → Apps Script. See README-forms.md.
 *
 * What it does for every website enquiry:
 *   1. Verifies Google reCAPTCHA server-side with your SECRET key.
 *   2. Drops bots (honeypot field, too-fast submissions, repeat flooding).
 *   3. Saves the enquiry as a row in the "Enquiries" sheet (with Status / Owner / Notes
 *      columns so the sales team can track it).
 *   4. Emails the enquiry to your team (reply goes straight to the customer).
 *   5. Optionally sends the customer an acknowledgement email.
 *
 * Settings live in Project Settings → Script properties:
 *   RECAPTCHA_SECRET   (required) reCAPTCHA v2 secret key
 *   NOTIFY_EMAIL       (required) who receives enquiries, comma-separated
 *   ALLOWED_HOSTNAMES  (optional) e.g. "planman.ae,www.planman.ae" — rejects tokens from other sites
 *   AUTO_REPLY         (optional) "true" to email the customer a confirmation (default: off)
 */

const SHEET_NAME = 'Enquiries';
const TIMEZONE = 'Asia/Dubai';
const MIN_FILL_SECONDS = 4;
const MAX_PER_EMAIL_PER_HOUR = 3;
const STATUSES = ['New', 'Contacted', 'Quoted', 'Won', 'Lost', 'Spam'];

const COLUMNS = [
  'Received', 'Status', 'Owner', 'Name', 'Company', 'Email', 'Phone',
  'Request', 'Industry', 'Interests', 'Products', 'Message', 'Page', 'Notes'
];

const FIELD_LIMITS = {
  name: 120, company: 160, email: 160, phone: 40, request: 80, industry: 80,
  interests: 300, products: 500, message: 5000, page: 300
};

/* ------------------------------------------------------------------ */
/* Web endpoints                                                       */
/* ------------------------------------------------------------------ */

function doGet() {
  return json_({ ok: true, service: 'Plan Man contact form' });
}

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const props = PropertiesService.getScriptProperties();

    // 1. Bot traps (bots that post directly skip the browser checks, so repeat them here)
    if (p._gotcha) return json_({ ok: true }); // pretend success, store nothing
    const elapsed = Number(p.elapsed || 0);
    if (elapsed && elapsed < MIN_FILL_SECONDS) return json_({ ok: true });

    // 2. reCAPTCHA
    const secret = props.getProperty('RECAPTCHA_SECRET');
    if (!secret) return json_({ ok: false, error: 'Form is not configured (missing reCAPTCHA secret).' });
    const captcha = verifyRecaptcha_(secret, p['g-recaptcha-response']);
    if (!captcha.success) return json_({ ok: false, error: 'reCAPTCHA check failed. Please tick "I\'m not a robot" again.' });
    const allowed = (props.getProperty('ALLOWED_HOSTNAMES') || '').split(',').map(s => s.trim()).filter(String);
    if (allowed.length && allowed.indexOf(captcha.hostname) === -1) {
      return json_({ ok: false, error: 'Submission from an unknown website.' });
    }

    // 3. Clean + validate
    const d = {};
    Object.keys(FIELD_LIMITS).forEach(k => { d[k] = clean_(p[k], FIELD_LIMITS[k]); });
    if (!d.name || !d.email || !d.phone || !d.message) {
      return json_({ ok: false, error: 'Please fill in name, email, phone and project details.' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
      return json_({ ok: false, error: 'Please enter a valid email address.' });
    }

    // 4. Flood control: max N enquiries per email address per hour
    const cache = CacheService.getScriptCache();
    const key = 'rate:' + d.email.toLowerCase();
    const count = Number(cache.get(key) || 0);
    if (count >= MAX_PER_EMAIL_PER_HOUR) {
      return json_({ ok: false, error: 'We already have several requests from this email. Our team will be in touch shortly.' });
    }
    cache.put(key, String(count + 1), 3600);

    // 5. Save to the sheet
    const received = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd HH:mm');
    const lock = LockService.getScriptLock();
    lock.waitLock(15000);
    try {
      const sheet = getSheet_();
      sheet.appendRow([
        received, 'New', '', d.name, d.company, d.email, d.phone,
        d.request, d.industry, d.interests, d.products, d.message, d.page, ''
      ].map(safeCell_));
    } finally {
      lock.releaseLock();
    }

    // 6. Email the team (the row is already saved even if the mail quota runs out)
    const notify = props.getProperty('NOTIFY_EMAIL');
    if (notify && MailApp.getRemainingDailyQuota() > 0) {
      MailApp.sendEmail({
        to: notify,
        replyTo: d.email,
        name: 'Plan Man Website',
        subject: 'Website enquiry — ' + (d.request || 'General') + ': ' + (d.company || d.name),
        htmlBody: teamEmail_(d, received),
        body: plainEmail_(d, received)
      });
    }

    // 7. Optional acknowledgement to the customer
    if (props.getProperty('AUTO_REPLY') === 'true' && MailApp.getRemainingDailyQuota() > 0) {
      MailApp.sendEmail({
        to: d.email,
        replyTo: notify || '',
        name: 'Plan Man',
        subject: 'We received your request — Plan Man',
        htmlBody: customerEmail_(d)
      });
    }

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'Server error. Please try again or contact us directly.' });
  }
}

/* ------------------------------------------------------------------ */
/* One-time setup: run this once from the Apps Script editor           */
/* ------------------------------------------------------------------ */

function setup() {
  const sheet = getSheet_();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.setSpreadsheetTimeZone(TIMEZONE);
  // Ask for mail/fetch permissions now, so the web app works immediately
  MailApp.getRemainingDailyQuota();
  UrlFetchApp.getRequest('https://www.google.com/recaptcha/api/siteverify');
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('NOTIFY_EMAIL')) props.setProperty('NOTIFY_EMAIL', Session.getActiveUser().getEmail());
  if (!props.getProperty('AUTO_REPLY')) props.setProperty('AUTO_REPLY', 'false');
  console.log('Sheet "' + sheet.getName() + '" is ready. Enquiries will be emailed to: ' + props.getProperty('NOTIFY_EMAIL') +
    '. Next: add RECAPTCHA_SECRET in Project Settings → Script properties, then Deploy → New deployment → Web app.');
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.getRange(1, 1, 1, COLUMNS.length).setValues([COLUMNS])
      .setFontWeight('bold').setBackground('#1d1d1f').setFontColor('#ffffff');
    sheet.setFrozenRows(1);
    const widths = { Received: 130, Status: 100, Owner: 110, Name: 150, Company: 170, Email: 200, Phone: 130,
      Request: 190, Industry: 150, Interests: 200, Products: 220, Message: 380, Page: 160, Notes: 260 };
    COLUMNS.forEach((c, i) => sheet.setColumnWidth(i + 1, widths[c] || 140));
    const statusRange = sheet.getRange(2, 2, sheet.getMaxRows() - 1, 1);
    statusRange.setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).build());
    const rules = [
      ['New', '#e8f0fe'], ['Contacted', '#fff4e5'], ['Quoted', '#f3e8ff'],
      ['Won', '#e6f4ea'], ['Lost', '#f1f3f4'], ['Spam', '#fce8e6']
    ].map(([text, color]) => SpreadsheetApp.newConditionalFormatRule()
      .whenTextEqualTo(text).setBackground(color).setRanges([statusRange]).build());
    sheet.setConditionalFormatRules(rules);
    sheet.getRange('L:L').setWrap(true);
  }
  return sheet;
}

function verifyRecaptcha_(secret, token) {
  if (!token) return { success: false };
  const res = UrlFetchApp.fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'post',
    payload: { secret: secret, response: token },
    muteHttpExceptions: true
  });
  try { return JSON.parse(res.getContentText()); } catch (e) { return { success: false }; }
}

function clean_(value, max) {
  return String(value || '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
}

// Stop values like "=HYPERLINK(...)" being run as spreadsheet formulas
function safeCell_(v) {
  return typeof v === 'string' && /^[=+\-@]/.test(v) ? "'" + v : v;
}

function esc_(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function rows_(d) {
  return [
    ['Name', d.name], ['Company', d.company], ['Email', d.email], ['Phone', d.phone],
    ['Request', d.request], ['Industry', d.industry], ['Interests', d.interests], ['Products', d.products]
  ].filter(r => r[1]);
}

function teamEmail_(d, received) {
  const sheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  const table = rows_(d).map(([k, v]) =>
    '<tr><td style="padding:6px 16px 6px 0;color:#6e6e73;white-space:nowrap">' + k + '</td>' +
    '<td style="padding:6px 0;color:#1d1d1f">' + esc_(v) + '</td></tr>').join('');
  return '<div style="font-family:-apple-system,Segoe UI,Arial,sans-serif;font-size:15px;max-width:640px">' +
    '<h2 style="margin:0 0 4px;color:#1d1d1f">New website enquiry</h2>' +
    '<p style="margin:0 0 16px;color:#6e6e73">' + esc_(received) + ' (Dubai) · ' + esc_(d.page) + '</p>' +
    '<table style="border-collapse:collapse">' + table + '</table>' +
    '<h3 style="margin:20px 0 6px;color:#1d1d1f">Project details</h3>' +
    '<p style="white-space:pre-wrap;margin:0;color:#1d1d1f">' + esc_(d.message) + '</p>' +
    '<p style="margin-top:24px"><a href="' + sheetUrl + '" style="color:#0066cc">Open the enquiries sheet</a> · Reply to this email to answer the customer.</p>' +
    '</div>';
}

function plainEmail_(d, received) {
  return 'New website enquiry — ' + received + ' (Dubai)\n\n' +
    rows_(d).map(r => r[0] + ': ' + r[1]).join('\n') + '\n\nProject details:\n' + d.message;
}

function customerEmail_(d) {
  return '<div style="font-family:-apple-system,Segoe UI,Arial,sans-serif;font-size:15px;max-width:600px;color:#1d1d1f">' +
    '<p>Hi ' + esc_(d.name.split(' ')[0]) + ',</p>' +
    '<p>Thank you for contacting Plan Man. We have received your request' + (d.request ? ' (<b>' + esc_(d.request) + '</b>)' : '') +
    ' and a member of our team will get back to you within one business day.</p>' +
    '<p>If it is urgent, call or WhatsApp us on <b>+971 58 522 5166</b>.</p>' +
    '<p>Best regards,<br>Plan Man<br><span style="color:#6e6e73">IFZA Properties, Dubai Silicon Oasis, Dubai, UAE</span></p>' +
    '</div>';
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
