class WHHeader extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();

    	this.changeLinkDirectory = this.getAttribute('changeLinkDirectory');
	}

	get isNotRootDirectory() {
		return this.hasAttribute('changeLinkDirectory');
	}

	connectedCallback() {
	}
	disconnectedCallback() {
	}
	attributeChangedCallback(attrName, oldVal, newVal) {
	} 
}

customElements.define('wh-header', class extends WHHeader {
  connectedCallback() {

  	// console.log(this.isNotRootDirectory);
    this.innerHTML = `<header id="header">
		    <div class="container main-menu">
		    	<div class="row align-items-center justify-content-between d-flex">
			      <div id="logo">
			        <a href="${this.isNotRootDirectory ? this.changeLinkDirectory : ""}."><img style="max-height: 56px;" src="${this.isNotRootDirectory ? this.changeLinkDirectory : ""}img/logo-100p.jpg" alt="" title="" /></a>
			      </div>
			      <nav id="nav-menu-container">
			        <ul class="nav-menu">
			          <li><a href="${this.isNotRootDirectory ? this.changeLinkDirectory : "."}">Home</a></li>
			          <li><a href="${this.isNotRootDirectory ? this.changeLinkDirectory : ""}about">Our Story</a></li>
			          <!-- <li class="menu-has-children"><a href="">Blog</a> -->
			            <!-- <ul> -->
			          <!-- <li><a href="${this.isNotRootDirectory ? this.changeLinkDirectory : ""}comics">Comics</a></li> -->
			              <li><a href="${this.isNotRootDirectory ? this.changeLinkDirectory : ""}blog/">Blog</a></li>
			              <li><a href="${this.isNotRootDirectory ? this.changeLinkDirectory : ""}newsletters/">Newsletters</a></li> 
			            <!-- </ul> -->
			          <!-- </li>	 -->
			        <!--   <li><a href="services">Shop</a></li> -->
			          <li><a href="${this.isNotRootDirectory ? this.changeLinkDirectory : ""}games/">Games</a></li>
			       <!--    <li class="menu-has-children"><a href="">Pages</a>
			            <ul>
		            	  <li><a href="elements">Elements</a></li>
				          <li class="menu-has-children"><a href="">Level 2 </a>
				            <ul>
				              <li><a href="#">Item One</a></li>
				              <li><a href="#">Item Two</a></li>
				            </ul>
				          </li>					                		
			            </ul>
			          </li>					          		-->			          		          
			          <li><a target="_blank" href="https://www.etsy.com/shop/WinterHearthCo">Shop</a></li> 
			        </ul>
			      </nav><!-- #nav-menu-container -->		    		
		    	</div>
		    </div>
		  </header><!-- #header -->`;
  }
});

console.log("Welcome to Winter Hearth Studios! I see you know your way around a console ;)");