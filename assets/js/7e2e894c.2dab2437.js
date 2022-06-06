"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[1700],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=o,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||n;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},492:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],s={slug:"deploying-swa",title:"#07: Deploying SWA",authors:["reshmi"],tags:["swa","30days","core-concepts"],draft:!1},l=void 0,p={permalink:"/blog/deploying-swa",source:"@site/blog/2022-05-08.md",title:"#07: Deploying SWA",description:"Welcome to Week 1, Day 7 of #30DaysOfSWA!!",date:"2022-05-08T00:00:00.000Z",formattedDate:"May 8, 2022",tags:[{label:"swa",permalink:"/blog/tags/swa"},{label:"30days",permalink:"/blog/tags/30-days"},{label:"core-concepts",permalink:"/blog/tags/core-concepts"}],readingTime:2.61,truncated:!1,authors:[{name:"Reshmi Sriram",title:"PM, Static Web Apps @Microsoft",url:"https://twitter.com/reshsriram",imageURL:"https://github.com/Reshmi-Sriram.png\\",key:"reshmi"}],frontMatter:{slug:"deploying-swa",title:"#07: Deploying SWA",authors:["reshmi"],tags:["swa","30days","core-concepts"],draft:!1},prevItem:{title:"#08: Build A Blog - with Astro",permalink:"/blog/build-with-astro"},nextItem:{title:"#06: Previewing SWA",permalink:"/blog/previewing-swa"}},u={authorsImageUrls:[void 0]},c=[{value:"What We&#39;ll Cover",id:"what-well-cover",level:2},{value:"Deploy with Azure DevOps",id:"deploy-with-azure-devops",level:2},{value:"Deploy via GitLab and BitBucket",id:"deploy-via-gitlab-and-bitbucket",level:2},{value:"Deploy using ARM Template",id:"deploy-using-arm-template",level:2},{value:"Resources",id:"resources",level:2}],m={toc:c};function h(e){var t,s=e.components,l=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},m,l,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welcome to ",(0,n.kt)("inlineCode",{parentName:"p"},"Week 1, Day 7")," of ",(0,n.kt)("strong",{parentName:"p"},"#30DaysOfSWA"),"!! "),(0,n.kt)("p",null,"You made it this far! Give yourself a pat on your back already! \ud83d\ude0a  "),(0,n.kt)("p",null,"By now, we have learnt what Static Web Apps is, and how to build, add APIs and configure the application. We\u2019ve also deployed a couple of fun apps as a tribute to Star Wars! But we\u2019ve so far explored deploying using the Github Actions path. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What if we want some other CI/CD tool? "),(0,n.kt)("li",{parentName:"ul"},"What if our project resides safely in an Azure DevOps repository? "),(0,n.kt)("li",{parentName:"ul"},"What if we don\u2019t want a CI/CD solution AT ALL? ")),(0,n.kt)("p",null,"Fear not! Because today we\u2019re gonna explore other ways of deploying a Static Web App on Azure \ud83d\ude0a "),(0,n.kt)("h2",{id:"what-well-cover"},"What We'll Cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deploy With Azure DevOps  "),(0,n.kt)("li",{parentName:"ul"},"Deploy From GitLab and BitBucket "),(0,n.kt)("li",{parentName:"ul"},"Deploy Using ARM Template "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Exercise"),": Explore the\u202f",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/quickstart-create-templates-use-visual-studio-code?tabs=CLI"},"ARM Tools VS Code Extension"))),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(10359).Z,width:"1000",height:"420"})),(0,n.kt)("h2",{id:"deploy-with-azure-devops"},"Deploy with Azure DevOps"),(0,n.kt)("p",null,"Deploying using Azure pipelines CI/CD has never been easier! "),(0,n.kt)("p",null,"Static Web Apps supports projects which are stored in Azure repos and helps in creating a smooth CI/CD pipeline to automatically trigger the changes on every commit to the main branch. What more? With the latest changes checked in for Azure DevOps, we can now ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript&pivots=azure-devops"},"set up the azure pipeline via Portal with a single click"),"! Here\u2019s a quick video demonstrating how to use DevOps as a pipeline, as well as touching on the numerous other enhancements brought in off-late, such as stable staging environments, password protected websites, build and deploy split, and lots more! \ud83d\ude0a "),(0,n.kt)("iframe",((t={width:"560",height:"315",frameborder:"0",src:"https://www.youtube.com/embed/4JkfeZp7aDk",title:"YouTube video player"}).frameborder="0",t.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",t.allowfullscreen=!0,t)),(0,n.kt)("h2",{id:"deploy-via-gitlab-and-bitbucket"},"Deploy via GitLab and BitBucket"),(0,n.kt)("p",null,"But what if we wanted a third-party Provider? Static Web Apps as of today ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/updates/public-preview-static-web-apps-now-supports-gitlab-and-bitbucket-for-cicd/"},"officially supports")," CI/CD pipelines from GitLab and BitBucket! We just have to follow a few simple steps as discussed in the documentation for both ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/gitlab?tabs=vanilla-javascript"},"GitLab")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/bitbucket?tabs=vanilla-javascript"},"BitBucket"),", and voila! We\u2019ll have a beautifully configured pipeline which takes care of the automatic trigger on commits for us. Isn\u2019t this beautiful? \ud83d\ude0a "),(0,n.kt)("h2",{id:"deploy-using-arm-template"},"Deploy using ARM Template"),(0,n.kt)("p",null,"For the CLI lovers out there, we can also deploy in Static Web Apps ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-azure-resource-manager?tabs=azure-cli"},"using ARM Templates"),"! The ARM - or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview"},"Azure Resource Manager Template")," - is used in preparing the workflow template. On deploying the ARM Template to Azure Static Web Apps, it triggers the Github Actions, which further takes care of our CI/CD needs. Do check out the exercise later in the blog for a quick hands-on using ARM Templates!  "),(0,n.kt)("p",null,"But what about .. ",(0,n.kt)("strong",{parentName:"p"},"deploying without a CI/CD??")," "),(0,n.kt)("p",null,"Suppose we want a one-time deployment solution? Or we don\u2019t want to depend on a CI/CD tool at all! No worries! We have you covered! Wonder how that is supported? Stay tuned to the #30DaysOfSWA series and ",(0,n.kt)("strong",{parentName:"p"},"discover the new upcoming features")," to enable this! \ud83d\ude09 <3<3  "),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("p",null,"Now that we\u2019ve explored the alternatives we have, let\u2019s go have some fun with it!! Here are a few quickstarts you can try out!"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/swabitbucketsupport"},"Deploy using BitBucket")," "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/swagitlabsupport"},"Deploy using GitLab")," "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/static-web-apps-publish-devops"},"Deploy using Azure DevOps and Portal Quickstart"),"  "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/publish-azure-resource-manager?tabs=azure-cli"},"Use an ARM template quickstart"))))}h.isMDXComponent=!0},10359:function(e,t,a){t.Z=a.p+"assets/images/07-banner-fe3a45087af0648a5f8ce9b650b522e9.png"}}]);