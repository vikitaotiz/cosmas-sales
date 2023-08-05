import{Q as f,a as O}from"./QTr.b3d431e3.js";import{r as u,aI as i,a5 as V,u as c,P as m,a3 as v,bb as l,d as t,ac as b,bD as q,a4 as k,bE as y,a6 as E}from"./index.13bc05b7.js";import{Q as T}from"./QInput.188cdb65.js";import{Q as j}from"./QBtnGroup.39a24a44.js";import{Q as H,c as J,f as K,d as R}from"./QCardActions.7e5ffdc1.js";import{a as W,Q as $}from"./QCard.5b9a26b3.js";import{e as X,a as Y}from"./excel.5d19a2ad.js";import{a as Z}from"./use-quasar.73db4cf5.js";import{a as ee,u as ae}from"./index.ebf3a940.js";import{u as te}from"./category-store.bf956c8f.js";import"./use-dark.764e0cc6.js";import"./QSeparator.b84916d7.js";import"./rtl.37beae6a.js";import"./module_calls.ce394ca6.js";import"./helpers.838b61bb.js";const S=[{name:"name",required:!0,label:"Name",align:"left",field:_=>_.name,format:_=>`${_}`,sortable:!0},{name:"products",align:"center",label:"Products",field:"products",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const re={class:"q-pa-md"},le={key:0},oe={key:1},se={class:"text-h6"},ne={class:"text-center error_msg"},Qe={__name:"Categories",setup(_){const A=Z(),Q=ee(),C=te(),d=u(!1),s=u(!1),g=u(!1),w=u(""),h=u(""),o=u(""),x=u(""),p=u(""),{data:N,isLoading:U,isError:B}=ae("categories",()=>C.fetchCategories()),I=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await C.deleteCategory({uuid:a.uuid});e.status==="success"?(Q.refetchQueries("categories"),n(e.message,"green","top")):n("There was an error","red","top-right")}},z=()=>{h.value="Add New Category",d.value=!0,g.value=!1},L=a=>{g.value=!0,h.value=`Edit ${a.name}`,o.value=a.name,x.value=a.uuid,d.value=!0},P=async()=>{if(s.value=!0,p.value="",o.value.trim()){const a=await C.createCategory({name:o.value.trim()});a.status==="success"?(Q.refetchQueries("categories"),o.value="",d.value=!1,s.value=!1,n(a.message,"green","top")):(s.value=!1,p.value=a.message,n(a.message,"red","top-right"))}else p.value="Name is required!",n("Name is required!","red","top-right")},F=async()=>{s.value=!0;const a={name:o.value.trim(),uuid:x.value};if(a.name){const r=await C.updateCategory(a);r.status==="success"?(Q.refetchQueries("categories"),o.value="",d.value=!1,g.value=!1,h.value="",s.value=!1,n(r.message,"green","top")):n("There was an error","red","top-right")}else s.value=!1,p.value="Name is required!",n("Name is required!","red","top-right")},G=()=>{d.value=!1,o.value="",x.value="",p.value=""},n=(a,r,e)=>{A.notify({message:a,color:r,position:e})},M=a=>{const r=a.map(e=>({name:e.name,products:e.products.length,created_at:e.created_at}));X(r,S,Y,A,"CategoriesData")};return(a,r)=>(i(),V("div",re,[c(U)?(i(),V("div",le,"Loading categories...")):c(B)?(i(),V("div",oe,"An error has occurred: "+m(c(B)),1)):(i(),v(H,{key:2,title:"Categories",rows:c(N),columns:c(S),separator:"cell","row-key":"name",filter:w.value,dense:""},{body:l(e=>[t(O,{props:e},{default:l(()=>[t(f,{key:"name",props:e},{default:l(()=>[b(m(e.row.name),1)]),_:2},1032,["props"]),t(f,{key:"products",props:e},{default:l(()=>[b(m(e.row.products.length),1)]),_:2},1032,["props"]),t(f,{key:"user",props:e},{default:l(()=>[b(m(e.row.user),1)]),_:2},1032,["props"]),t(f,{key:"created_at",props:e},{default:l(()=>[b(m(e.row.created_at),1)]),_:2},1032,["props"]),t(f,{key:"actions",props:e},{default:l(()=>[t(q,{color:"blue",name:"edit",onClick:D=>L(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),e.row.products.length===0?(i(),v(q,{key:0,color:"red",name:"delete",onClick:D=>I(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])):k("",!0)]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":l(()=>[t(T,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:w.value,"onUpdate:modelValue":r[0]||(r[0]=e=>w.value=e),placeholder:"Search",class:"q-mr-md"},{append:l(()=>[t(q,{name:"search"})]),_:1},8,["modelValue"]),t(j,null,{default:l(()=>{var e;return[t(y,{onClick:z,round:"",dense:"",color:"primary",icon:"add",label:"Add"}),((e=c(N))==null?void 0:e.length)>0?(i(),v(y,{key:0,dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:r[1]||(r[1]=D=>M(c(N)))})):k("",!0)]}),_:1})]),_:1},8,["rows","columns","filter"])),t(J,{modelValue:d.value,"onUpdate:modelValue":r[3]||(r[3]=e=>d.value=e),persistent:""},{default:l(()=>[t(W,{style:{width:"500px"}},{default:l(()=>[t($,null,{default:l(()=>[E("div",se,m(h.value),1)]),_:1}),t($,{class:"q-pt-none"},{default:l(()=>[t(T,{outlined:"",dense:"",label:"Name",modelValue:o.value,"onUpdate:modelValue":r[2]||(r[2]=e=>o.value=e)},null,8,["modelValue"])]),_:1}),E("div",ne,[E("small",null,m(p.value),1)]),t(K,{align:"right"},{default:l(()=>[t(y,{flat:"",label:"Cancel",color:"red",onClick:G}),t(R),o.value&&!g.value?(i(),v(y,{key:0,flat:"",label:"Add Category",color:"primary",onClick:P,loading:s.value},null,8,["loading"])):k("",!0),o.value&&g.value?(i(),v(y,{key:1,flat:"",label:"Edit Category",color:"primary",onClick:F,loading:s.value},null,8,["loading"])):k("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Qe as default};
