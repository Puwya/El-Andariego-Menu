import{u as B}from"./vue.f36acd1f-BCSpyU6I.js";import{d as t,g as F,x as M,_ as j,r as h,l as f,a as A,o as O,b as P,e as a,i as u,h as e,t as o,k as n,F as m,f as b,y as x,z as v,A as $,B as C}from"./index-DZFMyvhS.js";import{u as E,_ as N}from"./SmartImg-CqVYeFlD.js";const y={__name:"SmartSvg",props:{name:{type:String,required:!0}},setup(r){return(_,i)=>(t(),F(M(r.name)))}},g=r=>($("data-v-8b7911e8"),r=r(),C(),r),V={class:"mb-4 px-1 lg:container lg:px-2"},D={class:"badge my-2 flex !h-8 items-center gap-2 rounded border-coal-300 px-1"},q={class:"font-bold uppercase"},z={class:"gap-x-2 lg:grid lg:grid-cols-2 xl:grid-cols-3"},H=["id"],L=g(()=>e("input",{type:"checkbox"},null,-1)),T={class:"collapse-title font-bold"},G={class:"collapse-content bg-primary-50 px-0 !pb-0"},J={class:"mb-2 px-3 pt-3 text-sm"},K={class:"flex justify-between"},Q={class:"mb-1 font-semibold uppercase tracking-wide"},R={class:"flex flex-wrap font-sans font-semibold tracking-wide"},U={key:0,class:"border-gray-400"},W=["id"],X={class:"badge my-2 ms-1 flex !h-8 items-center gap-2 rounded border-coal-300 px-1"},Y=g(()=>e("h3",{class:"font-bold uppercase"},"Platillos",-1)),Z={class:"mx-auto grid grid-cols-1 items-start gap-10 rounded border-[10px] border-double border-primary-100 bg-primary px-3 py-6 text-primary-100 lg:container md:grid-cols-2 md:px-8 xl:px-32"},ee=["id"],se={class:"flex justify-between"},te={class:"mb-2 w-fit rounded bg-gradient-to-r from-alternate from-70% pe-9 ps-2 font-semibold uppercase tracking-wide"},ae={class:"mb-2 flex flex-wrap whitespace-pre-wrap ps-1 font-sans font-semibold tracking-wide"},oe=g(()=>e("div",{class:"mt-5"},[e("hr",{class:"platillo-divider border-[1px] border-coal"})],-1)),ne={__name:"Menu",setup(r){B({title:"Menu | El Andariego",meta:[{name:"description",content:"El Andariego Menu"}]});const _=h([]),i=h(null),w=f("startOverlay"),k=f("stopOverlay"),{locale:d,t:S}=A({useScope:"global"});return O(async()=>{try{w();const l=await E({url:"/api/categories/list",params:{include_items:!0}});i.value=l.data.data.filter(c=>c.name==="Platillos")[0],_.value=l.data.data.filter(c=>c.name!=="Platillos")}catch{P("Failed to fetch items.",{type:"error"})}finally{k()}}),(l,c)=>(t(),a("div",null,[u(N,{src:"/andariego/menu/tacos-asada-header.jpg",class:"mb-2 max-h-[600px] object-none",width:"5858",height:"3905",alt:"Menu Banner"}),e("div",V,[e("div",D,[u(y,{class:"w-8 text-lg",name:"FoodIcon"}),e("h3",q,o(n(S)("link.menu")),1)]),e("div",z,[(t(!0),a(m,null,b(_.value,s=>(t(),a("div",{id:s._id,key:s._id,class:"collapse collapse-arrow h-fit rounded-none border-b border-gray-400 bg-coal-100 first:rounded-t last:rounded-b lg:first:rounded-none lg:last:rounded-none"},[L,e("div",T,o(s.name),1),e("div",G,[(t(!0),a(m,null,b(s.items,(p,I)=>(t(),a("div",{key:p._id},[e("div",J,[e("div",K,[e("p",Q,o(p.name[n(d)]),1),e("p",null,"$"+o(p.base_price.toFixed(2)),1)]),e("p",R,o(n(x)(p.content[n(d)],n(d))),1)]),I+1<s.items.length?(t(),a("hr",U)):v("",!0)]))),128))])],8,H))),128))])]),i.value?(t(),a("div",{key:0,id:i.value._id,class:"mb-2 lg:container lg:px-2"},[e("div",X,[u(y,{class:"w-8 text-lg",name:"PlateIcon"}),Y]),e("div",Z,[(t(!0),a(m,null,b(i.value.items,s=>(t(),a("div",{id:s._id,key:s._id,class:"relative"},[e("div",se,[e("p",te,o(s.priority)+". "+o(s.name[n(d)]),1),e("p",null,"$"+o(s.base_price.toFixed(2)),1)]),e("p",ae,o(n(x)(s.content[n(d)],n(d))),1),oe],8,ee))),128))])],8,W)):v("",!0)]))}},le=j(ne,[["__scopeId","data-v-8b7911e8"]]);export{le as default};
