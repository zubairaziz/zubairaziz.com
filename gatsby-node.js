const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: frontmatter___date }
          filter: { fileAbsolutePath: { regex: "/(posts)/" } }
          limit: 1000
        ) {
          edges {
            node {
              id
              body
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges

    posts.forEach((post, index, allPosts) => {
      const previous =
        index === posts.length - 1 ? null : allPosts[index + 1].node
      const next = index === 0 ? null : allPosts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx` && node.fileAbsolutePath.includes(`posts`)) {
    const value = createFilePath({
      node,
      getNode,
      basePath: `posts`,
      trailingSlash: true,
    })
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    })
  }
}
