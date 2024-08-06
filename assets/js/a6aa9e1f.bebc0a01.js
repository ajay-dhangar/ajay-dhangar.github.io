"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[37643,18401,83249],{12783:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(96540);var r=n(34164),s=n(97639),a=n(17153),i=n(18630),o=n(71866),l=n(84934),c=n(51210),d=n(64331),u=n(21141),h=n(58806),m=n(74848);function p(e){const t=(0,h.k)(e);return(0,m.jsx)(u.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function x(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,s.A)(),{blogDescription:r,blogTitle:i,permalink:o}=t,l="/"===o?n:i;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.be,{title:l,description:r}),(0,m.jsx)(c.A,{tag:"blog_posts_list"})]})}function g(e){const{metadata:t,items:n,sidebar:r}=e;return(0,m.jsxs)(o.A,{sidebar:r,children:[(0,m.jsx)(d.A,{items:n}),(0,m.jsx)(l.A,{metadata:t})]})}function b(e){return(0,m.jsxs)(a.e3,{className:(0,r.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,m.jsx)(x,{...e}),(0,m.jsx)(p,{...e}),(0,m.jsx)(g,{...e})]})}},84934:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(23230),s=n(13555),a=n(74848);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,r.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(s.A,{permalink:n,title:(0,a.jsx)(r.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,a.jsx)(s.A,{permalink:i,title:(0,a.jsx)(r.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},64331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(38322),s=n(64255),a=n(74848);function i(e){let{items:t,component:n=s.A}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,a.jsx)(r.i,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)}))})}},58806:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var r=n(98180),s=n(97639),a=n(93512);var i=n(38322);const o=e=>new Date(e).toISOString();function l(e){const t=e.map(h);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:m({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,s.A)(),{withBaseUrl:n}=(0,r.hH)(),{metadata:{blogDescription:a,blogTitle:i,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:i,description:a,blogPost:e.items.map((e=>function(e,t,n){const{assets:r,frontMatter:s,metadata:a}=e,{date:i,title:d,description:u,lastUpdatedAt:h}=a,m=r.image??s.image,p=s.keywords??[],x=`${t.url}${a.permalink}`,g=h?o(h):void 0;return{"@type":"BlogPosting","@id":x,mainEntityOfPage:x,url:x,headline:d,name:d,description:u,datePublished:i,...g?{dateModified:g}:{},...l(a.authors),...c(m,n,d),...p?{keywords:p}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,a.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,i.e)(),{siteConfig:d}=(0,s.A)(),{withBaseUrl:u}=(0,r.hH)(),{date:h,title:m,description:p,frontMatter:x,lastUpdatedAt:g}=n,b=t.image??x.image,j=x.keywords??[],f=g?o(g):void 0,y=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":y,mainEntityOfPage:y,url:y,headline:m,name:m,description:p,datePublished:h,...f?{dateModified:f}:{},...l(n.authors),...c(b,u,m),...j?{keywords:j}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function h(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function m(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},67137:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(34164);const s={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var a=n(74848);function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",style:o,bodyStyle:l}=e;return(0,a.jsxs)("div",{className:s.browserWindow,style:{...o,minHeight:n},children:[(0,a.jsxs)("div",{className:s.browserWindowHeader,children:[(0,a.jsxs)("div",{className:s.buttons,children:[(0,a.jsx)("span",{className:s.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:s.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,r.A)(s.browserWindowAddressBar,"text--truncate"),children:i}),(0,a.jsx)("div",{className:s.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar}),(0,a.jsx)("span",{className:s.bar})]})})]}),(0,a.jsx)("div",{className:s.browserWindowBody,style:l,children:t})]})}},73405:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var r=n(13955),s=n(7710),a=n(74848);function i(){const{colorMode:e}=(0,s.G)();return(0,a.jsx)("div",{className:"giscus-component",children:(0,a.jsx)(r.A,{id:"giscus",repo:"ajay-dhangar/ajay-dhangar.github.io",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},36876:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var r=n(34164),s=n(18630);const a={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var i=n(74848);function o(e){let{type:t,className:n,children:o}=e;return(0,i.jsx)("div",{className:(0,r.A)(s.G.common.admonition,s.G.common.admonitionType(t),a.admonition,n),children:o})}function l(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:a.admonitionHeading,children:[(0,i.jsx)("span",{className:a.admonitionIcon,children:t}),n]})}function c(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:a.admonitionContent,children:t}):null}function d(e){const{type:t,icon:n,title:r,children:s,className:a}=e;return(0,i.jsxs)(o,{type:t,className:a,children:[(0,i.jsx)(l,{title:r,icon:n}),(0,i.jsx)(c,{children:s})]})}},37126:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(21141),s=n(67137),a=n(96540),i=n(25380),o=n(74848);const l=i.i7`
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
`,h=e=>{let{collections:t}=e;return(0,o.jsx)("div",{children:t.map(((e,t)=>(0,o.jsxs)(c,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,o.jsx)(d,{children:e.label}),(0,o.jsx)(u,{children:e.url})]},t)))})};const m=i.Ay.div`
  margin: 5px;
`,p=i.Ay.div`
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
`,x=i.Ay.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`,g=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`,b=i.Ay.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,j=i.Ay.img`
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
`,A=e=>{let{courses:t}=e;const[n,r]=(0,a.useState)("all"),s="all"===n?t:t.filter((e=>e.category===n));return(0,o.jsxs)(m,{children:[(0,o.jsxs)(p,{children:[(0,o.jsx)(x,{onClick:()=>r("all"),children:"All"}),(0,o.jsx)(x,{onClick:()=>r("html"),children:"HTML"}),(0,o.jsx)(x,{onClick:()=>r("css"),children:"CSS"}),(0,o.jsx)(x,{onClick:()=>r("javascript"),children:"JavaScript"}),(0,o.jsx)(x,{onClick:()=>r("dsa"),children:"DSA"}),(0,o.jsx)(x,{onClick:()=>r("react"),children:"React"}),(0,o.jsx)(x,{onClick:()=>r("node"),children:"Node"}),(0,o.jsx)(x,{onClick:()=>r("python"),children:"Python"}),(0,o.jsx)(x,{onClick:()=>r("mongodb"),children:"MongoDB"})]}),(0,o.jsx)(g,{children:s.map((e=>(0,o.jsxs)(b,{children:[(0,o.jsx)(j,{src:e.imageUrl,alt:e.title}),(0,o.jsx)(f,{children:e.title}),(0,o.jsx)(y,{children:e.description}),(0,o.jsxs)(v,{children:[(0,o.jsx)("strong",{children:"Author:"})," ",e.author]}),(0,o.jsx)(w,{children:(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Course"})})]},e.id)))})]})},k=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(300),[s,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(null),[h,m]=(0,a.useState)(!1);(0,a.useEffect)((()=>{p()}),[]),(0,a.useEffect)((()=>{x()}),[n]);const p=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));t(e)},x=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const r=e[t].cssRules||e[t].rules;for(let e=0;e<r.length;e++)if(".v-move"===r[e].selectorText){r[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"array-visualizations",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>r(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{c(!0),m(!0);let t=e[0],r=0;for(let s=1;s<e.length;s++)u(s),e[s]<t&&(t=e[s],r=s),await new Promise((e=>setTimeout(e,n)));i(r),m(!1),c(!1)},disabled:l||h,children:"Find Lowest"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{p(),i(null)},disabled:l||h,children:"New Values"}),(0,o.jsxs)("p",{children:["Lowest value: ",null!==s?e[s]:null]}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:`array-bar ${t===s?"min-value":""} ${t===d?"current-value":""}`,style:{height:3*e+"px"}},t)))})]})},N=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(200),[s,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:50},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const r=e[t].cssRules||e[t].rules;for(let e=0;e<r.length;e++)if(".v-move"===r[e].selectorText){r[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>r(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let r=[...e];for(let e=0;e<r.length-1;e++)for(let s=0;s<r.length-e-1;s++)if(c([s,s+1]),await new Promise((e=>setTimeout(e,n))),r[s]>r[s+1]){let e=r[s];r[s]=r[s+1],r[s+1]=e,t([...r])}c([]),i(!1)},disabled:s,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:s,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},S=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(300),[s,i]=(0,a.useState)(null),[l,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{h()}),[]),(0,a.useEffect)((()=>{m()}),[n]);const h=()=>{const e=Array.from({length:40},(()=>Math.ceil(90*Math.random())+10));t(e)},m=()=>{const e=document.styleSheets;for(const t of e){const e=t.cssRules;for(const t of e)if(".v-move"===t.selectorText){t.style.transitionDuration=`${n}ms`;break}}},p=e=>new Promise((t=>setTimeout(t,e)));return(0,o.jsxs)("div",{className:"insertion-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>r(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{u(!0);for(let r=1;r<e.length;r++){let s=e[r],a=r-1;for(c(r);a>=0&&e[a]>s;)await p(n),e[a+1]=e[a],t([...e]),a-=1;e[a+1]=s,t([...e]),i(a+1)}u(!1)},disabled:d,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:()=>{h(),i(null),c(null)},disabled:d,children:"Reset"}),(0,o.jsx)("br",{})," ",(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(t===l?"current-index":t===s?"min-index":""),style:{height:3*e+"px",transitionDelay:n/2+"ms"}},t)))})]})},C=()=>{const[e,t]=(0,a.useState)([]),[n,r]=(0,a.useState)(300),[s,i]=(0,a.useState)(!1),[l,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const r=e[t].cssRules||e[t].rules;for(let e=0;e<r.length;e++)if(".v-move"===r[e].selectorText){r[e].style.transitionDuration=`${n}ms`;break}}};return(0,o.jsxs)("div",{className:"selection-sort-visualization",children:[(0,o.jsxs)("p",{children:["Speed: ",(0,o.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>r(Number(e.target.value))})]}),(0,o.jsx)("button",{onClick:async()=>{i(!0);let r=[...e];for(let e=0;e<r.length-1;e++){let s=e;for(let t=e+1;t<r.length;t++)c([s,t]),await new Promise((e=>setTimeout(e,n))),r[t]<r[s]&&(s=t);if(s!==e){let n=r[e];r[e]=r[s],r[s]=n,t([...r])}}c([]),i(!1)},disabled:s,children:"Sort"}),"\xa0",(0,o.jsx)("button",{onClick:d,disabled:s,children:"Generate New Array"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,o.jsx)("div",{className:"array-bar "+(l.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},_="wrapper_Uma9",L="title_xLRu",M="titleInner_jsWe",T="icon_Dh3W";const P=function(e){let{children:t,name:n}=e;return(0,o.jsxs)("div",{className:_,children:[(0,o.jsx)("div",{className:L,children:(0,o.jsxs)("div",{className:M,children:[(0,o.jsx)("svg",{className:T,viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true",children:(0,o.jsx)("path",{fillRule:"evenodd",d:"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"})}),(0,o.jsx)("span",{children:n})]})}),t]})};var B=n(73405);const W=e=>{let{id:t,title:n,tags:r,description:s}=e;return(0,o.jsxs)("div",{className:"lesson",children:[(0,o.jsx)("h2",{className:"lesson-title",children:n}),(0,o.jsx)("p",{className:"lesson-description",children:s}),(0,o.jsx)("div",{className:"lesson-tags",children:r.map(((e,t)=>(0,o.jsx)("span",{className:"lesson-tag",children:e},t)))})]})};function z(e){let{names:t}=e;if(!t)return null;const n=t.split(",");return(0,o.jsx)("div",{className:"tag-wrapper",children:n.map(((e,t)=>(0,o.jsx)("span",{className:"topic-tag",children:e},t)))})}var E=n(93269),I=n(93935),H=n(7227),$=n(49489),D=n(85604);const R=function(e){let{id:t}=e;return(0,o.jsx)("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})},O={...E.A,SolutionAuthor:function(e){let{name:t}=e;return(0,o.jsx)("div",{className:"solution-author-wrapper",children:(0,o.jsxs)("span",{children:["Written by ",t]})})},Tabs:$.A,TabItem:H.A,TutorialAuthors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:n,isSorted:r=!0,data:s}=e;const a=s.some((e=>e.tags)),i={Easy:0,Medium:1,Hard:2},l=(r?s.sort(((e,t)=>i[e.difficulty]-i[t.difficulty])):s).map(((e,t)=>{return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,o.jsx)("td",{className:(n=e.difficulty,n.toLowerCase()),children:e.difficulty}),(0,o.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,o.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,o.jsx)("span",{children:"N/A"})]}),a&&(0,o.jsx)("td",{children:(0,o.jsx)(z,{names:e.tags})})]},t);var n}));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h3",{children:t}),n&&(0,o.jsxs)("h4",{children:["Start Practicing:"," ",(0,o.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:n})]}),(0,o.jsxs)("table",{className:"suggested-problem-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Problem Name"}),(0,o.jsx)("th",{children:"Difficulty"}),(0,o.jsx)("th",{children:"Solution Link"}),a&&(0,o.jsx)("th",{children:"Topic"})]})}),(0,o.jsx)("tbody",{children:l})]})]})},Contributors:function(e){let{names:t}=e;const n=t.split(",");return(0,o.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((e,t)=>(0,o.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})},BrowserWindow:s.A,Highlight:function(e){let{children:t,color:n}=e;return(0,o.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:t})},GiscusComponent:B.A,ArrayVisualizations:k,BubbleSortVisualization:N,SelectionSortVisualization:C,CollectionList:h,DocCardList:I.A,FaReact:D.rMV,Courses:A,InsertionSortVisualization:S,File:P,YoutubeVideo:R,Lesson:W,Head:r.A}},24630:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(96540);const s={React:r,...r}}}]);