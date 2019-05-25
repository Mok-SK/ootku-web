module.exports = {
  siteMetadata: {
    title: `Out of the known universe`,
    description: `Out of the known universe graphic novel`,
    author: `Ivan Ruttkay-Nedecký`,
    keywords: [`novel`, `comics`, `sci-fi`]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/img-pages`,
    //     name: "markdown-pages",
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/strips`,
      },
    },    
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 95,
        stripMetadata: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Out of the known universe`,
        start_url: `/`,
        background_color: `#e82b75`,
        theme_color: `#e82b75`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-yaml`,
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
