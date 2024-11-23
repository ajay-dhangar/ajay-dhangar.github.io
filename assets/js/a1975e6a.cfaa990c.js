"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[28524],{36739:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"react/building-your-app/adding-flow","title":"Adding Flow","description":"Learn how to add Flow, a static type checker, to your Create React App, empowering your code with type safety and bug prevention.","source":"@site/docs/react/building-your-app/adding-flow.md","sourceDirName":"react/building-your-app","slug":"/react/building-your-app/adding-flow","permalink":"/docs/react/building-your-app/adding-flow","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/building-your-app/adding-flow.md","tags":[{"inline":true,"label":"flow","permalink":"/docs/tags/flow"},{"inline":true,"label":"static","permalink":"/docs/tags/static"},{"inline":true,"label":"type","permalink":"/docs/tags/type"},{"inline":true,"label":"checker","permalink":"/docs/tags/checker"},{"inline":true,"label":"create react app","permalink":"/docs/tags/create-react-app"},{"inline":true,"label":"react","permalink":"/docs/tags/react"},{"inline":true,"label":"javascript","permalink":"/docs/tags/javascript"},{"inline":true,"label":"type safety","permalink":"/docs/tags/type-safety"},{"inline":true,"label":"bug prevention","permalink":"/docs/tags/bug-prevention"},{"inline":true,"label":"type annotations","permalink":"/docs/tags/type-annotations"},{"inline":true,"label":"union types","permalink":"/docs/tags/union-types"},{"inline":true,"label":"optional types","permalink":"/docs/tags/optional-types"},{"inline":true,"label":"type checking","permalink":"/docs/tags/type-checking"},{"inline":true,"label":"type errors","permalink":"/docs/tags/type-errors"},{"inline":true,"label":"live example","permalink":"/docs/tags/live-example"},{"inline":true,"label":"flow-bin","permalink":"/docs/tags/flow-bin"},{"inline":true,"label":"flowconfig","permalink":"/docs/tags/flowconfig"},{"inline":true,"label":"vscode","permalink":"/docs/tags/vscode"},{"inline":true,"label":"vim","permalink":"/docs/tags/vim"},{"inline":true,"label":"lsp","permalink":"/docs/tags/lsp"},{"inline":true,"label":"absolute imports","permalink":"/docs/tags/absolute-imports"},{"inline":true,"label":"type annotations","permalink":"/docs/tags/type-annotations"},{"inline":true,"label":"union types","permalink":"/docs/tags/union-types"},{"inline":true,"label":"optional types","permalink":"/docs/tags/optional-types"},{"inline":true,"label":"type checking","permalink":"/docs/tags/type-checking"},{"inline":true,"label":"type errors","permalink":"/docs/tags/type-errors"},{"inline":true,"label":"live example","permalink":"/docs/tags/live-example"},{"inline":true,"label":"flow-bin","permalink":"/docs/tags/flow-bin"},{"inline":true,"label":"flowconfig","permalink":"/docs/tags/flowconfig"},{"inline":true,"label":"vscode","permalink":"/docs/tags/vscode"},{"inline":true,"label":"vim","permalink":"/docs/tags/vim"},{"inline":true,"label":"lsp","permalink":"/docs/tags/lsp"},{"inline":true,"label":"absolute imports","permalink":"/docs/tags/absolute-imports"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710610499000,"sidebarPosition":5,"frontMatter":{"id":"adding-flow","title":"Adding Flow","sidebar_position":5,"tags":["flow","static","type","checker","create react app","react","javascript","type safety","bug prevention","type annotations","union types","optional types","type checking","type errors","live example","flow-bin","flowconfig","vscode","vim","lsp","absolute imports","type annotations","union types","optional types","type checking","type errors","live example","flow-bin","flowconfig","vscode","vim","lsp","absolute imports"],"keywords":["flow","static","type","checker","create react app","react","javascript","type safety","bug prevention","type annotations","union types","optional types","type checking","type errors","live example","flow-bin","flowconfig","vscode","vim","lsp","absolute imports","type annotations","union types","optional types","type checking","type errors","live example","flow-bin","flowconfig","vscode","vim","lsp","absolute imports"],"description":"Learn how to add Flow, a static type checker, to your Create React App, empowering your code with type safety and bug prevention."},"sidebar":"tutorialSidebar","previous":{"title":"Adding Bootstrap","permalink":"/docs/react/building-your-app/adding-bootstrap"},"next":{"title":"Adding TypeScript","permalink":"/docs/react/building-your-app/adding-typescript"}}');var i=t(74848),a=t(28453);const s={id:"adding-flow",title:"Adding Flow",sidebar_position:5,tags:["flow","static","type","checker","create react app","react","javascript","type safety","bug prevention","type annotations","union types","optional types","type checking","type errors","live example","flow-bin","flowconfig","vscode","vim","lsp","absolute imports","type annotations","union types","optional types","type checking","type errors","live example","flow-bin","flowconfig","vscode","vim","lsp","absolute imports"],keywords:["flow","static","type","checker","create react app","react","javascript","type safety","bug prevention","type annotations","union types","optional types","type checking","type errors","live example","flow-bin","flowconfig","vscode","vim","lsp","absolute imports","type annotations","union types","optional types","type checking","type errors","live example","flow-bin","flowconfig","vscode","vim","lsp","absolute imports"],description:"Learn how to add Flow, a static type checker, to your Create React App, empowering your code with type safety and bug prevention."},r=void 0,l={},c=[{value:"Introduction:",id:"introduction",level:2},{value:"1: Introducing Flow - The Guardian of Types",id:"1-introducing-flow---the-guardian-of-types",level:3},{value:"2: Unleashing Flow in Your Create React App (Dance of Installation)",id:"2-unleashing-flow-in-your-create-react-app-dance-of-installation",level:3},{value:"3: Unleashing the Magic",id:"3-unleashing-the-magic",level:3},{value:"4: The Elegance of Absolute Imports",id:"4-the-elegance-of-absolute-imports",level:3},{value:"5: Casting Spells - Annotating Your Code with Types",id:"5-casting-spells---annotating-your-code-with-types",level:3},{value:"6: Magical Unions and Optional Types",id:"6-magical-unions-and-optional-types",level:3},{value:"7: Vanquishing Bugs - Leveraging Flow&#39;s Power",id:"7-vanquishing-bugs---leveraging-flows-power",level:3},{value:"8: The Spell of a Live Example",id:"8-the-spell-of-a-live-example",level:3},{value:"Live Example For Better Understanding",id:"live-example-for-better-understanding",level:2},{value:"Conclusion:",id:"conclusion",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components},{BrowserWindow:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Flow, a formidable static type checker, stands ready to protect your code from lurking bugs. Fear not, for we shall guide you on this thrilling journey into the realm of static types in JavaScript. If you are new to this concept, fear not! Delve into this ",(0,i.jsx)(n.a,{href:"https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb",children:"enchanting introduction"})," to discover the power of static types."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Recent versions of ",(0,i.jsx)(n.a,{href:"https://flow.org/",children:"Flow"})," seamlessly integrate with Create React App projects."]})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction:"}),"\n",(0,i.jsx)(n.p,{children:"Welcome, aspiring Code Masterminds, to the magical world of Create React App! In this guide, we will delve into the realm of type checking and unveil the powers of Flow to bring order and certainty to your React applications. Prepare to embark on an adventure of static typing and fearless coding!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://flow.org/",children:"Flow's documentation"})}),"\n",(0,i.jsx)(n.h3,{id:"1-introducing-flow---the-guardian-of-types",children:"1: Introducing Flow - The Guardian of Types"}),"\n",(0,i.jsx)(n.p,{children:"Meet Flow, a stalwart guardian bestowed upon us by the ancient sorcerers at Facebook. Flow is a static type checker that adds an extra layer of protection to your JavaScript code, ensuring that it adheres to predefined types and preventing sneaky bugs from infiltrating your app."}),"\n",(0,i.jsx)(n.h3,{id:"2-unleashing-flow-in-your-create-react-app-dance-of-installation",children:"2: Unleashing Flow in Your Create React App (Dance of Installation)"}),"\n",(0,i.jsx)(n.p,{children:"Let us begin our quest by integrating Flow into your Create React App project. Fear not, for the path is straightforward."}),"\n",(0,i.jsx)(n.p,{children:"Prepare to summon Flow into your Create React App project by performing a few delicate steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Utter the incantation ",(0,i.jsx)(n.code,{children:"npm install --save flow-bin"})," (or ",(0,i.jsx)(n.code,{children:"yarn add flow-bin"}),") to add Flow to your magical dependencies."]}),"\n",(0,i.jsxs)(n.li,{children:["Inscribe the sacred command ",(0,i.jsx)(n.code,{children:'"flow": "flow"'})," into the ",(0,i.jsx)(n.code,{children:"scripts"})," section of your ",(0,i.jsx)(n.code,{children:"package.json"})," to harness Flow's power."]}),"\n",(0,i.jsxs)(n.li,{children:["Invoke the initiation ritual ",(0,i.jsx)(n.code,{children:"npm run flow init"})," (or ",(0,i.jsx)(n.code,{children:"yarn flow init"}),") to conjure a ",(0,i.jsxs)(n.a,{href:"https://flow.org/en/docs/config/",children:[(0,i.jsx)(n.code,{children:".flowconfig"})," file"]})," at your project's core."]}),"\n",(0,i.jsxs)(n.li,{children:["Fortify your code with the mark of Flow - ",(0,i.jsx)(n.code,{children:"// @flow"}),". Bestow this incantation upon any files you wish to bless with type checking, such as ",(0,i.jsx)(n.code,{children:"src/App.js"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"3-unleashing-the-magic",children:"3: Unleashing the Magic"}),"\n",(0,i.jsxs)(n.p,{children:["Behold the power Flow bestows upon you! With a simple command, ",(0,i.jsx)(n.code,{children:"npm run flow"})," (or ",(0,i.jsx)(n.code,{children:"yarn flow"}),"), Flow will roam through your files, inspecting for lurking bugs and ensuring harmony among types."]}),"\n",(0,i.jsxs)(n.p,{children:["Let us not forget the comforts of modern coding. Embrace extensions like ",(0,i.jsx)(n.a,{href:"https://github.com/flowtype/flow-for-vscode",children:"Flow Language Support"})," for Visual Studio Code or the wondrous Language Server Protocol standard (e.g. ",(0,i.jsx)(n.a,{href:"https://github.com/prabirshrestha/vim-lsp/wiki/Servers-Flow",children:"vim LSP"}),") to receive hints as you weave your code."]}),"\n",(0,i.jsx)(n.h3,{id:"4-the-elegance-of-absolute-imports",children:"4: The Elegance of Absolute Imports"}),"\n",(0,i.jsxs)(n.p,{children:["Should you seek the elegance of absolute imports while dancing with Flow, heed this secret. Enchant your ",(0,i.jsx)(n.code,{children:".flowconfig"})," with the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"  [options]\n+ module.name_mapper='^\\([^\\.].*\\)$' -> '<PROJECT_ROOT>/src/\\1'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Let the magic of this incantation make Flow aware of your desires."}),"\n",(0,i.jsx)(n.h3,{id:"5-casting-spells---annotating-your-code-with-types",children:"5: Casting Spells - Annotating Your Code with Types"}),"\n",(0,i.jsx)(n.p,{children:"Now that Flow is up and running, it's time to adorn your code with type annotations. Brace yourself, for the power of type annotations will make your code more robust and comprehensible."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// @flow\nfunction addNumbers(a: number, b: number): number {\n  return a + b;\n}\n\nconst result: number = addNumbers(4, 5);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Observe how the ",(0,i.jsx)(n.code,{children:"number"})," type annotations indicate that ",(0,i.jsx)(n.code,{children:"a"})," and ",(0,i.jsx)(n.code,{children:"b"})," are expected to be numbers, and the function itself will return a number. Flow will diligently check if the types match during development, sparing you the anguish of runtime errors."]}),"\n",(0,i.jsx)(n.h3,{id:"6-magical-unions-and-optional-types",children:"6: Magical Unions and Optional Types"}),"\n",(0,i.jsx)(n.p,{children:"Flow bestows upon us the gift of union types, allowing variables to possess multiple possible types. Behold this example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// @flow\nfunction getLength(value: string | Array<any>): number {\n  return value.length;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this spellbinding incantation, ",(0,i.jsx)(n.code,{children:"value"})," can be either a string or an array. Flow gracefully accepts this union of types and validates the code accordingly."]}),"\n",(0,i.jsx)(n.p,{children:"Moreover, Flow also offers the blessing of optional types. Take a look:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// @flow\ntype User = {\n  name: 'Ajay Dhangar',\n  age?: 22,\n};\n\nfunction getUserInfo(user: User): string {\n  if (user.age) {\n    return `Name: ${user.name}, Age: ${user.age}`;\n  } else {\n    return `Name: ${user.name}`;\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here, the ",(0,i.jsx)(n.code,{children:"age"})," property of the ",(0,i.jsx)(n.code,{children:"User"})," type is marked as optional with the ",(0,i.jsx)(n.code,{children:"?"})," symbol. Flow acknowledges this optionality and allows for graceful handling within the ",(0,i.jsx)(n.code,{children:"getUserInfo"})," function."]}),"\n",(0,i.jsx)(n.h3,{id:"7-vanquishing-bugs---leveraging-flows-power",children:"7: Vanquishing Bugs - Leveraging Flow's Power"}),"\n",(0,i.jsxs)(n.p,{children:["Flow is not just about type annotations; it also possesses the power to unearth hidden bugs lurking within your code. With a simple command, ",(0,i.jsx)(n.code,{children:"npx flow"}),", Flow will perform static analysis on your codebase, detecting potential type errors and revealing them to you. Let Flow guide you on your path to bug-free coding!"]}),"\n",(0,i.jsx)(n.h3,{id:"8-the-spell-of-a-live-example",children:"8: The Spell of a Live Example"}),"\n",(0,i.jsx)(n.p,{children:"In the grand tradition of Code Mastermind HQ, behold a live example to witness the power of Flow in action. Brace yourself as you explore this enchanting example, complete with code snippets and a detailed explanation:"}),"\n",(0,i.jsx)(n.h2,{id:"live-example-for-better-understanding",children:"Live Example For Better Understanding"}),"\n",(0,i.jsx)(n.p,{children:"Absolutely! Here's a simple working live example of using Flow in a Create React App. This example demonstrates how to add type annotations to a component's props and state, and how Flow helps to catch type errors during development."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new React app using Create React App:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="terminal (bash)"',children:"npx create-react-app flow-example-app\ncd flow-example-app\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Install Flow:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="terminal (bash)"',children:"npm install --save flow-bin\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Initialize Flow:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",metastring:'title="terminal (bash)"',children:"npx flow init\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsxs)(n.li,{children:["Add ",(0,i.jsx)(n.code,{children:"// @flow"})," to ",(0,i.jsx)(n.code,{children:"App.js"})," to enable type checking:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="App.js"',children:"// App.js\n// @flow\nimport React, { Component } from 'react';\n\ntype Props = {\n  name: 'Ajay',\n};\n\ntype State = {\n  age: 23,\n};\n\nclass App extends Component<Props, State> {\n  state = {\n    age: 25,\n  };\n\n  render() {\n    const { name } = this.props;\n    const { age } = this.state;\n\n    return (\n      <div>\n        <h1>Hello, {name}!</h1>\n        <p>You are {age} years old.</p>\n      </div>\n    );\n  }\n}\n\nexport default App;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Run the app and check for type errors:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["You can now access the app at ",(0,i.jsx)(n.code,{children:"http://localhost:3000"}),". The component ",(0,i.jsx)(n.code,{children:"App"})," now expects a ",(0,i.jsx)(n.code,{children:"name"})," prop of type ",(0,i.jsx)(n.code,{children:"string"}),", and its state contains an ",(0,i.jsx)(n.code,{children:"age"})," property of type ",(0,i.jsx)(n.code,{children:"number"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{children:"Hello, name: Ajay!"}),(0,i.jsx)("p",{children:"You are 23 years old."})]})}),"\n",(0,i.jsxs)(n.p,{children:["If you attempt to use the component without providing the ",(0,i.jsx)(n.code,{children:"name"})," prop or try to set the ",(0,i.jsx)(n.code,{children:"age"})," to a non-numeric value, Flow will catch these type errors and display them in your terminal."]}),"\n",(0,i.jsx)(n.p,{children:"With this live example, you can witness how Flow enhances your React app's robustness and detects potential type-related issues during development, saving you from future bugs and headaches."}),"\n",(0,i.jsxs)(n.p,{children:["Remember to install Flow globally on your system if you haven't already, and make sure to use the ",(0,i.jsx)(n.code,{children:"// @flow"})," pragma in files you wish to enable type checking for."]}),"\n",(0,i.jsx)(n.p,{children:"May this example empower you to embrace the magic of Flow and wield the power of static typing in your React adventures! Happy coding!"}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion:"}),"\n",(0,i.jsx)(n.p,{children:"Congratulations, dear apprentice! You have mastered the art of integrating Flow into your Create React App and harnessing its magic to strengthen your codebase. With Flow as your companion, you can fearlessly journey through the lands of React, confident in the knowledge that your types are checked and your code is resilient."}),"\n",(0,i.jsx)(n.p,{children:"Remember, the path of a Code Mastermind is one of continuous learning and growth. Embrace the power of type checking and let Flow be your guiding light as you unlock new realms of coding excellence!"}),"\n",(0,i.jsx)(n.p,{children:"May your code be elegant, your types be sound, and your journey be filled with joy. Happy coding, and may the magic of Flow be with you always!"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);