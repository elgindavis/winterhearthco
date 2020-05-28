import React from 'react';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Area = styled.div`
  padding: 40px 20px;
  border: 4px solid var(--color-${({ type }) => type});
  border-radius: 4px;
  margin: 20px 20px;
  
  @media (min-width: 994px) {
    max-width: 28%;
  }
  @media (max-width: 994px) {
    max-width: 33%;
  }
  @media (max-width: 768px) {
    max-width: 40%;
  }
  @media (max-width: 530px) {
    max-width: 100%;
  }
`;

const PostGridItem = ({
    articleLink,
    imageUrl,
    imgAltText,
    author,
    date,
    articleTitle,
    excerpt,
    tags,
    color,
}) => {
    return (
      <Area type={color} className="col-lg-4 col-md-4">
        <div style={{ width: "100%" }} className="single-recent-blog">
          <div className="thumb">
            <AniLink paintDrip hex="#f0f8ff" direction="up" to={articleLink}>
              <img // Images should be 3:2 aspect ratio
                style={{ height: "auto", width: "100%", borderRadius: 4 }}
                src={imageUrl}
                alt={imgAltText}
              />
            </AniLink>
          </div>
          <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <img
                style={{ height: 30, borderRadius: 20 }}
                src={
                  author.imageUrl ? author.imageUrl : "/img/profile-200p.jpg"
                }
                alt={author.name}
              />
              {/* <AniLink
                paintDrip
                hex="#f0f8ff"
                direction="up"
                to={author.imageUrl}
              > */}
              <span>by {author.name}</span>
              {/* </AniLink> */}
            </div>
            <div className="meta">{date}</div>
          </div>
          <AniLink paintDrip hex="#f0f8ff" direction="up" to={articleLink}>
            <h4 style={{ marginTop: 8 }}>{articleTitle}</h4>
          </AniLink>
        </div>
        <div>
          <p className="text-left" style={{ marginBottom: 20 }}>
            {excerpt}
          </p>
        </div>
        <div className="pb-40">
          <small className="excerpt">Tags: {tags.join(", ")}</small>
        </div>
      </Area>
    );
};

export default PostGridItem;

