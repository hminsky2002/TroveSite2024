import { defineField, defineType } from 'sanity';

export const affiliate = defineType({
  name: 'affiliate',
  title: 'Affiliate',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'url',
    }),
  ],
});
