import{c9 as n,c8 as m}from"./index.8a5a258d.js";import{g as d,p as o}from"./module_calls.15f10b55.js";const a=n(),t=a==null?void 0:a.token,y=m("payment_modes",{state:()=>({payment_modes:[]}),actions:{async fetchPaymentModes(){if(t){const e=await d("payment_modes",t);return this.payment_modes=e==null?void 0:e.data,this.payment_modes}},async createPaymentMode(e){var s;if(e.uuid=(s=a==null?void 0:a.user)==null?void 0:s.uuid,t)return await o(e,"payment_modes",t)},async updatePaymentMode(e){if(t)return await o(e,"update_payment_mode",t)},async deletePaymentMode(e){if(t)return await o(e,"delete_payment_mode",t)}}});export{y as u};
