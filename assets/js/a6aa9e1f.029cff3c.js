"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[18401,37643],{12783:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});n(96540);var s=n(34164),r=n(97639),a=n(17153),i=n(18630),l=n(6953),o=n(84934),c=n(51210),d=n(64331),u=n(21141),h=n(89101),m=n(74848);function x(e){const t=(0,h.kJ)(e);return(0,m.jsx)(u.A,{children:(0,m.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function g(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,r.A)(),{blogDescription:s,blogTitle:i,permalink:l}=t,o="/"===l?n:i;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.be,{title:o,description:s}),(0,m.jsx)(c.A,{tag:"blog_posts_list"})]})}function p(e){const{metadata:t,items:n,sidebar:s}=e;return(0,m.jsxs)(l.A,{sidebar:s,children:[(0,m.jsx)(d.A,{items:n}),(0,m.jsx)(o.A,{metadata:t})]})}function j(e){return(0,m.jsxs)(a.e3,{className:(0,s.A)(i.G.wrapper.blogPages,i.G.page.blogListPage),children:[(0,m.jsx)(g,{...e}),(0,m.jsx)(x,{...e}),(0,m.jsx)(p,{...e})]})}},84934:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(23230),r=n(13555),a=n(74848);function i(e){const{metadata:t}=e,{previousPage:n,nextPage:i}=t;return(0,a.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,a.jsx)(r.A,{permalink:n,title:(0,a.jsx)(s.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),i&&(0,a.jsx)(r.A,{permalink:i,title:(0,a.jsx)(s.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},23162:(e,t,n)=>{n.d(t,{A:()=>M});n(96540);var s=n(34164),r=n(89101),a=n(74848);function i(e){let{children:t,className:n}=e;return(0,a.jsx)("article",{className:n,children:t})}var l=n(14783);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,r.e7)(),{permalink:c,title:d}=n,u=i?"h1":"h2";return(0,a.jsx)(u,{className:(0,s.A)(o.title,t),children:i?d:(0,a.jsx)(l.A,{to:c,children:d})})}var d=n(23230),u=n(57824),h=n(49191);const m={container:"container_mt6G"};function x(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,a.jsx)(a.Fragment,{children:n(t)})}function g(e){let{date:t,formattedDate:n}=e;return(0,a.jsx)("time",{dateTime:t,children:n})}function p(){return(0,a.jsx)(a.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,r.e7)(),{date:i,readingTime:l}=n,o=(0,h.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsxs)("div",{className:(0,s.A)(m.container,"margin-vert--md",t),children:[(0,a.jsx)(g,{date:i,formattedDate:(c=i,o.format(new Date(c)))}),void 0!==l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p,{}),(0,a.jsx)(x,{readingTime:l})]})]});var c}var b=n(97184);const f={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function v(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,r.e7)();if(0===n.length)return null;const l=n.every((e=>{let{name:t}=e;return!t})),o=1===n.length;return(0,a.jsx)("div",{className:(0,s.A)("margin-top--md margin-bottom--sm",l?f.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,a.jsx)("div",{className:(0,s.A)(!l&&(o?"col col--12":"col col--6"),l?f.imageOnlyAuthorCol:f.authorCol),children:(0,a.jsx)(b.A,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})},t)))})}function y(){return(0,a.jsxs)("header",{children:[(0,a.jsx)(c,{}),(0,a.jsx)(j,{}),(0,a.jsx)(v,{})]})}var A=n(64609),w=n(5323);function N(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,r.e7)();return(0,a.jsx)("div",{id:i?A.LU:void 0,className:(0,s.A)("markdown",n),children:(0,a.jsx)(w.A,{children:t})})}var k=n(18630),_=n(15659),C=n(81113);function S(){return(0,a.jsx)("b",{children:(0,a.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function T(e){const{blogPostTitle:t,...n}=e;return(0,a.jsx)(l.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,a.jsx)(S,{})})}function L(){const{metadata:e,isBlogPostPage:t}=(0,r.e7)(),{tags:n,title:i,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,h=n.length>0;if(!(h||u||l))return null;if(t){const e=!!(l||d||c);return(0,a.jsxs)("footer",{className:"docusaurus-mt-lg",children:[h&&(0,a.jsx)("div",{className:(0,s.A)("row","margin-top--sm",k.G.blog.blogFooterEditMetaRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(C.A,{tags:n})})}),e&&(0,a.jsx)(_.A,{className:(0,s.A)("margin-top--sm",k.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,a.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[h&&(0,a.jsx)("div",{className:(0,s.A)("col",{"col--9":u}),children:(0,a.jsx)(C.A,{tags:n})}),u&&(0,a.jsx)("div",{className:(0,s.A)("col text--right",{"col--3":h}),children:(0,a.jsx)(T,{blogPostTitle:i,to:e.permalink})})]})}function M(e){let{children:t,className:n}=e;const l=function(){const{isBlogPostPage:e}=(0,r.e7)();return e?void 0:"margin-bottom--xl"}();return(0,a.jsxs)(i,{className:(0,s.A)(l,n),children:[(0,a.jsx)(y,{}),(0,a.jsx)(N,{children:t}),(0,a.jsx)(L,{})]})}},64331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(89101),r=n(23162),a=n(74848);function i(e){let{items:t,component:n=r.A}=e;return(0,a.jsx)(a.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,a.jsx)(s.in,{content:t,children:(0,a.jsx)(n,{children:(0,a.jsx)(t,{})})},t.metadata.permalink)}))})}},13555:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164),r=n(14783),a=n(74848);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,a.jsxs)(r.A,{className:(0,s.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,a.jsx)("div",{className:"pagination-nav__label",children:n})]})}},41883:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(34164),r=n(14783);const a={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(74848);function l(e){let{permalink:t,label:n,count:l,description:o}=e;return(0,i.jsxs)(r.A,{href:t,title:o,className:(0,s.A)(a.tag,l?a.tagWithCount:a.tagRegular),children:[n,l&&(0,i.jsx)("span",{children:l})]})}},81113:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var s=n(34164),r=n(23230),a=n(41883);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(74848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.A)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(a.A,{...e})},e.permalink)))})]})}},67137:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164);const r={browserWindow:"browserWindow_jiSI",browserWindowHeader:"browserWindowHeader_ITW5",row:"row_OMw1",buttons:"buttons_hZyy",right:"right_RrL_",browserWindowAddressBar:"browserWindowAddressBar_iwHb",dot:"dot_Oyi3",browserWindowMenuIcon:"browserWindowMenuIcon_KLvG",bar:"bar_Liox",browserWindowBody:"browserWindowBody_T8Vh"};var a=n(74848);function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",style:l,bodyStyle:o}=e;return(0,a.jsxs)("div",{className:r.browserWindow,style:{...l,minHeight:n},children:[(0,a.jsxs)("div",{className:r.browserWindowHeader,children:[(0,a.jsxs)("div",{className:r.buttons,children:[(0,a.jsx)("span",{className:r.dot,style:{background:"#f25f58"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#fbbe3c"}}),(0,a.jsx)("span",{className:r.dot,style:{background:"#58cb42"}})]}),(0,a.jsx)("div",{className:(0,s.A)(r.browserWindowAddressBar,"text--truncate"),children:i}),(0,a.jsx)("div",{className:r.browserWindowMenuIcon,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar}),(0,a.jsx)("span",{className:r.bar})]})})]}),(0,a.jsx)("div",{className:r.browserWindowBody,style:o,children:t})]})}},73405:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(13955),r=n(7710),a=n(74848);function i(){const{colorMode:e}=(0,r.G)();return(0,a.jsx)("div",{className:"giscus-component",children:(0,a.jsx)(s.A,{id:"giscus",repo:"ajay-dhangar/ajay-dhangar.github.io",repoId:"R_kgDOLNryZQ",category:"General",categoryId:"DIC_kwDOLNryZc4Cc7ll",mapping:"pathname",term:"Welcome to @giscus/react component!",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"bottom",theme:e,lang:"en",loading:"lazy"})})}},36876:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var s=n(34164),r=n(18630);const a={admonition:"admonition_Gfwi",admonitionHeading:"admonitionHeading_f1Ed",admonitionIcon:"admonitionIcon_kpSf",admonitionContent:"admonitionContent_UjKb"};var i=n(74848);function l(e){let{type:t,className:n,children:l}=e;return(0,i.jsx)("div",{className:(0,s.A)(r.G.common.admonition,r.G.common.admonitionType(t),a.admonition,n),children:l})}function o(e){let{icon:t,title:n}=e;return(0,i.jsxs)("div",{className:a.admonitionHeading,children:[(0,i.jsx)("span",{className:a.admonitionIcon,children:t}),n]})}function c(e){let{children:t}=e;return t?(0,i.jsx)("div",{className:a.admonitionContent,children:t}):null}function d(e){const{type:t,icon:n,title:s,children:r,className:a}=e;return(0,i.jsxs)(l,{type:t,className:a,children:[(0,i.jsx)(o,{title:s,icon:n}),(0,i.jsx)(c,{children:r})]})}},37126:(e,t,n)=>{n.d(t,{A:()=>U});var s=n(21141),r=n(67137),a=n(96540),i=n(25380),l=n(74848);const o=i.i7`
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
    animation: ${o} 0.5s ease;
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
`,h=e=>{let{collections:t}=e;return(0,l.jsx)("div",{children:t.map(((e,t)=>(0,l.jsxs)(c,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)(d,{children:e.label}),(0,l.jsx)(u,{children:e.url})]},t)))})};const m=i.Ay.div`
  margin: 5px;
`,x=i.Ay.div`
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
`,g=i.Ay.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
  }
`,p=i.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`,j=i.Ay.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
`,b=i.Ay.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  background: linear-gradient(-30deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 150% 150%;
`,f=i.Ay.h3`
  margin-bottom: 5px;
  padding: 0 5px;
`,v=i.Ay.p`
  margin-bottom: 5px;
  padding: 0 8px;
  text-align: justify;
`,y=i.Ay.span`
  font-style: italic;
  padding: 0 8px;
`,A=i.Ay.div`
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
`,w=e=>{let{courses:t}=e;const[n,s]=(0,a.useState)("all"),r="all"===n?t:t.filter((e=>e.category===n));return(0,l.jsxs)(m,{children:[(0,l.jsxs)(x,{children:[(0,l.jsx)(g,{onClick:()=>s("all"),children:"All"}),(0,l.jsx)(g,{onClick:()=>s("html"),children:"HTML"}),(0,l.jsx)(g,{onClick:()=>s("css"),children:"CSS"}),(0,l.jsx)(g,{onClick:()=>s("javascript"),children:"JavaScript"}),(0,l.jsx)(g,{onClick:()=>s("dsa"),children:"DSA"}),(0,l.jsx)(g,{onClick:()=>s("react"),children:"React"}),(0,l.jsx)(g,{onClick:()=>s("node"),children:"Node"}),(0,l.jsx)(g,{onClick:()=>s("python"),children:"Python"}),(0,l.jsx)(g,{onClick:()=>s("mongodb"),children:"MongoDB"})]}),(0,l.jsx)(p,{children:r.map((e=>(0,l.jsxs)(j,{children:[(0,l.jsx)(b,{src:e.imageUrl,alt:e.title}),(0,l.jsx)(f,{children:e.title}),(0,l.jsx)(v,{children:e.description}),(0,l.jsxs)(y,{children:[(0,l.jsx)("strong",{children:"Author:"})," ",e.author]}),(0,l.jsx)(A,{children:(0,l.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:"Visit Course"})})]},e.id)))})]})},N=()=>{const[e,t]=(0,a.useState)([]),[n,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(null),[o,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(null),[h,m]=(0,a.useState)(!1);(0,a.useEffect)((()=>{x()}),[]),(0,a.useEffect)((()=>{g()}),[n]);const x=()=>{const e=Array.from({length:18},(()=>Math.ceil(90*Math.random())+10));t(e)},g=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,l.jsxs)("div",{className:"array-visualizations",children:[(0,l.jsxs)("p",{children:["Speed: ",(0,l.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,l.jsx)("button",{onClick:async()=>{c(!0),m(!0);let t=e[0],s=0;for(let r=1;r<e.length;r++)u(r),e[r]<t&&(t=e[r],s=r),await new Promise((e=>setTimeout(e,n)));i(s),m(!1),c(!1)},disabled:o||h,children:"Find Lowest"}),"\xa0",(0,l.jsx)("button",{onClick:()=>{x(),i(null)},disabled:o||h,children:"New Values"}),(0,l.jsxs)("p",{children:["Lowest value: ",null!==r?e[r]:null]}),(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,l.jsx)("div",{className:`array-bar ${t===r?"min-value":""} ${t===d?"current-value":""}`,style:{height:3*e+"px"}},t)))})]})},k=()=>{const[e,t]=(0,a.useState)([]),[n,s]=(0,a.useState)(200),[r,i]=(0,a.useState)(!1),[o,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:50},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,l.jsxs)("div",{className:"bubble-sort-visualization",children:[(0,l.jsxs)("p",{children:["Speed: ",(0,l.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,l.jsx)("button",{onClick:async()=>{i(!0);let s=[...e];for(let e=0;e<s.length-1;e++)for(let r=0;r<s.length-e-1;r++)if(c([r,r+1]),await new Promise((e=>setTimeout(e,n))),s[r]>s[r+1]){let e=s[r];s[r]=s[r+1],s[r+1]=e,t([...s])}c([]),i(!1)},disabled:r,children:"Sort"}),"\xa0",(0,l.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsxs)("p",{children:[(0,l.jsx)("strong",{children:"Instructions:"}),' Click the "Sort" button to visualize the Bubble Sort algorithm. You can also adjust the speed of the visualization using the slider.']}),(0,l.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,l.jsx)("div",{className:"array-bar "+(o.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},_=()=>{const[e,t]=(0,a.useState)([]),[n,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(null),[o,c]=(0,a.useState)(null),[d,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{h()}),[]),(0,a.useEffect)((()=>{m()}),[n]);const h=()=>{const e=Array.from({length:40},(()=>Math.ceil(90*Math.random())+10));t(e)},m=()=>{const e=document.styleSheets;for(const t of e){const e=t.cssRules;for(const t of e)if(".v-move"===t.selectorText){t.style.transitionDuration=`${n}ms`;break}}},x=e=>new Promise((t=>setTimeout(t,e)));return(0,l.jsxs)("div",{className:"insertion-sort-visualization",children:[(0,l.jsxs)("p",{children:["Speed: ",(0,l.jsx)("input",{type:"range",min:"50",max:"500",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,l.jsx)("button",{onClick:async()=>{u(!0);for(let s=1;s<e.length;s++){let r=e[s],a=s-1;for(c(s);a>=0&&e[a]>r;)await x(n),e[a+1]=e[a],t([...e]),a-=1;e[a+1]=r,t([...e]),i(a+1)}u(!1)},disabled:d,children:"Sort"}),"\xa0",(0,l.jsx)("button",{onClick:()=>{h(),i(null),c(null)},disabled:d,children:"Reset"}),(0,l.jsx)("br",{})," ",(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,l.jsx)("div",{className:"array-bar "+(t===o?"current-index":t===r?"min-index":""),style:{height:3*e+"px",transitionDelay:n/2+"ms"}},t)))})]})},C=()=>{const[e,t]=(0,a.useState)([]),[n,s]=(0,a.useState)(300),[r,i]=(0,a.useState)(!1),[o,c]=(0,a.useState)([]);(0,a.useEffect)((()=>{d()}),[]),(0,a.useEffect)((()=>{u()}),[n]);const d=()=>{const e=Array.from({length:30},(()=>Math.ceil(100*Math.random())));t(e)},u=()=>{const e=document.styleSheets;for(let t=0;t<e.length;t++){const s=e[t].cssRules||e[t].rules;for(let e=0;e<s.length;e++)if(".v-move"===s[e].selectorText){s[e].style.transitionDuration=`${n}ms`;break}}};return(0,l.jsxs)("div",{className:"selection-sort-visualization",children:[(0,l.jsxs)("p",{children:["Speed: ",(0,l.jsx)("input",{type:"range",min:"10",max:"200",value:n,onChange:e=>s(Number(e.target.value))})]}),(0,l.jsx)("button",{onClick:async()=>{i(!0);let s=[...e];for(let e=0;e<s.length-1;e++){let r=e;for(let t=e+1;t<s.length;t++)c([r,t]),await new Promise((e=>setTimeout(e,n))),s[t]<s[r]&&(r=t);if(r!==e){let n=s[e];s[e]=s[r],s[r]=n,t([...s])}}c([]),i(!1)},disabled:r,children:"Sort"}),"\xa0",(0,l.jsx)("button",{onClick:d,disabled:r,children:"Generate New Array"}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{className:"array-container",children:e.map(((e,t)=>(0,l.jsx)("div",{className:"array-bar "+(o.includes(t)?"comparing":""),style:{height:3*e+"px"}},t)))})]})},S="wrapper_Uma9",T="title_xLRu",L="titleInner_jsWe",M="icon_Dh3W";const R=function(e){let{children:t,name:n}=e;return(0,l.jsxs)("div",{className:S,children:[(0,l.jsx)("div",{className:T,children:(0,l.jsxs)("div",{className:L,children:[(0,l.jsx)("svg",{className:M,viewBox:"0 0 12 16",version:"1.1",width:"12",height:"16","aria-hidden":"true",children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7.5 5L10 7.5 7.5 10l-.75-.75L8.5 7.5 6.75 5.75 7.5 5zm-3 0L2 7.5 4.5 10l.75-.75L3.5 7.5l1.75-1.75L4.5 5zM0 13V2c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1zm1 0h10V2H1v11z"})}),(0,l.jsx)("span",{children:n})]})}),t]})};var W=n(73405);const P=e=>{let{id:t,title:n,tags:s,description:r}=e;return(0,l.jsxs)("div",{className:"lesson",children:[(0,l.jsx)("h2",{className:"lesson-title",children:n}),(0,l.jsx)("p",{className:"lesson-description",children:r}),(0,l.jsx)("div",{className:"lesson-tags",children:s.map(((e,t)=>(0,l.jsx)("span",{className:"lesson-tag",children:e},t)))})]})};function z(e){let{names:t}=e;if(!t)return null;const n=t.split(",");return(0,l.jsx)("div",{className:"tag-wrapper",children:n.map(((e,t)=>(0,l.jsx)("span",{className:"topic-tag",children:e},t)))})}var B=n(93269),H=n(93935),I=n(7227),D=n(49489),G=n(98027);const E=function(e){let{id:t}=e;return(0,l.jsx)("iframe",{width:"560",height:"315",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true"})},U={...B.A,SolutionAuthor:function(e){let{name:t}=e;return(0,l.jsx)("div",{className:"solution-author-wrapper",children:(0,l.jsxs)("span",{children:["Written by ",t]})})},Tabs:D.A,TabItem:I.A,TutorialAuthors:function(e){let{names:t}=e;const n=t.split(",");return(0,l.jsxs)("div",{className:"tutorial-tag-wrapper",children:[n.length>1?"Authors: ":"Author: ",n.map(((e,t)=>(0,l.jsx)("span",{className:"author-tag tag",children:e},t)))]})},Table:function(e){let{title:t,collectionLink:n,isSorted:s=!0,data:r}=e;const a=r.some((e=>e.tags)),i={Easy:0,Medium:1,Hard:2},o=(s?r.sort(((e,t)=>i[e.difficulty]-i[t.difficulty])):r).map(((e,t)=>{return(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)("a",{href:e.leetCodeLink,target:"_blank",rel:"noopener noreferrer",children:e.problemName})}),(0,l.jsx)("td",{className:(n=e.difficulty,n.toLowerCase()),children:e.difficulty}),(0,l.jsxs)("td",{style:{textAlign:"center"},children:[e.solutionLink&&(0,l.jsx)("a",{href:e.solutionLink,target:"_blank",rel:"noopener noreferrer",children:"View Solutions"}),!e.solutionLink&&(0,l.jsx)("span",{children:"N/A"})]}),a&&(0,l.jsx)("td",{children:(0,l.jsx)(z,{names:e.tags})})]},t);var n}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{children:t}),n&&(0,l.jsxs)("h4",{children:["Start Practicing:"," ",(0,l.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",children:n})]}),(0,l.jsxs)("table",{className:"suggested-problem-table",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Problem Name"}),(0,l.jsx)("th",{children:"Difficulty"}),(0,l.jsx)("th",{children:"Solution Link"}),a&&(0,l.jsx)("th",{children:"Topic"})]})}),(0,l.jsx)("tbody",{children:o})]})]})},Contributors:function(e){let{names:t}=e;const n=t.split(",");return(0,l.jsxs)("div",{className:"tutorial-tag-wrapper contributors",children:[n.length>1?"Contributors: ":"Contributor: ",n.map(((e,t)=>(0,l.jsx)("span",{className:"contributor-tag tag",children:e},t)))]})},BrowserWindow:r.A,Highlight:function(e){let{children:t,color:n}=e;return(0,l.jsx)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:t})},GiscusComponent:W.A,ArrayVisualizations:N,BubbleSortVisualization:k,SelectionSortVisualization:C,CollectionList:h,DocCardList:H.A,FaReact:G.rMV,Courses:w,InsertionSortVisualization:_,File:R,YoutubeVideo:E,Lesson:P,Head:s.A}},24630:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(96540);const r={React:s,...s}}}]);