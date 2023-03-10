"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=a,h=c["".concat(s,".").concat(k)]||c[k]||d[k]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const l={title:"Controller Input",permalink:"wiki/Controller_Input/",layout:"wiki",tags:["Reference","Tidal-1+"]},o=void 0,i={unversionedId:"working-with-patterns/Controller_Input",id:"working-with-patterns/Controller_Input",title:"Controller Input",description:"Tidal 1.0.0 now has support for external input, using the OSC protocol.",source:"@site/docs/working-with-patterns/Controller_Input.md",sourceDirName:"working-with-patterns",slug:"/working-with-patterns/Controller_Input",permalink:"/docs/working-with-patterns/Controller_Input",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/working-with-patterns/Controller_Input.md",tags:[{label:"Reference",permalink:"/docs/tags/reference"},{label:"Tidal-1+",permalink:"/docs/tags/tidal-1"}],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1678429629,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"Controller Input",permalink:"wiki/Controller_Input/",layout:"wiki",tags:["Reference","Tidal-1+"]}},s={},p=[{value:"Alternative: pure-data",id:"alternative-pure-data",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("languages",null)," ",(0,a.kt)("translate",null,(0,a.kt)("p",null,"Tidal 1.0.0 now has support for external input, using the OSC protocol.\nHere's a quick guide to getting it going, including using a simple\n'bridge' for getting MIDI input working."),(0,a.kt)("h1",{id:"open-sound-control"},"Open Sound Control"),(0,a.kt)("p",null,"If you just want to get MIDI input into tidal, you can skip to the ",(0,a.kt)("a",{parentName:"p",href:"/wiki/Controller_Input#MIDI",title:"wikilink"},"next\nsection"),"."),(0,a.kt)("p",null,"With version 1.0.0 ",(0,a.kt)("a",{parentName:"p",href:"/wiki/Installation",title:"wikilink"},"installed")," and\n",(0,a.kt)("a",{parentName:"p",href:"/wiki/Configuration",title:"wikilink"},"configured"),", then by default Tidal will\nautomatically listen for external control messages over the OSC (Open\nSound Control) network protocol, on localhost (127.0.0.1), port 6010."),(0,a.kt)("p",null,"This is configurable - if you prefer it to listen to for example all\nnetwork interfaces, and port 6060 you can change your configuration to\nthis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'tidal <- startTidal superdirtTarget (defaultConfig {cCtrlAddr = "0.0.0.0", cCtrlPort = 6060})\n')),(0,a.kt)("p",null,"If you prefer to switch off listening to controls all together, use this\ninstead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"tidal <- startTidal superdirtTarget (defaultConfig {cCtrlListen = False})\n")),(0,a.kt)("p",null,"The OSC message that Tidal expects has the path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/ctrl\n")),(0,a.kt)("p",null,", and two values - the key and the value. The key can either be a string\nor an integer (tidal will convert an integer to a string for you). The\nvalue can be a string, integer or float. For example the OSC message"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/ctrl sf hello 0.4\n")),(0,a.kt)("p",null,", for a message to set the"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hello\n")),(0,a.kt)("p",null,"control to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"0.4\n")),(0,a.kt)("p",null,".In this example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sf\n")),(0,a.kt)("p",null,"is the OSC typetag. It specifies that the first value is a (s)tring and\nthe second value is a(f)loat see ",(0,a.kt)("a",{parentName:"p",href:"http://opensoundcontrol.org/spec-1_0"},"OSC\nspecs")),(0,a.kt)("p",null,"You could then use this control in a pattern like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd" # speed (cF 1 "hello")\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"cF\n")),(0,a.kt)("p",null,"is what you use for floating point controls. The second parameter"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1\n")),(0,a.kt)("p",null,"is the default value, for when tidal hasn't received that control yet.\nThere is also"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"cS\n")),(0,a.kt)("p",null,"for strings and"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"cI\n")),(0,a.kt)("p",null,"for integers. For time values (for using e.g. as the first parameter of"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"fast\n")),(0,a.kt)("p",null,"/"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"slow\n")),(0,a.kt)("p",null,"), use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"cT\n")),(0,a.kt)("p",null,". For ratios add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"cR\n")),(0,a.kt)("h1",{id:"midi"},"MIDI"),(0,a.kt)("p",null,"To use MIDI, you don't have to worry about too much of the above, but\nfor now you do have to run something to convert MIDI into OSC. Here's\nhow to do that using SuperCollider. First, with Tidal (e.g. inside atom)\nand SuperDirt already running, run the below code block in\nsupercollider:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Evaluate the block below to start the mapping MIDI -> OSC.\n(\nvar on, off, cc;\nvar osc;\n\n\x3c!--T:16--\x3e\nosc = NetAddr.new("127.0.0.1", 6010);\n\n\x3c!--T:17--\x3e\nMIDIClient.init;\nMIDIIn.connectAll;\n\n\x3c!--T:18--\x3e\non = MIDIFunc.noteOn({ |val, num, chan, src|\n    osc.sendMsg("/ctrl", num.asString, val/127);\n});\n\n\x3c!--T:19--\x3e\noff = MIDIFunc.noteOff({ |val, num, chan, src|\n    osc.sendMsg("/ctrl", num.asString, 0);\n});\n\n\x3c!--T:20--\x3e\ncc = MIDIFunc.cc({ |val, num, chan, src|\n    osc.sendMsg("/ctrl", num.asString, val/127);\n});\n\n\x3c!--T:21--\x3e\nif (~stopMidiToOsc != nil, {\n    ~stopMidiToOsc.value;\n});\n\n\x3c!--T:22--\x3e\n~stopMidiToOsc = {\n    on.free;\n    off.free;\n    cc.free;\n};\n)\n\n\x3c!--T:23--\x3e\n// Evaluate the line below to stop it.\n~stopMidiToOsc.value;\n')),(0,a.kt)("p",null,"You should then be able to run a pattern such as the following, that\nuses CC value 12:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'d1 $ sound "bd" # speed (cF 1 "12")\n')),(0,a.kt)("p",null,"If you want to use MIDI in a pattern forming statement, you may find it\nhelpful to ",(0,a.kt)("a",{parentName:"p",href:"segment",title:"wikilink"},"segment")," the input first, as the raw\npattern coming from your MIDI device will be at very high resolution.\nThis example takes only one value per cycle & remaps the value with the"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"range\n")),(0,a.kt)("p",null,"function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'d1 $ sound "amencutup" + n (run (segment 1 $ range 1 16 $ cF 0 "32" ))\n')),(0,a.kt)("h2",{id:"alternative-pure-data"},"Alternative: pure-data"),(0,a.kt)("p",null,"The above SuperCollider instructions are most convenient if you're using\nSuperDirt, but as an alternative you can use puredata to convert midi to\nOSC. You can get puredata from ",(0,a.kt)("a",{parentName:"p",href:"https://puredata.info/"},"https://puredata.info/")," (the 'vanilla'\nversion is recommended)."),(0,a.kt)("p",null,"Then download this file:\n",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/tidalcycles/Tidal/main/pd/midi-osc-bridge.pd"},"https://raw.githubusercontent.com/tidalcycles/Tidal/main/pd/midi-osc-bridge.pd")),(0,a.kt)("p",null,"Then if you start tidal, open that file in puredata, and configure your\nMIDI device in puredata, things should start working.")))}c.isMDXComponent=!0}}]);