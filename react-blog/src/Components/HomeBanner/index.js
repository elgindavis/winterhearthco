import React from 'react';

const HomeBanner = (props) => {
    return (
        <section style={{"padding": "12% 0"}} className="home-hero-image section-gap">
            <div className="">
                <div style={{"margin": "10% 0% 0% 3%"}} className="row align-items-center justify-content-between text-white">
                    <div className="col-lg-8 col-md-8 banner-left">
                        <h1 className="text-white">Change the heart, <br/>change the world.</h1>
                        <p>
                            We're Winter Hearth Studios, and we're just getting fired up.
                        </p>
                        <a href="blog/" className="primary-btn text-uppercase">See Latest Posts</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;