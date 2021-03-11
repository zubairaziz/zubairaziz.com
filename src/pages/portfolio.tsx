import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReactTooltip from 'react-tooltip'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

import HTML from '../icons/icon-html-5.svg'
import CSS from '../icons/icon-css3.svg'
import Java from '../icons/icon-java.svg'
import JavaScript from '../icons/icon-javascript.svg'
import TypeScript from '../icons/icon-typescript.svg'
import PHP from '../icons/icon-php.svg'
import Python from '../icons/icon-python.svg'
import SCSS from '../icons/icon-sass.svg'
import NPM from '../icons/icon-npm.svg'
import Yarn from '../icons/icon-yarn.svg'
import WebPack from '../icons/icon-webpack.svg'
import ReactLogo from '../icons/icon-react.svg'
import MongoDB from '../icons/icon-mongodb.svg'
import MySQL from '../icons/icon-mysql.svg'
import Gatsby from '../icons/icon-gatsby.svg'
import Apache from '../icons/icon-apache.svg'
import Git from '../icons/icon-git.svg'
import NGINX from '../icons/icon-nginx.svg'
import Silverstripe from '../icons/icon-silverstripe.svg'
import PostgreSQL from '../icons/icon-postgres.svg'
import PostCSS from '../icons/icon-postcss.svg'
import TailwindCSS from '../icons/icon-tailwind.svg'
import NextJS from '../icons/icon-nextjs.svg'
import Svelte from '../icons/icon-svelte.svg'
import Wordpress from '../icons/icon-wordpress.svg'
import Bulma from '../icons/icon-bulma.svg'
import MDX from '../icons/icon-mdx.svg'
import PageContent from '../components/PageContent'

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
  const { data } = props
  const imageData = data.backgroundImage.childImageSharp.gatsbyImageData
  const sites = data.allMdx.edges

  const [ref, inView, entry] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const techIcons = {
    HTML: <HTML />,
    CSS: <CSS />,
    Java: <Java />,
    JavaScript: <JavaScript />,
    TypeScript: <TypeScript />,
    PHP: <PHP />,
    Python: <Python />,
    SCSS: <SCSS />,
    NPM: <NPM />,
    Yarn: <Yarn />,
    Webpack: <WebPack />,
    React: <ReactLogo />,
    MongoDB: <MongoDB />,
    MySQL: <MySQL />,
    Gatsby: <Gatsby />,
    Apache: <Apache />,
    Git: <Git />,
    NGINX: <NGINX />,
    Silverstripe: <Silverstripe />,
    PostgreSQL: <PostgreSQL />,
    PostCSS: <PostCSS />,
    TailwindCSS: <TailwindCSS />,
    NextJS: <NextJS />,
    Svelte: <Svelte />,
    Wordpress: <Wordpress />,
    Bulma: <Bulma />,
    MDX: <MDX />,
  }

  return (
    <Layout>
      <ReactTooltip />
      <SEO title="Portfolio" />
      <PageHeader pageTitle={`Portfolio`} imageData={imageData} />
      <PageContent>
        <Card>
          <h2>Websites</h2>
          <motion.ol
            className="grid grid-cols-1 gap-2 m-5 mb-10 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3"
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
                    className="block w-full h-full no-underline"
                  >
                    <div className="flex flex-col flex-1 h-full transition-shadow duration-300 ease-in-out shadow-md rounded-xl hover:shadow-2xl bg-primary-600">
                      <GatsbyImage
                        image={featuredImgFluid}
                        className="rounded-t-xl md:h-48 xl:h-64"
                        imgStyle={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        alt=""
                      />
                      <div className="p-4 text-gray-200 no-underline bg-primary-600 rounded-b-xl">
                        <div className="text-xl font-semibold no-underline text-yellow">
                          {title}
                        </div>
                        <div className="py-1 leading-tight no-underline">
                          {summary}
                        </div>
                        <ul className="flex flex-wrap py-4 pt-3">
                          {technologies.map((technology, index) => (
                            <li
                              className="grid w-10 h-10 mr-3 bg-white rounded-full place-content-center"
                              key={index}
                              data-tip={technology}
                            >
                              <div className="flex w-5 h-5 place-content-center svg-holder">
                                {techIcons[technology]}
                              </div>
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
      </PageContent>
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
      filter: { fileAbsolutePath: { regex: "/(projects)/" } }
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
