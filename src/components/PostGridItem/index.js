import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const PostGridItem = ({
    articleLink,
    imageUrl,
    imgAltText,
    author,
    date,
    articleTitle,
    excerpt,
}) => {
    return (
      <div className="col-lg-4 col-md-4">
        <div className="single-recent-blog">
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
          <p className="text-left">{excerpt}</p>
        </div>
      </div>
    );
};

export default PostGridItem;

