import React from 'react';
import { setPostTags } from '../../utils';

const BlogPostMetadata = (props) => {
    return (
      <div className="col-lg-12 col-md-12 row">
        <div className="col-lg-12 col-md-12 meta-details" style={{ padding: 0, margin: "0 12px 0 0" }}>
          <p className="user-name col-lg-12 col-md-12 col-6">
            <span style={{ margin: "0 12px 0 0" }}>{props.author}</span>
            {/* <i className="fa fa-user lnr lnr-user"></i> */}
          </p>
          <p className="date col-lg-12 col-md-12 col-6">
            <span style={{ margin: "0 12px 0 0" }}>{props.date}</span>
            {/* <span className="lnr lnr-calendar-full"></span> */}
          </p>
          <p className="col-lg-12 col-md-12">
            Tags:&nbsp;
            <span style={{ margin: "0 12px 0 0" }} className="tags">
              {
                setPostTags(props.tags)
                
              }
            </span>
          </p>
        </div>
      </div>
    )
}

export default BlogPostMetadata;