if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let i={};const r=e=>a(e,d),b={module:{uri:d},exports:i,require:r};s[d]=Promise.all(c.map((e=>b[e]||r(e)))).then((e=>(f(...e),i)))}}define(["./workbox-57ffaad5"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Sales App"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_commonjsHelpers.6150b38b.js",revision:"bbbfbda0bc651a8749bd8a2cb8248723"},{url:"assets/account-store.6730f1fb.js",revision:"e2d7c75df1b722ca722592b3f3cf04af"},{url:"assets/Accounts.42f96a72.js",revision:"5d22aab851e3d7ebf933bf66d4bd9309"},{url:"assets/Accounts.9d2ea7f7.css",revision:"30f84685a5dbe973f677124f83adc255"},{url:"assets/apexcharts.44860d77.js",revision:"c6a526a4da9e22e46b4033b206522c81"},{url:"assets/auth-store.ef9abd0b.js",revision:"4bc14e96e7c8c0f8eaf2788eeda05298"},{url:"assets/Bills.0708f4af.css",revision:"39eb7cc10869d8c9a87905c392b255fb"},{url:"assets/Bills.23ff1b1c.js",revision:"df6f977955a44c604250078d4d278055"},{url:"assets/Categories.dc119fb3.js",revision:"b0e5db0da7a5f9409fb5635122b94055"},{url:"assets/category-store.9b7db71e.js",revision:"2d450ed5464349a817792103750525c6"},{url:"assets/ClearBills.32f4e4c5.css",revision:"e515f51164df4a3d0846134acde7467b"},{url:"assets/ClearBills.8813496f.js",revision:"bc8dd9c0e26966a22904a303f8ed6793"},{url:"assets/Dashboard.869f92ac.js",revision:"98a855f0aa886c7290a1b42ba2271eda"},{url:"assets/debtor-store.5a142bf9.js",revision:"4ef513263f6f8b1a052c63bb138a0c7d"},{url:"assets/Debtors.4b6cc486.js",revision:"0a208b1b947da469804d2cb2b46019c8"},{url:"assets/department-store.06b396bf.js",revision:"bbf5c63c9ca2ed299db8eb146f4b1bce"},{url:"assets/Departments.0f6e4f6b.css",revision:"1b9fa9c04684bbddc9f9d0737b30f736"},{url:"assets/Departments.dcfca914.js",revision:"234ca3ea97a19b1dfdff9f520d2a3fff"},{url:"assets/ErrorNotFound.65e8792d.js",revision:"65fe613e074924246917d2458f520cdb"},{url:"assets/excel.5d19a2ad.js",revision:"77fb090d3037a52c00e338427daca2e4"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/get-css-var.23548d6a.js",revision:"629996a45af999de0e46c8d5cb75118e"},{url:"assets/helpers.6bffaf79.js",revision:"5d532c2c3a0ba6a09a2163fa8f484b9e"},{url:"assets/i18n.10ddea0b.js",revision:"50061fc49f5230db9f87ce19cf576dca"},{url:"assets/index.8a5a258d.js",revision:"cab7edf323cfae8e779771fb7d80e3d8"},{url:"assets/index.a1f05259.css",revision:"d3efb8cdfb9bbdb1a23940f5159cd829"},{url:"assets/index.b66eac6f.js",revision:"0228fe3b949d68e72ae4c739c766323e"},{url:"assets/IndexPage.748cedec.js",revision:"c25503152aeb3f5c3e436eae3d32bebb"},{url:"assets/Inventories.1e8e82c1.js",revision:"ff54d4723bff7a0a4e4582259183750d"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.43455a89.js",revision:"1bbf9bf40d0cf7ed95c7bf409aa782f3"},{url:"assets/MainLayout.a484da74.css",revision:"6f7ba3f347e57f3ab5051ebfc88f838a"},{url:"assets/measurement-store.eaea9818.js",revision:"6ac0d28f6b49d0ef12f784849ef0376c"},{url:"assets/Measurements.24c9b2cd.js",revision:"bde6ad6411bd8d75cb8c2d656b227002"},{url:"assets/module_calls.15f10b55.js",revision:"36820e78f6c34b106a64dd0c44967f5f"},{url:"assets/Operations.24c6543d.js",revision:"5db65696ee65b45612ae83ea955a2a16"},{url:"assets/Operations.9a7e6950.css",revision:"ce31dca255c0f41d4047da7f67bafbd3"},{url:"assets/paginations.00c89366.js",revision:"71ebf9fc138e354c9a5e92243bde7fc9"},{url:"assets/payment-mode-store.71f7c751.js",revision:"36c267cd8d1bdf99ee82e1d7d541de12"},{url:"assets/PaymentModes.6a321aa2.js",revision:"78604e6a0d686ec56f171e477bac6d8e"},{url:"assets/print.15699711.js",revision:"abe379d645caa0630d928b5a4081d7cb"},{url:"assets/product_columns.133b4496.js",revision:"d37ede8dce4c781b412f6afc76878599"},{url:"assets/product-store.8f9abd4e.js",revision:"e4733866905a671b9a36eb21e82082ed"},{url:"assets/Products.50055da3.js",revision:"50d619d3cdce561beda346449727f78a"},{url:"assets/QBadge.ddc3adb2.js",revision:"623900c43043eea5eea3577901df754b"},{url:"assets/QBtnGroup.00f372bf.js",revision:"6ab082cf8fdcb976addf7f990e3ae09a"},{url:"assets/QCard.d9eb0603.js",revision:"9422314c7be18ceef7b3f7c74f80fa80"},{url:"assets/QInput.a0f631c3.js",revision:"09f69b056b1b00e55494a9d9b1ff17ff"},{url:"assets/QPage.37b77016.js",revision:"070b67da62323279515d918dbb50d1d0"},{url:"assets/QSeparator.fff9a372.js",revision:"da55e99cb466a996931e0b1ce3196a34"},{url:"assets/QTr.9d8d6465.js",revision:"eaf1594ccc111a74365539ffc7da8e9a"},{url:"assets/receipt.a2190c3f.js",revision:"379b4943a151860f4af11c25d8726b2a"},{url:"assets/role-store.95d0c950.js",revision:"ce13c4187bb949be0b11bd7d57e9a79f"},{url:"assets/Roles.a35fb3a4.js",revision:"0c835cebb40552b6c4e763351def6269"},{url:"assets/rtl.38842e2d.js",revision:"f2a4dc4d5a02ad5b6ea700a6aec191a2"},{url:"assets/sale-store.ad95ed48.js",revision:"d276e84fe5cd23214e5ac18b263aab64"},{url:"assets/Sales.f03ad70b.js",revision:"d598e6c2d28c583bb87f9d238d901b1b"},{url:"assets/Settings.9a3992b7.css",revision:"b6a28011bad426daff7e7cea2bf1cb76"},{url:"assets/Settings.9b27c7f0.js",revision:"7701c5b53a60305dc03c7aa0c5ceffab"},{url:"assets/SystemTrash.b0ffdcd8.js",revision:"0800adf89d1722ea2833b518701f2cb8"},{url:"assets/use-dark.d9cdc187.js",revision:"607c5b366f805f48c3bb2d44e0663fa3"},{url:"assets/use-quasar.1769aac5.js",revision:"833d49188d1788ee5a6d59ebdb7b1176"},{url:"assets/Users.08e92f7d.js",revision:"599cb97e2b8223316a7ce46f3224d888"},{url:"assets/vuequery.905ad92a.js",revision:"27313e72d1839b8ebae09336612accdd"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"dd751ac1dcc4fe17743f5f7fbbd7dc9a"},{url:"manifest.json",revision:"9eab088331496f37250d3bc0aa47ed6b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
