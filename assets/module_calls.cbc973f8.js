import{u as $,a as h,c as l,f as u}from"./helpers.e1b33f8c.js";import{bA as f,c as n,h as y,g as _}from"./index.c2759519.js";const S={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},i={xs:2,sm:4,md:8,lg:16,xl:24};var x=f({name:"QSeparator",props:{...$,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(t){const s=_(),e=h(t,s.proxy.$q),a=n(()=>t.vertical===!0?"vertical":"horizontal"),o=n(()=>` q-separator--${a.value}`),d=n(()=>t.inset!==!1?`${o.value}-${S[t.inset]}`:""),m=n(()=>`q-separator${o.value}${d.value}`+(t.color!==void 0?` bg-${t.color}`:"")+(e.value===!0?" q-separator--dark":"")),g=n(()=>{const r={};if(t.size!==void 0&&(r[t.vertical===!0?"width":"height"]=t.size),t.spaced!==!1){const v=t.spaced===!0?`${i.md}px`:t.spaced in i?`${i[t.spaced]}px`:t.spaced,c=t.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${c[0]}`]=r[`margin${c[1]}`]=v}return r});return()=>y("hr",{class:m.value,style:g.value,"aria-orientation":a.value})}});const B=async(t,s)=>{const e=await fetch(`${l}/${t}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}});return u(e.status),e.json()},C=async(t,s,e)=>{const a=await fetch(`${l}/${s}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(t)});return u(a.status),a.json()};export{x as Q,B as g,C as p};
