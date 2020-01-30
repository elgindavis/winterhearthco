class BlogPostHero extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();
    	this.imgURL = this.getAttribute('imgURL');
    	this.articleTitle = this.getAttribute('articleTitle');
    	this.articleLink = this.getAttribute('articleLink');
    	this.articleDescription = this.getAttribute('articleDescription');

    	// console.log(this.author, this.date, this.tags, this.imgURL, this.articleTitle, this.excerpt, this.authorURL, this.articleLink, this.imgAltText);
	}

	static get observedAttributes() {
		return ['imgURL', 'articleTitle', 'authorURL', 'articleDescription'];
	}

  	get hasImgURL() {
  		return this.hasAttribute('imgURL');
  	}

  	get hasArticleDescription() {
  		return this.hasAttribute('articleDescription');
  	}

  	get hasArticleLink() {
  		return this.hasAttribute('articleLink');
  	}

  	get hasArticleTitle() {
  		return this.hasAttribute('articleTitle');
  	}


	connectedCallback() {
	}
	disconnectedCallback() {
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
		// console.log(attrName, oldVal, newVal);
	} 
}

customElements.define('banner-blog-item', class extends BlogPostHero {
  

  connectedCallback() {
  	// console.log(this.author);


    this.innerHTML = `
    <section class="banner-area relative blog-home-banner" id="home"
    style="background: url(${this.imgURL}) bottom;"
    > 
        <div class="overlay overlay-bg"></div>
        <div class="container">       
          <div class="row d-flex align-items-center justify-content-center">
            <div class="about-content blog-header-content col-lg-12">
              <h1 class="text-white">
                ${this.articleTitle}       
              </h1> 
              <p class="text-white">
                ${this.articleDescription}
              </p>
              <a href="${this.articleLink}" class="primary-btn">Read Article</a>
            </div>  
          </div>
        </div>
      </section>
    `;
    
  }
});

