export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
      ],
      lists: [
        { title: 'Bullet List', value: 'bullet' },
        { title: 'Number List', value: 'number' },
      ],
      marks: {
        // Only allow these decorators
        decorators: [
          { title: 'Strongest', value: 'strong' },
          { title: 'Emphasisest', value: 'em' },
        ],
        // Support annotating text with a reference to an author
        annotations: [
          {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
          },
        ],
      },
    },
    {
      type: 'customImage',
    },
    {
      type: 'customCode',
    },
  ],
};
