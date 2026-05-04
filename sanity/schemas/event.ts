import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event Kalender',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'link',
      title: 'Optionaler Link',
      description: 'Wohin soll der Termin verlinken? (z.B. /reitschule oder /#kontakt)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
});
