import{x as B,q as D,_ as F,r as _,l as g,a as I,o as $,b as h,d as a,e as o,k as t,g as x,i as y,h as s,t as i,p as O,y as V,F as b,f as v,z as w,A as f,B as E,C as N}from"./index-Dpuw_K1n.js";import{u as z}from"./vue.f36acd1f-B-3AYIE_.js";import{u as P,_ as k}from"./SmartImg-DJtYz4X8.js";import{_ as M}from"./StyledDivider-D_p9TxT3.js";function U(){const{width:l}=B();return{isMobileDimensions:D(()=>l.value<600)}}const j=l=>(E("data-v-0ea5e21b"),l=l(),N(),l),q={class:"lg:container"},H={key:2,class:"mb-4 px-1 lg:px-2"},L={class:"mb-3 flex items-center justify-between gap-3"},T=["value"],W={key:0,class:"grid items-stretch gap-6 p-2 md:grid-cols-2 md:p-3 xl:grid-cols-3"},G={class:"mb-3 text-sm"},J={class:"flex justify-between"},K={class:"mb-1 font-semibold uppercase tracking-wide"},Q={class:"flex flex-wrap font-sans font-semibold italic tracking-wide"},R=j(()=>s("hr",{class:"absolute bottom-0 left-0 right-0 border-gray-400"},null,-1)),X=["id"],Y={class:"mx-auto grid grid-cols-1 items-start gap-10 rounded border-[10px] border-double border-primary-100 bg-primary px-3 py-6 text-primary-100 lg:container md:grid-cols-2 md:px-8 xl:px-32"},Z=["id"],ee={class:"flex justify-between"},se={class:"mb-2 w-fit rounded bg-gradient-to-r from-alternate from-70% pe-9 ps-2 font-semibold uppercase tracking-wide"},te={class:"mb-2 flex flex-wrap whitespace-pre-wrap ps-1 font-sans font-semibold italic tracking-wide"},ae=j(()=>s("div",{class:"mt-5"},[s("hr",{class:"platillo-divider border-[1px] border-coal"})],-1)),oe={__name:"Menu",setup(l){z({title:"Menu | El Andariego",meta:[{name:"description",content:"El Andariego Menu"}]});const d=_([]),u=_(null),S=g("startOverlay"),C=g("stopOverlay"),c=_(null),{locale:r,t:p}=I({useScope:"global"}),{isMobileDimensions:A}=U();return $(async()=>{try{S();const m=await P({url:"/api/categories/list",params:{include_items:!0}});u.value=m.data.data.filter(n=>n.name==="Platillos")[0],d.value=m.data.data.filter(n=>n.name!=="Platillos"),c.value=d.value[0]}catch{h("Failed to fetch items.",{type:"error"})}finally{C()}}),(m,n)=>(a(),o("div",q,[t(A)?(a(),x(k,{key:0,class:"max-h-60 w-full object-none",src:"/andariego/menu/tacos-mobile-1708239474899.jpg",width:"900",height:"900",alt:"tacos"})):(a(),x(k,{key:1,class:"max-h-96 w-full object-none",src:"/andariego/menu/tacos-desktop-1708287961851.jpg",width:"1400",height:"500",alt:"tacos"})),d.value?(a(),o("div",H,[y(M,{name:t(p)("dividers.menu"),class:"mt-8"},null,8,["name"]),s("div",L,[s("button",{class:"btn btn-outline btn-primary btn-sm px-8 shadow md:btn-md md:btn-wide",onClick:n[0]||(n[0]=e=>t(h)("Coming soon."))},i(t(p)("menu.full_menu")),1),O(s("select",{"onUpdate:modelValue":n[1]||(n[1]=e=>c.value=e),class:"select select-primary select-sm w-full max-w-xs shadow md:select-md"},[(a(!0),o(b,null,v(d.value,e=>(a(),o("option",{key:e._id,value:e},i(e.name),9,T))),128))],512),[[V,c.value]])]),c.value?(a(),o("div",W,[(a(!0),o(b,null,v(c.value.items,e=>(a(),o("div",{key:e._id,class:"relative"},[s("div",G,[s("div",J,[s("p",K,i(e.name[t(r)]),1),s("p",null,"$"+i(e.base_price.toFixed(2)),1)]),s("p",Q,i(t(w)(e.content[t(r)],t(r))),1)]),R]))),128))])):f("",!0)])):f("",!0),u.value?(a(),o("div",{key:3,id:u.value._id,class:"mb-2 lg:px-2"},[y(M,{name:t(p)("dividers.platillo")},null,8,["name"]),s("div",Y,[(a(!0),o(b,null,v(u.value.items,e=>(a(),o("div",{id:e._id,key:e._id,class:"relative"},[s("div",ee,[s("p",se,i(e.priority)+". "+i(e.name[t(r)]),1),s("p",null,"$"+i(e.base_price.toFixed(2)),1)]),s("p",te,i(t(w)(e.content[t(r)],t(r))),1),ae],8,Z))),128))])],8,X)):f("",!0)]))}},de=F(oe,[["__scopeId","data-v-0ea5e21b"]]);export{de as default};