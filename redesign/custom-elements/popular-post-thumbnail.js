class PopularPostItem extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();
    	this.imgURL = this.getAttribute('imgURL');
    	this.articleTitle = this.getAttribute('articleTitle');
    	this.articleLink = this.getAttribute('articleLink');
      this.imgAltText = this.getAttribute('imgAltText');
    	this.articleDescription = this.getAttribute('articleDescription');

    	// console.log(this.author, this.date, this.tags, this.imgURL, this.articleTitle, this.excerpt, this.authorURL, this.articleLink, this.imgAltText);
	}

	static get observedAttributes() {
		return ['imgURL', 'articleTitle', 'authorURL', 'imgAltText', 'articleDescription'];
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

    get hasArticleTitle() {
  		return this.hasAttribute('articleDescription');
  	}


	connectedCallback() {
	}
	disconnectedCallback() {
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
		// console.log(attrName, oldVal, newVal);
	} 
}

customElements.define('popular-post-item', class extends PopularPostItem {
  

  connectedCallback() {
  	// console.log(this.author);


    this.innerHTML = `
    <div class="single-post-list d-flex flex-row align-items-center">
      <div class="thumb">
        <a href="${this.articleLink}"><img style="border-radius:4px; height: 80%;" class="img-fluid" src="${this.imgURL}" alt="${this.imgAltText}"></a>
      </div>
    </div> 
    <div class=""> 
      <div class="details">
        <a href="${this.articleLink}"><h6>${this.articleTitle}</h6></a>
        <p style="font-size: 14px; line-height: 1.3rem;">${this.articleDescription}</p>
      </div>
    </div>
    `;

    // this.innerHTML = `
    // <div class="thumb">
    //                     <img class="img-fluid" src="img/blog/pp2.jpg" alt="">
    //                   </div>
    //                   <div class="details">
    //                     <a href="blog-single.html"><h6>The Amazing Hubble</h6></a>
    //                     <p>02 Hours ago</p>
    //                   </div>
    // `;

    
  }
});

