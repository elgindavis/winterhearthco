class SinglePostRow extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();
    	this.author = this.getAttribute('author');
    	this.authorURL = this.getAttribute('authorURL');
    	this.date = this.getAttribute('date');
    	this.tags = this.getAttribute('tags');
    	this.imgURL = this.getAttribute('imgURL');
    	this.articleTitle = this.getAttribute('articleTitle');
    	this.articleLink = this.getAttribute('articleLink');
    	this.excerpt = this.getAttribute('excerpt');
    	this.imgAltText = this.getAttribute('imgAltText');

    	// console.log(this.author, this.date, this.tags, this.imgURL, this.articleTitle, this.excerpt, this.authorURL, this.articleLink, this.imgAltText);
	}

	static get observedAttributes() {
		return ['author', 'date', 'tags', 'imgURL', 'articleTitle', 'excerpt', 'authorURL', 'imgAltText'];
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

  	get hasTags() {
    	return this.hasAttribute('tags');
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

  	generateTags() {
  		console.log(this.tags);
  	}

	connectedCallback() {
	}
	disconnectedCallback() {
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
		// console.log(attrName, oldVal, newVal);
	} 
}

customElements.define('single-post-row', class extends SinglePostRow {
  

  connectedCallback() {
  	// console.log(this.author);

  	// generate tags html
  	console.log(this.tags);
  	let tags = this.tags.split(",");
  	console.log(tags);
  	let tagsHTML = "Tags: &nbsp;";

  	for (var i = tags.length - 1; i >= 1; i--) {
  		tagsHTML += `<li><a href="#">${tags[i]},&nbsp; </a></li>`
  	}

  	tagsHTML += `<li><a href="#">${tags[0]}</a></li>`

  

    this.innerHTML = `
    <div class="single-post row">
		<div class="col-lg-3  col-md-3 meta-details">
			<ul class="tags">
				${tagsHTML}
			</ul>
			<div class="user-details row">
				<p class="user-name col-lg-12 col-md-12 col-6">
					${this.hasAuthorURL ? `<a target="_blank" href="${this.authorURL}"> ${this.author}</a>` : `<a>${this.author}</a>`} <span class="lnr lnr-user"></span>
					</p>
				<p class="date col-lg-12 col-md-12 col-6">
					<a>${this.date}</a> <span class="lnr lnr-calendar-full"></span>
					</p>
			</div>
		</div>
		<div class="col-lg-9 col-md-9 ">
			<div class="feature-img">
				<a href="${this.articleLink}"><img class="img-fluid" src="${this.imgURL}" alt="${this.imgAltText}"></a>
			</div>
			<a class="posts-title" href="${this.articleLink}"><h3>${this.articleTitle}</h3></a>
			<p class="excerpt">
				${this.excerpt}
			</p>
			<a href="${this.articleLink}" class="primary-btn">View More</a>
		</div>
	</div>
    `;
  }
});

