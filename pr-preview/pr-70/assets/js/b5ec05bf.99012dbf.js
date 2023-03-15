"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[4750],{9289:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var l=a(7294),n=a(7676),i=a(1262),s=a(7430),o=a(7709),r=a(3759),p=a(1276),u=a(3313),c=a(6009),d=a(1978),h=a(4235),m=a(7986),g=a(9794),b=a(6682),y=a(2435),v=a(7304),f=a(6376);const k={main:"main_tfAN",header:"header_rzLV",options:"options_J1Ai","options-wrapper":"options-wrapper_Ce9n",notice:"notice_nbSC"};var E=a(9960);const C={maxFileSize:1e6,maxNumberOfFiles:3,minNumberOfFiles:2,allowedFileTypes:["image/*","video/*"],requiredMetaFields:["caption"]},w={height:500,restrictions:null,disabled:!1,theme:"auto",plugins:["Webcam","GoogleDrive","Dropbox","Instagram","Url","OneDrive","Unsplash","Box","ImageEditor"]};function Z(e,t){switch(t.type){case"small":return t.checked?{...e,width:400,height:400}:{...e,width:void 0,height:500};case"theme":return{...e,theme:t.checked?"dark":"light"};case"disabled":return{...e,disabled:t.checked};case"restrictions":return{...e,restrictions:t.checked?C:void 0};case"plugins":return t.checked?{...e,plugins:[...e.plugins,t.value]}:{...e,plugins:e.plugins.filter((e=>e!==t.value))};default:return e}}const D=[{heading:"Remote sources",options:[{label:"Google Drive",value:"GoogleDrive",type:"plugins",defaultChecked:!0},{label:"Dropbox",value:"Dropbox",type:"plugins",defaultChecked:!0},{label:"Instagram",value:"Instagram",type:"plugins",defaultChecked:!0},{label:"Url",value:"Url",type:"plugins",defaultChecked:!0},{label:"OneDrive",value:"OneDrive",type:"plugins",defaultChecked:!0},{label:"Unsplash",value:"Unsplash",type:"plugins",defaultChecked:!0},{label:"Box",value:"Box",type:"plugins",defaultChecked:!0}]},{heading:"Local sources",options:[{label:"Webcam",value:"Webcam",type:"plugins",defaultChecked:!0},{label:"Audio",value:"Audio",type:"plugins",defaultChecked:!1},{label:"Screencast",value:"ScreenCapture",type:"plugins",defaultChecked:!1}]},{heading:"Dashboard",options:[{label:"Small",type:"small"},{label:"Disabled",type:"disabled"},{label:"Dark mode",type:"theme"}]},{heading:"Uppy",options:[{label:"Restrictions",type:"restrictions"}]}];function U(){const[e,t]=(0,l.useReducer)(Z,w);return l.createElement(n.Z,null,l.createElement("main",{className:k.main},l.createElement("h1",null,"Examples"),l.createElement("div",{className:k.header},l.createElement("h2",null,"Dashboard"),l.createElement("p",null,l.createElement(E.Z,{to:"/docs/user-interfaces/dashboard"},"Docs")," \u2022"," ",l.createElement("a",{target:"_blank",rel:"noopener",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"))),l.createElement("p",null,"Dashboard is the full-featured UI for Uppy that shows nice file previews and upload progress, lets you edit metadata, and unites acquire plugins, such as Google Drive and Webcam, under one roof."),l.createElement("section",null,l.createElement("div",{className:k.options},D.map((e=>l.createElement("div",{key:e.heading},l.createElement("h3",null,e.heading),l.createElement("div",{"wrapper-for":e.heading,className:k["options-wrapper"]},e.options.map((e=>{let{label:a,value:n,type:i,defaultChecked:s}=e;return l.createElement("div",{key:a},l.createElement("input",{type:"checkbox",id:a,className:k["framework-input"],name:"framework",value:i,defaultChecked:s,onChange:e=>t({type:i,checked:e.target.checked,value:n})}),l.createElement("label",{htmlFor:a},a))}))))))),l.createElement(i.Z,null,(()=>{const t=new o.ZP({restrictions:e.restrictions}).use(r.Z).use(y.Z).use(b.Z).use(v.Z,{}).use(f.Z,{endpoint:"https://tusd.tusdemo.net/files/"}).use(p.Z,{companionUrl:"http://companion.uppy.io"}).use(c.Z,{companionUrl:"http://companion.uppy.io"}).use(u.Z,{companionUrl:"http://companion.uppy.io"}).use(m.Z,{companionUrl:"http://companion.uppy.io"}).use(d.Z,{companionUrl:"http://companion.uppy.io"}).use(h.Z,{companionUrl:"http://companion.uppy.io"}).use(g.Z,{companionUrl:"http://companion.uppy.io"});return l.createElement("div",{className:k["uppy-wrapper"]},l.createElement(s.Z,{uppy:t,width:e.width,height:e.height,plugins:e.plugins,theme:e.theme,disabled:e.disabled,note:e.restrictions?"Images and video only, 2\u20133 files, up to 1 MB":null}))}))),l.createElement("p",{className:k.notice},"Files from the examples are uploaded to our test servers and deleted every 24-72 hours.")))}}}]);