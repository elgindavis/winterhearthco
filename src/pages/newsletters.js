import React, { useState } from 'react';

import { Layout, Separator, PostGridItem, SearchArea, SinglePostRow } from "../components";
import { transformPostQueryData, getBorderStyle } from "../utils";

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

    return (
      <Layout
        keywords="emotional intelligence, mental health"
        imageUrl="/img/aubbie-knight.png"
        imageAlt="Winter Hearth Studios"
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
              style={{ margin: "10% 0 0 3%" }}
              className="row align-items-center justify-content-between"
            >
              <div className="col-lg-8 col-md-8 banner-left">
                <h1 className="text-white">
                  Winter Hearth <br />
                  Epic Life Playbook
                </h1>
              </div>
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
                        color={getBorderStyle(index)}
                        className="pb-20"
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
                  })}
              </div>
            </div>
          </div>
        </section>
        <section className="recent-blog-area pt-60" id="volume-2">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 pb-30 header-text text-center">
                <h3>
                  Epic Life Playbook Volume 2: <br /> Demystifying Mental Health
                </h3>
                <br />
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
                    imgAltText={edition.imgAltText}
                    excerpt={edition.description}
                  ></PostGridItem>
                );
              })}
            </div>
          </div>
        </section>

        <section className="recent-blog-area pt-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 pb-30 header-text">
                <h3>
                  Epic Life Playbook Volume 1: Winter Hearth Creative Journal
                </h3>
                <br />
              </div>
            </div>
            <div className="row justify-content-center">
              {newsletterVolOneList.map((edition, index) => {
                return (
                  <PostGridItem
                    color={getBorderStyle(index)}
                    key={edition.id}
                    author={edition.author}
                    date={edition.date}
                    articleTitle={edition.title}
                    imageUrl={edition.imageUrl}
                    tags={edition.tags}
                    articleLink={edition.articleLink}
                    imgAltText={edition.imgAltText}
                    excerpt={edition.description}
                  ></PostGridItem>
                );
              })}
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