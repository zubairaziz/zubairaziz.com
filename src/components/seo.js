import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const ogImage = data.socialImage.childImageSharp.original.src
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
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
                content: ogImage,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                property: `og:image`,
                content: ogImage,
              },
              {
                name: `twitter:creator`,
                content: `@${data.site.siteMetadata.social.twitter}`,
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
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
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
        fixed(width: 1200, height: 630) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
