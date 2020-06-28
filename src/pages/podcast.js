import React, { useEffect, useState } from 'react';
import { graphql } from "gatsby";

import {
  Layout,
  Separator,
  SearchArea,
  ContentStripList,
} from "../components";

import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
    const allEpisodes = transformPostQueryData(edges).filter(
        (content) => content.contentType === "podcast" && content.hidden !== true
    );
    const [searchState, setSearchState] = useState("");
    const [filteredEpisodeList, setEpisodeList] = useState([]);
    
    useEffect(() => {
        document.title = "More Human Podcast | Winter Hearth Studios";
    }, []);
    
    return (
      <Layout>
        <section className="recent-blog-area pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pb-30 header-text center">
                <h1>Welcome to the More Human Podcast!</h1>
                <Separator style={{ paddingBottom: 20 }} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pb-60 text-center header-text">
                <SearchArea
                  setPostList={setEpisodeList}
                  setSearchState={setSearchState}
                  type="all posts"
                  posts={allEpisodes}
                />
              </div>
            </div>
            <div className="pb-40">
              {searchState !== "" && (
                <h3 className="pb-40">Results for: {searchState}</h3>
              )}
              {searchState !== "" && filteredEpisodeList.length === 0 && (
                <p>No posts matched this search</p>
              )}
              <div
                name="searched-post-section"
                className="row"
                style={{ justifyContent: "center" }}
              >
                {searchState !== "" && (
                  <ContentStripList list={filteredEpisodeList} cover={true} />
                )}
              </div>
            </div>
            {searchState !== "" && (
              <div>
                <h2>Most Recent</h2> <br />
              </div>
            )}
            <div
              id="latest-posts-row"
              className="row"
              style={{ justifyContent: "center" }}
            >
              <ContentStripList list={allEpisodes} cover={true} />
            </div>
          </div>
        </section>
      </Layout>
    );
};

// This gets the { data } property onto our props parameter, and here we query for all markdown files
export const query = graphql`
    query {
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