class WHHeader extends HTMLElement {
	constructor() {
    // Always call super first in constructor
    	super();
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
    this.innerHTML = `<header id="header">
		    <div class="container main-menu">
		    	<div class="row align-items-center justify-content-between d-flex">
			      <div id="logo">
			        <a href="index.html"><img src="img/logo.png" alt="" title="" /></a>
			      </div>
			      <nav id="nav-menu-container">
			        <ul class="nav-menu">
			          <li><a href="./">Home</a></li>
			          <li><a href="about.html">Our Story</a></li>
			          <!-- <li class="menu-has-children"><a href="">Blog</a> -->
			            <!-- <ul> -->
			          <li><a href="comics.html">Comics</a></li>
			              <li><a href="blog.html">Blog</a></li>
			              <!-- <li><a href="newsletter.html">Newsletter</a></li> -->
			            <!-- </ul> -->
			          <!-- </li>	 -->
			        <!--   <li><a href="services.html">Shop</a></li> -->
			          <li><a href="games/">Games</a></li>
			       <!--    <li class="menu-has-children"><a href="">Pages</a>
			            <ul>
		            	  <li><a href="elements.html">Elements</a></li>
				          <li class="menu-has-children"><a href="">Level 2 </a>
				            <ul>
				              <li><a href="#">Item One</a></li>
				              <li><a href="#">Item Two</a></li>
				            </ul>
				          </li>					                		
			            </ul>
			          </li>					          					          		          
			          <li><a href="contact.html">Contact</a></li> -->
			        </ul>
			      </nav><!-- #nav-menu-container -->		    		
		    	</div>
		    </div>
		  </header><!-- #header -->`;
  }
});

console.log("Welcome to Winter Hearth Studios! I see you know your way around a console ;)");