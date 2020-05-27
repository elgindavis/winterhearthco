import React from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () => (
  <Layout
    keywords={
      "how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,"
    }
    imageUrl="https://winterhearth.co/img/aubbie-knight.png"
    imageAlt="Winter Hearth Studios"
    url="https://winterhearth.co/about"
    title="Our Story | Winter Hearth Studios"
    description="Winter Hearth Studios is a quirky and charming creative studio that designs content to make your life better. We cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!"
  >
    <title>Our Story | Winter Hearth Studios</title>
    <section
      className="home-about-area section-gap"
      style={{ paddingTop: 100 }}
    >
      <div className="container" style={{ lineHeight: "2.3rem" }}>
        <div
          className="row align-items-center justify-content-between"
          style={{ paddingTop: 80 }}
        >
          <div className="col-lg-5 col-md-6">
            <h1 className="">Our Story</h1>
            <p style={{ paddingTop: "3%" }}>
              Hey there! I'm Elgin and I'm the human behind Winter Hearth
              Studios. I started this creative studio back in 2018 as a place
              for me to dream— to dream of ways that we can connect better with
              each other as humans and ways for us to live deeper,
              hyper-meaningful, and greatly fulfilling lives for ourselves.
            </p>
          </div>
          <div className="col-lg-6 col-md-6" style={{}}>
            <img className="img-fluid lazyload" src="/img/photo-4.jpg" alt="" />
          </div>
        </div>
        <div
          className="row align-items-center justify-content-between"
          style={{ marginBottom: 12, paddingTop: 60 }}
        >
          <div className="col-lg-5 col-md-6">
            <h1 className="">Our Mission</h1>
            <p style={{ paddingTop: "3%" }}>
              Winter Hearth Studios is about being socially, mentally and
              emotionally aware, being energized for change, and showing love in
              creative and impactful ways. Our mission to is create warm,
              encouraging and insightful content to empower you to be a{" "}
              <strong style={{ color: "var(--wh-red)" }}> firestarter</strong>.
            </p>
            <p>
              We have a heart for change, and we will be that change we wish to
              see.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 home-about-right" style={{}}>
            <img className="img-fluid lazyload" src="/img/hi-5.jpg" alt="" />
          </div>
        </div>
        <div
          className="row align-items-center justify-content-between"
          style={{ paddingTop: "5%" }}
        >
          <div className="col-lg-10">
            <p>
              We want to inspire you to make a difference in the world — to
              challenge the status quo, to be the one to lend a helping hand, to
              create something that changes lives. We want you to live an epic
              story.
            </p>

            <h2 style={{ marginTop: "8%" }}> Behind the name </h2>
            <p style={{ paddingTop: "2%" }}>
              The idea behind Winter Hearth is to create a warm sense of home
              amidst the biting cold and chaos. The "hearth" is where the fire
              is. It's where we go to be restored, reinvigorated, and
              revitalized. It's where we find the power in our voices, the
              motivation to overcome, and the inspiration to create something
              awesome.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="home-about-area">
      <div className="container" style={{ paddingTop: "5%" }}>
        <div className="row align-items-center justify-content-between">
          <div
            className="col-lg-4 col-md-4 home-about-right"
            style={{ paddingBottom: "4rem" }}
          >
            <h1 className="text-uppercase">What fuels us</h1>
            <p>
              We're a creative studio dedicated to sparking meaningful change
              around mental and emotional health. We fully believe that if you
              can change the heart, you can change the world.
            </p>
            <AniLink paintDrip hex="#f0f8ff" direction="up" to="/about" className="primary-btn text-uppercase">
              Read Our Story
            </AniLink>
          </div>
          <div className="col-lg-8 col-md-8 home-about-left">
            <AniLink paintDrip hex="#f0f8ff" direction="up" to="/img/aubbie-knight.jpg">
              <img
                className="/img-fluid"
                src="/img/aubbie-knight.jpg"
                alt="Aubbie the Brave Knight"
              />
            </AniLink>
          </div>
        </div>
      </div>
    </section>

    <section className="home-about-area pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div
            className="col-lg-4 col-md-4 home-about-right"
            style={{ paddingBottom: "4rem" }}
          >
            <h1 className="text-uppercase">What we do</h1>
            <p>
              We believe in the power of storytelling as a central unifier in
              our shared human experience. <br /> From web comics to video
              games, podcasts to videos, blog posts and beyond— we aim to
              inspire, educate, and enrich people all over the world with the
              tools they need to become more mentally and emotionally powerful.
            </p>
            <AniLink paintDrip hex="#f0f8ff" direction="up" to="/blog/" className="primary-btn text-uppercase">
              See latest posts
            </AniLink>
          </div>
          <div className="col-lg-7 col-md-7 home-about-left">
            <AniLink paintDrip hex="#f0f8ff" direction="up" to="/img/aubbie-writing.png">
              <img
                className="/img-fluid"
                src="/img/aubbie-writing.png"
                alt="Aubbie writing a story at a desk"
              />
            </AniLink>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);