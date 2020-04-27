module.exports = {
  siteMetadata: {
    title: `Winter Hearth Studios`,
    author: {
      name: `Elgin Davis`,
      summary: `The creator and digital visionary of Winter Hearth Studios.`,
    },
    description: `Change the heart, change the world.`,
    siteUrl: `https://winterhearth.co/`,
    social: {
      twitter: `winterhearthco`,
    },
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/img/fav.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
