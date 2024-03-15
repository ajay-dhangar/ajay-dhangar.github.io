"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[31156],{67256:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=e(17624),a=e(4552);const s={title:"Install MongoDB Windows",authors:["ajay-dhangar"],tags:["database","mongodb","mongosh","windows"],date:new Date("2024-03-15T10:37:46.000Z"),description:"Installation MongoDB and mongosh",draft:!1},l=void 0,i={permalink:"/code-harbor-hub/blog/2022/05/01/install-mongodb-windows",source:"@site/blog/2022-05-01-install-mongodb-windows.md",title:"Install MongoDB Windows",description:"Installation MongoDB and mongosh",date:"2024-03-15T10:37:46.000Z",formattedDate:"March 15, 2024",tags:[{label:"database",permalink:"/code-harbor-hub/blog/tags/database"},{label:"mongodb",permalink:"/code-harbor-hub/blog/tags/mongodb"},{label:"mongosh",permalink:"/code-harbor-hub/blog/tags/mongosh"},{label:"windows",permalink:"/code-harbor-hub/blog/tags/windows"}],readingTime:2.2,hasTruncateMarker:!1,authors:[{name:"Ajay Dhangar",url:"https://github.com/ajay-dhangar",imageURL:"https://avatars.githubusercontent.com/u/99037494?v=4",key:"ajay-dhangar"}],frontMatter:{title:"Install MongoDB Windows",authors:["ajay-dhangar"],tags:["database","mongodb","mongosh","windows"],date:"2024-03-15T10:37:46.000Z",description:"Installation MongoDB and mongosh",draft:!1},unlisted:!1,prevItem:{title:"CI evolution: From FTP client to GitHub Action",permalink:"/code-harbor-hub/blog/2021/11/13/from-ftp-client-to-github-action"},nextItem:{title:"Install MongoDB Linux",permalink:"/code-harbor-hub/blog/2022/11/27/install-mongodb-linux"}},r={authorsImageUrls:[void 0]},d=[{value:"Step 1: Download the MongoDB Installer",id:"step-1-download-the-mongodb-installer",level:2},{value:"Step 2: Run the MongoDB Installer",id:"step-2-run-the-mongodb-installer",level:2},{value:"Step 3: Add MongoDB to the System Path",id:"step-3-add-mongodb-to-the-system-path",level:2},{value:"Step 4: Start the MongoDB Service",id:"step-4-start-the-mongodb-service",level:2},{value:"Step 5: Connect to the MongoDB Server",id:"step-5-connect-to-the-mongodb-server",level:2}];function h(n){const o={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.M)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"MongoDB is a popular NoSQL database that is known for its flexibility and scalability. It is widely used in modern web applications and is a great choice for storing and managing large volumes of data. In this article, we will walk you through the process of installing MongoDB on a Windows system."}),"\n",(0,t.jsx)(o.h2,{id:"step-1-download-the-mongodb-installer",children:"Step 1: Download the MongoDB Installer"}),"\n",(0,t.jsxs)(o.p,{children:["The first step is to download the MongoDB installer from the official MongoDB website. You can find the installer at the following URL: ",(0,t.jsx)(o.a,{href:"https://www.mongodb.com/try/download/community",children:"https://www.mongodb.com/try/download/community"})]}),"\n",(0,t.jsx)(o.h2,{id:"step-2-run-the-mongodb-installer",children:"Step 2: Run the MongoDB Installer"}),"\n",(0,t.jsx)(o.p,{children:'Once the installer has been downloaded, you can run it to start the installation process. Follow the on-screen instructions to complete the installation. You can choose the "Complete" setup type to install all the MongoDB tools, including the MongoDB shell (mongosh).'}),"\n",(0,t.jsx)(o.h2,{id:"step-3-add-mongodb-to-the-system-path",children:"Step 3: Add MongoDB to the System Path"}),"\n",(0,t.jsx)(o.p,{children:"After the installation is complete, you need to add the MongoDB binaries to your system's PATH environment variable. This will allow you to run MongoDB and mongosh commands from any directory in your terminal."}),"\n",(0,t.jsx)(o.p,{children:"To add MongoDB to the system PATH, follow these steps:"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsx)(o.li,{children:'Open the Control Panel and navigate to "System and Security" > "System" > "Advanced system settings".'}),"\n",(0,t.jsx)(o.li,{children:'In the System Properties window, click on the "Environment Variables" button.'}),"\n",(0,t.jsx)(o.li,{children:'In the Environment Variables window, select the "Path" variable under "System variables" and click the "Edit" button.'}),"\n",(0,t.jsxs)(o.li,{children:['Click the "New" button and add the path to the "bin" directory of your MongoDB installation (e.g., ',(0,t.jsx)(o.code,{children:"C:\\Program Files\\MongoDB\\Server\\5.0\\bin"}),")."]}),"\n",(0,t.jsx)(o.li,{children:'Click "OK" to save the changes and close the Environment Variables window.'}),"\n",(0,t.jsx)(o.li,{children:'Click "OK" again to close the System Properties window.'}),"\n",(0,t.jsx)(o.li,{children:"Restart your terminal to apply the changes."}),"\n",(0,t.jsx)(o.li,{children:"You can now run MongoDB and mongosh commands from any directory in your terminal."}),"\n",(0,t.jsx)(o.li,{children:"To verify that MongoDB and mongosh are installed correctly, you can run the following commands in your terminal:"}),"\n"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"mongod --version\nmongosh --version\n"})}),"\n",(0,t.jsx)(o.h2,{id:"step-4-start-the-mongodb-service",children:"Step 4: Start the MongoDB Service"}),"\n",(0,t.jsx)(o.p,{children:"To start the MongoDB service, you can run the following command in your terminal:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"mongod\n"})}),"\n",(0,t.jsx)(o.p,{children:"This will start the MongoDB server on your local machine. You can now connect to the MongoDB server using the mongosh shell."}),"\n",(0,t.jsx)(o.h2,{id:"step-5-connect-to-the-mongodb-server",children:"Step 5: Connect to the MongoDB Server"}),"\n",(0,t.jsx)(o.p,{children:"To connect to the MongoDB server, you can run the following command in your terminal:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"mongosh\n"})}),"\n",(0,t.jsx)(o.p,{children:"This will open the mongosh shell, and you can start interacting with the MongoDB server using JavaScript-like syntax."}),"\n",(0,t.jsx)(o.p,{children:"Congratulations! You have successfully installed MongoDB and mongosh on your Windows system. You are now ready to start building powerful applications with MongoDB as your database. Happy coding!"})]})}function c(n={}){const{wrapper:o}={...(0,a.M)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},4552:(n,o,e)=>{e.d(o,{I:()=>i,M:()=>l});var t=e(11504);const a={},s=t.createContext(a);function l(n){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(o):{...o,...n}}),[o,n])}function i(n){let o;return o=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),t.createElement(s.Provider,{value:o},n.children)}}}]);