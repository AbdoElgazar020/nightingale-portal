## Direction

Going with **Bento Dashboard Grid** — feels most distinctive, modern, and "premium healthcare academy" without leaning generic. Locked palette: deep medical blue `#0B3B5C`, teal `#14B8A6`, soft surface `#F8FAFB`, white. Fonts: Tajawal (display) + IBM Plex Sans Arabic (body) + JetBrains Mono (numbers/dates). Full RTL.

## Scope

Public site UI only, Arabic RTL, with realistic Arabic placeholder copy. No backend, no auth, no admin dashboard in this pass (per your answer).

## Pages & routes

```
/              الرئيسية   – hero bento, results search, news preview, agenda, downloads
/news          الأخبار    – news index with category filter + featured layout
/results       النتائج    – dedicated seat-number search + mock result card
/about         عن المدرسة – mission, vision, stats, leadership
/gallery       المعرض     – responsive masonry
/contact       تواصل معنا – form + info cards + map placeholder
```

Each route gets its own `head()` with unique Arabic title + description + og tags.

## Shared shell (`__root.tsx`)

- Sticky glass navbar (RTL): logo, nav links, "بوابة الطالب" CTA, mobile sheet menu
- Rich dark footer: brand block, روابط سريعة, تواصل, social icons
- HTML `dir="rtl"` + `lang="ar"`, Google Fonts preconnect

## Section breakdown

**Home (bento hero):** 12-col grid — large headline card (8), dark results-search card (4), stat tile (3), hero image (6), events timeline tile (3). Below: news section header, 3-column news + downloads card, mini "about" strip, contact CTA band.

**News:** Featured hero article (left) + 2 secondary (right), then 6-card grid with category badges (أكاديمي / فعاليات / ندوات / إعلانات), date in mono, hover lift.

**Results:** Full-bleed dark hero with large search input, helper copy, instructions. Below: example result card showing student name, seat number, subjects table with grades, total, status badge — mock data triggered after "search".

**About:** Mission/vision split, animated counter stats strip, leadership cards, accreditation logos row.

**Gallery:** CSS columns masonry, 12 images, hover scale + caption overlay, lightbox-style dialog on click.

**Contact:** 2-col — form (name, email, subject, message) with proper RTL labels, info cards (address, phones, email, hours), map placeholder card.

## Design tokens

Add to `src/styles.css`:
- `--medical-dark`, `--medical-blue`, `--medical-teal`, `--medical-soft`, `--surface`
- Semantic tokens (`--primary` = medical-dark, `--accent` = teal)
- Shadow tokens: `--shadow-card`, `--shadow-elevated`
- Radius bumped to `1rem` for the soft/rounded feel
- Tajawal + IBM Plex Sans Arabic + JetBrains Mono via Google Fonts in root `head()`
- Body `dir="rtl"`, ring-1 hairlines, rounded-2xl/3xl cards

## Reusable components

`src/components/` — `Navbar`, `Footer`, `SectionHeader`, `NewsCard`, `StatTile`, `ResultsSearch`, `EventTimelineItem`, `DownloadItem`, `BentoCard`, `MasonryItem`.

## Images

Generate 5 images with `imagegen` to `src/assets/`: hero lab, graduation, simulation lab, seminar, campus exterior. Gallery + news fallback uses these with crops. All `<img>` get Arabic alt text and `loading="lazy"` (except hero).

## Motion

Subtle: `animate-fade-up` on scroll-into-view, hover `translate-y-[-2px]` + shadow on cards, animated counter for stats, pulsing teal dot on "live" indicators. No bouncy easing.

## SEO

Per-route `head()` with Arabic title `<60ch`, description `<160ch`, og:title/description, og:image at leaf routes only, single H1 per page, semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`), `<html lang="ar" dir="rtl">`.

## Out of scope (this pass)

- Admin dashboard (your "skip for now" answer covers auth — admin can come next)
- Real results upload / Excel parsing / DB
- Real PDF files / contact form submission
- Bilingual toggle

Say the word and I'll build it.