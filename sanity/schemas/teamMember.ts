const teamMember = {
  name: 'teamMember',
  title: 'Teammitglied',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (r: any) => r.required() },
    { name: 'role', title: 'Rolle', type: 'string', validation: (r: any) => r.required() },
    { name: 'bio', title: 'Kurzbiografie', type: 'text', rows: 3, validation: (r: any) => r.required() },
    { name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } },
  ],
  preview: { select: { title: 'name', subtitle: 'role' } },
}

export default teamMember
