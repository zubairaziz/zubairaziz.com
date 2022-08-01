import * as React from 'react'

import { useRouter } from 'next/router'

import { Navbar, SiteFooter } from 'core/components'

import { SiteLayout } from '../SiteLayout'

type AppLayoutProps = {
  title?: string
  description?: string
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ title = '', description = '', children }) => {
  const { asPath } = useRouter()
  const _pathSliceLength = Math.min.apply(Math, [
    asPath.indexOf('?') > 0 ? asPath.indexOf('?') : asPath.length,
    asPath.indexOf('#') > 0 ? asPath.indexOf('#') : asPath.length,
  ])
  const cleanedPath = asPath.substring(0, _pathSliceLength)
  const isHomePage = cleanedPath === '/'

  return (
    <SiteLayout title={title} description={description}>
      {/* Navbar */}
      <Navbar />

      {/* Page Contents */}
      <main
        className="relative flex justify-center flex-1 h-full"
        data-test="page-container"
        id="app-container"
      >
        <div className="relative flex justify-center w-full min-w-0 px-4 mx-auto max-w-8xl lg:px-6 xl:px-8">
          {children}
        </div>
      </main>

      {/* Site Footer (hidden from home page) */}
      {!isHomePage && <SiteFooter />}
    </SiteLayout>
  )
}

export default AppLayout
