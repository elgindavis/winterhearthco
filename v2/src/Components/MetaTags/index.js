import React from 'react';

const MetaTags = (props) => {
    return (
        <>
            <meta name="author" content="Winter Hearth Studios"/>

            <meta name="keywords" content={props.keywords}/>
            <meta name="keywords" content="how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,"/>

            <meta property="og:image" content={props.imgURL} />
            <meta property="image" content={props.imgURL} />

            <meta name="description" content={props.description} />
            <meta property="og:description" content={props.description} />

            <meta property="title" content={props.pageTitle} />
            <meta property="og:title" content={props.pageTitle} />
        </>
    );
};

export default MetaTags;