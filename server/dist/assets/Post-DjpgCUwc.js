import{u as p,a as x,_ as h}from"./SmartImg-CFz8fxeY.js";import{f as _}from"./utility-D-uUhmTE.js";import{S as o}from"./Skeleton-PxQCXwr4.js";import{c,d as u,h as s,r as m,a as f,o as g,f as v,g as t,t as a,D as w,j as y}from"./index-B085XOD1.js";const k={class:"mt-3 flex flex-col items-center"},b={__name:"DetailSkeleton",setup(r){return(i,e)=>(c(),u("div",k,[s(o,{class:"mb-5 h-8 w-1/2 max-w-xs md:h-10 md:w-1/3"}),s(o,{class:"mb-5 h-72 w-full max-w-5xl md:h-96 md:w-11/12 lg:h-[500px]"}),s(o,{class:"h-28 w-2/3 max-w-2xl md:h-32 lg:h-36 lg:w-1/2"})]))}},S={key:1,class:"container flex flex-col items-center px-3"},B={class:"my-5 text-center text-2xl font-bold text-primary"},D={class:"mb-3 flex gap-2 text-sm text-gray-500"},$={class:"my-5 max-w-2xl text-center lg:text-xl"},q={__name:"Post",props:{id:{type:String,required:!0}},setup(r){const i=r,e=m(null),n=m(!0),{locale:d}=f({useScope:"global"});return g(async()=>{try{const l=await p({url:`/api/blog/${i.id}`});e.value=l.data.data,e.value.date=_(e.value.date)}catch{x("Failed to fetch post details.",{type:"error"})}finally{n.value=!1}}),(l,N)=>n.value?(c(),v(b,{key:0})):(c(),u("div",S,[t("h2",B,a(e.value.title),1),t("div",null,[t("div",D,[t("p",null,a(e.value.type),1),w(" · "),t("p",null,a(e.value.date),1)]),s(h,{src:e.value.images[0].url,alt:e.value.images[0].title,width:e.value.images[0].width,height:e.value.images[0].height},null,8,["src","alt","width","height"])]),t("p",$,a(e.value.description[y(d)]),1)]))}};export{q as default};
