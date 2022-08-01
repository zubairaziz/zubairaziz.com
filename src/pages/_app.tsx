import * as React from 'react'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import { RenderableTreeNode } from '@markdoc/markdoc'
import { MarkdocNextJsPageProps } from '@markdoc/next.js'

import type { GetBlogLayout, Page } from 'types'

import { useAnalytics } from 'core/hooks'
import { BlogLayout } from 'core/layouts'
import 'core/styles/main.css'
import { collectHeadings } from 'core/utils'

const getBlogLayout: GetBlogLayout = function getLayout(
  page,
  {
    title = '',
    pageTitle = '',
    description = '',
    tableOfContents = [],
    featuredImage = '',
    frontmatter = {},
  }
) {
  return (
    <BlogLayout
      title={title}
      pageTitle={pageTitle}
      description={description}
      tableOfContents={tableOfContents}
      featuredImage={featuredImage}
      frontmatter={frontmatter}
    >
      {page}
    </BlogLayout>
  )
}

type CustomAppProps<P = Record<string, unknown>> = AppProps<P> & {
  Component: Page<P & MarkdocNextJsPageProps>
}

// RegEx to get last part of path
const lastPathPart = /\/([^/]+)\/?$/

const CustomApp: React.FC<CustomAppProps> = ({ Component, pageProps }) => {
  const { asPath } = useRouter()
  const { markdoc }: MarkdocNextJsPageProps = pageProps || {}
  const { frontmatter, content } = markdoc || {}
  const title = frontmatter?.title
  const pageTitle = frontmatter?.pageTitle || title
  const description = frontmatter?.description
  const tableOfContents =
    content && !!((content as RenderableTreeNode[])?.length > 0) ? collectHeadings(content) : []

  const _pathSliceLength = Math.min.apply(Math, [
    asPath.indexOf('?') > 0 ? asPath.indexOf('?') : asPath.length,
    asPath.indexOf('#') > 0 ? asPath.indexOf('#') : asPath.length,
  ])
  const cleanedPath = asPath.substring(0, _pathSliceLength)
  const isBlogPost =
    cleanedPath !== '/blog' && cleanedPath.indexOf('blog') >= 0 && typeof frontmatter !== undefined
  const slug = isBlogPost ? cleanedPath.match(lastPathPart)?.[1] : undefined
  const featuredImage = isBlogPost
    ? require(`pages/blog/${slug}/featured-image.png`).default
    : undefined

  useAnalytics()

  return (
    <ThemeProvider themes={['light', 'dark']} attribute="class" defaultTheme="dark">
      {Component.getLayout
        ? Component.getLayout(<Component {...pageProps} />)
        : getBlogLayout(<Component {...pageProps} />, {
            title,
            pageTitle,
            description,
            tableOfContents,
            featuredImage,
            frontmatter: { ...frontmatter },
          })}
    </ThemeProvider>
  )
}

export default CustomApp
