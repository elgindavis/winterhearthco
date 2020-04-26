import React from 'react';
import { Link } from 'gatsby';

const PostGridItem = (props) => {
    // console.log(props);
    return (
        <div className="col-lg-4 col-md-4">
            <div className="single-recent-blog">
                <div className="thumb">
                    <Link target="_blank" rel="noopener noreferrer" to={props.articleLink}>
                        {/* <img
                            style={{ "borderRadius": "4px" }}
                            className="f-img img-fluid mx-auto "
                            src={props.imgURL}
                            alt={props.imgAltText} /> */}
                            {props.children}
                    </Link>
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                        <img
                            style={{ "height": "30px", "borderRadius": "20px" }}
                            className="img-fluid "
                            src={props.authorImgURL}
                            alt={props.author} />
                        <Link target="_blank" rel="noopener noreferrer" to={props.articleLink}>
                            <span>by {props.author}</span>
                        </Link>
                    </div>
                    <div className="meta">
                        {props.date}
                    </div>
                </div>
                <Link to={props.articleLink}>
                    <h4 style={{ "marginTop": "8px" }}>{props.articleTitle}</h4>
                </Link>
                <p>
                    {props.excerpt}
                </p>
            </div>
        </div>
    );
};

export default PostGridItem;