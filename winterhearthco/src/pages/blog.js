import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import PostGridItem from "../components/PostGridItem";
import SinglePostRow from "../components/SinglePostRow";
import BannerBlogItem from "../components/BannerBlogItem";
import PopularPostColumn from "../components/PopularPostColumn";
import { transformPostQueryData } from "../utils";

export default ({ data: { allMarkdownRemark: { edges } }}) => {
    const allPosts = transformPostQueryData(edges);
    const featuredPostList = allPosts.filter(post => post.featured === true);
    const newsletterVolTwoList = allPosts.filter(post => post.newsletterVolume === "2");
    const newsletterVolOneList = allPosts.filter(post => post.newsletterVolume === "1");
    console.log(featuredPostList)
    console.log(newsletterVolTwoList)
    console.log(allPosts)
    return (
        <Layout
            keywords={"blog, emotional intelligence, mental health, emotional health"}
            imageUrl="/img/aubbie-crystal-ball.png"
            imageAlt="Winter Hearth Studios Blog"
            url="https://winterhearth.co/blog"
            title="Blog"
            description="Your emotions are now your superpower— Welcome to the future. In the Winter Hearth Blog we go where others refuse to go. We seek out all truths – not just those that make us comfortable. Unlocking the greatest secrets and strengths of humanity wont be easy, but it will be worth it."
        >
            <BannerBlogItem
                articleTitle="Pandemics and the Quest for Good News"
                articleDescription="In this world there will be troubles... And good news makes those troubles seem smaller, right?"
                articleLink="/blog/pandemics-and-good-news"
                imageUrl="/img/blog/good-news-banner.jpg"
                mobileimageUrl=""
            >
            </BannerBlogItem>

            <section style={{marginTop: 90}} className="post-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 posts-list">
                            {
                                featuredPostList.map((edition) => {
                                    return (
                                        <SinglePostRow
                                            key={edition.id}
                                            author={edition.author.name}
                                            date={edition.date}
                                            tags={edition.tags}
                                            articleTitle={edition.title}
                                            imageUrl={edition.imageUrl}
                                            articleLink={edition.articleLink}
                                            imgAltText={edition.imgAltText}
                                            excerpt={edition.description}
                                        ></SinglePostRow>
                                    );
                                })
                            }
                            {/* <SinglePostRow
                                author="Elgin Davis"
                                date="5 Apr, 2020"
                                tags={["Emotions, Pandemics, Good News, Lifestyle"]}
                                imageUrl="/img/blog/good-news-600p.jpg"
                                imgAltText="Good News Newspaper"
                                articleLink="/blog/pandemics-and-good-news"
                                authorURL="https://elgindavis.studio"
                                articleTitle="Pandemics and the Quest for Good News"
                                excerpt="In this world there will be troubles... And good news makes those troubles seem smaller, right?"
                            >
                            </SinglePostRow>

                            <SinglePostRow
                                author="Elgin Davis"
                                date="30 Mar, 2020"
                                tags={["Emotions, Happiness, Lifestyle"]}
                                imageUrl="/img/blog/happy-sign-600p.jpg"
                                imgAltText="Happy neon sign"
                                articleLink="/blog/why-being-happy-isnt-a-real-goal"
                                authorURL="https://elgindavis.studio"
                                articleTitle="Why “Being Happy” Isn't a Real Goal"
                                excerpt="'Life, Liberty, and the pursuit of Happiness'... But why?"
                            >
                            </SinglePostRow>

                            <SinglePostRow
                                author="Elgin Davis"
                                date="11 Feb, 2020"
                                tags={["Mindset, Perspective, Lifestyle"]}
                                imageUrl="/img/blog/sunset-path-600p.jpg"
                                imgAltText="Man walking alone on a path at sunset"
                                articleLink="/blog/why-you-will-never-get-what-you-deserve"
                                authorURL="https://elgindavis.studio"
                                articleTitle="Why You’ll Never Get What You Deserve"
                                excerpt="Though life is full of various opportunities and possibilities, you'll never get the ones you really deserve. Here's why:"
                            >
                            </SinglePostRow>

                            <SinglePostRow
                                author="Elgin Davis"
                                date="7 Feb, 2020"
                                tags={["Emotional Intelligence, Relationships,Lifestyle"]}
                                imageUrl="/img/blog/dog-love-600p.jpg"
                                imgAltText="Wow, look at that happy pup"
                                articleLink="/blog/4-powerful-lessons-dogs-teach-about-eq"
                                authorURL="https://elgindavis.studio"
                                articleTitle="4 Powerful Lessons Your Dog Can Teach You About EQ"
                                excerpt="Dogs melt our hearts every day, but it turns out there's a lot they can teach us, too."
                            >
                            </SinglePostRow> */}
                            
                        </div>

                        <div className="col-lg-4 sidebar-widgets">
                            <div className="widget-wrap">
                                <div className="single-sidebar-widget search-widget">
                                </div>
                                <div className="single-sidebar-widget user-info-widget">
                                    <img width="120" style={{borderRadius: 100}} src="/img/profile-200p.jpg" className="lazyload" alt="Elgin Davis" />
                                    <Link to="/img/profile.jpg"><h4>Elgin Davis</h4></Link>
                                    <p>
                                        Main Content Writer
                                    </p>

                                    <p style={{textAlign: "left"}}>
                                        Elgin Davis is the creator of Winter Hearth Studios. Driven by a passionate spirit and boundless curiosity, Davis' work seeks to explore the depths of humanity and what it might look like to live a hyper-meaningful existence here on earth.
                                    </p>
                                </div>
                                <div className="single-sidebar-widget popular-post-widget">
                                    <h4 className="text-center">Popular Posts</h4>
                                    <div className="col-md-12">
                                        <hr className="title-line"/>
                                    </div>
                                        <PopularPostColumn/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>	
                </section>

            <section className="recent-blog-area pt-60">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 pb-30 header-text">
                            <h1>From the Newsletter Archives</h1>
                            <h3>Epic Life Playbook Volume 2: Demystifying Mental Health</h3>
                            <p>	
                                "Mental Health Monsters" Series Artwork by Toby Allen
                                
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {
                            newsletterVolTwoList.map((edition) => {
                                return (
                                    <PostGridItem
                                        key={edition.id}
                                        author={edition.author}
                                        date={edition.date}
                                        articleTitle={edition.title}
                                        imageUrl={edition.imageUrl}
                                        articleLink={edition.articleLink}
                                        imgAltText={edition.imgAltText}
                                        excerpt={edition.excerpt}
                                    ></PostGridItem>
                                );
                            })
                        }
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Autism"
                            imageUrl="/img/newsletters/autism-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-autism"
                            imgAltText="Autism"
                            excerpt="Take a moment to learn more about our friends with autism and how you can be a better supporter and ally in the community."
                        >
                            <img src="/img/newsletters/autism-400p.jpg" alt="Autism" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Depression"
                            imageUrl="/img/newsletters/depression-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-depression"
                            imgAltText="Depression"
                            excerpt="Depression is more complex than most people take it to be. Find out more about Depression, how it works, and how to help those who struggle with it."
                        >
                            <img src="/img/newsletters/depression-400p.jpg" alt="Depression" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Post-traumatic Stress Disorder"
                            imageUrl="/img/newsletters/ptsd-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-ptsd"
                            imgAltText="Post-traumatic Stress Disorder"
                            excerpt="So many people all over the world are affected by PTSD, but when was the last time we paused to reflect on what PTSD really encompasses?"
                        >
                            <img src="/img/newsletters/ptsd-400p.jpg" alt="Post-traumatic Stress Disorder" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Bipolar Disorder"
                            imageUrl="/img/newsletters/bipolar-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-bipolar"
                            imgAltText="Bipolar Disorder"
                            excerpt="Though many choose to believe that Bipolar Disorder is as simple as being 'happy' one day and 'sad' the next, this is not actually the case. What is Bipolar Disorder, and why is it so misunderstood?"
                        >
                            <img src="/img/newsletters/bipolar-400p.jpg" alt="Bipolar Disorder" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Anorexia Nervosa"
                            imageUrl="/img/newsletters/anorexia-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-anorexia"
                            imgAltText="Anorexia Nervosa"
                            excerpt="What is it about Anorexia that makes it so powerful, and how does it work?"
                        >
                            <img src="/img/newsletters/anorexia-400p.jpg" alt="Anorexia Nervosa" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Body Dysmorphic Disorder"
                            imageUrl="/img/newsletters/bdd-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-bdd"
                            imgAltText="Body Dysmorphic Disorder"
                            excerpt="Many of us have something that we wish we could change about our appearances and other similar insecurities, but those qualms don't always necessarily disrupt our daily lives. This is the case of BDD:"
                        >
                            <img src="/img/newsletters/bdd-400p.jpg" alt="Body Dysmorphic Disorder" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Schizophrenia"
                            imageUrl="/img/newsletters/schizophrenia-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-schizophrenia"
                            imgAltText="Schizophrenia"
                            excerpt="According to research, Schizophrenia is the most chronic and disabling of the major mental illnesses. What exactly is Schizophrenia and how does it work? Let's find out:"
                        >
                            <img src="/img/newsletters/schizophrenia-400p.jpg" alt="Schizophrenia" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Sleep Disorder"
                            imageUrl="/img/newsletters/sleep-disorder-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-sleep-disorder"
                            imgAltText="Sleep Disorder"
                            excerpt="Falling asleep at 3am for the fourth time this week? Do you struggle to feel rested after a night's sleep? It may very well be a Sleep Disorder:"
                        >
                            <img src="/img/newsletters/sleep-disorder-400p.jpg" alt="Sleep Disorder" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Social Anxiety"
                            imageUrl="/img/newsletters/social-anxiety-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-social-anxiety"
                            imgAltText="Social Anxiety"
                            excerpt="What's the difference between social anxiety, regular anxiety, and anxiety disorders? Check out this edition to learn more:"
                        >
                            <img src="/img/newsletters/social-anxiety-400p.jpg" alt="Social Anxiety" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="ADHD"
                            imageUrl="/img/newsletters/adhd-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-adhd"
                            imgAltText="ADHD"
                            excerpt="People use and misuse the term &quot;ADHD&quot; all the time. What is it, and what do you need to know about it?"
                        >
                            <img src="/img/newsletters/adhd-400p.jpg" alt="ADHD" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="OCD"
                            imageUrl="/img/newsletters/ocd-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-ocd"
                            imgAltText="OCD"
                            excerpt="Preferring to keep things neat and tidy doesn't mean you have OCD. Here's the scoop on OCD— what is it, and what do you need to know about it?"
                        >
                            <img src="/img/newsletters/ocd-400p.jpg" alt="OCD" />
                        </PostGridItem>
                        <PostGridItem
                            authorimageUrl="/img/profile-200p.jpg"
                            author="Elgin Davis"
                            date=""
                            articleTitle="Anxiety"
                            imageUrl="/img/newsletters/anxiety-400p.jpg"
                            articleLink="/newsletters/volume-2/dmh-gad"
                            imgAltText="Anxiety"
                            excerpt="Do we really know what anxiety is? What about an anxiety disorder? What's the difference? Find out here:"
                        >
                            <img src="/img/newsletters/anxiety-400p.jpg" alt="Anxiety" />
                        </PostGridItem>
                    </div>
                </div>
            </section>
            <section className="section-gap">
                <div className="text-center">
                    <Link to="/newsletters/" className="primary-btn text-uppercase">See All Newsletters</Link>
                </div>
            </section>
        </Layout>
    );
}

/** 
 * To access the list of articles we have in markdown and display them, we map as usual
 *  {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}> </div>
*/
// This gets the data property onto our props parameter, and here we query for all markdown files
export const query = graphql`
         query {
           allMarkdownRemark(
             sort: { fields: [frontmatter___date], order: DESC }
           ) {
             totalCount
             edges {
               node {
                 id
                 excerpt
                 fields {
                   slug
                 }
                 frontmatter {
                   date(formatString: "MMM DD, YYYY")
                   title
                   featured
                   newsletterVolume
                   contentType
                   imageUrl
                   imageAlt
                   tags
                   keywords
                   description
                   author {
                     name
                     role
                     summary
                     imageUrl
                   }
                 }
               }
             }
           }
         }
       `