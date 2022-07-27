import * as React from 'react'

import type { NavigationItem } from 'types'

import { PageHeader, Prose } from 'core/components'

import BlogLayoutPagination from './BlogLayoutPagination'

type BlogLayoutMainProps = React.PropsWithChildren<{
  title?: string
  pageTitle?: string
  previousPage?: NavigationItem
  nextPage?: NavigationItem
}>

const BlogLayoutMain: React.FC<BlogLayoutMainProps> = ({
  title,
  pageTitle,
  children,
  previousPage,
  nextPage,
}) => {
  const headerTitle = pageTitle ?? title
  return (
    <div className="relative flex-auto w-full min-w-0 py-20 max-w-7xl lg:max-w-full">
      <article className="block w-full px-4 lg:px-8">
        {headerTitle && (
          <header className="space-y-1 mb-9">
            <PageHeader title={headerTitle} />
          </header>
        )}
        <Prose>{children}</Prose>
      </article>
      {!!(previousPage || nextPage) && (
        <BlogLayoutPagination previousPage={previousPage} nextPage={nextPage} />
      )}
    </div>
  )
}

export default BlogLayoutMain
