import * as React from 'react'

import { useRouter } from 'next/router'

import { LoadingSpinner, MetaTags } from 'core/components'
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
    }, 500)
    return () => clearTimeout(timer)
  }, [isFirstRender, setIsLoading])

  // Check for first render
  if (isLoading && isFirstRender) {
    return (
      <div className="grid w-full h-full min-h-screen place-content-center">
        <LoadingSpinner withText />
      </div>
    )
  }

  return (
    <>
      <MetaTags title={metaTitle} description={metaDescription} />
      {children}
    </>
  )
}

export default SiteLayout
