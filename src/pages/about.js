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
              <div className="grid mt-4 place-content-center">
                <a
                  href="../../content/assets/Zubair_Aziz_Resume.pdf"
                  download
                  className="flex px-4 py-3 text-white bg-red-600 rounded-md hover:bg-red-800"
                >
                  <svg
                    className="w-4 h-auto mr-3"
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.68437 8.00313C5.52812 7.50313 5.53125 6.5375 5.62187 6.5375C5.88437 6.5375 5.85937 7.69063 5.68437 8.00313ZM5.63125 9.47812C5.39062 10.1094 5.09063 10.8313 4.74375 11.4375C5.31563 11.2188 5.9625 10.9 6.70937 10.7531C6.3125 10.4531 5.93125 10.0219 5.63125 9.47812ZM2.69062 13.3781C2.69062 13.4031 3.10312 13.2094 3.78125 12.1219C3.57188 12.3187 2.87187 12.8875 2.69062 13.3781ZM7.75 5H12V15.25C12 15.6656 11.6656 16 11.25 16H0.75C0.334375 16 0 15.6656 0 15.25V0.75C0 0.334375 0.334375 0 0.75 0H7V4.25C7 4.6625 7.3375 5 7.75 5ZM7.5 10.3687C6.875 9.9875 6.45938 9.4625 6.16563 8.6875C6.30625 8.10938 6.52813 7.23125 6.35938 6.68125C6.2125 5.7625 5.03437 5.85312 4.86562 6.46875C4.70937 7.04062 4.85313 7.84687 5.11875 8.875C4.75625 9.7375 4.22188 10.8937 3.84375 11.5562C3.84062 11.5562 3.84063 11.5594 3.8375 11.5594C2.99063 11.9937 1.5375 12.95 2.13438 13.6844C2.30938 13.9 2.63438 13.9969 2.80625 13.9969C3.36563 13.9969 3.92187 13.4344 4.71562 12.0656C5.52187 11.8 6.40625 11.4687 7.18437 11.3406C7.8625 11.7094 8.65625 11.95 9.18437 11.95C10.0969 11.95 10.1594 10.95 9.8 10.5938C9.36563 10.1687 8.10312 10.2906 7.5 10.3687V10.3687ZM11.7812 3.28125L8.71875 0.21875C8.57812 0.078125 8.3875 0 8.1875 0H8V4H12V3.80938C12 3.6125 11.9219 3.42188 11.7812 3.28125ZM9.46562 11.2594C9.59375 11.175 9.3875 10.8875 8.12813 10.9781C9.2875 11.4719 9.46562 11.2594 9.46562 11.2594Z"
                      fill="white"
                    />
                  </svg>

                  <span>Download Resume</span>
                </a>
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
