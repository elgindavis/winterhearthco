import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const elginSummary =
  "Elgin Davis is the creator of Winter Hearth Studios. Driven by a passionate spirit and boundless curiosity, Davis' work seeks to explore the depths of humanity and what it might look like to live a hyper-meaningful existence here on earth.";

export default ({ posts, postInfo }) => {
  return (
    <div className="col-lg-4 sidebar-widgets">
      <div className="widget-wrap">
        <div className="single-sidebar-widget user-info-widget">
          <img
            width="120"
            style={{ borderRadius: 100 }}
            src={
              postInfo?.author?.imageUrl
                ? postInfo.author.imageUrl
                : "/img/profile-200p.jpg"
            }
            className="lazyload"
            alt={postInfo?.author?.name ? postInfo.author.name : "Elgin Davis"}
          />
          <h4 style={{ paddingTop: 20 }}>
            {postInfo?.author?.name ? postInfo.author.name : "Elgin Davis"}
          </h4>
          <p>{postInfo?.author?.role}</p>
          <p style={{ textAlign: "left" }}>{postInfo?.author?.summary ? postInfo?.author?.summary : elginSummary }</p>
        </div>
        <div
          name="popular-post-column"
          className="single-sidebar-widget popular-post-widget"
        >
          <h4 className="text-center">Popular Posts</h4>
          <hr className="title-line mt-10" />
          <div className="popular-post-list">
            {posts.map((post) => {
              return (
                <span key={post.id}>
                  <div
                    className="single-post-list d-flex flex-row align-items-center"
                    style={{ marginTop: 24 }}
                  >
                    <div className="thumb">
                      <AniLink
                        paintDrip
                        hex="#f0f8ff"
                        direction="up"
                        to={post.articleLink}
                      >
                        <img
                          style={{ borderRadius: 4, height: "80%" }}
                          className=""
                          src={post.imageUrl}
                          alt={post.imageAltText}
                        />
                      </AniLink>
                    </div>
                  </div>
                  <div className="">
                    <div className="details">
                      <AniLink
                        paintDrip
                        hex="#f0f8ff"
                        direction="up"
                        to={post.articleLink}
                        style={{
                          // marginBottom: 0,
                          color: "var(--color-text)",
                        }}
                      >
                        <h6>{post.title}</h6>
                      </AniLink>
                      <p
                        style={{
                          fontSize: 14,
                          lineHeight: "1.3rem",
                          margin: "4px 0",
                        }}
                      >
                        {post.description}
                      </p>
                    </div>
                  </div>
                  <div style={{ padding: "40px 0" }}>
                    <AniLink
                      paintDrip
                      hex="#f0f8ff"
                      direction="up"
                      to={post.articleLink}
                      className="secondary-btn"
                    >
                      Read Article
                    </AniLink>
                  </div>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
