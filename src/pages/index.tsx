import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ReactRotatingText from 'react-rotating-text'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

const Index = (props) => {
  const textArray = ['Web Developer', 'Programmer', 'Engineer', 'FOSS Advocate']
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.backgroundImage.childImageSharp.gatsbyImageData

  console.log(imageData)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <PageHeader pageTitle={``} imageData={imageData} />
      <div className="relative -mt-64 lg:-mt-80">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
            <div
              data-sal="slide-right"
              data-sal-delay="0"
              data-sal-easing="ease-in-out-sine"
              className="relative lg:w-1/3"
            >
              <GatsbyImage
                image={data.avatar.childImageSharp.gatsbyImageData}
                alt="Zubair Aziz"
                style={{
                  minWidth: 300,
                }}
                width={840}
                height={840}
                className="w-full h-full mb-0 border-2 rounded-full shadow-xl lg:border-4"
              />
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="relative w-full p-4 lg:w-2/3 lg:px-8"
            >
              <Card>
                <h1 className="text-2xl text-gray-600 md:text-4xl lg:text-6xl lg:tracking-wider">
                  <ReactRotatingText items={textArray} />
                </h1>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(name: { eq: "code" }) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          width: 840
          height: 840
          layout: CONSTRAINED
        )
      }
    }
  }
`
