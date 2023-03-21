"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8929],{3068:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(7294),i=r(814),n=r(3612);const o=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.3.1","@docusaurus/plugin-client-redirects":"^2.3.1","@docusaurus/preset-classic":"^2.3.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.3.1","@docusaurus/module-type-aliases":"^2.3.1","@tsconfig/docusaurus":"^1.0.7","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:a}=o;function l(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:o="uppy.min.js"}=e,l=[];s.Children.toArray(t).forEach((e=>{l=[...l,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=l.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${a}/${o}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${a}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return s.createElement(s.Fragment,null,s.createElement(n.Z,{type:"caution"},s.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),s.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),s.createElement(i.Z,{language:"html"},d))}},6069:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var s=r(7462),i=(r(7294),r(3905)),n=r(4866),o=r(5162),a=r(3068);const l={sidebar_position:7},p="Supporting IE11",u={unversionedId:"guides/browser-support",id:"guides/browser-support",title:"Supporting IE11",description:"We officially support recent versions of Chrome, Firefox, Safari and Edge.",source:"@site/docs/guides/browser-support.mdx",sourceDirName:"guides",slug:"/guides/browser-support",permalink:"/uppy.io/pr-preview/pr-77/docs/guides/browser-support",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/browser-support.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Migrate to 2.0",permalink:"/uppy.io/pr-preview/pr-77/docs/guides/migrate-2.0"},next:{title:"Uppy core",permalink:"/uppy.io/pr-preview/pr-77/docs/uppy"}},d={},c=[{value:"Polyfills",id:"polyfills",level:2},{value:"Legacy CDN bundle",id:"legacy-cdn-bundle",level:2}],m={toc:c},y="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(y,(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"supporting-ie11"},"Supporting IE11"),(0,i.kt)("p",null,"We officially support recent versions of Chrome, Firefox, Safari and Edge."),(0,i.kt)("p",null,"Internet Explorer is not officially supported, as in we don\u2019t run tests for it,\nbut you can be mostly confident it works with the right polyfills. But it does\ncome with a risk of unexpected results in styling or functionality."),(0,i.kt)("h2",{id:"polyfills"},"Polyfills"),(0,i.kt)(n.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n"))),(0,i.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add core-js whatwg-fetch abortcontroller-polyfill md-gum-polyfill resize-observer-polyfill\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import 'core-js';\nimport 'whatwg-fetch';\nimport 'abortcontroller-polyfill/dist/polyfill-patch-fetch';\n// Order matters: AbortController needs fetch which needs Promise (provided by core-js).\n\nimport 'md-gum-polyfill';\nimport ResizeObserver from 'resize-observer-polyfill';\n\nwindow.ResizeObserver ??= ResizeObserver;\n\nexport { default } from '@uppy/core';\nexport * from '@uppy/core';\n")),(0,i.kt)("h2",{id:"legacy-cdn-bundle"},"Legacy CDN bundle"),(0,i.kt)(a.Z,{uppyJsName:"uppy.legacy.min.js",mdxType:"UppyCdnExample"},"\n    import { Uppy, DragDrop, Tus } from \"{{UPPY_JS_URL}}\"\n    const uppy = new Uppy()\n    uppy.use(DragDrop, { target: '#uppy' })\n    uppy.use(Tus, { endpoint: '//tusd.tusdemo.net/files/' })\n  "))}f.isMDXComponent=!0}}]);