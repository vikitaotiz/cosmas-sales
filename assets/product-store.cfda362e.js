import{cd as u,cc as d}from"./index.821cda5b.js";import{g as a,p as c}from"./module_calls.52760843.js";const r=u(),s=r==null?void 0:r.token,p=d("products",{state:()=>({products:[]}),actions:{async fetchProducts(){if(s){const t=await a("products",s);return this.products=t==null?void 0:t.data,this.products}},async createProduct(t){var e;if(t.user_uuid=(e=r==null?void 0:r.user)==null?void 0:e.uuid,s)return await c(t,"products",s)},async updateProduct(t){var e;if(t.user_uuid=(e=r==null?void 0:r.user)==null?void 0:e.uuid,s)return await c(t,"update_product",s)},async deleteProduct(t){if(s)return await c(t,"delete_product",s)}}});export{p as u};
