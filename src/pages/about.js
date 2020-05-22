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
                      Hi, I'm Zubair and I currently live in Utica, NY. I
                      graduated in the Spring of 2019 from the University of
                      Rochester with a bachelor’s degree, majoring in Computer
                      Science and Economics.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      I’m passionate about web and software development. I’ve
                      been doing Web Development work for roughly 3 years now,
                      and I love it because it gives me the chance to solve
                      complicated problems and learn new things everyday. I have
                      a lot of experience working with many different
                      programming languages and frameworks, ranging from PHP, to
                      Python, to JavaScript.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      As a Full-Stack Web developer for{' '}
                      <a
                        href="https://www.trainor.com"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        TRAINOR Associates
                      </a>
                      , I mostly build web applications and other custom
                      software.
                    </p>
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Feel free to reach out via{' '}
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
                      for any inquiries. I look forward to working with you to
                      help meet all your web development/programming needs.
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
