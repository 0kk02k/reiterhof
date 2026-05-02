const priceItem = {
  name: 'priceItem',
  title: 'Preiselement',
  type: 'object',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (r: any) => r.required() },
    { name: 'price', title: 'Preis', type: 'string', validation: (r: any) => r.required() },
    { name: 'unit', title: 'Einheit', type: 'string' },
    { name: 'description', title: 'Beschreibung', type: 'string' },
  ],
}

const priceCategory = {
  name: 'priceCategory',
  title: 'Preiskategorie',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titel', type: 'string', validation: (r: any) => r.required() },
    { name: 'items', title: 'Leistungen', type: 'array', of: [{ type: 'priceItem' }], validation: (r: any) => r.required() },
  ],
  preview: { select: { title: 'title' } },
}

export { priceItem, priceCategory }
export default priceCategory
