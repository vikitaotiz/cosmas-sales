import{co as i,cp as u}from"./index.5baec902.js";import{b as o,f as a}from"./helpers.dd8dddcc.js";const r=async(t,s)=>{const e=await fetch(`${o}/${s}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});return a(e.status),e.json()},c=async(t,s)=>{const e=await fetch(`${o}/${t}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`}});return a(e.status),e.json()},g=i("auth",{state:()=>({user:u()}),actions:{saveUser(t){localStorage.setItem("auth_user",JSON.stringify(t))},removeUser(){localStorage.removeItem("auth_user")},async login(t){const s=await r(t,"login");return this.saveUser(s),this.user=s,s},async register(t){const s=await r(t,"register");return this.saveUser(s),this.user=s,s},async logout(){var t,s;if((t=this.user)!=null&&t.token){const e=await c("logout",(s=this.user)==null?void 0:s.token);if(e.status==="success")return this.user=null,this.removeUser(),e}else alert("Logout. There was an error")}}});export{g as u};
