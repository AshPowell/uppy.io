"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8421],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(g,s(s({ref:t},u),{},{components:a})):n.createElement(g,s({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1694:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=["components"],i={sidebar_position:1},l="Choosing the upload strategy you need",p={unversionedId:"guides/choosing-upload-strategy",id:"guides/choosing-upload-strategy",title:"Choosing the upload strategy you need",description:"Versatile, reliable uploading is at the heart of Uppy. It has multiple configurable plugins to suit your needs.",source:"@site/docs/guides/choosing-upload-strategy.md",sourceDirName:"guides",slug:"/guides/choosing-upload-strategy",permalink:"/uppy.io/pr-preview/pr-1/docs/guides/choosing-upload-strategy",editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/choosing-upload-strategy.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/uppy.io/pr-preview/pr-1/docs/quick-start"},next:{title:"Using locales",permalink:"/uppy.io/pr-preview/pr-1/docs/guides/using-locales"}},u={},d=[{value:"Use cases",id:"use-cases",level:2},{value:"I want worry-free, plug-and-play uploads with Transloadit services",id:"i-want-worry-free-plug-and-play-uploads-with-transloadit-services",level:3},{value:"I want reliable, resumable uploads",id:"i-want-reliable-resumable-uploads",level:3},{value:"I want to upload to AWS S3 directly",id:"i-want-to-upload-to-aws-s3-directly",level:3},{value:"I want to send HTML multipart uploads to my own server",id:"i-want-to-send-html-multipart-uploads-to-my-own-server",level:3}],c={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"choosing-the-upload-strategy-you-need"},"Choosing the upload strategy you need"),(0,r.kt)("p",null,"Versatile, reliable uploading is at the heart of Uppy. It has multiple configurable plugins to suit your needs.\nIn this guide we will explain the different plugins, their strategies, and when to use them based on use cases."),(0,r.kt)("h2",{id:"use-cases"},"Use cases"),(0,r.kt)("p",null,"Below are some of the common use cases. They are not necessarily at odds with each other.\nThe uploading plugins are flexible enough to create new use cases, or have similar benefits."),(0,r.kt)("h3",{id:"i-want-worry-free-plug-and-play-uploads-with-transloadit-services"},"I want worry-free, plug-and-play uploads with Transloadit services"),(0,r.kt)("p",null,"Transloadit\u2019s strength is versatility.\nBy doing video, audio, images, documents, and more,\nyou only need one vendor for ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/services/"},"all your file processing needs"),".\nThe ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/transloadit"},"@uppy/transloadit"))," plugin directly uploads to Transloadit\nso you only have to worry about creating a ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/getting-started/concepts/"},"template"),".\nIt uses ",(0,r.kt)("a",{parentName:"p",href:"#i-want-reliable-resumable-uploads"},"Tus")," under the hood so you don't have to\nsacrifice reliable, resumable uploads for convenience."),(0,r.kt)("p",null,"You should use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/transloadit"},"@uppy/transloadit"))," if you don't want to host your own server,\n(optionally) need file processing, and store it in the service (such as S3 or GCS) of your liking.\nAll with minimal effort."),(0,r.kt)("h3",{id:"i-want-reliable-resumable-uploads"},"I want reliable, resumable uploads"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tus.io/"},"Tus")," is a new open protocol for resumable uploads built on HTTP.\nThis means accidentally closing your tab or losing connection let's you continue, for instance, your 10GB upload\ninstead of starting all over. "),(0,r.kt)("p",null,"It supports any language, any platform, and any network. You can checkout the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus"},"GitHub organisation")," to\nfind the implementation in your favorite language. You can store files on your self-hosted Tus server, but also use service integrations (such as S3) to store files\nexternally."),(0,r.kt)("p",null,"If you want reliable, resumable uploads: use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/tus"},"@uppy/tus"))," to connect to your Tus server in a few lines of code."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you plan to let people upload ",(0,r.kt)("em",{parentName:"p"},"a lot")," of files, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/tus"},"@uppy/tus"))," has exponential backoff built-in.\nMeaning if your server (or proxy) returns HTTP 429 because it's being overloaded, ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/tus"},"@uppy/tus"))," will\nfind the ideal sweet spot to keep uploading without overloading."))),(0,r.kt)("h3",{id:"i-want-to-upload-to-aws-s3-directly"},"I want to upload to AWS S3 directly"),(0,r.kt)("p",null,"If you don't want to host your own server or use Transloadit services you can also upload to AWS S3 directly.\nUploading to S3 from a browser can be done in two ways.\nA server can generate a pre-signed URL for a PUT upload, or a server can generate form data for a POST upload.\nYou can read more about that in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/aws-s3"},"@uppy/aws-s3"))," docs."),(0,r.kt)("p",null,"Uppy provides two strategies to upload to S3. ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/aws-s3"},"@uppy/aws-s3"))," uses regular uploads and\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/aws-s3-multipart"},"@uppy/aws-s3-multipart"))," uses S3's multipart upload strategy. If you are dealing with bigger files (20MB+)\nthen the multipart uploads are better."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also save files in S3 with the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://transloadit.com/services/file-exporting/s3-store/"},"/s3/store"))," robot while still\nusing the powers of Transloadit services."))),(0,r.kt)("h3",{id:"i-want-to-send-html-multipart-uploads-to-my-own-server"},"I want to send HTML multipart uploads to my own server"),(0,r.kt)("p",null,"If you want to send regular file uploads to your own server you can use ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/uploaders/xhr"},"@uppy/xhr")),"."))}m.isMDXComponent=!0}}]);