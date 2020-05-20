import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'
import Grid from '../components/grid'

class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const imageData = data.backgroundImage.childImageSharp.fluid

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Portfolio"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PageHeader pageTitle={`Portfolio`} imageData={imageData} />
        <Container>
          <Grid></Grid>
        </Container>
      </Layout>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(relativePath: { eq: "developer.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
