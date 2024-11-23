"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[64665],{54063:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"react-js/intermidiate-level/advanced-styling/lesson-1","title":"CSS Modules for component-scoped styling","description":"Learn how to use CSS Modules to create component-scoped styles in React applications. CSS Modules allow you to write modular and reusable styles for your components without worrying about global CSS conflicts.","source":"@site/courses/react-js/intermidiate-level/advanced-styling/lesson_1.md","sourceDirName":"react-js/intermidiate-level/advanced-styling","slug":"/react-js/intermidiate-level/advanced-styling/lesson-1","permalink":"/courses/react-js/intermidiate-level/advanced-styling/lesson-1","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"courses","permalink":"/courses/tags/courses"},{"inline":true,"label":"react-js","permalink":"/courses/tags/react-js"},{"inline":true,"label":"intermediate-level","permalink":"/courses/tags/intermediate-level"},{"inline":true,"label":"advanced-styling","permalink":"/courses/tags/advanced-styling"},{"inline":true,"label":"css-modules","permalink":"/courses/tags/css-modules"},{"inline":true,"label":"styling","permalink":"/courses/tags/styling"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1712660256000,"sidebarPosition":1,"frontMatter":{"id":"lesson-1","title":"CSS Modules for component-scoped styling","sidebar_label":"Lesson - 1","sidebar_position":1,"description":"Learn how to use CSS Modules to create component-scoped styles in React applications. CSS Modules allow you to write modular and reusable styles for your components without worrying about global CSS conflicts.","tags":["courses","react-js","intermediate-level","advanced-styling","css-modules","styling"]},"sidebar":"tutorialSidebar","previous":{"title":"Module 6: Advanced Styling in React","permalink":"/courses/category/module-6-advanced-styling-in-react"},"next":{"title":"Lesson - 2","permalink":"/courses/react-js/intermidiate-level/advanced-styling/lesson-2"}}');var o=s(74848),i=s(28453);const l={id:"lesson-1",title:"CSS Modules for component-scoped styling",sidebar_label:"Lesson - 1",sidebar_position:1,description:"Learn how to use CSS Modules to create component-scoped styles in React applications. CSS Modules allow you to write modular and reusable styles for your components without worrying about global CSS conflicts.",tags:["courses","react-js","intermediate-level","advanced-styling","css-modules","styling"]},a=void 0,r={},c=[{value:"What are CSS Modules?",id:"what-are-css-modules",level:2},{value:"Benefits of using CSS Modules",id:"benefits-of-using-css-modules",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{BrowserWindow:s,TabItem:t,Tabs:l}=n;return s||p("BrowserWindow",!0),t||p("TabItem",!0),l||p("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In React applications, styling components can be challenging due to the global nature of CSS. CSS Modules provide a solution by allowing you to create component-scoped styles that are isolated from the rest of your application. This lesson will introduce you to CSS Modules and show you how to use them to style your React components."}),"\n",(0,o.jsx)(n.h2,{id:"what-are-css-modules",children:"What are CSS Modules?"}),"\n",(0,o.jsx)(n.p,{children:"CSS Modules are a way to write modular and reusable styles for your components in React. They allow you to define styles that are scoped to a specific component, preventing global CSS conflicts and making it easier to manage your styles. CSS Modules work by automatically generating unique class names for your styles, ensuring that they only apply to the component they are intended for."}),"\n",(0,o.jsx)(n.p,{children:"Here's an example of using CSS Modules in a React component:"}),"\n",(0,o.jsxs)(l,{children:[(0,o.jsx)(t,{value:"App.js",label:"App.js",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'import React from "react";\nimport styles from "./App.module.css";\n\nfunction App() {\n  return (\n    <div className={styles.container}>\n      <h1 className={styles.title}>Hello, CSS Modules!</h1>\n      <p className={styles.description}>Styling made easy.</p>\n    </div>\n  );\n}\n\nexport default App;\n'})})}),(0,o.jsx)(t,{value:"App.module.css",label:"App.module.css",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-css",children:".container {\n  padding: 20px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.title {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n\n.description {\n  font-size: 16px;\n}\n"})})})]}),"\n",(0,o.jsx)(s,{children:(0,o.jsxs)("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"5px"},children:[(0,o.jsx)("h1",{style:{fontSize:"24px",marginBottom:"10px"},children:"Hello, CSS Modules!"}),(0,o.jsx)("p",{style:{fontSize:"16px"},children:"Styling made easy."})]})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, we import the styles from the ",(0,o.jsx)(n.code,{children:"App.module.css"})," file and apply them to the corresponding elements in the ",(0,o.jsx)(n.code,{children:"App"})," component. The class names defined in the CSS file are automatically transformed into unique identifiers by CSS Modules, ensuring that they only affect the ",(0,o.jsx)(n.code,{children:"App"})," component."]}),"\n",(0,o.jsx)(n.h2,{id:"benefits-of-using-css-modules",children:"Benefits of using CSS Modules"}),"\n",(0,o.jsx)(n.p,{children:"CSS Modules offer several benefits for styling React components:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Component-scoped styles:"})," CSS Modules provide a way to create styles that are scoped to a specific component, reducing the risk of global CSS conflicts."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Modular and reusable:"})," CSS Modules allow you to define styles in a modular and reusable way, making it easier to maintain and update your styles."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Automatic class name generation:"})," CSS Modules automatically generate unique class names for your styles, ensuring that they only apply to the intended component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Improved maintainability:"})," By encapsulating styles within components, CSS Modules make it easier to manage and refactor your styles as your application grows."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Enhanced developer experience:"})," CSS Modules provide a more intuitive and developer-friendly way to style components in React, improving the overall development experience."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Support for CSS features:"})," CSS Modules support the use of CSS features like variables, nesting, and media queries, allowing you to write more expressive and powerful styles."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Integration with build tools:"})," CSS Modules can be easily integrated with popular build tools like Webpack, enabling seamless integration into your React application."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"By using CSS Modules, you can create more maintainable and scalable styles for your React components, improving the overall styling experience in your applications."}),"\n",(0,o.jsx)(n.admonition,{title:"Key Takeaways",type:"note",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"CSS Modules allow you to create component-scoped styles in React applications."}),"\n",(0,o.jsx)(n.li,{children:"CSS Modules automatically generate unique class names for your styles, preventing global CSS conflicts."}),"\n",(0,o.jsx)(n.li,{children:"CSS Modules provide benefits such as component-scoped styles, modularity, automatic class name generation, and improved maintainability."}),"\n",(0,o.jsx)(n.li,{children:"Using CSS Modules can enhance the developer experience and make styling components in React easier and more efficient."}),"\n",(0,o.jsx)(n.li,{children:"CSS Modules support CSS features like variables, nesting, and media queries, enabling you to write more expressive styles."}),"\n",(0,o.jsx)(n.li,{children:"CSS Modules can be integrated with build tools like Webpack to streamline the styling process in React applications."}),"\n",(0,o.jsx)(n.li,{children:"Try using CSS Modules in your React projects to take advantage of their benefits for styling components."}),"\n"]})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"CSS Modules provide a powerful solution for styling React components by offering component-scoped styles that are isolated from the rest of your application. By using CSS Modules, you can create modular and reusable styles that are easier to manage and maintain, improving the overall styling experience in your React applications. Try using CSS Modules in your next project to see the benefits they offer for styling components in React."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(96540);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);