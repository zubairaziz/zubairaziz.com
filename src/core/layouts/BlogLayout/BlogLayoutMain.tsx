import * as React from 'react'

import type { NavigationItem } from 'types'

import { PageHeader, Prose } from 'core/components'

import DocsLayoutPagination from './BlogLayoutPagination'

type DocsLayoutMainProps = React.PropsWithChildren<{
  title?: string
  pageTitle?: string
  section?: NavigationItem
  previousPage?: NavigationItem
  nextPage?: NavigationItem
}>

const DocsLayoutMain: React.FC<DocsLayoutMainProps> = ({
  title,
  pageTitle,
  section,
  children,
  previousPage,
  nextPage,
}) => {
  return (
    <div className="relative flex-auto w-full min-w-0 py-20 max-w-7xl lg:max-w-full">
      <article className="block w-full px-4 lg:px-8">
        {(title || section) && (
          <header className="space-y-1 mb-9">
            {section && (
              <p className="text-sm font-medium font-display text-primary-500">{section.title}</p>
            )}
            {pageTitle && <PageHeader title={pageTitle} />}
          </header>
        )}
        <Prose>{children}</Prose>
      </article>
      {!!(previousPage || nextPage) && (
        <DocsLayoutPagination previousPage={previousPage} nextPage={nextPage} />
      )}
    </div>
  )
}

export default DocsLayoutMain
