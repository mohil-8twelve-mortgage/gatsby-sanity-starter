import { MdCategory } from 'react-icons/md';

export default {
  title: 'Category',
  name: 'category',
  type: 'document',
  icon: MdCategory,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'customImage',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'normalText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'coverImage',
      slug: 'slug',
    },
    prepare({ title, image, slug }) {
      return {
        title,
        media: image,
        subtitle: slug.current,
      };
    },
  },
};
