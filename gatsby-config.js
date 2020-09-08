module.exports = {
  siteMetadata: {
    defaultTitle: `Winter Hearth Studios`,
    title: `Winter Hearth Studios`,
    defaultImage: `/img/aubbie-knight.jpg`,
    image: `/img/aubbie-knight.jpg`,
    author: {
      name: `Elgin Davis`,
      summary: `The creator and digital visionary of Winter Hearth Studios.`,
    },
    defaultDescription: `Change the heart, change the world.`,
    description: `Change the heart, change the world.`,
    siteUrl: `https://winterhearth.co`,
    url: `https://winterhearth.co`,
    twitterUsername: `@winterhearthco`,
    social: {
      twitter: `@winterhearthco`,
    },
    anchorUrl: `https://anchor.fm/winter-hearth`,
    anchorSupportUrl: `https://anchor.fm/winter-hearth/support`,
    anchorMessageUrl: `https://anchor.fm/winter-hearth/message`,
    spotifyUrl: `https://open.spotify.com/show/6JUTQ9JX8t3AaqrktspjXr`,
    applePodcastsUrl: `https://podcasts.apple.com/us/podcast/more-human/id1521144381`,
    googlePodcastsUrl: `https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9kYjM5YWUwL3BvZGNhc3QvcnNz`,
    breakerUrl: `https://www.breaker.audio/more-human`,
    castboxUrl: `https://castbox.fm/channel/More-Human-id3069377`,
    overcastUrl: `https://overcast.fm/itunes1521144381/more-human`,
    pocketCastsUrl: `https://pca.st/u4o2ydjj`,
    radioPublicUrl: `https://radiopublic.com/more-human-WwRbJX`,
    podcastTwitterShareUrl: `https://twitter.com/intent/tweet?text=Listen%20to%20More%20Human%20on%20%E2%9A%93%20https://anchor.fm/winter-hearth`,
    podcastFacebookShareUrl: `https://www.facebook.com/dialog/share?app_id=446611785530020&href=https://anchor.fm/winter-hearth&redirect_uri=https://anchor.fm/winter-hearth`,
  },
  plugins: [
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-native-lazy-load`,
            options: {
              loading: "lazy", // "lazy" | "eager" | "auto"
            },
          },
        ],
      },
    },
  ],
};
