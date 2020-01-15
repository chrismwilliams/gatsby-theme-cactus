const fs = require("fs");
const path = require("path");

// Make sure the posts directory exists
exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState();
  const contentPath = options.contentPath || "src/posts";
  const dir = path.join(program.directory, contentPath);
  if (!fs.existsSync(dir)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(dir);
  }
};

// Create the Archives and Blog pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const archivesTemplate = require.resolve(`./src/templates/archives.js`);
  const blogTemplate = require.resolve(`./src/templates/blog.js`);

  // create archive page
  createPage({
    path: `archives`,
    component: archivesTemplate
  });

  // create the blog pages
  const blogs = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (blogs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogTemplate,
      context: {}
    });
  });
};
