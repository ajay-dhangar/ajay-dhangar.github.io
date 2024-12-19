"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[4112],{81529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"javascript/breack-statement-in-javascript","title":"Break Statement in JavaScript","description":"In this tutorial, we will learn about the break statement in JavaScript. We will learn how to use the break statement to exit a loop prematurely in JavaScript.","source":"@site/docs/javascript/breack-statement.md","sourceDirName":"javascript","slug":"/javascript/breack-statement-in-javascript","permalink":"/docs/javascript/breack-statement-in-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/breack-statement.md","tags":[{"inline":true,"label":"JavaScript","permalink":"/docs/tags/java-script"},{"inline":true,"label":"Break","permalink":"/docs/tags/break"},{"inline":true,"label":"Statement","permalink":"/docs/tags/statement"},{"inline":true,"label":"Control","permalink":"/docs/tags/control"},{"inline":true,"label":"Flow","permalink":"/docs/tags/flow"},{"inline":true,"label":"Loop","permalink":"/docs/tags/loop"},{"inline":true,"label":"Iteration","permalink":"/docs/tags/iteration"},{"inline":true,"label":"Iterative","permalink":"/docs/tags/iterative"},{"inline":true,"label":"Statements","permalink":"/docs/tags/statements"},{"inline":true,"label":"Loops","permalink":"/docs/tags/loops"},{"inline":true,"label":"Iteration","permalink":"/docs/tags/iteration"},{"inline":true,"label":"Iterating","permalink":"/docs/tags/iterating"},{"inline":true,"label":"Iterations","permalink":"/docs/tags/iterations"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710868693000,"sidebarPosition":25,"frontMatter":{"id":"breack-statement-in-javascript","title":"Break Statement in JavaScript","sidebar_label":"Break","sidebar_position":25,"tags":["JavaScript","Break","Statement","Control","Flow","Loop","Iteration","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],"description":"In this tutorial, we will learn about the break statement in JavaScript. We will learn how to use the break statement to exit a loop prematurely in JavaScript."},"sidebar":"tutorialSidebar","previous":{"title":"While Loop","permalink":"/docs/javascript/while-loop-in-javascript"},"next":{"title":"Sets","permalink":"/docs/javascript/set-in-javascript"}}');var a=n(74848),o=n(28453);const s={id:"breack-statement-in-javascript",title:"Break Statement in JavaScript",sidebar_label:"Break",sidebar_position:25,tags:["JavaScript","Break","Statement","Control","Flow","Loop","Iteration","Iterative","Statements","Loops","Iteration","Iterating","Iterations"],description:"In this tutorial, we will learn about the break statement in JavaScript. We will learn how to use the break statement to exit a loop prematurely in JavaScript."},r=void 0,l={},c=[{value:"Syntax",id:"syntax",level:2},{value:"Flow Chart of the <code>break</code> Statement",id:"flow-chart-of-the-break-statement",level:2},{value:"Example",id:"example",level:2},{value:"Example",id:"example-1",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In JavaScript, the ",(0,a.jsx)(t.code,{children:"break"})," statement is used to exit a loop prematurely. It is often used when you want to terminate the loop based on a certain condition."]}),"\n",(0,a.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsxs)(t.p,{children:["The syntax of the ",(0,a.jsx)(t.code,{children:"break"})," statement is as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="app.js"',children:"for (let i = 1; i <= 5; i++) {\n  if (i === 3) {\n    break;\n  }\n  console.log(i);\n}\n"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement is used to exit the loop prematurely."]}),"\n",(0,a.jsxs)(t.li,{children:["It can be used inside a ",(0,a.jsx)(t.code,{children:"for"}),", ",(0,a.jsx)(t.code,{children:"while"}),", or ",(0,a.jsx)(t.code,{children:"do...while"})," loop."]}),"\n",(0,a.jsxs)(t.li,{children:["When the ",(0,a.jsx)(t.code,{children:"break"})," statement is encountered, the loop is terminated, and the program continues with the next statement after the loop."]}),"\n",(0,a.jsxs)(t.li,{children:["If the loop is inside a function, the ",(0,a.jsx)(t.code,{children:"break"})," statement will terminate the loop and the function."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement should be used only within a loop, otherwise, it will produce a syntax error."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to exit a loop based on a certain condition, such as a specific value or a user input."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to avoid an infinite loop by providing a way to exit the loop when a certain condition is met."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to optimize the performance of a loop by avoiding unnecessary iterations."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to exit a loop based on a certain condition, such as a specific value or a user input."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to avoid an infinite loop by providing a way to exit the loop when a certain condition is met."]}),"\n"]}),"\n",(0,a.jsxs)(t.h2,{id:"flow-chart-of-the-break-statement",children:["Flow Chart of the ",(0,a.jsx)(t.code,{children:"break"})," Statement"]}),"\n",(0,a.jsx)(t.mermaid,{value:"graph LR;\n    Start([Start]) --\x3e Condition{Condition};\n    Condition -- True --\x3e Action1[Action1];\n    Condition -- False --\x3e Action2[Action2];\n    Action1 --\x3e Break{Break used?};\n    Break -- Yes --\x3e End((End));\n    Break -- No --\x3e Continue[Continue];\n    Continue -- Next --\x3e Condition;\n    Action2 --\x3e End([End]);\n    End --\x3e Stop([Stop]);\n"}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["The following example demonstrates how to use the ",(0,a.jsx)(t.code,{children:"break"})," statement to exit a loop based on a certain condition:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="app.js"',children:"for (let i = 1; i <= 5; i++) {\n  if (i === 3) {\n    break;\n  }\n  console.log(i);\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this example, the ",(0,a.jsx)(t.code,{children:"for"})," loop initializes the loop variable ",(0,a.jsx)(t.code,{children:"i"})," to ",(0,a.jsx)(t.code,{children:"1"}),". It then checks if ",(0,a.jsx)(t.code,{children:"i"})," is less than or equal to ",(0,a.jsx)(t.code,{children:"5"}),". If the condition is ",(0,a.jsx)(t.code,{children:"true"}),", it executes the code inside the loop and increments ",(0,a.jsx)(t.code,{children:"i"})," by ",(0,a.jsx)(t.code,{children:"1"}),". However, when ",(0,a.jsx)(t.code,{children:"i"})," is equal to ",(0,a.jsx)(t.code,{children:"3"}),", the ",(0,a.jsx)(t.code,{children:"break"})," statement is encountered, and the loop is terminated. The program then continues with the next statement after the loop."]}),"\n",(0,a.jsx)(t.p,{children:"The output of the above example will be:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plaintext",metastring:'title="Output"',children:"1\n2\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this example, the loop is terminated when ",(0,a.jsx)(t.code,{children:"i"})," is equal to ",(0,a.jsx)(t.code,{children:"3"}),", and the program continues with the next statement after the loop. The numbers ",(0,a.jsx)(t.code,{children:"1"})," and ",(0,a.jsx)(t.code,{children:"2"})," are printed to the console before the loop is terminated."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to exit a loop based on a certain condition, such as a specific value or a user input. It is often used to optimize the performance of a loop by avoiding unnecessary iterations. The ",(0,a.jsx)(t.code,{children:"break"})," statement should be used with caution, as it can make the code harder to read and understand. It is recommended to use the ",(0,a.jsx)(t.code,{children:"break"})," statement sparingly and only when necessary."]}),"\n",(0,a.jsx)(t.h2,{id:"example-1",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["The following example demonstrates how to use the ",(0,a.jsx)(t.code,{children:"break"})," statement to exit a loop based on a certain condition:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title="app.js"',children:"let numbers = [1, 2, 3, 4, 5];\nfor (let i = 0; i < numbers.length; i++) {\n  if (numbers[i] === 3) {\n    break;\n  }\n  console.log(numbers[i]);\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this example, the ",(0,a.jsx)(t.code,{children:"for"})," loop iterates over the elements of the ",(0,a.jsx)(t.code,{children:"numbers"})," array. It checks if the current element is equal to ",(0,a.jsx)(t.code,{children:"3"}),". If the condition is ",(0,a.jsx)(t.code,{children:"true"}),", the ",(0,a.jsx)(t.code,{children:"break"})," statement is encountered, and the loop is terminated. The program then continues with the next statement after the loop."]}),"\n",(0,a.jsx)(t.p,{children:"The output of the above example will be:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plaintext",metastring:'title="Output"',children:"1\n2\n"})}),"\n",(0,a.jsxs)(t.p,{children:["In this example, the loop is terminated when the current element is equal to ",(0,a.jsx)(t.code,{children:"3"}),", and the program continues with the next statement after the loop. The numbers ",(0,a.jsx)(t.code,{children:"1"})," and ",(0,a.jsx)(t.code,{children:"2"})," are printed to the console before the loop is terminated."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to exit a loop based on a certain condition, such as a specific value or a user input. It is often used to optimize the performance of a loop by avoiding unnecessary iterations. The ",(0,a.jsx)(t.code,{children:"break"})," statement should be used with caution, as it can make the code harder to read and understand. It is recommended to use the ",(0,a.jsx)(t.code,{children:"break"})," statement sparingly and only when necessary."]}),"\n",(0,a.jsx)(t.admonition,{title:"\ud83e\udd14 Remember",type:"tip",children:(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement is used to exit a loop prematurely."]}),"\n",(0,a.jsxs)(t.li,{children:["It can be used inside a ",(0,a.jsx)(t.code,{children:"for"}),", ",(0,a.jsx)(t.code,{children:"while"}),", or ",(0,a.jsx)(t.code,{children:"do...while"})," loop."]}),"\n",(0,a.jsxs)(t.li,{children:["When the ",(0,a.jsx)(t.code,{children:"break"})," statement is encountered, the loop is terminated, and the program continues with the next statement after the loop."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement should be used only within a loop, otherwise, it will produce a syntax error."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to exit a loop based on a certain condition, such as a specific value or a user input."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to avoid an infinite loop by providing a way to exit the loop when a certain condition is met."]}),"\n",(0,a.jsxs)(t.li,{children:["The ",(0,a.jsx)(t.code,{children:"break"})," statement can be used to optimize the performance of a loop by avoiding unnecessary iterations."]}),"\n"]})}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial, we learned about the ",(0,a.jsx)(t.code,{children:"break"})," statement in JavaScript. We learned how to use the ",(0,a.jsx)(t.code,{children:"break"})," statement to exit a loop prematurely based on a certain condition. We also learned about the syntax of the ",(0,a.jsx)(t.code,{children:"break"})," statement and how to use it to optimize the performance of a loop. We also learned about the best practices for using the ",(0,a.jsx)(t.code,{children:"break"})," statement and when to use it sparingly."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);