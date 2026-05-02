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

## 4. Aktuelle Architektur-Entscheidungen

### React 18 vs. React 19
*   **Status:** Das Projekt nutzt aktuell **Next.js 14.1.0** und **React 18.2.0**.
*   **Beobachtung:** Neuere Sanity-Pakete werfen Peer-Dependency-Warnungen aus, da sie React 19 bevorzugen.
*   **Entscheidung:** Verbleib auf React 18.
*   **Begründung:** 
    *   Next.js 14 ist primär für React 18 optimiert. Ein Upgrade auf React 19 würde idealerweise auch ein Upgrade auf Next.js 15 erfordern, was tiefgreifende Änderungen an den APIs (z.B. Caching, Request-Handling) nach sich zieht.
    *   Stabilität hat aktuell Vorrang vor dem "Bleeding Edge" Stack.
    *   Konflikte werden über `.npmrc` (`legacy-peer-deps=true`) aufgelöst.
*   **Roadmap:** Ein Upgrade auf Next.js 15 + React 19 sollte erst in einer dedizierten Refactoring-Phase nach dem erfolgreichen Go-Live des Prototyps erfolgen.

### Bild-Performance
*   **Status:** Bilder im `public/images/` Ordner sind aktuell unkomprimiert (>8MB pro Datei).
*   **Risiko:** Hohe Ladezeiten (LCP) und potenzielle Build-Time-Timeouts auf Vercel.
*   **Empfehlung:** Konvertierung zu WebP und Skalierung auf max. 1920px Breite.

