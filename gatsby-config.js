/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Régis Fontaine Portfolio",
    description: "Portfolio de Régis Fontaine, crée avec gatsby",
    author: "@regis-fontaine",
    twitterUsername: "@regis-fontaine",
    image: "/twitter-img.png",
    siteUrl: "https://regis-fontaine.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
     {
       resolve: `gatsby-plugin-google-fonts`,
       options: {
        fonts: [
          `Raleway`,
          `Monserrat\:400,700` // you can also specify font weights and styles
        ],
        display: 'swap'
       },
     },
     {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/"],
        excludePaths: [],
        color: "#ff0000"
      }
    }
  ],
}
