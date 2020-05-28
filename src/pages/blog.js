import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from "gatsby";

import {
    Layout, 
    Separator,
    SearchArea,
    PostGridItem,
    SinglePostRow,
    BannerBlogItem,
    PopularPostColumn,
} from "../components";

import { transformPostQueryData, getBorderStyle } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } }}) => {
    const allPosts = transformPostQueryData(edges);
    const allBlogs = allPosts.filter(
      (post) => post.contentType === "blog"
    ); 
    const featuredPostList = allBlogs.filter(
      (post) => post.featured === true
    );
    const featuredColumnList = allPosts.filter(
      (post) => post.featured === true
    );
    const newsletterVolTwoList = allPosts.filter(post => post.newsletterVolume === "2");
    const [searchState, setSearchState] = useState('');
    const [filteredPostList, setPostList] = useState([]);

    return (
      <Layout
        keywords={
          "blog, emotional intelligence, mental health, emotional health"
        }
        imageUrl="/img/aubbie-crystal-ball.png"
        imageAltText="Winter Hearth Studios Blog"
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
        ></BannerBlogItem>
        <section>
          <div className="text-center">
            <h1 className="pt-60 pb-10">Winter Hearth Blog</h1>
            <Separator />
            <SearchArea
              setPostList={setPostList}
              setSearchState={setSearchState}
              posts={allBlogs}
              type="blogs"
            />
          </div>
        </section>
        <section style={{ marginTop: 90 }} className="post-content-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 posts-list">
                {searchState !== "" && (
                  <h3 className="pb-40">Results for: {searchState}</h3>
                )}
                {searchState !== "" && filteredPostList.length === 0 && (
                  <p>No posts matched this search</p>
                )}
                {searchState !== "" &&
                  filteredPostList.map((edition, index) => {
                    return (
                      <SinglePostRow
                        className="pb-20"
                        color={getBorderStyle(index)}
                        key={edition.id}
                        author={edition.author.name}
                        date={edition.date}
                        tags={edition.tags}
                        articleTitle={edition.title}
                        imageUrl={edition.imageUrl}
                        articleLink={edition.articleLink}
                        imageAltText={edition.imageAltText}
                        excerpt={edition.description}
                      ></SinglePostRow>
                    );
                  })}
                {searchState === "" &&
                  featuredPostList.map((edition, index) => {
                    return (
                      <SinglePostRow
                        color={getBorderStyle(index)}
                        key={edition.id}
                        author={edition.author.name}
                        date={edition.date}
                        tags={edition.tags}
                        articleTitle={edition.title}
                        imageUrl={edition.imageUrl}
                        articleLink={edition.articleLink}
                        imageAltText={edition.imageAltText}
                        excerpt={edition.description}
                      ></SinglePostRow>
                    );
                  })}
              </div>
              <div className="col-lg-4 sidebar-widgets">
                <div className="widget-wrap" style={{ marginTop: 0 }}>
                  <div className="single-sidebar-widget user-info-widget">
                    <img
                      width="120"
                      style={{ borderRadius: 100 }}
                      src="/img/profile-200p.jpg"
                      className="lazyload"
                      alt="Elgin Davis"
                    />
                    <h4 className="pt-20">Elgin Davis</h4>
                    <p>Main Content Writer</p>
                    <p style={{ textAlign: "left" }}>
                      Elgin Davis is the creator of Winter Hearth Studios.
                      Driven by a passionate spirit and boundless curiosity,
                      Davis' work seeks to explore the depths of humanity and
                      what it might look like to live a hyper-meaningful
                      existence here on earth.
                    </p>
                  </div>
                  <PopularPostColumn posts={featuredColumnList} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recent-blog-area pt-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 pb-30 header-text text-center">
                <h1>From the Newsletter Archives</h1>
                <h3 className="pb-20">Epic Life Playbook Volume 2:<br/> Demystifying Mental Health</h3>
                <p>"Mental Health Monsters" Series Artwork by Toby Allen</p>
              </div>
            </div>
            <div className="row justify-content-center">
              {newsletterVolTwoList.map((edition, index) => {
                return (
                  <PostGridItem
                    color={getBorderStyle(index)}
                    key={edition.id}
                    author={edition.author}
                    date={edition.date}
                    articleTitle={edition.title}
                    tags={edition.tags}
                    imageUrl={edition.imageUrl}
                    articleLink={edition.articleLink}
                    imageAltText={edition.imageAltText}
                    excerpt={edition.description}
                  ></PostGridItem>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section-gap">
          <div className="text-center">
            <AniLink
              paintDrip
              direction="up"
              to="/newsletters/"
              className="primary-btn text-uppercase"
            >
              See All Newsletters
            </AniLink>
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
                    ...PostInfo
                }
            }
        }
    }
`;