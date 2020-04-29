import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import PostGridItem from "../components/PostGridItem";
import SinglePostRow from "../components/SinglePostRow";
import BannerBlogItem from "../components/BannerBlogItem";
import PopularPostColumn from "../components/PopularPostColumn";
import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } }}) => {
    const allPosts = transformPostQueryData(edges);
    const featuredPostList = allPosts.filter(post => post.featured === true);
    const newsletterVolTwoList = allPosts.filter(post => post.newsletterVolume === "2");
    // const newsletterVolOneList = allPosts.filter(post => post.newsletterVolume === "1");
 
    return (
        <Layout
            keywords={"blog, emotional intelligence, mental health, emotional health"}
            imageUrl="/img/aubbie-crystal-ball.png"
            imageAlt="Winter Hearth Studios Blog"
            url="https://winterhearth.co/blog"
            title="Blog"
            description="Your emotions are now your superpower— Welcome to the future. In the Winter Hearth Blog we go where others refuse to go. We seek out all truths – not just those that make us comfortable. Unlocking the greatest secrets and strengths of humanity wont be easy, but it will be worth it."
        >
            <BannerBlogItem
                articleTitle="Pandemics and the Quest for Good News"
                articleDescription="In this world there will be troubles... And good news makes those troubles seem smaller, right?"
                articleLink="/blog/pandemics-and-good-news"
                imageUrl="/img/blog/good-news-banner.jpg"
                mobileimageUrl=""
            >
            </BannerBlogItem>

            <section style={{marginTop: 90}} className="post-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            {
                                featuredPostList.map((edition) => {
                                    return (
                                        <SinglePostRow
                                            key={edition.id}
                                            author={edition.author.name}
                                            date={edition.date}
                                            tags={edition.tags}
                                            articleTitle={edition.title}
                                            imageUrl={edition.imageUrl}
                                            articleLink={edition.articleLink}
                                            imgAltText={edition.imgAltText}
                                            excerpt={edition.description}
                                        ></SinglePostRow>
                                    );
                                })
                            }
                        </div>
                        <div className="col-lg-4 sidebar-widgets">
                            <div className="widget-wrap">
                                <div className="single-sidebar-widget search-widget">
                                </div>
                                <div className="single-sidebar-widget user-info-widget">
                                    <img width="120" style={{borderRadius: 100}} src="/img/profile-200p.jpg" className="lazyload" alt="Elgin Davis" />
                                    <Link to="/img/profile.jpg"><h4>Elgin Davis</h4></Link>
                                    <p>
                                        Main Content Writer
                                    </p>
                                    <p style={{textAlign: "left"}}>
                                        Elgin Davis is the creator of Winter Hearth Studios. Driven by a passionate spirit and boundless curiosity, Davis' work seeks to explore the depths of humanity and what it might look like to live a hyper-meaningful existence here on earth.
                                    </p>
                                </div>
                                <PopularPostColumn/>
                            </div>
                        </div>
                    </div>
                </div>	
            </section>

            <section className="recent-blog-area pt-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 pb-30 header-text">
                            <h1>From the Newsletter Archives</h1>
                            <h3>Epic Life Playbook Volume 2: Demystifying Mental Health</h3>
                            <p>	
                                "Mental Health Monsters" Series Artwork by Toby Allen
                                
                            </p>
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
            <section className="section-gap">
                <div className="text-center">
                    <Link to="/newsletters/" className="primary-btn text-uppercase">See All Newsletters</Link>
                </div>
            </section>
        </Layout>
    );
}

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