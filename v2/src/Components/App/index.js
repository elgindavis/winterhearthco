/* eslint-disable no-multi-str */
import React from 'react';
import Header from '../Header';
import HomeBanner from '../HomeBanner';
import Footer from '../Footer';
import PostGrid from '../PostGrid';
import ButtonSection from '../ButtonSection';
import HomeInfoContainer from '../../Containers/HomeInfoContainer';

import './App.css';

const homeSectionText = [
  "We're a creative studio dedicated to sparking meaningful change around mental and emotional health. We fully \
      believe that if you can change the heart, you can change the world.",
  "We believe in the power of storytelling as a central unifier in our shared human experience. From web \
      comics to video games, podcasts to videos, blog posts and beyond— we aim to inspire, educate, and enrich \
      people all over the world with the tools they need to become more mentally and emotionally powerful."
];


const App = (props) => {
  return (
    <>
      <Header/>
      <HomeBanner/>
      <PostGrid/>
      <ButtonSection 
        classes=""
        buttons={[
          {link: "blog/", text: "See All Blogs" }, 
          {link: "newsletters/", text: "See Newsletters" }
        ]}
      />
      <HomeInfoContainer
        title="What fuels us"
        text={homeSectionText[0]}
        buttonText="Read Our Story"
        imgURL="../../img/aubbie-knight.jpg"        
      />
      <HomeInfoContainer
        classes="pt-60 pb-120"
        title="What we do"
        text={homeSectionText[1]}
        imgURL="../../img/aubbie-writing.png"       
      />
      <Footer/>
    </>
  );
}

export default App;
