import{u as x,a as h,_}from"./SmartImg-Bl0_b4B0.js";import{f}from"./utility-D-uUhmTE.js";import{S as o}from"./Skeleton-Bv5gJoHT.js";import{c as r,d,h as s,r as u,a as g,o as v,f as w,g as t,t as a,B as y,j as k}from"./index-D8tZCid9.js";const S={class:"mt-3 flex flex-col items-center"},b={__name:"DetailSkeleton",setup(c){return(n,e)=>(r(),d("div",S,[s(o,{class:"mb-5 h-8 w-1/2 max-w-xs md:h-10 md:w-1/3"}),s(o,{class:"mb-5 h-72 w-full max-w-5xl md:h-96 md:w-11/12 lg:h-[500px]"}),s(o,{class:"h-28 w-2/3 max-w-2xl md:h-32 lg:h-36 lg:w-1/2"})]))}},B={key:1,class:"container flex flex-col items-center px-3"},$={class:"my-5 text-center text-2xl font-bold text-primary"},D={class:"mb-3 flex gap-2 text-sm text-gray-500"},N={class:"my-5 max-w-2xl text-center lg:text-xl"},j={__name:"Post",props:{id:{type:String,required:!0}},setup(c){const n=c,e=u(null),i=u(!0),{locale:p}=g({useScope:"global"});return v(async()=>{try{const l=await x({url:`/api/posts/${n.id}`});e.value=l.data,e.value.date=f(e.value.date)}catch{h("Failed to fetch post details.",{type:"error"})}finally{i.value=!1}}),(l,m)=>i.value?(r(),w(b,{key:0})):(r(),d("div",B,[t("h2",$,a(e.value.title),1),t("div",null,[t("div",D,[t("p",null,a(e.value.type),1),m[0]||(m[0]=y(" · ")),t("p",null,a(e.value.date),1)]),s(_,{src:e.value.images[0].url,alt:e.value.images[0].title,width:e.value.images[0].width,height:e.value.images[0].height},null,8,["src","alt","width","height"])]),t("p",N,a(e.value.description[k(p)]),1)]))}};export{j as default};