export default {
  name: 'pageContent',
  title: 'Seiteninhalte',
  type: 'document',
  fields: [
    { 
      name: 'page', 
      title: 'Seite', 
      type: 'string', 
      options: {
        list: [
          { title: 'Reitschule', value: 'reitschule' },
          { title: 'Biohof', value: 'biohof' },
          { title: 'Pensionspferde', value: 'pensionspferde' },
          { title: 'Reiterferien', value: 'reiterferien' },
          { title: 'Reittherapie', value: 'reittherapie' },
          { title: 'Kremserfahrten', value: 'kremserfahrten' },
          { title: 'Kindergeburtstage', value: 'kindergeburtstage' },
        ]
      },
      validation: (r: any) => r.required()
    },
    { name: 'title', title: 'Hauptüberschrift', type: 'string' },
    { name: 'subtitle', title: 'Unterüberschrift', type: 'string' },
    { name: 'heroDescription', title: 'Hero Beschreibungstext', type: 'text' },
    { name: 'narrativeTitle', title: 'Narrativ Überschrift', type: 'string' },
    { name: 'narrativeText', title: 'Narrativ Text', type: 'text' },
    { name: 'mainImage', title: 'Hauptbild (Sektion)', type: 'image', options: { hotspot: true } },
    {
      name: 'stats',
      title: 'Statistiken / Merkmale',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Wert', type: 'string' },
          ]
        }
      ]
    }
  ],
}
