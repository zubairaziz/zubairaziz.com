const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/blog-post.js`)
  // const result = await graphql(`
  //   {
  //     allSanityPost(filter: { slug: { current: { ne: null } } }) {
  //       edges {
  //         node {
  //           title
  //           description
  //           tags
  //           launchDate(format: "DD.MM.YYYY")
  //           slug {
  //             current
  //           }
  //           image {
  //             asset {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (result.errors) {
  //   throw result.errors
  // }

  // const projects = result.data.allSanityProject.edges || []
  // projects.forEach((edge, index) => {
  //   const path = `/project/${edge.node.slug.current}`

  //   createPage({
  //     path,
  //     component: blogTemplate,
  //     context: { slug: edge.node.slug.current },
  //   })
  // })

  const res = await graphql(
    `
      query {
        allSanityPost(sort: { fields: [publishedAt], order: DESC }) {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `
  )

  res.data.allSanityPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `blog/${edge.node.slug.current}`,
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
