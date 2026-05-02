# Relaunch Backlog & Implementierungs-Plan

Diese Liste enthält alle notwendigen Schritte, um den Biohof Mühlenberg Relaunch erfolgreich abzuschließen.

## Phase 1: Setup & Infrastruktur
- [x] Next.js Projekt initialisieren (App Router, Tailwind CSS, TypeScript).
- [x] Sanity.io Headless CMS aufsetzen (Schemas für: News, Team, Preise, Events).
- [x] Vercel/Netlify Projekt verknüpfen und CI/CD Pipeline testen.
- [x] Design-Tokens aus `design-system.md` in `tailwind.config.js` übertragen.

## Phase 2: Content & Migration
- [ ] Scraping der alten Inhalte (Texte & Bilder) von der aktuellen Seite.
- [ ] Asset-Optimierung (Bilder auf WebP konvertieren, Metadaten bereinigen).
- [ ] 301-Redirect-Map erstellen, um 404-Fehler der alten Seite aufzufangen.
- [ ] Einpflegen der Basis-Inhalte in das neue CMS.

## Phase 3: Frontend Development
- [x] **Core Layout:** Navigation (`blueprint/Navigation.tsx`) und Footer implementieren.
- [x] **Startseite:** Hero-Section (`blueprint/Hero.tsx`) und Teaser-Module fertigstellen.
- [x] **Dynamische Seiten:** Templates für News-Artikel und Service-Seiten (Reitschule etc.) erstellen.
- [x] **Interaktive Features:** Termin-Kalender und Kontaktformular-Validierung bauen.

## Phase 4: Qualitätskontrolle (QA)
- [ ] Core Web Vitals Audit (Lighthouse Score > 95 in allen Kategorien).
- [ ] Responsivität auf iOS (Safari) und Android (Chrome) prüfen.
- [ ] Barrierefreiheit (WCAG 2.1 Konformität) sicherstellen.
- [ ] Alle Links auf 404-Freiheit prüfen.

## Phase 5: Launch & SEO
- [ ] Domain-Umzug / DNS Update auf neuen Server.
- [x] XML Sitemap & Robots.txt generieren.
- [ ] Google Search Console & Analytics anbinden.
- [x] Lokale SEO-Daten (JSON-LD) live schalten.
