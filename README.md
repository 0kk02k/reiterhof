# Biohof Mühlenberg — Website Relaunch

Website für den Biohof zum Mühlenberg in Kloster Lehnin (Brandenburg). Reitschule, ökologische Landwirtschaft, Reittherapie, Pensionspferde, Kindergeburtstage und Kremserfahrten.

## Tech Stack

| Technologie | Version | Verwendung |
|:---|:---|:---|
| Next.js (App Router) | 14.1.0 | Framework, SSR/SSG, Routing |
| React | 18 | UI Komponenten |
| TypeScript | 5 | Typsicherheit |
| Tailwind CSS | 3.4 | Utility-first Styling |
| Framer Motion | 11 | Animationen, Übergänge |
| Sanity CMS | — | Headless CMS (Schema ready, Frontend-Integration offen) |

## Seitenstruktur

```
app/
├── page.tsx                          # Startseite (Hero, Galerie, News, Event-Timeline, Team, Preise, Kontakt, Maps)
├── HomeContent.tsx                   # Client-Komponente Startseite (News-Modal, Event-Timeline)
├── layout.tsx                        # Root Layout (Fonts, Metadata, OpenGraph)
├── not-found.tsx                     # Custom 404
├── reitschule/
│   ├── page.tsx                      # Reitschule mit Kursen + Reiterstübchen Banner + FAQ Akkordeon
│   └── layout.tsx                    # SEO Metadata
├── biohof/
│   ├── page.tsx                      # Biohof Über uns
│   └── layout.tsx                    # SEO Metadata
├── reitwelt/
│   ├── layout.tsx                    # SEO Metadata
│   ├── reiterferien/page.tsx         # Split-View: Kinder-Reiterferien + Familienurlaub
│   ├── pensionspferde/page.tsx       # Einstelloptionen (Box, Offenstall, Premium)
│   └── reittherapie/page.tsx         # Therapeutisches Reiten
├── erleben/
│   ├── layout.tsx                    # SEO Metadata
│   ├── kindergeburtstage/page.tsx    # 3 Geburtstagspakete
│   └── kremserfahrten/page.tsx       # 3 Kremser-Routen
├── impressum/page.tsx                # Impressum (§5 TMG)
├── datenschutz/page.tsx              # Datenschutzerklärung (DSGVO)
└── studio/[[...tool]]/page.tsx       # Sanity Studio (Placeholder)
```

## Komponenten

```
blueprint/
├── Navigation.tsx    # Fixed Navbar mit Dropdowns, Scroll-Transparenz, Mobile-Menü
├── Hero.tsx          # Fullscreen Hero mit Parallax, Entrance-Animation, Glasmorphismus-Karten
├── Gallery.tsx       # Editorial Masonry Grid (12-Spalten CSS Grid)
├── Team.tsx          # 3-Spalten Team-Karten mit Glasmorphismus
├── PriceTable.tsx    # Preistabelle mit Kategorie-Headern
├── ContactForm.tsx   # Kontaktformular (Name, E-Mail, Nachricht)
├── FAQ.tsx           # Akkordeon mit AnimatePresence (6 FAQs auf Reitschule)
├── Footer.tsx        # 4-Spalten Footer mit allen Seitenlinks + rechtliche Links
└── motion.ts         # Geteilte Animations-Utilities
```

## Design System

### Farben (Tailwind Custom Colors)

**Basis-Farben:**

| Token | 50 | 100 | 200 | 400 | 500 | 700 | 800 | 900 |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|
| **sand** | `#fdfcfa` | `#f8f5f0` | `#efe9df` | — | — | — | — | — |
| **bark** | — | — | — | `#a68a64` | `#8b6f47` | `#4a3a24` | `#3a2d1c` | `#2c2217` |
| **meadow** | `#f0fdf4` | `#dcfce7` | `#bbf7d0` | `#4ade80` | `#22c55e` | `#059669` | `#064e3b` | `#022c22` |

- **sand**: Hintergrund, Flächen
- **bark**: Text, Footer, rechtliche Seiten
- **meadow**: Akzente, Links, Badges (Startseite)

**Thema-Farben (je 50-900 Skala):**

| Token | 500 | 900 | Emotion | Einsatz |
|:---|:---|:---|:---|:---|
| **clay** | `#c46b4a` | `#652e24` | Tradition, Leder, Handwerk | Reitschule |
| **sky** | `#5e82a8` | `#2d4255` | Ruhe, Vertrauen, Heilung | Reittherapie, Kremserfahrten |
| **sage** | `#6a8f5e` | `#31412e` | Weiden, Natur, Pflege | Pensionspferde, Biohof |
| **wheat** | `#c49f4d` | `#5a4626` | Sommer, Ferien, Abenteuer | Reiterferien |
| **rose** | `#ba6f81` | `#5b3743` | Freude, Feier, Wärme | Kindergeburtstage |

**Farbzuordnung Unterseiten:**

| Seite | Header | CTA | Farbe |
|:---|:---|:---|:---|
| Reitschule | clay-900 | clay-800 | Terrakotta |
| Reittherapie | sky-900 | sky-800 | Dusty Blue |
| Pensionspferde | sage-900 | sage-800 | Sage Green |
| Reiterferien | wheat-900 | wheat-800 | Golden Wheat |
| Kindergeburtstage | bark-900 | rose-900 | Dusty Rose (CTA) |
| Kremserfahrten | bark-900 | sky-800 | Dusty Blue (CTA) |
| Biohof | bark-800 | sage-700 | Sage Green (CTA) |
| Impressum/Datenschutz | bark-900 | — | Neutral |
| Footer | bark-900 | — | Anchor |

### Typografie

- **Display (Überschriften):** Lora 700 — `font-display`
- **Body:** Nunito 400/500/600/700 — `font-body`
- **Caption:** Lora italic — `font-caption`

### Design-Prinzipien

- Großzügiges Spacing (min. 1.5rem vertikal)
- Glasmorphismus: `backdrop-blur-xl`, `bg-white/80`, 1px Borders
- WCAG 2.2 AA Kontraste
- Mobile-First Responsive (320px–1440px+)
- Framer Motion: Entrance, Scroll-Triggered, Hover, Parallax
- Scrapbook-Ästhetik: Organische clipPath-Ränder, Leinen-Textur-Overlays, minimale Rotationen

## UX Features

- **Navigation:** Dropdowns für Reitwelt/Erleben, Scroll-basierte Transparenz, AnimatePresence Mobile-Menü
- **Google Maps:** Embedded in Kontakt-Sektion
- **Öffnungszeiten:** Kachel Mo–So in Kontakt-Sektion
- **FAQ Akkordeon:** 6 Fragen mit +/x Animation auf `/reitschule`
- **Reiterstübchen Banner:** Vollbreit-Banner mit Papier-Overlay-Karte auf `/reitschule`
- **Split-View Reiterferien:** Teaser-Karten für Kinder- und Familienangebote auf `/reitwelt/reiterferien`
- **Event-Timeline:** Vertikaler Zeitstrahl ("Hof-Agenda") auf Startseite mit Sanity-Anbindung
- **News-Modal:** Lese-Modal für ausführliche Neuigkeiten auf Startseite
- **Footer:** 4-Spalten mit allen Seitenlinks + rechtliche Links

## Sanity CMS Schemas

| Schema | Felder | Verwendung |
|:---|:---|:---|
| `news` | title, date, excerpt, body, image, slug | Startseite News |
| `teamMember` | name, role, bio, image | Startseite Team |
| `priceCategory` | title, items[] (name, price, unit, description) | Startseite Preise |
| `galleryImage` | alt, caption, image | Startseite Galerie |
| `event` | title, date, description, link | Startseite Event-Timeline |

## SEO

- **JSON-LD:** LocalBusiness Schema auf Startseite (Adresse, Öffnungszeiten, Geo-Koordinaten)
- **OpenGraph:** Title, Description, Locale im Root Layout
- **Meta Titles:** Pro Route via `layout.tsx` (Reitschule, Biohof, Reitwelt, Erleben, Impressum, Datenschutz)
- **Semantisches HTML:** `<main>`, `<section>`, `<nav>`, `<article>`, `<footer>`

## Entwicklung

```bash
# Dev Server starten
npx next dev -p 3002

# Production Build
npx next build
```

## Offene Punkte

| Thema | Status |
|:---|:---|
| Sanity CMS Frontend-Integration | Schema ready, Studio-Route als Placeholder (React-Kompatibilität klären) |
| Buchungssystem-Integration | Button-Links zeigen auf `/#kontakt`, externes System nötig |
| ~~Bild-Optimierung~~ | **Erledigt** — KI-generierte Bilder eingepflegt und ladend |
| ~~Event-Timeline~~ | **Erledigt** — Sanity-Schema + Fallback-Daten + Timeline-UI |
| ~~Reiterstübchen Banner~~ | **Erledigt** — Papier-Overlay auf Reitschule-Seite |
| ~~Familienurlaub Split-View~~ | **Erledigt** — Reiterferien-Seite erweitert |
| ~~Thema-Farben~~ | **Erledigt** — 5 Farbfamilien (clay, sky, sage, wheat, rose) |
| E-Mail-Versand Kontaktformular | Frontend vorhanden, API-Route `/api/contact` existiert, SMTP-Backend nötig |
| Lighthouse Audit | Ausstehend |
| Vercel Deployment | Ausstehend |

---

## Konzeptions-Dokumente

- [`jetzt.md`](./jetzt.md) — Audit des aktuellen Zustands
- [`vorschlagsynthese.md`](./vorschlagsynthese.md) — Master-Konzept "Herz & Klarheit"
- [`vorschlag1.md`](./vorschlag1.md) / [`vorschlag2.md`](./vorschlag2.md) — Alternative Konzepte
- [`design-system.md`](./design-system.md) — Farben, Typografie, UI-Prinzipien
- [`design-update.md`](./design-update.md) — Galerie-Scrapbook-Design-Briefing
- [`sitemap.md`](./sitemap.md) — Seitenhierarchie und User-Flows
- [`techstack.md`](./techstack.md) — Technologiewahl
- [`cms-schema.md`](./cms-schema.md) — CMS Datenfelder
- [`seo-strategie.md`](./seo-strategie.md) — Lokale SEO und strukturierte Daten
- [`backlog.md`](./backlog.md) — Phasenplan Implementierung
- [`agent.md`](./agent.md) — Agent-Konfiguration und Design-Prinzipien

*Biohof Mühlenberg — Mai 2026*
