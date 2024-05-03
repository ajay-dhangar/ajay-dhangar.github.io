"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[64864],{87896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=t(17624),i=t(4552);t(11504);const o=e=>{let{text:n,onClick:t}=e;return(0,s.jsx)("button",{onClick:t,children:n})},a=()=>{const e="Ajay";return(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{children:["Hello, ",e,"!"]}),(0,s.jsx)("p",{children:"You are logged in"}),(0,s.jsx)("img",{src:"https://github.com/ajay-dhangar.png",alt:"Ajay",style:{width:"100px",borderRadius:"50%"}}),(0,s.jsxs)("p",{children:["Welcome back, ",e,"!"]}),(0,s.jsx)("ul",{children:["apple","banana","orange"].map(((e,n)=>(0,s.jsx)("li",{children:e},n)))}),(0,s.jsx)(o,{text:"Click me",onClick:()=>alert("Button clicked!")})]})},r={id:"lesson-3",title:"Using JSX for building UI elements",sidebar_label:"Lesson - 3",sidebar_position:3,description:"Learn how to use JSX (JavaScript XML) to build UI elements in React and understand its syntax and features.",tags:["courses","react-js","beginner-level","building-your-first-react-app","jsx","ui-elements"]},l=void 0,c={id:"react-js/begginer-level/building-your-first-react-app/lesson-3",title:"Using JSX for building UI elements",description:"Learn how to use JSX (JavaScript XML) to build UI elements in React and understand its syntax and features.",source:"@site/courses/react-js/begginer-level/building-your-first-react-app/lesson_3.md",sourceDirName:"react-js/begginer-level/building-your-first-react-app",slug:"/react-js/begginer-level/building-your-first-react-app/lesson-3",permalink:"/courses/react-js/begginer-level/building-your-first-react-app/lesson-3",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/courses/tags/courses"},{label:"react-js",permalink:"/courses/tags/react-js"},{label:"beginner-level",permalink:"/courses/tags/beginner-level"},{label:"building-your-first-react-app",permalink:"/courses/tags/building-your-first-react-app"},{label:"jsx",permalink:"/courses/tags/jsx"},{label:"ui-elements",permalink:"/courses/tags/ui-elements"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1712419044e3,sidebarPosition:3,frontMatter:{id:"lesson-3",title:"Using JSX for building UI elements",sidebar_label:"Lesson - 3",sidebar_position:3,description:"Learn how to use JSX (JavaScript XML) to build UI elements in React and understand its syntax and features.",tags:["courses","react-js","beginner-level","building-your-first-react-app","jsx","ui-elements"]},sidebar:"codeharborhub",previous:{title:"Lesson - 2",permalink:"/courses/react-js/begginer-level/building-your-first-react-app/lesson-2"},next:{title:"Module 3: Working with Components and Data in React",permalink:"/courses/category/module-3-working-with-components-and-data-in-react"}},d={},p=[{value:"What is JSX?",id:"what-is-jsx",level:2},{value:"JSX Features",id:"jsx-features",level:2},{value:"Exercise - Create a Simple Functional Component using JSX",id:"exercise---create-a-simple-functional-component-using-jsx",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{BrowserWindow:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this lesson, we will explore JSX (JavaScript XML) and learn how to use it to build UI elements in React. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It provides a more readable and concise way to define UI components in React."}),"\n",(0,s.jsx)(n.h2,{id:"what-is-jsx",children:"What is JSX?"}),"\n",(0,s.jsx)(n.p,{children:"JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is not a separate templating language, but a syntax that is transformed into regular JavaScript by tools like Babel. JSX makes it easier to define UI components in React by combining the power of JavaScript and HTML."}),"\n",(0,s.jsx)(n.p,{children:"Here's an example of JSX code:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="JSXExample.jsx"',children:'import React from "react";\n\nfunction JSXExample() {\n  return (\n    <div>\n      <h1>Hello, I am a JSX element!</h1>\n      <p>This is a paragraph element.</p>\n    </div>\n  );\n}\n\nexport default JSXExample;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example, we define a functional component called ",(0,s.jsx)(n.code,{children:"JSXExample"})," that returns a JSX element containing a ",(0,s.jsx)(n.code,{children:"div"})," element with ",(0,s.jsx)(n.code,{children:"h1"})," and ",(0,s.jsx)(n.code,{children:"p"})," child elements. JSX allows you to write HTML-like code directly within your JavaScript files, making it easier to define UI components and structures."]}),"\n",(0,s.jsx)(n.h2,{id:"jsx-features",children:"JSX Features"}),"\n",(0,s.jsx)(n.p,{children:"JSX provides several features that make it a powerful tool for building UI elements in React:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Embedding Expressions"}),": You can embed JavaScript expressions within JSX using curly braces ",(0,s.jsx)(n.code,{children:"{}"}),". This allows you to dynamically generate content based on variables or functions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Attributes and Props"}),": JSX allows you to define attributes and props for HTML elements using a syntax similar to HTML. You can pass data and event handlers to components using props."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conditional Rendering"}),": You can use JavaScript expressions and conditional statements within JSX to conditionally render elements based on certain conditions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Mapping Arrays"}),": JSX allows you to map over arrays and render multiple elements based on the array data. This is useful for rendering lists and collections of data."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Styling"}),": You can apply inline styles to JSX elements using JavaScript objects. This allows you to define styles dynamically based on variables or conditions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Fragments"}),": JSX provides a shorthand syntax for returning multiple elements without a parent container. You can use fragments (",(0,s.jsx)(n.code,{children:"<></>"}),") to group elements together without adding an extra DOM node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Comments"}),": JSX supports adding comments within curly braces ",(0,s.jsx)(n.code,{children:"{/* */}"}),". This allows you to add comments directly within your JSX code for documentation or debugging purposes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Event Handling"}),": JSX allows you to define event handlers for DOM events using camelCase syntax. You can attach event handlers to elements to handle user interactions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Component Composition"}),": JSX allows you to compose components together by nesting them within each other. This makes it easy to build complex UI structures by combining smaller components."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JSX Spread Attributes"}),": JSX supports the spread operator (",(0,s.jsx)(n.code,{children:"..."}),") for passing props to components. This allows you to pass multiple props to a component without explicitly specifying each prop."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JSX Inheritance"}),": JSX elements can inherit properties from their parent components. This allows you to pass down props and context to child components without manually passing them as props."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"JSX Transformation"}),": JSX code is transformed into regular JavaScript by tools like Babel. This transformation process converts JSX elements into ",(0,s.jsx)(n.code,{children:"React.createElement"})," calls, which are used to create React elements."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"By leveraging these features, you can build dynamic and interactive UI components in React using JSX. It provides a declarative and expressive way to define UI structures and behaviors, making it easier to create complex user interfaces in your applications."}),"\n",(0,s.jsxs)(n.admonition,{title:"Practice Time \u270f\ufe0f",type:"note",children:[(0,s.jsx)(n.h2,{id:"exercise---create-a-simple-functional-component-using-jsx",children:"Exercise - Create a Simple Functional Component using JSX"}),(0,s.jsxs)(n.p,{children:["Let's create a simple functional component using JSX and explore its features. Define a functional component called ",(0,s.jsx)(n.code,{children:"MyComponent"})," that renders a greeting message, conditional text based on a variable, an image element, a conditional paragraph, a list of fruits, and a composed ",(0,s.jsx)(n.code,{children:"Button"})," component."]}),(0,s.jsx)(n.p,{children:"You can use the following code snippet as a starting point:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="MyComponent.jsx"',children:'import React from \'react\';\n\n// Define a functional component using JSX\nconst MyComponent = () => {\n  // Define some variables to use in JSX expressions\n  const name = "Ajay";\n  const isLoggedIn = true;\n  const fruits = ["apple", "banana", "orange"];\n\n  // JSX component rendering\n  return (\n    <div>\n      <h1>Hello, {name}!</h1>\n      \n      {/* Embedding expressions */}\n      <p>{isLoggedIn ? "You are logged in" : "Please log in"}</p>\n\n      {/* Defining attributes */}\n      <img src="https://github.com/ajay-dhangar.png" alt="Ajay" style={{ width: "100px", borderRadius: "50%" }} />\n\n      {/* Conditionally render elements */}\n      {isLoggedIn && <p>Welcome back, {name}!</p>}\n\n      {/* Mapping over arrays */}\n      <ul>\n        {fruits.map((fruit, index) => (\n          <li key={index}>{fruit}</li>\n        ))}\n      </ul>\n\n      {/* Compose components */}\n      <Button text="Click me" onClick={() => alert("Button clicked!")} />\n    </div>\n  );\n}\n\n// Another component to compose\nconst Button = ({ text, onClick }) => {\n  return <button onClick={onClick}>{text}</button>;\n}\n\nexport default MyComponent;\n'})}),(0,s.jsxs)(n.p,{children:["In this example, we define a functional component called ",(0,s.jsx)(n.code,{children:"MyComponent"})," that renders a greeting message, conditional text, an image, a conditional paragraph, a list of fruits, and a composed ",(0,s.jsx)(n.code,{children:"Button"})," component. We use JSX features like embedding expressions, defining attributes, conditional rendering, mapping arrays, and composing components to build the UI structure."]}),(0,s.jsx)(t,{children:(0,s.jsx)(a,{})}),(0,s.jsx)(n.p,{children:"Try modifying the JSX code and exploring different features to understand how JSX works and how you can use it to build UI elements in React."})]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"In this lesson, we explored JSX and learned how to use it to build UI elements in React. JSX provides a more readable and concise way to define UI components by combining the power of JavaScript and HTML. It offers several features like embedding expressions, defining attributes, conditional rendering, mapping arrays, and composing components that make it a powerful tool for building dynamic and interactive user interfaces."})]})}function m(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>a});var s=t(11504);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);