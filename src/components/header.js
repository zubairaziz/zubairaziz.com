import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { colors, screens } from "../styles/styles"

const StyledHeader = styled.header`
  border-top: 3px solid ${colors.teal.normal};
  background-color: ${colors.dark.darker};
  width: 100%;
  position: fixed;
  height: 55px;

  @media only screen and (min-width: ${screens.sm}) {
    height: 75px;
  }

  &::before {
    content: "";
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    width: 100%;
    height: 100%;
    filter: blur(10px);
    z-index: -1;
  }

  .container {
    .nav-wrapper {
      /* padding: 1.5rem 0.5rem 2rem; */
      padding: 1rem;
      display: block;
      justify-content: space-between;
      align-items: center;
      @media only screen and (min-width: ${screens.md}) {
        display: flex;
      }

      .site-title {
        display: none;
        visibility: hidden;
        @media only screen and (min-width: ${screens.md}) {
          display: block;
        }
      }

      nav {
        margin: 0;
        padding: 0;
        ul {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
          justify-content: space-evenly;
          align-items: center;
          li {
            margin: 0 0.6rem;

            a {
              text-decoration: none;
              text-transform: uppercase;
              color: ${colors.teal.normal};
              transition: all ease-in-out 0.35s;
              border: 2px solid transparent;
              &.active {
                color: ${colors.teal.normal};
                position: relative;
                &:before {
                  content: "";
                  display: block;
                  height: 25px;
                  width: 3px;
                  background-color: ${colors.teal.normal};
                  position: absolute;
                  top: 0;
                  bottom: 0;
                  left: -10px;
                }
              }
              &:hover {
                color: ${colors.teal.lighter};
                border-bottom: 2px solid ${colors.teal.lighter};
              }
            }
          }
        }
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <StyledHeader>
      <div className="container">
        <div className="nav-wrapper">
          <div>
            <Link className="site-title" to="/">
              {data.site.siteMetadata.title}
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName="active">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName="active">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header
