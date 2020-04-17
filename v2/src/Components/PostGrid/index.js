import React from 'react';
import PostGridItem from '../PostGridItem';

const PostGrid = (props) => {
    return (
        <section style={{"paddingBottom": "0"}} className="recent-blog-area section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 pb-30 header-text">
                        <h1>Latest content</h1>
                    </div>
                </div>
                <div id="latest-posts-row" className="row">
                    {/* {<!-- The images need to be 3:2 ratio -->} */}
                    <PostGridItem 
                        authorImgURL="../../img/profile-200p.jpg" 
                        author="Elgin Davis"
                        date="5th Apr, 2020" 
                        articleTitle="Pandemics and the Quest for Good News" 
                        imgURL="../../img/blog/good-news-home.jpg"
                        articleLink="blog/pandemics-and-good-news" 
                        imgAltText="Good News Newspaper"
                        excerpt="In this world there will be troubles... And good news makes those troubles seem smaller, right?">
                    </PostGridItem>
                    <PostGridItem 
                        authorImgURL="../../img/profile-200p.jpg" 
                        author="Elgin Davis"
                        date="30th Mar, 2020" 
                        articleTitle="Why “Being Happy” Isn't a Real Goal" 
                        imgURL="../../img/blog/happy-sign-home.jpg"
                        articleLink="blog/why-being-happy-isnt-a-real-goal" 
                        imgAltText="Happy neon sign"
                        excerpt="'Life, Liberty, and the pursuit of Happiness'... But why?">
                    </PostGridItem>
                    <PostGridItem 
                        authorImgURL="../../img/profile-200p.jpg" 
                        author="Elgin Davis"
                        date="11th Feb, 2020" 
                        articleTitle="Why You’ll Never Get What You Deserve" 
                        imgURL="../../img/blog/sunset-path.jpg"
                        articleLink="blog/why-you-will-never-get-what-you-deserve" 
                        imgAltText="Man walking alone on a path at sunset"
                        excerpt="Though life is full of various opportunities and possibilities, you'll never get the ones you really deserve. Here's why:">
                    </PostGridItem>
                    <PostGridItem 
                        authorImgURL="../../img/profile-200p.jpg" 
                        author="Elgin Davis"
                        date="7th Feb, 2020" 
                        articleTitle="4 Powerful Lessons Your Dog Can Teach You About EQ"
                        imgURL="../../img/blog/dog-love.jpg" 
                        articleLink="blog/4-powerful-lessons-dogs-teach-about-eq"
                        imgAltText="Wow, look at that happy pup"
                        excerpt="Dogs melt our hearts every day, but it turns out there's a lot they can teach us, too.">
                    </PostGridItem>
                    <PostGridItem 
                        authorImgURL="../../img/profile-200p.jpg" 
                        author="Elgin Davis" 
                        date=""
                        articleTitle="The Gift of Gratitude" 
                        imgURL="../../img/freshh-connection-M4lve6jR26E-unsplash.jpg"
                        articleLink="newsletters/volume-1/gift-of-gratitude" 
                        imgAltText="The Gift of Gratitude" 
                        excerpt="">
                    </PostGridItem>
                    <PostGridItem 
                        authorImgURL="../../img/profile-200p.jpg" 
                        author="Elgin Davis" date=""
                        articleTitle="OCD"
                        imgUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/03700ba8-06bc-47ae-9448-0fb81ee6518d.jpg"
                        articleLink="newsletters/volume-2/dmh-ocd" imgAltText="OCD"
                        excerpt="Preferring to keep things neat and tidy doesn't mean you have OCD. Here's the scoop on OCD— what is it, and what do you need to know about it?">
                    </PostGridItem>
                </div>
            </div>
        </section>
    )
};

export default PostGrid;