import React from 'react';

const SafeLink = (props) => {
    return (
        <a href={props.to} target="_blank" rel="noopener noreferrer">{props.text}</a>
    )
};

export default SafeLink;