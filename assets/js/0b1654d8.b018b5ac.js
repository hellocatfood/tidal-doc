"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4075],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(3117),r=(n(7294),n(3905));const l={title:"State Values",id:"state_values"},o=void 0,s={unversionedId:"reference/state_values",id:"reference/state_values",title:"State Values",description:"State values were recently introducted in Tidal version 1.7.2. For a more in-depth introduction, Alex McLean prepared a Google Slides document you can take a look at. It will explain why such a feature was needed and how it was implemented.",source:"@site/docs/reference/statevalues.md",sourceDirName:"reference",slug:"/reference/state_values",permalink:"/docs/reference/state_values",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/statevalues.md",tags:[],version:"current",lastUpdatedAt:1699473181,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{title:"State Values",id:"state_values"},sidebar:"reference",previous:{title:"Transitions",permalink:"/docs/reference/transitions"},next:{title:"Even more",permalink:"/docs/reference/even-more"}},i={},u=[{value:"The problem with state",id:"the-problem-with-state",level:2},{value:"Introduction to State Values",id:"introduction-to-state-values",level:2},{value:"Un-intuitive behavior",id:"un-intuitive-behavior",level:2},{value:"Syntax",id:"syntax",level:2},{value:"State Values with other controls",id:"state-values-with-other-controls",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"State values were recently introducted in ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.7.2"),". For a more ",(0,r.kt)("inlineCode",{parentName:"p"},"in-depth")," introduction, Alex McLean prepared a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1Ibrne2zp8qTt6ItXoBv2vEat45-5hPZaeR_hAVK-JEQ/edit#slide=id.p"},"Google Slides")," document you can take a look at. It will explain why such a feature was needed and how it was implemented."),(0,r.kt)("h2",{id:"the-problem-with-state"},"The problem with state"),(0,r.kt)("p",null,"What is the problem? It's tricky to get events to line up. Let's say that you wanted to pattern the structure independently from the notes (",(0,r.kt)("em",{parentName:"p"},"isorhythm"),"?):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ sound "alphabet(5,8)" # n "0 .. 4"\n')),(0,r.kt)("p",null,"There are ways to fix this (e.g. with the ",(0,r.kt)("inlineCode",{parentName:"p"},"fix")," function), but they are not too satisfying/easy.\nAnother aspect is when you want to apply a sequence of values to a parameter (like speed, freq, pan, amp, etc) but you don't want the sequence to be bound to the cycle. When you use the standard pattern syntax, Tidal may make adjustments to preserve the cycle structure. "),(0,r.kt)("h2",{id:"introduction-to-state-values"},"Introduction to State Values"),(0,r.kt)("p",null,'But now you can use a state value called "susan" to take values from a (circular) list:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "alphabet(5,8)" # nTake "susan" [0 .. 4]\n')),(0,r.kt)("p",null,"If you change it on-the-fly then you have to wait for the list to empty before it changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "alphabet(5,8)" # nTake "susan" [7]\n')),(0,r.kt)("p",null,"It can cope with infinite lists, but then the list will never empty:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "alphabet(5,8)" # nTake "susan" [0 ..]\n')),(0,r.kt)("p",null,"You can stop it and it will always start from where it left off:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "alphabet(5,8)" # nTake "susan" [0 ..]\n')),(0,r.kt)("p",null,"You can also just count without a list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "alphabet(5,8)" # nCount "harold"\n')),(0,r.kt)("p",null,"This is the same named state as used by ",(0,r.kt)("inlineCode",{parentName:"p"},"setF")," and for reading from OSC/MIDI. So you can reset the counter like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'setF "harold" 0\n')),(0,r.kt)("p",null,"Or have another pattern use it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d2 $ sound "newnotes*16" # n "^harold" # gain 1\n')),(0,r.kt)("p",null,"There is also ",(0,r.kt)("inlineCode",{parentName:"p"},"nCountTo")," to counting to a modulo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct "t(7,12,3)" $\n  sound "gretsch"\n  # nCountTo "rachael" 5\n')),(0,r.kt)("h2",{id:"un-intuitive-behavior"},"Un-intuitive behavior"),(0,r.kt)("p",null,"You can pattern that.. It starts behaving in ways you wouldn't expect from a ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," perspective though.. Because the counter runs independently from the pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ struct "t(7,12,3)" $\n  sound "gretsch"\n  # nCountTo "rachael" "<4 8>"\n')),(0,r.kt)("p",null,"Likewise, ",(0,r.kt)("inlineCode",{parentName:"p"},"rev")," won't reverse the counter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- notes go up\nd1 $ sound "newnotes(5,8)" # nCount "harold"\n')),(0,r.kt)("p",null,"The structure is reversed, but the notes still go up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ rev $ sound "newnotes(5,8)" # nCount "harold"\n')),(0,r.kt)("h2",{id:"syntax"},"Syntax"),(0,r.kt)("p",null,"Note the state values syntax: ",(0,r.kt)("inlineCode",{parentName:"p"},'# nTake "name" [list]'),". The name can be any string, and the list needs to have comma separated members in brackets without quotes - this is not pattern grouping in Mini-notation. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'-- This will fail:\nd3 $ n "0 2 3" #s "bass" #speedTake "[1 2 3 4 5]"\n-- This works:\nd3 $ n "0 2 3" #s "bass" #speedTake "sVal" [1, 2, 5, 4, 3, 4]\n')),(0,r.kt)("h2",{id:"state-values-with-other-controls"},"State Values with other controls"),(0,r.kt)("p",null,"You can add ",(0,r.kt)("inlineCode",{parentName:"p"},"Take")," to any control, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Count")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"CountTo")," to any numerical control.",(0,r.kt)("br",{parentName:"p"}),"\n","Below are some examples of state values used with other controls. Note how the control values repeat in their own sequence, independant from when the note cycle pattern. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d3 $ n "0 2 3" #s "bass" # speedTake "sVal" [1, 2, 3, 4, 5, 4, 2]\nd3 $ n "0 2 3" #s "bass" # accelerateTake "sVal3" [1, 2, 0.2, -0.8, 1.2]\nd3 $ n "0 2 3" #s "bass" # freqTake "sVal4" [200, 400, 700, 300, 220]\nd3 $ n "0 2 3" #s "bass" # ampTake "sVal5" [0.1, 0.8, 0.1, 0.7, 0.01]\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This feature is unstable, so these names might change.")))}c.isMDXComponent=!0}}]);