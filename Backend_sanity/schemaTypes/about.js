import {defineField, defineType} from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'My name',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'My email',
    }),

    defineField({
      name: 'skills',
      type: 'object',
      title: 'My skills',
      fields: [
        {name: 'hard', type: 'array', title: 'Hard skills', of: [{type: 'string'}]},
        {name: 'soft', type: 'array', title: 'Soft skills', of: [{type: 'string'}]},
      ],
    }),

    defineField({
      name: 'services',
      type: 'array',
      title: 'Services provided',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'role', type: 'string', title: 'Role'},
            {name: 'description', type: 'string', title: 'Description'},
          ],
        },
      ],
    }),

    defineField({
      name: 'text',
      type: 'object',
      title: 'Text',
      fields: [
        {name: 'aboutMainText', type: 'string', title: 'About Main Text'},
        {name: 'aboutSecondaryText', type: 'string', title: 'About Secondary Text'},
        {name: 'workPageText', type: 'string', title: 'Work Page Text'},
        {name: 'homePageSubtitle', type: 'string', title: 'Home Page Sub'},
      ],
    }),

    defineField({
      name: 'mainText',
      type: 'string',
      title: 'Main Text',
    }),

    defineField({
      name: 'secondaryText',
      type: 'string',
      title: 'Secondary Text',
    }),

    defineField({
      name: 'aboutImage',
      type: 'image',
      title: 'About Image',
    }),

    defineField({
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Social Media Name'},
            {name: 'link', type: 'string', title: 'Social Media URL'},
          ],
        },
      ],
    }),
  ],
})
