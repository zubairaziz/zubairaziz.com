import * as React from 'react'

import type { Page } from 'types'

import { AppLayout } from 'core/layouts'

const HomePage: Page = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full place-content-center">
      Hello, World!
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <AppLayout title="Home">{page}</AppLayout>
}
export default HomePage
