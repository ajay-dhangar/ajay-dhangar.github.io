"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[86069],{39243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"react/advanced-usage/advanced-configuration","title":"Advanced Configuration","description":"Learn how to customize and fine-tune your React projects with advanced configuration options in Create React App. Discover powerful features and alternatives to ejecting that will help you take control of your development environment.","source":"@site/docs/react/advanced-usage/advanced-configuration.md","sourceDirName":"react/advanced-usage","slug":"/react/advanced-usage/advanced-configuration","permalink":"/docs/react/advanced-usage/advanced-configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/advanced-usage/advanced-configuration.md","tags":[{"inline":true,"label":"Create React App","permalink":"/docs/tags/create-react-app"},{"inline":true,"label":"Advanced Configuration","permalink":"/docs/tags/advanced-configuration"},{"inline":true,"label":"Environment Variables","permalink":"/docs/tags/environment-variables"},{"inline":true,"label":"Webpack","permalink":"/docs/tags/webpack"},{"inline":true,"label":"Babel","permalink":"/docs/tags/babel"},{"inline":true,"label":"CRACO","permalink":"/docs/tags/craco"},{"inline":true,"label":"react-scripts","permalink":"/docs/tags/react-scripts"},{"inline":true,"label":"Custom Scripts","permalink":"/docs/tags/custom-scripts"},{"inline":true,"label":"Ejectify","permalink":"/docs/tags/ejectify"},{"inline":true,"label":"Custom Templates","permalink":"/docs/tags/custom-templates"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710610499000,"sidebarPosition":4,"frontMatter":{"id":"advanced-configuration","title":"Advanced Configuration","sidebar_label":"Advanced Configuration","sidebar_position":4,"tags":["Create React App","Advanced Configuration","Environment Variables","Webpack","Babel","CRACO","react-scripts","Custom Scripts","Ejectify","Custom Templates"],"keywords":["create react app","advanced configuration","environment variables","webpack","babel","craco","react-scripts","custom scripts","ejectify","custom templates"],"description":"Learn how to customize and fine-tune your React projects with advanced configuration options in Create React App. Discover powerful features and alternatives to ejecting that will help you take control of your development environment."},"sidebar":"tutorialSidebar","previous":{"title":"Pre-Rendering Static HTML","permalink":"/docs/react/advanced-usage/pre-rendering-into-static-html-files"},"next":{"title":"Alternatives to Ejecting","permalink":"/docs/react/advanced-usage/alternatives-to-ejecting"}}');var s=n(74848),r=n(28453);const l={id:"advanced-configuration",title:"Advanced Configuration",sidebar_label:"Advanced Configuration",sidebar_position:4,tags:["Create React App","Advanced Configuration","Environment Variables","Webpack","Babel","CRACO","react-scripts","Custom Scripts","Ejectify","Custom Templates"],keywords:["create react app","advanced configuration","environment variables","webpack","babel","craco","react-scripts","custom scripts","ejectify","custom templates"],description:"Learn how to customize and fine-tune your React projects with advanced configuration options in Create React App. Discover powerful features and alternatives to ejecting that will help you take control of your development environment."},a=void 0,o={},c=[{value:"Advanced Configuration in Create React App",id:"advanced-configuration-in-create-react-app",level:2},{value:"What is Create React App?",id:"what-is-create-react-app",level:2},{value:"Customizing the Configuration",id:"customizing-the-configuration",level:2},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Adding Webpack Plugins",id:"adding-webpack-plugins",level:3},{value:"Rewriting the Webpack Config",id:"rewriting-the-webpack-config",level:3},{value:"Adding Babel Plugins",id:"adding-babel-plugins",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In Create React App, you have the power to customize various development and production settings using environment variables. These options allow you to control the behavior of your React application without diving into complex configurations. Let's take a closer look at each setting in a handy table format:"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Variable"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Development"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Production"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Usage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"BROWSER"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Override the default system browser that Create React App opens during development. You can specify a specific browser or set it to ",(0,s.jsx)(t.code,{children:"none"})," to disable browser opening. You can even use a custom Node.js script for launching the browser with additional arguments from ",(0,s.jsx)(t.code,{children:"npm start"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"BROWSER_ARGS"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Pass additional arguments to the browser instance when ",(0,s.jsx)(t.code,{children:"BROWSER"})," is specified. Multiple arguments are supported, separated by spaces."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"HOST"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Specify a custom host for the development web server. By default, it binds to all available hostnames on the device."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PORT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Set a custom port for the development web server. By default, it listens on port 3000 or finds the next available port if 3000 is in use."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"HTTPS"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Run the development server in ",(0,s.jsx)(t.code,{children:"https"})," mode by setting this variable to ",(0,s.jsx)(t.code,{children:"true"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"WDS_SOCKET_HOST"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Specify a custom WebSocket hostname for hot module reloading in the development server. Useful when working on multiple Create React App projects simultaneously."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"WDS_SOCKET_PATH"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Set a custom WebSocket path for hot module reloading in the development server. Helpful when working on multiple Create React App projects simultaneously."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"WDS_SOCKET_PORT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Use a custom WebSocket port for hot module reloading in the development server. Useful for working on multiple Create React App projects simultaneously."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PUBLIC_URL"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Force assets to be referenced verbatim to the provided URL (including hostname). Useful when using a CDN to host your application. This variable overrides the default assumption of your app's hosting location specified in ",(0,s.jsx)(t.code,{children:"package.json"})," (",(0,s.jsx)(t.code,{children:"homepage"}),")."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"BUILD_PATH"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Specify a new path for Create React App to output compiled assets during the production build. By default, assets are output to ",(0,s.jsx)(t.code,{children:"/build"})," directory adjacent to your ",(0,s.jsx)(t.code,{children:"/src"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CI"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Treat warnings as build failures and make the test runner non-watching when ",(0,s.jsx)(t.code,{children:"true"}),". Most Continuous Integration (CI) environments set this flag by default."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"REACT_EDITOR"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Override the automatic editor detection in development. When your app crashes, you'll see an error overlay with a clickable stack trace. Clicking it opens the relevant source file based on running processes. You can set this variable to your editor's bin folder's path or ",(0,s.jsx)(t.code,{children:"none"})," to disable it."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CHOKIDAR_USEPOLLING"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Run the watcher in polling mode (",(0,s.jsx)(t.code,{children:"true"}),") if ",(0,s.jsx)(t.code,{children:"npm start"})," isn't detecting changes. Useful inside virtual machines (VMs)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"GENERATE_SOURCEMAP"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable (",(0,s.jsx)(t.code,{children:"true"}),") or disable (",(0,s.jsx)(t.code,{children:"false"}),") source maps generation during production build. Disabling source maps can resolve Out of Memory (OOM) issues on some smaller machines."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"INLINE_RUNTIME_CHUNK"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Embed (",(0,s.jsx)(t.code,{children:"true"}),") or import as usual (",(0,s.jsx)(t.code,{children:"false"}),") the runtime script into ",(0,s.jsx)(t.code,{children:"index.html"})," during production build. Use this when dealing with Content Security Policy (CSP) restrictions."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"IMAGE_INLINE_SIZE_LIMIT"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Control the size limit (in bytes) for images that will be inlined in the CSS or JS build artifact as data URI in base64. Set to ",(0,s.jsx)(t.code,{children:"0"})," to disable image inlining."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"FAST_REFRESH"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Enable (",(0,s.jsx)(t.code,{children:"true"}),") or disable (",(0,s.jsx)(t.code,{children:"false"}),") experimental Fast Refresh support. Fast Refresh allows tweaking components in real-time without reloading the page."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"TSC_COMPILE_ON_ERROR"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Allow running and building TypeScript projects even with TypeScript type check errors. Errors are displayed as warnings in the terminal and/or browser console."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ESLINT_NO_DEV_ERRORS"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\ud83d\udeab Ignored"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Convert ESLint errors to warnings during development, hiding them from the error overlay."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DISABLE_ESLINT_PLUGIN"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Completely disable the ",(0,s.jsx)(t.a,{href:"https://github.com/webpack-contrib/eslint-webpack-plugin",children:"eslint-webpack-plugin"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"DISABLE_NEW_JSX_TRANSFORM"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705 Used"}),(0,s.jsxs)(t.td,{style:{textAlign:"left"},children:["Disable (",(0,s.jsx)(t.code,{children:"true"}),") the new JSX transform introduced in React 17 and backported to React 16.14.0, 15.7.0, and 0.14.10. New projects have this enabled by default, but you may need to disable it in existing projects if you can't upgrade React."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Remember to experiment with these configurations, as it allows you to tailor your React application according to your specific requirements."}),"\n",(0,s.jsx)(t.h2,{id:"advanced-configuration-in-create-react-app",children:"Advanced Configuration in Create React App"}),"\n",(0,s.jsx)(t.p,{children:"Welcome to the world of advanced configurations in Create React App! \ud83d\ude80 In this guide, we'll dive deeper into the powerful features and options available to fine-tune your React projects. Don't worry; we'll make sure it's easy to understand, even for beginners!"}),"\n",(0,s.jsx)(t.h2,{id:"what-is-create-react-app",children:"What is Create React App?"}),"\n",(0,s.jsx)(t.p,{children:"For those who are new to Create React App (CRA), it's a fantastic tool that helps you kickstart your React projects without getting bogged down in complex setup processes. CRA abstracts away the configuration, allowing you to focus on building amazing React applications right from the get-go."}),"\n",(0,s.jsx)(t.h2,{id:"customizing-the-configuration",children:"Customizing the Configuration"}),"\n",(0,s.jsx)(t.p,{children:"CRA provides a way to customize its configuration without ejecting your project. Ejecting means you'd have to deal with all the build tools and configurations yourself, which can be overwhelming for beginners. So, let's look at how to customize the configuration while staying within the comfort zone of CRA."}),"\n",(0,s.jsx)(t.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(t.p,{children:["Environment variables are super handy for managing various settings in your app. By default, CRA supports ",(0,s.jsx)(t.code,{children:".env"})," files, but you can create environment-specific files like ",(0,s.jsx)(t.code,{children:".env.development"}),", ",(0,s.jsx)(t.code,{children:".env.production"}),", etc."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'# .env.development\nREACT_APP_API_URL="https://api.dev.example.com"\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now, you can access the variable like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const apiUrl = process.env.REACT_APP_API_URL;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"adding-webpack-plugins",children:"Adding Webpack Plugins"}),"\n",(0,s.jsx)(t.p,{children:"Webpack is the magic behind CRA, and you can extend it with plugins. For example, let's add the \"Bundle Analyzer\" plugin to visualize your bundle's size:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"// In your react-scripts version 5.0.0+ or higher, you can use the following syntax in the 'webpack.config.js'\nconst { BundleAnalyzerPlugin } = require(\"webpack-bundle-analyzer\");\n\n// Inside your 'webpack.config.js' module.exports object, add this plugin to the 'plugins' array\nmodule.exports = {\n  // ... other config options ...\n  plugins: [\n    // ... other plugins ...\n    new BundleAnalyzerPlugin(),\n  ],\n};\n"})}),"\n",(0,s.jsx)(t.h3,{id:"rewriting-the-webpack-config",children:"Rewriting the Webpack Config"}),"\n",(0,s.jsx)(t.p,{children:"Need more control over the Webpack configuration? CRA offers a simple way to extend the config directly:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"// In your react-scripts version 4.0.0+ or higher, you can use the following syntax in the 'craco.config.js'\nmodule.exports = {\n  webpack: {\n    configure: (webpackConfig) => {\n      // Add your custom webpack config here\n      webpackConfig.optimization.minimize = true;\n      return webpackConfig;\n    },\n  },\n};\n"})}),"\n",(0,s.jsx)(t.h3,{id:"adding-babel-plugins",children:"Adding Babel Plugins"}),"\n",(0,s.jsx)(t.p,{children:"To further enhance your app's capabilities, you can add Babel plugins to transform your code. For example, let's add the \"transform-class-properties\" plugin:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev @babel/plugin-proposal-class-properties\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Then, create a ",(0,s.jsx)(t.code,{children:".babelrc"})," file in the root of your project:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "plugins": ["@babel/plugin-proposal-class-properties"]\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"Now you can use class properties in your components:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"class MyClassComponent extends React.Component {\n  state = {\n    count: 0,\n  };\n\n  handleClick = () => {\n    this.setState((prevState) => ({ count: prevState.count + 1 }));\n  };\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"Congratulations! You've taken your first steps into the exciting world of advanced configuration in Create React App. Now you can customize your projects, add plugins, and take control of your development environment with confidence."}),"\n",(0,s.jsx)(t.p,{children:"Remember, the power of customization comes with great responsibility. Always experiment with caution and keep an eye on the official documentation for the latest updates and best practices. Happy coding! \ud83c\udf89"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);