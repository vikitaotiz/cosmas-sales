import{c9 as a,c8 as n}from"./index.5192b47d.js";import{g as c,p as o}from"./module_calls.ce394ca6.js";const r=a(),e=r==null?void 0:r.token,u=n("debtors",{state:()=>({debtors:[]}),actions:{async fetchDebtors(){if(e){const t=await c("debtors",e);return this.debtors=t==null?void 0:t.data,this.debtors}},async createDebtor(t){var s;if(t.user_uuid=(s=r==null?void 0:r.user)==null?void 0:s.uuid,e)return await o(t,"debtors",e)},async updateDebtor(t){if(e)return await o(t,"update_debtor",e)},async deleteDebtor(t){if(e)return await o(t,"delete_debtor",e)}}});export{u};
