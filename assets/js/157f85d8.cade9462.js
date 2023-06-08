"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const o={title:"Contributing Tests",id:"contributing_test"},i=void 0,s={unversionedId:"innards/contributing_test",id:"innards/contributing_test",title:"Contributing Tests",description:"Unit tests are small bits of code that check that a function works as expected. You might want to contribute a test for one or more reasons:",source:"@site/docs/innards/contributing_tests.md",sourceDirName:"innards",slug:"/innards/contributing_test",permalink:"/docs/innards/contributing_test",draft:!1,editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/innards/contributing_tests.md",tags:[],version:"current",lastUpdatedAt:1686250691,formattedLastUpdatedAt:"Jun 8, 2023",frontMatter:{title:"Contributing Tests",id:"contributing_test"},sidebar:"docs",previous:{title:"Type Signatures",permalink:"/docs/innards/type_signatures"},next:{title:"What is a pattern?",permalink:"/docs/innards/what_is_a_pattern"}},l={},u=[{value:"Test modules",id:"test-modules",level:2},{value:"Contributing tests",id:"contributing-tests",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"Writing and contributing your test",id:"writing-and-contributing-your-test",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unit tests are small bits of code that check that a function works as expected. You might want to contribute a test for one or more reasons:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To demonstrate a bug or other unexpected behaviour in a clear way"),(0,a.kt)("li",{parentName:"ul"},"To explain how a new feature works"),(0,a.kt)("li",{parentName:"ul"},"Because there's a feature you really like and you don't want it to break in the future"),(0,a.kt)("li",{parentName:"ul"},"To generally help make Tidal more resilient")),(0,a.kt)("h2",{id:"test-modules"},"Test modules"),(0,a.kt)("p",null,"You can browse the test modules that already exist ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/Tidal/tree/master/test/Sound/Tidal"},"here"),"."),(0,a.kt)("p",null,"The test modules are named after the modules they are testing, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"/test/Sound/Tidal/UITest.hs")," has tests for ",(0,a.kt)("inlineCode",{parentName:"p"},"Sound.Tidal.UITest"),". Here's an example from that file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},'describe "euclidFull" $ do\n  it "can match against silence" $ do\n    compareP (Arc 0 1)\n      (euclidFull 3 8 "bd" silence)\n      ("bd(3,8)" :: Pattern String)\n')),(0,a.kt)("p",null,"This tests that ",(0,a.kt)("inlineCode",{parentName:"p"},"euclidFull")," works OK if its fourth parameter was silence. There was once a bug where it didn't, and the existence of this test means that if this bug comes back, we'll know about it."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"compareP")," is for comparing two patterns. It takes three parameters - an ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc")," with a start and stop time -- in this case ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", which means that all the events in the first cycle (i.e, between time position ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),") are compared. Then come the two patterns that are to be compared."),(0,a.kt)("p",null,"You'll also see ",(0,a.kt)("inlineCode",{parentName:"p"},"comparePD")," - the final 'D' stands for defragment. There are cases where a function event gets split into two parts, and ",(0,a.kt)("inlineCode",{parentName:"p"},"comparePD")," simply joins such events back together before comparing the patterns with each other."),(0,a.kt)("h2",{id:"contributing-tests"},"Contributing tests"),(0,a.kt)("p",null,"To contribute a test, you'll have to fork the ",(0,a.kt)("strong",{parentName:"p"},"Tidal")," project. You'll need to create a (free!) account on GitHub if you don't already have one, then go to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tidalcycles/tidal"},"Tidal")," and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"fork")," button."),(0,a.kt)("p",null,"Once you've done that, you'll need to ",(0,a.kt)("inlineCode",{parentName:"p"},"clone")," your new fork to your computer, and set that folder to be your current working directory. You can do that with this command, being sure to replace ",(0,a.kt)("inlineCode",{parentName:"p"},'"<your username>"')," in the above with whatever your username is on GitHub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/<your username>/Tidal/\ncd Tidal\n")),(0,a.kt)("h2",{id:"running-tests"},"Running tests"),(0,a.kt)("p",null,"Before you do anything else, it's a good idea to run the tests to make sure everything completes OK. You can do that with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haskell"},"cabal test\n")),(0,a.kt)("h2",{id:"writing-and-contributing-your-test"},"Writing and contributing your test"),(0,a.kt)("p",null,"It's now time to make a 'branch' for creating your test, and then send it to the ",(0,a.kt)("strong",{parentName:"p"},"Tidal")," maintainers as a ",(0,a.kt)("inlineCode",{parentName:"p"},"pull request"),". This is general development stuff, so we'll defer to this ",(0,a.kt)("a",{parentName:"p",href:"https://codeburst.io/a-step-by-step-guide-to-making-your-first-github-contribution-5302260a2940"},"handy guide"),". You can start with step 3 - ",(0,a.kt)("inlineCode",{parentName:"p"},'"create a branch"'),"."))}p.isMDXComponent=!0}}]);