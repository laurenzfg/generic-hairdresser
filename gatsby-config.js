/**
 * Template does legacy favicon (.ico at well known location).
 * We could improve this by including using gatsby-plugin-manifest.
 * Another nice feature would be automatic image processing using
 * gatsby-transformer-sharp and gatsby-plugin-sharp
 */

 /**
  * This would be the starting point to integrate nice image support:
  * https://www.gatsbyjs.com/docs/recipes/working-with-images/#optimizing-and-querying-images-in-post-frontmatter-with-gatsby-image
  */

module.exports = {
  siteMetadata: {
    title: `Generic Hairdresser`,
    description: `Homepage of the Generic Hairdresser`,
    author: `Generic Hairdresser mbH`,
    lang: `de`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-plugin-catch-links`,
  ],
}
