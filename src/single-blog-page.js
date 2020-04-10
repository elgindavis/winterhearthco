import React from 'react';
import UnsplashBadge from "../Components/UnsplashBadge";
import TagsList from "../Components/TagsList";
import WHHeader from "../Components/WHHeader";
import PostDetails from "../Components/PostDetails";
import AuthorDetails from "../Components/AuthorDetails";
import LazyImage from "../Components/LazyImage";
import LazyIFrame from "../Components/LazyIFrame";
import AuthorBlurb from "../Components/AuthorBlurb";
import PopularPostColumn from "../Components/PopularPostColumn";
import PopularPostList from "../Components/PopularPostList";
import WHFooter from "../Components/WHFooter";


const SingeBlogPage = (props) => {
        return (
            <React.Fragment>
                <WHHeader 
                    isNotRootDirectory="true"
                    changeLinkDirectory="../"
                />

                <section class="post-content-area single-post-area">
                    <div class="container">
                        <div class="row">
                            <BlogContentContainer />
                            <div class="col-lg-8 posts-list">
                                <div class="single-post row">
                                    <div class="col-lg-12">
                                        <div class="feature-img">
                                            <LazyImage 
                                                className="img-fluid lazyload"
                                                data-src="../img/blog/dog-love-600p.jpg"
                                                src="../img/blog/dog-love-300p.jpg"
                                                alt="Cute dog running toward you"
                                            />
                                            <UnsplashBadge 
                                                artistURL="https://unsplash.com/@joeyc?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" 
                                                artistName="Joe Caione"
                                                badgeTitle="Unsplash photo from Joe Caione"
                                            />
									    </div>
                                    </div>
                                    <div class="col-lg-3  col-md-3 meta-details">
                                        <TagsList 
                                            tags={["Emotional Intelligence", "Relationships", "Lifestyle"]}
                                        />
                                        <AuthorDetails 
                                            author="Elgin Davis"
                                            date="7 Feb, 2020"
                                        />
                                    </div>
                                    <div class="col-lg-9 col-md-9">
									<h3 class="mt-20 mb-20">
                                        4 Powerful Lessons Your Dog Can Teach <br/>You About Emotional Intelligence
									</h3>
									<p class="excerpt">
                                        Aside from being the "goodest good boys" on the planet, man's best friend actually has a lot to teach us— especially with respect to emotional intelligence. We may easily overlook hidden lessons, such as in the charming and excited wag of Fido's tail or the loving twinkle in Brutus' eyes as you tell him all about your day. As it turns out, you’re probably overlooking some of the most powerful lessons dogs share with us about our world. While I'm sure that there are countless EQ lessons our lovable friends have in store for us, here are 4 game-changing keys to cultivating deeper, more emotionally-intelligent relationships.
									</p>
								</div>
                                <div class="container text-center" style="margin: 24px;">
                                    <LazyImage 
                                        className="lazyload" 
                                        style="width: 80%" 
                                        data-src="https://media.makeameme.org/created/now-children-we-5b3d08.jpg"
                                    />
								</div>
                                <div class="container">
                                    <h3 class="article-header">Listening.</h3>
                                    <p>
                                        Dogs are amazing listeners. Well, most dogs. Listening is one of the most powerful tools we have for building deeper social relationships— but don't we understand that one already? As it turns out, no, we don't. The nuance here is that many people hear, but they don't listen. A phrase I love to remind myself of is that "we hear with our ears, but we listen with our hearts." The fact that the words someone is saying are registering in your brain doesn't mean that you're actually paying attention. Many dogs will sit and patiently listen to you talk, and give you their full attention, as the goodest good boys are known to do. However, just like humans, not all dogs are great listeners. Like when you tell Doug the Pug to stop scooting his butt across the carpet and he just smiles at you and keeps on scootin’— he hears you, he just isn't listening.
									</p>
                                    <div style="width:100%;height:0;padding-bottom:78%;position:relative;">
                                        <LazyIFrame 
                                                className="lazyload giphy-embed" 
                                                data-src="https://giphy.com/embed/srb6bXZHbgDsc" 
                                                width="100%" 
                                                height="100%" 
                                                style={{"position": "absolute"}}
                                                frameBorder="0" 
                                                allowFullScreen={true}
                                        />
                                    </div>
                                    <p>
                                        We unknowingly (and sometimes knowingly) do this all the time to our friends. And if you don't think people can tell when you're not really listening, it’s probably more obvious to them than you think. A major key to developing these relationships is to really listen when people speak to you. This doesn't mean you silently wait for them to stop talking so you can finally have your long-awaited turn to speak. True listening is a skill, and it’s always intentional. You should actually care what the person is talking about, and if you don't, maybe you can change the subject to something that you both find engaging. One of the worst things you can do is to tune them out and keep on scootin’ across the floor.
									</p>
                                    <h3 class="article-header">Curiosity.</h3>
                                    <p>
                                        Dogs are immensely curious, like when they want to know what will happen if they just so happen to poop in your house slippers. One of my favorite axioms from studying emotions and social interactions is that “curiosity drives empathy”. At the core of empathy is really just the inclination to ask meaningful questions about the other person— for example: "How might she feel if I said this? What could I have said that made him so angry? Am I stepping in the middle of some unresolved issue?" The list could go on forever, and that is exactly the point. If you're looking to foster more solid social relationships, ask more questions that go below the surface. Ask how your actions make the other person feel (literally, ask the question), and really listen to the answers and make any necessary adjustments. Channeling your curious spirit can break down barriers and increase mutual understanding.
									</p>
                                    <p>
                                        When meeting a new person I'll often ask them what their hopes and dreams are, bypassing the traditional, lackluster icebreaker questions that we’re all accustomed to and bored of. Be curious. Be a little playful. Show some genuine interest. The more curious you are and the more personalized questions you ask, the more time you’re spending intentionally thinking about that person, their wants, needs, desires, fears, and everything else. This can help you to find more in common, to open the gates to share interesting stories, and to actually demonstrate your interest in developing the relationship as a whole.
									</p>
                                    <div class="text-center" style="width:50%;height:0;padding-bottom:70%;position:relative;">
                                        <LazyIFrame 
                                            className="lazyload giphy-embed" 
                                            data-src="https://giphy.com/embed/xT39DdCseASAd2yaPe" 
                                            width="100%" 
                                            height="100%" 
                                            style={{"position":"absolute"}} 
                                            frameBorder="0" 
                                            allowFullScreen={true}
                                        />
                                        
                                    </div>
                                    <h3 class="article-header">Body language.</h3>
                                    <p>
                                        You've probably heard tons about body language, but few instances of it have ever been as charming as the proverbial wagging tail. Dogs show engagement, excitement, and amusement through wagging their tails. When you see the wagging tail, you know that the doggo is in a pretty positive state. Inversely, you know that when a dog has its tail tucked between its legs that it is probably afraid of something. Dogs are much less prone to hide their emotional states than humans, but we'll skip the talk about emotional vulnerability for now.
									</p>
                                    <p>
                                        Most "tips and tricks" (I wish this phrase was a slug and that I held the world's biggest salt shaker) only discuss “reading” body language, but not many focus on actually improving your own expressiveness and being intentional about letting others know, whether verbally or nonverbally, exactly how we feel. Dogs don't hide their excitement to see us when we come home after a long day of being apart, nor do they hide their disappointment when you take away the squirrel they caught in the backyard. Humans, on the other hand tend to play guessing games to make the other person have to "figure out" what they are feeling, thinking that they are teaching the other person a lesson (or something to that extent). Even if done for a decent reason, this strategy likely won’t give you the results you’re looking for. Most people are incapable of “figuring it out”, especially if they don’t have all of the relevant information (e.g. your feelings about certain behaviors) or a decent understanding of body language cues and emotional recognition.  If you're looking to build stronger relationships, expressing your emotions is a good place to start.
									</p>
                                    <div class="text-center" style="width:50%;height:0;padding-bottom:55%;position:relative;">
                                        <LazyIFrame 
                                            className="lazyload giphy-embed"
                                            data-src="https://giphy.com/embed/kiBcwEXegBTACmVOnE"
                                            width="100%"
                                            height="100%"
                                            style={{ "position": "absolute" }}
                                            frameBorder="0"
                                            allowFullScreen={true}    
                                                class="lazyload" data-src="https://giphy.com/embed/kiBcwEXegBTACmVOnE" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen
                                        />
                                    </div>
                                    <h3 class="article-header">Play.</h3>
                                    <p>
                                        If there's one  dogs are best at, it's melting our hearts. And just after that, they sure know how to play. It turns out that the joy and delight we see beaming across a pup’s face during social play is actually a moment of powerful social connection taking place. As humans, playfulness and humor allow us to navigate all sorts of sticky social situations, from heated conflict to public embarrassment. According to The Language of Emotional Intelligence by Jeanne Segal, Ph.D, mutually-shared positive experiences can “boost our mood, strengthen our resolve, and give us the incentive to sustain a positive connection with others”. She also notes that while any and all emotional sharing is able to build strong and lasting relationship bonds, sharing humor and “sheer delight” with another person adds a unique restorative and healing element to the mix, even reducing stress. Play allows us to let go of defensiveness, release our tightly-held inhibitions, and become more emotionally authentic with others and with ourselves.
									</p>
                                    <p>
                                        One of my favorite holiday memories is playing poolside card games with my cousins in Florida, which was always able to bring us closer together than watching any sporting event or movie ever did. Another example of play I’m fond of is a game I played with a friend at a live jazz concert. We would close our eyes and imagine the colorful stories the horns and guitars were painting with their music, and after the song ended, we traded our stories and enjoyed the fancy illustrations the other person was able to dream up. There is no hard-and-fast rule as to what actually counts as play— whether it be question games, word games, card games, imagined games, hide-and-seek, laser tag, catch, mutually-respectful joking, 4-square (or 2-square or 9-square or however many squares ya got), sports, “the floor is lava” (I’ll never forget the brave sacrifices made in this game), “the floor is java” (for any programming/coffee buffs out there), you name it (but not Monopoly— never Monopoly).
									</p>
                                    <h3 class="article-header">Takeaways</h3>
                                    <p>
                                        As it seems, <strong> true listening</strong>, <strong>empathic curiosity</strong>, <strong>expressive body language</strong>, and <strong>intentional play</strong> are all crucial to developing sustainable, healthy, and enjoyable relationships— as our lovable, furry friends exemplify each and every day. Whether you choose to implement any of these keys in your actual life is, of course, up to you. Emotionally-intelligent relationships, though perhaps simple in theory, are not simple in reality. They take work, effort, patience, and time. Everything you try may not necessarily be successful right away, but your loved ones are worth the challenge. If you ever need inspiration, just remember that those good boys all over the world believe in your ability to make the world a happier, safer place for everyone, one wagging tail at a time.
									</p>
                                    <p>
                                        Thanks so much for reading— I hope you enjoyed this piece and took something away to make your life better and more meaningful. You can subscribe below for future posts from <a href="https://winterhearth.co"> winterhearth.co</a> like this one!
									</p>
                                    <a href="#wh-signup" class="primary-btn text-uppercase">Join the Squad</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 sidebar-widgets">
                                <div class="widget-wrap">
                                    <div class="single-sidebar-widget user-info-widget">
                                        <AuthorBlurb 
                                            data-src="../img/profile-200p.jpg"
                                            profileImgURL="../img/profile.jpg"
                                            profileImgAlt="Elgin Davis"
                                            authorStatus="Main Content Writer"
                                            blurb="Elgin Davis is the creator of Winter Hearth Studios. Driven by a passionate spirit and boundless curiosity, Davis' work seeks to explore the depths of humanity and what it might look like to live a hyper-meaningful existence here on earth."
                                        />
                                    </div>
                                    <PopularPostColumn />
                                    <div class="single-sidebar-widget popular-post-widget">
                                        <h4 class="text-center">Popular Posts</h4>
                                        <div class="col-md-12">
                                            <hr class="title-line"/>
            				            </div>
                                        <div class="popular-post-list">
                                            <PopularPostList 
                                                featuredArticleList={[4,3,2]} // Get top articles by ID
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
			</section>
            <WHFooter />
            </React.Fragment>
        );
    }
}

const domContainer = document.querySelector('#single-blog-root');
ReactDOM.render(e(SingeBlogPage), domContainer);

