import {defineField, defineType} from 'sanity'


export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    // Added: For the 2 big top posts
    defineField({
      name: 'isHero',
      title: 'Feature in Hero?',
      type: 'boolean',
      description: 'If toggled, this will appear in the top "Creative Performance" section.',
    }),
    // Added: For the dark "AI-Powered" section
    defineField({
      name: 'isAISection',
      title: 'Feature in AI Section?',
      type: 'boolean',
      description: 'Will appear in the dark-themed AI-Powered Creative area.',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
    }),
    // Added: Short description for the cards
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
    defineField({ name: 'body', type: 'blockContent' }),
  ],
})