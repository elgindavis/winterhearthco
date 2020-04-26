import React from "react";
import { Link } from "gatsby";

// Temporary copy of JSON File...
const posts = {
    "1": {
        "id": "1",
        "articleTitle": "Why You’ll Never Get What You Deserve",
        "articleLink": "/blog/why-you-will-never-get-what-you-deserve",
        "articleDescription": "Though life is full of various opportunities and possibilities, you'll never get the ones you really deserve. Here's why:",
        "imgURL": "/img/blog/sunset-path-300p.jpg",
        "imgAltText": "Man walking alone on a path at sunset",
        "date-published": "11 Feb, 2020"
    },
    "2": {
        "id": "2",
        "articleTitle": "Why “Being Happy” Isn't a Real Goal",
        "articleLink": "/blog/why-being-happy-isnt-a-real-goal",
        "articleDescription": "'Life, Liberty, and the pursuit of Happiness'... But why?",
        "imgURL": "/img/blog/happy-sign-300p.jpg",
        "imgAltText": "Happy neon sign",
        "date-published": "30 Mar, 2020"

    },
    "3": {
        "id": "3",
        "articleTitle": "Pandemics and the Quest for Good News",
        "articleLink": "/blog/pandemics-and-good-news",
        "articleDescription": "In this world there will be troubles... And good news makes those troubles seem smaller, right?",
        "imgURL": "/img/blog/good-news-300p.jpg",
        "imgAltText": "Good News Newspaper",
        "date-published": "5 Apr, 2020"
    },
    "4": {
        "id": "4",
        "articleTitle": "4 Lessons Your Dog Can Teach You About EQ",
        "articleLink": "/blog/4-powerful-lessons-dogs-teach-about-eq",
        "articleDescription": "Dogs melt our hearts every day, but it turns out there's a lot they can teach us, too.",
        "imgURL": "/img/blog/dog-love-300p.jpg",
        "imgAltText": "Wow, look at that happy pup",
        "date-published": "7 Feb, 2020"
    },
};

export default (props) => (
    <div className="popular-post-list">
        {
            Object.keys(posts).map(postNumber => {
                return(
                    <span key={postNumber}>
                        <div className="single-post-list d-flex flex-row align-items-center" style={{marginTop: 24}}>
                            <div className="thumb">
                                <Link to={posts[postNumber]["articleLink"]}>
                                    <img 
                                        style={{borderRadius: 4, height: "80%"}} 
                                        className="img-fluid lazyload" 
                                        src={`../${posts[postNumber]["imgURL"]}`} 
                                        alt={posts[postNumber]["imgAltText"]}/>
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="details">
                                <Link to={posts[postNumber]["articleLink"]}>
                                    <h6>{posts[postNumber]["articleTitle"]}</h6>
                                </Link>
                                <p style={{fontSize: 14, lineHeight: "1.3rem", margin: "4px 0"}}>
                                    {posts[postNumber]["articleDescription"]}
                                </p>
                            </div>
                        </div>
                    </span>
                );
            })
        }
    </div>
);
