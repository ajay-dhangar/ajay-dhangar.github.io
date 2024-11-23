"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[49089],{50941:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"javascript/precedence-and-associativity-of-operators-in-javascript","title":"Precedence and Associativity of Operators in JavaScript","description":"In this tutorial, we will learn about the precedence and associativity of operators in JavaScript. The precedence of operators determines the order in which operators are evaluated in an expression. The associativity of operators determines the order in which operators of the same precedence are evaluated in an expression. We will see some examples to understand the precedence and associativity of operators in JavaScript.","source":"@site/docs/javascript/precedence.md","sourceDirName":"javascript","slug":"/javascript/precedence-and-associativity-of-operators-in-javascript","permalink":"/docs/javascript/precedence-and-associativity-of-operators-in-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/precedence.md","tags":[{"inline":true,"label":"JavaScript","permalink":"/docs/tags/java-script"},{"inline":true,"label":"Operators","permalink":"/docs/tags/operators"},{"inline":true,"label":"Precedence","permalink":"/docs/tags/precedence"},{"inline":true,"label":"Associativity","permalink":"/docs/tags/associativity"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710935162000,"sidebarPosition":30,"frontMatter":{"id":"precedence-and-associativity-of-operators-in-javascript","title":"Precedence and Associativity of Operators in JavaScript","sidebar_label":"Precedence and Associativity of Operators","sidebar_position":30,"tags":["JavaScript","Operators","Precedence","Associativity"],"description":"In this tutorial, we will learn about the precedence and associativity of operators in JavaScript. The precedence of operators determines the order in which operators are evaluated in an expression. The associativity of operators determines the order in which operators of the same precedence are evaluated in an expression. We will see some examples to understand the precedence and associativity of operators in JavaScript."},"sidebar":"tutorialSidebar","previous":{"title":"Regular Expressions","permalink":"/docs/javascript/reg-exp-in-javascript"},"next":{"title":"Errors","permalink":"/docs/javascript/errors-in-javascript"}}');var r=i(74848),n=i(28453);const l={id:"precedence-and-associativity-of-operators-in-javascript",title:"Precedence and Associativity of Operators in JavaScript",sidebar_label:"Precedence and Associativity of Operators",sidebar_position:30,tags:["JavaScript","Operators","Precedence","Associativity"],description:"In this tutorial, we will learn about the precedence and associativity of operators in JavaScript. The precedence of operators determines the order in which operators are evaluated in an expression. The associativity of operators determines the order in which operators of the same precedence are evaluated in an expression. We will see some examples to understand the precedence and associativity of operators in JavaScript."},d=void 0,c={},o=[{value:"Example: Precedence and Associativity of Operators",id:"example-precedence-and-associativity-of-operators",level:2}];function a(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"In JavaScript, the precedence of operators determines the order in which operators are evaluated in an expression. The precedence of operators is used to determine the grouping of terms in an expression. This affects the order of evaluation of an expression."}),"\n",(0,r.jsx)(t.p,{children:"JavaScript follows the same precedence rules as in mathematics. The following table lists the precedence and associativity of JavaScript operators."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"center"},children:"No."}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Operator"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Description"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Associativity"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"."})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Member Access"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"[]"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Member Access"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"()"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Function Call"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"++"})," ",(0,r.jsx)(t.code,{children:"--"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Postfix Increment, Postfix Decrement"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"++"})," ",(0,r.jsx)(t.code,{children:"--"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Prefix Increment, Prefix Decrement"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Right-to-left"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"!"})," ",(0,r.jsx)(t.code,{children:"~"})," ",(0,r.jsx)(t.code,{children:"+"})," ",(0,r.jsx)(t.code,{children:"-"})," ",(0,r.jsx)(t.code,{children:"typeof"})," ",(0,r.jsx)(t.code,{children:"void"})," ",(0,r.jsx)(t.code,{children:"delete"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Unary Operators"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Right-to-left"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"7"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"**"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Exponentiation"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Right-to-left"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"8"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"*"})," ",(0,r.jsx)(t.code,{children:"/"})," ",(0,r.jsx)(t.code,{children:"%"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Multiplication, Division, Remainder"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"9"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"+"})," ",(0,r.jsx)(t.code,{children:"-"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Addition, Subtraction"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"10"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"<<"})," ",(0,r.jsx)(t.code,{children:">>"})," ",(0,r.jsx)(t.code,{children:">>>"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Bitwise Shifts"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"11"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"<"})," ",(0,r.jsx)(t.code,{children:"<="})," ",(0,r.jsx)(t.code,{children:">"})," ",(0,r.jsx)(t.code,{children:">="})," ",(0,r.jsx)(t.code,{children:"in"})," ",(0,r.jsx)(t.code,{children:"instanceof"})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Relational Operators"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"12"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"=="})," ",(0,r.jsx)(t.code,{children:"!="})," ",(0,r.jsx)(t.code,{children:"==="})," ",(0,r.jsx)(t.code,{children:"!=="})]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Equality Operators"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"13"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"&"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Bitwise AND"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"14"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"^"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Bitwise XOR"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"15"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"`"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"`"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Bitwise OR"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"16"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"&&"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Logical AND"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"17"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"`"}),(0,r.jsx)(t.td,{style:{textAlign:"left"}}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"`"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"18"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:"? :"})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Conditional"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Right-to-left"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"19"}),(0,r.jsxs)(t.td,{style:{textAlign:"left"},children:[(0,r.jsx)(t.code,{children:"="})," ",(0,r.jsx)(t.code,{children:"+="})," ",(0,r.jsx)(t.code,{children:"-="})," ",(0,r.jsx)(t.code,{children:"*="})," ",(0,r.jsx)(t.code,{children:"/="})," ",(0,r.jsx)(t.code,{children:"%="})," ",(0,r.jsx)(t.code,{children:"<<="})," ",(0,r.jsx)(t.code,{children:">>="})," ",(0,r.jsx)(t.code,{children:">>>="})," ",(0,r.jsx)(t.code,{children:"&="})," ",(0,r.jsx)(t.code,{children:"^="})," `"]}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"=`"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Assignment"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"center"},children:"20"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:(0,r.jsx)(t.code,{children:","})}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Comma"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Left-to-right"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The precedence of operators determines the order in which operators are evaluated in an expression. Operators with higher precedence are evaluated first. For example, the multiplication operator ",(0,r.jsx)(t.code,{children:"*"})," has a higher precedence than the addition operator ",(0,r.jsx)(t.code,{children:"+"}),". So, the expression ",(0,r.jsx)(t.code,{children:"2 + 3 * 4"})," is evaluated as ",(0,r.jsx)(t.code,{children:"2 + (3 * 4)"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The associativity of operators determines the order in which operators of the same precedence are evaluated in an expression. For example, the addition operator ",(0,r.jsx)(t.code,{children:"+"})," is left-to-right associative. So, the expression ",(0,r.jsx)(t.code,{children:"2 + 3 + 4"})," is evaluated as ",(0,r.jsx)(t.code,{children:"(2 + 3) + 4"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Let's see some examples to understand the precedence and associativity of operators in JavaScript."}),"\n",(0,r.jsx)(t.h2,{id:"example-precedence-and-associativity-of-operators",children:"Example: Precedence and Associativity of Operators"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="app.js"',children:"// Precedence and Associativity of Operators\n\n// Multiplication has higher precedence than addition\n\nlet result1 = 2 + 3 * 4; // 2 + (3 * 4) = 2 + 12 = 14 \n\nconsole.log(result1); // Output: 14\n\n// Addition is left-to-right associative\n\nlet result2 = 2 + 3 + 4; // (2 + 3) + 4 = 5 + 4 = 9\n\nconsole.log(result2); // Output: 9\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In this example, we have used the precedence and associativity of operators to evaluate the expressions ",(0,r.jsx)(t.code,{children:"2 + 3 * 4"})," and ",(0,r.jsx)(t.code,{children:"2 + 3 + 4"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"When you run the above code, you will get the following output."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:'title="Output"',children:"14\n9\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the first expression ",(0,r.jsx)(t.code,{children:"2 + 3 * 4"}),", the multiplication operator ",(0,r.jsx)(t.code,{children:"*"})," has a higher precedence than the addition operator ",(0,r.jsx)(t.code,{children:"+"}),". So, the expression is evaluated as ",(0,r.jsx)(t.code,{children:"2 + (3 * 4)"}),", which results in ",(0,r.jsx)(t.code,{children:"14"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In the second expression ",(0,r.jsx)(t.code,{children:"2 + 3 + 4"}),", the addition operator ",(0,r.jsx)(t.code,{children:"+"})," is left-to-right associative. So, the expression is evaluated as ",(0,r.jsx)(t.code,{children:"(2 + 3) + 4"}),", which results in ",(0,r.jsx)(t.code,{children:"9"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"That's all for the precedence and associativity of operators in JavaScript. You can use the precedence and associativity of operators to evaluate complex expressions in JavaScript."}),"\n",(0,r.jsx)(t.p,{children:"I hope this tutorial helps you to understand the precedence and associativity of operators in JavaScript."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>d});var s=i(96540);const r={},n=s.createContext(r);function l(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);