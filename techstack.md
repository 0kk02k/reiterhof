# Technisches Relaunch-Paket

Dieses Dokument definiert den empfohlenen Technologie-Stack für die Umsetzung des Soll-Konzepts.

## 1. Empfohlener Tech-Stack (Performance & SEO Fokus)
Um maximale Ladegeschwindigkeit und beste Google-Rankings zu erzielen, wird ein moderner "Headless" oder "Static-First" Ansatz empfohlen.

*   **Frontend:** **Next.js (React)** 
    *   *Grund:* Exzellente SEO durch Server-Side Rendering (SSR), extrem schnelle Ladezeiten, zukunftssicher.
*   **Styling:** **Tailwind CSS**
    *   *Grund:* Schnelle Entwicklung, hochgradig anpassbar, minimale CSS-Dateigröße.
*   **Content Management System (CMS):** **Sanity.io** oder **Contentful**
    *   *Grund:* Intuitive Bedienoberfläche für die Hofbetreiber (Einstellen von News, Terminen), saubere Datenstruktur, trennt Design von Inhalten.
*   **Hosting:** **Vercel** oder **Netlify**
    *   *Grund:* Globales Content Delivery Network (CDN), automatische SSL-Zertifikate, "Edge"-Performance.

## 2. Migrationsstrategie
1.  **Content Audit:** Sicherung aller Texte und Bilder der aktuellen Seite (trotz 404s ggf. via Archive.org oder Datenbank-Export).
2.  **Redirect-Plan:** Erstellung einer 301-Weiterleitungskarte von alten (gebrochenen) URLs auf die neue Struktur, um SEO-Rankingverluste zu vermeiden.
3.  **Analytics-Setup:** Integration von datenschutzkonformen Analysetools (z.B. Plausible oder Matomo), um das Nutzerverhalten zu verstehen.

## 3. SEO-Fokus (Local SEO)
Da der Biohof ein regionales Geschäft ist, müssen folgende Elemente technisch perfekt umgesetzt werden:
*   **Structured Data (JSON-LD):** Auszeichnung als "LocalBusiness", "Farm" und "RidingSchool" für Google Maps und Rich Snippets.
*   **Performance:** 100/100 Core Web Vitals Score.
*   **Google Business Profile:** Synchronisierung der Webseite mit dem Google Business Eintrag.
