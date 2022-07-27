import * as React from 'react'

import type { Page } from 'types'

import { PageHeader } from 'core/components'
import featuredImage from 'core/images/about.jpg'
import { AppLayout } from 'core/layouts'

const AboutPage: Page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <PageHeader title="About" backgroundImage={featuredImage?.src} />
    </div>
  )
}

AboutPage.getLayout = function getLayout(page) {
  return (
    <AppLayout title="About" description="Learn more about Zubair">
      {page}
    </AppLayout>
  )
}

export default AboutPage
