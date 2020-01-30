require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = options => {
  return {
    siteMetadata: {
      title: `Gatsby Theme Cactus`,
      description: `Simple blog Gatsby Theme`,
      siteUrl: `https://gatsby.org`,
      author: `Chris Williams`,
      lang: `en`,
      social: [{ name: `GitHub`, url: `https://github.com/chrismwilliams` }]
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-theme-ui`,
      {
        resolve: `gatsby-theme-blog-core`,
        options
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: process.env.GOOGLE_ANALYTICS_ID // create an env file with this key and your analytics id
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `gatsby-theme-cactus`,
          short_name: `cactus`,
          start_url: `/`,
          background_color: `#1d1f21`,
          theme_color: `#2bbc8a`,
          display: `standalone`,
          icon: `content/assets/logo.png` // This path is relative to the root of the site.
        }
      },
      `gatsby-plugin-offline`
    ].filter(Boolean)
  };
};
