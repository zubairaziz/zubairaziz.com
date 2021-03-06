import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Container from '../components/Container'
import Grid from '../components/Grid'
import Card from '../components/Card'

const listVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.01,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.01,
    },
  },
}

const listItemVariant = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'linear',
    },
  },
  hide: {
    opacity: 0,
    scale: 0.25,
    transition: {
      ease: 'linear',
    },
  },
}

const Portfolio = (props) => {
  const { data, location } = props
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.backgroundImage.childImageSharp.gatsbyImageData
  const sites = data.allMdx.edges

  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Portfolio"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <PageHeader pageTitle={`Portfolio`} imageData={imageData} />
      <Container>
        <Card>
          <h2 className="text-xl md:text-2xl lg:text-4xl">Websites</h2>
          <motion.ol
            className="grid grid-cols-1 gap-2 m-5 mb-10 md:gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3"
            ref={ref}
            animate={inView ? 'show' : 'hide'}
            variants={listVariant}
            initial={false}
          >
            {sites.map(({ node }, index) => {
              const title = node.frontmatter.title
              const summary = node.frontmatter.summary
              const technologies = node.frontmatter.technologies
              const featuredImgFluid =
                node.frontmatter.featuredImage.childImageSharp.gatsbyImageData
              return (
                <motion.li
                  key={`${index}-${title}`}
                  className="block"
                  variants={listItemVariant}
                  initial={false}
                >
                  <a
                    href={node.frontmatter.url}
                    target="_blank"
                    rel="noopener"
                    className="no-underline portfolio-list-item"
                  >
                    <div className="transition-shadow duration-300 ease-in-out shadow-md hover:shadow-2xl">
                      <GatsbyImage
                        image={featuredImgFluid}
                        className="rounded-t-md portfolio-image"
                        imgStyle={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                      <div className="p-4 text-gray-200 no-underline bg-primary-800 rounded-b-md">
                        <div className="text-xl font-semibold no-underline text-yellow">
                          {title}
                        </div>
                        <div className="py-1 leading-none no-underline">
                          {summary}
                        </div>
                        <ul className="px-4 pt-1 text-sm leading-none no-underline list-disc">
                          {technologies.map((technology, index) => (
                            <li className="no-underline" key={index}>
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
                </motion.li>
              )
            })}
          </motion.ol>
        </Card>
      </Container>
    </Layout>
  )
}

export default Portfolio

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(name: { eq: "developer" }) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
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
                gatsbyImageData(
                  formats: [AUTO, WEBP, AVIF]
                  width: 800
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`
