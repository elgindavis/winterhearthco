import React from "react";
import { Link } from "gatsby";
import { setPostTags } from '../../utils';

export default (props) => {
    
    return(
    <div className="single-post row">
        <div className="col-lg-3  col-md-3 meta-details">
            <span>Tags: </span>
            <ul className="tags">
                {
                    setPostTags(props.tags)
                }
            </ul>
            <div className="user-details row">
                <p className="user-name col-lg-12 col-md-12 col-6">
                    {
                        props.hasAuthorURL ? 
                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href={props.authorURL}
                                style={{marginRight: 8}}
                            > {props.author}</a> 
                            : <span style={{ marginRight: 8 }}>
                                {props.author}
                            </span>
                    } 
                    <span className="lnr lnr-user"></span>
                </p>
                <p className="date col-lg-12 col-md-12 col-6">
                    <span>{props.date}</span> <span className="lnr lnr-calendar-full"></span>
                </p>
            </div>
        </div>
        <div className="col-lg-9 col-md-9 ">
            <div className="feature-img">
                <Link to={props.articleLink}>
                    <img style={{borderRadius: 4}} className="img-fluid lazyload" src={props.imageUrl} alt={props.imgAltText}/></Link>
			</div>
            <Link className="posts-title" to={props.articleLink}><h3>{props.articleTitle}</h3></Link>
                <p className="excerpt">
                    {props.excerpt}
                </p>
            <Link to={props.articleLink} className="primary-btn">Read Article</Link>
            </div>
        </div>
    )};