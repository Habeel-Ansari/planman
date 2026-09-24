# Contact form setup — Google Sheets + reCAPTCHA

Website enquiries go to a small Google Apps Script ([form-backend/Code.gs](form-backend/Code.gs))
attached to a Google Sheet. For every enquiry it:

1. verifies **Google reCAPTCHA** on Google's side with your secret key,
2. drops bots (hidden honeypot field, too-fast submissions, more than 3 enquiries per email per hour),
3. adds a row to the **Enquiries** sheet with **Status / Owner / Notes** columns for your sales team,
4. emails the enquiry to your team — hitting **Reply** answers the customer directly,
5. optionally emails the customer an acknowledgement.

It's free. Limits come from your Google account: about **100 notification emails/day** on a free
Gmail account, about **1,500/day** on Google Workspace. Enquiries are always saved to the sheet, even
if the daily email quota runs out.

Until the two values in `contact.js` are filled in, the form falls back to opening the visitor's
email app (addressed to sales@planman.com), so the website keeps working in the meantime.

---

## Step 1 — Create the Sheet and paste the script (≈3 min)

1. Sign in to Google with the account that should own the enquiries (ideally the company Workspace account).
2. Create a new Google Sheet, name it e.g. **Plan Man — Website Enquiries**.
3. **Extensions → Apps Script**. Delete the sample code, paste the whole of `form-backend/Code.gs`, click **Save**.
4. In the function dropdown at the top choose **setup**, click **Run**, and approve the permissions
   (Google shows "unverified app" because it's your own script: *Advanced → Go to … (unsafe) → Allow*).
   This creates the **Enquiries** tab with headers, status colours and a Status dropdown.

## Step 2 — Create the reCAPTCHA keys (≈2 min)

1. Open <https://www.google.com/recaptcha/admin/create>.
2. Type: **reCAPTCHA v2 → "I'm not a robot" Checkbox**.
3. Domains: your live domain (e.g. `planman.com`) and `localhost` for testing.
4. You get a **Site key** (public) and a **Secret key** (private).

## Step 3 — Add the settings to the script (≈1 min)

In Apps Script → **Project Settings** (gear icon) → **Script properties** → *Add script property*:

| Property | Value |
|---|---|
| `RECAPTCHA_SECRET` | the reCAPTCHA **Secret key** |
| `NOTIFY_EMAIL` | who gets enquiries, e.g. `sales@planman.com` (comma-separate several). `setup` pre-fills your own address. |
| `ALLOWED_HOSTNAMES` | *(recommended)* `planman.com,www.planman.com,localhost` |
| `AUTO_REPLY` | `true` to send customers a confirmation email, otherwise `false` |

## Step 4 — Publish the script as a web app (≈1 min)

1. **Deploy → New deployment** → type **Web app**.
2. *Execute as*: **Me**. *Who has access*: **Anyone**.
3. **Deploy** and copy the **Web app URL** (`https://script.google.com/macros/s/…/exec`).

## Step 5 — Connect the website

In `contact.js` set:

```js
const FORM_ENDPOINT = 'https://script.google.com/macros/s/…/exec';   // from step 4
const RECAPTCHA_SITE_KEY = '6L…';                                     // Site key from step 2
```

Then bump the `?v=` number on the `contact.js` script tag in `contact.html`, publish the site, and send a
test enquiry. It should appear in the sheet and in your inbox within a few seconds.

> The **Secret key** only ever goes into Script properties — never into `contact.js` or the website.

## Updating the script later

After editing the code in Apps Script: **Deploy → Manage deployments → ✏️ Edit → Version: New version → Deploy**.
The web app URL stays the same.

## Using the sheet

- **Status** dropdown: New → Contacted → Quoted → Won / Lost (or Spam); rows are colour-coded.
- **Owner** / **Notes**: assign and track follow-up.
- Share the sheet with your sales team (Share button) — no extra accounts or seats needed.
- For a phone notification per enquiry, turn on Gmail notifications for the sender "Plan Man Website".
