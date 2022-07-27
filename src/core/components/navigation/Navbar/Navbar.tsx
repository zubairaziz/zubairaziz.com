import * as React from 'react'

import { AppLink, ThemeSwitcher } from 'core/components'
import { navigation } from 'core/navigation'

const Navbar = () => {
  return (
    <header className="w-full p-4 bg-primary-10 dark:bg-primary-2 text-secondary-6 dark:text-secondary-4">
      <div className="flex items-center justify-between w-full mx-auto max-w-7xl">
        <div>
          <AppLink href="/">
            <span className="sr-only">Home</span>
            <span aria-hidden className="text-2xl font-bold leading-none">
              <span className="text-primary">Z</span>
              <span className="text-secondary">A</span>
            </span>
          </AppLink>
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
