"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[73577],{64384:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});const l=JSON.parse('{"id":"react/building-your-app/adding-custom-environment-variables","title":"Adding Custom Environment Variables","description":"Learn how to add custom environment variables to your Create React App, empowering your app to configure differently based on the environment in which it runs.","source":"@site/docs/react/building-your-app/adding-custom-environment-variables.md","sourceDirName":"react/building-your-app","slug":"/react/building-your-app/adding-custom-environment-variables","permalink":"/docs/react/building-your-app/adding-custom-environment-variables","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/building-your-app/adding-custom-environment-variables.md","tags":[{"inline":true,"label":"environment","permalink":"/docs/tags/environment"},{"inline":true,"label":"variables","permalink":"/docs/tags/variables"},{"inline":true,"label":"env","permalink":"/docs/tags/env"},{"inline":true,"label":"custom","permalink":"/docs/tags/custom"},{"inline":true,"label":"create react app","permalink":"/docs/tags/create-react-app"},{"inline":true,"label":"react","permalink":"/docs/tags/react"},{"inline":true,"label":"react-scripts","permalink":"/docs/tags/react-scripts"},{"inline":true,"label":"node","permalink":"/docs/tags/node"},{"inline":true,"label":"node.js","permalink":"/docs/tags/node-js"},{"inline":true,"label":"npm","permalink":"/docs/tags/npm"},{"inline":true,"label":"start","permalink":"/docs/tags/start"},{"inline":true,"label":"build","permalink":"/docs/tags/build"},{"inline":true,"label":"test","permalink":"/docs/tags/test"},{"inline":true,"label":"production","permalink":"/docs/tags/production"},{"inline":true,"label":"development","permalink":"/docs/tags/development"},{"inline":true,"label":"local","permalink":"/docs/tags/local"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"},{"inline":true,"label":"sensitive","permalink":"/docs/tags/sensitive"},{"inline":true,"label":"information","permalink":"/docs/tags/information"},{"inline":true,"label":"security","permalink":"/docs/tags/security"},{"inline":true,"label":"configuration","permalink":"/docs/tags/configuration"},{"inline":true,"label":"settings","permalink":"/docs/tags/settings"},{"inline":true,"label":"dynamic","permalink":"/docs/tags/dynamic"},{"inline":true,"label":"value","permalink":"/docs/tags/value"},{"inline":true,"label":"html","permalink":"/docs/tags/html"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"js","permalink":"/docs/tags/js"},{"inline":true,"label":"bundle","permalink":"/docs/tags/bundle"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"placeholders","permalink":"/docs/tags/placeholders"},{"inline":true,"label":"dotenv","permalink":"/docs/tags/dotenv"},{"inline":true,"label":"expand","permalink":"/docs/tags/expand"},{"inline":true,"label":"server","permalink":"/docs/tags/server"},{"inline":true,"label":"client","permalink":"/docs/tags/client"},{"inline":true,"label":"runtime","permalink":"/docs/tags/runtime"},{"inline":true,"label":"embed","permalink":"/docs/tags/embed"},{"inline":true,"label":"build-time","permalink":"/docs/tags/build-time"},{"inline":true,"label":"process","permalink":"/docs/tags/process"},{"inline":true,"label":"api","permalink":"/docs/tags/api"},{"inline":true,"label":"key","permalink":"/docs/tags/key"},{"inline":true,"label":"secret","permalink":"/docs/tags/secret"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710610499000,"sidebarPosition":9,"frontMatter":{"id":"adding-custom-environment-variables","title":"Adding Custom Environment Variables","sidebar_label":"Environment Variables","sidebar_position":9,"tags":["environment","variables","env","custom","create react app","react","react-scripts","node","node.js","npm","start","build","test","production","development","local","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret"],"keywords":["environment","variables","env","custom","create react app","react","react-scripts","node","node.js","npm","start","build","test","production","development","local","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret"],"description":"Learn how to add custom environment variables to your Create React App, empowering your app to configure differently based on the environment in which it runs."},"sidebar":"tutorialSidebar","previous":{"title":"Adding a Router","permalink":"/docs/react/building-your-app/adding-a-router"},"next":{"title":"Making a Progressive Web App","permalink":"/docs/react/building-your-app/making-a-progressive-web-app"}}');var s=i(74848),t=i(28453);const r={id:"adding-custom-environment-variables",title:"Adding Custom Environment Variables",sidebar_label:"Environment Variables",sidebar_position:9,tags:["environment","variables","env","custom","create react app","react","react-scripts","node","node.js","npm","start","build","test","production","development","local","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret"],keywords:["environment","variables","env","custom","create react app","react","react-scripts","node","node.js","npm","start","build","test","production","development","local","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret","sensitive","information","security","configuration","settings","dynamic","value","html","css","js","bundle","server","placeholders","dotenv","expand","server","client","runtime","embed","build-time","process","api","key","secret"],description:"Learn how to add custom environment variables to your Create React App, empowering your app to configure differently based on the environment in which it runs."},a=void 0,o={},c=[{value:"Introduction to Environment Variables",id:"introduction-to-environment-variables",level:2},{value:"Understanding Build-time Embedding",id:"understanding-build-time-embedding",level:2},{value:"Creating Custom Environment Variables",id:"creating-custom-environment-variables",level:2},{value:"Method 1: Shell Environment Variables (Temporary)",id:"method-1-shell-environment-variables-temporary",level:3},{value:"Windows (cmd.exe)",id:"windows-cmdexe",level:4},{value:"Windows (Powershell)",id:"windows-powershell",level:4},{value:"Linux, macOS (Bash)",id:"linux-macos-bash",level:4},{value:"Method 2: .env File (Permanent)",id:"method-2-env-file-permanent",level:3},{value:"Using Custom Environment Variables in Your App",id:"using-custom-environment-variables-in-your-app",level:3},{value:"Leveraging Environment Variables in the HTML",id:"leveraging-environment-variables-in-the-html",level:2},{value:"More <code>.env</code> Files and Environment-specific Settings",id:"more-env-files-and-environment-specific-settings",level:2},{value:"Expanding Variables in <code>.env</code>",id:"expanding-variables-in-env",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Welcome, aspiring Coders, to the enchanting world of React development! In this guide, we will explore the magical realm of custom environment variables and how they empower your React applications."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["This feature is available with ",(0,s.jsx)(n.code,{children:"react-scripts@0.2.3"})," and higher."]})}),"\n",(0,s.jsx)(n.h2,{id:"introduction-to-environment-variables",children:"Introduction to Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Environment variables are like magical keys that unlock hidden powers for your React app. They allow you to configure your app differently based on the environment in which it runs. With Create React App, you get two special environment variables by default: ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," and any variable starting with ",(0,s.jsx)(n.code,{children:"REACT_APP_"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,s.jsx)(n.p,{children:"Never store sensitive information like private API keys in your React app! Environment variables are embedded into the build, making them accessible to anyone inspecting your app's files."})}),"\n",(0,s.jsx)(n.h2,{id:"understanding-build-time-embedding",children:"Understanding Build-time Embedding"}),"\n",(0,s.jsx)(n.p,{children:"During the build process, Create React App embeds the environment variables into the static HTML/CSS/JS bundle. As a result, your app cannot access or change these variables at runtime. If you need dynamic values at runtime, you'd have to load HTML into memory on the server and replace placeholders. Alternatively, rebuild your app on the server each time the variables change."}),"\n",(0,s.jsx)(n.h2,{id:"creating-custom-environment-variables",children:"Creating Custom Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["To create custom environment variables, you must name them starting with ",(0,s.jsx)(n.code,{children:"REACT_APP_"}),". Any other variables, except for ",(0,s.jsx)(n.code,{children:"NODE_ENV"}),", will be ignored to prevent accidental exposure of private keys."]}),"\n",(0,s.jsxs)(n.p,{children:["For instance, to define a variable ",(0,s.jsx)(n.code,{children:"REACT_APP_API_KEY"}),", you can do it in two ways:"]}),"\n",(0,s.jsx)(n.h3,{id:"method-1-shell-environment-variables-temporary",children:"Method 1: Shell Environment Variables (Temporary)"}),"\n",(0,s.jsx)(n.p,{children:"For a temporary solution during your current shell session:"}),"\n",(0,s.jsx)(n.h4,{id:"windows-cmdexe",children:"Windows (cmd.exe)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cmd",children:'set "REACT_APP_API_KEY=your-api-key" && npm start\n'})}),"\n",(0,s.jsx)(n.h4,{id:"windows-powershell",children:"Windows (Powershell)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Powershell",children:'($env:REACT_APP_API_KEY = "your-api-key") -and (npm start)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"linux-macos-bash",children:"Linux, macOS (Bash)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"REACT_APP_API_KEY=your-api-key npm start\n"})}),"\n",(0,s.jsx)(n.h3,{id:"method-2-env-file-permanent",children:"Method 2: .env File (Permanent)"}),"\n",(0,s.jsxs)(n.p,{children:["For permanent environment variables, create a file called ",(0,s.jsx)(n.code,{children:".env"})," in the root of your project and define your variables like this:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REACT_APP_API_KEY=your-api-key\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Environment variables defined in ",(0,s.jsx)(n.code,{children:".env"})," should be kept secret and not committed to source control."]})}),"\n",(0,s.jsx)(n.h3,{id:"using-custom-environment-variables-in-your-app",children:"Using Custom Environment Variables in Your App"}),"\n",(0,s.jsxs)(n.p,{children:["Once you've defined your custom variables, you can access them in your code via ",(0,s.jsx)(n.code,{children:"process.env"}),". For example, let's display the API key and the current environment in a component:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="MyComponent.jsx"',children:"import React from 'react';\n\nconst MyComponent = () => {\n  return (\n    <div>\n      <p>Your API key: {process.env.REACT_APP_API_KEY}</p>\n      <p>You are running in {process.env.NODE_ENV} mode.</p>\n    </div>\n  );\n};\n\nexport default MyComponent;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["During the build process, ",(0,s.jsx)(n.code,{children:"process.env.REACT_APP_API_KEY"})," will be replaced with the actual value you defined in the environment variable. The value of ",(0,s.jsx)(n.code,{children:"process.env.NODE_ENV"})," will be set automatically based on the build type: ",(0,s.jsx)(n.code,{children:"'development'"}),", ",(0,s.jsx)(n.code,{children:"'test'"}),", or ",(0,s.jsx)(n.code,{children:"'production'"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"leveraging-environment-variables-in-the-html",children:"Leveraging Environment Variables in the HTML"}),"\n",(0,s.jsxs)(n.p,{children:["Starting with ",(0,s.jsx)(n.code,{children:"react-scripts@0.9.0"}),", you can also use environment variables in ",(0,s.jsx)(n.code,{children:"public/index.html"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<title>%REACT_APP_WEBSITE_NAME%</title>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Remember the same naming convention applies: the variable must start with ",(0,s.jsx)(n.code,{children:"REACT_APP_"}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"more-env-files-and-environment-specific-settings",children:["More ",(0,s.jsx)(n.code,{children:".env"})," Files and Environment-specific Settings"]}),"\n",(0,s.jsxs)(n.p,{children:["From ",(0,s.jsx)(n.code,{children:"react-scripts@1.0.0"}),", Create React App allows you to use different ",(0,s.jsx)(n.code,{children:".env"})," files for various environments:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".env"}),": Default file."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".env.local"}),": Local overrides for all environments except ",(0,s.jsx)(n.code,{children:"test"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".env.development"}),", ",(0,s.jsx)(n.code,{children:".env.test"}),", ",(0,s.jsx)(n.code,{children:".env.production"}),": Environment-specific settings."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:".env.development.local"}),", ",(0,s.jsx)(n.code,{children:".env.test.local"}),", ",(0,s.jsx)(n.code,{children:".env.production.local"}),": Local overrides for environment-specific settings."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["When multiple ",(0,s.jsx)(n.code,{children:".env"})," files are present, they follow the priority order:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm start"}),": ",(0,s.jsx)(n.code,{children:".env.development.local"}),", ",(0,s.jsx)(n.code,{children:".env.local"}),", ",(0,s.jsx)(n.code,{children:".env.development"}),", ",(0,s.jsx)(n.code,{children:".env"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm run build"}),": ",(0,s.jsx)(n.code,{children:".env.production.local"}),", ",(0,s.jsx)(n.code,{children:".env.local"}),", ",(0,s.jsx)(n.code,{children:".env.production"}),", ",(0,s.jsx)(n.code,{children:".env"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"npm test"}),": ",(0,s.jsx)(n.code,{children:".env.test.local"}),", ",(0,s.jsx)(n.code,{children:".env.test"}),", ",(0,s.jsx)(n.code,{children:".env"})," (note ",(0,s.jsx)(n.code,{children:".env.local"})," is missing)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Environment-specific variables serve as defaults if not explicitly set on the machine."}),"\n",(0,s.jsxs)(n.h2,{id:"expanding-variables-in-env",children:["Expanding Variables in ",(0,s.jsx)(n.code,{children:".env"})]}),"\n",(0,s.jsxs)(n.p,{children:["With ",(0,s.jsx)(n.code,{children:"react-scripts@1.1.0"})," and higher, you can use variables already defined on your machine within your ",(0,s.jsx)(n.code,{children:".env"})," file using ",(0,s.jsx)(n.a,{href:"https://github.com/motdotla/dotenv-expand",children:"dotenv-expand"}),". For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REACT_APP_VERSION=$npm_package_version\n# or\nREACT_APP_VERSION=${npm_package_version}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"You've now mastered the art of adding custom environment variables to your Create React App! These magical keys will help you configure your app in various environments while keeping sensitive information secure. Remember to handle secrets carefully and avoid committing them to source control."}),"\n",(0,s.jsx)(n.p,{children:"Happy coding, and may your React apps enchant users across the realms of the web!"})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var l=i(96540);const s={},t=l.createContext(s);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);