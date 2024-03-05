import{u as D}from"./vue.f36acd1f-Q4jw9np4.js";import{r as x,u as E,a as $,o as S,b as j,c as u,d as _,F as v,e as b,f as A,w as L,g as e,h as d,i as C,n as O,t as i,j as o,k,l as q,v as z,m as P,_ as M,p as F}from"./index-DD8qjlZ5.js";import{u as w,a as h,_ as g}from"./SmartImg-CaFCZVlB.js";import{_ as f}from"./StyledDivider-_3lvR1W9.js";const R={class:"carousel carousel-center flex gap-3 overflow-x-scroll p-3 xl:container"},B={class:"relative"},I=["onClick"],N={class:"card-body"},V={class:"card-title"},Y={class:"flex items-center gap-3"},H=e("i",{class:"fa-solid fa-money-bill text-primary"},null,-1),J={class:"font-semibold"},G={class:"flex items-center gap-3"},U=e("i",{class:"fa-solid fa-heart text-alternate"},null,-1),K={class:"font-semibold"},Q="platillos-liked",W={__name:"-PlatilloSection",setup(y){const s=x([]),n=E(Q,[]),{locale:m}=$({useScope:"global"});S(async()=>{try{const t=await w({url:"/api/categories/get/Platillos",params:{include_items:!0}});s.value=t.data.data.items}catch(t){h(t.response.data.message,{type:"error"})}});function l(t){return n.value.includes(t)}async function r(t){const c=s.value[t],p=l(c._id);p?n.value=n.value.filter(a=>a!==c._id):n.value.push(c._id),c.likes+=p?-1:1;try{const a=await w({url:"/api/items/update-likes",method:"POST",data:{_id:c._id,likes:c.likes}});s.value[t]=a.data.data}catch{h("Failed to update platillo.",{type:"error"})}}return(t,c)=>{const p=j("RouterLink");return u(),_("div",R,[(u(!0),_(v,null,b(s.value,(a,T)=>(u(),A(p,{key:a._id,class:"card carousel-item card-compact rounded bg-base-100 shadow-md",to:`/menu/#${a._id}`},{default:L(()=>[e("figure",B,[d(g,{src:a.images[0].url,class:"max-w-[300px]",alt:a.images[0].title,width:a.images[0].width,height:a.images[0].height},null,8,["src","alt","width","height"]),e("button",{class:"btn absolute right-2 top-2",onClick:C(qe=>r(T),["prevent"])},[e("i",{class:O(["fa-solid fa-heart",l(a._id)?"text-alternate":"text-coal"])},null,2)],8,I)]),e("div",N,[e("p",V,i(`${a.priority}. ${a.name[o(m)]}`),1),e("div",Y,[H,e("p",J,i("$"+a.base_price),1)]),e("div",G,[U,e("p",K,i(a.likes),1)])])]),_:2},1032,["to"]))),128))])}}},X={class:"mx-auto flex max-w-7xl gap-3 overflow-x-scroll rounded-t p-3"},Z={class:"rounded-b border-t p-5 text-center font-bold"},ee={__name:"-CategorySection",setup(y){const s=["Platillos","Burritos","Tacos","Tortas","Sopes","Quesadillas"],n=x([]);return S(async()=>{try{const m=await w({url:"/api/categories/list"});n.value=m.data.data.filter(l=>s.includes(l.name)),n.value.sort((l,r)=>l.priority-r.priority)}catch{h("Failed to fetch categories",{type:"error"})}}),(m,l)=>{const r=j("RouterLink");return u(),_("div",X,[(u(!0),_(v,null,b(n.value,t=>(u(),A(r,{key:t._id,to:`/menu/#${t._id}`,class:"cursor-pointer rounded shadow transition-all hover:scale-[1.01]"},{default:L(()=>[d(g,{src:t.images[0].url,class:"max-w-xs rounded-t sm:max-w-sm",alt:t.images[0].title,width:t.images[0].width,height:t.images[0].height},null,8,["src","alt","width","height"]),e("p",Z,i(t.name),1)]),_:2},1032,["to"]))),128))])}}},te={class:"flex justify-center px-2"},se={class:"mex-gradient flex flex-col items-center justify-between gap-8 rounded p-10 px-3 text-center shadow-lg sm:flex-row md:max-w-3xl md:px-6 lg:px-10 xl:max-w-4xl"},ae={class:"text-center sm:w-1/2"},oe={class:"mb-4"},le={class:"mb-2 text-xl font-bold"},ie={class:"mb-4"},ne={class:"mb-2 text-xl font-bold"},re=e("p",null,"31345 Los Rios St, San Juan Capistrano, CA 92675",-1),ce={class:"mb-2 text-xl font-bold"},de=e("a",{href:"tel:9498060123",class:"cursor-pointer transition-all hover:font-semibold"}," (949) 806-0123 ",-1),ue=e("p",null,"elandariegomex@gmail.com",-1),me={class:"sm:w-1/2"},_e={class:"mb-4 text-2xl font-bold xl:text-3xl"},pe={class:"mb-6 xl:text-lg"},ge=["placeholder"],he={class:"btn btn-secondary join-item"},fe={__name:"-CallToAction",setup(y){const{t:s}=$({useScope:"global"}),n=x(""),m=x(null),l=k("startOverlay"),r=k("stopOverlay");async function t(){try{if(!n.value)throw Error("No email field provided.");l(),(await w({url:"/api/sendgrid/subscribe",method:"POST",data:{email:n.value}})).data.success===!0&&h("Successfully subscribed to El Andariego",{type:"success"})}catch{h("Error subscribing to El Andariego.",{type:"error"})}finally{m.value.reset(),r()}}return(c,p)=>(u(),_("div",te,[e("div",se,[e("div",ae,[e("div",oe,[e("h3",le,i(o(s)("cta.contact.open_hours")),1),e("p",null,i(o(s)("cta.contact.hours")),1)]),e("div",ie,[e("h3",ne,i(o(s)("cta.contact.location")),1),re]),e("div",null,[e("h3",ce,i(o(s)("cta.contact.contact")),1),de,ue])]),e("div",me,[e("h4",_e,i(o(s)("cta.hook")),1),e("p",pe,i(o(s)("cta.info")),1),e("form",{ref_key:"form",ref:m,class:"join",onSubmit:C(t,["prevent"])},[q(e("input",{"onUpdate:modelValue":p[0]||(p[0]=a=>n.value=a),type:"email",placeholder:o(s)("form.email"),class:"input join-item input-bordered w-full max-w-xs",required:""},null,8,ge),[[z,n.value]]),e("button",he,i(o(s)("form.sign_up")),1)],544)])])]))}},xe=[{image:"/andariego/home/testimonials/julie-perez.png",quote:"Excelente comida, linda gente y la mejor salsa verde!",name:"Julie Perez"},{image:"/andariego/home/testimonials/francisco-serrano.png",quote:"Aqui puedes disfrutar unos sabrosos tacos🌮 .de diferantes carnes.",name:"Francisco Serrano"},{image:"/andariego/home/testimonials/delfino-martinez.png",quote:"Muy rica la comida excelente atención de la jovencita que atiende 👍👍👍",name:"Delfino Martinez"},{image:"/andariego/home/testimonials/lorenzo-diaz.png",quote:"Food: 5, Service: 5, Atmosphere: 5",name:"Lorenzo Diaz"}],ve=["/andariego/home/gallery/gallery-1689472440679.jpg","/andariego/home/gallery/gallery-1689472440680.jpg","/andariego/home/gallery/gallery-1689560307316.jpg","/andariego/home/gallery/gallery-1689472440681.jpg","/andariego/home/gallery/gallery-1689472440682.jpg","/andariego/home/gallery/gallery-1689920206721.jpg"],be={class:"pt-6 xl:px-10"},we={class:"grid grid-cols-1 items-center gap-2 lg:grid-cols-2"},ye={class:"mb-2 px-4 pt-6 text-center"},$e={class:"flex flex-col items-center gap-2"},ke={class:"text-4xl font-bold sm:w-10/12 md:w-2/3 lg:w-11/12 lg:text-5xl xl:w-4/5"},Se={class:"my-2 font-semibold xl:text-lg"},je={class:"mb-8 w-auto sm:w-10/12 md:w-3/4 lg:w-11/12 xl:w-4/5 xl:text-lg"},Ae=F('<div class="my-7 flex justify-center gap-6 text-2xl"><a href="https://www.facebook.com/profile.php?id=100082710796984" target="_blank"><i class="fa-brands fa-facebook"></i></a><a href="https://instagram.com/el_andariegotruck" target="_blank"><i class="fa-brands fa-instagram"></i></a><a href="https://g.page/r/CY53oo_JlDb8EAI/review" target="_blank"><i class="fa-brands fa-google fa-sm"></i></a></div>',1),Le={class:"mex-gradient mt-14 pb-4 pt-2 xl:px-10"},Ce={class:"flex flex-col justify-center lg:flex-row xl:gap-10"},Te={class:"my-3 grid grid-cols-1 justify-items-center gap-8 px-5 sm:grid-cols-2 lg:items-center"},De={class:"font-medium"},Ee={class:"text-sm text-primary"},Oe={class:"my-5 grid grid-cols-2 gap-2 rounded px-3 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"},Re={__name:"Homepage",setup(y){D({title:"El Andariego",meta:[{name:"description",content:"Authentic Mexican Food Truck"}]});const{t:s}=$({useScope:"global"});function n(){const l=new Date().getHours()*60+new Date().getMinutes(),r=15*60,t=23*60+30;return r<=l&&l<=t}const m=P(()=>{const l=new Date().getDay(),r=1,t=6;if(l===r)return s("hours.closed");const c=l===t?"Village":"Capistrano";return n()?s("hours.open",{location:c}):s("hours.opening",{location:c})});return(l,r)=>(u(),_("div",null,[e("div",be,[e("div",we,[e("div",ye,[e("div",$e,[e("h4",ke,i(o(s)("home.hook")),1),e("p",Se,i(m.value),1),e("p",je,i(o(s)("home.intro")),1)]),e("button",{class:"btn btn-primary px-8",onClick:r[0]||(r[0]=t=>l.$router.push("/menu"))},i(o(s)("home.view_menu")),1),Ae,d(M,{class:"-ms-1 mb-10"})]),d(g,{src:"/andariego/home/hero.webp",alt:"hero",width:"1200",height:"1200",loading:"eager","is-transparent":""})])]),d(f,{name:o(s)("dividers.platillo")},null,8,["name"]),d(W),e("div",Le,[d(f,{name:o(s)("dividers.testimonial"),class:"mt-8"},null,8,["name"]),e("div",Ce,[e("div",Te,[(u(!0),_(v,null,b(o(xe),t=>(u(),_("figure",{key:t,class:"flex w-full max-w-sm flex-col gap-3"},[d(g,{src:t.image,class:"max-w-[60px]",alt:t.name,"is-transparent":!0,width:"120",height:"120"},null,8,["src","alt"]),e("blockquote",De,i(t.quote),1),e("p",Ee,"- "+i(t.name),1)]))),128))]),e("div",Oe,[(u(!0),_(v,null,b(o(ve),t=>(u(),_("div",{key:t,class:"overflow-hidden"},[d(g,{class:"w-full max-w-[350px] rounded transition-all hover:scale-125",src:t,alt:"Gallery Image",width:"800",height:"800"},null,8,["src"])]))),128))])])]),d(f,{name:o(s)("dividers.categories")},null,8,["name"]),d(ee),d(f,{name:o(s)("dividers.cta")},null,8,["name"]),d(fe)]))}};export{Re as default};
