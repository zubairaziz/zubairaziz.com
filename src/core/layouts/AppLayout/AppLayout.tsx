import * as React from 'react'

import { Navbar } from 'core/components'

import { SiteLayout } from '../SiteLayout'

type AppLayoutProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ title = '', description = '', children }) => (
  <SiteLayout title={title} description={description}>
    {/* Navbar */}
    <Navbar />

    {/* Page Contents */}
    <main
      className="relative flex justify-center flex-1"
      data-test="page-container"
      id="app-container"
    >
      <div className="relative flex justify-center flex-auto w-full min-w-0 px-4 mx-auto max-w-8xl lg:px-6 xl:px-8">
        {children}
      </div>
    </main>

    {/* <SiteFooter /> */}
  </SiteLayout>
)

export default AppLayout
