"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[71426],{88444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=a(17624),s=a(4552);const r={id:"updating-to-new-releases",title:"Updating to New Releases",sidebar_position:5,tags:["react","create-react","react-scripts","updating","upgrading","migration","changelog","breaking-changes","polyfills","babel-loader","browserslist","package.json","npm","yarn","dependencies","development"],description:"Learn how to update an existing Create React App project to a newer version of react-scripts. Keep your project up to date with the latest features and improvements."},i=void 0,o={id:"react/getting-started/updating-to-new-releases",title:"Updating to New Releases",description:"Learn how to update an existing Create React App project to a newer version of react-scripts. Keep your project up to date with the latest features and improvements.",source:"@site/docs/react/getting-started/updating-to-new-releases.md",sourceDirName:"react/getting-started",slug:"/react/getting-started/updating-to-new-releases",permalink:"/docs/react/getting-started/updating-to-new-releases",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/getting-started/updating-to-new-releases.md",tags:[{label:"react",permalink:"/docs/tags/react"},{label:"create-react",permalink:"/docs/tags/create-react"},{label:"react-scripts",permalink:"/docs/tags/react-scripts"},{label:"updating",permalink:"/docs/tags/updating"},{label:"upgrading",permalink:"/docs/tags/upgrading"},{label:"migration",permalink:"/docs/tags/migration"},{label:"changelog",permalink:"/docs/tags/changelog"},{label:"breaking-changes",permalink:"/docs/tags/breaking-changes"},{label:"polyfills",permalink:"/docs/tags/polyfills"},{label:"babel-loader",permalink:"/docs/tags/babel-loader"},{label:"browserslist",permalink:"/docs/tags/browserslist"},{label:"package.json",permalink:"/docs/tags/package-json"},{label:"npm",permalink:"/docs/tags/npm"},{label:"yarn",permalink:"/docs/tags/yarn"},{label:"dependencies",permalink:"/docs/tags/dependencies"},{label:"development",permalink:"/docs/tags/development"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:5,frontMatter:{id:"updating-to-new-releases",title:"Updating to New Releases",sidebar_position:5,tags:["react","create-react","react-scripts","updating","upgrading","migration","changelog","breaking-changes","polyfills","babel-loader","browserslist","package.json","npm","yarn","dependencies","development"],description:"Learn how to update an existing Create React App project to a newer version of react-scripts. Keep your project up to date with the latest features and improvements."},sidebar:"tutorialSidebar",previous:{title:"Supported Browsers and Features",permalink:"/docs/react/getting-started/supported-browsers-features"},next:{title:"Development",permalink:"/docs/category/development"}},c={},l=[{value:"Updating <code>react-scripts</code> in an Existing Project",id:"updating-react-scripts-in-an-existing-project",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In Create React App, there are two important packages:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"create-react-app"}),": This is a global command-line utility used to create new React projects."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"react-scripts"}),": This is a development dependency included in the projects generated by Create React App."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["When you run the command ",(0,n.jsx)(t.code,{children:"npx create-react-app my-app"}),", it automatically installs the latest version of Create React App for you."]}),"\n",(0,n.jsx)(t.admonition,{title:"Warn",type:"caution",children:(0,n.jsxs)(t.p,{children:["If you have previously installed ",(0,n.jsx)(t.code,{children:"create-react-app"})," globally using ",(0,n.jsx)(t.code,{children:"npm install -g create-react-app"}),", please refer to the ",(0,n.jsx)(t.a,{href:"/docs/react/getting-started/",children:"Getting Started"})," guide to learn about the current installation steps."]})}),"\n",(0,n.jsxs)(t.p,{children:["Whenever you create a new project with Create React App, it sets up the project with the latest version of ",(0,n.jsx)(t.code,{children:"react-scripts"}),". This ensures that you benefit from all the new features and improvements available in the latest version."]}),"\n",(0,n.jsxs)(t.h2,{id:"updating-react-scripts-in-an-existing-project",children:["Updating ",(0,n.jsx)(t.code,{children:"react-scripts"})," in an Existing Project"]}),"\n",(0,n.jsxs)(t.p,{children:["To update an existing project to a newer version of ",(0,n.jsx)(t.code,{children:"react-scripts"}),", you can follow these steps:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Open the ",(0,n.jsx)(t.a,{href:"https://github.com/CodeMastermindHQ/CodeMastermindHQ/blob/main/CHANGELOG.md",children:"changelog"})," for Create React App."]}),"\n",(0,n.jsxs)(t.li,{children:["Identify the version of ",(0,n.jsx)(t.code,{children:"react-scripts"})," that your project is currently using. You can find this information in the ",(0,n.jsx)(t.code,{children:"package.json"})," file located in your project folder."]}),"\n",(0,n.jsxs)(t.li,{children:["Look for the migration instructions corresponding to the newer versions of ",(0,n.jsx)(t.code,{children:"react-scripts"})," in the changelog."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["In most cases, simply updating the ",(0,n.jsx)(t.code,{children:"react-scripts"})," version in the ",(0,n.jsx)(t.code,{children:"package.json"})," file and running ",(0,n.jsx)(t.code,{children:"npm install"})," (or ",(0,n.jsx)(t.code,{children:"yarn install"}),") in your project folder should be sufficient. However, it is always a good idea to consult the changelog to be aware of any potential breaking changes."]}),"\n",(0,n.jsxs)(t.p,{children:["We strive to keep the breaking changes to a minimum, making the process of upgrading to newer versions of ",(0,n.jsx)(t.code,{children:"react-scripts"})," as painless as possible."]}),"\n",(0,n.jsx)(t.admonition,{title:"Note:",type:"note",children:(0,n.jsx)(t.p,{children:"Create React App does not automatically include polyfills for you. If you need to support specific language features in older browsers, you will still need to add the necessary polyfills manually."})}),"\n",(0,n.jsx)(t.admonition,{title:"info",type:"tip",children:(0,n.jsxs)(t.p,{children:["If you make changes to the ",(0,n.jsx)(t.code,{children:"browserslist"})," configuration but notice that your changes are not being picked up immediately, it may be due to an ",(0,n.jsx)(t.a,{href:"https://github.com/babel/babel-loader/issues/690",children:"issue in babel-loader"})," that prevents the detection of changes in your ",(0,n.jsx)(t.code,{children:"package.json"}),". To resolve this, you can delete the ",(0,n.jsx)(t.code,{children:"node_modules/.cache"})," folder and try again."]})}),"\n",(0,n.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,n.jsxs)(t.p,{children:["Keeping your project up to date with the latest version of ",(0,n.jsx)(t.code,{children:"react-scripts"})," is important to ensure that you benefit from the latest features and improvements. By following the migration instructions in the changelog, you can safely update your project to a newer version of ",(0,n.jsx)(t.code,{children:"react-scripts"})," and keep your project in sync with the latest developments in the React ecosystem."]})]})}function p(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4552:(e,t,a)=>{a.d(t,{I:()=>o,M:()=>i});var n=a(11504);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);