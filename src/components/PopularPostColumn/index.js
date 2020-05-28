import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({ posts }) => {
    return (
        <div className="single-sidebar-widget popular-post-widget">
            <h4 className="text-center">Popular Posts</h4>
            <hr className="title-line mt-10"/>
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
    )
};
