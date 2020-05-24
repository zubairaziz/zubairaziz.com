import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'
import Grid from '../components/grid'
import Card from '../components/card'

const Portfolio = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.backgroundImage.childImageSharp.fluid
  const sites = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Portfolio"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <PageHeader pageTitle={`Portfolio`} imageData={imageData} />
      <Container>
        <Card>
          <h2>Websites</h2>
          <Grid>
            {sites.map(({ node }, index) => {
              console.log(node)
              const title = node.frontmatter.title
              const summary = node.frontmatter.summary
              const technologies = node.frontmatter.technologies
              const featuredImgFluid =
                node.frontmatter.featuredImage.childImageSharp.fluid
              return (
                <a
                  data-sal="slide-up"
                  data-sal-delay={`${index}00`}
                  data-sal-duration="500"
                  data-sal-easing="ease-in-out-sine"
                  key={index}
                  href={node.frontmatter.url}
                  target="_blank"
                  className="no-underline portfolio-list-item transition-shadow duration-300 ease-in-out shadow-lg hover:shadow-2xl"
                >
                  <Image fluid={featuredImgFluid} className="rounded-t-md" />
                  <div className="no-underline p-4 bg-gray-800 text-gray-100 rounded-b-md">
                    <div className="no-underline font-semibold text-lg">
                      {title}
                    </div>
                    <div className="no-underline">{summary}</div>
                    <ul className="no-underline">
                      {technologies.map((technology, index) => (
                        <li className="no-underline" key={index}>
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              )
            })}
          </Grid>
        </Card>
      </Container>
    </Layout>
  )
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
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            url
            summary
            technologies
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
