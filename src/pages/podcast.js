import React, { useEffect } from 'react';
import { graphql } from "gatsby";

import { PostGridItem, Layout } from "../components";
import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
    const allEpisodes = transformPostQueryData(edges).filter(
      (content) => content.contentType === "podcast" && content.hidden !== true
    );

    useEffect(() => {
        document.title = "More Human Podcast | Winter Hearth Studios";
    }, []);
    
    return (
        <Layout
            keywords={"podcast, feeling human, emotions, mental health, emotional health"}
            imageUrl="/img/aubbie-crystal-ball.png"
            imageAltText="Winter Hearth Studios Games"
            url="https://winterhearth.co/podcast"
            title="Games"
            description="Welcome to the Winter Hearth Arcade!"
        >
            <section className="recent-blog-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 pb-30 header-text center">
                            <h1>Welcome to the Feeling Human Podcast</h1>
                            <h3 style={{ textAlign: "center" }}>When was the last time you felt human?</h3>
                        </div>
                    </div>
                    <div className="row pt-40">
                        {
                            allEpisodes.map((edition) => {
                                return (
                                    <PostGridItem
                                        key={edition.id}
                                        author={edition.author}
                                        date={edition.date}
                                        articleTitle={edition.title}
                                        imageUrl={edition.imageUrl}
                                        articleLink={edition.articleLink}
                                        imageAltText={edition.imageAltText}
                                        excerpt={edition.description}
                                    ></PostGridItem>
                                );
                            })
                        }
                    </div>
                </div>
            </section>

        </Layout>
    )
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