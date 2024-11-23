"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[4140],{45146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"react/building-your-app/importing-a-component","title":"Importing Components in React","description":"Learn how to import components in your React applications. Unleash the magic of component importation and integrate them into your app with ease!","source":"@site/docs/react/building-your-app/importing-a-component.md","sourceDirName":"react/building-your-app","slug":"/react/building-your-app/importing-a-component","permalink":"/docs/react/building-your-app/importing-a-component","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/building-your-app/importing-a-component.md","tags":[{"inline":true,"label":"react","permalink":"/docs/tags/react"},{"inline":true,"label":"import","permalink":"/docs/tags/import"},{"inline":true,"label":"component","permalink":"/docs/tags/component"},{"inline":true,"label":"importation","permalink":"/docs/tags/importation"},{"inline":true,"label":"import","permalink":"/docs/tags/import"},{"inline":true,"label":"export","permalink":"/docs/tags/export"},{"inline":true,"label":"module","permalink":"/docs/tags/module"},{"inline":true,"label":"file","permalink":"/docs/tags/file"},{"inline":true,"label":"path","permalink":"/docs/tags/path"},{"inline":true,"label":"relative","permalink":"/docs/tags/relative"},{"inline":true,"label":"absolute","permalink":"/docs/tags/absolute"},{"inline":true,"label":"jsx","permalink":"/docs/tags/jsx"},{"inline":true,"label":"javascript","permalink":"/docs/tags/javascript"},{"inline":true,"label":"code","permalink":"/docs/tags/code"},{"inline":true,"label":"code-splitting","permalink":"/docs/tags/code-splitting"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"lazy","permalink":"/docs/tags/lazy"},{"inline":true,"label":"suspense","permalink":"/docs/tags/suspense"},{"inline":true,"label":"react.lazy","permalink":"/docs/tags/react-lazy"},{"inline":true,"label":"react.suspense","permalink":"/docs/tags/react-suspense"},{"inline":true,"label":"dynamic-import","permalink":"/docs/tags/dynamic-import"},{"inline":true,"label":"import","permalink":"/docs/tags/import"},{"inline":true,"label":"export","permalink":"/docs/tags/export"},{"inline":true,"label":"module","permalink":"/docs/tags/module"},{"inline":true,"label":"file","permalink":"/docs/tags/file"},{"inline":true,"label":"path","permalink":"/docs/tags/path"},{"inline":true,"label":"relative","permalink":"/docs/tags/relative"},{"inline":true,"label":"absolute","permalink":"/docs/tags/absolute"},{"inline":true,"label":"jsx","permalink":"/docs/tags/jsx"},{"inline":true,"label":"javascript","permalink":"/docs/tags/javascript"},{"inline":true,"label":"code","permalink":"/docs/tags/code"},{"inline":true,"label":"code-splitting","permalink":"/docs/tags/code-splitting"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"lazy","permalink":"/docs/tags/lazy"},{"inline":true,"label":"suspense","permalink":"/docs/tags/suspense"},{"inline":true,"label":"react.lazy","permalink":"/docs/tags/react-lazy"},{"inline":true,"label":"react.suspense","permalink":"/docs/tags/react-suspense"},{"inline":true,"label":"dynamic-import","permalink":"/docs/tags/dynamic-import"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710610499000,"sidebarPosition":2,"frontMatter":{"id":"importing-a-component","title":"Importing Components in React","sidebar_label":"Importing a Component","sidebar_position":2,"tags":["react","import","component","importation","import","export","module","file","path","relative","absolute","jsx","javascript","code","code-splitting","dynamic","lazy","suspense","react.lazy","react.suspense","dynamic-import","import","export","module","file","path","relative","absolute","jsx","javascript","code","code-splitting","dynamic","lazy","suspense","react.lazy","react.suspense","dynamic-import"],"description":"Learn how to import components in your React applications. Unleash the magic of component importation and integrate them into your app with ease!"},"sidebar":"tutorialSidebar","previous":{"title":"Dependency","permalink":"/docs/react/building-your-app/installing-a-dependency"},"next":{"title":"Using Global Variables","permalink":"/docs/react/building-your-app/using-global-variables"}}');var a=t(74848),o=t(28453);const r={id:"importing-a-component",title:"Importing Components in React",sidebar_label:"Importing a Component",sidebar_position:2,tags:["react","import","component","importation","import","export","module","file","path","relative","absolute","jsx","javascript","code","code-splitting","dynamic","lazy","suspense","react.lazy","react.suspense","dynamic-import","import","export","module","file","path","relative","absolute","jsx","javascript","code","code-splitting","dynamic","lazy","suspense","react.lazy","react.suspense","dynamic-import"],description:"Learn how to import components in your React applications. Unleash the magic of component importation and integrate them into your app with ease!"},l=void 0,s={},p=[{value:"The Art of Component Summoning",id:"the-art-of-component-summoning",level:2},{value:"A Live Example to Unleash the Magic",id:"a-live-example-to-unleash-the-magic",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{BrowserWindow:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Welcome, brave Code Masterminds, to the wondrous world of component importation! In this guide, we shall unravel the secrets of importing components in your React applications, enabling you to summon their powers and weave them into the fabric of your app."}),"\n",(0,a.jsx)(n.h2,{id:"the-art-of-component-summoning",children:"The Art of Component Summoning"}),"\n",(0,a.jsx)(n.p,{children:"When crafting your React masterpiece, you'll often encounter the need to import components from external sources. Fear not, for we shall equip you with the mystical knowledge to achieve this feat!"}),"\n",(0,a.jsx)(n.p,{children:"To import a component, follow these steps:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 1:"})," Prepare your spellbook (a.k.a. your code editor) and open the file where you wish to import the component."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 2:"})," Utter the sacred incantation, starting with the ",(0,a.jsx)(n.code,{children:"import"})," keyword. Specify the name of the component you wish to summon, and assign it to a variable of your choosing."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",children:"import { ComponentName } from './path/to/component';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here, ",(0,a.jsx)(n.code,{children:"ComponentName"})," represents the name you desire for your component variable, and ",(0,a.jsx)(n.code,{children:"'./path/to/component'"})," refers to the relative path of the component file from the current file. Feel free to customize these as per your needs!"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 3:"})," With the component summoned, you are now ready to employ its powers within your code. Invoke it as a JSX tag, just like any other HTML element, and witness the magic unfold!"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="MyMagicalApp.jsx"',children:"import { ComponentName } from './path/to/component';\n\nfunction MyMagicalApp() {\n  return (\n    <div>\n      <h1>Welcome to My Magical App!</h1>\n      <ComponentName />\n    </div>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Voil\xe0! You have successfully summoned and integrated the component into your app. The magic of React is now at your fingertips!"}),"\n",(0,a.jsx)(n.h2,{id:"a-live-example-to-unleash-the-magic",children:"A Live Example to Unleash the Magic"}),"\n",(0,a.jsxs)(n.p,{children:["To solidify your understanding, let us embark on a mystical journey with a live example. Imagine you possess a component called ",(0,a.jsx)(n.code,{children:"Wizard"}),", capable of conjuring spells and enchantments. We shall import this component and unleash its powers within our app."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 1:"})," Create a new file called ",(0,a.jsx)(n.code,{children:"Wizard.jsx"})," and add the following code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="Wizard.jsx"',children:"import React from 'react';\n\nfunction Wizard() {\n  return <h2>I am a Wizard! Prepare to be amazed!</h2>;\n}\n\nexport default Wizard;\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Step 2:"})," Open your main app file (e.g., ",(0,a.jsx)(n.code,{children:"App.js"}),") and import the ",(0,a.jsx)(n.code,{children:"Wizard"})," component:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="App.js"',children:"import React from 'react';\nimport Wizard from './Wizard';\n\nfunction App() {\n  return (\n    <div>\n      <h1>Welcome to My Magical App!</h1>\n      <Wizard />\n    </div>\n  );\n}\n\nexport default App;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Behold the power of importation! The ",(0,a.jsx)(n.code,{children:"Wizard"}),' component shall grace your app, displaying the majestic message "I am a Wizard! Prepare to be amazed!"']}),"\n",(0,a.jsx)(t,{children:(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Welcome to My Magical App!"}),(0,a.jsx)("h2",{children:"I am a Wizard! Prepare to be amazed!"})]})}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"Congratulations, dear apprentice! You have mastered the art of importing components in your React app. With this newfound knowledge, you can now summon and integrate a myriad of components to bring your app to life."}),"\n",(0,a.jsx)(n.p,{children:"Remember, the path of a Code Mastermind is filled with curiosity and exploration. Experiment with different components, combine their powers, and create awe-inspiring React applications that mesmerize the world!"}),"\n",(0,a.jsx)(n.p,{children:"May your code be elegant, your components harmonious, and your journey through React be filled with laughter and enchantment."})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);