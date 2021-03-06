import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { tw } from 'twind'

const Bio = () => {
  const data = useStaticQuery(bioQuery)
  const { author, social } = data.site.siteMetadata
  return (
    <div className={tw`flex items-center p-6`}>
      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author}
        style={{
          minWidth: 50,
        }}
        className={tw`mb-0 rounded-full`}
        imgClassName={tw`m-0 rounded-full`}
      />
      <p className={tw`pl-4 text-gray-800`}>
        Written by <strong>{author}</strong> who lives and works in Utica, NY.
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </div>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        gatsbyImageData(
          formats: [AUTO, WEBP, AVIF]
          width: 50
          height: 50
          layout: FIXED
        )
      }
    }
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
