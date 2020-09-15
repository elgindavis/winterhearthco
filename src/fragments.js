import { graphql } from "gatsby";

export const query = graphql`
  fragment PostInfo on MarkdownRemark {
    html
    frontmatter {
      date(formatString: "MMM DD, YYYY")
      title
      imageUrl
      imageAltText
      featured
      newsletterVolume
      contentType
      tags
      keywords
      description
      hidden
      embedUrl
      anchorEpisodeUrl
      spotifyEpisodeUrl
      applePodcastEpisodeUrl
      googlePodcastEpisodeUrl
      facebookShareLink
      twitterShareLink
      unsplashBadgeInfo {
        artistName
        artistUrl
      }
      author {
        name
        role
        summary
        imageUrl
      }
      host {
        name
        role
        summary
        imageUrl
      }
      guests {
        name
        role
        summary
        imageUrl
      }
    }
  }
`;
