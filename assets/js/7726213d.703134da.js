"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),c=i,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(3117),i=(n(7294),n(3905));const r={title:"Changelog",id:"changelog"},l=void 0,o={unversionedId:"around_tidal/changelog",id:"around_tidal/changelog",title:"Changelog",description:"Tidal 1.0.0",source:"@site/docs/around_tidal/changelog.md",sourceDirName:"around_tidal",slug:"/around_tidal/changelog",permalink:"/docs/around_tidal/changelog",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/around_tidal/changelog.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1671833162,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{title:"Changelog",id:"changelog"},sidebar:"docs",previous:{title:"Tidal History",permalink:"/docs/around_tidal/tidal_history"}},s={},d=[{value:"Tidal 1.0.0",id:"tidal-100",level:2},{value:"Name changes, new functions, changed behaviour",id:"name-changes-new-functions-changed-behaviour",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Other new features",id:"other-new-features",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Tempo and scheduling changes",id:"tempo-and-scheduling-changes",level:3},{value:"Pattern structure",id:"pattern-structure",level:3},{value:"Regressions",id:"regressions",level:3},{value:"Internal and dev changes",id:"internal-and-dev-changes",level:3}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tidal-100"},"Tidal 1.0.0"),(0,i.kt)("p",null,"Under the hood, ",(0,i.kt)("strong",{parentName:"p"},"Tidal")," ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0.0")," is a major rewrite. If you're used to previous versions, this will mostly be evident in terms of new functionality. But there are some breaking changes too. Below is a growing list of changes and additions. I, Yaxu, have tried to thank people who have done/contributed towards things, apologies to those I've missed. Things not marked are probably entirely my fault."),(0,i.kt)("h3",{id:"name-changes-new-functions-changed-behaviour"},"Name changes, new functions, changed behaviour"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The old ",(0,i.kt)("inlineCode",{parentName:"li"},"scale")," has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"range")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scale")," is now used to specify musical scale"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"protate")," and friends has been replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"rot")),(0,i.kt)("li",{parentName:"ul"},"New function ",(0,i.kt)("inlineCode",{parentName:"li"},"fix")," for manipulating control patterns with matching control values"),(0,i.kt)("li",{parentName:"ul"},"New function ",(0,i.kt)("inlineCode",{parentName:"li"},"mono")," for making a pattern monophonic (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"bgold"),")"),(0,i.kt)("li",{parentName:"ul"},"New function ",(0,i.kt)("inlineCode",{parentName:"li"},"smooth")," for turning a discrete/digital numerical pattern into a continuous/analog one, by interpolating between the values (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"bgold"),")"),(0,i.kt)("li",{parentName:"ul"},"Chord names can now be put into numerical patterns, e.g. n \"c'maj e'min\". The old ",(0,i.kt)("inlineCode",{parentName:"li"},"chordP")," has been removed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"discretise")," is now known as ",(0,i.kt)("inlineCode",{parentName:"li"},"segment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"e")," is now known as ",(0,i.kt)("inlineCode",{parentName:"li"},"euclid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"breakOut")," is now known as ",(0,i.kt)("inlineCode",{parentName:"li"},"arpeggiate")),(0,i.kt)("li",{parentName:"ul"},"Functions generally standardised into being 'slow', e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"scan")," n will work over n cycles, not squeeze the whole buildup into a single cycle."),(0,i.kt)("li",{parentName:"ul"},"Functions that only worked on one numerical type generalised to work on any where it makes sense, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"rand")," can now be used as a pattern of time/rational values as well as double/floating point values (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"msp"),")"),(0,i.kt)("li",{parentName:"ul"},"select functions for choosing between patterns with a pattern of floats"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"wchoose")," weights no longer have to add up to ",(0,i.kt)("inlineCode",{parentName:"li"},"1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"weave'")," is now known as ",(0,i.kt)("inlineCode",{parentName:"li"},"weaveWith")),(0,i.kt)("li",{parentName:"ul"},"New ",(0,i.kt)("inlineCode",{parentName:"li"},"arp")," function for arpeggiation"),(0,i.kt)("li",{parentName:"ul"},"Easy ways to send Custom OSC to systems other than ",(0,i.kt)("strong",{parentName:"li"},"SuperDirt")),(0,i.kt)("li",{parentName:"ul"},"The meaning of ",(0,i.kt)("inlineCode",{parentName:"li"},"stut")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"stutWith")," parameters have changed to match each other.")),(0,i.kt)("h3",{id:"interaction"},"Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"solo")," now does a 'true' solo. I.e. there is now also ",(0,i.kt)("inlineCode",{parentName:"li"},"unsolo"),"."),(0,i.kt)("li",{parentName:"ul"},"You can now run a cycle immediately, once, with ",(0,i.kt)("inlineCode",{parentName:"li"},"once")),(0,i.kt)("li",{parentName:"ul"},"Experimental transition interpolate for merging between new and old values")),(0,i.kt)("h3",{id:"other-new-features"},"Other new features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tidal now takes input from OSC and MIDI - see ",(0,i.kt)("inlineCode",{parentName:"li"},"Configuration > I/O"),". This means you can send numbers and strings into ",(0,i.kt)("strong",{parentName:"li"},"Tidal")," to be used as control values, function parameters, or parsed sequences"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"'Show'")," instance for patterns (and control patterns) is now more readable"),(0,i.kt)("li",{parentName:"ul"},"If you treat a control pattern as a number, you'll be manipulating the n control, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},'(s "bd" # n "1 2") + 3 '),"will add ",(0,i.kt)("inlineCode",{parentName:"li"},"3")," to both ",(0,i.kt)("inlineCode",{parentName:"li"},"1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,i.kt)("li",{parentName:"ul"},"More parameters are patternable, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"sometimesBy")),(0,i.kt)("li",{parentName:"ul"},"The parser can now produce binary (boolean) patterns where euclidean rhythms produce ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," values not, true and silence. Useful for use with e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"sew")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"struct")),(0,i.kt)("li",{parentName:"ul"},"Configuration is done via a boot script and not environment variables")),(0,i.kt)("h3",{id:"documentation"},"Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documentation has moved to a wiki (thanks to many, including ",(0,i.kt)("inlineCode",{parentName:"li"},"kindohm"),")"),(0,i.kt)("li",{parentName:"ul"},"What we used to call a 'param pattern' is now called a 'control pattern'")),(0,i.kt)("h3",{id:"tempo-and-scheduling-changes"},"Tempo and scheduling changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setcps")," is now used to set a fixed tempo"),(0,i.kt)("li",{parentName:"ul"},"Tempo can now be patterned, using ",(0,i.kt)("inlineCode",{parentName:"li"},"cps")," as a control pattern")),(0,i.kt)("h3",{id:"pattern-structure"},"Pattern structure"),(0,i.kt)("p",null,"The way patterns are combined has been reworked:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The old 'structure comes from the left' adage no longer applies - you can now control where structure comes from"),(0,i.kt)("li",{parentName:"ul"},"The behaviour of ",(0,i.kt)("inlineCode",{parentName:"li"},"|+|"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"|*|")," has changed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"#")," works the same as before, but is now an alias for ",(0,i.kt)("inlineCode",{parentName:"li"},">|"),", rather than ",(0,i.kt)("inlineCode",{parentName:"li"},"|=|")," (which no longer exists).")),(0,i.kt)("h3",{id:"regressions"},"Regressions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tidal-midi")," is not currently working (but midi is still working great via ",(0,i.kt)("strong",{parentName:"li"},"SuperDirt"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tidalink")," is not currently working (should be fixed soon)"),(0,i.kt)("li",{parentName:"ul"},"classic ",(0,i.kt)("strong",{parentName:"li"},"Dirt")," is not currently supported (should also be fixed soon)")),(0,i.kt)("h3",{id:"internal-and-dev-changes"},"Internal and dev changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Switched to ",(0,i.kt)("inlineCode",{parentName:"li"},"system.random")," for random number generation (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"d0kt0r0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MiniTidal")," moved into core tidal repo (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"d0kt0r0"),")"),(0,i.kt)("li",{parentName:"ul"},"Started on a unit test suite (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"vivid-synth"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"msp"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"nini-faroux")," and co)"),(0,i.kt)("li",{parentName:"ul"},"More lawful Applicative and Monad instances for Pattern"),(0,i.kt)("li",{parentName:"ul"},"Definition of ",(0,i.kt)("inlineCode",{parentName:"li"},"<*")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"*>"),", that work like ",(0,i.kt)("inlineCode",{parentName:"li"},"<*> "),"but using the structure on the left or right"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<*>")," now uses structure on both sides"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"innerJoin")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"outerJoin")," for 'flattening' patterns of patterns - works like join but taking structure from the inner or outer pattern respectively."),(0,i.kt)("li",{parentName:"ul"},"Patterns are now flagged as either analog or digital"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Tidal")," is generally a single process, multithreaded thing, rather than multi-process as before"),(0,i.kt)("li",{parentName:"ul"},"The websocket tempo protocol has been replaced with an OSC based one"),(0,i.kt)("li",{parentName:"ul"},"The modules have been extensively reorganised, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"Strategies")," no longer exists, but ",(0,i.kt)("inlineCode",{parentName:"li"},"Pattern"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Core"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Control")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"UI")," do."),(0,i.kt)("li",{parentName:"ul"},"Compiles without warnings"),(0,i.kt)("li",{parentName:"ul"},"Better stack support (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"tonyday567"),")"),(0,i.kt)("li",{parentName:"ul"},"Fleshed out datatype structure (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"tonyday567"),")"),(0,i.kt)("li",{parentName:"ul"},"Tidyier travis builds with more haskell versions tested (thanks ",(0,i.kt)("inlineCode",{parentName:"li"},"tonyday567"),")"),(0,i.kt)("li",{parentName:"ul"},"New function ",(0,i.kt)("inlineCode",{parentName:"li"},"inv")," for inverting a binary (boolean) pattern"),(0,i.kt)("li",{parentName:"ul"},"Calculation is done based on ",(0,i.kt)("inlineCode",{parentName:"li"},"hZ")," rather than calculations/cycle. By default it tidal runs at 20 calculations per second.")))}p.isMDXComponent=!0}}]);