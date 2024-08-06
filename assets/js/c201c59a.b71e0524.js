"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[95132],{26980:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=o(17624),i=o(4552);const s={id:"developing-components-in-issolation",title:"Developing Components in Isolation",sidebar_label:"Developing Components",sidebar_position:2,tags:["react","storybook","react-styleguidist","components","ui","development","isolation","preview","states","storybook-for-react","react-styleguidist"],description:"Learn how to develop and preview your React components in isolation from your main app using Storybook or React Styleguidist. Create a convenient way to work on components individually and view all their states."},r=void 0,a={id:"react/development/developing-components-in-issolation",title:"Developing Components in Isolation",description:"Learn how to develop and preview your React components in isolation from your main app using Storybook or React Styleguidist. Create a convenient way to work on components individually and view all their states.",source:"@site/docs/react/development/developing-components-in-isolation.md",sourceDirName:"react/development",slug:"/react/development/developing-components-in-issolation",permalink:"/docs/react/development/developing-components-in-issolation",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/development/developing-components-in-isolation.md",tags:[{label:"react",permalink:"/docs/tags/react"},{label:"storybook",permalink:"/docs/tags/storybook"},{label:"react-styleguidist",permalink:"/docs/tags/react-styleguidist"},{label:"components",permalink:"/docs/tags/components"},{label:"ui",permalink:"/docs/tags/ui"},{label:"development",permalink:"/docs/tags/development"},{label:"isolation",permalink:"/docs/tags/isolation"},{label:"preview",permalink:"/docs/tags/preview"},{label:"states",permalink:"/docs/tags/states"},{label:"storybook-for-react",permalink:"/docs/tags/storybook-for-react"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:2,frontMatter:{id:"developing-components-in-issolation",title:"Developing Components in Isolation",sidebar_label:"Developing Components",sidebar_position:2,tags:["react","storybook","react-styleguidist","components","ui","development","isolation","preview","states","storybook-for-react","react-styleguidist"],description:"Learn how to develop and preview your React components in isolation from your main app using Storybook or React Styleguidist. Create a convenient way to work on components individually and view all their states."},sidebar:"tutorialSidebar",previous:{title:"Editor Setup",permalink:"/docs/react/development/setting-up-your-editor"},next:{title:"Analyzing Bundle Size",permalink:"/docs/react/development/analyzing-the-bundle-size"}},l={},d=[{value:"Getting Started with Storybook",id:"getting-started-with-storybook",level:2},{value:"Getting Started with Styleguidist",id:"getting-started-with-styleguidist",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In a typical app, you have various UI components, each having multiple states. Let's take a basic button component as an example, which can have the following states:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Regular state with a text label."}),"\n",(0,n.jsx)(t.li,{children:"Disabled mode."}),"\n",(0,n.jsx)(t.li,{children:"Loading state."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"However, it can be challenging to visualize these states without running a sample app or looking at examples."}),"\n",(0,n.jsxs)(t.p,{children:["By using third-party tools like ",(0,n.jsx)(t.a,{href:"https://storybook.js.org",children:"Storybook for React"})," or ",(0,n.jsx)(t.a,{href:"https://react-styleguidist.js.org/",children:"React Styleguidist"}),", you can develop and preview your components in isolation from your main app. These tools provide a convenient way to work on components individually and view all their states."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/storybookjs/storybook/next/docs/get-started/storybook-third-party-docs.gif",alt:"Storybook for React Demo"})}),"\n",(0,n.jsx)(t.p,{children:"Additionally, you can deploy your Storybook or style guide as a static app, allowing your team members to review different UI component states without the need for a backend server or creating app accounts."}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-with-storybook",children:"Getting Started with Storybook"}),"\n",(0,n.jsx)(t.p,{children:"Storybook is a development environment specifically designed for React UI components. It enables you to browse a component library, view different states of each component, and interactively develop and test your components."}),"\n",(0,n.jsx)(t.p,{children:"To set up Storybook in your project, run the following command within your app's directory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npx sb init\n"})}),"\n",(0,n.jsx)(t.p,{children:"Follow the instructions displayed on the screen after running the command."}),"\n",(0,n.jsx)(t.p,{children:"Here are some resources to learn more about React Storybook:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://storybook.js.org/tutorials/",children:"Learn Storybook (tutorial)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://storybook.js.org/docs/react/get-started/introduction",children:"Documentation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/storybooks/storybook",children:"GitHub Repo"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/storybooks/storybook/tree/master/addons/storyshots",children:"Snapshot Testing UI"})," with Storybook + addon/storyshot"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-with-styleguidist",children:"Getting Started with Styleguidist"}),"\n",(0,n.jsx)(t.p,{children:"Styleguidist is another useful tool that combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, and an environment for developing components in isolation, similar to Storybook. In Styleguidist, you write examples in Markdown, and each code snippet is rendered as a live editable playground."}),"\n",(0,n.jsx)(t.p,{children:"To install Styleguidist, use the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm install --save react-styleguidist\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Alternatively, you can use ",(0,n.jsx)(t.code,{children:"yarn"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"yarn add react-styleguidist\n"})}),"\n",(0,n.jsxs)(t.p,{children:["After installing Styleguidist, add the following scripts to your ",(0,n.jsx)(t.code,{children:"package.json"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:'   "scripts": {\n+    "styleguide": "styleguidist server",\n+    "styleguide:build": "styleguidist build",\n     "start": "react-scripts start",\n'})}),"\n",(0,n.jsx)(t.p,{children:"To start the Styleguidist server, run the following command within your app's directory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm run styleguide\n"})}),"\n",(0,n.jsx)(t.p,{children:"Follow the instructions provided on the screen to continue setting up Styleguidist."}),"\n",(0,n.jsx)(t.p,{children:"Here are some resources to learn more about React Styleguidist:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/styleguidist/react-styleguidist",children:"GitHub Repo"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://react-styleguidist.js.org/docs/getting-started.html",children:"Documentation"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Now, whenever you make a commit, Prettier will automatically format the changed files. If you want to format your entire project for the first time, you can run ",(0,n.jsx)(t.code,{children:'./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To integrate Prettier into your favorite editor, refer to the ",(0,n.jsx)(t.a,{href:"https://prettier.io/docs/en/editors.html",children:"Editor Integration"})," section on the Prettier GitHub page."]})]})}function p(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},4552:(e,t,o)=>{o.d(t,{I:()=>a,M:()=>r});var n=o(11504);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);