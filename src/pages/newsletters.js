import React, { useState, useEffect } from 'react';

import {
  Layout,
  Separator,
  SearchArea,
  PostGridItemList,
  SinglePostRowList,
} from "../components";

import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
    const allPosts = transformPostQueryData(edges);
    const [searchState, setSearchState] = useState("");
    const [filteredPostList, setPostList] = useState([]);

    const allNewsletters = allPosts.filter(post => post.contentType === "newsletter");
    const newsletterVolTwoList = allNewsletters.filter(
      (post) => post.newsletterVolume === "2"
    );
    const newsletterVolOneList = allNewsletters.filter(
      (post) => post.newsletterVolume === "1"
    );
    
    useEffect(() => {
      document.title = "Newsletters | Winter Hearth Studios";
    }, [])

    return (
      <Layout
        keywords="emotional intelligence, mental health"
        imageUrl="/img/aubbie-knight.png"
        imageAltText="Winter Hearth Studios"
        url="https://winterhearth.co/newsletters"
        title="Newsletters"
        description="The Winter Hearth Newsletters cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!"
      >
        <section
          style={{ padding: "12% 0" }}
          className="newsletter-hero-image section-gap"
        >
          <div className="">
            <div
              style={{ margin: "40% 0 0 3%" }}
              className="row align-items-center justify-content-between"
            >
              <div className="col-lg-8 col-md-8 banner-left"></div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h1 className="pt-40 pb-10">Winter Hearth Newsletters</h1>
            <Separator />
            <SearchArea
              setPostList={setPostList}
              setSearchState={setSearchState}
              posts={allNewsletters}
              type="newsletters"
            />
          </div>
        </section>
        <section style={{ marginTop: 90 }} className="post-content-area">
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
              </div>
            </div>
          </div>
        </section>
        <section className="recent-blog-area pt-60" id="volume-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 pb-30 header-text text-center">
                <h3>
                  Epic Life Playbook Volume 2: <br /> Demystifying Mental Health
                </h3>
                <hr className="title-line mt-20" />
                <br />
                <p style={{ marginBottom: 0 }}>
                  "Mental Health Monsters" Series Artwork by Toby Allen
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <PostGridItemList list={newsletterVolTwoList} />
            </div>
          </div>
        </section>

        <section className="recent-blog-area pt-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 pb-30 header-text text-center">
                <h3>
                  Epic Life Playbook Volume 1: Winter Hearth Creative Journal
                </h3>
                <hr className="title-line mt-20" />
                <br />
              </div>
            </div>
            <div className="row justify-content-center">
              <PostGridItemList list={newsletterVolOneList} />
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
            imageAltText
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