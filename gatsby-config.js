/**
 * Template currently has no favicon support. We could do this by including using
 * gatsby-plugin-manifest or just including a favicon .ico
 * Another nice feature would be automatic image processing using
 * gatsby-transformer-sharp and gatsby-plugin-sharp
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
  ],
}
