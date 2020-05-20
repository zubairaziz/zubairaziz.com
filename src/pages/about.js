import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const imageData = data.backgroundImage.childImageSharp.fluid

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PageHeader pageTitle={`About Me`} imageData={imageData} />
        <Container>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6 py-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <Image
                      fluid={data.avatar.childImageSharp.fluid}
                      alt="Zubair Aziz"
                      style={{
                        minWidth: 200,
                      }}
                      className="mb-0 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Zubair Aziz
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
                  Los Angeles, California
                </div>
                <div className="mb-2 text-gray-700 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                  Full Stack Developer - TRAINOR Associates
                </div>
                <div className="mb-2 text-gray-700">
                  <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                  University of Rochester '19
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet accusantium, consectetur corporis vel nulla vitae,
                      mollitia odio minus voluptas id molestiae veritatis
                      consequatur, placeat illum suscipit quibusdam nam
                      necessitatibus nostrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
