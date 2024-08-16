import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Project name',
    }),

    defineField({
      name: 'homeImage',
      type: 'image',
      title: 'Home Image',
    }),

    defineField({
      name: 'client',
      type: 'string',
      title: 'Project client',
    }),
    defineField({
      name: 'year',
      type: 'number',
      title: 'Project year',
    }),
    defineField({
      name: 'description',
      type: 'object',
      title: 'Project description',
      fields: [
        {name: 'short', type: 'string', title: 'Short description'},
        {name: 'long', type: 'string', title: 'Long description'},
      ],
    }),
    defineField({
      name: 'role',
      type: 'array',
      title: 'Role in project',
      of: [{type: 'string'}],
    }),

    defineField({
      name: 'coverImage',
      type: 'object',
      title: 'Cover image',
      fields: [
        {name: 'large', type: 'image'},
        {name: 'medium', type: 'image'},
        {name: 'small', type: 'image'},
      ],
    }),

    defineField({
      name: 'images',
      type: 'object',
      title: 'Project images',
      fields: [
        {name: 'large', type: 'array', of: [{type: 'image'}]},
        {name: 'medium', type: 'array', of: [{type: 'image'}]},
        {name: 'small', type: 'array', of: [{type: 'image'}]},
      ],
    }),

    defineField({
      name: 'links',
      type: 'object',
      title: 'Project links',
      fields: [
        {name: 'github', type: 'string', title: 'Github link'},
        {name: 'live', type: 'string', title: 'Live link'},
      ],
    }),
    defineField({
      name: 'isSelected',
      type: 'boolean',
      title: 'Is selected project',
    }),
  ],
})
