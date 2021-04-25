const path = require(`path`)

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type MarkdownRemark implements Node { frontmatter: Frontmatter }`,
    `type Frontmatter {
      # you may need to adapt this line depending on the node type and key
      # that you want to create the relationship for
      title_image: File @link(by: "relativePath")
      sidebar_images: [AccessibleImage]
    }`,
    `type AccessibleImage {
      img: File @link(by: "relativePath")
      alt: String
    }`,
  ]
  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/default_page.js`),
    })
  })
}