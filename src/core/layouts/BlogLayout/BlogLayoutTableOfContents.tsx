import * as React from 'react'

import classNames from 'classnames'
import type { ContentNode, TableOfContents } from 'types'

import { AppLink } from 'core/components'
import { useTableOfContents } from 'core/hooks'

type BlogLayoutTableOfContentsProps = {
  tableOfContents: TableOfContents
}

const BlogLayoutTableOfContents: React.FC<BlogLayoutTableOfContentsProps> = ({
  tableOfContents,
}) => {
  const currentSection = useTableOfContents(tableOfContents)

  const isActive = (section: ContentNode) => {
    if (section.id === currentSection) {
      return true
    }
    if (!section.children) {
      return false
    }
    return section.children.findIndex(isActive) > -1
  }

  return (
    <div className="hidden xl:relative xl:block xl:flex-none xl:h-full xl:top-0 xl:border-l">
      <div className="sticky inset-0 py-20 pl-8 pr-6 2xl:pl-10">
        <nav aria-labelledby="on-this-page-title" className="w-56">
          {tableOfContents.length > 0 && (
            <>
              <h2
                id="on-this-page-title"
                className="text-sm font-medium text-black font-display dark:text-white"
              >
                On this page
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {tableOfContents.map((section) => (
                  <li key={section.id}>
                    <h3>
                      <AppLink
                        href={`#${section.id}`}
                        className={classNames(
                          isActive(section)
                            ? 'text-primary-500'
                            : 'font-normal text-primary-8 hover:text-secondary-7'
                        )}
                      >
                        {section.title}
                      </AppLink>
                    </h3>
                    {section?.children && section?.children?.length > 0 && (
                      <ul className="pl-5 mt-2 space-y-3 text-slate-500 dark:text-slate-400">
                        {section.children.map((subSection) => (
                          <li key={subSection.id}>
                            <AppLink
                              href={`#${subSection.id}`}
                              className={
                                isActive(subSection)
                                  ? 'text-primary-500'
                                  : 'font-normal text-primary-8 hover:text-secondary-7'
                              }
                            >
                              {subSection.title}
                            </AppLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>
      </div>
    </div>
  )
}

export default BlogLayoutTableOfContents
