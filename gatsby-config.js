/**
 * Template does legacy favicon (.ico at well known location).
 * We could improve this by including using gatsby-plugin-manifest.
 * Another nice feature would be automatic image processing using
 * gatsby-transformer-sharp and gatsby-plugin-sharp
 */

module.exports = {
  siteMetadata: {
    title: `Nolte Stiftung`,
    description: `Homepage der Heinrich und Anny Nolte Stiftung für die Förderung
      von Kunst und Kultur sowie der Jugend- und Altenhilfe`,
    author: `Heinrich und Anny Nolte Stiftung`,
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
