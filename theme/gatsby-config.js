module.exports = options => ({
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.contentPath || `${__dirname}/src/posts`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`
  ]
});
