"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[7273],{94686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"react/testing/running-tests","title":"Running Tests in Create React App","description":"Learn how to run tests in a Create React App project using Jest. Explore the basics of testing and discover the joy of catching bugs early!","source":"@site/docs/react/testing/running-tests.md","sourceDirName":"react/testing","slug":"/react/testing/running-tests","permalink":"/docs/react/testing/running-tests","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/testing/running-tests.md","tags":[{"inline":true,"label":"react","permalink":"/docs/tags/react"},{"inline":true,"label":"testing","permalink":"/docs/tags/testing"},{"inline":true,"label":"jest","permalink":"/docs/tags/jest"},{"inline":true,"label":"create-react-app","permalink":"/docs/tags/create-react-app"},{"inline":true,"label":"react-scripts","permalink":"/docs/tags/react-scripts"},{"inline":true,"label":"react-dom","permalink":"/docs/tags/react-dom"},{"inline":true,"label":"react-testing-library","permalink":"/docs/tags/react-testing-library"},{"inline":true,"label":"jest-dom","permalink":"/docs/tags/jest-dom"},{"inline":true,"label":"testing-library","permalink":"/docs/tags/testing-library"},{"inline":true,"label":"jest","permalink":"/docs/tags/jest"},{"inline":true,"label":"react-app","permalink":"/docs/tags/react-app"},{"inline":true,"label":"create-react-app","permalink":"/docs/tags/create-react-app"},{"inline":true,"label":"cypress","permalink":"/docs/tags/cypress"},{"inline":true,"label":"react-testing","permalink":"/docs/tags/react-testing"},{"inline":true,"label":"react-test-renderer","permalink":"/docs/tags/react-test-renderer"},{"inline":true,"label":"testing","permalink":"/docs/tags/testing"},{"inline":true,"label":"testing-library","permalink":"/docs/tags/testing-library"},{"inline":true,"label":"jest-dom","permalink":"/docs/tags/jest-dom"},{"inline":true,"label":"react-dom","permalink":"/docs/tags/react-dom"},{"inline":true,"label":"react-scripts","permalink":"/docs/tags/react-scripts"},{"inline":true,"label":"react-test-renderer","permalink":"/docs/tags/react-test-renderer"},{"inline":true,"label":"react-testing-library","permalink":"/docs/tags/react-testing-library"},{"inline":true,"label":"testing-library","permalink":"/docs/tags/testing-library"},{"inline":true,"label":"jest","permalink":"/docs/tags/jest"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710610499000,"sidebarPosition":1,"frontMatter":{"id":"running-tests","title":"Running Tests in Create React App","sidebar_label":"Running Tests","sidebar_position":1,"tags":["react","testing","jest","create-react-app","react-scripts","react-dom","react-testing-library","jest-dom","testing-library","jest","react-app","create-react-app","cypress","react-testing","react-test-renderer","testing","testing-library","jest-dom","react-dom","react-scripts","react-test-renderer","react-testing-library","testing-library","jest"],"description":"Learn how to run tests in a Create React App project using Jest. Explore the basics of testing and discover the joy of catching bugs early!"},"sidebar":"tutorialSidebar","previous":{"title":"Testing","permalink":"/docs/category/testing"},"next":{"title":"Debugging Tests","permalink":"/docs/react/testing/debugging-tests"}}');var r=n(74848),i=n(28453);const a={id:"running-tests",title:"Running Tests in Create React App",sidebar_label:"Running Tests",sidebar_position:1,tags:["react","testing","jest","create-react-app","react-scripts","react-dom","react-testing-library","jest-dom","testing-library","jest","react-app","create-react-app","cypress","react-testing","react-test-renderer","testing","testing-library","jest-dom","react-dom","react-scripts","react-test-renderer","react-testing-library","testing-library","jest"],description:"Learn how to run tests in a Create React App project using Jest. Explore the basics of testing and discover the joy of catching bugs early!"},l=void 0,c={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Test Suites and Files",id:"test-suites-and-files",level:2},{value:"What is Jest?",id:"what-is-jest",level:2},{value:"Writing Your First Test",id:"writing-your-first-test",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Watching for Changes",id:"watching-for-changes",level:2},{value:"Code Coverage",id:"code-coverage",level:2},{value:"Additional Testing Techniques",id:"additional-testing-techniques",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"Welcome to the world of testing in Create React App! Testing is a crucial aspect of building robust and bug-free applications. In this guide, we will explore how to run tests effectively in a Create React App environment, with a focus on simplicity and fun!"}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(t.p,{children:"Before we dive into testing, ensure you have the following set up:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Node.js and npm (Node Package Manager) installed on your system."}),"\n",(0,r.jsx)(t.li,{children:"A working knowledge of JavaScript and React basics."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.p,{children:"To begin, make sure you have a Create React App project set up. If you don't have one, you can quickly create a new app using the following commands:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx create-react-app my-app\ncd my-app\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now, let's take a closer look at the different testing options available."}),"\n",(0,r.jsx)(t.h2,{id:"test-suites-and-files",children:"Test Suites and Files"}),"\n",(0,r.jsxs)(t.p,{children:["Create React App uses ",(0,r.jsx)(t.strong,{children:"Jest"})," as the default testing framework. When you run tests, Jest looks for test files with specific naming patterns:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Test files should be named with the ",(0,r.jsx)(t.code,{children:".test.js"})," or ",(0,r.jsx)(t.code,{children:".spec.js"})," suffix, e.g., ",(0,r.jsx)(t.code,{children:"MyComponent.test.js"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["All test files should be placed inside the ",(0,r.jsx)(t.code,{children:"src"})," directory, usually within the same folder as the component or module they are testing."]}),"\n",(0,r.jsx)(t.h2,{id:"what-is-jest",children:"What is Jest?"}),"\n",(0,r.jsx)(t.p,{children:"Jest is a powerful test runner developed by Facebook. It allows us to write and execute tests in a Node.js environment, which makes testing fast and reliable. Jest is widely used in the React community and provides various utilities to make testing components, functions, and modules a breeze."}),"\n",(0,r.jsx)(t.h2,{id:"writing-your-first-test",children:"Writing Your First Test"}),"\n",(0,r.jsxs)(t.p,{children:["Let's create a simple test for a fictional ",(0,r.jsx)(t.code,{children:"Button"})," component to get you started:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Open your editor and navigate to the ",(0,r.jsx)(t.code,{children:"src"})," directory."]}),"\n",(0,r.jsxs)(t.li,{children:["Create a new file named ",(0,r.jsx)(t.code,{children:"Button.test.js"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="src/Button.test.js"',children:"import React from 'react';\nimport { render } from '@testing-library/react';\nimport Button from './Button';\n\ntest('renders the button with the correct label', () => {\n  const { getByText } = render(<Button label=\"Click Me\" />);\n  const buttonElement = getByText(/click me/i);\n  expect(buttonElement).toBeInTheDocument();\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In this example, we use ",(0,r.jsx)(t.strong,{children:"@testing-library/react"})," to render the ",(0,r.jsx)(t.code,{children:"Button"})," component and check if it displays the correct label."]}),"\n",(0,r.jsx)(t.h2,{id:"running-tests",children:"Running Tests"}),"\n",(0,r.jsx)(t.p,{children:"Now that you've written your first test, it's time to run it!"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Open your terminal or command prompt."}),"\n",(0,r.jsx)(t.li,{children:"Navigate to your project's root directory."}),"\n",(0,r.jsx)(t.li,{children:"To run all tests, execute the following command:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm test\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Jest will automatically find and execute all test files with the ",(0,r.jsx)(t.code,{children:".test.js"})," or ",(0,r.jsx)(t.code,{children:".spec.js"})," suffix."]}),"\n",(0,r.jsx)(t.h2,{id:"watching-for-changes",children:"Watching for Changes"}),"\n",(0,r.jsx)(t.p,{children:"Running tests manually can become tiresome, especially during development. Jest allows you to watch for changes and automatically re-run tests when files are modified."}),"\n",(0,r.jsx)(t.p,{children:"To start the watch mode, use the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm test -- --watch\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now, every time you save a file, Jest will re-run the relevant tests, giving you instant feedback."}),"\n",(0,r.jsx)(t.h2,{id:"code-coverage",children:"Code Coverage"}),"\n",(0,r.jsx)(t.p,{children:"Code coverage is a valuable metric that shows how much of your code is being tested. Create React App comes with built-in code coverage reports powered by Jest."}),"\n",(0,r.jsx)(t.p,{children:"To generate a code coverage report, run the following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm test -- --coverage\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The coverage report will be available in the ",(0,r.jsx)(t.code,{children:"coverage"})," directory, which you can view in your browser."]}),"\n",(0,r.jsx)(t.h2,{id:"additional-testing-techniques",children:"Additional Testing Techniques"}),"\n",(0,r.jsxs)(t.p,{children:["Beyond basic function testing, you can also test React components. Testing components helps ensure that they render correctly and behave as expected. For component testing, you can use ",(0,r.jsx)(t.strong,{children:"React Testing Library"}),", a powerful library that allows you to interact with and assert on rendered components."]}),"\n",(0,r.jsx)(t.p,{children:"To use React Testing Library, you need to install it first:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install --save @testing-library/react @testing-library/jest-dom\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now you can write tests for your components using React Testing Library:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="src/App.test.js"',children:"import React from 'react';\nimport { render, screen } from '@testing-library/react';\nimport App from './App';\n\ntest('renders the \"Learn React\" message', () => {\n  render(<App />);\n  expect(screen.getByText('Learn React')).toBeInTheDocument();\n});\n"})}),"\n",(0,r.jsx)(t.p,{children:"React Testing Library encourages testing components in a way that resembles how users interact with them, making your tests more reliable and meaningful."}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(t.p,{children:"Congratulations! You've successfully learned how to write and run tests in a Create React App project. Testing is an essential skill for any developer, and it helps ensure your application remains reliable and stable."}),"\n",(0,r.jsx)(t.p,{children:"Remember, testing doesn't have to be dull; embrace the fun of catching bugs early and building top-notch React applications!"}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"In this guide, you learned how to run tests in a Create React App project using Jest. You explored the basics of testing and discovered the joy of catching bugs early. You also learned about watching for changes, code coverage, and additional testing techniques using React Testing Library."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>l});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);