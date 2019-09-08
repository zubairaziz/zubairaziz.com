import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "../styles/modules/navigation.module.scss"

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
        <div className={headerStyles.navigation}>
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
        </div>
      </div>
    </header>
  )
}

export default Header
