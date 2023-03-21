"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[5875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8541:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"Uppy: let\u2019s teach an old dog some new\xa0tricks",date:new Date("2016-07-15T00:00:00.000Z"),authors:["arturi"],slug:"2016/06/uppy/begins"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-77/blog/2016/06/uppy/begins",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2016-06-uppy-begins.md",source:"@site/blog/2016-06-uppy-begins.md",title:"Uppy: let\u2019s teach an old dog some new\xa0tricks",description:"For the past six months, we have been working hard on uppy.io. We feel that it",date:"2016-07-15T00:00:00.000Z",formattedDate:"July 15, 2016",tags:[],readingTime:3.805,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy: let\u2019s teach an old dog some new\xa0tricks",date:"2016-07-15T00:00:00.000Z",authors:["arturi"],slug:"2016/06/uppy/begins"},prevItem:{title:"Uppy version 0.8 released: The Webcam Edition and Meta Data",permalink:"/uppy.io/pr-preview/pr-77/blog/2016/08/0.8.0"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For the past six months, we have been working hard on uppy.io. We feel that it\nis high time we gave you a look behind the scenes: what are we working on, and\nwhy."),(0,o.kt)("img",{src:"/img/blog/uppy-begins/uppy-dashboard.jpg"}),(0,o.kt)("p",null,"The way uploading works has not changed in a meaningful way since the days of\nour trusty old 56 kbit/s modems. Of course, files have gotten bigger and speeds\nhave increased, but that is more or less all there is to say. If it were up to\nus \u2013 and we hope it is \u2013 that is all about to change."),(0,o.kt)("p",null,"We at ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/"},"Transloadit")," are on a mission to change the way\nthe world does uploading. To accomplish this, our first step has been to develop\nan open protocol for resumable file uploads, called ",(0,o.kt)("a",{parentName:"p",href:"http://tus.io/"},"\u2018tus\u2019"),".\nFinally, that 2GB video upload from your smartphone doesn\u2019t have to start over\nwhen your train passes through a tunnel! The protocol got\n",(0,o.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=10591348"},"Hacker News excited")," on several\noccasions and is being deployed by, among others, our friends at Vimeo. Now that\na stable version 1.0 of \u2018tus\u2019 has been released, it is time to put it to the\ntest. A protocol without real-world applications is nothing more than a\nmeaningless document, after all."),(0,o.kt)("p",null,"We are therefore excited to tell you about Uppy: the file uploader that will\ncertainly fetch more than just your newspaper."))}h.isMDXComponent=!0}}]);