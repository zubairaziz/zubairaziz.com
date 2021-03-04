import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ description, title, location }) => {
  const lang = 'en-US'
  const data = useStaticQuery(detailsQuery)
  const { siteMetadata } = data.site
  const metaDescription = description || siteMetadata.description
  const ogImage = data.socialImage.childImageSharp.original.src

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebPage',
      url: siteMetadata.siteUrl,
      name: title,
      author: {
        '@context': 'http://www.schema.org',
        '@type': 'person',
        name: 'Zubair Aziz',
        gender: 'male',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1505 Elm St',
          addressLocality: 'Utica',
          addressRegion: 'NY',
          postalCode: '13501',
          addressCountry: 'United States',
        },
        email: 'zubairaziz.dev@gmail.com',
        birthDate: '1996-04-28',
        alumniOf: 'University of Rochester',
        birthPlace: 'Malaysia',
        nationality: 'Malaysia',
        telephone: '5852841150',
      },
    },
  ]

  console.log(JSON.stringify(schemaOrgJSONLD))

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: `${siteMetadata.siteUrl}${ogImage}`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          property: `twitter:image`,
          content: `${siteMetadata.siteUrl}${ogImage}`,
        },
        {
          name: `twitter:creator`,
          content: `@${siteMetadata.social.twitter}`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'google-site-verification',
          content: 'BuOnyXcqLptPeRIzYxp4oKCBBKeVDXqVqMWqmOrCAMc',
        },
      ]}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        siteUrl
        title
        description
        author
        social {
          twitter
        }
      }
    }
    socialImage: file(absolutePath: { regex: "/og-image.png/" }) {
      childImageSharp {
        original {
          src
        }
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          width: 1200
          height: 630
          layout: FIXED
        )
      }
    }
  }
`
