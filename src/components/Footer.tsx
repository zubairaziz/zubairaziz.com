import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer = () => {
  return (
    <StaticQuery
      query={socialQuery}
      render={(data) => {
        const { social } = data.site.siteMetadata
        return (
          <footer className="pt-2 mt-8 bg-primary-800">
            <div className="container p-3 mx-auto">
              <div className="flex flex-col pt-5 pb-5 text-sm md:flex-row">
                <span className="md:flex-auto">
                  © {new Date().getFullYear()}, Zubair Aziz. Built with{' '}
                  <a href="https://www.gatsbyjs.org">Gatsby</a> and{' '}
                  <a href="https://tailwindcss.com/">TailwindCSS</a>
                </span>
                <div className="flex flex-row mt-2 md:flex-auto md:flex-row-reverse">
                  <a
                    href={`https://www.twitter.com/${social.twitter}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-6 mx-1"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="cursor-pointer fill-current text-primary-500 hover:text-primary-400"
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
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="cursor-pointer fill-current text-primary-500 hover:text-primary-400"
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
                  <a
                    href={`https://www.instagram.com/${social.instagram}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-6 mx-1"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="cursor-pointer fill-current text-primary-500 hover:text-primary-400"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM9.819 6.046c-1.038.049-1.96.287-2.723 1.047-.763.76-.998 1.682-1.05 2.724-.061 1.073-.061 4.29 0 5.363.049 1.042.287 1.964 1.05 2.724.762.76 1.682.998 2.723 1.05 1.073.061 4.29.061 5.362 0 1.041-.049 1.964-.287 2.723-1.05.76-.76.998-1.682 1.05-2.724.061-1.073.061-4.287 0-5.36-.049-1.042-.287-1.964-1.05-2.724-.76-.76-1.682-.998-2.723-1.05-1.073-.061-4.29-.061-5.362 0zm2.681.962c.975 0 3.07-.078 3.95.27a2.261 2.261 0 011.273 1.273c.35.882.269 2.974.269 3.949 0 .975.08 3.07-.27 3.95a2.261 2.261 0 01-1.273 1.273c-.882.35-2.974.269-3.949.269-.975 0-3.07.078-3.95-.27a2.261 2.261 0 01-1.273-1.273c-.35-.882-.269-2.974-.269-3.949 0-.975-.078-3.07.27-3.95A2.261 2.261 0 018.55 7.278c.882-.35 2.974-.269 3.949-.269zM12.5 9A3.494 3.494 0 009 12.5c0 1.937 1.563 3.5 3.5 3.5s3.5-1.563 3.5-3.5S14.437 9 12.5 9zM16 8a1 1 0 100 2 1 1 0 000-2z"
                        fill="currentColor"
                        fillRule="nonzero"
                      />
                    </svg>
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
          instagram
        }
      }
    }
  }
`

export default Footer
