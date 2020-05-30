import React from 'react';

const BlogPostMetadata = (props) => {
    return (
      <div className="col-lg-12 col-md-12 row">
        <div
          className="col-lg-12 col-md-12 meta-details"
          style={{ padding: 0, margin: "0 12px 0 0" }}
        >
          <p className="user-name col-lg-12 col-md-12 col-12">
            <span>By {props.author}</span>
            <span style={{ float: "right" }}>
              <small>{props.date}</small>
            </span>
          </p>
          <p className="col-lg-12 col-md-12">
            <small className="excerpt">Tags: {props.tags.join(", ")}</small>
          </p>
        </div>
      </div>
    );
}

export default BlogPostMetadata;