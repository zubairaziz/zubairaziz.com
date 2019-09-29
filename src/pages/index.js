import React from "react"
import Layout from "../layouts/home-layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import styled from "styled-components"
import Head from "../components/head"
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import TwitterIcon from "../../assets/icons/twitter.svg"
import LinkedInIcon from "../../assets/icons/linkedin.svg"
import { colors, screens } from "../styles/styles"

const HomeContainer = styled.div`
  min-height: 80vh;
  max-height: 99.5vh;
  padding: 1rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;

  .home-header {
    font-size: 3rem;
    margin: 0;
    padding: 0;
  }

  .home-navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      a {
        display: block;
        font-size: 3rem;
        padding: 1rem;
        text-transform: uppercase;
      }
    }
  }

  a {
    text-decoration: none;
    color: ${colors.teal.light};

    &:hover {
      color: $teal-normal;
      transition: all ease-in-out 0.35s;
    }
  }

  .social-links {
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    list-style-type: none;

    li {
      margin: 0 15px;
    }
  }

  .social-icon {
    display: block;
    max-width: 35px;
    height: auto;
    border-radius: 50%;
    animation: frame-glow 1s ease-in-out infinite alternate;

    path {
      fill: ${colors.teal.lighter};
      transition: all ease-in-out 0.35s;
    }

    &:hover {
      transform: translateY(-15px) scale(2.25) rotate(10deg);
      path {
        fill: $teal-normal;
      }
    }
    transition: all ease-in-out 0.5s;
  }
`

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
      <HomeContainer>
        <div>
          <h1 className="home-header">Zubair</h1>
          <ul className="social-links">
            <li>
              <OutboundLink
                target="_blank"
                rel="noreferrer noopener"
                href={data.site.siteMetadata.socialLinks.facebook}
              >
                <FacebookIcon className="social-icon" />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                rel="noreferrer noopener"
                href={data.site.siteMetadata.socialLinks.instagram}
              >
                <InstagramIcon className="social-icon" />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink target="_blank" rel="noreferrer noopener" href={data.site.siteMetadata.socialLinks.twitter}>
                <TwitterIcon className="social-icon" />
              </OutboundLink>
            </li>
            <li>
              <OutboundLink
                target="_blank"
                rel="noreferrer noopener"
                href={data.site.siteMetadata.socialLinks.linkedin}
              >
                <LinkedInIcon className="social-icon" />
              </OutboundLink>
            </li>
          </ul>
        </div>
        <div>
          <nav>
            <ul className="home-navigation">
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
      </HomeContainer>
    </Layout>
  )
}

export default HomePage
