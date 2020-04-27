import React from 'react';

const BlogPostMetadata = (props) => {
    return (
      <div className="col-lg-12 col-md-12 row">
        <div className="col-lg-4 col-md-4 meta-details" style={{ padding: 0 }}>
          <p className="user-name col-lg-12 col-md-12 col-6">
            <span style={{ margin: "0 12px 0 0" }}>{props.author}</span>
            <span className="lnr lnr-user"></span>
          </p>
          <p className="date col-lg-12 col-md-12 col-6">
            <span style={{ margin: "0 12px 0 0" }}>{props.date}</span>
            <span className="lnr lnr-calendar-full"></span>
          </p>
        </div>
        <div className="col-lg-8 col-md-8 meta-details">
          <p
            style={{ padding: "0 0 23px 0" }}
            className="col-lg-12 col-md-12 col-6"
          >
            <span></span>
          </p>
          <p style={{ padding: "0 0 4px 0" }}>
            Tags:&nbsp;
            <span className="tags">
              {props.tags.split(", ").map((tag, index) => {
                return index !== props.tags.split(", ").length - 1 ? (
                  <span key={index}>{tag},&nbsp;</span>
                ) : (
                  <span key={index}>{tag}</span>
                )
              })}
            </span>
          </p>
        </div>
      </div>
    )
}

export default BlogPostMetadata;