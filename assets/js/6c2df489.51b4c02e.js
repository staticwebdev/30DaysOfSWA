"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[2246],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6226:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={slug:"devtools-swacli-develop",title:"#19: Develop with SWA CLI",authors:["yohan"],tags:["swa","30days","dev-tools"],draft:!1},s=void 0,p={permalink:"/blog/devtools-swacli-develop",source:"@site/blog/2022-05-20.md",title:"#19: Develop with SWA CLI",description:"Welcome to Week 3, Day 5 of #30DaysOfSWA!!",date:"2022-05-20T00:00:00.000Z",formattedDate:"May 20, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:4.685,truncated:!1,authors:[{name:"Yohan Lasorsa",title:"Senior Cloud Advocate @Microsoft",url:"https://twitter.com/sinedied",imageURL:"https://github.com/sinedied.png",key:"yohan"}],frontMatter:{slug:"devtools-swacli-develop",title:"#19: Develop with SWA CLI",authors:["yohan"],tags:["swa","30days","dev-tools"],draft:!1},prevItem:{title:"#20: Deploy with SWA CLI",permalink:"/blog/devtools-swacli-deploy"},nextItem:{title:"#18: Debug with Edge DevTools",permalink:"/blog/devtools-msedge"}},u={authorsImageUrls:[void 0]},c=[{value:"<code>swa</code>",id:"swa",level:2},{value:"Creating the configuration",id:"creating-the-configuration",level:2},{value:"Building your project",id:"building-your-project",level:2},{value:"Running your app locally",id:"running-your-app-locally",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Tell us your feedback!",id:"tell-us-your-feedback",level:2},{value:"Resources",id:"resources",level:2}],d={toc:c};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://www.azurestaticwebapps.dev/blog/devtools-swacli-develop"}),(0,r.kt)("meta",{name:"twitter:title",content:"##19: Develop with SWA CLI"}),(0,r.kt)("meta",{name:"twitter:description",content:"Join @sinedied on #30DaysOfSWA as debuts the new SWA CLI for @AzureStaticApps and walks through the build process!"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://www.azurestaticwebapps.dev/assets/images/19-banner-ecd588da06f9f1af0f0e8a5f3323aa20.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureStaticApps"}),(0,r.kt)("link",{rel:"canonical",href:"https://dev.to/azure/get-started-with-the-new-azure-static-web-apps-cli-mm3"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Week 3, Day 5")," of ",(0,r.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,r.kt)("p",null,'We\'re past the halfway mark in "Dev Tools" week! We looked at developer tools to help provision Azure resources, automate cross-browser testing, streamline CI/CD, and debug/audit your SWA for performance and accessibility. But what about ',(0,r.kt)("strong",{parentName:"p"},"local development")," - something to help me go from ",(0,r.kt)("em",{parentName:"p"},"start")," (project creation & configuration) to ",(0,r.kt)("em",{parentName:"p"},"finish")," (build & deploy) in ",(0,r.kt)("strong",{parentName:"p"},"one tool"),"? Let's say hello to the ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/30DaysOfSWA/swa-cli"},"Azure Static Web Apps CLI"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"What We'll Cover")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"swa")," - One command to rule them all!"),(0,r.kt)("li",{parentName:"ul"},"Creating the configuration"),(0,r.kt)("li",{parentName:"ul"},"Building your project"),(0,r.kt)("li",{parentName:"ul"},"Running your app locally"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exercise"),": Use the new ",(0,r.kt)("inlineCode",{parentName:"li"},"swa")," CLI to build and run a starter app!")))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9611).Z,width:"1000",height:"420"})),(0,r.kt)("p",null,"You may have missed it, but the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli"},"new Azure Static Web Apps CLI")," is now available!"),(0,r.kt)("p",null,"It would take a whole post to describe all the changes and new features, but here are some of the highlights. With the new ",(0,r.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"build"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," commands, the complete developement cycle of your app is now available ",(0,r.kt)("em",{parentName:"p"},"in a single tool"),", directly from the command line. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(32606).Z,width:"1000",height:"420"})),(0,r.kt)("p",null,"To get started, make sur you have a recent ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org"},"Node.js")," version installed (>14) and type this command in your terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -g @azure/static-web-apps-cli\n")),(0,r.kt)("p",null,"We'll now have a look at the new commands and the most important features."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you've never heard of Static Web Apps (or SWA for short), it's a web app hosting service provided by Azure, offering streamlined full-stack development with many built-in features like authentication, customizable routing, serverless functions and more. It also has a great ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/?WT.mc_id=javascript-0000-yolasors"},"free tier")," \ud83d\ude09"))),(0,r.kt)("h2",{id:"swa"},(0,r.kt)("inlineCode",{parentName:"h2"},"swa")),(0,r.kt)("p",null,"As the new CLI introduces a gazillion new options, it must quite a steep learning curve to get started? Quite the opposite!"),(0,r.kt)("p",null,"Every command starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"swa"),", and now it might also be the only thing you'll need."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# yes, that's all you need to type\nswa\n")),(0,r.kt)("p",null,"This command is a macro shorcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"swa init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"swa build"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"swa login")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"swa deploy"),". We'll get to the details of all these commands in a bit, the most important thing here is that ",(0,r.kt)("inlineCode",{parentName:"p"},"swa")," is the only command you need to know to configure a new project for use with Static Web Apps, build it and deploy it. You don't have to worry about any options or flags, just type ",(0,r.kt)("inlineCode",{parentName:"p"},"swa")," and you'll be on your way. "),(0,r.kt)("h2",{id:"creating-the-configuration"},"Creating the configuration"),(0,r.kt)("p",null,"The first of the new commands is ",(0,r.kt)("inlineCode",{parentName:"p"},"swa init"),". This commands with detect your project configuration and the frameworks you're using to suggest a configuration for you, so you won't have to read through ",(0,r.kt)("a",{parentName:"p",href:"https://azure.github.io/static-web-apps-cli/"},"the shiny new docs")," to figure out what options you need."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"swa init command screenshot",src:a(15793).Z,width:"1138",height:"423"})),(0,r.kt)("p",null,"After asking a name for your project configuration, you can validate or edit the detected project settings. Once finished, it will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")," file in the current folder with your settings. You can commit this file in your project repository so everyone from your team can use it."),(0,r.kt)("h2",{id:"building-your-project"},"Building your project"),(0,r.kt)("p",null,"After the configuration is created, you're all set to use other commands without having to bother with any options or flags."),(0,r.kt)("p",null,"Whether you need to build your front-end app, your API, or both, the ",(0,r.kt)("inlineCode",{parentName:"p"},"swa build")," command will do the job. It also takes care of installing your NPM dependencies (if needed) detecting if you're using npm, Yarn or PNPM with your project."),(0,r.kt)("h2",{id:"running-your-app-locally"},"Running your app locally"),(0,r.kt)("p",null,"Historically, being able to run your app locally was the first feature of the SWA CLI. Of course it's still there, and ",(0,r.kt)("inlineCode",{parentName:"p"},"swa start")," allows you to emulate the SWA runtime environment, along with the routing, authentication features and API. A few changes were made to improve the developer experience, and of course bugs were fixed to more closely match the real SWA runtime."),(0,r.kt)("p",null,"Previously, if you were using an API, you had to install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?tabs=v4%2Cwindows%2Ccsharp%2Cportal%2Cbash&WT.mc_id=javascript-0000-yolasors#publish"},"Functions Core Tools")," and make sure to match the tools version with the Node.js version you're using, but now the whole process is automated for you. If you don't have the tools installed or if the wrong version is installed, you don't have to worry about it: it will be automatically installed for you when needed."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"With these new commands, you can already setup your project, build it and test it locally. Using ",(0,r.kt)("inlineCode",{parentName:"p"},"swa start")," is also great for debugging your app and API in a live running environment. Once you're happy with the result, you can deploy it to Azure, and that's what we'll explore in the next post."),(0,r.kt)("p",null,"In the meantime, you can also head to ",(0,r.kt)("a",{parentName:"p",href:"https://azure.github.io/static-web-apps-cli/"},"the new docs website")," to learn more about the new features and how to use them."),(0,r.kt)("h2",{id:"tell-us-your-feedback"},"Tell us your feedback!"),(0,r.kt)("p",null,"We're also ",(0,r.kt)("a",{parentName:"p",href:"https://dev.to/azure/get-started-with-the-new-azure-static-web-apps-cli-mm3"},"here on dev.to")," to listen and help as much as we can! \ud83d\ude42"),(0,r.kt)("p",null,"Please tell us your experience, your difficulties, your questions, and what features you would like to see in the next versions of the SWA CLI."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,"Want to see the Static Web Apps CLI in action? The tool became generally available yesterday, launching at the ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/swaanniversary"},"Azure Static Web Apps Anniversary"),". Watch the segment to see the SWA CLI in action."),(0,r.kt)("iframe",{width:"560",height:"315",frameborder:"0",src:"https://www.youtube.com/embed/1e6k5HNK4F8",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}m.isMDXComponent=!0},9611:function(e,t,a){t.Z=a.p+"assets/images/19-banner-ecd588da06f9f1af0f0e8a5f3323aa20.png"},32606:function(e,t,a){t.Z=a.p+"assets/images/19-cli-banner-1-1bac73f4685c9f14cf25034fe74a405e.jpeg"},15793:function(e,t,a){t.Z=a.p+"assets/images/19-init-d5f344eba5b610e07a7b54f390b6a958.png"}}]);