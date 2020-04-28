import React from 'react';

import Layout from '../components/layout';
import PostGridItem from '../components/PostGridItem';
export default () => {
    const newsletterVolOneList = [];
    const newsletterVolTwoList = [];
    return(
        <Layout
            keywords="emotional intelligence, mental health"
            imageUrl="/img/aubbie-knight.png"
            imageAlt="Winter Hearth Studios"
            url="https://winterhearth.co/newsletters"
            title="Newsletters"
            description="The Winter Hearth Newsletters cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!" 
        >
        <section style="padding: 12% 0;" className="newsletter-hero-image section-gap">
            <div className="">
                <div style="margin: 10% 0% 0% 3%;" className="row align-items-center justify-content-between">
                    <div className="col-lg-8 col-md-8 banner-left">
                        <h1 className="text-white">
                            Winter Hearth <br/>
                            Epic Life Playbook
                        </h1>
                    </div>
                </div>
            </div>					
        </section>
        <section className="recent-blog-area pt-60" id="volume-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 pb-30 header-text">
                        <h3>Epic Life Playbook Volume 2: Demystifying Mental Health</h3> <br/>
                        <p>"Mental Health Monsters" Series Artwork by Toby Allen</p>
                    </div>
                </div>
                <div className="row">
                    {
                            newsletterVolTwoList.map((edition) => {
                            return (
                                <PostGridItem
                                    post={edition}
                                    author={edition.author}
                                    date={edition.date}
                                    articleTitle={edition.articleTitle}
                                    imageUrl={edition.imageUrl}
                                    articleLink={edition.articleLink}
                                    imgAltText={edition.imgAltText}
                                    excerpt={edition.excerpt}
                                ></PostGridItem>
                            );
                        })
                    }
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Autism"
                        imageUrl="/img/newsletters/autism-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-autism"
                        imgAltText="Autism"
                        excerpt="Take a moment to learn more about our friends with autism and how you can be a better supporter and ally in the community."
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Depression"
                        imageUrl="/img/newsletters/depression-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-depression"
                        imgAltText="Depression"
                        excerpt="Depression is more complex than most people take it to be. Find out more about Depression, how it works, and how to help those who struggle with it."
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Post-traumatic Stress Disorder"
                        imageUrl="/img/newsletters/ptsd-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-ptsd"
                        imgAltText="Post-traumatic Stress Disorder"
                        excerpt="So many people all over the world are affected by PTSD, but when was the last time we paused to reflect on what PTSD really encompasses?"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Bipolar Disorder"
                        imageUrl="/img/newsletters/bipolar-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-bipolar"
                        imgAltText="Bipolar Disorder"
                        excerpt="Though many choose to believe that Bipolar Disorder is as simple as being 'happy' one day and 'sad' the next, this is not actually the case. What is Bipolar Disorder, and why is it so misunderstood?"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Anorexia Nervosa"
                        imageUrl="/img/newsletters/anorexia-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-anorexia"
                        imgAltText="Anorexia Nervosa"
                        excerpt="What is it about Anorexia that makes it so powerful, and how does it work?"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Body Dysmorphic Disorder"
                        imageUrl="/img/newsletters/bdd-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-bdd"
                        imgAltText="Body Dysmorphic Disorder"
                        excerpt="Many of us have something that we wish we could change about our appearances and other similar insecurities, but those qualms don't always necessarily disrupt our daily lives. This is the case of BDD:"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Schizophrenia"
                        imageUrl="/img/newsletters/schizophrenia-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-schizophrenia"
                        imgAltText="Schizophrenia"
                        excerpt="According to research, Schizophrenia is the most chronic and disabling of the major mental illnesses. What exactly is Schizophrenia and how does it work? Let's find out:"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Sleep Disorder"
                        imageUrl="/img/newsletters/sleep-disorder-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-sleep-disorder"
                        imgAltText="Sleep Disorder"
                        excerpt="Falling asleep at 3am for the fourth time this week? Do you struggle to feel rested after a night's sleep? It may very well be a Sleep Disorder:"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Social Anxiety"
                        imageUrl="/img/newsletters/social-anxiety-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-social-anxiety"
                        imgAltText="Social Anxiety"
                        excerpt="What's the difference between social anxiety, regular anxiety, and anxiety disorders? Check out this edition to learn more:"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="ADHD"
                        imageUrl="/img/newsletters/adhd-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-adhd"
                        imgAltText="ADHD"
                        excerpt="People use and misuse the term &quot;ADHD&quot; all the time. What is it, and what do you need to know about it?"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="OCD"
                        imageUrl="/img/newsletters/ocd-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-ocd"
                        imgAltText="OCD"
                        excerpt="Preferring to keep things neat and tidy doesn't mean you have OCD. Here's the scoop on OCD— what is it, and what do you need to know about it?"
                    ></PostGridItem>
                    <PostGridItem 
                        author="Elgin Davis"
                        date=""
                        articleTitle="Anxiety"
                        imageUrl="/img/newsletters/anxiety-400p.jpg"
                        articleLink="/newsletters/volume-2/dmh-gad"
                        imgAltText="Anxiety"
                        excerpt="Do we really know what anxiety is? What about an anxiety disorder? What's the difference? Find out here:"
                    ></PostGridItem>
                </div>
            </div>	
        </section>

        <section className="recent-blog-area pt-60">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 pb-30 header-text">
                    <h3>Epic Life Playbook Volume 1: Winter Hearth Creative Journal</h3>
                    <br/>
                </div>
        </div>
        <div className="row">
            {
                newsletterVolOneList.map((edition) => {
                    return (
                        <PostGridItem
                            post={edition}
                            author={edition.author}
                            date={edition.date}
                            articleTitle={edition.articleTitle}
                            imageUrl={edition.imageUrl}
                            articleLink={edition.articleLink}
                            imgAltText={edition.imgAltText}
                            excerpt={edition.excerpt}
                        ></PostGridItem>
                    );
                })
            }
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="The Mask of Positivity"
                imageUrl="/img/amanda-jones-e3jKBZoRnTs-unsplash.jpg"
                articleLink="volume-1/mask-of-positivity"
                imgAltText="The Mask of Positivity"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="The Curiosity-Driven Life"
                imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/0164d703-676a-4bad-97d4-458942a01a35.jpeg"
                articleLink="volume-1/curiosity-driven-life"
                imgAltText="The Curiosity-Driven Life"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="What's in a Word?"
                imageUrl="/img/kate-kalvach-YUyueCkd7Tk-unsplash.jpg"
                articleLink="volume-1/whats-in-a-word"
                imgAltText="What's in a Word?"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="The Gift of Gratitude"
                imageUrl="/img/freshh-connection-M4lve6jR26E-unsplash.jpg"
                articleLink="volume-1/gift-of-gratitude"
                imgAltText="The Gift of Gratitude"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="Under Construction"
                imageUrl="/img/john-fornander-RAuLLauSmrY-unsplash.jpg"
                articleLink="volume-1/under-construction"
                imgAltText="Under Construction"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="Attention Capital"
                imageUrl="/img/gilles-lambert-pb_lF8VWaPU-unsplash.jpg"
                articleLink="volume-1/all-about-attention"
                imgAltText="Attention Capital"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="Overcoming Compassion Fatigue"
                imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/29b777ca-e504-4e39-a43c-919e0fbcbd87.jpg"
                articleLink="volume-1/compassion-fatigue"
                imgAltText="Overcoming Compassion Fatigue"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="Rest and Recovery"
                imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/e412343b-af3a-48fc-9b12-ad6e64dc8da2.jpg"
                articleLink="volume-1/rest-and-recovery"
                imgAltText="Rest and Recovery"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="The Pursuit of Perspective"
                imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/7bc876d1-45c7-476f-94e5-7dd5aabe6bfe.jpg"
                articleLink="volume-1/pursuit-of-perspective"
                imgAltText="The Pursuit of Perspective"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="Building Your EQ"
                imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/70851790-9a7c-4f5b-834d-7207335fe488.gif"
                articleLink="volume-1/building-your-eq"
                imgAltText="Building Your EQ"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="The Power of Emotion"
                imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/77d52e17-6790-4f6c-9689-e6e737b808fa.jpg"
                articleLink="volume-1/power-of-emotion"
                imgAltText="The Power of Emotion"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="Maximizing Your Life's Potential"
                imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/5bc0dfe5-0e20-4613-99bb-1c4d47202a33.png"
                articleLink="volume-1/maximizing-potential"
                imgAltText="Maximizing Your Life's Potential"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="Letting Go"
                imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/2b7d3f04-dbb5-4fbf-9f24-2ddb28a782d5.jpg"
                articleLink="volume-1/letting-go"
                imgAltText="Letting Go"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
                author="Elgin Davis"
                date=""
                articleTitle="De-cluttering Your Space"
                imageUrl="/img/todd-kent-onnJOfF-okU-unsplash.jpg"
                articleLink="volume-1/cluttered-space"
                imgAltText="De-cluttering Your Space"
                excerpt=""
            ></PostGridItem>
            <PostGridItem
            author="Elgin Davis"
            date=""
            articleTitle="Introduction to Winter Hearth"
            imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/5f1b1e09-225e-4503-bd60-c01cf9fbe24c.jpg"
            articleLink="volume-1/volume-1-introduction"
            imgAltText="Introduction to Winter Hearth"
            excerpt=""
        ></PostGridItem>
        </div>
        </div>
        </section>

            <section className="recent-blog-area section-gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 pb-30 header-text">
                            <h1>Epic Life Playbook Volume 1</h1>
                            <br/>
                        </div>
                    </div>
                    <div className="row">
                        <PostGridItem 
                            author="Elgin Davis"
                            date="7th Feb, 2020"
                            articleTitle="4 Powerful Lessons Your Dog Can Teach You About EQ"
                            imageUrl="/img/blog/dog-love.jpg"
                            articleLink="4-powerful-lessons-dogs-teach-about-eq"
                            imgAltText="Wow, look at that happy pup"
                            excerpt="Dogs melt our hearts every day, but it turns out there's a lot they can teach us, too."
                        >
                        </PostGridItem>

                    </div>
                </div>
            </section> 
        </Layout>
    );
};