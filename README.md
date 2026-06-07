# Two Doctors Aquaponics — Website

A conversion-focused marketing website for **Two Doctors Aquaponics (TDA)**, built to drive
enquiries straight into WhatsApp. Plain HTML/CSS/JS, deployable as a static site (e.g. GitHub Pages) — no build step required.

## Pages
- `index.html` — Home (hero, four offerings, story teaser, gallery, testimonials, FAQ)
- `enrichment-courses.html` — Enrichment course tracks for schools, families, adults
- `farm-tours-experiences.html` — Guided farm tours + immersive farm experiences
- `custom-builds.html` — Build-to-order systems incl. the TDA AquaFrame
- `about.html` — Founders' story (Dr. Lim Jia Yang & Dr. Wang Fei Fan), values, farm portfolio
- `contact.html` — WhatsApp-first contact page, address, FAQ

## Conversion & SEO approach
- Every page funnels to **WhatsApp** (`wa.me/6592996898`) via nav button, hero CTA, mid-page
  CTA bands, and a floating action button — each with a pre-filled, context-specific message.
- Per-page `<title>`/meta description/keywords, Open Graph tags, canonical URLs.
- Structured data (JSON-LD): `LocalBusiness`, `FAQPage`, `Course`, `TouristAttraction`,
  `Service`, `AboutPage`, `ContactPage` — to support Google rich results.
- `sitemap.xml` and `robots.txt` included for crawler discovery.
- Semantic headings, descriptive `alt` text on every image (image SEO + accessibility),
  and fast-loading static markup with no client-side rendering dependency.

## ⚠️ Placeholders to replace before going fully live
- **Photos**: all images currently use `picsum.photos` placeholder URLs (random stock
  photography) so the layout and "hooks" can be reviewed immediately. **Replace every
  `<img src="https://picsum.photos/...">` and CSS `background-image` URL with real photos
  of TDA's farms, courses, tours, and builds** — this will have the single biggest impact
  on engagement and trust.
- **Brand colours**: the existing twodoctors.sg site has no defined brand palette, so a
  nature-inspired palette (deep leaf green `#2f6b4f`, aqua-water blue `#3e8fb0`, warm wood
  gold `#d9a954`, cream `#f8f6f1`) was created for this build — defined as CSS variables at
  the top of `css/styles.css`. Adjust if TDA prefers a different direction.
- **Course/tour names & pricing**: track names (e.g. "Little Growers Workshop", "Harvest &
  Taste") and durations are illustrative — confirm against TDA's actual programmes and
  add pricing if you'd like it shown.
- **Canonical/OG URLs**: currently point to `https://limjyg.github.io/two-doctors-aquaponics/`
  — update if a custom domain is connected later.
- **Google Analytics**: `js/main.js` already fires a `whatsapp_click` event via `gtag` if
  Google Analytics (gtag.js) is loaded — add the GA snippet to `<head>` when ready to track.

## Local preview
Just open `index.html` in a browser, or serve the folder locally:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.
