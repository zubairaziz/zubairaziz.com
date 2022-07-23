import * as React from 'react'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import { RenderableTreeNode } from '@markdoc/markdoc'
import { MarkdocNextJsPageProps } from '@markdoc/next.js'

import type { GetBlogLayout, Page } from 'types'

import { BlogLayout } from 'core/layouts'
import 'core/styles/main.css'
import { collectHeadings } from 'core/utils'

const getBlogLayout: GetBlogLayout = function getLayout(
  page,
  { title = '', pageTitle = '', description = '', tableOfContents = [] }
) {
  return (
    <BlogLayout
      title={title}
      pageTitle={pageTitle}
      description={description}
      tableOfContents={tableOfContents}
    >
      {page}
    </BlogLayout>
  )
}

type CustomAppProps<P = Record<string, unknown>> = AppProps<P> & {
  Component: Page<P & MarkdocNextJsPageProps>
}

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  const { markdoc }: MarkdocNextJsPageProps = pageProps || {}
  const title = markdoc?.frontmatter.title
  const pageTitle = markdoc?.frontmatter.pageTitle || title
  const description = markdoc?.frontmatter.description
  const tableOfContents =
    markdoc?.content && !!((markdoc?.content as RenderableTreeNode[])?.length > 0)
      ? collectHeadings(markdoc?.content)
      : []

  return (
    <ThemeProvider themes={['light', 'dark']} attribute="class" defaultTheme="dark">
      {Component.getLayout
        ? Component.getLayout(<Component {...pageProps} />)
        : getBlogLayout(<Component {...pageProps} />, {
            title,
            pageTitle,
            description,
            tableOfContents,
          })}
    </ThemeProvider>
  )
}

export default CustomApp
