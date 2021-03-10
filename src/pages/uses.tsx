import React from 'react'
import { graphql } from 'gatsby'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

import VSCode from '../icons/icon-vscode.svg'
import Vim from '../icons/icon-vim.svg'
import Figma from '../icons/icon-figma.svg'
import Sketch from '../icons/icon-sketch.svg'
import Firefox from '../icons/icon-firefox.svg'
import Chrome from '../icons/icon-chrome.svg'
import Safari from '../icons/icon-safari.svg'
import Photoshop from '../icons/icon-photoshop.svg'
import HTML from '../icons/icon-html-5.svg'
import CSS from '../icons/icon-css3.svg'
import Java from '../icons/icon-java.svg'
import JavaScript from '../icons/icon-javascript.svg'
import TypeScript from '../icons/icon-typescript.svg'
import PHP from '../icons/icon-php.svg'
import Python from '../icons/icon-python.svg'
import SCSS from '../icons/icon-sass.svg'
import NPM from '../icons/icon-npm.svg'
import Yarn from '../icons/icon-yarn.svg'
import WebPack from '../icons/icon-webpack.svg'
import ReactLogo from '../icons/icon-react.svg'
import MongoDB from '../icons/icon-mongodb.svg'
import MySQL from '../icons/icon-mysql.svg'
import Gatsby from '../icons/icon-gatsby.svg'
import Apache from '../icons/icon-apache.svg'
import Git from '../icons/icon-git.svg'
import NGINX from '../icons/icon-nginx.svg'
import Silverstripe from '../icons/icon-silverstripe.svg'
import PostgreSQL from '../icons/icon-postgres.svg'
import PostCSS from '../icons/icon-postcss.svg'
import TailwindCSS from '../icons/icon-tailwind.svg'
import NextJS from '../icons/icon-nextjs.svg'
import Svelte from '../icons/icon-svelte.svg'
import Wordpress from '../icons/icon-wordpress.svg'
import Shopify from '../icons/icon-shopify.svg'
import PageContent from '../components/PageContent'

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
  const imageData = data.backgroundImage.childImageSharp.gatsbyImageData

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
    { component: <Chrome />, title: 'Chrome' },
    { component: <Safari />, title: 'Safari' },
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
    { component: <Wordpress />, title: 'Wordpress' },
    { component: <Shopify />, title: 'Shopify' },
  ]

  return (
    <Layout>
      <SEO title="Uses" />
      <PageHeader pageTitle={`Uses`} imageData={imageData} />
      <PageContent>
        <Card>
          <h2>Hardware</h2>
          <ul>
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
              <ol>
                <li>ASUS VG245H - 24" FHD (1920x1080)</li>
                <li>Dell UltraSharp - 27" 4K HDR Monitor: UP2718Q</li>
              </ol>
            </li>
          </ul>
        </Card>
        <Card>
          <h2>Software</h2>
          <motion.ul
            className="grid grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-5"
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
          <h2>Programming Languages, Frameworks & Tools</h2>
          <motion.ul
            className="grid grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-5"
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
          <h2>Misc.</h2>
          <ul>
            <li>
              <h3>Code Editor</h3>
              <ul>
                <li>Theme: Synth Wave '84</li>
                <li>Font: Fira Code</li>
                <li>Analytics: WakaTime</li>
              </ul>
            </li>
            <li>
              <h3>Browser Extensions</h3>
              <ul>
                <li>Wappalyzer</li>
                <li>React Dev Tools</li>
                <li>Vue Dev Tools</li>
                <li>HTTPS Everywhere</li>
                <li>Cors Everywhere</li>
                <li>bitwarden</li>
                <li>Grammarly</li>
              </ul>
            </li>
            <li>
              <h3>Other Gear</h3>
              <ul>
                <li>Camera: Canon EOS Rebel T4i</li>
                <li>Record Player: AudioTechnica AT-LP60x</li>
              </ul>
            </li>
          </ul>
        </Card>
      </PageContent>
    </Layout>
  )
}

export default Uses

export const pageQuery = graphql`
  {
    backgroundImage: file(name: { eq: "tools" }) {
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: FULL_WIDTH)
      }
    }
  }
`
