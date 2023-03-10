"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=l,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(3117),l=(n(7294),n(3905));const r={title:"Transitions",id:"transitions"},i=void 0,o={unversionedId:"reference/transitions",id:"reference/transitions",title:"Transitions",description:"What are transitions?",source:"@site/docs/reference/transitions.md",sourceDirName:"reference",slug:"/reference/transitions",permalink:"/docs/reference/transitions",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/transitions.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1678429629,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"Transitions",id:"transitions"},sidebar:"reference",previous:{title:"Tempo",permalink:"/docs/reference/tempo"},next:{title:"State Values",permalink:"/docs/reference/state_values"}},p={},s=[{value:"What are transitions?",id:"what-are-transitions",level:2},{value:"Anticipate",id:"anticipate",level:2},{value:"anticipate",id:"anticipate-1",level:3},{value:"anticipateIn",id:"anticipatein",level:3},{value:"Clutch",id:"clutch",level:2},{value:"Clutch",id:"clutch-1",level:3},{value:"clutchIn",id:"clutchin",level:3},{value:"histpan",id:"histpan",level:2},{value:"Interpolate",id:"interpolate",level:2},{value:"interpolate",id:"interpolate-1",level:3},{value:"interpolateIn",id:"interpolatein",level:3},{value:"Jump",id:"jump",level:2},{value:"jump",id:"jump-1",level:3},{value:"jumpIn",id:"jumpin",level:3},{value:"jumpIn&#39;",id:"jumpin-1",level:3},{value:"jumpMod",id:"jumpmod",level:3},{value:"Wait",id:"wait",level:2},{value:"wait",id:"wait-1",level:3},{value:"waitT",id:"waitt",level:3},{value:"Wash",id:"wash",level:2},{value:"wash",id:"wash-1",level:3},{value:"washIn",id:"washin",level:3},{value:"Fade",id:"fade",level:2},{value:"xfade",id:"xfade",level:3},{value:"xfadeIn",id:"xfadein",level:3}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"what-are-transitions"},"What are transitions?"),(0,l.kt)("p",null,"Transitions are functions you can use to switch musically between patterns. Start with a pattern on ",(0,l.kt)("inlineCode",{parentName:"p"},"d1"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd(3,8) drum*4"\n')),(0,l.kt)("p",null,"You can then perform a crossfade transition to a new pattern using ",(0,l.kt)("inlineCode",{parentName:"p"},"xfade"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'xfade 1 $ s "arpy*8" # n (run 8)\n')),(0,l.kt)("p",null,"Note that the argument we give to ",(0,l.kt)("inlineCode",{parentName:"p"},"xfade")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", which means to apply the transition to the pattern that is running on ",(0,l.kt)("inlineCode",{parentName:"p"},"d1"),"."),(0,l.kt)("p",null,"You can use transitions on any ",(0,l.kt)("inlineCode",{parentName:"p"},"d")," pattern in Tidal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d3 $ s "bd(3,8)"\nxfade 3 $ s "arpy*4"\n')),(0,l.kt)("p",null,"You can also apply a transition to any arbitrary pattern name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'p "drums" $ s "bd(3,8) drum*4"\nxfade "drums" $ s "arpy*8" # n (run 8)\n')),(0,l.kt)("p",null,"Most of the transitions also have an ",(0,l.kt)("inlineCode",{parentName:"p"},'"In"')," variant, where you can specify the number of cycles that the transition takes to complete:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'xfadeIn 1 8 $ s "arpy*8" # n (run 8)\n')),(0,l.kt)("p",null,"The following sections will present you all the transition functions that can you can use to switch musically from a pattern to another. Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"anticipate"},"Anticipate"),(0,l.kt)("h3",{id:"anticipate-1"},"anticipate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: anticipate :: Time -> [ControlPattern] -> ControlPattern\n")),(0,l.kt)("p",null,"Queue up a pattern to be triggered (or dropped) in after ",(0,l.kt)("inlineCode",{parentName:"p"},"8")," cycles. The argument supplied to ",(0,l.kt)("inlineCode",{parentName:"p"},"anticipate")," is the ID of the new pattern that is created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "jvbass(3,8)"\nanticipate 1 $ sound "bd sn" # delay "0.5" # room "0.3"\n')),(0,l.kt)("p",null,"Stop the newly created pattern using its id: ",(0,l.kt)("inlineCode",{parentName:"p"},"d1 silence")),(0,l.kt)("h3",{id:"anticipatein"},"anticipateIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"anticipateIn :: Show a => a -> Time -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,"Start playing a pattern after a specified number of cycles and assign it an ID."),(0,l.kt)("p",null,"The first argument is the number of cycles after which the pattern will begin playing, and the second argument is the ID of the newly created patttern."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 2 $ sound "bd sd"\n\nanticipateIn 2 2 $ fast 4 $ sound "hh*2" *| gain "0.9 0.6"\n\nd2 silence\n')),(0,l.kt)("h2",{id:"clutch"},"Clutch"),(0,l.kt)("h3",{id:"clutch-1"},"Clutch"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"clutch :: Show a => a -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clutch")," degrades the current pattern while undegrading the next. The argument provided to ",(0,l.kt)("inlineCode",{parentName:"p"},"clutch")," is the ID of the pattern that ",(0,l.kt)("inlineCode",{parentName:"p"},"clutch")," creates or the pattern that ",(0,l.kt)("inlineCode",{parentName:"p"},"clutch")," is replacing."),(0,l.kt)("p",null,"This is like ",(0,l.kt)("inlineCode",{parentName:"p"},"xfade")," but not by gain of samples but by randomly removing events from the current pattern and slowly adding back in missing events from the next one."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "bd(3,8)"\n\nclutch 1 $ sound "[hh*4, odx(3,8)]"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clutch")," takes two cycles for the transition, essentially this is ",(0,l.kt)("inlineCode",{parentName:"p"},"clutchIn 2"),"."),(0,l.kt)("h3",{id:"clutchin"},"clutchIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"clutchIn :: Show a => a -> Time -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"In")," variant of the function above."),(0,l.kt)("h2",{id:"histpan"},"histpan"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"histpan :: Show a => a -> Int -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,"This will ",(0,l.kt)("inlineCode",{parentName:"p"},"pan")," the last four patterns on the ",(0,l.kt)("inlineCode",{parentName:"p"},"d1")," channel from left to right, the most recent on the left:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'histpan 1 4 $ sound "bd sn"\n')),(0,l.kt)("h2",{id:"interpolate"},"Interpolate"),(0,l.kt)("h3",{id:"interpolate-1"},"interpolate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: interpolate :: Time -> [ControlPattern] -> ControlPattern\n")),(0,l.kt)("p",null,"Morph control values between patterns in four cycles. The argument supplied to ",(0,l.kt)("inlineCode",{parentName:"p"},"interpolate")," is the ID of the new pattern that is created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy*16" # cutoff 100\n\ninterpolate 1 $ sound "arpy*16" # cutoff 16000\n')),(0,l.kt)("p",null,"Stop the newly created pattern using its id:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 silence\n")),(0,l.kt)("h3",{id:"interpolatein"},"interpolateIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: interpolateIn :: Time -> [ControlPattern] -> ControlPattern\n")),(0,l.kt)("p",null,"Morph control values between patterns in a given number of cycles. The first argument supplied to ",(0,l.kt)("inlineCode",{parentName:"p"},"interpolate")," is the ID of the new pattern that is created and the second is the number of cycles."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "arpy*16" # cutoff 100\ninterpolateIn 1 2 $ sound "arpy*16" # cutoff 16000\n')),(0,l.kt)("p",null,"Stop the newly created pattern using its id:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"d1 silence\n")),(0,l.kt)("h2",{id:"jump"},"Jump"),(0,l.kt)("h3",{id:"jump-1"},"jump"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"jump :: Show a => a -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jump")," is essentially the no transition-transition. It jumps directly into the given pattern. The variants ",(0,l.kt)("inlineCode",{parentName:"p"},"jumpIn"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"jumpIn'")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jumpMod")," provide more useful capabilities."),(0,l.kt)("p",null,"Say you have:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*4"\n')),(0,l.kt)("p",null,"Then both of the following lines will have the same effect when evaluated:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*8"\njump 1 $ sound "hh*8" --`1` to change the pattern in `d1`\n')),(0,l.kt)("h3",{id:"jumpin"},"jumpIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"jumpIn :: Show a => a -> Int -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jumpIn")," takes the identifier of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ControlPattern")," track and an integer ",(0,l.kt)("inlineCode",{parentName:"p"},"cycleCount"),". It will jump unaligned into the given pattern after ",(0,l.kt)("inlineCode",{parentName:"p"},"cycleCount")," cycles have completed."),(0,l.kt)("p",null,"Say you have this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*4"\nd2 $ sound "bd" --have a beat on the 1 for orientation\n')),(0,l.kt)("p",null,"Then the subdivision on the hi-hat will increase ",(0,l.kt)("inlineCode",{parentName:"p"},"2")," cycles after evaluation of the next line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'jumpIn 1 2 $ sound "hh*8" --`1` because `d1` is defined `let d1 = p 1`\n')),(0,l.kt)("p",null,"The transition will not align with the beat on cycle boundary."),(0,l.kt)("h3",{id:"jumpin-1"},"jumpIn'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"jumpIn' :: Show a => a -> Int -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jumpIn'")," takes the identifier of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ControlPattern")," track and an integer ",(0,l.kt)("inlineCode",{parentName:"p"},"cycleCount"),". It will jump at cycle boundary into the given pattern after ",(0,l.kt)("inlineCode",{parentName:"p"},"cycleCount")," cycles have completed."),(0,l.kt)("p",null,"Example: Say you have this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*4"\nd2 $ sound "bd" --have a beat on the 1 for orientation\n')),(0,l.kt)("p",null,"Then the subdivision on the hi-hat will increase 2 cycles after evaluation of the next line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'jumpIn\' 1 2 $ sound "hh*8" --`1` because `d1`\n')),(0,l.kt)("p",null,"The transition will align with the beat on cycle boundary."),(0,l.kt)("h3",{id:"jumpmod"},"jumpMod"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"jumpMod :: Show a => a -> Int -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jumpMod")," takes the identifier of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ControlPattern")," track and an integer ",(0,l.kt)("inlineCode",{parentName:"p"},"cycleMod"),". It will jump at cycle boundary into the given pattern when currentCycle ",(0,l.kt)("inlineCode",{parentName:"p"},"mod cycleMod == 0"),"."),(0,l.kt)("p",null,"Example: Say you have this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ sound "hh*4"\nd2 $ sound "bd" --have a beat on the 1 for orientation\n')),(0,l.kt)("p",null,"Then the subdivision on the hi-hat will increase in one of the next 2 cycles after evaluation of the next line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'jumpMod 1 2 $ sound "hh*8" --`1` because `d1`\n')),(0,l.kt)("p",null,"The transition will align with one of the next 2 bd onsets."),(0,l.kt)("h2",{id:"wait"},"Wait"),(0,l.kt)("h3",{id:"wait-1"},"wait"),(0,l.kt)("p",null,"Wait functions are used to pause a running pattern for a given number of cycles. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"wait :: Show a => a -> Time -> ControlPattern -> IO ()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "[bd ~ [bd [ht lt]] ho]"\nd2 $ s "hh27:2*4 cp*3"\nwait 2 4 $ s "feel:4*4 cp*3"\n')),(0,l.kt)("p",null,"Here ",(0,l.kt)("inlineCode",{parentName:"p"},"wait 2 4"),' pauses pattern "2" for "4" cycles then starts the new pattern.\nThis is useful if you want to have one pattern on pause for a certain number of cycles while you make a change. '),(0,l.kt)("h3",{id:"waitt"},"waitT"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"waitT :: Show a => a -> (Time -> [ControlPattern] -> ControlPattern) -> Time -> ControlPattern -> IO ()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "[bd ~ [bd [ht lt]] ho]"\nwaitT 2 (Sound.Tidal.Transition.xfadeIn 2) 4 $ s "hh*8"\nwaitT 2 (Sound.Tidal.Transition.clutch) 2 $ s "hh*8"\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"waitT")," allows you to specify any of the transition functions: ",(0,l.kt)("inlineCode",{parentName:"p"},"xfadeIn, clutchIn, anticipate")," etc.\nNote the arguments and you need to include any argument for the specified transition: \\\n",(0,l.kt)("inlineCode",{parentName:"p"},"waitT <patternID> (Sound.Tidal.Transition.<transitionName>  <transitionArg>) <cycles>")),(0,l.kt)("h2",{id:"wash"},"Wash"),(0,l.kt)("h3",{id:"wash-1"},"wash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"wash :: (Pattern a -> Pattern a)\n-> (Pattern a -> Pattern a) -> Time -> Time -> Time -> Time -> [Pattern a] -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wash")," is a function used to define a couple of the other transitions, ",(0,l.kt)("inlineCode",{parentName:"p"},"anticipate")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jump"),". It's not really useful on its own, unless you wanted to make your own version of ",(0,l.kt)("inlineCode",{parentName:"p"},"anticipate"),". It looks like it needs some work to make it more user friendly."),(0,l.kt)("h3",{id:"washin"},"washIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"washIn :: (Pattern a -> Pattern a) -> Time -> Time -> [Pattern a] -> Pattern a\n")),(0,l.kt)("h2",{id:"fade"},"Fade"),(0,l.kt)("h3",{id:"xfade"},"xfade"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"xfade :: Show a => a -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,"Start with a pattern on d1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ s "bd(3,8) drum*4"\n')),(0,l.kt)("p",null,"You can then perform a crossfade transition to a new pattern using xfade:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'xfade 1 $ s "arpy*8" # n (run 8)\n')),(0,l.kt)("p",null,"Note that the argument we give to ",(0,l.kt)("inlineCode",{parentName:"p"},"xfade")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"1"),", which means to apply the transition to the pattern that is running on ",(0,l.kt)("inlineCode",{parentName:"p"},"d1"),"."),(0,l.kt)("p",null,"You can use transitions on any ",(0,l.kt)("inlineCode",{parentName:"p"},"d")," pattern in Tidal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d3 $ s "bd(3,8)"\n\nxfade 3 $ s "arpy*4"\n')),(0,l.kt)("p",null,"You can also apply a transition to any arbitrary pattern name:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'p "drums" $ s "bd(3,8) drum*4"\n\nxfade "drums" $ s "arpy*8" # n (run 8)\n')),(0,l.kt)("h3",{id:"xfadein"},"xfadeIn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"xfadeIn :: Show a => a -> Time -> ControlPattern -> IO ()\n")),(0,l.kt)("p",null,"Same thing as ",(0,l.kt)("inlineCode",{parentName:"p"},"xfade"),", but you can specify the number of cycles that the transition takes to complete:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'xfadeIn 1 8 $ s "arpy*8" # n (run 8)\n')))}d.isMDXComponent=!0}}]);