import{cp as r,c1 as o}from"./index.b054ec4c.js";import{g as c,p as s}from"./module_calls.3f134fe6.js";const n=r(),e=n==null?void 0:n.token,d=o("departments",{state:()=>({departments:[]}),actions:{async fetchDepartments(){if(e){const t=await c("departments",e);return this.departments=t==null?void 0:t.data,this.departments}},async createDepartment(t){if(e){console.log(t);const a=await s(t,"departments",e);return console.log(a),a}},async updateDepartment(t){if(e)return await s(t,"update_department",e)},async deleteDepartment(t){if(e)return await s(t,"delete_department",e)}}});export{d as u};
