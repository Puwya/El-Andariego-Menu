import{u as y}from"./vue.f36acd1f-B-3AYIE_.js";import{d as s,e as r,F as p,f,h as t,i as a,a as k,r as h,o as w,H as b,b as B,g as $,w as g,t as n,k as c,R as u,I as S,n as A}from"./index-Dpuw_K1n.js";import{u as D,_ as E}from"./SmartImg-DJtYz4X8.js";import{S as m}from"./Skeleton-DbvelXRE.js";const F={class:"container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"},L={__name:"BlogSkeleton",setup(x){return(_,l)=>(s(),r("div",F,[(s(),r(p,null,f(4,i=>t("div",{key:i},[a(m,{class:"mb-3 h-8 w-36"}),a(m,{class:"w-4/4 mb-3 h-72 sm:h-80 md:h-96 lg:h-64 xl:h-80 2xl:h-96"}),a(m,{class:"h-16 w-72"})])),64))]))}},N={key:1,class:"container mt-6 grid grid-cols-1 items-center gap-10 px-3 lg:mt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"},V={class:"text-xl font-semibold lg:text-2xl"},C={class:"mt-3 flex gap-2"},H={class:"text-primary underline hover:text-primary-600"},z={__name:"Blog",setup(x){y({title:"Blog | El Andariego",meta:[{name:"description",content:"Anything new in the life of El Andariego"}]});const{t:_}=k({useScope:"global"}),l=h([]),i=h(!0);return w(async()=>{try{const d=await D({url:"/api/blog/list"});l.value=d.data.data,l.value.sort((o,e)=>new Date(e.date)-new Date(o.date)),l.value.forEach(o=>{o.date=b(o.date)})}catch{B("Failed to fetch posts.",{type:"error"})}finally{i.value=!1}}),(d,o)=>i.value?(s(),$(L,{key:0})):(s(),r("div",N,[(s(!0),r(p,null,f(l.value,(e,v)=>(s(),r("div",{key:e._id},[a(c(u),{to:`/blog/${e._id}`,class:"inline-block cursor-pointer"},{default:g(()=>[t("h1",V,n(e.title),1)]),_:2},1032,["to"]),a(c(u),{to:`/blog/${e._id}`,class:"cursor-pointer hover:opacity-75"},{default:g(()=>[a(E,{src:e.images[0].url,alt:e.images[0].title,width:e.images[0].width,height:e.images[0].height},null,8,["src","alt","width","height"])]),_:2},1032,["to"]),t("div",{class:A(["flex flex-col items-start",{"order-lg-1":v%2===0}])},[t("div",C,[t("p",null,n(e.type),1),S(" · "),t("p",null,n(e.date),1)]),a(c(u),{to:`/blog/${e._id}`,class:"cursor-pointer"},{default:g(()=>[t("p",H,n(c(_)("blog.read_more")),1)]),_:2},1032,["to"])],2)]))),128))]))}};export{z as default};