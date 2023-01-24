"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2792],{1092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),p=n(5162),l=n(3068);const i={sidebar_position:2},s="Drop target",d={unversionedId:"user-interfaces/elements/drop-target",id:"user-interfaces/elements/drop-target",title:"Drop target",description:"The @uppy/drop-target plugin lets your users drag-and-drop files on any",source:"@site/docs/user-interfaces/elements/drop-target.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/drop-target",permalink:"/uppy.io/pr-preview/pr-54/docs/user-interfaces/elements/drop-target",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/drop-target.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Image editor",permalink:"/uppy.io/pr-preview/pr-54/docs/user-interfaces/elements/image-editor"},next:{title:"Thumbnail generator",permalink:"/uppy.io/pr-preview/pr-54/docs/user-interfaces/elements/thumbnail-generator"}},u={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>onDragLeave</code>",id:"ondragleave",level:4},{value:"<code>onDragOver</code>",id:"ondragover",level:4},{value:"<code>onDrop</code>",id:"ondrop",level:4},{value:"<code>target</code>",id:"target",level:4}],g={toc:m};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drop-target"},"Drop target"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/drop-target")," plugin lets your users drag-and-drop files on any\nelement on the page, for example the whole page, ",(0,a.kt)("inlineCode",{parentName:"p"},"document.body"),"."),(0,a.kt)("p",null,"Can be used together with Uppy Dashboard or Drag & Drop plugins, or your custom\nsolution targeting any DOM element."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"),".")),(0,a.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,a.kt)("p",null,"When you want to allow users to drag and drop files in your own UI, rather than\nin the ",(0,a.kt)("a",{parentName:"p",href:"../dashboard"},(0,a.kt)("inlineCode",{parentName:"a"},"Dashboard"))," UI, or catch dropped files from anywhere on\nthe page."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(p.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/drop-target\n"))),(0,a.kt)(p.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/drop-target\n"))),(0,a.kt)(p.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"UppyCdnExample"},'\n        import { DropTarget } from "{{UPPY_JS_URL}}"\n        const DropTarget = new Uppy().use(DropTarget)\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("p",null,"This module has one default export: the ",(0,a.kt)("inlineCode",{parentName:"p"},"DropTarget")," plugin class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{8-10} showLineNumbers","{8-10}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport DropTarget from '@uppy/drop-target';\n\nimport '@uppy/core/dist/style.css';\nimport '@uppy/drop-target/dist/style.css';\n\nconst uppy = new Uppy();\nuppy.use(DropTarget, {\n    target: document.body,\n});\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h4",{id:"ondragleave"},(0,a.kt)("inlineCode",{parentName:"h4"},"onDragLeave")),(0,a.kt)("p",null,"Event listener for the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragleave_event"},(0,a.kt)("inlineCode",{parentName:"a"},"dragleave")," event"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3-5} showLineNumbers","{3-5}":!0,showLineNumbers:!0},"uppy.use(DropTarget, {\n    target: document.body,\n    onDragLeave: (event) => {\n        event.stopPropagation();\n    },\n});\n")),(0,a.kt)("h4",{id:"ondragover"},(0,a.kt)("inlineCode",{parentName:"h4"},"onDragOver")),(0,a.kt)("p",null,"Event listener for the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event"},(0,a.kt)("inlineCode",{parentName:"a"},"dragover")," event"),"."),(0,a.kt)("h4",{id:"ondrop"},(0,a.kt)("inlineCode",{parentName:"h4"},"onDrop")),(0,a.kt)("p",null,"Event listener for the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event"},(0,a.kt)("inlineCode",{parentName:"a"},"drop")," event"),"."),(0,a.kt)("h4",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h4"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Function"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"UIPlugin"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."))}h.isMDXComponent=!0}}]);