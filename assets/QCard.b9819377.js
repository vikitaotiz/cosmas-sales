import{c as t,bA as o,h as n,bB as d,g as l}from"./index.2c593591.js";const c={dark:{type:Boolean,default:null}};function i(a,r){return t(()=>a.dark===null?r.dark.isActive:a.dark)}var f=o({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:r}){const e=t(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>n(a.tag,{class:e.value},d(r.default))}}),k=o({name:"QCard",props:{...c,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:r}){const{proxy:{$q:e}}=l(),s=i(a,e),u=t(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>n(a.tag,{class:u.value},d(r.default))}});export{k as Q,i as a,f as b,c as u};
