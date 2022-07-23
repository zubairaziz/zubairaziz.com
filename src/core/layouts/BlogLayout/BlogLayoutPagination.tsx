import * as React from 'react'

import type { NavigationItem } from 'types'

import { AppLink } from 'core/components'

type DocsLayoutPaginationProps = {
  previousPage?: NavigationItem
  nextPage?: NavigationItem
}

const DocsLayoutPagination: React.FC<DocsLayoutPaginationProps> = ({ previousPage, nextPage }) => {
  return (
    <dl className="flex w-full px-6 pt-6 mt-12 border-t lg:px-8">
      {previousPage && (
        <div>
          <dt className="text-sm font-medium font-display text-primary-9">Previous</dt>
          <dd className="mt-1">
            <AppLink
              href={previousPage.href}
              className="text-base font-semibold text-primary-6 hover:text-primary-7"
            >
              &larr; {previousPage.title}
            </AppLink>
          </dd>
        </div>
      )}
      {nextPage && (
        <div className="ml-auto text-right">
          <dt className="text-sm font-medium font-display text-primary-9">Next</dt>
          <dd className="mt-1">
            <AppLink
              href={nextPage.href}
              className="text-base font-semibold text-primary-6 hover:text-primary-7"
            >
              {nextPage.title} &rarr;
            </AppLink>
          </dd>
        </div>
      )}
    </dl>
  )
}

export default DocsLayoutPagination
