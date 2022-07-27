import * as React from 'react'

import classNames from 'classnames'
import type { Navigation } from 'types'

import SidebarItem from './SidebarItem'

type SidebarProps = {
  navigation: Navigation
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ navigation, className }) => {
  return (
    <nav className={classNames('text-base lg:text-sm', className)}>
      <h2 className="text-lg font-bold leading-tight tracking-wider uppercase">All Posts</h2>
      <ul className="relative border-l">
        {navigation.map((item) => (
          <SidebarItem title={item.title} href={item.href} key={`${item.href}-${item.title}`}>
            {item?.children}
          </SidebarItem>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
