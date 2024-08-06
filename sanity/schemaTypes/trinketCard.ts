import { defineField, defineType } from 'sanity';

export const trinketCard = defineType({
  name: 'trinket_card',
  title: 'Trinket Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Info',
      name: 'info',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
});
