import React from "react"
import Layout from "../layouts/main-layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogPageStyles from "../styles/modules/blog.module.scss"
import Head from "../components/head"
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
      <div className={blogPageStyles.blogList}>
        <ol>
          {data.allContentfulBlogPost.edges.map(edge => (
            <li>
              <Link to={`blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>
                  <small>{edge.node.date}</small>
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage
