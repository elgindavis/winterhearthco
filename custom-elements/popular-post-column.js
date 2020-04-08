// Temporary copy of JSON File...
const posts = {
  "1": {
    "id": "1",
    "articleTitle": "Why “Being Happy” Isn't a Real Goal",
    "articleLink": "why-being-happy-isnt-a-real-goal",
    "articleDescription": "'Life, Liberty, and the pursuit of Happiness'... But why?",
    "imgURL": "img/blog/happy-sign-300p.jpg",
    "imgAltText": "Happy neon sign",
    "date-published": "30 Mar, 2020"

  },
  "2": {
    "id": "2",
    "articleTitle": "Why You’ll Never Get What You Deserve",
    "articleLink": "why-you-will-never-get-what-you-deserve",
    "articleDescription": "Though life is full of various opportunities and possibilities, you'll never get the ones you really deserve. Here's why:",
    "imgURL": "img/blog/sunset-path-300p.jpg",
    "imgAltText": "Man walking alone on a path at sunset",
    "date-published": "11 Feb, 2020"
  },
  "3": {
    "id": "3",
    "articleTitle": "4 Lessons Your Dog Can Teach You About EQ",
    "articleLink": "4-powerful-lessons-dogs-teach-about-eq",
    "articleDescription": "Dogs melt our hearts every day, but it turns out there's a lot they can teach us, too.",
    "imgURL": "img/blog/dog-love-300p.jpg",
    "imgAltText": "Wow, look at that happy pup",
    "date-published": "7 Feb, 2020"
  },
  "4": {
    "id": "4",
    "articleTitle": "Pandemics and the Quest for Good News",
    "articleLink": "pandemics-and-good-news",
    "articleDescription": "In this world there will be troubles... And good news makes those troubles seem smaller, right?",
    "imgURL": "img/blog/good-news-300p.jpg",
    "imgAltText": "Good News Newspaper",
    "date-published": "5 Apr, 2020"
  }
};


class PopularPostColumn extends HTMLElement {	}

customElements.define('popular-post-column', class extends PopularPostColumn {
  

  connectedCallback() {
    this.innerHTML = `
      <div class="popular-post-list">
        <div class="single-post-list d-flex flex-row align-items-center" style="margin-top: 24px;">
          <div class="thumb">
            <a href="${posts["4"]["articleLink"]}">
              <img style="border-radius:4px; height: 80%;" class="img-fluid lazyload" data-src="../${posts["4"]["imgURL"]}" alt="${posts["4"]["imgAltText"]}">
            </a>
          </div>
        </div> 
        <div class=""> 
          <div class="details">
            <a href="${posts["4"]["articleLink"]}"><h6>${posts["4"]["articleTitle"]}</h6></a>
            <p style="font-size: 14px; line-height: 1.3rem; margin: 4px 0;">${posts["4"]["articleDescription"]}</p>
          </div>
        </div>

        <div class="single-post-list d-flex flex-row align-items-center" style="margin-top: 24px;">
          <div class="thumb">
            <a href="${posts["1"]["articleLink"]}">
              <img style="border-radius:4px; height: 80%;" class="img-fluid lazyload" data-src="../${posts["1"]["imgURL"]}" alt="${posts["1"]["imgAltText"]}">
            </a>
          </div>
        </div> 
        <div class=""> 
          <div class="details">
            <a href="${posts["1"]["articleLink"]}"><h6>${posts["1"]["articleTitle"]}</h6></a>
            <p style="font-size: 14px; line-height: 1.3rem; margin: 4px 0;">${posts["1"]["articleDescription"]}</p>
          </div>
        </div>

        <div class="single-post-list d-flex flex-row align-items-center" style="margin-top: 24px;">
          <div class="thumb">
            <a href="${posts["2"]["articleLink"]}">
              <img style="border-radius:4px; height: 80%;" class="img-fluid lazyload" data-src="../${posts["2"]["imgURL"]}" alt="${posts["2"]["imgAltText"]}">
            </a>
          </div>
        </div> 
        <div class=""> 
          <div class="details">
            <a href="${posts["2"]["articleLink"]}"><h6>${posts["2"]["articleTitle"]}</h6></a>
            <p style="font-size: 14px; line-height: 1.3rem; margin: 4px 0;">${posts["2"]["articleDescription"]}</p>
          </div>
        </div>
      </div>
    `;

  }
});
