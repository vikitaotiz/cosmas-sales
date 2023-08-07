import{Q as P}from"./QPage.4ecd61c1.js";import{a as c,Q as n}from"./QCard.6389e115.js";import{g as u}from"./get-css-var.23548d6a.js";import{u as q}from"./index.96eab636.js";import{u as $}from"./sale-store.8d453813.js";import{j as S,r as C,aR as Q,aJ as m,a4 as g,bb as e,a5 as f,d as a,a7 as s,a6 as x,bD as b,ad as _,Q as d,u as o}from"./index.821cda5b.js";import{u as w}from"./account-store.201241c1.js";import{Q as k}from"./QSeparator.cb706664.js";import"./use-dark.3e9a724f.js";import"./module_calls.52760843.js";import"./helpers.dd8dddcc.js";const B={__name:"BarChart",setup(y){const l=$(),h=S({title:{text:"Sales Records for the last seven days",align:"left"},chart:{id:"apex-column"},colors:[u("primary"),u("secondary"),u("negative")],xaxis:{categories:[]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}}}),p=C([{name:"Sales",data:[]}]);return q("sales",()=>l.fetchSevenDaysSales(),{onSuccess:i=>{var r,t;h.xaxis.categories=(r=i.map(v=>v.day))==null?void 0:r.reverse(),p.value[0].data=(t=i.map(v=>v.sales))==null?void 0:t.reverse()}}),(i,r)=>{const t=Q("apexchart");return m(),g(c,{class:"q-pa-sm"},{default:e(()=>[p.value[0].data.length?(m(),g(t,{key:0,type:"bar",options:h,series:p.value},null,8,["options","series"])):f("",!0)]),_:1})}}},T={__name:"PieChart",setup(y){const l=w();q("today_product_sales",()=>l.fetchTodayProductSales(),{onSuccess:i=>{p.value=i.map(r=>r.quantity),h.labels=i.map(r=>r.name)}});const h=S({title:{text:"Todays Product Sales",align:"left"},chart:{id:"apex-donut"},colors:[u("secondary"),u("accent"),u("positive"),u("primary"),u("negative"),u("info")],markers:{size:4,hover:{sizeOffset:6}},labels:[]}),p=C([]);return(i,r)=>{const t=Q("apexchart");return m(),g(c,null,{default:e(()=>[a(n,null,{default:e(()=>[p.value.length>0?(m(),g(t,{key:0,type:"pie",options:h,series:p.value},null,8,["options","series"])):f("",!0)]),_:1})]),_:1})}}},D={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},N={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},M={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},V={__name:"Main",setup(y){return(l,h)=>(m(),g(P,null,{default:e(()=>[s("div",D,[s("div",N,[a(B)]),s("div",M,[a(T)])])]),_:1}))}},z={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},A={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},I={class:"text-center q-pa-sm"},O={style:{color:"#017951"}},R={class:"row q-pa-sm"},j={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},E=s("hr",null,null,-1),J={class:"q-ma-sm"},W={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},F=s("hr",null,null,-1),G={class:"q-ma-sm"},H={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},K=s("hr",null,null,-1),L={class:"q-ma-sm"},U={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},X=s("hr",null,null,-1),Y={class:"q-ma-sm"},Z={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},ss=s("hr",null,null,-1),ts={class:"q-ma-sm"},as={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},es=s("hr",null,null,-1),ls={class:"q-ma-sm"},os={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},cs=s("hr",null,null,-1),_s={class:"q-ma-sm"},ns={key:1,class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},ds=s("hr",null,null,-1),rs={class:"q-ma-sm"},is={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},ms={class:"text-center q-pa-sm"},us={style:{color:"#017951"}},hs={class:"row q-pa-sm"},ps={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},xs=s("hr",null,null,-1),fs={class:"q-ma-sm"},gs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},ys=s("hr",null,null,-1),qs={class:"q-ma-sm"},vs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},bs=s("hr",null,null,-1),ks={class:"q-ma-sm"},Ss={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Cs=s("hr",null,null,-1),Qs={class:"q-ma-sm"},ws={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Ps=s("hr",null,null,-1),$s={class:"q-ma-sm"},Bs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Ts=s("hr",null,null,-1),Ds={class:"q-ma-sm"},Ns={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Ms=s("hr",null,null,-1),Vs={class:"q-ma-sm"},zs={key:1,class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},As=s("hr",null,null,-1),Is={class:"q-ma-sm"},Os={__name:"Stats",setup(y){const l=w();return q("account_stats_today",()=>l.fetchTodaySalesStats()),q("account_stats_all",()=>l.fetchAllSalesStats()),(h,p)=>(m(),x("div",z,[s("div",A,[a(c,null,{default:e(()=>{var i,r;return[s("div",I,[s("b",O,[a(b,{name:"grain"}),_(" Today Sales")])]),a(k,{color:"primary"}),s("div",R,[s("div",j,[a(c,{dark:"",class:"bg-primary"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Total "),E,s("h5",J,d((t=o(l))==null?void 0:t.total_daily_sales),1)]}),_:1})]),_:1})]),s("div",W,[a(c,{dark:"",class:"bg-info"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Cash "),F,s("h5",G,d((t=o(l))==null?void 0:t.total_daily_cash_sales),1)]}),_:1})]),_:1})]),s("div",H,[a(c,{dark:"",class:"bg-warning"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Mpesa "),K,s("h5",L,d((t=o(l))==null?void 0:t.total_daily_mpesa_sales),1)]}),_:1})]),_:1})]),s("div",U,[a(c,{dark:"",class:"bg-indigo"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Mpesa & Cash "),X,s("h5",Y,d((t=o(l))==null?void 0:t.total_daily_mpesa_cash_sales),1)]}),_:1})]),_:1})]),s("div",Z,[a(c,{dark:"",class:"bg-dark"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Debts "),ss,s("h5",ts,d((t=o(l))==null?void 0:t.total_daily_debt_sales),1)]}),_:1})]),_:1})]),s("div",as,[a(c,{dark:"",class:"bg-brown"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Card "),es,s("h5",ls,d((t=o(l))==null?void 0:t.total_daily_card_sales),1)]}),_:1})]),_:1})]),((i=o(l))==null?void 0:i.total_daily_pending_sales)>0?(m(),x("div",os,[a(c,{dark:"",style:{"background-color":"red"}},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" No. of Pending Bills "),cs,s("h5",_s,d((t=o(l))==null?void 0:t.total_daily_pending_sales),1)]}),_:1})]),_:1})])):f("",!0),((r=o(l))==null?void 0:r.total_daily_pending_sales)>0?(m(),x("div",ns,[a(c,{dark:"",style:{"background-color":"teal"}},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Purchases/Inventory "),ds,s("h5",rs,d((t=o(l))==null?void 0:t.total_daily_expense),1)]}),_:1})]),_:1})])):f("",!0)])]}),_:1})]),s("div",is,[a(c,null,{default:e(()=>{var i,r;return[s("div",ms,[s("b",us,[a(b,{name:"grain"}),_(" All Sales")])]),a(k,{color:"primary"}),s("div",hs,[s("div",ps,[a(c,{dark:"",class:"bg-primary"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Total "),xs,s("h5",fs,d((t=o(l))==null?void 0:t.total_sales),1)]}),_:1})]),_:1})]),s("div",gs,[a(c,{dark:"",class:"bg-info"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Cash "),ys,s("h5",qs,d((t=o(l))==null?void 0:t.total_cash_sales),1)]}),_:1})]),_:1})]),s("div",vs,[a(c,{dark:"",class:"bg-warning"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Mpesa "),bs,s("h5",ks,d((t=o(l))==null?void 0:t.total_mpesa_sales),1)]}),_:1})]),_:1})]),s("div",Ss,[a(c,{dark:"",class:"bg-indigo"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Mpesa & Cash "),Cs,s("h5",Qs,d((t=o(l))==null?void 0:t.total_mpesa_cash_sales),1)]}),_:1})]),_:1})]),s("div",ws,[a(c,{dark:"",class:"bg-dark"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Debts "),Ps,s("h5",$s,d((t=o(l))==null?void 0:t.total_debt_sales),1)]}),_:1})]),_:1})]),s("div",Bs,[a(c,{dark:"",class:"bg-brown"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Card "),Ts,s("h5",Ds,d((t=o(l))==null?void 0:t.total_card_sales),1)]}),_:1})]),_:1})]),((i=o(l))==null?void 0:i.total_pending_sales)>0?(m(),x("div",Ns,[a(c,{dark:"",style:{"background-color":"red"}},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" No. of Pending Bills "),Ms,s("h5",Vs,d((t=o(l))==null?void 0:t.total_pending_sales),1)]}),_:1})]),_:1})])):f("",!0),((r=o(l))==null?void 0:r.total_daily_pending_sales)>0?(m(),x("div",zs,[a(c,{dark:"",style:{"background-color":"teal"}},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var t;return[_(" Purchases/Inventory "),As,s("h5",Is,d((t=o(l))==null?void 0:t.total_expense),1)]}),_:1})]),_:1})])):f("",!0)])]}),_:1})])]))}},Rs={class:"q-pa-sm"},Ys={__name:"Dashboard",setup(y){return(l,h)=>(m(),x("div",Rs,[a(Os),a(V)]))}};export{Ys as default};
