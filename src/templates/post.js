import React, { useEffect } from "react";

import {
  Layout,
  UnsplashBadge,
  BlogPostMetadata,
  PopularPostColumn,
} from "../components/";

import { transformPostQueryData, getImageWithSize } from "../utils";

export default (props) => {
  const postHTML = props.data.markdownRemark.html;
  const postInfo = props.data.markdownRemark.frontmatter;
  const allPosts = transformPostQueryData(
    props.data.allMarkdownRemark.edges
  ).filter((post) => !post.hidden);
  const featuredPostList = allPosts.filter((post) => post.featured === true);

  useEffect(() => {
    document.title = postInfo.title + " | Winter Hearth Studios";
  }, [postInfo.title]);

  return (
    <Layout>
      <title>{postInfo.title}</title>

      <section className="post-content-area single-post-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="feature-img">
                    <img
                      className="img-fluid lazyload"
                      style={{ borderRadius: 4, marginTop: "3%" }}
                      src={getImageWithSize(postInfo.imageUrl, "600p")}
                      alt={postInfo.imageAltText}
                    />
                    {postInfo.unsplashBadgeInfo &&
                      postInfo.unsplashBadgeInfo.artistName !== "" && (
                        <UnsplashBadge
                          artistName={postInfo.unsplashBadgeInfo.artistName}
                          artistURL={postInfo.unsplashBadgeInfo.artistUrl}
                        />
                      )}
                  </div>
                </div>

                <BlogPostMetadata
                  tags={postInfo.tags}
                  author={postInfo.author.name}
                  date={postInfo.date}
                />

                <div
                  className="col-lg-11 col-md-11"
                  style={{ fontFamily: "Georgia, Cambria, Cochin, serif" }}
                >
                  <h1 className="mt-30 mb-10">{postInfo.title}</h1>

                  <div
                    id="markdown-content"
                    style={{ lineHeight: "1.5rem" }}
                    dangerouslySetInnerHTML={{ __html: postHTML }}
                  />

                  <p style={{ padding: "5% 0 12px 0" }}>
                    Thanks so much for reading— I hope you enjoyed this piece
                    and took something away to make your life more meaningful
                    and fulfilling. You can subscribe below to be notified about
                    future posts from
                    <a href="https://winterhearth.co"> winterhearth.co</a> like
                    this one!
                  </p>
                  <a
                    style={{ fontFamily: "Poppins, sans-serif" }}
                    href="#wh-signup"
                    className="primary-btn text-uppercase"
                  >
                    Join the Squad
                  </a>
                </div>
              </div>
            </div>
            <PopularPostColumn postInfo={postInfo} posts={featuredPostList} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostInfo
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          ...PostInfo
        }
      }
    }
  }
`;
