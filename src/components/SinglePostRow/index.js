import React from "react";
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Area = styled.div`
    padding: 40px 12px;
    border:  4px solid var(--color-${({ type }) => type});
    border-radius: 4px;
    margin: 0 12px 40px;
`;

export default (props) => {
    return (
      <Area type={props.color} className="single-post row">
        <div className="col-lg-12 col-md-12">
          <div className="feature-img">
            <AniLink
              paintDrip
              hex="#f0f8ff"
              direction="up"
              to={props.articleLink}
            >
              <img
                style={{ borderRadius: 4 }}
                className="img-fluid lazyload"
                src={props.imageUrl}
                alt={props.imageAltText}
              />
            </AniLink>
          </div>
          <AniLink
            paintDrip
            hex="#f0f8ff"
            direction="up"
            className="posts-title"
            to={props.articleLink}
            style={{
              color: "var(--color-text)",
              textDecoration: "none",
            }}
          >
            <h3 style={{ maxWidth: 350 }}>{props.articleTitle}</h3>
          </AniLink>
          <div className="user-details row">
            <p className="user-name col-lg-12 col-md-12">
              <span style={{ marginRight: 8 }}>By {props.author}</span>
              <span style={{ float: "right" }}>
                <small>{props.date}</small>
              </span>
            </p>
          </div>
          <div>
            <hr className="title-line" />
          </div>
          <p className="excerpt">{props.excerpt}</p>
          <div className="pb-20">
            <small className="excerpt">
              Tags:{" "}
              {props.tags.map((tag, index) => {
                  return (
                    <a key={tag} href={`/tags/${tag.toLowerCase().replace(" ", "-")}`}>
                      {tag + (index < props.tags.length - 1 ? ", " : "")}
                    </a>
                  );
              })}
            </small>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <AniLink
              paintDrip
              hex="#f0f8ff"
              direction="up"
              to={props.articleLink}
              className="primary-btn"
            >
              Read Article
            </AniLink>
          </div>
        </div>
      </Area>
    );};