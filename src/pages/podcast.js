import styled from "styled-components";
import { graphql } from "gatsby";
import React, { useEffect, useState } from 'react';

import {
  Layout,
  Separator,
} from "../components";

const LinksDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
  @media (max-width: 450px) {
    justify-content: flex-start;
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

const EmbeddedEpisode = styled.div`
  padding-bottom: 0px;
  @media(min-width: 991px) {
    padding-bottom: 40px
  }
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
        podcastFacebookShareUrl
      }
    }
  }
}) => {
    const [podcastRssFeed, setPodcastRssFeed] = useState(null);
   
    const getRssFeed = () => {
      const request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
          const { items } = JSON.parse(request.responseText);
          const feed = items.map(episode => {
            return {
              ...episode,
              link: episode.link.replace(/episodes/i, "embed/episodes")
            }
          });
          setPodcastRssFeed(feed);
         
        }
      }
      request.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fanchor.fm%2Fs%2Fdb39ae0%2Fpodcast%2Frss", true);
      request.send();
    }
  
    useEffect(() => {
        document.title = "More Human Podcast | Winter Hearth Studios";
        getRssFeed();
    }, []);
    
    
    return (
      <Layout>
        <section className="recent-blog-area pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pt-30 pb-30 center">
                <h1>More Human Podcast</h1>
                <Separator style={{ paddingBottom: 0 }} />
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
                <div>
                  <p style={{ marginBottom: 24 }} > Available on:</p>
                  <LinksDiv>
                    {applePodcastsUrl && (
                      <SingleLink
                        href={applePodcastsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Apple Podcasts
                      </SingleLink>
                    )}
                    {googlePodcastsUrl && (
                      <SingleLink
                        href={googlePodcastsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Google Podcasts
                      </SingleLink>
                    )}
                    {spotifyUrl && (
                      <SingleLink
                        href={spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Spotify
                      </SingleLink>
                    )}
                    {anchorUrl && (
                      <SingleLink
                        href={anchorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Anchor
                      </SingleLink>
                    )}
                    {radioPublicUrl && (
                      <SingleLink
                        href={radioPublicUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Radio Public
                      </SingleLink>
                    )}
                    {pocketCastsUrl && (
                      <SingleLink
                        href={pocketCastsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Pocket Casts
                      </SingleLink>
                    )}
                    {castboxUrl && (
                      <SingleLink
                        href={castboxUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         CastBox
                      </SingleLink>
                    )}
                    {breakerUrl && (
                      <SingleLink
                        href={breakerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Breaker
                      </SingleLink>
                    )}
                    {overcastUrl && (
                      <SingleLink
                        href={overcastUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                         Overcast
                      </SingleLink>
                    )}
                  </LinksDiv>
                </div>
              </div>
            </div>
          </div>
        </section>
        {podcastRssFeed ? 
          <section>
            <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ padding: 20, width: '100%', maxWidth: 1000 }}>
                {podcastRssFeed.map(episode => {
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
                    )
                  })}
              </div>
            </div>
          </section>
          :
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <p>Loading...</p>
          </div>
        }
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
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
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
