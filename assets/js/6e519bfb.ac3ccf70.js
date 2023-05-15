"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4105],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=r,c=h["".concat(s,".").concat(m)]||h[m]||d[m]||o;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Uppy 1.0: Your best friend in file uploading",date:new Date("2019-04-25T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/1.0/uppy-dashboard-1.png",published:!0,slug:"2019/04/1.0"},i=void 0,l={permalink:"/blog/2019/04/1.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2019-04-1.0.md",source:"@site/blog/2019-04-1.0.md",title:"Uppy 1.0: Your best friend in file uploading",description:"Today, after three years of development, we are launching version 1.0 of Uppy,",date:"2019-04-25T00:00:00.000Z",formattedDate:"April 25, 2019",tags:[],readingTime:9.525,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.0: Your best friend in file uploading",date:"2019-04-25T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/1.0/uppy-dashboard-1.png",published:!0,slug:"2019/04/1.0"},prevItem:{title:"Uppy 1.3: Accessibility and performance, new languages",permalink:"/blog/2019/08/1.3"},nextItem:{title:"Day 30",permalink:"/blog/2019/04/liftoff-30"}},s={authorsImageUrls:[void 0]},p=[{value:"A little history",id:"a-little-history",level:2},{value:"Why build Uppy in the first place?",id:"why-build-uppy-in-the-first-place",level:2},{value:"Building a team to create Uppy",id:"building-a-team-to-create-uppy",level:2},{value:"Challenge accepted: only 30 days to liftoff",id:"challenge-accepted-only-30-days-to-liftoff",level:2},{value:"Which features made it into 1.0? And which didn\u2019t (yet)?",id:"which-features-made-it-into-10-and-which-didnt-yet",level:2},{value:"What\u2019s next for Uppy?",id:"whats-next-for-uppy",level:2}],u={toc:p},h="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Today, after three years of development, we are launching version 1.0 of Uppy,\nour file uploader for web browsers."),(0,r.kt)("img",{src:"/img/blog/1.0/uppy-dashboard-1.png"}),(0,r.kt)("h2",{id:"a-little-history"},"A little history"),(0,r.kt)("p",null,"Three years ago, Transloadit was ready to replace their jQuery-based file\nuploading & processing plugin for browsers with something more modern. They\nposted a ",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/jobs/2015-10-front-end-developer/"},"job ad")," in\nsearch for people to build it:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In general, we\u2019re looking for polished, well tested, carefully crafted\nproducts that are delightful to work with and use. So for this job it\u2019s not\nonly important that you know JavaScript, but also how to make things look\nstunning and work well for end users."),(0,r.kt)("p",{parentName:"blockquote"},"At your disposal are time, focus, and the core team ready to provide feedback,\nguidance, and anything else you need.")),(0,r.kt)("p",null,"Shortly after, I saw a retweet of this vacancy come across my time line and I\ndecided to apply. That, in a nutshell, is how I got involved with Uppy in the\nearliest stages of the project."),(0,r.kt)("p",null,"Initially, the idea was to build a proprietary uploader that would work\nexclusively with Transloadit\u2019s commercial service, but we quickly turned around\non it. We felt our version of a file uploader could have a real impact if we\nmade it more widely available. So, just like Transloadit had done before with\n",(0,r.kt)("a",{parentName:"p",href:"https://tus.io/"},"Tus"),", we decided to make Uppy an open source solution \u2014 free\nfor anyone to use and hack on. Transloadit support became an optional plugin."),(0,r.kt)("p",null,"Three years,\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/stargazers"},"16.000 stargazers"),", getting\nfeatured on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.smashingmagazine.com/the-smashing-newsletter/smashing-newsletter-issue-197/"},"Smashing Magazine"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/JavaScriptDaily/status/950348390268919809"},"JavaScript Daily"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/uppy-io"},"Product Hunt"),", and\n",(0,r.kt)("a",{parentName:"p",href:"https://survivejs.com/blog/uppy-interview/"},"SurviveJS"),", and a thriving\ncommunity later\xa0\u2014 and we could not be happier to finally launch Uppy 1.0!"),(0,r.kt)("h2",{id:"why-build-uppy-in-the-first-place"},"Why build Uppy in the first place?"),(0,r.kt)("p",null,"We occasionally get asked why we would even need anything beyond\n",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="file">'),". Why bring JS into this at all? The truth is, for many\ncases, ",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="file">')," is fine."),(0,r.kt)("p",null,"Sometimes, however, you might like to add a drag-and-drop surface with file\npreviews or upload progress reporting that works well across browsers. Webcam\nsupport could be useful. Other than that, picking files directly from your\nInstagram and Dropbox \u2014 without first passing through your mobile phone \u2014 can\nsave a lot of bandwidth and battery life (uploads with Uppy and Companion happen\nserver-to-server). In all those cases, you\u2019ll need something more than a simple\n",(0,r.kt)("inlineCode",{parentName:"p"},'<input type="file">')," tag."),(0,r.kt)("center",null,(0,r.kt)("iframe",{style:{border:"none"},src:"https://cards.producthunt.com/cards/posts/152565?v=1",width:"598",height:"405",frameborder:"0",scrolling:"no",allowfullscreen:!0})),(0,r.kt)("p",null,"Then there\u2019s also the issue of large files, where resumability is essential.\nIt\u2019s basically unacceptable in this day and age to still have to restart your\nupload from scratch, just because your WiFi had a hiccup. That\u2019s why Uppy uses\nTus, the open protocol for resumable file uploading."),(0,r.kt)("p",null,"All these things significantly improve the user experience to the point where\nmore files actually make it to your platform, and less users rage-quit and close\nthe tab. These things become important when uploading is a central aspect of\nyour website or app. Uppy can also be deployed with nothing but a JS tag, using\nan existing ",(0,r.kt)("inlineCode",{parentName:"p"},"<form>")," for fallback (to support IE6! \ud83d\ude04), and your\nApache/Nginx server."),(0,r.kt)("h2",{id:"building-a-team-to-create-uppy"},"Building a team to create Uppy"),(0,r.kt)("p",null,"The Uppy team first consisted of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/arturi"},"myself")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hedgerh"},"Harry"),". Since I moved to New York for a while, with\nmost of the team based in Europe, we got used to having some very early (or\nlate) calls with significant time differences."),(0,r.kt)("p",null,"I was mostly working on the frontend and building what is known today as the\n",(0,r.kt)("a",{parentName:"p",href:"/examples/dashboard/"},"Dashboard")," \u2014 the fully-featured and most commonly used\nUppy plugin. Harry took on the first version of what was then called Uppy Server\n(now Companion) \u2014 responsible for picking files from Google Drive, Instagram,\nremote Urls, etc."),(0,r.kt)("p",null,"In 2016, the Transloadit team had a meetup in Amsterdam, where I ended up being\n",(0,r.kt)("a",{parentName:"p",href:"https://mobile.twitter.com/arturi/status/701394760796229632"},"present")," in a most\nunusual way (in the center):"),(0,r.kt)("img",{src:"/img/blog/1.0/amsterdam-team-meetup.jpg"}),(0,r.kt)("p",null,"Later that year, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ifedapoolarewaju"},"Ife")," joined the Uppy team\nas well and took over all Companion work."),(0,r.kt)("p",null,"Building all of the intended Uppy features properly took a lot of time. So, two\nyears after landing the project at Transloadit, I was\n",(0,r.kt)("a",{parentName:"p",href:"https://transloadit.com/jobs/2017-02-open-source-frontend-dev/"},"writing a job ad post myself"),"\nas Uppy was starting to take on serious proportions. That\u2019s where\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop"},"Ren\xe9e")," joined the team (funny story \u2014 we met\nthrough collaborating on GitHub on Choo and Yo-Yo libraries) to help us with\nUppy React components, Redux integration, the Golden Retriever plugin and many\nmore cool features."),(0,r.kt)("p",null,"Around that time, ",(0,r.kt)("a",{parentName:"p",href:"https://zaytsev.io/"},"Alex")," also joined in to advise us on the\nUI design, completing the Uppy team as it still stands today."),(0,r.kt)("p",null,"In the summer of 2017, the Transloadit team had another meeting. This time in\nBerlin, where we worked on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/golden-retriever/"},"Golden Retriever"),"\nplugin that helps recover files after browser crashes. We also played Mario Kart\n(I lost, despite all the practice!) and dressed up as characters from the game:"),(0,r.kt)("img",{src:"/img/blog/1.0/uppy-team-kong.jpg"}),(0,r.kt)("p",null,"Read more\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2017/07/golden-retriever/"},"about Golden Retriever and that team meetup"),".\nGolden Retriever got good press on Reddit and Hacker News because it goes above\nand beyond to make things absurdly reliable. In the demo video, you see us\n",(0,r.kt)("inlineCode",{parentName:"p"},"kill -9")," our browser, restart, and the upload just picks right up where it left\noff. A first!"),(0,r.kt)("h2",{id:"challenge-accepted-only-30-days-to-liftoff"},"Challenge accepted: only 30 days to liftoff"),(0,r.kt)("p",null,"We had been postponing the 1.0 release for quite some time. There\u2019s always just\none more feature you\u2019d like to add or another bug you want to fix, before\ncalling something ready for a 1.0 release. Truth be told, Uppy has been\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy#used-by"},"used in production")," for a while\nalready, and even though we iterate and change things frequently, the API had\nmostly stabilized."),(0,r.kt)("p",null,"So, about a month ago, we decided to pull the trigger and\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2019/03/liftoff-01/"},"announced an Uppy Month")," within\nTransloadit. This meant that all team members, including those not working\nprimarily on Uppy \u2014 the Tus core team, our SDK teams, as well as our infra and\nAPI engineers, designers, content writers, and the founders themselves \u2014 all\nchipped in and did their part to ensure liftoff in thirty days. We also asked\n",(0,r.kt)("a",{parentName:"p",href:"http://github.com/lakesare"},"Evgenia")," to join us for the month to lend a hand\nwith frontend work. Every week, we had a call where we looked at the Uppy 1.0\nproject board and talked about our progress:"),(0,r.kt)("img",{src:"/img/blog/30daystoliftoff/15-dashboard.png"}),(0,r.kt)("p",null,"Here are some highlights of what we\u2019ve managed to deliver during one month of\nEverything Uppy:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A new Uppy website design."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1443"},"Localization support and language packs"),"\nfor Russian, German, Dutch and French (with more coming from the community).\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/kvz"},"Kevin")," and I wrote a script that loops through all\nUppy plugins in the repo and generates one canonical ",(0,r.kt)("inlineCode",{parentName:"li"},"en_US")," that can be used\nas a basis for other translations. The script even checks for missing strings\naccross all translations, so you know which ones to update."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1440"},"Drag and Drop in the Dashboard"),",\nbeing an important part of Uppy, has been significantly improved with support\nfor pasting files and links from both the browser and the device. So you can\nnow, say, drag a link or an image from a different tab to Uppy!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/988"},"Basic React Native support (Beta)"),":\nUppy runs in a React Native environment, we have an example with resumable\nuploads via tus, and ",(0,r.kt)("inlineCode",{parentName:"li"},"@uppy/react-native")," Expo-component support for picking\nimages, videos, documents, and files from remote URLs with the help of\nCompanion."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1442"},"Design facelift"),": the\nDashboard UI has been significantly improved in the past days: new icons have\nbeen added, as well as typography polishing, better color organization,\nenlarged clickable areas, and more."),(0,r.kt)("li",{parentName:"ul"},"Many accessibility issues uncovered."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1450"},"Robodog gained support for an inline Dashboard"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1405"},"The documentation structure has been reworked"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1431"},"Transloadit Assemblies can now be properly canceled"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1454"},"Upload progress is reported more accurately with XHR-upload and Companion"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1376"},"Upload progress is improved in general"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/transloadit/uppy/pull/1392"},"npm scripts have been refactored"),"\n\u2014 yes, that\u2019s important!"),(0,r.kt)("li",{parentName:"ul"},"And craziest of all: our content team has been on a roll and\n",(0,r.kt)("a",{parentName:"li",href:"https://uppy.io/blog/2019/03/liftoff-01/"},"released a post ",(0,r.kt)("em",{parentName:"a"},"every day"))," for\nthe past thirty days to keep you updated on our day-to-day progress.")),(0,r.kt)("h2",{id:"which-features-made-it-into-10-and-which-didnt-yet"},"Which features made it into 1.0? And which didn\u2019t (yet)?"),(0,r.kt)("p",null,"Uppy 1.0 feature list:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sleek user interface"),(0,r.kt)("li",{parentName:"ul"},"Lightweight and easy on dependencies"),(0,r.kt)("li",{parentName:"ul"},"A small core with modular architecture: everything is a plugin"),(0,r.kt)("li",{parentName:"ul"},"Uses modern JavaScript with transpiled ES5 versions available in ",(0,r.kt)("inlineCode",{parentName:"li"},"lib"),", and\nminified versions for direct use by browsers in ",(0,r.kt)("inlineCode",{parentName:"li"},"dist")),(0,r.kt)("li",{parentName:"ul"},"Usable as a bundle straight from a CDN, as well as a module to import"),(0,r.kt)("li",{parentName:"ul"},"Resumable file uploads via the open Tus standard"),(0,r.kt)("li",{parentName:"ul"},"Direct uploads to S3"),(0,r.kt)("li",{parentName:"ul"},"Webcam support"),(0,r.kt)("li",{parentName:"ul"},"Picking files from Dropbox, Google Drive and Instagram, while letting servers\ndo the heavy lifting via Companion"),(0,r.kt)("li",{parentName:"ul"},"Robust: retries for all-the-things"),(0,r.kt)("li",{parentName:"ul"},"Built with accessibility in mind (not perfect yet, but we constantly improve)"),(0,r.kt)("li",{parentName:"ul"},"File recovery (after a browser crash or accidental navigation) via Golden\nRetriever"),(0,r.kt)("li",{parentName:"ul"},"Locale support: easily switch languages or supply your own copy"),(0,r.kt)("li",{parentName:"ul"},"Compatible with React (React Native in beta)"),(0,r.kt)("li",{parentName:"ul"},"Works great on mobile"),(0,r.kt)("li",{parentName:"ul"},"Works great with Transloadit, works great without")),(0,r.kt)("p",null,"We also left two features \u201cbehind\u201d:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Offering sugared shortcuts for novice users (presets)")),(0,r.kt)("p",null,"We felt that Uppy is straightforward enough to use, and presets could end up\nmaking this less clear. Robodog does offer less \u201cboilerplatey\u201d integrations, but\nthis was done as a wrapper instead of a preset."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Themable UI with a beautiful default")),(0,r.kt)("p",null,"Instead of going for ",(0,r.kt)("inlineCode",{parentName:"p"},"{ theme: 'dark' }"),", we only offer theming via CSS. For\ninstance, it\u2019s feasible to utilize the ",(0,r.kt)("inlineCode",{parentName:"p"},"prefers-color-scheme")," media query for\nthat."),(0,r.kt)("p",null,"Lastly, our \u201cpicking files from remote sources\u201d feature isn\u2019t quite as full\nfledged as we maybe would have liked, since support for Google Photos, Box or\nFacebook is currently not included. We hope these are things that the community\ncan help with."),(0,r.kt)("h2",{id:"whats-next-for-uppy"},"What\u2019s next for Uppy?"),(0,r.kt)("p",null,"Does this mean Uppy is perfect? Nope!"),(0,r.kt)("p",null,"There are still quite a lot of\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues"},"issues")," and items in our backlog,\nand we are already\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#11"},"planning Uppy 1.1"),".\nWe also want to maybe release a WordPress plugin, add image cropping, and much\nmore, but we are releasing 1.0 today because it contains virtually all of the\nfeatures that we set out to implement. These features have all been documented\nand we don\u2019t expect their APIs to change. If, at some point, they do need to\nchange, we will have to handle that with care. For instance, by shipping a 2.0\nversion and making all the noise that comes with it."),(0,r.kt)("p",null,"Uppy has already seen serious usage by a seriously large community and by\nvarious serious enterprises. So, with 1.0, we\u2019re now also signaling to you: Hey,\nwe take this seriously and we won\u2019t be swapping things out from under your app,\njust like that. Also, if you don\u2019t yet have Uppy powering your file uploads, now\nis the best time to give it a shot!"),(0,r.kt)("p",null,"We hope your users will be as delighted by Uppy 1.0 as we have been designing\nand building it. Seeing your support and contributions while doing so, made all\nthe difference. Thank you so much! And if you could leave a comment on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.producthunt.com/posts/uppy-1-0"},"ProductHunt"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=19756159"},"Hacker News")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/javascript/comments/bhkx5k/uppy_10_your_best_friend_in_file_uploading/"},"Reddit"),"\nand give us your brutal opinion, that would mean the world to us!"))}d.isMDXComponent=!0}}]);