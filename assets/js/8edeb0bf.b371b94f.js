"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(3117),r=(n(7294),n(3905));const i={title:"VS Code",permalink:"wiki/VS_Code/",layout:"wiki"},a=void 0,l={unversionedId:"getting-started/editor/VS_Code",id:"getting-started/editor/VS_Code",title:"VS Code",description:"-----",source:"@site/docs/getting-started/editor/VS_Code.md",sourceDirName:"getting-started/editor",slug:"/getting-started/editor/VS_Code",permalink:"/docs/getting-started/editor/VS_Code",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/getting-started/editor/VS_Code.md",tags:[],version:"current",lastUpdatedAt:1699473181,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{title:"VS Code",permalink:"wiki/VS_Code/",layout:"wiki"},sidebar:"docs",previous:{title:"Emacs",permalink:"/docs/getting-started/editor/Emacs"},next:{title:"Sublime Text",permalink:"/docs/getting-started/editor/Sublime_Text"}},s={},c=[{value:"Install VSCode",id:"install-vscode",level:2},{value:"Tidal Cycles Extension",id:"tidal-cycles-extension",level:2},{value:"Special features",id:"special-features",level:3},{value:"Configuration",id:"configuration",level:3}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"vscodeicon",src:n(6949).Z,width:"255",height:"255"})),(0,r.kt)("p",null,"VSCode is a general purpose text/code editor published by Microsoft, with some open-source components. Tidal Cycles code can be written in the ",(0,r.kt)("strong",{parentName:"p"},"VS Code")," editor through an extension. VSCode is currently the most popular code editor on the market based on some metrics. It is highly configurable, and can run on every major OS. It is highly configurable, with thousands of plugins to support new programming languages, frameworks, edition modes, etc..."),(0,r.kt)("h2",{id:"install-vscode"},"Install VSCode"),(0,r.kt)("p",null,"Installing VSCode on your computer should be straigthforward. Head to the ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"official website")," and download the version corresponding to your operating system. Done. "),(0,r.kt)("h2",{id:"tidal-cycles-extension"},"Tidal Cycles Extension"),(0,r.kt)("p",null,"There is ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=tidalcycles.vscode-tidalcycles"},"Tidal Cycles Extension")," for ",(0,r.kt)("strong",{parentName:"p"},"VSCode"),". You can also check out the main ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kindohm/vscode-tidalcycles"},"repository")," if you want to report an issue or contribute to the development of this extension."),(0,r.kt)("p",null,"The installation process is simple:"),(0,r.kt)("p",null,"1) open VSCode, click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Extensions")," panel on the left side."),(0,r.kt)("p",null,"2) search for ",(0,r.kt)("inlineCode",{parentName:"p"},"tidal")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"install"),"."),(0,r.kt)("h3",{id:"special-features"},"Special features"),(0,r.kt)("p",null,"The VSCode Tidal Cycles extension features something that is not present in other text editor extensions: an audio file browser. Click on the Tidal Cycles logo that appeared on the left pane right after the install to see all the samples currently available for Tidal and preview/insert them directly in your code."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Be sure to check out the plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," and configuration pane to learn more about customization/configuration."))}p.isMDXComponent=!0},6949:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscodeicon-42dc264fde2adb74cc197fe6d02b183c.png"}}]);