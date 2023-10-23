import{c as t,bA as o,h as n,bB as s,g as l}from"./index.c2759519.js";const u={dark:{type:Boolean,default:null}};function i(a,e){return t(()=>a.dark===null?e.dark.isActive:a.dark)}var p=o({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:e}){const r=t(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>n(a.tag,{class:r.value},s(e.default))}}),v=o({name:"QCard",props:{...u,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:e}){const{proxy:{$q:r}}=l(),d=i(a,r),c=t(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>n(a.tag,{class:c.value},s(e.default))}});const b="https://deckarbk.gorvic.co.ke/laravel/public/api/v1",g=a=>{a===500&&(localStorage.removeItem("auth_user"),window.location.reload(!0))},h={url:"https://velvety-kangaroo-c5d86a.netlify.app",print_header:`
    <div style="text-align: center;">
    <b>DECKAR GRILLS AND LOUNGE</b>
    <p>Phone : 0710 980 300</p>
    <p>Nairobi, Ngara Opposite kcb Bank</p>
    </div>
`},k=a=>!!(a.length>0&&(a.some(e=>e.name==="Admin")||a.some(e=>e.name==="Cashier")));export{v as Q,i as a,p as b,b as c,h as d,g as f,k as h,u};
