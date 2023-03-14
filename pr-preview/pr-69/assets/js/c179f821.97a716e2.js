"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3699],{7129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var r=a(7462),n=a(7294),o=a(3905),p=a(5488),s=a(5162),i=a(814);function l(){return n.createElement(n.Fragment,null,n.createElement(i.Z,{language:"js",title:"index.js"},"\nimport Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Tus from '@uppy/tus'\n\nconst uppy = new Uppy()\n  .use(Dashboard, { target: '#uppy', inline: true })\n  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })\n  .on('complete', (result) => {\n    console.log('Upload result:', result)\n  })\n"),n.createElement(i.Z,{language:"html",title:"index.html"},'\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8"/>\n    <title>dashboard example</title>\n    <script defer type="module" src="index.js"><\/script>\n  </head>\n  <body>\n    <div id="uppy"></div>\n  </body>\n</html>\n</code>\n'))}var u=a(3068);const d={sidebar_position:1},m="Quick start",c={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"Uppy is an uploader and (optionally) an user interface, tied together by the",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/uppy.io/pr-preview/pr-69/docs/quick-start",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Choosing the uploader you need",permalink:"/uppy.io/pr-preview/pr-69/docs/guides/choosing-uploader"}},y={},h=[{value:"Next steps",id:"next-steps",level:2}],k={toc:h};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,"Uppy is an uploader and (optionally) an user interface, tied together by the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core"},"core library"),", with lots of plugins to gradually add more functionality."),(0,o.kt)("p",null,"In this quick start we will build a small yet powerful example with\n",(0,o.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"@uppy/dashboard")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/uploaders/tus"},"@uppy/tus"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can take Uppy for a walk with the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#"},"Stackblitz"))," or\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"#"},"CodeSandbox"))," examples. Both examples can also be cloned with Git for a\nkickstart locally.")),(0,o.kt)(p.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/dashboard @uppy/tus\n")),(0,o.kt)(l,{mdxType:"QuickStartBoilerPlate"})),(0,o.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/dashboard @uppy/tus\n")),(0,o.kt)(l,{mdxType:"QuickStartBoilerPlate"})),(0,o.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(u.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, DragDrop, Tus } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(DragDrop, { target: '#uppy' })\n        uppy.use(Tus, { endpoint: '//tusd.tusdemo.net/files/' })\n      "))),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"That\u2019s it! You tried Uppy for the first time. This was a taste of what Uppy can\ndo, its power comes from modularity and versatility."),(0,o.kt)("p",null,"Here are some interesting things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/choosing-uploader"},"Choosing the uploader you need"),"."),(0,o.kt)("li",{parentName:"ul"},"With ",(0,o.kt)("a",{parentName:"li",href:"/docs/companion"},"Companion")," your users will be able to select files from\nremote sources, such as Instagram, Google Drive and Dropbox. It bypasses the\nclient (so a 5 GB video isn\u2019t eating into your users\u2019 data plans) and uploads\nto your preferred final destination."),(0,o.kt)("li",{parentName:"ul"},"Recover files from accidental refreshes or closed tabs with\n",(0,o.kt)("a",{parentName:"li",href:"/docs/golden-retriever"},"Golden Retriever"),"."),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"/docs/user-interfaces/elements/image-editor"},"image editing")," to\n",(0,o.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},"Dashboard"),".")))}f.isMDXComponent=!0}}]);