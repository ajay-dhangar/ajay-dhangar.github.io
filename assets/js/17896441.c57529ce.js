"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[18401],{67137:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var s=n(34164);const r={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var i=n(74848);function a(e){let{children:t,minHeight:n,url:a="http://localhost:3000",style:o,bodyStyle:l}=e;return(0,i.jsxs)("div",{className:r.browserWindow,style:{...o,minHeight:n},children:[(0,i.jsxs)("div",{className:r.browserWindowHeader,children:[(0,i.jsxs)("div",{className:r.buttons,children:[(0,i.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,i.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,i.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,i.jsx)("div",{className:(0,s.A)(r.browserWindowAddressBar,"text--truncate"),children:a}),(0,i.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:r.bar}),(0,i.jsx)("span",{className:r.bar}),(0,i.jsx)("span",{className:r.bar})]})})]}),(0,i.jsx)("div",{className:r.browserWindowBody,style:l,children:t})]})}},36876:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var s=n(34164),r=n(18630);const i={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var a=n(74848);function o(e){let{type:t,className:n,children:o}=e;return(0,a.jsx)("div",{className:(0,s.A)(r.G.common.admonition,r.G.common.admonitionType(t),i.admonition,n),children:o})}function l(e){let{icon:t,title:n}=e;return(0,a.jsxs)("div",{className:i.admonitionHeading,children:[(0,a.jsx)("span",{className:i.admonitionIcon,children:t}),n]})}function c(e){let{children:t}=e;return t?(0,a.jsx)("div",{className:i.admonitionContent,children:t}):null}function d(e){const{type:t,icon:n,title:s,children:r,className:i}=e;return(0,a.jsxs)(o,{type:t,className:i,children:[(0,a.jsx)(l,{title:s,icon:n}),(0,a.jsx)(c,{children:r})]})}},16602:(e,t,n)=>{n.d(t,{A:()=>Y});var s=n(21141),r=n(67137),i=n(96540),a=n(25380),o=n(74848);const l=a.i7`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,c=a.Ay.a`
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
`,d=a.Ay.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
    color: #7f8c8d;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`,u=a.Ay.span`
    font-size: 14px;
`,h=e=>{let{collections:t}=e;return(0,o.jsx)("div",{children:t.map(((e,t)=>(0,o.jsxs)(c,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(d,{children:e.label}),(0,o.jsx)(u,{children:e.url})]},t)))})};const x=a.Ay.div`
  margin: 5px;
`,m=a.Ay.div`
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
`,p=a.Ay.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`,b=a.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`,g=a.Ay.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,j=a.Ay.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background: linear-gradient(-30deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 150% 150%;
`,f=a.Ay.h3`
  margin-bottom: 5px;
  padding: 0 5px;
`,y=a.Ay.p`
  margin-bottom: 5px;
  padding: 0 8px;
  text-align: justify;
`,v=a.Ay.span`
  font-style: italic;
  padding: 0 8px;
`,w=a.Ay.div`
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
`,N=e=>{let{courses:t}=e;const[n,s]=(0,i.useState)("all"),r="all"===n?t:t.filter((e=>e.category===n));return(0,o.jsxs)(x,{children:[(0,o.jsxs)(m,{children:[(0,o.jsx)(p,{onClick:()=>s("all"),children:"All"}),(0,o.jsx)(p,{onClick:()=>s("html"),children:"HTML"}),(0,o.jsx)(p,{onClick:()=>s("css"),children:"CSS"}),(0,o.jsx)(p,{onClick:()=>s("javascript"),children:"JavaScript"}),(0,o.jsx)(p,{onClick:()=>s("dsa"),children:"DSA"}),(0,o.jsx)(p,{onClick:()=>s("react"),children:"React"}),(0,o.jsx)(p,{onClick:()=>s("node"),children:"Node"}),(0,o.jsx)(p,{onClick:()=>s("python"),children:"Python"}),(0,o.jsx)(p,{onClick:()=>s("mongodb"),children:"MongoDB"})]}),(0,o.jsx)(b,{children:r.map((e=>(0,o.jsxs)(g,{children:[(0,o.jsx)(j,{src:e.imageUrl,alt:e.title}),(0,o.jsx)(f,{children:e.title}),(0,o.jsx)(y,{children:e.description}),(0,o.jsxs)(v,{children:[(0,o.jsx)("strong",{children:"Author:"})," ",e.author]}),(0,o.jsx)(w,{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Course"})})]},e.id)))})]})},k=()=>{const[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(300),[r,a]=(0,i.useState)(null),[l,c]=(0,i.useState)(!1),[d,u]=(0,i.useState)(null),[h,x]=(0,i.useState)(!1);(0,i.useEffect)((()=>{m()}),[]),(0,i.useEffect)((()=>{p()}),[n]);const m=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));t(e)},p=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),x(!0);let t=e[0],s=0;for(let r=1;r<e.length;r++)u(r),e[r]<t&&(t=e[r],s=r),await new Promise((e=>setTimeout(e,n)));a(s),x(!1),c(!1)},disabled:l||h,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{m(),a(null)},disabled:l||h,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==r?e[r]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:`array-bar ${t===r?"min-value":""} ${t===d?"current-value":""}`,style:{height:3*e+"px"}},t)))})]})},S=()=>{const[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(200),[r,a]=(0,i.useState)(!1),[l,c]=(0,i.useState)([]);(0,i.useEffect)((()=>{d()}),[]),(0,i.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:50},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{a(!0);let s=[...e];for(let e=0;e<s.length-1;e++)for(let r=0;r<s.length-e-1;r++)if(c([r,r+1]),await new Promise((e=>setTimeout(e,n))),s[r]>s[r+1]){let e=s[r];s[r]=s[r+1],s[r+1]=e,t([...s])}c([]),a(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},A=()=>{const[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(300),[r,a]=(0,i.useState)(null),[l,c]=(0,i.useState)(null),[d,u]=(0,i.useState)(!1);(0,i.useEffect)((()=>{h()}),[]),(0,i.useEffect)((()=>{x()}),[n]);const h=()=>{const e=Array.from({length:40},(()=>Math.ceil(90*Math.random())+10));t(e)},x=()=>{const e=document.styleSheets;for(const t of e){const e=t.cssRules;for(const t of e)if(".v-move"===t.selectorText){t.style.transitionDuration=`${n}ms`;break}}},m=e=>new Promise((t=>setTimeout(t,e)));return(0,o.jsxs)("div",{className:"insertion-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{u(!0);for(let s=1;s<e.length;s++){let r=e[s],i=s-1;for(c(s);i>=0&&e[i]>r;)await m(n),e[i+1]=e[i],t([...e]),i-=1;e[i+1]=r,t([...e]),a(i+1)}u(!1)},disabled:d,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{h(),a(null),c(null)},disabled:d,children:"Reset"}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(t===l?"current-index":t===r?"min-index":""),style:{height:3*e+"px",transitionDelay:n/2+"ms"}},t)))})]})},C=()=>{const[e,t]=(0,i.useState)([]),[n,s]=(0,i.useState)(300),[r,a]=(0,i.useState)(!1),[l,c]=(0,i.useState)([]);(0,i.useEffect)((()=>{d()}),[]),(0,i.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{a(!0);let s=[...e];for(let e=0;e<s.length-1;e++){let r=e;for(let t=e+1;t<s.length;t++)c([r,t]),await new Promise((e=>setTimeout(e,n))),s[t]<s[r]&&(r=t);if(r!==e){let n=s[e];s[e]=s[r],s[r]=n,t([...s])}}c([]),a(!1)},disabled:r,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},_="wrapper_Uma9",L="title_xLRu",M="titleInner_jsWe",W="icon_Dh3W";const z=function(e){let{children:t,name:n}=e;return(0,o.jsxs)("div",{className:_,children:[(0,o.jsx)("div",{className:L,children:(0,o.jsxs)("div",{className:M,children:[(0,o.jsx)("svg",{className:W,viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"})}),(0,o.jsx)("span",{children:n})]})}),t]})};var T=n(13955),H=n(7710);const I=e=>{let{id:t,title:n,tags:s,description:r}=e;return(0,o.jsxs)("div",{className:"lesson",children:[(0,o.jsx)("h2",{className:"lesson-title",children:n}),(0,o.jsx)("p",{className:"lesson-description",children:r}),(0,o.jsx)("div",{className:"lesson-tags",children:s.map(((e,t)=>(0,o.jsx)("span",{className:"lesson-tag",children:e},t)))})]})};function B(e){let{names:t}=e;if(!t)return null;const n=t.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:n.map(((e,t)=>(0,o.jsx)("span",{className:"topic-tag",children:e},t)))})}var D=n(93269),R=n(93935),V=n(7227),E=n(49489),G=n(98027),$=n(36980),P=n(14783);const F=function(e){let{id:t}=e;return(0,o.jsx)("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})},Y={...D.A,SolutionAuthor:function(e){let{name:t}=e;return(0,o.jsx)("div",{className:"solution-author-wrapper",children:(0,o.jsxs)("span",{children:["Written by ",t]})})},Tabs:E.A,TabItem:V.A,TutorialAuthors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:n,isSorted:s=!0,data:r}=e;const i=r.some((e=>e.tags)),a={Easy:0,Medium:1,Hard:2},l=(s?r.sort(((e,t)=>a[e.difficulty]-a[t.difficulty])):r).map(((e,t)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(n=e.difficulty,n.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),i&&(0,o.jsx)("td",{children:(0,o.jsx)(B,{names:e.tags})})]},t);var n}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:t}),n&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:n})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),i&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:l})]})]})},Contributors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})},BrowserWindow:r.A,Highlight:function(e){let{children:t,color:n}=e;return(0,o.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:t})},GiscusComponent:function(){const{colorMode:e}=(0,H.G)();return(0,o.jsx)("div",{className:"giscus-component",children:(0,o.jsx)(T.A,{id:"giscus",repo:"ajay-dhangar/ajay-dhangar.github.io",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})},ArrayVisualizations:k,BubbleSortVisualization:S,SelectionSortVisualization:C,CollectionList:h,DocCardList:R.A,FaReact:G.rMV,Courses:N,InsertionSortVisualization:A,File:z,YoutubeVideo:F,Lesson:I,Head:s.A,MagicButton:$.A,Link:P.A,FaLocationArrow:G.meu}},24630:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(96540);const r={React:s,...s}},36980:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(74848);const r=e=>{let{title:t,icon:n,position:r,otherClasses:i}=e;return(0,s.jsxs)("button",{className:"relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none",children:[(0,s.jsx)("span",{className:"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#adebad_0%,#009900_50%,#ccffcc_100%)]"}),(0,s.jsxs)("span",{className:`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg\n             bg-slate-800 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2 ${i}`,children:["left"===r&&n,t,"right"===r&&n]})]})}}}]);