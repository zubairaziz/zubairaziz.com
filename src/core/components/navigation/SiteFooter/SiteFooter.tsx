import * as React from 'react'

import { SocialLinks } from 'core/components'

const currentYear = new Date().getFullYear()

const SiteFooter = () => (
  <footer
    className="relative z-40 w-full px-4 py-8 text-white bg-primary-10 dark:bg-primary-2"
    aria-labelledby="footer-heading"
    data-test="site-footer"
    id="site-footer"
  >
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="flex flex-col items-center px-4 pt-8 md:flex-row-reverse md:justify-between">
      <SocialLinks />
      <p className="mt-8 text-base text-slate-200 md:mt-0 md:order-1">
        &copy; {currentYear} Zubair Aziz
      </p>
    </div>
  </footer>
)

export default SiteFooter
