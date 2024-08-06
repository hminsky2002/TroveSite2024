import { defineField, defineType } from 'sanity';
import { ComposeIcon } from '@sanity/icons';

export const teamCard = defineType({
  name: 'team_card',
  title: 'Team Card',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      title: 'Role',
      name: 'role',
      type: 'string',
    }),
    defineField({
      title: 'Bio',
      name: 'bio',
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
