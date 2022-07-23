import * as React from 'react'

import type { LinkProps } from 'next/link'
import Link from 'next/link'

import { isExternalUrl, isUrl } from 'core/utils'

type AppLinkProps = React.PropsWithChildren<
  LinkProps & {
    className?: string
    children: React.ReactNode
    target?: '_blank' | '_self' | '_parent' | '_top'
  }
>

const AppLink = React.forwardRef<HTMLAnchorElement, AppLinkProps>(
  ({ children, href, className, target = undefined, ...otherProps }, ref) => {
    const hrefString = href.toString()

    // If not a valid URL, just render the children as fallback
    if (!isUrl(hrefString)) {
      console.warn(`${href} is not a valid URL`)
      return <span className={className}>{children}</span>
    }

    const isExternal = isExternalUrl(hrefString)

    if (isExternal) {
      return (
        <a
          href={hrefString}
          className={className}
          {...otherProps}
          // If target not explicitly set, default to `_blank` for all external links
          target={target ? target : '_blank'}
          rel="noopener noreferrer"
          ref={ref}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} ref={ref}>
        <a className={className} {...otherProps}>
          {children}
        </a>
      </Link>
    )
  }
)

AppLink.displayName = 'AppLink'

export default AppLink
