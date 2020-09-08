import React from 'react';

const BlogPostMetadata = (props) => {
    return (
      <div className="col-lg-12 col-md-12 row">
        <div
          className="col-lg-12 col-md-12 meta-details"
          style={{ padding: 0, margin: "0 12px 0 0" }}
        >
          {props.author ? (
            <p className="user-name col-lg-12 col-md-12 col-12">
              <span>
                {`By ${props.author}`}{/* {props.host && `With ${props.host}`} */}
              </span>
              <span style={{ float: "right" }}>
                <small>{props.date}</small>
              </span>
            </p>
          ) : (
            <div className="col-lg-12 col-md-12 col-12">
              <small>{props.date}</small>
            </div>
          )}
          <p className="col-lg-10 col-md-10">
            <small className="excerpt">
              Tags:{" "}
              {props.tags.map((tag, index) => {
                return (
                  <a
                    key={tag}
                    href={`/tags/${tag.toLowerCase().replace(" ", "-")}`}
                  >
                    {tag + (index < props.tags.length - 1 ? ", " : "")}
                  </a>
                );
              })}
            </small>
          </p>
        </div>
      </div>
    );
}

export default BlogPostMetadata;