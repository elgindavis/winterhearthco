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
    `gatsby-plugin-transition-link`,
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
        name: `Winter Hearth Studios`,
        short_name: `Winter Hearth`,
        start_url: `/`,
        background_color: `#ccc`,
        theme_color: `#222`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/img/fav.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NKXX7JM",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        dataLayerName: "dataLayer",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "page-view",
      },
    },
  ],
};
