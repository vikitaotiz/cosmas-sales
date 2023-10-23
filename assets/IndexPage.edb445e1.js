import{bA as I,i as y,bK as u,c as h,h as P,bB as q,bM as V,bY as S,g as z,c1 as B,r as v,ca as F,j as $,aJ as k,a4 as L,bb as p,a7 as n,d,bD as M,ad as b,Q as E,bE as K,aM as D,aK as H}from"./index.c2759519.js";import{b as x,Q as N}from"./helpers.e1b33f8c.js";import{Q}from"./QInput.a39034c7.js";import{u as U}from"./auth-store.6b6b7719.js";import{a as j}from"./use-quasar.f495e260.js";import"./use-key-composition.7c8f5cd3.js";var A=I({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:r}){const{proxy:{$q:l}}=z(),a=y(V,u);if(a===u)return console.error("QPage needs to be a deep child of QLayout"),u;if(y(S,u)===u)return console.error("QPage needs to be child of QPageContainer"),u;const m=h(()=>{const i=(a.header.space===!0?a.header.size:0)+(a.footer.space===!0?a.footer.size:0);if(typeof t.styleFn=="function"){const c=a.isContainer.value===!0?a.containerHeight.value:l.screen.height;return t.styleFn(i,c)}return{minHeight:a.isContainer.value===!0?a.containerHeight.value-i+"px":l.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":l.screen.height-i+"px"}}),o=h(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>P("main",{class:o.value,style:m.value},q(r.default))}});const f=t=>(D("data-v-75d9e4fd"),t=t(),H(),t),R={class:"q-gutter-y-md desktop_size mobile_size"},T={style:{"font-weight":"800","font-size":"larger",color:"#017951"}},J=f(()=>n("br",null,null,-1)),Y=f(()=>n("hr",null,null,-1)),G={style:{color:"red"}},O=f(()=>n("div",{class:"text-center"},[n("small",{style:{color:"#017951"}},[n("i",null,"For any queries, please contact your admin.")])],-1)),W={__name:"IndexPage",setup(t){const r=v(!1),l=v(""),a=j(),_=F(),m=U(),o=$({name:"",email:"",password:""}),i=async()=>{const s={email:o.email.trim(),password:o.password.trim()};if(s.email&&s.password){r.value=!0;const e=await m.login(s);e.status==="success"?C(e.message,"green"):(r.value=!1,w(e.message))}else r.value=!1,c("Email and password are required","red")},c=(s,e)=>{a.notify({message:s,color:e,position:"top"})},w=s=>{l.value=s,c(s,"red"),setTimeout(()=>l.value="",1e4)},C=(s,e)=>{_.push("/dashboard"),r.value=!1,c(s,e)};return(s,e)=>(k(),L(A,{class:"flex flex-center"},{default:p(()=>[n("div",R,[d(N,{flat:"",style:{"border-radius":"10px"}},{default:p(()=>[d(x,{class:"text-center"},{default:p(()=>[n("p",T,[d(M,{name:"grain",style:{"font-size":"30px"}}),b(),J,b("Login to the System ")]),Y]),_:1}),d(x,null,{default:p(()=>[d(Q,{rounded:"",dense:"",outlined:"",type:"email",label:"Email",modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=g=>o.email=g),class:"q-mb-sm"},null,8,["modelValue"]),d(Q,{rounded:"",dense:"",outlined:"",type:"password",label:"Password",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=g=>o.password=g),class:"q-mb-sm"},null,8,["modelValue"]),n("small",G,E(l.value),1),d(K,{icon:"person",dense:"",label:"Login",dark:"",color:"primary",onClick:i,class:"full-width",loading:r.value,rounded:"",unelevated:""},null,8,["loading"]),O]),_:1})]),_:1})])]),_:1}))}};var oe=B(W,[["__scopeId","data-v-75d9e4fd"]]);export{oe as default};
