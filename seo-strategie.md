# SEO & Local Search Strategie

Um den Biohof Mühlenberg regional optimal zu positionieren, müssen folgende Maßnahmen technisch implementiert werden.

## 1. Lokales SEO (Google Business Profile)
Die Webseite muss technisch perfekt mit dem Google Business Profil in Kloster Lehnin harmonieren.

*   **NAP-Konsistenz:** Name, Adresse, Telefonnummer müssen auf der Seite exakt wie bei Google hinterlegt sein.
*   **Structured Data (JSON-LD):** Jede Seite enthält maschinenlesbare Daten.

### Beispiel JSON-LD (Startseite)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Biohof zum Mühlenberg",
  "image": "https://www.biohof-muehlenberg.de/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Zum Mühlenberg",
    "addressLocality": "Kloster Lehnin",
    "addressRegion": "BB",
    "postalCode": "14797",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.321,
    "longitude": 12.745
  },
  "url": "https://www.biohof-muehlenberg.de",
  "telephone": "+49 3382 12345",
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Leistungen",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reitschule" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reittherapie" } }
    ]
  }
}
```

## 2. Keywords & Themen-Clustering
Wir optimieren auf folgende primäre Suchbegriffe:
*   *Hauptkeywords:* "Reitschule Kloster Lehnin", "Biohof Brandenburg", "Pensionspferde Brandenburg".
*   *Longtail:* "Reittherapie für Kinder Werder", "Reiterferien Sommer 2026 Brandenburg", "Bio-Milch direkt vom Hof kaufen".

## 3. Technische SEO-Checkliste
- [ ] **Sitemap.xml:** Automatische Generierung durch Next.js.
- [ ] **Robots.txt:** Ausschluss von CMS-Vorschauseiten, Freigabe für alle Suchmaschinen.
- [ ] **Canonical Tags:** Vermeidung von Duplicate Content bei News-Kategorien.
- [ ] **Alt-Tags:** Jedes Bild erhält eine beschreibende "Alt"-Eigenschaft für Screenreader und Google Bildersuche.
- [ ] **Open Graph (OG):** Optimierte Vorschaubilder und Titel für Social Media (Facebook/WhatsApp).
