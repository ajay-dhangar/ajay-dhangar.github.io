"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[88016],{78796:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(17624),t=n(4552);const r={id:"let-in-javascript",title:"Let Keyword in JavaScript",sidebar_label:"Let Keyword",sidebar_position:8,tags:["JavaScript","let","ES6","Variables","Block Scope","Hoisting","Redeclaration"],description:"What is the let keyword in JavaScript and how to use it."},o=void 0,l={id:"javascript/let-in-javascript",title:"Let Keyword in JavaScript",description:"What is the let keyword in JavaScript and how to use it.",source:"@site/docs/javascript/let-js.md",sourceDirName:"javascript",slug:"/javascript/let-in-javascript",permalink:"/code-harbor-hub/docs/javascript/let-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/let-js.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"let",permalink:"/code-harbor-hub/docs/tags/let"},{label:"ES6",permalink:"/code-harbor-hub/docs/tags/es-6"},{label:"Variables",permalink:"/code-harbor-hub/docs/tags/variables"},{label:"Block Scope",permalink:"/code-harbor-hub/docs/tags/block-scope"},{label:"Hoisting",permalink:"/code-harbor-hub/docs/tags/hoisting"},{label:"Redeclaration",permalink:"/code-harbor-hub/docs/tags/redeclaration"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1708763135,formattedLastUpdatedAt:"Feb 24, 2024",sidebarPosition:8,frontMatter:{id:"let-in-javascript",title:"Let Keyword in JavaScript",sidebar_label:"Let Keyword",sidebar_position:8,tags:["JavaScript","let","ES6","Variables","Block Scope","Hoisting","Redeclaration"],description:"What is the let keyword in JavaScript and how to use it."},sidebar:"javascript",previous:{title:"Variables in JavaScript",permalink:"/code-harbor-hub/docs/javascript/variables-in-javascript"},next:{title:"Const Keyword",permalink:"/code-harbor-hub/docs/javascript/const-in-javascript"}},s={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Block Scope",id:"block-scope",level:2},{value:"Redeclaration",id:"redeclaration",level:2},{value:"Hoisting",id:"hoisting",level:2},{value:"Comparison with var",id:"comparison-with-var",level:2},{value:"Block Scope",id:"block-scope-1",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const a={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["In JavaScript, the ",(0,i.jsx)(a.code,{children:"let"})," keyword is used to declare a block-scoped variable. It was introduced in ",(0,i.jsx)("mark",{children:"ECMAScript 6 (ES6)"})," and is the preferred way to declare variables in modern JavaScript."]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.em,{children:(0,i.jsx)(a.strong,{children:"ES6 (ECMAScript 2015) is a major update to JavaScript that adds new syntax and features to the language. It was officially released in June 2015."})})}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(a.p,{children:["The syntax to declare a variable using the ",(0,i.jsx)(a.code,{children:"let"})," keyword is:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Syntax"',children:"let variableName = value;\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Here, ",(0,i.jsx)(a.code,{children:"variableName"})," is the name of the variable and ",(0,i.jsx)(a.code,{children:"value"})," is the value assigned to the variable."]}),"\n",(0,i.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(a.p,{children:["Let's see an example to understand how to use the ",(0,i.jsx)(a.code,{children:"let"})," keyword in JavaScript:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Example"',children:'let name = "John";\nconsole.log(name); // Output: John\n'})}),"\n",(0,i.jsxs)(a.p,{children:["In the above example, we have declared a variable ",(0,i.jsx)(a.code,{children:"name"})," using the ",(0,i.jsx)(a.code,{children:"let"})," keyword and assigned it a value ",(0,i.jsx)(a.code,{children:'"John"'}),". We then printed the value of the variable using ",(0,i.jsx)(a.code,{children:"console.log()"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"block-scope",children:"Block Scope"}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"let"})," keyword is block-scoped, which means that the variable declared using ",(0,i.jsx)(a.code,{children:"let"})," is only available within the block in which it is defined."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Block Scope"',children:"{\n  let x = 10;\n  console.log(x); // Output: 10\n}\n\nconsole.log(x); // Uncaught ReferenceError: x is not defined\n"})}),"\n",(0,i.jsxs)(a.p,{children:["In the above example, the variable ",(0,i.jsx)(a.code,{children:"x"})," is only available within the block in which it is defined. If we try to access it outside the block, it will result in a ",(0,i.jsx)(a.code,{children:"ReferenceError"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"redeclaration",children:"Redeclaration"}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"let"})," keyword does not allow redeclaration of the same variable within the same block scope."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Redeclaration"',children:"let x = 10;\nlet x = 20; // Uncaught SyntaxError: Identifier 'x' has already been declared\n"})}),"\n",(0,i.jsxs)(a.p,{children:["In the above example, we are trying to redeclare the variable ",(0,i.jsx)(a.code,{children:"x"})," within the same block scope, which results in a ",(0,i.jsx)(a.code,{children:"SyntaxError"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"hoisting",children:"Hoisting"}),"\n",(0,i.jsxs)(a.p,{children:["Variables declared using the ",(0,i.jsx)(a.code,{children:"let"})," keyword are not hoisted to the top of their block. This means that you cannot access the variable before it is declared."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Hoisting"',children:"console.log(x); // Uncaught ReferenceError: x is not defined\nlet x = 10;\n"})}),"\n",(0,i.jsxs)(a.p,{children:["In the above example, we are trying to access the variable ",(0,i.jsx)(a.code,{children:"x"})," before it is declared, which results in a ",(0,i.jsx)(a.code,{children:"ReferenceError"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"comparison-with-var",children:"Comparison with var"}),"\n",(0,i.jsxs)(a.p,{children:["The ",(0,i.jsx)(a.code,{children:"let"})," keyword differs from the ",(0,i.jsx)(a.code,{children:"var"})," keyword in terms of block scope, redeclaration, and hoisting."]}),"\n",(0,i.jsx)(a.h3,{id:"block-scope-1",children:"Block Scope"}),"\n",(0,i.jsxs)(a.p,{children:["Variables declared using the ",(0,i.jsx)(a.code,{children:"var"})," keyword are function-scoped or globally-scoped, whereas variables declared using the ",(0,i.jsx)(a.code,{children:"let"})," keyword are block-scoped."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Block Scope"',children:"// var\nfunction varExample() {\n  if (true) {\n    var x = 10;\n  }\n  console.log(x); // Output: 10\n}\n\nvarExample();\n\n// let\nfunction letExample() {\n  if (true) {\n    let x = 10;\n  }\n  console.log(x); // Uncaught ReferenceError: x is not defined\n}\n\nletExample();\n"})}),"\n",(0,i.jsxs)(a.p,{children:["In the above example, the variable ",(0,i.jsx)(a.code,{children:"x"})," declared using the ",(0,i.jsx)(a.code,{children:"var"})," keyword is available outside the block in which it is defined, whereas the variable ",(0,i.jsx)(a.code,{children:"x"})," declared using the ",(0,i.jsx)(a.code,{children:"let"})," keyword is not available outside the block."]}),"\n",(0,i.jsx)(a.admonition,{type:"info",children:(0,i.jsxs)(a.p,{children:["A block is a set of statements enclosed in curly braces ",(0,i.jsx)(a.code,{children:"{}"}),"."]})}),"\n",(0,i.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(a.p,{children:["In this article, we learned about the ",(0,i.jsx)(a.code,{children:"let"})," keyword in JavaScript and how to use it to declare block-scoped variables. We also saw how the ",(0,i.jsx)(a.code,{children:"let"})," keyword differs from the ",(0,i.jsx)(a.code,{children:"var"})," keyword in terms of block scope, redeclaration, and hoisting."]})]})}function h(e={}){const{wrapper:a}={...(0,t.M)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,a,n)=>{n.d(a,{I:()=>l,M:()=>o});var i=n(11504);const t={},r=i.createContext(t);function o(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);