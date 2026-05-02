const news = {
  name: 'news',
  title: 'Neuigkeit',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string', validation: (r: any) => r.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r: any) => r.required() },
    { name: 'date', title: 'Datum', type: 'date', validation: (r: any) => r.required() },
    { name: 'excerpt', title: 'Auszug', type: 'text', rows: 3, validation: (r: any) => r.required() },
    { name: 'image', title: 'Bild', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Inhalt', type: 'array', of: [{ type: 'block' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'date' } },
}

export default news
