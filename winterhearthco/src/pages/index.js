import React from "react";
import { Link } from "gatsby";

import { PostGridItem, Layout } from "../components";
import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } } }) => {
  const allPosts = transformPostQueryData(edges);
  const latestPostList = allPosts.slice(-9).reverse();

  return (
    <Layout
      keywords={
        "how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,"
      }
      imageUrl="https://winterhearth.co/img/aubbie-knight.png"
      imageAlt="Winter Hearth Studios"
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
              <Link to="/blog/" className="primary-btn text-uppercase">
                See Latest Posts
              </Link>
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
            <div className="col-md-8 pb-30 header-text">
              <h1>Latest content</h1>
            </div>
          </div>
          <div id="latest-posts-row" className="row">
            {

              latestPostList.map((edition) => {
                return (
                  <PostGridItem
                    key={edition.id}
                    author={edition.author}
                    date={edition.date}
                    tags={edition.tags}
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

      <section className="pt-20 pb-80">
        <div className="text-center">
          <span>
            <Link
              style={{ margin: "12px 16px" }}
              to="/blog/"
              className="primary-btn text-uppercase"
            >
              See All Blogs
            </Link>
            <Link
              style={{ margin: "12px 16px" }}
              to="/newsletters/"
              className="primary-btn text-uppercase"
            >
              See Newsletters
            </Link>
          </span>
        </div>
      </section>

      <section className="home-about-area">
        <div className="container" style={{ paddingTop: "5%" }}>
          <div className="row align-items-center justify-content-between">
            <div
              className="col-lg-4 col-md-4 home-about-right"
              style={{ paddingBottom: "4rem" }}
            >
              <h1 className="text-uppercase">What fuels us</h1>
              <p>
                We're a creative studio dedicated to sparking meaningful change
                around mental and emotional health. We fully believe that if you
                can change the heart, you can change the world.
              </p>
              <Link to="/about" className="primary-btn text-uppercase">
                Read Our Story
              </Link>
            </div>
            <div className="col-lg-8 col-md-8 home-about-left">
              <Link to="/img/aubbie-knight.jpg">
                <img
                  className="/img-fluid"
                  src="/img/aubbie-knight.jpg"
                  alt="Aubbie the Brave Knight"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-about-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-lg-4 col-md-4 home-about-right"
              style={{ paddingBottom: "4rem" }}
            >
              <h1 className="text-uppercase">What we do</h1>
              <p>
                We believe in the power of storytelling as a central unifier in
                our shared human experience. <br /> From web comics to video
                games, podcasts to videos, blog posts and beyond— we aim to
                inspire, educate, and enrich people all over the world with the
                tools they need to become more mentally and emotionally
                powerful.
              </p>
              <Link to="/blog/" className="primary-btn text-uppercase">
                See latest posts
              </Link>
            </div>
            <div className="col-lg-7 col-md-7 home-about-left">
              <Link to="/img/aubbie-writing.png">
                <img
                  className="/img-fluid"
                  src="/img/aubbie-writing.png"
                  alt="Aubbie writing a story at a desk"
                />
              </Link>
            </div>
          </div>
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