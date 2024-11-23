"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[88650],{51882:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"react-js/intermidiate-level/working-with-apis/lesson-1","title":"Making API calls using fetch() or axios","description":"Learn how to make API calls in React using the fetch() method or the axios library. Making API calls is a common task in web development, and React provides several ways to fetch data from external APIs and update your application\'s state with the response.","source":"@site/courses/react-js/intermidiate-level/working-with-apis/lesson_1.md","sourceDirName":"react-js/intermidiate-level/working-with-apis","slug":"/react-js/intermidiate-level/working-with-apis/lesson-1","permalink":"/courses/react-js/intermidiate-level/working-with-apis/lesson-1","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"courses","permalink":"/courses/tags/courses"},{"inline":true,"label":"react-js","permalink":"/courses/tags/react-js"},{"inline":true,"label":"intermediate-level","permalink":"/courses/tags/intermediate-level"},{"inline":true,"label":"api-calls","permalink":"/courses/tags/api-calls"},{"inline":true,"label":"fetch","permalink":"/courses/tags/fetch"},{"inline":true,"label":"axios","permalink":"/courses/tags/axios"},{"inline":true,"label":"state-management","permalink":"/courses/tags/state-management"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1712767587000,"sidebarPosition":1,"frontMatter":{"id":"lesson-1","title":"Making API calls using fetch() or axios","sidebar_label":"Lesson - 1","sidebar_position":1,"description":"Learn how to make API calls in React using the fetch() method or the axios library. Making API calls is a common task in web development, and React provides several ways to fetch data from external APIs and update your application\'s state with the response.","tags":["courses","react-js","intermediate-level","api-calls","fetch","axios","state-management"]},"sidebar":"tutorialSidebar","previous":{"title":"Module 9: Working with APIs in React","permalink":"/courses/category/module-9-working-with-apis-in-react"},"next":{"title":"Lesson - 2","permalink":"/courses/react-js/intermidiate-level/working-with-apis/lesson-2"}}');var i=s(74848),l=s(28453),r=s(96540);const a=function(){const[e,t]=(0,r.useState)([]);return(0,r.useEffect)((()=>{fetch("https://jsonplaceholder.typicode.com/users").then((e=>e.json())).then((e=>t(e))).catch((e=>console.error("Error fetching data:",e)))}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"User List"}),(0,i.jsx)("ul",{children:e.map((e=>(0,i.jsx)("li",{children:e.name},e.id)))})]})},o={id:"lesson-1",title:"Making API calls using fetch() or axios",sidebar_label:"Lesson - 1",sidebar_position:1,description:"Learn how to make API calls in React using the fetch() method or the axios library. Making API calls is a common task in web development, and React provides several ways to fetch data from external APIs and update your application's state with the response.",tags:["courses","react-js","intermediate-level","api-calls","fetch","axios","state-management"]},c=void 0,d={},h=[{value:"Making API calls with fetch()",id:"making-api-calls-with-fetch",level:2},{value:"Making API calls with axios",id:"making-api-calls-with-axios",level:2},{value:"When to use fetch() vs. axios",id:"when-to-use-fetch-vs-axios",level:2},{value:"Differences between fetch() and axios",id:"differences-between-fetch-and-axios",level:2},{value:"Conclusion",id:"conclusion",level:2}];function x(e){const t={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{BrowserWindow:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In React applications, making API calls to fetch data from external services is a common task. You can use the ",(0,i.jsx)(t.code,{children:"fetch()"})," method or the ",(0,i.jsx)(t.code,{children:"axios"})," library to make HTTP requests and handle the response data in your React components. This lesson will show you how to make API calls using ",(0,i.jsx)(t.code,{children:"fetch()"})," and ",(0,i.jsx)(t.code,{children:"axios"})," and update your application's state with the fetched data."]}),"\n",(0,i.jsx)(t.h2,{id:"making-api-calls-with-fetch",children:"Making API calls with fetch()"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"fetch()"})," method is a built-in browser API that allows you to make HTTP requests to external services and fetch data asynchronously. You can use ",(0,i.jsx)(t.code,{children:"fetch()"})," to make GET, POST, PUT, DELETE, and other types of requests to interact with RESTful APIs and retrieve data in JSON, XML, or other formats."]}),"\n",(0,i.jsxs)(t.p,{children:["Here's an example of making an API call using ",(0,i.jsx)(t.code,{children:"fetch()"})," in a React component:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/components/UserList.js"',children:'import React, { useState, useEffect } from "react";\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    fetch("https://jsonplaceholder.typicode.com/users")\n      .then((response) => response.json())\n      .then((data) => setUsers(data))\n      .catch((error) => console.error("Error fetching data:", error));\n  }, []);\n\n  return (\n    <div>\n      <h2>User List</h2>\n      <ul>\n        {users.map((user) => (\n          <li key={user.id}>{user.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default UserList;\n'})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(a,{})}),"\n",(0,i.jsxs)(t.p,{children:["In this example, the ",(0,i.jsx)(t.code,{children:"UserList"})," component uses the ",(0,i.jsx)(t.code,{children:"fetch()"})," method to make a GET request to the JSONPlaceholder API and fetch a list of users. The fetched data is stored in the ",(0,i.jsx)(t.code,{children:"users"})," state using the ",(0,i.jsx)(t.code,{children:"setUsers"})," function, and the list of users is rendered in the component's UI."]}),"\n",(0,i.jsx)(t.h2,{id:"making-api-calls-with-axios",children:"Making API calls with axios"}),"\n",(0,i.jsx)(t.p,{children:"Axios is a popular JavaScript library that provides a simple and easy-to-use API for making HTTP requests in the browser and Node.js environments. You can use axios to make GET, POST, PUT, DELETE, and other types of requests to interact with RESTful APIs and handle the response data in your React components."}),"\n",(0,i.jsx)(t.p,{children:"Here's an example of making an API call using axios in a React component:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",metastring:'title="/src/components/UserList.js"',children:'import React, { useState, useEffect } from "react";\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n\n  useEffect(() => {\n    axios.get("https://jsonplaceholder.typicode.com/users")\n      .then((response) => setUsers(response.data))\n      .catch((error) => console.error("Error fetching data:", error));\n  }, []);\n\n  return (\n    <div>\n      <h2>User List</h2>\n      <ul>\n        {users.map((user) => (\n          <li key={user.id}>{user.name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nexport default UserList;\n'})}),"\n",(0,i.jsx)(s,{children:(0,i.jsx)(a,{})}),"\n",(0,i.jsxs)(t.p,{children:["In this example, the ",(0,i.jsx)(t.code,{children:"UserList"})," component uses the ",(0,i.jsx)(t.code,{children:"axios.get()"})," method to make a GET request to the JSONPlaceholder API and fetch a list of users. The fetched data is stored in the ",(0,i.jsx)(t.code,{children:"users"})," state using the ",(0,i.jsx)(t.code,{children:"setUsers"})," function, and the list of users is rendered in the component's UI."]}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.p,{children:"To use axios in your React application, you need to install the axios library by running the following command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",metastring:'title="terminal"',children:"npm install axios\n"})})]}),"\n",(0,i.jsx)(t.h2,{id:"when-to-use-fetch-vs-axios",children:"When to use fetch() vs. axios"}),"\n",(0,i.jsxs)(t.p,{children:["Both ",(0,i.jsx)(t.code,{children:"fetch()"})," and axios are powerful tools for making API calls in React applications. Here are some considerations to help you decide which method to use:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"fetch()"}),": The ",(0,i.jsx)(t.code,{children:"fetch()"})," method is built into modern browsers and provides a simple and lightweight way to make HTTP requests. It is suitable for basic API calls and can be used without additional dependencies. However, ",(0,i.jsx)(t.code,{children:"fetch()"})," has a lower-level API compared to axios and may require more code to handle common use cases like error handling and request cancellation."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"axios"}),": The axios library provides a more feature-rich and user-friendly API for making HTTP requests. It supports features like request and response interceptors, automatic JSON parsing, and error handling out of the box. If you need advanced functionality or want a more convenient API for working with APIs, axios is a good choice."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can choose the method that best fits your project requirements and preferences when working with API calls in React."}),"\n",(0,i.jsx)(t.h2,{id:"differences-between-fetch-and-axios",children:"Differences between fetch() and axios"}),"\n",(0,i.jsxs)(t.p,{children:["Here are some key differences between ",(0,i.jsx)(t.code,{children:"fetch()"})," and axios:"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"No."}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Feature"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"fetch()"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"axios"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"1."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Browser support"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Modern browsers"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"All browsers"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"2."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"API simplicity"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Low-level API"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"High-level API"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"3."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Error handling"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Manual handling"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Automatic handling"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"4."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Request headers"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Manual configuration"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Automatic configuration"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"5."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Interceptors"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Not supported"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Supported"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"6."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"JSON parsing"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Manual parsing"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Automatic parsing"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"7."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Request cancellation"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Manual handling"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Automatic handling"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"8."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"File uploads"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Supported"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Supported"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"9."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Custom instances"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Not supported"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Supported"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"10."}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Promise chaining"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Yes"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["Both ",(0,i.jsx)(t.code,{children:"fetch()"})," and axios have their strengths and weaknesses, and you can choose the method that best fits your project requirements and development workflow when working with API calls in React."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["In this lesson, you learned how to make API calls in React using the ",(0,i.jsx)(t.code,{children:"fetch()"})," method and the axios library. Both ",(0,i.jsx)(t.code,{children:"fetch()"})," and axios are powerful tools for fetching data from external APIs and updating your application's state with the response. You can choose the method that best fits your project requirements and preferences when working with API calls in React."]})]})}function u(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},l=n.createContext(i);function r(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);