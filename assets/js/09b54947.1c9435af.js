"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4747],{84977:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>g,default:()=>y,frontMatter:()=>R,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"api/get-tags","title":"Get a list of tags","description":"Retrieves a list of tags and their associated metadata.","source":"@site/docs/api/get-tags.api.mdx","sourceDirName":"api","slug":"/api/get-tags","permalink":"/api/get-tags","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"get-tags","title":"Get a list of tags","description":"Retrieves a list of tags and their associated metadata.","sidebar_label":"Get a list of tags","hide_title":true,"hide_table_of_contents":true,"api":"eJy1VMFu2zAM/RWBZzVO1518K7CuyFBsRZtihyAYGJmJ1diSRtHJMsP/Pshx2jTdUAzDfLFsPT4+Uk9sIZJp2MoO8lkLC0ImvmykhHw27+YaBFcR8hlM03uuoaBo2Aax3kEOdyRsaUNRoapsFOWXKkUodIWSkiwrjNEbi0KFqkmwQMERaPCBGBPLpIAcViR9Ag1MMXgXKULewrvxOL1e5rxvjKEYl01V7RQPAvpsLySkJMY7ISeJA0OorOkzZo8xEbUQTUk1ppXsAkEOfvFIRkBD4KRP7F7GQdMREplxBxqsUB3fZrDFEcY6oRUxdBoc1sesUdi6VdrwW0c8+UOUYUr9vJTXoRqWnmsUyKFAoTOxNaWQJhR/G/LN+MbJ27VV1q3j74Q+Pxrej89fn+SDw0ZKz/YnFf/1tA597TSIlSr9umL2fHeADiprktIPfky8mO4BZBhstjnPZO/Qw4W5T3r2KY+vzVPSUiQkeA+DfACBHhYfD03/9HXaK7Nu6V/36Ma69Ra5IKe+BHKXtxP1wZumJid9e5LNN8Rxjz4fjUdjeK4ywSdO2BeN6Qk1VNbQ0J29++D684O6XC6JvbomR4yVum0WlTXqZo9Vm4ueteFqqCvmWbbdbkcr14w8r7KBNGa4CtXZxWg8KqWu+rKCj1KjO85HcjIu4GSutM9e+IcRM5yD0A/JQoXW9Rch1dAORzsDDDY18ByGSTfXUPooaattFxjpgauuS7+/N8RpSM41bJAtLlKDZ/NOQ0lYEPfzc0271HVjKCQDbbBq+mlxauc0WZ/Mdn01BQ340j0nbunZD7PH7Y6423aPmPo1ua4DPYiQ9A3dvOu6Xy8+BdI=","sidebar_class_name":"get api-method","info_path":"api/api-introduction","custom_edit_url":null,"hide_send_button":true},"sidebar":"sidebar","previous":{"title":"Create a new session","permalink":"/api/create-a-new-session"},"next":{"title":"Update a tag by ID","permalink":"/api/update-tag"}}');var i=a(74848),o=a(28453),r=a(57742),n=a.n(r),d=a(78178),p=a.n(d),l=a(19624),c=a.n(l),u=a(96226),m=a.n(u),f=(a(77675),a(19365),a(51107));const R={id:"get-tags",title:"Get a list of tags",description:"Retrieves a list of tags and their associated metadata.",sidebar_label:"Get a list of tags",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VMFu2zAM/RWBZzVO1518K7CuyFBsRZtihyAYGJmJ1diSRtHJMsP/Pshx2jTdUAzDfLFsPT4+Uk9sIZJp2MoO8lkLC0ImvmykhHw27+YaBFcR8hlM03uuoaBo2Aax3kEOdyRsaUNRoapsFOWXKkUodIWSkiwrjNEbi0KFqkmwQMERaPCBGBPLpIAcViR9Ag1MMXgXKULewrvxOL1e5rxvjKEYl01V7RQPAvpsLySkJMY7ISeJA0OorOkzZo8xEbUQTUk1ppXsAkEOfvFIRkBD4KRP7F7GQdMREplxBxqsUB3fZrDFEcY6oRUxdBoc1sesUdi6VdrwW0c8+UOUYUr9vJTXoRqWnmsUyKFAoTOxNaWQJhR/G/LN+MbJ27VV1q3j74Q+Pxrej89fn+SDw0ZKz/YnFf/1tA597TSIlSr9umL2fHeADiprktIPfky8mO4BZBhstjnPZO/Qw4W5T3r2KY+vzVPSUiQkeA+DfACBHhYfD03/9HXaK7Nu6V/36Ma69Ra5IKe+BHKXtxP1wZumJid9e5LNN8Rxjz4fjUdjeK4ywSdO2BeN6Qk1VNbQ0J29++D684O6XC6JvbomR4yVum0WlTXqZo9Vm4ueteFqqCvmWbbdbkcr14w8r7KBNGa4CtXZxWg8KqWu+rKCj1KjO85HcjIu4GSutM9e+IcRM5yD0A/JQoXW9Rch1dAORzsDDDY18ByGSTfXUPooaattFxjpgauuS7+/N8RpSM41bJAtLlKDZ/NOQ0lYEPfzc0271HVjKCQDbbBq+mlxauc0WZ/Mdn01BQ340j0nbunZD7PH7Y6423aPmPo1ua4DPYiQ9A3dvOu6Xy8+BdI=",sidebar_class_name:"get api-method",info_path:"api/api-introduction",custom_edit_url:null,hide_send_button:!0},g=void 0,b={},h=[];function j(t){const e={p:"p",...(0,o.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get a list of tags"}),"\n",(0,i.jsx)(n(),{method:"get",path:"/api/v1/tags",context:"endpoint"}),"\n",(0,i.jsx)(e.p,{children:"Retrieves a list of tags and their associated metadata."}),"\n",(0,i.jsx)(p(),{parameters:void 0}),"\n",(0,i.jsx)(c(),{title:"Body",body:void 0}),"\n",(0,i.jsx)(m(),{id:void 0,label:void 0,responses:{200:{description:"Successfully retrieved the list of tags.",content:{"application/json":{schema:{type:"object",properties:{response:{type:"array",items:{type:"object",properties:{id:{type:"integer"},name:{type:"string"},ownerId:{type:"integer"},createdAt:{type:"string",format:"date-time"},updatedAt:{type:"string",format:"date-time"},_count:{type:"object",properties:{links:{type:"integer"}}}}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"object",properties:{response:{type:"string"}},title:"ErrorResponse"}}}}}})]})}function y(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(j,{...t})}):j(t)}}}]);