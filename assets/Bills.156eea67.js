import{bA as tl,r as c,c as de,w as Qe,aB as Be,bV as De,bR as $e,bZ as al,h as Ae,bg as sl,g as ol,bB as nl,bW as ul,c9 as il,j as rl,aJ as u,a6 as q,u as k,Q as i,a4 as b,bb as s,d as t,bE as f,bD as _e,a7 as o,N as fe,ad as d,a5 as y,F as Me,aP as Oe,bd as ve,bw as Ne,aM as dl,aK as cl}from"./index.3640323b.js";import{Q as be}from"./QBtnGroup.32b87949.js";import{Q as te}from"./QInput.0ee1e9ff.js";import{Q as ml,c as O,d as Ee}from"./QSpace.a81a929c.js";import{t as _l,a as fl,u as vl,v as Ie,w as bl,b as pl,m as gl,d as yl,x as hl,y as wl,z as kl,e as Cl,A as ql,B as Ue,C as xl,c as Le,D as He,E as Pl,o as pe,l as ze,j as Fe,k as D,n as xe}from"./rtl.28c3d904.js";import{a as ge,Q as ae}from"./QToolbar.f1a7ffdf.js";import{Q as ie}from"./QSeparator.72984a03.js";import{b as F,Q as re}from"./QCard.dc6b5ca4.js";import{C as Re}from"./ClosePopup.fa34e1dc.js";import{a as Sl}from"./use-quasar.6f3971f9.js";import{a as Vl,u as Pe,b as Tl}from"./index.c3da633e.js";import{u as Ql}from"./sale-store.34239944.js";import{u as Bl}from"./product-store.6ccf3ca7.js";import{u as Dl}from"./payment-mode-store.8b2241a6.js";import{u as $l}from"./auth-store.20207788.js";import{e as Al}from"./receipt.423bdab2.js";import{h as ye}from"./helpers.7b524e95.js";import{h as je}from"./moment.9709ab41.js";import"./module_calls.e2de891c.js";import"./_commonjsHelpers.6150b38b.js";var Se=tl({name:"QTooltip",inheritAttrs:!1,props:{..._l,...fl,...vl,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:Ie},self:{type:String,default:"top middle",validator:Ie},offset:{type:Array,default:()=>[14,14],validator:bl},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...pl],setup(m,{slots:R,emit:N,attrs:E}){let j,W;const J=ol(),{proxy:{$q:r}}=J,K=c(null),I=c(!1),se=de(()=>He(m.anchor,r.lang.rtl)),U=de(()=>He(m.self,r.lang.rtl)),he=de(()=>m.persistent!==!0),{registerTick:we,removeTick:T}=gl(),{registerTimeout:_}=yl(),{transitionProps:Z,transitionStyle:L}=hl(m),{localScrollTarget:H,changeScrollEvent:Y,unconfigureScrollTarget:x}=wl(m,me),{anchorEl:p,canShow:oe,anchorEvents:$}=kl({showing:I,configureAnchorEl:Ce}),{show:X,hide:C}=Cl({showing:I,canShow:oe,handleShow:z,handleHide:A,hideOnRouteChange:he,processOnMount:!0});Object.assign($,{delayShow:ke,delayHide:ce});const{showPortal:v,hidePortal:h,renderPortal:P}=ql(J,K,ne,"tooltip");if(r.platform.is.mobile===!0){const g={anchorEl:p,innerRef:K,onClickOutside(M){return C(M),M.target.classList.contains("q-dialog__backdrop")&&ul(M),!0}},ue=de(()=>m.modelValue===null&&m.persistent!==!0&&I.value===!0);Qe(ue,M=>{(M===!0?Pl:Ue)(g)}),Be(()=>{Ue(g)})}function z(g){v(),we(()=>{W=new MutationObserver(()=>Q()),W.observe(K.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),Q(),me()}),j===void 0&&(j=Qe(()=>r.screen.width+"|"+r.screen.height+"|"+m.self+"|"+m.anchor+"|"+r.lang.rtl,Q)),_(()=>{v(!0),N("show",g)},m.transitionDuration)}function A(g){T(),h(),ee(),_(()=>{h(!0),N("hide",g)},m.transitionDuration)}function ee(){W!==void 0&&(W.disconnect(),W=void 0),j!==void 0&&(j(),j=void 0),x(),De($,"tooltipTemp")}function Q(){xl({targetEl:K.value,offset:m.offset,anchorEl:p.value,anchorOrigin:se.value,selfOrigin:U.value,maxHeight:m.maxHeight,maxWidth:m.maxWidth})}function ke(g){if(r.platform.is.mobile===!0){Le(),document.body.classList.add("non-selectable");const ue=p.value,M=["touchmove","touchcancel","touchend","click"].map(G=>[ue,G,"delayHide","passiveCapture"]);$e($,"tooltipTemp",M)}_(()=>{X(g)},m.delay)}function ce(g){r.platform.is.mobile===!0&&(De($,"tooltipTemp"),Le(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),_(()=>{C(g)},m.hideDelay)}function Ce(){if(m.noParentEvent===!0||p.value===null)return;const g=r.platform.is.mobile===!0?[[p.value,"touchstart","delayShow","passive"]]:[[p.value,"mouseenter","delayShow","passive"],[p.value,"mouseleave","delayHide","passive"]];$e($,"anchor",g)}function me(){if(p.value!==null||m.scrollTarget!==void 0){H.value=al(p.value,m.scrollTarget);const g=m.noParentEvent===!0?Q:C;Y(H.value,g)}}function qe(){return I.value===!0?Ae("div",{...E,ref:K,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",E.class],style:[E.style,L.value],role:"tooltip"},nl(R.default)):null}function ne(){return Ae(sl,Z.value,qe)}return Be(ee),Object.assign(J.proxy,{updatePosition:Q}),P}});const V=m=>(dl("data-v-278b273c"),m=m(),cl(),m),Ml={class:"q-pa-md"},Ol={key:0},Nl={key:1},El={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Il={key:1,class:"text-center"},Ul={class:"text-center"},Ll=V(()=>o("br",null,null,-1)),Hl=V(()=>o("br",null,null,-1)),zl=V(()=>o("br",null,null,-1)),Fl={key:0},Rl=V(()=>o("br",null,null,-1)),jl={key:1},Wl={key:2},Kl=V(()=>o("hr",null,null,-1)),Yl=V(()=>o("b",null,"Add Product",-1)),Gl={key:0},Jl=V(()=>o("br",null,null,-1)),Zl=V(()=>o("hr",null,null,-1)),Xl={class:"text-center error_msg"},et=V(()=>o("div",{class:"text-h6"},"Make Payment",-1)),lt={class:"q-mt-sm"},tt={key:2,class:"q-pa-sm"},at={class:"row q-col-gutter-sm"},st={key:3,class:"q-pa-sm"},ot={class:"text-center error_msg"},nt={border:"1",style:{width:"100%","border-collapse":"collapse"}},ut=V(()=>o("tr",null,[o("th",{class:"text-center q-pa-sm"},"Amount Paid"),o("th",{class:"text-center q-pa-sm"},"Balance"),o("th",{class:"text-center q-pa-sm"},"Mode"),o("th",{class:"text-center q-pa-sm"},"Cleared By"),o("th",{class:"text-center q-pa-sm"},"Cleared On")],-1)),it={class:"text-center q-pa-sm"},rt={class:"text-center q-pa-sm"},dt={class:"text-center q-pa-sm"},ct={class:"text-center q-pa-sm"},mt={class:"text-center q-pa-sm"},_t={class:"text-center q-ma-sm"},ft=["max"],vt=V(()=>o("br",null,null,-1)),bt={key:0},pt=["max"],gt={__name:"Bills",setup(m){const R=Vl(),N=Sl(),E=$l(),j=c("2019/03/01"),W=c("2019/03/01"),J=new Date().toISOString().split("T")[0],r=rl({from:"",to:""}),K=()=>I.value=!0,I=c(!1),se=c(""),U=Ql(),he=Bl(),we=Dl(),T=c(!1),_=c(!1),Z=c(!1),L=c(""),H=c(!0),Y=c(!1),x=c(1),p=c(1),oe=c(1),$=c(1),X=c(""),C=c(""),v=c(""),h=c(""),P=c(""),z=c([]),A=c([]),ee=c("");N.loading.show({message:"Please Wait. Fetching today's bills",boxClass:"bg-primary text-white",spinnerColor:"white"});const Q=c([]),{isLoading:ke,isError:ce}=Pe("bills",()=>U.fetchBills(),{onSuccess:a=>{N.loading.hide(),ee.value=`(Today). ${a==null?void 0:a.length} Records`,A.value=a.map(l=>({user:l.user,uuid:l.uuid,bill_ref:l.bill_ref,debtor_name:l.debtor_name,total_debt_paid:l.total_debt_paid,debt_records:l.debt_records,status:l.status,payment_mode:l.payment_mode,selling_price:l.selling_price,actual_selling_price:l.actual_selling_price,created_at:l.created_at,sales:l.sales})),Q.value=A.value}}),Ce=()=>{j.value=W.value;let a=je(r.from),l=je(r.to),e={};parseInt(a.diff(l,"seconds"))>=0?(e.from=r.from,e.to=r.to):(e.from=r.to,e.to=r.from),me(e),N.loading.show({message:`Please Wait. Fetching data between ${r.from} - ${r.to}`,boxClass:"bg-indigo text-white",spinnerColor:"white"})},{mutate:me}=Tl(a=>U.fetchBillsInDateRange(a),{onSuccess:a=>{var l,e;ee.value=`(From:${r.from} - To: ${r.to}). ${(l=a==null?void 0:a.data)==null?void 0:l.length} Records.`,N.loading.hide(),A.value=(e=a==null?void 0:a.data)==null?void 0:e.map(n=>({user:n.user,uuid:n.uuid,bill_ref:n.bill_ref,debtor_name:n.debtor_name,total_debt_paid:n.total_debt_paid,debt_records:n.debt_records,status:n.status,payment_mode:n.payment_mode,selling_price:n.selling_price,actual_selling_price:n.actual_selling_price,created_at:n.created_at,sales:n.sales})),Q.value=A.value}});Pe("products",()=>he.fetchProducts(),{onSuccess:a=>{z.value=a.map(l=>({uuid:l.uuid,name:l.name,price:l.selling_price,category:l.category,department:l.department,quantity:l.quantity}))}});const{data:qe}=Pe("payment_modes",()=>we.fetchPaymentModes()),ne=c(z.value),g=a=>{C.value=a,T.value=!0},ue=a=>{L.value=a,Z.value=!0},M=()=>{L.value="",Z.value=!1},G=de(()=>{let a=0;return C.value.sales.forEach(l=>{a+=l.selling_price*l.quantity}),a}),We=a=>{C.value=a,Y.value=!0},Ke=()=>{P.value="",T.value=!1,v.value="",x.value=1,P.value=""},Ye=async()=>{if(_.value=!0,x.value>v.value.quantity)P.value=`${x.value} is more than the maximum available quantity`,B(`${x.value} is more than the maximum available quantity`,"red","top");else{const a=await U.addProductToBill({bill_uuid:C.value.uuid,uuid:v.value.uuid,name:v.value.name,selling_price:v.value.price,quantity:x.value,product_uuid:v.value.uuid});a.status=="success"?(R.refetchQueries("bills"),C.value="",T.value=!1,_.value=!1,B(a.message,"green","top")):(_.value=!1,C.value="",T.value=!1,B(a.message,"red","top"))}},Ge=()=>{Y.value=!1,h.value="",P.value=""},Je=async a=>{if(_.value=!0,confirm("Are you sure?")){const e=await U.removeProductFromBill({product_uuid:a.uuid,product_name:a.name,quantity:a.quantity});e.status=="success"?(R.refetchQueries("bills"),_.value=!1,B(e.message,"green","top")):(C.value="",_.value=!1,T.value=!1,B(e.message,"red","top"))}},Ze=async a=>{if(_.value=!0,confirm("Are you sure?")){const e=await U.deleteBill({bill_uuid:a.uuid});e.status=="success"?(R.refetchQueries("bills"),_.value=!1,B(e.message,"green","top")):(_.value=!1,C.value="",T.value=!1,B(e.message,"red","top"))}},Xe=async()=>{_.value=!0;let a=[];C.value.sales.forEach(e=>a.push({name:e.name,quantity:e.quantity,uuid:e.uuid}));const l={bill_uuid:C.value.uuid,products:a,payment_mode_uuid:h.value.uuid,bill_status:"sold",debtor_name:X.value.trim()};if(h.value.name==="Mpesa & Cash"){const e=Number(oe.value)+Number($.value);l.selling_price=e,l.actual_selling_price=e}else H.value?(l.selling_price=Number(G.value),l.actual_selling_price=Number(G.value)):(l.selling_price=Number(G.value),l.actual_selling_price=Number(p.value));if(l.actual_selling_price&&l.payment_mode_uuid)if(h.value.name==="Debt"&&!X.value)alert("Debtor name is required."),P.value="Debtor name is required.",_.value=!1;else{const e=await U.updateSaleOperation(l);e.status==="success"?(R.refetchQueries("bills"),h.value="",x.value="",Y.value=!1,_.value=!1,B(e.message,"green","top")):(P.value=e.message,B(e.message,"red","top-right"))}else _.value=!1,P.value="Name is required!",B("Name is required!","red","top-right")},el=(a,l)=>{a.length>0&&(z.value.includes(a)||z.value.push(a),l(a,"toggle"))},ll=(a,l)=>{l(()=>{if(a==="")ne.value=z.value;else{const e=a.toLowerCase();ne.value=z.value.filter(n=>n.name.toLowerCase().indexOf(e)>-1)}})},Ve=a=>{const l=[];a.sales.forEach(n=>{l.push({name:n.name,quantity:n.quantity,price:n.selling_price,total:n.quantity*n.selling_price})});const e={title:"Sales Receipt",bill_ref:a.bill_ref,created_at:a.created_at,status:a.status==="sold"?"Sold":"Pending Payment",user:a.user,payment_mode:a.payment_mode,actual_selling_price:a.actual_selling_price,debtor_name:a.debtor_name};Al(l,["name","quantity","price","total"],e)},B=(a,l,e)=>{N.notify({message:a,color:l,position:e})};return(a,l)=>(u(),q("div",Ml,[k(ke)?(u(),q("div",Ol,"Loading bills...")):k(ce)?(u(),q("div",Nl,"An error has occurred: "+i(k(ce)),1)):(u(),b(ml,{key:2,grid:"",flat:"",bordered:"",title:`Sold/Pending Bills ${ee.value}`,rows:A.value,"row-key":"bill_ref",filter:se.value},{"top-right":s(()=>[t(be,{class:"q-mr-sm q-mb-sm"},{default:s(()=>[t(f,{icon:"list",size:"sm",color:"primary",label:"All Bills",onClick:l[0]||(l[0]=()=>k(R).refetchQueries("bills"))}),t(f,{icon:"timeline",size:"sm",color:"blue",label:"Sold Bills",onClick:l[1]||(l[1]=e=>{var n;return A.value=(n=Q.value)==null?void 0:n.filter(w=>w.status==="sold")})}),t(f,{icon:"pan_tool",size:"sm",color:"brown",label:"Pending Bills",onClick:l[2]||(l[2]=e=>{var n;return A.value=(n=Q.value)==null?void 0:n.filter(w=>w.status==="pending")})}),t(f,{icon:"pan_tool",size:"sm",color:"orange",label:"Clear Bills",to:"/clear_bills"}),t(f,{icon:"event",size:"sm",color:"indigo",label:"Calendar (Older Bills)",onClick:l[3]||(l[3]=e=>K())})]),_:1}),t(te,{dense:"",debounce:"300",outlined:"",modelValue:se.value,"onUpdate:modelValue":l[4]||(l[4]=e=>se.value=e),placeholder:"Search"},{append:s(()=>[t(_e,{name:"search"})]),_:1},8,["modelValue"])]),item:s(e=>[o("div",El,[t(re,{bordered:"",class:fe(`${e.row.status=="pending"?"sale_pending":""}`)},{default:s(()=>[o("div",{class:fe(["text-center q-pa-xs",`${e.row.payment_mode==="Debt"?"debt_bill":"bill"}`])},[o("small",null,[o("strong",null,[t(_e,{name:"description",style:{"margin-bottom":"2px"}}),d(" BILL-"+i(e.row.bill_ref),1)])])],2),t(F,{style:{padding:"2px"}},{default:s(()=>[e.row.status==="pending"?(u(),b(ge,{key:0},{default:s(()=>[o("strong",null," Created by : "+i(e.row.user),1),t(O),t(be,{flat:""},{default:s(()=>{var n,w,S;return[t(f,{outline:"",rounded:"",size:"sm",color:"blue",icon:"add",onClick:le=>g(e.row)},{default:s(()=>[t(Se,null,{default:s(()=>[d(" Add More Items to this bill. ")]),_:1})]),_:2},1032,["onClick"]),k(ye)((S=(w=(n=k(E))==null?void 0:n.user)==null?void 0:w.user)==null?void 0:S.roles)?(u(),b(f,{key:0,size:"sm",outline:"",rounded:"",color:"red",icon:"delete",onClick:le=>Ze(e.row),loading:_.value},{default:s(()=>[t(Se,null,{default:s(()=>[d(" Delete this bill ")]),_:1})]),_:2},1032,["onClick","loading"])):y("",!0)]}),_:2},1024)]),_:2},1024)):(u(),q("div",Il,[o("strong",null," Created by : "+i(e.row.user),1),t(O)])),t(ie,{class:"q-mb-sm"}),o("div",Ul,[o("small",null,"Created On : "+i(e.row.created_at),1),d(),Ll,o("small",null,[e.row.payment_mode==="Debt"?(u(),b(ae,{key:0,color:"blue"},{default:s(()=>[d("Status : "+i(e.row.status)+" ",1),Hl,d(" Mode : "+i(e.row.payment_mode),1)]),_:2},1024)):(u(),b(ae,{key:1,color:`${e.row.status=="pending"?"red":""}`},{default:s(()=>[d("Status : "+i(e.row.status)+" ",1),zl,d(" Mode : "+i(e.row.payment_mode),1)]),_:2},1032,["color"]))])]),t(ie,{class:"q-mb-sm"}),o("small",null,[t(ze,{dense:"",bordered:"",separator:"",class:fe(`${e.row.payment_mode==="Debt"?"debt_bill":"bill"}`)},{default:s(()=>[t(Fe,null,{default:s(()=>{var n,w,S;return[t(D,null,{default:s(()=>[d("Name")]),_:1}),t(D,null,{default:s(()=>[d("Price")]),_:1}),t(D,{style:{color:"white"}},{default:s(()=>[d("Quantity")]),_:1}),t(D,{style:{color:"white"}},{default:s(()=>[d("Total")]),_:1}),k(ye)((S=(w=(n=k(E))==null?void 0:n.user)==null?void 0:w.user)==null?void 0:S.roles)&&e.row.status==="pending"&&e.row.sales.length>1?(u(),b(D,{key:0},{default:s(()=>[d("Action")]),_:1})):y("",!0)]}),_:2},1024)]),_:2},1032,["class"])]),o("small",null,[t(ze,{dense:"",bordered:"",separator:""},{default:s(()=>[(u(!0),q(Me,null,Oe(e.row.sales,(n,w)=>(u(),b(Fe,{key:w},{default:s(()=>{var S,le,Te;return[t(D,null,{default:s(()=>[d(i(n.name),1)]),_:2},1024),t(D,null,{default:s(()=>[d(i(n.selling_price),1)]),_:2},1024),t(D,null,{default:s(()=>[d(i(n.quantity),1)]),_:2},1024),t(D,null,{default:s(()=>[d(i((n.quantity*n.selling_price).toFixed(2)),1)]),_:2},1024),k(ye)((Te=(le=(S=k(E))==null?void 0:S.user)==null?void 0:le.user)==null?void 0:Te.roles)&&e.row.status==="pending"&&e.row.sales.length>1?(u(),b(D,{key:0},{default:s(()=>[t(_e,{name:"delete",size:"xs",color:"red",onClick:yt=>Je(n),style:{cursor:"pointer"}},{default:s(()=>[t(Se,null,{default:s(()=>[d(" Return/Remove "+i(n.name)+" from this bill ",1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024)):y("",!0)]}),_:2},1024))),128))]),_:2},1024)])]),_:2},1024),t(ie),e.row.selling_price>0?(u(),b(F,{key:0,class:"text-center"},{default:s(()=>{var n;return[e.row.payment_mode==="Debt"?(u(),q("p",Fl,[d(" Debtor: "+i(e.row.debtor_name)+" ",1),Rl,o("b",null,"Amount due Ksh "+i(e.row.selling_price),1)])):(u(),q("b",jl,"Price Ksh "+i(e.row.selling_price),1)),((n=e.row.debt_records)==null?void 0:n.length)>0?(u(),q("p",Wl,[t(f,{flat:"",size:"sm",label:"Click to View Payment History",color:"orange",onClick:w=>ue(e.row)},null,8,["onClick"])])):y("",!0),Kl]}),_:2},1024)):y("",!0),t(F,{style:{padding:"0"}},{default:s(()=>[e.row.status==="sold"?(u(),b(f,{key:0,class:"full-width",dense:"",flat:"",onClick:n=>Ve(e.row),label:"Print Bill",icon:"print",color:`${e.row.payment_mode==="Debt"?"blue":"primary"}`},null,8,["onClick","color"])):(u(),b(be,{key:1,class:"full-width"},{default:s(()=>{var n,w,S;return[t(f,{class:"full-width",dense:"",flat:"",onClick:le=>Ve(e.row),label:"Print Bill",icon:"print",color:"primary"},null,8,["onClick"]),k(ye)((S=(w=(n=k(E))==null?void 0:n.user)==null?void 0:w.user)==null?void 0:S.roles)?(u(),b(f,{key:0,dense:"",flat:"",push:"",color:"orange",class:"full-width",label:"Sale",icon:"grain",onClick:le=>We(e.row)},null,8,["onClick"])):y("",!0)]}),_:2},1024))]),_:2},1024)]),_:2},1032,["class"])])]),_:1},8,["title","rows","filter"])),t(pe,{modelValue:T.value,"onUpdate:modelValue":l[7]||(l[7]=e=>T.value=e),persistent:""},{default:s(()=>[t(re,{style:{width:"500px"}},{default:s(()=>[t(F,null,{default:s(()=>[t(ge,null,{default:s(()=>[Yl,t(O),v.value?(u(),q("small",Gl,[t(ae,{class:"q-mr-sm",color:"blue"},{default:s(()=>[d("Price: "+i(v.value.price),1)]),_:1}),t(ae,{class:"q-mr-sm",color:"blue"},{default:s(()=>[d("Category: "+i(v.value.category),1)]),_:1}),t(ae,{class:"q-mr-sm",color:"blue"},{default:s(()=>[d("Current Qty: "+i(v.value.quantity),1)]),_:1}),Jl,t(ae,{class:"q-mr-sm",color:"blue"},{default:s(()=>[d("Department: "+i(v.value.department),1)]),_:1})])):y("",!0)]),_:1}),Zl,t(Ee,{dense:"","use-input":"",outlined:"",modelValue:v.value,"onUpdate:modelValue":l[5]||(l[5]=e=>v.value=e),"input-debounce":"0",onNewValue:el,options:ne.value,onFilter:ll,"option-value":"uuid","option-label":"name",label:"Select Product to add",hint:"You can type in the product name for quick search..."},null,8,["modelValue","options"])]),_:1}),t(F,{class:"q-pt-none"},{default:s(()=>[v.value?(u(),b(te,{key:0,outlined:"",dense:"",label:"Product Quantity",modelValue:x.value,"onUpdate:modelValue":l[6]||(l[6]=e=>x.value=e),type:"number",hint:`Note : You can sale a maximum of ${v.value.quantity}`},null,8,["modelValue","hint"])):y("",!0)]),_:1}),o("div",Xl,[o("small",null,i(P.value),1)]),t(xe,{align:"right"},{default:s(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:Ke}),t(O),x.value&&v.value?(u(),b(f,{key:0,flat:"",label:"Add Product",color:"primary",onClick:Ye,loading:_.value},null,8,["loading"])):y("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(pe,{modelValue:Y.value,"onUpdate:modelValue":l[14]||(l[14]=e=>Y.value=e),persistent:""},{default:s(()=>[t(re,{style:{width:"500px"}},{default:s(()=>[t(ge,null,{default:s(()=>[et,t(O),o("small",lt,[t(f,{disabled:h.value.name==="Mpesa & Cash",size:"sm",color:"blue",depressed:"",class:fe(`${H.value?"":"actual_selling_price"}`),onClick:l[8]||(l[8]=e=>H.value=!H.value),label:`Expected Selling Price : ${G.value}`},null,8,["disabled","class","label"])])]),_:1}),t(F,{class:"q-pt-none"},{default:s(()=>[!H.value&&h.value.name!=="Mpesa & Cash"?(u(),b(te,{key:0,autofocus:"",outlined:"",dense:"",label:"Actual Selling Price",modelValue:p.value,"onUpdate:modelValue":l[9]||(l[9]=e=>p.value=e),class:"q-pa-xs col-xs-12 col-sm-6 col-md-6 q-mb-sm",type:"number"},null,8,["modelValue"])):y("",!0),p.value&&p.value>0?(u(),b(Ee,{key:1,dense:"",outlined:"",modelValue:h.value,"onUpdate:modelValue":l[10]||(l[10]=e=>h.value=e),options:k(qe).filter(e=>e.name!=="Debt"),"option-value":"uuid","option-label":"name",label:"Select Payment Mode"},null,8,["modelValue","options"])):y("",!0),h.value.name==="Mpesa & Cash"?(u(),q("div",tt,[o("div",at,[t(te,{outlined:"",dense:"",class:"col-6",label:"Mpesa Amount",type:"number",modelValue:oe.value,"onUpdate:modelValue":l[11]||(l[11]=e=>oe.value=e)},null,8,["modelValue"]),t(te,{outlined:"",dense:"",class:"col-6",label:"Cash Amount",type:"number",modelValue:$.value,"onUpdate:modelValue":l[12]||(l[12]=e=>$.value=e)},null,8,["modelValue"])])])):y("",!0),h.value.name==="Debt"?(u(),q("div",st,[t(te,{outlined:"",modelValue:X.value,"onUpdate:modelValue":l[13]||(l[13]=e=>X.value=e),dense:"",label:"Debtor Name"},null,8,["modelValue"])])):y("",!0)]),_:1}),o("div",ot,[o("small",null,i(P.value),1)]),t(xe,{align:"right"},{default:s(()=>[t(f,{flat:"",label:"Cancel",color:"red",onClick:Ge}),t(O),p.value&&h.value?(u(),b(f,{key:0,flat:"",label:"Sale",color:"primary",onClick:Xe,loading:_.value},null,8,["loading"])):y("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(pe,{modelValue:Z.value,"onUpdate:modelValue":l[16]||(l[16]=e=>Z.value=e),persistent:""},{default:s(()=>[t(re,null,{default:s(()=>[t(ge,{class:"bg-orange text-white q-mb-sm"},{default:s(()=>[o("b",null,"Payment History for BILL-"+i(L.value.bill_ref)+". ",1),t(O),o("b",null,"Name: "+i(L.value.debtor_name)+". ",1)]),_:1}),t(F,{class:"q-pt-none"},{default:s(()=>[o("small",null,[o("table",nt,[ut,(u(!0),q(Me,null,Oe(L.value.debt_records,e=>(u(),q("tr",{key:e.uuid},[o("td",it,i(e.amount_paid),1),o("td",rt,i(e.balance),1),o("td",dt,i(e.payment_mode),1),o("td",ct,i(e.user),1),o("td",mt,i(e.created_at),1)]))),128))])])]),_:1}),t(xe,null,{default:s(()=>[t(f,{dense:"",flat:"",label:`Total Paid: ${L.value.total_debt_paid}`,color:"primary",disabled:""},null,8,["label"]),t(O),t(f,{dense:"",outline:"",label:"Close History",color:"primary",onClick:l[15]||(l[15]=e=>M())})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(pe,{modelValue:I.value,"onUpdate:modelValue":l[19]||(l[19]=e=>I.value=e),persistent:""},{default:s(()=>[t(re,{class:"bg-indigo text-white text-center q-pa-sm",style:{width:"300px"}},{default:s(()=>[o("div",_t,[o("b",null,[t(_e,{name:"events"}),d(" Date Picker")])]),t(ie,{color:"white"}),t(F,null,{default:s(()=>[o("div",null,[d(" From : "),ve(o("input",{type:"date","onUpdate:modelValue":l[17]||(l[17]=e=>r.from=e),max:k(J)},null,8,ft),[[Ne,r.from]])]),vt,r.from?(u(),q("div",bt,[d(" To : "),ve(o("input",{type:"date","onUpdate:modelValue":l[18]||(l[18]=e=>r.to=e),max:k(J)},null,8,pt),[[Ne,r.to]])])):y("",!0)]),_:1}),t(ie,{color:"yellow"}),t(be,{flat:"",class:"full-width"},{default:s(()=>[ve(t(f,{dense:"",label:"Cancel",color:"yellow",flat:""},null,512),[[Re]]),t(O),r.to?ve((u(),b(f,{key:0,dense:"",label:"Fetch Bills",color:"white",flat:"",onClick:Ce},null,512)),[[Re]]):y("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};var Ut=il(gt,[["__scopeId","data-v-278b273c"]]);export{Ut as default};
