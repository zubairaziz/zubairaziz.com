import { Fence, AppLink } from 'core/components'

const nodes = {
  document: {
    render: undefined,
  },
  th: {
    attributes: {
      scope: {
        type: String,
        default: 'col',
      },
    },
    render: (props: any) => <th {...props} />,
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
  link: {
    render: AppLink,
    attributes: {
      href: {
        type: String,
      },
    },
  },
}

export default nodes
