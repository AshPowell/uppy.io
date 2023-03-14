"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1042],{3005:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>m});var n=a(7462),o=(a(7294),a(3905)),s=a(5488),i=a(5162),l=a(3068);const r={sidebar_position:1},p="Transloadit",d={unversionedId:"uploader/transloadit",id:"uploader/transloadit",title:"Transloadit",description:"The @uppy/transloadit plugin can be used to upload files directly to",source:"@site/docs/uploader/transloadit.mdx",sourceDirName:"uploader",slug:"/uploader/transloadit",permalink:"/uppy.io/pr-preview/pr-69/docs/uploader/transloadit",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/uploader/transloadit.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Zoom",permalink:"/uppy.io/pr-preview/pr-69/docs/sources/companion-plugins/zoom"},next:{title:"Tus",permalink:"/uppy.io/pr-preview/pr-69/docs/uploader/tus"}},u={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"Use with Companion",id:"use-with-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>service</code>",id:"service",level:4},{value:"<code>limit</code>",id:"limit",level:4},{value:"<code>assemblyOptions</code>",id:"assemblyoptions",level:4},{value:"<code>waitForEncoding</code>",id:"waitforencoding",level:4},{value:"<code>waitForMetadata</code>",id:"waitformetadata",level:4},{value:"<code>importFromUploadURLs</code>",id:"importfromuploadurls",level:4},{value:"<code>alwaysRunAssembly</code>",id:"alwaysrunassembly",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>getAssemblyOptions</code>",id:"getassemblyoptions",level:4},{value:"<code>params</code>",id:"params",level:4},{value:"<code>signature</code>",id:"signature",level:4},{value:"<code>fields</code>",id:"fields",level:4},{value:"Static exports",id:"static-exports",level:3},{value:"<code>COMPANION_URL</code>",id:"companion_url",level:4},{value:"<code>COMPANION_ALLOWED_HOSTS</code>",id:"companion_allowed_hosts",level:4},{value:"Events",id:"events",level:3},{value:"<code>transloadit:assembly-created</code>",id:"transloaditassembly-created",level:4},{value:"<code>transloadit:upload</code>",id:"transloaditupload",level:4},{value:"<code>transloadit:assembly-executing</code>",id:"transloaditassembly-executing",level:4},{value:"<code>transloadit:result</code>",id:"transloaditresult",level:4},{value:"<code>transloadit:complete</code>",id:"transloaditcomplete",level:4},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Accessing the assembly when an error occurred",id:"accessing-the-assembly-when-an-error-occurred",level:3},{value:"Assembly behavior when Uppy is closed",id:"assembly-behavior-when-uppy-is-closed",level:3}],c={toc:m};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transloadit"},"Transloadit"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/transloadit")," plugin can be used to upload files directly to\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/"},"Transloadit")," for all kinds of processing, such as\ntranscoding video, resizing images, zipping/unzipping, ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/services/"},"and much\nmore"),"."),(0,o.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Not sure which uploader is best for you? Read\n\u201c",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/choosing-uploader"},"Choosing the uploader you need"),"\u201d.")),(0,o.kt)("p",null,"Transloadit\u2019s strength is versatility. By doing video, audio, images, documents,\nand more, you only need one vendor for ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/services/"},"all your file processing\nneeds"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/transloadit")," plugin directly uploads to\nTransloadit so you only have to worry about creating a\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/getting-started/concepts/"},"Template"),". Transloadit accepts the files, processes\naccording to the instructions in the Template, and stores the results in storage\nof your choosing, such as a self-owned S3 bucket. The Transloadit plugin uses\n",(0,o.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},"Tus")," under the hood so you don\u2019t have to sacrifice\nreliable, resumable uploads."),(0,o.kt)("p",null,"You should use ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/transloadit")," if you don\u2019t want to host your own Tus or\nCompanion servers, (optionally) need file processing, and store it in the\nservice (such as S3 or GCS) of your liking. All with minimal effort."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/transloadit\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/transloadit\n"))),(0,o.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Transloadit } from "{{UPPY_JS_URL}}"\n        new Uppy().use(Transloadit, { /* see options */ })\n      '))),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"A quick overview of the complete API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-17} showLineNumbers","{10-17}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Transloadit from '@uppy/transloadit';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nconst uppy = new Uppy()\n    .use(Dashboard, { inline: true, target: 'body' })\n    .use(Transloadit, {\n        assemblyOptions: {\n            params: {\n                auth: { key: 'your-transloadit-key' },\n                template_id: 'your-template-id',\n            },\n        },\n    });\n// Optionally listen to events\nuppy.on('transloadit:assembly-created', (assembly, fileIDs) => {});\nuppy.on('transloadit:upload', (file, assembly) => {});\nuppy.on('transloadit:assembly-executing', (assembly) => {});\nuppy.on('transloadit:result', (stepName, result, assembly) => {});\nuppy.on('transloadit:complete', (assembly) => {});\n")),(0,o.kt)("h3",{id:"use-with-companion"},"Use with Companion"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"All ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit/pricing/"},"Transloadit plans")," come with a hosted version\nof Companion.")),(0,o.kt)("p",null,"You can use this plugin together with Transloadit\u2019s hosted Companion service to\nlet your users import files from third party sources across the web. To do so\neach provider plugin must be configured with Transloadit\u2019s Companion URLs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { COMPANION_URL, COMPANION_ALLOWED_HOSTS } from '@uppy/transloadit';\nimport Dropbox from '@uppy/dropbox';\n\nuppy.use(Dropbox, {\n    companionUrl: COMPANION_URL,\n    companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n});\n")),(0,o.kt)("p",null,"This will already work. Transloadit\u2019s OAuth applications are used to\nauthenticate your users by default. Your users will be asked to provide\nTransloadit access to their files. Since your users are probably not aware of\nTransloadit, this may be confusing or decrease trust. You may also hit rate\nlimits, because the OAuth application is shared between everyone using\nTransloadit."),(0,o.kt)("p",null,"To solve that, you can use your own OAuth keys with Transloadit\u2019s hosted\nCompanion servers by using Transloadit Template Credentials. ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/#how-to-create-template-credentials"},"Create a Template\nCredential")," on the Transloadit site. Select \u201cCompanion\nOAuth\u201d for the service, and enter the key and secret for the provider you want\nto use. Then you can pass the name of the new credentials to that provider:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { COMPANION_URL, COMPANION_ALLOWED_HOSTS } from '@uppy/transloadit';\nimport Dropbox from '@uppy/dropbox';\n\nuppy.use(Dropbox, {\n    companionUrl: COMPANION_URL,\n    companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n    companionKeysParams: {\n        key: 'YOUR_TRANSLOADIT_API_KEY',\n        credentialsName: 'my_companion_dropbox_creds',\n    },\n});\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("p",null,"A unique identifier for this plugin (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Transloadit'"),")."),(0,o.kt)("h4",{id:"service"},(0,o.kt)("inlineCode",{parentName:"h4"},"service")),(0,o.kt)("p",null,"The Transloadit API URL to use (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://api2.transloadit.com"),")."),(0,o.kt)("p",null,"The default will try to route traffic efficiently based on the location of your\nusers. You could for instance set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api2-us-east-1.transloadit.com"),"\nif you need the traffic to stay inside a particular region."),(0,o.kt)("h4",{id:"limit"},(0,o.kt)("inlineCode",{parentName:"h4"},"limit")),(0,o.kt)("p",null,"Limit the amount of uploads going on at the same time (",(0,o.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),")."),(0,o.kt)("p",null,"Setting this to ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," means no limit on concurrent uploads, but we recommend a\nvalue between ",(0,o.kt)("inlineCode",{parentName:"p"},"5")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"20"),". This option is passed through to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/upload-strategies/tus"},(0,o.kt)("inlineCode",{parentName:"a"},"@uppy/tus"))," plugin, which this plugin uses\ninternally."),(0,o.kt)("h4",{id:"assemblyoptions"},(0,o.kt)("inlineCode",{parentName:"h4"},"assemblyOptions")),(0,o.kt)("p",null,"Configure the\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/topics/assembly-instructions/"},"Assembly Instructions"),",\nthe fields to send along to the assembly, and authentication\n(",(0,o.kt)("inlineCode",{parentName:"p"},"object | function"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("p",null,"The object you can pass or return from a function has this structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  params: {\n    auth: { key: 'key-from-transloadit' },\n    template_id: 'id-from-transloadit',\n    steps: {\n      // Overruling Template at runtime\n    },\n    notify_url: 'https://your-domain.com/assembly-status',\n  },\n  signature: 'generated-signature',\n  fields: {\n    // Dynamic or static fields to send along\n  },\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"params")," is used to authenticate with Transloadit and using your desired\n",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/topics/templates/"},"template"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"auth.key")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," is your authentication key which you can find on the\n\u201cCredentials\u201d page of your account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"template_id")," ",(0,o.kt)("em",{parentName:"li"},"(required)")," is the unique identifier to use the right\ntemplate from your account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"steps")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," can be used to\n",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/topics/templates/#overruling-templates-at-runtime"},"overrule Templates at runtime"),".\nA typical use case might be changing the storage path on the fly based on\nthe session user id. For most use cases, we recommend to let your Templates\nhandle dynamic cases (they can accept ",(0,o.kt)("inlineCode",{parentName:"li"},"fields")," and execute arbitrary\nJavaScript as well), and not pass in ",(0,o.kt)("inlineCode",{parentName:"li"},"steps")," from a browser. The template\neditor also has extra validations and context."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"notify_url")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," is a pingback with the assembly status as JSON.\nFor instance, if you don\u2019t want to block the user experience by letting them\nwait for your template to complete with\n",(0,o.kt)("a",{parentName:"li",href:"#waitForEncoding"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForEncoding")),", but you do want to want to\nasynchrounously have an update, you can provide an URL which will be\n\u201cpinged\u201d with the assembly status."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"signature")," ",(0,o.kt)("em",{parentName:"li"},"(optional, but recommended)")," is a cryptographic signature to\nprovide further trust in unstrusted environments. Refer to\n\u201c",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/topics/signature-authentication/"},"Signature Authentication\u201d"),"\nfor more information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fields")," ",(0,o.kt)("em",{parentName:"li"},"(optional)")," can be used to to send along key/value pairs, which can\nbe\n",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/topics/assembly-instructions/#form-fields-in-instructions"},"used dynamically in your template"),".")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Examples"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As a function")),(0,o.kt)("p",null,"A custom ",(0,o.kt)("inlineCode",{parentName:"p"},"assemblyOptions()")," option should return an object or a promise for an\nobject."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Transloadit, {\n    assemblyOptions(file) {\n        return {\n            params: {\n                auth: { key: 'TRANSLOADIT_AUTH_KEY_HERE' },\n                template_id: 'xyz',\n            },\n            fields: {\n                caption: file.meta.caption,\n            },\n        };\n    },\n});\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"${fields.caption}")," variable will be available in the Assembly spawned from\nTemplate ",(0,o.kt)("inlineCode",{parentName:"p"},"xyz"),". You can use this to dynamically watermark images for example."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"assemblyOptions()")," may also return a Promise, so it could retrieve signed\nAssembly parameters from a server. For example, assuming an endpoint\n",(0,o.kt)("inlineCode",{parentName:"p"},"/transloadit-params")," that responds with a JSON object with\n",(0,o.kt)("inlineCode",{parentName:"p"},"{ params, signature }")," properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Transloadit, {\n    async assemblyOptions(file) {\n        const res = await fetch('/transloadit-params');\n        return response.json();\n    },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"As an object")),(0,o.kt)("p",null,"If you don\u2019t need to change anything dynamically, you can also pass an object\ndirectly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Transloadit, {\n    assemblyOptions: {\n        params: { auth: { key: 'transloadit-key' } },\n    },\n});\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Use with @uppy/form")),(0,o.kt)("p",null,"Combine the ",(0,o.kt)("inlineCode",{parentName:"p"},"assemblyOptions()")," option with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/form"},"Form")," plugin to\npass user input from a ",(0,o.kt)("inlineCode",{parentName:"p"},"<form>")," to a Transloadit Assembly:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// This will add form field values to each file's `.meta` object:\nuppy.use(Form, { getMetaFromForm: true });\nuppy.use(Transloadit, {\n    getAssemblyOptions(file) {\n        return {\n            params: {\n                /* ... */\n            },\n            // Pass through the fields you need:\n            fields: {\n                message: file.meta.message,\n            },\n        };\n    },\n});\n"))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"When you go to production always make sure to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"signature"),". ",(0,o.kt)("strong",{parentName:"p"},"Not using\n",(0,o.kt)("a",{parentName:"strong",href:"https://transloadit.com/docs/topics/signature-authentication/"},"Signature Authentication"),"\ncan be a security risk"),". Signature Authentication is a security measure that\ncan prevent outsiders from tampering with your Assembly Instructions. While\nSignature Authentication is not implemented (yet), we recommend to disable\n",(0,o.kt)("inlineCode",{parentName:"p"},"allow_steps_override")," in your Templates to avoid outsiders being able to pass\nin any Instructions and storage targets on your behalf.")),(0,o.kt)("h4",{id:"waitforencoding"},(0,o.kt)("inlineCode",{parentName:"h4"},"waitForEncoding")),(0,o.kt)("p",null,"Wait for the template to finish, rather than only the upload, before marking the\nupload complete (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"false"),", the Assemblies will complete (or error) in the background but\nUppy won\u2019t know or care about it. You may have to let Transloadit ping you via\na ",(0,o.kt)("inlineCode",{parentName:"li"},"notify_url")," and asynchronously inform your user (email, in-app\nnotification)."),(0,o.kt)("li",{parentName:"ul"},"When ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", the Transloadit plugin waits for Assemblies to complete before\nthe files are marked as completed. This means users have to wait for a\npotentially long time, depending on how complicated your Assembly instructions\nare. But, you can receive the final status and transcoding results on the\nclient side with less effort.")),(0,o.kt)("p",null,"When this is enabled, you can listen for the\n",(0,o.kt)("a",{parentName:"p",href:"#transloaditresult"},(0,o.kt)("inlineCode",{parentName:"a"},"transloadit:result"))," and\n",(0,o.kt)("a",{parentName:"p",href:"#transloaditcomplete"},(0,o.kt)("inlineCode",{parentName:"a"},"transloadit:complete"))," events."),(0,o.kt)("h4",{id:"waitformetadata"},(0,o.kt)("inlineCode",{parentName:"h4"},"waitForMetadata")),(0,o.kt)("p",null,"Wait for for Transloadit\u2019s backend to catch early errors, not the entire\nAssembly to complete. (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,o.kt)("p",null,"When set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the Transloadit plugin waits for Transloadit\u2019s backend to\nextract metadata from all the uploaded files. This is mostly handy if you want\nto have a quick user experience (so your users don\u2019t necessarily need to wait\nfor all the encoding to complete), but you do want to let users know about some\ntypes of errors that can be caught early on, like file format issues."),(0,o.kt)("p",null,"You you can listen for the ",(0,o.kt)("a",{parentName:"p",href:"#transloaditupload"},(0,o.kt)("inlineCode",{parentName:"a"},"transloadit:upload"))," event when\nthis or ",(0,o.kt)("inlineCode",{parentName:"p"},"waitForEncoding")," is enabled."),(0,o.kt)("h4",{id:"importfromuploadurls"},(0,o.kt)("inlineCode",{parentName:"h4"},"importFromUploadURLs")),(0,o.kt)("p",null,"Allow another plugin to upload files, and then import those files into the\nTransloadit Assembly (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"When enabling this option, Transloadit will ",(0,o.kt)("em",{parentName:"p"},"not")," configure the Tus plugin to\nupload to Transloadit. Instead, a separate upload plugin must be used. Once the\nupload completes, the Transloadit plugin adds the uploaded file to the Assembly."),(0,o.kt)("p",null,"For example, to upload files to an S3 bucket and then transcode them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(AwsS3, {\n    getUploadParameters(file) {\n        return {\n            /* upload parameters */\n        };\n    },\n});\nuppy.use(Transloadit, {\n    importFromUploadURLs: true,\n    assemblyOptions: {\n        params: {\n            auth: { key: 'YOUR_API_KEY' },\n            template_id: 'YOUR_TEMPLATE_ID',\n        },\n    },\n});\n")),(0,o.kt)("p",null,"Tranloadit will download the files and expose them to your Template as\n",(0,o.kt)("inlineCode",{parentName:"p"},":original"),", as if they were directly uploaded from the Uppy client.  "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For this to work, the upload plugin must assign a publically accessible\n",(0,o.kt)("inlineCode",{parentName:"p"},"uploadURL")," property to the uploaded file object. The Tus and S3 plugins both do\nthis automatically. For the XHRUpload plugin, you may have to specify a custom\n",(0,o.kt)("inlineCode",{parentName:"p"},"getResponseData")," function.")),(0,o.kt)("h4",{id:"alwaysrunassembly"},(0,o.kt)("inlineCode",{parentName:"h4"},"alwaysRunAssembly")),(0,o.kt)("p",null,"Always create and run an Assembly when ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.upload()")," is called, even if no\nfiles were selected (",(0,o.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,o.kt)("p",null,"This allows running Assemblies that do not receive files, but instead use a\nrobot like ",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/transcoding/#s3-import"},(0,o.kt)("inlineCode",{parentName:"a"},"/s3/import")),"\nto download the files from elsewhere, for example, for a bulk transcoding job."),(0,o.kt)("h4",{id:"locale"},(0,o.kt)("inlineCode",{parentName:"h4"},"locale")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Shown while Assemblies are being created for an upload.\n        creatingAssembly: 'Preparing upload...',\n        // Shown if an Assembly could not be created.\n        creatingAssemblyFailed: 'Transloadit: Could not create Assembly',\n        // Shown after uploads have succeeded, but when the Assembly is still executing.\n        // This only shows if `waitForMetadata` or `waitForEncoding` was enabled.\n        encoding: 'Encoding...',\n    },\n};\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Deprecated options"),(0,o.kt)("p",null,"These options have been deprecated in favor of\n",(0,o.kt)("a",{parentName:"p",href:"#assemblyoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"assemblyOptions")),", which we now recommend for all use cases.\nYou can still use these options, but they will be removed in the next major\nversion."),(0,o.kt)("h4",{id:"getassemblyoptions"},(0,o.kt)("inlineCode",{parentName:"h4"},"getAssemblyOptions")),(0,o.kt)("p",null,"This function behaves the same as passing a function to\n",(0,o.kt)("a",{parentName:"p",href:"assemblyoptions"},(0,o.kt)("inlineCode",{parentName:"a"},"assemblyOptions")),"."),(0,o.kt)("h4",{id:"params"},(0,o.kt)("inlineCode",{parentName:"h4"},"params")),(0,o.kt)("p",null,"The Assembly parameters to use for the upload (",(0,o.kt)("inlineCode",{parentName:"p"},"object"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),") See\nthe Transloadit documentation on\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/#14-assembly-instructions"},"Assembly Instructions"),"\nfor further information."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.key")," Assembly parameter is required. You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"steps")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"template_id")," options here as described in the Transloadit documentation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Transloadit, {\n    params: {\n        auth: { key: 'YOUR_TRANSLOADIT_KEY' },\n        steps: {\n            encode: {\n                robot: '/video/encode',\n                use: {\n                    steps: [':original'],\n                    fields: ['file_input_field2'],\n                },\n                preset: 'iphone',\n            },\n        },\n    },\n});\n")),(0,o.kt)("h4",{id:"signature"},(0,o.kt)("inlineCode",{parentName:"h4"},"signature")),(0,o.kt)("p",null,"An optional signature for the Assembly parameters. See the Transloadit\ndocumentation on\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/#26-signature-authentication"},"Signature Authentication"),"\nfor further information."),(0,o.kt)("p",null,"If a ",(0,o.kt)("inlineCode",{parentName:"p"},"signature")," is provided, ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," should be a JSON string instead of a\nJavaScript object, as otherwise the generated JSON in the browser may be\ndifferent from the JSON string that was used to generate the signature."),(0,o.kt)("h4",{id:"fields"},(0,o.kt)("inlineCode",{parentName:"h4"},"fields")),(0,o.kt)("p",null,"An object of form fields to send along to the Assembly. Keys are field names,\nand values are field values. See also the Transloadit documentation on\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/docs/#23-form-fields-in-instructions"},"Form Fields In Instructions"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Transloadit, {\n    // ...\n    fields: {\n        message: 'This is a form field',\n    },\n});\n")),(0,o.kt)("p",null,"You can also pass an array of field names to send global or file metadata along\nto the Assembly. Global metadata is set using the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy/#meta"},(0,o.kt)("inlineCode",{parentName:"a"},"meta")," option")," in the Uppy constructor, or using the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy/#uppy-setMeta-data"},(0,o.kt)("inlineCode",{parentName:"a"},"setMeta")," method"),". File metadata is set using\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy/#uppy-setFileMeta-fileID-data"},(0,o.kt)("inlineCode",{parentName:"a"},"setFileMeta"))," method. The\n",(0,o.kt)("a",{parentName:"p",href:"/docs/form"},"Form")," plugin also sets global metadata based on the values of\n",(0,o.kt)("inlineCode",{parentName:"p"},"<input />"),"s in the form, providing a handy way to use values from HTML form\nfields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Form, { target: 'form#upload-form', getMetaFromForm: true });\nuppy.use(Transloadit, {\n    fields: ['field_name', 'other_field_name'],\n    params: {\n        /* ... */\n    },\n});\n")),(0,o.kt)("p",null,"Form fields can also be computed dynamically using custom logic, by using the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/transloadit/#getAssemblyOptions-file"},(0,o.kt)("inlineCode",{parentName:"a"},"getAssemblyOptions(file)"))," option.")),(0,o.kt)("h3",{id:"static-exports"},"Static exports"),(0,o.kt)("h4",{id:"companion_url"},(0,o.kt)("inlineCode",{parentName:"h4"},"COMPANION_URL")),(0,o.kt)("p",null,"The main endpoint for Transloadit\u2019s hosted companions. You can use this constant\nin remote provider options, like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Dropbox from '@uppy/dropbox';\nimport { COMPANION_URL } from '@uppy/transloadit';\n\nuppy.use(Dropbox, {\n    companionUrl: COMPANION_URL,\n});\n")),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"COMPANION_URL"),", you should also configure\n",(0,o.kt)("a",{parentName:"p",href:"#companion_allowed_hosts"},(0,o.kt)("inlineCode",{parentName:"a"},"companionAllowedHosts")),"."),(0,o.kt)("p",null,"The value of this constant is ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api2.transloadit.com/companion"),". If you\nare using a custom ",(0,o.kt)("a",{parentName:"p",href:"#service"},(0,o.kt)("inlineCode",{parentName:"a"},"service"))," option, you should also set a custom\nhost option in your provider plugins, by taking a Transloadit API url and\nappending ",(0,o.kt)("inlineCode",{parentName:"p"},"/companion"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(Dropbox, {\n    companionUrl: 'https://api2-us-east-1.transloadit.com/companion',\n});\n")),(0,o.kt)("h4",{id:"companion_allowed_hosts"},(0,o.kt)("inlineCode",{parentName:"h4"},"COMPANION_ALLOWED_HOSTS")),(0,o.kt)("p",null,"A RegExp pattern matching Transloadit\u2019s hosted companion endpoints. The pattern\nis used in remote provider ",(0,o.kt)("inlineCode",{parentName:"p"},"companionAllowedHosts")," options, to make sure that\nthird party authentication messages cannot be faked by an attacker\u2019s page but\ncan only originate from Transloadit\u2019s servers."),(0,o.kt)("p",null,"Use it whenever you use ",(0,o.kt)("inlineCode",{parentName:"p"},"companionUrl: COMPANION_URL"),", like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Dropbox from '@uppy/dropbox';\nimport { COMPANION_ALLOWED_HOSTS } from '@uppy/transloadit';\n\nuppy.use(Dropbox, {\n    companionAllowedHosts: COMPANION_ALLOWED_HOSTS,\n});\n")),(0,o.kt)("p",null,"The value of this constant covers ",(0,o.kt)("em",{parentName:"p"},"all")," Transloadit\u2019s Companion servers, so it\ndoes not need to be changed if you are using a custom ",(0,o.kt)("a",{parentName:"p",href:"#service"},(0,o.kt)("inlineCode",{parentName:"a"},"service")),"\noption. But, if you are not using the Transloadit Companion servers at\n",(0,o.kt)("inlineCode",{parentName:"p"},"*.transloadit.com"),", make sure to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"companionAllowedHosts")," option to\nsomething that matches what you do use."),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)("h4",{id:"transloaditassembly-created"},(0,o.kt)("inlineCode",{parentName:"h4"},"transloadit:assembly-created")),(0,o.kt)("p",null,"Fired when an Assembly is created."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assembly")," - The initial ",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/api/#assembly-status-response"},"Assembly Status"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fileIDs")," - The IDs of the files that will be uploaded to this Assembly.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('transloadit:assembly-created', (assembly, fileIDs) => {\n    console.group('Created', assembly.assembly_id, 'for files:');\n    for (const id of fileIDs) {\n        console.log(uppy.getFile(id).name);\n    }\n    console.groupEnd();\n});\n")),(0,o.kt)("h4",{id:"transloaditupload"},(0,o.kt)("inlineCode",{parentName:"h4"},"transloadit:upload")),(0,o.kt)("p",null,"Fired when Transloadit has received an upload. Requires\n",(0,o.kt)("a",{parentName:"p",href:"#waitformetadata"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForMetadata"))," to be set."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"file")," - The Transloadit file object that was uploaded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assembly")," - The ",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/api/#assembly-status-response"},"Assembly Status")," of the Assembly to which\nthe file was uploaded.")),(0,o.kt)("h4",{id:"transloaditassembly-executing"},(0,o.kt)("inlineCode",{parentName:"h4"},"transloadit:assembly-executing")),(0,o.kt)("p",null,"Fired when Transloadit has received all uploads, and is executing the Assembly."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assembly")," - The\n",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/api/#assembly-status-response"},"Assembly Status"),"\nof the Assembly that is executing.")),(0,o.kt)("h4",{id:"transloaditresult"},(0,o.kt)("inlineCode",{parentName:"h4"},"transloadit:result")),(0,o.kt)("p",null,"Fired when a result came in from an Assembly. Requires\n",(0,o.kt)("a",{parentName:"p",href:"#waitforencoding"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForEncoding"))," to be set."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"stepName")," - The name of the Assembly step that generated this result."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"result")," - The result object from Transloadit. This result object has one more\nproperty, namely ",(0,o.kt)("inlineCode",{parentName:"li"},"localId"),". This is the ID of the file in Uppy\u2019s local state,\nand can be used with ",(0,o.kt)("inlineCode",{parentName:"li"},"uppy.getFile(id)"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assembly")," - The ",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/api/#assembly-status-response"},"Assembly Status")," of the Assembly that\ngenerated this result.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('transloadit:result', (stepName, result) => {\n    const file = uppy.getFile(result.localId);\n    document.body.appendChild(html`\n        <div>\n            <h2>From ${file.name}</h2>\n            <a href=${result.ssl_url}> View </a>\n        </div>\n    `);\n});\n")),(0,o.kt)("h4",{id:"transloaditcomplete"},(0,o.kt)("inlineCode",{parentName:"h4"},"transloadit:complete")),(0,o.kt)("p",null,"Fired when an Assembly completed. Requires ",(0,o.kt)("a",{parentName:"p",href:"#waitForEncoding"},(0,o.kt)("inlineCode",{parentName:"a"},"waitForEncoding")),"\nto be set."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"assembly")," - The final ",(0,o.kt)("a",{parentName:"li",href:"https://transloadit.com/docs/api/#assembly-status-response"},"Assembly Status")," of the completed\nAssembly.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('transloadit:complete', (assembly) => {\n    // Could do something fun with this!\n    console.log(assembly.results);\n});\n")),(0,o.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("h3",{id:"accessing-the-assembly-when-an-error-occurred"},"Accessing the assembly when an error occurred"),(0,o.kt)("p",null,"If an error occurs when an Assembly has already started, you can find the\nAssembly Status on the error object\u2019s ",(0,o.kt)("inlineCode",{parentName:"p"},"assembly")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('error', (error) => {\n    if (error.assembly) {\n        console.log(`Assembly ID ${error.assembly.assembly_id} failed!`);\n        console.log(error.assembly);\n    }\n});\n")),(0,o.kt)("h3",{id:"assembly-behavior-when-uppy-is-closed"},"Assembly behavior when Uppy is closed"),(0,o.kt)("p",null,"When integrating ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/transloadit")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard"),", closing the\ndashboard will result in continuing assemblies on the server. When the user\nmanually cancels the upload any running assemblies will be cancelled."))}h.isMDXComponent=!0}}]);