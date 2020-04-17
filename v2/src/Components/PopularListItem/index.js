import React from 'react';
import LazyImage from '../LazyImage';

const PopularListItem = (props) => {
    return (
        <>
            <div className="single-post-list d-flex flex-row align-items-center" style={{"marginTop": "24px"}}>
                <div className="thumb">
                    <a href={props.articleLink}>
                        <LazyImage
                            style={{"bordeRadius": "4px", "height": "80%"}} 
                            dataSrc={props.imgURL}
                            alt={props.imgAltText}
                        />
                    </a>
                </div>
            </div>
            <div>
                <div className="details">
                    <a href={props.articleLink}><h6>{props.articleTitle}</h6></a>
                    <p style={{"fontSize": "14px", "lineHeight": "1.3rem", "margin": "4px 0"}}>{props.articleDescription}</p>
                </div>
            </div>
        </>
    );
};

export default PopularListItem;