import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql } from 'gatsby';
import React, { useState, useEffect } from "react";

import { 
  Layout,
  Separator,
  SearchArea,
  PostGridItemList,
} from "../components";

import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
  const allPosts = transformPostQueryData(edges);
  const latestPostList = allPosts.slice(-9).reverse().filter(post => post.hidden !== true);

  const [searchState, setSearchState] = useState("");
  const [filteredPostList, setPostList] = useState([]);

  useEffect(() => {
    document.title = "Winter Hearth Studios";
  }, []);
  
  return (
    <Layout>
      <section
        style={{ padding: "12% 0" }}
        className="home-hero-image section-gap"
      >
        <div className="">
          <div
            style={{ margin: "10% 0% 0% 3%" }}
            className="row align-items-center justify-content-between text-white"
          >
            <div className="col-lg-8 col-md-8 banner-left">
              <h1 className="text-white">
                Change the heart, <br />
                change the world.
              </h1>
              <p>
                We're Winter Hearth Studios, and we're just getting fired up.
              </p>
              <AniLink
                paintDrip
                hex="#f0f8ff"
                direction="up"
                to="/blog/"
                className="primary-btn text-uppercase"
              >
                See Latest Posts
              </AniLink>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{ paddingBottom: 0 }}
        className="recent-blog-area section-gap"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 pb-60 text-center header-text">
              <h1>Latest content</h1>
              <Separator />
              <SearchArea
                setPostList={setPostList}
                setSearchState={setSearchState}
                type="all posts"
                posts={allPosts}
              />
            </div>
          </div>
          <div className="pb-40">
            {searchState !== "" && (
              <h3 className="pb-40">Results for: {searchState}</h3>
            )}
            {searchState !== "" && filteredPostList.length === 0 && (
              <p>No posts matched this search</p>
            )}
            <div name="searched-post-section" className="row" style={{ justifyContent: "center" }}>
              {searchState !== "" &&
                <PostGridItemList list={filteredPostList}/>
              }
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
            <PostGridItemList list={latestPostList} />
          </div>
        </div>
      </section>

      <section className="pt-80 pb-80">
        <div className="text-center">
          <span>
            <AniLink
              paintDrip
              hex="#f0f8ff"
              direction="up"
              style={{ margin: "12px 16px" }}
              to="/blog/"
              name="see-all-blogs-button"
              className="primary-btn text-uppercase"
            >
              See All Blogs
            </AniLink>
            <AniLink
              paintDrip
              hex="#f0f8ff"
              direction="up"
              style={{ margin: "12px 16px" }}
              to="/newsletters/"
              name="see-all-newsletters-button"
              className="primary-btn text-uppercase"
            >
              See Newsletters
            </AniLink>
          </span>
        </div>
      </section>
    </Layout>
  );
}

// This gets the { data } property onto our props parameter, and here we query for all markdown files
export const query = graphql`
    query {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
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