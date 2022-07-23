import * as React from 'react'

import { useRouter } from 'next/router'

import type { Navigation, TableOfContents } from 'types'

import { navigation } from 'core/navigation'

import { AppLayout } from '../AppLayout'
import BlogLayoutMain from './BlogLayoutMain'
import BlogLayoutSidebar from './BlogLayoutSidebar'
import BlogLayoutTableOfContents from './BlogLayoutTableOfContents'

const flattenNavigation = (array: Navigation): Navigation => {
  let result: Navigation = []
  array.forEach(function (a) {
    result.push(a)
    if (Array.isArray(a.children)) {
      result = result.concat(flattenNavigation(a.children))
    }
  })
  return result
}

const findActiveSection = (navigation: Navigation, pathname: string) =>
  navigation?.find(
    (section) =>
      section?.children !== undefined &&
      Array.isArray(section?.children) &&
      !!section?.children?.length &&
      section?.children.find((link) => pathname.includes(link.href))
  )

type BlogLayoutProps = React.PropsWithChildren<{
  title: string
  pageTitle: string
  description: string
  tableOfContents: TableOfContents
}>

const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  title,
  pageTitle,
  description,
  tableOfContents,
}) => {
  const { pathname } = useRouter()
  const allLinks = flattenNavigation(navigation)
  const linkIndex = allLinks.findIndex((link) => link !== undefined && link.href === pathname)
  const previousPage = allLinks[linkIndex - 1]
  const nextPage = allLinks[linkIndex + 1]
  const section = findActiveSection(navigation, pathname)

  return (
    <AppLayout title={title} description={description}>
      <BlogLayoutSidebar navigation={navigation} />
      <BlogLayoutMain
        title={title}
        pageTitle={pageTitle}
        section={section}
        previousPage={previousPage}
        nextPage={nextPage}
      >
        {children}
      </BlogLayoutMain>
      <BlogLayoutTableOfContents tableOfContents={tableOfContents} />
    </AppLayout>
  )
}

export default BlogLayout
