"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2271],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=l,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4172:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(3117),l=(a(7294),a(3905));const r={title:"Sampling",id:"sampling"},s=void 0,o={unversionedId:"reference/sampling",id:"reference/sampling",title:"Sampling",description:"This page will present you all the functions that can be used to slice, cut, reverse or explode your audio samples, incoming signals or oscillators. Each function will be presented following the same model:",source:"@site/docs/reference/sampling.md",sourceDirName:"reference",slug:"/reference/sampling",permalink:"/docs/reference/sampling",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/sampling.md",tags:[],version:"current",lastUpdatedBy:"HighHarmonics",lastUpdatedAt:1678429629,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"Sampling",id:"sampling"},sidebar:"reference",previous:{title:"Samplers",permalink:"/docs/reference/samplers"},next:{title:"Randomness",permalink:"/docs/reference/randomness"}},i={},p=[{value:"Audio sampling",id:"audio-sampling",level:2},{value:"chop",id:"chop",level:3},{value:"striate",id:"striate",level:3},{value:"striateBy",id:"striateby",level:3},{value:"slice",id:"slice",level:3},{value:"splice",id:"splice",level:3},{value:"randslice",id:"randslice",level:3},{value:"chew",id:"chew",level:3},{value:"loopAt",id:"loopat",level:3},{value:"smash",id:"smash",level:3},{value:"smash&#39;",id:"smash-1",level:3},{value:"Signal sampling",id:"signal-sampling",level:2},{value:"segment",id:"segment",level:3},{value:"discretise",id:"discretise",level:3},{value:"sig",id:"sig",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page will present you all the functions that can be used to slice, cut, reverse or explode your audio samples, incoming signals or oscillators. Each function will be presented following the same model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,l.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,l.kt)("h2",{id:"audio-sampling"},"Audio sampling"),(0,l.kt)("h3",{id:"chop"},"chop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chop :: Pattern Int -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chop")," cuts each sample into the given number of parts, allowing you to explore a technique known as 'granular synthesis'. It turns a pattern of samples into a pattern of parts of samples. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chop 16 $ sound "arpy ~ feel*2 newnotes"\n')),(0,l.kt)("p",null,"In the above, each sample is chopped into 16 bits, resulting in 64 (16*4) events. You can pattern that first parameter:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chop "<16 128 32>" $ sound "arpy ~ feel*2 newnotes"\n')),(0,l.kt)("p",null,"You end up with a pattern of the chopped up bits of samples. You'll already be able to hear this more clearly if you for example reverse the pattern, as you'll reverse the order of the sample parts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ rev $ chop 16 $ sound "breaks125"\n')),(0,l.kt)("p",null,"Lets try that reverse in just one speaker:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 2 $ jux rev $ chop 16 $ sound "breaks125"\n')),(0,l.kt)("p",null,"Different values of ",(0,l.kt)("inlineCode",{parentName:"p"},"chop")," can yield very different results, depending on the samples used:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ chop 16 $ sound (samples "arpy*8" (run 16))\nd1 $ chop 32 $ sound (samples "arpy*8" (run 16))\nd1 $ chop 256 $ sound "bd*4 [sn cp] [hh future]*2 [cp feel]"\n')),(0,l.kt)("p",null,"You can also use ",(0,l.kt)("inlineCode",{parentName:"p"},"chop")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"striate"),") with very long samples, to cut it into short chunks and pattern those chunks. The following cuts a sample into 32 parts, and plays it over 8 cycles:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopAt 8 $ chop 32 $ sound "bev"\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"loopAt")," takes care of changing the speed of sample playback so that the sample fits in the given number of cycles perfectly. As a result, in the above the granules line up perfectly, so you can\u2019t really hear that the sample has been cut into bits. Again, this becomes more apparent when you do further manipulations of the pattern, for example ",(0,l.kt)("inlineCode",{parentName:"p"},"rev")," to reverse the order of the cut up bits:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopAt 8 $ rev $ chop 32 $ sound "bev"\n')),(0,l.kt)("h3",{id:"striate"},"striate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: striate :: Pattern Int -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"striate")," is a kind of granulator, cutting samples into bits in a similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"chop"),", but the resulting bits are organised differently. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 4 $ striate 3 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"\n')),(0,l.kt)("p",null,"This plays the loop the given number of times, but triggering progressive portions of each sample. So in this case it plays the loop three times, the first time playing the first third of each sample, then the second time playing the second third of each sample, and then finally the last third of each sample.. Compare this with ",(0,l.kt)("inlineCode",{parentName:"p"},"chop"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 4 $ chop 3 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"\n')),(0,l.kt)("p",null,"You can hear that the striate version 'interlaces' the cut up bits of samples together, whereas the chop version plays the bits from each chopped up sample in turn. It might be worth listening to the samples without granulation, in case that helps understand what\u2019s happening in the above:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 4 $ sound "numbers:0 numbers:1 numbers:2 numbers:3"\n')),(0,l.kt)("h3",{id:"striateby"},"striateBy"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: striateBy :: Pattern Int -> Pattern Double -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"striateBy")," (formerly called ",(0,l.kt)("inlineCode",{parentName:"p"},"striate'"),") is a variant of ",(0,l.kt)("inlineCode",{parentName:"p"},"striate"),", with an extra parameter, which specifies the length of each part. ",(0,l.kt)("inlineCode",{parentName:"p"},"striate")," still scans across the sample over a single cycle, but if each bit is longer, it creates a sort of stuttering effect. For example the following will cut the bev sample into 32 parts, but each will be 1/16th of a sample long:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow 32 $ striateBy 32 (1/16) $ sound "bev"\n')),(0,l.kt)("p",null,"Note that striate uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"begin")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"end")," parameters internally. This means that if you\u2019re using ",(0,l.kt)("inlineCode",{parentName:"p"},"striate")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"striateBy")," you probably shouldn\u2019t also specify begin or end."),(0,l.kt)("h3",{id:"slice"},"slice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: Pattern Int -> Pattern Int -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"slice")," is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"chop")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"striate"),", in that it's used to slice samples up into bits. The difference is that it allows you to rearrange those bits as a pattern."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slice 8 "7 6 5 4 3 2 1 0" $ sound "breaks165"\n  # legato 1\n')),(0,l.kt)("p",null,"The above slices the sample into eight bits, and then plays them backwards, equivalent of applying ",(0,l.kt)("inlineCode",{parentName:"p"},"rev $ chop 8"),". Here's a more complex example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slice 8 "[<0*8 0*2> 3*4 2 4] [4 .. 7]" $ sound "breaks165"\n  # legato 1\n')),(0,l.kt)("p",null,"Note that the order of the first two parameters changed since tidal version ",(0,l.kt)("inlineCode",{parentName:"p"},"1.0.0"),"."),(0,l.kt)("h3",{id:"splice"},"splice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: splice :: Pattern Int -> Pattern Int -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"splice")," is similar to slice, but the slices are automatically pitched up or down to fit their 'slot'."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ splice 8 "[<0*8 0*2> 3*4 2 4] [4 .. 7]" $ sound "breaks165"\n')),(0,l.kt)("h3",{id:"randslice"},"randslice"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: randslice :: Pattern Int -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"randslice")," chops the sample into the given number of pieces and then plays back a random one each cycle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ randslice 32 $ sound "bev"\n')),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"fast")," to get more than one per cycle;"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ fast 4 $ randslice 32 $ sound "bev"\n')),(0,l.kt)("h3",{id:"chew"},"chew"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chew :: Int -> Pattern Int -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"chew")," works the same as bite, but speeds up/slows down playback of sounds as well as squeezing / contracting the slices of pattern."),(0,l.kt)("p",null,"Compare these:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ bite 4 "0 1*2 2*2 [~ 3]" $ n "0 .. 7" # sound "drum"\n\nd1 $ chew 4 "0 1*2 2*2 [~ 3]" $ n "0 .. 7" # sound "drum"\n')),(0,l.kt)("h3",{id:"loopat"},"loopAt"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: loopAt :: Pattern Time -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"loopAt"),' makes sample fit the given number of cycles. Internally, it works by setting the unit control to "c", changing the playback speed of the sample with the speed parameter, and setting the density of the pattern to match.'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopAt 4 $ sound "breaks125"\n')),(0,l.kt)("p",null,"It\u2019s a good idea to use this in conjuction with ",(0,l.kt)("inlineCode",{parentName:"p"},"chop"),", so the break is chopped into pieces and you don\u2019t have to wait for the whole sample to start/stop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ loopAt 4 $ chop 32 $ sound "breaks125"\n')),(0,l.kt)("p",null,"Like all ",(0,l.kt)("strong",{parentName:"p"},"Tidal")," functions, you can mess about with this considerably. The below example shows how you can supply a pattern of cycle counts to ",(0,l.kt)("inlineCode",{parentName:"p"},"loopAt"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ juxBy 0.6 (|* speed "2") $ loopAt "<4 6 2 3>" $ chop 12 $ sound "fm:14"\n')),(0,l.kt)("h3",{id:"smash"},"smash"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: smash :: Pattern Int -> [Pattern Time] -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"smash")," is a combination of ",(0,l.kt)("inlineCode",{parentName:"p"},"spread")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"striate")," - it cuts the samples into the given number of bits, and then cuts between playing the loop at different speeds according to the values in the list. So this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ smash 3 [2,3,4] $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("p",null,"Is a bit like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ slow "<2 3 4>" $ striate 3 $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("h3",{id:"smash-1"},"smash'"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: smash' :: Int -> [Pattern Time] -> ControlPattern -> ControlPattern\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"smash'")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"smash")," but based on ",(0,l.kt)("inlineCode",{parentName:"p"},"chop")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"striate"),"."),(0,l.kt)("p",null,"Compare:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ smash 6 [2,3,4] $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("p",null,"to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ smash\' 6 [2,3,4] $ sound "ho ho:2 ho:3 hc"\n')),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ smash 12 [2,3,4] $ s "bev*4"\n')),(0,l.kt)("p",null,"vs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ smash\' 12 [2,3,4] $ s "bev*4"\n')),(0,l.kt)("p",null,"for a dramatic difference."),(0,l.kt)("h2",{id:"signal-sampling"},"Signal sampling"),(0,l.kt)("h3",{id:"segment"},"segment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: segment :: Pattern Time -> Pattern a -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"segment")," 'samples' the pattern at a rate of ",(0,l.kt)("inlineCode",{parentName:"p"},"n")," events per cycle. Useful for turning a continuous pattern into a discrete one. In this example, the pattern originates from the shape of a sine wave, a continuous pattern. Without segment the samples will get triggered at an undefined frequency which may be very high."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (slow 2 $ segment 16 $ range 0 32 $ sine) # sound "amencutup"\n')),(0,l.kt)("h3",{id:"discretise"},"discretise"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"segment")," used to be known as ",(0,l.kt)("inlineCode",{parentName:"p"},"discretise"),". The old name remains as an alias and will still work, but may be removed or repurposed in a future version of ",(0,l.kt)("strong",{parentName:"p"},"Tidal"),". "),(0,l.kt)("h3",{id:"sig"},"sig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: sig :: (Time -> a) -> Pattern a\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sig")," takes a function of time and turns it into a pattern. It's very useful for creating continuous patterns such as ",(0,l.kt)("inlineCode",{parentName:"p"},"sine")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"perlin"),". For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"saw")," is defined as"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-haskell"},"saw = sig $ \\t -> mod' (fromRational t) 1\n")))}u.isMDXComponent=!0}}]);