class SinglePostRow extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();
    	this.author = this.getAttribute('author');
    	this.date = this.getAttribute('date');
    	this.tags = this.getAttribute('tags');
    	this.imgURL = this.getAttribute('imgURL');
    	console.log(this.author, this.date, this.tags, this.imgURL);
	}

	static get observedAttributes() {
		return ['author', 'date', 'tags', 'imgURL'];
	}

	get hasAuthor() {
    	return this.hasAttribute('author');
  	}

  	get hasDate() {
    	return this.hasAttribute('date');
  	}

  	get hasTags() {
    	return this.hasAttribute('tags');
  	}

  	get hasImgURL() {
  		return this.hasAttribute('imgURL');
  	}

	// @TODO: each post has a list of tags, which each have a link;
	// author, date of publication, (optional) number of views, (optional) number of comments (we aren't doing comments)
	connectedCallback() {
	}
	disconnectedCallback() {
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
		console.log(attrName, oldVal, newVal);
	} 
}

customElements.define('single-post-row', class extends SinglePostRow {
  connectedCallback() {
  	console.log(this.author);
    this.innerHTML = `text ${this.author}`;
  }
});

