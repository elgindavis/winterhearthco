class WHFooter extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();

	}

	connectedCallback() {
	}
	disconnectedCallback() {
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
	} 
}

customElements.define('wh-footer', class extends WHFooter {
  connectedCallback() {

  	// console.log(this.isNotRootDirectory);
    this.innerHTML = `
    <footer id="wh-footer" class="footer-area section-gap">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-6 col-sm-6">
                            <div class="single-footer-widget text-white">
                                <h4>Winter Hearth Studios</h4>
                                <p>
                                    Change the heart, change the world.
                                </p>
                                <p class="footer-text"><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;2020 All rights reserved | This template is made by <a href="https://colorlib.com" rel="noopener" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
                            </div>
                            <div style="padding: 40px 0;">
                                <button style="background: black; width: 165px; height: 30px; border-radius: 3px; border: 1px solid black; font-family: Roboto, Arial; font-size: 10px; color: white; font-weight: 600; box-sizing: border-box; cursor: pointer; padding: 0; outline: none;" onclick="displayPreferenceModal()">Manage Cookie Preferences</button>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-6 text-white" id="wh-signup">
                           <div class="single-footer-widget">
                                <h4>Newsletter</h4>
                                <p>Stay updated with our latest content</p>
								<!-- <div class="" id="mc_embed_signup">
									 <form action="https://campaign-archive.us19.list-manage.com/subscribe/post?u=82935dc1a750f772912d12316" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
									  <div class="input-group">
									    <input type="text" class="form-control" name="EMAIL" placeholder="Enter Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email Address '" required="" type="email">
									    <div class="input-group-btn">
									      <button class="btn btn-default" type="submit">
									        <span class="lnr lnr-arrow-right"></span>
									      </button>    
									    </div>
									    	<div class="info"></div>  
									  </div>
									</form> 
								</div> -->
                            </div> 
                            <div id="mc_embed_signup" class="text-white" style="width:90%;">
                                <form style="padding: 0;" action="https://campaign-archive.us19.list-manage.com/subscribe/post?u=82935dc1a750f772912d12316&amp;id=31c5d4e468" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                
                                    <div id="mc_embed_signup_scroll">
                                        <!--< div class="indicates-required"><span class="asterisk">*</span> indicates required
                                        </div> -->
                                        <div class="mc-field-group">
                                            <label class="form-label" for="mce-FNAME">First Name  <span class="asterisk" style="margin-right:24px;"></span>
                                            </label>
                                            <input class="input-fields" type="text" value="" name="FNAME" class="required" id="mce-FNAME">
                                        </div>
                                        <div class="mc-field-group ">
                                            <label class="form-label" for="mce-EMAIL">Email Address  <span class="asterisk"></span>
                                        </label>
                                            <input class="input-fields" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
                                        </div>
                                        <div id="mce-responses" class="clear">
                                            <div class="response" id="mce-error-response" style="display:none"></div>
                                            <div class="response" id="mce-success-response" style="display:none">
                                                You're all set! Check your inbox for your first email :)
                                            </div>
                                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_82935dc1a750f772912d12316_31c5d4e468" tabindex="-1" value="">
                                            </div>
                                            <div class="clear">
                                                <button style="margin: 40px 0;" type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" class="primary-btn">JOIN THE SQUAD
                                                </button>
                                            </div>

                                        </div> 
                                    </div>
                                </form>
                            </div>
                            <div class="response" id="signup-success" style="display:none">
                                                You're all set! Check your inbox for your first email :)
                                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
                            <div class="single-footer-widget">
                                <h4>Social Media Coming Soon!</h4>
                                <!-- 
                                <p>Let us be social</p>
                                <div class="footer-social d-flex align-items-center">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-dribbble"></i></a>
                                    <a href="#"><i class="fa fa-behance"></i></a>
                                </div>
                                    -->
                            </div>
                        </div>
                    </div>
                </div>
                
            </footer>
                
            <script type='text/javascript' src='https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>

            `;
  }
});

