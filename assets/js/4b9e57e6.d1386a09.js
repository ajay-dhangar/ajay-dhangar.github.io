"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[15160],{76896:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(17624),i=a(4552);const r={id:"title-and-meta-tags",title:"Title And Meta Tags",sidebar_label:"Title & Meta Tags",sidebar_position:4,tags:["title","meta","tags","react","create react app","seo","search engine optimization","server","server-side","back-end","integration"],keywords:["title","meta","tags","react","create react app","seo","search engine optimization","server","server-side","back-end","integration"],description:"Learn how to handle title and meta tags in your Create React App for back-end integration, making your website more appealing and discoverable."},o=void 0,s={id:"react/back-end-integration/title-and-meta-tags",title:"Title And Meta Tags",description:"Learn how to handle title and meta tags in your Create React App for back-end integration, making your website more appealing and discoverable.",source:"@site/docs/react/back-end-integration/title-and-meta-tags.md",sourceDirName:"react/back-end-integration",slug:"/react/back-end-integration/title-and-meta-tags",permalink:"/docs/react/back-end-integration/title-and-meta-tags",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/docs/react/back-end-integration/title-and-meta-tags.md",tags:[{label:"title",permalink:"/docs/tags/title"},{label:"meta",permalink:"/docs/tags/meta"},{label:"tags",permalink:"/docs/tags/tags"},{label:"react",permalink:"/docs/tags/react"},{label:"create react app",permalink:"/docs/tags/create-react-app"},{label:"seo",permalink:"/docs/tags/seo"},{label:"search engine optimization",permalink:"/docs/tags/search-engine-optimization"},{label:"server",permalink:"/docs/tags/server"},{label:"server-side",permalink:"/docs/tags/server-side"},{label:"back-end",permalink:"/docs/tags/back-end"},{label:"integration",permalink:"/docs/tags/integration"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:4,frontMatter:{id:"title-and-meta-tags",title:"Title And Meta Tags",sidebar_label:"Title & Meta Tags",sidebar_position:4,tags:["title","meta","tags","react","create react app","seo","search engine optimization","server","server-side","back-end","integration"],keywords:["title","meta","tags","react","create react app","seo","search engine optimization","server","server-side","back-end","integration"],description:"Learn how to handle title and meta tags in your Create React App for back-end integration, making your website more appealing and discoverable."},sidebar:"react",previous:{title:"Integrating with an API",permalink:"/docs/react/back-end-integration/integrating-with-an-api-backend"},next:{title:"Deployment",permalink:"/docs/category/deployment-1"}},c={},d=[{value:"Changing the Title Tag",id:"changing-the-title-tag",level:3},{value:"Generating Dynamic Meta Tags on the Server",id:"generating-dynamic-meta-tags-on-the-server",level:3},{value:"Injecting Data from the Server into the Page",id:"injecting-data-from-the-server-into-the-page",level:3},{value:"Conclusion:",id:"conclusion",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In web development, title and meta tags play a crucial role in optimizing your website for search engines and providing a better user experience. They are like a website's introduction, giving a sneak peek into what visitors can expect. In this guide, we will explore how to handle title and meta tags in your Create React App for back-end integration, making your website more appealing and discoverable."}),"\n",(0,n.jsx)(t.h3,{id:"changing-the-title-tag",children:"Changing the Title Tag"}),"\n",(0,n.jsxs)(t.p,{children:["The first step to customizing your website's title is to locate the source HTML file in the ",(0,n.jsx)(t.code,{children:"public"})," folder of your generated Create React App project. There, you'll find the ",(0,n.jsx)(t.code,{children:"<title>"}),' tag, which you can modify to display your desired title instead of the default "React App."']}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Editing files in the ",(0,n.jsx)(t.code,{children:"public"})," folder should be done sparingly. For most changes, like adding a stylesheet, you can do so without touching the HTML."]})}),"\n",(0,n.jsxs)(t.p,{children:["If you need to dynamically update the page title based on the content or perform more complex title changes from React components, you can use the ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/title",children:(0,n.jsx)(t.code,{children:"document.title"})})," API. For more advanced scenarios, where you want to manage title and meta tags with ease, consider using the popular third-party library, ",(0,n.jsx)(t.a,{href:"https://github.com/nfl/react-helmet",children:"React Helmet"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"generating-dynamic-meta-tags-on-the-server",children:"Generating Dynamic Meta Tags on the Server"}),"\n",(0,n.jsxs)(t.p,{children:["Create React App doesn't support server rendering by default, which might leave you wondering how to make ",(0,n.jsx)(t.code,{children:"<meta>"})," tags dynamic and responsive to the current URL. To tackle this challenge, we recommend using placeholders in your HTML."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta property="og:title" content="__OG_TITLE__" />\n    <meta property="og:description" content="__OG_DESCRIPTION__" />\n  </head>\n</html>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["On your server, regardless of the backend you use, read the ",(0,n.jsx)(t.code,{children:"index.html"})," file into memory and replace the ",(0,n.jsx)(t.code,{children:"__OG_TITLE__"}),", ",(0,n.jsx)(t.code,{children:"__OG_DESCRIPTION__"}),", and any other placeholders with actual values based on the current URL. It's crucial to sanitize and escape these interpolated values to ensure they are safe to embed into HTML."]}),"\n",(0,n.jsx)(t.p,{children:"If you're using a Node server, you can even share the route matching logic between the client and the server, although duplicating it in basic cases works fine."}),"\n",(0,n.jsx)(t.h3,{id:"injecting-data-from-the-server-into-the-page",children:"Injecting Data from the Server into the Page"}),"\n",(0,n.jsx)(t.p,{children:"Another powerful technique is injecting data from the server into your page, enabling you to pass global variables to your client-side JavaScript."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script>\n      window.SERVER_DATA = __SERVER_DATA__;\n    <\/script>\n  </head>\n</html>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["On the server, replace ",(0,n.jsx)(t.code,{children:"__SERVER_DATA__"})," with a JSON object containing real data before sending the response. The client-side code can then read ",(0,n.jsx)(t.code,{children:"window.SERVER_DATA"})," to access and use this data."]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Remember to sanitize the JSON before sending it to the client to prevent XSS attacks. Always prioritize security!"})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion:"}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You've learned how to handle title and meta tags in your Create React App for back-end integration. By customizing your title and meta tags, you can enhance your website's visibility in search engines and deliver a better experience to your users. Remember to use React Helmet for more advanced management of your head elements and be cautious when dealing with server-side data to ensure security. Happy coding and creating!"})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4552:(e,t,a)=>{a.d(t,{I:()=>s,M:()=>o});var n=a(11504);const i={},r=n.createContext(i);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);