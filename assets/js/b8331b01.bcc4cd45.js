"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6202],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||n;return a?r.createElement(d,s(s({ref:t},u),{},{components:a})):r.createElement(d,s({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<n;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},31665:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),s=["components"],i={slug:"show-and-tell",title:"#14: Show & Tell: A SWArm Of Apps",authors:["nitya"],tags:["swa","30days","usage-examples"],draft:!1},l=void 0,p={permalink:"/blog/show-and-tell",source:"@site/blog/2022-05-15.md",title:"#14: Show & Tell: A SWArm Of Apps",description:"Welcome to Week 2, Day 7 of #30DaysOfSWA!!",date:"2022-05-15T00:00:00.000Z",formattedDate:"May 15, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"usage-examples",permalink:"/blog/tags/usage-examples"}],readingTime:6.5,truncated:!1,authors:[{name:"Nitya Narasimhan",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/nitya",imageURL:"https://github.com/nitya.png",key:"nitya"}],frontMatter:{slug:"show-and-tell",title:"#14: Show & Tell: A SWArm Of Apps",authors:["nitya"],tags:["swa","30days","usage-examples"],draft:!1},prevItem:{title:"#15: Develop with Azure Tools",permalink:"/blog/devtools-azure"},nextItem:{title:"#13: Hosting PWA on Static Web Apps",permalink:"/blog/pwa-on-swa"}},u={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Week 2 Recap",id:"week-2-recap",level:2},{value:"Project Ideas",id:"project-ideas",level:2},{value:"1. Static Sites",id:"1-static-sites",level:3},{value:"2. Frameworks",id:"2-frameworks",level:3},{value:"3. OSS Apps",id:"3-oss-apps",level:3},{value:"Share: Gallery",id:"share-gallery",level:2},{value:"Simplify: SWA CLI",id:"simplify-swa-cli",level:2},{value:"Exercise",id:"exercise",level:2}],h={toc:c};function m(e){var t=e.components,i=(0,o.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Week 2, Day 7")," of ",(0,n.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,n.kt)("p",null,"We made it to the end of Week 2!! ",(0,n.kt)("strong",{parentName:"p"},"Let's give ourselves a round of applause!")),(0,n.kt)("p",null,"In the last week we walked through a subset of usage examples featuring diverse applications, static site generators and front-end frameworks. And that's still just a small slice of what is possible. So how do you make this journey more actionable and ",(0,n.kt)("em",{parentName:"p"},"learn by doing"),"?"),(0,n.kt)("p",null,"That's what I'll try to answer in today's post. Also ",(0,n.kt)("strong",{parentName:"p"},"bookmark this one"),' because we will revisit it at the end of next week ("Dev Tools") and try to replicate some of these tutorials using the more streamlined experience provided by the ',(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/swa-cli"},(0,n.kt)("strong",{parentName:"a"},"Azure Static Web Apps CLI"))," (a command-line tool for local development)."),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Recap"),": Usage Examples Week"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Build"),": How to Get Project Ideas"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Share"),": Contribute to the Gallery"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Simplify"),": Using Static Web Apps CLI!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exercise"),": Build, Deploy, and Customize, some starter app.x")),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(51574).Z,width:"1000",height:"420"})),(0,n.kt)("h2",{id:"week-2-recap"},"Week 2 Recap"),(0,n.kt)("p",null,"This week was packed with different usage scenarios and front-end technologies. Let's take a quick look at what was covered:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Monday:")," We built a ",(0,n.kt)("a",{parentName:"li",href:"https://dev.to/azure/08-build-a-blog-with-astro-1lb2"},"personal blog")," using ",(0,n.kt)("a",{parentName:"li",href:"https://astro.build/"},"Astro"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tuesday:")," We built an ",(0,n.kt)("a",{parentName:"li",href:"https://dev.to/azure/09-manage-inventory-with-react-39lc"},"inventory management")," app using ",(0,n.kt)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Wednesday:")," We ",(0,n.kt)("a",{parentName:"li",href:"https://dev.to/azure/10-get-creative-with-vuejs-33k1"},"got creative")," with ",(0,n.kt)("a",{parentName:"li",href:"https://vuejs.org/"},"Vue"),", ML and Game Engines!"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Thursday:")," We ",(0,n.kt)("a",{parentName:"li",href:"https://dev.to/azure/11-share-content-with-docusaurus-azure-static-web-apps-30hc"},"published content")," using ",(0,n.kt)("a",{parentName:"li",href:"https://docusaurus.io/"},"Docusaurus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Friday:")," We explore ",(0,n.kt)("a",{parentName:"li",href:"https://dev.to/azure/12-headless-cms-swa-built-with-blazor-1e2d"},"headless CMS")," examples using ",(0,n.kt)("a",{parentName:"li",href:"http://blazor.net/"},"Blazor WebAssembly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Saturday:")," We learned to make SWA a more ",(0,n.kt)("a",{parentName:"li",href:"https://dev.to/azure/13-hosting-pwa-on-static-web-apps-16la"},"progressive web app"))),(0,n.kt)("p",null,"The visual roadmap gives you a sense of what was covered each day. But this is just the tip of the iceberg. JavaScript developers have a wide variety of front-end frameworks and static site generators to work with. And, as we saw with Blazor WebAssembly, non-JavaScript developers have other frameworks they use to develop modern web applications. So, how can you continue the learn-by-doing journey? Read on for some ideas."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Week 2 Roadmap",src:a(2343).Z,width:"1000",height:"563"})),(0,n.kt)("h2",{id:"project-ideas"},"Project Ideas"),(0,n.kt)("h3",{id:"1-static-sites"},"1. Static Sites"),(0,n.kt)("p",null,"The easiest way to get started is to use one of many ",(0,n.kt)("a",{parentName:"p",href:"https://jamstack.org"},"static site generators")," available today. Most of these provide templates you can start with, and customize just by bringing your own content (data, media assets etc.). Need some inspiration? Take a look at the recently released ",(0,n.kt)("a",{parentName:"p",href:"https://risingstars.js.org/2021/en#section-ssg"},"Rising Stars Of JavaScript: Static Sites")," list and see if any of those projects have starters you can repurpose."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Example: My "Recipe Me" Project'),". "),(0,n.kt)("p",null,"Earlier this week, we covered examples with Astro (#2), Docusarus (#3) and VuePress (#9) in our usage examples. Today we look at ",(0,n.kt)("a",{parentName:"p",href:"https://www.11ty.dev/"},"Eleventy")," (#7)."),(0,n.kt)("p",null,"Earlier this year I ran ",(0,n.kt)("a",{parentName:"p",href:"https://dev.to/azure/07-developing-progressive-web-apps-hfb"},"#30DaysOfPWA"),", a similar series focused on Progressive Web Apps. And I wanted a demo! I've always wanted to have a recipe blog, and I found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/maeligg/my-online-cookbook"},"this Eleventy starter")," that was perfect. I customized it to add the features and code required to make it PWA-compliant. And I configured it for hosting on Azure Static Web Apps. ",(0,n.kt)("strong",{parentName:"p"},"Bonus:")," I learned a lot in the process about the framework, and the configuration changes for SWA!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Recipe Me",src:a(63247).Z,width:"2050",height:"2014"})," "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Related Resources:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dev.to/azure/07-developing-progressive-web-apps-hfb"},"Read the Tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fearlessly-dev/recipe-me"},"Browse the Source")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://white-rock-036691f0f.1.azurestaticapps.net/"},"Visit the Website"))),(0,n.kt)("h3",{id:"2-frameworks"},"2. Frameworks"),(0,n.kt)("p",null,"The next step up from this is to look at existing application starter-kits or tutorials that target popular front-end and full-stack frameworks. Unlike static site generators (which are content-centric) these apps let you explore advanced user interactions that can benefit from SWA concepts like serverless API and authentication support. Need some inspiration? Take a look at the recently released ",(0,n.kt)("a",{parentName:"p",href:"https://risingstars.js.org/2021/en#section-framework"},"Rising Stars Of JavaScript: Front-end Frameworks")," list and see if any of those projects have starters you can repurpose."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Example:  Simona\'s "Sticker Shop" Project'),". "),(0,n.kt)("p",null,"Check out this example from Simona Cotin (currently a Principal PM on the Static Web Apps team) which forked the ",(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/blog/strapi-starter-nuxt-js-e-commerce"},"Strapi e-commerce starter")," and adapted it for deployment on Azure Static Web Apps. The Strapi ",(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/blog/strapi-starter-nuxt-js-e-commerce"},"tutorial")," talks you through the setup and structure of the application - making it a perfect place to explore just adding SWA integrations. ",(0,n.kt)("strong",{parentName:"p"},"Bonus:")," Simona's deployment also takes advantage of SWA's ",(0,n.kt)("em",{parentName:"p"},"custom domain")," support, making the app accessible at the ",(0,n.kt)("a",{parentName:"p",href:"https://aswa.cloud"},"https://aswa.cloud")," domain."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sticker Shop",src:a(46792).Z,width:"2040",height:"1856"})," "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Related Resources:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://strapi.io/blog/strapi-starter-nuxt-js-e-commerce"},"Read the Tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/simonaco/sticker-shop"},"Browse the Source")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.aswa.cloud/"},"Visit the Website"))),(0,n.kt)("h3",{id:"3-oss-apps"},"3. OSS Apps"),(0,n.kt)("p",null,"Sometimes, you find the right application not because of the framework - but because its a use case that really resonates with you - even if you are not necessarily familiar with the underlying technology. These projects are great because your interest in the end result makes you more curious to dig under the hood, improving your understanding of new applicaton architectures and tooling. Need some inspiration? My favorite starting point is the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sindresorhus/awesome"},"awesome")," repo which is a directory of ",(0,n.kt)("inlineCode",{parentName:"p"},"awesome-XYZ")," lists for a given technology ",(0,n.kt)("inlineCode",{parentName:"p"},"XYZ"),". Many of these lists identify tutorials, open-source projects and starter template repos that can be the basis for your experiments!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Example:  My "Google Codelabs" Project'),". "),(0,n.kt)("p",null,"If you've attended any Google Developer events or community conferences, chances are you'll have encountered their ",(0,n.kt)("a",{parentName:"p",href:"https://codelabs.developers.google.com/"},"Codelabs")," site - a repository of step-by-step tutorials that cover a wide range of technologies. But did you know that they ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/googlecodelabs/tools"},"open-sourced the codelabs management and hosting tools"),"? "),(0,n.kt)("p",null,"The underlying tooling uses Golang but the actual content is written in Markdown, and converted into the required static files by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/googlecodelabs/tools/tree/main/claat"},(0,n.kt)("inlineCode",{parentName:"a"},"claat")),', the "Code Labs As A Tool" utility. Follow along to create your own codelabs - and host them on Azure Static Web Apps. ',(0,n.kt)("strong",{parentName:"p"},"Bonus:")," The hosted app ",(0,n.kt)("em",{parentName:"p"},"is")," the tutorial for how it was created. Isn't that meta?"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Google Codelabs",src:a(77326).Z,width:"2044",height:"1998"})," "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Related Resources:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/@zarinlo/publish-technical-tutorials-in-google-codelab-format-b07ef76972cd"},"Read the Tutorial")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/nitya/swa-googlecodelabs"},"Browse the Source")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://agreeable-bush-016b49e0f.1.azurestaticapps.net/#0"},"Visit the Website"))),(0,n.kt)("h2",{id:"share-gallery"},"Share: Gallery"),(0,n.kt)("p",null,"We've talked about Project ideas that help ",(0,n.kt)("strong",{parentName:"p"},"you")," learn by repurposing the open-source projects, tutorials or templates generated by others. Now let's talk about paying it forward by ",(0,n.kt)("strong",{parentName:"p"},"sharing")," your project to inspire others."),(0,n.kt)("p",null,"That is the purpose of the ",(0,n.kt)("a",{parentName:"p",href:"/showcase"},"Static Web Apps Showcase")," that we will be debuting before the end of May. You can see a sneak preview of what the app gallery looks like, allowing developers to search for projects that have ",(0,n.kt)("em",{parentName:"p"},"live")," deployments and ",(0,n.kt)("em",{parentName:"p"},"open source")," codebases, and use one of the listed front-end technologies. ",(0,n.kt)("strong",{parentName:"p"},"Bookmark this post or track the ",(0,n.kt)("em",{parentName:"strong"},"Showcase")," link on this site, to know when the Showcase feature goes live!")," Be the first to submit a project for some of the more recent technologies added to that list!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SWA Gallery",src:a(61332).Z,width:"936",height:"826"})," "),(0,n.kt)("h2",{id:"simplify-swa-cli"},"Simplify: SWA CLI"),(0,n.kt)("p",null,"One last thing. In all the usage examples and tutorial so far, we've typically emphasized either the ",(0,n.kt)("strong",{parentName:"p"},"IDE")," option (using the Visual Studio Code SWA extension) or the ",(0,n.kt)("strong",{parentName:"p"},"Azure Portal")," option (activated by the ",(0,n.kt)("inlineCode",{parentName:"p"},"Deploy to Azure")," button configured on repo README). "),(0,n.kt)("p",null,"But what if you could do everything from the command-line - from initializing your project configuration, to building and testing your application locally, to deploying it to the cloud in a production or preview environment? That's the promise behind the ",(0,n.kt)("a",{parentName:"p",href:"https://aka.ms/swa-cli"},"Azure Static Web Apps CLI"),". ",(0,n.kt)("strong",{parentName:"p"},"Join us May 19 for a special #SWAanniversary event")," for some exciting announcements in this context."),(0,n.kt)("p",null,'Then bookmark and revisit this page later in May for an updated section where we discuss how we can further simplify and streamline our "learn by doing" projects with this tool!'),(0,n.kt)("h2",{id:"exercise"},"Exercise"),(0,n.kt)("p",null,"We've looked at various resources you can start with, to scaffold a real-world application that you can then configure for SWA deployment and further customization. Go ahead and pick something and expand on the app to create something new. Then contribute it to ",(0,n.kt)("a",{parentName:"p",href:"/showcase"},"our upcoming Showcase")," project!"),(0,n.kt)("p",null,"Need more inspiration? I'm a fan of React, but I've wanted to explore ",(0,n.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact")," as a performant alternative with a comparable API. The ",(0,n.kt)("a",{parentName:"p",href:"https://preactjs.com/about/demos-examples/"},"Preact Demos")," page has a rich set of examples - including this ",(0,n.kt)("a",{parentName:"p",href:"https://thomaswood.me/"},"Homepage Generator")," which is a perfect 1-page resume template you can customize for ",(0,n.kt)("strong",{parentName:"p"},"your")," profile. ",(0,n.kt)("em",{parentName:"p"},"Try it out!")))}m.isMDXComponent=!0},61332:function(e,t,a){t.Z=a.p+"assets/images/swa-showcase-5214e0f3f6ea04a71fc5e8c82a94545a.png"},2343:function(e,t,a){t.Z=a.p+"assets/images/week2-roadmap-aa8766edf791b4ed83fa999f74497b9b.png"},51574:function(e,t,a){t.Z=a.p+"assets/images/14-banner-827cfc4b4aa735771c9a0615208d75ca.png"},77326:function(e,t,a){t.Z=a.p+"assets/images/14-codelabs-f00e9249a556bf973fe7df3da6af2ad0.png"},63247:function(e,t,a){t.Z=a.p+"assets/images/14-recipeme-87656adb575f75143bbce90bd447318a.png"},46792:function(e,t,a){t.Z=a.p+"assets/images/14-simona-stickers-55034595b7442f9908c438afb1d89192.png"}}]);