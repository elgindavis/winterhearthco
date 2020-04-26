import React from 'react';
import { Link } from "gatsby";

export default (props) => {
    console.log(props);
    return (
      <section
        className="banner-area relative blog-home-banner"
        id="home"
        style={{
          background: `url(${
            window.innerWidth < 425 ? props.mobileImg : props.imgURL
          }) bottom`,
        }}
      >
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content blog-header-content col-lg-12">
              <h1 className="text-white">{props.articleTitle}</h1>
              <p className="text-white">{props.articleDescription}</p>
              <Link to={props.articleLink} className="primary-btn">
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
};