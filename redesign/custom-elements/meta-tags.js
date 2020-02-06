class WHMeta extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();

    	this.imgURL = this.getAttribute('imgURL');
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
		<!-- Meta Description -->
		<meta name="description" content="Winter Hearth Studios is a quirky and charming creative 
		studio that designs content to make your life better. We cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!">
		<!-- Meta Keyword -->
		<meta name="keywords" content="how to be happy, how to be a good friend, mental health struggles, mental illness, emotional first aid, emotional intelligence, emotional agility, emotions, how to stop being angry, how to manage my emotions, types of mental health, emotional health, mental health facts, importance of mental health essay, characteristics of mental health, mental health synonym, mental health articles 2019, what is emotional health,">

		<meta property="og:image" content="${this.imgURL}" />
		<meta property="image" content="${this.imgURL}" />

		<meta property="og:description" content="Winter Hearth Studios is a quirky and charming creative 
		studio that designs content to make your life better. We cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!" />

		<meta property="title" content="Our Story | Winter Hearth Studios" />
		<meta property="og:title" content="Our Story | Winter Hearth Studios" />`;
  }
});

console.log("Welcome to Winter Hearth Studios! I see you know your way around a console ;)");