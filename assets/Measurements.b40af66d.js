import{Q as y,a as P}from"./QTr.b3d431e3.js";import{r as u,aI as d,a5 as Q,u as m,P as c,a3 as w,bb as r,d as t,ac as C,bD as M,bE as f,a6 as x,a4 as E}from"./index.13bc05b7.js";import{Q as D}from"./QInput.188cdb65.js";import{Q as j,c as G,f as H,d as J}from"./QCardActions.7e5ffdc1.js";import{a as K,Q as A}from"./QCard.5b9a26b3.js";import{e as R,a as W}from"./excel.5d19a2ad.js";import{a as X}from"./use-quasar.73db4cf5.js";import{a as Y,u as Z}from"./index.ebf3a940.js";import{u as ee}from"./measurement-store.15010beb.js";import"./use-dark.764e0cc6.js";import"./QSeparator.b84916d7.js";import"./rtl.37beae6a.js";import"./module_calls.ce394ca6.js";import"./helpers.838b61bb.js";const T=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"user",align:"center",label:"User",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const ae={class:"q-pa-md"},te={key:0},se={key:1},re={class:"text-h6"},le={class:"text-center error_msg"},be={__name:"Measurements",setup(v){const N=X(),h=Y(),_=ee(),n=u(!1),p=u(!1),b=u(""),g=u(""),l=u(""),k=u(""),i=u(""),{data:V,isLoading:$,isError:q}=Z("measurements",()=>_.fetchMeasurements()),S=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await _.deleteMeasurement({uuid:a.uuid});e.status==="success"?(h.refetchQueries("measurements"),o(e.message,"green","top")):o("There was an error","red","top-right")}},B=()=>{g.value="Add New Measurement",n.value=!0,p.value=!1},U=a=>{p.value=!0,g.value=`Edit ${a.name}`,l.value=a.name,k.value=a.uuid,n.value=!0},z=async()=>{if(i.value="",l.value.trim()){const a=await _.createMeasurement({name:l.value.trim()});a.status==="success"?(h.refetchQueries("measurements"),l.value="",n.value=!1,o(a.message,"green","top")):(i.value=a.message,o(a.message,"red","top-right"))}else i.value="Name is required!",o("Name is required!","red","top-right")},I=async()=>{const a={name:l.value.trim(),uuid:k.value};if(a.name){const s=await _.updateMeasurement(a);s.status==="success"?(h.refetchQueries("measurements"),l.value="",n.value=!1,p.value=!1,g.value="",o(s.message,"green","top")):o("There was an error","red","top-right")}else i.value="Name is required!",o("Name is required!","red","top-right")},L=()=>{n.value=!1,l.value="",k.value="",i.value=""},o=(a,s,e)=>{N.notify({message:a,color:s,position:e})},F=a=>{const s=a.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));R(s,T,W,N,"MeasurementsData")};return(a,s)=>(d(),Q("div",ae,[m($)?(d(),Q("div",te,"Loading measurements...")):m(q)?(d(),Q("div",se,"An error has occurred: "+c(m(q)),1)):(d(),w(j,{key:2,title:"Measurements",rows:m(V),columns:m(T),separator:"cell","row-key":"name",filter:b.value,dense:""},{body:r(e=>[t(P,{props:e},{default:r(()=>[t(y,{key:"name",props:e},{default:r(()=>[C(c(e.row.name),1)]),_:2},1032,["props"]),t(y,{key:"user",props:e},{default:r(()=>[C(c(e.row.user),1)]),_:2},1032,["props"]),t(y,{key:"created_at",props:e},{default:r(()=>[C(c(e.row.created_at),1)]),_:2},1032,["props"]),t(y,{key:"actions",props:e},{default:r(()=>[t(M,{color:"blue",name:"edit",onClick:O=>U(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(M,{color:"red",name:"delete",onClick:O=>S(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":r(()=>[t(D,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:b.value,"onUpdate:modelValue":s[0]||(s[0]=e=>b.value=e),placeholder:"Search",class:"q-mr-md"},{append:r(()=>[t(M,{name:"search"})]),_:1},8,["modelValue"]),t(f,{onClick:B,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(f,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:s[1]||(s[1]=e=>F(m(V)))})]),_:1},8,["rows","columns","filter"])),t(G,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=e=>n.value=e),persistent:""},{default:r(()=>[t(K,{style:{width:"500px"}},{default:r(()=>[t(A,null,{default:r(()=>[x("div",re,c(g.value),1)]),_:1}),t(A,{class:"q-pt-none"},{default:r(()=>[t(D,{outlined:"",dense:"",label:"Name",modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=e=>l.value=e)},null,8,["modelValue"])]),_:1}),x("div",le,[x("small",null,c(i.value),1)]),t(H,{align:"right"},{default:r(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:L}),t(J),l.value&&!p.value?(d(),w(f,{key:0,flat:"",label:"Add Measurement",color:"primary",onClick:z})):E("",!0),l.value&&p.value?(d(),w(f,{key:1,flat:"",label:"Edit Measurement",color:"primary",onClick:I})):E("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{be as default};
