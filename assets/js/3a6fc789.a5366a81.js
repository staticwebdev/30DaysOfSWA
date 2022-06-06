"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[6731],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return u}});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(o),u=a,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return o?n.createElement(m,i(i({ref:t},p),{},{components:o})):n.createElement(m,i({ref:t},p))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},8275:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],s={slug:"devtools-msedge",title:"#18: Debug with Edge DevTools",authors:["patrick"],tags:["swa","30days","dev-tools"],draft:!1,description:"Learn to use Microsoft Edge DevTools and its VS Code Extension to debug you Azure Static Web App and improve performance and accessibility",image:"../static/img/series/18-banner.png",keywords:["devtools","msedge","azure","staticwebapps","vscode"]},l=void 0,c={permalink:"/blog/devtools-msedge",source:"@site/blog/2022-05-19.md",title:"#18: Debug with Edge DevTools",description:"Learn to use Microsoft Edge DevTools and its VS Code Extension to debug you Azure Static Web App and improve performance and accessibility",date:"2022-05-19T00:00:00.000Z",formattedDate:"May 19, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:15.22,truncated:!1,authors:[{name:"Patrick Brosset",title:"Edge Dev Experience PM @Microsoft",url:"https://twitter.com/patrickbrosset",imageURL:"https://github.com/captainbrosset.png",key:"patrick"}],frontMatter:{slug:"devtools-msedge",title:"#18: Debug with Edge DevTools",authors:["patrick"],tags:["swa","30days","dev-tools"],draft:!1,description:"Learn to use Microsoft Edge DevTools and its VS Code Extension to debug you Azure Static Web App and improve performance and accessibility",image:"../static/img/series/18-banner.png",keywords:["devtools","msedge","azure","staticwebapps","vscode"]},prevItem:{title:"#19: Develop with SWA CLI",permalink:"/blog/devtools-swacli-develop"},nextItem:{title:"#17: Multi-Stage Deploy with ADO",permalink:"/blog/devtools-ado"}},p={authorsImageUrls:[void 0]},d=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Debug front-end code from VS Code",id:"debug-front-end-code-from-vs-code",level:2},{value:"Get started with Edge DevTools VS Code extension",id:"get-started-with-edge-devtools-vs-code-extension",level:3},{value:"Mirror CSS changes to source files",id:"mirror-css-changes-to-source-files",level:3},{value:"Find issues with your code",id:"find-issues-with-your-code",level:3},{value:"Get your console messages",id:"get-your-console-messages",level:3},{value:"Learn about other DevTools features",id:"learn-about-other-devtools-features",level:2},{value:"Fix accessibility issues",id:"fix-accessibility-issues",level:3},{value:"Improve performance",id:"improve-performance",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Exercise",id:"exercise",level:2}],h={toc:d};function u(e){var t=e.components,s=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("meta",{name:"twitter:url",content:"https://www.azurestaticwebapps.dev/blog/devtools-msedge"}),(0,r.kt)("meta",{name:"twitter:title",content:"#18: Debug with Edge DevTools"}),(0,r.kt)("meta",{name:"twitter:description",content:"Join @patrickbrosset on #30DaysOfSWA to explore Debugging, Perf, #Accessibility for @AzureStaticApps using @MSEdgeDev #DevTools on @code"}),(0,r.kt)("meta",{name:"twitter:image",content:"https://www.azurestaticwebapps.dev/assets/images/18-banner-3c83eb95b9d1aabe5f27d4282c5423ad.png"}),(0,r.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.kt)("meta",{name:"twitter:creator",content:"@nitya"}),(0,r.kt)("meta",{name:"twitter:site",content:"@AzureStaticApps"}),(0,r.kt)("link",{rel:"canonical",href:"https://www.azurestaticwebapps.dev/blog/devtools-msedge"})),(0,r.kt)("p",null,"Welcome to ",(0,r.kt)("inlineCode",{parentName:"p"},"Week 3, Day 4")," of ",(0,r.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!!"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"GLOBAL ACCESSIBILITY AWARENESS DAY")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Did you know today is ",(0,r.kt)("a",{parentName:"p",href:"https://accessibility.day/"},"Global Accessibility Awareness Day")," - a day where we think about ",(0,r.kt)("strong",{parentName:"p"},"digital accessibility")," and what it means to make the web experience inclusive and friendly to everyone! "),(0,r.kt)("p",{parentName:"div"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/microsoft-edge/accessibility/"},"Accessbility in Microsoft Edge")," documentation to learn best practices around designing, building, and testing, your modern websites for accessibility."))),(0,r.kt)("p",null,"As we'll learn in a post later this week (stay tuned!), using the ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurestaticwebapps"},"Azure Static Web Apps extension for VS Code")," makes it quick to create and manage your Web Apps directly from VS Code.\n",(0,r.kt)("em",{parentName:"p"},"But what about the other aspects of your developer experience - like debugging your web app or profiling its performance in the browser?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"As a web developer, it's important to minimize context switching.")," "),(0,r.kt)("p",null,"The fewer tools you need to use to do your job, the better. This way you can stay focused on the tasks at hand more easily, without having to constantly deal with multiple tools and windows on your computer. You become more productive when the tools you rely on work better together."),(0,r.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Getting started with the ",(0,r.kt)("strong",{parentName:"li"},"Edge DevTools")," VS Code extension"),(0,r.kt)("li",{parentName:"ul"},"Seamless ",(0,r.kt)("strong",{parentName:"li"},"debugging")," experiences for your front-end app."),(0,r.kt)("li",{parentName:"ul"},"Discovering some of the DevTools ",(0,r.kt)("strong",{parentName:"li"},"accessibility")," tools."),(0,r.kt)("li",{parentName:"ul"},"Discovering some of the DevTools ",(0,r.kt)("strong",{parentName:"li"},"performance improvement")," tools."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exercise:")," Install the Edge DevTools VSCode Extension and try these features out!")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(44284).Z,width:"1000",height:"420"})),(0,r.kt)("h2",{id:"debug-front-end-code-from-vs-code"},"Debug front-end code from VS Code"),(0,r.kt)("p",null,"After you've created your SWA and have started adding more functionality to it, there will come a time when debugging your front-end code may become useful. Maybe you've added some JavaScript front-end logic that needs debugging, or maybe you've added new CSS layout code that needs inspecting."),(0,r.kt)("p",null,"The DevTools built in to your favorite browser come in very handy at this point. But, having to switch between your source files in your editor and your browser window to do the debugging can quickly become frustrating. It's also prone to errors as there aren't great solutions to move the tweaks you do in DevTools back to your editor."),(0,r.kt)("p",null,"One tool that can help a lot here is the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools"},"Microsoft Edge Developer Tools extension for VS Code")),". This extension gives you DevTools in VS Code directly."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Edge DevTools For Visual Studio Code v2 Just Released!")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://dev.to/codepo8/edge-devtools-for-visual-studio-code-v2-1bp3"},(0,r.kt)("strong",{parentName:"a"},"Read this post"))," to learn about improvements and new features like ",(0,r.kt)("em",{parentName:"p"},"Screencast with emulation support"),", ",(0,r.kt)("em",{parentName:"p"},"Sourcemap support for styles")," and more!"))),(0,r.kt)("p",null,"With this extension, the ",(0,r.kt)("strong",{parentName:"p"},"Elements")," and ",(0,r.kt)("strong",{parentName:"p"},"Network")," are embedded directly within VS Code, your ",(0,r.kt)("strong",{parentName:"p"},"Console")," messages appear in the VS Code console, issues detected by the Edge ",(0,r.kt)("strong",{parentName:"p"},"Issues")," panel are highlighted in your source code directly, and you get a live preview of your web app's front-end right in VS Code!"),(0,r.kt)("p",null,"Finally, as you tweak your CSS code from within the ",(0,r.kt)("strong",{parentName:"p"},"Styles")," panel, your changes are automatically applied to your source files, even if you use a CSS pre-processor."),(0,r.kt)("h3",{id:"get-started-with-edge-devtools-vs-code-extension"},"Get started with Edge DevTools VS Code extension"),(0,r.kt)("p",null,"First let's install the extension, right from VS Code."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In VS Code, open the ",(0,r.kt)("strong",{parentName:"li"},"Extensions"),' sidebar, and search for "Edge Tools".'),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Microsoft Edge Tools for VS Code")," extension should be listed. Click the ",(0,r.kt)("strong",{parentName:"li"},"Install")," button and wait for the process to end.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of VSCode showing the Extensions sidebar with the Edge Tools for VS Code extension displayed",src:o(17470).Z,width:"1300",height:"654"})),(0,r.kt)("p",null,"Once installed, the extension appears as a new icon in the ",(0,r.kt)("strong",{parentName:"p"},"Activity bar")," which gives you access to useful features. Let's jump straight in and make use of the most useful feature: generating a ",(0,r.kt)("inlineCode",{parentName:"p"},"launch.json")," configuration file for your project."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Microsoft Edge Tools")," extension icon in the ",(0,r.kt)("strong",{parentName:"li"},"Activity bar"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Generate launch.json"),". A file appears in VS Code with some useful configuration details we can tweak.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of VSCode showing the Edge Tools sidebar with the button to generate a launch json file and the file created next to it",src:o(71034).Z,width:"1400",height:"640"})),(0,r.kt)("p",null,"The most important configuration you should change now is the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and perhaps add a ",(0,r.kt)("inlineCode",{parentName:"p"},"preLaunchTask")," if you need to."),(0,r.kt)("p",null,"I'll use my blog to illustrate the changes here. In this project, I have a build task configured that generates the HTML code for my blog from markdown, watches for changes in files, and serves the resulting site from HTTP port 8080."),(0,r.kt)("p",null,"So, in my case, I'll update the ",(0,r.kt)("strong",{parentName:"p"},"Launch Microsoft Edge in headless mode")," configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"launch.json")," to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "pwa-msedge",\n  "name": "Launch Microsoft Edge in headless mode",\n  "request": "launch",\n  "runtimeArgs": [\n    "--headless",\n    "--remote-debugging-port=9222"\n  ],\n  "preLaunchTask": "npm: serve",\n  "url": "http://localhost:8080",\n  "presentation": {\n    "hidden": true\n  }\n}\n')),(0,r.kt)("p",null,"When this launch configuration is used, it will build my blog from source code, serve it on a local server, open the browser directly within VS Code, and the DevTools panels alongside it. Let's test it! Click on ",(0,r.kt)("strong",{parentName:"p"},"Launch Project")," in the ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Edge Tools")," extension to get everything running."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of VSCode showing 3 panels side by side: a CSS file, the DevTools, and the browser rendering of my site",src:o(74776).Z,width:"1400",height:"814"})),(0,r.kt)("p",null,"Now try to apply this to your own project, changing the configuration to match your needs. Next, we'll review the most useful features of the extension."),(0,r.kt)("h3",{id:"mirror-css-changes-to-source-files"},"Mirror CSS changes to source files"),(0,r.kt)("p",null,"Tweaking CSS properties in DevTools is great because you get a live preview of your changes on the web page, and with the ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Edge Tools")," extension, you also get mirroring of your changes right back to the corresponding source file. This way, you don't need to remember all of the changes you made and manually apply them to your editor. The extension is able to figure out the mapping between the live CSS code and the source files in your project."),(0,r.kt)("p",null,"Changing CSS code in the ",(0,r.kt)("strong",{parentName:"p"},"Styles")," panel automatically opens the corresponding source file and applies the same change."),(0,r.kt)("p",null,"Note that the extension does not save the CSS source file for you. You can keep on tweaking CSS in DevTools and, only once you're ready, save the changes made by the extension in the source file on your behalf."),(0,r.kt)("p",null,"You can learn more about CSS mirroring in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/microsoft-edge/visual-studio-code/microsoft-edge-devtools-extension#syncing-live-changes-from-the-styles-tool-by-using-css-mirror-editing"},"Microsoft Edge DevTools extension docs"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of VSCode showing editing a CSS value in the DevTools pane and the value being reflected in the source file",src:o(78467).Z,width:"1600",height:"834"})),(0,r.kt)("h3",{id:"find-issues-with-your-code"},"Find issues with your code"),(0,r.kt)("p",null,"Edge DevTools comes with a built-in ",(0,r.kt)("strong",{parentName:"p"},"Issues")," tool that provides useful information about the inspected web page. For example, it can report on browser compatibility, accessibility, or security issues."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Edge Tools")," extension in VS Code provides the same feature, but integrated right into your source code. For example, browser compatibility warnings are highlighted in your CSS source code with squiggly lines, and hovering over the highlight reveals more information about the issue."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of part of a CSS file in the VSCode editor, with a CSS property underline and a tooltip showing the browser compatibility warning related to using this property",src:o(991).Z,width:"1400",height:"281"})),(0,r.kt)("p",null,"You can also review all issues at once by opening the ",(0,r.kt)("strong",{parentName:"p"},"Problems")," panel in VS Code's bottom drawer."),(0,r.kt)("p",null,"You can learn about other ways to find issues with your code in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/microsoft-edge/visual-studio-code/microsoft-edge-devtools-extension#inline-and-live-issue-analysis"},"Microsoft Edge DevTools extension docs"),"."),(0,r.kt)("h3",{id:"get-your-console-messages"},"Get your console messages"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Edge Tools")," extension in VS Code also integrates the very popular ",(0,r.kt)("strong",{parentName:"p"},"Console")," tool. People rely on the console all the time when debugging their code."),(0,r.kt)("p",null,"Because the extension also works with the built-in VS Code JavaScript debugger, that means you can debug your front-end JavaScript code in VS Code as normal, and see your console logs in DevTools right next to you."),(0,r.kt)("h2",{id:"learn-about-other-devtools-features"},"Learn about other DevTools features"),(0,r.kt)("p",null,"As we've just seen, the ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Edge Tools")," extension is very helpful. It caters for most web development tooling needs, while ensuring you have a seamless experience without having to leave VS Code."),(0,r.kt)("p",null,"But there's more to the Edge DevTools available in the browser (the tools you get when you press ",(0,r.kt)("strong",{parentName:"p"},"F12"),") that's not yet available within the VS Code extension version."),(0,r.kt)("p",null,"Building a great SWA means building a great web app first and foremost and while learning the ins and outs of SWA is very important, learning about how to build a performant and accessible web experience for all your users is also crucial."),(0,r.kt)("p",null,"Let's discover a few tools and features of DevTools that can help you with this."),(0,r.kt)("h3",{id:"fix-accessibility-issues"},"Fix accessibility issues"),(0,r.kt)("p",null,"Every year the ",(0,r.kt)("a",{parentName:"p",href:"https://webaim.org/"},"WebAIM organization")," publishes a report of the most common website issues that create accessibility problems for people. Sadly, every year the result is quite depressing. You can read the ",(0,r.kt)("a",{parentName:"p",href:"https://webaim.org/projects/million/"},"WebAIM Million 2022 report"),"."),(0,r.kt)("p",null,"On the bright side though, the most common accessibility issues can be detected and solved easily with DevTools! So let's learn about some of the features that can help create more accessible web experiences for all."),(0,r.kt)("p",null,"The most common accessibility problem out there is low contrast text. If the contrast ratio between the text color and the color of the background behind it is too low, then people might not be able to read the text at all. The color picker in DevTools is a great way to detect these problems."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Right-click a piece of text on your web page and select ",(0,r.kt)("strong",{parentName:"li"},"Inspect"),"."),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Styles")," tab, find the ",(0,r.kt)("strong",{parentName:"li"},"color")," CSS property that defines which color the text is, and click the colored square next to it."),(0,r.kt)("li",{parentName:"ol"},"Review the ",(0,r.kt)("strong",{parentName:"li"},"Contrast ratio")," in the color picker. Your goal is to have 2 check marks next to it, meaning that the contrast ratio meets the recommendation.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the Elements tool in Edge, showing the color picker on one of the text color CSS properties in the Styles pane, with the contrast ratio report.",src:o(58964).Z,width:"1400",height:"844"})),(0,r.kt)("p",null,"If the text doesn't have enough contrast, then you can fix the problem right here in DevTools."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"show more")," arrow next to the ",(0,r.kt)("strong",{parentName:"li"},"Color contrast")," value to reveal more information. Two lines will appear in the color picker."),(0,r.kt)("li",{parentName:"ol"},"Use these lines to choose a color that meets the recommendation.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screencast showing the color picker in the Styles pane, with the 2 guide lines to choose a color that has enough contrast. Moving the current color selection across those 2 lines recalculates the ratio in real time.",src:o(31211).Z,width:"1585",height:"622"})),(0,r.kt)("p",null,"Another very common accessibility problem is missing alternative text for images (or alt text). Alt text helps users of screen readers perceive the content of an image, but it also important for cases where users decide to disable images, or when images fail to load, and even for search engine optimization. And, DevTools can detect missing alt text automatically! So there's really no excuses for not writing great textual substitute for your images."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open DevTools by pressing ",(0,r.kt)("strong",{parentName:"li"},"F12"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"More Tools")," (",(0,r.kt)("strong",{parentName:"li"},"+"),") in the main toolbar at the top and select the ",(0,r.kt)("strong",{parentName:"li"},"Issues")," tool from the list."),(0,r.kt)("li",{parentName:"ol"},"Check if the list of issues contains an ",(0,r.kt)("strong",{parentName:"li"},"Accessibility")," category. If it does, check for ",(0,r.kt)("strong",{parentName:"li"},"Images must have alternate text")," warnings."),(0,r.kt)("li",{parentName:"ol"},"Open one of the warnings, review the problem, and click ",(0,r.kt)("strong",{parentName:"li"},"Open in Elements")," to see the problem directly in the ",(0,r.kt)("strong",{parentName:"li"},"Elements")," tool.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the Issues tool in Edge, showing 4 missing alt-text warnings.",src:o(86531).Z,width:"1400",height:"844"})),(0,r.kt)("p",null,"Now let's talk about source order. The order in which assistive technology (such as screen readers) navigates a page is linked to the order in which the various elements appear in the document source code. Now, this order might be very different from the order in which the elements appear, visually, on the screen. Using CSS, you can re-order things visually, without changing the document source order."),(0,r.kt)("p",null,"So, to make sure the document navigation makes sense to all, even to users of assistive technology, it is important to check that the source order itself makes sense."),(0,r.kt)("p",null,"Edge and Chrome DevTools have a ",(0,r.kt)("strong",{parentName:"p"},"Source Order Viewer")," feature that helps with this."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open DevTools by pressing ",(0,r.kt)("strong",{parentName:"li"},"F12"),"."),(0,r.kt)("li",{parentName:"ol"},"Open the ",(0,r.kt)("strong",{parentName:"li"},"Elements")," tool and select a layout element which you want to check the source order in."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Accessibility")," in the tool's sidebar."),(0,r.kt)("li",{parentName:"ol"},"At the bottom of the ",(0,r.kt)("strong",{parentName:"li"},"Accessibility")," pane, select the ",(0,r.kt)("strong",{parentName:"li"},"Show source order")," checkbox. An overlay appears showing the source order with numbers."),(0,r.kt)("li",{parentName:"ol"},"Keep selecting different elements in the DOM tree to review their source order.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the Accessibility pane in the Elements tool in Edge, with the source order viewer checkbox selected, and the numbers overlay displayed on the page.",src:o(74524).Z,width:"1500",height:"848"})),(0,r.kt)("h3",{id:"improve-performance"},"Improve performance"),(0,r.kt)("p",null,"Great performance can have a very positive impact on your website. A page that appears fast and responds to user actions instantly can impact user retention, engagement, and even revenue."),(0,r.kt)("p",null,"Performance improvement work can be daunting, but there are two useful tools in DevTools that can ease the pain: the ",(0,r.kt)("strong",{parentName:"p"},"Performance")," tool and the ",(0,r.kt)("strong",{parentName:"p"},"Detached Elements")," tool."),(0,r.kt)("p",null,"Let's start with the ",(0,r.kt)("strong",{parentName:"p"},"Performance")," tool. You'll find one in all browser DevTools, Edge, Chrome, Firefox, or Safari. They're all a little bit different, but at their core give you ways to understand the runtime performance of the inspected web page over a given period of time."),(0,r.kt)("p",null,"To use the tool in Edge:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open DevTools by pressing ",(0,r.kt)("strong",{parentName:"li"},"F12"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Performance")," in the main toolbar at the top (you might have to click on the ",(0,r.kt)("strong",{parentName:"li"},"More tabs")," (",(0,r.kt)("strong",{parentName:"li"},">>"),") button first if the tab isn't visible."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Record")," button."),(0,r.kt)("li",{parentName:"ol"},"Use the web page as a normal user would."),(0,r.kt)("li",{parentName:"ol"},"Stop the recording with the ",(0,r.kt)("strong",{parentName:"li"},"Stop")," button.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the performance tool in Edge DevTools",src:o(53861).Z,width:"1400",height:"944"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Performance")," tool can tell you how busy (or idle) the browser was with things like running JavaScript code, reacting to user events, and re-rendering the page during the recording period. So it's a great way to find bottlenecks in your site's performance and therefore know what fixes would give the best bang for your bucks."),(0,r.kt)("p",null,"One example, if your site does a lot of animations and other visual things, is that the tool can report on frames per second (FPS) and alert you when the rate drops too low and could impact the user experience."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Performance")," tool has a lot of functionality packed into a small user interface, so it can be important to go through its documentation to understand what everything does. To learn more, check out ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/evaluate-performance/"},"Get started analyzing runtime performance")),(0,r.kt)("p",null,"Another important performance aspect is memory. How much memory your site uses of what's available, and whether it keeps on using more and more memory over time can make your site, and even the entire computer, run slow."),(0,r.kt)("p",null,"One type of memory leaks is DOM leaks, where the front-end JavaScript code does a lot of DOM node manipulation and, in the process, keeps references to more and more DOM nodes it doesn't need any longer. As the complexity of your app or site grows, it gets easier to make mistakes and introduce these types of memory leaks by accident."),(0,r.kt)("p",null,"Edge comes with a tool called ",(0,r.kt)("strong",{parentName:"p"},"Detached Elements")," which is great for investigating this type of memory leaks. Knowing that you have a leak isn't too hard, but knowing where it originates from can feel like playing hide-and-seek in the dark. The ",(0,r.kt)("strong",{parentName:"p"},"Detached Elements")," tool points at DOM nodes that are still around in memory but not used in the page, and tells you which part of your code still references them. This way you can take a look at your code, and decide whether these nodes are, indeed, being leaked and need to be destroyed, potentially saving a lot of memory and improving performance."),(0,r.kt)("p",null,"To use the tool in Edge:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open DevTools by pressing ",(0,r.kt)("strong",{parentName:"li"},"F12"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"More Tools")," (",(0,r.kt)("strong",{parentName:"li"},"+"),") in the main toolbar at the top and select the ",(0,r.kt)("strong",{parentName:"li"},"Detached Elements")," tool from the list."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Get detached elements")," button to list the DOM nodes in memory that aren't used in the page."),(0,r.kt)("li",{parentName:"ol"},"You can then use the app as a user would, and keep clicking that button to update the list. You can also click the ",(0,r.kt)("strong",{parentName:"li"},"Collect garbage")," button to force the browser to run its garbage collection mechanism, to see if some nodes have been collected in the meantime.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the detached elements tool in Edge, showing 3 DOM nodes in the list",src:o(16479).Z,width:"1400",height:"462"})),(0,r.kt)("p",null,"This should already give you a pretty good idea of where to start looking, but the tool is also integrated with the ",(0,r.kt)("strong",{parentName:"p"},"Memory")," tool, and using the ",(0,r.kt)("strong",{parentName:"p"},"Memory")," tool is great for finding where the listed DOM nodes are references from."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Analyze")," button and wait for the heap snapshot to be taken."),(0,r.kt)("li",{parentName:"ol"},"Click any of the numbers appearing in the ",(0,r.kt)("strong",{parentName:"li"},"Id")," column to jump right from a DOM node in the ",(0,r.kt)("strong",{parentName:"li"},"Detached Elements")," tool to its list of retainers in the ",(0,r.kt)("strong",{parentName:"li"},"Memory")," tool.")),(0,r.kt)("p",null,"The information displayed in the ",(0,r.kt)("strong",{parentName:"p"},"Retainers")," section of the ",(0,r.kt)("strong",{parentName:"p"},"Memory")," tool will give you hints as to which part of your code is currently keeping the DOM node alive in memory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of the detached elements tool in Edge, with the memory tool below it showing the list of retainers for one of the DOM nodes in the list",src:o(21123).Z,width:"1400",height:"1004"})),(0,r.kt)("p",null,"Learn more about using the ",(0,r.kt)("strong",{parentName:"p"},"Detached Elements")," tool in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/memory-problems/dom-leaks"},"Debug DOM memory leaks with the Detached Elements tool"),"."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"I hope what we saw today was useful. If there's one thing I'd love for you to take away from this is that building a great Azure Static Web App starts with building a great web experience for all!"),(0,r.kt)("p",null,"Learning the tools at your disposal to find and fix the most common mistakes that prevent such a great experience is important, and the Edge DevTools VS Code extension eases the pain by integrating directly in your existing environment."),(0,r.kt)("h2",{id:"exercise"},"Exercise"),(0,r.kt)("p",null,"Install the latest version of the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools"},"Microsoft Edge Developer Tools extension for VS Code"))," and try out some of these features. ",(0,r.kt)("strong",{parentName:"p"},"Try identifying and fixing accessibility issues"),", or use the ",(0,r.kt)("strong",{parentName:"p"},"Performance tool")," to analyze the runtime performance, of a Static Web App you've deployed."))}u.isMDXComponent=!0},44284:function(e,t,o){t.Z=o.p+"assets/images/18-banner-3c83eb95b9d1aabe5f27d4282c5423ad.png"},86531:function(e,t,o){t.Z=o.p+"assets/images/alttext-adcf6bb1488c4a5fede9ec2f27b21898.png"},58964:function(e,t,o){t.Z=o.p+"assets/images/colorpicker-f67cc1e986f2b7764fa70ebc077db417.png"},31211:function(e,t,o){t.Z=o.p+"assets/images/contrastratiolines-5324dcb3651c55cd8744ad18317b5a08.gif"},991:function(e,t,o){t.Z=o.p+"assets/images/cssissue-8d6aab48a94d0cf499440627826f60c7.png"},21123:function(e,t,o){t.Z=o.p+"assets/images/detachedelements-memory-89afa908a1aa61fcade4fe3ad147c480.png"},16479:function(e,t,o){t.Z=o.p+"assets/images/detachedelements-9a4c5df57ba20165ac51702374143e54.png"},74776:function(e,t,o){t.Z=o.p+"assets/images/firstrun-1ef935e8dc8d1c45a965bcb801f93311.png"},17470:function(e,t,o){t.Z=o.p+"assets/images/install-eba204081ea1bd94c4a0ac2ba5b45e26.png"},71034:function(e,t,o){t.Z=o.p+"assets/images/launchjson-7d85ad6f0d91eefcffc051f20c8f37fd.png"},78467:function(e,t,o){t.Z=o.p+"assets/images/mirror-e91333679aac60431888789d7e5faaeb.png"},53861:function(e,t,o){t.Z=o.p+"assets/images/perftool-d83b9f20cec06e68b3a5c901c4095376.png"},74524:function(e,t,o){t.Z=o.p+"assets/images/sourceorder-d1935ff13ef4d6989c2c2a2e76c9369e.png"}}]);