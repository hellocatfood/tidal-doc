"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4986],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>h});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||l;return n?t.createElement(h,o(o({ref:a},m),{},{components:n})):t.createElement(h,o({ref:a},m))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3264:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(3117),r=(n(7294),n(3905));const l={title:"Harmony & Melody",id:"harmony_melody"},o=void 0,i={unversionedId:"reference/harmony_melody",id:"reference/harmony_melody",title:"Harmony & Melody",description:"This page will present you all the functions that can be used to deal with harmonies, scales and various musical objects. Each function will be presented following the same model:",source:"@site/docs/reference/harmony_melody.md",sourceDirName:"reference",slug:"/reference/harmony_melody",permalink:"/docs/reference/harmony_melody",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/harmony_melody.md",tags:[],version:"current",lastUpdatedBy:"Joan Queralt",lastUpdatedAt:1671833162,formattedLastUpdatedAt:"Dec 23, 2022",frontMatter:{title:"Harmony & Melody",id:"harmony_melody"},sidebar:"reference",previous:{title:"Time",permalink:"/docs/reference/time"},next:{title:"Transitions",permalink:"/docs/reference/transitions"}},s={},p=[{value:"Scales",id:"scales",level:2},{value:"scale",id:"scale",level:3},{value:"scaleList",id:"scalelist",level:3},{value:"scaleTable",id:"scaletable",level:3},{value:"getScale",id:"getscale",level:3},{value:"toScale",id:"toscale",level:3},{value:"Chords",id:"chords",level:2},{value:"chordList",id:"chordlist",level:3},{value:"chordTable",id:"chordtable",level:3},{value:"Arpeggios",id:"arpeggios",level:2},{value:"arpeggiate",id:"arpeggiate",level:3},{value:"arp",id:"arp",level:3}],m={toc:p};function c(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page will present you all the functions that can be used to deal with harmonies, scales and various musical objects. Each function will be presented following the same model:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type signature"),": how the function is declared on the ",(0,r.kt)("strong",{parentName:"li"},"Haskell")," side."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Description"),": verbal description of the function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),": a small list of examples that you can copy/paste in your editor.")),(0,r.kt)("h2",{id:"scales"},"Scales"),(0,r.kt)("h3",{id:"scale"},"scale"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: scale :: Num a => Pattern String -> Pattern Int -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," function interprets a pattern of note numbers into a particular named scale. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ jux rev $ chunk 4 (fast 2 . (|- n 12)) $ off 0.25 (|+ 7) $ struct (iter 4 "t(5,8)")\n  $ n (scale "ritusen" "0 .. 7") # sound "superpiano"\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Prior to ",(0,r.kt)("strong",{parentName:"p"},"Tidal")," version 1.0.0, scale had a very different function as a ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," operator. Veteran users will need to switch to using ",(0,r.kt)("inlineCode",{parentName:"p"},"range")," for this functionality.")),(0,r.kt)("h3",{id:"scalelist"},"scaleList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: scaleList :: String\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scaleList")," function outputs all the available scales, at the time of writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"minPent majPent ritusen egyptian kumai hirajoshi iwato chinese indian pelog\nprometheus scriabin gong shang jiao zhi yu whole wholetone augmented augmented2\nhexMajor7 hexDorian hexPhrygian hexSus hexMajor6 hexAeolian major ionian\ndorian phrygian lydian mixolydian aeolian minor locrian harmonicMinor harmonicMajor\nmelodicMinor melodicMinorDesc melodicMajor bartok hindu todi purvi marva\nbhairav ahirbhairav superLocrian romanianMinor hungarianMinor neapolitanMinor\nenigmatic spanish leadingWhole lydianMinor neapolitanMajor locrianMajor\ndiminished octatonic diminished2 octatonic2 messiaen1 messiaen2 messiaen3\nmessiaen4 messiaen5 messiaen6 messiaen7 chromatic bayati hijaz sikah rast\nsaba iraq\n")),(0,r.kt)("h3",{id:"scaletable"},"scaleTable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: scaleTable :: Fractional a => [(String, [a])]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"scaleTable")," function outputs a list of all available scales and their corresponding notes. For example, its first entry is ",(0,r.kt)("inlineCode",{parentName:"p"},'("minPent",[0.0,3.0,5.0,7.0,10.0])')," which means that a minor pentatonic scale is formed by the root (",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"), the minor third (",(0,r.kt)("inlineCode",{parentName:"p"},"3")," semitones above the root), the perfect fourth (",(0,r.kt)("inlineCode",{parentName:"p"},"5")," semitones above the root), etc."),(0,r.kt)("p",null,"As the list is big, you can use the Haskell function ",(0,r.kt)("inlineCode",{parentName:"p"},"lookup")," to look up a specific scale:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'lookup "phrygian" scaleTable\n')),(0,r.kt)("p",null,"This will output ",(0,r.kt)("inlineCode",{parentName:"p"},"Just [0.0,1.0,3.0,5.0,7.0,8.0,10.0]"),"."),(0,r.kt)("p",null,"You can also do a reverse look up into the scale table. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"filter (\\(_,x)->take 3 x==[0,2,4]) scaleTable\n")),(0,r.kt)("p",null,"The above example will output all scales, the first three notes of which are the root, the major second (",(0,r.kt)("inlineCode",{parentName:"p"},"2")," semitones above the fundamental), and the major third (",(0,r.kt)("inlineCode",{parentName:"p"},"4")," semitones above the root)."),(0,r.kt)("h3",{id:"getscale"},"getScale"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: getScale :: Num a => [(String, [a])] -> Pattern String -> Pattern Int -> Pattern a\n")),(0,r.kt)("p",null,"You can build your own ",(0,r.kt)("inlineCode",{parentName:"p"},"scale")," function with additional scales if you wish, using ",(0,r.kt)("inlineCode",{parentName:"p"},"getScale"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'let scale = getScale (scaleTable ++ [("techno", [0,2,3,5,7,8,10]),\n                                     ("broken", [0,1,4,7,8,10])\n                                    ])\n')),(0,r.kt)("p",null,"The above takes the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"scaleTable")," as a starting point, and adds two custom scales to it. You'll be able to use the new function as normal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (scale "techno" "0 1 2 3 4 5 6 7") # sound "superpiano"\n')),(0,r.kt)("h3",{id:"toscale"},"toScale"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: toScale :: Num a => [a] -> Pattern Int -> Pattern a\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"toScale")," allows you to quickly apply a scale without naming it. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (toScale [0,2,3,5,7,8,10] "0 1 2 3 4 5 6 7") # sound "superpiano"\n')),(0,r.kt)("h2",{id:"chords"},"Chords"),(0,r.kt)("h3",{id:"chordlist"},"chordList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chordList :: String\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chordList")," function outputs all the available chords. At the time of writing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"major maj M aug plus sharp5 six 6 sixNine six9 sixby9 6by9 major7 maj7 major9 maj9 add9 major11 maj11 add11 major13 maj13\nadd13 dom7 dom9 dom11 dom13 sevenFlat5 7f5 sevenSharp5 7s5 sevenFlat9 7f9 nine eleven 11 thirteen 13 minor min m diminished\ndim minorSharp5 msharp5 mS5 minor6 min6 m6 minorSixNine minor69 min69 minSixNine m69 mSixNine m6by9 minor7flat5 minor7f5 min7flat5\nmin7f5 m7flat5 m7f5 minor7 min7 m7 minor7sharp5 minor7s5 min7sharp5 min7s5 m7sharp5 m7s5 minor7flat9 minor7f9 min7flat9 min7f9 m7flat9 m7f9 minor7sharp9 minor7s9 min7sharp9 min7s9\nm7sharp9 m7s9 diminished7 dim7 minor9 min9 m9 minor11 min11 m11 minor13 min13 m13 one 1 five 5 sus2 sus4 sevenSus2 7sus2\nsevenSus4 7sus4 nineSus4 ninesus4 9sus4 sevenFlat10 7f10 nineSharp5 9sharp5 9s5 minor9sharp5 minor9s5 min9sharp5 min9s5\nm9sharp5 m9s5 sevenSharp5flat9 7s5f9 minor7sharp5flat9 m7sharp5flat9\nelevenSharp 11s minor11sharp m11sharp m11s\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You'll need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"import Sound.Tidal.Chords")," before using this function.")),(0,r.kt)("h3",{id:"chordtable"},"chordTable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: chordTable :: Num a => [(String, [a])]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chordTable")," function outputs a list of all available chords and their corresponding notes. For example, its first entry is ",(0,r.kt)("inlineCode",{parentName:"p"},'("major",[0,4,7])')," which means that a major triad is formed by the root (",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"), the major third (",(0,r.kt)("inlineCode",{parentName:"p"},"4")," semitones above the root), and the perfect fifth (",(0,r.kt)("inlineCode",{parentName:"p"},"7")," semitones above the root)."),(0,r.kt)("p",null,"As the list is big, you can use the function ",(0,r.kt)("inlineCode",{parentName:"p"},"chordL")," to look up a specific chord:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'chordL "minor7"\n')),(0,r.kt)("p",null,"This will output ",(0,r.kt)("inlineCode",{parentName:"p"},"(0>1)|[0,3,7,10]"),"."),(0,r.kt)("p",null,"If you know the notes from a chord, but can't find the name of it, you can use this Haskell code to do a reverse look up into the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"filter (\\(_,x)->x==[0,4,7,10]) chordTable\n")),(0,r.kt)("p",null,"This will output: ",(0,r.kt)("inlineCode",{parentName:"p"},'[("dom7",[0,4,7,10])]')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You'll need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"import Sound.Tidal.Chords")," before using this function.")),(0,r.kt)("h2",{id:"arpeggios"},"Arpeggios"),(0,r.kt)("h3",{id:"arpeggiate"},"arpeggiate"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: arpeggiate :: Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"arpeggiate")," (alias ",(0,r.kt)("inlineCode",{parentName:"p"},"arpg"),") function spreads chords of note numbers over time. For example, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," version of ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),", chord name notation & older list notation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (arpg "\'major7 [0,4,7,11]") # sound "superpiano"\n')),(0,r.kt)("h3",{id:"arp"},"arp"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"Type: arp :: Pattern String -> Pattern a -> Pattern a\n")),(0,r.kt)("p",null,"The arp function takes an additional pattern of arpeggiate modes. For example, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"1.0")," version of ",(0,r.kt)("strong",{parentName:"p"},"Tidal"),", chord name notation (root note / chord type / additional notes above the chord):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},'d1 $ n (arp "<up down diverge>" "<a\'m9\'8 e\'7sus4\'8>") # sound "superpiano"\n')),(0,r.kt)("p",null,"The different arpeggiate modes are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-haskell"},"up down updown downup up&down down&up converge\ndiverge disconverge pinkyup pinkyupdown\nthumbup thumbupdown\n")))}c.isMDXComponent=!0}}]);