"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[38406],{12224:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"javascript/datatypes/primitive-data-types/null-in-javascript","title":"Null Data Types in JavaScript","description":"What is the null data type in JavaScript? Learn about the null data type and how to create null in JavaScript.","source":"@site/docs/javascript/datatypes/primitive-data-types/null-js.md","sourceDirName":"javascript/datatypes/primitive-data-types","slug":"/javascript/datatypes/primitive-data-types/null-in-javascript","permalink":"/docs/javascript/datatypes/primitive-data-types/null-in-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/datatypes/primitive-data-types/null-js.md","tags":[{"inline":true,"label":"JavaScript","permalink":"/docs/tags/java-script"},{"inline":true,"label":"Data Types","permalink":"/docs/tags/data-types"},{"inline":true,"label":"Primitive Data Types","permalink":"/docs/tags/primitive-data-types"},{"inline":true,"label":"Null","permalink":"/docs/tags/null"},{"inline":true,"label":"null data type","permalink":"/docs/tags/null-data-type"},{"inline":true,"label":"null in JavaScript","permalink":"/docs/tags/null-in-java-script"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1709121109000,"sidebarPosition":5,"frontMatter":{"id":"null-in-javascript","title":"Null Data Types in JavaScript","sidebar_label":"Null","sidebar_position":5,"tags":["JavaScript","Data Types","Primitive Data Types","Null","null data type","null in JavaScript"],"description":"What is the null data type in JavaScript? Learn about the null data type and how to create null in JavaScript."},"sidebar":"tutorialSidebar","previous":{"title":"Undefined","permalink":"/docs/javascript/datatypes/primitive-data-types/undefined-in-javascript"},"next":{"title":"BigInt","permalink":"/docs/javascript/datatypes/primitive-data-types/bigint-in-javascript"}}');var i=t(74848),l=t(28453);const s={id:"null-in-javascript",title:"Null Data Types in JavaScript",sidebar_label:"Null",sidebar_position:5,tags:["JavaScript","Data Types","Primitive Data Types","Null","null data type","null in JavaScript"],description:"What is the null data type in JavaScript? Learn about the null data type and how to create null in JavaScript."},r=void 0,c={},d=[{value:"What is Null in JavaScript?",id:"what-is-null-in-javascript",level:2},{value:"How to Create Null in JavaScript?",id:"how-to-create-null-in-javascript",level:2},{value:"Checking for Null in JavaScript",id:"checking-for-null-in-javascript",level:2},{value:"Null vs. Undefined",id:"null-vs-undefined",level:2},{value:"Conclusion",id:"conclusion",level:2}];function o(e){const a={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"null"})," is a primitive data type in JavaScript. It represents a null value. It is used to represent an empty value or no value at all."]}),"\n",(0,i.jsx)(a.mermaid,{value:"graph LR;\n    A(Null)--\x3e|Represents a null value| B(NullValue);"}),"\n",(0,i.jsx)(a.h2,{id:"what-is-null-in-javascript",children:"What is Null in JavaScript?"}),"\n",(0,i.jsxs)(a.p,{children:["In JavaScript, ",(0,i.jsx)(a.code,{children:"null"})," is a primitive data type that represents a null value. It is used to represent an empty value or no value at all."]}),"\n",(0,i.jsx)(a.h2,{id:"how-to-create-null-in-javascript",children:"How to Create Null in JavaScript?"}),"\n",(0,i.jsxs)(a.p,{children:["You can create ",(0,i.jsx)(a.code,{children:"null"})," in JavaScript using the following syntax:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Creating Null in JavaScript"',children:"let data = null;\n\nconsole.log(data); // Output: null\n"})}),"\n",(0,i.jsxs)(a.p,{children:["In the above example, the variable ",(0,i.jsx)(a.code,{children:"data"})," is assigned the value ",(0,i.jsx)(a.code,{children:"null"}),". When you log the value of ",(0,i.jsx)(a.code,{children:"data"}),", it will output ",(0,i.jsx)(a.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(a.h2,{id:"checking-for-null-in-javascript",children:"Checking for Null in JavaScript"}),"\n",(0,i.jsxs)(a.p,{children:["You can check if a variable is ",(0,i.jsx)(a.code,{children:"null"})," using the ",(0,i.jsx)(a.code,{children:"typeof"})," operator or by comparing the variable to ",(0,i.jsx)(a.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-js",metastring:'title="Checking for Null in JavaScript"',children:"let data = null;\n\nconsole.log(typeof data); // Output: object\n\nif (data === null) {\n  console.log('The variable is null');\n} else {\n  console.log('The variable is not null');\n}\n"})}),"\n",(0,i.jsxs)(a.p,{children:["In the above example, the ",(0,i.jsx)(a.code,{children:"typeof"})," operator returns ",(0,i.jsx)(a.code,{children:"object"})," for the ",(0,i.jsx)(a.code,{children:"data"})," variable, and the comparison ",(0,i.jsx)(a.code,{children:"data === null"})," returns ",(0,i.jsx)(a.code,{children:"true"}),", indicating that the variable is ",(0,i.jsx)(a.code,{children:"null"}),"."]}),"\n",(0,i.jsxs)(a.admonition,{title:"\ud83d\udcddNote",type:"info",children:[(0,i.jsxs)(a.p,{children:["In JavaScript, ",(0,i.jsx)(a.code,{children:"null"})," is of type ",(0,i.jsx)(a.code,{children:"object"}),". This is a bug in the language that has been kept for compatibility reasons."]}),(0,i.jsx)(a.h2,{id:"null-vs-undefined",children:"Null vs. Undefined"}),(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"null"})," and ",(0,i.jsx)(a.code,{children:"undefined"})," are both used to represent the absence of a value in JavaScript. However, they are not the same."]}),(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"null"})," is a primitive data type that represents a null value. It is often used to explicitly set a variable to have no value."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.code,{children:"undefined"})," is a primitive data type that represents an undefined value. If a variable has been declared, but has not been assigned a value, it is of type ",(0,i.jsx)(a.code,{children:"undefined"}),"."]}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(a.p,{children:["In this article, you learned about the ",(0,i.jsx)(a.code,{children:"null"})," data type in JavaScript, how to create ",(0,i.jsx)(a.code,{children:"null"})," in JavaScript, and how to check for ",(0,i.jsx)(a.code,{children:"null"})," in JavaScript. You also learned that ",(0,i.jsx)(a.code,{children:"null"})," is a primitive data type that represents a null value and is used to represent an empty value or no value at all."]})]})}function p(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>r});var n=t(96540);const i={},l=n.createContext(i);function s(e){const a=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:a},e.children)}}}]);