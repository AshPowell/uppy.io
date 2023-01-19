"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[434],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),i=n(6010),l=n(2389),o=n(7392),s=n(7094),u=n(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:n,defaultValue:l,values:m,groupId:c,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??b.find((e=>e.props.default))?.props.value??b[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[w,N]=(0,r.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=c){const e=y[c];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==w&&(x(t),N(a),null!=c&&v(c,String(a)))},I=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},h)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:I,onClick:C},l,{className:(0,i.Z)("tabs__item",d,l?.className,{"tabs__item--active":w===t})}),n??t)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},3068:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(814),i=n(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:o}=l;function s(e){let{children:t,uppyCssName:n="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,s=[];a.Children.toArray(t).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=s.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${o}/${l}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${o}/${n}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(i.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(r.Z,{language:"html"},d))}},5810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),l=n(5162),o=n(3068);const s={sidebar_position:2},u="Thumbnail generator",p={unversionedId:"user-interfaces/elements/thumbnail-generator",id:"user-interfaces/elements/thumbnail-generator",title:"Thumbnail generator",description:"@uppy/thumbnail-generator generates proportional thumbnails (file previews)",source:"@site/docs/user-interfaces/elements/thumbnail-generator.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/thumbnail-generator",permalink:"/uppy.io/pr-preview/pr-59/docs/user-interfaces/elements/thumbnail-generator",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/thumbnail-generator.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Drop target",permalink:"/uppy.io/pr-preview/pr-59/docs/user-interfaces/elements/drop-target"},next:{title:"Informer",permalink:"/uppy.io/pr-preview/pr-59/docs/user-interfaces/elements/informer"}},d={},m=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>thumbnailWidth</code>",id:"thumbnailwidth",level:4},{value:"<code>thumbnailHeight</code>",id:"thumbnailheight",level:4},{value:"<code>thumbnailType</code>",id:"thumbnailtype",level:4},{value:"<code>waitForThumbnailsBeforeUpload</code>",id:"waitforthumbnailsbeforeupload",level:4},{value:"Events",id:"events",level:3},{value:"<code>thumbnail:generated</code>",id:"thumbnailgenerated",level:4}],c={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thumbnail-generator"},"Thumbnail generator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/thumbnail-generator")," generates proportional thumbnails (file previews)\nfor images that are added to Uppy."),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"This plugin is included by default with the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," plugin, and can also be useful to\ndisplay image previews in a custom UI."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Thumbnails are only generated for ",(0,r.kt)("em",{parentName:"p"},"local")," files. Remote files through\n",(0,r.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," generally won\u2019t have thumbnails because they are\ndownloaded on the server. Some providers, such as Google Drive, have baked in\nthumbnails into their API responses.")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/thumbnail-generator\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/thumbnail-generator\n"))),(0,r.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(o.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, ThumbnailGenerator } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(ThumbnailGenerator)\n      '))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,"If you use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," then it\u2019s already\ninstalled. If you want to use it programatically for your own UI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport ThumbnailGenerator from '@uppy/thumbnail-generator';\n\nconst uppy = new Uppy();\n\nuppy.use(ThumbnailGenerator);\nuppy.on('thumbnail:generated', (file, preview) => doSomething(file, preview));\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'ThumbnailGenerator'"),")."),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        generatingThumbnails: 'Generating thumbnails...',\n    },\n};\n")),(0,r.kt)("h4",{id:"thumbnailwidth"},(0,r.kt)("inlineCode",{parentName:"h4"},"thumbnailWidth")),(0,r.kt)("p",null,"Width of the resulting thumbnail (",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),")."),(0,r.kt)("p",null,"Thumbnails are always proportional and not cropped. If width is provided, height\nis calculated automatically to match ratio. If both width and height are given,\nonly width is taken into account."),(0,r.kt)("h4",{id:"thumbnailheight"},(0,r.kt)("inlineCode",{parentName:"h4"},"thumbnailHeight")),(0,r.kt)("p",null,"Height of the resulting thumbnail (",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),")."),(0,r.kt)("p",null,"Thumbnails are always proportional and not cropped. If height is provided, width\nis calculated automatically to match ratio. If both width and height are given,\nonly width is taken into account."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Produce a 300px height thumbnail with calculated width to match ratio:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ThumbnailGenerator, { thumbnailHeight: 300 });\n")),(0,r.kt)("p",{parentName:"admonition"},"Produce a 300px width thumbnail with calculated height to match ratio (and\nignore the given height):"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ThumbnailGenerator, { thumbnailWidth: 300, thumbnailHeight: 300 });\n")),(0,r.kt)("p",{parentName:"admonition"},"See issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/979"},"#979")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1096"},"#1096")," for details on this\nfeature.")),(0,r.kt)("h4",{id:"thumbnailtype"},(0,r.kt)("inlineCode",{parentName:"h4"},"thumbnailType")),(0,r.kt)("p",null,"MIME type of the resulting thumbnail (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'image/jpeg'"),")."),(0,r.kt)("p",null,"This is useful if you want to support transparency in your thumbnails by\nswitching to ",(0,r.kt)("inlineCode",{parentName:"p"},"image/png"),"."),(0,r.kt)("h4",{id:"waitforthumbnailsbeforeupload"},(0,r.kt)("inlineCode",{parentName:"h4"},"waitForThumbnailsBeforeUpload")),(0,r.kt)("p",null,"Whether to wait for all thumbnails to be ready before starting the upload\n(",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", Thumbnail Generator will invoke Uppy\u2019s internal processing\nstage and wait for ",(0,r.kt)("inlineCode",{parentName:"p"},"thumbnail:all-generated")," event, before proceeding to the\nuploading stage. This is useful because Thumbnail Generator also adds EXIF data\nto images, and if we wait until it\u2019s done processing, this data will be\navailable on the server after the upload."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#onevent-action"},(0,r.kt)("inlineCode",{parentName:"a"},"on"))," and\n",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#onceevent-action"},(0,r.kt)("inlineCode",{parentName:"a"},"once"))," to listen to these events.")),(0,r.kt)("h4",{id:"thumbnailgenerated"},(0,r.kt)("inlineCode",{parentName:"h4"},"thumbnail:generated")),(0,r.kt)("p",null,"Emitted with ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"preview")," local url as arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('thumbnail:generated', (file, preview) => {\n    const img = document.createElement('img');\n    img.src = preview;\n    img.width = 100;\n    document.body.appendChild(img);\n});\n")))}h.isMDXComponent=!0}}]);