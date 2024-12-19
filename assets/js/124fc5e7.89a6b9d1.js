"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[83320],{30077:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"react/styles-and-assets/adding-css-reset","title":"Adding A CSS Reset","description":"Learn how to add a CSS reset to your Create React App project using PostCSS Normalize. Ensure consistent styling across different browsers by providing a solid foundation for your React components.","source":"@site/docs/react/styles-and-assets/adding-css-reset.md","sourceDirName":"react/styles-and-assets","slug":"/react/styles-and-assets/adding-css-reset","permalink":"/docs/react/styles-and-assets/adding-css-reset","draft":false,"unlisted":false,"editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/styles-and-assets/adding-css-reset.md","tags":[{"inline":true,"label":"react","permalink":"/docs/tags/react"},{"inline":true,"label":"create-react-app","permalink":"/docs/tags/create-react-app"},{"inline":true,"label":"css","permalink":"/docs/tags/css"},{"inline":true,"label":"stylesheet","permalink":"/docs/tags/stylesheet"},{"inline":true,"label":"styling","permalink":"/docs/tags/styling"},{"inline":true,"label":"react-scripts","permalink":"/docs/tags/react-scripts"},{"inline":true,"label":"react-dom","permalink":"/docs/tags/react-dom"},{"inline":true,"label":"react-app","permalink":"/docs/tags/react-app"}],"version":"current","lastUpdatedBy":"ajay-dhangar","lastUpdatedAt":1710610499000,"sidebarPosition":4,"frontMatter":{"id":"adding-css-reset","title":"Adding A CSS Reset","sidebar_label":"CSS Reset","sidebar_position":4,"tags":["react","create-react-app","css","stylesheet","styling","react-scripts","react-dom","react-app"],"description":"Learn how to add a CSS reset to your Create React App project using PostCSS Normalize. Ensure consistent styling across different browsers by providing a solid foundation for your React components."},"sidebar":"tutorialSidebar","previous":{"title":"Sass Stylesheet","permalink":"/docs/react/styles-and-assets/adding-a-sass-stylesheet"},"next":{"title":"Post Processing CSS","permalink":"/docs/react/styles-and-assets/post-processing-css"}}');var r=t(74848),o=t(28453);const i={id:"adding-css-reset",title:"Adding A CSS Reset",sidebar_label:"CSS Reset",sidebar_position:4,tags:["react","create-react-app","css","stylesheet","styling","react-scripts","react-dom","react-app"],description:"Learn how to add a CSS reset to your Create React App project using PostCSS Normalize. Ensure consistent styling across different browsers by providing a solid foundation for your React components."},a=void 0,l={},c=[{value:"Step 1: Set up PostCSS Normalize",id:"step-1-set-up-postcss-normalize",level:2},{value:"Step 2: Customize Normalize.css (Optional)",id:"step-2-customize-normalizecss-optional",level:2},{value:"Browser Support",id:"browser-support",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["This tutorial will guide you on adding a CSS reset to your React project using ",(0,r.jsx)(s.a,{href:"https://github.com/csstools/postcss-normalize",children:"PostCSS Normalize"}),", which provides a solid foundation for consistent styling across different browsers."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"To get started, follow these steps:"})}),"\n",(0,r.jsx)(s.h2,{id:"step-1-set-up-postcss-normalize",children:"Step 1: Set up PostCSS Normalize"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"1. Install the necessary dependencies by running the following command in your terminal:"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"npm install postcss-normalize\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["2. In your project's main CSS file (e.g., ",(0,r.jsx)(s.code,{children:"index.css"})," or ",(0,r.jsx)(s.code,{children:"App.css"}),"), import PostCSS Normalize by adding the following line:"]})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-css",metastring:'title="index.css"',children:"@import-normalize; /* Import normalize.css styles */\n"})}),"\n",(0,r.jsx)(s.p,{children:"By including this line, you bring in the necessary CSS reset styles."}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["If you're using Visual Studio Code and encounter an \"",(0,r.jsx)(s.em,{children:"Unknown at rule @import-normalize css(unknownAtRules)"}),'" warning, you can change the ',(0,r.jsx)(s.code,{children:"css.lint.unknownAtRules"})," setting to ",(0,r.jsx)(s.code,{children:"ignore"})," in your editor preferences."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["3. Feel free to add your custom styles below the ",(0,r.jsx)(s.code,{children:"@import-normalize"})," line. This is where you can customize the appearance of your React components."]})}),"\n",(0,r.jsx)(s.h2,{id:"step-2-customize-normalizecss-optional",children:"Step 2: Customize Normalize.css (Optional)"}),"\n",(0,r.jsxs)(s.p,{children:["PostCSS Normalize allows you to control which parts of ",(0,r.jsx)(s.a,{href:"https://github.com/csstools/normalize.css",children:"normalize.css"})," you want to include based on your project's specific requirements. The styles provided by normalize.css ensure consistent rendering across different browsers."]}),"\n",(0,r.jsx)(s.p,{children:"For example, when targeting older browsers like Internet Explorer 9, you may see the following styles added to your CSS:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-css",metastring:'title="normalize.css"',children:"/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"If you only need to support the last two versions of modern browsers, these additional styles will be omitted."}),"\n",(0,r.jsx)(s.h2,{id:"browser-support",children:"Browser Support"}),"\n",(0,r.jsx)(s.p,{children:"PostCSS Normalize supports a wide range of browsers, ensuring your styles render consistently across different platforms. The supported browsers include:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Chrome (last 3 versions)"}),"\n",(0,r.jsx)(s.li,{children:"Edge (last 3 versions)"}),"\n",(0,r.jsx)(s.li,{children:"Firefox (last 3 versions)"}),"\n",(0,r.jsx)(s.li,{children:"Firefox ESR"}),"\n",(0,r.jsx)(s.li,{children:"Opera (last 3 versions)"}),"\n",(0,r.jsx)(s.li,{children:"Safari (last 3 versions)"}),"\n",(0,r.jsx)(s.li,{children:"iOS Safari (last 2 versions)"}),"\n",(0,r.jsx)(s.li,{children:"Internet Explorer 9 and above"}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>a});var n=t(96540);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);