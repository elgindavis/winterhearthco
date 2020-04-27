import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import PostGridItem from "../components/PostGridItem";

export default () => {
  return (
    <Layout
      keywords={
        "how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,"
      }
      image="https://winterhearth.co/img/aubbie-knight.png"
      imageAlt="Winter Hearth Studios"
      url="https://winterhearth.co/about"
      title="Home"
      description="Winter Hearth Studios is a quirky and charming creative studio that designs content to make your life better. We cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!"
    >
      <section
        style={{ padding: "12% 0" }}
        className="home-hero-image section-gap"
      >
        <div className="">
          <div
            style={{ margin: "10% 0% 0% 3%" }}
            className="row align-items-center justify-content-between text-white"
          >
            <div className="col-lg-8 col-md-8 banner-left">
              <h1 className="text-white">
                Change the heart, <br />
                change the world.
              </h1>
              <p>
                We're Winter Hearth Studios, and we're just getting fired up.
              </p>
              <Link to="/blog/" className="primary-btn text-uppercase">
                See Latest Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End banner Area --> */}
      {/* <!-- Start recent-blog Area --> */}
      <section
        style={{ paddingBottom: 0 }}
        className="recent-blog-area section-gap"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 pb-30 header-text">
              <h1>Latest content</h1>
            </div>
          </div>
          <div id="latest-posts-row" className="row">
            {/* <!-- The images need to be 3:2 ratio --> */}
            <PostGridItem
              className="col-lg-4 col-md-4"
              authorimageUrl="/img/profile-200p.jpg"
              author="Elgin Davis"
              date="5th Apr, 2020"
              articleTitle="Pandemics and the Quest for Good News"
              imageUrl="img/blog/good-news-home.jpg"
              articleLink="/blog/pandemics-and-good-news"
              imgAltText="Good News Newspaper"
              excerpt="In this world there will be troubles... And good news makes those troubles seem smaller, right?"
            >
              <img
                src="img/blog/good-news-home.jpg"
                alt="Good News Newspaper"
              />
            </PostGridItem>
            <PostGridItem
              className="col-lg-4 col-md-4"
              authorimageUrl="/img/profile-200p.jpg"
              author="Elgin Davis"
              date="30th Mar, 2020"
              articleTitle="Why “Being Happy” Isn't a Real Goal"
              imageUrl="/img/blog/happy-sign-home.jpg"
              articleLink="/blog/why-being-happy-isnt-a-real-goal"
              imgAltText="Happy neon sign"
              excerpt="'Life, Liberty, and the pursuit of Happiness'... But why?"
            >
              <img
                src="/img/blog/happy-sign-home.jpg"
                alt="Happy neon sign"
              />
            </PostGridItem>
            <PostGridItem
              className="col-lg-4 col-md-4"
              authorimageUrl="/img/profile-200p.jpg"
              author="Elgin Davis"
              date="11th Feb, 2020"
              articleTitle="Why You’ll Never Get What You Deserve"
              imageUrl="/img/blog/sunset-path.jpg"
              articleLink="/blog/why-you-will-never-get-what-you-deserve"
              imgAltText="Man walking alone on a path at sunset"
              excerpt="Though life is full of various opportunities and possibilities, you'll never get the ones you really deserve. Here's why:"
            >
              <img
                src="/img/blog/sunset-path.jpg"
                alt="Man walking alone on a path at sunset"
              />
            </PostGridItem>
            <PostGridItem
              className="col-lg-4 col-md-4"
              authorimageUrl="/img/profile-200p.jpg"
              author="Elgin Davis"
              date="7th Feb, 2020"
              articleTitle="4 Powerful Lessons Your Dog Can <br> Teach You About EQ"
              imageUrl="/img/blog/dog-love.jpg"
              articleLink="/blog/4-powerful-lessons-dogs-teach-about-eq"
              imgAltText="Wow, look at that happy pup"
              excerpt="Dogs melt our hearts every day, but it turns out there's a lot they can teach us, too."
            >
              <img
                src="/img/blog/dog-love.jpg"
                alt="Wow, look at that happy pup"
              />
            </PostGridItem>
            <PostGridItem
              className="col-lg-4 col-md-4"
              authorimageUrl="/img/profile-200p.jpg"
              author="Elgin Davis"
              date=""
              articleTitle="The Gift of Gratitude"
              imageUrl="/img/freshh-connection-M4lve6jR26E-unsplash.jpg"
              articleLink="/newsletters/volume-1/gift-of-gratitude"
              imgAltText="The Gift of Gratitude"
              excerpt=""
            >
              <img
                src="/img/freshh-connection-M4lve6jR26E-unsplash.jpg"
                alt="The Gift of Gratitude"
              />
            </PostGridItem>
            <PostGridItem
              className="col-lg-4 col-md-4"
              authorimageUrl="/img/profile-200p.jpg"
              author="Elgin Davis"
              date=""
              articleTitle="OCD"
              imageUrl="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/03700ba8-06bc-47ae-9448-0fb81ee6518d.jpg"
              articleLink="/newsletters/volume-2/dmh-ocd"
              imgAltText="OCD"
              excerpt="Preferring to keep things neat and tidy doesn't mean you have OCD. Here's the scoop on OCD— what is it, and what do you need to know about it?"
            >
              <img
                src="https://gallery.mailchimp.com/82935dc1a750f772912d12316/images/03700ba8-06bc-47ae-9448-0fb81ee6518d.jpg"
                alt="OCD"
              />
            </PostGridItem>
          </div>
        </div>
      </section>
      {/* <!-- end recent-blog Area --> */}
      <section className="section-gap">
        <div className="text-center">
          <span>
            <Link
              style={{ margin: "12px 16px" }}
              to="/blog/"
              className="primary-btn text-uppercase"
            >
              See All Blogs
            </Link>
            <Link
              style={{ margin: "12px 16px" }}
              to="/newsletters/"
              className="primary-btn text-uppercase"
            >
              See Newsletters
            </Link>
          </span>
        </div>
      </section>
      {/* <!-- Start home-about Area --> */}
      <section className="home-about-area">
        <div className="container" style={{ paddingTop: "5%" }}>
          <div className="row align-items-center justify-content-between">
            <div
              className="col-lg-4 col-md-4 home-about-right"
              style={{ paddingBottom: "4rem" }}
            >
              {/* <!-- <h6>About Me</h6> --> */}
              <h1 className="text-uppercase">What fuels us</h1>
              <p>
                We're a creative studio dedicated to sparking meaningful change
                around mental and emotional health. We fully believe that if you
                can change the heart, you can change the world.
              </p>
              <Link to="/about" className="primary-btn text-uppercase">
                Read Our Story
              </Link>
            </div>
            <div className="col-lg-8 col-md-8 home-about-left">
              <Link to="/img/aubbie-knight.jpg">
                <img
                  className="/img-fluid"
                  src="/img/aubbie-knight.jpg"
                  alt="Aubbie the Brave Knight"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End home-about Area --> */}

      {/* <!-- Start home-about Area --> */}
      <section className="home-about-area pt-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              className="col-lg-4 col-md-4 home-about-right"
              style={{ paddingBottom: "4rem" }}
            >
              {/* <!-- <h6>About Me</h6> --> */}
              <h1 className="text-uppercase">What we do</h1>
              <p>
                We believe in the power of storytelling as a central unifier in
                our shared human experience. <br /> From web comics to video
                games, podcasts to videos, blog posts and beyond— we aim to
                inspire, educate, and enrich people all over the world with the
                tools they need to become more mentally and emotionally
                powerful.
              </p>
              <Link to="/blog/" className="primary-btn text-uppercase">
                See latest posts
              </Link>
            </div>
            <div className="col-lg-7 col-md-7 home-about-left">
              <Link to="/img/aubbie-writing.png">
                <img
                  className="/img-fluid"
                  src="/img/aubbie-writing.png"
                  alt="Aubbie writing a story at a desk"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}