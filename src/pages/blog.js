import React from "react"
import Layout from "../layouts/main-layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { colors, screens } from "../styles/styles"
import Head from "../components/head"

const BlogHolder = styled.div`
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    margin: 1rem 0;
    grid-template-columns: repeat(1, 1fr);
    text-align: center;

    @media only screen and (min-width: ${screens.sm}) {
      grid-template-columns: repeat(2, 1fr);
      text-align: left;
    }
    @media only screen and (min-width: ${screens.md}) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media only screen and (min-width: ${screens.lg}) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (min-width: ${screens.xl}) {
      grid-row-gap: 20px;
      grid-column-gap: 20px;
    }
    li {
      border: 3px solid ${colors.teal.normal};
      animation: frame-glow 1s ease-in-out infinite alternate;
      padding: 0;
      border-radius: 5px;

      figure {
        height: 150px;
        background-color: var(--teal-lighter);
        margin: 0;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        &::after {
          background-color: var(--teal-light);
          content: "";
          height: 100%;
          width: 100%;
          z-index: 2;
          position: absolute;
          opacity: 0.6;
          filter: blur(5px);
        }
      }

      div {
        background-color: var(--dark-darker);
        padding: 0 1.25rem;
        margin: 0;
      }
      a {
        text-decoration: none;
      }
    }
  }
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(sort: { fields: publishedAt, order: DESC }) {
        edges {
          node {
            slug {
              current
            }
            title
            publishedAt(formatString: "MM-D-YYYY")
            mainImage {
              asset {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head pageTitle="Blog" />
      <h1>Blog Page</h1>
      <BlogHolder>
        <ol>
          {data.allSanityPost.edges.map(edge => (
            <li>
              <Link to={`blog/${edge.node.slug.current}`}>
                <figure>
                  <img src={edge.node.mainImage.asset.fluid.src} alt="" />
                </figure>
              </Link>
              <div>
                <Link to={`blog/${edge.node.slug.current}`}>
                  <h2>{edge.node.title}</h2>
                  <p>
                    <small>Published: {edge.node.publishedAt}</small>
                  </p>
                  <p>
                    <strong>Read this blog post &raquo;</strong>
                  </p>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </BlogHolder>
    </Layout>
  )
}

export default BlogPage
