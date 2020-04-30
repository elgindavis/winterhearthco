import React from "react"

import Layout from "../components/layout"
import UnsplashBadge from "../components/UnsplashBadge"
import BlogPostMetadata from "../components/BlogPostMetadata"
import PopularPostColumnWidget from "../components/PopularPostColumn"

export default (props) => {
  const postHTML = props.data.markdownRemark.html;
  const postInfo = props.data.markdownRemark.frontmatter;

  return (
    <Layout
      keywords={postInfo.keywords}
      imageUrl={postInfo.imageUrl}
      imageAlt={postInfo.imageAlt}
      url={props.location.href}
      title={postInfo.title}
      description={postInfo.description}
    >
      <title>{postInfo.title}</title>

      <section className="post-content-area single-post-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post row">
                <div className="col-lg-12">
                  <div className="feature-img">
                    <img
                      className="img-fluid lazyload"
                      style={{ borderRadius: 4, marginTop: "3%" }}
                      src={postInfo.imageUrl.replace(/-400p/i, "")}
                      alt={postInfo.imageAlt}
                    />
                    {
                      postInfo.unsplashBadgeInfo &&
                      postInfo.unsplashBadgeInfo.artistName !== "" &&
                        <UnsplashBadge
                            artistName={postInfo.unsplashBadgeInfo.artistName}
                            artistURL={postInfo.unsplashBadgeInfo.artistURL}
                        />
                    }
                  </div>
                </div>

                <BlogPostMetadata
                  tags={postInfo.tags}
                  author={postInfo.author.name}
                  date={postInfo.date}
                />
                
                <div className="col-lg-12 col-md-12">
                    <h1 className="mt-30 mb-10">{postInfo.title}</h1>

                    <div id="markdown-content" dangerouslySetInnerHTML={{ __html: postHTML }} />

                    <p style={{ padding: "8% 0 12px 0" }}>
                        Thanks so much for reading— I hope you enjoyed this piece
                        and took something away to make your life more
                        meaningful and fulfilling. You can subscribe below to be notified about future posts from
                        <a href="https://winterhearth.co"> winterhearth.co</a> like
                        this one!
                    </p>
                    <a href="#wh-signup" className="primary-btn text-uppercase">
                        Join the Squad
                    </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-widgets">
              <div className="widget-wrap">
                <div className="single-sidebar-widget user-info-widget">
                  <img
                    width="120"
                    style={{ borderRadius: 100 }}
                    src={postInfo.author.imageUrl}
                    className="lazyload"
                    alt={postInfo.author.name}
                  />
                  <a href={postInfo.author.imageUrl}>
                    <h4>{postInfo.author.name}</h4>
                  </a>
                  <p>{postInfo.author.role}</p>
                  <p style={{ textAlign: "left" }}>{postInfo.author.summary}</p>
                </div>
                <PopularPostColumnWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...PostInfo
    }
  }
`;
