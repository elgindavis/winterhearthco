import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

export default () => (
        <Layout
            keywords={"how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,"}
            image="https://winterhearth.co/img/aubbie-knight.png"
            imageAlt="Winter Hearth Studios"
            url="https://winterhearth.co/about"
            title="Our Story | Winter Hearth Studios"
            description="Winter Hearth Studios is a quirky and charming creative studio that designs content to make your life better. We cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!"
        >
                       
		<title>Our Story | Winter Hearth Studios</title>
			<section class="home-about-area section-gap" style={{paddingTop: 100}}>
                <div class="container" style={{lineHeight: "2.3rem"}}>
                    <div class="row align-items-center justify-content-between" style={{paddingTop: 80}}>
                        <div class="col-lg-5 col-md-6">
							<h1 class="">Our Story</h1>
                            <p style={{paddingTop: "3%"}}>
                                Hey there! I'm Elgin and I'm the human behind Winter Hearth Studios. I started this creative studio back in 2018 as a place for me to dream— to dream of ways that we can connect better with each other as humans and ways for us to live deeper, hyper-meaningful, and greatly fulfilling lives for ourselves.
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-6" style={{}}>
                            <Link href="img/photo-4.png">
                                <img class="img-fluid lazyload" src="img/photo-4.jpg" alt=""/>
							</Link>
						</div>
                    </div>
                    <div class="row align-items-center justify-content-between" style={{marginBottom: 12, paddingTop: 60}}>
                        <div class="col-lg-5 col-md-6">
                            <h1 class="">Our Mission</h1>
                            <p style={{paddingTop: "3%"}}>
                                Winter Hearth Studios is about being socially, mentally and emotionally aware, being energized for change, and showing love in creative and impactful ways. Our mission to is create warm, encouraging and insightful content to empower you to be a <strong style={{color: "var(--wh-red)"}}> firestarter</strong>.
							</p>
                            <p>
                                We have a heart for change, and we will be that change we wish to see.
							</p>

                        </div>
                        <div class="col-lg-6 col-md-6 home-about-right" style={{}}>
                            <Link href="img/hi-5.png">
                                <img class="img-fluid lazyload" src="img/hi-5.jpg" alt=""/>
							</Link>
						</div>
                    </div>
                    <div class="row align-items-center justify-content-between" style={{paddingTop: "5%"}}>
                        <div class="col-lg-10">
                            <p>
                                We want to inspire you to make a difference in the world — to challenge the status quo, to be the one to lend a helping hand, to create something that changes lives. We want you to live an epic story.
							</p>

                            <h2 style={{marginTop: "8%"}}> Behind the name </h2>
                            <p style={{paddingTop: "2%"}}>
                                The idea behind Winter Hearth is to create a warm sense of home amidst the biting cold and chaos. The "hearth" is where the fire is. It's where we go to be restored, reinvigorated, and revitalized. It's where we find the power in our voices, the motivation to overcome, and the inspiration to create something awesome.
							</p>
                        </div>
                    </div>
                </div>	
			</section>
        </Layout>
    );