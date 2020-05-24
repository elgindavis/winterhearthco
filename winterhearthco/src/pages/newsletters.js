import React from 'react';

import Layout from '../components/layout';
import PostGridItem from '../components/PostGridItem';
import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
    const allPosts = transformPostQueryData(edges);

    const newsletterVolTwoList = allPosts.filter(post => post.newsletterVolume === "2");
    const newsletterVolOneList = allPosts.filter(post => post.newsletterVolume === "1");
    return(
        <Layout
            keywords="emotional intelligence, mental health"
            imageUrl="/img/aubbie-knight.png"
            imageAlt="Winter Hearth Studios"
            url="https://winterhearth.co/newsletters"
            title="Newsletters"
            description="The Winter Hearth Newsletters cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!" 
        >
            <section style={{padding: "12% 0"}} className="newsletter-hero-image section-gap">
                <div className="">
                    <div style={{margin: "10% 0 0 3%"}} className="row align-items-center justify-content-between">
                        <div className="col-lg-8 col-md-8 banner-left">
                            <h1 className="text-white">
                                Winter Hearth <br/>
                                Epic Life Playbook
                            </h1>
                        </div>
                    </div>
                </div>					
            </section>
            <section className="recent-blog-area pt-60" id="volume-2">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 pb-30 header-text">
                            <h3>Epic Life Playbook Volume 2: Demystifying Mental Health</h3> <br/>
                            <p>"Mental Health Monsters" Series Artwork by Toby Allen</p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            newsletterVolTwoList.map((edition) => {
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

            <section className="recent-blog-area pt-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 pb-30 header-text">
                            <h3>Epic Life Playbook Volume 1: Winter Hearth Creative Journal</h3>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        {
                            newsletterVolOneList.map((edition) => {
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
            frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            featured
            newsletterVolume
            contentType
            imageUrl
            imageAlt
            tags
            keywords
            description
            author {
                name
                role
                summary
                imageUrl
            }
            }
        }
        }
    }
    }
`;