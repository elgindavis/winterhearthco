import styled from "styled-components";
import { graphql } from "gatsby";
import React, { useEffect, useState } from "react";

import { Layout, Separator } from "../components";

const Container = styled.div`
  @media (max-width: 375px) {
    padding: 0;
  }
`;

const LinksDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const SingleLink = styled.a`
  font-size: 14px;
  margin: 0 12px 12px;
  @media (max-width: 400px) {
    font-size: 16px;
  }
  img {
    width: 28px;
  }
`;

const EmbeddedEpisode = styled.div`
  padding-bottom: 0px;
  @media (min-width: 991px) {
    padding-bottom: 40px;
  }
`;

const IconImg = styled.img`
  margin: 8px 4px;
`;

export default ({
  data: {
    site: {
      siteMetadata: {
        anchorUrl,
        anchorSupportUrl,
        anchorMessageUrl,
        spotifyUrl,
        applePodcastsUrl,
        googlePodcastsUrl,
        breakerUrl,
        castboxUrl,
        overcastUrl,
        pocketCastsUrl,
        radioPublicUrl,
        podcastTwitterShareUrl,
        podcastFacebookShareUrl,
      },
    },
  },
}) => {
  const [podcastRssFeed, setPodcastRssFeed] = useState(null);

  const getRssFeed = () => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const { items } = JSON.parse(request.responseText);
        const feed = items.map((episode) => {
          return {
            ...episode,
            link: episode.link.replace(/episodes/i, "embed/episodes"),
          };
        });
        setPodcastRssFeed(feed);
      }
    };
    request.open(
      "GET",
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2Fdb39ae0%2Fpodcast%2Frss",
      true
    );
    request.send();
  };

  useEffect(() => {
    document.title = "More Human Podcast | Winter Hearth Studios";
    getRssFeed();
  }, []);

  return (
    <Layout>
      <section className="recent-blog-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 pt-30 pb-10 center">
              <h1>More Human Podcast</h1>
              <Separator style={{ paddingBottom: 0 }} />
              <div>
                <p style={{ marginBottom: 8 }}> Available on:</p>
                <LinksDiv style={{ marginBottom: 12 }}>
                  {applePodcastsUrl && (
                    <SingleLink
                      href={applePodcastsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconImg src="/img/icons/apple-podcasts.png" />
                    </SingleLink>
                  )}
                  {googlePodcastsUrl && (
                    <SingleLink
                      href={googlePodcastsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconImg src="/img/icons/google-podcasts.png" />
                    </SingleLink>
                  )}
                  {spotifyUrl && (
                    <SingleLink
                      href={spotifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconImg src="/img/icons/spotify.png" />
                    </SingleLink>
                  )}
                  {/* {anchorUrl && (
                      <SingleLink
                        href={anchorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Anchor
                      </SingleLink>
                    )} */}
                  {radioPublicUrl && (
                    <SingleLink
                      href={radioPublicUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconImg src="/img/icons/radio-public.png" />
                    </SingleLink>
                  )}
                  {pocketCastsUrl && (
                    <SingleLink
                      href={pocketCastsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconImg src="/img/icons/pocket-casts.png" />
                    </SingleLink>
                  )}
                  {castboxUrl && (
                    <SingleLink
                      href={castboxUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconImg src="/img/icons/castbox.png" />
                    </SingleLink>
                  )}
                  {breakerUrl && (
                    <SingleLink
                      href={breakerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconImg src="/img/icons/breaker.png" />
                    </SingleLink>
                  )}
                  {overcastUrl && (
                    <SingleLink
                      href={overcastUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconImg src="/img/icons/overcast.png" />
                    </SingleLink>
                  )}
                </LinksDiv>
                <LinksDiv style={{ paddingBottom: 24 }}>
                  {anchorSupportUrl && (
                    <SingleLink
                      href={anchorSupportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Support the podcast
                    </SingleLink>
                  )}
                  {anchorMessageUrl && (
                    <SingleLink
                      href={anchorMessageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Leave a message
                    </SingleLink>
                  )}
                  {podcastFacebookShareUrl && (
                    <SingleLink
                      href={podcastFacebookShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Share on Facebook
                    </SingleLink>
                  )}
                  {podcastTwitterShareUrl && (
                    <SingleLink
                      href={podcastTwitterShareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Share on Twitter
                    </SingleLink>
                  )}
                </LinksDiv>
              </div>
            </div>
          </div>
        </div>
      </section>
      {podcastRssFeed ? (
        <section>
          <Container
            className="container"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ padding: 20, width: "100%", maxWidth: 1000 }}>
              {podcastRssFeed.map((episode) => {
                return (
                  <EmbeddedEpisode key={episode.title}>
                    <h3 style={{ paddingBottom: 12 }}>{episode.title}</h3>
                    <iframe
                      frameBorder="0"
                      height="160"
                      scrolling="no"
                      title={episode.title}
                      src={episode.link}
                      width="100%"
                    />
                  </EmbeddedEpisode>
                );
              })}
            </div>
          </Container>
        </section>
      ) : (
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <p>Loading...</p>
        </div>
      )}
    </Layout>
  );
};

// This gets the { data } property onto our props parameter, and here we query for all markdown files
export const query = graphql`
  query {
    site {
      siteMetadata {
        anchorUrl
        anchorSupportUrl
        anchorMessageUrl
        spotifyUrl
        applePodcastsUrl
        googlePodcastsUrl
        breakerUrl
        castboxUrl
        overcastUrl
        pocketCastsUrl
        radioPublicUrl
        podcastTwitterShareUrl
        podcastFacebookShareUrl
      }
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
