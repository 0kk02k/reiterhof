# Biohof Mühlenberg - Sitemap & User Flows

Dieses Dokument visualisiert die Struktur der neuen Webseite für beide Konzepte.

## 1. Sitemap (Konzept 1: Erlebnishof)

```mermaid
graph TD
    A[Startseite / Hero] --> B(Hof-Momente / News)
    A --> C(Pferde & Leidenschaft)
    A --> D(Natur & Handwerk)
    A --> E(Gemeinschaft)
    A --> F(Ankommen / Service)

    C --> C1[Reitschule]
    C --> C2[Reittherapie]
    C --> C3[Urlaub & Ferien]

    D --> D1[Bio-Philosophie]
    D --> D2[Milchproduktion]

    E --> E1[Events & Geburtstage]
    E --> E2[Reiterstübchen]
    E --> E3[Kremserfahrten]

    F --> F1[Pensionsställe]
    F --> F2[Preise & Buchung]
    F --> F3[Kontakt & Anfahrt]
```

## 2. Sitemap (Konzept 2: Kompetenz-Campus)

```mermaid
graph TD
    A[Startseite / Dashboard] --> B(Akademie)
    A --> C(Agrar & Bio)
    A --> D(Events & Freizeit)
    A --> E(Besucherservice)

    B --> B1[Reitschule / Kurse]
    B --> B2[Reittherapie / Expertise]
    B --> B3[Pensionspferde / Stall]

    C --> C1[Zertifizierungen]
    C --> C2[Produktion]

    D --> D1[Ferienlager]
    D --> D2[Feiern]
    D --> D3[Tourismus]

    E --> E1[Preistabelle]
    E --> E2[Unterkünfte]
    E --> E3[Support & Kontakt]
```

## 3. Core User Flow: Reitstunde buchen
1. **Einstieg:** User landet auf Startseite (Hero-CTA) oder Reitschul-Unterseite.
2. **Information:** Prüfung der Level/Preise auf der Seite.
3. **Aktion:** Klick auf "Jetzt Buchen" (Sticky Button).
4. **Checkout:** Weiterleitung zum spezialisierten Buchungssystem (z.B. Reitbuch.com).
5. **Bestätigung:** Rückleitung auf eine "Danke"-Seite mit Anfahrtsbeschreibung.
