import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'
import Card from '../components/card'

const About = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.backgroundImage.childImageSharp.fluid

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <PageHeader pageTitle={`About Me`} imageData={imageData} />
      <Container>
        <Card>
          <div className="px-6 py-4">
            <div className="flex flex-wrap justify-center">
              <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                <div
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-easing="ease-in-out-sine"
                  className="relative"
                >
                  <Img
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
              className="mt-12 text-center"
            >
              <h2 className="mb-2 text-4xl font-semibold leading-normal text-gray-800">
                Zubair Aziz
              </h2>
              <div className="mt-0 mb-2 text-sm font-bold leading-normal text-gray-500 uppercase">
                <i className="mr-2 text-lg text-gray-500 fas fa-map-marker-alt"></i>{' '}
                Utica, New York
              </div>
              <div className="mt-10 mb-2 text-gray-700">
                <i className="mr-2 text-lg text-gray-500 fas fa-briefcase"></i>
                Full Stack Developer - TRAINOR Associates
              </div>
              <div className="mb-2 text-gray-700">
                <i className="mr-2 text-lg text-gray-500 fas fa-university"></i>
                University of Rochester '19
              </div>
            </div>
            <div className="py-10 mt-10 border-t border-gray-300">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 lg:w-9/12">
                  <p className="mb-4 text-lg leading-relaxed text-gray-800">
                    I graduated with a bachelor's degree in Computer Science and
                    Economics from the University of Rochester. I currently
                    reside in Utica, NY and am currently employed at{' '}
                    <a
                      href="https://www.trainor.com"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      TRAINOR Associates
                    </a>{' '}
                    as a Full-Stack Web Developer building web applications and
                    other custom software. I look forwards to helping you
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
                    <a href="mailto:zubairaziz.dev@gmail.com" target="_blank">
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
        {/* <Card>
          <section className="max-w-5xl py-10 mx-auto">
            <h2 className="mb-2 text-4xl font-semibold leading-normal text-center text-gray-800">
              Work History
            </h2>
            <div>
              <div className="flex flex-row">
                <div className="flex-col items-center hidden md:flex">
                  <div className="flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase border border-gray-300 rounded">
                    <div className="text-3xl font-black text-gray-500">
                      Step 1
                    </div>
                    <div className="text-sm text-gray-500">Idea</div>
                  </div>
                  <div className="h-full border-l-4 border-transparent">
                    <div className="h-full mr-4 border-l-4 border-gray-300 border-dashed" />
                  </div>
                </div>
                <div className="flex-auto border border-gray-300 rounded">
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex-auto">
                      <div className="pt-3 pl-3 text-sm font-normal text-gray-500 uppercase md:hidden">
                        <span className="font-black">Step 1</span> - Idea
                      </div>
                      <div className="p-3 text-3xl text-gray-800 font">
                        Find your best idea
                      </div>
                      <div className="px-3 pb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam facilis, voluptates error alias dolorem
                        praesentium sit soluta iure incidunt labore explicabo
                        eaque, quia architecto veritatis dolores, enim
                        consequatur nihil ipsum.
                      </div>
                    </div>
                    <div className="w-full p-5 md:w-96">
                      <img
                        src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                        alt="step 1"
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="border-t-4 border-r-4 border-transparent">
                  <div className="w-16 h-16 ml-16 border-b-4 border-l-4 border-gray-300 border-dashed rounded-bl-full" />
                </div>
                <div className="flex-auto border-t-4 border-transparent">
                  <div className="h-16 border-b-4 border-gray-300 border-dashed" />
                </div>
                <div className="w-16 h-16 mt-16 mr-16 border-t-4 border-r-4 border-gray-300 border-dashed rounded-tr-full" />
              </div>
              <div className="flex flex-row-reverse">
                <div className="flex-col items-center hidden md:flex">
                  <div className="flex flex-col items-center justify-center w-32 py-5 ml-4 uppercase border border-gray-300 rounded">
                    <div className="text-3xl font-black text-gray-500">
                      Step 2
                    </div>
                    <div className="text-sm text-gray-500">Collaboration</div>
                  </div>
                  <div className="h-full border-r-4 border-transparent">
                    <div className="h-full ml-4 border-l-4 border-gray-300 border-dashed" />
                  </div>
                </div>
                <div className="flex-auto border border-gray-300 rounded">
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex-auto">
                      <div className="pt-3 pl-3 text-sm font-normal text-gray-500 uppercase md:hidden">
                        <span className="font-black">Step 2</span> -
                        Collaboration
                      </div>
                      <div className="p-3 text-3xl text-gray-800 font">
                        Find your team and collaborate
                      </div>
                      <div className="px-3 pb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam facilis, voluptates error alias dolorem
                        praesentium sit soluta iure incidunt labore explicabo
                        eaque, quia architecto veritatis dolores, enim
                        consequatur nihil ipsum.
                      </div>
                    </div>
                    <div className="w-full p-5 md:w-96">
                      <img
                        src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                        alt="step 2"
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse items-start">
                <div className="border-t-4 border-l-4 border-transparent">
                  <div className="w-16 h-16 mr-16 border-b-4 border-r-4 border-gray-300 border-dashed rounded-br-full" />
                </div>
                <div className="flex-auto border-t-4 border-transparent">
                  <div className="h-16 border-b-4 border-gray-300 border-dashed" />
                </div>
                <div className="w-16 h-16 mt-16 ml-16 border-t-4 border-l-4 border-gray-300 border-dashed rounded-tl-full" />
              </div>
              <div className="flex flex-row">
                <div className="flex-col items-center hidden md:flex">
                  <div className="flex flex-col items-center justify-center w-32 py-5 mr-4 uppercase border border-gray-300 rounded">
                    <div className="text-3xl font-black text-gray-500">
                      Step 3
                    </div>
                    <div className="text-sm text-gray-500">Planification</div>
                  </div>
                  <div className="h-full border-l-4 border-transparent">
                    <div className="h-full mr-4 border-l-4 border-gray-300 border-dashed" />
                  </div>
                </div>
                <div className="flex-auto border border-gray-300 rounded">
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex-auto">
                      <div className="pt-3 pl-3 text-sm font-normal text-gray-500 uppercase md:hidden">
                        <span className="font-black">Step 3</span> -
                        Planification
                      </div>
                      <div className="p-3 text-3xl text-gray-800 font">
                        Make a good plan and prepare tasks
                      </div>
                      <div className="px-3 pb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam facilis, voluptates error alias dolorem
                        praesentium sit soluta iure incidunt labore explicabo
                        eaque, quia architecto veritatis dolores, enim
                        consequatur nihil ipsum.
                      </div>
                    </div>
                    <div className="w-full p-5 md:w-96">
                      <img
                        src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                        alt="step 3"
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="border-t-4 border-r-4 border-transparent">
                  <div className="w-16 h-16 ml-16 border-b-4 border-l-4 border-gray-300 border-dashed rounded-bl-full" />
                </div>
                <div className="flex-auto border-t-4 border-transparent">
                  <div className="h-16 border-b-4 border-gray-300 border-dashed" />
                </div>
                <div className="w-16 h-16 mt-16 mr-16 border-t-4 border-r-4 border-gray-300 border-dashed rounded-tr-full" />
              </div>
              <div className="flex flex-row-reverse">
                <div className="flex-col items-center hidden md:flex">
                  <div className="flex flex-col items-center justify-center w-32 py-5 ml-4 uppercase border border-gray-300 rounded">
                    <div className="text-3xl font-black text-gray-500">
                      Step 4
                    </div>
                    <div className="text-sm text-gray-500">Implementation</div>
                  </div>
                </div>
                <div className="flex-auto border border-gray-300 rounded">
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="flex-auto">
                      <div className="pt-3 pl-3 text-sm font-normal text-gray-500 uppercase md:hidden">
                        <span className="font-black">Step 4</span> -
                        Implementation
                      </div>
                      <div className="p-3 text-3xl text-gray-800 font">
                        Execute, impletement your solution
                      </div>
                      <div className="px-3 pb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam facilis, voluptates error alias dolorem
                        praesentium sit soluta iure incidunt labore explicabo
                        eaque, quia architecto veritatis dolores, enim
                        consequatur nihil ipsum.
                      </div>
                    </div>
                    <div className="w-full p-5 md:w-96">
                      <img
                        src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                        alt="step 4"
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Card> */}
      </Container>
    </Layout>
  )
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
