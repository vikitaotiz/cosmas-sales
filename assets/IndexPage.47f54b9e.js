import{r as u,c5 as h,j as v,aI as Q,a3 as x,bb as r,a6 as l,d as a,bD as V,ac as m,P as q,bE as P}from"./index.d831531d.js";import{Q as c,a as k}from"./QCard.45fd469e.js";import{Q as p}from"./QInput.a5c148f6.js";import{Q as B}from"./QPage.e3f8e88c.js";import{u as C}from"./auth-store.409218a2.js";import{a as E}from"./use-quasar.218421a6.js";import"./use-dark.0f9b141a.js";import"./helpers.a08a01a1.js";const I={class:"q-gutter-y-md",style:{width:"60%"}},L={style:{"font-weight":"bolder","font-size":"larger"}},S=l("br",null,null,-1),D=l("hr",null,null,-1),M={style:{color:"red"}},H={__name:"IndexPage",setup(N){u("login");const t=u(!1),n=u(""),f=E(),g=h(),_=C(),o=v({name:"",email:"",password:""}),w=async()=>{const s={email:o.email.trim(),password:o.password.trim()};if(s.email&&s.password){t.value=!0;const e=await _.login(s);e.status==="success"?b(e.message,"green"):(t.value=!1,y(e.message))}else t.value=!1,d("Email and password are required","red")},d=(s,e)=>{f.notify({message:s,color:e,position:"top"})},y=s=>{n.value=s,d(s,"red"),setTimeout(()=>n.value="",1e4)},b=(s,e)=>{t.value=!1,d(s,e),g.push("/dashboard")};return(s,e)=>(Q(),x(B,{class:"flex flex-center"},{default:r(()=>[l("div",I,[a(k,{bordered:""},{default:r(()=>[a(c,{class:"text-center"},{default:r(()=>[l("p",L,[a(V,{name:"grain",style:{"font-size":"30px"}}),m(),S,m("Login to the System ")]),D]),_:1}),a(c,null,{default:r(()=>[a(p,{rounded:"",dense:"",outlined:"",type:"email",label:"Email",modelValue:o.email,"onUpdate:modelValue":e[0]||(e[0]=i=>o.email=i),class:"q-mb-sm"},null,8,["modelValue"]),a(p,{rounded:"",dense:"",outlined:"",type:"password",label:"Password",modelValue:o.password,"onUpdate:modelValue":e[1]||(e[1]=i=>o.password=i),class:"q-mb-sm"},null,8,["modelValue"]),l("small",M,q(n.value),1),a(P,{icon:"person",dense:"",label:"Login",dark:"",color:"primary",onClick:w,class:"full-width",loading:t.value,rounded:""},null,8,["loading"])]),_:1})]),_:1})])]),_:1}))}};export{H as default};
