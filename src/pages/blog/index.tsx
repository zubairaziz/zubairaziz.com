import * as React from 'react'

import type { Page } from 'types'

import { AppLayout } from 'core/layouts'

const BlogIndexPage: Page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full place-content-center">
      Hello, World!
    </div>
  )
}

BlogIndexPage.getLayout = function getLayout(page) {
  return <AppLayout title="Home">{page}</AppLayout>
}
export default BlogIndexPage
