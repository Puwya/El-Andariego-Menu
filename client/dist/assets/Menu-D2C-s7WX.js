import{p as D,m as O,q as S,r as p,k as g,a as $,o as B,c as o,d as i,j as t,f as x,h,g as s,t as n,l as V,s as A,F as _,e as f,x as b}from"./index-AURFDRId.js";import{u as E}from"./vue.fed13688-YVHAusGD.js";import{p as y}from"./utility-D-uUhmTE.js";import{u as N,a as w,_ as k}from"./SmartImg-D3-lD-jZ.js";import{_ as j}from"./StyledDivider-Eb_tA8Zg.js";function I(){const{width:v}=D();return{isMobileDimensions:O(()=>v.value<600)}}const P={class:"lg:container"},U={key:2,class:"mb-4 px-1 lg:px-2"},q={class:"mb-3 flex items-center justify-between gap-3"},z=["value"],H={key:0,class:"grid items-stretch gap-6 p-2 md:grid-cols-2 md:p-3 xl:grid-cols-3"},L={class:"mb-3 text-sm"},T={class:"flex justify-between"},W={class:"mb-1 font-semibold uppercase tracking-wide"},G={class:"flex flex-wrap font-sans font-semibold italic tracking-wide"},J=["id"],K={class:"mx-auto grid grid-cols-1 items-start gap-10 rounded border-[10px] border-double border-primary-100 bg-primary px-3 py-6 text-primary-100 lg:container md:grid-cols-2 md:px-8 xl:px-32"},Q=["id"],R={class:"flex justify-between"},X={class:"mb-2 w-fit rounded bg-gradient-to-r from-alternate from-70% pe-9 ps-2 font-semibold uppercase tracking-wide"},Y={class:"mb-2 flex flex-wrap whitespace-pre-wrap ps-1 font-sans font-semibold italic tracking-wide"},Z={__name:"Menu",setup(v){E({title:"Menu | El Andariego",meta:[{name:"description",content:"El Andariego Menu"}]});const r=p([]),c=p(null),M=g("startOverlay"),F=g("stopOverlay"),d=p(null),{locale:l,t:u}=$({useScope:"global"}),{isMobileDimensions:C}=I();return B(async()=>{try{M();const m=await N({url:"/api/categories",params:{include:{items:!0}},notifyOnFailure:!0});c.value=m.data.filter(a=>a.name==="Platillos")[0],r.value=m.data.filter(a=>a.name!=="Platillos"),d.value=r.value[0]}catch{w("Failed to fetch items.",{type:"error"})}finally{F()}}),(m,a)=>(o(),i("div",P,[t(C)?(o(),x(k,{key:0,class:"max-h-60 w-full object-none",src:"/andariego/menu/tacos-mobile-1708239474899.jpg",width:"900",height:"900",alt:"tacos"})):(o(),x(k,{key:1,class:"max-h-96 w-full object-none",src:"/andariego/menu/tacos-desktop-1708287961851.jpg",width:"1400",height:"500",alt:"tacos"})),r.value?(o(),i("div",U,[h(j,{name:t(u)("dividers.menu"),class:"mt-8"},null,8,["name"]),s("div",q,[s("button",{class:"btn btn-outline btn-primary btn-sm px-8 shadow md:btn-md md:btn-wide",onClick:a[0]||(a[0]=e=>t(w)("Coming soon."))},n(t(u)("menu.full_menu")),1),V(s("select",{"onUpdate:modelValue":a[1]||(a[1]=e=>d.value=e),class:"select select-primary select-sm w-full max-w-xs shadow md:select-md"},[(o(!0),i(_,null,f(r.value,e=>(o(),i("option",{key:e._id,value:e},n(e.name),9,z))),128))],512),[[A,d.value]])]),d.value?(o(),i("div",H,[(o(!0),i(_,null,f(d.value.items,e=>(o(),i("div",{key:e._id,class:"relative"},[s("div",L,[s("div",T,[s("p",W,n(e.name[t(l)]),1),s("p",null,"$"+n(e.base_price.toFixed(2)),1)]),s("p",G,n(t(y)(e.content[t(l)],t(l))),1)]),a[2]||(a[2]=s("hr",{class:"absolute bottom-0 left-0 right-0 border-gray-400"},null,-1))]))),128))])):b("",!0)])):b("",!0),c.value?(o(),i("div",{key:3,id:c.value._id,class:"mb-2 lg:px-2"},[h(j,{name:t(u)("dividers.platillo")},null,8,["name"]),s("div",K,[(o(!0),i(_,null,f(c.value.items,e=>(o(),i("div",{id:e._id,key:e._id,class:"relative"},[s("div",R,[s("p",X,n(e.priority)+". "+n(e.name[t(l)]),1),s("p",null,"$"+n(e.base_price.toFixed(2)),1)]),s("p",Y,n(t(y)(e.content[t(l)],t(l))),1),a[3]||(a[3]=s("div",{class:"mt-5"},[s("hr",{class:"platillo-divider border-[1px] border-coal"})],-1))],8,Q))),128))])],8,J)):b("",!0)]))}},ie=S(Z,[["__scopeId","data-v-01f18f81"]]);export{ie as default};
