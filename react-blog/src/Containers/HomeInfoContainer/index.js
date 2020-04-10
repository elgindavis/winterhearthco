import React from 'react';
import LazyImage from '../../Components/LazyImage';

const HomeInfoContainer = (props) => {
    return (
        <section className={"home-about-area " + props.classes}>
            <div className="container" style={{"paddingTop": "5%"}}>
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-4 col-md-4 home-about-right" style={{"paddingBottom": "4rem"}}>
                        <h1 className="text-uppercase">{props.title}</h1>
                        <p>
                            {props.text}
                        </p>
                        <a href={props.link} className="primary-btn text-uppercase text-white">{props.buttonText}</a>
                    </div>
                    <div className="col-lg-8 col-md-8 home-about-left">
                        <a href={props.imgURL}>
                            <LazyImage 
                                dataSrc={props.imgURL}
                            />
                        </a>
                    </div>
                </div>
            </div>	
        </section>
    );
};

export default HomeInfoContainer;