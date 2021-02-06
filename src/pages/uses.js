import React from 'react'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
import TypeScript from '../../content/assets/icon-typescript.svg'
import PHP from '../../content/assets/icon-php.svg'
import Python from '../../content/assets/icon-python.svg'
import SCSS from '../../content/assets/icon-sass.svg'
import NPM from '../../content/assets/icon-npm.svg'
import Yarn from '../../content/assets/icon-yarn.svg'
import WebPack from '../../content/assets/icon-webpack.svg'
import ReactLogo from '../../content/assets/icon-react.svg'
import MongoDB from '../../content/assets/icon-mongodb.svg'
import MySQL from '../../content/assets/icon-mysql.svg'
import Gatsby from '../../content/assets/icon-gatsby.svg'
import Apache from '../../content/assets/icon-apache.svg'
import Git from '../../content/assets/icon-git.svg'
import NGINX from '../../content/assets/icon-nginx.svg'
import Silverstripe from '../../content/assets/icon-silverstripe.svg'
import PostgreSQL from '../../content/assets/icon-postgres.svg'
import PostCSS from '../../content/assets/icon-postcss.svg'
import TailwindCSS from '../../content/assets/icon-tailwind.svg'
import NextJS from '../../content/assets/icon-nextjs.svg'
import Svelte from '../../content/assets/icon-svelte.svg'

const listVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.01,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.01,
    },
  },
}

const listItemVariant = {
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: 'linear',
    },
  },
  hide: {
    opacity: 0,
    scale: 0.25,
    transition: {
      ease: 'linear',
    },
  },
}

const Uses = (props) => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const imageData = data.backgroundImage.childImageSharp.fluid

  const [ref1, inView1, entry1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [ref2, inView2, entry2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const softwareArray = [
    { component: <VSCode />, title: 'VS Code' },
    { component: <Vim />, title: 'Vim' },
    { component: <Sketch />, title: 'Sketch' },
    { component: <Figma />, title: 'Figma' },
    { component: <Photoshop />, title: 'Photoshop' },
    { component: <Firefox />, title: 'Firefox' },
  ]

  const programArray = [
    { component: <HTML />, title: 'HTML' },
    { component: <CSS />, title: 'CSS' },
    { component: <JavaScript />, title: 'JavaScript' },
    { component: <TypeScript />, title: 'TypeScript' },
    { component: <Java />, title: 'Java' },
    { component: <PHP />, title: 'PHP' },
    { component: <Python />, title: 'Python' },
    { component: <ReactLogo />, title: 'React/React Native' },
    { component: <Gatsby />, title: 'Gatsby' },
    { component: <NextJS />, title: 'Next.js' },
    { component: <Svelte />, title: 'Svelte' },
    { component: <SCSS />, title: 'SCSS' },
    { component: <PostCSS />, title: 'PostCSS' },
    { component: <TailwindCSS />, title: 'TailwindCSS' },
    { component: <NPM />, title: 'npm' },
    { component: <Yarn />, title: 'Yarn' },
    { component: <WebPack />, title: 'WebPack' },
    { component: <Silverstripe />, title: 'Silverstripe' },
    { component: <Apache />, title: 'Apache' },
    { component: <NGINX />, title: 'Nginx' },
    { component: <MySQL />, title: 'MySQL' },
    { component: <PostgreSQL />, title: 'PostgreSQL' },
    { component: <MongoDB />, title: 'MongoDB' },
    { component: <Git />, title: 'git' },
  ]

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
            className="p-4 list-disc"
          >
            <li>
              Daily Driver: MacBook Pro (13-inch, 2016), 3.3 GHz Dual-Core Intel
              Core i7, running MacOS Big Sur.
            </li>
            <li>
              Secondary: Asus Vivobook (14-inch ), AMD A9 Processor, running
              Linux Mint
            </li>
            <li>
              Monitors:{' '}
              <ol className="px-4 list-decimal">
                <li>ASUS VG245H - 24" FHD (1920x1080)</li>
                <li>Dell UltraSharp - 27" 4K HDR Monitor: UP2718Q</li>
              </ol>
            </li>
          </ul>
        </Card>
        <Card>
          <h2 className="text-xl md:text-2xl lg:text-4xl">Software</h2>
          <motion.ul
            className="grid grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-6"
            ref={ref1}
            animate={inView1 ? 'show' : 'hide'}
            variants={listVariant}
            initial={false}
          >
            {softwareArray.map((software, index) => (
              <motion.li
                className="flex flex-col items-center justify-end p-4 lg:p-8"
                key={`${index}-${software.title}`}
                variants={listItemVariant}
                initial={false}
              >
                {software.component}
                <span className="pt-4 font-semibold">{software.title}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Card>
        <Card>
          <h2 className="text-xl md:text-2xl lg:text-4xl">
            Programming Languages, Frameworks & Tools
          </h2>
          <motion.ul
            className="grid grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-6"
            ref={ref2}
            animate={inView2 ? 'show' : 'hide'}
            variants={listVariant}
            initial={false}
          >
            {programArray.map((program, index) => (
              <motion.li
                className="flex flex-col items-center justify-end p-4 lg:p-8"
                key={`${index}-${program.title}`}
                variants={listItemVariant}
                initial={false}
              >
                {program.component}
                <span className="pt-4 font-semibold">{program.title}</span>
              </motion.li>
            ))}
          </motion.ul>
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
                <li>Theme: Synth Wave '84</li>
                <li>Font: Fira Code</li>
                <li>Analytics: WakaTime</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg md:text-xl lg:text-2xl">
                Browser Extensions
              </h3>
              {` `}
              <ul className="px-4 list-disc">
                <li>Wappalyzer</li>
                <li>React Dev Tools</li>
                <li>Vue Dev Tools</li>
                <li>HTTPS Everywhere</li>
                <li>Cors Everywhere</li>
                <li>1Password</li>
                <li>Grammarly</li>
              </ul>
            </li>
            <li>
              <h3 className="text-lg md:text-xl lg:text-2xl">Other Gear</h3>
              {` `}
              <ul className="px-4 list-disc">
                <li>Camera: Canon EOS Rebel T4i</li>
                <li>Record Player: AudioTechnica AT-LP60x</li>
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
