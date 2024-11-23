"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[9887],{76336:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"javascript/math-in-javascript","title":"Math in JavaScript","description":"In this tutorial, we will learn about the Math object in JavaScript. We will learn about the properties and methods of the Math object.","source":"@site/docs/javascript/math.md","sourceDirName":"javascript","slug":"/javascript/math-in-javascript","permalink":"/docs/javascript/math-in-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/javascript/math.md","tags":[{"inline":true,"label":"JavaScript","permalink":"/docs/tags/java-script"},{"inline":true,"label":"Math","permalink":"/docs/tags/math"},{"inline":true,"label":"Object","permalink":"/docs/tags/object"},{"inline":true,"label":"Properties","permalink":"/docs/tags/properties"},{"inline":true,"label":"Methods","permalink":"/docs/tags/methods"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710237590000,"sidebarPosition":17,"frontMatter":{"id":"math-in-javascript","title":"Math in JavaScript","sidebar_label":"Math","sidebar_position":17,"tags":["JavaScript","Math","Object","Properties","Methods"],"description":"In this tutorial, we will learn about the Math object in JavaScript. We will learn about the properties and methods of the Math object."},"sidebar":"tutorialSidebar","previous":{"title":"Objects","permalink":"/docs/javascript/objects-in-javascript"},"next":{"title":"Random","permalink":"/docs/javascript/random-in-javascript"}}');var t=s(74848),l=s(28453);const r={id:"math-in-javascript",title:"Math in JavaScript",sidebar_label:"Math",sidebar_position:17,tags:["JavaScript","Math","Object","Properties","Methods"],description:"In this tutorial, we will learn about the Math object in JavaScript. We will learn about the properties and methods of the Math object."},i=void 0,o={},c=[{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In JavaScript, the ",(0,t.jsx)(n.code,{children:"Math"})," object is a built-in object that has properties and methods for mathematical constants and functions. It allows you to perform mathematical tasks on numbers."]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Math"})," object has the following properties:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.E"}),": Returns Euler's number, the base of natural logarithms, approximately 2.718."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.E); // 2.718281828459045\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.PI"}),": Returns the ratio of the circumference of a circle to its diameter, approximately 3.14159.\nfor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"    console.log(Math.PI); // 3.141592653589793\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.LN2"}),": Returns the natural logarithm of 2, approximately 0.693.\nfor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.LN2); // 0.6931471805599453\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.LN10"}),": Returns the natural logarithm of 10, approximately 2.303.\nfor example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.LN10); // 2.302585092994046\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.LOG2E"}),": Returns the base 2 logarithm of E, approximately 1.442."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.LOG2E); // 1.4426950408889634\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.LOG10E"}),": Returns the base 10 logarithm of E, approximately 0.434."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.LOG10E); // 0.4342944819032518\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.SQRT1_2"}),": Returns the square root of 1/2, approximately 0.707."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.SQRT1_2); // 0.7071067811865476\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.SQRT2"}),": Returns the square root of 2, approximately 1.414."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.SQRT2); // 1.4142135623730951\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Math"})," object has the following methods:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.abs(x)"}),": Returns the absolute value of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.abs(-5)); // 5\nconsole.log(Math.abs(5)); // 5\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.ceil(x)"}),": Returns the smallest integer greater than or equal to a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.ceil(5.1)); // 6\nconsole.log(Math.ceil(5.9)); // 6\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.floor(x)"}),": Returns the largest integer less than or equal to a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.floor(5.1)); // 5\nconsole.log(Math.floor(5.9)); // 5\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.round(x)"}),": Returns the value of a number rounded to the nearest integer."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.round(5.1)); // 5\nconsole.log(Math.round(5.9)); // 6\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.max(x, y, z, ..., n)"}),": Returns the largest of zero or more numbers."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.max(5, 10, 15, 20)); // 20\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.min(x, y, z, ..., n)"}),": Returns the smallest of zero or more numbers."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.min(5, 10, 15, 20)); // 5\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.pow(x, y)"}),": Returns the value of x to the power of y."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.pow(2, 3)); // 8\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.sqrt(x)"}),": Returns the square root of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.sqrt(16)); // 4\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.random()"}),": Returns a random number between 0 (inclusive), and 1 (exclusive)."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.random()); // 0.123456789\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.sin(x)"}),": Returns the sine of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.sin(90)); // 0.8939966636005579\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.cos(x)"}),": Returns the cosine of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.cos(0)); // 1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.tan(x)"}),": Returns the tangent of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.tan(45)); // 1.6197751905438615\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.log(x)"}),": Returns the natural logarithm (base E) of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.log(2)); // 0.6931471805599453\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.exp(x)"}),": Returns the value of E^x."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.exp(2)); // 7.3890560989306495\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.atan(x)"}),": Returns the arctangent of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.atan(1)); // 0.7853981633974483\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.acos(x)"}),": Returns the arccosine of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.acos(0)); // 1.5707963267948966\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.asin(x)"}),": Returns the arcsine of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.asin(1)); // 1.5707963267948966\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.atan2(y, x)"}),": Returns the arctangent of the quotient of its arguments."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.atan2(1, 1)); // 0.7853981633974483\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.cosh(x)"}),": Returns the hyperbolic cosine of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.cosh(0)); // 1\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.sinh(x)"}),": Returns the hyperbolic sine of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.sinh(0)); // 0\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Math.tanh(x)"}),": Returns the hyperbolic tangent of a number."]}),"\n",(0,t.jsx)(n.p,{children:"for example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="app.js"',children:"console.log(Math.tanh(0)); // 0\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"\ud83d\udcdd Note",type:"tip",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Math"})," object is not a constructor. All properties and methods of the ",(0,t.jsx)(n.code,{children:"Math"})," object can be called by using the ",(0,t.jsx)(n.code,{children:"Math"})," object as a namespace."]})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["In this tutorial, we learned about the ",(0,t.jsx)(n.code,{children:"Math"})," object in JavaScript. We learned about the properties and methods of the ",(0,t.jsx)(n.code,{children:"Math"})," object. We also saw examples of how to use the ",(0,t.jsx)(n.code,{children:"Math"})," object to perform mathematical tasks on numbers."]})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>i});var a=s(96540);const t={},l=a.createContext(t);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);