import { Link } from "gatsby"
import PropTypes from "prop-types"
import { theme } from '../theme';
import { GlobalStyles } from '../global';
import { Burger, Menu } from './index';
import { ThemeProvider } from 'styled-components';
import React, { useState, useRef } from "react";

import SEO from './seo'

import "../styles/linearicons.css"
import "../styles/main.css"
import "../styles/bootstrap.min.css"
import "../styles/linearicons.css"

const Layout = ((props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "menu-panel";

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO 
        description={props.description}
        lang={props.lang}
        meta={props.meta}
        title={props.title}
        imageUrl={props.imageUrl}
        author={props.author}
        imageAlt={props.imageAlt}
        keywords={props.keywords}
        url={props.url}
      />

      <header id="header">
        <div className="container main-menu">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link to="/" aria-label="Winter Hearth Home Page Icon">
                <img
                  style={{ "maxHeight": "56px" }}
                  src={"/img/logo-100p.jpg"}
                  alt="Winter Hearth Logo"
                  title="Winter Hearth Logo"
                />
              </Link>
            </div>
            <nav>
              <div id="menu-panel" ref={node}>
                {/* <FocusLock disabled={!open}> */}
                  <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                  <Menu open={open} setOpen={setOpen} id={menuId} />
                {/* </FocusLock> */}
              </div>
              <div id="nav-menu-container">
                <ul className="nav-menu">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">Our Story</Link></li>
                  <li><Link to="/podcast">Podcast</Link></li>
                  <li><Link to="/blog/">Blog</Link></li>
                  <li><Link to="/games/">Games</Link></li>
                  <li><Link to="/newsletters/">Newsletters</Link></li>
                </ul >
              </div>
            </nav>
          </div >
        </div >
      </header>

      {props.children}

      <footer id="wh-footer" className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-sm-6">
              <div className="single-footer-widget text-white">
                <h4>Winter Hearth Studios</h4>
                <p>
                  Change the heart, change the world.
                            </p>
                <p className="footer-text">
                    Copyright &copy;2020 Winter Hearth Studios; All rights reserved
                </p>
              </div>
              <div style={{ "padding": "40px 0" }}>
                <button
                  style={{
                    "background": "black",
                    "width": "165px",
                    "height": "30px",
                    "borderRadius": "3px",
                    "border": "1px solid black",
                    "fontFamily": "Roboto, Arial",
                    "fontSize": "10px",
                    "color": "white",
                    "fontWeight": "600",
                    "boxSizing": "border-box",
                    "cursor": "pointer",
                    "padding": "0",
                    "outline": "none",
                  }}
                  onClick={() => {console.log("Need to add cookie prefs functionality")}}>Manage Cookie Preferences</button>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6 text-white" id="wh-signup">
              <div className="single-footer-widget">
                <h4>Newsletter</h4>
                <p>Stay updated with our latest content</p>
              </div>
              <div id="mc_embed_signup" className="text-white" style={{ "width": "90%" }}>
                <form
                  style={{ "padding": "0" }}
                  action="https://campaign-archive.us19.list-manage.com/subscribe/post?u=82935dc1a750f772912d12316&amp;id=31c5d4e468"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate>

                  <div id="mc_embed_signup_scroll">
                    <div className="mc-field-group">
                      <label className="form-label" htmlFor="mce-FNAME">First Name <span className="asterisk" style={{ "marginRight": "24px" }}></span>
                      </label>
                      <input className="input-fields required" type="text" defaultValue="" name="FNAME" id="mce-FNAME" />
                    </div>
                    <div className="mc-field-group ">
                      <label className="form-label" htmlFor="mce-EMAIL">Email Address <span className="asterisk"></span>
                      </label>
                      <input className="input-fields required email" type="email" defaultValue="" name="EMAIL" id="mce-EMAIL" />
                    </div>
                    <div id="mce-responses" className="clear">
                      <div className="response" id="mce-error-response" style={{ "display": "none" }}></div>
                      <div className="response" id="mce-success-response" style={{ "display": "none" }}>
                        You're all set! Check your inbox for your first email :)
                                            </div>
                      <div style={{ "position": "absolute", "left": "-5000px" }} aria-hidden="true">
                        <input type="text" name="b_82935dc1a750f772912d12316_31c5d4e468" tabIndex="-1" defaultValue="" />
                      </div>
                      <div className="clear">
                        <button style={{ "margin": "40px 0" }} type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" className="primary-btn">JOIN THE SQUAD
                                                </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="response" id="signup-success" style={{ "display": "none" }}>
                You're all set! Check your inbox for your first email :)
                            </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
              <div className="single-footer-widget">
                <h4>Social Media Coming Soon!</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
});

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  author: `Winter Hearth Studios`,
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  url: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Layout;