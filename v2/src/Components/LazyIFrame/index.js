import React from 'react';

const LazyIFrame = (props) => {
    let styles = props.styles;
    styles.position = "absolute";

    return (
        <iframe
            className={"img-fluid lazyload " + props.classes} 
            data-src={props.dataSrc}
            title={props.title}
            style={styles}
            frameBorder="0" 
            width="100%"
            height="100%" 
            allowFullScreen>
        </iframe>
    );
};

export default LazyIFrame;