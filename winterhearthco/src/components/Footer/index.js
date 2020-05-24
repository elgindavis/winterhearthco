import React from 'react'

const Footer = () => {
    return (
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
                                onClick={() => { console.log("Need to add cookie prefs functionality") }}>Manage Cookie Preferences</button>
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
    )
}

export default Footer;