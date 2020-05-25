import React from 'react';
import { Link } from 'gatsby';

const PostGridItem = (props) => {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="single-recent-blog">
                <div className="thumb">
                    <Link target="_blank" rel="noopener noreferrer" to={props.articleLink}>
                        <img // Images should be 3:2 aspect ratio
                            style={{ height: 'auto', width: '100%', borderRadius: 8 }}
                            src={props.imageUrl}
                            alt={props.imgAltText} />
                    </Link>
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                        <img
                            style={{ height: 30, borderRadius: 20 }}
                            src={props.author.imageUrl ? props.author.imageUrl : '/img/profile-200p.jpg'}
                            alt={props.author.name} />
                        <Link target="_blank" rel="noopener noreferrer" to={props.articleLink}>
                            <span>by {props.author.name}</span>
                        </Link>
                    </div>
                    <div className="meta">
                        {props.date}
                    </div>
                </div>
                <Link to={props.articleLink}>
                    <h4 style={{ marginTop: 8 }}>{props.articleTitle}</h4>
                </Link>
                <p>
                    {props.excerpt}
                </p>
            </div>
        </div>
    );
};

export default PostGridItem;

