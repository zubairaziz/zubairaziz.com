import * as React from 'react'

import { AppLink, SocialLinks } from 'core/components'
import { navigation } from 'core/navigation'

const currentYear = new Date().getFullYear()

const SiteFooter = () => (
  <footer
    className="relative z-40 w-full py-8 text-white bg-primary-10 dark:bg-primary-2"
    aria-labelledby="footer-heading"
    data-test="site-footer"
    id="site-footer"
  >
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="px-4 py-12 mx-auto max-w-7xl">
      <ul className="flex flex-col items-center text-center md:flex-row md:justify-around">
        {navigation.map((nav) => {
          if (nav.href === '/') {
            return null
          }
          return (
            <li key={nav.href}>
              <AppLink
                href={nav.href}
                className="duration-200 ease-in-out text-slate-200 hover:text-secondary-6"
                data-test="site-footer-link"
              >
                {nav.title}
              </AppLink>
            </li>
          )
        })}
      </ul>
      <div className="flex flex-col items-center pt-8 mt-8 border-t border-primary-500 md:flex-row-reverse md:justify-between">
        <SocialLinks />
        <p className="mt-8 text-base text-slate-200 md:mt-0 md:order-1">
          &copy; {currentYear} Zubair Aziz
        </p>
      </div>
    </div>
  </footer>
)

export default SiteFooter
