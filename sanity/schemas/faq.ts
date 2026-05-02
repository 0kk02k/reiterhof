export default {
  name: 'faq',
  title: 'Häufige Fragen (FAQ)',
  type: 'document',
  fields: [
    { name: 'question', title: 'Frage', type: 'string', validation: (r: any) => r.required() },
    { name: 'answer', title: 'Antwort', type: 'text', validation: (r: any) => r.required() },
    { name: 'order', title: 'Sortierung', type: 'number' },
  ],
}
