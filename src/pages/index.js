import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import ReactRotatingText from 'react-rotating-text'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'

const Index = (props) => {
  const textArray = [
    'Web Developer',
    'Programmer',
    'FOSS Advocate',
    'Coffee Connoisseur',
  ]
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.backgroundImage.childImageSharp.fluid

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <PageHeader pageTitle={``} imageData={imageData} />
      <div className="relative -mt-64 -mt-500px">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <div
              data-sal="slide-right"
              data-sal-delay="0"
              data-sal-easing="ease-in-out-sine"
              className="relative lg:w-1/3"
            >
              <Image
                fluid={data.avatar.childImageSharp.fluid}
                alt="Zubair Aziz"
                style={{
                  minWidth: 300,
                }}
                className="mb-0 border-2 lg:border-4 rounded-full w-full h-full shadow-xl"
              />
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="relative w-full lg:w-2/3 p-4 lg:px-8"
            >
              <div className="relative flex p-4 md:px-8 flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg text-gray-800">
                <h1 className="text-2xl md:text-4xl lg:text-6xl lg:tracking-wider">
                  <ReactRotatingText items={textArray} />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(relativePath: { eq: "code.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 700) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
