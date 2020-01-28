import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Head = ({ pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${pageTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="google-site-verification" content="vcszfyvttpbLnrwUknzvdQBvVZQD5IpYJsy9-hLcPEw" />
      <meta name="description" content="Zubair's website" />
    </Helmet>
  )
}

export default Head
