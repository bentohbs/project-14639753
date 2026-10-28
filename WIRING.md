# Adding the new pages to the GaudiEnt site

The folders in this package match your project, so you can copy them straight in.
No coding is needed.

## Step 1: Copy the NEW files (nothing is overwritten)

Copy these into the same place in your repo:

- `src/components/QuoteForm.tsx`
- `src/components/PageShell.tsx`
- `src/data/countries.ts`
- `src/data/news.ts`
- `src/pages/CountryPage.tsx`
- `src/pages/CountriesIndex.tsx`
- `src/pages/NewsPage.tsx`

## Step 2: Replace THREE existing files

These were rewritten from the versions you sent me. Replace the old file with
the new one. If you have changed any of them since you sent them, tell me.

| Replace this file in your repo | What changed |
|---|---|
| `src/router/config.tsx` | Adds the pages /countries, /countries/:slug and /news. |
| `src/seo/config.ts` | Registers the new pages for Google. Country pages are built from `countries.ts`. |
| `src/pages/home/components/Navbar.tsx` | Menu links now work from every page; adds "Countries" and "Updates". |

## Step 3: Connect the quote form

1. Create a free form at https://formspree.io and copy its address
   (it looks like `https://formspree.io/f/abcd1234`).
2. In your project's top folder, add a file named `.env` containing:

```
VITE_FORM_ENDPOINT=https://formspree.io/f/abcd1234
VITE_CONTACT_EMAIL=you@yourcompany.com
```

3. When you deploy, add the same two settings in the hosting dashboard
   (Netlify or Cloudflare "environment variables"). Without them the live site
   cannot send enquiries.

## Step 4: Check it on your computer

Run `npm install`, then `npm run dev`, and open the address it shows. Check:
- the menu on the home page still scrolls to each section
- from /countries/mexico, the menu takes you back to the right home-page section
- the quote form submits (you should receive an email via Formspree)
- the footer looks right at the bottom of the new pages (see below)

## Things to know

- **Google and the Mexico page.** Until the page is marked `verified` in
  `countries.ts`, it is hidden from Google (noindex). Once your Mexico partner
  has checked the text, change `status: 'draft'` to `status: 'verified'` and add
  `lastVerified: '2026-MM-DD'`. The page then becomes visible to Google.
- **Footer.** The new pages reuse your home page's `CtaFooter`. I haven't seen
  that file. If it contains its own contact form, the new pages will show two
  forms; tell me and I will use a footer-only version.
- **Structured data.** I haven't seen `JsonLd`. If it adds company data to every
  page, that will now appear on the new pages too, which is fine.
- **Sitemap.** If a script builds your sitemap from `ROUTE_SEO`, the new pages
  are included automatically once verified.

## Adding things later

- **Another country:** open `src/data/countries.ts`, copy the Mexico block, change
  the text and the `slug` (e.g. `'brazil'`). Have the local partner check it first.
- **A news update:** open `src/data/news.ts`, copy the example, change the text,
  set `published: true`.
