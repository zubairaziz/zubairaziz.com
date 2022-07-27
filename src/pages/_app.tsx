import * as React from 'react'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import { RenderableTreeNode } from '@markdoc/markdoc'
import { MarkdocNextJsPageProps } from '@markdoc/next.js'

import type { FrontMatter, GetBlogLayout, Page } from 'types'

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
  const { frontmatter, content } = markdoc || {}
  const title = frontmatter?.title
  const pageTitle = frontmatter?.pageTitle || title
  const description = frontmatter?.description
  const tableOfContents =
    content && !!((content as RenderableTreeNode[])?.length > 0) ? collectHeadings(content) : []

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
