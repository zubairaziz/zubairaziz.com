import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { linkifyAuthor } from '../utils/utils'

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const { author, social } = data.site.siteMetadata
  const [name, email] = linkifyAuthor(author)
  return (
    <div className="flex items-center p-6">
      <StaticImage
        src="../images/profile-pic.jpg"
        alt={author}
        style={{
          minWidth: 50,
        }}
        className="w-20 mb-0 rounded-full md:w-24"
      />
      <p className="pl-4 text-gray-800">
        Written by{' '}
        <strong>
          <a
            className="underline text-primary-500 hover:text-primary-600"
            href={`mailto:${email}`}
          >
            {name}
          </a>
        </strong>{' '}
        who lives and works in Utica, NY.
        {` `}
        <a
          className="underline text-primary-500 hover:text-primary-600"
          href={`https://twitter.com/${social.twitter}`}
        >
          You should follow him on Twitter
        </a>
      </p>
    </div>
  )
}

const bioQuery = graphql`
  query BioQuery {
    # file(absolutePath: { regex: "/profile-pic.jpg/" }) {
    #   childImageSharp {
    #     gatsbyImageData(
    #       formats: [AUTO, WEBP, AVIF]
    #       width: 50
    #       height: 50
    #       layout: FIXED
    #     )
    #   }
    # }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
