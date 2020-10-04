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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
     {
       resolve: `gatsby-plugin-prefetch-google-fonts`,
       options: {
         fonts: [
           {
             family: `Raleway`,
             variants: [`400`, `700`],
           },
           {
             family: `Montserrat`,
           },
         ],
       },
     },
  ],
}
