import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import footerStyles from "../styles/modules/footer.module.scss"
import FacebookIcon from "../../assets/icons/facebook.svg"
import InstagramIcon from "../../assets/icons/instagram.svg"
import TwitterIcon from "../../assets/icons/twitter.svg"
import LinkedInIcon from "../../assets/icons/linkedin.svg"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          socialLinks {
            facebook
            twitter
            instagram
            github
            email
          }
        }
      }
    }
  `)
  return (
    <footer>
      <div className="container">
        <div className={footerStyles.footer}>
          <p>{data.site.siteMetadata.author} &copy; 2019</p>
          <ul className={footerStyles.socialLinks}>
            <li>
              <Link>
                <FacebookIcon className={footerStyles.socialIcon} />
              </Link>
            </li>
            <li>
              <Link>
                <InstagramIcon className={footerStyles.socialIcon} />
              </Link>
            </li>
            <li>
              <Link>
                <TwitterIcon className={footerStyles.socialIcon} />
              </Link>
            </li>
            <li>
              <Link>
                <LinkedInIcon className={footerStyles.socialIcon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
