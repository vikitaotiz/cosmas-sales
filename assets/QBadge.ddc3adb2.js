import{bA as o,c as a,h as r,bB as u,bN as d}from"./index.8a5a258d.js";var b=o({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const l=a(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>r("div",{class:l.value,role:"toolbar"},u(t.default))}});const s=["top","middle","bottom"];var c=o({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>s.includes(e)}},setup(e,{slots:t}){const l=a(()=>e.align!==void 0?{verticalAlign:e.align}:null),i=a(()=>{const n=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(n!==void 0?` text-${n}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>r("div",{class:i.value,style:l.value,role:"status","aria-label":e.label},d(t.default,e.label!==void 0?[e.label]:[]))}});export{c as Q,b as a};
