class SingleRecentBlog extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();
    	this.authorImgURL = this.getAttribute('authorImgURL');
    	this.imgURL = this.getAttribute('imgURL');
    	this.author = this.getAttribute('author');
    	this.date = this.getAttribute('date');
    	this.articleLink = this.getAttribute('articleLink');
    	this.articleTitle = this.getAttribute('articleTitle');
    	this.excerpt = this.getAttribute('excerpt');
    	this.imgAltText = this.getAttribute('imgAltText');

    	// console.log(this.author, this.date, this.tags, this.imgURL, this.articleTitle, this.excerpt, this.authorURL, this.articleLink, this.imgAltText);
	}

	static get observedAttributes() {
		return ['authorImgURL', 'imgURL', 'author', 'date', 'articleLink', 'articleTitle', 'excerpt', 'imgAltText'];
	}

	get hasAuthor() {
    	return this.hasAttribute('author');
  	}

  	get hasAuthorURL() {
    	return this.hasAttribute('authorURL');
  	}

  	get hasDate() {
    	return this.hasAttribute('date');
  	}

  	get hasImgURL() {
  		return this.hasAttribute('imgURL');
  	}

  	get hasImgAltText() {
  		return this.hasAttribute('imgAltText');
  	}

  	get hasArticleLink() {
  		return this.hasAttribute('articleLink');
  	}

  	get hasArticleTitle() {
  		return this.hasAttribute('articleTitle');
  	}

  	get hasExcerpt() {
  		return this.hasAttribute('excerpt');
  	}

	connectedCallback() {
	}
	disconnectedCallback() {
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
		// console.log(attrName, oldVal, newVal);
	} 
}

customElements.define('single-recent-post', class extends SingleRecentBlog {
  

  connectedCallback() {

    this.innerHTML = `
      <div class="single-recent-blog">
        <div class="thumb">
          <a href="${this.articleLink}"><img style="border-radius:4px;" class="f-img img-fluid mx-auto" src="${this.imgURL}" alt="${this.imgAltText}"> </a>
        </div>
        <div class="bottom d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <img style="height: 30px; border-radius: 20px;" class="img-fluid" src="${this.authorImgURL}" alt="${this.author}">
            <a href="${this.articleLink}"><span>by ${this.author}</span></a>
          </div>
          <div class="meta">
            ${this.date}
          </div>
        </div>              
        <a href="${this.articleLink}">
          <h4 style="margin-top:8px;">${this.articleTitle}</h4>
        </a>
        <p>
          ${this.excerpt}
        </p>
      </div>
    `;
  }
});

