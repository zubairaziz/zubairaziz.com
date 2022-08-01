import * as React from 'react'

import type { NextPage } from 'next'

export type GetLayout = (page: React.ReactNode) => React.ReactNode
export type GetTitle = () => string

export type Page<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout
  getTitle?: GetTitle
}

export type GetBlogLayout = (
  page: React.ReactNode,
  pageProperties: {
    title: string
    pageTitle: string
    description?: string
    tableOfContents?: any
    navigation?: any
    featuredImage?: any
    frontmatter: Record<string, unknown>
  }
) => React.ReactNode
