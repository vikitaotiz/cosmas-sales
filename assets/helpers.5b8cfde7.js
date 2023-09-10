import{c as r,bA as o,h as s,bB as n,g as i}from"./index.2bde107a.js";const l={dark:{type:Boolean,default:null}};function c(a,e){return r(()=>a.dark===null?e.dark.isActive:a.dark)}var m=o({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:e}){const t=r(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>s(a.tag,{class:t.value},n(e.default))}}),p=o({name:"QCard",props:{...l,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:e}){const{proxy:{$q:t}}=i(),d=c(a,t),u=r(()=>"q-card"+(d.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>s(a.tag,{class:u.value},n(e.default))}});const h="https://cosmas.missnadhifu.com/laravel/public/api/v1",v=a=>{a===500&&(localStorage.removeItem("auth_user"),window.location.reload(!0))},b={url:"https://velvety-kangaroo-c5d86a.netlify.app",print_header:`
    <div style="text-align: center;">
    <b>DECKAR GRILLS AND LOUNGE</b>
    <p>Phone : 0710 980 300</p>
    <p>Nairobi, Ngara Opposite kcb Bank</p>
    </div>
`},g=a=>!!(a.length>0&&(a.some(e=>e.name==="Admin")||a.some(e=>e.name==="Cashier")));export{p as Q,c as a,m as b,h as c,b as d,v as f,g as h,l as u};
