import React from 'react';
import AuthorBlurb from '../AuthorBlurb';
import PopularPostList from '../PopularPostList';

const PopularPostClolumn = (props) => {
    return (
        <div className="col-lg-4 sidebar-widgets">
            <div className="widget-wrap">
                <AuthorBlurb
                    profileImgURL={props.profileImgURL}
                    authorName={props.authorName}
                    authorStatus={props.authorStatus}
                    blurb={props.blurb}
                />
                
                <div className="single-sidebar-widget popular-post-widget">
                    <h4 className="text-center">Popular Posts</h4>
                    <div className="col-md-12">
                        <hr className="title-line" />
                    </div>
                    <PopularPostList featuredArticleList={props.popularPostIDList}/>
                </div>
            </div>
        </div>
    );
};

export default PopularPostClolumn;