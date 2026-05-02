# CMS Content-Schema (Sanity.io / Payload)

Dieses Dokument definiert die Datenstrukturen für das Backend, basierend auf dem "Herz & Klarheit" Konzept.

## 1. Dokumenten-Typen (Collections)

### A. News / Hof-Tagebuch (`news`)
| Feld | Typ | Beschreibung |
| :--- | :--- | :--- |
| `title` | String | Titel des Beitrags |
| `slug` | Slug | URL-Pfad (z.B. `/aktuelles/erster-reitertag`) |
| `date` | Date | Veröffentlichungsdatum |
| `category` | Reference | Verknüpfung zu Kategorien (Reitschule, Biohof, etc.) |
| `featuredImage` | Image | Hauptbild für Teaser |
| `excerpt` | Text | Kurzzusammenfassung für die Liste |
| `content` | PortableText | Rich-Text Editor für den Hauptinhalt |

### B. Team-Mitglieder (`team`)
| Feld | Typ | Beschreibung |
| :--- | :--- | :--- |
| `name` | String | Vor- und Nachname |
| `role` | String | Position am Hof (z.B. "Leitung Reitschule") |
| `image` | Image | Porträtfoto |
| `bio` | Text | Persönlicher Satz / Kurze Bio |
| `order` | Number | Sortierreihenfolge auf der Webseite |

### C. Leistungen / Services (`service`)
| Feld | Typ | Beschreibung |
| :--- | :--- | :--- |
| `title` | String | Name der Leistung |
| `category` | String (Enum) | Zuordnung (Reitwelt, Biohof, Erleben) |
| `description` | PortableText | Detaillierte Beschreibung |
| `priceDetails` | Array | Liste von Preisen (z.B. "Einzelstunde: 30€") |
| `ctaLabel` | String | Beschriftung des Buttons (z.B. "Platz sichern") |
| `bookingUrl` | Url | Link zum Buchungssystem |

### D. Veranstaltungen / Kalender (`event`)
| Feld | Typ | Beschreibung |
| :--- | :--- | :--- |
| `title` | String | Name des Events |
| `startDateTime` | DateTime | Beginn |
| `endDateTime` | DateTime | Ende |
| `location` | String | Ort am Hof |
| `isRecurring` | Boolean | Wiederkehrendes Event? |

## 2. Globale Konfiguration (Singleton)

### Webseiten-Metadaten (`siteSettings`)
*   `title`: "Biohof Mühlenberg"
*   `description`: Globaler SEO-Text.
*   `logo`: SVG oder hochauflösendes PNG.
*   `contactInfo`: Objekt mit Adresse, Telefon, E-Mail.
*   `socialLinks`: Array von Social-Media Profilen.
