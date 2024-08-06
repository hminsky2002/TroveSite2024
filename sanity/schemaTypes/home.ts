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
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Donation Block',
      name: 'donationBlock',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'donationButton',
      title: 'Donation Button',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'lowerImage',
      title: 'Lower Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
  ],
});

export default home;
