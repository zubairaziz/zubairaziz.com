import * as React from 'react'

import type { Navigation } from 'types'

import { Sidebar } from 'core/components/navigation'

type DocsLayoutSidebarProps = { navigation: Navigation }

const DocsLayoutSidebar: React.FC<DocsLayoutSidebarProps> = ({ navigation }) => {
  return (
    <div className="hidden lg:relative lg:block lg:flex-none lg:min-h-screen lg:h-full">
      <div className="absolute inset-y-0 right-0 w-[50vw] border-r" />
      <div className="sticky -ml-0.5 max-h-full overflow-y-auto py-20 pl-0.5 top-0">
        <div className="absolute bottom-0 right-0 hidden w-px h-12 top-16 bg-gradient-to-t from-primary-500 to-primary-700 dark:block" />
        <div className="absolute bottom-0 right-0 hidden w-px top-28 bg-gradient-to-t from-primary-800 to-primary-500 dark:block" />
        <Sidebar navigation={navigation} className="w-64 pr-8 xl:w-72 xl:pr-16" />
      </div>
    </div>
  )
}

export default DocsLayoutSidebar
