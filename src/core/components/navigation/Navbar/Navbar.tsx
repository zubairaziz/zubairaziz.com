import * as React from 'react'

import { AppLink, ThemeSwitcher } from 'core/components'
import { navigation } from 'core/navigation'

const Navbar = () => {
  return (
    <header className="w-full p-4 bg-primary-10 dark:bg-primary-2 text-secondary-6 dark:text-secondary-4">
      <div className="flex items-center justify-between">
        <div>
          <AppLink href="/">Home</AppLink>
        </div>

        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex items-center space-x-3">
              {navigation.map((item) => (
                <React.Fragment key={item.href}>
                  {item.title !== 'Home' && (
                    <li>
                      <AppLink
                        href={item.href}
                        className="hover:text-secondary-8 dark:hover:text-secondary-3"
                      >
                        {item.title}
                      </AppLink>
                    </li>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
