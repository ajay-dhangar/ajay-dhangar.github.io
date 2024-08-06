"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[86469],{70072:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>S,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=i(17624),s=i(4552),t=i(11504);const a=()=>{const[e,n]=(0,t.useState)(null);return(0,t.useEffect)((()=>{(async()=>{try{const e=await fetch("https://api.github.com/users/ajay-dhangar"),i=await e.json();n(i)}catch(e){console.error("Error fetching user data:",e)}})()}),[]),(0,r.jsx)("div",{children:e?(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:e.name}),(0,r.jsx)("p",{children:e.bio})]}):(0,r.jsx)("p",{children:"Loading..."})})},o={id:"lesson-2",title:"Server-Side Rendering (SSR) with Next.js for SEO and performance (Optional)",sidebar_label:"Lesson - 2",sidebar_position:2,description:"In this lesson, we will learn about Server-Side Rendering (SSR) with Next.js. We will learn how to implement SSR in a Next.js application to improve SEO and performance. We will also learn about the benefits of SSR and when to use it in your React applications.",tags:["courses","react-js","advanced-level","server-side-rendering","next-js","seo","performance"]},d=void 0,c={id:"react-js/advanced-level/beyond-the-basics/lesson-2",title:"Server-Side Rendering (SSR) with Next.js for SEO and performance (Optional)",description:"In this lesson, we will learn about Server-Side Rendering (SSR) with Next.js. We will learn how to implement SSR in a Next.js application to improve SEO and performance. We will also learn about the benefits of SSR and when to use it in your React applications.",source:"@site/courses/react-js/advanced-level/beyond-the-basics/lesson_2.md",sourceDirName:"react-js/advanced-level/beyond-the-basics",slug:"/react-js/advanced-level/beyond-the-basics/lesson-2",permalink:"/courses/react-js/advanced-level/beyond-the-basics/lesson-2",draft:!1,unlisted:!1,tags:[{label:"courses",permalink:"/courses/tags/courses"},{label:"react-js",permalink:"/courses/tags/react-js"},{label:"advanced-level",permalink:"/courses/tags/advanced-level"},{label:"server-side-rendering",permalink:"/courses/tags/server-side-rendering"},{label:"next-js",permalink:"/courses/tags/next-js"},{label:"seo",permalink:"/courses/tags/seo"},{label:"performance",permalink:"/courses/tags/performance"}],version:"current",lastUpdatedBy:"Restyled.io",lastUpdatedAt:1713288804e3,sidebarPosition:2,frontMatter:{id:"lesson-2",title:"Server-Side Rendering (SSR) with Next.js for SEO and performance (Optional)",sidebar_label:"Lesson - 2",sidebar_position:2,description:"In this lesson, we will learn about Server-Side Rendering (SSR) with Next.js. We will learn how to implement SSR in a Next.js application to improve SEO and performance. We will also learn about the benefits of SSR and when to use it in your React applications.",tags:["courses","react-js","advanced-level","server-side-rendering","next-js","seo","performance"]},sidebar:"tutorialSidebar",previous:{title:"Lesson - 1",permalink:"/courses/react-js/advanced-level/beyond-the-basics/lesson-1"},next:{title:"Lesson - 3",permalink:"/courses/react-js/advanced-level/beyond-the-basics/lesson-3"}},l={},h=[{value:"What is Server-Side Rendering (SSR)?",id:"what-is-server-side-rendering-ssr",level:2},{value:"Why Server-Side Rendering (SSR)?",id:"why-server-side-rendering-ssr",level:2},{value:"SEO (Search Engine Optimization)",id:"seo-search-engine-optimization",level:3},{value:"Performance",id:"performance",level:3},{value:"Accessibility",id:"accessibility",level:3},{value:"Implementing Server-Side Rendering (SSR) with Next.js",id:"implementing-server-side-rendering-ssr-with-nextjs",level:2},{value:"Benefits of Server-Side Rendering (SSR)",id:"benefits-of-server-side-rendering-ssr",level:2},{value:"Improved SEO",id:"improved-seo",level:3},{value:"Faster Page Load Times",id:"faster-page-load-times",level:3},{value:"Improved Accessibility",id:"improved-accessibility",level:3},{value:"Better Performance",id:"better-performance",level:3},{value:"When to Use Server-Side Rendering (SSR)",id:"when-to-use-server-side-rendering-ssr",level:2},{value:"Conclusion",id:"conclusion",level:2}];function p(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components},{BrowserWindow:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BrowserWindow",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In this lesson, we will learn about Server-Side Rendering (SSR) with Next.js. We will learn how to implement SSR in a Next.js application to improve SEO and performance. We will also learn about the benefits of SSR and when to use it in your React applications."}),"\n",(0,r.jsx)(n.h2,{id:"what-is-server-side-rendering-ssr",children:"What is Server-Side Rendering (SSR)?"}),"\n",(0,r.jsx)(n.p,{children:"Server-Side Rendering (SSR) is a technique used to render web pages on the server before sending them to the client. With SSR, the server generates the HTML content of the web page and sends it to the client, where it is displayed in the browser. This is in contrast to Client-Side Rendering (CSR), where the web page is rendered in the browser using JavaScript."}),"\n",(0,r.jsx)(n.h2,{id:"why-server-side-rendering-ssr",children:"Why Server-Side Rendering (SSR)?"}),"\n",(0,r.jsx)(n.p,{children:"Server-Side Rendering (SSR) offers several benefits over Client-Side Rendering (CSR), including:"}),"\n",(0,r.jsx)(n.h3,{id:"seo-search-engine-optimization",children:"SEO (Search Engine Optimization)"}),"\n",(0,r.jsx)(n.p,{children:"Search engines can crawl and index the content of web pages more easily with SSR, as the HTML content is generated on the server and sent to the client. This can improve the visibility of your web pages in search engine results. With CSR, search engines may have difficulty crawling and indexing the content of web pages, as the content is generated dynamically in the browser."}),"\n",(0,r.jsx)(n.p,{children:"There are several ways to improve SEO with SSR, such as using meta tags, structured data, and server-side redirects. SSR can help you create web pages that are more search engine-friendly and improve your website's ranking in search results."}),"\n",(0,r.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,r.jsx)(n.p,{children:"SSR can improve the performance of web pages by reducing the time it takes to load and display content in the browser. With SSR, the server generates the HTML content of the web page and sends it to the client, which can be displayed more quickly than with CSR. This can lead to faster page load times, better user experience, and higher conversion rates."}),"\n",(0,r.jsx)(n.p,{children:"SSR can also help reduce the load on the client-side JavaScript code, as the server handles the initial rendering of the web page. This can result in a smoother user experience, especially on devices with limited processing power or slow network connections."}),"\n",(0,r.jsx)(n.h3,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsx)(n.p,{children:"SSR can improve the accessibility of web pages by ensuring that content is available to users who have JavaScript disabled or are using assistive technologies such as screen readers. With SSR, the server generates the HTML content of the web page, which can be read by screen readers and other assistive technologies. This can help make your web pages more inclusive and accessible to a wider audience."}),"\n",(0,r.jsx)(n.h2,{id:"implementing-server-side-rendering-ssr-with-nextjs",children:"Implementing Server-Side Rendering (SSR) with Next.js"}),"\n",(0,r.jsx)(n.p,{children:"Next.js is a popular React framework that provides built-in support for Server-Side Rendering (SSR). With Next.js, you can easily implement SSR in your React applications to improve SEO and performance. Next.js handles the server-side rendering of web pages and provides features such as data fetching, routing, and code splitting out of the box."}),"\n",(0,r.jsxs)(n.p,{children:["To implement SSR with Next.js, you can use the ",(0,r.jsx)(n.code,{children:"getServerSideProps"})," function in your page components. This function runs on the server and fetches data before rendering the page, allowing you to pass data as props to the page component. Next.js also supports static site generation (SSG) and incremental static regeneration (ISR) for pre-rendering web pages at build time and updating them at runtime."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of implementing SSR with Next.js using the ",(0,r.jsx)(n.code,{children:"getServerSideProps"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:'title="pages/index.js"',children:'import React from "react";\n\nconst Home = ({ data }) => {\n  return (\n    <div>\n      <h1>{data.title}</h1>\n      <p>{data.description}</p>\n    </div>\n  );\n};\n\nexport async function getServerSideProps() {\n  // Fetch data from an API\n  const res = await fetch("https://api.example.com/data");\n  const data = await res.json();\n\n  return {\n    props: {\n      data,\n    },\n  };\n}\n\nexport default Home;\n'})}),"\n","\n",(0,r.jsx)(i,{children:(0,r.jsx)(a,{})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, the ",(0,r.jsx)(n.code,{children:"getServerSideProps"})," function fetches data from an API on the server before rendering the ",(0,r.jsx)(n.code,{children:"Home"})," page component. The fetched data is passed as props to the ",(0,r.jsx)(n.code,{children:"Home"})," component, which can then be rendered on the client. This allows you to implement SSR in your Next.js application and improve SEO and performance."]}),"\n",(0,r.jsx)(n.h2,{id:"benefits-of-server-side-rendering-ssr",children:"Benefits of Server-Side Rendering (SSR)"}),"\n",(0,r.jsx)(n.p,{children:"Server-Side Rendering (SSR) offers several benefits for React applications, including:"}),"\n",(0,r.jsx)(n.h3,{id:"improved-seo",children:"Improved SEO"}),"\n",(0,r.jsx)(n.p,{children:"SSR can improve the search engine optimization (SEO) of your web pages by making them more crawlable and indexable by search engines. With SSR, the server generates the HTML content of the web page, which can be easily crawled and indexed by search engines. This can help improve the visibility of your web pages in search engine results and drive more organic traffic to your website."}),"\n",(0,r.jsx)(n.h3,{id:"faster-page-load-times",children:"Faster Page Load Times"}),"\n",(0,r.jsx)(n.p,{children:"SSR can reduce the time it takes to load and display content on web pages by generating the HTML content on the server and sending it to the client. This can lead to faster page load times, better user experience, and higher conversion rates. SSR can also help reduce the load on the client-side JavaScript code, resulting in smoother user interactions and improved performance."}),"\n",(0,r.jsx)(n.h3,{id:"improved-accessibility",children:"Improved Accessibility"}),"\n",(0,r.jsx)(n.p,{children:"SSR can improve the accessibility of web pages by ensuring that content is available to users who have JavaScript disabled or are using assistive technologies such as screen readers. With SSR, the server generates the HTML content of the web page, which can be read by screen readers and other assistive technologies. This can help make your web pages more inclusive and accessible to a wider audience."}),"\n",(0,r.jsx)(n.h3,{id:"better-performance",children:"Better Performance"}),"\n",(0,r.jsx)(n.p,{children:"SSR can improve the performance of web pages by reducing the time it takes to load and display content in the browser. With SSR, the server handles the initial rendering of the web page, which can be displayed more quickly than with Client-Side Rendering (CSR). This can lead to faster page load times, better user experience, and higher conversion rates. SSR can also help reduce the load on the client-side JavaScript code, resulting in smoother user interactions and improved performance."}),"\n",(0,r.jsx)(n.h2,{id:"when-to-use-server-side-rendering-ssr",children:"When to Use Server-Side Rendering (SSR)"}),"\n",(0,r.jsx)(n.p,{children:"Server-Side Rendering (SSR) is a powerful technique that can be used to improve SEO and performance in React applications. Here are some scenarios where you may want to consider using SSR:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SEO Requirements"}),": If your website relies heavily on organic search traffic, SSR can help improve the visibility of your web pages in search engine results and drive more organic traffic to your website."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Performance Optimization"}),": If you need to improve the performance of your web pages, SSR can help reduce the time it takes to load and display content in the browser, leading to faster page load times and better user experience."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Accessibility"}),": If you want to ensure that your web pages are accessible to users who have JavaScript disabled or are using assistive technologies, SSR can help make your web pages more inclusive and accessible to a wider audience."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dynamic Content"}),": If your web pages contain dynamic content that needs to be fetched from an API or database, SSR can help pre-render the content on the server and send it to the client, reducing the time it takes to load and display the content."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Improved User Experience"}),": If you want to provide a smoother user experience with faster page load times, better performance, and improved accessibility, SSR can help achieve these goals and enhance the overall user experience."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"By using Server-Side Rendering (SSR) with Next.js, you can take advantage of the benefits of SSR and improve the SEO, performance, and accessibility of your React applications. SSR can help you create web pages that are more search engine-friendly, faster to load, and accessible to a wider audience, leading to better user experience and higher conversion rates."}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"In this lesson, we learned about Server-Side Rendering (SSR) with Next.js and how to implement SSR in a Next.js application to improve SEO and performance. We explored the benefits of SSR, including improved SEO, faster page load times, improved accessibility, and better performance. We also discussed when to use SSR in React applications and how it can help improve the user experience and accessibility of web pages. By using SSR with Next.js, you can create web pages that are more search engine-friendly, faster to load, and accessible to a wider audience, leading to better user experience and higher conversion rates."})]})}function S(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>a});var r=i(11504);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);