import * as React from 'react'

import { useRouter } from 'next/router'

import { MetaTags } from 'core/components'
import { useIsFirstRender } from 'core/hooks'
import { slugToTitleCase } from 'core/utils'

type SiteLayoutProps = React.PropsWithChildren<{
  title?: string
  description?: string
}>

const SiteLayout: React.FC<SiteLayoutProps> = ({
  children,
  title = undefined,
  description = undefined,
}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(true)
  const isFirstRender = useIsFirstRender()

  const slug = router?.query?.slug
  const defaultTitle = slug ? slugToTitleCase(slug as string) : slugToTitleCase(router.asPath)
  const metaTitle = title ?? defaultTitle
  const metaDescription = description ?? `${metaTitle} Page`

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (isFirstRender) {
        setIsLoading(false)
      }
    }, 300)
    return () => clearTimeout(timer)
  }, [isFirstRender, setIsLoading])

  // Check only for `auth` to be defined. auth's children will mess up the layout
  if (isLoading && isFirstRender) {
    return <>Loading...</>
  }

  return (
    <>
      <MetaTags title={metaTitle} description={metaDescription} />
      {children}
    </>
  )
}

export default SiteLayout
