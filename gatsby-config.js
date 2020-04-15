module.exports = {
  siteMetadata: {
    title: `Currency Converter`,
    description: `A simple currency converter app`,
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
        name: `Currency Converter`,
        short_name: `Currency Converter`,
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
