import React, { useEffect } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { Layout, PopularPostColumn, BlogPostMetadata } from "../components";

import { transformPostQueryData, getImageWithSize } from "../utils";

const PodcastEmbed = styled.iframe`
  width: 100%;
  height: auto;
  padding: 12px 0;
`;

export default ({ data }) => {
  const episodeInfo = data.markdownRemark.frontmatter;

  const allEpisodes = transformPostQueryData(
    data.allMarkdownRemark.edges
  ).filter(
    (content) => content.contentType === "podcast" && content.hidden !== true
  );

  useEffect(() => {
    document.title = episodeInfo.title + " | Winter Hearth Studios";
  }, [episodeInfo.title]);

  return (
    <Layout>
      <section className="post-content-area single-post-area">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-7 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="feature-img">
                    <img
                      className="img-fluid lazyload"
                      style={{ borderRadius: 4, marginTop: 24, maxWidth: 500 }}
                      src={getImageWithSize(episodeInfo.imageUrl, "cover")}
                      alt={episodeInfo.imageAltText}
                    />
                  </div>
                </div>

                <BlogPostMetadata
                  tags={episodeInfo.tags}
                  author={episodeInfo?.author?.name}
                  host={episodeInfo?.host?.name}
                  date={episodeInfo.date}
                  guests={episodeInfo?.guests}
                />

                <div
                  className="col-lg-11 col-md-11"
                  style={{ fontFamily: "Georgia, Cambria, Cochin, serif" }}
                >
                  <h1 className="mt-30 mb-10">{episodeInfo.title}</h1>
                  <PodcastEmbed
                    src={episodeInfo.embedUrl}
                    title={episodeInfo.title}
                    width="100%"
                    frameborder="0"
                    scrolling="no"
                  />

                  {/* <div
                      id="markdown-content"
                      style={{ lineHeight: "1.5rem" }}
                      dangerouslySetInnerHTML={{ __html: episodeHTML }}
                    /> */}
                  <div style={{ paddingTop: 24 }}>
                    Visit the More Human Podcast{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://anchor.fm/winter-hearth"
                    >
                      over on Anchor
                    </a>{" "}
                    to leave questions, share your thoughts, and support the
                    podcast!
                  </div>
                  <p style={{ padding: "5% 0 12px 0" }}>
                    Thanks so much for listening— I hope you enjoyed this
                    episode of the More Human Podcast and took something away to
                    make your life more meaningful and fulfilling. You can
                    subscribe below to be notified about future episodes and
                    other great content from
                    <a href="/"> winterhearth.co</a>.
                  </p>
                  <div style={{ height: 50, padding: "24px 0" }}>
                    <a
                      style={{ fontFamily: "Poppins, sans-serif" }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://anchor.fm/winter-hearth/support"
                      className="secondary-btn text-capitalize"
                    >
                      Support the Podcast
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <PopularPostColumn episodeInfo={episodeInfo} posts={allEpisodes} />
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
