import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import "../styles/linearicons.css"
import "../styles/main.css"
import "../styles/bootstrap.min.css"
import "../styles/linearicons.css"
// import { rhythm, scale } from "../utils/typography"

export default (props) => {
  console.log(props)
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="shortcut icon" href="img/fav.png" />
        <meta name="author" content="Winter Hearth Studios" />
        <meta name="keywords" content={props.keywords} />

        <meta property="og:image" content={props.image} />
        <meta property="image" content={props.image} />
        <meta property="og:image:alt" content={props.imageAlt} />
        <meta property="image:alt" content={props.imageAlt} />
        <meta property="og:url" content={props.url} />
        <meta property="url" content={props.url} />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="" />

        <meta name="description" content={props.description} />
        <meta property="og:description" content={props.description} />
        {/* {title} */}
        <meta property="title" content={props.title} /> 
        <meta property="og:title" content="Home | Winter Hearth Studios" />`
          <meta charset="UTF-8" />
        <title>{props.title}</title>

        <link href="https://fonts.googleapis.com/css?family=Poppins:200,400,300,500,600" rel="stylesheet" />
      </Helmet>

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
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Our Story</Link></li>
                <li><Link to="/blog/">Blog</Link></li>
                <li><Link to="/newsletters/">Newsletters</Link></li>
                <li><Link to="/games/">Games</Link></li>
              </ul >
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
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright &copy;2020 All rights reserved | This template is made by <a href="https://colorlib.com" rel="noopener noreferrer" target="_blank">Colorlib</a>
                  {/* {<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->} */}
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
    </>
  )

}


