// If you don't want to use TypeScript you can delete this file!
import React from 'react'
import { PageProps, graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'

const NotFoundPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "error" }) {
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="404: Page Not Found" />
      <PageHeader
        pageTitle="404 Error"
        imageData={data.file.childImageSharp.gatsbyImageData}
      />
      <PageContent>
        <Card>
          <h2 className="text-xl text-gray-600 md:text-3xl lg:text-5xl lg:tracking-wider">
            Page Not Found
          </h2>
          <p className="mt-5 md:mt-10">
            Go back to <Link to="/">home page</Link>.
          </p>
        </Card>
      </PageContent>
    </Layout>
  )
}

export default NotFoundPage
