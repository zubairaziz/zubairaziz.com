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

      background-color: ${colors.dark.darker};
      border: 3px solid ${colors.teal.normal};
      /* box-shadow: 0px 0px 3px 3px ${colors.teal.lighter}; */
      animation: frame-glow 1s ease-in-out infinite alternate;
      padding: 1rem;
      border-radius: 5px;
    }
  }
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            title
            date(formatString: "MMMM Do, YYYY")
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
          {data.allContentfulBlogPost.edges.map(edge => (
            <li>
              <Link to={`blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>
                  <small>{edge.node.date}</small>
                </p>
                <p>
                  <strong>Read this blog post</strong>
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </BlogHolder>
    </Layout>
  )
}

export default BlogPage
