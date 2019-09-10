import React from "react"
import Layout from "../layouts/home-layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Head from "../components/head"
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import TwitterIcon from "../../assets/icons/twitter.svg"
import LinkedInIcon from "../../assets/icons/linkedin.svg"
import homeStyles from "../styles/modules/home.module.scss"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialLinks {
            facebook
            twitter
            instagram
            github
            stackoverflow
            linkedin
            email
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head pageTitle="Home" />
      <div className={homeStyles.homeContainer}>
        <div>
          <h1 className={homeStyles.homeHeader}>
            Zubair <span className="highlight">Aziz</span>
          </h1>
          <ul className={homeStyles.socialLinks}>
            <li>
              <OutboundLink
                target="_blank"
                rel="noreferrer noopener"
                href={data.site.siteMetadata.socialLinks.facebook}
              >
                <FacebookIcon className={homeStyles.socialIcon} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                rel="noreferrer noopener"
                href={data.site.siteMetadata.socialLinks.instagram}
              >
                <InstagramIcon className={homeStyles.socialIcon} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink target="_blank" rel="noreferrer noopener" href={data.site.siteMetadata.socialLinks.twitter}>
                <TwitterIcon className={homeStyles.socialIcon} />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                rel="noreferrer noopener"
                href={data.site.siteMetadata.socialLinks.linkedin}
              >
                <LinkedInIcon className={homeStyles.socialIcon} />
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div>
          <nav>
            <ul className={homeStyles.homeNavigation}>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
