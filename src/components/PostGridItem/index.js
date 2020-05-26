import React from 'react';
import { Link } from 'gatsby';

const PostGridItem = ({
    articleLink,
    imageUrl,
    imgAltText,
    author,
    date,
    articleTitle,
    excerpt,
}) => {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="single-recent-blog">
                <div className="thumb">
                    <Link to={articleLink}>
                        <img // Images should be 3:2 aspect ratio
                            style={{ height: 'auto', width: '100%', borderRadius: 8 }}
                            src={imageUrl}
                            alt={imgAltText} />
                    </Link>
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                    <div>
                        <img
                            style={{ height: 30, borderRadius: 20 }}
                            src={author.imageUrl ? author.imageUrl : '/img/profile-200p.jpg'}
                            alt={author.name} />
                        <Link to={articleLink}>
                            <span>by {author.name}</span>
                        </Link>
                    </div>
                    <div className="meta">
                        {date}
                    </div>
                </div>
                <Link to={articleLink}>
                    <h4 style={{ marginTop: 8 }}>{articleTitle}</h4>
                </Link>
                <p>
                    {excerpt}
                </p>
            </div>
        </div>
    );
};

export default PostGridItem;

