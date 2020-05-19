import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer = () => {
  return (
    <StaticQuery
      query={socialQuery}
      render={(data) => {
        const { social } = data.site.siteMetadata
        return (
          <footer className="bg-gray-800 pt-2 mt-8">
            <div className="container p-3 mx-auto">
              <div className="pb-5 pt-5 text-sm flex flex-col md:flex-row">
                <span className="md:flex-auto">
                  © {new Date().getFullYear()}, Zubair Aziz. Built with{' '}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </span>
                <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                  <a
                    href={`https://www.twitter.com/${social.twitter}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-6 mx-1"
                  >
                    <svg
                      className="fill-current cursor-pointer text-gray-500 hover:text-gray-400"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                    >
                      <path
                        id="Twitter"
                        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.465-3.192a4.257 4.257 0 01-1.213.333c.436-.262.771-.676.929-1.169-.408.242-.86.418-1.341.513a2.111 2.111 0 00-3.599 1.926 5.998 5.998 0 01-4.352-2.206 2.108 2.108 0 00.654 2.818 2.09 2.09 0 01-.956-.264l-.001.027c0 1.023.728 1.877 1.694 2.07a2.084 2.084 0 01-.953.037 2.113 2.113 0 001.972 1.466 4.239 4.239 0 01-3.126.874 5.976 5.976 0 003.237.949c3.883 0 6.007-3.217 6.007-6.008 0-.091-.002-.183-.006-.273.413-.298.771-.67 1.054-1.093z"
                      />
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/${social.facebook}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-6 mx-1"
                  >
                    <svg
                      className="fill-current cursor-pointer text-gray-500 hover:text-gray-400"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                    >
                      <path
                        id="Facebook"
                        d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-11.278 0h1.294l.172-1.617h-1.466l.002-.808c0-.422.04-.648.646-.648h.809V7.311h-1.295c-1.555 0-2.103.784-2.103 2.102v.97h-.969V12h.969v4.689h1.941V12z"
                      />
                    </svg>{' '}
                  </a>
                </div>
              </div>
            </div>
          </footer>
        )
      }}
    />
  )
}

const socialQuery = graphql`
  query socialQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
          facebook
        }
      }
    }
  }
`

export default Footer
