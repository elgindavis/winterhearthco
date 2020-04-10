var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var SingeBlogPage = function (_React$Component) {
    _inherits(SingeBlogPage, _React$Component);

    function SingeBlogPage(props) {
        _classCallCheck(this, SingeBlogPage);

        var _this = _possibleConstructorReturn(this, (SingeBlogPage.__proto__ || Object.getPrototypeOf(SingeBlogPage)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(SingeBlogPage, [{
        key: "render",
        value: function render() {
            var _React$createElement, _React$createElement2, _React$createElement3;

            return React.createElement(
                React.Fragment,
                null,
                React.createElement("wh-header", {
                    isNotRootDirectory: "true",
                    changeLinkDirectory: "../"
                }),
                React.createElement(
                    "section",
                    { "class": "post-content-area single-post-area" },
                    React.createElement(
                        "div",
                        { "class": "container" },
                        React.createElement(
                            "div",
                            { "class": "row" },
                            React.createElement(
                                "div",
                                { "class": "col-lg-8 posts-list" },
                                React.createElement(
                                    "div",
                                    { "class": "single-post row" },
                                    React.createElement(
                                        "div",
                                        { "class": "col-lg-12" },
                                        React.createElement(
                                            "div",
                                            { "class": "feature-img" },
                                            React.createElement("img", { "class": "img-fluid lazyload", "data-src": "../img/blog/dog-love-600p.jpg", src: "../img/blog/dog-love-300p.jpg", alt: "Cute dog running toward you" }),
                                            React.createElement(
                                                "a",
                                                { style: "background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px", href: "https://unsplash.com/@joeyc?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge", target: "_blank", rel: "noopener noreferrer", title: "Unsplash photo from Joe Caione" },
                                                React.createElement(
                                                    "span",
                                                    { style: "display:inline-block;padding:2px 3px" },
                                                    React.createElement(
                                                        "svg",
                                                        { xmlns: "http://www.w3.org/2000/svg", style: "height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white", viewBox: "0 0 32 32" },
                                                        React.createElement(
                                                            "title",
                                                            null,
                                                            "unsplash-logo"
                                                        ),
                                                        React.createElement("path", { d: "M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z" })
                                                    )
                                                ),
                                                React.createElement(
                                                    "span",
                                                    { style: "display:inline-block;padding:2px 3px" },
                                                    "Joe Caione"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "col-lg-3  col-md-3 meta-details" },
                                        React.createElement(
                                            "ul",
                                            { "class": "tags" },
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    null,
                                                    "Emotional Intelligence,"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    null,
                                                    "Relationships,"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    null,
                                                    "Lifestyle,"
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            "div",
                                            { "class": "user-details row" },
                                            React.createElement(
                                                "p",
                                                { "class": "user-name col-lg-12 col-md-12 col-6" },
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Elgin Davis"
                                                ),
                                                " ",
                                                React.createElement("span", { "class": "lnr lnr-user" })
                                            ),
                                            React.createElement(
                                                "p",
                                                { "class": "date col-lg-12 col-md-12 col-6" },
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "7 Feb, 2020"
                                                ),
                                                " ",
                                                React.createElement("span", { "class": "lnr lnr-calendar-full" })
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "col-lg-9 col-md-9" },
                                        React.createElement(
                                            "h3",
                                            { "class": "mt-20 mb-20" },
                                            "4 Powerful Lessons Your Dog Can Teach ",
                                            React.createElement("br", null),
                                            "You About Emotional Intelligence"
                                        ),
                                        React.createElement(
                                            "p",
                                            { "class": "excerpt" },
                                            "Aside from being the \"goodest good boys\" on the planet, man's best friend actually has a lot to teach us\u2014 especially with respect to emotional intelligence. We may easily overlook hidden lessons, such as in the charming and excited wag of Fido's tail or the loving twinkle in Brutus' eyes as you tell him all about your day. As it turns out, you\u2019re probably overlooking some of the most powerful lessons dogs share with us about our world. While I'm sure that there are countless EQ lessons our lovable friends have in store for us, here are 4 game-changing keys to cultivating deeper, more emotionally-intelligent relationships."
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "container text-center", style: "margin: 24px;" },
                                        React.createElement("img", { "class": "lazyload", style: "width: 80%", "data-src": "https://media.makeameme.org/created/now-children-we-5b3d08.jpg" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "container" },
                                        React.createElement(
                                            "h3",
                                            { "class": "article-header" },
                                            "Listening."
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Dogs are amazing listeners. Well, most dogs. Listening is one of the most powerful tools we have for building deeper social relationships\u2014 but don't we understand that one already? As it turns out, no, we don't. The nuance here is that many people hear, but they don't listen. A phrase I love to remind myself of is that \"we hear with our ears, but we listen with our hearts.\" The fact that the words someone is saying are registering in your brain doesn't mean that you're actually paying attention. Many dogs will sit and patiently listen to you talk, and give you their full attention, as the goodest good boys are known to do. However, just like humans, not all dogs are great listeners. Like when you tell Doug the Pug to stop scooting his butt across the carpet and he just smiles at you and keeps on scootin\u2019\u2014 he hears you, he just isn't listening."
                                        ),
                                        React.createElement(
                                            "div",
                                            { style: "width:100%;height:0;padding-bottom:78%;position:relative;" },
                                            React.createElement("iframe", (_React$createElement = { "class": "lazyload", "data-src": "https://giphy.com/embed/srb6bXZHbgDsc", width: "100%", height: "100%", style: "position:absolute", frameBorder: "0" }, _defineProperty(_React$createElement, "class", "giphy-embed"), _defineProperty(_React$createElement, "allowFullScreen", true), _React$createElement))
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "We unknowingly (and sometimes knowingly) do this all the time to our friends. And if you don't think people can tell when you're not really listening, it\u2019s probably more obvious to them than you think. A major key to developing these relationships is to really listen when people speak to you. This doesn't mean you silently wait for them to stop talking so you can finally have your long-awaited turn to speak. True listening is a skill, and it\u2019s always intentional. You should actually care what the person is talking about, and if you don't, maybe you can change the subject to something that you both find engaging. One of the worst things you can do is to tune them out and keep on scootin\u2019 across the floor."
                                        ),
                                        React.createElement(
                                            "h3",
                                            { "class": "article-header" },
                                            "Curiosity."
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Dogs are immensely curious, like when they want to know what will happen if they just so happen to poop in your house slippers. One of my favorite axioms from studying emotions and social interactions is that \u201Ccuriosity drives empathy\u201D. At the core of empathy is really just the inclination to ask meaningful questions about the other person\u2014 for example: \"How might she feel if I said this? What could I have said that made him so angry? Am I stepping in the middle of some unresolved issue?\" The list could go on forever, and that is exactly the point. If you're looking to foster more solid social relationships, ask more questions that go below the surface. Ask how your actions make the other person feel (literally, ask the question), and really listen to the answers and make any necessary adjustments. Channeling your curious spirit can break down barriers and increase mutual understanding."
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "When meeting a new person I'll often ask them what their hopes and dreams are, bypassing the traditional, lackluster icebreaker questions that we\u2019re all accustomed to and bored of. Be curious. Be a little playful. Show some genuine interest. The more curious you are and the more personalized questions you ask, the more time you\u2019re spending intentionally thinking about that person, their wants, needs, desires, fears, and everything else. This can help you to find more in common, to open the gates to share interesting stories, and to actually demonstrate your interest in developing the relationship as a whole."
                                        ),
                                        React.createElement(
                                            "div",
                                            { "class": "text-center", style: "width:50%;height:0;padding-bottom:70%;position:relative;" },
                                            React.createElement("iframe", (_React$createElement2 = { "class": "lazyload", "data-src": "https://giphy.com/embed/xT39DdCseASAd2yaPe", width: "100%", height: "100%", style: "position:absolute", frameBorder: "0" }, _defineProperty(_React$createElement2, "class", "giphy-embed"), _defineProperty(_React$createElement2, "allowFullScreen", true), _React$createElement2))
                                        ),
                                        React.createElement(
                                            "h3",
                                            { "class": "article-header" },
                                            "Body language."
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "You've probably heard tons about body language, but few instances of it have ever been as charming as the proverbial wagging tail. Dogs show engagement, excitement, and amusement through wagging their tails. When you see the wagging tail, you know that the doggo is in a pretty positive state. Inversely, you know that when a dog has its tail tucked between its legs that it is probably afraid of something. Dogs are much less prone to hide their emotional states than humans, but we'll skip the talk about emotional vulnerability for now."
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Most \"tips and tricks\" (I wish this phrase was a slug and that I held the world's biggest salt shaker) only discuss \u201Creading\u201D body language, but not many focus on actually improving your own expressiveness and being intentional about letting others know, whether verbally or nonverbally, exactly how we feel. Dogs don't hide their excitement to see us when we come home after a long day of being apart, nor do they hide their disappointment when you take away the squirrel they caught in the backyard. Humans, on the other hand tend to play guessing games to make the other person have to \"figure out\" what they are feeling, thinking that they are teaching the other person a lesson (or something to that extent). Even if done for a decent reason, this strategy likely won\u2019t give you the results you\u2019re looking for. Most people are incapable of \u201Cfiguring it out\u201D, especially if they don\u2019t have all of the relevant information (e.g. your feelings about certain behaviors) or a decent understanding of body language cues and emotional recognition.  If you're looking to build stronger relationships, expressing your emotions is a good place to start."
                                        ),
                                        React.createElement(
                                            "div",
                                            { "class": "text-center", style: "width:50%;height:0;padding-bottom:55%;position:relative;" },
                                            React.createElement("iframe", (_React$createElement3 = { "class": "lazyload", "data-src": "https://giphy.com/embed/kiBcwEXegBTACmVOnE", width: "100%", height: "100%", style: "position:absolute", frameBorder: "0" }, _defineProperty(_React$createElement3, "class", "giphy-embed"), _defineProperty(_React$createElement3, "allowFullScreen", true), _React$createElement3))
                                        ),
                                        React.createElement(
                                            "h3",
                                            { "class": "article-header" },
                                            "Play."
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "If there's one  dogs are best at, it's melting our hearts. And just after that, they sure know how to play. It turns out that the joy and delight we see beaming across a pup\u2019s face during social play is actually a moment of powerful social connection taking place. As humans, playfulness and humor allow us to navigate all sorts of sticky social situations, from heated conflict to public embarrassment. According to The Language of Emotional Intelligence by Jeanne Segal, Ph.D, mutually-shared positive experiences can \u201Cboost our mood, strengthen our resolve, and give us the incentive to sustain a positive connection with others\u201D. She also notes that while any and all emotional sharing is able to build strong and lasting relationship bonds, sharing humor and \u201Csheer delight\u201D with another person adds a unique restorative and healing element to the mix, even reducing stress. Play allows us to let go of defensiveness, release our tightly-held inhibitions, and become more emotionally authentic with others and with ourselves."
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "One of my favorite holiday memories is playing poolside card games with my cousins in Florida, which was always able to bring us closer together than watching any sporting event or movie ever did. Another example of play I\u2019m fond of is a game I played with a friend at a live jazz concert. We would close our eyes and imagine the colorful stories the horns and guitars were painting with their music, and after the song ended, we traded our stories and enjoyed the fancy illustrations the other person was able to dream up. There is no hard-and-fast rule as to what actually counts as play\u2014 whether it be question games, word games, card games, imagined games, hide-and-seek, laser tag, catch, mutually-respectful joking, 4-square (or 2-square or 9-square or however many squares ya got), sports, \u201Cthe floor is lava\u201D (I\u2019ll never forget the brave sacrifices made in this game), \u201Cthe floor is java\u201D (for any programming/coffee buffs out there), you name it (but not Monopoly\u2014 never Monopoly)."
                                        ),
                                        React.createElement(
                                            "h3",
                                            { "class": "article-header" },
                                            "Takeaways"
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "As it seems, ",
                                            React.createElement(
                                                "strong",
                                                null,
                                                " true listening"
                                            ),
                                            ", ",
                                            React.createElement(
                                                "strong",
                                                null,
                                                "empathic curiosity"
                                            ),
                                            ", ",
                                            React.createElement(
                                                "strong",
                                                null,
                                                "expressive body language"
                                            ),
                                            ", and ",
                                            React.createElement(
                                                "strong",
                                                null,
                                                "intentional play"
                                            ),
                                            " are all crucial to developing sustainable, healthy, and enjoyable relationships\u2014 as our lovable, furry friends exemplify each and every day. Whether you choose to implement any of these keys in your actual life is, of course, up to you. Emotionally-intelligent relationships, though perhaps simple in theory, are not simple in reality. They take work, effort, patience, and time. Everything you try may not necessarily be successful right away, but your loved ones are worth the challenge. If you ever need inspiration, just remember that those good boys all over the world believe in your ability to make the world a happier, safer place for everyone, one wagging tail at a time."
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Thanks so much for reading\u2014 I hope you enjoyed this piece and took something away to make your life better and more meaningful. You can subscribe below for future posts from ",
                                            React.createElement(
                                                "a",
                                                { href: "https://winterhearth.co" },
                                                " winterhearth.co"
                                            ),
                                            " like this one!"
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#wh-signup", "class": "primary-btn text-uppercase" },
                                            "Join the Squad"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { "class": "col-lg-4 sidebar-widgets" },
                                React.createElement(
                                    "div",
                                    { "class": "widget-wrap" },
                                    React.createElement(
                                        "div",
                                        { "class": "single-sidebar-widget user-info-widget" },
                                        React.createElement("img", { width: "120", style: "border-radius: 100px;", "data-src": "../img/profile-200p.jpg", "class": "lazyload", alt: "Elgin Davis" }),
                                        React.createElement(
                                            "a",
                                            { href: "../img/profile.jpg" },
                                            React.createElement(
                                                "h4",
                                                null,
                                                "Elgin Davis"
                                            )
                                        ),
                                        React.createElement(
                                            "p",
                                            null,
                                            "Main Content Writer"
                                        ),
                                        React.createElement(
                                            "p",
                                            { style: "text-align: left;" },
                                            "Elgin Davis is the creator of Winter Hearth Studios. Driven by a passionate spirit and boundless curiosity, Davis' work seeks to explore the depths of humanity and what it might look like to live a hyper-meaningful existence here on earth."
                                        )
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "single-sidebar-widget popular-post-widget" },
                                        React.createElement(
                                            "h4",
                                            { "class": "text-center" },
                                            "Popular Posts"
                                        ),
                                        React.createElement(
                                            "div",
                                            { "class": "col-md-12" },
                                            React.createElement("hr", { "class": "title-line" })
                                        ),
                                        React.createElement(
                                            "div",
                                            { "class": "popular-post-list" },
                                            React.createElement("popular-post-item", {
                                                articleTitle: "4 Lessons Your Dog Can Teach <br> You About EQ",
                                                imgUrl: "../img/blog/dog-love-300p.jpg",
                                                articleLink: "4-powerful-lessons-dogs-teach-about-eq",
                                                imgAltText: "Wow, look at that happy pup",
                                                articleDescription: "Dogs melt our hearts every day, but it turns out there's a lot they can teach us, too."
                                            }),
                                            React.createElement("popular-post-item", {
                                                articleTitle: "Why You\u2019ll Never Get What You Deserve",
                                                imgUrl: "../img/blog/sunset-path-300p.jpg",
                                                articleLink: "why-you-will-never-get-what-you-deserve",
                                                imgAltText: "Man walking alone on a path at sunset",
                                                articleDescription: "Though life is full of various opportunities and possibilities, you'll never get the ones you really deserve. Here's why:"
                                            })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement("wh-footer", null)
            );
        }
    }]);

    return SingeBlogPage;
}(React.Component);

var domContainer = document.querySelector('#single-blog-root');
ReactDOM.render(e(SingeBlogPage), domContainer);