import{b as s}from"./helpers.a08a01a1.js";const c=async(t,a)=>(await fetch(`${s}/${t}`,{headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}})).json(),i=async(t,a,e)=>(await fetch(`${s}/${a}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(t)})).json();export{c as g,i as p};
