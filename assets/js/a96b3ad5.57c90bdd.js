"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(u,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(3117),o=(n(7294),n(3905));const a={title:"Lazy loading",id:"lazy_loading"},i=void 0,l={unversionedId:"configuration/Audio Samples/lazy_loading",id:"configuration/Audio Samples/lazy_loading",title:"Lazy loading",description:"If you are working with large sample libraries or if you use an old computer, you can turn on lazy loading in SuperDirt as mentionned here.",source:"@site/docs/configuration/Audio Samples/lazy_loading.md",sourceDirName:"configuration/Audio Samples",slug:"/configuration/Audio Samples/lazy_loading",permalink:"/docs/configuration/Audio Samples/lazy_loading",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/Audio Samples/lazy_loading.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1671833162,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{title:"Lazy loading",id:"lazy_loading"},sidebar:"docs",previous:{title:"Default Library",permalink:"/docs/configuration/Audio Samples/default_library"},next:{title:"Where to find samples?",permalink:"/docs/configuration/Audio Samples/find_samples"}},u={},p=[{value:"What is lazy loading?",id:"what-is-lazy-loading",level:2},{value:"How to turn it on?",id:"how-to-turn-it-on",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you are working with large sample libraries or if you use an old computer, you can turn on ",(0,o.kt)("em",{parentName:"p"},"lazy loading")," in ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt")," as mentionned ",(0,o.kt)("a",{parentName:"p",href:"https://club.tidalcycles.org/t/superdirt-lazy-samples-loading/3148"},"here"),"."),(0,o.kt)("h2",{id:"what-is-lazy-loading"},"What is lazy loading?"),(0,o.kt)("p",null,"Instead of loading all your audio samples in the RAM as usual, ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt")," will load audio samples ",(0,o.kt)("strong",{parentName:"p"},"on request"),". This is better for people working with a limited amount of memory."),(0,o.kt)("h2",{id:"how-to-turn-it-on"},"How to turn it on?"),(0,o.kt)("p",null,"To enable it, update ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt")," to the last commit (go into the downloaded-quarks/SuperDirt folder then ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),") then, in the ",(0,o.kt)("strong",{parentName:"p"},"SuperDirt")," startup code, before any ",(0,o.kt)("inlineCode",{parentName:"p"},"~dirt.loadSoundFiles")," call, put a ",(0,o.kt)("inlineCode",{parentName:"p"},"~dirt.doNotReadYet = true;"),"."),(0,o.kt)("p",null,"That's it. It should work without problems."))}s.isMDXComponent=!0}}]);