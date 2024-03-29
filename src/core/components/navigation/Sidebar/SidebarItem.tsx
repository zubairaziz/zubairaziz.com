import * as React from 'react'

import { useRouter } from 'next/router'

import classNames from 'classnames'
import type { NavigationItem } from 'types'

import { AppLink } from 'core/components'

type SidebarItemProps = Pick<NavigationItem, 'title' | 'href' | 'children'>

const SidebarItem: React.FC<SidebarItemProps> = ({ title, href, children }) => {
  const { pathname } = useRouter()

  return (
    <React.Fragment key={`${href}-${title}`}>
      <li key={href} className="relative mt-2 ml-px lg:mt-4">
        <AppLink
          href={href}
          className={classNames(
            'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
            {
              'font-semibold text-primary-7 before:bg-primary-7': href === pathname,
              'text-primary-6 before:hidden before:bg-slate-300 hover:text-primary-7 hover:before:block':
                href !== pathname,
            }
          )}
        >
          {title}
        </AppLink>
      </li>
    </React.Fragment>
  )
}

export default SidebarItem
