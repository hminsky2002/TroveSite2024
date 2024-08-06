import { defineField, defineType } from 'sanity';

export const treasures = defineType({
  name: 'treasures',
  title: 'Treasures',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Treasures Blurb',
      name: 'treasures_blurb',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      title: 'Donation Button',
      name: 'donationButton',
      type: 'image',
    }),
    defineField({
      title: 'Upper Image',
      name: 'upperImage',
      type: 'image',
    }),
    defineField({
      title: 'Treasure Cards',
      name: 'treasure_cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'treasure_card' }],
        },
      ],
    }),
  ],
});
