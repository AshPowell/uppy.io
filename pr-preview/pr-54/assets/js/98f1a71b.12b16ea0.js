"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1528],{3376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var i=t(7462),r=(t(7294),t(3905)),a=t(5488),s=t(5162),o=t(3068);const p={sidebar_position:3},l="Informer",u={unversionedId:"user-interfaces/elements/informer",id:"user-interfaces/elements/informer",title:"Informer",description:"The @uppy/informer plugin is a pop-up bar for showing notifications for the",source:"@site/docs/user-interfaces/elements/informer.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/informer",permalink:"/uppy.io/pr-preview/pr-54/docs/user-interfaces/elements/informer",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/informer.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Thumbnail generator",permalink:"/uppy.io/pr-preview/pr-54/docs/user-interfaces/elements/thumbnail-generator"},next:{title:"Status bar",permalink:"/uppy.io/pr-preview/pr-54/docs/user-interfaces/elements/status-bar"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>target</code>",id:"target",level:3}],f={toc:m};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"informer"},"Informer"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/informer")," plugin is a pop-up bar for showing notifications for the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard"),". When plugins have some exciting\nnews (or errors) to share, they can with Informer"),(0,r.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,r.kt)("p",null,"When you use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," it\u2019s already\nincluded by default. This plugin is published separately but made specifically\nfor the Dashboard. You can technically use it without it, but it\u2019s not\nofficially supported."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/informer\n"))),(0,r.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/informer\n"))),(0,r.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Informer } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Informer, { target: '#informer' })\n      "))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport Informer from '@uppy/informer';\n\n// The `@uppy/informer` plugin includes some basic styles.\n// You can also choose not to use it and provide your own styles instead.\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/informer/dist/style.min.css';\n\nnew Uppy().use(Informer, { target: '#informer' });\n")),(0,r.kt)("p",null,"Informer gets its data from ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.state.info"),", which is updated by various\nplugins via ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#infomessage-type-duration"},(0,r.kt)("inlineCode",{parentName:"a"},"uppy.info"))," method."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/docs/compressor"},"compressor")," plugin we use it like this for instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const size = prettierBytes(totalCompressedSize);\nthis.uppy.info(this.i18n('compressedX', { size }), 'info');\n")),(0,r.kt)("p",null,"When calling ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.info"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core"},"Uppy")," emits\n",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#info-visible"},(0,r.kt)("inlineCode",{parentName:"a"},"info-visible"))," and will emit\n",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#info-hidden"},(0,r.kt)("inlineCode",{parentName:"a"},"info-hidden"))," after the timeout."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h3",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h3"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'Informer'"),")."),(0,r.kt)("p",null,"Use this if you need several ",(0,r.kt)("inlineCode",{parentName:"p"},"Informer")," instances."),(0,r.kt)("h3",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h3"},"target")),(0,r.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Informer into (",(0,r.kt)("inlineCode",{parentName:"p"},"string")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."))}c.isMDXComponent=!0}}]);