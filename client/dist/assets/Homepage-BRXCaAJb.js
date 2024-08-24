import{u as F}from"./vue.f36acd1f-CUj0aTxp.js";import{r as x,u as O,a as $,o as S,b as j,c as u,d as _,F as v,e as y,f as L,w as A,g as e,h as c,i as C,n as D,t as l,j as a,k,l as E,v as q,m as z,S as P,_ as M}from"./index-ByZ9yowM.js";import{u as w,a as g,_ as h}from"./SmartImg-DnlfE9Em.js";import{_ as f}from"./StyledDivider-CraVU-sM.js";const R={class:"carousel carousel-center flex gap-3 overflow-x-scroll p-3 xl:container"},B={class:"relative"},H=["onClick"],I={class:"card-body"},N={class:"card-title"},V={class:"flex items-center gap-3"},Y=e("i",{class:"fa-solid fa-money-bill text-primary"},null,-1),G={class:"font-semibold"},J={class:"flex items-center gap-3"},U=e("i",{class:"fa-solid fa-heart text-alternate"},null,-1),K={class:"font-semibold"},Q="platillos-liked",W={__name:"-PlatilloSection",setup(b){const s=x([]),r=O(Q,[]),{locale:m}=$({useScope:"global"});S(async()=>{var t;try{const i=await w({url:"/api/categories",params:{match:{name:"Platillos"},include:{items:!0}},notifyOnFailure:!0});s.value=((t=i.data)==null?void 0:t[0].items)||[]}catch{g("Failed to fetch platillos.",{type:"error"})}});function n(t){return r.value.includes(t)}async function d(t){const i=s.value[t],p=n(i._id);p?r.value=r.value.filter(o=>o!==i._id):r.value.push(i._id),i.likes+=p?-1:1;try{const o=await w({url:`/api/items/${i._id}`,method:"PATCH",data:{likes:i.likes}});s.value[t]=o.data.data}catch{g("Failed to update platillo.",{type:"error"})}}return(t,i)=>{const p=j("RouterLink");return u(),_("div",R,[(u(!0),_(v,null,y(s.value,(o,T)=>(u(),L(p,{key:o._id,class:"card carousel-item card-compact rounded bg-base-100 shadow-md",to:`/menu/#${o._id}`},{default:A(()=>[e("figure",B,[c(h,{src:o.images[0].url,class:"max-w-[300px]",alt:o.images[0].title,width:o.images[0].width,height:o.images[0].height},null,8,["src","alt","width","height"]),e("button",{class:"btn absolute right-2 top-2",onClick:C(Ee=>d(T),["prevent"])},[e("i",{class:D(["fa-solid fa-heart",n(o._id)?"text-alternate":"text-coal"])},null,2)],8,H)]),e("div",I,[e("p",N,l(`${o.priority}. ${o.name[a(m)]}`),1),e("div",V,[Y,e("p",G,l("$"+o.base_price),1)]),e("div",J,[U,e("p",K,l(o.likes),1)])])]),_:2},1032,["to"]))),128))])}}},X={class:"mx-auto flex max-w-7xl gap-3 overflow-x-scroll rounded-t p-3"},Z={class:"rounded-b border-t p-5 text-center font-bold"},ee={__name:"-CategorySection",setup(b){const s=["Platillos","Burritos","Tacos","Tortas","Sopes","Quesadillas"],r=x([]);return S(async()=>{try{const m=await w({url:"/api/categories",notifyOnFailure:!0});if(m.success===!1)return;r.value=m.data.filter(n=>s.includes(n.name)),r.value.sort((n,d)=>n.priority-d.priority)}catch{g("Failed to fetch categories.",{type:"error"})}}),(m,n)=>{const d=j("RouterLink");return u(),_("div",X,[(u(!0),_(v,null,y(r.value,t=>(u(),L(d,{key:t._id,to:`/menu/#${t._id}`,class:"cursor-pointer rounded shadow transition-all hover:scale-[1.01]"},{default:A(()=>[c(h,{src:t.images[0].url,class:"max-w-xs rounded-t sm:max-w-sm",alt:t.images[0].title,width:t.images[0].width,height:t.images[0].height},null,8,["src","alt","width","height"]),e("p",Z,l(t.name),1)]),_:2},1032,["to"]))),128))])}}},te={class:"flex justify-center px-2"},se={class:"mex-gradient flex flex-col items-center justify-between gap-8 rounded p-10 px-3 text-center shadow-lg sm:flex-row md:max-w-3xl md:px-6 lg:px-10 xl:max-w-4xl"},oe={class:"text-center sm:w-1/2"},ae={class:"mb-4"},le={class:"mb-2 text-xl font-bold"},ne={class:"mb-4"},ie={class:"mb-2 text-xl font-bold"},re=e("p",null,"31345 Los Rios St, San Juan Capistrano, CA 92675",-1),ce={class:"mb-2 text-xl font-bold"},de=e("a",{href:"tel:9498060123",class:"cursor-pointer transition-all hover:font-semibold"}," (949) 806-0123 ",-1),ue=e("p",null,"elandariegomex@gmail.com",-1),me={class:"sm:w-1/2"},_e={class:"mb-4 text-2xl font-bold xl:text-3xl"},pe={class:"mb-6 xl:text-lg"},he=["placeholder"],ge={class:"btn btn-secondary join-item"},fe={__name:"-CallToAction",setup(b){const{t:s}=$({useScope:"global"}),r=x(""),m=x(null),n=k("startOverlay"),d=k("stopOverlay");async function t(){try{if(!r.value)throw Error("No email field provided.");n(),(await w({url:"/api/sendgrid/subscribe",method:"POST",data:{email:r.value}})).success===!0&&g("Successfully subscribed to El Andariego",{type:"success"})}catch{g("Error subscribing to El Andariego.",{type:"error"})}finally{m.value.reset(),d()}}return(i,p)=>(u(),_("div",te,[e("div",se,[e("div",oe,[e("div",ae,[e("h3",le,l(a(s)("cta.contact.open_hours")),1),e("p",null,l(a(s)("cta.contact.hours")),1)]),e("div",ne,[e("h3",ie,l(a(s)("cta.contact.location")),1),re]),e("div",null,[e("h3",ce,l(a(s)("cta.contact.contact")),1),de,ue])]),e("div",me,[e("h4",_e,l(a(s)("cta.hook")),1),e("p",pe,l(a(s)("cta.info")),1),e("form",{ref_key:"form",ref:m,class:"join",onSubmit:C(t,["prevent"])},[E(e("input",{"onUpdate:modelValue":p[0]||(p[0]=o=>r.value=o),type:"email",placeholder:a(s)("form.email"),class:"input join-item input-bordered w-full max-w-xs",required:""},null,8,he),[[q,r.value]]),e("button",ge,l(a(s)("form.sign_up")),1)],544)])])]))}},xe=[{image:"/andariego/home/testimonials/julie-perez.png",quote:"Excelente comida, linda gente y la mejor salsa verde!",name:"Julie Perez"},{image:"/andariego/home/testimonials/francisco-serrano.png",quote:"Aqui puedes disfrutar unos sabrosos tacos🌮 .de diferantes carnes.",name:"Francisco Serrano"},{image:"/andariego/home/testimonials/delfino-martinez.png",quote:"Muy rica la comida excelente atención de la jovencita que atiende 👍👍👍",name:"Delfino Martinez"},{image:"/andariego/home/testimonials/lorenzo-diaz.png",quote:"Food: 5, Service: 5, Atmosphere: 5",name:"Lorenzo Diaz"}],ve=["/andariego/home/gallery/gallery-1689472440679.jpg","/andariego/home/gallery/gallery-1689472440680.jpg","/andariego/home/gallery/gallery-1689560307316.jpg","/andariego/home/gallery/gallery-1689472440681.jpg","/andariego/home/gallery/gallery-1689472440682.jpg","/andariego/home/gallery/gallery-1689920206721.jpg"],ye={class:"pt-6 xl:px-10"},we={class:"grid grid-cols-1 items-center gap-2 lg:grid-cols-2"},be={class:"mb-2 px-4 pt-6 text-center"},$e={class:"flex flex-col items-center gap-2"},ke={class:"text-4xl font-bold sm:w-10/12 md:w-2/3 lg:w-11/12 lg:text-5xl xl:w-4/5"},Se={class:"my-2 font-semibold xl:text-lg"},je={class:"mb-8 w-auto sm:w-10/12 md:w-3/4 lg:w-11/12 xl:w-4/5 xl:text-lg"},Le={class:"btn btn-primary px-8 uppercase",href:"https://order.elandariegotruck.com/"},Ae={class:"mt-14 pb-4 pt-2 xl:px-10"},Ce={class:"flex flex-col justify-center lg:flex-row xl:gap-10"},Te={class:"my-3 grid grid-cols-1 justify-items-center gap-8 px-5 sm:grid-cols-2 lg:items-center"},Fe={class:"font-medium"},Oe={class:"text-sm text-primary"},De={class:"my-5 grid grid-cols-2 gap-2 rounded px-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"},Re={__name:"Homepage",setup(b){F({title:"El Andariego",meta:[{name:"description",content:"Authentic Mexican Food Truck"}]});const{t:s}=$({useScope:"global"});function r(){const n=new Date().getHours()*60+new Date().getMinutes(),d=15*60,t=23*60+30;return d<=n&&n<=t}const m=z(()=>{const n=new Date().getDay(),d=1,t=6;if(n===d)return s("hours.closed");const i=n===t?"Village":"Capistrano";return r()?s("hours.open",{location:i}):s("hours.opening",{location:i})});return(n,d)=>(u(),_("div",null,[e("div",ye,[e("div",we,[e("div",be,[e("div",$e,[e("h4",ke,l(a(s)("home.hook")),1),e("p",Se,l(m.value),1),e("p",je,l(a(s)("home.intro")),1)]),e("a",Le,l(a(s)("home.order_now")),1),c(P,{class:"my-7 flex justify-center gap-6 text-2xl"}),c(M,{class:"-ms-1 mb-10"})]),c(h,{src:"/andariego/home/hero.webp",alt:"hero",width:"1200",height:"1200",loading:"eager","is-transparent":""})])]),c(f,{name:a(s)("dividers.platillo")},null,8,["name"]),c(W),e("div",Ae,[c(f,{name:a(s)("dividers.testimonial"),class:"mt-8"},null,8,["name"]),e("div",Ce,[e("div",Te,[(u(!0),_(v,null,y(a(xe),t=>(u(),_("figure",{key:t,class:"flex w-full max-w-sm flex-col gap-3"},[c(h,{src:t.image,class:"max-w-[60px]",alt:t.name,"is-transparent":!0,width:"120",height:"120"},null,8,["src","alt"]),e("blockquote",Fe,l(t.quote),1),e("p",Oe,"- "+l(t.name),1)]))),128))]),e("div",De,[(u(!0),_(v,null,y(a(ve),t=>(u(),_("div",{key:t,class:"overflow-hidden"},[c(h,{class:"w-full max-w-[350px] rounded transition-all hover:scale-125",src:t,alt:"Gallery Image",width:"800",height:"800"},null,8,["src"])]))),128))])])]),c(f,{name:a(s)("dividers.categories")},null,8,["name"]),c(ee),c(f,{name:a(s)("dividers.cta")},null,8,["name"]),c(fe)]))}};export{Re as default};
