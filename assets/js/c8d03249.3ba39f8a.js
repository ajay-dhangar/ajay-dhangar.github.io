"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[18312],{34800:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=r(17624),n=r(4552);const t={id:"making-a-progressive-web-app",title:"Making a Progressive Web App with Create React App",sidebar_label:"Making a Progressive Web App",sidebar_position:10,tags:[],keywords:["create react app","react","react-scripts","node","node.js","npm","start","build","test","production","development","local","pwa","progressive web app","service worker","caching","offline","access","fast","loading","engaging","experience","responsive","design","web","mobile","app","native","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript"],description:"Learn how to turn your regular React application into a fully-fledged Progressive Web App (PWA) using Create React App."},a=void 0,o={id:"react/building-your-app/making-a-progressive-web-app",title:"Making a Progressive Web App with Create React App",description:"Learn how to turn your regular React application into a fully-fledged Progressive Web App (PWA) using Create React App.",source:"@site/docs/react/building-your-app/making-a-progressive-web-app.md",sourceDirName:"react/building-your-app",slug:"/react/building-your-app/making-a-progressive-web-app",permalink:"/docs/react/building-your-app/making-a-progressive-web-app",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/building-your-app/making-a-progressive-web-app.md",tags:[],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:10,frontMatter:{id:"making-a-progressive-web-app",title:"Making a Progressive Web App with Create React App",sidebar_label:"Making a Progressive Web App",sidebar_position:10,tags:[],keywords:["create react app","react","react-scripts","node","node.js","npm","start","build","test","production","development","local","pwa","progressive web app","service worker","caching","offline","access","fast","loading","engaging","experience","responsive","design","web","mobile","app","native","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript","responsive","devices","desktop","smartphone","tablet","reliable","fast","engaging","offline","access","responsive","design","service","workers","caching","strategies","user","experience","user","retention","web","technologies","html","css","javascript"],description:"Learn how to turn your regular React application into a fully-fledged Progressive Web App (PWA) using Create React App."},sidebar:"tutorialSidebar",previous:{title:"Environment Variables",permalink:"/docs/react/building-your-app/adding-custom-environment-variables"},next:{title:"Measuring Performance",permalink:"/docs/react/building-your-app/measuring-performance"}},c={},l=[{value:"What is a Progressive Web App (PWA)?",id:"what-is-a-progressive-web-app-pwa",level:2},{value:"Why build a PWA?",id:"why-build-a-pwa",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Let&#39;s Get Started!",id:"lets-get-started",level:2},{value:"Step 1: Create a new Create React App project",id:"step-1-create-a-new-create-react-app-project",level:3},{value:"Step 2: Install the Workbox Library",id:"step-2-install-the-workbox-library",level:3},{value:"Step 3: Update the Service Worker",id:"step-3-update-the-service-worker",level:3},{value:"Step 4: Configure the Webpack to Use the Service Worker",id:"step-4-configure-the-webpack-to-use-the-service-worker",level:3},{value:"Step 5: Build your PWA",id:"step-5-build-your-pwa",level:3},{value:"Step 6: Test your PWA Locally",id:"step-6-test-your-pwa-locally",level:3},{value:"Step 7: Deploy your PWA",id:"step-7-deploy-your-pwa",level:3},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Welcome to the exciting world of Progressive Web Apps (PWAs)! In this guide, we'll explore how to turn your regular React application into a fully-fledged PWA using Create React App."}),"\n",(0,i.jsx)(s.h2,{id:"what-is-a-progressive-web-app-pwa",children:"What is a Progressive Web App (PWA)?"}),"\n",(0,i.jsx)(s.p,{children:"Progressive Web Apps (PWAs) are modern web applications that provide a native app-like experience to users, combining the best of web and mobile apps. They are reliable, fast, and engaging, and they work offline too!"}),"\n",(0,i.jsx)(s.p,{children:"PWAs are built using web technologies like HTML, CSS, and JavaScript and are designed to be responsive across different devices, including desktops, smartphones, and tablets. They are a great way to enhance user experience and boost user retention."}),"\n",(0,i.jsx)(s.p,{children:"A Progressive Web App is a web application that takes advantage of modern web technologies to deliver an enhanced user experience. PWAs are designed to be fast, reliable, and engaging, providing a native-app-like feel to users while being accessible directly from their web browsers."}),"\n",(0,i.jsx)(s.h2,{id:"why-build-a-pwa",children:"Why build a PWA?"}),"\n",(0,i.jsx)(s.p,{children:"PWAs offer several benefits:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Offline Access:"})," PWAs can work offline or in low-network conditions, allowing your users to access your app anytime, anywhere."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Fast Loading:"})," With service workers and caching strategies, PWAs load quickly, reducing bounce rates and keeping users engaged."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Engaging Experience:"})," PWAs can be installed on users' devices, providing a more immersive experience without the need to visit an app store."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Responsive Design:"})," PWAs adapt to different screen sizes and devices, ensuring a seamless experience across all platforms."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(s.p,{children:"Before we begin, make sure you have the following:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Node.js and npm installed on your machine."}),"\n",(0,i.jsx)(s.li,{children:"Basic knowledge of React.js and Create React App."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"lets-get-started",children:"Let's Get Started!"}),"\n",(0,i.jsx)(s.h3,{id:"step-1-create-a-new-create-react-app-project",children:"Step 1: Create a new Create React App project"}),"\n",(0,i.jsx)(s.p,{children:"If you haven't already, let's create a new React project using Create React App:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npx create-react-app my-pwa-app\ncd my-pwa-app\n"})}),"\n",(0,i.jsx)(s.h3,{id:"step-2-install-the-workbox-library",children:"Step 2: Install the Workbox Library"}),"\n",(0,i.jsx)(s.p,{children:"Workbox is a powerful library that simplifies service worker creation and caching strategies. To install Workbox, run the following command in your project directory:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npm install workbox-webpack-plugin --save-dev\n"})}),"\n",(0,i.jsx)(s.h3,{id:"step-3-update-the-service-worker",children:"Step 3: Update the Service Worker"}),"\n",(0,i.jsxs)(s.p,{children:["Now, let's create a service worker file and configure it to cache our app's assets for offline access. Create a new file called ",(0,i.jsx)(s.code,{children:"service-worker.js"})," in the ",(0,i.jsx)(s.code,{children:"public"})," folder and add the following code:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",metastring:'title="public/service-worker.js"',children:"\nimport { precacheAndRoute } from 'workbox-precaching';\n\n// Precache all the assets generated by webpack\nprecacheAndRoute(self.__WB_MANIFEST);\n"})}),"\n",(0,i.jsx)(s.h3,{id:"step-4-configure-the-webpack-to-use-the-service-worker",children:"Step 4: Configure the Webpack to Use the Service Worker"}),"\n",(0,i.jsxs)(s.p,{children:["Next, we need to configure Create React App to use our service worker during the build process. Open the ",(0,i.jsx)(s.code,{children:"webpack.config.js"})," file located in the ",(0,i.jsx)(s.code,{children:"config"})," folder and make the following changes:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",metastring:'title="config/webpack.config.js" ',children:"\nconst { InjectManifest } = require('workbox-webpack-plugin');\n\nmodule.exports = function override(config, env) {\n  if (env === 'production') {\n    // Add the Workbox plugin to generate the service worker\n    config.plugins.push(new InjectManifest({\n      swSrc: './public/service-worker.js',\n      // Add any additional configuration options here\n    }));\n  }\n  return config;\n};\n"})}),"\n",(0,i.jsx)(s.h3,{id:"step-5-build-your-pwa",children:"Step 5: Build your PWA"}),"\n",(0,i.jsx)(s.p,{children:"With the configuration in place, it's time to build your PWA:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,i.jsx)(s.h3,{id:"step-6-test-your-pwa-locally",children:"Step 6: Test your PWA Locally"}),"\n",(0,i.jsx)(s.p,{children:"You can now test your PWA locally by serving the production build:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"npm install -g serve\nserve -s build\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Visit ",(0,i.jsx)(s.code,{children:"http://localhost:5000"})," in your web browser to see your awesome PWA in action!"]}),"\n",(0,i.jsx)(s.h3,{id:"step-7-deploy-your-pwa",children:"Step 7: Deploy your PWA"}),"\n",(0,i.jsx)(s.p,{children:"To share your PWA with the world, deploy it on a hosting platform like Vercel, Netlify, or GitHub Pages."}),"\n",(0,i.jsx)(s.p,{children:"Congratulations! You've just transformed your React app into a Progressive Web App. Users will now enjoy a faster, more engaging experience with offline access. Enjoy the power of PWAs!"}),"\n",(0,i.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(s.p,{children:"In this guide, we've explored the process of creating a Progressive Web App using Create React App. By implementing service workers and caching strategies, your app is now capable of running offline and delivering a fantastic user experience."}),"\n",(0,i.jsx)(s.p,{children:"Remember, PWAs are a constantly evolving field, so keep exploring new possibilities and enhancing your app to provide the best user experience possible. Happy coding!"})]})}function d(e={}){const{wrapper:s}={...(0,n.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},4552:(e,s,r)=>{r.d(s,{I:()=>o,M:()=>a});var i=r(11504);const n={},t=i.createContext(n);function a(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);