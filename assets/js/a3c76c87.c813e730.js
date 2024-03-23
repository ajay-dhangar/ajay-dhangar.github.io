"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[45456],{51284:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=r(17624),n=r(4552);const s={id:"debugging-js",title:"Debugging in JavaScript",sidebar_label:"Debugging",sidebar_position:39,tags:["JavaScript","Debugging","Console","Breakpoints","Sources","Call Stack","Watch","Scope","Network","Performance","Memory","Profiling","Code Coverage","Chrome DevTools","Error Messages","Code Review","Debugger Statement","Debugging Techniques"],description:"In this tutorial, you will learn how to debug JavaScript code in the browser using the Chrome DevTools. We will cover the basics of debugging, including breakpoints, console, sources, call stack, watch, scope, network, performance, memory, profiling, and code coverage."},t=void 0,a={id:"javascript/debugging-js",title:"Debugging in JavaScript",description:"In this tutorial, you will learn how to debug JavaScript code in the browser using the Chrome DevTools. We will cover the basics of debugging, including breakpoints, console, sources, call stack, watch, scope, network, performance, memory, profiling, and code coverage.",source:"@site/docs/javascript/debugging-js.md",sourceDirName:"javascript",slug:"/javascript/debugging-js",permalink:"/code-harbor-hub/docs/javascript/debugging-js",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/debugging-js.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"Debugging",permalink:"/code-harbor-hub/docs/tags/debugging"},{label:"Console",permalink:"/code-harbor-hub/docs/tags/console"},{label:"Breakpoints",permalink:"/code-harbor-hub/docs/tags/breakpoints"},{label:"Sources",permalink:"/code-harbor-hub/docs/tags/sources"},{label:"Call Stack",permalink:"/code-harbor-hub/docs/tags/call-stack"},{label:"Watch",permalink:"/code-harbor-hub/docs/tags/watch"},{label:"Scope",permalink:"/code-harbor-hub/docs/tags/scope"},{label:"Network",permalink:"/code-harbor-hub/docs/tags/network"},{label:"Performance",permalink:"/code-harbor-hub/docs/tags/performance"},{label:"Memory",permalink:"/code-harbor-hub/docs/tags/memory"},{label:"Profiling",permalink:"/code-harbor-hub/docs/tags/profiling"},{label:"Code Coverage",permalink:"/code-harbor-hub/docs/tags/code-coverage"},{label:"Chrome DevTools",permalink:"/code-harbor-hub/docs/tags/chrome-dev-tools"},{label:"Error Messages",permalink:"/code-harbor-hub/docs/tags/error-messages"},{label:"Code Review",permalink:"/code-harbor-hub/docs/tags/code-review"},{label:"Debugger Statement",permalink:"/code-harbor-hub/docs/tags/debugger-statement"},{label:"Debugging Techniques",permalink:"/code-harbor-hub/docs/tags/debugging-techniques"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1711185902,formattedLastUpdatedAt:"Mar 23, 2024",sidebarPosition:39,frontMatter:{id:"debugging-js",title:"Debugging in JavaScript",sidebar_label:"Debugging",sidebar_position:39,tags:["JavaScript","Debugging","Console","Breakpoints","Sources","Call Stack","Watch","Scope","Network","Performance","Memory","Profiling","Code Coverage","Chrome DevTools","Error Messages","Code Review","Debugger Statement","Debugging Techniques"],description:"In this tutorial, you will learn how to debug JavaScript code in the browser using the Chrome DevTools. We will cover the basics of debugging, including breakpoints, console, sources, call stack, watch, scope, network, performance, memory, profiling, and code coverage."},sidebar:"javascript",previous:{title:"JSON",permalink:"/code-harbor-hub/docs/javascript/json-in-javascript"}},l={},c=[{value:"Common Debugging Techniques",id:"common-debugging-techniques",level:2},{value:"Debugging with Chrome DevTools",id:"debugging-with-chrome-devtools",level:2},{value:"Breakpoints",id:"breakpoints",level:3},{value:"Console",id:"console",level:3},{value:"Sources",id:"sources",level:3},{value:"Call Stack",id:"call-stack",level:3},{value:"Watch",id:"watch",level:3},{value:"Scope",id:"scope",level:3},{value:"Network",id:"network",level:3},{value:"Performance",id:"performance",level:3},{value:"Memory",id:"memory",level:3},{value:"Profiling",id:"profiling",level:3},{value:"Code Coverage",id:"code-coverage",level:3},{value:"Debugger Statement",id:"debugger-statement",level:3},{value:"Error Messages",id:"error-messages",level:3},{value:"Code Review",id:"code-review",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const o={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.p,{children:"Debugging is the process of finding and fixing errors in your code. It is an essential skill for developers to master, as it helps you identify and resolve issues quickly and efficiently. In this tutorial, you will learn how to debug JavaScript code in the browser using the Chrome DevTools. We will cover the basics of debugging, including breakpoints, console, sources, call stack, watch, scope, network, performance, memory, profiling, and code coverage."}),"\n",(0,i.jsx)(o.h2,{id:"common-debugging-techniques",children:"Common Debugging Techniques"}),"\n",(0,i.jsx)(o.p,{children:"Here are some common debugging techniques that you can use to debug JavaScript code:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Breakpoints"}),": Pause the execution of your code at a specific line to inspect the state of your application."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Console"}),": Log messages to the console to track the flow of your code and inspect variables."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Sources"}),": View and edit the source code of your application."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Call Stack"}),": View the sequence of function calls that led to the current point in your code."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Watch"}),": Monitor the value of variables in real-time."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Scope"}),": Inspect the variables in the current scope."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Network"}),": Monitor network requests made by your application."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Performance"}),": Analyze the performance of your application."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Memory"}),": Inspect the memory usage of your application."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Profiling"}),": Profile the performance of your application."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Code Coverage"}),": Measure how much of your code is executed during a test."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Debugger Statement"}),": Use the ",(0,i.jsx)(o.code,{children:"debugger"})," statement to pause the execution of your code."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Error Messages"}),": Read error messages in the console to identify issues in your code."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Code Review"}),": Review your code with a colleague to get a fresh perspective."]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"debugging-with-chrome-devtools",children:"Debugging with Chrome DevTools"}),"\n",(0,i.jsxs)(o.p,{children:['Chrome DevTools is a set of web developer tools built into the Google Chrome browser. It provides a rich set of debugging tools that you can use to inspect and debug your web applications. To open Chrome DevTools, right-click on a web page and select "Inspect" or press ',(0,i.jsx)(o.code,{children:"Ctrl+Shift+I"})," (Windows/Linux) or ",(0,i.jsx)(o.code,{children:"Cmd+Option+I"})," (Mac)."]}),"\n",(0,i.jsx)(o.h3,{id:"breakpoints",children:"Breakpoints"}),"\n",(0,i.jsx)(o.p,{children:"Breakpoints allow you to pause the execution of your code at a specific line to inspect the state of your application. To set a breakpoint, click on the line number in the source code panel. When the code reaches the breakpoint, it will pause, and you can inspect the variables and step through the code using the controls in the debugger."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Breakpoints in Chrome DevTools",src:r(85580).c+"",width:"1927",height:"1024"})}),"\n",(0,i.jsx)(o.h3,{id:"console",children:"Console"}),"\n",(0,i.jsxs)(o.p,{children:["The console is a powerful tool for logging messages to track the flow of your code and inspect variables. You can log messages using ",(0,i.jsx)(o.code,{children:"console.log()"}),", ",(0,i.jsx)(o.code,{children:"console.error()"}),", ",(0,i.jsx)(o.code,{children:"console.warn()"}),", ",(0,i.jsx)(o.code,{children:"console.info()"}),", and ",(0,i.jsx)(o.code,{children:"console.debug()"}),". You can also evaluate expressions in the console and interact with the page using JavaScript."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-javascript",metastring:'title="Console Logging"',children:'console.log("Hello, World!");\nconsole.error("An error occurred!");\nconsole.warn("Warning: This is a warning!");\nconsole.info("Information: This is an information message!");\nconsole.debug("Debug: This is a debug message!");\n'})}),"\n",(0,i.jsx)(o.h3,{id:"sources",children:"Sources"}),"\n",(0,i.jsx)(o.p,{children:"The sources panel allows you to view and edit the source code of your application. You can set breakpoints, step through the code, and inspect variables in the debugger. You can also search for files, navigate the call stack, and view the network requests made by your application."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Sources in Chrome DevTools",src:r(81712).c+"",width:"2160",height:"1245"})}),"\n",(0,i.jsx)(o.h3,{id:"call-stack",children:"Call Stack"}),"\n",(0,i.jsx)(o.p,{children:"The call stack panel shows the sequence of function calls that led to the current point in your code. It helps you understand the flow of your code and identify where an error occurred. You can navigate the call stack, inspect the variables in each function, and step through the code using the controls in the debugger."}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{alt:"Call Stack in Chrome DevTools",src:r(96120).c+"",width:"1045",height:"810"})}),"\n",(0,i.jsx)(o.h3,{id:"watch",children:"Watch"}),"\n",(0,i.jsx)(o.p,{children:"The watch panel allows you to monitor the value of variables in real-time. You can add variables to the watch list and see their values update as you step through the code. This is useful for tracking the state of your application and identifying issues in your code."}),"\n",(0,i.jsx)(o.h3,{id:"scope",children:"Scope"}),"\n",(0,i.jsxs)(o.p,{children:["The scope panel allows you to inspect the variables in the current scope. You can view the local, closure, and global variables, as well as the ",(0,i.jsx)(o.code,{children:"this"})," context. This helps you understand the state of your application and debug issues related to variable scoping."]}),"\n",(0,i.jsx)(o.h3,{id:"network",children:"Network"}),"\n",(0,i.jsx)(o.p,{children:"The network panel allows you to monitor the network requests made by your application. You can view the request and response headers, payloads, and timing information. This helps you identify performance issues, debug network-related errors, and optimize the performance of your application."}),"\n",(0,i.jsx)(o.h3,{id:"performance",children:"Performance"}),"\n",(0,i.jsx)(o.p,{children:"The performance panel allows you to analyze the performance of your application. You can record performance profiles, analyze CPU and memory usage, and identify performance bottlenecks. This helps you optimize the performance of your application and deliver a better user experience."}),"\n",(0,i.jsx)(o.h3,{id:"memory",children:"Memory"}),"\n",(0,i.jsx)(o.p,{children:"The memory panel allows you to inspect the memory usage of your application. You can take heap snapshots, analyze memory allocations, and identify memory leaks. This helps you optimize the memory usage of your application and prevent memory-related issues."}),"\n",(0,i.jsx)(o.h3,{id:"profiling",children:"Profiling"}),"\n",(0,i.jsx)(o.p,{children:"The profiling panel allows you to profile the performance of your application. You can record CPU profiles, analyze JavaScript execution, and identify performance bottlenecks. This helps you optimize the performance of your application and deliver a better user experience."}),"\n",(0,i.jsx)(o.h3,{id:"code-coverage",children:"Code Coverage"}),"\n",(0,i.jsx)(o.p,{children:"The code coverage panel allows you to measure how much of your code is executed during a test. You can record code coverage profiles, analyze the coverage of your code, and identify unused code. This helps you ensure that your tests cover all parts of your code and identify areas for improvement."}),"\n",(0,i.jsx)(o.h3,{id:"debugger-statement",children:"Debugger Statement"}),"\n",(0,i.jsxs)(o.p,{children:["The ",(0,i.jsx)(o.code,{children:"debugger"})," statement allows you to pause the execution of your code at a specific point. When the code reaches the ",(0,i.jsx)(o.code,{children:"debugger"})," statement, it will pause, and you can inspect the variables and step through the code using the controls in the debugger. This is useful for debugging complex issues and identifying errors in your code."]}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-javascript",metastring:'title="Debugger Statement"',children:"function add(a, b) {\n  debugger;\n  return a + b;\n}\n\nadd(1, 2); // The code will pause at the debugger statement\n"})}),"\n",(0,i.jsx)(o.h3,{id:"error-messages",children:"Error Messages"}),"\n",(0,i.jsx)(o.p,{children:"Error messages in the console provide valuable information about issues in your code. They help you identify syntax errors, runtime errors, and logic errors. By reading error messages, you can quickly pinpoint the source of the issue and fix it."}),"\n",(0,i.jsx)(o.h3,{id:"code-review",children:"Code Review"}),"\n",(0,i.jsx)(o.p,{children:"Code review is a collaborative process where you review your code with a colleague to get a fresh perspective. By sharing your code with others, you can identify issues, improve the quality of your code, and learn new techniques. Code review helps you catch bugs early, improve code readability, and foster a culture of collaboration."}),"\n",(0,i.jsx)(o.admonition,{type:"note",children:(0,i.jsx)(o.p,{children:"Debugging is an iterative process that requires patience and persistence. By mastering the debugging techniques and tools available to you, you can identify and fix errors in your code quickly and efficiently."})}),"\n",(0,i.jsx)(o.admonition,{type:"tip",children:(0,i.jsx)(o.p,{children:"When debugging, start with the simplest possible case and gradually add complexity. Break down the problem into smaller parts, test each part individually, and identify the source of the issue. By following a systematic approach, you can debug your code effectively and efficiently."})}),"\n",(0,i.jsx)(o.admonition,{title:"Major Browsers' Debugging Tools",type:"tip",children:(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Chrome DevTools"}),": Built into Google Chrome, it provides a rich set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Firefox Developer Tools"}),": Built into Mozilla Firefox, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Safari Web Inspector"}),": Built into Apple Safari, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Edge DevTools"}),": Built into Microsoft Edge, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Opera Developer Tools"}),": Built into Opera, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Internet Explorer Developer Tools"}),": Built into Internet Explorer, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Brave DevTools"}),": Built into Brave, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Vivaldi DevTools"}),": Built into Vivaldi, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Tor Browser DevTools"}),": Built into Tor Browser, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"UC Browser DevTools"}),": Built into UC Browser, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Yandex Browser DevTools"}),": Built into Yandex Browser, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Samsung Internet DevTools"}),": Built into Samsung Internet, it provides a set of debugging tools for web developers."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.strong,{children:"Puffin Browser DevTools"}),": Built into Puffin Browser, it provides a set of debugging tools for web developers."]}),"\n"]})}),"\n",(0,i.jsx)(o.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(o.p,{children:"In this tutorial, you learned how to debug JavaScript code in the browser using the Chrome DevTools. We covered the basics of debugging, including breakpoints, console, sources, call stack, watch, scope, network, performance, memory, profiling, and code coverage. By mastering these debugging techniques, you can identify and fix errors in your code quickly and efficiently. Happy debugging!"})]})}function h(e={}){const{wrapper:o}={...(0,n.M)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},85580:(e,o,r)=>{r.d(o,{c:()=>i});const i=r.p+"assets/images/breakpoints-a44789235f32e5f1d0a6d6aa195a88d9.gif"},96120:(e,o,r)=>{r.d(o,{c:()=>i});const i=r.p+"assets/images/call-stack-81d6e95c98d9779c5e5b1984fa91478d.gif"},81712:(e,o,r)=>{r.d(o,{c:()=>i});const i=r.p+"assets/images/source-86602ce63ad454894b01e09fa4379fb1.gif"},4552:(e,o,r)=>{r.d(o,{I:()=>a,M:()=>t});var i=r(11504);const n={},s=i.createContext(n);function t(e){const o=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),i.createElement(s.Provider,{value:o},e.children)}}}]);