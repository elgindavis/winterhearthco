import React from "react";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Area = styled.div`
  padding: 20px 12px;
  border: 4px solid var(--color-${({ type }) => type});
  border-radius: 4px;
  margin: 0 12px 40px;
`;

const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const ImageDiv = styled.div`
  flex: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  img {
  }
  @media (min-width: 1200px) {
    flex: 1;
  }
  @media (max-width: 768px) {
    img {
    }
  }
`;

const LinksDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 450px) {
    flex-direction: column;
  }
  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

const SingleLink = styled(AniLink)`
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
    padding: 0 10px;
    flex-direction: column;
`;

const InlineButton = styled.div`
  @media (max-width: 991px) {
      display: none;
  }
`;
  
const SideButton = styled.div`
    @media (min-width: 992px) {
        display: none;
    }
`;

export default ({
  tags,
  date,
  host,
  cover,
  color,
  author,
  excerpt,
  imageUrl,
  articleLink,
  contentType,
  imageAltText,
  articleTitle,
  anchorEpisodeUrl,
  spotifyEpisodeUrl,
  applePodcastEpisodeUrl,
  googlePodcastEpisodeUrl,
}) => {
  return (
    <Area type={color}>
      <Container>
        <ImageDiv>
          <AniLink paintDrip hex="#f0f8ff" direction="up" to={articleLink}>
            <img
              style={{ borderRadius: 4 }}
              className="img-fluid lazyload"
              src={cover ? imageUrl.replace(/-600p/i, "-cover") : imageUrl}
              alt={imageAltText}
            />
          </AniLink>
        </ImageDiv>
        <ContentDiv>
          <p>
            <small>More Human Podcast with {author || host} </small>
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
            <h3>{articleTitle}</h3>
          </AniLink>

          <p style={{ maxWidth: 600 }} className="excerpt">
            {excerpt}
          </p>

          <LinksDiv>
            <SingleLink
              paintDrip
              hex="#f0f8ff"
              direction="up"
              to={applePodcastEpisodeUrl || articleLink}
            >
              Apple Podcasts
            </SingleLink>
            <SingleLink
              paintDrip
              hex="#f0f8ff"
              direction="up"
              to={googlePodcastEpisodeUrl  || articleLink}
            >
              Google Podcasts
            </SingleLink>
            <SingleLink
              paintDrip
              hex="#f0f8ff"
              direction="up"
              to={spotifyEpisodeUrl  || articleLink}
            >
              Spotify
            </SingleLink>
            <SingleLink 
                paintDrip 
                hex="#f0f8ff" 
                direction="up" 
                to={anchorEpisodeUrl  || articleLink}
            >
              Anchor
            </SingleLink>
          </LinksDiv>
          <InlineButton style={{ padding: "24px 0" }}>
            <AniLink
              paintDrip
              hex="#f0f8ff"
              direction="up"
              to={articleLink}
              className="secondary-btn"
            >
              {contentType === "podcast" && "Listen Now"}
              {contentType === "poetry" && "Read Poem"}
              {contentType === "blog" && "Read Article"}
              {contentType === "newsletter" && "Read Newsletter"}
            </AniLink>
          </InlineButton>
        </ContentDiv>
      </Container>
      <SideButton style={{ padding: "24px 0" }}>
        <AniLink
          paintDrip
          hex="#f0f8ff"
          direction="up"
          to={articleLink}
          className="secondary-btn"
        >
          {contentType === "podcast" && "Listen Now"}
          {contentType === "poetry" && "Read Poem"}
          {contentType === "blog" && "Read Article"}
          {contentType === "newsletter" && "Read Newsletter"}
        </AniLink>
      </SideButton>
    </Area>
  );
};
