import{Q as w}from"./QPage.96d83e5e.js";import{a as o,Q as n}from"./QCard.6ff2e071.js";import{g as i}from"./get-css-var.23548d6a.js";import{u as f}from"./index.4a9dc183.js";import{u as $}from"./sale-store.e0ff833e.js";import{j as k,r as S,aQ as C,aI as h,a3 as q,bb as e,d as a,a6 as t,a5 as x,bD as v,ac as c,P as r,u as _,a4 as y}from"./index.1c2f9869.js";import{u as Q}from"./account-store.bc557781.js";import{Q as b}from"./QSeparator.5f84a562.js";import"./use-dark.33cf118d.js";import"./module_calls.ce394ca6.js";import"./helpers.838b61bb.js";const B={__name:"BarChart",setup(p){const l=$(),m=k({title:{text:"Sales Records for the last seven days",align:"left"},chart:{id:"apex-column"},colors:[i("primary"),i("secondary"),i("negative")],xaxis:{categories:[]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}}}),u=S([{name:"Sales",data:[]}]);return f("sales",()=>l.fetchSevenDaysSales(),{onSuccess:d=>{console.log(d.some(s=>s.sales>0)),m.xaxis.categories=d.map(s=>s.day),u.value[0].data=d.map(s=>s.sales)}}),(d,s)=>{const g=C("apexchart");return h(),q(o,{class:"q-pa-sm"},{default:e(()=>[a(g,{height:"300",type:"bar",options:m,series:u.value},null,8,["options","series"])]),_:1})}}},P={__name:"PieChart",setup(p){const l=Q();f("product_sales",()=>l.fetchProductSales(),{onSuccess:d=>{u.value=d.map(s=>s.quantity),m.labels=d.map(s=>s.name)}});const m=k({title:{text:"Todays Product Sales",align:"left"},chart:{id:"apex-donut"},colors:[i("secondary"),i("accent"),i("positive"),i("primary"),i("negative"),i("info")],markers:{size:4,hover:{sizeOffset:6}},labels:[]}),u=S([]);return(d,s)=>{const g=C("apexchart");return h(),q(o,null,{default:e(()=>[a(n,null,{default:e(()=>[a(g,{height:"300",type:"pie",options:m,series:u.value},null,8,["options","series"])]),_:1})]),_:1})}}},D={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},N={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},T={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},M={__name:"Main",setup(p){return(l,m)=>(h(),q(w,null,{default:e(()=>[t("div",D,[t("div",N,[a(B)]),t("div",T,[a(P)])])]),_:1}))}},V={class:"row q-col-gutter-sm q-ml-xs q-mr-sm q-py-sm"},z={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},A={class:"text-center q-pa-sm"},I={style:{color:"#017951"}},O={class:"row q-pa-sm"},j={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},E=t("hr",null,null,-1),R={class:"q-ma-sm"},W={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},F=t("hr",null,null,-1),G={class:"q-ma-sm"},H={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},J=t("hr",null,null,-1),K={class:"q-ma-sm"},L={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},U=t("hr",null,null,-1),X={class:"q-ma-sm"},Y={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Z=t("hr",null,null,-1),ss={class:"q-ma-sm"},ts={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},as=t("hr",null,null,-1),es={class:"q-ma-sm"},ls={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},os=t("hr",null,null,-1),cs={class:"q-ma-sm"},_s={class:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},ns={class:"text-center q-pa-sm"},ds={style:{color:"#017951"}},rs={class:"row q-pa-sm"},is={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},ms=t("hr",null,null,-1),hs={class:"q-ma-sm"},us={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},ps=t("hr",null,null,-1),xs={class:"q-ma-sm"},fs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},gs=t("hr",null,null,-1),qs={class:"q-ma-sm"},vs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},ys=t("hr",null,null,-1),bs={class:"q-ma-sm"},ks={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Ss=t("hr",null,null,-1),Cs={class:"q-ma-sm"},Qs={class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},ws=t("hr",null,null,-1),$s={class:"q-ma-sm"},Bs={key:0,class:"q-pa-xs col-xs-12 col-sm-6 col-md-4"},Ps=t("hr",null,null,-1),Ds={class:"q-ma-sm"},Ns={__name:"Stats",setup(p){const l=Q();return f("account_stats_today",()=>l.fetchTodaySalesStats()),f("account_stats_all",()=>l.fetchAllSalesStats()),(m,u)=>(h(),x("div",V,[t("div",z,[a(o,null,{default:e(()=>{var d;return[t("div",A,[t("b",I,[a(v,{name:"grain"}),c(" Today Sales")])]),a(b,{color:"primary"}),t("div",O,[t("div",j,[a(o,{dark:"",class:"bg-primary"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Total "),E,t("h5",R,r((s=_(l))==null?void 0:s.total_daily_sales),1)]}),_:1})]),_:1})]),t("div",W,[a(o,{dark:"",class:"bg-info"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Cash "),F,t("h5",G,r((s=_(l))==null?void 0:s.total_daily_cash_sales),1)]}),_:1})]),_:1})]),t("div",H,[a(o,{dark:"",class:"bg-warning"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Mpesa "),J,t("h5",K,r((s=_(l))==null?void 0:s.total_daily_mpesa_sales),1)]}),_:1})]),_:1})]),t("div",L,[a(o,{dark:"",class:"bg-indigo"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Mpesa & Cash "),U,t("h5",X,r((s=_(l))==null?void 0:s.total_daily_mpesa_cash_sales),1)]}),_:1})]),_:1})]),t("div",Y,[a(o,{dark:"",class:"bg-dark"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Debts "),Z,t("h5",ss,r((s=_(l))==null?void 0:s.total_daily_debt_sales),1)]}),_:1})]),_:1})]),t("div",ts,[a(o,{dark:"",class:"bg-brown"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Card "),as,t("h5",es,r((s=_(l))==null?void 0:s.total_daily_card_sales),1)]}),_:1})]),_:1})]),((d=_(l))==null?void 0:d.total_daily_pending_sales)>0?(h(),x("div",ls,[a(o,{dark:"",style:{"background-color":"red"}},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" No. of Pending Bills "),os,t("h5",cs,r((s=_(l))==null?void 0:s.total_daily_pending_sales),1)]}),_:1})]),_:1})])):y("",!0)])]}),_:1})]),t("div",_s,[a(o,null,{default:e(()=>{var d;return[t("div",ns,[t("b",ds,[a(v,{name:"grain"}),c(" All Sales")])]),a(b,{color:"primary"}),t("div",rs,[t("div",is,[a(o,{dark:"",class:"bg-primary"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Total "),ms,t("h5",hs,r((s=_(l))==null?void 0:s.total_sales),1)]}),_:1})]),_:1})]),t("div",us,[a(o,{dark:"",class:"bg-info"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Cash "),ps,t("h5",xs,r((s=_(l))==null?void 0:s.total_cash_sales),1)]}),_:1})]),_:1})]),t("div",fs,[a(o,{dark:"",class:"bg-warning"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Mpesa "),gs,t("h5",qs,r((s=_(l))==null?void 0:s.total_mpesa_sales),1)]}),_:1})]),_:1})]),t("div",vs,[a(o,{dark:"",class:"bg-indigo"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Mpesa & Cash "),ys,t("h5",bs,r((s=_(l))==null?void 0:s.total_mpesa_cash_sales),1)]}),_:1})]),_:1})]),t("div",ks,[a(o,{dark:"",class:"bg-dark"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Debts "),Ss,t("h5",Cs,r((s=_(l))==null?void 0:s.total_debt_sales),1)]}),_:1})]),_:1})]),t("div",Qs,[a(o,{dark:"",class:"bg-brown"},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" Card "),ws,t("h5",$s,r((s=_(l))==null?void 0:s.total_card_sales),1)]}),_:1})]),_:1})]),((d=_(l))==null?void 0:d.total_pending_sales)>0?(h(),x("div",Bs,[a(o,{dark:"",style:{"background-color":"red"}},{default:e(()=>[a(n,{class:"text-center"},{default:e(()=>{var s;return[c(" No. of Pending Bills "),Ps,t("h5",Ds,r((s=_(l))==null?void 0:s.total_pending_sales),1)]}),_:1})]),_:1})])):y("",!0)])]}),_:1})])]))}},Ts={class:"q-pa-sm"},Gs={__name:"Dashboard",setup(p){return(l,m)=>(h(),x("div",Ts,[a(Ns),a(M)]))}};export{Gs as default};
