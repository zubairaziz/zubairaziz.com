import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../styles/modules/navigation.module.scss"
import styled from "styled-components"

const NavWrapper = styled.div`
  padding: 1.5rem 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    transition: all ease-in-out 0.35s;
    border: 2px solid transparent;

    &:hover {
      color: #6abedb;
      border-bottom: 2px solid #6abedb;
    }
  }

  nav {
    ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      justify-content: space-evenly;
      align-items: center;
      li {
        margin: 0 0.6rem;

        a {
          &.active {
            color: darken(#6abedb, 10);
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
    <header>
      <div className="container">
        <NavWrapper>
          <div>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/" activeClassName={headerStyles.active}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog" activeClassName={headerStyles.active}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName={headerStyles.active}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName={headerStyles.active}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </NavWrapper>
      </div>
    </header>
  )
}

export default Header
