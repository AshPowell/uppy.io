"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7435],{828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var a=n(7462),i=(n(7294),n(3905)),o=n(4866),r=n(5162),l=n(3068);const s={sidebar_position:1},p="Webcam",d={unversionedId:"sources/webcam",id:"sources/webcam",title:"Webcam",description:"The @uppy/webcam plugin lets you take photos and record videos with a built-in",source:"@site/docs/sources/webcam.mdx",sourceDirName:"sources",slug:"/sources/webcam",permalink:"/uppy.io/pr-preview/pr-70/docs/sources/webcam",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/webcam.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Progress bar",permalink:"/uppy.io/pr-preview/pr-70/docs/user-interfaces/elements/progress-bar"},next:{title:"Screen capture",permalink:"/uppy.io/pr-preview/pr-70/docs/sources/screen-capture"}},c={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>countdown</code>",id:"countdown",level:4},{value:"<code>onBeforeSnapshot</code>",id:"onbeforesnapshot",level:4},{value:"<code>modes</code>",id:"modes",level:4},{value:"<code>mirror</code>",id:"mirror",level:4},{value:"<code>videoConstraints</code>",id:"videoconstraints",level:4},{value:"<code>showVideoSourceDropdown</code>",id:"showvideosourcedropdown",level:4},{value:"<code>showRecordingLength</code>",id:"showrecordinglength",level:4},{value:"<code>preferredVideoMimeType</code>",id:"preferredvideomimetype",level:4},{value:"<code>preferredImageMimeType</code>",id:"preferredimagemimetype",level:4},{value:"<code>mobileNativeCamera</code>",id:"mobilenativecamera",level:4},{value:"<code>locale</code>",id:"locale",level:4}],u={toc:m},h="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webcam"},"Webcam"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@uppy/webcam")," plugin lets you take photos and record videos with a built-in\ncamera on desktop and mobile devices."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,i.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,i.kt)("p",null,"When you want your users to able to use their camera. This plugin is published\nseparately but made specifically for the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard"),". You can technically use it without\nit, but it\u2019s not officially supported."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/webcam\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/webcam\n"))),(0,i.kt)(r.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Dashboard, Webcam } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Dashboard, { inline: true, target: 'body' })\n        uppy.use(Webcam, { target: Uppy.Dashboard })\n      "))),(0,i.kt)("h2",{id:"use"},"Use"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To use the Webcam plugin in Chrome,\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2015/10/chrome-47-webrtc#public_service_announcements"},"your site must be served over https"),".\nThis restriction does not apply on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),", so you don\u2019t have to jump\nthrough many hoops during development.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,7,11} showLineNumbers","{3,7,11}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Webcam from '@uppy/webcam';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\nimport '@uppy/webcam/dist/style.min.css';\n\nnew Uppy()\n    .use(Dashboard, { inline: true, target: 'body' })\n    .use(Webcam, { target: Dashboard });\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")),(0,i.kt)("p",null,"A unique identifier for this plugin (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"'Webcam'"),")."),(0,i.kt)("h4",{id:"target"},(0,i.kt)("inlineCode",{parentName:"h4"},"target")),(0,i.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("h4",{id:"countdown"},(0,i.kt)("inlineCode",{parentName:"h4"},"countdown")),(0,i.kt)("p",null,"When taking a picture: the amount of seconds to wait before actually taking a\nsnapshot (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("p",null,"If set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," or 0, the snapshot is taken right away. This also shows a\n",(0,i.kt)("inlineCode",{parentName:"p"},"Smile!")," message through the ",(0,i.kt)("a",{parentName:"p",href:"/docs/informer"},"Informer")," before the picture is\ntaken."),(0,i.kt)("h4",{id:"onbeforesnapshot"},(0,i.kt)("inlineCode",{parentName:"h4"},"onBeforeSnapshot")),(0,i.kt)("p",null,"A hook function to call before a snapshot is taken (",(0,i.kt)("inlineCode",{parentName:"p"},"Function"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.resolve"),")."),(0,i.kt)("p",null,"The Webcam plugin will wait for the returned Promise to resolve before taking\nthe snapshot. This can be used to carry out variations on the ",(0,i.kt)("inlineCode",{parentName:"p"},"countdown")," option\nfor example."),(0,i.kt)("h4",{id:"modes"},(0,i.kt)("inlineCode",{parentName:"h4"},"modes")),(0,i.kt)("p",null,"The types of recording modes to allow (",(0,i.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"video-audio")," - Record a video file, capturing both audio and video."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"video-only")," - Record a video file with the webcam, but don\u2019t record audio."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"audio-only")," - Record an audio file with the user\u2019s microphone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"picture")," - Take a picture with the webcam.")),(0,i.kt)("p",null,"By default, all modes are allowed, and the Webcam plugin will show controls for\nrecording video as well as taking pictures."),(0,i.kt)("h4",{id:"mirror"},(0,i.kt)("inlineCode",{parentName:"h4"},"mirror")),(0,i.kt)("p",null,"Configures whether to mirror preview image from the camera (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default:\n",(0,i.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,i.kt)("p",null,"This option is useful when taking a selfie with a front camera: when you wave\nyour right hand, you will see your hand on the right on the preview screen, like\nin the mirror. But when you actually take a picture, it will not be mirrored.\nThis is how smartphone selfie cameras behave."),(0,i.kt)("h4",{id:"videoconstraints"},(0,i.kt)("inlineCode",{parentName:"h4"},"videoConstraints")),(0,i.kt)("p",null,"Configure the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#Properties_of_video_tracks"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaTrackConstraints"))," (",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,i.kt)("p",null,"You can specify acceptable ranges for the resolution of the video stream using\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/aspectRatio"},(0,i.kt)("inlineCode",{parentName:"a"},"aspectRatio")),", ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/width"},(0,i.kt)("inlineCode",{parentName:"a"},"width")),", and ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/height"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," properties. Each property\ntakes an object with ",(0,i.kt)("inlineCode",{parentName:"p"},"{ min, ideal, max }")," properties. For example, use\n",(0,i.kt)("inlineCode",{parentName:"p"},"width: { min: 720, max: 1920, ideal: 1920 }")," to allow any width between 720 and\n1920 pixels wide, while preferring the highest resolution."),(0,i.kt)("p",null,"Devices sometimes have several cameras, front and back, for example.\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode"},(0,i.kt)("inlineCode",{parentName:"a"},"facingMode"))," lets you specify which should be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user"),": The video source is facing toward the user; this includes, for\nexample, the front-facing camera on a smartphone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"environment"),": The video source is facing away from the user, thereby viewing\ntheir environment. This is the back camera on a smartphone."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"left"),": The video source is facing toward the user but to their left, such as\na camera aimed toward the user but over their left shoulder."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"right"),": The video source is facing toward the user but to their right, such\nas a camera aimed toward the user but over their right shoulder.")),(0,i.kt)("p",null,"For a full list of available properties, check out MDN documentation for\n",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints#Properties_of_video_tracks"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaTrackConstraints")),"."),(0,i.kt)("h4",{id:"showvideosourcedropdown"},(0,i.kt)("inlineCode",{parentName:"h4"},"showVideoSourceDropdown")),(0,i.kt)("p",null,"Configures whether to show a dropdown which enables to choose the video device\nto use (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("p",null,"This option will have priority over ",(0,i.kt)("inlineCode",{parentName:"p"},"facingMode")," if enabled."),(0,i.kt)("h4",{id:"showrecordinglength"},(0,i.kt)("inlineCode",{parentName:"h4"},"showRecordingLength")),(0,i.kt)("p",null,"Configures whether to show the length of the recording while the recording is in\nprogress (",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,i.kt)("h4",{id:"preferredvideomimetype"},(0,i.kt)("inlineCode",{parentName:"h4"},"preferredVideoMimeType")),(0,i.kt)("p",null,"Set the preferred mime type for video recordings, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"'video/webm'"),"\n(",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,i.kt)("p",null,"If the browser supports the given mime type, the video will be recorded in this\nformat. If the browser does not support it, it will use the browser default. If\nno preferred video mime type is given, the Webcam plugin will prefer types\nlisted in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy/#restrictions"},(0,i.kt)("inlineCode",{parentName:"a"},"allowedFileTypes")," restriction"),", if\nany."),(0,i.kt)("h4",{id:"preferredimagemimetype"},(0,i.kt)("inlineCode",{parentName:"h4"},"preferredImageMimeType")),(0,i.kt)("p",null,"Set the preferred mime type for images, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"'image/png'")," (",(0,i.kt)("inlineCode",{parentName:"p"},"string"),",\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"image/jpeg"),")."),(0,i.kt)("p",null,"If the browser supports rendering the given mime type, the image will be stored\nin this format. Else ",(0,i.kt)("inlineCode",{parentName:"p"},"image/jpeg")," is used by default. If no preferred image mime\ntype is given, the Webcam plugin will prefer types listed in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/uppy/#restrictions"},(0,i.kt)("inlineCode",{parentName:"a"},"allowedFileTypes")," restriction"),", if any."),(0,i.kt)("h4",{id:"mobilenativecamera"},(0,i.kt)("inlineCode",{parentName:"h4"},"mobileNativeCamera")),(0,i.kt)("p",null,"Replaces Uppy\u2019s custom camera UI on mobile and tablet with the native device\ncamera (",(0,i.kt)("inlineCode",{parentName:"p"},"Function: boolean")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,i.kt)("inlineCode",{parentName:"p"},"isMobile()"),")."),(0,i.kt)("p",null,"This will show the \u201cTake Picture\u201d and / or \u201cRecord Video\u201d buttons, which ones\nshow depends on the ",(0,i.kt)("a",{parentName:"p",href:"#modes"},(0,i.kt)("inlineCode",{parentName:"a"},"modes"))," option."),(0,i.kt)("p",null,"You can set a boolean to forcefully enable / disable this feature, or a function\nwhich returns a boolean. By default we use the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/juliangruber/is-mobile"},(0,i.kt)("inlineCode",{parentName:"a"},"is-mobile"))," package."),(0,i.kt)("h4",{id:"locale"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameCamera: 'Camera',\n        noCameraTitle: 'Camera Not Available',\n        noCameraDescription:\n            'In order to take pictures or record video, please connect a camera device',\n        recordingStoppedMaxSize:\n            'Recording stopped because the file size is about to exceed the limit',\n        submitRecordedFile: 'Submit recorded file',\n        discardRecordedFile: 'Discard recorded file',\n        // Shown before a picture is taken when the `countdown` option is set.\n        smile: 'Smile!',\n        // Used as the label for the button that takes a picture.\n        // This is not visibly rendered but is picked up by screen readers.\n        takePicture: 'Take a picture',\n        // Used as the label for the button that starts a video recording.\n        // This is not visibly rendered but is picked up by screen readers.\n        startRecording: 'Begin video recording',\n        // Used as the label for the button that stops a video recording.\n        // This is not visibly rendered but is picked up by screen readers.\n        stopRecording: 'Stop video recording',\n        // Used as the label for the recording length counter. See the showRecordingLength option.\n        // This is not visibly rendered but is picked up by screen readers.\n        recordingLength: 'Recording length %{recording_length}',\n        // Title on the \u201callow access\u201d screen\n        allowAccessTitle: 'Please allow access to your camera',\n        // Description on the \u201callow access\u201d screen\n        allowAccessDescription:\n            'In order to take pictures or record video with your camera, please allow camera access for this site.',\n    },\n};\n")))}k.isMDXComponent=!0}}]);