import{Q as v,a as G}from"./QTr.07f1e58b.js";import{r as s,aJ as f,a6 as q,u as b,Q as m,a4 as N,bb as o,d as l,ad as g,bD as E,bE as h,a7 as A,a5 as S}from"./index.969b801b.js";import{Q as w}from"./QInput.1f058801.js";import{Q as H,c as K}from"./QSpace.6ba0a822.js";import{Q as R,b as Q}from"./QCard.832735da.js";import{o as W,n as X}from"./rtl.aba1e39e.js";import{e as Y,a as Z}from"./excel.5d19a2ad.js";import{a as ee}from"./use-quasar.85756af0.js";import{a as ae,u as le}from"./index.a6ec028d.js";import{u as te}from"./debtor-store.9020a69e.js";import"./QSeparator.2c716240.js";import"./module_calls.8b5697cb.js";import"./helpers.6384b5cb.js";const U=[{name:"name",required:!0,label:"Name",align:"left",field:y=>y.name,format:y=>`${y}`,sortable:!0},{name:"phone",align:"center",label:"Phone",field:"phone",sortable:!0},{name:"email",align:"center",label:"Email",field:"email",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const oe={class:"q-pa-md"},re={key:0},se={key:1},ne={class:"text-h6"},ue={class:"text-center error_msg"},ke={__name:"Debtors",setup(y){const B=ee(),C=ae(),D=te(),c=s(!1),_=s(!1),n=s(!1),V=s(""),k=s(""),r=s(""),u=s(""),d=s(""),x=s(""),p=s(""),{data:T,isLoading:P,isError:$}=le("debtors",()=>D.fetchDebtors()),z=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const e=await D.deleteDebtor({uuid:t.uuid});e.status==="success"?(C.refetchQueries("debtors"),i(e.message,"green","top")):i("There was an error","red","top-right")}},I=()=>{k.value="Add New Debtor",c.value=!0,_.value=!1},L=t=>{_.value=!0,k.value=`Edit ${t.name}`,r.value=t.name,u.value=t.phone,d.value=t.email,x.value=t.uuid,c.value=!0},O=async()=>{n.value=!0,p.value="";const t={name:r.value.trim(),phone:u.value.trim(),email:d.value.trim()};if(t.name&&t.phone){const a=await D.createDebtor(t);a.status==="success"?(C.refetchQueries("debtors"),r.value="",u.value="",d.value="",c.value=!1,i(a.message,"green","top"),n.value=!1):(p.value=a.message,i(a.message,"red","top-right"),n.value=!1)}else p.value="Name and Phone are required!",i("Name and Phone are required!","red","top-right")},F=async()=>{n.value=!0;const t={name:r.value.trim(),phone:u.value.trim(),email:d.value.trim(),uuid:x.value};if(t.name){const a=await D.updateDebtor(t);a.status==="success"?(C.refetchQueries("debtors"),r.value="",u.value="",d.value="",c.value=!1,_.value=!1,k.value="",i(a.message,"green","top"),n.value=!1):(n.value=!1,i("There was an error","red","top-right"))}else p.value="Name is required!",i("Name is required!","red","top-right"),n.value=!1},J=()=>{c.value=!1,r.value="",u.value="",d.value="",x.value="",p.value=""},i=(t,a,e)=>{B.notify({message:t,color:a,position:e})},M=t=>{const a=t.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));Y(a,U,Z,B,"DebtorsData")};return(t,a)=>(f(),q("div",oe,[b(P)?(f(),q("div",re,"Loading debtors...")):b($)?(f(),q("div",se,"An error has occurred: "+m(b($)),1)):(f(),N(H,{key:2,title:"Debtors",rows:b(T),columns:b(U),separator:"cell","row-key":"name",filter:V.value,dense:""},{body:o(e=>[l(G,{props:e},{default:o(()=>[l(v,{key:"name",props:e},{default:o(()=>[g(m(e.row.name),1)]),_:2},1032,["props"]),l(v,{key:"phone",props:e},{default:o(()=>[g(m(e.row.phone),1)]),_:2},1032,["props"]),l(v,{key:"email",props:e},{default:o(()=>[g(m(e.row.email?e.row.email:"N/A"),1)]),_:2},1032,["props"]),l(v,{key:"created_at",props:e},{default:o(()=>[g(m(e.row.created_at),1)]),_:2},1032,["props"]),l(v,{key:"user",props:e},{default:o(()=>[g(m(e.row.user),1)]),_:2},1032,["props"]),l(v,{key:"actions",props:e},{default:o(()=>[l(E,{color:"blue",name:"edit",onClick:j=>L(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),l(E,{color:"red",name:"delete",onClick:j=>z(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[l(w,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:V.value,"onUpdate:modelValue":a[0]||(a[0]=e=>V.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[l(E,{name:"search"})]),_:1},8,["modelValue"]),l(h,{onClick:I,round:"",dense:"",color:"primary",size:"small",icon:"add"}),l(h,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>M(b(T)))})]),_:1},8,["rows","columns","filter"])),l(W,{modelValue:c.value,"onUpdate:modelValue":a[5]||(a[5]=e=>c.value=e),persistent:""},{default:o(()=>[l(R,{style:{width:"500px"}},{default:o(()=>[l(Q,null,{default:o(()=>[A("div",ne,m(k.value),1)]),_:1}),l(Q,{class:"q-pt-none"},{default:o(()=>[l(w,{outlined:"",dense:"",label:"Name",modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=e=>r.value=e)},null,8,["modelValue"])]),_:1}),l(Q,{class:"q-pt-none"},{default:o(()=>[l(w,{outlined:"",dense:"",label:"Phone",modelValue:u.value,"onUpdate:modelValue":a[3]||(a[3]=e=>u.value=e)},null,8,["modelValue"])]),_:1}),l(Q,{class:"q-pt-none"},{default:o(()=>[l(w,{outlined:"",dense:"",label:"Email (Optional)",modelValue:d.value,"onUpdate:modelValue":a[4]||(a[4]=e=>d.value=e)},null,8,["modelValue"])]),_:1}),A("div",ue,[A("small",null,m(p.value),1)]),l(X,{align:"right"},{default:o(()=>[l(h,{flat:"",label:"Cancel",color:"red",onClick:J}),l(K),r.value&&!_.value?(f(),N(h,{key:0,flat:"",label:"Add Debtor",color:"primary",onClick:O,loading:n.value},null,8,["loading"])):S("",!0),r.value&&_.value?(f(),N(h,{key:1,flat:"",label:"Edit Debtor",color:"primary",onClick:F,loading:n.value},null,8,["loading"])):S("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{ke as default};
