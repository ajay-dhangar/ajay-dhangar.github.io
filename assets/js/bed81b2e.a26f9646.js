"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[84642],{78828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"javascript/objects-in-javascript","title":"Objects in JavaScript","description":"In this tutorial, we will learn about objects in JavaScript. We will learn how to create objects, access object properties, and methods. We will also learn about object destructuring, object methods, and object prototypes.","source":"@site/docs/javascript/objects.md","sourceDirName":"javascript","slug":"/javascript/objects-in-javascript","permalink":"/docs/javascript/objects-in-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/objects.md","tags":[{"inline":true,"label":"JavaScript","permalink":"/docs/tags/java-script"},{"inline":true,"label":"Objects","permalink":"/docs/tags/objects"},{"inline":true,"label":"Object Literals","permalink":"/docs/tags/object-literals"},{"inline":true,"label":"Constructor Function","permalink":"/docs/tags/constructor-function"},{"inline":true,"label":"Dot Notation","permalink":"/docs/tags/dot-notation"},{"inline":true,"label":"Bracket Notation","permalink":"/docs/tags/bracket-notation"},{"inline":true,"label":"Object Destructuring","permalink":"/docs/tags/object-destructuring"},{"inline":true,"label":"Object Methods","permalink":"/docs/tags/object-methods"},{"inline":true,"label":"Object Prototypes","permalink":"/docs/tags/object-prototypes"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710237590000,"sidebarPosition":16,"frontMatter":{"id":"objects-in-javascript","title":"Objects in JavaScript","sidebar_label":"Objects","sidebar_position":16,"tags":["JavaScript","Objects","Object Literals","Constructor Function","Dot Notation","Bracket Notation","Object Destructuring","Object Methods","Object Prototypes"],"description":"In this tutorial, we will learn about objects in JavaScript. We will learn how to create objects, access object properties, and methods. We will also learn about object destructuring, object methods, and object prototypes."},"sidebar":"tutorialSidebar","previous":{"title":"Arrays","permalink":"/docs/javascript/arrays-in-javascript"},"next":{"title":"Math","permalink":"/docs/javascript/math-in-javascript"}}');var s=t(74848),a=t(28453);const c={id:"objects-in-javascript",title:"Objects in JavaScript",sidebar_label:"Objects",sidebar_position:16,tags:["JavaScript","Objects","Object Literals","Constructor Function","Dot Notation","Bracket Notation","Object Destructuring","Object Methods","Object Prototypes"],description:"In this tutorial, we will learn about objects in JavaScript. We will learn how to create objects, access object properties, and methods. We will also learn about object destructuring, object methods, and object prototypes."},r=void 0,i={},l=[{value:"Creating Objects",id:"creating-objects",level:2},{value:"Object Literal",id:"object-literal",level:3},{value:"Constructor Function",id:"constructor-function",level:3},{value:"Accessing Object Properties",id:"accessing-object-properties",level:2},{value:"Dot Notation",id:"dot-notation",level:3},{value:"Bracket Notation",id:"bracket-notation",level:3},{value:"Object Destructuring",id:"object-destructuring",level:2},{value:"Object Methods",id:"object-methods",level:2},{value:"Object Prototypes",id:"object-prototypes",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In JavaScript, an object is a standalone entity, with properties and type. It is a collection of key-value pairs. The keys are strings and the values can be anything. An object can be created using object literal or constructor function."}),"\n",(0,s.jsx)(n.h2,{id:"creating-objects",children:"Creating Objects"}),"\n",(0,s.jsx)(n.p,{children:"There are two ways to create objects in JavaScript:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Object Literal"}),": The object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ",(0,s.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Constructor Function"}),": The constructor function is used to create an object. It is a function that is used to create an object."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"object-literal",children:"Object Literal"}),"\n",(0,s.jsxs)(n.p,{children:["The object literal is the easiest way to create an object. It is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ",(0,s.jsx)(n.code,{children:"{}"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of creating an object using object literal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"// Creating an object using object literal\nlet person = {\n  name: 'John Doe',\n  age: 30,\n  email: 'john@example.com',\n    greet: function() {\n        return `Hello, my name is ${this.name}`;\n    }\n\n};\n\nconsole.log(person.name); // John Doe\nconsole.log(person.age); // 30\nconsole.log(person.email); // john@example.com\nconsole.log(person.greet()); // Hello, my name is John Doe\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we have created an object ",(0,s.jsx)(n.code,{children:"person"})," using object literal. The object has properties ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"age"}),", ",(0,s.jsx)(n.code,{children:"email"}),", and a method ",(0,s.jsx)(n.code,{children:"greet"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"constructor-function",children:"Constructor Function"}),"\n",(0,s.jsx)(n.p,{children:"The constructor function is used to create an object. It is a function that is used to create an object."}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of creating an object using constructor function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"// Creating an object using constructor function\nfunction Person(name, age, email) {\n  this.name = name;\n  this.age = age;\n  this.email = email;\n  this.greet = function() {\n    return `Hello, my name is ${this.name}`;\n  };\n}\n\nlet person = new Person('John Doe', 30, 'john@example.com');\n\nconsole.log(person.name); // John Doe\nconsole.log(person.age); // 30\nconsole.log(person.email); // john@example.com\nconsole.log(person.greet()); // Hello, my name is John Doe\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we have created an object ",(0,s.jsx)(n.code,{children:"person"})," using constructor function ",(0,s.jsx)(n.code,{children:"Person"}),". The constructor function ",(0,s.jsx)(n.code,{children:"Person"})," takes three parameters ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"age"}),", and ",(0,s.jsx)(n.code,{children:"email"})," and assigns them to the object properties."]}),"\n",(0,s.jsx)(n.h2,{id:"accessing-object-properties",children:"Accessing Object Properties"}),"\n",(0,s.jsx)(n.p,{children:"You can access the properties of an object using dot notation or bracket notation."}),"\n",(0,s.jsx)(n.h3,{id:"dot-notation",children:"Dot Notation"}),"\n",(0,s.jsxs)(n.p,{children:["You can access the properties of an object using dot notation ",(0,s.jsx)(n.code,{children:"."}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of accessing object properties using dot notation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"// Accessing object properties using dot notation\nlet person = {\n  name: 'John Doe',\n  age: 30,\n  email: 'john@example.com'\n};\n\nconsole.log(person.name); // John Doe\nconsole.log(person.age); // 30\nconsole.log(person.email); // john@example.com\n\n// Accessing object properties using dot notation\nperson.name = 'Ajay Dhangar';\nconsole.log(person.name); // Ajay Dhangar\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we have accessed the properties of the object ",(0,s.jsx)(n.code,{children:"person"})," using dot notation."]}),"\n",(0,s.jsx)(n.h3,{id:"bracket-notation",children:"Bracket Notation"}),"\n",(0,s.jsxs)(n.p,{children:["You can also access the properties of an object using bracket notation ",(0,s.jsx)(n.code,{children:"[]"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of accessing object properties using bracket notation:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"// Accessing object properties using bracket notation\nlet person = {\n  name: 'John Doe',\n  age: 30,\n  email: 'john@example.com'\n\n};\n\nconsole.log(person['name']); // John Doe\nconsole.log(person['age']); // 30\nconsole.log(person['email']); // john@example.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we have accessed the properties of the object ",(0,s.jsx)(n.code,{children:"person"})," using bracket notation."]}),"\n",(0,s.jsx)(n.h2,{id:"object-destructuring",children:"Object Destructuring"}),"\n",(0,s.jsx)(n.p,{children:"Object destructuring is a way to extract properties from an object and assign them to variables."}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of object destructuring:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"// Object destructuring\n\nlet person = {\n  name: 'John Doe',\n  age: 30,\n  email: 'john@example.com'\n};\n\nlet { name, age, email } = person;\n\nconsole.log(name); // John Doe\nconsole.log(age); // 30\nconsole.log(email); // john@example.com\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we have extracted the properties ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"age"}),", and ",(0,s.jsx)(n.code,{children:"email"})," from the object ",(0,s.jsx)(n.code,{children:"person"})," and assigned them to variables using object destructuring."]}),"\n",(0,s.jsx)(n.h2,{id:"object-methods",children:"Object Methods"}),"\n",(0,s.jsx)(n.p,{children:"An object can also have methods. A method is a function that is a property of an object."}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of object methods:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"// Object methods\n\nlet person = {\n  name: 'John Doe',\n  age: 30,\n  email: 'john@example.com',\n    greet: function() {\n        return `Hello, my name is ${this.name}`;\n    }\n};\n\nconsole.log(person.greet()); // Hello, my name is John Doe\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we have added a method ",(0,s.jsx)(n.code,{children:"greet"})," to the object ",(0,s.jsx)(n.code,{children:"person"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"object-prototypes",children:"Object Prototypes"}),"\n",(0,s.jsx)(n.p,{children:"In JavaScript, every object has a prototype. The prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype."}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of object prototypes:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"// Object prototypes\n\nlet person = {\n  name: 'John Doe',\n  age: 30,\n  email: 'john@example.com',\n    greet: function() {\n        return `Hello, my name is ${this.name}`;\n    }\n\n};\n\nconsole.log(person.toString()); // [object Object]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, we have called the ",(0,s.jsx)(n.code,{children:"toString"})," method on the object ",(0,s.jsx)(n.code,{children:"person"}),". The ",(0,s.jsx)(n.code,{children:"toString"})," method is inherited from the prototype of the object ",(0,s.jsx)(n.code,{children:"person"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(n.p,{children:["In JavaScript, all objects inherit from ",(0,s.jsx)(n.code,{children:"Object.prototype"}),". The ",(0,s.jsx)(n.code,{children:"Object.prototype"})," is the prototype of all objects."]})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"In this tutorial, we learned about objects in JavaScript. We learned how to create objects, access object properties, and methods. We also learned about object destructuring, object methods, and object prototypes."})]})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function c(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);