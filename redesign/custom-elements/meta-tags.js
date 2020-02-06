class WHMeta extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();

    	this.imgURL = this.getAttribute('imgURL');
    	this.pageTitle = this.getAttribute('pageTitle');
    	this.description = this.getAttribute('description');
    	this.keywords = this.getAttribute('keywords');
	}

	get hasimgURL() {
		return this.hasAttribute('imgURL');
	}

	connectedCallback() {
	}
	disconnectedCallback() {
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
	} 
}

customElements.define('wh-meta-tags', class extends WHMeta {
  connectedCallback() {

    this.innerHTML = `
    	<!-- Author Meta -->
		<meta name="author" content="Winter Hearth Studios">
		
		<!-- Meta Keyword -->
		<meta name="keywords" content="${this.keywords}">
		<meta name="keywords" content="how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,">

		<meta property="og:image" content="${this.imgURL}" />
		<meta property="image" content="${this.imgURL}" />

		<meta name="description" content="${this.description}" />
		<meta property="og:description" content="${this.description}" />


		<meta property="title" content="${this.pageTitle}" />
		<meta property="og:title" content="${this.pageTitle}" />

  }
});

// console.log("Welcome to Winter Hearth Studios! I see you know your way around a console ;)");