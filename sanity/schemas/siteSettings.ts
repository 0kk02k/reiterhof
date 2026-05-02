export default {
  name: 'siteSettings',
  title: 'Webseiten-Einstellungen',
  type: 'document',
  fields: [
    { name: 'title', title: 'Seitentitel', type: 'string' },
    { name: 'description', title: 'SEO Beschreibung', type: 'text' },
    { name: 'heroImage', title: 'Hero Hintergrundbild', type: 'image', options: { hotspot: true } },
    { name: 'footerAddress', title: 'Footer Adresse', type: 'text' },
    { name: 'footerPhone', title: 'Footer Telefon', type: 'string' },
    { name: 'footerEmail', title: 'Footer E-Mail', type: 'string' },
  ],
}
