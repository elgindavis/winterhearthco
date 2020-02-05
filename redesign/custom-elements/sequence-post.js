class SequencePost extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();
      this.direction = this.getAttribute('direction');
      this.imgURL = this.getAttribute('imgURL');
      this.imgAltText = this.getAttribute('imgAltText');
    	this.articleTitle = this.getAttribute('articleTitle');
    	

    	// console.log(this.author, this.date, this.tags, this.imgURL, this.articleTitle, this.excerpt, this.authorURL, this.articleLink, this.imgAltText);
	}

	static get observedAttributes() {
		return ['direction', 'imgURL', 'imgAltText', 'articleTitle'];
	}

  get hasDirection() {
    return this.hasAttribute('direction');
  }

  get hasImgURL() {
    return this.hasAttribute('imgURL');
  }

  get hasImgAltText() {
    return this.hasAttribute('imgAltText');
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

customElements.define('sequence-post', class extends SequencePost {
  

  connectedCallback() {
  	// console.log(this.author);

    if (this.hasDirection) {
      if (this.direction == 'previous') {
        this.innerHTML = `
          <div class="nav-left flex-row d-flex justify-content-start align-items-center">
            <div class="thumb">
              <a href="#"><img class="img-fluid" src="${this.imgURL}" alt="${this.imgAltText}"></a>
            </div>
            <div class="arrow">
              <a href="#"><span class="lnr text-white lnr-arrow-left"></span></a>
            </div>
            <div class="details">
              <p>Prev Post</p>
              <a href="#"><h4>${this.articleTitle}</h4></a>
            </div>
          </div>
        `;
      } else {
        this.innerHTML = `
          <div class="nav-right flex-row d-flex justify-content-end align-items-center">
            <div class="details">
              <p>Next Post</p>
              <a href="#"><h4>${this.articleTitle}</h4></a>
            </div>
            <div class="arrow">
              <a href="#"><span class="lnr text-white lnr-arrow-right"></span></a>
            </div>
            <div class="thumb">
              <a href="#"><img class="img-fluid" src="${this.imgURL}" alt="${this.imgAltText}"></a>
            </div>                    
          </div>   
        `;

      }
    }
  }
});

