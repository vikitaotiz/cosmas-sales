import{Q as p,a as oe}from"./QTr.d9b5b92f.js";import{c9 as ue,c8 as ie,r as c,j as se,aI as Q,a5 as T,u as f,P as r,a3 as N,bb as l,b as de,d as t,ac as i,bD as $,bE as k,a6 as v,a4 as M}from"./index.1b73b11e.js";import{Q as q}from"./QInput.ac1490f8.js";import{Q as ce}from"./QBtnGroup.8ef33b16.js";import{Q as me,c as G,p as pe,d as h,f as Y,e as ve}from"./paginations.a4ceb4c6.js";import{a as H,Q as A}from"./QBadge.5a49dc79.js";import{a as J,Q as P}from"./QCard.4160f568.js";import{e as ye,a as fe}from"./excel.5d19a2ad.js";import{a as _e}from"./use-quasar.dad9498e.js";import{a as ge,u as K}from"./index.ff0c9186.js";import{g as be,p as z}from"./module_calls.15f10b55.js";import{u as Qe}from"./product-store.cdce6162.js";import"./use-dark.12a074e6.js";import"./QSeparator.1afc6b22.js";import"./rtl.39942d58.js";import"./helpers.6bffaf79.js";const W=[{name:"product",required:!0,label:"Product",align:"left",field:o=>o.name,format:o=>`${o}`,sortable:!0},{name:"buying_price",align:"center",label:"Buying Price (Per Unit)",field:"buying_price",sortable:!0},{name:"quantity",align:"center",label:"Quantity",field:"quantity",sortable:!0},{name:"total",align:"center",label:"Total Cost",field:"total",sortable:!0},{name:"measurement",align:"center",label:"Measurement",field:"measurement",sortable:!0},{name:"department",align:"center",label:"Department",field:"department",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0},{name:"actions",align:"center",label:"Actions",field:"created_at"}],I=ue(),_=I==null?void 0:I.token,ke=ie("inventories",{state:()=>({inventories:[]}),actions:{async fetchInventories(){if(_){const o=await be("inventories",_);return this.inventories=o==null?void 0:o.data,this.inventories}},async createInventory(o){var g;if(o.user_uuid=(g=I==null?void 0:I.user)==null?void 0:g.uuid,_)return await z(o,"inventories",_)},async updateInventory(o){if(_)return await z(o,"update_inventory",_)},async deleteInventory(o){if(_)return await z(o,"delete_inventory",_)}}});const we={class:"q-pa-md"},Ie={key:0},Ve={key:1},Ce={class:"text-center error_msg"},qe={class:"text-h6"},he={key:0},Pe=v("br",null,null,-1),xe={class:"text-center error_msg"},Ge={__name:"Inventories",setup(o){const g=_e(),x=ge(),B=ke(),L=Qe(),D=pe(10),w=c(!1),y=c(!1),V=c(!1),U=c(!1),E=c(""),C=c(""),s=c(1),d=c(1),u=se({product_id:"",measurement_id:""}),S=c(""),b=c(""),{data:O,isLoading:X,isError:R}=K("inventories",()=>B.fetchInventories()),{data:Z}=K("products",()=>L.fetchProducts()),ee=async n=>{if(confirm(`Continue with the operation. Delete ${n.name} ?`)){const e=await B.deleteInventory({uuid:n.uuid});e.status==="success"?(x.refetchQueries("inventories"),m(e.message,"green","top")):m("There was an error","red","top-right")}},te=()=>{L.products.length===0?m("You need to create at least one PRODUCT in order to create inventories!","orange","top"):(C.value="Create Inventory",w.value=!0,U.value=!1)},ae=n=>{s.value=n.quantity,d.value=n.buying_price,C.value=`Update Actual Quantity for  ${n.product}`,S.value=n,V.value=!0},le=async()=>{y.value=!0,b.value="";const n={product_uuid:u.product_id.uuid,measurement_name:u.product_id.measurement,quantity:s.value,buying_price:d.value};if(n.product_uuid&&n.measurement_name&&n.quantity&&n.buying_price){const a=await B.createInventory(n);a.status==="success"?(x.refetchQueries("inventories"),u.product_id="",u.measurement_id="",s.value=1,u.buying_price=1,w.value=!1,y.value=!1,m(a.message,"green","top")):(b.value=a.message,m(a.message,"red","top-right"))}else y.value=!1,b.value="Product, Quantity and Buying Price are required!",m("Product, Quantity and Buying Price are required!","red","top-right")},j=async()=>{y.value=!0;const n={quantity:Number(s.value),buying_price:Number(d.value),inventory_uuid:S.value.uuid};if(n.quantity&&n.buying_price){const a=await B.updateInventory(n);a.status==="success"?(x.refetchQueries("inventories"),s.value=1,d.value=1,w.value=!1,V.value=!1,U.value=!1,C.value="",y.value=!1,m(a.message,"green","top")):m("There was an error","red","top-right")}else y.value=!1,b.value="Quantity and Buying price are required!",m("Quantity and Buying price are required!","red","top-right")},F=()=>{w.value=!1,V.value=!1,u.product_id="",s.value=1,d.value=1,S.value="",b.value=""},m=(n,a,e)=>{g.notify({message:n,color:a,position:e})},ne=n=>{const a=n.map(e=>({name:e.name,inventories:e.inventories.length,created_at:e.created_at}));ye(a,W,fe,g,"InventoriesData")};return(n,a)=>(Q(),T("div",we,[f(X)?(Q(),T("div",Ie,"Loading inventories...")):f(R)?(Q(),T("div",Ve,"An error has occurred: "+r(f(R)),1)):(Q(),N(me,{key:2,title:"Purchases/Inventories",rows:f(O),columns:f(W),pagination:f(D),"onUpdate:pagination":a[2]||(a[2]=e=>de(D)?D.value=e:null),separator:"cell","row-key":"name",filter:E.value,dense:""},{body:l(e=>[t(oe,{props:e},{default:l(()=>[t(p,{key:"product",props:e},{default:l(()=>[i(r(e.row.product),1)]),_:2},1032,["props"]),t(p,{key:"buying_price",props:e},{default:l(()=>[i(r(e.row.buying_price),1)]),_:2},1032,["props"]),t(p,{key:"quantity",props:e},{default:l(()=>[i(r(e.row.quantity),1)]),_:2},1032,["props"]),t(p,{key:"total",props:e},{default:l(()=>[i(r(e.row.total),1)]),_:2},1032,["props"]),t(p,{key:"measurement",props:e},{default:l(()=>[i(r(e.row.measurement),1)]),_:2},1032,["props"]),t(p,{key:"department",props:e},{default:l(()=>[i(r(e.row.department),1)]),_:2},1032,["props"]),t(p,{key:"user",props:e},{default:l(()=>[i(r(e.row.user),1)]),_:2},1032,["props"]),t(p,{key:"created_at",props:e},{default:l(()=>[i(r(e.row.created_at),1)]),_:2},1032,["props"]),t(p,{key:"actions",props:e},{default:l(()=>[t($,{color:"blue",name:"edit",onClick:re=>ae(e.row),style:{cursor:"pointer"},size:"20px",class:"q-mr-md"},null,8,["onClick"]),t($,{color:"red",name:"delete",onClick:re=>ee(e.row),style:{cursor:"pointer"},size:"20px"},null,8,["onClick"])]),_:2},1032,["props"])]),_:2},1032,["props"])]),"top-right":l(()=>[t(q,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:E.value,"onUpdate:modelValue":a[0]||(a[0]=e=>E.value=e),placeholder:"Search",class:"q-mr-md"},{append:l(()=>[t($,{name:"search"})]),_:1},8,["modelValue"]),t(ce,null,{default:l(()=>[t(k,{onClick:te,dense:"",color:"primary",icon:"add",label:"Add"}),t(k,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:a[1]||(a[1]=e=>ne(f(O)))})]),_:1})]),_:1},8,["rows","columns","pagination","filter"])),t(G,{modelValue:V.value,"onUpdate:modelValue":a[5]||(a[5]=e=>V.value=e),persistent:""},{default:l(()=>[t(J,{style:{width:"500px"}},{default:l(()=>[t(H,null,{default:l(()=>[i(r(C.value)+" ",1),t(h),v("small",null,[t(A,null,{default:l(()=>[i("Total: "+r(s.value*d.value),1)]),_:1})])]),_:1}),t(P,null,{default:l(()=>[t(q,{dense:"",outlined:"",modelValue:s.value,"onUpdate:modelValue":a[3]||(a[3]=e=>s.value=e),label:"Actual Quantity",type:"number"},null,8,["modelValue"])]),_:1}),t(P,null,{default:l(()=>[t(q,{dense:"",outlined:"",modelValue:d.value,"onUpdate:modelValue":a[4]||(a[4]=e=>d.value=e),label:"Buying Price",type:"number"},null,8,["modelValue"])]),_:1}),v("div",Ce,[v("small",null,r(b.value),1)]),t(Y,{align:"right"},{default:l(()=>[t(k,{flat:"",label:"Cancel",color:"red",onClick:F}),t(h),t(k,{flat:"",label:"Edit Inventory",color:"primary",onClick:j})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(G,{modelValue:w.value,"onUpdate:modelValue":a[9]||(a[9]=e=>w.value=e),persistent:""},{default:l(()=>[t(J,{style:{width:"600px"}},{default:l(()=>[t(H,null,{default:l(()=>[v("div",qe,r(C.value),1),t(h),v("small",null,[v("i",null,"Total: "+r(s.value*d.value),1)]),t(h),u.product_id?(Q(),T("small",he,[t(A,{class:"q-mr-sm"},{default:l(()=>[i("Measurement: "+r(u.product_id.measurement),1)]),_:1}),t(A,null,{default:l(()=>[i("Available Quantity: "+r(u.product_id.quantity),1)]),_:1}),Pe,t(A,null,{default:l(()=>[i("Previous Buying Price: "+r(u.product_id.buying_price),1)]),_:1})])):M("",!0)]),_:1}),t(P,null,{default:l(()=>[t(ve,{dense:"",outlined:"",modelValue:u.product_id,"onUpdate:modelValue":a[6]||(a[6]=e=>u.product_id=e),options:f(Z),"option-value":"uuid","option-label":"name",label:"Select Product"},null,8,["modelValue","options"])]),_:1}),t(P,null,{default:l(()=>[t(q,{dense:"",outlined:"",modelValue:s.value,"onUpdate:modelValue":a[7]||(a[7]=e=>s.value=e),label:"Product Quantity",type:"number"},null,8,["modelValue"])]),_:1}),t(P,null,{default:l(()=>[t(q,{dense:"",outlined:"",modelValue:d.value,"onUpdate:modelValue":a[8]||(a[8]=e=>d.value=e),label:"Buying Price (Per Unit)",type:"number"},null,8,["modelValue"])]),_:1}),v("div",xe,[v("small",null,r(b.value),1)]),t(Y,{align:"right"},{default:l(()=>[t(k,{flat:"",label:"Cancel",color:"red",onClick:F}),t(h),u.product_id&&!U.value?(Q(),N(k,{key:0,flat:"",label:"Add Inventory",color:"primary",onClick:le,loading:y.value},null,8,["loading"])):M("",!0),u.product_id&&U.value?(Q(),N(k,{key:1,flat:"",label:"Edit Inventory",color:"primary",onClick:j,loading:y.value},null,8,["loading"])):M("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Ge as default};
