import { defineField, defineType } from 'sanity';

export const triangle = defineType({
  name: 'triangle',
  title: 'Triangle',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Triangle Blurb',
      name: 'triangle_blurb',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
