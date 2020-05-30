import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

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
              <h2 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                Zubair Aziz
              </h2>
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
        {/* <Card>
          <section className="max-w-5xl mx-auto py-10">
            <h2 className="text-4xl text-center font-semibold leading-normal mb-2 text-gray-800 mb-2">
              Work History
            </h2>
            <div>
              <div className="flex flex-row">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                    <div className="text-3xl font-black text-gray-500">
                      Step 1
                    </div>
                    <div className="text-gray-500 text-sm">Idea</div>
                  </div>
                  <div className="h-full border-l-4 border-transparent">
                    <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed" />
                  </div>
                </div>
                <div className="flex-auto border rounded  border-gray-300">
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="flex-auto">
                      <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
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
                    <div className="md:w-96 w-full p-5">
                      <img
                        src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                        alt="step 1"
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-row">
                <div className="border-t-4 border-r-4 border-transparent">
                  <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full" />
                </div>
                <div className="border-t-4 border-transparent flex-auto">
                  <div className="h-16 border-b-4 border-gray-300 border-dashed" />
                </div>
                <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full" />
              </div>
              <div className="flex flex-row-reverse">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                    <div className="text-3xl font-black text-gray-500">
                      Step 2
                    </div>
                    <div className="text-gray-500 text-sm">Collaboration</div>
                  </div>
                  <div className="h-full border-r-4 border-transparent">
                    <div className="border-l-4 ml-4 h-full border-gray-300 border-dashed" />
                  </div>
                </div>
                <div className="flex-auto border rounded  border-gray-300">
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="flex-auto">
                      <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
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
                    <div className="md:w-96 w-full p-5">
                      <img
                        src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                        alt="step 2"
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-row-reverse">
                <div className="border-t-4 border-l-4 border-transparent">
                  <div className="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full" />
                </div>
                <div className="border-t-4 border-transparent flex-auto">
                  <div className="h-16 border-b-4 border-gray-300 border-dashed" />
                </div>
                <div className="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full" />
              </div>
              <div className="flex flex-row">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                    <div className="text-3xl font-black text-gray-500">
                      Step 3
                    </div>
                    <div className="text-gray-500 text-sm">Planification</div>
                  </div>
                  <div className="h-full border-l-4 border-transparent">
                    <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed" />
                  </div>
                </div>
                <div className="flex-auto border rounded  border-gray-300">
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="flex-auto">
                      <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
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
                    <div className="md:w-96 w-full p-5">
                      <img
                        src="https://image.flaticon.com/icons/svg/1330/1330216.svg"
                        alt="step 3"
                        className="object-scale-down"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-row">
                <div className="border-t-4 border-r-4 border-transparent">
                  <div className="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full" />
                </div>
                <div className="border-t-4 border-transparent flex-auto">
                  <div className="h-16 border-b-4 border-gray-300 border-dashed" />
                </div>
                <div className="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full" />
              </div>
              <div className="flex flex-row-reverse">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                    <div className="text-3xl font-black text-gray-500">
                      Step 4
                    </div>
                    <div className="text-gray-500 text-sm">Implementation</div>
                  </div>
                </div>
                <div className="flex-auto border rounded  border-gray-300">
                  <div className="flex md:flex-row flex-col items-center">
                    <div className="flex-auto">
                      <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
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
                    <div className="md:w-96 w-full p-5">
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
