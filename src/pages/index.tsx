// If you don't want to use TypeScript you can delete this file!
import React from 'react'
import { PageProps, graphql, useStaticQuery } from 'gatsby'
import ReactRotatingText from 'react-rotating-text'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Card from '../components/Card'
import PageHeader from '../components/PageHeader'
import PageContent from '../components/PageContent'

const HomePage: React.FC<PageProps> = () => {
  const textArray = ['Web Developer', 'Programmer', 'Engineer', 'FOSS Advocate']
  const data = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "code" }) {
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Home" />
      <PageHeader imageData={data.file.childImageSharp.gatsbyImageData} />
      <PageContent isHomePage={true}>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <div className="relative lg:w-1/3">
            <StaticImage
              src="../images/profile-pic.jpg"
              alt="Zubair"
              width={500}
              height={500}
              className="border-4 border-white rounded-full"
            />
          </div>
          <div className="relative w-full p-4 md:w-2/3 lg:w-3/4 lg:px-8">
            <Card>
              <h1 className="text-2xl text-gray-600 md:text-4xl lg:text-7xl lg:tracking-wider">
                <ReactRotatingText items={textArray} />
              </h1>
            </Card>
          </div>
        </div>
      </PageContent>
    </Layout>
  )
}

export default HomePage
