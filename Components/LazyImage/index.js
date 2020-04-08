import React from 'react';

const LazyImage = (props) => {
    return (
        <img 
            className={"img-fluid lazyload " + props.classes}
            data-src={props.dataSrc}
            style={props.style}
            src={props.src} 
            alt={props.alt} />
    );
};

export default LazyImage;