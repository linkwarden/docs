"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[643],{5926:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(5893),n=t(1151);const r={sidebar_position:1},d="Overview",l={id:"api/overview",title:"Overview",description:"This page is under development and needs more clarification.",source:"@site/docs/api/overview.md",sourceDirName:"api",slug:"/api/overview",permalink:"/api/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/linkwarden/docs/blob/main/docs/api/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Profile Settings",permalink:"/Usage/profile-settings"},next:{title:"Manage Seats",permalink:"/billing/seats"}},c={},a=[];function o(e){const i={admonition:"admonition",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"This page is under development and needs more clarification."})}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Method"}),(0,s.jsx)(i.th,{children:"Route"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET"}),(0,s.jsxs)(i.td,{children:["/api/v1/archives/",":id","?FORMAT"]}),(0,s.jsx)(i.td,{children:"Get the archived file for a specific link"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET | PUT | Delete"}),(0,s.jsxs)(i.td,{children:["/api/v1/users/",":id"]}),(0,s.jsx)(i.td,{children:"Get and manage a single user."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"POST"}),(0,s.jsx)(i.td,{children:"/api/v1/users"}),(0,s.jsx)(i.td,{children:"Post a user (Register)."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET"}),(0,s.jsx)(i.td,{children:"/api/v1/tags"}),(0,s.jsx)(i.td,{children:"Get all tags for a user."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"PUT | DELETE"}),(0,s.jsxs)(i.td,{children:["/api/v1/tags/",":id"]}),(0,s.jsx)(i.td,{children:"Delete or edit tags."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET"}),(0,s.jsxs)(i.td,{children:["/api/v1/public/collections/",":id"]}),(0,s.jsx)(i.td,{children:"Get public collection info."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET"}),(0,s.jsx)(i.td,{children:"/api/v1/public/collections/links?PARAMS"}),(0,s.jsx)(i.td,{children:"Get all links under a public collection based on query params."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET"}),(0,s.jsxs)(i.td,{children:["/api/v1/public/links/",":id"]}),(0,s.jsx)(i.td,{children:"Get a single link under a public collection."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET"}),(0,s.jsxs)(i.td,{children:["/api/v1/public/users/",":id"]}),(0,s.jsx)(i.td,{children:"Get public profile info."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET | POST"}),(0,s.jsx)(i.td,{children:"/api/v1/migration"}),(0,s.jsx)(i.td,{children:"Import or export data."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET | POST"}),(0,s.jsx)(i.td,{children:"/api/v1/links?PARAMS"}),(0,s.jsx)(i.td,{children:"Get all links under a collection based on query params."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET | PUT | DELETE"}),(0,s.jsxs)(i.td,{children:["/api/v1/links/",":id"]}),(0,s.jsx)(i.td,{children:"Get and manage a single link."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"PUT"}),(0,s.jsxs)(i.td,{children:["/api/v1/links/",":id","/archive"]}),(0,s.jsx)(i.td,{children:"Trigger an archive for a specific link."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET"}),(0,s.jsx)(i.td,{children:"/api/v1/dashboard"}),(0,s.jsx)(i.td,{children:"Get Dashboard data."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET | POST"}),(0,s.jsx)(i.td,{children:"/api/v1/collections"}),(0,s.jsx)(i.td,{children:"Get/post collections for a specific user."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"PUT | DELETE"}),(0,s.jsxs)(i.td,{children:["/api/v1/collections/",":id"]}),(0,s.jsx)(i.td,{children:"Manage a single collection."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"GET"}),(0,s.jsxs)(i.td,{children:["/api/v1/avatar/",":id"]}),(0,s.jsx)(i.td,{children:"Get profile photo."})]})]})]})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>d});var s=t(7294);const n={},r=s.createContext(n);function d(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);