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

## Images & branding
All photography and the logo are TDA's own assets, sourced from www.twodoctors.sg and
stored locally in `images/` (downloaded at original resolution, then resized/compressed
for the web with `sips`):
- `logo.jpg` — the official Two Doctors Aquaponics wordmark, used in the nav and footer
  (`.brand-logo`)
- `hero-banner.jpg`, `home-img-3.jpg` — team/founder photos in branded TDA t-shirts
- `aquaframe.jpg` — the TDA AquaFrame product
- `aesthetic-design.jpg` — the indoor vertical aquaponics aesthetic wall
- `farming-workshops.jpg` — children harvesting during an enrichment workshop
- `sustainable-supplies.jpg` — hands-on planting/composting shot
- `home-img-1.jpg` — the aquaponics nutrient-cycle diagram (used to illustrate course content)
- `home-img-2.jpg` — rooftop garden close-up
- `farm-1.jpg` … `farm-5.jpg` — the five portfolio farm installations (Owl Farm vertical
  tower, Little Forest garden & aesthetic wall, BR Farm rooftop NFT system, Elitez Farm
  raised media beds)

The brand colour palette was derived directly from the logo's leaf icon — sage green
`#8ca050` and terracotta `#a0643c` — paired with a complementary aqua-water blue
`#3e8fb0` and a warm cream background `#f8f6f1`. Defined as CSS variables at the top of
`css/styles.css`.

## To confirm before going fully live
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
