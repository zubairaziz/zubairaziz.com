import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'

const BlogIndex = (props) => {
  const { data } = props
  const posts = data.allMdx.edges
  const imageData = data.backgroundImage.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <SEO title="Blog posts" />
      <PageHeader pageTitle={`Blog Posts`} imageData={imageData} />
      <PageContent>
        <div className="grid grid-cols-1 gap-2 m-5 mb-10 md:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            const featuredImg =
              node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
            return (
              <Link
                key={node.fields.slug}
                to={node.fields.slug}
                className="transition-shadow duration-300 ease-in-out blog-list-item hover:shadow-2xl"
              >
                <div className="w-full h-full bg-white rounded-xl">
                  <div className="w-full image-cover rounded-t-md">
                    <GatsbyImage
                      image={featuredImg}
                      className="w-full max-w-full rounded-t-xl"
                      alt=""
                    />
                    <div className="float-right w-16 h-16 p-2 m-4 text-center rounded-full bg-primary-700 text-yellow">
                      <span className="font-sans text-base font-bold tracking-wide border-b border-yellow">
                        {' '}
                        {node.frontmatter.day}
                      </span>
                      <span className="block font-sans text-xs font-bold tracking-wide uppercase text-yellow">
                        {node.frontmatter.month}
                      </span>
                    </div>
                  </div>
                  <div className="px-4 py-8 bg-white rounded-b-xl">
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
        </div>
      </PageContent>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(posts)/" } }
    ) {
      edges {
        node {
          body
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
                gatsbyImageData(
                  formats: [AUTO, WEBP, AVIF]
                  width: 780
                  height: 420
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
    backgroundImage: file(name: { eq: "blog" }) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED)
      }
    }
  }
`
