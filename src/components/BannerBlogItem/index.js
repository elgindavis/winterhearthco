import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default (props) => {
    return (
      <section
        className="banner-area relative blog-home-banner"
        id="home"
        style={{
          // background: `url(${
          //   window.innerWidth < 425 ? props.mobileImg : props.imageUrl
          // }) bottom`,
          background: `url(${props.imageUrl}) bottom`,
        }}
      >
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content blog-header-content col-lg-12">
              <h1 className="text-white">{props.articleTitle}</h1>
              <p className="text-white">{props.articleDescription}</p>
              <AniLink 
                paintDrip 
                hex="#f0f8ff" 
                direction="up" 
                to={props.articleLink} 
                style={{ borderRadius: 4 }} 
                className="primary-btn">
                Read Article
              </AniLink>
            </div>
          </div>
        </div>
      </section>
    );
};