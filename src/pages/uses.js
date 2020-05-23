import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'
import Container from '../components/container'
import Card from '../components/card'

import VSCode from '../../content/assets/icon-vscode.svg'
import Vim from '../../content/assets/icon-vim.svg'
import Figma from '../../content/assets/icon-figma.svg'
import Sketch from '../../content/assets/icon-sketch.svg'
import Firefox from '../../content/assets/icon-firefox.svg'
import Photoshop from '../../content/assets/icon-photoshop.svg'

import HTML from '../../content/assets/icon-html-5.svg'
import CSS from '../../content/assets/icon-css3.svg'
import Java from '../../content/assets/icon-java.svg'
import JavaScript from '../../content/assets/icon-javascript.svg'
import PHP from '../../content/assets/icon-php.svg'
import Python from '../../content/assets/icon-python.svg'
import SCSS from '../../content/assets/icon-sass.svg'
import NPM from '../../content/assets/icon-npm.svg'
import WebPack from '../../content/assets/icon-webpack.svg'
import ReactLogo from '../../content/assets/icon-react.svg'
import MongoDB from '../../content/assets/icon-mongodb.svg'
import MySQL from '../../content/assets/icon-mysql.svg'
import Gatsby from '../../content/assets/icon-gatsby.svg'
import Apache from '../../content/assets/icon-apache.svg'
import Git from '../../content/assets/icon-git.svg'
import NGINX from '../../content/assets/icon-nginx.svg'
import Silverstripe from '../../content/assets/icon-silverstripe.svg'

const Uses = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.backgroundImage.childImageSharp.fluid

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Uses" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <PageHeader pageTitle={`Uses`} imageData={imageData} />
      <Container>
        <Card>
          <h2 className="text-xl md:text-2xl lg:text-4xl">Hardware</h2>
          <ul
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-easing="ease-in-out-sine"
            className="list-disc p-4"
          >
            <li>
              Daily Driver: MacBook Pro (13-inch, 2016), 3.3 GHz Dual-Core Intel
              Core i7, running MacOS Catalina.
            </li>
            <li>
              Secondary: Asus Vivobook (14-inch ), AMD A9 Processor, running
              Linux Mint
            </li>
            <li>
              Monitors:{' '}
              <ol className="list-decimal px-4">
                <li></li>
                <li></li>
              </ol>
            </li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl md:text-2xl lg:text-4xl">Software</h2>
          <ul className="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <VSCode />
              <span className="pt-4 font-semibold">VS Code</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Vim />
              <span className="pt-4 font-semibold">Vim</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Sketch />
              <span className="pt-4 font-semibold">Sketch</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Figma />
              <span className="pt-4 font-semibold">Figma</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Photoshop />
              <span className="pt-4 font-semibold">Photoshop</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Firefox />
              <span className="pt-4 font-semibold">Firefox</span>
            </li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl md:text-2xl lg:text-4xl">
            Programming Languages, Frameworks & Tools
          </h2>
          <ul className="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <HTML />
              <span className="pt-4 font-semibold">HTML</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <CSS />
              <span className="pt-4 font-semibold">CSS</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <JavaScript />
              <span className="pt-4 font-semibold">JavaScript</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Java />
              <span className="pt-4 font-semibold">Java</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <PHP />
              <span className="pt-4 font-semibold">PHP</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Python />
              <span className="pt-4 font-semibold">Python</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <SCSS />
              <span className="pt-4 font-semibold">SCSS</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <NPM />
              <span className="pt-4 font-semibold">NPM</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <WebPack />
              <span className="pt-4 font-semibold">WebPack</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <ReactLogo />
              <span className="pt-4 font-semibold">React</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Gatsby />
              <span className="pt-4 font-semibold">Gatsby</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Silverstripe />
              <span className="pt-4 font-semibold">Silverstripe</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Apache />
              <span className="pt-4 font-semibold">Apache</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <NGINX />
              <span className="pt-4 font-semibold">NGINX</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <MySQL />
              <span className="pt-4 font-semibold">MySQL</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <MongoDB />
              <span className="pt-4 font-semibold">MongoDB</span>
            </li>
            <li
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-easing="ease-in-out-sine"
              className="flex flex-col justify-end items-center p-4 lg:p-8"
            >
              <Git />
              <span className="pt-4 font-semibold">Git</span>
            </li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl md:text-2xl lg:text-4xl">Misc.</h2>
          <ul
            data-sal="slide-up"
            data-sal-delay="150"
            data-sal-easing="ease-in-out-sine"
            className="p-4"
          >
            <li>
              <h3 className="text-lg md:text-xl lg:text-2xl">Code Editor</h3>
              {` `}
              <ul className="px-4 list-disc">
                <li></li>
              </ul>
            </li>
          </ul>
          <ul className="p-4">
            <li>
              <h3 className="text-lg md:text-xl lg:text-2xl">
                Browser Extensions
              </h3>
              {` `}
              <ul className="px-4 list-disc">
                <li></li>
              </ul>
            </li>
          </ul>
        </Card>
      </Container>
    </Layout>
  )
}

export default Uses

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    backgroundImage: file(relativePath: { eq: "tools.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
