"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[17298],{81844:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=s(17624),a=s(4552);const o={id:"lesson-2",title:"Handling asynchronous operations (promises, async/await)",sidebar_label:"Lesson - 2",sidebar_position:2,description:"Learn how to handle asynchronous operations in React using promises, async/await, and the useEffect hook. Asynchronous operations are common in web development, and React provides several ways to manage asynchronous code and update your application's state with the results.",tags:["courses","react-js","intermediate-level","asynchronous-operations","promises","async-await","useEffect-hook"]},r=void 0,i={id:"react-js/intermidiate-level/working-with-apis/lesson-2",title:"Handling asynchronous operations (promises, async/await)",description:"Learn how to handle asynchronous operations in React using promises, async/await, and the useEffect hook. Asynchronous operations are common in web development, and React provides several ways to manage asynchronous code and update your application's state with the results.",source:"@site/courses/react-js/intermidiate-level/working-with-apis/lesson_2.md",sourceDirName:"react-js/intermidiate-level/working-with-apis",slug:"/react-js/intermidiate-level/working-with-apis/lesson-2",permalink:"/courses/react-js/intermidiate-level/working-with-apis/lesson-2",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/courses/tags/courses"},{label:"react-js",permalink:"/courses/tags/react-js"},{label:"intermediate-level",permalink:"/courses/tags/intermediate-level"},{label:"asynchronous-operations",permalink:"/courses/tags/asynchronous-operations"},{label:"promises",permalink:"/courses/tags/promises"},{label:"async-await",permalink:"/courses/tags/async-await"},{label:"useEffect-hook",permalink:"/courses/tags/use-effect-hook"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712767068e3,sidebarPosition:2,frontMatter:{id:"lesson-2",title:"Handling asynchronous operations (promises, async/await)",sidebar_label:"Lesson - 2",sidebar_position:2,description:"Learn how to handle asynchronous operations in React using promises, async/await, and the useEffect hook. Asynchronous operations are common in web development, and React provides several ways to manage asynchronous code and update your application's state with the results.",tags:["courses","react-js","intermediate-level","asynchronous-operations","promises","async-await","useEffect-hook"]},sidebar:"tutorialSidebar",previous:{title:"Lesson - 1",permalink:"/courses/react-js/intermidiate-level/working-with-apis/lesson-1"},next:{title:"Lesson - 3",permalink:"/courses/react-js/intermidiate-level/working-with-apis/lesson-3"}},c={},l=[{value:"What are asynchronous operations?",id:"what-are-asynchronous-operations",level:2},{value:"Handling asynchronous operations with promises",id:"handling-asynchronous-operations-with-promises",level:2},{value:"Handling asynchronous operations with async/await",id:"handling-asynchronous-operations-with-asyncawait",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components},{TabItem:s,Tabs:o}=n;return s||u("TabItem",!0),o||u("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["In React applications, handling asynchronous operations like fetching data from external APIs, reading/writing to a database, or performing time-consuming tasks is a common requirement. Asynchronous operations are tasks that don't block the main thread and allow your application to continue running while waiting for the operation to complete. React provides several ways to handle asynchronous code, including promises, async/await, and the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook."]}),"\n",(0,t.jsxs)(n.p,{children:["This lesson will introduce you to handling asynchronous operations in React using promises, async/await, and the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook. You'll learn how to fetch data from an external API, update your application's state with the fetched data, and handle loading and error states in your components."]}),"\n",(0,t.jsx)(n.h2,{id:"what-are-asynchronous-operations",children:"What are asynchronous operations?"}),"\n",(0,t.jsx)(n.p,{children:"Asynchronous operations in JavaScript are tasks that run independently of the main thread and don't block the execution of other code. Common examples of asynchronous operations include fetching data from an external API, reading/writing to a database, and handling user input events. Asynchronous code is essential for building responsive and interactive web applications that can perform multiple tasks concurrently."}),"\n",(0,t.jsxs)(n.p,{children:["Here's an example of an asynchronous operation in React using a ",(0,t.jsx)(n.code,{children:"setTimeout"})," function:"]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)(s,{value:"Source code",label:"Source code",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="/src/components/AsyncOperationExample.js"',children:' import React, { useState, useEffect } from "react";\n\n function AsyncOperationExample() {\n   const [loading, setLoading] = useState(true);\n\n   useEffect(() => {\n     setTimeout(() => {\n       setLoading(false);\n     }, 3000);\n   }, []);\n\n   return (\n     <div>\n       <h2>Async Operation Example</h2>\n       {loading ? <p>Loading...</p> : <p>Async operation completed!</p>}\n     </div>\n   );\n }\n\n export default AsyncOperationExample;\n'})})}),(0,t.jsx)(s,{value:"Live demo",label:"Live demo",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function AsyncOperationExample() {\n  const [loading, setLoading] = useState(true);\n\n  setTimeout(() => {\n    setLoading(false);\n  }, 3000);\n\n  return (\n    <div>\n      {loading ? <p>Loading...</p> : <p>Async operation completed!</p>}\n    </div>\n  );\n}\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"AsyncOperationExample"})," component uses a ",(0,t.jsx)(n.code,{children:"setTimeout"})," function to simulate an asynchronous operation that takes 3 seconds to complete. The ",(0,t.jsx)(n.code,{children:"loading"})," state is initially set to ",(0,t.jsx)(n.code,{children:"true"}),", and after 3 seconds, it's updated to ",(0,t.jsx)(n.code,{children:"false"}),", indicating that the asynchronous operation has completed."]}),"\n",(0,t.jsx)(n.h2,{id:"handling-asynchronous-operations-with-promises",children:"Handling asynchronous operations with promises"}),"\n",(0,t.jsx)(n.p,{children:"Promises are a built-in JavaScript feature that allows you to work with asynchronous code in a more readable and manageable way. Promises represent the eventual completion (or failure) of an asynchronous operation and provide a clean syntax for handling asynchronous tasks. You can use promises to fetch data from an external API, read/write to a database, or perform other asynchronous operations in your React components."}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of fetching data from an external API using promises in a React component:"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)(s,{value:"Source code",label:"Source code",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="/src/components/UserList.js"',children:'import React, { useState, useEffect } from "react";\n\nfunction UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch("https://jsonplaceholder.typicode.com/users")\n      .then((response) => response.json())\n      .then((data) => {\n        setUsers(data);\n        setLoading(false);\n      })\n      .catch((error) => console.error("Error fetching data:", error));\n  }, []);\n\n  return (\n    <div>\n      <h2>User List</h2>\n      {loading ? (\n        <p>Loading...</p>\n      ) : (\n        <ul>\n          {users.map((user) => (\n            <li key={user.id}>{user.name}</li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}\n\nexport default UserList;\n'})})}),(0,t.jsx)(s,{value:"Live demo",label:"Live demo",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function UserList() {\n  const [users, setUsers] = useState([]);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    fetch("https://jsonplaceholder.typicode.com/users")\n      .then((response) => response.json())\n      .then((data) => {\n        setUsers(data);\n        setLoading(false);\n      })\n      .catch((error) => console.error("Error fetching data:", error));\n  }, []);\n\n  return (\n    <div>\n      <h2>User List</h2>\n      {loading ? (\n        <p>Loading...</p>\n      ) : (\n        <ul>\n          {users.map((user) => (\n            <li key={user.id}>{user.name}</li>\n          ))}\n        </ul>\n      )}\n    </div>\n  );\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"UserList"})," component uses the ",(0,t.jsx)(n.code,{children:"fetch"})," API to make a GET request to the JSONPlaceholder API and fetch a list of users. The ",(0,t.jsx)(n.code,{children:"fetch"})," function returns a promise that resolves with the response to the request. You can use the ",(0,t.jsx)(n.code,{children:"then"})," method to handle the response data and update the component's state with the fetched users."]}),"\n",(0,t.jsx)(n.h2,{id:"handling-asynchronous-operations-with-asyncawait",children:"Handling asynchronous operations with async/await"}),"\n",(0,t.jsxs)(n.p,{children:["Async/await is a modern JavaScript feature that provides a more concise and readable way to work with asynchronous code. Async functions return a promise that resolves with the function's return value, allowing you to use the ",(0,t.jsx)(n.code,{children:"await"})," keyword to pause the execution of the function until the promise is resolved. You can use async/await to fetch data from an external API, read/write to a database, or perform other asynchronous tasks in your React components."]}),"\n",(0,t.jsx)(n.p,{children:"Here's an example of fetching data from an external API using async/await in a React component:"}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)(s,{value:"Source code",label:"Source code",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="/src/components/UserList.js"',children:'import React, { useState, useEffect } from "react";\n\nfunction UserList() {\nconst [users, setUsers] = useState([]);\nconst [loading, setLoading] = useState(true);\n\nuseEffect(() => {\n  const fetchData = async () => {\n    try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/users");\n        const data = await response.json();\n        setUsers(data);\n        setLoading(false);\n    } catch (error) {\n        console.error("Error fetching data:", error);\n    }\n  };\n\n    fetchData();\n}, []);\n\nreturn (\n  <div>\n    <h2>User List</h2>\n    {loading ? (\n        <p>Loading...</p>\n    ) : (\n        <ul>\n        {users.map((user) => (\n            <li key={user.id}>{user.name}</li>\n        ))}\n        </ul>\n    )}\n  </div>\n);\n}\n\nexport default UserList;\n'})})}),(0,t.jsx)(s,{value:"Live demo",label:"Live demo",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function UserList() {\n const [users, setUsers] = useState([]);\n const [loading, setLoading] = useState(true);\n\n useEffect(() => {\n    const fetchData = async () => {\n    try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/users");\n        const data = await response.json();\n        setUsers(data);\n        setLoading(false);\n    } catch (error) {\n        console.error("Error fetching data:", error);\n    }\n    };\n     fetchData();\n }, []);\n\n return (\n    <div>\n    <h2>User List</h2>\n    {loading ? (\n        <p>Loading...</p>\n    ) : (\n        <ul>\n        {users.map((user) => (\n            <li key={user.id}>{user.name}</li>\n        ))}\n        </ul>\n    )}\n    </div>\n );\n}\n'})})})]}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the ",(0,t.jsx)(n.code,{children:"UserList"})," component uses an async function to fetch data from the JSONPlaceholder API using the ",(0,t.jsx)(n.code,{children:"fetch"})," API and the ",(0,t.jsx)(n.code,{children:"await"})," keyword. The ",(0,t.jsx)(n.code,{children:"fetchData"})," function is defined as an async function that makes an API call to fetch a list of users. The ",(0,t.jsx)(n.code,{children:"await"})," keyword pauses the execution of the function until the promise is resolved, allowing you to handle the response data and update the component's state with the fetched users."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["When using async/await in React components, make sure to handle errors using a ",(0,t.jsx)(n.code,{children:"try/catch"})," block to gracefully handle any exceptions that may occur during the asynchronous operation."]})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsxs)(n.p,{children:["Handling asynchronous operations in React is a crucial skill for building modern web applications that interact with external APIs, databases, and other services. By using promises, async/await, and the ",(0,t.jsx)(n.code,{children:"useEffect"})," hook, you can manage asynchronous code effectively and update your application's state with the results of asynchronous tasks. Practice working with asynchronous operations in React to build responsive and interactive applications that provide a seamless user experience."]})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,n,s)=>{s.d(n,{I:()=>i,M:()=>r});var t=s(11504);const a={},o=t.createContext(a);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);