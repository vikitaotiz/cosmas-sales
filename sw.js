if(!self.define){let s,e={};const a=(a,c)=>(a=new URL(a+".js",c).href,e[a]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=a,s.onload=e,document.head.appendChild(s)}else s=a,importScripts(a),e()})).then((()=>{let s=e[a];if(!s)throw new Error(`Module ${a} didn’t register its module`);return s})));self.define=(c,f)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let r={};const b=s=>a(s,i),d={module:{uri:i},exports:r,require:b};e[i]=Promise.all(c.map((s=>d[s]||b(s)))).then((s=>(f(...s),r)))}}define(["./workbox-57ffaad5"],(function(s){"use strict";s.setCacheNameDetails({prefix:"Sales App"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/_commonjsHelpers.6150b38b.js",revision:"bbbfbda0bc651a8749bd8a2cb8248723"},{url:"assets/account-store.f1a1a836.js",revision:"6fe7b0b903c9a64f9465677ec9e236f4"},{url:"assets/Accounts.9d2ea7f7.css",revision:"30f84685a5dbe973f677124f83adc255"},{url:"assets/Accounts.be1899b0.js",revision:"d6aa471ecdb8ce2df1f92b1850fc893f"},{url:"assets/apexcharts.f626ad71.js",revision:"f39e4ac4d3fd7553461032a1a502e234"},{url:"assets/auth-store.11386c0b.js",revision:"471e4f15f5c173ec273d7e1609f1d38c"},{url:"assets/Bills.04cdeb9c.css",revision:"f453eca47b5b308baa474ca2daf4095a"},{url:"assets/Bills.9ba22852.js",revision:"fb4ac2c8bc87519a8d6e3b586a8bca3d"},{url:"assets/Categories.72afae37.js",revision:"83e73a6d0bda3c95b4e8862f0951c46c"},{url:"assets/category-store.bf956c8f.js",revision:"005e3991e470cd62c1cdd3d8a285a60f"},{url:"assets/ClearBills.a9ee9217.js",revision:"cc4651dab4abe2119276e95be2c25ccf"},{url:"assets/ClearBills.c623ab94.css",revision:"9ad0b66225c44ef1af8b64bc5a881f99"},{url:"assets/Dashboard.f1c8eeb9.js",revision:"b68bb3bde7fffdf93c92b736cfcf289d"},{url:"assets/debtor-store.056ec889.js",revision:"1e087304e7cbdebd548aebc6088d7200"},{url:"assets/Debtors.3df87c79.js",revision:"aed5bf8debfc62ed1be2d6716f12f839"},{url:"assets/department-store.c9f6c14f.js",revision:"474902d702b5171e00163eb7f7fd81e7"},{url:"assets/Departments.de359b1a.js",revision:"43c18b0c96842ead19916c5482886649"},{url:"assets/ErrorNotFound.c0648a91.js",revision:"9b8eb63a27ade6e97dd30219868ce9d6"},{url:"assets/excel.5d19a2ad.js",revision:"77fb090d3037a52c00e338427daca2e4"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/get-css-var.23548d6a.js",revision:"629996a45af999de0e46c8d5cb75118e"},{url:"assets/helpers.838b61bb.js",revision:"dc7aaa50196b267d4e26c74a90eaf8ee"},{url:"assets/i18n.57ed10c5.js",revision:"06a98279116a148694f32ce0c54adff4"},{url:"assets/index.13bc05b7.js",revision:"caa66c9c770374ed642def1e7816349e"},{url:"assets/index.a1f05259.css",revision:"d3efb8cdfb9bbdb1a23940f5159cd829"},{url:"assets/index.ebf3a940.js",revision:"f09e9ef3b8b00dab16be8cb755009bf8"},{url:"assets/IndexPage.ad613c63.js",revision:"111ca415a2e5418a0c6dd9583613c016"},{url:"assets/Inventories.dd281cf2.js",revision:"e3d67a2de81a2fd19cec71bf9904260c"},{url:"assets/Inventories.ef4c3598.css",revision:"1b9fa9c04684bbddc9f9d0737b30f736"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.034c2d50.js",revision:"43504422f357a8c694627d77d081208d"},{url:"assets/MainLayout.a484da74.css",revision:"6f7ba3f347e57f3ab5051ebfc88f838a"},{url:"assets/measurement-store.15010beb.js",revision:"a9c1be19955d70f4516f2792dc4b92ca"},{url:"assets/Measurements.b40af66d.js",revision:"e880cb37cfc0f91e0a3d452621c2117e"},{url:"assets/module_calls.ce394ca6.js",revision:"c6282fadfcc8ff485a0e545bbeb50295"},{url:"assets/Operations.3ad9dc60.js",revision:"4aaf4ba79b723b1e0877a8230ea88cb0"},{url:"assets/Operations.9a7e6950.css",revision:"ce31dca255c0f41d4047da7f67bafbd3"},{url:"assets/payment-mode-store.a158081c.js",revision:"36c4732d051b3aced0f4b49379e7df85"},{url:"assets/PaymentModes.f13e3b38.js",revision:"0ef9f398c2f7f21c38f8b9aba7be89c0"},{url:"assets/print.15699711.js",revision:"abe379d645caa0630d928b5a4081d7cb"},{url:"assets/product_columns.133b4496.js",revision:"d37ede8dce4c781b412f6afc76878599"},{url:"assets/product-store.2d0ab62f.js",revision:"7f9ccbaf8da84fc50c6423bc930a7cc5"},{url:"assets/Products.fb6638af.js",revision:"8080e1449b0758947c4cac63bcb6a348"},{url:"assets/QBadge.938153fd.js",revision:"d09287f121ac4861f736c4253c31b5ce"},{url:"assets/QBtnGroup.39a24a44.js",revision:"b30545afcfaa2e7b63e869aaf943b934"},{url:"assets/QCard.5b9a26b3.js",revision:"6cff66197e4ad2f6ba35229bc1366b7c"},{url:"assets/QCardActions.7e5ffdc1.js",revision:"d3bf6c454a30ee47b35531964b36bfd1"},{url:"assets/QInput.188cdb65.js",revision:"b426119b4580f773e49d3f65365d3503"},{url:"assets/QPage.a47f33e5.js",revision:"b30c1444e1a4d1fed7ef295519fcb519"},{url:"assets/QSeparator.b84916d7.js",revision:"a1a1b4815954a136193358436f2b5abd"},{url:"assets/QTr.b3d431e3.js",revision:"137ba70a7360841b809b078f7dbc18a4"},{url:"assets/receipt.a2190c3f.js",revision:"379b4943a151860f4af11c25d8726b2a"},{url:"assets/role-store.1967a369.js",revision:"c633df87695b45f485edf9b45d7f0037"},{url:"assets/Roles.fce15c2f.js",revision:"3ca466065ec8122d513d860a1378d765"},{url:"assets/rtl.37beae6a.js",revision:"91127fc7fbf6380cf75ba4d1f11a54aa"},{url:"assets/sale-store.abf37180.js",revision:"f6316af8aa26c38e5cbca86e3cf90330"},{url:"assets/Sales.034652fe.js",revision:"f37b74e5e316676098ab09b157dab809"},{url:"assets/Settings.9a3992b7.css",revision:"b6a28011bad426daff7e7cea2bf1cb76"},{url:"assets/Settings.9dbd065b.js",revision:"e1195a710823bda1112a9cbbd076b911"},{url:"assets/SystemTrash.94638edc.js",revision:"0f21ace45d0192507e8fe7b9ee988005"},{url:"assets/use-dark.764e0cc6.js",revision:"c993ea5d2a8c856b4c0a0ff7e5243ab3"},{url:"assets/use-quasar.73db4cf5.js",revision:"d619a3d98863998fd382df2409a5f33f"},{url:"assets/Users.b924473d.js",revision:"36d736709af2f81eccd21d22f0162576"},{url:"assets/vuequery.293bbe4c.js",revision:"655bb683907ad7e87c77492a0316bc89"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"489c31e77b3723d6aad601129d3ecc99"},{url:"manifest.json",revision:"9eab088331496f37250d3bc0aa47ed6b"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
