import React, { useEffect } from "react";
import Layout from "../components/layout";
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default () => {
  useEffect(() => {
    document.title = "About | Winter Hearth Studios";
  }, [])
  return (
    <Layout
      keywords={
        "how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,"
      }
      imageUrl="/img/aubbie-knight.png"
      imageAltText="Winter Hearth Studios"
      url="https://winterhearth.co/about"
      title="Our Story | Winter Hearth Studios"
      description="Winter Hearth Studios is a quirky and charming creative studio that designs content to make your life better. We cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!"
    >
      <title>Our Story | Winter Hearth Studios</title>
      <section
        className="home-about-area section-gap"
        style={{ paddingTop: 120 }}
      >
        <div className="container" style={{ lineHeight: "2.3rem" }}>
          <div
            className="row align-items-center justify-content-between"
            style={{
              padding: "40px 12px",
              border: "4px solid var(--color-primary)",
              borderRadius: 4,
              margin: "40px 12px",
            }}
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
            <div className="col-lg-6 col-md-6">
              <img
                className="img-fluid lazyload"
                name="elgin-story-image"
                src="/img/photo-4.jpg"
                alt="Elgin in Athens, Greece"
              />
            </div>
          </div>
          <div
            className="row align-items-center justify-content-between"
            style={{
              padding: "40px 12px",
              border: "4px solid var(--color-secondary)",
              borderRadius: 4,
              margin: "40px 12px",
            }}
          >
            <div className="col-lg-6 col-md-6 home-about-right" style={{}}>
              <img
                className="img-fluid lazyload"
                src="/img/hi-5.jpg"
                name="hi-5-image"
                alt="Aubbie and Rocca doing a high-5"
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <h1 style={{ paddingTop: "6%" }} className="">
                Our Mission
              </h1>
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
          </div>
          <div
            className="row align-items-center justify-content-between"
            style={{
              padding: "40px 12px",
              border: "4px solid var(--color-primary)",
              borderRadius: 4,
              margin: "40px 12px",
            }}
          >
            <div className="col-lg-5 col-md-6">
              <h1 className="">What fuels us</h1>
              <p style={{ paddingTop: "3%" }}>
                We're a creative studio dedicated to sparking meaningful change
                around mental and emotional health. We fully believe that if you
                can change the heart, you can change the world.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 home-about-right" style={{}}>
              <img
                className=""
                src="/img/aubbie-knight.jpg"
                alt="Aubbie the Brave Knight"
                name="aubbie-knight-image"
              />
            </div>
          </div>
          <div
            className="row align-items-center justify-content-between"
            style={{
              padding: "40px 12px",
              border: "4px solid var(--color-secondary)",
              borderRadius: 4,
              margin: "40px 12px",
            }}
          >
            <div className="col-lg-6 col-md-6 home-about-right" style={{}}>
              <img
                className="img-fluid"
                src="/img/aubbie-writing.png"
                alt="Aubbie writing a story at a desk"
                name="aubbie-writing-image"
              />
            </div>
            <div className="col-lg-5 col-md-6">
              <h1 style={{ paddingTop: "10%" }} className="">
                What we do
              </h1>
              <p style={{ paddingTop: "3%" }}>
                We believe in the power of storytelling as a central unifier in
                our shared human experience. <br /> From web comics to video
                games, podcasts to videos, blog posts and beyond— we aim to
                inspire, educate, and enrich people all over the world with the
                tools they need to become more mentally and emotionally powerful.
              </p>
              <div style={{ padding: "20px 0" }}>
                <AniLink
                  paintDrip
                  hex="#f0f8ff"
                  direction="up"
                  to="/blog/"
                  name="see-latest-posts-button"
                  className="primary-btn text-uppercase"
                  style={{ padding: "0 20px", fontSize: '14px' }}
                >
                  See latest posts
                </AniLink>
              </div>
            </div>
          </div>
          <div
            className="row align-items-center justify-content-between"
            style={{ paddingTop: "10%" }}
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
    </Layout>
  )
};