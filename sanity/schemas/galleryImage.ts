const galleryImage = {
  name: 'galleryImage',
  title: 'Galeriebild',
  type: 'document',
  fields: [
    { name: 'image', title: 'Bild', type: 'image', options: { hotspot: true }, validation: (r: any) => r.required() },
    { name: 'alt', title: 'Alternativtext', type: 'string', validation: (r: any) => r.required() },
    { name: 'caption', title: 'Unterschrift', type: 'string' },
  ],
  preview: { select: { title: 'alt', media: 'image' } },
}

export default galleryImage
