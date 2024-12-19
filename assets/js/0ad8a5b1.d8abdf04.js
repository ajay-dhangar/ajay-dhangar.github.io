"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[14591],{11679:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"javascript/datatypes/non-primitive-data-types/function-datatypes-in-javascript","title":"Function Datatypes in JavaScript","description":"What is a function in JavaScript? How to define a function in JavaScript? What are the different ways to define a function in JavaScript? What are the different types of function in JavaScript? Learn all about functions in JavaScript in this guide.","source":"@site/docs/javascript/datatypes/non-primitive-data-types/function-js.mdx","sourceDirName":"javascript/datatypes/non-primitive-data-types","slug":"/javascript/datatypes/non-primitive-data-types/function-datatypes-in-javascript","permalink":"/docs/javascript/datatypes/non-primitive-data-types/function-datatypes-in-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/datatypes/non-primitive-data-types/function-js.mdx","tags":[{"inline":true,"label":"JavaScript","permalink":"/docs/tags/java-script"},{"inline":true,"label":"Function","permalink":"/docs/tags/function"},{"inline":true,"label":"Datatypes","permalink":"/docs/tags/datatypes"},{"inline":true,"label":"JavaScript Tutorial","permalink":"/docs/tags/java-script-tutorial"},{"inline":true,"label":"JavaScript Function","permalink":"/docs/tags/java-script-function"},{"inline":true,"label":"JavaScript Function Datatypes","permalink":"/docs/tags/java-script-function-datatypes"},{"inline":true,"label":"JavaScript Function","permalink":"/docs/tags/java-script-function"},{"inline":true,"label":"Types of Function","permalink":"/docs/tags/types-of-function"},{"inline":true,"label":"JavaScript Function Types","permalink":"/docs/tags/java-script-function-types"},{"inline":true,"label":"JavaScript Function Expression","permalink":"/docs/tags/java-script-function-expression"},{"inline":true,"label":"JavaScript Arrow Function","permalink":"/docs/tags/java-script-arrow-function"},{"inline":true,"label":"JavaScript IIFE","permalink":"/docs/tags/java-script-iife"},{"inline":true,"label":"JavaScript Generator Function","permalink":"/docs/tags/java-script-generator-function"},{"inline":true,"label":"JavaScript Function Parameters","permalink":"/docs/tags/java-script-function-parameters"},{"inline":true,"label":"JavaScript Function Return Value","permalink":"/docs/tags/java-script-function-return-value"},{"inline":true,"label":"JavaScript Function Definition","permalink":"/docs/tags/java-script-function-definition"},{"inline":true,"label":"JavaScript Function Syntax","permalink":"/docs/tags/java-script-function-syntax"},{"inline":true,"label":"JavaScript Function Example","permalink":"/docs/tags/java-script-function-example"},{"inline":true,"label":"JavaScript Function Tutorial","permalink":"/docs/tags/java-script-function-tutorial"},{"inline":true,"label":"JavaScript Function Basics","permalink":"/docs/tags/java-script-function-basics"},{"inline":true,"label":"JavaScript Function Introduction","permalink":"/docs/tags/java-script-function-introduction"},{"inline":true,"label":"JavaScript Function Guide","permalink":"/docs/tags/java-script-function-guide"},{"inline":true,"label":"JavaScript Function Fundamentals","permalink":"/docs/tags/java-script-function-fundamentals"},{"inline":true,"label":"JavaScript Function Overview","permalink":"/docs/tags/java-script-function-overview"},{"inline":true,"label":"JavaScript Function Concepts","permalink":"/docs/tags/java-script-function-concepts"},{"inline":true,"label":"JavaScript Function Explained","permalink":"/docs/tags/java-script-function-explained"},{"inline":true,"label":"JavaScript Function Quick Start","permalink":"/docs/tags/java-script-function-quick-start"},{"inline":true,"label":"JavaScript Function Learning","permalink":"/docs/tags/java-script-function-learning"},{"inline":true,"label":"JavaScript","permalink":"/docs/tags/java-script"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1709230981000,"sidebarPosition":3,"frontMatter":{"id":"function-datatypes-in-javascript","title":"Function Datatypes in JavaScript","sidebar_label":"Function","sidebar_position":3,"tags":["JavaScript","Function","Datatypes","JavaScript Tutorial","JavaScript Function","JavaScript Function Datatypes","JavaScript Function","Types of Function","JavaScript Function Types","JavaScript Function Expression","JavaScript Arrow Function","JavaScript IIFE","JavaScript Generator Function","JavaScript Function Parameters","JavaScript Function Return Value","JavaScript Function Definition","JavaScript Function Syntax","JavaScript Function Example","JavaScript Function Tutorial","JavaScript Function Basics","JavaScript Function Introduction","JavaScript Function Guide","JavaScript Function Fundamentals","JavaScript Function Overview","JavaScript Function Concepts","JavaScript Function Explained","JavaScript Function Quick Start","JavaScript Function Learning","JavaScript"],"description":"What is a function in JavaScript? How to define a function in JavaScript? What are the different ways to define a function in JavaScript? What are the different types of function in JavaScript? Learn all about functions in JavaScript in this guide."},"sidebar":"tutorialSidebar","previous":{"title":"Array","permalink":"/docs/javascript/datatypes/non-primitive-data-types/array-datatypes-in-javascript"},"next":{"title":"Date","permalink":"/docs/javascript/datatypes/non-primitive-data-types/date-datatypes-in-javascript"}}');var i=t(74848),o=t(28453);const c={id:"function-datatypes-in-javascript",title:"Function Datatypes in JavaScript",sidebar_label:"Function",sidebar_position:3,tags:["JavaScript","Function","Datatypes","JavaScript Tutorial","JavaScript Function","JavaScript Function Datatypes","JavaScript Function","Types of Function","JavaScript Function Types","JavaScript Function Expression","JavaScript Arrow Function","JavaScript IIFE","JavaScript Generator Function","JavaScript Function Parameters","JavaScript Function Return Value","JavaScript Function Definition","JavaScript Function Syntax","JavaScript Function Example","JavaScript Function Tutorial","JavaScript Function Basics","JavaScript Function Introduction","JavaScript Function Guide","JavaScript Function Fundamentals","JavaScript Function Overview","JavaScript Function Concepts","JavaScript Function Explained","JavaScript Function Quick Start","JavaScript Function Learning","JavaScript"],description:"What is a function in JavaScript? How to define a function in JavaScript? What are the different ways to define a function in JavaScript? What are the different types of function in JavaScript? Learn all about functions in JavaScript in this guide."},r=void 0,s={},l=[{value:"Defining a Function",id:"defining-a-function",level:2},{value:"Function Parameters",id:"function-parameters",level:2},{value:"Function Return Value",id:"function-return-value",level:2},{value:"Function Expression",id:"function-expression",level:2},{value:"Named Function Expression",id:"named-function-expression",level:3},{value:"Anonymous Function Expression",id:"anonymous-function-expression",level:3},{value:"Arrow Function",id:"arrow-function",level:2},{value:"IIFE (Immediately Invoked Function Expression)",id:"iife-immediately-invoked-function-expression",level:2},{value:"Generator Function",id:"generator-function",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(n){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["In JavaScript, a function is a block of code that can be called and executed. It is a reusable piece of code that can be called multiple times. Functions are used to perform a specific task and can be defined using the ",(0,i.jsx)(e.code,{children:"function"})," keyword."]}),"\n",(0,i.jsx)(e.h2,{id:"defining-a-function",children:"Defining a Function"}),"\n",(0,i.jsxs)(e.p,{children:["A function can be defined using the ",(0,i.jsx)(e.code,{children:"function"})," keyword followed by the function name and a pair of parentheses. The function body is enclosed within a pair of curly braces ",(0,i.jsx)(e.code,{children:"{}"}),"."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Syntax"',children:"function functionName() {\n  // function body\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example of a simple function that logs a message to the console:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Example"',children:"function greet() {\n  console.log('Hello, World!');\n}\n\ngreet(); // Output: Hello, World!\n"})}),"\n",(0,i.jsx)(e.h2,{id:"function-parameters",children:"Function Parameters"}),"\n",(0,i.jsx)(e.p,{children:"A function can accept parameters, which are variables that are passed to the function when it is called. These parameters are used within the function to perform a specific task."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Syntax"',children:"function functionName(parameter1, parameter2, ...) {\n  // function body\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example of a function that accepts a parameter:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Example"',children:"function greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet('John'); // Output: Hello, John!\ngreet('Jane'); // Output: Hello, Jane!\n"})}),"\n",(0,i.jsx)(e.h2,{id:"function-return-value",children:"Function Return Value"}),"\n",(0,i.jsxs)(e.p,{children:["A function can return a value using the ",(0,i.jsx)(e.code,{children:"return"})," statement. The return value can be used by the calling code to perform further operations."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Syntax"',children:"function functionName() {\n  // function body\n  return value;\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example of a function that returns a value:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Example"',children:"function add(a, b) {\n  return a + b;\n}\n\nlet result = add(2, 3);\nconsole.log(result); // Output: 5\n"})}),"\n",(0,i.jsx)(e.h2,{id:"function-expression",children:"Function Expression"}),"\n",(0,i.jsx)(e.p,{children:"A function can also be defined using a function expression, which is a function that is assigned to a variable. Function expressions can be named or anonymous."}),"\n",(0,i.jsx)(e.h3,{id:"named-function-expression",children:"Named Function Expression"}),"\n",(0,i.jsx)(e.p,{children:"A named function expression is a function expression that has a name. The name can be used within the function to refer to itself."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Syntax"',children:"let functionName = function() {\n  // function body\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example of a named function expression:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Example"',children:"let greet = function sayHello() {\n  console.log('Hello, World!');\n};\n\ngreet(); // Output: Hello, World!\n\n// The function name can be used within the function\n\nsayHello(); // ReferenceError: sayHello is not defined\n"})}),"\n",(0,i.jsx)(e.h3,{id:"anonymous-function-expression",children:"Anonymous Function Expression"}),"\n",(0,i.jsx)(e.p,{children:"An anonymous function expression is a function expression that does not have a name. It is assigned to a variable and can be called using the variable name."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Syntax"',children:"let functionName = function() {\n  // function body\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example of an anonymous function expression:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Example"',children:"let greet = function() {\n  console.log('Hello, World!');\n};\n\ngreet(); // Output: Hello, World!\n"})}),"\n",(0,i.jsx)(e.h2,{id:"arrow-function",children:"Arrow Function"}),"\n",(0,i.jsxs)(e.p,{children:["An arrow function is a concise way to define a function using the ",(0,i.jsx)(e.code,{children:"=>"})," syntax. It is a shorthand for writing function expressions."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Syntax"',children:"let functionName = (parameter1, parameter2, ...) => {\n  // function body\n};\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example of an arrow function:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Example"',children:"let greet = name => {\n  console.log(`Hello, ${name}!`);\n};\n\ngreet('John'); // Output: Hello, John!\n\n// If the function body contains only one statement, the curly braces can be omitted\n\nlet add = (a, b) => a + b;\n\nlet result = add(2, 3);\n\nconsole.log(result); // Output: 5\n"})}),"\n",(0,i.jsx)(e.h2,{id:"iife-immediately-invoked-function-expression",children:"IIFE (Immediately Invoked Function Expression)"}),"\n",(0,i.jsx)(e.p,{children:"An IIFE is a function that is defined and called immediately. It is used to create a new scope and to avoid polluting the global scope."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Syntax"',children:"(function() {\n  // function body\n})();\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example of an IIFE:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Example"',children:"(function() {\n  let message = 'Hello, World!';\n  console.log(message);\n})();\n\n// Output: Hello, World!\n\nconsole.log(message); // ReferenceError: message is not defined\n"})}),"\n",(0,i.jsx)(e.h2,{id:"generator-function",children:"Generator Function"}),"\n",(0,i.jsxs)(e.p,{children:["A generator function is a special type of function that can be paused and resumed. It is defined using the ",(0,i.jsx)(e.code,{children:"function*"})," keyword and the ",(0,i.jsx)(e.code,{children:"yield"})," keyword is used to pause the function."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Syntax"',children:"function* functionName() {\n  // function body\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"Here's an example of a generator function:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",metastring:'title="Example"',children:"function* count() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\nlet generator = count();\n\nconsole.log(generator.next().value); // Output: 1\nconsole.log(generator.next().value); // Output: 2\nconsole.log(generator.next().value); // Output: 3\nconsole.log(generator.next().value); // Output: undefined\n"})}),"\n",(0,i.jsx)(e.admonition,{title:"\ud83d\udcdd Note",type:"info",children:(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Function Declaration"}),": A function declaration is hoisted, which means it is available before it is defined. It can be called before it is defined."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Function Expression"}),": A function expression is not hoisted, which means it is not available before it is defined. It cannot be called before it is defined."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Arrow Function"}),": An arrow function does not have its own ",(0,i.jsx)(e.code,{children:"this"}),", ",(0,i.jsx)(e.code,{children:"arguments"}),", ",(0,i.jsx)(e.code,{children:"super"}),", or ",(0,i.jsx)(e.code,{children:"new.target"}),". It uses the ",(0,i.jsx)(e.code,{children:"this"}),", ",(0,i.jsx)(e.code,{children:"arguments"}),", ",(0,i.jsx)(e.code,{children:"super"}),", and ",(0,i.jsx)(e.code,{children:"new.target"})," of the enclosing scope."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"IIFE"}),": An IIFE is used to create a new scope and to avoid polluting the global scope. It is defined and called immediately."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Generator Function"}),": A generator function is a special type of function that can be paused and resumed. It is defined using the ",(0,i.jsx)(e.code,{children:"function*"})," keyword and the ",(0,i.jsx)(e.code,{children:"yield"})," keyword is used to pause the function."]}),"\n"]})}),"\n",(0,i.jsx)(e.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(e.p,{children:"In this tutorial, we learned about functions in JavaScript. We learned how to define a function, how to pass parameters to a function, how to return a value from a function, and the different ways to define a function in JavaScript. We also learned about function expressions, arrow functions, IIFE, and generator functions. Functions are an important concept in JavaScript and are used to perform a specific task. They are reusable and can be called multiple times."})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>c,x:()=>r});var a=t(96540);const i={},o=a.createContext(i);function c(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);