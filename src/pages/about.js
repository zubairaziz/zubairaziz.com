import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'
import Card from '../components/card'

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
          <Card>
            <div className="px-6 py-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease-in-out-sine"
                    className="relative"
                  >
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
              <div
                data-sal="slide-right"
                data-sal-delay="150"
                data-sal-easing="ease-in-out-sine"
                className="text-center mt-12"
              >
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                  Zubair Aziz
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
                  Utica, New York
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
              <div className="mt-10 py-10 border-t border-gray-300">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      I graduated with a bachelor's degree in Computer Science
                      and Economics from the University of Rochester. I
                      currently reside in Utica, NY and am currently employed at{' '}
                      <a
                        href="https://www.trainor.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        TRAINOR Associates
                      </a>{' '}
                      as a Full-Stack Web Developer building web applications
                      and other custom software. I look forwards to helping you
                      achieve your vision.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      I’ve been doing Web Development for about three years now
                      and continue to work towards mastering my craft. I have a
                      multitude of experience in programming languages and
                      frameworks, ranging from PHP, Python, and JavaScript. My
                      passion for problem solving fuels the love I have for my
                      work.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Let me help you solve any Web or Software problems you may
                      have. Feel free to reach me via{' '}
                      <a href="mailto:zubairabaziz@gmail.com" target="_blank">
                        email
                      </a>{' '}
                      or{' '}
                      <a
                        href="https://www.twitter.com/zbr_aziz"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        twitter
                      </a>{' '}
                      for any inquiries. I look forward to helping you meet all
                      your web development/programming needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
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
    avatar: file(absolutePath: { regex: "/about-headshot.jpg/" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
