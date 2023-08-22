import{Q as d,a as ye}from"./QTr.00daa154.js";import{Q as ge}from"./QBadge.cf7723e5.js";import{bA as be,c as oe,h as G,bB as Z,g as qe,r,aJ as i,a6 as ee,u as n,Q as s,a4 as p,bb as u,d as l,ad as c,a7 as v,bD as L,a5 as D,N as ke,bE as E}from"./index.3a4b8579.js";import{Q as N}from"./QInput.7220b4de.js";import{Q as Qe}from"./QBtnGroup.7a877623.js";import{Q as we,c as re,d as te}from"./QSpace.e8da5d26.js";import{u as Ve,a as he,Q as Pe,b as O}from"./QCard.f83ee168.js";import{Q as Ce}from"./QToolbar.6b8f808a.js";import{l as Se,k as xe}from"./rtl.655df296.js";import{e as Ae,a as Be}from"./excel.5d19a2ad.js";import{a as De}from"./use-quasar.b560f4e7.js";import{a as Ee,u as R}from"./index.e6d7be40.js";import{p as ne}from"./product_columns.0707d543.js";import{u as Ne}from"./product-store.2bb1d099.js";import{u as Ue}from"./category-store.a6cf0e92.js";import{u as Te}from"./measurement-store.5eec1921.js";import{u as $e}from"./department-store.4e4a2424.js";import{u as Ie}from"./auth-store.baf439d2.js";import{h as Y}from"./helpers.6384b5cb.js";import"./QSeparator.4ece9d14.js";import"./module_calls.84a9dba3.js";var Me=be({name:"QBanner",props:{...Ve,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(k,{slots:_}){const{proxy:{$q:I}}=qe(),b=he(k,I),Q=oe(()=>"q-banner row items-center"+(k.dense===!0?" q-banner--dense":"")+(b.value===!0?" q-banner--dark q-dark":"")+(k.rounded===!0?" rounded-borders":"")),M=oe(()=>`q-banner__actions row items-center justify-end col-${k.inlineActions===!0?"auto":"all"}`);return()=>{const z=[G("div",{class:"q-banner__avatar col-auto row items-center self-start"},Z(_.avatar)),G("div",{class:"q-banner__content col text-body2"},Z(_.default))],U=Z(_.action);return U!==void 0&&z.push(G("div",{class:M.value},U)),G("div",{class:Q.value+(k.inlineActions===!1&&U!==void 0?" q-banner--top-padding":""),role:"alert"},z)}}});const ze={class:"q-pa-md"},je={key:0},Ge={key:1},Le={class:"text-h6"},Oe=v("small",null,[v("b",null,"Product Quantity should be adjusted from inventories.")],-1),Re={style:{"background-color":"rgb(197, 238, 206)",padding:"3px"}},Ye={class:"row q-col-gutter-sm q-mb-sm q-pa-md"},Fe={class:"row q-col-gutter-sm q-mb-sm q-pa-md"},Je={class:"text-center error_msg"},ft={__name:"Products",setup(k){const _=Ie(),I=De(),b=Ee(),Q=Ne(),M=Ue(),z=Te(),U=$e(),T=r(!1),w=r(!1),V=r(!1),F=r(""),j=r(""),ae=r(""),q=r(""),f=r(""),h=r(0),P=r(0),C=r(1),S=r(1),{data:J,isLoading:se,isError:le}=R("products",()=>Q.fetchProducts()),x=r("");let H=r([]);const A=r("");let K=r([]);const B=r("");let W=r([]);R("categories",()=>M.fetchCategories(),{onSuccess:t=>{K.value=t.map(e=>({uuid:e.uuid,name:e.name}))}}),R("measurements",()=>z.fetchMeasurements(),{onSuccess:t=>{H.value=t.map(e=>({uuid:e.uuid,name:e.name}))}}),R("departments",()=>U.fetchDepartments(),{onSuccess:t=>{W.value=t.map(e=>({uuid:e.uuid,name:e.name}))}});const ie=async t=>{if(confirm(`Continue with the operation. Delete ${t.name} ?`)){const a=await Q.deleteProduct({uuid:t.uuid});a.status==="success"?(b.refetchQueries("products"),m(a.message,"green","top")):m("There was an error","red","top-right")}},de=()=>{w.value=!1,M.categories.length===0?m("You need to create at least one CATEGORY in order to create products!","orange","top"):(j.value="Add New Product",T.value=!0)},ce=t=>{w.value=!0,j.value=`Edit ${t.name}`,ae.value=t.uuid,T.value=!0,f.value=t.name,h.value=t.quantity,P.value=t.min_quantity,C.value=t.buying_price,S.value=t.selling_price,x.value=H.value.find(e=>e.name===t.measurement),A.value=K.value.find(e=>e.name===t.category),B.value=W.value.find(e=>e.name===t.department)},me=async()=>{q.value="",V.value=!0;const t={name:f.value.trim(),quantity:h.value,min_quantity:Number(P.value),selling_price:S.value,buying_price:C.value,category_uuid:A.value.uuid,department_uuid:B.value.uuid,measurement_uuid:x.value.uuid};if(t.name&&t.quantity&&t.min_quantity&&t.selling_price&&t.buying_price&&t.category_uuid&&t.department_uuid&&t.measurement_uuid){const e=await Q.createProduct(t);e.status==="success"?(b.refetchQueries("products"),b.refetchQueries("finished_products"),X(),m(e.message,"green","top")):(q.value=e.message,m(e.message,"red","top-right"))}else q.value="All fields are required!",V.value=!1,m("All fields are required!","red","top-right")},pe=async()=>{q.value="",V.value=!0;const t={product_uuid:ae.value,name:f.value.trim(),quantity:h.value,min_quantity:Number(P.value),selling_price:S.value,buying_price:C.value,category_uuid:A.value.uuid,department_uuid:B.value.uuid,measurement_uuid:x.value.uuid};if(t.name&&t.quantity&&t.selling_price&&t.buying_price&&t.category_uuid&&t.department_uuid&&t.measurement_uuid){const e=await Q.updateProduct(t);e.status==="success"?(b.refetchQueries("products"),b.refetchQueries("finished_products"),X(),m(e.message,"green","top")):m(e.message,"red","top-right")}else q.value="All fields are required!",m("All fields are required!","red","top-right")},ve=()=>X(),m=(t,e,a)=>{I.notify({message:t,color:e,position:a})},X=()=>{f.value="",S.value=1,C.value=1,A.value="",B.value="",x.value="",h.value=1,P.value=0,T.value=!1,V.value=!1,w.value=!1,j.value="",q.value=""},_e=t=>{const e=t.map(a=>({name:a.name,products:a.products.length,created_at:a.created_at}));Ae(e,ne,Be,I,"ProductsData")};return(t,e)=>(i(),ee("div",ze,[n(se)?(i(),ee("div",je,"Loading products...")):n(le)?(i(),ee("div",Ge,"An error has occurred: "+s(n(le)),1)):(i(),p(we,{key:2,title:"Products",rows:n(J),columns:n(ne),separator:"cell","row-key":"name",filter:F.value,dense:""},{body:u(a=>[l(ye,{props:a,class:ke(`${a.row.quantity<=a.row.min_quantity||a.row.quantity<1?"blink-bg":""}`)},{default:u(()=>{var y,g,o;return[l(d,{key:"name",props:a},{default:u(()=>[c(s(a.row.name),1)]),_:2},1032,["props"]),l(d,{key:"measurement",props:a},{default:u(()=>[c(s(a.row.measurement)+" ",1),v("small",null,[l(ge,null,{default:u(()=>[c(": "+s(a.row.quantity),1)]),_:2},1024)])]),_:2},1032,["props"]),l(d,{key:"min_quantity",props:a},{default:u(()=>[c(s(a.row.min_quantity),1)]),_:2},1032,["props"]),l(d,{key:"buying_price",props:a},{default:u(()=>[c(s(a.row.buying_price),1)]),_:2},1032,["props"]),l(d,{key:"selling_price",props:a},{default:u(()=>[c(s(a.row.selling_price),1)]),_:2},1032,["props"]),l(d,{key:"department",props:a},{default:u(()=>[c(s(a.row.department),1)]),_:2},1032,["props"]),l(d,{key:"category",props:a},{default:u(()=>[c(s(a.row.category),1)]),_:2},1032,["props"]),l(d,{key:"user",props:a},{default:u(()=>[c(s(a.row.user),1)]),_:2},1032,["props"]),l(d,{key:"created_at",props:a},{default:u(()=>[c(s(a.row.created_at),1)]),_:2},1032,["props"]),n(Y)((o=(g=(y=n(_))==null?void 0:y.user)==null?void 0:g.user)==null?void 0:o.roles)?(i(),p(d,{key:"actions",props:a},{default:u(()=>[l(L,{color:"blue",name:"edit",onClick:$=>ce(a.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),l(L,{color:"red",name:"delete",onClick:$=>ie(a.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])):D("",!0)]}),_:2},1032,["props","class"])]),"top-right":u(()=>{var a,y,g;return[l(N,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:F.value,"onUpdate:modelValue":e[0]||(e[0]=o=>F.value=o),placeholder:"Search",class:"q-mr-md"},{append:u(()=>[l(L,{name:"search"})]),_:1},8,["modelValue"]),n(Y)((g=(y=(a=n(_))==null?void 0:a.user)==null?void 0:y.user)==null?void 0:g.roles)?(i(),p(Qe,{key:0},{default:u(()=>{var o;return[l(E,{onClick:de,dense:"",color:"blue",size:"small",icon:"add",label:"Add"}),((o=n(J))==null?void 0:o.length)>0?(i(),p(E,{key:0,dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:e[1]||(e[1]=$=>_e(n(J)))})):D("",!0)]}),_:1})):D("",!0)]}),_:1},8,["rows","columns","filter"])),l(Se,{modelValue:T.value,"onUpdate:modelValue":e[10]||(e[10]=a=>T.value=a),persistent:""},{default:u(()=>[l(Pe,{style:{width:"500px"}},{default:u(()=>{var a,y,g;return[l(O,null,{default:u(()=>[v("div",Le,s(j.value),1)]),_:1}),l(O,{class:"q-pt-none"},{default:u(()=>[l(N,{outlined:"",dense:"",label:"Name",modelValue:f.value,"onUpdate:modelValue":e[2]||(e[2]=o=>f.value=o)},null,8,["modelValue"])]),_:1}),l(O,{class:"q-pt-none"},{default:u(()=>{var o,$,ue;return[!w.value&&n(Y)((ue=($=(o=n(_))==null?void 0:o.user)==null?void 0:$.user)==null?void 0:ue.roles)?(i(),p(N,{key:0,outlined:"",dense:"",label:"Initial Quantity",modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=fe=>h.value=fe),type:"number",min:"1",oninput:"validity.valid||(value='')"},null,8,["modelValue"])):(i(),p(Me,{key:1,class:"bg-primary text-white"},{default:u(()=>[l(Ce,null,{default:u(()=>[Oe,l(re),l(E,{label:"INVENTORIES",outline:"",size:"sm",to:"/inventories"})]),_:1})]),_:1}))]}),_:1}),v("div",Re,[n(Y)((g=(y=(a=n(_))==null?void 0:a.user)==null?void 0:y.user)==null?void 0:g.roles)?(i(),p(N,{key:0,outlined:"",dense:"",label:"Minimum Quantity",modelValue:P.value,"onUpdate:modelValue":e[4]||(e[4]=o=>P.value=o),type:"number",min:"0",oninput:"validity.valid||(value='');",class:"q-ma-md",filled:"",hint:"Minimum Quantity that will prompt for product restock..."},{prepend:u(()=>[l(L,{name:"blur_on"})]),_:1},8,["modelValue"])):D("",!0)]),v("div",Ye,[l(N,{outlined:"",dense:"",label:"Buying Price (Per Unit)",modelValue:C.value,"onUpdate:modelValue":e[5]||(e[5]=o=>C.value=o),type:"number",min:"1",oninput:"validity.valid||(value='');",class:"col-6"},null,8,["modelValue"]),l(N,{outlined:"",dense:"",label:"Selling Price (Per Unit)",modelValue:S.value,"onUpdate:modelValue":e[6]||(e[6]=o=>S.value=o),type:"number",min:"1",oninput:"validity.valid||(value='');",class:"col-6"},null,8,["modelValue"])]),v("div",Fe,[l(te,{dense:"",outlined:"",modelValue:A.value,"onUpdate:modelValue":e[7]||(e[7]=o=>A.value=o),options:n(K),"option-value":"uuid","option-label":"name",label:"Select Product Category",class:"col-6"},null,8,["modelValue","options"]),l(te,{dense:"",outlined:"",modelValue:x.value,"onUpdate:modelValue":e[8]||(e[8]=o=>x.value=o),options:n(H),"option-value":"uuid","option-label":"name",label:"Select Product Measurement",class:"col-6"},null,8,["modelValue","options"])]),l(O,{class:"q-pt-none"},{default:u(()=>[l(te,{dense:"",outlined:"",modelValue:B.value,"onUpdate:modelValue":e[9]||(e[9]=o=>B.value=o),options:n(W),"option-value":"uuid","option-label":"name",label:"Select Product Department"},null,8,["modelValue","options"])]),_:1}),v("div",Je,[v("small",null,s(q.value),1)]),l(xe,{align:"right"},{default:u(()=>[l(E,{flat:"",label:"Cancel",color:"red",onClick:ve}),l(re),f.value&&!w.value?(i(),p(E,{key:0,flat:"",label:"Add Product",color:"primary",onClick:me,loading:V.value},null,8,["loading"])):D("",!0),f.value&&w.value?(i(),p(E,{key:1,flat:"",label:"Edit Product",color:"primary",onClick:pe,loading:V.value},null,8,["loading"])):D("",!0)]),_:1})]}),_:1})]),_:1},8,["modelValue"])]))}};export{ft as default};
