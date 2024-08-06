import { defineField, defineType } from 'sanity';
import { ComposeIcon } from '@sanity/icons';

export const home = defineType({
  name: 'home',
  title: 'Home',
  icon: ComposeIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: 'Bio',
      name: 'bio',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'funImage',
      title: 'Fun Image',
      type: 'image',
    }),
    defineField({
      name: 'transmissions',
      title: 'Transmissions',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'emailImage',
      title: 'Email Image',
      type: 'image',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'url',
    }),
  ],
});

export default home;
