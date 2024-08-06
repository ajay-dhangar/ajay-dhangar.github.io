"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[83249,18401],{67137:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(34164);const r={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var a=s(74848);function i(e){let{children:t,minHeight:s,url:i="http://localhost:3000",style:o,bodyStyle:l}=e;return(0,a.jsxs)("div",{className:r.browserWindow,style:{...o,minHeight:s},children:[(0,a.jsxs)("div",{className:r.browserWindowHeader,children:[(0,a.jsxs)("div",{className:r.buttons,children:[(0,a.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,n.A)(r.browserWindowAddressBar,"text--truncate"),children:i}),(0,a.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar})]})})]}),(0,a.jsx)("div",{className:r.browserWindowBody,style:l,children:t})]})}},73405:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(13955),r=s(7710),a=s(74848);function i(){const{colorMode:e}=(0,r.G)();return(0,a.jsx)("div",{className:"giscus-component",children:(0,a.jsx)(n.A,{id:"giscus",repo:"ajay-dhangar/ajay-dhangar.github.io",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},36876:(e,t,s)=>{s.d(t,{A:()=>d});s(96540);var n=s(34164),r=s(18630);const a={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var i=s(74848);function o(e){let{type:t,className:s,children:o}=e;return(0,i.jsx)("div",{className:(0,n.A)(r.G.common.admonition,r.G.common.admonitionType(t),a.admonition,s),children:o})}function l(e){let{icon:t,title:s}=e;return(0,i.jsxs)("div",{className:a.admonitionHeading,children:[(0,i.jsx)("span",{className:a.admonitionIcon,children:t}),s]})}function c(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:a.admonitionContent,children:t}):null}function d(e){const{type:t,icon:s,title:n,children:r,className:a}=e;return(0,i.jsxs)(o,{type:t,className:a,children:[(0,i.jsx)(l,{title:n,icon:s}),(0,i.jsx)(c,{children:r})]})}},37126:(e,t,s)=>{s.d(t,{A:()=>P});var n=s(21141),r=s(67137),a=s(96540),i=s(25380),o=s(74848);const l=i.i7`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,c=i.Ay.a`
    display: block;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: transform 0.3s ease;
    animation: ${l} 0.5s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
    }
`,d=i.Ay.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #7f8c8d;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`,u=i.Ay.span`
    font-size: 14px;
`,h=e=>{let{collections:t}=e;return(0,o.jsx)("div",{children:t.map(((e,t)=>(0,o.jsxs)(c,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(d,{children:e.label}),(0,o.jsx)(u,{children:e.url})]},t)))})};const x=i.Ay.div`
  margin: 5px;
`,m=i.Ay.div`
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
`,p=i.Ay.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`,b=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`,j=i.Ay.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,g=i.Ay.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background: linear-gradient(-30deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 150% 150%;
`,f=i.Ay.h3`
  margin-bottom: 5px;
  padding: 0 5px;
`,y=i.Ay.p`
  margin-bottom: 5px;
  padding: 0 8px;
  text-align: justify;
`,v=i.Ay.span`
  font-style: italic;
  padding: 0 8px;
`,w=i.Ay.div`
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
`,N=e=>{let{courses:t}=e;const[s,n]=(0,a.useState)("all"),r="all"===s?t:t.filter((e=>e.category===s));return(0,o.jsxs)(x,{children:[(0,o.jsxs)(m,{children:[(0,o.jsx)(p,{onClick:()=>n("all"),children:"All"}),(0,o.jsx)(p,{onClick:()=>n("html"),children:"HTML"}),(0,o.jsx)(p,{onClick:()=>n("css"),children:"CSS"}),(0,o.jsx)(p,{onClick:()=>n("javascript"),children:"JavaScript"}),(0,o.jsx)(p,{onClick:()=>n("dsa"),children:"DSA"}),(0,o.jsx)(p,{onClick:()=>n("react"),children:"React"}),(0,o.jsx)(p,{onClick:()=>n("node"),children:"Node"}),(0,o.jsx)(p,{onClick:()=>n("python"),children:"Python"}),(0,o.jsx)(p,{onClick:()=>n("mongodb"),children:"MongoDB"})]}),(0,o.jsx)(b,{children:r.map((e=>(0,o.jsxs)(j,{children:[(0,o.jsx)(g,{src:e.imageUrl,alt:e.title}),(0,o.jsx)(f,{children:e.title}),(0,o.jsx)(y,{children:e.description}),(0,o.jsxs)(v,{children:[(0,o.jsx)("strong",{children:"Author:"})," ",e.author]}),(0,o.jsx)(w,{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Course"})})]},e.id)))})]})},k=()=>{const[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(300),[r,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(null),[h,x]=(0,a.useState)(!1);(0,a.useEffect)((()=>{m()}),[]),(0,a.useEffect)((()=>{p()}),[s]);const m=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));t(e)},p=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const n=e[t].cssRules||e[t].rules;for(let e=0;e<n.length;e++)if(".v-move"===n[e].selectorText){n[e].style.transitionDuration=`${s}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:s,onChange:e=>n(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),x(!0);let t=e[0],n=0;for(let r=1;r<e.length;r++)u(r),e[r]<t&&(t=e[r],n=r),await new Promise((e=>setTimeout(e,s)));i(n),x(!1),c(!1)},disabled:l||h,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{m(),i(null)},disabled:l||h,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==r?e[r]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:`array-bar ${t===r?"min-value":""} ${t===d?"current-value":""}`,style:{height:3*e+"px"}},t)))})]})},S=()=>{const[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(200),[r,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[s]);const d=()=>{const e=Array.from({length:50},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const n=e[t].cssRules||e[t].rules;for(let e=0;e<n.length;e++)if(".v-move"===n[e].selectorText){n[e].style.transitionDuration=`${s}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:s,onChange:e=>n(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let n=[...e];for(let e=0;e<n.length-1;e++)for(let r=0;r<n.length-e-1;r++)if(c([r,r+1]),await new Promise((e=>setTimeout(e,s))),n[r]>n[r+1]){let e=n[r];n[r]=n[r+1],n[r+1]=e,t([...n])}c([]),i(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},A=()=>{const[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(300),[r,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{h()}),[]),(0,a.useEffect)((()=>{x()}),[s]);const h=()=>{const e=Array.from({length:40},(()=>Math.ceil(90*Math.random())+10));t(e)},x=()=>{const e=document.styleSheets;for(const t of e){const e=t.cssRules;for(const t of e)if(".v-move"===t.selectorText){t.style.transitionDuration=`${s}ms`;break}}},m=e=>new Promise((t=>setTimeout(t,e)));return(0,o.jsxs)("div",{className:"insertion-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:s,onChange:e=>n(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{u(!0);for(let n=1;n<e.length;n++){let r=e[n],a=n-1;for(c(n);a>=0&&e[a]>r;)await m(s),e[a+1]=e[a],t([...e]),a-=1;e[a+1]=r,t([...e]),i(a+1)}u(!1)},disabled:d,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{h(),i(null),c(null)},disabled:d,children:"Reset"}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(t===l?"current-index":t===r?"min-index":""),style:{height:3*e+"px",transitionDelay:s/2+"ms"}},t)))})]})},C=()=>{const[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)(300),[r,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[s]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const n=e[t].cssRules||e[t].rules;for(let e=0;e<n.length;e++)if(".v-move"===n[e].selectorText){n[e].style.transitionDuration=`${s}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:s,onChange:e=>n(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let n=[...e];for(let e=0;e<n.length-1;e++){let r=e;for(let t=e+1;t<n.length;t++)c([r,t]),await new Promise((e=>setTimeout(e,s))),n[t]<n[r]&&(r=t);if(r!==e){let s=n[e];n[e]=n[r],n[r]=s,t([...n])}}c([]),i(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},_="wrapper_Uma9",L="title_xLRu",W="titleInner_jsWe",M="icon_Dh3W";const z=function(e){let{children:t,name:s}=e;return(0,o.jsxs)("div",{className:_,children:[(0,o.jsx)("div",{className:L,children:(0,o.jsxs)("div",{className:W,children:[(0,o.jsx)("svg",{className:M,viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"})}),(0,o.jsx)("span",{children:s})]})}),t]})};var T=s(73405);const H=e=>{let{id:t,title:s,tags:n,description:r}=e;return(0,o.jsxs)("div",{className:"lesson",children:[(0,o.jsx)("h2",{className:"lesson-title",children:s}),(0,o.jsx)("p",{className:"lesson-description",children:r}),(0,o.jsx)("div",{className:"lesson-tags",children:n.map(((e,t)=>(0,o.jsx)("span",{className:"lesson-tag",children:e},t)))})]})};function I(e){let{names:t}=e;if(!t)return null;const s=t.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:s.map(((e,t)=>(0,o.jsx)("span",{className:"topic-tag",children:e},t)))})}var D=s(93269),R=s(93935),B=s(7227),V=s(49489),E=s(85604);const G=function(e){let{id:t}=e;return(0,o.jsx)("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})},P={...D.A,SolutionAuthor:function(e){let{name:t}=e;return(0,o.jsx)("div",{className:"solution-author-wrapper",children:(0,o.jsxs)("span",{children:["Written by ",t]})})},Tabs:V.A,TabItem:B.A,TutorialAuthors:function(e){let{names:t}=e;const s=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[s.length>1?"Authors: ":"Author: ",s.map(((e,t)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:s,isSorted:n=!0,data:r}=e;const a=r.some((e=>e.tags)),i={Easy:0,Medium:1,Hard:2},l=(n?r.sort(((e,t)=>i[e.difficulty]-i[t.difficulty])):r).map(((e,t)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(s=e.difficulty,s.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),a&&(0,o.jsx)("td",{children:(0,o.jsx)(I,{names:e.tags})})]},t);var s}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:t}),s&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:s})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),a&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:l})]})]})},Contributors:function(e){let{names:t}=e;const s=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[s.length>1?"Contributors: ":"Contributor: ",s.map(((e,t)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})},BrowserWindow:r.A,Highlight:function(e){let{children:t,color:s}=e;return(0,o.jsx)("span",{style:{backgroundColor:s,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:t})},GiscusComponent:T.A,ArrayVisualizations:k,BubbleSortVisualization:S,SelectionSortVisualization:C,CollectionList:h,DocCardList:R.A,FaReact:E.rMV,Courses:N,InsertionSortVisualization:A,File:z,YoutubeVideo:G,Lesson:H,Head:n.A}},24630:(e,t,s)=>{s.d(t,{A:()=>r});var n=s(96540);const r={React:n,...n}}}]);