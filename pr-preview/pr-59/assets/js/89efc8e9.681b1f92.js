"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6130],{8583:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const s={sidebar_position:3},i="Building plugins",r={unversionedId:"guides/building-plugins",id:"guides/building-plugins",title:"Building plugins",description:"You can find already a few useful Uppy plugins out there, but there might come a",source:"@site/docs/guides/building-plugins.md",sourceDirName:"guides",slug:"/guides/building-plugins",permalink:"/uppy.io/pr-preview/pr-59/docs/guides/building-plugins",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/guides/building-plugins.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using locales",permalink:"/uppy.io/pr-preview/pr-59/docs/guides/using-locales"},next:{title:"Building your own UI with Uppy",permalink:"/uppy.io/pr-preview/pr-59/docs/guides/building-your-own-ui-with-uppy"}},l={},p=[{value:"Creating A Plugin",id:"creating-a-plugin",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>BasePlugin</code>",id:"baseplugin",level:3},{value:"<code>install()</code>",id:"install",level:4},{value:"<code>uninstall()</code>",id:"uninstall",level:4},{value:"<code>afterUpdate()</code>",id:"afterupdate",level:4},{value:"<code>addTarget()</code>",id:"addtarget",level:4},{value:"<code>UIPlugin</code>",id:"uiplugin",level:3},{value:"<code>mount(target)</code>",id:"mounttarget",level:4},{value:"<code>render()</code>",id:"render",level:4},{value:"<code>onMount()</code>",id:"onmount",level:4},{value:"<code>update(state)</code>",id:"updatestate",level:4},{value:"<code>onUnmount()</code>",id:"onunmount",level:4},{value:"Upload Hooks",id:"upload-hooks",level:2},{value:"Progress events",id:"progress-events",level:2},{value:"JSX",id:"jsx",level:2},{value:"Locales",id:"locales",level:2},{value:"Example of a custom plugin",id:"example-of-a-custom-plugin",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-plugins"},"Building plugins"),(0,o.kt)("p",null,"You can find already a few useful Uppy plugins out there, but there might come a\ntime when you will want to build your own. Plugins can hook into the upload\nprocess or render a custom UI, typically to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Render some custom UI element, such as ",(0,o.kt)("a",{parentName:"li",href:"/docs/statusbar"},"StatusBar")," or\n",(0,o.kt)("a",{parentName:"li",href:"/docs/dashboard"},"Dashboard"),"."),(0,o.kt)("li",{parentName:"ul"},"Do the actual uploading, such as ",(0,o.kt)("a",{parentName:"li",href:"/docs/xhrupload"},"XHRUpload")," or\n",(0,o.kt)("a",{parentName:"li",href:"/docs/tus"},"Tus"),"."),(0,o.kt)("li",{parentName:"ul"},"Do work before the upload, like compressing an image or calling external API."),(0,o.kt)("li",{parentName:"ul"},"Interact with a third-party service to process uploads correctly, such as\n",(0,o.kt)("a",{parentName:"li",href:"/docs/transloadit"},"Transloadit")," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/aws-s3"},"AwsS3"),".")),(0,o.kt)("p",null,"See a ",(0,o.kt)("a",{parentName:"p",href:"#Example-of-a-custom-plugin"},"full example of a plugin")," below."),(0,o.kt)("h2",{id:"creating-a-plugin"},"Creating A Plugin"),(0,o.kt)("p",null,"Uppy has two classes to create plugins with. ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePlugin")," for plugins that don\u2019t\nneed a user interface, and ",(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin")," for onces that do. Each plugin has an ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"\nand a ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"s are used to uniquely identify plugins. A ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," can be\nanything\u2014some plugins use ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),"s to decide whether to do something to some\nother plugin. For example, when targeting plugins at the built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard"),"\nplugin, the Dashboard uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," to figure out where to mount different UI\nelements. ",(0,o.kt)("inlineCode",{parentName:"p"},"'acquirer'"),"-type plugins are mounted into the tab bar, while\n",(0,o.kt)("inlineCode",{parentName:"p"},"'progressindicator'"),"-type plugins are mounted into the progress bar area."),(0,o.kt)("p",null,"The plugin constructor receives the Uppy instance in the first parameter, and\nany options passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"uppy.use()")," in the second parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import BasePlugin from '@uppy/core/lib/BasePlugin.js';\n\nexport default class MyPlugin extends BasePlugin {\n    constructor(uppy, opts) {\n        super(uppy, opts);\n        this.id = opts.id || 'MyPlugin';\n        this.type = 'example';\n    }\n}\n")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("p",null,"Plugins can define methods to execute certain tasks. The most important method\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"install()"),", which is called when a plugin is ",(0,o.kt)("inlineCode",{parentName:"p"},".use"),"d."),(0,o.kt)("p",null,"All the below methods are optional! Only define the methods you need."),(0,o.kt)("h3",{id:"baseplugin"},(0,o.kt)("inlineCode",{parentName:"h3"},"BasePlugin")),(0,o.kt)("h4",{id:"install"},(0,o.kt)("inlineCode",{parentName:"h4"},"install()")),(0,o.kt)("p",null,"Called when the plugin is ",(0,o.kt)("inlineCode",{parentName:"p"},".use"),"d. Do any setup work here, like attaching events\nor adding ",(0,o.kt)("a",{parentName:"p",href:"#Upload-Hooks"},"upload hooks"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default class MyPlugin extends UIPlugin {\n    // ...\n    install() {\n        this.uppy.on('upload-progress', this.onProgress);\n        this.uppy.addPostProcessor(this.afterUpload);\n    }\n}\n")),(0,o.kt)("h4",{id:"uninstall"},(0,o.kt)("inlineCode",{parentName:"h4"},"uninstall()")),(0,o.kt)("p",null,"Called when the plugin is removed, or the Uppy instance is closed. This should\nundo all the work done in the ",(0,o.kt)("inlineCode",{parentName:"p"},"install()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default class MyPlugin extends UIPlugin {\n    // ...\n    uninstall() {\n        this.uppy.off('upload-progress', this.onProgress);\n        this.uppy.removePostProcessor(this.afterUpload);\n    }\n}\n")),(0,o.kt)("h4",{id:"afterupdate"},(0,o.kt)("inlineCode",{parentName:"h4"},"afterUpdate()")),(0,o.kt)("p",null,"Called after every state update with a debounce, after everything has mounted."),(0,o.kt)("h4",{id:"addtarget"},(0,o.kt)("inlineCode",{parentName:"h4"},"addTarget()")),(0,o.kt)("p",null,"Use this to add your plugin to another plugin\u2019s target. This is what\n",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/dashboard")," uses to add other plugins to its UI."),(0,o.kt)("h3",{id:"uiplugin"},(0,o.kt)("inlineCode",{parentName:"h3"},"UIPlugin")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UIPlugin")," extends the ",(0,o.kt)("inlineCode",{parentName:"p"},"BasePlugin")," class so it will also contain all the above\nmethods."),(0,o.kt)("h4",{id:"mounttarget"},(0,o.kt)("inlineCode",{parentName:"h4"},"mount(target)")),(0,o.kt)("p",null,"Mount this plugin to the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," element. ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," can be a CSS query selector,\na DOM element, or another Plugin. If ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," is a Plugin, the source (current)\nplugin will register with the target plugin, and the latter can decide how and\nwhere to render the source plugin."),(0,o.kt)("p",null,"This method can be overridden to support for different render engines."),(0,o.kt)("h4",{id:"render"},(0,o.kt)("inlineCode",{parentName:"h4"},"render()")),(0,o.kt)("p",null,"Render this plugin\u2019s UI. Uppy uses ",(0,o.kt)("a",{parentName:"p",href:"https://preactjs.com"},"Preact")," as its view\nengine, so ",(0,o.kt)("inlineCode",{parentName:"p"},"render()")," should return a Preact element. ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," is automatically\ncalled by Uppy on each state change."),(0,o.kt)("h4",{id:"onmount"},(0,o.kt)("inlineCode",{parentName:"h4"},"onMount()")),(0,o.kt)("p",null,"Called after Preact has rendered the components of the plugin."),(0,o.kt)("h4",{id:"updatestate"},(0,o.kt)("inlineCode",{parentName:"h4"},"update(state)")),(0,o.kt)("p",null,"Called on each state update. You will rarely need to use this, unless if you\nwant to build a UI plugin using something other than Preact."),(0,o.kt)("h4",{id:"onunmount"},(0,o.kt)("inlineCode",{parentName:"h4"},"onUnmount()")),(0,o.kt)("p",null,"Called after the elements have been removed from the DOM. Can be used to do some\nclean up or other side-effects."),(0,o.kt)("h2",{id:"upload-hooks"},"Upload Hooks"),(0,o.kt)("p",null,"When creating an upload, Uppy runs files through an upload pipeline. The\npipeline consists of three parts, each of which can be hooked into:\nPreprocessing, Uploading, and Postprocessing. Preprocessors can be used to\nconfigure uploader plugins, encrypt files, resize images, etc., before uploading\nthem. Uploaders do the actual uploading work, such as creating an XMLHttpRequest\nobject and sending the file. Postprocessors do their work after files have been\nuploaded completely. This could be anything from waiting for a file to propagate\nacross a CDN, to sending another request to relate some metadata to the file."),(0,o.kt)("p",null,"Each hook is a function that receives an array containing the file IDs that are\nbeing uploaded, and returns a Promise to signal completion. Hooks are added and\nremoved through ",(0,o.kt)("inlineCode",{parentName:"p"},"Uppy")," methods:\n",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core#addpreprocessorfn"},(0,o.kt)("inlineCode",{parentName:"a"},"addPreProcessor")),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core#adduploaderfn"},(0,o.kt)("inlineCode",{parentName:"a"},"addUploader")),",\n",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core#addpostprocessorfn"},(0,o.kt)("inlineCode",{parentName:"a"},"addPostProcessor")),", and their\n",(0,o.kt)("a",{parentName:"p",href:"/docs/uppy-core#removepreprocessorremoveuploaderremovepostprocessorfn"},(0,o.kt)("inlineCode",{parentName:"a"},"remove*")),"\ncounterparts. Normally, hooks should be added during the plugin ",(0,o.kt)("inlineCode",{parentName:"p"},"install()"),"\nmethod, and removed during the ",(0,o.kt)("inlineCode",{parentName:"p"},"uninstall()")," method."),(0,o.kt)("p",null,"Additionally, upload hooks can fire events to signal progress."),(0,o.kt)("p",null,"When adding hooks, make sure to bind the hook ",(0,o.kt)("inlineCode",{parentName:"p"},"fn")," beforehand! Otherwise, it\nwill be impossible to remove. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class MyPlugin extends BasePlugin {\n    constructor(uppy, opts) {\n        super(uppy, opts);\n        this.id = opts.id || 'MyPlugin';\n        this.type = 'example';\n        this.prepareUpload = this.prepareUpload.bind(this); // \u2190 this!\n    }\n\n    prepareUpload(fileIDs) {\n        console.log(this); // `this` refers to the `MyPlugin` instance.\n        return Promise.resolve();\n    }\n\n    install() {\n        this.uppy.addPreProcessor(this.prepareUpload);\n    }\n\n    uninstall() {\n        this.uppy.removePreProcessor(this.prepareUpload);\n    }\n}\n")),(0,o.kt)("p",null,"Or you can define the method as a class field:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"class MyPlugin extends UIPlugin {\n    constructor(uppy, opts) {\n        super(uppy, opts);\n        this.id = opts.id || 'MyPlugin';\n        this.type = 'example';\n    }\n\n    prepareUpload = (fileIDs) => {\n        // \u2190 this!\n        console.log(this); // `this` refers to the `MyPlugin` instance.\n        return Promise.resolve();\n    };\n\n    install() {\n        this.uppy.addPreProcessor(this.prepareUpload);\n    }\n\n    uninstall() {\n        this.uppy.removePreProcessor(this.prepareUpload);\n    }\n}\n")),(0,o.kt)("h2",{id:"progress-events"},"Progress events"),(0,o.kt)("p",null,"Progress events can be fired for individual files to show feedback to the user.\nFor upload progress events, only emitting how many bytes are expected and how\nmany have been uploaded is enough. Uppy will handle calculating progress\npercentages, upload speed, etc."),(0,o.kt)("p",null,"Preprocessing and postprocessing progress events are plugin-dependent and can\nrefer to anything, so Uppy doesn\u2019t try to be smart about them. Processing\nprogress events can be of two types: determinate or indeterminate. Some\nprocessing does not have meaningful progress beyond \u201cnot done\u201d and \u201cdone\u201d. For\nexample, sending a request to initialize a server-side resource that will serve\nas the upload destination. In those situations, indeterminate progress is\nsuitable. Other processing does have meaningful progress. For example,\nencrypting a large file. In those situations, determinate progress is suitable."),(0,o.kt)("p",null,"Here are the relevant events:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/uppy-core#preprocess-progress"},(0,o.kt)("inlineCode",{parentName:"a"},"preprocess-progress"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/uppy-core#upload-progress"},(0,o.kt)("inlineCode",{parentName:"a"},"upload-progress"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/uppy-core#postprocess-progress"},(0,o.kt)("inlineCode",{parentName:"a"},"postprocess-progress")))),(0,o.kt)("h2",{id:"jsx"},"JSX"),(0,o.kt)("p",null,"Since Uppy uses Preact and not React, the default Babel configuration for JSX\nelements does not work. You have to import the Preact ",(0,o.kt)("inlineCode",{parentName:"p"},"h")," function and tell\nBabel to use it by adding a ",(0,o.kt)("inlineCode",{parentName:"p"},"/** @jsx h */")," comment at the top of the file."),(0,o.kt)("p",null,"See the Preact\n",(0,o.kt)("a",{parentName:"p",href:"https://preactjs.com/guide/getting-started"},"Getting Started Guide")," for more on\nBabel and JSX."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"/** @jsx h */\nimport { UIPlugin } from '@uppy/core';\nimport { h } from 'preact';\n\nclass NumFiles extends UIPlugin {\n    render() {\n        const numFiles = Object.keys(this.uppy.state.files).length;\n\n        return <div>Number of files: {numFiles}</div>;\n    }\n}\n")),(0,o.kt)("h2",{id:"locales"},"Locales"),(0,o.kt)("p",null,"For any user facing language that you use while writing your Plugin, please\nprovide them as strings in the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultLocale")," property like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"this.defaultLocale = {\n    strings: {\n        youCanOnlyUploadFileTypes: 'You can only upload: %{types}',\n        youCanOnlyUploadX: {\n            0: 'You can only upload %{smart_count} file',\n            1: 'You can only upload %{smart_count} files',\n            2: 'You can only upload %{smart_count} files',\n        },\n    },\n};\n")),(0,o.kt)("p",null,"This allows them to be overridden by Locale Packs, or directly when users pass\n",(0,o.kt)("inlineCode",{parentName:"p"},"locale: { strings: youCanOnlyUploadFileTypes: 'Something else completely about %{types}'} }"),".\nFor this to work, it\u2019s also required that you call ",(0,o.kt)("inlineCode",{parentName:"p"},"this.i18nInit()")," in the\nplugin constructor."),(0,o.kt)("h2",{id:"example-of-a-custom-plugin"},"Example of a custom plugin"),(0,o.kt)("p",null,"Below is a full example of a\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/arturi/uppy-plugin-image-compressor"},"small plugin")," that\ncompresses images before uploading them. You can replace ",(0,o.kt)("inlineCode",{parentName:"p"},"compressorjs")," method\nwith any other work you need to do. This works especially well for async stuff,\nlike calling an external API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { UIPlugin } from '@uppy/core';\nimport Translator from '@uppy/utils/lib/Translator';\nimport Compressor from 'compressorjs/dist/compressor.esm.js';\n\nclass UppyImageCompressor extends UIPlugin {\n    constructor(uppy, opts) {\n        const defaultOptions = {\n            quality: 0.6,\n        };\n        super(uppy, { ...defaultOptions, ...opts });\n\n        this.id = this.opts.id || 'ImageCompressor';\n        this.type = 'modifier';\n\n        this.defaultLocale = {\n            strings: {\n                compressingImages: 'Compressing images...',\n            },\n        };\n\n        // we use those internally in `this.compress`, so they\n        // should not be overriden\n        delete this.opts.success;\n        delete this.opts.error;\n\n        this.i18nInit();\n    }\n\n    compress(blob) {\n        return new Promise(\n            (resolve, reject) =>\n                new Compressor(blob, {\n                    ...this.opts,\n                    success(result) {\n                        return resolve(result);\n                    },\n                    error(err) {\n                        return reject(err);\n                    },\n                }),\n        );\n    }\n\n    prepareUpload = (fileIDs) => {\n        const promises = fileIDs.map((fileID) => {\n            const file = this.uppy.getFile(fileID);\n            this.uppy.emit('preprocess-progress', file, {\n                mode: 'indeterminate',\n                message: this.i18n('compressingImages'),\n            });\n\n            if (!file.type.startsWith('image/')) {\n                return;\n            }\n\n            return this.compress(file.data)\n                .then((compressedBlob) => {\n                    this.uppy.log(\n                        `[Image Compressor] Image ${file.id} size before/after compression: ${file.data.size} / ${compressedBlob.size}`,\n                    );\n                    this.uppy.setFileState(fileID, { data: compressedBlob });\n                })\n                .catch((err) => {\n                    this.uppy.log(\n                        `[Image Compressor] Failed to compress ${file.id}:`,\n                        'warning',\n                    );\n                    this.uppy.log(err, 'warning');\n                });\n        });\n\n        const emitPreprocessCompleteForAll = () => {\n            fileIDs.forEach((fileID) => {\n                const file = this.uppy.getFile(fileID);\n                this.uppy.emit('preprocess-complete', file);\n            });\n        };\n\n        // Why emit `preprocess-complete` for all files at once, instead of\n        // above when each is processed?\n        // Because it leads to StatusBar showing a weird \u201cupload 6 files\u201d button,\n        // while waiting for all the files to complete pre-processing.\n        return Promise.all(promises).then(emitPreprocessCompleteForAll);\n    };\n\n    install() {\n        this.uppy.addPreProcessor(this.prepareUpload);\n    }\n\n    uninstall() {\n        this.uppy.removePreProcessor(this.prepareUpload);\n    }\n}\n\nexport default UppyImageCompressor;\n")))}u.isMDXComponent=!0}}]);