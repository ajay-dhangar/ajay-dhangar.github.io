"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[72548],{62636:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var t=n(17624),r=n(4552);const o={id:"random-in-javascript",title:"Random in JavaScript",sidebar_label:"Random",sidebar_position:18,tags:["JavaScript","Math","Object","Methods","Random","Number","Integer","Range","Floating-point","Generate","Math.random()"],description:"In this tutorial, we will learn about the Math.random() method in JavaScript. We will learn how to generate random numbers in JavaScript."},i=void 0,d={id:"javascript/random-in-javascript",title:"Random in JavaScript",description:"In this tutorial, we will learn about the Math.random() method in JavaScript. We will learn how to generate random numbers in JavaScript.",source:"@site/docs/javascript/random.md",sourceDirName:"javascript",slug:"/javascript/random-in-javascript",permalink:"/code-harbor-hub/docs/javascript/random-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/random.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"Math",permalink:"/code-harbor-hub/docs/tags/math"},{label:"Object",permalink:"/code-harbor-hub/docs/tags/object"},{label:"Methods",permalink:"/code-harbor-hub/docs/tags/methods"},{label:"Random",permalink:"/code-harbor-hub/docs/tags/random"},{label:"Number",permalink:"/code-harbor-hub/docs/tags/number"},{label:"Integer",permalink:"/code-harbor-hub/docs/tags/integer"},{label:"Range",permalink:"/code-harbor-hub/docs/tags/range"},{label:"Floating-point",permalink:"/code-harbor-hub/docs/tags/floating-point"},{label:"Generate",permalink:"/code-harbor-hub/docs/tags/generate"},{label:"Math.random()",permalink:"/code-harbor-hub/docs/tags/math-random"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710237590,formattedLastUpdatedAt:"Mar 12, 2024",sidebarPosition:18,frontMatter:{id:"random-in-javascript",title:"Random in JavaScript",sidebar_label:"Random",sidebar_position:18,tags:["JavaScript","Math","Object","Methods","Random","Number","Integer","Range","Floating-point","Generate","Math.random()"],description:"In this tutorial, we will learn about the Math.random() method in JavaScript. We will learn how to generate random numbers in JavaScript."},sidebar:"tutorialSidebar",previous:{title:"Math",permalink:"/code-harbor-hub/docs/javascript/math-in-javascript"},next:{title:"If...Else",permalink:"/code-harbor-hub/docs/javascript/if-else-in-javascript"}},s={},l=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Generate Random Number within a Range",id:"generate-random-number-within-a-range",level:2},{value:"Generate Random Integer",id:"generate-random-integer",level:2},{value:"A property of Math.random() method",id:"a-property-of-mathrandom-method",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const a={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["In JavaScript, the ",(0,t.jsx)(a.code,{children:"Math.random()"})," method is used to generate a random floating-point number between 0 (inclusive) and 1 (exclusive)."]}),"\n",(0,t.jsx)(a.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(a.p,{children:["The syntax of the ",(0,t.jsx)(a.code,{children:"Math.random()"})," method is as follows:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="app.js"',children:"Math.random()\n"})}),"\n",(0,t.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(a.p,{children:["The following example demonstrates how to use the ",(0,t.jsx)(a.code,{children:"Math.random()"})," method to generate a random number between 0 and 1:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.random()); // 0.12345678901234567\n"})}),"\n",(0,t.jsxs)(a.p,{children:["In the above example, the ",(0,t.jsx)(a.code,{children:"Math.random()"})," method returns a random floating-point number between 0 (inclusive) and 1 (exclusive)."]}),"\n",(0,t.jsx)(a.h2,{id:"generate-random-number-within-a-range",children:"Generate Random Number within a Range"}),"\n",(0,t.jsx)(a.p,{children:"To generate a random number within a specific range, you can use the following formula:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="app.js"',children:"Math.floor(Math.random() * (max - min + 1)) + min\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Where ",(0,t.jsx)(a.code,{children:"min"})," is the minimum value and ",(0,t.jsx)(a.code,{children:"max"})," is the maximum value."]}),"\n",(0,t.jsx)(a.p,{children:"The following example demonstrates how to generate a random number between 1 and 10:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1); // 5\n"})}),"\n",(0,t.jsxs)(a.p,{children:["In the above example, the ",(0,t.jsx)(a.code,{children:"Math.floor(Math.random() * (10 - 1 + 1)) + 1"})," expression generates a random number between 1 and 10."]}),"\n",(0,t.jsx)(a.h2,{id:"generate-random-integer",children:"Generate Random Integer"}),"\n",(0,t.jsx)(a.p,{children:"To generate a random integer within a specific range, you can use the following formula:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="app.js"',children:"Math.floor(Math.random() * (max - min + 1)) + min\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Where ",(0,t.jsx)(a.code,{children:"min"})," is the minimum value and ",(0,t.jsx)(a.code,{children:"max"})," is the maximum value."]}),"\n",(0,t.jsx)(a.p,{children:"The following example demonstrates how to generate a random integer between 1 and 10:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1); // 5\n"})}),"\n",(0,t.jsxs)(a.p,{children:["In the above example, the ",(0,t.jsx)(a.code,{children:"Math.floor(Math.random() * (10 - 1 + 1)) + 1"})," expression generates a random integer between 1 and 10."]}),"\n",(0,t.jsx)(a.h2,{id:"a-property-of-mathrandom-method",children:"A property of Math.random() method"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"Math.random()"})," method returns a random floating-point number between 0 (inclusive) and 1 (exclusive)."]}),"\n",(0,t.jsx)(a.admonition,{title:"\ud83d\udcdd Note",type:"info",children:(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"Math.random()"})," method returns a random number between 0 (inclusive) and 1 (exclusive)."]})}),"\n",(0,t.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(a.p,{children:["In this tutorial, you learned how to use the ",(0,t.jsx)(a.code,{children:"Math.random()"})," method to generate random numbers in JavaScript. You also learned how to generate random numbers within a specific range and how to generate random integers."]})]})}function c(e={}){const{wrapper:a}={...(0,r.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},4552:(e,a,n)=>{n.d(a,{I:()=>d,M:()=>i});var t=n(11504);const r={},o=t.createContext(r);function i(e){const a=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:a},e.children)}}}]);