import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'

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
          <div
            style={{
              display: `grid`,
              gridTemplateColumns: `repeat(auto-fill, 300px)`,
              gridGap: `10px`
            }}
          >
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            const featuredImgFluid =
              node.frontmatter.featuredImage.childImageSharp.fluid
            return (
              <Link key={node.fields.slug} to={node.fields.slug} className="py-4">
                <div>
                  <div className="w-full image-cover rounded-t-md">
                    <Image fluid={featuredImgFluid} className="rounded-t-md" />
                    <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                      <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
                        {' '}
                        {node.frontmatter.day}
                      </span>
                      <span className="text-xs tracking-wide font-bold uppercase block font-sans">
                        {node.frontmatter.month}
                      </span>
                    </div>
                  </div>
                  <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                    <span className="block text-lg text-gray-800 font-bold tracking-wide">
                      {title}
                    </span>
                    <span
                      className="block text-gray-600 text-sm"
                      dangerouslySetInnerHTML={{ __html: node.excerpt }}
                    />
                  </div>
                </div>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                  <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                    Paris city of light
                </span>
                  <div className="pt-8 text-center">
                    <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                      Learn more
                  </button>
                  </div>
                </div>
              </Link>
            )
          })}
          </div>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
