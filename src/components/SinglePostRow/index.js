import React from "react";
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { getImageWithSize } from '../../utils';

const Area = styled.div`
    padding: 40px 12px;
    border:  4px solid var(--color-${({ type }) => type});
    border-radius: 4px;
    margin: 0 12px 40px;
`;

export default ({
  articleLink,
  imageUrl,
  imageAltText,
  author,
  date,
  articleTitle,
  contentType,
  excerpt,
  tags,
  color,
  host,
  cover,
}) => {
  return (
    <Area type={color} className="single-post row">
      <div className="col-lg-12 col-md-12">
        <div className="feature-img">
          <AniLink paintDrip hex="#f0f8ff" direction="up" to={articleLink}>
            <img
              style={{ borderRadius: 4, maxHeight: 600 }}
              className="img-fluid lazyload"
              src={
                cover
                  ? getImageWithSize(imageUrl, "cover")
                  : getImageWithSize(imageUrl, "600p")
              }
              alt={imageAltText}
            />
          </AniLink>
        </div>
        <AniLink
          paintDrip
          hex="#f0f8ff"
          direction="up"
          className="posts-title"
          to={articleLink}
          style={{
            color: "var(--color-text)",
            textDecoration: "none",
          }}
        >
          <h3 style={{ maxWidth: 350 }}>{articleTitle}</h3>
        </AniLink>
        <div className="user-details row">
          <p className="user-name col-lg-12 col-md-12">
            <span style={{ marginRight: 8 }}>By {author}</span>
            <span style={{ float: "right" }}>
              <small>{date}</small>
            </span>
          </p>
        </div>
        <div>
          <hr className="title-line" />
        </div>
        <p className="excerpt">{excerpt}</p>
        <div className="pb-20">
          <small className="excerpt">
            Tags:{" "}
            {tags.map((tag, index) => {
              return (
                <a
                  key={tag}
                  href={`/tags/${tag.toLowerCase().replace(" ", "-")}`}
                >
                  {tag + (index < tags.length - 1 ? ", " : "")}
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
            to={articleLink}
            className="primary-btn"
          >
            Read Article
          </AniLink>
        </div>
      </div>
    </Area>
  );
};