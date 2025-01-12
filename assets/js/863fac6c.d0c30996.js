"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8003],{25795:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"self-hosting/installation","title":"Installation","description":"Our official Cloud offering is the easiest way to start using Linkwarden and is typically more affordable than renting a VPS.","source":"@site/docs/self-hosting/installation.md","sourceDirName":"self-hosting","slug":"/self-hosting/installation","permalink":"/self-hosting/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/linkwarden/docs/blob/main/docs/self-hosting/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"sidebar","previous":{"title":"Billing FAQ","permalink":"/billing/faq"},"next":{"title":"AI Tagging","permalink":"/self-hosting/ai-worker"}}');var r=i(74848),a=i(28453);const t={sidebar_position:1},l="Installation",o={},d=[{value:"Installation",id:"installation-1",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Docker \ud83d\udc0b",id:"docker-",level:3},{value:"1. Download the required files",id:"1-download-the-required-files",level:5},{value:"2. Configure the Environment Variables",id:"2-configure-the-environment-variables",level:5},{value:"3. Run it!",id:"3-run-it",level:5},{value:"Manual Installation",id:"manual-installation",level:3},{value:"1. Clone the Linkwarden repository",id:"1-clone-the-linkwarden-repository",level:4},{value:"2. Install the necessary dependancies",id:"2-install-the-necessary-dependancies",level:4},{value:"3. Configure the Environment Variables",id:"3-configure-the-environment-variables",level:4},{value:"4. Build and setup the database:",id:"4-build-and-setup-the-database",level:4},{value:"5. Start the app:",id:"5-start-the-app",level:4},{value:"Troubleshooting",id:"troubleshooting",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation",children:"Installation"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Our official ",(0,r.jsx)(n.a,{href:"https://linkwarden.app/#pricing",children:"Cloud"})," offering is the easiest way to start using Linkwarden and is typically more affordable than renting a VPS."]}),(0,r.jsx)(n.p,{children:"Plus, your subscription supports both the development and the continuous improvement of the app for everyone!"}),(0,r.jsx)(n.p,{children:"Alternatively, if you prefer self-hosting Linkwarden, no problem! You still have access to all the core features."})]}),"\n",(0,r.jsx)(n.p,{children:"Here you can find everything you need to setup a fully fledged Linkwarden instance on your own server."}),"\n",(0,r.jsx)(n.h2,{id:"installation-1",children:"Installation"}),"\n",(0,r.jsx)(n.h3,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,r.jsx)(n.p,{children:"Linkwarden has pretty minimal hardware requirements - it was tested on a VPS with 4gb of memory and it ran pretty smoothly, the most intense part is when you build the app, but once it's running it's relatively lightweight."}),"\n",(0,r.jsx)(n.h3,{id:"docker-",children:"Docker \ud83d\udc0b"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Docker"}),"\n",(0,r.jsx)(n.li,{children:"Curl"}),"\n"]}),"\n",(0,r.jsx)(n.h5,{id:"1-download-the-required-files",children:"1. Download the required files"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'mkdir linkwarden && cd linkwarden\ncurl -O https://raw.githubusercontent.com/linkwarden/linkwarden/refs/heads/main/docker-compose.yml\ncurl -L https://raw.githubusercontent.com/linkwarden/linkwarden/refs/heads/main/.env.sample -o ".env"\n'})}),"\n",(0,r.jsx)(n.h5,{id:"2-configure-the-environment-variables",children:"2. Configure the Environment Variables"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano .env\n"})}),"\n",(0,r.jsx)(n.p,{children:"The required environment variables are:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"NEXTAUTH_URL=http://localhost:3000/api/v1/auth\nNEXTAUTH_SECRET=VERY_SENSITIVE_SECRET\nPOSTGRES_PASSWORD=CUSTOM_POSTGRES_PASSWORD\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The only thing you MUST change here is ",(0,r.jsx)(n.code,{children:"NEXTAUTH_SECRET"})," and ",(0,r.jsx)(n.code,{children:"POSTGRES_PASSWORD"}),", they both should be different secret phrases."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NEXTAUTH_URL"})," should be changed to your domain name ",(0,r.jsx)(n.em,{children:"only if you are hosting it somewhere else"}),"."]}),"\n",(0,r.jsx)(n.h5,{id:"3-run-it",children:"3. Run it!"}),"\n",(0,r.jsx)(n.p,{children:"In the main folder (where you created the .env file) simply run the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After a few minutes (depending on your internet connection) you can access Linkwarden via ",(0,r.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," (or whichever hostname you deployed Linkwarden on)."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enjoy!"})}),"\n",(0,r.jsx)(n.h3,{id:"manual-installation",children:"Manual Installation"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The Manual Installation is targeted towards a more technical audience, to take an easier path, go for installation using ",(0,r.jsx)(n.a,{href:"/self-hosting/installation#docker-compose",children:"Docker"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Requirements:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Git"}),"\n",(0,r.jsx)(n.li,{children:"Node.js"}),"\n",(0,r.jsx)(n.li,{children:"Yarn"}),"\n",(0,r.jsx)(n.li,{children:"Postgres"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Y2Z/monolith",children:"Monolith"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"1-clone-the-linkwarden-repository",children:"1. Clone the Linkwarden repository"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/linkwarden/linkwarden.git\ncd linkwarden\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2-install-the-necessary-dependancies",children:"2. Install the necessary dependancies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn\nnpx playwright install --with-deps chromium\n"})}),"\n",(0,r.jsx)(n.h4,{id:"3-configure-the-environment-variables",children:"3. Configure the Environment Variables"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd linkwarden\ncp .env.sample .env\nnano .env\n"})}),"\n",(0,r.jsx)(n.p,{children:"The required environment variables are:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"NEXTAUTH_SECRET=VERY_SENSITIVE_SECRET\nNEXTAUTH_URL=http://localhost:3000/api/v1/auth\nDATABASE_URL=postgresql://[USERNAME]:[PASSWORD]@localhost:[PORT]/[DATABASE]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The only thing you MUST change here is ",(0,r.jsx)(n.code,{children:"NEXTAUTH_SECRET"})," and ",(0,r.jsx)(n.code,{children:"DATABASE_URL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"NEXTAUTH_URL"})," should be changed to your domain name ",(0,r.jsx)(n.em,{children:"only if you are hosting it somewhere else"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"4-build-and-setup-the-database",children:"4. Build and setup the database:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn build\nyarn prisma migrate deploy\n"})}),"\n",(0,r.jsx)(n.h4,{id:"5-start-the-app",children:"5. Start the app:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn start\n"})}),"\n",(0,r.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.p,{children:"There are a few common issues that you might encounter when setting up Linkwarden, here are some of them:"}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.code,{children:"[0] upstream image response failed for https://t2.gstatic.com/faviconV2..."})}),(0,r.jsx)(n.p,{children:"This error is caused by the favicon (the website's logo) not being found, it's really not a big deal, but if you want to fix it, you can set an icon to the links that don't have a favicon, or you can just hide the icons. The favicon is the only part that isn't actually stored and is being fetched from the internet every time you load the page."})]}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:(0,r.jsx)(n.code,{children:"Type error: Module '\"@prisma/client\"' has no exported member..."})}),(0,r.jsxs)(n.p,{children:["This error is caused by the ",(0,r.jsx)(n.code,{children:"@prisma/client"})," package not being installed correctly, to fix it, simply run:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn prisma generate\n"})})]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);