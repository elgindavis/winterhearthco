import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Area = styled.div`
  padding: 10px 12px;
  border: 4px solid var(--color-${({ type }) => type});
  border-radius: 4px;
  margin: 0 12px 40px;
  max-width: 1056px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const LinksDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 450px) {
    flex-direction: column;
  }
  padding-top: 8px;
`;

const SingleLink = styled.a`
  font-size: 14px;
  margin-right: 12px;
  margin-bottom: 12px;
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex: 3;
  padding: 0;
  flex-direction: column;
`;

const PodcastEmbed = styled.iframe`
  width: 100%;
  height: auto;
  margin: 12px 0;
`;

export default ({
  content: {
    host,
    author,
    date,
    articleLink,
    articleTitle,
    title,
    embedUrl,
    anchorEpisodeUrl,
    spotifyEpisodeUrl,
    applePodcastEpisodeUrl,
    googlePodcastEpisodeUrl,
  },
  color,
}) => {
  return (
    <Area type={color}>
      <Container>
        <ContentDiv>
          <p>
            <small>
              More Human Podcast with{" "}
              {author?.name || host?.name || "Winter Hearth Studios"}{" "}
            </small>
          </p>
          <AniLink
            paintDrip
            hex="#f0f8ff"
            direction="up"
            className="posts-title"
            to={articleLink}
            style={{
              color: "var(--color-text)",
              textDecoration: "none",
            }}
          >
            <h3>{title || articleTitle}</h3>
          </AniLink>
          <PodcastEmbed
            src={embedUrl}
            title={title || articleTitle}
            width="100%"
            frameborder="0"
            scrolling="no"
          />
          {date && <small> {date}</small>}
          <LinksDiv>
            {applePodcastEpisodeUrl && (
              <SingleLink
                href={applePodcastEpisodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Apple Podcasts
              </SingleLink>
            )}
            {googlePodcastEpisodeUrl && (
              <SingleLink
                href={googlePodcastEpisodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Google Podcasts
              </SingleLink>
            )}
            {spotifyEpisodeUrl && (
              <SingleLink
                href={spotifyEpisodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Spotify
              </SingleLink>
            )}
            {anchorEpisodeUrl && (
              <SingleLink
                href={anchorEpisodeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Listen on Anchor
              </SingleLink>
            )}
          </LinksDiv>
        </ContentDiv>
      </Container>
    </Area>
  );
};
