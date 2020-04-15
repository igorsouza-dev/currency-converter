module.exports = {
  siteMetadata: {
    title: `Currency Exchanger`,
    description: `A simple currency exchanger app`,
    author: `@igorsouza-dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Currency Exchanger`,
        short_name: `Currency Exchanger`,
        start_url: `/`,
        background_color: `#4889A7`,
        theme_color: `#4889A7`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
