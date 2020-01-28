import React from "react"
import Layout from "../layouts/main-layout"
import { graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      _rawBody
      publishedAt(formatString: "MMMM Do, YYYY")
      readingTimeInMinutes
      excerpt
      mainImage {
        asset {
          fluid(maxWidth: 500) {
            src
          }
        }
      }
      author {
        name
        image {
          asset {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  }
  return (
    <Layout>
      <Head pageTitle={props.data.sanityPost.title} />
      <img src={props.data.sanityPost.mainImage.asset.fluid.src} alt={`${props.data.sanityPost.title} Main Image`} />
      <h1>{props.data.sanityPost.title}</h1>
      <p>
        <small>{props.data.sanityPost.publishedAt}</small>
      </p>
      <BlockContent blocks={props.data.sanityPost._rawBody} serializers={serializers} />
      {/* {documentToReactComponents(props.data.sanityPost._rawBody, options)} */}
      {/* <div dangerouslySetInnerHTML={{ __html: props.data.body }}></div> */}
    </Layout>
  )
}

export default Blog
