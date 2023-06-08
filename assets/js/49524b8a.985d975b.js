"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7350:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const o={title:"Custom Samples",id:"audiosamples",permalink:"wiki/MIDI/",layout:"wiki"},i=void 0,s={unversionedId:"configuration/AudioSamples/audiosamples",id:"configuration/AudioSamples/audiosamples",title:"Custom Samples",description:"Adding and using your own custom samples in Tidal Cycles is relatively easy. You don't actually add samples, but instead add them into SuperCollider and the SuperDirt quark. To do this, you will need to customize your SuperDirt startup code.",source:"@site/docs/configuration/AudioSamples/samples.md",sourceDirName:"configuration/AudioSamples",slug:"/configuration/AudioSamples/audiosamples",permalink:"/docs/configuration/AudioSamples/audiosamples",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/configuration/AudioSamples/samples.md",tags:[],version:"current",lastUpdatedAt:1686250691,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{title:"Custom Samples",id:"audiosamples",permalink:"wiki/MIDI/",layout:"wiki"},sidebar:"docs",previous:{title:"Control Voltage/CV",permalink:"/docs/configuration/MIDIOSC/control-voltage"},next:{title:"Default Library",permalink:"/docs/configuration/AudioSamples/default_library"}},l={},p=[{value:"SuperDirt",id:"superdirt",level:2},{value:"Windows Paths",id:"windows-paths",level:3},{value:"Specifying Multiple Folders",id:"specifying-multiple-folders",level:3},{value:"Folder Structure",id:"folder-structure",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Adding and using your own custom samples in ",(0,a.kt)("strong",{parentName:"p"},"Tidal Cycles")," is relatively easy. You don't actually add samples, but instead add them into ",(0,a.kt)("strong",{parentName:"p"},"SuperCollider")," and the ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," quark. To do this, you will need to customize your ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," startup code."),(0,a.kt)("h2",{id:"superdirt"},"SuperDirt"),(0,a.kt)("p",null,"When you open ",(0,a.kt)("strong",{parentName:"p"},"SuperCollider"),", instead of the normal ",(0,a.kt)("inlineCode",{parentName:"p"},"SuperDirt.start"),"\ncode, you will need to write a longer script that tells ",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," where\nto find your samples. The startup script will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'(\ns.waitForBoot {\n    ~dirt = SuperDirt(2, s); // two output channels\n    ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*"); // specify sample folder to load\n    s.sync; // wait for supercollider to finish booting up\n    ~dirt.start(57120, 0 ! 12); // start superdirt, listening on port 57120, create twelve orbits each sending audio to channel 0\n};\n);\n')),(0,a.kt)("p",null,"To run the above code, place the cursor anywhere inside that code block,\nthen press ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl+Enter")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"Command+Enter")," on MacOS) to evaluate the\nwhole block."),(0,a.kt)("p",null,"The above code will boot the SuperCollider server, then start up\n",(0,a.kt)("strong",{parentName:"p"},"SuperDirt")," with some samples located at ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/myUserName/Dirt/samples"),". You can find a more complete ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/musikinformatik/SuperDirt/blob/develop/superdirt_startup.scd"},"startup file")," in the SuperDirt code repository."),(0,a.kt)("h3",{id:"windows-paths"},"Windows Paths"),(0,a.kt)("p",null,"If you are running Windows, you will need to escape the backslash characters in Windows paths:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'~dirt.loadSoundFiles("c:\\\\Users\\\\myUserName\\\\Dirt\\\\samples\\\\*")\n')),(0,a.kt)("h3",{id:"specifying-multiple-folders"},"Specifying Multiple Folders"),(0,a.kt)("p",null,"If you have samples located in many folders, you can import them all:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'(\ns.waitForBoot {\n    ~dirt = SuperDirt(2, s); // two output channels\n\n        \x3c!--T:20--\x3e\n// load samples from multiple folders:\n    ~dirt.loadSoundFiles("/Users/myUserName/Dirt/samples/*"); \n    ~dirt.loadSoundFiles("/Users/myUserName/sounds/*"); \n    ~dirt.loadSoundFiles("/Users/myUserName/recordings/chaska-sessions/*");\n    ~dirt.loadSoundFiles("/Users/myUserName/recordings/super-duper-experiments/*"); \n\n    \x3c!--T:21--\x3e\ns.sync; // wait for supercollider to finish booting up\n    ~dirt.start(57120, [0, 0]); // start superdirt, listening on port 57120, create two orbits each sending audio to channel 0\n};\n);\n')),(0,a.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("p",null,"In the above example, we have imported a folder at the path ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/myUserName/Dirt/samples"),". In order for SuperDirt to recognize the sound names that Tidal sends, the ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/myUserName/Dirt/samples")," folder will need to have sub-folders for each sound name, and each sound name folder will need to have sample files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Users/\n|--\xa0myUserName/\n\xa0\xa0\xa0\xa0|--\xa0Dirt/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|--\xa0samples/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|--\xa0myBass/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0bass1.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0bass2.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0bass3.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|--\xa0hits/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0hit1.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0hit2.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0hit3.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|--\xa0field/\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0bridge.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0mountains1.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0mountains2.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0plains.wav\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0\xa0\xa0|--\xa0river.wav\n")),(0,a.kt)("h1",{id:"tidal-code"},"Tidal Code"),(0,a.kt)("p",null,"Given the folder structure above, you can now use the ",(0,a.kt)("inlineCode",{parentName:"p"},"myBass"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hits"),",\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"field")," sounds in your Tidal patterns:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ s "mybass hits*4" # n (slow 2 $ run 3)\nd2 $ n "<0 2 1>" # s "field" # cut 1\n')))}d.isMDXComponent=!0}}]);