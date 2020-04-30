const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    let template;

    switch (node.frontmatter.type) {
      case 'newsletter', 'blog':
        template = './src/templates/post.js';
        break;
      case 'game':
        template = './src/templates/game.js';
        break;
      case 'podcast':
        template = './src/templates/podcast-episode.js';
        break;
      default:
        break;
    }

    createPage({
      path: node.fields.slug,
      component: path.resolve(template),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variable on the props object called `pageContext`.
        slug: node.fields.slug,
      },
    });
  });
}
