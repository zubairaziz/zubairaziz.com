import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'
import Grid from '../components/grid'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const imageData = data.backgroundImage.childImageSharp.fluid

    return (
      <Layout location={this.props.location} title={siteTitle}>
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
                node.frontmatter.featuredImage.childImageSharp.fluid
              return (
                <Link
                  key={node.fields.slug}
                  to={node.fields.slug}
                  className="blog-list-item"
                  data-sal="slide-up"
                  data-sal-delay={`${index}00`}
                  data-sal-duration="500"
                  data-sal-easing="ease-in-out-sine"
                >
                  <div>
                    <div className="w-full image-cover rounded-t-md">
                      <Image
                        fluid={featuredImgFluid}
                        className="rounded-t-md opacity-90 hover:opacity-100"
                      />
                      <div className="p-2 m-4 w-16 h-16 text-center bg-primary-700 rounded-full text-yellow float-right fd-cl group-hover:opacity-25">
                        <span className="text-base tracking-wide  font-bold border-b border-yellow font-sans">
                          {' '}
                          {node.frontmatter.day}
                        </span>
                        <span className="text-xs tracking-wide text-yellow font-bold uppercase block font-sans">
                          {node.frontmatter.month}
                        </span>
                      </div>
                    </div>
                    <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
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
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
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
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
