import { defineField, defineType } from 'sanity';

export const treasureCard = defineType({
  name: 'treasure_card',
  title: 'Treasure Card',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Authors',
      name: 'authors',
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
