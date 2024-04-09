import{p as F,m as I,q as $,r as _,k as g,a as A,o as B,c as a,d as o,j as t,f as h,h as x,g as s,t as i,l as O,s as V,F as b,e as f,x as v,y as E,z as N}from"./index-Xi3OY0d8.js";import{u as z}from"./vue.f36acd1f-BQstL5YV.js";import{p as y}from"./utility-D-uUhmTE.js";import{u as P,a as w,_ as k}from"./SmartImg-2PrUX8-w.js";import{_ as j}from"./StyledDivider-45HjdYeI.js";function U(){const{width:l}=F();return{isMobileDimensions:I(()=>l.value<600)}}const M=l=>(E("data-v-0ea5e21b"),l=l(),N(),l),q={class:"lg:container"},H={key:2,class:"mb-4 px-1 lg:px-2"},L={class:"mb-3 flex items-center justify-between gap-3"},T=["value"],W={key:0,class:"grid items-stretch gap-6 p-2 md:grid-cols-2 md:p-3 xl:grid-cols-3"},G={class:"mb-3 text-sm"},J={class:"flex justify-between"},K={class:"mb-1 font-semibold uppercase tracking-wide"},Q={class:"flex flex-wrap font-sans font-semibold italic tracking-wide"},R=M(()=>s("hr",{class:"absolute bottom-0 left-0 right-0 border-gray-400"},null,-1)),X=["id"],Y={class:"mx-auto grid grid-cols-1 items-start gap-10 rounded border-[10px] border-double border-primary-100 bg-primary px-3 py-6 text-primary-100 lg:container md:grid-cols-2 md:px-8 xl:px-32"},Z=["id"],ee={class:"flex justify-between"},se={class:"mb-2 w-fit rounded bg-gradient-to-r from-alternate from-70% pe-9 ps-2 font-semibold uppercase tracking-wide"},te={class:"mb-2 flex flex-wrap whitespace-pre-wrap ps-1 font-sans font-semibold italic tracking-wide"},ae=M(()=>s("div",{class:"mt-5"},[s("hr",{class:"platillo-divider border-[1px] border-coal"})],-1)),oe={__name:"Menu",setup(l){z({title:"Menu | El Andariego",meta:[{name:"description",content:"El Andariego Menu"}]});const d=_([]),m=_(null),S=g("startOverlay"),C=g("stopOverlay"),c=_(null),{locale:r,t:p}=A({useScope:"global"}),{isMobileDimensions:D}=U();return B(async()=>{try{S();const u=await P({url:"/api/categories/list",params:{include_items:!0}});m.value=u.data.data.filter(n=>n.name==="Platillos")[0],d.value=u.data.data.filter(n=>n.name!=="Platillos"),c.value=d.value[0]}catch{w("Failed to fetch items.",{type:"error"})}finally{C()}}),(u,n)=>(a(),o("div",q,[t(D)?(a(),h(k,{key:0,class:"max-h-60 w-full object-none",src:"/andariego/menu/tacos-mobile-1708239474899.jpg",width:"900",height:"900",alt:"tacos"})):(a(),h(k,{key:1,class:"max-h-96 w-full object-none",src:"/andariego/menu/tacos-desktop-1708287961851.jpg",width:"1400",height:"500",alt:"tacos"})),d.value?(a(),o("div",H,[x(j,{name:t(p)("dividers.menu"),class:"mt-8"},null,8,["name"]),s("div",L,[s("button",{class:"btn btn-outline btn-primary btn-sm px-8 shadow md:btn-md md:btn-wide",onClick:n[0]||(n[0]=e=>t(w)("Coming soon."))},i(t(p)("menu.full_menu")),1),O(s("select",{"onUpdate:modelValue":n[1]||(n[1]=e=>c.value=e),class:"select select-primary select-sm w-full max-w-xs shadow md:select-md"},[(a(!0),o(b,null,f(d.value,e=>(a(),o("option",{key:e._id,value:e},i(e.name),9,T))),128))],512),[[V,c.value]])]),c.value?(a(),o("div",W,[(a(!0),o(b,null,f(c.value.items,e=>(a(),o("div",{key:e._id,class:"relative"},[s("div",G,[s("div",J,[s("p",K,i(e.name[t(r)]),1),s("p",null,"$"+i(e.base_price.toFixed(2)),1)]),s("p",Q,i(t(y)(e.content[t(r)],t(r))),1)]),R]))),128))])):v("",!0)])):v("",!0),m.value?(a(),o("div",{key:3,id:m.value._id,class:"mb-2 lg:px-2"},[x(j,{name:t(p)("dividers.platillo")},null,8,["name"]),s("div",Y,[(a(!0),o(b,null,f(m.value.items,e=>(a(),o("div",{id:e._id,key:e._id,class:"relative"},[s("div",ee,[s("p",se,i(e.priority)+". "+i(e.name[t(r)]),1),s("p",null,"$"+i(e.base_price.toFixed(2)),1)]),s("p",te,i(t(y)(e.content[t(r)],t(r))),1),ae],8,Z))),128))])],8,X)):v("",!0)]))}},ce=$(oe,[["__scopeId","data-v-0ea5e21b"]]);export{ce as default};
