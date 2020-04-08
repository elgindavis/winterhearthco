import React from 'react';

const UnsplashBadge = (props) => {
    return (
        <a 
            href={props.artistURL}
            target="_blank" 
            rel="noopener noreferrer" 
            title={props.badgeTitle}
            style={{
                "backgroundColor": "black",
                "color": "white",
                "textDecoration": "none",
                "padding": "4px 6px",
                "fontFamily": "-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif", 
                "fontSize": "12px", 
                "fontWeight": "bold", 
                "lineHeight": "1.2", 
                "display": "inline-block",
                "borderRadius": "3px"
            }}
        >
            <span 
                style={{
                    "display": "inline-block", 
                    "padding": "2px 3px"
                }}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 32 32"
                    style={{
                        "height": "12px",
                         "width": "auto",
                         "position": "relative",
                         "verticalAlign": "middle",
                         "top": "-2px",
                         "fill": "white" 
                    }}
                >
                    <title>unsplash-logo</title>
                    <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                </svg>
            </span>
            <span style={{ "display": "inline-block", "padding": "2px 3px"}}>{props.artistName}</span>
        </a>
    );
}

export default UnsplashBadge;