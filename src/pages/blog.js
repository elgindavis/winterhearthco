import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from "gatsby";
import React, { useState, useEffect } from "react";

import {
  Layout,
  Separator,
  SearchArea,
  BannerBlogItem,
  PostGridItemList,
  SinglePostRowList,
  PopularPostColumn,
} from "../components";

import { transformPostQueryData } from "../utils";

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const allPosts = transformPostQueryData(edges);
  const allBlogs = allPosts.filter(
    (post) =>
      (post.contentType === "blog" || post.contentType === "poetry") &&
      post.hidden !== true
  );
  const featuredPostList = allBlogs.filter((post) => post.featured === true);
  const featuredColumnList = allBlogs.filter((post) => post.featured === true);
  const newsletterVolTwoList = allPosts.filter(
    (post) => post.newsletterVolume === 2
  );
  const [searchState, setSearchState] = useState("");
  const [filteredPostList, setPostList] = useState([]);

  useEffect(() => {
    document.title = "Blog | Winter Hearth Studios";
  }, []);

  return (
    <Layout>
      <BannerBlogItem
        articleTitle="Compassion Fatigue in Times of Crisis"
        articleDescription="What do you do when the world's pain becomes your pain?"
        articleLink="/blog/compassion-fatigue-in-crisis"
        imageUrl="/img/blog/mwangi-gatheca-xViKfocA-Uc-unsplash-800p.jpg"
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
      <section style={{ marginTop: 20 }} className="post-content-area">
        <div className="container">
          <div className="row justify-content-center">
            <div name="searched-post-section" className="col-lg-8 posts-list">
              {searchState !== "" && (
                <h3 className="pb-40">Results for: {searchState}</h3>
              )}
              {searchState !== "" && filteredPostList.length === 0 && (
                <p>No posts matched this search</p>
              )}
              {searchState !== "" && (
                <SinglePostRowList list={filteredPostList} />
              )}
              {searchState === "" && (
                <div style={{ marginTop: "3%" }}>
                  <SinglePostRowList list={featuredPostList} />
                </div>
              )}
            </div>
            <PopularPostColumn posts={featuredColumnList} />
          </div>
        </div>
      </section>

      <section className="recent-blog-area pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 pb-30 header-text text-center">
              <h1>From the Newsletter Archives</h1>
              <h3 className="pb-20">
                Epic Life Playbook Volume 2:
                <br /> Demystifying Mental Health
              </h3>
              <p>"Mental Health Monsters" Series Artwork by Toby Allen</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <PostGridItemList list={newsletterVolTwoList} />
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
            name="see-all-newsletters-button"
          >
            See All Newsletters
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

// This gets the { data } property onto our props parameter, and here we query for all markdown files
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
