import{c8 as r,c9 as o}from"./index.7dfe8dfe.js";import{b as a}from"./helpers.a08a01a1.js";const t=async(e,s)=>(await fetch(`${a}/${s}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json(),l=r("auth",{state:()=>({user:o()}),actions:{saveUser(e){localStorage.setItem("auth_user",JSON.stringify(e))},removeUser(){localStorage.removeItem("auth_user")},async login(e){const s=await t(e,"login");return this.saveUser(s),this.user=s,s},async register(e){const s=await t(e,"register");return this.saveUser(s),this.user=s,s},async logout(){var e;(e=this.user)!=null&&e.token?(this.user=null,this.removeUser(),window.location.reload(!0)):alert("Logout. There was an error")}}});export{l as u};
