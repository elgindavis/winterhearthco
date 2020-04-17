import React from 'react';

const AuthorBlurb = (props) => {
    return (
        <div className="single-sidebar-widget user-info-widget">
            <img
                width="120"
                className="lazyload" 
                style={{ "borderRadius": "100px" }}
                data-src={props.authorImgURL}
                alt={props.authorName} />
            <a href={props.authorImgURL}>
                <h4>{props.authorName}</h4>
            </a>
            <p>
                {props.authorStatus}
            </p>
            <p style={{ "textAlign": "left" }}>
                {props.blurb}
            </p>
        </div>
    );
};

export default AuthorBlurb;