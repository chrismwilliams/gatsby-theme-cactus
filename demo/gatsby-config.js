/* 
** Your probably going to want to override a few settings in here, such as the siteMetadata and the manifest settings ** 
Any options added to gatsby-theme-cactus will be directly passed to gatsby-theme-blog-core
*/

require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    lang: `en-GB`
  },
  plugins: [
    {
      resolve: "@chrismwilliams/gatsby-theme-cactus",
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID // create an env file with this key and your analytics id
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-theme-cactus`,
        short_name: `gatsby-theme-cactus`,
        start_url: `/`,
        background_color: `#1d1f21`,
        theme_color: `#2bbc8a`,
        display: `standalone`,
        icon: `content/assets/logo.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
};
