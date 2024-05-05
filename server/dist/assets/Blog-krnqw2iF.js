import{u as y}from"./vue.f36acd1f-qCgDnVCW.js";import{c as s,d as r,F as p,e as f,g as t,h as a,a as w,r as h,o as k,f as b,w as g,t as n,j as c,R as m,D as B,n as $}from"./index-BsDnfXPw.js";import{u as D,a as S,_ as A}from"./SmartImg-ldV9eyGP.js";import{f as E}from"./utility-D-uUhmTE.js";import{S as u}from"./Skeleton-CwFAivjE.js";const F={class:"container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"},L={__name:"BlogSkeleton",setup(x){return(_,l)=>(s(),r("div",F,[(s(),r(p,null,f(4,i=>t("div",{key:i},[a(u,{class:"mb-3 h-8 w-36"}),a(u,{class:"w-4/4 mb-3 h-72 sm:h-80 md:h-96 lg:h-64 xl:h-80 2xl:h-96"}),a(u,{class:"h-16 w-72"})])),64))]))}},N={key:1,class:"container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"},V={class:"text-xl font-semibold lg:text-2xl"},C={class:"mt-3 flex gap-2"},M={class:"text-primary underline hover:text-primary-600"},I={__name:"Blog",setup(x){y({title:"Blog | El Andariego",meta:[{name:"description",content:"Anything new in the life of El Andariego"}]});const{t:_}=w({useScope:"global"}),l=h([]),i=h(!0);return k(async()=>{try{const d=await D({url:"/api/blog/list"});l.value=d.data.data,l.value.sort((o,e)=>new Date(e.date)-new Date(o.date)),l.value.forEach(o=>{o.date=E(o.date)})}catch{S("Failed to fetch posts.",{type:"error"})}finally{i.value=!1}}),(d,o)=>i.value?(s(),b(L,{key:0})):(s(),r("div",N,[(s(!0),r(p,null,f(l.value,(e,v)=>(s(),r("div",{key:e._id},[a(c(m),{to:`/blog/${e._id}`,class:"inline-block cursor-pointer"},{default:g(()=>[t("h1",V,n(e.title),1)]),_:2},1032,["to"]),a(c(m),{to:`/blog/${e._id}`,class:"cursor-pointer hover:opacity-75"},{default:g(()=>[a(A,{src:e.images[0].url,alt:e.images[0].title,width:e.images[0].width,height:e.images[0].height},null,8,["src","alt","width","height"])]),_:2},1032,["to"]),t("div",{class:$(["flex flex-col items-start",{"order-lg-1":v%2===0}])},[t("div",C,[t("p",null,n(e.type),1),B(" · "),t("p",null,n(e.date),1)]),a(c(m),{to:`/blog/${e._id}`,class:"cursor-pointer"},{default:g(()=>[t("p",M,n(c(_)("blog.read_more")),1)]),_:2},1032,["to"])],2)]))),128))]))}};export{I as default};
