import * as React from 'react'

import type { Page } from 'types'

import { ContactMeSection, PageHeader } from 'core/components'
import featuredImage from 'core/images/contact.jpg'
import { AppLayout } from 'core/layouts'

const ContactPage: Page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <PageHeader title="Contact" backgroundImage={featuredImage?.src} />
      <div className="z-10 w-full mx-auto mb-20 space-y-4 max-w-7xl md:-mt-20 md:space-y-8">
        <ContactMeSection />
      </div>
    </div>
  )
}

ContactPage.getLayout = function getLayout(page) {
  return (
    <AppLayout title="Contact" description="Get in touch with Zubair">
      {page}
    </AppLayout>
  )
}

export default ContactPage
