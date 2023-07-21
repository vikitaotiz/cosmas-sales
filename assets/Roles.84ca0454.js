import{Q as y,a as P}from"./QTr.7ad1ddc8.js";import{r as i,aI as c,a5 as w,u,P as m,a3 as C,bb as o,b as j,d as t,ac as R,bD as x,bE as f,a6 as N,a4 as D}from"./index.d831531d.js";import{Q as A}from"./QInput.a5c148f6.js";import{Q as G,a as H,p as J,c as K,d as W}from"./paginations.605b4771.js";import{a as X,Q as T}from"./QCard.45fd469e.js";import{e as Y,a as Z}from"./excel.5d19a2ad.js";import{a as ee}from"./use-quasar.218421a6.js";import{a as ae,u as te}from"./index.efe89fb5.js";import{u as le}from"./role-store.6371e87c.js";import"./use-dark.0f9b141a.js";import"./QSeparator.e37b50c6.js";import"./rtl.23fb1f34.js";import"./module_calls.18625a6b.js";import"./helpers.a08a01a1.js";const $=[{name:"name",required:!0,label:"Name",align:"left",field:v=>v.name,format:v=>`${v}`,sortable:!0},{name:"users",align:"center",label:"Users",field:"users",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}];const oe={class:"q-pa-md"},se={key:0},re={key:1},ne={class:"text-h6"},ie={class:"text-center error_msg"},we={__name:"Roles",setup(v){const V=ee(),b=ae(),_=le(),h=J(10),n=i(!1),p=i(!1),k=i(""),g=i(""),s=i(""),Q=i(""),d=i(""),{data:q,isLoading:S,isError:E}=te("roles",()=>_.fetchRoles()),U=async a=>{if(confirm(`Continue with the operation. Delete ${a.name} ?`)){const e=await _.deleteRole({uuid:a.uuid});e.status==="success"?(b.refetchQueries("roles"),r(e.message,"green","top")):r("There was an error","red","top-right")}},B=()=>{g.value="Add New Role",n.value=!0,p.value=!1},z=a=>{p.value=!0,g.value=`Edit ${a.name}`,s.value=a.name,Q.value=a.uuid,n.value=!0},I=async()=>{if(d.value="",s.value.trim()){const a=await _.createRole({name:s.value.trim()});a.status==="success"?(b.refetchQueries("roles"),s.value="",n.value=!1,r(a.message,"green","top")):(d.value=a.message,r(a.message,"red","top-right"))}else d.value="Name is required!",r("Name is required!","red","top-right")},L=async()=>{const a={name:s.value.trim(),uuid:Q.value};if(a.name){const l=await _.updateRole(a);l.status==="success"?(b.refetchQueries("roles"),s.value="",n.value=!1,p.value=!1,g.value="",r(l.message,"green","top")):r("There was an error","red","top-right")}else d.value="Name is required!",r("Name is required!","red","top-right")},F=()=>{n.value=!1,s.value="",Q.value="",d.value=""},r=(a,l,e)=>{V.notify({message:a,color:l,position:e})},M=a=>{const l=a.map(e=>({name:e.name,users:e.users.length,created_at:e.created_at}));Y(l,$,Z,V,"RolesData")};return(a,l)=>(c(),w("div",oe,[u(S)?(c(),w("div",se,"Loading roles...")):u(E)?(c(),w("div",re,"An error has occurred: "+m(u(E)),1)):(c(),C(G,{key:2,title:"Roles",rows:u(q),columns:u($),pagination:u(h),"onUpdate:pagination":l[2]||(l[2]=e=>j(h)?h.value=e:null),separator:"cell","row-key":"name",filter:k.value,dense:""},{body:o(e=>[t(P,{props:e},{default:o(()=>[t(y,{key:"name",props:e},{default:o(()=>[R(m(e.row.name),1)]),_:2},1032,["props"]),t(y,{key:"users",props:e},{default:o(()=>[R(m(e.row.users.length),1)]),_:2},1032,["props"]),t(y,{key:"created_at",props:e},{default:o(()=>[R(m(e.row.created_at),1)]),_:2},1032,["props"]),t(y,{key:"actions",props:e},{default:o(()=>[t(x,{color:"blue",name:"edit",onClick:O=>z(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t(x,{color:"red",name:"delete",onClick:O=>U(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":o(()=>[t(A,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=e=>k.value=e),placeholder:"Search",class:"q-mr-md"},{append:o(()=>[t(x,{name:"search"})]),_:1},8,["modelValue"]),t(f,{onClick:B,round:"",dense:"",color:"primary",size:"small",icon:"add"}),t(f,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:l[1]||(l[1]=e=>M(u(q)))})]),_:1},8,["rows","columns","pagination","filter"])),t(H,{modelValue:n.value,"onUpdate:modelValue":l[4]||(l[4]=e=>n.value=e),persistent:""},{default:o(()=>[t(X,{style:{width:"500px"}},{default:o(()=>[t(T,null,{default:o(()=>[N("div",ne,m(g.value),1)]),_:1}),t(T,{class:"q-pt-none"},{default:o(()=>[t(A,{outlined:"",dense:"",label:"Name",modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value=e)},null,8,["modelValue"])]),_:1}),N("div",ie,[N("small",null,m(d.value),1)]),t(K,{align:"right"},{default:o(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:F}),t(W),s.value&&!p.value?(c(),C(f,{key:0,flat:"",label:"Add Role",color:"primary",onClick:I})):D("",!0),s.value&&p.value?(c(),C(f,{key:1,flat:"",label:"Edit Role",color:"primary",onClick:L})):D("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{we as default};
