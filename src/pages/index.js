import React, { useState } from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { PostGridItem, Layout, Separator, SearchArea } from "../components";
import { transformPostQueryData, getBorderStyle } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
  const allPosts = transformPostQueryData(edges);
  const latestPostList = allPosts.slice(-9).reverse();

  const [searchState, setSearchState] = useState("");
  const [filteredPostList, setPostList] = useState([]);

  return (
    <Layout
      keywords={
        "how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,"
      }
      imageUrl="/img/aubbie-knight.png"
      imageAltText="Winter Hearth Studios"
      url="https://winterhearth.co/about"
      title="Home"
      description="Winter Hearth Studios is a quirky and charming creative studio that designs content to make your life better. We cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!"
    >
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
                filteredPostList.map((edition, index) => {
                  return (
                    <PostGridItem
                      color={getBorderStyle(index)}
                      className="pb-20"
                      key={edition.id}
                      author={edition.author}
                      date={edition.date}
                      tags={edition.tags}
                      articleTitle={edition.title}
                      imageUrl={edition.imageUrl}
                      articleLink={edition.articleLink}
                      imageAltText={edition.imageAltText}
                      excerpt={edition.description}
                    />
                  );
                })}
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
            {latestPostList.map((edition, index) => {
              return (
                <PostGridItem
                  color={getBorderStyle(index)}
                  key={edition.id}
                  name={edition.title}
                  author={edition.author}
                  date={edition.date}
                  tags={edition.tags}
                  articleTitle={edition.title}
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