(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7Qib":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r=function(e){return e.map((function(e){var t=e.node;return{id:t.id,excerpt:t.excerpt,frontmatter:t.frontmatter,date:t.frontmatter.date,title:t.frontmatter.title,articleLink:t.fields.slug,featured:t.frontmatter.featured,newsletterVolume:t.frontmatter.newsletterVolume,contentType:t.frontmatter.contentType,imageUrl:t.frontmatter.imageUrl,imageAlt:t.frontmatter.imageAlt,tags:t.frontmatter.tags,keywords:t.frontmatter.keywords,description:t.frontmatter.description,author:t.frontmatter.author}}))},n=function(e){switch((e+1)%3){case 0:return"primary";case 1:return"secondary";case 2:return"yellow";default:return}}},"D5r+":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return i}));a("f3/d");var r=a("q1tI"),n=a.n(r),l=a("Kvkj"),c=a("7Qib");t.default=function(e){var t=e.data.allMarkdownRemark.edges,a=Object(c.b)(t),i=Object(r.useState)(""),o=i[0],s=i[1],m=Object(r.useState)([]),u=m[0],d=m[1],f=a.filter((function(e){return"newsletter"===e.contentType})),p=f.filter((function(e){return"2"===e.newsletterVolume})),g=f.filter((function(e){return"1"===e.newsletterVolume}));return n.a.createElement(l.f,{keywords:"emotional intelligence, mental health",imageUrl:"/img/aubbie-knight.png",imageAlt:"Winter Hearth Studios",url:"https://winterhearth.co/newsletters",title:"Newsletters",description:"The Winter Hearth Newsletters cover a range of topics from mental health to emotional empowerment and beyond. We believe that if you can change the heart, you can change the world. Check out what we've got just for you!"},n.a.createElement("section",{style:{padding:"12% 0"},className:"newsletter-hero-image section-gap"},n.a.createElement("div",{className:""},n.a.createElement("div",{style:{margin:"10% 0 0 3%"},className:"row align-items-center justify-content-between"},n.a.createElement("div",{className:"col-lg-8 col-md-8 banner-left"},n.a.createElement("h1",{className:"text-white"},"Winter Hearth ",n.a.createElement("br",null),"Epic Life Playbook"))))),n.a.createElement("section",null,n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"pt-40 pb-10"},"Winter Hearth Newsletters"),n.a.createElement(l.l,null),n.a.createElement(l.k,{setPostList:d,setSearchState:s,posts:f,type:"newsletters"}))),n.a.createElement("section",{style:{marginTop:90},className:"post-content-area"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-8 posts-list"},""!==o&&n.a.createElement("h3",{className:"pb-40"},"Results for: ",o),""!==o&&0===u.length&&n.a.createElement("p",null,"No posts matched this search"),""!==o&&u.map((function(e,t){return n.a.createElement(l.m,{color:Object(c.a)(t),className:"pb-20",key:e.id,author:e.author.name,date:e.date,tags:e.tags,articleTitle:e.title,imageUrl:e.imageUrl,articleLink:e.articleLink,imgAltText:e.imgAltText,excerpt:e.description})})))))),n.a.createElement("section",{className:"recent-blog-area pt-60",id:"volume-2"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-12 pb-30 header-text text-center"},n.a.createElement("h3",null,"Epic Life Playbook Volume 2: ",n.a.createElement("br",null)," Demystifying Mental Health"),n.a.createElement("br",null),n.a.createElement("p",null,'"Mental Health Monsters" Series Artwork by Toby Allen'))),n.a.createElement("div",{className:"row"},p.map((function(e,t){return n.a.createElement(l.i,{color:Object(c.a)(t),key:e.id,author:e.author,date:e.date,articleTitle:e.title,tags:e.tags,imageUrl:e.imageUrl,articleLink:e.articleLink,imgAltText:e.imgAltText,excerpt:e.description})}))))),n.a.createElement("section",{className:"recent-blog-area pt-60"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-md-8 pb-30 header-text"},n.a.createElement("h3",null,"Epic Life Playbook Volume 1: Winter Hearth Creative Journal"),n.a.createElement("br",null))),n.a.createElement("div",{className:"row"},g.map((function(e,t){return n.a.createElement(l.i,{color:Object(c.a)(t),key:e.id,author:e.author,date:e.date,articleTitle:e.title,imageUrl:e.imageUrl,tags:e.tags,articleLink:e.articleLink,imgAltText:e.imgAltText,excerpt:e.description})}))))))};var i="2813001529"}}]);
//# sourceMappingURL=component---src-pages-newsletters-js-a4d3fe6a6fe702ea2dab.js.map