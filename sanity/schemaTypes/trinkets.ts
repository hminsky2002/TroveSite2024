import { defineField, defineType } from 'sanity';

export const trinkets = defineType({
  name: 'trinkets',
  title: 'Trinkets',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Top Bio',
      name: 'top_bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      title: 'Trinket Cards',
      name: 'trinket_cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'trinket_card' }],
        },
      ],
    }),
    defineField({
      title: 'Bottom Bio',
      name: 'Bottom_bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'button_image',
      title: 'Button',
      type: 'image',
    }),
    defineField({
      name: 'email',
      title: 'Email Link',
      type: 'url',
    }),
  ],
});
