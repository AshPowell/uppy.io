"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3699],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(7462),n=a(7294),s=a(6010),o=a(2389),l=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:a,block:o,defaultValue:c,values:m,groupId:h,className:y}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,l.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:x}=(0,i.U)(),[w,N]=(0,n.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const Z=e=>{const t=e.currentTarget,a=T.indexOf(t),r=k[a].value;r!==w&&(E(t),N(r),null!=h&&x(h,String(r)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},y)},k.map((e=>{let{value:t,label:a,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:Z,onClick:Z},o,{className:(0,s.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,n.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}},3068:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(814),s=a(3612);const o=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","docusaurus":"docusaurus","lint:js":"eslint . --cache ","lint":"run-s --continue-on-error lint:js lint:md","prepare":"husky install","lint:md":"run-s --continue-on-error remark:md remark:mdx","remark:md":"remark docs -qf","remark:mdx":"remark docs -e mdx -u mdx -qf","serve":"docusaurus serve","dev":"docusaurus start","swizzle":"docusaurus swizzle","typecheck":"tsc","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.js":"eslint --fix --cache","*.{css,html,json,js,jsx,ts,tsx,yml}":["prettier --write"],"docs/*.md":["remark -qf --"],"docs/*.mdx":["remark -u mdx -qf --"]},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.7.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-lint-recommended":"^6.1.2","remark-preset-prettier":"^1.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.2.3+sha224.953c8233f7a92884eee2de69a1b92d1f2ec1655e66d08071ba9a02fa"}'),{version:l}=o;function i(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,i=[];r.Children.toArray(t).forEach((e=>{i=[...i,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=i.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${l}/${o}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return r.createElement(r.Fragment,null,r.createElement(s.Z,{type:"caution"},r.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),r.createElement(n.Z,{language:"html"},d))}},7129:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>y});var r=a(7462),n=a(7294),s=a(3905),o=a(5488),l=a(5162),i=a(814);function u(){return n.createElement(n.Fragment,null,n.createElement(i.Z,{language:"js",title:"index.js"},"\nimport Uppy from '@uppy/core'\nimport Dashboard from '@uppy/dashboard'\nimport Tus from '@uppy/tus'\n\nconst uppy = new Uppy()\n  .use(Dashboard, { target: '#uppy', inline: true })\n  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })\n  .on('complete', (result) => {\n    console.log('Upload result:', result)\n  })\n"),n.createElement(i.Z,{language:"html",title:"index.html"},'\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8"/>\n    <title>dashboard example</title>\n    <script defer type="module" src="index.js"><\/script>\n  </head>\n  <body>\n    <div id="uppy"></div>\n  </body>\n</html>\n</code>\n'))}var p=a(3068);const d={sidebar_position:1},c="Quick start",m={unversionedId:"quick-start",id:"quick-start",title:"Quick start",description:"Uppy is an uploader and (optionally) an user interface, tied together by the core library,",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/uppy.io/pr-preview/pr-33/docs/quick-start",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Choosing the upload strategy you need",permalink:"/uppy.io/pr-preview/pr-33/docs/guides/choosing-upload-strategy"}},h={},y=[{value:"Next steps",id:"next-steps",level:2}],f={toc:y};function k(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"quick-start"},"Quick start"),(0,s.kt)("p",null,"Uppy is an uploader and (optionally) an user interface, tied together by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/uppy-core"},"core library"),",\nwith lots of plugins to gradually add more functionality."),(0,s.kt)("p",null,"In this quick start we will build a small yet powerful example with ",(0,s.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"@uppy/dashboard")," and ",(0,s.kt)("a",{parentName:"p",href:"/docs/uploaders/tus"},"@uppy/tus"),"."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can take Uppy for a walk with the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#"},"Stackblitz"))," or ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("a",{parentName:"strong",href:"#"},"CodeSandbox"))," examples.\nBoth examples can also be cloned with Git for a kickstart locally.")),(0,s.kt)(o.Z,{mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/core @uppy/dashboard @uppy/tus\n")),(0,s.kt)(u,{mdxType:"QuickStartBoilerPlate"})),(0,s.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/core @uppy/dashboard @uppy/tus\n")),(0,s.kt)(u,{mdxType:"QuickStartBoilerPlate"})),(0,s.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, DragDrop, Tus } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(DragDrop, { target: '#uppy' })\n        uppy.use(Tus, { endpoint: '//tusd.tusdemo.net/files/' })\n      "))),(0,s.kt)("h2",{id:"next-steps"},"Next steps"),(0,s.kt)("p",null,"That\u2019s it! You tried Uppy for the first time.\nThis was a taste of what Uppy can do, its power comes from modularity and versatility."),(0,s.kt)("p",null,"Here are some interesting things:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/guides/choosing-upload-strategy"},"Choosing the upload strategy you need"),"."),(0,s.kt)("li",{parentName:"ul"},"With ",(0,s.kt)("a",{parentName:"li",href:"/docs/companion"},"Companion")," your users will be able to select files from remote sources, such as Instagram,\nGoogle Drive and Dropbox. It bypasses the client (so a 5 GB video isn\u2019t eating into your users\u2019 data plans)\nand uploads to your preferred final destination."),(0,s.kt)("li",{parentName:"ul"},"Recover files from accidental refreshes or closed tabs with ",(0,s.kt)("a",{parentName:"li",href:"/docs/golden-retriever"},"Golden Retriever"),"."),(0,s.kt)("li",{parentName:"ul"},"Add ",(0,s.kt)("a",{parentName:"li",href:"/docs/user-interfaces/elements/image-editor"},"image editing")," to ",(0,s.kt)("a",{parentName:"li",href:"/docs/user-interfaces/dashboard"},"Dashboard"),".")))}k.isMDXComponent=!0}}]);