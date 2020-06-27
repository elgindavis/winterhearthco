import React, { useEffect } from 'react';
import { graphql } from "gatsby";

import { PostGridItemList, Layout } from "../components";
import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
    const allEpisodes = transformPostQueryData(edges).filter(
        (content) => content.contentType === "podcast" && content.hidden !== true
    );
    
    console.log("allEpisodes", allEpisodes)

    useEffect(() => {
        document.title = "More Human Podcast | Winter Hearth Studios";
    }, []);
    
    return (
      <Layout>
        <section className="recent-blog-area pt-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pb-30 header-text center">
                <h1>Welcome to the More Human Podcast</h1>
                <h3 style={{ textAlign: "center" }}>
                  When was the last time you felt human?
                </h3>
              </div>
            </div>
            <div className="row pt-40">
              <PostGridItemList list={allEpisodes} cover={true} />
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