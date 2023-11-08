"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(3117),r=(n(7294),n(3905));const i={title:"Mini Notation",id:"mini_notation"},l=void 0,o={unversionedId:"reference/mini_notation",id:"reference/mini_notation",title:"Mini Notation",description:'Mini-notation is the name of a special notation used for writing patterns of various sort (notes, samples, parameters).  To use the mini-notation, use a string delimited by quotation marks: "". Internally, the mini-notation is actually parsed and understood as a shortcut for a function that you could otherwise write using longer function compositions.',source:"@site/docs/reference/mini_notation.md",sourceDirName:"reference",slug:"/reference/mini_notation",permalink:"/docs/reference/mini_notation",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/mini_notation.md",tags:[],version:"current",lastUpdatedAt:1699473181,formattedLastUpdatedAt:"Nov 8, 2023",frontMatter:{title:"Mini Notation",id:"mini_notation"},sidebar:"reference",previous:{title:"Pattern Structure",permalink:"/docs/reference/pattern_structure"},next:{title:"Oscillators",permalink:"/docs/reference/oscillators"}},p={},d=[{value:"Mini-notation table",id:"mini-notation-table",level:2},{value:"The mini-notation in depth",id:"the-mini-notation-in-depth",level:2},{value:"Rests",id:"rests",level:3},{value:"Pattern grouping",id:"pattern-grouping",level:3},{value:"Pattern grouping shorthand",id:"pattern-grouping-shorthand",level:3},{value:"Superposition",id:"superposition",level:3},{value:"Step repetition",id:"step-repetition",level:3},{value:"Step division",id:"step-division",level:3},{value:"Alternate",id:"alternate",level:3},{value:"Replicate",id:"replicate",level:3},{value:"Elongate",id:"elongate",level:3},{value:"Randomization",id:"randomization",level:3},{value:"Random choice",id:"random-choice",level:3},{value:"Sample Selection",id:"sample-selection",level:3},{value:"Euclidian Sequences",id:"euclidian-sequences",level:3},{value:"More examples",id:"more-examples",level:4},{value:"Polymetric Sequences",id:"polymetric-sequences",level:3},{value:"Polymetric Sequences with Subdivision",id:"polymetric-sequences-with-subdivision",level:3}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mini-notation")," is the name of a special notation used for writing patterns of various sort (",(0,r.kt)("em",{parentName:"p"},"notes"),", ",(0,r.kt)("em",{parentName:"p"},"samples"),", ",(0,r.kt)("em",{parentName:"p"},"parameters"),").  To use the mini-notation, use a string delimited by quotation marks: ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),". Internally, the mini-notation is actually parsed and understood as a shortcut for a function that you could otherwise write using longer function compositions."),(0,r.kt)("p",null,"Learning the mini-notation is ",(0,r.kt)("strong",{parentName:"p"},"essential")," for learning how to make music with ",(0,r.kt)("strong",{parentName:"p"},"Tidal Cycles"),". The notation is rather intuitive. We encourage you to try all these examples to see if you understand what effect every symbol can have on your pattern."),(0,r.kt)("h2",{id:"mini-notation-table"},"Mini-notation table"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Equivalent"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"~")),(0,r.kt)("td",{parentName:"tr",align:null},"Create a rest"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "~ hh"')),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[ ]")),(0,r.kt)("td",{parentName:"tr",align:null},"Create a pattern grouping"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "[bd sd] hh"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ fastcat [s "bd sd", s "hh"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".")),(0,r.kt)("td",{parentName:"tr",align:null},"Shorthand for pattern grouping"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd sd . hh hh hh"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "[bd sd] [hh hh hh]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",{parentName:"tr",align:null},"Play multiple patterns at the same time"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "[bd sd, hh hh hh]"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ stack [s "bd sd", s "hh hh hh"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:null},"Repeat a pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd*2 sd"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "[bd bd] sd"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/")),(0,r.kt)("td",{parentName:"tr",align:null},"Slow down a pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd/2"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s (slow 2 $ "bd")'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"|"),(0,r.kt)("td",{parentName:"tr",align:null},"Create a random choice"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "[bd')," ","|",(0,r.kt)("inlineCode",{parentName:"td"},"cp "),"|",(0,r.kt)("inlineCode",{parentName:"td"},'hh]"')),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"< >")),(0,r.kt)("td",{parentName:"tr",align:null},"Alternate between patterns"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd <sd hh cp>"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ slow 3 $ s "bd sd bd hh bd cp"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!")),(0,r.kt)("td",{parentName:"tr",align:null},"Replicate a pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd!3 sd"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd bd bd sd"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_")),(0,r.kt)("td",{parentName:"tr",align:null},"Elongate a pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd _ _ ~ sd _"')),(0,r.kt)("td",{parentName:"tr",align:null},"Results in pattern  ",(0,r.kt)("inlineCode",{parentName:"td"},'(0>1/2)\\|s: "bd" (4/6>1)\\|s: "sd"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@")),(0,r.kt)("td",{parentName:"tr",align:null},"Elongate a pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "superpiano@3 superpiano"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "superpiano _ _ superpiano"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"?")),(0,r.kt)("td",{parentName:"tr",align:null},"Randomly remove events from pattern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd? sd"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ fastcat [degradeBy 0.5 $ s "bd", s "sd"]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},":")),(0,r.kt)("td",{parentName:"tr",align:null},"Selecting samples"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd:3"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd" # n 3'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"( )")),(0,r.kt)("td",{parentName:"tr",align:null},"Euclidean sequences"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd(3,8)"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ euclid 3 8 $ s "bd"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ }")),(0,r.kt)("td",{parentName:"tr",align:null},"Polymetric sequences"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "{bd bd bd bd, cp cp hh}"')),(0,r.kt)("td",{parentName:"tr",align:null},"2nd pattern wraps:  ",(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ stack [ s "bd*4", s "cp cp hh cp" ]'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ }%")),(0,r.kt)("td",{parentName:"tr",align:null},"Polymetric sequence subdivision"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "{bd cp hh}%8"')),(0,r.kt)("td",{parentName:"tr",align:null},"Pattern wraps:  ",(0,r.kt)("inlineCode",{parentName:"td"},'d1 $ s "bd cp hh bd cp hh bd cp"'))))),(0,r.kt)("h2",{id:"the-mini-notation-in-depth"},"The mini-notation in depth"),(0,r.kt)("h3",{id:"rests"},"Rests"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"~")," to create rests in your patterns:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "~ hh"\n')),(0,r.kt)("h3",{id:"pattern-grouping"},"Pattern grouping"),(0,r.kt)("p",null,"Picture every element of your cycle as a step. Divide a simple pattern by 4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p "demo" $ s "bd bd bd bd"\n')),(0,r.kt)("p",null,"Now use pattern grouping to create a subdivision of any step:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p "demo" $\xa0s "[bd hh] bd bd"\n')),(0,r.kt)("p",null,"You can play with infinite layers of subdivisions. Time and human perception is the limit:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p "demo" $\xa0s "[bd [hh [cp sn:2] hh]] bd bd bd"\n')),(0,r.kt)("h3",{id:"pattern-grouping-shorthand"},"Pattern grouping shorthand"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},".")," to separate multiple pattern groupings in your pattern top-level:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p "demo" $ s "bd*3 . hh*4 cp"\n')),(0,r.kt)("p",null,"You can nest pattern grouping shorthands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p "demo" $ s "[bd*3 . hh:2*2] . hh*4 cp"\n')),(0,r.kt)("h3",{id:"superposition"},"Superposition"),(0,r.kt)("p",null,"You can play multiple patterns at the same time inside one pattern. This is one of the most intuitive ways of dealing with superposition/polyphony. These patterns have the 4 samples sounding together, but with different rhythmic subdivisions. The second pattern is a complete rhythm section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "[bd*2,hh*3,[~ cp]*2, bass]"\nd1 $\xa0s "[bd*3,hh*4,[~ cp]*2, bass*4]"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Be sure to enclose your pattern between brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"[]"),") if you want to use superposition at the top-level.")),(0,r.kt)("h3",{id:"step-repetition"},"Step repetition"),(0,r.kt)("p",null,"You can repeat a step as many times as you like using the multiplication symbol (also illustrated above):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0note "[[c3*3],[c e g c6*3]]" #\xa0s "superpiano"\n\nd2 $ s "cp cp cp*2"\n')),(0,r.kt)("h3",{id:"step-division"},"Step division"),(0,r.kt)("p",null,"You can slow down a pattern by using division (",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"). This one needs a little bit of practice to be understood:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bd cp/2"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"clap")," will only be heard every other cycle."),(0,r.kt)("h3",{id:"alternate"},"Alternate"),(0,r.kt)("p",null,"You can alternate between events in your pattern using the ",(0,r.kt)("inlineCode",{parentName:"p"},"less-than")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"more-than")," symbols < >. This one can be used to add a little variation to your pattern or to create nice and simple melodies and arpeggios:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ fast 2 $\xa0n "<c e g>" # s "superpiano"\n\nd2 $\xa0s "bd <[hh sn] [hh cp]>"\n')),(0,r.kt)("h3",{id:"replicate"},"Replicate"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," to replicate a given event ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," times:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d2 $\xa0s "bd!2 cp!2"\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This is not the same thing as the ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," symbol. ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," will create new steps or ",(0,r.kt)("inlineCode",{parentName:"p"},"replicate")," the steps. ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," will only multiply a step by a given factor:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},'-- so far so good\nd2 $\xa0s "bd!2 cp!2"\n-- oh wait!\nd2 $ s "bd!2 cp*2"\n'))),(0,r.kt)("h3",{id:"elongate"},"Elongate"),(0,r.kt)("p",null,"Elongate or ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," will extend the duration of an event for ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d2 $\xa0s "bd\xa0_\xa0_\xa0hh*4"\n')),(0,r.kt)("p",null,"You might hear a lot of silence between the first hit and the hi-hat. That's perfectly normal. Silence is cool too."),(0,r.kt)("h3",{id:"randomization"},"Randomization"),(0,r.kt)("p",null,"You can use a question mark ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," to randomly remove some events from the pattern, with a probability of ",(0,r.kt)("inlineCode",{parentName:"p"},"1/2"),". To use a different probabilty, use a number after the question mark."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1\xa0$ s "bd hh? bd hh?0.8"\n')),(0,r.kt)("h3",{id:"random-choice"},"Random choice"),(0,r.kt)("p",null,"You can use the ","|"," symbol between brackets ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")," to choose between multiple events with an equal probability:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ s "[bd*4|hh*12|cp*2]"\n')),(0,r.kt)("h3",{id:"sample-selection"},"Sample Selection"),(0,r.kt)("p",null,"When entering the name of an audio sample, you are in fact entering the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"folder")," containing it. To select a specific file in the selected folder, use the ",(0,r.kt)("inlineCode",{parentName:"p"},":")," symbol followed by any number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'p "scroll" $ s "arpy:1 arpy:2 arpy:3 arpy:4 arpy:5"\n\n-- all right, that\'s better\np "scroll" $\xa0\xa0s "[bd*4, [arpy:1,arpy:2,arpy:3,arpy:4,arpy:5](5,8)]"\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can't go too far in the folder and select a file that doesn't exist. Something like ",(0,r.kt)("inlineCode",{parentName:"p"},"cp:1238129038123")," will work:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "cp:1238129038123"\n')),(0,r.kt)("p",{parentName:"admonition"},"Tidal will not complain. It will just cycle in the folder until it finds the right sample.")),(0,r.kt)("h3",{id:"euclidian-sequences"},"Euclidian Sequences"),(0,r.kt)("p",null,"Euclidian rhythms are rhythms obtained using the greatest common divisor of two numbers. They were described in 2004 by ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Godfried_Toussaint"},"Godfried Toussaint"),", a canadian computer scientist. Euclidian rhythms are really useful for computer/algorithmic music because they can accurately describe a large number of rhythms used in the most important music world traditions. The algorithm work by providing two numbers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the number of beats"),(0,r.kt)("li",{parentName:"ul"},"the number of steps/silences to fill")),(0,r.kt)("p",null,"An euclidian rhythm will distribute the first number of beats to the second numbers of steps to be filled. With Tidal, you can create euclidian rhythms by adding an event followed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"(x,y)")," indicator, ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," corresponding to the numbers described above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ s "[bd(3,8), cp(2,8), hh(7,8), bass:1(7,16)]"\n\nd1 $ s "[bd(5,8), cp(4,8), hh(7,8), bass:1(7,16)]"\n\nd1 $ s "[bd(5,8), cp(1,8)?, hh(7,8), bass:1(8,16)]"\n')),(0,r.kt)("h4",{id:"more-examples"},"More examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"The Euclidean Algorithm Generates Traditional Musical Rhythms by Toussaint\n(2,5) : A thirteenth century Persian rhythm called Khafif-e-ramal.\n(3,4) : The archetypal pattern of the Cumbia from Colombia, as well as a Calypso rhythm from Trinidad.\n(3,5,2) : Another thirteenth century Persian rhythm by the name of Khafif-e-ramal, as well as a Rumanian folk-dance rhythm.\n(3,7) : A Ruchenitza rhythm used in a Bulgarian folk-dance.\n(3,8) : The Cuban tresillo pattern.\n(4,7) : Another Ruchenitza Bulgarian folk-dance rhythm.\n(4,9) : The Aksak rhythm of Turkey.\n(4,11) : The metric pattern used by Frank Zappa in his piece titled Outside Now.\n(5,6) : Yields the York-Samai pattern, a popular Arab rhythm.\n(5,7) : The Nawakhat pattern, another popular Arab rhythm.\n(5,8) : The Cuban cinquillo pattern.\n(5,9) : A popular Arab rhythm called Agsag-Samai.\n(5,11) : The metric pattern used by Moussorgsky in Pictures at an Exhibition.\n(5,12) : The Venda clapping pattern of a South African children\u2019s song.\n(5,16) : The Bossa-Nova rhythm necklace of Brazil.\n(7,8) : A typical rhythm played on the Bendir (frame drum).\n(7,12) : A common West African bell pattern.\n(7,16,14) : A Samba rhythm necklace from Brazil.\n(9,16) : A rhythm necklace used in the Central African Republic.\n(11,24,14) : A rhythm necklace of the Aka Pygmies of Central Africa.\n(13,24,5) : Another rhythm necklace of the Aka Pygmies of the upper Sangha.\n\n")),(0,r.kt)("h3",{id:"polymetric-sequences"},"Polymetric Sequences"),(0,r.kt)("p",null,"Creating polymetric sequences is a fairly advanced thing you can do using the ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," mini-notation. To do so, enclose your pattern between curly brackets (",(0,r.kt)("inlineCode",{parentName:"p"},"{}"),"). In the 1st example the 3 note and 4 note patterns sound together. The 4 beat pattern wraps and you hear the cr sample on different parts of the 3 beat pattern:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ s "{bd sd stab, cp arpy cr arpy}"\nd1 $ s "{bd*2, hh*4, bd hh 808:4}"\n')),(0,r.kt)("h3",{id:"polymetric-sequences-with-subdivision"},"Polymetric Sequences with Subdivision"),(0,r.kt)("p",null,"Alternatively, you can also add the precise subdivision you are looking for by using ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," followed by the subdivision number:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'d1 $ s "{bd hh 808:4}%8"\nd2 $ s "{bd cp 808:5}%4" # speed 2\n')))}m.isMDXComponent=!0}}]);