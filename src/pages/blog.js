import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'
import Grid from '../components/grid'

const BlogIndex = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  const imageData = data.backgroundImage.childImageSharp.fluid

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <PageHeader pageTitle={`Blog Posts`} imageData={imageData} />
      <Container>
        <Grid>
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fixed
            return (
              <Link
                key={node.fields.slug}
                to={node.fields.slug}
                className="transition-shadow duration-300 ease-in-out blog-list-item hover:shadow-2xl"
              >
                <div
                  data-sal="slide-up"
                  data-sal-delay={`${index}00`}
                  data-sal-duration="500"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div className="w-full image-cover rounded-t-md">
                    <Img
                      fluid={featuredImgFluid}
                      className="w-full rounded-t-md"
                      style={{ height: `210px` }}
                    />
                    <div className="float-right w-16 h-16 p-2 m-4 text-center rounded-full bg-primary-700 text-yellow fd-cl">
                      <span className="font-sans text-base font-bold tracking-wide border-b border-yellow">
                        {' '}
                        {node.frontmatter.day}
                      </span>
                      <span className="block font-sans text-xs font-bold tracking-wide uppercase text-yellow">
                        {node.frontmatter.month}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-8 bg-white rounded-b-md fd-cl">
                    <h2 className=".no-underline block text-lg text-primary-800 font-bold tracking-wide">
                      {title}
                    </h2>
                    <span
                      className=".no-underline block text-primary-600 text-sm"
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                  </div>
                </div>
              </Link>
            )
          })}
        </Grid>
      </Container>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(blog)/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            day: date(formatString: "DD")
            month: date(formatString: "MMMM")
            title
            featuredImage {
              childImageSharp {
                fixed(width: 390, height: 210) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
