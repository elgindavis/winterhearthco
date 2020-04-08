import React from 'react';

const Footer = (props) => {
    return (
        <>
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
                        <div style={{"padding": "40px 0"}}>
                            <button 
                                style={{
                                    "background": "black",
                                     "width": "165px",
                                     "height": "30px",
                                     "border-radius": "3px",
                                     "border": "1px solid black",
                                     "font-family": "Roboto, Arial",
                                     "font-size": "10px",
                                     "color": "white",
                                     "font-weight": "600",
                                     "box-sizing": "border-box",
                                     "cursor": "pointer",
                                     "padding": "0",
                                     "outline": "none",
                                }} 
                                onClick="displayPreferenceModal()">Manage Cookie Preferences</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6 text-white" id="wh-signup">
                        <div className="single-footer-widget">
                            <h4>Newsletter</h4>
                            <p>Stay updated with our latest content</p>
                        </div>
                            <div id="mc_embed_signup" className="text-white" style={{"width": "90%"}}>
                                <form 
                                    style={{"padding": "0"}} 
                                    action="https://campaign-archive.us19.list-manage.com/subscribe/post?u=82935dc1a750f772912d12316&amp;id=31c5d4e468" 
                                    method="post" 
                                    id="mc-embedded-subscribe-form" 
                                    name="mc-embedded-subscribe-form" 
                                    className="validate" 
                                    target="_blank" 
                                    novalidate>

                                    <div id="mc_embed_signup_scroll">
                                        <div className="mc-field-group">
                                            <label className="form-label" for="mce-FNAME">First Name <span className="asterisk" style={{"marginRight": "24px"}}></span>
                                            </label>
                                            <input className="input-fields required" type="text" value="" name="FNAME" id="mce-FNAME"/>
                                        </div>
                                        <div className="mc-field-group ">
                                            <label className="form-label" for="mce-EMAIL">Email Address <span className="asterisk"></span>
                                            </label>
                                            <input className="input-fields required email" type="email" value="" name="EMAIL" id="mce-EMAIL"/>
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" style={{"display": "none"}}></div>
                                            <div className="response" id="mce-success-response" style={{"display": "none"}}>
                                                You're all set! Check your inbox for your first email :)
                                            </div>
                                            <div style={{"position": "absolute", "left": "-5000px"}} aria-hidden="true">
                                                <input type="text" name="b_82935dc1a750f772912d12316_31c5d4e468" tabindex="-1" value=""/>
                                            </div>
                                            <div className="clear">
                                                <button style={{"margin": "40px 0"}} type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" className="primary-btn">JOIN THE SQUAD
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="response" id="signup-success" style={{"display": "none"}}>
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
            {/* TODO - Add functionality back for mailchimp validation here */}
            {/* <script type='text/javascript' src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script> */}
            {/* <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
            </>
    );
};

export default Footer;