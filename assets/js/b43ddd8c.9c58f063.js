"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[51679],{40021:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"react-js/begginer-level/building-user-interfaces/lesson-2","title":"Rendering dynamic lists with arrays and the map() function","description":"Learn how to render dynamic lists in React using arrays and the map() function. Understand how to iterate over data, generate list items, and display dynamic content in your components.","source":"@site/courses/react-js/begginer-level/building-user-interfaces/lesson_2.md","sourceDirName":"react-js/begginer-level/building-user-interfaces","slug":"/react-js/begginer-level/building-user-interfaces/lesson-2","permalink":"/courses/react-js/begginer-level/building-user-interfaces/lesson-2","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"courses","permalink":"/courses/tags/courses"},{"inline":true,"label":"react-js","permalink":"/courses/tags/react-js"},{"inline":true,"label":"beginner-level","permalink":"/courses/tags/beginner-level"},{"inline":true,"label":"building-user-interfaces","permalink":"/courses/tags/building-user-interfaces"},{"inline":true,"label":"dynamic-lists","permalink":"/courses/tags/dynamic-lists"},{"inline":true,"label":"arrays","permalink":"/courses/tags/arrays"},{"inline":true,"label":"map-function","permalink":"/courses/tags/map-function"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1712568385000,"sidebarPosition":2,"frontMatter":{"id":"lesson-2","title":"Rendering dynamic lists with arrays and the map() function","sidebar_label":"Lesson - 2","sidebar_position":2,"description":"Learn how to render dynamic lists in React using arrays and the map() function. Understand how to iterate over data, generate list items, and display dynamic content in your components.","tags":["courses","react-js","beginner-level","building-user-interfaces","dynamic-lists","arrays","map-function"]},"sidebar":"tutorialSidebar","previous":{"title":"Lesson - 1","permalink":"/courses/react-js/begginer-level/building-user-interfaces/lesson-1"},"next":{"title":"Lesson - 3","permalink":"/courses/react-js/begginer-level/building-user-interfaces/lesson-3"}}');var r=i(74848),a=i(28453);i(96540);const s=function(){return(0,r.jsx)("ul",{children:["Apple","Banana","Cherry","Date"].map(((e,n)=>(0,r.jsx)("li",{children:e},n)))})};const o=function(){return(0,r.jsx)("ul",{children:[{id:1,name:"Apple"},{id:2,name:"Banana"},{id:3,name:"Cherry"},{id:4,name:"Date"}].map((e=>(0,r.jsx)("li",{children:e.name},e.id)))})},c={id:"lesson-2",title:"Rendering dynamic lists with arrays and the map() function",sidebar_label:"Lesson - 2",sidebar_position:2,description:"Learn how to render dynamic lists in React using arrays and the map() function. Understand how to iterate over data, generate list items, and display dynamic content in your components.",tags:["courses","react-js","beginner-level","building-user-interfaces","dynamic-lists","arrays","map-function"]},l=void 0,d={},u=[{value:"Introduction to rendering dynamic lists",id:"introduction-to-rendering-dynamic-lists",level:2},{value:"Using the <code>map()</code> function to render lists",id:"using-the-map-function-to-render-lists",level:2},{value:"Key prop in list rendering",id:"key-prop-in-list-rendering",level:2},{value:"Live coding example for try it yourself",id:"live-coding-example-for-try-it-yourself",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components},{BrowserWindow:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this lesson, you will learn how to render dynamic lists in React using arrays and the ",(0,r.jsx)(n.code,{children:"map()"})," function. Dynamic lists allow you to display a collection of items in your components, such as a list of products, blog posts, or user comments. By iterating over an array of data and generating list items, you can create dynamic and interactive user interfaces."]}),"\n",(0,r.jsx)(n.h2,{id:"introduction-to-rendering-dynamic-lists",children:"Introduction to rendering dynamic lists"}),"\n",(0,r.jsxs)(n.p,{children:["Rendering dynamic lists is a common task in web development, especially when working with data-driven applications. In React, you can render dynamic lists by mapping over an array of data and generating list items based on the array elements. The ",(0,r.jsx)(n.code,{children:"map()"})," function is a powerful tool that allows you to transform each element of an array into a new element, making it ideal for rendering dynamic content."]}),"\n",(0,r.jsxs)(n.h2,{id:"using-the-map-function-to-render-lists",children:["Using the ",(0,r.jsx)(n.code,{children:"map()"})," function to render lists"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"map()"})," function is a built-in method in JavaScript that allows you to iterate over an array and transform each element into a new value. In React, you can use the ",(0,r.jsx)(n.code,{children:"map()"})," function to render dynamic lists by generating list items for each element in the array. The ",(0,r.jsx)(n.code,{children:"map()"})," function takes a callback function as an argument, which is called for each element in the array."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of using the ",(0,r.jsx)(n.code,{children:"map()"})," function to render a list of items in React:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="ListExample.js"',children:'import React from "react";\n\nfunction ListExample() {\n  const items = ["Apple", "Banana", "Cherry", "Date"];\n\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index}>{item}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default ListExample;\n'})}),"\n",(0,r.jsx)(i,{minHeight:"300px",children:(0,r.jsx)(s,{})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we define a functional component called ",(0,r.jsx)(n.code,{children:"ListExample"})," that renders a list of items using the ",(0,r.jsx)(n.code,{children:"map()"})," function. The ",(0,r.jsx)(n.code,{children:"items"})," array contains four fruit names, and we use the ",(0,r.jsx)(n.code,{children:"map()"})," function to generate a list item for each element in the array. The ",(0,r.jsx)(n.code,{children:"key"})," prop is used to provide a unique identifier for each list item."]}),"\n",(0,r.jsx)(n.h2,{id:"key-prop-in-list-rendering",children:"Key prop in list rendering"}),"\n",(0,r.jsxs)(n.p,{children:["When rendering dynamic lists in React, it is essential to provide a unique ",(0,r.jsx)(n.code,{children:"key"})," prop for each list item. The ",(0,r.jsx)(n.code,{children:"key"})," prop helps React identify which items have changed, been added, or been removed in the list. It improves the performance of list rendering and helps maintain component state correctly."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of using the ",(0,r.jsx)(n.code,{children:"key"})," prop in list rendering:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="KeyPropExample.js"',children:'import React from "react";\n\nfunction KeyPropExample() {\n  const items = [\n    { id: 1, name: "Apple" },\n    { id: 2, name: "Banana" },\n    { id: 3, name: "Cherry" },\n    { id: 4, name: "Date" },\n  ];\n\n  return (\n    <ul>\n      {items.map((item) => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default KeyPropExample;\n'})}),"\n",(0,r.jsx)(i,{minHeight:"300px",children:(0,r.jsx)(o,{})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we define a list of items as an array of objects, where each object contains an ",(0,r.jsx)(n.code,{children:"id"})," and a ",(0,r.jsx)(n.code,{children:"name"})," property. We use the ",(0,r.jsx)(n.code,{children:"id"})," property as the ",(0,r.jsx)(n.code,{children:"key"})," prop for each list item to ensure that React can identify and track the items correctly."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["When using the ",(0,r.jsx)(n.code,{children:"map()"})," function to render dynamic lists in React, always provide a unique ",(0,r.jsx)(n.code,{children:"key"})," prop for each list item. Avoid using the array index as the ",(0,r.jsx)(n.code,{children:"key"})," value, as it can lead to performance issues and incorrect rendering when the array order changes."]})}),"\n",(0,r.jsx)(n.h2,{id:"live-coding-example-for-try-it-yourself",children:"Live coding example for try it yourself"}),"\n",(0,r.jsxs)(n.p,{children:["In this live coding example, you will have the opportunity to practice rendering dynamic lists in React using the ",(0,r.jsx)(n.code,{children:"map()"})," function."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function DynamicList() {\n  const products = [\n    { id: 1, name: "Product 1", price: 10 },\n    { id: 2, name: "Product 2", price: 20 },\n    { id: 3, name: "Product 3", price: 30 },\n    { id: 4, name: "Product 4", price: 40 },\n  ];\n  return (\n    <ul>\n      {products.map((product) => (\n        <li key={product.id}>\n          {product.name} - ${product.price}\n        </li>\n      ))}\n    </ul>\n  );\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we define a list of products as an array of objects, where each object contains an ",(0,r.jsx)(n.code,{children:"id"}),", ",(0,r.jsx)(n.code,{children:"name"}),", and ",(0,r.jsx)(n.code,{children:"price"})," property. We use the ",(0,r.jsx)(n.code,{children:"map()"})," function to generate a list item for each product, displaying the product name and price. The ",(0,r.jsx)(n.code,{children:"id"})," property is used as the ",(0,r.jsx)(n.code,{children:"key"})," prop for each list item."]}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:["Rendering dynamic lists in React using arrays and the ",(0,r.jsx)(n.code,{children:"map()"})," function is a powerful technique for displaying collections of data in your components. By iterating over an array of data and generating list items dynamically, you can create interactive and data-driven user interfaces. Remember to provide a unique ",(0,r.jsx)(n.code,{children:"key"})," prop for each list item to optimize list rendering and maintain component state effectively."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const r={},a=t.createContext(r);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);