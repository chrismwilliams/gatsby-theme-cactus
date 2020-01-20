require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const OptionDefaults = {
  contentPath: `posts`,
  imagePath: `${__dirname}/src/images`,
  assetMaxWidth: 900,
  assetQuality: 100
};

module.exports = themeOptions => {
  const options = Object.assign({}, OptionDefaults, themeOptions);

  return {
    siteMetadata: {
      title: `Gatsby Theme Cactus`,
      description: `Simple blog Gatsby Theme`,
      author: `Chris Williams`
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-theme-ui`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: options.imagePath
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `content`,
          path: options.contentPath
        }
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: options.assetMaxWidth,
                quality: options.assetQuality,
                linksImagesToOriginal: false
              }
            }
          ]
        }
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
          icon: `src/images/icon.png` // This path is relative to the root of the site.
        }
      },
      `gatsby-plugin-offline`
    ]
  };
};
