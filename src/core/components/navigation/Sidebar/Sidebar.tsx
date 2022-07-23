import * as React from 'react'

import classNames from 'classnames'
import type { Navigation } from 'types'

import { AppLink } from 'core/components'

import SidebarItem from './SidebarItem'

type SidebarProps = {
  navigation: Navigation
  className?: string
}

const Sidebar: React.FC<SidebarProps> = ({ navigation, className }) => {
  const sectionHeaderCls = 'font-medium text-black font-display dark:text-white'
  const sectionHeaderLinkCls = classNames(
    sectionHeaderCls,
    'group-hover:text-primary-6 hover:text-primary-6'
  )

  return (
    <nav className={classNames('text-base lg:text-sm', className)}>
      <ul>
        {navigation.map((section) => (
          <li
            key={section.title}
            className={
              section.children && !!(section.children.length > 0)
                ? 'first:mt-0 mt-9 mb-9 last:mb-0'
                : 'my-3'
            }
          >
            {section.children && !!(section.children.length > 0) ? (
              <>
                <h2 className={sectionHeaderCls}>{section.title}</h2>
                <ul className="mt-2 border-l-2">
                  {section?.children?.length &&
                    section?.children.map((item) => (
                      <SidebarItem
                        title={item.title}
                        href={item.href}
                        key={`${item.href}-${item.title}`}
                      >
                        {item?.children}
                      </SidebarItem>
                    ))}
                </ul>
              </>
            ) : (
              <AppLink href={section.href} className="flex items-center space-x-3 group">
                <h2 className={sectionHeaderLinkCls}>{section.title}</h2>
                {/* {section.isExternal && (
                  <DynamicIcon
                    icon="ExternalLinkIcon"
                    className={classNames(sectionHeaderLinkCls, 'w-4 h-4')}
                  />
                )} */}
              </AppLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
