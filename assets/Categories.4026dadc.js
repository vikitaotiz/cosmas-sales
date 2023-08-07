import{Q as h,a as R}from"./QTr.90fcf0ff.js";import{r as d,aJ as u,a6 as A,u as s,Q as p,a4 as f,bb as o,d as t,ad as x,bD as B,a5 as v,bE as b,a7 as D}from"./index.5baec902.js";import{Q as z}from"./QInput.11d58c62.js";import{Q as W}from"./QBtnGroup.18b056bb.js";import{Q as X,c as Y}from"./QSpace.2d5622f0.js";import{Q as Z,b as I}from"./QCard.442ac137.js";import{o as ee,n as ae}from"./rtl.24631164.js";import{e as te,a as re}from"./excel.5d19a2ad.js";import{a as oe}from"./use-quasar.6bd221c3.js";import{a as le,u as se}from"./index.c271a562.js";import{u as ue}from"./category-store.e42d9acd.js";import{u as ne}from"./auth-store.88ff8b55.js";import{h as L}from"./helpers.dd8dddcc.js";import"./QSeparator.be70d069.js";import"./module_calls.52760843.js";const P=[{name:"name",required:!0,label:"Name",align:"left",field:k=>k.name,format:k=>`${k}`,sortable:!0},{name:"products",align:"center",label:"Products",field:"products",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const ie={class:"q-pa-md"},de={key:0},ce={key:1},me={class:"text-h6"},pe={class:"text-center error_msg"},Ee={__name:"Categories",setup(k){const S=ne(),T=oe(),N=le(),Q=ue(),c=d(!1),n=d(!1),y=d(!1),V=d(""),w=d(""),l=d(""),q=d(""),g=d(""),{data:E,isLoading:F,isError:$}=se("categories",()=>Q.fetchCategories()),G=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await Q.deleteCategory({uuid:a.uuid});e.status==="success"?(N.refetchQueries("categories"),i(e.message,"green","top")):i("There was an error","red","top-right")}},J=()=>{w.value="Add New Category",c.value=!0,y.value=!1},M=a=>{y.value=!0,w.value=`Edit ${a.name}`,l.value=a.name,q.value=a.uuid,c.value=!0},O=async()=>{if(n.value=!0,g.value="",l.value.trim()){const a=await Q.createCategory({name:l.value.trim()});a.status==="success"?(N.refetchQueries("categories"),l.value="",c.value=!1,n.value=!1,i(a.message,"green","top")):(n.value=!1,g.value=a.message,i(a.message,"red","top-right"))}else g.value="Name is required!",i("Name is required!","red","top-right")},j=async()=>{n.value=!0;const a={name:l.value.trim(),uuid:q.value};if(a.name){const r=await Q.updateCategory(a);r.status==="success"?(N.refetchQueries("categories"),l.value="",c.value=!1,y.value=!1,w.value="",n.value=!1,i(r.message,"green","top")):i("There was an error","red","top-right")}else n.value=!1,g.value="Name is required!",i("Name is required!","red","top-right")},H=()=>{c.value=!1,l.value="",q.value="",g.value=""},i=(a,r,e)=>{T.notify({message:a,color:r,position:e})},K=a=>{const r=a.map(e=>({name:e.name,products:e.products.length,created_at:e.created_at}));te(r,P,re,T,"CategoriesData")};return(a,r)=>(u(),A("div",ie,[s(F)?(u(),A("div",de,"Loading categories...")):s($)?(u(),A("div",ce,"An error has occurred: "+p(s($)),1)):(u(),f(X,{key:2,title:"Categories",rows:s(E),columns:s(P),separator:"cell","row-key":"name",filter:V.value,dense:""},{body:o(e=>[t(R,{props:e},{default:o(()=>{var _,C,m;return[t(h,{key:"name",props:e},{default:o(()=>[x(p(e.row.name),1)]),_:2},1032,["props"]),t(h,{key:"products",props:e},{default:o(()=>[x(p(e.row.products.length),1)]),_:2},1032,["props"]),t(h,{key:"user",props:e},{default:o(()=>[x(p(e.row.user),1)]),_:2},1032,["props"]),t(h,{key:"created_at",props:e},{default:o(()=>[x(p(e.row.created_at),1)]),_:2},1032,["props"]),s(L)((m=(C=(_=s(S))==null?void 0:_.user)==null?void 0:C.user)==null?void 0:m.roles)?(u(),f(h,{key:"actions",props:e},{default:o(()=>[t(B,{color:"blue",name:"edit",onClick:U=>M(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),e.row.products.length===0?(u(),f(B,{key:0,color:"red",name:"delete",onClick:U=>G(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])):v("",!0)]),_:2},1032,["props"])):v("",!0)]}),_:2},1032,["props"])]),"top-right":o(()=>{var e,_,C;return[t(z,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:V.value,"onUpdate:modelValue":r[0]||(r[0]=m=>V.value=m),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[t(B,{name:"search"})]),_:1},8,["modelValue"]),s(L)((C=(_=(e=s(S))==null?void 0:e.user)==null?void 0:_.user)==null?void 0:C.roles)?(u(),f(W,{key:0},{default:o(()=>{var m;return[t(b,{onClick:J,round:"",dense:"",color:"primary",icon:"add",label:"Add"}),((m=s(E))==null?void 0:m.length)>0?(u(),f(b,{key:0,dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:r[1]||(r[1]=U=>K(s(E)))})):v("",!0)]}),_:1})):v("",!0)]}),_:1},8,["rows","columns","filter"])),t(ee,{modelValue:c.value,"onUpdate:modelValue":r[3]||(r[3]=e=>c.value=e),persistent:""},{default:o(()=>[t(Z,{style:{width:"500px"}},{default:o(()=>[t(I,null,{default:o(()=>[D("div",me,p(w.value),1)]),_:1}),t(I,{class:"q-pt-none"},{default:o(()=>[t(z,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),D("div",pe,[D("small",null,p(g.value),1)]),t(ae,{align:"right"},{default:o(()=>[t(b,{flat:"",label:"Cancel",color:"red",onClick:H}),t(Y),l.value&&!y.value?(u(),f(b,{key:0,flat:"",label:"Add Category",color:"primary",onClick:O,loading:n.value},null,8,["loading"])):v("",!0),l.value&&y.value?(u(),f(b,{key:1,flat:"",label:"Edit Category",color:"primary",onClick:j,loading:n.value},null,8,["loading"])):v("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Ee as default};
