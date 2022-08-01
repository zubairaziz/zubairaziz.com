import * as React from 'react'

import type { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

import type { Navigation, NavigationItem, TableOfContents } from 'types'

import { navigation } from 'core/navigation'

import { AppLayout } from '../AppLayout'
import BlogLayoutMain from './BlogLayoutMain'
import BlogLayoutSidebar from './BlogLayoutSidebar'
import BlogLayoutTableOfContents from './BlogLayoutTableOfContents'

type BlogLayoutProps = React.PropsWithChildren<{
  title: string
  pageTitle: string
  description: string
  tableOfContents: TableOfContents
  featuredImage?: StaticImageData
  frontmatter: Record<string, unknown>
}>

const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  title,
  pageTitle,
  description,
  tableOfContents,
  featuredImage,
  frontmatter,
}) => {
  const blogNavigation = navigation[3]?.children as Navigation
  const { pathname } = useRouter()
  const allLinks = blogNavigation?.flatMap((item) => item) ?? []
  const linkIndex = allLinks.findIndex((link) => link !== undefined && link.href === pathname)
  const previousPage = allLinks[linkIndex - 1]
  const nextPage = allLinks[linkIndex + 1]

  return (
    <AppLayout title={title} description={description}>
      <BlogLayoutSidebar navigation={blogNavigation} />
      <BlogLayoutMain
        title={title}
        pageTitle={pageTitle}
        previousPage={previousPage}
        nextPage={nextPage}
        featuredImage={featuredImage}
        frontmatter={frontmatter}
      >
        {children}
      </BlogLayoutMain>
      <BlogLayoutTableOfContents tableOfContents={tableOfContents} />
    </AppLayout>
  )
}

export default BlogLayout
