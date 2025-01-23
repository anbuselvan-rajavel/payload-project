import { Block } from 'payload'

export const Projects: Block = {
  slug: 'projects',
  interfaceName: 'ProjectBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: false,
    },
    {
      name: 'projects',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'projectTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'projectDescription',
          type: 'textarea',
          required: false,
        },
        {
          name: 'projectImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
