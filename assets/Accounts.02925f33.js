import{b as Y,Q as b,a as o}from"./module_calls.989c0caf.js";import{Q as T}from"./QSeparator.ffdac132.js";import{Q,b as B}from"./QCard.4139f65f.js";import{r as S,j as te,aR as se,aJ as y,a4 as M,a5 as j,c9 as oe,a6 as k,a7 as s,d as e,bb as a,bD as V,ad as n,bE as $,Q as d,N as U,aM as de,aK as re,u as h}from"./index.fc66475f.js";import{Q as I}from"./QInput.2b1a0127.js";import{Q as ne}from"./QBtnGroup.e6cf4fa1.js";import{Q as ue,c as K}from"./QSpace.74b5c1e7.js";import{Q as q}from"./QBadge.4ec499f3.js";import{Q as ce}from"./QToolbar.29edd303.js";import{l as ie,k as _e}from"./rtl.a8d43dfe.js";import{e as me,a as fe}from"./excel.5d19a2ad.js";import{a as pe}from"./use-quasar.9c48bb42.js";import{u as F,a as he}from"./index.afa155a1.js";import{u as be}from"./account-store.0a8d12f0.js";import{u as xe}from"./auth-store.735906a3.js";import{h as P}from"./helpers.6384b5cb.js";import{h as ve}from"./moment.9709ab41.js";import{u as ye}from"./sale-store.5454a2aa.js";const R=[{name:"production_cost",required:!0,label:"Expense",align:"left",field:r=>r.production_cost,format:r=>`${r}`,sortable:!0},{name:"total_sales",required:!0,label:"Expected Sales",align:"left",field:r=>r.total_sales,format:r=>`${r}`,sortable:!0},{name:"expected_cash",align:"center",label:"Expected Cash",field:"expected_cash",sortable:!0},{name:"expected_mpesa",align:"center",label:"Expected Mpesa",field:"expected_mpesa",sortable:!0},{name:"actual_cash",align:"center",label:"Actual Cash",field:"actual_cash",sortable:!0},{name:"actual_mpesa",align:"center",label:"Actual Mpesa",field:"actual_mpesa",sortable:!0},{name:"user",align:"center",label:"Created By",field:"user",sortable:!0},{name:"created_at",align:"center",label:"Created On",field:"created_at",sortable:!0}],ge={__name:"Line",setup(r){const p=ye();F("sales",()=>p.fetchSevenDaysSales(),{onSuccess:m=>{var v,c,f,i;t.xaxis.categories=(v=m.map(_=>_.day))==null?void 0:v.reverse(),g.value[0].data=(c=m.map(_=>_.sales))==null?void 0:c.reverse(),g.value[1].data=(f=m.map(_=>_.expense))==null?void 0:f.reverse(),g.value[2].data=(i=m.map(_=>_.difference))==null?void 0:i.reverse()}});const g=S([{name:"Sales",data:[]},{name:"Expense",data:[]},{name:"Difference (Sales - Expense)",data:[]}]),t=te({chart:{height:350,type:"line",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},toolbar:{show:!1}},colors:["#017951","#FF0000","#000000"],dataLabels:{enabled:!0},stroke:{curve:"smooth"},title:{text:"Sales, Expenses and Difference",align:"left"},grid:{borderColor:"#31CCEC",row:{colors:["#f3f3f3","transparent"],opacity:.5},column:{colors:["#f3f3f3","transparent"]},xaxis:{lines:{show:!0}}},markers:{size:1},xaxis:{categories:[],title:{text:"Date/Days"}},yaxis:{title:{text:"Amount"}},legend:{position:"top",horizontalAlign:"right",floating:!0,offsetY:-25,offsetX:-5}});return(m,v)=>{const c=se("apexchart");return g.value[0].data.length?(y(),M(c,{key:0,type:"line",height:"348",options:t,series:g.value},null,8,["options","series"])):j("",!0)}}};const O=r=>(de("data-v-bf4a88f4"),r=r(),re(),r),we={class:"row q-col-gutter-sm q-mb-sm"},Se={class:"col-lg-3 col-md-3 col-sm-12 col-xs-12"},Ce={class:"text-center q-pa-xs"},Ae={style:{color:"#017951"}},ke={class:"desktop_stats q-pa-sm"},Ee={class:"q-pa-xs"},qe=O(()=>s("hr",null,null,-1)),Qe={class:"q-ma-sm small_text"},$e={class:"q-pa-xs"},Le=O(()=>s("hr",null,null,-1)),Ne={class:"q-ma-sm small_text"},De={class:"q-pa-xs"},Ve={key:0},Te={key:1},Be=O(()=>s("hr",null,null,-1)),Me={class:"q-ma-sm small_text"},je={class:"mobile_stats q-pa-sm"},ze={key:0},Ie={key:1},Pe={class:"col-lg-9 col-md-9 col-sm-12 col-xs-12"},Ye={class:"text-center q-pa-sm"},Ue={style:{color:"#017951"}},Fe={__name:"AccountsBarCharts",props:["account_store"],setup(r){const p=g=>{if(g)return Number(g.split(",").join(""))};return(g,t)=>(y(),k("div",we,[s("div",Se,[e(Q,{flat:"",style:{"border-radius":"8px"}},{default:a(()=>{var m,v;return[s("div",Ce,[s("b",Ae,[e(V,{name:"grain"}),n(" Today")])]),e(T,{color:"primary"}),s("div",ke,[s("div",Ee,[e(Q,{dark:"",class:"shadow-2 total_grad card_border"},{default:a(()=>[e(B,{class:"text-center"},{default:a(()=>{var c;return[n(" Total Sales "),e($,{size:"xs",flat:"",label:"view more",to:"/sales"}),qe,s("h6",Qe,d((c=r.account_store)==null?void 0:c.total_daily_sales),1)]}),_:1})]),_:1})]),s("div",$e,[e(Q,{dark:"",class:"shadow-2 expense_grad card_border"},{default:a(()=>[e(B,{class:"text-center"},{default:a(()=>{var c;return[n(" Total Expense "),e($,{size:"xs",flat:"",label:"view more",to:"/inventories"}),Le,s("h6",Ne,d((c=r.account_store)==null?void 0:c.total_daily_expense),1)]}),_:1})]),_:1})]),s("div",De,[e(Q,{dark:"",class:U(`${p((m=r.account_store)==null?void 0:m.total_daily_sales)-p((v=r.account_store)==null?void 0:v.total_daily_expense)>0?"shadow-2 bg-blue card_border":"shadow-2 bg-red card_border"}`)},{default:a(()=>[e(B,{class:"text-center"},{default:a(()=>{var c,f,i,_;return[p((c=r.account_store)==null?void 0:c.total_daily_sales)-p((f=r.account_store)==null?void 0:f.total_daily_expense)>0?(y(),k("span",Ve," Profit ")):(y(),k("span",Te,"Loss")),Be,s("h6",Me,d((p((i=r.account_store)==null?void 0:i.total_daily_sales)-p((_=r.account_store)==null?void 0:_.total_daily_expense)).toLocaleString()),1)]}),_:1})]),_:1},8,["class"])])]),s("div",je,[e(Y,{bordered:""},{default:a(()=>{var c,f;return[e(b,{dark:"",class:"total_grad card_border"},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(V,{name:"blur_on"})]),_:1}),e(o,null,{default:a(()=>[n("Total")]),_:1}),e(o,{side:""},{default:a(()=>{var i;return[s("b",null,d((i=r.account_store)==null?void 0:i.total_daily_sales),1)]}),_:1})]),_:1}),e(T),e(b,{dark:"",class:"expense_grad card_border"},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(V,{name:"blur_on"})]),_:1}),e(o,null,{default:a(()=>[n("Expense")]),_:1}),e(o,{side:""},{default:a(()=>{var i;return[s("b",null,d((i=r.account_store)==null?void 0:i.total_daily_expense),1)]}),_:1})]),_:1}),e(T),e(b,{dark:"",class:U(`${p((c=r.account_store)==null?void 0:c.total_daily_sales)-p((f=r.account_store)==null?void 0:f.total_daily_expense)>0?"bg-blue card_border":"bg-red card_border"}`)},{default:a(()=>[e(o,{avatar:""},{default:a(()=>[e(V,{name:"blur_on"})]),_:1}),e(o,null,{default:a(()=>{var i,_;return[p((i=r.account_store)==null?void 0:i.total_daily_sales)-p((_=r.account_store)==null?void 0:_.total_daily_expense)>0?(y(),k("span",ze," Profit ")):(y(),k("span",Ie,"Loss"))]}),_:1}),e(o,{side:""},{default:a(()=>{var i,_;return[s("b",null,d((p((i=r.account_store)==null?void 0:i.total_daily_sales)-p((_=r.account_store)==null?void 0:_.total_daily_expense)).toLocaleString()),1)]}),_:1})]),_:1},8,["class"])]}),_:1})])]}),_:1})]),s("div",Pe,[e(Q,{style:{"border-radius":"8px"}},{default:a(()=>[s("div",Ye,[s("b",Ue,[e(V,{name:"grain"}),n(" Last Seven Days")])]),e(T,{color:"primary"}),e(ge)]),_:1})])]))}};var Oe=oe(Fe,[["__scopeId","data-v-bf4a88f4"]]);const Ge={class:"q-pa-md"},Je={key:0},Ke={key:1},Re=["onClick"],Xe={style:{color:"white"}},He={style:{color:"white"}},We={style:{color:"white"}},Ze=s("small",null,[s("i",null,"(Total Sales - Expenses)")],-1),ea=s("br",null,null,-1),aa=s("small",null,[s("i",null,"(Total Sales - Expense)")],-1),la={class:"text-center q-pt-sm"},ta={class:"text-h6"},sa={style:{"text-align":"center"}},oa=s("i",null,"Expected Values",-1),da=s("hr",null,null,-1),ra=s("br",null,null,-1),na=s("br",null,null,-1),ua={class:"text-center error_msg"},qa={__name:"Accounts",setup(r){const p=pe(),g=he(),t=be(),m=xe(),v=S(!1),c=S(!1),f=S(!1),i=S(""),_=S(""),w=S(0),A=S(0),z=S(""),L=S(""),{data:G,isLoading:X,isError:J}=F("accounts",()=>t.fetchAccounts());F("account_stats_today",()=>t.fetchTodaySalesStats());const H=()=>{_.value="Close Accounts for the day",v.value=!0,c.value=!1},W=x=>{var u,l;P((l=(u=m==null?void 0:m.user)==null?void 0:u.user)==null?void 0:l.roles)?(c.value=!0,_.value=`Edit Account for ${x.created_at}`,z.value=x.uuid,w.value=x.actual_cash,A.value=x.actual_mpesa,v.value=!0):alert("You are not authorized to edit the accounts. Contact admin.")},Z=async()=>{var x,u,l,N;if(f.value=!0,L.value="",P((u=(x=m==null?void 0:m.user)==null?void 0:x.user)==null?void 0:u.roles)){const D={user_departments:(N=(l=m==null?void 0:m.user)==null?void 0:l.user)==null?void 0:N.departments.map(C=>C.name),actual_cash:Number(w.value),actual_mpesa:Number(A.value),expected_cash:Number(t==null?void 0:t.total_daily_cash_sales.split(",").join("")),expected_mpesa:Number(t==null?void 0:t.total_daily_mpesa_sales.split(",").join("")),expected_mpesa_cash:Number(t==null?void 0:t.total_daily_mpesa_cash_sales.split(",").join("")),expected_card:Number(t==null?void 0:t.total_daily_card_sales.split(",").join("")),expected_debt:Number(t==null?void 0:t.total_daily_debt_sales.split(",").join("")),total_sales:Number(t==null?void 0:t.total_daily_sales.split(",").join("")),total_expense:Number(t==null?void 0:t.total_daily_expense.split(",").join(""))};if(D.actual_cash||D.actual_mpesa){const C=await t.createAccount(D);C.status==="success"?(g.refetchQueries("accounts"),w.value=1,A.value=1,v.value=!1,E(C.message,"green","top"),f.value=!1):(L.value=C.message,E(C.message,"red","top-right"),f.value=!1)}else L.value="Either actual cash or mpesa should be greater than zero!",E("Either actual cash or mpesa should be greater than zero!","red","top-right"),f.value=!1}else E("Permission denied! Only cashier or admin is allowed","red","top")},ee=async()=>{f.value=!0;const x={account_uuid:z.value,actual_cash:Number(w.value),actual_mpesa:Number(A.value),expected_cash:t==null?void 0:t.total_daily_cash_sales,expected_mpesa:t==null?void 0:t.total_daily_mpesa_sales,expected_mpesa_cash:t==null?void 0:t.total_daily_mpesa_cash_sales,expected_card:t==null?void 0:t.total_daily_card_sales,expected_debt:t==null?void 0:t.total_daily_debt_sales,total_sales:t==null?void 0:t.total_daily_sales,total_expense:t==null?void 0:t.total_daily_expense};if(x.actual_cash&&x.actual_mpesa){const u=await t.updateAccount(x);u.status==="success"?(g.refetchQueries("accounts"),w.value=1,A.value=1,v.value=!1,c.value=!1,_.value="",E(u.message,"green","top"),f.value=!1):(f.value=!1,E("There was an error","red","top-right"))}else L.value="Name is required!",E("Name is required!","red","top-right"),f.value=!1},ae=()=>{v.value=!1,w.value=1,A.value=1,z.value="",L.value=""},E=(x,u,l)=>{p.notify({message:x,color:u,position:l})},le=x=>{const u=x.map(l=>({name:l.name,users:l.users.length,created_at:l.created_at}));me(u,R,fe,p,"AccountsData")};return(x,u)=>(y(),k("div",Ge,[e(Oe,{account_store:h(t)},null,8,["account_store"]),h(X)?(y(),k("div",Je,"Loading accounts...")):h(J)?(y(),k("div",Ke,"An error has occurred: "+d(h(J)),1)):(y(),M(ue,{key:2,title:"Accounts",rows:h(G),columns:h(R),separator:"cell","row-key":"name",filter:i.value,dense:"",grid:""},{item:a(l=>[s("div",{class:"q-pa-xs col-xs-12 col-sm-6 col-md-4 select_account",style:{cursor:"pointer"},onClick:N=>W(l.row)},[e(Q,{bordered:"",ripple:"",style:{border:"1px solid orange"},class:U(`${h(ve)().format("DD-MM-YYYY")!==l.row.valid_date?"dark old_account":""} `)},{default:a(()=>[e(B,null,{default:a(()=>[e(Y,{dense:"",bordered:"",separator:""},{default:a(()=>[e(b,{class:"bg-primary text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Created on ")]),_:1}),e(o,{side:""},{default:a(()=>[s("span",Xe,d(l.row.created_at),1)]),_:2},1024)]),_:2},1024),e(b,{class:"bg-blue text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Accounts closed by ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",He,d(l.row.user),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Total Sales ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.total_sales.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Cash ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_cash.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Mpesa ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_mpesa.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Mpesa & Cash")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_mpesa_cash.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Card")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_card.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Debt")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_debt.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,{class:"bg-orange text-white"},{default:a(()=>[e(o,null,{default:a(()=>[n(" Expenses ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",We,d(l.row.production_cost.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Expected Profit "),Ze]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.expected_profit.toLocaleString()),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),e(T,{color:"primary"}),n(),ea,e(T,{color:"orange"}),e(Y,{dense:"",bordered:"",separator:""},{default:a(()=>[e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Total Sales ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_total_sales.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Cash ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_cash.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Mpesa ")]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_mpesa.toLocaleString()),1)]),_:2},1024)]),_:2},1024),e(b,null,{default:a(()=>[e(o,null,{default:a(()=>[n(" Actual Profit "),aa]),_:1}),e(o,{side:""},{default:a(()=>[s("b",null,d(l.row.actual_profit.toLocaleString()),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),s("div",la,[s("small",null,[s("i",null,"Department: "+d(l.row.department.toLocaleString()),1)])])]),_:2},1024)]),_:2},1032,["class"])],8,Re)]),"top-right":a(()=>{var l,N,D;return[e(I,{borderless:"",dense:"",outlined:"",rounded:"",debounce:"300",modelValue:i.value,"onUpdate:modelValue":u[0]||(u[0]=C=>i.value=C),placeholder:"Search",class:"q-mr-md"},{append:a(()=>[e(V,{name:"search"})]),_:1},8,["modelValue"]),h(P)((D=(N=(l=h(m))==null?void 0:l.user)==null?void 0:N.user)==null?void 0:D.roles)?(y(),M(ne,{key:0},{default:a(()=>[e($,{onClick:H,round:"",dense:"",color:"primary",size:"small",icon:"add",label:"Add"}),e($,{dense:"",flat:"",color:"primary","icon-right":"archive",label:"Export",class:"q-ml-sm","no-caps":"",onClick:u[1]||(u[1]=C=>le(h(G)))})]),_:1})):j("",!0)]}),_:1},8,["rows","columns","filter"])),e(ie,{modelValue:v.value,"onUpdate:modelValue":u[4]||(u[4]=l=>v.value=l),persistent:""},{default:a(()=>[e(Q,{style:{width:"700px"}},{default:a(()=>[e(ce,null,{default:a(()=>[s("div",ta,d(_.value),1),e(K),s("small",sa,[oa,da,e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Total: "+d((l=h(t))==null?void 0:l.total_daily_sales),1)]}),_:1}),e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Cash: "+d((l=h(t))==null?void 0:l.total_daily_cash_sales),1)]}),_:1}),e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Mpesa: "+d((l=h(t))==null?void 0:l.total_daily_mpesa_sales),1)]}),_:1}),ra,e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Mpesa & Cash: "+d((l=h(t))==null?void 0:l.total_daily_mpesa_cash_sales),1)]}),_:1}),e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Card: "+d((l=h(t))==null?void 0:l.total_daily_card_sales),1)]}),_:1}),e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Debt: "+d((l=h(t))==null?void 0:l.total_daily_debt_sales),1)]}),_:1}),na,e(q,{class:"q-mr-xs"},{default:a(()=>{var l;return[n("Expense: "+d((l=h(t))==null?void 0:l.total_daily_expense),1)]}),_:1})])]),_:1}),e(B,{class:"q-pt-none"},{default:a(()=>[e(I,{outlined:"",dense:"",label:"Actual Cash",modelValue:w.value,"onUpdate:modelValue":u[2]||(u[2]=l=>w.value=l),type:"number",min:"0",oninput:"validity.valid||(value='');"},null,8,["modelValue"])]),_:1}),e(B,{class:"q-pt-none"},{default:a(()=>[e(I,{outlined:"",dense:"",label:"Actual Mpesa",modelValue:A.value,"onUpdate:modelValue":u[3]||(u[3]=l=>A.value=l),type:"number",min:"0",oninput:"validity.valid||(value='');"},null,8,["modelValue"])]),_:1}),s("div",ua,[s("small",null,d(L.value),1)]),e(_e,{align:"right"},{default:a(()=>[e($,{flat:"",label:"Cancel",color:"red",onClick:ae}),e(K),w.value&&!c.value?(y(),M($,{key:0,flat:"",label:"Close Day",color:"primary",onClick:Z,loading:f.value},null,8,["loading"])):j("",!0),w.value&&c.value?(y(),M($,{key:1,flat:"",label:"Edit Account",color:"primary",onClick:ee,loading:f.value},null,8,["loading"])):j("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{qa as default};
