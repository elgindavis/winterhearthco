import React from 'react';
import { Link, graphql } from "gatsby";

import Layout from '../components/layout'
import PostGridItem from "../components/PostGridItem";
import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
    const allGames = transformPostQueryData(edges).filter(
        content => content.contentType === 'game'
    );
    return (
        <Layout
            keywords={"games, mobile games, mental health, emotional health"}
            imageUrl="/img/aubbie-crystal-ball.png"
            imageAlt="Winter Hearth Studios Games"
            url="https://winterhearth.co/games"
            title="Games"
            description="Welcome to the Winter Hearth Arcade!"
        >
            <section className="recent-blog-area pt-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 pb-30 header-text center">
                            <h1>Check out the Winter Hearth Arcade!</h1>
                            <h3 style={{ textAlign: "center" }}>Burning-hot fun for the whole family!</h3>
                        </div>
                    </div>
                    <div className="row pt-40">
                        {
                            allGames.map((edition) => {
                                return (
                                    <PostGridItem
                                        key={edition.id}
                                        author={edition.author}
                                        date={edition.date}
                                        articleTitle={edition.title}
                                        imageUrl={edition.imageUrl}
                                        articleLink={edition.articleLink}
                                        imgAltText={edition.imgAltText}
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