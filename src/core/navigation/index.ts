import type { Navigation } from 'types'

export const navigation: Navigation = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
  {
    title: 'Blog',
    href: '/blog',
    children: [
      { title: 'Hello, World!', href: '/blog/hello-world' },
      { title: 'Helpful Git Commands', href: '/blog/helpful-git-commands' },
      { title: 'The Case for TypeScript', href: '/blog/the-case-for-typescript' },
    ],
  },
]
