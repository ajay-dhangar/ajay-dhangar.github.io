"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[66344,26752],{55544:(e,t,n)=>{n.d(t,{c:()=>a});n(11504);var r=n(65456);const s={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var i=n(17624);function a(e){let{children:t,minHeight:n,url:a="http://localhost:3000",style:o,bodyStyle:l}=e;return(0,i.jsxs)("div",{className:s.browserWindow,style:{...o,minHeight:n},children:[(0,i.jsxs)("div",{className:s.browserWindowHeader,children:[(0,i.jsxs)("div",{className:s.buttons,children:[(0,i.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,r.c)(s.browserWindowAddressBar,"text--truncate"),children:a}),(0,i.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:s.bar}),(0,i.jsx)("span",{className:s.bar}),(0,i.jsx)("span",{className:s.bar})]})})]}),(0,i.jsx)("div",{className:s.browserWindowBody,style:l,children:t})]})}},32216:(e,t,n)=>{n.d(t,{c:()=>a});n(11504);var r=n(59400),s=n(70768),i=n(17624);function a(){const{colorMode:e}=(0,s.U)();return(0,i.jsx)("div",{className:"giscus-component",children:(0,i.jsx)(r.c,{id:"giscus",repo:"ajay-dhangar/code-harbor-hub",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},68984:(e,t,n)=>{n.d(t,{c:()=>d});n(11504);var r=n(65456),s=n(55808);const i={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var a=n(17624);function o(e){let{type:t,className:n,children:o}=e;return(0,a.jsx)("div",{className:(0,r.c)(s.W.common.admonition,s.W.common.admonitionType(t),i.admonition,n),children:o})}function l(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:i.admonitionHeading,children:[(0,a.jsx)("span",{className:i.admonitionIcon,children:t}),n]})}function c(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:i.admonitionContent,children:t}):null}function d(e){const{type:t,icon:n,title:r,children:s,className:i}=e;return(0,a.jsxs)(o,{type:t,className:i,children:[(0,a.jsx)(l,{title:r,icon:n}),(0,a.jsx)(c,{children:s})]})}},24968:(e,t,n)=>{n.d(t,{c:()=>V});var r=n(9370),s=n(86212),i=n(22440),a=n(11504),o=n(17624);function l(e){let{names:t}=e;if(!t)return null;const n=t.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:n.map(((e,t)=>(0,o.jsx)("span",{className:"topic-tag",children:e},t)))})}const c=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(300),[s,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(null),[h,x]=(0,a.useState)(!1);(0,a.useEffect)((()=>{p()}),[]),(0,a.useEffect)((()=>{m()}),[n]);const p=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));t(e)},m=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const r=e[t].cssRules||e[t].rules;for(let e=0;e<r.length;e++)if(".v-move"===r[e].selectorText){r[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>r(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),x(!0);let t=e[0],r=0;for(let s=1;s<e.length;s++)u(s),e[s]<t&&(t=e[s],r=s),await new Promise((e=>setTimeout(e,n)));i(r),x(!1),c(!1)},disabled:l||h,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{p(),i(null)},disabled:l||h,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==s?e[s]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:`array-bar ${t===s?"min-value":""} ${t===d?"current-value":""}`,style:{height:3*e+"px"}},t)))})]})},d=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(300),[s,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const r=e[t].cssRules||e[t].rules;for(let e=0;e<r.length;e++)if(".v-move"===r[e].selectorText){r[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>r(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let r=[...e];for(let e=0;e<r.length-1;e++){let s=e;for(let t=e+1;t<r.length;t++)c([s,t]),await new Promise((e=>setTimeout(e,n))),r[t]<r[s]&&(s=t);if(s!==e){let n=r[e];r[e]=r[s],r[s]=n,t([...r])}}c([]),i(!1)},disabled:s,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:s,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},u=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(200),[s,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:50},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const r=e[t].cssRules||e[t].rules;for(let e=0;e<r.length;e++)if(".v-move"===r[e].selectorText){r[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>r(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let r=[...e];for(let e=0;e<r.length-1;e++)for(let s=0;s<r.length-e-1;s++)if(c([s,s+1]),await new Promise((e=>setTimeout(e,n))),r[s]>r[s+1]){let e=r[s];r[s]=r[s+1],r[s+1]=e,t([...r])}c([]),i(!1)},disabled:s,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:s,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})};var h=n(55544),x=n(32216),p=n(67288);const m=p.xZ`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,b=p.cp.a`
    display: block;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: transform 0.3s ease;
    animation: ${m} 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`,g=p.cp.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #7f8c8d;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`,j=p.cp.span`
    font-size: 14px;
`,f=e=>{let{collections:t}=e;return(0,o.jsx)("div",{children:t.map(((e,t)=>(0,o.jsxs)(b,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(g,{children:e.label}),(0,o.jsx)(j,{children:e.url})]},t)))})};var v=n(97512);const y=p.cp.div`
  margin: 5px;
`,w=p.cp.div`
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
`,N=p.cp.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`,k=p.cp.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`,S=p.cp.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,C=p.cp.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background: linear-gradient(-30deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 150% 150%;
`,_=p.cp.h3`
  margin-bottom: 5px;
  padding: 0 5px;
`,L=p.cp.p`
  margin-bottom: 5px;
  padding: 0 8px;
  text-align: justify;
`,W=p.cp.span`
  font-style: italic;
  padding: 0 8px;
`,A=p.cp.div`
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
`,z=e=>{let{courses:t}=e;const[n,r]=(0,a.useState)("all"),s="all"===n?t:t.filter((e=>e.category===n));return(0,o.jsxs)(y,{children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(N,{onClick:()=>r("all"),children:"All"}),(0,o.jsx)(N,{onClick:()=>r("html"),children:"HTML"}),(0,o.jsx)(N,{onClick:()=>r("css"),children:"CSS"}),(0,o.jsx)(N,{onClick:()=>r("javascript"),children:"JavaScript"}),(0,o.jsx)(N,{onClick:()=>r("dsa"),children:"DSA"}),(0,o.jsx)(N,{onClick:()=>r("react"),children:"React"}),(0,o.jsx)(N,{onClick:()=>r("node"),children:"Node"}),(0,o.jsx)(N,{onClick:()=>r("python"),children:"Python"}),(0,o.jsx)(N,{onClick:()=>r("mongodb"),children:"MongoDB"})]}),(0,o.jsx)(k,{children:s.map((e=>(0,o.jsxs)(S,{children:[(0,o.jsx)(C,{src:e.imageUrl,alt:e.title}),(0,o.jsx)(_,{children:e.title}),(0,o.jsx)(L,{children:e.description}),(0,o.jsxs)(W,{children:[(0,o.jsx)("strong",{children:"Author:"})," ",e.author]}),(0,o.jsx)(A,{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Course"})})]},e.id)))})]})};var M=n(63190);const T=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(300),[s,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{h()}),[]),(0,a.useEffect)((()=>{x()}),[n]);const h=()=>{const e=Array.from({length:40},(()=>Math.ceil(90*Math.random())+10));t(e)},x=()=>{const e=document.styleSheets;for(const t of e){const e=t.cssRules;for(const t of e)if(".v-move"===t.selectorText){t.style.transitionDuration=`${n}ms`;break}}},p=e=>new Promise((t=>setTimeout(t,e)));return(0,o.jsxs)("div",{className:"insertion-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>r(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{u(!0);for(let r=1;r<e.length;r++){let s=e[r],a=r-1;for(c(r);a>=0&&e[a]>s;)await p(n),e[a+1]=e[a],t([...e]),a-=1;e[a+1]=s,t([...e]),i(a+1)}u(!1)},disabled:d,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{h(),i(null),c(null)},disabled:d,children:"Reset"}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(t===l?"current-index":t===s?"min-index":""),style:{height:3*e+"px",transitionDelay:n/2+"ms"}},t)))})]})},I="wrapper_Uma9",H="title_xLRu",D="titleInner_jsWe",R="icon_Dh3W";const B=function(e){let{children:t,name:n}=e;return(0,o.jsxs)("div",{className:I,children:[(0,o.jsx)("div",{className:H,children:(0,o.jsxs)("div",{className:D,children:[(0,o.jsx)("svg",{className:R,viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"})}),(0,o.jsx)("span",{children:n})]})}),t]})};const E=function(e){let{id:t}=e;return(0,o.jsx)("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})},V={...r.c,SolutionAuthor:function(e){let{name:t}=e;return(0,o.jsx)("div",{className:"solution-author-wrapper",children:(0,o.jsxs)("span",{children:["Written by ",t]})})},Tabs:s.c,TabItem:i.c,TutorialAuthors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:n,isSorted:r=!0,data:s}=e;const i=s.some((e=>e.tags)),a={Easy:0,Medium:1,Hard:2},c=(r?s.sort(((e,t)=>a[e.difficulty]-a[t.difficulty])):s).map(((e,t)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(n=e.difficulty,n.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),i&&(0,o.jsx)("td",{children:(0,o.jsx)(l,{names:e.tags})})]},t);var n}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:t}),n&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:n})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),i&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:c})]})]})},Contributors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})},BrowserWindow:h.c,Highlight:function(e){let{children:t,color:n}=e;return(0,o.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:t})},GiscusComponent:x.c,ArrayVisualizations:c,BubbleSortVisualization:u,SelectionSortVisualization:d,CollectionList:f,DocCardList:M.c,FaReact:v.GAi,Courses:z,InsertionSortVisualization:T,File:B,YoutubeVideo:E}},22192:(e,t,n)=>{n.d(t,{c:()=>s});var r=n(11504);const s={React:r,...r}}}]);