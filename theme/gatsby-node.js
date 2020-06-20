const fs = require(`fs`);
const path = require(`path`);
const mkdirp = require(`mkdirp`);

const withDefaults = require(`./utils/default-options`);

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState();
  const { contentPath, assetPath } = withDefaults(themeOptions);

  const dirs = [
    path.join(program.directory, contentPath),
    path.join(program.directory, assetPath),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

// These templates are simply data-fetching wrappers that import components
const PostTemplate = require.resolve(`./src/templates/post`);
const PostsTemplate = require.resolve(`./src/templates/posts`);

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions;
  const { basePath } = withDefaults(themeOptions);

  const result = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
            body
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  // Create Posts and Post pages.
  const posts = result.data.allMdx.edges;

  // Create a page for each Post
  posts.forEach(({ node: post }, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1];
    const next = index === 0 ? null : posts[index - 1];
    const { slug } = post.frontmatter;
    createPage({
      path: slug,
      component: PostTemplate,
      context: {
        id: post.id,
        previousId: previous ? previous.node.id : undefined,
        nextId: next ? next.node.id : undefined,
      },
    });
  });

  // Create the Posts page
  createPage({
    path: basePath,
    component: PostsTemplate,
    context: {},
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `slug`,
      node,
    });
  }
};
