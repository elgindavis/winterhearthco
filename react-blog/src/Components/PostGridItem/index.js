import React from 'react';
import LazyImage from '../LazyImage';

const PostGridItem = (props) => {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="single-recent-blog">
                <div className="thumb">
                    <a target="_blank" rel="noopener noreferrer" href={props.articleLink}>
                        <img 
                            style={{"borderRadius": "4px"}} 
                            className="f-img img-fluid mx-auto lazyload" 
                            data-src={props.imgURL} 
                            alt={props.imgAltText}/> 
                    </a>
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                        <img 
                            style={{"height": "30px", "borderRadius": "20px"}} 
                            className="img-fluid lazyload" 
                            data-src={props.authorImgURL} 
                            alt={props.author}/>
                        <a target="_blank" rel="noopener noreferrer" href={props.articleLink}>
                            <span>by {props.author}</span>
                        </a>
                    </div>
                    <div className="meta">
                        {props.date}
                    </div>
                </div>
                <a href={props.articleLink}>
                    <h4 style={{"marginTop": "8px"}}>{props.articleTitle}</h4>
                </a>
                <p>
                    {props.excerpt}
                </p>
            </div>
        </div>
    );
};

export default PostGridItem;