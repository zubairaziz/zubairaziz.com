import * as React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import OGImage from 'core/images/ogimage.png'

const CANONICAL_DOMAIN = 'https://www.zubairaziz.com'

const siteMetadata = {
  siteUrl: `https://www.zubairaziz.com`,
  siteTitle: `Zubair Aziz`,
  siteDescription: `Zubair's personal website`,
  siteAuthor: `Zubair<zubairaziz.dev@gmail.com>`,
  siteLanguage: `en-Us`,
  themeColor: `#33658a`,
  basePath: `/`,
}

type MetaTagsProps = {
  title?: string
  description?: string
  featuredImage?: string
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title = '',
  description = '',
  featuredImage = '',
}) => {
  const { asPath } = useRouter()
  const { siteUrl } = siteMetadata
  const { siteTitle } = siteMetadata
  const { siteDescription } = siteMetadata
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const pageDescription = description || siteDescription

  // const featuredImageSrc = dynamic(() => import(featuredImage).then((mod) => mod.src))

  const _pathSliceLength = Math.min.apply(Math, [
    asPath.indexOf('?') > 0 ? asPath.indexOf('?') : asPath.length,
    asPath.indexOf('#') > 0 ? asPath.indexOf('#') : asPath.length,
  ])
  const canonicalUrl = CANONICAL_DOMAIN + asPath.substring(0, _pathSliceLength)

  // console.log({ featuredImageSrc })

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport-meta" />
      <link rel="canonical" href={canonicalUrl} />

      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content={featuredImageSrc} /> */}
      <meta property="og:image" content={`${siteUrl}${OGImage.src}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@zubairaziz_13" />
      <meta name="twitter:creator" content="@zubairaziz_13" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`${siteUrl}${OGImage.src}`} />
      <meta name="twitter:url" content={siteUrl} />
    </Head>
  )
}

export default MetaTags
