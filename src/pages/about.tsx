import * as React from 'react'

import type { Page } from 'types'

import { AboutMeSection, PageHeader, UsesSection } from 'core/components'
import featuredImage from 'core/images/about.jpg'
import { AppLayout } from 'core/layouts'

const AboutPage: Page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <PageHeader title="About" backgroundImage={featuredImage?.src} />
      <div className="z-10 w-full mx-auto mb-20 space-y-4 max-w-7xl md:-mt-20 md:space-y-8">
        <AboutMeSection />
        <UsesSection />
      </div>
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
