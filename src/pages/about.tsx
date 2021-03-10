import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'
import PageContent from '../components/PageContent'

const AboutPage = (props) => {
  const { data } = props
  const imageData = data.backgroundImage.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <SEO title="About" description={null} />
      <PageHeader pageTitle={`About Me`} imageData={imageData} />
      <PageContent>
        <Card>
          <div className="px-6 py-4">
            <div className="flex flex-wrap justify-center">
              <div className="flex justify-center w-full px-4 lg:w-3/12 lg:order-2">
                <div className="relative">
                  <GatsbyImage
                    image={data.avatar.childImageSharp.gatsbyImageData}
                    alt="Zubair Aziz"
                    style={{
                      minWidth: 200,
                    }}
                    className="max-w-xs mb-0 rounded-full"
                    imgClassName="rounded-full"
                    imgStyle={{ borderRadius: '50%' }}
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
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
                  href="../../content/documents/Zubair_Aziz_Resume.pdf"
                  download
                  className="flex px-4 py-3 text-white bg-red-600 rounded-md group hover:bg-red-800"
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
                  <span className="text-white no-underline">
                    Download Resume
                  </span>
                </a>
              </div>
            </div>
            <div className="py-10 mt-10 border-t border-gray-300">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 lg:w-9/12 richtext">
                  <p>
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
                  <p>
                    I’ve been doing Web Development for about three years now
                    and continue to work towards mastering my craft. I have a
                    multitude of experience in programming languages and
                    frameworks, ranging from PHP, Python, and JavaScript. My
                    passion for problem solving fuels the love I have for my
                    work.
                  </p>
                  <p>
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
      </PageContent>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(name: { eq: "about" }) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
      }
    }
    avatar: file(absolutePath: { regex: "/about-headshot.jpg/" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          width: 500
          layout: CONSTRAINED
        )
      }
    }
  }
`
