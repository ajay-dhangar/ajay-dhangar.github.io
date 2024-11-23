"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[81067],{47442:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var a=t(51785),i=t(74848),r=t(28453);const o={title:"Sed: Normalize markdown file with Regex",author:"Ajay Dhangar",tags:["sed","regex","web clipper"],date:new Date("2024-03-15T14:37:46.000Z"),description:"How to normalize markdown file with Regex",draft:!1},s=void 0,l={authorsImageUrls:[void 0]},d=[];function c(e){const n={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["I have been using ",(0,i.jsx)(n.a,{href:"https://www.notion.so/web-clipper",children:"web clipper"})," to save articles and blog posts for a while now. It's a great tool to save content from the web and organize it in a clean and readable format. However, the markdown files generated by web clipper are not always consistent, and I often find myself manually editing them to make them more readable."]}),"\n",(0,i.jsx)(n.p,{children:"One of the common issues I encounter is inconsistent formatting of the front matter in the markdown files. The front matter is a block of metadata at the beginning of a markdown file that contains information such as the title, author, tags, date, and description of the content. Here's an example of what the front matter looks like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",children:"---\ntitle: 'Sed: Normalize markdown file with Regex'\nauthor: Ajay Dhangar\ntags: [sed, regex, web clipper]\ndate: 2020-11-26 21:13:28\ndescription: How to normalize markdown file with Regex\ndraft: false\n---\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As you can see, the front matter is enclosed in three dashes (",(0,i.jsx)(n.code,{children:"---"}),") at the beginning and end of the block, and each key-value pair is separated by a colon (",(0,i.jsx)(n.code,{children:":"}),"). The keys and values are also enclosed in single quotes (",(0,i.jsx)(n.code,{children:"'"}),") to ensure that special characters are escaped properly."]}),"\n",(0,i.jsxs)(n.p,{children:["To make the front matter consistent across all my markdown files, I decided to use the ",(0,i.jsx)(n.code,{children:"sed"})," command-line utility to write a simple regular expression that would normalize the front matter. Here's the regular expression I came up with:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'sed -i -E "s/^---\\n(.*: .*\\n)+---\\n//g" file.md\n'})}),"\n",(0,i.jsx)(n.p,{children:"Let's break down the regular expression:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"^---\\n"})," matches the opening three dashes at the beginning of the file, followed by a newline character."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"(.*: .*\\n)+"})," matches one or more lines containing a key-value pair, where the key is followed by a colon and a space, and the value is followed by a newline character."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"---\\n"})," matches the closing three dashes at the end of the block, followed by a newline character."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/g"})," is a flag that tells ",(0,i.jsx)(n.code,{children:"sed"})," to perform the substitution globally, i.e., on all matching lines in the file."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"When I run this command on a markdown file, it removes the existing front matter and leaves me with just the content of the file. This is exactly what I want, as I can then manually add a consistent front matter to the file."}),"\n",(0,i.jsxs)(n.p,{children:["I hope this example gives you an idea of how powerful regular expressions can be when used with command-line utilities like ",(0,i.jsx)(n.code,{children:"sed"}),". With a little bit of practice, you can write regular expressions to perform complex text manipulations with ease. If you're interested in learning more about regular expressions, I highly recommend checking out the ",(0,i.jsx)(n.a,{href:"https://regexone.com/",children:"RegexOne"})," interactive tutorial, which is a great resource for beginners."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}},51785:e=>{e.exports=JSON.parse('{"permalink":"/blog/sed-normalize-md-file-with-regex","editUrl":"https://github.com/Ajay-Dhangar/ajay-dhangar.github.io/edit/main/blog/sed-normalize-md-file-with-regex.md","source":"@site/blog/sed-normalize-md-file-with-regex.md","title":"Sed: Normalize markdown file with Regex","description":"How to normalize markdown file with Regex","date":"2024-03-15T14:37:46.000Z","tags":[{"inline":true,"label":"sed","permalink":"/blog/tags/sed"},{"inline":true,"label":"regex","permalink":"/blog/tags/regex"},{"inline":true,"label":"web clipper","permalink":"/blog/tags/web-clipper"}],"readingTime":2.255,"hasTruncateMarker":false,"authors":[{"name":"Ajay Dhangar","key":null,"page":null}],"frontMatter":{"title":"Sed: Normalize markdown file with Regex","author":"Ajay Dhangar","tags":["sed","regex","web clipper"],"date":"2024-03-15T14:37:46.000Z","description":"How to normalize markdown file with Regex","draft":false},"unlisted":false,"prevItem":{"title":" Git Best Practices: Commit Often, Perfect Later, Publish Once","permalink":"/blog/git-best-practicies"},"nextItem":{"title":"nvs: One Node Version Per Terminal in Windows","permalink":"/blog/nvs-one-node-version-per-terminal-in-windows"}}')}}]);