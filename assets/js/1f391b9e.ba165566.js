"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[74204,26752,66344],{40652:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});t(11504);var s=t(65456),r=t(11928),i=t(55808),a=t(41828),o=t(91360),l=t(69280),c=t(98938);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=t(17624);function m(e){const{content:n}=e,{metadata:{title:t,description:m,frontMatter:h,unlisted:x},assets:p}=n,{keywords:g,wrapperClassName:f,hide_table_of_contents:b}=h,j=p.image??h.image;return(0,u.jsx)(r.cr,{className:(0,s.c)(f??i.W.wrapper.mdxPages,i.W.page.mdxPage),children:(0,u.jsxs)(a.c,{children:[(0,u.jsx)(r.U7,{title:t,description:m,keywords:g,image:j}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,s.c)("row",d.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,s.c)("col",!b&&"col--8"),children:[x&&(0,u.jsx)(c.c,{}),(0,u.jsx)("article",{children:(0,u.jsx)(o.c,{children:(0,u.jsx)(n,{})})})]}),!b&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(l.c,{toc:n.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},69280:(e,n,t)=>{t.d(n,{c:()=>c});t(11504);var s=t(65456),r=t(48720);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var a=t(17624);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,a.jsx)("div",{className:(0,s.c)(i.tableOfContents,"thin-scrollbar",n),children:(0,a.jsx)(r.c,{...t,linkClassName:o,linkActiveClassName:l})})}},48720:(e,n,t)=>{t.d(n,{c:()=>p});var s=t(11504),r=t(53912);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):s.push(r)})),s}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>o(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.y)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:a}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let r=n;r<=t;r+=1)s.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),c=l(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(45800),m=t(17624);function h(e){let{toc:n,className:t,linkClassName:s,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.c,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const x=s.memo(h);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const p=(0,r.y)(),g=c??p.tableOfContents.minHeadingLevel,f=u??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,s.useMemo)((()=>a({toc:i(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:g,maxHeadingLevel:f});return d((0,s.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:f}}),[o,l,g,f])),(0,m.jsx)(x,{toc:b,className:t,linkClassName:o,...h})}},98938:(e,n,t)=>{t.d(n,{c:()=>h});t(11504);var s=t(65456),r=t(57932),i=t(18300),a=t(17624);function o(){return(0,a.jsx)(r.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(r.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,a.jsx)(i.c,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(55808),u=t(72488);function m(e){let{className:n}=e;return(0,a.jsx)(u.c,{type:"caution",title:(0,a.jsx)(o,{}),className:(0,s.c)(n,d.W.common.unlistedBanner),children:(0,a.jsx)(l,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(m,{...e})]})}},55544:(e,n,t)=>{t.d(n,{c:()=>a});t(11504);var s=t(65456);const r={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var i=t(17624);function a(e){let{children:n,minHeight:t,url:a="http://localhost:3000",style:o,bodyStyle:l}=e;return(0,i.jsxs)("div",{className:r.browserWindow,style:{...o,minHeight:t},children:[(0,i.jsxs)("div",{className:r.browserWindowHeader,children:[(0,i.jsxs)("div",{className:r.buttons,children:[(0,i.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,s.c)(r.browserWindowAddressBar,"text--truncate"),children:a}),(0,i.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:r.bar}),(0,i.jsx)("span",{className:r.bar}),(0,i.jsx)("span",{className:r.bar})]})})]}),(0,i.jsx)("div",{className:r.browserWindowBody,style:l,children:n})]})}},32216:(e,n,t)=>{t.d(n,{c:()=>a});t(11504);var s=t(59400),r=t(70768),i=t(17624);function a(){const{colorMode:e}=(0,r.U)();return(0,i.jsx)("div",{className:"giscus-component",children:(0,i.jsx)(s.c,{id:"giscus",repo:"ajay-dhangar/code-harbor-hub",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},68984:(e,n,t)=>{t.d(n,{c:()=>d});t(11504);var s=t(65456),r=t(55808);const i={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var a=t(17624);function o(e){let{type:n,className:t,children:o}=e;return(0,a.jsx)("div",{className:(0,s.c)(r.W.common.admonition,r.W.common.admonitionType(n),i.admonition,t),children:o})}function l(e){let{icon:n,title:t}=e;return(0,a.jsxs)("div",{className:i.admonitionHeading,children:[(0,a.jsx)("span",{className:i.admonitionIcon,children:n}),t]})}function c(e){let{children:n}=e;return n?(0,a.jsx)("div",{className:i.admonitionContent,children:n}):null}function d(e){const{type:n,icon:t,title:s,children:r,className:i}=e;return(0,a.jsxs)(o,{type:n,className:i,children:[(0,a.jsx)(l,{title:s,icon:t}),(0,a.jsx)(c,{children:r})]})}},24968:(e,n,t)=>{t.d(n,{c:()=>P});var s=t(9370),r=t(86212),i=t(22440),a=t(11504),o=t(17624);function l(e){let{names:n}=e;if(!n)return null;const t=n.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:t.map(((e,n)=>(0,o.jsx)("span",{className:"topic-tag",children:e},n)))})}const c=()=>{const[e,n]=(0,a.useState)([]),[t,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(null),[m,h]=(0,a.useState)(!1);(0,a.useEffect)((()=>{x()}),[]),(0,a.useEffect)((()=>{p()}),[t]);const x=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));n(e)},p=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),h(!0);let n=e[0],s=0;for(let r=1;r<e.length;r++)u(r),e[r]<n&&(n=e[r],s=r),await new Promise((e=>setTimeout(e,t)));i(s),h(!1),c(!1)},disabled:l||m,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{x(),i(null)},disabled:l||m,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==r?e[r]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:`array-bar ${n===r?"min-value":""} ${n===d?"current-value":""}`,style:{height:3*e+"px"}},n)))})]})},d=()=>{const[e,n]=(0,a.useState)([]),[t,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[t]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));n(e)},u=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let s=[...e];for(let e=0;e<s.length-1;e++){let r=e;for(let n=e+1;n<s.length;n++)c([r,n]),await new Promise((e=>setTimeout(e,t))),s[n]<s[r]&&(r=n);if(r!==e){let t=s[e];s[e]=s[r],s[r]=t,n([...s])}}c([]),i(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(n)?"comparing":""),style:{height:3*e+"px"}},n)))})]})},u=()=>{const[e,n]=(0,a.useState)([]),[t,s]=(0,a.useState)(200),[r,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[t]);const d=()=>{const e=Array.from({length:50},(()=>Math.ceil(100*Math.random())));n(e)},u=()=>{const e=document.styleSheets;for(let n=0;n<e.length;n++){const s=e[n].cssRules||e[n].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${t}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let s=[...e];for(let e=0;e<s.length-1;e++)for(let r=0;r<s.length-e-1;r++)if(c([r,r+1]),await new Promise((e=>setTimeout(e,t))),s[r]>s[r+1]){let e=s[r];s[r]=s[r+1],s[r+1]=e,n([...s])}c([]),i(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(n)?"comparing":""),style:{height:3*e+"px"}},n)))})]})};var m=t(55544),h=t(32216),x=t(67288);const p=x.xZ`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,g=x.cp.a`
    display: block;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: transform 0.3s ease;
    animation: ${p} 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`,f=x.cp.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #7f8c8d;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`,b=x.cp.span`
    font-size: 14px;
`,j=e=>{let{collections:n}=e;return(0,o.jsx)("div",{children:n.map(((e,n)=>(0,o.jsxs)(g,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(f,{children:e.label}),(0,o.jsx)(b,{children:e.url})]},n)))})};var v=t(97512);const y=x.cp.div`
  margin: 5px;
`,w=x.cp.div`
  margin: 10px 0;
  display: flex;
  scroll-behavior: smooth;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: none;
  justify-content: space-between;
  gap: 10px; 
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,N=x.cp.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`,k=x.cp.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`,C=x.cp.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,L=x.cp.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`,S=x.cp.h3`
  margin-bottom: 5px;
  padding: 0 5px;
`,_=x.cp.p`
  margin-bottom: 5px;
  padding: 0 8px;
  text-align: justify;
`,H=x.cp.span`
  font-style: italic;
  padding: 0 8px;
`,W=x.cp.div`
  margin-top: 10px;
  padding: 0 8px;

  a {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`,A=e=>{let{courses:n}=e;const[t,s]=(0,a.useState)("all"),r="all"===t?n:n.filter((e=>e.category===t));return(0,o.jsxs)(y,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(N,{onClick:()=>s("all"),children:"All"}),(0,o.jsx)(N,{onClick:()=>s("html"),children:"HTML"}),(0,o.jsx)(N,{onClick:()=>s("css"),children:"CSS"}),(0,o.jsx)(N,{onClick:()=>s("javascript"),children:"JavaScript"}),(0,o.jsx)(N,{onClick:()=>s("dsa"),children:"DSA"}),(0,o.jsx)(N,{onClick:()=>s("react"),children:"React"}),(0,o.jsx)(N,{onClick:()=>s("node"),children:"Node"}),(0,o.jsx)(N,{onClick:()=>s("python"),children:"Python"}),(0,o.jsx)(N,{onClick:()=>s("mongodb"),children:"MongoDB"})]}),(0,o.jsx)(k,{children:r.map((e=>(0,o.jsxs)(C,{children:[(0,o.jsx)(L,{src:e.imageUrl,alt:e.title}),(0,o.jsx)(S,{children:e.title}),(0,o.jsx)(_,{children:e.description}),(0,o.jsxs)(H,{children:[(0,o.jsx)("strong",{children:"Author:"})," ",e.author]}),(0,o.jsx)(W,{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Course"})})]},e.id)))})]})};var M=t(63190);const I=()=>{const[e,n]=(0,a.useState)([]),[t,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{m()}),[]),(0,a.useEffect)((()=>{h()}),[t]);const m=()=>{const e=Array.from({length:40},(()=>Math.ceil(90*Math.random())+10));n(e)},h=()=>{const e=document.styleSheets;for(const n of e){const e=n.cssRules;for(const n of e)if(".v-move"===n.selectorText){n.style.transitionDuration=`${t}ms`;break}}},x=e=>new Promise((n=>setTimeout(n,e)));return(0,o.jsxs)("div",{className:"insertion-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:t,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{u(!0);for(let s=1;s<e.length;s++){let r=e[s],a=s-1;for(c(s);a>=0&&e[a]>r;)await x(t),e[a+1]=e[a],n([...e]),a-=1;e[a+1]=r,n([...e]),i(a+1)}u(!1)},disabled:d,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{m(),i(null),c(null)},disabled:d,children:"Reset"}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,n)=>(0,o.jsx)("div",{className:"array-bar "+(n===l?"current-index":n===r?"min-index":""),style:{height:3*e+"px",transitionDelay:t/2+"ms"}},n)))})]})},T="wrapper_Uma9",E="title_xLRu",z="titleInner_jsWe",R="icon_Dh3W";const B=function(e){let{children:n,name:t}=e;return(0,o.jsxs)("div",{className:T,children:[(0,o.jsx)("div",{className:E,children:(0,o.jsxs)("div",{className:z,children:[(0,o.jsx)("svg",{className:R,viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"})}),(0,o.jsx)("span",{children:t})]})}),n]})};const O=function(e){let{id:n}=e;return(0,o.jsx)("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${n}`,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})},P={...s.c,SolutionAuthor:function(e){let{name:n}=e;return(0,o.jsx)("div",{className:"solution-author-wrapper",children:(0,o.jsxs)("span",{children:["Written by ",n]})})},Tabs:r.c,TabItem:i.c,TutorialAuthors:function(e){let{names:n}=e;const t=n.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[t.length>1?"Authors: ":"Author: ",t.map(((e,n)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},n)))]})},Table:function(e){let{title:n,collectionLink:t,isSorted:s=!0,data:r}=e;const i=r.some((e=>e.tags)),a={Easy:0,Medium:1,Hard:2},c=(s?r.sort(((e,n)=>a[e.difficulty]-a[n.difficulty])):r).map(((e,n)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(t=e.difficulty,t.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),i&&(0,o.jsx)("td",{children:(0,o.jsx)(l,{names:e.tags})})]},n);var t}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:n}),t&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:t})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),i&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:c})]})]})},Contributors:function(e){let{names:n}=e;const t=n.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[t.length>1?"Contributors: ":"Contributor: ",t.map(((e,n)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},n)))]})},BrowserWindow:m.c,Highlight:function(e){let{children:n,color:t}=e;return(0,o.jsx)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:n})},GiscusComponent:h.c,ArrayVisualizations:c,BubbleSortVisualization:u,SelectionSortVisualization:d,CollectionList:j,DocCardList:M.c,FaReact:v.GAi,Courses:A,InsertionSortVisualization:I,File:B,YoutubeVideo:O}},22192:(e,n,t)=>{t.d(n,{c:()=>r});var s=t(11504);const r={React:s,...s}}}]);