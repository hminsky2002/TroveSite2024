import { defineField, defineType } from 'sanity';

export const team = defineType({
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'string',
    }),
    defineField({
      title: 'Team Cards',
      name: 'team_cards',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'team_card' }],
        },
      ],
    }),
    defineField({
      name: 'affiliatesBlurb',
      title: 'Affiliates Blurb',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'affiliatesList',
      title: 'Affiliates List',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'affiliate' }],
        },
      ],
    }),
  ],
});
