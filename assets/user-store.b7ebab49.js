import{co as c,c2 as n}from"./index.2bde107a.js";import{g as i,p as a}from"./module_calls.b67ca1a8.js";const t=c(),e=t==null?void 0:t.token,f=n("users",{state:()=>({users:[],access_granted:!1}),actions:{async fetchUsers(){if(e){const s=await i("users",e);return this.users=s==null?void 0:s.data,this.users}},async createUser(s){var r;if(s.user_uuid=(r=t==null?void 0:t.user)==null?void 0:r.uuid,e)return await a(s,"users",e)},async updateUser(s){if(e)return await a(s,"update_user",e)},async deleteUser(s){if(e)return await a(s,"delete_user",e)},async confirmAdmin(s){if(e)return await a(s,"confirm_admin",e)},async verifyAccessToken(s){if(e){const r=await a(s,"verify_access_token",e);return this.access_granted=r.access_granted,r}}}});export{f as u};
