const path = require(`path`);
const _ = require("lodash");

const { createFilePath } = require(`gatsby-source-filesystem`);
const { graphql } = require(`gatsby`);

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Creator {
      name: String!
      role: String!
      summary: String!
      imageUrl: String!
    }

    type UnsplashBadgeInfo {
      artistName: String
      artistUrl: String
    }

    type Frontmatter {
      host: Creator
      author: Creator
      contentType: String!
      description: String!
      featured: Boolean!
      hidden: Boolean
      imageAltText: String!
      imageUrl: String!
      keywords: String
      newsletterVolume: Int
      tags: [String!]!
      title: String!
      unsplashBadgeInfo: UnsplashBadgeInfo
      guests: [Creator!]
      anchorEpisodeUrl: String
      spotifyEpisodeUrl: String
      applePodcastEpisodeUrl: String
      googlePodcastEpisodeUrl: String
    }
  `;
  createTypes(typeDefs);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/tags.js");

  const result = await graphql(`
    query {
      postsRemark: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              contentType
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data.postsRemark.edges;
  posts.forEach(({ node }) => {
    let template;

    switch (node.frontmatter.contentType) {
      case "newsletter":
      case "blog":
      case "poetry":
        template = "./src/templates/post.js";
        break;
      case "game":
        template = "./src/templates/game.js";
        break;
      case "podcast":
        template = "./src/templates/podcast-episode.js";
        break;
      default:
        break;
    }

    createPage({
      path: node.fields.slug,
      component: path.resolve(template),
      context: {
        slug: node.fields.slug,
        // Data passed to context is available
        // in page queries as GraphQL variable on the props object called `pageContext`.
      },
    });
  });

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;
  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
